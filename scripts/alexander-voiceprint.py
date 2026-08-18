#!/usr/bin/env python3
"""Build and use a local, incremental voiceprint for Alexander.

The classifier is deliberately binary: Alexander vs. anybody else. Negative
examples are stored only as anonymous hard negatives. The model and voicebank
live under .local/ and must never be committed.
"""

from __future__ import annotations

import argparse
from datetime import datetime, timezone
import json
from pathlib import Path
import subprocess
import sys
import urllib.request

import numpy as np

try:
    import kaldi_native_fbank as knf
    import onnxruntime as ort
except ImportError as exc:
    raise SystemExit(
        "Missing local voice dependencies. Run this script with "
        ".local/voice-tools-venv/bin/python."
    ) from exc


PROJECT_ROOT = Path(__file__).resolve().parents[1]
SAMPLE_RATE = 16_000
MODEL_URL = (
    "https://huggingface.co/Wespeaker/wespeaker-ecapa-tdnn512-LM/resolve/"
    "main/voxceleb_ECAPA512_LM.onnx?download=true"
)
DEFAULT_MODEL = (
    PROJECT_ROOT
    / ".local/models/wespeaker-ecapa-tdnn512-LM/voxceleb_ECAPA512_LM.onnx"
)
DEFAULT_BANK = PROJECT_ROOT / ".local/alexander-voicebank"
DEFAULT_LABEL_ROOT = PROJECT_ROOT / ".local/speaker-labeler/qgUZ2DdaQ7c"


def utc_now() -> str:
    return datetime.now(timezone.utc).isoformat()


def atomic_json(path: Path, value: object) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(
        json.dumps(value, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    temporary.replace(path)


def ensure_model(path: Path) -> None:
    if path.exists() and path.stat().st_size > 1_000_000:
        return
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + ".download")
    print(f"Downloading WeSpeaker ECAPA model to {path}", file=sys.stderr)
    urllib.request.urlretrieve(MODEL_URL, temporary)
    temporary.replace(path)


def decode_audio(path: Path) -> np.ndarray:
    command = [
        "ffmpeg",
        "-v",
        "error",
        "-i",
        str(path),
        "-ac",
        "1",
        "-ar",
        str(SAMPLE_RATE),
        "-f",
        "f32le",
        "pipe:1",
    ]
    process = subprocess.run(command, check=True, stdout=subprocess.PIPE)
    samples = np.frombuffer(process.stdout, dtype="<f4").astype(np.float32)
    if samples.size < SAMPLE_RATE // 2:
        raise ValueError(f"Audio is too short for a voice embedding: {path}")
    return samples


def compute_fbank(samples: np.ndarray) -> np.ndarray:
    options = knf.FbankOptions()
    options.frame_opts.samp_freq = SAMPLE_RATE
    options.frame_opts.frame_length_ms = 25.0
    options.frame_opts.frame_shift_ms = 10.0
    options.frame_opts.dither = 0.0
    options.frame_opts.window_type = "hamming"
    options.mel_opts.num_bins = 80
    options.use_energy = False

    extractor = knf.OnlineFbank(options)
    extractor.accept_waveform(SAMPLE_RATE, samples.tolist())
    extractor.input_finished()
    frame_count = extractor.num_frames_ready
    if frame_count < 10:
        raise ValueError("Not enough voiced audio frames for a reliable embedding")
    features = np.asarray(
        [extractor.get_frame(index) for index in range(frame_count)],
        dtype=np.float32,
    )
    features -= features.mean(axis=0, keepdims=True)
    return features


class VoiceEmbedder:
    def __init__(self, model_path: Path) -> None:
        ensure_model(model_path)
        options = ort.SessionOptions()
        options.inter_op_num_threads = 1
        options.intra_op_num_threads = 1
        self.session = ort.InferenceSession(
            str(model_path),
            sess_options=options,
            providers=["CPUExecutionProvider"],
        )
        self.input_name = self.session.get_inputs()[0].name
        self.output_name = self.session.get_outputs()[0].name

    def extract(self, samples: np.ndarray) -> np.ndarray:
        features = compute_fbank(samples)[None, :, :]
        embedding = self.session.run(
            [self.output_name], {self.input_name: features}
        )[0][0].astype(np.float32)
        norm = float(np.linalg.norm(embedding))
        if norm == 0.0:
            raise ValueError("The speaker model returned an empty embedding")
        return embedding / norm

    def extract_path(self, path: Path) -> np.ndarray:
        return self.extract(decode_audio(path))


def top_mean(values: np.ndarray, count: int = 3) -> float:
    if values.size == 0:
        return -1.0
    count = min(count, values.size)
    return float(np.sort(values)[-count:].mean())


def voice_scores(
    embedding: np.ndarray,
    positives: np.ndarray,
    negatives: np.ndarray,
) -> dict[str, float]:
    positive_similarity = top_mean(positives @ embedding)
    negative_similarity = top_mean(negatives @ embedding)
    return {
        "positive_similarity": positive_similarity,
        "negative_similarity": negative_similarity,
        "margin": positive_similarity - negative_similarity,
    }


def best_boundary(positive_values: np.ndarray, negative_values: np.ndarray) -> float:
    combined = np.unique(np.concatenate([positive_values, negative_values]))
    if combined.size == 1:
        return float(combined[0])
    candidates = [float(combined[0] - 1e-6)]
    candidates.extend(float((left + right) / 2) for left, right in zip(combined, combined[1:]))
    candidates.append(float(combined[-1] + 1e-6))

    best = None
    for threshold in candidates:
        true_positive = int(np.sum(positive_values >= threshold))
        false_negative = int(np.sum(positive_values < threshold))
        false_positive = int(np.sum(negative_values >= threshold))
        true_negative = int(np.sum(negative_values < threshold))
        precision = true_positive / max(1, true_positive + false_positive)
        recall = true_positive / max(1, true_positive + false_negative)
        specificity = true_negative / max(1, true_negative + false_positive)
        beta_squared = 0.25
        f_half = (
            (1 + beta_squared) * precision * recall
            / max(1e-9, beta_squared * precision + recall)
        )
        rank = (f_half, precision, specificity, recall, threshold)
        if best is None or rank > best[0]:
            best = (rank, threshold)
    assert best is not None
    return float(best[1])


def calibrate(positives: np.ndarray, negatives: np.ndarray) -> dict[str, object]:
    if len(positives) < 3 or len(negatives) < 3:
        raise ValueError("At least three Alexander and three other samples are required")

    positive_rows = []
    for index, embedding in enumerate(positives):
        positive_rows.append(
            voice_scores(embedding, np.delete(positives, index, axis=0), negatives)
        )

    negative_rows = []
    for index, embedding in enumerate(negatives):
        negative_rows.append(
            voice_scores(embedding, positives, np.delete(negatives, index, axis=0))
        )

    positive_margins = np.asarray([row["margin"] for row in positive_rows])
    negative_margins = np.asarray([row["margin"] for row in negative_rows])
    positive_similarities = np.asarray(
        [row["positive_similarity"] for row in positive_rows]
    )
    negative_similarities = np.asarray(
        [row["positive_similarity"] for row in negative_rows]
    )

    margin_boundary = best_boundary(positive_margins, negative_margins)
    similarity_boundary = best_boundary(positive_similarities, negative_similarities)
    margin_band = max(0.015, float(np.std(np.concatenate([positive_margins, negative_margins]))) * 0.12)
    similarity_band = max(
        0.015,
        float(np.std(np.concatenate([positive_similarities, negative_similarities]))) * 0.10,
    )

    result: dict[str, object] = {
        "method": "leave-one-out top-3 cosine with precision-weighted boundary",
        "alexander_margin": margin_boundary + margin_band,
        "other_margin": margin_boundary - margin_band,
        "alexander_similarity": similarity_boundary + similarity_band,
        "other_similarity": similarity_boundary - similarity_band,
        "positive_margin_p10": float(np.percentile(positive_margins, 10)),
        "negative_margin_p90": float(np.percentile(negative_margins, 90)),
        "positive_similarity_p10": float(np.percentile(positive_similarities, 10)),
        "negative_similarity_p90": float(np.percentile(negative_similarities, 90)),
    }

    labels = []
    for expected, rows in (("alexander", positive_rows), ("other", negative_rows)):
        for row in rows:
            labels.append((expected, classify_scores(row, result)))
    result["leave_one_out"] = {
        "correct": sum(expected == actual for expected, actual in labels),
        "uncertain": sum(actual == "uncertain" for _, actual in labels),
        "false_alexander": sum(
            expected == "other" and actual == "alexander" for expected, actual in labels
        ),
        "false_other": sum(
            expected == "alexander" and actual == "other" for expected, actual in labels
        ),
        "total": len(labels),
    }
    return result


def classify_scores(scores: dict[str, float], calibration: dict[str, object]) -> str:
    if (
        scores["margin"] >= float(calibration["alexander_margin"])
        and scores["positive_similarity"]
        >= float(calibration["alexander_similarity"])
    ):
        return "alexander"
    if (
        scores["margin"] <= float(calibration["other_margin"])
        or scores["positive_similarity"] <= float(calibration["other_similarity"])
    ):
        return "other"
    return "uncertain"


def load_existing_bank(bank_root: Path) -> dict[str, tuple[str, float, np.ndarray]]:
    bank_path = bank_root / "voicebank.npz"
    if not bank_path.exists():
        return {}
    data = np.load(bank_path)
    result = {}
    for label in ("positive", "negative"):
        ids = data[f"{label}_ids"]
        durations = data[f"{label}_durations"]
        embeddings = data[f"{label}_embeddings"]
        semantic_label = "alexander" if label == "positive" else "other"
        for source_id, duration, embedding in zip(ids, durations, embeddings):
            result[str(source_id)] = (
                semantic_label,
                float(duration),
                embedding.astype(np.float32),
            )
    return result


def build_bank(args: argparse.Namespace) -> None:
    model_path = Path(args.model).resolve()
    bank_root = Path(args.bank).resolve()
    samples = load_existing_bank(bank_root)
    removed_anonymous_other = 0
    for video_id in args.drop_negative_source:
        prefix = f"{video_id}:"
        for source_id in list(samples):
            label, _, _ = samples[source_id]
            if label == "other" and source_id.startswith(prefix):
                del samples[source_id]
                removed_anonymous_other += 1
    embedder = VoiceEmbedder(model_path)
    added = 0
    review_comparisons = []

    for root_value in args.labels_root:
        label_root = Path(root_value).resolve()
        labels_document = json.loads((label_root / "labels.json").read_text(encoding="utf-8"))
        manifest = json.loads((label_root / "manifest.json").read_text(encoding="utf-8"))
        labels = labels_document["labels"]
        video_id = manifest["videoId"]
        for item in manifest["items"]:
            label = labels.get(item["id"])
            initial_prediction = item.get("initialPrediction")
            if label and initial_prediction:
                review_comparisons.append((initial_prediction, label))
            if label not in {"alexander", "other"}:
                continue
            if args.positive_only and label == "other":
                continue
            source_id = f"{video_id}:{item['id']}"
            if source_id in samples and not args.replace:
                continue
            audio_path = label_root / item["audio"]
            samples[source_id] = (
                label,
                float(item.get("duration", 0.0)),
                embedder.extract_path(audio_path),
            )
            added += 1

    positive_records = sorted(
        ((source_id, duration, embedding) for source_id, (label, duration, embedding) in samples.items() if label == "alexander"),
        key=lambda value: value[0],
    )
    negative_records = sorted(
        ((source_id, duration, embedding) for source_id, (label, duration, embedding) in samples.items() if label == "other"),
        key=lambda value: value[0],
    )
    positives = np.stack([record[2] for record in positive_records])
    negatives = np.stack([record[2] for record in negative_records])
    calibration = calibrate(positives, negatives)

    bank_root.mkdir(parents=True, exist_ok=True)
    temporary = bank_root / "voicebank.npz.tmp"
    with temporary.open("wb") as output:
        np.savez_compressed(
            output,
            positive_ids=np.asarray([record[0] for record in positive_records]),
            positive_durations=np.asarray([record[1] for record in positive_records]),
            positive_embeddings=positives,
            negative_ids=np.asarray([record[0] for record in negative_records]),
            negative_durations=np.asarray([record[1] for record in negative_records]),
            negative_embeddings=negatives,
        )
    temporary.replace(bank_root / "voicebank.npz")

    metadata = {
        "formatVersion": 1,
        "updatedAt": utc_now(),
        "purpose": "Binary recognition of Alexander; other speakers stay anonymous",
        "model": {
            "name": "Wespeaker ECAPA-TDNN512 LM",
            "source": MODEL_URL,
            "embeddingDimensions": int(positives.shape[1]),
        },
        "counts": {
            "alexander": len(positive_records),
            "anonymousOther": len(negative_records),
            "addedOrReplaced": added,
            "removedAnonymousOther": removed_anonymous_other,
        },
        "alexanderSources": [
            {"sourceId": source_id, "duration": duration}
            for source_id, duration, _ in positive_records
        ],
        "anonymousOtherSources": [
            {"sourceId": source_id, "duration": duration}
            for source_id, duration, _ in negative_records
        ],
        "calibration": calibration,
    }
    if review_comparisons:
        metadata["latestReview"] = {
            "total": len(review_comparisons),
            "exact": sum(
                predicted == confirmed
                for predicted, confirmed in review_comparisons
            ),
            "falseAlexander": sum(
                predicted == "alexander" and confirmed != "alexander"
                for predicted, confirmed in review_comparisons
            ),
            "missedAlexander": sum(
                predicted != "alexander" and confirmed == "alexander"
                for predicted, confirmed in review_comparisons
            ),
            "mixedOrUncertain": sum(
                confirmed in {"mixed", "uncertain"}
                for _, confirmed in review_comparisons
            ),
        }
    atomic_json(bank_root / "metadata.json", metadata)
    print(json.dumps(metadata["counts"], ensure_ascii=False))
    print(json.dumps(calibration["leave_one_out"], ensure_ascii=False))
    if "latestReview" in metadata:
        print(json.dumps(metadata["latestReview"], ensure_ascii=False))


def load_bank(bank_root: Path) -> tuple[np.ndarray, np.ndarray, dict[str, object]]:
    data = np.load(bank_root / "voicebank.npz")
    metadata = json.loads((bank_root / "metadata.json").read_text(encoding="utf-8"))
    return data["positive_embeddings"], data["negative_embeddings"], metadata


def windowed_embeddings(embedder: VoiceEmbedder, samples: np.ndarray) -> list[np.ndarray]:
    max_length = SAMPLE_RATE * 8
    window_length = SAMPLE_RATE * 5
    window_step = SAMPLE_RATE * 4
    if samples.size <= max_length:
        return [embedder.extract(samples)]
    starts = list(range(0, max(1, samples.size - window_length + 1), window_step))
    final_start = max(0, samples.size - window_length)
    if not starts or starts[-1] != final_start:
        starts.append(final_start)
    return [embedder.extract(samples[start : start + window_length]) for start in starts]


def classify_audio(
    embedder: VoiceEmbedder,
    samples: np.ndarray,
    positives: np.ndarray,
    negatives: np.ndarray,
    calibration: dict[str, object],
) -> dict[str, object]:
    embeddings = windowed_embeddings(embedder, samples)
    return classify_embeddings(embeddings, positives, negatives, calibration)


def classify_embeddings(
    embeddings: list[np.ndarray],
    positives: np.ndarray,
    negatives: np.ndarray,
    calibration: dict[str, object],
) -> dict[str, object]:
    rows = [voice_scores(item, positives, negatives) for item in embeddings]
    labels = [classify_scores(row, calibration) for row in rows]
    alexander_count = labels.count("alexander")
    other_count = labels.count("other")
    if alexander_count > len(labels) / 2 and other_count == 0:
        label = "alexander"
    elif other_count > len(labels) / 2 and alexander_count == 0:
        label = "other"
    else:
        label = "uncertain"
    return {
        "speaker": label,
        "positiveSimilarity": float(np.mean([row["positive_similarity"] for row in rows])),
        "negativeSimilarity": float(np.mean([row["negative_similarity"] for row in rows])),
        "margin": float(np.mean([row["margin"] for row in rows])),
        "windows": len(rows),
    }


def format_time(seconds: float) -> str:
    value = max(0, int(seconds))
    hours, remainder = divmod(value, 3600)
    minutes, secs = divmod(remainder, 60)
    return f"{hours:02d}:{minutes:02d}:{secs:02d}"


def load_transcript(path: Path) -> list[dict[str, object]]:
    records = []
    for line in path.read_text(encoding="utf-8").splitlines():
        if not line.strip():
            continue
        value = json.loads(line)
        if isinstance(value, dict) and "start" in value and "end" in value:
            records.append(value)
    if not records:
        raise ValueError(f"No timestamped segments found in {path}")
    return records


def merge_for_markdown(records: list[dict[str, object]]) -> list[dict[str, object]]:
    merged = []
    for record in records:
        if (
            merged
            and merged[-1]["speaker"] == record["speaker"]
            and float(record["start"]) - float(merged[-1]["end"]) <= 1.25
            and float(record["end"]) - float(merged[-1]["start"]) <= 30.0
        ):
            merged[-1]["end"] = record["end"]
            merged[-1]["text"] = f"{merged[-1]['text']} {record['text']}".strip()
        else:
            merged.append(dict(record))
    return merged


def identify_transcript(args: argparse.Namespace) -> None:
    audio_path = Path(args.audio).resolve()
    transcript_path = Path(args.transcript).resolve()
    bank_root = Path(args.bank).resolve()
    positives, negatives, metadata = load_bank(bank_root)
    calibration = metadata["calibration"]
    embedder = VoiceEmbedder(Path(args.model).resolve())
    audio = decode_audio(audio_path)
    records = []
    record_embeddings: list[list[np.ndarray]] = []

    for segment in load_transcript(transcript_path):
        start = float(segment["start"])
        end = float(segment["end"])
        start_sample = max(0, int(start * SAMPLE_RATE))
        end_sample = min(audio.size, int(end * SAMPLE_RATE))
        if end_sample - start_sample < SAMPLE_RATE // 2:
            embeddings = []
            result = {
                "speaker": "uncertain",
                "positiveSimilarity": None,
                "negativeSimilarity": None,
                "margin": None,
                "windows": 0,
            }
        else:
            embeddings = windowed_embeddings(
                embedder, audio[start_sample:end_sample]
            )
            result = classify_embeddings(
                embeddings,
                positives,
                negatives,
                calibration,
            )
        record_embeddings.append(embeddings)
        records.append(
            {
                "start": start,
                "end": end,
                "text": str(segment.get("text", "")).strip(),
                **result,
            }
        )

    episode_candidates = []
    for record, embeddings in zip(records, record_embeddings):
        if (
            record["speaker"] == "alexander"
            and record["margin"] is not None
            and record["positiveSimilarity"] is not None
            and float(record["margin"])
            >= float(calibration["alexander_margin"]) + 0.06
            and float(record["positiveSimilarity"])
            >= float(calibration["alexander_similarity"]) + 0.04
        ):
            episode_candidates.extend(
                (float(record["margin"]), embedding) for embedding in embeddings
            )
    episode_candidates.sort(key=lambda value: value[0], reverse=True)
    episode_seeds = [embedding for _, embedding in episode_candidates[:32]]

    if len(episode_seeds) >= 3:
        adapted_positives = np.concatenate(
            [positives, np.stack(episode_seeds)], axis=0
        )
        for record, embeddings in zip(records, record_embeddings):
            record["firstPassSpeaker"] = record["speaker"]
            if embeddings:
                record.update(
                    classify_embeddings(
                        embeddings,
                        adapted_positives,
                        negatives,
                        calibration,
                    )
                )
            record["episodeAdapted"] = True
    else:
        for record in records:
            record["episodeAdapted"] = False

    output_jsonl = Path(args.output_jsonl).resolve()
    output_jsonl.parent.mkdir(parents=True, exist_ok=True)
    output_jsonl.write_text(
        "".join(json.dumps(record, ensure_ascii=False) + "\n" for record in records),
        encoding="utf-8",
    )

    speaker_names = {
        "alexander": "Александр",
        "other": "Другой голос",
        "uncertain": "Не уверен",
    }
    markdown_lines = [
        "# Транскрипт с выделением голоса Александра",
        "",
        "> Автоматическая бинарная идентификация. Личности собеседников не определяются; сомнительные фрагменты специально не приписываются Александру.",
        "",
    ]
    for record in merge_for_markdown(records):
        markdown_lines.extend(
            [
                f"[{format_time(float(record['start']))}] {speaker_names[str(record['speaker'])]}:",
                str(record["text"]),
                "",
            ]
        )
    output_markdown = Path(args.output_markdown).resolve()
    output_markdown.parent.mkdir(parents=True, exist_ok=True)
    output_markdown.write_text("\n".join(markdown_lines), encoding="utf-8")

    counts = {label: sum(row["speaker"] == label for row in records) for label in speaker_names}
    print(
        json.dumps(
            {**counts, "episodeSeeds": len(episode_seeds)},
            ensure_ascii=False,
        )
    )


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Incremental local voicebank for identifying only Alexander"
    )
    subparsers = parser.add_subparsers(dest="command", required=True)

    build = subparsers.add_parser("build", help="Build or extend the voicebank")
    build.add_argument(
        "--labels-root",
        action="append",
        default=None,
        help="Folder containing labels.json, manifest.json and clips/; repeatable",
    )
    build.add_argument("--model", default=str(DEFAULT_MODEL))
    build.add_argument("--bank", default=str(DEFAULT_BANK))
    build.add_argument("--replace", action="store_true")
    build.add_argument(
        "--positive-only",
        action="store_true",
        help="Add confirmed Alexander clips but never add other-speaker clips",
    )
    build.add_argument(
        "--drop-negative-source",
        action="append",
        default=[],
        help="Remove anonymous negative samples whose source ID starts with VIDEO_ID",
    )
    build.add_argument(
        "--skip-default-labels",
        action="store_true",
        help="Recalibrate the existing bank without reading the default label set",
    )
    build.set_defaults(handler=build_bank)

    identify = subparsers.add_parser(
        "identify", help="Mark timestamped ASR segments as Alexander/other/uncertain"
    )
    identify.add_argument("--audio", required=True)
    identify.add_argument("--transcript", required=True)
    identify.add_argument("--output-jsonl", required=True)
    identify.add_argument("--output-markdown", required=True)
    identify.add_argument("--model", default=str(DEFAULT_MODEL))
    identify.add_argument("--bank", default=str(DEFAULT_BANK))
    identify.set_defaults(handler=identify_transcript)

    args = parser.parse_args()
    if args.command == "build" and args.labels_root is None:
        args.labels_root = (
            [] if args.skip_default_labels else [str(DEFAULT_LABEL_ROOT)]
        )
    return args


def main() -> None:
    args = parse_args()
    args.handler(args)


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Add speaker labels to an existing timestamped transcript.

The script uses SpeechBrain ECAPA embeddings to cluster transcript segments by
voice. The first detected voice is mapped to Alexander for this channel's
host-led interviews; the mapping is recorded as heuristic metadata so it can
be reviewed or replaced without changing the diarization clusters.
"""

from __future__ import annotations

import argparse
import json
import subprocess
import tempfile
from pathlib import Path

import numpy as np
import soundfile as sf
import torch
from sklearn.cluster import AgglomerativeClustering
from speechbrain.inference.classifiers import EncoderClassifier


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--audio", type=Path, required=True)
    parser.add_argument("--segments", type=Path, required=True)
    parser.add_argument("--out-dir", type=Path, required=True)
    parser.add_argument("--video-id", required=True)
    parser.add_argument("--model-dir", type=Path, required=True)
    parser.add_argument("--speakers", type=int, default=2)
    parser.add_argument("--device", default="cpu")
    parser.add_argument("--host-seeds", default="")
    parser.add_argument("--guest-seeds", default="")
    return parser.parse_args()


def load_segments(path: Path) -> list[dict]:
    rows = []
    for line in path.read_text(encoding="utf-8").splitlines():
        if not line.strip():
            continue
        row = json.loads(line)
        if row.get("text") and float(row.get("end", 0)) > float(row.get("start", 0)):
            rows.append(
                {
                    "start": float(row["start"]),
                    "end": float(row["end"]),
                    "text": str(row["text"]).strip(),
                }
            )
    return rows


def parse_indices(value: str) -> list[int]:
    return [int(item.strip()) for item in value.split(",") if item.strip()]


def convert_to_wav(audio_path: Path, temp_dir: Path) -> Path:
    wav_path = temp_dir / "audio.wav"
    subprocess.run(
        [
            "ffmpeg",
            "-hide_banner",
            "-loglevel",
            "error",
            "-y",
            "-i",
            str(audio_path),
            "-ar",
            "16000",
            "-ac",
            "1",
            "-f",
            "wav",
            str(wav_path),
        ],
        check=True,
    )
    return wav_path


def segment_audio(audio: np.ndarray, sample_rate: int, row: dict) -> np.ndarray:
    padding = int(0.25 * sample_rate)
    start = max(0, int(row["start"] * sample_rate) - padding)
    end = min(len(audio), int(row["end"] * sample_rate) + padding)
    chunk = audio[start:end].astype(np.float32, copy=False)
    minimum = sample_rate
    if len(chunk) < minimum:
        missing = minimum - len(chunk)
        left = missing // 2
        chunk = np.pad(chunk, (left, missing - left))
    return chunk


def build_audio_windows(audio: np.ndarray, sample_rate: int) -> tuple[list[dict], list[np.ndarray]]:
    window_seconds = 2.0
    step_seconds = 1.0
    duration = len(audio) / sample_rate
    windows = []
    chunks = []
    start = 0.0
    while start < duration:
        end = min(duration, start + window_seconds)
        row = {"start": start, "end": end}
        chunk = segment_audio(audio, sample_rate, row)
        rms = float(np.sqrt(np.mean(np.square(chunk))))
        windows.append({**row, "rms": rms})
        chunks.append(chunk)
        start += step_seconds

    rms_values = np.asarray([window["rms"] for window in windows])
    floor = max(1e-4, float(np.percentile(rms_values, 20)) * 0.75)
    active = [index for index, window in enumerate(windows) if window["rms"] >= floor]
    if len(active) < 4:
        active = list(range(len(windows)))
    return [windows[index] for index in active], [chunks[index] for index in active]


def embed_segments(
    model: EncoderClassifier,
    chunks: list[np.ndarray],
    sample_rate: int,
    batch_size: int = 16,
) -> np.ndarray:
    embeddings: list[np.ndarray] = []
    for offset in range(0, len(chunks), batch_size):
        batch_chunks = chunks[offset : offset + batch_size]
        tensors = [torch.from_numpy(chunk) for chunk in batch_chunks]
        lengths = torch.tensor([len(chunk) for chunk in tensors], dtype=torch.float32)
        batch = torch.nn.utils.rnn.pad_sequence(tensors, batch_first=True)
        lengths = lengths / batch.shape[1]
        with torch.no_grad():
            encoded = model.encode_batch(batch, lengths)
        embeddings.append(encoded.squeeze(1).cpu().numpy())
    matrix = np.concatenate(embeddings, axis=0)
    norms = np.linalg.norm(matrix, axis=1, keepdims=True)
    return matrix / np.maximum(norms, 1e-12)


def cluster_embeddings(embeddings: np.ndarray, speaker_count: int) -> np.ndarray:
    if len(embeddings) <= 1 or speaker_count <= 1:
        return np.zeros(len(embeddings), dtype=int)
    count = min(speaker_count, len(embeddings))
    return AgglomerativeClustering(
        n_clusters=count,
        metric="cosine",
        linkage="average",
    ).fit_predict(embeddings)


def classify_with_seed_centroids(
    embeddings: np.ndarray,
    host_indices: list[int],
    guest_indices: list[int],
) -> tuple[np.ndarray, np.ndarray]:
    host = embeddings[host_indices].mean(axis=0)
    guest = embeddings[guest_indices].mean(axis=0)
    host /= max(np.linalg.norm(host), 1e-12)
    guest /= max(np.linalg.norm(guest), 1e-12)
    host_similarity = embeddings @ host
    guest_similarity = embeddings @ guest
    labels = (guest_similarity > host_similarity).astype(int)
    confidence = np.clip(0.5 + np.abs(host_similarity - guest_similarity), 0.0, 1.0)
    return labels, confidence


def speaker_confidences(embeddings: np.ndarray, labels: np.ndarray) -> np.ndarray:
    centroids = {}
    for label in sorted(set(labels.tolist())):
        centroid = embeddings[labels == label].mean(axis=0)
        centroids[label] = centroid / max(np.linalg.norm(centroid), 1e-12)
    result = []
    for embedding, own_label in zip(embeddings, labels):
        similarities = {
            label: float(np.dot(embedding, centroid))
            for label, centroid in centroids.items()
        }
        own = similarities[own_label]
        other = max((value for label, value in similarities.items() if label != own_label), default=own)
        margin = max(0.0, min(1.0, (own - other + 1.0) / 2.0))
        result.append(round(margin, 3))
    return np.asarray(result)


def assign_window_label(row: dict, windows: list[dict], labels: np.ndarray, confidences: np.ndarray) -> tuple[int, float]:
    overlaps = []
    for index, window in enumerate(windows):
        overlap = max(0.0, min(row["end"], window["end"]) - max(row["start"], window["start"]))
        if overlap > 0:
            overlaps.append((index, overlap))
    if not overlaps:
        center = (row["start"] + row["end"]) / 2
        nearest = min(range(len(windows)), key=lambda index: abs((windows[index]["start"] + windows[index]["end"]) / 2 - center))
        return int(labels[nearest]), float(confidences[nearest])

    scores: dict[int, float] = {}
    for index, overlap in overlaps:
        scores[int(labels[index])] = scores.get(int(labels[index]), 0.0) + overlap
    selected = max(scores, key=scores.get)
    selected_overlaps = [(index, overlap) for index, overlap in overlaps if int(labels[index]) == selected]
    total = sum(overlap for _, overlap in selected_overlaps)
    confidence = sum(confidences[index] * overlap for index, overlap in selected_overlaps) / max(total, 1e-9)
    return selected, float(confidence)


def timestamp(seconds: float) -> str:
    total = int(seconds)
    hours, remainder = divmod(total, 3600)
    minutes, seconds = divmod(remainder, 60)
    return f"{hours:02d}:{minutes:02d}:{seconds:02d}"


def main() -> None:
    args = parse_args()
    rows = load_segments(args.segments)
    if not rows:
        raise SystemExit("No timestamped transcript segments found")
    host_seed_indices = parse_indices(args.host_seeds)
    guest_seed_indices = parse_indices(args.guest_seeds)
    seeded_mode = bool(host_seed_indices and guest_seed_indices)
    seed_indices = host_seed_indices + guest_seed_indices
    if any(index < 0 or index >= len(rows) for index in seed_indices):
        raise SystemExit("Speaker seed index is outside the transcript")

    args.out_dir.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix="pravda-diarization-") as temp:
        wav_path = convert_to_wav(args.audio, Path(temp))
        audio, sample_rate = sf.read(wav_path, dtype="float32", always_2d=False)
        if audio.ndim != 1:
            audio = audio.mean(axis=1)
        if seeded_mode:
            chunks = [segment_audio(audio, sample_rate, row) for row in rows]
        else:
            windows, window_chunks = build_audio_windows(audio, sample_rate)
        model = EncoderClassifier.from_hparams(
            source="speechbrain/spkrec-ecapa-voxceleb",
            savedir=str(args.model_dir),
            run_opts={"device": args.device},
        )
        embeddings = embed_segments(model, chunks if seeded_mode else window_chunks, sample_rate)

    if seeded_mode:
        labels, confidences = classify_with_seed_centroids(embeddings, host_seed_indices, guest_seed_indices)
        assignments = [(int(label), float(confidence)) for label, confidence in zip(labels, confidences)]
        method = "seeded ECAPA speaker identification"
        mapping_source = {
            "type": "explicit_voice_seeds",
            "host_seed_segments": host_seed_indices,
            "guest_seed_segments": guest_seed_indices,
        }
    else:
        labels = cluster_embeddings(embeddings, args.speakers)
        confidences = speaker_confidences(embeddings, labels)
        assignments = [assign_window_label(row, windows, labels, confidences) for row in rows]
        method = "agglomerative cosine over 2-second sliding windows"
        mapping_source = {
            "type": "first_transcript_segment_assumed_Alexander",
        }
    host_cluster = int(assignments[0][0])
    cluster_order = [host_cluster] + [label for label in sorted(set(labels.tolist())) if label != host_cluster]
    names = {cluster: ("Александр" if index == 0 else f"Собеседник {index}") for index, cluster in enumerate(cluster_order)}
    ids = {cluster: f"SPEAKER_{index:02d}" for index, cluster in enumerate(cluster_order)}

    output_rows = []
    for row, (label, confidence) in zip(rows, assignments):
        cluster = int(label)
        output_rows.append(
            {
                **row,
                "speaker_id": ids[cluster],
                "speaker": names[cluster],
                "speaker_confidence": float(confidence),
                "speaker_mapping": "first_transcript_segment_assumed_Alexander",
            }
        )

    jsonl_path = args.out_dir / f"{args.video_id}.jsonl"
    txt_path = args.out_dir / f"{args.video_id}.txt"
    metadata_path = args.out_dir / f"{args.video_id}.metadata.json"
    jsonl_path.write_text(
        "".join(json.dumps(row, ensure_ascii=False) + "\n" for row in output_rows),
        encoding="utf-8",
    )
    text_lines = []
    for row in output_rows:
        text_lines.append(f"[{timestamp(row['start'])}] {row['speaker']}:\n{row['text']}\n")
    txt_path.write_text("\n".join(text_lines), encoding="utf-8")
    metadata_path.write_text(
        json.dumps(
            {
                "video_id": args.video_id,
                "source_transcript": str(args.segments),
                "diarization_model": "speechbrain/spkrec-ecapa-voxceleb",
                "clustering": method,
                "window_seconds": 2.0,
                "step_seconds": 1.0,
                "active_windows": 0 if seeded_mode else len(windows),
                "embedded_segments": len(rows) if seeded_mode else len(windows),
                "requested_speakers": args.speakers,
                "detected_speakers": len(set(labels.tolist())),
                "speaker_mapping": {ids[cluster]: names[cluster] for cluster in cluster_order},
                "speaker_mapping_source": mapping_source,
                "mapping_confidence": "seeded from manually selected opening voices" if seeded_mode else "heuristic; verify against the opening audio",
                "segments": len(output_rows),
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    print(json.dumps({
        "segments": len(output_rows),
        "speakers": len(set(labels.tolist())),
        "outputs": [str(txt_path), str(jsonl_path), str(metadata_path)],
        "preview": [
            {"start": row["start"], "speaker": row["speaker"], "text": row["text"]}
            for row in output_rows[:10]
        ],
    }, ensure_ascii=False))


if __name__ == "__main__":
    main()

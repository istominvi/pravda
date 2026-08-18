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


def embed_segments(
    model: EncoderClassifier,
    chunks: list[np.ndarray],
    sample_rate: int,
    batch_size: int = 8,
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

    args.out_dir.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix="pravda-diarization-") as temp:
        wav_path = convert_to_wav(args.audio, Path(temp))
        audio, sample_rate = sf.read(wav_path, dtype="float32", always_2d=False)
        if audio.ndim != 1:
            audio = audio.mean(axis=1)
        chunks = [segment_audio(audio, sample_rate, row) for row in rows]
        model = EncoderClassifier.from_hparams(
            source="speechbrain/spkrec-ecapa-voxceleb",
            savedir=str(args.model_dir),
            run_opts={"device": args.device},
        )
        embeddings = embed_segments(model, chunks, sample_rate)

    labels = cluster_embeddings(embeddings, args.speakers)
    confidences = speaker_confidences(embeddings, labels)
    host_cluster = int(labels[0])
    cluster_order = [host_cluster] + [label for label in sorted(set(labels.tolist())) if label != host_cluster]
    names = {cluster: ("Александр" if index == 0 else f"Собеседник {index}") for index, cluster in enumerate(cluster_order)}
    ids = {cluster: f"SPEAKER_{index:02d}" for index, cluster in enumerate(cluster_order)}

    output_rows = []
    for row, label, confidence in zip(rows, labels, confidences):
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
                "clustering": "agglomerative cosine",
                "requested_speakers": args.speakers,
                "detected_speakers": len(set(labels.tolist())),
                "speaker_mapping": {ids[cluster]: names[cluster] for cluster in cluster_order},
                "speaker_mapping_source": "first transcript segment assumed to be Alexander",
                "mapping_confidence": "heuristic; verify against the opening audio",
                "segments": len(output_rows),
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    print(json.dumps({"segments": len(output_rows), "speakers": len(set(labels.tolist())), "outputs": [str(txt_path), str(jsonl_path), str(metadata_path)]}, ensure_ascii=False))


if __name__ == "__main__":
    main()

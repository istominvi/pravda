#!/usr/bin/env python3
"""High-quality local transcription for mixed Russian/Ukrainian videos."""

from __future__ import annotations

import argparse
from datetime import datetime, timezone
import json
from pathlib import Path
import subprocess
import sys

from faster_whisper import WhisperModel


PROJECT_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_OUTPUT = PROJECT_ROOT / "transcripts/vzglyad-iz-chetvertogo-izmereniya/large-v3-multilingual"
DEFAULT_AUDIO_CACHE = PROJECT_ROOT / ".local/youtube-audio-original"
DEFAULT_HOTWORDS = " ".join(
    [
        "Александр", "Украина", "Україна", "Россия", "Росія", "Киев", "Київ",
        "Москва", "Зеленский", "Зеленський", "Путин", "НАТО", "ВСУ", "ЗСУ",
        "Крым", "Крим", "Донбасс", "Луганск", "Луганськ", "Донецк", "Донецьк",
        "Кравчук", "СССР",
    ]
)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Full Whisper large-v3 with automatic Russian/Ukrainian switching"
    )
    source = parser.add_mutually_exclusive_group(required=True)
    source.add_argument("--video-id", help="YouTube video ID")
    source.add_argument("--audio", help="Existing original-quality audio file")
    parser.add_argument("--output-dir", default=str(DEFAULT_OUTPUT))
    parser.add_argument("--audio-cache", default=str(DEFAULT_AUDIO_CACHE))
    parser.add_argument("--model", default="large-v3")
    parser.add_argument("--device", default="cpu")
    parser.add_argument("--compute-type", default="int8")
    parser.add_argument("--beam-size", type=int, default=8)
    parser.add_argument("--patience", type=float, default=1.2)
    parser.add_argument("--extra-hotwords", default="")
    return parser.parse_args()


def original_audio(video_id: str, cache: Path) -> Path:
    cache.mkdir(parents=True, exist_ok=True)
    existing = sorted(
        path for path in cache.glob(f"{video_id}.*")
        if path.suffix not in {".part", ".ytdl", ".json"}
    )
    if existing:
        return existing[0]
    process = subprocess.run(
        [
            sys.executable, "-m", "yt_dlp", "--no-playlist", "--quiet",
            "--no-warnings", "-f", "bestaudio/best", "--print",
            "after_move:filepath", "-o", str(cache / f"{video_id}.%(ext)s"),
            f"https://youtu.be/{video_id}",
        ],
        check=True,
        stdout=subprocess.PIPE,
        text=True,
    )
    candidates = [Path(line.strip()) for line in process.stdout.splitlines() if line.strip()]
    if not candidates or not candidates[-1].exists():
        raise RuntimeError(f"yt-dlp did not return downloaded audio for {video_id}")
    return candidates[-1]


def probe_audio(path: Path) -> dict[str, object]:
    process = subprocess.run(
        [
            "ffprobe", "-v", "error", "-select_streams", "a:0",
            "-show_entries", "stream=codec_name,sample_rate,channels,bit_rate",
            "-show_entries", "format=duration,format_name", "-of", "json", str(path),
        ],
        check=True,
        stdout=subprocess.PIPE,
        text=True,
    )
    return json.loads(process.stdout)


def timestamp(seconds: float) -> str:
    total = max(0, int(seconds))
    hours, remainder = divmod(total, 3600)
    minutes, secs = divmod(remainder, 60)
    return f"{hours:02d}:{minutes:02d}:{secs:02d}"


def atomic_text(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(content, encoding="utf-8")
    temporary.replace(path)


def main() -> None:
    args = parse_args()
    if args.video_id:
        video_id = args.video_id
        source_url = f"https://youtu.be/{video_id}"
        audio_path = original_audio(video_id, Path(args.audio_cache).resolve())
    else:
        audio_path = Path(args.audio).resolve()
        video_id = audio_path.stem
        source_url = None

    output_dir = Path(args.output_dir).resolve()
    output_dir.mkdir(parents=True, exist_ok=True)
    hotwords = f"{DEFAULT_HOTWORDS} {args.extra_hotwords}".strip()
    print(f"Audio: {audio_path}", flush=True)
    print(f"Loading {args.model} ({args.device}/{args.compute_type})", flush=True)
    model = WhisperModel(args.model, device=args.device, compute_type=args.compute_type)
    segments_iterator, info = model.transcribe(
        str(audio_path),
        language=None,
        task="transcribe",
        multilingual=True,
        language_detection_segments=3,
        language_detection_threshold=0.5,
        beam_size=args.beam_size,
        patience=args.patience,
        temperature=0.0,
        condition_on_previous_text=False,
        word_timestamps=True,
        vad_filter=True,
        vad_parameters={"min_silence_duration_ms": 350, "speech_pad_ms": 180},
        hallucination_silence_threshold=1.5,
        hotwords=hotwords,
        log_progress=True,
    )

    records = []
    for segment in segments_iterator:
        records.append(
            {
                "id": segment.id,
                "start": segment.start,
                "end": segment.end,
                "text": segment.text.strip(),
                "languageMode": "multilingual-auto",
                "words": [
                    {
                        "start": word.start,
                        "end": word.end,
                        "word": word.word,
                        "probability": word.probability,
                    }
                    for word in (segment.words or [])
                ],
                "avg_logprob": segment.avg_logprob,
                "no_speech_prob": segment.no_speech_prob,
                "compression_ratio": segment.compression_ratio,
                "temperature": segment.temperature,
            }
        )

    atomic_text(
        output_dir / f"{video_id}.jsonl",
        "".join(json.dumps(record, ensure_ascii=False) + "\n" for record in records),
    )
    atomic_text(
        output_dir / f"{video_id}.txt",
        "\n\n".join(
            f"[{timestamp(float(record['start']))}] {record['text']}" for record in records
        ) + "\n",
    )
    metadata = {
        "videoId": video_id,
        "sourceUrl": source_url,
        "createdAt": datetime.now(timezone.utc).isoformat(),
        "source": "faster_whisper",
        "model": args.model,
        "device": args.device,
        "computeType": args.compute_type,
        "language": None,
        "languageMode": "automatic per-segment multilingual detection",
        "initialDetectedLanguage": info.language,
        "initialLanguageProbability": info.language_probability,
        "multilingual": True,
        "conditionOnPreviousText": False,
        "beamSize": args.beam_size,
        "patience": args.patience,
        "vadFilter": True,
        "wordTimestamps": True,
        "hotwords": hotwords.split(),
        "duration": info.duration,
        "segmentCount": len(records),
        "audioPath": str(audio_path),
        "audioProbe": probe_audio(audio_path),
    }
    atomic_text(
        output_dir / f"{video_id}.metadata.json",
        json.dumps(metadata, ensure_ascii=False, indent=2) + "\n",
    )
    print(
        json.dumps(
            {
                "videoId": video_id,
                "segments": len(records),
                "duration": info.duration,
                "initialLanguage": info.language,
                "output": str(output_dir),
            },
            ensure_ascii=False,
        ),
        flush=True,
    )


if __name__ == "__main__":
    main()

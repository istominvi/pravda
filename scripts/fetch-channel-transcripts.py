#!/usr/bin/env python3
"""Batch transcript fetcher for YouTube/RuTube with robust fallback.

Workflow:
1. Try to reuse already fetched files from the existing transcript reserve folder.
2. Otherwise try subtitles via yt-dlp.
3. If subtitles are blocked/unavailable, download audio and run faster-whisper.

Outputs are stored as:
- <VIDEO_ID>.vtt  (raw subtitle file when available)
- <VIDEO_ID>.txt  (human-readable normalized text with timestamps)
- <VIDEO_ID>.json (all segment metadata + source metadata)
- <VIDEO_ID>.jsonl (JSONL stream, suitable for downstream processing)
"""

from __future__ import annotations

import argparse
import html
import json
import re
import signal
import shutil
import subprocess
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional, Sequence, Tuple



VTT_TIME_RE = re.compile(
    r"(\d{2}:\d{2}:\d{2}\.\d{3})\s*-->\s*(\d{2}:\d{2}:\d{2}\.\d{3})"
)
STAMP_RE = re.compile(r"[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}")
INVALID_BLOCK_RE = re.compile(r"(429|forbidden|blocked|not available|temporar|captcha|ip)",
                             re.IGNORECASE)
TAG_RE = re.compile(r"<[^>]+>")
SPACES_RE = re.compile(r"\s+")


def run_cmd(cmd: Sequence[str], timeout: int = 120) -> Tuple[int, str, str]:
    try:
        proc = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=timeout,
        )
        return proc.returncode, (proc.stdout or ""), (proc.stderr or "")
    except subprocess.TimeoutExpired:
        return 124, "", f"Command timed out after {timeout}s: {' '.join(cmd)}"


def parse_timestamp(ts: str) -> float:
    hours, minutes, sec_ms = ts.split(":")
    sec, ms = sec_ms.split(".")
    return int(hours) * 3600 + int(minutes) * 60 + int(sec) + int(ms) / 1000.0


def format_timestamp(seconds: float) -> str:
    total_ms = int(round(seconds * 1000))
    hh, rem = divmod(total_ms, 3_600_000)
    mm, rem = divmod(rem, 60_000)
    ss, ms = divmod(rem, 1000)
    return f"{hh:02}:{mm:02}:{ss:02}.{ms:03}"


def clean_text(raw: str) -> str:
    raw = html.unescape(raw)
    raw = raw.replace("\n", " ")
    raw = TAG_RE.sub("", raw)
    raw = raw.replace("&nbsp;", " ")
    raw = SPACES_RE.sub(" ", raw)
    return raw.strip(" -—")


def parse_vtt(path: Path) -> List[Dict[str, Any]]:
    lines = path.read_text(encoding="utf-8", errors="ignore").splitlines()
    entries: List[Dict[str, Any]] = []
    i = 0

    while i < len(lines):
        line = lines[i].strip()
        i += 1

        if not line or line == "WEBVTT" or line.startswith("STYLE") or line.startswith("NOTE"):
            continue

        m = VTT_TIME_RE.match(line)
        if not m:
            continue

        start_raw, end_raw = m.groups()
        text_lines: List[str] = []
        while i < len(lines) and lines[i].strip():
            segment_line = lines[i].strip()
            if segment_line.isdigit():
                i += 1
                continue
            text_lines.append(segment_line)
            i += 1

        while i < len(lines) and not lines[i].strip():
            i += 1

        text = clean_text(" ".join(text_lines))
        if not text:
            continue

        entries.append(
            {
                "start": parse_timestamp(start_raw),
                "end": parse_timestamp(end_raw),
                "text": text,
            }
        )

    return dedupe_cues(entries)


def dedupe_cues(entries: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    deduped: List[Dict[str, Any]] = []
    for item in entries:
        text = item["text"]
        if not text:
            continue
        if not deduped:
            deduped.append(item)
            continue

        prev = deduped[-1]
        same_text = text == prev["text"]
        close_start = abs(item["start"] - prev["start"]) < 0.02
        same_chunk = abs(item["start"] - prev["end"]) <= 0.3

        if same_text and (close_start or same_chunk):
            prev["end"] = max(prev["end"], item["end"])
            continue

        deduped.append(item)

    return deduped


def parse_jsonl_segments(path: Path) -> List[Dict[str, Any]]:
    lines = path.read_text(encoding="utf-8", errors="ignore").splitlines()
    return [json.loads(line) for line in lines if line.strip()]


def write_outputs(video_id: str, title: str, items: List[Dict[str, Any]], output_dir: Path,
                  source_meta: Dict[str, Any], force: bool = False) -> None:
    vtt_path = output_dir / f"{video_id}.vtt"
    txt_path = output_dir / f"{video_id}.txt"
    json_path = output_dir / f"{video_id}.json"
    jsonl_path = output_dir / f"{video_id}.jsonl"

    if force or not txt_path.exists():
        txt_lines = [
            f"[{format_timestamp(item['start'])} --> {format_timestamp(item['end'])}] {item['text']}"
            for item in items
        ]
        txt_path.write_text("\n".join(txt_lines), encoding="utf-8")

    if force or not json_path.exists():
        payload = {
            "videoId": video_id,
            "title": title,
            "createdAt": datetime.now(tz=timezone.utc).isoformat(),
            "source": source_meta,
            "segmentsCount": len(items),
            "segments": items,
        }
        json_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")

    if force or not jsonl_path.exists():
        jsonl_path.write_text(
            "\n".join(json.dumps(item, ensure_ascii=False) for item in items),
            encoding="utf-8",
        )


def has_meaningful_segments(segments: List[Dict[str, Any]]) -> bool:
    return any(len(s["text"]) >= 2 for s in segments)


def parse_existing_raw_files(video_id: str, raw_dir: Path) -> Optional[Tuple[str, List[Dict[str, Any]], Path]]:
    vtt = raw_dir / f"{video_id}.vtt"
    txt = raw_dir / f"{video_id}.txt"
    if not vtt.exists():
        return None
    try:
        if txt.exists() and "Недоступно" in txt.read_text(encoding="utf-8"):
            return None
        segments = parse_vtt(vtt)
        if not has_meaningful_segments(segments):
            return None
        return "raw-reused", segments, vtt
    except Exception:
        return None


def pick_best_vtt(candidates: Iterable[Path]) -> Optional[Path]:
    ordered: List[Tuple[int, int, Path]] = []
    for p in candidates:
        name = p.name.lower()
        priority = 0
        if ".ru" in name and ".auto" not in name:
            priority = 10
        elif ".ru" in name:
            priority = 8
        elif ".en" in name:
            priority = 6
        elif ".uk" in name:
            priority = 5
        else:
            priority = 1

        ordered.append((priority, -p.stat().st_size, p))
    if not ordered:
        return None
    ordered.sort(key=lambda x: (x[0], x[1]), reverse=True)
    return ordered[0][2]


def fetch_subtitles(video_id: str, out_dir: Path, timeout: int = 120) -> Tuple[str, List[Dict[str, Any]], Optional[str]]:
    workdir = out_dir / "tmp-subtitles"
    workdir.mkdir(parents=True, exist_ok=True)
    url = f"https://youtu.be/{video_id}"
    output_tmpl = str(workdir / f"{video_id}.%(ext)s")
    cmd = [
        "python3",
        "-m",
        "yt_dlp",
        "--quiet",
        "--no-warnings",
        "--skip-download",
        "--write-subs",
        "--write-auto-subs",
        "--sub-langs",
        "ru,ru-RU,ru-orig,en,en-US",
        "--sub-format",
        "vtt",
        "-o",
        output_tmpl,
        url,
    ]

    code, out, err = run_cmd(cmd, timeout=timeout)
    if code != 0:
        combined = f"{out}\n{err}"
        if INVALID_BLOCK_RE.search(combined):
            return "subtitles_blocked", [], combined
        # If yt-dlp fails but still created files (partial), keep going and use them.

    candidates = sorted(workdir.glob(f"{video_id}*.vtt"))
    if not candidates:
        return "subtitles_not_found", [], (f"{out}\n{err}").strip()

    best = pick_best_vtt(candidates)
    if not best:
        return "subtitles_not_found", [], "No vtt candidate found after yt-dlp run"

    raw_vtt = out_dir / f"{video_id}.vtt"
    raw_vtt.write_bytes(best.read_bytes())

    try:
        segments = parse_vtt(best)
        if has_meaningful_segments(segments):
            return "subtitles_ok", segments, best.name
        return "subtitles_empty", [], "Subtitle file parsed as empty"
    finally:
        shutil.rmtree(workdir, ignore_errors=True)


def fetch_with_asr(video_id: str, out_dir: Path, asr_model: str = "base", asr_device: str = "cpu",
                  asr_compute: str = "int8", timeout: int = 120) -> Tuple[str, List[Dict[str, Any]], Optional[str]]:
    workdir = out_dir / "tmp-audio"
    workdir.mkdir(parents=True, exist_ok=True)
    audio_tmpl = str(workdir / f"{video_id}.%(ext)s")
    url = f"https://youtu.be/{video_id}"
    code, out, err = run_cmd(
        [
            "python3",
            "-m",
            "yt_dlp",
            "--quiet",
            "--no-warnings",
            "-f",
            "bestaudio/best",
            "-x",
            "--audio-format",
            "wav",
            "-o",
            audio_tmpl,
            url,
        ],
        timeout=timeout,
    )
    if code != 0:
        return "asr_audio_download_failed", [], f"{out}\n{err}"

    audio_candidates = sorted(
        [p for p in workdir.glob(f"{video_id}.*") if p.suffix.lower() in {".wav", ".m4a", ".mp3", ".webm"}]
    )
    if not audio_candidates:
        return "asr_audio_missing", [], "yt-dlp returned no local audio file"

    audio_path = audio_candidates[0]
    python_payload = f"""
import json
from faster_whisper import WhisperModel

model = WhisperModel(
    {json.dumps(asr_model)},
    device={json.dumps(asr_device)},
    compute_type={json.dumps(asr_compute)},
)

segments = []
for segment in model.transcribe(
    {json.dumps(str(audio_path))},
    language="ru",
    vad_filter=False,
    beam_size=1,
)[0]:
    text = segment.text.strip()
    if not text:
        continue
    segments.append(
        {{
            "start": round(float(segment.start), 3),
            "end": round(float(segment.end), 3),
            "text": text,
        }}
    )

print(json.dumps(segments, ensure_ascii=False))
""".strip()
    code, asr_out, asr_err = run_cmd(["python3", "-c", python_payload], timeout=max(1, timeout))
    shutil.rmtree(workdir, ignore_errors=True)
    if code == 124:
        return "asr_timeout", [], f"ASR timed out after {timeout}s: {asr_err}"
    if code != 0:
        return "asr_transcribe_failed", [], asr_err or asr_out

    asr_segments = json.loads((asr_out or "[]").strip() or "[]")
    segments: List[Dict[str, Any]] = []
    for item in asr_segments:
        text = clean_text(item.get("text", ""))
        if not text:
            continue
        segments.append(
            {
                "start": float(item["start"]),
                "end": float(item["end"]),
                "text": text,
            }
        )

    if not has_meaningful_segments(segments):
        return "asr_empty", [], "ASR model produced no valid segments"

    return "asr_ok", segments, audio_path.name


def build_status_entry(entry: Dict[str, Any], status: str, method: str, details: str,
                      segment_count: int) -> Dict[str, Any]:
    return {
        "index": entry.get("index"),
        "videoId": entry["videoId"],
        "title": entry.get("title"),
        "status": status,
        "method": method,
        "details": details,
        "segmentCount": segment_count,
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--source-manifest",
        default="transcripts/raw-youtube/video_manifest.json",
        help="Path to source manifest JSON (legacy/raw list).",
    )
    parser.add_argument(
        "--out-dir",
        default="transcripts/vzglyad-iz-chetvertogo-izmereniya",
        help="Target folder for the clean transcript dump.",
    )
    parser.add_argument("--start-index", type=int, default=0, help="Zero-based start index in manifest.")
    parser.add_argument("--max-videos", type=int, default=None, help="Limit number of videos to process.")
    parser.add_argument("--skip-existing", action="store_true", default=True, help="Skip if outputs already exist.")
    parser.add_argument("--force", action="store_true", help="Overwrite existing files.")
    parser.add_argument("--asr-model", default="large-v3-turbo", help="faster-whisper model name.")
    parser.add_argument("--asr-device", default="cpu", help="faster-whisper device.")
    parser.add_argument("--asr-compute", default="int8", help="faster-whisper compute type.")
    parser.add_argument("--sub-timeout", type=int, default=180, help="yt-dlp subtitle step timeout, seconds.")
    parser.add_argument("--asr-timeout", type=int, default=180, help="yt-dlp audio download / ASR timeout, seconds.")
    parser.add_argument("--no-asr", action="store_true", help="Skip ASR fallback and only keep subtitle-only transcripts.")
    args = parser.parse_args()

    source_manifest = Path(args.source_manifest)
    output_dir = Path(args.out_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    raw_dir = source_manifest.parent
    source_entries = json.loads(source_manifest.read_text(encoding="utf-8"))
    total = len(source_entries)
    stop = total if args.max_videos is None else min(total, args.start_index + args.max_videos)

    summary: List[Dict[str, Any]] = []

    for idx in range(args.start_index, stop):
        entry = source_entries[idx]
        video_id = entry["videoId"]
        title = entry.get("title", "")

        txt_out = output_dir / f"{video_id}.txt"
        if not args.force and args.skip_existing and txt_out.exists():
            summary.append(build_status_entry(entry, "skipped", "existing", "Already processed", -1))
            continue

        print(f"[{idx + 1}/{total}] {video_id} — {title}", flush=True)
        segments: List[Dict[str, Any]] = []
        method = "unknown"
        details = ""

        reused = parse_existing_raw_files(video_id, raw_dir)
        if reused:
            method, segments, vtt_source = reused
            write_outputs(video_id, title, segments, output_dir, {
                "type": "reused_raw",
                "source": str(vtt_source),
            }, force=args.force)
            target_vtt = output_dir / f"{video_id}.vtt"
            if args.force or not target_vtt.exists():
                shutil.copy2(vtt_source, target_vtt)
            details = f"Reused from raw reserve: {vtt_source.name}"
            summary.append(build_status_entry(entry, "done", method, details, len(segments)))
            continue

        sub_status, segments, details = fetch_subtitles(video_id, output_dir, timeout=args.sub_timeout)
        if sub_status == "subtitles_ok":
            method = "yt_dlp_subtitles"
            write_outputs(video_id, title, segments, output_dir, {
                "type": "yt_dlp_subtitles",
                "details": details,
                "source": "subtitles",
            }, force=args.force)
            summary.append(build_status_entry(entry, "done", method, "Subtitle transcript obtained", len(segments)))
            continue

        if args.no_asr:
            summary.append(
                build_status_entry(
                    entry,
                    "failed",
                    "subtitle_only",
                    f"{sub_status}: {details}",
                    0,
                )
            )
            continue

        try:
            asr_status, asr_segments, asr_details = fetch_with_asr(
                video_id=video_id,
                out_dir=output_dir,
                asr_model=args.asr_model,
                asr_device=args.asr_device,
                asr_compute=args.asr_compute,
                timeout=args.asr_timeout,
            )
            if asr_status == "asr_ok":
                method = "faster_whisper"
                write_outputs(video_id, title, asr_segments, output_dir, {
                    "type": "faster_whisper",
                    "model": args.asr_model,
                    "device": args.asr_device,
                    "computeType": args.asr_compute,
                    "audio": asr_details,
                }, force=args.force)
                summary.append(build_status_entry(entry, "done", method, f"ASR fallback: {asr_details}", len(asr_segments)))
            else:
                summary.append(
                    build_status_entry(
                        entry,
                        "failed",
                        method,
                        f"{sub_status}: {details}; {asr_status}: {asr_details}",
                        0,
                    )
                )
        except Exception as e:
            summary.append(
                build_status_entry(
                    entry,
                    "failed",
                    method,
                    f"{sub_status}: {details}; asr_exception: {e}",
                    0,
                )
            )

    manifest = {
        "generatedAt": datetime.now(tz=timezone.utc).isoformat(),
        "sourceManifest": str(source_manifest),
        "outputDir": str(output_dir),
        "stats": {
            "total": len(summary),
            "done": sum(1 for item in summary if item["status"] == "done"),
            "skipped": sum(1 for item in summary if item["status"] == "skipped"),
            "failed": sum(1 for item in summary if item["status"] == "failed"),
        },
        "videos": summary,
    }
    (output_dir / "video_manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()

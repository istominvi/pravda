#!/usr/bin/env python3
"""Build and serve a local speaker-enrollment labeling page."""

from __future__ import annotations

import argparse
import json
import re
import subprocess
import threading
from datetime import datetime, timezone
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse


PAGE = r"""<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Голос Александра · разметка</title>
  <style>
    :root {
      --paper: #f4eedf;
      --ink: #102a2b;
      --muted: #65706b;
      --line: #c9c0ad;
      --orange: #dc5f38;
      --green: #1f6d5d;
      --yellow: #e0ad3f;
      --shadow: 0 28px 80px rgba(16, 42, 43, .15);
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      color: var(--ink);
      background:
        radial-gradient(circle at 12% 8%, rgba(224,173,63,.24), transparent 28rem),
        linear-gradient(135deg, #f7f1e4 0%, #e8e0cf 100%);
      font-family: "Avenir Next", "Trebuchet MS", sans-serif;
    }
    body::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      opacity: .18;
      background-image: repeating-linear-gradient(90deg, transparent 0 31px, rgba(16,42,43,.08) 31px 32px);
    }
    .shell { width: min(1040px, calc(100% - 32px)); margin: 0 auto; padding: 28px 0 44px; }
    header { display: flex; justify-content: space-between; gap: 24px; align-items: end; margin-bottom: 28px; }
    .eyebrow { margin: 0 0 8px; color: var(--orange); font-size: 12px; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }
    h1 { margin: 0; max-width: 680px; font-family: "Iowan Old Style", "Palatino Linotype", serif; font-size: clamp(34px, 6vw, 66px); line-height: .94; font-weight: 600; }
    .progress-copy { min-width: 180px; text-align: right; }
    .progress-copy strong { display: block; font-size: 32px; }
    .progress-copy span { color: var(--muted); font-size: 13px; }
    .track { height: 8px; margin: 18px 0 28px; border: 1px solid var(--line); background: rgba(255,255,255,.36); overflow: hidden; }
    .track > div { height: 100%; width: 0; background: linear-gradient(90deg, var(--orange), var(--yellow)); transition: width .28s ease; }
    .card {
      position: relative;
      padding: clamp(24px, 5vw, 56px);
      border: 1px solid rgba(16,42,43,.22);
      border-radius: 4px 34px 4px 34px;
      background: rgba(255,252,244,.9);
      box-shadow: var(--shadow);
      animation: enter .38s ease both;
    }
    @keyframes enter { from { opacity: 0; transform: translateY(12px); } }
    .meta { display: flex; justify-content: space-between; gap: 20px; color: var(--muted); font-size: 13px; }
    .wave { display: flex; gap: 5px; align-items: center; height: 42px; margin: 30px 0 12px; }
    .wave i { display: block; width: 5px; border-radius: 4px; background: var(--green); animation: pulse 1.4s ease-in-out infinite alternate; }
    .wave i:nth-child(1) { height: 16px; }
    .wave i:nth-child(2) { height: 34px; animation-delay: -.4s; }
    .wave i:nth-child(3) { height: 24px; animation-delay: -.8s; }
    .wave i:nth-child(4) { height: 39px; animation-delay: -.2s; }
    .wave i:nth-child(5) { height: 20px; animation-delay: -.6s; }
    @keyframes pulse { to { transform: scaleY(.45); opacity: .55; } }
    audio { width: 100%; margin: 4px 0 28px; accent-color: var(--orange); }
    blockquote { margin: 0; font-family: "Iowan Old Style", "Palatino Linotype", serif; font-size: clamp(24px, 4vw, 42px); line-height: 1.18; }
    .question { margin: 34px 0 14px; color: var(--muted); font-size: 14px; }
    .choices { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
    button {
      min-height: 58px;
      padding: 12px 14px;
      border: 1px solid var(--ink);
      background: transparent;
      color: var(--ink);
      font: 700 14px/1.1 "Avenir Next", "Trebuchet MS", sans-serif;
      cursor: pointer;
      transition: transform .14s ease, background .14s ease, color .14s ease;
    }
    button:hover { transform: translateY(-2px); }
    button[data-label="alexander"] { background: var(--green); color: white; border-color: var(--green); }
    button[data-label="other"] { background: var(--orange); color: white; border-color: var(--orange); }
    button[data-label="mixed"] { border-color: var(--yellow); }
    button.selected { outline: 4px solid rgba(224,173,63,.35); }
    .nav { display: flex; justify-content: space-between; align-items: center; margin-top: 18px; }
    .nav button { min-height: 42px; border: 0; padding: 8px 0; color: var(--muted); }
    #status { color: var(--green); font-size: 13px; }
    .keys { margin-top: 20px; color: var(--muted); font-size: 12px; text-align: center; }
    kbd { padding: 2px 6px; border: 1px solid var(--line); background: rgba(255,255,255,.5); font-family: inherit; }
    .finished { text-align: center; padding: 48px 0; }
    .finished h2 { font-family: "Iowan Old Style", serif; font-size: 44px; margin: 0 0 12px; }
    @media (max-width: 720px) {
      header { align-items: start; flex-direction: column; }
      .progress-copy { text-align: left; }
      .choices { grid-template-columns: 1fr 1fr; }
      .card { border-radius: 4px 22px 4px 22px; }
    }
  </style>
</head>
<body>
  <div class="shell">
    <header>
      <div><p class="eyebrow">PRAVDA · локальная разметка</p><h1>Чей это голос?</h1></div>
      <div class="progress-copy"><strong id="counter">0 / 0</strong><span>размечено и сохранено</span></div>
    </header>
    <div class="track"><div id="bar"></div></div>
    <main class="card" id="card">
      <div class="meta"><span id="position"></span><span id="timecode"></span></div>
      <div class="wave"><i></i><i></i><i></i><i></i><i></i></div>
      <audio id="audio" controls preload="metadata"></audio>
      <blockquote id="text"></blockquote>
      <p class="question">Кто говорит в этом фрагменте?</p>
      <div class="choices">
        <button data-label="alexander">Александр <small>[A]</small></button>
        <button data-label="other">Собеседник <small>[S]</small></button>
        <button data-label="mixed">Несколько голосов <small>[M]</small></button>
        <button data-label="uncertain">Не уверен <small>[U]</small></button>
      </div>
      <div class="nav"><button id="prev">← Назад</button><span id="status">Сохраняется локально</span><button id="next">Дальше →</button></div>
      <div class="keys"><kbd>Пробел</kbd> воспроизвести · <kbd>A</kbd>/<kbd>S</kbd>/<kbd>M</kbd>/<kbd>U</kbd> отметить</div>
    </main>
  </div>
  <script>
    let manifest = null;
    let labels = {};
    let index = 0;
    const audio = document.querySelector('#audio');
    const buttons = [...document.querySelectorAll('[data-label]')];

    function formatTime(value) {
      const minutes = Math.floor(value / 60);
      const seconds = Math.floor(value % 60).toString().padStart(2, '0');
      return `${minutes}:${seconds}`;
    }
    function updateProgress() {
      const done = Object.keys(labels).length;
      document.querySelector('#counter').textContent = `${done} / ${manifest.items.length}`;
      document.querySelector('#bar').style.width = `${100 * done / manifest.items.length}%`;
    }
    function render() {
      const item = manifest.items[index];
      if (!item) return;
      document.querySelector('#position').textContent = `Реплика ${index + 1} из ${manifest.items.length}`;
      document.querySelector('#timecode').textContent = `${formatTime(item.start)}–${formatTime(item.end)}`;
      document.querySelector('#text').textContent = item.text;
      audio.src = item.audio;
      buttons.forEach(button => button.classList.toggle('selected', labels[item.id] === button.dataset.label));
      document.querySelector('#prev').disabled = index === 0;
      document.querySelector('#next').textContent = index === manifest.items.length - 1 ? 'К первой незаполненной →' : 'Дальше →';
      updateProgress();
    }
    async function save(label) {
      const item = manifest.items[index];
      labels[item.id] = label;
      document.querySelector('#status').textContent = 'Сохраняю…';
      render();
      const response = await fetch('/api/labels', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({clipId: item.id, label})
      });
      if (!response.ok) {
        document.querySelector('#status').textContent = 'Ошибка сохранения';
        return;
      }
      document.querySelector('#status').textContent = 'Сохранено';
      const next = manifest.items.findIndex((candidate, i) => i > index && !labels[candidate.id]);
      if (next >= 0) index = next;
      else if (index < manifest.items.length - 1) index += 1;
      else {
        const firstMissing = manifest.items.findIndex(candidate => !labels[candidate.id]);
        if (firstMissing >= 0) index = firstMissing;
      }
      render();
    }
    async function boot() {
      [manifest, labels] = await Promise.all([
        fetch('/manifest.json').then(response => response.json()),
        fetch('/api/labels').then(response => response.json()).then(data => data.labels || {})
      ]);
      const firstMissing = manifest.items.findIndex(item => !labels[item.id]);
      index = firstMissing >= 0 ? firstMissing : 0;
      render();
    }
    buttons.forEach(button => button.addEventListener('click', () => save(button.dataset.label)));
    document.querySelector('#prev').addEventListener('click', () => { index = Math.max(0, index - 1); render(); });
    document.querySelector('#next').addEventListener('click', () => {
      if (index < manifest.items.length - 1) index += 1;
      else {
        const firstMissing = manifest.items.findIndex(item => !labels[item.id]);
        index = firstMissing >= 0 ? firstMissing : 0;
      }
      render();
    });
    window.addEventListener('keydown', event => {
      if (event.code === 'Space') { event.preventDefault(); audio.paused ? audio.play() : audio.pause(); }
      if (event.key.toLowerCase() === 'a') save('alexander');
      if (event.key.toLowerCase() === 's') save('other');
      if (event.key.toLowerCase() === 'm') save('mixed');
      if (event.key.toLowerCase() === 'u') save('uncertain');
      if (event.key === 'ArrowLeft') { index = Math.max(0, index - 1); render(); }
      if (event.key === 'ArrowRight') { index = Math.min(manifest.items.length - 1, index + 1); render(); }
    });
    boot();
  </script>
</body>
</html>
"""


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    subparsers = parser.add_subparsers(dest="command", required=True)

    build = subparsers.add_parser("build")
    build.add_argument("--audio", type=Path, required=True)
    build.add_argument("--transcript", type=Path, required=True)
    build.add_argument("--root", type=Path, required=True)
    build.add_argument("--video-id", required=True)
    build.add_argument("--count", type=int, default=60)
    build.add_argument("--force", action="store_true")

    serve = subparsers.add_parser("serve")
    serve.add_argument("--root", type=Path, required=True)
    serve.add_argument("--port", type=int, default=8765)
    return parser.parse_args()


def load_words(path: Path) -> list[dict]:
    words = []
    for line in path.read_text(encoding="utf-8").splitlines():
        if not line.strip():
            continue
        row = json.loads(line)
        for word in row.get("words", []):
            start = word.get("start")
            end = word.get("end")
            raw = word.get("word", "")
            if start is None or end is None or not raw.strip():
                continue
            words.append({"start": float(start), "end": float(end), "raw": str(raw)})
    return sorted(words, key=lambda item: (item["start"], item["end"]))


def split_utterances(words: list[dict]) -> list[dict]:
    utterances = []
    current: list[dict] = []

    def flush() -> None:
        nonlocal current
        if not current:
            return
        text = "".join(word["raw"] for word in current).strip()
        start = current[0]["start"]
        end = current[-1]["end"]
        if end - start >= 0.75 and len(re.findall(r"\w+", text, flags=re.UNICODE)) >= 2:
            utterances.append({"start": start, "end": end, "text": text})
        current = []

    for word in words:
        if current:
            gap = word["start"] - current[-1]["end"]
            duration = current[-1]["end"] - current[0]["start"]
            if gap >= 0.62 or duration >= 7.5:
                flush()
        current.append(word)
        duration = current[-1]["end"] - current[0]["start"]
        if duration >= 1.1 and re.search(r"[.!?…][\"')\]]?$", word["raw"].strip()):
            flush()
    flush()
    return utterances


def evenly_select(items: list[dict], count: int) -> list[dict]:
    if len(items) <= count:
        return items
    if count <= 1:
        return [items[0]]
    indices = []
    for position in range(count):
        index = round(position * (len(items) - 1) / (count - 1))
        if index not in indices:
            indices.append(index)
    return [items[index] for index in indices]


def build_labeler(args: argparse.Namespace) -> None:
    args.root.mkdir(parents=True, exist_ok=True)
    clips_dir = args.root / "clips"
    clips_dir.mkdir(parents=True, exist_ok=True)
    candidates = split_utterances(load_words(args.transcript))
    selected = evenly_select(candidates, args.count)
    items = []
    for index, candidate in enumerate(selected):
        clip_id = f"{args.video_id}-{index:03d}"
        filename = f"{clip_id}.m4a"
        target = clips_dir / filename
        start = max(0.0, candidate["start"] - 0.18)
        end = candidate["end"] + 0.18
        if args.force or not target.exists():
            subprocess.run(
                [
                    "ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
                    "-ss", f"{start:.3f}", "-to", f"{end:.3f}", "-i", str(args.audio),
                    "-vn", "-c:a", "aac", "-b:a", "96k", "-movflags", "+faststart", str(target),
                ],
                check=True,
            )
        items.append(
            {
                "id": clip_id,
                "start": round(candidate["start"], 3),
                "end": round(candidate["end"], 3),
                "duration": round(candidate["end"] - candidate["start"], 3),
                "text": candidate["text"],
                "audio": f"clips/{filename}",
            }
        )
    manifest = {
        "videoId": args.video_id,
        "sourceTranscript": str(args.transcript),
        "candidateCount": len(candidates),
        "items": items,
    }
    (args.root / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (args.root / "index.html").write_text(PAGE, encoding="utf-8")
    labels_path = args.root / "labels.json"
    if not labels_path.exists():
        labels_path.write_text(
            json.dumps({"videoId": args.video_id, "labels": {}, "updatedAt": None}, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
    print(json.dumps({"root": str(args.root), "clips": len(items), "candidates": len(candidates)}, ensure_ascii=False))


def serve_labeler(args: argparse.Namespace) -> None:
    root = args.root.resolve()
    labels_path = root / "labels.json"
    manifest_path = root / "manifest.json"
    if not manifest_path.exists():
        raise SystemExit(f"Missing {manifest_path}; run build first")
    lock = threading.Lock()

    class Handler(SimpleHTTPRequestHandler):
        def __init__(self, *handler_args, **handler_kwargs):
            super().__init__(*handler_args, directory=str(root), **handler_kwargs)

        def send_json(self, payload: dict, status: int = 200) -> None:
            body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
            self.send_response(status)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)

        def do_GET(self) -> None:
            if urlparse(self.path).path == "/api/labels":
                with lock:
                    payload = json.loads(labels_path.read_text(encoding="utf-8"))
                self.send_json(payload)
                return
            super().do_GET()

        def do_POST(self) -> None:
            if urlparse(self.path).path != "/api/labels":
                self.send_json({"error": "not found"}, 404)
                return
            try:
                length = int(self.headers.get("Content-Length", "0"))
                incoming = json.loads(self.rfile.read(length).decode("utf-8"))
                clip_id = str(incoming["clipId"])
                label = str(incoming["label"])
                if label not in {"alexander", "other", "mixed", "uncertain"}:
                    raise ValueError("invalid label")
                with lock:
                    payload = json.loads(labels_path.read_text(encoding="utf-8"))
                    payload.setdefault("labels", {})[clip_id] = label
                    payload["updatedAt"] = datetime.now(timezone.utc).isoformat()
                    temp_path = labels_path.with_suffix(".tmp")
                    temp_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
                    temp_path.replace(labels_path)
                self.send_json({"ok": True, "clipId": clip_id, "label": label})
            except (KeyError, ValueError, json.JSONDecodeError) as error:
                self.send_json({"error": str(error)}, 400)

        def log_message(self, format_string: str, *log_args) -> None:
            print(f"labeler: {format_string % log_args}")

    server = ThreadingHTTPServer(("127.0.0.1", args.port), Handler)
    print(f"http://127.0.0.1:{args.port}", flush=True)
    server.serve_forever()


def main() -> None:
    args = parse_args()
    if args.command == "build":
        build_labeler(args)
    else:
        serve_labeler(args)


if __name__ == "__main__":
    main()

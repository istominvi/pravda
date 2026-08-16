#!/usr/bin/env bash
set -euo pipefail

REPO_NAME="${1:-baza}"
VISIBILITY="${2:-private}"

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI (gh) is required: https://cli.github.com/" >&2
  exit 1
fi

if [[ "$VISIBILITY" != "private" && "$VISIBILITY" != "public" ]]; then
  echo "Visibility must be private or public." >&2
  exit 1
fi

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  git init -b main
  git add .
  git commit -m "Initial React prototype: Chrono, Connections and AI"
fi

gh repo create "$REPO_NAME" --"$VISIBILITY" --source=. --remote=origin --push

echo "Repository created. Enable GitHub Pages with GitHub Actions in Settings → Pages."

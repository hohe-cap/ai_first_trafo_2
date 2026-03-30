#!/usr/bin/env bash
#
# Creates a deployment package (ZIP) for sending to colleagues.
#
# Usage:
#   cd app
#   ./deploy/create-package.sh
#
# Output: ~/craft-explorer-package.zip

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
OUTPUT="${1:-$HOME/craft-explorer-package.zip}"
TMP_DIR=$(mktemp -d)
PKG="$TMP_DIR/craft-explorer-package"

echo "Creating deployment package..."

# Copy app/ (exclude build artifacts)
mkdir -p "$PKG"
rsync -a "$PROJECT_ROOT/app/" "$PKG/app/" \
  --exclude node_modules \
  --exclude dist \
  --exclude server-dist \
  --exclude server-data \
  --exclude standalone \
  --exclude 'public/data/*.yaml' \
  --exclude '*.local' \
  --exclude .DS_Store

# Copy question bank YAMLs
mkdir -p "$PKG/deliverables/question_banks"
cp "$PROJECT_ROOT/deliverables/question_banks/"*.yaml "$PKG/deliverables/question_banks/"

# Copy .dockerignore from project root
cp "$PROJECT_ROOT/.dockerignore" "$PKG/"

# Copy setup guide to package root
cp "$SCRIPT_DIR/SETUP-ANLEITUNG.md" "$PKG/"

# Create ZIP
rm -f "$OUTPUT"
(cd "$TMP_DIR" && zip -r "$OUTPUT" craft-explorer-package/)

# Cleanup
rm -rf "$TMP_DIR"

SIZE=$(du -h "$OUTPUT" | cut -f1)
echo ""
echo "Package created: $OUTPUT ($SIZE)"
echo ""
echo "Contents:"
echo "  app/                          — Application source code + Dockerfile"
echo "  app/deploy/                   — Deployment scripts + documentation"
echo "  deliverables/question_banks/  — YAML question banks"
echo "  .dockerignore                 — Docker build filter"
echo "  SETUP-ANLEITUNG.md            — Setup guide for colleagues"

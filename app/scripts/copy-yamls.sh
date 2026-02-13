#!/bin/bash
# Copies question bank YAMLs from the source of truth to the app's public/data/ folder.
# Run this before build or dev to ensure the latest YAMLs are available.

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
APP_DIR="$(dirname "$SCRIPT_DIR")"
PROJECT_ROOT="$(dirname "$APP_DIR")"

SOURCE="$PROJECT_ROOT/deliverables/question_banks"
TARGET="$APP_DIR/public/data"

mkdir -p "$TARGET"

# Copy only YAML files (not METHODOLOGY.md or other non-YAML files)
cp "$SOURCE"/*.yaml "$TARGET/" 2>/dev/null

COPIED=$(ls "$TARGET"/*.yaml 2>/dev/null | wc -l)
echo "Copied $COPIED YAML files from $SOURCE to $TARGET"

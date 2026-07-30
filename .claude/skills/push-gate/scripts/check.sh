#!/usr/bin/env bash
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"

echo "==> 1/3 Typecheck (tsc --noEmit)"
npx tsc --noEmit

echo "==> 2/3 Lint (eslint . --max-warnings=0)"
npx eslint . --max-warnings=0

echo "==> 3/3 Production build (next build)"
npx next build

echo "All checks passed — safe to push to main."

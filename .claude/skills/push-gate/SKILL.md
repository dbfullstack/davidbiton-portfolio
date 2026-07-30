---
name: push-gate
description: >-
  Pre-push quality gate for davidbiton-portfolio. Use before any `git push`
  to `main` — runs typecheck, lint, and a production build, and only allows
  the push if all three exit 0 with zero errors/warnings. Trigger on "push",
  "push to main", "ready to push", "ship this", or "quality gate".
---

# Pre-push quality gate

Vercel auto-deploys `main` on push (~15 min build) — this gate catches
type errors, lint issues, and build failures in seconds instead of finding
out after a wasted round-trip to Vercel.

## Run the gate

```bash
bash .claude/skills/push-gate/scripts/check.sh
```

This runs, **in order, stopping at the first failure**:

1. `npx tsc --noEmit` — must exit `0` (zero type errors).
2. `npx eslint . --max-warnings=0` — must exit `0` (zero errors **and** zero
   warnings; `--max-warnings=0` is what turns warnings into a hard fail).
3. `npx next build` — must exit `0` (production build succeeds; this is the
   exact command Vercel runs).

"Zero issues" means all three commands exit `0` — not "mostly passes" or
"only failed on warnings." If any step fails, fix the reported issue,
re-run the whole script (don't skip ahead to a later step), and only push
once it prints the final success line.

## Gating a push

1. Stage and commit your changes as normal.
2. Run the gate script above.
3. Only run `git push` after it prints `All checks passed — safe to push to main.`
4. If it fails, do not push — fix, re-run, repeat. Never push with a
   failing gate, and never bypass this by skipping straight to `git push`.

This only applies to pushes that land on `main` (directly or via a branch
merged into `main`). Throwaway local branches you're not pushing don't need
it, but running it is always safe/cheap.

## Note on concurrent sessions

If another Claude Code session or dev server is active on this same repo
(check `git status` for unfamiliar changes, or a "port already in use" /
"another next dev server is already running" message), coordinate before
running `next build` — it's generally safe to run alongside a `next dev`
process (they use separate build/dev output directories), but don't run
this script's build step concurrently with another `next build` in the
same repo.

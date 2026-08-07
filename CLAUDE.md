# Repo conventions

## Sync with `main` at the start of every session, before making changes

This repo has a recurring failure mode: real feature work happens on
`claude/hiieko-astro-redesign-hkj04z`, but small unrelated changes
occasionally land directly on `main` (e.g. Vercel's own bot PRs installing
Speed Insights / Web Analytics). If the feature branch isn't merged back
promptly, the two drift, and the drift compounds silently across sessions
until `main` and the branch can no longer auto-merge.

Before starting any new work in this repo:

```
git fetch origin main claude/hiieko-astro-redesign-hkj04z
git log origin/main..origin/claude/hiieko-astro-redesign-hkj04z --oneline   # what the branch has that main doesn't
git log origin/claude/hiieko-astro-redesign-hkj04z..origin/main --oneline  # what main has that the branch doesn't
```

If the second command shows anything, merge `origin/main` into the feature
branch (`git merge origin/main`) and resolve any conflicts *before* starting
the requested task, not after. Do not assume the branch is a strict superset
of `main` — small commits (dependency installs, bot PRs) can land on `main`
independently, and blindly favoring "the branch" during a conflict can
silently discard real work. Check what each side's conflicting change
actually is before resolving it.

At the end of a work session, merge the feature branch back into `main` via
PR (this repo's established pattern — see PRs #1–#9) rather than leaving
work stranded on the branch for another session to rediscover later.

## Known landmine: `.reveal` wrapper + `IntersectionObserver` threshold

`src/scripts/reveal.ts` only adds the `visible` class (opacity 0 → 1) once
15% of a `.reveal` element's bounding box has entered the viewport. If a
single `.reveal` wraps a page header *and* a data-driven grid/list, the
wrapper's height grows with the collection — past roughly 6.67x the
viewport height, 15% visibility becomes geometrically unreachable even at
the best-case scroll position, and the section (including the header) never
appears. This has already happened once (`/projects/`, `/team/`, fixed by
scoping `.reveal` to just the header block, never the grid itself).

When adding `.reveal` to a new section, keep it scoped to bounded content
(a fixed-size header, a short intro block) — never wrap a
collection-backed grid whose length can grow over time. If auditing for
this, check actual rendered height against `viewport height / 0.15` at
both desktop and mobile widths, not just "does it look fine right now."

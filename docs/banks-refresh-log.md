# Banks refresh log

One entry per run of the biweekly "Banks AI refresh" routine (newest first). The
`banks-refresh-notify` GitHub Action emails the newest entry whenever this file changes on
main, so a run that found nothing still appends a short "no changes" entry.

Entry format (keep it — the action reads the first `## ` section):

```
## YYYY-MM-DD — N banks updated, M unchanged
- **Bank name** — what changed (timeline / numbers / quotes / leadership / sources), with the source host and date.
- Verification: tracker:check ✓, --bank-links ✓, tsc ✓, build ✓ (or what failed and what was done about it).
- Skipped candidates (allowed hosts only, but not added) and why, if any.
```

## 2026-09-09 — setup, 0 banks updated, 20 unchanged
- Routine created; this entry only tests the email path.
- Verification: n/a (no data changed).

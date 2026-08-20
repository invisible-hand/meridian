# AI Regulation Tracker — weekly maintenance instructions

The tracker lives at `https://www.bankingnewsai.com/ai-regulation`. All content
is data-driven from **`lib/regulators.ts`** — one `Regulator` entry per
authority. Pages render from that file; there is nothing to edit in
`app/ai-regulation/`.

## Why this exists

The tracker is AI-search (grounding-query) infrastructure: assistants
researching "who regulates AI in banking" cite standing, dated, link-rich
reference pages. Freshness is a citation feature — a tracker that visibly went
stale loses the position. It must therefore be checked **weekly** and updated
whenever a covered authority moves.

## The update procedure (every run)

1. For each authority below, check its sources for anything new since the
   entry's `lastUpdated` date (search the web AND check the listed primary
   pages directly).
2. If something new and material happened:
   - Add a `timeline` entry (newest facts, official link — see link rules).
   - Update `latestMove`, and `answerFirst` if the headline picture changed.
   - Refresh `watchNext` (remove items that happened, add what's next).
   - Update the FAQ if an answer is now wrong — **an outdated FAQ answer is
     worse than no update**.
   - Bump that entry's `lastUpdated` to today.
3. If an expected event passed without happening (e.g., a report due in
   October that didn't appear), update `watchNext` wording so it doesn't read
   as stale, and bump `lastUpdated`.
4. If nothing changed for an authority, leave its `lastUpdated` alone.
5. If any entry changed, bump `TRACKER_LAST_REVIEWED` to today.
6. Verify EVERY link you add returns 200:
   `curl -s -o /dev/null -w "%{http_code}" -L -A "Mozilla/5.0" <url>`
7. `npx tsc --noEmit && npm run build` must pass.
8. Commit (`feat(tracker): ...` or `fix(tracker): ...`), push to `main`
   (auto-deploys via Vercel).
9. After deploy, ping IndexNow for changed URLs (Bing grounding depends on
   it): run a small script that imports `pingIndexNow` from `@/lib/indexnow`
   and submits `/ai-regulation` plus each changed `/ai-regulation/<slug>`,
   with `npx tsx --env-file=.env.local <script>` from the repo root.

### Link rules

- **Official sources only** in `timeline[].link`: the regulator's own domain,
  eur-lex, federalregister.gov, gov.uk, nvlpubs.nist.gov. Law-firm memos and
  news sites are for *finding* facts, never for linking.
- Every new timeline entry should have a link. Links exist so readers (and AI
  models) can verify the page isn't hallucinating.
- Never keep a link that 404s — find the replacement or link the authority's
  relevant hub page.

### Content rules

- `answerFirst` is the quotable block models extract — keep it 2–4
  self-contained sentences, current, and specific (dates, document names,
  penalty figures).
- Dates in `timeline[].date` are `YYYY-MM-DD` (use `-01` day when only the
  month is known).
- Facts must come from a primary source or two independent secondary sources.
  When a date/detail can't be confirmed, write around it rather than guess.
- Don't delete old timeline entries — the history is the value. Correct them
  if wrong.

## Per-authority checklists

### eu-ai-act — EU AI Act
- Sources: https://artificialintelligenceact.eu/ (implementation tracker and
  news), https://digital-strategy.ec.europa.eu/en/policies/ai-office (AI
  Office), eur-lex for amendments.
- Watch for: Commission/AI Office guidance on Annex III credit scoring;
  delegated/implementing acts; any "digital omnibus" simplification amendments
  changing dates or scope; national market-surveillance enforcement against a
  bank; guidance on 'significant modification' for legacy models.
- Standing dates: high-risk obligations applicable since 2026-08-02;
  Art 6(1) product-safety high-risk from 2027-08-02.

### fsb — Financial Stability Board
- Sources: https://www.fsb.org/press/ and https://www.fsb.org/publications/
  (filter AI).
- Watch for: **final "Sound Practices for Responsible Adoption of AI" report,
  due October 2026** — when it lands, this is a major update: new timeline
  entry, rewrite answerFirst, and it likely deserves a story in the daily
  digest too. Also: annual AI monitoring updates, anything on agentic AI or
  third-party concentration.

### occ — Office of the Comptroller of the Currency
- Sources: https://www.occ.gov/news-issuances/bulletins/ and
  /news-releases/ (by year).
- Watch for: the **AI governance guidance signalled in the May 2026
  Semiannual Risk Perspective**; each new Semiannual Risk Perspective
  (spring ~May, fall ~Nov/Dec) — check its AI section; anything touching
  Bulletin 2026-13 / model risk.

### federal-reserve — Federal Reserve
- Sources: https://www.federalreserve.gov/supervisionreg/srletters/srletters.htm
  (new SR letters), /newsevents/pressreleases/ (bank regulation),
  /newsevents/speech/ (supervision speeches on AI).
- Watch for: follow-on guidance covering generative/agentic AI (the gap SR
  26-2 deliberately left); FSOC annual report AI treatment (December);
  Vice Chair for Supervision speeches.

### cfpb — Consumer Financial Protection Bureau
- Sources: https://www.consumerfinance.gov/compliance/circulars/ and
  /about-us/newsroom/.
- Watch for: new circulars on AI/algorithms; enforcement actions involving
  ML underwriting or chatbots; anything modifying Circulars 2022-03 /
  2026-03. Also try to find the direct URL for Circular 2026-03 (currently
  linked to the circulars listing) and upgrade the link.

### ecb — European Central Bank (SSM)
- Sources: https://www.bankingsupervision.europa.eu/press/ (speeches,
  interviews, press releases), supervisory priorities page, Supervision
  Newsletter (quarterly).
- Watch for: a dedicated ECB guide/expectations document on AI (would be
  major); SREP references to AI Act readiness; Financial Stability Review
  AI chapters (May and November).

### eba — European Banking Authority
- Sources: https://www.eba.europa.eu/publications-and-media/press-releases,
  /regulation-and-policy/digital-finance.
- Watch for: supervisory-convergence output on AI Act implementation
  (2026–27 workplan); updates to ML-for-IRB expectations; next AI adoption
  monitoring report; AI Board Subgroup on Financial Services outputs.

### uk — Bank of England / PRA / FCA
- Sources: https://www.bankofengland.co.uk/news (and the monthly PRA
  Regulatory Digest), https://www.fca.org.uk/news,
  https://www.bankofengland.co.uk/financial-stability (FPC on AI).
- Watch for: **results of the 2026 AI survey (foundation models + agentic
  AI)** — first regulator dataset of its kind; the regulators' AI-innovation
  plans required by the Jan 2026 government letters (due ~May 2026 — find and
  link them); FCA AI live-testing outcomes; any shift away from the
  tech-agnostic position.

### basel-committee — BCBS
- Sources: https://www.bis.org/press/pressrels.htm and
  https://www.bis.org/bcbs/publications.htm.
- Watch for: anything moving from "monitoring" to standards on AI; new
  newsletters on AI/ML; digitalisation follow-ups; work programme updates
  (usually January).

### nist — NIST AI RMF
- Sources: https://www.nist.gov/itl/ai-risk-management-framework,
  https://airc.nist.gov/.
- Watch for: AI RMF 2.0 or updates to the Generative AI Profile; any US
  banking-agency document formally referencing the RMF (upgrades its status
  from de facto to cited standard); agentic-AI profiles.

## Cross-cutting

- If a new authority becomes clearly load-bearing for AI-in-banking (e.g.,
  SEC/FINRA move on AI in a way that reaches banks, a major US state law, or
  IOSCO for markets), propose adding a new entry rather than stretching an
  existing one. New slugs also need an IndexNow ping and appear in the sitemap
  automatically.
- Keep this file's checklists current: when a watched item lands, replace it
  here with the next thing to watch.

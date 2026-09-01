# AI Regulation Tracker — weekly maintenance instructions

The tracker lives at `https://www.bankingnewsai.com/ai-regulation`. Everything
renders from two data files:

| File | Holds | Unit |
|---|---|---|
| `lib/regulatory-documents.ts` | `DOCUMENTS` — one `RegDocument` per primary source (bulletin, circular, regulation, report, speech, statute) | **the atomic unit** — each has its own page at `/ai-regulation/documents/<slug>` |
| `lib/regulators.ts` | `REGULATOR_ENTRIES` — one `Regulator` per authority (18 today) | hub row + `/ai-regulation/<slug>` page |

Everything else is **derived** in `lib/tracker.ts` and needs no editing:
authority timelines (documents + `milestones`), the deadlines calendar
(`effectiveDate`, `commentDeadline`, milestones), the use-case matrix
(`useCases`), document statuses refined from dates, the hub's "open for
comment / next deadlines" block, the compliance checklist
(`/ai-regulation/compliance-checklist`, from deadlines + in-force documents),
the warnings page (`/ai-regulation/regulator-warnings`, from documents with
`warning: true`), the compliance-officer orientation
(`/ai-regulation/for-compliance-officers`), sitemap entries, and the
cross-links between the daily brief and the tracker (text matching on
`aliases`). There is nothing to edit in `app/ai-regulation/`.

### Deep dives — answering a grounding query

`Regulator.deepDives` holds long-form answers to specific questions an authority
owns. They exist because of a measured pattern: when Bing Webmaster Tools' AI
Performance report shows a **grounding query whose citation count rises while
our citation share falls**, Copilot is answering that question more often and
citing competitors alongside us — the fix is to make our page the fullest
answer to that exact question, not to publish a new page (never split a cited
asset; `/ai-regulation/cfpb` is a top-cited page).

A deep dive is: a question phrased the way the query is phrased (it becomes the
section H2 *and* a FAQPage entry), a 2–4 sentence quotable answer, a
requirements table that may cross authorities (`authority` accepts any tracked
slug, `docSlug` links the primary source), context paragraphs, and a
"what this means in practice" list. Keep the answer self-contained: it is the
block a model lifts.

When adding one: take the wording from the grounding query, cover the whole
question even where it reaches other authorities, and cite only documents that
already exist in `DOCUMENTS`. `npm run tracker:check` enforces the id format,
the question mark, a minimum answer length and every reference.

One extra field to remember when adding documents: set **`warning: true`** on
any document that is a warning to the industry — an alert (FinCEN), a
Dear-CEO/industry letter (ECB, NY DFS), a risk report with an AI warning
section (OCC Semiannual Risk Perspective, FDIC Risk Review, FSB/FSOC
stability reports). That flag is what feeds the warnings page; a warning-type
document without it is invisible there. The FIRST_READS list in
`app/ai-regulation/for-compliance-officers/page.tsx` is the one hand-picked
list outside the data files — revisit it only when a listed document is
superseded (e.g. the FSB final report replacing the consultation).

## Why this exists

The tracker is AI-search (grounding-query) infrastructure: assistants and
search engines cite standing, dated, link-rich reference pages, and the
queries that reach page 1 are **document identifiers** ("occ bulletin
2026-13", "sr 26-2", "cfpb circular 2022-03"). Freshness is a citation
feature — a tracker that visibly went stale loses the position. It is checked
**weekly** and updated whenever a covered authority moves. Maintenance is
fully automatic: the weekly cloud routine does everything below, including
the commit; nobody reviews by hand.

## The update procedure (every run)

1. For each authority in `REGULATOR_ENTRIES`, check its sources (per-authority
   checklist below) for anything new since the entry's `lastUpdated` — search
   the web AND open the listed primary pages directly.
2. **If a new document was published** (a bulletin, circular, rule, report,
   consultation, speech that says something material about AI):
   - Add a `RegDocument` to `lib/regulatory-documents.ts` — every field, in
     the order used by the neighbours. Slug = identifier-based, kebab-case,
     never contains a status word (`occ-bulletin-2026-41`, `fed-sr-26-9`,
     `fsb-ai-sound-practices-2026`). It is a URL forever; never rename one.
   - `aliases`: the strings a news story would literally contain ("Bulletin
     2026-41", "SR 26-9"). ≥ 6 characters each, unambiguous.
   - `status`: `Proposed` | `Comment period open` (+ `commentDeadline`) |
     `Final` (+ `effectiveDate` if it has one) | `In force` | `Superseded`
     (+ `supersededBy`) | `Withdrawn`. Rendering refines this from dates, so a
     `Comment period open` document auto-flips once the deadline passes and a
     `Final` one auto-flips to `In force` on its effective date.
   - If it replaces an older document, set `supersedes` on it AND
     `supersededBy` + `status: "Superseded"` on the old one. Interagency
     issuances (Fed / OCC / FDIC versions of one guidance) each get their own
     document with the sibling slugs in `interagency`.
   - `answerFirst` 2–4 quotable sentences; `keyPoints` 5–8 concrete bullets;
     `whatChanged` one paragraph; `faq` 2–3 questions; `useCases` from the
     `USE_CASES` list in `lib/regulators.ts`; `lastUpdated` = today.
   - Then update the authority entry: `latestMove`, `keyDocument` if it is now
     the headline document, `answerFirst` if the picture changed, `watchNext`
     (remove what happened, add what's next), FAQ if an answer is now wrong,
     `lastUpdated` = today. **An outdated FAQ answer is worse than no update.**
   - If the document also deserves a story in the daily digest, that happens
     through the normal pipeline — do not edit digests.
3. **If something happened that is not a document** (an obligation took
   effect, a survey closed, a deadline passed), add a `milestones` entry to
   the authority (`docType: "Milestone"`, official link) and bump
   `lastUpdated`.
4. If an expected event passed without happening (a report due in October
   that didn't appear), reword `watchNext` so it doesn't read as stale, and
   bump `lastUpdated`.
5. If nothing changed for an authority, leave its `lastUpdated` alone.
6. If any entry or document changed, bump `TRACKER_LAST_REVIEWED` in
   `lib/regulators.ts` to today.
7. Run `npm run tracker:check -- --links`. It must print `0 errors`. It
   verifies slugs, references, dates, official-domain links, alias length and
   that every link returns 200. Fix anything it reports — never skip it.
8. `npx tsc --noEmit && npm run build` must pass (`build` runs the structural
   check again).
9. Commit (`feat(tracker): …` / `fix(tracker): …`), push to `main`
   (auto-deploys via Vercel).
10. IndexNow is automatic: the daily send cron (`app/api/cron/send`) submits
    every tracker URL whose `lastUpdated` is within the last 7 days. For an
    immediate push after a big change, run `npm run tracker:indexnow` locally
    (needs `INDEXNOW_KEY` in `.env.local`).

### Link rules

- **Official sources only** in `link`: the regulator's own domain, eur-lex,
  federalregister.gov, govinfo.gov, congress.gov, gov.uk, nvlpubs.nist.gov,
  whitehouse.gov, gao.gov (the validator has the allow-list — extend it there
  if a new authority is added). Law-firm memos and news sites are for
  *finding* facts, never for linking.
- Every document must have a link. Links exist so readers (and AI models)
  can verify the page isn't hallucinating.
- Never keep a link that 404s — find the replacement or link the authority's
  relevant hub page. Rescinded OCC bulletins live under
  `occ.gov/static/rescinded-bulletins/`; eur-lex answers 202 to non-browser
  clients (the validator accepts that).
- sec.gov returns 403 to generic curl user-agents; use a declared
  `"name email"` User-Agent when checking by hand.
- **bis.org migrated to a new site in 2026**: old `/press/pNNNNNN.htm` and
  `/bcbs/publ/dNNN.htm` URLs now redirect to `/media-releases/<date>-<slug>` and
  `/publications/<slug>`. The old publication URLs still redirect correctly, but
  old press-release URLs 404. Get the real URL from
  `https://www.bis.org/committees/bcbs/news` — the slugs are truncated and end in
  `-0`, so guessing them fails. (Found 2026-09-01 by `tracker:check --links`.)

### Content rules

- `answerFirst` is the quotable block models extract — 2–4 self-contained
  sentences, current, specific (dates, document numbers, penalty figures).
- Dates are `YYYY-MM-DD`. Use the actual publication date. Never guess a
  document number or date — if it can't be confirmed from a primary source
  or two independent secondary sources, write around it or leave it out.
  (In August 2026 the entry named a "CFPB Circular 2026-03" that does not
  exist on consumerfinance.gov; it was removed. Don't repeat that.)
- Don't delete old documents or milestones — the history is the value.
  Correct them if wrong; mark them `Superseded`/`Withdrawn` when that
  happens.
- No serif font in the answer block (sans only) — a style rule, already in
  the CSS; don't touch it.

## Per-authority checklists

### federal-reserve — Federal Reserve
- Sources: https://www.federalreserve.gov/supervisionreg/srletters/srletters.htm
  (new SR letters), /newsevents/pressreleases/ (bank regulation),
  /newsevents/speech/ (supervision speeches on AI).
- Watch for: the **interagency RFI on AI / model risk** promised "in the near
  future" in April 2026 (would be a new document for Fed, OCC, FDIC); any
  follow-on guidance covering generative/agentic AI (the gap SR 26-2 left);
  Vice Chair for Supervision speeches.

### occ — Office of the Comptroller of the Currency
- Sources: https://www.occ.gov/news-issuances/bulletins/ and
  /news-releases/ (by year).
- Watch for: the same interagency AI RFI; each Semiannual Risk Perspective
  (spring ~May, fall ~Nov/Dec) — check its AI section; anything touching
  Bulletin 2026-13.

### fdic — FDIC
- Sources: https://www.fdic.gov/news/financial-institution-letters/,
  /news/press-releases/, /news/speeches/.
- Watch for: FILs adopting interagency AI issuances; FDiTech output; Risk
  Review AI/fraud sections; the interagency AI RFI.

### ncua — NCUA
- Sources: https://ncua.gov/regulation-supervision/letters-credit-unions-other-guidance,
  https://ncua.gov/regulation-supervision/regulatory-compliance-resources/credit-union-ai-resource-center,
  board actions/speeches.
- Watch for: any first AI-specific Letter to Credit Unions or rulemaking
  (NCUA has none yet — say so honestly); vendor-authority legislation;
  updates to the AI Resource Center (its page shows a modified date).

### cfpb — Consumer Financial Protection Bureau
- Sources: https://www.consumerfinance.gov/compliance/circulars/,
  /rules-policy/final-rules/, /about-us/newsroom/, the Withdrawn Guidance
  page.
- Watch for: litigation over the April 2026 Regulation B rule; any
  replacement guidance on adverse-action notices for ML models; AI-related
  enforcement or advisory opinions. Verify circular numbers on the circulars
  page before adding them.

### sec — Securities and Exchange Commission
- Sources: https://www.sec.gov/newsroom/press-releases,
  /rules-regulations/rulemaking-activity, /newsroom/speeches-statements,
  Division of Examinations priorities (each autumn).
- Watch for: FY2027 exam priorities (Oct/Nov 2026); AI Task Force output;
  AI-washing enforcement; any AI disclosure guidance.

### cftc — Commodity Futures Trading Commission
- Sources: https://www.cftc.gov/PressRoom/PressReleases,
  /LawRegulation/FederalRegister, Innovation Advisory Committee pages.
- Watch for: the compute-derivatives RFC outcome (comments closed ~Oct 20,
  2026); Innovation Task Force AI workstream deliverables; any AI staff
  advisory update.

### fincen — FinCEN
- Sources: https://www.fincen.gov/news-room/news, /resources/advisoriesbulletinsfact-sheets,
  Federal Register for the AML/CFT program rule.
- Watch for: **the AML/CFT program final rule** (2026 NPRM, comments closed
  Jun 9, 2026 — a final rule is a major update: new document, supersede the
  NPRM, rewrite answerFirst); new alerts on AI-enabled fraud/deepfakes.

### treasury — U.S. Treasury / FSOC
- Sources: https://home.treasury.gov/news/press-releases, FSOC pages
  (annual report each December).
- Watch for: FSOC 2026 Annual Report (December — supersede the 2025 one);
  remaining AIEOG deliverables; any Treasury AI RFI.

### ny-dfs — New York DFS
- Sources: https://www.dfs.ny.gov/industry-guidance/industry-letters,
  /reports_and_publications/press_releases, circular letters.
- Watch for: new AI industry letters; Part 500 amendments; RAISE Act
  frontier-AI office activity; AI-related enforcement.

### colorado-ai-act — Colorado AI Act / ADMT Act
- Sources: https://coag.gov/ai/, https://leg.colorado.gov/ (bill pages),
  Colorado Secretary of State rulemaking notices.
- Watch for: **AG final ADMT / chatbot rules** (hearing Oct 26, 2026;
  effective Jan 1, 2027); the xAI litigation; any further legislative delay.
  Note other state laws (California CPPA ADMT rules, Texas TRAIGA, Utah,
  Illinois) in `watchNext`; propose a new authority if one becomes
  load-bearing for banks.

### nist — NIST AI RMF
- Sources: https://www.nist.gov/itl/ai-risk-management-framework,
  https://airc.nist.gov/, https://csrc.nist.gov/.
- Watch for: the AI RMF revision under the 2025 AI Action Plan; IR 8596
  (Cyber AI Profile) initial public draft; COSAiS control overlays; CAISI
  agent-security outputs; any US banking-agency document formally citing
  the RMF.

### eu-ai-act — EU AI Act
- Sources: https://artificialintelligenceact.eu/ (implementation tracker),
  https://digital-strategy.ec.europa.eu/en/policies/ai-office, eur-lex.
- Standing dates (post-Digital-Omnibus, Reg. (EU) 2026/1744): Annex III
  high-risk incl. credit scoring from **2027-12-02**; Annex I from
  2028-08-02; Article 50 transparency since 2026-08-02; Consumer Credit
  Directive from 2026-11-20.
- Watch for: final Article 6 high-risk classification guidelines (end-2026);
  CEN-CENELEC harmonised standards; any further omnibus changes.

### ecb — European Central Bank (SSM)
- Sources: https://www.bankingsupervision.europa.eu/press/ (letters,
  speeches, newsletter), supervisory priorities page.
- Watch for: outcome of the **AI-cyber action plans due 31 Oct 2026** (SSM
  letter SSM-2026-0301); a dedicated ECB AI guide (would be major); FSR AI
  chapters (May, November).

### eba — European Banking Authority
- Sources: https://www.eba.europa.eu/publications-and-media/press-releases,
  /regulation-and-policy/digital-finance, ESAs joint statements.
- Watch for: supervisory-convergence output on AI Act implementation; next
  AI adoption report; ESA frontier-AI follow-ups; Work Programme 2027 (Oct).

### uk — Bank of England / PRA / FCA
- Sources: https://www.bankofengland.co.uk/news, https://www.fca.org.uk/news,
  https://www.gov.uk/government/organisations/hm-treasury.
- Watch for: **results of the 2026 AI survey** (closed 31 Jul 2026); FCA AI
  live-testing cohort outcomes; HMT AI Adoption Plan follow-ups; any shift
  from the tech-agnostic stance.

### fsb — Financial Stability Board
- Sources: https://www.fsb.org/press/ and /publications/.
- Watch for: **the final "Sound Practices for Responsible Adoption of AI"
  report (expected October 2026, G20 deliverable)** — major update: new
  document, supersede the consultation, rewrite answerFirst and the hub's
  "what changed" copy in `app/ai-regulation/page.tsx`.

### basel-committee — BCBS
- Sources: https://www.bis.org/press/pressrels.htm,
  https://www.bis.org/bcbs/publications.htm.
- Watch for: anything moving from "monitoring" to standards on AI; new AI
  newsletters; 2027–28 work programme (January).

## Cross-cutting

- New authority: add a `Regulator` entry (all fields incl. `aliases`), add
  its slug to `DISPLAY_ORDER` and, if US, `US_AUTHORITIES`, give it
  documents, extend the validator's `OFFICIAL_HOSTS` if its domain is new.
  Sitemap, hub, matrix and IndexNow pick it up automatically.
- The hub's hand-written "What changed in 2026" paragraphs and `HUB_FAQ` in
  `app/ai-regulation/page.tsx` are the only prose outside the data files —
  re-read them whenever a headline fact changes (EU dates, MRM guidance,
  CFPB Reg B, FSB final report).
- Keep this file's checklists current: when a watched item lands, replace it
  here with the next thing to watch.

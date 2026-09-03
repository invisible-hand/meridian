// Structural + link validation for the AI-regulation tracker data.
// Run: npm run tracker:check          (structure only, fast, used by `npm run build`)
//      npm run tracker:check -- --links  (also HEAD-checks every official link)
//
// Fails (exit 1) on anything that would publish a wrong or broken page:
// duplicate/invalid slugs, dangling references, non-ISO dates, non-official
// link domains, missing answer blocks, aliases too short to be safe for
// text matching, and — with --links — any link that doesn't resolve to 200.

import { REGULATORS, USE_CASES, type RegDocument, type Regulator } from "../lib/regulators";
import { DOCUMENTS } from "../lib/regulatory-documents";

const OFFICIAL_HOSTS = [
  "occ.gov", "occ.treas.gov", "federalreserve.gov", "fdic.gov", "consumerfinance.gov",
  "sec.gov", "fincen.gov", "cftc.gov", "treasury.gov", "ncua.gov", "dfs.ny.gov",
  "leg.colorado.gov", "coag.gov", "eur-lex.europa.eu", "eba.europa.eu", "ecb.europa.eu",
  "europa.eu", "fsb.org", "bis.org", "nist.gov", "bankofengland.co.uk", "fca.org.uk",
  "gov.uk", "federalregister.gov", "govinfo.gov", "congress.gov", "whitehouse.gov",
  "artificialintelligenceact.eu", "fsoc.gov", "ffiec.gov", "finra.org", "gao.gov",
  "cppa.ca.gov", "leginfo.legislature.ca.gov", "oag.ca.gov", "calcivilrights.ca.gov", "uscode.house.gov"
];

const ISO = /^\d{4}-\d{2}-\d{2}$/;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
// "final"/"proposed" are legitimately part of document names (final rule, NPRM); only true lifecycle states are banned.
const STATUS_WORDS = /(^|-)(superseded|withdrawn|in-force|rescinded)(-|$)/;

const errors: string[] = [];
const warns: string[] = [];
const err = (m: string) => errors.push(m);
const warn = (m: string) => warns.push(m);

function hostOk(url: string): boolean {
  try {
    const h = new URL(url).hostname.replace(/^www\./, "");
    return OFFICIAL_HOSTS.some((o) => h === o || h.endsWith(`.${o}`));
  } catch {
    return false;
  }
}

function checkRegulator(r: Regulator) {
  const at = `regulator ${r.slug}`;
  if (!SLUG.test(r.slug)) err(`${at}: bad slug`);
  if (!ISO.test(r.lastUpdated)) err(`${at}: lastUpdated not ISO`);
  if (r.answerFirst.length < 120) err(`${at}: answerFirst too short`);
  if (r.aliases.length === 0) err(`${at}: no aliases`);
  for (const a of r.aliases) if (a.length < 3) err(`${at}: alias "${a}" too short`);
  for (const rel of r.related) if (!REGULATORS.some((x) => x.slug === rel)) err(`${at}: related "${rel}" does not exist`);
  for (const m of r.milestones) {
    if (!/^\d{4}-\d{2}(-\d{2})?$/.test(m.date)) err(`${at}: milestone "${m.title}" bad date ${m.date}`);
    if (m.link && !hostOk(m.link)) err(`${at}: milestone "${m.title}" links to non-official host ${m.link}`);
    if (m.docSlug && !DOCUMENTS.some((d) => d.slug === m.docSlug)) err(`${at}: milestone docSlug ${m.docSlug} missing`);
  }
  if (r.faq.length === 0) warn(`${at}: no FAQ`);
  checkDeepDives(at, r.deepDives);
}

function checkDeepDives(at: string, deepDives: RegDocument["deepDives"]) {
  const ddIds = new Set<string>();
  for (const dd of deepDives ?? []) {
    const dat = `${at} deep-dive ${dd.id}`;
    if (!SLUG.test(dd.id)) err(`${dat}: id must be kebab-case (it is a permanent URL fragment)`);
    if (ddIds.has(dd.id)) err(`${dat}: duplicate id`);
    ddIds.add(dd.id);
    if (!dd.question.trim().endsWith("?")) err(`${dat}: question must be phrased as a question`);
    if (dd.answer.length < 200) err(`${dat}: answer too short to be quotable`);
    for (const req of dd.requirements ?? []) {
      if (req.docSlug && !DOCUMENTS.some((x) => x.slug === req.docSlug)) err(`${dat}: docSlug "${req.docSlug}" does not exist`);
      if (!req.docSlug && !req.link) err(`${dat}: requirement "${req.rule}" cites no source (needs docSlug or link)`);
      if (req.link && !hostOk(req.link)) err(`${dat}: requirement link is not an official host: ${req.link}`);
      if (/^[a-z0-9-]+$/.test(req.authority) && !REGULATORS.some((x) => x.slug === req.authority)) {
        err(`${dat}: authority "${req.authority}" looks like a slug but does not exist`);
      }
    }
  }
}

function checkDocument(d: RegDocument) {
  const at = `document ${d.slug}`;
  if (!SLUG.test(d.slug)) err(`${at}: bad slug`);
  if (STATUS_WORDS.test(d.slug)) err(`${at}: slug contains a status word (slugs must be stable)`);
  if (!REGULATORS.some((r) => r.slug === d.authority)) err(`${at}: authority "${d.authority}" does not exist`);
  for (const f of ["date", "lastUpdated"] as const) if (!ISO.test(d[f])) err(`${at}: ${f} not ISO (${d[f]})`);
  for (const f of ["effectiveDate", "commentDeadline"] as const) {
    const v = d[f];
    if (v !== undefined && !ISO.test(v)) err(`${at}: ${f} not ISO (${v})`);
  }
  if (!d.link) err(`${at}: missing link`);
  else if (!hostOk(d.link)) err(`${at}: link is not an official host: ${d.link}`);
  if (d.answerFirst.length < 120) err(`${at}: answerFirst too short`);
  if (d.keyPoints.length < 3) err(`${at}: fewer than 3 keyPoints`);
  if (!d.whatChanged) err(`${at}: missing whatChanged`);
  if (d.faq.length < 1) warn(`${at}: no FAQ`);
  if (d.aliases.length === 0) err(`${at}: no aliases`);
  for (const a of d.aliases) if (a.length < 6) err(`${at}: alias "${a}" shorter than 6 chars — unsafe for text matching`);
  if (d.useCases.length === 0) err(`${at}: no useCases`);
  for (const u of d.useCases) if (!(USE_CASES as readonly string[]).includes(u)) err(`${at}: unknown useCase ${u}`);
  for (const s of d.supersedes ?? []) if (!DOCUMENTS.some((x) => x.slug === s)) err(`${at}: supersedes "${s}" does not exist`);
  for (const s of d.interagency ?? []) if (!DOCUMENTS.some((x) => x.slug === s)) err(`${at}: interagency "${s}" does not exist`);
  checkDeepDives(at, d.deepDives);
  if (d.supersededBy && !DOCUMENTS.some((x) => x.slug === d.supersededBy)) err(`${at}: supersededBy "${d.supersededBy}" does not exist`);
  if (d.supersededBy && d.status !== "Superseded" && d.status !== "Withdrawn") warn(`${at}: has supersededBy but status is ${d.status}`);
  if (d.status === "Comment period open" && !d.commentDeadline) warn(`${at}: open for comment but no commentDeadline`);
}

async function checkLinks() {
  const urls = new Set<string>();
  for (const d of DOCUMENTS) urls.add(d.link);

  for (const r of REGULATORS) for (const m of r.milestones) if (m.link) urls.add(m.link);
  for (const r of REGULATORS) for (const dd of r.deepDives ?? []) for (const q of dd.requirements ?? []) if (q.link) urls.add(q.link);
  for (const d of DOCUMENTS) for (const dd of d.deepDives ?? []) for (const q of dd.requirements ?? []) if (q.link) urls.add(q.link);
  const list = [...urls];
  console.log(`checking ${list.length} links…`);
  const queue = [...list];
  const workers = Array.from({ length: 6 }, async () => {
    while (queue.length) {
      const url = queue.shift()!;
      const status = await fetchStatus(url);
      // eur-lex answers 202 to non-browser clients; treat as reachable.
      if (status !== 200 && !(status === 202 && url.includes("eur-lex"))) {
        err(`link ${status}: ${url}`);
      }
    }
  });
  await Promise.all(workers);
}

async function fetchStatus(url: string): Promise<number> {
  // sec.gov rejects generic browser/bot user-agents with 403; it wants a
  // declared "name email" UA, per SEC's own EDGAR fair-access guidance.
  const userAgent = new URL(url).hostname.endsWith("sec.gov")
    ? "BankingNewsAI Tracker andrey@fastmail.jp"
    : "Mozilla/5.0 (compatible; BankingNewsAI tracker link check)";
  for (const method of ["HEAD", "GET"]) {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 20000);
      const res = await fetch(url, {
        method,
        redirect: "follow",
        signal: ctrl.signal,
        headers: { "User-Agent": userAgent }
      });
      clearTimeout(t);
      if (res.status === 200 || res.status === 202) return res.status;
      if (method === "GET") return res.status;
    } catch {
      if (method === "GET") return 0;
    }
  }
  return 0;
}

(async () => {
  const slugs = new Set<string>();
  for (const r of REGULATORS) {
    if (slugs.has(r.slug)) err(`duplicate regulator slug ${r.slug}`);
    slugs.add(r.slug);
    checkRegulator(r);
  }
  const docSlugs = new Set<string>();
  for (const d of DOCUMENTS) {
    if (docSlugs.has(d.slug)) err(`duplicate document slug ${d.slug}`);
    docSlugs.add(d.slug);
    checkDocument(d);
  }
  for (const r of REGULATORS) {
    if (!DOCUMENTS.some((d) => d.authority === r.slug)) warn(`regulator ${r.slug} has no documents`);
  }
  if (process.argv.includes("--links")) await checkLinks();

  for (const w of warns) console.log(`warn  ${w}`);
  for (const e of errors) console.log(`ERROR ${e}`);
  console.log(`${REGULATORS.length} authorities, ${DOCUMENTS.length} documents — ${errors.length} errors, ${warns.length} warnings`);
  process.exit(errors.length ? 1 : 0);
})();

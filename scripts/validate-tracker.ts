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
import { AGENT_OS_DOC_SLUGS, AGENT_OS_UPDATED, LAYERS, LIFECYCLE, TIMELINE } from "../lib/agent-os";
import {
  AGENT_DEEP_DIVE,
  BOARD_DEEP_DIVE,
  CHANGES_2026,
  EXEC_BRIEFING_AUTHORITY_SLUGS,
  EXEC_BRIEFING_DOC_SLUGS,
  EXEC_BRIEFING_PUBLISHED,
  EXEC_BRIEFING_UPDATED,
  READING_PLAN,
  TEN_QUESTIONS
} from "../lib/executive-briefing";
import { BANKS, BANKS_PUBLISHED, BANKS_UPDATED, BANK_AUTHORITY_SLUGS, BANK_DOC_SLUGS } from "../lib/banks";
import { PRIMARY_HOSTS, REGULATOR_HOSTS, TRADE_HOSTS, hostOf } from "../lib/source-tiers";

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

function checkAgentOs() {
  const at = "agent-os";
  if (!ISO.test(AGENT_OS_UPDATED)) err(`${at}: AGENT_OS_UPDATED not ISO`);
  for (const slug of AGENT_OS_DOC_SLUGS) {
    if (!DOCUMENTS.some((d) => d.slug === slug)) err(`${at}: docSlug "${slug}" does not exist`);
  }
  for (const l of LAYERS) {
    if (!SLUG.test(l.id)) err(`${at}: layer id "${l.id}" not kebab-case`);
    if (!l.question.trim().endsWith("?")) err(`${at}: layer ${l.id} question must be a question`);
    if (l.answer.length < 200) err(`${at}: layer ${l.id} answer too short to be quotable`);
  }
  for (const s of LIFECYCLE) if (!s.gate.trim().endsWith("?")) err(`${at}: stage ${s.id} gate must be a question`);
  const today = new Date().toISOString().slice(0, 10);
  for (const t of TIMELINE) {
    if (!ISO.test(t.date)) err(`${at}: timeline "${t.label}" date not ISO`);
    if (t.expected && t.date < today) warn(`${at}: timeline "${t.label}" (${t.date}) is marked expected but the date has passed — confirm it happened, update the note and drop \`expected\``);
  }
}

function checkExecutiveBriefing() {
  const at = "executive-briefing";
  if (!ISO.test(EXEC_BRIEFING_PUBLISHED) || !ISO.test(EXEC_BRIEFING_UPDATED)) err(`${at}: dates not ISO`);
  if (EXEC_BRIEFING_UPDATED < EXEC_BRIEFING_PUBLISHED) err(`${at}: updated before published`);
  for (const slug of EXEC_BRIEFING_DOC_SLUGS) {
    if (!DOCUMENTS.some((d) => d.slug === slug)) err(`${at}: docSlug "${slug}" does not exist`);
  }
  for (const slug of EXEC_BRIEFING_AUTHORITY_SLUGS) {
    if (!REGULATORS.some((r) => r.slug === slug)) err(`${at}: authority "${slug}" does not exist`);
  }
  checkDeepDives(at, [BOARD_DEEP_DIVE, AGENT_DEEP_DIVE]);
  for (const c of CHANGES_2026) if (!ISO.test(c.date)) err(`${at}: change "${c.what}" date not ISO`);
  if (TEN_QUESTIONS.length !== 10) err(`${at}: the ten questions are ${TEN_QUESTIONS.length}`);
  for (const q of TEN_QUESTIONS) if (!q.ask.trim().endsWith("?")) err(`${at}: "${q.ask.slice(0, 40)}" must be a question`);
  if (READING_PLAN.length !== 4) err(`${at}: reading plan must be four weeks`);
  for (const w of READING_PLAN) if (w.docs.length !== 3) err(`${at}: week ${w.week} must list three documents`);
}

// Bank pages may cite primary (bank/vendor), regulator and trade hosts plus the
// tier-1 business press. Anything else (blogs, aggregators) is refused.
const BANK_PRESS_HOSTS = ["cnbc.com", "reuters.com", "bloomberg.com", "ft.com", "wsj.com", "mckinsey.com", "thefinancialbrand.com", "bankingdive.com"];
function bankHostOk(url: string): boolean {
  const h = hostOf(url);
  if (!h) return false;
  return [...REGULATOR_HOSTS, ...PRIMARY_HOSTS, ...TRADE_HOSTS, ...BANK_PRESS_HOSTS].some((o) => h === o || h.endsWith(`.${o}`));
}

function checkBanks() {
  const at = "banks";
  if (!ISO.test(BANKS_PUBLISHED) || !ISO.test(BANKS_UPDATED)) err(`${at}: section dates not ISO`);
  for (const slug of BANK_AUTHORITY_SLUGS) if (!REGULATORS.some((r) => r.slug === slug)) err(`${at}: authority "${slug}" does not exist`);
  for (const slug of BANK_DOC_SLUGS) if (!DOCUMENTS.some((d) => d.slug === slug)) err(`${at}: docSlug "${slug}" does not exist`);
  const seen = new Set<string>();
  for (const b of BANKS) {
    const bat = `bank ${b.slug}`;
    if (!SLUG.test(b.slug)) err(`${bat}: slug not kebab-case`);
    if (seen.has(b.slug)) err(`${bat}: duplicate slug`);
    seen.add(b.slug);
    if (!ISO.test(b.lastUpdated)) err(`${bat}: lastUpdated not ISO`);
    if (b.answerFirst.length < 400) err(`${bat}: answerFirst too short to be quotable`);
    if (b.keyPoints.length < 4) err(`${bat}: fewer than four key points`);
    if (b.timeline.length < 6) err(`${bat}: fewer than six timeline entries`);
    if (b.suggestions.length < 3) err(`${bat}: fewer than three suggestions`);
    if (b.faq.length < 2) err(`${bat}: fewer than two FAQ entries`);
    const ids = new Set<string>();
    for (const s of b.sources) {
      if (ids.has(s.id)) err(`${bat}: duplicate source id ${s.id}`);
      ids.add(s.id);
      if (!ISO.test(s.date)) err(`${bat}: source ${s.id} date not ISO`);
      if (!bankHostOk(s.url)) err(`${bat}: source ${s.id} is not on an allowed host: ${s.url}`);
    }
    const used = new Set<string>();
    const cite = (where: string, list: string[]) => {
      if (list.length === 0) err(`${bat}: ${where} cites no source`);
      for (const id of list) { used.add(id); if (!ids.has(id)) err(`${bat}: ${where} cites unknown source "${id}"`); }
    };
    if (b.platform) cite("platform", b.platform.sources);
    for (const e of b.timeline) { if (!ISO.test(e.date)) err(`${bat}: timeline "${e.title}" date not ISO`); cite(`timeline "${e.title}"`, e.sources); }
    for (const u of b.useCases) { if (!USE_CASES.includes(u.useCase)) err(`${bat}: use case "${u.useCase}" unknown`); cite(`use case "${u.name}"`, u.sources); }
    for (const n of b.numbers) { if (!ISO.test(n.asOf)) err(`${bat}: number "${n.label}" asOf not ISO`); cite(`number "${n.label}"`, n.sources); }
    for (const q of b.quotes) { if (!ISO.test(q.date)) err(`${bat}: quote by ${q.who} date not ISO`); cite(`quote by ${q.who}`, q.sources); }
    for (const l of b.leadership) cite(`leader ${l.name}`, l.sources);
    for (const id of ids) if (!used.has(id)) warn(`${bat}: source ${id} is never cited`);
    for (const f of b.faq) if (!f.q.trim().endsWith("?")) err(`${bat}: FAQ "${f.q}" must be a question`);
  }
}

async function checkLinks() {
  const urls = new Set<string>();
  for (const d of DOCUMENTS) urls.add(d.link);

  for (const r of REGULATORS) for (const m of r.milestones) if (m.link) urls.add(m.link);
  for (const r of REGULATORS) for (const dd of r.deepDives ?? []) for (const q of dd.requirements ?? []) if (q.link) urls.add(q.link);
  for (const d of DOCUMENTS) for (const dd of d.deepDives ?? []) for (const q of dd.requirements ?? []) if (q.link) urls.add(q.link);
  for (const dd of [BOARD_DEEP_DIVE, AGENT_DEEP_DIVE]) for (const q of dd.requirements ?? []) if (q.link) urls.add(q.link);
  if (process.argv.includes("--bank-links")) for (const b of BANKS) for (const s of b.sources) urls.add(s.url);
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
  checkAgentOs();
  checkExecutiveBriefing();
  checkBanks();
  for (const r of REGULATORS) {
    if (!DOCUMENTS.some((d) => d.authority === r.slug)) warn(`regulator ${r.slug} has no documents`);
  }
  if (process.argv.includes("--links")) await checkLinks();

  for (const w of warns) console.log(`warn  ${w}`);
  for (const e of errors) console.log(`ERROR ${e}`);
  console.log(`${REGULATORS.length} authorities, ${DOCUMENTS.length} documents — ${errors.length} errors, ${warns.length} warnings`);
  process.exit(errors.length ? 1 : 0);
})();

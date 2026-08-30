// Derived views over the regulation-tracker data (lib/regulators.ts +
// lib/regulatory-documents.ts). Nothing here is hand-maintained: timelines,
// deadlines, the use-case matrix, statuses and cross-links are all computed
// from the documents so a single edit propagates everywhere.

import {
  REGULATORS,
  TRACKER_LAST_REVIEWED,
  getRegulator,
  type DocStatus,
  type RegDocument,
  type Regulator,
  type TimelineEntry,
  type UseCase
} from "@/lib/regulators";
import { DOCUMENTS } from "@/lib/regulatory-documents";

export { DOCUMENTS };

export const USE_CASE_LABELS: Record<UseCase, { label: string; question: string; blurb: string }> = {
  "credit-underwriting": {
    label: "Credit scoring & underwriting",
    question: "Which rules govern AI credit scoring and underwriting?",
    blurb:
      "Creditworthiness models are the most heavily regulated bank AI use case: explicitly high-risk under the EU AI Act, and subject to adverse-action, fair-lending and model-risk requirements in the US."
  },
  "fair-lending": {
    label: "Fair lending & discrimination",
    question: "Which rules apply to AI bias and fair lending?",
    blurb:
      "Anti-discrimination law applies regardless of how a decision was made. Regulators have said 'the algorithm did it' is not a defence."
  },
  "aml-kyc": {
    label: "AML / KYC",
    question: "Which rules govern AI in AML, sanctions screening and KYC?",
    blurb:
      "Regulators actively encourage machine learning in transaction monitoring, but expect the same explainability and validation as any other BSA/AML control."
  },
  fraud: {
    label: "Fraud detection",
    question: "Which rules govern AI-based fraud detection — and AI-enabled fraud?",
    blurb:
      "Two sides: banks deploying AI to catch fraud, and regulators warning about deepfakes and generative-AI-enabled scams targeting banks and their customers."
  },
  "customer-chatbots": {
    label: "Customer-facing chatbots",
    question: "Which rules apply to AI chatbots and virtual assistants in banking?",
    blurb:
      "Consumer-protection law follows the customer interaction: a chatbot that gives wrong information or obstructs a dispute can be a UDAAP or compliance violation."
  },
  "model-risk": {
    label: "Model risk management",
    question: "Which model risk management rules apply to AI and machine-learning models?",
    blurb:
      "The validation, governance and 'effective challenge' framework that bank examiners test AI models against."
  },
  "generative-agentic-ai": {
    label: "Generative & agentic AI",
    question: "Which rules cover generative AI and AI agents in banking?",
    blurb:
      "The newest and least-settled area: several 2026 frameworks explicitly carve generative and agentic AI out of formal model-risk rules while signalling that dedicated guidance is coming."
  },
  "third-party-vendors": {
    label: "Third-party & vendor AI",
    question: "Which rules apply when a bank buys AI from a vendor?",
    blurb:
      "Outsourcing does not outsource accountability: third-party risk management guidance treats AI vendors, foundation-model providers and cloud AI services as critical relationships."
  },
  cybersecurity: {
    label: "Cybersecurity",
    question: "Which rules address AI-related cybersecurity risk for banks?",
    blurb:
      "AI as an attack vector (deepfakes, AI-enhanced phishing) and AI as a target (model theft, data poisoning) both fall under existing cyber rules."
  },
  "data-privacy": {
    label: "Data & privacy",
    question: "Which data-protection rules constrain bank AI?",
    blurb:
      "Automated-decision rights, data-governance duties and training-data provenance requirements that sit underneath every AI deployment."
  },
  "trading-markets": {
    label: "Trading & capital markets",
    question: "Which rules govern AI in trading, broker-dealer and derivatives businesses?",
    blurb:
      "Market regulators focus on conflicts of interest, AI-washing, and the systemic risk of many firms using the same models."
  },
  "governance-general": {
    label: "AI governance (general)",
    question: "Which frameworks set overall AI governance expectations for banks?",
    blurb:
      "Cross-cutting principles, sound practices and voluntary frameworks that supervisors reference when they examine a bank's overall AI program."
  }
};

// ── Lookups ────────────────────────────────────────────────────────────────

export function getDocument(slug: string): RegDocument | undefined {
  return DOCUMENTS.find((d) => d.slug === slug);
}

export function documentsFor(authoritySlug: string): RegDocument[] {
  return DOCUMENTS.filter((d) => d.authority === authoritySlug).sort(byDateDesc);
}

export function documentPath(doc: RegDocument | string): string {
  return `/ai-regulation/documents/${typeof doc === "string" ? doc : doc.slug}`;
}

function byDateDesc<T extends { date: string }>(a: T, b: T): number {
  return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
}

// ── Status, refined from dates so pages self-refresh between edits ─────────

export function effectiveStatus(doc: RegDocument, today = todayIso()): DocStatus {
  if (doc.status === "Withdrawn") return "Withdrawn";
  if (doc.supersededBy) return "Superseded";
  if (doc.status === "Comment period open" && doc.commentDeadline && doc.commentDeadline < today) {
    return "Proposed";
  }
  if (doc.status === "Final" && doc.effectiveDate && doc.effectiveDate <= today) {
    return "In force";
  }
  if (doc.status === "In force" && doc.effectiveDate && doc.effectiveDate > today) {
    return "Final";
  }
  return doc.status;
}

/** Human wording for a refined status, e.g. "Proposed · comment period closed". */
export function statusLabel(doc: RegDocument, today = todayIso()): string {
  const s = effectiveStatus(doc, today);
  if (s === "Proposed" && doc.commentDeadline && doc.commentDeadline < today) {
    return "Proposed · comment period closed";
  }
  if (s === "Final" && doc.effectiveDate && doc.effectiveDate > today) {
    return `Final · applies from ${formatDate(doc.effectiveDate)}`;
  }
  return s;
}

export const STATUS_TAG: Record<DocStatus, string> = {
  "In force": "trk-tag trk-tag-law",
  Final: "trk-tag trk-tag-guidance",
  "Comment period open": "trk-tag trk-tag-open",
  Proposed: "trk-tag trk-tag-standards",
  Superseded: "trk-tag trk-tag-voluntary",
  Withdrawn: "trk-tag trk-tag-voluntary"
};

export function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

// ── Timelines (documents + milestones, merged) ─────────────────────────────

export function timelineFor(reg: Regulator): TimelineEntry[] {
  const docRows: TimelineEntry[] = documentsFor(reg.slug).map((d) => ({
    date: d.date,
    title: `${d.shortName}${d.shortName === d.title ? "" : ` — ${d.title}`}`,
    docType: d.docType,
    summary: firstSentence(d.answerFirst),
    link: d.link,
    docSlug: d.slug
  }));
  return [...docRows, ...reg.milestones].sort(byDateDesc);
}

export function firstSentence(text: string): string {
  const m = text.match(/^.*?[.!?](?=\s|$)/);
  return (m ? m[0] : text).trim();
}

/**
 * One readable line for table cells: the first sentence, hard-capped at
 * `max` chars on a word boundary. Some answerFirst blocks are single
 * 60-word sentences — without the cap they wreck table layouts.
 */
export function oneLine(text: string, max = 180): string {
  const s = firstSentence(text);
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

/** Newest dated rows across every authority, for the hub. */
export function recentDevelopments(since: string, limit: number) {
  return REGULATORS.flatMap((r) =>
    timelineFor(r).map((t) => ({ ...t, org: r.name, slug: r.slug }))
  )
    .filter((t) => t.date >= since)
    .sort(byDateDesc)
    .slice(0, limit);
}

// ── Deadlines calendar ─────────────────────────────────────────────────────

export type DeadlineKind = "Comment deadline" | "Takes effect" | "Milestone" | "Published";

export type Deadline = {
  date: string;
  kind: DeadlineKind;
  authority: Regulator;
  label: string;
  docSlug?: string;
  link?: string;
};

export function allDeadlines(): Deadline[] {
  const rows: Deadline[] = [];
  for (const d of DOCUMENTS) {
    const authority = getRegulator(d.authority);
    if (!authority) continue;
    if (d.commentDeadline) {
      rows.push({
        date: d.commentDeadline,
        kind: "Comment deadline",
        authority,
        label: `${d.shortName}: comment period closes`,
        docSlug: d.slug,
        link: d.link
      });
    }
    if (d.effectiveDate && d.effectiveDate !== d.date) {
      rows.push({
        date: d.effectiveDate,
        kind: "Takes effect",
        authority,
        label: `${d.shortName} takes effect`,
        docSlug: d.slug,
        link: d.link
      });
    }
  }
  for (const r of REGULATORS) {
    for (const m of r.milestones) {
      rows.push({ date: m.date, kind: "Milestone", authority: r, label: m.title, link: m.link });
    }
  }
  return rows.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
}

export function upcomingDeadlines(today = todayIso()): Deadline[] {
  return allDeadlines().filter((d) => d.date >= today);
}

export function openConsultations(today = todayIso()): RegDocument[] {
  return DOCUMENTS.filter((d) => effectiveStatus(d, today) === "Comment period open").sort(
    (a, b) => ((a.commentDeadline ?? "") < (b.commentDeadline ?? "") ? -1 : 1)
  );
}

// ── Warnings & in-force views ──────────────────────────────────────────────

/** Warning-type documents (alerts, Dear-CEO letters, risk reports), newest first, superseded ones dropped. */
export function warningDocuments(): RegDocument[] {
  return DOCUMENTS.filter((d) => d.warning && !d.supersededBy).sort(byDateDesc);
}

export type WarningTheme = "fraud" | "cyber" | "stability";

export function warningTheme(doc: RegDocument): WarningTheme {
  if (doc.useCases.includes("fraud")) return "fraud";
  if (doc.useCases.includes("cybersecurity")) return "cyber";
  return "stability";
}

/** Documents currently in force, newest first. */
export function inForceDocuments(): RegDocument[] {
  return DOCUMENTS.filter((d) => effectiveStatus(d) === "In force").sort(byDateDesc);
}

// ── Use-case matrix ────────────────────────────────────────────────────────

export function documentsForUseCase(useCase: UseCase): RegDocument[] {
  return DOCUMENTS.filter((d) => d.useCases.includes(useCase)).sort(byDateDesc);
}

/** authority slug → documents, in authority display order, for one use case. */
export function documentsByAuthorityForUseCase(useCase: UseCase): { authority: Regulator; docs: RegDocument[] }[] {
  const docs = documentsForUseCase(useCase);
  return REGULATORS.map((authority) => ({
    authority,
    docs: docs.filter((d) => d.authority === authority.slug)
  })).filter((row) => row.docs.length > 0);
}

// ── Supersession graph ─────────────────────────────────────────────────────

export function supersededDocs(doc: RegDocument): RegDocument[] {
  return (doc.supersedes ?? []).map(getDocument).filter((d): d is RegDocument => Boolean(d));
}

export function supersedingDoc(doc: RegDocument): RegDocument | undefined {
  return doc.supersededBy ? getDocument(doc.supersededBy) : undefined;
}

export function relatedDocuments(doc: RegDocument, limit = 6): RegDocument[] {
  const seen = new Set<string>([doc.slug]);
  const out: RegDocument[] = [];
  const push = (d?: RegDocument) => {
    if (d && !seen.has(d.slug) && out.length < limit) {
      seen.add(d.slug);
      out.push(d);
    }
  };
  supersededDocs(doc).forEach(push);
  push(supersedingDoc(doc));
  documentsFor(doc.authority).forEach(push);
  for (const uc of doc.useCases) documentsForUseCase(uc).forEach(push);
  return out;
}

// ── Freshness: which tracker paths changed recently (for IndexNow) ─────────

export function trackerPathsUpdatedSince(sinceIso: string): string[] {
  const paths = new Set<string>();
  if (TRACKER_LAST_REVIEWED >= sinceIso) paths.add("/ai-regulation");
  for (const r of REGULATORS) {
    if (r.lastUpdated >= sinceIso) paths.add(`/ai-regulation/${r.slug}`);
  }
  for (const d of DOCUMENTS) {
    if (d.lastUpdated >= sinceIso) {
      paths.add(documentPath(d));
      paths.add(`/ai-regulation/${d.authority}`);
      paths.add("/ai-regulation/documents");
      paths.add("/ai-regulation/deadlines");
      paths.add("/ai-regulation/by-use-case");
      paths.add("/ai-regulation/compliance-checklist");
      paths.add("/ai-regulation/regulator-warnings");
      paths.add("/ai-regulation/for-compliance-officers");
    }
  }
  return [...paths];
}

export function latestDocumentUpdate(): string {
  return DOCUMENTS.reduce((max, d) => (d.lastUpdated > max ? d.lastUpdated : max), TRACKER_LAST_REVIEWED);
}

// ── Cross-linking with the daily brief (text matching on aliases) ──────────
//
// Pure read-time matching over story text. The digest generator, database and
// email are untouched: a story either literally mentions a document/authority
// alias or it doesn't.

export type Mention =
  | { kind: "document"; doc: RegDocument; authority: Regulator }
  | { kind: "authority"; authority: Regulator };

const aliasRegexCache = new Map<string, RegExp>();

function aliasRegex(alias: string): RegExp {
  let re = aliasRegexCache.get(alias);
  if (!re) {
    const escaped = alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
    // Word-ish boundaries that also work after "(" or before "," etc.
    re = new RegExp(`(^|[^A-Za-z0-9])${escaped}(?=$|[^A-Za-z0-9])`, "i");
    aliasRegexCache.set(alias, re);
  }
  return re;
}

export function findMentions(text: string): Mention[] {
  const out: Mention[] = [];
  const seenAuthorities = new Set<string>();
  for (const doc of DOCUMENTS) {
    if (doc.aliases.some((a) => aliasRegex(a).test(text))) {
      const authority = getRegulator(doc.authority);
      if (authority) {
        out.push({ kind: "document", doc, authority });
        seenAuthorities.add(authority.slug);
      }
    }
  }
  for (const authority of REGULATORS) {
    if (seenAuthorities.has(authority.slug)) continue;
    if (authority.aliases.some((a) => aliasRegex(a).test(text))) {
      out.push({ kind: "authority", authority });
    }
  }
  return out;
}

/** Text of one digest as a single haystack (titles + summaries + impacts). */
export function digestText(content: unknown): string {
  if (!content || typeof content !== "object") return "";
  const c = content as {
    briefSummary?: string;
    bankingStories?: { title?: string; executiveSummary?: string; businessImpact?: string }[];
    aiStories?: { title?: string; executiveSummary?: string; businessImpact?: string }[];
    stories?: { title?: string; executiveSummary?: string; businessImpact?: string }[];
  };
  const stories = [...(c.bankingStories ?? c.stories ?? []), ...(c.aiStories ?? [])];
  return [c.briefSummary ?? "", ...stories.flatMap((s) => [s.title ?? "", s.executiveSummary ?? "", s.businessImpact ?? ""])].join("\n");
}

export type IssueRef = { date: string; headline: string; storyTitle?: string };

/** Which sent issues mention this document (by alias) — newest first. */
export function issuesMentioning(
  digests: { digest_date: string; content_json: unknown }[],
  matches: (text: string) => boolean,
  limit = 6
): IssueRef[] {
  const out: IssueRef[] = [];
  for (const d of digests) {
    const c = d.content_json as {
      briefSummary?: string;
      bankingStories?: { title?: string; executiveSummary?: string; businessImpact?: string }[];
      aiStories?: { title?: string; executiveSummary?: string; businessImpact?: string }[];
      stories?: { title?: string; executiveSummary?: string; businessImpact?: string }[];
    } | null;
    if (!c) continue;
    const stories = [...(c.bankingStories ?? c.stories ?? []), ...(c.aiStories ?? [])];
    const hit = stories.find((s) =>
      matches([s.title ?? "", s.executiveSummary ?? "", s.businessImpact ?? ""].join("\n"))
    );
    if (hit || matches(c.briefSummary ?? "")) {
      out.push({ date: d.digest_date, headline: c.briefSummary ?? d.digest_date, storyTitle: hit?.title });
      if (out.length >= limit) break;
    }
  }
  return out;
}

export function documentMatcher(doc: RegDocument): (text: string) => boolean {
  return (text) => doc.aliases.some((a) => aliasRegex(a).test(text));
}

export function authorityMatcher(reg: Regulator): (text: string) => boolean {
  const docAliases = documentsFor(reg.slug).flatMap((d) => d.aliases);
  const all = [...reg.aliases, ...docAliases];
  return (text) => all.some((a) => aliasRegex(a).test(text));
}

// ── Formatting ─────────────────────────────────────────────────────────────

export function formatDate(date: string): string {
  const [y, m, d] = date.split("-");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = months[Number(m) - 1] ?? "";
  return d ? `${month} ${Number(d)}, ${y}` : `${month} ${y}`;
}

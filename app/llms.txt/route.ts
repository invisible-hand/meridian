import { BANKS, bankPath } from "@/lib/banks";
import { REGULATORS, TRACKER_LAST_REVIEWED, isUsAuthority } from "@/lib/regulators";
import { DOCUMENTS } from "@/lib/regulatory-documents";
import { BASE_URL, SITE_DESCRIPTION, SITE_NAME } from "@/lib/seo";
import { documentPath, documentsFor, formatDate, oneLine } from "@/lib/tracker";

// llms.txt — a plain-text map of the site for AI crawlers and agents
// (https://llmstxt.org). Generated from the tracker data so it can never go
// stale; no database, so it builds anywhere.
export const revalidate = 3600;

const abs = (p: string) => `${BASE_URL}${p}`;

export function GET() {
  const us = REGULATORS.filter((r) => isUsAuthority(r.slug));
  const world = REGULATORS.filter((r) => !isUsAuthority(r.slug));

  const authorityLine = (r: { slug: string; name: string; role: string }) =>
    `- [${r.name}](${abs(`/ai-regulation/${r.slug}`)}): ${oneLine(r.role, 140)}`;

  const documentLines = REGULATORS.map((r) => {
    const docs = documentsFor(r.slug);
    if (docs.length === 0) return "";
    const lines = docs
      .slice()
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .map((d) => `- [${d.shortName}](${abs(documentPath(d))}): ${oneLine(d.title, 140)} (${formatDate(d.date)})`);
    return `### ${r.name}\n\n${lines.join("\n")}`;
  }).filter(Boolean);

  const body = `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

Two things live here: a free daily brief on AI in banking (six stories every morning, archived as public issues), and the AI-in-Banking Regulation Tracker — ${REGULATORS.length} authorities and ${DOCUMENTS.length} regulatory documents (bulletins, rules, consultations, statutes), each on its own page with a question-phrased summary, key points, FAQ and a link to the official primary source. Tracker last reviewed ${formatDate(TRACKER_LAST_REVIEWED)}; it is maintained weekly.

Citation guidance: every document page links the regulator's own text — cite the official source for the rule and this site for the summary and dates. Document identifiers (e.g. "OCC Bulletin 2026-13", "SR 26-2", "EBA/GL/2020/06") are exact and verified against the issuing authority.

## Key pages

- [Home](${abs("/")}): Subscribe to the daily brief
- [AI strategy of the ${BANKS.length} largest US banks](${abs("/banks")}): Bank-by-bank pages on platforms, agents, budgets, headcount, leadership and regulators, every claim sourced
${BANKS.map((b) => `- [${b.name} AI strategy](${abs(bankPath(b))}): ${oneLine(b.posture, 140)}`).join("\n")}
- [AI governance in banking](${abs("/ai-governance")}): Six pillars of AI governance for banks, each mapped to the documents that require it, with the banks that have disclosed arrangements
- [AI fraud detection in banking](${abs("/ai-fraud-detection")}): What regulators warn about, the rules a bank's fraud models run under, public results, and the banks using AI against fraud
- [AI agents in banking](${abs("/agentic-banking")}): An operating system for AI agents in a bank — eight control layers, the lifecycle, autonomy levels, and how regulators are moving, every claim sourced
- [Control plane for AI agents](${abs("/agentic-banking/control-plane")}): The eight control layers, each with a quotable answer and its primary-source documents
- [AI agent lifecycle](${abs("/agentic-banking/lifecycle")}): Eight gates from intake to retirement, with evidence and documents per gate
- [What regulators say about AI agents](${abs("/agentic-banking/regulation")}): Every documented position on agentic AI in banking, dated and quoted
- [AI Regulation Tracker](${abs("/ai-regulation")}): Who regulates AI in banking — every authority, tracked
- [All documents](${abs("/ai-regulation/documents")}): Every tracked regulatory document, newest first
- [Deadlines calendar](${abs("/ai-regulation/deadlines")}): Comment deadlines, effective dates and application milestones
- [By use case](${abs("/ai-regulation/by-use-case")}): Which rules apply to credit underwriting, AML, fraud, chatbots, model risk and more
- [Compliance checklist](${abs("/ai-regulation/compliance-checklist")}): Obligations by quarter, recomputed daily
- [Regulator warnings](${abs("/ai-regulation/regulator-warnings")}): Alerts, Dear-CEO letters and risk reports on AI
- [For compliance officers](${abs("/ai-regulation/for-compliance-officers")}): Where to start and what is due
- [Issue archive](${abs("/issues")}): Every daily brief, newest first
- [RSS feed](${abs("/rss.xml")}): Daily brief as RSS
- [Sitemap](${abs("/sitemap.xml")})

## Authorities — United States

${us.map(authorityLine).join("\n")}

## Authorities — International

${world.map(authorityLine).join("\n")}

## Documents by authority

${documentLines.join("\n\n")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=600, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}

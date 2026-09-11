import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/seo";
import { REGULATORS, getRegulator } from "@/lib/regulators";
import { DOCUMENTS, documentPath, formatDate, getDocument, latestDocumentUpdate, todayIso, upcomingDeadlines } from "@/lib/tracker";
import {
  AGENT_DEEP_DIVE,
  BOARD_DEEP_DIVE,
  CHANGES_2026,
  EXEC_BRIEFING_PUBLISHED,
  EXEC_BRIEFING_UPDATED,
  FAQ,
  FOOTPRINTS,
  READING_PLAN,
  TEN_QUESTIONS
} from "@/lib/executive-briefing";
import { DeepDives, deepDiveFaqEntries } from "../deep-dive";
import { Section, TrackerShell } from "../shell";

const PATH = "/ai-regulation/for-bank-executives";
const TITLE = "AI for Bank Executives: Board Briefing (2026)";
const DESCRIPTION =
  "What bank boards and the C-suite must know about AI in 2026: what changed, what regulators expect of the board, ten questions for the CRO and CIO, a.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { type: "article", url: PATH, title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: "AI for Bank Executives: the 2026 briefing", description: DESCRIPTION }
};

export const revalidate = 86400;

const blue = { color: "#1a3fcb" } as const;

function DocLink({ slug, label }: { slug: string; label?: string }) {
  const doc = getDocument(slug);
  if (!doc) return null;
  return <Link href={documentPath(doc)} className="trk-td-strong">{label ?? doc.shortName}</Link>;
}

export default function ForBankExecutivesPage() {
  const today = todayIso();
  const updated = [EXEC_BRIEFING_UPDATED, latestDocumentUpdate()].sort().at(-1)!;
  const dates = upcomingDeadlines(today).slice(0, 6);
  const readingSlugs = READING_PLAN.flatMap((w) => w.docs.map((d) => d.slug));

  const faqEntities = [
    ...deepDiveFaqEntries([BOARD_DEEP_DIVE, AGENT_DEEP_DIVE]),
    ...FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${absoluteUrl(PATH)}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      url: absoluteUrl(PATH),
      datePublished: EXEC_BRIEFING_PUBLISHED,
      dateModified: updated,
      author: { "@type": "Organization", name: "BankingNewsAI", url: absoluteUrl("/") },
      publisher: { "@type": "Organization", name: "BankingNewsAI", url: absoluteUrl("/") },
      isPartOf: { "@id": `${absoluteUrl("/")}#website` },
      about: ["Artificial intelligence in banking", "Bank governance", "AI regulation"],
      audience: { "@type": "Audience", audienceType: "Bank executives and board members" },
      mainEntityOfPage: absoluteUrl(PATH)
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: absoluteUrl(PATH),
      name: TITLE,
      description: DESCRIPTION,
      dateModified: updated,
      breadcrumb: breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "AI Regulation Tracker", path: "/ai-regulation" },
        { name: "For bank executives", path: PATH }
      ])
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqEntities }
  ];

  return (
    <TrackerShell
      eyebrow={<><Link href="/ai-regulation" style={{ color: "inherit", textDecoration: "none" }}>AI Regulation Tracker</Link> · Executive briefing</>}
      title={<>AI for bank executives:<br /><em>the 2026 briefing.</em></>}
      updated={`Last updated ${formatDate(updated)} · ${REGULATORS.length} authorities · ${DOCUMENTS.length} documents behind every claim`}
      ctaTitle="This briefing keeps itself current — every morning"
    >
      <JsonLd data={schema} />
      <p className="trk-answer">
        A bank executive does not need to read AI regulation; they need to know what it expects of them.
        As of {formatDate(today)}, {REGULATORS.length} authorities have published {DOCUMENTS.length} documents
        that touch AI in banking, and not one of them is an AI rulebook — they apply fair-lending, model-risk,
        third-party, financial-crime and cyber law to AI systems, and they increasingly address the board by
        name. This page is the briefing: what changed in 2026, what supervisors expect of the board, the ten
        questions to ask your CRO and CIO, what applies to your bank, the decision on AI agents, and a 30-day
        reading plan with twelve primary documents. Every statement links to its source.
      </p>

      <Section label="Module 1 · What changed">
        <h2 className="trk-h2-q">What changed in 2026 that a bank board must know?</h2>
        <p className="trk-p">
          Six moves, in date order. Each one is a standing page on this tracker with the primary source linked.
        </p>
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>Date</th><th>What happened</th><th className="trk-td-min">Why it matters to you</th></tr></thead>
            <tbody>
              {CHANGES_2026.map((c) => (
                <tr key={c.slug}>
                  <td className="trk-td-nowrap">{formatDate(c.date)}</td>
                  <td className="trk-td-mid">
                    <span className="trk-td-strong">{c.what}</span>
                    <br /><DocLink slug={c.slug} />
                  </td>
                  <td className="trk-td-min">{c.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <DeepDives items={[BOARD_DEEP_DIVE]} />

      <Section label="Module 3 · Ten questions">
        <h2 className="trk-h2-q">Which ten questions should a bank board ask about AI?</h2>
        <p className="trk-p">
          Each question comes with what a good answer contains and the documents it should reference. A management team
          that can answer all ten in writing has, in effect, the AI governance program supervisors describe.
        </p>
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>#</th><th className="trk-td-min">Ask</th><th className="trk-td-min">A good answer contains</th><th>Sources</th></tr></thead>
            <tbody>
              {TEN_QUESTIONS.map((q, i) => (
                <tr key={q.ask}>
                  <td className="trk-td-nowrap trk-td-strong">{i + 1}</td>
                  <td className="trk-td-min trk-td-strong">{q.ask}</td>
                  <td className="trk-td-min">{q.goodAnswer}</td>
                  <td className="trk-td-mid">
                    {q.slugs.map((s) => {
                      const d = getDocument(s);
                      return d ? <span key={s}><Link href={documentPath(d)}>{d.shortName}</Link><br /></span> : null;
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section label="Module 4 · Your footprint">
        <h2 className="trk-h2-q">Which AI rules apply to my bank?</h2>
        <p className="trk-p">
          It depends on charter, size and where your customers are. The strictest rules follow the use case, not the
          technology; the{" "}
          <Link href="/ai-regulation/by-use-case" style={blue}>use-case matrix</Link> maps every system type to its
          governing documents. This is the executive summary by footprint.
        </p>
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>If you are…</th><th className="trk-td-min">What applies</th><th>Authorities</th></tr></thead>
            <tbody>
              {FOOTPRINTS.map((f) => (
                <tr key={f.where}>
                  <td className="trk-td-mid trk-td-strong">{f.where}</td>
                  <td className="trk-td-min">{f.applies}</td>
                  <td className="trk-td-nowrap">
                    {f.authoritySlugs.map((s) => {
                      const r = getRegulator(s);
                      return r ? <span key={s}><Link href={`/ai-regulation/${r.slug}`}>{r.name}</Link><br /></span> : null;
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <DeepDives items={[AGENT_DEEP_DIVE]} />
      <p className="trk-sub" style={{ marginTop: -28, marginBottom: 52 }}>
        <Link href="/agentic-banking" style={blue}>The operating system for AI agents in your bank →</Link>
      </p>

      <Section label="Module 6 · The 30-day plan">
        <h2 className="trk-h2-q">How can a bank executive get up to speed on AI regulation in 30 days?</h2>
        <p className="trk-p">
          Twelve primary documents in four weeks, three a week, in an order that builds: the frame, then the law,
          then the threat, then the dependencies. Each document has a standing page here with the direct answer
          first and the official source linked, and each week ends with one question to put to the executive team.
        </p>
        {READING_PLAN.map((w) => (
          <div key={w.week} style={{ marginBottom: 28 }}>
            <p className="trk-kicker">WEEK {w.week} · {w.theme.toUpperCase()}</p>
            <p className="trk-p" style={{ marginBottom: 12 }}>{w.goal}</p>
            <div className="trk-table-wrap">
              <table className="trk-table">
                <tbody>
                  {w.docs.map((d) => {
                    const doc = getDocument(d.slug);
                    if (!doc) return null;
                    return (
                      <tr key={d.slug}>
                        <td className="trk-td-mid">
                          <Link href={documentPath(doc)} className="trk-td-strong">{doc.shortName}</Link>
                          <br /><span style={{ color: "#9a9a9a", fontSize: "12px" }}>{getRegulator(doc.authority)?.name} · {formatDate(doc.date)}</span>
                        </td>
                        <td className="trk-td-min">{d.take}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="trk-sub" style={{ marginTop: 8 }}><strong>Then:</strong> {w.ask}</p>
          </div>
        ))}
        <p className="trk-sub">
          {readingSlugs.length} documents · <Link href="/ai-regulation/documents" style={blue}>all {DOCUMENTS.length} in the library →</Link>
        </p>
      </Section>

      <Section label="Module 7 · Dates to hold">
        <h2 className="trk-h2-q">Which AI regulatory dates should be on the board calendar?</h2>
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>Date</th><th>Authority</th><th className="trk-td-min">What</th></tr></thead>
            <tbody>
              {dates.map((d, i) => (
                <tr key={`${d.date}-${i}`}>
                  <td className="trk-td-nowrap">{formatDate(d.date)}</td>
                  <td className="trk-td-nowrap"><Link href={`/ai-regulation/${d.authority.slug}`}>{d.authority.name}</Link></td>
                  <td className="trk-td-min">{d.docSlug ? <Link href={documentPath(d.docSlug)} className="trk-td-strong">{d.label}</Link> : <span className="trk-td-strong">{d.label}</span>} · {d.kind}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="trk-sub" style={{ marginTop: 10 }}>
          Recomputed daily from the tracker. <Link href="/ai-regulation/deadlines" style={blue}>The full calendar →</Link>
          {" · "}<Link href="/ai-regulation/compliance-checklist" style={blue}>The checklist, quarter by quarter →</Link>
        </p>
      </Section>

      <Section label="Common questions">
        {FAQ.map((f) => (
          <div key={f.q}>
            <h2 className="trk-faq-q">{f.q}</h2>
            <p className="trk-faq-a">{f.a}</p>
          </div>
        ))}
      </Section>

      <Section label="Also on this tracker">
        <div className="trk-related">
          <Link href="/ai-regulation/for-compliance-officers">For compliance officers →</Link>
          <Link href="/ai-regulation/by-use-case">Rules by use case →</Link>
          <Link href="/ai-regulation/regulator-warnings">Regulator warnings →</Link>
          <Link href="/agentic-banking">AI agents: the operating model →</Link>
          <Link href="/banks">What the 20 largest banks are doing with AI →</Link>
          <Link href="/issues">The daily brief archive →</Link>
        </div>
      </Section>
    </TrackerShell>
  );
}

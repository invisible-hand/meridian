import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/seo";
import {
  allDeadlines,
  documentPath,
  oneLine,
  formatDate,
  getDocument,
  inForceDocuments,
  latestDocumentUpdate,
  openConsultations,
  todayIso,
  type Deadline
} from "@/lib/tracker";
import { Section, TrackerShell } from "../shell";

const TITLE = "AI Compliance Checklist for Banks — Every Deadline and Obligation (2026–2028)";
const DESCRIPTION =
  "The dated AI compliance checklist for banks: what is in force today, what takes effect this quarter, and every deadline through 2028 — ECB AI-cyber action plans, Colorado's ADMT Act, the EU AI Act's high-risk regime — each linked to its primary source.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/ai-regulation/compliance-checklist" },
  openGraph: { type: "website", url: "/ai-regulation/compliance-checklist", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: "AI Compliance Checklist for Banks", description: DESCRIPTION }
};

// Horizon buckets depend on today's date.
export const revalidate = 86400;

function quarterOf(dateIso: string): string {
  const [y, m] = dateIso.split("-").map(Number);
  return `Q${Math.floor((m - 1) / 3) + 1} ${y}`;
}

export default function ComplianceChecklistPage() {
  const today = todayIso();
  const updated = latestDocumentUpdate();
  const rows = allDeadlines();
  const upcoming = rows.filter((r) => r.date >= today);
  const recentPast = rows.filter((r) => r.date < today && r.date >= "2026-01-01").reverse();
  const open = openConsultations(today);
  const inForce = inForceDocuments().slice(0, 12);

  const thisQuarter = quarterOf(today);
  const byQuarter = new Map<string, Deadline[]>();
  for (const d of upcoming) {
    const q = quarterOf(d.date);
    byQuarter.set(q, [...(byQuarter.get(q) ?? []), d]);
  }
  const quarters = [...byQuarter.entries()];
  const next = upcoming[0];

  const faq = [
    {
      q: "What are the next AI regulation deadlines for banks?",
      a:
        upcoming.length > 0
          ? `The next dated deadlines are: ${upcoming
              .slice(0, 3)
              .map((d) => `${formatDate(d.date)} — ${d.authority.name}: ${d.label}`)
              .join("; ")}. The full calendar through 2028 is maintained on this page and at /ai-regulation/deadlines.`
          : "No future dated deadlines are currently scheduled; this page is recomputed daily as regulators publish."
    },
    {
      q: "Do US banks face binding AI compliance deadlines?",
      a: "At the federal level, no — US bank AI is governed through supervisory guidance (the April 2026 revised model risk management guidance) and existing statutes like ECOA and the FCRA, which carry no AI-specific dates. The binding dated obligations come from states and the EU: Colorado's Automated Decision-Making Technology Act and Chatbot Safety Act take effect January 1, 2027, New York DFS applies its Part 500 cybersecurity regulation to AI threats now, and the EU AI Act's high-risk regime reaches EU credit-scoring operations on December 2, 2027."
    },
    {
      q: "When does the EU AI Act apply to bank credit scoring?",
      a: "December 2, 2027. The original date was August 2, 2026, but the Digital Omnibus on AI (Regulation (EU) 2026/1744, in force July 27, 2026) deferred stand-alone Annex III high-risk systems — which include credit scoring of natural persons — to December 2, 2027, and AI embedded in regulated products to August 2, 2028. Article 50 transparency duties have applied since August 2, 2026."
    },
    {
      q: "What should a bank compliance team do before the end of 2026?",
      a: "Four concrete items: file the AI-cybersecurity action plan the ECB requires from significant euro-area institutions by October 31, 2026 (SSM-2026-0301, if in scope); map models against the revised interagency model risk management guidance in force since April 17, 2026; review adverse-action notice processes against the Regulation B rule effective July 21, 2026; and prepare for Colorado's ADMT Act taking effect January 1, 2027 — the state rulemaking finishes in late 2026."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: absoluteUrl("/ai-regulation/compliance-checklist"),
      name: TITLE,
      description: DESCRIPTION,
      dateModified: updated,
      isPartOf: { "@id": `${absoluteUrl("/")}#website` },
      breadcrumb: breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "AI Regulation Tracker", path: "/ai-regulation" },
        { name: "Compliance checklist", path: "/ai-regulation/compliance-checklist" }
      ]),
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: upcoming.length,
        itemListElement: upcoming.map((d, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: `${formatDate(d.date)} — ${d.authority.name}: ${d.label}`,
          ...(d.docSlug ? { url: absoluteUrl(documentPath(d.docSlug)) } : {})
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
    }
  ];

  return (
    <TrackerShell
      eyebrow={<><Link href="/ai-regulation" style={{ color: "inherit", textDecoration: "none" }}>AI Regulation Tracker</Link> · Checklist</>}
      title={<>The AI compliance checklist<br /><em>for banks.</em></>}
      updated={`Last updated ${formatDate(updated)} · Recomputed daily from the tracker's document data`}
      ctaTitle="New obligations land in the brief first"
    >
      <JsonLd data={schema} />
      <p className="trk-answer">
        {next
          ? `The next dated AI-compliance deadline for banks is ${formatDate(next.date)}: ${next.authority.name} — ${next.label}. `
          : ""}
        {inForceDocuments().length} documents are in force today, {open.length}{" "}
        {open.length === 1 ? "consultation is" : "consultations are"} open for comment, and the binding dated
        obligations ahead are Colorado&apos;s ADMT and chatbot acts (January 1, 2027), the EU AI Act&apos;s
        high-risk regime for credit scoring (December 2, 2027) and its product-embedded extension
        (August 2, 2028). Everything below is generated from the tracker&apos;s primary-source documents and
        recomputed daily.
      </p>

      {quarters.map(([q, ds]) => (
        <Section key={q} label={q === thisQuarter ? `${q} — this quarter` : q}>
          <h2 className="trk-h2-q">
            {q === thisQuarter ? "What must banks do this quarter?" : `What AI obligations land in ${q}?`}
          </h2>
          <div className="trk-table-wrap">
            <table className="trk-table">
              <thead><tr><th>Date</th><th>Authority</th><th className="trk-td-min">Obligation / event</th><th>Who must act</th></tr></thead>
              <tbody>
                {ds.map((d, i) => {
                  const doc = d.docSlug ? getDocument(d.docSlug) : undefined;
                  return (
                    <tr key={`${d.date}-${i}`}>
                      <td className="trk-td-nowrap">{formatDate(d.date)}</td>
                      <td className="trk-td-nowrap"><Link href={`/ai-regulation/${d.authority.slug}`}>{d.authority.name}</Link></td>
                      <td>
                        {d.docSlug ? (
                          <Link href={documentPath(d.docSlug)} className="trk-td-strong">{d.label}</Link>
                        ) : d.link ? (
                          <a href={d.link} target="_blank" rel="noopener noreferrer" className="trk-td-strong">{d.label}</a>
                        ) : (
                          <span className="trk-td-strong">{d.label}</span>
                        )}
                        {" · "}{d.kind}
                      </td>
                      <td className="trk-td-mid">{oneLine(doc ? doc.appliesTo : d.authority.appliesTo, 130)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Section>
      ))}

      <Section label="In force today">
        <h2 className="trk-h2-q">Which AI rules is a bank examined against right now?</h2>
        <p className="trk-sub">
          The newest documents currently in force — the working baseline for an AI compliance program.
          Full index: <Link href="/ai-regulation/documents" style={{ color: "#1a3fcb" }}>all {""}documents →</Link>
        </p>
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>Since</th><th>Document</th><th>The obligation</th></tr></thead>
            <tbody>
              {inForce.map((d) => (
                <tr key={d.slug}>
                  <td className="trk-td-nowrap">{formatDate(d.effectiveDate ?? d.date)}</td>
                  <td className="trk-td-mid"><Link href={documentPath(d)} className="trk-td-strong">{d.shortName}</Link></td>
                  <td className="trk-td-min">{oneLine(d.answerFirst, 200)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section label="Already passed in 2026">
        <h2 className="trk-h2-q">Which AI deadlines have banks already been through this year?</h2>
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>Date</th><th>Authority</th><th>What happened</th></tr></thead>
            <tbody>
              {recentPast.map((d, i) => (
                <tr key={`${d.date}-${i}`} className="trk-past">
                  <td className="trk-td-nowrap">{formatDate(d.date)}</td>
                  <td className="trk-td-nowrap"><Link href={`/ai-regulation/${d.authority.slug}`}>{d.authority.name}</Link></td>
                  <td>
                    {d.docSlug ? (
                      <Link href={documentPath(d.docSlug)} className="trk-td-strong">{d.label}</Link>
                    ) : (
                      <span className="trk-td-strong">{d.label}</span>
                    )}
                    {" · "}{d.kind}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section label="Common questions">
        {faq.map((f) => (
          <div key={f.q}>
            <h2 className="trk-faq-q">{f.q}</h2>
            <p className="trk-faq-a">{f.a}</p>
          </div>
        ))}
      </Section>

      <Section label="Navigate">
        <div className="trk-related">
          <Link href="/ai-regulation/deadlines">Full deadlines calendar →</Link>
          <Link href="/ai-regulation/regulator-warnings">Regulator warnings →</Link>
          <Link href="/ai-regulation/by-use-case">Rules by use case →</Link>
          <Link href="/ai-regulation/for-compliance-officers">For compliance officers →</Link>
        </div>
      </Section>
    </TrackerShell>
  );
}

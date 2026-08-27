import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/seo";
import { REGULATORS, USE_CASES } from "@/lib/regulators";
import {
  STATUS_TAG,
  USE_CASE_LABELS,
  documentPath,
  documentsForUseCase,
  effectiveStatus,
  formatDate,
  latestDocumentUpdate,
  documentsByAuthorityForUseCase
} from "@/lib/tracker";
import { Section, TrackerShell } from "../shell";

const TITLE = "AI Regulation in Banking by Use Case — Credit, AML, Fraud, Chatbots, Model Risk (2026)";
const DESCRIPTION =
  "Which rules govern each AI use case in banking: credit scoring, fair lending, AML/KYC, fraud, chatbots, model risk, generative and agentic AI, vendors, cybersecurity, data and trading — mapped to the governing document from every authority.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/ai-regulation/by-use-case" },
  openGraph: { type: "website", url: "/ai-regulation/by-use-case", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: "AI Regulation by Use Case — Tracker", description: DESCRIPTION }
};

export default function ByUseCasePage() {
  const updated = latestDocumentUpdate();
  const covered = USE_CASES.filter((u) => documentsForUseCase(u).length > 0);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: absoluteUrl("/ai-regulation/by-use-case"),
      name: TITLE,
      description: DESCRIPTION,
      dateModified: updated,
      isPartOf: { "@id": `${absoluteUrl("/")}#website` },
      breadcrumb: breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "AI Regulation Tracker", path: "/ai-regulation" },
        { name: "By use case", path: "/ai-regulation/by-use-case" }
      ])
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: covered.map((u) => {
        const rows = documentsByAuthorityForUseCase(u);
        const answer = `${USE_CASE_LABELS[u].blurb} Governing documents: ${rows
          .map((r) => `${r.authority.name} — ${r.docs.map((d) => d.shortName).join(", ")}`)
          .join("; ")}.`;
        return {
          "@type": "Question",
          name: USE_CASE_LABELS[u].question,
          acceptedAnswer: { "@type": "Answer", text: answer }
        };
      })
    }
  ];

  return (
    <TrackerShell
      eyebrow={<><Link href="/ai-regulation" style={{ color: "inherit", textDecoration: "none" }}>AI Regulation Tracker</Link> · Matrix</>}
      title={<>Which rules apply to <em>your</em> AI use case?</>}
      updated={`Last updated ${formatDate(updated)} · Built from ${REGULATORS.length} authorities`}
    >
      <JsonLd data={schema} />
      <p className="trk-answer">
        Bank AI is regulated by use case, not by technology. Credit scoring is the most constrained (binding EU
        AI Act obligations plus US adverse-action and fair-lending law); AML and fraud are the most encouraged;
        generative and agentic AI are the least settled. Each section below is a question-and-answer: which
        authorities have spoken on that use case, and which document is the one to read.
      </p>

      <Section label="Jump to">
        <div className="trk-related">
          {covered.map((u) => (
            <Link key={u} href={`#${u}`}>{USE_CASE_LABELS[u].label} →</Link>
          ))}
        </div>
      </Section>

      {covered.map((u) => {
        const rows = documentsByAuthorityForUseCase(u);
        const meta = USE_CASE_LABELS[u];
        return (
          <Section key={u} label={meta.label}>
            <h2 className="trk-h2-q" id={u} style={{ scrollMarginTop: 72 }}>{meta.question}</h2>
            <p className="trk-sub">{meta.blurb}</p>
            <div className="trk-table-wrap">
              <table className="trk-table">
                <thead><tr><th>Authority</th><th>Governing documents</th><th>Force</th></tr></thead>
                <tbody>
                  {rows.map(({ authority, docs }) => (
                    <tr key={authority.slug}>
                      <td className="trk-td-nowrap"><Link href={`/ai-regulation/${authority.slug}`} className="trk-td-strong">{authority.name}</Link></td>
                      <td>
                        {docs.map((d, i) => (
                          <div key={d.slug} style={{ marginTop: i > 0 ? 6 : 0 }}>
                            <Link href={documentPath(d)} className="trk-td-strong">{d.shortName}</Link>
                            {" — "}{d.title} <span style={{ color: "#9a9a9a" }}>({formatDate(d.date)})</span>{" "}
                            <span className={STATUS_TAG[effectiveStatus(d)]}>{effectiveStatus(d)}</span>
                          </div>
                        ))}
                      </td>
                      <td className="trk-td-nowrap">{authority.binding}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        );
      })}

      <Section label="Navigate">
        <div className="trk-related">
          <Link href="/ai-regulation/documents">All documents →</Link>
          <Link href="/ai-regulation/deadlines">Deadlines →</Link>
          <Link href="/ai-regulation">All authorities →</Link>
        </div>
      </Section>
    </TrackerShell>
  );
}

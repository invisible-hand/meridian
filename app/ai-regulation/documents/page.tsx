import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/seo";
import { REGULATORS } from "@/lib/regulators";
import {
  DOCUMENTS,
  STATUS_TAG,
  documentPath,
  documentsFor,
  effectiveStatus,
  formatDate,
  latestDocumentUpdate,
  statusLabel
} from "@/lib/tracker";
import { Section, TrackerShell } from "../shell";

const TITLE = "Every AI Regulation Document for Banks — Bulletins, Circulars, Rules, Reports (2026)";
const DESCRIPTION =
  "A dated index of every primary-source document that governs AI in banking — OCC bulletins, Federal Reserve SR letters, CFPB circulars, the EU AI Act, FSB and Basel reports — each with status, what it says, and who it applies to.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/ai-regulation/documents" },
  openGraph: { type: "website", url: "/ai-regulation/documents", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: "AI Regulation Documents — Tracker", description: DESCRIPTION }
};

export default function DocumentsIndex() {
  const updated = latestDocumentUpdate();
  const newest = [...DOCUMENTS].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 8);
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      url: absoluteUrl("/ai-regulation/documents"),
      name: TITLE,
      description: DESCRIPTION,
      dateModified: updated,
      isPartOf: { "@id": `${absoluteUrl("/")}#website` },
      breadcrumb: breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "AI Regulation Tracker", path: "/ai-regulation" },
        { name: "Documents", path: "/ai-regulation/documents" }
      ]),
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: DOCUMENTS.length,
        itemListElement: DOCUMENTS.map((d, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: `${d.shortName}: ${d.title}`,
          url: absoluteUrl(documentPath(d))
        }))
      }
    }
  ];

  return (
    <TrackerShell
      eyebrow={<><Link href="/ai-regulation" style={{ color: "inherit", textDecoration: "none" }}>AI Regulation Tracker</Link> · Documents</>}
      title={<>Which documents govern AI in banking?<br /><em>{DOCUMENTS.length} primary sources, indexed.</em></>}
      updated={`Last updated ${formatDate(updated)} · Updated as documents are published`}
    >
      <JsonLd data={schema} />
      <p className="trk-answer">
        {DOCUMENTS.length} primary-source documents from {REGULATORS.length} authorities govern how banks may
        build, buy and run AI systems. Each entry below links to its own page with the document&apos;s status,
        key requirements, what it changed, and the official source. The newest documents are listed first;
        the full index is grouped by issuing authority.
      </p>

      <Section label="Newest documents">
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>Date</th><th>Authority</th><th>Document</th><th>Status</th></tr></thead>
            <tbody>
              {newest.map((d) => {
                const reg = REGULATORS.find((r) => r.slug === d.authority);
                return (
                  <tr key={d.slug}>
                    <td className="trk-td-nowrap">{formatDate(d.date)}</td>
                    <td className="trk-td-nowrap"><Link href={`/ai-regulation/${d.authority}`}>{reg?.name ?? d.authority}</Link></td>
                    <td><Link href={documentPath(d)} className="trk-td-strong">{d.shortName}</Link> — {d.title}</td>
                    <td className="trk-td-nowrap"><span className={STATUS_TAG[effectiveStatus(d)]}>{statusLabel(d)}</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Section>

      {REGULATORS.map((reg) => {
        const docs = documentsFor(reg.slug);
        if (docs.length === 0) return null;
        return (
          <Section key={reg.slug} label={reg.name}>
            <h2 className="trk-h2-q">What has the {reg.name} published on AI?</h2>
            <p className="trk-sub">
              {docs.length} {docs.length === 1 ? "document" : "documents"} ·{" "}
              <Link href={`/ai-regulation/${reg.slug}`} style={{ color: "#1a3fcb" }}>How the {reg.name} regulates AI in banking →</Link>
            </p>
            <div className="trk-table-wrap">
              <table className="trk-table">
                <thead><tr><th>Date</th><th>Type</th><th>Document</th><th>Status</th></tr></thead>
                <tbody>
                  {docs.map((d) => (
                    <tr key={d.slug}>
                      <td className="trk-td-nowrap">{formatDate(d.date)}</td>
                      <td className="trk-td-nowrap">{d.docType}</td>
                      <td><Link href={documentPath(d)} className="trk-td-strong">{d.shortName}</Link> — {d.title}</td>
                      <td className="trk-td-nowrap"><span className={STATUS_TAG[effectiveStatus(d)]}>{effectiveStatus(d)}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        );
      })}
    </TrackerShell>
  );
}

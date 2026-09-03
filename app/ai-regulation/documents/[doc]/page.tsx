import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/seo";
import { getRegulator } from "@/lib/regulators";
import {
  DOCUMENTS,
  STATUS_TAG,
  USE_CASE_LABELS,
  documentMatcher,
  documentPath,
  effectiveStatus,
  formatDate,
  getDocument,
  relatedDocuments,
  statusLabel,
  supersededDocs,
  supersedingDoc
} from "@/lib/tracker";
import { Coverage } from "../../coverage";
import { Section, TrackerShell } from "../../shell";
import { DeepDives, deepDiveFaqEntries } from "../../deep-dive";

// Coverage links depend on the digests table; refresh hourly.
export const revalidate = 3600;

type Params = { doc: string };

export function generateStaticParams(): Params[] {
  return DOCUMENTS.map((d) => ({ doc: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { doc: slug } = await params;
  const doc = getDocument(slug);
  if (!doc) return {};
  const title = `${doc.shortName}: ${doc.title} — What It Says, Who It Applies To`;
  const description = doc.answerFirst.slice(0, 300);
  const path = documentPath(doc);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "article", url: path, title, description, modifiedTime: doc.lastUpdated },
    twitter: { card: "summary_large_image", title, description }
  };
}

export default async function DocumentPage({ params }: { params: Promise<Params> }) {
  const { doc: slug } = await params;
  const doc = getDocument(slug);
  if (!doc) notFound();
  const authority = getRegulator(doc.authority);
  if (!authority) notFound();

  const url = absoluteUrl(documentPath(doc));
  const status = effectiveStatus(doc);
  const replaces = supersededDocs(doc);
  const replacedBy = supersedingDoc(doc);
  const related = relatedDocuments(doc);

  const schema: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      url,
      headline: `${doc.shortName}: ${doc.title}`,
      description: doc.answerFirst,
      datePublished: doc.date,
      dateModified: doc.lastUpdated,
      inLanguage: "en-US",
      isAccessibleForFree: true,
      articleSection: ["Banking", "Artificial Intelligence", "Regulation"],
      about: {
        "@type": "Legislation",
        name: `${doc.shortName}: ${doc.title}`,
        url: doc.link,
        legislationDate: doc.date,
        legislationPassedBy: { "@type": "Organization", name: authority.fullName },
        ...(doc.effectiveDate ? { legislationDateVersion: doc.effectiveDate } : {})
      },
      citation: { "@type": "CreativeWork", name: doc.title, url: doc.link },
      author: { "@id": `${absoluteUrl("/")}#organization` },
      publisher: { "@id": `${absoluteUrl("/")}#organization` },
      breadcrumb: breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "AI Regulation Tracker", path: "/ai-regulation" },
        { name: authority.name, path: `/ai-regulation/${authority.slug}` },
        { name: doc.shortName, path: documentPath(doc) }
      ])
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        ...deepDiveFaqEntries(doc.deepDives),
        ...doc.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a }
        }))
      ]
    }
  ];

  return (
    <TrackerShell
      eyebrow={
        <>
          <Link href="/ai-regulation" style={{ color: "inherit", textDecoration: "none" }}>AI Regulation Tracker</Link>
          {" · "}
          <Link href={`/ai-regulation/${authority.slug}`} style={{ color: "inherit", textDecoration: "none" }}>{authority.name}</Link>
          {" · "}{doc.docType}
        </>
      }
      title={
        <>
          What does <em>{doc.shortName}</em> say about AI in banking?
        </>
      }
      updated={`Published ${formatDate(doc.date)} · Last reviewed ${formatDate(doc.lastUpdated)}`}
      ctaTitle="Follow every document these regulators publish"
    >
      <JsonLd data={schema} />

      <p className="trk-answer">{doc.answerFirst}</p>

      <Section label="At a glance">
        <div className="trk-table-wrap">
          <table className="trk-table">
            <tbody>
              <tr><td className="trk-td-strong trk-td-nowrap">Document</td><td>{doc.shortName} — {doc.title}</td></tr>
              <tr>
                <td className="trk-td-strong trk-td-nowrap">Issued by</td>
                <td><Link href={`/ai-regulation/${authority.slug}`}>{authority.fullName}</Link></td>
              </tr>
              <tr><td className="trk-td-strong trk-td-nowrap">Type</td><td>{doc.docType}</td></tr>
              <tr>
                <td className="trk-td-strong trk-td-nowrap">Status</td>
                <td><span className={STATUS_TAG[status]}>{statusLabel(doc)}</span></td>
              </tr>
              <tr><td className="trk-td-strong trk-td-nowrap">Published</td><td>{formatDate(doc.date)}</td></tr>
              {doc.effectiveDate && (
                <tr><td className="trk-td-strong trk-td-nowrap">Effective</td><td>{formatDate(doc.effectiveDate)}</td></tr>
              )}
              {doc.commentDeadline && (
                <tr><td className="trk-td-strong trk-td-nowrap">Comment deadline</td><td>{formatDate(doc.commentDeadline)}</td></tr>
              )}
              <tr><td className="trk-td-strong trk-td-nowrap">Applies to</td><td>{doc.appliesTo}</td></tr>
              {replaces.length > 0 && (
                <tr>
                  <td className="trk-td-strong trk-td-nowrap">Supersedes</td>
                  <td>{replaces.map((d, i) => (<span key={d.slug}>{i > 0 && ", "}<Link href={documentPath(d)}>{d.shortName}</Link></span>))}</td>
                </tr>
              )}
              {doc.interagency && doc.interagency.length > 0 && (
                <tr>
                  <td className="trk-td-strong trk-td-nowrap">Also issued as</td>
                  <td>{doc.interagency.map(getDocument).filter((d): d is NonNullable<typeof d> => Boolean(d)).map((d, i) => (<span key={d.slug}>{i > 0 && ", "}<Link href={documentPath(d)}>{d.shortName}</Link></span>))}</td>
                </tr>
              )}
              {replacedBy && (
                <tr>
                  <td className="trk-td-strong trk-td-nowrap">Superseded by</td>
                  <td><Link href={documentPath(replacedBy)}>{replacedBy.shortName}</Link></td>
                </tr>
              )}
              <tr>
                <td className="trk-td-strong trk-td-nowrap">Official source</td>
                <td><a href={doc.link} target="_blank" rel="noopener noreferrer" className="trk-source">{sourceHost(doc.link)} ↗</a></td>
              </tr>
              <tr>
                <td className="trk-td-strong trk-td-nowrap">Use cases</td>
                <td>{doc.useCases.map((u, i) => (<span key={u}>{i > 0 && " · "}<Link href={`/ai-regulation/by-use-case#${u}`}>{USE_CASE_LABELS[u].label}</Link></span>))}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section label="What it says">
        <h2 className="trk-h2-q">What are the key points of {doc.shortName}?</h2>
        <ul className="trk-list">
          {doc.keyPoints.map((k) => (<li key={k.slice(0, 50)}>{k}</li>))}
        </ul>
      </Section>

      <Section label="What changed">
        <h2 className="trk-h2-q">What did {doc.shortName} change for banks?</h2>
        <p className="trk-p">{doc.whatChanged}</p>
      </Section>

      <DeepDives items={doc.deepDives} selfDocSlug={doc.slug} />

      <Section label="Common questions">
        {doc.faq.map((f) => (
          <div key={f.q}>
            <h2 className="trk-faq-q">{f.q}</h2>
            <p className="trk-faq-a">{f.a}</p>
          </div>
        ))}
      </Section>

      <Coverage matches={documentMatcher(doc)} />

      {related.length > 0 && (
        <Section label="Related documents">
          <div className="trk-table-wrap">
            <table className="trk-table">
              <thead><tr><th>Date</th><th>Document</th><th>Status</th></tr></thead>
              <tbody>
                {related.map((d) => (
                  <tr key={d.slug}>
                    <td className="trk-td-nowrap">{formatDate(d.date)}</td>
                    <td><Link href={documentPath(d)} className="trk-td-strong">{d.shortName}</Link> — {d.title}</td>
                    <td className="trk-td-nowrap"><span className={STATUS_TAG[effectiveStatus(d)]}>{effectiveStatus(d)}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}

      <Section label="Navigate">
        <div className="trk-related">
          <Link href={`/ai-regulation/${authority.slug}`}>{authority.name} →</Link>
          <Link href="/ai-regulation/documents">All documents →</Link>
          <Link href="/ai-regulation/deadlines">Deadlines →</Link>
          <Link href="/ai-regulation">All authorities →</Link>
        </div>
      </Section>
    </TrackerShell>
  );
}

function sourceHost(link: string): string {
  try {
    return new URL(link).hostname.replace(/^www\./, "");
  } catch {
    return "official source";
  }
}

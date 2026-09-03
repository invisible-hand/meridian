import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/seo";
import {
  REGULATORS,
  formatTimelineDate,
  getRegulator
} from "@/lib/regulators";
import {
  STATUS_TAG,
  authorityMatcher,
  documentPath,
  documentsFor,
  effectiveStatus,
  getDocument,
  statusLabel,
  timelineFor
} from "@/lib/tracker";
import { Coverage } from "../coverage";
import { Section, TrackerShell } from "../shell";
import { DeepDives, deepDiveFaqEntries } from "../deep-dive";

// Coverage links depend on the digests table; refresh hourly.
export const revalidate = 3600;

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return REGULATORS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const reg = getRegulator(slug);
  if (!reg) return {};
  const title = `${reg.name} on AI in Banking: Rules, Timeline, What Applies (2026)`;
  const description = reg.answerFirst.slice(0, 300);
  return {
    title,
    description,
    alternates: { canonical: `/ai-regulation/${reg.slug}` },
    openGraph: {
      type: "article",
      url: `/ai-regulation/${reg.slug}`,
      title,
      description,
      modifiedTime: reg.lastUpdated
    },
    twitter: { card: "summary_large_image", title, description }
  };
}

const BINDING_TAG: Record<string, string> = {
  "Binding law": "trk-tag trk-tag-law",
  "Supervisory guidance": "trk-tag trk-tag-guidance",
  "Non-binding standards": "trk-tag trk-tag-standards",
  "Voluntary framework": "trk-tag trk-tag-voluntary"
};

export default async function RegulatorPage({
  params
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const reg = getRegulator(slug);
  if (!reg) notFound();

  const url = absoluteUrl(`/ai-regulation/${reg.slug}`);
  const schema: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      url,
      headline: `${reg.name} and AI in banking`,
      description: reg.answerFirst,
      dateModified: reg.lastUpdated,
      inLanguage: "en-US",
      isAccessibleForFree: true,
      articleSection: ["Banking", "Artificial Intelligence", "Regulation"],
      about: { "@type": "Organization", name: reg.fullName },
      author: { "@id": `${absoluteUrl("/")}#organization` },
      publisher: { "@id": `${absoluteUrl("/")}#organization` },
      breadcrumb: breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "AI Regulation Tracker", path: "/ai-regulation" },
        { name: reg.name, path: `/ai-regulation/${reg.slug}` }
      ])
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        ...deepDiveFaqEntries(reg.deepDives),
        ...reg.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a }
        }))
      ]
    }
  ];

  const related = reg.related
    .map((s) => getRegulator(s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));
  const docs = documentsFor(reg.slug);
  const timeline = timelineFor(reg);

  return (
    <TrackerShell
      eyebrow={
        <>
          <Link href="/ai-regulation" style={{ color: "inherit", textDecoration: "none" }}>AI Regulation Tracker</Link>
          {" "}· {reg.jurisdiction}
        </>
      }
      title={<>How does the <em>{reg.name}</em> regulate AI in banking?</>}
      updated={`Last updated ${formatTimelineDate(reg.lastUpdated)} · Updated as rules change`}
      ctaTitle="Follow every move these regulators make"
    >
      <JsonLd data={schema} />

      <p className="trk-answer">{reg.answerFirst}</p>

      <Section label="At a glance">
        <div className="trk-table-wrap">
          <table className="trk-table">
            <tbody>
              <tr><td className="trk-td-strong trk-td-nowrap">Full name</td><td>{reg.fullName}</td></tr>
              <tr><td className="trk-td-strong trk-td-nowrap">Role</td><td>{reg.role}</td></tr>
              <tr><td className="trk-td-strong trk-td-nowrap">Force on banks</td><td><span className={BINDING_TAG[reg.binding]}>{reg.binding}</span></td></tr>
              <tr><td className="trk-td-strong trk-td-nowrap">Applies to</td><td>{reg.appliesTo}</td></tr>
              <tr><td className="trk-td-strong trk-td-nowrap">Key document</td><td>{reg.keyDocument}</td></tr>
              <tr><td className="trk-td-strong trk-td-nowrap">Latest move</td><td>{reg.latestMove}</td></tr>
              <tr><td className="trk-td-strong trk-td-nowrap">Documents tracked</td><td>{docs.length} · <Link href="/ai-regulation/documents">all documents →</Link></td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section label="The full picture">
        {reg.overview.map((p) => (
          <p className="trk-p" key={p.slice(0, 40)}>{p}</p>
        ))}
      </Section>

      <DeepDives items={reg.deepDives} />

      {docs.length > 0 && (
        <Section label="Documents">
          <h2 className="trk-h2-q">What has the {reg.name} actually published on AI?</h2>
          <div className="trk-table-wrap">
            <table className="trk-table">
              <thead><tr><th>Date</th><th>Document</th><th>Status</th></tr></thead>
              <tbody>
                {docs.map((d) => (
                  <tr key={d.slug}>
                    <td className="trk-td-nowrap">{formatTimelineDate(d.date)}</td>
                    <td>
                      <Link href={documentPath(d)} className="trk-td-strong">{d.shortName}</Link>
                      {" — "}{d.title}
                    </td>
                    <td className="trk-td-nowrap"><span className={STATUS_TAG[effectiveStatus(d)]}>{statusLabel(d)}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}

      <Section label="Timeline of key documents and events">
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>Date</th><th>Type</th><th>Document / event</th></tr></thead>
            <tbody>
              {timeline.map((t) => (
                <tr key={`${t.date}-${t.title}`}>
                  <td className="trk-td-nowrap">{formatTimelineDate(t.date)}</td>
                  <td className="trk-td-nowrap">{t.docType}</td>
                  <td>
                    <span className="trk-td-strong">
                      {t.docSlug ? (
                        <Link href={documentPath(t.docSlug)}>{t.title}</Link>
                      ) : t.link ? (
                        <a href={t.link} target="_blank" rel="noopener noreferrer">{t.title}</a>
                      ) : (
                        t.title
                      )}
                      .
                    </span>{" "}
                    {t.summary}
                    {t.docSlug && t.link && (
                      <>{" "}<a href={t.link} target="_blank" rel="noopener noreferrer" className="trk-source">source ↗</a></>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section label="What to watch next">
        <ul className="trk-list">
          {reg.watchNext.map((w) => (
            <li key={w.slice(0, 40)}>{w}</li>
          ))}
        </ul>
      </Section>

      <Section label="Common questions">
        {reg.faq.map((f) => (
          <div key={f.q}>
            <h2 className="trk-faq-q">{f.q}</h2>
            <p className="trk-faq-a">{f.a}</p>
          </div>
        ))}
      </Section>

      <Coverage matches={authorityMatcher(reg)} />

      {related.length > 0 && (
        <Section label="Related authorities">
          <div className="trk-related">
            {related.map((r) => (
              <Link key={r.slug} href={`/ai-regulation/${r.slug}`}>{r.name} →</Link>
            ))}
            <Link href="/ai-regulation">All authorities →</Link>
          </div>
        </Section>
      )}
    </TrackerShell>
  );
}

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
import { trackerCss } from "../tracker-styles";

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
      mainEntity: reg.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a }
      }))
    }
  ];

  const related = reg.related
    .map((s) => getRegulator(s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <>
      <JsonLd data={schema} />
      <style>{trackerCss}</style>

      <div className="trk-root">
        <nav className="trk-nav">
          <Link href="/" className="trk-logo">Banking<span>News</span>AI</Link>
          <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
            <Link href="/ai-regulation" className="trk-nav-link">Tracker</Link>
            <Link href="/issues" className="trk-nav-link">Archive</Link>
            <Link href="/#subscribe" className="trk-nav-cta">Subscribe</Link>
          </div>
        </nav>

        <div className="trk-masthead">
          <div className="trk-masthead-inner">
            <p className="trk-eyebrow">
              <Link href="/ai-regulation" style={{ color: "inherit", textDecoration: "none" }}>
                AI Regulation Tracker
              </Link>
              {" "}· {reg.jurisdiction}
            </p>
            <div className="trk-masthead-rule" />
            <h1 className="trk-h1">
              How does the <em>{reg.name}</em> regulate AI in banking?
            </h1>
            <p className="trk-updated">
              Last updated {formatTimelineDate(reg.lastUpdated)} · Updated as rules change
            </p>
          </div>
        </div>

        <main className="trk-body">
          <p className="trk-answer">{reg.answerFirst}</p>

          {/* At a glance */}
          <section className="trk-section">
            <div className="trk-section-label">
              <span className="trk-section-label-text">At a glance</span>
              <div className="trk-section-rule" />
            </div>
            <div className="trk-table-wrap">
              <table className="trk-table">
                <tbody>
                  <tr>
                    <td className="trk-td-strong trk-td-nowrap">Full name</td>
                    <td>{reg.fullName}</td>
                  </tr>
                  <tr>
                    <td className="trk-td-strong trk-td-nowrap">Role</td>
                    <td>{reg.role}</td>
                  </tr>
                  <tr>
                    <td className="trk-td-strong trk-td-nowrap">Force on banks</td>
                    <td><span className={BINDING_TAG[reg.binding]}>{reg.binding}</span></td>
                  </tr>
                  <tr>
                    <td className="trk-td-strong trk-td-nowrap">Applies to</td>
                    <td>{reg.appliesTo}</td>
                  </tr>
                  <tr>
                    <td className="trk-td-strong trk-td-nowrap">Key document</td>
                    <td>{reg.keyDocument}</td>
                  </tr>
                  <tr>
                    <td className="trk-td-strong trk-td-nowrap">Latest move</td>
                    <td>{reg.latestMove}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Context */}
          <section className="trk-section">
            <div className="trk-section-label">
              <span className="trk-section-label-text">The full picture</span>
              <div className="trk-section-rule" />
            </div>
            {reg.overview.map((p) => (
              <p className="trk-p" key={p.slice(0, 40)}>{p}</p>
            ))}
          </section>

          {/* Timeline */}
          <section className="trk-section">
            <div className="trk-section-label">
              <span className="trk-section-label-text">Timeline of key documents</span>
              <div className="trk-section-rule" />
            </div>
            <div className="trk-table-wrap">
              <table className="trk-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Document / event</th>
                  </tr>
                </thead>
                <tbody>
                  {reg.timeline.map((t) => (
                    <tr key={`${t.date}-${t.title}`}>
                      <td className="trk-td-nowrap">{formatTimelineDate(t.date)}</td>
                      <td className="trk-td-nowrap">{t.docType}</td>
                      <td>
                        <span className="trk-td-strong">
                          {t.link ? (
                            <a href={t.link} target="_blank" rel="noopener noreferrer">{t.title}</a>
                          ) : (
                            t.title
                          )}
                          .
                        </span>{" "}
                        {t.summary}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* What to watch */}
          <section className="trk-section">
            <div className="trk-section-label">
              <span className="trk-section-label-text">What to watch next</span>
              <div className="trk-section-rule" />
            </div>
            <ul className="trk-list">
              {reg.watchNext.map((w) => (
                <li key={w.slice(0, 40)}>{w}</li>
              ))}
            </ul>
          </section>

          {/* FAQ */}
          <section className="trk-section">
            <div className="trk-section-label">
              <span className="trk-section-label-text">Common questions</span>
              <div className="trk-section-rule" />
            </div>
            {reg.faq.map((f) => (
              <div key={f.q}>
                <h2 className="trk-faq-q">{f.q}</h2>
                <p className="trk-faq-a">{f.a}</p>
              </div>
            ))}
          </section>

          {/* Related */}
          {related.length > 0 && (
            <section className="trk-section">
              <div className="trk-section-label">
                <span className="trk-section-label-text">Related authorities</span>
                <div className="trk-section-rule" />
              </div>
              <div className="trk-related">
                {related.map((r) => (
                  <Link key={r.slug} href={`/ai-regulation/${r.slug}`}>
                    {r.name} →
                  </Link>
                ))}
                <Link href="/ai-regulation">All authorities →</Link>
              </div>
            </section>
          )}

          <div className="trk-cta">
            <h3>Follow every move these regulators make</h3>
            <p>6 curated AI stories for banking executives · Every morning · Free</p>
            <Link href="/#subscribe" className="trk-cta-btn">Subscribe to BankingNewsAI →</Link>
          </div>
        </main>

        <footer className="trk-footer">
          <Link href="/" className="trk-footer-link">Home</Link>
          <Link href="/ai-regulation" className="trk-footer-link">AI Regulation Tracker</Link>
          <Link href="/issues" className="trk-footer-link">Archive</Link>
        </footer>
      </div>
    </>
  );
}

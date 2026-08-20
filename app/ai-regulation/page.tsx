import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/seo";
import {
  REGULATORS,
  TRACKER_LAST_REVIEWED,
  formatTimelineDate
} from "@/lib/regulators";
import { trackerCss } from "./tracker-styles";

const TITLE = "Who Regulates AI in Banking? Every Major Authority, Tracked (2026)";
const DESCRIPTION =
  "A continuously updated reference to every body that regulates AI in banking — EU AI Act, FSB, OCC, Federal Reserve, CFPB, ECB, EBA, UK PRA/FCA, Basel Committee, NIST — with what each has published, what binds banks, and what's next.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/ai-regulation" },
  openGraph: {
    type: "website",
    url: "/ai-regulation",
    title: TITLE,
    description: DESCRIPTION
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Regulation in Banking — Tracker",
    description: DESCRIPTION
  }
};

const BINDING_TAG: Record<string, string> = {
  "Binding law": "trk-tag trk-tag-law",
  "Supervisory guidance": "trk-tag trk-tag-guidance",
  "Non-binding standards": "trk-tag trk-tag-standards",
  "Voluntary framework": "trk-tag trk-tag-voluntary"
};

const HUB_FAQ = [
  {
    q: "Who regulates AI in banking?",
    a: "No single body does. Banks face a layered system: binding law where it exists (the EU AI Act, US consumer statutes like ECOA), prudential supervisors applying existing frameworks to AI (Federal Reserve, OCC, ECB, UK PRA/FCA), and global standard-setters shaping the agenda (FSB, Basel Committee). Voluntary frameworks like the NIST AI RMF fill the gaps supervisors leave open."
  },
  {
    q: "Is there a dedicated AI law for banks?",
    a: "Only in the EU. The EU AI Act is the sole binding, AI-specific law that reaches banks — its high-risk regime, covering credit scoring, became applicable August 2, 2026. The US and UK have deliberately chosen to regulate bank AI through existing law and supervision instead."
  },
  {
    q: "What changed for bank AI regulation in 2026?",
    a: "Three big moves: the EU AI Act's high-risk obligations became applicable (Aug 2); the US agencies replaced the 15-year-old SR 11-7 model risk framework with revised guidance that excludes generative and agentic AI (Apr 17); and the FSB opened consultation on 12 sound practices for responsible AI adoption, with the final report due October 2026."
  }
];

function hubSchema(): Record<string, unknown>[] {
  const url = absoluteUrl("/ai-regulation");
  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      url,
      name: TITLE,
      description: DESCRIPTION,
      dateModified: TRACKER_LAST_REVIEWED,
      isPartOf: { "@id": `${absoluteUrl("/")}#website` },
      breadcrumb: breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "AI Regulation Tracker", path: "/ai-regulation" }
      ]),
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: REGULATORS.length,
        itemListElement: REGULATORS.map((r, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: r.fullName,
          url: absoluteUrl(`/ai-regulation/${r.slug}`)
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: HUB_FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a }
      }))
    }
  ];
}

export default function AiRegulationHub() {
  const newest = REGULATORS.flatMap((r) =>
    r.timeline.map((t) => ({ ...t, org: r.name, slug: r.slug }))
  )
    .filter((t) => t.date >= "2025-10-01")
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <JsonLd data={hubSchema()} />
      <style>{trackerCss}</style>

      <div className="trk-root">
        <nav className="trk-nav">
          <Link href="/" className="trk-logo">Banking<span>News</span>AI</Link>
          <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
            <Link href="/issues" className="trk-nav-link">Archive</Link>
            <Link href="/about" className="trk-nav-link">About</Link>
            <Link href="/#subscribe" className="trk-nav-cta">Subscribe</Link>
          </div>
        </nav>

        <div className="trk-masthead">
          <div className="trk-masthead-inner">
            <p className="trk-eyebrow">AI Regulation Tracker · Reference</p>
            <div className="trk-masthead-rule" />
            <h1 className="trk-h1">
              Who regulates AI in banking?<br />
              <em>Every major authority, tracked.</em>
            </h1>
            <p className="trk-updated">Last updated {formatTimelineDate(TRACKER_LAST_REVIEWED)} · Updated as rules change</p>
          </div>
        </div>

        <main className="trk-body">
          <p className="trk-answer">
            No single regulator owns AI in banking. Banks answer to a layered system:
            one binding AI law (the EU AI Act, whose high-risk regime — including credit
            scoring — became applicable August 2, 2026), prudential supervisors applying
            existing frameworks to AI (the Federal Reserve, OCC, ECB, and UK PRA/FCA),
            consumer-protection law that ignores how a decision was made (CFPB under
            ECOA), and global standard-setters shaping what supervisors expect next
            (FSB, Basel Committee). This page tracks all of them.
          </p>

          {/* Comparison table */}
          <section className="trk-section">
            <div className="trk-section-label">
              <span className="trk-section-label-text">The authorities at a glance</span>
              <div className="trk-section-rule" />
            </div>
            <div className="trk-table-wrap">
              <table className="trk-table">
                <thead>
                  <tr>
                    <th>Authority</th>
                    <th>Jurisdiction</th>
                    <th>Force</th>
                    <th>Key document</th>
                    <th>Latest move</th>
                  </tr>
                </thead>
                <tbody>
                  {REGULATORS.map((r) => (
                    <tr key={r.slug}>
                      <td className="trk-td-nowrap">
                        <Link href={`/ai-regulation/${r.slug}`} className="trk-td-strong" style={{ color: "#1a3fcb", textDecoration: "none" }}>
                          {r.name}
                        </Link>
                      </td>
                      <td>{r.jurisdiction}</td>
                      <td><span className={BINDING_TAG[r.binding]}>{r.binding}</span></td>
                      <td>{r.keyDocument}</td>
                      <td>{r.latestMove}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* What changed in 2026 */}
          <section className="trk-section">
            <div className="trk-section-label">
              <span className="trk-section-label-text">What changed in 2026</span>
              <div className="trk-section-rule" />
            </div>
            <p className="trk-p">
              <strong>The EU AI Act&apos;s high-risk regime went live.</strong> From August 2,
              2026, AI credit-scoring systems in the EU must meet binding requirements —
              risk management, data governance, human oversight, logging — with fines up
              to €15M or 3% of global turnover.{" "}
              <Link href="/ai-regulation/eu-ai-act" style={{ color: "#1a3fcb" }}>Details →</Link>
            </p>
            <p className="trk-p">
              <strong>The US retired SR 11-7.</strong> On April 17, 2026 the OCC, Federal
              Reserve, and FDIC replaced the 2011 model risk management framework — and
              explicitly excluded generative and agentic AI from its scope, leaving those
              to banks&apos; broader governance programs.{" "}
              <Link href="/ai-regulation/occ" style={{ color: "#1a3fcb" }}>Details →</Link>
            </p>
            <p className="trk-p">
              <strong>The FSB moved toward firm-level expectations.</strong> Its June 2026
              consultation proposes 12 sound practices for responsible AI adoption —
              including for agentic AI — with the final report due October 2026.{" "}
              <Link href="/ai-regulation/fsb" style={{ color: "#1a3fcb" }}>Details →</Link>
            </p>
          </section>

          {/* Recent developments */}
          <section className="trk-section">
            <div className="trk-section-label">
              <span className="trk-section-label-text">Recent developments</span>
              <div className="trk-section-rule" />
            </div>
            <div className="trk-table-wrap">
              <table className="trk-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Authority</th>
                    <th>Development</th>
                  </tr>
                </thead>
                <tbody>
                  {newest.slice(0, 10).map((t) => (
                    <tr key={`${t.slug}-${t.date}-${t.title}`}>
                      <td className="trk-td-nowrap">{formatTimelineDate(t.date)}</td>
                      <td className="trk-td-nowrap">
                        <Link href={`/ai-regulation/${t.slug}`} style={{ color: "#1a3fcb", textDecoration: "none" }}>{t.org}</Link>
                      </td>
                      <td><span className="trk-td-strong">{t.title}.</span> {t.summary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="trk-section">
            <div className="trk-section-label">
              <span className="trk-section-label-text">Common questions</span>
              <div className="trk-section-rule" />
            </div>
            {HUB_FAQ.map((f) => (
              <div key={f.q}>
                <h2 className="trk-faq-q">{f.q}</h2>
                <p className="trk-faq-a">{f.a}</p>
              </div>
            ))}
          </section>

          <div className="trk-cta">
            <h3>Regulators move daily. So do we.</h3>
            <p>6 curated AI stories for banking executives · Every morning · Free</p>
            <Link href="/#subscribe" className="trk-cta-btn">Subscribe to BankingNewsAI →</Link>
          </div>
        </main>

        <footer className="trk-footer">
          <Link href="/" className="trk-footer-link">Home</Link>
          <Link href="/issues" className="trk-footer-link">Archive</Link>
          <Link href="/about" className="trk-footer-link">About</Link>
        </footer>
      </div>
    </>
  );
}

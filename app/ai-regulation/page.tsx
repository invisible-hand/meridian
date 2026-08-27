import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/seo";
import { REGULATORS, formatTimelineDate, isUsAuthority } from "@/lib/regulators";
import {
  DOCUMENTS,
  documentPath,
  latestDocumentUpdate,
  openConsultations,
  recentDevelopments,
  upcomingDeadlines
} from "@/lib/tracker";
import { Section, TrackerShell } from "./shell";

// The open-consultation / upcoming-deadline blocks depend on today's date.
export const revalidate = 86400;

const TITLE = "Who Regulates AI in Banking? Every Major Authority, Tracked (2026)";
const DESCRIPTION =
  "A continuously updated reference to every body that regulates AI in banking — Federal Reserve, OCC, FDIC, CFPB, SEC, FinCEN, CFTC, Treasury, NCUA, state laws, EU AI Act, ECB, EBA, UK PRA/FCA, FSB, Basel Committee, NIST — with every document each has published, what binds banks, deadlines, and what's next.";

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
    a: "At the federal level, only in the EU: the EU AI Act is the sole binding, cross-sector AI law that reaches banks, and its high-risk regime covering credit scoring applies from December 2, 2027 after the 2026 Digital Omnibus deferral. In the US there is no federal AI statute for banks — but Colorado's Automated Decision-Making Technology Act (effective January 1, 2027) is binding state law that reaches lenders, and the UK has deliberately chosen to regulate bank AI through existing law and supervision."
  },
  {
    q: "What changed for bank AI regulation in 2026?",
    a: "Four big moves: the US agencies replaced the 15-year-old SR 11-7 model risk framework with revised guidance that excludes generative and agentic AI (Apr 17); the CFPB's Regulation B rule eliminated disparate-impact liability under ECOA (effective Jul 21); the EU's Digital Omnibus deferred the AI Act's high-risk regime, including credit scoring, to December 2, 2027; and the FSB consulted on 12 sound practices for responsible AI adoption, with the final report due later in 2026."
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
      dateModified: latestDocumentUpdate(),
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
  const newest = recentDevelopments("2025-10-01", 12);
  const open = openConsultations();
  const upcoming = upcomingDeadlines().slice(0, 6);
  const lastUpdated = latestDocumentUpdate();
  const us = REGULATORS.filter((r) => isUsAuthority(r.slug));
  const world = REGULATORS.filter((r) => !isUsAuthority(r.slug));

  const AuthorityTable = ({ rows }: { rows: typeof REGULATORS }) => (
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
          {rows.map((r) => (
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
  );

  return (
    <TrackerShell
      eyebrow="AI Regulation Tracker · Reference"
      title={<>Who regulates AI in banking?<br /><em>Every major authority, tracked.</em></>}
      updated={`Last updated ${formatTimelineDate(lastUpdated)} · ${REGULATORS.length} authorities · ${DOCUMENTS.length} documents · Updated as rules change`}
    >
      <JsonLd data={hubSchema()} />

      <p className="trk-answer">
        No single regulator owns AI in banking. Banks answer to a layered system:
        binding AI law where it exists (the EU AI Act, whose high-risk regime — including credit
        scoring — now applies from December 2, 2027 after the 2026 Digital Omnibus deferral, and Colorado&apos;s
        ADMT Act from January 1, 2027), prudential supervisors applying
        existing frameworks to AI (the Federal Reserve, OCC, FDIC, NCUA, ECB, and UK PRA/FCA),
        consumer-protection, market and financial-crime authorities that regulate outcomes regardless of how a
        decision was made (CFPB, SEC, CFTC, FinCEN, NY DFS), and global standard-setters shaping what supervisors
        expect next (FSB, Basel Committee). This page tracks all {REGULATORS.length} of them and every document
        they have published.
      </p>

      <Section label="Explore the tracker">
        <div className="trk-related">
          <Link href="/ai-regulation/documents">{DOCUMENTS.length} documents →</Link>
          <Link href="/ai-regulation/deadlines">Deadlines calendar →</Link>
          <Link href="/ai-regulation/by-use-case">Rules by use case →</Link>
        </div>
      </Section>

      {(open.length > 0 || upcoming.length > 0) && (
        <Section label="Right now">
          {open.length > 0 && (
            <>
              <h2 className="trk-h2-q">Which AI consultations are open for comment?</h2>
              <ul className="trk-list">
                {open.map((d) => (
                  <li key={d.slug}>
                    <Link href={documentPath(d)} style={{ color: "#1a3fcb" }}>{d.shortName}</Link> — {d.title}
                    {d.commentDeadline && <> · closes {formatTimelineDate(d.commentDeadline)}</>}
                  </li>
                ))}
              </ul>
            </>
          )}
          {upcoming.length > 0 && (
            <>
              <h2 className="trk-h2-q" style={{ marginTop: open.length > 0 ? 24 : 0 }}>What are the next AI regulation deadlines for banks?</h2>
              <div className="trk-table-wrap">
                <table className="trk-table">
                  <thead><tr><th>Date</th><th>Authority</th><th>Deadline</th></tr></thead>
                  <tbody>
                    {upcoming.map((d, i) => (
                      <tr key={`${d.date}-${i}`}>
                        <td className="trk-td-nowrap">{formatTimelineDate(d.date)}</td>
                        <td className="trk-td-nowrap"><Link href={`/ai-regulation/${d.authority.slug}`}>{d.authority.name}</Link></td>
                        <td>{d.docSlug ? <Link href={documentPath(d.docSlug)} className="trk-td-strong">{d.label}</Link> : <span className="trk-td-strong">{d.label}</span>} · {d.kind}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="trk-sub" style={{ marginTop: 10 }}><Link href="/ai-regulation/deadlines" style={{ color: "#1a3fcb" }}>Full deadlines calendar →</Link></p>
            </>
          )}
        </Section>
      )}

      <Section label="United States">
        <h2 className="trk-h2-q">Which US authorities regulate AI in banking?</h2>
        <AuthorityTable rows={us} />
      </Section>

      <Section label="International">
        <h2 className="trk-h2-q">Which international bodies set AI rules for banks?</h2>
        <AuthorityTable rows={world} />
      </Section>

      <Section label="What changed in 2026">
        <p className="trk-p">
          <strong>The EU deferred its high-risk AI deadline.</strong> The high-risk regime —
          including credit scoring — was due August 2, 2026; the Digital Omnibus on AI (Regulation
          (EU) 2026/1744, in force July 27, 2026) moved it to December 2, 2027. The obligations
          (risk management, data governance, human oversight, logging; fines up to €15M or 3% of
          global turnover) are unchanged.{" "}
          <Link href="/ai-regulation/eu-ai-act" style={{ color: "#1a3fcb" }}>Details →</Link>
        </p>
        <p className="trk-p">
          <strong>The CFPB narrowed fair-lending exposure for AI models.</strong> Its April 2026
          Regulation B rule (effective July 21, 2026) says ECOA does not authorize disparate-impact
          liability — while the duty to give specific adverse-action reasons is untouched, and its
          2022/2023 AI circulars were withdrawn in May 2025.{" "}
          <Link href="/ai-regulation/cfpb" style={{ color: "#1a3fcb" }}>Details →</Link>
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
          including for agentic AI — with the final report due later in 2026.{" "}
          <Link href="/ai-regulation/fsb" style={{ color: "#1a3fcb" }}>Details →</Link>
        </p>
      </Section>

      <Section label="Recent developments">
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
              {newest.map((t) => (
                <tr key={`${t.slug}-${t.date}-${t.title}`}>
                  <td className="trk-td-nowrap">{formatTimelineDate(t.date)}</td>
                  <td className="trk-td-nowrap">
                    <Link href={`/ai-regulation/${t.slug}`} style={{ color: "#1a3fcb", textDecoration: "none" }}>{t.org}</Link>
                  </td>
                  <td>
                    <span className="trk-td-strong">
                      {t.docSlug ? <Link href={documentPath(t.docSlug)}>{t.title}</Link> : t.title}.
                    </span>{" "}
                    {t.summary}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section label="Common questions">
        {HUB_FAQ.map((f) => (
          <div key={f.q}>
            <h2 className="trk-faq-q">{f.q}</h2>
            <p className="trk-faq-a">{f.a}</p>
          </div>
        ))}
      </Section>
    </TrackerShell>
  );
}

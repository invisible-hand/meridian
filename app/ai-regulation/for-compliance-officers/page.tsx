import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/seo";
import { REGULATORS, getRegulator } from "@/lib/regulators";
import {
  DOCUMENTS,
  documentPath,
  firstSentence,
  formatDate,
  getDocument,
  inForceDocuments,
  latestDocumentUpdate,
  openConsultations,
  todayIso,
  upcomingDeadlines,
  warningDocuments
} from "@/lib/tracker";
import { Section, TrackerShell } from "../shell";

const TITLE = "AI Regulation for Bank Compliance Officers — Where to Start (2026)";
const DESCRIPTION =
  "A working orientation for compliance and risk officers facing AI: the five documents to read first, what applies to your bank today, this quarter's deadlines, and how to stay current — built on a tracker of 18 authorities and every primary source.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/ai-regulation/for-compliance-officers" },
  openGraph: { type: "website", url: "/ai-regulation/for-compliance-officers", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: "AI Regulation for Compliance Officers", description: DESCRIPTION }
};

export const revalidate = 86400;

// The stable on-ramp: the five documents a compliance officer should read
// before anything else. Deliberate, hand-picked, rarely changed.
const FIRST_READS: { slug: string; why: string }[] = [
  { slug: "fed-sr-26-2", why: "The framework US examiners test AI models against — and the one that deliberately excludes generative and agentic AI." },
  { slug: "cfpb-regulation-b-final-rule-2026", why: "What federal fair-lending exposure for AI underwriting looks like after disparate impact — and what still applies (adverse-action notices)." },
  { slug: "eu-ai-act-regulation-2024-1689", why: "The only binding cross-sector AI law reaching banks; credit scoring is named high-risk, compliance due December 2, 2027." },
  { slug: "fsb-ai-sound-practices-consultation-2026", why: "The 12 practices most likely to become the global supervisory baseline — the final report is a 2026 G20 deliverable." },
  { slug: "nist-ai-100-1", why: "The voluntary framework US agencies keep referencing — the closest thing to a common vocabulary for AI risk programs." }
];

export default function ForComplianceOfficersPage() {
  const today = todayIso();
  const updated = latestDocumentUpdate();
  const nextThree = upcomingDeadlines(today).slice(0, 3);
  const open = openConsultations(today);
  const warnings = warningDocuments().slice(0, 3);
  const inForceCount = inForceDocuments().length;
  const firstReads = FIRST_READS.map((f) => ({ ...f, doc: getDocument(f.slug) })).filter((f) => f.doc);

  const faq = [
    {
      q: "Which AI rules apply to my bank right now?",
      a: "It depends on your charter and footprint. Every US bank: ECOA/Regulation B adverse-action requirements, FCRA, UDAAP, BSA/AML expectations, and — for institutions over roughly $30B — the April 2026 revised interagency model risk management guidance. New York-regulated institutions add 23 NYCRR Part 500 and the DFS AI letters. EU operations add the AI Act (high-risk obligations from December 2, 2027) and ECB supervisory expectations. Lending into Colorado adds the ADMT Act from January 1, 2027. The by-use-case matrix maps each of your AI systems to its governing documents."
    },
    {
      q: "Where should a compliance officer start with AI regulation?",
      a: "Read five documents before anything else: the revised interagency model risk guidance (SR 26-2 / Bulletin 2026-13), the CFPB's April 2026 Regulation B rule, the EU AI Act if you have EU exposure, the FSB's 12 proposed sound practices, and the NIST AI Risk Management Framework. Together they cover what examiners test today, what fair-lending law still requires, the one binding AI statute, and the two frameworks supervisors keep referencing."
    },
    {
      q: "How do I keep up with AI regulatory changes?",
      a: "Three moving parts are worth a standing watch: dated deadlines (tracked on the checklist and calendar pages, recomputed daily), new documents (18 authorities tracked, each new bulletin or rule added as a standing page), and formal warnings (FinCEN alerts, Dear-CEO letters). The daily brief carries each regulatory move the morning after it happens; the tracker pages hold the durable record."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: absoluteUrl("/ai-regulation/for-compliance-officers"),
      name: TITLE,
      description: DESCRIPTION,
      dateModified: updated,
      isPartOf: { "@id": `${absoluteUrl("/")}#website` },
      breadcrumb: breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "AI Regulation Tracker", path: "/ai-regulation" },
        { name: "For compliance officers", path: "/ai-regulation/for-compliance-officers" }
      ])
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
    }
  ];

  return (
    <TrackerShell
      eyebrow={<><Link href="/ai-regulation" style={{ color: "inherit", textDecoration: "none" }}>AI Regulation Tracker</Link> · Orientation</>}
      title={<>AI regulation, from where<br /><em>the compliance officer sits.</em></>}
      updated={`Last updated ${formatDate(updated)} · ${REGULATORS.length} authorities · ${DOCUMENTS.length} documents tracked`}
      ctaTitle="The brief your examiners can't surprise"
    >
      <JsonLd data={schema} />
      <p className="trk-answer">
        No single rulebook governs bank AI — {inForceCount} documents are in force across {REGULATORS.length}{" "}
        authorities, and what applies to you depends on charter, size and footprint. This page is the working
        orientation: the five documents to read first, the deadlines on your desk this quarter, the warnings
        your fraud and cyber teams should have seen, and the standing pages that keep each moving part current.
      </p>

      <Section label="Read these first">
        <h2 className="trk-h2-q">Which five documents should a compliance officer read first?</h2>
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>#</th><th>Document</th><th>Why it&apos;s first</th></tr></thead>
            <tbody>
              {firstReads.map((f, i) => (
                <tr key={f.slug}>
                  <td className="trk-td-nowrap trk-td-strong">{i + 1}</td>
                  <td className="trk-td-nowrap">
                    <Link href={documentPath(f.slug)} className="trk-td-strong">{f.doc!.shortName}</Link>
                    <br /><span style={{ color: "#9a9a9a", fontSize: "12px" }}>{getRegulator(f.doc!.authority)?.name}</span>
                  </td>
                  <td>{f.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section label="On your desk">
        <h2 className="trk-h2-q">What is due next?</h2>
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>Date</th><th>Authority</th><th>Deadline</th></tr></thead>
            <tbody>
              {nextThree.map((d, i) => (
                <tr key={`${d.date}-${i}`}>
                  <td className="trk-td-nowrap">{formatDate(d.date)}</td>
                  <td className="trk-td-nowrap"><Link href={`/ai-regulation/${d.authority.slug}`}>{d.authority.name}</Link></td>
                  <td>{d.docSlug ? <Link href={documentPath(d.docSlug)} className="trk-td-strong">{d.label}</Link> : <span className="trk-td-strong">{d.label}</span>} · {d.kind}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="trk-sub" style={{ marginTop: 10 }}>
          <Link href="/ai-regulation/compliance-checklist" style={{ color: "#1a3fcb" }}>The full checklist, quarter by quarter →</Link>
          {open.length > 0 && <>{" · "}{open.length} {open.length === 1 ? "consultation" : "consultations"} still open for comment</>}
        </p>
      </Section>

      <Section label="Forward to your fraud & cyber teams">
        <h2 className="trk-h2-q">Which warnings should risk teams have read?</h2>
        <div className="trk-table-wrap">
          <table className="trk-table">
            <tbody>
              {warnings.map((d) => (
                <tr key={d.slug}>
                  <td className="trk-td-nowrap">{formatDate(d.date)}</td>
                  <td><Link href={documentPath(d)} className="trk-td-strong">{d.shortName}</Link> — {firstSentence(d.answerFirst)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="trk-sub" style={{ marginTop: 10 }}>
          <Link href="/ai-regulation/regulator-warnings" style={{ color: "#1a3fcb" }}>Every formal warning, by theme →</Link>
        </p>
      </Section>

      <Section label="Map your systems">
        <h2 className="trk-h2-q">Which rules govern each AI system you run?</h2>
        <p className="trk-p">
          Credit scoring, AML monitoring, fraud models, chatbots, generative AI — each use case answers to a
          different set of documents, and the strictest rules follow the use case, not the technology. The{" "}
          <Link href="/ai-regulation/by-use-case" style={{ color: "#1a3fcb" }}>use-case matrix</Link> maps every
          system type to its governing documents across all {REGULATORS.length} authorities, with each
          document&apos;s current status.
        </p>
      </Section>

      <Section label="Common questions">
        {faq.map((f) => (
          <div key={f.q}>
            <h2 className="trk-faq-q">{f.q}</h2>
            <p className="trk-faq-a">{f.a}</p>
          </div>
        ))}
      </Section>
    </TrackerShell>
  );
}

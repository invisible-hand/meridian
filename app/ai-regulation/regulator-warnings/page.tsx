import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/seo";
import {
  STATUS_TAG,
  documentPath,
  effectiveStatus,
  firstSentence,
  formatDate,
  latestDocumentUpdate,
  warningDocuments,
  warningTheme,
  type WarningTheme
} from "@/lib/tracker";
import { getRegulator, type RegDocument } from "@/lib/regulators";
import { Section, TrackerShell } from "../shell";

const TITLE = "What Regulators Are Warning Banks About on AI — Fraud, Deepfakes, Cyber, Stability (2026)";
const DESCRIPTION =
  "Every formal AI warning regulators have issued to banks, in one place: FinCEN's deepfake alerts, the ECB's Dear-CEO letter on AI-enabled cyber threats, NY DFS industry letters, OCC and FDIC risk reports, and the FSB's financial-stability warnings — each linked to the primary source.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/ai-regulation/regulator-warnings" },
  openGraph: { type: "website", url: "/ai-regulation/regulator-warnings", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: "Regulators' AI Warnings to Banks", description: DESCRIPTION }
};

const THEMES: { key: WarningTheme; label: string; question: string; blurb: string }[] = [
  {
    key: "fraud",
    label: "AI-enabled fraud & deepfakes",
    question: "What have regulators warned banks about AI fraud and deepfakes?",
    blurb:
      "The most concrete warnings: criminals using generative AI to defeat identity verification, clone voices, forge documents and industrialize scams — with red flags banks are expected to detect and report."
  },
  {
    key: "cyber",
    label: "Cybersecurity & operational resilience",
    question: "What are regulators saying about AI-driven cyber risk to banks?",
    blurb:
      "Supervisors now treat AI as a force multiplier for attackers. The strongest signal yet: the ECB's first technology-focused Dear-CEO letter, requiring significant institutions to file AI-cyber action plans."
  },
  {
    key: "stability",
    label: "Financial stability & market conduct",
    question: "What systemic AI risks are authorities monitoring?",
    blurb:
      "Concentration in a few model and cloud providers, herding from common models, and AI-washing — claims about AI that the SEC has already brought enforcement over."
  }
];

export default function RegulatorWarningsPage() {
  const docs = warningDocuments();
  const updated = latestDocumentUpdate();
  const byTheme = new Map<WarningTheme, RegDocument[]>();
  for (const d of docs) {
    const t = warningTheme(d);
    byTheme.set(t, [...(byTheme.get(t) ?? []), d]);
  }
  const newest = docs[0];

  const faq = [
    {
      q: "What has FinCEN warned banks about deepfakes?",
      a: "FinCEN's November 2024 alert (FIN-2024-Alert004) warns that criminals are using generative AI to create deepfake identity documents and media that defeat bank onboarding and verification, lists red flags — inconsistencies between documents and live verification, re-used device fingerprints, synthetic photos — and tells banks to reference the alert in Suspicious Activity Reports. A July 2026 follow-up alert covers AI-assisted federal student-aid fraud schemes."
    },
    {
      q: "What is the ECB's 'Dear CEO' letter on AI?",
      a: "On July 7, 2026 the ECB sent letter SSM-2026-0301 — its first Dear-CEO letter devoted to a technology threat — warning every significant euro-area institution about AI-enabled cybersecurity risks: accelerated vulnerability exploitation, AI-enhanced phishing and deepfake-assisted intrusion. Each institution must submit a comprehensive action plan to its Joint Supervisory Team by October 31, 2026."
    },
    {
      q: "Is AI-enabled fraud a US supervisory priority?",
      a: "Yes. The OCC's Spring 2026 Semiannual Risk Perspective flags AI as amplifying fraud and the speed and sophistication of cyberattacks; the FDIC's 2024 Risk Review devotes a section to deepfakes, voice cloning and check fraud; the CFTC issued a customer advisory on AI scams; and New York DFS has issued three industry letters on AI cyber risk, including two in May 2026 on frontier-model threats."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      url: absoluteUrl("/ai-regulation/regulator-warnings"),
      name: TITLE,
      description: DESCRIPTION,
      dateModified: updated,
      isPartOf: { "@id": `${absoluteUrl("/")}#website` },
      breadcrumb: breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "AI Regulation Tracker", path: "/ai-regulation" },
        { name: "Regulator warnings", path: "/ai-regulation/regulator-warnings" }
      ]),
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: docs.length,
        itemListElement: docs.map((d, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: `${d.shortName}: ${d.title}`,
          url: absoluteUrl(documentPath(d))
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
      eyebrow={<><Link href="/ai-regulation" style={{ color: "inherit", textDecoration: "none" }}>AI Regulation Tracker</Link> · Warnings</>}
      title={<>What are regulators<br /><em>warning banks about?</em></>}
      updated={`Last updated ${formatDate(updated)} · ${docs.length} formal warnings tracked`}
      ctaTitle="Every new warning lands in the brief"
    >
      <JsonLd data={schema} />
      <p className="trk-answer">
        Regulators&apos; AI warnings to banks cluster in three areas: AI-enabled fraud — deepfake identity
        documents, voice cloning and industrialized scams (FinCEN, FDIC, OCC, CFTC); AI-driven cyber threats —
        capped by the ECB&apos;s July 2026 Dear-CEO letter requiring action plans from every significant
        institution by October 31, 2026 (with NY DFS and the UK authorities issuing parallel letters); and
        financial-stability risks from model and vendor concentration (FSB, FSOC, Bank of England).
        {newest ? ` The newest warning tracked here is ${newest.shortName} (${formatDate(newest.date)}).` : ""}
      </p>

      {THEMES.map((t) => {
        const rows = byTheme.get(t.key) ?? [];
        if (rows.length === 0) return null;
        return (
          <Section key={t.key} label={t.label}>
            <h2 className="trk-h2-q">{t.question}</h2>
            <p className="trk-sub">{t.blurb}</p>
            <div className="trk-table-wrap">
              <table className="trk-table">
                <thead><tr><th>Date</th><th>Authority</th><th>Warning</th><th>Status</th></tr></thead>
                <tbody>
                  {rows.map((d) => {
                    const reg = getRegulator(d.authority);
                    return (
                      <tr key={d.slug}>
                        <td className="trk-td-nowrap">{formatDate(d.date)}</td>
                        <td className="trk-td-nowrap"><Link href={`/ai-regulation/${d.authority}`}>{reg?.name ?? d.authority}</Link></td>
                        <td>
                          <Link href={documentPath(d)} className="trk-td-strong">{d.shortName}</Link>
                          {" — "}{firstSentence(d.answerFirst)}
                        </td>
                        <td className="trk-td-nowrap"><span className={STATUS_TAG[effectiveStatus(d)]}>{effectiveStatus(d)}</span></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Section>
        );
      })}

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
          <Link href="/ai-regulation/compliance-checklist">Compliance checklist →</Link>
          <Link href="/ai-regulation/deadlines">Deadlines →</Link>
          <Link href="/ai-regulation/documents">All documents →</Link>
          <Link href="/ai-regulation/for-compliance-officers">For compliance officers →</Link>
        </div>
      </Section>
    </TrackerShell>
  );
}

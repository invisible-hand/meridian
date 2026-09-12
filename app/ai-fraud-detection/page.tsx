import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/seo";
import { documentPath, documentsByAuthorityForUseCase, effectiveStatus, formatDate, STATUS_TAG } from "@/lib/tracker";
import { BANK_COUNT } from "@/lib/banks";
import { FRAUD_FAQ, FRAUD_SECTIONS, FRAUD_TIMELINE, HUBS_UPDATED } from "@/lib/hubs";
import { Coverage } from "../ai-regulation/coverage";
import { Section, TrackerShell } from "../ai-regulation/shell";
import { BankUseCaseTable, HubTimeline, PillarSection, banksWithUseCase } from "../hub-parts";

const PATH = "/ai-fraud-detection";
const TITLE = "AI Fraud Detection in Banking: Rules and Practice (2026)";
const DESCRIPTION =
  "AI fraud detection in banking: what regulators are warning about, the rules a bank's own fraud models run under, the public results, and which of the 100 largest US banks use it.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { type: "article", url: PATH, title: TITLE, description: DESCRIPTION, modifiedTime: HUBS_UPDATED },
  twitter: { card: "summary_large_image", title: "AI fraud detection in banking: warnings, rules, practice", description: DESCRIPTION }
};

export const revalidate = 3600;

const matcher = (text: string) => /\b(fraud|scam|deepfake|synthetic identit|account takeover|authorized push payment)\w*/i.test(text);

export default function AiFraudDetectionPage() {
  const url = absoluteUrl(PATH);
  const byAuthority = documentsByAuthorityForUseCase("fraud");
  const banks = banksWithUseCase("fraud");
  const inProd = banks.filter((b) => b.items.some((u) => u.status === "In production")).length;
  const schema: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      url,
      headline: TITLE,
      description: DESCRIPTION,
      datePublished: "2026-09-12",
      dateModified: HUBS_UPDATED,
      inLanguage: "en-US",
      isAccessibleForFree: true,
      articleSection: ["Banking", "Artificial Intelligence", "Fraud", "Regulation"],
      author: { "@id": `${absoluteUrl("/")}#organization` },
      publisher: { "@id": `${absoluteUrl("/")}#organization` },
      breadcrumb: breadcrumbSchema([{ name: "Home", path: "/" }, { name: "AI Regulation Tracker", path: "/ai-regulation" }, { name: "AI fraud detection", path: PATH }])
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [...FRAUD_SECTIONS.map((p) => ({ q: p.question, a: p.answer })), ...FRAUD_FAQ].map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
    }
  ];

  return (
    <TrackerShell
      eyebrow={<>AI regulation tracker · Topic hub</>}
      title={<>AI fraud detection in banking: <em>the warnings, the rules, the practice.</em></>}
      updated={`Last updated ${formatDate(HUBS_UPDATED)} · ${banks.length} of the ${BANK_COUNT} largest US banks with a recorded AI fraud use case`}
      path={PATH}
      ctaTitle="Every new fraud alert and every bank's fraud move, the morning after."
    >
      <JsonLd data={schema} />
      <p className="trk-answer">
        Fraud is where AI cuts both ways for a bank, and where regulators have been most specific. On the threat side, FinCEN, the FDIC, New York&apos;s DFS, the OCC and the ECB have all put in writing that generative AI now produces deepfake documents, voices and video that defeat identity checks and lowers the cost of attacks. On the defence side, the rules mostly encourage AI: the EU AI Act exempts fraud detection from its high-risk credit category, US agencies have encouraged AI in monitoring since 2018, and Treasury credits machine learning with $1 billion of its own fraud recoveries in a year. {banks.length} of the {BANK_COUNT} largest US banks profiled on this site record an AI fraud or scam-defence use case, {inProd} of them in production. What still binds: model validation in proportion to materiality, adverse-action duties when a fraud score declines a customer, and governance of the data the models learn from.
      </p>

      {FRAUD_SECTIONS.map((p) => <PillarSection key={p.id} p={p} />)}

      <Section label="By authority">
        <h2 className="trk-h2-q">Which fraud-related documents has each authority published?</h2>
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>Authority</th><th className="trk-td-min">Fraud documents in the tracker</th></tr></thead>
            <tbody>
              {byAuthority.map(({ authority, docs }) => (
                <tr key={authority.slug}>
                  <td className="trk-td-nowrap"><Link href={`/ai-regulation/${authority.slug}`} className="trk-td-strong">{authority.name}</Link></td>
                  <td className="trk-td-min">
                    {docs.map((d, i) => (
                      <span key={d.slug}>{i > 0 && " · "}<Link href={documentPath(d)}>{d.shortName}</Link> <span className={STATUS_TAG[effectiveStatus(d)]}>{effectiveStatus(d)}</span></span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <HubTimeline events={FRAUD_TIMELINE} />

      <BankUseCaseTable
        useCase="fraud"
        label="At the banks"
        question={`Which of the ${BANK_COUNT} largest US banks use AI against fraud?`}
        intro={`{n} of the {total} bank pages on this site record an AI fraud, scam or payment-defence use case. Each links to the bank's page, where the claim is sourced.`}
      />

      <Section label="Common questions">
        {FRAUD_FAQ.map((f) => (
          <div key={f.q}>
            <h2 className="trk-faq-q">{f.q}</h2>
            <p className="trk-faq-a">{f.a}</p>
          </div>
        ))}
      </Section>

      <Coverage matches={matcher} label="Fraud in the daily brief" />

      <Section label="Navigate">
        <div className="trk-related">
          <Link href="/ai-regulation/by-use-case#fraud">All fraud documents by use case →</Link>
          <Link href="/ai-regulation/regulator-warnings">Regulator warnings →</Link>
          <Link href="/ai-governance">AI governance →</Link>
          <Link href="/ai-regulation/fincen">FinCEN →</Link>
          <Link href="/banks">The {BANK_COUNT} banks →</Link>
        </div>
      </Section>
    </TrackerShell>
  );
}

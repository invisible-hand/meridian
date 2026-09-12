import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/seo";
import { REGULATORS } from "@/lib/regulators";
import { documentPath, documentsByAuthorityForUseCase, effectiveStatus, formatDate, STATUS_TAG } from "@/lib/tracker";
import { BANK_COUNT } from "@/lib/banks";
import { GOVERNANCE_FAQ, GOVERNANCE_PILLARS, GOVERNANCE_TIMELINE, HUBS_UPDATED } from "@/lib/hubs";
import { Coverage } from "../ai-regulation/coverage";
import { Section, TrackerShell } from "../ai-regulation/shell";
import { BankUseCaseTable, HubTimeline, PillarSection, banksWithUseCase } from "../hub-parts";

const PATH = "/ai-governance";
const TITLE = "AI Governance in Banking: What Regulators Require (2026)";
const DESCRIPTION =
  "AI governance for banks in six pillars: board accountability, model risk, data, third parties, human oversight and the voluntary frameworks, each mapped to the rule that asks for it.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { type: "article", url: PATH, title: TITLE, description: DESCRIPTION, modifiedTime: HUBS_UPDATED },
  twitter: { card: "summary_large_image", title: "AI governance in banking, mapped to the rules", description: DESCRIPTION }
};

export const revalidate = 3600;

const matcher = (text: string) => /\b(ai governance|model risk|governance framework|chief ai officer|ai policy|ai committee|responsible ai)\b/i.test(text);

export default function AiGovernancePage() {
  const url = absoluteUrl(PATH);
  const byAuthority = documentsByAuthorityForUseCase("governance-general");
  const banks = banksWithUseCase("governance-general");
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
      articleSection: ["Banking", "Artificial Intelligence", "Governance", "Regulation"],
      author: { "@id": `${absoluteUrl("/")}#organization` },
      publisher: { "@id": `${absoluteUrl("/")}#organization` },
      breadcrumb: breadcrumbSchema([{ name: "Home", path: "/" }, { name: "AI Regulation Tracker", path: "/ai-regulation" }, { name: "AI governance", path: PATH }])
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [...GOVERNANCE_PILLARS.map((p) => ({ q: p.question, a: p.answer })), ...GOVERNANCE_FAQ].map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
    }
  ];

  return (
    <TrackerShell
      eyebrow={<>AI regulation tracker · Topic hub</>}
      title={<>AI governance in banking: <em>what regulators require</em>, pillar by pillar.</>}
      updated={`Last updated ${formatDate(HUBS_UPDATED)} · ${REGULATORS.length} authorities · every row linked to its document`}
      path={PATH}
      ctaTitle="When a regulator changes what governance means, you'll read it the next morning."
    >
      <JsonLd data={schema} />
      <p className="trk-answer">
        AI governance in a bank is not one rule but six obligations assembled from different places: the board owns an inventory of what is running; predictive models are validated under model-risk guidance while generative and agentic AI are governed through broader enterprise risk; the data behind every model is owned, traceable and complete; bought models and cloud providers sit under third-party risk management; a person can explain and override any decision that touches a customer&apos;s credit; and voluntary frameworks from NIST and Treasury fill the gaps the rules leave. Each pillar below states the expectation in a few sentences and maps it to the documents that ask for it, across the {REGULATORS.length} authorities this tracker follows.
      </p>

      {GOVERNANCE_PILLARS.map((p) => <PillarSection key={p.id} p={p} />)}

      <Section label="By authority">
        <h2 className="trk-h2-q">Which governance documents has each authority published?</h2>
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>Authority</th><th className="trk-td-min">Governance documents in the tracker</th></tr></thead>
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

      <HubTimeline events={GOVERNANCE_TIMELINE} />

      <BankUseCaseTable
        useCase="governance-general"
        label="At the banks"
        question={`Which of the ${BANK_COUNT} largest US banks have disclosed AI governance arrangements?`}
        intro={`{n} of the {total} bank pages on this site record a governance-related AI activity, from AI committees and chief AI officers to training programmes and model-data controls. Each links to the bank's page, where the claim is sourced.`}
      />

      <Section label="Common questions">
        {GOVERNANCE_FAQ.map((f) => (
          <div key={f.q}>
            <h2 className="trk-faq-q">{f.q}</h2>
            <p className="trk-faq-a">{f.a}</p>
          </div>
        ))}
      </Section>

      <Coverage matches={matcher} label="AI governance in the daily brief" />

      <Section label="Navigate">
        <div className="trk-related">
          <Link href="/ai-regulation/by-use-case#governance-general">All governance documents by use case →</Link>
          <Link href="/ai-fraud-detection">AI fraud detection →</Link>
          <Link href="/agentic-banking/control-plane">The control plane for AI agents →</Link>
          <Link href="/ai-regulation/for-bank-executives">For bank executives →</Link>
          <Link href="/ai-regulation/compliance-checklist">Compliance checklist →</Link>
          <Link href="/banks">The {BANK_COUNT} banks ({banks.length} with governance records) →</Link>
        </div>
      </Section>
    </TrackerShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/seo";
import { formatDate } from "@/lib/tracker";
import { BANKS, BANKS_UPDATED, BANK_SOURCE_COUNT, FED_LBR, bankPath, formatAssets } from "@/lib/banks";
import { BankShell, Section } from "./shell";

const PATH = "/banks";
const TITLE = "AI Strategy of the 10 Largest US Banks (2026) — Sourced, Bank by Bank";
const DESCRIPTION =
  "How JPMorgan Chase, Bank of America, Citigroup, Wells Fargo, Goldman Sachs, Morgan Stanley, U.S. Bancorp, Capital One, PNC and Truist are deploying AI: platforms, agents, budgets, headcount, leadership and regulators — every claim linked to a primary or tier-1 source.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { type: "website", url: PATH, title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: "AI strategy of the 10 largest US banks", description: DESCRIPTION }
};

export const revalidate = 86400;

export default function BanksHubPage() {
  const updated = BANKS.map((b) => b.lastUpdated).concat(BANKS_UPDATED).sort().at(-1)!;
  const faq = [
    {
      q: "Which US bank is furthest ahead on AI?",
      a: "By the most-cited independent measure, Evident's AI index of the 50 largest banks, JPMorgan Chase has ranked first in every edition and Capital One second in the last three. By disclosed scale, JPMorgan leads on budget (nearly $20 billion of technology spend), platform reach (LLM Suite for about 250,000 employees) and disclosed workforce effect (30–40% headcount cuts in some units). Bank of America leads on customer-facing volume (2 million Erica interactions a day) and Citigroup on earnings-deck disclosure (80%-plus adoption, 42 million interactions)."
    },
    {
      q: "Do the big banks build their own AI models or buy them?",
      a: "Mostly they build platforms and rent models: JPMorgan's LLM Suite and Goldman's GS AI Platform wrap third-party models; Morgan Stanley and Wells Fargo built on OpenAI and Google Cloud respectively. Capital One is the exception on the research side, training and customising its own models, and PNC announced in June 2026 that it is building an 'AI factory' with its own GPUs and language models to reduce dependence on token pricing."
    },
    {
      q: "How is this section sourced?",
      a: `Every dated statement on a bank page cites a numbered source — the bank's own releases and filings, SEC documents, or reporting by CNBC, Reuters, Bloomberg, the Financial Times, the Wall Street Journal and American Banker. ${BANK_SOURCE_COUNT} sources across the ten pages; secondary blogs and aggregators are excluded. Asset figures are the lead bank's consolidated assets from the Federal Reserve's Large Commercial Banks release as of ${formatDate(FED_LBR.asOf)}.`
    }
  ];
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      url: absoluteUrl(PATH),
      name: TITLE,
      description: DESCRIPTION,
      dateModified: updated,
      isPartOf: { "@id": `${absoluteUrl("/")}#website` },
      breadcrumb: breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Banks", path: PATH }]),
      mainEntity: {
        "@type": "ItemList",
        itemListElement: BANKS.map((b, i) => ({ "@type": "ListItem", position: i + 1, url: absoluteUrl(bankPath(b)), name: `${b.name} AI strategy` }))
      }
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }
  ];

  return (
    <BankShell
      eyebrow="Banks · AI strategy, bank by bank"
      title={<>What the ten largest US banks<br /><em>are actually doing with AI.</em></>}
      updated={`Last updated ${formatDate(updated)} · 10 banks · ${BANK_SOURCE_COUNT} sources · assets as of ${formatDate(FED_LBR.asOf)}`}
    >
      <JsonLd data={schema} />
      <p className="trk-answer">
        The ten largest US bank holding companies have said a great deal about AI — on earnings calls, in shareholder letters,
        in engineering posts and to reporters — but almost never in one place. These pages assemble the public record for each
        bank: the platform it built, the agents it runs, the budget and headcount effects it has disclosed, who leads the
        program, which regulators it answers to, and what the record suggests. Every dated claim links to its source; nothing
        here comes from non-public information.
      </p>

      <Section label="The ten">
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>#</th><th>Bank</th><th>Lead-bank assets</th><th className="trk-td-min">AI posture</th><th>Flagship</th></tr></thead>
            <tbody>
              {BANKS.map((b, i) => (
                <tr key={b.slug}>
                  <td className="trk-td-nowrap trk-td-strong">{i + 1}</td>
                  <td className="trk-td-mid">
                    <Link href={bankPath(b)} className="trk-td-strong">{b.name}</Link>
                    <br /><span style={{ color: "#9a9a9a", fontSize: "12px" }}>{b.ticker} · {b.hq}</span>
                  </td>
                  <td className="trk-td-nowrap">{formatAssets(b.assetsUsdMillions)}</td>
                  <td className="trk-td-min">{b.posture}</td>
                  <td className="trk-td-mid">{b.platform?.name ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="trk-sub" style={{ marginTop: 10 }}>
          Assets are the lead bank&apos;s consolidated assets in the Federal Reserve&apos;s{" "}
          <a href={FED_LBR.url} target="_blank" rel="noopener noreferrer" style={{ color: "#1a3fcb" }}>Large Commercial Banks</a> release;
          holding-company totals are larger for the broker-dealer groups (Goldman Sachs, Morgan Stanley).
        </p>
      </Section>

      <Section label="Bank pages">
        <div className="bk-grid">
          {BANKS.map((b, i) => (
            <div className="bk-card" key={b.slug}>
              <p className="bk-card-n">{String(i + 1).padStart(2, "0")} · {b.ticker}</p>
              <h3><Link href={bankPath(b)}>{b.name}</Link></h3>
              <p>{b.keyPoints[0]}</p>
              <span className="bk-card-meta">{b.timeline.length} dated moves · {b.sources.length} sources · updated {formatDate(b.lastUpdated).toLowerCase()}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Common questions">
        {faq.map((f) => (
          <div key={f.q}>
            <h2 className="trk-faq-q">{f.q}</h2>
            <p className="trk-faq-a">{f.a}</p>
          </div>
        ))}
      </Section>

      <Section label="Also on this site">
        <div className="trk-related">
          <Link href="/ai-regulation">AI Regulation Tracker →</Link>
          <Link href="/agentic-banking">AI agents: the operating model →</Link>
          <Link href="/ai-regulation/for-bank-executives">For bank executives →</Link>
          <Link href="/ai-regulation/by-use-case">Rules by use case →</Link>
        </div>
      </Section>
    </BankShell>
  );
}

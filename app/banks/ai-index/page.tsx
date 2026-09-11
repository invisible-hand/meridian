import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/seo";
import { formatDate } from "@/lib/tracker";
import { BANKS_UPDATED, BANK_COUNT, BANK_SOURCE_COUNT, bankPath, formatAssets } from "@/lib/banks";
import { INDEX_MAX, INDEX_SINCE, INDEX_WEIGHTS, buildIndex } from "@/lib/bank-index";
import { BankShell, Section } from "../shell";

const PATH = "/banks/ai-index";
const TITLE = `AI Banks Ranked: The ${BANK_COUNT} Largest US Banks (2026)`;
const DESCRIPTION =
  `The ${BANK_COUNT} largest US banks ranked by what each has put on the record about AI: platforms, use cases in production, named leaders, disclosed numbers and recent moves.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { type: "article", url: PATH, title: TITLE, description: DESCRIPTION, modifiedTime: BANKS_UPDATED },
  twitter: { card: "summary_large_image", title: `AI banks, ranked: the ${BANK_COUNT} largest in the US`, description: DESCRIPTION }
};

export const revalidate = 86400;

export default function BankIndexPage() {
  const rows = buildIndex();
  const top = rows.slice(0, 10);
  const undisclosed = rows.filter((r) => !r.disclosed).length;
  const withPlatform = rows.filter((r) => r.platform).length;

  const faq = [
    {
      q: "Which US banks are furthest ahead on AI?",
      a: `By the depth of the public record, the top ten are ${top.map((r) => r.bank.shortName).join(", ")}. Each has named an AI platform, described several use cases, named the people running the programme, disclosed numbers about it and made a run of dated moves in the last twelve months. ${top[0].bank.name} leads with ${top[0].score} of ${INDEX_MAX} points.`
    },
    {
      q: "What does this ranking measure?",
      a: `Disclosure, not capability. Every point comes from something the bank or a tier-1 source has put on the record and that the bank's page on this site cites. Out of ${INDEX_MAX}: up to ${INDEX_WEIGHTS.sources.cap} for the number of sources the page rests on, up to ${INDEX_WEIGHTS.moves12m.cap} for dated moves since ${formatDate(INDEX_SINCE)}, up to ${INDEX_WEIGHTS.useCases.cap} for the breadth of use cases, ${INDEX_WEIGHTS.platform} for a named platform or programme, up to ${INDEX_WEIGHTS.leaders.cap} for named AI leaders and up to ${INDEX_WEIGHTS.numbers.cap} for disclosed numbers. A bank whose page records that it has disclosed no AI programme is capped at ${INDEX_WEIGHTS.undisclosedCap}. A bank that runs a large programme and says little scores low.`
    },
    {
      q: "How many of the 100 largest US banks have disclosed an AI programme?",
      a: `${BANK_COUNT - undisclosed} of ${BANK_COUNT}, and ${withPlatform} of those have named the platform or programme. ${undisclosed} of the ${BANK_COUNT} have not disclosed an AI programme, leader, vendor or budget; their pages record what is known instead, usually customer education, fraud guidance or a core-banking conversion. The details, with sources, are on each bank's page.`
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${absoluteUrl(PATH)}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(PATH) },
      headline: TITLE,
      description: DESCRIPTION,
      datePublished: "2026-09-11",
      dateModified: BANKS_UPDATED,
      inLanguage: "en-US",
      isAccessibleForFree: true,
      author: { "@id": `${absoluteUrl("/")}#organization` },
      publisher: { "@id": `${absoluteUrl("/")}#organization` },
      breadcrumb: breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Banks", path: "/banks" }, { name: "AI index", path: PATH }])
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: TITLE,
      numberOfItems: rows.length,
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      itemListElement: rows.map((r) => ({ "@type": "ListItem", position: r.rank, url: absoluteUrl(bankPath(r.bank)), name: r.bank.name }))
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }
  ];

  return (
    <BankShell
      eyebrow={<>Banks · <Link href="/banks">the {BANK_COUNT} largest</Link> · AI disclosure index</>}
      title={<>Which US banks are <em>furthest along</em> on AI? The {BANK_COUNT} largest, ranked by what they have put on the record.</>}
      updated={`Scored from the bank pages as of ${formatDate(BANKS_UPDATED)} · ${BANK_SOURCE_COUNT} sources`}
      path={PATH}
      ctaTitle="When any of these banks moves on AI, you'll read it the next morning."
    >
      <JsonLd data={schema} />

      <p className="trk-answer">
        {top[0].bank.name} leads the {BANK_COUNT} largest US banks on the depth of its public AI record with {top[0].score} of {INDEX_MAX} points, followed by {top.slice(1, 5).map((r) => r.bank.shortName).join(", ")} and {top[5].bank.shortName}. {withPlatform} of the {BANK_COUNT} have named an AI platform or programme; {undisclosed} have not disclosed an AI programme, leader, vendor or budget at all. The index counts only what a bank or a tier-1 source has put on the record and the bank&apos;s page on this site cites; it measures disclosure, not capability.
      </p>

      <Section label="The ranking" id="ranking">
        <h2 className="trk-h2-q">How do the {BANK_COUNT} largest US banks rank on disclosed AI activity?</h2>
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Bank</th>
                <th className="trk-td-nowrap">Assets</th>
                <th className="trk-td-nowrap">Score / {INDEX_MAX}</th>
                <th>Programme</th>
                <th>Platform</th>
                <th className="trk-td-nowrap">Use cases</th>
                <th className="trk-td-nowrap">In production</th>
                <th>Leaders</th>
                <th>Numbers</th>
                <th className="trk-td-nowrap">Moves, 12 mo</th>
                <th>Sources</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.bank.slug}>
                  <td className="trk-td-nowrap">{r.rank}</td>
                  <td><Link href={bankPath(r.bank)} className="trk-td-strong">{r.bank.shortName}</Link></td>
                  <td className="trk-td-nowrap">{formatAssets(r.bank.assetsUsdMillions)}</td>
                  <td className="trk-td-nowrap trk-td-strong">{r.score}</td>
                  <td className="trk-td-nowrap">{r.disclosed ? "disclosed" : "not disclosed"}</td>
                  <td>{r.platform ? "named" : "—"}</td>
                  <td>{r.useCases}</td>
                  <td>{r.inProduction}</td>
                  <td>{r.leaders}</td>
                  <td>{r.numbers}</td>
                  <td>{r.moves12m}</td>
                  <td>{r.sources}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section label="Method" id="method">
        <h2 className="trk-h2-q">How is the AI disclosure score calculated?</h2>
        <p className="trk-p">
          Every point comes from a sourced fact on the bank&apos;s page, and the components with real spread across banks carry the weight. Out of {INDEX_MAX}: the number of primary and tier-1 sources the page rests on, {INDEX_WEIGHTS.sources.each} each up to {INDEX_WEIGHTS.sources.cap}; dated moves since {formatDate(INDEX_SINCE)}, up to {INDEX_WEIGHTS.moves12m.cap}; breadth of use cases, {INDEX_WEIGHTS.useCases.each} each up to {INDEX_WEIGHTS.useCases.cap}; a named AI platform or programme, {INDEX_WEIGHTS.platform}; named AI or technology leaders, {INDEX_WEIGHTS.leaders.each} each up to {INDEX_WEIGHTS.leaders.cap}; disclosed numbers (spend, headcount, volumes, adoption), up to {INDEX_WEIGHTS.numbers.cap}. A bank whose page records that it has not disclosed an AI programme, leader, vendor or budget is capped at {INDEX_WEIGHTS.undisclosedCap}. Ties are broken by assets.
        </p>
        <p className="trk-p">
          The score rewards a bank for saying what it does, which is what the pages exist to record. It does not attempt to judge how well a programme works, and it under-rates banks that build quietly. Use it as a map of where the public record is deep, then read the page. The ranking recomputes whenever a bank page is updated; the last update was {formatDate(BANKS_UPDATED)}.
        </p>
      </Section>

      <Section label="Common questions" id="faq">
        {faq.map((f) => (
          <div key={f.q}>
            <h2 className="trk-faq-q">{f.q}</h2>
            <p className="trk-faq-a">{f.a}</p>
          </div>
        ))}
      </Section>

      <Section label="Also on this site" id="also">
        <div className="trk-related">
          <Link href="/banks">All {BANK_COUNT} bank pages →</Link>
          <Link href="/ai-regulation">AI regulation tracker →</Link>
          <Link href="/agentic-banking">AI agents in banking →</Link>
          <Link href="/ai-regulation/for-bank-executives">For bank executives →</Link>
        </div>
      </Section>
    </BankShell>
  );
}

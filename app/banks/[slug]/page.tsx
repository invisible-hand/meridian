import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/seo";
import { getRegulator } from "@/lib/regulators";
import { USE_CASE_LABELS, documentPath, formatDate, getDocument } from "@/lib/tracker";
import { BANKS, BANKS_PUBLISHED, FED_LBR, bankPath, formatAssets, getBank, type Bank } from "@/lib/banks";
import { Coverage } from "../../ai-regulation/coverage";
import { BankShell, Section } from "../shell";

export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return BANKS.map((b) => ({ slug: b.slug }));
}

function titleFor(b: Bank) {
  return `${b.name} AI Strategy (2026): Platforms, Agents, Budget, Headcount and Regulators`;
}
function descriptionFor(b: Bank) {
  return `${b.name}'s AI strategy from the public record: ${b.platform ? `${b.platform.name}, ` : ""}${b.timeline.length} dated moves, disclosed numbers, leadership, the regulators it answers to and what the record suggests — ${b.sources.length} primary and tier-1 sources.`;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const b = getBank(slug);
  if (!b) return {};
  const path = bankPath(b);
  return {
    title: titleFor(b),
    description: descriptionFor(b),
    alternates: { canonical: path },
    openGraph: { type: "article", url: path, title: titleFor(b), description: descriptionFor(b) },
    twitter: { card: "summary_large_image", title: `${b.name} AI strategy`, description: descriptionFor(b) }
  };
}

const blue = { color: "#1a3fcb" } as const;

export default async function BankPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = getBank(slug);
  if (!b) notFound();
  const path = bankPath(b);
  const idx = new Map(b.sources.map((s, i) => [s.id, i + 1]));
  const Cite = ({ ids }: { ids: string[] }) => (
    <>
      {ids.map((id) => (
        <a key={id} href={`#src-${idx.get(id)}`} className="bk-cite" title={b.sources[idx.get(id)! - 1]?.title}>[{idx.get(id)}]</a>
      ))}
    </>
  );
  const timeline = [...b.timeline].sort((x, y) => (x.date < y.date ? 1 : -1));
  const nameRe = new RegExp(`\\b(${[b.name, b.shortName].map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`, "i");

  const faqEntities = b.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }));
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${absoluteUrl(path)}#article`,
      headline: titleFor(b),
      description: descriptionFor(b),
      url: absoluteUrl(path),
      datePublished: BANKS_PUBLISHED,
      dateModified: b.lastUpdated,
      author: { "@type": "Organization", name: "BankingNewsAI", url: absoluteUrl("/") },
      publisher: { "@type": "Organization", name: "BankingNewsAI", url: absoluteUrl("/") },
      isPartOf: { "@id": `${absoluteUrl("/")}#website` },
      about: { "@type": "Organization", name: b.name, tickerSymbol: b.ticker },
      mainEntityOfPage: absoluteUrl(path),
      citation: b.sources.map((s) => ({ "@type": "CreativeWork", name: s.title, url: s.url, publisher: s.publisher, datePublished: s.date }))
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: absoluteUrl(path),
      name: titleFor(b),
      dateModified: b.lastUpdated,
      breadcrumb: breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Banks", path: "/banks" }, { name: b.name, path }])
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqEntities }
  ];

  return (
    <BankShell
      eyebrow={<><Link href="/banks" style={{ color: "inherit", textDecoration: "none" }}>Banks</Link> · {b.ticker} · Fed rank #{b.fedRank}</>}
      title={<>{b.name}:<br /><em>the AI strategy, sourced.</em></>}
      updated={`Last updated ${formatDate(b.lastUpdated)} · ${b.timeline.length} dated moves · ${b.sources.length} sources`}
      ctaTitle={`When ${b.shortName} moves on AI, you'll read it here first.`}
    >
      <JsonLd data={schema} />
      <p className="bk-posture">{b.posture}</p>
      <p className="trk-answer">{b.answerFirst}</p>

      <Section label="At a glance">
        <div className="bk-facts">
          <div className="bk-fact"><p className="bk-fact-k">Lead bank</p><p className="bk-fact-v">{b.leadBank}</p></div>
          <div className="bk-fact"><p className="bk-fact-k">Assets (lead bank, {formatDate(FED_LBR.asOf)})</p><p className="bk-fact-v">{formatAssets(b.assetsUsdMillions)}</p></div>
          <div className="bk-fact"><p className="bk-fact-k">Charter</p><p className="bk-fact-v">{b.charter}</p></div>
          <div className="bk-fact"><p className="bk-fact-k">Headquarters</p><p className="bk-fact-v">{b.hq}</p></div>
          {b.platform && <div className="bk-fact"><p className="bk-fact-k">Flagship platform</p><p className="bk-fact-v">{b.platform.name}</p></div>}
          <div className="bk-fact"><p className="bk-fact-k">AI leadership</p><p className="bk-fact-v">{b.leadership.map((l) => l.name).join(" · ")}</p></div>
        </div>
        <ul className="trk-list" style={{ marginTop: 22 }}>
          {b.keyPoints.map((k) => <li key={k.slice(0, 40)}>{k}</li>)}
        </ul>
      </Section>

      {b.platform && (
        <Section label="The platform">
          <h2 className="trk-h2-q">What is {b.platform.name}?</h2>
          <p className="trk-p">{b.platform.detail}<Cite ids={b.platform.sources} /></p>
        </Section>
      )}

      <Section label="Timeline">
        <h2 className="trk-h2-q">What has {b.shortName} done on AI, and when?</h2>
        <ul className="bk-timeline">
          {timeline.map((e) => (
            <li key={`${e.date}-${e.title}`}>
              <span className="bk-tl-date">{formatDate(e.date)}</span>
              <div>
                <p className="bk-tl-title">{e.title}<Cite ids={e.sources} /></p>
                <p className="bk-tl-detail">{e.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Where AI runs">
        <h2 className="trk-h2-q">Where does {b.shortName} use AI today?</h2>
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>System</th><th className="trk-td-min">What it does</th><th>Status</th><th>Use case</th></tr></thead>
            <tbody>
              {b.useCases.map((u) => (
                <tr key={u.name}>
                  <td className="trk-td-mid trk-td-strong">{u.name}<Cite ids={u.sources} /></td>
                  <td className="trk-td-min">{u.detail}</td>
                  <td className="trk-td-nowrap">{u.status}</td>
                  <td className="trk-td-nowrap"><Link href={`/ai-regulation/by-use-case#${u.useCase}`}>{USE_CASE_LABELS[u.useCase].label}</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="trk-sub" style={{ marginTop: 10 }}>
          Use-case links open the tracker&apos;s <Link href="/ai-regulation/by-use-case" style={blue}>rules-by-use-case matrix</Link>: which documents govern each system type.
        </p>
      </Section>

      <Section label="The numbers">
        <h2 className="trk-h2-q">What has {b.shortName} disclosed in numbers?</h2>
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>Metric</th><th className="trk-td-min">Value</th><th>As of</th></tr></thead>
            <tbody>
              {b.numbers.map((n) => (
                <tr key={n.label}>
                  <td className="trk-td-mid trk-td-strong">{n.label}</td>
                  <td className="trk-td-min">{n.value}<Cite ids={n.sources} /></td>
                  <td className="trk-td-nowrap">{formatDate(n.asOf)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section label="In their words">
        {b.quotes.map((q) => (
          <blockquote className="bk-quote" key={q.quote.slice(0, 40)}>
            <p>“{q.quote}”<Cite ids={q.sources} /></p>
            <cite>{q.who} · {q.role} · {formatDate(q.date)}</cite>
          </blockquote>
        ))}
      </Section>

      <Section label="Who leads it">
        <div className="trk-table-wrap">
          <table className="trk-table">
            <tbody>
              {b.leadership.map((l) => (
                <tr key={l.name}><td className="trk-td-mid trk-td-strong">{l.name}</td><td className="trk-td-min">{l.role}<Cite ids={l.sources} /></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section label="Regulators">
        <h2 className="trk-h2-q">Which regulators govern {b.shortName}&apos;s AI?</h2>
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>Authority</th><th className="trk-td-min">Why it matters here</th><th>Documents</th></tr></thead>
            <tbody>
              {b.regulatory.map((r) => {
                const reg = getRegulator(r.authority);
                return (
                  <tr key={r.authority}>
                    <td className="trk-td-nowrap">{reg ? <Link href={`/ai-regulation/${reg.slug}`} className="trk-td-strong">{reg.name}</Link> : r.authority}</td>
                    <td className="trk-td-min">{r.why}</td>
                    <td className="trk-td-mid">
                      {r.docSlugs.map((s) => { const d = getDocument(s); return d ? <span key={s}><Link href={documentPath(d)}>{d.shortName}</Link><br /></span> : null; })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Section>

      <Section label="What the record suggests">
        <h2 className="trk-h2-q">What does the public record suggest about {b.shortName}&apos;s AI strategy?</h2>
        <p className="trk-sub" style={{ marginBottom: 14 }}>Analysis by BankingNewsAI from the sources cited on this page. Observations, not advice.</p>
        <div className="bk-grid">
          {b.suggestions.map((s, i) => (
            <div className="bk-card" key={s.title}>
              <p className="bk-card-n">{String(i + 1).padStart(2, "0")}</p>
              <h3>{s.title}</h3>
              <p>{s.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Coverage matches={(t) => nameRe.test(t)} label={`${b.shortName} in the daily brief`} />

      <Section label="Common questions">
        {b.faq.map((f) => (
          <div key={f.q}>
            <h2 className="trk-faq-q">{f.q}</h2>
            <p className="trk-faq-a">{f.a}</p>
          </div>
        ))}
      </Section>

      <Section label="Sources">
        <ol className="bk-sources">
          {b.sources.map((s, i) => (
            <li key={s.id} id={`src-${i + 1}`}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a>
              <br /><span className="bk-src-meta">{s.publisher} · {formatDate(s.date)}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section label="Other banks">
        <div className="trk-related">
          {BANKS.filter((o) => o.slug !== b.slug).map((o) => <Link key={o.slug} href={bankPath(o)}>{o.shortName} →</Link>)}
          <Link href="/banks">All ten →</Link>
        </div>
      </Section>
    </BankShell>
  );
}

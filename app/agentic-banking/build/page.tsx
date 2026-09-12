import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/seo";
import { USE_CASES } from "@/lib/regulators";
import { formatDate } from "@/lib/tracker";
import { BANK_COUNT } from "@/lib/banks";
import { BUILD_FAQ, BUILD_UPDATED, EVAL_TYPES, PATTERNS, PRIMITIVES, ROUTES, SHAPES, USE_CASE_BRIEFS } from "@/lib/build";
import { Section } from "../../ai-regulation/shell";
import { AgentShell } from "../shell";
import { buildCss } from "./styles";
import { DecisionPath } from "./figures";
import { BuildWizard } from "./wizard";
import { buildLookups } from "./lookups";

const PATH = "/agentic-banking/build";
const TITLE = "The Build Map: Designing AI Systems Inside a Bank";
const DESCRIPTION =
  "Answer ten questions and get a design brief: pattern, architecture, controls, the rules that apply, evals, human gates and the questions an examiner will ask. Vendor-neutral.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { type: "article", url: PATH, title: TITLE, description: DESCRIPTION, modifiedTime: BUILD_UPDATED },
  twitter: { card: "summary_large_image", title: "The build map for AI in banks", description: DESCRIPTION }
};

export const revalidate = 3600;

export default function BuildPage() {
  const url = absoluteUrl(PATH);
  const lookups = buildLookups();
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
      dateModified: BUILD_UPDATED,
      inLanguage: "en-US",
      isAccessibleForFree: true,
      articleSection: ["Banking", "Artificial Intelligence", "Architecture", "Regulation"],
      author: { "@id": `${absoluteUrl("/")}#organization` },
      publisher: { "@id": `${absoluteUrl("/")}#organization` },
      breadcrumb: breadcrumbSchema([{ name: "Home", path: "/" }, { name: "AI agents in banking", path: "/agentic-banking" }, { name: "Build map", path: PATH }])
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Design briefs by use case",
      itemListElement: USE_CASES.map((u, i) => ({ "@type": "ListItem", position: i + 1, url: absoluteUrl(`${PATH}/${u}`), name: `${lookups.useCaseLabels[u]}: design brief` }))
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: BUILD_FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }
  ];

  return (
    <AgentShell
      eyebrow={<>AI agents in banking · The build map</>}
      title={<>If we build it <em>this way</em>, what follows?</>}
      updated={`Last updated ${formatDate(BUILD_UPDATED)} · ${USE_CASES.length} use cases · every document linked to the tracker · vendor-neutral`}
      path={PATH}
      ctaTitle="Build with the rules in view. We'll tell you when they move."
    >
      <style>{buildCss}</style>
      <JsonLd data={schema} />
      <p className="trk-answer">
        A design tool for teams building AI systems inside a bank. Ten questions, then a brief: whether a model should do this at all, how the work splits between the model, existing systems and people, which pattern fits, which control layers carry the weight, which of the tracker&apos;s documents apply, the evals to write, the human gates, the questions an examiner will ask, and five lines for the board. The taxonomy comes from public engineering guidance and the rules from the regulation tracker on this site; the brief never names a vendor, because the controls are the same whichever model sits behind them.
      </p>

      <Section label="The path">
        <div className="bd-fig"><DecisionPath /></div>
        <p className="bd-cap">Five decisions in the order supervisors think about them. The first one is the one teams skip.</p>
      </Section>

      <Section label="The map">
        <h2 className="trk-h2-q">What should this system look like?</h2>
        <BuildWizard lookups={lookups} />
      </Section>

      <Section label="The three patterns">
        <div className="ag-grid">
          {(Object.keys(PATTERNS) as (keyof typeof PATTERNS)[]).map((k, i) => (
            <div className="ag-card" key={k}>
              <p className="ag-card-n">0{i + 1}</p>
              <h3>{PATTERNS[k].name}</h3>
              <p>{PATTERNS[k].line}</p>
              <p style={{ color: "#5a5a56" }}>{PATTERNS[k].when}</p>
            </div>
          ))}
        </div>
        <h2 className="trk-h2-q" style={{ marginTop: 28 }}>Which workflow shapes are there?</h2>
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>Shape</th><th className="trk-td-min">What it does</th></tr></thead>
            <tbody>
              {(Object.keys(SHAPES) as (keyof typeof SHAPES)[]).map((k) => (
                <tr key={k}><td className="trk-td-nowrap trk-td-strong">{SHAPES[k].name}</td><td className="trk-td-min">{SHAPES[k].line}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="bd-cap">Source: public engineering guidance on building effective agents (<a href="https://www.anthropic.com/engineering/building-effective-agents" target="_blank" rel="noopener noreferrer">anthropic.com/engineering</a>); the same shapes appear under similar names in every major provider&apos;s documentation.</p>
      </Section>

      <Section label="The primitives">
        <h2 className="trk-h2-q">What are the building blocks, and what do they mean in a bank?</h2>
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>Primitive</th><th className="trk-td-min">What it is</th><th className="trk-td-min">In a bank</th></tr></thead>
            <tbody>
              {PRIMITIVES.map((p) => (
                <tr key={p.name}><td className="trk-td-nowrap trk-td-strong">{p.name}</td><td className="trk-td-min">{p.line}</td><td className="trk-td-min">{p.bank}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="bd-cap">Connectors follow the open Model Context Protocol (<a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer">modelcontextprotocol.io</a>), adopted across providers.</p>
      </Section>

      <Section label="Delivery routes">
        <div className="ag-grid">
          {ROUTES.map((r, i) => (
            <div className="ag-card" key={r.name}>
              <p className="ag-card-n">0{i + 1}</p>
              <h3>{r.name}</h3>
              <p>{r.line}</p>
              <p style={{ color: "#5a5a56" }}>{r.watch}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Evals">
        <h2 className="trk-h2-q">How do bank teams prove an AI system works?</h2>
        <p className="trk-p">
          An eval is a structured test set that checks whether the system returns the expected output. It defines success in measurable terms, exposes design assumptions early, and is the gate that shows whether a prompt change, a model swap or a new retrieval strategy made things better or worse. In model-risk language it is outcomes analysis and ongoing monitoring, run by engineers on every release. Five stages: define the task in specific terms, build the golden dataset, run automated checks, score with a judge where interpretation is needed, act on what you find.
        </p>
        <div className="ag-grid">
          {EVAL_TYPES.map((e, i) => (
            <div className="ag-card" key={e.name}>
              <p className="ag-card-n">0{i + 1}</p>
              <h3>{e.name}</h3>
              <p>{e.line}</p>
              <p style={{ color: "#5a5a56" }}>{e.when}</p>
            </div>
          ))}
        </div>
        <p className="bd-cap">Method after public documentation on developing test cases (<a href="https://platform.claude.com/docs/en/test-and-evaluate/develop-tests" target="_blank" rel="noopener noreferrer">platform.claude.com</a>). Thresholds in a brief are starting points; the bank&apos;s own human-scored sample sets the real ones.</p>
      </Section>

      <Section label="The twelve briefs">
        <h2 className="trk-h2-q">Where do I start for my use case?</h2>
        <div className="ag-grid">
          {USE_CASES.map((u, i) => (
            <div className="ag-card" key={u}>
              <p className="ag-card-n">{String(i + 1).padStart(2, "0")}</p>
              <h3><Link href={`${PATH}/${u}`}>{lookups.useCaseLabels[u]}</Link></h3>
              <p>A system that {USE_CASE_BRIEFS[u].what}.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Common questions">
        {BUILD_FAQ.map((f) => (
          <div key={f.q}><h2 className="trk-faq-q">{f.q}</h2><p className="trk-faq-a">{f.a}</p></div>
        ))}
      </Section>

      <Section label="Navigate">
        <div className="trk-related">
          <Link href="/agentic-banking">AI agents: the operating model →</Link>
          <Link href="/agentic-banking/control-plane">The control plane →</Link>
          <Link href="/agentic-banking/lifecycle">The lifecycle →</Link>
          <Link href="/ai-governance">AI governance →</Link>
          <Link href="/ai-regulation">The regulation tracker →</Link>
          <Link href="/banks">The {BANK_COUNT} banks →</Link>
        </div>
      </Section>
    </AgentShell>
  );
}

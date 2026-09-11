import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/seo";
import { REGULATORS } from "@/lib/regulators";
import { formatDate } from "@/lib/tracker";
import { AGENT_OS_DOC_SLUGS, AGENT_OS_UPDATED, AUTONOMY, FAQ, FUNCTIONS, LAYERS, LIFECYCLE, MATURITY, TIMELINE } from "@/lib/agent-os";
import { Coverage } from "../ai-regulation/coverage";
import { Section } from "../ai-regulation/shell";
import { AgentShell } from "./shell";
import { agentMatcher, resolveDoc } from "./docs";
import { AutonomyFigure, FunctionMapFigure, LifecycleFigure, MaturityFigure, StackFigure, TimelineFigure, type FunctionCell } from "./graphics";

const TITLE = "AI Agents in Banking: An Operating System (2026)";
const DESCRIPTION =
  "How to run AI agents in a bank: eight control layers, an eight-gate lifecycle, where agents land by function, autonomy levels and what regulators have.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/agentic-banking" },
  openGraph: { type: "article", url: "/agentic-banking", title: TITLE, description: DESCRIPTION, modifiedTime: AGENT_OS_UPDATED },
  twitter: { card: "summary_large_image", title: "An operating system for AI agents in your bank", description: DESCRIPTION }
};

export const revalidate = 3600;

const FUNCTION_SHORT: Record<string, string> = {
  "Customer service": "chat and voice servicing",
  "Onboarding and KYC": "document collection, identity checks",
  "Lending and underwriting": "application assembly, decision explanation",
  "Advice and wealth": "research and adviser preparation",
  "Fraud and AML": "alert triage, investigation drafting",
  "Credit and market risk": "analysis and model documentation",
  "Compliance and regulatory change": "obligation mapping, policy drafting",
  "Treasury and ALM": "forecast commentary, funding memos",
  "Operations and payments": "exceptions, reconciliation, investigations",
  "Finance and reporting": "report drafting, data-quality checks",
  "IT and engineering": "coding agents, incident management",
  "Cyber and security operations": "detection, triage, response"
};

const OVERSIGHT_SHORT: string[][] = [
  ["Accuracy tests, lineage,", "a route to a human"],
  ["A person reviews before", "anything is executed"],
  ["Per-action approval by a", "competent reviewer, logged"],
  ["Envelope, sampled review,", "kill switch, monitoring"],
  ["Rare in banking; risks", "named by FSB and NIST"]
];

export default function AgenticBankingPage() {
  const url = absoluteUrl("/agentic-banking");
  const schema: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      url,
      headline: "An operating system for AI agents in your bank",
      description: DESCRIPTION,
      dateModified: AGENT_OS_UPDATED,
      datePublished: "2026-09-06",
      inLanguage: "en-US",
      isAccessibleForFree: true,
      articleSection: ["Banking", "Artificial Intelligence", "Agentic AI", "Regulation"],
      author: { "@id": `${absoluteUrl("/")}#organization` },
      publisher: { "@id": `${absoluteUrl("/")}#organization` },
      breadcrumb: breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "AI agents in banking", path: "/agentic-banking" }
      ])
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        ...LAYERS.map((l) => ({ "@type": "Question", name: l.question, acceptedAnswer: { "@type": "Answer", text: l.answer } })),
        ...FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
      ]
    }
  ];

  const docLabels = LAYERS.map((l) => l.docs.map((d) => resolveDoc(d.slug)?.name ?? d.slug));
  const cells: FunctionCell[] = FUNCTIONS.map((f) => ({ group: f.group, name: f.name, short: FUNCTION_SHORT[f.name] ?? "", autonomy: f.autonomy }));

  // Documents cited anywhere in the model, grouped by authority in display order
  const cited = AGENT_OS_DOC_SLUGS.map((s) => ({ slug: s, r: resolveDoc(s) })).filter((x) => x.r);
  const byAuthority = new Map<string, typeof cited>();
  for (const c of cited) {
    const key = c.r!.authority;
    byAuthority.set(key, [...(byAuthority.get(key) ?? []), c]);
  }

  return (
    <AgentShell
      eyebrow={<>AI agents in banking · A working model</>}
      title={<>An operating system for<br /><em>AI agents in your bank.</em></>}
      updated={`Last updated ${formatDate(AGENT_OS_UPDATED)} · ${cited.length} primary-source documents cited · Updated as regulators move`}
    >
      <JsonLd data={schema} />

      <p className="trk-answer">
        Banks are past the pilot stage with AI agents and before the platform stage. Supervisors now describe the same practice
        on both sides of the Atlantic — agents limited to defined use cases, behind guardrails, with a human accountable — while
        the rules that reach agents are scattered across model-risk, third-party, cyber, consumer-protection and data frameworks.
        This page assembles them into one operating model: eight control layers every agent runs on, an eight-stage lifecycle with
        a gate before each stage, a map of where agents are landing by bank function, a five-level autonomy ladder that says what
        oversight each level owes, and a dated account of how regulators are moving. Every claim links to a primary source in the{" "}
        <Link href="/ai-regulation">regulation tracker</Link>.
      </p>

      <Section label="The control plane">
        <h2 className="trk-h2-q" id="control-plane">What does an operating system for AI agents in a bank look like?</h2>
        <p className="trk-p">
          The term is a design goal, not a regulatory one. It means the controls an agent needs — identity, permissions, data
          access, model management, runtime limits, logging, oversight — are provided once as shared services and inherited by
          every agent, instead of being re-implemented, unevenly, inside each use case. The layers below are the minimum set. The
          top and bottom layers are about people and policy; the six in between are enforced in code.
        </p>
        <StackFigure layers={LAYERS} docLabels={docLabels} />
        <div className="ag-grid">
          {LAYERS.map((l) => (
            <div className="ag-card" key={l.id}>
              <p className="ag-card-n">LAYER {l.n} · {l.decides.toUpperCase()}</p>
              <h3><Link href={`/agentic-banking/control-plane#${l.id}`}>{l.name}</Link></h3>
              <p>{l.question}</p>
            </div>
          ))}
        </div>
        <p className="trk-p" style={{ marginTop: 18 }}>
          <Link href="/agentic-banking/control-plane">Read the control plane in full →</Link> — each layer&apos;s question, a quotable answer,
          the controls, and the documents it answers to.
        </p>
      </Section>

      <Section label="End to end">
        <h2 className="trk-h2-q" id="lifecycle">How does an AI agent get from idea to production in a bank?</h2>
        <p className="trk-p">
          Through eight stages, each closed by a gate question. The sequence is the one the Treasury&apos;s December 2024 report
          asked for — review every use case for compliance before deployment, then re-evaluate periodically — laid over the
          model-risk, third-party and deployer duties that already exist. The re-assessment loop is not optional: vendor model
          updates, new uses, new rules and incidents all send an agent back through tiering.
        </p>
        <LifecycleFigure stages={LIFECYCLE} />
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>#</th><th>Stage</th><th className="trk-td-min">Gate question</th></tr></thead>
            <tbody>
              {LIFECYCLE.map((s) => (
                <tr key={s.id}>
                  <td className="trk-td-nowrap trk-td-strong">{s.n}</td>
                  <td className="trk-td-nowrap"><Link href={`/agentic-banking/lifecycle#${s.id}`} className="trk-td-strong">{s.name}</Link></td>
                  <td className="trk-td-min">{s.gate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="trk-p" style={{ marginTop: 18 }}><Link href="/agentic-banking/lifecycle">Read the lifecycle in full →</Link> — evidence per gate and the documents behind each.</p>
      </Section>

      <Section label="Where agents are landing">
        <h2 className="trk-h2-q" id="functions">Where are banks deploying AI agents today?</h2>
        <p className="trk-p">
          Everywhere the work is text, cases and exceptions — and furthest where supervisors are pushing rather than
          restraining. The EBA found 92% of EU banks deploying AI in 2025 and 55% already using general-purpose or agentic AI
          with consumers; the ECB reported in February 2026 that more than 85% of large European banks use AI, with generative
          and agentic tools accelerating in IT operations, legal and document analysis and front-line support; the CFPB found
          every top-10 US bank running a chatbot as early as 2023. The UK&apos;s 2024 survey put fully autonomous use cases at 2%.
          Fraud and security operations run the most autonomous agents because that is where regulators actively encourage AI.
        </p>
        <FunctionMapFigure cells={cells} />
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>Function</th><th className="trk-td-min">What agents do</th><th>Level</th><th className="trk-td-min">Sources</th></tr></thead>
            <tbody>
              {FUNCTIONS.map((f) => (
                <tr key={f.name}>
                  <td className="trk-td-mid"><span className="trk-td-strong">{f.name}</span><br /><span style={{ color: "#9a9a96", fontSize: 12 }}>{f.group}</span></td>
                  <td className="trk-td-min">{f.agentUses}</td>
                  <td className="trk-td-nowrap">L{f.autonomy}</td>
                  <td className="trk-td-min">
                    {f.docs.map((d, i) => {
                      const r = resolveDoc(d.slug);
                      return r ? (<span key={d.slug}>{i > 0 ? " · " : ""}<Link href={r.href}>{r.name}</Link></span>) : null;
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section label="Autonomy">
        <h2 className="trk-h2-q" id="autonomy">How much autonomy should an AI agent in a bank have?</h2>
        <p className="trk-p">
          As much as the oversight around it can carry. The consistent regulatory position — the FSB&apos;s Sound Practice 10, the
          EU AI Act&apos;s Article 14, Colorado&apos;s human-review right, the OCC&apos;s observed &lsquo;human-in-the-loop accountability&rsquo; —
          is that human oversight scales up with autonomy rather than being designed out. The ladder makes that explicit: each
          level names the oversight it owes.
        </p>
        <AutonomyFigure levels={AUTONOMY} oversightShort={OVERSIGHT_SHORT} />
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>Level</th><th className="trk-td-min">What the agent does</th><th className="trk-td-min">Oversight it owes</th><th className="trk-td-min">Sources</th></tr></thead>
            <tbody>
              {AUTONOMY.map((a) => (
                <tr key={a.level}>
                  <td className="trk-td-nowrap"><span className="trk-td-strong">L{a.level} · {a.name}</span></td>
                  <td className="trk-td-min">{a.description}</td>
                  <td className="trk-td-min">{a.oversight}</td>
                  <td className="trk-td-min">
                    {a.docs.map((d, i) => {
                      const r = resolveDoc(d.slug);
                      return r ? (<span key={d.slug}>{i > 0 ? " · " : ""}<Link href={r.href}>{r.name}</Link></span>) : null;
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section label="How things are moving">
        <h2 className="trk-h2-q" id="timeline">How is the regulation of AI agents in banking moving?</h2>
        <p className="trk-p">
          In two directions at once. Enablement: adoption data, a pro-innovation federal posture, a voluntary sector framework
          from Treasury, and a modernised model-risk standard that deliberately carved agents out. Controls: agent-specific
          security work at NIST, human-oversight duties in the FSB&apos;s practices and in statute, and a run of frontier-AI cyber
          warnings from New York, Frankfurt, Paris and Basel in the summer of 2026. The next dated events are the FSB&apos;s final
          practices in October 2026, Colorado on January 1, 2027, and the EU AI Act&apos;s high-risk obligations on December 2, 2027.
        </p>
        <TimelineFigure events={TIMELINE} />
        <p className="trk-p"><Link href="/agentic-banking/regulation">Read what each regulator has actually said about agents →</Link></p>
      </Section>

      <Section label="Maturity">
        <h2 className="trk-h2-q" id="maturity">How mature is agentic AI in banking?</h2>
        <p className="trk-p">
          Stage three, on the supervisors&apos; own description: governed agents in defined use cases with guardrails and measured
          oversight. The move to stage four — controls as shared platform services — is what turns a collection of governed
          agents into an operating system, and it is where the engineering investment is going. Stage five, multi-agent
          operations at high autonomy, is where the standards are still being drafted.
        </p>
        <MaturityFigure stages={MATURITY} />
        <div className="ag-grid">
          {MATURITY.map((m) => (
            <div className="ag-card" key={m.n}>
              <p className="ag-card-n">STAGE {m.n}</p>
              <h3>{m.name}</h3>
              <p>{m.description}</p>
              <ul className="ag-docs">{m.signals.map((s) => (<li key={s}>{s}</li>))}</ul>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Sources">
        <h2 className="trk-h2-q" id="sources">Which documents does this model cite?</h2>
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>Authority</th><th className="trk-td-min">Documents</th></tr></thead>
            <tbody>
              {[...byAuthority.entries()].map(([auth, list]) => (
                <tr key={auth}>
                  <td className="trk-td-nowrap trk-td-strong">{auth}</td>
                  <td className="trk-td-min">
                    {list
                      .sort((a, b) => (a.r!.date < b.r!.date ? 1 : -1))
                      .map((c, i) => (<span key={c.slug}>{i > 0 ? " · " : ""}<Link href={c.r!.href}>{c.r!.name}</Link></span>))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="trk-p" style={{ marginTop: 16 }}>
          Every document above has its own page with the official link, a summary and what changed. See the{" "}
          <Link href="/ai-regulation">tracker</Link> for all {REGULATORS.length} authorities.
        </p>
      </Section>

      <Coverage matches={agentMatcher} label="Agents in the daily brief" />

      <Section label="Common questions">
        {FAQ.map((f) => (
          <div key={f.q}>
            <h2 className="trk-faq-q">{f.q}</h2>
            <p className="trk-faq-a">{f.a}</p>
          </div>
        ))}
      </Section>
    </AgentShell>
  );
}

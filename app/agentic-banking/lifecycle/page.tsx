import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/seo";
import { formatDate } from "@/lib/tracker";
import { AGENT_OS_UPDATED, LIFECYCLE } from "@/lib/agent-os";
import { Section } from "../../ai-regulation/shell";
import { AgentShell, DocList } from "../shell";
import { resolveDoc } from "../docs";
import { LifecycleFigure } from "../graphics";

const TITLE = "AI Agent Lifecycle for Banks: Eight Gates";
const DESCRIPTION =
  "How an AI agent gets from idea to production in a bank and back out: intake, risk tiering, design, build, validation, approval, operation, change and.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/agentic-banking/lifecycle" },
  openGraph: { type: "article", url: "/agentic-banking/lifecycle", title: TITLE, description: DESCRIPTION, modifiedTime: AGENT_OS_UPDATED },
  twitter: { card: "summary_large_image", title: "The AI agent lifecycle for banks", description: DESCRIPTION }
};

export const revalidate = 86400;

export default function LifecyclePage() {
  const url = absoluteUrl("/agentic-banking/lifecycle");
  const schema: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      url,
      headline: "The AI agent lifecycle for banks",
      description: DESCRIPTION,
      dateModified: AGENT_OS_UPDATED,
      datePublished: "2026-09-06",
      inLanguage: "en-US",
      isAccessibleForFree: true,
      author: { "@id": `${absoluteUrl("/")}#organization` },
      publisher: { "@id": `${absoluteUrl("/")}#organization` },
      breadcrumb: breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "AI agents in banking", path: "/agentic-banking" },
        { name: "Lifecycle", path: "/agentic-banking/lifecycle" }
      ])
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Take an AI agent from intake to production in a bank",
      description: DESCRIPTION,
      step: LIFECYCLE.map((s) => ({
        "@type": "HowToStep",
        position: s.n,
        name: s.name,
        text: `${s.gate} Evidence: ${s.evidence.join("; ")}.`,
        url: `${url}#${s.id}`
      }))
    }
  ];

  return (
    <AgentShell
      eyebrow={<><Link href="/agentic-banking" style={{ color: "inherit", textDecoration: "none" }}>AI agents in banking</Link> · Lifecycle</>}
      title={<>Eight gates between an idea<br /><em>and an agent in production.</em></>}
      updated={`Last updated ${formatDate(AGENT_OS_UPDATED)} · Updated as regulators move`}
      ctaTitle="Know which gate just moved"
    >
      <JsonLd data={schema} />
      <p className="trk-answer">
        An AI agent in a bank passes eight gates, and each gate is a question with evidence attached. The order matters: tiering
        comes before design because the tier decides which rulebook applies; vendor onboarding comes before validation because
        most agents are bought, not built; and the last stage loops back to the second, because a vendor model update, a new use,
        a new rule or an incident each re-opens the tiering question. The documents behind each gate are the ones examiners cite.
      </p>

      <LifecycleFigure stages={LIFECYCLE} />

      {LIFECYCLE.map((s) => (
        <div className="ag-step" key={s.id} id={s.id} style={{ scrollMarginTop: 72 }}>
          <div className="ag-step-n">{String(s.n).padStart(2, "0")}</div>
          <div>
            <h2 className="trk-h2-q" style={{ marginBottom: 10 }}>{s.name}</h2>
            <p className="ag-gate">{s.gate}</p>
            <p className="trk-kicker">EVIDENCE AT THE GATE</p>
            <ul className="trk-list">{s.evidence.map((e) => (<li key={e}>{e}</li>))}</ul>
            <p className="trk-kicker" style={{ marginTop: 18 }}>DOCUMENTS</p>
            <DocList docs={s.docs} resolve={resolveDoc} />
          </div>
        </div>
      ))}

      <Section label="Next">
        <div className="trk-related">
          <Link href="/agentic-banking/control-plane">The control plane →</Link>
          <Link href="/agentic-banking/regulation">What regulators say about agents →</Link>
          <Link href="/ai-regulation/compliance-checklist">Compliance checklist →</Link>
          <Link href="/agentic-banking">Back to the overview →</Link>
        </div>
      </Section>
    </AgentShell>
  );
}

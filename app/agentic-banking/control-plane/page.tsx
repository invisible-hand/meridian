import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/seo";
import { formatDate } from "@/lib/tracker";
import { AGENT_OS_UPDATED, LAYERS } from "@/lib/agent-os";
import { Section } from "../../ai-regulation/shell";
import { AgentShell, DocList } from "../shell";
import { resolveDoc } from "../docs";
import { StackFigure } from "../graphics";

const TITLE = "The Control Plane for AI Agents in Banking: Eight Layers, Mapped to Regulation";
const DESCRIPTION =
  "Governance, identity, action gateway, data, models and vendors, runtime, observability, human oversight — the eight control layers an AI agent in a bank runs on, each with a quotable answer, the controls, and the primary-source documents it answers to.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/agentic-banking/control-plane" },
  openGraph: { type: "article", url: "/agentic-banking/control-plane", title: TITLE, description: DESCRIPTION, modifiedTime: AGENT_OS_UPDATED },
  twitter: { card: "summary_large_image", title: "The control plane for AI agents in banking", description: DESCRIPTION }
};

export const revalidate = 86400;

export default function ControlPlanePage() {
  const url = absoluteUrl("/agentic-banking/control-plane");
  const schema: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      url,
      headline: "The control plane for AI agents in banking",
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
        { name: "Control plane", path: "/agentic-banking/control-plane" }
      ])
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: LAYERS.map((l) => ({ "@type": "Question", name: l.question, acceptedAnswer: { "@type": "Answer", text: l.answer } }))
    }
  ];
  const docLabels = LAYERS.map((l) => l.docs.map((d) => resolveDoc(d.slug)?.name ?? d.slug));

  return (
    <AgentShell
      eyebrow={<><Link href="/agentic-banking" style={{ color: "inherit", textDecoration: "none" }}>AI agents in banking</Link> · Control plane</>}
      title={<>Eight layers every agent<br /><em>in a bank runs on.</em></>}
      updated={`Last updated ${formatDate(AGENT_OS_UPDATED)} · Updated as regulators move`}
      ctaTitle="Every layer has a regulator watching it"
    >
      <JsonLd data={schema} />
      <p className="trk-answer">
        A control plane is the set of services an AI agent cannot act without: an identity, a gateway that decides what it may
        do, data it is entitled to see, models and vendors the bank has vetted, a runtime that bounds it, a trace that records it,
        and a person who can stop it — all under a governance layer that names who is accountable. No regulator prescribes the
        stack, but every layer answers to documents supervisors already cite, and the questions below are phrased the way an
        examiner, an auditor or a search engine asks them.
      </p>

      <StackFigure layers={LAYERS} docLabels={docLabels} />

      {LAYERS.map((l) => (
        <Section key={l.id} label={`Layer ${l.n} · ${l.decides}`}>
          <h2 className="trk-h2-q" id={l.id} style={{ scrollMarginTop: 72 }}>{l.question}</h2>
          <p className="trk-answer" style={{ margin: "0 0 24px" }}>{l.answer}</p>
          <p className="trk-kicker">CONTROLS</p>
          <ul className="trk-list">{l.controls.map((c) => (<li key={c}>{c}</li>))}</ul>
          <p className="trk-kicker" style={{ marginTop: 22 }}>ANSWERS TO</p>
          <DocList docs={l.docs} resolve={resolveDoc} />
        </Section>
      ))}

      <Section label="Next">
        <div className="trk-related">
          <Link href="/agentic-banking/lifecycle">The lifecycle →</Link>
          <Link href="/agentic-banking/regulation">What regulators say about agents →</Link>
          <Link href="/agentic-banking">Back to the overview →</Link>
        </div>
      </Section>
    </AgentShell>
  );
}

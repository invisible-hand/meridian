import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/seo";
import { formatDate } from "@/lib/tracker";
import { AGENT_OS_UPDATED, POSITIONS, TIMELINE } from "@/lib/agent-os";
import { Coverage } from "../../ai-regulation/coverage";
import { Section } from "../../ai-regulation/shell";
import { AgentShell } from "../shell";
import { agentMatcher, resolveDoc } from "../docs";
import { TimelineFigure } from "../graphics";

const TITLE = "What Regulators Say About AI Agents in Banking (2026)";
const DESCRIPTION =
  "Every documented regulatory position on agentic AI in banking: the Fed, OCC and FDIC carve-out, FSB sound practices, NIST, NY DFS, the ESAs, ECB, EU AI.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/agentic-banking/regulation" },
  openGraph: { type: "article", url: "/agentic-banking/regulation", title: TITLE, description: DESCRIPTION, modifiedTime: AGENT_OS_UPDATED },
  twitter: { card: "summary_large_image", title: "What regulators say about AI agents in banking", description: DESCRIPTION }
};

export const revalidate = 3600;

const FAQ = [
  {
    q: "Is there a regulation specifically for AI agents in banking?",
    a: "No. As of September 2026 no banking regulator has issued rules addressed to AI agents as such. The closest things are the April 2026 interagency model risk guidance, which explicitly places generative and agentic AI outside its scope and promises a request for information; the FSB's June 2026 consultation, whose twelve sound practices pay 'specific attention to generative and agentic AI'; and NIST's January 2026 request for information on AI agent security, which feeds its AI Agent Standards Initiative."
  },
  {
    q: "What is the most important regulatory statement on agentic AI for a US bank?",
    a: "The carve-out in SR 26-2 / OCC Bulletin 2026-13 / FDIC FIL-15-2026: generative and agentic AI models 'are not within the scope of this guidance' and banks should manage them through broader risk-management and governance practices. It means an agent is not validated like a credit model, but it also means the bank has to show which governance program does cover it — and the agencies have said an interagency RFI on AI and model risk is coming."
  },
  {
    q: "Which regulators require human oversight of AI agents?",
    a: "In statute: the EU AI Act (Article 14 for high-risk systems, with deployer duties in Article 26) and Colorado's ADMT Act from January 1, 2027 (human review by trained staff with authority to override). In guidance: the FSB's Sound Practice 10 asks for extra human-oversight measures for highly autonomous agentic AI; the OCC describes human-in-the-loop accountability as observed practice; the CFPB says customers must be able to reach a human; New York DFS asks for human review of AI-generated code."
  }
];

export default function RegulationPage() {
  const url = absoluteUrl("/agentic-banking/regulation");
  const rows = POSITIONS.map((p) => ({ ...p, r: resolveDoc(p.docSlug) })).filter((p) => p.r).sort((a, b) => (a.r!.date < b.r!.date ? 1 : -1));
  const upcoming = TIMELINE.filter((t) => t.expected).sort((a, b) => (a.date < b.date ? -1 : 1));
  const schema: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      url,
      headline: "What regulators say about AI agents in banking",
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
        { name: "What regulators say", path: "/agentic-banking/regulation" }
      ])
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
    }
  ];

  return (
    <AgentShell
      eyebrow={<><Link href="/agentic-banking" style={{ color: "inherit", textDecoration: "none" }}>AI agents in banking</Link> · What regulators say</>}
      title={<>What regulators have actually said<br /><em>about AI agents.</em></>}
      updated={`Last updated ${formatDate(AGENT_OS_UPDATED)} · ${rows.length} documented positions · Updated as regulators move`}
      ctaTitle="The next position lands in your inbox"
    >
      <JsonLd data={schema} />
      <p className="trk-answer">
        No banking regulator has a rule for AI agents, but eighteen documents now take a position on them. Read together they say
        four things: agents are outside US model risk guidance and inside &lsquo;broader governance&rsquo;; human oversight must scale
        up with autonomy; agent-specific security — prompt injection, memory poisoning, AI-generated code — is an open workstream;
        and the autonomy of frontier models has become a financial-stability topic. Every position below is dated and quoted from
        the primary source.
      </p>

      <Section label="Timeline">
        <h2 className="trk-h2-q">How has the regulatory picture for AI agents developed?</h2>
        <TimelineFigure events={TIMELINE} />
      </Section>

      <Section label="Positions">
        <h2 className="trk-h2-q">What has each regulator said about agentic AI in banking?</h2>
        <div className="trk-table-wrap">
          <table className="trk-table">
            <thead><tr><th>Date</th><th>Authority</th><th>Document</th><th className="trk-td-min">What it says about agents</th></tr></thead>
            <tbody>
              {rows.map((p) => (
                <tr key={p.docSlug}>
                  <td className="trk-td-nowrap">{formatDate(p.r!.date)}</td>
                  <td className="trk-td-nowrap">{p.r!.authority}</td>
                  <td className="trk-td-mid"><Link href={p.r!.href} className="trk-td-strong">{p.r!.name}</Link></td>
                  <td className="trk-td-min">{p.says}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section label="What is scheduled">
        <h2 className="trk-h2-q">What are the next dated events for AI agents in banking?</h2>
        <ul className="trk-list">
          {upcoming.map((u) => {
            const r = u.docSlug ? resolveDoc(u.docSlug) : null;
            return (
              <li key={u.label}>
                <span className="trk-td-strong">{formatDate(u.date)} · {u.label}.</span> {u.note}{" "}
                {r && <Link href={r.href}>{r.name} →</Link>}
              </li>
            );
          })}
          <li>
            <span className="trk-td-strong">Date not set · Interagency RFI on AI and model risk management.</span> Promised in the April 2026
            guidance; the first federal document that will address generative and agentic AI in bank models directly.{" "}
            <Link href="/ai-regulation/documents/fed-sr-26-2">SR 26-2 →</Link>
          </li>
        </ul>
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

      <Section label="Next">
        <div className="trk-related">
          <Link href="/agentic-banking/control-plane">The control plane →</Link>
          <Link href="/agentic-banking/lifecycle">The lifecycle →</Link>
          <Link href="/ai-regulation/by-use-case">Rules by use case →</Link>
          <Link href="/agentic-banking">Back to the overview →</Link>
        </div>
      </Section>
    </AgentShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { absoluteUrl, clampText } from "@/lib/seo";
import { USE_CASES, type UseCase } from "@/lib/regulators";
import { formatDate } from "@/lib/tracker";
import { BUILD_UPDATED, PATTERNS, TIERS, USE_CASE_BRIEFS, answersToQuery, decide, defaultAnswers } from "@/lib/build";
import { Section } from "../../../ai-regulation/shell";
import { AgentShell } from "../../shell";
import { buildCss } from "../styles";
import { BriefView } from "../brief";
import { buildLookups } from "../lookups";

type Params = { useCase: string };

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return USE_CASES.map((u) => ({ useCase: u }));
}

function isUseCase(x: string): x is UseCase {
  return (USE_CASES as readonly string[]).includes(x);
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { useCase } = await params;
  if (!isUseCase(useCase)) return {};
  const lookups = buildLookups();
  const label = lookups.useCaseLabels[useCase];
  const title = clampText(`${label}: AI Design Brief for Banks`, 60);
  const description = clampText(`How to build a system that ${USE_CASE_BRIEFS[useCase].what} inside a bank: pattern, controls, the rules that apply, evals, human gates and examiner questions.`, 155);
  const path = `/agentic-banking/build/${useCase}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "article", url: path, title, description, modifiedTime: BUILD_UPDATED },
    twitter: { card: "summary_large_image", title, description }
  };
}

export default async function BriefPage({ params }: { params: Promise<Params> }) {
  const { useCase } = await params;
  if (!isUseCase(useCase)) notFound();
  const lookups = buildLookups();
  const label = lookups.useCaseLabels[useCase];
  const content = USE_CASE_BRIEFS[useCase];
  const answers = defaultAnswers(useCase);
  const brief = decide(answers);
  const path = `/agentic-banking/build/${useCase}`;
  const url = absoluteUrl(path);
  const schema: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      url,
      headline: `${label}: an AI design brief for banks`,
      description: content.intro,
      datePublished: "2026-09-12",
      dateModified: BUILD_UPDATED,
      inLanguage: "en-US",
      isAccessibleForFree: true,
      articleSection: ["Banking", "Artificial Intelligence", "Architecture", "Regulation"],
      author: { "@id": `${absoluteUrl("/")}#organization` },
      publisher: { "@id": `${absoluteUrl("/")}#organization` },
      breadcrumb: breadcrumbSchema([{ name: "Home", path: "/" }, { name: "AI agents in banking", path: "/agentic-banking" }, { name: "Build map", path: "/agentic-banking/build" }, { name: label, path }])
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: `Which pattern fits ${label.toLowerCase()} in a bank?`, acceptedAnswer: { "@type": "Answer", text: `${PATTERNS[brief.pattern].name}. ${PATTERNS[brief.pattern].when} ${TIERS[brief.tier].line}` } },
        { "@type": "Question", name: `Which steps belong to a person, the model and a system?`, acceptedAnswer: { "@type": "Answer", text: content.decomposition.map((r, i) => `${i + 1}. ${r.step}: ${r.owner === "human" ? "a person" : r.owner === "model" ? "the model" : "a system"}. ${r.note}`).join(" ") } },
        { "@type": "Question", name: "What will an examiner ask?", acceptedAnswer: { "@type": "Answer", text: brief.examiner.join(" ") } }
      ]
    }
  ];

  return (
    <AgentShell
      eyebrow={<>AI agents in banking · <Link href="/agentic-banking/build">The build map</Link> · Brief {String(USE_CASES.indexOf(useCase) + 1).padStart(2, "0")}</>}
      title={<>{label}: <em>a design brief</em> for banks.</>}
      updated={`Last updated ${formatDate(BUILD_UPDATED)} · standard answers for this use case · adjust them in the map`}
      path={path}
      ctaTitle="Every rule this brief cites, the morning it changes."
    >
      <style>{buildCss}</style>
      <JsonLd data={schema} />
      <p className="trk-answer">{content.intro}</p>
      <div className="bd-actions">
        <Link className="bd-btn" href={`/agentic-banking/build?${answersToQuery(answers)}`}>adjust the answers for your bank →</Link>
        <Link className="bd-btn" href={`/ai-regulation/by-use-case#${useCase}`}>every document for this use case →</Link>
      </div>
      <BriefView brief={brief} lookups={lookups} decomposition={content.decomposition} pitfalls={content.pitfalls} />
      <Section label="Other briefs">
        <div className="trk-related">
          {USE_CASES.filter((u) => u !== useCase).map((u) => <Link key={u} href={`/agentic-banking/build/${u}`}>{lookups.useCaseLabels[u]} →</Link>)}
          <Link href="/agentic-banking/build">The map →</Link>
        </div>
      </Section>
    </AgentShell>
  );
}

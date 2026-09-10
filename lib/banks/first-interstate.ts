import type { Bank } from "@/lib/banks";

export const FIRST_INTERSTATE: Bank = {
  slug: "first-interstate",
  name: "First Interstate BancSystem",
  shortName: "First Interstate",
  ticker: "FIBK",
  hq: "Billings, MT",
  fedRank: 76,
  leadBank: "First Interstate Bank",
  assetsUsdMillions: 26361,
  charter: "Montana state member bank (Federal Reserve)",
  posture: "A Rocky Mountain bank deliberately shrinking after a decade of acquisitions, whose CEO is consolidating data into 'one clean source' to support AI and is piloting a Fiserv-built agentic AI tool for commercial loan onboarding.",
  platform: {
    name: "Fiserv agentOS pilot and the 'one clean data source' project",
    detail: "First Interstate co-created an AI agent for commercial loan onboarding with its core provider Fiserv on the agentOS platform, which Fiserv built with OpenAI on AWS Bedrock and launched in May 2026 with 'bank-grade controls' for policy, governance, auditability and recordkeeping. The agent addresses a process that 'straddles multiple systems' and is 'super manual', and CEO Jim Reuter says it has already reduced manual data entry and cycle times: 'Delivery of an agentic operating system through our core allows us to simply integrate agentic tools into our daily workflows.' Underneath it, the bank has been consolidating its data into 'one clean data source' to support technology initiatives including AI, a project expected to finish in early summer 2026, alongside improvements to online account opening and Zelle.",
    sources: ["ab-fiserv-2026", "fibk-q1call-2026"]
  },
  answerFirst:
    "First Interstate BancSystem, the Billings, Montana parent of First Interstate Bank with about $26 billion of assets across 14 states, is the rare regional bank that is both shrinking on purpose and piloting agentic AI. President and CEO Jim Reuter, the former FirstBank of Colorado chief who arrived in late 2024, has sold a dozen branches in Arizona and Kansas, exited indirect auto lending, outsourced the consumer credit card, sold 11 rural Nebraska branches, run off transactional loans and, in the first quarter of 2026, completed a redesign of the banking organisation into 'a flatter, more streamlined model', all in the name of relationship banking and 'disciplined organic growth' after activist HoldCo Asset Management attacked the bank's acquisition record. The technology thread runs alongside: Reuter told investors the bank has been working toward 'one clean data source' to support initiatives including AI, due to wrap up in early summer 2026, and that improvements to online account opening and Zelle have produced 'positive results'. In May 2026 Fiserv named First Interstate one of six banks it co-developed AI agents with on its new agentOS platform, built with OpenAI; the bank is piloting an agent for commercial loan onboarding that Reuter says has cut manual data entry and cycle times, delivered through the core so agentic tools 'simply integrate' into daily workflows. First-quarter 2026 net income was $60.2 million, or $0.61 per share, with a 14.30% CET1 ratio and about $84 million of buybacks. The bank also warns customers that AI search summaries often misstate interest rates. In August 2026 it announced a chief operations officer hire with a technology and digital background, effective September. First Interstate Bank is a Montana state member bank supervised by the Federal Reserve; no AI budget has been disclosed and the agent remains a pilot.",
  keyPoints: [
    "Piloting a Fiserv agentOS AI agent for commercial loan onboarding, co-created with Fiserv and OpenAI; CEO reports reduced manual data entry and cycle times.",
    "'One clean data source' project to support AI and other technology initiatives, targeted for completion in early summer 2026.",
    "Deliberate shrinkage: branch sales in Arizona, Kansas and Nebraska, exit from indirect auto and credit cards, loan run-off, flatter organisation completed Q1 2026.",
    "Activist HoldCo Asset Management pressed the board to swear off acquisitions; management says the focus is disciplined organic growth.",
    "Q1 2026 net income $60.2 million ($0.61 per share); CET1 14.30%; about $84 million of buybacks.",
    "Customer education on AI search summaries misstating interest rates (November 2025)."
  ],
  leadership: [
    { name: "Jim Reuter", role: "President and CEO", linkedin: "https://www.linkedin.com/in/jamesareuter", sources: ["ab-fiserv-2026", "ab-shrinking-2026"] },
    { name: "Chris Shepler", role: "Chief Banking Officer", linkedin: "https://www.linkedin.com/in/christophershepler", sources: ["ab-shrinking-2026"] }
  ],
  timeline: [
    { date: "2025-10-30", title: "Response to activist pressure", detail: "Relationship banking focus; exit from indirect auto; leaving markets that do not fit.", sources: ["ab-activist-2025"] },
    { date: "2025-11-13", title: "Warning on AI search summaries and interest rates", detail: "Customers told to check sources and bank rate pages.", sources: ["fibk-aisummaries-2025"] },
    { date: "2026-02-05", title: "Why First Interstate is shrinking", detail: "Branch sales, loan run-off and refocused investment under Reuter.", sources: ["ab-shrinking-2026"] },
    { date: "2026-04-29", title: "Q1 2026 call: flatter organisation, data consolidation for AI", detail: "'One clean data source' due early summer; online account opening and Zelle improved.", sources: ["fibk-q1call-2026"] },
    { date: "2026-05-14", title: "Fiserv agentOS: commercial loan onboarding agent in pilot", detail: "One of six banks co-developing agents with Fiserv and OpenAI.", sources: ["ab-fiserv-2026"] },
    { date: "2026-04-10", title: "Sale of 11 rural Nebraska branches completed", detail: "About $244 million of deposits transferred.", sources: ["fibk-q1call-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Agentic AI for commercial loan onboarding (Fiserv agentOS)", detail: "Cuts manual data entry and cycle times across multiple systems.", status: "Pilot", sources: ["ab-fiserv-2026"] },
    { useCase: "governance-general", name: "'One clean data source' consolidation", detail: "Data foundation for AI and other technology initiatives.", status: "Rolling out", sources: ["fibk-q1call-2026"] },
    { useCase: "third-party-vendors", name: "Core-delivered AI with bank-grade controls", detail: "Fiserv platform controls for policy, governance, auditability and recordkeeping.", status: "Pilot", sources: ["ab-fiserv-2026"] },
    { useCase: "customer-chatbots", name: "Customer guidance on AI search answers", detail: "Explains inaccurate AI-generated rate summaries.", status: "In production", sources: ["fibk-aisummaries-2025"] }
  ],
  numbers: [
    { label: "Q1 2026 net income / diluted EPS", value: "$60.2 million / $0.61", asOf: "2026-04-29", sources: ["fibk-q1call-2026"] },
    { label: "CET1 ratio, Q1 2026", value: "14.30%", asOf: "2026-04-29", sources: ["fibk-q1call-2026"] },
    { label: "Total assets", value: "≈ $26.6 billion", asOf: "2026-02-05", sources: ["ab-shrinking-2026"] },
    { label: "Banks co-developing agents with Fiserv", value: "6 (First Interstate among them)", asOf: "2026-05-14", sources: ["ab-fiserv-2026"] }
  ],
  quotes: [
    { who: "Jim Reuter", role: "President and CEO", date: "2026-05-14", quote: "Delivery of an agentic operating system through our core allows us to simply integrate agentic tools into our daily workflows.", sources: ["ab-fiserv-2026"] },
    { who: "Jim Reuter", role: "President and CEO", date: "2026-04-29", quote: "Completed the redesign of our banking organization.", sources: ["fibk-q1call-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "First Interstate Bank is a state member bank; SR 11-7 and SR 23-4 govern the agentic pilot and the Fiserv dependency.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Commercial onboarding automation is outside consumer scope, but any extension to consumer credit brings adverse-action duties.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "fdic", why: "Deposit-insurance supervision and interagency third-party guidance apply to core-delivered AI.", docSlugs: ["fdic-fil-29-2023"] }
  ],
  suggestions: [
    { title: "Core-delivered agents are the community-bank path", detail: "First Interstate shows how a mid-size bank gets agentic AI without a lab: through its core provider, with the vendor's controls as the governance baseline." },
    { title: "Data first, then agents", detail: "Consolidating to one clean data source before scaling the pilot is the right order and the part examiners will ask about." },
    { title: "Shrinking creates budget", detail: "Branch sales and business exits free expense for technology; the bank should say how much is redirected." },
    { title: "Concentration risk sits with Fiserv", detail: "Core, agent platform and model provider in one chain is convenient and a single point of failure; SR 23-4 due diligence should cover OpenAI and AWS beneath Fiserv." }
  ],
  faq: [
    { q: "Does First Interstate Bank use AI?", a: "Yes, in pilot. First Interstate co-created an AI agent for commercial loan onboarding with Fiserv on its agentOS platform, built with OpenAI, and is piloting it; CEO Jim Reuter says it has reduced manual data entry and cycle times. The bank is also consolidating its data into one clean source to support AI." },
    { q: "Why is First Interstate getting smaller?", a: "Under CEO Jim Reuter the bank is refocusing on relationship banking and disciplined organic growth after years of acquisitions: it sold branches in Arizona, Kansas and Nebraska, exited indirect auto lending, outsourced its credit card and let transactional loans run off, while activist HoldCo Asset Management pressed it to stop acquiring." }
  ],
  sources: [
    { id: "ab-activist-2025", title: "How First Interstate is responding to activist pressure", publisher: "American Banker", url: "https://americanbanker.com/news/how-first-interstate-is-responding-to-activist-pressure", date: "2025-10-30" },
    { id: "fibk-aisummaries-2025", title: "AI Summaries and Interest Rates: What You Need to Know", publisher: "First Interstate Bank", url: "https://www.firstinterstatebank.com/company/news/ai-summaries-interest-rate-confusion", date: "2025-11-13" },
    { id: "ab-shrinking-2026", title: "Why one regional bank is shrinking after years of rapid growth", publisher: "American Banker", url: "https://americanbanker.com/news/why-one-regional-bank-is-shrinking-after-years-of-rapid-growth", date: "2026-02-05" },
    { id: "fibk-q1call-2026", title: "First Interstate BancSystem Q1 Earnings Call Highlights", publisher: "MarketBeat (Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/first-interstate-bancsystem-q1-earnings-182457679.html", date: "2026-04-30" },
    { id: "ab-fiserv-2026", title: "Fiserv has co-created AI agents with six banks and OpenAI", publisher: "American Banker", url: "https://americanbanker.com/news/fiserv-has-co-created-ai-agents-with-six-banks-and-openai", date: "2026-05-14" }
  ],
  lastUpdated: "2026-09-10"
};

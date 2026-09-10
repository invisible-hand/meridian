import type { Bank } from "@/lib/banks";

export const CUSTOMERS: Bank = {
  slug: "customers",
  name: "Customers Bancorp",
  shortName: "Customers Bank",
  ticker: "CUBI",
  hq: "West Reading, PA",
  fedRank: 77,
  leadBank: "Customers Bank",
  assetsUsdMillions: 25862,
  charter: "Pennsylvania state member bank (Federal Reserve)",
  posture: "The most aggressive AI adopter in the rank-51-to-100 group: a multiyear collaboration that embeds OpenAI engineers on site, a stated 2026 priority to 'operationalize AI at scale', 100% of staff AI-trained, and a CEO who used an AI clone of himself on an earnings call.",
  platform: {
    name: "OpenAI strategic collaboration, AI Innovation Lab and cubiX payments network",
    detail: "Customers Bank adopted ChatGPT Enterprise in 2023 and on 27 April 2026 announced a multiyear strategic collaboration with OpenAI that places OpenAI technical teams on site to build custom AI capabilities across lending, deposits and payments, including AI-enabled document collection, digital account onboarding, post-closing portfolio and collateral monitoring and AI-driven risk tools, running on the bank's own infrastructure. The bank has created an AI Innovation Lab, trained 100% of employees on AI, adopted a standardised AI risk framework, and by the first quarter of 2026 employees had built more than 500 agents and custom AI models, with AI workflows saving 28,000 hours; 75% of staff use OpenAI-powered tools. Reported outcomes include an AI-powered call-centre scoring tool with 85% greater efficiency, AI-powered loan account opening that cut workflow by 68%, sanctions screening 50% more accurate, and a Q2 2026 pilot that closed selected commercial loans in seven days instead of 30 to 60. Its cubiX instant-payments network passed $5 trillion of cumulative volume in Q2 2026.",
    sources: ["cubi-openai-2026", "ab-openai-2026", "cubi-deck-2026", "cubi-q2-2026"]
  },
  answerFirst:
    "Customers Bancorp, the West Reading, Pennsylvania parent of Customers Bank with about $26 billion of assets, roughly 870 employees and a business-bank model built on single-point-of-contact service, instant payments and specialty verticals, has made AI its identity. Its January 2026 investor deck lists 'Operationalize AI at Scale' among five 2026 priorities, reports an AI Innovation Lab, 100% of employees AI-trained and a standardised AI risk framework, and quantifies results: AI-powered call-centre scoring with 85% greater efficiency, AI-powered loan account opening that reduced workflow by 68%, and AI sanctions screening 50% more accurate, with a $20 million expense programme that includes 'process automation for AI'. On 27 April 2026 the bank announced a multiyear strategic collaboration with OpenAI, extending a relationship that began with ChatGPT Enterprise in 2023, under which OpenAI technical teams work on site to build custom capabilities for lending, deposit onboarding and payments; president and CEO Sam Sidhu said it gives the bank 'the frontier models, engineering expertise and ability to co-create a roadmap toward becoming an AI native bank' and that 'we expect a fundamental re-engineering of how Customers Bank operates'. On the first-quarter call Sidhu handed part of his remarks to an AI clone of his voice, calling the call 'a live demonstration of what we mean when we say AI is not an experiment', and reported more than 500 employee-built agents and models and 28,000 hours saved, equivalent to 15 full-time staff; 75% of employees use OpenAI-powered tools. By the second quarter the bank had completed a pilot closing selected commercial loans in seven days, down from 30 to 60, one to two quarters ahead of schedule, seen prospecting success rates more than double in some verticals, and piloted AI-powered KYC screening and OFAC false-positive clearing, alongside second-quarter net income to common of $71.6 million, or $2.05 per share, and record deposits of $21.7 billion. Chief strategy and innovation officer Carlos Coto leads strategy. Customers Bank is a Pennsylvania state member bank supervised by the Federal Reserve; the OpenAI deal's financial terms are undisclosed.",
  keyPoints: [
    "Multiyear OpenAI collaboration (27 April 2026): OpenAI engineers on site building custom AI for lending, deposits and payments on the bank's infrastructure; goal an 'AI native bank'.",
    "2026 priority to 'operationalize AI at scale': AI Innovation Lab, 100% of employees AI-trained, standardised AI risk framework; 75% of staff use OpenAI tools.",
    "Quantified results: call-centre scoring 85% more efficient, loan account opening workflow cut 68%, sanctions screening 50% more accurate, 28,000 hours saved, 500-plus employee-built agents and models.",
    "Q2 2026 pilot closed selected commercial loans in seven days versus 30 to 60; prospecting success up more than 100% in select verticals; AI KYC and OFAC false-positive clearing piloted.",
    "CEO Sam Sidhu used an AI clone of his voice on the Q1 2026 earnings call as a demonstration.",
    "Q2 2026 net income to common $71.6 million ($2.05 per share); record deposits $21.7 billion; cubiX network past $5 trillion cumulative volume."
  ],
  leadership: [
    { name: "Sam Sidhu", role: "President and CEO, Customers Bancorp", linkedin: "https://www.linkedin.com/in/ssidhu", sources: ["ab-openai-2026", "cubi-q2-2026"] },
    { name: "Carlos Coto", role: "Chief Strategy and Innovation Officer", linkedin: "https://www.linkedin.com/in/carloscoto1", sources: ["ab-coto-2026"] }
  ],
  timeline: [
    { date: "2025-07-28", title: "CEO on stablecoins and the GENIUS Act", detail: "Sidhu to become holding-company CEO on 1 January 2026.", sources: ["ab-stablecoin-2025"] },
    { date: "2025-11-18", title: "West Coast expansion", detail: "New offices; 'high-tech capabilities with local, high-touch relationships'.", sources: ["ab-westcoast-2025"] },
    { date: "2026-01-22", title: "Investor deck: 'Operationalize AI at Scale' as a 2026 priority", detail: "AI Innovation Lab; 100% of staff trained; quantified efficiency gains.", sources: ["cubi-deck-2026"] },
    { date: "2026-04-24", title: "AI clone of the CEO speaks on the Q1 earnings call", detail: "500-plus agents and models built; 28,000 hours saved.", sources: ["ab-openai-2026"] },
    { date: "2026-04-27", title: "Strategic collaboration with OpenAI announced", detail: "On-site OpenAI teams; lending, deposits and payments; AI-native ambition.", sources: ["cubi-openai-2026", "ab-openai-2026"] },
    { date: "2026-07-23", title: "Second-quarter 2026 results", detail: "Seven-day loan closings piloted; AI KYC and OFAC clearing; net income to common $71.6 million.", sources: ["cubi-q2-2026"] }
  ],
  useCases: [
    { useCase: "credit-underwriting", name: "AI-powered loan closing and account opening", detail: "Selected commercial loans closed in seven days versus 30 to 60; account-opening workflow cut 68%.", status: "Pilot", sources: ["cubi-q2-2026", "cubi-deck-2026"] },
    { useCase: "aml-kyc", name: "AI KYC screening and OFAC false-positive clearing", detail: "Sanctions screening accuracy up 50%; consistency and defensibility of compliance processes.", status: "Pilot", sources: ["cubi-q2-2026", "cubi-deck-2026"] },
    { useCase: "customer-chatbots", name: "AI call-centre scoring", detail: "85% greater efficiency and full visibility into customer interactions.", status: "In production", sources: ["cubi-deck-2026"] },
    { useCase: "generative-agentic-ai", name: "Employee-built agents and custom models on OpenAI", detail: "500-plus agents; 75% of staff on OpenAI tools; on-site OpenAI engineering.", status: "In production", sources: ["ab-openai-2026", "cubi-openai-2026"] },
    { useCase: "governance-general", name: "Standardised AI risk framework and AI Innovation Lab", detail: "Enterprise governance for scaled deployment.", status: "In production", sources: ["cubi-deck-2026"] }
  ],
  numbers: [
    { label: "Hours saved by AI workflows (Q1 2026)", value: "28,000 (≈ 15 FTE)", asOf: "2026-04-27", sources: ["ab-openai-2026"] },
    { label: "Employee-built agents and custom AI models", value: "> 500", asOf: "2026-04-27", sources: ["ab-openai-2026"] },
    { label: "Commercial loan closing time in pilot", value: "7 days, from 30 to 60", asOf: "2026-07-23", sources: ["cubi-q2-2026"] },
    { label: "Q2 2026 net income to common / diluted EPS", value: "$71.6 million / $2.05", asOf: "2026-07-23", sources: ["cubi-q2-2026"] },
    { label: "cubiX cumulative network volume", value: "> $5 trillion", asOf: "2026-07-23", sources: ["cubi-q2-2026"] }
  ],
  quotes: [
    { who: "Sam Sidhu", role: "President and CEO", date: "2026-04-27", quote: "This strategic collaboration with OpenAI gives us the frontier models, engineering expertise and ability to co-create a roadmap toward becoming an AI native bank.", sources: ["ab-openai-2026"] },
    { who: "Sam Sidhu", role: "President and CEO", date: "2026-07-23", quote: "We completed a pilot of our new AI-powered loan closing process, which included successfully closing selected commercial loans in seven days, down from 30 to 60 days typically.", sources: ["cubi-q2-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "Customers Bank is a state member bank; the OpenAI dependency and custom models sit squarely under SR 23-4 third-party and SR 11-7 model-risk guidance.", docSlugs: ["fed-sr-23-4", "fed-sr-11-7"] },
    { authority: "fincen", why: "AI-driven KYC screening and OFAC false-positive clearing must satisfy BSA/AML model expectations and the innovation statement.", docSlugs: ["fincen-joint-statement-innovation-2018"] },
    { authority: "cfpb", why: "Automated account opening and lending decisions carry adverse-action and UDAAP duties.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "sec", why: "Quantified AI claims in earnings materials and an AI-cloned CEO voice invite scrutiny of AI-related disclosure.", docSlugs: ["sec-exam-priorities-fy2026"] }
  ],
  suggestions: [
    { title: "This is the template for an AI-first regional bank", detail: "Named priorities, quantified outcomes, a lab, universal training and a vendor partnership; peers describing AI as 'evolution' will be compared against it." },
    { title: "Concentration on one model provider is the exam question", detail: "OpenAI engineers on site and models on bank infrastructure reduce data-leakage risk but deepen dependence; exit and substitution plans belong in the SR 23-4 file." },
    { title: "Compliance pilots need validation before scale", detail: "AI KYC and OFAC clearing are exactly where FinCEN and examiners will want independent model validation and false-negative testing." },
    { title: "Self-reported productivity is not audited productivity", detail: "Survey-based gains and hours-saved figures should be paired with expense and revenue-per-employee trends investors can verify." }
  ],
  faq: [
    { q: "Does Customers Bank use AI?", a: "Extensively. Customers Bank has a multiyear collaboration with OpenAI that embeds OpenAI engineers on site to build AI for lending, deposits and payments, trains all employees on AI, runs an AI Innovation Lab, and reports quantified gains such as commercial loans closed in seven days instead of 30 to 60, 500-plus employee-built agents and 28,000 hours saved." },
    { q: "What is the Customers Bank and OpenAI deal?", a: "Announced 27 April 2026, it is a multiyear strategic collaboration under which OpenAI technical teams work on site at Customers Bank to build custom AI capabilities on the bank's infrastructure, focused on end-to-end workflows in lending, deposit onboarding and payments. Financial terms were not disclosed. CEO Sam Sidhu says the goal is to become an AI-native bank." }
  ],
  sources: [
    { id: "ab-stablecoin-2025", title: "'Pie is getting bigger faster': Customers CEO on stablecoins", publisher: "American Banker", url: "https://americanbanker.com/news/customers-ceo-says-bank-poised-to-benefit-from-genius-act", date: "2025-07-28" },
    { id: "ab-westcoast-2025", title: "Customers in Pennsylvania announces West Coast expansion", publisher: "American Banker", url: "https://americanbanker.com/news/customers-in-pennsylvania-announces-west-coast-expansion", date: "2025-11-18" },
    { id: "cubi-deck-2026", title: "Customers Bancorp Q4 2025 Investor Presentation", publisher: "Customers Bancorp", url: "https://customersbank.com/pdf/260122-presentation.pdf", date: "2026-01-22" },
    { id: "cubi-openai-2026", title: "Customers Bank Announces Strategic Collaboration with OpenAI to Redefine the Commercial Banking Operating Model", publisher: "Customers Bank (Business Wire)", url: "https://businesswire.com/news/home/20260427319349/en/Customers-Bank-Announces-Strategic-Collaboration-with-OpenAI-to-Redefine-the-Commercial-Banking-Operating-Model", date: "2026-04-27" },
    { id: "ab-openai-2026", title: "OpenAI will embed staff at Customers Bank under multiyear deal", publisher: "American Banker", url: "https://americanbanker.com/news/openai-will-embed-staff-at-customers-bank-under-multiyear-deal", date: "2026-04-27" },
    { id: "ab-coto-2026", title: "Carlos Coto, speaker profile, Digital Banking 2026", publisher: "American Banker", url: "https://digital-banking.americanbanker.com/profile/carlos-coto", date: "2026-04-27" },
    { id: "cubi-q2-2026", title: "Customers Bancorp Reports Results for Second Quarter 2026", publisher: "Customers Bancorp (Business Wire via Morningstar)", url: "https://morningstar.com/news/business-wire/20260723160284/customers-bancorp-reports-results-for-second-quarter-2026", date: "2026-07-23" }
  ],
  lastUpdated: "2026-09-10"
};

import type { Bank } from "@/lib/banks";

export const HUNTINGTON: Bank = {
  slug: "huntington",
  name: "Huntington Bancshares",
  shortName: "Huntington",
  ticker: "HBAN",
  hq: "Columbus, OH",
  fedRank: 15,
  leadBank: "The Huntington National Bank",
  assetsUsdMillions: 284135,
  charter: "National bank (OCC)",
  posture: "The CFO owns the AI strategy: a return target on every use case, 50 agents in production, and a venture studio — all while doubling in size.",
  platform: {
    name: "Agentic process transformation, run from finance",
    detail: "Huntington's AI program is led by CFO Zach Wasserman, who also runs strategy and data analytics. From two AI agents in late 2022 the bank reached 50 in production and more than 60 in development by April 2026, adding about 15 a month, with a stated return target of 10–15% cost reductions and 10–15% revenue increases from targeted LLM and agentic use cases.",
    sources: ["fortune-cfo-2026", "ab-return-2025", "wsj-wasserman-2025"]
  },
  answerFirst:
    "Huntington is the large bank where the chief financial officer is also the AI strategist. Zach Wasserman, who runs finance, strategy and data analytics, has set an explicit return target — 10–15% cost reductions and 10–15% revenue increases from targeted generative and agentic use cases — and reports progress in agents: two at the end of 2022, 50 in production and more than 60 in development by April 2026, with about 15 new ones entering the pipeline each month. The program sits inside a bank that is doubling in size through the Veritex and $7.4 billion Cadence acquisitions, has launched a fintech venture studio to 'act more like a tech company', uses generative AI to originate small-business loans through Casca, and won an American Banker Innovation of the Year award in 2026 with its payments partner. The public record is unusually specific about governance: Wasserman frames every use case around business value, oversight and adaptable operating models.",
  keyPoints: [
    "AI strategy is owned by CFO Zach Wasserman (ex-CFO of Visa North America and of American Express's US consumer business), with direct responsibility for enterprise-wide adoption plus finance, strategy and analytics.",
    "Agents: 2 in Q4 2022 → 50 in production and 60-plus in development by April 2026, about 15 new a month; 'a dramatic acceleration of agentic process transformation, including in my finance team'.",
    "Return discipline: on track for 10–15% cost reductions and 10–15% revenue increases from targeted LLM and agentic use cases (September 2025).",
    "Lending: generative-AI SBA loan origination through Casca, alongside Live Oak — the number-one and number-two SBA 7(a) lenders; AI-personalised deposit offers.",
    "Scale and structure: Veritex ($1.9 billion, closed October 2025) and Cadence ($7.4 billion, closed Q1 2026) take the bank to $284 billion; a fintech venture studio with Alloy Partners (October 2025); an American Banker Innovation of the Year 2026 award with Payabli.",
    "2026 expense discipline: some technology hiring and spending trimmed to hold expense growth in the lower half of guidance — AI investment is judged inside the budget, not around it."
  ],
  leadership: [
    { name: "Zach Wasserman", role: "Chief Financial Officer; leads AI strategy, strategy and data analytics", sources: ["fortune-cfo-2026", "wsj-wasserman-2025", "ab-podcast-2025"] },
    { name: "Steve Steinour", role: "Chairman and CEO", sources: ["reuters-cadence-staff-2025"] },
    { name: "Brant Standridge", role: "President (from September 2026)", sources: ["bankingdive-president-2026"] },
    { name: "Senthil Kumar", role: "Chief Risk Officer (from February 2026, ex-BNY)", sources: ["bankingdive-cro-2026"] }
  ],
  timeline: [
    { date: "2022-12-31", title: "Two AI agents in production", detail: "The baseline Wasserman later cites for the agentic build-out.", sources: ["fortune-cfo-2026"] },
    { date: "2025-03-04", title: "'It's a tremendous priority': the CFO on AI", detail: "Wasserman explains why finance leads AI strategy at the bank.", sources: ["ab-podcast-2025"] },
    { date: "2025-03-19", title: "AI to personalise deposit offers", detail: "Among regional lenders using AI on customer data to compete for deposits.", sources: ["bloomberg-deposits-2025"] },
    { date: "2025-08-19", title: "Invests in and deploys Casca's gen-AI lending", detail: "With Live Oak, to automate SBA loan origination.", sources: ["ab-casca-2025"] },
    { date: "2025-09-11", title: "The return target: 10–15% costs, 10–15% revenue", detail: "Wasserman's mission to obtain a return on generative AI, balancing urgency with risk.", sources: ["ab-return-2025"] },
    { date: "2025-09-24", title: "Framework for deploying AI at scale", detail: "Operating models, oversight and governance, in a WSJ/Deloitte interview.", sources: ["wsj-wasserman-2025"] },
    { date: "2025-10-27", title: "Fintech venture studio with Alloy Partners", detail: "'It's not just about keeping pace, it's about setting the pace' — acting 'more like a tech company'.", sources: ["ab-venture-studio-2025"] },
    { date: "2025-10-27", title: "Agrees to buy Cadence Bank for $7.4 billion", detail: "Second Texas deal in six months after Veritex; some Cadence roles to be cut.", sources: ["bankingdive-cadence-2025", "reuters-cadence-staff-2025"] },
    { date: "2025-10-23", title: "Treasury Management Connectivity Ecosystem", detail: "API-first platform with 500-plus interfaces and intelligent automation for business clients.", sources: ["hban-connectivity-2025"] },
    { date: "2026-02-05", title: "BNY's former CRO hired as risk chief", detail: "Senthil Kumar succeeds Helga Houston.", sources: ["bankingdive-cro-2026"] },
    { date: "2026-04-24", title: "50 agents in production, 60-plus in development", detail: "About 15 new agents a month; the CFO as AI strategist.", sources: ["fortune-cfo-2026"] },
    { date: "2026-04-24", title: "Technology spending trimmed to hold expense guidance", detail: "Marketing and branches protected; some hiring and tech spend cut.", sources: ["bankingdive-expenses-2026"] },
    { date: "2026-06-01", title: "Innovation of the Year 2026, with Payabli", detail: "American Banker honoree.", sources: ["ab-innovation-2026"] },
    { date: "2026-09-08", title: "Brant Standridge named president", detail: "Succession planning at the holding company and the bank.", sources: ["bankingdive-president-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Agentic process automation", detail: "50 agents in production across the business, including finance.", status: "In production", sources: ["fortune-cfo-2026"] },
    { useCase: "credit-underwriting", name: "Gen-AI SBA loan origination (Casca)", detail: "Automating much of the small-loan process to approve in a day or two.", status: "In production", sources: ["ab-casca-2025", "ab-sba-2026"] },
    { useCase: "customer-chatbots", name: "AI-personalised deposit offers", detail: "AI on customer data to tailor deposit products.", status: "In production", sources: ["bloomberg-deposits-2025"] },
    { useCase: "generative-agentic-ai", name: "Treasury connectivity automation", detail: "Intelligent automation across 500-plus interfaces for business clients.", status: "In production", sources: ["hban-connectivity-2025"] },
    { useCase: "fraud", name: "AI-enabled fraud defence", detail: "Guidance and controls against AI-crafted BEC and impersonation.", status: "In production", sources: ["hban-fraud-2024"] }
  ],
  numbers: [
    { label: "AI agents in production / in development", value: "50 / 60+, ≈ 15 new a month", asOf: "2026-04-24", sources: ["fortune-cfo-2026"] },
    { label: "Return target", value: "10–15% cost reduction and 10–15% revenue increase from targeted use cases", asOf: "2025-09-11", sources: ["ab-return-2025"] },
    { label: "Total assets", value: "$284 billion", asOf: "2026-07-30", sources: ["ft-80bn-2026"] },
    { label: "Cadence acquisition", value: "$7.4 billion", asOf: "2025-10-27", sources: ["bankingdive-cadence-2025"] },
    { label: "Treasury connectivity interfaces", value: "500+", asOf: "2025-10-23", sources: ["hban-connectivity-2025"] }
  ],
  quotes: [
    { who: "Zach Wasserman", role: "Chief Financial Officer", date: "2026-04-24", quote: "It's really a dramatic acceleration of agentic process transformation, which is really important, including in my finance team.", sources: ["fortune-cfo-2026"] },
    { who: "Zach Wasserman", role: "Chief Financial Officer", date: "2025-03-04", quote: "It's a tremendous priority.", sources: ["ab-podcast-2025"] }
  ],
  regulatory: [
    { authority: "occ", why: "National bank; the revised model risk guidance applies, and the OCC's Risk Perspective on gen-AI governance is the frame for 50-plus agents.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "cfpb", why: "Gen-AI loan origination and AI deposit personalisation sit under ECOA and UDAAP.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action", "cfpb-regulation-b-final-rule-2026"] },
    { authority: "federal-reserve", why: "Casca, Payabli and other fintech partners are third-party relationships under interagency guidance.", docSlugs: ["fed-sr-23-4"] },
    { authority: "colorado-ai-act", why: "A Texas- and Colorado-adjacent Southern and Western footprint after Cadence brings state ADMT laws into scope for consumer lending.", docSlugs: ["co-sb26-189"] }
  ],
  suggestions: [
    { title: "Finance-led AI is the cleanest answer to 'where is the ROI?'", detail: "Putting the CFO in charge means every agent carries a business case and a budget line. It also means AI investment gets trimmed with everything else when revenue softens, as it was in April 2026." },
    { title: "Fifteen new agents a month needs an inventory and a kill switch", detail: "At that pace the governance question shifts from approving use cases to managing a fleet — the lifecycle and entitlement controls in the agents section of this site." },
    { title: "Lending is where the consumer-law exposure concentrates", detail: "Gen-AI SBA origination through a fintech partner is efficient and examinable; adverse-action reasons and third-party oversight are the two things to keep in view." },
    { title: "Two acquisitions and an AI build-out at once", detail: "Cadence and Veritex integrations compete with the agent program for the same technology capacity; the 2026 expense trims show that trade-off being made." }
  ],
  faq: [
    { q: "Who leads AI at Huntington Bank?", a: "Chief Financial Officer Zach Wasserman, who joined in 2019 from Visa and also runs strategy and data analytics, has direct responsibility for enterprise-wide AI adoption. He has set a target of 10–15% cost reductions and 10–15% revenue increases from targeted generative and agentic AI use cases." },
    { q: "How many AI agents does Huntington have?", a: "Fifty in production and more than 60 in development as of April 2026, with roughly 15 new agents entering the pipeline each month, up from two agents at the end of 2022, according to the CFO in Fortune." }
  ],
  sources: [
    { id: "fortune-cfo-2026", title: "At Huntington Bancshares, the CFO is also the AI strategist", publisher: "Fortune", url: "https://fortune.com/2026/04/24/huntington-bancshares-cfo-ai-strategist/", date: "2026-04-24" },
    { id: "ab-return-2025", title: "Huntington Bank's plan to obtain a return on gen AI", publisher: "American Banker", url: "https://www.americanbanker.com/news/huntington-banks-plan-to-obtain-a-return-on-generative-ai", date: "2025-09-11" },
    { id: "ab-podcast-2025", title: "'It's a tremendous priority': Huntington CFO Wasserman on AI", publisher: "American Banker", url: "https://www.americanbanker.com/podcast/its-a-tremendous-priority-huntington-cfo-wasserman-on-ai", date: "2025-03-04" },
    { id: "ab-venture-studio-2025", title: "How Huntington Bank is acting 'more like a tech company'", publisher: "American Banker", url: "https://www.americanbanker.com/news/huntington-bank-launches-fintech-venture-studio", date: "2025-10-27" },
    { id: "ab-casca-2025", title: "Huntington, Live Oak to invest in, deploy gen AI-based lending", publisher: "American Banker", url: "https://www.americanbanker.com/news/huntington-live-oak-to-invest-in-deploy-gen-ai-based-lending", date: "2025-08-19" },
    { id: "ab-sba-2026", title: "How AI is quickly overhauling one segment of SBA lending", publisher: "American Banker", url: "https://www.americanbanker.com/news/how-ai-is-quickly-overhauling-one-segment-of-sba-lending", date: "2026-04-28" },
    { id: "ab-innovation-2026", title: "Innovation of The Year 2026", publisher: "American Banker", url: "https://www.americanbanker.com/list/innovation-of-the-year-2026", date: "2026-06-01" },
    { id: "wsj-wasserman-2025", title: "Banking on AI: Huntington's CFO on Innovation and Risk Oversight", publisher: "The Wall Street Journal (Deloitte CFO Journal)", url: "https://deloitte.wsj.com/cfo/banking-on-ai-huntingtons-cfo-on-innovation-and-risk-oversight-80b35afb", date: "2025-09-15" },
    { id: "bloomberg-deposits-2025", title: "Fifth Third Among Banks Using AI to Help Lure Customer Deposits", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2025-03-19/fifth-third-among-banks-using-ai-to-help-lure-customer-deposits", date: "2025-03-19" },
    { id: "reuters-cadence-staff-2025", title: "Huntington to trim Cadence staff after acquisition, CEO says", publisher: "Reuters", url: "https://www.reuters.com/business/huntington-trim-cadence-staff-after-acquisition-ceo-says-2025-12-08/", date: "2025-12-08" },
    { id: "bankingdive-cadence-2025", title: "Huntington to buy Cadence Bank for $7.4B", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/huntington-buying-cadence-bank-74b-acquisition/803832/", date: "2025-10-27" },
    { id: "bankingdive-expenses-2026", title: "Huntington whittles expense growth", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/huntington-bank-expense-growth-cfo-wasserman-earnings/818409/", date: "2026-04-24" },
    { id: "bankingdive-cro-2026", title: "Huntington hires BNY alum as next risk chief", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/huntington-hires-risk-chief-senthil-kumar-bny-citi-helga-houston-cadence/811494/", date: "2026-02-05" },
    { id: "bankingdive-president-2026", title: "Huntington elevates Standridge to president", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/huntington-bank-standridge-president/829786/", date: "2026-09-08" },
    { id: "hban-connectivity-2025", title: "Huntington Bank Announces Treasury Management Connectivity Ecosystem", publisher: "Huntington", url: "https://ir.huntington.com/news-presentations/press-releases/detail/949/huntington-bank-announces-treasury-management-connectivity-ecosystem-to-empower-businesses-with-more-sophisticated-personalized-financial-intelligence", date: "2025-10-23" },
    { id: "hban-fraud-2024", title: "AI Fraud Prevention & Best Practices", publisher: "Huntington", url: "https://www.huntington.com/Commercial/insights/cybersecurity/ai-enabled-threats", date: "2024-08-28" },
    { id: "ft-80bn-2026", title: "Huntington Bank Commits $80 Billion to Support Affordable Housing, Small Businesses and Local Communities (boilerplate: $284 billion assets)", publisher: "PR Newswire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=600-202607301600PR_NEWS_USPRX____CL15998-1", date: "2026-07-30" }
  ],
  lastUpdated: "2026-09-09"
};

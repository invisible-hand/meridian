import type { Bank } from "@/lib/banks";

export const BMO_US: Bank = {
  slug: "bmo-us",
  name: "BMO (U.S.)",
  shortName: "BMO",
  ticker: "BMO",
  hq: "Chicago, IL (BMO Financial Group: Toronto)",
  fedRank: 16,
  leadBank: "BMO Bank, N.A. (BMO Financial Corp.)",
  assetsUsdMillions: 251965,
  charter: "National bank (OCC)",
  posture: "96% employee adoption, a chief AI and quantum officer, an institute, and a stated refusal to use AI as a layoff tool — with underwriting agents as the proof.",
  platform: {
    name: "Lumi, Aura and the Institute for Applied AI & Quantum",
    detail: "Lumi Assistant gives Team BMO instant access to more than 8,000 policies and procedures in English and French; Aura, launched in 2026, is the first agent in a program to make commercial underwriting 50% faster by 2028, drafting credit-assessment commentary that underwriters review. Both sit under the BMO Institute for Applied Artificial Intelligence & Quantum, created in April 2026 as an enterprise centre of excellence under chief AI and quantum officer Kristin Milchanowski.",
    sources: ["bmo-lumi-2025", "bmo-aura-2026", "bmo-institute-2026"]
  },
  answerFirst:
    "BMO's AI program is run from group level in Toronto and lands squarely in the US bank, which is the group's growth priority: AI adoption above 96% of employees, intelligent agents supporting front-line and operations teams, and a 2026 target to cut commercial underwriting time in half by 2028 with Aura, its first credit agent. The organisational choice is distinctive — a chief AI and quantum officer, Kristin Milchanowski, who founded an Institute for Applied AI & Quantum in April 2026, hosts a podcast on 'return on intelligence' and holds a provisional patent on a quantum algorithm — and so is the labour stance: she calls AI-related layoffs 'lazy' and says BMO will grow while keeping headcount level. Together with a Codat-powered machine-learning engine that recommends what to sell business clients, an Anthropic-built financial-crimes agent from FIS that BMO is among the first to deploy, and a bank-anchored tokenised-cash platform, it is one of the more fully described AI operating models among the regionals.",
  keyPoints: [
    "AI adoption above 96% of employees, with intelligent agents supporting frontline and operational teams; Evident ranks BMO among the world's top 10 banks for AI innovation.",
    "April 2026: BMO Institute for Applied Artificial Intelligence & Quantum, an enterprise-wide centre of excellence; Kristin Milchanowski appointed Chief AI & Quantum Officer and founding director.",
    "Aura (2026): a generative agent that drafts commercial credit-assessment commentary for underwriters — the first step toward 50% faster underwriting by 2028; underwriters remain accountable for the decision.",
    "Lumi Assistant (2025): an award-winning employee assistant over 8,000-plus Canadian P&BB policies and procedures, bilingual.",
    "Partnerships: Codat machine learning to recommend next products for business clients (May 2026); among the first to deploy FIS's Anthropic-built financial-crimes agent (May 2026); tokenised cash on Google Cloud Universal Ledger with CME (March 2026).",
    "Labour stance: 'It's lazy' — Milchanowski on AI-related layoffs; BMO says it can grow while keeping headcount level."
  ],
  leadership: [
    { name: "Kristin Milchanowski", role: "Chief AI & Quantum Officer; Founding Director, BMO Institute for Applied AI & Quantum", sources: ["bmo-institute-2026", "ab-milchanowski-2026"] },
    { name: "Aron Levine", role: "Group Head and President, BMO U.S. (from July 2025, ex-Bank of America)", sources: ["reuters-levine-2025"] },
    { name: "Steve Tennyson", role: "Chief Technology & Operations Officer", sources: ["bmo-institute-2026"] },
    { name: "Mathew Mehrotra", role: "Group Head, Canadian Personal and Business Banking (digital sales, agile)", sources: ["ab-mehrotra-2026"] }
  ],
  timeline: [
    { date: "2024-10-01", title: "Milchanowski becomes chief AI and data officer", detail: "Responsible for enterprise-wide AI, data, analytics and robotics strategy.", sources: ["ab-milchanowski-2026"] },
    { date: "2025-06-05", title: "Aron Levine hired from Bank of America to lead BMO U.S.", detail: "US personal, business, commercial and wealth businesses restructured under one leader.", sources: ["reuters-levine-2025"] },
    { date: "2025-06-24", title: "Lumi Assistant introduced", detail: "Instant access to 8,000-plus policies and procedures for Canadian P&BB teams.", sources: ["bmo-lumi-2025"] },
    { date: "2025-06-24", title: "Joins FINOS effort on vendor-neutral AI standards", detail: "With Citi, Morgan Stanley and RBC, alongside AWS, Microsoft and Google Cloud.", sources: ["bankingdive-finos-2025"] },
    { date: "2026-03-17", title: "130 new California and 15 Arizona branches planned", detail: "The US growth plan after selling 138 branches to First Citizens.", sources: ["reuters-california-2026"] },
    { date: "2026-03-24", title: "Tokenised cash platform on Google Cloud Universal Ledger", detail: "First bank to offer CME Group's tokenised cash solution, 24/7.", sources: ["wsj-tokenised-2026"] },
    { date: "2026-04-09", title: "Institute for Applied AI & Quantum established", detail: "Milchanowski appointed Chief AI & Quantum Officer; adoption above 96%.", sources: ["bmo-institute-2026", "bankingdive-institute-2026"] },
    { date: "2026-04-24", title: "'Return on Intelligence' podcast launched", detail: "Interviews on applying AI and quantum across businesses.", sources: ["bmo-podcast-2026"] },
    { date: "2026-05-01", title: "Quantum algorithm patent for earthquake prediction", detail: "Milchanowski's provisional patent, part of the US expansion story.", sources: ["bloomberg-quantum-2026"] },
    { date: "2026-05-04", title: "Codat machine learning for business-client recommendations", detail: "Payments and payables data via APIs drive next-product suggestions for salespeople.", sources: ["ab-codat-2026"] },
    { date: "2026-05-04", title: "Among the first to deploy FIS's Anthropic-built AML agent", detail: "Compresses investigations from hours to minutes; broader availability in H2 2026.", sources: ["ft-fis-anthropic-2026"] },
    { date: "2026-06-17", title: "'It's lazy': AI layoffs rejected", detail: "BMO will grow while keeping headcount level, using AI.", sources: ["ab-lazy-2026"] },
    { date: "2026-07-09", title: "SmartDecision AI-enhanced insurance underwriting", detail: "Real-time decisions on life applications up to $5 million.", sources: ["ft-smartdecision-2026"] },
    { date: "2026-08-06", title: "Aura: 50% faster underwriting by 2028", detail: "First agent in the commercial-credit transformation, with human review.", sources: ["bmo-aura-2026"] }
  ],
  useCases: [
    { useCase: "credit-underwriting", name: "Aura commercial credit agent", detail: "Drafts credit-assessment commentary from approved internal systems; underwriters review.", status: "Rolling out", sources: ["bmo-aura-2026"] },
    { useCase: "generative-agentic-ai", name: "Lumi Assistant", detail: "Employee assistant over policies and procedures.", status: "In production", sources: ["bmo-lumi-2025"] },
    { useCase: "aml-kyc", name: "FIS financial-crimes agent (Anthropic)", detail: "AML investigations assembled and triaged by an agent.", status: "Pilot", sources: ["ft-fis-anthropic-2026"] },
    { useCase: "customer-chatbots", name: "Next Best Offer with Codat", detail: "Machine learning on payments data recommends products to bankers.", status: "In production", sources: ["ab-codat-2026", "bmo-nbo-2026"] },
    { useCase: "credit-underwriting", name: "SmartDecision insurance underwriting", detail: "AI-enhanced real-time life-insurance decisions.", status: "In production", sources: ["ft-smartdecision-2026"] },
    { useCase: "governance-general", name: "Responsible AI framework", detail: "Accountability, reliability, security, explainability, transparency, fairness, privacy, sustainability.", status: "In production", sources: ["bmo-aura-2026"] }
  ],
  numbers: [
    { label: "Employee AI adoption", value: "> 96%", asOf: "2026-04-24", sources: ["bmo-podcast-2026"] },
    { label: "Underwriting speed target", value: "50% faster by 2028", asOf: "2026-08-06", sources: ["bmo-aura-2026"] },
    { label: "Policies indexed by Lumi", value: "8,000+", asOf: "2025-06-24", sources: ["bmo-lumi-2025"] },
    { label: "Group total assets", value: "$1.5 trillion (Jan 31, 2026)", asOf: "2026-04-09", sources: ["bmo-institute-2026"] },
    { label: "Planned US branches", value: "130 California + 15 Arizona over five years", asOf: "2026-03-17", sources: ["reuters-california-2026"] }
  ],
  quotes: [
    { who: "Kristin Milchanowski", role: "Chief AI & Quantum Officer", date: "2026-06-17", quote: "It's lazy.", sources: ["ab-lazy-2026"] },
    { who: "Steve Tennyson", role: "Chief Technology & Operations Officer", date: "2026-04-09", quote: "BMO is committed to building AI and Quantum capabilities that are innovative, trusted and centered on our clients.", sources: ["bmo-institute-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "BMO Bank N.A. is a national bank; the revised model risk guidance covers Aura-style credit models.", docSlugs: ["occ-bulletin-2026-13"] },
    { authority: "federal-reserve", why: "BMO Financial Corp. is the US intermediate holding company; SR 23-4 governs Codat, FIS and Google Cloud relationships.", docSlugs: ["fed-sr-23-4", "fed-sr-26-2"] },
    { authority: "fincen", why: "An Anthropic-built AML agent runs inside the BSA/AML program the 2026 proposed rule reshapes.", docSlugs: ["fincen-aml-cft-program-nprm-2026"] },
    { authority: "cfpb", why: "US consumer and small-business lending under ECOA; adverse-action duties apply to AI-assisted decisions.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "california", why: "The California expansion brings the CPPA's automated decision-making regulations into scope.", docSlugs: ["ca-cppa-admt-risk-cyber-regulations-2025"] }
  ],
  suggestions: [
    { title: "A credit agent with a published speed target is a governance commitment", detail: "'50% faster by 2028' will be measured; Aura's human-review design and the responsible-AI framework it cites are what supervisors will test when speed pressures accuracy." },
    { title: "The no-layoff stance sets a benchmark competitors will be asked about", detail: "'Grow while keeping headcount level' is a testable claim; it also shapes how the workforce receives 96% adoption." },
    { title: "Vendor agents inside the AML program", detail: "Being first to deploy FIS's Anthropic-built agent puts BMO ahead on a use case regulators reward — and inside the third-party-risk expectations for critical activities." },
    { title: "Quantum is branding today and a risk-model tomorrow", detail: "The institute's quantum remit is unusual in banking; the earthquake-prediction patent reads as expansion narrative, but quantum-safe cryptography is the part supervisors will care about." }
  ],
  faq: [
    { q: "What is Aura at BMO?", a: "Aura is a generative-AI assistant launched in 2026 as the first agent in BMO's program to make commercial underwriting 50% faster by 2028. It reviews information from approved internal systems and drafts commentary for key sections of commercial credit submissions, so underwriters start from a structured draft rather than a blank page; underwriters remain responsible for reviewing it and for the lending decision." },
    { q: "Who is BMO's chief AI officer?", a: "Dr. Kristin Milchanowski, BMO's chief AI and data officer since October 2024, was appointed Chief AI & Quantum Officer on April 6, 2026 and is founding director of the BMO Institute for Applied Artificial Intelligence & Quantum. She is a member of the technology and operations executive committee and hosts the bank's 'Return on Intelligence' podcast." }
  ],
  sources: [
    { id: "bmo-institute-2026", title: "BMO Establishes Institute for Applied Artificial Intelligence & Quantum", publisher: "BMO", url: "https://newsroom.bmo.com/2026-04-09-BMO-Establishes-Institute-for-Applied-Artificial-Intelligence-Quantum", date: "2026-04-09" },
    { id: "bmo-podcast-2026", title: "BMO Launches Return on Intelligence Podcast", publisher: "BMO", url: "https://newsroom.bmo.com/2026-04-24-BMO-Launches-Return-on-Intelligence-Podcast-AI,-Quantum,-and-the-New-Rules-of-Decision-Making", date: "2026-04-24" },
    { id: "bmo-aura-2026", title: "Aura: Helping power BMO's goal of 50% faster underwriting by 2028", publisher: "BMO AI Hub", url: "https://ai.bmo.com/our-stories/aura-helping-power-bmos-goal-of-50-faster-underwriting-by-2028", date: "2026-08-06" },
    { id: "bmo-nbo-2026", title: "Next Best Offer: Turning data into timely client conversations", publisher: "BMO AI Hub", url: "https://ai.bmo.com/our-stories/next-best-offer-turning-data-into-timely-client-conversations", date: "2026-08-06" },
    { id: "bmo-lumi-2025", title: "Meet Lumi Assistant: BMO's award-winning AI tool empowering Team BMO", publisher: "BMO", url: "https://www.bmo.com/en-ca/main/about-bmo/news-insights/blog/meet-lumi-assistant-bmos-award-winning-ai-tool-empowering-team-bmo", date: "2025-06-24" },
    { id: "ab-milchanowski-2026", title: "Kristin Milchanowski's AI for All initiative", publisher: "American Banker", url: "https://www.americanbanker.com/news/bmos-kristin-milchanowski-is-39-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "ab-lazy-2026", title: "'It's lazy:' BMO's Milchanowski on AI-related layoffs", publisher: "American Banker", url: "https://www.americanbanker.com/news/its-lazy-bmos-milchanowski-on-ai-related-layoffs", date: "2026-06-17" },
    { id: "ab-codat-2026", title: "How BMO uses AI to get more of business clients' business", publisher: "American Banker", url: "https://www.americanbanker.com/news/how-bmo-uses-ai-to-get-more-of-business-clients-business", date: "2026-05-04" },
    { id: "ab-mehrotra-2026", title: "BMO's Mathew Mehrotra thinks before innovating", publisher: "American Banker", url: "https://www.americanbanker.com/news/bmos-mat-mehrotra-is-19-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "reuters-levine-2025", title: "BMO hires former BofA executive Aron Levine to lead US units, rejigs teams", publisher: "Reuters", url: "https://www.reuters.com/en/bmo-hires-former-bofa-executive-aron-levine-lead-us-rejigs-teams-2025-06-05/", date: "2025-06-05" },
    { id: "reuters-california-2026", title: "Bank of Montreal to open over 130 new California locations", publisher: "Reuters", url: "https://www.reuters.com/business/finance/bank-montreal-open-over-130-new-california-locations-2026-03-17/", date: "2026-03-17" },
    { id: "bloomberg-quantum-2026", title: "BMO Turns to AI and Quantum Computing to Predict Earthquakes", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-05-01/bmo-turns-to-ai-and-quantum-computing-to-predict-earthquakes", date: "2026-05-01" },
    { id: "wsj-tokenised-2026", title: "Bank of Montreal Plans Tokenized Cash Platform", publisher: "The Wall Street Journal", url: "https://www.wsj.com/finance/banking/bank-of-montreal-plans-tokenized-cash-platform-0ee00c73", date: "2026-03-24" },
    { id: "ft-fis-anthropic-2026", title: "FIS Brings Agentic AI to Banking with Anthropic, Starting with Financial Crimes", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202605041800BIZWIRE_USPRX____20260504_BW126906-1", date: "2026-05-04" },
    { id: "ft-smartdecision-2026", title: "BMO Insurance launches AI-enhanced SmartDecision tool", publisher: "CNW via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202607090730CANADANWCANADAPR_C9043-1", date: "2026-07-09" },
    { id: "bankingdive-institute-2026", title: "BMO launches AI, quantum computing institute", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/bmo-launches-ai-quantum-computing-institute/817076/", date: "2026-04-09" },
    { id: "bankingdive-finos-2025", title: "Banking industry, big tech unite to forge AI adoption guidelines", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/banks-cloud-providers-ai-governance-standards-finos-citi-morgan-stanley-rbc-bmo/751698/", date: "2025-06-24" }
  ],
  lastUpdated: "2026-09-09"
};

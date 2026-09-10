import type { Bank } from "@/lib/banks";

export const PNC: Bank = {
  slug: "pnc",
  name: "PNC Financial Services",
  shortName: "PNC",
  ticker: "PNC",
  hq: "Pittsburgh, PA",
  fedRank: 8,
  leadBank: "PNC Bank, N.A.",
  assetsUsdMillions: 567949,
  charter: "National bank (OCC)",
  posture: "An 'AI factory': own data centres, own GPUs, own small and large models — to stop paying for tokens.",
  platform: {
    name: "PNC AI factory",
    detail: "Announced by CEO Bill Demchak in June 2026: PNC is acquiring data centres, buying Nvidia chips and building its own large and small language models for banking tasks such as fraud blocking and call centres, alongside an agentic development system that built its new mobile app.",
    sources: ["ab-factory-2026", "ab-factory-costs-2026", "pnc-app-2026"]
  },
  answerFirst:
    "PNC is the large bank that has said most plainly it does not want to rent its AI. In June 2026 CEO Bill Demchak told a Morgan Stanley conference the bank is 'building our own AI factory' — its own GPU compute and data centres, its own large and small language models — so that 'any impact that AI can have on the productivity of a bank' is not 'taken away by the cost of tokens'. The bank confirmed the goal is to avoid vendor lock-in and reduce reliance on usage-based pricing while still mixing third-party and internal models by use case. The visible outputs so far are an agentic software-development system that built the new PNC mobile app, patented data-streaming architecture, healthcare claims AI, and a data chief who says AI without curated data is 'interesting math on a whiteboard'. It is a $600 billion bank with a stated ambition to reach $1 trillion, choosing infrastructure over subscriptions.",
  keyPoints: [
    "June 2026: Demchak's 'AI factory' — own GPU compute, data centres and Nvidia chips; in-house large and small language models for fraud and call-centre tasks; 'the most efficient tool oftentimes isn't the $35 token, it's the $1.50 token'.",
    "A spokesperson: the bank is positioning to 'avoid vendor lock-in' and reduce 'long-term reliance on external, usage-based pricing models', while continuing to use a mix of third-party and internal models.",
    "July 2026: a rebuilt PNC Mobile app, built with the bank's agentic development system and patented data-streaming microservices architecture.",
    "Head of data and automation Ned Carroll: 'AI, absent well-organized, well-curated data, is nothing more than interesting math on a whiteboard'; PNC is adopting the sector's 'nutrition label' idea for model data.",
    "PNC Claim Predictor uses AI to catch inaccurate healthcare insurance claims before submission; treasury-management content positions AI as a fraud gatekeeper.",
    "Scale ambition: the $4 billion-plus FirstBank acquisition (announced September 2025, converted June 2026) and a stated goal to double to $1 trillion of assets."
  ],
  leadership: [
    { name: "Bill Demchak", role: "Chairman and CEO", sources: ["ab-factory-2026", "bloomberg-oddlots-2026"], linkedin: "https://www.linkedin.com/in/william-demchak-b4b74b58/" },
    { name: "Ned Carroll", role: "Head of Data and Automation", sources: ["ab-nutrition-2026", "ab-factory-2026"], linkedin: "https://www.linkedin.com/in/ned-carroll-1a65a51a1/" },
    { name: "Deborah Guild", role: "Head of Enterprise Technology and Security", sources: ["ab-guild-2025"], linkedin: "https://www.linkedin.com/in/deborahguild/" }
  ],
  timeline: [
    { date: "2024-04-19", title: "Treasury AI survey: 76% of clients on an AI journey", detail: "PNC Treasury Management surveys finance professionals on AI adoption and goals.", sources: ["pnc-treasury-ai-2024"] },
    { date: "2025-09-08", title: "Agrees to buy FirstBank for more than $4 billion", detail: "Demchak's step toward a $1 trillion bank; a western footprint in Colorado and Arizona.", sources: ["wsj-trillion-2025"] },
    { date: "2026-01-26", title: "Demchak on useful generative AI, on Odd Lots", detail: "Branches, regulation, scale — and what the bank sees in practical gen-AI applications.", sources: ["bloomberg-oddlots-2026"] },
    { date: "2026-05-15", title: "Candidate AI guidelines published", detail: "Rules for how job applicants may use AI, from a bank that calls itself 'a forward-thinking technology company'.", sources: ["pnc-candidate-ai-2026"] },
    { date: "2026-06-09", title: "'We are building our own AI factory'", detail: "Demchak at the Morgan Stanley US Financials Conference: own GPUs, own models, less reliance on external tokens.", sources: ["ab-factory-2026", "ab-factory-costs-2026"] },
    { date: "2026-06-22", title: "FirstBank conversion completed", detail: "780,000 customers, 1,620 employees and 95 branches move to PNC systems.", sources: ["pnc-firstbank-2026"] },
    { date: "2026-07-07", title: "New mobile app built with agentic development", detail: "PNC's agentic development system and patented data-streaming microservices architecture.", sources: ["pnc-app-2026", "ab-app-2026"] },
    { date: "2026-09-08", title: "Data 'nutrition labels' for AI models", detail: "Carroll on the Financial Services Sector Coordinating Council's data-labelling concept, which PNC is putting into action.", sources: ["ab-nutrition-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Agentic software development", detail: "The system that built the new PNC Mobile app.", status: "In production", sources: ["pnc-app-2026"] },
    { useCase: "fraud", name: "In-house fraud-blocking models", detail: "One of the named targets for the bank's own language models.", status: "Announced", sources: ["ab-factory-2026"] },
    { useCase: "customer-chatbots", name: "Call-centre models", detail: "Small and large models for call-centre tasks, built in-house.", status: "Announced", sources: ["ab-factory-2026"] },
    { useCase: "generative-agentic-ai", name: "PNC Claim Predictor", detail: "AI and machine learning to flag inaccurate healthcare claims before submission.", status: "In production", sources: ["pnc-healthcare-ai"] },
    { useCase: "governance-general", name: "Model-data nutrition labels", detail: "Adopting the FSSCC concept for documenting training and input data.", status: "Rolling out", sources: ["ab-nutrition-2026"] }
  ],
  numbers: [
    { label: "Total assets (holding company)", value: "≈ $603 billion", asOf: "2026-06-11", sources: ["ab-factory-2026"] },
    { label: "FirstBank conversion", value: "780,000 customers, 95 branches", asOf: "2026-06-22", sources: ["pnc-firstbank-2026"] },
    { label: "Stated size ambition", value: "$1 trillion of assets", asOf: "2025-09-11", sources: ["wsj-trillion-2025"] }
  ],
  quotes: [
    { who: "Bill Demchak", role: "Chairman and CEO", date: "2026-06-09", quote: "We are building our own AI factory. We will have our own GPU compute. We will not be as reliant on burning external tokens.", sources: ["ab-factory-2026"] },
    { who: "Ned Carroll", role: "Head of Data and Automation", date: "2026-09-08", quote: "AI, absent well-organized, well-curated data, is nothing more than interesting math on a whiteboard.", sources: ["ab-nutrition-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "National bank; in-house models mean the full model-development and validation expectations of the revised guidance apply to PNC's own LLMs.", docSlugs: ["occ-bulletin-2026-13"] },
    { authority: "federal-reserve", why: "Holding-company supervisor; owning compute reduces third-party dependence but concentrates operational risk in-house.", docSlugs: ["fed-sr-26-2", "fed-sr-23-4"] },
    { authority: "basel-committee", why: "The 'AI factory' is, in effect, a response to the concentration risk the Basel third-party principles and the FSB name in cloud and model providers.", docSlugs: ["bcbs-third-party-risk-principles-2025", "bcbs-239"] },
    { authority: "treasury", why: "The data 'nutrition label' PNC is adopting is a Treasury-convened AIEOG deliverable alongside the FS AI RMF.", docSlugs: ["treasury-fs-ai-rmf-and-ai-lexicon-2026"] },
    { authority: "colorado-ai-act", why: "The FirstBank acquisition makes Colorado a home market: the ADMT Act applies from January 1, 2027.", docSlugs: ["co-sb26-189"] }
  ],
  suggestions: [
    { title: "Owning the factory swaps vendor risk for operational risk", detail: "Supervisors have asked banks to manage concentration in a few model and cloud providers; PNC's answer is to become its own provider. That moves the questions to capacity planning, resilience and model validation of home-built LLMs." },
    { title: "Token economics are now a board-level input", detail: "Demchak's $35-versus-$1.50 token framing is the clearest public statement that AI productivity gains depend on inference cost. Expect other regionals to cite it." },
    { title: "Data quality is the constraint the bank chose to talk about", detail: "'Interesting math on a whiteboard' and the nutrition-label work put PNC on the BCBS 239 side of the AI debate: lineage first, models second." },
    { title: "Agentic development is the proof point, not agentic banking", detail: "The rebuilt mobile app shows agents building software; customer-facing agents are not yet part of the public record." }
  ],
  faq: [
    { q: "What is PNC's 'AI factory'?", a: "In June 2026 PNC CEO Bill Demchak said the bank is building its own AI factory: acquiring its own data centres, buying Nvidia GPUs and building its own large and small language models for banking tasks such as blocking fraud and running call centres. The stated aim is to reduce dependence on external, usage-based AI pricing and avoid vendor lock-in, while still using third-party models where they fit the use case." },
    { q: "Does PNC use AI in its mobile app?", a: "The PNC Mobile app launched in July 2026 was built with the bank's agentic software-development system on a patented data-streaming microservices architecture, which the bank says lets it update the app rapidly. The app itself is a redesigned, personalised banking interface." }
  ],
  sources: [
    { id: "ab-factory-2026", title: "Why PNC is building its own 'AI factory'", publisher: "American Banker", url: "https://www.americanbanker.com/news/why-pnc-is-building-its-own-ai-factory", date: "2026-06-11" },
    { id: "ab-factory-costs-2026", title: "PNC's solution to rising AI costs: build its own AI", publisher: "American Banker", url: "https://www.americanbanker.com/news/pncs-solution-to-rising-ai-costs-build-its-own-ai", date: "2026-06-12" },
    { id: "ab-nutrition-2026", title: "Do banks need a nutrition label for their AI model data?", publisher: "American Banker", url: "https://www.americanbanker.com/news/do-banks-need-a-nutrition-label-for-their-ai-model-data", date: "2026-09-08" },
    { id: "ab-app-2026", title: "PNC Bank rolls out new mobile banking app", publisher: "American Banker", url: "https://www.americanbanker.com/news/pnc-bank-rolls-out-new-mobile-banking-app", date: "2026-07-08" },
    { id: "ab-guild-2025", title: "The Most Powerful Women to Watch, No. 8, Deborah Guild, PNC Bank", publisher: "American Banker", url: "https://www.americanbanker.com/news/2025-the-most-powerful-women-to-watch-no-8-deborah-guild-pnc-bank", date: "2025-09-24" },
    { id: "pnc-app-2026", title: "PNC's New Mobile App Delivers an Intuitive, Personalized Experience", publisher: "PNC via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202607070807PR_NEWS_USPRX____NE98867-1", date: "2026-07-07" },
    { id: "pnc-firstbank-2026", title: "PNC Completes FirstBank Customer Conversion", publisher: "PNC via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202606220745PR_NEWS_USPRX____NE88394-1", date: "2026-06-22" },
    { id: "pnc-healthcare-ai", title: "AI In Healthcare: How Will It Be Used In Your Practice?", publisher: "PNC", url: "https://www.pnc.com/insights/small-business/industry-insights/trends-in-healthcare-does-ai-make-financial-sense-for-you.html", date: "2025-06-01" },
    { id: "pnc-treasury-ai-2024", title: "Futuristic Finance: Unlocking AI's Possibilities for Treasury Management", publisher: "PNC", url: "https://www.pnc.com/content/dam/pnc-com/pdf/corporateandinstitutional/PNCThoughtLeadership/futuristic-finance-unlocking-ais-possibilities-for-treasury-management.pdf", date: "2024-04-19" },
    { id: "pnc-candidate-ai-2026", title: "Candidate AI Guidelines", publisher: "PNC Careers", url: "https://careers.pnc.com/global/en/candidate-ai-guidelines", date: "2026-05-15" },
    { id: "bloomberg-oddlots-2026", title: "What It Takes to Build One of The World's Biggest Banks", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-01-26/how-pnc-became-one-of-the-world-s-biggest-banks", date: "2026-01-26" },
    { id: "wsj-trillion-2025", title: "The CEO Who Wants to Double the Size of His Bank to $1 Trillion", publisher: "The Wall Street Journal", url: "https://www.wsj.com/finance/banking/the-ceo-who-wants-to-double-the-size-of-his-bank-to-1-trillion-fa5fa70f", date: "2025-09-11" }
  ],
  lastUpdated: "2026-09-09"
};

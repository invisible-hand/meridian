import type { Bank } from "@/lib/banks";

export const FULTON: Bank = {
  slug: "fulton",
  name: "Fulton Financial Corporation",
  shortName: "Fulton",
  ticker: "FULT",
  hq: "Lancaster, PA",
  fedRank: 63,
  leadBank: "Fulton Bank, N.A.",
  assetsUsdMillions: 32108,
  charter: "National bank (OCC)",
  posture: "A $34 billion Mid-Atlantic community-banking group that converted a struggling New Jersey acquisition onto its platforms in three weeks, talks to customers about AI in investing and budgeting, and has produced a head of AI for a peer bank rather than for itself.",
  answerFirst:
    "Fulton Financial, the Lancaster, Pennsylvania parent of Fulton Bank with about $34 billion of assets and more than 215 financial centres across the Mid-Atlantic, has no disclosed AI programme; its public technology record in 2026 is an acquisition integration and customer education. It agreed in November 2025 to pay $243 million in stock for Blue Foundry Bancorp, a money-losing Northern New Jersey bank, received approvals in February, closed in the second quarter and merged Blue Foundry Bank into Fulton Bank on 11 July 2026 with the conversion of its systems onto Fulton's platforms, a schedule chairman, CEO and president Curt Myers said left the bank 'well positioned to deepen existing relationships and drive growth in this expanded footprint'. Second-quarter 2026 net income to common was a record $99.9 million, or $0.52 per share. On AI, the bank speaks to customers rather than about itself: its private-bank article on AI's impact on investing describes advisers exploring 'market research, portfolio optimization, and risk management' with newer AI tools while warning of the risks, and an education-centre guide explains how consumers can use AI budgeting apps. Its 2025 sustainability metrics describe a cybersecurity risk programme under the chief information security officer without mentioning AI. The bank's most visible AI contribution is a person: Nickolaus Lachman, now head of AI and data science at Valley Bank, previously ran Fulton's customer-analytics team. Fulton Bank is a national bank supervised by the OCC, whose 2026 model-risk bulletin and generative-AI risk perspective would govern any future deployment. Treat this as a thin record for a bank whose 2026 was defined by the Blue Foundry integration.",
  keyPoints: [
    "No AI programme, leader, vendor or spend disclosed; AI content is customer education on investing and budgeting.",
    "Blue Foundry Bancorp: $243 million stock deal for a money-losing Northern New Jersey bank (announced November 2025), closed Q2 2026, bank merged and systems converted by 11 July 2026.",
    "Record Q2 2026 net income to common of $99.9 million ($0.52 per share); six-month net income $192.1 million.",
    "Cybersecurity governance documented under the CISO in the 2025 sustainability metrics; no AI governance disclosed.",
    "Talent export: Valley Bank's head of AI and data science previously led Fulton's customer-analytics team.",
    "Accessibility investment: direct customer service in American Sign Language via 360 Direct Access (March 2025)."
  ],
  leadership: [
    { name: "Curt Myers", role: "Chairman, CEO and President", linkedin: "https://www.linkedin.com/in/curt-myers-53a39a15", sources: ["fult-bluefoundry-2026", "fult-q2-2026"] }
  ],
  timeline: [
    { date: "2025-03-10", title: "Customer service in American Sign Language", detail: "Video access to signing representatives through 360 Direct Access.", sources: ["fult-asl-2025"] },
    { date: "2025-06-10", title: "2024 Corporate Social Responsibility report", detail: "'From Values to Value'.", sources: ["fult-csr-2025"] },
    { date: "2025-11-24", title: "Blue Foundry Bancorp acquisition announced", detail: "$243 million in stock for a struggling Northern New Jersey bank.", sources: ["ab-bluefoundry-2025"] },
    { date: "2026-02-23", title: "Regulatory approvals for Blue Foundry", detail: "Closing date set for the second quarter.", sources: ["fult-approvals-2026"] },
    { date: "2026-03-27", title: "2025 sustainability metrics: cyber programme under the CISO", detail: "Risk practices 'streamlined for speed and agility'; no AI reference.", sources: ["fult-esg-2026"] },
    { date: "2026-07-11", title: "Blue Foundry Bank merged and converted onto Fulton platforms", detail: "Customers gain access to 215-plus financial centres and digital platforms.", sources: ["fult-bluefoundry-2026"] },
    { date: "2026-07-22", title: "Record second-quarter 2026 results", detail: "Net income to common $99.9 million; $0.52 per share.", sources: ["fult-q2-2026"] }
  ],
  useCases: [
    { useCase: "third-party-vendors", name: "Blue Foundry systems conversion", detail: "Acquired bank's systems converted onto Fulton's platforms within weeks of the merger.", status: "In production", sources: ["fult-bluefoundry-2026"] },
    { useCase: "cybersecurity", name: "Cybersecurity risk programme", detail: "Identification, measurement and monitoring of cyber risk under the CISO.", status: "In production", sources: ["fult-esg-2026"] },
    { useCase: "governance-general", name: "Customer education on AI tools", detail: "AI in investing (private bank) and AI budgeting apps (education centre).", status: "In production", sources: ["fult-aiinvest-2025", "fult-aibudget-2025"] }
  ],
  numbers: [
    { label: "Second-quarter 2026 net income to common / EPS", value: "$99.9 million (record) / $0.52", asOf: "2026-07-22", sources: ["fult-q2-2026"] },
    { label: "Blue Foundry acquisition", value: "$243 million in stock", asOf: "2025-11-24", sources: ["ab-bluefoundry-2025"] },
    { label: "Financial centres", value: "> 215", asOf: "2026-07-13", sources: ["fult-bluefoundry-2026"] },
    { label: "Total assets", value: "≈ $34 billion", asOf: "2026-07-13", sources: ["fult-bluefoundry-2026"] }
  ],
  quotes: [
    { who: "Curt Myers", role: "Chairman, CEO and President", date: "2026-07-13", quote: "By combining our strengths, we are better positioned to serve our customers, support our communities, and drive long-term growth in New Jersey.", sources: ["fult-bluefoundry-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "Fulton Bank, N.A. is a national bank; any AI in credit, fraud or servicing falls under OCC model-risk and gen-AI expectations.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "federal-reserve", why: "Holding-company oversight of the Blue Foundry integration and third-party technology.", docSlugs: ["fed-sr-23-4", "fed-sr-11-7"] },
    { authority: "cfpb", why: "Consumer and wealth products bring UDAAP and adverse-action duties to any automated decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] }
  ],
  suggestions: [
    { title: "A fast conversion is a technology capability", detail: "Merging a bank and converting its systems inside a quarter shows integration muscle that an AI programme could build on; the bank has not said it intends to." },
    { title: "Customer AI education without bank AI is a gap", detail: "Telling wealth clients how advisers use AI while disclosing none of its own leaves Fulton behind peers of the same size on the question clients now ask." },
    { title: "Watch where the analytics talent goes", detail: "Losing its customer-analytics lead to a peer's AI role is a signal about internal opportunity for data specialists." },
    { title: "The OCC bar applies from day one", detail: "As a national bank Fulton's first AI deployment will be measured against the 2026 model-risk bulletin, so governance documentation should precede any pilot." }
  ],
  faq: [
    { q: "Does Fulton Bank use AI?", a: "Fulton Financial has not disclosed an AI programme, leader, vendor or budget. Its AI-related publications are customer education pieces on how advisers and consumers can use AI tools, and its 2025 sustainability report describes cybersecurity governance without mentioning AI." },
    { q: "What happened with Fulton's Blue Foundry acquisition?", a: "Fulton agreed in November 2025 to buy Blue Foundry Bancorp for $243 million in stock, received regulatory approvals in February 2026, closed the deal in the second quarter, and on 11 July 2026 merged Blue Foundry Bank into Fulton Bank and converted its systems onto Fulton's platforms." }
  ],
  sources: [
    { id: "ab-bluefoundry-2025", title: "Fulton to acquire money-losing New Jersey bank for $243M", publisher: "American Banker", url: "https://americanbanker.com/news/fulton-to-acquire-money-losing-new-jersey-bank-for-243m", date: "2025-11-24" },
    { id: "fult-asl-2025", title: "Fulton Bank Introduces Direct Customer Service in American Sign Language", publisher: "Fulton Bank", url: "https://www.fultonbank.com/About-Fulton-Bank/Media-Room/Fulton-Bank-Introduces-Direct-Customer-Service-in-American-Sign-Language", date: "2025-03-10" },
    { id: "fult-csr-2025", title: "Fulton Bank Releases 2024 Corporate Social Responsibility Report", publisher: "Fulton Financial", url: "https://investor.fultonbank.com/news/news-details/2025/FULTON-BANK-RELEASES-2024-CORPORATE-SOCIAL-RESPONSIBILITY-REPORT", date: "2025-06-10" },
    { id: "fult-aiinvest-2025", title: "AI's Impact on Investing", publisher: "Fulton Private Bank", url: "https://www.fultonbank.com/Investments/Fulton-Private-Bank/Articles/AIs-Impact-on-Investing", date: "2025-09-01" },
    { id: "fult-aibudget-2025", title: "How to Use AI to Save Money and Budget Smarter", publisher: "Fulton Bank", url: "https://www.fultonbank.com/Education-Center/Trending/How-to-Use-AI-to-Save-Money-and-Budget-Smarter", date: "2025-09-01" },
    { id: "fult-approvals-2026", title: "Fulton Financial Corporation and Blue Foundry Bancorp Announce Regulatory Approvals and Anticipated Merger Closing Date", publisher: "Fulton Financial", url: "https://investor.fultonbank.com/news/news-details/2026/FULTON-FINANCIAL-CORPORATION-AND-BLUE-FOUNDRY-BANCORP-ANNOUNCE-REGULATORY-APPROVALS-AND-ANTICIPATED-MERGER-CLOSING-DATE", date: "2026-02-23" },
    { id: "fult-esg-2026", title: "2025 ESG and SASB Metrics", publisher: "Fulton Bank", url: "https://fultonbank.com/-/media/Files/About-Fulton-Bank/CSR/2025-ESG-Metrics.pdf", date: "2026-03-27" },
    { id: "fult-bluefoundry-2026", title: "Fulton Financial Merges Its Blue Foundry Bank Subsidiary into Fulton Bank, N.A.", publisher: "Fulton Financial", url: "https://investor.fultonbank.com/news/news-details/2026/FULTON-FINANCIAL-MERGES-ITS-BLUE-FOUNDRY-BANK-SUBSIDIARY-INTO-FULTON-BANK-N-A-", date: "2026-07-13" },
    { id: "fult-q2-2026", title: "Fulton Financial Corporation Announces Second Quarter 2026 Results", publisher: "Fulton Financial", url: "https://investor.fultonbank.com/news/news-details/2026/Fulton-Financial-Corporation-Announces-Second-Quarter-2026-Results", date: "2026-07-22" }
  ],
  lastUpdated: "2026-09-10"
};

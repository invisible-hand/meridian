import type { Bank } from "@/lib/banks";

export const SIMMONS: Bank = {
  slug: "simmons",
  name: "Simmons First National Corporation",
  shortName: "Simmons Bank",
  ticker: "SFNC",
  hq: "Pine Bluff, AR",
  fedRank: 79,
  leadBank: "Simmons Bank",
  assetsUsdMillions: 24649,
  charter: "Arkansas state member bank (Federal Reserve)",
  posture: "A Mid-South acquirer turned organic grower under a new CEO, with a chief information officer, a newly hired chief technology officer and a retiring first chief data officer, funding 'investments in talent and technology' from efficiency cuts, without a disclosed AI programme.",
  answerFirst:
    "Simmons First National, the Pine Bluff, Arkansas parent of Simmons Bank with about $25 billion of assets across six states, changed leaders and priorities at the turn of 2026: Jay Brogdon became CEO on 1 January after George Makris Jr. retired, and told American Banker that 'delivering organic growth, that's not been our strong suit historically', so the bank is hiring bankers, a private-banking team and new consumer and commercial leaders to deepen relationships and gather low-cost deposits. Its technology organisation is being rebuilt in parallel. In May 2025 the bank hired David Kennedy as executive vice president and chief technology officer, reporting to chief information officer Ann Madea, 'as we accelerate our technology strategy and enhance the resilience and scalability of our platforms'; in August 2026 it announced the retirement of Lisa Hunter, who became its first chief data officer in 2021 and built the Data Office, data governance and data-literacy programmes after earlier leading the centralised call centre and an automated teller line. Second-quarter 2026 net income was $66.7 million, or $0.46 per diluted share, with a 3.84% margin, an adjusted efficiency ratio of 54.26% and, in Brogdon's words, 'continued execution of efficiency initiatives' including eliminated positions and square-footage reductions that 'more than funded our investments in the business'; the call cited 'ongoing investments in talent and technology'. Neither the earnings releases nor the leadership announcements mention artificial intelligence, an AI leader, vendor or budget, and the risk factors emphasise deposit competition, which Brogdon calls 'very, very fierce'. Simmons Bank is an Arkansas state member bank supervised by the Federal Reserve. Treat this as a thin AI record with a strong data-office foundation.",
  keyPoints: [
    "No AI programme, leader, vendor or budget disclosed in 2025 or 2026 releases and calls.",
    "Technology leadership: CIO Ann Madea; CTO David Kennedy hired May 2025 to accelerate the technology strategy; first chief data officer Lisa Hunter retiring after building the Data Office (announced August 2026).",
    "New CEO Jay Brogdon (from 1 January 2026) pivoting from acquisitions to organic growth: new consumer, wealth and commercial leaders and a private-banking team hired February 2026.",
    "Q2 2026 net income $66.7 million ($0.46 per share); NIM 3.84%; adjusted efficiency ratio 54.26%.",
    "Efficiency actions (position eliminations, real-estate reductions) more than fund investments in talent and technology.",
    "Deposit competition 'very, very fierce'; deposits the top strategic focus for the next 12 to 24 months."
  ],
  leadership: [
    { name: "Jay Brogdon", role: "President and CEO", sources: ["sfnc-q2-2026", "ab-leaders-2026"] },
    { name: "Ann Madea", role: "EVP and Chief Information Officer", sources: ["sfnc-cto-2025"] },
    { name: "David Kennedy", role: "EVP and Chief Technology Officer", linkedin: "https://www.linkedin.com/in/daveckennedy", sources: ["sfnc-cto-2025"] },
    { name: "Daniel Hobbs", role: "Chief Financial Officer", linkedin: "https://www.linkedin.com/in/daniel-hobbs-6634b734", sources: ["sfnc-q2call-2026"] }
  ],
  timeline: [
    { date: "2025-05-20", title: "David Kennedy hired as chief technology officer", detail: "Technology delivery, innovation, infrastructure and cost reduction; reports to CIO Ann Madea.", sources: ["sfnc-cto-2025"] },
    { date: "2025-08-04", title: "CEO transition announced", detail: "George Makris Jr. to retire; Jay Brogdon CEO from 1 January 2026.", sources: ["sfnc-ceo-2025", "ab-ceo-2025"] },
    { date: "2026-02-02", title: "New leaders hired to boost organic growth", detail: "Consumer and wealth head, commercial head, eight-person private-banking team.", sources: ["ab-leaders-2026"] },
    { date: "2026-07-16", title: "Second-quarter 2026 results", detail: "Net income $66.7 million; efficiency initiatives fund talent and technology investment.", sources: ["sfnc-q2-2026", "sfnc-q2call-2026"] },
    { date: "2026-08-20", title: "First chief data officer Lisa Hunter to retire", detail: "Built the Data Office, data governance and data-literacy programmes since 2021.", sources: ["sfnc-cdo-2026"] },
    { date: "2026-01-01", title: "Jay Brogdon becomes CEO", detail: "Succeeds George Makris Jr.; joins the board.", sources: ["sfnc-ceo-2025", "ab-ceo-2025"] }
  ],
  useCases: [
    { useCase: "governance-general", name: "Enterprise Data Office", detail: "Data governance, data literacy and data-driven decision-making established under the first CDO.", status: "In production", sources: ["sfnc-cdo-2026"] },
    { useCase: "third-party-vendors", name: "Platform resilience and scalability programme", detail: "CTO mandate to modernise infrastructure and reduce cost.", status: "Rolling out", sources: ["sfnc-cto-2025"] },
    { useCase: "customer-chatbots", name: "Centralised call centre and automated teller line", detail: "Legacy service automation credited to the retiring CDO.", status: "In production", sources: ["sfnc-cdo-2026"] }
  ],
  numbers: [
    { label: "Q2 2026 net income / diluted EPS", value: "$66.7 million / $0.46", asOf: "2026-07-16", sources: ["sfnc-q2-2026"] },
    { label: "Adjusted efficiency ratio / net interest margin, Q2 2026", value: "54.26% / 3.84%", asOf: "2026-07-16", sources: ["sfnc-q2-2026"] },
    { label: "Consecutive years of cash dividends", value: "117", asOf: "2026-08-20", sources: ["sfnc-cdo-2026"] }
  ],
  quotes: [
    { who: "Jay Brogdon", role: "President and CEO", date: "2026-02-02", quote: "Delivering organic growth, that's not been our strong suit historically. Most of our growth has been through acquisitions.", sources: ["ab-leaders-2026"] },
    { who: "Ann Madea", role: "EVP and Chief Information Officer", date: "2025-05-20", quote: "As we accelerate our technology strategy and enhance the resilience and scalability of our platforms, David's deep understanding and leadership will be instrumental in shaping the next phase of our transformation.", sources: ["sfnc-cto-2025"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "Simmons Bank is a state member bank; Fed model-risk and third-party guidance would govern any AI built on the Data Office foundation.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer and private-banking products bring adverse-action and UDAAP duties to any automated decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "fdic", why: "Deposit-insurance supervision and interagency third-party guidance apply to vendor platforms.", docSlugs: ["fdic-fil-29-2023"] }
  ],
  suggestions: [
    { title: "The Data Office is the AI precondition, and its founder is leaving", detail: "Succession for the chief data officer role will show whether data governance stays an executive priority or folds into IT." },
    { title: "Efficiency-funded technology needs a stated destination", detail: "Cutting positions to fund technology invites the question of what the technology is; an AI position would answer it." },
    { title: "Deposit competition is where AI pays first", detail: "Retention analytics and pricing models serve the stated top priority more directly than back-office automation." },
    { title: "Organic growth means more models", detail: "A shift from acquisitions to relationship banking raises the weight of underwriting, pricing and CRM models under SR 11-7." }
  ],
  faq: [
    { q: "Does Simmons Bank use AI?", a: "Simmons has not disclosed an AI programme, leader, vendor or budget. It has a chief information officer, hired a chief technology officer in May 2025 to accelerate its technology strategy, and built an enterprise Data Office under its first chief data officer, who is retiring in 2026." },
    { q: "What changed at Simmons in 2026?", a: "Jay Brogdon became CEO on 1 January 2026 after George Makris Jr. retired, and the bank shifted from acquisition-led growth to organic growth, hiring new consumer, wealth and commercial leaders and a private-banking team while cutting positions and real estate to fund investments in talent and technology." }
  ],
  sources: [
    { id: "sfnc-cto-2025", title: "Simmons Bank hires David Kennedy as Chief Technology Officer", publisher: "Simmons Bank", url: "https://newsroom.simmonsbank.com/2025-05-20-Simmons-Bank-hires-David-Kennedy-as-Chief-Technology-Officer", date: "2025-05-20" },
    { id: "sfnc-ceo-2025", title: "Simmons First National Corporation Announces CEO Retirement and Leadership Transition", publisher: "Simmons First National", url: "https://newsroom.simmonsbank.com/2025-08-04-Simmons-First-National-Corporation-Announces-CEO-Retirement-and-Leadership-Transition", date: "2025-08-04" },
    { id: "ab-ceo-2025", title: "Simmons Bank promotes new CEO as longtime leader retires", publisher: "American Banker", url: "https://americanbanker.com/news/arkansas-bank-simmons-shuffles-leadership-as-ceo-retires", date: "2025-08-04" },
    { id: "ab-leaders-2026", title: "Simmons Bank hires new leaders to boost organic growth", publisher: "American Banker", url: "https://americanbanker.com/news/simmons-bank-hires-new-leaders-to-boost-organic-growth", date: "2026-02-02" },
    { id: "sfnc-q2-2026", title: "Simmons First National Corporation Reports Second Quarter Results", publisher: "Simmons First National", url: "https://newsroom.simmonsbank.com/2026-07-16-Simmons-First-National-Corporation-Reports-Second-Quarter-Results", date: "2026-07-16" },
    { id: "sfnc-q2call-2026", title: "Simmons First National Q2 Earnings Call Highlights", publisher: "MarketBeat (Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/simmons-first-national-q2-earnings-140514870.html", date: "2026-07-17" },
    { id: "sfnc-cdo-2026", title: "Lisa Hunter to Retire After 30 Years at Simmons Bank", publisher: "Simmons Bank", url: "https://newsroom.simmonsbank.com/2026-08-20-Lisa-Hunter-to-Retire-After-30-Years-at-Simmons-Bank", date: "2026-08-20" }
  ],
  lastUpdated: "2026-09-10"
};

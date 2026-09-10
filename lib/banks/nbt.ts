import type { Bank } from "@/lib/banks";

export const NBT: Bank = {
  slug: "nbt",
  name: "NBT Bancorp",
  shortName: "NBT Bank",
  ticker: "NBTB",
  hq: "Norwich, NY",
  fedRank: 105,
  leadBank: "NBT Bank, N.A.",
  assetsUsdMillions: 16090,
  charter: "National bank (OCC)",
  posture: "An upstate New York bank a year past its Evans Bancorp merger, posting record net interest income and a 14th straight dividend increase, with technology mentioned only as a line in the expense run rate and no disclosed AI programme.",
  answerFirst:
    "NBT Bancorp, the Norwich, New York parent of NBT Bank, N.A., with about $16 billion of assets across New York, Pennsylvania, New England and Maine, completed its merger with Evans Bancorp of Buffalo on 5 May 2025 and has spent 2026 harvesting it. Second-quarter 2026 net income was $53.0 million, or $1.02 per diluted share, against $22.5 million a year earlier when merger costs weighed, with record net interest income up more than 10% year on year, a 3.73% margin, a 1.32% operating return on assets, a 15.61% operating return on tangible equity and tangible book value per share up 12.8% to $27.71; the board raised the dividend 8.1% to $0.40, the 14th consecutive annual increase. President and CEO Scott Kingsley said the company delivered 'significantly stronger earnings' with operating earnings up 15%, credited 'disciplined balance sheet management, the growth of our diversified revenue streams and the continued benefits of integrating Evans Bancorp', and described first-half loan growth of $276 million across commercial, consumer and indirect auto lines as indicative of go-forward capability. Technology appears in the disclosures only as an expense item: CFO Annette Burns cited 'technology initiatives' alongside travel and training within a roughly $112 million quarterly run rate. NBT's fee businesses include retirement-plan administration, wealth and insurance, and the bank funds community-development vehicles such as a $10 million CEI-Boulos fund. Neither the releases nor the calls mention artificial intelligence, an AI leader, vendor or budget. NBT Bank, N.A. is a national bank supervised by the OCC. Treat this as a thin AI record for a bank whose story is integration and dividends.",
  keyPoints: [
    "No AI programme, leader, vendor or budget disclosed; technology appears only as 'technology initiatives' in the expense run rate.",
    "Evans Bancorp merger completed 5 May 2025; integration benefits cited as a driver of 2026 operating leverage.",
    "Q2 2026 net income $53.0 million ($1.02); record net interest income (+10%); NIM 3.73%; operating ROTE 15.61%.",
    "Dividend raised 8.1% to $0.40, the 14th consecutive annual increase; tangible book value $27.71 (+12.8%).",
    "First-half loan growth $276 million across commercial, consumer and indirect auto.",
    "Diversified fees from retirement-plan administration, wealth and insurance; community-development fund investing."
  ],
  leadership: [
    { name: "Scott A. Kingsley", role: "President and CEO", linkedin: "https://www.linkedin.com/in/scott-kingsley-211b0218", sources: ["nbtb-q2-2026", "nbtb-q2call-2026"] },
    { name: "Annette Burns", role: "EVP and Chief Financial Officer", linkedin: "https://www.linkedin.com/in/annette-burns-86073466", sources: ["nbtb-q2call-2026"] },
    { name: "Joseph Stagliano", role: "President, NBT Bank", linkedin: "https://www.linkedin.com/in/joseph-stagliano-80065189", sources: ["nbtb-q1call-2026"] }
  ],
  timeline: [
    { date: "2025-05-05", title: "Merger with Evans Bancorp completed", detail: "Buffalo-area franchise added.", sources: ["nbtb-evans-2025"] },
    { date: "2025-10-03", title: "Community-development fund investing noted", detail: "$10 million CEI-Boulos fund underwritten by NBT.", sources: ["ab-cei-2025"] },
    { date: "2026-04-23", title: "First-quarter 2026 call", detail: "Evans integration benefits; technology initiatives within a $112 million expense run rate.", sources: ["nbtb-q1call-2026"] },
    { date: "2026-07-27", title: "Second-quarter 2026 results; dividend up 8.1%", detail: "Net income $53.0 million; record net interest income.", sources: ["nbtb-q2-2026", "nbtb-q2call-2026"] },
    { date: "2026-06-30", title: "First-half loan growth of $276 million", detail: "Commercial up $178 million; consumer up $98 million.", sources: ["nbtb-q2call-2026"] },
    { date: "2026-07-28", title: "Q2 call: 'significantly stronger earnings'", detail: "Operating earnings up 15%; indirect auto strong.", sources: ["nbtb-q2call-2026"] }
  ],
  useCases: [
    { useCase: "third-party-vendors", name: "Evans Bancorp integration", detail: "Merger completed May 2025; benefits flowing through 2026.", status: "In production", sources: ["nbtb-evans-2025", "nbtb-q1call-2026"] },
    { useCase: "governance-general", name: "No disclosed AI deployment", detail: "Technology referenced only as expense.", status: "Announced", sources: ["nbtb-q1call-2026"] }
  ],
  numbers: [
    { label: "Q2 2026 net income / diluted EPS", value: "$53.0 million / $1.02", asOf: "2026-07-27", sources: ["nbtb-q2-2026"] },
    { label: "Operating ROA / operating ROTE, Q2 2026", value: "1.32% / 15.61%", asOf: "2026-07-27", sources: ["nbtb-q2call-2026"] },
    { label: "Quarterly dividend", value: "$0.40 (+8.1%; 14th consecutive annual increase)", asOf: "2026-07-27", sources: ["nbtb-q2-2026"] },
    { label: "First-half 2026 loan growth", value: "$276 million (+2.4%)", asOf: "2026-07-27", sources: ["nbtb-q2call-2026"] }
  ],
  quotes: [
    { who: "Scott A. Kingsley", role: "President and CEO", date: "2026-04-23", quote: "Our solid operating performance for the first quarter was driven by disciplined balance sheet management, the growth of our diversified revenue streams and the continued benefits of integrating Evans Bancorp into our franchise.", sources: ["nbtb-q1call-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "NBT Bank, N.A. is a national bank; OCC model-risk and gen-AI expectations would govern any AI in lending or servicing.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "ny-dfs", why: "New York-headquartered operations with insurance and wealth affiliates sit under DFS cyber rules and its AI-risk guidance.", docSlugs: ["ny-dfs-23-nycrr-part-500", "ny-dfs-industry-letter-2024-10-16-ai-cyber-risks"] },
    { authority: "cfpb", why: "Indirect auto and consumer lending bring adverse-action and UDAAP duties to any automated decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] }
  ],
  suggestions: [
    { title: "Indirect auto is a ready-made model use case", detail: "A fast-turning, low-duration auto book is exactly where automated decisioning and pricing models are standard; the bank has not said what it runs." },
    { title: "Retirement-plan administration is data-rich", detail: "Benefits administration generates structured data that supports analytics beyond banking." },
    { title: "Integration done, disclosure due", detail: "With Evans absorbed and operating leverage delivered, investors will ask what the technology line in the run rate is buying." },
    { title: "DFS scope reaches AI early", detail: "New York's cyber and AI-risk expectations apply before federal AI guidance bites, so governance documentation should lead." }
  ],
  faq: [
    { q: "Does NBT Bank use AI?", a: "NBT Bancorp has not disclosed an AI programme, leader, vendor or budget. Its investor materials reference technology initiatives only within its expense run rate, and its 2026 story is the integration of Evans Bancorp and record net interest income." },
    { q: "How is NBT Bancorp performing?", a: "Second-quarter 2026 net income was $53.0 million, or $1.02 per share, with record net interest income, a 3.73% margin, a 15.61% operating return on tangible equity and a dividend raised 8.1% to $0.40, the 14th consecutive annual increase." }
  ],
  sources: [
    { id: "nbtb-evans-2025", title: "NBT Bancorp Inc. Completes Merger With Evans Bancorp, Inc.", publisher: "NBT Bancorp (GlobeNewswire)", url: "https://globenewswire.com/news-release/2025/05/05/3074130/15780/en/NBT-Bancorp-Inc-Completes-Merger-With-Evans-Bancorp-Inc.html", date: "2025-05-05" },
    { id: "ab-cei-2025", title: "TD creates $25 million fund to boost Philly neighborhoods", publisher: "American Banker", url: "https://americanbanker.com/news/td-creates-25-million-fund-to-boost-philly-neighborhoods", date: "2025-10-03" },
    { id: "nbtb-q1call-2026", title: "NBT Bancorp Q1 2026 Earnings Call Transcript", publisher: "MarketBeat (Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/nbt-bancorp-q1-earnings-call-184300855.html", date: "2026-04-24" },
    { id: "nbtb-q2-2026", title: "NBT Bancorp Inc. Announces Second Quarter 2026 Results and Approves an 8.1% Cash Dividend Increase", publisher: "NBT Bancorp (GlobeNewswire)", url: "https://globenewswire.com/news-release/2026/07/27/3333880/0/en/NBT-Bancorp-Inc-Announces-Second-Quarter-2026-Results-and-Approves-an-8-1-Cash-Dividend-Increase.html", date: "2026-07-27" },
    { id: "nbtb-q2call-2026", title: "NBT Bancorp Q2 Earnings Call Highlights", publisher: "MarketBeat (Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/nbt-bancorp-q2-earnings-call-150433587.html", date: "2026-07-28" }
  ],
  lastUpdated: "2026-09-10"
};

import type { Bank } from "@/lib/banks";

export const RENASANT: Bank = {
  slug: "renasant",
  name: "Renasant Corporation",
  shortName: "Renasant",
  ticker: "RNST",
  hq: "Tupelo, MS",
  fedRank: 75,
  leadBank: "Renasant Bank",
  assetsUsdMillions: 27091,
  charter: "Mississippi state member bank (Federal Reserve)",
  posture: "A 122-year-old Mississippi bank that doubled down on the Southeast by absorbing The First Bancshares, hit the profitability goals it set itself two years earlier, and lists 'process automation' and data analytics among its technology investments without naming AI.",
  answerFirst:
    "Renasant Corporation, the Tupelo, Mississippi parent of Renasant Bank, spent 2025 completing the biggest transaction in its history and 2026 proving it paid off. The all-stock merger with The First Bancshares closed on 1 April 2025, adding about $7.6 billion of assets and 116 locations across Louisiana, Mississippi, Alabama, Georgia and Florida to create a six-state franchise of roughly $26 billion, with full systems conversion and integration completed in August 2025; the annual report says the conversion 'progressed smoothly'. President and CEO Kevin Chapman had set 'aspirational goals' for financial performance two years earlier and targeted the first quarter of 2026 as the milestone: net income was $88.2 million, or $0.94 per diluted share, return on assets 1.33%, adjusted return on tangible common equity 16.36% and the adjusted efficiency ratio 52.82%, down from 64.43% a year earlier, which he said 'exceeded the goals we set for ourselves'. The second quarter repeated it: net income $87.1 million, adjusted EPS $0.94, up 36% year on year, and a second dividend increase in six months. On technology the 2025 annual report says the bank 'continued investing in digital platforms, data analytics, cybersecurity, and process automation to enhance efficiency and improve the customer experience', and it has sold its insurance operations to focus on core banking and wealth. Neither the annual report nor the earnings releases mention artificial intelligence, an AI leader, vendor or budget, and the risk factors cite cybersecurity rather than AI. Renasant Bank is a Mississippi state member bank supervised by the Federal Reserve. Treat this as a thin record for a bank whose technology effort has been the conversion.",
  keyPoints: [
    "No AI programme, leader, vendor or budget disclosed; technology investments named are digital platforms, data analytics, cybersecurity and process automation.",
    "The First Bancshares merger closed 1 April 2025 (about $7.6 billion of assets, 116 locations); conversion and integration completed August 2025.",
    "Q1 2026 hit the two-year profitability goals: net income $88.2 million, EPS $0.94, ROA 1.33%, adjusted ROTCE 16.36%, adjusted efficiency ratio 52.82%.",
    "Q2 2026: net income $87.1 million; adjusted EPS $0.94, up 36% year on year; second dividend increase in six months.",
    "Portfolio simplification: insurance operations sold to concentrate on core banking and wealth management.",
    "Mortgage division generated $542.3 million of rate-lock volume in Q1 2026."
  ],
  leadership: [
    { name: "Kevin D. Chapman", role: "President and CEO", linkedin: "https://www.linkedin.com/in/kevin-d-chapman-b379218", sources: ["rnst-q1-2026", "rnst-q2-2026"] }
  ],
  timeline: [
    { date: "2024-07-29", title: "Merger with The First Bancshares announced", detail: "All-stock deal; one Renasant share per The First share.", sources: ["rnst-first-announce-2024"] },
    { date: "2025-04-01", title: "Merger with The First completed", detail: "Conversion and integration scheduled for early August 2025.", sources: ["rnst-first-close-2025"] },
    { date: "2026-03-16", title: "2025 annual report", detail: "Investment in digital platforms, data analytics, cybersecurity and process automation; smooth conversion.", sources: ["rnst-ar-2026"] },
    { date: "2026-04-28", title: "First-quarter 2026 results exceed two-year goals", detail: "Net income $88.2 million; adjusted efficiency ratio 52.82%; dividend raised.", sources: ["rnst-q1-2026"] },
    { date: "2026-07-28", title: "Second-quarter 2026 results", detail: "Net income $87.1 million; adjusted EPS $0.94; adjusted ROTCE 16.25%.", sources: ["rnst-q2-2026"] },
    { date: "2025-08-01", title: "Systems conversion and integration of The First completed", detail: "Full conversion in early August 2025; described as smooth in the annual report.", sources: ["rnst-first-close-2025", "rnst-ar-2026"] }
  ],
  useCases: [
    { useCase: "third-party-vendors", name: "The First systems conversion", detail: "Largest merger, conversion and integration in company history, completed August 2025.", status: "In production", sources: ["rnst-ar-2026", "rnst-first-close-2025"] },
    { useCase: "generative-agentic-ai", name: "Process automation and data analytics investment", detail: "Named in the annual report as efficiency and customer-experience investments.", status: "In production", sources: ["rnst-ar-2026"] },
    { useCase: "cybersecurity", name: "Cybersecurity investment", detail: "Cited alongside digital platforms; cyber risk listed among key risk factors.", status: "In production", sources: ["rnst-ar-2026"] }
  ],
  numbers: [
    { label: "Q1 2026 net income / diluted EPS", value: "$88.2 million / $0.94", asOf: "2026-04-28", sources: ["rnst-q1-2026"] },
    { label: "Adjusted efficiency ratio, Q1 2026 vs Q1 2025", value: "52.82% vs 64.43%", asOf: "2026-04-28", sources: ["rnst-q1-2026"] },
    { label: "Q2 2026 net income / adjusted EPS", value: "$87.1 million / $0.94 (+36% year on year)", asOf: "2026-07-28", sources: ["rnst-q2-2026"] },
    { label: "The First Bancshares at closing", value: "≈ $7.6 billion assets; 116 locations", asOf: "2025-04-01", sources: ["rnst-ar-2026"] }
  ],
  quotes: [
    { who: "Kevin D. Chapman", role: "President and CEO", date: "2026-04-28", quote: "Two years ago, we challenged ourselves by setting aspirational goals to improve the financial performance of Renasant. The strong financial results for the first quarter exceeded the goals we set for ourselves.", sources: ["rnst-q1-2026"] },
    { who: "Renasant Corporation", role: "2025 annual report", date: "2026-03-16", quote: "In 2025, we continued investing in digital platforms, data analytics, cybersecurity, and process automation to enhance efficiency and improve the customer experience.", sources: ["rnst-ar-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "Renasant Bank is a state member bank; Fed model-risk and third-party guidance govern process automation and any future AI.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Mortgage and consumer lending bring adverse-action and UDAAP duties to any automated decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "fdic", why: "Deposit-insurance supervision and interagency third-party guidance apply to vendor platforms.", docSlugs: ["fdic-fil-29-2023"] }
  ],
  suggestions: [
    { title: "Process automation is where AI would attach", detail: "The annual report already names automation and data analytics; the next disclosure should say which processes and whether models are involved." },
    { title: "The efficiency gain came from the merger, not AI", detail: "A 12-point efficiency improvement in a year is integration synergy; sustaining it will need technology the bank has not described." },
    { title: "Mortgage volume is a natural pilot", detail: "Half a billion dollars of quarterly rate locks is the kind of high-volume process where automation shows up first." },
    { title: "Simplification helps governance", detail: "Selling insurance and focusing on banking and wealth narrows the model inventory any AI programme would need to manage." }
  ],
  faq: [
    { q: "Does Renasant Bank use AI?", a: "Renasant has not disclosed an AI programme, leader, vendor or budget. Its 2025 annual report describes investment in digital platforms, data analytics, cybersecurity and process automation, and its earnings materials do not mention AI." },
    { q: "How did the merger with The First Bancshares turn out?", a: "The all-stock merger closed on 1 April 2025 and systems conversion finished in August 2025. By the first quarter of 2026 Renasant's adjusted efficiency ratio had improved to 52.82% from 64.43% a year earlier and adjusted return on tangible common equity reached 16.36%, exceeding the goals management set two years before." }
  ],
  sources: [
    { id: "rnst-first-announce-2024", title: "Renasant Corporation to Acquire The First Bancshares, Inc.", publisher: "Renasant Corporation", url: "https://investors.renasant.com/node/24141/pdf", date: "2024-07-29" },
    { id: "rnst-first-close-2025", title: "Renasant Corporation Completes Merger with The First Bancshares, Inc.", publisher: "Renasant Corporation", url: "https://investors.renasant.com/news-releases/news-release-details/renasant-corporation-completes-merger-first-bancshares-inc/", date: "2025-04-01" },
    { id: "rnst-ar-2026", title: "Renasant Corporation 2025 Annual Report", publisher: "SEC EDGAR", url: "https://sec.gov/Archives/edgar/data/715072/000071507226000032/a2025rnstannualreport.pdf", date: "2026-03-16" },
    { id: "rnst-q1-2026", title: "Renasant Corporation Announces Earnings for the First Quarter of 2026 and an Increase in Its Quarterly Dividend", publisher: "Renasant Corporation", url: "https://investors.renasant.com/node/25476/pdf", date: "2026-04-28" },
    { id: "rnst-q2-2026", title: "Renasant Corporation Announces Earnings for the Second Quarter of 2026", publisher: "Renasant Corporation (GlobeNewswire)", url: "https://globenewswire.com/news-release/2026/07/28/3334764/0/en/Renasant-Corporation-Announces-Earnings-for-the-Second-Quarter-of-2026.html", date: "2026-07-28" }
  ],
  lastUpdated: "2026-09-10"
};

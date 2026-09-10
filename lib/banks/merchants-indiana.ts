import type { Bank } from "@/lib/banks";

export const MERCHANTS_INDIANA: Bank = {
  slug: "merchants-indiana",
  name: "Merchants Bancorp",
  shortName: "Merchants Bank of Indiana",
  ticker: "MBIN",
  hq: "Carmel, IN",
  fedRank: 93,
  leadBank: "Merchants Bank of Indiana",
  assetsUsdMillions: 20263,
  charter: "Indiana state nonmember bank (FDIC)",
  posture: "A multifamily and mortgage-warehouse specialist posting record assets and tangible book value for a 30th straight quarter, whose short-duration, securitisation-driven model is built on process speed, with no disclosed AI programme.",
  answerFirst:
    "Merchants Bancorp, the Carmel, Indiana parent of Merchants Bank of Indiana, is a different animal from the community banks around it in the Federal Reserve's ranking: its three segments are multifamily mortgage banking, which originates, services and securitises multifamily and healthcare-facility loans and syndicates low-income housing tax credit funds, mortgage warehousing, which finances other lenders' pipelines, and banking, which holds portfolio loans and correspondent residential mortgages. That model produced second-quarter 2026 net income of $78.3 million, or $1.48 per diluted share, up 147% from a year earlier, total assets of $21.2 billion, a fifth consecutive quarterly record, tangible book value per share of $39.93, a 30th consecutive record, liquidity of $13.0 billion, or 61% of assets, and a fifth straight quarterly decline in criticised loans after a 2025 in which net income had fallen 32% on a credit-provision spike. Chairman and CEO Michael Petrie credited 'the strength of our balance sheet, the benefit of improved credit metrics, and ongoing momentum in our business', and president and COO Michael Dunlap said the 'diversified business model continues to create multiple sources of earnings' with 10-year Treasury rates elevated. American Banker's top-performer analysis attributes the returns to a deliberately short-duration book across multifamily and warehouse lending. The company's disclosures describe technology only in generic terms; there is no AI programme, leader, vendor or budget in its releases, and its customer content is wire-fraud guidance and rate promotions. Merchants Bank of Indiana is an Indiana state nonmember bank supervised by the FDIC; its Ginnie Mae, Fannie Mae and Freddie Mac programmes also bring agency counterparty requirements. Treat this as a thin AI record for a bank whose edge is balance-sheet velocity.",
  keyPoints: [
    "No AI programme, leader, vendor or budget disclosed.",
    "Model: multifamily and healthcare mortgage banking with securitisation, mortgage warehousing and portfolio banking; short-duration assets.",
    "Q2 2026 net income $78.3 million ($1.48 per share, +147% year on year); total assets a record $21.2 billion; tangible book value $39.93, a 30th consecutive record.",
    "Liquidity of $13.0 billion (61% of assets) with $5.5 billion of unused FHLB and discount-window capacity.",
    "Credit repair: fifth consecutive quarterly decline in criticised loans after 2025 net income fell 32% on provisions.",
    "Dividend raised 10% in February 2026, the eighth consecutive annual increase."
  ],
  leadership: [
    { name: "Michael F. Petrie", role: "Chairman and CEO", sources: ["mbin-q2-2026"] },
    { name: "Michael J. Dunlap", role: "President and Chief Operating Officer", linkedin: "https://www.linkedin.com/in/mike-dunlap-4b14191b", sources: ["mbin-q2-2026"] }
  ],
  timeline: [
    { date: "2024-12-11", title: "Wire-transfer fraud guidance", detail: "Customer education on spotting fraudulent payment requests.", sources: ["mbin-wirefraud-2024"] },
    { date: "2025-07-24", title: "Named among top-performing banks for lending niches", detail: "Short-duration multifamily and warehouse strategy cited.", sources: ["ab-niches-2025"] },
    { date: "2026-07-28", title: "Second-quarter 2026 results", detail: "Net income $78.3 million; record assets and tangible book value; criticised loans down again.", sources: ["mbin-q2-2026"] },
    { date: "2026-01-27", title: "Fourth-quarter 2025 results", detail: "Total assets a record $19.4 billion; criticised loans down 13%; record multifamily gain on sale.", sources: ["mbin-q4-2025"] },
    { date: "2026-02-15", title: "Dividend raised 10% to 11 cents", detail: "Eighth consecutive annual increase after 2025 net income fell 32% on provisions.", sources: ["mbin-yahoo-2026"] },
    { date: "2026-04-28", title: "First-quarter 2026 results", detail: "Net income $67.7 million; $1.25 per diluted share.", sources: ["mbin-q2-2026"] }
  ],
  useCases: [
    { useCase: "credit-underwriting", name: "Multifamily and healthcare mortgage banking with securitisation", detail: "Origination, servicing and agency securitisation; LIHTC fund syndication.", status: "In production", sources: ["mbin-q2-2026", "ab-niches-2025"] },
    { useCase: "third-party-vendors", name: "Mortgage warehouse financing", detail: "Pipeline finance for other lenders, a process-intensive business.", status: "In production", sources: ["ab-niches-2025"] },
    { useCase: "fraud", name: "Wire-fraud customer education", detail: "Guidance on verifying payment instructions.", status: "In production", sources: ["mbin-wirefraud-2024"] },
    { useCase: "governance-general", name: "No disclosed AI deployment", detail: "Earnings materials silent on AI.", status: "Announced", sources: ["mbin-q2-2026"] }
  ],
  numbers: [
    { label: "Q2 2026 net income / diluted EPS", value: "$78.3 million / $1.48 (+147% year on year)", asOf: "2026-07-28", sources: ["mbin-q2-2026"] },
    { label: "Total assets / tangible book value per share", value: "$21.2 billion (record) / $39.93 (30th consecutive record)", asOf: "2026-06-30", sources: ["mbin-q2-2026"] },
    { label: "Liquidity", value: "$13.0 billion (61% of assets); $5.5 billion unused borrowing capacity", asOf: "2026-06-30", sources: ["mbin-q2-2026"] },
    { label: "Total capital ratio", value: "12.5%", asOf: "2026-06-30", sources: ["mbin-q2-2026"] }
  ],
  quotes: [
    { who: "Michael F. Petrie", role: "Chairman and CEO", date: "2026-07-28", quote: "These results demonstrate the strength of our balance sheet, the benefit of improved credit metrics, and ongoing momentum in our business.", sources: ["mbin-q2-2026"] },
    { who: "Michael J. Dunlap", role: "President and Chief Operating Officer", date: "2026-07-28", quote: "With 10-year Treasury rates remaining elevated, our diversified business model continues to create multiple sources of earnings.", sources: ["mbin-q2-2026"] }
  ],
  regulatory: [
    { authority: "fdic", why: "Merchants Bank of Indiana is a state nonmember bank; FDIC model-risk and third-party guidance would govern any AI in underwriting or warehouse operations.", docSlugs: ["fdic-fil-29-2023", "fdic-fil-15-2026"] },
    { authority: "federal-reserve", why: "Holding-company oversight of a securitisation-heavy, agency-dependent model.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Correspondent residential mortgage banking brings adverse-action and servicing duties to any automated decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] }
  ],
  suggestions: [
    { title: "Warehouse lending is document automation waiting to happen", detail: "Funding other lenders' pipelines is a high-volume, document-heavy process where AI classification and exception handling pay quickly; nothing has been said." },
    { title: "Agency securitisation sets the data standard", detail: "Ginnie, Fannie and Freddie programmes already force structured loan data, a base most community banks lack for models." },
    { title: "Credit surveillance is the priority after 2025", detail: "A provision-driven earnings drop argues for early-warning analytics on multifamily and healthcare credits before anything customer-facing." },
    { title: "Velocity, not cost, is the AI case", detail: "A bank that earns on turnover would use AI to shorten cycle times rather than cut headcount." }
  ],
  faq: [
    { q: "Does Merchants Bank of Indiana use AI?", a: "Merchants Bancorp has not disclosed an AI programme, leader, vendor or budget. Its business is multifamily and healthcare mortgage banking with securitisation, mortgage warehousing and portfolio banking, and its customer content is limited to fraud guidance and rate promotions." },
    { q: "How is Merchants Bancorp performing?", a: "Second-quarter 2026 net income was $78.3 million, or $1.48 per diluted share, up 147% from a year earlier, with record total assets of $21.2 billion and a 30th consecutive record in tangible book value per share at $39.93, following a 2025 in which net income fell 32% on higher credit provisions." }
  ],
  sources: [
    { id: "mbin-wirefraud-2024", title: "Wire Transfer Fraud: How to Spot Them and Protect Your Funds", publisher: "Merchants Bank of Indiana", url: "https://merchantsbankofindiana.com/what-to-know-before-you-wire-money", date: "2024-12-11" },
    { id: "ab-niches-2025", title: "Lending niches helped these banks to outperform their peers", publisher: "American Banker", url: "https://americanbanker.com/news/top-performing-banks-used-lending-niches-to-fuel-growth", date: "2025-07-24" },
    { id: "mbin-q2-2026", title: "Merchants Bancorp Reports Second Quarter of 2026 Results", publisher: "Merchants Bancorp (PR Newswire)", url: "https://prnewswire.com/news-releases/merchants-bancorp-reports-second-quarter-of-2026-results-302836726.html", date: "2026-07-28" },
    { id: "mbin-q4-2025", title: "Merchants Bancorp Reports Fourth Quarter 2025 Results", publisher: "Merchants Bancorp (PR Newswire)", url: "https://prnewswire.com/news-releases/merchants-bancorp-reports-fourth-quarter-2025-results-302672800.html", date: "2026-01-27" },
    { id: "mbin-yahoo-2026", title: "Merchants Bancorp's Rally Is Testing How Much Risk Investors Will Overlook", publisher: "Yahoo Finance", url: "https://finance.yahoo.com/markets/stocks/articles/merchants-bancorp-rally-testing-much-125500408.html", date: "2026-09-05" }
  ],
  lastUpdated: "2026-09-10"
};

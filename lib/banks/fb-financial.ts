import type { Bank } from "@/lib/banks";

export const FB_FINANCIAL: Bank = {
  slug: "fb-financial",
  name: "FB Financial Corporation (FirstBank)",
  shortName: "FirstBank",
  ticker: "FBK",
  hq: "Nashville, TN",
  fedRank: 101,
  leadBank: "FirstBank",
  assetsUsdMillions: 16433,
  charter: "Tennessee state member bank (Federal Reserve)",
  posture: "Nashville's FirstBank pairs 'the latest in financial products and capabilities with a century of hometown heart', ranks first in J.D. Power's South Central retail satisfaction study, and offers an Insights budgeting tool in its app, without a disclosed AI programme.",
  answerFirst:
    "FB Financial Corporation, the Nashville parent of FirstBank with $16.8 billion of assets after the $381 million all-stock acquisition of Southern States Bancshares of Anniston, Alabama, closed on 1 July 2025 as its first deal in five years, competes on service and steady branch expansion rather than disclosed technology. In March 2026 J.D. Power ranked FirstBank first in retail banking customer satisfaction in the South Central region, which president and CEO Christopher Holmes called 'a powerful validation of our vision to be the cornerstone that families and businesses turn to for financial peace of mind', crediting 'our approach of pairing the latest in financial products and capabilities with a century of hometown heart'. The digital offer includes an Insights tool in online and mobile banking that breaks down spending by category, builds budgets and tracks net worth, alongside Zelle, mobile wallets and alerts. Second-quarter 2026 net income was $58.6 million, or $1.13 per diluted share, adjusted $1.14, against $2.9 million a year earlier when securities losses weighed, with net interest income up to $149.0 million from $111.4 million and a 3.95% margin; Holmes pointed to broad-based loan demand across the Southeast footprint and heightened competition for deposits and relationships, which he attributed partly to 'the continuing changes in technology' that make customers aware of more places to hold money. Neither the earnings materials nor the calls mention an AI programme, leader, vendor or budget; customer alerts focus on fraud. FirstBank is a Tennessee state member bank supervised by the Federal Reserve. Treat this as a thin AI record for a bank whose stated edge is the combination of products and relationships.",
  keyPoints: [
    "No AI programme, leader, vendor or budget disclosed.",
    "J.D. Power number one in South Central retail banking satisfaction (March 2026); CEO cites 'the latest in financial products and capabilities' with 'hometown heart'.",
    "Insights tool in digital banking: spending by category, budgets and net-worth tracking.",
    "Southern States Bancshares acquired for $381 million in stock, closed 1 July 2025, the earliest close among 2025 deals.",
    "Q2 2026 net income $58.6 million ($1.13; adjusted $1.14); net interest income $149.0 million; NIM 3.95%; total assets $16.8 billion.",
    "Competition intensifying, partly from technology-driven deposit alternatives, per the CEO."
  ],
  leadership: [
    { name: "Christopher T. Holmes", role: "President and CEO", linkedin: "https://www.linkedin.com/in/chris-holmes-8b001038", sources: ["fbk-jdpower-2026", "fbk-q2-2026"] },
    { name: "Michael Mettee", role: "Chief Financial and Operating Officer", sources: ["fbk-q2call-2026"] }
  ],
  timeline: [
    { date: "2025-03-31", title: "Southern States Bancshares acquisition announced", detail: "$381 million in stock; first deal since 2020; expansion toward Atlanta.", sources: ["ab-southern-2025"] },
    { date: "2025-04-16", title: "Branch expansion pace maintained alongside the deal", detail: "'If anything, we want it to gain momentum.'", sources: ["ab-branches-2025"] },
    { date: "2025-07-01", title: "Southern States acquisition closes", detail: "Earliest closing among 2025 bank deals.", sources: ["ab-speed-2025"] },
    { date: "2026-03-31", title: "J.D. Power number one in South Central retail satisfaction", detail: "CEO on pairing modern capabilities with hometown heart.", sources: ["fbk-jdpower-2026"] },
    { date: "2026-06-12", title: "Insights financial tool promoted in digital banking", detail: "Spending categories, budgets and net worth.", sources: ["fbk-insights-2026"] },
    { date: "2026-07-13", title: "Second-quarter 2026 results", detail: "Net income $58.6 million; NIM 3.95%.", sources: ["fbk-q2-2026", "fbk-q2call-2026"] }
  ],
  useCases: [
    { useCase: "customer-chatbots", name: "Insights personal-finance tool", detail: "Automated spending categorisation, budgets and net-worth tracking in the app.", status: "In production", sources: ["fbk-insights-2026"] },
    { useCase: "third-party-vendors", name: "Southern States integration", detail: "Alabama and Georgia franchise absorbed from July 2025.", status: "In production", sources: ["ab-speed-2025"] },
    { useCase: "governance-general", name: "No disclosed AI deployment", detail: "Investor materials silent on AI.", status: "Announced", sources: ["fbk-q2-2026"] }
  ],
  numbers: [
    { label: "Q2 2026 net income / diluted EPS", value: "$58.6 million / $1.13 (adjusted $1.14)", asOf: "2026-07-13", sources: ["fbk-q2-2026", "fbk-q2call-2026"] },
    { label: "Net interest income / NIM, Q2 2026", value: "$149.0 million / 3.95%", asOf: "2026-07-13", sources: ["fbk-q2-2026"] },
    { label: "Southern States acquisition", value: "$381 million in stock; $2.8 billion assets", asOf: "2025-03-31", sources: ["ab-southern-2025"] },
    { label: "Total assets", value: "$16.8 billion", asOf: "2026-06-30", sources: ["fbk-q2-2026"] }
  ],
  quotes: [
    { who: "Christopher T. Holmes", role: "President and CEO", date: "2026-03-31", quote: "It demonstrates that our approach of pairing the latest in financial products and capabilities with a century of hometown heart truly sets the FirstBank experience apart.", sources: ["fbk-jdpower-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "FirstBank is a state member bank; Fed model-risk and third-party guidance govern digital tools and any AI.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer digital tools and mortgage lending bring UDAAP and adverse-action duties.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action", "cfpb-chatbots-in-consumer-finance-2023"] },
    { authority: "fdic", why: "Deposit-insurance supervision and interagency third-party guidance apply to vendor platforms.", docSlugs: ["fdic-fil-29-2023"] }
  ],
  suggestions: [
    { title: "Satisfaction leadership is the asset to protect", detail: "A number-one J.D. Power ranking sets the bar any AI in service must clear; measure AI against it." },
    { title: "Insights is a data foundation", detail: "Categorised spending and net-worth data are what personalisation models need; the bank has not said whether it uses them beyond display." },
    { title: "Technology-driven competition is acknowledged, not answered", detail: "The CEO names technology as a source of deposit competition; a stated digital and AI plan would be the response." },
    { title: "Post-merger capacity is available", detail: "With Southern States integrated and no new deal announced, the technology team has room for a first AI use case." }
  ],
  faq: [
    { q: "Does FirstBank use AI?", a: "FB Financial has not disclosed an AI programme, leader, vendor or budget. Its digital banking includes an Insights tool for spending categorisation, budgets and net worth, and its CEO describes pairing modern products and capabilities with hometown service." },
    { q: "How did FB Financial perform in the second quarter of 2026?", a: "Net income was $58.6 million, or $1.13 per diluted share, up from $2.9 million a year earlier when securities losses weighed, with net interest income of $149.0 million and a 3.95% net interest margin. Total assets were $16.8 billion after the July 2025 acquisition of Southern States Bancshares." }
  ],
  sources: [
    { id: "ab-southern-2025", title: "Nashville's FB Financial makes deal to expand near Atlanta", publisher: "American Banker", url: "https://americanbanker.com/news/nashvilles-fb-financial-makes-deal-to-expand-near-atlanta", date: "2025-03-31" },
    { id: "ab-branches-2025", title: "FB maintains brisk branch expansion pace in wake of deal", publisher: "American Banker", url: "https://americanbanker.com/news/fb-maintains-brisk-branch-expansion-pace-in-wake-of-deal", date: "2025-04-16" },
    { id: "ab-speed-2025", title: "Need for speed: Faster deal timelines may spur more bank M&A", publisher: "American Banker", url: "https://americanbanker.com/news/need-for-speed-faster-deal-timelines-may-spur-more-bank-m-a", date: "2025-08-20" },
    { id: "fbk-jdpower-2026", title: "FirstBank Ranked #1 in JD Power Retail Banking Satisfaction Study for South Central Region", publisher: "FirstBank", url: "https://www.firstbankonline.com/firstbank-ranked-1-in-jd-power-retail-banking-satisfaction-study-for-south-central-region/", date: "2026-03-31" },
    { id: "fbk-insights-2026", title: "Financial Insights Tool", publisher: "FirstBank", url: "https://firstbankonline.com/personal-banking/personal-online-and-mobile/insights", date: "2026-06-12" },
    { id: "fbk-q2-2026", title: "FB Financial Corporation Reports Second Quarter 2026 Financial Results", publisher: "FB Financial (Business Wire via FT)", url: "https://markets.ft.com/data/announce/detail?dockey=600-202607131615BIZWIRE_USPRX____20260713_BW022911-1", date: "2026-07-13" },
    { id: "fbk-q2call-2026", title: "FB Financial Q2 Earnings Call Highlights", publisher: "MarketBeat (Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/fb-financial-q2-earnings-call-150227528.html", date: "2026-07-15" }
  ],
  lastUpdated: "2026-09-10"
};

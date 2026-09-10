import type { Bank } from "@/lib/banks";

export const FIRST_FINANCIAL_OHIO: Bank = {
  slug: "first-financial-ohio",
  name: "First Financial Bancorp",
  shortName: "First Financial Bank",
  ticker: "FFBC",
  hq: "Cincinnati, OH",
  fedRank: 85,
  leadBank: "First Financial Bank",
  assetsUsdMillions: 22687,
  charter: "Ohio state member bank (Federal Reserve)",
  posture: "A 163-year-old Cincinnati acquirer that struck three deals in 13 months and converted two of them inside a year, whose technology record is integration and fraud education rather than a disclosed AI programme.",
  answerFirst:
    "First Financial Bancorp, the Cincinnati parent of First Financial Bank with about $22 billion of assets and 127 financial centres across Ohio, Indiana, Kentucky and Illinois, spent 2025 and 2026 buying and integrating. President and CEO Archie Brown, who went seven years without a deal, engineered three in 13 months: Westfield Bancorp near Cleveland for $325 million in cash and stock (June 2025), BankFinancial in Chicago for $142 million in stock (August 2025, closed January 2026, systems converted in June 2026) and Finward Bancorp, parent of Peoples Bank in Munster, Indiana, for about $208 million in stock (July 2026), which will give the bank $4.1 billion of deposits and more than 40 branches in Chicagoland. Brown said the Chicago deals 'will give us opportunities to hold some more conversations' but that 'if this is where we've landed, it's big enough'. Second-quarter 2026 net income was $76.5 million, or $0.73 per diluted share, with an adjusted efficiency ratio of 56.8%, an 18.0% return on tangible common equity and record fee income across wealth, derivatives and leasing; Westfield cost savings enter the third-quarter run rate and BankFinancial's in the fourth. On AI the bank speaks to clients rather than about itself: its 2026 annual fraud checklist tells businesses to train staff on 'current fraud trends, such as AI deepfakes and social engineering', and its commercial fraud hub offers risk-management guides. Neither the earnings calls nor the releases mention an AI programme, leader, vendor or budget. First Financial Bank is an Ohio state member bank supervised by the Federal Reserve. Treat this as a thin record for a bank whose technology capacity is consumed by conversions.",
  keyPoints: [
    "No AI programme, leader, vendor or budget disclosed; earnings calls and releases are silent on AI.",
    "Three acquisitions in 13 months: Westfield Bancorp ($325 million), BankFinancial ($142 million, converted June 2026) and Finward Bancorp (about $208 million, announced July 2026).",
    "Post-Finward Chicagoland presence: $4.1 billion of deposits and more than 40 branches.",
    "Q2 2026 net income $76.5 million ($0.73 per share); adjusted efficiency ratio 56.8%; ROTCE 18.0%; record fee income.",
    "Client AI content is defensive: the 2026 fraud checklist flags AI deepfakes and social engineering.",
    "CEO Archie Brown: 'if this is where we've landed, it's big enough', with integration the near-term priority."
  ],
  leadership: [
    { name: "Archie Brown", role: "President and CEO", sources: ["ab-finward-2026", "ffbc-q2-2026"] },
    { name: "Jamie Anderson", role: "Chief Financial Officer", linkedin: "https://www.linkedin.com/in/james-jamie-anderson-17a85975", sources: ["ffbc-q2-2026"] }
  ],
  timeline: [
    { date: "2025-06-23", title: "Westfield Bancorp acquisition announced", detail: "$325 million in cash and stock; northeast Ohio expansion.", sources: ["ab-westfield-2025"] },
    { date: "2025-08-12", title: "BankFinancial acquisition announced", detail: "$142 million in stock; bigger Chicago presence.", sources: ["ab-bankfinancial-2025"] },
    { date: "2026-01-08", title: "2026 annual fraud checklist", detail: "Businesses told to train staff on AI deepfakes and social engineering.", sources: ["ffbc-fraud-2026"] },
    { date: "2026-04-23", title: "First-quarter 2026 results", detail: "Net income $74.4 million; $0.71 per share.", sources: ["ffbc-q2-2026"] },
    { date: "2026-07-21", title: "Second-quarter 2026 results and Finward acquisition", detail: "Net income $76.5 million; $208 million all-stock deal for Peoples Bank's parent.", sources: ["ffbc-q2-2026", "ab-finward-2026"] },
    { date: "2026-01-31", title: "BankFinancial acquisition closes", detail: "All-stock deal completed in January 2026; systems converted in June.", sources: ["ab-finward-2026"] }
  ],
  useCases: [
    { useCase: "third-party-vendors", name: "Serial acquisition conversions", detail: "BankFinancial converted June 2026; Westfield savings in Q3 run rate; Finward next.", status: "In production", sources: ["ab-finward-2026", "ffbc-q2-2026"] },
    { useCase: "fraud", name: "Commercial fraud education including AI deepfakes", detail: "Annual checklist and commercial fraud hub for business clients.", status: "In production", sources: ["ffbc-fraud-2026"] },
    { useCase: "governance-general", name: "No disclosed AI deployment", detail: "No AI reference in investor materials.", status: "Announced", sources: ["ffbc-q2-2026"] }
  ],
  numbers: [
    { label: "Q2 2026 net income / diluted EPS", value: "$76.5 million / $0.73", asOf: "2026-07-21", sources: ["ffbc-q2-2026"] },
    { label: "Adjusted efficiency ratio / ROTCE, Q2 2026", value: "56.8% / 18.0%", asOf: "2026-07-21", sources: ["ffbc-q2-2026"] },
    { label: "Finward Bancorp acquisition", value: "≈ $208 million in stock; $2 billion assets", asOf: "2026-07-21", sources: ["ab-finward-2026"] },
    { label: "Chicagoland after Finward", value: "$4.1 billion deposits; 40+ branches", asOf: "2026-07-22", sources: ["ab-finward-2026"] }
  ],
  quotes: [
    { who: "Archie Brown", role: "President and CEO", date: "2026-07-22", quote: "We think there's more to do, but I think if this is where we've landed, it's big enough.", sources: ["ab-finward-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "First Financial Bank is a state member bank; Fed model-risk and third-party guidance govern conversions and any AI adoption.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer and small-business products bring adverse-action and UDAAP duties to any automated decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "fdic", why: "Deposit-insurance supervision and interagency third-party guidance apply to vendor platforms across acquired banks.", docSlugs: ["fdic-fil-29-2023"] }
  ],
  suggestions: [
    { title: "Three conversions in a year is the technology story", detail: "Integration discipline at this pace is rare; it is also why no AI programme has surfaced, and the pause after Finward is the window." },
    { title: "Fee businesses are where AI would show", detail: "Record wealth, derivatives and leasing income are data-rich lines where analytics pay before core banking does." },
    { title: "Fraud guidance to clients invites fraud tooling", detail: "Warning clients about AI deepfakes while disclosing no detection capability is a gap peers are closing." },
    { title: "Acquired banks bring acquired models", detail: "A consolidated model inventory across Westfield, BankFinancial and Finward will be an exam expectation."}
  ],
  faq: [
    { q: "Does First Financial Bank use AI?", a: "First Financial Bancorp has not disclosed an AI programme, leader, vendor or budget. Its AI-related content is client education, including a 2026 fraud checklist that warns businesses about AI deepfakes and social engineering." },
    { q: "What acquisitions has First Financial made?", a: "Three in 13 months: Westfield Bancorp near Cleveland for $325 million, BankFinancial in Chicago for $142 million (closed January 2026, converted June 2026) and Finward Bancorp, parent of Peoples Bank in Munster, Indiana, for about $208 million in stock, announced July 2026." }
  ],
  sources: [
    { id: "ab-westfield-2025", title: "First Financial Bancorp to acquire Ohio bank in $325M deal", publisher: "American Banker", url: "https://americanbanker.com/news/first-financial-bancorp-to-acquire-ohio-bank-in-325m-deal", date: "2025-06-23" },
    { id: "ab-bankfinancial-2025", title: "Ohio's First Financial strikes deal to get bigger in Chicago", publisher: "American Banker", url: "https://americanbanker.com/news/ohios-first-financial-strikes-deal-to-get-bigger-in-chicago", date: "2025-08-12" },
    { id: "ffbc-fraud-2026", title: "2026 Annual Fraud Checklist", publisher: "First Financial Bank", url: "https://bankatfirst.com/content/dam/bankatfirst/business/annual-fraud-checklist-2026.pdf", date: "2026-01-08" },
    { id: "ffbc-q2-2026", title: "First Financial Bancorp Announces Second Quarter 2026 Financial Results, Quarterly Dividend Increase & Acquisition of Finward Bancorp", publisher: "First Financial Bancorp (PR Newswire via Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/first-financial-bancorp-announces-second-203000197.html", date: "2026-07-21" },
    { id: "ab-finward-2026", title: "Cincinnati's First Financial strikes third deal in 13 months", publisher: "American Banker", url: "https://www.americanbanker.com/news/cincinnatis-first-financial-strikes-third-deal-in-13-months", date: "2026-07-22" }
  ],
  lastUpdated: "2026-09-10"
};

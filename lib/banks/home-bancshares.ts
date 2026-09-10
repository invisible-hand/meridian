import type { Bank } from "@/lib/banks";

export const HOME_BANCSHARES: Bank = {
  slug: "home-bancshares",
  name: "Home BancShares (Centennial Bank)",
  shortName: "Centennial Bank",
  ticker: "HOMB",
  hq: "Conway, AR",
  fedRank: 84,
  leadBank: "Centennial Bank",
  assetsUsdMillions: 23029,
  charter: "Arkansas state member bank (Federal Reserve)",
  posture: "One of the most profitable banks in the country, run by a founder-chairman who talks about deals and discipline rather than technology, with a back-office system upgrade pacing its Tennessee acquisition and no disclosed AI programme.",
  answerFirst:
    "Home BancShares, the Conway, Arkansas parent of Centennial Bank with about $23 billion of assets across Arkansas, Florida, Texas, Alabama and now Tennessee, is defined by chairman and CEO John Allison's record of buying banks and running them at industry-leading returns, not by technology disclosure. After three years fixing credit problems, Allison told investors in October 2025 that 'I believe in fixing your existing problems before you make a new move', met with activist HoldCo Asset Management to offer Home as a buyer for banks it pressures, and in December 2025 agreed to pay $150 million in stock for the $1.8 billion-asset Mountain Commerce Bancorp in Knoxville, the company's first deal in nearly four years and its entry into Tennessee, which he ranks with Texas and Florida as 'the three best states in the nation'. The acquisition closed in the second quarter of 2026, and Centennial Bank CEO Stephen Tipton said a back-office computer upgrade already under way meant Mountain Commerce would not begin converting until November, with maximum savings 'probably the end of 2026'. Second-quarter 2026 results set records: net income $119.3 million, or $0.59 per share, adjusted $128.1 million, or $0.64, revenue $295 million, adjusted pre-tax pre-provision revenue of $171 million, an adjusted efficiency ratio of 40.46%, an adjusted return on assets of 2.09% and a 4.51% margin, with nearly $450 million of cash at the parent. Neither the earnings releases nor the calls discuss artificial intelligence, an AI leader, vendor or budget; the technology references are the systems upgrade and the conversion timetable. Centennial Bank is an Arkansas state member bank supervised by the Federal Reserve. Treat this as a thin record for a bank whose stated model is 'boring is beautiful' profitability.",
  keyPoints: [
    "No AI programme, leader, vendor or budget disclosed in earnings materials or calls.",
    "Mountain Commerce Bancorp (Knoxville, $1.8 billion assets) acquired for $150 million in stock, announced December 2025, closed Q2 2026; conversion delayed to November 2026 by a back-office systems upgrade.",
    "Record Q2 2026: net income $119.3 million ($0.59), adjusted $128.1 million ($0.64); revenue $295 million; adjusted efficiency ratio 40.46%; adjusted ROA 2.09%.",
    "Chairman John Allison offered Home as a buyer for banks pressured by activist HoldCo Asset Management.",
    "Discipline first: 'fixing your existing problems before you make a new move' after three years of credit clean-up.",
    "Nearly $450 million of parent-company cash and 15 million shares of buyback authority at mid-2026."
  ],
  leadership: [
    { name: "John W. Allison", role: "Chairman and CEO, Home BancShares", sources: ["ab-mountain-2025", "homb-q2-2026"] },
    { name: "Stephen Tipton", role: "CEO, Centennial Bank", sources: ["homb-q1call-2026", "homb-q2-2026"] },
    { name: "Kevin Hester", role: "President and Chief Lending Officer", linkedin: "https://www.linkedin.com/in/kevin-hester-6a052639", sources: ["homb-q1call-2026"] }
  ],
  timeline: [
    { date: "2025-10-24", title: "Preparing a deal after fixing problems", detail: "Letter of intent signed for the first acquisition in more than three years.", sources: ["ab-prep-2025"] },
    { date: "2025-11-19", title: "'We'll be your buyer' to activist HoldCo", detail: "Allison meets HoldCo and offers Home as an acquirer.", sources: ["ab-holdco-2025"] },
    { date: "2025-12-08", title: "Mountain Commerce Bancorp deal announced", detail: "$150 million in stock; entry into Tennessee.", sources: ["ab-mountain-2025"] },
    { date: "2026-04-16", title: "Q1 2026 call: systems upgrade delays conversion to November", detail: "Net income $118.2 million; ROA 2.09%; CET1 16.7%.", sources: ["homb-q1call-2026"] },
    { date: "2026-07-15", title: "Record second-quarter 2026 results; Mountain Commerce closed", detail: "Adjusted net income $128.1 million; revenue $295 million; efficiency 40.46%.", sources: ["homb-q2-2026"] },
    { date: "2026-06-30", title: "Mountain Commerce acquisition completed during the second quarter", detail: "$12.7 million of merger-related expenses in the quarter.", sources: ["homb-q2-2026"] }
  ],
  useCases: [
    { useCase: "third-party-vendors", name: "Back-office systems upgrade and Mountain Commerce conversion", detail: "Upgrade in progress; acquired bank converts in November 2026.", status: "Rolling out", sources: ["homb-q1call-2026"] },
    { useCase: "governance-general", name: "No disclosed AI deployment", detail: "Earnings materials silent on AI.", status: "Announced", sources: ["homb-q2-2026"] }
  ],
  numbers: [
    { label: "Q2 2026 net income / adjusted net income", value: "$119.3 million ($0.59) / $128.1 million ($0.64)", asOf: "2026-07-15", sources: ["homb-q2-2026"] },
    { label: "Adjusted efficiency ratio / adjusted ROA, Q2 2026", value: "40.46% / 2.09%", asOf: "2026-07-15", sources: ["homb-q2-2026"] },
    { label: "Mountain Commerce Bancorp acquisition", value: "$150 million in stock; $1.8 billion assets", asOf: "2025-12-08", sources: ["ab-mountain-2025"] },
    { label: "CET1 ratio, Q1 2026", value: "16.7%", asOf: "2026-04-16", sources: ["homb-q1call-2026"] }
  ],
  quotes: [
    { who: "John W. Allison", role: "Chairman and CEO", date: "2025-10-24", quote: "I believe in fixing your existing problems before you make a new move. That's exactly what Home has been doing for the past three years.", sources: ["ab-prep-2025"] },
    { who: "John W. Allison", role: "Chairman and CEO", date: "2025-12-08", quote: "I think Tennessee, Texas and Florida are the three best states in the nation.", sources: ["ab-mountain-2025"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "Centennial Bank is a state member bank; Fed model-risk and third-party guidance govern the systems upgrade and any future AI.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer lending across five states brings adverse-action and UDAAP duties to any automated decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "fdic", why: "Deposit-insurance supervision and interagency third-party guidance apply to vendor platforms.", docSlugs: ["fdic-fil-29-2023"] }
  ],
  suggestions: [
    { title: "A 40% efficiency ratio removes the usual AI motive", detail: "Home does not need AI to cut cost; the case would be fraud, credit surveillance and scaling acquisitions without adding staff." },
    { title: "The systems upgrade is the moment to add capability", detail: "A back-office platform change that gates a conversion is when vendor AI modules are cheapest to switch on; nothing has been said." },
    { title: "Serial acquirers accumulate model debt", detail: "Each acquired bank brings its own credit and fraud models; a consolidated inventory is what examiners will ask for." },
    { title: "Disclosure lag will be noticed", detail: "A bank this profitable and this visible will eventually be asked what it runs; a short AI statement would pre-empt it." }
  ],
  faq: [
    { q: "Does Centennial Bank use AI?", a: "Home BancShares has not disclosed any AI programme, leader, vendor or budget. Its technology disclosures concern a back-office systems upgrade and the timetable for converting Mountain Commerce Bank onto its platforms in November 2026." },
    { q: "How profitable is Home BancShares?", a: "In the second quarter of 2026 it reported record adjusted net income of $128.1 million, or $0.64 per share, revenue of $295 million, an adjusted efficiency ratio of 40.46% and an adjusted return on assets of 2.09%, with a 4.51% net interest margin." }
  ],
  sources: [
    { id: "ab-prep-2025", title: "With problems behind it, Home BancShares preps for a deal", publisher: "American Banker", url: "https://americanbanker.com/news/with-problems-behind-it-home-bancshares-preps-for-a-deal", date: "2025-10-24" },
    { id: "ab-holdco-2025", title: "Home BancShares to activist investor: 'We'll be your buyer'", publisher: "American Banker", url: "https://www.americanbanker.com/news/home-bancshares-to-activist-investor-well-be-your-buyer", date: "2025-11-19" },
    { id: "ab-mountain-2025", title: "Home ends dry spell with $150M deal for Tennessee bank", publisher: "American Banker", url: "https://americanbanker.com/news/home-ends-dry-spell-with-150m-deal-for-tennessee-bank", date: "2025-12-08" },
    { id: "homb-q1call-2026", title: "Home BancShares Q1 Earnings Call Highlights", publisher: "MarketBeat (Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/home-bancshares-q1-earnings-call-200427849.html", date: "2026-04-16" },
    { id: "homb-q2-2026", title: "Record Revenue and Successful Mountain Commerce Bancorp Acquisition Drive Strong Second Quarter Results for HOMB", publisher: "Home BancShares (GlobeNewswire)", url: "https://globenewswire.com/news-release/2026/07/15/3328159/0/en/record-revenue-and-successful-mountain-commerce-bancorp-acquisition-drive-strong-second-quarter-results-for-homb.html", date: "2026-07-15" }
  ],
  lastUpdated: "2026-09-10"
};

import type { Bank } from "@/lib/banks";

export const SERVISFIRST: Bank = {
  slug: "servisfirst",
  name: "ServisFirst Bancshares",
  shortName: "ServisFirst Bank",
  ticker: "SFBS",
  hq: "Birmingham, AL",
  fedRank: 97,
  leadBank: "ServisFirst Bank",
  assetsUsdMillions: 18170,
  charter: "Alabama state nonmember bank (FDIC)",
  posture: "A branch-light commercial bank with an efficiency ratio under 30% and a stated model of 'loan making and deposit taking', which has never needed an AI narrative and does not offer one.",
  answerFirst:
    "ServisFirst Bancshares, the Birmingham, Alabama parent of ServisFirst Bank with about $18 billion of assets, is the most efficient bank in this ranking and one of the quietest on technology. Its second quarter of 2026 produced net income of $85.8 million, or $1.57 per diluted share, up 40% from a year earlier, a 1.91% return on assets, a 17.71% return on common equity, a net interest margin of 3.63%, up 53 basis points year on year, and an efficiency ratio under 30%, down from 33%; chairman, president and CEO Tom Broughton cited 'positive momentum in virtually all our markets' with a record loan pipeline, and CFO David Sparacio described 'superior performance, as we have historically delivered'. The model is deliberately simple: a branch-light network of commercial offices across Alabama, Florida, Georgia, the Carolinas, Tennessee and Virginia staffed by lifted-out banking teams, a December 2025 expansion into Houston under regional CEO Christopher Dvorachek, and, in the words of its investor presentation, 'loan making and deposit taking'. American Banker's top-performer analysis notes it sustained strong profitability with a commercial-real-estate-heavy book and grew loans 8.2% in a year when peers managed 2.6%, and the bank ranked sixth among top-performing $10 billion to $50 billion banks in 2026. Neither the earnings releases, the calls nor the newsroom mention artificial intelligence, an AI leader, vendor or budget; the bank's public communications are office openings, market-president hires and an American Bankers Association partnership. ServisFirst Bank is an Alabama state nonmember bank supervised by the FDIC. Treat this as a thin AI record by design: the bank's economics do not depend on technology it would need to disclose.",
  keyPoints: [
    "No AI programme, leader, vendor or budget disclosed; communications cover offices, hires and industry partnerships.",
    "Efficiency ratio under 30% in Q2 2026 (from 33%); ROA 1.91%; ROCE 17.71%; NIM 3.63%.",
    "Q2 2026 net income $85.8 million ($1.57 per share), up 40% year on year; record loan pipeline.",
    "Branch-light, team lift-out model: 'loan making and deposit taking'; Houston entry in December 2025 with 18 bankers onboarded by spring 2026.",
    "Ranked sixth among top-performing $10 billion to $50 billion banks in 2026 (fifth in 2025).",
    "Liquidity of $1.46 billion in cash with no FHLB advances or brokered deposits; CET1 11.83%."
  ],
  leadership: [
    { name: "Tom Broughton", role: "Chairman, President and CEO", sources: ["sfbs-q2-2026", "ab-texas-2025"] },
    { name: "David Sparacio", role: "Chief Financial Officer", linkedin: "https://www.linkedin.com/in/david-sparacio-3148953", sources: ["sfbs-q2-2026"] },
    { name: "Christopher Dvorachek", role: "Regional CEO, Texas", linkedin: "https://www.linkedin.com/in/christopher-dvorachek-43ab6719", sources: ["ab-texas-2025"] }
  ],
  timeline: [
    { date: "2025-07-24", title: "Named among top-performing banks for lending niches", detail: "CRE-heavy book with strong profitability; 8.2% loan growth.", sources: ["ab-niches-2025"] },
    { date: "2025-12-15", title: "Expansion into Texas with a Houston office", detail: "First office outside the Southeast; regional CEO Christopher Dvorachek.", sources: ["ab-texas-2025"] },
    { date: "2026-05-18", title: "Panama City office opens", detail: "Florida panhandle expansion.", sources: ["sfbs-panama-2026"] },
    { date: "2026-07-06", title: "ABA Premier Partner", detail: "Industry-association partnership deepened.", sources: ["sfbs-aba-2026"] },
    { date: "2026-07-20", title: "Second-quarter 2026 results", detail: "Net income $85.8 million; efficiency ratio under 30%.", sources: ["sfbs-q2-2026"] },
    { date: "2026-08-17", title: "Sixth among top-performing $10 billion to $50 billion banks", detail: "American Banker and Capital Performance Group ranking.", sources: ["sfbs-topperf-2026"] }
  ],
  useCases: [
    { useCase: "governance-general", name: "No disclosed AI deployment", detail: "Simple operating model; no technology narrative in investor materials.", status: "Announced", sources: ["sfbs-q2-2026"] },
    { useCase: "credit-underwriting", name: "Relationship commercial lending via team lift-outs", detail: "Branch-light expansion into new metros with experienced bankers.", status: "In production", sources: ["ab-texas-2025", "ab-niches-2025"] }
  ],
  numbers: [
    { label: "Q2 2026 net income / diluted EPS", value: "$85.8 million / $1.57 (+40% year on year)", asOf: "2026-07-20", sources: ["sfbs-q2-2026"] },
    { label: "Efficiency ratio, Q2 2026", value: "< 30% (from 33% a year earlier)", asOf: "2026-07-20", sources: ["sfbs-q2-2026"] },
    { label: "Return on assets / return on common equity, Q2 2026", value: "1.91% / 17.71%", asOf: "2026-07-20", sources: ["sfbs-q2-2026"] },
    { label: "Cash and equivalents", value: "$1.46 billion (8% of assets); no FHLB advances or brokered deposits", asOf: "2026-06-30", sources: ["sfbs-q2-2026"] }
  ],
  quotes: [
    { who: "David Sparacio", role: "Chief Financial Officer", date: "2026-07-20", quote: "Net income growth of 30% year-over-year, while maintaining an efficiency ratio below 30%, along with continued improvement in our net interest margin resulted in superior performance, as we have historically delivered.", sources: ["sfbs-q2-2026"] },
    { who: "Tom Broughton", role: "Chairman, President and CEO", date: "2025-12-15", quote: "We are thrilled to officially launch ServisFirst Bank in Texas under Chris's leadership.", sources: ["ab-texas-2025"] }
  ],
  regulatory: [
    { authority: "fdic", why: "ServisFirst Bank is a state nonmember bank; FDIC model-risk and third-party guidance would govern any AI adopted in lending or operations.", docSlugs: ["fdic-fil-29-2023", "fdic-fil-15-2026"] },
    { authority: "federal-reserve", why: "Holding-company oversight of a CRE-concentrated, fast-growing balance sheet.", docSlugs: ["fed-sr-11-7"] },
    { authority: "cfpb", why: "Limited consumer business, but any automated decisioning would carry adverse-action duties.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] }
  ],
  suggestions: [
    { title: "There is no cost case for AI here", detail: "Below-30% efficiency leaves nothing for automation to cut; any AI adoption would be about credit surveillance or growth capacity." },
    { title: "CRE concentration is where analytics would matter", detail: "A CRE-heavy book growing 8% a year is the portfolio examiners want monitored with early-warning models." },
    { title: "Team lift-outs bring their own tools", detail: "Bankers recruited from larger institutions arrive expecting the data and workflow tools they left; retention may force the technology question." },
    { title: "Silence is consistent with the brand", detail: "A bank that markets simplicity should not be expected to announce AI; the risk is only that examiners ask what vendors run underneath." }
  ],
  faq: [
    { q: "Does ServisFirst Bank use AI?", a: "ServisFirst has not disclosed any AI programme, leader, vendor or budget, and its investor materials do not mention artificial intelligence. Its model is branch-light commercial lending and deposit gathering with an efficiency ratio under 30%." },
    { q: "How profitable is ServisFirst?", a: "In the second quarter of 2026 it earned $85.8 million, or $1.57 per share, up 40% year on year, with a 1.91% return on assets, a 17.71% return on common equity and an efficiency ratio below 30%. It ranked sixth among top-performing $10 billion to $50 billion banks in 2026." }
  ],
  sources: [
    { id: "ab-niches-2025", title: "Lending niches helped these banks to outperform their peers", publisher: "American Banker", url: "https://americanbanker.com/news/top-performing-banks-used-lending-niches-to-fuel-growth", date: "2025-07-24" },
    { id: "ab-texas-2025", title: "Alabama's ServisFirst expands beyond Southeast into Texas", publisher: "American Banker", url: "https://www.americanbanker.com/news/alabamas-servisfirst-expands-beyond-southeast-into-texas", date: "2025-12-16" },
    { id: "sfbs-panama-2026", title: "ServisFirst Bank Opens New Panama City Office", publisher: "ServisFirst Bank", url: "https://servisfirstbank.com/news/5-18-26", date: "2026-05-18" },
    { id: "sfbs-aba-2026", title: "ServisFirst Bank Strengthens Longstanding Relationship with American Bankers Association as Premier Partner", publisher: "ServisFirst Bank", url: "https://servisfirstbank.com/news/7.6.26", date: "2026-07-06" },
    { id: "sfbs-q2-2026", title: "ServisFirst Bancshares, Inc. Announces Results for Second Quarter of 2026", publisher: "ServisFirst Bancshares (GlobeNewswire)", url: "https://globenewswire.com/news-release/2026/07/20/3330087/0/en/ServisFirst-Bancshares-Inc-Announces-Results-for-Second-Quarter-of-2026.html", date: "2026-07-20" },
    { id: "sfbs-topperf-2026", title: "ServisFirst Bancshares, Inc. Ranks Sixth Among Top-Performing Banks with between $10 Billion to $50 Billion in Assets", publisher: "ServisFirst Bank", url: "https://servisfirstbank.com/news/AmericanBankerTopPerforming", date: "2026-08-17" }
  ],
  lastUpdated: "2026-09-10"
};

import type { Bank } from "@/lib/banks";

export const UNITED_BANKSHARES: Bank = {
  slug: "united-bankshares",
  name: "United Bankshares",
  shortName: "United Bank",
  ticker: "UBSI",
  hq: "Fairfax, VA (holding company: Charleston, WV)",
  fedRank: 60,
  leadBank: "United Bank",
  assetsUsdMillions: 33609,
  charter: "Virginia state member bank (Federal Reserve)",
  posture: "A 187-year-old Mid-Atlantic and Southeast bank posting record earnings with a 'consistent and disciplined' management style, and no public AI programme beyond consumer education.",
  answerFirst:
    "United Bankshares, the Charleston, West Virginia holding company for United Bank, headquartered in Fairfax, Virginia, with about $33 billion of assets and more than 240 offices across eight states and Washington, D.C., is one of the largest US banks with no disclosed AI strategy. Its public record is about consistency: record second-quarter 2026 earnings of $131.4 million, or $0.95 per diluted share, with a 1.56% return on average assets, which chief executive Richard M. Adams Jr. attributed to 'our consistent and disciplined approach to managing our Company's affairs', following 'resilient' first-quarter results and a year of 'strong organic growth across our markets and strategic expansion', including a new office in Charlotte's SouthPark and the promotion of Marshall Cooper to regional president of the Southern Region. The bank's only AI content is consumer education: an August 2025 piece on how AI-powered budgeting tools with 'real-time expense tracking, personalized insights, and automation' can help households save, and a 2026 guide to spotting fraudulent websites. No AI leader, vendor, use case, budget or roadmap has been named in releases or on its investor site, and the executive chairman, Richard M. Adams, was inducted into the Washington Business Hall of Fame in 2025 for a career built on acquisitions and credit discipline rather than technology. United Bank is a Virginia state member bank supervised by the Federal Reserve, so any AI it adopts in lending or servicing will be judged under the Fed's model-risk guidance and the CFPB's consumer rules. Treat this page as a thin record for a well-performing bank that has chosen not to talk about AI.",
  keyPoints: [
    "No AI programme, leader, vendor, budget or roadmap disclosed as of September 2026.",
    "Only AI content is consumer-facing: a guide to AI-powered budgeting tools (August 2025) and website-fraud guidance (June 2026).",
    "Record Q2 2026 earnings of $131.4 million ($0.95 per share); ROA 1.56%; return on tangible common equity 15.15%.",
    "Management identity is discipline and consistency, per CEO Richard M. Adams Jr.'s quarterly statements.",
    "Footprint: about $33 billion of assets, 240-plus offices in North Carolina, South Carolina, Georgia, Virginia, West Virginia, Maryland, Ohio and Pennsylvania; new Charlotte SouthPark office in 2025.",
    "Recognised as a best company to work for and best-in-state bank in 2025."
  ],
  leadership: [
    { name: "Richard M. Adams Jr.", role: "Chief Executive Officer", sources: ["ubsi-q2-2026", "ubsi-187-2026"] },
    { name: "Richard M. Adams", role: "Executive Chairman", sources: ["ubsi-hof-2025"] },
    { name: "Marshall Cooper", role: "Regional President, Southern Region", linkedin: "https://www.linkedin.com/in/marshall-cooper-01b518114", sources: ["ubsi-cooper-2025"] }
  ],
  timeline: [
    { date: "2025-06-13", title: "Charlotte SouthPark office opens; Southern Region president promoted", detail: "Expansion in the Carolinas; Marshall Cooper to regional president.", sources: ["ubsi-charlotte-2025", "ubsi-cooper-2025"] },
    { date: "2025-07-28", title: "Best company to work for and best-in-state bank", detail: "About $33 billion of assets and 240-plus offices.", sources: ["ubsi-recognition-2025"] },
    { date: "2025-08-19", title: "'How AI can help you save' consumer guide", detail: "AI-powered budgeting tools with expense tracking and automation.", sources: ["ubsi-aisave-2025"] },
    { date: "2026-03-17", title: "187 years of service", detail: "CEO cites strong organic growth and strategic expansion.", sources: ["ubsi-187-2026"] },
    { date: "2026-04-23", title: "First-quarter 2026 earnings", detail: "'Resilient results' amid geopolitical and macro uncertainty.", sources: ["ubsi-q1-2026"] },
    { date: "2026-06-29", title: "Guide to fraudulent websites", detail: "Domain-checking habits for customers.", sources: ["ubsi-fraudsites-2026"] },
    { date: "2026-07-23", title: "Record second-quarter 2026 earnings", detail: "$131.4 million, $0.95 per share; ROA 1.56%; ROTCE 15.15%.", sources: ["ubsi-q2-2026"] }
  ],
  useCases: [
    { useCase: "governance-general", name: "No disclosed AI deployment", detail: "No AI programme, vendor or leader named in releases or investor materials.", status: "Announced", sources: ["ubsi-q2-2026"] },
    { useCase: "fraud", name: "Customer fraud-awareness content", detail: "Fraudulent-website and card-control guidance.", status: "In production", sources: ["ubsi-fraudsites-2026"] }
  ],
  numbers: [
    { label: "Second-quarter 2026 earnings / EPS", value: "$131.4 million (record) / $0.95", asOf: "2026-07-23", sources: ["ubsi-q2-2026"] },
    { label: "Return on average assets / tangible common equity, Q2 2026", value: "1.56% / 15.15%", asOf: "2026-07-23", sources: ["ubsi-q2-2026"] },
    { label: "Total assets / offices", value: "≈ $33 billion / 240+", asOf: "2025-07-28", sources: ["ubsi-recognition-2025"] }
  ],
  quotes: [
    { who: "Richard M. Adams Jr.", role: "Chief Executive Officer", date: "2026-07-23", quote: "We delivered record results in the second quarter, and our consistent and disciplined approach to managing our Company's affairs continues to pay dividends.", sources: ["ubsi-q2-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "United Bank is a state member bank; Fed model-risk and third-party guidance would govern any AI adopted in lending, fraud or servicing.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer deposit, card and mortgage products bring UDAAP and adverse-action duties to any automated decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "fdic", why: "Deposit-insurance supervision and interagency third-party guidance apply to vendor technology.", docSlugs: ["fdic-fil-29-2023"] }
  ],
  suggestions: [
    { title: "Silence is a choice, and it is working financially", detail: "Record earnings without an AI narrative show the market does not yet price AI disclosure at this size; that changes when peers' efficiency ratios move." },
    { title: "The consumer guide points at the gap", detail: "Telling customers to use AI budgeting apps from third parties, while offering none, is an invitation to fintech disintermediation in the bank's own app." },
    { title: "Discipline is the right base for a late start", detail: "A bank that manages credit this consistently can adopt vendor AI in fraud and servicing with less governance debt than early movers carry." },
    { title: "Watch the 10-K risk factors", detail: "The first substantive AI statement from a bank like this usually appears as a risk factor before it appears as a product." }
  ],
  faq: [
    { q: "Does United Bank use AI?", a: "United Bankshares has not disclosed any AI programme, AI leader, vendor, budget or use case. Its only AI-related publication is consumer education on AI-powered budgeting tools. It is a Virginia state member bank supervised by the Federal Reserve." },
    { q: "How is United Bankshares performing?", a: "It reported record second-quarter 2026 earnings of $131.4 million, or $0.95 per diluted share, with a 1.56% return on average assets and a 15.15% return on average tangible common equity, following what the CEO called resilient first-quarter results." }
  ],
  sources: [
    { id: "ubsi-charlotte-2025", title: "United Bank Opens New Location in Charlotte's Bustling SouthPark Neighborhood", publisher: "United Bank", url: "https://bankwithunited.com/news/corporate-financial/united-bank-opens-new-location-in-charlottes-bustling-southpark-neighborhood.html", date: "2025-06-13" },
    { id: "ubsi-cooper-2025", title: "United Bank Promotes Marshall Cooper to Regional President of Southern Region", publisher: "United Bank", url: "https://bankwithunited.com/news/corporate-financial/united-bank-promotes-marshall-cooper.html", date: "2025-06-13" },
    { id: "ubsi-hof-2025", title: "United Bank Executive Chairman Richard M. Adams to be inducted into Washington Business Hall of Fame", publisher: "United Bank", url: "https://bankwithunited.com/news/archive/corporate-financial/united-bank-executive-chairman-richard-m-adams-to-be-inducted-into-washington-business-hall-of-fame.html", date: "2025-06-13" },
    { id: "ubsi-recognition-2025", title: "United Bank Receives National Recognition as a Best Company to Work for and Best-in-State Bank for 2025", publisher: "United Bank", url: "https://bankwithunited.com/news/corporate-financial/united-bank-receives-national-recognition-as-a-best-company-to-work-for-and-best-in-state-bank-for-2025.html", date: "2025-07-28" },
    { id: "ubsi-aisave-2025", title: "How AI Can Help You Save", publisher: "United Bank", url: "https://www.bankwithunited.com/learning/saving-budgeting/how-ai-can-help-you-save.html", date: "2025-08-19" },
    { id: "ubsi-187-2026", title: "United Bank Celebrates 187 Years of Service", publisher: "United Bank", url: "https://bankwithunited.com/news/corporate-financial/united-bank-celebrates-187-years-of-service.html", date: "2026-03-17" },
    { id: "ubsi-q1-2026", title: "United Bankshares, Inc. Announces Earnings for the First Quarter of 2026", publisher: "United Bankshares", url: "https://bankwithunited.com/news/financial-news/united-bankshares-inc-announces-earnings-for-first-quarter-2026.html", date: "2026-04-23" },
    { id: "ubsi-fraudsites-2026", title: "How to Protect Yourself from Fraudulent Websites", publisher: "United Bank", url: "https://bankwithunited.com/learning/safety-security/protect-yourself-from-fraudulent-websites.html", date: "2026-06-29" },
    { id: "ubsi-q2-2026", title: "United Bankshares, Inc. Announces Record Earnings for the Second Quarter of 2026", publisher: "United Bankshares", url: "https://bankwithunited.com/news/financial-news/united-bankshares-inc-announces-record-earnings-for-the-second-quarter-of-2026.html", date: "2026-07-23" }
  ],
  lastUpdated: "2026-09-10"
};

import type { Bank } from "@/lib/banks";

export const FIRST_HAWAIIAN: Bank = {
  slug: "first-hawaiian",
  name: "First Hawaiian, Inc.",
  shortName: "First Hawaiian",
  ticker: "FHB",
  hq: "Honolulu, HI",
  fedRank: 80,
  leadBank: "First Hawaiian Bank",
  assetsUsdMillions: 24267,
  charter: "Hawaii state nonmember bank (FDIC)",
  posture: "Hawaii's oldest bank has put its AI programme under a newly promoted digital-banking executive and is about to add 68 California branches through the $2 billion TriCo acquisition, its first mainland network since splitting from Bank of the West.",
  answerFirst:
    "First Hawaiian, Inc., the Honolulu parent of First Hawaiian Bank with about $24 billion of assets, made its AI ownership explicit in January 2026 when chairman, president and CEO Bob Harrison promoted Jason Dang to executive vice president and manager of the Digital Banking and Services Division, responsible for enterprise digital transformation across digital banking, servicing and acquisition platforms and for leading the bank's artificial intelligence programme, establishing both its strategy and governance. The bank has not named vendors, use cases in production or a budget, and its customer-facing AI content is defensive: deepfake awareness for work and home, malware and job-scam warnings. The strategic story of 2026 is the mainland. On 13 July First Hawaiian agreed to buy TriCo Bancshares, parent of Tri Counties Bank in Chico, California, for about $2 billion in stock, gaining 68 branches in Northern and Central California and $8.4 billion of deposits, keeping the Tri Counties brand and CEO Rick Smith as a board member and adviser; the combined company will have $34 billion of assets, $29 billion of deposits and 113 branches, with 25% cost savings projected and closing expected near year-end. Harrison said the bank has lent in California since the mid-1990s but 'what we've lacked since our separation from Bank of the West is a branch network', while insisting 'Hawaii is still home'. Second-quarter 2026 net income was $73.4 million, or $0.60 per diluted share, with the net interest margin up six basis points to 3.25%. First Hawaiian Bank is a Hawaii state nonmember bank supervised by the FDIC; integrating TriCo's systems will be the technology organisation's main task through 2027.",
  keyPoints: [
    "AI programme owned by EVP Jason Dang, Digital Banking and Services Division, promoted January 2026 with responsibility for AI strategy and governance.",
    "No AI vendor, production use case or budget disclosed; customer content covers deepfakes, malware and job scams.",
    "TriCo Bancshares acquisition (announced 13 July 2026): about $2 billion in stock, 68 California branches, $8.4 billion of deposits, Tri Counties brand retained; close expected near year-end.",
    "Combined company: $34 billion of assets, $29 billion of deposits, 113 branches in Hawaii and California; 25% cost savings projected.",
    "Q2 2026 net income $73.4 million ($0.60 per share); NIM 3.25%; CET1 13.27%.",
    "First mainland branch network since the 2016 separation from Bank of the West."
  ],
  leadership: [
    { name: "Bob Harrison", role: "Chairman, President and CEO", sources: ["ab-trico-2026", "fhb-q2-2026"] },
    { name: "Jason Dang", role: "EVP and Manager, Digital Banking and Services Division; leads the AI programme", linkedin: "https://www.linkedin.com/in/jasondang-", sources: ["fhb-promotions-2026"] }
  ],
  timeline: [
    { date: "2025-08-25", title: "CEO backs deposit-insurance reform", detail: "Harrison cites mainland depositors' reactions during 2023 stress.", sources: ["ab-deposits-2025"] },
    { date: "2026-01-30", title: "Four promotions: Jason Dang to lead digital banking and the AI programme", detail: "AI strategy and governance placed under the Digital Banking and Services Division.", sources: ["fhb-promotions-2026"] },
    { date: "2026-07-13", title: "Agreement to acquire TriCo Bancshares", detail: "About $2 billion in stock; 68 California branches; $34 billion combined assets.", sources: ["ab-trico-2026", "fhb-trico-2026"] },
    { date: "2026-07-24", title: "Second-quarter 2026 results", detail: "Net income $73.4 million; EPS $0.60; NIM 3.25%.", sources: ["fhb-q2-2026"] },
    { date: "2025-09-01", title: "Deepfake awareness guidance for customers", detail: "Protection at work and home.", sources: ["fhb-deepfake"] },
    { date: "2026-07-13", title: "Preliminary second-quarter results released with the TriCo announcement", detail: "Deal and results disclosed together.", sources: ["fhb-trico-2026"] }
  ],
  useCases: [
    { useCase: "governance-general", name: "AI programme strategy and governance", detail: "Owned by the Digital Banking and Services Division under Jason Dang.", status: "In production", sources: ["fhb-promotions-2026"] },
    { useCase: "generative-agentic-ai", name: "Enterprise digital transformation", detail: "Digital banking, servicing and customer-acquisition platforms.", status: "Rolling out", sources: ["fhb-promotions-2026"] },
    { useCase: "fraud", name: "Deepfake and scam awareness for customers", detail: "Deepfake protection at work and home; malware and job-scam warnings.", status: "In production", sources: ["fhb-deepfake"] },
    { useCase: "third-party-vendors", name: "TriCo integration", detail: "Systems and brand integration of a $9.95 billion California bank.", status: "Announced", sources: ["ab-trico-2026"] }
  ],
  numbers: [
    { label: "TriCo Bancshares acquisition", value: "≈ $2 billion in stock; 68 branches; $8.4 billion deposits", asOf: "2026-07-13", sources: ["ab-trico-2026"] },
    { label: "Combined company", value: "$34 billion assets; $29 billion deposits; 113 branches", asOf: "2026-07-13", sources: ["ab-trico-2026"] },
    { label: "Q2 2026 net income / diluted EPS", value: "$73.4 million / $0.60", asOf: "2026-07-24", sources: ["fhb-q2-2026"] },
    { label: "Net interest margin, Q2 2026", value: "3.25%", asOf: "2026-07-24", sources: ["fhb-q2-2026"] }
  ],
  quotes: [
    { who: "Bob Harrison", role: "Chairman, President and CEO", date: "2026-07-13", quote: "What we've lacked since our separation from Bank of the West is a branch network to expand client relationships and offer a full suite of product offerings.", sources: ["ab-trico-2026"] },
    { who: "Bob Harrison", role: "Chairman, President and CEO", date: "2026-07-24", quote: "The second quarter was another strong quarter, reflecting the strength of our business model, the disciplined execution by our team and the trust our customers place in us.", sources: ["fhb-q2-2026"] }
  ],
  regulatory: [
    { authority: "fdic", why: "First Hawaiian Bank is a state nonmember bank; FDIC model-risk and third-party guidance govern the AI programme and the TriCo integration.", docSlugs: ["fdic-fil-29-2023", "fdic-fil-15-2026"] },
    { authority: "california", why: "Acquiring 68 California branches brings the state's privacy and automated-decision rules to consumer-facing AI.", docSlugs: ["ca-cppa-admt-risk-cyber-regulations-2025"] },
    { authority: "cfpb", why: "Consumer products across two states carry adverse-action and UDAAP duties for any automated decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] }
  ],
  suggestions: [
    { title: "Naming an AI owner is the first disclosure most peers skip", detail: "Putting AI strategy and governance under a named executive gives examiners and investors a point of accountability before any use case ships." },
    { title: "The merger will set the AI timetable", detail: "A year of TriCo systems integration will consume the technology organisation; AI deployments are realistically a 2027 story." },
    { title: "California changes the rulebook", detail: "Mainland consumer banking brings the CPPA's automated-decision rules into scope for the first time." },
    { title: "Fraud awareness should become fraud tooling", detail: "Deepfake education for customers points to voice and identity verification as the natural first AI use case in a two-state contact centre." }
  ],
  faq: [
    { q: "Does First Hawaiian Bank use AI?", a: "First Hawaiian has an AI programme whose strategy and governance are led by Jason Dang, promoted in January 2026 to run the Digital Banking and Services Division. The bank has not disclosed vendors, production use cases or a budget; its public AI content is deepfake and scam awareness for customers." },
    { q: "What is First Hawaiian buying in California?", a: "On 13 July 2026 it agreed to acquire TriCo Bancshares, parent of Tri Counties Bank in Chico, for about $2 billion in stock, adding 68 branches in Northern and Central California and $8.4 billion of deposits. The combined bank will have $34 billion of assets and 113 branches; closing is expected near the end of 2026." }
  ],
  sources: [
    { id: "fhb-deepfake", title: "Deepfake Awareness: Protecting Yourself at Work and Home", publisher: "First Hawaiian Bank", url: "https://www.fhb.com/en/resource-center/security-and-fraud-protection/deepfake-awareness-protecting-yourself-at-work-and-home", date: "2025-09-01" },
    { id: "ab-deposits-2025", title: "Bankers demand deposit fix while fighting over price tag", publisher: "American Banker", url: "https://americanbanker.com/news/bankers-demand-deposit-fix-while-fighting-over-price-tag", date: "2025-08-25" },
    { id: "fhb-promotions-2026", title: "First Hawaiian Bank Announces Four Promotions and One New Hire", publisher: "First Hawaiian Bank", url: "https://www.fhb.com/en/about-us/newsroom/2026-press-releases/news-release/013026", date: "2026-01-30" },
    { id: "fhb-trico-2026", title: "First Hawaiian, Inc. to Acquire TriCo Bancshares and Provide Preliminary 2026 Second Quarter Results", publisher: "First Hawaiian, Inc.", url: "https://www.fhb.com/en/about-us/newsroom/2026-press-release/news-release/071326", date: "2026-07-13" },
    { id: "ab-trico-2026", title: "First Hawaiian strikes $2B deal to return to U.S. mainland", publisher: "American Banker", url: "https://americanbanker.com/news/first-hawaiian-strikes-2b-deal-to-return-to-u-s-mainland", date: "2026-07-13" },
    { id: "fhb-q2-2026", title: "First Hawaiian, Inc. Reports Second Quarter 2026 Financial Results and Declares Dividend", publisher: "First Hawaiian, Inc. (Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/first-hawaiian-inc-reports-second-120000470.html", date: "2026-07-24" }
  ],
  lastUpdated: "2026-09-10"
};

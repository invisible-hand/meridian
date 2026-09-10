import type { Bank } from "@/lib/banks";

export const EAST_WEST: Bank = {
  slug: "east-west",
  name: "East West Bancorp",
  shortName: "East West",
  ticker: "EWBC",
  hq: "Pasadena, CA",
  fedRank: 36,
  leadBank: "East West Bank",
  assetsUsdMillions: 82474,
  charter: "California state member bank (Federal Reserve)",
  posture: "One of the best-performing banks over $50 billion, with record profits four years running — and almost nothing public about AI beyond an in-house cross-border payments rail and a fintech partnership.",
  platform: {
    name: "In-house US–Hong Kong payments and partner technology",
    detail: "East West Bank's technology disclosure is thin and practical. Its commercial banking head has described an internally developed capability that transmits funds between the United States and Hong Kong faster, generating additional wire and foreign-exchange activity, alongside hardware and merchant solutions from Worldpay, which the bank began referring commercial clients to in October 2025. The bank's own writing about AI concerns the industries it lends to rather than its operations; its CEO attributes performance to being 'nimble, disciplined and responsive'.",
    sources: ["ewb-labj-2026", "pymnts-worldpay-2025", "ab-top-performers-2026"]
  },
  answerFirst:
    "East West Bank is the largest US bank focused on the US–Asia corridor, an $82 billion California institution that reported record net income of $1.3 billion in 2025, a 17% return on tangible common equity, and record loans of $59 billion and deposits of $70 billion by mid-2026, and that held third place in American Banker's 2025 ranking of top-performing banks over $50 billion. On AI it is one of the quietest banks of its size. Its public technology record consists of an internally developed faster funds-transfer capability between the United States and Hong Kong that its commercial banking head says is lifting wire and foreign-exchange volumes, a referral partnership giving commercial clients access to Worldpay's merchant and hardware solutions, a June 2026 arrangement to be the first official business banking partner of the ticketing company AXS, and a debut in the top 20 for customer reputation in 2025. CEO Dominic Ng attributes results to remaining 'nimble, disciplined and responsive'. There is no disclosed AI platform, chief AI officer, use-case count, budget or headcount effect; the bank's AI-related content addresses clients' industries and the wider economy. For a bank whose model is relationship banking across two regulatory regimes, that silence is itself the strategy signal: technology is built where it serves cross-border clients and bought where it does not.",
  keyPoints: [
    "Performance first: record 2025 net income of $1.3 billion, 17% return on tangible common equity, record loans ($59 billion) and deposits ($70 billion) by June 2026; third among top-performing banks over $50 billion in American Banker's 2025 ranking.",
    "Built where it matters: an in-house faster US–Hong Kong funds-transfer capability that the commercial banking head says is generating additional wire and FX activity.",
    "Bought where it does not: a referral partnership with Worldpay for merchant and hardware solutions (October 2025); first official business banking partner to AXS (June 2026).",
    "Reputation: debuted in the top 20 banks by customer reputation in 2025 with a score of 80.9.",
    "No disclosed AI programme: no platform, chief AI officer, use-case count or budget has been published; AI content is about clients' industries and the economy.",
    "Leadership: Dominic Ng, chairman and CEO since 1992, credits nimbleness and discipline; CFO Christopher Del Moral-Niles speaks for the bank at investor conferences."
  ],
  leadership: [
    { name: "Dominic Ng", role: "Chairman and CEO", sources: ["ewb-q4-2025", "ab-top-performers-2026"] },
    { name: "Christopher Del Moral-Niles", role: "Chief Financial Officer", sources: ["ft-conferences-2026"] },
    { name: "Robert Lo", role: "EVP, Head of Commercial Real Estate Banking", sources: ["ft-axs-2026"] }
  ],
  timeline: [
    { date: "2025-01-23", title: "Record 2024 results", detail: "Net income of $1.2 billion; a 17% return on average tangible common equity.", sources: ["ewb-q4-2024"] },
    { date: "2025-09-04", title: "Top-20 debut for customer reputation", detail: "A score of 80.9, 14th among 41 banks surveyed.", sources: ["ab-reputation-2025"] },
    { date: "2025-10-08", title: "Worldpay solutions for commercial clients", detail: "A referral partnership for merchant and hardware solutions.", sources: ["pymnts-worldpay-2025"] },
    { date: "2026-01-22", title: "Record 2025: net income of $1.3 billion", detail: "Record revenue, net interest income, fees and EPS; dividend up 33%.", sources: ["ewb-q4-2025"] },
    { date: "2026-03-02", title: "An in-house US–Hong Kong payments rail", detail: "The commercial banking head on faster cross-border transfers and the wire and FX activity they generate.", sources: ["ewb-labj-2026"] },
    { date: "2026-04-21", title: "First-quarter 2026 net income up 23%", detail: "$358 million on record fee income, loans and deposits.", sources: ["ft-q1-2026"] },
    { date: "2026-06-01", title: "First official business banking partner of AXS", detail: "Banking and marketing collaboration with the ticketing company, via AEG.", sources: ["ft-axs-2026"] },
    { date: "2026-07-21", title: "Record loans and deposits", detail: "Second-quarter 2026 net income of $364 million; loans $59.0 billion, deposits $70.1 billion.", sources: ["ewb-q2-2026"] },
    { date: "2026-08-24", title: "Third among top-performing banks over $50 billion", detail: "Net interest margin of 3.42%, among the highest in the cohort.", sources: ["ab-top-performers-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "In-house cross-border funds transfer", detail: "Faster US–Hong Kong transfers developed internally; not described as AI.", status: "In production", sources: ["ewb-labj-2026"] },
    { useCase: "third-party-vendors", name: "Worldpay merchant and hardware solutions", detail: "Referral partnership for commercial clients' payments technology.", status: "In production", sources: ["pymnts-worldpay-2025"] },
    { useCase: "customer-chatbots", name: "Mobile and online banking", detail: "Digital account opening and CD products via the mobile app.", status: "In production", sources: ["ewb-velo-2025"] }
  ],
  numbers: [
    { label: "2025 net income", value: "$1.3 billion (record)", asOf: "2026-01-22", sources: ["ewb-q4-2025"] },
    { label: "Return on average tangible common equity, 2025", value: "17%", asOf: "2026-01-22", sources: ["ewb-q4-2025"] },
    { label: "Loans / deposits", value: "$59.0 billion / $70.1 billion (records)", asOf: "2026-06-30", sources: ["ewb-q2-2026"] },
    { label: "Rank among top-performing banks > $50 billion, 2025", value: "3rd", asOf: "2026-08-24", sources: ["ab-top-performers-2026"] },
    { label: "Customer reputation score", value: "80.9 (14th of 41)", asOf: "2025-09-04", sources: ["ab-reputation-2025"] }
  ],
  quotes: [
    { who: "Dominic Ng", role: "Chairman and CEO", date: "2026-08-24", quote: "East West Bank's ability to remain nimble, disciplined and responsive allows us to manage risk thoughtfully, maximize efficiency, allocate capital prudently, and consistently deliver superior service.", sources: ["ab-top-performers-2026"] },
    { who: "Dominic Ng", role: "Chairman and CEO", date: "2026-01-22", quote: "2025 marked another record year for revenue, net interest income, fees, noninterest income, net income, and earnings per share.", sources: ["ewb-q4-2025"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "East West Bank is a California state member bank; Worldpay is a third-party relationship and any future AI models fall under the 2026 model-risk letter.", docSlugs: ["fed-sr-23-4", "fed-sr-26-2"] },
    { authority: "california", why: "A California-headquartered bank with consumer customers is subject to the CPPA's automated-decision and cyber rules.", docSlugs: ["ca-cppa-admt-risk-cyber-regulations-2025"] },
    { authority: "fincen", why: "A cross-border US–Asia payments business puts BSA/AML controls, including any AI in monitoring, at the centre of supervision.", docSlugs: ["fincen-aml-cft-program-nprm-2026"] },
    { authority: "cfpb", why: "Consumer deposit and mobile products keep UDAAP and chatbot guidance in scope.", docSlugs: ["cfpb-chatbots-in-consumer-finance-2023"] }
  ],
  suggestions: [
    { title: "Silence on AI is a choice, and the numbers let it be one", detail: "With record results and top-tier returns, East West has no investor pressure to announce agents. The pressure will come from cross-border clients who expect AI-assisted trade and FX services from competitors." },
    { title: "The cross-border rail is the natural AI substrate", detail: "A proprietary US–Hong Kong transfer capability generates the kind of data on which AML, FX and treasury models are built; it is where a first disclosed AI use would likely land." },
    { title: "Two regimes, one model", detail: "Operating under US and Hong Kong supervision means any AI in monitoring or credit must satisfy both; that is a reason for caution and a reason to document the approach." },
    { title: "Partnerships substitute for a platform", detail: "Worldpay for merchants and AXS for a marquee client show a bank that buys or partners for technology outside its core; expect AI to arrive the same way." }
  ],
  faq: [
    { q: "What is East West Bank's AI strategy?", a: "The bank has not published one. Its disclosed technology consists of an internally developed faster US–Hong Kong funds-transfer capability, a Worldpay referral partnership for merchant solutions, and standard mobile and online banking. No AI platform, chief AI officer, use-case count or budget has been announced; the bank's AI-related content addresses its clients' industries and the economy." },
    { q: "How has East West Bank performed?", a: "It reported record net income of $1.3 billion in 2025 with a 17% return on average tangible common equity, record loans of $59 billion and deposits of $70 billion by June 2026, and held third place in American Banker's 2025 ranking of top-performing banks with more than $50 billion in assets." }
  ],
  sources: [
    { id: "ewb-q4-2025", title: "East West Bancorp Reports Record Net Income for 2025 of $1.3 Billion", publisher: "East West Bancorp", url: "https://eastwestbank.com/assets/docs/news-room/EWBC_4Q2025-Earnings-Release.pdf", date: "2026-01-22" },
    { id: "ewb-q4-2024", title: "East West Bancorp fourth-quarter and full-year 2024 results", publisher: "East West Bancorp", url: "https://eastwestbank.com/assets/docs/news-room/EWBC_4Q24-Earnings-Release.pdf", date: "2025-01-23" },
    { id: "ewb-q2-2026", title: "East West Bancorp Reports Second Quarter 2026 Results", publisher: "East West Bancorp", url: "https://investor.eastwestbank.com/files/doc_financials/2026/q2/EWBC-99-1-8K-6-30-2026-vFINAL.pdf", date: "2026-07-21" },
    { id: "ewb-labj-2026", title: "Banking & Finance Quarterly: Enduring Headwinds (Los Angeles Business Journal interview, reprinted by East West Bank)", publisher: "East West Bank", url: "https://eastwestbank.com/en/newsroom/inthenews_030226", date: "2026-03-02" },
    { id: "ewb-velo-2025", title: "East West Bank CD accounts opened via the mobile app or online banking: terms", publisher: "East West Bank", url: "https://eastwestbank.com/assets/disclosures/products/apyc_cd_velo_final.pdf", date: "2025-08-15" },
    { id: "ab-top-performers-2026", title: "The top-performing banks with more than $50B of assets in 2025", publisher: "American Banker", url: "https://www.americanbanker.com/news/the-top-performing-banks-with-more-than-50b-of-assets-in-2025", date: "2026-08-24" },
    { id: "ab-reputation-2025", title: "Top 20 banks by reputation according to customers", publisher: "American Banker", url: "https://www.americanbanker.com/news/top-20-banks-by-reputation-according-to-customers", date: "2025-09-04" },
    { id: "pymnts-worldpay-2025", title: "East West Bank to Offer Commercial Clients Worldpay Solutions", publisher: "PYMNTS", url: "https://www.pymnts.com/news/banking/2025/east-west-bank-to-offer-commercial-clients-worldpay-solutions/", date: "2025-10-08" },
    { id: "ft-axs-2026", title: "AXS Names East West Bank as Its First Official Business Banking Partner", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202606010900BIZWIRE_USPRX____20260601_BW125316-1", date: "2026-06-01" },
    { id: "ft-q1-2026", title: "East West Bancorp Reports Net Income for First Quarter of 2026 of $358 Million", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=600-202604211605BIZWIRE_USPRX____20260421_BW026885-1", date: "2026-04-21" },
    { id: "ft-conferences-2026", title: "East West Bancorp Announces Fall 2026 Conference Participation", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202608211739BIZWIRE_USPRX____20260821_BW927193-1", date: "2026-08-21" }
  ],
  lastUpdated: "2026-09-10"
};

import type { Bank } from "@/lib/banks";

export const COLUMBIA: Bank = {
  slug: "columbia",
  name: "Columbia Banking System",
  shortName: "Columbia",
  ticker: "COLB",
  hq: "Tacoma, WA",
  fedRank: 40,
  leadBank: "Columbia Bank",
  assetsUsdMillions: 66011,
  charter: "Oregon state nonmember bank (FDIC)",
  posture: "The West Coast's serial acquirer has finished its conversions and stopped buying — its public AI record is a client survey on AI impacts, a breach disclosed 119 days late, and a promise of no more deals.",
  platform: {
    name: "Integration-built infrastructure, not a disclosed AI platform",
    detail: "Columbia's technology record is defined by two mergers: Umpqua in 2023, which took longer than expected, and Pacific Premier, a $2 billion deal announced in April 2025, closed on 31 August 2025 and converted in the first quarter of 2026 with nine branch consolidations, which the CEO promised would 'avoid the snags of the last one'. The bank has not published an AI platform, use-case count or budget. Its 2026 Business Barometer surveys nearly 1,200 small and midsize businesses on AI impacts among other themes, and CEO Clint Stein has said the company will not pursue another acquisition 'in the foreseeable future', redirecting capital to a $700 million buyback.",
    sources: ["ab-merger-2025", "ft-q1-2026", "ft-barometer-2026", "ab-no-ma-2025"]
  },
  answerFirst:
    "Columbia Banking System is the $66 billion Tacoma-based parent of Columbia Bank, formed by the 2023 combination with Umpqua and enlarged by the $2 billion acquisition of Irvine's Pacific Premier, announced in April 2025, closed on 31 August 2025 and converted in the first quarter of 2026 along with nine branch consolidations, with all related cost savings expected by mid-2026. CEO Clint Stein, who conceded the Umpqua integration 'took longer and came with more challenges than expected', said in October 2025 that Columbia would make no further acquisitions in the foreseeable future and would instead buy back up to $700 million of stock, a response in part to an activist campaign. On AI the bank has disclosed no platform, agent count, budget or leadership role; its published AI voice is the 2026 Business Barometer, which asked nearly 1,200 small and midsize businesses about AI impacts alongside growth, tariffs and fraud, finding a record share prioritising investment over cost-cutting while three in five delay major decisions. The most consequential technology event of 2026 was defensive: an intruder was inside Columbia Bank's systems from early October to late December 2025, the bank discovered it on 19 December and cut access three days later, but notified 7,067 affected customers only from 17 April 2026, 119 days later and nearly four times Washington's 30-day limit, prompting a class action. For a bank that has spent three years converting systems, the next chapter is running one platform rather than building another.",
  keyPoints: [
    "Integration done: Pacific Premier ($2 billion) closed 31 August 2025, systems converted and nine branches consolidated in Q1 2026, all cost savings expected by 30 June 2026.",
    "No more deals: the CEO ruled out acquisitions 'in the foreseeable future' in October 2025 and announced a $700 million buyback amid activist pressure.",
    "Breach and disclosure: an intrusion from early October to late December 2025 affecting 7,067 people, disclosed 119 days after discovery, against a 30-day state limit; a class action followed.",
    "AI as a client survey: the 2026 Business Barometer covers AI impacts, tariffs and fraud for nearly 1,200 businesses; 63% will prioritise investment over cost-cutting.",
    "No disclosed AI platform, agent count, budget or AI leadership role; loan origination volume rose 38% year on year in Q1 2026 with Pacific Premier bankers on board.",
    "Leadership: Clint Stein (CEO), Chris Merrywell (president, Columbia Bank), Tory Nixon (president, Columbia Bank, on the Business Barometer)."
  ],
  leadership: [
    { name: "Clint Stein", role: "President and CEO, Columbia Banking System", sources: ["ab-merger-2025", "ab-no-ma-2025"], linkedin: "https://www.linkedin.com/in/clint-stein-34138151/" },
    { name: "Chris Merrywell", role: "President, Columbia Bank", sources: ["ft-q1-2026"] },
    { name: "Tory Nixon", role: "President, Columbia Bank (Business Barometer)", sources: ["ft-barometer-2026"], linkedin: "https://www.linkedin.com/in/torran-nixon-902b054/" }
  ],
  timeline: [
    { date: "2025-04-24", title: "Pacific Premier acquisition announced", detail: "A $2 billion all-stock deal for Southern California scale.", sources: ["bankingdive-pacific-premier-2025"] },
    { date: "2025-04-28", title: "'A very different deal'", detail: "The CEO on why this integration will avoid the Umpqua merger's snags.", sources: ["ab-merger-2025"] },
    { date: "2025-08-31", title: "Pacific Premier closes", detail: "Per the first-quarter 2026 results.", sources: ["ft-q1-2026"] },
    { date: "2025-10-30", title: "No more acquisitions; $700 million buyback", detail: "The CEO ends West Coast consolidation talk as an activist presses.", sources: ["ab-no-ma-2025"] },
    { date: "2025-12-19", title: "Intrusion discovered", detail: "An attacker inside 'certain Columbia Bank applications' since early October; access cut on 22 December.", sources: ["ab-breach-2026"] },
    { date: "2026-03-31", title: "Systems conversion and branch consolidations complete", detail: "Nine branches consolidated in the first quarter; cost savings on track for mid-2026.", sources: ["ft-q1-2026"] },
    { date: "2026-04-17", title: "Breach notices begin, 119 days after discovery", detail: "7,067 people affected; a class action alleges negligence and consumer-protection violations.", sources: ["ab-breach-2026"] },
    { date: "2026-04-23", title: "First-quarter 2026 results", detail: "Loan originations up 38% year on year; total assets $66.0 billion.", sources: ["ft-q1-2026"] },
    { date: "2026-06-25", title: "2026 Business Barometer", detail: "Nearly 1,200 businesses on growth, AI impacts, tariffs and fraud.", sources: ["ft-barometer-2026"] },
    { date: "2026-07-23", title: "Second-quarter 2026 results", detail: "Reported by the company.", sources: ["ft-q2-2026"] }
  ],
  useCases: [
    { useCase: "governance-general", name: "Post-merger systems conversion", detail: "Pacific Premier converted in Q1 2026 after the Umpqua integration.", status: "In production", sources: ["ft-q1-2026"] },
    { useCase: "cybersecurity", name: "Intrusion response and breach notification", detail: "Attacker removed within three days of discovery; notification 119 days later.", status: "In production", sources: ["ab-breach-2026"] },
    { useCase: "generative-agentic-ai", name: "AI impacts survey for business clients", detail: "Business Barometer research rather than a disclosed internal deployment.", status: "In production", sources: ["ft-barometer-2026"] }
  ],
  numbers: [
    { label: "Pacific Premier acquisition", value: "$2 billion, closed 31 August 2025", asOf: "2026-04-23", sources: ["ft-q1-2026", "bankingdive-pacific-premier-2025"] },
    { label: "Individuals affected by the 2025 breach / days to notify", value: "7,067 / 119", asOf: "2026-05-15", sources: ["ab-breach-2026"] },
    { label: "Share buyback authorised", value: "up to $700 million", asOf: "2025-10-30", sources: ["ab-no-ma-2025"] },
    { label: "Loan origination growth, Q1 2026", value: "+38% year on year", asOf: "2026-04-23", sources: ["ft-q1-2026"] },
    { label: "Total assets", value: "$66.0 billion", asOf: "2026-03-31", sources: ["ft-q1-2026"] }
  ],
  quotes: [
    { who: "Clint Stein", role: "President and CEO", date: "2025-10-30", quote: "As we scan the horizon and look at things, our view is, the greatest investment we can make is in our own stock, our own company.", sources: ["ab-no-ma-2025"] },
    { who: "Chris Merrywell", role: "President, Columbia Bank", date: "2026-04-23", quote: "Our teams delivered a strong quarter, continuing to generate relationship-based commercial business while successfully supporting customers through a core systems conversion.", sources: ["ft-q1-2026"] }
  ],
  regulatory: [
    { authority: "fdic", why: "Columbia Bank is an Oregon-chartered, FDIC-insured nonmember bank; the FDIC is its primary federal supervisor for technology and any AI.", docSlugs: ["fdic-fil-15-2026"] },
    { authority: "federal-reserve", why: "Columbia Banking System is the holding company; core and conversion vendors are third-party relationships.", docSlugs: ["fed-sr-23-4"] },
    { authority: "california", why: "Pacific Premier's Southern California customers bring the CPPA's automated-decision and cybersecurity rules into scope.", docSlugs: ["ca-cppa-admt-risk-cyber-regulations-2025"] },
    { authority: "cfpb", why: "Consumer deposit and lending products keep UDAAP and ECOA obligations in view for any future AI use.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] }
  ],
  suggestions: [
    { title: "One platform at last", detail: "Three years of conversions are over; a bank that has ruled out deals can now spend technology capacity on capabilities rather than migrations, which is where AI disclosure from peers begins." },
    { title: "The breach timeline is the governance story regulators will remember", detail: "Detection in three days was good; 119 days to notify was not. Incident-response automation and disclosure discipline are a more urgent technology investment than any assistant." },
    { title: "Surveying clients about AI is not the same as running it", detail: "The Business Barometer gives Columbia a view of what small businesses expect from AI; matching that with its own tools is the obvious next product step." },
    { title: "Buybacks over builds is a choice with a shelf life", detail: "$700 million to shareholders is defensible after two integrations, but peers of similar size are now reporting adoption figures; investors will eventually ask for both." }
  ],
  faq: [
    { q: "Does Columbia Banking System use AI?", a: "It has not disclosed an AI platform, use-case count, budget or leadership role. Its public AI content is the 2026 Business Barometer, a survey of nearly 1,200 small and midsize businesses that covers AI impacts alongside growth, tariffs and fraud. The bank's 2025–2026 technology work was the Pacific Premier systems conversion, completed in the first quarter of 2026." },
    { q: "What happened with the Columbia Bank data breach?", a: "An attacker was inside certain Columbia Bank applications from early October to late December 2025. The bank discovered the intrusion on 19 December and cut off access three days later, but began notifying the 7,067 affected people only on 17 April 2026, 119 days after discovery, according to American Banker. A class action alleging negligence and consumer-protection violations followed." }
  ],
  sources: [
    { id: "ab-merger-2025", title: "Columbia CEO: Latest merger will avoid snags of the last one", publisher: "American Banker", url: "https://americanbanker.com/news/columbia-ceo-latest-merger-will-avoid-snags-of-the-last-one", date: "2025-04-28" },
    { id: "ab-no-ma-2025", title: "Columbia eschews more M&A amid activist investor heat", publisher: "American Banker", url: "https://www.americanbanker.com/news/columbia-eschews-more-m-a-amid-activist-investor-heat", date: "2025-10-31" },
    { id: "ab-breach-2026", title: "How Columbia Bank (Wash.) kept a breach quiet for 119 days", publisher: "American Banker", url: "https://www.americanbanker.com/news/how-columbia-bank-kept-a-breach-quiet-for-119-days", date: "2026-05-15" },
    { id: "bankingdive-pacific-premier-2025", title: "Columbia to expand in SoCal with $2B acquisition of Pacific Premier", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/columbia-acquire-pacific-premier-southern-california-umpqua-2-billion/746223/", date: "2025-04-24" },
    { id: "ft-q1-2026", title: "Columbia Banking System, Inc. Reports First Quarter 2026 Results", publisher: "PR Newswire via FT Markets", url: "https://markets-data-api-proxy.ft.com/data/announce/full?dockey=600-202604231601PR_NEWS_USPRX____SF41688-1", date: "2026-04-23" },
    { id: "ft-q2-2026", title: "Columbia Banking System, Inc. Reports Second Quarter 2026 Results", publisher: "PR Newswire via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202607231601PR_NEWS_USPRX____SF10745-1", date: "2026-07-23" },
    { id: "ft-barometer-2026", title: "2026 Columbia Bank Business Barometer: U.S. Small and Midsize Businesses Poised for Growth, Waiting to Make Significant Moves", publisher: "PR Newswire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=600-202606250900PR_NEWS_USPRX____SF91495-1", date: "2026-06-25" }
  ],
  lastUpdated: "2026-09-10"
};

import type { Bank } from "@/lib/banks";

export const PROSPERITY: Bank = {
  slug: "prosperity",
  name: "Prosperity Bancshares",
  shortName: "Prosperity",
  ticker: "PB",
  hq: "Houston, TX",
  fedRank: 51,
  leadBank: "Prosperity Bank",
  assetsUsdMillions: 43609,
  charter: "Texas state nonmember bank (FDIC)",
  posture: "A serial Texas acquirer that spent 2026 on a real-time core conversion and three bank integrations, and has said nothing public about AI beyond the slogan 'real bankers, real-time banking'.",
  platform: {
    name: "Real-time core (converted February 2026)",
    detail: "Prosperity moved to a real-time processing system on 17 February 2026 after a four-day cutover in which online banking, Treasury Center and Zelle were suspended; the customer letter framed it as an investment that 'sets the stage for even greater innovation in the future' and the bank's line is 'real bankers, real-time banking'. The conversion landed between the 1 January 2026 closing of American Bank and the 1 February closing of Southwest Bancshares (Texas Partners Bank), and ahead of the 1 July closing of the $2 billion Stellar Bancorp merger, which took the bank to 363 locations and about $54 billion of assets. No AI tooling, vendor or use case has been disclosed.",
    sources: ["pb-upgrade-2026", "pb-letter-2026", "pb-q1-2026", "pb-ip-2q26"]
  },
  answerFirst:
    "Prosperity Bancshares, the Houston-based parent of Prosperity Bank with about $44 billion of lead-bank assets at 31 March 2026 and roughly $54 billion after absorbing Stellar Bancorp on 1 July, is the second-largest Texas-headquartered bank and one of the thinnest AI records among the 100 largest US banks. Its 2026 has been about plumbing and acquisitions rather than models: it completed the American Bank Holding merger on 1 January, the Southwest Bancshares (Texas Partners Bank) merger on 1 February, a conversion to a real-time core processing system on 17 February, and the $2 billion Stellar merger on 1 July, its 31st deal since 2000. The core conversion is the one technology event the bank has described publicly, in a customer letter that promises 'smarter banking powered by real bankers, in real-time' and says the upgrade 'set[s] the stage for even greater innovation in the future'; no AI, automation or data programme has been named, and the second-quarter 2026 investor presentation contains no technology section. Management's public attention is on Texas loan competition: in July 2026 senior chairman and CEO David Zalman and president Kevin Hanigan told analysts they had walked away from loans, including a $20 million 'grade-A' credit priced at 5.5% fixed for seven years, because rivals' structures were 'getting to the point of being ridiculous', and loans fell 1% in the quarter. First-quarter 2026 net income was $116.3 million. Prosperity Bank is a Texas state nonmember bank supervised by the FDIC, so any future AI in credit or servicing will sit under FDIC and CFPB expectations and the Federal Reserve's holding-company model-risk guidance.",
  keyPoints: [
    "Only disclosed technology event: a real-time core processing conversion on 17 February 2026, with a four-day outage of online banking, Treasury Center and Zelle.",
    "Three integrations in seven months: American Bank (1 January 2026), Texas Partners Bank (1 February) and Stellar Bancorp for $2 billion (1 July), taking the bank to 363 locations.",
    "No AI, automation, data or vendor programme has been named in releases, investor decks or on calls; the bank's line is 'real bankers, real-time banking'.",
    "Management's stated problem is loan pricing, not technology: loans down 1% in Q2 2026 as competitors offer 'ridiculous' structures.",
    "Scale after Stellar: about $54 billion of assets, number-five deposit share in Houston, number one in Beaumont.",
    "Financials: Q1 2026 net income $116.3 million; nonperforming assets 0.33% of average earning assets."
  ],
  leadership: [
    { name: "David Zalman", role: "Senior Chairman and CEO", sources: ["ab-stellar-2026", "ab-loans-2026"] },
    { name: "Kevin Hanigan", role: "President and Chief Operating Officer", sources: ["ab-loans-2026"] },
    { name: "H.E. 'Tim' Timanus Jr.", role: "Chairman", sources: ["ab-loans-2026"] },
    { name: "Cullen Zalman", role: "EVP, Banking and Corporate Activities", linkedin: "https://www.linkedin.com/in/cullen-zalman-5b96b336b", sources: ["pb-q1-2026"] }
  ],
  timeline: [
    { date: "2025-10-02", title: "Texas Partners Bank acquisition announced", detail: "All-stock deal for Southwest Bancshares valued at $268.9 million.", sources: ["bankingdive-txpartners-2025"] },
    { date: "2026-01-09", title: "Customers told of the real-time core upgrade", detail: "Letter promises faster service and 'greater innovation in the future'.", sources: ["pb-letter-2026"] },
    { date: "2026-01-28", title: "$2 billion Stellar Bancorp merger announced", detail: "Creates the second-biggest Texas-headquartered bank; 31st deal since 2000.", sources: ["ab-stellar-2026"] },
    { date: "2026-02-01", title: "Southwest Bancshares merger completed", detail: "Second of three Texas deals closes.", sources: ["ab-second-2026", "pb-q1-2026"] },
    { date: "2026-02-17", title: "Real-time processing system goes live", detail: "Online banking, Treasury Center and Zelle offline from 13 to 17 February.", sources: ["pb-upgrade-2026"] },
    { date: "2026-04-29", title: "First-quarter 2026 results", detail: "Net income $116.3 million; core conversion completed; Stellar approvals received.", sources: ["pb-q1-2026"] },
    { date: "2026-07-01", title: "Stellar merger completed", detail: "363 locations; 52 doing business as Stellar Bank.", sources: ["pb-ip-2q26"] },
    { date: "2026-07-29", title: "Loan growth blamed on rivals' pricing", detail: "Loans down 1% in Q2; a $20 million credit passed at 5.5% fixed for seven years.", sources: ["ab-loans-2026"] }
  ],
  useCases: [
    { useCase: "governance-general", name: "Real-time core platform", detail: "New processing system as the stated base for future innovation; no AI use disclosed.", status: "In production", sources: ["pb-upgrade-2026", "pb-letter-2026"] },
    { useCase: "third-party-vendors", name: "Acquisition systems integration", detail: "Three bank conversions onto the new core in 2026.", status: "Rolling out", sources: ["pb-q1-2026", "pb-ip-2q26"] }
  ],
  numbers: [
    { label: "First-quarter 2026 net income", value: "$116.3 million", asOf: "2026-04-29", sources: ["pb-q1-2026"] },
    { label: "Stellar Bancorp merger", value: "$2 billion; ≈ $54 billion combined assets", asOf: "2026-01-28", sources: ["ab-stellar-2026"] },
    { label: "Locations after Stellar", value: "363", asOf: "2026-07-28", sources: ["pb-ip-2q26"] },
    { label: "Deals since 2000", value: "31", asOf: "2026-01-28", sources: ["ab-stellar-2026"] },
    { label: "Loan change, Q2 2026 linked quarter", value: "−1%", asOf: "2026-07-29", sources: ["ab-loans-2026"] }
  ],
  quotes: [
    { who: "David Zalman", role: "Senior Chairman and CEO", date: "2026-01-28", quote: "A marriage made in heaven.", sources: ["ab-stellar-2026"] },
    { who: "Kevin Hanigan", role: "President and Chief Operating Officer", date: "2026-07-29", quote: "Some things out there are getting to the point of being ridiculous.", sources: ["ab-loans-2026"] }
  ],
  regulatory: [
    { authority: "fdic", why: "Prosperity Bank is a Texas state nonmember bank; the FDIC is its primary federal supervisor for the core conversion and any future AI in operations.", docSlugs: ["fdic-fil-29-2023", "fdic-fil-15-2026"] },
    { authority: "federal-reserve", why: "Holding-company supervision covers model risk and the integration of three acquired banks.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer accounts moved to a new core with new terms and fees; any AI in servicing or lending later falls under UDAAP and ECOA.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] }
  ],
  suggestions: [
    { title: "The core conversion is the precondition, not the strategy", detail: "A real-time core is what lets a bank deploy AI in servicing and fraud; Prosperity has built the base but not said what it will put on it." },
    { title: "Four integrations in a year crowd out AI work", detail: "Converting three acquired banks onto a new platform absorbs the same technology staff an AI programme would need; expect disclosure only after Stellar is fully migrated." },
    { title: "The competitive problem is pricing, which AI does not fix", detail: "Management is losing loans on structure and rate; the AI lever available to a bank this size is underwriting speed and deposit analytics, neither of which it has mentioned." },
    { title: "An FDIC-supervised bank with no AI record has a clean slate", detail: "Any first AI deployment will be judged against the FDIC's third-party and model-risk expectations from the start." }
  ],
  faq: [
    { q: "Does Prosperity Bank use AI?", a: "Prosperity has not disclosed any AI, automation or data-analytics programme. Its only public technology event is the conversion to a real-time core processing system on 17 February 2026, which it describes as the foundation for future innovation." },
    { q: "What did Prosperity acquire in 2026?", a: "American Bank Holding Corporation (closed 1 January 2026), Southwest Bancshares, the parent of Texas Partners Bank (closed 1 February 2026), and Stellar Bancorp in a $2 billion cash-and-stock deal announced 28 January and completed 1 July 2026, its 31st acquisition since 2000." }
  ],
  sources: [
    { id: "ab-stellar-2026", title: "Prosperity to acquire rival Houston bank in $2 billion deal", publisher: "American Banker", url: "https://www.americanbanker.com/news/prosperity-to-acquire-rival-houston-bank-in-2-billion-deal", date: "2026-01-28" },
    { id: "ab-second-2026", title: "Prosperity completes second of three Texas M&A deals", publisher: "American Banker", url: "https://www.americanbanker.com/list/prosperity-completes-2nd-of-3-texas-m-a-deals", date: "2026-02-06" },
    { id: "ab-loans-2026", title: "Prosperity blames loan-growth woes on newcomers' pricing", publisher: "American Banker", url: "https://www.americanbanker.com/news/prosperity-blames-loan-growth-woes-on-newcomers-pricing", date: "2026-07-29" },
    { id: "bankingdive-txpartners-2025", title: "Prosperity scoops up another Texas bank for $269M", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/prosperity-bank-texas-partners-deal-269m-acquisition/801813/", date: "2025-10-02" },
    { id: "pb-upgrade-2026", title: "System Upgrade", publisher: "Prosperity Bank", url: "https://prosperitybankusa.com/system-upgrade", date: "2026-02-17" },
    { id: "pb-letter-2026", title: "Customer letter: real-time processing system upgrade", publisher: "Prosperity Bank", url: "https://www.prosperitybankusa.com/wp-content/uploads/2026/02/DNA-Core-Upgrade-4-page-letter.pdf", date: "2026-01-09" },
    { id: "pb-q1-2026", title: "Prosperity Bancshares, Inc. Reports First Quarter 2026 Earnings", publisher: "Prosperity Bancshares", url: "https://prosperitybankusa.com/wp-content/uploads/2026/06/Earnings-Release_Q1-2026_2.pdf", date: "2026-04-29" },
    { id: "pb-ip-2q26", title: "Second Quarter 2026 Investor Presentation", publisher: "Prosperity Bancshares", url: "https://prosperitybankusa.com/wp-content/uploads/2026/07/IP-2Q26-Final_51ca22.pdf", date: "2026-07-28" }
  ],
  lastUpdated: "2026-09-10"
};

import type { Bank } from "@/lib/banks";

export const BANK_OZK: Bank = {
  slug: "bank-ozk",
  name: "Bank OZK",
  shortName: "Bank OZK",
  ticker: "OZK",
  hq: "Little Rock, AR",
  fedRank: 52,
  leadBank: "Bank OZK",
  assetsUsdMillions: 41664,
  charter: "Arkansas state nonmember bank (FDIC); the bank is the public company, with no holding company",
  posture: "A construction and commercial real estate lender that meets AI as a source of tenant demand for the buildings it finances, not as a tool it says it uses.",
  answerFirst:
    "Bank OZK, the $41.7 billion Little Rock bank that operates without a holding company and files its reports with the FDIC, has no disclosed AI programme, AI leader or AI spending. Where AI appears in its public record is on the other side of the balance sheet: as demand for the office and life-science projects its Real Estate Specialties Group finances. On the first-quarter 2026 call management said that 'the AI boom is generating opportunities for our life science product' in the Bay Area, that two projects were 'in serious contention' for tech and AI tenants, and that sponsors were tracking demand from 'clinical research, big pharma, tech, AI, even defense'. That is the AI exposure of a bank whose RESG originations reached $1.61 billion in the fourth quarter of 2025 and whose chairman and CEO, George Gleason, has led it since 1979. The credit cycle, not technology, dominates its disclosure: net charge-offs in commercial real estate jumped in late 2025, the allowance for credit losses has doubled over three years, and Gleason told analysts in January 2026 that the downturn was 'pretty near the end'. Results remain strong for its size: record full-year 2025 earnings per share of $6.18, net income to common of $699.3 million for 2025 and $159.3 million in the first quarter of 2026. Its four-quarter transcripts and management comments contain no reference to AI, machine learning or automation in the bank's own operations, and U.S. Bank hired its Florida business-banking leader from OZK in August 2026. Treat this page as a thin record for an FDIC-supervised bank whose AI story is a lending-demand story.",
  keyPoints: [
    "No AI programme, leader, vendor or spend disclosed; the fourth-quarter 2025 transcript and management comments do not mention AI in operations.",
    "AI appears as tenant demand: Bay Area life-science and office projects with 'tech AI-type users' in contention, per the first-quarter 2026 call.",
    "Signature business is construction and CRE lending through the Real Estate Specialties Group; $1.61 billion originated in Q4 2025.",
    "Credit cycle is the disclosure focus: CRE charge-offs spiked in Q4 2025, the allowance doubled over three years, recovery seen 'about a year away'.",
    "Record 2025: EPS $6.18, net income to common $699.3 million; Q1 2026 net income to common $159.3 million.",
    "Structure: a state nonmember bank with no holding company, reporting to the FDIC rather than the SEC; 268 offices in nine states."
  ],
  leadership: [
    { name: "George Gleason", role: "Chairman and CEO (since 1979)", sources: ["ab-chargeoffs-2026", "ozk-q1-2026"] },
    { name: "Brannon Hamblen", role: "President", sources: ["ozk-call-4q25"] },
    { name: "Cindy Wolfe", role: "Chief Operating Officer", linkedin: "https://www.linkedin.com/in/cindy-wolfe-at-bank-ozk", sources: ["ozk-call-4q25"] },
    { name: "Tim Hicks", role: "Chief Financial Officer", linkedin: "https://www.linkedin.com/in/tim-hicks-8b969a9", sources: ["ozk-call-4q25"] },
    { name: "Jake Munn", role: "President, Corporate and Institutional Banking", sources: ["ozk-call-4q25"] }
  ],
  timeline: [
    { date: "2025-10-16", title: "Record third-quarter 2025 earnings", detail: "Net income to common $180.5 million.", sources: ["ozk-q3-2025"] },
    { date: "2026-01-20", title: "Fourth-quarter and full-year 2025 results", detail: "Full-year EPS a record $6.18; net income to common $699.3 million.", sources: ["ozk-q4-2025"] },
    { date: "2026-01-21", title: "CEO: CRE downturn in its 'late innings'", detail: "Charge-offs jumped; RESG originations $1.61 billion in Q4.", sources: ["ab-chargeoffs-2026", "ozk-call-4q25"] },
    { date: "2026-04-21", title: "First-quarter 2026 results", detail: "Net income to common $159.3 million; $41.7 billion of assets.", sources: ["ozk-q1-2026"] },
    { date: "2026-04-22", title: "'The AI boom is generating opportunities' for life-science lending", detail: "Two Bay Area projects in contention for tech and AI tenants.", sources: ["ozk-call-1q26"] },
    { date: "2026-05-18", title: "Annual meeting", detail: "Thirteen directors elected; equity plan amended.", sources: ["ozk-8k-2026"] },
    { date: "2026-08-31", title: "U.S. Bank hires OZK's Florida business-banking leader", detail: "Part of U.S. Bank's Sun Belt expansion.", sources: ["ab-usbank-2026"] }
  ],
  useCases: [
    { useCase: "credit-underwriting", name: "AI-driven tenant demand in CRE lending", detail: "Life-science and office projects financed on the strength of tech and AI tenant interest.", status: "In production", sources: ["ozk-call-1q26"] },
    { useCase: "governance-general", name: "No disclosed internal AI use", detail: "Transcripts and releases contain no operational AI, automation or model references.", status: "Announced", sources: ["ozk-call-4q25", "ozk-q1-2026"] }
  ],
  numbers: [
    { label: "Total assets", value: "$41.7 billion", asOf: "2026-03-31", sources: ["ozk-q1-2026"] },
    { label: "First-quarter 2026 net income to common", value: "$159.3 million", asOf: "2026-04-21", sources: ["ozk-q1-2026"] },
    { label: "Full-year 2025 EPS / net income to common", value: "$6.18 (record) / $699.3 million", asOf: "2026-01-20", sources: ["ozk-q4-2025"] },
    { label: "RESG originations, Q4 2025", value: "$1.61 billion", asOf: "2026-01-21", sources: ["ab-chargeoffs-2026"] },
    { label: "Offices / states", value: "268 / 9", asOf: "2026-03-31", sources: ["ozk-q1-2026"] }
  ],
  quotes: [
    { who: "Bank OZK management", role: "First-quarter 2026 conference call", date: "2026-04-22", quote: "The AI boom is generating opportunities for our life science product, which as we've noted, is flexible to go life science or go more traditional office.", sources: ["ozk-call-1q26"] },
    { who: "George Gleason", role: "Chairman and CEO", date: "2026-01-21", quote: "We're well positioned to get through the rest of the cycle in good form.", sources: ["ab-chargeoffs-2026"] }
  ],
  regulatory: [
    { authority: "fdic", why: "Bank OZK is a state nonmember bank with no holding company; the FDIC is its primary federal supervisor and its securities regulator.", docSlugs: ["fdic-fil-29-2023", "fdic-fil-15-2026"] },
    { authority: "federal-reserve", why: "Interagency model-risk and third-party guidance still frame any future AI in underwriting or servicing.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer deposit and lending products bring UDAAP and adverse-action duties to any automated decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] }
  ],
  suggestions: [
    { title: "AI is a concentration risk here before it is a tool", detail: "Financing buildings for AI tenants ties the CRE book to AI-sector demand; if that demand cools, the lending thesis, not a model, is what breaks." },
    { title: "A no-holding-company bank has one supervisor", detail: "Everything AI-related will be judged by the FDIC alone, which simplifies governance but concentrates examiner attention." },
    { title: "Silence on internal AI is unusual at this size", detail: "Peers of $40 billion have named at least a data or AI lead; OZK has not, which suggests either genuine absence or a deliberate choice not to disclose." },
    { title: "Watch the transcripts", detail: "The first mention of AI in operations would most likely come on an earnings call, given the bank's disclosure pattern." }
  ],
  faq: [
    { q: "Does Bank OZK use AI?", a: "Bank OZK has not disclosed any AI programme, AI leader or AI spending, and its recent earnings calls and management comments contain no reference to AI in its own operations. AI enters its record as tenant demand for the life-science and office projects it finances, which management discussed on the first-quarter 2026 call." },
    { q: "Who regulates Bank OZK?", a: "Bank OZK is an Arkansas state nonmember bank and has no holding company, so the FDIC is both its primary federal supervisor and the agency it files its annual and quarterly reports with. Interagency model-risk and third-party guidance apply, and consumer products fall under CFPB rules." }
  ],
  sources: [
    { id: "ab-chargeoffs-2026", title: "Bank OZK says spike in charge-offs is no cause for alarm", publisher: "American Banker", url: "https://www.americanbanker.com/news/bank-ozk-says-spike-in-chargeoffs-is-no-cause-for-alarm", date: "2026-01-21" },
    { id: "ab-usbank-2026", title: "U.S. Bank's business banking expansion targets the Sun Belt", publisher: "American Banker", url: "https://www.americanbanker.com/news/u-s-banks-business-banking-expansion-targets-the-sun-belt", date: "2026-08-31" },
    { id: "ozk-q3-2025", title: "Bank OZK Announces Record Third Quarter 2025 Earnings", publisher: "Bank OZK", url: "https://ir.ozk.com/node/16976/pdf", date: "2025-10-16" },
    { id: "ozk-q4-2025", title: "Bank OZK Announces Fourth Quarter and Full Year 2025 Earnings", publisher: "Bank OZK", url: "https://ir.ozk.com/news-releases/news-release-details/bank-ozk-announces-fourth-quarter-and-full-year-2025-earnings/", date: "2026-01-20" },
    { id: "ozk-call-4q25", title: "Transcript of the Fourth Quarter 2025 Conference Call", publisher: "Bank OZK", url: "https://ir.ozk.com/static-files/4e55b057-bd91-45cc-9cee-2b0f7d1467dd", date: "2026-01-21" },
    { id: "ozk-q1-2026", title: "Bank OZK Announces First Quarter 2026 Earnings", publisher: "Bank OZK", url: "https://ir.ozk.com/static-files/85bc2c70-5e10-4a19-978d-44b39d79d6fa", date: "2026-04-21" },
    { id: "ozk-call-1q26", title: "Transcript of the First Quarter 2026 Conference Call", publisher: "Bank OZK", url: "https://ir.ozk.com/static-files/28274d07-6b97-45f9-9bae-831820a102eb", date: "2026-04-22" },
    { id: "ozk-8k-2026", title: "Form 8-K: 2026 annual meeting vote results", publisher: "Bank OZK", url: "https://ir.ozk.com/static-files/7562e3d8-982d-4f89-9e4c-25965d59a870", date: "2026-05-18" }
  ],
  lastUpdated: "2026-09-10"
};

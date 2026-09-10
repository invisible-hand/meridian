import type { Bank } from "@/lib/banks";

export const TRUSTMARK: Bank = {
  slug: "trustmark",
  name: "Trustmark Corporation",
  shortName: "Trustmark",
  ticker: "TRMK",
  hq: "Jackson, MS",
  fedRank: 95,
  leadBank: "Trustmark National Bank",
  assetsUsdMillions: 18985,
  charter: "National bank (OCC)",
  posture: "A Mississippi bank that just replaced a 45-year-old core deposit system with 'state-of-the-art platforms', freeing management to 'turn our attention to those efficiency gains', with no disclosed AI programme yet.",
  answerFirst:
    "Trustmark Corporation, the Jackson, Mississippi parent of Trustmark National Bank with about $19 billion of assets across six Southern states, spent the second quarter of 2026 completing the technology project that defines its near-term AI readiness: the conversion of its core deposit and related systems, a 45-year-old legacy platform, to modern vendor-supported systems. President and CEO Duane Dewey said 'years of planning culminated in the second quarter with the successful conversion of our core deposit and related systems to state-of-the-art platforms which will allow us to enhance the customer experience and operate more efficiently', and added on the call that 'now with that transition and conversion behind us, we can really turn our attention to those efficiency gains', including potential M&A. Results held up through the project: net income of $63.5 million, or $1.08 per diluted share, including $6.9 million of non-routine gains, operating net income of $56.7 million, or $0.97, a 14.08% return on tangible equity, a 1.33% return on assets, deposits up 2.3% to $16.1 billion and non-performing assets down 47% after a mortgage-loan sale, with the release headline crediting 'continued technology investments'. Leadership is in transition: chief financial officer Thomas Owens became chief operating officer on 1 May 2026, a role that preceded the CEO seat for the last two chief executives, and Joseph Bond, formerly treasurer at Texas Capital, became CFO. In May 2025 the bank exited a 2021 redlining consent order 17 months early. Neither the earnings materials nor the calls describe an AI programme, leader, vendor or budget. Trustmark National Bank is a national bank supervised by the OCC, whose 2026 model-risk bulletin will govern anything built on the new core.",
  keyPoints: [
    "Core deposit and related systems converted in Q2 2026 from a 45-year-old platform to vendor-supported 'state-of-the-art' systems.",
    "CEO Duane Dewey: with the conversion done, 'we can really turn our attention to those efficiency gains'; M&A possible.",
    "Q2 2026 net income $63.5 million ($1.08); operating $56.7 million ($0.97); ROATE 14.08%; ROA 1.33%; deposits $16.1 billion.",
    "Succession signal: CFO Thomas Owens became COO on 1 May 2026; Joseph Bond joined as CFO from Texas Capital.",
    "Redlining consent order terminated 17 months early in May 2025.",
    "No AI programme, leader, vendor or budget disclosed."
  ],
  leadership: [
    { name: "Duane A. Dewey", role: "President and CEO", linkedin: "https://www.linkedin.com/in/duane-dewey-b4b2b633", sources: ["trmk-q2-2026", "ab-owens-2026"] },
    { name: "Thomas Owens", role: "Chief Operating Officer (from 1 May 2026)", linkedin: "https://www.linkedin.com/in/thomasowens", sources: ["ab-owens-2026"] },
    { name: "Joseph Bond", role: "Chief Financial Officer", linkedin: "https://www.linkedin.com/in/bondjoseph", sources: ["ab-owens-2026"] }
  ],
  timeline: [
    { date: "2025-05-27", title: "Early exit from redlining consent order", detail: "2021 settlement with DOJ, CFPB and OCC terminated 17 months early.", sources: ["ab-consent-2025"] },
    { date: "2026-03-30", title: "CFO Thomas Owens named chief operating officer", detail: "Seen as a succession step; Joseph Bond hired as CFO.", sources: ["ab-owens-2026"] },
    { date: "2026-07-28", title: "Second-quarter 2026 results; core conversion complete", detail: "Net income $63.5 million; 45-year-old system replaced.", sources: ["trmk-q2-2026", "trmk-q2call-2026"] },
    { date: "2026-05-01", title: "Thomas Owens becomes chief operating officer", detail: "Joseph Bond takes over as CFO.", sources: ["ab-owens-2026"] },
    { date: "2026-06-30", title: "Nonperforming mortgage loan sale", detail: "Nonperforming assets down 47% linked quarter to 0.39% of loans.", sources: ["trmk-q2-2026"] },
    { date: "2026-07-29", title: "Q2 call: attention turns to efficiency gains and M&A", detail: "Conversion 'behind us'; mid-single-digit growth guidance.", sources: ["trmk-q2call-2026"] }
  ],
  useCases: [
    { useCase: "third-party-vendors", name: "Core deposit system conversion", detail: "Legacy platform replaced with vendor-supported systems in Q2 2026.", status: "In production", sources: ["trmk-q2-2026", "trmk-q2call-2026"] },
    { useCase: "governance-general", name: "Post-conversion efficiency programme", detail: "Management attention shifting to efficiency gains and possible M&A.", status: "Announced", sources: ["trmk-q2call-2026"] }
  ],
  numbers: [
    { label: "Q2 2026 net income / operating net income", value: "$63.5 million ($1.08) / $56.7 million ($0.97)", asOf: "2026-07-28", sources: ["trmk-q2-2026", "trmk-q2call-2026"] },
    { label: "Return on average tangible equity / return on assets, Q2 2026", value: "14.08% / 1.33%", asOf: "2026-07-28", sources: ["trmk-q2-2026"] },
    { label: "Deposits", value: "$16.1 billion (+2.3% in the quarter)", asOf: "2026-06-30", sources: ["trmk-q2-2026"] },
    { label: "Age of replaced core system", value: "45 years", asOf: "2026-07-28", sources: ["trmk-q2call-2026"] }
  ],
  quotes: [
    { who: "Duane A. Dewey", role: "President and CEO", date: "2026-07-28", quote: "Years of planning culminated in the second quarter with the successful conversion of our core deposit and related systems to state-of-the-art platforms which will allow us to enhance the customer experience and operate more efficiently.", sources: ["trmk-q2-2026"] },
    { who: "Duane A. Dewey", role: "President and CEO", date: "2026-07-28", quote: "Now with that transition and conversion behind us, we can really turn our attention to those efficiency gains.", sources: ["trmk-q2call-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "Trustmark National Bank is a national bank; OCC model-risk and gen-AI expectations apply to anything built on the new core.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "cfpb", why: "A recently terminated redlining order keeps fair-lending scrutiny high for any automated credit decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "federal-reserve", why: "Holding-company oversight of technology risk and capital.", docSlugs: ["fed-sr-23-4"] }
  ],
  suggestions: [
    { title: "A new core is the precondition most peers lack", detail: "Replacing a 45-year-old system unlocks vendor AI modules and real-time data; the efficiency programme that follows should name them." },
    { title: "Fair lending history raises the bar for AI credit", detail: "Having just exited a redlining order, any automated underwriting will be examined for disparate impact from day one." },
    { title: "Succession may reset the technology agenda", detail: "A COO groomed as the next CEO inherits the post-conversion roadmap; the first AI statement is likely to be his." },
    { title: "Mortgage operations are the obvious first automation", detail: "A large mortgage business with a fresh core is where document and workflow automation pays fastest." }
  ],
  faq: [
    { q: "Does Trustmark use AI?", a: "Trustmark has not disclosed an AI programme, leader, vendor or budget. Its main 2026 technology event was converting its 45-year-old core deposit system to modern vendor-supported platforms, which management says will let it pursue efficiency gains." },
    { q: "Who will lead Trustmark next?", a: "Duane Dewey is president and CEO. In March 2026 the bank named CFO Thomas Owens chief operating officer from 1 May, a role that preceded the CEO job for Dewey and his predecessor, and hired Joseph Bond from Texas Capital as CFO." }
  ],
  sources: [
    { id: "ab-consent-2025", title: "Trustmark gets early exit from redlining consent order", publisher: "American Banker", url: "https://www.americanbanker.com/news/feds-drop-redlining-consent-order-for-trustmark-national-bank", date: "2025-05-27" },
    { id: "ab-owens-2026", title: "Trustmark promotes exec, setting him up as potential next CEO", publisher: "American Banker", url: "https://americanbanker.com/news/trustmark-promotes-exec-setting-him-up-as-potential-next-ceo", date: "2026-03-31" },
    { id: "trmk-q2-2026", title: "Trustmark Corporation Announces Second Quarter 2026 Financial Results", publisher: "Trustmark Corporation (Business Wire via Yahoo Finance)", url: "https://finance.yahoo.com/news/trustmark-corporation-announces-second-quarter-203000303.html", date: "2026-07-28" },
    { id: "trmk-q2call-2026", title: "TRMK Q2 Deep Dive: Loan Growth, Deposit Expansion, and Core System Upgrade Shape Outlook", publisher: "StockStory (Yahoo Finance)", url: "https://finance.yahoo.com/news/trmk-q2-deep-dive-loan-151702996.html", date: "2026-07-30" }
  ],
  lastUpdated: "2026-09-10"
};

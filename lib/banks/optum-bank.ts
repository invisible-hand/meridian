import type { Bank } from "@/lib/banks";

export const OPTUM_BANK: Bank = {
  slug: "optum-bank",
  name: "Optum Bank (UnitedHealth Group)",
  shortName: "Optum Bank",
  ticker: "UNH",
  hq: "Draper, UT",
  fedRank: 91,
  leadBank: "Optum Bank",
  assetsUsdMillions: 20995,
  charter: "Utah industrial bank (FDIC); subsidiary of UnitedHealth Group",
  posture: "The health-savings-account bank inside UnitedHealth Group sits within one of the most aggressive enterprise AI programmes in the Fortune 10, with its chief credit officer speaking publicly about agentic lending, while the bank itself discloses no AI of its own.",
  platform: {
    name: "UnitedHealth Group and Optum enterprise AI programme",
    detail: "Optum Bank, a Utah industrial bank, is the deposit and payments engine of Optum Financial, which UnitedHealth moved into Optum Insight in January 2026. UnitedHealth's second-quarter 2026 remarks describe 'actively and appropriately embracing an AI paradigm for our businesses', AI-based ambient listening available to 70% of employed clinicians and on track to exceed 90% by year-end, AI-enabled coding and real-time payer-provider interfaces at Optum Insight, an AI-driven Value Connect platform that cut pharmacy costs 17% in early results, and targeted investment in 'technology, AI, care delivery enhancements, customer experience' that keeps the operating cost ratio at the high end of guidance. Optum Financial uses AI-powered approved-product lists across a 70,000-location retail network for directed-spend benefits, and on 2 July 2026 Optum closed the acquisition of Alegeus Technologies, a benefits-administration platform for HSAs, FSAs, HRAs and COBRA. Optum Bank's chief credit officer, Jagdeep Dayal, told American Banker's Small Business Banking conference that banks 'are investing a lot of money, both in people and technology, to bring AI to the forefront in lending' and that agentic AI is 'happening today and it is an evolution'. The bank has not published its own AI vendor, model inventory or budget.",
    sources: ["unh-q2remarks-2026", "optum-alegeus-2026", "optum-directedspend-2026", "ab-dayal-2025"]
  },
  answerFirst:
    "Optum Bank, the Draper, Utah industrial bank owned by UnitedHealth Group with about $21 billion of assets, is the custodian and payments rail behind Optum Financial's health savings accounts, one of the largest HSA franchises in the country, and it inherits its AI posture from its parent rather than publishing its own. UnitedHealth's July 2026 earnings remarks say the group is 'actively and appropriately embracing an AI paradigm for our businesses', that 'AI technology is helping us move faster' in service, administrative burden and decision support, that AI ambient listening reaches 70% of employed clinicians on the way to 90%, and that Optum Insight, which has housed Optum Financial since January 2026, is bringing 'AI-enabled tools and services to market' including AI coding and an AI-driven Value Connect platform whose early clients cut pharmacy costs 17%; the operating cost ratio sits at the high end of guidance because of investment in 'technology, AI' and customer experience. Optum Financial itself describes AI-powered approved-product lists that continuously update eligible items across a 70,000-store network for directed-spend benefits, and on 2 July 2026 it closed the acquisition of Alegeus Technologies, adding a benefits-administration platform for HSAs, FSAs, HRAs and COBRA. The bank's public AI voice is its chief credit officer, Jagdeep Dayal, who told American Banker's small-business banking conference in October 2025 that banks 'are investing a lot of money, both in people and technology, to bring AI to the forefront in lending', that information sharing across business units 'is an imperative at all banks', and that agentic AI is 'happening today and it is an evolution'. Optum Bank is supervised by the FDIC and the Utah Department of Financial Institutions and is not a bank holding company subsidiary, so Federal Reserve consolidated supervision does not apply; its consumer HSA and payment products fall under CFPB rules. No bank-level AI leader, vendor, model or budget has been disclosed.",
  keyPoints: [
    "Parent UnitedHealth Group is 'embracing an AI paradigm', with AI ambient listening at 70% of employed clinicians, AI-enabled coding and an AI-driven Value Connect platform at Optum Insight.",
    "Optum Financial, which houses Optum Bank, moved into Optum Insight in January 2026 and closed the Alegeus Technologies acquisition on 2 July 2026.",
    "Optum Financial uses AI-powered approved-product lists across a 70,000-location retail network for directed-spend benefits.",
    "Chief credit officer Jagdeep Dayal: banks are investing heavily 'to bring AI to the forefront in lending'; agentic AI is 'happening today and it is an evolution'.",
    "UnitedHealth Q2 2026: adjusted EPS $6.38; full-year guidance raised to $19.50 to $20.00; operating cost ratio at the high end because of AI and technology investment.",
    "No bank-level AI vendor, model inventory or budget disclosed; Utah industrial bank supervised by the FDIC."
  ],
  leadership: [
    { name: "Stephen Hemsley", role: "CEO, UnitedHealth Group", sources: ["unh-q2-2026"] },
    { name: "Patrick Conway", role: "CEO, Optum", linkedin: "https://www.linkedin.com/in/patrick-conway-2271468", sources: ["unh-q4remarks-2026"] },
    { name: "Jagdeep Dayal", role: "Chief Credit Officer, Optum Bank", sources: ["ab-dayal-2025", "ab-dayal-profile-2025"] }
  ],
  timeline: [
    { date: "2025-10-27", title: "Chief credit officer on agentic AI in small-business lending", detail: "American Banker panel: AI investment, silo-busting, evolution not revolution.", sources: ["ab-dayal-2025"] },
    { date: "2026-01-27", title: "Optum Financial realigned under Optum Insight", detail: "Fourth-quarter 2025 remarks outline the operating structure and 2026 outlook.", sources: ["unh-q4remarks-2026"] },
    { date: "2026-04-20", title: "Alegeus Technologies acquisition agreed", detail: "Benefits administration for consumer-directed healthcare accounts.", sources: ["unh-q1-2026"] },
    { date: "2026-07-02", title: "Alegeus acquisition closed", detail: "HSA, FSA, HRA and COBRA administration platform joins Optum Financial.", sources: ["optum-alegeus-2026"] },
    { date: "2026-07-16", title: "UnitedHealth Q2 2026: AI as enabler and accelerant", detail: "Ambient listening at 70% of clinicians; AI coding; Value Connect; guidance raised.", sources: ["unh-q2remarks-2026", "unh-q2-2026"] },
    { date: "2026-08-12", title: "AI-powered approved-product lists for directed spend", detail: "Continuously updated eligibility across 70,000 retail locations.", sources: ["optum-directedspend-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Enterprise AI programme (UnitedHealth and Optum)", detail: "Ambient listening, AI coding, real-time payer-provider interfaces, Value Connect insights.", status: "In production", sources: ["unh-q2remarks-2026"] },
    { useCase: "credit-underwriting", name: "AI-powered approved-product lists for benefit spending", detail: "Automated eligibility across the S3 retail network for directed-spend benefits.", status: "In production", sources: ["optum-directedspend-2026"] },
    { useCase: "third-party-vendors", name: "Alegeus platform integration", detail: "Benefits-administration technology acquired July 2026.", status: "Rolling out", sources: ["optum-alegeus-2026"] },
    { useCase: "governance-general", name: "Agentic-AI lending perspective from the chief credit officer", detail: "Public commentary on AI in lending and cross-unit data sharing.", status: "Announced", sources: ["ab-dayal-2025"] }
  ],
  numbers: [
    { label: "UnitedHealth Q2 2026 adjusted EPS / full-year guidance", value: "$6.38 / $19.50 to $20.00", asOf: "2026-07-16", sources: ["unh-q2-2026"] },
    { label: "AI ambient listening coverage of employed clinicians", value: "70%, on track to exceed 90% by year-end 2026", asOf: "2026-07-16", sources: ["unh-q2remarks-2026"] },
    { label: "Value Connect early client result", value: "17% reduction in pharmacy costs", asOf: "2026-07-16", sources: ["unh-q2remarks-2026"] },
    { label: "Directed-spend retail network", value: "> 70,000 locations", asOf: "2026-08-12", sources: ["optum-directedspend-2026"] }
  ],
  quotes: [
    { who: "UnitedHealth Group", role: "Second-quarter 2026 earnings remarks", date: "2026-07-16", quote: "AI is both an enabler and an accelerant to this effort. We're early in this work but clearly on the path to improve the healthcare experience.", sources: ["unh-q2remarks-2026"] },
    { who: "Jagdeep Dayal", role: "Chief Credit Officer, Optum Bank", date: "2025-10-27", quote: "Banks are taking an incredible amount of... they're investing a lot of money, both in people and technology, to bring AI to the forefront in lending.", sources: ["ab-dayal-2025"] }
  ],
  regulatory: [
    { authority: "fdic", why: "Optum Bank is an FDIC-supervised Utah industrial bank; FDIC model-risk and third-party guidance govern any AI in its account and payment operations.", docSlugs: ["fdic-fil-29-2023", "fdic-fil-15-2026"] },
    { authority: "cfpb", why: "HSA, FSA and benefit-card products are consumer financial products subject to UDAAP and automated-decision scrutiny.", docSlugs: ["cfpb-chatbots-in-consumer-finance-2023", "cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "sec", why: "UnitedHealth's AI claims in earnings materials fall within SEC scrutiny of AI-related disclosure.", docSlugs: ["sec-exam-priorities-fy2026"] }
  ],
  suggestions: [
    { title: "The bank borrows a healthcare AI stack", detail: "Optum Bank's AI capability is UnitedHealth's; the governance question is whether bank-grade model risk management applies to models built for claims and coding when they touch HSA money." },
    { title: "Alegeus adds a platform to automate", detail: "Benefits administration is document- and rule-heavy, the natural place for the group's AI to show up in the bank's own operations." },
    { title: "Industrial-bank status limits consolidated oversight", detail: "Without Fed holding-company supervision, the FDIC and Utah examine the bank while the AI decisions are made at the parent; expect examiners to ask how that gap is bridged." },
    { title: "The chief credit officer is ahead of the disclosure", detail: "Public commentary on agentic lending without a bank-level AI statement invites the question of what Optum Bank itself runs." }
  ],
  faq: [
    { q: "Does Optum Bank use AI?", a: "Optum Bank has not disclosed its own AI vendor, model or budget, but it operates inside UnitedHealth Group and Optum, whose AI programme includes ambient listening for clinicians, AI-enabled coding and AI-driven insights platforms, and Optum Financial uses AI-powered approved-product lists for benefit spending. Its chief credit officer, Jagdeep Dayal, speaks publicly about agentic AI in lending." },
    { q: "What is Optum Bank?", a: "A Utah industrial bank owned by UnitedHealth Group that serves as custodian and payments engine for Optum Financial's health savings accounts and benefit cards. In 2026 Optum Financial moved under Optum Insight and acquired Alegeus Technologies, a benefits-administration platform." }
  ],
  sources: [
    { id: "ab-dayal-profile-2025", title: "Jagdeep Dayal, speaker profile, Small Business Banking 2025", publisher: "American Banker", url: "https://small-business-banking.americanbanker.com/profile/jagdeep-dayal", date: "2025-09-24" },
    { id: "ab-dayal-2025", title: "The Promises and Pitfalls of Agentic AI for Small Business Lending", publisher: "American Banker", url: "https://americanbanker.com/video/small-business-banking-2025/the-promises-and-pitfalls-of-agentic-ai-for-small-business-lending", date: "2025-10-27" },
    { id: "unh-q4remarks-2026", title: "UnitedHealth Group Fourth Quarter 2025 Earnings Remarks", publisher: "UnitedHealth Group", url: "https://unitedhealthgroup.com/content/dam/UHG/PDF/investors/2025/unh-q4-2025-remarks.pdf", date: "2026-01-27" },
    { id: "unh-q1-2026", title: "UnitedHealth Group Reports First Quarter 2026 Results", publisher: "UnitedHealth Group", url: "https://unitedhealthgroup.com/content/dam/UHG/PDF/investors/2026/unh-reports-first-quarter-2026-results.pdf", date: "2026-04-20" },
    { id: "optum-alegeus-2026", title: "Optum Financial expands consumer healthcare financing capabilities with acquisition of Alegeus Technologies", publisher: "Optum", url: "https://www.optum.com/en/newsroom/health-tech/optum-financial-expands-consumer-healthcare-financing-capabilities-alegeus-technologies-acquisition.html", date: "2026-07-02" },
    { id: "unh-q2-2026", title: "UnitedHealth Group Reports Second Quarter 2026 Results", publisher: "UnitedHealth Group", url: "https://unitedhealthgroup.com/content/dam/UHG/PDF/investors/2026/unh-reports-second-quarter-2026-results.pdf", date: "2026-07-16" },
    { id: "unh-q2remarks-2026", title: "UnitedHealth Group Second Quarter 2026 Earnings Remarks", publisher: "UnitedHealth Group", url: "https://unitedhealthgroup.com/content/dam/UHG/PDF/investors/2026/unh-q2-2026-remarks.pdf", date: "2026-07-16" },
    { id: "optum-directedspend-2026", title: "AI Automation Tools Help Directed Spend Benefits", publisher: "Optum", url: "https://business.optum.com/en/insights/ai-brings-scale-precision-directed-spend-benefits.html", date: "2026-08-12" }
  ],
  lastUpdated: "2026-09-10"
};

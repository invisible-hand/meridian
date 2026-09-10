import type { Bank } from "@/lib/banks";

export const WAFD: Bank = {
  slug: "wafd",
  name: "WaFd, Inc.",
  shortName: "WaFd Bank",
  ticker: "WAFD",
  hq: "Seattle, WA",
  fedRank: 73,
  leadBank: "WaFd Bank",
  assetsUsdMillions: 27552,
  charter: "Washington state nonmember bank (FDIC)",
  posture: "A former thrift fifteen years into becoming a commercial bank, whose 'Build 2030' plan puts a data-driven 'digital focus' alongside deposit mix goals, with an AI-powered call-centre agent and a new mobile app in launch.",
  platform: {
    name: "Build 2030 digital focus: next-generation mobile app and AI call-centre agent",
    detail: "WaFd's Build 2030 plan, presented to investors in 2026, has five pillars, one of which is a 'digital focus' to 'leverage data to anticipate financial needs and empower clients', alongside shifting 20% of interest-bearing deposits to non-interest-bearing and serving businesses 'both in-person and digitally'. On the April 2026 earnings call management said a next-generation mobile banking app was about to launch with much faster access, real-time peer-to-peer payments and consumer positive pay, and that the bank would introduce an AI-powered call-centre agent providing 24/7 support to improve efficiency and free bankers for higher-value conversations. The bank tracks a net promoter score approaching 'world class' as evidence that service, usability and technology investment are paying off. No AI vendor, model or budget has been disclosed.",
    sources: ["wafd-deck-2026", "wafd-q1call-2026"]
  },
  answerFirst:
    "WaFd, Inc., the Seattle parent of WaFd Bank with $27.6 billion of assets, 210 branches across nine Western states and Texas and a September fiscal year, has spent 15 years converting from a savings institution into a commercial bank and now frames its technology agenda inside a plan called Build 2030. One of the plan's five pillars is a 'digital focus' to 'leverage data to anticipate financial needs and empower clients'; the others are deposit mix, commercial relationships, serving businesses in person and digitally, and credit discipline. On the April 2026 earnings call, president and CEO Brent Beardall, who said 'the headline for this quarter is loan growth', described two launches: a next-generation mobile app with sharply reduced access times, real-time peer-to-peer payments and consumer positive pay, and an AI-powered call-centre agent offering 24/7 support so bankers can spend time on higher-value client interactions. The bank cites a net promoter score approaching the 70-point 'world class' threshold as proof that service and technology investment are landing, and information technology is broken out as a growing line of non-interest expense in its decks. Results are steady: fiscal third-quarter 2026 net income of $66.1 million, or $0.84 per diluted share, up 15% year on year, a 2.81% net interest margin, a 53.69% efficiency ratio and a 173rd consecutive quarterly dividend. Customer-facing AI content covers deepfake impersonation and voice cloning. WaFd Bank is a Washington state nonmember bank supervised by the FDIC; no AI vendor, model or spend has been named.",
  keyPoints: [
    "Build 2030 plan: 'digital focus' pillar to 'leverage data to anticipate financial needs and empower clients'.",
    "AI-powered call-centre agent for 24/7 support announced on the April 2026 call, alongside a next-generation mobile app with real-time P2P and consumer positive pay.",
    "Net promoter score approaching the 70-point 'world class' level cited as evidence technology investment is working.",
    "Fiscal Q3 2026: net income $66.1 million, EPS $0.84 (+15% year on year), NIM 2.81%, efficiency ratio 53.69%, 173rd consecutive dividend.",
    "First loan growth after several quarters of contraction in the March 2026 quarter; commercial loans 96% of originations.",
    "Customer AI content is scam education: deepfakes and voice cloning; no AI vendor, model or budget disclosed."
  ],
  leadership: [
    { name: "Brent Beardall", role: "President and CEO", linkedin: "https://www.linkedin.com/in/brent-beardall-2b413bb", sources: ["wafd-q3-2026", "wafd-deck-2026"] },
    { name: "Cathy Cooper", role: "Chief Experience Officer", linkedin: "https://www.linkedin.com/in/cathycooperseattle", sources: ["wafd-deck-2026"] },
    { name: "Kim Robison", role: "Chief Operating Officer", sources: ["wafd-deck-2026"] },
    { name: "Kelli Holz", role: "Chief Financial Officer", linkedin: "https://www.linkedin.com/in/kelli-holz-2263217", sources: ["wafd-deck-2026"] }
  ],
  timeline: [
    { date: "2025-06-01", title: "Guide to AI scams: deepfakes and voice cloning", detail: "Customer education on AI-enabled impersonation.", sources: ["wafd-aiscams"] },
    { date: "2026-04-16", title: "Q2 FY2026 call: mobile app and AI call-centre agent coming", detail: "Loan growth returns; Build 2030 outlined; technology upgrades to strengthen engagement.", sources: ["wafd-q1call-2026"] },
    { date: "2026-07-16", title: "Fiscal third-quarter 2026 results", detail: "Net income $66.1 million; EPS $0.84; efficiency ratio 53.69%.", sources: ["wafd-q3-2026"] },
    { date: "2026-07-27", title: "Investor presentation: Build 2030 with a digital-focus pillar", detail: "$27.6 billion of assets; NPS approaching world class; IT expense tracked.", sources: ["wafd-deck-2026"] },
    { date: "2026-06-05", title: "173rd consecutive quarterly dividend paid", detail: "$0.27 per share.", sources: ["wafd-q3-2026"] },
    { date: "2026-06-30", title: "Fiscal third-quarter balance sheet", detail: "$27.6 billion of assets; 4.7 million shares repurchased in the fiscal first half.", sources: ["wafd-deck-2026", "wafd-q3-2026"] }
  ],
  useCases: [
    { useCase: "customer-chatbots", name: "AI-powered 24/7 call-centre agent", detail: "Support automation to free bankers for higher-value interactions.", status: "Rolling out", sources: ["wafd-q1call-2026"] },
    { useCase: "generative-agentic-ai", name: "Next-generation mobile app", detail: "Faster access, real-time peer-to-peer payments, consumer positive pay.", status: "Rolling out", sources: ["wafd-q1call-2026"] },
    { useCase: "governance-general", name: "Build 2030 digital focus", detail: "Data used to anticipate client needs; NPS tracked as the outcome metric.", status: "In production", sources: ["wafd-deck-2026"] },
    { useCase: "fraud", name: "Customer education on deepfake scams", detail: "Voice cloning and AI impersonation guidance.", status: "In production", sources: ["wafd-aiscams"] }
  ],
  numbers: [
    { label: "Fiscal Q3 2026 net income / diluted EPS", value: "$66.1 million / $0.84 (+15% year on year)", asOf: "2026-07-16", sources: ["wafd-q3-2026"] },
    { label: "Efficiency ratio / net interest margin, fiscal Q3 2026", value: "53.69% / 2.81%", asOf: "2026-07-16", sources: ["wafd-q3-2026"] },
    { label: "Total assets / branches", value: "$27.6 billion / 210", asOf: "2026-06-30", sources: ["wafd-deck-2026"] },
    { label: "Consecutive quarterly dividends", value: "173", asOf: "2026-07-16", sources: ["wafd-q3-2026"] }
  ],
  quotes: [
    { who: "WaFd Bank", role: "Build 2030 investor presentation", date: "2026-07-27", quote: "Digital Focus: Leverage data to anticipate financial needs and empower clients.", sources: ["wafd-deck-2026"] },
    { who: "Brent Beardall", role: "President and CEO", date: "2026-04-16", quote: "The headline for this quarter is loan growth.", sources: ["wafd-q1call-2026"] }
  ],
  regulatory: [
    { authority: "fdic", why: "WaFd Bank is a state nonmember bank; FDIC model-risk and third-party guidance govern the AI call-centre agent and app vendors.", docSlugs: ["fdic-fil-29-2023", "fdic-fil-15-2026"] },
    { authority: "cfpb", why: "A customer-facing AI agent falls squarely under the CFPB's chatbot guidance and UDAAP.", docSlugs: ["cfpb-chatbots-in-consumer-finance-2023"] },
    { authority: "federal-reserve", why: "Holding-company oversight of technology investment and consolidated risk.", docSlugs: ["fed-sr-23-4"] }
  ],
  suggestions: [
    { title: "The call-centre agent is the first real test", detail: "A 24/7 AI agent puts WaFd inside CFPB chatbot guidance from day one; escalation paths and complaint handling should be documented before launch." },
    { title: "Tie AI to Build 2030 metrics", detail: "The plan's deposit-mix and NPS goals give AI a measurable purpose most peers lack; publish the link." },
    { title: "Efficiency is already good, which raises the bar", detail: "A 53.69% efficiency ratio means AI has to show revenue or retention gains, not just cost." },
    { title: "Name the vendor", detail: "Investors and examiners will ask which platform runs the agent and who owns the model risk." }
  ],
  faq: [
    { q: "Does WaFd Bank use AI?", a: "WaFd announced in April 2026 that it would introduce an AI-powered call-centre agent providing 24/7 support alongside a next-generation mobile app, as part of a Build 2030 plan whose digital pillar is to use data to anticipate client needs. No vendor, model or budget has been disclosed." },
    { q: "How is WaFd performing?", a: "For the fiscal third quarter ended June 30, 2026 it earned $66.1 million, or $0.84 per diluted share, up 15% year on year, with a 2.81% net interest margin, a 53.69% efficiency ratio and its 173rd consecutive quarterly dividend. Assets are $27.6 billion across 210 branches." }
  ],
  sources: [
    { id: "wafd-aiscams", title: "What You Need to Know About AI Scams", publisher: "WaFd Bank", url: "https://www.wafdbank.com/articles/security-privacy/ai-scams-what-you-should-know", date: "2025-06-01" },
    { id: "wafd-q1call-2026", title: "WAFD Q1 Deep Dive: Loan Growth and Deposit Initiatives Drive Outperformance", publisher: "StockStory (Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/wafd-q1-deep-dive-loan-200826038.html", date: "2026-04-17" },
    { id: "wafd-q3-2026", title: "WaFd Announces Quarterly Earnings Per Share of $0.84", publisher: "WaFd, Inc.", url: "https://wafdbank.com/documents/financial-news/2026/wafd-bank-press-release-20260716.pdf", date: "2026-07-16" },
    { id: "wafd-deck-2026", title: "WaFd Bank Investor Presentation, June 2026", publisher: "WaFd, Inc.", url: "https://wafdbank.com/documents/financial-news/2026/wafd-bank-investor-presentation-20260727.pdf", date: "2026-07-27" }
  ],
  lastUpdated: "2026-09-10"
};

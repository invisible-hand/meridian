import type { Bank } from "@/lib/banks";

export const BANNER: Bank = {
  slug: "banner",
  name: "Banner Corporation",
  shortName: "Banner Bank",
  ticker: "BANR",
  hq: "Walla Walla, WA",
  fedRank: 103,
  leadBank: "Banner Bank",
  assetsUsdMillions: 16338,
  charter: "Washington state nonmember bank (FDIC)",
  posture: "A 135-year-old Northwest bank investing in 'digital platforms and AI capabilities', including a new loan and deposit origination system and a virtual assistant that customers can talk to 'like you would a person', while buying Bank of the Pacific.",
  platform: {
    name: "Digital platform and AI capability investments; Banner Virtual Assistant",
    detail: "On its April 2026 earnings call Banner's management discussed 'ongoing investments in digital platforms and AI capabilities, including a new loan and deposit origination' system, alongside talent investment, as keys to future competitiveness; CEO Mark Grescovich credited 'a strong core deposit base', 'a very good net interest margin and core expense control'. Customers already interact with the Banner Virtual Assistant by phone or secure chat, which handles balance enquiries, transfers, debit-card and online-banking problems and hands off to a person on request, with identity verified through online-banking sign-in for chat. No AI vendor, model inventory or budget has been disclosed.",
    sources: ["banr-q1call-2026", "banr-va"]
  },
  answerFirst:
    "Banner Corporation, the Walla Walla, Washington parent of Banner Bank with $16.3 billion of assets and branches across Washington, Oregon, Idaho, California and Utah, told investors in April 2026 that it is making 'ongoing investments in digital platforms and AI capabilities, including a new loan and deposit origination' system, and framed technology and talent as 'key to future competitiveness' next to the core-deposit resilience and expense control that CEO Mark Grescovich credits for its results. The most visible AI-adjacent product is the Banner Virtual Assistant, available by phone and secure chat, which answers balance questions, moves money between accounts, troubleshoots debit cards and online banking, and transfers to a representative on request; customers are told to 'speak to the Virtual Assistant like you would a person'. Financially the second quarter of 2026 brought net income of $48.9 million, or $1.43 per diluted share, against $54.7 million in the first quarter and $45.5 million a year earlier, with net interest income of $153.7 million, a 4.13% tax-equivalent margin, revenue up 6% year on year to $172.0 million and a $0.52 dividend; first-half net income was $103.6 million, or $3.03 per share. On 30 April 2026 Banner agreed to buy Pacific Financial Corporation, parent of the $1.29 billion-asset Bank of the Pacific in Aberdeen, Washington, for about $177 million in stock, adding 18 branches and offices in Western Washington and Northern Oregon, immediately accretive to 2027 earnings and expected to close in the third quarter. Banner Bank is a Washington state nonmember bank supervised by the FDIC; no AI vendor, model or budget has been named.",
  keyPoints: [
    "Management cites 'ongoing investments in digital platforms and AI capabilities, including a new loan and deposit origination' system (April 2026).",
    "Banner Virtual Assistant handles balances, transfers and troubleshooting by phone and chat, with handoff to staff.",
    "Q2 2026 net income $48.9 million ($1.43); NIM 4.13%; revenue $172.0 million (+6%); first-half net income $103.6 million ($3.03).",
    "Pacific Financial (Bank of the Pacific) acquisition agreed 30 April 2026: about $177 million in stock; 18 locations; combined assets about $18 billion; close expected Q3 2026.",
    "Core deposit growth of $165 million in Q1 2026 and reduced reliance on brokered CDs.",
    "No AI vendor, model inventory or budget disclosed."
  ],
  leadership: [
    { name: "Mark J. Grescovich", role: "President and CEO", linkedin: "https://www.linkedin.com/in/mark-grescovich-96208417", sources: ["banr-pacific-2026", "banr-q1call-2026"] },
    { name: "Rob Butterfield", role: "Chief Financial Officer", linkedin: "https://www.linkedin.com/in/rob-butterfield-cpa-97554b25", sources: ["banr-q1call-2026"] },
    { name: "Jill Rice", role: "Chief Credit Officer", sources: ["banr-q1call-2026"] }
  ],
  timeline: [
    { date: "2025-06-24", title: "2024 corporate responsibility report", detail: "Governance and community disclosures.", sources: ["banr-cr-2025"] },
    { date: "2026-04-22", title: "Q1 2026 call: digital platforms and AI capabilities", detail: "New loan and deposit origination system; talent investment; core deposits up $165 million.", sources: ["banr-q1call-2026"] },
    { date: "2026-04-30", title: "Agreement to acquire Pacific Financial Corporation", detail: "About $177 million in stock; Bank of the Pacific's 18 locations.", sources: ["banr-pacific-2026", "ab-pacific-2026"] },
    { date: "2026-07-22", title: "Second-quarter 2026 results", detail: "Net income $48.9 million; NIM 4.13%; $0.52 dividend.", sources: ["banr-q2-2026"] },
    { date: "2025-09-03", title: "Millicent Tracey joins the board", detail: "Board refresh.", sources: ["banr-board-2025"] },
    { date: "2026-03-02", title: "Monica O'Reilly and Judith Steiner join the board", detail: "Two new directors.", sources: ["banr-board-2026"] }
  ],
  useCases: [
    { useCase: "customer-chatbots", name: "Banner Virtual Assistant", detail: "Conversational phone and chat assistant for account servicing with human handoff.", status: "In production", sources: ["banr-va"] },
    { useCase: "credit-underwriting", name: "New loan and deposit origination system", detail: "Part of digital-platform and AI-capability investment.", status: "Rolling out", sources: ["banr-q1call-2026"] },
    { useCase: "third-party-vendors", name: "Bank of the Pacific integration", detail: "18 locations to be converted after a Q3 2026 close.", status: "Announced", sources: ["banr-pacific-2026"] }
  ],
  numbers: [
    { label: "Q2 2026 net income / diluted EPS", value: "$48.9 million / $1.43", asOf: "2026-07-22", sources: ["banr-q2-2026"] },
    { label: "Net interest margin / revenue, Q2 2026", value: "4.13% / $172.0 million", asOf: "2026-07-22", sources: ["banr-q2-2026"] },
    { label: "Pacific Financial acquisition", value: "≈ $177 million in stock; $1.29 billion assets", asOf: "2026-04-30", sources: ["ab-pacific-2026", "banr-pacific-2026"] },
    { label: "Core deposit growth, Q1 2026", value: "$165 million", asOf: "2026-04-22", sources: ["banr-q1call-2026"] }
  ],
  quotes: [
    { who: "Mark J. Grescovich", role: "President and CEO", date: "2026-04-30", quote: "Bank of the Pacific is a highly-respected, financially strong community bank with exceptional core deposits, and we're pleased they selected Banner as their merger partner.", sources: ["banr-pacific-2026"] },
    { who: "Banner Bank", role: "Virtual Assistant guidance", date: "2026-06-01", quote: "Speak to the Virtual Assistant like you would a person. Use short sentences to explain what you need, rather than keywords.", sources: ["banr-va"] }
  ],
  regulatory: [
    { authority: "fdic", why: "Banner Bank is a state nonmember bank; FDIC model-risk and third-party guidance govern the origination system and virtual assistant.", docSlugs: ["fdic-fil-29-2023", "fdic-fil-15-2026"] },
    { authority: "cfpb", why: "A customer-facing virtual assistant and automated origination fall under CFPB chatbot guidance and adverse-action rules.", docSlugs: ["cfpb-chatbots-in-consumer-finance-2023", "cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "california", why: "California branches bring the state's automated-decision and privacy rules into scope.", docSlugs: ["ca-cppa-admt-risk-cyber-regulations-2025"] }
  ],
  suggestions: [
    { title: "Origination systems are where AI enters credit", detail: "A new loan and deposit origination platform is the point at which decisioning models get embedded; the governance file should be built now." },
    { title: "The virtual assistant is already a CFPB matter", detail: "Conversational servicing with identity verification sits inside chatbot guidance; escalation and complaint metrics should be tracked." },
    { title: "Merger conversion will compete for the same team", detail: "Integrating Bank of the Pacific in late 2026 will pull technology capacity from the AI roadmap; sequence deliberately." },
    { title: "Name the capabilities", detail: "'AI capabilities' in a call is a start; investors will want the use cases and expected efficiency effect." }
  ],
  faq: [
    { q: "Does Banner Bank use AI?", a: "Banner says it is investing in digital platforms and AI capabilities, including a new loan and deposit origination system, and operates a conversational Banner Virtual Assistant for account servicing by phone and chat. No vendor, model or budget has been disclosed." },
    { q: "What is Banner acquiring?", a: "Pacific Financial Corporation, parent of Bank of the Pacific in Aberdeen, Washington, with $1.29 billion of assets and 18 locations in Western Washington and Northern Oregon, for about $177 million in stock. The deal, announced 30 April 2026, is expected to close in the third quarter and create a bank of about $18 billion in assets." }
  ],
  sources: [
    { id: "banr-cr-2025", title: "Corporate Responsibility Report 2024", publisher: "Banner Bank", url: "https://bannerbank.com/-/media/project/banner-bank/dotcom/pdfs/banner-bank-cr-report.pdf?hash=EA2EA119CE34A25FB9880D8A8E6904BB&rev=9cab54a993c14518a2ee643d1a805a11", date: "2025-06-24" },
    { id: "banr-q1call-2026", title: "BANR Q1 Deep Dive: Deposit Growth, Margin Resilience, and Strategic Positioning", publisher: "StockStory (Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/banr-q1-deep-dive-deposit-084523380.html", date: "2026-04-23" },
    { id: "banr-pacific-2026", title: "Banner Corporation to Acquire Pacific Financial Corporation", publisher: "Banner Corporation", url: "https://investor.bannerbank.com/news/news-details/2026/Banner-Corporation-to-Acquire-Pacific-Financial-Corporation", date: "2026-04-30" },
    { id: "ab-pacific-2026", title: "Banner to buy Pacific Financial, boosting presence in Northwest", publisher: "American Banker", url: "https://www.americanbanker.com/news/banner-to-buy-pacific-financial-boosting-presence-in-northwest", date: "2026-05-01" },
    { id: "banr-va", title: "Banner Virtual Assistant", publisher: "Banner Bank", url: "https://www.bannerbank.com/contact-us/banner-virtual-assistant", date: "2026-06-01" },
    { id: "banr-q2-2026", title: "Banner Corporation Reports Net Income of $48.9 Million, or $1.43 Per Diluted Share, for Second Quarter 2026", publisher: "Banner Corporation", url: "https://investor.bannerbank.com/news/news-details/2026/Banner-Corporation-Reports-Net-Income-of-48-9-Million-or-1-43-Per-Diluted-Share-for-Second-Quarter-2026-Declares-Quarterly-Cash-Dividend-of-0-52-Per-Share", date: "2026-07-22" },
    { id: "banr-board-2025", title: "Millicent Tracey Joins Banner Corporation Board of Directors", publisher: "Banner Corporation", url: "https://investor.bannerbank.com/news/news-details/2025/Millicent-Tracey-Joins-Banner-Corporation-Board-of-Directors", date: "2025-09-03" },
    { id: "banr-board-2026", title: "Monica O'Reilly and Judith Steiner Join Banner Corporation Board of Directors", publisher: "Banner Corporation", url: "https://investor.bannerbank.com/news/news-details/2026/Monica-OReilly-and-Judith-Steiner-Join-Banner-Corporation-Board-of-Directors", date: "2026-03-02" }
  ],
  lastUpdated: "2026-09-10"
};

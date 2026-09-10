import type { Bank } from "@/lib/banks";

export const EASTERN: Bank = {
  slug: "eastern",
  name: "Eastern Bankshares",
  shortName: "Eastern Bank",
  ticker: "EBC",
  hq: "Boston, MA",
  fedRank: 66,
  leadBank: "Eastern Bank",
  assetsUsdMillions: 30620,
  charter: "Massachusetts state nonmember bank (FDIC)",
  posture: "Greater Boston's largest local bank, fresh from the HarborOne integration and an activist-driven retreat from M&A, with a chief digital officer who preaches experimentation and AI-as-tool but no disclosed AI deployment.",
  answerFirst:
    "Eastern Bankshares, the holding company for Boston's Eastern Bank, founded in 1818 and now about $31.1 billion in assets across 125-plus branches in eastern Massachusetts, New Hampshire and Rhode Island, has a visible digital leader and an invisible AI programme. Chief digital officer Ashley Nagle Eknaian, a Boston Fintech Week speaker and founding fellow of Boston University's Innovation Quorum, is responsible for 'driving innovation through experimentation and collaboration'; her January 2026 essay tells business owners to 'embrace failure as a learning tool', prioritise progress over perfection and treat technologies 'such as AI' as efficiency tools without losing 'empathy, collaboration and interaction among teams'. The bank's oldest automated product is the Express Business Loan, born in its Eastern Labs unit, which takes applications in about five minutes and returns a decision 'often instantly' for loans up to $200,000. Beyond that, AI appears only in client education: a middle-market guide that walks through 'AI-powered chatbots optimizing customer service' and generative content and points companies to local university resources. The corporate story of 2025 and 2026 is consolidation: Eastern completed the HarborOne Bancorp acquisition on 1 November 2025, and in January 2026, three months after activist HoldCo Asset Management attacked its deal record and urged a sale, CEO Denis Sheahan swore off further bank M&A in favour of buybacks. Second-quarter 2026 net income was $105.2 million, with record operating net income up 20% on the quarter and 30% on the year, a 15.3% operating return on tangible common equity and a 49% operating efficiency ratio helped by HarborOne cost cuts. Eastern Bank is a Massachusetts state nonmember bank supervised by the FDIC; no AI vendor, model, governance framework or budget has been disclosed.",
  keyPoints: [
    "Chief digital officer Ashley Nagle Eknaian leads innovation through experimentation; her public guidance treats AI as an efficiency tool for staff, not a disclosed bank deployment.",
    "Express Business Loan (from Eastern Labs): five-minute online application, decisions 'often instantly' up to $200,000, the bank's longest-running automated credit product.",
    "HarborOne Bancorp acquisition completed 1 November 2025; expense reductions from the integration drove Q2 2026 results.",
    "No further bank M&A: CEO Denis Sheahan ruled out deals in January 2026 after activist HoldCo Asset Management's campaign, favouring buybacks.",
    "Q2 2026: net income $105.2 million; record operating net income up 20% linked quarter; operating ROTCE 15.3%; efficiency ratio 49%.",
    "AI content is client education (chatbots, generative content, local university AI resources); no vendor, model or governance disclosed."
  ],
  leadership: [
    { name: "Denis Sheahan", role: "Chief Executive Officer", linkedin: "https://www.linkedin.com/in/denis-sheahan-4a843084", sources: ["ab-eastern-ma-2026", "ebc-q2-2026"] },
    { name: "Ashley Nagle Eknaian", role: "Chief Digital Officer", linkedin: "https://www.linkedin.com/in/ashleynagleeknaian", sources: ["ebc-cdo-2026", "ebc-fintechweek-2026"] },
    { name: "David Rosato", role: "Chief Financial Officer", sources: ["ebc-q2-2026"] }
  ],
  timeline: [
    { date: "2025-11-01", title: "HarborOne acquisition completed", detail: "HarborOne Bancorp merged into Eastern; two HarborOne directors join the board.", sources: ["ebc-harborone-2025"] },
    { date: "2026-01-07", title: "Chief digital officer on the innovative mindset", detail: "Experimentation, progress over perfection, AI as a tool alongside empathy and collaboration.", sources: ["ebc-cdo-2026"] },
    { date: "2026-01-23", title: "CEO swears off bank M&A", detail: "Three months after HoldCo Asset Management's activist pressure; buybacks preferred.", sources: ["ab-eastern-ma-2026"] },
    { date: "2026-07-23", title: "Second-quarter 2026 results", detail: "Net income $105.2 million; record operating net income; ROTCE 15.3%; efficiency ratio 49%.", sources: ["ebc-q2-2026"] },
    { date: "2026-08-13", title: "CDO named to Fintech Sandbox Innovation Forum lineup", detail: "Boston Fintech Week 2026 speaker.", sources: ["ebc-fintechweek-2026"] },
    { date: "2026-09-01", title: "Barclays Global Financial Services Conference", detail: "About $31.1 billion in assets as of June 30, 2026.", sources: ["ebc-barclays-2026"] }
  ],
  useCases: [
    { useCase: "credit-underwriting", name: "Express Business Loan automated decisioning", detail: "Five-minute application, instant decisions for small-business loans up to $200,000.", status: "In production", sources: ["ebc-express"] },
    { useCase: "governance-general", name: "Innovation-through-experimentation culture", detail: "CDO-led programme; AI framed as a workplace efficiency tool.", status: "In production", sources: ["ebc-cdo-2026"] },
    { useCase: "customer-chatbots", name: "Client education on AI chatbots and generative AI", detail: "Middle-market guide to selecting AI services and local learning resources.", status: "In production", sources: ["ebc-middlemarket"] },
    { useCase: "cybersecurity", name: "Cybersecurity essentials series", detail: "Email-security and security-culture guidance for business clients.", status: "In production", sources: ["ebc-cyber"] }
  ],
  numbers: [
    { label: "Second-quarter 2026 net income", value: "$105.2 million", asOf: "2026-07-23", sources: ["ebc-q2-2026"] },
    { label: "Operating return on average tangible common equity / efficiency ratio, Q2 2026", value: "15.3% / 49%", asOf: "2026-07-23", sources: ["ebc-q2-2026"] },
    { label: "Total assets", value: "≈ $31.1 billion", asOf: "2026-06-30", sources: ["ebc-barclays-2026"] },
    { label: "Express Business Loan ceiling", value: "$200,000; decision often instant", asOf: "2026-09-01", sources: ["ebc-express"] }
  ],
  quotes: [
    { who: "Ashley Nagle Eknaian", role: "Chief Digital Officer", date: "2026-01-07", quote: "You have to be confident enough to acknowledge something didn't work, ask yourself why, and then incorporate those learnings into the next iteration.", sources: ["ebc-cdo-2026"] },
    { who: "David Rosato", role: "Chief Financial Officer", date: "2026-07-23", quote: "Operating net income increased 20% linked quarter, generating an operating return on average tangible common equity of 15.3%.", sources: ["ebc-q2-2026"] }
  ],
  regulatory: [
    { authority: "fdic", why: "Eastern Bank is a state nonmember bank; FDIC model-risk and third-party guidance would govern automated credit decisioning and any AI deployment.", docSlugs: ["fdic-fil-29-2023", "fdic-fil-15-2026"] },
    { authority: "cfpb", why: "Instant small-business credit decisions and consumer products carry ECOA adverse-action and UDAAP duties.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action", "cfpb-chatbots-in-consumer-finance-2023"] },
    { authority: "federal-reserve", why: "Holding-company oversight of the HarborOne integration and capital-return programme.", docSlugs: ["fed-sr-23-4"] }
  ],
  suggestions: [
    { title: "The CDO's message is the strategy, and it is culture not tooling", detail: "Experimentation and 'progress over perfection' are the right preconditions for AI; the bank has yet to say what it is experimenting on." },
    { title: "Express Business Loan is a model-risk asset already", detail: "A decade-old instant-decision product is exactly what examiners now test for explainability and fair lending; upgrading it with AI would need the governance to be public." },
    { title: "No-M&A frees the integration team", detail: "With HarborOne converted and deals ruled out, the technology capacity that absorbed acquisitions is available for a platform agenda." },
    { title: "Teaching clients about chatbots invites the question", detail: "A bank that advises middle-market clients on AI service selection will be asked what it runs itself." }
  ],
  faq: [
    { q: "Does Eastern Bank use AI?", a: "Eastern has not disclosed an AI deployment, vendor, model or budget. Its chief digital officer, Ashley Nagle Eknaian, frames AI as a workplace efficiency tool within an innovation-by-experimentation culture, and the bank's Express Business Loan has offered near-instant automated small-business credit decisions for years." },
    { q: "Is Eastern Bank planning more acquisitions?", a: "No. In January 2026, after completing the HarborOne Bancorp acquisition on 1 November 2025 and facing activist pressure from HoldCo Asset Management, CEO Denis Sheahan said the bank is not interested in further bank M&A and will use excess capital for share buybacks." }
  ],
  sources: [
    { id: "ebc-express", title: "Express Business Loan", publisher: "Eastern Bank", url: "https://www.easternbank.com/business-banking/business-lending/express-loan", date: "2026-09-01" },
    { id: "ebc-middlemarket", title: "How Middle Market Companies Can Navigate Change and Stay Ahead of the Curve", publisher: "Eastern Bank", url: "https://www.easternbank.com/insights/disruption-new-normal-how-navigate-change-and-stay-ahead-curve", date: "2025-06-01" },
    { id: "ebc-cyber", title: "Cybersecurity Essentials: Protecting Your Digital Frontline with Email Security", publisher: "Eastern Bank", url: "https://www.easternbank.com/insights/cybersecurity-essentials-protecting-your-digital-frontline-email-security", date: "2025-06-01" },
    { id: "ebc-harborone-2025", title: "Eastern Bankshares, Inc. Announces Completion of HarborOne Acquisition", publisher: "Eastern Bankshares", url: "https://investor.easternbank.com/news/news-details/2025/CORRECTING-and-REPLACING-Eastern-Bankshares-Inc--Announces-Completion-of-HarborOne-Acquisition-And-Proration-of-Merger-Consideration/default.aspx", date: "2025-11-03" },
    { id: "ebc-cdo-2026", title: "Eastern Chief Digital Officer on Adopting an Innovative Mindset", publisher: "Eastern Bank", url: "https://www.easternbank.com/insights/eastern-chief-digital-officer-adopting-innovative-mindset", date: "2026-01-07" },
    { id: "ab-eastern-ma-2026", title: "Eastern swears off M&A amid activist investor's pressure", publisher: "American Banker", url: "https://americanbanker.com/news/eastern-swears-off-m-a-amid-activist-investors-pressure", date: "2026-01-23" },
    { id: "ebc-q2-2026", title: "Eastern Bankshares, Inc. Reports Second Quarter 2026 Financial Results", publisher: "Eastern Bankshares (Business Wire)", url: "https://www.businesswire.com/news/home/20260723377045/en/Eastern-Bankshares-Inc.-Reports-Second-Quarter-2026-Financial-Results", date: "2026-07-23" },
    { id: "ebc-fintechweek-2026", title: "Top Financial Services and Fintech Executives Join Speaker Lineup at the Fintech Sandbox Innovation Forum During Boston Fintech Week 2026", publisher: "Fintech Sandbox (Yahoo Finance)", url: "https://finance.yahoo.com/technology/ai/articles/top-financial-services-fintech-executives-130000209.html", date: "2026-08-13" },
    { id: "ebc-barclays-2026", title: "Eastern Bankshares, Inc. to Participate in the Barclays Global Financial Services Conference", publisher: "Eastern Bankshares", url: "https://investor.easternbank.com/news/news-details/2026/Eastern-Bankshares-Inc-to-Participate-in-the-Barclays-Global-Financial-Services-Conference/default.aspx", date: "2026-09-01" }
  ],
  lastUpdated: "2026-09-10"
};

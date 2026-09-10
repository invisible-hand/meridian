import type { Bank } from "@/lib/banks";

export const SEACOAST: Bank = {
  slug: "seacoast",
  name: "Seacoast Banking Corporation of Florida",
  shortName: "Seacoast Bank",
  ticker: "SBCF",
  hq: "Stuart, FL",
  fedRank: 89,
  leadBank: "Seacoast National Bank",
  assetsUsdMillions: 21134,
  charter: "National bank (OCC)",
  posture: "Florida's sixth-largest bank runs agentic AI in its dispute operations, publishes a machine-readable 'AI information' page for language models, and has just finished converting the bank of The Villages, its largest integration ever.",
  platform: {
    name: "Quavo agentic dispute management and Seacoast's AI-information page",
    detail: "In December 2025 Seacoast adopted Quavo's QFD dispute-management platform, which handles the full dispute lifecycle from intake and investigation to recovery and resolution using agentic AI trained on millions of real-world cases to detect and prevent fraud; the bank cites improved Regulation E compliance, scalable operations and faster resolution, and payment-operations manager Jennifer Powers said it 'helps us automate portions of the dispute process and maintain compliance while allowing our teams to focus on efficient, customer-centered service'. Seacoast also publishes an 'AI Information' page of structured, authoritative facts 'intended for AI assistants and large language models', with explicit response instructions, an early example of a bank optimising for AI search. Its business guidance recommends AI and machine learning to detect phishing and email compromise. No enterprise AI leader, model inventory or budget has been disclosed.",
    sources: ["sbcf-quavo-2025", "sbcf-aiinfo", "sbcf-bec-2025"]
  },
  answerFirst:
    "Seacoast Banking Corporation of Florida, the Stuart-based parent of Seacoast National Bank with about $21 billion of assets, 85 Florida branches and one in Georgia, has two concrete AI markers most peers lack. In December 2025 it put its card and payment disputes onto Quavo's agentic-AI platform, which runs the dispute lifecycle end to end, detects and prevents fraud from a model trained on millions of cases and, in the bank's words, lets it 'automate portions of the dispute process and maintain compliance'. And it publishes an 'AI Information' page written for 'AI assistants and large language models', listing its identity, products and 'AI response instructions', a deliberate bid to be described accurately by AI search. The corporate story is scale: after buying Heartland Bancshares for $110 million (February 2025) and Villages Bancorporation, the $4.1 billion bank of The Villages retirement community, for $710.8 million (announced May 2025, expected to be about 22% accretive to 2026 earnings), Seacoast completed the conversion of Citizens First Bank customers onto its platforms in early July 2026, which chairman and CEO Chuck Shaffer called 'one of the most significant and complex integrations in our company's history' delivered as 'an exceptionally smooth client experience'. Second-quarter 2026 net income was $59.5 million, or $0.55 per share, adjusted $65.8 million, or $0.61, with adjusted pre-tax pre-provision earnings up 52% year on year, loans up 16% annualised to $13.1 billion on a record $1.3 billion commercial pipeline, a stable 3.83% margin and a 15.8% adjusted return on tangible equity; Shaffer cites 'important product and technology initiatives that will enhance the client experience'. Customer content covers deepfake fraud, vishing and email compromise. Seacoast National Bank is a national bank supervised by the OCC, whose model-risk and gen-AI expectations apply to the dispute platform.",
  keyPoints: [
    "Agentic AI in production for disputes via Quavo QFD (December 2025): fraud detection, Regulation E compliance and faster resolution.",
    "Machine-readable 'AI Information' page with response instructions for AI assistants and large language models.",
    "Villages Bancorporation ($710.8 million) and Heartland Bancshares ($110 million) acquired; Citizens First Bank conversion completed in early July 2026.",
    "Q2 2026 net income $59.5 million ($0.55), adjusted $65.8 million ($0.61); adjusted PPNR up 52%; loans up 16% annualised; record $1.3 billion pipeline.",
    "Business guidance recommends AI and machine learning to detect phishing and business email compromise.",
    "No enterprise AI leader, model inventory or budget disclosed; sixth-largest bank in Florida."
  ],
  leadership: [
    { name: "Charles M. Shaffer", role: "Chairman and CEO", linkedin: "https://www.linkedin.com/in/chuck-shaffer-0504276", sources: ["sbcf-q2-2026", "ab-villages-2025"] },
    { name: "Tracey Dexter", role: "Chief Financial Officer", linkedin: "https://www.linkedin.com/in/tracey-dexter-57016016", sources: ["sbcf-q2call-2026"] },
    { name: "Jennifer Powers", role: "VP, Payment Operations and Strategy Manager", sources: ["sbcf-quavo-2025"] }
  ],
  timeline: [
    { date: "2025-01-13", title: "Guide to deepfake fraud", detail: "Customer education on AI-generated impersonation.", sources: ["sbcf-deepfake-2025"] },
    { date: "2025-02-28", title: "Heartland Bancshares acquisition announced", detail: "$110 million in cash and stock; deposit-rich Central Florida bank.", sources: ["ab-heartland-2025"] },
    { date: "2025-03-05", title: "Business email compromise guidance recommends AI and ML defences", detail: "AI cited on both sides of the fraud arms race.", sources: ["sbcf-bec-2025"] },
    { date: "2025-05-30", title: "Villages Bancorporation acquisition announced", detail: "$710.8 million for the $4.1 billion bank of The Villages; about 22% EPS accretion expected in 2026.", sources: ["ab-villages-2025"] },
    { date: "2025-12-09", title: "Quavo agentic-AI dispute platform adopted", detail: "Full-lifecycle dispute management with AI fraud detection.", sources: ["sbcf-quavo-2025"] },
    { date: "2026-07-28", title: "Second-quarter 2026 results; Citizens First conversion complete", detail: "Net income $59.5 million; adjusted PPNR up 52%; record pipeline.", sources: ["sbcf-q2-2026", "sbcf-q2call-2026"] }
  ],
  useCases: [
    { useCase: "fraud", name: "Agentic AI dispute management (Quavo QFD)", detail: "Intake to resolution automation with AI fraud detection trained on millions of cases.", status: "In production", sources: ["sbcf-quavo-2025"] },
    { useCase: "generative-agentic-ai", name: "AI-search optimisation page", detail: "Structured facts and response instructions for language models.", status: "In production", sources: ["sbcf-aiinfo"] },
    { useCase: "third-party-vendors", name: "Citizens First Bank conversion", detail: "Largest integration in company history completed July 2026.", status: "In production", sources: ["sbcf-q2-2026"] },
    { useCase: "cybersecurity", name: "AI and ML for phishing and email-compromise detection", detail: "Recommended controls for business clients.", status: "In production", sources: ["sbcf-bec-2025"] }
  ],
  numbers: [
    { label: "Q2 2026 net income / adjusted net income", value: "$59.5 million ($0.55) / $65.8 million ($0.61)", asOf: "2026-07-28", sources: ["sbcf-q2-2026"] },
    { label: "Loans / commercial pipeline", value: "$13.1 billion (+16% annualised) / ≈ $1.3 billion record", asOf: "2026-07-28", sources: ["sbcf-q2call-2026"] },
    { label: "Villages Bancorporation acquisition", value: "$710.8 million; $4.1 billion assets; $3.5 billion deposits", asOf: "2025-05-30", sources: ["ab-villages-2025"] },
    { label: "Adjusted return on tangible equity, Q2 2026", value: "15.8%", asOf: "2026-07-28", sources: ["sbcf-q2call-2026"] }
  ],
  quotes: [
    { who: "Jennifer Powers", role: "VP, Payment Operations and Strategy Manager", date: "2025-12-09", quote: "Implementing Quavo's platform helps us automate portions of the dispute process and maintain compliance while allowing our teams to focus on efficient, customer-centered service.", sources: ["sbcf-quavo-2025"] },
    { who: "Charles M. Shaffer", role: "Chairman and CEO", date: "2026-07-28", quote: "In early July, we successfully completed the conversion of customers from Citizens First Bank to Seacoast's platforms, marking the culmination of one of the most significant and complex integrations in our company's history.", sources: ["sbcf-q2-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "Seacoast National Bank is a national bank; OCC model-risk and gen-AI expectations apply to the agentic dispute platform.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "cfpb", why: "Regulation E dispute handling automated by AI is squarely within CFPB consumer-protection scope.", docSlugs: ["cfpb-chatbots-in-consumer-finance-2023", "cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "federal-reserve", why: "Holding-company oversight of acquisition integration and third-party AI vendors.", docSlugs: ["fed-sr-23-4"] }
  ],
  suggestions: [
    { title: "Disputes are a smart first agentic use case", detail: "Regulation E timelines and fraud losses give a measurable payoff, and the vendor carries the model; validation and audit trails should still sit in the bank's SR 11-7 inventory." },
    { title: "The AI-information page is ahead of the industry", detail: "Publishing structured facts for language models is cheap insurance against AI search misdescribing the bank; peers should copy it." },
    { title: "Post-conversion capacity is the opportunity", detail: "With The Villages integrated, the technology organisation can move from migration to the 'product and technology initiatives' the CEO cites." },
    { title: "Name the enterprise owner", detail: "A payments-operations sponsor got the first use case live; an enterprise AI owner would scale it." }
  ],
  faq: [
    { q: "Does Seacoast Bank use AI?", a: "Yes. Since December 2025 Seacoast has run its card and payment disputes on Quavo's agentic-AI platform, which automates the dispute lifecycle and detects fraud. It also publishes an 'AI Information' page written for AI assistants and recommends AI and machine learning to clients for phishing detection. No enterprise AI leader or budget has been disclosed." },
    { q: "What did Seacoast acquire in The Villages?", a: "Villages Bancorporation, parent of Citizens First Bank, the $4.1 billion-asset bank of The Villages retirement community, for $710.8 million, announced May 2025. The customer conversion onto Seacoast's platforms was completed in early July 2026." }
  ],
  sources: [
    { id: "sbcf-deepfake-2025", title: "Protecting Your Finances from Deepfake Fraud", publisher: "Seacoast Bank", url: "https://www.seacoastbank.com/resource-center/blog/fraud-prevention/financial-deepfake-fraud", date: "2025-01-13" },
    { id: "ab-heartland-2025", title: "Seacoast to acquire deposit-rich Central Florida bank", publisher: "American Banker", url: "https://americanbanker.com/news/seacoast-to-acquire-deposit-rich-central-florida-bank", date: "2025-02-28" },
    { id: "sbcf-bec-2025", title: "Protect Your Business from Business Email Compromise", publisher: "Seacoast Bank", url: "https://seacoastbank.com/resource-center/business-insights/business-fraud/protect-your-business-from-business-email-compromise", date: "2025-03-05" },
    { id: "ab-villages-2025", title: "Seacoast to buy the bank of The Villages in Florida", publisher: "American Banker", url: "https://americanbanker.com/news/seacoast-to-buy-the-bank-of-the-villages-in-florida", date: "2025-05-30" },
    { id: "sbcf-quavo-2025", title: "Seacoast Bank and Quavo Partner to Enhance Dispute Operations and Reduce Fraud Losses", publisher: "Quavo (GlobeNewswire)", url: "https://globenewswire.com/news-release/2025/12/09/3202154/0/en/Seacoast-Bank-and-Quavo-Partner-to-Enhance-Dispute-Operations-and-Reduce-Fraud-Losses.html", date: "2025-12-09" },
    { id: "sbcf-aiinfo", title: "AI Information", publisher: "Seacoast Bank", url: "https://www.seacoastbank.com/ai-information", date: "2026-06-01" },
    { id: "sbcf-q2-2026", title: "Seacoast Reports Second Quarter 2026 Results", publisher: "Seacoast Banking Corporation of Florida (Business Wire via Yahoo Finance)", url: "https://finance.yahoo.com/news/seacoast-reports-second-quarter-2026-200100676.html", date: "2026-07-28" },
    { id: "sbcf-q2call-2026", title: "Seacoast Banking Corporation of Florida Q2 Earnings Call Highlights", publisher: "MarketBeat (Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/seacoast-banking-corporation-florida-q2-170402447.html", date: "2026-07-29" }
  ],
  lastUpdated: "2026-09-10"
};

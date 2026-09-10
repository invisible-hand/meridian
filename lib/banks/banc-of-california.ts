import type { Bank } from "@/lib/banks";

export const BANC_OF_CALIFORNIA: Bank = {
  slug: "banc-of-california",
  name: "Banc of California",
  shortName: "Banc of California",
  ticker: "BANC",
  hq: "Los Angeles, CA",
  fedRank: 59,
  leadBank: "Banc of California",
  assetsUsdMillions: 34643,
  charter: "California state member bank (Federal Reserve)",
  posture: "Los Angeles' largest independent bank, two years past the PacWest merger, is betting on payments, citing 'AI-driven intelligence' as the disruption it wants to ride, while restructuring its balance sheet for higher recurring earnings.",
  platform: {
    name: "Deepstack payments stack, BancEdge merchant acquiring, SmartStreet",
    detail: "Banc of California owns a full-stack payment processor, Deepstack Technologies, runs the SmartStreet platform for community-association management, and in February 2026 hired 25-year payments veteran Chris Healy to head its payments division and scale its merchant-acquiring platform, BancEdge, across new and existing clients. The bank frames the opportunity as a market being reshaped by 'a shift toward AI-driven intelligence and soaring demand for instant payments'. Its technology-banking and venture groups serve technology, life-science and AI start-ups, including through the SoCal Venture Pipeline it funds with the Alliance for Southern California Innovation. No internal AI deployment, AI leader or AI budget has been disclosed; the bank's AI content for clients is a guide to generative-AI fraud.",
    sources: ["banc-payments-2026", "banc-impact-2025", "banc-alliance-2024", "banc-aifraud-2024"]
  },
  answerFirst:
    "Banc of California, the $35 billion Los Angeles bank created by the 2023 merger with PacWest and now the largest independent bank headquartered in the city, treats AI as a force in the payments market it wants to grow into rather than as a disclosed capability of its own. In March 2026 it described the payments business as being rattled by 'a shift toward AI-driven intelligence and soaring demand for instant payments' and hired Chris Healy, a 25-year payments executive, to scale its BancEdge merchant-acquiring platform; the bank already owns Deepstack Technologies, a full-stack payment processor, and SmartStreet, a platform for community-association managers. Its venture-banking arm finances technology, life-science and AI start-ups and funds the SoCal Venture Pipeline, which had accepted 88 companies and seen 24 funded for $112 million by late 2024. For clients it publishes a guide to generative-AI fraud. Under CEO Jared Wolff, who was recruited in 2019 from a career that began at PacWest, the bank spent 2025 proving the merger, with full-year earnings of $1.17 per share, more than double the prior year, and 15% annualised loan growth in the fourth quarter, then surprised investors with a second-quarter 2026 loss after selling $2.3 billion of lower-yielding securities, starting the sale of $827 million of commercial real estate and multifamily construction loans and retiring $385 million of debt, a restructuring Wolff says will deliver higher recurring earnings and capital generation. Banc of California is a California state member bank supervised by the Federal Reserve; it has not named an AI programme, vendor or leader.",
  keyPoints: [
    "Payments is the growth bet: BancEdge merchant acquiring scaled under new payments head Chris Healy (February 2026), with Deepstack as the owned processing stack.",
    "AI is cited as market disruption ('AI-driven intelligence' plus instant payments), not as a disclosed internal capability.",
    "Venture and technology banking exposure to AI start-ups through the SoCal Venture Pipeline (88 companies accepted, 24 funded for $112 million by 2024).",
    "Balance-sheet restructuring in Q2 2026: $2.3 billion of securities sold, $827 million of CRE and multifamily construction loans put up for sale, $385 million of debt retired, producing a quarterly loss.",
    "2025 proved the merger: EPS $1.17, more than double 2024; CET1 10.01%.",
    "Client AI content is defensive: a generative-AI fraud guide; no AI leader, vendor or budget disclosed."
  ],
  leadership: [
    { name: "Jared Wolff", role: "Chairman, President and CEO", linkedin: "https://www.linkedin.com/in/jared-wolff-20641a5", sources: ["ab-q2loss-2026", "banc-labj-2026"] },
    { name: "Chris Healy", role: "Head of Payments (from February 2026)", linkedin: "https://www.linkedin.com/in/chris-healy-12843b5b", sources: ["banc-payments-2026"] }
  ],
  timeline: [
    { date: "2024-09-30", title: "Guide to the growing threat of AI fraud", detail: "Generative-AI scams for businesses and individuals.", sources: ["banc-aifraud-2024"] },
    { date: "2024-11-25", title: "Commitment to the Alliance for Southern California Innovation renewed", detail: "SoCal Venture Pipeline: 88 companies accepted, 24 funded for $112 million.", sources: ["banc-alliance-2024"] },
    { date: "2025-08-06", title: "2024 Impact Report", detail: "Deepstack full-stack payments and SmartStreet platforms described.", sources: ["banc-impact-2025"] },
    { date: "2026-03-09", title: "Payments push: Chris Healy hired to scale BancEdge", detail: "'AI-driven intelligence' and instant payments cited as the disruption to capture.", sources: ["banc-payments-2026"] },
    { date: "2026-03-10", title: "CEO on 2026 priorities after a breakout 2025", detail: "EPS $1.17; 15% annualised loan growth; CET1 10.01%.", sources: ["banc-labj-2026"] },
    { date: "2026-06-30", title: "Named among America's Greatest Workplaces", detail: "Largest independent bank headquartered in Los Angeles.", sources: ["banc-newsweek-2026"] },
    { date: "2026-07-29", title: "Second-quarter loss on balance-sheet restructuring", detail: "$2.3 billion securities sold; $827 million of loans for sale; $385 million of debt retired.", sources: ["ab-q2loss-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Payments platform scaling (BancEdge, Deepstack)", detail: "Merchant acquiring and full-stack processing positioned for AI-driven, instant-payment demand.", status: "Rolling out", sources: ["banc-payments-2026", "banc-impact-2025"] },
    { useCase: "credit-underwriting", name: "Venture banking for AI and technology start-ups", detail: "Technology and life-science lending; SoCal Venture Pipeline funding.", status: "In production", sources: ["banc-alliance-2024"] },
    { useCase: "fraud", name: "Generative-AI fraud guidance", detail: "Client-facing guide to AI-driven scams and synthetic identity.", status: "In production", sources: ["banc-aifraud-2024"] }
  ],
  numbers: [
    { label: "2025 diluted EPS", value: "$1.17 (more than double 2024)", asOf: "2026-03-10", sources: ["banc-labj-2026"] },
    { label: "Securities sold in the Q2 2026 restructuring", value: "$2.3 billion", asOf: "2026-07-29", sources: ["ab-q2loss-2026"] },
    { label: "CRE and multifamily construction loans put up for sale", value: "$827 million", asOf: "2026-07-29", sources: ["ab-q2loss-2026"] },
    { label: "SoCal Venture Pipeline", value: "88 companies accepted; 24 funded for $112 million", asOf: "2024-11-25", sources: ["banc-alliance-2024"] },
    { label: "CET1 ratio", value: "10.01%", asOf: "2026-03-10", sources: ["banc-labj-2026"] }
  ],
  quotes: [
    { who: "Banc of California", role: "Payments announcement", date: "2026-03-09", quote: "A shift toward AI-driven intelligence and soaring demand for instant payments is shaking up the industry responsible for processing transactions from credit cards and digital wallets.", sources: ["banc-payments-2026"] },
    { who: "Jared Wolff", role: "Chairman, President and CEO", date: "2026-03-10", quote: "The great thing about 2025 is we really showed the value of this merger.", sources: ["banc-labj-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "Banc of California is a state member bank; the Fed supervises model risk and the third-party relationships behind Deepstack and BancEdge.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "california", why: "A California-chartered bank under the DFPI and the state's AI and privacy rules for consumer-facing automation.", docSlugs: ["ca-cppa-admt-risk-cyber-regulations-2025"] },
    { authority: "cfpb", why: "Merchant acquiring and consumer products bring UDAAP duties to any AI in payments decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] }
  ],
  suggestions: [
    { title: "Owning a processor is where AI would pay first", detail: "Deepstack gives the bank transaction data most peers rent; fraud scoring and merchant analytics are the natural AI layer, and none has been announced." },
    { title: "The restructuring buys capacity for technology", detail: "Higher recurring earnings and freed capital are the budget a payments build-out needs; the market's surprise shows investors want the plan spelled out." },
    { title: "AI start-up lending is a concentration to watch", detail: "Venture banking into AI companies exposes the book to the same cycle that lifted valuations in 2025." },
    { title: "Name the AI in the payments stack", detail: "Citing 'AI-driven intelligence' as disruption without describing the bank's own tools leaves the strategy half-stated." }
  ],
  faq: [
    { q: "Does Banc of California use AI?", a: "The bank has not disclosed an AI programme, leader, vendor or budget. It cites 'AI-driven intelligence' as a force reshaping payments, the business it is scaling through its BancEdge merchant-acquiring platform and Deepstack processing subsidiary, and it publishes a client guide to generative-AI fraud." },
    { q: "Why did Banc of California report a loss in the second quarter of 2026?", a: "Because of a balance-sheet restructuring: it sold $2.3 billion of lower-yielding securities and redeployed more than half into higher-yielding, shorter-duration ones, began selling $827 million of commercial real estate and multifamily construction loans, and retired $385 million of debt. CEO Jared Wolff said the moves position the bank for higher recurring earnings and capital generation." }
  ],
  sources: [
    { id: "ab-q2loss-2026", title: "Banc of California takes big 2Q loss due to restructuring", publisher: "American Banker", url: "https://www.americanbanker.com/news/banc-of-california-takes-big-2q-loss-due-to-restructuring", date: "2026-07-29" },
    { id: "banc-aifraud-2024", title: "The Growing Threat of AI Fraud", publisher: "Banc of California", url: "https://bancofcal.com/business-insights/the-growing-threat-of-ai-fraud/", date: "2024-09-30" },
    { id: "banc-alliance-2024", title: "Banc of California Renews Commitment to Alliance for Southern California Innovation", publisher: "Banc of California", url: "https://bancofcal.com/about-us/newsroom/press-releases/banc-of-california-renews-commitment-to-alliance-for-southern-california-innovation", date: "2024-11-25" },
    { id: "banc-impact-2025", title: "Banc of California 2024 Impact Report", publisher: "Banc of California", url: "https://dam.bancofcal.com/m/4aa1623087c0b1bf/original/Banc-of-California-2024-Impact-Report.pdf", date: "2025-08-06" },
    { id: "banc-payments-2026", title: "Banc of California Makes a Payments Push", publisher: "Banc of California", url: "https://bancofcal.com/about-us/newsroom/banc-of-california-makes-a-payments-push", date: "2026-03-09" },
    { id: "banc-labj-2026", title: "Banking & Finance Quarterly: Building Momentum (Los Angeles Business Journal interview with Jared Wolff)", publisher: "Banc of California", url: "https://dam.bancofcal.com/m/504e5b3f4debf87f/original/LABJ-Building-Momentum-3-2-26.pdf", date: "2026-03-10" },
    { id: "banc-newsweek-2026", title: "Banc of California Named One of America's Greatest Workplaces by Newsweek", publisher: "Banc of California", url: "https://bancofcal.com/about-us/newsroom/banc-of-california-named-one-of-americas-greatest-workplaces-by-newsweek", date: "2026-06-30" }
  ],
  lastUpdated: "2026-09-10"
};

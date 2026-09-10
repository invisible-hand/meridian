import type { Bank } from "@/lib/banks";

export const AMERICAN_EXPRESS: Bank = {
  slug: "american-express",
  name: "American Express",
  shortName: "Amex",
  ticker: "AXP",
  hq: "New York, NY",
  fedRank: 20,
  leadBank: "American Express National Bank",
  assetsUsdMillions: 217569,
  charter: "National bank (OCC)",
  posture: "Agentic commerce as the next 'accelerant': a developer kit, purchase protection for AI agents, an agentic-expense acquisition — and jobs managed by attrition.",
  platform: {
    name: "Agentic Commerce Experiences (ACE) and Amex Agent Purchase Protection",
    detail: "Launched April 14, 2026, the ACE developer kit lets businesses integrate Amex payments into their AI-agent experiences, and Amex Agent Purchase Protection extends the network's backing to Card Member purchases made by registered AI agents — described by the company as an industry first. Days later Amex agreed to buy Hypercard, an agentic expense-management company, to build agentic tools for its commercial business.",
    sources: ["axp-ace-2026", "axp-hyper-2026", "ab-ace-2026"]
  },
  answerFirst:
    "American Express treats AI the way it treated e-commerce and mobile payments — as an 'accelerant' for a closed-loop network, in CEO Stephen Squeri's March 2026 shareholder letter, written partly to answer a report that had knocked the stock. The strategy is agentic commerce: in April 2026 the company launched the ACE developer kit so businesses can embed Amex payments in AI-agent experiences, announced purchase protection for transactions made by registered AI agents, bought the agentic expense start-up Hypercard, and put agentic search and checkout into a new Graphite business card at the start of its 'most significant year' of commercial product launches. Internally, Squeri says AI is clearing a large technology backlog faster, with any workforce reduction to come 'through attrition'; the company also sold its stake in Amex GBT in a $6.3 billion AI-themed take-private, and its travel unit has plugged its booking tools into Claude.",
  keyPoints: [
    "March 25, 2026: Squeri's shareholder letter positions the company for 'an AI-powered world', calling prior technologies accelerants for the franchise, after a report cast doubt on its future.",
    "April 14, 2026: Agentic Commerce Experiences developer kit and Amex Agent Purchase Protection — an industry-first backing of Card Member purchases made by registered AI agents; on the Q1 call Squeri says the company is 'warming up in the bullpen' on agentic commerce.",
    "April 16, 2026: agreement to acquire Hypercard (Hyper), an agentic expense-management company, to build agentic tools across commercial services.",
    "Product pipeline: the Graphite Business Cash card (March 2026) uses agentic AI for product search and checkout; eight new or enhanced business products planned for 2026; a $300 ChatGPT Business credit on Business Platinum and Gold cards (May 2026).",
    "Workforce: 'We have a large backlog of tech products, with AI we are getting to more things quicker' — any reduction to come later through attrition (Q2 2026 call).",
    "Portfolio: Amex GBT taken private by Long Lake for $6.3 billion in an AI-driven travel bet (May 2026); Amex GBT's Egencia connector now runs inside Anthropic's Claude."
  ],
  leadership: [
    { name: "Stephen J. Squeri", role: "Chairman and CEO", sources: ["ft-squeri-letter-2026", "ab-earnings-q2-2026"], linkedin: "https://www.linkedin.com/in/stevesqueri/" },
    { name: "Christophe Le Caillec", role: "Chief Financial Officer", sources: ["reuters-outlook-2026"], linkedin: "https://www.linkedin.com/in/christophe-le-caillec-37941411/" }
  ],
  timeline: [
    { date: "2025-02-18", title: "Amex Ventures on frontier technology", detail: "The venture arm as the 'eyes and ears' on emerging tech for the business.", sources: ["bloomberg-ventures-2025"] },
    { date: "2026-03-25", title: "Shareholder letter: AI as accelerant", detail: "Squeri makes the case for the company's AI efforts after a stock-drop report; Graphite Business Cash card launches with agentic search and checkout.", sources: ["bloomberg-letter-2026", "ft-squeri-letter-2026", "ft-graphite-2026"] },
    { date: "2026-04-14", title: "ACE developer kit and Agent Purchase Protection", detail: "Integrate Amex payments in agentic experiences; protection for purchases by registered AI agents.", sources: ["axp-ace-2026", "ab-ace-2026"] },
    { date: "2026-04-16", title: "Agrees to buy Hypercard", detail: "Agentic expense management; AI talent for commercial services.", sources: ["axp-hyper-2026", "ab-hyper-2026"] },
    { date: "2026-04-23", title: "Q1 call: 'a new era of commerce'", detail: "Agentic and generative AI emphasised; more marketing and technology spend planned.", sources: ["ab-q1-2026", "bloomberg-q1-2026"] },
    { date: "2026-05-04", title: "Amex GBT sold to Long Lake for $6.3 billion", detail: "An all-cash take-private billed as an AI travel bet; Amex sells its ~30% stake.", sources: ["reuters-gbt-2026", "wsj-gbt-2026"] },
    { date: "2026-05-06", title: "AI training and scholarships for small businesses", detail: "New programs for Card Member businesses.", sources: ["ft-ai-training-2026"] },
    { date: "2026-05-12", title: "$300 ChatGPT Business credit", detail: "A card benefit on Business Platinum and Business Gold.", sources: ["axp-chatgpt-credit-2026", "cnbc-chatgpt-credit-2026"] },
    { date: "2026-07-21", title: "Intelligent buyer–supplier payment capabilities", detail: "With Bottomline's Paymode: embedded authentication and fraud controls.", sources: ["ft-bottomline-2026"] },
    { date: "2026-07-24", title: "Q2 call: AI clears the tech backlog; attrition, not cuts", detail: "Squeri on speed gains internally and externally.", sources: ["ab-earnings-q2-2026"] },
    { date: "2026-08-07", title: "Amex GBT's Egencia connector in Claude", detail: "Agentic corporate travel through Anthropic's assistant.", sources: ["ab-gbt-claude-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "ACE developer kit", detail: "Amex payment technology inside businesses' AI-agent experiences.", status: "In production", sources: ["axp-ace-2026"] },
    { useCase: "generative-agentic-ai", name: "Agent Purchase Protection", detail: "Network backing for purchases by registered AI agents.", status: "In production", sources: ["axp-ace-2026"] },
    { useCase: "generative-agentic-ai", name: "Hypercard agentic expense management", detail: "Acquired to automate commercial clients' expense workflows.", status: "Rolling out", sources: ["axp-hyper-2026"] },
    { useCase: "customer-chatbots", name: "Graphite card agentic search and checkout", detail: "Agentic AI supporting product search and checkout for business customers.", status: "In production", sources: ["ab-q1-2026", "ft-graphite-2026"] },
    { useCase: "generative-agentic-ai", name: "Internal AI for technology delivery and servicing", detail: "Clearing the product backlog faster; AI in servicing to deliver 'empathy at scale'.", status: "In production", sources: ["ab-earnings-q2-2026", "forbes-mindset-2026"] },
    { useCase: "fraud", name: "Embedded fraud controls in B2B payments", detail: "Authentication and fraud controls in buyer–supplier flows.", status: "In production", sources: ["ft-bottomline-2026"] }
  ],
  numbers: [
    { label: "Amex GBT take-private", value: "$6.3 billion (Amex sold ≈ 30% stake)", asOf: "2026-05-04", sources: ["wsj-gbt-2026"] },
    { label: "Business products planned for 2026", value: "8 new or enhanced", asOf: "2026-03-25", sources: ["ft-graphite-2026"] },
    { label: "ChatGPT Business credit", value: "up to $300 a year", asOf: "2026-05-12", sources: ["axp-chatgpt-credit-2026"] },
    { label: "Q4 2025 net income", value: "$2.46 billion", asOf: "2026-01-30", sources: ["cnbc-1000-2026"] }
  ],
  quotes: [
    { who: "Stephen J. Squeri", role: "Chairman and CEO", date: "2026-07-24", quote: "We have a large backlog of tech products, with AI we are getting to more things quicker.", sources: ["ab-earnings-q2-2026"] },
    { who: "Stephen J. Squeri", role: "Chairman and CEO", date: "2026-04-23", quote: "We are embarking on an era in which AI-powered agents can discover products and services, make decisions, and complete transactions on behalf of consumers and businesses.", sources: ["ab-q1-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "American Express National Bank is a national bank; the revised model risk guidance applies to its credit and fraud models.", docSlugs: ["occ-bulletin-2026-13"] },
    { authority: "cfpb", why: "A card issuer at scale: ECOA adverse-action duties, the 2026 Regulation B rule and UDAAP govern AI in credit and in agent-made purchases.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action", "cfpb-regulation-b-final-rule-2026"] },
    { authority: "federal-reserve", why: "Bank holding company; agentic-commerce partners and Anthropic (via Amex GBT) are third-party relationships.", docSlugs: ["fed-sr-23-4"] },
    { authority: "nist", why: "Registered AI agents making purchases is the agent-identity and authorisation problem NIST's agent-security work addresses.", docSlugs: ["nist-caisi-rfi-ai-agent-security-2026"] },
    { authority: "eu-ai-act", why: "Global card operations: EU transparency duties for AI interactions since August 2026.", docSlugs: ["eu-ai-act-regulation-2024-1689"] }
  ],
  suggestions: [
    { title: "Purchase protection for agents is the network's answer to agentic-commerce liability", detail: "By backing purchases made by registered agents, Amex converts an unresolved industry question — who is liable when an agent buys the wrong thing — into a product feature. Registration is the control that makes it work." },
    { title: "The closed loop is the moat, again", detail: "Owning issuer, network and merchant relationships lets Amex define agent registration end to end; open networks need standards bodies to do the same." },
    { title: "Attrition is the stated workforce plan", detail: "Squeri's framing — more output, no cuts, attrition later — is the mildest of the top-20 banks and will be compared with JPMorgan's disclosed reductions." },
    { title: "Buying agentic capability rather than building it", detail: "Hypercard, the Brex-style expense space and the GBT exit show a portfolio approach: acquire the agents, sell the services businesses AI will commoditise." }
  ],
  faq: [
    { q: "What is American Express's ACE developer kit?", a: "Agentic Commerce Experiences (ACE) is a developer kit American Express launched on April 14, 2026 that lets businesses integrate Amex payment technology into their AI-agent experiences. It was announced alongside Amex Agent Purchase Protection, which extends the company's backing to Card Member purchases made by registered AI agents." },
    { q: "Is American Express cutting jobs because of AI?", a: "Not according to its CEO. On the July 24, 2026 earnings call Stephen Squeri said AI is letting the company get through a large backlog of technology products faster, and that any reduction in the workforce would come later through attrition rather than cuts." }
  ],
  sources: [
    { id: "axp-ace-2026", title: "American Express Debuts Agentic Commerce Experiences (ACE) Developer Kit and Announces Industry-First Protection for Registered Agent Purchases", publisher: "American Express via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202604140800BIZWIRE_USPRX____20260414_BW231355-1", date: "2026-04-14" },
    { id: "axp-hyper-2026", title: "American Express to Acquire Hyper, Adding to Its AI Expertise and Expense Management Capabilities", publisher: "American Express via FT Markets", url: "https://markets-data-api-proxy.ft.com/data/announce/full?dockey=600-202604160915BIZWIRE_USPRX____20260415_BW433431-1", date: "2026-04-16" },
    { id: "axp-chatgpt-credit-2026", title: "How to Get More Done with ChatGPT Business", publisher: "American Express", url: "https://www.americanexpress.com/en-us/business/trends-and-insights/articles/how-to-get-more-done-with-chatgpt-business-a-new-benefit-for-american-express-business-platinum-card-and-business-gold-card-members", date: "2026-05-12" },
    { id: "ft-squeri-letter-2026", title: "Stephen J. Squeri Highlights the Company's 2025 Performance and Position of Strength in an AI-Powered World in Letter to Shareholders", publisher: "American Express via FT Markets", url: "https://markets-data-api-proxy.ft.com/data/announce/full?dockey=600-202603250800BIZWIRE_USPRX____20260324_BW120486-1", date: "2026-03-25" },
    { id: "ft-graphite-2026", title: "American Express Launches New Graphite Business Cash Unlimited Card", publisher: "American Express via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202603250715BIZWIRE_USPRX____20260324_BW485642-1", date: "2026-03-25" },
    { id: "ft-ai-training-2026", title: "American Express Launches New AI Training and Scholarship Programs for Small Businesses", publisher: "American Express via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202605061028BIZWIRE_USPRX____20260506_BW803868-1", date: "2026-05-06" },
    { id: "ft-bottomline-2026", title: "American Express Launches Intelligent Capabilities to Help Streamline Buyer and Supplier Payments", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=600-202607210900BIZWIRE_USPRX____20260721_BW220464-1", date: "2026-07-21" },
    { id: "ab-ace-2026", title: "Amex tries to 'grease the skids' for agentic commerce", publisher: "American Banker", url: "https://www.americanbanker.com/payments/news/amex-introduces-agentic-commerce-developers-kit", date: "2026-04-14" },
    { id: "ab-hyper-2026", title: "Ahead of earnings, Amex adds more tools to feed its AI plans", publisher: "American Banker", url: "https://www.americanbanker.com/payments/news/amex-agrees-to-buy-more-tools-to-feed-its-ai-plans", date: "2026-04-16" },
    { id: "ab-q1-2026", title: "Amex says Iran war has an impact, but not a big one", publisher: "American Banker", url: "https://www.americanbanker.com/payments/news/amex-earnings-beat-wall-street-estimates", date: "2026-04-23" },
    { id: "ab-earnings-q2-2026", title: "Amex reports earnings in line with analyst expectations", publisher: "American Banker", url: "https://www.americanbanker.com/payments/news/amex-reports-earnings-in-line-with-analyst-expectations", date: "2026-07-24" },
    { id: "ab-gbt-claude-2026", title: "Amex GBT adds agentic commerce to corporate travel", publisher: "American Banker", url: "https://www.americanbanker.com/payments/news/amex-gbt-adds-agentic-commerce-to-corporate-travel", date: "2026-08-07" },
    { id: "bloomberg-letter-2026", title: "Amex Makes Case for Its AI Efforts in Wake of Stock-Drop Turmoil", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-03-25/amex-makes-case-for-its-ai-efforts-in-wake-of-stock-drop-turmoil", date: "2026-03-25" },
    { id: "bloomberg-q1-2026", title: "Amex Warns of Higher Costs, Says Airline Spending Is Weakening", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-04-23/amex-tops-estimates-as-premium-card-spending-stays-strong", date: "2026-04-23" },
    { id: "bloomberg-ventures-2025", title: "Amex Ventures' Margaret Lim on being the 'eyes and ears of the business'", publisher: "Bloomberg", url: "https://www.bloomberg.com/company/stories/amex-ventures-margaret-lim-on-being-the-eyes-and-ears-of-the-business-cornell-tech-bloomberg/", date: "2025-02-18" },
    { id: "reuters-gbt-2026", title: "Long Lake to buy Amex GBT for $6.3 billion in AI travel bet", publisher: "Reuters", url: "https://www.reuters.com/legal/transactional/long-lake-buy-amex-corporate-travel-platform-63-billion-2026-05-04/", date: "2026-05-04" },
    { id: "reuters-outlook-2026", title: "AmEx projects upbeat 2026 profit as affluent spending holds up", publisher: "Reuters", url: "https://www.reuters.com/sustainability/boards-policy-regulation/amex-projects-upbeat-2026-profit-steady-spending-by-affluent-customers-2026-01-30/", date: "2026-01-30" },
    { id: "wsj-gbt-2026", title: "American Express Global Business Travel Enters $6.3 Billion Take-Private Deal", publisher: "The Wall Street Journal", url: "https://www.wsj.com/business/deals/american-express-global-business-travel-enters-6-3-billion-take-private-deal-b72badb3", date: "2026-05-04" },
    { id: "cnbc-chatgpt-credit-2026", title: "Amex adds first-of-its-kind AI benefit: $300 ChatGPT credit for Business Platinum and Business Gold Cards", publisher: "CNBC", url: "https://www.cnbc.com/select/amex-adds-chatgpt-credit-business-platinum-and-business-gold-cards/", date: "2026-05-12" },
    { id: "cnbc-1000-2026", title: "How much $1,000 invested in American Express 5 years ago would be worth today", publisher: "CNBC", url: "https://www.cnbc.com/2026/01/30/how-much-1000-invested-in-american-express-5-years-ago-is-worth-now.html", date: "2026-01-30" },
    { id: "forbes-mindset-2026", title: "How American Express Will Drive Innovation Through An AI Mindset", publisher: "Forbes", url: "https://www.forbes.com/sites/jefffromm/2026/08/24/how-american-express-will-drive-innovation-through-an-ai--mindset/", date: "2026-08-24" }
  ],
  lastUpdated: "2026-09-09"
};

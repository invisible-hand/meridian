import type { Bank } from "@/lib/banks";

export const FIFTH_THIRD: Bank = {
  slug: "fifth-third",
  name: "Fifth Third Bancorp",
  shortName: "Fifth Third",
  ticker: "FITB",
  hq: "Cincinnati, OH",
  fedRank: 14,
  leadBank: "Fifth Third Bank, N.A.",
  assetsUsdMillions: 296118,
  charter: "National bank (OCC)",
  posture: "'Enterprise-viable' AI: an award-winning chatbot, an AI-native app interface, agentic payments via Brex, and MCP for embedded-finance clients — while digesting Comerica.",
  platform: {
    name: "Jeanie and the Newline MCP server",
    detail: "Jeanie, the AI assistant in the Fifth Third mobile app, won the 2026 Tearsheet Best Chatbot award; in June 2026 the app gained an AI-powered interface with 150 pre-populated intents trained on hundreds of millions of interactions. On the business side, Newline, the bank's embedded-finance platform, runs a Model Context Protocol server extended with 'Skills' in April 2026 so clients' AI models can use the bank's tools safely.",
    sources: ["fitb-jeanie-award-2026", "fitb-ai-interface-2026", "fitb-newline-mcp-2026"]
  },
  answerFirst:
    "Fifth Third's AI strategy is built around what its CIO calls 'enterprise-viable AI': tools that survive a regulated bank's controls and show returns, deployed while the bank absorbs its $10.9 billion Comerica acquisition. On the consumer side that means Jeanie, the mobile-app assistant named best chatbot of 2026, and an AI interface that lets customers act 'using their own words'; on the commercial side it means agentic corporate cards through a multi-year Brex partnership and, through Newline, its embedded-finance business, an MCP server that lets fintech clients' AI agents use the bank's payments tools. CEO Tim Spence calls the cost results 'pretty remarkable' and says banks 'should experiment more', a consumer-lending executive argues AI will let banks 'out-code' their vendors, and the CFO is using AI to monitor the Comerica conversion itself.",
  keyPoints: [
    "Jeanie, the AI banking assistant in the mobile app, won Best Chatbot at the 2026 Tearsheet AI Innovation Awards; a June 2026 AI-powered interface adds 150 pre-populated intents and routes customers to a screen, the chatbot or a person.",
    "December 2025: multi-year Brex partnership makes Brex the provider of the bank's commercial cards and expense tools, unlocking $5.6 billion of annual commercial card volume and Brex's AI agents for clients.",
    "April 2026: Newline's MCP server gains 'Skills', standardising how clients' AI models use the bank's tools; Newline was an American Banker Innovation of the Year 2026 honoree and added $2.7 billion of deposits with fees up 30% year on year in Q1 2026.",
    "CEO Tim Spence (March 2026): AI's cost results are 'pretty remarkable'; 'at financial institutions, we should experiment more than maybe we have historically.'",
    "CIO Jude Schramm's 'enterprise-viable AI' focus; mobile-app releases rose from about two a year in 2021 to more than 500 in 2025.",
    "The $10.9 billion Comerica deal (approved January 2026) created the ninth-largest US bank at about $288 billion; the CFO says AI-powered monitoring tools track the conversion."
  ],
  leadership: [
    { name: "Tim Spence", role: "Chairman, CEO and President", sources: ["bloomberg-spence-2026", "cnbc-spence-brex-2025"] },
    { name: "Jude Schramm", role: "Chief Information Officer", sources: ["ab-schramm-2026", "fitb-schramm-2026"], linkedin: "https://www.linkedin.com/in/judeschramm/" },
    { name: "Ben Hoffman", role: "Chief Strategy Officer and Head of Consumer Products", sources: ["fitb-ai-interface-2026"], linkedin: "https://www.linkedin.com/in/ben-hoffman-22a44412/" },
    { name: "Bryan Preston", role: "Chief Financial Officer", sources: ["ab-comerica-ai-2026"] }
  ],
  timeline: [
    { date: "2025-03-19", title: "AI to personalise deposit offers", detail: "Among regional lenders using AI on customer data to compete for deposits.", sources: ["bloomberg-deposits-2025"] },
    { date: "2025-06-06", title: "'Intentionally unsexy' app improvements", detail: "Jeanie and incremental mobile enhancements; tech and communications spend $474 million in 2024.", sources: ["bankingdive-app-2025"] },
    { date: "2025-10-06", title: "Agrees to buy Comerica for $10.9 billion", detail: "Creating the ninth-largest US bank with about $288 billion in assets.", sources: ["bloomberg-comerica-2025"] },
    { date: "2025-12-09", title: "Brex becomes the commercial-card provider", detail: "Multi-year partnership on Brex Embedded; $5.6 billion of annual card volume; Brex AI agents for clients.", sources: ["fitb-brex-2025", "cnbc-brex-2025"] },
    { date: "2026-01-06", title: "Comerica shareholders approve the deal", detail: "97% in favour.", sources: ["reuters-comerica-2026"] },
    { date: "2026-03-11", title: "Spence: AI cost results 'pretty remarkable'", detail: "Banks should experiment more, the CEO tells Bloomberg TV.", sources: ["bloomberg-spence-2026"] },
    { date: "2026-04-09", title: "'AI will help banks out-code vendors'", detail: "Consumer lending head Jay Plum on eroding reliance on core providers and continuous 'mini reviews' for exams.", sources: ["ab-outcode-2026"] },
    { date: "2026-04-13", title: "Newline MCP server adds Skills", detail: "Standardises how AI models use tools and workflows for embedded-finance clients.", sources: ["fitb-newline-mcp-2026"] },
    { date: "2026-06-01", title: "Newline named Innovation of the Year honoree", detail: "For powering payments and embedded finance for fintechs and enterprises.", sources: ["fitb-newline-award-2026", "ab-newline-2026"] },
    { date: "2026-06-17", title: "AI-powered interface in the mobile app", detail: "150 intents, trained on hundreds of millions of interactions; 'the first step toward changing the interface of banking itself'.", sources: ["fitb-ai-interface-2026", "ab-app-ai-2026"] },
    { date: "2026-07-17", title: "AI tracks the Comerica conversion", detail: "CFO: AI tools aggregate and analyse conversion conversations and flag schedule slips.", sources: ["ab-comerica-ai-2026"] },
    { date: "2026-08-12", title: "Jeanie named Best Chatbot of 2026", detail: "Tearsheet AI Innovation Awards.", sources: ["fitb-jeanie-award-2026"] }
  ],
  useCases: [
    { useCase: "customer-chatbots", name: "Jeanie and the AI app interface", detail: "AI assistant plus natural-language navigation with 150 intents.", status: "In production", sources: ["fitb-jeanie-award-2026", "fitb-ai-interface-2026"] },
    { useCase: "generative-agentic-ai", name: "Brex agentic commercial cards", detail: "AI agents automating expense workflows for commercial clients.", status: "Rolling out", sources: ["fitb-brex-2025", "ab-brex-2025"] },
    { useCase: "generative-agentic-ai", name: "Newline MCP server with Skills", detail: "Clients' AI models use the bank's payments tools through a standard protocol.", status: "In production", sources: ["fitb-newline-mcp-2026"] },
    { useCase: "governance-general", name: "Merger-conversion monitoring", detail: "AI tools tracking the Comerica integration.", status: "In production", sources: ["ab-comerica-ai-2026"] },
    { useCase: "fraud", name: "Scam and impersonation defence", detail: "Expanded scam investigations; AI named by the fraud director as accelerating the threat.", status: "In production", sources: ["bankingdive-elder-fraud-2026", "fitb-scams-2025"] },
    { useCase: "customer-chatbots", name: "AI deposit personalisation", detail: "AI tools on customer data to tailor deposit offers.", status: "In production", sources: ["bloomberg-deposits-2025"] }
  ],
  numbers: [
    { label: "Brex commercial card volume", value: "$5.6 billion a year", asOf: "2025-12-09", sources: ["fitb-brex-2025"] },
    { label: "Mobile app releases", value: "500+ in 2025, from ≈ 2 a year in 2021", asOf: "2026-06-09", sources: ["fitb-schramm-2026"] },
    { label: "AI interface intents", value: "150", asOf: "2026-06-17", sources: ["ab-app-ai-2026"] },
    { label: "Newline Q1 2026", value: "deposits +$2.7 billion, fees +30% y/y", asOf: "2026-04-17", sources: ["ft-q1-2026"] },
    { label: "Comerica acquisition", value: "$10.9 billion; ≈ $288 billion combined assets", asOf: "2025-10-06", sources: ["bloomberg-comerica-2025"] }
  ],
  quotes: [
    { who: "Tim Spence", role: "Chairman and CEO", date: "2026-03-11", quote: "At financial institutions, we should experiment more than maybe we have historically.", sources: ["bloomberg-spence-2026"] },
    { who: "Ben Hoffman", role: "Chief Strategy Officer", date: "2026-06-17", quote: "AI is a powerful tool, but in banking it has to be applied with discipline because customers rightly expect speed, accuracy and reliability every time.", sources: ["fitb-ai-interface-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "National bank; the OCC's Spring 2026 Risk Perspective on measured gen-AI use is the supervisory frame, and the Comerica integration is under OCC review.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "cfpb", why: "Jeanie and the AI interface are consumer chatbots; UDAAP and the CFPB's chatbot spotlight apply.", docSlugs: ["cfpb-chatbots-in-consumer-finance-2023"] },
    { authority: "federal-reserve", why: "Brex and Newline clients are third-party relationships under the interagency guidance.", docSlugs: ["fed-sr-23-4"] },
    { authority: "nist", why: "An MCP server exposing bank tools to external AI models is the agent-identity and authorisation problem NIST's agent work addresses.", docSlugs: ["nist-caisi-rfi-ai-agent-security-2026"] }
  ],
  suggestions: [
    { title: "Exposing tools to clients' agents is a new perimeter", detail: "Newline's MCP server makes Fifth Third one of the first banks to let outside AI models call its systems by design. Authorisation, rate limits and audit for those calls are now product features supervisors will examine." },
    { title: "Partner-led agents keep the model risk with the vendor — and the accountability with the bank", detail: "Brex's agents run on Brex's platform, but the interagency guidance is explicit that third-party use does not diminish the bank's responsibility." },
    { title: "Integration is the AI use case that matters this year", detail: "Using AI to monitor the Comerica conversion is modest technology applied to the largest execution risk on the bank's plate — the kind of use case examiners like." },
    { title: "'Out-coding' vendors is a strategic claim to watch", detail: "If AI lets a regional bank rewrite what it used to buy, the core-provider relationships that define regional-bank IT change shape." }
  ],
  faq: [
    { q: "What is Jeanie at Fifth Third?", a: "Jeanie is Fifth Third's AI-powered banking assistant inside its mobile app. It won the Best Chatbot award at the 2026 Tearsheet AI Innovation Awards, and since June 2026 sits behind an AI-powered app interface with 150 pre-populated intents that routes customers to a task screen, the chatbot or a live representative." },
    { q: "What is Fifth Third doing with Brex?", a: "In December 2025 Fifth Third made Brex the provider of its commercial cards and expense-management tools in a multi-year partnership built on Brex Embedded, unlocking $5.6 billion of annual commercial card volume and giving commercial clients access to Brex's AI agents that automate expense workflows." }
  ],
  sources: [
    { id: "fitb-jeanie-award-2026", title: "Fifth Third's Jeanie Named Best Chatbot by Tearsheet AI Innovation Awards", publisher: "Fifth Third", url: "https://www.53.com/content/fifth-third/en/media-center/press-releases/2026/press-release-2026-08-12.html", date: "2026-08-12" },
    { id: "fitb-ai-interface-2026", title: "Fifth Third Launches AI-Powered Interface in Mobile App", publisher: "Fifth Third via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202606170800BIZWIRE_USPRX____20260617_BW555789-1", date: "2026-06-17" },
    { id: "fitb-newline-mcp-2026", title: "Fifth Third's Newline Extends MCP Server Capabilities with Skills", publisher: "Fifth Third", url: "https://locations.53.com/content/fifth-third/en/media-center/press-releases/2026/press-release-2026-04-13.html", date: "2026-04-13" },
    { id: "fitb-newline-award-2026", title: "Fifth Third's Newline Recognized by American Banker for Powering Next-Generation Payments Infrastructure", publisher: "Fifth Third", url: "https://www.53.com/content/fifth-third/en/media-center/press-releases/2026/press-release-2026-06-05.html", date: "2026-06-05" },
    { id: "fitb-brex-2025", title: "Fifth Third and Brex Partner to Bring AI-Powered Finance to Businesses, Unlocking $5.6B in Commercial Card Volume", publisher: "Fifth Third", url: "https://onlinebanking.53.com/content/fifth-third/en/media-center/press-releases/2025/press-release-2025-12-09.html", date: "2025-12-09" },
    { id: "fitb-schramm-2026", title: "American Banker Names Jude Schramm to Most Innovative People in Finance List", publisher: "Fifth Third", url: "https://www.53.com/content/fifth-third/en/media-center/press-releases/2026/press-release-2026-06-09.html", date: "2026-06-09" },
    { id: "fitb-scams-2025", title: "4 Ways to Stay Ahead of AI Scams", publisher: "Fifth Third", url: "https://onlinebanking.53.com/content/fifth-third/en/financial-insights/personal/fraud-protection/4-ways-to-stay-ahead-of-ai-scams.html", date: "2025-09-29" },
    { id: "ab-schramm-2026", title: "Fifth Third's CIO is focused on enterprise-viable AI", publisher: "American Banker", url: "https://www.americanbanker.com/news/fifth-thirds-cio-jude-schramm-is-28-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "ab-outcode-2026", title: "Fifth Third official: AI will help banks 'out-code' vendors", publisher: "American Banker", url: "https://www.americanbanker.com/news/fifth-third-official-ai-will-help-banks-out-code-vendors", date: "2026-04-09" },
    { id: "ab-newline-2026", title: "Fifth Third's Newline is one of the Innovation of the Year honorees", publisher: "American Banker", url: "https://www.americanbanker.com/news/fifth-thirds-newline-is-one-of-the-innovation-of-the-year-honorees", date: "2026-06-01" },
    { id: "ab-app-ai-2026", title: "Fifth Third injects AI into its mobile app", publisher: "American Banker", url: "https://www.americanbanker.com/news/fifth-third-injects-ai-into-its-mobile-app", date: "2026-06-17" },
    { id: "ab-comerica-ai-2026", title: "Fifth Third says it's using AI to track Comerica conversion", publisher: "American Banker", url: "https://www.americanbanker.com/news/fifth-third-says-its-using-ai-to-track-comerica-conversion", date: "2026-07-17" },
    { id: "ab-brex-2025", title: "Fifth Third stakes claim in agentic payments with Brex", publisher: "American Banker", url: "https://www.americanbanker.com/payments/news/fifth-third-teams-up-with-brex-for-agentic-commercial-cards", date: "2025-12-10" },
    { id: "cnbc-brex-2025", title: "Fifth Third, Brex sign commercial cards agreement", publisher: "CNBC", url: "https://www.cnbc.com/2025/12/09/fifth-third-bank-brex-commercial-cards-agreement.html", date: "2025-12-09" },
    { id: "cnbc-spence-brex-2025", title: "Fifth Third Bancorp CEO Tim Spence on new partnership with Brex", publisher: "CNBC", url: "https://www.cnbc.com/video/2025/12/09/fifth-third-bancorp-ceo-tim-spence-on-new-partnership-with-brex.html", date: "2025-12-09" },
    { id: "bloomberg-spence-2026", title: "Fifth Third Sees 'Pretty Remarkable' AI Ability to Lower Costs", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-03-11/fifth-third-sees-pretty-remarkable-outcome-of-ai-to-lower-cost", date: "2026-03-11" },
    { id: "bloomberg-deposits-2025", title: "Fifth Third Among Banks Using AI to Help Lure Customer Deposits", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2025-03-19/fifth-third-among-banks-using-ai-to-help-lure-customer-deposits", date: "2025-03-19" },
    { id: "bloomberg-comerica-2025", title: "Stock Movers: AMD, Fifth Third, Tesla (Comerica deal)", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/audio/2025-10-06/stock-movers-amd-fifth-third-tesla-podcast", date: "2025-10-06" },
    { id: "reuters-comerica-2026", title: "Comerica shareholders approve $10.9 billion deal with Fifth Third Bancorp", publisher: "Reuters", url: "https://www.reuters.com/sustainability/sustainable-finance-reporting/comerica-shareholders-approve-109-billion-deal-with-fifth-third-bancorp-2026-01-06/", date: "2026-01-06" },
    { id: "ft-q1-2026", title: "Fifth Third Bancorp Reports First Quarter 2026 Earnings", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202604170630BIZWIRE_USPRX____20260416_BW053198-1", date: "2026-04-17" },
    { id: "bankingdive-app-2025", title: "Fifth Third takes 'intentionally unsexy' approach to mobile app improvements", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/fifth-third-bank-mobile-app-improvements-ai-strategy-jeanie/749973/", date: "2025-06-06" },
    { id: "bankingdive-elder-fraud-2026", title: "How Fifth Third, Star One are fighting elder fraud", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/banks-scam-defenses-elder-fraud-fifth-third-star-one/823265/", date: "2026-06-18" }
  ],
  lastUpdated: "2026-09-09"
};

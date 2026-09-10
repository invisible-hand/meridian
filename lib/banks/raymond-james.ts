import type { Bank } from "@/lib/banks";

export const RAYMOND_JAMES: Bank = {
  slug: "raymond-james",
  name: "Raymond James Financial",
  shortName: "Raymond James",
  ticker: "RJF",
  hq: "St. Petersburg, FL",
  fedRank: 49,
  leadBank: "Raymond James Bank",
  assetsUsdMillions: 45737,
  charter: "Florida state member bank (Federal Reserve)",
  posture: "An advisor-centric wealth manager with a chief AI officer, a head of AI strategy, a $975 million technology budget and a proprietary gen-AI operations agent, Rai, built to augment rather than replace advisors.",
  platform: {
    name: "Rai, AI Search and the advisor desktop",
    detail: "Raymond James frames AI around three pillars: data-driven insights for client advice, enhanced service models, and secure, scalable applications. Its proprietary tools include AI Search (April 2025), a generative-AI search over the firm's internal knowledge base and intranet; an AI Note Assistant inside its proprietary CRM; predictive machine learning in Advisor Access; firmwide Zoom AI Companion meeting summaries (May 2025) integrated with RJ CRM and the Opportunities application; and Rai (January 2026), a generative-AI operations agent that answers operational questions from multiple firm knowledge bases and adapts to user activity. Stuart Feld was promoted to chief AI officer in 2025 and David Solganik joined as head of AI strategy in September 2025, reporting to Feld; CEO Paul Shoukry says AI investment is 'part of our $975 million annual technology budget'.",
    sources: ["rj-rai-2026", "ft-solganik-2025", "rj-zoom-2025"]
  },
  answerFirst:
    "Raymond James Financial, the St. Petersburg wealth manager and investment bank whose Raymond James Bank ranks 49th among US commercial banks, has a deliberately advisor-first AI strategy: 'augmenting the human touch, rather than replacing it', in the words of its September 2025 announcement of David Solganik as head of AI strategy, reporting to chief AI officer Stuart Feld. CEO Paul Shoukry describes 'a multi-year commitment to embed AI into tools and applications across the firm' funded within a $975 million annual technology budget. The visible outputs are internal tools for its roughly 9,000 financial advisors and home-office staff rather than client-facing bots: AI Search over the firm's knowledge base (April 2025), firmwide Zoom AI Companion meeting summaries integrated with the proprietary CRM (May 2025), an AI Note Assistant in that CRM, predictive machine learning in Advisor Access, and in January 2026 Rai, a proprietary generative-AI operations agent that gives 'immediate, curated natural language answers and guidance to operational questions' and evolves with user preferences. Shoukry has framed AI as a way to give professionals 'more time to serve their clients' and has told analysts AI's potential to help clients optimise cash is only an 'incremental threat' to the firm's sweep economics. Markets disagreed briefly: on 10 February 2026 an AI tax-planning tool from Altruist triggered an 8.8% drop in the shares, the worst day since March 2020, on fears that automated advice would erode wealth managers. Results have not shown it: fiscal second-quarter 2026 net revenue was a record $3.86 billion and the fiscal third quarter $3.93 billion with $595 million of net income, $1.76 trillion of client assets and record bank loans of $54.8 billion. Raymond James Bank is a Florida state member bank supervised by the Federal Reserve, while the advisory and brokerage entities sit under the SEC and FINRA.",
  keyPoints: [
    "Named AI leadership: Stuart Feld promoted to chief AI officer (2025) and David Solganik hired as head of AI strategy (September 2025); AI funded within a $975 million annual technology budget.",
    "Rai, a proprietary gen-AI operations agent (January 2026), answers operational questions from multiple firm knowledge bases and adapts to user activity.",
    "Advisor tooling first: AI Search, CRM Note Assistant, predictive ML in Advisor Access and firmwide Zoom AI meeting summaries; no client-facing AI adviser.",
    "Explicit philosophy: 'augmenting the human touch, rather than replacing it', with a 'measured approach' to adoption.",
    "Market test: shares fell 8.8% on 10 February 2026 on AI-disruption fears for wealth managers; CEO calls AI cash-optimisation an 'incremental threat' to sweep revenue.",
    "Results: record fiscal Q2 and Q3 2026 revenue ($3.86 billion, $3.93 billion); $1.76 trillion client assets; record $54.8 billion bank loans."
  ],
  leadership: [
    { name: "Paul Shoukry", role: "Chief Executive Officer", sources: ["ft-solganik-2025", "rj-rai-2026"], linkedin: "https://www.linkedin.com/in/paulshoukry/" },
    { name: "Stuart Feld", role: "Chief AI Officer", sources: ["ft-solganik-2025"], linkedin: "https://www.linkedin.com/in/stuart-feld/" },
    { name: "David Solganik", role: "Head of AI Strategy", sources: ["ft-solganik-2025"], linkedin: "https://www.linkedin.com/in/david-solganik/" },
    { name: "Vin Campagnoli", role: "EVP, Technology and Operations", sources: ["ft-solganik-2025"], linkedin: "https://www.linkedin.com/in/vincampagnoli/" },
    { name: "Andy Zolper", role: "Chief Information Officer", sources: ["rj-zoom-2025"], linkedin: "https://www.linkedin.com/in/andyzolper/" }
  ],
  timeline: [
    { date: "2025-05-15", title: "Zoom AI Companion meeting summaries rolled out firmwide", detail: "Integrated with RJ CRM and Opportunities; follows April's AI Search launch.", sources: ["rj-zoom-2025"] },
    { date: "2025-09-08", title: "Head of AI strategy hired; chief AI officer named", detail: "Solganik reports to Feld; $975 million technology budget cited.", sources: ["ft-solganik-2025"] },
    { date: "2026-01-27", title: "Rai, proprietary gen-AI operations agent, launched", detail: "Natural-language answers to operational questions across firm knowledge bases.", sources: ["rj-rai-2026"] },
    { date: "2026-02-10", title: "Shares fall 8.8% on AI-disruption fears", detail: "Altruist's AI tax tool sparks a wealth-manager selloff.", sources: ["bloomberg-selloff-2026"] },
    { date: "2026-04-22", title: "Record fiscal second-quarter 2026", detail: "Net revenue $3.86 billion; CEO cites 'increasing AI integration' for efficiency.", sources: ["ft-q2-fy26"] },
    { date: "2026-07-22", title: "Fiscal third-quarter 2026 results", detail: "Net revenue $3.93 billion; net income $595 million.", sources: ["ft-q3-fy26"] },
    { date: "2026-08-04", title: "AI seen as 'incremental threat' to cash sweeps", detail: "Shoukry's view contrasted with LPL's pricing review.", sources: ["ab-sweeps-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Rai operations agent", detail: "Interactive gen-AI Q&A over firm systems and policies for advisors and associates.", status: "In production", sources: ["rj-rai-2026"] },
    { useCase: "generative-agentic-ai", name: "AI Search and CRM Note Assistant", detail: "Gen-AI search of the internal knowledge base; note organisation and summaries in RJ CRM.", status: "In production", sources: ["ft-solganik-2025", "rj-zoom-2025"] },
    { useCase: "generative-agentic-ai", name: "Zoom AI Companion meeting summaries", detail: "Firmwide for advisors and institutional businesses.", status: "In production", sources: ["rj-zoom-2025"] },
    { useCase: "trading-markets", name: "Predictive machine learning in Advisor Access", detail: "Data-driven client insights for advisors.", status: "In production", sources: ["rj-zoom-2025"] },
    { useCase: "governance-general", name: "Chief AI officer and AI strategy office", detail: "Cross-business identification of analytics, ML and gen-AI opportunities.", status: "In production", sources: ["ft-solganik-2025"] }
  ],
  numbers: [
    { label: "Annual technology budget", value: "$975 million", asOf: "2025-09-08", sources: ["ft-solganik-2025"] },
    { label: "Fiscal Q3 2026 net revenue / net income", value: "$3.93 billion / $595 million", asOf: "2026-07-22", sources: ["ft-q3-fy26"] },
    { label: "Client assets under administration", value: "$1.76 trillion", asOf: "2026-04-22", sources: ["ft-q2-fy26"] },
    { label: "Net bank loans", value: "$54.8 billion (record)", asOf: "2026-04-22", sources: ["ft-q2-fy26"] },
    { label: "Share move on AI-disruption fears", value: "−8.8% (10 Feb 2026)", asOf: "2026-02-10", sources: ["bloomberg-selloff-2026"] }
  ],
  quotes: [
    { who: "Paul Shoukry", role: "Chief Executive Officer", date: "2026-01-27", quote: "We will continue to deploy our multi-year investment in AI tools and capabilities while steadfastly preserving the personal relationships that remain at the core of our business.", sources: ["rj-rai-2026"] },
    { who: "Paul Shoukry", role: "Chief Executive Officer", date: "2025-09-08", quote: "We will continue to make meaningful investments in AI as part of our $975 million annual technology budget.", sources: ["ft-solganik-2025"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "Raymond James Bank is a state member bank and the parent a financial holding company; model-risk and third-party guidance cover Zoom, CRM and Rai.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "sec", why: "Advisor-facing AI that shapes client recommendations engages the SEC's predictive-analytics and AI-washing focus for broker-dealers and advisers.", docSlugs: ["sec-pda-conflicts-proposal-34-97990", "sec-exam-priorities-fy2026"] }
  ],
  suggestions: [
    { title: "Rai is an internal agent; the client-facing one is the strategic question", detail: "Altruist showed that markets price client-facing AI advice; Raymond James' answer so far is advisor productivity, which is defensible but must eventually reach clients." },
    { title: "Sweep economics are the AI exposure investors watch", detail: "If AI agents optimise client cash, bank net interest income is the line at risk; the 'incremental threat' framing will be tested by product launches at Schwab and SoFi." },
    { title: "Recordkeeping for AI-generated notes", detail: "Meeting summaries and CRM note assistants create books-and-records questions under FINRA and SEC rules; retention and supervision policies should be explicit." },
    { title: "A chief AI officer with a budget line is ahead of most peers", detail: "Publishing adoption metrics for AI Search and Rai would turn the governance structure into evidence." }
  ],
  faq: [
    { q: "What is Rai at Raymond James?", a: "Rai is Raymond James' proprietary generative-AI operations agent, launched on 27 January 2026. It answers operational questions in natural language by drawing on multiple firm knowledge bases and policies, and adapts to user activity and preferences. It is an internal tool for advisors and associates, not a client-facing adviser." },
    { q: "Who leads AI at Raymond James?", a: "Stuart Feld, promoted to chief AI officer in 2025, is the principal architect of the firm's AI strategy. David Solganik joined as head of AI strategy in September 2025 and reports to Feld. Both sit within the technology and operations organisation led by Vin Campagnoli, with CIO Andy Zolper leading tool rollouts." }
  ],
  sources: [
    { id: "ab-sweeps-2026", title: "Amid AI threat, LPL reviews reliance on 'cash sweeps'", publisher: "American Banker", url: "https://americanbanker.com/news/amid-ai-threat-lpl-reviews-reliance-on-cash-sweeps", date: "2026-08-04" },
    { id: "bloomberg-selloff-2026", title: "Wealth Manager Stocks Sink as Traders Flee Next AI Casualty", publisher: "Bloomberg", url: "https://bloomberg.com/news/articles/2026-02-10/wealth-manager-stocks-sink-as-new-ai-tool-sparks-disruption-fear", date: "2026-02-10" },
    { id: "ft-solganik-2025", title: "Raymond James Hires David Solganik as Head of AI Strategy", publisher: "GlobeNewswire via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=1330-9525266en-2G3EBTACBF0CHV70SD1J7K5BF2", date: "2025-09-08" },
    { id: "ft-q2-fy26", title: "Raymond James Financial Reports Fiscal Second Quarter of 2026 Results", publisher: "GlobeNewswire via FT Markets", url: "https://markets-data-api-proxy.ft.com/data/announce/full?dockey=1330-9695288en-27GQRFLST7UJC8KSU1DUH53S8N", date: "2026-04-22" },
    { id: "ft-q3-fy26", title: "Raymond James Financial Reports Fiscal Third Quarter of 2026 Results", publisher: "GlobeNewswire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=1330-9766630en-5NLGV91Q1CIFMSON0VQ2F8FEAD", date: "2026-07-22" },
    { id: "rj-rai-2026", title: "Raymond James launches proprietary digital AI agent to bolster operational excellence", publisher: "Raymond James", url: "https://raymondjames.com/news-and-media/press-releases/2026/01/27/raymond-james-launches-proprietary-digital-ai-agent-to-bolster-operational-excellence", date: "2026-01-27" },
    { id: "rj-zoom-2025", title: "Raymond James expands service-focused technology investment with Zoom AI Companion meeting summaries", publisher: "Raymond James", url: "https://raymondjames.com/athens-branch/about-us/press-releases/2025/05/15/raymond-james-expands-service-focused-technology-investment-with-zoom-ai-companion", date: "2025-05-15" }
  ],
  lastUpdated: "2026-09-10"
};

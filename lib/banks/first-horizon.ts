import type { Bank } from "@/lib/banks";

export const FIRST_HORIZON: Bank = {
  slug: "first-horizon",
  name: "First Horizon",
  shortName: "First Horizon",
  ticker: "FHN",
  hq: "Memphis, TN",
  fedRank: 35,
  leadBank: "First Horizon Bank",
  assetsUsdMillions: 83824,
  charter: "Tennessee state member bank (Federal Reserve)",
  posture: "'Let's not try to boil the ocean': an in-house gen-AI tool in production for over a year, an enterprise data hub with a data marketplace, and AI written into the commercial-strategy job description.",
  platform: {
    name: "ChatFHN and the Enterprise Data Hub",
    detail: "First Horizon's internal generative-AI tool, ChatFHN, has been in production since early 2025 and is used to draft emails and documents, answer questions about company policy and help procurement compare RFPs, with human judgment making the final call. Underneath it, CIO Mohan Sankararaman is replacing siloed repositories with an Enterprise Data Hub that unifies information once scattered across 10 to 15 places, and an internal data marketplace, an 'App Store' for approved data products that employees discover according to their permissions, piloting with a handful of groups with a goal of at least 100 data products within a year. The bank is also building its own customer-facing digital banking platform to bring systems and capabilities in-house.",
    sources: ["ab-cio-2026", "ab-locascio-2025"]
  },
  answerFirst:
    "First Horizon, an $84 billion bank across 12 Southern states, describes its AI approach in the words of its CIO: 'Let's not try to boil the ocean.' Mohan Sankararaman, 17 years at the bank and No. 36 on American Banker's 2026 Most Innovative People in Finance list, has spent two years on data and AI foundations: an Enterprise Data Hub that replaces repositories spread across 10 to 15 places, and a data marketplace where employees find approved 'data products' by permission, in pilot with a target of 100 products within a year. On top sits ChatFHN, an internal generative-AI tool in production for about 15 months by mid-2026, used for drafting, policy questions and comparing RFPs, which COO Tammy LoCascio says lets teams 'find novel ways to change the way work gets done'. AI is now written into line roles: Catherine Wood's July 2026 promotion to head of commercial banking strategy charges her with 'identifying high-impact AI and technology opportunities across commercial onboarding, origination, underwriting and servicing', the head of investor relations sits on an AI working group, and the CISO frames generative AI as giving attackers the same productivity gains as defenders. The bank is building its own customer-facing digital platform to bring capabilities in-house, joined a bank-built tokenised-deposit network in 2026, and CEO Bryan Jordan has said he is 'increasingly confident' about integrating a fill-in acquisition in the Southern footprint, with Raleigh named as a market of interest, even as analysts speculate the bank itself is a target. No AI budget, agent count or headcount effect has been disclosed.",
  keyPoints: [
    "ChatFHN: an internal gen-AI tool in production for about 15 months by June 2026 — drafting, policy Q&A, RFP comparison — with humans making the final call.",
    "Data foundation: an Enterprise Data Hub consolidating 10–15 repositories and a permission-based data marketplace in pilot, targeting 100-plus data products within a year; 'good customer service is only possible if you have data'.",
    "AI in line management: the new head of commercial banking strategy is tasked with finding high-impact AI opportunities across onboarding, origination, underwriting and servicing; investor relations sits on the AI working group.",
    "Build in-house: a proprietary customer-facing digital banking platform is under construction, part of a plan to bring systems and capabilities in-house 'for the long haul'.",
    "Security posture: the CISO says AI gives bad actors 'the same promise' of productivity, threats are realised 'immediately', and the problem 'is managed at a business level, not a technology level'.",
    "Strategy backdrop: fill-in M&A in the 12-state footprint (Raleigh of interest), a tokenised-deposit network with Huntington and M&T, and Category IV's 'bright line' seen as less bright."
  ],
  leadership: [
    { name: "Bryan Jordan", role: "Chairman, President and CEO", sources: ["bankingdive-ma-2025"] },
    { name: "Mohan Sankararaman", role: "Chief Information Officer (also styled Chief Innovation Officer); 17 years at the bank", sources: ["ab-cio-2026", "ab-cio-profile-2026"], linkedin: "https://www.linkedin.com/in/mohan-sankararaman/" },
    { name: "Tammy LoCascio", role: "Senior EVP and Chief Operating Officer", sources: ["ab-locascio-2025"], linkedin: "https://www.linkedin.com/in/tammy-locascio-7b183a5/" },
    { name: "Hope Dmuchowski", role: "Senior EVP and Chief Financial Officer", sources: ["fhn-craft-2026", "bankingdive-raleigh-2026"], linkedin: "https://www.linkedin.com/in/hope-dmuchowski-1872441/" },
    { name: "Catherine Wood", role: "SVP, Head of Commercial Banking Strategy (from July 2026); AI opportunities across the commercial lifecycle", sources: ["fhn-wood-2026"], linkedin: "https://www.linkedin.com/in/catherine-wood-36488784/" },
    { name: "Steven Jones", role: "Chief Information Security Officer (retired at end-2025; Kevin Gowen now Chief Security Officer)", sources: ["fhn-cyberscams-2026"], linkedin: "https://www.linkedin.com/in/steven-jones-5a27aa6/" }
  ],
  timeline: [
    { date: "2025-08-27", title: "Charlotte hiring doubled down", detail: "Consumer-banking and office expansion in the Carolinas.", sources: ["bankingdive-charlotte-2025"] },
    { date: "2025-09-24", title: "ChatFHN rolled out; in-house digital platform under way", detail: "The COO on the gen-AI tool and the plan to bring systems in-house.", sources: ["ab-locascio-2025"] },
    { date: "2025-10-15", title: "'Increasingly confident' about a fill-in acquisition", detail: "The CEO on third-quarter results as deal approvals speed up.", sources: ["bankingdive-ma-2025"] },
    { date: "2026-01-15", title: "Full-year 2025 net income up 29%", detail: "$956 million available to common shareholders.", sources: ["fhn-fy2025"] },
    { date: "2026-01-16", title: "Raleigh named a market of interest", detail: "The CFO on where a deal would help most.", sources: ["bankingdive-raleigh-2026"] },
    { date: "2026-02-18", title: "Joins a bank-built tokenised-deposit network", detail: "With Huntington and M&T, to guard turf against stablecoins.", sources: ["bloomberg-tokenized-2026"] },
    { date: "2026-05-11", title: "IR head recognised; sits on the AI working group", detail: "Tyler Craft's 40 Under 40 profile confirms the group's existence.", sources: ["fhn-craft-2026"] },
    { date: "2026-06-01", title: "CIO ranked No. 36 for 'data-as-a-product'", detail: "Enterprise Data Hub, a data marketplace targeting 100 products, and ChatFHN at 15 months in production.", sources: ["ab-cio-2026"] },
    { date: "2026-06-17", title: "CIO speaks on model portfolio governance", detail: "Registries, drift monitoring, vendor-embedded AI and 'shadow AI' at American Banker's Digital Banking conference.", sources: ["ab-cio-profile-2026"] },
    { date: "2026-07-01", title: "CISO on AI-powered cyberscams", detail: "Deepfakes and generative AI compress the threat lifecycle; managed 'at a business level'.", sources: ["fhn-cyberscams-2026"] },
    { date: "2026-07-17", title: "AI written into commercial strategy", detail: "Catherine Wood to identify high-impact AI opportunities across onboarding, origination, underwriting and servicing.", sources: ["fhn-wood-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "ChatFHN internal assistant", detail: "Drafting, policy answers and RFP comparison; humans make the final call.", status: "In production", sources: ["ab-cio-2026", "ab-locascio-2025"] },
    { useCase: "governance-general", name: "Enterprise Data Hub and data marketplace", detail: "Unified data with permission-based discovery of approved data products.", status: "Pilot", sources: ["ab-cio-2026"] },
    { useCase: "credit-underwriting", name: "AI across the commercial lifecycle", detail: "Onboarding, origination, underwriting and servicing opportunities under the commercial-strategy head.", status: "Announced", sources: ["fhn-wood-2026"] },
    { useCase: "cybersecurity", name: "Defence against AI-enabled scams", detail: "Deepfake and gen-AI phishing treated as a business-level control problem.", status: "In production", sources: ["fhn-cyberscams-2026"] },
    { useCase: "customer-chatbots", name: "In-house digital banking platform", detail: "A proprietary customer-facing platform under construction.", status: "Announced", sources: ["ab-locascio-2025"] }
  ],
  numbers: [
    { label: "ChatFHN time in production", value: "≈ 15 months", asOf: "2026-06-01", sources: ["ab-cio-2026"] },
    { label: "Data products targeted in the marketplace", value: "100+ within a year", asOf: "2026-06-01", sources: ["ab-cio-2026"] },
    { label: "Repositories consolidated into the Enterprise Data Hub", value: "10–15 locations per data set", asOf: "2026-06-01", sources: ["ab-cio-2026"] },
    { label: "Full-year 2025 net income to common", value: "$956 million, up 29%", asOf: "2026-01-15", sources: ["fhn-fy2025"] },
    { label: "Total assets", value: "$84.4 billion", asOf: "2026-06-30", sources: ["fhn-wood-2026"] }
  ],
  quotes: [
    { who: "Mohan Sankararaman", role: "Chief Information Officer", date: "2026-06-01", quote: "Let's not try to boil the ocean.", sources: ["ab-cio-2026"] },
    { who: "Tammy LoCascio", role: "Chief Operating Officer", date: "2025-09-24", quote: "It's remarkable to see how enabling our teams with a powerful resource like this allows them to find novel ways to change the way work gets done.", sources: ["ab-locascio-2025"] },
    { who: "Steven Jones", role: "Chief Information Security Officer", date: "2026-07-01", quote: "AI has the same promise for bad actors to improve their productivity as it has for companies.", sources: ["fhn-cyberscams-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "First Horizon Bank is a Tennessee state member bank; the model-risk letter frames ChatFHN and any AI in underwriting, and the tokenised-deposit network is a third-party arrangement.", docSlugs: ["fed-sr-26-2", "fed-sr-23-4"] },
    { authority: "cfpb", why: "AI in commercial onboarding and underwriting, and a coming in-house consumer digital platform, sit under ECOA and UDAAP.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action", "cfpb-chatbots-in-consumer-finance-2023"] },
    { authority: "nist", why: "The CIO's model-registry and drift-monitoring themes map to the AI RMF; the CISO's threat framing to its cyber overlays.", docSlugs: ["nist-ai-100-1", "nist-cosais-control-overlays"] },
    { authority: "fincen", why: "AI-enabled fraud defence and any automation in monitoring fall within the AML/CFT program rule.", docSlugs: ["fincen-aml-cft-program-nprm-2026"] }
  ],
  suggestions: [
    { title: "Data-as-a-product is the right first bet for a bank this size", detail: "A marketplace of governed data products makes every later model cheaper and more auditable; the 100-product target is a measurable milestone worth reporting against." },
    { title: "Putting AI in a line executive's mandate is how adoption spreads", detail: "The commercial-strategy appointment turns AI from an IT project into a business objective with an owner; underwriting is where the fair-lending scrutiny will follow." },
    { title: "Incremental wins need a public scoreboard", detail: "ChatFHN has run for over a year; publishing adoption and use-case counts would let investors weigh the bank against peers now reporting agents." },
    { title: "M&A both ways complicates the AI roadmap", detail: "A bank that may buy, and may be bought, has to design data and AI platforms to absorb or be absorbed; the in-house digital platform is a bet on the former." }
  ],
  faq: [
    { q: "What is ChatFHN?", a: "First Horizon's internal generative-AI tool, in production since early 2025. Employees use it to draft emails and documents, answer questions about company policies and help procurement compare RFPs, with human judgment making final decisions, according to the bank's CIO and COO." },
    { q: "Who leads AI at First Horizon?", a: "Chief information officer Mohan Sankararaman leads the data and AI programme, including the Enterprise Data Hub and data marketplace, and the bank has an AI working group. In July 2026 it promoted Catherine Wood to head of commercial banking strategy with an explicit remit to find high-impact AI opportunities across onboarding, origination, underwriting and servicing." }
  ],
  sources: [
    { id: "ab-cio-2026", title: "#36 First Horizon's CIO is zeroing in on 'data-as-a-product' in tech push", publisher: "American Banker", url: "https://americanbanker.com/news/first-horizons-cio-is-36-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "ab-cio-profile-2026", title: "Mohan Sankararaman, Chief Innovation Officer, First Horizon (Digital Banking speaker profile)", publisher: "American Banker", url: "https://digital-banking.americanbanker.com/profile/mohan-sankararaman-2", date: "2026-05-28" },
    { id: "ab-locascio-2025", title: "The Most Powerful Women to Watch, No. 13, Tammy LoCascio, First Horizon Bank", publisher: "American Banker", url: "https://americanbanker.com/news/2025-the-most-powerful-women-to-watch-no-13-tammy-locascio-first-horizon-bank", date: "2025-09-24" },
    { id: "fhn-wood-2026", title: "Catherine Wood Promoted to Head of Commercial Banking Strategy for First Horizon Bank", publisher: "First Horizon", url: "https://ir.firsthorizon.com/press-releases/press-release-details/2026/Catherine-Wood-Promoted-to-Head-of-Commercial-Banking-Strategy-for-First-Horizon-Bank", date: "2026-07-17" },
    { id: "fhn-craft-2026", title: "First Horizon Announces Tyler Craft Named to the Triangle Business Journal 2026 40 Under 40", publisher: "First Horizon", url: "https://ir.firsthorizon.com/press-releases/press-release-details/2026/First-Horizon-Announces-Tyler-Craft-Named-to-the-Triangle-Business-Journal-2026-40-Under-40", date: "2026-05-11" },
    { id: "fhn-cyberscams-2026", title: "Protecting Against AI-Powered Cyberscams", publisher: "First Horizon", url: "https://firsthorizon.com/learning-center/commercial-and-specialty/Protecting-Against-AI-Powered-Cyberscams", date: "2026-07-01" },
    { id: "fhn-fy2025", title: "First Horizon Corporation Reports Full Year 2025 Net Income Available to Common Shareholders increased 29% to $956 Million", publisher: "First Horizon", url: "https://ir.firsthorizon.com/press-releases/press-release-details/2026/First-Horizon-Corporation-Reports-Full-Year-2025-Net-Income-Available-to-Common-Shareholders-NIAC-increased-29-to-956-Million-or-1-87-EPS-Adjusted-NIAC-increased-15-to-968-Million-or-1-89-EPS-driven-by-revenue-strength-and-credit-performance", date: "2026-01-15" },
    { id: "bankingdive-ma-2025", title: "First Horizon keeps options open amid M&A uptick", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/first-horizon-acquisition-buyer-ceo-jordan-earnings/802868/", date: "2025-10-15" },
    { id: "bankingdive-raleigh-2026", title: "First Horizon calls out Raleigh as a market of interest", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/first-horizon-cfo-dmuchowski-southeast-bank-mergers-acquisitions/809873/", date: "2026-01-16" },
    { id: "bankingdive-charlotte-2025", title: "First Horizon doubles down on Charlotte hiring", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/first-horizon-charlotte-hiring-office-consumer-banking-mcdougall/758743/", date: "2025-08-27" },
    { id: "bloomberg-tokenized-2026", title: "US Banks Build Tokenized Deposit Network to Guard Their Turf", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-02-18/us-banks-build-tokenized-deposit-network-to-guard-their-turf", date: "2026-02-18" }
  ],
  lastUpdated: "2026-09-10"
};

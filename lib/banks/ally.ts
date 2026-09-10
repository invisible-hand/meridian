import type { Bank } from "@/lib/banks";

export const ALLY: Bank = {
  slug: "ally",
  name: "Ally Financial",
  shortName: "Ally",
  ticker: "ALLY",
  hq: "Detroit, MI",
  fedRank: 23,
  leadBank: "Ally Bank",
  assetsUsdMillions: 185664,
  charter: "Utah state member bank (Federal Reserve)",
  posture: "The all-digital bank built its own gen-AI platform in 2023, put it in every employee's hands in 2025, and now uses AI 'personas' to test experiences before humans do.",
  platform: {
    name: "Ally.ai and the Personas",
    detail: "Ally.ai, launched in September 2023, is a proprietary cloud platform that sits between employees and commercial large language models: system prompts make it 'behave like Ally', retrieval-augmented generation supplies context, and the platform inspects inputs and outputs to strip personal data before anything leaves the bank. It reached all 10,000-plus employees on 23 July 2025 after 18 months with 2,200 testers. Its best-known product is Personas: six AI agent personas built with LangChain from decades of customer research, launched in Q4 2025 to give product and marketing teams instant, simulated customer feedback, and an American Banker Innovation of the Year in 2026.",
    sources: ["ally-rollout-2025", "ab-data-safe-2025", "ab-personas-2026"]
  },
  answerFirst:
    "Ally is the largest all-digital bank in the United States and one of the earliest builders of its own generative-AI platform. Ally.ai launched in September 2023 as a cloud layer between employees and external large language models, with system prompts, retrieval-augmented generation and personal-data scrubbing built in; call summarisation for customer-care agents was its first production use, covering about five million calls. On 23 July 2025 the platform opened to all 10,000-plus employees, each of whom had to complete risk-and-controls training first; more than half logged in within 48 hours and, two months later, about 400,000 prompts had been submitted with adoption around 50%. The bank's showcase is Personas, six AI agent personas built with LangChain and launched in Q4 2025 to simulate customer reactions to content and experiences, which won an American Banker Innovation of the Year award in 2026; early tests showed three times the usual engagement. Governance is layered (working group, steering council, enterprise committee, board) and Ally was the first US bank to join the Responsible AI Institute. Agentic AI is still experimental. Two other threads matter: the chief marketing officer now treats the brand as 'machine-readable' after Ally was the most-mentioned bank in unbranded AI-assistant queries every month from January 2025 to July 2026, and the technology leadership changed in July 2026 when Mark Mathewson, a Capital One divisional CIO, became chief information and data officer while long-time CIDO Sathish Muthukrishnan moved to a senior-adviser role.",
  keyPoints: [
    "Ally.ai: proprietary gen-AI platform launched September 2023, enterprise-wide since 23 July 2025; system prompts, RAG and PII scrubbing between employees and external LLMs; call summarisation for about 5 million customer calls was the first production use.",
    "Adoption: 2,200 employees over the first 18 months and about 250,000 prompts; after the full rollout, 50% of staff logged in within 48 hours and roughly 400,000 prompts by September 2025 at about 50% adoption.",
    "Personas: six LangChain-built AI agent personas (Alex, Charlie, Jessie, Jordan, Logan, Sam) launched Q4 2025 after 16 months of work, three times the usual digital engagement in early tests, patent pending, extended to employee personas for HR — Innovation of the Year 2026.",
    "Governance in layers: AI working group, AI governance steering council, enterprise committee, board; mandatory risk training before access; the first US bank member of the Responsible AI Institute. Agentic AI is 'still in an experimental stage'.",
    "AI search as a marketing channel: the CMO reorganised around an 'AI-first mindset' after Scrunch data showed Ally as the most-mentioned bank in unbranded AI-assistant queries every month from January 2025 to July 2026.",
    "Leadership and shape: Mark Mathewson (ex-Capital One) became CIDO on 20 July 2026; Sathish Muthukrishnan is senior adviser; the company sold its credit-card book, exited mortgage origination and trimmed headcount twice in 2025 to focus on auto, deposits and corporate finance. $197 billion in assets, 9.5 million customers."
  ],
  leadership: [
    { name: "Michael Rhodes", role: "Chief Executive Officer", sources: ["ally-mathewson-2026", "reuters-cardworks-2025"], linkedin: "https://www.linkedin.com/in/michael-g-rhodes/" },
    { name: "Mark Mathewson", role: "Chief Information and Data Officer (from 20 July 2026, ex-Capital One)", sources: ["ally-mathewson-2026"], linkedin: "https://www.linkedin.com/in/mark-mathewson/" },
    { name: "Sathish Muthukrishnan", role: "Former Chief Information, Data and Digital Officer (left Ally in 2026; now at UnitedHealth Group per his LinkedIn)", sources: ["ab-personas-2026", "ab-muthukrishnan-2026"], linkedin: "https://www.linkedin.com/in/sathishmuthukrishnan/" },
    { name: "Arvy Rajasekaran", role: "Former divisional CIO, Architecture and Corporate Technology (left Ally in mid-2026); led the Personas project", sources: ["ab-personas-2026"], linkedin: "https://www.linkedin.com/in/aarvy/" },
    { name: "Andrea Brimmer", role: "Chief Marketing Officer; owns UX, communications and the AI-search strategy", sources: ["fortune-brimmer-2026"], linkedin: "https://www.linkedin.com/in/andrea-brimmer-a4345a68/" },
    { name: "Stephanie Richard", role: "Chief Risk Officer (from November 2024)", sources: ["ab-richard-2026"], linkedin: "https://www.linkedin.com/in/richardstephanienicole/" }
  ],
  timeline: [
    { date: "2023-09-19", title: "Ally.ai launches", detail: "A proprietary, cloud-based platform with traditional and generative AI, foundational models and data-security protections.", sources: ["ally-launch-2023"] },
    { date: "2023-11-16", title: "Marketing test: 34% average time saved", detail: "A month-long experiment with Ally.ai's LLM chat cut campaign production time by up to two to three weeks.", sources: ["ally-marketing-2023"] },
    { date: "2025-01-22", title: "Credit-card business sold to CardWorks", detail: "$2.3 billion of receivables; part of a simplification that also ended mortgage origination.", sources: ["reuters-cardworks-2025"] },
    { date: "2025-07-23", title: "Ally.ai opens to all 10,000-plus employees", detail: "After 18 months and 2,200 testers; mandatory risk training first; call summarisation already covers about 5 million calls.", sources: ["ally-rollout-2025", "bankingdive-rollout-2025"] },
    { date: "2025-07-31", title: "How the data stays safe", detail: "System prompts, RAG and PII inspection on inputs and outputs; 6,500 employees and 15,000 prompts in the first three days.", sources: ["ab-data-safe-2025"] },
    { date: "2025-09-17", title: "400,000 prompts, 50% adoption; agents still experimental", detail: "The CIO on an executive-committee AI day, four layers of governance, and agentic experiments for alert handling and password resets.", sources: ["bankingdive-cio-2025"] },
    { date: "2025-11-06", title: "Second 2% headcount cut of the year", detail: "To align the organisation with a 'more focused, simplified business model'.", sources: ["bankingdive-headcount-2025"] },
    { date: "2025-12-31", title: "Personas launch", detail: "Six AI agent personas built with LangChain after 16 months of development by Ally Tech Labs.", sources: ["ab-personas-2026"] },
    { date: "2026-01-27", title: "Former acting Comptroller joins as policy adviser", detail: "Rodney Hood becomes senior policy adviser to the CEO.", sources: ["bankingdive-hood-2026"] },
    { date: "2026-06-01", title: "Innovation of the Year for Personas", detail: "American Banker honours Ally with LangChain; Muthukrishnan's title changes to senior adviser.", sources: ["ab-personas-2026", "ab-innovation-2026"] },
    { date: "2026-07-13", title: "Mark Mathewson named CIDO", detail: "Capital One's divisional CIO for retail and commercial banking takes over technology and data from 20 July.", sources: ["ally-mathewson-2026"] },
    { date: "2026-08-06", title: "The 'machine-readable brand'", detail: "The CMO reorganises marketing around AI search after Ally tops unbranded AI-assistant mentions for 19 straight months.", sources: ["fortune-brimmer-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Ally.ai employee assistant", detail: "Drafting, summarising, data analysis and brainstorming for all employees, on external LLMs behind a proprietary control layer.", status: "In production", sources: ["ally-rollout-2025"] },
    { useCase: "customer-chatbots", name: "Call summarisation for customer care", detail: "Gen-AI summaries of customer calls; about 5 million calls supported.", status: "In production", sources: ["ally-rollout-2025", "ab-data-safe-2025"] },
    { useCase: "generative-agentic-ai", name: "Personas (synthetic customer feedback)", detail: "Six agent personas test content and experiences before live user testing; extended to employee personas for HR.", status: "In production", sources: ["ab-personas-2026"] },
    { useCase: "generative-agentic-ai", name: "Agentic operations (alerts, password resets)", detail: "Experiments only; 'nothing that is in production or at scale yet', per the CIO in September 2025.", status: "Pilot", sources: ["bankingdive-cio-2025"] },
    { useCase: "governance-general", name: "Four-layer AI governance", detail: "Working group, steering council, enterprise committee and board; mandatory training; Responsible AI Institute membership.", status: "In production", sources: ["bankingdive-cio-2025", "ally-rollout-2025"] }
  ],
  numbers: [
    { label: "Employees with Ally.ai access", value: "10,000+", asOf: "2025-07-23", sources: ["ally-rollout-2025"] },
    { label: "Prompts submitted / adoption", value: "≈ 400,000 / ≈ 50%", asOf: "2025-09-17", sources: ["bankingdive-cio-2025"] },
    { label: "Customer calls supported by call summarisation", value: "≈ 5 million", asOf: "2025-07-23", sources: ["ally-rollout-2025"] },
    { label: "Personas engagement lift in early tests", value: "3× usual digital engagement, across 25 scenarios", asOf: "2026-06-01", sources: ["ab-personas-2026"] },
    { label: "Total assets / customers", value: "$197 billion / 9.5 million", asOf: "2026-03-31", sources: ["ally-mathewson-2026"] }
  ],
  quotes: [
    { who: "Sathish Muthukrishnan", role: "Chief Information, Data and Digital Officer", date: "2025-09-17", quote: "We focus on doing simple things savagely well. Things that are simple – having risk controls, having data protection, having access controls – can be cast aside because you see the shinier object.", sources: ["bankingdive-cio-2025"] },
    { who: "Arvy Rajasekaran", role: "CIO, Architecture and Corporate Technology", date: "2026-06-01", quote: "AI helps us get further, faster, but humans are always the final approval before anything is published or launched.", sources: ["ab-personas-2026"] },
    { who: "Andrea Brimmer", role: "Chief Marketing Officer", date: "2026-08-06", quote: "If somebody has a horrible customer experience, that's going to hurt us in the LLMs. If we repossess somebody's car the wrong way, that's going to hurt us in the LLMs.", sources: ["fortune-brimmer-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "Ally Bank is a Utah state member bank and Ally Financial a financial holding company; LangChain and the external LLM providers behind Ally.ai are third-party relationships.", docSlugs: ["fed-sr-23-4", "fed-sr-26-2"] },
    { authority: "cfpb", why: "An all-digital consumer bank and auto lender: AI in customer care and any AI-shaped marketing sit under UDAAP and the chatbot guidance.", docSlugs: ["cfpb-chatbots-in-consumer-finance-2023", "cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "sec", why: "Ally Invest is a broker-dealer and adviser; AI-driven engagement is within the SEC's examination priorities.", docSlugs: ["sec-exam-priorities-fy2026"] },
    { authority: "nist", why: "The bank cites its Responsible AI Institute membership and layered governance; the NIST AI RMF is the reference frame.", docSlugs: ["nist-ai-100-1", "nist-ai-600-1"] }
  ],
  suggestions: [
    { title: "A control layer between people and models is the durable asset", detail: "Ally.ai's value is less the chat window than the system prompts, RAG and PII scrubbing that let the bank swap LLM vendors. That is what makes 10,000 users examinable." },
    { title: "Personas answer a question regulators will ask", detail: "Synthetic customers give evidence of testing before launch. The counterpart is documenting where synthetic feedback diverged from real users, which the bank has not yet published." },
    { title: "Agentic caution is deliberate, not lagging", detail: "With 50% adoption of an assistant in place, keeping agents experimental while governance layers mature is a defensible sequence; the alert-handling use case is where it will first go live." },
    { title: "Being the most-recommended bank in AI search is a new kind of exposure", detail: "Marketing now optimises how LLMs describe the bank. Accuracy of what those models say about products and fees is a consumer-protection question no rulebook yet covers." }
  ],
  faq: [
    { q: "What is Ally.ai?", a: "Ally.ai is Ally Financial's proprietary generative-AI platform, launched in September 2023 and opened to all 10,000-plus employees on 23 July 2025. It sits between employees and commercial large language models, adds Ally-specific system prompts and retrieval-augmented context, and strips personal data from inputs and outputs. Its first production use was summarising customer-care calls." },
    { q: "What are Ally's AI personas?", a: "Six AI agent personas (Alex, Charlie, Jessie, Jordan, Logan and Sam) built with LangChain from Ally's customer research, launched in the fourth quarter of 2025. Teams use them to test content and experiences instantly before live user testing; early tests showed three times the usual engagement. The project won an American Banker Innovation of the Year award in 2026." }
  ],
  sources: [
    { id: "ally-launch-2023", title: "Ally launches proprietary, enterprise AI platform", publisher: "Ally Financial", url: "https://media.ally.com/2023-09-19-Ally-launches-proprietary,-enterprise-AI-platform", date: "2023-09-19" },
    { id: "ally-marketing-2023", title: "'Do It Right' with AI: Ally creators experiment with generative AI in marketing test case", publisher: "Ally Financial", url: "https://media.ally.com/2023-11-16-Do-It-Right-with-AI-Ally-creators-experiment-with-generative-AI-in-marketing-test-case", date: "2023-11-16" },
    { id: "ally-rollout-2025", title: "Ally Financial rolls out proprietary AI platform enterprise-wide", publisher: "Ally Financial", url: "https://media.ally.com/2025-07-23-Ally-Financial-rolls-out-proprietary-AI-platform-enterprise-wide", date: "2025-07-23" },
    { id: "ally-mathewson-2026", title: "Ally Financial Names Mark Mathewson Chief Information and Data Officer", publisher: "Ally Financial", url: "https://media.ally.com/2026-07-13-Ally-Financial-Names-Mark-Mathewson-Chief-Information-and-Data-Officer", date: "2026-07-13" },
    { id: "ab-personas-2026", title: "Ally developed AI personas to mirror customer behavior", publisher: "American Banker", url: "https://americanbanker.com/news/allys-personas-is-on-of-the-innovation-of-the-year-honorees", date: "2026-06-01" },
    { id: "ab-innovation-2026", title: "Innovation of The Year 2026", publisher: "American Banker", url: "https://americanbanker.com/list/innovation-of-the-year-2026", date: "2026-06-01" },
    { id: "ab-data-safe-2025", title: "How Sathish Muthukrishnan keeps Ally's data safe from gen AI", publisher: "American Banker", url: "https://americanbanker.com/news/how-sathish-muthukrishnan-keeps-allys-data-safe-from-gen-ai", date: "2025-07-31" },
    { id: "ab-muthukrishnan-2026", title: "#21 Ally's Sathish Muthukrishnan has a clear digital vision", publisher: "American Banker", url: "https://americanbanker.com/news/allys-sathish-muthukrishnan-is-21-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "ab-richard-2026", title: "Stephanie Richard, Chief Risk Officer, Ally (The Most Powerful Women in Banking)", publisher: "American Banker", url: "https://the-most-powerful-women-in-banking.americanbanker.com/profile/stephanie-richard", date: "2026-06-29" },
    { id: "bankingdive-rollout-2025", title: "Ally makes AI platform available companywide", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/ally-ai-platform-banking-cio-muthukrishnan/753788/", date: "2025-07-23" },
    { id: "bankingdive-cio-2025", title: "Ally CIO: Pace of tech change 'weighs on me'", publisher: "Banking Dive", url: "https://bankingdive.com/news/ally-cio-muthukrishnan-banking-agentic-ai-tech/760279", date: "2025-09-17" },
    { id: "bankingdive-headcount-2025", title: "Ally trims headcount by another 2%", publisher: "Banking Dive", url: "https://bankingdive.com/news/ally-2-percent-workforce-cut-manager-wells-headcount-scharf-dimon-bofa-ai/804850", date: "2025-11-06" },
    { id: "bankingdive-hood-2026", title: "Ally taps former acting OCC chief as policy adviser", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/ally-financial-hood-occ-policy-adviser-rhodes/810622/", date: "2026-01-27" },
    { id: "reuters-cardworks-2025", title: "Consumer lender Ally Financial to sell credit card business to CardWorks", publisher: "Reuters", url: "https://reuters.com/markets/deals/consumer-lender-ally-financial-sell-credit-card-business-cardworks-2025-01-22", date: "2025-01-22" },
    { id: "fortune-brimmer-2026", title: "The machine-readable brand: Inside Ally Financial's strategy to win AI search recommendations", publisher: "Fortune", url: "https://fortune.com/article/the-machine-readable-brand-inside-ally-financials-strategy-to-win-ai-search-recommendations", date: "2026-08-06" }
  ],
  lastUpdated: "2026-09-10"
};

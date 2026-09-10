import type { Bank } from "@/lib/banks";

export const FLAGSTAR: Bank = {
  slug: "flagstar",
  name: "Flagstar Bank",
  shortName: "Flagstar",
  ticker: "FLG",
  hq: "Hicksville, NY",
  fedRank: 33,
  leadBank: "Flagstar Bank, N.A.",
  assetsUsdMillions: 87129,
  charter: "National bank (OCC); holding company dissolved in October 2025",
  posture: "Two years after nearly failing, the former New York Community Bank has trademarked its technology platform and patented a multi-model AI orchestration system — and wants the option to sell both.",
  platform: {
    name: "Flagstar S2 Platform and StarIQ",
    detail: "S2 ('Simple and Sophisticated') is the enterprise platform that replaced three legacy environments (Flagstar, New York Community Bank and Signature Bank), six data centres and separate stacks with one foundation; the bank applied to trademark it in June 2026. StarIQ, deployed in early 2026 as a component of S2, is a patent-pending enterprise generative-AI orchestration system: multiple foundation models (Anthropic Claude, Meta Llama, Mistral, Amazon Titan) on Amazon Web Services under consumption-based pricing, an AI-aware security layer using Palo Alto Networks Prisma AI firewalls for prompt-injection and sensitive-data detection, a retrieval-augmented generation pipeline with citation tracking and access-controlled knowledge bases, and a governance workflow that takes each use case from business case through compliance review and multi-level approvals in one auditable system.",
    sources: ["flagstar-ip-2026", "bankingdive-cio-2026", "ab-datacenters-2026"]
  },
  answerFirst:
    "Flagstar Bank, the former New York Community Bancorp, has turned a survival story into one of the most specific enterprise-AI disclosures among US regionals. After a near-collapse in early 2024, a $1.05 billion capital injection led by Joseph Otting and Steven Mnuchin, eight straight quarterly losses and $600 million of cost cuts, the bank returned to profit in the fourth quarter of 2025. In parallel, chief information and operations officer Chris Higgins, hired in late 2024, consolidated three acquired technology stacks and six data centres in about a year, a job he says would normally take two to three. The result is the Flagstar S2 Platform, launched in June 2026 and now the subject of a trademark application, and StarIQ, a patent-pending generative-AI orchestration system deployed in early 2026 that runs Claude, Llama, Mistral and Amazon Titan on AWS, screens prompts through Palo Alto Networks AI firewalls, answers document and policy questions through a RAG pipeline with citations, and routes every use case through an auditable approval chain. Higgins says protecting the intellectual property is about 'optionality', declining to rule out licensing the platform to smaller banks. The next phase is a two-migration move to Fiserv's cloud-native Finxact core in summer 2027 and 2028, chosen from twelve candidates, with $40–45 million of annual savings expected from core consolidation, and five senior technology hires from JPMorgan, U.S. Bank, MUFG and Mastercard under CTO Jason Pope to build a real-time 'Customer 360' and AI-driven proactive insights for private-banking clients. Otting's tenure was extended in May 2026 with a succession race under way.",
  keyPoints: [
    "StarIQ (early 2026): patent-pending multi-model gen-AI orchestration — Claude, Llama, Mistral and Titan on AWS, Palo Alto Prisma AI firewalls, a cited RAG pipeline and a single auditable governance workflow from business case to approval.",
    "S2 Platform (June 2026): three legacy banks, six data centres and disparate stacks consolidated into one foundation in about a year; trademark applied for; the CIOO wants 'optionality' including possible licensing.",
    "Core next: Fiserv's Finxact chosen from 12 candidates (August 2026) for migrations in summer 2027 and 2028; $40–45 million of annual savings from core consolidation.",
    "People: five senior technology leaders hired in March 2026 from JPMorgan, U.S. Bank, MUFG and Mastercard under CTO Jason Pope; the architecture targets a real-time Customer 360 and AI-driven proactive insights.",
    "Context: a near-failure in 2024, $1.05 billion of new capital, $600 million of cost cuts, 60 branch closures and a return to profit in Q4 2025; the holding company was dissolved in October 2025.",
    "Governance: StarIQ was 'built specifically for regulated financial services environments'; a former Comptroller of the Currency runs the bank."
  ],
  leadership: [
    { name: "Joseph Otting", role: "Chairman, President and CEO (from April 2024; former Comptroller of the Currency)", sources: ["ab-profit-2026", "bankingdive-succession-2026"], linkedin: "https://www.linkedin.com/in/joseph-otting-911b3b5/" },
    { name: "Chris Higgins", role: "EVP, Chief Information and Operations Officer (from late 2024)", sources: ["bankingdive-cio-2026", "ab-datacenters-2026"], linkedin: "https://www.linkedin.com/in/chiggins2/" },
    { name: "Jason Pope", role: "EVP, Chief Technology Officer", sources: ["flagstar-techteam-2026", "flagstar-ip-2026"], linkedin: "https://www.linkedin.com/in/pope-jason/" },
    { name: "Lee Smith", role: "Chief Financial Officer", sources: ["ab-profit-2026", "bankingdive-core-2026"], linkedin: "https://www.linkedin.com/in/leemsmith10/" }
  ],
  timeline: [
    { date: "2025-01-30", title: "Sixty branches to close as $600 million of costs come out", detail: "The turnaround plan's cost leg; profitability expected in 2025.", sources: ["bankingdive-branches-2025", "reuters-profitable-2025"] },
    { date: "2025-04-24", title: "Back from near-collapse", detail: "Bloomberg on Otting's path to profitability.", sources: ["bloomberg-collapse-2025"] },
    { date: "2025-07-28", title: "Plan to dissolve the holding company", detail: "About $15 million of savings; completed in October 2025.", sources: ["bankingdive-holdco-2025", "flagstar-ip-2026"] },
    { date: "2026-01-30", title: "First profit after eight quarterly losses", detail: "Fourth-quarter 2025 results; the CFO says the bank is 'pivoting to the growth side of the story'.", sources: ["ab-profit-2026", "bankingdive-profit-2026"] },
    { date: "2026-03-16", title: "Five senior technology leaders hired", detail: "From JPMorgan, U.S. Bank, MUFG and Mastercard, to accelerate the S2 transformation around the customer journey.", sources: ["flagstar-techteam-2026"] },
    { date: "2026-03-30", title: "First phase of infrastructure modernisation complete", detail: "With Mphasis: a next-generation data centre and cloud platform.", sources: ["ft-mphasis-2026"] },
    { date: "2026-05-20", title: "Otting's tenure extended; succession race set up", detail: "Co-presidents named as candidates.", sources: ["bankingdive-succession-2026"] },
    { date: "2026-06-15", title: "S2 trademark filed; StarIQ patent application", detail: "The bank establishes proprietary rights over its platform and its gen-AI orchestration system.", sources: ["flagstar-ip-2026", "ft-ip-2026"] },
    { date: "2026-06-22", title: "'Optionality' — including possible licensing", detail: "The CIOO on why the IP matters and what it could become.", sources: ["bankingdive-cio-2026"] },
    { date: "2026-06-30", title: "Six data centres consolidated in a year", detail: "How three acquired stacks became one; S2 officially launched in June.", sources: ["ab-datacenters-2026"] },
    { date: "2026-07-24", title: "Turnaround shows progress, with bumps", detail: "Second-quarter results: a mixed quarter as CRE payoffs run high.", sources: ["ab-bumps-2026"] },
    { date: "2026-08-17", title: "Fiserv's Finxact chosen as the single core", detail: "Two migrations, summer 2027 and 2028; $40–45 million of annual savings expected.", sources: ["bankingdive-core-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "StarIQ multi-model orchestration", detail: "Claude, Llama, Mistral and Titan behind one governed platform with consumption-based deployment.", status: "In production", sources: ["flagstar-ip-2026"] },
    { useCase: "cybersecurity", name: "AI-aware security layer", detail: "Palo Alto Networks Prisma AI firewalls detect sensitive data, prompt injection and policy violations in real time.", status: "In production", sources: ["flagstar-ip-2026"] },
    { useCase: "governance-general", name: "Integrated AI governance workflow", detail: "Business case, compliance review and multi-level approvals in one auditable system.", status: "In production", sources: ["flagstar-ip-2026"] },
    { useCase: "generative-agentic-ai", name: "RAG over documents and policies", detail: "Secure queries with citation tracking and access-controlled knowledge bases.", status: "In production", sources: ["flagstar-ip-2026"] },
    { useCase: "customer-chatbots", name: "Customer 360 and proactive private-banking insights", detail: "The S2 architecture's stated customer-facing goal.", status: "Announced", sources: ["flagstar-techteam-2026"] }
  ],
  numbers: [
    { label: "Data centres consolidated", value: "6 → fewer, in about one year", asOf: "2026-06-30", sources: ["ab-datacenters-2026"] },
    { label: "Foundation models orchestrated by StarIQ", value: "4 (Claude, Llama, Mistral, Titan)", asOf: "2026-06-15", sources: ["flagstar-ip-2026"] },
    { label: "Expected annual savings from core consolidation", value: "$40–45 million", asOf: "2026-08-21", sources: ["bankingdive-core-2026"] },
    { label: "Cost reduction target in the turnaround", value: "$600 million", asOf: "2025-01-30", sources: ["bankingdive-branches-2025"] },
    { label: "Total assets", value: "$87.1 billion", asOf: "2026-03-31", sources: ["flagstar-ip-2026"] }
  ],
  quotes: [
    { who: "Chris Higgins", role: "Chief Information and Operations Officer", date: "2026-06-15", quote: "Protecting the intellectual property behind our transformation is about more than legal defensibility — it signals to the market, our regulators, and our customers that Flagstar is building a modern institution with unique capabilities.", sources: ["flagstar-ip-2026"] },
    { who: "Chris Higgins", role: "Chief Information and Operations Officer", date: "2026-06-30", quote: "In other situations this would have taken two to three years, but in this case we finished it in a year.", sources: ["ab-datacenters-2026"] },
    { who: "Jason Pope", role: "Chief Technology Officer", date: "2026-06-15", quote: "The pending StarIQ patent signals that the innovation happening inside this institution is differentiated, defensible, and designed to create a lasting competitive advantage.", sources: ["flagstar-ip-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "Flagstar is a national bank run by a former Comptroller; StarIQ's governance workflow maps directly onto the OCC's model-risk bulletin and its gen-AI risk perspective.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "federal-reserve", why: "AWS, Anthropic, Meta, Mistral, Palo Alto Networks, Mphasis and Fiserv are third-party relationships under interagency guidance.", docSlugs: ["fed-sr-23-4", "fed-sr-26-2"] },
    { authority: "ny-dfs", why: "A New York bank with private-banking clients: the DFS cyber rule and its frontier-model letter apply to an AI firewall architecture.", docSlugs: ["ny-dfs-23-nycrr-part-500", "ny-dfs-industry-letter-2026-05-21-frontier-ai-models"] },
    { authority: "nist", why: "Prompt-injection and sensitive-data detection controls correspond to the NIST gen-AI profile and its agent-security work.", docSlugs: ["nist-ai-600-1", "nist-caisi-rfi-ai-agent-security-2026"] }
  ],
  suggestions: [
    { title: "The most examinable AI architecture in the peer group", detail: "A single approval chain, a cited RAG layer and an AI firewall are what supervisors ask for; Flagstar has written them down and filed a patent. That is a disclosure other regionals will be measured against." },
    { title: "Licensing would change the bank's regulatory shape", detail: "Selling S2 or StarIQ to other banks makes Flagstar a technology service provider subject to a different examination programme; 'optionality' has a supervisory price." },
    { title: "Two core migrations and an AI platform share one team", detail: "Finxact migrations in 2027 and 2028 will absorb the same engineers now building Customer 360; sequencing is the execution risk." },
    { title: "AI built during a turnaround carries the turnaround's discipline", detail: "Every use case passes a business-case gate because the bank was cutting $600 million; keeping that gate after profitability returns is the governance test." }
  ],
  faq: [
    { q: "What is StarIQ?", a: "Flagstar Bank's proprietary, patent-pending enterprise generative-AI orchestration system, deployed in early 2026 as part of its S2 platform. It runs multiple foundation models (Anthropic Claude, Meta Llama, Mistral and Amazon Titan) on AWS under consumption-based pricing, screens prompts through Palo Alto Networks AI firewalls, answers document and policy questions through a retrieval-augmented pipeline with citations, and routes each use case through an auditable governance workflow." },
    { q: "Might Flagstar sell its technology to other banks?", a: "It has not said so, but its chief information and operations officer, Chris Higgins, declined to rule it out in June 2026, saying his job is 'to create optionality'. The bank has applied to trademark the S2 platform and filed a provisional patent for StarIQ." }
  ],
  sources: [
    { id: "flagstar-ip-2026", title: "Flagstar Bank Announces Proprietary Technology Transformation", publisher: "Flagstar Bank", url: "https://ir.flagstar.com/news-and-events/news-releases/press-release-details/2026/FLAGSTAR-BANK-ANNOUNCES-PROPRIETARY-TECHNOLOGY-TRANSFORMATION/default.aspx", date: "2026-06-15" },
    { id: "flagstar-techteam-2026", title: "Flagstar Bank, N.A. Expands Technology Leadership Team Accelerating the Bank's Technology Architecture", publisher: "Flagstar Bank", url: "https://ir.flagstar.com/news-and-events/news-releases/press-release-details/2026/FLAGSTAR-BANK-N-A--EXPANDS-TECHNOLOGY-LEADERSHIP-TEAM-ACCELERATING-THE-BANKS-TECHNOLOGY-ARCHITECTURE/default.aspx", date: "2026-03-16" },
    { id: "bankingdive-cio-2026", title: "Flagstar CIO: Proprietary tech creates 'optionality'", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/flagstar-cio-chris-higgins-s2-stariq-proprietary-tech-platform-ai/823404/", date: "2026-06-22" },
    { id: "bankingdive-core-2026", title: "Flagstar picks cloud-native core to replace legacy patchwork", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/flagstar-bank-fiserv-finxact-cloud-native-core-tech-modernization/828477/", date: "2026-08-21" },
    { id: "bankingdive-profit-2026", title: "Flagstar returns to profitability", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/flagstar-profitability-cre-lending-layoffs/811122/", date: "2026-02-02" },
    { id: "bankingdive-succession-2026", title: "Flagstar extends CEO Otting's tenure but sets up succession race", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/flagstar-otting-extend-compensation-succession-raffetto-smith-co-president-nguyen-sullivan-menefee/820741/", date: "2026-05-20" },
    { id: "bankingdive-holdco-2025", title: "Flagstar wants to dissolve its holding company", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/flagstar-dissolve-holding-company-otting-15-million-savings-fed-occ-charter/754213/", date: "2025-07-28" },
    { id: "bankingdive-branches-2025", title: "Flagstar to close roughly 60 retail branches this year", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/flagstar-close-60-branches-cre-real-estate-20-private-client-locations/738778/", date: "2025-01-30" },
    { id: "ab-datacenters-2026", title: "How Flagstar Bank integrated its acquired data centers", publisher: "American Banker", url: "https://www.americanbanker.com/news/how-flagstar-bank-integrated-its-acquired-data-centers", date: "2026-06-30" },
    { id: "ab-profit-2026", title: "Flagstar is back in the black after eight quarters of losses", publisher: "American Banker", url: "https://americanbanker.com/news/flagstar-is-back-in-the-black-after-eight-quarters-of-losses", date: "2026-01-30" },
    { id: "ab-bumps-2026", title: "Flagstar's turnaround shows progress, but also hits bumps", publisher: "American Banker", url: "https://www.americanbanker.com/news/flagstars-turnaround-shows-progress-but-also-hits-bumps", date: "2026-07-24" },
    { id: "reuters-profitable-2025", title: "Flagstar expects to turn profitable in 2025 as recovery push takes root", publisher: "Reuters", url: "https://www.reuters.com/business/finance/flagstar-posts-smaller-loss-loan-loss-provisions-shrink-2025-01-30/", date: "2025-01-30" },
    { id: "bloomberg-collapse-2025", title: "Back From Near-Collapse, Flagstar Charts Path to Profitability", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2025-04-24/back-from-near-collapse-flagstar-charts-path-to-profitability", date: "2025-04-24" },
    { id: "ft-ip-2026", title: "Flagstar Bank Announces Proprietary Technology Transformation (wire)", publisher: "PR Newswire via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202606150830PR_NEWS_USPRX____NY82888-1", date: "2026-06-15" },
    { id: "ft-mphasis-2026", title: "Mphasis and Flagstar Bank Mark Major Milestone by Completing First Phase of Modernizing the Bank's Technology Infrastructure", publisher: "PR Newswire via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202603301417PR_NEWS_USPRX____NY22478-1", date: "2026-03-30" }
  ],
  lastUpdated: "2026-09-10"
};

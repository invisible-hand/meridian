import type { Bank } from "@/lib/banks";

export const NORTHERN_TRUST: Bank = {
  slug: "northern-trust",
  name: "Northern Trust",
  shortName: "Northern Trust",
  ticker: "NTRS",
  hq: "Chicago, IL",
  fedRank: 24,
  leadBank: "The Northern Trust Company",
  assetsUsdMillions: 173843,
  charter: "Illinois state member bank (Federal Reserve)",
  posture: "A custody-and-wealth bank that talks about AI as data plumbing for an 'agentic future' — and whose family-office clients now arrive having asked ChatGPT first.",
  platform: {
    name: "Open Semantic Interchange and the data foundation",
    detail: "Northern Trust's most concrete public AI move is architectural. In June 2026 it became a founding member of the Financial Services Working Group of Open Semantic Interchange (OSI), the Snowflake-led open-source effort to give firms shared data definitions so that, in the words of its chief information architect, AI can 'reason across data in ways that are accurate, auditable and reproducible'. The bank's earnings materials describe a productivity engine with 'scaled AI governance and capabilities' creating investment capacity, and its asset manager publishes research on using natural-language processing and large language models to extract alpha from text.",
    sources: ["nt-osi-2026", "nt-q4-2025-deck", "ntam-nlp-2026"]
  },
  answerFirst:
    "Northern Trust discloses less about AI than most banks its size, and what it does say is about foundations rather than products. The clearest public statement is the June 2026 announcement that it is a founding member of the Financial Services Working Group of Open Semantic Interchange, an open-source, Snowflake-led standard for shared data definitions; its chief information architect framed the work as 'laying the foundations for the Agentic future' and its chief data and analytics officer as keeping client data 'ready to support AI-driven insights'. Its fourth-quarter 2025 investor deck lists 'scaled AI governance and capabilities' among the year's results under a productivity pillar meant to fund investment. On the investment side, Northern Trust Asset Management publishes research on natural-language processing and large language models as alpha sources, with an explicit warning that durable text-based alpha is harder than it looks. The most striking disclosure comes from the client side: the head of family office solutions told CNBC in July 2026 that clients began using AI to double-check the firm's advice about 18 months earlier, that roughly half of prospects, including those with as little as $100 million, now send formal requests for proposals, and that some draft their questions with ChatGPT. Around this, the bank has a 2017-vintage digital-asset platform (Matrix Zenith), launched a tokenised money-market share class in March 2026, and spent mid-2025 rebuffing a merger approach from BNY. Asset servicing at this scale ($18 trillion under custody and administration) is where AI will land first, but the bank has not put numbers on it.",
  keyPoints: [
    "Foundations first: founding member of the Open Semantic Interchange Financial Services Working Group (June 2026) so that AI agents 'ground on the same foundational meanings'; the CIO architect calls it the foundation for 'the Agentic future'.",
    "Governance is a reported result: the Q4 2025 deck lists 'scaled AI governance and capabilities to drive positive operating leverage' under the productivity pillar; the bank has not published agent counts, budgets or headcount effects.",
    "Clients arrive AI-briefed: the head of family office solutions says clients started checking the firm's advice with AI about 18 months before July 2026; about half of prospects now send RFPs, some with ChatGPT-drafted questions.",
    "Investment research, not marketing: Northern Trust Asset Management publishes on NLP and LLM alpha and warns that few managers apply it well.",
    "Digital assets run alongside: Matrix Zenith (since 2017) and a tokenised money-market share class launched March 2026; executives say AI can add fraud detection to tokenisation.",
    "Scale and independence: $18 trillion in assets under custody and administration, $1.6–1.8 trillion under management; the CEO said in July 2025 the bank had never entertained a sale after a BNY approach."
  ],
  leadership: [
    { name: "Michael O'Grady", role: "Chairman and CEO", sources: ["bankingdive-takeover-2025", "ab-ipos-2026"], linkedin: "https://www.linkedin.com/in/michaeljogrady815/" },
    { name: "Tom South", role: "EVP and Chief Information Officer (since September 2018)", sources: ["nt-south-bio", "nt-ms-conference-2026"], linkedin: "https://www.linkedin.com/in/thomassouth/" },
    { name: "Kelley Conway", role: "Chief Data and Analytics Officer", sources: ["nt-osi-2026"], linkedin: "https://www.linkedin.com/in/kelleyconway/" },
    { name: "Jez Davies", role: "Chief Information Architect", sources: ["nt-osi-2026"], linkedin: "https://www.linkedin.com/in/jez-davies/" },
    { name: "Pamela Lucina", role: "Head of Family Office Solutions", sources: ["cnbc-chatbots-2026"], linkedin: "https://www.linkedin.com/in/pamela-lucina-9138a668/" },
    { name: "Justin Chapman", role: "Group Head of Strategic Partnerships, Digital Assets and Financial Markets", sources: ["ab-custody-2026"], linkedin: "https://www.linkedin.com/in/justin-chapman-bbb3239/" }
  ],
  timeline: [
    { date: "2025-03-17", title: "Tokenisation and AI in fraud detection", detail: "A Northern Trust executive on crypto rule changes; the bank's Matrix Zenith platform dates from 2017.", sources: ["bankingdive-tokenization-2025"] },
    { date: "2025-06-22", title: "BNY approaches Northern Trust about a merger", detail: "The bank says it is 'fully committed to remaining independent'.", sources: ["reuters-bny-2025", "wsj-bny-2025"] },
    { date: "2025-07-23", title: "CEO: never entertained a sale", detail: "O'Grady dismisses takeover talk on the second-quarter call.", sources: ["bankingdive-takeover-2025"] },
    { date: "2025-09-23", title: "NLP and LLMs as alpha sources", detail: "Asset-management research on extracting signal from text, with 50–60% of global data estimated to be text.", sources: ["ntam-networked-2025"] },
    { date: "2025-10-22", title: "Custody assets reach $18.25 trillion", detail: "Third-quarter results: AUC/A up 5%, AUM up 9% to $1.77 trillion.", sources: ["reuters-q3-2025"] },
    { date: "2026-01-22", title: "'Scaled AI governance and capabilities'", detail: "Listed among 2025 results in the fourth-quarter investor deck, under the productivity pillar.", sources: ["nt-q4-2025-deck"] },
    { date: "2026-03-02", title: "Tokenised money-market share class", detail: "Northern Trust Asset Management enters digital assets with a tokenised share class of its Treasury Instruments Portfolio.", sources: ["ft-tokenized-2026"] },
    { date: "2026-04-21", title: "First-quarter profit beats on fee income", detail: "Net income of $525.5 million as markets lift assets under custody and management.", sources: ["reuters-q1-2026"] },
    { date: "2026-06-09", title: "Founding member of OSI's financial-services working group", detail: "Shared semantic data standards for 'accurate, auditable and reproducible' AI reasoning, announced at Snowflake Summit.", sources: ["nt-osi-2026"] },
    { date: "2026-06-09", title: "CFO and CIO present to investors together", detail: "Dave Fox and Tom South at the Morgan Stanley US Financials Conference.", sources: ["nt-ms-conference-2026"] },
    { date: "2026-07-30", title: "Clients test advice against AI", detail: "The family-office head on prospects arriving with ChatGPT-drafted questions and RFPs from clients with $100 million.", sources: ["cnbc-chatbots-2026"] }
  ],
  useCases: [
    { useCase: "governance-general", name: "Shared semantic data layer for AI agents (OSI)", detail: "Open-source data definitions so agents across firms ground on the same meanings.", status: "Announced", sources: ["nt-osi-2026"] },
    { useCase: "trading-markets", name: "NLP and LLM signals in asset management", detail: "Research and webinars on text-derived alpha and multi-dimensional momentum.", status: "In production", sources: ["ntam-nlp-2026", "ntam-networked-2025"] },
    { useCase: "generative-agentic-ai", name: "Rules-based account-lifecycle workflows (Saphyre)", detail: "Structured workflows across the account lifecycle for outsourcing clients.", status: "In production", sources: ["nt-saphyre-2026"] },
    { useCase: "fraud", name: "AI in tokenisation security", detail: "Executives point to AI's role in detecting fraudulent behaviour around digital assets.", status: "Announced", sources: ["bankingdive-tokenization-2025"] }
  ],
  numbers: [
    { label: "Assets under custody / administration", value: "$18.25 trillion", asOf: "2025-09-30", sources: ["reuters-q3-2025"] },
    { label: "Assets under management (NTAM)", value: "$1.6 trillion", asOf: "2026-06-30", sources: ["ft-johnston-2026"] },
    { label: "Prospects sending RFPs", value: "≈ half, down from billionaires only", asOf: "2026-07-30", sources: ["cnbc-chatbots-2026"] },
    { label: "First-quarter 2026 net income", value: "$525.5 million", asOf: "2026-04-21", sources: ["reuters-q1-2026"] }
  ],
  quotes: [
    { who: "Jez Davies", role: "Chief Information Architect", date: "2026-06-09", quote: "By co-creating industry standards, we're laying the foundations for the Agentic future, enabling AI to reason across data in ways that are accurate, auditable and reproducible.", sources: ["nt-osi-2026"] },
    { who: "Pamela Lucina", role: "Head of Family Office Solutions", date: "2026-07-30", quote: "We've had clients tell us directly that they're going to ask AI the questions that they're going to ask us. I think what they're often testing us for is not the answer, but having more specifics or evidence that we've actually done these things before.", sources: ["cnbc-chatbots-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "The Northern Trust Company is an Illinois state member bank and the corporation a financial holding company; Snowflake and Saphyre are third-party relationships.", docSlugs: ["fed-sr-23-4", "fed-sr-26-2"] },
    { authority: "sec", why: "Northern Trust Asset Management's NLP and LLM research and any AI-shaped advice fall under the SEC's examination priorities.", docSlugs: ["sec-exam-priorities-fy2026"] },
    { authority: "basel-committee", why: "A global custodian's data-standards work sits on the BCBS 239 aggregation principles and the third-party risk principles.", docSlugs: ["bcbs-239", "bcbs-third-party-risk-principles-2025"] },
    { authority: "fsb", why: "AI in a systemically important custody bank is inside the FSB's sound-practices consultation.", docSlugs: ["fsb-ai-sound-practices-consultation-2026"] }
  ],
  suggestions: [
    { title: "Data standards are the AI strategy here", detail: "For a custodian, the binding constraint on agents is inconsistent definitions across clients and counterparties. Joining OSI as a founder is the bank positioning to set that standard rather than adopt someone else's." },
    { title: "The client is already using AI; the firm's disclosure has not caught up", detail: "When half of prospects arrive with LLM-drafted questions, the evidence trail behind advice becomes the product. Publishing what the bank actually runs would strengthen the case its own clients are now testing." },
    { title: "Thin disclosure is a choice with a cost", detail: "Peers of similar size publish agent counts, budgets and adoption; Northern Trust reports 'scaled AI governance' without figures. Investors and examiners will read the gap either as prudence or as lag." },
    { title: "Tokenisation and AI are being built on the same rails", detail: "A tokenised fund share class, a blockchain platform since 2017 and a semantic data layer point at one operating model; the fraud-detection angle executives mention is where the two meet." }
  ],
  faq: [
    { q: "What is Northern Trust doing with AI?", a: "Publicly, the bank has focused on foundations: it became a founding member of the Open Semantic Interchange financial-services working group in June 2026 to give AI agents shared data definitions, reports 'scaled AI governance and capabilities' in its investor materials, and its asset manager publishes research on natural-language processing and large language models as investment signals. It has not disclosed agent counts, AI budgets or headcount effects." },
    { q: "Are Northern Trust's clients using AI?", a: "Yes, according to its head of family office solutions, who told CNBC in July 2026 that clients began using AI to double-check the firm's advice about 18 months earlier, that around half of prospects now send formal requests for proposals, and that some draft their questions with ChatGPT." }
  ],
  sources: [
    { id: "nt-osi-2026", title: "Northern Trust Collaborates with Industry Peers to Strengthen Data and AI Interoperability", publisher: "Northern Trust", url: "https://www.northerntrust.com/united-states/pr/2026/northern-trust-collaborates-with-industry-peers-to-strengthen-data-and-ai-interoperability", date: "2026-06-09" },
    { id: "nt-q4-2025-deck", title: "Fourth Quarter 2025 Presentation Materials", publisher: "Northern Trust", url: "https://northerntrust.com/content/dam/northerntrust/pws/nt/documents/earnings/2025/4q-2025-km040886-presentation.pdf", date: "2026-01-22" },
    { id: "nt-saphyre-2026", title: "Northern Trust and Saphyre Expand Collaboration to Enhance the Full Account Lifecycle for Investment Operations Outsourcing Clients", publisher: "Northern Trust", url: "https://www.northerntrust.com/united-states/pr/2026/northern-trust-and-saphyre-expand-collaboration-to-enhance-the-full-account-lifecycle-for-investment-operations-outsourcing-clients", date: "2026-04-22" },
    { id: "nt-ms-conference-2026", title: "Northern Trust Leaders to Participate in Morgan Stanley 2026 US Financials Conference on June 9", publisher: "Northern Trust", url: "https://northerntrust.com/united-states/pr/2026/northern-trust-leaders-to-participate-in-morgan-stanley-2026-us-financials-conference-on-june-9", date: "2026-06-02" },
    { id: "nt-south-bio", title: "Thomas A. South, Chief Information Officer", publisher: "Northern Trust", url: "https://northerntrust.com/united-states/insights-research/corporate/experts/south-a-thomas", date: "2026-01-01" },
    { id: "ntam-nlp-2026", title: "How Does Natural Language Processing Work? The Key Questions to Ask", publisher: "Northern Trust Asset Management", url: "https://ntam.northerntrust.com/united-states/all-investor/insights/investment-perspective-and-commentary/2026/how-does-natural-language-processing-work", date: "2026-03-01" },
    { id: "ntam-networked-2025", title: "Uncovering Alpha in the Networked Economy", publisher: "Northern Trust Asset Management", url: "https://ntam.northerntrust.com/content/dam/northerntrust/investment-management/global/en/documents/research/quantitative/uncovering-alpha-networked-economy.pdf", date: "2025-09-23" },
    { id: "cnbc-chatbots-2026", title: "Wealth managers face a new challenger: Their clients' AI chatbots", publisher: "CNBC", url: "https://www.cnbc.com/2026/07/30/wealth-managers-ai-chatbots.html", date: "2026-07-30" },
    { id: "reuters-q3-2025", title: "Northern Trust profit beats estimates on higher fees, interest", publisher: "Reuters", url: "https://reuters.com/business/finance/northern-trust-profit-beats-estimates-higher-fees-interest-2025-10-22", date: "2025-10-22" },
    { id: "reuters-q1-2026", title: "Northern Trust tops profit estimates as robust markets bump fee income; shares rise", publisher: "Reuters", url: "https://www.reuters.com/business/northern-trusts-profit-rises-robust-markets-bump-fee-income-2026-04-21/", date: "2026-04-21" },
    { id: "reuters-bny-2025", title: "Northern Trust commits to independence after WSJ report on potential merger with BNY", publisher: "Reuters", url: "https://www.reuters.com/business/finance/bank-new-york-mellon-approached-northern-trust-discuss-potential-merger-wsj-2025-06-22/", date: "2025-06-23" },
    { id: "wsj-bny-2025", title: "Bank of New York Mellon Approached Northern Trust to Discuss Potential Merger", publisher: "The Wall Street Journal", url: "https://www.wsj.com/finance/banking/bank-of-new-york-mellon-approached-northern-trust-to-discuss-potential-merger-7017f4eb", date: "2025-06-22" },
    { id: "bankingdive-takeover-2025", title: "Northern Trust CEO dismisses reports of takeover talks", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/northern-trust-ceo-dismisses-bny-goldman-sachs-takeover-reports-ogrady-warren-vince/753953/", date: "2025-07-24" },
    { id: "bankingdive-tokenization-2025", title: "Northern Trust exec: Crypto rule changes may ease tokenization", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/northern-trust-crypto-regulation-tokenization-digital-assets-czupek/742715/", date: "2025-03-17" },
    { id: "ab-ipos-2026", title: "Northern Trust joins banks lifted by IPOs, capital markets", publisher: "American Banker", url: "https://www.americanbanker.com/news/northern-trust-joins-banks-lifted-by-ipos-capital-markets", date: "2026-07-22" },
    { id: "ab-custody-2026", title: "The case for banks to offer digital asset custody", publisher: "American Banker", url: "https://americanbanker.com/news/the-case-for-banks-to-offer-digital-asset-custody", date: "2026-03-20" },
    { id: "ft-tokenized-2026", title: "Northern Trust Asset Management Enters Digital Assets Market with Launch of Tokenized Money Market Share Class", publisher: "Business Wire via FT Markets", url: "https://markets-data-api-proxy.ft.com/data/announce/full?dockey=600-202603020900BIZWIRE_USPRX____20260226_BW557099-1", date: "2026-03-02" },
    { id: "ft-johnston-2026", title: "Northern Trust Asset Management Appoints Amy Johnston as Head of Global Institutional Client Group (boilerplate: $1.6 trillion AUM)", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=600-202609011210BIZWIRE_USPRX____20260901_BW352538-1", date: "2026-09-01" }
  ],
  lastUpdated: "2026-09-10"
};

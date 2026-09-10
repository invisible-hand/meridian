import type { Bank } from "@/lib/banks";

export const OLD_NATIONAL: Bank = {
  slug: "old-national",
  name: "Old National Bancorp",
  shortName: "Old National",
  ticker: "ONB",
  hq: "Evansville, IN (Chicago co-headquarters)",
  fedRank: 37,
  leadBank: "Old National Bank",
  assetsUsdMillions: 72614,
  charter: "National bank (OCC)",
  posture: "A Midwest acquirer that has doubled in five years and now talks about AI the way it talks about payments plumbing: agentic dispute resolution from a vendor, automated Swift validation, and advice to clients on what not to tell a chatbot.",
  platform: {
    name: "Vendor-delivered automation on an acquisition-built bank",
    detail: "Old National has not announced an AI platform of its own. Its disclosed automation runs through partners: Quavo, an agentic-AI disputes provider, named it the bank with the highest client satisfaction for dispute resolution in its 2026 Trust in Banking awards; Axletree's Symmetree layer now hosts the bank's Swift architecture with built-in logic that flags and corrects non-compliant messages before transmission, which chief technology officer Jason Berkowitz credits with faster corporate onboarding and 'increased automation and validation'. The bank's own AI writing is client-facing: a 2025 guide on separating AI hype from AI that solves business problems, and a 2026 guide on what not to share with AI when seeking financial help.",
    sources: ["onb-quavo-2026", "ft-axletree-2026", "onb-ai-tips-2025", "onb-ai-privacy-2026"]
  },
  answerFirst:
    "Old National is the sixth-largest commercial bank headquartered in the Midwest, with about $74 billion in assets after a run of acquisitions that culminated in the $1.4 billion purchase of Minnesota's Bremer Financial, closed on 1 May 2025, which added 70 branches and made it the third-largest bank in the Twin Cities. Its AI record is modest and vendor-led. In January 2026 Quavo, an agentic-AI disputes technology provider, gave Old National its Customer Confidence Award for the highest satisfaction rate in client dispute resolution, with the bank's chief operations officer Jeff Newcom saying quick, careful resolution of disputes and fraud concerns is 'fundamental'. In February 2026 the bank completed a Swift architecture overhaul with Axletree that meets the ISO 20022 mandate and, according to CTO Jason Berkowitz, has cut friction in international payments and raised automation and validation. Chief information officer-level AI strategy has not been published; the bank's 2025 guidance to business clients on identifying AI that 'solves real business problems' and its 2026 guidance to consumers on what not to share with AI chatbots are its public voice. Around this sit the operational events of a consolidator: 244 Bremer service-centre jobs cut after the deal, a KeyBank veteran (Tim Burke) installed as president and COO in July 2025, a lawsuit accusing Bell Bank of orchestrating a mass resignation of bankers in December 2025, talks with Affirm to embed buy-now-pay-later in the banking app (60 million BNPL transactions by customers in 2025, 40,000 with active plans), a commercial-banking leadership realignment in April 2026, and record second-quarter 2026 results announced alongside an 'enhanced executive leadership structure'.",
  keyPoints: [
    "AI arrives through vendors: Quavo's agentic-AI disputes technology (Customer Confidence Award, January 2026) and Axletree's Symmetree layer hosting a Swift architecture that auto-flags and corrects non-compliant messages (ISO 20022, February 2026).",
    "The CTO's claim is operational: faster onboarding for large corporate clients, higher transaction volumes and 'increased automation and validation' in international payments.",
    "Client-facing AI guidance rather than internal disclosure: a 2025 framework for separating AI hype from business value and a 2026 privacy guide for consumers using AI for financial advice.",
    "A consolidator's operations: Bremer Financial ($1.4 billion, closed May 2025, 70 branches, 244 service-centre layoffs); talks with Affirm to embed BNPL in the app after customers made 60 million BNPL transactions in 2025.",
    "Leadership: CEO Jim Ryan; president and COO Tim Burke from KeyBank (July 2025); a commercial-banking realignment (April 2026) and an 'enhanced executive leadership structure' with record Q2 2026 results (July 2026).",
    "No AI platform, chief AI officer, use-case count or budget has been announced."
  ],
  leadership: [
    { name: "Jim Ryan", role: "Chairman and CEO", sources: ["onb-q2-2026", "ab-bremer-2025"], linkedin: "https://www.linkedin.com/in/jim-ryan-ceo-onb/" },
    { name: "Tim Burke", role: "President and Chief Operating Officer (from July 2025, ex-KeyBank)", sources: ["bankingdive-burke-2025"], linkedin: "https://www.linkedin.com/in/timothy-burke-8a91938/" },
    { name: "Jason Berkowitz", role: "Chief Technology Officer", sources: ["ft-axletree-2026"] },
    { name: "Jeff Newcom", role: "Chief Operations Officer", sources: ["onb-quavo-2026"], linkedin: "https://www.linkedin.com/in/jeff-newcom-403a91b/" },
    { name: "Phil Lehner", role: "President, Consumer Lending", sources: ["ab-affirm-2026"], linkedin: "https://www.linkedin.com/in/phil-lehner-7154a738/" }
  ],
  timeline: [
    { date: "2025-01-21", title: "Bremer deal on track; more deals possible", detail: "A $1.4 billion acquisition adding $16 billion of assets and 70 branches in Minnesota, North Dakota and Wisconsin.", sources: ["ab-bremer-2025"] },
    { date: "2025-04-11", title: "Guidance on AI that 'solves real business problems'", detail: "A four-tip framework for business clients evaluating AI tools.", sources: ["onb-ai-tips-2025"] },
    { date: "2025-05-01", title: "Bremer acquisition closes", detail: "Senior Bremer executives depart; 244 service-centre jobs cut later in the year.", sources: ["bankingdive-bremer-layoffs-2025"] },
    { date: "2025-07-22", title: "KeyBank veteran named president and COO", detail: "Tim Burke succeeds Mark Sander.", sources: ["bankingdive-burke-2025"] },
    { date: "2025-12-18", title: "Lawsuit accuses Bell Bank of a 'coup d'état'", detail: "An alleged orchestrated mass resignation of senior bankers from former Bremer markets.", sources: ["bankingdive-bell-2025"] },
    { date: "2026-01-22", title: "Quavo Customer Confidence Award", detail: "Highest client satisfaction in dispute resolution, judged by an agentic-AI disputes provider.", sources: ["onb-quavo-2026", "ft-quavo-2026"] },
    { date: "2026-02-10", title: "Swift architecture with automated validation goes live", detail: "Axletree's Symmetree layer; ISO 20022 compliance; the CTO cites reduced friction and more automation.", sources: ["ft-axletree-2026"] },
    { date: "2026-04-13", title: "Commercial-banking leadership realigned", detail: "Chris Doyle joins in a restructured commercial organisation.", sources: ["onb-commercial-2026"] },
    { date: "2026-05-13", title: "Talks with Affirm on embedded BNPL", detail: "Customers made 60 million BNPL transactions in 2025; 40,000 have active plans.", sources: ["ab-affirm-2026"] },
    { date: "2026-05-26", title: "What not to share with AI", detail: "Consumer guidance on privacy when using AI for financial help.", sources: ["onb-ai-privacy-2026"] },
    { date: "2026-07-22", title: "Record second quarter; leadership structure enhanced", detail: "Net income of $249.4 million; an 'enhanced executive leadership structure' announced.", sources: ["onb-q2-2026"] }
  ],
  useCases: [
    { useCase: "fraud", name: "Dispute and fraud-claim resolution (Quavo)", detail: "Vendor-provided agentic-AI disputes technology; award for highest client satisfaction.", status: "In production", sources: ["onb-quavo-2026"] },
    { useCase: "generative-agentic-ai", name: "Automated Swift message validation (Axletree Symmetree)", detail: "Built-in logic identifies, flags and corrects non-compliant messages before transmission.", status: "In production", sources: ["ft-axletree-2026"] },
    { useCase: "customer-chatbots", name: "Embedded BNPL in the banking app (Affirm, in talks)", detail: "Affirm Edge would surface purchasing power and installment offers inside the app.", status: "Announced", sources: ["ab-affirm-2026"] },
    { useCase: "data-privacy", name: "Consumer guidance on AI and financial data", detail: "What not to share with AI chatbots when seeking financial help.", status: "In production", sources: ["onb-ai-privacy-2026"] }
  ],
  numbers: [
    { label: "Bremer acquisition", value: "$1.4 billion; $16 billion of assets; 70 branches", asOf: "2025-01-21", sources: ["ab-bremer-2025"] },
    { label: "Bremer service-centre layoffs", value: "244", asOf: "2025-09-10", sources: ["bankingdive-bremer-layoffs-2025"] },
    { label: "Customer BNPL transactions in 2025 / active plans", value: "60 million / 40,000", asOf: "2026-05-13", sources: ["ab-affirm-2026"] },
    { label: "Second-quarter 2026 net income", value: "$249.4 million (record)", asOf: "2026-07-22", sources: ["onb-q2-2026"] },
    { label: "Total assets", value: "≈ $74 billion", asOf: "2026-07-22", sources: ["onb-ir-2026"] }
  ],
  quotes: [
    { who: "Jason Berkowitz", role: "Chief Technology Officer", date: "2026-02-10", quote: "We've seen reduced friction in international payment processing, faster onboarding for our large corporate clients, higher transaction volumes, and improved operational efficiency through increased automation and validation.", sources: ["ft-axletree-2026"] },
    { who: "Jeff Newcom", role: "Chief Operations Officer", date: "2026-01-22", quote: "Resolving client disputes and fraud concerns quickly and with great care is fundamental to how we support the people and organizations who trust us.", sources: ["onb-quavo-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "Old National Bank is a national bank; the OCC's model-risk bulletin governs vendor AI in disputes and payments.", docSlugs: ["occ-bulletin-2026-13"] },
    { authority: "federal-reserve", why: "Quavo, Axletree and Affirm are third-party relationships under interagency guidance for the holding company.", docSlugs: ["fed-sr-23-4", "fed-sr-26-2"] },
    { authority: "cfpb", why: "Dispute resolution (Regulation E), embedded BNPL and consumer AI guidance sit squarely in the CFPB's remit.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action", "cfpb-chatbots-in-consumer-finance-2023"] },
    { authority: "fincen", why: "Automated Swift validation and dispute handling intersect with BSA/AML program expectations.", docSlugs: ["fincen-aml-cft-program-nprm-2026"] }
  ],
  suggestions: [
    { title: "Vendor AI is still the bank's AI", detail: "Agentic dispute resolution and automated payment validation are examinable model uses regardless of who built them; the third-party guidance is the operative rulebook." },
    { title: "Integration capacity is the constraint", detail: "A bank that closed Bremer in 2025 and realigned leadership twice in 2026 has its technology teams on conversions; expect AI to expand through the partners already in place." },
    { title: "Embedded BNPL would be the first customer-facing decisioning at scale", detail: "Affirm Edge puts a partner's underwriting inside the app; the bank owns the customer relationship and the complaint queue." },
    { title: "Publishing client guidance is not the same as publishing governance", detail: "Old National writes well about AI for clients; a statement of its own AI governance would cost little and close a gap with peers." }
  ],
  faq: [
    { q: "Does Old National use AI?", a: "Through vendors, yes. Quavo, an agentic-AI disputes provider, recognised the bank in January 2026 for the highest client satisfaction in dispute resolution, and Axletree's Symmetree layer now automates validation of the bank's Swift messages. Old National has not announced an AI platform, chief AI officer or use-case count of its own." },
    { q: "What did Old National acquire recently?", a: "Bremer Financial of St. Paul, Minnesota, for $1.4 billion in cash and stock, closed on 1 May 2025, adding about $16 billion of assets and 70 branches and making Old National the third-largest bank in the Minneapolis–St. Paul area." }
  ],
  sources: [
    { id: "onb-quavo-2026", title: "Old National Receives 2026 Trust in Banking Award", publisher: "Old National Bancorp", url: "https://ir.oldnational.com/news/press-releases/press-release-details/2026/Old-National-Receives-2026-Trust-in-Banking-Award", date: "2026-01-22" },
    { id: "onb-q2-2026", title: "Old National Bancorp Reports Record Second Quarter 2026 Results; Announces Enhanced Executive Leadership Structure", publisher: "Old National Bancorp", url: "https://ir.oldnational.com/news/press-releases/press-release-details/2026/Old-National-Bancorp-Reports-Record-Second-Quarter-2026-Results-Announces-Enhanced-Executive-Leadership-Structure", date: "2026-07-22" },
    { id: "onb-commercial-2026", title: "Old National Announces Strategic Alignment of Commercial Banking Leadership, Welcomes Chris Doyle", publisher: "Old National Bancorp", url: "https://ir.oldnational.com/news/press-releases/press-release-details/2026/Old-National-Announces-Strategic-Alignment-of-Commercial-Banking-Leadership-Welcomes-Chris-Doyle", date: "2026-04-13" },
    { id: "onb-ir-2026", title: "Old National Bancorp — Investor Relations (approximately $74 billion of assets)", publisher: "Old National Bancorp", url: "https://ir.oldnational.com", date: "2026-07-22" },
    { id: "onb-ai-tips-2025", title: "Four tips to identify AI solutions that solve real business problems", publisher: "Old National Bank", url: "https://www.oldnational.com/resources/insights/four-tips-to-identify-ai-solutions-that-solve-real-business-problems/", date: "2025-04-11" },
    { id: "onb-ai-privacy-2026", title: "What not to share when using AI for personal finance help", publisher: "Old National Bank", url: "https://www.oldnational.com/resources/insights/what-not-to-share-when-using-ai-for-personal-finance-help/", date: "2026-05-26" },
    { id: "ft-axletree-2026", title: "Old National Bank, Axletree Solutions Partnership Finalizes Critical Swift Architecture, Achieves ISO 20022 Compliance for 2026", publisher: "GlobeNewswire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=1330-9651962en-471PA5GUQ40497E71D0E3EU3B5", date: "2026-02-10" },
    { id: "ft-quavo-2026", title: "Old National Receives 2026 Trust in Banking Award (wire)", publisher: "GlobeNewswire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=1330-9630794en-0OIHGK54N9V6QB27KTD1DKV10A", date: "2026-01-22" },
    { id: "ab-bremer-2025", title: "Acquisitive Old National eyes growth in Midwest, Southeast", publisher: "American Banker", url: "https://americanbanker.com/news/acquisitive-old-national-eyes-growth-in-midwest-southeast", date: "2025-01-21" },
    { id: "ab-affirm-2026", title: "Affirm seeks bank apps to build its BNPL empire", publisher: "American Banker", url: "https://www.americanbanker.com/payments/news/affirm-wants-to-embed-bnpl-in-banking-apps", date: "2026-05-13" },
    { id: "bankingdive-burke-2025", title: "Old National names KeyBank exec president, COO", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/old-national-president-coo-keybank-tim-burke-sander-jim-ryan-commercial/753787/", date: "2025-07-23" },
    { id: "bankingdive-bremer-layoffs-2025", title: "Minnesota's Bremer Bank to lay off 244 after sale to Old National", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/minnesotas-bremer-bank-to-lay-off-244-after-sale-to-old-national/759752/", date: "2025-09-10" },
    { id: "bankingdive-bell-2025", title: "Old National accuses Bell Bank of 'coup d'état'", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/old-national-accuses-bell-bank-coup-d-etat-lawsuit-8-bankers-mass-resign-bremer-brainerd-minnesota/808292/", date: "2025-12-18" }
  ],
  lastUpdated: "2026-09-10"
};

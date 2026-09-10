import type { Bank } from "@/lib/banks";

export const DEUTSCHE_BANK_US: Bank = {
  slug: "deutsche-bank-us",
  name: "Deutsche Bank (U.S.)",
  shortName: "Deutsche Bank",
  ticker: "DB",
  hq: "New York, NY",
  fedRank: 53,
  leadBank: "Deutsche Bank Trust Company Americas",
  assetsUsdMillions: 39745,
  charter: "New York state member bank (Federal Reserve); subsidiary of DB USA Corporation and Deutsche Bank AG",
  posture: "A Frankfurt-run AI programme with hard 2028 targets, applied in the US mainly through corporate-bank credit processes and trust-and-agency work, including acting as agent on AI data-centre financings.",
  platform: {
    name: "Group AI programme (2025–2028 targets) and the Corporate Bank credit process",
    detail: "Deutsche Bank set its AI ambitions at the November 2025 Investor Deep Dive: an 'AI-enabled operating model' in the Private Bank with agentic AI deployed 'front-to-back', 15 core banking platforms cut to 2, about €600 million of cumulative technology spend to 2028 for €300 million of run-rate savings, a 30% reduction in manual KYC handling time, a 60% cut in mortgage handling time through AI instant decisions, and more than 80% of inbound inquiries assisted by conversational AI. Group planning embeds a 10% to 20% productivity gain for software developers, which CEO Christian Sewing said could be as high as 50% and would mean 'far less coders'. In the first quarter of 2026 the bank said it was using AI 'to significantly accelerate the credit process in the Corporate Bank', and Sewing's May 2026 AGM speech cited AI cutting the time from first contact to cash for German Mittelstand loans by up to 95%. The US arm, Deutsche Bank Trust Company Americas, is the group's corporate-trust and agency bank; in 2025 it acted as administrative and collateral agent on a $610 million financing for a 50-megawatt Virginia data centre leased to CoreWeave.",
    sources: ["db-idd-pb-2025", "db-idd-qa-2025", "db-q1-2026", "db-agm-2026", "db-datacentre-2025"]
  },
  answerFirst:
    "Deutsche Bank's US bank, Deutsche Bank Trust Company Americas, is a $40 billion New York state member bank whose business is corporate trust, agency services and corporate banking; its AI strategy is set in Frankfurt and disclosed at group level with unusually specific targets. At the November 2025 Investor Deep Dive the group promised an AI-enabled operating model by 2028: agentic AI deployed front-to-back in the Private Bank, core banking platforms reduced from 15 to 2, around €600 million of cumulative technology spend for €300 million of run-rate savings, a 30% cut in manual KYC handling time, 60% faster mortgage handling through AI instant decisions, and more than 80% of inbound inquiries assisted by conversational AI. Chief executive Christian Sewing said the plan assumes a 10% to 20% productivity gain for coders, that surveys suggest it could reach 50%, and that AI means the bank can 'do coding in the future with far less coders'; by the May 2026 AGM he said AI was 'evolving at a much faster pace than originally anticipated', that the bank had raised its efficiency ambition beyond €2 billion, and that AI had cut the time from first contact to cash for Mittelstand loans by up to 95%. In the first quarter of 2026 the group said it was using AI 'to significantly accelerate the credit process in the Corporate Bank', the division that houses the US trust and agency business. The US entity's own AI footprint is as a service provider to the AI build-out: it was administrative and collateral agent on a $610 million loan for a Virginia data centre leased to CoreWeave, and its digital-assets transformation head co-authored a September 2025 white paper with Clifford Chance on combining AI with distributed-ledger technology. Bernd Leukert, group chief technology, data and innovation officer, left at the end of June 2026. DBTCA is supervised by the Federal Reserve and the New York Department of Financial Services, so the group's AI controls meet US model-risk and DFS cyber rules at the US perimeter.",
  keyPoints: [
    "Group targets to 2028: agentic AI front-to-back in the Private Bank, 15 core platforms to 2, ~€600 million technology spend for €300 million run-rate savings, 30% less manual KYC time, 60% faster mortgage handling, 80%-plus of inquiries AI-assisted.",
    "CEO on coders: planning assumes 10–20% developer productivity from AI, surveys say up to 50%, and the bank expects to code 'with far less coders'.",
    "Corporate Bank, which includes the US trust and agency business, is using AI to accelerate its credit process (Q1 2026); Mittelstand loan time-to-cash cut by up to 95% (AGM, May 2026).",
    "US-specific AI exposure is as agent: a $610 million financing for a CoreWeave-leased Virginia data centre, with DBTCA as administrative and collateral agent.",
    "Thought leadership from the US corporate bank: a 2025 white paper with Clifford Chance on AI and distributed-ledger convergence.",
    "Leadership change: chief technology, data and innovation officer Bernd Leukert departed at the end of June 2026; Raja Akram became CFO."
  ],
  leadership: [
    { name: "Christian Sewing", role: "Chief Executive Officer, Deutsche Bank AG", linkedin: "https://www.linkedin.com/in/christian-sewing", sources: ["db-idd-qa-2025", "db-agm-2026"] },
    { name: "Raja Akram", role: "Chief Financial Officer (from 2026)", sources: ["db-q1-2026"] },
    { name: "Fabrizio Campelli", role: "Head of Corporate and Investment Bank", sources: ["db-idd-qa-2025"] },
    { name: "Claudio de Sanctis", role: "Head of Private Bank; owner of the AI-led operating model", linkedin: "https://www.linkedin.com/in/claudio-de-sanctis-9bab7676", sources: ["db-idd-pb-2025"] },
    { name: "Bernd Leukert", role: "Chief Technology, Data and Innovation Officer (until June 2026)", sources: ["db-governance-2026"] },
    { name: "Sabih Behzad", role: "Head of Digital Assets and Currencies Transformation", linkedin: "https://www.linkedin.com/in/sabih-behzad-6a31a4", sources: ["db-ai-dlt-2025"] }
  ],
  timeline: [
    { date: "2025-04-01", title: "Agent on a $610 million AI data-centre financing", detail: "DBTCA administrative and collateral agent for a 50 MW Virginia site leased to CoreWeave.", sources: ["db-datacentre-2025"] },
    { date: "2025-09-01", title: "AI and DLT convergence white paper", detail: "Co-authored with Clifford Chance; foreword by the bank's digital-assets transformation head.", sources: ["db-ai-dlt-2025"] },
    { date: "2025-11-17", title: "Investor Deep Dive sets 2028 AI targets", detail: "Agentic AI front-to-back, 15 to 2 core platforms, KYC and mortgage handling-time cuts.", sources: ["db-idd-pb-2025", "db-idd-qa-2025"] },
    { date: "2026-04-27", title: "Technology chief's departure disclosed", detail: "Bernd Leukert with the bank until end of June 2026.", sources: ["db-governance-2026"] },
    { date: "2026-04-29", title: "AI accelerating the Corporate Bank credit process", detail: "Q1 2026 call: AI used to take out cost and improve client experience in credit.", sources: ["db-q1-2026"] },
    { date: "2026-05-20", title: "CEO: AI 'evolving much faster than anticipated'", detail: "Efficiency ambition above €2 billion; loan time-to-cash cut by up to 95%.", sources: ["db-agm-2026"] }
  ],
  useCases: [
    { useCase: "credit-underwriting", name: "AI-accelerated corporate credit process", detail: "Corporate Bank credit re-engineered with AI; Mittelstand time-to-cash cut by up to 95%.", status: "In production", sources: ["db-q1-2026", "db-agm-2026"] },
    { useCase: "aml-kyc", name: "AI in KYC handling", detail: "Target of a 30% reduction in manual KYC handling time by 2028.", status: "Rolling out", sources: ["db-idd-pb-2025"] },
    { useCase: "customer-chatbots", name: "Conversational AI for inbound inquiries", detail: "Target: more than 80% of inbound inquiries assisted by personalised conversational AI.", status: "Rolling out", sources: ["db-idd-pb-2025"] },
    { useCase: "generative-agentic-ai", name: "Agentic AI operating model and AI-assisted coding", detail: "Front-to-back agentic streamlining; 10–20% developer productivity assumed.", status: "Rolling out", sources: ["db-idd-pb-2025", "db-idd-qa-2025"] },
    { useCase: "credit-underwriting", name: "AI instant mortgage decisions", detail: "Target: 60% decrease in mortgage handling time.", status: "Rolling out", sources: ["db-idd-pb-2025"] },
    { useCase: "trading-markets", name: "Agent and trustee services for AI infrastructure", detail: "DBTCA as agent on data-centre project financings.", status: "In production", sources: ["db-datacentre-2025"] }
  ],
  numbers: [
    { label: "Cumulative technology spend to 2028 (Private Bank)", value: "≈ €600 million for €300 million run-rate savings", asOf: "2025-11-17", sources: ["db-idd-pb-2025"] },
    { label: "Core banking platforms", value: "15 → 2", asOf: "2025-11-17", sources: ["db-idd-pb-2025"] },
    { label: "Manual KYC handling time / mortgage handling time", value: "−30% / −60% (targets)", asOf: "2025-11-17", sources: ["db-idd-pb-2025"] },
    { label: "Inbound inquiries assisted by conversational AI", value: "> 80% (target)", asOf: "2025-11-17", sources: ["db-idd-pb-2025"] },
    { label: "Developer productivity assumed from AI", value: "10–20% (surveys: up to 50%)", asOf: "2025-11-17", sources: ["db-idd-qa-2025"] },
    { label: "Mittelstand loan time from first contact to cash", value: "up to −95%", asOf: "2026-05-20", sources: ["db-agm-2026"] },
    { label: "Virginia data-centre financing (DBTCA as agent)", value: "$610 million, 50 MW", asOf: "2025-04-01", sources: ["db-datacentre-2025"] }
  ],
  quotes: [
    { who: "Christian Sewing", role: "Chief Executive Officer", date: "2026-05-20", quote: "Artificial intelligence in particular is evolving at a much faster pace than originally anticipated.", sources: ["db-agm-2026"] },
    { who: "Christian Sewing", role: "Chief Executive Officer", date: "2025-11-17", quote: "We have embedded a 10 to 20% productivity over the period of our software developers and coders. I have seen surveys that say it could be as much as 50%.", sources: ["db-idd-qa-2025"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "DBTCA is a state member bank under an intermediate holding company; the Fed supervises model risk and third-party AI at the US perimeter.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "ny-dfs", why: "A New York-chartered bank under the DFS cyber rule and its AI and frontier-model guidance.", docSlugs: ["ny-dfs-23-nycrr-part-500", "ny-dfs-industry-letter-2024-10-16-ai-cyber-risks"] },
    { authority: "eu-ai-act", why: "Group AI systems built in Frankfurt fall under the EU AI Act's obligations for credit scoring and other high-risk uses.", docSlugs: ["eu-ai-act-regulation-2024-1689"] },
    { authority: "ecb", why: "The ECB supervises Deutsche Bank AG and has set expectations on AI governance and model risk for significant institutions.", docSlugs: ["ecb-ssm-supervisory-priorities-2026-28"] }
  ],
  suggestions: [
    { title: "Targets this specific are rare and testable", detail: "KYC, mortgage and inquiry-handling percentages with a 2028 date give examiners and investors a scorecard most banks avoid publishing." },
    { title: "The US bank inherits controls it did not design", detail: "AI in the Corporate Bank credit process reaches US clients through DBTCA; Fed and DFS reviews will ask for US-perimeter validation of models built for the EU AI Act." },
    { title: "Coding with 'far less coders' is a workforce disclosure", detail: "A CEO putting a number on developer productivity invites questions about headcount plans, which the bank has so far framed as internalisation of external contractors." },
    { title: "Agent on AI data-centre debt is a growing exposure", detail: "Trust-and-agency work on hyperscaler-tenant financings ties fee income to AI capital spending; a slowdown shows up as fewer mandates before it shows up as credit." }
  ],
  faq: [
    { q: "What is Deutsche Bank's AI strategy?", a: "Set at the November 2025 Investor Deep Dive: an AI-enabled operating model by 2028 with agentic AI deployed front-to-back in the Private Bank, core platforms cut from 15 to 2, about €600 million of technology spend for €300 million of run-rate savings, 30% less manual KYC time, 60% faster mortgage handling and more than 80% of inbound inquiries assisted by conversational AI. In 2026 the bank said AI was accelerating the Corporate Bank credit process and cutting Mittelstand loan time-to-cash by up to 95%." },
    { q: "What does Deutsche Bank Trust Company Americas do?", a: "It is Deutsche Bank's US commercial bank, focused on corporate trust, agency and corporate banking services rather than retail. Its AI-related activity is as a service provider: in 2025 it acted as administrative and collateral agent on a $610 million financing for a Virginia data centre leased to CoreWeave." }
  ],
  sources: [
    { id: "db-datacentre-2025", title: "Deutsche Bank supports data centre development in Virginia", publisher: "Deutsche Bank Corporate Bank", url: "https://corporates.db.com/more/latest-news/deutsche-bank-supports-data-centre-development-in-virginia", date: "2025-04-01" },
    { id: "db-ai-dlt-2025", title: "Deutsche Bank and Clifford Chance co-author whitepaper on AI and DLT convergence", publisher: "Deutsche Bank Corporate Bank", url: "https://corporates.db.com/more/latest-news/deutsche-bank-and-clifford-chance-co-author-whitepaper-on-ai-and-dlt-convergence", date: "2025-09-01" },
    { id: "db-idd-pb-2025", title: "Investor Deep Dive 2025: Private Bank presentation (Claudio de Sanctis)", publisher: "Deutsche Bank", url: "https://investor-relations.db.com/files/documents/other-presentations-and-events/2025/IDD-2025-Presentation-Private-Bank-Claudio-de-Sanctis.pdf", date: "2025-11-17" },
    { id: "db-idd-qa-2025", title: "Investor Deep Dive 2025: Q&A transcript", publisher: "Deutsche Bank", url: "https://investor-relations.db.com/files/documents/other-presentations-and-events/2025/IDD-2025-Q&A-Transcript.pdf", date: "2025-11-17" },
    { id: "db-governance-2026", title: "Corporate Governance Presentation 2026", publisher: "Deutsche Bank", url: "https://agm.db.com/files/documents/2026/Deutsche-Bank-Corporate-Governance-Presentation.pdf", date: "2026-04-27" },
    { id: "db-q1-2026", title: "Q1 2026 Analyst Call Transcript", publisher: "Deutsche Bank", url: "https://investor-relations.db.com/files/documents/quarterly-results/2026/Q1-2026-Analyst-Call-Transcript-For-Upload.pdf", date: "2026-04-29" },
    { id: "db-agm-2026", title: "Speech by Christian Sewing at the Annual General Meeting 2026", publisher: "Deutsche Bank", url: "https://hauptversammlung.db.com/files/documents/2026/AGM-2026-Speech-Sewing.pdf", date: "2026-05-20" }
  ],
  lastUpdated: "2026-09-10"
};

import type { Bank } from "@/lib/banks";

export const KEYBANK: Bank = {
  slug: "keybank",
  name: "KeyCorp (KeyBank)",
  shortName: "KeyBank",
  ticker: "KEY",
  hq: "Cleveland, OH",
  fedRank: 22,
  leadBank: "KeyBank National Association",
  assetsUsdMillions: 185983,
  charter: "National bank (OCC)",
  posture: "A self-described 'fast follower': AI in the call centre at 25 cents a call, Personetics-powered insights in the app, and a CRO who says the analog risk function is over.",
  platform: {
    name: "Conversational AI in the contact centre and 'cognitive banking' in the app",
    detail: "KeyBank's two visible AI bets are operational. In the contact centre, CEO Chris Gorman told investors on the fourth-quarter 2025 call that an AI-handled call costs roughly $0.25 against about $9 for a human-handled one, inside a technology and operations budget that has risen from an $800–900 million run rate to about $1 billion. In the mobile app, a March 2025 partnership with Personetics delivered enriched transactions in April 2026 and a personalised-insights pilot aimed at a third-quarter 2026 rollout, with a conversational assistant described as 'the next step'.",
    sources: ["pymnts-calls-2026", "bankingdive-relationships-2026", "ab-cognitive-2025"]
  },
  answerFirst:
    "KeyBank does not claim to lead on AI; its head of consumer digital calls the bank a 'fast follower' that benefits from watching larger banks first. What the record shows is a bank applying AI where the cost case is clearest. On the fourth-quarter 2025 earnings call the CEO put the cost of an AI-handled customer call at about $0.25 against $9 for a human one, and said continuous-improvement work had found roughly $100 million of annual savings to fund a technology budget now running at about $1 billion. In the app, a Personetics partnership signed in March 2025 produced enriched transaction detail in April 2026 (transaction inquiries are the bank's biggest call-centre driver), a personalised-insights pilot targeted for the third quarter, and a conversational assistant the bank has not yet dated. In payments, machine-learning receivables matching (KeyTotal AR) and a virtual commercial card with fintech partner Qolo are live, and KeyBank is one of five banks in FIS's Project Keystone tokenised-deposit network. The risk function is part of the story: Chief Risk Officer Mo Ramani, hired from Truist in January 2025, says 'the end of the analog chief risk officer era has occurred' and wants routine financial-crime alerts and some commercial underwriting automated with humans checking the output. Leadership changed in March 2026 when long-time CIO Amy Brady resigned for health reasons and CFO Clark Khayat took over technology and operations.",
  keyPoints: [
    "Unit economics first: AI-handled calls cost about $0.25 versus $9 for human-handled ones, per the CEO on the Q4 2025 earnings call; technology and operations spend is now about $1 billion a year.",
    "'Cognitive banking' with Personetics: enriched transactions live since April 2026, personalised insights piloting for a Q3 2026 launch, conversational assistant 'the next step' — the bank positions itself as a fast follower.",
    "Payments automation: KeyTotal AR uses machine learning for invoice-to-cash matching (with Versapay); Key Virtual Card launched with Qolo in April 2026; a participant in FIS's Project Keystone tokenised-deposit network.",
    "The risk function is digitising: CRO Mo Ramani (ex-Truist, from January 2025) wants AI to handle routine financial-crime alert reviews and parts of commercial underwriting, with humans checking outputs.",
    "Leadership: CIO Amy Brady resigned in March 2026; CFO Clark Khayat now runs technology and operations. The bank says it has 'no interest' in buying a bank and is under activist pressure to return capital.",
    "Scale: about $184–190 billion in assets, 15 states, roughly 950 branches; the consumer bank is about 60% of deposits, which is where the app-side AI work lands."
  ],
  leadership: [
    { name: "Chris Gorman", role: "Chairman and CEO", sources: ["pymnts-calls-2026", "bankingdive-no-interest-2025"], linkedin: "https://www.linkedin.com/in/chris-gorman-14960413/" },
    { name: "Clark Khayat", role: "Chief Financial Officer; leads technology and operations since March 2026", sources: ["bankingdive-cio-resigns-2026"], linkedin: "https://www.linkedin.com/in/clark-khayat-441688/" },
    { name: "Mo Ramani", role: "Chief Risk Officer (from January 2025, ex-Truist)", sources: ["wsj-digital-cro-2026", "bankingdive-cro-2025"], linkedin: "https://www.linkedin.com/in/moramani/" },
    { name: "Emily Gessner", role: "Head of Consumer Digital (moving to Commercial Digital, mid-2026)", sources: ["bankingdive-relationships-2026", "ab-cognitive-2025"], linkedin: "https://www.linkedin.com/in/emily-gessner/" }
  ],
  timeline: [
    { date: "2025-01-15", title: "Truist's deputy CRO hired as chief risk officer", detail: "Mo Ramani replaces Darrin Benhart, who becomes chief regulatory officer.", sources: ["bankingdive-cro-2025"] },
    { date: "2025-03-01", title: "Personetics partnership signed", detail: "The basis for enriched transactions and personalised insights in the mobile app.", sources: ["bankingdive-relationships-2026"] },
    { date: "2025-07-22", title: "$100 million more for technology", detail: "The bank marks additional technology spending to support growth alongside front-line hiring.", sources: ["pymnts-100m-2025"] },
    { date: "2025-08-01", title: "'Cognitive banking' pilot with Personetics", detail: "Enrich (transaction detail) first, then Engage (real-time personalised offers); transaction inquiries are the number-one call driver.", sources: ["ab-cognitive-2025"] },
    { date: "2025-12-09", title: "'No interest' in buying a bank", detail: "Days after an activist called for his firing, Gorman says a moratorium on bank deals and buybacks are the priorities.", sources: ["bankingdive-no-interest-2025"] },
    { date: "2026-01-21", title: "AI calls at $0.25 versus $9", detail: "Q4 2025 earnings call: technology and operations investment at about $1 billion; about $100 million of annual savings found through continuous improvement.", sources: ["pymnts-calls-2026"] },
    { date: "2026-02-19", title: "'The era of the digital CRO'", detail: "Ramani on automating routine alert investigations and parts of commercial underwriting, with humans checking outputs.", sources: ["wsj-digital-cro-2026"] },
    { date: "2026-03-02", title: "CIO Amy Brady resigns", detail: "Health reasons; CFO Clark Khayat takes over the technology and operations function.", sources: ["bankingdive-cio-resigns-2026", "ab-brady-2026"] },
    { date: "2026-04-14", title: "Key Virtual Card with Qolo", detail: "Virtual commercial card issuing to fend off spend-management fintechs; KeyBank holds a minority stake in Qolo.", sources: ["ab-virtual-card-2026"] },
    { date: "2026-04-30", title: "Joins FIS's Project Keystone", detail: "One of five banks building a tokenised-deposit network with Citizens, Fifth Third, Huntington and M&T.", sources: ["ft-keystone-2026"] },
    { date: "2026-04-01", title: "Enriched transactions go live in the app", detail: "Merchant name, location and category on every transaction; the feed also powers AI insight models.", sources: ["bankingdive-relationships-2026"] },
    { date: "2026-06-23", title: "Insights pilot under way; assistant is 'the next step'", detail: "Personalised insights targeted for Q3 2026; 2027 funding conversations include a conversational assistant.", sources: ["bankingdive-relationships-2026"] }
  ],
  useCases: [
    { useCase: "customer-chatbots", name: "Conversational AI in the contact centre", detail: "AI-handled calls at roughly $0.25 each versus $9 for human-handled.", status: "In production", sources: ["pymnts-calls-2026"] },
    { useCase: "customer-chatbots", name: "Enriched transactions and personalised insights (Personetics)", detail: "Enrichment live since April 2026; insights piloting for Q3; conversational assistant not yet dated.", status: "Rolling out", sources: ["bankingdive-relationships-2026", "ab-cognitive-2025"] },
    { useCase: "generative-agentic-ai", name: "KeyTotal AR predictive receivables matching", detail: "Machine learning for invoice-to-cash for middle-market clients, with Versapay.", status: "In production", sources: ["key-keytotal-2025"] },
    { useCase: "aml-kyc", name: "AI review of routine financial-crime alerts", detail: "The CRO's stated target: AI handles routine alert investigations, humans check output and take complex cases.", status: "Announced", sources: ["wsj-digital-cro-2026"] },
    { useCase: "fraud", name: "AI-deepfake fraud defence and client education", detail: "Guidance on AI-generated voice and video used in business email compromise.", status: "In production", sources: ["key-fraud-2025"] }
  ],
  numbers: [
    { label: "Cost per customer call, AI vs human", value: "≈ $0.25 vs ≈ $9", asOf: "2026-01-21", sources: ["pymnts-calls-2026"] },
    { label: "Technology and operations investment", value: "≈ $1 billion a year, up from an $800–900 million run rate", asOf: "2026-01-21", sources: ["pymnts-calls-2026"] },
    { label: "Annual savings from continuous improvement", value: "≈ $100 million", asOf: "2026-01-21", sources: ["pymnts-calls-2026"] },
    { label: "Origination platforms", value: "8 → 4 in three years; account opening 15 minutes faster", asOf: "2026-06-23", sources: ["bankingdive-relationships-2026"] },
    { label: "Total assets", value: "≈ $184 billion", asOf: "2025-12-31", sources: ["ft-atlanta-2026"] }
  ],
  quotes: [
    { who: "Mo Ramani", role: "Chief Risk Officer", date: "2026-02-19", quote: "The end of the analog chief risk officer era has occurred. It is vital to be at the forefront of digital transformation. From here on, it's the era of the digital CRO.", sources: ["wsj-digital-cro-2026"] },
    { who: "Emily Gessner", role: "Head of Consumer Digital", date: "2026-06-23", quote: "Regional banks are at a very critical inflection point, and with competition being as high as it is, I do think we owe it to our clients to start to take more progressive, larger steps forward.", sources: ["bankingdive-relationships-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "KeyBank is a national bank; the revised model-risk bulletin and the OCC's gen-AI risk perspective govern the contact-centre AI and any automated underwriting.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "federal-reserve", why: "KeyCorp is the holding company; Personetics, Qolo, Versapay and FIS are third-party relationships under interagency guidance.", docSlugs: ["fed-sr-23-4", "fed-sr-26-2"] },
    { authority: "cfpb", why: "Personalised offers and a planned conversational assistant in a consumer app sit under UDAAP and the chatbot guidance.", docSlugs: ["cfpb-chatbots-in-consumer-finance-2023", "cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "fincen", why: "The CRO's plan to let AI triage routine financial-crime alerts lands inside the AML/CFT program rule.", docSlugs: ["fincen-aml-cft-program-nprm-2026"] }
  ],
  suggestions: [
    { title: "The cost-per-call number is the whole argument", detail: "A 36-fold cost gap per interaction is the kind of figure that funds everything else; it also means the first place AI touches customers is the channel regulators watch most closely for complaint handling." },
    { title: "'Fast follower' is a governance posture, not just a product one", detail: "Waiting to see how larger banks deploy assistants lets KeyBank inherit their control patterns — and their examiner findings — before shipping its own." },
    { title: "Automating alert review is the exposure to watch", detail: "The CRO's example (99 of 100 alerts are nothing) is exactly the case where model drift goes unnoticed; the human-checks-output design is what makes it defensible." },
    { title: "The CFO running technology changes the budget conversation", detail: "With the CIO seat vacated in March 2026 and the finance chief in charge, AI investment will be judged against the $100 million savings it is meant to fund — and the activist asking for buybacks." }
  ],
  faq: [
    { q: "What does KeyBank use AI for?", a: "Two things are in production: conversational AI in the contact centre, where the CEO says an AI-handled call costs about $0.25 versus $9 for a human one, and Personetics-powered transaction enrichment in the mobile app, live since April 2026. Personalised insights are in pilot for a third-quarter 2026 launch and a conversational assistant is planned but undated. Machine learning also runs receivables matching for business clients." },
    { q: "Who leads AI at KeyBank?", a: "There is no chief AI officer. CEO Chris Gorman frames the investment on earnings calls, CFO Clark Khayat has run technology and operations since CIO Amy Brady resigned in March 2026, Emily Gessner leads the digital product work, and Chief Risk Officer Mo Ramani is the public voice on automating the risk function." }
  ],
  sources: [
    { id: "pymnts-calls-2026", title: "KeyBank Taps $100 Million Increase in Technology Spend (AI calls at $0.25 vs $9)", publisher: "PYMNTS", url: "https://www.pymnts.com/news/artificial-intelligence/2026/keybank-taps-conversational-ai-cut-call-center-costs/", date: "2026-01-23" },
    { id: "pymnts-100m-2025", title: "KeyBank Marks $100M for Technology to Support Continued Growth", publisher: "PYMNTS", url: "https://pymnts.com/earnings/2025/keycorp-adds-frontline-bankers-technology-support-continued-growth", date: "2025-07-22" },
    { id: "ab-cognitive-2025", title: "How KeyBank is creating 'cognitive banking' with AI", publisher: "American Banker", url: "https://americanbanker.com/news/how-keybank-is-creating-cognitive-banking-with-ai", date: "2025-08-01" },
    { id: "ab-virtual-card-2026", title: "KeyBank adds virtual commerce cards to ward off fintechs", publisher: "American Banker", url: "https://americanbanker.com/payments/news/keybank-to-stand-up-virtual-commercial-card-issuing", date: "2026-04-14" },
    { id: "ab-brady-2026", title: "Amy Brady, KeyCorp's longtime CIO, resigns from the bank", publisher: "American Banker", url: "https://americanbanker.com/news/amy-brady-keycorps-longtime-cio-resigns-from-the-bank", date: "2026-03-02" },
    { id: "bankingdive-relationships-2026", title: "KeyBank bets on relationships over tech budgets", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/keybank-digital-banking-regionals-ai-insights-personetics/823541/", date: "2026-06-23" },
    { id: "bankingdive-cio-resigns-2026", title: "KeyBank CIO resigns", publisher: "Banking Dive", url: "https://bankingdive.com/news/keybank-amy-brady-cio-resign-health-clark-khayat-cfo/813644", date: "2026-03-03" },
    { id: "bankingdive-cro-2025", title: "KeyBank hires next CRO from Truist", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/keybank-mo-ramani-darrin-benhart-cro-risk-chief-regulatory-officer-truist/737591/", date: "2025-01-16" },
    { id: "bankingdive-no-interest-2025", title: "KeyBank has 'no interest' in buying a bank, CEO says", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/keybank-has-no-interest-in-buying-a-bank-ceo-says/807427/", date: "2025-12-09" },
    { id: "wsj-digital-cro-2026", title: "KeyBank: The Era of the Digital CRO Is Here", publisher: "The Wall Street Journal (Deloitte CIO Journal)", url: "https://deloitte.wsj.com/cio/keybank-the-era-of-the-digital-cro-is-here-38e965db", date: "2026-02-19" },
    { id: "ft-keystone-2026", title: "FIS and Leading Financial Institutions to Build Their Own Digital Tokenized Money Network", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202604300800BIZWIRE_USPRX____20260430_BW729662-1", date: "2026-04-30" },
    { id: "ft-atlanta-2026", title: "KeyBank Accelerates Southeast Growth with High-Impact Middle Market Team in Atlanta (boilerplate: $184 billion assets)", publisher: "PR Newswire via FT Markets", url: "https://markets-data-api-proxy.ft.com/data/announce/full?dockey=600-202603230832PR_NEWS_USPRX____CL14796-1", date: "2026-03-23" },
    { id: "key-keytotal-2025", title: "KeyBank Launches Predictive Accounts Receivable Matching with KeyTotal AR Powered by Versapay", publisher: "KeyCorp", url: "https://investor.key.com/press-releases/news-details/2025/KEYBANK-LAUNCHES-PREDICTIVE-ACCOUNTS-RECEIVABLE-MATCHING-WITH-KEYTOTAL-AR-POWERED-BY-VERSAPAY/default.aspx", date: "2025-07-07" },
    { id: "key-fraud-2025", title: "Cyber and electronic payments fraud (AI deepfake fraud)", publisher: "KeyBank", url: "https://www.key.com/content/dam/kco/documents/businesses___institutions/payment-fraud-schemes.pdf", date: "2025-05-29" }
  ],
  lastUpdated: "2026-09-10"
};

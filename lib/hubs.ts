// Hand-picked content for the two topic hubs, /ai-governance and
// /ai-fraud-detection. Everything cited is a slug in DOCUMENTS (the validator
// checks) and the data-driven sections come from the tracker and bank data at
// build time, so the hubs stay current as those change.

export const HUBS_UPDATED = "2026-09-12";

export type HubRow = { rule: string; docSlug: string; requirement: string; when: string };
export type HubPillar = { id: string; title: string; question: string; answer: string; rows: HubRow[] };
export type HubEvent = { date: string; title: string; docSlug: string };

export const GOVERNANCE_PILLARS: HubPillar[] = [
  {
    id: "accountability",
    title: "Board accountability and the inventory",
    question: "Who has to own AI in a bank?",
    answer:
      "Every supervisor that has spoken puts AI under the board and senior management, through the same governance architecture that already covers models and technology: named accountability, an inventory of what is running, policies for how it is approved, and effective challenge from risk, compliance and internal audit. US model-risk guidance revised in April 2026 keeps that structure for predictive models and leaves generative and agentic AI to broader enterprise governance; the UK's SS1/23 names a senior manager; the ECB's supervisors have said accountability for AI decisions must be clear and oversight must match AI's strategic weight.",
    rows: [
      { rule: "SR 26-2 / OCC Bulletin 2026-13 / FDIC FIL-15-2026", docSlug: "fed-sr-26-2", requirement: "Board and senior-management governance, a model inventory and independent validation for models in scope; generative and agentic AI are outside scope and left to broader risk-management and governance practices.", when: "In force from Apr 17, 2026" },
      { rule: "PRA SS1/23", docSlug: "pra-ss1-23-model-risk-management", requirement: "Five model-risk principles for all models informing business decisions, a sub-principle on AI and machine learning, and a named Senior Management Function holder accountable for the framework.", when: "In force from May 17, 2024" },
      { rule: "ECB: 'Technology is neutral, governance is not'", docSlug: "ecb-machado-technology-neutral-governance-speech-2026", requirement: "Clear accountability for AI decisions, senior-management oversight matching AI's strategic importance, and effective challenge from risk, compliance and internal audit.", when: "Stated Feb 24, 2026" },
      { rule: "FSB sound practices 1–4 (consultation)", docSlug: "fsb-ai-sound-practices-consultation-2026", requirement: "Strategic direction and oversight, governance and accountability, AI inside the risk-management framework, organisational adaptability.", when: "Final report expected Oct 2026" },
      { rule: "NCUA Letter 26-CU-01", docSlug: "ncua-letter-26-cu-01", requirement: "Credit-union supervisory expectations for AI governance, risk assessment and vendor oversight.", when: "In force" }
    ]
  },
  {
    id: "model-risk",
    title: "Model risk and validation",
    question: "Which AI systems count as models, and what validation do they need?",
    answer:
      "In the US, a machine-learning system that processes input data into quantitative estimates is a model and needs documented development, independent validation, ongoing monitoring and outcomes analysis scaled to its materiality. The 2026 revision narrowed the definition so that simple arithmetic and deterministic rules fall out, and it explicitly excludes generative and agentic AI from model risk management while promising an interagency request for information. Outside the US the perimeter is wider: the PRA keeps AI and machine learning inside model risk management, and the ECB's internal-models guide tests machine-learning capital models for explainability and justified complexity.",
    rows: [
      { rule: "SR 26-2 (Fed)", docSlug: "fed-sr-26-2", requirement: "Risk-based, materiality-driven validation and monitoring; 'complex quantitative method' definition; generative and agentic AI out of scope.", when: "In force from Apr 17, 2026" },
      { rule: "SR 11-7 (the 2011 framework)", docSlug: "fed-sr-11-7", requirement: "The validation disciplines that carry over: conceptual soundness, ongoing monitoring, outcomes analysis, effective challenge.", when: "Superseded Apr 17, 2026" },
      { rule: "ECB Guide to internal models, ML section", docSlug: "ecb-guide-to-internal-models-2025-machine-learning", requirement: "Machine-learning capital models must be adequately explainable and their complexity justified by performance.", when: "In force from Jul 28, 2025" },
      { rule: "EBA follow-up report on ML for IRB models", docSlug: "eba-rep-2023-28-ml-irb-follow-up", requirement: "Principle-based recommendations on understanding, documentation, validation and stability of machine-learning capital models.", when: "Published Aug 4, 2023" },
      { rule: "OCC Bulletin 2023-17 / SR 23-4 (third-party models)", docSlug: "fed-sr-23-4", requirement: "Vendor models are the bank's to understand and validate, with due diligence and monitoring through the relationship's life.", when: "In force" }
    ]
  },
  {
    id: "data",
    title: "Data governance",
    question: "What do regulators expect of the data behind AI models?",
    answer:
      "Owned, traceable, complete and current: the BCBS 239 vocabulary that examiners use for risk data applies to training sets, feature stores and retrieval corpora, and the Basel Committee's January 2026 newsletter said AI makes robust data management more important, not less. The EU AI Act turns data governance into a legal duty for high-risk systems such as consumer credit scoring, with provenance, preparation, bias examination and gap analysis to be documented, from December 2, 2027 after the Digital Omnibus deferral.",
    rows: [
      { rule: "BCBS 239", docSlug: "bcbs-239", requirement: "Fourteen principles for risk-data governance, aggregation and reporting: ownership, architecture, accuracy and lineage, completeness, timeliness, adaptability.", when: "G-SIBs from 2016" },
      { rule: "BCBS 239 implementation newsletter", docSlug: "bcbs-newsletter-bcbs239-implementation-2026", requirement: "AI and advanced automation depend on high-quality data; lineage and ad hoc reporting still 'a work in progress'.", when: "Published Jan 6, 2026" },
      { rule: "EU AI Act, Article 10", docSlug: "eu-ai-act-regulation-2024-1689", requirement: "Documented data governance for training, validation and testing data of high-risk systems, including credit scoring of natural persons.", when: "Stand-alone Annex III systems from Dec 2, 2027" },
      { rule: "Treasury AI cybersecurity report", docSlug: "treasury-ai-cybersecurity-risks-report-2024", requirement: "Identified a 'fraud data divide' and proposed data 'nutrition labels' for vendor AI; became the AIEOG workplan.", when: "Published Mar 27, 2024" }
    ]
  },
  {
    id: "third-party",
    title: "Third-party and concentration risk",
    question: "How is a bank's reliance on external AI models and cloud providers supervised?",
    answer:
      "Through third-party risk management rather than a separate AI rule. The 2023 US interagency guidance covers the full lifecycle from due diligence to termination and expects validation of purchased models; the Basel Committee's December 2025 principles reach nth-party supply chains and concentration; and the FSB has singled out generative AI's dependence on a small number of hardware, cloud and model suppliers as a financial-stability vulnerability to monitor.",
    rows: [
      { rule: "SR 23-4 / OCC 2023-17 / FDIC FIL-29-2023", docSlug: "fed-sr-23-4", requirement: "Planning, due diligence, contracting, ongoing monitoring and termination for every third-party relationship, including AI tools and foundation-model access.", when: "In force from Jun 7, 2023" },
      { rule: "BCBS Third-Party Risk Principles", docSlug: "bcbs-third-party-risk-principles-2025", requirement: "Twelve principles covering board accountability, due diligence, contracts, monitoring, continuity and exit, including nth-party chains and concentration.", when: "Published Dec 10, 2025" },
      { rule: "FSB AI monitoring report", docSlug: "fsb-monitoring-ai-adoption-vulnerabilities-2025", requirement: "Third-party dependencies and provider concentration named as vulnerabilities for authorities to track.", when: "Published Oct 10, 2025" },
      { rule: "FSB third-party risk toolkit", docSlug: "fsb-third-party-risk-toolkit-2023", requirement: "Toolkit for managing third-party and outsourcing risk, including critical service providers.", when: "Published Dec 4, 2023" }
    ]
  },
  {
    id: "oversight",
    title: "Human oversight and the customer's rights",
    question: "When must a person be able to explain or override an AI decision?",
    answer:
      "Whenever the decision touches a consumer's credit: US adverse-action law requires the specific principal reasons for a denial regardless of how complex the model is, the EU AI Act requires human oversight and a fundamental-rights impact assessment for high-risk credit scoring, and Colorado's Automated Decision-Making Technology Act adds notice, a plain-language explanation after an adverse outcome and human review from January 1, 2027, with a lender's ECOA notice satisfying the disclosure duty for the same decision.",
    rows: [
      { rule: "ECOA / Regulation B adverse action", docSlug: "cfpb-ecoa-regulation-b-adverse-action", requirement: "Specific principal reasons for adverse credit action; model opacity is not a defence.", when: "In force" },
      { rule: "FCRA adverse action and key factors", docSlug: "cfpb-fcra-adverse-action-key-factors", requirement: "Key factors that adversely affected a credit score must be disclosed.", when: "In force" },
      { rule: "EU AI Act, Articles 14 and 26–27", docSlug: "eu-ai-act-regulation-2024-1689", requirement: "Human oversight, deployer duties and a fundamental-rights impact assessment for high-risk credit scoring.", when: "Stand-alone Annex III systems from Dec 2, 2027" },
      { rule: "Colorado SB 26-189 (ADMT Act)", docSlug: "co-sb26-189", requirement: "Consumer notice, a plain-language explanation within 30 days of an adverse outcome, data access and correction, human review.", when: "Effective Jan 1, 2027" },
      { rule: "CPPA ADMT regulations (California)", docSlug: "ca-cppa-admt-risk-cyber-regulations-2025", requirement: "Notice, opt-out and access rights for automated decision-making technology in significant decisions, plus risk assessments.", when: "In force" }
    ]
  },
  {
    id: "frameworks",
    title: "Voluntary frameworks that fill the gaps",
    question: "What do banks use to govern generative and agentic AI where the rules stop?",
    answer:
      "The NIST AI Risk Management Framework and its generative-AI profile, Treasury's financial-services adaptation of it, and, for cyber, the New York and ECB letters on AI-enabled threats. None is binding on banks, but together they are what most US institutions cite for the systems that model-risk guidance now leaves out, and what examiners ask about when a bank's AI policy is on the table.",
    rows: [
      { rule: "NIST AI RMF 1.0", docSlug: "nist-ai-100-1", requirement: "Govern, Map, Measure, Manage and seven trustworthiness characteristics.", when: "Voluntary" },
      { rule: "NIST AI 600-1 (Generative AI Profile)", docSlug: "nist-ai-600-1", requirement: "Twelve generative-AI risks and more than 200 suggested actions mapped to the framework.", when: "Voluntary" },
      { rule: "Treasury FS AI RMF and AI Lexicon", docSlug: "treasury-fs-ai-rmf-and-ai-lexicon-2026", requirement: "The NIST framework adapted to financial services' operational, regulatory and consumer-protection specifics, with a shared vocabulary.", when: "Published Feb 19, 2026, non-binding" },
      { rule: "DFS AI cybersecurity letter", docSlug: "ny-dfs-industry-letter-2024-10-16-ai-cyber-risks", requirement: "AI-enabled social engineering, AI-enhanced attacks, data exposure and vendor dependency mapped to 23 NYCRR Part 500 obligations.", when: "In force" },
      { rule: "ECB 'Dear CEO' letter SSM-2026-0301", docSlug: "ecb-letter-ai-enabled-cybersecurity-threats-2026", requirement: "Every significant institution to assess AI-enabled cyber threats and submit an action plan to its supervisory team.", when: "Plans due Oct 31, 2026" }
    ]
  }
];

export const GOVERNANCE_TIMELINE: HubEvent[] = [
  { date: "2011-04-04", title: "SR 11-7 makes model governance an examinable discipline", docSlug: "fed-sr-11-7" },
  { date: "2013-01-09", title: "BCBS 239 sets the data-governance standard", docSlug: "bcbs-239" },
  { date: "2023-01-26", title: "NIST AI RMF 1.0 published", docSlug: "nist-ai-100-1" },
  { date: "2023-05-17", title: "PRA SS1/23 keeps AI inside model risk management", docSlug: "pra-ss1-23-model-risk-management" },
  { date: "2023-06-07", title: "SR 23-4 third-party guidance covers vendor AI", docSlug: "fed-sr-23-4" },
  { date: "2024-07-12", title: "EU AI Act published; credit scoring is high-risk", docSlug: "eu-ai-act-regulation-2024-1689" },
  { date: "2024-07-26", title: "NIST generative-AI profile", docSlug: "nist-ai-600-1" },
  { date: "2025-12-10", title: "Basel third-party risk principles reach AI supply chains", docSlug: "bcbs-third-party-risk-principles-2025" },
  { date: "2026-02-19", title: "Treasury FS AI RMF and lexicon", docSlug: "treasury-fs-ai-rmf-and-ai-lexicon-2026" },
  { date: "2026-04-17", title: "SR 26-2 replaces SR 11-7; generative and agentic AI carved out", docSlug: "fed-sr-26-2" },
  { date: "2026-05-14", title: "Colorado re-enacts its AI law as the ADMT Act", docSlug: "co-sb26-189" },
  { date: "2026-06-10", title: "FSB consults on twelve sound practices", docSlug: "fsb-ai-sound-practices-consultation-2026" },
  { date: "2026-07-24", title: "Digital Omnibus defers EU high-risk duties to Dec 2027", docSlug: "eu-digital-omnibus-ai-regulation-2026-1744" }
];

export const GOVERNANCE_FAQ = [
  { q: "Is there a single AI governance rule for banks?", a: "No. In the US, AI governance is assembled from model-risk guidance (SR 26-2 and its OCC and FDIC twins), third-party guidance (SR 23-4), consumer law on automated decisions (ECOA, FCRA), state laws (Colorado, California, New York) and voluntary frameworks (NIST, Treasury). The EU AI Act is the closest thing to a single rule, and it applies to banks mainly through high-risk credit scoring from December 2, 2027." },
  { q: "Does model risk management cover generative AI?", a: "Not in the US since April 17, 2026. SR 26-2 states that generative and agentic AI models are outside its scope and directs banks to broader risk-management and governance practices; the agencies have promised a request for information. In the UK the PRA's SS1/23 keeps AI and machine learning inside model risk management." },
  { q: "What does an examiner ask to see?", a: "An inventory of AI systems with owners and risk tiers, the approval and validation record for each material one, the data lineage behind it, the vendor due diligence where it is bought, the monitoring and the route to a human, and evidence that the board has been told what is running and why. The pillars above map each of those to the document that asks for it." },
  { q: "How many of the largest US banks have disclosed AI governance arrangements?", a: "The bank pages on this site record governance-related AI activity at most of the 100 largest US banks, from named AI committees and chief AI officers to model-data 'nutrition labels'; the section below lists them with the source for each." }
];

export const FRAUD_SECTIONS: HubPillar[] = [
  {
    id: "threat",
    title: "What regulators are warning about",
    question: "How is AI changing fraud against banks?",
    answer:
      "Regulators describe the same shift from three angles. Generative AI produces deepfake identity documents, voices and video good enough to defeat onboarding and authentication, which FinCEN, the FDIC and New York's DFS have all put in writing. AI lowers the cost and raises the speed of attacks, which the OCC, the ECB and DFS say changes the cyber threat landscape rather than any one scheme. And AI itself is used as bait, with trading bots and guaranteed-return schemes that the CFTC has warned customers about since January 2024.",
    rows: [
      { rule: "FinCEN Alert FIN-2024-Alert004 (deepfake media)", docSlug: "fincen-alert-2024-deepfake-media", requirement: "Deepfake IDs, images, video and audio used to defeat identity verification; red flags, phishing-resistant MFA, live verification, SAR key term FIN-2024-DEEPFAKEFRAUD.", when: "In force from Nov 13, 2024" },
      { rule: "FinCEN Alert FIN-2026-Alert004 (federal student aid)", docSlug: "fincen-alert-2026-federal-student-aid-fraud", requirement: "AI-generated synthetic identities and chatbots that keep 'ghost students' enrolled; SAR key term FIN-2026-FSAFRAUD.", when: "In force from Jul 24, 2026" },
      { rule: "FDIC 2024 Risk Review", docSlug: "fdic-risk-review-2024", requirement: "Generative AI used to circumvent identity- and authentication-based controls through deepfakes, voice cloning and forged documents.", when: "Published May 22, 2024" },
      { rule: "DFS AI cybersecurity letter", docSlug: "ny-dfs-industry-letter-2024-10-16-ai-cyber-risks", requirement: "AI-enabled social engineering and AI-enhanced attacks must appear in Part 500 risk assessments, training and MFA design.", when: "In force from Oct 16, 2024" },
      { rule: "OCC Semiannual Risk Perspective, Spring 2026", docSlug: "occ-semiannual-risk-perspective-spring-2026", requirement: "AI 'significantly transforming' the threat landscape: lower barriers to entry, more speed, scale and sophistication in attacks and fraud.", when: "Published May 7, 2026" },
      { rule: "ECB 'Dear CEO' letter SSM-2026-0301", docSlug: "ecb-letter-ai-enabled-cybersecurity-threats-2026", requirement: "AI models that find vulnerabilities and generate exploits at unprecedented speed; action plans due to supervisors.", when: "Plans due Oct 31, 2026" },
      { rule: "CFTC AI scams customer advisory", docSlug: "cftc-ai-scams-customer-advisory-2024", requirement: "AI-branded trading bots, signal services and crypto schemes promising guaranteed returns.", when: "In force from Jan 25, 2024" }
    ]
  },
  {
    id: "rules",
    title: "The rules AI fraud detection runs under",
    question: "What rules govern a bank's own use of AI to detect fraud?",
    answer:
      "Fraud detection is the AI use case regulators are most comfortable with, and the rules mostly encourage it. The EU AI Act exempts systems used solely to detect financial fraud from its high-risk credit-scoring category; FinCEN's 2018 innovation statement and its 2026 AML programme proposal reward 'effective use of artificial intelligence' in monitoring; and US model-risk guidance treats a fraud model as a model, validated in proportion to its materiality. The constraints come from elsewhere: a fraud model that blocks or declines a customer can trigger adverse-action and UDAAP questions, and the data it learns from sits under BCBS 239 and privacy law.",
    rows: [
      { rule: "EU AI Act, Annex III 5(b) carve-out", docSlug: "eu-ai-act-regulation-2024-1689", requirement: "AI used solely to detect financial fraud is excluded from the high-risk credit-scoring category.", when: "In force" },
      { rule: "2018 Joint Statement on BSA/AML innovation", docSlug: "fincen-joint-statement-innovation-2018", requirement: "Agencies encourage innovative approaches, including AI, to meet BSA/AML obligations; pilots will not be penalised for themselves.", when: "In force" },
      { rule: "2026 AML/CFT Program Proposed Rule", docSlug: "fincen-aml-cft-program-nprm-2026", requirement: "'Effective use of artificial intelligence, federated learning, or other advanced monitoring tools' counted in favour of an institution.", when: "Proposed; comments closed Jun 9, 2026" },
      { rule: "SR 26-2 / OCC 2026-13", docSlug: "fed-sr-26-2", requirement: "Fraud models that are 'complex quantitative methods' are models: validation, monitoring and outcomes analysis scaled to materiality.", when: "In force from Apr 17, 2026" },
      { rule: "ECOA / Regulation B adverse action", docSlug: "cfpb-ecoa-regulation-b-adverse-action", requirement: "A fraud-driven decline of a credit application is still an adverse action needing specific reasons.", when: "In force" },
      { rule: "ECB Supervision Newsletter on credit scoring and fraud", docSlug: "ecb-supervision-newsletter-ai-credit-scoring-fraud-2025", requirement: "Decision trees dominate, neural networks used mainly for fraud, no self-learning after deployment; gaps on explainability and data standards.", when: "Published Nov 20, 2025" },
      { rule: "EBA report on AI adoption", docSlug: "eba-ai-adoption-report-2025", requirement: "AML/CFT and fraud detection among the dominant AI uses at EU banks; fraud alerts the most common consumer-facing generative-AI use.", when: "Published Sep 25, 2025" }
    ]
  },
  {
    id: "public",
    title: "What the public sector's own results show",
    question: "Does AI fraud detection work at scale?",
    answer:
      "The best public number is Treasury's: machine learning that expedites identification of Treasury check fraud accounted for $1 billion of the $4 billion in fraud and improper payments prevented or recovered in fiscal 2024, across about 1.4 billion payments a year. The same Treasury found a 'fraud data divide' that leaves smaller banks without enough data to train comparable models, which is why data sharing and vendor models matter more to community banks than to the largest.",
    rows: [
      { rule: "Treasury $4B fraud-prevention announcement", docSlug: "treasury-ml-fraud-prevention-fy2024", requirement: "$1 billion of FY2024 recoveries attributed to machine-learning check-fraud detection; $2.5 billion from prioritising high-risk transactions.", when: "Published Oct 17, 2024" },
      { rule: "Treasury AI cybersecurity risks report", docSlug: "treasury-ai-cybersecurity-risks-report-2024", requirement: "A 'fraud data divide' between large and small institutions; proposals for data sharing and vendor-AI 'nutrition labels'.", when: "Published Mar 27, 2024" },
      { rule: "Treasury AI in Financial Services report", docSlug: "treasury-ai-financial-services-report-2024", requirement: "Sector-wide findings on AI use, including fraud detection, from the 2024 request for information.", when: "Published Dec 19, 2024" }
    ]
  }
];

export const FRAUD_TIMELINE: HubEvent[] = [
  { date: "2018-12-03", title: "Agencies encourage AI in BSA/AML monitoring", docSlug: "fincen-joint-statement-innovation-2018" },
  { date: "2024-01-25", title: "CFTC warns customers about AI-branded trading scams", docSlug: "cftc-ai-scams-customer-advisory-2024" },
  { date: "2024-03-27", title: "Treasury names the 'fraud data divide'", docSlug: "treasury-ai-cybersecurity-risks-report-2024" },
  { date: "2024-05-22", title: "FDIC Risk Review: deepfakes defeat authentication", docSlug: "fdic-risk-review-2024" },
  { date: "2024-07-12", title: "EU AI Act exempts fraud detection from the high-risk credit category", docSlug: "eu-ai-act-regulation-2024-1689" },
  { date: "2024-10-16", title: "DFS maps AI-enabled social engineering to Part 500", docSlug: "ny-dfs-industry-letter-2024-10-16-ai-cyber-risks" },
  { date: "2024-10-17", title: "Treasury: $1 billion recovered by machine-learning check-fraud detection", docSlug: "treasury-ml-fraud-prevention-fy2024" },
  { date: "2024-11-13", title: "FinCEN deepfake media alert", docSlug: "fincen-alert-2024-deepfake-media" },
  { date: "2025-11-20", title: "ECB workshops on AI for credit scoring and fraud", docSlug: "ecb-supervision-newsletter-ai-credit-scoring-fraud-2025" },
  { date: "2026-04-10", title: "FinCEN proposal credits 'effective use of AI' in AML programmes", docSlug: "fincen-aml-cft-program-nprm-2026" },
  { date: "2026-05-07", title: "OCC: AI transforming the cyber and fraud threat landscape", docSlug: "occ-semiannual-risk-perspective-spring-2026" },
  { date: "2026-07-07", title: "ECB Dear-CEO letter on AI-enabled cyber threats", docSlug: "ecb-letter-ai-enabled-cybersecurity-threats-2026" },
  { date: "2026-07-24", title: "FinCEN alert on AI-assisted student-aid fraud", docSlug: "fincen-alert-2026-federal-student-aid-fraud" }
];

export const FRAUD_FAQ = [
  { q: "Is AI fraud detection regulated differently from other bank AI?", a: "It is treated more leniently. The EU AI Act excludes systems used solely to detect financial fraud from its high-risk credit-scoring category, US agencies have encouraged AI in BSA/AML monitoring since 2018 and FinCEN's 2026 proposal counts effective use of AI in a bank's favour. What still applies: model-risk validation in proportion to materiality, adverse-action duties when a fraud score declines a customer, and data governance over the training data." },
  { q: "What are regulators warning banks about?", a: "Deepfake identity documents, voices and video that defeat onboarding and authentication (FinCEN, FDIC, DFS), AI that lowers the cost and raises the speed of cyberattacks (OCC, ECB, DFS), synthetic identities in benefit fraud (FinCEN), and AI-branded investment scams aimed at customers (CFTC)." },
  { q: "How many of the largest US banks run AI against fraud?", a: "The bank pages on this site record an AI fraud or scam-defence use case at half of the 100 largest US banks, most of them described as in production; the table below lists each with its source." },
  { q: "Where does the fraud data divide bite?", a: "Treasury's 2024 report found smaller institutions lack the data to train their own anti-fraud models, which pushes them to vendor models and consortium data. Third-party risk guidance (SR 23-4) then applies to the vendor relationship, and the bank remains responsible for validating what it buys." }
];

export const HUB_DOC_SLUGS: string[] = Array.from(
  new Set([
    ...GOVERNANCE_PILLARS.flatMap((p) => p.rows.map((r) => r.docSlug)),
    ...GOVERNANCE_TIMELINE.map((e) => e.docSlug),
    ...FRAUD_SECTIONS.flatMap((p) => p.rows.map((r) => r.docSlug)),
    ...FRAUD_TIMELINE.map((e) => e.docSlug)
  ])
);

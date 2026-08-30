// Primary-source documents for the AI-in-banking regulation tracker.
// One entry per bulletin / circular / regulation / report / speech. See the
// RegDocument type in lib/regulators.ts and the maintenance procedure in
// docs/ai-regulation-tracker.md. Built from primary-source research on
// 2026-08-26; hand-maintained since. Ordered by authority (hub order), then
// by publication date.

import type { RegDocument } from "@/lib/regulators";

export const DOCUMENTS: RegDocument[] = [
  {
    "slug": "fed-sr-11-7",
    "authority": "federal-reserve",
    "shortName": "SR 11-7",
    "title": "Supervisory Guidance on Model Risk Management",
    "aliases": [
      "SR 11-7",
      "SR Letter 11-7",
      "OCC 2011-12"
    ],
    "docType": "Guidance",
    "status": "Superseded",
    "date": "2011-04-04",
    "effectiveDate": "2011-04-04",
    "supersededBy": "fed-sr-26-2",
    "link": "https://www.federalreserve.gov/boarddocs/srletters/2011/sr1107.htm",
    "appliesTo": "All banking organizations supervised by the Federal Reserve (issued jointly with the OCC as Bulletin 2011-12); most relevant to institutions with material model use",
    "answerFirst": "SR 11-7, issued jointly by the Federal Reserve and OCC on April 4, 2011, was the foundational US framework for bank model risk management for fifteen years and the de facto global template for validating quantitative models, including early machine-learning models. It defined a model as a quantitative method that processes input data into estimates, required independent validation and 'effective challenge', and made the board and senior management accountable for a model inventory and governance framework. It was superseded on April 17, 2026 by revised interagency guidance (Fed SR 26-2 / OCC Bulletin 2026-13).",
    "keyPoints": [
      "Defines a 'model' as a quantitative method, system, or approach that applies statistical, economic, financial, or mathematical theories, techniques, and assumptions to process input data into quantitative estimates — a definition banks applied to ML and AI models",
      "Defines model risk as the potential for adverse consequences from decisions based on incorrect or misused model outputs, arising from fundamental errors or from misuse",
      "Requires sound model development, implementation, and use, with documentation sufficient for independent review",
      "Requires validation comprising conceptual soundness review, ongoing monitoring (including benchmarking), and outcomes analysis (including back-testing)",
      "Introduced 'effective challenge' — critical analysis by objective, informed parties with the incentives, competence, and influence to force changes",
      "Requires a governance framework: board and senior management oversight, policies and procedures, a model inventory, and internal audit assessment",
      "Extends expectations to vendor and third-party models, requiring banks to validate and understand models they did not build"
    ],
    "whatChanged": "SR 11-7 turned model governance into an examinable discipline with formal roles (developers, validators, internal audit) and a comprehensive model inventory. Because its model definition was technology-neutral, banks used it for machine-learning credit, fraud, and AML models throughout the 2010s and early 2020s, and its validation language was borrowed by regulators worldwide. Its 2026 replacement keeps the same architecture but narrows scope, adds materiality-based tailoring, and explicitly carves out generative and agentic AI.",
    "useCases": [
      "model-risk",
      "credit-underwriting",
      "aml-kyc",
      "fraud",
      "governance-general",
      "third-party-vendors"
    ],
    "faq": [
      {
        "q": "Is SR 11-7 still in effect?",
        "a": "No. SR 11-7 was superseded on April 17, 2026 by SR 26-2, the revised interagency model risk management guidance issued by the Federal Reserve, OCC, and FDIC. Its core disciplines (validation, effective challenge, governance, model inventory) carry over into the new guidance."
      },
      {
        "q": "Did SR 11-7 apply to machine-learning models?",
        "a": "Yes in practice. Its technology-neutral definition of a model covered any quantitative method processing inputs into estimates, so banks and examiners applied it to ML underwriting, fraud, and AML models. SR 26-2 now covers AI/ML models explicitly but excludes generative and agentic AI."
      },
      {
        "q": "What does 'effective challenge' mean under SR 11-7?",
        "a": "Critical analysis of a model by objective, informed parties who have the incentives, competence, and organizational influence to identify limitations and force changes. It is the central validation principle and survives in the 2026 revision."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fed-interagency-ai-rfi-2021",
    "authority": "federal-reserve",
    "shortName": "2021 Interagency AI RFI",
    "title": "Request for Information and Comment on Financial Institutions' Use of Artificial Intelligence, Including Machine Learning",
    "aliases": [
      "2021 interagency RFI on AI",
      "Interagency AI RFI",
      "RFI on Financial Institutions' Use of Artificial Intelligence",
      "Docket 2021-06607"
    ],
    "docType": "Consultation",
    "status": "Final",
    "date": "2021-03-31",
    "commentDeadline": "2021-07-01",
    "interagency": [
      "occ-bulletin-2021-17-ai-rfi",
      "fdic-fil-20-2021",
      "ncua-interagency-ai-rfi-2021"
    ],
    "link": "https://www.federalregister.gov/documents/2021/03/31/2021-06607/request-for-information-and-comment-on-financial-institutions-use-of-artificial-intelligence-including-machine-learning",
    "appliesTo": "Banks, savings associations, credit unions, and other financial institutions supervised by the Fed, OCC, FDIC, CFPB, and NCUA (information-gathering only; no obligations)",
    "answerFirst": "On March 31, 2021 the Federal Reserve, OCC, FDIC, CFPB, and NCUA jointly published a request for information on how financial institutions use artificial intelligence and machine learning and how existing rules and guidance apply. It asked 17 questions covering explainability, data quality and bias, overfitting, cybersecurity, dynamic updating of models, third-party AI, community-bank use, and fair lending. The comment period, originally closing June 1, 2021, was extended to July 1, 2021. No rule followed, but it remains the clearest statement of the issues US bank regulators examine when reviewing AI.",
    "keyPoints": [
      "Five agencies: Federal Reserve Board, OCC, FDIC, CFPB, and NCUA — the first joint federal AI consultation for financial institutions",
      "Catalogs AI use cases the agencies had observed: fraud identification, personalization of services, credit decisions, risk management, textual analysis, and cybersecurity",
      "Identifies explainability as a central risk, including the ability to give ECOA/Regulation B adverse-action reasons from complex models",
      "Flags data-related risks: quality, representativeness, and the potential for bias in alternative data and training sets",
      "Raises overfitting, dynamic updating (models that change as they ingest new data), and the challenge of validating vendor-supplied AI",
      "Asks specifically about community institutions' reliance on third-party AI providers and about fair-lending compliance",
      "Points to existing frameworks that already apply — SR 11-7 / OCC 2011-12 model risk guidance, third-party risk guidance, ECOA, FCRA, and UDAAP"
    ],
    "whatChanged": "The RFI did not create new obligations, but it established the agencies' shared vocabulary for AI risk — explainability, data bias, dynamic updating, third-party dependence — that later surfaced in CFPB adverse-action circulars, the 2023 third-party risk guidance, and the 2026 model risk revision. Banks still cite it as the map of what examiners expect them to have answers for.",
    "useCases": [
      "model-risk",
      "credit-underwriting",
      "fair-lending",
      "fraud",
      "third-party-vendors",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Did the 2021 interagency AI RFI result in a rule?",
        "a": "No. It was an information-gathering exercise by the Fed, OCC, FDIC, CFPB, and NCUA. The agencies used the responses to inform later actions, including the 2023 third-party risk guidance and the April 2026 revised model risk management guidance."
      },
      {
        "q": "What AI risks did the 2021 RFI focus on?",
        "a": "Explainability, data quality and bias, overfitting, cybersecurity, dynamic model updating, oversight of third-party AI, community-bank reliance on vendors, and fair lending under ECOA and FCRA."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fed-bsa-aml-model-risk-statement-2021",
    "authority": "federal-reserve",
    "shortName": "2021 BSA/AML Model Risk Statement",
    "title": "Interagency Statement on Model Risk Management for Bank Systems Supporting BSA/AML Compliance",
    "aliases": [
      "SR 21-8",
      "BSA/AML model risk management statement",
      "OCC 2021-19"
    ],
    "docType": "Guidance",
    "status": "Superseded",
    "date": "2021-04-09",
    "effectiveDate": "2021-04-09",
    "supersededBy": "fed-sr-26-2",
    "interagency": [
      "occ-bulletin-2021-19",
      "fdic-fil-27-2021",
      "fincen-bsa-aml-model-risk-statement-2021"
    ],
    "link": "https://www.federalreserve.gov/newsevents/pressreleases/bcreg20210409a.htm",
    "appliesTo": "Banks supervised by the Federal Reserve, OCC, FDIC, and NCUA that use models or automated systems for BSA/AML compliance (transaction monitoring, customer risk rating)",
    "answerFirst": "On April 9, 2021 the Federal Reserve (as SR 21-8), OCC, FDIC, and NCUA, with FinCEN concurrence, issued a statement on how model risk management principles apply to systems banks use for Bank Secrecy Act / anti-money-laundering compliance, and simultaneously asked for comment on it. It confirmed that SR 11-7 principles are flexible enough for BSA/AML systems, that banks may update or test innovative approaches — including machine learning — without automatically triggering full revalidation, and that the statement created no new requirements. It was superseded by SR 26-2 on April 17, 2026.",
    "keyPoints": [
      "Clarifies that model risk management guidance (SR 11-7 / OCC 2011-12) is principles-based and applies flexibly to BSA/AML transaction-monitoring and customer-risk-rating systems",
      "States that not every BSA/AML system is a 'model' — banks decide, using their own risk-based framework, which systems fall within model risk management",
      "Encourages responsible innovation: testing or piloting innovative approaches such as machine learning need not by itself require full model validation before use",
      "Confirms that BSA/AML system changes (rule-threshold updates, scenario tuning) can be managed proportionately rather than through full revalidation",
      "Emphasizes that the statement does not alter existing legal requirements or create new supervisory expectations",
      "Issued with a companion request for information on how model risk principles support BSA/AML compliance"
    ],
    "whatChanged": "Before this statement, many banks treated any change to AML monitoring — including adopting ML for alert triage — as a full model revalidation event, which slowed adoption. The 2021 statement gave supervisory cover for proportionate, risk-based treatment and for piloting ML in AML. Its substance was folded into the 2026 revised model risk guidance, which rescinded it as a standalone document.",
    "useCases": [
      "aml-kyc",
      "model-risk",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Is the 2021 BSA/AML model risk management statement (SR 21-8) still in effect?",
        "a": "No. SR 21-8 was superseded on April 17, 2026 by SR 26-2, the revised interagency model risk management guidance, which now covers BSA/AML models within its general framework."
      },
      {
        "q": "Does using machine learning for AML transaction monitoring require full model validation?",
        "a": "The 2021 statement said piloting or testing innovative approaches such as ML need not automatically trigger full validation, and that banks should apply model risk management proportionately. Under SR 26-2 the same risk-based, materiality-driven approach applies to AML models."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fed-sr-23-4",
    "authority": "federal-reserve",
    "shortName": "SR 23-4",
    "title": "Interagency Guidance on Third-Party Relationships: Risk Management",
    "aliases": [
      "SR 23-4",
      "SR Letter 23-4",
      "2023 third-party risk management guidance",
      "Interagency Guidance on Third-Party Relationships"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2023-06-07",
    "effectiveDate": "2023-06-07",
    "interagency": [
      "occ-bulletin-2023-17",
      "fdic-fil-29-2023"
    ],
    "link": "https://www.federalreserve.gov/supervisionreg/srletters/SR2304.htm",
    "appliesTo": "All banking organizations supervised by the Federal Reserve, regardless of size (issued jointly with the OCC and FDIC, replacing each agency's prior outsourcing guidance including SR 13-19)",
    "answerFirst": "SR 23-4, issued June 7, 2023 by the Federal Reserve, OCC, and FDIC, is the interagency guidance on managing risk from third-party relationships and is the framework examiners use when a bank buys AI tools, cloud-hosted models, or foundation-model access from vendors. It replaces the Fed's 2013 outsourcing guidance (SR 13-19), applies to all supervised banking organizations regardless of size, and sets out a lifecycle of planning, due diligence, contract negotiation, ongoing monitoring, and termination. Vice Chair Bowman said in May 2026 that supervisors are assessing how these expectations apply to vendor-provided AI.",
    "keyPoints": [
      "Covers the full lifecycle: planning, due diligence and third-party selection, contract negotiation, ongoing monitoring, and termination",
      "Applies to all third-party relationships, including fintech partnerships, cloud providers, and 'new or novel structures', with risk management tailored to the criticality of the activity",
      "Places responsibility on the board and management: a bank's use of third parties does not diminish its obligation to operate safely and in compliance with law",
      "Expects due diligence on a third party's information security, resilience, subcontracting, and — for models — validation consistent with model risk management guidance",
      "Requires contracts to address performance measures, data access and ownership, audit rights, incident notification, and termination",
      "Does not impose new legal requirements; the agencies committed to additional resources for community banks, delivered as a May 2024 guide on third-party risk for community banks"
    ],
    "whatChanged": "It replaced three inconsistent agency frameworks with one lifecycle-based standard and dropped the old distinction between 'outsourcing' and other vendor relationships. For AI specifically, it is the document that governs foundation-model vendor dependence, cloud-hosted ML platforms, and fintech AI partnerships — the risks the 2026 model risk guidance explicitly leaves to broader risk management. Banks pair SR 23-4 with SR 26-2 to cover vendor AI end to end.",
    "useCases": [
      "third-party-vendors",
      "generative-agentic-ai",
      "cybersecurity",
      "governance-general",
      "model-risk"
    ],
    "faq": [
      {
        "q": "Does SR 23-4 apply to a bank's use of a large-language-model vendor?",
        "a": "Yes. SR 23-4 covers all third-party relationships, and the Fed has said it is assessing how third-party risk-management expectations apply to vendor-provided AI tools. Due diligence, contract terms, and ongoing monitoring should be proportionate to how critical the AI tool is."
      },
      {
        "q": "Does SR 23-4 apply to community banks?",
        "a": "Yes. The guidance applies to all banking organizations supervised by the Fed, OCC, and FDIC regardless of size, with the expectation that risk management is scaled to the bank's complexity and the risk of the relationship."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fed-sr-26-2",
    "authority": "federal-reserve",
    "shortName": "SR 26-2",
    "title": "Revised Guidance on Model Risk Management",
    "aliases": [
      "SR 26-2",
      "SR Letter 26-2",
      "revised model risk management guidance",
      "2026 MRM guidance",
      "OCC Bulletin 2026-13"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2026-04-17",
    "effectiveDate": "2026-04-17",
    "supersedes": [
      "fed-sr-11-7",
      "fed-bsa-aml-model-risk-statement-2021"
    ],
    "interagency": [
      "occ-bulletin-2026-13",
      "fdic-fil-15-2026"
    ],
    "link": "https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm",
    "appliesTo": "All Fed-supervised banking organizations; expected to be most relevant to those with over $30 billion in total assets, and to smaller institutions with significant model exposure",
    "answerFirst": "SR 26-2, issued April 17, 2026 jointly by the Federal Reserve, OCC (Bulletin 2026-13), and FDIC, replaces SR 11-7 (2011) and the 2021 BSA/AML model risk statement (SR 21-8) with a risk-based, materiality-driven model risk management framework. It is expected to be most relevant to banking organizations with over $30 billion in total assets. It states that generative AI and agentic AI models 'are novel and rapidly evolving' and 'are not within the scope of this guidance', directing banks to use broader risk management and governance practices for them, and the agencies said they would issue a request for information on AI and model risk 'in the near future'.",
    "keyPoints": [
      "Supersedes SR 11-7 (April 4, 2011) and SR 21-8 (April 9, 2021); the OCC also rescinded Bulletins 2011-12, 2021-19, and 1997-24 and its Model Risk Management handbook booklet",
      "Defines a model as a complex quantitative method that applies statistical, economic, or financial theories to process input data into quantitative estimates; simple arithmetic and deterministic rule-based processes are excluded",
      "Explicitly excludes generative AI and agentic AI models from scope as 'novel and rapidly evolving', while telling banks to apply broader risk-management and governance practices to tools not covered",
      "Adopts a risk-based approach tailored to a bank's model risk profile, size, and complexity, with materiality driving the intensity of validation and monitoring",
      "Retains the core disciplines of SR 11-7: sound development and testing, independent validation including outcomes analysis, effective challenge, and board/senior-management governance",
      "Covers vendor and third-party models, expecting banks to understand and validate purchased models consistent with third-party risk management (SR 23-4)",
      "Most relevant to banking organizations over $30 billion in assets, but smaller banks with prevalent or complex models are expected to apply it proportionately"
    ],
    "whatChanged": "For traditional and machine-learning models, banks get relief from one-size-fits-all validation: materiality now governs how much rigor a model needs, and low-risk deterministic tools drop out of the model inventory. For generative and agentic AI the guidance creates a deliberate gap — no model-validation mandate, but an expectation that enterprise risk, vendor risk, data governance, and board oversight cover these systems until the promised interagency RFI and any follow-on guidance arrive.",
    "useCases": [
      "model-risk",
      "generative-agentic-ai",
      "credit-underwriting",
      "aml-kyc",
      "fraud",
      "third-party-vendors",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Does SR 26-2 apply to generative AI?",
        "a": "No. SR 26-2 states that generative AI and agentic AI models are novel and rapidly evolving and are not within its scope. Banks are instead expected to govern them through broader risk-management and governance practices, and the Fed, OCC, and FDIC said they would issue a request for information on AI and model risk."
      },
      {
        "q": "Which banks does SR 26-2 apply to?",
        "a": "All Fed-supervised banking organizations, but the letter says it is expected to be most relevant to those with more than $30 billion in total assets. Smaller banks with significant model exposure should apply it in proportion to their risk."
      },
      {
        "q": "What did SR 26-2 replace?",
        "a": "SR 11-7 (the 2011 model risk management guidance) and SR 21-8 (the 2021 interagency statement on model risk management for BSA/AML systems). At the OCC it replaced Bulletins 2011-12, 2021-19, and 1997-24."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fed-bowman-speech-ai-financial-system-2026",
    "authority": "federal-reserve",
    "shortName": "Bowman: AI in the Financial System (May 2026)",
    "title": "Artificial Intelligence in the Financial System — Vice Chair for Supervision Michelle W. Bowman",
    "aliases": [
      "Bowman AI speech",
      "Artificial Intelligence in the Financial System",
      "FSOC AI Series roundtable speech"
    ],
    "docType": "Speech",
    "status": "Final",
    "date": "2026-05-01",
    "link": "https://www.federalreserve.gov/newsevents/speech/bowman20260501a.htm",
    "appliesTo": "Statement of supervisory philosophy; not binding, but signals examination priorities for all Fed-supervised institutions",
    "answerFirst": "On May 1, 2026, Vice Chair for Supervision Michelle Bowman told the FSOC Artificial Intelligence Series roundtable on cybersecurity and risk management that AI 'will become a force multiplier for the financial system' and that supervisors must preserve 'a path for innovation' while banks deploy AI 'responsibly and effectively'. She confirmed the Fed had 'recently amended our model risk management guidance to clarify that it does not apply to generative or agentic AI', said supervisors are assessing third-party risk-management expectations for vendor-provided AI tools, and framed frontier AI as both a cybersecurity defense and a potential attack tool.",
    "keyPoints": [
      "Delivered at the FSOC Artificial Intelligence Series Roundtable on Cybersecurity and Risk Management, Washington, D.C., May 1, 2026",
      "Positions the Fed against pre-emptive AI-specific rulemaking: existing frameworks, regularly reviewed, should accommodate AI's evolution",
      "Confirms SR 26-2's carve-out of generative and agentic AI from model risk management guidance",
      "Identifies vendor-provided AI tools and third-party risk-management expectations as an active supervisory question",
      "Describes frontier AI models as dual-use in cybersecurity — able to enhance defenses and to identify and exploit weaknesses",
      "Notes that Fed supervisors have engaged with banks on AI use for nearly a decade and are building internal AI understanding"
    ],
    "whatChanged": "The speech is the clearest public articulation of the Fed's 2026 posture: innovation-permissive, no new AI rulebook, and reliance on model risk, third-party, and cybersecurity frameworks. For banks it signals that examiners will ask about governance of vendor AI and AI-enabled cyber threats rather than demand AI-specific policies.",
    "useCases": [
      "generative-agentic-ai",
      "third-party-vendors",
      "cybersecurity",
      "governance-general",
      "model-risk"
    ],
    "faq": [
      {
        "q": "What is the Federal Reserve's stance on AI regulation for banks in 2026?",
        "a": "Innovation-permissive. In her May 1, 2026 speech, Vice Chair for Supervision Bowman said supervisors should preserve a path for innovation, rely on existing frameworks that are regularly reviewed, and focus on responsible deployment, vendor AI risk, and cybersecurity rather than new AI-specific rules."
      },
      {
        "q": "Did the Fed say generative AI is outside model risk management guidance?",
        "a": "Yes. Bowman confirmed the Fed 'recently amended our model risk management guidance to clarify that it does not apply to generative or agentic AI', referring to SR 26-2 issued April 17, 2026."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fed-cook-speech-ai-economy-financial-system-2026",
    "authority": "federal-reserve",
    "shortName": "Cook: Opportunities and Risks of AI (May 2026)",
    "title": "The Opportunities and Risks AI Presents for the Economy and Financial System — Governor Lisa D. Cook",
    "aliases": [
      "Cook AI speech",
      "Opportunities and Risks AI Presents for the Economy and Financial System",
      "Cook Stanford SIEPR speech"
    ],
    "docType": "Speech",
    "status": "Final",
    "date": "2026-05-27",
    "link": "https://www.federalreserve.gov/newsevents/speech/cook20260527a.htm",
    "appliesTo": "Financial-stability analysis; not binding, but indicates where Fed monitoring of AI-related risk is focused",
    "answerFirst": "On May 27, 2026 at the Stanford Institute for Economic Policy Research, Governor Lisa Cook set out the Federal Reserve's financial-stability view of AI: AI-driven algorithmic trading risks 'more correlated trading, endogenous model collusion, potential market manipulation, and greater market concentration'; hyperscalers and data-center developers are increasingly financing AI capital expenditure through debt markets with bank exposure; and AI-generated code may outpace security review. She also said the Fed is building AI tools for its own financial-stability monitoring, including network-risk identification and scenario analysis.",
    "keyPoints": [
      "Warns that AI infrastructure investment is increasingly debt-financed by hyperscalers and data-center developers, creating credit and financial-stability exposures for lenders",
      "Identifies AI trading risks: correlated strategies, endogenous model collusion, potential market manipulation, and market concentration",
      "Flags cybersecurity as dual-edged: AI finds vulnerabilities for defenders and attackers alike, and rapid AI code generation strains security review",
      "Suggests 'the most significant reorganization of work in generations' may be approaching, with job losses possibly preceding gains",
      "Notes inflationary pressure from data-center, chip, and specialized-labor demand",
      "Describes the Fed's own use of AI for financial-stability surveillance and scenario analysis"
    ],
    "whatChanged": "The speech shifts Fed attention from AI inside banks to banks' exposure to the AI economy — loans to data-center and hyperscaler borrowers, and correlated AI-driven trading. Banks with large commercial exposures to AI infrastructure should expect stress-testing and supervisory questions on concentration and leverage in that financing chain.",
    "useCases": [
      "trading-markets",
      "cybersecurity",
      "governance-general"
    ],
    "faq": [
      {
        "q": "What financial-stability risks from AI has the Federal Reserve identified?",
        "a": "In May 2026 Governor Cook cited debt-financed AI infrastructure investment with bank exposure, correlated or collusive AI-driven trading, market concentration, and AI-enabled cyber threats, alongside labor-market disruption and inflationary pressure from data-center demand."
      },
      {
        "q": "Is the Fed worried about bank lending to AI data centers?",
        "a": "It is monitoring it. Cook noted hyperscalers and data-center developers are increasingly turning to debt markets, and commercial loans from banks are among the financing channels, creating emerging financial-stability implications."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "occ-bulletin-1997-24",
    "authority": "occ",
    "shortName": "OCC Bulletin 1997-24",
    "title": "Credit Scoring Models: Examination Guidance",
    "aliases": [
      "Bulletin 1997-24",
      "OCC 1997-24",
      "OCC Bulletin 1997-24",
      "1997 credit scoring bulletin"
    ],
    "docType": "Guidance",
    "status": "Superseded",
    "date": "1997-05-20",
    "effectiveDate": "1997-05-20",
    "supersededBy": "occ-bulletin-2026-13",
    "link": "https://www.occ.gov/static/rescinded-bulletins/bulletin-1997-24.pdf",
    "appliesTo": "National banks using credit scoring models (scorecards) in lending",
    "answerFirst": "OCC Bulletin 1997-24, 'Credit Scoring Models: Examination Guidance,' issued May 20, 1997, was the OCC's first supervisory statement on algorithmic credit decisions. It warned that credit scoring models, while valuable portfolio and risk-management tools, raised safety-and-soundness and fair-lending concerns when banks used them inconsistently, monitored them poorly, or relied on staff untrained to evaluate model performance. It was rescinded on April 17, 2026 by OCC Bulletin 2026-13.",
    "keyPoints": [
      "Issued May 20, 1997; accompanied by OCC news release 1997-46 alerting banks to the benefits and risks of credit scoring models.",
      "Identified concerns including inadequate staff training to monitor model performance, deficient management information systems, and inconsistent application of scoring models (overrides).",
      "Appendix set out safety-and-soundness and compliance issues, including fair-lending risk from models and variables that could have a disparate impact.",
      "Expected banks to validate models before use, track performance over time, and document override policies.",
      "Rescinded by OCC Bulletin 2026-13 on April 17, 2026; credit-scoring models now fall under the revised model risk guidance and fair-lending law (ECOA/Regulation B)."
    ],
    "whatChanged": "It established the principle — nearly thirty years before the AI debate — that an automated underwriting algorithm is subject to validation, monitoring, and fair-lending scrutiny. Its rescission in 2026 was a housekeeping step: modern credit-scoring and ML underwriting models are covered by Bulletin 2026-13, while the fair-lending expectations continue under ECOA and Regulation B.",
    "useCases": [
      "credit-underwriting",
      "fair-lending",
      "model-risk"
    ],
    "faq": [
      {
        "q": "Is OCC Bulletin 1997-24 still in effect?",
        "a": "No. It was rescinded on April 17, 2026 by OCC Bulletin 2026-13. Credit scoring models are now governed by the revised interagency model risk management guidance and by fair-lending law."
      },
      {
        "q": "What did the 1997 OCC credit scoring bulletin require?",
        "a": "It told national banks to validate credit scoring models, monitor their performance with adequate management information systems, train staff, apply the models consistently, and manage fair-lending risk in the model's variables and use."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "occ-bulletin-2011-12",
    "authority": "occ",
    "shortName": "OCC Bulletin 2011-12",
    "title": "Sound Practices for Model Risk Management: Supervisory Guidance on Model Risk Management",
    "aliases": [
      "Bulletin 2011-12",
      "OCC 2011-12",
      "OCC Bulletin 2011-12",
      "SR 11-7"
    ],
    "docType": "Guidance",
    "status": "Superseded",
    "date": "2011-04-04",
    "effectiveDate": "2011-04-04",
    "supersededBy": "occ-bulletin-2026-13",
    "link": "https://www.occ.gov/static/rescinded-bulletins/bulletin-2011-12.pdf",
    "appliesTo": "National banks and federal savings associations (and, via SR 11-7, Fed-supervised institutions)",
    "answerFirst": "OCC Bulletin 2011-12, issued April 4, 2011, transmitted the interagency Supervisory Guidance on Model Risk Management (the Federal Reserve's SR 11-7). For fifteen years it was the de facto rulebook for how US banks built, validated, and governed quantitative models, and it was the framework banks applied to machine-learning and AI models. It was rescinded on April 17, 2026 and replaced by OCC Bulletin 2026-13.",
    "keyPoints": [
      "Defined a model broadly as a quantitative method that applies statistical, economic, financial, or mathematical theories and assumptions to process input data into quantitative estimates — a definition banks later extended to ML and AI systems.",
      "Established the three pillars of model risk management: robust development, implementation, and use; sound validation; and governance, policies, and controls.",
      "Required independent validation with 'effective challenge' — critical analysis by objective, informed parties with the incentives, competence, and influence to force changes.",
      "Validation components: evaluation of conceptual soundness, ongoing monitoring including benchmarking and process verification, and outcomes analysis including back-testing.",
      "Called for a firm-wide model inventory and board and senior-management oversight of aggregate model risk.",
      "Applied to vendor and third-party models, with expectations that banks understand and validate what they buy.",
      "Rescinded by OCC Bulletin 2026-13 on April 17, 2026; the text remains available in the OCC's rescinded-bulletins archive."
    ],
    "whatChanged": "Because it was the only comprehensive federal statement on model governance, banks and examiners applied it to AI/ML models for over a decade even though it never mentioned AI. Its broad model definition and uniform validation expectations are what the 2026 revision deliberately trimmed. Banks still cite it for the vocabulary — effective challenge, conceptual soundness, outcomes analysis — that carries over into the 2026 guidance.",
    "useCases": [
      "model-risk",
      "credit-underwriting",
      "governance-general",
      "third-party-vendors"
    ],
    "faq": [
      {
        "q": "Is OCC 2011-12 the same as SR 11-7?",
        "a": "Yes. The OCC issued the interagency Supervisory Guidance on Model Risk Management as Bulletin 2011-12 on April 4, 2011; the Federal Reserve issued the identical guidance as SR Letter 11-7."
      },
      {
        "q": "Is OCC Bulletin 2011-12 still in effect?",
        "a": "No. It was rescinded on April 17, 2026 and superseded by OCC Bulletin 2026-13, the revised interagency model risk management guidance."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "occ-bulletin-2021-17-ai-rfi",
    "authority": "occ",
    "shortName": "2021 Interagency AI RFI (OCC Bulletin 2021-17)",
    "title": "Request for Information and Comment on Financial Institutions' Use of Artificial Intelligence, Including Machine Learning",
    "aliases": [
      "Bulletin 2021-17",
      "OCC 2021-17",
      "2021 AI RFI",
      "interagency RFI on artificial intelligence"
    ],
    "docType": "Consultation",
    "status": "Final",
    "date": "2021-03-31",
    "commentDeadline": "2021-07-01",
    "interagency": [
      "fed-interagency-ai-rfi-2021",
      "fdic-fil-20-2021",
      "ncua-interagency-ai-rfi-2021"
    ],
    "link": "https://www.federalregister.gov/documents/2021/03/31/2021-06607/request-for-information-and-comment-on-financial-institutions-use-of-artificial-intelligence-including-machine-learning",
    "appliesTo": "All insured depository institutions and credit unions supervised by the OCC, Federal Reserve, FDIC, CFPB, and NCUA (information request; no obligations)",
    "answerFirst": "On March 31, 2021 the OCC, Federal Reserve, FDIC, CFPB, and NCUA jointly published a Request for Information on financial institutions' use of artificial intelligence, including machine learning — the first coordinated federal inquiry into bank AI. The OCC transmitted it as Bulletin 2021-17. It asked about explainability, data quality and bias, overfitting, cybersecurity, dynamic updating, third-party AI, and fair-lending compliance, and whether existing guidance was adequate. Comments were originally due June 1, 2021 and the deadline was extended to July 1, 2021. No AI-specific rule followed; the agencies instead relied on model risk management and fair-lending law.",
    "keyPoints": [
      "Five agencies: OCC, Federal Reserve Board, FDIC, CFPB, and NCUA; published in the Federal Register on March 31, 2021 (86 FR 16837).",
      "Sought information on AI uses including fraud detection, credit underwriting, customer service chatbots, AML/BSA monitoring, and cybersecurity.",
      "Listed risk topics: explainability, broader or more intensive data use, overfitting, cybersecurity, dynamic updating, use by community institutions, third-party oversight, and fair lending.",
      "Asked whether existing guidance — the 2011 model risk management guidance, third-party risk guidance, and consumer-protection law — sufficiently addressed AI.",
      "Comment deadline extended from June 1 to July 1, 2021.",
      "Did not itself impose requirements; its practical result was to confirm that AI would be supervised through existing frameworks rather than a new AI rule."
    ],
    "whatChanged": "The RFI changed nothing legally, but it fixed the federal vocabulary for AI risk in banking (explainability, dynamic updating, third-party AI) that examiners still use, and its conclusion — no new AI rule, rely on model risk management and fair-lending law — set the posture that lasted until the 2026 model risk revision. The 2026 guidance's promise of a new AI-focused RFI is effectively a sequel to this one.",
    "useCases": [
      "governance-general",
      "credit-underwriting",
      "fair-lending",
      "aml-kyc",
      "fraud",
      "customer-chatbots",
      "third-party-vendors"
    ],
    "faq": [
      {
        "q": "Did the 2021 interagency AI RFI result in any rule?",
        "a": "No. The five agencies gathered comments (deadline extended to July 1, 2021) but did not issue an AI-specific rule; AI has continued to be supervised through model risk management, third-party risk, and fair-lending frameworks."
      },
      {
        "q": "What is OCC Bulletin 2021-17?",
        "a": "It is the OCC's transmittal of the March 31, 2021 interagency Request for Information on financial institutions' use of AI and machine learning, issued jointly with the Fed, FDIC, CFPB, and NCUA."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "occ-bulletin-2021-19",
    "authority": "occ",
    "shortName": "OCC Bulletin 2021-19",
    "title": "Bank Secrecy Act/Anti-Money Laundering: Interagency Statement on Model Risk Management for Bank Systems Supporting BSA/AML Compliance and Request for Information",
    "aliases": [
      "Bulletin 2021-19",
      "OCC 2021-19",
      "OCC Bulletin 2021-19",
      "BSA/AML model risk management statement"
    ],
    "docType": "Guidance",
    "status": "Superseded",
    "date": "2021-04-09",
    "effectiveDate": "2021-04-09",
    "commentDeadline": "2021-06-11",
    "supersededBy": "occ-bulletin-2026-13",
    "interagency": [
      "fed-bsa-aml-model-risk-statement-2021",
      "fdic-fil-27-2021",
      "fincen-bsa-aml-model-risk-statement-2021"
    ],
    "link": "https://www.occ.gov/static/rescinded-bulletins/bulletin-2021-19.pdf",
    "appliesTo": "National banks and federal savings associations; issued jointly by the OCC, Federal Reserve, FDIC, and NCUA with FinCEN concurrence",
    "answerFirst": "OCC Bulletin 2021-19, issued April 9, 2021, transmitted the interagency Statement on Model Risk Management for Bank Systems Supporting BSA/AML Compliance, issued by the OCC, Federal Reserve, FDIC, and NCUA in consultation with FinCEN, together with a request for information (comments due June 11, 2021). It clarified how the 2011 model risk guidance applied to transaction-monitoring, sanctions-screening, and customer-risk-rating systems, and said that banks could test and update those systems — including with new technology such as machine learning — without automatic supervisory criticism. It was rescinded on April 17, 2026 by OCC Bulletin 2026-13.",
    "keyPoints": [
      "Confirmed that the 2011 model risk management guidance (OCC 2011-12 / SR 11-7) was flexible, risk-based, and not itself a legal requirement for BSA/AML systems.",
      "Explained that not every BSA/AML system is a 'model'; banks had discretion to decide which automated tools warranted model-risk treatment.",
      "Encouraged responsible innovation, including machine learning and other new technologies, in AML monitoring, stating that changes or upgrades to systems would not by themselves trigger supervisory action.",
      "Issued with an interagency RFI on model risk management for BSA/AML systems; comments were due June 11, 2021.",
      "Complemented the December 2018 interagency statement on innovative approaches to BSA/AML compliance.",
      "Rescinded April 17, 2026 by OCC Bulletin 2026-13, whose narrower model definition and risk-based approach absorb its message."
    ],
    "whatChanged": "It was the first federal statement to say explicitly that AML systems using machine learning could be adopted and iterated without the full weight of model validation each time — a green light for AI in AML. The 2026 revision made that flexibility general rather than AML-specific, which is why the standalone statement was withdrawn.",
    "useCases": [
      "aml-kyc",
      "model-risk",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Does the BSA/AML model risk statement still apply?",
        "a": "Not as a standalone document — OCC Bulletin 2021-19 was rescinded on April 17, 2026. Its risk-based approach to AML transaction-monitoring and machine-learning tools now flows from OCC Bulletin 2026-13, the revised interagency model risk guidance."
      },
      {
        "q": "Can banks use machine learning in AML monitoring without full model validation?",
        "a": "The 2021 statement said banks have flexibility to decide which BSA/AML tools are models and to test and update systems, including with machine learning, without automatic supervisory criticism. The 2026 guidance keeps that risk-based, materiality-driven approach."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "occ-bulletin-2023-17",
    "authority": "occ",
    "shortName": "OCC Bulletin 2023-17",
    "title": "Third-Party Relationships: Interagency Guidance on Risk Management",
    "aliases": [
      "Bulletin 2023-17",
      "OCC 2023-17",
      "OCC Bulletin 2023-17",
      "2023 interagency third-party guidance",
      "SR 23-4"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2023-06-06",
    "effectiveDate": "2023-06-06",
    "interagency": [
      "fed-sr-23-4",
      "fdic-fil-29-2023"
    ],
    "link": "https://www.occ.gov/news-issuances/bulletins/2023/bulletin-2023-17.html",
    "appliesTo": "All OCC-supervised national banks, federal savings associations, and federal branches and agencies of foreign banks; issued jointly with the Federal Reserve and FDIC for all banking organizations",
    "answerFirst": "OCC Bulletin 2023-17, issued June 6, 2023, transmits the interagency Guidance on Third-Party Relationships: Risk Management from the OCC, Federal Reserve, and FDIC. It replaces the OCC's 2013 third-party guidance (Bulletin 2013-29) and 2020 FAQs (Bulletin 2020-10) and is the framework banks apply to AI vendors, cloud and model providers, and fintech partners. It sets a five-stage lifecycle — planning, due diligence and selection, contract negotiation, ongoing monitoring, and termination — with expectations scaled to the risk and criticality of each relationship.",
    "keyPoints": [
      "Joint OCC/Fed/FDIC guidance; the OCC rescinded Bulletin 2013-29 and Bulletin 2020-10 (third-party FAQs).",
      "Applies to all business arrangements with third parties, including fintech partnerships, technology service providers, and vendors of models and AI tools.",
      "Risk management lifecycle: planning, due diligence and third-party selection, contract negotiation, ongoing monitoring, and termination, plus governance (oversight, documentation, independent review).",
      "Not all relationships carry the same risk: banks should identify 'critical activities' and apply more rigorous oversight there.",
      "Due diligence expectations cover information security, business resilience, subcontractors, and the third party's own risk management — the basis for questions banks ask AI and cloud providers.",
      "Non-compliance is not itself a basis for enforcement; it is supervisory guidance, applied through examinations."
    ],
    "whatChanged": "It unified three agencies' third-party regimes and, for AI, became the operative document: most bank AI is bought rather than built, and examiners assess model and AI vendors through this lifecycle. Bulletin 2026-13 refers to vendor and third-party models and expects model-risk and third-party programs to work together; the Spring 2026 risk report also emphasises support for community banks that rely on third-party technology.",
    "useCases": [
      "third-party-vendors",
      "generative-agentic-ai",
      "model-risk",
      "governance-general",
      "cybersecurity"
    ],
    "faq": [
      {
        "q": "Does the 2023 third-party guidance cover AI vendors?",
        "a": "Yes. It applies to all third-party business arrangements, including providers of AI models, cloud platforms, and fintech partners, with due diligence and ongoing monitoring scaled to the criticality of the activity."
      },
      {
        "q": "What did OCC Bulletin 2023-17 replace?",
        "a": "OCC Bulletin 2013-29 (Third-Party Relationships: Risk Management Guidance) and OCC Bulletin 2020-10 (the 2020 FAQs supplementing it)."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "occ-hood-responsible-ai-speech-2025",
    "authority": "occ",
    "shortName": "Acting Comptroller Hood, 'AI in Financial Services' (Apr 2025)",
    "title": "Remarks by Acting Comptroller Rodney E. Hood at the National Fair Housing Alliance's Responsible AI Symposium: 'AI in Financial Services'",
    "aliases": [
      "NR 2025-38",
      "Responsible AI Symposium remarks",
      "Hood AI in Financial Services speech"
    ],
    "docType": "Speech",
    "status": "Final",
    "date": "2025-04-29",
    "link": "https://www.occ.treas.gov/news-issuances/news-releases/2025/nr-occ-2025-38.html",
    "appliesTo": "National banks and federal savings associations (statement of supervisory posture, not requirements)",
    "answerFirst": "On April 29, 2025 Acting Comptroller Rodney E. Hood told the National Fair Housing Alliance's Responsible AI Symposium that the OCC is committed to AI being used 'ethically and responsibly' in banking. He said the OCC expects 'robust risk management practices for AI applications, consistent with conventional model risk management practices,' covering bias, security vulnerabilities, and explainability, and that banks should apply existing OCC and interagency guidance as part of their AI governance. The speech is the clearest pre-2026 statement of the OCC's innovation-friendly but risk-managed AI stance.",
    "keyPoints": [
      "Frames the United States as a global leader in AI innovation and the OCC as supporting responsible bank adoption.",
      "Notes OCC observations of banks using AI across risk management, fraud detection, and customer service, with benefits for efficiency and inclusion.",
      "States that AI is 'generally more complex' than conventional analytics and that some uses produce outputs that are 'more difficult to understand or explain.'",
      "Expects banks to assess and mitigate AI risks including bias, security vulnerabilities, and explainability, consistent with conventional model risk management.",
      "Points banks to existing OCC and interagency guidance for AI governance, and to the OCC's Office of Financial Technology, which evaluates fintech developments including AI.",
      "Highlights Project REACh as the OCC's financial-inclusion initiative alongside responsible AI."
    ],
    "whatChanged": "It signalled that the 2025 OCC would not write an AI rule but would hold banks to model-risk and fair-lending expectations while encouraging adoption — the posture then formalised by Bulletin 2026-13's carve-out of generative AI and the Spring 2026 risk report's review of supervisory expectations. Jonathan V. Gould succeeded Hood as Comptroller on July 15, 2025 and has continued the innovation-first framing.",
    "useCases": [
      "governance-general",
      "fair-lending",
      "model-risk",
      "credit-underwriting"
    ],
    "faq": [
      {
        "q": "What is the OCC's official stance on AI in banking?",
        "a": "Innovation-friendly but risk-managed: the OCC has said it supports responsible AI adoption, expects risk management consistent with model risk management practices (bias, security, explainability), and relies on existing guidance rather than an AI-specific rule."
      },
      {
        "q": "Does the OCC require explainability for AI models?",
        "a": "There is no explicit explainability rule, but Acting Comptroller Hood's April 2025 remarks and the 2011/2026 model risk frameworks expect banks to understand how their models work and to manage the risk that AI outputs are difficult to explain, especially in credit decisions subject to ECOA adverse-action notice requirements."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "occ-bulletin-2026-13",
    "authority": "occ",
    "shortName": "OCC Bulletin 2026-13",
    "title": "Model Risk Management: Revised Guidance",
    "aliases": [
      "Bulletin 2026-13",
      "OCC 2026-13",
      "OCC Bulletin 2026-13",
      "SR 26-2",
      "FIL-15-2026"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2026-04-17",
    "effectiveDate": "2026-04-17",
    "supersedes": [
      "occ-bulletin-2011-12",
      "occ-bulletin-1997-24",
      "occ-bulletin-2021-19",
      "fed-sr-11-7"
    ],
    "interagency": [
      "fed-sr-26-2",
      "fdic-fil-15-2026"
    ],
    "link": "https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-13.html",
    "appliesTo": "All OCC-supervised national banks, federal savings associations, and federal branches and agencies of foreign banks; most directly relevant to banking organizations with more than $30 billion in total assets, and to smaller banks with significant model risk from model prevalence, complexity, or non-traditional activities",
    "answerFirst": "On April 17, 2026 the OCC, Federal Reserve, and FDIC issued revised interagency Model Risk Management guidance (OCC Bulletin 2026-13; Fed SR 26-2; FDIC FIL-15-2026), replacing the 2011 framework that had governed bank models for 15 years. The OCC rescinded Bulletins 2011-12, 1997-24, and 2021-19 and the Comptroller's Handbook 'Model Risk Management' booklet. The guidance narrows the definition of 'model,' states that generative AI and agentic AI models are 'novel and rapidly evolving' and outside its scope, and promises a forthcoming interagency request for information on model risk management and banks' use of AI.",
    "keyPoints": [
      "Defines a model as 'a complex quantitative method, system, or approach that applies statistical, economic, or financial theories to process input data into quantitative estimates'; simple spreadsheet calculations and deterministic rule-based processes are out of scope.",
      "Generative AI and agentic AI models are explicitly excluded from the guidance as 'novel and rapidly evolving'; banks are expected to manage them through broader risk-management and governance programs.",
      "Risk-based approach: model risk management should be commensurate with the bank's size, complexity, and model materiality, rather than a uniform validation standard for every model.",
      "Most directly relevant to banking organizations with more than $30 billion in total assets; smaller banks are covered only where model risk is significant.",
      "Covers model development and use, validation and ongoing monitoring, governance and controls, and vendor/third-party models.",
      "Rescinds OCC Bulletin 2011-12, OCC Bulletin 1997-24, OCC Bulletin 2021-19, and the 'Model Risk Management' booklet of the Comptroller's Handbook.",
      "Supervisory guidance, not a rule: the agencies state that non-compliance is not itself a basis for supervisory criticism or enforcement action.",
      "The OCC, Fed, and FDIC say they plan to issue 'in the near future' a request for information on model risk management and banks' use of AI, including generative AI, agentic AI, and AI-based models."
    ],
    "whatChanged": "Before April 2026, SR 11-7 / OCC 2011-12 was applied broadly, and many banks stretched it to cover every algorithm including machine-learning and generative-AI tools. The revised guidance narrows what counts as a model, tilts expectations toward proportionality (with a $30 billion asset marker), and deliberately leaves generative and agentic AI outside formal model-validation requirements. In practice, banks now need two tracks: a slimmer model-risk program for quantitative models, and an enterprise AI governance program for generative and agentic systems that examiners will still probe under safety-and-soundness expectations.",
    "useCases": [
      "model-risk",
      "generative-agentic-ai",
      "third-party-vendors",
      "governance-general",
      "credit-underwriting"
    ],
    "faq": [
      {
        "q": "Does OCC Bulletin 2026-13 apply to generative AI?",
        "a": "No. The guidance states that generative AI and agentic AI models are 'novel and rapidly evolving' and are not within its scope. Banks are expected to govern them through broader risk-management and governance programs, and the agencies have promised a request for information on AI and model risk."
      },
      {
        "q": "Which banks does the revised model risk guidance apply to?",
        "a": "It applies to all OCC-supervised institutions but is most directly relevant to banking organizations with more than $30 billion in total assets, plus smaller banks whose model use is significant because of prevalence, complexity, or non-traditional activities."
      },
      {
        "q": "Is SR 11-7 still in effect at national banks?",
        "a": "No. OCC Bulletin 2011-12, which transmitted the 2011 guidance (the Fed's SR 11-7), was rescinded on April 17, 2026 and replaced by Bulletin 2026-13."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "occ-semiannual-risk-perspective-spring-2026",
    "warning": true,
    "authority": "occ",
    "shortName": "OCC Semiannual Risk Perspective, Spring 2026",
    "title": "Semiannual Risk Perspective from the National Risk Committee, Spring 2026",
    "aliases": [
      "Semiannual Risk Perspective",
      "Spring 2026 Semiannual Risk Perspective",
      "NR 2026-35"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2026-05-07",
    "link": "https://www.occ.treas.gov/news-issuances/news-releases/2026/nr-occ-2026-35.html",
    "appliesTo": "National banks and federal savings associations (supervisory priorities, not requirements)",
    "answerFirst": "The OCC's Spring 2026 Semiannual Risk Perspective, released May 7, 2026, says artificial intelligence is 'significantly transforming the cyber threat landscape' — lowering the barrier to entry for attackers and increasing the 'speed, scale, and sophistication' of cyberattacks and fraud — while also giving banks new defensive capabilities. It reports that banks are taking a 'measured approach' to generative and agentic AI, with use limited to specific cases with guardrails and human-in-the-loop accountability, restates that the agencies plan an interagency request for information on AI and model risk management, and says the OCC is 'actively reviewing supervisory expectations, guidance, and regulations' to right-size AI expectations for community banks.",
    "keyPoints": [
      "Four headline risk themes: credit, market, operational, and compliance risk; AI appears under operational risk (cyber and fraud) and as an innovation opportunity.",
      "AI can 'facilitate fraud and enable automated reconnaissance, rapid vulnerability discovery' and increases the speed, scale, and sophistication of attacks; the OCC recommends multifactor authentication, timely patching, and using AI defensively.",
      "Observes that bank generative-AI and agentic-AI use is 'primarily productivity and customer experience enhancement tools,' generally with guardrails and human-in-the-loop accountability; banks may expand to 'material financial decisions.'",
      "Flags unique genAI/agentic challenges including lack of explainability, and states that appropriate governance and risk management are essential.",
      "Restates that genAI and agentic AI are outside the revised model risk guidance (Bulletin 2026-13) and that the agencies plan an interagency RFI on model risk management and banks' use of AI.",
      "Says the OCC is reviewing supervisory expectations, guidance, and regulations so AI opportunities are available to all OCC-supervised banks, with support for community banks that rely on third-party technology.",
      "Fraud and scams remain 'elevated' and rising in sophistication; foreign state-sponsored cyber actors continue to pose a threat."
    ],
    "whatChanged": "This is the clearest official statement of how the OCC currently sees bank AI in practice: measured genAI adoption, examiner attention on AI-enabled fraud and cyber, and an explicit intent to revisit supervisory expectations. It confirms the direction set by Bulletin 2026-13 and is the document to cite for the claim that further OCC AI guidance is coming.",
    "useCases": [
      "cybersecurity",
      "fraud",
      "generative-agentic-ai",
      "governance-general",
      "third-party-vendors"
    ],
    "faq": [
      {
        "q": "What does the OCC say about AI in its Spring 2026 risk report?",
        "a": "That AI is transforming the cyber threat landscape by lowering barriers for attackers and speeding up fraud, that banks are adopting generative and agentic AI cautiously with human-in-the-loop controls, and that the OCC is reviewing supervisory expectations and planning an interagency RFI on AI and model risk."
      },
      {
        "q": "Is the OCC planning new AI guidance?",
        "a": "The Spring 2026 Semiannual Risk Perspective says the OCC is 'actively reviewing supervisory expectations, guidance, and regulations' around AI and that the OCC, Fed, and FDIC plan to issue a request for information on model risk management and AI. No new guidance had been issued as of August 26, 2026."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fdic-fil-20-2021",
    "authority": "fdic",
    "shortName": "FDIC FIL-20-2021",
    "title": "Request for Information and Comment on Financial Institutions' Use of Artificial Intelligence, Including Machine Learning",
    "aliases": [
      "FIL-20-2021",
      "FDIC FIL-20-2021",
      "2021 interagency AI RFI",
      "RIN 3064-ZA24"
    ],
    "docType": "Consultation",
    "status": "Final",
    "date": "2021-03-29",
    "commentDeadline": "2021-07-01",
    "interagency": [
      "fed-interagency-ai-rfi-2021",
      "occ-bulletin-2021-17-ai-rfi",
      "ncua-interagency-ai-rfi-2021"
    ],
    "link": "https://www.fdic.gov/news/financial-institution-letters/2021/fil21020.html",
    "appliesTo": "All FDIC-supervised financial institutions (informational; no obligations)",
    "answerFirst": "On March 29, 2021 the FDIC issued FIL-20-2021 transmitting the first coordinated federal request for information on banks' use of AI and machine learning, issued jointly with the Federal Reserve, OCC, CFPB, and NCUA (FDIC docket RIN 3064-ZA24). Published in the Federal Register on March 31, 2021, it asked how institutions use AI, what governance, risk management, and controls they apply, what challenges they face, and whether regulatory clarification would help. Comments were originally due June 1, 2021 and, after an extension announced in FIL-34-2021, closed July 1, 2021.",
    "keyPoints": [
      "Five-agency RFI: FDIC, Federal Reserve, OCC, CFPB, and NCUA; Federal Register publication March 31, 2021.",
      "Asked about AI use cases including fraud prevention, customer-service personalization, and credit underwriting, plus explainability, data quality, dynamic updating, and third-party AI.",
      "Sought views on governance, risk management, and controls over AI and on whether existing laws and guidance needed clarification.",
      "Comment deadline extended from June 1 to July 1, 2021 (FIL-34-2021).",
      "No interagency AI rule or guidance resulted directly; the agencies instead revisited model risk management, culminating in the April 2026 revision."
    ],
    "whatChanged": "The RFI created no obligations but established the federal supervisors' shared framing of AI risk — explainability, data, overfitting, dynamic updating, and third-party dependence — that examiners have used since. It is the reference point news stories cite when noting that regulators have studied bank AI for five years without an AI-specific rule.",
    "useCases": [
      "governance-general",
      "credit-underwriting",
      "fraud",
      "model-risk"
    ],
    "faq": [
      {
        "q": "Did the 2021 AI RFI lead to any rule?",
        "a": "No. The agencies did not issue an AI-specific rule or guidance from the 2021 RFI. Its themes fed into supervisory practice and, ultimately, the April 2026 revised interagency model risk management guidance."
      },
      {
        "q": "When did comments on the 2021 AI RFI close?",
        "a": "July 1, 2021. The original June 1 deadline was extended by 30 days, announced by the FDIC in FIL-34-2021."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fdic-fil-27-2021",
    "authority": "fdic",
    "shortName": "FDIC FIL-27-2021",
    "title": "Interagency Statement on Model Risk Management for Bank Systems Supporting BSA/AML and OFAC Compliance",
    "aliases": [
      "FIL-27-2021",
      "FDIC FIL-27-2021",
      "BSA/AML model risk statement"
    ],
    "docType": "Guidance",
    "status": "Superseded",
    "date": "2021-04-09",
    "effectiveDate": "2021-04-09",
    "supersededBy": "fdic-fil-15-2026",
    "interagency": [
      "fed-bsa-aml-model-risk-statement-2021",
      "occ-bulletin-2021-19",
      "fincen-bsa-aml-model-risk-statement-2021"
    ],
    "link": "https://www.fdic.gov/news/financial-institution-letters/2021/fil21027.html",
    "appliesTo": "FDIC-supervised banks and savings associations (issued jointly with the Federal Reserve and OCC, in consultation with FinCEN and NCUA)",
    "answerFirst": "FIL-27-2021, dated April 9, 2021, transmitted an interagency statement explaining how the 2011 model risk management principles apply to the systems and models banks use for Bank Secrecy Act/anti-money-laundering and OFAC sanctions compliance — including machine-learning transaction monitoring. It created no new requirements, said no particular model risk framework was mandatory, and stressed that banks remain responsible for BSA/AML compliance even when they rely on third-party models. The FDIC rescinded it on April 17, 2026 in FIL-15-2026.",
    "keyPoints": [
      "Joint FDIC, Federal Reserve, and OCC statement issued in consultation with FinCEN and the NCUA.",
      "Clarified that the 2011 model risk guidance can be a useful resource for BSA/AML systems, whether the bank's framework is formal or informal.",
      "Did not alter BSA/AML legal requirements or create new supervisory expectations.",
      "Banks must understand how third-party AML models work and confirm they fit the bank's risk profile; using a vendor does not shift responsibility.",
      "Issued alongside an RFI on model risk management principles for BSA/AML (FDIC docket 3064-ZA23).",
      "Rescinded April 17, 2026 with the revised interagency model risk management guidance."
    ],
    "whatChanged": "Between 2021 and 2026 this statement was the main answer to whether AI-driven transaction monitoring needed full model validation: it said model-risk principles apply, flexibly. Its rescission folds AML and sanctions models into the general 2026 framework, and the FDIC's pending BSA program rule proposal encourages AI for detecting illicit finance.",
    "useCases": [
      "aml-kyc",
      "model-risk",
      "third-party-vendors"
    ],
    "faq": [
      {
        "q": "Is FIL-27-2021 still in effect?",
        "a": "No. The FDIC rescinded it on April 17, 2026 in FIL-15-2026. BSA/AML and OFAC models are now covered by the revised interagency model risk management guidance."
      },
      {
        "q": "Did the 2021 statement require formal validation of AML models?",
        "a": "No. It said no specific model risk management framework was required and that the 2011 principles could guide a formal or informal framework scaled to the bank's complexity."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fdic-fil-29-2023",
    "authority": "fdic",
    "shortName": "FDIC FIL-29-2023",
    "title": "Interagency Guidance on Third-Party Relationships: Risk Management",
    "aliases": [
      "FIL-29-2023",
      "FDIC FIL-29-2023",
      "third-party relationships guidance",
      "interagency third-party guidance"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2023-06-06",
    "effectiveDate": "2023-06-06",
    "interagency": [
      "fed-sr-23-4",
      "occ-bulletin-2023-17"
    ],
    "link": "https://www.fdic.gov/news/financial-institution-letters/2023/fil23029.html",
    "appliesTo": "All FDIC-supervised banking organizations, alongside OCC- and Federal Reserve-supervised institutions",
    "answerFirst": "FIL-29-2023, issued June 6, 2023, transmits the final Interagency Guidance on Third-Party Relationships: Risk Management from the FDIC, Federal Reserve, and OCC. It replaces the FDIC's 2008 third-party risk guidance (FIL-44-2008) and withdraws the 2016 proposed third-party lending guidance (FIL-50-2016), setting one risk-based framework across the life cycle of a third-party relationship: planning, due diligence and selection, contract negotiation, ongoing monitoring, and termination. It is the document FDIC examiners apply when a bank buys AI models, fraud tools, or chatbots from a vendor.",
    "keyPoints": [
      "Issued June 6, 2023 jointly with the Federal Reserve and OCC; published in the Federal Register June 9, 2023.",
      "Replaces FDIC FIL-44-2008 (Guidance for Managing Third-Party Risk) and withdraws the 2016 proposed third-party lending guidance (FIL-50-2016).",
      "Five life-cycle stages: planning, due diligence and third-party selection, contract negotiation, ongoing monitoring, and termination.",
      "Using a third party does not diminish a bank's responsibility to operate safely and soundly and to comply with law, including consumer protection and customer-information security.",
      "Expectations scale to the level of risk, complexity, and size of the banking organization and the criticality of the activity.",
      "Followed in May 2024 by the interagency 'Third-Party Risk Management: A Guide for Community Banks' to help smaller banks apply it."
    ],
    "whatChanged": "Before 2023 each agency had its own third-party guidance; the FDIC's dated from 2008. The interagency guidance gave banks one framework and made explicit that fintech and technology partnerships, including vendor-supplied models, fall inside it. In practice it is the basis on which FDIC examiners ask a community bank to show due diligence, contractual rights, and monitoring for AI tools it did not build.",
    "useCases": [
      "third-party-vendors",
      "governance-general",
      "fraud",
      "customer-chatbots"
    ],
    "faq": [
      {
        "q": "Does the third-party guidance cover AI vendors?",
        "a": "Yes. It applies to all business arrangements with third parties, so a vendor supplying an AI underwriting, fraud-detection, or chatbot tool is covered. The bank must perform due diligence, negotiate appropriate contract terms, and monitor performance commensurate with the risk and criticality of the activity."
      },
      {
        "q": "Is there a simpler version for community banks?",
        "a": "Yes. In May 2024 the FDIC, Federal Reserve, and OCC issued 'Third-Party Risk Management: A Guide for Community Banks,' which walks smaller banks through the 2023 guidance without creating new requirements."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fdic-risk-review-2024",
    "warning": true,
    "authority": "fdic",
    "shortName": "FDIC 2024 Risk Review",
    "title": "2024 Risk Review — Section 5: Operational and Cyber Risks",
    "aliases": [
      "2024 Risk Review",
      "FDIC Risk Review 2024"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2024-05-22",
    "link": "https://www.fdic.gov/analysis/2024-risk-review",
    "appliesTo": "Informational; describes risks across all FDIC-insured institutions",
    "answerFirst": "The FDIC's 2024 Risk Review, published May 22, 2024, is the agency's most explicit published treatment of AI as a bank risk. Its operational and cyber risk section states that 'adoption of quantum computing and generative artificial intelligence can pose new risks to critical infrastructure systems' and that generative AI is being used to circumvent identity- and authentication-based controls — via deepfakes, voice cloning, and forged documents that make it harder to distinguish real from fake identities during verification — while check fraud continued to rise even as check use declined. The 2025 and 2026 Risk Reviews dropped the operational-risk section and do not discuss AI.",
    "keyPoints": [
      "Published May 22, 2024; Section 5 covers operational and cyber risks for 2023.",
      "Generative AI named as a new risk to critical infrastructure systems alongside quantum computing.",
      "Generative AI used to bypass identity- and authentication-based network controls and to create fraudulent or altered documents, audio, and video.",
      "Deepfakes and voice cloning make it harder for banks to discern real versus fake identities during verification.",
      "Check fraud continued to rise despite declining check usage, with mail-theft schemes flagged by FinCEN.",
      "Cybersecurity cited as an 'extremely' or 'very' important risk by nearly 92 percent of community banks in the 2023 CSBS survey."
    ],
    "whatChanged": "It put AI-enabled fraud and synthetic identity on the FDIC's official risk map, giving examiners and banks a citable basis for strengthening account-opening and transaction-verification controls; the same language reappears in the FDIC's July 2025 cybersecurity report to Congress.",
    "useCases": [
      "fraud",
      "cybersecurity",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "Does the FDIC Risk Review discuss AI?",
        "a": "The 2024 edition does, in its operational and cyber risk section, framing generative AI as a fraud and authentication threat. The 2025 (June 6, 2025) and 2026 (April 22, 2026) editions cover funding, interest-rate, and credit risk only and do not discuss AI."
      },
      {
        "q": "What AI fraud risks does the FDIC highlight?",
        "a": "Deepfake video, voice cloning, forged documents, and synthetic identities used to defeat identity verification and authentication at account opening and during transactions."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fdic-charting-new-course-speech-2025",
    "authority": "fdic",
    "shortName": "Hill 'Charting a New Course' speech",
    "title": "Charting a New Course: Preliminary Thoughts on FDIC Policy Issues",
    "aliases": [
      "Charting a New Course",
      "Hill ABA speech January 2025"
    ],
    "docType": "Speech",
    "status": "Final",
    "date": "2025-01-10",
    "link": "https://www.fdic.gov/news/speeches/2025/charting-new-course-preliminary-thoughts-fdic-policy-issues",
    "appliesTo": "Statement of policy direction; no direct obligations",
    "answerFirst": "In a January 10, 2025 speech to the American Bar Association, then-Vice Chairman Travis Hill set out the agenda he would pursue as Acting Chairman, including 'a shift in supervisory attitude towards new technology.' He called for reinvigorating the FDiTech innovation lab, hiring staff with hands-on technology experience, and having the FDIC consider additional guidance on fintech partnerships, artificial intelligence, and digital assets and tokenization. The April 2026 model risk revision is the first AI-relevant deliverable from that agenda.",
    "keyPoints": [
      "Delivered January 10, 2025 at the ABA Banking Law Committee meeting, ten days before Hill became Acting Chairman.",
      "Criticized the abandonment of FDiTech and called for its rejuvenation.",
      "Listed AI, fintech partnerships, and digital assets/tokenization as topics for additional FDIC guidance.",
      "Argued the FDIC should lay out expectations 'clearly and transparently on the front end' rather than regulating fintech partnerships through enforcement actions.",
      "Paired with a broader supervision-reform agenda focused on material financial risk rather than process."
    ],
    "whatChanged": "It marked the FDIC's turn from a cautious, enforcement-led posture on bank-fintech and AI arrangements to an openly innovation-friendly one, and it is the origin of the expectation that FDIC AI guidance is coming.",
    "useCases": [
      "governance-general",
      "generative-agentic-ai",
      "third-party-vendors"
    ],
    "faq": [
      {
        "q": "What did Travis Hill say about AI?",
        "a": "He identified AI as one of several areas — with fintech partnerships and digital assets — where the FDIC should consider issuing additional guidance, and called for reviving the FDiTech lab and hiring staff with hands-on technology experience."
      },
      {
        "q": "Has the FDIC issued AI guidance since?",
        "a": "Not AI-specific guidance. The concrete action so far is the April 17, 2026 revised interagency model risk management guidance (FIL-15-2026), which excludes generative and agentic AI from scope."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fdic-cybersecurity-resilience-report-2025",
    "warning": true,
    "authority": "fdic",
    "shortName": "FDIC 2025 Report on Cybersecurity and Resilience",
    "title": "2025 Report on Cybersecurity and Resilience",
    "aliases": [
      "2025 Report on Cybersecurity and Resilience",
      "FDIC cybersecurity report 2025"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2025-07-14",
    "link": "https://www.fdic.gov/banker-resource-center/2025-report-cybersecurity-and-resilience.pdf",
    "appliesTo": "Report to Congress; informational for FDIC-supervised institutions",
    "answerFirst": "The FDIC's 2025 Report on Cybersecurity and Resilience, submitted to the House Financial Services and Senate Banking Committees under Section 108 of the Consolidated Appropriations Act, 2021 and posted in July 2025, warns that nation-state actors and cybercriminals are using generative AI to research targets and vulnerabilities, write malware, and run phishing campaigns, and that AI is being used to circumvent banks' identity and authentication controls. It states that generative AI, including large language models, can produce deepfakes and voice clones that make it harder to detect fraudulent or synthetic identities at account opening, transaction processing, and verification.",
    "keyPoints": [
      "Annual report to Congress required by Section 108 of the Consolidated Appropriations Act, 2021; 2025 edition posted July 2025.",
      "Threat section: generative AI used by nation-state and criminal actors for reconnaissance, malicious code, and phishing.",
      "AI used to create fraudulent or altered documents, audio, and video, driving an increasing number of fraud cases.",
      "Deepfakes and voice cloning complicate detection of synthetic identities during onboarding and verification.",
      "Describes FDIC examination programs, the Computer-Security Incident Notification Rule, the NIST Cybersecurity Framework, and the sunset of the FFIEC Cybersecurity Assessment Tool."
    ],
    "whatChanged": "It confirms that FDIC IT and cybersecurity examinations now treat AI-enabled social engineering and identity fraud as a live threat, reinforcing expectations for multifactor authentication and identity-verification controls at supervised banks.",
    "useCases": [
      "cybersecurity",
      "fraud",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "What does the FDIC say about AI in cybersecurity?",
        "a": "That generative AI is lowering the cost of reconnaissance, malware, and phishing for attackers and is being used to defeat identity and authentication controls through deepfakes and voice cloning."
      },
      {
        "q": "Is this report binding on banks?",
        "a": "No. It is a report to Congress, but it reflects the threats FDIC examiners assess under existing safety-and-soundness and information-security standards."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fdic-testimony-innovation-speed-of-markets-2026",
    "authority": "fdic",
    "shortName": "FDIC House testimony on AI and innovation (Mar 2026)",
    "title": "Innovation at the Speed of Markets: How Regulators Keep Pace with Technology",
    "aliases": [
      "Innovation at the Speed of Markets",
      "Billingsley testimony March 2026"
    ],
    "docType": "Speech",
    "status": "Final",
    "date": "2026-03-26",
    "link": "https://www.fdic.gov/news/speeches/2026/innovation-speed-markets-how-regulators-keep-pace-technology-0",
    "appliesTo": "Statement of supervisory posture; no direct obligations",
    "answerFirst": "On March 26, 2026 Ryan Billingsley, Director of the FDIC's Division of Risk Management Supervision, told the House Financial Services Subcommittee on Digital Assets, Financial Technology and Artificial Intelligence that banks are using AI and machine learning for fraud detection, AML/CFT, and credit underwriting, and are testing generative AI to answer customer questions, summarize service calls, write code, and summarize loan-applicant financials. He said the FDIC was piloting generative AI for its own staff with rollout expected by mid-2026 and was revising model risk management guidance toward a tailored, risk-based approach — delivered three weeks later in FIL-15-2026.",
    "keyPoints": [
      "Testimony to the House Financial Services Subcommittee on Digital Assets, Financial Technology and Artificial Intelligence, March 26, 2026.",
      "Named bank AI use cases: fraud detection, AML/CFT processes, credit underwriting.",
      "Named generative AI pilots: customer-question support for staff, call summarization, code writing, loan-application summarization.",
      "FDIC itself piloting generative AI tools for internal use, with an AI literacy program covering AI fundamentals, GenAI concepts, governance, and prompt engineering.",
      "Previewed the model risk management revision as a 'more tailored, risk-based approach' accounting for bank size and complexity."
    ],
    "whatChanged": "It is the clearest official FDIC description of how supervised banks actually use AI in 2026 and confirms the supervisory stance: encourage adoption, tailor expectations, and modernize rather than add AI rules.",
    "useCases": [
      "generative-agentic-ai",
      "fraud",
      "aml-kyc",
      "credit-underwriting",
      "customer-chatbots"
    ],
    "faq": [
      {
        "q": "What AI uses does the FDIC say banks have adopted?",
        "a": "Fraud detection, AML/CFT monitoring, and credit underwriting with AI/ML, plus generative AI pilots for staff-facing customer support, call summaries, coding, and summarizing loan applicants' financial information."
      },
      {
        "q": "Is the FDIC using AI internally?",
        "a": "Yes. The March 2026 testimony said the FDIC was piloting generative AI for staff with rollout expected by mid-2026; its public AI page lists a compliance plan and 2025 AI use-case inventory under OMB Memorandum M-25-21."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fdic-fil-15-2026",
    "authority": "fdic",
    "shortName": "FDIC FIL-15-2026",
    "title": "Agencies Revise the Interagency Model Risk Management Guidance",
    "aliases": [
      "FIL-15-2026",
      "FDIC FIL-15-2026",
      "revised model risk management guidance"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2026-04-17",
    "effectiveDate": "2026-04-17",
    "supersedes": [
      "fdic-fil-27-2021",
      "occ-bulletin-2011-12",
      "fed-sr-11-7"
    ],
    "interagency": [
      "fed-sr-26-2",
      "occ-bulletin-2026-13"
    ],
    "link": "https://www.fdic.gov/news/financial-institution-letters/2026/agencies-revise-interagency-model-risk-management-guidance",
    "appliesTo": "All FDIC-supervised financial institutions; expected to be most relevant to banking organizations with more than $30 billion in total assets",
    "answerFirst": "On April 17, 2026 the FDIC issued FIL-15-2026, adopting revised interagency Model Risk Management guidance jointly with the OCC and Federal Reserve and rescinding FIL-22-2017 and FIL-27-2021. The guidance sets a risk-based approach tailored to a bank's size, complexity, and model risk profile, is expected to matter most for banks above $30 billion in assets, and states that non-compliance with it will not by itself result in supervisory criticism. It replaces the 2011 framework (OCC 2011-12 / SR 11-7) that governed bank models, including machine learning, for fifteen years.",
    "keyPoints": [
      "Issued April 17, 2026 by the FDIC, OCC (Bulletin 2026-13), and Federal Reserve (SR 26-2) as a single interagency document.",
      "Rescinds FIL-22-2017 (FDIC adoption of the 2011 Supervisory Guidance on Model Risk Management) and FIL-27-2021 (BSA/AML and OFAC model risk statement).",
      "Applies to all FDIC-supervised institutions but is expected to be most relevant to organizations over $30 billion in total assets; banks under that size without significant or complex model use generally are not expected to apply it.",
      "Covers model development, validation, ongoing monitoring, and governance, including expectations for third-party vendor models.",
      "Non-prescriptive: the FIL states that non-compliance will not by itself result in supervisory criticism.",
      "Generative and agentic AI sit outside the scope of the interagency guidance and are left to banks' broader risk-management and governance programs (see OCC Bulletin 2026-13 for the agencies' scoping language).",
      "FDIC June 2026 testimony describes the revision as replacing 'overly prescriptive' 2011-era standards and serving as 'an avenue for the safe and sound adoption of technology.'"
    ],
    "whatChanged": "For FDIC-supervised banks, the 2011 framework adopted through FIL-22-2017 is gone. Large banks keep the core disciplines of validation, effective challenge, and governance under a modernized, explicitly risk-based standard; community banks get clear relief unless their model use is significant or complex. The 2021 BSA/AML model-risk statement is also withdrawn, so AML/sanctions systems are now governed under the general framework. Generative and agentic AI remain an enterprise-risk-management question rather than a formal model-validation one.",
    "useCases": [
      "model-risk",
      "generative-agentic-ai",
      "third-party-vendors",
      "aml-kyc",
      "credit-underwriting"
    ],
    "faq": [
      {
        "q": "Does FIL-15-2026 apply to community banks?",
        "a": "It applies to all FDIC-supervised institutions, but the FDIC says it is most relevant to banks with more than $30 billion in assets. Smaller banks are generally not expected to apply it unless their model use is significant, complex, or poses elevated risk."
      },
      {
        "q": "What happened to the BSA/AML model risk statement (FIL-27-2021)?",
        "a": "FIL-15-2026 rescinds it. BSA/AML and OFAC screening models are now covered by the general revised model risk management guidance rather than a separate statement."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fdic-testimony-oversight-prudential-regulators-2026",
    "authority": "fdic",
    "shortName": "Hill House oversight testimony (Jun 2026)",
    "title": "Statement of Chairman Travis Hill: Oversight of Prudential Regulators",
    "aliases": [
      "Oversight of Prudential Regulators",
      "Hill testimony June 4, 2026"
    ],
    "docType": "Speech",
    "status": "Final",
    "date": "2026-06-04",
    "link": "https://www.fdic.gov/news/speeches/2026/oversight-prudential-regulators",
    "appliesTo": "Statement of policy direction; no direct obligations",
    "answerFirst": "In June 4, 2026 testimony to the House Financial Services Committee, FDIC Chairman Travis Hill described the April 2026 model risk revision as replacing 2011-era standards that had constrained banks' ability to use innovative modeling approaches, saying the revised guidance 'supports the use of innovative technology and sets forth a risk-based approach tailored to size and complexity.' He also said the FDIC's proposal to implement the BSA program rule 'encourages responsible innovation and the use of emerging technologies, such as artificial intelligence, to detect and disrupt illicit finance activity more effectively.'",
    "keyPoints": [
      "Delivered June 4, 2026 before the House Committee on Financial Services.",
      "Frames the revised model risk guidance as 'an avenue for the safe and sound adoption of technology.'",
      "Ties AI explicitly to the pending BSA/AML program rule: emerging technologies including AI should be used to detect and disrupt illicit finance.",
      "No AI-specific rulemaking or request for information announced.",
      "Consistent with Hill's stated preference for a technology-neutral, open-minded supervisory approach."
    ],
    "whatChanged": "Confirms at Chairman level that the FDIC's AI strategy is to modernize existing frameworks (model risk, BSA/AML) rather than create AI rules, and signals that examiners should not penalize responsible AI adoption in AML.",
    "useCases": [
      "aml-kyc",
      "model-risk",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Does the FDIC encourage AI in AML compliance?",
        "a": "Yes. Chairman Hill's June 2026 testimony says the FDIC's BSA program rule proposal encourages responsible use of emerging technologies such as AI to detect and disrupt illicit finance more effectively."
      },
      {
        "q": "Has the FDIC announced an AI rule?",
        "a": "No. As of the June 2026 testimony, the FDIC's AI-relevant actions are the revised model risk guidance and the BSA program rule proposal; no AI-specific rule or RFI had been announced."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ncua-letter-07-cu-13",
    "authority": "ncua",
    "shortName": "NCUA Letter 07-CU-13",
    "title": "Evaluating Third Party Relationships",
    "aliases": [
      "07-CU-13",
      "Letter 07-CU-13",
      "Evaluating Third Party Relationships"
    ],
    "docType": "Letter",
    "status": "In force",
    "date": "2007-12-01",
    "effectiveDate": "2007-12-01",
    "link": "https://ncua.gov/regulation-supervision/letters-credit-unions-other-guidance/evaluating-third-party-relationships",
    "appliesTo": "All federally insured credit unions",
    "answerFirst": "Letter to Credit Unions 07-CU-13, issued in December 2007, is the NCUA's foundational third-party risk guidance and the framework examiners apply to AI vendors today. It requires risk assessment and planning, due diligence (financial condition, controls, contract review), and ongoing monitoring of third-party relationships, with the credit union's board retaining responsibility for outsourced activities.",
    "keyPoints": [
      "Three-stage framework: risk assessment and planning, due diligence, and risk measurement, monitoring, and control",
      "Due diligence covers the vendor's background, business model, financial condition, legal review, accounting, and internal controls",
      "Contracts should address performance standards, data security, confidentiality, audit rights, and termination",
      "Board and management remain responsible for outsourced activities; outsourcing does not outsource accountability",
      "The NCUA's 2025 AI resource page points credit unions back to this due-diligence standard for AI service providers",
      "Because the NCUA cannot examine technology vendors directly, this letter is the primary lever over AI supplied by third parties"
    ],
    "whatChanged": "Nothing about AI specifically, but in 2025-2026 this 2007 letter is what NCUA examiners cite when asking how a credit union vetted an AI underwriting model, chatbot, or fraud tool bought from a vendor. Its due-diligence checklist (understand how the product works, what the risks are, what safeguards the vendor has) has become the de facto AI vendor standard for credit unions.",
    "useCases": [
      "third-party-vendors",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Is 07-CU-13 still the NCUA's third-party guidance?",
        "a": "Yes. It remains posted as current guidance, supplemented by the 2023 Financial Innovation rule that codified due-diligence expectations for indirect lending and loan participations. The NCUA did not join the June 2023 interagency third-party guidance issued by the OCC, Fed, and FDIC."
      },
      {
        "q": "What does the NCUA expect before a credit union deploys a vendor AI tool?",
        "a": "The 07-CU-13 process: a risk assessment, due diligence on the vendor and the tool (how it works, its risks, the vendor's safeguards), a contract with data-security and audit terms, and ongoing monitoring reported to the board."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ncua-interagency-ai-rfi-2021",
    "authority": "ncua",
    "shortName": "2021 Interagency AI RFI",
    "title": "Request for Information and Comment on Financial Institutions' Use of Artificial Intelligence, Including Machine Learning",
    "aliases": [
      "2021 AI RFI",
      "interagency AI RFI",
      "Docket 2021-06607",
      "RFI on artificial intelligence"
    ],
    "docType": "Consultation",
    "status": "Final",
    "date": "2021-03-31",
    "commentDeadline": "2021-07-01",
    "interagency": [
      "fed-interagency-ai-rfi-2021",
      "occ-bulletin-2021-17-ai-rfi",
      "fdic-fil-20-2021"
    ],
    "link": "https://www.federalregister.gov/documents/2021/03/31/2021-06607/request-for-information-and-comment-on-financial-institutions-use-of-artificial-intelligence-including-machine-learning",
    "appliesTo": "Banks, credit unions, and other financial institutions supervised by the OCC, Federal Reserve, FDIC, CFPB, and NCUA",
    "answerFirst": "On March 29, 2021 the NCUA joined the OCC, Federal Reserve, FDIC, and CFPB in a request for information on financial institutions' use of AI and machine learning, published in the Federal Register on March 31, 2021. It asked 17 questions on explainability, data quality, dynamic updating, overfitting, cybersecurity, fair lending, third-party AI, and community-institution challenges. The comment period was extended from June 1 to July 1, 2021; the agencies never issued follow-on interagency AI guidance.",
    "keyPoints": [
      "First coordinated federal look at bank and credit union AI; the NCUA's participation brought credit unions inside the scope",
      "Use cases named: fraud detection, credit underwriting, customer service personalization, AML, textual analysis, cybersecurity",
      "Questions on explainability, risks from broader or alternative data, dynamic updating, overfitting, cybersecurity, fair lending, and reliance on third-party AI",
      "Explicitly asked about challenges for community institutions, which describes most credit unions (two-thirds hold under $100 million in assets)",
      "Comment deadline extended to July 1, 2021 at stakeholders' request",
      "Cited existing frameworks (SR 11-7 model risk, third-party guidance, ECOA/Reg B adverse action) as the current rulebook"
    ],
    "whatChanged": "The RFI signalled that AI would be supervised through existing law rather than new rules, a posture the NCUA still holds five years later. For credit unions it is the only interagency AI document the NCUA has signed; subsequent model risk and AI issuances by the bank regulators (2026 model risk guidance) did not include the NCUA.",
    "useCases": [
      "credit-underwriting",
      "fraud",
      "fair-lending",
      "third-party-vendors",
      "model-risk"
    ],
    "faq": [
      {
        "q": "Did the 2021 AI RFI lead to any rule?",
        "a": "No. No interagency AI rule or guidance followed. The agencies have addressed AI through existing frameworks, and the OCC, Fed, and FDIC revised model risk guidance in April 2026 without the NCUA."
      },
      {
        "q": "Why does the RFI matter for credit unions?",
        "a": "It is the NCUA's clearest statement of the AI risk themes examiners care about: explainability, data quality, fair lending, and third-party dependence."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ncua-ai-task-force-testimony-2022",
    "authority": "ncua",
    "shortName": "NCUA testimony to House AI Task Force (2022)",
    "title": "Written Testimony of Kelly Lay, Director of the Office of Examination and Insurance, before the House Financial Services Task Force on Artificial Intelligence",
    "aliases": [
      "Kelly Lay testimony",
      "House AI Task Force testimony",
      "Task Force on Artificial Intelligence NCUA"
    ],
    "docType": "Speech",
    "status": "Final",
    "date": "2022-05-13",
    "link": "https://ncua.gov/newsroom/testimony/2022/ncua-director-office-examination-and-insurance-written-testimony-task-force-artificial-intelligence",
    "appliesTo": "Congressional testimony; no direct application to credit unions",
    "answerFirst": "On May 13, 2022, NCUA examination chief Kelly Lay told the House Task Force on Artificial Intelligence that the NCUA was testing machine-learning models on quarterly Call Report data and NLP on unstructured exam documents, that AI and ML algorithms 'must be tested to prevent the intrusion of underlying historical bias,' and that Congress should restore the NCUA's authority to examine third-party technology vendors, which lapsed in 2002.",
    "keyPoints": [
      "NCUA's own AI: ML clustering of credit unions into risk categories from Call Report data; NLP pilots on board minutes and audit reports",
      "MERIT examination platform launched in 2021 to modernize a 25-year-old system; goal of 'predominantly virtual' exams within five to ten years",
      "Warned that AI/ML must be tested to prevent historical bias producing discriminatory outcomes",
      "Two-thirds of credit unions hold under $100 million in assets with about seven employees, limiting in-house AI and vendor due diligence",
      "Requested restoration of third-party vendor examination authority, noting vendors had rejected security recommendations on cost grounds",
      "Companion March 2022 NCUA white paper on third-party vendor authority made the same request"
    ],
    "whatChanged": "This is the NCUA's most detailed public statement on AI risk in credit unions before 2025. It established the two themes that still define the agency's position: bias testing under fair-lending law, and the vendor-oversight gap that leaves AI sourced from third parties outside examiner reach.",
    "useCases": [
      "fair-lending",
      "third-party-vendors",
      "governance-general"
    ],
    "faq": [
      {
        "q": "What did the NCUA say about AI bias?",
        "a": "That AI and ML algorithms must be tested to prevent the intrusion of underlying historical bias that could enable discriminatory practices, consistent with fair-lending obligations under ECOA."
      },
      {
        "q": "Why does the NCUA keep asking for vendor examination authority?",
        "a": "Temporary Y2K-era authority to examine technology service providers expired in 2002. Without it, the NCUA cannot inspect the AI vendors most credit unions rely on; GAO has recommended restoring the authority since 2015 and again in 2025."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ncua-financial-innovation-rule-2023",
    "authority": "ncua",
    "shortName": "NCUA Financial Innovation Rule (2023)",
    "title": "Financial Innovation: Loan Participations, Eligible Obligations, and Notes of Liquidating Credit Unions (final rule)",
    "aliases": [
      "Financial Innovation rule",
      "financial innovation final rule",
      "NCUA fintech rule 2023"
    ],
    "docType": "Regulation",
    "status": "In force",
    "date": "2023-09-21",
    "link": "https://ncua.gov/newsroom/press-release/2023/ncua-board-approves-final-rule-financial-innovation",
    "appliesTo": "Federally insured credit unions engaging in indirect lending, loan participations, and fintech partnerships",
    "answerFirst": "On September 21, 2023 the NCUA Board unanimously approved the Financial Innovation final rule, effective 30 days after Federal Register publication, to give credit unions 'flexibility to take advantage of advanced technologies and opportunities offered by the financial technology sector.' It replaced prescriptive limits on indirect lending, loan participations, and eligible-obligation purchases with policy, due-diligence, and risk-management requirements, codifying prior supervisory letters on third-party due diligence.",
    "keyPoints": [
      "Shifts the framework, in Chairman Harper's words, 'from a prescriptive structure to a principles-based system'",
      "Codifies supervisory guidance on third-party due diligence, indirect lending, and loan participations into regulation",
      "Requires board-approved policies, due diligence, and risk management in place of hard limits",
      "Removes certain restrictions on purchases of eligible obligations, enabling fintech-originated loan programs",
      "Does not mention AI, but governs the fintech partnerships through which most credit unions obtain AI underwriting and decisioning",
      "Effective date was set at 30 days after Federal Register publication; the rule appears in NCUA regulations Parts 701 and 741"
    ],
    "whatChanged": "The rule is the legal basis for credit unions to partner with fintechs and lending platforms that run AI or ML credit models. It moved the compliance burden from bright-line limits to documented due diligence and ongoing monitoring, which is precisely the ground examiners now cover when asking about AI-driven indirect lending.",
    "useCases": [
      "third-party-vendors",
      "credit-underwriting"
    ],
    "faq": [
      {
        "q": "Does the Financial Innovation rule regulate AI?",
        "a": "Not by name. It sets due-diligence and risk-management requirements for fintech-sourced lending, which in practice covers AI-based underwriting delivered by a partner."
      },
      {
        "q": "When did the Financial Innovation rule take effect?",
        "a": "The NCUA's September 21, 2023 announcement set the effective date at 30 days after Federal Register publication, i.e. in the fourth quarter of 2023."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ncua-ai-board-briefing-2025",
    "authority": "ncua",
    "shortName": "NCUA Board AI briefing (Jul 2025)",
    "title": "Board Briefing: Artificial Intelligence and Its Use Within the Credit Union Industry and the NCUA",
    "aliases": [
      "July 2025 AI board briefing",
      "NCUA AI briefing",
      "Board briefing on artificial intelligence"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2025-07-24",
    "link": "https://ncua.gov/newsroom/press-release/2025/ncua-board-briefed-artificial-intelligence-post-exam-survey-results-and-central-liquidity-fund",
    "appliesTo": "Informational; all federally insured credit unions",
    "answerFirst": "On July 24, 2025 NCUA staff briefed the Board on AI use in credit unions and at the agency, announced a new AI resource page for credit unions, and responded to GAO's May 2025 recommendation on model risk management by concluding that updating model risk guidance alone would be insufficient and that any new AI requirements would need formal rulemaking. Chairman Kyle Hauptman said 'there's a lot we're still learning about AI use at financial institutions.'",
    "keyPoints": [
      "Presented by Amanda Parkhill (Acting Director, Office of Examination and Insurance) and Amber Gravius (Office of Business Innovation, Acting CIO)",
      "Covered known credit-union AI use cases, the forthcoming NCUA.gov AI resource page, and NCUA's internal AI use",
      "Adopted the AI definition in Executive Order 14179",
      "Addressed GAO-25-107197: staff view that a model-risk-only approach would not fit all credit union AI use cases",
      "Any new AI requirements to go through notice-and-comment rulemaking, not guidance",
      "Hauptman: credit unions 'are already using AI to increase efficiencies and enhance customer service'; feedback invited via Ask NCUA",
      "Briefing slides published as a PDF agenda item"
    ],
    "whatChanged": "This is the closest thing to an NCUA AI policy statement. It confirmed the agency would not simply import bank-style model risk guidance for AI, and it set the expectation that credit unions would get resources rather than rules in the near term, a stance that held through August 2026.",
    "useCases": [
      "governance-general",
      "model-risk",
      "third-party-vendors"
    ],
    "faq": [
      {
        "q": "Did the NCUA agree to write AI model risk guidance after the GAO report?",
        "a": "It generally agreed with GAO's recommendation but told the Board in July 2025 that model risk guidance alone would not cover credit union AI use cases and that new requirements would require rulemaking. No proposal has been issued as of August 2026."
      },
      {
        "q": "Where are the briefing materials?",
        "a": "The slide deck is posted at ncua.gov/files/agenda-items/artificial-intelligence-board-briefing-20250724.pdf alongside the July 24, 2025 press release."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ncua-credit-union-ai-resource-center",
    "authority": "ncua",
    "shortName": "NCUA Credit Union AI Resource Center",
    "title": "Artificial Intelligence (AI) — Credit Union AI Resource Center and AI Resources page",
    "aliases": [
      "Credit Union Artificial Intelligence Resource Center",
      "NCUA AI resource page",
      "NCUA AI Resources page",
      "NCUA AI resource hub"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2025-08-01",
    "effectiveDate": "2025-08-01",
    "link": "https://ncua.gov/regulation-supervision/regulatory-compliance-resources/artificial-intelligence-ai",
    "appliesTo": "All federally insured credit unions considering or using AI, and their third-party AI service providers",
    "answerFirst": "The NCUA's Credit Union AI Resource Center, added to ncua.gov in August 2025 and last updated April 28, 2026, is the agency's only AI-specific publication for credit unions. It states that 'NCUA has not issued AI specific rules or regulation' and that 'AI is not treated differently than any other innovative technology,' and it tells credit unions to identify and monitor AI-specific risks, perform due diligence on AI vendors, and ensure board and management oversight, pointing to NIST, Treasury AIEOG, COSO, and CISA materials.",
    "keyPoints": [
      "Explicit statement that existing NCUA regulations are technology-neutral and apply to AI (e.g., Part 748 information security applies whether service is by email, phone, or AI tool)",
      "Expectations: identify risks unique to AI or automated tools; monitor and measure them; implement controls for operational, compliance, and security risk",
      "Third-party AI: understand how the product functions, its risks, and the vendor's safeguards before deployment",
      "Board and management oversight required for safe and sound operation",
      "Examiners evaluate AI under existing frameworks: safety and soundness, regulatory compliance, internal controls, ongoing monitoring, third-party due diligence",
      "References NIST AI resources, Treasury's AI Executive Oversight Group cybersecurity tools, COSO's AI and ERM research, and CISA secure-AI guidance",
      "Sections on use cases, implementation, risk management, data security, and cybersecurity risks; refreshed in December 2025 and April 2026"
    ],
    "whatChanged": "Before August 2025 credit unions had no NCUA document addressing AI at all. The resource center does not create obligations, but it tells credit unions which existing rules examiners will apply and what documentation (risk identification, vendor due diligence, board oversight) they should expect to be asked for. It is a resource page, not a Letter to Credit Unions, and carries no letter number.",
    "useCases": [
      "governance-general",
      "third-party-vendors",
      "cybersecurity",
      "data-privacy",
      "customer-chatbots"
    ],
    "faq": [
      {
        "q": "Is the NCUA AI resource page binding?",
        "a": "No. It is informational and says so, stating the NCUA has not issued AI-specific rules. It does, however, describe the existing rules and due-diligence expectations examiners apply to AI."
      },
      {
        "q": "Which frameworks does the NCUA point credit unions to for AI?",
        "a": "NIST AI resources (including the AI Risk Management Framework), Treasury's AIEOG tools, COSO's guidance on AI and enterprise risk management, and CISA's AI data-security guidance."
      },
      {
        "q": "Should a credit union have a board-approved AI policy?",
        "a": "The page does not mandate one, but it expects board and management oversight and documented risk controls, which in practice most credit unions satisfy with a board-approved AI policy tied to their vendor-management program."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ncua-ai-compliance-plan-2025",
    "authority": "ncua",
    "shortName": "NCUA AI Compliance Plan (2025)",
    "title": "NCUA Artificial Intelligence Compliance Plan",
    "aliases": [
      "NCUA AI Compliance Plan",
      "Artificial Intelligence Compliance Plan",
      "NCUA AI use case inventory"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2025-09-01",
    "link": "https://ncua.gov/ai/ncua-artificial-intelligence-compliance-plan",
    "appliesTo": "The NCUA's own internal AI use; no obligations for credit unions",
    "answerFirst": "Published in September 2025 under the AI in Government Act of 2020 and OMB Memorandum M-25-21, the NCUA AI Compliance Plan describes how the agency governs its own AI use, not how credit unions should. It sets up oversight through the agency's IT, data governance, cybersecurity, and enterprise risk councils, commits to a public AI use case inventory, and lists minimum risk-management practices (documentation, validation, termination of non-compliant systems).",
    "keyPoints": [
      "Required of federal agencies by OMB M-25-21; frequently misread as credit union guidance",
      "Governance via existing councils: Information Technology, Data Governance, Cybersecurity, Enterprise Risk Management",
      "Public AI Use Case Inventory maintained by the Office of Business Innovation (Excel and CSV downloads on ncua.gov/ai)",
      "Barriers acknowledged: limited staff with AI skills, data privacy, vendor transparency",
      "NCUA's own AI uses (per 2026 testimony): content generation, Call Report anomaly flagging, loan-performance forecasting, risk identification, cybersecurity operations",
      "Commits to interagency working groups and engagement with the credit union industry on AI policy"
    ],
    "whatChanged": "Nothing for credit unions directly. Its relevance is as a signal of how the NCUA itself approaches AI risk (inventory, validation, documented governance), which mirrors what examiners look for at credit unions, and as the source of the agency's AI-officer hiring in 2025-2026.",
    "useCases": [
      "governance-general"
    ],
    "faq": [
      {
        "q": "Does the NCUA AI Compliance Plan apply to credit unions?",
        "a": "No. It covers the NCUA's internal use of AI as required by OMB Memorandum M-25-21. Credit union expectations are on the separate Credit Union AI Resource Center page."
      },
      {
        "q": "How is the NCUA using AI in supervision?",
        "a": "Per its March 2026 congressional testimony: content generation, flagging anomalies in Call Report submissions, forecasting loan performance, identifying higher-risk credit unions, and cybersecurity operations."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ncua-letter-26-cu-01",
    "authority": "ncua",
    "shortName": "NCUA Letter 26-CU-01",
    "title": "NCUA's 2026 Supervisory Priorities",
    "aliases": [
      "26-CU-01",
      "Letter 26-CU-01",
      "2026 Supervisory Priorities"
    ],
    "docType": "Letter",
    "status": "In force",
    "date": "2026-01-14",
    "effectiveDate": "2026-01-14",
    "link": "https://ncua.gov/regulation-supervision/letters-credit-unions-other-guidance/ncuas-2026-supervisory-priorities",
    "appliesTo": "All federally insured credit unions; sets 2026 examination scope",
    "answerFirst": "Letter to Credit Unions 26-CU-01, issued January 14, 2026, sets NCUA examination priorities for 2026 under a 'no regulation by enforcement' policy: balance-sheet management (credit, interest rate, liquidity, capital), operational risk (payment systems, fraud prevention), and compliance risk including BSA/AML. The letter does not mention artificial intelligence, as the 2025 letter (25-CU-01) did not; AI is instead examined through these existing priority areas and the NCUA's AI resource page.",
    "keyPoints": [
      "Announced January 14, 2026; continues the 'No Regulation by Enforcement' approach adopted in 2025",
      "Priorities: credit risk, interest rate and liquidity risk, capital adequacy, payment systems and fraud, cybersecurity, BSA/AML",
      "Contains no reference to AI, machine learning, or models, despite claims in some vendor commentary that AI is a named 2026 priority",
      "AI-driven fraud and AI vendor relationships fall under the fraud-prevention and payment-systems priorities",
      "Fair-lending review continues under consumer compliance; AI-based underwriting is examined there under ECOA/Reg B",
      "Companion webinar and press release issued the same week"
    ],
    "whatChanged": "For AI, the notable fact is the absence: two consecutive supervisory priorities letters have not named AI, confirming that the NCUA in 2026 examines AI through existing risk categories rather than as a standalone topic. Credit unions should expect AI questions inside vendor-management, fraud, cybersecurity, and fair-lending reviews rather than a separate AI module.",
    "useCases": [
      "governance-general",
      "fraud",
      "cybersecurity",
      "fair-lending"
    ],
    "faq": [
      {
        "q": "Is AI an NCUA supervisory priority for 2026?",
        "a": "Not by name. Letter 26-CU-01 does not mention AI. Examiners address AI through the listed priorities (fraud, payments, cybersecurity, BSA/AML, consumer compliance) and the expectations on the NCUA's AI resource page."
      },
      {
        "q": "Did the 2025 priorities letter mention AI?",
        "a": "No. Letter 25-CU-01 (January 2025) also contains no AI reference."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ncua-hauptman-senate-testimony-2026",
    "authority": "ncua",
    "shortName": "Hauptman Senate testimony (Feb 2026)",
    "title": "Written Testimony of NCUA Chairman Kyle S. Hauptman before the U.S. Senate Committee on Banking, Housing, and Urban Affairs",
    "aliases": [
      "Hauptman Senate testimony",
      "Hauptman written testimony February 2026",
      "Kyle Hauptman testimony"
    ],
    "docType": "Speech",
    "status": "Final",
    "date": "2026-02-12",
    "link": "https://ncua.gov/newsroom/testimony/2026/ncua-chairman-kyle-s-hauptmans-written-testimony-us-senate-committee-banking-housing-and-urban",
    "appliesTo": "Congressional testimony; statement of NCUA policy direction",
    "answerFirst": "In written testimony to the Senate Banking Committee on February 12, 2026, NCUA Chairman Kyle Hauptman said the agency's 2026-2030 strategic plan would 'create space for credit unions to innovate responsibly, especially in leveraging artificial intelligence and cryptocurrencies,' and pointed to the AI Resources page added in August 2025 as the NCUA's vehicle for AI risk-management support. He described no new AI rules or guidance in preparation.",
    "keyPoints": [
      "Frames AI alongside blockchain and digital assets as areas where credit unions need regulatory room to innovate",
      "Confirms the August 2025 launch date of the AI Resources page and its scope: implementation, risk management, data security, use cases, cybersecurity",
      "Supports the 2026-2030 Strategic Plan (published April 9, 2026), whose Goal 3 is to expand NCUA's own use of data, analytics, and AI in oversight",
      "Companion March 26, 2026 House testimony by Amanda Parkhill listed credit-union AI uses: automated loan underwriting, virtual assistants, fraud detection",
      "No mention of model risk guidance or the pending GAO recommendation",
      "Consistent with the 2025-2026 deregulatory, 'no regulation by enforcement' posture"
    ],
    "whatChanged": "It confirms that as of 2026 the NCUA's AI agenda is facilitation, not restriction: resources for credit unions and AI adoption inside the agency. Compliance teams should read it as a signal that AI-specific NCUA rules are unlikely before 2027 and that examiner scrutiny will remain framed around existing vendor, fair-lending, and cybersecurity rules.",
    "useCases": [
      "governance-general",
      "credit-underwriting",
      "customer-chatbots",
      "fraud"
    ],
    "faq": [
      {
        "q": "Has any NCUA Board member given a dedicated AI speech?",
        "a": "Not as of August 2026. AI appears in Board meeting statements (July 2025 briefing), congressional testimony (2022, 2026), and the strategic plan, but there is no standalone NCUA AI policy speech."
      },
      {
        "q": "What AI use cases does the NCUA say credit unions are running?",
        "a": "Automated loan underwriting, virtual assistants for member service, and fraud detection software, per March 2026 House testimony by the NCUA's examination director."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "cfpb-fcra-adverse-action-key-factors",
    "authority": "cfpb",
    "shortName": "FCRA adverse action and credit-score disclosures (15 U.S.C. 1681m, 1681g(f))",
    "title": "Fair Credit Reporting Act — adverse-action notices based on consumer reports and disclosure of key factors affecting credit scores",
    "aliases": [
      "Fair Credit Reporting Act",
      "15 U.S.C. 1681m",
      "FCRA adverse action",
      "FCRA section 615"
    ],
    "docType": "Statute",
    "status": "In force",
    "date": "1970-10-26",
    "effectiveDate": "1971-04-25",
    "link": "https://www.consumerfinance.gov/compliance/compliance-resources/other-applicable-requirements/fair-credit-reporting-act/",
    "appliesTo": "Users of consumer reports (banks, lenders, insurers, employers, landlords) and consumer reporting agencies, including fintech and data-analytics firms whose algorithmic scores meet the definition of a consumer report",
    "answerFirst": "The Fair Credit Reporting Act governs the data feeding many AI credit, fraud and account-opening models. Section 615 (15 U.S.C. 1681m) requires anyone taking adverse action based in whole or part on a consumer report to notify the consumer, name the reporting agency, and disclose any credit score used with up to four 'key factors' that adversely affected it (15 U.S.C. 1681g(f)). The CFPB's position, stated in its 2024 comment to Treasury, is that algorithmic scores and 'alternative data' used for eligibility decisions can fall within FCRA's accuracy, dispute and permissible-purpose rules.",
    "keyPoints": [
      "Section 615(a) adverse-action notice: identify the consumer reporting agency, state that the agency did not make the decision, and inform the consumer of the right to a free report and to dispute accuracy.",
      "Section 615(a)(2) and 609(f): when a credit score is used, disclose the score, its range, the date, and the key factors (up to four, five if inquiries are a factor) that adversely affected it.",
      "Section 615(h) risk-based pricing notices apply when a consumer report leads to materially less favorable terms.",
      "Consumer reporting agencies must follow reasonable procedures to assure maximum possible accuracy (section 607(b)); furnishers must correct inaccurate data (section 623).",
      "Permissible-purpose limits (section 604) restrict use of report data for model training or targeting outside credit, insurance, employment and similar purposes.",
      "The CFPB withdrew several FCRA advisory opinions and Circular 2024-06 (algorithmic scores in employment) on May 12, 2025, but the statute and Regulation V (12 CFR 1022) are unchanged."
    ],
    "whatChanged": "FCRA is the second statutory pillar behind CFPB AI enforcement: where ECOA governs the decision, FCRA governs the data and the score. Banks using third-party AI scores, fraud screens or identity models need to determine whether the vendor is a consumer reporting agency, whether the bank must send FCRA adverse-action notices, and whether 'key factor' disclosures can be produced from the model.",
    "useCases": [
      "credit-underwriting",
      "fraud",
      "data-privacy",
      "third-party-vendors"
    ],
    "faq": [
      {
        "q": "Does FCRA apply to an AI fraud score used to decline account opening?",
        "a": "If the score is supplied by a third party that assembles consumer information for eligibility decisions, it is likely a consumer report and declining based on it triggers a section 615 adverse-action notice. The CFPB has said fraud screening tools must meet consumer-protection standards regardless of the technology."
      },
      {
        "q": "What is the difference between an FCRA and an ECOA adverse-action notice?",
        "a": "ECOA requires the specific principal reasons for the credit decision; FCRA requires disclosure that a consumer report was used, the agency's name, and any score with its key factors. Lenders normally combine both in one notice."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "cfpb-ecoa-regulation-b-adverse-action",
    "authority": "cfpb",
    "shortName": "ECOA / Regulation B adverse action (15 U.S.C. 1691(d); 12 CFR 1002.9)",
    "title": "Equal Credit Opportunity Act section 701(d) and Regulation B section 1002.9 — notification of adverse action and statement of specific reasons",
    "aliases": [
      "Regulation B",
      "12 CFR 1002.9",
      "15 U.S.C. 1691",
      "ECOA adverse action",
      "Reg B 1002.9"
    ],
    "docType": "Statute",
    "status": "In force",
    "date": "1974-10-28",
    "effectiveDate": "1974-10-28",
    "link": "https://www.consumerfinance.gov/rules-policy/regulations/1002/9/",
    "appliesTo": "Every creditor extending consumer or business credit in the United States, including banks, credit unions, mortgage lenders, card issuers and fintech lenders, regardless of whether decisions are made by humans, scorecards or machine-learning models",
    "answerFirst": "ECOA (15 U.S.C. 1691(d)) requires a creditor that takes adverse action on a credit application to give the applicant a statement of the specific reasons, and Regulation B section 1002.9 requires that notice within 30 days of receiving a completed application. The reasons must be specific and indicate the principal reasons; saying the applicant failed the creditor's internal standards or did not achieve a qualifying score is expressly insufficient. This is the legal foundation for every CFPB statement on AI in lending: the duty applies identically to a machine-learning model and to a human underwriter.",
    "keyPoints": [
      "ECOA prohibits credit discrimination on the basis of race, color, religion, national origin, sex, marital status, age, receipt of public assistance income, or good-faith exercise of Consumer Credit Protection Act rights (15 U.S.C. 1691(a)).",
      "Section 701(d) entitles applicants to a statement of specific reasons for adverse action; Regulation B section 1002.9(a)(1) sets a 30-day deadline after receipt of a completed application.",
      "Section 1002.9(b)(2): reasons 'must be specific and indicate the principal reason(s)'; references to internal standards or failure to achieve a qualifying score are insufficient.",
      "Official Interpretation to 1002.9(b)(2): disclosed reasons 'must relate to and accurately describe the factors actually considered or scored'; a creditor may not simply check the closest reason on the Appendix C sample form (C-1) if it was not a factor actually used.",
      "Adverse action includes denials, account terminations, unfavorable changes in terms and refusals to increase a credit limit (12 CFR 1002.2(c)).",
      "Regulation B applies to business credit as well as consumer credit, with modified notice rules for larger businesses (1002.9(a)(3)).",
      "Regulation B was amended by a final rule published April 22, 2026 (effective July 21, 2026) removing disparate-impact liability; section 1002.9 was not changed."
    ],
    "whatChanged": "This is the baseline rather than a change: the adverse-action requirement predates AI by decades and is the single obligation the CFPB has consistently said no model architecture can escape. In practice it forces banks to build explainability tooling (reason-code extraction, factor attribution) around any ML underwriting model so that the principal reasons disclosed match the factors the model actually used. Because the duty is statutory, the May 2025 withdrawal of the CFPB's interpretive circulars did not lessen it.",
    "useCases": [
      "credit-underwriting",
      "fair-lending",
      "model-risk"
    ],
    "faq": [
      {
        "q": "How many reasons must an adverse-action notice give when a model is used?",
        "a": "Regulation B does not fix a number; the Official Interpretation says disclosing more than four reasons is generally not helpful, and the reasons given must be the principal factors actually scored by the model, accurately described."
      },
      {
        "q": "Does Regulation B require lenders to explain the model itself?",
        "a": "No. It requires the specific principal reasons for the individual decision, not the model's design. But a creditor cannot satisfy the rule if its model is too opaque to identify those reasons accurately."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "cfpb-innovation-spotlight-ai-ml-adverse-action-2020",
    "authority": "cfpb",
    "shortName": "CFPB Innovation Spotlight on AI/ML adverse action notices (2020)",
    "title": "Innovation spotlight: Providing adverse action notices when using AI/ML models",
    "aliases": [
      "Innovation spotlight",
      "CFPB innovation spotlight AI/ML",
      "adverse action notices when using AI/ML models"
    ],
    "docType": "Guidance",
    "status": "Final",
    "date": "2020-07-07",
    "link": "https://www.consumerfinance.gov/archive/blog/innovation-spotlight-providing-adverse-action-notices-when-using-ai-ml-models/",
    "appliesTo": "Creditors using or considering AI/ML underwriting models",
    "answerFirst": "In July 2020 the CFPB published an Innovation Spotlight explaining how ECOA and Regulation B accommodate AI and machine-learning underwriting. It noted that Regulation B's Official Interpretations already give creditors flexibility: the sample reasons in Appendix C are illustrative, and a creditor may disclose a reason not on the form if it accurately reflects a factor the model actually used. The post was the Bureau's first written statement that existing adverse-action rules can be met with AI models, and it invited firms to use the Bureau's trial-disclosure and no-action-letter programs to test approaches.",
    "keyPoints": [
      "Confirms ECOA and Regulation B apply to AI/ML models and that flexibility in the regulation lets creditors disclose reasons not listed on sample forms.",
      "Recognizes that AI models may rely on non-traditional data and that reasons must still accurately describe the factors considered.",
      "Encourages firms to use the Bureau's then-existing regulatory sandbox, trial disclosure program and no-action-letter policy (later ended in 2022).",
      "Now hosted in the CFPB archive; the 2022 circular took a stricter tone on 'black-box' models.",
      "Written under Director Kraninger; the Bureau's 2024 comment to Treasury later disavowed sandboxes and no-action letters as unfair advantages."
    ],
    "whatChanged": "It signalled to lenders that AI underwriting was legally viable under existing rules provided the explanation requirement could be met, and set up the framing that later circulars hardened: flexibility on wording, none on accuracy.",
    "useCases": [
      "credit-underwriting",
      "fair-lending"
    ],
    "faq": [
      {
        "q": "Can a lender disclose an adverse-action reason that is not on the Regulation B sample form?",
        "a": "Yes. The sample forms are illustrative; the CFPB's 2020 spotlight and Regulation B's Official Interpretations both say a creditor may and should disclose the actual factor, even if it is not listed."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "cfpb-circular-2022-03",
    "authority": "cfpb",
    "shortName": "CFPB Circular 2022-03",
    "title": "Adverse action notification requirements in connection with credit decisions based on complex algorithms",
    "aliases": [
      "Circular 2022-03",
      "CFPB Circular 2022-03",
      "Consumer Financial Protection Circular 2022-03",
      "black-box credit models circular"
    ],
    "docType": "Circular",
    "status": "Withdrawn",
    "date": "2022-05-26",
    "effectiveDate": "2022-05-26",
    "supersededBy": "cfpb-guidance-withdrawal-2025",
    "link": "https://www.consumerfinance.gov/compliance/circulars/circular-2022-03-adverse-action-notification-requirements-in-connection-with-credit-decisions-based-on-complex-algorithms/",
    "appliesTo": "All creditors subject to ECOA and Regulation B, including banks, credit unions and fintech lenders using algorithmic or machine-learning credit models",
    "answerFirst": "Circular 2022-03, issued May 26, 2022 and published at 87 FR 35864, answered 'yes' to whether creditors using complex algorithms must still give ECOA's statement of specific reasons for adverse action. It stated that the notice requirements 'apply equally to all credit decisions, regardless of the technology used', and that ECOA and Regulation B 'do not permit creditors to use complex algorithms when doing so means they cannot provide the specific and accurate reasons for adverse actions'. The circular was withdrawn on May 12, 2025, but the statutory duty it interpreted is unchanged.",
    "keyPoints": [
      "Question presented: must creditors using 'uninterpretable' or 'black-box' models comply with ECOA's specific-reasons requirement? Response: yes.",
      "Cites Regulation B 1002.9(b)(2): reasons must be specific and indicate the principal reasons; internal standards or failing a scoring cutoff are insufficient.",
      "Cites the Official Interpretation: disclosed reasons must relate to and accurately describe factors actually considered or scored; checking the closest sample-form reason does not comply.",
      "States that a creditor's lack of understanding of its own model is no defense and that creditors must be able to explain adverse decisions.",
      "Announced together with a May 26, 2022 press release, 'CFPB Acts to Protect the Public from Black-Box Credit Models Using Complex Algorithms'.",
      "Listed on the CFPB Withdrawn Guidance page as withdrawn May 12, 2025 (90 FR 20084)."
    ],
    "whatChanged": "The circular converted a permissive 2020 posture into an enforcement warning: model opacity became a compliance risk in itself, effectively requiring explainability tooling around any ML underwriting model. Its 2025 withdrawal removed the Bureau's interpretive statement but not the statute, so most banks have kept the controls it prompted.",
    "useCases": [
      "credit-underwriting",
      "fair-lending",
      "model-risk"
    ],
    "faq": [
      {
        "q": "Was Circular 2022-03 withdrawn?",
        "a": "Yes, effective May 12, 2025, in the CFPB's withdrawal of 67 guidance documents. The ECOA and Regulation B requirements it described remain in force."
      },
      {
        "q": "Did Circular 2022-03 ban black-box models?",
        "a": "No. It said creditors may not use models that leave them unable to identify specific and accurate adverse-action reasons; a complex model with reliable reason-code extraction was acceptable."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "cfpb-joint-statement-automated-systems-2023",
    "authority": "cfpb",
    "shortName": "Joint Statement on Automated Systems (CFPB, DOJ, EEOC, FTC)",
    "title": "Joint Statement on Enforcement Efforts Against Discrimination and Bias in Automated Systems",
    "aliases": [
      "Joint Statement on Automated Systems",
      "joint statement on enforcement efforts against discrimination and bias in automated systems",
      "CFPB DOJ EEOC FTC joint statement"
    ],
    "docType": "Guidance",
    "status": "Final",
    "date": "2023-04-25",
    "link": "https://www.consumerfinance.gov/about-us/newsroom/cfpb-federal-partners-confirm-automated-systems-advanced-technology-not-an-excuse-for-lawbreaking-behavior/",
    "appliesTo": "All entities within the four agencies' jurisdictions, including lenders, servicers and consumer-facing financial firms using automated decision systems",
    "answerFirst": "On April 25, 2023 the CFPB, the Justice Department's Civil Rights Division, the EEOC and the FTC issued a joint statement pledging to enforce existing civil-rights and consumer-protection laws against discriminatory outcomes from automated systems and AI. The CFPB's contribution identified black-box credit models, algorithmic marketing and 'digital redlining' as enforcement priorities and reiterated that advanced technology is not an excuse for lawbreaking. The statement was not among the guidance withdrawn in May 2025, but the Bureau's April 2026 Regulation B rule removed the disparate-impact theory on which much of it relied.",
    "keyPoints": [
      "Four agencies commit to applying existing law (ECOA, FCRA, Title VII, FTC Act, civil-rights statutes) to automated systems.",
      "Identifies sources of bias: unrepresentative or skewed data, opacity of models, and design choices made without regard to context.",
      "CFPB priorities: opaque algorithms in credit decisions, algorithmic marketing and advertising, digital redlining, abusive AI uses that obscure product features, repeat offenders, and whistleblower reports from tech workers.",
      "Director Chopra: regulators must 'stay ahead' of AI growth to prevent discriminatory outcomes.",
      "Statement PDF: files.consumerfinance.gov/f/documents/cfpb_joint-statement-enforcement-against-discrimination-bias-automated-systems_2023-04.pdf"
    ],
    "whatChanged": "It aligned four federal enforcers on the principle that no new law was needed to police AI discrimination and put banks' marketing and underwriting algorithms on notice. With disparate-impact liability under ECOA eliminated by the CFPB in 2026, the statement's practical force for lenders now rests on intentional-discrimination theories, FCRA and state law.",
    "useCases": [
      "fair-lending",
      "credit-underwriting",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Is the 2023 joint statement on automated systems still in effect?",
        "a": "It has not been formally withdrawn and remains on the CFPB site, but the disparate-impact theory it emphasized was removed from Regulation B by the April 2026 final rule, effective July 21, 2026."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "cfpb-chatbots-in-consumer-finance-2023",
    "authority": "cfpb",
    "shortName": "CFPB Chatbots in Consumer Finance (issue spotlight, 2023)",
    "title": "Chatbots in consumer finance",
    "aliases": [
      "Chatbots in consumer finance",
      "CFPB chatbot report",
      "CFPB chatbot issue spotlight"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2023-06-06",
    "link": "https://www.consumerfinance.gov/data-research/research-reports/chatbots-in-consumer-finance/",
    "appliesTo": "Banks, card issuers, servicers and fintechs deploying chatbots or generative-AI assistants for customer service",
    "answerFirst": "The CFPB's June 6, 2023 issue spotlight found that all of the top 10 US commercial banks had deployed chatbots and that roughly 37% of the US population — over 98 million people — interacted with a bank chatbot in 2022. It warned that chatbots that give inaccurate information, fail to recognize disputes, or block access to a human can violate federal consumer law, and that institutions remain responsible for timely, straightforward answers 'regardless of the processes or technologies used'.",
    "keyPoints": [
      "Adoption data: every top-10 commercial bank uses a chatbot; Bank of America's Erica had nearly 32 million users and over 1 billion interactions by October 2022.",
      "Risks: inaccurate or unreliable answers, 'doom loops' that prevent reaching a human, failure to recognize a dispute or error notice, and privacy/security exposure of customer data.",
      "Legal hooks: statutory dispute and error-resolution duties (e.g. Regulation E and Regulation Z), UDAAP, and FCRA; a chatbot that impedes these can be a violation.",
      "Flags the shift from relationship banking to algorithmic banking and the growing use of large language models.",
      "States the CFPB is monitoring the market and expects institutions to ensure chatbots comply with law."
    ],
    "whatChanged": "It put customer-service AI, not just underwriting, inside the CFPB's supervisory lens, and gave banks a concrete standard: chatbots must give accurate information, recognize legally significant customer communications (disputes, error notices) and provide a path to a human.",
    "useCases": [
      "customer-chatbots",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "Can a bank's chatbot violate consumer protection law?",
        "a": "Yes. The CFPB's 2023 report says a chatbot that gives inaccurate information, fails to act on a dispute, or prevents access to a human can breach dispute-resolution rules and UDAAP, and the bank is liable regardless of the technology."
      },
      {
        "q": "Does the CFPB require a human escalation path from chatbots?",
        "a": "There is no specific rule, but the report identifies inability to reach a live agent as a source of law violations and consumer harm; most banks treat human escalation as a control expectation."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "cfpb-circular-2023-03",
    "authority": "cfpb",
    "shortName": "CFPB Circular 2023-03",
    "title": "Adverse action notification requirements and the proper use of the CFPB's sample forms provided in Regulation B",
    "aliases": [
      "Circular 2023-03",
      "CFPB Circular 2023-03",
      "Consumer Financial Protection Circular 2023-03"
    ],
    "docType": "Circular",
    "status": "Withdrawn",
    "date": "2023-09-19",
    "effectiveDate": "2023-09-19",
    "supersededBy": "cfpb-guidance-withdrawal-2025",
    "link": "https://www.consumerfinance.gov/compliance/circulars/circular-2023-03-adverse-action-notification-requirements-and-the-proper-use-of-the-cfpbs-sample-forms-provided-in-regulation-b/",
    "appliesTo": "All creditors subject to ECOA and Regulation B, particularly those using AI or other complex models with non-traditional data",
    "answerFirst": "Circular 2023-03, issued September 19, 2023 (published at 89 FR 27361 in April 2024), addressed lenders using AI and other complex models that consider data not on the Regulation B sample forms. It stated that creditors may not rely solely on the checklist of reasons in sample form C-1 and must disclose the actual principal reasons, even where the factor — such as an applicant's purchasing behavior — is unexpected or not on the form. The circular was withdrawn on May 12, 2025.",
    "keyPoints": [
      "Extends Circular 2022-03: the sample forms in Appendix C are illustrative; a creditor must state the specific reason actually used, not the closest listed reason.",
      "Applies where models consider unconventional data, including data harvested from consumer surveillance or behavioral data.",
      "Reasons must be specific enough to let the applicant understand and act on them.",
      "Announced with a September 19, 2023 press release, 'CFPB Issues Guidance on Credit Denials by Lenders Using Artificial Intelligence'.",
      "Listed on the Withdrawn Guidance page as withdrawn May 12, 2025."
    ],
    "whatChanged": "It closed the gap left by the sample forms: banks using alternative-data or ML models could no longer map model outputs to generic checklist reasons. Even after withdrawal, the Regulation B Official Interpretation it relied on still says sample-form reasons that were not actually used do not satisfy the notice requirement.",
    "useCases": [
      "credit-underwriting",
      "fair-lending",
      "data-privacy"
    ],
    "faq": [
      {
        "q": "Can a lender use the Regulation B sample form checklist for AI model denials?",
        "a": "Only if the checked reasons are the principal factors the model actually used. Circular 2023-03 (now withdrawn) and the Regulation B Official Interpretation both say a creditor cannot simply select the closest listed reason."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "cfpb-comment-treasury-ai-rfi-2024",
    "authority": "cfpb",
    "shortName": "CFPB comment to Treasury on AI in financial services (2024)",
    "title": "CFPB Comment on Request for Information on Uses, Opportunities, and Risks of Artificial Intelligence in the Financial Services Sector",
    "aliases": [
      "CFPB comment on Treasury AI RFI",
      "CFPB comment letter on artificial intelligence",
      "no fancy new technology carveout"
    ],
    "docType": "Letter",
    "status": "Final",
    "date": "2024-08-12",
    "link": "https://www.consumerfinance.gov/archive/newsroom/cfpb-comment-on-request-for-information-on-uses-opportunities-and-risks-of-artificial-intelligence-in-the-financial-services-sector/",
    "appliesTo": "Providers of consumer financial products using AI, including for chatbots, fraud screening, underwriting and pricing",
    "answerFirst": "On August 12, 2024 the CFPB responded to Treasury's June 2024 RFI on AI in financial services, stating that there is 'no fancy new technology carveout' to federal consumer financial law. The comment named chatbots, fraud-detection models, algorithmic underwriting and pricing as areas of compliance risk, stressed that fair-lending testing of complex models must include a search for less discriminatory alternatives, and explained why the Bureau had ended its sandbox and no-action-letter programs.",
    "keyPoints": [
      "Existing laws (ECOA, FCRA, EFTA, UDAAP) apply fully to AI; the Bureau will assess AI uses against them.",
      "Chatbots must give accurate information and honor dispute and error-resolution obligations.",
      "Algorithmic lending and fraud-screening tools must meet ECOA standards, including adverse-action notices.",
      "Fair-lending testing of complex models should include searching for less discriminatory alternatives (LDAs).",
      "Warns about algorithmic pricing and use of personal data to set prices, and about firms marketing AI while obscuring product terms.",
      "Rejects firm-specific regulatory sandboxes and no-action letters as unfair competitive advantages that waived protections.",
      "Now hosted in the CFPB archive, reflecting the 2025 change in Bureau leadership."
    ],
    "whatChanged": "It is the fullest single statement of the pre-2025 CFPB's AI position and the source of the widely quoted 'no fancy new technology carveout' line. The LDA-search expectation it endorsed has been undercut by the 2026 Regulation B rule eliminating disparate-impact liability, but the chatbot, fraud and adverse-action points rest on statutory provisions that remain in force.",
    "useCases": [
      "governance-general",
      "customer-chatbots",
      "fraud",
      "credit-underwriting",
      "fair-lending"
    ],
    "faq": [
      {
        "q": "Did the CFPB tell Treasury it needed new AI rules?",
        "a": "No. Its August 2024 comment argued that existing consumer-protection laws already cover AI and that uniform enforcement, not special AI regimes or sandboxes, best supports innovation."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "cfpb-guidance-withdrawal-2025",
    "authority": "cfpb",
    "shortName": "CFPB withdrawal of 67 guidance documents (May 2025)",
    "title": "Interpretive Rules, Policy Statements, and Advisory Opinions; Withdrawal",
    "aliases": [
      "withdrawal of 67 guidance documents",
      "90 FR 20084",
      "CFPB guidance withdrawal",
      "2025-08286"
    ],
    "docType": "Regulation",
    "status": "In force",
    "date": "2025-05-12",
    "effectiveDate": "2025-05-12",
    "supersedes": [
      "cfpb-circular-2022-03",
      "cfpb-circular-2023-03"
    ],
    "link": "https://www.federalregister.gov/documents/2025/05/12/2025-08286/interpretive-rules-policy-statements-and-advisory-opinions-withdrawal",
    "appliesTo": "All entities previously relying on the withdrawn CFPB guidance, including banks and lenders using algorithmic credit models",
    "answerFirst": "On May 12, 2025 the CFPB published a Federal Register notice withdrawing 67 guidance documents issued since 2011: 8 policy statements, 7 interpretive rules, 13 advisory opinions and 39 other documents. Among them were Circular 2022-03 (adverse action and complex algorithms), Circular 2023-03 (adverse action and sample forms) and Circular 2024-06 (background dossiers and algorithmic scores in employment). The notice said the Bureau would issue guidance only where necessary and that withdrawal does not change the underlying statutes and regulations.",
    "keyPoints": [
      "Withdrawals effective May 12, 2025; the CFPB maintains a public Withdrawn Guidance page listing each document.",
      "AI-relevant items withdrawn: Circular 2022-03 (87 FR 35864), Circular 2023-03 (89 FR 27361), Circular 2024-06 (89 FR 88875), plus several FCRA advisory opinions.",
      "Stated rationale: reduce regulatory burden, avoid guidance that imposes obligations beyond statute, and re-evaluate remaining guidance.",
      "The Bureau said it may reissue some documents after review; as of August 2026 no AI adverse-action guidance has been reissued.",
      "ECOA, Regulation B section 1002.9, FCRA and UDAAP obligations are untouched."
    ],
    "whatChanged": "Banks lost the Bureau's written interpretation of how adverse-action rules apply to ML models, increasing legal uncertainty at the margins (e.g. how granular reasons must be) while the core duty to give specific, accurate reasons continued. State regulators and private litigants now cite the statute and the withdrawn circulars' reasoning directly.",
    "useCases": [
      "credit-underwriting",
      "fair-lending",
      "governance-general"
    ],
    "faq": [
      {
        "q": "What AI-related CFPB guidance was withdrawn in May 2025?",
        "a": "Circular 2022-03 on adverse action and complex algorithms, Circular 2023-03 on adverse action and sample forms, and Circular 2024-06 on FCRA and algorithmic scores in employment, along with several FCRA advisory opinions."
      },
      {
        "q": "Does withdrawal of a CFPB circular change the law?",
        "a": "No. Circulars are interpretive; the notice itself says withdrawal does not alter statutes or regulations. Lenders still must comply with ECOA section 701(d) and Regulation B section 1002.9."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "cfpb-regulation-b-final-rule-2026",
    "authority": "cfpb",
    "shortName": "Regulation B final rule on disparate impact (April 2026)",
    "title": "Equal Credit Opportunity Act (Regulation B) — final rule amending disparate impact, discouragement and special purpose credit program provisions",
    "aliases": [
      "Regulation B final rule",
      "91 FR 21620",
      "2026-07804",
      "ECOA disparate impact rule",
      "Docket CFPB-2025-0039"
    ],
    "docType": "Regulation",
    "status": "In force",
    "date": "2026-04-22",
    "effectiveDate": "2026-07-21",
    "link": "https://www.federalregister.gov/documents/2026/04/22/2026-07804/equal-credit-opportunity-act-regulation-b",
    "appliesTo": "All creditors subject to ECOA and Regulation B (12 CFR part 1002)",
    "answerFirst": "Published April 22, 2026 at 91 FR 21620 and effective July 21, 2026, the CFPB's Regulation B final rule provides that ECOA does not authorize disparate-impact liability (the 'effects test'), narrows the prohibition on 'discouragement' to statements of intent to discriminate, and restricts special purpose credit programs, including barring race, color, national origin or sex as the common characteristic. The rule was proposed November 13, 2025 and finalized as proposed. It did not amend the adverse-action notice requirements in section 1002.9.",
    "keyPoints": [
      "Removes the effects-test language from Regulation B and its commentary; the Bureau's position is that ECOA's text authorizes only disparate-treatment claims.",
      "Discouragement (1002.4(b)) now covers statements expressing intent to discriminate on a prohibited basis, not statements that merely create a negative impression; encouraging statements are not discouragement.",
      "Special purpose credit programs: for-profit creditors face added conditions, and programs may not use race, color, national origin or sex as the common characteristic.",
      "Commenters argued disparate-impact liability was essential for AI-driven underwriting and algorithmic marketing; the Bureau finalized the rule anyway.",
      "Docket CFPB-2025-0039, RIN 3170-AB54; the proposed rule was issued November 13, 2025, with corrections published at 91 FR 9191 (Feb. 25, 2026).",
      "Adverse-action notice rules (1002.9) and the specific-reasons requirement are unchanged."
    ],
    "whatChanged": "For AI in lending this is the most consequential CFPB action since 2022. Disparate impact was the primary legal theory under which model outcomes — not intent — could be challenged, and the basis for 'less discriminatory alternative' testing. Its removal from Regulation B shifts AI fair-lending risk toward disparate treatment (including proxy variables), HUD's Fair Housing Act rules for mortgages, state laws such as New York's and Colorado's, and private litigation over the rule's validity. Explainability obligations for adverse action are untouched.",
    "useCases": [
      "fair-lending",
      "credit-underwriting",
      "model-risk"
    ],
    "faq": [
      {
        "q": "Do banks still need to test AI credit models for disparate impact after the 2026 Regulation B rule?",
        "a": "The CFPB no longer recognizes disparate-impact liability under ECOA as of July 21, 2026, but prudential regulators' fair-lending exams, the Fair Housing Act for mortgages, state laws and potential litigation over the rule mean most banks continue outcome testing as a risk-management practice."
      },
      {
        "q": "Did the 2026 rule change adverse-action notices?",
        "a": "No. Section 1002.9's requirement to give specific principal reasons within 30 days is unchanged and applies equally to machine-learning models."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "sec-pda-conflicts-proposal-34-97990",
    "authority": "sec",
    "shortName": "SEC Predictive Data Analytics proposal (34-97990)",
    "title": "Conflicts of Interest Associated with the Use of Predictive Data Analytics by Broker-Dealers and Investment Advisers — proposed rule",
    "aliases": [
      "Release 34-97990",
      "predictive data analytics rule",
      "PDA proposal",
      "File No. S7-12-23"
    ],
    "docType": "Consultation",
    "status": "Withdrawn",
    "date": "2023-07-26",
    "commentDeadline": "2023-10-10",
    "supersededBy": "sec-pda-proposal-withdrawal-33-11377",
    "link": "https://www.sec.gov/rules-regulations/2025/06/s7-12-23",
    "appliesTo": "SEC-registered broker-dealers and investment advisers, including bank-affiliated firms, in any 'investor interaction' using a covered technology",
    "answerFirst": "On July 26, 2023 the SEC proposed rules (Release 34-97990, File No. S7-12-23) requiring broker-dealers and investment advisers to identify conflicts of interest arising from their use of 'covered technology' — analytical, technological, or computational functions that optimize for, predict, guide, forecast, or direct investment-related behaviors — and to eliminate or neutralize any conflict that placed the firm's interest ahead of investors'. The proposal was published in the Federal Register on August 9, 2023 with comments due October 10, 2023, drew heavy industry opposition, and was formally withdrawn on June 12, 2025.",
    "keyPoints": [
      "Would have added new Rule 15l-2 under the Exchange Act (broker-dealers) and Rule 211(h)(2)-4 under the Advisers Act (investment advisers).",
      "'Covered technology' was defined broadly enough to reach not only AI and machine learning but many conventional analytics, spreadsheets, and behavioral-design features in apps.",
      "Firms would have had to evaluate any use or reasonably foreseeable potential use of a covered technology in investor interactions, and eliminate or neutralize the effect of conflicts — disclosure alone would not have sufficed.",
      "Required written policies and procedures reasonably designed to achieve compliance, plus books-and-records of each evaluation and determination.",
      "Chair Gensler framed it as technology-neutral: firms must meet their obligation not to put their own interests first regardless of the tool.",
      "Comment period ran 60 days from Federal Register publication (August 9, 2023) to October 10, 2023."
    ],
    "whatChanged": "It never took effect, but for two years it shaped how bank broker-dealers and advisers inventoried their models and digital-engagement features, because the definition of covered technology would have captured recommendation engines, robo-advice, and even prompts and nudges in mobile apps. Its withdrawal removed the prospect of an 'eliminate or neutralize' standard, leaving firms under the disclosure-and-mitigation framework of Regulation Best Interest and the Advisers Act fiduciary duty.",
    "useCases": [
      "governance-general",
      "customer-chatbots",
      "trading-markets",
      "model-risk"
    ],
    "faq": [
      {
        "q": "Is the SEC predictive data analytics rule still pending?",
        "a": "No. The Commission withdrew it on June 12, 2025 along with 13 other proposals and stated it does not intend to issue a final rule; any future action would come as a new proposal."
      },
      {
        "q": "What was 'covered technology' in the SEC PDA proposal?",
        "a": "Any analytical, technological, or computational function, algorithm, model, correlation matrix, or similar method that optimizes for, predicts, guides, forecasts, or directs investment-related behaviors or outcomes — a definition critics said swept in ordinary spreadsheets and calculators."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "sec-gensler-ai-washing-speech-2024",
    "warning": true,
    "authority": "sec",
    "shortName": "Gensler 'AI washing' remarks at Yale (Feb 2024)",
    "title": "AI, Finance, Movies, and the Law — Prepared Remarks Before the Yale Law School",
    "aliases": [
      "AI, Finance, Movies, and the Law",
      "Gensler Yale AI speech",
      "AI washing warning"
    ],
    "docType": "Speech",
    "status": "Final",
    "date": "2024-02-13",
    "link": "https://www.sec.gov/newsroom/speeches-statements/gensler-ai-021324",
    "appliesTo": "Public companies (including bank holding companies), broker-dealers, and investment advisers",
    "answerFirst": "On February 13, 2024 SEC Chair Gary Gensler used a Yale Law School speech to put 'AI washing' on the record as a securities-law problem: public companies and investment advisers that overstate their AI use or make boilerplate AI disclosures risk violating the antifraud provisions. He also flagged 'macro' risks — model and data-source monoculture leading to herding — and 'micro' issues of deception, hallucination, and conflicts in adviser and broker AI. The Delphia and Global Predictions settlements followed five weeks later.",
    "keyPoints": [
      "Coined the enforcement frame: 'AI washing' — claims about AI that are false, misleading, or not particularized to the company — can breach securities laws.",
      "Told issuers to ask whether AI discussed on earnings calls or with the board is material, and if so to disclose it specifically rather than generically.",
      "Warned advisers and brokers that AI does not change their fiduciary or Reg BI obligations, including managing conflicts in recommendation engines.",
      "Raised systemic concern about dependence on a handful of foundation models and data aggregators."
    ],
    "whatChanged": "It converted AI disclosure from a marketing question into a liability question for bank holding companies and their advisory arms. Investor-relations and compliance teams began reviewing 10-K risk factors, MD&A, and adviser marketing for AI claims that could not be substantiated.",
    "useCases": [
      "governance-general",
      "generative-agentic-ai",
      "model-risk"
    ],
    "faq": [
      {
        "q": "When did the SEC first warn about AI washing?",
        "a": "Chair Gensler's February 13, 2024 Yale Law School speech was the first extended public statement; the first settled cases (Delphia and Global Predictions) came March 18, 2024."
      },
      {
        "q": "Does AI washing apply to banks?",
        "a": "Yes, to any SEC-reporting bank holding company's filings and public statements, and to bank-affiliated advisers' and broker-dealers' marketing."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "sec-delphia-global-predictions-ai-washing-2024",
    "authority": "sec",
    "shortName": "Delphia / Global Predictions AI-washing settlements",
    "title": "SEC Charges Two Investment Advisers with Making False and Misleading Statements About Their Use of Artificial Intelligence",
    "aliases": [
      "Delphia settlement",
      "Global Predictions settlement",
      "Press Release 2024-36",
      "first AI washing cases"
    ],
    "docType": "Enforcement",
    "status": "Final",
    "date": "2024-03-18",
    "link": "https://www.sec.gov/newsroom/press-releases/2024-36",
    "appliesTo": "SEC-registered investment advisers, including bank-owned advisers and wealth-management units",
    "answerFirst": "On March 18, 2024 the SEC announced settled charges against investment advisers Delphia (USA) Inc. and Global Predictions Inc. for false and misleading statements about their use of artificial intelligence — the first 'AI washing' enforcement actions. Delphia paid a $225,000 civil penalty for claiming from 2019 to 2023 that it used AI and machine learning on client data when it did not; Global Predictions paid $175,000 for calling itself the 'first regulated AI financial advisor' and promising 'expert AI-driven forecasts' it could not deliver. Both were censured, ordered to cease and desist, and found to have violated the Advisers Act Marketing Rule.",
    "keyPoints": [
      "Total civil penalties of $400,000 ($225,000 Delphia; $175,000 Global Predictions).",
      "Delphia's misstatements appeared in SEC filings (Form ADV), a press release, and its website — not just marketing.",
      "Global Predictions also violated the Marketing Rule on tax-loss harvesting claims and included an impermissible liability hedge clause in its advisory contract.",
      "Charged under the Advisers Act antifraud provisions and the Marketing Rule (Rule 206(4)-1), which bars untrue statements of material fact in advertisements.",
      "Chair Gensler: 'Investment advisers should not mislead the public by saying they are using an AI model when they are not. Such AI washing hurts investors.'"
    ],
    "whatChanged": "It established that claiming AI capabilities you do not have is a Marketing Rule and antifraud violation, without any AI-specific rule. Bank advisory units responded by requiring substantiation files for AI claims in pitch books, websites, and Form ADV Part 2.",
    "useCases": [
      "governance-general",
      "model-risk"
    ],
    "faq": [
      {
        "q": "What were the penalties in the Delphia and Global Predictions cases?",
        "a": "$225,000 for Delphia and $175,000 for Global Predictions — $400,000 in total — plus censure and cease-and-desist orders."
      },
      {
        "q": "Which rule did the SEC use to charge AI washing by advisers?",
        "a": "The Advisers Act antifraud provisions and the Marketing Rule (Rule 206(4)-1), which prohibits advertisements containing untrue statements of material fact."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "sec-exam-priorities-fy2025",
    "authority": "sec",
    "shortName": "Division of Examinations FY2025 Priorities",
    "title": "Examination Priorities: Fiscal Year 2025 — Division of Examinations",
    "aliases": [
      "2025 Examination Priorities",
      "FY2025 exam priorities",
      "Press Release 2024-172"
    ],
    "docType": "Report",
    "status": "Superseded",
    "date": "2024-10-21",
    "supersededBy": "sec-exam-priorities-fy2026",
    "link": "https://www.sec.gov/files/2025-exam-priorities.pdf",
    "appliesTo": "SEC-registered investment advisers, broker-dealers, funds, and other registrants, including bank-affiliated firms",
    "answerFirst": "Released October 21, 2024, the FY2025 Examination Priorities named artificial intelligence a headline risk area alongside fiduciary duty, standards of conduct, and cybersecurity. Examiners were told to review registrant representations about AI capabilities for accuracy, assess whether firms have policies to monitor and supervise AI used in fraud prevention and detection, back-office operations, anti-money laundering, and trading, and examine how firms protect client records from loss or misuse through third-party AI models and tools.",
    "keyPoints": [
      "Four-part test for digital engagement practices and automated advice: representations fair and accurate; operations and controls consistent with disclosures; algorithms produce advice consistent with investor profiles; controls confirm regulatory obligations are met, including for older investors.",
      "Explicit list of AI functions to be supervised: fraud prevention and detection, back-office, AML, and trading.",
      "First priorities document to flag data-leakage risk from third-party AI models and tools.",
      "Noted that some registrants are developing generative-AI applications and integrating AI into portfolio management and valuation.",
      "Reviews also cover 'regtech' used to automate internal compliance processes."
    ],
    "whatChanged": "FY2025 was the first year the SEC's exam program treated AI as a standalone focus rather than a subset of cybersecurity. Bank-owned advisers and broker-dealers began receiving document requests for AI inventories, AI policies, and substantiation of AI marketing claims.",
    "useCases": [
      "governance-general",
      "aml-kyc",
      "fraud",
      "trading-markets",
      "third-party-vendors",
      "data-privacy"
    ],
    "faq": [
      {
        "q": "What AI uses did the SEC say it would examine in FY2025?",
        "a": "AI used for fraud prevention and detection, back-office operations, anti-money laundering, and trading, plus the accuracy of any representations about AI capabilities and the protection of client data used with third-party AI tools."
      },
      {
        "q": "Is the FY2025 priorities document still current?",
        "a": "No; it was superseded by the FY2026 priorities released November 17, 2025, which carry the AI section forward with minor changes."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "sec-presto-automation-ai-washing-2025",
    "authority": "sec",
    "shortName": "Presto Automation AI-washing order",
    "title": "SEC Charges Restaurant-Technology Company Presto Automation for Misleading Statements About AI Product",
    "aliases": [
      "Presto Automation order",
      "Release 33-11352",
      "Presto Voice AI case"
    ],
    "docType": "Enforcement",
    "status": "Final",
    "date": "2025-01-14",
    "link": "https://www.sec.gov/enforcement-litigation/administrative-proceedings/33-11352-s",
    "appliesTo": "SEC-reporting public companies, including bank holding companies, and their disclosure controls",
    "answerFirst": "On January 14, 2025 the SEC settled its first AI-washing case against a public company. Presto Automation Inc., a formerly Nasdaq-listed restaurant-technology firm, misled investors from November 2021 through May 2023 about its Presto Voice drive-thru product by failing to disclose that the AI speech recognition was for a period owned and operated by a third party, and by claiming its own AI eliminated human order-taking when the vast majority of orders required human intervention. The SEC found violations of Securities Act Section 17(a)(2) and Exchange Act Section 13(a) and Rules 13a-11 and 13a-15(a), imposed a cease-and-desist order, and waived a civil penalty for cooperation and remediation.",
    "keyPoints": [
      "First SEC AI-washing action against a public company; the earlier cases involved investment advisers.",
      "Two misstatements: undisclosed reliance on a third-party AI vendor, and overstated automation ('no human intervention') rates.",
      "Charged under negligence-based Section 17(a)(2) and reporting and disclosure-controls provisions (Rule 13a-15(a)) — not scienter-based fraud.",
      "No civil penalty because of cooperation and remedial efforts; Presto consented without admitting or denying.",
      "Signals that disclosure controls must be able to verify technical claims about AI performance and provenance."
    ],
    "whatChanged": "For bank holding companies, Presto made two things explicit: describing vendor-supplied AI as your own can be materially misleading, and claimed automation rates must be supportable. Disclosure committees now typically require the technology owner to sign off on AI statements in filings and investor decks.",
    "useCases": [
      "governance-general",
      "third-party-vendors",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "Was Presto Automation fined for AI washing?",
        "a": "No civil penalty was imposed, on account of the company's cooperation and remediation, but it was ordered to cease and desist from violating Securities Act Section 17(a)(2) and Exchange Act reporting and disclosure-controls rules."
      },
      {
        "q": "Why does a restaurant-tech case matter for banks?",
        "a": "The theory — undisclosed third-party AI and overstated automation — applies to any public company, and the charges were brought under disclosure-controls rules every bank holding company is subject to."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "sec-nate-saniger-ai-washing-2025",
    "authority": "sec",
    "shortName": "SEC v. Saniger (Nate, Inc.)",
    "title": "SEC Charges Founder of Nate, Inc. with Fraud Over False Claims About the Company's Use of Artificial Intelligence",
    "aliases": [
      "SEC v. Saniger",
      "Nate AI fraud case",
      "Litigation Release 26282",
      "Albert Saniger"
    ],
    "docType": "Enforcement",
    "status": "Final",
    "date": "2025-04-09",
    "link": "https://www.sec.gov/enforcement-litigation/litigation-releases/lr-26282",
    "appliesTo": "Issuers and executives raising capital on AI claims; relevant to bank venture, private-markets, and lending desks that diligence AI startups",
    "answerFirst": "On April 9, 2025 the SEC sued Albert Saniger, founder and former CEO of shopping-app startup Nate, Inc., in the Southern District of New York for raising more than $42 million from investors between 2019 and December 2022 by claiming the app used AI to complete purchases without human involvement, when in fact contract workers manually processed orders. The U.S. Attorney's Office for SDNY filed parallel criminal charges. The SEC charges Securities Act Section 17(a) and Exchange Act Section 10(b) and Rule 10b-5 violations and seeks injunctions, an officer-and-director bar, disgorgement, and civil penalties.",
    "keyPoints": [
      "First AI-washing action brought under Chairman Atkins, showing continuity of the enforcement theory across administrations.",
      "Over $42 million raised on representations that the 'AI' was automated; the SEC alleges it was largely manual labor.",
      "Parallel SEC civil and DOJ criminal cases — AI washing can be prosecuted as wire and securities fraud.",
      "Private company, not an SEC registrant: the antifraud provisions reach any securities offering."
    ],
    "whatChanged": "It extended AI-washing liability from registrants and public companies to private capital-raising and to individual executives, with criminal exposure. For banks it raised the diligence bar on AI claims by fintech partners, venture investments, and borrowers.",
    "useCases": [
      "governance-general",
      "third-party-vendors"
    ],
    "faq": [
      {
        "q": "What is the Nate AI fraud case?",
        "a": "An April 9, 2025 SEC civil action and parallel SDNY criminal case against founder Albert Saniger, alleging Nate raised over $42 million by claiming AI completed purchases that were actually processed by contract workers."
      },
      {
        "q": "Can AI washing be a crime?",
        "a": "Yes. In the Nate case the SEC's civil charges were accompanied by a criminal indictment from the U.S. Attorney's Office for the Southern District of New York."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "sec-pda-proposal-withdrawal-33-11377",
    "authority": "sec",
    "shortName": "SEC withdrawal of proposed rules (33-11377)",
    "title": "Withdrawal of Proposed Regulatory Actions — including the predictive data analytics conflicts proposal",
    "aliases": [
      "Release 33-11377",
      "Release 34-103247",
      "withdrawal of 14 proposed rules"
    ],
    "docType": "Regulation",
    "status": "Final",
    "date": "2025-06-12",
    "supersedes": [
      "sec-pda-conflicts-proposal-34-97990"
    ],
    "link": "https://www.federalregister.gov/documents/2025/06/17/2025-11039/withdrawal-of-proposed-regulatory-actions",
    "appliesTo": "All SEC registrants that would have been covered by the withdrawn proposals; for AI purposes, broker-dealers and investment advisers",
    "answerFirst": "On June 12, 2025 the SEC issued Release Nos. 33-11377, 34-103247, IA-6885 and IC-35635 formally withdrawing 14 notices of proposed rulemaking issued between March 2022 and November 2023, including the July 2023 predictive data analytics conflicts proposal (34-97990). The notice states the Commission 'does not intend to issue final rules with respect to these proposals' and that any future action in these areas would begin with a new proposed rule. It was published in the Federal Register on June 17, 2025.",
    "keyPoints": [
      "Withdraws the predictive data analytics conflicts proposal for broker-dealers and investment advisers outright rather than deferring it.",
      "Other withdrawn proposals included the adviser outsourcing, safeguarding (custody), and cybersecurity risk-management proposals, which also touched AI and third-party model use.",
      "The Commission committed that any renewed effort would go through a fresh notice-and-comment process.",
      "Leaves AI conflicts governed by Regulation Best Interest, Advisers Act Section 206, and the Marketing Rule."
    ],
    "whatChanged": "For bank broker-dealer and adviser arms, the withdrawal ended the compliance planning for a conflicts-elimination regime specific to algorithms. It did not lower the bar on existing duties: SEC examiners and enforcement continue to treat conflicted or misrepresented AI use as a Reg BI, fiduciary, or antifraud issue.",
    "useCases": [
      "governance-general",
      "customer-chatbots"
    ],
    "faq": [
      {
        "q": "Which SEC AI rule was withdrawn in June 2025?",
        "a": "The July 2023 proposal on Conflicts of Interest Associated with the Use of Predictive Data Analytics by Broker-Dealers and Investment Advisers (Release 34-97990, File No. S7-12-23)."
      },
      {
        "q": "Could the SEC revive the predictive data analytics rule?",
        "a": "Only through a new proposed rule. The withdrawal notice says the Commission does not intend to finalize the 2023 proposal."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "sec-exam-priorities-fy2026",
    "authority": "sec",
    "shortName": "Division of Examinations FY2026 Priorities",
    "title": "Examination Priorities: Fiscal Year 2026 — Division of Examinations",
    "aliases": [
      "2026 Examination Priorities",
      "FY2026 exam priorities",
      "Press Release 2025-132"
    ],
    "docType": "Report",
    "status": "In force",
    "date": "2025-11-17",
    "effectiveDate": "2025-11-17",
    "supersedes": [
      "sec-exam-priorities-fy2025"
    ],
    "link": "https://www.sec.gov/files/2026-exam-priorities.pdf",
    "appliesTo": "SEC-registered investment advisers, broker-dealers, funds, transfer agents, and SCI entities, including bank-affiliated firms",
    "answerFirst": "The FY2026 Examination Priorities, released November 17, 2025, keep AI and automated investment tools as an 'Emerging Financial Technology' focus. Examiners will 'focus on recent advancements in AI,' review AI-capability representations for accuracy, and test whether firms have adequate policies and procedures to monitor and supervise AI used in fraud prevention and detection, back-office operations, AML, and trading. The cybersecurity section adds a new item: training and security controls for risks from AI-enabled and polymorphic malware attacks, and how firms operationalize threat intelligence.",
    "keyPoints": [
      "Same four-part test as FY2025 for automated advisory services and recommendations: fair and accurate representations; controls consistent with disclosures; algorithms consistent with investor profiles; controls confirming obligations to retail and older investors.",
      "New emphasis on 'recent advancements in AI' — read by practitioners as generative and agentic tools.",
      "AI-enabled attacks and polymorphic malware appear for the first time under information security and operational resiliency.",
      "Regulation S-P amendments: examiners will engage firms on incident-response programs ahead of compliance dates and test them afterward.",
      "Regulation S-ID identity-theft programs, third-party vendor oversight, and governance remain in scope — all of which touch AI-driven fraud and account-takeover detection.",
      "The Division describes 2026 as a 'modified approach' with renewed focus on Reg BI, fiduciary conduct, complex products, and broker-dealer financial responsibility."
    ],
    "whatChanged": "For bank broker-dealers and advisers this is the operative SEC statement on AI in 2026, filling the gap left by the withdrawn PDA rule. It makes clear that the SEC's approach is supervision and disclosure accuracy, not conflict elimination, and it adds AI-enabled cyber threats as an examination topic in their own right.",
    "useCases": [
      "governance-general",
      "cybersecurity",
      "aml-kyc",
      "fraud",
      "trading-markets",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "What does the SEC's 2026 exam priorities document say about AI?",
        "a": "Examiners will review AI representations for accuracy, assess policies to supervise AI in fraud detection, back-office, AML and trading, check that automated advice matches investor profiles, and look at controls against AI-enabled and polymorphic malware attacks."
      },
      {
        "q": "When were the SEC 2026 examination priorities released?",
        "a": "November 17, 2025, for the fiscal year that began October 1, 2025."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "sec-iac-ai-disclosure-recommendation-2025",
    "authority": "sec",
    "shortName": "Investor Advisory Committee AI disclosure recommendation",
    "title": "Recommendation of the SEC Investor Advisory Committee Regarding the Disclosure of Artificial Intelligence's Impact on Operations",
    "aliases": [
      "IAC AI disclosure recommendation",
      "Investor Advisory Committee AI recommendation",
      "December 4, 2025 IAC recommendation"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2025-12-04",
    "link": "https://www.sec.gov/files/approved-artificial-intelligence-disclosure-recommendation-120425.pdf",
    "appliesTo": "SEC-reporting issuers, including bank holding companies — advisory only; not binding on the Commission",
    "answerFirst": "On December 4, 2025 the SEC's Investor Advisory Committee approved a recommendation that the Commission issue guidance requiring issuers to (1) adopt a definition of 'artificial intelligence', (2) disclose board oversight mechanisms, if any, for AI deployment, and (3) if material, report separately on how AI is deployed and its effects on internal operations and on consumer-facing matters. The Committee proposed integrating this into existing Regulation S-K items rather than creating a new line item, citing that 60% of S&P 500 companies view AI as a material risk while disclosure remains inconsistent. The vote was not unanimous, and Chairman Atkins has since said materiality-based disclosure, not new mandates, is the Commission's approach.",
    "keyPoints": [
      "Grew out of a March 6, 2025 IAC panel, 'Disclosure of Artificial Intelligence's Impact on Operations', with panelists from Franklin Templeton, CalSTRS, and the Society for Corporate Governance.",
      "Three recommendations: define AI; disclose board oversight; separately report material AI deployment effects on internal operations and consumer-facing activity.",
      "Would be housed in existing Regulation S-K items (business description, risk factors, cybersecurity governance, MD&A) rather than a standalone AI item.",
      "Cites Deloitte/USC research that 60% of S&P 500 companies treat AI as a material risk, with inconsistent disclosure across industries.",
      "Two members voted against and two abstained, per contemporaneous accounts, citing added burden and tension with the Commission's disclosure-reduction agenda.",
      "Advisory only — the Commission is not required to act, and as of August 2026 it has not."
    ],
    "whatChanged": "It is the most concrete statement to date of what investor representatives want from AI disclosure, and a likely template for future comment letters and shareholder proposals aimed at bank holding companies. Banks disclosing AI in credit, fraud, or customer service can use the three-part structure as a defensible framework even without SEC action.",
    "useCases": [
      "governance-general",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "Did the SEC adopt AI disclosure rules in 2025?",
        "a": "No. The Investor Advisory Committee recommended AI disclosure guidance on December 4, 2025, but the Commission has not acted, and Chairman Atkins has said existing materiality principles should govern AI disclosure."
      },
      {
        "q": "What did the IAC recommend companies disclose about AI?",
        "a": "A company-specific definition of AI, board oversight mechanisms for AI, and — where material — separate reporting on AI's effects on internal operations and on consumer-facing activities, within existing Regulation S-K items."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "sec-atkins-fsoc-ai-roundtable-2026",
    "authority": "sec",
    "shortName": "Atkins remarks at FSOC AI roundtable (Mar 2026)",
    "title": "Remarks at Financial Stability Oversight Council Artificial Intelligence Innovation Series Roundtable on Strategy and Governance Principles",
    "aliases": [
      "FSOC AI Innovation Series roundtable",
      "Atkins FSOC AI remarks",
      "March 4, 2026 Atkins speech"
    ],
    "docType": "Speech",
    "status": "Final",
    "date": "2026-03-04",
    "link": "https://www.sec.gov/newsroom/speeches-statements/atkins-remarks-at-financial-stability-oversight-council-artificial-intelligence-innovation-series-roundtable-030426",
    "appliesTo": "Public companies, broker-dealers, and investment advisers; statement of the Chairman's own views",
    "answerFirst": "Speaking at the Financial Stability Oversight Council's AI Innovation Series roundtable on March 4, 2026, SEC Chairman Paul Atkins laid out the current SEC posture on AI: the agency's own AI Task Force (created August 2025) is building tools for exam risk assessment, misconduct detection, and disclosure review, but 'algorithmic detection of possible misconduct… cannot serve as the sole basis of an SEC enforcement action.' On disclosure, he said principles-based, materiality-rooted rules should govern AI just as any other development, that 'prescriptive mandates are not the answer to every emerging technology,' and that AI-washing enforcement continues because 'misconduct remains misconduct, regardless of the medium.'",
    "keyPoints": [
      "Confirms the SEC will not create AI-specific disclosure line items; the test remains whether a reasonable shareholder would consider the information important.",
      "Describes AI Task Force use cases: risk assessments for potential examinations, fraud and rule-violation detection, faster disclosure review, comment-letter analysis, and market-wide risk evaluation.",
      "Commits to human judgment at every stage of risk assessment and enforcement — an AI flag alone cannot ground an action.",
      "Reaffirms enforcement against 'false, misleading, or exaggerated claims about the use of AI' and against fraud that uses AI.",
      "Invites market participants to engage SEC staff on innovative AI use cases.",
      "Delivered as part of Treasury/FSOC's cross-agency AI Innovation Series, alongside banking regulators."
    ],
    "whatChanged": "It is the clearest signal that the IAC's December 2025 disclosure recommendation will not become guidance under this Commission, and that the SEC's AI agenda is internal adoption plus enforcement. For bank holding companies, AI disclosure remains a materiality judgment; for their advisory and brokerage arms, the exam priorities and AI-washing precedents are the operative constraints.",
    "useCases": [
      "governance-general",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "What is the SEC's position on AI disclosure under Chairman Atkins?",
        "a": "Materiality-based, principles-driven disclosure under existing rules; no AI-specific line items or checklists. Atkins said so explicitly at the FSOC AI roundtable on March 4, 2026."
      },
      {
        "q": "Will the SEC bring enforcement cases based on AI detection alone?",
        "a": "No. Atkins said algorithmic detection can surface anomalies but cannot be the sole basis of an enforcement action; human judgment is required at every stage."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "cftc-ai-scams-customer-advisory-2024",
    "warning": true,
    "authority": "cftc",
    "shortName": "CFTC AI Scams Customer Advisory",
    "title": "Customer Advisory: AI Won't Turn Trading Bots into Money Machines",
    "aliases": [
      "AI Won't Turn Trading Bots into Money Machines",
      "CFTC Release 8854-24",
      "CFTC AI scams advisory"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2024-01-25",
    "effectiveDate": "2024-01-25",
    "link": "https://www.cftc.gov/PressRoom/PressReleases/8854-24",
    "appliesTo": "Retail customers of futures, options, forex, and crypto-asset trading; relevant to FCMs and introducing brokers screening marketing and onboarding",
    "answerFirst": "On January 25, 2024 the CFTC's Office of Customer Education and Outreach warned that fraudsters exploit interest in artificial intelligence to sell trading bots, signal services, and crypto schemes promising guaranteed returns. The advisory states that AI cannot predict the future or sudden market changes, and it was published the same day as the CFTC staff Request for Comment on AI. The December 2024 staff advisory later cited it as part of the agency's AI work.",
    "keyPoints": [
      "Warns that claims of AI-powered trading bots with 'unreasonably high or guaranteed returns' are a hallmark of fraud",
      "States plainly that AI technology cannot predict the future or sudden market changes",
      "Published January 25, 2024 alongside the staff Request for Comment on AI in CFTC-regulated markets",
      "Backed by CFTC enforcement history against AI-bot frauds, including the Mirror Trading International case in which CEO Cornelius Steynberg was ordered to pay over $3.4 billion",
      "Encourages customers to check registration status and report suspected fraud to the CFTC"
    ],
    "whatChanged": "The advisory signals that the CFTC treats 'AI' marketing claims as an enforcement trigger. For bank FCMs and introducing brokers it raises the bar on vetting third-party trading-signal vendors and on any AI language in customer-facing marketing.",
    "useCases": [
      "fraud",
      "trading-markets"
    ],
    "faq": [
      {
        "q": "Has the CFTC brought enforcement actions over fake AI trading bots?",
        "a": "Yes. The CFTC has obtained large judgments against schemes that falsely claimed to use AI trading bots, including the Mirror Trading International forex fraud where the CEO was ordered to pay more than $3.4 billion."
      },
      {
        "q": "Does the advisory impose obligations on FCMs?",
        "a": "No; it is customer education. But it shows what the Division of Enforcement treats as fraud, so firms should scrutinize AI performance claims in their own and their vendors' marketing."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "cftc-ai-request-for-comment-2024",
    "authority": "cftc",
    "shortName": "CFTC AI Request for Comment (2024)",
    "title": "Request for Comment on the Use of Artificial Intelligence in CFTC-Regulated Markets",
    "aliases": [
      "CFTC AI RFC",
      "CFTC Release 8853-24",
      "Request for Comment on the Use of Artificial Intelligence in CFTC-Regulated Markets"
    ],
    "docType": "Consultation",
    "status": "Final",
    "date": "2024-01-25",
    "commentDeadline": "2024-04-24",
    "link": "https://www.cftc.gov/PressRoom/PressReleases/8853-24",
    "appliesTo": "All CFTC-regulated entities: swap execution facilities, designated contract markets, derivatives clearing organizations, swap dealers, FCMs, CPOs, CTAs, introducing brokers, and other market participants",
    "answerFirst": "On January 25, 2024 CFTC staff — the Divisions of Market Oversight, Clearing and Risk, Market Participants, and Data plus the Office of Technology Innovation — issued a Request for Comment on current and potential uses and risks of AI in derivatives markets, with comments due April 24, 2024. It adopted the Executive Order 14110 definition of AI as 'a machine-based system that can, for a given set of human-defined objectives, make predictions, recommendations or decisions influencing real or virtual environments.' The responses informed the December 2024 staff advisory.",
    "keyPoints": [
      "Issued by the Chairman's AI Task Force, formed after Chairman Behnam's November 16, 2023 Treasury Market Conference speech",
      "Prompted in part by the October 30, 2023 White House Executive Order 14110 on Safe, Secure, and Trustworthy AI",
      "Asked about AI use in trading, risk management, compliance and surveillance, books and records, cybersecurity, and customer service",
      "Flagged risks of market safety, customer protection, governance, data privacy, bias mitigation, and cybersecurity",
      "Comment deadline: April 24, 2024 (90 days); purpose was to inform supervision and evaluate the need for guidance or rulemaking",
      "Chairman Behnam: the RFC would help the CFTC 'strategically identify the highest priorities and return-on-investment projects with AI use cases'"
    ],
    "whatChanged": "This was the CFTC's first formal, agency-wide inquiry into AI. It set the definition and use-case taxonomy the agency still uses and gave bank swap dealers and FCMs a first opportunity to shape whether AI would be governed by guidance or rulemaking; the answer, in December 2024, was guidance.",
    "useCases": [
      "trading-markets",
      "model-risk",
      "governance-general",
      "cybersecurity"
    ],
    "faq": [
      {
        "q": "What definition of AI does the CFTC use?",
        "a": "The Executive Order 14110 definition: a machine-based system that, for a given set of human-defined objectives, makes predictions, recommendations or decisions influencing real or virtual environments. The December 2024 staff advisory reused it."
      },
      {
        "q": "Did the RFC lead to a rule?",
        "a": "No. It led to the December 5, 2024 staff advisory (CFTC Letter No. 24-17), which reminds registrants of existing obligations rather than creating new ones."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "cftc-tac-responsible-ai-report-2024",
    "authority": "cftc",
    "shortName": "CFTC TAC Responsible AI Report",
    "title": "Responsible Artificial Intelligence in Financial Markets: Opportunities, Risks & Recommendations",
    "aliases": [
      "Responsible Artificial Intelligence in Financial Markets",
      "CFTC TAC AI report",
      "CFTC Release 8905-24",
      "Technology Advisory Committee AI report"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2024-05-02",
    "link": "https://www.cftc.gov/PressRoom/PressReleases/8905-24",
    "appliesTo": "Advisory recommendations to the Commission; relevant to all CFTC-registered entities",
    "answerFirst": "On May 2, 2024 the CFTC's Technology Advisory Committee, sponsored by Commissioner Christy Goldsmith Romero, adopted a report by its Subcommittee on Emerging and Evolving Technologies on responsible AI in financial markets. It made five recommendations: host public roundtables and outreach with registrants; consider adopting a sector AI Risk Management Framework aligned with NIST, potentially via a proposed rule; inventory existing AI-relevant regulations and run a gap analysis; align AI policy with the SEC, Treasury, and other agencies; and build CFTC staff AI expertise and budget. Responsible AI is defined around fairness, robustness, transparency, explainability, and privacy.",
    "keyPoints": [
      "Recommendation One: public roundtable and direct outreach on humans-in-or-around-the-loop, acceptable training-data uses, and best practices",
      "Recommendation Two: consider a sector AI Risk Management Framework consistent with NIST, with a potential proposed rule as the deliverable",
      "Recommendation Three: inventory existing regulations touching AI and conduct a gap analysis, leading to clarifying staff guidance or rulemaking",
      "Recommendation Four: align AI policies with the SEC, Treasury, and other financial-stability agencies",
      "Recommendation Five: engage staff in domestic and international AI dialogues and fund internal technical capacity",
      "Reviews US and global AI policy including Executive Order 14110, the NIST AI RMF, and the EU AI Act",
      "Cited by the December 2024 staff advisory as one of its inputs"
    ],
    "whatChanged": "The report is the closest the CFTC has come to a roadmap for AI rulemaking. Its NIST-anchored framework recommendation gives bank derivatives businesses a preview of what a future CFTC AI rule would likely look like, and Recommendation Three was effectively delivered by the December 2024 staff advisory.",
    "useCases": [
      "governance-general",
      "model-risk",
      "trading-markets"
    ],
    "faq": [
      {
        "q": "Did the CFTC adopt the TAC's NIST-based AI framework?",
        "a": "Not as a rule. The Commission has taken no rulemaking on AI as of August 2026; the December 2024 staff advisory mapped existing rules to AI instead, and the 2026 Innovation Task Force is now drafting a framework for AI and autonomous systems."
      },
      {
        "q": "Who wrote the report?",
        "a": "The Subcommittee on Emerging and Evolving Technologies of the CFTC Technology Advisory Committee, which was sponsored by Commissioner Christy Goldsmith Romero. The TAC voted to advance it on May 2, 2024, billed as the committee's 'AI Day.'"
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "cftc-staff-advisory-24-17",
    "authority": "cftc",
    "shortName": "CFTC Staff Advisory 24-17 on AI",
    "title": "Staff Advisory on the Use of Artificial Intelligence in CFTC-Regulated Markets (CFTC Letter No. 24-17)",
    "aliases": [
      "CFTC Letter No. 24-17",
      "Staff Letter 24-17",
      "CFTC Staff Advisory 24-17",
      "CFTC Release 9013-24",
      "Use of Artificial Intelligence in CFTC-Regulated Markets"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2024-12-05",
    "effectiveDate": "2024-12-05",
    "link": "https://www.cftc.gov/PressRoom/PressReleases/9013-24",
    "appliesTo": "CFTC registered entities (DCMs, SEFs, DCOs, SDRs) and registrants (swap dealers, FCMs, CPOs, CTAs, IBs, RFEDs, MSPs, floor brokers and traders, and associated persons)",
    "answerFirst": "On December 5, 2024 the CFTC's Divisions of Clearing and Risk, Data, Market Oversight, and Market Participants issued CFTC Letter No. 24-17, a staff advisory reminding registrants and registered entities that the Commodity Exchange Act and CFTC regulations apply to their use of AI. It creates no new obligations and is not a compliance checklist. It maps AI use cases to existing requirements — exchange core principles on surveillance and system safeguards, DCO Core Principles B, C, D, E and I, swap dealer margin under Regulation 23.152, CPO disclosure under Part 4, and FCM customer-fund segregation under Regulation 1.20 — and states that responsibility is retained when AI is procured from a third-party provider.",
    "keyPoints": [
      "Defines AI per Executive Order 14110; applies to entities that design, develop, use, or evaluate AI 'directly or by a third-party service provider'",
      "DCMs/SEFs/SDRs: AI in order processing, market surveillance, and system safeguards must satisfy DCM Core Principles 2, 4, 9, 12 and 20, SEF Core Principles 2, 3, 4 and 14, and Regulation 49.24; controls required across all seven system-safeguard risk categories",
      "Registered entities must give staff advance notice of material planned changes to automated systems (Regulations 38.1051(f)(1), 37.1401(f)(1), 49.24(h)(1), 39.18(h))",
      "DCOs: Core Principles B, C, D, E and I continue to apply; Regulation 39.18(d)(2) makes a DCO responsible even when AI is outsourced",
      "Swap dealers using AI to calculate or collect initial margin under Regulation 23.152 must still confirm adequate system performance",
      "A CPO using generative AI to prepare disclosure documents or account statements remains fully subject to Part 4; FCMs using AI for segregated-funds accounting remain bound by Part 1 and Regulation 1.20",
      "Staff may raise AI in routine examinations and will keep evaluating the need for future regulation or guidance",
      "Chairman Behnam called it 'a measured first step'; Commissioner Johnson issued a concurring statement urging an AI Fraud Task Force and heightened penalties"
    ],
    "whatChanged": "For bank swap dealers, FCMs, and exchange/clearing members it converted AI from an open question into an examination topic: firms are expected to have assessed AI risks, updated policies, procedures, controls and systems, and reviewed AI adoption for CEA compliance as they would any material system change. The explicit third-party point means vendor AI (including cloud and generative tools) sits inside the firm's own compliance perimeter.",
    "useCases": [
      "trading-markets",
      "model-risk",
      "third-party-vendors",
      "generative-agentic-ai",
      "cybersecurity",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Does CFTC Letter 24-17 create new compliance requirements?",
        "a": "No. It states it is not a compliance checklist and does not create enforceable rights or new binding rules. It lists existing CEA and regulatory requirements that AI use may implicate and expects firms to update risk assessments, policies, and controls accordingly."
      },
      {
        "q": "Which CFTC rules apply to a swap dealer's AI margin model?",
        "a": "The advisory cites Regulation 23.152 on initial margin for uncleared swaps: a swap dealer that uses AI to assist margin collection must still confirm the system performs adequately so that risk is properly managed."
      },
      {
        "q": "Can a CPO use generative AI to draft disclosure documents?",
        "a": "Yes, but the advisory says the CPO remains subject to all Part 4 requirements for the accuracy and content of disclosure documents and periodic account statements, regardless of the tool used."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "cftc-johnson-statement-2024-12-05",
    "authority": "cftc",
    "shortName": "Johnson Statement on AI in Derivatives Markets (Dec 2024)",
    "title": "Statement of Commissioner Kristin N. Johnson on Future-Proofing Financial Markets: Assessing the Integration of Artificial Intelligence in Global Derivatives Markets",
    "aliases": [
      "Future-Proofing Financial Markets",
      "Johnson statement on AI advisory",
      "AI Fraud Task Force"
    ],
    "docType": "Speech",
    "status": "Final",
    "date": "2024-12-05",
    "link": "https://www.cftc.gov/PressRoom/SpeechesTestimony/johnsonstatement120524",
    "appliesTo": "Commissioner statement; no direct obligations",
    "answerFirst": "Concurrent with the December 5, 2024 staff advisory, Commissioner Kristin N. Johnson called for the CFTC to go further: create an AI Fraud Task Force with the Division of Enforcement, adopt heightened civil monetary penalties for those who misuse AI, expand information gathering on how registrants deploy AI, and develop a principles-based framework that remains applicable as AI evolves. She also urged more supervisory resources and interagency collaboration.",
    "keyPoints": [
      "Proposes an AI Fraud Task Force in collaboration with the Division of Enforcement",
      "Calls for increased civil monetary penalties as a deterrent to AI-enabled misconduct",
      "Urges structured dialogue with domestic and foreign regulators, market participants, academics, and public-interest advocates on AI deployment",
      "Advocates principles-based rules that 'remain applicable to AI and other emerging technologies as they continue to develop over time'",
      "Supports additional supervisory resources and interagency coordination"
    ],
    "whatChanged": "The statement is the clearest articulation of a more interventionist CFTC path on AI. It did not become policy under the 2025–2026 leadership, but the enhanced-penalty and AI-fraud themes remain live in enforcement, and the information-gathering theme foreshadowed later outreach.",
    "useCases": [
      "fraud",
      "governance-general",
      "trading-markets"
    ],
    "faq": [
      {
        "q": "Did the CFTC create an AI Fraud Task Force?",
        "a": "No formal AI Fraud Task Force has been announced as of August 2026. The Commission's 2026 structure instead centers on an Innovation Task Force and Innovation Advisory Committee focused on enabling innovation."
      },
      {
        "q": "Are AI-related penalties higher at the CFTC?",
        "a": "There is no formal enhanced-penalty policy for AI. Commissioner Johnson proposed one in December 2024; existing fraud and manipulation authority already covers AI-enabled misconduct."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "cftc-johnson-reghub-london-2025",
    "authority": "cftc",
    "shortName": "Johnson RegHub Summit Remarks (Jun 2025)",
    "title": "Keynote Remarks of Commissioner Kristin N. Johnson at RegHub Summit London 2025: Enabling AI Tools To Enhance Compliance and Surveillance",
    "aliases": [
      "RegHub Summit London 2025",
      "Enabling AI Tools To Enhance Compliance and Surveillance",
      "Johnson RegHub keynote"
    ],
    "docType": "Speech",
    "status": "Final",
    "date": "2025-06-18",
    "link": "https://www.cftc.gov/PressRoom/SpeechesTestimony/opajohnson20",
    "appliesTo": "Commissioner remarks; no direct obligations",
    "answerFirst": "On June 18, 2025 Commissioner Kristin N. Johnson told the RegHub Summit in London that compliance functions — AML/CFT and trade surveillance — rank among the top four predictive-AI use cases in finance, and set out expectations for firms using AI in compliance: data governance (including for synthetic training data), explainability and bias controls, model governance, and rigorous testing and monitoring of outputs. She named hallucination, data leakage, accuracy degradation, bias, privacy breaches, and weak data governance as the key risks.",
    "keyPoints": [
      "Cites industry survey data placing compliance (AML/CFT, trade surveillance) among the top four predictive-AI use cases",
      "Identifies risks: hallucinations, data leakage, accuracy reduction, bias, privacy breaches, insufficient data governance",
      "Calls data governance 'foundational,' especially for models trained on synthetic data",
      "Expects explainability, bias controls, model governance, and rigorous testing and monitoring of AI outputs",
      "Urges collaboration between firms, industry bodies, and regulators domestically and globally",
      "Quote: 'It is imperative that we have a clear understanding of and appropriate guardrails to ensure the security and integrity of the data used to train AI models.'"
    ],
    "whatChanged": "The speech signals what a CFTC examiner is likely to ask a bank swap dealer or FCM about AI-driven surveillance and AML tooling: provenance and governance of training data, explainability, bias testing, and ongoing monitoring. It is the most detailed CFTC articulation of supervisory expectations for AI in compliance since the 2024 advisory.",
    "useCases": [
      "aml-kyc",
      "trading-markets",
      "data-privacy",
      "model-risk"
    ],
    "faq": [
      {
        "q": "Does the CFTC endorse AI for trade surveillance?",
        "a": "Commissioner Johnson's June 2025 remarks encourage AI for compliance and surveillance provided firms apply data governance, explainability, bias controls, and output testing. The December 2024 staff advisory likewise contemplates AI in exchange market surveillance."
      },
      {
        "q": "What AI risks does the CFTC highlight for compliance tools?",
        "a": "Hallucination, data leakage, declining accuracy, bias, data-privacy breaches, and insufficient data governance, per Commissioner Johnson's June 18, 2025 remarks."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "cftc-innovation-task-force-2026",
    "authority": "cftc",
    "shortName": "CFTC Innovation Task Force",
    "title": "Chairman Selig Announces Formation of New Innovation Task Force",
    "aliases": [
      "CFTC Innovation Task Force",
      "CFTC Release 9201-26",
      "Innovation Task Force (ITF)"
    ],
    "docType": "Framework",
    "status": "In force",
    "date": "2026-03-24",
    "effectiveDate": "2026-03-24",
    "link": "https://www.cftc.gov/PressRoom/PressReleases/9201-26",
    "appliesTo": "Internal CFTC initiative; output will affect all CFTC-regulated entities deploying AI or autonomous trading systems",
    "answerFirst": "On March 24, 2026 CFTC Chairman Michael S. Selig formed an Innovation Task Force to develop, with the Innovation Advisory Committee, a clear regulatory framework for innovators in three areas: crypto assets and blockchain, artificial intelligence and autonomous systems, and prediction markets and event contracts. Staff were named on April 10, 2026; the task force is led by Michael J. Passalacqua and draws on CFTC divisions and private-sector experience. It is the CFTC's first dedicated vehicle for AI policy since the 2023–2024 AI Task Force.",
    "keyPoints": [
      "Three workstreams: crypto/blockchain, AI and autonomous systems, prediction markets and event contracts",
      "Led by Michael J. Passalacqua, who is also Designated Federal Officer of the Innovation Advisory Committee",
      "Mandate includes coordinating with other federal agencies and departments",
      "Chairman Selig: 'By establishing a clear regulatory framework for innovators building on the new frontier of finance, we can foster responsible innovation at home and ensure American market participants are not left on the sidelines'",
      "No deliverable dates were announced; the August 20, 2026 IAC agenda asked whether 'additional guidance or best practices' on AI-enabled participants are needed"
    ],
    "whatChanged": "It moves the CFTC's AI agenda from the 2024 'existing rules apply' posture toward a possible affirmative framework for AI-driven and autonomous trading. Bank derivatives desks running algorithmic or agentic strategies should expect the task force to be the origin of any 2026–2027 CFTC guidance on AI.",
    "useCases": [
      "generative-agentic-ai",
      "trading-markets",
      "governance-general"
    ],
    "faq": [
      {
        "q": "What will the CFTC Innovation Task Force produce on AI?",
        "a": "It is charged with developing a clear regulatory framework for AI and autonomous systems in derivatives markets, in partnership with the Innovation Advisory Committee. As of August 2026 no guidance or proposed rule has been published."
      },
      {
        "q": "How does the Innovation Task Force differ from the 2023 AI Task Force?",
        "a": "Chairman Behnam's AI Task Force focused on fact-finding (the 2024 RFC and staff advisory). Chairman Selig's Innovation Task Force is framed around enabling innovation and spans crypto, AI/autonomous systems, and prediction markets."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "cftc-compute-derivatives-rfc-2026",
    "authority": "cftc",
    "shortName": "CFTC Compute Derivatives RFC",
    "title": "Request for Comment on the Listing of Compute Derivatives Contracts",
    "aliases": [
      "compute derivatives",
      "CFTC Release 9286-26",
      "91 FR 54259",
      "Listing of Compute Derivatives Contracts"
    ],
    "docType": "Consultation",
    "status": "Comment period open",
    "date": "2026-08-19",
    "commentDeadline": "2026-10-20",
    "link": "https://www.cftc.gov/PressRoom/PressReleases/9286-26",
    "appliesTo": "Designated contract markets, swap execution facilities, clearinghouses, swap dealers, FCMs, and market participants interested in derivatives on computing capacity",
    "answerFirst": "On August 19, 2026 the CFTC issued a request for comment on derivatives markets in compute — the GPU and data-center capacity that powers AI — published in the Federal Register on August 21, 2026 (91 FR 54259) with a 60-day comment period. It asks about cash-market dynamics, liquidity, oversight, manipulation, customer protection, and perpetual compute futures. Chairman Michael Selig: 'America cannot win the AI race without a robust derivatives market for compute.'",
    "keyPoints": [
      "Seeks input on the structure of underlying compute cash markets and whether they support reliable price discovery",
      "Asks about liquidity, susceptibility to manipulation, and appropriate exchange oversight for compute contracts",
      "Raises customer-protection questions and the design of perpetual compute futures",
      "Comments due 60 days after the August 21, 2026 Federal Register publication",
      "Framed by Chairman Selig as setting the standard for 'the commodity that will power the intelligence economy'"
    ],
    "whatChanged": "This is the first US regulatory step toward listed, cleared derivatives on AI compute. For banks it creates a potential new asset class for hedging data-center and cloud exposure, new products for swap dealer and FCM franchises, and new questions about underlying market integrity and margining.",
    "useCases": [
      "trading-markets"
    ],
    "faq": [
      {
        "q": "What are compute derivatives?",
        "a": "Futures, options, or swaps whose underlying is computing capacity (for example GPU hours or data-center compute) used to train and run AI models. The CFTC's August 19, 2026 request for comment explores how such contracts could be listed and overseen."
      },
      {
        "q": "When do comments on the compute derivatives RFC close?",
        "a": "Sixty days after Federal Register publication on August 21, 2026, which is around October 20, 2026; check 91 FR 54259 for the exact date."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fincen-joint-statement-innovation-2018",
    "authority": "fincen",
    "shortName": "2018 Joint Statement on BSA/AML Innovation",
    "title": "Joint Statement on Innovative Efforts to Combat Money Laundering and Terrorist Financing",
    "aliases": [
      "Joint Statement on Innovative Efforts",
      "2018 innovation statement",
      "BSA/AML innovation statement"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2018-12-03",
    "effectiveDate": "2018-12-03",
    "link": "https://www.fincen.gov/news/news-releases/joint-statement-innovative-efforts-combat-money-laundering",
    "appliesTo": "Banks, savings associations, and credit unions supervised by the Federal Reserve, FDIC, OCC, and NCUA, and all BSA-covered institutions under FinCEN",
    "answerFirst": "On December 3, 2018, FinCEN, the Federal Reserve, FDIC, OCC, and NCUA jointly encouraged banks to consider, evaluate, and where appropriate responsibly implement innovative approaches, explicitly including artificial intelligence and digital identity technologies, to meet BSA/AML obligations. The statement says pilot programs that expose gaps in existing programs will not necessarily result in supervisory action, and that the agencies will not penalize banks for maintaining or updating existing processes while testing new ones. It remains the baseline US policy on AI in AML compliance.",
    "keyPoints": [
      "Issued December 3, 2018 by FinCEN with the Federal Reserve, FDIC, NCUA, and OCC",
      "Names artificial intelligence and digital identity technologies as innovations some banks are already using to strengthen compliance and transaction monitoring",
      "Pilot programs undertaken in good faith that reveal gaps in a bank's existing BSA/AML program will not necessarily lead to supervisory action",
      "Banks may test innovative approaches alongside existing processes and will not be penalized for keeping the existing process while a pilot runs",
      "Innovation is not a safe harbor: banks remain responsible for maintaining effective, risk-based programs and evaluating new tools against BSA requirements",
      "FinCEN committed to consider requests for exceptive relief under 31 CFR 1010.970 to facilitate testing of new technologies",
      "Agencies committed to further engagement through innovation offices; FinCEN followed with the Innovation Hours program in 2019"
    ],
    "whatChanged": "Before 2018 many banks feared that piloting machine-learning transaction monitoring would expose weaknesses in their rules-based programs and invite enforcement. The joint statement removed that specific deterrent, put AI on the record as an acceptable AML tool, and set up the run-with-both-systems model that most bank AML AI deployments still follow.",
    "useCases": [
      "aml-kyc",
      "model-risk",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Can a bank get in trouble if an AI pilot uncovers missed SARs?",
        "a": "The 2018 statement says that a pilot program that identifies gaps will not necessarily result in supervisory action, though the bank is still expected to remediate genuine deficiencies in its existing program."
      },
      {
        "q": "Is the 2018 joint statement still in effect?",
        "a": "Yes. It has not been withdrawn, and its innovation-friendly stance was codified in the Anti-Money Laundering Act of 2020 and repeated in FinCEN's 2024 and 2026 AML/CFT program proposals."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fincen-innovation-hours-2019",
    "authority": "fincen",
    "shortName": "FinCEN Innovation Hours",
    "title": "FinCEN's Innovation Initiative: Implementation of FinCEN Innovation Hours; Invitation to Request Innovation Hours Meeting",
    "aliases": [
      "Innovation Hours Program",
      "FinCEN Innovation Hours",
      "FinCEN Innovation Initiative"
    ],
    "docType": "Framework",
    "status": "In force",
    "date": "2019-05-01",
    "effectiveDate": "2019-05-01",
    "link": "https://www.fincen.gov/resources/statutes-regulations/federal-register-notices/fincens-innovation-initiative",
    "appliesTo": "Financial institutions and technology providers developing AML/CFT compliance tools",
    "answerFirst": "In May 2019 FinCEN launched the Innovation Hours Program, a standing forum in which banks, fintechs, and regtech vendors demonstrate AML/CFT technologies including artificial intelligence and machine learning to FinCEN staff. A March 2021 public report on the program's emerging themes noted FinCEN's plan to develop synthetic BSA data to support testing and training of AI and machine-learning solutions. The program is the practical channel behind the 2018 innovation statement and the AML Act's innovation mandates.",
    "keyPoints": [
      "Announced in a Federal Register notice in May 2019 as part of FinCEN's Innovation Initiative following the December 2018 joint statement",
      "Monthly sessions in which technology users and providers present products relevant to BSA compliance, including AI/ML transaction monitoring, digital identity, and privacy-enhancing technologies",
      "Themed workshops have covered digital identity services and privacy-enhancing technologies",
      "March 2021 public report summarized emerging themes and the program's future role, including plans for synthetic BSA data to support AI/ML testing",
      "Informs FinCEN and Treasury policy on emerging technologies; meetings are informational and confer no regulatory relief",
      "Special monthly sessions have been offered for underserved groups such as small firms and minority-owned businesses"
    ],
    "whatChanged": "Innovation Hours gave banks and vendors a direct, non-supervisory line to FinCEN for AI-based AML tools, and its emerging-themes report is the clearest public statement of what FinCEN has seen in AI/ML compliance technology. Compliance teams can cite participation as evidence of engagement with the regulator, but it does not substitute for validation or examiner sign-off.",
    "useCases": [
      "aml-kyc",
      "generative-agentic-ai",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Does an Innovation Hours meeting give a bank any regulatory approval for an AI tool?",
        "a": "No. Meetings are informational exchanges; FinCEN does not endorse products or grant relief through the program. Exceptive relief requires a separate request under 31 CFR 1010.970."
      },
      {
        "q": "Where is the Innovation Hours report on AI?",
        "a": "FinCEN published 'Innovation Hours Program: Emerging Themes and Future Role' in March 2021 on fincen.gov; it discusses AI/ML use cases and FinCEN's synthetic-data plans."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fincen-aml-act-2020",
    "authority": "fincen",
    "shortName": "Anti-Money Laundering Act of 2020",
    "title": "Anti-Money Laundering Act of 2020 (Division F of the National Defense Authorization Act for Fiscal Year 2021)",
    "aliases": [
      "AML Act of 2020",
      "AMLA 2020",
      "Anti-Money Laundering Act",
      "AML Act"
    ],
    "docType": "Statute",
    "status": "In force",
    "date": "2021-01-01",
    "effectiveDate": "2021-01-01",
    "link": "https://www.fincen.gov/resources/statutes-and-regulations/anti-money-laundering-act-2020",
    "appliesTo": "All financial institutions subject to the Bank Secrecy Act; Treasury and FinCEN as implementing agencies",
    "answerFirst": "The Anti-Money Laundering Act of 2020, enacted January 1, 2021 when Congress overrode the veto of the FY2021 National Defense Authorization Act, is the biggest BSA overhaul since the USA PATRIOT Act and the statutory basis for FinCEN's AI-friendly posture. Its innovation provisions create a BSAAG Subcommittee on Innovation and Technology (section 6207), require innovation officers at FinCEN and each federal functional regulator (section 6208), direct a rulemaking on standards for testing technology including machine learning and enhanced data analytics (section 6209), and mandate a periodic Financial Crimes Tech Symposium (section 6211). Section 6101 also requires AML programs to be risk-based and lets FinCEN consider innovative approaches when assessing effectiveness.",
    "keyPoints": [
      "Enacted January 1, 2021 as Division F of the FY2021 NDAA (Public Law 116-283) after a congressional veto override",
      "Section 6101 amends 31 U.S.C. 5318(h) to require AML/CFT programs to be risk-based and reasonably designed, and adds statutory factors FinCEN weighs when assessing program effectiveness",
      "Section 6207 establishes a Subcommittee on Innovation and Technology within the Bank Secrecy Act Advisory Group",
      "Section 6208 requires FinCEN and each federal functional regulator to appoint an Innovation Officer to engage with institutions on new technology",
      "Section 6209 directs Treasury to issue a rule on standards for financial institutions to test technology and internal processes, with a focus on machine learning and other enhanced data analytics",
      "Section 6211 requires a periodic global Financial Crimes Tech Symposium on using technology to combat financial crime; FinCEN announced planning for the first symposium on February 24, 2021",
      "Establishes national AML/CFT Priorities (published June 30, 2021) that institutions must incorporate into risk-based programs once program rules are final",
      "Also created the beneficial ownership reporting regime (Corporate Transparency Act) and expanded whistleblower and enforcement authorities"
    ],
    "whatChanged": "The AML Act shifted the legal standard from a formulaic five-pillar program to an effectiveness-based, risk-based one and, for the first time, wrote technology innovation into the BSA. Every subsequent FinCEN move on AI in compliance, from the 2024 and 2026 program proposals to the enforcement factor crediting AI use, implements these sections.",
    "useCases": [
      "aml-kyc",
      "governance-general",
      "model-risk"
    ],
    "faq": [
      {
        "q": "Has the section 6209 technology-testing rule been issued?",
        "a": "Not as a stand-alone rule as of August 2026. FinCEN has addressed technology adoption inside its AML/CFT program rulemakings (July 2024, withdrawn; April 2026, pending) rather than through a separate testing-standards rule."
      },
      {
        "q": "Does the AML Act require banks to adopt AI?",
        "a": "No. It encourages innovation and gives Treasury tools to support it, but the statutory duty is a risk-based, reasonably designed program; technology choice is left to the institution."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fincen-bsa-aml-model-risk-statement-2021",
    "authority": "fincen",
    "shortName": "2021 BSA/AML Model Risk Management Statement",
    "title": "Interagency Statement on Model Risk Management for Bank Systems Supporting Bank Secrecy Act/Anti-Money Laundering Compliance",
    "aliases": [
      "BSA/AML model risk statement",
      "OCC Bulletin 2021-19",
      "model risk management for BSA/AML systems"
    ],
    "docType": "Guidance",
    "status": "Withdrawn",
    "date": "2021-04-09",
    "effectiveDate": "2021-04-09",
    "supersededBy": "occ-bulletin-2026-13",
    "interagency": [
      "fed-bsa-aml-model-risk-statement-2021",
      "occ-bulletin-2021-19",
      "fdic-fil-27-2021"
    ],
    "link": "https://www.federalreserve.gov/newsevents/pressreleases/bcreg20210409a.htm",
    "appliesTo": "Banks supervised by the OCC, Federal Reserve, and FDIC; issued in consultation with FinCEN and NCUA",
    "answerFirst": "On April 9, 2021 the OCC, Federal Reserve, and FDIC, in consultation with FinCEN and the NCUA, explained how the 2011 model risk management guidance (SR 11-7 / OCC 2011-12) applies to BSA/AML transaction monitoring, sanctions screening, and customer-risk systems. It stressed a risk-based, flexible approach so banks could update AML models quickly, and it was paired with a request for information published April 12, 2021. The statement was rescinded on April 17, 2026 when the agencies replaced the 2011 guidance with revised model risk management guidance (OCC Bulletin 2026-13 / SR 26-2) and did not issue AML-specific replacement guidance.",
    "keyPoints": [
      "Issued April 9, 2021 by the OCC (Bulletin 2021-19), Federal Reserve, and FDIC, in consultation with FinCEN and NCUA",
      "Clarified that not every BSA/AML system is a 'model'; banks decide which systems are models under the 2011 guidance based on their own definitions",
      "Endorsed a risk-based approach to validation and said rapid updates to AML models (for example, new typologies or FinCEN advisories) need not wait for full revalidation",
      "Warned against duplicative testing and noted that third-party AML system limitations do not excuse the bank from managing model risk",
      "Accompanied by an interagency request for information on whether MRM principles support BSA/AML and OFAC compliance, published in the Federal Register April 12, 2021",
      "Rescinded April 17, 2026 alongside SR 11-7 / OCC 2011-12; OCC Bulletin 2026-13 lists OCC 2021-19 among rescinded issuances",
      "FDIC now lists its 2021 financial institution letter as inactive"
    ],
    "whatChanged": "For five years this was the only federal statement on validating AML models, and banks used it to justify lighter-touch treatment of rules-based monitoring and fast AML model updates. Its rescission in April 2026 means AML machine-learning models are governed only by the general revised model risk framework, which itself excludes generative and agentic AI, so banks must document their own risk-based rationale for how AML models are categorized and validated.",
    "useCases": [
      "aml-kyc",
      "model-risk",
      "third-party-vendors"
    ],
    "faq": [
      {
        "q": "Is the 2021 BSA/AML model risk statement still in effect?",
        "a": "No. It was rescinded on April 17, 2026 when the OCC, Federal Reserve, and FDIC issued revised interagency model risk management guidance. No AML-specific replacement was issued."
      },
      {
        "q": "What replaced it for AML transaction-monitoring models?",
        "a": "The revised interagency model risk management guidance (OCC Bulletin 2026-13, Fed SR 26-2) applies to all models including AML systems, with a risk-based approach; generative and agentic AI are outside its scope and fall under broader risk management."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fincen-aml-cft-program-nprm-2024",
    "authority": "fincen",
    "shortName": "2024 AML/CFT Program Proposed Rule (withdrawn)",
    "title": "Anti-Money Laundering and Countering the Financing of Terrorism Programs (Notice of Proposed Rulemaking, 2024)",
    "aliases": [
      "2024 Program NPRM",
      "July 2024 AML/CFT program proposal",
      "RIN 1506-AB52"
    ],
    "docType": "Consultation",
    "status": "Withdrawn",
    "date": "2024-07-03",
    "commentDeadline": "2024-09-03",
    "supersededBy": "fincen-aml-cft-program-nprm-2026",
    "link": "https://www.federalregister.gov/documents/2024/07/03/2024-14414/anti-money-laundering-and-countering-the-financing-of-terrorism-programs",
    "appliesTo": "All financial institutions with AML/CFT program obligations under the Bank Secrecy Act",
    "answerFirst": "FinCEN announced this proposal on June 28, 2024 and published it in the Federal Register on July 3, 2024, with comments due September 3, 2024. It would have required 'effective, risk-based, and reasonably designed' AML/CFT programs and encouraged institutions to responsibly adopt innovative technologies including machine learning, generative artificial intelligence, digital identity tools, blockchain analytics, and APIs, stating that experimenting with them would not by itself create supervisory or enforcement risk. FinCEN withdrew the proposal in April 2026 and superseded it with a new AML/CFT program NPRM.",
    "keyPoints": [
      "Announced June 28, 2024; Federal Register publication July 3, 2024; comment deadline September 3, 2024",
      "Implemented section 6101 of the AML Act: programs must be effective, risk-based, and reasonably designed, with a mandatory risk assessment process incorporating the AML/CFT Priorities",
      "Expressly encouraged responsible adoption of machine learning, generative AI, digital identity, blockchain analytics, and APIs as part of internal policies, procedures, and controls",
      "Stated that institutions experimenting with innovative technologies will not face additional supervisory or enforcement risk solely because of the experimentation",
      "Issued with an interagency statement from the OCC, Federal Reserve, FDIC, and NCUA, which proposed parallel amendments to their bank program rules on July 19, 2024",
      "Never finalized; FinCEN's April 7, 2026 press release says the 2026 proposal 'fully supersedes' the July 3, 2024 proposal and that FinCEN is withdrawing it"
    ],
    "whatChanged": "This was the first time FinCEN put generative AI by name into a proposed regulation and offered a written assurance that piloting it in AML would not itself be an enforcement risk. Although withdrawn, its innovation language carried into the 2026 proposal, and its comment file documents industry positions on AI in AML.",
    "useCases": [
      "aml-kyc",
      "generative-agentic-ai",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Was the July 2024 FinCEN AML/CFT program rule ever finalized?",
        "a": "No. FinCEN withdrew it in April 2026 and replaced it with a new proposed rule published April 10, 2026."
      },
      {
        "q": "Did the 2024 proposal require AI adoption?",
        "a": "No. It encouraged responsible adoption of machine learning and generative AI and promised no added enforcement risk for experimentation, but left technology choices to each institution."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fincen-alert-2024-deepfake-media",
    "warning": true,
    "authority": "fincen",
    "shortName": "FIN-2024-Alert004 (Deepfake Media)",
    "title": "FinCEN Alert on Fraud Schemes Involving Deepfake Media Targeting Financial Institutions",
    "aliases": [
      "FIN-2024-Alert004",
      "FinCEN deepfake alert",
      "FIN-2024-DEEPFAKEFRAUD",
      "deepfake media alert"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2024-11-13",
    "effectiveDate": "2024-11-13",
    "link": "https://www.fincen.gov/news/news-releases/fincen-issues-alert-fraud-schemes-involving-deepfake-media-targeting-financial",
    "appliesTo": "All BSA-covered financial institutions, particularly banks and fintechs performing remote onboarding, identity verification, and authentication",
    "answerFirst": "FinCEN Alert FIN-2024-Alert004, issued November 13, 2024, warns that criminals are using generative AI to create deepfake identity documents, images, video, and audio to defeat banks' identity verification, authentication, and due diligence controls. FinCEN reported a rise since 2023 in suspicious activity reports describing deepfake media, typically fraudulent IDs used to open accounts that funnel proceeds of check fraud, credit card fraud, authorized push payment fraud, loan fraud, and unemployment fraud. The alert lists red flags, recommends phishing-resistant multifactor authentication and live verification checks, and asks filers to use the key term FIN-2024-DEEPFAKEFRAUD in SARs.",
    "keyPoints": [
      "Issued November 13, 2024 as FIN-2024-Alert004 in response to increased SAR filings describing generative-AI deepfakes since 2023",
      "Defines deepfake media as AI-generated synthetic content (video, images, audio, text) used to impersonate real or fictitious people",
      "Typologies include altered or wholly synthetic identity documents at account opening, deepfake voice and video in business email compromise, and impersonation in social engineering and elder financial exploitation",
      "Red flags include inconsistencies between the photo ID and other customer information, images or video that show signs of manipulation, reverse-image-search hits on stock or AI-generated faces, and customer refusal or inability to complete live verification",
      "Recommends phishing-resistant multifactor authentication, live audio or video verification, and re-verification of high-risk customers",
      "SAR instructions: reference the alert, use key term FIN-2024-DEEPFAKEFRAUD in field 2 and the narrative, and select fraud-related suspicious activity types",
      "Reminds institutions of BSA obligations including customer due diligence and the Customer Identification Program"
    ],
    "whatChanged": "This is the first FinCEN document squarely about generative AI. It moved deepfakes from a cybersecurity talking point into a BSA reporting expectation, effectively telling banks that examiners will expect onboarding controls that anticipate AI-generated documents and that SAR narratives should flag suspected deepfake use.",
    "useCases": [
      "fraud",
      "aml-kyc",
      "generative-agentic-ai",
      "cybersecurity"
    ],
    "faq": [
      {
        "q": "What SAR key term does FinCEN want for deepfake fraud?",
        "a": "FIN-2024-DEEPFAKEFRAUD, entered in SAR field 2 and in the narrative, along with a reference to FIN-2024-Alert004."
      },
      {
        "q": "Does the deepfake alert require new identity-verification technology?",
        "a": "No. It is an alert, not a rule. It recommends phishing-resistant MFA and live verification checks as ways to reduce exposure, and it reminds institutions of existing CIP and CDD duties."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fincen-aml-cft-program-nprm-2026",
    "authority": "fincen",
    "shortName": "2026 AML/CFT Program Proposed Rule",
    "title": "Anti-Money Laundering and Countering the Financing of Terrorism Programs (Notice of Proposed Rulemaking, 2026)",
    "aliases": [
      "2026 Program NPRM",
      "April 2026 AML/CFT program proposal",
      "FinCEN program rule NPRM",
      "AML/CFT Program Rule"
    ],
    "docType": "Consultation",
    "status": "Proposed",
    "date": "2026-04-10",
    "commentDeadline": "2026-06-09",
    "supersedes": [
      "fincen-aml-cft-program-nprm-2024"
    ],
    "link": "https://www.fincen.gov/news/news-releases/fincen-proposes-rule-fundamentally-reform-financial-institution-programs",
    "appliesTo": "All financial institutions with AML/CFT program obligations under the Bank Secrecy Act; companion proposals from the federal banking agencies for banks",
    "answerFirst": "FinCEN announced this proposal on April 7, 2026 and published it in the Federal Register on April 10, 2026, with comments due June 9, 2026; it withdraws and fully supersedes the July 3, 2024 proposal. It would refocus AML/CFT programs on effectiveness, reserve significant supervisory or enforcement action for significant or systemic failures rather than isolated technical deficiencies, and require federal banking supervisors to consult FinCEN before significant AML/CFT actions. Among the factors the FinCEN Director would consider is whether an institution has conducted proactive analytics or other innovative activities producing demonstrable outputs, including 'effective use of artificial intelligence, federated learning, or other advanced monitoring tools.' As of August 26, 2026 no final rule has been issued; the proposal contemplates a 12-month implementation period.",
    "keyPoints": [
      "Announced April 7, 2026; Federal Register publication April 10, 2026; comment deadline June 9, 2026; withdraws the July 3, 2024 NPRM",
      "Programs must be risk-based and reasonably designed; a program established and maintained in accordance with the rule is treated as effective",
      "Distinguishes program-design failures from implementation deficiencies; isolated, technical, or immaterial problems in an otherwise well-designed program would not warrant enforcement",
      "Director's enforcement factors include providing highly useful information to law enforcement, conducting proactive analytics, and innovative activities with demonstrable outputs, expressly including effective use of artificial intelligence and federated learning",
      "Restates that institutions may responsibly adopt new technologies such as machine learning and generative AI without incurring added supervisory or enforcement risk solely from the adoption",
      "Introduces a notice-and-consultation framework requiring federal banking supervisors to consult FinCEN before significant AML/CFT supervisory or enforcement actions",
      "Clarifies independent testing, audit, and BSA officer expectations so examiners do not substitute their judgment for the institution's risk-based design",
      "Proposed 12-month implementation period after issuance of a final rule; AML/CFT Priorities become mandatory program inputs only once the final rule is effective"
    ],
    "whatChanged": "The 2026 proposal turns the 2018 'we will not punish you for trying AI' assurance into an affirmative credit: demonstrable AI-driven outputs could weigh against enforcement. Combined with the higher bar for enforcement and FinCEN consultation rights over bank supervisors, it makes measurable effectiveness (detection rates, useful SARs, reduced false positives) the metric banks will need to evidence for their AML models.",
    "useCases": [
      "aml-kyc",
      "generative-agentic-ai",
      "model-risk",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Does the 2026 FinCEN proposal mandate AI in AML programs?",
        "a": "No. It does not require any technology. It lists effective use of AI, federated learning, and advanced monitoring tools as evidence the Director may weigh in the institution's favor when deciding on enforcement or significant supervisory action."
      },
      {
        "q": "When would the 2026 program rule take effect?",
        "a": "It is still proposed. If finalized as drafted, institutions would have 12 months from the final rule's issuance to comply."
      },
      {
        "q": "What happened to the 2024 program proposal?",
        "a": "FinCEN withdrew it; the April 2026 press release states the new proposal fully supersedes the July 3, 2024 NPRM."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fincen-alert-2026-federal-student-aid-fraud",
    "warning": true,
    "authority": "fincen",
    "shortName": "FIN-2026-Alert004 (Federal Student Aid Fraud)",
    "title": "FinCEN Alert on Fraud Schemes Targeting Federal Student Aid",
    "aliases": [
      "FIN-2026-Alert004",
      "FIN-2026-FSAFRAUD",
      "student aid fraud alert",
      "ghost student alert"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2026-07-24",
    "effectiveDate": "2026-07-24",
    "link": "https://www.fincen.gov/news/news-releases/fincen-issues-alert-fraud-schemes-targeting-federal-student-aid",
    "appliesTo": "All BSA-covered financial institutions, especially banks and credit unions receiving student-aid refund disbursements and opening accounts for students",
    "answerFirst": "FinCEN Alert FIN-2026-Alert004, issued July 24, 2026, asks financial institutions to detect and report fraud rings stealing federal student aid through 'ghost students' and 'straw students.' It states that fraudsters may use artificial intelligence to generate fraudulent documents combining stolen and fabricated personal information (synthetic identities) to pass identity verification, and may use AI-powered chatbots to complete coursework so a ghost student stays enrolled long enough to collect a refund. Institutions should use the SAR key term FIN-2026-FSAFRAUD and the alert cross-references the 2024 deepfake alert.",
    "keyPoints": [
      "Issued July 24, 2026 as FIN-2026-Alert004; Treasury press release the same day",
      "Typologies: ghost students enrolled with stolen or AI-generated synthetic identities, straw students who sell their identities, and refund diversion of unspent grants, loans, and work-study awards",
      "Notes that fraudsters may use AI to generate fraudulent identity documents and AI-powered chatbots to complete coursework for ghost students",
      "Provides red flags around student-aid refund deposits, account activity inconsistent with a student, and multiple refunds to a single account or device",
      "SAR instructions: use key term FIN-2026-FSAFRAUD and reference the alert; cross-references FIN-2024-Alert004 on deepfake media",
      "Coordinated with the Department of Education and FBI"
    ],
    "whatChanged": "The alert extends FinCEN's generative-AI concern from onboarding deepfakes to AI agents acting on a fraudster's behalf after the account is open, and it is the most recent FinCEN statement treating AI-generated synthetic identities as a BSA red flag. Banks that bank colleges or receive aid disbursements now have a specific SAR key term and typology set to build into monitoring rules.",
    "useCases": [
      "fraud",
      "aml-kyc",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "What SAR key term applies to student aid fraud?",
        "a": "FIN-2026-FSAFRAUD, with a reference to FIN-2026-Alert004 in the narrative."
      },
      {
        "q": "How does the student aid alert relate to AI?",
        "a": "It states fraudsters may use AI to create synthetic-identity documents to beat identity verification and AI chatbots to complete coursework for fake students, and it points institutions back to the 2024 deepfake alert for identity-verification red flags."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fsoc-annual-report-2023",
    "authority": "treasury",
    "shortName": "FSOC 2023 Annual Report",
    "title": "Financial Stability Oversight Council 2023 Annual Report — Section 3.3.3, The Use of Artificial Intelligence in Financial Services",
    "aliases": [
      "FSOC 2023 Annual Report",
      "FSOC 2023 report",
      "2023 FSOC annual report"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2023-12-14",
    "supersededBy": "fsoc-annual-report-2024",
    "link": "https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service/financial-stability-oversight-council/studies-and-reports/annual-reports/fsoc-2023-annual-report",
    "appliesTo": "FSOC member agencies (recommendations); informs supervisory priorities for all U.S. financial institutions",
    "answerFirst": "FSOC's 2023 annual report, approved December 14, 2023, was the first to identify the use of AI in financial services as an emerging vulnerability to U.S. financial stability. It noted that AI can introduce safety-and-soundness risks such as cyber and model risk and consumer-compliance risks worsened by 'black box' explainability problems, singled out generative AI, and recommended that member agencies monitor rapid AI developments so oversight structures keep pace with emerging risks while facilitating efficiency and innovation.",
    "keyPoints": [
      "First FSOC annual report to name AI use in financial services as a vulnerability",
      "Catalogues current uses: fraud prevention and detection, customer service, document review, and retail credit underwriting",
      "Identifies safety-and-soundness risks (cyber, model risk) and consumer-compliance risks tied to explainability",
      "Stresses data controls and provenance, including legal permission to use training data and protections when sharing data with third parties",
      "Describes generative AI as a 2023 focus and flags its capacity to produce human-like text, code, and media",
      "Recommends member agencies monitor AI developments and update oversight structures while facilitating innovation"
    ],
    "whatChanged": "Before 2023, AI appeared in FSOC reports only in passing. Elevating it to a named vulnerability signalled to banking supervisors that AI governance, explainability, and data provenance would be examination themes, and it set up Treasury's 2024 RFI and reports.",
    "useCases": [
      "governance-general",
      "model-risk",
      "cybersecurity",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "When did FSOC first flag AI as a financial stability risk?",
        "a": "In its 2023 annual report, approved on December 14, 2023, which called AI use in financial services an emerging vulnerability."
      },
      {
        "q": "What AI risks did FSOC highlight in 2023?",
        "a": "Cyber and model risk, consumer-compliance risk from unexplainable 'black box' models, and data-provenance and third-party data-sharing risks, with specific attention to generative AI."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "treasury-ai-cybersecurity-risks-report-2024",
    "warning": true,
    "authority": "treasury",
    "shortName": "Treasury AI cybersecurity risks report (Mar 2024)",
    "title": "Managing Artificial Intelligence-Specific Cybersecurity Risks in the Financial Services Sector",
    "aliases": [
      "Managing Artificial Intelligence-Specific Cybersecurity Risks",
      "Treasury AI cybersecurity report",
      "Treasury AI report March 2024"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2024-03-27",
    "link": "https://home.treasury.gov/news/press-releases/jy2212",
    "appliesTo": "U.S. financial institutions of all sizes, their AI and data vendors, and financial regulators (recommendations are non-binding)",
    "answerFirst": "On March 27, 2024 the Treasury released 'Managing Artificial Intelligence-Specific Cybersecurity Risks in the Financial Services Sector', written under Executive Order 14110 and led by its Office of Cybersecurity and Critical Infrastructure Protection. Based on 42 in-depth interviews conducted in late 2023, it found a widening AI capability gap between large and small institutions and a 'fraud data divide' that leaves smaller banks without enough data to train anti-fraud models. Its recommended next steps — a financial-sector expansion of the NIST AI RMF, data 'nutrition labels' for vendor AI, explainability research, and an AI information-sharing forum — became the workplan for the AIEOG resources published in February 2026.",
    "keyPoints": [
      "Mandated by EO 14110 (Oct 2023); Treasury's OCCIP led the work as Sector Risk Management Agency for financial services",
      "Findings drawn from 42 interviews with financial institutions, IT firms, data providers, and anti-fraud/AML companies in late 2023",
      "Identifies a growing capability gap: large institutions build in-house AI, smaller ones lack the data and expertise; cloud-migrated firms have an advantage",
      "Identifies a 'fraud data divide': insufficient cross-firm fraud-data sharing disadvantages smaller institutions building anti-fraud models",
      "Warns of regulatory fragmentation as state, federal, and international regulators consider AI rules",
      "Recommends expanding the NIST AI Risk Management Framework with financial-services-specific governance content",
      "Calls for data supply-chain mapping best practices and standardized 'nutrition labels' disclosing what data trained a vendor model and how customer inputs are used",
      "Flags explainability of black-box and generative AI, and the need for shared AI-specific cyber threat information"
    ],
    "whatChanged": "This was the first federal report to treat AI as a distinct cybersecurity and fraud risk vector for the financial sector, covering both banks' defensive use of AI and attackers' use of generative AI for fraud. It did not impose obligations, but it set the agenda that Treasury has since executed through the AIEOG public-private partnership: the 2026 AI Lexicon, the FS AI RMF, and the explainability, data-labeling, and fraud workstreams all trace directly to this report's next-steps list.",
    "useCases": [
      "cybersecurity",
      "fraud",
      "third-party-vendors",
      "generative-agentic-ai",
      "governance-general"
    ],
    "faq": [
      {
        "q": "What did the Treasury's 2024 AI cybersecurity report recommend banks do?",
        "a": "Map their business lines and data supply chains for AI use, apply existing risk frameworks such as the NIST AI RMF to AI systems, seek 'nutrition label' disclosures from AI and data vendors, and participate in sector information sharing on AI-enabled fraud and cyber threats."
      },
      {
        "q": "Is the March 2024 Treasury AI report binding?",
        "a": "No. It is a report with recommendations and next steps; it created no rules. Its recommendations were later turned into voluntary AIEOG resources in 2026."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "treasury-ai-financial-services-rfi-2024",
    "authority": "treasury",
    "shortName": "Treasury AI RFI (June 2024)",
    "title": "Request for Information on Uses, Opportunities, and Risks of Artificial Intelligence in the Financial Services Sector",
    "aliases": [
      "Treasury AI RFI",
      "2024 Treasury RFI on AI",
      "Uses, Opportunities, and Risks of Artificial Intelligence in the Financial Services Sector"
    ],
    "docType": "Consultation",
    "status": "Final",
    "date": "2024-06-12",
    "commentDeadline": "2024-08-12",
    "link": "https://www.federalregister.gov/documents/2024/06/12/2024-12336/request-for-information-on-uses-opportunities-and-risks-of-artificial-intelligence-in-the-financial",
    "appliesTo": "Open to all stakeholders: financial institutions, fintechs, technology and data providers, consumer advocates, trade associations",
    "answerFirst": "Treasury announced its Request for Information on the uses, opportunities and risks of AI in financial services on June 6, 2024 and published it in the Federal Register on June 12, 2024 with a 60-day comment period. It asked how AI is being used, what obstacles hinder responsible adoption, the impact on consumers and investors, and what changes to legislative, regulatory, and supervisory frameworks were needed. Treasury received 103 comment letters and summarized them in its December 19, 2024 report.",
    "keyPoints": [
      "Announced June 6, 2024 (press release jy2393); Federal Register publication June 12, 2024; 60-day comment window",
      "Built on the March 2024 AI cybersecurity report and on parallel initiatives by other federal agencies",
      "Sought information on current AI uses, obstacles to responsible adoption, and effects on consumers, investors, institutions, and regulators",
      "Asked specifically for recommendations to enhance legislative, regulatory, and supervisory frameworks for AI in finance",
      "Emphasized interest in how AI could promote inclusive and equitable access to financial services",
      "Drew 103 comment letters from financial firms, consumer groups, technology providers, fintechs, trade associations, and consultancies"
    ],
    "whatChanged": "The RFI was Treasury's broadest fact-finding exercise on AI in finance and the first to explicitly ask industry where existing regulatory frameworks fall short. Its comment record fed the December 2024 findings report and is still cited in FSOC's annual reports, particularly on fair-lending and bias concerns tied to AI underwriting.",
    "useCases": [
      "governance-general",
      "credit-underwriting",
      "fair-lending",
      "third-party-vendors",
      "data-privacy"
    ],
    "faq": [
      {
        "q": "When did the Treasury AI RFI close?",
        "a": "The comment period ran 60 days from Federal Register publication on June 12, 2024, closing in August 2024. Treasury reported receiving 103 comment letters."
      },
      {
        "q": "What happened after the Treasury AI RFI?",
        "a": "Treasury published a report on December 19, 2024 summarizing the responses and recommending next steps for regulators, firms, and government agencies."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "treasury-ml-fraud-prevention-fy2024",
    "authority": "treasury",
    "shortName": "Treasury $4B AI fraud-prevention announcement (Oct 2024)",
    "title": "Treasury Announces Enhanced Fraud Detection Processes, Including Machine Learning AI, Prevented and Recovered Over $4 Billion in Fiscal Year 2024",
    "aliases": [
      "$4 billion in fraud and improper payments",
      "Office of Payment Integrity machine learning",
      "Treasury check fraud machine learning"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2024-10-17",
    "link": "https://home.treasury.gov/news/press-releases/jy2650",
    "appliesTo": "Federal payment programs served by the Bureau of the Fiscal Service; a reference point for banks' own AI fraud-detection programs",
    "answerFirst": "On October 17, 2024 Treasury announced that its Office of Payment Integrity, within the Bureau of the Fiscal Service, prevented and recovered over $4 billion in fraud and improper payments in fiscal 2024 (October 2023 to September 2024), up from $652.7 million in FY2023. Machine-learning AI that expedites identification of Treasury check fraud accounted for $1 billion in recoveries; risk-based screening prevented $500 million, prioritizing high-risk transactions prevented $2.5 billion, and payment-schedule efficiencies prevented $180 million. Treasury disburses about 1.4 billion payments worth over $6.9 trillion a year.",
    "keyPoints": [
      "FY2024 prevention and recovery: over $4 billion, versus $652.7 million in FY2023",
      "Machine-learning detection of Treasury check fraud: $1 billion recovered",
      "Identifying and prioritizing high-risk transactions: $2.5 billion prevented",
      "Expanded risk-based screening: $500 million prevented; payment-schedule efficiencies: $180 million prevented",
      "Run by the Office of Payment Integrity in the Bureau of the Fiscal Service, with Do Not Pay data shared with state unemployment agencies since May 2024",
      "Later cited in FSOC's 2025 annual report as an example of a government agency using AI for fraud detection"
    ],
    "whatChanged": "This is the clearest official benchmark for AI-driven fraud detection at scale in the U.S. payments system and is frequently cited by regulators and bank executives when justifying AI fraud investments. It also underpins Treasury's later position, in FSOC's 2025 report and the 2026 AIEOG fraud workstream, that AI is a fraud-fighting asset banks should be able to deploy.",
    "useCases": [
      "fraud",
      "aml-kyc"
    ],
    "faq": [
      {
        "q": "How much fraud did Treasury's AI catch in 2024?",
        "a": "Machine-learning AI used to identify Treasury check fraud drove $1 billion in recoveries; overall, enhanced data-driven processes prevented or recovered over $4 billion in fraud and improper payments in fiscal 2024."
      },
      {
        "q": "Which Treasury office runs the AI fraud detection program?",
        "a": "The Office of Payment Integrity within the Bureau of the Fiscal Service, which also operates the Do Not Pay service."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fsoc-annual-report-2024",
    "authority": "treasury",
    "shortName": "FSOC 2024 Annual Report",
    "title": "Financial Stability Oversight Council 2024 Annual Report — Section 3.3.3, The Use of Artificial Intelligence in Financial Services",
    "aliases": [
      "FSOC 2024 Annual Report",
      "FSOC 2024 report",
      "2024 FSOC annual report"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2024-12-06",
    "supersedes": [
      "fsoc-annual-report-2023"
    ],
    "supersededBy": "fsoc-annual-report-2025",
    "link": "https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service/financial-stability-oversight-council/studies-and-reports/annual-reports/fsoc-2024-annual-report",
    "appliesTo": "FSOC member agencies (recommendations); informs supervisory priorities for all U.S. financial institutions",
    "answerFirst": "FSOC's 2024 annual report, approved December 6, 2024, sharpened its AI analysis, warning that lack of explainability and high complexity could heighten instability beyond individual firms and that concentration in a few models or providers could create interconnection, herding, and contagion. It listed five persistent risk factors — explainability, data quality, performance assessment, third-party risk, and model bias — and recommended that member agencies keep monitoring AI, build interagency expertise on systemic AI risk, and continue Treasury-FBIIC-FSSCC cooperation. The report also references a staff-level FSOC Artificial Intelligence Working Group.",
    "keyPoints": [
      "Warns that concentration in AI models or providers may lead to interconnections, herding behavior, and contagion",
      "Five risk factors: explainability, data (higher volume and less structured), assessing performance and robustness, third-party AI vendors, and model bias/fair lending",
      "Notes generative AI 'hallucinations' and degraded analysis from low-quality or fake training data",
      "Recommends member agencies monitor AI so oversight structures address emerging risks while facilitating efficiency",
      "Supports interagency development of expertise to analyze and monitor systemic risks from AI",
      "Supports continued Treasury, FBIIC, and FSSCC public-private cooperation on AI",
      "References a staff-level FSOC Artificial Intelligence Working Group and Treasury's 2024 RFI"
    ],
    "whatChanged": "The 2024 report moved FSOC from noting AI risks to naming concrete systemic channels — model and vendor concentration, herding, contagion — and gave supervisors a shared five-factor risk vocabulary that appears in subsequent agency guidance on third-party AI and model risk.",
    "useCases": [
      "governance-general",
      "model-risk",
      "third-party-vendors",
      "fair-lending",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "What AI concentration risk did FSOC identify in 2024?",
        "a": "That many financial entities relying on a small number of base models or data providers could create interconnections, herding behavior, and contagion, amplifying instability beyond any single firm."
      },
      {
        "q": "Which AI risk factors does the FSOC 2024 report list?",
        "a": "Explainability challenges, data governance and quality, assessing performance and robustness, third-party vendor risk, and model bias including fair-lending compliance."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "treasury-ai-financial-services-report-2024",
    "authority": "treasury",
    "shortName": "Treasury AI in Financial Services report (Dec 2024)",
    "title": "Artificial Intelligence in Financial Services — Report on the Uses, Opportunities, and Risks of AI in the Financial Services Sector",
    "aliases": [
      "Artificial Intelligence in Financial Services report",
      "Treasury AI RFI report",
      "Treasury December 2024 AI report"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2024-12-19",
    "link": "https://home.treasury.gov/news/press-releases/jy2760",
    "appliesTo": "Financial institutions and fintechs using AI; federal and state financial regulators; other government agencies (recommendations only)",
    "answerFirst": "On December 19, 2024 Treasury published its report on the uses, opportunities, and risks of AI in financial services, summarizing 103 responses to its June 2024 RFI. It found AI, including generative AI, spreading across credit underwriting, fraud detection, customer service, and compliance, while amplifying data-privacy, bias, and third-party risks. It recommended that regulators clarify supervisory expectations and address gaps in existing frameworks, that the sector build AI-specific information sharing and data standards, and that firms review each AI use case for compliance with existing laws before deployment and re-evaluate periodically.",
    "keyPoints": [
      "Synthesizes 103 comment letters to the June 12, 2024 RFI",
      "Confirms rising AI use in underwriting, fraud detection, customer service, and regulatory compliance, with generative AI expanding the opportunity set",
      "Highlights amplified risks around data privacy, bias and fair lending, and dependence on third-party providers",
      "Recommends continued international and domestic collaboration toward consistent AI standards for financial services",
      "Recommends further analysis of gaps in existing regulatory frameworks and of AI-driven consumer harm",
      "Recommends regulators coordinate on enhancements to risk-management frameworks and clarify supervisory expectations",
      "Recommends sector-specific AI information sharing and data standards alongside the AI cybersecurity forum proposed in March 2024",
      "Recommends firms prioritize compliance review of AI use cases against existing law before deployment"
    ],
    "whatChanged": "The report closed the loop on Treasury's 2024 AI work and confirmed the position all U.S. financial regulators have since held: existing laws apply to AI now, and firms are responsible for compliance before deployment. Its call for clearer supervisory expectations foreshadowed the 2026 interagency revisions to model-risk guidance and the CFPB's adverse-action circulars.",
    "useCases": [
      "governance-general",
      "credit-underwriting",
      "fair-lending",
      "fraud",
      "customer-chatbots",
      "third-party-vendors",
      "data-privacy",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "What are the recommendations in Treasury's December 2024 AI report?",
        "a": "Five: continue domestic and international collaboration on AI standards; analyze gaps in existing frameworks and consumer-harm risks; have regulators coordinate on risk-management enhancements and clarify supervisory expectations; build financial-services AI information sharing and data standards; and have firms review AI use cases for compliance with existing law before deployment."
      },
      {
        "q": "Does the report create new AI rules for banks?",
        "a": "No. It is a findings report with recommendations. Its practical message is that existing laws and regulations already govern AI use and that compliance review must precede deployment."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fsoc-annual-report-2025",
    "warning": true,
    "authority": "treasury",
    "shortName": "FSOC 2025 Annual Report",
    "title": "Financial Stability Oversight Council 2025 Annual Report — Section 3.4, Harnessing Artificial Intelligence to Promote Financial Stability",
    "aliases": [
      "FSOC 2025 Annual Report",
      "FSOC 2025 report",
      "2025 FSOC annual report",
      "FSOC AI Working Group"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2025-12-11",
    "supersedes": [
      "fsoc-annual-report-2024"
    ],
    "link": "https://home.treasury.gov/system/files/261/FSOC2025AnnualReport.pdf",
    "appliesTo": "FSOC member agencies (recommendations); informs supervisory priorities for all U.S. financial institutions",
    "answerFirst": "FSOC's 2025 annual report, unanimously approved December 11, 2025, made 'harnessing AI to promote financial stability' one of four priority areas and formalized an FSOC Artificial Intelligence Working Group. The Council recommends member agencies use the working group to explore AI opportunities for resilience, monitor stability risks from AI adoption inside and outside finance, identify high-value AI use cases agencies can adopt in supervision, and run a public-private forum on regulatory impediments to responsible AI adoption. It adopts the Executive Order 14179 definition of AI (15 U.S.C. 9401(3)) and notes Treasury appointed a Chief AI Officer in June 2025.",
    "keyPoints": [
      "Restructured report names four priorities: Treasury market resilience, cyber risk, modernizing bank supervision, and harnessing AI",
      "Creates four working groups including a standing Artificial Intelligence Working Group",
      "Recommends the AI Working Group identify high-value AI use cases for agencies' own supervision and regulation",
      "Recommends the working group serve as a public-private forum to identify regulatory impediments to responsible AI adoption",
      "Supports member agencies' efforts to foster responsible AI adoption by regulated entities and international engagement on AI risks and benefits",
      "Notes community banks' resource gap and their reliance on bank-fintech partnerships and third-party AI",
      "Cites Treasury's own use of AI-enhanced fraud detection (over $4 billion in improper payments prevented or recovered) and a member agency's ML review of regulatory reports",
      "Records Treasury's June 2025 Chief AI Officer appointment and the creation of the Treasury AI Transformation Office"
    ],
    "whatChanged": "The tone flipped from monitoring risk to enabling adoption: FSOC now frames reluctance to innovate as itself a potential stability risk and tasks its AI Working Group with clearing regulatory obstacles. For banks this signals that supervisors are being pushed to accommodate AI use cases, including in fraud, cyber defense, and compliance, rather than to restrict them, while concentration and third-party risks stay on the watch list.",
    "useCases": [
      "governance-general",
      "fraud",
      "cybersecurity",
      "third-party-vendors",
      "generative-agentic-ai",
      "trading-markets"
    ],
    "faq": [
      {
        "q": "What is the FSOC AI Working Group?",
        "a": "A working group formalized in FSOC's December 2025 annual report to explore AI opportunities for financial resilience, monitor AI-related stability risks, identify high-value AI use cases for member agencies, and host public-private dialogue on regulatory impediments to responsible AI adoption."
      },
      {
        "q": "How does the FSOC 2025 report define AI?",
        "a": "It follows Executive Order 14179, referencing 15 U.S.C. 9401(3): a machine-based system that, for a given set of human-defined objectives, makes predictions, recommendations, or decisions influencing real or virtual environments."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "treasury-fs-ai-rmf-and-ai-lexicon-2026",
    "authority": "treasury",
    "shortName": "Treasury FS AI RMF and AI Lexicon (Feb 2026)",
    "title": "Financial Services AI Risk Management Framework (FS AI RMF) and Artificial Intelligence Lexicon",
    "aliases": [
      "FS AI RMF",
      "Financial Services AI Risk Management Framework",
      "Treasury AI Lexicon",
      "Artificial Intelligence Executive Oversight Group"
    ],
    "docType": "Framework",
    "status": "Final",
    "date": "2026-02-19",
    "link": "https://home.treasury.gov/news/press-releases/sb0401",
    "appliesTo": "Voluntary for all U.S. financial institutions, regulators, and technology providers; designed to scale from community banks to multinational institutions",
    "answerFirst": "On February 19, 2026 Treasury released a shared Artificial Intelligence Lexicon and the Financial Services AI Risk Management Framework (FS AI RMF), the first two of six deliverables from the Artificial Intelligence Executive Oversight Group (AIEOG), a public-private partnership of the FBIIC and the Financial Services Sector Coordinating Council. The FS AI RMF adapts the NIST AI Risk Management Framework to the operational, regulatory, and consumer-protection specifics of financial services and gives institutions tools to evaluate AI use cases and manage risk across the AI lifecycle. Both are non-binding and were issued in support of the President's AI Action Plan.",
    "keyPoints": [
      "Two of six AIEOG deliverables; the others cover explainability, data nutrition labeling, AI-enhanced fraud, and identity and authentication",
      "AI Lexicon establishes common definitions for AI concepts, capabilities, and risk categories across regulatory, technical, legal, and business functions",
      "FS AI RMF adapts the NIST AI RMF (Govern, Map, Measure, Manage) to financial-services operations, regulation, and consumer protection",
      "Provides tools to evaluate AI use cases, manage lifecycle risk, and embed accountability, transparency, and resilience in deployment decisions",
      "Explicitly scalable and flexible for institutions of varying size and complexity",
      "Developed with federal and state financial regulators and senior industry executives; endorsed by the Cyber Risk Institute",
      "Announced one day after Treasury's February 18, 2026 statement that the AIEOG initiative was complete",
      "Executes the 'expand the NIST AI RMF for financial services' recommendation from Treasury's March 2024 report"
    ],
    "whatChanged": "For the first time banks have a government-backed, sector-specific AI risk framework and a common vocabulary that regulators helped write. It is voluntary, but because prudential regulators participated, mapping an AI governance program to the FS AI RMF is the most defensible way to show examiners a structured approach, especially for community and mid-sized banks that lacked a template.",
    "useCases": [
      "model-risk",
      "governance-general",
      "cybersecurity",
      "third-party-vendors",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "How does the FS AI RMF relate to the NIST AI RMF?",
        "a": "It is a financial-services adaptation of the NIST AI Risk Management Framework, tailoring NIST's functions to banking operations, regulatory obligations, and consumer-protection requirements, with practical tools and reference materials."
      },
      {
        "q": "Who wrote the Treasury AI Lexicon and FS AI RMF?",
        "a": "The Artificial Intelligence Executive Oversight Group (AIEOG), a public-private partnership between the Financial and Banking Information Infrastructure Committee (regulators) and the Financial Services Sector Coordinating Council (industry), convened by Treasury."
      },
      {
        "q": "Do examiners require use of the FS AI RMF?",
        "a": "No. It is non-binding, but it was developed with federal and state regulators and is intended to support consistent supervision and implementation."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "treasury-fsoc-ai-innovation-series-2026",
    "authority": "treasury",
    "shortName": "FSOC AI Innovation Series (Mar–May 2026)",
    "title": "Artificial Intelligence Innovation Series — FSOC and Treasury AI Transformation Office roundtables",
    "aliases": [
      "AI Innovation Series",
      "FSOC AI Innovation Series",
      "Treasury AI Transformation Office"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2026-06-24",
    "link": "https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service/financial-stability-oversight-council/council-work/artificial-intelligence-innovation-series",
    "appliesTo": "Banks, asset managers, insurers, financial market utilities, technology firms, and regulators participating in FSOC-convened dialogue; outputs are readouts, not rules",
    "answerFirst": "Announced by Secretary Bessent at the December 11, 2025 FSOC meeting, the AI Innovation Series was four public-private roundtables run by the Office of FSOC and Treasury's AI Transformation Office: Strategy and Governance (March 4, 2026), Value Generation and Efficiency (April 7), Cybersecurity and Risk Management (April 27), and Financial Stability and Economic Security (May 19). Treasury announced the series' conclusion on June 24, 2026, reporting that participants asked for greater regulatory clarity and harmonization and that Treasury and FSOC will use the insights to ensure regulatory policy encourages AI adoption. The series implements Executive Order 14179 and the AI Action Plan.",
    "keyPoints": [
      "Four roundtables between March 4 and May 19, 2026, each with a published readout on the FSOC site",
      "Participants: senior leaders from banks, asset managers, insurers, financial market utilities, technology firms, and regulators",
      "Themes: high-value AI use cases, practical approaches to scaling, and regulatory impediments to adoption",
      "Participants stressed AI's role in productivity and in combating sophisticated cyber-attacks, fraud, and financial crime",
      "Requests recorded: greater regulatory clarity and harmonization, continued public-private engagement",
      "Deputy Assistant Secretary for FSOC Christina Skinner framed reluctance to innovate under legacy frameworks as itself a financial-stability risk",
      "Insights to feed Treasury's and FSOC's regulatory-policy work through the FSOC AI Working Group"
    ],
    "whatChanged": "The series is the operating arm of FSOC's 2025 pivot to enabling AI. Its readouts are the most direct public record of what Treasury intends to ask banking regulators for — clarity and harmonization on AI governance, and room to use AI against fraud and cyber threats — making them a leading indicator for 2026–27 interagency guidance.",
    "useCases": [
      "governance-general",
      "cybersecurity",
      "fraud",
      "generative-agentic-ai",
      "trading-markets"
    ],
    "faq": [
      {
        "q": "What was the Treasury AI Innovation Series?",
        "a": "Four FSOC and Treasury AI Transformation Office roundtables held March–May 2026 with financial institutions, technology firms, and regulators on AI strategy and governance, value generation, cybersecurity and risk management, and financial stability; Treasury announced its conclusion on June 24, 2026."
      },
      {
        "q": "Did the AI Innovation Series produce new rules?",
        "a": "No. It produced roundtable readouts and a statement that insights will inform Treasury and FSOC policy so regulation encourages innovation while maintaining financial stability."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ny-dfs-23-nycrr-part-500",
    "authority": "ny-dfs",
    "shortName": "23 NYCRR Part 500",
    "title": "Cybersecurity Requirements for Financial Services Companies (Second Amendment)",
    "aliases": [
      "23 NYCRR Part 500",
      "23 NYCRR 500",
      "Part 500",
      "NYDFS Cybersecurity Regulation",
      "DFS Cybersecurity Regulation"
    ],
    "docType": "Regulation",
    "status": "In force",
    "date": "2023-11-01",
    "effectiveDate": "2023-11-01",
    "link": "https://www.dfs.ny.gov/industry_guidance/regulations/final_adoptions_fs/rf_fs_2amend23NYCRR500_text_20231101_alt",
    "appliesTo": "Every person or entity operating under a DFS license, registration, charter, certificate, permit, or accreditation under the Banking Law, Insurance Law, or Financial Services Law; heightened 'Class A' duties for large companies; limited exemptions for small entities",
    "answerFirst": "23 NYCRR Part 500 is the New York cybersecurity regulation that all of DFS's AI guidance hangs on. First effective March 1, 2017, it was substantially amended by a Second Amendment effective November 1, 2023, with the last provisions — universal multi-factor authentication (§500.12) and asset inventories (§500.13(a)) — mandatory from November 1, 2025. It requires a written cybersecurity program based on a documented risk assessment, a CISO, 72-hour incident notice, 24-hour notice of any extortion payment, and an annual certification signed by the CEO and CISO by April 15.",
    "keyPoints": [
      "Second Amendment effective Nov 1, 2023; §500.17 notice changes at 30 days; governance, incident response, BCDR at one year (Nov 1, 2024); vulnerability management, access privileges, and training at 18 months (May 1, 2025); MFA and asset inventory at two years (Nov 1, 2025).",
      "Creates 'Class A companies' (at least $20 million in NY gross annual revenue in each of the last two years plus either 2,000+ employees or $1 billion+ global gross revenue) with added duties: independent audits, privileged-access management, and endpoint detection and response.",
      "§500.17: notify the Superintendent within 72 hours of determining a cybersecurity incident at the entity, an affiliate, or a third-party service provider; notify within 24 hours of any extortion payment and explain it within 30 days.",
      "§500.9 risk assessment must be documented, updated at least annually and on material change, and drive the entire program — the hook DFS uses to require AI-specific threats to be assessed.",
      "§500.11 third-party service provider policy, §500.12 MFA, §500.13 data retention and asset inventory, §500.14 monitoring and annual training — the sections DFS's AI letters cite by number.",
      "§500.17(b) annual certification of material compliance (or acknowledgment of non-compliance with a remediation plan) signed by the highest-ranking executive and the CISO by April 15.",
      "§500.20 enforcement: DFS has imposed multi-million-dollar penalties, including a $2.25 million consent order against Delta Dental in April 2026, its first cyber enforcement of the year."
    ],
    "whatChanged": "Before the Second Amendment, Part 500 already required a risk-based program, but the 2023 rewrite added board-level oversight, Class A tiering, 24-hour ransom-payment notice, universal MFA, and CEO/CISO certification — turning it from a policy requirement into a control set DFS examines line by line. Because DFS regulates AI by reading these sections rather than writing new ones, Part 500 compliance is in practice the AI-cyber compliance standard for any bank with a New York charter, branch, or agency.",
    "useCases": [
      "cybersecurity",
      "third-party-vendors",
      "governance-general",
      "data-privacy"
    ],
    "faq": [
      {
        "q": "What are the key Part 500 compliance dates from the 2023 amendment?",
        "a": "Nov 1, 2023 effective; Dec 1, 2023 for new §500.17 notices; Nov 1, 2024 for governance, incident response, and business continuity; May 1, 2025 for vulnerability management, access privileges, malicious-code controls, and training; Nov 1, 2025 for universal MFA and asset inventory."
      },
      {
        "q": "Who is a Class A company under Part 500?",
        "a": "A covered entity with at least $20 million in gross annual revenue in each of the last two fiscal years from New York operations (including affiliates' NY operations) and either more than 2,000 employees or over $1 billion in global gross annual revenue, averaged over the last two years."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ny-dfs-proposed-insurance-circular-letter-2024-01",
    "authority": "ny-dfs",
    "shortName": "DFS Proposed AI Insurance Circular Letter (Jan 2024)",
    "title": "Proposed Insurance Circular Letter on the Use of Artificial Intelligence Systems and External Consumer Data and Information Sources in Insurance Underwriting and Pricing",
    "aliases": [
      "proposed insurance circular letter",
      "January 17, 2024 proposed circular letter",
      "NYDFS proposed AI circular"
    ],
    "docType": "Consultation",
    "status": "Superseded",
    "date": "2024-01-17",
    "commentDeadline": "2024-03-17",
    "supersededBy": "ny-dfs-insurance-circular-letter-2024-07",
    "link": "https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2024_nn_proposed",
    "appliesTo": "Insurers authorized in New York using AI systems or external consumer data in underwriting or pricing",
    "answerFirst": "On January 17, 2024, DFS published for comment a proposed insurance circular letter on AI systems and external consumer data in underwriting and pricing, with comments due March 17, 2024. It introduced the AIS and ECDIS definitions, the requirement that insurers prove their models do not unfairly discriminate, and the expectation that adverse-action reasons include all information relied on. It was finalized with clarifications as Insurance Circular Letter No. 7 (2024) on July 11, 2024.",
    "keyPoints": [
      "Released January 17, 2024 with a 60-day comment window closing March 17, 2024.",
      "DFS's premise: ECDIS may reflect systemic biases and their use can reinforce inequality, so insurers must prove AI and external data do not produce unfair or unlawful discrimination.",
      "Proposed the disparate-impact framework, board and senior-management governance, vendor accountability, and transparency provisions that the final circular kept.",
      "Final version narrowed and clarified certain points in response to comments — including the ECDIS definition exclusions and the proxy-assessment expectation — but did not change the core structure."
    ],
    "whatChanged": "The proposal put New York's insurers on notice that DFS would treat AI fairness as a supervisory matter under existing anti-discrimination law rather than wait for legislation; the final July 2024 circular carried the approach into force. It is retained here because news coverage and comment letters from banking groups still reference the January 2024 proposal.",
    "useCases": [
      "fair-lending",
      "credit-underwriting",
      "governance-general"
    ],
    "faq": [
      {
        "q": "How did the final Circular Letter No. 7 differ from the January 2024 proposal?",
        "a": "The final letter kept the structure — AIS/ECDIS definitions, disparate-impact testing, governance, vendor responsibility, transparency — and added clarifications in response to comments, such as explicit exclusions from the ECDIS definition and clearer expectations on proxy analysis."
      },
      {
        "q": "When did the comment period on the proposed AI circular letter close?",
        "a": "March 17, 2024, sixty days after the January 17, 2024 release."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ny-dfs-industry-letter-2024-05-30-vce-customer-service",
    "authority": "ny-dfs",
    "shortName": "DFS Virtual Currency Customer Service Guidance (May 2024)",
    "title": "Guidance Regarding Customer Service Requests and Complaints (Virtual Currency Entities)",
    "aliases": [
      "Guidance Regarding Customer Service Requests and Complaints",
      "May 30, 2024 Industry Letter",
      "VCE customer service guidance"
    ],
    "docType": "Letter",
    "status": "In force",
    "date": "2024-05-30",
    "effectiveDate": "2024-05-30",
    "link": "https://www.dfs.ny.gov/industry-guidance/industry-letters/il20240530-cus-serv-req-and-complains",
    "appliesTo": "DFS-licensed or -chartered virtual currency entities (BitLicensees and limited-purpose trust companies); a signal of DFS expectations for AI customer-service tools more broadly",
    "answerFirst": "DFS's May 30, 2024 Industry Letter to virtual currency entities is its only guidance so far that sets rules for AI chatbots in customer service. Where a firm uses AI in customer service it must tell the customer at the start of the interaction that they are dealing with an AI tool and not a human, must let the customer escalate any request or complaint to a human representative, and must test and monitor the tool to ensure the information it gives is accurate. Acting Superintendent Asrow cited it to the Assembly in December 2025 as part of DFS's AI record.",
    "keyPoints": [
      "AI disclosure: customers must be informed at the beginning of the interaction that they are using an AI tool, not a human customer service representative.",
      "Human escalation: any request or complaint must be escalable from the AI tool to a human customer service representative.",
      "Accuracy: the firm must conduct sufficient testing and monitoring of any AI tool to ensure the information provided to customers is accurate.",
      "Baseline channels: at minimum a phone number and an electronic text channel (email or chat) for requests and complaints.",
      "Quarterly tabulation, starting with Q3 2024, of requests and complaints by channel and average time to resolution, to be made available to DFS.",
      "Scope is limited to virtual currency entities, but the three chatbot conditions mirror the CFPB's June 2023 chatbot findings and are the clearest statement of what DFS expects from any regulated firm's AI customer-service deployment."
    ],
    "whatChanged": "Before this letter DFS had no written expectations on AI chatbots; afterward, AI disclosure, human escalation, and accuracy testing became documented DFS positions that examiners of banks and money transmitters can reference by analogy. Bank digital-channel teams deploying generative-AI assistants in New York generally treat these three conditions as a floor.",
    "useCases": [
      "customer-chatbots",
      "generative-agentic-ai",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Does NYDFS require disclosure that a customer is talking to an AI chatbot?",
        "a": "For virtual currency entities, yes: the May 30, 2024 guidance requires telling the customer at the start of the interaction that they are using an AI tool, offering escalation to a human, and testing the tool for accuracy. No equivalent binding statement exists yet for banks, but DFS cites this letter as its AI-in-customer-service position."
      },
      {
        "q": "Does the VCE customer service guidance apply to banks?",
        "a": "No; it is addressed to DFS-licensed virtual currency entities. Banks should read it as a signal of DFS expectations, alongside CFPB chatbot guidance and UDAP principles."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ny-dfs-insurance-circular-letter-2024-07",
    "authority": "ny-dfs",
    "shortName": "Insurance Circular Letter No. 7 (2024)",
    "title": "Use of Artificial Intelligence Systems and External Consumer Data and Information Sources in Insurance Underwriting and Pricing",
    "aliases": [
      "Insurance Circular Letter No. 7 (2024)",
      "Circular Letter No. 7",
      "Circular Letter 2024-7",
      "CL 2024-7",
      "NYDFS AI circular letter"
    ],
    "docType": "Circular",
    "status": "In force",
    "date": "2024-07-11",
    "effectiveDate": "2024-07-11",
    "supersedes": [
      "ny-dfs-proposed-insurance-circular-letter-2024-01"
    ],
    "link": "https://www.dfs.ny.gov/industry-guidance/circular-letters/cl2024-07",
    "appliesTo": "All insurers authorized to write insurance in New York, Article 43 corporations, HMOs, licensed fraternal benefit societies, and the New York State Insurance Fund that use AI systems or external consumer data in underwriting or pricing. Does not apply to bank lending, marketing, or claims handling; bank-owned insurers and insurance subsidiaries are covered",
    "answerFirst": "Insurance Circular Letter No. 7 (2024), issued July 11, 2024, is DFS's final guidance on 'artificial intelligence systems' (AIS) and 'external consumer data and information sources' (ECDIS) in insurance underwriting and pricing. Insurers must show that AIS and ECDIS do not use or proxy protected classes, run a three-step disparate-impact analysis (adverse effect, legitimate rationale, annual search for less discriminatory alternatives), put boards and senior management in charge of AI governance, remain fully responsible for vendor models, and give consumers specific reasons — including the data relied on — within 15 days of an adverse decision. It applies to insurers, including bank-owned ones, not to bank credit decisions.",
    "keyPoints": [
      "Defines AIS as a machine-based system designed to perform functions normally associated with human intelligence, used to supplement or proxy traditional underwriting, and ECDIS as external data used the same way — excluding MIB reports, motor-vehicle reports, prescription data, and criminal-history searches.",
      "Unfair discrimination: insurers must demonstrate that ECDIS and AIS do not rely on protected class status and comply with Insurance Law anti-discrimination provisions (including §§2303, 3221, 4224, and Articles 24, 26, 43, 45).",
      "Three-step disparate-impact test: (1) quantitatively assess disproportionate adverse effect on protected classes, (2) establish a legitimate, lawful, non-pretextual rationale, (3) search for a less discriminatory alternative — repeated at least annually and documented.",
      "Proxy assessment: insurers must show ECDIS do not correlate with protected status using data available or reasonably imputed, without collecting new sensitive data from consumers.",
      "Governance: board oversight, senior management ownership, cross-functional committees, written policies reviewed annually, staff training, full AIS documentation, and complaint procedures under 11 NYCRR 243.",
      "Third parties: the insurer retains full responsibility for vendor ECDIS and AIS; contracts should give audit rights and require cooperation with DFS.",
      "Transparency: adverse-action notices must disclose that AIS or external data were used and the consumer's right to review the data; within 15 days of a declination the insurer must give the specific reasons and cannot hide behind a vendor's proprietary claims.",
      "Finalized after a January 17, 2024 proposed circular letter and a comment period ending March 17, 2024."
    ],
    "whatChanged": "This is the most prescriptive US state guidance on algorithmic fairness in financial services and it set the pattern later followed by Colorado's insurance AI rules. For banking groups the practical impact is on insurance subsidiaries and bank-affiliated agencies, which must now maintain model inventories, disparate-impact testing, and vendor audit rights that many had not previously documented. Bank lenders are outside its scope, but its three-step analysis closely mirrors what the CFPB and federal fair-lending examiners expect under ECOA and Regulation B, so many banks reuse it as a template.",
    "useCases": [
      "fair-lending",
      "credit-underwriting",
      "model-risk",
      "third-party-vendors",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Does NYDFS Circular Letter No. 7 apply to bank lending?",
        "a": "No. It applies to insurers authorized in New York (and Article 43 corporations, HMOs, fraternal benefit societies, and the State Insurance Fund) in underwriting and pricing. A bank's insurance affiliate is covered; its loan underwriting is governed by ECOA, FCRA, and federal supervisory guidance instead."
      },
      {
        "q": "What disparate impact testing does Circular Letter No. 7 require?",
        "a": "A documented three-step process: assess whether AIS or ECDIS produce a disproportionate adverse effect on a protected class; if so, establish a legitimate, lawful, non-pretextual rationale; then search for a less discriminatory alternative. The analysis must be repeated at least annually."
      },
      {
        "q": "Can an insurer rely on a vendor's AI model under Circular Letter No. 7?",
        "a": "Yes, but the insurer remains fully responsible for compliance, must be able to explain the model's use to DFS and consumers, and should have contractual audit rights; a vendor's proprietary claims do not excuse a vague adverse-action reason."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ny-dfs-industry-letter-2024-10-16-ai-cyber-risks",
    "warning": true,
    "authority": "ny-dfs",
    "shortName": "DFS AI Cybersecurity Industry Letter (Oct 2024)",
    "title": "Cybersecurity Risks Arising from Artificial Intelligence and Strategies to Combat Related Risks",
    "aliases": [
      "Cybersecurity Risks Arising from Artificial Intelligence",
      "October 16, 2024 Industry Letter",
      "NYDFS AI cybersecurity guidance",
      "DFS AI Industry Letter"
    ],
    "docType": "Letter",
    "status": "In force",
    "date": "2024-10-16",
    "effectiveDate": "2024-10-16",
    "link": "https://www.dfs.ny.gov/industry-guidance/industry-letters/il20241016-cyber-risks-ai-and-strategies-combat-related-risks",
    "appliesTo": "All entities regulated by DFS under the Banking, Insurance, or Financial Services Law ('Covered Entities' under Part 500)",
    "answerFirst": "On October 16, 2024, DFS issued an Industry Letter telling every DFS-regulated entity how to address AI-related cyber risk under 23 NYCRR Part 500. It identifies four risks — AI-enabled social engineering (deepfake voice, video, and text), AI-enhanced cyberattacks, exposure or theft of the large volumes of nonpublic information (including biometrics) used by AI, and AI supply-chain and vendor dependencies — and maps each to existing Part 500 obligations. It creates no new rule, but it states DFS's expectation that AI threats appear in risk assessments, training, MFA design, vendor diligence, and data-minimization programs.",
    "keyPoints": [
      "Four risks: two from attackers' use of AI (deepfake-driven social engineering; faster vulnerability discovery, malware variants, and lower skill barriers) and two from a firm's own AI use (concentration of NPI and biometric data; third-party and vendor dependencies).",
      "Risk assessments (§§500.2, 500.3, 500.9) must address AI-specific threats, including the firm's own AI deployments and the AI tools its vendors use, and be updated at least annually or on material change.",
      "Third-party service providers (§500.11): diligence on how vendors secure AI and NPI, contractual protections, and timely notice of cybersecurity events.",
      "Access controls and MFA (§§500.7, 500.12): limit privileges by job function; DFS says SMS, voice, and video-based authentication are vulnerable to AI manipulation and points to digital certificates or physical security keys; universal MFA became mandatory Nov 1, 2025.",
      "Training (§§500.10, 500.14): annual awareness training must cover deepfakes and AI social engineering, with procedures such as out-of-band verification of unusual requests; cybersecurity staff need training on AI-enhanced attacks and on deploying AI defensively.",
      "Monitoring (§§500.5, 500.14): monitor for unauthorized access and, where AI tools such as chatbots or copilots are deployed, monitor queries and outputs for unusual behaviour and NPI leakage.",
      "Data management (§500.13): minimize NPI retained for AI, maintain the asset and data inventory required by Nov 1, 2025, and secure biometric data that can be used to build deepfakes."
    ],
    "whatChanged": "This was the first formal statement by a US financial regulator translating AI risk into a specific, examinable control set. It did not add obligations, but it converted 'AI risk' from a strategy topic into a Part 500 examination item: a bank with a New York presence now needs its documented risk assessment, training records, MFA architecture, and vendor contracts to show that AI-enabled threats were considered — and DFS has since layered its May 2026 frontier-AI letter on the same foundation.",
    "useCases": [
      "cybersecurity",
      "third-party-vendors",
      "fraud",
      "data-privacy",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "Does the NYDFS AI letter impose new requirements?",
        "a": "No. It states that it does not impose new requirements beyond 23 NYCRR Part 500; it explains how DFS expects existing Part 500 obligations — risk assessment, vendor management, access controls, MFA, training, monitoring, data management — to be applied to AI-related risks."
      },
      {
        "q": "What MFA does NYDFS recommend against AI deepfakes?",
        "a": "Forms that cannot be defeated by AI-generated audio or video: the letter flags SMS, voice, and video verification as vulnerable and suggests digital-certificate or physical security-key approaches, with MFA required for all authorized users from November 1, 2025."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ny-dfs-asrow-assembly-statement-2025-12-16-ai-insurance",
    "authority": "ny-dfs",
    "shortName": "Asrow Assembly Statement on AI in Insurance (Dec 2025)",
    "title": "Statement by DFS Acting Superintendent Kaitlin Asrow at the NYS Assembly Hearing on the Use of Artificial Intelligence Systems in Insurance Underwriting and Pricing",
    "aliases": [
      "Asrow Assembly statement",
      "December 16, 2025 Assembly hearing",
      "Assembly hearing on AI in insurance underwriting"
    ],
    "docType": "Speech",
    "status": "Final",
    "date": "2025-12-16",
    "link": "https://www.dfs.ny.gov/reports_and_publications/press_releases/pr20251216",
    "appliesTo": "Statement of DFS supervisory philosophy on AI; relevant to all DFS-regulated banks, insurers, and licensees",
    "answerFirst": "On December 16, 2025, Acting Superintendent Kaitlin Asrow told the New York Assembly's Insurance and Science and Technology committees that DFS applies existing, technology-neutral law to AI — 'the core regulatory obligations are the same for manual processes as they are for AI models' — and that it has integrated review of new AI systems and datasets into its examinations. She described Insurance Circular Letter No. 7 (2024), the May 2024 virtual-currency chatbot guidance, and the October 2024 AI cybersecurity letter as DFS's AI framework, said she saw no immediate need for additional AI rules, but acknowledged room for specific AI requirements as new risks arise.",
    "keyPoints": [
      "DFS's stated approach: technology-neutral enforcement of existing anti-discrimination, consumer-protection, and cybersecurity law rather than AI-specific rulemaking.",
      "Examinations now include review of new AI systems and external data sources deployed by regulated entities.",
      "Cites three pillars: Circular Letter No. 7 (2024) on AI in insurance underwriting and pricing, the May 30, 2024 virtual-currency customer service guidance on AI chatbots, and the October 16, 2024 AI cybersecurity Industry Letter.",
      "No immediate plans for further AI rules; 'guidance and circular letters' remain the vehicle, with AI-specific requirements possible 'as new risks arise'.",
      "Asrow references her prior role at the Federal Reserve supervising banks' use of technology, signalling continuity of the bank-supervision lens in DFS's AI work."
    ],
    "whatChanged": "This is the clearest public statement of where DFS is going on AI after Adrienne Harris's departure: no AI rulebook, but AI systems are already inside the examination scope. For banks it means AI governance evidence — model inventories, testing, vendor oversight — should be exam-ready under existing Banking Law and Part 500 authorities, not deferred until a rule exists.",
    "useCases": [
      "governance-general",
      "fair-lending",
      "customer-chatbots",
      "cybersecurity"
    ],
    "faq": [
      {
        "q": "Is NYDFS planning an AI-specific regulation?",
        "a": "Not as of December 2025. Acting Superintendent Asrow told the Assembly that DFS relies on technology-neutral law plus guidance and circular letters, while leaving room for specific AI requirements if new risks emerge."
      },
      {
        "q": "Does NYDFS examine banks' AI systems today?",
        "a": "Yes. Asrow stated DFS has integrated reviews of new AI systems and datasets into its supervisory approach, and its October 2024 letter makes AI risk part of the Part 500 examination scope."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ny-dfs-industry-letter-2026-05-21-frontier-ai-models",
    "warning": true,
    "authority": "ny-dfs",
    "shortName": "DFS Frontier AI Models Industry Letter (May 2026)",
    "title": "Heightened Cybersecurity Risks Associated with Frontier AI Models",
    "aliases": [
      "Heightened Cybersecurity Risks Associated with Frontier AI Models",
      "NYDFS frontier AI letter",
      "frontier AI models industry letter",
      "May 21, 2026 Industry Letter"
    ],
    "docType": "Letter",
    "status": "In force",
    "date": "2026-05-21",
    "effectiveDate": "2026-05-21",
    "link": "https://www.dfs.ny.gov/industry-guidance/industry-letters/20260521-heightened-cybersecurity-risks-assoc-with-frontier-ai-models",
    "appliesTo": "Chief Information Security Officers of all DFS-regulated entities — banks, insurers, money transmitters, and virtual-currency licensees",
    "answerFirst": "On May 21, 2026, DFS issued an Industry Letter warning that 'frontier AI models' able to identify vulnerabilities and build exploits at unprecedented speed and scale will soon become widely available, and directing regulated entities to prepare before they do. DFS asks firms to shorten remediation timelines for firmware, hardware, and software vulnerabilities, map third-party dependencies and coordinate patching with critical providers, put human review on AI-generated code before deployment, strengthen logging and alerting, and test resilience procedures more often. It creates no new legal requirement under 23 NYCRR Part 500 but was issued alongside a companion letter on measures for a heightened threat environment.",
    "keyPoints": [
      "Defines the concern as AI models that amplify the potency, scale, and speed of finding and exploiting vulnerabilities in information systems; DFS notes they are not yet broadly available but expects wider release soon.",
      "Vulnerability management: accelerate identification and remediation of firmware, hardware, and software vulnerabilities on the assumption that time-to-exploit will collapse.",
      "Third parties: map dependencies on critical service providers and coordinate vulnerability remediation with them (Part 500 §500.11 territory).",
      "Secure development: validate inputs, restrict script execution, and require human oversight of AI-generated code before it is deployed.",
      "Detection and resilience: strengthen logging and security-event alerting and test operational-resilience and incident-response procedures more frequently.",
      "Foundational expectation is full compliance with 23 NYCRR Part 500; the letter states it does not create new requirements.",
      "Published the same day as 'Guidance on Measures Regulated Entities Should Consider in a Heightened Cybersecurity Threat Environment', which supplies the defensive playbook; press release from Acting Superintendent Asrow followed."
    ],
    "whatChanged": "DFS became the first US financial regulator to issue supervisory guidance specifically about offensive-capable frontier AI models. For banks the practical shift is in timing: DFS is signalling that patch cadences and vendor-remediation SLAs designed for human-speed attackers will be judged inadequate once AI-driven vulnerability discovery is commonplace, and that AI coding assistants inside the bank are themselves a supply-chain risk requiring human review.",
    "useCases": [
      "cybersecurity",
      "generative-agentic-ai",
      "third-party-vendors"
    ],
    "faq": [
      {
        "q": "What is a 'frontier AI model' in the NYDFS May 2026 letter?",
        "a": "DFS uses the term for advanced AI systems that amplify the potency, scale, and speed of identifying vulnerabilities and exploits in information systems — models it says are not yet broadly available but soon will be."
      },
      {
        "q": "Does the frontier AI letter change Part 500 obligations?",
        "a": "No. It is advisory and states it creates no new legal requirements; it describes how DFS expects existing Part 500 vulnerability-management, third-party, monitoring, and incident-response controls to be calibrated for AI-accelerated attacks."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ny-dfs-industry-letter-2026-05-21-heightened-threat-environment",
    "warning": true,
    "authority": "ny-dfs",
    "shortName": "DFS Heightened Threat Environment Guidance (May 2026)",
    "title": "Guidance on Measures Regulated Entities Should Consider in a Heightened Cybersecurity Threat Environment",
    "aliases": [
      "Heightened Cybersecurity Threat Environment",
      "heightened threat environment guidance",
      "Measures Regulated Entities Should Consider in a Heightened Cybersecurity Threat Environment"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2026-05-21",
    "effectiveDate": "2026-05-21",
    "link": "https://www.dfs.ny.gov/industry-guidance/industry-letters/20260521-guidance-on-measures-reg-entities-should-consider-in-a-hcte",
    "appliesTo": "All DFS-regulated entities subject to 23 NYCRR Part 500",
    "answerFirst": "Issued May 21, 2026 as the companion to DFS's frontier-AI letter, this guidance defines a 'heightened cybersecurity threat environment' as one where risks are significantly elevated with a high likelihood of impacting information systems, nonpublic information, or operations — expressly including the arrival of frontier AI models — and lists the measures DFS expects firms to consider in three areas: reducing the attack surface, improving threat detection and readiness, and improving resilience and response. It states it does not alter Part 500 requirements.",
    "keyPoints": [
      "Reduce the attack surface: fix known exploited vulnerabilities quickly, disable unused ports and protocols, move to phishing-resistant MFA (authenticator apps, hardware tokens), segment networks, and review privileged access and cloud configurations.",
      "Improve detection and readiness: deploy current intrusion detection and prevention, monitor logs and alert on suspicious activity, act on threat intelligence and indicators of compromise, train staff on social engineering, and engage third-party providers on the heightened risk.",
      "Improve resilience and response: test backup integrity and recovery, exercise incident-response and business-continuity plans, prepare communications for disruptions, and ensure critical systems can run independently.",
      "Includes a reminder to keep monitoring financial and virtual-currency transactions for compliance during a disruption.",
      "Names frontier AI models as a technological development that can trigger a heightened threat environment, tying it to the same-day frontier-AI letter.",
      "Explicitly does not create new legal requirements or alter Part 500."
    ],
    "whatChanged": "Before May 2026 DFS issued threat-specific advisories (for example the February 6, 2026 vishing advisory) case by case; this guidance gives banks a standing checklist to switch on whenever DFS or the firm declares a heightened threat environment, and pairs it with an explicit AI trigger. Examiners can now ask which of these measures a firm considered and why any were not adopted.",
    "useCases": [
      "cybersecurity",
      "third-party-vendors",
      "governance-general"
    ],
    "faq": [
      {
        "q": "When does a 'heightened cybersecurity threat environment' exist under NYDFS guidance?",
        "a": "When cybersecurity risks are significantly elevated and therefore have a high likelihood of impacting information systems, nonpublic information, or operations — DFS cites geopolitical events and the emergence of frontier AI models as examples."
      },
      {
        "q": "Is the heightened threat environment guidance binding?",
        "a": "No. It supplements 23 NYCRR Part 500 and states it does not establish new legal obligations, but DFS frames its measures as expectations that inform risk management and will be discussed in examinations."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "co-sb24-205",
    "authority": "colorado-ai-act",
    "shortName": "SB 24-205",
    "title": "Consumer Protections for Artificial Intelligence (Colorado Artificial Intelligence Act)",
    "aliases": [
      "SB 24-205",
      "SB24-205",
      "Colorado AI Act",
      "Colorado Artificial Intelligence Act"
    ],
    "docType": "Statute",
    "status": "Superseded",
    "date": "2024-05-17",
    "supersededBy": "co-sb26-189",
    "link": "https://leg.colorado.gov/bills/sb24-205",
    "appliesTo": "Developers and deployers of high-risk AI systems making consequential decisions for Colorado consumers, including financial or lending services; banks and credit unions under equivalent prudential guidance were deemed compliant",
    "answerFirst": "SB 24-205, signed May 17, 2024, was the first comprehensive US state AI law. It required developers and deployers of 'high-risk' AI systems — those that are a substantial factor in consequential decisions such as credit or lending — to use reasonable care to avoid algorithmic discrimination, run impact assessments, maintain risk-management programs, and notify consumers of adverse decisions. Originally effective February 1, 2026, it was delayed to June 30, 2026 and then repealed and reenacted by SB 26-189 before ever taking effect.",
    "keyPoints": [
      "Defined 'high-risk artificial intelligence system' as one that makes or is a substantial factor in a consequential decision, expressly including decisions affecting access to financial or lending services",
      "Imposed a duty of reasonable care on developers and deployers to protect consumers from known or reasonably foreseeable algorithmic discrimination",
      "Deployers had to maintain a risk management policy and program (NIST AI RMF or ISO/IEC 42001 named as acceptable frameworks) and complete annual impact assessments",
      "Consumers were entitled to pre-decision notice, a statement of reasons for adverse decisions, data correction, and an opportunity to appeal to human review",
      "Rebuttable presumption of reasonable care for firms meeting the statutory obligations; affirmative defense for those following a recognized risk framework",
      "C.R.S. 6-1-1705: banks, out-of-state banks, and credit unions were deemed in full compliance if subject to examination by a state or federal prudential regulator under published guidance or regulations at least as stringent as the Act and requiring regular anti-discrimination audits of high-risk AI",
      "Exclusive enforcement by the Colorado Attorney General as a deceptive trade practice; no private right of action; AG rulemaking authority"
    ],
    "whatChanged": "It was the first US statute to name credit and lending AI as a regulated 'high-risk' category with a duty of care, impact assessments, and appeal rights — an EU AI Act-style model. For banks the headline was the prudential safe harbor, which effectively deferred to federal fair-lending and model-risk supervision. The law never took effect: business opposition, a December 2025 White House executive order naming it, and a DOJ-backed federal lawsuit led to its repeal and replacement by SB 26-189 in May 2026.",
    "useCases": [
      "credit-underwriting",
      "fair-lending",
      "model-risk",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Did the Colorado AI Act SB 24-205 ever take effect?",
        "a": "No. Its effective date was moved from February 1, 2026 to June 30, 2026 by SB 25B-004, and SB 26-189 repealed and reenacted it on May 14, 2026, before that date."
      },
      {
        "q": "Did SB 24-205 exempt banks?",
        "a": "It deemed banks and credit unions compliant when a state or federal prudential regulator examined them under guidance substantially equivalent to or stricter than the Act. That safe harbor was removed in the replacement law, SB 26-189."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "co-sb25b-004",
    "authority": "colorado-ai-act",
    "shortName": "SB 25B-004",
    "title": "Artificial Intelligence Consumer Protections — delay of effective date to June 30, 2026",
    "aliases": [
      "SB 25B-004",
      "SB25B-004",
      "Colorado AI Act delay"
    ],
    "docType": "Statute",
    "status": "Superseded",
    "date": "2025-08-28",
    "effectiveDate": "2025-08-28",
    "supersededBy": "co-sb26-189",
    "link": "https://leg.colorado.gov/bills/sb25b-004",
    "appliesTo": "All developers and deployers subject to SB 24-205",
    "answerFirst": "SB 25B-004, signed by Governor Polis on August 28, 2025 at the close of a special legislative session, postponed the effective date of the Colorado AI Act from February 1, 2026 to June 30, 2026 without changing its substance. Lawmakers had been unable to agree on amendments during the special session, so the delay bought time for the 2026 regular session, which ultimately replaced the law with SB 26-189.",
    "keyPoints": [
      "Enacted in the August 2025 special session after negotiations to narrow SB 24-205 collapsed",
      "Single substantive change: effective date moved from February 1, 2026 to June 30, 2026",
      "No changes to the duty of care, impact assessments, consumer rights, or the bank/credit union safe harbor",
      "Signed August 28, 2025; the delay was itself overtaken when SB 26-189 repealed and reenacted the statute on May 14, 2026 with a January 1, 2027 start"
    ],
    "whatChanged": "For banks it moved the compliance date by five months and signalled that the legislature intended a rewrite rather than implementation as passed. The June 30, 2026 date never bit; SB 26-189 replaced the underlying law before it arrived.",
    "useCases": [
      "governance-general",
      "credit-underwriting"
    ],
    "faq": [
      {
        "q": "What did SB 25B-004 change in the Colorado AI Act?",
        "a": "Only the effective date, from February 1, 2026 to June 30, 2026. It made no substantive amendments."
      },
      {
        "q": "Was the Colorado AI Act delayed again in 2026?",
        "a": "Not delayed but replaced: SB 26-189, signed May 14, 2026, repealed and reenacted it as the ADMT Act with an effective date of January 1, 2027."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "co-sb26-189",
    "authority": "colorado-ai-act",
    "shortName": "SB 26-189",
    "title": "Automated Decision-Making Technology Act (repeal and reenactment of the Colorado AI Act)",
    "aliases": [
      "SB 26-189",
      "SB26-189",
      "Colorado ADMT Act",
      "Automated Decision-Making Technology Act"
    ],
    "docType": "Statute",
    "status": "Final",
    "date": "2026-05-14",
    "effectiveDate": "2027-01-01",
    "supersedes": [
      "co-sb24-205",
      "co-sb25b-004"
    ],
    "link": "https://leg.colorado.gov/bills/sb26-189",
    "appliesTo": "Developers and deployers of covered ADMT that materially influences consequential decisions about Colorado consumers in financial services, insurance, employment, housing, education, health care, and government services — banks and credit unions included",
    "answerFirst": "SB 26-189, signed May 14, 2026 and effective January 1, 2027, repeals the Colorado AI Act and reenacts it as the Automated Decision-Making Technology Act. It replaces the duty of care, impact assessments, and risk-management programs with a transparency regime: developer documentation to deployers, clear consumer notice, a plain-language explanation within 30 days of any adverse outcome, rights to access and correct personal data, and commercially reasonable human review. It removes the prior safe harbor for banks and credit unions under equivalent federal supervision, but a lender's ECOA/Reg B (and where applicable FCRA) adverse action notice satisfies the Act's notice and disclosure duties for the same decision. The Attorney General enforces exclusively, with penalties of up to $20,000 per violation and a 60-day cure period through January 1, 2030.",
    "keyPoints": [
      "Introduced May 1, 2026, passed both chambers by May 9, signed May 14, 2026 — two weeks start to finish, ahead of the June 30, 2026 date on which SB 24-205 would have taken effect",
      "'ADMT' = technology that processes personal data to generate recommendations, rankings, or scores used to make decisions about an individual; 'covered ADMT' is ADMT used to materially influence a consequential decision, including decisions affecting access to financial services",
      "Developers must provide deployers documentation of intended and known harmful uses, categories of training data, limitations and known risks, instructions for meaningful human review, and notice of material updates (from January 1, 2027)",
      "Deployers must give clear and conspicuous notice at points of consumer interaction and, within 30 days of an adverse outcome (denial, termination, material reduction, or materially worse pricing), explain the decision, the ADMT's role, the data used, and the consumer's rights",
      "Consumers may access and correct personal data used and request meaningful human review by trained staff with authority to override the outcome, to the extent commercially reasonable",
      "Strikes the SB 24-205 safe harbor for banks, credit unions, and entities complying with federal agency standards; no GLBA entity-level exemption",
      "A financial institution that provides a required ECOA/Regulation B and, where applicable, FCRA notice complies with the Act's notice and disclosure requirements for that decision or adverse outcome",
      "Violations are deceptive trade practices under the Colorado Consumer Protection Act (up to $20,000 per violation); AG exclusive enforcement; no private right of action; 60-day notice and cure before January 1, 2030; three-year record retention; AG must adopt implementing rules by January 1, 2027"
    ],
    "whatChanged": "Colorado moved from an EU-style governance statute to an FCRA-style disclosure statute. For banks the trade is unfavourable on scope but favourable on burden: the prudential-regulator exemption is gone, so AI-influenced credit, deposit, and pricing decisions for Colorado consumers are squarely covered, but the obligations largely map onto existing adverse action notice processes. The genuinely new work is documenting what vendors' models do, standing up a human-review channel that meets the AG's standards, and handling data-correction requests within the Act's timelines.",
    "useCases": [
      "credit-underwriting",
      "fair-lending",
      "third-party-vendors",
      "governance-general",
      "customer-chatbots"
    ],
    "faq": [
      {
        "q": "Does SB 26-189 apply to banks?",
        "a": "Yes. It removed the SB 24-205 exemption for banks and credit unions supervised under equivalent federal guidance. The only financial-sector relief is that an ECOA/Reg B (and FCRA, where applicable) adverse action notice satisfies the Act's notice and disclosure duties for the same decision."
      },
      {
        "q": "When does the Colorado ADMT Act take effect?",
        "a": "January 1, 2027. The Attorney General must adopt implementing rules by the same date and has said it will not enforce until rulemaking is complete."
      },
      {
        "q": "What counts as an adverse outcome under SB 26-189?",
        "a": "A denial, termination, material reduction in benefits or services, or materially worse pricing or terms resulting from a consequential decision that covered ADMT materially influenced. The deployer must explain it in plain language within 30 days."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "co-hb26-1263",
    "authority": "colorado-ai-act",
    "shortName": "HB 26-1263",
    "title": "Conversational Artificial Intelligence Service Operator Requirements (Chatbot Safety Act)",
    "aliases": [
      "HB 26-1263",
      "HB26-1263",
      "Chatbot Safety Act",
      "Colorado Chatbot Safety Act"
    ],
    "docType": "Statute",
    "status": "Final",
    "date": "2026-05-29",
    "effectiveDate": "2027-01-01",
    "link": "https://leg.colorado.gov/bills/hb26-1263",
    "appliesTo": "Operators of conversational AI services accessible to the public in Colorado, including bank customer-service chatbots",
    "answerFirst": "HB 26-1263, signed May 29, 2026 and effective January 1, 2027, requires operators of publicly accessible conversational AI services to disclose that users are interacting with AI, maintain protocols for users expressing suicidal ideation, estimate user age and apply safeguards for minors, refrain from presenting AI output as coming from a licensed professional, and report annually to the Colorado Attorney General. The AG's August 11, 2026 proposed rules implement it alongside the ADMT Act.",
    "keyPoints": [
      "Signed May 29, 2026; effective January 1, 2027; implemented through the same AG rulemaking as SB 26-189",
      "All operators must clearly disclose that the service uses artificial intelligence",
      "Operators must implement protocols for detecting and responding to expressions of suicidal ideation or self-harm",
      "Age estimation required; for minors, engagement-maximizing rewards and sexually explicit content are prohibited and privacy-management tools must be provided",
      "Prohibits misrepresenting AI outputs as advice from a licensed professional",
      "Annual reporting to the Colorado Attorney General"
    ],
    "whatChanged": "It adds a second Colorado AI statute that reaches banks through their customer-facing chatbots and virtual assistants rather than through credit decisions. Disclosure that a customer is talking to AI, crisis-response protocols, and the bar on implying licensed-professional advice all bear directly on retail-banking assistants deployed to Colorado customers.",
    "useCases": [
      "customer-chatbots",
      "generative-agentic-ai",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Does Colorado's Chatbot Safety Act apply to a bank's customer-service chatbot?",
        "a": "If the chatbot is a conversational AI service accessible to the public in Colorado, yes: the operator must disclose that it is AI, maintain crisis-response protocols, and meet the age-related and reporting duties from January 1, 2027."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "co-ag-admt-proposed-rules-2026",
    "authority": "colorado-ai-act",
    "shortName": "Colorado AG proposed ADMT rules",
    "title": "Proposed Automated Decision-Making Technology and Conversational AI Service Rules (Notice of Rulemaking Hearing)",
    "aliases": [
      "ADMT rules",
      "Colorado ADMT regulations",
      "Colorado AG AI rulemaking",
      "ADMT and Conversational AI Service Rules"
    ],
    "docType": "Regulation",
    "status": "Comment period open",
    "date": "2026-08-11",
    "commentDeadline": "2026-10-26",
    "link": "https://coag.gov/ai/",
    "appliesTo": "Developers, 'midstream developers', and deployers of covered ADMT under SB 26-189, and operators of conversational AI services under HB 26-1263",
    "answerFirst": "On August 11, 2026 the Colorado Department of Law filed proposed rules implementing the ADMT Act (SB 26-189) and the Chatbot Safety Act (HB 26-1263). The draft adds a 'midstream developer' category, offers two alternative tests for when ADMT 'materially influences' a decision, prescribes the contents of post-adverse-outcome disclosures (principal reasons with real specificity, whether inferences or risk scores drove the result, any automatic-denial factors), and sets standards for meaningful human review — independent, subject-matter-competent reviewers with override authority who may not themselves rely on ADMT. Comments to shape the revised draft are due September 4, 2026; a revised draft is targeted for September 23; the hearing and final comment deadline are October 26, 2026.",
    "keyPoints": [
      "Filed with the Colorado Secretary of State on August 11, 2026 as an expedited rulemaking to meet the January 1, 2027 statutory deadline",
      "Creates 'midstream developers' — firms that integrate covered ADMT into their own products — who must obtain upstream documentation and pass it downstream",
      "Two alternative 'materially influences' tests: whether the decision-maker reached an independent judgment after reviewing the output, or whether other information played a substantially larger role than the ADMT output; the AG notes the second is easier to satisfy",
      "Adverse-outcome disclosures must state the decision, the deployer's purpose, human reviewer roles, effective dates, the principal reasons with specificity, and whether inferences or risk scores drove the outcome — generic references to internal policy are insufficient, and disclosures must be tailored to the sector (e.g. lending)",
      "Meaningful human review: reviewers independent from the original decision-maker where feasible, trained, insulated from managerial pressure, empowered to override, and barred from using ADMT to conduct the review; 'commercially reasonable' scales with harm severity and deployer capacity",
      "Also implements HB 26-1263 disclosure, age-estimation, and reporting duties for conversational AI operators",
      "Deadlines: September 4, 2026 (comments for revised draft), September 23, 2026 (revised draft target), October 26, 2026 (hearing in Denver/videoconference and final written comments)"
    ],
    "whatChanged": "This is where the ADMT Act's bank-relevant detail is being decided. The 'materially influences' test determines whether a scorecard that feeds an underwriter's judgment is covered at all; the disclosure rules go beyond the reason-code conventions of Reg B adverse action notices; and the human-review standard would require most lenders to formalize an appeal channel staffed independently of the original credit decision. Banks with Colorado customers have until October 26, 2026 to comment.",
    "useCases": [
      "credit-underwriting",
      "fair-lending",
      "third-party-vendors",
      "customer-chatbots",
      "governance-general"
    ],
    "faq": [
      {
        "q": "When are comments due on Colorado's ADMT rules?",
        "a": "September 4, 2026 to be considered for the revised draft, and October 26, 2026 (11:59 PM MST) as the final deadline coinciding with the public hearing."
      },
      {
        "q": "Does the AG's human-review standard let a bank use AI to review an appeal?",
        "a": "Not as drafted. The proposed rules say reviewers may not use ADMT to conduct the review and should be independent, trained, and able to override the outcome."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "nist-ai-100-1",
    "authority": "nist",
    "shortName": "NIST AI RMF 1.0",
    "title": "Artificial Intelligence Risk Management Framework (AI RMF 1.0), NIST AI 100-1",
    "aliases": [
      "AI RMF 1.0",
      "NIST AI 100-1",
      "NIST AI RMF",
      "AI Risk Management Framework"
    ],
    "docType": "Framework",
    "status": "In force",
    "date": "2023-01-26",
    "effectiveDate": "2023-01-26",
    "link": "https://www.nist.gov/itl/ai-risk-management-framework",
    "appliesTo": "Voluntary; any organization designing, developing, deploying or using AI systems. Widely adopted by US banks as the scaffold for enterprise AI governance.",
    "answerFirst": "NIST published the AI Risk Management Framework 1.0 (NIST AI 100-1) on January 26, 2023, as directed by the National AI Initiative Act of 2020. It is voluntary and organizes AI risk management into four functions — Govern, Map, Measure and Manage — and defines seven characteristics of trustworthy AI: valid and reliable, safe, secure and resilient, accountable and transparent, explainable and interpretable, privacy-enhanced, and fair with harmful bias managed. NIST has said the framework is being revised as part of the July 2025 White House AI Action Plan.",
    "keyPoints": [
      "Released January 26, 2023 after two public drafts (March and August 2022) and a 2021 request for information; developed under the National Artificial Intelligence Initiative Act of 2020.",
      "Part 1 explains how organizations should frame AI risk and lists seven trustworthiness characteristics; Part 2 is the Core, built from four functions: Govern (cross-cutting), Map, Measure and Manage.",
      "Each function breaks into categories and subcategories of outcomes (e.g., Govern 1.1: legal and regulatory requirements are understood, managed and documented) that organizations tailor to their context.",
      "Explicitly rights-preserving and sector-agnostic; intended to be used alongside existing frameworks such as NIST's Cybersecurity Framework and Privacy Framework.",
      "Companion resources: the online AI RMF Playbook, a Roadmap, and crosswalks to ISO/IEC standards and other frameworks, hosted at the NIST AI Resource Center (airc.nist.gov).",
      "'Profiles' — use-case or sector implementations of the Core — are the mechanism for later work such as the Generative AI Profile (AI 600-1) and the 2026 critical-infrastructure profile."
    ],
    "whatChanged": "Before 2023, US banks had model risk management guidance (SR 11-7 / OCC 2011-12) but no widely accepted, examiner-legible structure for governing AI as an enterprise risk rather than as individual quantitative models. The AI RMF supplied that structure, and its role grew when the April 2026 interagency model-risk revision left generative and agentic AI to banks' broader risk programs: institutions now routinely present NIST-aligned Govern/Map/Measure/Manage programs to examiners as evidence of control over systems outside formal model-risk scope.",
    "useCases": [
      "governance-general",
      "model-risk",
      "generative-agentic-ai",
      "third-party-vendors"
    ],
    "faq": [
      {
        "q": "Is the NIST AI RMF mandatory for banks?",
        "a": "No. It is a voluntary framework. But it is the reference most US banks use to structure AI governance, and examiners increasingly expect to see something equivalent for generative and agentic AI that the 2026 model-risk guidance does not cover."
      },
      {
        "q": "What are the four functions of the NIST AI RMF?",
        "a": "Govern, Map, Measure and Manage. Govern is cross-cutting culture and accountability; Map establishes context and identifies risks; Measure analyzes and tracks them; Manage prioritizes and acts on them."
      },
      {
        "q": "Is the AI RMF being updated?",
        "a": "Yes. NIST states that AI RMF 1.0 is being revised as part of the White House AI Action Plan of July 2025; no revised draft had been published as of August 2026. The Playbook will be updated after the revision."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "nist-ai-rmf-playbook",
    "authority": "nist",
    "shortName": "NIST AI RMF Playbook",
    "title": "AI Risk Management Framework Playbook",
    "aliases": [
      "AI RMF Playbook",
      "NIST AI RMF Playbook",
      "NIST Playbook"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2023-01-26",
    "effectiveDate": "2023-01-26",
    "link": "https://airc.nist.gov/airmf-resources/playbook/",
    "appliesTo": "Voluntary companion to the AI RMF for any organization implementing it; commonly used by bank AI governance and model-risk teams to build control inventories.",
    "answerFirst": "The AI RMF Playbook is NIST's companion to AI RMF 1.0, released alongside the framework on January 26, 2023 and hosted at the NIST AI Resource Center. It lists suggested actions, transparency and documentation practices, and references for every subcategory of the Govern, Map, Measure and Manage functions, and is downloadable as PDF, CSV, Excel and JSON. NIST stresses it is 'neither a checklist nor a set of steps to be followed in its entirety', and says it will be updated after the AI RMF revision now under way.",
    "keyPoints": [
      "Organized by the AI RMF Core: for each subcategory it offers suggested actions, transparency and documentation guidance, and references.",
      "Available in machine-readable formats (CSV, Excel, JSON) as well as PDF, which lets banks load it directly into GRC tools to build AI control libraries.",
      "Explicitly non-prescriptive: organizations select the actions relevant to their industry and use case rather than implementing all of them.",
      "NIST updates the Playbook roughly twice a year and states it will be revised after the AI RMF 1.0 revision under the White House AI Action Plan.",
      "Sits with other AI RMF resources at the NIST AI Resource Center: the Roadmap, crosswalks to ISO/IEC 42001 and other standards, and use-case profiles."
    ],
    "whatChanged": "The Playbook turned the abstract Core of the AI RMF into concrete, inventory-able actions. For banks this is the layer that maps most directly onto existing three-lines-of-defense control frameworks: model-risk and technology-risk teams generally build their AI control libraries from the Playbook's subcategory actions and then evidence them to internal audit and examiners.",
    "useCases": [
      "governance-general",
      "model-risk",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "Is the NIST AI RMF Playbook a checklist?",
        "a": "No. NIST states it is neither a checklist nor a set of steps to be followed in its entirety; organizations pick the suggested actions relevant to their context."
      },
      {
        "q": "Where can I download the AI RMF Playbook?",
        "a": "From the NIST AI Resource Center at airc.nist.gov, in PDF, CSV, Excel and JSON formats."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "nist-ai-600-1",
    "authority": "nist",
    "shortName": "NIST AI 600-1 (Generative AI Profile)",
    "title": "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1)",
    "aliases": [
      "NIST AI 600-1",
      "Generative AI Profile",
      "GenAI Profile",
      "AI RMF Generative AI Profile"
    ],
    "docType": "Framework",
    "status": "In force",
    "date": "2024-07-26",
    "effectiveDate": "2024-07-26",
    "link": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf",
    "appliesTo": "Voluntary; organizations developing or deploying generative AI. Used by banks for chatbots, coding assistants, document summarization and other LLM use cases.",
    "answerFirst": "NIST AI 600-1, the Generative AI Profile of the AI RMF, was published on July 26, 2024 as a companion to AI RMF 1.0. It identifies twelve risks unique to or exacerbated by generative AI — including confabulation, data privacy, information integrity, information security, intellectual property, harmful bias and homogenization, and value chain and component integration — and lists more than 200 suggested actions mapped to AI RMF subcategories. It was one of the deliverables under Executive Order 14110 (October 2023), which has since been revoked, but the profile remains published and in use.",
    "keyPoints": [
      "Published July 26, 2024, 270 days after Executive Order 14110; part of a package that also included the dual-use foundation model guidance and a secure software development profile for generative AI.",
      "Enumerates twelve generative-AI risk categories: CBRN information or capabilities; confabulation; dangerous, violent or hateful content; data privacy; environmental impacts; harmful bias and homogenization; human-AI configuration; information integrity; information security; intellectual property; obscene, degrading or abusive content; and value chain and component integration.",
      "Provides a table of suggested actions, each tied to an AI RMF subcategory (e.g., Govern 1.2, Measure 2.7) and tagged to the risks it addresses, plus the AI actor tasks involved.",
      "Information-security risks include prompt injection, data poisoning and model extraction; confabulation covers false or fabricated outputs presented confidently.",
      "Emphasizes third-party and value-chain risk — relevant to banks that consume foundation models through vendors and cloud providers rather than building them."
    ],
    "whatChanged": "The profile gave banks a vocabulary for generative-AI risks that model-risk guidance did not name, and a ready-made control set for LLM deployments. When the April 2026 interagency model-risk revision explicitly excluded generative and agentic AI, AI 600-1 became the closest thing to a standard control catalogue US banks can cite for customer chatbots and internal LLM tooling.",
    "useCases": [
      "generative-agentic-ai",
      "customer-chatbots",
      "cybersecurity",
      "third-party-vendors",
      "data-privacy"
    ],
    "faq": [
      {
        "q": "What risks does NIST AI 600-1 cover?",
        "a": "Twelve categories specific to generative AI, including confabulation (hallucination), data privacy, information security (prompt injection, data poisoning), intellectual property, harmful bias and homogenization, human-AI configuration, and value chain and component integration."
      },
      {
        "q": "Is the Generative AI Profile still valid after Executive Order 14110 was revoked?",
        "a": "Yes. The profile was produced under EO 14110 but is a standing NIST publication; it remains available and is widely used by banks, though NIST has said the underlying AI RMF is being revised under the 2025 AI Action Plan."
      },
      {
        "q": "Does a bank need AI 600-1 if it only uses vendor LLMs?",
        "a": "The profile is explicitly written for deployers as well as developers, and its value-chain and component-integration risk category addresses exactly the vendor-supplied model scenario most banks are in."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "nist-ai-100-2e2025",
    "warning": true,
    "authority": "nist",
    "shortName": "NIST AI 100-2e2025 (Adversarial ML)",
    "title": "Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations (NIST AI 100-2e2025)",
    "aliases": [
      "NIST AI 100-2",
      "AI 100-2e2025",
      "Adversarial Machine Learning taxonomy",
      "NIST AML taxonomy"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2025-03-24",
    "link": "https://csrc.nist.gov/pubs/ai/100/2/e2025/final",
    "appliesTo": "Voluntary reference for security, model-risk and fraud teams responsible for predictive and generative AI systems.",
    "answerFirst": "NIST AI 100-2e2025, finalized on March 24, 2025, is NIST's taxonomy and terminology of adversarial machine learning attacks and mitigations, updating the January 2024 edition (AI 100-2e2023). It covers attacks on both predictive AI (evasion, poisoning, privacy attacks) and generative AI (supply-chain attacks, direct and indirect prompt injection, misuse), organized by attacker goals, capabilities and knowledge, and includes a glossary intended to inform future security standards and practice guides.",
    "keyPoints": [
      "Authored by NIST's Computer Security Division with Northeastern University, Cisco, the UK AI Security Institute and the US AI Safety Institute.",
      "Predictive AI taxonomy: evasion, poisoning (data and model) and privacy attacks (membership inference, data reconstruction, model extraction), with mitigations for each.",
      "Generative AI taxonomy: AI supply-chain attacks, direct prompting attacks including jailbreaks, indirect prompt injection via retrieved or tool content, and misuse enablement; the 2025 edition adds agent- and RAG-related attack vectors.",
      "Classifies attacks by learning stage (training vs. deployment), attacker knowledge (white-box, gray-box, black-box) and objective (availability, integrity, privacy, misuse).",
      "Is a reference document, not a control standard; NIST positions it to underpin later security guidance such as the COSAiS control overlays and the Cyber AI Profile."
    ],
    "whatChanged": "The taxonomy gives bank security and model-validation teams a shared, citable vocabulary for threats to fraud models, credit models and LLM applications — prompt injection, data poisoning and model extraction — that existing model-risk guidance never named. It is the reference most bank threat models for AI now cite, and the basis for the AI-security work NIST is building on it.",
    "useCases": [
      "cybersecurity",
      "fraud",
      "generative-agentic-ai",
      "model-risk"
    ],
    "faq": [
      {
        "q": "What is NIST AI 100-2?",
        "a": "NIST's taxonomy of adversarial machine learning: a structured catalogue of attacks on predictive and generative AI systems (evasion, poisoning, privacy attacks, prompt injection, supply-chain attacks) and corresponding mitigations, latest edition March 2025."
      },
      {
        "q": "Does NIST AI 100-2 cover prompt injection?",
        "a": "Yes. The generative-AI section covers direct prompting attacks such as jailbreaks and indirect prompt injection delivered through documents, web content or tool outputs, and discusses mitigations."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "nist-cosais-control-overlays",
    "authority": "nist",
    "shortName": "NIST COSAiS control overlays",
    "title": "Control Overlays for Securing AI Systems (COSAiS): SP 800-53 overlays for generative, predictive and agentic AI",
    "aliases": [
      "COSAiS",
      "Control Overlays for Securing AI Systems",
      "SP 800-53 AI overlays",
      "NIST AI control overlays"
    ],
    "docType": "Consultation",
    "status": "Proposed",
    "date": "2025-08-14",
    "link": "https://csrc.nist.gov/projects/cosais",
    "appliesTo": "Voluntary; organizations that use NIST SP 800-53 controls, including banks and their cloud and AI vendors subject to FedRAMP-style control baselines.",
    "answerFirst": "COSAiS is a NIST Computer Security Division project, created in July 2025, to write SP 800-53 control overlays for five AI use cases: adapting and using generative AI (assistants/LLMs), using and fine-tuning predictive AI, single-agent AI systems, multi-agent AI systems, and security controls for AI developers. A concept paper was released for comment on August 14, 2025, and an annotated outline for the predictive-AI overlay was posted on January 8, 2026 with initial feedback requested by February 13, 2026. No overlay had been finalized as of August 2026.",
    "keyPoints": [
      "Overlays tailor the SP 800-53 Rev. 5 control catalogue to a specific technology, so organizations already assessed against 800-53 can extend existing control baselines to AI rather than adopting a new standard.",
      "Five planned overlays: generative AI assistant/LLM use; predictive AI use and fine-tuning; single-agent systems; multi-agent systems; and controls for AI developers.",
      "Concept paper released August 14, 2025; predictive-AI annotated outline released January 8, 2026 (feedback by February 13, 2026); the agent overlays are the least mature.",
      "NIST runs the project through a public Slack community and mailing list and expects to release discussion drafts use case by use case.",
      "Complements the AI RMF (governance), AI 100-2 (threat taxonomy) and IR 8596 (CSF profile) by supplying control-level detail."
    ],
    "whatChanged": "COSAiS is the first NIST effort to specify AI security at the control level, which is what third-party risk and audit teams actually test. Once published, the overlays are likely to become the baseline banks require of AI vendors in contracts and the reference examiners use when asking how an LLM or agent deployment is secured; the single- and multi-agent overlays are the most relevant to the agentic-AI gap left by the 2026 model-risk guidance.",
    "useCases": [
      "cybersecurity",
      "generative-agentic-ai",
      "third-party-vendors",
      "governance-general"
    ],
    "faq": [
      {
        "q": "What is NIST COSAiS?",
        "a": "Control Overlays for Securing AI Systems: a NIST project, started July 2025, to produce SP 800-53 control overlays for generative AI, predictive AI, single-agent and multi-agent AI systems, and AI developers. It is still in draft."
      },
      {
        "q": "Are the COSAiS overlays finished?",
        "a": "No. As of August 2026 NIST had released a concept paper (August 2025) and an annotated outline for the predictive-AI overlay (January 2026); the agent overlays remain under development."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "nist-ir-8596",
    "authority": "nist",
    "shortName": "NIST IR 8596 (Cyber AI Profile)",
    "title": "Cybersecurity Framework Profile for Artificial Intelligence (Cyber AI Profile), NIST IR 8596 — preliminary draft",
    "aliases": [
      "NIST IR 8596",
      "NISTIR 8596",
      "Cyber AI Profile",
      "Cybersecurity Framework Profile for AI"
    ],
    "docType": "Consultation",
    "status": "Proposed",
    "date": "2025-12-16",
    "commentDeadline": "2026-01-30",
    "link": "https://csrc.nist.gov/pubs/ir/8596/iprd",
    "appliesTo": "Voluntary; organizations that use the NIST Cybersecurity Framework 2.0 and develop, deploy or defend against AI. Directly relevant to bank CISOs whose programs are CSF-aligned.",
    "answerFirst": "NIST released the preliminary draft of NIST IR 8596, the Cybersecurity Framework Profile for Artificial Intelligence ('Cyber AI Profile'), on December 16, 2025, with comments due January 30, 2026. It applies the CSF 2.0 structure to three focus areas: securing AI system components (Secure), conducting AI-enabled cyber defense (Defend), and thwarting AI-enabled cyberattacks (Thwart). NIST said comments would inform an initial public draft expected in 2026; as of August 2026 that draft had not been published.",
    "keyPoints": [
      "Preliminary draft published December 16, 2025 by NIST's Computer Security Division; 45-day comment period closed January 30, 2026.",
      "Built on Cybersecurity Framework 2.0 (February 2024): for each CSF subcategory it explains what changes when the organization is securing AI, using AI for defense, or facing AI-enabled attackers.",
      "Three focus areas: Secure (AI components, data, models, pipelines), Defend (AI in SOC and detection workflows), Thwart (AI-augmented phishing, deepfakes, automated exploitation).",
      "Intended to be used with the AI RMF, AI 100-2 adversarial ML taxonomy and SP 800-53 controls rather than replace them.",
      "Next step is an initial public draft incorporating the preliminary-draft comments, then a final version."
    ],
    "whatChanged": "For banks whose security programs are already mapped to CSF 2.0 — which examiners and the FFIEC cybersecurity tooling encourage — the Cyber AI Profile is the most direct route to extending existing control mapping to AI systems without adopting a new framework. It also formalizes the 'Thwart' angle: AI-enabled fraud and social engineering as a cybersecurity-program concern, not only a fraud-team concern.",
    "useCases": [
      "cybersecurity",
      "fraud",
      "generative-agentic-ai",
      "governance-general"
    ],
    "faq": [
      {
        "q": "What is the NIST Cyber AI Profile?",
        "a": "A draft profile (NIST IR 8596) applying Cybersecurity Framework 2.0 to AI: securing AI systems, using AI for cyber defense, and defending against AI-enabled attacks. The preliminary draft was released December 16, 2025; comments closed January 30, 2026."
      },
      {
        "q": "Is NIST IR 8596 final?",
        "a": "No. As of August 2026 only the preliminary draft has been published. NIST has said an initial public draft will follow, then a final version."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "nist-caisi-rfi-ai-agent-security-2026",
    "authority": "nist",
    "shortName": "CAISI RFI on AI agent security (2026)",
    "title": "Request for Information: Security Considerations for Artificial Intelligence Agents",
    "aliases": [
      "AI agent security RFI",
      "Security Considerations for Artificial Intelligence Agents",
      "NIST-2025-0035",
      "CAISI agent RFI"
    ],
    "docType": "Consultation",
    "status": "Proposed",
    "date": "2026-01-12",
    "commentDeadline": "2026-03-09",
    "link": "https://www.federalregister.gov/documents/2026/01/13/2026-00206/request-for-information-security-considerations-for-artificial-intelligence-agents",
    "appliesTo": "Public RFI; input sought from AI developers, deployers and security researchers. Informs forthcoming NIST/CAISI agent-security guidance relevant to any bank deploying agentic AI.",
    "answerFirst": "On January 12, 2026 NIST's Center for AI Standards and Innovation (CAISI) issued a Request for Information on security considerations for AI agents — systems that plan and take autonomous actions affecting real-world systems — with comments due March 9, 2026 (docket NIST-2025-0035). It asked about adversarial threats such as indirect prompt injection, data poisoning and insecure deployment, misaligned behavior such as specification gaming, measurement approaches for agent security, and safeguards for constraining and monitoring agent access in production.",
    "keyPoints": [
      "Issued January 12, 2026; Federal Register notice 2026-00206; comments closed March 9, 2026.",
      "Defines the scope as AI agents that combine model outputs with software functionality to plan and act autonomously.",
      "Topic areas: adversarial threats (indirect prompt injection), model vulnerabilities (poisoning, insecure deployment), misaligned behavior (specification gaming, unintended harmful actions), measurement and evaluation, and deployment safeguards (constraining and monitoring access).",
      "Feeds CAISI's AI Agent Standards Initiative launched February 17, 2026, which also includes an NCCoE concept paper on software and AI agent identity and authorization and sector listening sessions naming financial services.",
      "No guidance document had been published from the RFI as of August 2026."
    ],
    "whatChanged": "The RFI is the first formal US federal fact-finding specifically on securing AI agents and signals what NIST guidance will cover: agent identity and authorization, least-privilege tool access, monitoring and kill-switches, and prompt-injection defenses. Banks piloting agents for operations, servicing or coding can use its topic list as a preview of the control expectations examiners are likely to import.",
    "useCases": [
      "generative-agentic-ai",
      "cybersecurity",
      "governance-general"
    ],
    "faq": [
      {
        "q": "What did NIST's 2026 AI agent security RFI ask about?",
        "a": "Threats to AI agents (indirect prompt injection, data poisoning, insecure deployment), misaligned agent behavior, ways to measure agent security, and safeguards for constraining and monitoring agents in production. Comments closed March 9, 2026."
      },
      {
        "q": "What is CAISI?",
        "a": "The Center for AI Standards and Innovation within NIST, renamed from the US AI Safety Institute in 2025. It leads NIST's AI agent standards work, including the January 2026 security RFI and the February 2026 AI Agent Standards Initiative."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "nist-ai-rmf-critical-infrastructure-profile-concept-note",
    "authority": "nist",
    "shortName": "AI RMF critical-infrastructure profile (concept note)",
    "title": "Concept Note: AI RMF Profile on Trustworthy AI in Critical Infrastructure",
    "aliases": [
      "Trustworthy AI in Critical Infrastructure profile",
      "AI RMF critical infrastructure profile",
      "critical infrastructure AI profile"
    ],
    "docType": "Consultation",
    "status": "Proposed",
    "date": "2026-04-07",
    "link": "https://www.nist.gov/programs-projects/concept-note-ai-rmf-profile-trustworthy-ai-critical-infrastructure",
    "appliesTo": "Voluntary; operators of critical infrastructure. Financial services is a designated US critical-infrastructure sector, so banks are in scope of the eventual profile.",
    "answerFirst": "On April 7, 2026 NIST released a concept note for an AI RMF Profile on Trustworthy AI in Critical Infrastructure, the first new AI RMF profile since the 2024 Generative AI Profile. The profile is meant to guide critical-infrastructure operators toward specific risk-management practices when adopting AI-enabled capabilities and to help them communicate trustworthiness requirements to developers and suppliers. NIST is developing it through a community of interest (mailing list and Slack) rather than a fixed comment deadline, and no draft profile had been released as of August 2026.",
    "keyPoints": [
      "Concept note published April 7, 2026; project page last updated July 17, 2026.",
      "Goal: sector-neutral practices for AI in critical infrastructure, expressed as an AI RMF profile so operators can map to Govern/Map/Measure/Manage.",
      "Emphasizes communicating trustworthiness requirements across AI and infrastructure lifecycles and supply chains — i.e., pushing requirements to vendors.",
      "Input invited from industry, regulators, policymakers and academia through an open community of interest; discussion drafts to follow.",
      "Financial services is one of the sixteen US critical-infrastructure sectors, though the concept note does not single it out."
    ],
    "whatChanged": "This is the first AI RMF profile aimed at operators rather than at a technology, and it is the vehicle most likely to carry sector-level expectations for banks. Because it is being written to help operators pass requirements to suppliers, it will likely inform what banks demand of AI vendors under third-party risk programs.",
    "useCases": [
      "governance-general",
      "third-party-vendors",
      "cybersecurity"
    ],
    "faq": [
      {
        "q": "Does the NIST critical-infrastructure AI profile apply to banks?",
        "a": "Financial services is a US critical-infrastructure sector, so banks are within the intended audience, but the profile is voluntary and only a concept note (April 7, 2026) exists so far."
      },
      {
        "q": "When will the critical-infrastructure AI RMF profile be published?",
        "a": "NIST has not given a date. It released a concept note on April 7, 2026 and is developing discussion drafts through a community of interest."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "eu-gdpr-article-22-automated-decision-making",
    "authority": "eu-ai-act",
    "shortName": "GDPR Article 22",
    "title": "Regulation (EU) 2016/679 (GDPR), Article 22 — Automated individual decision-making, including profiling",
    "aliases": [
      "GDPR Article 22",
      "Article 22 GDPR",
      "Regulation (EU) 2016/679",
      "automated individual decision-making"
    ],
    "docType": "Statute",
    "status": "In force",
    "date": "2016-05-04",
    "effectiveDate": "2018-05-25",
    "link": "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
    "appliesTo": "Any controller processing personal data of individuals in the EU, including banks making automated credit decisions",
    "answerFirst": "Article 22 of the General Data Protection Regulation (Regulation (EU) 2016/679, applicable since May 25, 2018) gives individuals the right not to be subject to a decision based solely on automated processing, including profiling, that produces legal or similarly significant effects — with automated credit refusal the textbook example. Such decisions are allowed only where necessary for a contract, authorised by EU or member-state law, or based on explicit consent, and then only with safeguards including the right to obtain human intervention, express a view and contest the decision. Articles 13–15 add a duty to provide meaningful information about the logic involved.",
    "keyPoints": [
      "Art. 22(1): right not to be subject to a solely automated decision with legal or similarly significant effects; Recital 71 names automatic refusal of an online credit application.",
      "Art. 22(2) exceptions: necessary for entering or performing a contract, authorised by law with suitable safeguards, or explicit consent.",
      "Art. 22(3) safeguards: at least the right to human intervention, to express one's point of view and to contest the decision.",
      "Art. 22(4): decisions may not be based on special-category data (e.g., health, ethnicity) unless Art. 9(2)(a) or (g) applies with safeguards.",
      "Arts. 13(2)(f), 14(2)(g), 15(1)(h): duty to disclose the existence of automated decision-making and meaningful information about the logic, significance and envisaged consequences.",
      "CJEU, SCHUFA (C-634/21, December 7, 2023): a credit-bureau score is itself an Art. 22 'decision' where a lender draws strongly on it — extending the regime to scoring vendors.",
      "Fines up to €20M or 4% of worldwide annual turnover (Art. 83(5))."
    ],
    "whatChanged": "Article 22 was the EU's operative rule on algorithmic credit decisions for six years before the AI Act and remains fully in force alongside it: the AI Act governs how a high-risk system is built and monitored, while Article 22 governs whether and how a bank may rely on it for an individual decision. The SCHUFA judgment pulled scoring providers into scope, and the Digital Omnibus on AI also clarified the AI Act–GDPR interface.",
    "useCases": [
      "credit-underwriting",
      "data-privacy",
      "fair-lending",
      "customer-chatbots"
    ],
    "faq": [
      {
        "q": "Does GDPR Article 22 ban automated credit decisions?",
        "a": "No. It restricts solely automated decisions with significant effects to three lawful gateways — contractual necessity, legal authorisation or explicit consent — and requires safeguards such as human intervention and the right to contest. Most bank credit decisions rely on contractual necessity."
      },
      {
        "q": "How does GDPR Article 22 interact with the EU AI Act for credit scoring?",
        "a": "They stack. The AI Act's Annex III 5(b) regime covers the system's design, data, documentation and oversight; Article 22 covers the individual's rights when a decision is automated. Compliance with one does not satisfy the other."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "eu-consumer-credit-directive-2023-2225",
    "authority": "eu-ai-act",
    "shortName": "Consumer Credit Directive (EU) 2023/2225",
    "title": "Directive (EU) 2023/2225 on credit agreements for consumers (CCD2) — automated creditworthiness assessment provisions",
    "aliases": [
      "Directive (EU) 2023/2225",
      "Consumer Credit Directive 2023/2225",
      "new Consumer Credit Directive"
    ],
    "docType": "Statute",
    "status": "Final",
    "date": "2023-10-30",
    "effectiveDate": "2026-11-20",
    "link": "https://eur-lex.europa.eu/eli/dir/2023/2225/oj",
    "appliesTo": "Creditors and credit intermediaries offering consumer credit in the EU, as transposed by member states",
    "answerFirst": "Directive (EU) 2023/2225, the recast Consumer Credit Directive, was published in the Official Journal on October 30, 2023; member states had to transpose it by November 20, 2025 and its rules apply from November 20, 2026. Article 18 requires a thorough creditworthiness assessment and, where that assessment involves automated processing of personal data, gives the consumer the right to request and obtain human intervention from the creditor, a clear explanation of the assessment and of the logic and risks of the automated processing, and a review of the decision. Its recitals expressly tie this to the AI Act's classification of credit scoring as high-risk.",
    "keyPoints": [
      "Art. 18: creditworthiness assessment must be based on relevant, sufficient and proportionate information on income, expenses and financial circumstances; credit granted only if the assessment indicates the obligations are likely to be met.",
      "Art. 18(8): where automated processing is used, the consumer may request human intervention, obtain a clear and comprehensible explanation of the assessment including the logic and risks of the automated processing, express a view and request a review.",
      "Art. 18(6): consumers must be informed when a refusal is based on automated processing; special-category data such as health or social-media data cannot be used for the assessment.",
      "Art. 6: no discrimination based on nationality, residence or Charter grounds when granting credit; Art. 8 bans unsolicited credit sales.",
      "Scope widened to buy-now-pay-later, loans under €200 and interest-free credit; caps on charges to be set nationally (Art. 31).",
      "Transposition deadline November 20, 2025; application from November 20, 2026 (Art. 48); repeals Directive 2008/48/EC."
    ],
    "whatChanged": "CCD2 is the first EU consumer-credit law drafted with AI scoring in mind: it converts GDPR-style rights into explicit lending-law duties — explanation of the logic, human review on request, a ban on social-media and health data — enforced by consumer and financial regulators rather than only data-protection authorities. It applies from November 20, 2026, a year before the AI Act's Annex III regime, so it is the nearer compliance date for EU retail lenders.",
    "useCases": [
      "credit-underwriting",
      "fair-lending",
      "data-privacy"
    ],
    "faq": [
      {
        "q": "When does the new Consumer Credit Directive apply?",
        "a": "Member states had to transpose Directive (EU) 2023/2225 by November 20, 2025, and its measures apply from November 20, 2026."
      },
      {
        "q": "What must a lender do if it uses AI to assess creditworthiness under CCD2?",
        "a": "Under Article 18 the consumer has the right to request human intervention, receive a clear and comprehensible explanation of the automated assessment including its logic and risks, express their point of view and obtain a review of the decision — and must be told when a refusal was based on automated processing."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "eu-ai-act-regulation-2024-1689",
    "authority": "eu-ai-act",
    "shortName": "Regulation (EU) 2024/1689",
    "title": "Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)",
    "aliases": [
      "Regulation (EU) 2024/1689",
      "EU AI Act",
      "Artificial Intelligence Act",
      "AI Act Annex III"
    ],
    "docType": "Regulation",
    "status": "In force",
    "date": "2024-07-12",
    "effectiveDate": "2024-08-01",
    "link": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
    "appliesTo": "Providers and deployers of AI systems placed on the market or used in the EU, including banks, lenders, insurers and fintechs, and non-EU firms whose AI outputs are used in the EU",
    "answerFirst": "Regulation (EU) 2024/1689, the EU AI Act, was published in the Official Journal on July 12, 2024 and entered into force on August 1, 2024. It is a risk-based horizontal law: it bans a list of unacceptable practices (Article 5), imposes a full compliance regime on high-risk systems (Articles 8–27 and Annex III), sets transparency duties (Article 50) and regulates general-purpose AI models (Chapter V). For banks the key provision is Annex III, point 5(b): AI used to evaluate the creditworthiness of natural persons or establish their credit score is high-risk, except systems used solely to detect financial fraud. Following the 2026 Digital Omnibus amendment, stand-alone Annex III obligations apply from December 2, 2027.",
    "keyPoints": [
      "Annex III 5(b) lists credit scoring and creditworthiness evaluation of natural persons as high-risk; 5(c) covers risk assessment and pricing in life and health insurance; a carve-out applies to AI used solely to detect financial fraud.",
      "High-risk providers must implement a risk-management system (Art. 9), data governance (Art. 10), technical documentation (Art. 11), automatic logging (Art. 12), transparency to deployers (Art. 13), human oversight (Art. 14), accuracy/robustness/cybersecurity (Art. 15) and a quality-management system (Art. 17).",
      "Deployers — the role most banks occupy when they buy or configure models — must use systems per instructions, ensure human oversight, monitor operation, keep logs for at least six months, and (for Annex III credit/insurance uses) complete a fundamental-rights impact assessment (Art. 26–27).",
      "Financial-sector conformity: for credit institutions regulated under CRD, several AI Act quality-management and monitoring duties are deemed met through existing internal-governance rules, and the financial supervisor acts as market-surveillance authority (Art. 74(6)).",
      "Staged application: prohibited practices and AI literacy from Feb 2, 2025; GPAI rules from Aug 2, 2025; transparency (Art. 50) from Aug 2, 2026; stand-alone high-risk from Dec 2, 2027 and product-embedded high-risk from Aug 2, 2028 (as amended by Regulation (EU) 2026/1744).",
      "Penalties (Art. 99): up to €35M or 7% of worldwide turnover for prohibited practices; up to €15M or 3% for most other obligations including high-risk requirements; up to €7.5M or 1% for supplying incorrect information.",
      "Extraterritorial reach: applies to providers and deployers outside the EU where the AI system's output is used in the EU (Art. 2(1)(c))."
    ],
    "whatChanged": "Before the AI Act, EU banks' use of ML was governed indirectly — through GDPR Article 22, consumer-credit rules and prudential model-governance expectations. The AI Act makes credit-scoring AI a regulated product category with documented risk management, data-quality, logging and human-oversight requirements, and puts financial supervisors in charge of enforcing them. For US banks it matters because any credit or insurance model whose outputs are used in the EU is in scope regardless of where it runs.",
    "useCases": [
      "credit-underwriting",
      "fair-lending",
      "model-risk",
      "generative-agentic-ai",
      "third-party-vendors",
      "governance-general",
      "fraud"
    ],
    "faq": [
      {
        "q": "Which bank AI uses are high-risk under the EU AI Act?",
        "a": "Annex III lists credit scoring or creditworthiness evaluation of natural persons (point 5(b)) and risk assessment and pricing for life and health insurance (5(c)). Fraud detection is expressly carved out of 5(b), and employment-related AI (Annex III point 4) catches HR uses inside banks."
      },
      {
        "q": "Is the bank a provider or a deployer under the AI Act?",
        "a": "A bank that uses a vendor's credit-scoring system as intended is a deployer. It becomes a provider — with the full high-risk regime — if it develops the system itself, puts its own name on it, or substantially modifies a vendor system or its intended purpose (Art. 25)."
      },
      {
        "q": "Who enforces the AI Act against banks?",
        "a": "For AI systems used by financial institutions regulated under EU financial-services law, Article 74(6) designates the national financial supervisor as the market-surveillance authority, coordinated by the EBA and the Commission's AI Office."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "eu-commission-guidelines-prohibited-ai-practices-2025",
    "authority": "eu-ai-act",
    "shortName": "Commission guidelines on prohibited AI practices",
    "title": "Commission Guidelines on prohibited artificial intelligence practices established by Regulation (EU) 2024/1689 (AI Act)",
    "aliases": [
      "guidelines on prohibited AI practices",
      "Article 5 guidelines",
      "prohibited practices guidelines"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2025-02-04",
    "effectiveDate": "2025-02-04",
    "link": "https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-prohibited-artificial-intelligence-ai-practices-defined-ai-act",
    "appliesTo": "All providers and deployers of AI systems in the EU, including banks",
    "answerFirst": "On February 4, 2025 — two days after the Article 5 prohibitions began applying — the European Commission published non-binding guidelines interpreting the AI Act's prohibited practices, including harmful manipulation, exploitation of vulnerabilities, social scoring, individual crime prediction, untargeted facial-image scraping, emotion recognition in workplaces and real-time remote biometric identification. Authoritative interpretation is reserved to the Court of Justice of the EU. For banks the relevant lines are the social-scoring ban and the ban on exploiting vulnerabilities such as age or economic situation to cause significant harm.",
    "keyPoints": [
      "Covers each Article 5(1) prohibition with legal analysis and practical examples; explicitly non-binding, with final interpretation reserved for the CJEU.",
      "Social scoring (Art. 5(1)(c)) is prohibited where AI evaluates people based on social behaviour or personal characteristics and produces detrimental treatment in unrelated contexts or disproportionate to the behaviour; creditworthiness assessment using legitimate financial data is not per se social scoring.",
      "Exploitation of vulnerabilities (Art. 5(1)(b)) — age, disability, or a specific social or economic situation — is prohibited where it materially distorts behaviour and causes significant harm, a risk area for AI-driven marketing of credit products.",
      "Manipulative or deceptive techniques (Art. 5(1)(a)) capture subliminal or purposefully deceptive AI design, relevant to customer-facing chatbots and nudging.",
      "Prohibitions applied from February 2, 2025; violations carry the top penalty tier of up to €35M or 7% of worldwide turnover.",
      "Emotion recognition in the workplace is banned except for medical or safety reasons — relevant to employee-monitoring tools in banks."
    ],
    "whatChanged": "The guidelines are the first Commission statement of how Article 5 will be read, letting banks screen customer-facing and marketing AI against the bans with concrete examples rather than statutory text alone. They confirm that ordinary credit scoring is not social scoring, while flagging vulnerability exploitation and manipulative design as the live risks in retail finance.",
    "useCases": [
      "customer-chatbots",
      "fair-lending",
      "credit-underwriting",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Is credit scoring social scoring under the EU AI Act?",
        "a": "Not in itself. Social scoring under Article 5(1)(c) requires evaluating people on social behaviour or personal characteristics with detrimental treatment unrelated to the original context or disproportionate to it. Credit assessment on legitimate financial data is instead regulated as high-risk under Annex III 5(b)."
      },
      {
        "q": "Are the Commission's prohibited-practices guidelines legally binding?",
        "a": "No. They set out the Commission's interpretation and will guide enforcement, but only the Court of Justice of the EU can give an authoritative interpretation."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "eu-gpai-code-of-practice-2025",
    "authority": "eu-ai-act",
    "shortName": "General-Purpose AI Code of Practice",
    "title": "General-Purpose AI Code of Practice under the AI Act (Transparency, Copyright, and Safety and Security chapters)",
    "aliases": [
      "GPAI Code of Practice",
      "General-Purpose AI Code of Practice",
      "AI Act code of practice"
    ],
    "docType": "Framework",
    "status": "In force",
    "date": "2025-07-10",
    "effectiveDate": "2025-08-02",
    "link": "https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai",
    "appliesTo": "Providers of general-purpose AI models placed on the EU market; indirectly, banks that build on those models through vendors",
    "answerFirst": "The General-Purpose AI Code of Practice was published by the European Commission on July 10, 2025 as a voluntary tool for GPAI model providers to demonstrate compliance with Articles 53 and 55 of the AI Act, which applied from August 2, 2025. It has three chapters — Transparency (with a Model Documentation Form), Copyright, and Safety and Security for models with systemic risk — and was confirmed as adequate by the Commission and the AI Board. Signatories include Anthropic, Google, Microsoft and OpenAI; xAI signed only the Safety and Security chapter.",
    "keyPoints": [
      "Transparency chapter: a standard Model Documentation Form providers must complete and share with downstream providers and, on request, the AI Office.",
      "Copyright chapter: commitments on EU copyright compliance, including respecting machine-readable opt-outs when crawling training data.",
      "Safety and Security chapter: applies only to GPAI models with systemic risk (Art. 55), covering risk assessment, incident reporting and cybersecurity.",
      "Adherence gives providers a presumption-of-good-faith route and lower administrative burden; non-signatories must demonstrate compliance by other means.",
      "GPAI obligations applied from August 2, 2025; the Commission's enforcement powers over GPAI providers begin August 2, 2026.",
      "Banks are typically downstream deployers: the Code determines what documentation they can expect to receive from foundation-model vendors for their own third-party and model-risk records."
    ],
    "whatChanged": "For banks, the Code standardises what foundation-model vendors will disclose — capabilities, limitations, training-data summaries, evaluation results — which becomes the evidentiary base for vendor due diligence and model-risk documentation of generative-AI use cases. It does not impose direct duties on banks unless they fine-tune a model so substantially that they become a GPAI provider.",
    "useCases": [
      "generative-agentic-ai",
      "third-party-vendors",
      "model-risk"
    ],
    "faq": [
      {
        "q": "Does the GPAI Code of Practice apply to banks?",
        "a": "Only if a bank itself places a general-purpose AI model on the EU market. Banks using vendor models are downstream deployers; the Code matters to them as the source of standardised model documentation from providers."
      },
      {
        "q": "Which companies signed the GPAI Code of Practice?",
        "a": "Around two dozen providers including Anthropic, Google, Microsoft and OpenAI signed all chapters; xAI signed the Safety and Security chapter only."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "eba-ai-act-factsheet-banking-payments-2025",
    "authority": "eu-ai-act",
    "shortName": "EBA factsheet on the AI Act",
    "title": "AI Act: implications for the EU banking and payments sector (EBA factsheet)",
    "aliases": [
      "EBA AI Act factsheet",
      "AI Act implications for the EU banking and payments sector",
      "EBA factsheet on the AI Act"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2025-11-21",
    "link": "https://www.eba.europa.eu/sites/default/files/2025-11/d8b999ce-a1d9-4964-9606-971bbc2aaf89/AI%20Act%20implications%20for%20the%20EU%20banking%20sector.pdf",
    "appliesTo": "EU credit institutions, payment institutions and their national competent authorities",
    "answerFirst": "On November 21, 2025 the European Banking Authority published a factsheet mapping the AI Act onto EU banking and payments legislation. Its headline findings: no significant contradictions between the AI Act and the Capital Requirements Regulation, Consumer Credit Directive, Mortgage Credit Directive or PSD2; the AI Act is complementary to a sector framework that already manages model, conduct and operational risk; and no immediate need to issue new or revise existing EBA guidelines. The EBA committed to promoting a common supervisory approach across financial supervisors and market-surveillance authorities in 2026–27.",
    "keyPoints": [
      "Maps AI Act obligations against CRR/CRD, CCD, MCD, PSD2 and DORA, concluding the regimes are complementary rather than conflicting.",
      "Identifies credit scoring and creditworthiness assessment as the principal Annex III high-risk use in banking, noting the fraud-detection carve-out.",
      "Confirms that financial supervisors act as market-surveillance authorities for AI systems used by regulated financial entities.",
      "Finds no immediate need for new EBA guidelines; existing internal-governance and outsourcing/ICT rules already cover much of the AI Act's quality-management expectations.",
      "Commits the EBA in 2026/2027 to supervisory-convergence work, cooperation between financial supervisors and market-surveillance authorities, and further sector-specific clarification.",
      "Recalls that credit institutions benefit from Article 74(6) and quality-management alignment provisions built into the AI Act for CRD-regulated entities."
    ],
    "whatChanged": "The factsheet told EU banks they can build AI Act compliance onto existing model-governance, outsourcing and DORA programmes rather than a parallel regime, and told supervisors the EBA would not layer new guidelines on top. It is the closest thing to sector guidance on the AI Act that EU banks have.",
    "useCases": [
      "credit-underwriting",
      "model-risk",
      "governance-general",
      "third-party-vendors",
      "fraud"
    ],
    "faq": [
      {
        "q": "Will the EBA issue new guidelines for AI Act compliance?",
        "a": "The November 2025 factsheet found no immediate need for new or revised EBA guidelines; instead the EBA is focusing on supervisory convergence and cooperation between financial supervisors and market-surveillance authorities in 2026–27."
      },
      {
        "q": "Does the AI Act conflict with EU banking law?",
        "a": "The EBA found no significant contradictions with the CRR, Consumer Credit Directive, Mortgage Credit Directive or PSD2, describing the AI Act as complementary to existing banking and payments legislation."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "eu-commission-draft-guidelines-high-risk-classification-2026",
    "authority": "eu-ai-act",
    "shortName": "Draft Commission guidelines on high-risk classification",
    "title": "Draft Commission Guidelines on the classification of high-risk AI systems under Article 6 of the AI Act",
    "aliases": [
      "high-risk classification guidelines",
      "Article 6 guidelines",
      "draft high-risk guidelines"
    ],
    "docType": "Consultation",
    "status": "Proposed",
    "date": "2026-05-19",
    "commentDeadline": "2026-07-23",
    "link": "https://digital-strategy.ec.europa.eu/en/library/draft-commission-guidelines-classification-high-risk-ai-systems",
    "appliesTo": "Providers and deployers assessing whether an AI system is high-risk under Article 6 and Annexes I and III, including banks with credit-scoring and HR systems",
    "answerFirst": "On May 19, 2026 the European Commission published draft guidelines on classifying high-risk AI systems under Article 6 of the AI Act, originally due by February 2, 2026. The draft has three parts — general principles, Annex I (AI as a safety component of regulated products) and Annex III (the eight listed use-case areas, including credit scoring) — with practical examples the Commission says it will update over time. A targeted consultation ran to July 23, 2026 and final guidelines are expected by end-2026.",
    "keyPoints": [
      "Intended purpose as documented by the provider is determinative for classification and must be described consistently across technical documentation, instructions and marketing.",
      "Building in human oversight or human-in-the-loop review does not take a system out of the high-risk category — oversight is a compliance requirement for high-risk systems, not a classification escape.",
      "Explains the Article 6(3) exemptions (narrow procedural tasks, improving prior human activity, detecting decision patterns, preparatory tasks) and the duty to document and register systems a provider considers exempt.",
      "Provides non-exhaustive worked examples for each Annex III area; the credit and insurance area (point 5) includes the fraud-detection carve-out.",
      "Non-binding, but sets the interpretation supervisors will apply when the Annex III regime starts on December 2, 2027.",
      "Final guidelines to be complemented later by guidance on the substantive high-risk requirements (Articles 8–15)."
    ],
    "whatChanged": "The draft is the first official reading of the boundary that decides whether a bank's model triggers the full high-risk regime. It closes off the widely discussed argument that a human final decision or a 'decision-support' label avoids Annex III 5(b), and it fleshes out the Article 6(3) exemptions on which many analytics and pre-screening tools will rely.",
    "useCases": [
      "credit-underwriting",
      "model-risk",
      "fraud",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Can a bank avoid high-risk classification by keeping a human in the loop?",
        "a": "No. The draft guidelines state that human oversight is a requirement for high-risk systems, not a factor that removes a system from the high-risk category; classification turns on intended purpose and the Annex III list."
      },
      {
        "q": "When will the final high-risk classification guidelines be adopted?",
        "a": "The Commission has indicated final adoption by the end of 2026, after the consultation that closed July 23, 2026 — a year before the Annex III regime applies on December 2, 2027."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "eu-digital-omnibus-ai-regulation-2026-1744",
    "authority": "eu-ai-act",
    "shortName": "Regulation (EU) 2026/1744 (Digital Omnibus on AI)",
    "title": "Regulation (EU) 2026/1744 amending Regulation (EU) 2024/1689 as regards the simplification of the implementation of harmonised rules on artificial intelligence (Digital Omnibus on AI)",
    "aliases": [
      "Regulation (EU) 2026/1744",
      "Digital Omnibus on AI",
      "AI Omnibus",
      "Digital Omnibus"
    ],
    "docType": "Regulation",
    "status": "In force",
    "date": "2026-07-24",
    "effectiveDate": "2026-07-27",
    "link": "https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng",
    "appliesTo": "All providers and deployers within the AI Act's scope, including banks and lenders using Annex III credit-scoring systems",
    "answerFirst": "Regulation (EU) 2026/1744, the Digital Omnibus on AI, was proposed by the European Commission on November 19, 2025, agreed by Parliament and Council in May 2026, adopted July 8, 2026, published in the Official Journal on July 24, 2026 and entered into force on July 27, 2026. It defers the application of high-risk obligations for stand-alone Annex III systems — including credit scoring — from August 2, 2026 to December 2, 2027, and for AI embedded in regulated products (Annex I) from August 2, 2027 to August 2, 2028. Article 50 transparency obligations were not deferred and applied from August 2, 2026.",
    "keyPoints": [
      "Stand-alone Annex III high-risk obligations deferred to December 2, 2027; Annex I product-embedded high-risk obligations deferred to August 2, 2028 — both as fixed dates.",
      "Article 50 transparency duties (disclosing AI interaction, marking synthetic content) still applied from August 2, 2026, with a grace period to December 2, 2026 for marking content from systems already on the market.",
      "Article 4 AI-literacy duty softened: providers and deployers must support the development of AI literacy among staff rather than guarantee a level of competence.",
      "Lawful basis for processing special-category personal data for bias detection and correction extended beyond high-risk systems to all AI systems and GPAI models, subject to strict necessity.",
      "AI Office gains investigation, inspection and fining powers, and exclusive competence over AI systems built on general-purpose AI models.",
      "Simplified documentation extended to small mid-caps; a simplified registration route reinstated for systems providers consider not high-risk under Article 6(3).",
      "Member-state AI regulatory sandboxes deadline moved to August 2, 2027; new prohibition on AI generating non-consensual intimate imagery or CSAM with a transitional period to December 2, 2026.",
      "Also amends the EASA Regulation (EU) 2018/1139 and Machinery Regulation (EU) 2023/1230."
    ],
    "whatChanged": "The omnibus gave EU banks 16 extra months before credit-scoring and other Annex III systems must meet the full high-risk regime, reflecting that harmonised standards and most Commission guidance were not ready. The penalty structure and the Annex III 5(b) classification are unchanged, so remediation of legacy ML credit models remains necessary — the deadline moved, the substance did not. US banks with EU exposure should re-baseline programme plans on December 2, 2027.",
    "useCases": [
      "credit-underwriting",
      "model-risk",
      "generative-agentic-ai",
      "governance-general",
      "customer-chatbots"
    ],
    "faq": [
      {
        "q": "What is the new EU AI Act high-risk deadline after the Digital Omnibus?",
        "a": "December 2, 2027 for stand-alone Annex III systems such as credit scoring, and August 2, 2028 for AI that is a safety component of a product regulated under Annex I legislation."
      },
      {
        "q": "Did the omnibus change which bank systems count as high-risk?",
        "a": "No. Annex III point 5(b) on credit scoring and 5(c) on life and health insurance pricing were not amended; the change is timing, plus procedural relief such as simplified documentation for small mid-caps."
      },
      {
        "q": "When did the Digital Omnibus on AI enter into force?",
        "a": "July 27, 2026, three days after its publication in the Official Journal of the EU on July 24, 2026, as Regulation (EU) 2026/1744."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ecb-fsr-may-2024-ai-special-feature",
    "warning": true,
    "authority": "ecb",
    "shortName": "ECB FSR May 2024 AI special feature",
    "title": "The rise of artificial intelligence: benefits and risks for financial stability (Financial Stability Review, May 2024)",
    "aliases": [
      "Financial Stability Review May 2024",
      "FSR May 2024",
      "The rise of artificial intelligence: benefits and risks for financial stability"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2024-05-01",
    "link": "https://www.ecb.europa.eu/press/financial-stability-publications/fsr/special/html/ecb.fsrart202405_02~58c3ce5246.en.html",
    "appliesTo": "Analytical publication; no direct obligations. Relevant to euro-area banks, non-banks, and their AI vendors.",
    "answerFirst": "In May 2024 the ECB's Financial Stability Review carried a special feature, 'The rise of artificial intelligence: benefits and risks for financial stability', by Leitner, Singh, van der Kraaij and Zsámboki. It found that a majority of euro-area banks already used traditional AI and that generative AI could add USD 200–340 billion a year in value to banking, but warned that concentrated foundation-model suppliers could create operational, cyber and too-big-to-fail externalities and that uniform AI use could drive herding and asset-price distortions. It concluded that close monitoring is needed and that 'targeted initiatives may need to be considered' if existing frameworks prove insufficient.",
    "keyPoints": [
      "First dedicated ECB financial-stability analysis of AI, published in the May 2024 FSR as a special feature",
      "Majority of euro-area banks were already using traditional AI systems (survey data as of Q3 2022)",
      "Cites estimates that generative AI could add USD 200–340 billion annually in economic value to banking",
      "Supplier concentration: four companies received over half of AI venture funding; shared foundation models could propagate the same biases and failures across institutions",
      "Herding risk: widespread use of similar models may increase correlation, distort asset prices, and amplify bubbles",
      "Cyber: over one-fifth of phishing attacks target the financial sector; AI lowers attacker entry barriers and improves phishing and deepfakes",
      "Model robustness concerns — hallucinations, algorithmic bias, complexity that makes errors hard to detect and explain",
      "Policy conclusion: close monitoring of AI penetration and supplier concentration; targeted initiatives if current regulation proves insufficient"
    ],
    "whatChanged": "This was the ECB's first structured statement of how AI could become a system-wide, not just firm-level, risk. It framed the concentration and herding arguments that now recur in supervisory speeches and in the 2026–28 priorities, and it pre-dates the ECB's later shift to treating AI-enabled cyber as the most acute near-term threat.",
    "useCases": [
      "governance-general",
      "third-party-vendors",
      "cybersecurity",
      "trading-markets"
    ],
    "faq": [
      {
        "q": "What did the ECB's May 2024 Financial Stability Review say about AI?",
        "a": "It found AI brings efficiency benefits but that concentration among a few foundation-model suppliers, herding from uniform models, cyber-enabled attacks, and model robustness problems could threaten financial stability, and called for close monitoring with targeted initiatives if needed."
      },
      {
        "q": "Does the ECB FSR AI special feature impose obligations on banks?",
        "a": "No. It is analysis, not guidance. But its concentration and herding themes feed directly into the ECB's supervisory expectations on third-party and model governance."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ecb-cipollone-ai-central-bank-view-2024",
    "authority": "ecb",
    "shortName": "Cipollone speech: 'Artificial intelligence: a central bank's view' (July 2024)",
    "title": "Artificial intelligence: a central bank's view — speech by Piero Cipollone",
    "aliases": [
      "Artificial intelligence: a central bank's view",
      "Cipollone AI speech"
    ],
    "docType": "Speech",
    "status": "Final",
    "date": "2024-07-04",
    "link": "https://www.ecb.europa.eu/press/key/date/2024/html/ecb.sp240704_1~e348c05894.en.html",
    "appliesTo": "No obligations; sets out the ECB Executive Board's view on AI in central banking and financial stability.",
    "answerFirst": "On 4 July 2024 ECB Executive Board member Piero Cipollone gave 'Artificial intelligence: a central bank's view' at the National Conference of Statistics in Rome. He described how the ECB uses AI in statistics, nowcasting, translation (about 6 million pages a year) and market-infrastructure oversight, and warned that widespread AI adoption in finance could heighten herd behaviour, market correlation, deception and manipulation, with concentrated suppliers creating operational vulnerabilities. Estimates of AI productivity gains cited ranged from 0.1 to 1.5 percentage points a year, and he insisted human oversight remain central to avoid AI 'echo chambers'.",
    "keyPoints": [
      "Describes ECB internal AI use: data quality, unstructured and satellite data, real-time inflation nowcasting, translation of roughly 6 million pages annually",
      "Financial-stability risks: supplier concentration, algorithmic herding, market correlation, deception and manipulation",
      "Productivity impact uncertain: cited estimates from 0.1 to 1.5 percentage points per year",
      "Warns market concentration among dominant tech firms may block broad-based gains",
      "Human oversight must remain central; risk of 'echo chamber' when AI trains on AI-generated data"
    ],
    "whatChanged": "It set the ECB-wide (not just SSM) tone that AI is welcome in central-bank operations but that human judgement and supplier diversity are non-negotiable — a line supervisors have repeated in every AI speech since.",
    "useCases": [
      "governance-general",
      "trading-markets",
      "third-party-vendors"
    ],
    "faq": [
      {
        "q": "How does the ECB itself use AI?",
        "a": "Per Cipollone's July 2024 speech: statistics and data quality, nowcasting, translation of about 6 million pages a year, communication, and market-infrastructure oversight, always with human oversight."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ecb-digitalisation-key-assessment-criteria-2024",
    "authority": "ecb",
    "shortName": "ECB digitalisation sound practices report (July 2024)",
    "title": "Digitalisation: key assessment criteria and collection of sound practices",
    "aliases": [
      "key assessment criteria and collection of sound practices",
      "ECB digitalisation report",
      "digitalisation sound practices"
    ],
    "docType": "Report",
    "status": "In force",
    "date": "2024-07-11",
    "effectiveDate": "2024-07-11",
    "link": "https://www.bankingsupervision.europa.eu/ecb/pub/html/ssm.reportondigitalisation_202407~3f4de7a771.en.html",
    "appliesTo": "Significant institutions under the SSM; used by Joint Supervisory Teams in assessing digital strategies including AI adoption.",
    "answerFirst": "On 11 July 2024 ECB Banking Supervision published 'Digitalisation: key assessment criteria and collection of sound practices', built on a 2022 survey of all significant institutions, 21 targeted reviews of digitalisation steering and 10 on-site inspections. It sets out 14 key assessment criteria across business-model impact, governance and risk management, and it is the baseline document against which JSTs judge how banks steer AI and other innovative technologies. It requires a detailed impact review of all financial and non-financial risk dimensions before deploying technologies such as AI, cloud and DLT, and expects boards to have adequate digital knowledge.",
    "keyPoints": [
      "Based on a 2022 digitalisation survey of all significant institutions, 21 targeted reviews in 2023, and 10 on-site inspections (2022–23)",
      "14 key assessment criteria grouped under business model, governance and risk management",
      "Criterion 11: run a detailed impact review across credit, market, operational, reputational and capital risks for innovative technologies including AI, cloud and DLT",
      "Criterion 12: data governance framework with clear roles and record-keeping checks for any new application, including AI",
      "Criterion 13: review and adapt existing risk models (including credit-risk models) for behavioural changes caused by digital channels",
      "Boards must have adequate collective digital knowledge to understand and challenge digital and AI initiatives",
      "Sound practices include measuring a 'data/AI value' — the expected economic contribution of use cases — and treating AI as a risk-identification category in its own right",
      "The ECB later noted the underlying data collection showed a significant rise in AI adoption, especially for credit scoring and fraud detection"
    ],
    "whatChanged": "Before this report, ECB expectations on digital and AI strategy were scattered across SREP feedback. The report gave banks a public checklist of what JSTs assess, so an AI programme is now judged against explicit criteria on strategy, board competence, risk-impact review and data governance rather than general governance principles.",
    "useCases": [
      "governance-general",
      "model-risk",
      "data-privacy",
      "third-party-vendors"
    ],
    "faq": [
      {
        "q": "What are the ECB's key assessment criteria for digitalisation?",
        "a": "Fourteen criteria published in July 2024 covering business-model impact, governance and risk management, including a full risk-impact review for AI, cloud and DLT, data governance with clear roles, and board digital competence."
      },
      {
        "q": "Does the ECB digitalisation report cover generative AI?",
        "a": "Only indirectly. It treats AI as one innovative technology within a broader digital-strategy framework; generative-AI specifics came later in the November 2025 Supervision Newsletter and the 2026–28 priorities."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ecb-supervision-newsletter-suptech-may-2025",
    "authority": "ecb",
    "shortName": "Supervision Newsletter: suptech infrastructure (May 2025)",
    "title": "Benefits from advanced technology infrastructure in supervision (Supervision Newsletter, May 2025)",
    "aliases": [
      "Benefits from advanced technology infrastructure in supervision",
      "Supervision Newsletter May 2025",
      "Olympus project"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2025-05-14",
    "link": "https://www.bankingsupervision.europa.eu/press/supervisory-newsletters/newsletter/2025/html/ssm.nl250514.en.html",
    "appliesTo": "Describes the ECB's own supervisory technology; informs banks how their submissions are read and analysed.",
    "answerFirst": "The 14 May 2025 Supervision Newsletter article 'Benefits from advanced technology infrastructure in supervision' catalogues the ECB's suptech stack: Heimdall (machine reading for fit-and-proper files, cutting processing from 109 days in 2023 to 97 in 2024), Athena (NLP, translation and generative-AI text review across supervisory documents), Agora (unified prudential data lake), Delphi (news-based market monitoring), Navi (network analytics) and more than 100 robotic process automations running up to 15 times faster than manual work. Project Olympus aims to integrate these into a single supervisory cockpit with AI-enhanced search.",
    "keyPoints": [
      "Heimdall: machine reading of fit-and-proper questionnaires; average processing fell from 109 days (2023) to 97 days (2024)",
      "Athena: natural-language processing, translation and generative-AI-assisted review of supervisory documents with visible sources",
      "Agora: consolidated prudential data infrastructure across the ECB and national competent authorities",
      "Delphi: news-based market-behaviour monitoring, with social-media alerts planned; Navi: graph analytics for ownership structures and NBFI exposures",
      "Over 100 RPAs deployed, completing tasks up to 15 times faster than manual processing",
      "IMAS Portal (2020), CASPER (2022) and STAR (2017) handle bank submissions, ad hoc data collections and stress-test data",
      "Project Olympus: single supervisory cockpit and AI-enhanced search across European banking supervision"
    ],
    "whatChanged": "Banks now know that their filings — fit-and-proper questionnaires, ad hoc data, narrative reports — are machine-read and cross-checked by AI before a supervisor sees them, which raises the bar for consistency across submissions and across languages.",
    "useCases": [
      "governance-general",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "What AI tools does the ECB use in banking supervision?",
        "a": "Athena (gen-AI document analysis), Heimdall (fit-and-proper machine reading), Agora (data lake), Delphi (market monitoring), Navi (network analytics), Medusa (findings repository) and over 100 RPAs, per the May 2025 Supervision Newsletter and October 2025 Machado speech."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ecb-guide-to-internal-models-2025-machine-learning",
    "authority": "ecb",
    "shortName": "ECB Guide to internal models (July 2025, ML section)",
    "title": "Revised ECB Guide to internal models — expectations for machine-learning techniques in internal models",
    "aliases": [
      "ECB Guide to internal models",
      "Guide to internal models",
      "EGIM 2025"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2025-07-28",
    "effectiveDate": "2025-07-28",
    "link": "https://www.bankingsupervision.europa.eu/press/pr/date/2025/html/ssm.pr250728~2b36305822.en.html",
    "appliesTo": "Significant institutions using internal models (credit, market, counterparty credit risk) to compute risk-weighted assets, including any machine-learning components.",
    "answerFirst": "On 28 July 2025 the ECB published a revised Guide to internal models that, for the first time, adds a section on the use of machine-learning techniques in the 'Overarching principles' chapter. The guide requires that ML-based internal models be adequately explainable and that their performance justify their complexity, and it defines ML as highly complex, many-parameter techniques capturing non-linearity and needing large training datasets — explicitly excluding linear and logistic regression. It applies to all ECB-supervised banks using internal models for credit, market or counterparty credit risk.",
    "keyPoints": [
      "New ML section in the Overarching principles chapter, answering an industry request for clarification",
      "Two core tests: models must be adequately explainable, and added complexity must be justified by performance",
      "ML defined as complex, many-parameter, non-linear techniques trained on large (sometimes unstructured) datasets; linear/logistic regression are not ML for the guide",
      "Applies to internal models for credit risk, market risk and counterparty credit risk RWAs",
      "Complements the EBA's 2023 follow-up report on machine learning for IRB models",
      "The ECB's 2025 supervisory annual report cites the ML section as the year's key internal-model clarification"
    ],
    "whatChanged": "Until 2025 banks had no ECB statement on whether ML could sit inside an approved capital model. The revised guide says yes, on conditions — explainability and justified complexity — so ML components now enter the standard model-approval and ongoing-monitoring process rather than being a grey area.",
    "useCases": [
      "model-risk",
      "credit-underwriting"
    ],
    "faq": [
      {
        "q": "Can euro-area banks use machine learning in IRB models?",
        "a": "Yes, since the July 2025 revised Guide to internal models, provided the model is adequately explainable and the complexity is justified by performance; ML components go through the ECB's internal-model approval process."
      },
      {
        "q": "Is logistic regression 'machine learning' under the ECB guide?",
        "a": "No. The guide excludes linear and logistic regression from its ML definition."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ecb-machado-ai-and-supervision-speech-2025",
    "authority": "ecb",
    "shortName": "Machado speech: 'Artificial intelligence and supervision: innovation with caution' (Oct 2025)",
    "title": "Artificial intelligence and supervision: innovation with caution — speech by Pedro Machado",
    "aliases": [
      "Artificial intelligence and supervision: innovation with caution",
      "innovation with caution",
      "Machado Lisbon AI speech"
    ],
    "docType": "Speech",
    "status": "Final",
    "date": "2025-10-14",
    "link": "https://www.bankingsupervision.europa.eu/press/speeches/date/2025/html/ssm.sp251014~5bc6e60334.en.html",
    "appliesTo": "No obligations; explains how the ECB uses AI in supervision and what it worries about when banks use AI in their supervisory reporting.",
    "answerFirst": "On 14 October 2025 Pedro Machado, ECB representative to the Supervisory Board, spoke in Lisbon at Banco de Portugal on 'Artificial intelligence and supervision: innovation with caution'. He named five ECB supervisory AI tools — Agora, Athena, Delphi, Medusa and Heimdall — and stated that AI 'does not replace human judgement'. He flagged five risks: hallucinations ('wrong but confident'), deskilling of staff, lack of explainability, cyber and operational vulnerabilities, and 'AI talking to AI' as banks draft submissions with AI that supervisors then read with AI.",
    "keyPoints": [
      "Five named ECB tools: Agora (data lake), Athena (document search and summarisation with visible sources), Delphi (emerging-risk detection from market and social-media signals), Medusa (findings and measures repository), Heimdall (fit-and-proper support)",
      "ECB adopts AI 'carefully, transparently and with clear use cases'; human judgement remains decisive",
      "Risk of opacity when banks use AI to draft what they send supervisors and supervisors use AI to review it",
      "Five risks: inaccuracy/hallucination, deskilling, explainability gaps, cyber and operational vulnerabilities, AI-to-AI loops",
      "Frames ethics and conduct of supervisors as the safeguard around AI-assisted supervision"
    ],
    "whatChanged": "It was the clearest public account of which AI systems the ECB runs and how it thinks about their limits, and it put banks on notice that AI-generated regulatory submissions will be scrutinised for substance behind the polish.",
    "useCases": [
      "generative-agentic-ai",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Does the ECB use generative AI to review bank submissions?",
        "a": "Yes — Athena and related tools search, translate and summarise supervisory documents — but Machado's October 2025 speech stresses the tools inform rather than replace supervisory judgement."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ecb-ssm-supervisory-priorities-2026-28",
    "authority": "ecb",
    "shortName": "SSM supervisory priorities 2026–28",
    "title": "ECB Banking Supervision: SSM supervisory priorities for 2026–28",
    "aliases": [
      "supervisory priorities 2026-28",
      "SSM supervisory priorities 2026–28",
      "supervisory priorities for 2026-2028"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2025-11-18",
    "effectiveDate": "2026-01-01",
    "link": "https://www.bankingsupervision.europa.eu/framework/priorities/html/ssm.supervisory_priorities202511.en.html",
    "appliesTo": "All significant institutions directly supervised by the ECB; frames JST work programmes for 2026–28.",
    "answerFirst": "Published 18 November 2025, the SSM supervisory priorities for 2026–28 set two priorities: resilience to geopolitical and macro-financial uncertainty, and operational resilience with robust ICT capabilities. AI falls under Priority 2: banks 'shall have strategies that effectively reflect opportunities and risks' of new technologies, and the ECB will continue monitoring general AI use while taking a more focused approach to generative-AI applications through targeted workshops, cooperation with AI Act market-surveillance authorities, and DORA-driven on-site campaigns on cybersecurity and third-party risk. The stance is explicitly technology-neutral, focusing on use cases and their risks.",
    "keyPoints": [
      "Two priorities for 2026–28: (1) geopolitical/macro-financial resilience, (2) operational resilience and ICT capabilities",
      "AI and digitalisation sit under Priority 2 alongside DORA implementation and risk-data aggregation",
      "Continued monitoring of AI adoption, with a more targeted, in-depth approach to generative-AI applications",
      "Planned activities: targeted workshops on gen-AI use cases; cooperation with market surveillance authorities on AI Act implementation; stablecoin monitoring",
      "DORA: on-site inspection campaigns on cybersecurity and third-party risk management; threat-led penetration testing",
      "Persistent deficiencies in risk-data aggregation and reporting to be addressed via system-wide monitoring and management accountability",
      "Technology-neutral supervisory stance: assessment focuses on use cases and associated risks, not the technology itself"
    ],
    "whatChanged": "Compared with the 2025–27 priorities, AI moved from 'monitoring adoption' to a deliberate expansion of scope from prudentially relevant models to generative AI across the bank, with the ECB signalling it will form a stance on gen-AI materiality and coordinate with AI Act enforcers.",
    "useCases": [
      "generative-agentic-ai",
      "governance-general",
      "cybersecurity",
      "third-party-vendors",
      "credit-underwriting",
      "fraud"
    ],
    "faq": [
      {
        "q": "What are the ECB's supervisory priorities on AI for 2026–28?",
        "a": "AI sits under Priority 2 (operational resilience and ICT): continued monitoring of AI adoption with a more targeted approach to generative AI, targeted workshops, and cooperation with AI Act market-surveillance authorities."
      },
      {
        "q": "When do the SSM priorities 2026–28 apply?",
        "a": "They frame supervisory work from 2026 through 2028 and were published on 18 November 2025."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ecb-supervision-newsletter-ai-credit-scoring-fraud-2025",
    "authority": "ecb",
    "shortName": "Supervision Newsletter: AI use cases for credit scoring and fraud detection (Nov 2025)",
    "title": "AI's impact on banking: use cases for credit scoring and fraud detection (Supervision Newsletter, November 2025)",
    "aliases": [
      "AI's impact on banking: use cases for credit scoring and fraud detection",
      "Supervision Newsletter November 2025",
      "AI workshops with banks 2025"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2025-11-20",
    "link": "https://www.bankingsupervision.europa.eu/press/supervisory-newsletters/newsletter/2025/html/ssm.nl251120_1.en.html",
    "appliesTo": "Significant institutions using AI for credit scoring and fraud detection; findings inform JST engagement and the 2026–28 priorities.",
    "answerFirst": "The 20 November 2025 Supervision Newsletter reports the ECB's annual innovative-technology data collection (107 significant institutions in 2023, 110 in 2024) and 2025 workshops with 13 banks on AI for credit scoring and fraud detection. Decision-tree models dominate both use cases, neural networks are used mainly for fraud, none of the 13 banks allows self-learning after deployment, and about half have created dedicated AI policies or committees, some with a Chief AI Officer. Gaps found: little quantification of benefits, 'black box' opacity, inconsistent explainability definitions, weak application of data-management standards to AI, and operational-resilience shortfalls on cyber and third-party risk.",
    "keyPoints": [
      "Annual data collection: 107 SIs in 2023, 110 SIs in 2024, showing a strong rise in AI use cases including credit scoring and fraud detection",
      "2025 workshops with 13 banks on governance and compliance of AI in credit scoring and fraud detection",
      "Decision-tree-based models are the main technique; neural networks used mainly for fraud detection; banks avoid gen-AI for credit scoring on cost, time and trustworthiness grounds",
      "None of the 13 banks permits self-learning after deployment; human oversight required for high-risk decisions and real-time fraud alerts",
      "About 50% of sampled banks have dedicated AI policies or oversight committees; Chief AI Officer roles emerging; high-risk self-assessments under the EU AI Act under way",
      "Models mostly built in-house but typically hosted on external cloud; explainability tools used for monitoring",
      "Gaps: limited financial quantification of benefits, black-box transparency, inconsistent explainability definitions, data-management standards rarely applied to AI, cyber and third-party weaknesses",
      "ECB to keep monitoring under the 2026–28 priorities with focus on strategies, governance and risk management"
    ],
    "whatChanged": "This is the first ECB publication with concrete supervisory findings on AI in core credit and fraud processes. It tells banks what 'good' currently looks like — no post-deployment self-learning, human sign-off on high-risk decisions, AI committees — and where JSTs will push: explainability definitions, data standards, and third-party/cyber controls around cloud-hosted models.",
    "useCases": [
      "credit-underwriting",
      "fraud",
      "model-risk",
      "governance-general",
      "third-party-vendors"
    ],
    "faq": [
      {
        "q": "What did the ECB find about AI in credit scoring at euro-area banks?",
        "a": "From 2025 workshops with 13 banks: decision-tree models dominate, no bank allows self-learning post-deployment, human oversight covers high-risk decisions, and gaps remain in explainability definitions, data-management standards and benefit quantification."
      },
      {
        "q": "How many ECB-supervised banks use AI?",
        "a": "The ECB's data collection covered 110 significant institutions in 2024; ECB speeches in 2026 put AI use at more than 85% of supervised banks."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ecb-montagner-digital-transformation-speech-2026",
    "authority": "ecb",
    "shortName": "Montagner speech: 'Encouraging innovation, managing risks' (Feb 2026)",
    "title": "Encouraging innovation, managing risks: the ECB's approach to digital transformation — speech by Patrick Montagner",
    "aliases": [
      "Encouraging innovation, managing risks",
      "Montagner FinTech and Regulation speech"
    ],
    "docType": "Speech",
    "status": "Final",
    "date": "2026-02-03",
    "link": "https://www.bankingsupervision.europa.eu/press/speeches/date/2026/html/ssm.sp260203~672ce5d5ff.en.html",
    "appliesTo": "No obligations; supervisory-board-level view on AI, tokenisation and DORA for significant institutions.",
    "answerFirst": "On 3 February 2026 Supervisory Board member Patrick Montagner told the 10th Annual FinTech and Regulation Conference in Brussels that over 85% of ECB-supervised banks use AI and that the greatest risk facing European banks may be the innovations they fail to pursue. He warned of governance gaps in data quality, explainability and accountability, of 'reward hacking' by AI systems that optimise metrics rather than outcomes, and of concentration and geopolitical dependence on non-EU generative-AI providers. He cited EUR 4.2 billion of payment fraud across the EEA in 2024 and framed DORA, MiCAR and the AI Act as a common risk-management language.",
    "keyPoints": [
      "Over 85% of supervised banks use AI; DORA applicable since January 2025",
      "EUR 4.2 billion in payment fraud reported across the EEA in 2024",
      "Governance gaps: data quality, explainability, accountability; 'reward hacking' risk in AI systems",
      "Concentration and geopolitical risk from reliance on non-EU generative-AI providers",
      "Tokenised deposits distinguished from stablecoins; banks should set strategies aligned with risk appetite",
      "DORA, MiCAR and AI Act together give supervisors and banks a common framework for cyber, AI and third-party risk"
    ],
    "whatChanged": "It marked the ECB publicly treating under-investment in AI as a supervisory concern in its own right, while naming provider concentration outside the EU as a risk JSTs will probe in third-party assessments.",
    "useCases": [
      "generative-agentic-ai",
      "third-party-vendors",
      "fraud",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Does the ECB see not adopting AI as a risk for banks?",
        "a": "Yes. Montagner's February 2026 speech said the greatest risk for European banks may be the innovations they neglect, alongside the governance risks of AI they do adopt."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ecb-machado-technology-neutral-governance-speech-2026",
    "authority": "ecb",
    "shortName": "Machado speech: 'Technology is neutral, governance is not' (Feb 2026)",
    "title": "Technology is neutral, governance is not: AI adoption in the banking sector — speech by Pedro Machado",
    "aliases": [
      "Technology is neutral, governance is not",
      "Machado KPMG RiskTech speech"
    ],
    "docType": "Speech",
    "status": "Final",
    "date": "2026-02-24",
    "link": "https://www.bankingsupervision.europa.eu/press/speeches/date/2026/html/ssm.sp260224~6c5b64a77a.en.html",
    "appliesTo": "No obligations; the most detailed public statement of ECB supervisory expectations for AI governance at significant institutions.",
    "answerFirst": "On 24 February 2026 Pedro Machado, ECB representative to the Supervisory Board, delivered 'Technology is neutral, governance is not: AI adoption in the banking sector' at the KPMG RiskTech Conference in Frankfurt. He reported that more than 85% of large European banks use AI, with generative and agentic AI accelerating in IT operations, legal and document analysis and front-line applications, and set three governance expectations: clear accountability for AI decisions, senior-management oversight matching AI's strategic importance, and effective challenge from risk, compliance and internal audit. Risk-management focus areas are explainability, lifecycle model governance and drift, data quality, and third-party risk, aligned with DORA, the AI Act, MiCAR and the DSA.",
    "keyPoints": [
      "More than 85% of large European banks use AI; generative and agentic AI adoption accelerating",
      "Most common gen-AI use cases: IT operations (incident management, coding), legal/document analysis, front-line customer support, plus traditional credit risk, fraud and transaction monitoring",
      "Three governance expectations: accountability for AI outcomes, senior-management oversight, independent challenge by risk, compliance and internal audit",
      "Risk-management focus: explainability for decision-makers, lifecycle model governance and drift monitoring, AI-specific data quality, third-party risk",
      "Banks are accountable for outcomes regardless of how the technology performs — 'technology is neutral, governance is not'",
      "Under Priority 2 of the 2026–28 priorities the ECB will monitor general AI use and take a more targeted approach to generative AI",
      "Expectations anchored in DORA, EU AI Act, MiCAR and the Digital Services Act"
    ],
    "whatChanged": "The speech is the closest thing to an ECB AI governance standard: it tells boards what the second and third lines must do for AI, and confirms that the ECB judges AI through accountability and control quality rather than technology choice.",
    "useCases": [
      "governance-general",
      "generative-agentic-ai",
      "model-risk",
      "third-party-vendors"
    ],
    "faq": [
      {
        "q": "What does the ECB expect from bank boards on AI governance?",
        "a": "Per Machado's February 2026 speech: clear accountability for AI decisions, senior-management oversight proportional to AI's strategic role, and robust challenge from risk management, compliance and internal audit, plus explainability, lifecycle model governance, data quality and third-party controls."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ecb-elderson-operational-resilience-age-of-ai-speech-2026",
    "authority": "ecb",
    "shortName": "Elderson speech: 'Strengthening operational resilience for the age of AI' (June 2026)",
    "title": "Strengthening operational resilience for the age of AI — speech by Frank Elderson",
    "aliases": [
      "Strengthening operational resilience for the age of AI",
      "Elderson Goldman Sachs AI speech"
    ],
    "docType": "Speech",
    "status": "Final",
    "date": "2026-06-03",
    "link": "https://www.bankingsupervision.europa.eu/press/speeches/date/2026/html/ssm.sp260603~255bec155b.en.html",
    "appliesTo": "No obligations; previewed the July 2026 'Dear CEO' letter on AI-enabled cyber threats for significant institutions.",
    "answerFirst": "On 3 June 2026 Frank Elderson, ECB Executive Board member and Supervisory Board Vice-Chair, told the Goldman Sachs European Financials Conference in Zurich that frontier AI models represent 'a structural shift in the economics of cyber risk', letting attacks that once needed expertise and time be run faster, at scale and by many more actors. He noted 85% of significant banks use AI, that 109 banks took the 2024 cyber-resilience stress test with 28 assessed in depth and roughly 75% of findings since addressed, and announced the ECB had convened banks on frontier AI and would send a 'Dear CEO' letter urging faster security fixes, with targeted follow-up.",
    "keyPoints": [
      "Frontier AI models sharply lower the cost and time of sophisticated cyber attacks — a structural, not temporary, change",
      "85% of significant European banks use AI",
      "2024 cyber-resilience stress test: 109 banks, 28 in-depth assessments, about 75% of findings addressed",
      "ECB convened supervised banks on frontier-AI implications and pre-announced a 'Dear CEO' letter (issued 7 July 2026)",
      "Oversight of critical third parties — cloud, telecoms, payment systems — flagged as essential to avoid sector-wide disruption",
      "Context: EUR 1.2 trillion annual investment need by 2031 for green, digital and defence transitions"
    ],
    "whatChanged": "It shifted the ECB's AI narrative from governance of banks' own AI to AI as an external threat multiplier, and set up the supervisory escalation that followed in July 2026.",
    "useCases": [
      "cybersecurity",
      "third-party-vendors",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "Why does the ECB say frontier AI changes cyber risk for banks?",
        "a": "Because, per Elderson's June 2026 speech, frontier models can find and exploit vulnerabilities far faster and at larger scale, compressing the window between a patch being released and an attack — hence the demand for faster patching."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ecb-letter-ai-enabled-cybersecurity-threats-2026",
    "warning": true,
    "authority": "ecb",
    "shortName": "ECB 'Dear CEO' letter on AI-enabled cybersecurity threats (SSM-2026-0301)",
    "title": "Addressing AI-enabled cybersecurity threats — letter from the Chair of the Supervisory Board to CEOs of significant institutions",
    "aliases": [
      "SSM-2026-0301",
      "Addressing AI-enabled cybersecurity threats",
      "ECB AI cybersecurity letter",
      "AI-enabled cybersecurity threats letter"
    ],
    "docType": "Letter",
    "status": "In force",
    "date": "2026-07-07",
    "effectiveDate": "2026-07-07",
    "link": "https://www.bankingsupervision.europa.eu/press/letterstobanks/shared/pdf/2026/ssm.2026_letter_on_AI_enabled_cybersecurity_threats.en.pdf",
    "appliesTo": "CEOs of all significant institutions directly supervised by the ECB (about 110 banking groups).",
    "answerFirst": "On 7 July 2026 Claudia Buch, Chair of the ECB Supervisory Board, sent letter SSM-2026-0301, 'Addressing AI-enabled cybersecurity threats', to the CEO of every significant institution. It states that emerging AI models can identify vulnerabilities and generate working exploits at unprecedented speed — a long-term shift, not a risk tied to any single tool — and, invoking DORA, requires each bank to assess the threat landscape without delay and submit a comprehensive action plan to its Joint Supervisory Team by 31 October 2026. Short-term priorities are accelerated vulnerability and patch management at scale, better monitoring, detection and AI-enabled defence, and third-party risk management fit for the situation; the ECB also postponed the annual IT Risk Questionnaire from September 2026 to February 2027.",
    "keyPoints": [
      "Reference SSM-2026-0301, dated 7 July 2026, signed by Supervisory Board Chair Claudia Buch; addressed to every SI CEO",
      "Action plan due to the bank's JST by 31 October 2026, with concrete measures, resources, named roles and responsibilities, and timelines, built on the existing cyber-risk strategy",
      "Short-term focus: accelerate vulnerability and patch management at scale; enhance monitoring, detection and AI-enabled defensive capabilities; verify third-party (ICT provider) risk management",
      "Prioritise perimeter technologies and internet-facing assets, including third-party software and open-source components",
      "Structural measures: defence-in-depth and cyber hygiene, replacing legacy/unsupported/end-of-life technology, response and recovery, crisis management, information sharing",
      "Management bodies must revisit ICT investment, resource allocation and ICT risk-tolerance frameworks where needed; open findings from inspections, targeted reviews and the 2024 cyber-resilience stress test to be closed without delay",
      "ECB will run a horizontal analysis of all action plans and share conclusions; further workshops possible depending on frontier-AI developments",
      "IT Risk Questionnaire deadline moved from September 2026 to February 2027; other supervisory activities may be adjusted case by case"
    ],
    "whatChanged": "This is the first ECB 'letter to banks' in several years and the first ever devoted to a technology threat. It converts speech-level warnings into a dated, bank-by-bank deliverable that JSTs will monitor, effectively making AI-driven cyber risk a 2026 SREP topic for every significant institution.",
    "useCases": [
      "cybersecurity",
      "third-party-vendors",
      "generative-agentic-ai",
      "governance-general"
    ],
    "faq": [
      {
        "q": "When is the ECB AI cybersecurity action plan due?",
        "a": "By 31 October 2026, submitted to the bank's Joint Supervisory Team, per letter SSM-2026-0301 of 7 July 2026."
      },
      {
        "q": "What must the ECB AI-cyber action plan contain?",
        "a": "Concrete measures to strengthen controls, allocated resources, clear roles and responsibilities and implementation timelines, covering accelerated patching, enhanced detection and AI-enabled defence, third-party risk management, and structural measures such as legacy replacement and response and recovery."
      },
      {
        "q": "Did the ECB delay the IT Risk Questionnaire in 2026?",
        "a": "Yes. The letter extends the annual IT Risk Questionnaire collection from September 2026 to February 2027 so banks can focus on the action plans."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "eba-rep-2020-01-big-data-advanced-analytics",
    "authority": "eba",
    "shortName": "EBA Report on Big Data and Advanced Analytics (EBA/REP/2020/01)",
    "title": "Report on Big Data and Advanced Analytics",
    "aliases": [
      "EBA/REP/2020/01",
      "Big Data and Advanced Analytics report",
      "BD&AA report"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2020-01-13",
    "link": "https://www.eba.europa.eu/publications-and-media/press-releases/eba-report-identifies-key-challenges-roll-out-big-data-and",
    "appliesTo": "EU credit institutions and payment institutions using big data, advanced analytics and machine learning (thematic report, not binding)",
    "answerFirst": "The EBA's Report on Big Data and Advanced Analytics (EBA/REP/2020/01), published January 13, 2020, is the EU's foundational statement of what supervisors expect from bank use of machine learning. It sets out four pillars needed to roll out advanced analytics — data management, technological infrastructure, organisation and governance, and analytics methodology — plus a set of 'elements of trust' including ethics, explainability and interpretability, fairness and bias avoidance, traceability and auditability, data protection, consumer protection and security.",
    "keyPoints": [
      "Published January 13, 2020 as EBA/REP/2020/01 after an EBA survey of institutions on BD&AA use.",
      "Four key pillars for BD&AA roll-out: data management, technological infrastructure, organisation and governance, analytics methodology.",
      "Elements of trust: ethics, explainability and interpretability, fairness and bias avoidance, traceability and auditability, data protection, consumer protection, security.",
      "Observes that most reported use cases at the time were in fraud detection, AML, credit scoring and customer engagement, with many still at pilot stage.",
      "Explicitly framed as supporting technology-neutral regulation and supervision rather than proposing new rules.",
      "Formed the basis for later EBA work on ML in IRB models (2021–23) and for the AI Act mapping exercise (2025)."
    ],
    "whatChanged": "Before 2020 there was no EU-wide banking-supervisory articulation of expectations for machine learning. This report gave national supervisors and the ECB a common vocabulary — explainability, traceability, bias avoidance — that later reappears in the ML-for-IRB papers, the ECB's model-approval practice, and the EBA's reading of the AI Act. Banks still cite it as the origin of EU 'trustworthy AI in banking' expectations.",
    "useCases": [
      "model-risk",
      "governance-general",
      "credit-underwriting",
      "fraud",
      "aml-kyc"
    ],
    "faq": [
      {
        "q": "What are the EBA's 'elements of trust' for advanced analytics?",
        "a": "Ethics, explainability and interpretability, fairness and bias avoidance, traceability and auditability, data protection, consumer protection, and security — set out in the EBA's January 2020 Report on Big Data and Advanced Analytics (EBA/REP/2020/01)."
      },
      {
        "q": "Is the 2020 EBA big data report binding on banks?",
        "a": "No. It is a thematic report describing trends and key considerations, intended to support technology-neutral supervision. It is not guidelines under Article 16 of the EBA Regulation, but supervisors draw on it in dialogue with banks."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "eba-gl-2020-06-loan-origination-monitoring",
    "authority": "eba",
    "shortName": "EBA Guidelines on loan origination and monitoring (EBA/GL/2020/06)",
    "title": "Guidelines on loan origination and monitoring",
    "aliases": [
      "EBA/GL/2020/06",
      "loan origination guidelines",
      "LOM Guidelines",
      "Guidelines on loan origination and monitoring"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2020-05-29",
    "effectiveDate": "2021-06-30",
    "link": "https://www.eba.europa.eu/activities/single-rulebook/regulatory-activities/credit-risk/guidelines-loan-origination-and-monitoring",
    "appliesTo": "EU credit institutions (CRD) and, for consumer-credit provisions, other creditors under the Consumer Credit and Mortgage Credit Directives; applied via national competent authorities",
    "answerFirst": "The EBA Guidelines on loan origination and monitoring (EBA/GL/2020/06), published May 29, 2020 and applicable from June 30, 2021, are the EU's standing rulebook for how banks use automated and technology-enabled models in creditworthiness assessment and credit decisions. Institutions must specify where automated models are used, keep model governance and model-risk management proportionate to the facility and borrower type, and ensure staff understand and can challenge model outputs. The EBA's 2025 AI Act mapping treats these guidelines as one of the main sectoral requirements that already cover high-risk credit-scoring AI.",
    "keyPoints": [
      "Adopted May 29, 2020; applied from June 30, 2021 with transition periods for existing loans (monitoring provisions phased in to June 30, 2024).",
      "Section on technology-enabled innovation: institutions should specify the use of automated models in creditworthiness assessment and credit decision-making, appropriate to the size, nature and complexity of the facility and borrower.",
      "Requires governance arrangements for the design and use of such models and management of the associated model risk, building on the EBA Guidelines on internal governance.",
      "Model outputs must be understood by the institution; staff must be able to interpret and, where appropriate, override model results.",
      "Covers data quality, ESG factors, AML/CFT considerations and consumer-protection duties in the credit-granting process.",
      "Cited in the EBA's November 2025 AI Act factsheet as an existing framework that maps onto AI Act high-risk obligations for credit scoring."
    ],
    "whatChanged": "These guidelines made the use of automated credit-decision models an explicit governance matter across the EU for the first time, requiring banks to document where models decide and to keep humans capable of understanding and challenging them. Since August 2, 2026 they sit alongside the AI Act's high-risk regime for credit scoring of natural persons; the EBA's position is that a bank compliant with these guidelines already satisfies much of what the AI Act asks, with residual gaps to close rather than a parallel programme to build.",
    "useCases": [
      "credit-underwriting",
      "model-risk",
      "fair-lending",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Do the EBA loan origination guidelines cover AI credit scoring?",
        "a": "Yes. EBA/GL/2020/06 requires institutions to specify where automated models are used in creditworthiness assessment and credit decisions, set governance for their design and use, manage model risk, and ensure staff understand and can challenge outputs. The EBA's 2025 AI Act mapping lists them among the sectoral rules already covering high-risk credit-scoring AI."
      },
      {
        "q": "When did the EBA loan origination guidelines take effect?",
        "a": "They applied from June 30, 2021, with transitional arrangements for existing loans running to June 30, 2024."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "eba-ml-irb-discussion-paper-2021",
    "authority": "eba",
    "shortName": "EBA discussion paper on machine learning for IRB models",
    "title": "Discussion Paper on machine learning for IRB models",
    "aliases": [
      "discussion paper on machine learning for IRB models",
      "ML for IRB discussion paper",
      "machine learning for IRB models"
    ],
    "docType": "Consultation",
    "status": "Final",
    "date": "2021-11-11",
    "commentDeadline": "2022-02-11",
    "supersededBy": "eba-rep-2023-28-ml-irb-follow-up",
    "link": "https://www.eba.europa.eu/publications-and-media/press-releases/eba-consults-machine-learning-internal-ratings-based-models",
    "appliesTo": "EU credit institutions using or planning to use machine learning in internal ratings-based (IRB) credit-risk models for regulatory capital under the CRR",
    "answerFirst": "On November 11, 2021 the EBA published a discussion paper on machine learning for internal ratings-based (IRB) models, open for comment until February 11, 2022. It set out how sophisticated ML models can coexist with the Capital Requirements Regulation when used in IRB models and proposed principle-based recommendations to ensure prudent use — keeping models explainable, understood by staff and management, validated, and supervisable. It was the first EU supervisory statement on ML in regulatory capital models and was followed by the August 2023 follow-up report.",
    "keyPoints": [
      "Published November 11, 2021; consultation closed February 11, 2022.",
      "Aim: set supervisory expectations on how ML models can adhere to CRR requirements for IRB models (Articles 142–191 CRR) — not to change the rules.",
      "Identifies challenges: interpretability and explainability, model complexity and overfitting, data quality and representativeness, staff skills, and the CRR's requirements on human judgement and documentation.",
      "Identifies opportunities: better risk differentiation, use of unstructured data, ML as challenger models in validation, collateral valuation.",
      "Principle-based recommendations: ensure adequate understanding of the model by management and validation, document the model and data, guard against overfitting, keep a consistent model over time, and be able to explain individual outputs where needed.",
      "Applies equally to PD, LGD and EAD models and to ML used in supporting steps such as data preparation and risk differentiation."
    ],
    "whatChanged": "Before this paper, EU banks had no supervisory statement on whether ML could sit inside capital models; most assumed the ECB would not approve it. The paper confirmed ML is permissible within the IRB framework if it meets existing CRR requirements, and it defined the tests — explainability, understanding, documentation, stability — that the ECB now applies in model approvals.",
    "useCases": [
      "model-risk",
      "credit-underwriting"
    ],
    "faq": [
      {
        "q": "Can machine learning be used in IRB capital models in the EU?",
        "a": "Yes, in principle. The EBA's November 2021 discussion paper and its August 2023 follow-up report say ML can be used in IRB models provided CRR requirements are met — in particular that management and validation understand the model, that it is documented and explainable, and that overfitting and instability are controlled."
      },
      {
        "q": "When did the EBA consultation on ML for IRB models close?",
        "a": "February 11, 2022. The EBA published the feedback and its conclusions in a follow-up report on August 4, 2023 (EBA/REP/2023/28)."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "eba-rep-2023-28-ml-irb-follow-up",
    "authority": "eba",
    "shortName": "EBA follow-up report on machine learning for IRB models (EBA/REP/2023/28)",
    "title": "Machine Learning for IRB Models — Follow-up report from the consultation on the Discussion paper on machine learning for IRB models",
    "aliases": [
      "EBA/REP/2023/28",
      "follow-up report on machine learning for IRB models",
      "ML for IRB follow-up report"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2023-08-04",
    "supersedes": [
      "eba-ml-irb-discussion-paper-2021"
    ],
    "link": "https://www.eba.europa.eu/publications-and-media/press-releases/eba-publishes-follow-report-use-machine-learning-internal",
    "appliesTo": "EU credit institutions using machine learning in IRB credit-risk models; relevant to ECB and national supervisors approving such models",
    "answerFirst": "The EBA's follow-up report on machine learning for IRB models (EBA/REP/2023/28), published August 4, 2023, closed out the 2021 consultation. It confirmed that respondents broadly supported the EBA's principle-based recommendations for prudent ML use in IRB models and reiterated them, mapped the ML use cases banks actually report — ML in core modelling steps, ML challenger models in validation, and collateral valuation — and flagged interactions with GDPR and the then-draft AI Act, asking for clarifications to reduce legal uncertainty for capital models.",
    "keyPoints": [
      "Published August 4, 2023 as EBA/REP/2023/28.",
      "Current use is selective: ML in core IRB modelling steps, ML as challenger models for validation, and collateral valuation, rather than fully ML-based rating systems.",
      "Complexity issues addressed: overfitting, human-skill requirements, and explainability of individual outputs.",
      "Reiterates the discussion paper's recommendations on understanding, documentation, validation and stability, which respondents broadly supported.",
      "Discusses interaction with GDPR (automated decision-making) and the AI Act, calling for clarification to avoid unintended consequences for IRB models.",
      "No new guidelines were issued; the report is the standing statement of EBA expectations for ML in capital models."
    ],
    "whatChanged": "The follow-up turned a discussion into a settled position: ML in IRB models is acceptable within existing CRR requirements, and banks should expect supervisors to test explainability, understanding and stability rather than prohibit the technique. It also put on record, a year before the AI Act was adopted, that credit-scoring models used for capital purposes could be caught by the Act — an issue the EBA's 2025 mapping exercise later addressed.",
    "useCases": [
      "model-risk",
      "credit-underwriting"
    ],
    "faq": [
      {
        "q": "What did the EBA conclude on ML in IRB models in 2023?",
        "a": "In EBA/REP/2023/28 (August 4, 2023) the EBA reiterated its 2021 recommendations for prudent use — management understanding, documentation, explainability, control of overfitting and model stability — noted that current use is mostly in core modelling steps, challenger models and collateral valuation, and asked for clarity on GDPR and AI Act interactions."
      },
      {
        "q": "Does the EBA ML-for-IRB report change capital rules?",
        "a": "No. It sets expectations on how existing CRR IRB requirements apply when ML is used; it did not amend the CRR or issue new guidelines."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "eba-ai-adoption-report-2025",
    "authority": "eba",
    "shortName": "EBA report: Rising application of AI in EU banking and payments (Sep 2025)",
    "title": "Rising application of AI in EU banking and payments sector",
    "aliases": [
      "Rising application of AI in EU banking and payments sector",
      "EBA AI adoption report",
      "EBA report on AI adoption in EU banking and payments"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2025-09-25",
    "link": "https://www.eba.europa.eu/sites/default/files/2025-09/146b3558-d026-47bf-a872-f05e93ed30d2/Rising%20application%20of%20AI%20in%20EU%20banking%20and%20payments%20sector.pdf",
    "appliesTo": "EU credit institutions and payment institutions (monitoring report; no obligations)",
    "answerFirst": "The EBA's September 25, 2025 report 'Rising application of AI in EU banking and payments sector' is the official snapshot of AI use in EU banks: 92% of EU banks are deploying AI and 8% are piloting or discussing use cases. Dominant uses are client profiling and clustering, creditworthiness assessment and credit scoring, AML/CFT and fraud detection, risk modelling, customer support and internal-process optimisation. Among surveyed banks, 55% already use general-purpose AI or agentic AI in consumer-facing processes, most commonly for fraud alerts, call-centre assistance, self-service guidance and digital or voice assistants.",
    "keyPoints": [
      "Published September 25, 2025 as part of the EBA's digital finance factsheet series.",
      "92% of EU banks deploy AI in production; 8% are pilot testing or discussing use cases.",
      "Observed use cases: profiling/clustering of clients and transactions; creditworthiness assessment and credit scoring; AML/CFT and fraud detection including remote onboarding and real-time transaction monitoring; risk modelling; customer support including chatbots; internal-process optimisation such as document summarisation and code generation.",
      "55% of surveyed banks use GPAI or agentic AI in consumer-facing processes — fraud notifications, agent assist, self-service automation, FAQ tools, and digital/voice assistants.",
      "Internal GPAI uses: coding, summarising documentation, drafting legal, support and marketing documents.",
      "Drivers cited: staff productivity, process optimisation and better customer interaction, balanced against risks the EBA continues to monitor with market participants, consumer organisations and supervisors."
    ],
    "whatChanged": "The report replaced anecdote with official numbers for EU AI adoption and put general-purpose and agentic AI in consumer-facing banking on the supervisory record for the first time. For banks it signals which use cases supervisors will look at first — credit scoring (high-risk under the AI Act), fraud/AML, and customer-facing GPAI — and it underpins the EBA's 2026–27 supervisory-convergence work.",
    "useCases": [
      "generative-agentic-ai",
      "customer-chatbots",
      "credit-underwriting",
      "fraud",
      "aml-kyc",
      "governance-general"
    ],
    "faq": [
      {
        "q": "What share of EU banks use AI according to the EBA?",
        "a": "92% of EU banks are currently deploying AI and 8% are pilot testing or discussing use cases, per the EBA's September 25, 2025 report 'Rising application of AI in EU banking and payments sector'."
      },
      {
        "q": "How many EU banks use generative or agentic AI with customers?",
        "a": "The EBA found 55% of surveyed banks already use general-purpose AI or agentic AI in consumer-facing processes, mainly for fraud alerts, assisting customer-service agents, self-service guidance and digital or voice assistants."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "eba-work-programme-2026",
    "authority": "eba",
    "shortName": "EBA Work Programme 2026",
    "title": "EBA Work Programme 2026 — AI Act implementation and digital-finance priorities",
    "aliases": [
      "EBA Work Programme 2026",
      "EBA 2026 work programme",
      "Single Programming Document 2026-2028"
    ],
    "docType": "Framework",
    "status": "In force",
    "date": "2025-10-01",
    "effectiveDate": "2026-01-01",
    "link": "https://www.eba.europa.eu/sites/default/files/2025-10/b9fe2713-117b-440f-aae0-bdcb8832c3e0/EBA%20Work%20programme%202026.pdf",
    "appliesTo": "EBA and national competent authorities (planning document); sets what EU banks can expect from supervisors on AI in 2026",
    "answerFirst": "The EBA Work Programme 2026, published in October 2025 as part of the Single Programming Document 2026–2028, makes artificial intelligence and machine learning one of three digital-finance thematic priorities for 2026 alongside crypto-assets/DLT and value-chain evolution. On AI it commits the EBA to supporting AI Act implementation in banking and payments through 2026–27 by promoting common supervisory approaches and cooperation between national competent authorities and market surveillance authorities, providing input to the EU AI Office, and participating in the AI Board Subgroup on Financial Services.",
    "keyPoints": [
      "Published in October 2025; republished in January 2026 to align with the final Single Programming Document 2026–2028.",
      "2026 priority: enhance technological capacity of stakeholders with particular focus on AI and ML, crypto-asset markets, DLT use cases and value-chain evolution.",
      "AI Act workstream: promote common supervisory approaches and cooperation between financial-sector supervisors and market surveillance authorities.",
      "Input to the European AI Office and participation in the AI Board Subgroup on Financial Services (EBA as observer).",
      "Continued monitoring of financial innovation, including AI adoption and use cases, to identify where regulatory or supervisory response is needed.",
      "Runs alongside DORA oversight of critical ICT third-party providers, where AI-related risk is being embedded."
    ],
    "whatChanged": "The work programme confirms the EBA chose convergence over new rules for the first year of the AI Act's high-risk regime: no AI guidelines are scheduled, but national supervisors will be steered toward a common approach to banks' high-risk credit-scoring systems. For banks, that means expectations arriving through supervisory dialogue and Commission guidelines rather than an EBA rulebook.",
    "useCases": [
      "governance-general",
      "credit-underwriting",
      "third-party-vendors"
    ],
    "faq": [
      {
        "q": "What is the EBA doing on the AI Act in 2026?",
        "a": "Per its 2026 work programme and November 2025 factsheet, the EBA is promoting a common supervisory approach and cooperation among national competent authorities and market surveillance authorities, feeding the EU AI Office, and taking part in the AI Board Subgroup on Financial Services. No new EBA AI guidelines are scheduled."
      },
      {
        "q": "Is AI an EBA priority for 2026?",
        "a": "Yes. AI and machine learning are one of the EBA's three digital-finance thematic priorities for 2026, alongside crypto-assets/DLT and value-chain evolution."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "eba-ai-act-factsheet-2025",
    "authority": "eba",
    "shortName": "EBA factsheet: AI Act implications for the EU banking and payments sector",
    "title": "AI Act: implications for the EU banking and payments sector",
    "aliases": [
      "AI Act: implications for the EU banking and payments sector",
      "EBA AI Act factsheet",
      "EBA AI Act mapping exercise"
    ],
    "docType": "Guidance",
    "status": "Final",
    "date": "2025-11-21",
    "link": "https://www.eba.europa.eu/sites/default/files/2025-11/d8b999ce-a1d9-4964-9606-971bbc2aaf89/AI%20Act%20implications%20for%20the%20EU%20banking%20sector.pdf",
    "appliesTo": "EU credit institutions and payment institutions using AI for creditworthiness assessment or credit scoring of natural persons; also relevant to non-bank creditors under the CCD and MCD",
    "answerFirst": "The EBA's factsheet 'AI Act: implications for the EU banking and payments sector', published November 21, 2025, reports the results of its 2025 mapping of AI Act high-risk obligations — focused on credit scoring of natural persons, high-risk under Annex III(5)(b) — against the CRD, CRR, DORA, Consumer Credit Directive, Mortgage Credit Directive, PSD and EBA guidelines on loan origination, internal governance and PD/LGD estimation. It found no significant contradictions, judged the AI Act complementary to existing banking law, and identified no immediate need for new or revised EBA guidelines. The EBA will instead promote a common supervisory approach among national competent authorities and market surveillance authorities in 2026–27 and feed the AI Office and the AI Board Subgroup on Financial Services.",
    "keyPoints": [
      "Published November 21, 2025; mapping workstream established January 2025.",
      "Scope: AI Act requirements on high-risk systems, centred on creditworthiness assessment and credit scoring of natural persons (Annex III(5)(b)).",
      "Frameworks mapped: CRD, CRR (SA and IRB), DORA, CCD, MCD, PSD, EBA Guidelines on loan origination and monitoring, internal governance, and PD/LGD estimation.",
      "Findings: no significant contradictions; AI Act is complementary; some integration effort needed; balancing fundamental-rights goals with sectoral objectives; multiple supervisors (prudential/conduct and market surveillance authorities) make cooperation essential.",
      "Classifies each AI Act obligation as fully aligned, complementary, partially aligned, or not present in financial-services law.",
      "Notes the Commission was mandated to issue guidelines on high-risk classification by February 2, 2026 and on the interplay with sectoral law under Article 96(1)(e).",
      "Conclusion: no immediate need for new or revised EBA guidelines; 2026–27 follow-up via supervisory convergence and AI Office input.",
      "Explicitly not guidance or a legal position; subject to revision as AI Office and AI Board guidance evolves."
    ],
    "whatChanged": "The factsheet told EU banks that AI Act compliance for credit scoring is primarily an integration exercise on top of CRD/CRR, DORA and the loan-origination guidelines, not a separate rulebook — and that the EBA would not add guidelines of its own. The practical burden shifts to documenting how existing governance, model-risk, data and ICT controls satisfy each AI Act obligation, and to dealing with two supervisors: the prudential/conduct authority and the market surveillance authority.",
    "useCases": [
      "credit-underwriting",
      "model-risk",
      "governance-general",
      "fair-lending",
      "cybersecurity"
    ],
    "faq": [
      {
        "q": "Did the EBA find conflicts between the AI Act and EU banking rules?",
        "a": "No. Its November 21, 2025 factsheet found no significant contradictions, described the AI Act as complementary to CRD, CRR, DORA and consumer-credit law, and said some effort is needed to integrate the two frameworks."
      },
      {
        "q": "Will the EBA issue new guidelines on AI for banks?",
        "a": "As of the November 2025 factsheet, the EBA has not identified any immediate need to introduce new or revise existing EBA guidelines. It is instead working on a common supervisory approach among national authorities in 2026–27 and providing input to the EU AI Office."
      },
      {
        "q": "Which bank AI use is high-risk under the AI Act?",
        "a": "AI used to evaluate creditworthiness or establish credit scores of natural persons (Annex III(5)(b)). The EBA's mapping exercise focused on this use case."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "eba-2025-d-5384-ai-act-mapping-letter",
    "authority": "eba",
    "shortName": "EBA Chair letter to the Commission on the AI Act mapping exercise (EBA/2025/D/5384)",
    "title": "Outcome of EBA's AI Act mapping exercise — letter to DG FISMA and DG CNECT",
    "aliases": [
      "EBA/2025/D/5384",
      "Outcome of EBA's AI Act mapping exercise",
      "EBA letter to Berrigan and Viola"
    ],
    "docType": "Letter",
    "status": "Final",
    "date": "2025-11-21",
    "link": "https://www.eba.europa.eu/sites/default/files/2025-11/2019d1b5-59f8-4149-ad3b-23cfcd4388a1/EBA%20Chair%20letter%20to%20Mr%20Berrigan%20and%20Mr%20Viola%20on%20outcome%20of%20EBA%E2%80%99s%20AI%20Act%20mapping%20exercise.pdf",
    "appliesTo": "European Commission (DG FISMA, DG CNECT and the AI Office) as input to guidelines on the interplay between the AI Act and EU sectoral law; indirectly EU credit and payment institutions",
    "answerFirst": "On November 21, 2025 EBA Chair José Manuel Campa wrote to the Commission's DG FISMA and DG CNECT (EBA/2025/D/5384) with the outcome of the EBA's AI Act mapping exercise. The letter's annex lists, obligation by obligation, the EU banking and payments provisions that already address AI Act high-risk requirements for credit scoring — noting that DORA extensively covers the Act's cybersecurity and business-continuity requirements and that CRR/CRD already provide a technology-neutral governance and risk-management framework — and offers it as input to the Commission's Article 96(1)(e) guidelines on the interplay between the AI Act and sectoral law.",
    "keyPoints": [
      "Dated November 21, 2025; reference EBA/2025/D/5384; addressed to John Berrigan (DG FISMA) and Roberto Viola (DG CNECT), copied to the AI Office.",
      "Mapping workstream launched January 2025, focused on creditworthiness assessment and credit scoring of natural persons (Annex III(5)(b)).",
      "Points out that the AI Act provides derogations or synergies for some high-risk obligations but not others (human oversight, data governance, cybersecurity) where financial-services law already has extensive requirements.",
      "DORA cited as extensively covering the AI Act's cybersecurity and business-continuity requirements; CRR/CRD as the governance and risk-management base.",
      "Annex maps AI Act obligations to CRR, CRD, the IRB assessment-methodology RTS (2022/439), EBA internal-governance, PD/LGD and loan-origination guidelines, DORA and its RTS (2024/1772, 2024/1774), and CCD2.",
      "Intended to inform Commission guidelines under Article 96(1)(e) and to facilitate management of overlaps."
    ],
    "whatChanged": "This letter is the detailed evidence behind the factsheet's 'no contradictions' conclusion. Its annex is the closest thing banks have to an official crosswalk from each AI Act high-risk obligation to the CRD/CRR, DORA and EBA-guideline provisions that already cover it — useful for building the compliance mapping supervisors will expect, and a marker of what the Commission's interplay guidelines are likely to say.",
    "useCases": [
      "credit-underwriting",
      "governance-general",
      "cybersecurity",
      "model-risk"
    ],
    "faq": [
      {
        "q": "Does DORA cover AI Act cybersecurity requirements for banks?",
        "a": "The EBA's November 2025 letter to the Commission states that the DORA framework extensively covers the cybersecurity and business-continuity requirements set out in the AI Act for high-risk systems, and that CRR/CRD supply the governance and risk-management framework."
      },
      {
        "q": "Where is the EBA's mapping of AI Act obligations to banking rules?",
        "a": "In the annex to EBA Chair letter EBA/2025/D/5384 of November 21, 2025, which lists the sectoral provisions relevant to each AI Act high-risk requirement, published alongside the EBA's AI Act factsheet."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "esas-jc-2026-25-frontier-ai-statement",
    "warning": true,
    "authority": "eba",
    "shortName": "ESA Statement on ICT risks from frontier AI models (JC 2026 25)",
    "title": "ESA Statement: Toward a consistent and risk-based approach for ICT risks from frontier AI models",
    "aliases": [
      "JC 2026 25",
      "ESA Statement on frontier AI models",
      "ESAs statement on frontier AI",
      "frontier AI models statement"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2026-07-31",
    "effectiveDate": "2026-07-31",
    "link": "https://www.eba.europa.eu/publications-and-media/press-releases/eba-eiopa-and-esma-call-enhanced-governance-and-consistent-supervision-mitigate-ict-risks-frontier",
    "appliesTo": "All financial entities subject to DORA — banks, payment institutions, insurers, investment firms — and their competent authorities; critical ICT third-party providers under DORA oversight",
    "answerFirst": "On July 31, 2026 the EBA, EIOPA and ESMA published joint statement JC 2026 25 on ICT risks from frontier AI models, warning that highly capable AI models sharply accelerate vulnerability discovery and exploitation and could create systemic cyber risk. It tells financial entities to adjust ICT risk-management processes under DORA around three strategies — prevention, detection and management — proportionately to their size and risk profile (DORA Art. 4), and says management bodies must own the risk and revisit risk-appetite metrics. The ESAs as Lead Overseers are embedding frontier-AI risk into DORA oversight of critical ICT third-party providers for the 2027 Oversight Plan.",
    "keyPoints": [
      "Published July 31, 2026 as Joint Committee document JC 2026 25; follows the ESRB warning of June 25, 2026 (ESRB/2026/3), ENISA recommendations and the Commission's July 7, 2026 Action Plan on Cybersecurity and AI.",
      "Positions DORA and the AI Act (GPAI models with systemic risk) as the existing legal foundation; introduces no new requirements but asks entities to act fast and proactively.",
      "Prevention: continuously updated inventories of IT assets including AI/ML components, secure-by-design, proactive patching, dependency risk assessment.",
      "Detection: scale vulnerability discovery, move from periodic to continuous monitoring, enhance SOC and red-teaming with AI tools.",
      "Management: resilience testing, disaster recovery and backup, adapting risk frameworks and governance to AI-assisted threats and multi-system failures.",
      "Management bodies must ensure governance and accountability, response plans and investment; risk-appetite frameworks should add metrics and tolerance thresholds for frontier-AI risk.",
      "Supervisors to use the statement in supervisory dialogue; the ECB has pressed significant institutions' CEOs to close open ICT findings without delay.",
      "Lead Overseers engaged critical ICT third-party providers and are embedding AI risk into the Oversight Examination Methodology and 2027 oversight activities."
    ],
    "whatChanged": "This is the first EU-level supervisory statement treating frontier AI as a cyber-threat multiplier rather than a model-governance issue. It converts DORA's technology-neutral ICT risk rules into concrete expectations — asset inventories including AI components, continuous monitoring, AI-enhanced red teaming, refreshed risk appetite — that supervisors will now test in dialogue and examinations, and it extends the same lens to cloud and AI vendors under DORA oversight.",
    "useCases": [
      "cybersecurity",
      "third-party-vendors",
      "governance-general",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "Does the ESA frontier AI statement create new DORA obligations?",
        "a": "No. JC 2026 25 states that DORA and the AI Act already provide the legal foundation and that its annex does not establish additional requirements. It sets out expected mitigation strategies — prevention, detection, management — that supervisors will use in dialogue with financial entities."
      },
      {
        "q": "What should a bank's board do about frontier AI cyber risk?",
        "a": "Per the July 31, 2026 ESA statement, management bodies should establish governance and accountability for frontier-AI-driven cyber risk, prepare timely response plans, dedicate investment to cyber resilience, and review the risk appetite framework to add metrics and tolerance thresholds for both internal use of such models and indirect exposure to them."
      },
      {
        "q": "Are cloud and AI vendors covered by the frontier AI statement?",
        "a": "Yes. The ESAs as DORA Lead Overseers have engaged critical ICT third-party providers on frontier-AI risks and are embedding these risks into the Oversight Examination Methodology and the 2027 Oversight Plan."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "uk-dp5-22-ai-and-machine-learning",
    "authority": "uk",
    "shortName": "DP5/22",
    "title": "Discussion Paper 5/22: Artificial Intelligence and Machine Learning",
    "aliases": [
      "DP5/22",
      "Discussion Paper 5/22",
      "BoE AI discussion paper"
    ],
    "docType": "Consultation",
    "status": "Final",
    "date": "2022-10-11",
    "commentDeadline": "2023-02-10",
    "link": "https://www.bankofengland.co.uk/prudential-regulation/publication/2022/october/artificial-intelligence",
    "appliesTo": "All PRA- and FCA-regulated firms, including banks, building societies, investment firms and insurers (a discussion paper, not a rule)",
    "answerFirst": "DP5/22 is the joint Bank of England, PRA and FCA discussion paper published on 11 October 2022 that asked whether the UK's existing financial regulation is sufficient for AI and machine learning. It set out how current rules — the Senior Managers regime, model risk management, operational resilience, outsourcing, data protection and conduct rules — already apply to AI, and asked whether a regulatory definition of AI or new AI-specific requirements were needed. Responses closed on 10 February 2023 and were summarised in FS2/23.",
    "keyPoints": [
      "Joint BoE/PRA/FCA paper following the AI Public-Private Forum's February 2022 final report.",
      "Maps AI use to existing frameworks: SM&CR accountability, model risk management, operational resilience, third-party/outsourcing rules, Consumer Duty and conduct rules, and UK GDPR.",
      "Asks whether a regulatory definition of AI would help; respondents later said no.",
      "Raises data risks (bias, fairness, protected characteristics), model risks (explainability, robustness) and governance risks as the three main risk clusters.",
      "Explicitly technology-agnostic: considers whether AI-specific regulation is needed rather than proposing it.",
      "Comment period closed 10 February 2023; 54 responses received."
    ],
    "whatChanged": "DP5/22 is the origin of the UK's current posture. It framed AI as a question of whether existing rules suffice, and the answer that came back through FS2/23 — that they largely do — has anchored the BoE, PRA and FCA's technology-agnostic approach ever since. For banks it remains the clearest official map of which UK rulebooks an AI system falls under.",
    "useCases": [
      "governance-general",
      "model-risk",
      "fair-lending",
      "third-party-vendors",
      "data-privacy"
    ],
    "faq": [
      {
        "q": "Did DP5/22 propose new AI rules for UK banks?",
        "a": "No. It was a discussion paper asking whether existing regulation was sufficient and how it might evolve; it made no policy proposals."
      },
      {
        "q": "Which UK rules did DP5/22 say already apply to AI?",
        "a": "The Senior Managers and Certification Regime, model risk management expectations, operational resilience and outsourcing rules, conduct rules including the Consumer Duty, and UK data protection law."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "uk-ml-in-financial-services-survey-2022",
    "authority": "uk",
    "shortName": "2022 BoE/FCA ML survey",
    "title": "Machine learning in UK financial services (2022 survey)",
    "aliases": [
      "Machine learning in UK financial services",
      "2022 BoE/FCA machine learning survey"
    ],
    "docType": "Survey",
    "status": "Final",
    "date": "2022-10-11",
    "supersededBy": "uk-ai-in-financial-services-survey-2024",
    "link": "https://www.bankofengland.co.uk/report/2022/machine-learning-in-uk-financial-services",
    "appliesTo": "Voluntary survey of BoE- and FCA-regulated firms; no obligations",
    "answerFirst": "The second joint Bank of England and FCA survey, published on 11 October 2022 alongside DP5/22, found that 58% of UK financial services firms were using machine learning with a further 14% planning to within three years. It reported that 17% of ML use cases were third-party implementations and established the baseline the 2024 survey measured against.",
    "keyPoints": [
      "Second edition of the joint BoE/FCA survey, following the 2019 survey.",
      "58% of respondent firms used ML; 14% more planned to within three years.",
      "17% of use cases were third-party implementations (rising to a third by 2024).",
      "Published the same day as DP5/22 as the evidence base for the discussion paper.",
      "Used to track adoption, governance and perceived benefits and risks across banking, insurance and markets."
    ],
    "whatChanged": "It gave UK regulators the first comparable time series on ML adoption and established the survey as the UK's primary AI monitoring tool, a role the 2024 and 2026 editions have continued.",
    "useCases": [
      "governance-general",
      "model-risk",
      "third-party-vendors"
    ],
    "faq": [
      {
        "q": "How many UK firms used machine learning in 2022?",
        "a": "58% of respondents to the joint BoE/FCA survey, with a further 14% planning to within three years."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "pra-ss1-23-model-risk-management",
    "authority": "uk",
    "shortName": "PRA SS1/23",
    "title": "Supervisory Statement 1/23: Model risk management principles for banks",
    "aliases": [
      "SS1/23",
      "PS6/23",
      "PRA model risk management principles",
      "Model risk management principles for banks"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2023-05-17",
    "effectiveDate": "2024-05-17",
    "link": "https://www.bankofengland.co.uk/prudential-regulation/publication/2023/may/model-risk-management-principles-for-banks-ss",
    "appliesTo": "UK-incorporated banks, building societies and PRA-designated investment firms with internal-model approval for credit risk (IRB), market risk (IMA) or counterparty credit risk (IMM); other firms are expected to apply it proportionately",
    "answerFirst": "SS1/23, published with Policy Statement PS6/23 on 17 May 2023 and effective from 17 May 2024, is the PRA's model risk management standard and the UK's closest equivalent to SR 11-7. It sets five principles — model identification and risk classification, governance, development and use, independent validation, and risk mitigants — covering all models used to inform business decisions, including vendor models, and includes a sub-principle on identifying and managing risks from AI and machine learning techniques. It applies formally to banks with internal-model permissions and assigns overall MRM accountability to a named Senior Management Function holder.",
    "keyPoints": [
      "Five principles: (1) model identification and model risk classification, (2) governance, (3) model development, implementation and use, (4) independent model validation, (5) model risk mitigants.",
      "Scope is all models informing business decisions, regardless of technology, whether in-house or vendor-supplied, including models used for financial reporting.",
      "Sub-principle requires firms to identify and manage the risks of AI in modelling techniques such as machine learning to the extent that it applies to models generally.",
      "Accountability for the overall MRM framework must be allocated to the most appropriate SMF holder under the Senior Managers regime.",
      "Effectiveness of MRM for financial reporting must be reported to the audit committee.",
      "Proportionate implementation across model tiers and across firms; formal scope is internal-model banks, with others expected to apply it proportionately.",
      "In October 2025 the PRA held CRO roundtables with 21 firms on applying SS1/23 to AI/ML, covering risk appetite, model tiering, explainability, overfitting, validation and monitoring."
    ],
    "whatChanged": "Before SS1/23 the PRA had no consolidated model-risk standard; UK banks often borrowed SR 11-7. SS1/23 made model risk a standalone discipline with named senior-manager accountability, and by deliberately covering AI/ML and vendor models it became the main channel through which the PRA supervises AI in banks. The BoE/PRA told government in April 2026 they intend to build on it further in 2026 using supervisory insights on good practice.",
    "useCases": [
      "model-risk",
      "credit-underwriting",
      "third-party-vendors",
      "generative-agentic-ai",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Does SS1/23 apply to machine learning and AI models?",
        "a": "Yes. It covers all models used to inform business decisions regardless of technology and includes a sub-principle on identifying and managing AI/ML risks; the PRA has since run roundtables on applying it to AI."
      },
      {
        "q": "Which banks must comply with SS1/23?",
        "a": "Formally, UK-incorporated banks, building societies and PRA-designated investment firms with IRB, IMA or IMM internal-model approvals; other firms are expected to apply the principles proportionately."
      },
      {
        "q": "How does SS1/23 compare with SR 11-7?",
        "a": "Both are principles-based supervisory statements on model risk covering development, validation and governance; SS1/23 additionally names an accountable SMF holder, requires audit-committee reporting, and explicitly addresses AI/ML."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "uk-fs2-23-ai-and-machine-learning",
    "authority": "uk",
    "shortName": "FS2/23",
    "title": "Feedback Statement 2/23: Artificial Intelligence and Machine Learning",
    "aliases": [
      "FS2/23",
      "Feedback Statement 2/23",
      "FS2/23 feedback statement"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2023-10-26",
    "link": "https://www.bankofengland.co.uk/prudential-regulation/publication/2023/october/artificial-intelligence-and-machine-learning",
    "appliesTo": "All PRA- and FCA-regulated firms (summary of consultation responses; no policy proposals)",
    "answerFirst": "FS2/23, published on 26 October 2023, summarises the 54 responses to DP5/22 and records the industry consensus that a regulatory definition of AI would not be useful and that the UK should rely on principles-based, technology-agnostic regulation. Respondents asked for periodically updated 'live' guidance, more coordination between regulators, and clearer expectations on third-party models and data. The statement contains no policy proposals.",
    "keyPoints": [
      "54 responses; industry bodies were almost a quarter and banks a further fifth of respondents.",
      "A regulatory definition of AI was judged unhelpful; a risk-based or characteristics-based approach was preferred.",
      "Respondents wanted 'live' regulatory guidance and best-practice examples updated as capabilities change.",
      "The regulatory landscape for AI was seen as complex and fragmented, especially data regulation; more domestic and international alignment requested.",
      "Consumer outcomes, fairness and bias were identified as the key focus for regulation and supervision.",
      "Increasing use of third-party models and data was flagged as a concern needing more guidance.",
      "The AI Public-Private Forum was cited as a template for ongoing engagement — later realised as the 2025 AI Consortium."
    ],
    "whatChanged": "FS2/23 turned DP5/22's question into the UK's settled answer: no AI rulebook, supervise through existing frameworks, monitor via surveys and industry forums. Every later UK document — SS1/23's AI sub-principle, the FCA's 2024 AI Update, the 2026 letters to government — cites this feedback as the basis for staying technology-agnostic.",
    "useCases": [
      "governance-general",
      "model-risk",
      "third-party-vendors",
      "fair-lending"
    ],
    "faq": [
      {
        "q": "What did FS2/23 conclude about AI regulation in the UK?",
        "a": "That existing principles-based frameworks largely suffice, a regulatory definition of AI is not useful, and regulators should focus on consumer outcomes, third-party risk and coordination rather than new AI-specific rules."
      },
      {
        "q": "Did FS2/23 introduce any requirements?",
        "a": "No. It is a summary of responses and explicitly states it contains no policy proposals."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fca-ai-update-2024",
    "authority": "uk",
    "shortName": "FCA AI Update (Apr 2024)",
    "title": "Artificial Intelligence (AI) update – further to the Government's response to the AI White Paper",
    "aliases": [
      "FCA AI Update",
      "FCA AI update April 2024",
      "AI update further to the AI White Paper"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2024-04-22",
    "link": "https://www.fca.org.uk/publications/corporate-documents/artificial-intelligence-ai-update-further-governments-response-ai-white-paper",
    "appliesTo": "All FCA-authorised firms",
    "answerFirst": "The FCA's AI Update, published 22 April 2024 in response to the UK government's AI White Paper follow-up, sets out how the FCA's existing rules apply to firms' use of AI without creating new AI-specific requirements. It maps the government's five AI principles — safety, transparency, fairness, accountability and contestability — onto the Consumer Duty, the Senior Managers and Certification Regime, operational resilience and outsourcing rules, and the Principles for Businesses, and describes the FCA's technology-agnostic, principles-based, outcomes-focused approach.",
    "keyPoints": [
      "Published 22 April 2024 as the FCA's statutory-style response to the government's pro-innovation AI regulation framework.",
      "Confirms a technology-agnostic, principles-based and outcomes-focused approach — no AI-specific rulebook.",
      "Maps the five cross-sector AI principles to existing FCA regimes: Consumer Duty, SM&CR, Threshold Conditions, operational resilience (SYSC 15A), outsourcing and third-party rules, and the Principles for Businesses.",
      "Highlights the FCA's own AI monitoring and engagement: the joint BoE surveys, the Digital Regulation Cooperation Forum, and the AI Public-Private Forum.",
      "Flags priorities for the following 12 months including further understanding of AI deployment, testing and collaboration with the Bank of England and other regulators.",
      "Foundation for later FCA initiatives — the AI Lab (October 2024), Supercharged Sandbox and AI Live Testing."
    ],
    "whatChanged": "It is the FCA's clearest single statement that firms deploying AI are already regulated through the Consumer Duty and SM&CR, and it is the document the Treasury Committee pointed to in January 2026 when asking the FCA for more practical guidance on how those regimes apply to AI harms.",
    "useCases": [
      "governance-general",
      "customer-chatbots",
      "fair-lending",
      "third-party-vendors",
      "credit-underwriting"
    ],
    "faq": [
      {
        "q": "Does the FCA have AI-specific rules?",
        "a": "No. Its April 2024 AI Update explains that the Consumer Duty, SM&CR, operational resilience and outsourcing rules already govern firms' use of AI."
      },
      {
        "q": "Who is accountable for AI decisions at an FCA-regulated firm?",
        "a": "Senior managers under the SM&CR; the AI Update stresses that accountability for AI outcomes sits with the relevant Senior Management Function holders."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "uk-ai-in-financial-services-survey-2024",
    "authority": "uk",
    "shortName": "2024 BoE/FCA AI survey",
    "title": "Artificial intelligence in UK financial services – 2024",
    "aliases": [
      "Artificial intelligence in UK financial services 2024",
      "2024 BoE/FCA AI survey",
      "third BoE/FCA AI survey"
    ],
    "docType": "Survey",
    "status": "Final",
    "date": "2024-11-21",
    "supersedes": [
      "uk-ml-in-financial-services-survey-2022"
    ],
    "link": "https://www.bankofengland.co.uk/report/2024/artificial-intelligence-in-uk-financial-services-2024",
    "appliesTo": "Voluntary survey of BoE- and FCA-regulated firms; no obligations",
    "answerFirst": "The third joint BoE/FCA survey, published 21 November 2024, found 75% of UK financial services firms already using AI and a further 10% planning to within three years, up from 58% and 14% in 2022. Foundation models made up 17% of all AI use cases, a third of use cases were third-party implementations, and the top three providers accounted for 73% of cloud, 44% of model and 33% of data providers. Only 2% of use cases were fully autonomous, and 46% of firms said they had only partial understanding of the AI they use.",
    "keyPoints": [
      "75% of firms use AI; 10% more plan to within three years.",
      "Foundation models are 17% of all AI use cases.",
      "One third of use cases are third-party implementations (17% in 2022); top-three provider concentration of 73% (cloud), 44% (models), 33% (data).",
      "55% of use cases involve some automated decision-making; 24% of those are semi-autonomous; 2% fully autonomous.",
      "62% of use cases rated low materiality; 16% high materiality.",
      "46% of firms report only partial understanding of their AI, mainly due to third-party models.",
      "Top current benefits: data and analytical insight, AML and fraud, cybersecurity; four of the top five risks are data-related; cybersecurity is the top perceived systemic risk.",
      "Largest perceived regulatory constraints: data protection and privacy, then resilience/cyber/third-party rules and the Consumer Duty; 84% of firms have an accountable person for AI."
    ],
    "whatChanged": "The 2024 survey documented the shift from bespoke ML to foundation models and vendor-supplied AI, and put concentration numbers on the third-party dependence that now drives the UK debate over designating AI and cloud providers as Critical Third Parties. It is the dataset the FPC used for its April 2025 financial-stability assessment.",
    "useCases": [
      "governance-general",
      "third-party-vendors",
      "generative-agentic-ai",
      "aml-kyc",
      "fraud",
      "cybersecurity"
    ],
    "faq": [
      {
        "q": "What share of UK financial firms use AI according to the Bank of England?",
        "a": "75% of respondents to the 2024 BoE/FCA survey, with a further 10% planning to adopt within three years."
      },
      {
        "q": "How concentrated is third-party AI provision in UK finance?",
        "a": "The 2024 survey found the top three providers accounted for 73% of reported cloud providers, 44% of model providers and 33% of data providers."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "boe-fpc-fsif-ai-financial-system-2025",
    "warning": true,
    "authority": "uk",
    "shortName": "FPC Financial Stability in Focus: AI (Apr 2025)",
    "title": "Financial Stability in Focus: Artificial intelligence in the financial system",
    "aliases": [
      "Financial Stability in Focus: Artificial intelligence",
      "FPC AI report April 2025",
      "FSiF on AI"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2025-04-09",
    "link": "https://www.bankofengland.co.uk/financial-stability-in-focus/2025/april-2025",
    "appliesTo": "Macroprudential assessment covering banks, insurers, market participants and AI service providers; no direct obligations",
    "answerFirst": "The Bank of England's Financial Policy Committee published its first dedicated assessment of AI and financial stability on 9 April 2025. It identifies four risk channels — greater use of AI in banks' and insurers' core financial decision-making such as credit and insurance underwriting, greater use of AI in financial markets, operational risks from concentrated AI service providers, and a changing cyber threat environment — and commits the FPC to monitoring each. In its April 2026 Record the FPC judged that generative and agentic AI were not yet deployed at a systemically risky scale, but asked the Bank and FCA for further work on agentic AI in payments and markets.",
    "keyPoints": [
      "Four channels: (1) AI in core financial decision-making (credit and insurance underwriting), (2) AI in financial markets, (3) operational risk from AI service providers, (4) AI-driven cyber threats.",
      "Notes that AI could shift capital allocation by enabling new data sources in underwriting, with risks of correlated models and herding.",
      "Warns of concentration in a small number of foundation-model and cloud providers, linking to the Critical Third Parties regime.",
      "Sets out the FPC's monitoring approach, drawing on the BoE/FCA surveys and the AI Consortium.",
      "Followed up in the FPC's October 2025 and April 2026 Records; the April 2026 Record judged agentic AI presents particular risks spanning several channels."
    ],
    "whatChanged": "This moved UK AI oversight from firm-level supervision to a system-level framework. It is the reference point the FPC and BoE now use to decide whether AI adoption warrants macroprudential intervention, and it explains why agentic AI and third-party concentration are the two issues UK regulators are watching most closely.",
    "useCases": [
      "governance-general",
      "trading-markets",
      "third-party-vendors",
      "cybersecurity",
      "credit-underwriting",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "What are the Bank of England's four AI financial-stability risk channels?",
        "a": "AI in banks' and insurers' core decision-making, AI in financial markets, operational risk from AI service providers, and AI-driven changes to the cyber threat environment."
      },
      {
        "q": "Does the FPC think AI is a systemic risk today?",
        "a": "As of April 2026, no — it judged that generative and agentic AI are not yet deployed in a manner presenting systemic risk, but expects risks to rise, potentially rapidly."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fca-fs25-5-ai-live-testing",
    "authority": "uk",
    "shortName": "FCA FS25/5",
    "title": "FS25/5: AI Live Testing",
    "aliases": [
      "FS25/5",
      "AI Live Testing feedback statement",
      "FCA AI Live Testing"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2025-09-09",
    "link": "https://www.fca.org.uk/publications/feedback-statements/fs25-5-ai-live-testing",
    "appliesTo": "FCA-authorised firms with mature AI proofs of concept ready for live deployment (voluntary programme)",
    "answerFirst": "FS25/5, published 9 September 2025, is the FCA's feedback statement on its proposal, first announced on 29 April 2025, to run AI Live Testing — a programme in which firms deploy AI systems in live UK markets with tailored regulatory and technical support and jointly evaluate fairness, accuracy, consumer outcomes and operational resilience. The first cohort (NatWest, Monzo, Santander, Scottish Widows, Gain Credit, Homeprotect and Snorkl) began in October 2025 with technical partner Advai; a second cohort of eight firms including Barclays, Experian, Lloyds Banking Group, UBS and GoCardless was announced 21 April 2026, with an evaluation report due in Q1 2027.",
    "keyPoints": [
      "AI Live Testing sits inside the FCA AI Lab (launched October 2024) alongside the Supercharged Sandbox for earlier-stage experimentation.",
      "Targets firms with mature proofs of concept ready for controlled live deployment, not research projects.",
      "Evaluation focuses on evaluation frameworks, live monitoring, governance and risk management, and consumer outcomes.",
      "First cohort (from October 2025) use cases: debt resolution, financial advice, customer engagement, complaints handling, spending and saving guidance.",
      "Second cohort applications ran 19 January to 24 March 2026; testing from late April 2026; eight firms including Barclays, Experian, Lloyds Banking Group (Scottish Widows), UBS, GoCardless, Coadjute, Aereve and Palindrome.",
      "Testing concludes by end-2026 with an FCA evaluation report in Q1 2027.",
      "The BoE/PRA told government in April 2026 that firms saw the FCA's Live Testing and Supercharged Sandbox as sufficient, so no separate PRA sandbox is planned."
    ],
    "whatChanged": "Rather than write AI rules, the FCA is generating supervisory expectations by watching real deployments. The published evaluation framework and the Q1 2027 report are likely to become de facto good-practice benchmarks for customer-facing AI in UK retail banking.",
    "useCases": [
      "customer-chatbots",
      "credit-underwriting",
      "governance-general",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "What is FCA AI Live Testing?",
        "a": "A programme in which authorised firms deploy AI in live UK markets under FCA supervision with technical partner Advai, jointly evaluating fairness, accuracy, consumer outcomes and resilience. Cohort one started October 2025; cohort two in April 2026."
      },
      {
        "q": "Which banks are in FCA AI Live Testing?",
        "a": "Cohort one included NatWest, Monzo, Santander and Scottish Widows; cohort two includes Barclays, Lloyds Banking Group (Scottish Widows), UBS, Experian and GoCardless."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "pra-mrm-roundtable-ai-ml-2025",
    "authority": "uk",
    "shortName": "PRA AI/ML model-risk roundtable (Nov 2025)",
    "title": "The PRA holds model risk management roundtable on artificial intelligence and machine learning technologies",
    "aliases": [
      "PRA model risk management roundtable on AI",
      "PRA CRO roundtable on AI and ML",
      "SS1/23 AI roundtable"
    ],
    "docType": "Guidance",
    "status": "Final",
    "date": "2025-11-24",
    "link": "https://www.bankofengland.co.uk/prudential-regulation/publication/2025/november/pra-holds-model-risk-management-roundtable-on-ai",
    "appliesTo": "PRA-regulated banks applying SS1/23, particularly those with internal-model approvals",
    "answerFirst": "On 24 November 2025 the PRA published the slides from two Chief Risk Officer roundtables held on 20 and 22 October 2025 with 21 PRA-regulated firms on applying the SS1/23 model risk management principles to AI and machine learning. The PRA set out its thinking on risk appetite for AI models, model tiering, explainability and interpretability, data and overfitting, independent validation, and ongoing monitoring — the closest thing to AI-specific model-risk guidance the PRA has issued.",
    "keyPoints": [
      "Two CRO roundtables, 20 and 22 October 2025, 21 firms; presentation slides published on the PRA site.",
      "Frames SS1/23 as the supervisory expectation for AI/ML models, not a separate regime.",
      "Topics: risk appetite, model tiering and materiality, explainability and interpretability, data quality and overfitting, independent validation, ongoing model monitoring.",
      "Cited by the BoE/PRA in both 1 April 2026 letters as evidence of proactive AI supervision.",
      "The PRA said it intends to build further on SS1/23 for AI in 2026 using these supervisory insights."
    ],
    "whatChanged": "It signals how PRA supervisors will test AI models against SS1/23 in the 2026 supervisory cycle, where AI adoption is a named priority. Banks should expect questions on tiering of generative and vendor models, validation of non-deterministic outputs, and monitoring for drift.",
    "useCases": [
      "model-risk",
      "generative-agentic-ai",
      "credit-underwriting",
      "third-party-vendors"
    ],
    "faq": [
      {
        "q": "Has the PRA issued guidance on AI under SS1/23?",
        "a": "Not formal guidance, but in November 2025 it published roundtable slides setting out its views on risk appetite, tiering, explainability, data, validation and monitoring for AI/ML models under SS1/23, and has said it will build on SS1/23 in 2026."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "gov-uk-dsit-dbt-safe-ai-innovation-letter-2026",
    "authority": "uk",
    "shortName": "DSIT/DBT strategic letters to regulators (Jan 2026)",
    "title": "How will regulators enable safe AI-powered innovation: joint letter from DSIT Secretary of State and DBT Secretary of State",
    "aliases": [
      "DSIT and DBT joint letter to regulators",
      "strategic letters to 19 regulators",
      "safe AI-powered innovation letter"
    ],
    "docType": "Letter",
    "status": "Final",
    "date": "2026-01-28",
    "link": "https://www.gov.uk/government/publications/how-will-regulators-enable-safe-ai-powered-innovation-joint-letter-from-dsit-secretary-of-state-and-dbt-secretary-of-state",
    "appliesTo": "19 UK regulators including the FCA, Bank of England and PRA (indirectly, all firms they regulate)",
    "answerFirst": "On 28 January 2026 Liz Kendall (DSIT) and Peter Kyle (DBT), with relevant departmental Secretaries of State including the Chancellor, wrote to 19 regulators — including the FCA, Bank of England and PRA — asking each to publish by May 2026 a plan for enabling safe AI-powered innovation in its sector and to report annually on actions, outcomes and metrics. Plans were to clarify how existing obligations apply to AI use cases, make approval processes compatible with dynamic AI products, use sandboxes, and consider making anonymised or synthetic datasets available.",
    "keyPoints": [
      "Sent 28 January 2026 to 19 regulators; financial services regulators were asked to work with HM Treasury and DSIT.",
      "Asks for a published plan in the first half of 2026 and annual reporting on how regulation enables AI-driven innovation and growth.",
      "Plans should clarify how existing obligations apply to AI, ensure approvals fit dynamic AI products, and act proportionately and transparently.",
      "Encourages sandboxes and access to significant anonymised or synthetic datasets.",
      "The BoE and PRA replied on 1 April 2026; the FCA's approach is reflected in its 2026/27 work programme and AI Lab initiatives.",
      "Part of the government's growth agenda; complemented by HM Treasury's Financial Services AI Adoption Plan of 14 July 2026."
    ],
    "whatChanged": "The letters put political weight behind a pro-adoption stance. UK financial regulators are now accountable to ministers for removing barriers to AI, which explains the emphasis on sandboxes and live testing rather than new guardrails, even as the Treasury Committee pushes the other way.",
    "useCases": [
      "governance-general"
    ],
    "faq": [
      {
        "q": "What did the UK government ask financial regulators to do on AI in 2026?",
        "a": "Publish a plan by May 2026 for enabling safe AI-powered innovation, clarify how existing rules apply to AI, use sandboxes, and report annually on outcomes."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "boe-pra-response-tsc-ai-inquiry-2026",
    "authority": "uk",
    "shortName": "BoE response to Treasury Committee AI inquiry (Apr 2026)",
    "title": "Response to TSC inquiry report on AI in financial services",
    "aliases": [
      "Response to TSC inquiry report on AI in financial services",
      "Bank of England response to Treasury Committee on AI",
      "TSC AI inquiry response"
    ],
    "docType": "Letter",
    "status": "Final",
    "date": "2026-04-01",
    "link": "https://www.bankofengland.co.uk/-/media/boe/files/letter/2026/response-to-tsc-inquiry-report-on-ai-in-financial-services",
    "appliesTo": "Statement of the Bank of England and PRA's approach; relevant to all PRA-regulated firms",
    "answerFirst": "On 1 April 2026 Deputy Governor Sarah Breeden replied to the Treasury Select Committee's 20 January 2026 report on AI in financial services, rejecting the Committee's 'wait and see' characterisation while reaffirming a technology-agnostic, outcomes-focused approach. The letter commits the Bank and PRA to a 2026 programme — AI as a PRA supervisory priority, building further on SS1/23, the fourth biennial AI survey, an AI Consortium report, repeat industry roundtables, and FPC work on agentic AI — and says the Bank 'will not hesitate to act when justified' and keeps the need for further guardrails under review.",
    "keyPoints": [
      "Responds to the TSC's January 2026 report, which had urged FCA guidance on Consumer Duty and SM&CR for AI by end-2026 and designation of major AI and cloud providers as Critical Third Parties.",
      "Disputes the 'wait and see' label; describes DP5/22, FS2/23, SS1/23 and the October 2025 CRO roundtables as proactive supervision.",
      "AI adoption is a PRA 2026 supervisory priority; PRA intends to build on SS1/23 in 2026.",
      "FPC's April 2026 Record: generative and agentic AI not yet systemically risky, but further work on agentic AI in payments and markets requested.",
      "AI Consortium (established May 2025 with the FCA) to publish a report in 2026 on third-party concentration, AI edge cases in credit and trading, generative-AI explainability, and market contagion.",
      "Cross Market Operational Resilience Group AI Taskforce outputs cited: AI Baseline Guidance Review (May 2025), a Shared Responsibility Model, and two AI-enabled severe-but-plausible cyber scenarios.",
      "Flags financial-stability risks from an AI-related asset-price correction and rising debt financing of AI infrastructure."
    ],
    "whatChanged": "It is the most complete statement of where UK prudential AI policy stands in 2026: no rulebook, but a dense programme of supervision, monitoring and public-private work, with an explicit reservation of the right to add guardrails. For banks it confirms that 2026 supervisory dialogue will probe AI governance in detail.",
    "useCases": [
      "governance-general",
      "model-risk",
      "third-party-vendors",
      "generative-agentic-ai",
      "trading-markets",
      "cybersecurity"
    ],
    "faq": [
      {
        "q": "Did the Bank of England agree to new AI rules after the Treasury Committee's report?",
        "a": "No. It reaffirmed its technology-agnostic approach on 1 April 2026 but committed to building on SS1/23, running the 2026 survey, publishing an AI Consortium report, and keeping the need for further guardrails under review."
      },
      {
        "q": "What did the Treasury Committee recommend on AI in January 2026?",
        "a": "That the FCA publish practical guidance by end-2026 on applying the Consumer Duty and SM&CR to AI, and that HM Treasury designate major AI and cloud providers as Critical Third Parties."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "boe-pra-safe-ai-innovation-plan-letter-2026",
    "authority": "uk",
    "shortName": "BoE/PRA plan for safe AI innovation (Apr 2026)",
    "title": "Letter from Sarah Breeden and Sam Woods to the Chancellor and Secretaries of State on enabling safe AI innovation",
    "aliases": [
      "letter from Sarah Breeden and Sam Woods to the Chancellor",
      "BoE and PRA plan for safe AI innovation",
      "BoE/PRA response to HMT, DSIT and DBT on AI"
    ],
    "docType": "Letter",
    "status": "Final",
    "date": "2026-04-01",
    "link": "https://www.bankofengland.co.uk/-/media/boe/files/letter/2026/letter-from-sarah-breeden-sam-woods-to-chancellor.pdf",
    "appliesTo": "Statement of the Bank of England and PRA's approach; relevant to all PRA-regulated firms",
    "answerFirst": "On 1 April 2026 Sarah Breeden and Sam Woods answered the government's 28 January 2026 request with the Bank of England and PRA's plan for enabling safe AI innovation. The plan is to keep regulation technology-agnostic and outcomes-focused, build on SS1/23 in 2026, treat AI adoption as a PRA supervisory priority, run the fourth BoE/FCA AI survey, publish an AI Consortium report, repeat sector roundtables, and report annually. Roundtable participants told the PRA they saw no need yet for detailed AI-specific rules or a PRA sandbox, viewing the FCA's Supercharged Sandbox and AI Live Testing as sufficient.",
    "keyPoints": [
      "Responds to the 28 January 2026 letter from the Chancellor and the DSIT and DBT Secretaries of State.",
      "Commits to a plan and timeline in the first half of 2026 and to annual reporting on how regulation enables AI-driven growth.",
      "Late-2025 roundtables with challenger and UK banks, G-SIBs and insurers: industry supports the existing PRA framework; most saw no need yet for AI-specific guidance or a PRA sandbox.",
      "PRA to build further on SS1/23 in 2026; AI adoption a 2026 supervisory priority.",
      "International work: FSB sound practices on AI (chaired by Governor Bailey), IAIS AI workstreams co-chaired by the PRA, G7 cyber expert group, AI Security Institute and DRCF collaboration.",
      "Bank's own AI use: predictive analytics, AI assistants, and PRA exploration of LLMs for supervisory data extraction."
    ],
    "whatChanged": "Together with the same-day TSC response, this is the UK prudential regulators' formal 2026 AI plan. It confirms there will be no PRA AI sandbox and no AI rulebook, and that the pressure to move faster on AI will be met through SS1/23 enhancements and supervisory dialogue rather than new rules.",
    "useCases": [
      "governance-general",
      "model-risk",
      "generative-agentic-ai",
      "third-party-vendors"
    ],
    "faq": [
      {
        "q": "Will the PRA launch an AI sandbox?",
        "a": "No. In its 1 April 2026 letter the PRA said most roundtable participants saw no case for a Bank or PRA sandbox, with the FCA's Supercharged Sandbox and AI Live Testing seen as sufficient."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "uk-joint-statement-frontier-ai-cyber-resilience-2026",
    "warning": true,
    "authority": "uk",
    "shortName": "BoE/FCA/HMT joint statement on frontier AI and cyber resilience (May 2026)",
    "title": "The Bank, FCA and HM Treasury joint statement on Frontier AI models and cyber resilience",
    "aliases": [
      "joint statement on Frontier AI models and cyber resilience",
      "frontier AI cyber resilience statement",
      "BoE FCA HM Treasury frontier AI statement"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2026-05-15",
    "effectiveDate": "2026-05-15",
    "link": "https://www.bankofengland.co.uk/news/2026/may/boe-fca-and-hm-treasury-joint-statement-on-frontier-ai-models-and-cyber-resilience",
    "appliesTo": "All PRA- and FCA-regulated firms and financial market infrastructures, under existing operational-resilience rules",
    "answerFirst": "On 15 May 2026 the Bank of England, FCA and HM Treasury jointly warned that frontier AI models' cyber capabilities already exceed what a skilled practitioner could achieve, at higher speed, scale and lower cost, and that regulated firms and FMIs must act under existing operational-resilience rules to plan for and mitigate the resulting threats. It sets expectations across governance and strategy, vulnerability identification and remediation at scale, third-party and open-source supply-chain risk, protection, detection and response, and says firms that have underinvested in cyber fundamentals will become progressively more exposed.",
    "keyPoints": [
      "Published 15 May 2026 on both the Bank of England and FCA sites; addressed to regulated firms and FMIs.",
      "Boards and senior management must understand frontier AI risk; investment should reflect the threat, including end-of-life and unsupported systems, and insurance should be reviewed.",
      "Firms should triage, prioritise and remediate vulnerabilities more quickly, more frequently and at scale, using automation where appropriate.",
      "Third-party and supply-chain risk, including open-source software, must be identified, monitored and remediated at scale.",
      "Protection expectations: access management, network security and data protection to shrink the attack surface a frontier model could reach.",
      "Creates no new rule; it interprets existing operational-resilience and outsourcing expectations in light of frontier AI.",
      "Issued amid public debate about frontier models with advanced vulnerability-discovery capabilities."
    ],
    "whatChanged": "It is the first UK financial-regulatory statement treating frontier AI as a cyber threat requiring immediate action rather than a technology to be monitored. Supervisors can now cite it when assessing whether a firm's cyber programme is adequate, so it functions as de facto guidance despite not changing the rulebook.",
    "useCases": [
      "cybersecurity",
      "third-party-vendors",
      "governance-general",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "Does the May 2026 frontier AI statement impose new requirements on UK banks?",
        "a": "No new rules, but it states that under existing operational-resilience rules firms must take active steps now on governance, vulnerability management, third-party risk, protection, detection and response against frontier AI-enabled attacks."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "uk-ai-in-financial-services-survey-2026",
    "authority": "uk",
    "shortName": "2026 BoE/FCA AI survey",
    "title": "The Bank of England and FCA's 2026 AI Survey",
    "aliases": [
      "2026 AI Survey",
      "Bank of England and FCA 2026 AI Survey",
      "fourth BoE/FCA AI survey"
    ],
    "docType": "Survey",
    "status": "Final",
    "date": "2026-06-05",
    "commentDeadline": "2026-07-31",
    "link": "https://www.bankofengland.co.uk/prudential-regulation/regulatory-digest/2026/june-2026",
    "appliesTo": "Voluntary survey of BoE-, PRA- and FCA-regulated firms; no obligations",
    "answerFirst": "The fourth joint Bank of England and FCA AI survey opened on 5 June 2026 and closed to firm responses on 31 July 2026. Building on the 2019, 2022 and 2024 editions, it is the first to cover foundation models, generative AI and agentic AI explicitly, and its results — expected later in 2026 — will be the first regulator dataset anywhere on agentic AI deployment in banks.",
    "keyPoints": [
      "Announced in the PRA Regulatory Digest for June 2026; open 5 June to 31 July 2026.",
      "Voluntary; aims to understand development, deployment and use of AI/ML including foundation models, GenAI and agentic AI.",
      "Continues the biennial series (2019, 2022, 2024) to build a longer-term picture of adoption.",
      "Committed to in both 1 April 2026 BoE/PRA letters and supported by the FPC, which asked for further work on agentic AI in payments and markets.",
      "2024 baseline: 75% adoption, 17% foundation-model share, one third third-party implementations, 2% fully autonomous use cases."
    ],
    "whatChanged": "The 2026 edition extends the UK's core AI monitoring tool to agentic systems. Its findings will feed the FPC's next financial-stability assessment and the PRA's decision on whether to add guardrails beyond SS1/23.",
    "useCases": [
      "governance-general",
      "generative-agentic-ai",
      "third-party-vendors",
      "model-risk"
    ],
    "faq": [
      {
        "q": "When will the 2026 Bank of England AI survey results be published?",
        "a": "The survey closed 31 July 2026; the Bank has not announced a publication date, but the 2024 edition was published in November of its survey year."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "hmt-financial-services-ai-adoption-plan-2026",
    "authority": "uk",
    "shortName": "HM Treasury Financial Services AI Adoption Plan (Jul 2026)",
    "title": "Financial Services AI Adoption Plan",
    "aliases": [
      "Financial Services AI Adoption Plan",
      "HM Treasury AI adoption plan",
      "FS AI Adoption Plan"
    ],
    "docType": "Framework",
    "status": "Final",
    "date": "2026-07-14",
    "link": "https://www.gov.uk/government/publications/ai-adoption-plan-financial-services/financial-services-ai-adoption-plan",
    "appliesTo": "UK financial services firms of all sizes (government strategy; no direct obligations)",
    "answerFirst": "HM Treasury published the Financial Services AI Adoption Plan on 14 July 2026, setting a government vision for firms of all sizes to move beyond isolated pilots and integrate AI across core processes responsibly and at pace. It describes scaling AI as a strategic imperative for UK growth, competitiveness and financial resilience, and positions the UK's regulatory framework and the FCA and Bank of England's sandbox, live-testing and monitoring programmes as the platform for safe adoption.",
    "keyPoints": [
      "Published 14 July 2026 by HM Treasury on GOV.UK.",
      "Vision: firms of all sizes confidently integrate AI across core processes, responsibly and at pace.",
      "Cites fraud detection, streamlined operations and sharper risk management as areas where AI is already delivering.",
      "Builds on the January 2026 DSIT/DBT letters and the regulators' April 2026 plans.",
      "Frames the UK's regulatory experience with complex risk as a competitive advantage for leading responsible AI adoption globally."
    ],
    "whatChanged": "It confirms that UK government policy is to accelerate, not constrain, AI in finance — the political context in which the PRA and FCA are choosing supervision and testing over new rules. For US banks with UK operations it signals continued divergence from the EU AI Act model.",
    "useCases": [
      "governance-general",
      "fraud",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "What is the UK Financial Services AI Adoption Plan?",
        "a": "An HM Treasury strategy published 14 July 2026 aiming for rapid, responsible scaling of AI across UK financial services, relying on existing regulation and regulator sandbox and testing programmes rather than new AI rules."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fsb-ai-ml-financial-services-2017",
    "authority": "fsb",
    "shortName": "FSB 2017 AI/ML report",
    "title": "Artificial intelligence and machine learning in financial services: Market developments and financial stability implications",
    "aliases": [
      "FSB 2017 AI report",
      "AI and machine learning in financial services"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2017-11-01",
    "link": "https://www.fsb.org/2017/11/artificial-intelligence-and-machine-learning-in-financial-service/",
    "appliesTo": "FSB member authorities; descriptive of banks, insurers, asset managers and trading firms using AI/ML",
    "answerFirst": "The FSB's 1 November 2017 report was the first systematic international survey of AI and machine learning in finance. It mapped use cases in credit scoring, insurance pricing, client interaction, capital optimisation, trading and compliance/fraud detection, and flagged five financial-stability themes: efficiency gains, unexpected interconnectedness through shared data, third-party dependencies that could create systemically important unregulated players, opaque and uninterpretable models, and operational risks including data privacy and cyber. It remains the baseline every later FSB AI report builds on.",
    "keyPoints": [
      "Published 1 November 2017, before generative AI; covers 'traditional' ML such as credit scoring, trading signals and anti-fraud.",
      "Use cases examined: credit quality assessment, insurance pricing and marketing, automated client interaction, capital optimisation, trading signal generation and execution, compliance and fraud detection.",
      "Warns that shared data sources and similar models across firms can create unexpected interconnectedness and correlated behaviour.",
      "Identifies reliance on a small number of third-party AI/data providers as a potential source of new systemically important players outside the regulatory perimeter.",
      "Highlights model opacity: lack of interpretability could make it hard for firms and supervisors to understand how AI affects markets at a macro level.",
      "Calls for adequate testing on unbiased data, feedback mechanisms, and continued monitoring as adoption expands."
    ],
    "whatChanged": "It established the vocabulary supervisors still use for AI risk — third-party concentration, model correlation, opacity — nearly a decade before the 2024–2026 workstream, and is the reference point for the FSB's claim that many AI vulnerabilities are not new.",
    "useCases": [
      "credit-underwriting",
      "trading-markets",
      "fraud",
      "model-risk",
      "third-party-vendors",
      "governance-general"
    ],
    "faq": [
      {
        "q": "What did the FSB's 2017 AI report conclude?",
        "a": "That AI/ML could improve efficiency but also create interconnectedness, third-party dependencies, opaque models and operational risks, and that adoption should be monitored and models adequately tested."
      },
      {
        "q": "Is the FSB 2017 AI report still relevant?",
        "a": "Yes as a baseline: the FSB's November 2024 and October 2025 reports and the June 2026 sound practices explicitly build on its risk categories."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fsb-third-party-risk-toolkit-2023",
    "authority": "fsb",
    "shortName": "FSB third-party risk toolkit (2023)",
    "title": "Final Report on Enhancing Third-party Risk Management and Oversight: A toolkit for financial institutions and financial authorities",
    "aliases": [
      "FSB third-party toolkit",
      "third-party risk management toolkit",
      "Enhancing Third-party Risk Management and Oversight"
    ],
    "docType": "Framework",
    "status": "Final",
    "date": "2023-12-04",
    "link": "https://www.fsb.org/2023/12/final-report-on-enhancing-third-party-risk-management-and-oversight-a-toolkit-for-financial-institutions-and-financial-authorities/",
    "appliesTo": "Financial institutions, financial authorities and, indirectly, critical third-party service providers (including cloud and AI model providers)",
    "answerFirst": "Published 4 December 2023, the FSB's third-party risk toolkit is the international framework for how banks and supervisors manage reliance on critical service providers, including cloud and AI vendors. It gives common definitions, tools for identifying critical services, and lifecycle risk-management tools covering supply-chain risk. It followed a June 2023 consultation that drew 26 responses, and the FSB's 2026 AI sound practices cite it as the basis for Sound Practice 12 on third-party AI risk.",
    "keyPoints": [
      "Final report issued 4 December 2023 after a consultation that closed 22 August 2023 with 26 responses.",
      "Focuses on 'critical services' whose disruption could affect a firm's critical operations or financial stability, broader than the old outsourcing lens.",
      "Provides common terms and definitions to reduce regulatory fragmentation across jurisdictions and sectors.",
      "Tools for financial institutions cover identifying critical services, due diligence, contracting, ongoing monitoring, business continuity and exit, including nth-party supply-chain risk.",
      "Tools for authorities cover supervising firms' third-party risk management and cross-border cooperation on systemic third-party dependencies.",
      "Referenced by the FSB's June 2026 AI sound practices (Sound Practice 12) for managing AI model, cloud and data vendors."
    ],
    "whatChanged": "It shifted the global framing from 'outsourcing' to holistic third-party and supply-chain risk, the lens now applied to foundation-model and cloud providers that the FSB identifies as the sector's biggest AI concentration risk.",
    "useCases": [
      "third-party-vendors",
      "cybersecurity",
      "governance-general"
    ],
    "faq": [
      {
        "q": "Does the FSB third-party toolkit apply to AI vendors?",
        "a": "Yes. It applies to any critical service, and the FSB's 2026 AI sound practices point to it for managing dependencies on AI model, cloud and data providers."
      },
      {
        "q": "Is the FSB third-party toolkit binding?",
        "a": "No. It is a non-binding toolkit; US banks are bound by the June 2023 interagency third-party guidance, which the toolkit is broadly consistent with."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fsb-financial-stability-implications-of-ai-2024",
    "warning": true,
    "authority": "fsb",
    "shortName": "FSB AI financial stability report (Nov 2024)",
    "title": "The Financial Stability Implications of Artificial Intelligence",
    "aliases": [
      "Financial Stability Implications of Artificial Intelligence",
      "FSB November 2024 AI report",
      "FSB 2024 AI report"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2024-11-14",
    "link": "https://www.fsb.org/2024/11/the-financial-stability-implications-of-artificial-intelligence/",
    "appliesTo": "FSB member authorities and standard-setting bodies; describes risks arising from banks' and other financial institutions' AI use",
    "answerFirst": "On 14 November 2024 the FSB published its post-generative-AI assessment of AI's financial-stability implications. It identifies six vulnerabilities: third-party dependencies and provider concentration, market correlations, cyber risks, model risk and data quality and governance, AI-enabled fraud and disinformation, and misaligned AI systems. It asks authorities to close information gaps for monitoring, assess whether existing policy frameworks are adequate, and strengthen supervisory capabilities including with AI tools.",
    "keyPoints": [
      "Six vulnerabilities: third-party dependencies/concentration; market correlations from similar models and data; cyber risk; model risk, data quality and governance; fraud and disinformation amplified by GenAI; misaligned AI systems operating outside legal boundaries.",
      "Concludes existing frameworks address many AI risks but may need reinforcement as adoption grows.",
      "Three recommendations to authorities: address data and information gaps for monitoring; assess adequacy of current policy frameworks; enhance regulatory and supervisory capabilities, including via suptech.",
      "Notes reliance on a small number of hardware, cloud and model providers as a source of systemic vulnerability.",
      "Basis for the FSB's October 2025 monitoring report and June 2026 sound practices."
    ],
    "whatChanged": "It reframed AI from an efficiency topic (2017) into a financial-stability workstream, giving supervisors a common vulnerability taxonomy that subsequent FSB monitoring indicators and sound practices are built on.",
    "useCases": [
      "third-party-vendors",
      "model-risk",
      "cybersecurity",
      "fraud",
      "trading-markets",
      "governance-general",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "What vulnerabilities does the FSB's 2024 AI report identify?",
        "a": "Third-party concentration, market correlation, cyber risk, model risk/data governance, AI-enabled fraud and disinformation, and misaligned AI systems."
      },
      {
        "q": "Does the FSB 2024 AI report require anything of banks?",
        "a": "No. Its recommendations are addressed to authorities: monitor AI adoption, assess policy frameworks, and build supervisory capacity."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fsb-monitoring-ai-adoption-vulnerabilities-2025",
    "warning": true,
    "authority": "fsb",
    "shortName": "FSB AI monitoring report (Oct 2025)",
    "title": "Monitoring Adoption of Artificial Intelligence and Related Vulnerabilities in the Financial Sector",
    "aliases": [
      "Monitoring Adoption of Artificial Intelligence",
      "FSB October 2025 AI report",
      "FSB AI monitoring report"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2025-10-10",
    "link": "https://www.fsb.org/2025/10/monitoring-adoption-of-artificial-intelligence-and-related-vulnerabilities-in-the-financial-sector/",
    "appliesTo": "FSB member authorities; informs supervisory data requests to banks and other financial institutions",
    "answerFirst": "Published 10 October 2025, this report gives national authorities key considerations and candidate indicators for tracking AI adoption and the vulnerabilities identified in November 2024 — third-party dependencies, market correlations, cyber risk, and model-risk and governance gaps. It includes a case study on AI-related third-party dependencies and provider concentration, finding that generative AI depends on a small number of key suppliers of hardware, cloud and models. The FSB concludes monitoring is at an early stage and urges authorities to close data gaps.",
    "keyPoints": [
      "Published 10 October 2025 with a companion press release on next steps for authorities.",
      "Proposes direct and proxy indicators for AI adoption and for each vulnerability identified in the 2024 report.",
      "Case study on the AI supply chain: dependence on a few providers of chips, cloud and foundation models creates concentration risk.",
      "Finds authorities' monitoring is at an early stage, hampered by limited data and lack of common taxonomies.",
      "Next steps: authorities to strengthen monitoring using the indicators; FSB to facilitate international coordination on taxonomies and data standards."
    ],
    "whatChanged": "It is the bridge from principles to data: banks should expect supervisors to ask for AI inventories, vendor dependencies and usage metrics aligned with these indicators.",
    "useCases": [
      "third-party-vendors",
      "model-risk",
      "cybersecurity",
      "trading-markets",
      "governance-general"
    ],
    "faq": [
      {
        "q": "What does the FSB want authorities to monitor on AI?",
        "a": "AI adoption levels and the vulnerabilities from its 2024 report — third-party concentration, market correlation, cyber risk and model/governance risk — using the direct and proxy indicators in the October 2025 report."
      },
      {
        "q": "Will banks have to report AI usage data to regulators?",
        "a": "The FSB report does not itself require it, but it encourages authorities to close data gaps, which in practice means more supervisory information requests on AI use and vendors."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fsb-next-steps-authorities-ai-monitoring-2025",
    "authority": "fsb",
    "shortName": "FSB next steps on AI monitoring (Oct 2025)",
    "title": "FSB outlines next steps for authorities on AI monitoring",
    "aliases": [
      "next steps for authorities on AI monitoring",
      "FSB AI monitoring press release"
    ],
    "docType": "Guidance",
    "status": "Final",
    "date": "2025-10-10",
    "link": "https://www.fsb.org/2025/10/fsb-outlines-next-steps-for-authorities-on-ai-monitoring/",
    "appliesTo": "FSB member authorities",
    "answerFirst": "The FSB's 10 October 2025 statement accompanying its AI monitoring report says authorities' AI monitoring is still at an early stage, that generative AI depends on a small number of key suppliers for hardware, cloud and models, and that national authorities should strengthen monitoring using the report's indicators while the FSB coordinates on taxonomies and data standards.",
    "keyPoints": [
      "Companion statement to the October 2025 monitoring report.",
      "Acknowledges data limitations and lack of standardisation as obstacles to AI monitoring.",
      "Flags concentration among a few suppliers of chips, cloud and foundation models.",
      "Commits the FSB to facilitate cross-border coordination on AI taxonomies and data standards."
    ],
    "whatChanged": "Signals the shift from one-off reports to an ongoing FSB monitoring programme on AI, which feeds the sound-practices work launched in 2026.",
    "useCases": [
      "third-party-vendors",
      "governance-general"
    ],
    "faq": [
      {
        "q": "What are the FSB's next steps on AI monitoring?",
        "a": "National authorities strengthen monitoring using the October 2025 indicators; the FSB coordinates internationally on common taxonomies and data standards."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fsb-ai-sound-practices-consultation-2026",
    "authority": "fsb",
    "shortName": "FSB AI sound practices consultation (June 2026)",
    "title": "Sound Practices for Responsible Adoption of Artificial Intelligence (AI): Consultation report",
    "aliases": [
      "Sound Practices for Responsible Adoption of Artificial Intelligence",
      "FSB sound practices",
      "FSB AI sound practices",
      "12 sound practices"
    ],
    "docType": "Consultation",
    "status": "Proposed",
    "date": "2026-06-10",
    "commentDeadline": "2026-07-22",
    "link": "https://www.fsb.org/2026/06/sound-practices-for-responsible-adoption-of-artificial-intelligence-ai-consultation-report/",
    "appliesTo": "All types of financial institutions, banks and non-banks, proportionate to size and complexity; addressed to FSB member authorities for implementation",
    "answerFirst": "On 10 June 2026 the FSB published a consultation proposing 12 sound practices for responsible AI adoption by financial institutions, with comments due 22 July 2026. Practices 1–4 cover organisation-wide governance (strategic direction and oversight, governance and accountability, incorporating AI into the risk-management framework, organisational adaptability); practices 5–12 cover the AI lifecycle (materiality and risk assessment, selection, data governance, explainability and transparency, performance management, human oversight, cyber and ICT risk, third-party AI risk). It addresses all forms of AI with specific attention to generative and agentic AI. The final report is expected in October 2026 as a deliverable to the US G20 presidency.",
    "keyPoints": [
      "Sound Practice 1 Strategic direction and oversight: board and senior management align AI with business model, risk appetite and strategy.",
      "SP2 Governance and accountability; SP3 Incorporation of AI risks into the risk-management framework; SP4 Organisational adaptability (skills, resourcing).",
      "SP5 Materiality and risk assessment; SP6 Selection of AI models/systems (traditional, GenAI or agentic) fit for the use case; SP7 Data governance.",
      "SP8 Explainability and transparency; SP9 Performance management including testing and ongoing monitoring; SP10 Human oversight, with extra measures for highly autonomous agentic AI.",
      "SP11 Cyber and ICT risk management for AI; SP12 Third-party AI risk management, building on the FSB's 2023 third-party toolkit.",
      "Agentic AI risks named include autonomous multi-step actions, agentic memory poisoning, and AI-generated code defects; case studies include agentic fraud detection at a large bank.",
      "Proportionality: lower-risk AI uses should get a lighter supervisory and regulatory touch (Fed Vice Chair Bowman, 7 July 2026 FSB outreach).",
      "159 public responses published 6 August 2026; FSB expects to publish the final report 'in the coming months'."
    ],
    "whatChanged": "It is the FSB's first firm-level AI expectations rather than authority-level monitoring. For US banks it overlaps with SR 11-7/OCC model-risk guidance and 2023 third-party guidance but adds explicit expectations on AI inventories, explainability, human oversight and agentic AI that examiners are likely to import.",
    "useCases": [
      "governance-general",
      "model-risk",
      "generative-agentic-ai",
      "third-party-vendors",
      "cybersecurity",
      "data-privacy"
    ],
    "faq": [
      {
        "q": "What are the FSB's 12 sound practices for AI?",
        "a": "Strategic direction and oversight; governance and accountability; incorporation of AI risks into the risk-management framework; organisational adaptability; materiality and risk assessment; selection; data governance; explainability and transparency; performance management; human oversight; cyber and ICT risk management; third-party AI risk management."
      },
      {
        "q": "When is the FSB's final AI sound practices report due?",
        "a": "October 2026, as a deliverable to the US G20 presidency; as of 26 August 2026 only the consultation responses (6 August) have been published."
      },
      {
        "q": "Do the FSB sound practices apply to small banks?",
        "a": "They are meant for all financial institutions but applied proportionately; the FSB and Fed Vice Chair Bowman stressed lower-risk AI uses should receive a lighter touch."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fsb-bowman-remarks-ai-sound-practices-2026",
    "authority": "fsb",
    "shortName": "Bowman remarks at FSB AI outreach (July 2026)",
    "title": "Opening remarks on sound practices for artificial intelligence (FSB virtual outreach event)",
    "aliases": [
      "Bowman FSB AI remarks",
      "opening remarks on sound practices for artificial intelligence"
    ],
    "docType": "Speech",
    "status": "Final",
    "date": "2026-07-07",
    "link": "https://www.fsb.org/2026/07/opening-remarks-on-sound-practices-for-artificial-intelligence/",
    "appliesTo": "Consultation stakeholders; signals US supervisory stance on FSB AI sound practices",
    "answerFirst": "On 7 July 2026 Federal Reserve Vice Chair for Supervision Michelle Bowman, who chairs the FSB Standing Committee on Supervisory and Regulatory Cooperation that led the work, opened the FSB's outreach on the AI sound practices. She said the Fed has seen a noticeable increase in AI use by banks of all sizes, that the practices are proportionate to institution size and complexity, that lower-risk AI uses should get a lighter supervisory touch, and that the final report will be delivered to the US G20 presidency later in 2026.",
    "keyPoints": [
      "Speaker: Michelle W. Bowman, Fed Vice Chair for Supervision and chair of the FSB SRC, which initiated the sound-practices work.",
      "Asks institutions to determine whether AI use is material to business operations or legal and regulatory obligations.",
      "Emphasises proportionality between large complex and smaller institutions.",
      "Requests feedback on whether the practices are too prescriptive and where gaps remain on material risks.",
      "Confirms the final report as a 2026 deliverable to the US G20 presidency."
    ],
    "whatChanged": "Shows the US prudential lead is driving the FSB work, making it likely the practices align with, and feed into, Federal Reserve and OCC examination expectations.",
    "useCases": [
      "governance-general",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "Who is leading the FSB's AI sound practices work?",
        "a": "The FSB Standing Committee on Supervisory and Regulatory Cooperation, chaired by Fed Vice Chair for Supervision Michelle Bowman."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fsb-ai-sound-practices-consultation-responses-2026",
    "authority": "fsb",
    "shortName": "Responses to FSB AI sound practices consultation (Aug 2026)",
    "title": "Public responses to consultation on Sound Practices for Responsible Adoption of Artificial Intelligence (AI)",
    "aliases": [
      "public responses to consultation on Sound Practices",
      "FSB AI consultation responses"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2026-08-06",
    "link": "https://www.fsb.org/2026/08/public-responses-to-consultation-on-sound-practices-for-responsible-adoption-of-artificial-intelligence-ai/",
    "appliesTo": "Consultation stakeholders",
    "answerFirst": "On 6 August 2026 the FSB published the 159 public responses received by the 22 July 2026 deadline on its AI sound practices consultation. Respondents include JPMorgan Chase, UBS, Credit Agricole, Manulife, Mastercard, Visa, the American Bankers Association, the Bank Policy Institute with the Institute of International Bankers, GFMA, UK Finance, the Japanese Bankers Association, the World Federation of Exchanges, and consumer groups Better Markets and Finance Watch. The FSB says it expects to publish the final report in the coming months.",
    "keyPoints": [
      "159 responses published 6 August 2026.",
      "Major US voices: JPMorgan Chase, ABA, BPI/IIB.",
      "Also fintechs, AI developers, insurers (Insurance Europe) and consumer advocates.",
      "Final report expected in the coming months (October 2026 per the consultation timeline)."
    ],
    "whatChanged": "Nothing binding yet; the response set shows which industry objections — proportionality and overlap with existing model-risk and third-party rules — the FSB must address in the October final.",
    "useCases": [
      "governance-general"
    ],
    "faq": [
      {
        "q": "How many responses did the FSB AI consultation receive?",
        "a": "159 public responses, published 6 August 2026."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "bcbs-239",
    "authority": "basel-committee",
    "shortName": "BCBS 239",
    "title": "Principles for effective risk data aggregation and risk reporting",
    "aliases": [
      "BCBS 239",
      "BCBS239",
      "risk data aggregation principles",
      "RDARR principles"
    ],
    "docType": "Framework",
    "status": "In force",
    "date": "2013-01-09",
    "effectiveDate": "2016-01-01",
    "link": "https://www.bis.org/publ/bcbs239.htm",
    "appliesTo": "Global systemically important banks (G-SIBs) from the beginning of 2016; domestic systemically important banks (D-SIBs) three years after designation; widely applied by supervisors to other large banks",
    "answerFirst": "BCBS 239, published by the Basel Committee on 9 January 2013, sets 14 principles for how banks govern, aggregate, and report risk data, covering governance and IT infrastructure, data accuracy, completeness, timeliness and adaptability, and supervisory review. G-SIBs had to comply by the beginning of 2016 and D-SIBs within three years of designation. It has become the data-governance foundation banks cite when supervisors ask how the data feeding AI and machine-learning models is controlled.",
    "keyPoints": [
      "14 principles in four groups: overarching governance and infrastructure (Principles 1–2), risk data aggregation capabilities (3–6), risk reporting practices (7–11), and supervisory review, tools and cooperation (12–14).",
      "Principle 1 makes the board and senior management accountable for risk data aggregation and reporting; Principle 2 requires IT and data architecture that supports the capabilities in normal times and in stress.",
      "Principles 3–6 require risk data to be accurate and reliable, complete across business lines and legal entities, timely, and adaptable to ad-hoc requests including in crisis.",
      "Compliance deadline: G-SIBs designated in November 2011 or 2012 by the beginning of 2016; D-SIBs three years after national designation.",
      "Written after the 2007–09 crisis, when many banks could not aggregate exposures or identify concentrations 'fully, quickly and accurately'.",
      "A 6 January 2026 Basel Committee newsletter (bcbs_nl36) reports data-driven culture, data lineage, and ad-hoc reporting still 'a work in progress' and notes that AI and advanced automation depend on the same high-quality data."
    ],
    "whatChanged": "BCBS 239 predates the current AI wave, but it is the standard examiners reach for when reviewing model inputs: data lineage, ownership, quality controls, and the ability to trace a number from a report back to source. Banks building AI governance programs typically map training-data and feature-pipeline controls onto BCBS 239 principles rather than inventing a new framework, and the ECB, PRA, and US agencies have all leaned on it in data-quality findings that increasingly concern AI/ML use.",
    "useCases": [
      "model-risk",
      "governance-general",
      "data-privacy"
    ],
    "faq": [
      {
        "q": "Does BCBS 239 apply to AI training data?",
        "a": "Not explicitly, but its principles on accuracy, completeness, lineage, and governance apply to any risk data, and supervisors expect banks to demonstrate the same controls over data used to train and run AI/ML models. The Committee's January 2026 newsletter says AI and advanced automation make robust data management more important, not less."
      },
      {
        "q": "Which banks must comply with BCBS 239?",
        "a": "G-SIBs from the beginning of 2016 and D-SIBs three years after designation, with national supervisors free to apply it more widely. In practice most large internationally active banks are assessed against it."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "bcbs-principles-operational-resilience-2021",
    "authority": "basel-committee",
    "shortName": "BCBS Principles for Operational Resilience (2021)",
    "title": "Principles for Operational Resilience",
    "aliases": [
      "Principles for Operational Resilience",
      "Basel operational resilience principles",
      "BCBS d516"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2021-03-31",
    "effectiveDate": "2021-03-31",
    "link": "https://www.bis.org/bcbs/publ/d516.htm",
    "appliesTo": "Internationally active banks, via national implementation; issued alongside the revised Principles for the Sound Management of Operational Risk (d515)",
    "answerFirst": "On 31 March 2021 the Basel Committee published seven Principles for Operational Resilience, aimed at banks' ability to withstand events such as pandemics, cyber incidents, technology failures, and natural disasters. The principles cover governance, operational risk management, business continuity, mapping of critical operations, third-party dependency management, incident response and recovery, and resilient ICT including cyber security. They are the Basel-level channel through which AI-driven operational and third-party risks are supervised today.",
    "keyPoints": [
      "Seven principles: governance (1), operational risk management (2), business continuity planning and testing (3), mapping interconnections and interdependencies of critical operations (4), third-party dependency management (5), incident management (6), and resilient ICT including cyber security (7).",
      "Published the same day as the revised Principles for the Sound Management of Operational Risk (PSMOR, d515), which the resilience principles build on.",
      "Requires banks to identify critical operations and map the internal and external dependencies, including technology and vendors, that support them.",
      "Principle 7 expects ICT to be 'subject to protection, detection, response and recovery programmes' that are regularly tested.",
      "Consolidates earlier Basel guidance on corporate governance, outsourcing, business continuity, and risk management into a single principles-based approach.",
      "12-page document; non-binding, implemented through national supervisory frameworks such as the UK operational-resilience regime and US interagency guidance."
    ],
    "whatChanged": "Before 2021 the Committee's guidance on outsourcing and continuity was scattered across documents dating to 2005–06. The resilience principles gave supervisors one framework to ask how a bank would keep critical operations running through a technology failure, which is now the lens applied to AI: an AI-dependent fraud engine, chatbot, or underwriting pipeline is a critical-operation dependency to be mapped, tested, and made recoverable. The Committee's 2026 ICT risk-management report and its December 2025 third-party principles both sit under this framework.",
    "useCases": [
      "governance-general",
      "third-party-vendors",
      "cybersecurity"
    ],
    "faq": [
      {
        "q": "Do the Basel operational resilience principles mention AI?",
        "a": "Not by name. They address technology failures, cyber incidents, ICT, and third-party dependencies generically, and supervisors apply them to AI systems that support critical operations."
      },
      {
        "q": "How do these principles relate to the 2025 third-party risk principles?",
        "a": "Principle 5 of the 2021 resilience principles requires banks to manage dependencies on third parties; the December 2025 Principles for the Sound Management of Third-Party Risk expand that into 12 detailed principles for banks and supervisors."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "bcbs-newsletter-ai-ml-2022",
    "authority": "basel-committee",
    "shortName": "BCBS AI/ML Newsletter (March 2022)",
    "title": "Newsletter on artificial intelligence and machine learning",
    "aliases": [
      "Newsletter on artificial intelligence and machine learning",
      "BCBS AI/ML newsletter",
      "bcbs_nl27"
    ],
    "docType": "Guidance",
    "status": "Final",
    "date": "2022-03-16",
    "link": "https://www.bis.org/publ/bcbs_nl27.htm",
    "appliesTo": "Informational for supervisors and internationally active banks; explicitly 'does not constitute new supervisory guidance'",
    "answerFirst": "On 16 March 2022 the Basel Committee published a newsletter summarising its internal discussions on banks' use of artificial intelligence and machine learning. It states that AI/ML can raise operational efficiency and improve risk management but heightens risks around model complexity and interpretability, data quality and bias, cyber and third-party interconnection, and outsourcing accountability. The Committee named three areas for further work: explainability of outcomes, governance and accountability structures, and implications for bank resilience and financial stability.",
    "keyPoints": [
      "Issued 'for informational purposes only'; it is the Committee's first and still its only stand-alone AI/ML publication.",
      "Risk themes: complexity and interpretability of AI/ML models versus traditional approaches; data quality, relevance, security, confidentiality, bias, and ethics; cyber exposure from third-party interconnectivity and cloud.",
      "Banks remain fully responsible for models developed by third parties, including due diligence and oversight.",
      "Three priorities for further analysis: explainability and interpretability of outcomes; governance structures defining roles, responsibilities and accountability; implications for individual bank resilience and systemic financial stability.",
      "Stresses adequate skilled staff across developers, validators, users, and independent auditors.",
      "Referenced as the Committee's baseline in the May 2024 Digitalisation of finance report."
    ],
    "whatChanged": "The newsletter created no obligations, but it set the vocabulary (explainability, governance, resilience) that national supervisors in the 28 Basel jurisdictions have since used in AI examinations, and it put on record that model risk management expectations extend to AI/ML and to vendor-built models.",
    "useCases": [
      "model-risk",
      "governance-general",
      "third-party-vendors"
    ],
    "faq": [
      {
        "q": "Is the 2022 Basel AI/ML newsletter binding guidance?",
        "a": "No. The Committee states it does not constitute new supervisory guidance. It records supervisory observations that member authorities may apply through existing model-risk and operational-risk frameworks."
      },
      {
        "q": "What did the Basel Committee say about explainability of AI models?",
        "a": "That AI/ML models are harder to interpret than traditional models, that transparency and explainability need attention, and that explainability of outcomes is one of three areas it would analyse further."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "bcbs-digitalisation-of-finance-2024",
    "authority": "basel-committee",
    "shortName": "BCBS Digitalisation of finance report (May 2024)",
    "title": "Digitalisation of finance",
    "aliases": [
      "Digitalisation of finance report",
      "BCBS digitalisation report",
      "BCBS d575"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2024-05-16",
    "link": "https://www.bis.org/bcbs/publ/d575.htm",
    "appliesTo": "Banks and supervisors in Basel member jurisdictions; analytical report, no new standards",
    "answerFirst": "The Basel Committee's 46-page 'Digitalisation of finance' report of 16 May 2024 assesses APIs, AI/ML, distributed ledger technology, and cloud computing, updating its 2018 fintech work, and sets out eight implications for banks and supervisors. It records bank AI/ML use in credit underwriting, trading, pricing, capital and liquidity planning, fraud detection, AML/CFT, chatbots, and marketing, and includes a dedicated assessment of generative AI risks: hallucinations, opacity, data governance, inadequate governance and skills, and reliance on third-party model providers.",
    "keyPoints": [
      "Technologies assessed: application programming interfaces, artificial intelligence and machine learning, distributed ledger technology, and cloud computing, plus new technology-enabled suppliers.",
      "Lists AI/ML use cases observed at banks: credit underwriting, trading, pricing, regulatory capital and liquidity planning, fraud detection, AML/CFT, chatbots, and marketing.",
      "Finds banks' use of generative AI 'remains limited at present, especially for customer-facing services and higher-risk activities', with pilots in lower-risk internal tasks.",
      "Generative AI risk list: model risk (reasoning errors, hallucinations, inconsistent outputs), explainability, data governance and bias, governance and accountability, and third-party risk including unclear allocation of liability with vendors.",
      "Financial-stability angle: broad GenAI adoption may increase interconnectivity, amplify procyclical behaviour, and raise third-party concentration risk, 'particularly where the model vendors are also providing cloud services to banks'.",
      "Table 2 catalogues bank mitigants for GenAI: firm-wide AI policies, human review of outputs, employee training, enhanced validation even for lower-risk uses, and formal approval by IT and model-risk functions.",
      "Eight implications for banks and supervisors across macro-structural elements, specific digitalisation themes, and capacity building and coordination."
    ],
    "whatChanged": "This is the Committee's most detailed statement on AI and the first to address generative AI. It confirmed that Basel expects GenAI to be governed inside existing model-risk frameworks with graduated, risk-based controls, and it named vendor-plus-cloud concentration as a systemic concern, a theme later carried into the December 2025 third-party principles and the FSB's 2025–26 AI work.",
    "useCases": [
      "generative-agentic-ai",
      "model-risk",
      "third-party-vendors",
      "credit-underwriting",
      "fraud",
      "aml-kyc",
      "customer-chatbots"
    ],
    "faq": [
      {
        "q": "What does the Basel Committee say about generative AI in banks?",
        "a": "Its May 2024 report says GenAI shares the risks of other AI but presents them differently: hallucinations and inconsistent outputs, weaker explainability, harder data governance, governance and skills gaps, and dependence on third-party model providers. It notes banks are applying graduated controls built on existing model risk management."
      },
      {
        "q": "Did the 2024 digitalisation report create new Basel requirements?",
        "a": "No. It is an analytical report with implications for banks and supervisors; any requirements flow through existing standards on operational risk, resilience, and third-party risk."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "bcbs-work-programme-2025-26",
    "authority": "basel-committee",
    "shortName": "BCBS Work Programme 2025–26",
    "title": "Basel Committee work programme and strategic priorities for 2025/26",
    "aliases": [
      "Basel Committee work programme 2025/26",
      "BCBS work programme 2025-26",
      "Basel Committee strategic priorities 2025/26"
    ],
    "docType": "Report",
    "status": "In force",
    "date": "2025-02-04",
    "effectiveDate": "2025-02-04",
    "link": "https://www.bis.org/bcbs/bcbs_work.htm",
    "appliesTo": "The Committee's own policy, supervisory, and implementation agenda for 2025–26, endorsed by the Group of Governors and Heads of Supervision",
    "answerFirst": "The Basel Committee's 2025–26 work programme, endorsed by the Group of Governors and Heads of Supervision and published in February 2025, sets four themes: Basel III implementation, risk assessment and safeguarding resilience, digitalisation of finance, and liquidity. Under digitalisation it commits to horizon scanning of emerging technologies, monitoring of artificial intelligence-related issues and digital fraud, finalisation of the third-party risk principles, and analytical work on ICT risk management. No AI standard is scheduled.",
    "keyPoints": [
      "Four strategic priorities: Basel III implementation; risk assessment and safeguarding resilience; digitalisation of finance; liquidity.",
      "Digitalisation workstream: horizon scanning of emerging digital trends, monitoring of AI-related issues, cryptoasset market and standard implementation, and digital fraud from a prudential perspective.",
      "Delivered items: final Principles for the Sound Management of Third-Party Risk (10 December 2025) and the ICT risk-management range-of-practices report (2 June 2026).",
      "November 2025 meeting added monitoring of 'recent artificial intelligence use cases by banks' and a consultation on machine-readable Pillar 3 disclosure data.",
      "May 2026 meeting recorded the Committee's view that frontier AI models may materially change the speed and scale of cyber incidents.",
      "Approach is monitoring and supervisory exchange, not standard-setting, for AI."
    ],
    "whatChanged": "The programme confirms that through 2026 the Basel Committee will not write AI-specific rules; banks should expect AI to be examined through the third-party, ICT, operational-resilience, and cyber channels the programme prioritises. It also signals that the Committee's next AI outputs will be observational (range-of-practice reports, newsletters) rather than binding standards.",
    "useCases": [
      "governance-general",
      "cybersecurity",
      "third-party-vendors"
    ],
    "faq": [
      {
        "q": "Is the Basel Committee planning an AI standard?",
        "a": "Not in its 2025–26 work programme. AI is handled as a monitoring item under the digitalisation-of-finance theme, alongside cryptoassets and digital fraud."
      },
      {
        "q": "What AI-relevant deliverables has the 2025–26 programme produced?",
        "a": "The December 2025 third-party risk principles, the January 2026 BCBS 239 implementation newsletter, and the June 2026 ICT risk-management report, which identifies AI/ML as an area of skills and control challenge."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "bcbs-third-party-risk-principles-2025",
    "authority": "basel-committee",
    "shortName": "BCBS Third-Party Risk Principles (Dec 2025)",
    "title": "Principles for the sound management of third-party risk",
    "aliases": [
      "Principles for the sound management of third-party risk",
      "Basel third-party risk principles",
      "BCBS d605",
      "BCBS TPRM principles"
    ],
    "docType": "Guidance",
    "status": "In force",
    "date": "2025-12-10",
    "effectiveDate": "2025-12-10",
    "link": "https://www.bis.org/bcbs/publ/d605.htm",
    "appliesTo": "Internationally active banks and their supervisors, via national implementation; supersedes the 2005 Joint Forum 'Outsourcing in financial services' for the banking sector",
    "answerFirst": "On 10 December 2025 the Basel Committee published 12 Principles for the Sound Management of Third-Party Risk, finalising a July 2024 consultation and replacing the 2005 Joint Forum outsourcing paper for banks. Principles 1–9 address banks (board accountability, risk assessment, due diligence, binding contracts, onboarding, ongoing monitoring, business continuity, exit plans) and Principles 10–12 address supervisors, including cross-border and cross-sector coordination. The 22-page document covers nth-party supply chains and concentration risk, which is where a bank's reliance on external AI models and the cloud providers hosting them is now assessed.",
    "keyPoints": [
      "12 principles: nine for banks and three for supervisors; adopted at the Committee's 18–19 November 2025 meeting and published 10 December 2025.",
      "Principle 1: the board of directors has ultimate responsibility for oversight of third-party risk; Principle 2: senior management implements the third-party risk management framework (TPRMF).",
      "Principles 3–5: comprehensive risk assessment, due diligence on prospective providers, and legally binding written contracts describing services, obligations, and rights.",
      "Principles 7–9: ongoing monitoring of performance and risk changes, business continuity for third-party disruption, and exit plans for planned and unplanned termination.",
      "Explicitly covers supply-chain (nth-party) risk and concentration risk at bank and systemic level, including multiple services from one provider, geographic concentration, and shared key nth parties.",
      "Principle 12 asks supervisors to coordinate across sectors and borders to monitor systemically important third-party providers.",
      "Establishes a 'common baseline' while leaving jurisdictions flexibility; the Committee says it will continue to monitor digitalisation and fintech from a prudential perspective."
    ],
    "whatChanged": "For AI, this is the most operationally relevant Basel document since 2021. It does not name AI, but a foundation-model vendor, an AI-enabled SaaS product, or a cloud platform running a bank's models is a third-party service provider under it, and the due-diligence, contract, monitoring, exit, and concentration expectations now apply. It aligns the Basel baseline with the US interagency third-party guidance of June 2023 and the EU's DORA, giving supervisors in 28 jurisdictions a common reference for examining AI vendor dependence.",
    "useCases": [
      "third-party-vendors",
      "generative-agentic-ai",
      "governance-general",
      "cybersecurity"
    ],
    "faq": [
      {
        "q": "Do the Basel third-party risk principles cover AI vendors?",
        "a": "Yes in effect. They apply to any third-party service provider, including providers of AI models and the cloud services that host them, and require risk assessment, due diligence, contracts, monitoring, continuity, and exit plans, plus attention to nth-party and concentration risk."
      },
      {
        "q": "What did the 2025 principles replace?",
        "a": "The 2005 Joint Forum paper 'Outsourcing in financial services', for the banking sector. The principles were consulted on in July 2024 and finalised in December 2025."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "bcbs-newsletter-bcbs239-implementation-2026",
    "authority": "basel-committee",
    "shortName": "BCBS 239 Implementation Newsletter (Jan 2026)",
    "title": "Implementation of the Principles for effective risk data aggregation and risk reporting (BCBS 239 Principles)",
    "aliases": [
      "BCBS 239 implementation newsletter",
      "bcbs_nl36",
      "Basel newsletter on BCBS 239 implementation"
    ],
    "docType": "Guidance",
    "status": "Final",
    "date": "2026-01-06",
    "link": "https://www.bis.org/publ/bcbs_nl36.htm",
    "appliesTo": "Banks subject to BCBS 239 and their supervisors; informational newsletter",
    "answerFirst": "On 6 January 2026 the Basel Committee issued a newsletter on the state of BCBS 239 implementation, more than a decade after the 2013 principles. It finds that a data-driven culture 'remains a work in progress' at some banks, that data lineage is still hard because of legacy systems and distributed data, that ad-hoc crisis reporting remains a weakness, and that cross-border groups struggle to align subsidiaries. On emerging technology it says AI and advanced automation show promise but depend on high-quality data, which makes robust data management more important for effective implementation.",
    "keyPoints": [
      "Governance: boards must oversee risk data aggregation; resistance to change and insufficient senior-management attention persist.",
      "Data lineage: tracing data from origin to use is impeded by legacy systems, though automated lineage tools are showing business value.",
      "Ad-hoc reporting: banks still struggle to produce timely reports in crises or for regulatory requests; better balance between manual and automated processes is needed.",
      "Cross-border: internationally active banks face alignment challenges across subsidiaries and jurisdictions.",
      "Emerging technologies: AI and advanced automation depend on high-quality data, so robust data management becomes more important.",
      "Follows earlier Committee progress reports on BCBS 239 adoption; no new deadline or requirement is introduced."
    ],
    "whatChanged": "The newsletter is the Committee's first explicit linkage of BCBS 239 to AI adoption. It tells banks that supervisors will treat data-governance gaps as an AI risk, and gives examiners a fresh basis for asking how model training data, features, and outputs meet lineage and quality expectations.",
    "useCases": [
      "model-risk",
      "governance-general"
    ],
    "faq": [
      {
        "q": "What did the January 2026 BCBS 239 newsletter say about AI?",
        "a": "That AI and advanced automation show promise for risk data aggregation and reporting but rely on high-quality data, so sound data management is a precondition for using them effectively."
      },
      {
        "q": "Are banks compliant with BCBS 239 in 2026?",
        "a": "The Committee reports continued shortfalls in data culture, lineage, ad-hoc reporting, and cross-border alignment, without publishing bank-by-bank compliance figures."
      }
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "bcbs-ict-risk-management-range-of-practices-2026",
    "authority": "basel-committee",
    "shortName": "BCBS ICT Risk Management Report (June 2026)",
    "title": "Information and communication technology risk management: range of practices",
    "aliases": [
      "ICT risk management range of practices",
      "BCBS ICT risk management report",
      "BCBS d611"
    ],
    "docType": "Report",
    "status": "Final",
    "date": "2026-06-02",
    "link": "https://www.bis.org/bcbs/publ/d611.htm",
    "appliesTo": "Banks and supervisors in Basel member jurisdictions; range-of-practices report, no new standards",
    "answerFirst": "The Basel Committee published its 23-page range-of-practices report on ICT risk management on 2 June 2026, produced under the 2025–26 work programme and focused on non-malicious ICT incidents affecting critical bank operations, complementing its 2018 cyber-resilience report. It identifies skills and control challenges in cyber security, cloud, AI/ML, and legacy systems, records that banks are embedding AI/ML tools in ICT risk management for predictive failure detection and change testing, and stresses that human oversight remains critical. The accompanying press release commits the Committee to keep monitoring AI model developments and their implications for bank cyber security.",
    "keyPoints": [
      "Scope: observed ICT risk-management practices across jurisdictions for non-malicious incidents (outages, change failures, capacity problems), as a companion to the 2018 cyber-resilience range-of-practices report (d454).",
      "Finds skills shortages 'particularly in cyber security, cloud, artificial intelligence / machine learning (AI/ML), and legacy systems', worsened by competition with the technology industry.",
      "Reports banks implementing automation 'including through new technologies and AI/ML, while maintaining an appropriate level of human oversight and control'.",
      "Industry outreach: AI/ML is used to scan for issues, predict failures, improve response times, and detect blind spots in change testing; panellists said humans must interpret and prioritise AI signals.",
      "Positions robust ICT risk management as a critical component of operational risk management under the Committee's operational-resilience framework.",
      "Agreed at the 19–20 May 2026 meeting, where the Committee also noted frontier AI models' potential to change the speed and scale of cyber incidents."
    ],
    "whatChanged": "The report is the Committee's first document to describe AI/ML as a tool inside bank ICT risk management rather than only as a risk source, and it sets a Basel-level expectation that AI-driven monitoring keeps a human in the loop. It also formalises the Committee's watch on frontier AI and cyber, which is the most likely trigger for future Basel action on AI.",
    "useCases": [
      "cybersecurity",
      "governance-general",
      "generative-agentic-ai"
    ],
    "faq": [
      {
        "q": "Does the Basel ICT risk-management report set new requirements?",
        "a": "No. It is a range-of-practices report describing what supervisors observed, intended as a reference for banks and supervisors under existing operational-risk and resilience principles."
      },
      {
        "q": "What does the Basel Committee say about AI and cyber security in 2026?",
        "a": "In May 2026 it noted that frontier AI models could help banks and supervisors find vulnerabilities but that malicious use may materially change the speed and scale of cyber incidents, and it will continue monitoring AI model developments."
      }
    ],
    "lastUpdated": "2026-08-26"
  }
];

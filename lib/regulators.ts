// Data source for the AI-in-banking regulation tracker (/ai-regulation).
//
// Each entry is a standing reference page for one authority: who it is, what
// it has actually published on AI, and what applies to banks. Pages are
// designed to be *updated in place* as news breaks — the tracker accrues
// citations while individual news issues decay. Keep `lastUpdated` honest:
// it is rendered on the page and emitted as dateModified in metadata.

export type TimelineEntry = {
  /** ISO date (YYYY-MM-DD) or month (YYYY-MM) when day is not meaningful */
  date: string;
  title: string;
  docType:
    | "Report"
    | "Guidance"
    | "Consultation"
    | "Regulation"
    | "Circular"
    | "Speech"
    | "Survey"
    | "Milestone"
    | "Framework";
  summary: string;
  link?: string;
};

export type Faq = { q: string; a: string };

export type Regulator = {
  slug: string;
  /** Short display name, e.g. "FSB" */
  name: string;
  fullName: string;
  jurisdiction: string;
  /** One-phrase role, e.g. "Global standard-setter" */
  role: string;
  /** How binding its AI output is on banks */
  binding: "Binding law" | "Supervisory guidance" | "Non-binding standards" | "Voluntary framework";
  appliesTo: string;
  /**
   * The direct answer, rendered first on the page under the question-phrased
   * H1. 2–4 sentences, self-contained, quotable.
   */
  answerFirst: string;
  /** Longer context paragraphs, rendered after the at-a-glance table */
  overview: string[];
  keyDocument: string;
  latestMove: string;
  timeline: TimelineEntry[];
  watchNext: string[];
  faq: Faq[];
  related: string[];
  /** ISO date this entry's content was last reviewed/updated */
  lastUpdated: string;
};

export const TRACKER_LAST_REVIEWED = "2026-08-19";

const REGULATOR_ENTRIES: Regulator[] = [
  {
    slug: "eu-ai-act",
    name: "EU AI Act",
    fullName: "Regulation (EU) 2024/1689 — the EU Artificial Intelligence Act",
    jurisdiction: "European Union",
    role: "Binding horizontal AI law",
    binding: "Binding law",
    appliesTo:
      "Any bank, lender, or fintech that develops or uses AI systems in the EU — including non-EU firms whose AI outputs are used in the EU",
    answerFirst:
      "The EU AI Act is the only binding, cross-sector AI law that directly regulates banks today. Its high-risk obligations began applying on August 2, 2026, and credit scoring is explicitly listed as high-risk (Annex III, point 5(b)) — meaning AI creditworthiness systems now require risk management, data governance, technical documentation, logging, human oversight, and post-market monitoring. Penalties for non-compliance with high-risk obligations reach €15 million or 3% of global annual turnover.",
    overview: [
      "The AI Act entered into force on August 1, 2024 and applies in stages. Prohibited practices (such as social scoring) and AI-literacy duties took effect February 2, 2025; obligations for general-purpose AI models followed on August 2, 2025; and the core high-risk regime — the part that matters most to banks — became applicable on August 2, 2026.",
      "For banks the two headline classifications are credit scoring of natural persons (Annex III 5(b)) and risk assessment and pricing in life and health insurance (5(c)). High-risk systems already on the market before August 2, 2026 are generally caught when they undergo significant modification — but supervisors have signalled they expect remediation of legacy ML portfolios, not indefinite grandfathering. The EBA published a factsheet on what the Act means for the banking and payments sector in November 2025 and is coordinating supervisory implementation across national authorities through 2026–27."
    ],
    keyDocument: "Regulation (EU) 2024/1689 (in force Aug 1, 2024)",
    latestMove: "High-risk obligations, including for credit scoring, became applicable Aug 2, 2026",
    timeline: [
      {
        date: "2024-08-01",
        title: "AI Act enters into force",
        docType: "Regulation",
        summary:
          "Regulation (EU) 2024/1689 becomes law, with staged application dates from 2025 to 2027.",
        link: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj"
      },
      {
        date: "2025-02-02",
        title: "Prohibited practices and AI-literacy obligations apply",
        docType: "Milestone",
        summary:
          "Bans on unacceptable-risk AI (e.g., social scoring) take effect, along with the duty to ensure staff AI literacy — which applies to banks as deployers.",
        link: "https://artificialintelligenceact.eu/implementation-timeline/"
      },
      {
        date: "2025-08-02",
        title: "General-purpose AI (GPAI) obligations apply",
        docType: "Milestone",
        summary:
          "Transparency and documentation duties for GPAI model providers begin; relevant to banks consuming foundation models through vendors.",
        link: "https://artificialintelligenceact.eu/implementation-timeline/"
      },
      {
        date: "2025-11-21",
        title: "EBA factsheet on the AI Act for banking and payments",
        docType: "Guidance",
        summary:
          "The European Banking Authority maps AI Act obligations onto the existing EU banking framework, finding the Act complementary to — not contradicting — existing banking and payments legislation.",
        link: "https://www.eba.europa.eu/sites/default/files/2025-11/d8b999ce-a1d9-4964-9606-971bbc2aaf89/AI%20Act%20implications%20for%20the%20EU%20banking%20sector.pdf"
      },
      {
        date: "2026-08-02",
        title: "High-risk AI obligations become applicable",
        docType: "Milestone",
        summary:
          "Annex III high-risk systems — including credit scoring — must comply with risk management, data governance, documentation, logging, human oversight, accuracy, and post-market monitoring requirements. Fines up to €15M / 3% of turnover.",
        link: "https://artificialintelligenceact.eu/implementation-timeline/"
      },
      {
        date: "2027-08-02",
        title: "Extended deadline for high-risk AI embedded in regulated products",
        docType: "Milestone",
        summary:
          "Article 6(1) high-risk systems tied to EU product-safety legislation get an additional year.",
        link: "https://artificialintelligenceact.eu/implementation-timeline/"
      }
    ],
    watchNext: [
      "National market-surveillance authorities beginning enforcement of the high-risk regime that started Aug 2, 2026",
      "EBA-coordinated supervisory convergence on how AI Act duties interact with existing model governance (CRD/CRR, EBA guidelines) through 2026–27",
      "Treatment of legacy credit-scoring models: how strictly 'significant modification' is read for systems deployed before Aug 2026"
    ],
    faq: [
      {
        q: "Is credit scoring high-risk under the EU AI Act?",
        a: "Yes. AI systems used to evaluate the creditworthiness of natural persons or establish their credit score are listed in Annex III, point 5(b), and are high-risk regardless of whether the AI makes the final decision or supports a human decision-maker. A narrow exception exists for systems used solely to detect financial fraud."
      },
      {
        q: "When did the AI Act start applying to banks?",
        a: "In stages: AI-literacy and prohibited-practice rules from February 2, 2025; general-purpose AI rules from August 2, 2025; and the high-risk regime — the one covering credit scoring — from August 2, 2026."
      },
      {
        q: "What are the penalties for banks under the AI Act?",
        a: "Non-compliance with high-risk system obligations carries administrative fines of up to €15 million or 3% of global annual turnover, whichever is higher. Prohibited-practice violations carry up to €35 million or 7%."
      },
      {
        q: "Do models deployed before August 2026 have to comply?",
        a: "High-risk systems placed on the market before August 2, 2026 are generally brought into scope when they undergo a significant modification. In practice, EU banks began remediating legacy ML credit portfolios ahead of the deadline, because retraining and material model changes can trigger full compliance."
      }
    ],
    related: ["eba", "ecb", "fsb"],
    lastUpdated: "2026-08-19"
  },
  {
    slug: "fsb",
    name: "FSB",
    fullName: "Financial Stability Board",
    jurisdiction: "Global (G20)",
    role: "Global financial-stability standard-setter",
    binding: "Non-binding standards",
    appliesTo:
      "National regulators and, through them, systemically important banks and financial institutions worldwide",
    answerFirst:
      "The Financial Stability Board is the G20 body that coordinates how national regulators respond to AI risk in finance. It does not bind banks directly, but its reports set the agenda supervisors follow. Its current workstream matters: an October 2025 report on monitoring AI adoption and vulnerabilities, and a June 2026 consultation proposing 12 sound practices for responsible AI adoption by financial institutions, with the final report due in October 2026.",
    overview: [
      "The FSB has tracked AI in finance since a 2017 report on AI and machine learning, but its work accelerated after generative AI: a November 2024 report assessed the financial-stability implications of AI (third-party concentration, correlated models, cyber, and market herding), and an October 2025 report gave authorities concrete indicators for monitoring AI adoption and flagged the sector's reliance on a small number of critical AI suppliers.",
      "The June 2026 consultation, 'Sound Practices for the Responsible Adoption of AI,' is the closest the FSB has come to firm-level expectations: 12 practices covering governance, risk management, and oversight of AI — including agentic AI, whose capacity to act autonomously and at speed the FSB singles out as a risk that can outpace human oversight. National supervisors typically translate FSB sound practices into examination expectations."
    ],
    keyDocument: "The Financial Stability Implications of Artificial Intelligence (Nov 2024)",
    latestMove: "June 2026 consultation on 12 sound practices for responsible AI adoption; final report due Oct 2026",
    timeline: [
      {
        date: "2017-11-01",
        title: "Artificial intelligence and machine learning in financial services",
        docType: "Report",
        summary:
          "The FSB's first systematic look at AI/ML in finance: use cases, third-party dependencies, and potential systemic effects.",
        link: "https://www.fsb.org/2017/11/artificial-intelligence-and-machine-learning-in-financial-service/"
      },
      {
        date: "2024-11-14",
        title: "The Financial Stability Implications of Artificial Intelligence",
        docType: "Report",
        summary:
          "Post-generative-AI assessment: vendor concentration, model correlation, cyber threats, and gaps in regulators' monitoring capacity.",
        link: "https://www.fsb.org/2024/11/the-financial-stability-implications-of-artificial-intelligence/"
      },
      {
        date: "2025-10-10",
        title: "Monitoring Adoption of AI and Related Vulnerabilities in the Financial Sector",
        docType: "Report",
        summary:
          "Gives authorities direct and proxy indicators for tracking AI adoption; includes a case study on the AI supply chain and dependence on a few critical third-party providers.",
        link: "https://www.fsb.org/2025/10/monitoring-adoption-of-artificial-intelligence-and-related-vulnerabilities-in-the-financial-sector/"
      },
      {
        date: "2025-10-10",
        title: "FSB outlines next steps for authorities on AI monitoring",
        docType: "Guidance",
        summary:
          "Companion statement setting out how national authorities should close AI-related data gaps.",
        link: "https://www.fsb.org/2025/10/fsb-outlines-next-steps-for-authorities-on-ai-monitoring/"
      },
      {
        date: "2026-06-01",
        title: "Sound Practices for Responsible Adoption of AI (consultation)",
        docType: "Consultation",
        summary:
          "Proposes 12 sound practices for financial institutions' AI governance and risk management, with specific attention to agentic AI acting without human oversight. Final report expected October 2026.",
        link: "https://www.fsb.org/2026/06/sound-practices-for-responsible-adoption-of-artificial-intelligence-ai-consultation-report/"
      }
    ],
    watchNext: [
      "Final 'Sound Practices for Responsible Adoption of AI' report, expected October 2026 — likely to become the global reference for bank AI governance",
      "Whether the FSB moves from monitoring to recommending policy action on AI third-party concentration",
      "National supervisors (ECB, PRA, OCC) importing the 12 sound practices into examination programs"
    ],
    faq: [
      {
        q: "Is FSB AI guidance binding on banks?",
        a: "No. The FSB sets standards and sound practices for its member jurisdictions; national regulators decide how to implement them. In practice, FSB sound practices strongly shape supervisory expectations at the ECB, Bank of England, and US federal banking agencies."
      },
      {
        q: "What are the FSB's 12 sound practices for AI?",
        a: "They are proposals in the FSB's June 2026 consultation on responsible AI adoption, covering governance, risk management, and oversight of AI use by financial institutions — including risks from agentic AI that can act autonomously at speed. The final version is due in October 2026."
      },
      {
        q: "What does the FSB consider the biggest AI risk to financial stability?",
        a: "Its 2024 and 2025 reports emphasize concentration: many institutions depending on the same few AI model and infrastructure providers, plus correlated behavior when firms use similar models — alongside AI-enabled cyber threats and gaps in the data regulators need to monitor adoption."
      }
    ],
    related: ["basel-committee", "eu-ai-act", "occ"],
    lastUpdated: "2026-08-19"
  },
  {
    slug: "occ",
    name: "OCC",
    fullName: "Office of the Comptroller of the Currency",
    jurisdiction: "United States (national banks and federal savings associations)",
    role: "Prudential supervisor",
    binding: "Supervisory guidance",
    appliesTo: "National banks, federal savings associations, and federal branches of foreign banks",
    answerFirst:
      "The OCC supervises AI at national banks through model risk management and safety-and-soundness examination — not through AI-specific rules. The landscape changed on April 17, 2026: the OCC, Federal Reserve, and FDIC issued revised interagency model risk management guidance (OCC Bulletin 2026-13) that supersedes the 2011 framework, rescinds OCC 2011-12, and explicitly excludes generative and agentic AI from its scope, leaving those to banks' broader risk-management and governance programs.",
    overview: [
      "For fifteen years the operative document was the 2011 Supervisory Guidance on Model Risk Management (OCC 2011-12 / Fed SR 11-7). The April 2026 revision modernizes that framework and makes a deliberate scoping choice: generative and agentic AI are called 'novel and rapidly evolving' and carved out of formal model-risk requirements, with banks told to govern them through enterprise risk management instead. The OCC simultaneously rescinded older issuances including its 1997 credit-scoring-models bulletin and 2021 BSA/AML model risk FAQ.",
      "Beyond model risk, the OCC's May 2026 Semiannual Risk Perspective flags AI as a driver of fraud and increasingly fast, sophisticated cyberattacks, and signals that AI governance guidance is on the horizon. The practical posture in 2026 is innovation-friendly: examiners test whether banks understand and control their AI, not whether they use it."
    ],
    keyDocument: "OCC Bulletin 2026-13 — Revised interagency Model Risk Management guidance (Apr 2026)",
    latestMove: "Apr 2026 revised model risk guidance excluding generative/agentic AI; May 2026 risk report on AI-enabled fraud",
    timeline: [
      {
        date: "2011-04-04",
        title: "Supervisory Guidance on Model Risk Management (OCC 2011-12)",
        docType: "Guidance",
        summary:
          "The framework that governed bank AI/ML models for 15 years: validation, governance, and effective challenge. Superseded April 2026.",
        link: "https://www.federalreserve.gov/boarddocs/srletters/2011/sr1107.htm"
      },
      {
        date: "2021-03-31",
        title: "Interagency RFI on AI and machine learning in financial services",
        docType: "Consultation",
        summary:
          "OCC, Fed, FDIC, CFPB, and NCUA jointly sought comment on bank AI use — the first coordinated federal look at bank AI.",
        link: "https://www.federalregister.gov/documents/2021/03/31/2021-06607/request-for-information-and-comment-on-financial-institutions-use-of-artificial-intelligence-including-machine-learning"
      },
      {
        date: "2026-04-17",
        title: "Revised interagency Model Risk Management guidance (Bulletin 2026-13)",
        docType: "Guidance",
        summary:
          "OCC, Fed, and FDIC supersede the 2011 guidance; OCC rescinds 2011-12, 1997-24 (credit scoring), and 2021-19 (BSA/AML model risk). Generative and agentic AI are explicitly excluded from scope as 'novel and rapidly evolving.'",
        link: "https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-13.html"
      },
      {
        date: "2026-05-07",
        title: "Semiannual Risk Perspective highlights AI risks",
        docType: "Report",
        summary:
          "Warns that AI is amplifying fraud and the speed, scale, and sophistication of cyberattacks; signals forthcoming AI governance guidance.",
        link: "https://www.occ.treas.gov/news-issuances/news-releases/2026/nr-occ-2026-35.html"
      }
    ],
    watchNext: [
      "Dedicated OCC guidance on AI governance, signalled in the May 2026 Semiannual Risk Perspective",
      "How examiners treat generative/agentic AI now that it sits outside formal model-risk requirements",
      "Interaction between the deregulatory 2025–26 posture and consumer-protection enforcement on AI lending"
    ],
    faq: [
      {
        q: "Does SR 11-7 / OCC 2011-12 still apply to AI models?",
        a: "No — as of April 17, 2026 the 2011 interagency model risk guidance was superseded by revised guidance from the OCC, Federal Reserve, and FDIC (OCC Bulletin 2026-13). Traditional and machine-learning models fall under the revised framework; generative and agentic AI are explicitly excluded and are instead governed through banks' broader risk-management programs."
      },
      {
        q: "Why did the 2026 guidance exclude generative AI?",
        a: "The agencies concluded generative and agentic AI are 'novel and rapidly evolving' — too fast-moving for prescriptive model-validation requirements. Banks are expected to apply enterprise risk management and governance controls instead, and further AI-specific guidance has been signalled."
      },
      {
        q: "Is there any binding US federal AI regulation for banks?",
        a: "There is no AI-specific federal statute for banks. AI use is regulated through existing law — safety and soundness, fair lending (ECOA), UDAP/UDAAP — and supervisory guidance like the 2026 model risk framework. This contrasts with the EU, where the AI Act imposes binding AI-specific obligations."
      }
    ],
    related: ["federal-reserve", "cfpb", "fsb"],
    lastUpdated: "2026-08-19"
  },
  {
    slug: "federal-reserve",
    name: "Federal Reserve",
    fullName: "Board of Governors of the Federal Reserve System",
    jurisdiction: "United States (state member banks, bank holding companies, large financial institutions)",
    role: "Central bank and prudential supervisor",
    binding: "Supervisory guidance",
    appliesTo:
      "State member banks, bank and savings-and-loan holding companies, and US operations of foreign banks",
    answerFirst:
      "The Federal Reserve supervises bank AI through its model risk and safety-and-soundness framework rather than AI-specific rules. Its landmark document, SR 11-7 (2011), was superseded in April 2026 by revised interagency model risk management guidance issued jointly with the OCC and FDIC — which notably excludes generative and agentic AI from its scope. Fed leadership in 2026 has publicly favored an innovation-permissive stance, emphasizing that supervisors should not impede responsible AI adoption.",
    overview: [
      "SR 11-7 was arguably the most influential model-governance document in world banking — the template for how banks validated any quantitative model, including ML. Its April 2026 replacement keeps the core disciplines (validation, effective challenge, governance) while modernizing for machine learning and deliberately leaving generative and agentic AI to enterprise risk management pending further guidance.",
      "Vice Chair for Supervision remarks in May 2026 framed AI as a technology the financial system should adopt with appropriate controls, positioning the Fed against pre-emptive AI-specific rulemaking. Banks should expect examination focus on governance, third-party (foundation-model vendor) risk, and data controls rather than new AI rules."
    ],
    keyDocument: "SR 26-2 — Revised interagency Model Risk Management guidance (Apr 2026, supersedes SR 11-7)",
    latestMove: "Apr 2026 revised model risk guidance; May 2026 Vice Chair speech on AI in the financial system",
    timeline: [
      {
        date: "2011-04-04",
        title: "SR 11-7: Supervisory Guidance on Model Risk Management",
        docType: "Guidance",
        summary:
          "The foundational model-governance framework used globally for bank models, including early ML. Superseded April 2026.",
        link: "https://www.federalreserve.gov/boarddocs/srletters/2011/sr1107.htm"
      },
      {
        date: "2021-03-31",
        title: "Interagency RFI on AI in financial services",
        docType: "Consultation",
        summary:
          "Joint request for information with OCC, FDIC, CFPB, and NCUA on bank use of AI and machine learning.",
        link: "https://www.federalregister.gov/documents/2021/03/31/2021-06607/request-for-information-and-comment-on-financial-institutions-use-of-artificial-intelligence-including-machine-learning"
      },
      {
        date: "2026-04-17",
        title: "SR 26-2: Revised interagency Model Risk Management guidance",
        docType: "Guidance",
        summary:
          "Fed, OCC, and FDIC jointly supersede SR 11-7 with a principles-based framework, most relevant to banks over $30B in assets; generative and agentic AI are excluded from scope as novel and rapidly evolving.",
        link: "https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm"
      },
      {
        date: "2026-05-01",
        title: "Vice Chair for Supervision speech on AI in the financial system",
        docType: "Speech",
        summary:
          "Sets out the Fed's supervisory philosophy on AI adoption in banking.",
        link: "https://www.federalreserve.gov/newsevents/speech/bowman20260501a.htm"
      }
    ],
    watchNext: [
      "Whether the Fed issues follow-on guidance covering generative and agentic AI, which the 2026 model risk revision deliberately left out",
      "Examination practice at large banks: how third-party foundation-model dependence is treated under existing vendor-risk guidance",
      "FSOC's annual report treatment of AI as a systemic vulnerability"
    ],
    faq: [
      {
        q: "Is SR 11-7 still in effect?",
        a: "No. On April 17, 2026 the Federal Reserve, OCC, and FDIC issued revised interagency model risk management guidance that supersedes the 2011 SR 11-7 framework. The revision covers traditional and ML models but explicitly excludes generative and agentic AI."
      },
      {
        q: "Does the Federal Reserve have AI-specific rules for banks?",
        a: "No. The Fed regulates AI through existing frameworks — model risk management, safety and soundness, and third-party risk guidance. Its 2026 public posture favors allowing responsible AI adoption rather than imposing AI-specific rulemaking."
      },
      {
        q: "How should banks govern generative AI if it's excluded from model risk guidance?",
        a: "The 2026 interagency guidance directs banks to apply their broader risk-management and governance practices to generative and agentic AI — meaning enterprise risk frameworks, vendor risk management, data governance, and board oversight, rather than formal model-validation requirements."
      }
    ],
    related: ["occ", "cfpb", "nist"],
    lastUpdated: "2026-08-19"
  },
  {
    slug: "cfpb",
    name: "CFPB",
    fullName: "Consumer Financial Protection Bureau",
    jurisdiction: "United States (consumer financial products)",
    role: "Consumer-protection regulator",
    binding: "Binding law",
    appliesTo:
      "Banks, credit unions, mortgage lenders, and fintechs offering consumer financial products in the US",
    answerFirst:
      "The CFPB regulates AI in lending through existing consumer law — chiefly the Equal Credit Opportunity Act and Regulation B — and its position is that complexity is no defense: a lender using machine-learning underwriting must still give specific, accurate reasons for denying credit. It reaffirmed this in Circular 2026-03 (May 2026), which tells lenders that black-box models do not excuse vague adverse-action notices.",
    overview: [
      "The CFPB's AI doctrine has been consistent across administrations: ECOA and Regulation B apply regardless of the technology making the decision. Circular 2022-03 first established that creditors cannot hide behind 'the algorithm' when explaining adverse action; the May 2026 circular renews that position for modern ML underwriting, requiring reasons that are specific and accurate to the individual applicant.",
      "Alongside adverse-action doctrine, the Bureau has examined AI chatbots in customer service (a 2023 report warning about obstruction of customers) and digital-marketing algorithms. For banks, the operational consequence is explainability: whatever model architecture is used, the institution must be able to extract legally sufficient, individually accurate denial reasons from it."
    ],
    keyDocument: "Circular 2026-03 — adverse action notices for ML underwriting (May 2026)",
    latestMove: "May 2026 circular: lenders using ML underwriting remain fully responsible for specific, accurate adverse-action reasons",
    timeline: [
      {
        date: "2022-05-26",
        title: "Circular 2022-03: adverse action from complex algorithms",
        docType: "Circular",
        summary:
          "Creditors using black-box models must still provide specific reasons for credit denials under ECOA — 'the model is too complex' is not a defense.",
        link: "https://www.consumerfinance.gov/compliance/circulars/circular-2022-03-adverse-action-notification-requirements-in-connection-with-credit-decisions-based-on-complex-algorithms/"
      },
      {
        date: "2023-06-06",
        title: "Report on AI chatbots in consumer finance",
        docType: "Report",
        summary:
          "Warns that poorly deployed chatbots can obstruct customers, give inaccurate information, and create legal risk for institutions.",
        link: "https://www.consumerfinance.gov/data-research/research-reports/chatbots-in-consumer-finance/"
      },
      {
        date: "2026-05-05",
        title: "Circular 2026-03: adverse action notices and ML underwriting",
        docType: "Circular",
        summary:
          "Reaffirms that lenders using machine-learning underwriting models must provide specific, accurate reasons for adverse action — updated for the current generation of models.",
        link: "https://www.consumerfinance.gov/compliance/circulars/"
      }
    ],
    watchNext: [
      "Enforcement actions testing adverse-action doctrine against modern ML and generative-AI-assisted underwriting",
      "Fair-lending (disparate impact) analysis of AI models under ECOA amid the shifting federal posture",
      "State-level AI consumer-protection laws filling any federal gaps"
    ],
    faq: [
      {
        q: "Can a bank use a black-box AI model for credit decisions?",
        a: "Only if it can still comply with ECOA and Regulation B: the lender must give applicants specific, accurate reasons for adverse action. CFPB Circulars 2022-03 and 2026-03 both state that model complexity does not excuse vague or generic denial reasons — which effectively requires explainability tooling around any underwriting model."
      },
      {
        q: "Does the CFPB have AI-specific regulations?",
        a: "No — and it has said it doesn't need them. The Bureau applies existing consumer law (ECOA, Regulation B, UDAAP) to AI systems. Its circulars clarify how those laws apply to algorithmic credit decisions, chatbots, and digital marketing."
      },
      {
        q: "What is CFPB Circular 2026-03?",
        a: "A May 2026 circular advising that lenders using complex algorithms, including machine-learning underwriting models, remain fully responsible for providing specific and accurate reasons when they deny or take adverse action on credit — the Bureau's updated statement of its adverse-action doctrine for the modern model stack."
      }
    ],
    related: ["occ", "federal-reserve", "eu-ai-act"],
    lastUpdated: "2026-08-19"
  },
  {
    slug: "ecb",
    name: "ECB",
    fullName: "European Central Bank — Banking Supervision (SSM)",
    jurisdiction: "Euro area (significant institutions)",
    role: "Prudential supervisor",
    binding: "Supervisory guidance",
    appliesTo: "The ~110 significant euro-area banking groups directly supervised under the SSM",
    answerFirst:
      "The ECB supervises AI at large euro-area banks through its existing prudential toolkit — model approvals, operational-resilience expectations, and on-site inspections — rather than AI-specific rules. AI is embedded in its supervisory priorities for 2026–28, with a sharpened focus on generative AI, and supervisors have made governance the central message: banks are accountable for AI outcomes regardless of how the technology performs.",
    overview: [
      "The ECB's involvement runs on two tracks. For regulatory-capital models (IRB), any machine-learning component passes through the ECB's internal-model approval and the EBA's ML-for-IRB expectations. For everything else — fraud detection, customer service, coding assistants, generative AI — the ECB supervises through operational resilience and governance expectations, now formalized in its 2026–28 supervisory priorities under the digitalisation and ICT priority.",
      "ECB supervisors have been increasingly vocal in 2026: a February 2026 speech ('Technology is neutral, governance is not') captures the house view that AI adoption is welcome but board-level accountability, data quality, and control frameworks decide whether it is safe. The ECB is not the AI Act's market-surveillance authority — that falls to national authorities — but it factors AI Act readiness into its assessment of banks' governance."
    ],
    keyDocument: "SSM supervisory priorities 2026–28 (AI under the operational-resilience priority)",
    latestMove: "Feb 2026 supervisory speech on AI governance; 2026–28 priorities single out generative AI",
    timeline: [
      {
        date: "2024-05-01",
        title: "Financial Stability Review examines AI in the financial system",
        docType: "Report",
        summary:
          "ECB analysis of AI adoption, concentration among providers, and potential herding in euro-area finance.",
        link: "https://www.ecb.europa.eu/press/financial-stability-publications/fsr/html/index.en.html"
      },
      {
        date: "2025-11-01",
        title: "SSM supervisory priorities 2026–28 published",
        docType: "Guidance",
        summary:
          "AI monitoring continues under the operational-resilience and ICT priority, with a more focused approach to generative-AI applications, credit scoring, and fraud detection.",
        link: "https://www.bankingsupervision.europa.eu/framework/priorities/html/ssm.supervisory_priorities202511.en.html"
      },
      {
        date: "2026-02-24",
        title: "Speech: 'Technology is neutral, governance is not'",
        docType: "Speech",
        summary:
          "ECB supervision sets out its expectations for AI adoption in banking: accountability, data quality, and governance over any specific technology choice.",
        link: "https://www.bankingsupervision.europa.eu/press/speeches/date/2026/html/ssm.sp260224~6c5b64a77a.en.html"
      }
    ],
    watchNext: [
      "How the ECB folds EU AI Act readiness into SREP governance scores for significant institutions",
      "Supervisory attention to generative AI in customer-facing and credit processes under the 2026–28 priorities",
      "Potential ECB guide or expectations document dedicated to AI, consolidating the speech-level messaging"
    ],
    faq: [
      {
        q: "Does the ECB approve banks' AI models?",
        a: "Only models used for regulatory capital (internal models under IRB) go through formal ECB approval, including any ML components. Other AI systems — fraud detection, chatbots, generative AI tools — are supervised through governance and operational-resilience expectations rather than pre-approval."
      },
      {
        q: "Is the ECB responsible for enforcing the EU AI Act on banks?",
        a: "No. AI Act market surveillance is assigned to national authorities. The ECB supervises prudential soundness — but it assesses whether a bank's governance and risk management adequately cover its AI use, which in practice includes AI Act readiness."
      },
      {
        q: "What are the ECB's supervisory priorities on AI for 2026–28?",
        a: "AI sits under the operational-resilience and ICT priority: continued monitoring of AI adoption with a more focused approach to generative-AI applications, and particular attention to AI in credit scoring and fraud detection."
      }
    ],
    related: ["eba", "eu-ai-act", "fsb"],
    lastUpdated: "2026-08-19"
  },
  {
    slug: "eba",
    name: "EBA",
    fullName: "European Banking Authority",
    jurisdiction: "European Union",
    role: "EU banking standard-setter",
    binding: "Supervisory guidance",
    appliesTo: "All EU credit institutions and payment providers, via national competent authorities",
    answerFirst:
      "The EBA is the EU body translating the AI Act into banking practice. It published a factsheet on the Act's implications for banking and payments in November 2025, reported on AI adoption across EU banks the same year, and through 2026–27 is coordinating a common supervisory approach among national authorities while feeding the banking perspective into the EU AI Office. Its earlier machine-learning-for-IRB work already governs how ML enters regulatory capital models.",
    overview: [
      "The EBA has worked on bank AI longer than most: a 2020 report on big data and advanced analytics set early governance expectations, and its 2021–23 workstream on machine learning for internal ratings-based (IRB) models defined how banks may use ML in capital models without losing explainability and supervisability.",
      "With the AI Act now applicable to high-risk banking use cases, the EBA's role has shifted to implementation: mapping AI Act duties onto the existing CRD/CRR and guidelines framework so banks are not regulated twice or inconsistently, promoting supervisory convergence among national competent authorities, and participating in the AI Board's financial-services subgroup. Its 2025 adoption report — covering credit scoring, fraud detection, customer support, and general-purpose AI — is the best official snapshot of what EU banks actually deploy."
    ],
    keyDocument: "Factsheet on the AI Act's implications for banking and payments (Nov 2025)",
    latestMove: "2026–27 workplan: supervisory convergence on AI Act implementation in banking",
    timeline: [
      {
        date: "2020-01-01",
        title: "Report on big data and advanced analytics",
        docType: "Report",
        summary:
          "Early EU expectations for bank use of data-driven models: governance, explainability, consumer protection.",
        link: "https://www.eba.europa.eu/regulation-and-policy/digital-finance"
      },
      {
        date: "2021-11-01",
        title: "Discussion paper on machine learning for IRB models",
        docType: "Consultation",
        summary:
          "Opens the question of how ML can be used in regulatory capital models; followed by 2023 follow-up setting expectations.",
        link: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Discussions/2022/Discussion%20on%20machine%20learning%20for%20IRB%20models/1023883/Discussion%20paper%20on%20machine%20learning%20for%20IRB%20models.pdf"
      },
      {
        date: "2025-09-01",
        title: "Report: rising application of AI in EU banking and payments",
        docType: "Report",
        summary:
          "Official snapshot of AI across EU banks — 92% already deploying AI, led by credit scoring, fraud detection, and customer support, with general-purpose and agentic AI under monitoring.",
        link: "https://www.eba.europa.eu/sites/default/files/2025-09/146b3558-d026-47bf-a872-f05e93ed30d2/Rising%20application%20of%20AI%20in%20EU%20banking%20and%20payments%20sector.pdf"
      },
      {
        date: "2025-11-21",
        title: "Factsheet: AI Act implications for banking and payments",
        docType: "Guidance",
        summary:
          "Maps AI Act obligations (especially high-risk credit scoring) onto the existing EU banking framework; finds the Act complementary, with no significant contradictions.",
        link: "https://www.eba.europa.eu/sites/default/files/2025-11/d8b999ce-a1d9-4964-9606-971bbc2aaf89/AI%20Act%20implications%20for%20the%20EU%20banking%20sector.pdf"
      },
      {
        date: "2026-01-01",
        title: "2026–27 AI Act implementation workplan",
        docType: "Framework",
        summary:
          "Supervisory-convergence activities among national competent authorities, input to the European AI Office, and participation in the AI Board Subgroup on Financial Services.",
        link: "https://www.eba.europa.eu/sites/default/files/2025-10/b9fe2713-117b-440f-aae0-bdcb8832c3e0/EBA%20Work%20programme%202026.pdf"
      }
    ],
    watchNext: [
      "EBA guidance reconciling AI Act model requirements with existing EBA guidelines (loan origination, internal governance)",
      "Supervisory-convergence output for national authorities enforcing the high-risk regime on banks",
      "Whether ML-for-IRB expectations get updated for the AI Act era"
    ],
    faq: [
      {
        q: "What has the EBA said about the AI Act for banks?",
        a: "Its November 2025 factsheet explains how AI Act obligations — particularly the high-risk classification of credit scoring — interact with the existing EU banking framework, and its 2026–27 workplan focuses on getting national supervisors to apply the Act to banks consistently."
      },
      {
        q: "Can EU banks use machine learning in capital (IRB) models?",
        a: "Yes, within the expectations set by the EBA's machine-learning-for-IRB workstream (2021 discussion paper and 2023 follow-up): banks must preserve explainability, human understanding of model drivers, and supervisability. The ECB applies these expectations in model approvals."
      },
      {
        q: "How common is AI in EU banking?",
        a: "The EBA's 2025 adoption report found AI in production across most EU banks — dominated by fraud detection, credit scoring, and customer support, with general-purpose AI spreading fast in internal productivity use cases."
      }
    ],
    related: ["eu-ai-act", "ecb", "fsb"],
    lastUpdated: "2026-08-19"
  },
  {
    slug: "uk",
    name: "UK (BoE / PRA / FCA)",
    fullName: "Bank of England, Prudential Regulation Authority, and Financial Conduct Authority",
    jurisdiction: "United Kingdom",
    role: "Prudential and conduct regulators",
    binding: "Supervisory guidance",
    appliesTo: "UK banks, building societies, investment firms, and insurers",
    answerFirst:
      "The UK has deliberately chosen not to write an AI rulebook for finance. The Bank of England, PRA, and FCA regulate AI through existing technology-agnostic frameworks — most recently reaffirmed in the BoE/PRA's April 2026 response to Parliament's inquiry on AI in financial services. Instead of rules, the UK runs the deepest supervisory monitoring program anywhere: periodic AI surveys (2019, 2022, 2024, and a new one covering foundation models and agentic AI), sandbox initiatives, and AI as a named 2026 supervisory priority.",
    overview: [
      "The UK approach was set by DP5/22 (2022) and the FS2/23 feedback statement (2023): existing frameworks — the Senior Managers regime, model risk management (SS1/23), operational resilience, and Consumer Duty — already cover AI, so the regulators supervise outcomes rather than technology. The government reinforced this in January 2026 with strategic letters directing 19 regulators, including the FCA and Bank of England, to publish plans for enabling safe AI innovation and report annually.",
      "On April 1, 2026 the BoE and PRA responded to the Treasury Select Committee's inquiry on AI, reiterating the technology-agnostic stance while keeping 'whether further guardrails are needed' under review. AI adoption is a PRA supervisory priority for 2026, meaning firms face detailed supervisory dialogue on their AI governance even without new rules. The FCA, meanwhile, has invested in AI sandbox and live-testing initiatives to observe deployments directly."
    ],
    keyDocument: "BoE/PRA response to the Treasury Select Committee on AI (Apr 2026)",
    latestMove: "Apr 2026: tech-agnostic approach reaffirmed; AI named a 2026 PRA supervisory priority; new AI survey covering foundation and agentic AI",
    timeline: [
      {
        date: "2022-10-11",
        title: "DP5/22: Artificial Intelligence and Machine Learning",
        docType: "Consultation",
        summary:
          "Joint BoE/PRA/FCA discussion paper asking whether existing regulation is sufficient for AI in financial services.",
        link: "https://www.bankofengland.co.uk/prudential-regulation/publication/2022/october/artificial-intelligence"
      },
      {
        date: "2023-10-26",
        title: "FS2/23 feedback statement",
        docType: "Report",
        summary:
          "Concludes existing frameworks largely suffice; regulators will remain technology-agnostic and monitor via surveys.",
        link: "https://www.bankofengland.co.uk/prudential-regulation/publication/2023/october/artificial-intelligence-and-machine-learning"
      },
      {
        date: "2024-11-21",
        title: "Third BoE/FCA AI survey in UK financial services",
        docType: "Survey",
        summary:
          "Finds 75% of firms already using AI; foundation models a fast-growing share; third-party exposure concentrated.",
        link: "https://www.bankofengland.co.uk/report/2024/artificial-intelligence-in-uk-financial-services-2024"
      },
      {
        date: "2026-01-01",
        title: "Government strategic letters on AI to 19 regulators",
        docType: "Framework",
        summary:
          "DSIT and DBT direct regulators including the FCA and Bank of England to publish plans by May 2026 for enabling safe AI-powered innovation and to report annually.",
        link: "https://www.gov.uk/government/publications/how-will-regulators-enable-safe-ai-powered-innovation-joint-letter-from-dsit-secretary-of-state-and-dbt-secretary-of-state"
      },
      {
        date: "2026-04-01",
        title: "BoE/PRA response to the Treasury Select Committee inquiry on AI",
        docType: "Report",
        summary:
          "Reaffirms the technology-agnostic approach, sets out a roadmap for responsible AI adoption, and keeps the need for further guardrails under review.",
        link: "https://www.bankofengland.co.uk/-/media/boe/files/letter/2026/response-to-tsc-inquiry-report-on-ai-in-financial-services"
      },
      {
        date: "2026-06-01",
        title: "New AI survey covering foundation models and agentic AI",
        docType: "Survey",
        summary:
          "Fourth-generation voluntary survey of AI/ML use in UK financial services, extended to foundation models, generative AI, and agentic AI.",
        link: "https://www.bankofengland.co.uk/prudential-regulation/regulatory-digest/2026/june-2026"
      }
    ],
    watchNext: [
      "Output of the new AI survey — the first regulator dataset anywhere on agentic AI in banks",
      "Whether rising political scrutiny pushes the PRA/FCA from monitoring toward formal guardrails",
      "FCA AI live-testing and sandbox findings feeding into supervisory expectations"
    ],
    faq: [
      {
        q: "Does the UK have an AI law for banks?",
        a: "No. The UK has explicitly chosen not to create AI-specific rules for financial services. The Bank of England, PRA, and FCA apply existing technology-agnostic frameworks — senior manager accountability, model risk management (SS1/23), operational resilience, and the Consumer Duty — to AI, a position most recently reaffirmed in April 2026."
      },
      {
        q: "How do UK regulators monitor AI in banks?",
        a: "Primarily through recurring joint BoE/FCA surveys (2019, 2022, 2024, and a 2026 edition extended to foundation models and agentic AI), supervisory dialogue under the PRA's 2026 priorities, and FCA sandbox/live-testing programs that observe real deployments."
      },
      {
        q: "How does the UK approach differ from the EU AI Act?",
        a: "The EU imposes binding, AI-specific obligations with credit scoring classified as high-risk; the UK regulates the same activities through existing outcome-based rules with no AI-specific statute. UK banks operating in the EU must still comply with the AI Act for their EU business."
      }
    ],
    related: ["eu-ai-act", "fsb", "ecb"],
    lastUpdated: "2026-08-19"
  },
  {
    slug: "basel-committee",
    name: "Basel Committee",
    fullName: "Basel Committee on Banking Supervision (BCBS)",
    jurisdiction: "Global (28 jurisdictions)",
    role: "Global banking standard-setter",
    binding: "Non-binding standards",
    appliesTo: "Internationally active banks, via national implementation of Basel standards",
    answerFirst:
      "The Basel Committee has not issued AI-specific standards for banks — it monitors AI under its digitalisation-of-finance workstream and addresses the risks through existing prudential channels. Its May 2024 digitalisation report analyzed AI/ML among the technologies reshaping banking, and its 2025–26 work programme keeps AI under watch, including a June 2026 report on ICT risk-management practices and ongoing attention to AI's implications for bank cybersecurity.",
    overview: [
      "The Committee's posture is deliberate patience: rather than write AI rules that member jurisdictions would implement unevenly, it tracks how AI changes the risk profile of banks — operational resilience, third-party dependence, cyber threat, and strategic risk — and lets existing Basel standards (operational risk, outsourcing principles) carry the load.",
      "Two documents anchor the current position: the May 2024 'Digitalisation of finance' report, which assessed AI/ML alongside APIs, DLT, and cloud, warning about new vulnerabilities and system-wide interconnection; and the June 2026 range-of-practices report on ICT risk management, produced under a work programme that explicitly monitors AI developments and their cybersecurity implications. If the FSB's 2026 sound-practices work hardens into expectations, the Basel Committee is the likely channel for turning them into supervisory standards."
    ],
    keyDocument: "Digitalisation of finance report (May 2024)",
    latestMove: "June 2026 ICT risk-management report; AI monitoring continues in the 2025–26 work programme",
    timeline: [
      {
        date: "2022-03-16",
        title: "Newsletter on artificial intelligence and machine learning",
        docType: "Guidance",
        summary:
          "Supervisory observations on bank AI/ML use: explainability, governance, and resilience themes for internationally active banks.",
        link: "https://www.bis.org/publ/bcbs_nl27.htm"
      },
      {
        date: "2024-05-16",
        title: "Digitalisation of finance report",
        docType: "Report",
        summary:
          "Assesses AI/ML, APIs, DLT, and cloud: benefits for banks and customers, but new vulnerabilities, greater operational-resilience demands, and potential system-wide risks from interconnection.",
        link: "https://www.bis.org/bcbs/publ/d575.htm"
      },
      {
        date: "2026-06-02",
        title: "Range of practices report on ICT risk management",
        docType: "Report",
        summary:
          "Analysis of global ICT risk-management practices under the 2025–26 work programme, which also monitors AI developments and their implications for bank cybersecurity.",
        link: "https://www.bis.org/press/p260602.htm"
      }
    ],
    watchNext: [
      "Whether FSB sound practices on AI (final report Oct 2026) get translated into Basel supervisory expectations",
      "Treatment of AI third-party concentration under Basel outsourcing and operational-resilience principles",
      "Any move from monitoring to standard-setting as agentic AI enters core banking processes"
    ],
    faq: [
      {
        q: "Has the Basel Committee issued AI regulations?",
        a: "No. The Committee monitors AI under its digitalisation workstream and addresses risks through existing standards on operational risk and resilience. Its most relevant publications are the 2022 AI/ML newsletter, the May 2024 digitalisation-of-finance report, and the June 2026 ICT risk-management report."
      },
      {
        q: "How does Basel Committee work reach actual banks?",
        a: "Through national implementation: the Committee's 28 member jurisdictions translate Basel standards and guidance into local regulation. Its AI observations shape how the ECB, PRA, OCC, and other supervisors examine banks even without a dedicated AI standard."
      }
    ],
    related: ["fsb", "ecb", "occ"],
    lastUpdated: "2026-08-19"
  },
  {
    slug: "nist",
    name: "NIST",
    fullName: "National Institute of Standards and Technology — AI Risk Management Framework",
    jurisdiction: "United States (voluntary, used globally)",
    role: "Standards body",
    binding: "Voluntary framework",
    appliesTo: "Any organization; widely adopted by US banks as the scaffold for AI governance programs",
    answerFirst:
      "NIST is not a regulator, but its AI Risk Management Framework (AI RMF 1.0, January 2023) has become the de facto template US banks use to structure AI governance — especially since the April 2026 interagency model-risk guidance left generative and agentic AI to banks' broader risk programs. The framework's four functions (Govern, Map, Measure, Manage) plus its July 2024 Generative AI Profile give banks an examiner-legible way to demonstrate control over AI that formal model-risk rules no longer cover.",
    overview: [
      "The AI RMF is voluntary, but voluntary frameworks harden fast in banking: when examiners ask how a bank governs its generative AI and there is no binding rule to point to, institutions answer with NIST-aligned programs. The Generative AI Profile (NIST AI 600-1) enumerates risks specific to generative systems — confabulation, data leakage, prompt injection — with suggested actions that map cleanly onto bank control frameworks.",
      "For banks operating internationally, the RMF also functions as a crosswalk: its categories align with the FSB's sound-practices work and provide a defensible baseline for the governance the EU AI Act requires of high-risk system deployers."
    ],
    keyDocument: "AI Risk Management Framework 1.0 (Jan 2023) + Generative AI Profile (Jul 2024)",
    latestMove: "Growing role as the default governance scaffold after the 2026 US model-risk revision excluded generative AI",
    timeline: [
      {
        date: "2023-01-26",
        title: "AI Risk Management Framework 1.0 released",
        docType: "Framework",
        summary:
          "Voluntary framework organizing AI risk management into four functions: Govern, Map, Measure, Manage.",
        link: "https://www.nist.gov/itl/ai-risk-management-framework"
      },
      {
        date: "2024-07-26",
        title: "Generative AI Profile (NIST AI 600-1)",
        docType: "Framework",
        summary:
          "Companion profile enumerating generative-AI-specific risks — confabulation, information leakage, prompt injection — with suggested mitigations.",
        link: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"
      },
      {
        date: "2026-04-17",
        title: "US model-risk revision amplifies the RMF's role",
        docType: "Milestone",
        summary:
          "With generative and agentic AI excluded from formal interagency model-risk guidance (SR 26-2), NIST's framework becomes the leading reference for how banks govern those systems.",
        link: "https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm"
      }
    ],
    watchNext: [
      "Whether US banking agencies formally reference the AI RMF in the AI governance guidance the OCC has signalled",
      "Updates to the Generative AI Profile as agentic AI risks crystallize",
      "Use of the RMF as an EU AI Act compliance crosswalk by global banks"
    ],
    faq: [
      {
        q: "Is the NIST AI RMF mandatory for banks?",
        a: "No — it is voluntary. But it has become the standard scaffold US banks use for AI governance, particularly for generative and agentic AI, which the April 2026 interagency model-risk guidance deliberately left to banks' broader risk-management programs."
      },
      {
        q: "How does the NIST AI RMF relate to bank model risk management?",
        a: "Model risk guidance covers validation of quantitative models; the AI RMF covers organization-wide AI risk governance, including systems outside formal model-risk scope. Most banks run them side by side: revised interagency guidance for traditional/ML models, NIST-aligned governance for generative AI."
      }
    ],
    related: ["occ", "federal-reserve", "fsb"],
    lastUpdated: "2026-08-19"
  }
];

// Display order everywhere (hub table, ItemList, sitemap): US authorities
// first, then rest of world. Entries above can stay in any physical order —
// new ones not listed here sort last until added.
const DISPLAY_ORDER = [
  "federal-reserve",
  "occ",
  "cfpb",
  "nist",
  "eu-ai-act",
  "ecb",
  "eba",
  "uk",
  "fsb",
  "basel-committee"
];

function displayIndex(slug: string): number {
  const idx = DISPLAY_ORDER.indexOf(slug);
  return idx === -1 ? DISPLAY_ORDER.length : idx;
}

export const REGULATORS: Regulator[] = [...REGULATOR_ENTRIES].sort(
  (a, b) => displayIndex(a.slug) - displayIndex(b.slug)
);

export function getRegulator(slug: string): Regulator | undefined {
  return REGULATORS.find((r) => r.slug === slug);
}

export function formatTimelineDate(date: string): string {
  const [y, m, d] = date.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const month = months[Number(m) - 1] ?? "";
  return d ? `${month} ${Number(d)}, ${y}` : `${month} ${y}`;
}

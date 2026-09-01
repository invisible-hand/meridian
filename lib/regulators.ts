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
  docType: DocType | "Milestone";
  summary: string;
  link?: string;
  /** Set when this row is a document with its own page under /ai-regulation/documents/ */
  docSlug?: string;
};

export type DocType =
  | "Report"
  | "Guidance"
  | "Consultation"
  | "Regulation"
  | "Circular"
  | "Speech"
  | "Survey"
  | "Framework"
  | "Statute"
  | "Enforcement"
  | "Letter"
  | "Bulletin";

export type DocStatus =
  | "Proposed"
  | "Comment period open"
  | "Final"
  | "In force"
  | "Superseded"
  | "Withdrawn";

export const USE_CASES = [
  "credit-underwriting",
  "fair-lending",
  "aml-kyc",
  "fraud",
  "customer-chatbots",
  "model-risk",
  "generative-agentic-ai",
  "third-party-vendors",
  "cybersecurity",
  "data-privacy",
  "trading-markets",
  "governance-general"
] as const;

export type UseCase = (typeof USE_CASES)[number];

/**
 * One primary-source document (a bulletin, circular, regulation, report…).
 * Documents are the atomic unit of the tracker: each gets its own page, the
 * authority timelines are derived from them, and the deadlines calendar and
 * use-case matrix are built from their fields.
 */
export type RegDocument = {
  /** Stable, identifier-based, never contains a status word */
  slug: string;
  /** Slug of the authority that issued it (must exist in REGULATORS) */
  authority: string;
  /** How people cite it: "OCC Bulletin 2026-13", "SR 11-7" */
  shortName: string;
  title: string;
  /** Strings a news story would literally contain when referring to this document */
  aliases: string[];
  docType: DocType;
  /** Declared status; `effectiveStatus()` in lib/tracker.ts refines it from dates */
  status: DocStatus;
  /** Publication date, YYYY-MM-DD */
  date: string;
  effectiveDate?: string;
  commentDeadline?: string;
  supersedes?: string[];
  supersededBy?: string;
  /** Sibling slugs when the same interagency document was issued under several numbers (SR 26-2 / Bulletin 2026-13 / FIL-15-2026) */
  interagency?: string[];
  /** True when the document is a warning to the industry (an alert, Dear-CEO letter, risk report) — feeds /ai-regulation/regulator-warnings */
  warning?: boolean;
  /** Official primary-source URL (regulator domain, eur-lex, federalregister…) */
  link: string;
  appliesTo: string;
  /** 2–4 quotable sentences rendered first on the page */
  answerFirst: string;
  keyPoints: string[];
  whatChanged: string;
  useCases: UseCase[];
  faq: Faq[];
  /** ISO date this document's content was last reviewed/updated */
  lastUpdated: string;
};

export type Faq = { q: string; a: string };

/**
 * A long-form answer to one question this authority is the primary source for,
 * rendered as its own question-phrased section on the authority page.
 *
 * Use when a *question* — typically a grounding query from Bing Webmaster
 * Tools' AI Performance report, or a GSC query cluster — deserves a fuller,
 * cross-authority answer than the FAQ format allows. Phrase `question` the way
 * the query is phrased; the section H2 and the FAQPage schema both use it.
 */
export type DeepDive = {
  /** Anchor id, kebab-case and stable (it is a URL fragment forever) */
  id: string;
  /** Short label for the section rule, e.g. "Automated credit decisions" */
  label: string;
  /** The question, phrased as a searcher or model asks it */
  question: string;
  /** 2–4 self-contained, quotable sentences — rendered first, before the table */
  answer: string;
  /** The requirement stack: one row per rule that applies */
  requirements?: {
    /** The rule, as it is cited: "ECOA / Regulation B §1002.9" */
    rule: string;
    /** Authority slug (links to that page) or a plain name for bodies not tracked */
    authority: string;
    /** What it actually demands, one sentence */
    requirement: string;
    /** Optional document slug for the primary source */
    docSlug?: string;
    /** Official source URL, when the primary source is not (yet) a tracked document */
    link?: string;
    /** Optional status note: "In force", "From Jan 1, 2027", … */
    when?: string;
  }[];
  /** Paragraphs of context after the table */
  detail?: string[];
  /** Concrete "what this means in practice" items */
  practice?: string[];
};

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
  /** Strings a news story would literally contain when referring to this authority */
  aliases: string[];
  /**
   * The direct answer, rendered first on the page under the question-phrased
   * H1. 2–4 sentences, self-contained, quotable.
   */
  answerFirst: string;
  /** Longer context paragraphs, rendered after the at-a-glance table */
  overview: string[];
  keyDocument: string;
  latestMove: string;
  /**
   * Dated events that are NOT documents (an obligation taking effect, a
   * consultation closing). Documents live in lib/regulatory-documents.ts and
   * are merged into the rendered timeline automatically.
   */
  milestones: TimelineEntry[];
  watchNext: string[];
  faq: Faq[];
  /** Long-form answers to questions this authority owns — see DeepDive */
  deepDives?: DeepDive[];
  related: string[];
  /** ISO date this entry's content was last reviewed/updated */
  lastUpdated: string;
};

export const TRACKER_LAST_REVIEWED = "2026-09-01";

// Authorities are grouped US-first on the hub. Every slug here must also
// appear in DISPLAY_ORDER below.
export const US_AUTHORITIES = new Set([
  "federal-reserve",
  "occ",
  "fdic",
  "ncua",
  "cfpb",
  "sec",
  "cftc",
  "fincen",
  "treasury",
  "ny-dfs",
  "colorado-ai-act",
  "california",
  "nist"
]);

export function isUsAuthority(slug: string): boolean {
  return US_AUTHORITIES.has(slug);
}

const REGULATOR_ENTRIES: Regulator[] = [
  {
    "slug": "federal-reserve",
    "name": "Federal Reserve",
    "fullName": "Board of Governors of the Federal Reserve System",
    "jurisdiction": "United States (state member banks, bank holding companies, large financial institutions)",
    "role": "Central bank and prudential supervisor",
    "binding": "Supervisory guidance",
    "appliesTo": "State member banks, bank and savings-and-loan holding companies, and US operations of foreign banks",
    "aliases": [
      "Federal Reserve",
      "Federal Reserve Board",
      "Fed Board of Governors",
      "the Fed"
    ],
    "answerFirst": "The Federal Reserve supervises bank AI through its model risk and safety-and-soundness framework rather than AI-specific rules. Its landmark document, SR 11-7 (2011), was superseded in April 2026 by revised interagency model risk management guidance issued jointly with the OCC and FDIC — which notably excludes generative and agentic AI from its scope. Fed leadership in 2026 has publicly favored an innovation-permissive stance, emphasizing that supervisors should not impede responsible AI adoption.",
    "overview": [
      "SR 11-7 was arguably the most influential model-governance document in world banking — the template for how banks validated any quantitative model, including ML. Its April 2026 replacement keeps the core disciplines (validation, effective challenge, governance) while modernizing for machine learning and deliberately leaving generative and agentic AI to enterprise risk management pending further guidance.",
      "Vice Chair for Supervision remarks in May 2026 framed AI as a technology the financial system should adopt with appropriate controls, positioning the Fed against pre-emptive AI-specific rulemaking. Banks should expect examination focus on governance, third-party (foundation-model vendor) risk, and data controls rather than new AI rules."
    ],
    "keyDocument": "SR 26-2 — Revised interagency Model Risk Management guidance (Apr 2026, supersedes SR 11-7)",
    "latestMove": "Apr 2026 revised model risk guidance; May 2026 Vice Chair speech on AI in the financial system",
    "milestones": [
      {
        "date": "2023-12-14",
        "title": "FSOC annual report identifies AI as a financial-system vulnerability for the first time",
        "summary": "The Financial Stability Oversight Council's 2023 Annual Report, which the Federal Reserve Chair votes on as a Council member, was the first to list the use of AI in financial services as a vulnerability and recommended that member agencies build capacity to monitor it.",
        "link": "https://home.treasury.gov/system/files/261/FSOC2023AnnualReport.pdf",
        "docType": "Milestone"
      }
    ],
    "watchNext": [
      "The interagency request for information on model risk management and banks' use of AI — including generative, agentic, and AI-based models — that the Fed, OCC, and FDIC said in April 2026 they would issue 'in the near future'; it had not appeared in the Federal Register as of August 26, 2026",
      "Whether the Fed issues follow-on guidance covering generative and agentic AI, which SR 26-2 deliberately left out of scope",
      "Examination practice at large banks: how third-party foundation-model dependence is treated under SR 23-4 third-party risk guidance",
      "FSOC's AI working group, formalized in the December 2025 annual report, and the AI treatment in the next annual report"
    ],
    "faq": [
      {
        "q": "Is SR 11-7 still in effect?",
        "a": "No. On April 17, 2026 the Federal Reserve, OCC, and FDIC issued revised interagency model risk management guidance that supersedes the 2011 SR 11-7 framework. The revision covers traditional and ML models but explicitly excludes generative and agentic AI."
      },
      {
        "q": "Does the Federal Reserve have AI-specific rules for banks?",
        "a": "No. The Fed regulates AI through existing frameworks — model risk management, safety and soundness, and third-party risk guidance. Its 2026 public posture favors allowing responsible AI adoption rather than imposing AI-specific rulemaking."
      },
      {
        "q": "How should banks govern generative AI if it's excluded from model risk guidance?",
        "a": "The 2026 interagency guidance directs banks to apply their broader risk-management and governance practices to generative and agentic AI — meaning enterprise risk frameworks, vendor risk management, data governance, and board oversight, rather than formal model-validation requirements."
      }
    ],
    "related": [
      "occ",
      "cfpb",
      "nist"
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "occ",
    "name": "OCC",
    "fullName": "Office of the Comptroller of the Currency",
    "jurisdiction": "United States (national banks and federal savings associations)",
    "role": "Prudential supervisor",
    "binding": "Supervisory guidance",
    "appliesTo": "National banks, federal savings associations, and federal branches of foreign banks",
    "aliases": [
      "OCC",
      "Comptroller of the Currency",
      "Office of the Comptroller of the Currency"
    ],
    "answerFirst": "The OCC supervises AI at national banks through model risk management and safety-and-soundness examination — not through AI-specific rules. The landscape changed on April 17, 2026: the OCC, Federal Reserve, and FDIC issued revised interagency model risk management guidance (OCC Bulletin 2026-13) that supersedes the 2011 framework, rescinds OCC 2011-12, and explicitly excludes generative and agentic AI from its scope, leaving those to banks' broader risk-management and governance programs.",
    "overview": [
      "For fifteen years the operative document was the 2011 Supervisory Guidance on Model Risk Management (OCC 2011-12 / Fed SR 11-7). The April 2026 revision modernizes that framework and makes a deliberate scoping choice: generative and agentic AI are called 'novel and rapidly evolving' and carved out of formal model-risk requirements, with banks told to govern them through enterprise risk management instead. The OCC simultaneously rescinded older issuances including its 1997 credit-scoring-models bulletin and 2021 BSA/AML model risk FAQ.",
      "Beyond model risk, the OCC's May 2026 Semiannual Risk Perspective flags AI as a driver of fraud and increasingly fast, sophisticated cyberattacks, and signals that AI governance guidance is on the horizon. The practical posture in 2026 is innovation-friendly: examiners test whether banks understand and control their AI, not whether they use it."
    ],
    "keyDocument": "OCC Bulletin 2026-13 — Revised interagency Model Risk Management guidance (Apr 2026)",
    "latestMove": "Apr 2026 revised model risk guidance excluding generative/agentic AI; May 2026 risk report on AI-enabled fraud",
    "milestones": [],
    "watchNext": [
      "The interagency request for information on model risk management and banks' use of AI (including generative and agentic AI) that the OCC, Fed, and FDIC promised 'in the near future' in Bulletin 2026-13 and repeated in the Spring 2026 Semiannual Risk Perspective — not yet published as of August 26, 2026",
      "The OCC's stated review of supervisory expectations, guidance, and regulations to 'right-size' AI expectations for community banks that rely on third-party technology (Spring 2026 Semiannual Risk Perspective)",
      "How examiners treat generative/agentic AI now that it sits outside formal model-risk requirements",
      "Interaction between the deregulatory 2025–26 posture and consumer-protection enforcement on AI lending"
    ],
    "faq": [
      {
        "q": "Does SR 11-7 / OCC 2011-12 still apply to AI models?",
        "a": "No — as of April 17, 2026 the 2011 interagency model risk guidance was superseded by revised guidance from the OCC, Federal Reserve, and FDIC (OCC Bulletin 2026-13). Traditional and machine-learning models fall under the revised framework; generative and agentic AI are explicitly excluded and are instead governed through banks' broader risk-management programs."
      },
      {
        "q": "Why did the 2026 guidance exclude generative AI?",
        "a": "The agencies concluded generative and agentic AI are 'novel and rapidly evolving' — too fast-moving for prescriptive model-validation requirements. Banks are expected to apply enterprise risk management and governance controls instead, and further AI-specific guidance has been signalled."
      },
      {
        "q": "Is there any binding US federal AI regulation for banks?",
        "a": "There is no AI-specific federal statute for banks. AI use is regulated through existing law — safety and soundness, fair lending (ECOA), UDAP/UDAAP — and supervisory guidance like the 2026 model risk framework. This contrasts with the EU, where the AI Act imposes binding AI-specific obligations."
      },
      {
        "q": "Which OCC bulletins did Bulletin 2026-13 rescind?",
        "a": "Four issuances: OCC Bulletin 2011-12 (Supervisory Guidance on Model Risk Management), OCC Bulletin 1997-24 (Credit Scoring Models: Examination Guidance), OCC Bulletin 2021-19 (the interagency statement on model risk management for BSA/AML compliance), and the 'Model Risk Management' booklet of the Comptroller's Handbook. The rescinded bulletins remain readable in the OCC's rescinded-bulletins archive."
      }
    ],
    "related": [
      "federal-reserve",
      "cfpb",
      "fsb"
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fdic",
    "name": "FDIC",
    "fullName": "Federal Deposit Insurance Corporation",
    "jurisdiction": "United States (state-chartered banks that are not Federal Reserve members; deposit insurer for all insured banks)",
    "role": "Prudential supervisor and deposit insurer",
    "binding": "Supervisory guidance",
    "appliesTo": "FDIC-supervised state non-member banks and state savings associations; interagency guidance it co-issues also covers OCC- and Fed-supervised institutions",
    "aliases": [
      "FDIC",
      "Federal Deposit Insurance Corporation",
      "Federal Deposit Insurance"
    ],
    "answerFirst": "The FDIC has no AI-specific rule. It supervises AI at the roughly 2,800 state non-member banks it oversees through interagency model risk management guidance, third-party risk guidance, and safety-and-soundness examination. On April 17, 2026 it issued FIL-15-2026, adopting the revised interagency Model Risk Management guidance jointly with the OCC and Federal Reserve, rescinding FIL-22-2017 (its 2017 adoption of the 2011 framework) and FIL-27-2021 (the BSA/AML model-risk statement). The revised guidance is most relevant to banks above $30 billion in assets, is explicitly non-binding, and leaves generative and agentic AI to banks' broader risk-management programs.",
    "overview": [
      "The FDIC is the primary federal regulator for state-chartered banks that are not members of the Federal Reserve System — mostly community banks — so its AI posture is shaped by institutions that buy AI from vendors rather than build it. That is why its most-cited AI-relevant documents are the June 2023 Interagency Guidance on Third-Party Relationships (FIL-29-2023) and the May 2024 community-bank third-party risk guide, alongside the model risk framework it shares with the OCC and Federal Reserve.",
      "Under Chairman Travis Hill (Acting Chairman from January 2025, Chairman since 2026) the FDIC has pivoted to an innovation-permissive stance: his January 10, 2025 'Charting a New Course' speech called for reinvigorating the FDiTech innovation lab and issuing guidance on fintech partnerships, AI, and digital assets, and March 2026 congressional testimony described banks using AI for fraud detection, AML/CFT, and credit underwriting while the FDIC pilots generative AI for its own staff. The April 2026 model risk revision is the first concrete deliverable; the agency's own Risk Review and cybersecurity reports frame generative AI mainly as a fraud and authentication threat — deepfakes, voice cloning, and synthetic identities."
    ],
    "keyDocument": "FIL-15-2026 — Agencies Revise the Interagency Model Risk Management Guidance (Apr 17, 2026)",
    "latestMove": "Apr 2026 adoption of revised interagency model risk guidance (FIL-15-2026); Jun 2026 testimony describing it as 'an avenue for the safe and sound adoption of technology'",
    "milestones": [
      {
        "date": "2021-07-01",
        "title": "Comment period closes on the interagency AI RFI",
        "summary": "After a 30-day extension announced in FIL-34-2021, the comment window on the five-agency AI/ML request for information closed July 1, 2021. No follow-on interagency AI rule or guidance was issued from it.",
        "link": "https://www.fdic.gov/news/financial-institution-letters/2021/fil21034.html",
        "docType": "Milestone"
      }
    ],
    "watchNext": [
      "Whether the FDIC, OCC, and Federal Reserve follow the April 2026 model risk revision with a request for information or guidance specifically covering generative and agentic AI",
      "Delivery on Chairman Hill's stated agenda of guidance on fintech partnerships and AI, and the revived FDiTech lab",
      "How FDIC examiners apply FIL-29-2023 third-party risk expectations to community banks that source AI fraud, underwriting, and chatbot tools from vendors",
      "The final BSA/AML program rule, which the FDIC says should encourage AI-driven detection of illicit finance"
    ],
    "faq": [
      {
        "q": "Does the FDIC have its own AI guidance for banks?",
        "a": "No. The FDIC regulates AI through interagency documents it co-issues — the April 2026 revised Model Risk Management guidance (FIL-15-2026) and the June 2023 third-party risk management guidance (FIL-29-2023) — plus safety-and-soundness, fair-lending, and BSA/AML examination. Chairman Travis Hill has said AI is a topic on which the FDIC should consider issuing additional guidance."
      },
      {
        "q": "Which FDIC FIL adopted the 2026 model risk guidance, and what did it rescind?",
        "a": "FIL-15-2026, issued April 17, 2026, adopts the revised interagency Model Risk Management guidance and rescinds FIL-22-2017 (FDIC adoption of the 2011 supervisory guidance) and FIL-27-2021 (the 2021 statement on model risk for BSA/AML and OFAC systems). It applies to all FDIC-supervised institutions but is expected to be most relevant to banks over $30 billion in assets."
      },
      {
        "q": "How does the FDIC treat AI bought from a vendor?",
        "a": "As a third-party relationship. The June 2023 interagency guidance (FIL-29-2023) expects planning, due diligence, contract negotiation, ongoing monitoring, and termination controls scaled to risk, and states that using a third party does not diminish the bank's responsibility for safe and sound operation and compliance. The 2026 model risk guidance separately addresses third-party vendor models."
      }
    ],
    "related": [
      "occ",
      "federal-reserve",
      "cfpb",
      "fincen",
      "ncua"
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ncua",
    "name": "NCUA",
    "fullName": "National Credit Union Administration",
    "jurisdiction": "United States (federally insured credit unions)",
    "role": "Prudential supervisor and share insurer for credit unions",
    "binding": "Supervisory guidance",
    "appliesTo": "Federal credit unions and federally insured state-chartered credit unions (roughly 4,400 institutions); not banks",
    "aliases": [
      "NCUA",
      "National Credit Union Administration",
      "Credit Union Administration"
    ],
    "answerFirst": "The NCUA has issued no AI-specific rule, letter to credit unions, or model risk framework: its own AI resource page states that 'NCUA has not issued AI specific rules or regulation' and that AI is supervised under existing technology-neutral requirements for safety and soundness, third-party due diligence, and consumer compliance. The agency co-signed the March 2021 interagency AI request for information, launched a Credit Union AI Resource Center in August 2025, and received a May 2025 GAO recommendation (GAO-25-107197) to expand model risk guidance that today covers only interest rate risk models. Neither the 2025 nor the 2026 supervisory priorities letter (25-CU-01, 26-CU-01) mentions artificial intelligence, and the NCUA did not join the April 2026 revised interagency model risk management guidance issued by the OCC, Federal Reserve, and FDIC.",
    "overview": [
      "Unlike the bank regulators, the NCUA never adopted SR 11-7 / OCC 2011-12. Its model risk guidance lives in the examiner guide and addresses interest rate risk modeling only; GAO found in May 2025 that this leaves examiners and credit unions without detail on how to manage AI models, and recommended broader guidance. The NCUA agreed in principle but told its Board in July 2025 that model risk guidance alone would not fit all credit-union AI use cases and that any new requirements would have to go through formal rulemaking. It was not a party to the April 17, 2026 revised interagency model risk management guidance (OCC Bulletin 2026-13 / SR 26-2) and has not referenced it in any issuance we could find.",
      "The second structural gap is vendor oversight. Most credit unions buy AI (underwriting, chatbots, fraud detection) from third parties, but the NCUA lost authority to examine technology service providers in 2002 and has asked Congress to restore it repeatedly since (most recently in a March 2022 House AI Task Force hearing and a March 2022 white paper). GAO reiterated that recommendation in 2025. In practice, therefore, the NCUA's AI expectations run through Letter 07-CU-13 on third-party relationships, the 2023 Financial Innovation rule, information-security rules (Part 748), and fair-lending law, with examiners told that 'AI is not treated differently than any other innovative technology.'"
    ],
    "keyDocument": "Credit Union Artificial Intelligence Resource Center (Aug 2025, updated Apr 2026) — the NCUA's only AI-specific publication for credit unions",
    "latestMove": "Feb 2026 Senate testimony frames 'space to innovate responsibly' with AI as a 2026-2030 strategic-plan goal; Apr 2026 refresh of the AI resource page; no AI mention in the Jan 2026 supervisory priorities",
    "milestones": [
      {
        "date": "2021-07-01",
        "title": "Interagency AI RFI comment period closes",
        "summary": "The five agencies, including the NCUA, extended the original June 1 deadline to July 1, 2021; no follow-on interagency AI guidance was ever issued.",
        "link": "https://ncua.gov/newsroom/press-release/2021/agencies-extend-comment-period-request-information-artificial-intelligence",
        "docType": "Milestone"
      },
      {
        "date": "2025-05-19",
        "title": "GAO-25-107197 recommends NCUA broaden its model risk management guidance",
        "summary": "GAO found NCUA's model risk guidance covers only interest rate risk models (last updated October 2016) and that NCUA, unlike the OCC, Fed, and FDIC, cannot examine technology service providers. NCUA generally agreed with the model-risk recommendation.",
        "link": "https://files.gao.gov/reports/GAO-25-107197/index.html",
        "docType": "Milestone"
      },
      {
        "date": "2026-04-17",
        "title": "NCUA sits out the revised interagency model risk management guidance",
        "summary": "The OCC, Federal Reserve, and FDIC issued revised model risk guidance superseding SR 11-7; the NCUA was not a signatory and credit unions remain without an equivalent framework.",
        "link": "https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-13.html",
        "docType": "Milestone"
      }
    ],
    "watchNext": [
      "Whether the NCUA acts on GAO's May 2025 recommendation with broader model risk guidance or, as staff suggested in July 2025, a formal rulemaking on AI",
      "Any congressional move to restore NCUA authority to examine third-party technology service providers, which the agency has requested since 2002",
      "Whether the 2027 supervisory priorities letter names AI for the first time, after the 2025 and 2026 letters did not",
      "Updates to the Credit Union AI Resource Center, last modified April 28, 2026"
    ],
    "faq": [
      {
        "q": "Does the NCUA have AI guidance for credit unions?",
        "a": "No binding or formal guidance. The NCUA's AI resource page (launched August 2025) says the agency 'has not issued AI specific rules or regulation' and that existing technology-neutral rules apply. It lists NIST, Treasury AIEOG, COSO, and CISA materials and sets expectations for due diligence on AI vendors and board oversight, but it is a resource page, not a Letter to Credit Unions."
      },
      {
        "q": "Does the 2026 revised model risk management guidance (SR 26-2 / OCC 2026-13) apply to credit unions?",
        "a": "No. It was issued by the OCC, Federal Reserve, and FDIC only. The NCUA never adopted the 2011 guidance either; its model risk guidance covers interest rate risk models and GAO recommended in May 2025 that it be broadened. Many credit unions nonetheless use SR 11-7 / SR 26-2 as a voluntary benchmark."
      },
      {
        "q": "Can the NCUA examine my AI vendor?",
        "a": "No. The NCUA's authority to examine third-party technology service providers expired in 2002 and Congress has not restored it despite repeated NCUA and GAO requests. Responsibility for vendor due diligence, contract terms, and ongoing monitoring sits with the credit union under Letter 07-CU-13 and the 2023 Financial Innovation rule."
      }
    ],
    "related": [
      "occ",
      "federal-reserve",
      "fdic",
      "cfpb",
      "nist"
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "cfpb",
    "name": "CFPB",
    "fullName": "Consumer Financial Protection Bureau",
    "jurisdiction": "United States (consumer financial products)",
    "role": "Consumer-protection regulator",
    "binding": "Binding law",
    "appliesTo": "Banks, credit unions, mortgage lenders, and fintechs offering consumer financial products in the US",
    "aliases": [
      "CFPB",
      "Consumer Financial Protection Bureau",
      "Bureau of Consumer Financial Protection"
    ],
    "answerFirst": "The CFPB regulates AI in lending through existing law — the Equal Credit Opportunity Act, Regulation B, the Fair Credit Reporting Act and UDAAP — not through AI-specific rules. Its 2022 and 2023 circulars stating that 'black-box' models do not excuse vague denial reasons were withdrawn on May 12, 2025, but the statutory requirement in 15 U.S.C. 1691(d) and 12 CFR 1002.9 to give applicants the specific principal reasons for adverse action still applies to every model. In April 2026 the Bureau finalized a Regulation B rule (effective July 21, 2026) declaring that ECOA does not authorize disparate-impact liability, sharply narrowing the fair-lending theory most often used against algorithmic underwriting.",
    "overview": [
      "For years the Bureau's operative position was set by Circular 2022-03 (May 2022) and Circular 2023-03 (September 2023): a creditor that uses complex algorithms or machine-learning underwriting must still provide the specific, accurate principal reasons for adverse action required by ECOA and Regulation B §1002.9, and cannot hide behind a sample checklist or the model's opacity. Both circulars were withdrawn on May 12, 2025 as part of a rescission of 67 guidance documents — but they were interpretations, not rules. The statutory duty they described (15 U.S.C. 1691(d), 12 CFR 1002.9) is unchanged and remains enforceable by the CFPB, the prudential regulators, state attorneys general and private plaintiffs.",
      "The bigger 2026 change is the Regulation B final rule published April 22, 2026 and effective July 21, 2026: it declares that ECOA does not authorize disparate-impact liability, narrows the 'discouragement' concept, and restricts special-purpose credit programs. Disparate impact was the fair-lending theory most often applied to algorithmic underwriting, so the rule materially lowers federal fair-lending exposure for AI models — while leaving adverse-action notices, FCRA key-factor disclosures and UDAAP fully intact, and while state laws (New York DFS, Colorado) move in the opposite direction."
    ],
    "keyDocument": "Regulation B §1002.9 adverse-action requirements (ECOA); April 2026 Reg B final rule",
    "latestMove": "April 2026 Regulation B final rule (effective July 21, 2026) eliminates disparate-impact liability under ECOA — the fair-lending theory most often applied to AI models — while the statutory duty to give specific, accurate adverse-action reasons remains untouched.",
    "milestones": [
      {
        "date": "2025-05-12",
        "title": "CFPB withdraws 67 guidance documents, including AI adverse-action Circulars 2022-03 and 2023-03",
        "summary": "A single Federal Register notice (90 FR 20084, doc. 2025-08286) withdrew 8 policy statements, 7 interpretive rules, 13 advisory opinions and 39 other guidance documents effective May 12, 2025. Both algorithmic adverse-action circulars are listed on the Bureau's Withdrawn Guidance page; the underlying ECOA/Regulation B duty to give specific reasons is statutory and unchanged.",
        "link": "https://www.consumerfinance.gov/compliance/guidance/withdrawn-guidance/",
        "docType": "Milestone"
      },
      {
        "date": "2026-07-21",
        "title": "Amended Regulation B takes effect: no disparate-impact liability under ECOA",
        "summary": "The April 22, 2026 final rule (91 FR 21620) became effective, removing the 'effects test' from Regulation B, narrowing 'discouragement' to statements of intent to discriminate, and restricting special purpose credit programs. Adverse-action notice rules in 12 CFR 1002.9 were not changed.",
        "link": "https://www.federalregister.gov/documents/2026/04/22/2026-07804/equal-credit-opportunity-act-regulation-b",
        "docType": "Milestone"
      }
    ],
    "watchNext": [
      "Litigation challenging the April 2026 Regulation B rule's elimination of disparate-impact liability, and whether states (New York DFS, Colorado, California) fill the gap for AI underwriting",
      "Whether the Bureau issues any replacement guidance on adverse-action notices for machine-learning models after withdrawing Circulars 2022-03 and 2023-03",
      "Private ECOA and FCRA litigation testing whether model-derived denial reasons are 'specific' and 'accurate' enough",
      "Colorado's Automated Decision-Making Technology Act rules (effective January 1, 2027) as the de facto US standard for consequential AI decisions in financial services"
    ],
    "faq": [
      {
        "q": "Can a bank use a black-box AI model for credit decisions?",
        "a": "Only if it can still comply with ECOA and Regulation B: the lender must give applicants specific, accurate reasons for adverse action. CFPB Circulars 2022-03 and 2023-03 said model complexity does not excuse vague or generic denial reasons; although both circulars were withdrawn in May 2025, that requirement comes from the statute and Regulation B itself, so it still effectively requires explainability tooling around any underwriting model."
      },
      {
        "q": "Does the CFPB have AI-specific regulations?",
        "a": "No — and it has said it doesn't need them. The Bureau applies existing consumer law (ECOA, Regulation B, UDAAP) to AI systems. Its circulars clarify how those laws apply to algorithmic credit decisions, chatbots, and digital marketing."
      },
      {
        "q": "Are CFPB Circulars 2022-03 and 2023-03 still in effect?",
        "a": "No. Both were withdrawn on May 12, 2025 as part of a Federal Register notice rescinding 67 CFPB guidance documents. The circulars were interpretations, not rules: the obligation they described — providing specific and accurate principal reasons for adverse action under ECOA section 701(d) and Regulation B section 1002.9 — is statutory and remains fully enforceable by the CFPB, prudential regulators, state attorneys general and private plaintiffs."
      },
      {
        "q": "Did the 2026 Regulation B rule change adverse-action notice requirements for AI models?",
        "a": "No. The final rule published April 22, 2026 (effective July 21, 2026) amended the disparate-impact, discouragement and special-purpose-credit-program provisions of Regulation B. It did not amend 12 CFR 1002.9, so lenders using machine-learning underwriting must still deliver notices with specific principal reasons within 30 days of a completed application."
      }
    ],
    "deepDives": [
    {
      "id": "automated-credit-decisions",
      "label": "Automated credit decisions",
      "question": "What are the US regulatory requirements for automated credit decisions?",
      "answer": "No US law regulates automated credit decisions as such — but four separate bodies of requirement apply to every model that decides who gets credit. Consumer law binds first and hardest: ECOA and Regulation B require a notice stating the specific principal reasons for any adverse action within 30 days of a completed application, and the FCRA adds credit-score key factors when a consumer report is used — neither has an exception for model complexity. Prudential guidance adds development, validation and governance duties for banks under the April 2026 interagency model risk framework. State law is now the fastest-moving layer: Colorado's ADMT Act reaches consequential lending decisions from January 1, 2027 with no bank exemption. The April 2026 Regulation B rule removed disparate-impact liability under ECOA — narrowing federal fair-lending exposure without changing a single notice obligation.",
      "requirements": [
        {
          "rule": "ECOA / Regulation B §1002.9",
          "authority": "cfpb",
          "docSlug": "cfpb-ecoa-regulation-b-adverse-action",
          "requirement": "Written notice of the specific principal reasons for adverse action within 30 days of a completed application. Reasons must relate to and accurately describe the factors the model actually scored — “failure to achieve a qualifying score” and the nearest box on the Appendix C sample form are both insufficient.",
          "when": "Since 1974"
        },
        {
          "rule": "Adverse action, defined (12 CFR 1002.2(c))",
          "authority": "cfpb",
          "docSlug": "cfpb-ecoa-regulation-b-adverse-action",
          "requirement": "The duty is not limited to denials: terminations, unfavorable changes in terms and refusals to increase a credit limit all trigger it, which puts automated line-management and re-pricing systems in scope.",
          "when": "In force"
        },
        {
          "rule": "FCRA §§615(a), 609(f)",
          "authority": "cfpb",
          "docSlug": "cfpb-fcra-adverse-action-key-factors",
          "requirement": "When a consumer report or score drives the decision: identify the reporting agency, state that it did not make the decision, and disclose the score, its range and the up-to-four key factors that adversely affected it. This is a separate notice from the Regulation B one.",
          "when": "Since 1970"
        },
        {
          "rule": "Regulation B final rule (April 2026)",
          "authority": "cfpb",
          "docSlug": "cfpb-regulation-b-final-rule-2026",
          "requirement": "ECOA no longer supports disparate-impact claims; the effects test is removed from Regulation B and its commentary. Adverse-action duties under §1002.9 are expressly unchanged.",
          "when": "Since Jul 21, 2026"
        },
        {
          "rule": "UDAAP (Dodd-Frank §1031)",
          "authority": "cfpb",
          "requirement": "A model that produces unfair, deceptive or abusive outcomes — or a disclosure that misdescribes how a decision was reached — is actionable regardless of the technique used.",
          "when": "In force",
          "link": "https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title12-section5531"
        },
        {
          "rule": "Joint Statement on Automated Systems",
          "authority": "cfpb",
          "docSlug": "cfpb-joint-statement-automated-systems-2023",
          "requirement": "The CFPB, DOJ, EEOC and FTC's shared position that existing law applies to automated systems and that opacity is not a defence. The 2025 guidance withdrawal did not touch this statement.",
          "when": "Since Apr 2023"
        },
        {
          "rule": "Model risk management (SR 26-2 / OCC 2026-13 / FIL-15-2026)",
          "authority": "federal-reserve",
          "docSlug": "fed-sr-26-2",
          "requirement": "Sound development and testing, independent validation with outcomes analysis, effective challenge, and board-level governance for credit models — risk-based, and most relevant above $30 billion in assets. Generative and agentic AI are explicitly out of scope.",
          "when": "Since Apr 17, 2026"
        },
        {
          "rule": "Third-party risk management (SR 23-4 / OCC 2023-17 / FIL-29-2023)",
          "authority": "federal-reserve",
          "docSlug": "fed-sr-23-4",
          "requirement": "A purchased or vendor-hosted credit model carries the same expectations as one built in-house: the bank must understand it, validate it, and remain accountable for its outputs.",
          "when": "In force"
        },
        {
          "rule": "Colorado ADMT Act (SB 26-189)",
          "authority": "colorado-ai-act",
          "docSlug": "co-sb26-189",
          "requirement": "Notice at the point of consumer interaction; within 30 days of an adverse outcome, an explanation of the decision, the system's role and the data used; rights to correct the data and to request human review by someone able to override. There is no bank, credit-union or GLBA exemption in the enrolled act — only §6-1-1704(6)(a), under which an ECOA/Reg B notice (and FCRA where applicable) substitutes for Colorado's notice only if that federal notice also satisfies Colorado's own disclosure requirements.",
          "when": "From Jan 1, 2027"
        },
        {
          "rule": "California CPPA ADMT regulations (11 CCR 7200–7222)",
          "authority": "california",
          "docSlug": "ca-cppa-admt-risk-cyber-regulations-2025",
          "requirement": "Pre-use notice, an opt-out (or a human-appeal alternative), and a plain-language explanation on request when automated technology makes a “significant decision” — a category that expressly includes lending. For GLBA-covered lenders the reach is much narrower than it looks; see below.",
          "when": "From Jan 1, 2027"
        },
        {
          "rule": "EU AI Act, Annex III 5(b)",
          "authority": "eu-ai-act",
          "docSlug": "eu-ai-act-regulation-2024-1689",
          "requirement": "For US banks with EU lending operations: creditworthiness scoring of natural persons is high-risk, requiring risk management, data governance, technical documentation, logging, human oversight and post-market monitoring.",
          "when": "From Dec 2, 2027"
        }
      ],
      "detail": [
        "The two documents most often cited as “the CFPB's AI rules” — Circulars 2022-03 and 2023-03 — were withdrawn on May 12, 2025, alongside 65 other guidance documents. Their withdrawal changed nothing about the underlying obligation. The specific-reasons requirement is statutory (15 U.S.C. 1691(d)) and sits in the regulation itself (12 CFR 1002.9); it is enforceable by the Bureau, by the prudential regulators through their own examination authority, by state attorneys general under Dodd-Frank §1042, and by private plaintiffs. What was withdrawn was the Bureau's published interpretation of how that duty applies to complex models — not the duty, and not the case law.",
        "The April 2026 Regulation B rule is the most consequential federal change for algorithmic underwriting in a decade. Disparate impact was the theory under which a model producing discriminatory outcomes from facially neutral inputs could be challenged; removing it narrows federal exposure substantially. It reaches ECOA only. Disparate-treatment claims survive — including the argument that a proxy variable amounts to intentional discrimination — as do state fair-lending and UDAP statutes, mortgage-specific fair-housing law, and the contractual and reputational consequences of a model nobody can explain.",
        "California's ADMT regulations are the most-cited state rules in this area and the most misread for banks. The California Privacy Protection Agency's package was approved on September 22, 2025, took effect January 1, 2026 and requires ADMT compliance by January 1, 2027. Lending is the first-listed “significant decision” — 11 CCR 7001(ddd) defines financial or lending services as the extension of credit or a loan, transmitting or exchanging funds, deposit or checking accounts, check cashing, and installment payment plans. Two things narrow it sharply for banks. First, scope: ADMT means technology that replaces or substantially replaces human decision-making (7001(e)), so a genuine human decision-maker — one who actually knows how to interpret the output, reviews it, and has authority to change the outcome — takes a credit model out of the article entirely. Second, and more decisive, the CCPA's exemption at Cal. Civ. Code §1798.145(e) is written at the level of the information, not the institution: personal information collected or processed subject to the Gramm-Leach-Bliley Act, the California Financial Information Privacy Act or the Farm Credit Act sits outside the statute. The Agency confirmed this reading in its Final Statement of Reasons, rejecting an entity-level exemption because the CCPA “instead includes a data-level exemption for information subject to the GLBA.” At a GLBA-covered lender the application, income, credit-bureau, account and adverse-action data behind a credit decision is exactly that, so the ADMT obligations largely do not reach the credit decision itself. Where they do reach a bank is everything GLBA does not cover — above all employment, since HR, applicant and contractor data has been inside the CCPA since January 1, 2023 and hiring and compensation are themselves significant decisions — plus prospect and advertising data, non-GLBA product lines, and model training data. Mixed-input models, where GLBA and non-GLBA data are combined, are the genuinely unresolved edge: the Agency was asked to draw a line and declined. Risk assessments covering 2026–27 processing must be submitted with an executive attestation, under penalty of perjury, by April 1, 2028.",
        "Beyond California and Colorado, no other US state has an in-force or dated law that specifically governs automated decision-making in consumer credit — a point worth checking against the many summaries that say otherwise. Connecticut is the common error: the 2025 bill whose consequential-decision definition covered financial and lending services died, and the AI act Connecticut actually enacted in 2026 does not reach credit. Texas's Responsible AI Governance Act, in force since January 1, 2026, bans discrimination only where intent is shown — a disparate impact is expressly insufficient — and carries a safe harbor for federally insured institutions. Illinois amended only the employment article of its Human Rights Act, leaving the financial-credit article untouched; Virginia's high-risk AI bill was vetoed; New York's automated-decision statute binds state agencies, and its DFS circular covers insurers. Maryland and Oregon are the instructive near-misses: both list financial or lending services as decisions with legal or similarly significant effects and give consumers a profiling opt-out, but both then exempt financial institutions at the entity level — the mirror image of California, where the exemption follows the data instead. For a multi-state lender that asymmetry is the whole planning problem: the same credit model can be out of scope in Oregon because of what you are, out of scope in California because of what the data is, and squarely in scope in Colorado because it is neither.",
        "For a bank the practical test is rarely “is there an AI rule?” It is two questions asked in different rooms. Can you produce the reason? — a consumer-law duty that applies to the very first automated decision, at any institution size, with no materiality threshold. And can you defend the model? — a supervisory expectation that scales with the model's materiality and the institution's size. A lender can satisfy the second and still fail the first."
      ],
      "practice": [
        "Every declined application needs a reason that maps to a factor the model actually used. Explainability tooling is a compliance requirement for anyone running a non-linear model, not an engineering preference.",
        "Regulation B and the FCRA are two notices, not one. Satisfying the specific-reasons requirement does not satisfy the key-factor disclosure when a score was used.",
        "Automated line management, term changes and re-pricing are adverse actions when unfavorable — compliance scoping that stops at originations misses the account-management models entirely.",
        "The documentation that satisfies the April 2026 model risk framework — development evidence, independent validation, outcomes analysis — is the same evidence base used to defend a fair-lending challenge. Build it once.",
        "A vendor that will not explain its scoring is a compliance problem, not a commercial one: under third-party guidance the bank still owns the outcome and still owes the applicant a reason.",
        "Read California's ADMT rules through the §1798.145(e) data exemption before budgeting for them: at a GLBA-covered lender they bite hardest on employment decisions, not on credit ones.",
        "A real human decision-maker can put a credit model outside California's ADMT article altogether — but the test is substantive, not a rubber stamp: the reviewer must understand the output, actually review it, and be able to change the result.",
        "Colorado's January 1, 2027 date is the binding US deadline for explanation duties on consequential decisions. Scope remediation to it rather than to the deferred EU timeline."
      ]
    }
    ],
    "related": [
      "occ",
      "federal-reserve",
      "eu-ai-act"
    ],
    "lastUpdated": "2026-09-01"
  },
  {
    "slug": "sec",
    "name": "SEC",
    "fullName": "U.S. Securities and Exchange Commission",
    "jurisdiction": "United States (broker-dealers, investment advisers, funds, and public companies — including bank holding companies and bank-affiliated securities arms)",
    "role": "Securities markets regulator and public-company disclosure authority",
    "binding": "Supervisory guidance",
    "appliesTo": "Bank-affiliated broker-dealers and registered investment advisers (wealth, asset-management, and capital-markets arms), and any bank holding company that files with the SEC as a public company",
    "aliases": [
      "SEC",
      "Securities and Exchange Commission",
      "U.S. SEC"
    ],
    "answerFirst": "The SEC has no AI-specific rule in force. Its July 26, 2023 proposal on conflicts of interest from broker-dealers' and advisers' use of predictive data analytics (Release 34-97990) was formally withdrawn on June 12, 2025, and the agency has said any future action would start with a new proposal. What actually binds bank securities arms today is enforcement of existing antifraud, fiduciary, Regulation Best Interest, and Marketing Rule obligations against 'AI washing' — starting with the $400,000 Delphia and Global Predictions settlements on March 18, 2024 — plus Division of Examinations priorities for FY2025 and FY2026 that test whether AI claims are accurate and whether AI used in fraud detection, AML, back-office, and trading is supervised.",
    "overview": [
      "For a bank, the SEC matters through two doors. The first is the bank's broker-dealer and registered investment adviser subsidiaries, which sit under Regulation Best Interest, the Advisers Act fiduciary duty, the Marketing Rule, and the SEC's examination program. The second is public-company disclosure: bank holding companies that file 10-Ks and 10-Qs must describe material AI use and risk accurately, and the SEC has charged issuers for overstating AI capabilities.",
      "Under Chair Gary Gensler the SEC pursued a rulemaking track — the 2023 predictive data analytics ('PDA') proposal would have required firms to identify and eliminate or neutralize conflicts arising from any 'covered technology' used in investor interactions. Under Chairman Paul Atkins the Commission withdrew that proposal in June 2025, created an internal AI Task Force in August 2025 (led by Chief AI Officer Valerie Szczepanik), and has said that AI disclosure should be governed by existing materiality principles rather than new line items. The Investor Advisory Committee's December 4, 2025 recommendation for AI disclosure guidance has not been acted on.",
      "The practical constant across both administrations is enforcement. The Cyber and Emerging Technologies Unit created February 20, 2025 lists AI-enabled fraud as a core focus, and the Commission has brought 'AI washing' cases against advisers (Delphia, Global Predictions), a public company (Presto Automation, January 14, 2025), and a private-company founder (Nate's Albert Saniger, April 9, 2025). Examiners ask the same questions of bank-owned firms: are your AI representations accurate, and do your policies actually supervise the AI you use."
    ],
    "keyDocument": "Division of Examinations FY2026 Examination Priorities (Nov 17, 2025) — the operative statement of what SEC examiners test on AI",
    "latestMove": "Chairman Atkins told the FSOC AI roundtable on March 4, 2026 that AI disclosure will be governed by materiality, not new line items, and that AI-washing enforcement continues",
    "milestones": [
      {
        "date": "2025-02-20",
        "title": "Cyber and Emerging Technologies Unit (CETU) created",
        "summary": "The SEC replaces its Crypto Assets and Cyber Unit with a roughly 30-person Cyber and Emerging Technologies Unit led by Laura D'Allaird; 'fraud committed using emerging technologies, such as artificial intelligence and machine learning' is named as a priority area.",
        "link": "https://www.sec.gov/newsroom/press-releases/2025-42",
        "docType": "Milestone"
      },
      {
        "date": "2025-08-01",
        "title": "SEC AI Task Force launched; Valerie Szczepanik named Chief AI Officer",
        "summary": "An internal task force to deploy AI across the SEC's own operations — risk assessment for examinations, misconduct detection, disclosure review, and comment analysis. It is not a rulemaking body, but it signals how the agency will surveil registrants.",
        "link": "https://www.sec.gov/newsroom/press-releases/2025-103-sec-creates-task-force-tap-artificial-intelligence-enhanced-innovation-efficiency-across-agency",
        "docType": "Milestone"
      }
    ],
    "watchNext": [
      "Whether the Commission responds to the Investor Advisory Committee's December 2025 AI disclosure recommendation with staff guidance, or leaves issuers on materiality alone as Chairman Atkins signalled",
      "Further CETU 'AI washing' actions, particularly any first case against a bank-affiliated broker-dealer or adviser under Reg BI or the Marketing Rule",
      "FY2027 Division of Examinations priorities (expected in autumn 2026) and whether the AI section adds generative-AI or agentic-tool supervision expectations",
      "Any new proposal replacing the withdrawn predictive data analytics rule — the SEC has said it would start from scratch with a new notice"
    ],
    "faq": [
      {
        "q": "Does the SEC have an AI rule that applies to a bank's broker-dealer or adviser?",
        "a": "No. The only AI-specific rulemaking — the July 2023 predictive data analytics conflicts proposal (Release 34-97990) — was withdrawn on June 12, 2025. Bank securities arms are instead held to existing rules: Regulation Best Interest, the Advisers Act fiduciary duty, the Marketing Rule, antifraud provisions, and supervision and recordkeeping requirements, all of which the SEC applies to AI use."
      },
      {
        "q": "What is 'AI washing' and what has the SEC done about it?",
        "a": "AI washing is overstating or fabricating the use of artificial intelligence in products, services, or investment processes. The SEC settled with advisers Delphia and Global Predictions for $225,000 and $175,000 on March 18, 2024, brought its first public-company case against Presto Automation on January 14, 2025, and sued Nate founder Albert Saniger on April 9, 2025 alongside a parallel criminal case."
      },
      {
        "q": "What do SEC examiners look at when a firm uses AI?",
        "a": "The FY2025 and FY2026 examination priorities say examiners will check that AI representations are accurate, that operations and controls match what was disclosed to investors, that algorithms produce advice consistent with client profiles, and that firms have policies to supervise AI used in fraud prevention, back-office operations, AML, and trading. FY2025 also flagged loss or misuse of client data through third-party AI models."
      }
    ],
    "related": [
      "cftc",
      "federal-reserve",
      "occ",
      "fincen",
      "treasury",
      "nist"
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "cftc",
    "name": "CFTC",
    "fullName": "Commodity Futures Trading Commission",
    "jurisdiction": "United States (futures, options, and swaps markets; bank swap dealers, FCMs, exchanges, and clearinghouses)",
    "role": "Derivatives market regulator",
    "binding": "Supervisory guidance",
    "appliesTo": "CFTC registrants and registered entities: bank-affiliated swap dealers and futures commission merchants, designated contract markets, swap execution facilities, derivatives clearing organizations, swap data repositories, CPOs, CTAs, and introducing brokers",
    "aliases": [
      "CFTC",
      "Commodity Futures Trading Commission",
      "Commodity Futures Trading Commission (CFTC)"
    ],
    "answerFirst": "The CFTC regulates AI in derivatives markets through existing law, not AI-specific rules. Its operative document is Staff Advisory (CFTC Letter No. 24-17) of December 5, 2024, which reminds swap dealers, FCMs, exchanges, and clearinghouses that the Commodity Exchange Act and CFTC regulations — system safeguards, risk management, recordkeeping, customer-fund segregation, and third-party outsourcing responsibility — apply unchanged when AI is used. Under Chairman Michael Selig the 2026 posture is innovation-first: an Innovation Task Force (March 24, 2026) is drafting a regulatory framework for 'artificial intelligence and autonomous systems,' the renamed Innovation Advisory Committee held its first meeting on August 20, 2026 with a session on 'agentic finance,' and an August 19, 2026 request for comment opened the door to listed compute derivatives.",
    "overview": [
      "For a bank, the CFTC matters through its swap dealer and FCM arms and its use of CFTC-regulated exchanges and clearinghouses. The agency's AI work began under Chairman Rostin Behnam: an AI Task Force formed in late 2023, a staff Request for Comment on AI in CFTC-regulated markets on January 25, 2024 (comments closed April 24, 2024), a Technology Advisory Committee report on Responsible AI on May 2, 2024 recommending a NIST-aligned AI risk management framework, and the December 5, 2024 staff advisory. That advisory created no new obligations; it mapped AI use cases — margin calculation, surveillance, settlement, generative AI in disclosure documents — to the core principles and regulations that already govern them, and warned that a DCO or registrant remains responsible when AI is procured from a third party.",
      "The 2025–2026 agenda shifted from risk-mapping to market-building. Commissioner Kristin Johnson used 2025 speeches to push AI-for-compliance and data governance. Chairman Selig, confirmed in late 2025, renamed the Technology Advisory Committee the Innovation Advisory Committee (January 12, 2026), created an Innovation Task Force led by Michael Passalacqua (March 24, 2026) with AI and autonomous systems as one of three workstreams, and on August 19, 2026 issued a request for comment on derivatives on compute — the GPU capacity that powers AI — framed as essential to 'win the AI race.' No CFTC AI rule has been proposed as of August 2026; the practical standard for bank derivatives desks is still the 2024 advisory plus exam-time questions about AI."
    ],
    "keyDocument": "CFTC Staff Advisory on the Use of AI in CFTC-Regulated Markets (CFTC Letter No. 24-17, Dec 2024)",
    "latestMove": "Aug 19, 2026 request for comment on listing compute derivatives; Aug 20, 2026 inaugural Innovation Advisory Committee meeting with an 'agentic finance' session",
    "milestones": [
      {
        "date": "2026-01-12",
        "title": "Technology Advisory Committee renamed Innovation Advisory Committee",
        "summary": "Chairman Selig relaunched the TAC as the Innovation Advisory Committee to advise on AI, blockchain, and cloud computing, with CEO Innovation Council members as charter members and nominations open through January 31, 2026.",
        "link": "https://www.cftc.gov/PressRoom/PressReleases/9167-26",
        "docType": "Milestone"
      },
      {
        "date": "2026-03-24",
        "title": "Innovation Task Force formed with an AI and autonomous systems workstream",
        "summary": "The task force, led by Michael J. Passalacqua and staffed April 10, 2026, is charged with developing a clear regulatory framework for (i) crypto assets and blockchain, (ii) artificial intelligence and autonomous systems, and (iii) prediction markets and event contracts.",
        "link": "https://www.cftc.gov/PressRoom/PressReleases/9201-26",
        "docType": "Milestone"
      },
      {
        "date": "2026-08-20",
        "title": "Inaugural Innovation Advisory Committee meeting: 'Preparing for Intelligent Markets'",
        "summary": "Session II of the first IAC meeting covered AI in trading, compliance, surveillance and risk management, 'the rise of agentic finance' (autonomous agents executing transactions and managing portfolios), how existing regulatory principles apply to AI-enabled market participants, and whether additional guidance is warranted. Written public comments were accepted through August 27, 2026.",
        "link": "https://www.cftc.gov/PressRoom/Events/opaeventiac082026",
        "docType": "Milestone"
      }
    ],
    "watchNext": [
      "Whether the Innovation Task Force's AI and autonomous systems workstream produces staff guidance or a proposed rule on AI-enabled and agentic trading",
      "Comment deadline (60 days after the August 21, 2026 Federal Register publication) and any exchange listings of compute derivatives contracts",
      "Follow-through on the August 20, 2026 IAC discussion of 'agentic finance' and whether the CFTC and SEC align AI positions for dually registered bank dealers"
    ],
    "faq": [
      {
        "q": "Does the CFTC have an AI rule for swap dealers and FCMs?",
        "a": "No. As of August 2026 the CFTC has not proposed an AI-specific rule. The controlling document is the December 5, 2024 staff advisory (CFTC Letter No. 24-17), which states that existing Commodity Exchange Act and CFTC requirements apply to AI use and that the advisory creates no new obligations."
      },
      {
        "q": "Is a bank's swap dealer responsible for AI it buys from a vendor?",
        "a": "Yes. The 2024 staff advisory says CFTC-regulated entities must comply whether they deploy AI 'directly or by a third-party service provider,' and cites Regulation 39.18(d)(2) as making explicit that a DCO retains responsibility when it outsources. It also expects registered entities to give staff advance notice of material planned changes to automated systems."
      },
      {
        "q": "What is the CFTC doing about AI in 2026?",
        "a": "Chairman Selig's CFTC has created an Innovation Task Force (March 24, 2026) with a workstream on AI and autonomous systems, held the first Innovation Advisory Committee meeting on August 20, 2026 with a session on agentic finance, and on August 19, 2026 requested comment on listing compute derivatives. The approach is framed as enabling innovation rather than restricting AI use."
      }
    ],
    "related": [
      "sec",
      "treasury",
      "federal-reserve",
      "occ",
      "nist"
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fincen",
    "name": "FinCEN",
    "fullName": "Financial Crimes Enforcement Network",
    "jurisdiction": "United States (Bank Secrecy Act administrator for all US financial institutions)",
    "role": "AML/CFT regulator and financial intelligence unit",
    "binding": "Binding law",
    "appliesTo": "Banks, credit unions, broker-dealers, money services businesses, and every other financial institution subject to the Bank Secrecy Act; day-to-day BSA examination of banks is delegated to the OCC, Federal Reserve, FDIC, and NCUA",
    "aliases": [
      "FinCEN",
      "Financial Crimes Enforcement Network"
    ],
    "answerFirst": "FinCEN does not regulate AI as such; it governs how banks use AI inside Bank Secrecy Act compliance and warns them about criminals' use of it. Since the December 3, 2018 joint statement with the banking agencies, FinCEN's line has been that banks may adopt AI and machine learning for transaction monitoring without incurring supervisory risk for doing so. The April 7, 2026 AML/CFT program proposed rule (comments closed June 9, 2026; not yet final as of August 2026) goes further, listing 'effective use of artificial intelligence, federated learning, or other advanced monitoring tools' among the factors the FinCEN Director would weigh before taking enforcement action. On the threat side, FinCEN Alert FIN-2024-Alert004 (November 13, 2024) on generative-AI deepfakes and FIN-2026-Alert004 (July 24, 2026) on AI-enabled student-aid fraud set red flags and SAR expectations.",
    "overview": [
      "FinCEN administers the Bank Secrecy Act and writes the AML/CFT program rules that banks' transaction-monitoring, sanctions-screening, and customer-risk models exist to satisfy. Its approach to AI has two tracks. The first is permissive: the 2018 interagency innovation statement, the 2019 Innovation Hours program, and the innovation provisions of the Anti-Money Laundering Act of 2020 all encourage banks to pilot machine learning and AI in AML with the promise that responsible experimentation is not itself a compliance failure. The 2026 AML/CFT program proposal converts that encouragement into an explicit factor in enforcement discretion.",
      "The second track is defensive. FinCEN's alerts on deepfake media (2024) and AI-enabled 'ghost student' fraud (2026) tell banks what generative-AI-driven fraud looks like, which red flags to watch, and how to key SAR filings. For model governance, the 2021 interagency statement on model risk management for BSA/AML systems, issued in consultation with FinCEN, was rescinded on April 17, 2026 when the banking agencies replaced SR 11-7 / OCC 2011-12 with revised model risk guidance, so there is no longer stand-alone federal guidance on validating AML models."
    ],
    "keyDocument": "AML/CFT Program proposed rule (Apr 2026) — names effective use of AI as a factor in FinCEN enforcement decisions; supersedes the withdrawn July 2024 proposal",
    "latestMove": "Jul 24, 2026 alert FIN-2026-Alert004 on AI-generated synthetic identities and chatbot-completed coursework in federal student aid fraud; Apr 2026 AML/CFT program NPRM comment period closed Jun 9, 2026",
    "milestones": [
      {
        "date": "2024-09-03",
        "title": "Comment period closes on the July 2024 AML/CFT program proposal",
        "summary": "The first post-AML Act program proposal, which encouraged banks to adopt machine learning and generative AI, took comments until September 3, 2024. FinCEN withdrew it in April 2026 rather than finalize it.",
        "link": "https://www.federalregister.gov/documents/2024/07/03/2024-14414/anti-money-laundering-and-countering-the-financing-of-terrorism-programs",
        "docType": "Milestone"
      },
      {
        "date": "2026-04-17",
        "title": "2021 BSA/AML model risk statement rescinded",
        "summary": "When the OCC, Federal Reserve, and FDIC issued revised interagency model risk management guidance, they rescinded the April 2021 statement on model risk management for BSA/AML systems that had been issued in consultation with FinCEN. BSA/AML models now fall under the general framework with no AML-specific guidance.",
        "link": "https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-13.html",
        "docType": "Milestone"
      },
      {
        "date": "2026-06-09",
        "title": "Comment period closes on the April 2026 AML/CFT program proposal",
        "summary": "Comments on FinCEN's reform proposal, including its AI-as-effectiveness-evidence enforcement factor, were due June 9, 2026. A final rule had not been issued as of August 26, 2026; the proposal contemplates a 12-month implementation period after finalization.",
        "link": "https://www.fincen.gov/news/news-releases/fincen-proposes-rule-fundamentally-reform-financial-institution-programs",
        "docType": "Milestone"
      }
    ],
    "watchNext": [
      "Whether FinCEN finalizes the April 2026 AML/CFT program rule in late 2026 and keeps the language crediting 'effective use of artificial intelligence' in enforcement decisions",
      "Parallel OCC, Federal Reserve, FDIC, and NCUA program rules and the proposed 30-day FinCEN consultation before significant bank AML supervisory actions",
      "Any FinCEN or interagency follow-up on validating AML models now that the 2021 BSA/AML model risk statement is rescinded, including the banking agencies' signalled AI request for information",
      "Further FinCEN alerts on generative-AI-enabled fraud typologies (deepfakes, synthetic identities, voice cloning) and related SAR key terms"
    ],
    "faq": [
      {
        "q": "Does FinCEN require banks to use AI for AML?",
        "a": "No. Neither the 2018 innovation statement nor the 2026 proposed program rule mandates any technology. The 2026 proposal would, however, let the FinCEN Director consider a bank's 'effective use of artificial intelligence, federated learning, or other advanced monitoring tools' as evidence of an effective program when deciding whether to take enforcement action, and it restates that responsible experimentation with new technology does not by itself create supervisory or enforcement risk."
      },
      {
        "q": "Is the FinCEN AML/CFT program rule final?",
        "a": "Not as of August 26, 2026. FinCEN announced a proposed rule on April 7, 2026 (Federal Register April 10, 2026), which withdrew and superseded the July 3, 2024 proposal. Comments closed June 9, 2026. If adopted as proposed, institutions would have 12 months from issuance of the final rule to comply."
      },
      {
        "q": "What guidance governs validation of AML transaction-monitoring models?",
        "a": "Since April 17, 2026, only the revised interagency model risk management guidance (OCC Bulletin 2026-13 / Fed SR 26-2) applies. The April 9, 2021 interagency statement on model risk management for BSA/AML systems, issued in consultation with FinCEN, was rescinded on that date and was not replaced with AML-specific guidance."
      }
    ],
    "related": [
      "occ",
      "federal-reserve",
      "fdic",
      "ncua",
      "treasury"
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "treasury",
    "name": "U.S. Treasury",
    "fullName": "U.S. Department of the Treasury (including the Financial Stability Oversight Council)",
    "jurisdiction": "United States (federal; convenes FSOC and the financial-sector critical-infrastructure partnership; parent of the OCC and FinCEN)",
    "role": "Policy lead, sector risk-management agency, and FSOC chair",
    "binding": "Voluntary framework",
    "appliesTo": "All U.S. financial institutions indirectly — Treasury issues reports, voluntary frameworks, and FSOC recommendations rather than supervisory rules; the binding follow-through comes from the OCC, Federal Reserve, FDIC, CFPB, SEC, and state regulators",
    "aliases": [
      "Treasury Department",
      "U.S. Treasury",
      "Department of the Treasury",
      "FSOC",
      "Financial Stability Oversight Council",
      "home.treasury.gov"
    ],
    "answerFirst": "The U.S. Treasury does not supervise banks' AI directly, but it sets the federal agenda. Its March 27, 2024 report on AI-specific cybersecurity risks, its June 2024 request for information (103 comment letters), and its December 19, 2024 findings report shaped the interagency conversation, and on February 19, 2026 it released a voluntary Financial Services AI Risk Management Framework (FS AI RMF, adapted from the NIST AI RMF) and a shared AI Lexicon through the public-private AIEOG. As FSOC chair, Treasury has flagged AI in every annual report since 2023 and in December 2025 created an FSOC Artificial Intelligence Working Group to promote adoption while monitoring stability risks.",
    "overview": [
      "Treasury's AI work runs on three tracks. First, as the Sector Risk Management Agency for financial services, its Office of Cybersecurity and Critical Infrastructure Protection (OCCIP) produced the March 2024 report on managing AI-specific cybersecurity and fraud risks (written under Executive Order 14110) and then, with the FBIIC and the Financial Services Sector Coordinating Council, stood up the Artificial Intelligence Executive Oversight Group (AIEOG). The AIEOG's six workstreams — AI Lexicon and taxonomy, a Financial Services AI Risk Management Framework, explainability, data 'nutrition labels', AI-enhanced fraud, and identity and authentication — were announced complete on February 18, 2026, with the Lexicon and FS AI RMF published the next day as non-binding resources.",
      "Second, Treasury's Domestic Finance office ran the June 2024 Request for Information on the uses, opportunities and risks of AI in financial services and published its findings on December 19, 2024, recommending that regulators clarify supervisory expectations, close gaps in existing frameworks, and that firms review every AI use case for compliance with existing law before deployment. Third, Treasury chairs the Financial Stability Oversight Council: FSOC first named AI an emerging vulnerability in its 2023 annual report, catalogued explainability, data, performance, third-party and bias risks in 2024, and in its 2025 report pivoted to 'harnessing AI to promote financial stability', creating a standing AI Working Group and the 2026 AI Innovation Series of public-private roundtables.",
      "Under the current administration Treasury's posture is explicitly pro-adoption: its 2026 outputs are framed as implementing Executive Order 14179 ('Removing Barriers to American Leadership in Artificial Intelligence', January 2025) and the July 2025 AI Action Plan. Treasury also practices what it recommends — its Office of Payment Integrity credited machine-learning check-fraud detection with $1 billion of the $4 billion in fraud and improper payments it prevented or recovered in fiscal 2024."
    ],
    "keyDocument": "Financial Services AI Risk Management Framework (FS AI RMF) and AI Lexicon — voluntary, NIST-aligned resources released Feb 19, 2026",
    "latestMove": "June 2026: FSOC and Treasury's AI Transformation Office concluded the four-roundtable AI Innovation Series (Mar–May 2026); participants asked for regulatory clarity and harmonization to scale AI adoption",
    "milestones": [
      {
        "date": "2025-01-23",
        "title": "Executive Order 14179 'Removing Barriers to American Leadership in Artificial Intelligence' signed",
        "summary": "Revoked EO 14110 (under which Treasury's March 2024 AI cybersecurity report was written) and set the deregulatory frame that Treasury's 2026 AI resources and FSOC's AI Innovation Series cite as their mandate.",
        "link": "https://www.federalregister.gov/documents/2025/01/31/2025-02172/removing-barriers-to-american-leadership-in-artificial-intelligence",
        "docType": "Milestone"
      },
      {
        "date": "2025-07-23",
        "title": "White House releases America's AI Action Plan",
        "summary": "The Action Plan calls for clear standards, shared understanding, and risk-based governance; Treasury's February 2026 AIEOG resources and AI Innovation Series are framed as implementing it in the financial sector.",
        "link": "https://www.whitehouse.gov/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf",
        "docType": "Milestone"
      },
      {
        "date": "2026-02-18",
        "title": "Treasury announces completion of the AIEOG public-private AI initiative",
        "summary": "Treasury said six AIEOG deliverables — covering governance, data practices, transparency, fraud, and digital identity — would be released in stages during February 2026, aimed particularly at small and mid-sized institutions.",
        "link": "https://home.treasury.gov/news/press-releases/sb0395",
        "docType": "Milestone"
      }
    ],
    "watchNext": [
      "Publication and uptake of the remaining AIEOG deliverables (explainability, data nutrition labeling, AI-enhanced fraud, identity and authentication) and whether examiners begin referencing the FS AI RMF",
      "FSOC's 2026 annual report (expected December 2026): the first full-year output of the AI Working Group and any follow-through on the 'regulatory impediments' identified in the AI Innovation Series",
      "Whether Treasury or FSOC translate Innovation Series feedback into concrete asks of the banking agencies — e.g., harmonized AI guidance or safe harbors for AI-enabled fraud and cyber defense",
      "Treasury's own AI deployment (AI Transformation Office, Chief AI Officer appointed June 2025) and updated fraud-prevention figures from the Bureau of the Fiscal Service"
    ],
    "faq": [
      {
        "q": "Is the Treasury FS AI RMF mandatory for banks?",
        "a": "No. The Financial Services AI Risk Management Framework and the AI Lexicon released on February 19, 2026 are voluntary, non-binding resources developed through the AIEOG public-private partnership. They adapt the NIST AI Risk Management Framework to financial services and are meant to be scalable for institutions of any size; binding expectations still come from the prudential regulators' model-risk, third-party, and consumer-protection rules."
      },
      {
        "q": "What did FSOC say about AI in its 2025 annual report?",
        "a": "FSOC's December 11, 2025 report reframed AI as an opportunity as well as a risk, creating an Artificial Intelligence Working Group to identify high-value AI use cases for member agencies, monitor financial-stability risks from AI adoption inside and outside finance, and provide a public-private forum on regulatory impediments to responsible adoption."
      },
      {
        "q": "Does Treasury regulate AI in financial services?",
        "a": "Not directly. Treasury publishes reports, voluntary frameworks, and FSOC recommendations, and it houses the OCC and FinCEN, which do have supervisory and enforcement powers. Its December 2024 RFI report recommended that regulators clarify supervisory expectations and that firms review AI use cases for compliance with existing laws before deployment."
      }
    ],
    "related": [
      "occ",
      "federal-reserve",
      "fdic",
      "cfpb",
      "fincen",
      "sec",
      "nist",
      "fsb"
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ny-dfs",
    "name": "NY DFS",
    "fullName": "New York State Department of Financial Services",
    "jurisdiction": "New York State (state-chartered banks, foreign bank branches and agencies, insurers, money transmitters, virtual-currency licensees, and other DFS-licensed entities)",
    "role": "State prudential, insurance, and cybersecurity regulator",
    "binding": "Supervisory guidance",
    "appliesTo": "Roughly 3,000 DFS-licensed or -chartered entities: New York state-chartered banks and trust companies, New York branches and agencies of foreign banks, licensed lenders, mortgage companies, money transmitters, virtual-currency (BitLicense) firms, and every insurer authorized in New York — including bank-owned insurers and agencies",
    "aliases": [
      "NYDFS",
      "NY DFS",
      "New York Department of Financial Services",
      "New York DFS",
      "Department of Financial Services"
    ],
    "answerFirst": "The New York State Department of Financial Services regulates AI in banking mainly through its cybersecurity regulation, 23 NYCRR Part 500, rather than a standalone AI rule. Its October 16, 2024 Industry Letter tells every DFS-regulated entity to fold AI-specific threats — deepfake social engineering, AI-accelerated attacks, exposure of data used to train AI, and AI supply-chain risk — into the Part 500 risk assessments, MFA, training, and third-party controls they already run, and its May 21, 2026 letter on frontier AI models tells CISOs to compress patching timelines and review AI-generated code before the next generation of vulnerability-finding models becomes widely available. For AI in underwriting and pricing, DFS's Insurance Circular Letter No. 7 (2024) requires disparate-impact testing, board-level governance, and specific adverse-action reasons — binding on insurers, including bank-owned ones, but not on bank lending.",
    "overview": [
      "DFS is the most consequential state financial regulator in the United States because almost every large bank has a New York charter, branch, or agency, and because Part 500 — first effective March 1, 2017 and substantially amended on November 1, 2023 — is the template other state and federal cyber rules have borrowed from. DFS has chosen to regulate AI by interpretation of Part 500 rather than by writing an AI rule: the October 2024 Industry Letter and the two May 21, 2026 Industry Letters each state that they create no new legal requirements, yet each maps AI risks onto specific Part 500 sections that DFS examines against and has enforced with seven- and eight-figure penalties.",
      "On the conduct side, DFS's Insurance Circular Letter No. 7 (2024) is one of the most detailed US supervisory statements on algorithmic fairness: it defines 'artificial intelligence systems' and 'external consumer data and information sources', requires a three-step disparate-impact analysis with an annual search for less discriminatory alternatives, holds insurers fully responsible for vendor models, and requires that adverse-action reasons name the actual data relied on. Its scope is insurers, not banks, but bank holding companies with insurance subsidiaries and bank-affiliated agencies are directly caught, and the analysis closely tracks what the CFPB expects under ECOA. Acting Superintendent Kaitlin Asrow, who took over on October 18, 2025, told the New York Assembly in December 2025 that DFS intends to keep applying technology-neutral law through guidance and examinations rather than write bespoke AI rules unless new risks require it."
    ],
    "keyDocument": "23 NYCRR Part 500 (Second Amendment effective Nov 1, 2023; fully phased in Nov 1, 2025) as applied to AI by the Oct 16, 2024 Industry Letter",
    "latestMove": "May 21, 2026: two Industry Letters on frontier AI model cyber risk and measures to take in a heightened threat environment",
    "milestones": [
      {
        "date": "2025-10-18",
        "title": "Kaitlin Asrow becomes Acting Superintendent",
        "summary": "Adrienne Harris departs after four years; Asrow, a former Federal Reserve supervisor of bank technology use, takes over and later tells the Assembly DFS will apply technology-neutral law to AI through guidance and exams rather than new AI-specific rules.",
        "link": "https://www.dfs.ny.gov/reports_and_publications/press_releases/pr202509291",
        "docType": "Milestone"
      },
      {
        "date": "2025-11-01",
        "title": "Final Part 500 Second Amendment provisions take effect",
        "summary": "Universal multi-factor authentication (§500.12) and the asset-inventory requirement (§500.13(a)) — the two controls the October 2024 AI letter leans on most — become mandatory for all covered entities.",
        "link": "https://www.dfs.ny.gov/industry_guidance/regulations/final_adoptions_fs/rf_fs_2amend23NYCRR500_text_20231101_alt",
        "docType": "Milestone"
      },
      {
        "date": "2025-12-22",
        "title": "RAISE Act signed; DFS to house frontier-AI oversight office",
        "summary": "Governor Hochul signs the Responsible AI Safety and Education Act, which requires large frontier-model developers to publish safety protocols and report critical harm incidents within 72 hours, and places a new oversight office inside DFS to assess developers and issue annual transparency reports.",
        "link": "https://www.dfs.ny.gov/reports_and_publications/press_releases/pr20251222",
        "docType": "Milestone"
      }
    ],
    "watchNext": [
      "Whether the new RAISE Act oversight office inside DFS produces any spillover expectations for banks that deploy frontier models through vendors",
      "Part 500 examinations and enforcement in 2026–27 testing whether firms actually documented AI-enabled social engineering, deepfake-resistant MFA, and AI-vendor risk in their §500.9 risk assessments",
      "Any move by DFS to extend Circular Letter No. 7-style disparate-impact testing beyond insurance to lenders, or to write AI-specific requirements — which Asrow said in December 2025 remains possible 'as new risks arise'",
      "Follow-up to the May 2026 frontier-AI letter once vulnerability-finding models are broadly available, including any expected patching timelines"
    ],
    "faq": [
      {
        "q": "Does NYDFS have an AI regulation for banks?",
        "a": "No standalone rule. DFS regulates AI in banks through 23 NYCRR Part 500, its cybersecurity regulation, as interpreted by the October 16, 2024 Industry Letter on AI cyber risks and the May 21, 2026 Industry Letter on frontier AI models. Both say they create no new requirements but map AI risks onto sections DFS examines and enforces."
      },
      {
        "q": "Does Insurance Circular Letter No. 7 (2024) apply to banks?",
        "a": "Only to insurers authorized in New York, Article 43 corporations, HMOs, fraternal benefit societies, and the State Insurance Fund. A bank's insurance subsidiary is covered for its underwriting and pricing; the bank's lending is not. The letter also does not cover marketing or claims handling."
      },
      {
        "q": "What does NYDFS expect banks to do about AI deepfakes?",
        "a": "Treat AI-enabled social engineering as a Part 500 risk: include it in the annual risk assessment, train all staff on deepfake voice/video/text attacks, verify unusual requests through separate channels, and use MFA that is resistant to AI manipulation — DFS specifically discourages SMS, voice, and video-based authentication in favor of digital certificates or hardware keys."
      }
    ],
    "related": [
      "occ",
      "federal-reserve",
      "cfpb",
      "fdic",
      "nist",
      "colorado-ai-act"
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "colorado-ai-act",
    "name": "Colorado AI Act",
    "fullName": "Colorado Artificial Intelligence Act (SB 24-205), repealed and reenacted as the Automated Decision-Making Technology Act (SB 26-189) — enforced by the Colorado Attorney General",
    "jurisdiction": "Colorado, United States (any developer or deployer doing business in Colorado)",
    "role": "First US state-level AI law reaching lending and financial-services decisions",
    "binding": "Binding law",
    "appliesTo": "Developers and deployers of automated decision-making technology that materially influences consequential decisions for Colorado consumers — including credit, lending, insurance, and other financial-services decisions — with no carve-out for banks or credit unions",
    "aliases": [
      "Colorado AI Act",
      "SB 24-205",
      "SB 26-189",
      "Colorado ADMT Act",
      "Automated Decision-Making Technology Act"
    ],
    "answerFirst": "Colorado's AI Act (SB 24-205, signed May 17, 2024) never took effect: its start date was pushed from February 1, 2026 to June 30, 2026 by SB 25B-004, and on May 14, 2026 Governor Polis signed SB 26-189, which repeals and reenacts it as the Automated Decision-Making Technology (ADMT) Act, effective January 1, 2027. The new law drops the duty of care, impact assessments, and risk-management program in favor of developer documentation, consumer notice, 30-day adverse-outcome explanations, data correction, and human review — and it strikes the old safe harbor for banks and credit unions supervised under equivalent federal guidance. Lenders instead get a narrower overlap: an ECOA/Reg B (and, where applicable, FCRA) adverse action notice satisfies the ADMT Act's notice and disclosure duties for the same decision. The Colorado Attorney General has exclusive enforcement authority (deceptive trade practice, up to $20,000 per violation, 60-day cure) and published proposed implementing rules on August 11, 2026 with a hearing and comment deadline of October 26, 2026.",
    "overview": [
      "SB 24-205 was the first comprehensive US state AI statute. It imposed a duty of reasonable care to avoid algorithmic discrimination on developers and deployers of 'high-risk' AI systems used in consequential decisions — expressly including financial or lending services — backed by impact assessments, risk-management programs, consumer notices, and an affirmative defense for firms following the NIST AI RMF. Banks and credit unions were deemed in full compliance if a state or federal prudential regulator examined them under published guidance or regulations at least as stringent as the Act (C.R.S. 6-1-1705). Industry pushback, a failed August 2025 special session, a December 2025 White House executive order singling the law out, and a Department of Justice-backed federal lawsuit (xAI v. Colorado) drove two rewrites: SB 25B-004 delayed the start to June 30, 2026, and SB 26-189 replaced the law outright.",
      "The ADMT Act that takes effect January 1, 2027 is a disclosure-and-recourse regime rather than a governance regime. Covered ADMT is technology that processes personal data to produce recommendations, rankings, or scores that materially influence a consequential decision in education, employment, housing, financial services, insurance, health care, or government services. Developers must give deployers documentation of intended use, training-data categories, limitations, and instructions for meaningful human review; deployers must post clear notice, explain adverse outcomes within 30 days, honor requests to access and correct personal data, and offer commercially reasonable human review by trained staff with override authority. Both must retain compliance records for three years.",
      "For banks the practical shift is that the prudential-regulator safe harbor is gone. Colorado now treats a bank's AI-driven credit denial like any other deployer's adverse outcome, with the ECOA/FCRA adverse action notice serving as the compliance vehicle for the notice and disclosure elements — but not automatically for the data-correction and human-review rights, which the Attorney General's proposed rules define in detail (independent, subject-matter-competent reviewers who may not themselves use ADMT). The rulemaking, filed August 11, 2026, also introduces 'midstream developers' and two alternative tests for when ADMT 'materially influences' a decision."
    ],
    "keyDocument": "SB 26-189, the Automated Decision-Making Technology Act (signed May 14, 2026; effective Jan 1, 2027)",
    "latestMove": "Colorado AG published proposed ADMT and Conversational AI Service rules on Aug 11, 2026; comments and hearing close Oct 26, 2026",
    "milestones": [
      {
        "date": "2026-04-27",
        "title": "AG commits not to enforce until rulemaking concludes; federal court stays xAI challenge",
        "summary": "In a joint motion with xAI and the US Department of Justice in the federal suit challenging SB 24-205, the Colorado Attorney General stated it would not enforce SB 24-205 or any replacement law until its interpretive rulemaking is complete; the District of Colorado granted the motion.",
        "link": "https://coag.gov/ai/",
        "docType": "Milestone"
      },
      {
        "date": "2026-06-30",
        "title": "Original SB 24-205 effective date passes without the law taking effect",
        "summary": "The June 30, 2026 start date set by SB 25B-004 was overtaken by SB 26-189, which repealed and reenacted the statute with a January 1, 2027 effective date.",
        "link": "https://leg.colorado.gov/bills/sb26-189",
        "docType": "Milestone"
      }
    ],
    "watchNext": [
      "Final ADMT rules from the Colorado AG after the Oct 26, 2026 hearing — especially which 'materially influences' test survives and how much the ECOA/FCRA notice overlap is extended to human-review and data-correction rights",
      "Jan 1, 2027: ADMT Act and Chatbot Safety Act (HB 26-1263) take effect; the 60-day cure period sunsets Jan 1, 2030",
      "Whether the DOJ AI Litigation Task Force or a federal preemption measure targets SB 26-189 as it did SB 24-205",
      "California's CPPA automated decisionmaking technology regulations — significant-decision obligations (including lending) apply from Jan 1, 2027, with risk-assessment attestations due by April 1, 2028 — now tracked as their own authority; the two states' exemptions are mirror images (Colorado: none for banks; California: GLBA-covered data exempt)",
      "Texas TRAIGA (HB 149, in force Jan 1, 2026): AG-enforced prohibitions on intentionally discriminatory AI, with a 60-day cure and a regulatory sandbox; Utah's AI Policy Act (SB 149, May 1, 2024) requires generative-AI disclosure on request; Illinois HB 3773 (Jan 1, 2026) makes discriminatory AI in employment a civil-rights violation — relevant to bank HR uses"
    ],
    "faq": [
      {
        "q": "Is the Colorado AI Act in force in 2026?",
        "a": "No. SB 24-205 was delayed to June 30, 2026 by SB 25B-004 and then repealed and reenacted by SB 26-189 before that date. The replacement ADMT Act takes effect January 1, 2027, and the Colorado Attorney General has said it will not enforce until its rulemaking is complete."
      },
      {
        "q": "Are banks and credit unions exempt from Colorado's AI law?",
        "a": "Not any more. SB 24-205 deemed banks and credit unions compliant if a prudential regulator examined them under substantially equivalent guidance. SB 26-189 struck that exemption. What remains is a targeted overlap: a lender that gives an ECOA/Regulation B (and, where applicable, FCRA) adverse action notice satisfies the ADMT Act's notice and disclosure duties for that decision."
      },
      {
        "q": "Who enforces the Colorado ADMT Act and what are the penalties?",
        "a": "The Colorado Attorney General has exclusive enforcement authority; there is no private right of action. Violations are deceptive trade practices under the Colorado Consumer Protection Act, carrying civil penalties of up to $20,000 per violation, with a mandatory 60-day notice-and-cure period until January 1, 2030."
      }
    ],
    "related": [
      "cfpb",
      "nist",
      "eu-ai-act",
      "ny-dfs",
      "occ"
    ],
    "lastUpdated": "2026-09-01"
  },
  {
    "slug": "california",
    "name": "California CPPA",
    "fullName": "California — Privacy Protection Agency (CCPA/CPRA automated decisionmaking, risk-assessment and cybersecurity-audit regulations), Attorney General, and Civil Rights Council",
    "jurisdiction": "California, United States (any business meeting CCPA thresholds that handles Californians' personal information; employers with five or more California employees)",
    "role": "State privacy-and-civil-rights regime whose automated decisionmaking rules reach lending, deposit and employment decisions — the most-cited state AI rules after Colorado's",
    "binding": "Binding law",
    "appliesTo": "Businesses over the CCPA thresholds (about $25 million in annual revenue, inflation-adjusted, or personal information of 100,000+ consumers or households) — including banks, credit unions and lenders for personal information that is not subject to GLBA or the California Financial Information Privacy Act; and, separately, any employer with five or more California employees using automated decision systems in hiring, promotion or pay",
    "aliases": [
      "California Privacy Protection Agency",
      "CPPA ADMT",
      "California ADMT",
      "CCPA ADMT regulations",
      "automated decisionmaking technology regulations",
      "California Civil Rights Council"
    ],
    "answerFirst": "California has no dedicated AI statute for banks — the Automated Decisions Safety Act (AB 1018) was not among the bills sent to the Governor when the Legislature adjourned on August 31, 2026 — but three binding instruments reach them. The California Privacy Protection Agency's regulations on automated decisionmaking technology (ADMT), risk assessments and cybersecurity audits were approved September 22, 2025 and took effect January 1, 2026: businesses using ADMT to make 'significant decisions', a category that lists financial or lending services first, must give pre-use notice, an opt-out or human-appeal route, and an explanation on request from January 1, 2027, with risk-assessment attestations due to the Agency by April 1, 2028 and the first cybersecurity-audit certifications due the same day for businesses over $100 million in revenue. What narrows this for banks is the CCPA's data-level exemption (Civil Code §1798.145(e)): personal information subject to the Gramm-Leach-Bliley Act sits outside the statute, so the rules bite hardest on employment, marketing and non-GLBA data rather than on the credit decision itself. The Civil Rights Council's regulations on automated decision systems in employment (in force since October 1, 2025) and the Attorney General's January 2025 advisory that existing consumer-protection, civil-rights and credit-reporting law already applies to AI complete the picture.",
    "overview": [
      "The CPPA's 2025 package is the operative text. 'ADMT' is technology that processes personal information and uses computation to replace or substantially replace human decisionmaking — a business that keeps a human reviewer who understands the output, actually reviews it and can change the outcome is not using ADMT in the regulatory sense. A 'significant decision' is one that results in the provision or denial of financial or lending services, housing, education, employment or independent-contracting opportunities, or health-care services; 'financial or lending services' is defined to cover the extension of credit or a loan, transmitting or exchanging funds, deposit or checking accounts, check cashing and installment plans. Where ADMT is used for such a decision the business must give a pre-use notice, honor an opt-out (or instead offer an appeal to a qualified human reviewer), and on request explain the logic, the output and how it was used. Using ADMT for a significant decision also triggers a documented risk assessment before the processing starts.",
      "For a bank the scoping question is the exemption, not the definition. The CCPA exempts personal information that is collected, processed, sold or disclosed subject to the Gramm-Leach-Bliley Act, the California Financial Information Privacy Act or the Farm Credit Act — at the level of the data, not the institution. In its Final Statement of Reasons the Agency declined to add an entity-level financial-institution exemption precisely because the statute already provides a data-level one. At a GLBA-covered lender the application, bureau, account and adverse-action data behind a credit decision is that data, so the ADMT article largely does not reach the credit decision. It does reach employee and applicant data (inside the CCPA since January 1, 2023), prospect and advertising data, non-GLBA product lines, and model-training data; mixed-input models remain the unresolved edge.",
      "Two further instruments matter. The Civil Rights Council's regulations under the Fair Employment and Housing Act, in force since October 1, 2025, make it unlawful for an employer with five or more employees to use an automated decision system that discriminates on a protected basis, treat anti-bias testing as relevant evidence, extend liability to vendors acting as the employer's agent, and require four-year retention of ADS records — directly relevant to bank HR screening tools. The Attorney General's January 13, 2025 legal advisory states that the Unfair Competition Law, False Advertising Law, CCPA, Unruh Civil Rights Act, FEHA and the Consumer Credit Reporting Agencies Act already govern AI, and singles out AI used 'to evaluate consumers' credit risk and guide loan decisions' as a use that must still produce specific adverse-action reasons. California's Department of Financial Protection and Innovation has issued no AI-specific guidance for the institutions it licenses."
    ],
    "keyDocument": "CPPA regulations on cybersecurity audits, risk assessments and automated decisionmaking technology (11 CCR §§ 7001, 7120–7124, 7150–7157, 7200–7222; approved Sep 22, 2025, effective Jan 1, 2026; ADMT obligations from Jan 1, 2027)",
    "latestMove": "Legislature adjourned Aug 31, 2026 with AB 1609 (customer-service chatbots at businesses over $500M revenue) and SB 947 (workplace automated decision systems) on the Governor's desk until Sep 30; AB 1018 did not pass. ADMT obligations for significant decisions apply from Jan 1, 2027",
    "milestones": [
      {
        "date": "2026-01-01",
        "title": "CPPA regulations on ADMT, risk assessments and cybersecurity audits take effect",
        "summary": "The package approved by the Office of Administrative Law on September 22, 2025 became operative. ADMT obligations for significant decisions phase in from January 1, 2027; risk-assessment attestations and the first cybersecurity-audit certifications are due April 1, 2028.",
        "link": "https://cppa.ca.gov/announcements/2025/20250923.html",
        "docType": "Milestone"
      },
      {
        "date": "2026-08-31",
        "title": "Legislature adjourns: AB 1018 not passed; chatbot and workplace-ADS bills go to the Governor",
        "summary": "The Automated Decisions Safety Act (AB 1018), which would have required pre-deployment bias evaluations of automated decision systems used for consequential decisions including lending, was not among the AI bills sent to the Governor. AB 1609 (customer-service chatbot disclosure and 15-minute human hand-off at businesses over $500 million in revenue) and SB 947 (worker protections for automated decision systems) were; the Governor has until September 30, 2026 to act.",
        "link": "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB1018",
        "docType": "Milestone"
      }
    ],
    "watchNext": [
      "Governor's action by Sep 30, 2026 on AB 1609 (customer-service chatbots: no representing a bot as human, clear AI disclosure, a way to reach a human within 15 minutes or by appointment within one business day; $5,000/$10,000 penalties; businesses over $500M revenue) and SB 947 (automated decision systems in employment) — both would reach large banks' customer and HR operations",
      "Jan 1, 2027: ADMT obligations (pre-use notice, opt-out or human appeal, access explanation) apply to significant decisions; how the CPPA treats mixed GLBA/non-GLBA model inputs, which the Final Statement of Reasons left open",
      "Apr 1, 2028: risk-assessment attestations and summaries for 2026–27 processing, and the first cybersecurity-audit certifications for businesses over $100M in revenue (Apr 1, 2029 for $50–100M; Apr 1, 2030 below $50M)",
      "Whether AB 1018 or a successor bias-evaluation bill returns in the 2027 session, and any CPPA enforcement action that tests the data-level GLBA exemption",
      "Whether the Department of Financial Protection and Innovation issues AI guidance under the California Consumer Financial Protection Law"
    ],
    "faq": [
      {
        "q": "Do California's ADMT regulations apply to banks?",
        "a": "Only partly. The regulations cover automated decisionmaking technology used for significant decisions, which expressly include financial or lending services. But the CCPA exempts personal information subject to the Gramm-Leach-Bliley Act at the data level (Civil Code §1798.145(e)), so at a GLBA-covered lender the credit decision itself is largely outside the rules. Employment decisions, marketing data, non-GLBA products and model-training data remain inside."
      },
      {
        "q": "When do California's ADMT rules take effect?",
        "a": "The regulations took effect January 1, 2026. Businesses using ADMT for significant decisions must comply with the notice, opt-out and access requirements from January 1, 2027. Risk-assessment attestations are due to the CPPA by April 1, 2028."
      },
      {
        "q": "Does California have an AI law like Colorado's ADMT Act?",
        "a": "No. The Automated Decisions Safety Act (AB 1018) did not pass by the August 31, 2026 adjournment. California regulates AI in banking through the CPPA's privacy regulations, the Civil Rights Council's employment ADS rules, and existing consumer-protection and civil-rights law, as the Attorney General's January 2025 advisory set out."
      }
    ],
    "related": [
      "cfpb",
      "colorado-ai-act",
      "ny-dfs",
      "nist",
      "eu-ai-act"
    ],
    "lastUpdated": "2026-09-01"
  },
  {
    "slug": "nist",
    "name": "NIST",
    "fullName": "National Institute of Standards and Technology — AI Risk Management Framework",
    "jurisdiction": "United States (voluntary, used globally)",
    "role": "Standards body",
    "binding": "Voluntary framework",
    "appliesTo": "Any organization; widely adopted by US banks as the scaffold for AI governance programs",
    "aliases": [
      "NIST",
      "National Institute of Standards and Technology",
      "NIST AI RMF",
      "AI Risk Management Framework"
    ],
    "answerFirst": "NIST is not a regulator, but its AI Risk Management Framework (AI RMF 1.0, January 2023) has become the de facto template US banks use to structure AI governance — especially since the April 2026 interagency model-risk guidance left generative and agentic AI to banks' broader risk programs. The framework's four functions (Govern, Map, Measure, Manage) plus its July 2024 Generative AI Profile give banks an examiner-legible way to demonstrate control over AI that formal model-risk rules no longer cover.",
    "overview": [
      "The AI RMF is voluntary, but voluntary frameworks harden fast in banking: when examiners ask how a bank governs its generative AI and there is no binding rule to point to, institutions answer with NIST-aligned programs. The Generative AI Profile (NIST AI 600-1) enumerates risks specific to generative systems — confabulation, data leakage, prompt injection — with suggested actions that map cleanly onto bank control frameworks.",
      "For banks operating internationally, the RMF also functions as a crosswalk: its categories align with the FSB's sound-practices work and provide a defensible baseline for the governance the EU AI Act requires of high-risk system deployers."
    ],
    "keyDocument": "AI Risk Management Framework 1.0 (Jan 2023) + Generative AI Profile (Jul 2024)",
    "latestMove": "Growing role as the default governance scaffold after the 2026 US model-risk revision excluded generative AI",
    "milestones": [
      {
        "date": "2026-04-17",
        "title": "US model-risk revision amplifies the RMF's role",
        "summary": "With generative and agentic AI excluded from formal interagency model-risk guidance (SR 26-2), NIST's framework becomes the leading reference for how banks govern those systems.",
        "link": "https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm",
        "docType": "Milestone"
      }
    ],
    "watchNext": [
      "The AI RMF 1.0 revision NIST is preparing under the July 2025 White House AI Action Plan (the Playbook will be updated after it), and whether bank governance programs need re-mapping",
      "The initial public draft of the Cyber AI Profile (NIST IR 8596) following the preliminary draft's January 30, 2026 comment close",
      "COSAiS SP 800-53 control overlays for generative AI, predictive AI and single/multi-agent systems",
      "Output of CAISI's AI Agent Standards Initiative (launched February 17, 2026), including its agent-security RFI and finance-sector listening sessions",
      "Whether US banking agencies formally reference the AI RMF in the AI governance guidance the OCC has signalled",
      "Use of the RMF as an EU AI Act compliance crosswalk by global banks"
    ],
    "faq": [
      {
        "q": "Is the NIST AI RMF mandatory for banks?",
        "a": "No — it is voluntary. But it has become the standard scaffold US banks use for AI governance, particularly for generative and agentic AI, which the April 2026 interagency model-risk guidance deliberately left to banks' broader risk-management programs."
      },
      {
        "q": "How does the NIST AI RMF relate to bank model risk management?",
        "a": "Model risk guidance covers validation of quantitative models; the AI RMF covers organization-wide AI risk governance, including systems outside formal model-risk scope. Most banks run them side by side: revised interagency guidance for traditional/ML models, NIST-aligned governance for generative AI."
      },
      {
        "q": "Does NIST have guidance on agentic AI?",
        "a": "Not yet a finished profile. As of August 2026 NIST's agentic work is in progress: CAISI's AI Agent Standards Initiative (February 17, 2026), an RFI on security considerations for AI agents (comments closed March 9, 2026), a COSAiS project drafting SP 800-53 control overlays for single-agent and multi-agent systems, and an NCCoE concept paper on software and AI agent identity and authorization. Banks deploying agents today typically map them to the AI RMF and the Generative AI Profile (AI 600-1)."
      }
    ],
    "related": [
      "occ",
      "federal-reserve",
      "fsb"
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "eu-ai-act",
    "name": "EU AI Act",
    "fullName": "Regulation (EU) 2024/1689 — the EU Artificial Intelligence Act",
    "jurisdiction": "European Union",
    "role": "Binding horizontal AI law",
    "binding": "Binding law",
    "appliesTo": "Any bank, lender, or fintech that develops or uses AI systems in the EU — including non-EU firms whose AI outputs are used in the EU",
    "aliases": [
      "EU AI Act",
      "Regulation (EU) 2024/1689",
      "Artificial Intelligence Act",
      "AI Act high-risk"
    ],
    "answerFirst": "The EU AI Act (Regulation (EU) 2024/1689) is the only binding, cross-sector AI law that directly regulates banks. Credit scoring of natural persons is explicitly listed as high-risk (Annex III, point 5(b)), which will require risk management, data governance, technical documentation, logging, human oversight, and post-market monitoring. Those high-risk obligations were due to apply on August 2, 2026, but the Digital Omnibus on AI (Regulation (EU) 2026/1744, in force July 27, 2026) deferred stand-alone Annex III systems to December 2, 2027 and product-embedded (Annex I) systems to August 2, 2028. Penalties for non-compliance with high-risk obligations reach €15 million or 3% of global annual turnover.",
    "overview": [
      "The AI Act entered into force on August 1, 2024 and applies in stages. Prohibited practices (such as social scoring) and AI-literacy duties took effect February 2, 2025; obligations for general-purpose AI models followed on August 2, 2025; and Article 50 transparency duties applied from August 2, 2026. The core high-risk regime — the part that matters most to banks — was originally due on August 2, 2026, but the Digital Omnibus on AI (Regulation (EU) 2026/1744, in force July 27, 2026) deferred it: stand-alone Annex III systems must comply from December 2, 2027, and AI embedded in regulated products (Annex I) from August 2, 2028.",
      "For banks the two headline classifications are credit scoring of natural persons (Annex III 5(b)) and risk assessment and pricing in life and health insurance (5(c)). The deferral buys time but does not change the substance: from December 2, 2027 these systems need risk management, data governance, technical documentation, logging, human oversight, accuracy and post-market monitoring, and supervisors have signalled they expect remediation of legacy ML portfolios rather than indefinite grandfathering. The EBA published a factsheet on what the Act means for the banking and payments sector in November 2025 and is coordinating supervisory implementation across national authorities through 2026–27."
    ],
    "keyDocument": "Regulation (EU) 2024/1689 (in force Aug 1, 2024), as amended by the Digital Omnibus on AI (EU) 2026/1744",
    "latestMove": "Regulation (EU) 2026/1744 (Digital Omnibus on AI) entered into force July 27, 2026, deferring Annex III high-risk obligations — including credit scoring — from Aug 2, 2026 to Dec 2, 2027",
    "milestones": [
      {
        "date": "2025-02-02",
        "title": "Prohibited practices and AI-literacy obligations apply",
        "summary": "Bans on unacceptable-risk AI (e.g., social scoring) take effect, along with the duty to ensure staff AI literacy — which applies to banks as deployers.",
        "link": "https://artificialintelligenceact.eu/implementation-timeline/",
        "docType": "Milestone"
      },
      {
        "date": "2025-08-02",
        "title": "General-purpose AI (GPAI) obligations apply",
        "summary": "Transparency and documentation duties for GPAI model providers begin; relevant to banks consuming foundation models through vendors.",
        "link": "https://artificialintelligenceact.eu/implementation-timeline/",
        "docType": "Milestone"
      },
      {
        "date": "2026-08-02",
        "title": "Article 50 transparency obligations apply; Annex III high-risk start deferred",
        "summary": "Transparency duties (e.g., telling customers they are interacting with an AI system, marking AI-generated content) apply from this date as originally scheduled. The Annex III high-risk regime — including credit scoring — did NOT start on this date: Regulation (EU) 2026/1744 (Digital Omnibus on AI, in force July 27, 2026) deferred it to December 2, 2027.",
        "link": "https://artificialintelligenceact.eu/implementation-timeline/",
        "docType": "Milestone"
      },
      {
        "date": "2027-12-02",
        "title": "High-risk AI obligations for stand-alone Annex III systems become applicable",
        "summary": "Deferred from August 2, 2026 by the Digital Omnibus on AI. Annex III high-risk systems — including credit scoring of natural persons — must comply with risk management, data governance, documentation, logging, human oversight, accuracy, and post-market monitoring requirements. Fines up to €15M / 3% of turnover.",
        "link": "https://artificialintelligenceact.eu/implementation-timeline/",
        "docType": "Milestone"
      },
      {
        "date": "2028-08-02",
        "title": "Deferred deadline for high-risk AI embedded in regulated products",
        "summary": "Article 6(1) / Annex I high-risk systems tied to EU product-safety legislation now apply from this date (moved from August 2, 2027 by the Digital Omnibus on AI).",
        "link": "https://artificialintelligenceact.eu/implementation-timeline/",
        "docType": "Milestone"
      }
    ],
    "watchNext": [
      "Final Commission guidelines on high-risk classification (Article 6), expected by end-2026 after the draft consultation closed July 23, 2026",
      "CEN-CENELEC harmonised standards for high-risk AI, now targeted for late 2026 at the earliest — the practical route to presumption of conformity before Dec 2, 2027",
      "EBA-coordinated supervisory convergence on how AI Act duties interact with existing model governance (CRD/CRR, EBA guidelines) through 2026–27",
      "Consumer Credit Directive 2023/2225 rules — including the right to human intervention in automated creditworthiness assessments — applying from November 20, 2026"
    ],
    "faq": [
      {
        "q": "Is credit scoring high-risk under the EU AI Act?",
        "a": "Yes. AI systems used to evaluate the creditworthiness of natural persons or establish their credit score are listed in Annex III, point 5(b), and are high-risk regardless of whether the AI makes the final decision or supports a human decision-maker. A narrow exception exists for systems used solely to detect financial fraud."
      },
      {
        "q": "When did the AI Act start applying to banks?",
        "a": "In stages: AI-literacy and prohibited-practice rules from February 2, 2025; general-purpose AI model obligations from August 2, 2025; Article 50 transparency duties from August 2, 2026. The high-risk regime that covers credit scoring was deferred by the July 2026 Digital Omnibus and now applies from December 2, 2027 (stand-alone Annex III systems) and August 2, 2028 (AI embedded in regulated products)."
      },
      {
        "q": "What are the penalties for banks under the AI Act?",
        "a": "Non-compliance with high-risk system obligations carries administrative fines of up to €15 million or 3% of global annual turnover, whichever is higher. Prohibited-practice violations carry up to €35 million or 7%."
      },
      {
        "q": "Do credit-scoring models deployed before December 2027 have to comply?",
        "a": "The Act's grandfathering only reaches high-risk systems placed on the market before the application date that are not subsequently significantly modified — and supervisors have made clear they expect legacy ML credit models to be brought into compliance rather than left untouched. With the deadline now December 2, 2027, banks should treat existing credit-scoring models as in scope and use the extra time for remediation, not exemption."
      },
      {
        "q": "Did the Digital Omnibus delay the EU AI Act high-risk deadline for credit scoring?",
        "a": "Yes. Regulation (EU) 2026/1744, the Digital Omnibus on AI, was published in the Official Journal on July 24, 2026 and entered into force on July 27, 2026. It moved the application date for stand-alone Annex III high-risk systems — the category that includes credit scoring of natural persons — from August 2, 2026 to December 2, 2027, and for AI embedded in regulated products (Annex I) from August 2, 2027 to August 2, 2028. Article 50 transparency obligations still applied from August 2, 2026."
      }
    ],
    "related": [
      "eba",
      "ecb",
      "fsb"
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "ecb",
    "name": "ECB",
    "fullName": "European Central Bank — Banking Supervision (SSM)",
    "jurisdiction": "Euro area (significant institutions)",
    "role": "Prudential supervisor",
    "binding": "Supervisory guidance",
    "appliesTo": "The ~110 significant euro-area banking groups directly supervised under the SSM",
    "aliases": [
      "ECB",
      "European Central Bank",
      "ECB Banking Supervision",
      "Single Supervisory Mechanism",
      "SSM"
    ],
    "answerFirst": "The ECB supervises AI at large euro-area banks through its existing prudential toolkit — internal-model approvals (with machine-learning expectations added to the Guide to internal models in July 2025), operational-resilience expectations under DORA, and on-site inspections — rather than AI-specific rules. AI sits under Priority 2 of the 2026–28 supervisory priorities with a sharper focus on generative AI, and more than 85% of supervised banks already use AI. On 7 July 2026 the ECB used its rarely used 'Dear CEO' channel for the first time on a technology threat, requiring every significant institution to submit an AI-cyber action plan to its Joint Supervisory Team by 31 October 2026.",
    "overview": [
      "The ECB's involvement runs on two tracks. For regulatory-capital models (IRB), any machine-learning component passes through the ECB's internal-model approval and the EBA's ML-for-IRB expectations. For everything else — fraud detection, customer service, coding assistants, generative AI — the ECB supervises through operational resilience and governance expectations, now formalized in its 2026–28 supervisory priorities under the digitalisation and ICT priority.",
      "ECB supervisors have been increasingly vocal in 2026: a February 2026 speech ('Technology is neutral, governance is not') captures the house view that AI adoption is welcome but board-level accountability, data quality, and control frameworks decide whether it is safe. The ECB is not the AI Act's market-surveillance authority — that falls to national authorities — but it factors AI Act readiness into its assessment of banks' governance."
    ],
    "keyDocument": "SSM supervisory priorities 2026–28 (AI under the operational-resilience priority)",
    "latestMove": "7 July 2026 'Dear CEO' letter on AI-enabled cybersecurity threats (SSM-2026-0301): every significant institution must file an action plan with its JST by 31 October 2026",
    "milestones": [
      {
        "date": "2026-10-31",
        "title": "Deadline for significant institutions to submit AI-cyber action plans to their JSTs",
        "summary": "Under the ECB's 7 July 2026 letter on AI-enabled cybersecurity threats (SSM-2026-0301), each significant institution must deliver a comprehensive action plan — measures, resources, owners, timelines — to its Joint Supervisory Team by 31 October 2026. The ECB will run a horizontal analysis of the plans and share conclusions with banks.",
        "link": "https://www.bankingsupervision.europa.eu/press/letterstobanks/shared/pdf/2026/ssm.2026_letter_on_AI_enabled_cybersecurity_threats.en.pdf",
        "docType": "Milestone"
      }
    ],
    "watchNext": [
      "Horizontal analysis of the AI-cyber action plans due to JSTs by 31 October 2026, and any follow-up workshops or bank-specific measures the ECB draws from it",
      "Targeted generative-AI workshops and the ECB's stance on materiality of gen-AI applications under the 2026–28 priorities, including how AI Act readiness feeds into SREP governance scores",
      "First supervisory assessments of machine-learning components under the July 2025 Guide to internal models (explainability, 'complexity justified by performance')",
      "Whether the ECB consolidates speech- and newsletter-level AI expectations into a dedicated guide or sound-practices document"
    ],
    "faq": [
      {
        "q": "Does the ECB approve banks' AI models?",
        "a": "Only models used for regulatory capital (internal models under IRB) go through formal ECB approval, including any ML components. Other AI systems — fraud detection, chatbots, generative AI tools — are supervised through governance and operational-resilience expectations rather than pre-approval."
      },
      {
        "q": "Is the ECB responsible for enforcing the EU AI Act on banks?",
        "a": "No. AI Act market surveillance is assigned to national authorities. The ECB supervises prudential soundness — but it assesses whether a bank's governance and risk management adequately cover its AI use, which in practice includes AI Act readiness."
      },
      {
        "q": "What are the ECB's supervisory priorities on AI for 2026–28?",
        "a": "AI sits under the operational-resilience and ICT priority: continued monitoring of AI adoption with a more focused approach to generative-AI applications, and particular attention to AI in credit scoring and fraud detection."
      },
      {
        "q": "What does the ECB's July 2026 AI cybersecurity letter require banks to do?",
        "a": "The 7 July 2026 letter (SSM-2026-0301) from Supervisory Board Chair Claudia Buch asks every significant institution to assess the AI-driven threat landscape without delay and submit an action plan to its Joint Supervisory Team by 31 October 2026. Short-term priorities are accelerated vulnerability and patch management, stronger monitoring/detection including AI-enabled defence, and third-party risk management for ICT providers; structural measures cover defence-in-depth, legacy replacement, and response and recovery. The ECB also pushed the annual IT Risk Questionnaire from September 2026 to February 2027 to free up bank resources."
      },
      {
        "q": "Does the ECB allow machine learning in IRB capital models?",
        "a": "Yes. The revised ECB Guide to internal models published 28 July 2025 added a section on machine-learning techniques: models must be adequately explainable and their added complexity must be justified by performance. Linear and logistic regression are not treated as ML for the guide's purposes."
      }
    ],
    "related": [
      "eba",
      "eu-ai-act",
      "fsb"
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "eba",
    "name": "EBA",
    "fullName": "European Banking Authority",
    "jurisdiction": "European Union",
    "role": "EU banking standard-setter",
    "binding": "Supervisory guidance",
    "appliesTo": "All EU credit institutions and payment providers, via national competent authorities",
    "aliases": [
      "EBA",
      "European Banking Authority"
    ],
    "answerFirst": "The EBA is the EU body translating the AI Act into banking practice. Its November 21, 2025 factsheet and AI Act mapping exercise found no significant contradictions between the Act and EU banking law and no immediate need for new EBA guidelines; its September 2025 adoption report found 92% of EU banks already deploying AI. On July 31, 2026 the EBA, EIOPA and ESMA jointly told financial entities to adjust their DORA ICT-risk frameworks without delay for cyber threats from frontier AI models. Its 2021–23 machine-learning-for-IRB workstream still governs how ML enters regulatory capital models.",
    "overview": [
      "The EBA has worked on bank AI longer than most: a 2020 report on big data and advanced analytics set early governance expectations, and its 2021–23 workstream on machine learning for internal ratings-based (IRB) models defined how banks may use ML in capital models without losing explainability and supervisability.",
      "With the AI Act now applicable to high-risk banking use cases, the EBA's role has shifted to implementation: mapping AI Act duties onto the existing CRD/CRR and guidelines framework so banks are not regulated twice or inconsistently, promoting supervisory convergence among national competent authorities, and participating in the AI Board's financial-services subgroup. Its 2025 adoption report — covering credit scoring, fraud detection, customer support, and general-purpose AI — is the best official snapshot of what EU banks actually deploy."
    ],
    "keyDocument": "Factsheet on the AI Act's implications for banking and payments (Nov 2025)",
    "latestMove": "Jul 31, 2026: joint ESA statement (JC 2026 25) on ICT risks from frontier AI models — banks told to adjust DORA ICT-risk controls around prevention, detection and management without delay",
    "milestones": [
      {
        "date": "2022-02-11",
        "title": "Consultation on the ML-for-IRB discussion paper closes",
        "summary": "Deadline for industry feedback on the EBA's November 2021 discussion paper on machine learning for IRB models; the feedback fed the August 2023 follow-up report.",
        "link": "https://www.eba.europa.eu/publications-and-media/press-releases/eba-consults-machine-learning-internal-ratings-based-models",
        "docType": "Milestone"
      }
    ],
    "watchNext": [
      "European Commission guidelines on the interplay between the AI Act and EU sectoral (banking) law under Article 96(1)(e), informed by the EBA's mapping annex",
      "Supervisory-convergence output for national competent authorities and market surveillance authorities enforcing the high-risk regime on credit scoring",
      "DORA oversight of critical ICT third-party providers embedding frontier-AI risk in the 2027 Oversight Plan, following the July 2026 ESA statement",
      "Whether ML-for-IRB expectations get updated for the AI Act era"
    ],
    "faq": [
      {
        "q": "What has the EBA said about the AI Act for banks?",
        "a": "Its November 2025 factsheet explains how AI Act obligations — particularly the high-risk classification of credit scoring — interact with the existing EU banking framework, and its 2026–27 workplan focuses on getting national supervisors to apply the Act to banks consistently."
      },
      {
        "q": "Can EU banks use machine learning in capital (IRB) models?",
        "a": "Yes, within the expectations set by the EBA's machine-learning-for-IRB workstream (2021 discussion paper and 2023 follow-up): banks must preserve explainability, human understanding of model drivers, and supervisability. The ECB applies these expectations in model approvals."
      },
      {
        "q": "How common is AI in EU banking?",
        "a": "The EBA's 2025 adoption report found AI in production across most EU banks — dominated by fraud detection, credit scoring, and customer support, with general-purpose AI spreading fast in internal productivity use cases."
      },
      {
        "q": "What did the ESAs say about frontier AI models in July 2026?",
        "a": "On July 31, 2026 the EBA, EIOPA and ESMA published joint statement JC 2026 25 warning that frontier AI models sharply accelerate vulnerability discovery and exploitation. It asks financial entities to adjust ICT risk management under DORA along three strategies — prevention, detection and management — proportionately to their size and risk profile (DORA Art. 4), and says the Lead Overseers are embedding AI-related risk into the oversight of critical ICT third-party providers for 2027."
      }
    ],
    "related": [
      "eu-ai-act",
      "ecb",
      "fsb"
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "uk",
    "name": "UK (BoE / PRA / FCA)",
    "fullName": "Bank of England, Prudential Regulation Authority, and Financial Conduct Authority",
    "jurisdiction": "United Kingdom",
    "role": "Prudential and conduct regulators",
    "binding": "Supervisory guidance",
    "appliesTo": "UK banks, building societies, investment firms, and insurers",
    "aliases": [
      "Bank of England",
      "Prudential Regulation Authority",
      "Financial Conduct Authority",
      "BoE/PRA",
      "UK FCA"
    ],
    "answerFirst": "The UK has deliberately chosen not to write an AI rulebook for finance. The Bank of England, PRA, and FCA regulate AI through existing technology-agnostic frameworks — most recently reaffirmed in the BoE/PRA's April 2026 response to Parliament's inquiry on AI in financial services. Instead of rules, the UK runs the deepest supervisory monitoring program anywhere: periodic AI surveys (2019, 2022, 2024, and a new one covering foundation models and agentic AI), sandbox initiatives, and AI as a named 2026 supervisory priority.",
    "overview": [
      "The UK approach was set by DP5/22 (2022) and the FS2/23 feedback statement (2023): existing frameworks — the Senior Managers regime, model risk management (SS1/23), operational resilience, and Consumer Duty — already cover AI, so the regulators supervise outcomes rather than technology. The government reinforced this in January 2026 with strategic letters directing 19 regulators, including the FCA and Bank of England, to publish plans for enabling safe AI innovation and report annually.",
      "On April 1, 2026 the BoE and PRA responded to the Treasury Select Committee's inquiry on AI, reiterating the technology-agnostic stance while keeping 'whether further guardrails are needed' under review. AI adoption is a PRA supervisory priority for 2026, meaning firms face detailed supervisory dialogue on their AI governance even without new rules. The FCA, meanwhile, has invested in AI sandbox and live-testing initiatives to observe deployments directly."
    ],
    "keyDocument": "BoE/PRA response to the Treasury Select Committee on AI (Apr 2026)",
    "latestMove": "May 2026: BoE/FCA/HM Treasury joint statement on frontier AI and cyber resilience; July 2026: HM Treasury Financial Services AI Adoption Plan; 2026 AI survey (foundation and agentic AI) closed 31 July, results pending",
    "milestones": [
      {
        "date": "2023-02-10",
        "title": "DP5/22 comment period closes",
        "summary": "Responses to the joint BoE/PRA/FCA discussion paper on AI and machine learning were due; 54 responses were received and summarised in FS2/23.",
        "link": "https://www.bankofengland.co.uk/prudential-regulation/publication/2022/october/artificial-intelligence",
        "docType": "Milestone"
      },
      {
        "date": "2024-05-17",
        "title": "SS1/23 model risk management principles take effect",
        "summary": "The PRA's five model-risk principles, including the sub-principle on AI/ML models, become supervisory expectation for banks with internal-model approvals.",
        "link": "https://www.bankofengland.co.uk/prudential-regulation/publication/2023/may/model-risk-management-principles-for-banks-ss",
        "docType": "Milestone"
      },
      {
        "date": "2025-05-02",
        "title": "BoE/FCA AI Consortium launches",
        "summary": "Public-private forum co-chaired by BoE Deputy Governor Sarah Breeden and FCA's David Geale; quarterly meetings on concentration risk, AI edge cases, explainability, contagion, and agentic AI. A report is due in 2026.",
        "link": "https://www.bankofengland.co.uk/research/fintech/artificial-intelligence-consortium",
        "docType": "Milestone"
      },
      {
        "date": "2026-07-31",
        "title": "2026 BoE/FCA AI survey closes to responses",
        "summary": "The fourth biennial survey, extended to foundation models, generative AI and agentic AI, closed; results are expected later in 2026.",
        "link": "https://www.bankofengland.co.uk/prudential-regulation/regulatory-digest/2026/june-2026",
        "docType": "Milestone"
      },
      {
        "date": "2026-08-05",
        "title": "AI Consortium June 2026 minutes published",
        "summary": "Minutes of the 3 June 2026 meeting cover frontier models, safe deployment of agentic tools, model harnesses and execution boundaries, AI incident reporting, and stress scenarios including agentic payments.",
        "link": "https://www.bankofengland.co.uk/minutes/2026/june/ai-consortium-minutes-3-june-2026",
        "docType": "Milestone"
      }
    ],
    "watchNext": [
      "Results of the 2026 BoE/FCA AI survey — the first regulator dataset anywhere on agentic AI in banks",
      "The AI Consortium's 2026 report on concentration risk, AI edge cases in credit and trading, explainability, and market contagion",
      "Whether the FCA delivers the Consumer Duty and SM&CR-for-AI guidance the Treasury Committee asked for by end-2026",
      "FCA AI Live Testing second-cohort evaluation report (Q1 2027) and the FPC's follow-up work on agentic AI in payments and markets",
      "Whether HM Treasury designates major AI and cloud providers as Critical Third Parties"
    ],
    "faq": [
      {
        "q": "Does the UK have an AI law for banks?",
        "a": "No. The UK has explicitly chosen not to create AI-specific rules for financial services. The Bank of England, PRA, and FCA apply existing technology-agnostic frameworks — senior manager accountability, model risk management (SS1/23), operational resilience, and the Consumer Duty — to AI, a position most recently reaffirmed in April 2026."
      },
      {
        "q": "How do UK regulators monitor AI in banks?",
        "a": "Primarily through recurring joint BoE/FCA surveys (2019, 2022, 2024, and a 2026 edition extended to foundation models and agentic AI), supervisory dialogue under the PRA's 2026 priorities, and FCA sandbox/live-testing programs that observe real deployments."
      },
      {
        "q": "How does the UK approach differ from the EU AI Act?",
        "a": "The EU imposes binding, AI-specific obligations with credit scoring classified as high-risk; the UK regulates the same activities through existing outcome-based rules with no AI-specific statute. UK banks operating in the EU must still comply with the AI Act for their EU business."
      },
      {
        "q": "What do UK regulators expect banks to do about frontier AI cyber threats?",
        "a": "The 15 May 2026 joint statement from the Bank of England, FCA and HM Treasury says frontier AI models' cyber capabilities already exceed what a skilled practitioner can achieve, and that under existing operational-resilience rules firms must act now: boards should understand frontier AI risk, vulnerabilities should be triaged and remediated at scale, third-party and open-source supply chains must be managed, and detection and response must handle faster, more disruptive attacks. It creates no new rule but is a supervisory signal on how existing rules apply."
      }
    ],
    "related": [
      "eu-ai-act",
      "fsb",
      "ecb"
    ],
    "lastUpdated": "2026-08-26"
  },
  {
    "slug": "fsb",
    "name": "FSB",
    "fullName": "Financial Stability Board",
    "jurisdiction": "Global (G20)",
    "role": "Global financial-stability standard-setter",
    "binding": "Non-binding standards",
    "appliesTo": "National regulators and, through them, systemically important banks and financial institutions worldwide",
    "aliases": [
      "FSB",
      "Financial Stability Board"
    ],
    "answerFirst": "The Financial Stability Board is the G20 body that coordinates how national regulators respond to AI risk in finance. It does not bind banks directly, but its reports set the agenda supervisors follow. Its current workstream matters: an October 2025 report on monitoring AI adoption and vulnerabilities, and a June 2026 consultation proposing 12 sound practices for responsible AI adoption by financial institutions, with the final report due in October 2026.",
    "overview": [
      "The FSB has tracked AI in finance since a 2017 report on AI and machine learning, but its work accelerated after generative AI: a November 2024 report assessed the financial-stability implications of AI (third-party concentration, correlated models, cyber, and market herding), and an October 2025 report gave authorities concrete indicators for monitoring AI adoption and flagged the sector's reliance on a small number of critical AI suppliers.",
      "The June 2026 consultation, 'Sound Practices for the Responsible Adoption of AI,' is the closest the FSB has come to firm-level expectations: 12 practices covering governance, risk management, and oversight of AI — including agentic AI, whose capacity to act autonomously and at speed the FSB singles out as a risk that can outpace human oversight. National supervisors typically translate FSB sound practices into examination expectations."
    ],
    "keyDocument": "The Financial Stability Implications of Artificial Intelligence (Nov 2024)",
    "latestMove": "31 August 2026: FSB Chair's letter to G20 finance ministers and central bank governors warns that frontier AI models' autonomy and threat capabilities make cyber risk the most immediate financial-stability concern; final AI sound-practices report still expected October 2026",
    "milestones": [
      {
        "date": "2026-07-22",
        "title": "Comment deadline passes on FSB AI sound-practices consultation",
        "summary": "Responses to the June 2026 consultation on Sound Practices for Responsible Adoption of AI were due via the FSB's online form by 22 July 2026; the FSB published 159 responses on 6 August 2026.",
        "link": "https://www.fsb.org/2026/08/public-responses-to-consultation-on-sound-practices-for-responsible-adoption-of-artificial-intelligence-ai/",
        "docType": "Milestone"
      }
    ],
    "watchNext": [
      "Final 'Sound Practices for Responsible Adoption of AI' report, expected October 2026 as a deliverable to the US G20 presidency — likely to become the global reference for bank AI governance",
      "What 'steps within its mandate' the FSB takes on frontier-AI cyber risk after the Chair's 31 August 2026 letter to the G20 — a possible work stream on model release, AI/cloud provider concentration and response-and-recovery expectations",
      "How the FSB resolves industry pushback in the 159 consultation responses (proportionality, overlap with existing model-risk and third-party rules, treatment of agentic AI)",
      "Whether the FSB moves from monitoring to recommending policy action on AI third-party concentration",
      "National supervisors (ECB, PRA, OCC, Federal Reserve) importing the 12 sound practices into examination programs"
    ],
    "faq": [
      {
        "q": "Is FSB AI guidance binding on banks?",
        "a": "No. The FSB sets standards and sound practices for its member jurisdictions; national regulators decide how to implement them. In practice, FSB sound practices strongly shape supervisory expectations at the ECB, Bank of England, and US federal banking agencies."
      },
      {
        "q": "What are the FSB's 12 sound practices for AI?",
        "a": "They are proposals in the FSB's June 2026 consultation on responsible AI adoption, covering governance, risk management, and oversight of AI use by financial institutions — including risks from agentic AI that can act autonomously at speed. The final version is due in October 2026."
      },
      {
        "q": "What does the FSB consider the biggest AI risk to financial stability?",
        "a": "Its 2024 and 2025 reports emphasize concentration: many institutions depending on the same few AI model and infrastructure providers, plus correlated behavior when firms use similar models — alongside AI-enabled cyber threats and gaps in the data regulators need to monitor adoption."
      },
      {
        "q": "Who responded to the FSB's AI sound-practices consultation?",
        "a": "The FSB published 159 responses on 6 August 2026. Respondents included JPMorgan Chase, UBS, Credit Agricole, Mastercard, Visa, the American Bankers Association, the Bank Policy Institute with the Institute of International Bankers, GFMA, UK Finance, the Japanese Bankers Association, and consumer groups such as Better Markets and Finance Watch."
      }
    ],
    "related": [
      "basel-committee",
      "eu-ai-act",
      "occ"
    ],
    "lastUpdated": "2026-09-01"
  },
  {
    "slug": "basel-committee",
    "name": "Basel Committee",
    "fullName": "Basel Committee on Banking Supervision (BCBS)",
    "jurisdiction": "Global (28 jurisdictions)",
    "role": "Global banking standard-setter",
    "binding": "Non-binding standards",
    "appliesTo": "Internationally active banks, via national implementation of Basel standards",
    "aliases": [
      "Basel Committee",
      "BCBS",
      "Basel Committee on Banking Supervision"
    ],
    "answerFirst": "The Basel Committee has not issued AI-specific standards for banks — it monitors AI under its digitalisation-of-finance workstream and addresses the risks through existing prudential channels. Its May 2024 digitalisation report analyzed AI/ML among the technologies reshaping banking, and its 2025–26 work programme keeps AI under watch, including a June 2026 report on ICT risk-management practices and ongoing attention to AI's implications for bank cybersecurity.",
    "overview": [
      "The Committee's posture is deliberate patience: rather than write AI rules that member jurisdictions would implement unevenly, it tracks how AI changes the risk profile of banks — operational resilience, third-party dependence, cyber threat, and strategic risk — and lets existing Basel standards (operational risk, outsourcing principles) carry the load.",
      "Two documents anchor the current position: the May 2024 'Digitalisation of finance' report, which assessed AI/ML alongside APIs, DLT, and cloud, warning about new vulnerabilities and system-wide interconnection; and the June 2026 range-of-practices report on ICT risk management, produced under a work programme that explicitly monitors AI developments and their cybersecurity implications. If the FSB's 2026 sound-practices work hardens into expectations, the Basel Committee is the likely channel for turning them into supervisory standards."
    ],
    "keyDocument": "Digitalisation of finance report (May 2024)",
    "latestMove": "June 2026 ICT risk-management report; AI monitoring continues in the 2025–26 work programme",
    "milestones": [
      {
        "date": "2026-05-20",
        "title": "Committee flags frontier AI models as a cyber-risk accelerant",
        "summary": "At its 19–20 May 2026 meeting the Basel Committee noted that frontier AI models could help banks and supervisors find cyber vulnerabilities, but that their malicious use 'may materially change the speed and scale of cyber incidents'; it committed to keep monitoring AI developments and exchanging supervisory insights.",
        "link": "https://www.bis.org/media-releases/20260520-basel-committee-agrees-publish-report-information-and-communication-technology-risk-0",
        "docType": "Milestone"
      }
    ],
    "watchNext": [
      "Whether FSB sound practices on AI (final report Oct 2026) get translated into Basel supervisory expectations",
      "Treatment of AI third-party concentration under Basel outsourcing and operational-resilience principles",
      "Any move from monitoring to standard-setting as agentic AI enters core banking processes"
    ],
    "faq": [
      {
        "q": "Has the Basel Committee issued AI regulations?",
        "a": "No. The Committee monitors AI under its digitalisation workstream and addresses risks through existing standards on operational risk and resilience. Its most relevant publications are the 2022 AI/ML newsletter, the May 2024 digitalisation-of-finance report, and the June 2026 ICT risk-management report."
      },
      {
        "q": "How does Basel Committee work reach actual banks?",
        "a": "Through national implementation: the Committee's 28 member jurisdictions translate Basel standards and guidance into local regulation. Its AI observations shape how the ECB, PRA, OCC, and other supervisors examine banks even without a dedicated AI standard."
      },
      {
        "q": "Which Basel Committee standards actually bind a bank's AI program today?",
        "a": "None is AI-specific, but three apply directly through national implementation: BCBS 239 (2013) governs the risk data that feeds AI models, the March 2021 Principles for Operational Resilience cover AI-driven ICT and dependency risk, and the December 2025 Principles for the Sound Management of Third-Party Risk cover vendor AI models, cloud hosting, and nth-party concentration."
      }
    ],
    "related": [
      "fsb",
      "ecb",
      "occ"
    ],
    "lastUpdated": "2026-08-26"
  }
];

// Display order everywhere (hub table, ItemList, sitemap): US authorities
// first, then rest of world. Entries above can stay in any physical order —
// new ones not listed here sort last until added.
const DISPLAY_ORDER = [
  "federal-reserve",
  "occ",
  "fdic",
  "ncua",
  "cfpb",
  "sec",
  "cftc",
  "fincen",
  "treasury",
  "ny-dfs",
  "colorado-ai-act",
  "california",
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

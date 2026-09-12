// The build map at /agentic-banking/build: a decision tool for teams building
// AI systems inside a bank. Answers to ten questions become a design brief —
// pattern, architecture, controls, applicable documents, evals, human gates,
// examiner questions — with every line tied to a tracked document.
//
// Vendor-neutral by construction: the pattern taxonomy (augmented call,
// workflow shapes, agent) and the primitives are described generically and
// cited to public engineering documentation; recommendations never name a
// vendor. The twelve static briefs (one per tracker use case) are the
// canonical layer; the wizard refines them. All cited slugs exist in
// DOCUMENTS (the validator checks BUILD_DOC_SLUGS).

import type { UseCase } from "@/lib/regulators";

export const BUILD_UPDATED = "2026-09-12";

export type Affected = "staff" | "customer-indirect" | "customer-direct";
export type Reversibility = "reversible" | "costly" | "irreversible";
export type Stakes = "low" | "material" | "high";
export type Knowledge = "stable" | "live" | "both";
export type Verify = "code" | "judgment" | "hard";
export type Steps = "known" | "partly" | "open";
export type Jurisdiction = "us" | "eu" | "uk" | "multi";
export type Route = "direct" | "cloud" | "undecided";

export type Answers = {
  useCase: UseCase;
  affected: Affected;
  reversibility: Reversibility;
  stakes: Stakes;
  knowledge: Knowledge;
  verify: Verify;
  steps: Steps;
  jurisdiction: Jurisdiction;
  route: Route;
  bank?: string;
};

export type Question = {
  key: keyof Omit<Answers, "useCase" | "bank">;
  label: string;
  question: string;
  options: { value: string; label: string; hint: string }[];
};

export const QUESTIONS: Question[] = [
  {
    key: "affected",
    label: "Who is affected",
    question: "Who does the output reach?",
    options: [
      { value: "staff", label: "Staff only", hint: "An employee reads or uses it; nothing reaches a customer unreviewed" },
      { value: "customer-indirect", label: "Customers, via a person", hint: "A person decides or sends, using the output" },
      { value: "customer-direct", label: "Customers, directly", hint: "The system answers, decides or acts toward a customer" }
    ]
  },
  {
    key: "reversibility",
    label: "Reversibility",
    question: "If it is wrong, can it be undone?",
    options: [
      { value: "reversible", label: "Fully", hint: "A draft, a summary, a suggestion" },
      { value: "costly", label: "With cost", hint: "Rework, an apology, a correction notice" },
      { value: "irreversible", label: "Not really", hint: "Money moved, a decision communicated, a filing made" }
    ]
  },
  {
    key: "stakes",
    label: "Stakes",
    question: "What does a wrong call cost?",
    options: [
      { value: "low", label: "Low", hint: "Time and mild embarrassment" },
      { value: "material", label: "Material", hint: "Customer harm, a loss, a complaint" },
      { value: "high", label: "High", hint: "A credit decision, a regulatory filing, a payment, a legal exposure" }
    ]
  },
  {
    key: "knowledge",
    label: "Knowledge",
    question: "Where does the truth live?",
    options: [
      { value: "stable", label: "Stable documents", hint: "Policies, product terms, regulations, manuals" },
      { value: "live", label: "Live system state", hint: "Balances, cases, orders, limits, today's positions" },
      { value: "both", label: "Both", hint: "Documents to reason with, systems to check against" }
    ]
  },
  {
    key: "verify",
    label: "Verifiability",
    question: "How is a good output recognised?",
    options: [
      { value: "code", label: "By a rule or a test", hint: "A schema, a reconciliation, a known answer" },
      { value: "judgment", label: "By judgment", hint: "A reviewer or a judge model can score it against a rubric" },
      { value: "hard", label: "Hard to tell", hint: "Only time or an expert shows whether it was right" }
    ]
  },
  {
    key: "steps",
    label: "Steps",
    question: "Are the steps known before you start?",
    options: [
      { value: "known", label: "Known", hint: "The same sequence every time" },
      { value: "partly", label: "Partly", hint: "A known frame with branches" },
      { value: "open", label: "Open-ended", hint: "The path depends on what is found along the way" }
    ]
  },
  {
    key: "jurisdiction",
    label: "Jurisdiction",
    question: "Which supervisors are in the room?",
    options: [
      { value: "us", label: "United States", hint: "Federal agencies plus state law" },
      { value: "eu", label: "European Union", hint: "ECB, EBA, national supervisors, the AI Act" },
      { value: "uk", label: "United Kingdom", hint: "PRA and FCA" },
      { value: "multi", label: "More than one", hint: "The strictest regime sets the floor" }
    ]
  },
  {
    key: "route",
    label: "Delivery route",
    question: "How will the model be reached?",
    options: [
      { value: "direct", label: "Provider API", hint: "A direct contract with the model provider" },
      { value: "cloud", label: "Through a cloud platform", hint: "The bank's existing cloud provider hosts the model" },
      { value: "undecided", label: "Undecided", hint: "Both routes are open" }
    ]
  }
];

export type PatternId = "augmented" | "workflow" | "agent";
export type ShapeId = "chaining" | "routing" | "parallelization" | "orchestrator-workers" | "evaluator-optimizer";

export const PATTERNS: Record<PatternId, { name: string; line: string; when: string; predictability: number; autonomy: number }> = {
  augmented: {
    name: "Augmented call",
    line: "One model call with retrieval, tools and a structured output, inside code you control.",
    when: "The task is well defined and the output can be checked. Most bank use cases should start here.",
    predictability: 0.9,
    autonomy: 0.12
  },
  workflow: {
    name: "Workflow",
    line: "Several model calls orchestrated by your code, in a sequence or a graph you designed.",
    when: "Your code lays out the steps, the cost of error is real, and you need to observe every step.",
    predictability: 0.65,
    autonomy: 0.42
  },
  agent: {
    name: "Bounded agent",
    line: "The model plans its own path through a set of tools toward a goal, inside a turn budget and an action envelope.",
    when: "The path cannot be fixed in advance and the stakes allow it. Autonomy is kept in check by limiting tools, turns and what an action may touch.",
    predictability: 0.3,
    autonomy: 0.8
  }
};

export const SHAPES: Record<ShapeId, { name: string; line: string }> = {
  chaining: { name: "Prompt chaining", line: "Each step's output is the next step's input, with a programmatic check between them." },
  routing: { name: "Routing", line: "Classify the input first, then send it to a specialised path: a knowledge answer, a transaction on a live system, or a person." },
  parallelization: { name: "Parallelization", line: "Independent sub-tasks run at the same time, or several attempts run and are compared, then results are aggregated in code." },
  "orchestrator-workers": { name: "Orchestrator and workers", line: "One model decomposes the task and hands scoped sub-tasks to workers; the orchestrator resolves gaps and conflicts when results return." },
  "evaluator-optimizer": { name: "Evaluator and optimizer", line: "One model produces, another checks against explicit criteria, and the loop repeats until the check passes or a person is called." }
};

export type Tier = 1 | 2 | 3;

export const TIERS: Record<Tier, { name: string; line: string; autonomy: number; gates: string[] }> = {
  1: {
    name: "Tier 1: a person decides",
    line: "High stakes, hard to undo, customer-facing. The model prepares, drafts and checks; a person decides and acts, and the record shows it.",
    autonomy: 1,
    gates: [
      "A named accountable executive signs off the use case before build, and the inventory records the tier.",
      "A person reviews every output before it reaches a customer or a system of record; the review is logged with the reviewer's identity.",
      "Independent validation before launch and outcomes analysis after it, on the model-risk schedule for a material model.",
      "Adverse outcomes to a customer carry the specific reasons the law requires, produced from the decision record, not reconstructed afterwards.",
      "A kill switch and a rollback path, tested before launch."
    ]
  },
  2: {
    name: "Tier 2: act with approval",
    line: "Material but recoverable. The model may prepare and, within limits, act, with a person approving anything that leaves the bank or touches a customer.",
    autonomy: 2,
    gates: [
      "Per-action approval by a competent reviewer for anything customer-facing or irreversible; sampled review for the rest.",
      "Validation proportionate to materiality, with monitoring for drift on inputs and outputs.",
      "An escalation route to a person that the customer can reach in one step.",
      "Monthly review of the evals and the exception log by the accountable owner."
    ]
  },
  3: {
    name: "Tier 3: act within an envelope",
    line: "Low stakes, reversible, internal. The model may act within a defined envelope, with sampling, monitoring and a kill switch instead of per-action review.",
    autonomy: 3,
    gates: [
      "An action envelope: which tools, which systems, what value, what volume, what the model may never do.",
      "Sampled human review of outputs and a weekly look at the exception log.",
      "Turn and cost budgets, logged, with an automatic stop when exceeded.",
      "A kill switch that any owner can pull."
    ]
  }
};

export type DocWhy = { slug: string; why: string };

// Documents that apply because of the use case, whatever else is answered.
const USE_CASE_DOCS: Record<UseCase, DocWhy[]> = {
  "credit-underwriting": [
    { slug: "cfpb-ecoa-regulation-b-adverse-action", why: "Specific principal reasons for any adverse credit action, whatever the model." },
    { slug: "cfpb-fcra-adverse-action-key-factors", why: "Key factors behind a credit score must be disclosed." },
    { slug: "fed-sr-26-2", why: "A credit model is a model: validation and monitoring scaled to materiality." },
    { slug: "eu-ai-act-regulation-2024-1689", why: "Credit scoring of natural persons is high-risk in the EU (Annex III 5(b))." },
    { slug: "eba-gl-2020-06-loan-origination-monitoring", why: "EU rulebook for automated creditworthiness models; staff must be able to override." }
  ],
  "fair-lending": [
    { slug: "cfpb-regulation-b-final-rule-2026", why: "The current US position on disparate impact under Regulation B." },
    { slug: "cfpb-ecoa-regulation-b-adverse-action", why: "Adverse-action reasons are also the audit trail for discrimination testing." },
    { slug: "cfpb-joint-statement-automated-systems-2023", why: "Four agencies on automated systems and discrimination law." },
    { slug: "eu-ai-act-regulation-2024-1689", why: "Bias examination is a data-governance duty for high-risk systems (Article 10)." }
  ],
  "aml-kyc": [
    { slug: "fincen-joint-statement-innovation-2018", why: "Agencies encourage innovative approaches, including AI, in BSA/AML programmes." },
    { slug: "fincen-aml-cft-program-nprm-2026", why: "'Effective use of artificial intelligence' counted in an institution's favour, if finalised." },
    { slug: "fed-sr-26-2", why: "Replaces the 2021 BSA/AML model-risk statement; monitoring models are models." },
    { slug: "fincen-alert-2024-deepfake-media", why: "Deepfake documents at onboarding are the threat KYC models now face." }
  ],
  fraud: [
    { slug: "fincen-alert-2024-deepfake-media", why: "The threat picture: synthetic documents, voices and video at onboarding." },
    { slug: "eu-ai-act-regulation-2024-1689", why: "Fraud detection is carved out of the high-risk credit category." },
    { slug: "fed-sr-26-2", why: "Fraud models validated in proportion to materiality." },
    { slug: "cfpb-ecoa-regulation-b-adverse-action", why: "A fraud-driven decline of a credit application is still an adverse action." },
    { slug: "ny-dfs-industry-letter-2024-10-16-ai-cyber-risks", why: "AI-enabled social engineering must appear in risk assessments and MFA design." }
  ],
  "customer-chatbots": [
    { slug: "cfpb-chatbots-in-consumer-finance-2023", why: "Inaccurate answers and blocked access to a person can violate consumer law." },
    { slug: "eu-ai-act-regulation-2024-1689", why: "Article 50: people must be told they are talking to an AI system." },
    { slug: "nist-ai-600-1", why: "Confabulation named as a generative-AI risk, with suggested actions." },
    { slug: "ny-dfs-industry-letter-2024-05-30-vce-customer-service", why: "New York's expectations for customer service, including a route to a human." }
  ],
  "model-risk": [
    { slug: "fed-sr-26-2", why: "The 2026 US framework: narrower model definition, materiality, generative and agentic AI carved out." },
    { slug: "occ-bulletin-2026-13", why: "Same text for national banks; the promised interagency RFI on AI." },
    { slug: "pra-ss1-23-model-risk-management", why: "UK: AI and machine learning stay inside model risk management." },
    { slug: "ecb-guide-to-internal-models-2025-machine-learning", why: "EU capital models: explainability and justified complexity." }
  ],
  "generative-agentic-ai": [
    { slug: "fed-sr-26-2", why: "Generative and agentic AI are outside model-risk scope; broader governance applies." },
    { slug: "occ-semiannual-risk-perspective-spring-2026", why: "Supervisors observed 'measured' agentic adoption: guardrails and human-in-the-loop accountability." },
    { slug: "fsb-ai-sound-practices-consultation-2026", why: "Twelve sound practices, with specific attention to generative and agentic AI." },
    { slug: "nist-caisi-rfi-ai-agent-security-2026", why: "The security questions being asked of AI agents." },
    { slug: "nist-ai-600-1", why: "Twelve generative-AI risks and 200-plus actions." }
  ],
  "third-party-vendors": [
    { slug: "fed-sr-23-4", why: "Due diligence, contracts, monitoring and exit for vendor AI and foundation-model access." },
    { slug: "bcbs-third-party-risk-principles-2025", why: "Nth-party chains and concentration, where cloud-hosted models are assessed." },
    { slug: "fsb-monitoring-ai-adoption-vulnerabilities-2025", why: "Provider concentration named as a vulnerability to monitor." },
    { slug: "fed-sr-26-2", why: "Purchased models are still the bank's to understand and validate." }
  ],
  cybersecurity: [
    { slug: "ecb-letter-ai-enabled-cybersecurity-threats-2026", why: "AI models that find and exploit vulnerabilities; action plans due Oct 31, 2026." },
    { slug: "ny-dfs-industry-letter-2026-05-21-frontier-ai-models", why: "Human review of AI-generated code before deployment; shorter patch cycles." },
    { slug: "ny-dfs-23-nycrr-part-500", why: "The New York cybersecurity regulation AI guidance hangs on." },
    { slug: "esas-jc-2026-25-frontier-ai-statement", why: "EU supervisors on ICT risk from frontier models." },
    { slug: "treasury-ai-cybersecurity-risks-report-2024", why: "Treasury's map of AI-specific cyber risk for the sector." }
  ],
  "data-privacy": [
    { slug: "bcbs-239", why: "Risk data must be owned, traceable, complete and current; training data is risk data." },
    { slug: "eu-ai-act-regulation-2024-1689", why: "Article 10: documented data governance for high-risk systems." },
    { slug: "eu-gdpr-article-22-automated-decision-making", why: "Rights around solely automated decisions with legal or similar effect." },
    { slug: "ca-cppa-admt-risk-cyber-regulations-2025", why: "California: notice, opt-out and risk assessments for automated decision-making technology." }
  ],
  "trading-markets": [
    { slug: "sec-exam-priorities-fy2026", why: "Examiners test whether AI claims are accurate and AI use is supervised." },
    { slug: "cftc-staff-advisory-24-17", why: "CFTC staff on AI use by registrants: existing rules apply." },
    { slug: "sec-delphia-global-predictions-ai-washing-2024", why: "The first 'AI washing' settlements: claims must match capability." },
    { slug: "fed-sr-26-2", why: "Trading models validated as models, scaled to materiality." }
  ],
  "governance-general": [
    { slug: "fed-sr-26-2", why: "Board and senior-management governance of models; the generative and agentic carve-out." },
    { slug: "nist-ai-100-1", why: "Govern, Map, Measure, Manage: the voluntary frame most US banks cite." },
    { slug: "treasury-fs-ai-rmf-and-ai-lexicon-2026", why: "The NIST framework adapted to financial services." },
    { slug: "fsb-ai-sound-practices-consultation-2026", why: "Twelve sound practices from strategy to third-party risk." },
    { slug: "ecb-machado-technology-neutral-governance-speech-2026", why: "Accountability, senior oversight, effective challenge." }
  ]
};

const JURISDICTION_DOCS: Record<Jurisdiction, DocWhy[]> = {
  us: [
    { slug: "fed-sr-26-2", why: "US model risk management as revised in April 2026." },
    { slug: "fed-sr-23-4", why: "US third-party risk management, including the model provider." },
    { slug: "co-sb26-189", why: "Colorado: notice, explanation and human review for consequential automated decisions from Jan 1, 2027." }
  ],
  eu: [
    { slug: "eu-ai-act-regulation-2024-1689", why: "The EU's horizontal AI law; high-risk duties for credit scoring from Dec 2, 2027." },
    { slug: "eu-gdpr-article-22-automated-decision-making", why: "Solely automated decisions with legal effect need a lawful basis and safeguards." },
    { slug: "ecb-machado-technology-neutral-governance-speech-2026", why: "What the ECB's supervisors expect of AI governance." },
    { slug: "eba-ai-act-factsheet-2025", why: "How the EBA maps the AI Act onto banking rules." }
  ],
  uk: [
    { slug: "pra-ss1-23-model-risk-management", why: "UK model risk management, with AI and machine learning explicitly inside." },
    { slug: "fca-ai-update-2024", why: "The FCA's position: existing rules, including the Consumer Duty, apply." },
    { slug: "boe-pra-safe-ai-innovation-plan-letter-2026", why: "The PRA's plan for safe AI innovation." }
  ],
  multi: [
    { slug: "fed-sr-26-2", why: "US model risk management." },
    { slug: "eu-ai-act-regulation-2024-1689", why: "The EU AI Act sets the strictest documentation floor." },
    { slug: "pra-ss1-23-model-risk-management", why: "UK: the widest model perimeter." },
    { slug: "fsb-ai-sound-practices-consultation-2026", why: "The cross-border baseline the FSB is converging on." }
  ]
};

const ROUTE_DOCS: Record<Route, DocWhy[]> = {
  direct: [
    { slug: "fed-sr-23-4", why: "The model provider is a third party: due diligence, contract terms, monitoring, exit." },
    { slug: "fsb-monitoring-ai-adoption-vulnerabilities-2025", why: "Concentration on a small number of model suppliers." }
  ],
  cloud: [
    { slug: "fed-sr-23-4", why: "Two third parties in the chain: the cloud platform and the model behind it." },
    { slug: "bcbs-third-party-risk-principles-2025", why: "Nth-party supply chains and concentration on cloud providers." },
    { slug: "bcbs-ict-risk-management-range-of-practices-2026", why: "How supervisors look at ICT and cloud dependencies." }
  ],
  undecided: [
    { slug: "fed-sr-23-4", why: "Whichever route: the provider relationship is examinable from day one." },
    { slug: "bcbs-third-party-risk-principles-2025", why: "Concentration and exit planning apply to both routes." }
  ]
};

const CUSTOMER_DOCS: DocWhy[] = [
  { slug: "cfpb-chatbots-in-consumer-finance-2023", why: "Customer-facing AI must not block access to a person or give wrong answers about rights." },
  { slug: "eu-ai-act-regulation-2024-1689", why: "Transparency: people must know they are dealing with AI (Article 50)." }
];

export const LAYER_IDS = ["governance", "identity", "actions", "data", "models", "runtime", "observability", "oversight"] as const;
export type LayerId = (typeof LAYER_IDS)[number];

export type Brief = {
  answers: Answers;
  tier: Tier;
  pattern: PatternId;
  shape?: ShapeId;
  shapes: ShapeId[];
  autonomy: number;
  involvement: string;
  knowledge: string[];
  layers: Record<LayerId, number>;
  docs: DocWhy[];
  evals: string[];
  gates: string[];
  examiner: string[];
  board: string[];
};

const score = (a: Answers) =>
  ({ low: 0, material: 1, high: 2 })[a.stakes] + ({ reversible: 0, costly: 1, irreversible: 2 })[a.reversibility] + ({ staff: 0, "customer-indirect": 1, "customer-direct": 2 })[a.affected];

export function decide(a: Answers): Brief {
  const s = score(a);
  const tier: Tier = s >= 5 ? 1 : s >= 2 ? 2 : 3;

  let pattern: PatternId;
  if (a.steps === "open") pattern = tier === 3 ? "agent" : "workflow";
  else if (a.steps === "known" && a.verify === "code") pattern = "augmented";
  else pattern = "workflow";

  // Primary shape from the work itself; an evaluator pass is added whenever
  // the output needs judgment to verify.
  const shapes: ShapeId[] = [];
  if (pattern === "workflow") {
    if (a.steps === "open") shapes.push("orchestrator-workers");
    else if (["customer-chatbots", "aml-kyc", "fraud", "cybersecurity"].includes(a.useCase)) shapes.push("routing");
    else if (["credit-underwriting", "third-party-vendors", "data-privacy"].includes(a.useCase)) shapes.push("parallelization");
    else shapes.push("chaining");
    if (a.verify !== "code") shapes.push("evaluator-optimizer");
  }
  const shape = shapes[0];

  const autonomy = Math.min(TIERS[tier].autonomy, pattern === "augmented" ? 1 : 3);

  const involvement =
    tier === 1
      ? "The model prepares, drafts and checks. A person decides and acts, and the record shows who."
      : tier === 2
        ? "The model prepares and may act within limits; a person approves anything that reaches a customer or cannot be undone."
        : "The model may act within a defined envelope; people sample, monitor and can stop it.";

  const knowledge: string[] = [];
  if (a.knowledge !== "live") knowledge.push("Retrieval over the governed document set, with a citation on every answer and a refusal when nothing relevant is found.");
  if (a.knowledge !== "stable") knowledge.push("Tool calls to the system of record for anything live. Never retrieval for a balance, a case status or a limit.");
  if (a.knowledge === "both") knowledge.push("Documents to reason with, systems to check against: the workflow decides which question goes where before the model answers.");

  const layers: Record<LayerId, number> = { governance: 1, identity: 0.55, actions: 0.4, data: 0.7, models: 0.55, runtime: 0.4, observability: 0.7, oversight: 0.6 };
  if (a.knowledge !== "stable") { layers.identity = 1; layers.actions = 0.9; }
  if (pattern === "agent") { layers.runtime = 1; layers.actions = 1; layers.observability = 1; }
  if (pattern === "workflow") layers.runtime = 0.8;
  if (a.affected === "customer-direct") layers.oversight = 1;
  if (tier === 1) { layers.oversight = 1; layers.observability = 1; }
  if (a.route !== "direct") layers.models = 0.9;
  if (a.route === "cloud") layers.models = 1;
  if (a.knowledge !== "live") layers.data = 1;

  const seen = new Set<string>();
  const docs: DocWhy[] = [];
  const push = (d: DocWhy) => { if (!seen.has(d.slug)) { seen.add(d.slug); docs.push(d); } };
  USE_CASE_DOCS[a.useCase].forEach(push);
  if (a.affected === "customer-direct") CUSTOMER_DOCS.forEach(push);
  JURISDICTION_DOCS[a.jurisdiction].forEach(push);
  ROUTE_DOCS[a.route].forEach(push);
  if (tier !== 3 && a.jurisdiction !== "eu" && a.jurisdiction !== "uk") push({ slug: "occ-bulletin-2026-13", why: "For a national bank, the OCC's copy of the 2026 model-risk guidance." });
  if (pattern === "agent" || a.useCase === "generative-agentic-ai") {
    push({ slug: "occ-semiannual-risk-perspective-spring-2026", why: "Guardrails and human-in-the-loop accountability as the observed standard for agents." });
    push({ slug: "nist-caisi-rfi-ai-agent-security-2026", why: "Agent security questions supervisors are starting to ask." });
  }
  push({ slug: "nist-ai-100-1", why: "The voluntary Govern, Map, Measure, Manage frame for everything model-risk guidance leaves out." });

  const evals: string[] = [];
  evals.push(`A golden dataset of at least ${tier === 1 ? "300" : tier === 2 ? "150" : "50"} real cases with expected outputs, including adversarial inputs: wrong documents, unusual formats, prompts that try to change the task.`);
  if (a.verify === "code") evals.push("Code-based checks on every output: schema conformance, required fields, reconciliations against the system of record. Threshold: 99% or better before launch, every run in production.");
  if (a.verify === "judgment") evals.push("A judge model scoring against a written rubric (accuracy, completeness, tone, citation present), calibrated against a human-scored sample every month. Threshold set from the human sample, not guessed.");
  if (a.verify === "hard") evals.push("Human review as the primary eval: an expert panel scores a stratified sample, and the score is the gate. Model judges assist triage; they do not decide.");
  if (a.knowledge !== "live") evals.push("Citation checks: every factual claim resolves to a passage in the governed set; unsupported claims below 2% of answers.");
  if (a.affected !== "staff") evals.push("Escalation evals: the cases that must reach a person do, on a held-out set, with precision and recall both reported.");
  if (pattern !== "augmented") evals.push("Trace evals per step, not only end to end: which step fails, how often, at what cost, so a prompt or model change can be judged step by step.");
  evals.push("The same suite reruns on every prompt change, model version change and retrieval change; a regression blocks the release. That is what ongoing monitoring and outcomes analysis mean in model-risk terms.");

  const gates = [...TIERS[tier].gates];
  if (a.affected === "customer-direct") gates.push("The customer is told they are dealing with an AI system and can reach a person in one step.");
  if (["credit-underwriting", "fair-lending"].includes(a.useCase)) gates.push("Adverse-action explainability is tested as a launch gate: if the system cannot produce specific principal reasons, it does not decide.");

  const examiner: string[] = [
    "Where is this system in your inventory, what tier did you assign, and who signed it off?",
    "What counts as a model here, and what does your validation cover for the parts that are not?",
    "Show me the data lineage behind the retrieval set and the training or tuning data.",
    "What can the system do without a person, and where is that written down?",
    "How do you know it is still working: which evals run, how often, and what happened the last time one failed?",
    "What did you do about the vendor: due diligence, contract, exit plan, concentration?",
    "Walk me through one wrong output from production and what the customer, if any, saw.",
    "Who can switch it off, and has that been tested?"
  ];
  if (["credit-underwriting", "fair-lending"].includes(a.useCase)) examiner.push("Produce the adverse-action reasons for this declined applicant from the decision record.");
  if (a.affected === "customer-direct") examiner.push("Show me how a customer reaches a person, and how long it took the last ten who tried.");

  const board: string[] = [
    `What it does: ${whatLine(a.useCase)}; ${involvement.toLowerCase()}`,
    `Pattern: ${PATTERNS[pattern].name.toLowerCase()}${shapes.length ? ` (${shapes.map((x) => SHAPES[x].name.toLowerCase()).join(", ")})` : ""}; ${TIERS[tier].name.toLowerCase()}.`,
    `Rules it answers to: ${docs.slice(0, 4).map((d) => d.slug).length} documents across ${a.jurisdiction === "multi" ? "several jurisdictions" : a.jurisdiction.toUpperCase()}, each linked in the brief.`,
    "How we know it works: a golden dataset, automated checks on every release, and human review at the level the tier demands.",
    "What could go wrong and who answers: the accountable owner, the kill switch, the escalation route."
  ];

  return { answers: a, tier, pattern, shape, shapes, autonomy, involvement, knowledge, layers, docs, evals, gates, examiner, board };
}

function whatLine(u: UseCase): string {
  return USE_CASE_BRIEFS[u].what;
}

export type Decomposition = { step: string; owner: "model" | "system" | "human"; note: string };

export type UseCaseBrief = {
  what: string;
  defaults: Omit<Answers, "useCase" | "bank">;
  intro: string;
  decomposition: Decomposition[];
  pitfalls: string[];
};

export const USE_CASE_BRIEFS: Record<UseCase, UseCaseBrief> = {
  "credit-underwriting": {
    what: "assembles and checks a credit application, and explains a decision",
    defaults: { affected: "customer-direct", reversibility: "irreversible", stakes: "high", knowledge: "both", verify: "judgment", steps: "known", jurisdiction: "us", route: "cloud" },
    intro:
      "Credit is the use case with the clearest rulebook and the least room for autonomy. The scoring model itself is a model in the model-risk sense and stays under validation; what the newer patterns add is everything around it: assembling the file from documents and systems, checking it for completeness, drafting the decision memo and producing the reasons a declined applicant is owed. The design that survives an exam keeps the decision with a person or a validated model, and uses the language model to prepare and explain, never to decide on its own.",
    decomposition: [
      { step: "Collect and classify documents", owner: "model", note: "Extraction against a schema, with a confidence per field." },
      { step: "Verify income, identity and existing exposure", owner: "system", note: "Tool calls to the core, the bureau and the KYC store; never retrieval." },
      { step: "Score and price", owner: "system", note: "The validated scoring model, outside the language model entirely." },
      { step: "Draft the decision memo", owner: "model", note: "From the file and the score; every number traceable to its source." },
      { step: "Decide", owner: "human", note: "The underwriter, with the memo; the record shows the reviewer." },
      { step: "Adverse-action notice", owner: "system", note: "Reasons generated from the decision record and checked against the required list." }
    ],
    pitfalls: [
      "Letting the language model influence the score, which makes the scoring model unvalidatable.",
      "Reconstructing adverse-action reasons after the fact instead of from the decision record.",
      "Forgetting that a fraud-driven decline is still an adverse action."
    ]
  },
  "fair-lending": {
    what: "tests models and decisions for disparate treatment and impact, and documents the results",
    defaults: { affected: "customer-indirect", reversibility: "costly", stakes: "high", knowledge: "both", verify: "judgment", steps: "known", jurisdiction: "us", route: "direct" },
    intro:
      "Fair-lending work is analytical and evidentiary: the outputs are tests, comparisons and documentation that will be read by an examiner or a court. That makes it a workflow with an evaluator, not an agent. Models help by drafting the analysis plan, explaining a model's features in plain language and assembling the file; the statistical tests run in code, and a person owns the conclusion.",
    decomposition: [
      { step: "Define protected classes and the comparison design", owner: "human", note: "Counsel and compliance set the frame." },
      { step: "Run disparate-impact tests", owner: "system", note: "Deterministic statistics on the decision data." },
      { step: "Explain features and interactions", owner: "model", note: "Plain-language explanations of what the tests found, cited to the outputs." },
      { step: "Draft the memo", owner: "model", note: "From the results; nothing asserted beyond them." },
      { step: "Conclude and remediate", owner: "human", note: "Signed, with the actions taken." }
    ],
    pitfalls: [
      "Using a model to run or interpret the statistics without the code path to reproduce them.",
      "Drift in the bias tests after a model change with no rerun.",
      "Treating an explainability tool's output as the legal explanation."
    ]
  },
  "aml-kyc": {
    what: "triages alerts, assembles cases and drafts investigations for AML and KYC teams",
    defaults: { affected: "staff", reversibility: "costly", stakes: "material", knowledge: "both", verify: "judgment", steps: "partly", jurisdiction: "us", route: "cloud" },
    intro:
      "AML is where supervisors have been most encouraging and where the volume argument is strongest: thousands of alerts, most of them false positives, each needing a file. The winning pattern is routing plus evaluator: classify the alert, gather the evidence from the case system and the transaction store in parallel, draft the narrative, then check it against the evidence before an investigator sees it. The investigator still disposes of the alert and signs the report; the model removes hours of assembly.",
    decomposition: [
      { step: "Classify the alert", owner: "model", note: "Routing to a typology-specific path." },
      { step: "Gather evidence", owner: "system", note: "Tool calls to the case system, transactions and KYC store, in parallel." },
      { step: "Draft the investigation narrative", owner: "model", note: "Every statement cited to an evidence item." },
      { step: "Check the draft against the evidence", owner: "model", note: "An evaluator pass with explicit criteria; failures go back or to a person." },
      { step: "Dispose and file", owner: "human", note: "The investigator decides; the SAR is theirs." }
    ],
    pitfalls: [
      "Letting the model close alerts on its own; the 2026 proposal rewards effective AI use, not unsupervised disposal.",
      "Retrieval over stale customer data instead of a live tool call.",
      "No record of what the model read, which makes the file indefensible."
    ]
  },
  fraud: {
    what: "scores and triages suspected fraud, and helps investigators and customers respond",
    defaults: { affected: "customer-direct", reversibility: "costly", stakes: "material", knowledge: "live", verify: "code", steps: "known", jurisdiction: "us", route: "cloud" },
    intro:
      "Fraud is the most permissive use case in regulatory terms and the most time-critical operationally. Detection itself is usually a validated model on live data; language models earn their place in triage, investigator assistance and customer contact, where speed and clarity matter and where the threat itself is increasingly generated by AI. The rule to design around: a block or a decline that touches credit is an adverse action, and a customer contact must not be mistakable for a scam.",
    decomposition: [
      { step: "Detect", owner: "system", note: "The validated scoring model on live transaction data." },
      { step: "Triage and enrich", owner: "model", note: "Summarise the case, pull related activity via tools, propose a disposition." },
      { step: "Act on the account", owner: "system", note: "Holds and blocks by rule, within limits; logged." },
      { step: "Contact the customer", owner: "human", note: "Or a verified channel with a scripted, clearly identified AI assistant." },
      { step: "Investigate and report", owner: "human", note: "With the model's file, and the SAR where required." }
    ],
    pitfalls: [
      "A fraud decline on a credit product with no adverse-action reasons.",
      "Customer outreach that trains customers to trust unverified AI voices.",
      "Training data assembled outside the bank's data governance."
    ]
  },
  "customer-chatbots": {
    what: "answers customers' questions and completes simple tasks in a chat or voice channel",
    defaults: { affected: "customer-direct", reversibility: "costly", stakes: "material", knowledge: "both", verify: "judgment", steps: "partly", jurisdiction: "us", route: "cloud" },
    intro:
      "The customer-facing assistant is the pattern supervisors have looked at hardest, and their findings are specific: wrong answers about rights and fees, customers unable to reach a person, and systems that hide what they are. The design is routing: classify the intent, answer knowledge questions from the governed document set with citations, answer account questions through tools to the live system, hand transactions above a threshold to a person, and make the route to a human one step away at all times.",
    decomposition: [
      { step: "Identify the customer and the intent", owner: "system", note: "Authentication in the channel; intent classification with a confidence." },
      { step: "Answer a knowledge question", owner: "model", note: "Retrieval over product terms and policies, with the source shown." },
      { step: "Answer an account question", owner: "system", note: "A tool call to the system of record; the model formats, never invents." },
      { step: "Execute a low-value task", owner: "system", note: "Within an envelope, by rule, confirmed with the customer." },
      { step: "Escalate", owner: "human", note: "Complaints, disputes, hardship and anything the classifier is unsure about." }
    ],
    pitfalls: [
      "Retrieval used for live state, producing confident wrong balances.",
      "No disclosure that the customer is talking to an AI system.",
      "Escalation buried behind repeated attempts to keep the customer in the bot."
    ]
  },
  "model-risk": {
    what: "documents, validates and monitors models, and drafts the artefacts examiners read",
    defaults: { affected: "staff", reversibility: "reversible", stakes: "material", knowledge: "stable", verify: "judgment", steps: "known", jurisdiction: "us", route: "direct" },
    intro:
      "Model risk teams are a natural early adopter because their output is documents: development records, validation reports, monitoring summaries and the inventory itself. A chained workflow that drafts each artefact from the underlying evidence and checks it against the standard the team already applies removes weeks of writing. The line to hold is that the language model drafts and checks; the validator's judgment and signature remain the validator's.",
    decomposition: [
      { step: "Assemble the evidence", owner: "system", note: "Model code, data lineage, test results from the model repository." },
      { step: "Draft the validation report sections", owner: "model", note: "Conceptual soundness, monitoring, outcomes analysis, each cited." },
      { step: "Check against the validation standard", owner: "model", note: "An evaluator pass against the bank's own checklist." },
      { step: "Validate and sign", owner: "human", note: "Effective challenge is a person's job." },
      { step: "Update the inventory", owner: "system", note: "Structured fields written by code from the signed report." }
    ],
    pitfalls: [
      "Drafts that read as validation without the tests having run.",
      "Using the tool on generative systems and calling the result model validation; the 2026 guidance says it is not.",
      "No version control on the prompts that produce examinable documents."
    ]
  },
  "generative-agentic-ai": {
    what: "runs a bounded agent on internal tasks: research, drafting, operations exceptions",
    defaults: { affected: "staff", reversibility: "reversible", stakes: "low", knowledge: "both", verify: "judgment", steps: "open", jurisdiction: "us", route: "cloud" },
    intro:
      "An agent is the right pattern only when the path cannot be fixed in advance and the stakes allow the model to choose it. Inside a bank that means internal, reversible work: research across documents and systems, drafting with tool access, working an exception queue. The design that supervisors have described approvingly is a bounded one: a small, named tool set, a turn and cost budget, an action envelope, full traces, and a person sampling the output. The control plane and lifecycle on this site were written for exactly this case.",
    decomposition: [
      { step: "Set the goal and the envelope", owner: "human", note: "What done looks like, which tools, what the agent may never do." },
      { step: "Plan and act", owner: "model", note: "Tool calls within the envelope; every call traced." },
      { step: "Enforce the envelope", owner: "system", note: "The action gateway checks identity, entitlements, value and volume before any call executes." },
      { step: "Evaluate the result", owner: "model", note: "An evaluator pass against the goal; failures stop or escalate." },
      { step: "Sample and approve", owner: "human", note: "Sampled review; per-action approval for anything that leaves the bank." }
    ],
    pitfalls: [
      "Unbounded autonomy: no turn budget, no envelope, no kill switch.",
      "Granting the agent the operator's own identity instead of its own.",
      "Assuming model-risk validation covers it; in the US it does not, so governance must."
    ]
  },
  "third-party-vendors": {
    what: "buys or configures a vendor's AI system and runs it under the bank's controls",
    defaults: { affected: "customer-indirect", reversibility: "costly", stakes: "material", knowledge: "both", verify: "judgment", steps: "known", jurisdiction: "us", route: "cloud" },
    intro:
      "Most bank AI is bought, not built, and the buyer's job is the controls around the purchase: due diligence on the model and its data, contract terms on change notice and exit, ongoing monitoring, and validation of a system the bank did not write. The patterns matter less than the wrapper: the bank owns the evals, the logs and the escalation route regardless of who built the model, and the same third-party guidance applies whether the model comes from a provider directly or through a cloud platform.",
    decomposition: [
      { step: "Due diligence", owner: "human", note: "Model documentation, data provenance, security, subcontractors, concentration." },
      { step: "Contract", owner: "human", note: "Change notification, audit rights, data use, exit and portability." },
      { step: "Wrap", owner: "system", note: "The bank's own identity, action gateway, logging and evals around the vendor system." },
      { step: "Validate", owner: "human", note: "Outcomes analysis on the bank's data, as for any model the bank did not build." },
      { step: "Monitor", owner: "model", note: "Drift and quality summaries drafted from the logs for the owner." }
    ],
    pitfalls: [
      "Trusting the vendor's evals instead of running the bank's own.",
      "No exit plan from a model the business now depends on.",
      "Nth-party blind spots: the vendor's own model supplier and cloud."
    ]
  },
  cybersecurity: {
    what: "supports detection, triage and response in the security operations centre",
    defaults: { affected: "staff", reversibility: "costly", stakes: "material", knowledge: "live", verify: "code", steps: "partly", jurisdiction: "us", route: "cloud" },
    intro:
      "Security is the one area where regulators are urging speed: the ECB, New York's DFS and the OCC have all said AI-enabled attackers are faster, and expect AI-enabled defence in return. The pattern is routing and parallelization on live telemetry: enrich an alert from many sources at once, classify, propose a response, and let a person approve any containment action that could disrupt the business. AI-generated code and configuration go through human review before deployment, which DFS has said in so many words.",
    decomposition: [
      { step: "Enrich the alert", owner: "system", note: "Parallel tool calls to logs, identity, endpoint and threat intelligence." },
      { step: "Classify and summarise", owner: "model", note: "Severity, likely technique, affected assets, with sources." },
      { step: "Propose containment", owner: "model", note: "A ranked set of actions with expected impact." },
      { step: "Approve and execute", owner: "human", note: "Containment that could disrupt service needs a person; low-impact actions by rule." },
      { step: "Draft the incident record", owner: "model", note: "From the trace; reviewed before it becomes the record." }
    ],
    pitfalls: [
      "Automated containment with no envelope, taking down a payment system.",
      "AI-generated detections or patches deployed without review.",
      "Telemetry fed to a model outside the bank's data boundary."
    ]
  },
  "data-privacy": {
    what: "classifies, governs and answers questions about personal and risk data",
    defaults: { affected: "staff", reversibility: "costly", stakes: "material", knowledge: "both", verify: "code", steps: "known", jurisdiction: "multi", route: "direct" },
    intro:
      "Data work is where the older standards bite hardest on the newest systems: a training set, a feature store and a retrieval corpus are risk data under BCBS 239, and personal data under privacy law. The useful patterns are chained and code-checked: classify documents and fields against a schema, propose lineage and ownership records, draft data-protection assessments and handle access requests, with every output validated by rules and a person accountable for the register.",
    decomposition: [
      { step: "Discover and classify", owner: "model", note: "Data types and sensitivity against the bank's schema, with a confidence." },
      { step: "Validate classifications", owner: "system", note: "Rules and sampling; low-confidence items to a person." },
      { step: "Record lineage and ownership", owner: "system", note: "Structured writes to the catalogue from validated results." },
      { step: "Draft assessments and responses", owner: "model", note: "Impact assessments, access-request replies, from the register." },
      { step: "Own the register", owner: "human", note: "The data owner signs; the privacy officer reviews assessments." }
    ],
    pitfalls: [
      "AI datasets assembled outside the governed perimeter.",
      "Lineage the model asserts but the catalogue cannot reproduce.",
      "Automated responses to data-subject requests without review."
    ]
  },
  "trading-markets": {
    what: "supports research, surveillance and client communication in markets businesses",
    defaults: { affected: "customer-indirect", reversibility: "costly", stakes: "high", knowledge: "both", verify: "judgment", steps: "known", jurisdiction: "us", route: "direct" },
    intro:
      "In markets the risks are disclosure and supervision: claims about AI must match what the systems do, communications must be supervised as communications, and anything that touches order flow is a model under validation. The safe patterns are augmented calls and chained workflows for research synthesis, surveillance triage and draft communications, with a person approving anything that goes to a client and nothing autonomous near execution.",
    decomposition: [
      { step: "Synthesise research", owner: "model", note: "From licensed sources and internal notes, with citations." },
      { step: "Triage surveillance alerts", owner: "model", note: "Summaries and proposed dispositions; the compliance officer decides." },
      { step: "Draft client communications", owner: "model", note: "Reviewed and supervised like any other communication." },
      { step: "Execute", owner: "system", note: "Validated algorithms with their own controls; no language model in the path." },
      { step: "Describe AI use to clients and regulators", owner: "human", note: "Accurately; the AI-washing cases were about the gap between claim and capability." }
    ],
    pitfalls: [
      "Marketing that overstates what AI does in the process.",
      "Generated communications outside the supervision and retention system.",
      "A language model with a route, however indirect, to order entry."
    ]
  },
  "governance-general": {
    what: "runs the AI inventory, policy and reporting that the board and supervisors ask for",
    defaults: { affected: "staff", reversibility: "reversible", stakes: "material", knowledge: "stable", verify: "judgment", steps: "known", jurisdiction: "multi", route: "direct" },
    intro:
      "Governance teams can use the tools to run governance: keep the inventory current from the systems that know what is deployed, map each use case to the documents that apply, draft the board report and the regulatory responses, and check policies against new rules as they land. It is a chained workflow over a stable corpus of rules and internal policy, with a person owning every document that leaves the team. The regulation tracker on this site is the kind of corpus it reads.",
    decomposition: [
      { step: "Maintain the inventory", owner: "system", note: "From deployment records and the model repository; structured fields." },
      { step: "Map use cases to rules", owner: "model", note: "Against the governed corpus of regulation and policy, with citations." },
      { step: "Draft board and regulator reporting", owner: "model", note: "From the inventory, the evals and the exception logs." },
      { step: "Check policy against new rules", owner: "model", note: "Gap analysis when a document changes status; proposals only." },
      { step: "Decide and sign", owner: "human", note: "The chief risk officer or equivalent owns what is sent." }
    ],
    pitfalls: [
      "An inventory the model believes rather than one the systems report.",
      "Board papers that assert control effectiveness without the evals to show it.",
      "Rules mapped from memory instead of from a dated corpus."
    ]
  }
};

export const PRIMITIVES: { name: string; line: string; bank: string }[] = [
  { name: "Tools", line: "Functions the model can call, with a typed schema; your code executes them and returns the result.", bank: "Every touch of a bank system is a tool. The action gateway sits between the call and the system." },
  { name: "Connectors (MCP)", line: "An open protocol for exposing tools, data and prompts to models through a standard server interface.", bank: "One governed server per system of record beats ad hoc integrations; entitlements live on the server side." },
  { name: "Structured outputs", line: "The model returns data in a schema you define, so code can validate and route it.", bank: "Anything that feeds a system or a decision record is structured, never free text." },
  { name: "Retrieval", line: "Relevant passages from a document set are placed in the model's context before it answers.", bank: "For stable knowledge only. Live state comes from tools." },
  { name: "Subagents", line: "Separate model contexts given scoped sub-tasks by an orchestrator, which merges their results.", bank: "Each subagent gets its own identity and tool set; the orchestrator resolves conflicts, not the workers." },
  { name: "Hooks", line: "Deterministic code that runs on events: before a tool call, after an output, on completion.", bank: "Where policy checks, logging and blocking live; they do not depend on the model agreeing." },
  { name: "Packaged instructions (skills)", line: "Reusable folders of instructions, scripts and references the model loads when a task matches.", bank: "How a bank's own procedures become repeatable; version them like code." },
  { name: "Turn and cost budgets", line: "Limits on how many steps and how much compute an agent may use before it must stop or ask.", bank: "The simplest autonomy control there is; supervisors will ask for it." }
];

export const EVAL_TYPES: { name: string; line: string; when: string }[] = [
  { name: "Code-based", line: "Deterministic checks in milliseconds: schema, required fields, reconciliation, forbidden content.", when: "Every output, every run. The floor for anything that touches a system." },
  { name: "Model-based", line: "A judge model scores outputs against a written rubric.", when: "Interpretive tasks: summaries, narratives, answers. Calibrate against human scores monthly." },
  { name: "Human review", line: "Experts score a stratified sample, or everything, by hand.", when: "High stakes or novel behaviour, where neither code nor a judge can be trusted alone." }
];

export const ROUTES: { name: string; line: string; watch: string }[] = [
  { name: "Provider API", line: "A direct contract with the model provider.", watch: "One third party to diligence; data residency and retention terms are yours to negotiate." },
  { name: "Through a cloud platform", line: "The bank's existing cloud provider hosts the model and the bank's data stays inside that boundary.", watch: "Two third parties in the chain and a concentration question; often the faster route through security review." },
  { name: "Mixed", line: "Different routes for different tiers or regions.", watch: "Exit plans per route; the same evals across both so a switch can be judged." }
];

export const BUILD_FAQ = [
  { q: "Is this advice on what our bank must do?", a: "No. It is a design tool that maps common architecture choices to what regulators and public engineering documentation say, with dates and sources. Your compliance, risk and legal teams own the conclusions." },
  { q: "Why is the pattern taxonomy vendor-neutral?", a: "The three patterns and the workflow shapes come from public engineering guidance and appear, under similar names, in the documentation of every major provider. The brief never names a vendor because the controls are the same whichever model is behind them." },
  { q: "Where do the documents come from?", a: "From the regulation tracker on this site: 19 authorities, 164 documents, each linked to the official text and updated as rules change. A brief cites only documents that exist there." },
  { q: "How do I use the brief?", a: "Copy it into your intake or architecture-review template, keep the links, and treat the examiner questions as the test of whether the design is finished." }
];

export const BUILD_DOC_SLUGS: string[] = Array.from(
  new Set([
    ...Object.values(USE_CASE_DOCS).flat().map((d) => d.slug),
    ...Object.values(JURISDICTION_DOCS).flat().map((d) => d.slug),
    ...Object.values(ROUTE_DOCS).flat().map((d) => d.slug),
    ...CUSTOMER_DOCS.map((d) => d.slug),
    "occ-bulletin-2026-13",
    "occ-semiannual-risk-perspective-spring-2026",
    "nist-caisi-rfi-ai-agent-security-2026",
    "nist-ai-100-1"
  ])
);

export function defaultAnswers(useCase: UseCase, bank?: string): Answers {
  return { useCase, ...USE_CASE_BRIEFS[useCase].defaults, ...(bank ? { bank } : {}) };
}

export function answersToQuery(a: Answers): string {
  const p = new URLSearchParams();
  p.set("use", a.useCase);
  for (const q of QUESTIONS) p.set(q.key, a[q.key]);
  if (a.bank) p.set("bank", a.bank);
  return p.toString();
}

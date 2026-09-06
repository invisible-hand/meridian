// Data for the "operating system for AI agents in your bank" section
// (/agentic-banking). A holistic, end-to-end model of what a bank needs in
// place to run AI agents safely — the control layers, the lifecycle, where
// agents are landing, the autonomy ladder, and how regulators are moving —
// with every claim tied to a tracked primary-source document.
//
// Rules: every `docSlug` must exist in lib/regulatory-documents.ts (the
// tracker validator enforces it). Never state a figure or a regulator's
// position that the cited document does not support. Dates are ISO.

export type DocRef = {
  slug: string;
  /** What this document contributes to this item — one sentence */
  why: string;
};

export type Layer = {
  id: string;
  n: number;
  name: string;
  /** What the layer decides, in five words or fewer */
  decides: string;
  question: string;
  answer: string;
  controls: string[];
  docs: DocRef[];
};

export type Stage = {
  id: string;
  n: number;
  name: string;
  /** The gate question the stage must answer before the next one starts */
  gate: string;
  evidence: string[];
  docs: DocRef[];
};

export type FunctionGroup = "Front office" | "Middle office" | "Back office";

export type FunctionArea = {
  group: FunctionGroup;
  name: string;
  agentUses: string;
  /** Typical autonomy level observed or defensible today (0–4, see AUTONOMY) */
  autonomy: 0 | 1 | 2 | 3 | 4;
  docs: DocRef[];
};

export type AutonomyLevel = {
  level: 0 | 1 | 2 | 3 | 4;
  name: string;
  description: string;
  oversight: string;
  docs: DocRef[];
};

export type TimelineEvent = {
  date: string;
  label: string;
  note: string;
  lane: "enablement" | "controls";
  docSlug?: string;
  expected?: boolean;
};

export type MaturityStage = {
  n: number;
  name: string;
  description: string;
  signals: string[];
};

export type Position = {
  docSlug: string;
  says: string;
};

export const AGENT_OS_UPDATED = "2026-09-06";

// ---------------------------------------------------------------------------
// 1. The control plane — eight layers
// ---------------------------------------------------------------------------

export const LAYERS: Layer[] = [
  {
    id: "governance",
    n: 0,
    name: "Governance and accountability",
    decides: "Who owns the outcome",
    question: "Who is accountable when an AI agent acts on behalf of the bank?",
    answer:
      "The bank is — regardless of how the technology performs. Supervisors have said this in almost identical terms on both sides of the Atlantic: the ECB's 'technology is neutral, governance is not', the OCC's expectation that AI applications carry risk management 'consistent with conventional model risk management', and the FSB's first four sound practices, which put strategic direction, accountability and AI-risk integration at board level. The governance layer therefore holds the agent inventory, the risk appetite for autonomy, named owners per agent, and the policy that says which control set applies to which tier — including the path the 2026 model risk guidance left open for generative and agentic AI.",
    controls: [
      "A single inventory of every AI agent and AI-enabled feature, with a named accountable owner and a materiality tier",
      "A board-approved risk appetite for autonomy: which decisions an agent may take, up to what value, in which functions",
      "A written governance path for generative and agentic AI, since the 2026 model risk guidance excludes them",
      "Effective challenge from risk, compliance and internal audit — not only from the technology function"
    ],
    docs: [
      { slug: "fsb-ai-sound-practices-consultation-2026", why: "Sound Practices 1–4: strategic direction, accountability, AI in the risk framework, organisational adaptability." },
      { slug: "ecb-machado-technology-neutral-governance-speech-2026", why: "Three governance expectations: accountability for AI outcomes, senior-management oversight, effective challenge." },
      { slug: "occ-bulletin-2026-13", why: "Generative and agentic AI are out of scope of model risk guidance and must be managed 'through broader risk-management and governance programs'." },
      { slug: "nist-ai-100-1", why: "The Govern function: policies, roles, accountability and risk tolerance as the cross-cutting layer." },
      { slug: "treasury-fs-ai-rmf-and-ai-lexicon-2026", why: "The sector adaptation of NIST's Govern function and a shared lexicon for AI risk categories." }
    ]
  },
  {
    id: "identity",
    n: 1,
    name: "Identity and entitlements",
    decides: "Who the agent is",
    question: "Does an AI agent need its own identity and access rights?",
    answer:
      "Yes. An agent that reads data and calls systems is a principal in the bank's access-control model, and it needs an identity distinct from the human who launched it and from the service account of the platform it runs on. NIST's Center for AI Standards and Innovation has made agent identity and authorization an explicit workstream — its AI Agent Standards Initiative includes an NCCoE concept paper on software and AI agent identity and authorization — and its planned SP 800-53 overlays for single-agent and multi-agent systems will tailor existing access-control baselines to agents. Least privilege, short-lived credentials and per-agent entitlements are what make the rest of the control plane enforceable.",
    controls: [
      "Every agent has its own identity, credentials and entitlement set; nothing runs on a shared or human credential",
      "Least privilege by default: entitlements scoped to the use case, time-bound, revocable",
      "Delegation is recorded: which human or system authorised the agent, for what, until when",
      "Access reviews include agents alongside people and service accounts"
    ],
    docs: [
      { slug: "nist-caisi-rfi-ai-agent-security-2026", why: "Agent security RFI and the AI Agent Standards Initiative, including agent identity and authorization." },
      { slug: "nist-cosais-control-overlays", why: "Planned SP 800-53 overlays for single-agent and multi-agent systems." },
      { slug: "ny-dfs-23-nycrr-part-500", why: "Access-privilege and MFA requirements that apply to any principal, including automated ones, at New York-regulated institutions." }
    ]
  },
  {
    id: "actions",
    n: 2,
    name: "Action gateway",
    decides: "What the agent may do",
    question: "How does a bank limit what an AI agent can actually do?",
    answer:
      "Through a gateway that sits between the agent and every system it can act on: an allow-list of tools and APIs, transaction and value limits, mandatory approval steps for defined actions, rate limits, and a kill switch. This is the layer where the autonomy level chosen in governance becomes enforceable, and it is what supervisors mean by 'guardrails'. The OCC observed in May 2026 that banks run generative and agentic AI 'with guardrails and human-in-the-loop accountability'; the FSB's Sound Practice 10 asks for extra human-oversight measures as agents become more autonomous; and both the EU AI Act and Colorado's ADMT Act require a human able to override an automated outcome.",
    controls: [
      "Allow-listed tools and APIs per agent; anything not listed is unreachable",
      "Value, volume and rate limits enforced outside the model, in the gateway",
      "Defined actions require a human approval step; the approval is logged with the reviewer's identity",
      "A kill switch that revokes the agent's entitlements in one step"
    ],
    docs: [
      { slug: "occ-semiannual-risk-perspective-spring-2026", why: "Observed practice: use limited to specific cases, guardrails, human-in-the-loop accountability." },
      { slug: "fsb-ai-sound-practices-consultation-2026", why: "Sound Practice 10: human oversight, with extra measures for highly autonomous agentic AI." },
      { slug: "eu-ai-act-regulation-2024-1689", why: "Article 14 human oversight for high-risk systems; deployers must ensure it (Article 26)." },
      { slug: "co-sb26-189", why: "Meaningful human review by trained staff with authority to override the outcome." },
      { slug: "cfpb-chatbots-in-consumer-finance-2023", why: "Customers must be able to reach a human; 'doom loops' can violate federal consumer law." }
    ]
  },
  {
    id: "data",
    n: 3,
    name: "Data and knowledge",
    decides: "What the agent may know",
    question: "What data controls do AI agents need?",
    answer:
      "The same ones a bank's risk data already needs, plus three that are specific to agents. Retrieval has to respect entitlements — an agent may only surface what its identity is allowed to see. Lineage has to be traceable from the answer back to the source, which is the BCBS 239 discipline the Basel Committee said in January 2026 is still 'a work in progress' at many banks and on which AI depends. And the data an agent reads, remembers or is trained on has to be protected against poisoning — the FSB names agentic memory poisoning as a risk, NIST AI 600-1 names data poisoning and privacy, and Treasury's 2024 report asked for 'nutrition labels' disclosing what trained a vendor model and how customer inputs are reused.",
    controls: [
      "Entitlement-aware retrieval: the agent's identity, not the platform's, governs what it can read",
      "Lineage from every agent output to its sources; sources carry quality and freshness metadata",
      "Memory and retrieval stores are inventoried, access-controlled and monitored for poisoning",
      "Vendor terms state what data trains the model and how the bank's inputs are used or retained"
    ],
    docs: [
      { slug: "bcbs-239", why: "Accuracy, completeness, timeliness and lineage of risk data — the foundation AI depends on." },
      { slug: "bcbs-newsletter-bcbs239-implementation-2026", why: "Data lineage still 'a work in progress'; AI and automation depend on the same data quality." },
      { slug: "nist-ai-600-1", why: "Data privacy, information security (poisoning, prompt injection) and value-chain risks of generative AI." },
      { slug: "fsb-ai-sound-practices-consultation-2026", why: "Sound Practice 7 data governance; agentic memory poisoning named as a risk." },
      { slug: "treasury-ai-cybersecurity-risks-report-2024", why: "Data supply-chain mapping and 'nutrition labels' for vendor AI." }
    ]
  },
  {
    id: "models",
    n: 4,
    name: "Models and vendors",
    decides: "What the agent thinks with",
    question: "Are AI agents covered by model risk management or third-party risk management?",
    answer:
      "Mostly the second. The April 2026 interagency model risk guidance says generative and agentic AI models 'are not within the scope of this guidance', while the traditional models an agent may call — a credit score, a fraud model, a liquidity forecast — remain fully inside it. Because almost every bank consumes foundation models through vendors and cloud providers, the third-party framework (SR 23-4 in the US, the Basel Committee's December 2025 principles and the FSB's 2023 toolkit internationally) is the one that reaches the model itself: due diligence, contractual audit and data rights, ongoing monitoring, concentration risk, and an exit plan. Vice Chair Bowman said in May 2026 that supervisors are assessing how those expectations apply to vendor-provided AI.",
    controls: [
      "Every model an agent uses is classified: in scope of model risk guidance, or a generative/agentic model under the third-party and governance path",
      "Foundation-model and cloud providers go through full third-party due diligence, with concentration risk assessed",
      "Model changes by the vendor are detected and re-evaluated; the bank does not inherit a silent upgrade",
      "A documented exit plan per critical provider"
    ],
    docs: [
      { slug: "fed-sr-26-2", why: "Generative and agentic AI excluded from scope; traditional models remain covered." },
      { slug: "fed-sr-23-4", why: "Lifecycle third-party risk management for vendor AI; supervisors assessing its application (May 2026)." },
      { slug: "bcbs-third-party-risk-principles-2025", why: "Twelve principles including nth-party supply chains and concentration risk." },
      { slug: "fsb-monitoring-ai-adoption-vulnerabilities-2025", why: "Generative AI depends on a small number of chip, cloud and model suppliers — concentration as a systemic vulnerability." },
      { slug: "fed-bowman-speech-ai-financial-system-2026", why: "Confirms the carve-out and names vendor AI as an active supervisory question." }
    ]
  },
  {
    id: "runtime",
    n: 5,
    name: "Runtime and orchestration",
    decides: "Where the agent runs",
    question: "What does a safe runtime for AI agents look like?",
    answer:
      "Isolated, bounded and observable. Agents execute in sandboxes with no path to production systems except through the action gateway; each run has a budget — steps, tokens, time, spend — after which it stops; memory is scoped per task and cleared or reviewed; and multi-agent hand-offs are explicit and logged rather than emergent. The reasons are on the record: NIST's agent-security RFI asks how to constrain and monitor agent access in production and names indirect prompt injection and specification gaming; the FSB lists autonomous multi-step actions, memory poisoning and AI-generated code defects as agentic risks; the ESAs want asset inventories that include AI components; and NIST's multi-agent control overlay is the least mature of its five planned overlays, which is a signal about where the unknowns still are.",
    controls: [
      "Sandboxed execution; production reachable only through the gateway",
      "Per-run budgets for steps, tokens, time and spend, enforced by the orchestrator",
      "Task-scoped memory with retention rules; long-lived memory treated as a data store",
      "Multi-agent hand-offs are declared in the design and visible in the trace"
    ],
    docs: [
      { slug: "nist-caisi-rfi-ai-agent-security-2026", why: "Constraining and monitoring agent access; indirect prompt injection; misaligned behaviour." },
      { slug: "fsb-ai-sound-practices-consultation-2026", why: "Agentic risks: autonomous multi-step actions, memory poisoning, AI-generated code defects." },
      { slug: "nist-cosais-control-overlays", why: "Single-agent and multi-agent overlays planned; the agent overlays are the least mature." },
      { slug: "esas-jc-2026-25-frontier-ai-statement", why: "Continuously updated inventories of IT assets including AI/ML components; continuous monitoring." },
      { slug: "nist-ai-600-1", why: "Information-security risks of generative AI, including prompt injection." }
    ]
  },
  {
    id: "observability",
    n: 6,
    name: "Observability, evaluation and audit",
    decides: "What the bank can see",
    question: "What must a bank log and monitor about its AI agents?",
    answer:
      "Enough to reconstruct any action after the fact and to notice drift before it matters. That means a trace per run — inputs, retrieved sources, tool calls, approvals, outputs — retained on a schedule; evaluation suites run before release and continuously afterwards; drift and performance monitoring against the metrics agreed at approval; and alerting that a security operations team actually receives. The EU AI Act requires automatic logging and, for deployers, six-month retention; New York DFS asked in May 2026 for stronger logging and alerting; the FSB's Sound Practice 9 covers testing and ongoing monitoring; the ECB names drift explicitly; and the SEC will examine whether firms have policies to 'monitor and supervise' AI in fraud prevention, operations, AML and trading.",
    controls: [
      "A complete, tamper-evident trace per agent run, retained per policy (six months minimum where the EU AI Act applies)",
      "Pre-release evaluations and continuous monitoring against the approval metrics; drift thresholds trigger review",
      "Security alerting for anomalous agent behaviour routed to the SOC",
      "Audit access to traces without going through the technology team"
    ],
    docs: [
      { slug: "eu-ai-act-regulation-2024-1689", why: "Article 12 automatic logging; deployers keep logs at least six months (Article 26)." },
      { slug: "ny-dfs-industry-letter-2026-05-21-frontier-ai-models", why: "Strengthen logging and security-event alerting; human review of AI-generated code." },
      { slug: "fsb-ai-sound-practices-consultation-2026", why: "Sound Practice 9: performance management including testing and ongoing monitoring." },
      { slug: "ecb-machado-technology-neutral-governance-speech-2026", why: "Lifecycle model governance and drift monitoring as a risk-management focus." },
      { slug: "sec-exam-priorities-fy2026", why: "Policies and procedures to monitor and supervise AI in fraud prevention, back office, AML and trading." },
      { slug: "nist-ir-8596", why: "Cybersecurity Framework profile for securing AI components and detecting AI-enabled attacks." }
    ]
  },
  {
    id: "oversight",
    n: 7,
    name: "Human oversight and escalation",
    decides: "When a person steps in",
    question: "What does 'human in the loop' have to mean for an AI agent to satisfy regulators?",
    answer:
      "A specific person, with the competence to understand the output and the authority to change the outcome, who actually reviews it. That is the test in every document that uses the phrase. Colorado's ADMT Act asks for review 'by trained staff with authority to override'; California's regulations take a system out of the automated-decision article only if the human reviewer knows how to interpret the output, reviews it, and can change the result; the EU AI Act's Article 14 requires oversight measures that let a person understand, monitor and intervene; the CFPB says a customer must be able to reach a human. The oversight layer defines the thresholds at which an agent must stop and escalate, who receives the escalation, how fast, and how customers get recourse.",
    controls: [
      "Escalation thresholds per agent and tier: value, confidence, novelty, customer impact",
      "Named reviewers with documented competence and override authority; review is evidenced, not assumed",
      "Customer recourse: a route to a human and an explanation where a decision affects a person",
      "Oversight metrics reported upward: override rate, escalation volume, time-to-human"
    ],
    docs: [
      { slug: "co-sb26-189", why: "Human review by trained staff with authority to override; explanation within 30 days of an adverse outcome." },
      { slug: "ca-cppa-admt-risk-cyber-regulations-2025", why: "A genuine human decision-maker — one who understands, reviews and can change the outcome — takes a system out of the ADMT article." },
      { slug: "eu-ai-act-regulation-2024-1689", why: "Article 14: human oversight measures for high-risk systems." },
      { slug: "cfpb-chatbots-in-consumer-finance-2023", why: "Access to a human; institutions responsible regardless of technology." },
      { slug: "fsb-ai-sound-practices-consultation-2026", why: "Sound Practice 10: human oversight scaling with autonomy." }
    ]
  }
];

// ---------------------------------------------------------------------------
// 2. The lifecycle — eight stages with gates
// ---------------------------------------------------------------------------

export const LIFECYCLE: Stage[] = [
  {
    id: "intake",
    n: 1,
    name: "Intake",
    gate: "What will the agent do, for whom, and what could go wrong?",
    evidence: ["Use-case statement naming the process, the users and the affected customers", "The actions the agent will be allowed to take, listed", "Initial harm analysis"],
    docs: [
      { slug: "treasury-ai-financial-services-report-2024", why: "Review each AI use case for compliance with existing law before deployment." },
      { slug: "treasury-fs-ai-rmf-and-ai-lexicon-2026", why: "Tools to evaluate AI use cases across the lifecycle." },
      { slug: "nist-ai-100-1", why: "The Map function: context, intended use, affected parties." }
    ]
  },
  {
    id: "tiering",
    n: 2,
    name: "Risk tiering",
    gate: "Which tier, which autonomy level, which rulebook?",
    evidence: ["Materiality rating", "Autonomy level (0–4) proposed and approved", "Regulatory classification: model-risk scope, EU high-risk, consequential decision, consumer-facing"],
    docs: [
      { slug: "fsb-ai-sound-practices-consultation-2026", why: "Sound Practice 5: materiality and risk assessment before selection." },
      { slug: "fed-sr-26-2", why: "Materiality drives the intensity of validation and monitoring; generative/agentic out of scope." },
      { slug: "eu-ai-act-regulation-2024-1689", why: "Annex III classification decides whether the full high-risk regime applies." },
      { slug: "co-sb26-189", why: "'Covered ADMT' — material influence over a consequential decision — triggers notice and review duties." }
    ]
  },
  {
    id: "design",
    n: 3,
    name: "Design",
    gate: "What is the permission envelope and where does a human sit?",
    evidence: ["Identity and entitlements specified", "Tool allow-list, limits and approval points", "Data scope and lineage plan", "Oversight design: thresholds, reviewers, recourse"],
    docs: [
      { slug: "nist-caisi-rfi-ai-agent-security-2026", why: "Constraining and monitoring agent access designed in, not bolted on." },
      { slug: "eu-ai-act-regulation-2024-1689", why: "Human oversight (Art. 14) and logging (Art. 12) are design requirements for high-risk systems." },
      { slug: "nist-ai-600-1", why: "Suggested actions per generative-AI risk to select from at design time." }
    ]
  },
  {
    id: "build",
    n: 4,
    name: "Build and onboard",
    gate: "Do we know what we are buying, and can we leave?",
    evidence: ["Vendor due diligence and contract terms (data use, audit, incident notification, exit)", "Secure development evidence; human review of AI-generated code", "Component inventory including models, retrieval stores and tools"],
    docs: [
      { slug: "fed-sr-23-4", why: "Planning, due diligence, contract negotiation and exit for vendor AI." },
      { slug: "bcbs-third-party-risk-principles-2025", why: "Due diligence, binding contracts, nth-party and concentration risk." },
      { slug: "ny-dfs-industry-letter-2026-05-21-frontier-ai-models", why: "Human oversight of AI-generated code before deployment." },
      { slug: "esas-jc-2026-25-frontier-ai-statement", why: "Inventories that include AI/ML components; secure-by-design." }
    ]
  },
  {
    id: "validate",
    n: 5,
    name: "Validate and test",
    gate: "Does it do what we approved, and what happens when attacked?",
    evidence: ["Evaluation results against the approval metrics", "Adversarial and red-team testing (prompt injection, poisoning, specification gaming)", "Independent validation for any in-scope model the agent calls"],
    docs: [
      { slug: "fed-sr-26-2", why: "Independent validation with outcomes analysis and effective challenge for in-scope models." },
      { slug: "nist-ai-100-2e2025", why: "Adversarial machine-learning taxonomy for attack-oriented testing." },
      { slug: "pra-ss1-23-model-risk-management", why: "Independent validation principle, including vendor models." },
      { slug: "fca-fs25-5-ai-live-testing", why: "Supervised live testing as a path to production for AI in UK financial services." }
    ]
  },
  {
    id: "approve",
    n: 6,
    name: "Approve and deploy",
    gate: "Who signs, and is the oversight actually configured?",
    evidence: ["Sign-off by the accountable owner and the second line", "Staged rollout with rollback", "Oversight thresholds, reviewers and kill switch verified in production"],
    docs: [
      { slug: "ecb-machado-technology-neutral-governance-speech-2026", why: "Accountability for AI outcomes and effective challenge before use." },
      { slug: "fsb-ai-sound-practices-consultation-2026", why: "Sound Practice 2 governance and accountability; SP10 human oversight." },
      { slug: "eu-ai-act-regulation-2024-1689", why: "Deployer duties: use per instructions, ensure oversight, monitor operation (Art. 26)." }
    ]
  },
  {
    id: "operate",
    n: 7,
    name: "Operate and monitor",
    gate: "Is it still doing what we approved?",
    evidence: ["Traces retained; drift and performance dashboards against approval metrics", "Security alerting for anomalous behaviour", "Oversight metrics: override rate, escalations, time-to-human"],
    docs: [
      { slug: "eu-ai-act-regulation-2024-1689", why: "Automatic logging and six-month retention for deployers." },
      { slug: "esas-jc-2026-25-frontier-ai-statement", why: "Move from periodic to continuous monitoring." },
      { slug: "sec-exam-priorities-fy2026", why: "Examiners test policies to monitor and supervise AI in operation." },
      { slug: "fsb-ai-sound-practices-consultation-2026", why: "Sound Practice 9: ongoing monitoring." }
    ]
  },
  {
    id: "change",
    n: 8,
    name: "Change, incident and retirement",
    gate: "What changed, what broke, and when do we re-assess?",
    evidence: ["Re-assessment triggers: vendor model update, new use, new rule, incident", "Incident playbook with regulatory notification paths", "Exit executed per plan; entitlements revoked; data handled per retention"],
    docs: [
      { slug: "treasury-ai-financial-services-report-2024", why: "Re-evaluate AI use cases periodically, not once." },
      { slug: "co-sb26-189", why: "Developers must notify deployers of material updates; deployers re-assess." },
      { slug: "bcbs-principles-operational-resilience-2021", why: "Incident management and recovery as a critical-operations discipline." },
      { slug: "fed-sr-23-4", why: "Termination and exit as a lifecycle stage of third-party risk." }
    ]
  }
];

// ---------------------------------------------------------------------------
// 3. Where agents are landing — bank functions
// ---------------------------------------------------------------------------

export const FUNCTIONS: FunctionArea[] = [
  {
    group: "Front office",
    name: "Customer service",
    agentUses: "Chat and voice agents that answer, triage, and execute routine servicing; the most widely deployed agentic use in banking.",
    autonomy: 2,
    docs: [
      { slug: "cfpb-chatbots-in-consumer-finance-2023", why: "All top-10 US banks run chatbots; duties on accuracy, disputes and access to a human." },
      { slug: "eba-ai-adoption-report-2025", why: "55% of EU banks use general-purpose or agentic AI in consumer-facing processes." }
    ]
  },
  {
    group: "Front office",
    name: "Onboarding and KYC",
    agentUses: "Document collection, identity checks and case preparation; the front line against AI-generated identity fraud.",
    autonomy: 2,
    docs: [
      { slug: "fincen-alert-2024-deepfake-media", why: "Deepfake identity documents at account opening; live verification recommended." },
      { slug: "eba-ai-adoption-report-2025", why: "AML/CFT and fraud detection including remote onboarding among dominant use cases." }
    ]
  },
  {
    group: "Front office",
    name: "Lending and underwriting",
    agentUses: "Agents that assemble applications, pre-screen and explain decisions; the credit decision itself stays under consumer law and, in the EU, the high-risk regime.",
    autonomy: 1,
    docs: [
      { slug: "cfpb-ecoa-regulation-b-adverse-action", why: "Specific reasons for adverse action — no exception for model complexity." },
      { slug: "eu-ai-act-regulation-2024-1689", why: "Creditworthiness scoring of natural persons is high-risk." },
      { slug: "co-sb26-189", why: "Consequential decisions: notice, explanation, human review from January 1, 2027." }
    ]
  },
  {
    group: "Front office",
    name: "Advice and wealth",
    agentUses: "Research, portfolio commentary and client preparation for advisers; automated recommendations are examined for accuracy and suitability.",
    autonomy: 1,
    docs: [
      { slug: "sec-exam-priorities-fy2026", why: "Accurate AI representations; controls consistent with disclosures; algorithms consistent with investor profiles." }
    ]
  },
  {
    group: "Middle office",
    name: "Fraud and AML",
    agentUses: "Alert triage, investigation drafting and case narratives; the FSB's consultation includes agentic fraud detection at a large bank as a case study.",
    autonomy: 3,
    docs: [
      { slug: "fsb-ai-sound-practices-consultation-2026", why: "Case study: agentic fraud detection at a large bank." },
      { slug: "fdic-testimony-oversight-prudential-regulators-2026", why: "Regulators encourage AI to detect and disrupt illicit finance under the BSA program rule." },
      { slug: "sec-exam-priorities-fy2026", why: "AI in fraud prevention and AML within examination scope." }
    ]
  },
  {
    group: "Middle office",
    name: "Credit and market risk",
    agentUses: "Analysis, scenario narration and model documentation; the quantitative models remain under model risk management.",
    autonomy: 1,
    docs: [
      { slug: "fed-sr-26-2", why: "Traditional risk models in scope; generative/agentic tools around them are not." },
      { slug: "fed-cook-speech-ai-economy-financial-system-2026", why: "AI in trading: correlated strategies, model collusion, concentration." }
    ]
  },
  {
    group: "Middle office",
    name: "Compliance and regulatory change",
    agentUses: "Regulatory-document analysis, obligation mapping and policy drafting — the ECB's most-cited generative use after IT operations.",
    autonomy: 2,
    docs: [
      { slug: "ecb-machado-technology-neutral-governance-speech-2026", why: "Legal and document analysis among the most common generative-AI use cases." },
      { slug: "eba-ai-adoption-report-2025", why: "Internal uses: summarising documentation, drafting legal and support documents." }
    ]
  },
  {
    group: "Middle office",
    name: "Treasury and ALM",
    agentUses: "Forecast commentary, funding memos and counterparty document review around models that stay fully validated.",
    autonomy: 1,
    docs: [
      { slug: "fed-sr-26-2", why: "Liquidity and funding models are material models under the 2026 definition." },
      { slug: "bcbs-239", why: "Risk data aggregation for liquidity and funding reporting." }
    ]
  },
  {
    group: "Back office",
    name: "Operations and payments",
    agentUses: "Exception handling, reconciliation and payment-investigation agents inside critical operations.",
    autonomy: 2,
    docs: [
      { slug: "bcbs-principles-operational-resilience-2021", why: "Payments and settlement as critical operations with mapped dependencies." },
      { slug: "fincen-alert-2024-deepfake-media", why: "AI-enabled business email compromise targeting payments." }
    ]
  },
  {
    group: "Back office",
    name: "Finance and reporting",
    agentUses: "Report drafting, variance analysis and data-quality checks over regulated risk data.",
    autonomy: 1,
    docs: [
      { slug: "bcbs-239", why: "Accuracy, completeness and timeliness of risk data; lineage." },
      { slug: "bcbs-newsletter-bcbs239-implementation-2026", why: "AI depends on the same data quality; lineage still a work in progress." }
    ]
  },
  {
    group: "Back office",
    name: "IT and engineering",
    agentUses: "Coding agents, incident management and change automation — the fastest-growing generative use in European banks, with human code review now a supervisory ask.",
    autonomy: 2,
    docs: [
      { slug: "ecb-machado-technology-neutral-governance-speech-2026", why: "IT operations (incident management, coding) as the leading generative-AI use case." },
      { slug: "ny-dfs-industry-letter-2026-05-21-frontier-ai-models", why: "Human oversight of AI-generated code before deployment." },
      { slug: "fed-cook-speech-ai-economy-financial-system-2026", why: "AI-generated code may outpace security review." }
    ]
  },
  {
    group: "Back office",
    name: "Cyber and security operations",
    agentUses: "Detection, triage and response agents in the SOC — the one place supervisors are actively asking banks to use AI faster.",
    autonomy: 3,
    docs: [
      { slug: "nist-ir-8596", why: "AI-enabled cyber defense ('Defend') in the Cyber AI Profile." },
      { slug: "esas-jc-2026-25-frontier-ai-statement", why: "Enhance SOC and red-teaming with AI tools; continuous monitoring." },
      { slug: "occ-semiannual-risk-perspective-spring-2026", why: "Use AI defensively against faster, larger-scale attacks." }
    ]
  }
];

// ---------------------------------------------------------------------------
// 4. The autonomy ladder
// ---------------------------------------------------------------------------

export const AUTONOMY: AutonomyLevel[] = [
  {
    level: 0,
    name: "Inform",
    description: "Retrieves, summarises and answers. Takes no action on any system.",
    oversight: "Accuracy testing and source lineage; a route to a human where customers are involved.",
    docs: [
      { slug: "cfpb-chatbots-in-consumer-finance-2023", why: "Inaccurate answers and blocked access to a human can violate consumer law." },
      { slug: "nist-ai-600-1", why: "Confabulation as a named generative-AI risk." }
    ]
  },
  {
    level: 1,
    name: "Draft",
    description: "Proposes an action, a document or code. A person executes it.",
    oversight: "Human review before anything leaves the drafting stage — the standard supervisors set for AI-generated code.",
    docs: [
      { slug: "ny-dfs-industry-letter-2026-05-21-frontier-ai-models", why: "Human oversight of AI-generated code before deployment." }
    ]
  },
  {
    level: 2,
    name: "Act with approval",
    description: "Executes each action only after a person approves it.",
    oversight: "Per-action approval by a competent reviewer, logged — the 'human-in-the-loop accountability' the OCC observed at banks in 2026.",
    docs: [
      { slug: "occ-semiannual-risk-perspective-spring-2026", why: "Guardrails and human-in-the-loop accountability as observed practice." },
      { slug: "eu-ai-act-regulation-2024-1689", why: "Article 14 oversight: understand, monitor, intervene." }
    ]
  },
  {
    level: 3,
    name: "Act within bounds",
    description: "Executes autonomously inside a pre-approved envelope: allow-listed tools, value and rate limits, sampled review.",
    oversight: "Extra oversight measures scaled to autonomy, a kill switch, continuous monitoring and human review on request.",
    docs: [
      { slug: "fsb-ai-sound-practices-consultation-2026", why: "Sound Practice 10: extra measures for highly autonomous agentic AI." },
      { slug: "nist-caisi-rfi-ai-agent-security-2026", why: "Safeguards for constraining and monitoring agent access in production." },
      { slug: "co-sb26-189", why: "Human review available on request for consequential decisions." }
    ]
  },
  {
    level: 4,
    name: "Autonomous",
    description: "Closed-loop, multi-step, self-directed operation across systems.",
    oversight: "Rare in banking: 2% of use cases were fully autonomous in the UK's 2024 survey. The FSB names autonomous multi-step action as a risk and the FSB Chair flagged frontier models' autonomy to the G20.",
    docs: [
      { slug: "uk-ai-in-financial-services-survey-2026", why: "2024 baseline: 2% of use cases fully autonomous; the 2026 survey is the first to ask about agentic AI." },
      { slug: "fsb-chair-letter-g20-august-2026", why: "'Increasingly sophisticated autonomy' of frontier models as a stability concern." }
    ]
  }
];

// ---------------------------------------------------------------------------
// 5. How things are moving — the timeline
// ---------------------------------------------------------------------------

export const TIMELINE: TimelineEvent[] = [
  { date: "2023-01-26", lane: "controls", label: "NIST AI RMF 1.0", note: "Govern–Map–Measure–Manage becomes the shared vocabulary.", docSlug: "nist-ai-100-1" },
  { date: "2023-06-06", lane: "controls", label: "CFPB on bank chatbots", note: "Every top-10 bank runs one; duties apply 'regardless of technology'.", docSlug: "cfpb-chatbots-in-consumer-finance-2023" },
  { date: "2023-06-07", lane: "controls", label: "SR 23-4 third-party guidance", note: "The framework that reaches vendor AI.", docSlug: "fed-sr-23-4" },
  { date: "2024-03-27", lane: "controls", label: "Treasury AI cyber and fraud report", note: "Capability gap, fraud data divide, data supply chain.", docSlug: "treasury-ai-cybersecurity-risks-report-2024" },
  { date: "2024-07-12", lane: "controls", label: "EU AI Act published", note: "Credit scoring high-risk; logging and human oversight by design.", docSlug: "eu-ai-act-regulation-2024-1689" },
  { date: "2024-07-26", lane: "controls", label: "NIST AI 600-1", note: "Twelve generative-AI risks, 200+ actions.", docSlug: "nist-ai-600-1" },
  { date: "2024-11-13", lane: "controls", label: "FinCEN deepfake alert", note: "AI-generated identities at account opening.", docSlug: "fincen-alert-2024-deepfake-media" },
  { date: "2024-11-14", lane: "controls", label: "FSB: six AI vulnerabilities", note: "Includes misaligned AI systems and provider concentration.", docSlug: "fsb-financial-stability-implications-of-ai-2024" },
  { date: "2024-12-19", lane: "enablement", label: "Treasury RFI report", note: "Review each use case before deployment; regulators to clarify expectations.", docSlug: "treasury-ai-financial-services-report-2024" },
  { date: "2025-09-25", lane: "enablement", label: "EBA: 92% of EU banks deploy AI", note: "55% use general-purpose or agentic AI with consumers.", docSlug: "eba-ai-adoption-report-2025" },
  { date: "2025-12-10", lane: "controls", label: "Basel third-party principles", note: "Nth-party and concentration risk for AI and cloud.", docSlug: "bcbs-third-party-risk-principles-2025" },
  { date: "2025-12-11", lane: "enablement", label: "FSOC AI Working Group", note: "'Harnessing AI' becomes a Council priority.", docSlug: "fsoc-annual-report-2025" },
  { date: "2026-01-12", lane: "controls", label: "NIST CAISI agent-security RFI", note: "First federal workstream on AI agents as such.", docSlug: "nist-caisi-rfi-ai-agent-security-2026" },
  { date: "2026-02-19", lane: "enablement", label: "Treasury FS AI RMF", note: "The sector's voluntary risk-management template.", docSlug: "treasury-fs-ai-rmf-and-ai-lexicon-2026" },
  { date: "2026-02-24", lane: "controls", label: "ECB: 'governance is not neutral'", note: "85%+ of large EU banks use AI; agentic accelerating.", docSlug: "ecb-machado-technology-neutral-governance-speech-2026" },
  { date: "2026-04-17", lane: "enablement", label: "SR 26-2 / Bulletin 2026-13", note: "Model risk modernised; generative and agentic AI carved out.", docSlug: "fed-sr-26-2" },
  { date: "2026-05-07", lane: "controls", label: "OCC Risk Perspective", note: "Banks 'measured' on agentic AI: guardrails, human in the loop.", docSlug: "occ-semiannual-risk-perspective-spring-2026" },
  { date: "2026-05-21", lane: "controls", label: "DFS frontier-AI letter", note: "Human review of AI-generated code; logging; faster patching.", docSlug: "ny-dfs-industry-letter-2026-05-21-frontier-ai-models" },
  { date: "2026-06-10", lane: "controls", label: "FSB 12 sound practices", note: "Human oversight scales with autonomy; agentic risks named.", docSlug: "fsb-ai-sound-practices-consultation-2026" },
  { date: "2026-06-05", lane: "enablement", label: "UK survey asks about agents", note: "First regulator dataset on agentic deployment, due late 2026.", docSlug: "uk-ai-in-financial-services-survey-2026" },
  { date: "2026-07-14", lane: "enablement", label: "HM Treasury adoption plan", note: "'Beyond isolated pilots' as government policy.", docSlug: "hmt-financial-services-ai-adoption-plan-2026" },
  { date: "2026-07-31", lane: "controls", label: "ESAs on frontier AI under DORA", note: "AI components in asset inventories; continuous monitoring.", docSlug: "esas-jc-2026-25-frontier-ai-statement" },
  { date: "2026-08-31", lane: "controls", label: "FSB Chair to the G20", note: "Frontier models' autonomy named as a stability concern.", docSlug: "fsb-chair-letter-g20-august-2026" },
  { date: "2026-10-01", lane: "controls", label: "FSB final sound practices", note: "Expected October 2026 as a G20 deliverable.", docSlug: "fsb-ai-sound-practices-consultation-2026", expected: true },
  { date: "2027-01-01", lane: "controls", label: "Colorado ADMT Act in force", note: "Notice, explanation and human review for consequential decisions.", docSlug: "co-sb26-189", expected: true },
  { date: "2027-12-02", lane: "controls", label: "EU AI Act high-risk obligations", note: "Stand-alone Annex III systems, including credit scoring.", docSlug: "eu-ai-act-regulation-2024-1689", expected: true }
];

// ---------------------------------------------------------------------------
// 6. Maturity — where banks are and where this is going
// ---------------------------------------------------------------------------

export const MATURITY: MaturityStage[] = [
  {
    n: 1,
    name: "Experiments",
    description: "Pilots in individual teams. No inventory, no tiering, shared credentials, vendor terms unread.",
    signals: ["Nobody can list every AI-enabled feature in production", "Agents run on human or service-account credentials"]
  },
  {
    n: 2,
    name: "Copilots at scale",
    description: "Level 0–1 assistants deployed widely: summarisation, drafting, coding. An inventory exists; governance is policy, not enforcement.",
    signals: ["Inventory and owners exist", "Human review of outputs is expected but not evidenced"]
  },
  {
    n: 3,
    name: "Governed agents",
    description: "Level 2–3 agents in defined use cases with guardrails, approval steps and measured human oversight. This is the practice supervisors describe at large banks in 2026.",
    signals: ["Tiering decides the control set", "Approvals and overrides are logged and reported", "Vendor AI under third-party risk management"]
  },
  {
    n: 4,
    name: "Agent operating system",
    description: "Identity, gateway, data access, runtime and observability are shared platform services; policy is enforced in code across every agent rather than re-implemented per use case.",
    signals: ["One identity and entitlement model for agents", "One gateway, one trace store, one evaluation pipeline", "New agents inherit controls by default"]
  },
  {
    n: 5,
    name: "Multi-agent operations",
    description: "Agents coordinate across functions at level 3–4 autonomy. The controls exist only in outline: NIST's multi-agent overlay is its least mature, and the FSB names autonomous multi-step action as a risk.",
    signals: ["Declared, traceable hand-offs between agents", "Budgets and kill switches at the workflow level, not only per agent"]
  }
];

// ---------------------------------------------------------------------------
// 7. What regulators have actually said about agents
// ---------------------------------------------------------------------------

export const POSITIONS: Position[] = [
  { docSlug: "fed-sr-26-2", says: "Generative and agentic AI models 'are novel and rapidly evolving' and 'are not within the scope of this guidance'; banks should use broader risk-management and governance practices for them. An interagency request for information on AI and model risk is promised." },
  { docSlug: "occ-semiannual-risk-perspective-spring-2026", says: "Banks are taking a 'measured approach' to generative and agentic AI, limited to specific use cases with guardrails and human-in-the-loop accountability; lack of explainability makes governance essential before use expands to material financial decisions." },
  { docSlug: "fed-bowman-speech-ai-financial-system-2026", says: "Confirms the model-risk carve-out for generative and agentic AI; supervisors are assessing third-party risk expectations for vendor-provided AI; no pre-emptive AI-specific rulemaking." },
  { docSlug: "fsb-ai-sound-practices-consultation-2026", says: "Twelve sound practices with 'specific attention to generative and agentic AI'; Sound Practice 10 asks for extra human-oversight measures for highly autonomous agents; risks named include autonomous multi-step actions, agentic memory poisoning and AI-generated code defects." },
  { docSlug: "fsb-chair-letter-g20-august-2026", says: "Frontier models show 'increasingly sophisticated autonomy and problem-solving abilities, as well as threat capabilities'; authorities should support safe model release and deployment as a priority." },
  { docSlug: "nist-caisi-rfi-ai-agent-security-2026", says: "Defines AI agents as systems that plan and take autonomous actions affecting real-world systems; asks about indirect prompt injection, poisoning, specification gaming, and safeguards for constraining and monitoring agent access in production." },
  { docSlug: "nist-cosais-control-overlays", says: "Plans SP 800-53 control overlays for single-agent and multi-agent AI systems; these are the least mature of the five overlays." },
  { docSlug: "nist-ai-600-1", says: "Names information-security risks — prompt injection, data poisoning, model extraction — and confabulation among twelve generative-AI risks, with actions mapped to the AI RMF." },
  { docSlug: "ny-dfs-industry-letter-2026-05-21-frontier-ai-models", says: "Put human review on AI-generated code before deployment; strengthen logging and alerting; shorten remediation timelines; map third-party dependencies." },
  { docSlug: "esas-jc-2026-25-frontier-ai-statement", says: "Keep continuously updated asset inventories including AI/ML components; move from periodic to continuous monitoring; management bodies own frontier-AI risk under DORA." },
  { docSlug: "ecb-machado-technology-neutral-governance-speech-2026", says: "Generative and agentic AI adoption is accelerating in IT operations, legal and document analysis and front-line support; banks are accountable for outcomes regardless of how the technology performs." },
  { docSlug: "eba-ai-adoption-report-2025", says: "55% of surveyed EU banks already use general-purpose or agentic AI in consumer-facing processes — fraud alerts, agent assist, self-service and digital or voice assistants." },
  { docSlug: "uk-ai-in-financial-services-survey-2026", says: "The first BoE/FCA survey to cover agentic AI explicitly; the 2024 baseline found 2% of use cases fully autonomous; the FPC asked for further work on agentic AI in payments and markets." },
  { docSlug: "eu-ai-act-regulation-2024-1689", says: "High-risk systems require human oversight (Art. 14) and automatic logging (Art. 12); deployers must ensure oversight, monitor operation and keep logs at least six months (Art. 26)." },
  { docSlug: "co-sb26-189", says: "From January 1, 2027, consequential automated decisions require notice, a 30-day explanation of an adverse outcome, and human review by trained staff with authority to override." },
  { docSlug: "sec-exam-priorities-fy2026", says: "Examiners will focus on 'recent advancements in AI' and test whether firms have policies to monitor and supervise AI used in fraud prevention, back-office operations, AML and trading." },
  { docSlug: "fed-cook-speech-ai-economy-financial-system-2026", says: "AI-driven trading risks correlated strategies, endogenous model collusion and market concentration; AI-generated code may outpace security review." },
  { docSlug: "cfpb-chatbots-in-consumer-finance-2023", says: "Institutions remain responsible for timely, accurate answers and access to a human 'regardless of the processes or technologies used'." }
];

// ---------------------------------------------------------------------------
// 8. FAQ (hub)
// ---------------------------------------------------------------------------

export const FAQ: { q: string; a: string }[] = [
  {
    q: "What is an operating system for AI agents in a bank?",
    a: "The shared set of controls every AI agent runs on, rather than controls re-implemented per use case: governance and accountability, agent identity and entitlements, an action gateway that limits what agents can do, entitlement-aware data access with lineage, model and vendor management, a sandboxed and budgeted runtime, observability and audit, and human oversight with escalation. The term is a design goal — no regulator prescribes it — but each layer maps to documents supervisors already cite."
  },
  {
    q: "Are AI agents covered by bank model risk management?",
    a: "Not in the United States since April 17, 2026. The revised interagency model risk guidance (SR 26-2, OCC Bulletin 2026-13, FDIC FIL-15-2026) says generative and agentic AI models are outside its scope and must be managed through broader risk-management and governance programs. The traditional models an agent calls — credit, fraud, liquidity — remain in scope, and vendor-supplied agents fall under third-party guidance (SR 23-4). The agencies have promised a request for information on AI and model risk."
  },
  {
    q: "What autonomy level do banks actually run today?",
    a: "Mostly levels 1 and 2 — drafting and acting with approval. The OCC reported in May 2026 that bank use of generative and agentic AI is primarily productivity and customer-experience tools with guardrails and human-in-the-loop accountability. The UK's 2024 survey found 2% of use cases fully autonomous. Level 3, acting within a pre-approved envelope, is emerging in fraud and security operations, where supervisors are most encouraging."
  },
  {
    q: "What do regulators say about agentic AI specifically?",
    a: "Four things, consistently. It is not yet inside model risk guidance (Fed, OCC, FDIC). Human oversight must scale up with autonomy (FSB Sound Practice 10, EU AI Act Article 14, Colorado). Agent-specific security — prompt injection, memory poisoning, AI-generated code — is an active workstream (NIST CAISI, DFS, the ESAs). And frontier models' autonomy is now a financial-stability topic (FSB Chair's August 2026 letter)."
  },
  {
    q: "Which documents should an AI agent program cite?",
    a: "For US banks: SR 26-2 / Bulletin 2026-13 for the models inside the agent and the carve-out around it; SR 23-4 for vendor AI; NIST AI 600-1 for generative-AI risks; the CAISI agent-security RFI for agent-specific threats; Treasury's FS AI RMF as the assessment template. Internationally: the FSB's 12 sound practices, the Basel third-party principles, BCBS 239 for data, the EU AI Act's Articles 12, 14 and 26, and the ESAs' July 2026 statement under DORA."
  }
];

export const AGENT_OS_DOC_SLUGS: string[] = Array.from(
  new Set([
    ...LAYERS.flatMap((l) => l.docs.map((d) => d.slug)),
    ...LIFECYCLE.flatMap((s) => s.docs.map((d) => d.slug)),
    ...FUNCTIONS.flatMap((f) => f.docs.map((d) => d.slug)),
    ...AUTONOMY.flatMap((a) => a.docs.map((d) => d.slug)),
    ...TIMELINE.flatMap((t) => (t.docSlug ? [t.docSlug] : [])),
    ...POSITIONS.map((p) => p.docSlug)
  ])
);

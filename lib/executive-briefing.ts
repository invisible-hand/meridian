// The executive briefing — `/ai-regulation/for-bank-executives`.
//
// A self-paced briefing for bank boards and the C-suite, built from the same
// primary sources as the tracker. Every `slug` / `docSlug` must exist in
// DOCUMENTS (enforced by `npm run tracker:check`). The deep dives here follow
// the DeepDive contract (question-phrased H2, quotable answer, requirement
// table, FAQPage entry) because that is the page shape both search engines
// cite. Bump EXEC_BRIEFING_UPDATED whenever the hand-written text changes.

import type { DeepDive } from "@/lib/regulators";

export const EXEC_BRIEFING_PUBLISHED = "2026-09-08";
export const EXEC_BRIEFING_UPDATED = "2026-09-08";

/** Module 1 — what changed in 2026 that a board must know. Dated, sourced. */
export type Change = { date: string; slug: string; what: string; why: string };

export const CHANGES_2026: Change[] = [
  {
    date: "2026-04-17",
    slug: "fed-sr-26-2",
    what: "US model risk guidance rewritten after 15 years",
    why: "SR 26-2 / OCC Bulletin 2026-13 / FDIC FIL-15-2026 replace SR 11-7 with a risk-based, materiality-driven framework — and put generative and agentic AI outside it. Those tools are now governed by your broader risk and governance programs, which examiners will ask to see."
  },
  {
    date: "2026-06-10",
    slug: "fsb-ai-sound-practices-consultation-2026",
    what: "The FSB proposes the global baseline: 12 sound practices",
    why: "Practice 1 is addressed to the board — align AI with business model, risk appetite and strategy. The final report is an October 2026 G20 deliverable, so this is the yardstick every supervisor will be handed."
  },
  {
    date: "2026-07-07",
    slug: "ecb-letter-ai-enabled-cybersecurity-threats-2026",
    what: "The ECB writes to every significant bank's CEO",
    why: "Letter SSM-2026-0301 requires an action plan on AI-enabled cyber threats by 31 October 2026, with named roles and timelines. The first AI letter addressed to CEOs by name, not to compliance."
  },
  {
    date: "2026-07-21",
    slug: "cfpb-regulation-b-final-rule-2026",
    what: "Disparate-impact liability leaves Regulation B",
    why: "The CFPB's rule says ECOA authorizes only disparate-treatment claims. The adverse-action notice duty is unchanged: a model still has to give specific reasons. Fair-lending exposure for AI underwriting narrowed; it did not disappear, and state law fills some of the gap."
  },
  {
    date: "2026-07-27",
    slug: "eu-digital-omnibus-ai-regulation-2026-1744",
    what: "EU AI Act high-risk deadline moves to 2 December 2027",
    why: "Credit scoring of natural persons stays high-risk; the compliance date for stand-alone Annex III systems is now fixed at 2 December 2027. Transparency duties (telling customers they are dealing with AI) applied from 2 August 2026 regardless."
  },
  {
    date: "2026-08-31",
    slug: "fsb-chair-letter-g20-august-2026",
    what: "Frontier AI models named a financial-stability concern",
    why: "The FSB Chair tells the G20 that frontier models' most immediate impact is on cyber risk and asks firms for robust response, recovery and third-party resilience. Read with the ECB and NY DFS letters, it is a three-regulator signal that AI cyber is now a board topic."
  }
];

/**
 * Module 2 — what regulators expect of the board and senior management.
 * Rendered as a deep dive: the cross-authority table is the citation asset.
 */
export const BOARD_DEEP_DIVE: DeepDive = {
  id: "board-expectations",
  label: "Module 2 · What supervisors expect",
  question: "What do bank regulators expect of the board and senior management on AI?",
  answer:
    "No banking regulator has written an AI-specific board rule, but at least eight of them have already told boards what they expect, using law and guidance that is in force today. The pattern is consistent across jurisdictions: the board owns the AI strategy and risk appetite, a named senior executive is accountable for model and AI risk, the use of vendors does not transfer that accountability, the data feeding AI is a board-level responsibility, and — since 2026 — AI-enabled cyber threats belong on the board agenda with a dated action plan. Supervisors test these expectations through existing examinations rather than new AI exams.",
  requirements: [
    {
      rule: "SR 26-2 / OCC Bulletin 2026-13",
      authority: "federal-reserve",
      requirement: "Retains board and senior-management governance of model risk, scaled to materiality; generative and agentic AI sit outside the guidance and must be governed through the bank's broader risk-management programs.",
      docSlug: "fed-sr-26-2",
      when: "In force Apr 17, 2026"
    },
    {
      rule: "Interagency third-party guidance (SR 23-4 / Bulletin 2023-17)",
      authority: "occ",
      requirement: "A bank's use of third parties — including AI vendors and cloud-hosted models — does not diminish the board's and management's responsibility to operate safely and in compliance with law.",
      docSlug: "fed-sr-23-4"
    },
    {
      rule: "PRA SS1/23, Principle 2",
      authority: "uk",
      requirement: "Accountability for the model risk management framework is allocated to a named Senior Management Function holder; effectiveness for financial reporting is reported to the audit committee.",
      docSlug: "pra-ss1-23-model-risk-management",
      when: "In force May 17, 2024"
    },
    {
      rule: "23 NYCRR Part 500 §500.17(b) + DFS AI letter (Oct 2024)",
      authority: "ny-dfs",
      requirement: "Annual certification of the cybersecurity program signed by the highest-ranking executive and the CISO by April 15; DFS expects AI-specific threats — deepfakes, AI-enhanced attacks, vendor AI — to appear in the risk assessment that certification rests on.",
      docSlug: "ny-dfs-industry-letter-2024-10-16-ai-cyber-risks"
    },
    {
      rule: "BCBS 239, Principle 1",
      authority: "basel-committee",
      requirement: "The board and senior management are accountable for risk data aggregation and reporting — the data discipline the Basel Committee said in January 2026 is still 'a work in progress' and on which AI depends.",
      docSlug: "bcbs-239"
    },
    {
      rule: "BCBS third-party risk principles, Principle 1",
      authority: "basel-committee",
      requirement: "The board of directors has ultimate responsibility for oversight of third-party risk, including nth-party supply chains and concentration in a few AI and cloud providers.",
      docSlug: "bcbs-third-party-risk-principles-2025",
      when: "Dec 10, 2025"
    },
    {
      rule: "FSB Sound Practices 1–2",
      authority: "fsb",
      requirement: "Board and senior management align AI with the business model, risk appetite and strategy (SP1) and set clear governance and accountability for AI outcomes (SP2).",
      docSlug: "fsb-ai-sound-practices-consultation-2026",
      when: "Proposed; final Oct 2026"
    },
    {
      rule: "ECB supervisory expectations (Machado, Feb 2026)",
      authority: "ecb",
      requirement: "Clear accountability for AI decisions, senior-management oversight matching AI's strategic importance, and effective challenge from risk, compliance and internal audit — 'technology is neutral, governance is not'.",
      docSlug: "ecb-machado-technology-neutral-governance-speech-2026",
      when: "Expectation"
    },
    {
      rule: "ECB 'Dear CEO' letter SSM-2026-0301",
      authority: "ecb",
      requirement: "Every significant institution submits an AI-cyber action plan to its supervisory team with concrete measures, resources, named roles and timelines.",
      docSlug: "ecb-letter-ai-enabled-cybersecurity-threats-2026",
      when: "Due Oct 31, 2026"
    },
    {
      rule: "BoE / FCA / HMT joint statement (May 2026)",
      authority: "uk",
      requirement: "Boards and senior management must understand frontier-AI cyber risk, and investment — including in end-of-life systems and insurance — should reflect the threat.",
      docSlug: "uk-joint-statement-frontier-ai-cyber-resilience-2026"
    },
    {
      rule: "EU AI Act, Article 4 (AI literacy)",
      authority: "eu-ai-act",
      requirement: "Providers and deployers must support the development of AI literacy among the staff who operate and use AI systems — a duty that reaches the board room as well as the first line.",
      docSlug: "eu-ai-act-regulation-2024-1689",
      when: "Since Feb 2, 2025"
    }
  ],
  detail: [
    "The US federal position is deliberately not AI-specific: Vice Chair Bowman said in May 2026 that existing frameworks, regularly reviewed, should accommodate AI's evolution, and the OCC's Spring 2026 Risk Perspective observed that banks are taking a 'measured approach' to generative and agentic AI with guardrails and human-in-the-loop accountability. What that means for a board is that AI is examined through the model-risk, third-party, BSA/AML, fair-lending and cyber lenses that already exist — and that an AI program which cannot be described in those terms will not survive an examination.",
    "Europe and the UK are more explicit about accountability. The PRA names a Senior Management Function holder; the ECB's Supervisory Board says accountability for outcomes sits with the bank regardless of how the technology performs; New York makes the CEO and CISO sign. The FSB's 12 practices, once final, will give every supervisor a common checklist — and its first two items are written for the board."
  ],
  practice: [
    "Minute an AI risk appetite: which decisions AI may make or materially influence, at what autonomy level, and which it may not.",
    "Name the accountable executive for AI and model risk, and confirm internal audit has AI in its plan — supervisors ask for both by name.",
    "Ask for the inventory: every AI system that touches a customer decision, its owner, its vendor, and whether it sits inside or outside model risk management.",
    "Put AI-enabled cyber on the board calendar with a dated plan — the ECB, NY DFS and the UK authorities have each asked for one in 2026.",
    "Make AI literacy a board item, not only a staff item: the EU AI Act's Article 4 duty and NY DFS's training expectations both reach the top."
  ]
};

/** Module 3 — the ten questions to ask your CRO, CIO and general counsel. */
export type BoardQuestion = { ask: string; goodAnswer: string; slugs: string[] };

export const TEN_QUESTIONS: BoardQuestion[] = [
  {
    ask: "Which of our AI systems make or materially influence decisions about customers, and who owns each one?",
    goodAnswer: "A written inventory with an accountable owner per system, tagged by use case (credit, fraud, AML, service, marketing) and by whether it is in-house or vendor-supplied. Materiality is the organising principle of the revised US guidance; Annex III of the EU AI Act and Colorado's ADMT Act both turn on whether a system materially influences a consequential decision.",
    slugs: ["fed-sr-26-2", "eu-ai-act-regulation-2024-1689", "co-sb26-189"]
  },
  {
    ask: "Which of those are inside our model risk management framework, which are outside it, and what governs the ones outside?",
    goodAnswer: "The revised US guidance excludes generative and agentic AI by name. A good answer shows a second governance path for those tools — use-case approval, guardrails, human oversight, monitoring — rather than silence. The Treasury FS AI RMF and NIST's generative-AI profile are the frameworks banks are borrowing for that path.",
    slugs: ["occ-bulletin-2026-13", "treasury-fs-ai-rmf-and-ai-lexicon-2026", "nist-ai-600-1"]
  },
  {
    ask: "If a model declines a customer, can we state the specific reasons the law requires?",
    goodAnswer: "Yes, with an example notice. Regulation B §1002.9 still requires specific principal reasons within 30 days; 'did not achieve a qualifying score' is expressly insufficient. The April 2026 rule removed disparate-impact liability but left this duty untouched, and Colorado's Act accepts an ECOA notice as satisfying its own explanation duty from January 1, 2027.",
    slugs: ["cfpb-ecoa-regulation-b-adverse-action", "cfpb-regulation-b-final-rule-2026", "co-sb26-189"]
  },
  {
    ask: "What do we depend on from outside — models, cloud, data — and what happens if a provider fails, changes the model, or is compromised?",
    goodAnswer: "A map of critical AI third parties with contracts, exit plans and concentration analysis. The interagency third-party guidance sets the lifecycle; the Basel Committee's December 2025 principles make the board responsible for nth-party and concentration risk; the FSB names reliance on a few chip, cloud and model providers as a systemic vulnerability.",
    slugs: ["fed-sr-23-4", "bcbs-third-party-risk-principles-2025", "fsb-financial-stability-implications-of-ai-2024"]
  },
  {
    ask: "What is our exposure to AI-enabled fraud and cyber attack, and what did we change this year?",
    goodAnswer: "Specific changes: phishing-resistant MFA, live verification at onboarding, deepfake training, shortened patch timelines, monitoring of AI tool outputs. FinCEN's deepfake alert, the NY DFS letters and the OCC's Spring 2026 Risk Perspective describe the threat; the ECB's July 2026 letter tells you what a plan must contain.",
    slugs: ["fincen-alert-2024-deepfake-media", "ny-dfs-industry-letter-2026-05-21-frontier-ai-models", "occ-semiannual-risk-perspective-spring-2026", "ecb-letter-ai-enabled-cybersecurity-threats-2026"]
  },
  {
    ask: "Is the data feeding our models good enough that we would sign our name to it?",
    goodAnswer: "Evidence of lineage from model output back to source, and an honest gap list. BCBS 239 makes the board accountable for risk data; the Basel Committee's January 2026 newsletter says lineage and data culture are still 'a work in progress' at many banks and that AI depends on the same data.",
    slugs: ["bcbs-239", "bcbs-newsletter-bcbs239-implementation-2026"]
  },
  {
    ask: "Where are we running AI agents, at what level of autonomy, and who can stop them?",
    goodAnswer: "A list of agentic deployments with the human approval points and a kill switch per agent. The OCC reports banks keeping agents to specific cases with human-in-the-loop accountability; the FSB's Practice 10 asks for extra oversight of highly autonomous agents; the revised US guidance leaves agents to your broader governance.",
    slugs: ["occ-semiannual-risk-perspective-spring-2026", "fsb-ai-sound-practices-consultation-2026", "fed-sr-26-2"]
  },
  {
    ask: "Which dates in the next eighteen months bind us, and who owns each one?",
    goodAnswer: "A calendar with an owner per date. For most banks: the ECB action plan (31 October 2026, significant institutions), the FSB final practices (October 2026), Colorado's ADMT Act (1 January 2027), the EU AI Act high-risk regime (2 December 2027), and New York's annual certification (15 April, every year).",
    slugs: ["ecb-letter-ai-enabled-cybersecurity-threats-2026", "co-sb26-189", "eu-digital-omnibus-ai-regulation-2026-1744", "ny-dfs-23-nycrr-part-500"]
  },
  {
    ask: "What did our supervisors say about AI in their last examination, letter or priorities document — and what did we say back?",
    goodAnswer: "The actual text, not a summary. The ECB's 2026–28 priorities, the SEC's FY2026 exam priorities, the NCUA's 2026 letter (which does not mention AI at all) and the OCC's Risk Perspective each tell you the lens your examiner will use.",
    slugs: ["ecb-ssm-supervisory-priorities-2026-28", "sec-exam-priorities-fy2026", "ncua-letter-26-cu-01", "occ-semiannual-risk-perspective-spring-2026"]
  },
  {
    ask: "How are we building AI literacy — on this board, in the executive team and in the first line?",
    goodAnswer: "A program with names and dates. The EU AI Act's Article 4 duty has applied since February 2025; NY DFS expects annual training to cover deepfakes and AI social engineering; the FSB's Practice 4 asks for organisational adaptability — skills and resourcing — as a governance matter.",
    slugs: ["eu-ai-act-regulation-2024-1689", "ny-dfs-industry-letter-2024-10-16-ai-cyber-risks", "fsb-ai-sound-practices-consultation-2026"]
  }
];

/** Module 4 — what applies, by footprint. Short by design; the use-case matrix has the detail. */
export type Footprint = { where: string; applies: string; authoritySlugs: string[] };

export const FOOTPRINTS: Footprint[] = [
  {
    where: "Every US bank",
    applies: "ECOA / Regulation B adverse-action duties, FCRA, UDAAP, BSA/AML program expectations, interagency third-party guidance; the revised model risk guidance where model risk is significant.",
    authoritySlugs: ["cfpb", "fincen", "occ"]
  },
  {
    where: "US banks above about $30 billion",
    applies: "The revised interagency model risk management guidance (SR 26-2 / Bulletin 2026-13 / FIL-15-2026) is expected to be most relevant to you; generative and agentic AI need a governance path of their own.",
    authoritySlugs: ["federal-reserve", "occ", "fdic"]
  },
  {
    where: "New York-regulated institutions",
    applies: "23 NYCRR Part 500 with the DFS AI letters layered on it: AI threats in the risk assessment, deepfake-aware training and MFA, frontier-AI preparedness, and the CEO/CISO certification each April 15.",
    authoritySlugs: ["ny-dfs"]
  },
  {
    where: "Lending into Colorado",
    applies: "The Automated Decision-Making Technology Act from January 1, 2027: consumer notice, a plain-language explanation within 30 days of an adverse outcome, human review; an ECOA notice satisfies the disclosure duty. Plus the conversational-AI disclosure law for chatbots.",
    authoritySlugs: ["colorado-ai-act"]
  },
  {
    where: "Doing business in California",
    applies: "The CPPA's automated decision-making, risk-assessment and cybersecurity-audit regulations, operative January 1, 2026, for businesses in CCPA scope.",
    authoritySlugs: ["california"]
  },
  {
    where: "EU operations",
    applies: "The AI Act (credit scoring high-risk from December 2, 2027; transparency since August 2, 2026), ECB supervisory expectations and the 2026–28 priorities, DORA for the cyber and third-party side, and the October 31, 2026 action-plan deadline for significant institutions.",
    authoritySlugs: ["eu-ai-act", "ecb", "eba"]
  },
  {
    where: "UK operations",
    applies: "PRA SS1/23 model risk principles with a named accountable executive, the May 2026 joint statement on frontier-AI cyber resilience, and an outcomes-focused regime the PRA says it will build on rather than replace.",
    authoritySlugs: ["uk"]
  }
];

/** Module 5 — the agent decision, as a deep dive. Links into /agentic-banking. */
export const AGENT_DEEP_DIVE: DeepDive = {
  id: "the-agent-decision",
  label: "Module 5 · The agent decision",
  question: "Should a bank deploy AI agents in 2026, and what will supervisors expect if it does?",
  answer:
    "Supervisors are not stopping banks from deploying agents; they are telling banks that agents fall outside the model-risk rulebook and inside everything else. The revised US model risk guidance excludes agentic AI by name and points to the bank's broader governance; the OCC reports that banks are keeping agents to specific use cases with guardrails and human-in-the-loop accountability; the FSB's proposed practices ask for extra human oversight of highly autonomous agents and name agentic memory poisoning and AI-generated code defects as risks. The executive decision is therefore not 'agents or no agents' but which autonomy level each use case is allowed, who approves the step up, and whether the bank has one set of controls every agent inherits rather than controls rebuilt per project.",
  requirements: [
    {
      rule: "SR 26-2 / OCC Bulletin 2026-13",
      authority: "federal-reserve",
      requirement: "Agentic AI is 'novel and rapidly evolving' and outside model risk guidance; banks apply broader risk-management and governance practices, and an interagency request for information on AI is promised.",
      docSlug: "fed-sr-26-2",
      when: "In force Apr 17, 2026"
    },
    {
      rule: "OCC Semiannual Risk Perspective, Spring 2026",
      authority: "occ",
      requirement: "Bank use of generative and agentic AI is 'primarily productivity and customer experience' tools with guardrails and human-in-the-loop accountability; banks may expand to material financial decisions, where governance is 'essential'.",
      docSlug: "occ-semiannual-risk-perspective-spring-2026",
      when: "May 7, 2026"
    },
    {
      rule: "FSB Sound Practice 10 (human oversight)",
      authority: "fsb",
      requirement: "Human oversight proportionate to autonomy, with additional measures for highly autonomous agentic AI; risks named include autonomous multi-step actions and agentic memory poisoning.",
      docSlug: "fsb-ai-sound-practices-consultation-2026",
      when: "Proposed; final Oct 2026"
    },
    {
      rule: "FPC Financial Stability in Focus + April 2026 Record",
      authority: "uk",
      requirement: "Generative and agentic AI not yet at systemically risky scale, but agentic AI 'presents particular risks' and the Bank and FCA were asked for further work on agents in payments and markets.",
      docSlug: "boe-fpc-fsif-ai-financial-system-2025"
    },
    {
      rule: "BoE / FCA 2026 AI survey",
      authority: "uk",
      requirement: "The first regulator survey to cover agentic AI explicitly; its results, expected later in 2026, will be the first supervisory dataset on agent deployment in banks.",
      docSlug: "uk-ai-in-financial-services-survey-2026",
      when: "Results late 2026"
    }
  ],
  detail: [
    "The practical shape of that answer is an operating model rather than a policy: an identity and entitlement per agent, an action gateway that limits what agents may do, entitlement-aware data access with lineage, a budgeted and sandboxed runtime, observability, and human escalation. The agents section of this site lays out that control plane layer by layer, with every regulator's documented position on agents and a lifecycle from use-case approval to retirement."
  ],
  practice: [
    "Adopt an autonomy ladder and require a named approver for every step up — it is the single control every supervisor's language maps to.",
    "Insist on a kill switch that revokes an agent's entitlements in one step, and test it.",
    "Ask whether new agents inherit the bank's controls by default or re-implement them; the answer tells you whether you have a platform or a pile of pilots."
  ]
};

/** Module 6 — the 30-day reading plan: four weeks, three primary documents each. */
export type ReadingWeek = { week: number; theme: string; goal: string; docs: { slug: string; take: string }[]; ask: string };

export const READING_PLAN: ReadingWeek[] = [
  {
    week: 1,
    theme: "The frame",
    goal: "Understand how supervisors think about AI risk before reading any single rule.",
    docs: [
      { slug: "fed-sr-26-2", take: "What is inside model risk management after April 2026 — and that generative and agentic AI are outside it." },
      { slug: "nist-ai-100-1", take: "The Govern–Map–Measure–Manage vocabulary your risk team is using, and the seven characteristics of trustworthy AI." },
      { slug: "fsb-ai-sound-practices-consultation-2026", take: "The 12 practices that will become the global checklist; read Practices 1–4 as if addressed to you, because they are." }
    ],
    ask: "Ask the CRO which of the 12 FSB practices the bank could evidence today."
  },
  {
    week: 2,
    theme: "What binds you",
    goal: "Know the law that already applies to AI decisions about your customers.",
    docs: [
      { slug: "cfpb-ecoa-regulation-b-adverse-action", take: "The 30-day specific-reasons duty that applies identically to a model and a human underwriter." },
      { slug: "eu-ai-act-regulation-2024-1689", take: "Why credit scoring is high-risk, what a deployer must do, and the December 2, 2027 date." },
      { slug: "ny-dfs-23-nycrr-part-500", take: "The certification you or your CISO sign, and the risk assessment that DFS's AI letters hang on." }
    ],
    ask: "Ask general counsel for the list of jurisdictions where the bank's AI decisions carry a notice or explanation duty."
  },
  {
    week: 3,
    theme: "The threat side",
    goal: "See AI as the attacker's tool, and know what regulators asked for in 2026.",
    docs: [
      { slug: "fincen-alert-2024-deepfake-media", take: "How deepfake identity documents defeat onboarding, and the red flags FinCEN lists." },
      { slug: "ecb-letter-ai-enabled-cybersecurity-threats-2026", take: "What an AI-cyber action plan must contain — measures, resources, named roles, timelines." },
      { slug: "fsb-chair-letter-g20-august-2026", take: "Why frontier models are now a financial-stability concern, and what firms are asked to do." }
    ],
    ask: "Ask the CISO how many days it takes to patch an internet-facing system, and what the target is."
  },
  {
    week: 4,
    theme: "Data, vendors, agents",
    goal: "Follow the dependencies: the data AI learns from, the providers it runs on, the agents it becomes.",
    docs: [
      { slug: "bcbs-239", take: "The 14 principles behind every supervisory question about the data feeding your models." },
      { slug: "bcbs-third-party-risk-principles-2025", take: "Board responsibility for third-party risk, now including nth-party supply chains and provider concentration." },
      { slug: "occ-semiannual-risk-perspective-spring-2026", take: "The regulator's own description of how banks are using generative and agentic AI, and where it sees the risk." }
    ],
    ask: "Ask the CIO which AI vendors are critical, and whether each has an exit plan that has been tested."
  }
];

/** FAQ entries that are not deep dives. */
export const FAQ: { q: string; a: string }[] = [
  {
    q: "Is there an AI regulation for banks?",
    a: "Not a single one. The EU AI Act is the only binding cross-sector AI law that reaches banks, and its high-risk obligations for credit scoring apply from December 2, 2027. Everywhere else, AI in banking is governed by existing law and guidance — fair lending, model risk, third-party risk, BSA/AML, cybersecurity — applied to AI systems, plus state laws such as Colorado's ADMT Act. This tracker follows 19 authorities and every document they have published on the subject."
  },
  {
    q: "Does the board need AI training?",
    a: "In the EU, supporting staff AI literacy has been a legal duty under Article 4 of the AI Act since February 2, 2025. In New York, DFS expects annual cybersecurity training to cover deepfakes and AI social engineering. The FSB's proposed practices treat skills and resourcing as a governance matter. None of these names the board specifically, but each is difficult to evidence if the board itself cannot describe the bank's AI risk in its own words — which is what this briefing is for."
  },
  {
    q: "How long does this briefing take?",
    a: "The page itself is a single sitting. The 30-day plan is twelve primary documents over four weeks — each has a standing page on this site with the direct answer first, the key points, and a link to the official source, so a reading takes minutes rather than an afternoon. The tracker's deadlines calendar and compliance checklist then keep the dated items current without any further reading."
  },
  {
    q: "How does this briefing stay current?",
    a: "The dates and deadlines on this page are computed daily from the tracker's document data, and every new regulatory document is added as a standing page the week it appears. The daily brief carries each regulatory move the morning after it happens; subscribing is the simplest way to keep this briefing current without re-reading it."
  }
];

/** Every document slug the briefing references — validated by `npm run tracker:check`. */
export const EXEC_BRIEFING_DOC_SLUGS: string[] = Array.from(
  new Set([
    ...CHANGES_2026.map((c) => c.slug),
    ...(BOARD_DEEP_DIVE.requirements ?? []).flatMap((r) => (r.docSlug ? [r.docSlug] : [])),
    ...(AGENT_DEEP_DIVE.requirements ?? []).flatMap((r) => (r.docSlug ? [r.docSlug] : [])),
    ...TEN_QUESTIONS.flatMap((q) => q.slugs),
    ...READING_PLAN.flatMap((w) => w.docs.map((d) => d.slug))
  ])
);

export const EXEC_BRIEFING_AUTHORITY_SLUGS: string[] = Array.from(new Set(FOOTPRINTS.flatMap((f) => f.authoritySlugs)));

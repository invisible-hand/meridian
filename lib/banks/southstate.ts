import type { Bank } from "@/lib/banks";

export const SOUTHSTATE: Bank = {
  slug: "southstate",
  name: "SouthState Bank",
  shortName: "SouthState",
  ticker: "SSB",
  hq: "Winter Haven, FL",
  fedRank: 39,
  leadBank: "SouthState Bank, N.A.",
  assetsUsdMillions: 67871,
  charter: "National bank (OCC)",
  posture: "A Southeast-to-Texas bank that runs AI adoption as change management: 95% of licensed staff active on Copilot, 200,000 prompts a month, and co-developed agents on Fiserv's agentOS due this summer.",
  platform: {
    name: "Copilot at scale, tested models, and Fiserv agentOS agents",
    detail: "SouthState approved only two generative-AI applications for employees, Microsoft Copilot and OpenAI's ChatGPT, after vendor due diligence and its own model tests: subject-matter experts write questions and expected answers, half aimed at accuracy and hallucinations, half at privacy, security, toxicity and jailbreaking, with retesting per use case and as often as monthly. Adoption is run as an organisational change programme by an AI Enablement Manager: premium Copilot licences grew from 300 at the start of 2026 to 1,800 and beyond, with an active-use rate of 95% against Microsoft's 85% benchmark, weekly office hours attended by hundreds, an intranet hub called AI Central with a recording library and a crowdsourced prompt library, and about 200,000 prompts a month. In May 2026 Fiserv named SouthState among the banks co-developing AI agents for its agentOS platform, with deployments beginning in summer 2026.",
    sources: ["ssb-podcast-2026", "ab-genai-vendors-2025", "ab-fiserv-2026"]
  },
  answerFirst:
    "SouthState, a $68 billion bank that closed its roughly $2 billion acquisition of Texas's Independent Bank Group in early 2025 to become one of the 50 largest US banks, is one of the more transparent regionals about how AI is actually adopted. Its approach to models is conservative: only Microsoft Copilot and OpenAI's ChatGPT are approved for employees, each put through vendor due diligence and then tested by subject-matter experts on accuracy, privacy, security, toxicity and jailbreak resistance, per use case and rechecked as models change. Its approach to people is methodical. An AI Enablement Manager, Walt Wear, describes Copilot rollout as 'an organizational change management problem': premium licences went from 300 at the start of 2026 to 1,800 and then higher, with 95% of licensed users active (above Microsoft's 85% target), hundreds attending weekly office hours, an AI Central intranet with recordings and a crowdsourced, categorised prompt library, and roughly 200,000 prompts a month. In May 2026 Fiserv listed SouthState among the banks co-developing agents for its agentOS agentic platform, built with OpenAI on AWS Bedrock, with deployments starting that summer; Chris Nichols, president of institutional banking, supports AI, digital assets, payments and fintech investing for the bank and has spoken on agentic AI as a new frontier. CEO John Corbett named 'building our artificial intelligence capabilities' among the bank's priorities in the second-quarter 2026 release, alongside balance-sheet growth, opportunistic hiring (32 producers added in January 2026) and buybacks. The bank also publishes consumer education on AI-enabled fraud and synthetic identities. Budgets, agent counts and headcount effects have not been disclosed.",
  keyPoints: [
    "Two approved gen-AI tools, tested like models: Copilot and ChatGPT only, after vendor due diligence and expert-written accuracy, privacy, security, toxicity and jailbreak tests, repeated per use case and up to monthly.",
    "Adoption by the numbers: premium Copilot licences 300 → 1,800+ during 2026, 95% active use versus Microsoft's 85% benchmark, ~200,000 prompts a month, hundreds at weekly office hours, an AI Central hub and a prompt library.",
    "Agents next: named by Fiserv in May 2026 as a co-developer of agents for agentOS (OpenAI, AWS Bedrock, 'bank-grade controls', kill switches), with deployments from summer 2026.",
    "AI is a stated corporate priority: 'building our artificial intelligence capabilities' sits beside balance-sheet growth and hiring in the CEO's second-quarter 2026 commentary.",
    "Scale and shape: Independent Bank Group acquired (~$2 billion, Fed-approved December 2024) for a Texas footprint; 170 branches sold and leased back for about $475 million; 32 revenue producers hired in January 2026.",
    "Leadership: CEO John Corbett; president Richard Murray; Chris Nichols (president, institutional banking) as the AI and digital-assets voice; a former CIO, Martin Davis, on the board."
  ],
  leadership: [
    { name: "John Corbett", role: "Chief Executive Officer", sources: ["ft-q2-2026"], linkedin: "https://www.linkedin.com/in/john-corbett-b24a1813/" },
    { name: "Richard Murray", role: "President", sources: ["ssb-talent-2026"] },
    { name: "Chris Nichols", role: "President, Institutional Banking; supports AI, digital assets, payments and fintech investing", sources: ["ab-nichols-2026", "ab-genai-vendors-2025"], linkedin: "https://www.linkedin.com/in/cknichols/" },
    { name: "Walt Wear", role: "AI Enablement Manager", sources: ["ssb-podcast-2026"], linkedin: "https://www.linkedin.com/in/walter-wear/" },
    { name: "Martin Davis", role: "Board member; former chief information officer", sources: ["ssb-davis-2026"] }
  ],
  timeline: [
    { date: "2025-01-14", title: "Model testing before approval", detail: "Only Copilot and ChatGPT approved; expert-written accuracy and safety tests per use case.", sources: ["ab-genai-vendors-2025"] },
    { date: "2025-01-14", title: "Branch sale-leaseback; Independent Bank Group approved", detail: "About 170 branches sold to Blue Owl for roughly $475 million; the Fed cleared the ~$2 billion Texas deal in December 2024.", sources: ["bankingdive-leaseback-2025"] },
    { date: "2025-03-20", title: "Gen-AI use policy in place of bans", detail: "Some public gen-AI uses remain off limits, per the bank's capital-markets head.", sources: ["ab-policies-2025"] },
    { date: "2026-01-14", title: "Consumer guide to AI fraud and synthetic identities", detail: "How AI makes scams more convincing and what customers should do.", sources: ["ssb-ai-fraud-2026"] },
    { date: "2026-01-21", title: "32 revenue producers hired", detail: "Commercial, mortgage and wealth bankers across Denver, Dallas, Atlanta and other markets.", sources: ["ssb-talent-2026"] },
    { date: "2026-02-20", title: "A former CIO on the board", detail: "Martin Davis's technology background on the strategic direction of the bank.", sources: ["ssb-davis-2026"] },
    { date: "2026-05-14", title: "Co-developing agents on Fiserv's agentOS", detail: "Alongside City National, Bank OZK and Salem Five; deployments from summer 2026.", sources: ["ab-fiserv-2026", "ft-agentos-2026"] },
    { date: "2026-07-23", title: "'Building our artificial intelligence capabilities' named a priority", detail: "Second-quarter 2026 results; efficiency improved, dividend raised.", sources: ["ft-q2-2026"] },
    { date: "2026-08-03", title: "Copilot adoption at 95%", detail: "Licences from 300 to 1,800-plus; ~200,000 prompts a month; office hours, AI Central and a prompt library.", sources: ["ssb-podcast-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Microsoft Copilot across the workforce", detail: "1,800-plus premium licences at 95% active use; ~200,000 prompts a month.", status: "In production", sources: ["ssb-podcast-2026"] },
    { useCase: "model-risk", name: "Per-use-case model testing", detail: "Expert Q&A sets for accuracy, privacy, security, toxicity and jailbreaks; retested as models change.", status: "In production", sources: ["ab-genai-vendors-2025"] },
    { useCase: "generative-agentic-ai", name: "Co-developed agents on Fiserv agentOS", detail: "Agents within a controlled architecture with governance, audit trails and kill switches.", status: "Pilot", sources: ["ab-fiserv-2026"] },
    { useCase: "fraud", name: "AI-fraud and synthetic-identity education", detail: "Customer guidance on AI-enabled scams.", status: "In production", sources: ["ssb-ai-fraud-2026"] },
    { useCase: "governance-general", name: "AI enablement programme", detail: "Office hours, AI Central hub, crowdsourced prompt library; adoption run as change management.", status: "In production", sources: ["ssb-podcast-2026"] }
  ],
  numbers: [
    { label: "Premium Copilot licences", value: "300 → 1,800+ (2026)", asOf: "2026-08-03", sources: ["ssb-podcast-2026"] },
    { label: "Active-use rate (Microsoft benchmark 85%)", value: "95%", asOf: "2026-08-03", sources: ["ssb-podcast-2026"] },
    { label: "Prompts per month", value: "≈ 200,000", asOf: "2026-08-03", sources: ["ssb-podcast-2026"] },
    { label: "Approved generative-AI applications", value: "2 (Copilot, ChatGPT)", asOf: "2025-01-14", sources: ["ab-genai-vendors-2025"] },
    { label: "Independent Bank Group deal / combined assets", value: "≈ $2 billion / ≈ $65 billion", asOf: "2025-01-14", sources: ["bankingdive-leaseback-2025"] }
  ],
  quotes: [
    { who: "Walt Wear", role: "AI Enablement Manager", date: "2026-08-03", quote: "As soon as I was tasked with Copilot enablement, my first thought was, this is an organizational change management problem.", sources: ["ssb-podcast-2026"] },
    { who: "Chris Nichols", role: "Director of Capital Markets (now President, Institutional Banking)", date: "2025-01-14", quote: "It is important to note here that we test a model for a particular use case and not just the model. Thus, if we use the same model for something else, we need to retest.", sources: ["ab-genai-vendors-2025"] },
    { who: "John Corbett", role: "Chief Executive Officer", date: "2026-07-23", quote: "We continue to make progress on our priorities of balance sheet growth, opportunistic hiring, active share repurchases and building our artificial intelligence capabilities.", sources: ["ft-q2-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "SouthState Bank is a national bank; its per-use-case model testing is the practical form of the OCC's model-risk expectations, and agentOS agents will be examined under the gen-AI risk perspective.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "federal-reserve", why: "Fiserv, Microsoft and OpenAI are third-party relationships for the holding company under interagency guidance.", docSlugs: ["fed-sr-23-4", "fed-sr-26-2"] },
    { authority: "cfpb", why: "Consumer banking across the Southeast and Texas keeps UDAAP, chatbot guidance and adverse-action rules in scope as agents move toward customers.", docSlugs: ["cfpb-chatbots-in-consumer-finance-2023", "cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "nist", why: "Testing for toxicity and jailbreaks maps to the NIST generative-AI profile.", docSlugs: ["nist-ai-600-1"] }
  ],
  suggestions: [
    { title: "Adoption metrics are the disclosure peers lack", detail: "Licence counts, active-use rates and prompts per month are exactly what boards and examiners ask for; SouthState publishes them on its own podcast and could carry them into investor materials." },
    { title: "Per-use-case testing is a model-risk policy in plain language", detail: "Retesting the same model for each new use, monthly if needed, is the discipline the OCC bulletin asks for; it is also what will make agentOS agents approvable." },
    { title: "Fiserv's agents will be the first customer-adjacent AI", detail: "Co-developing on a core vendor's platform trades control for speed; the bank's own testing regime should apply to agents it did not build." },
    { title: "Change management is a competitive edge, not overhead", detail: "A 95% active-use rate says more about return on AI licences than any pilot; the office-hours-and-prompt-library model is replicable at any bank." }
  ],
  faq: [
    { q: "How widely does SouthState use AI?", a: "By August 2026 its premium Microsoft Copilot licences had grown from 300 to more than 1,800 with a 95% active-use rate, about 200,000 prompts a month, weekly office hours attended by hundreds, an AI Central intranet hub and a crowdsourced prompt library, according to its AI Enablement Manager. Only Copilot and ChatGPT are approved for employees." },
    { q: "Is SouthState building AI agents?", a: "It is co-developing agents on Fiserv's agentOS platform, announced in May 2026 and built with OpenAI on AWS Bedrock with governance, audit and kill-switch controls, with deployments beginning in summer 2026. The CEO named building AI capabilities among the bank's priorities in July 2026." }
  ],
  sources: [
    { id: "ssb-podcast-2026", title: "The Playbook for Enterprise AI Adoption with Walt Wear (Community Bank Podcast)", publisher: "SouthState Correspondent Division", url: "https://southstatecorrespondent.com/podcast/the-playbook-for-enterprise-ai-adoption-with-walt-wear", date: "2026-08-03" },
    { id: "ssb-ai-fraud-2026", title: "Understanding AI Fraud: What You Need to Know", publisher: "SouthState Bank", url: "https://southstatebank.com/personal/stories-and-insights/understanding-ai-fraud-what-you-need-to-know", date: "2026-01-14" },
    { id: "ssb-davis-2026", title: "Leading Others Through a Technology Lens", publisher: "SouthState Bank", url: "https://southstatebank.com/global/about/stories-and-insights/leadership-through-a-technology-lens", date: "2026-02-20" },
    { id: "ssb-talent-2026", title: "SouthState Accelerates Growth with Strategic Talent Acquisition", publisher: "SouthState Bank", url: "https://southstatebank.com/global/about/stories-and-insights/southstate-accelerates-growth-with-strategic-talen", date: "2026-01-21" },
    { id: "ab-genai-vendors-2025", title: "6 things banks look for in gen AI models and companies", publisher: "American Banker", url: "https://americanbanker.com/news/6-things-banks-look-for-in-gen-ai-models-and-companies", date: "2025-01-14" },
    { id: "ab-policies-2025", title: "Banks navigate workers' use of ChatGPT, set AI policies", publisher: "American Banker", url: "https://www.americanbanker.com/news/banks-navigate-workers-use-of-chatgpt-set-ai-policies", date: "2025-03-20" },
    { id: "ab-fiserv-2026", title: "Fiserv has co-created AI agents with six banks and OpenAI", publisher: "American Banker", url: "https://americanbanker.com/news/fiserv-has-co-created-ai-agents-with-six-banks-and-openai", date: "2026-05-14" },
    { id: "ab-nichols-2026", title: "Chris Nichols, President, Institutional Banking, SouthState Bank (speaker profile)", publisher: "American Banker", url: "https://small-business-banking.americanbanker.com/profile/chris-nichols", date: "2026-05-27" },
    { id: "bankingdive-leaseback-2025", title: "SouthState to sell 170 branches in $475M lease-back deal", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/southstate-to-sell-170-branches-in-475m-lease-back-deal/737315/", date: "2025-01-14" },
    { id: "ft-q2-2026", title: "SouthState Bank Corporation Reports Second Quarter 2026 Results, Declares an Increase in the Quarterly Cash Dividend", publisher: "PR Newswire via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202607231618PR_NEWS_USPRX____CL11246-1", date: "2026-07-23" },
    { id: "ft-agentos-2026", title: "Fiserv Launches agentOS: The Operating System for Agentic AI in Banking", publisher: "GlobeNewswire via FT Markets", url: "https://markets-data-api-proxy.ft.com/data/announce/detail?dockey=1330-9720168en-4LJN4EPGO0K6J4L2SCCECO1O5B", date: "2026-05-14" }
  ],
  lastUpdated: "2026-09-10"
};

import type { Bank } from "@/lib/banks";

export const HSBC_USA: Bank = {
  slug: "hsbc-usa",
  name: "HSBC USA",
  shortName: "HSBC",
  ticker: "HSBC",
  hq: "New York, NY (US); London (group)",
  fedRank: 25,
  leadBank: "HSBC Bank USA, N.A.",
  assetsUsdMillions: 167706,
  charter: "National bank (OCC); subsidiary of HSBC Holdings plc",
  posture: "The US arm of a group whose CEO calls generative AI its biggest technology investment, with a chief AI officer since April 2026, a Google Cloud deal targeting 200 use cases, and job cuts on the table.",
  platform: {
    name: "The group AI programme: Google Cloud, Mistral and a central model platform",
    detail: "HSBC's AI strategy is set in London and lands in the United States through the group's platforms. In February 2026 CEO Georges Elhedery told investors generative AI was 'definitely' the biggest destination for new technology investment, with 85% of employees given gen-AI tools and 50 processes, including fraud detection and credit applications, being redesigned. David Rice became the group's first chief AI officer on 1 April 2026 while CTO Mario Shamtani took on building a central AI platform for employee access to models. On 17 June 2026 the group signed a multi-year Google Cloud partnership for more than 200 new AI use cases over two years, some each worth over $100 million in revenue or savings; a December 2025 deal with Mistral AI supplies models for the same programme.",
    sources: ["bankingdive-caio-2026", "bankingdive-genai-2026", "bloomberg-google-2026", "ft-mistral-2025"]
  },
  answerFirst:
    "HSBC Bank USA is a national bank inside a global group whose AI ambitions are set at the top. On the fourth-quarter 2025 call in February 2026, group CEO Georges Elhedery said the biggest new technology investment was 'definitely' going into generative AI, that 85% of employees had gen-AI productivity tools, that 50 processes including fraud detection and credit applications were being redesigned, and that coding assistants were patching vulnerabilities five times faster. In March 2026 the group named David Rice its first chief AI officer (effective 1 April) and widened CTO Mario Shamtani's remit to a central AI platform; the same month Bloomberg reported HSBC was weighing deep, multi-year job cuts in middle and back offices as AI takes on the work. On 17 June 2026 HSBC and Google Cloud announced a multi-year partnership for more than 200 AI use cases over two years, each targeted at over $100 million of revenue or savings, building on a December 2025 Mistral AI agreement. The US business, led by CEO Jason Henderson since December 2025, shows up in three concrete ways: HSBC expanded its Tokenised Deposit Service to the United States on 13 April 2026, it was the partner bank for Mastercard's first agentic payment in Hong Kong, and its US wealth arm published research in June 2026 finding that 57% of affluent US investors use AI for financial tasks but only 7% say AI drove their last major decision. HSBC is also one of eight firms behind a July 2026 white paper on runtime safeguards for agentic finance. US-specific AI deployments, budgets and headcount are not disclosed separately from the group.",
  keyPoints: [
    "Group priority: 'the biggest investment going into the new technology today … is definitely going into generative AI' (CEO, February 2026); 85% of employees have gen-AI tools; 50 processes under redesign; code patching five times faster with AI assistants.",
    "A chief AI officer: David Rice, an 18-year HSBC veteran, from 1 April 2026; CTO Mario Shamtani builds the central AI platform for employee access to models.",
    "Google Cloud (June 2026): 200-plus new AI use cases over two years, some each worth more than $100 million; Mistral AI (December 2025) supplies models alongside.",
    "Jobs: Bloomberg reported in March 2026 that HSBC was weighing deep multi-year cuts to middle- and back-office roles as AI absorbs the work; the CEO says AI will destroy and create jobs and the bank is retraining staff.",
    "US touchpoints: Tokenised Deposit Service extended to the United States (April 2026); partner bank for Mastercard's first agentic payment; a US investor survey on AI and trust (June 2026); a co-author of the SAFR agentic-finance safeguards paper (July 2026).",
    "US leadership: Jason Henderson became US CEO in December 2025 after Lisa McGeough's eight-month tenure; Racquel Oden runs US international wealth and private banking."
  ],
  leadership: [
    { name: "Jason Henderson", role: "Chief Executive Officer, HSBC USA (from December 2025)", sources: ["bankingdive-henderson-2025"] },
    { name: "Georges Elhedery", role: "Group Chief Executive, HSBC Holdings", sources: ["bankingdive-genai-2026", "bankingdive-caio-2026"] },
    { name: "David Rice", role: "Group Chief AI Officer (from 1 April 2026)", sources: ["bankingdive-caio-2026"], linkedin: "https://www.linkedin.com/in/david-rice-845931145/" },
    { name: "Mario Shamtani", role: "Group Chief Technology Officer; central AI platform", sources: ["bankingdive-caio-2026"] },
    { name: "Racquel Oden", role: "Head of International Wealth Management and Private Banking, US", sources: ["ft-trust-2026"] },
    { name: "Tom Halpin", role: "Head of Global Payments Solutions, North America", sources: ["bankingdive-halpin-2026"] }
  ],
  timeline: [
    { date: "2025-10-21", title: "Marrying AI with accountability in payments", detail: "A look at how HSBC frames AI in global money movement: data, regulation and risk as one choreography.", sources: ["pymnts-accountability-2025"] },
    { date: "2025-12-01", title: "Mistral AI deal", detail: "A multi-year agreement to integrate the French lab's models across the bank.", sources: ["ft-mistral-2025"] },
    { date: "2025-12-09", title: "Jason Henderson confirmed as US CEO", detail: "The interim chief since August takes the role permanently, reporting to the corporate and institutional banking CEO.", sources: ["bankingdive-henderson-2025"] },
    { date: "2026-02-25", title: "Gen AI named the biggest technology investment", detail: "85% of employees have gen-AI tools; 50 processes being redesigned; contact-centre tools rolled out.", sources: ["bankingdive-genai-2026"] },
    { date: "2026-03-19", title: "Deep AI-driven job cuts weighed", detail: "Bloomberg: the CEO bets on AI to shrink middle and back offices over several years.", sources: ["bloomberg-cuts-2026"] },
    { date: "2026-03-23", title: "First chief AI officer appointed", detail: "David Rice from 1 April; CTO Shamtani's role expanded to a central AI platform.", sources: ["bankingdive-caio-2026"] },
    { date: "2026-04-01", title: "Partner bank for Mastercard's agentic payment in Hong Kong", detail: "An AI agent books and pays for an airport ride share using Mastercard's agent-authorisation protocol.", sources: ["ab-agentic-2026"] },
    { date: "2026-04-13", title: "Tokenised Deposit Service comes to the United States", detail: "The platform piloted in other markets is extended to US corporate clients.", sources: ["pymnts-tds-2026"] },
    { date: "2026-06-17", title: "Google Cloud partnership", detail: "More than 200 AI use cases over two years; projects that can each generate over $100 million.", sources: ["bloomberg-google-2026", "pymnts-google-2026"] },
    { date: "2026-06-24", title: "US investors use AI to explore, not to decide", detail: "HSBC research: 57% of affluent US investors use AI for financial tasks, 7% say it drove their last major decision.", sources: ["ft-trust-2026"] },
    { date: "2026-07-03", title: "SAFR: safeguards for agentic finance at runtime", detail: "HSBC is one of eight firms behind the white paper with JPMorganChase, Mastercard and others.", sources: ["pymnts-safr-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Gen-AI productivity tools for 85% of staff", detail: "Employee assistance and coding assistants; five times faster vulnerability patching.", status: "In production", sources: ["bankingdive-genai-2026"] },
    { useCase: "fraud", name: "AI-redesigned fraud detection and credit applications", detail: "Among 50 processes under end-to-end redesign.", status: "Rolling out", sources: ["bankingdive-genai-2026"] },
    { useCase: "customer-chatbots", name: "Contact-centre AI tools", detail: "Rolled out to improve customer experience, per the group CEO.", status: "In production", sources: ["bankingdive-genai-2026", "bankingdive-caio-2026"] },
    { useCase: "generative-agentic-ai", name: "Agentic payments (Mastercard)", detail: "Partner bank for AI-agent-initiated payments; co-author of runtime safeguards for agentic finance.", status: "Pilot", sources: ["ab-agentic-2026", "pymnts-safr-2026"] },
    { useCase: "generative-agentic-ai", name: "Google Cloud use-case programme", detail: "200-plus use cases over two years starting with wealth management.", status: "Announced", sources: ["bloomberg-google-2026"] }
  ],
  numbers: [
    { label: "Employees with gen-AI tools", value: "85%", asOf: "2026-02-25", sources: ["bankingdive-genai-2026"] },
    { label: "Processes under AI redesign", value: "50", asOf: "2026-02-25", sources: ["bankingdive-genai-2026"] },
    { label: "Google Cloud programme", value: "200+ use cases in two years; projects each > $100 million", asOf: "2026-06-17", sources: ["bloomberg-google-2026"] },
    { label: "US affluent investors using AI for financial tasks / citing it as decisive", value: "57% / 7%", asOf: "2026-06-24", sources: ["ft-trust-2026"] },
    { label: "Vulnerability patching speed with coding assistants", value: "5× faster", asOf: "2026-02-25", sources: ["bankingdive-genai-2026"] }
  ],
  quotes: [
    { who: "Georges Elhedery", role: "Group Chief Executive", date: "2026-02-25", quote: "If you ask me, 'Where is the biggest investment going into the new technology today,' it is definitely going into generative AI.", sources: ["bankingdive-genai-2026"] },
    { who: "Georges Elhedery", role: "Group Chief Executive", date: "2026-03-23", quote: "We will empower our colleagues to use AI to create a personalized experience for each customer, deliver it safely, in real time and at scale, while keeping human judgment, decision-making and accountability at the core.", sources: ["bankingdive-caio-2026"] },
    { who: "Racquel Oden", role: "Head of International Wealth Management and Private Banking, US", date: "2026-06-24", quote: "The future of wealth management isn't about choosing between technology and people; it's about combining the power of AI with the insight and trust that only a financial professional can provide.", sources: ["ft-trust-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "HSBC Bank USA is a national bank; group AI platforms used by US staff and in US credit and fraud processes fall under the OCC's model-risk and gen-AI expectations.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "federal-reserve", why: "HSBC North America Holdings is the US intermediate holding company; Google Cloud and Mistral are third-party relationships for the US entity.", docSlugs: ["fed-sr-23-4", "fed-sr-26-2"] },
    { authority: "uk", why: "Group AI strategy, the chief AI officer and the job-cut plans are governed from London under PRA and FCA expectations.", docSlugs: ["pra-ss1-23-model-risk-management", "fca-ai-update-2024", "uk-ai-in-financial-services-survey-2026"] },
    { authority: "fsb", why: "A G-SIB deploying AI at group scale sits squarely in the FSB's sound-practices consultation.", docSlugs: ["fsb-ai-sound-practices-consultation-2026"] }
  ],
  suggestions: [
    { title: "US disclosure lags the group narrative", detail: "Everything quantified — 85% adoption, 50 processes, 200 use cases — is a group figure. US examiners will want the US slice: which models, which processes, which controls live in HSBC Bank USA." },
    { title: "Agentic payments put the US bank at the front of a new perimeter", detail: "Being Mastercard's partner bank and a SAFR co-author means the entity is early on agent authorisation, exactly where consumer-protection and liability questions have no settled answer." },
    { title: "The job-cut story will follow AI into every conversation", detail: "A group weighing multi-year headcount reductions tied to AI faces a narrative risk in the US, where regulators and Congress are watching AI-attributed layoffs closely." },
    { title: "The wealth survey is a strategy statement", detail: "Publishing that 7% of US investors let AI decide is HSBC arguing for hybrid advice; the Google programme's first area is wealth, so that argument will be tested quickly." }
  ],
  faq: [
    { q: "Who leads AI at HSBC?", a: "David Rice became HSBC's first group chief AI officer on 1 April 2026, after 18 years at the bank and most recently as COO of corporate and institutional banking. Chief technology officer Mario Shamtani builds the central AI platform, and group CEO Georges Elhedery sets the priority. The US business is led by CEO Jason Henderson." },
    { q: "What is HSBC's deal with Google Cloud?", a: "A multi-year partnership announced on 17 June 2026 to roll AI across HSBC's global operations, enabling more than 200 new AI use cases over two years, with projects that can each generate over $100 million in extra revenue or savings. It sits alongside a December 2025 agreement with Mistral AI." }
  ],
  sources: [
    { id: "bankingdive-caio-2026", title: "HSBC introduces AI role to the C-suite", publisher: "Banking Dive", url: "https://bankingdive.com/news/hsbc-david-rice-ai-chief-cto-mario-shamtani-expanded-role-elhedery/815655", date: "2026-03-25" },
    { id: "bankingdive-genai-2026", title: "HSBC names generative AI a leading investment area", publisher: "Banking Dive", url: "https://bankingdive.com/news/hsbc-generative-ai-leading-investment-elhedery/813353", date: "2026-02-27" },
    { id: "bankingdive-henderson-2025", title: "HSBC taps interim US CEO for permanent role", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/hsbc-jason-henderson-us-ceo-interim-roberts-mcgeough-nelson/807433/", date: "2025-12-09" },
    { id: "bankingdive-halpin-2026", title: "HSBC exec opens up on what drives real-time payment growth", publisher: "Banking Dive", url: "https://bankingdive.com/news/hsbc-tom-halpin-what-drives-real-time-payment-growth/818458", date: "2026-04-24" },
    { id: "bloomberg-google-2026", title: "HSBC Expects Over $100 Million Gains From Using Google AI Tools", publisher: "Bloomberg", url: "https://bloomberg.com/news/articles/2026-06-17/hsbc-google-ai-partnership-set-to-add-over-100-million-gains", date: "2026-06-17" },
    { id: "bloomberg-cuts-2026", title: "HSBC Mulls Deep Job Cuts From Multiyear AI-Fueled Overhaul", publisher: "Bloomberg", url: "https://bloomberg.com/news/articles/2026-03-19/hsbc-mulls-deep-job-cuts-from-multiyear-ai-fueled-overhaul", date: "2026-03-19" },
    { id: "ft-mistral-2025", title: "HSBC signs deal to use Mistral's AI tools", publisher: "Financial Times", url: "https://ft.com/content/7b8e4ea8-ae17-4ada-9117-9f859589ce1d", date: "2025-12-01" },
    { id: "ft-trust-2026", title: "The Trust Threshold: The Majority of U.S. Investors Use AI To Explore, But Only 7% Say It Drove Their Last Major Decision", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202606241300BIZWIRE_USPRX____20260624_BW836719-1", date: "2026-06-24" },
    { id: "ab-agentic-2026", title: "US card networks accelerate bets on agentic AI", publisher: "American Banker", url: "https://americanbanker.com/payments/news/visa-mastercard-expand-agentic-ai-deployments", date: "2026-04-02" },
    { id: "pymnts-tds-2026", title: "Banks Bet Big on Tokenized Deposits to Power Real-Time Treasury", publisher: "PYMNTS", url: "https://www.pymnts.com/blockchain/2026/banks-bet-big-on-tokenized-deposits-to-power-real-time-treasury/", date: "2026-04-14" },
    { id: "pymnts-google-2026", title: "HSBC Expands Cloud AI Partnership With Google", publisher: "PYMNTS", url: "https://pymnts.com/cpi-posts/hsbc-expands-cloud-ai-partnership-with-google", date: "2026-06-17" },
    { id: "pymnts-safr-2026", title: "Your Bank's AI Agent May Need a Permission Slip", publisher: "PYMNTS", url: "https://pymnts.com/news/artificial-intelligence/2026/bank-ai-agents-may-need-permission-slip", date: "2026-08-12" },
    { id: "pymnts-accountability-2025", title: "Inside HSBC's Push to Marry AI With Accountability", publisher: "PYMNTS", url: "https://pymnts.com/news/international/global-payments/2025/inside-hsbcs-push-to-marry-ai-with-accountability", date: "2025-10-21" }
  ],
  lastUpdated: "2026-09-10"
};

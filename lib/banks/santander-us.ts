import type { Bank } from "@/lib/banks";

export const SANTANDER_US: Bank = {
  slug: "santander-us",
  name: "Santander US",
  shortName: "Santander",
  ticker: "SAN",
  hq: "Boston, MA (US); Madrid (group)",
  fedRank: 29,
  leadBank: "Santander Bank, N.A.",
  assetsUsdMillions: 106095,
  charter: "National bank (OCC); subsidiary of Banco Santander, S.A.",
  posture: "A Spanish group that has put a €1 billion price on AI by 2028 and just bought Webster to become a top-20 US bank — with Openbank, agentic commerce and AI for all 185,000 employees as the levers.",
  platform: {
    name: "ONE Transformation: shared platforms, AI for every employee, agentic commerce",
    detail: "Santander's AI sits inside ONE Transformation, the group programme to run common technology platforms across its markets. At the February 2026 investor day the executive chair put a number on it: AI should add about €300 million of revenue and cut about €700 million of costs by 2028, more than €1 billion in all, through customer 'primacy', cross-selling and agentic commerce. In June 2026 the group extended AI tools to all its employees toward that target, and its merchant platform Getnet began accepting payments initiated by AI agents. In the United States the strategy lands through Openbank, the digital bank that gathered $6 billion of deposits in its first year, and through the $12.3 billion Webster acquisition completed on 20 August 2026.",
    sources: ["bloomberg-botin-2026", "pymnts-allworkers-2026", "pymnts-getnet-2026", "bankingdive-webster-mgmt-2026", "ft-webster-close-2026"]
  },
  answerFirst:
    "Santander's US bank is in the middle of the group's biggest bet on America, and its AI story is the group's. At the 25 February 2026 investor day in London, executive chair Ana Botín said AI would contribute more than €1 billion to the 2028 targets: roughly €300 million of extra revenue and €700 million of lower costs, achieved through customer primacy, cross-selling and agentic commerce, inside ONE Transformation, the programme that scales common technology platforms across the group. On 22 June 2026 the group extended AI tools to all of its employees, and in the same month its Getnet merchant platform began accepting payments initiated by AI agents. Group profit targets (above €20 billion by 2028) and a US return-on-tangible-equity goal of 18% by 2028, up from 10% in 2025, are meant to be delivered partly by that programme. The US-specific record is about scale and digital distribution: Openbank, the digital bank launched in the United States in 2024, reached $6 billion of deposits in its first year; the $12.3 billion Webster Financial acquisition, announced on 3 February 2026 and completed on 20 August after OCC, ECB and Fed approvals, makes Santander a top-20 US bank with nearly eight million customers, Webster's CEO John Ciulla running Santander Bank, N.A., and Santander's head of product and platforms, Drew Burchard, in charge of digital banking. Santander US also publishes quarterly consumer research: nine in ten middle-income households see AI helping them reach financial prosperity, half of car buyers are using AI in the purchase, but most still want in-person support for major decisions. US-specific AI deployments, budgets and headcount are not disclosed separately.",
  keyPoints: [
    "A priced AI target: about €300 million of revenue and €700 million of cost savings by 2028, over €1 billion in total, set by the executive chair at the February 2026 investor day, alongside a group profit target above €20 billion.",
    "AI for every employee (June 2026) and agentic commerce through Getnet, which now accepts AI-agent-initiated payments; ONE Transformation supplies the shared platforms.",
    "The US bet: Webster acquired for $12.3 billion (announced 3 February, closed 20 August 2026), creating a top-20 US bank with about $327 billion of combined assets at announcement and nearly eight million customers; US RoTE target 18% by 2028.",
    "Digital distribution: Openbank took in $6 billion of deposits in its first US year; a Verizon partnership brings in customers; Drew Burchard runs digital banking for the combined bank after Openbank chief Swati Bhatia's exit.",
    "Consumer research as AI voice: 9 in 10 middle-income households see AI helping their finances; 49% of car buyers use AI in the purchase; households still value in-person support for major decisions (2026 surveys).",
    "Leadership: Christiana Riley is US country head and CEO of Santander Holdings USA; John Ciulla (ex-Webster) is CEO of Santander Bank, N.A.; the US tech chief Dan Griffiths left for USAA in February 2026."
  ],
  leadership: [
    { name: "Christiana Riley", role: "CEO, Santander US and US country head", sources: ["bankingdive-webster-2026", "ft-webster-close-2026"], linkedin: "https://www.linkedin.com/in/christiana-riley/" },
    { name: "John Ciulla", role: "CEO, Santander Bank, N.A. (from the Webster acquisition; former Webster CEO)", sources: ["bankingdive-webster-2026"], linkedin: "https://www.linkedin.com/in/john-r-ciulla/" },
    { name: "Ana Botín", role: "Executive Chair, Banco Santander", sources: ["bloomberg-botin-2026", "ab-graveyard-2026"], linkedin: "https://www.linkedin.com/in/anabotin/" },
    { name: "Drew Burchard", role: "Head of Digital Banking, combined bank (formerly head of product and platforms)", sources: ["bankingdive-webster-mgmt-2026"], linkedin: "https://www.linkedin.com/in/drew-burchard-4670bb15/" },
    { name: "Swati Bhatia", role: "Former head of Openbank US and US retail (left June 2026)", sources: ["bankingdive-webster-mgmt-2026"], linkedin: "https://www.linkedin.com/in/bhatiaswati/" }
  ],
  timeline: [
    { date: "2025-02-03", title: "Christiana Riley named US CEO", detail: "Part of a global restructuring that removed the regional divisions.", sources: ["bankingdive-riley-2025"] },
    { date: "2025-03-17", title: "Verizon partnership to win US customers", detail: "A push to expand US operations through embedded distribution.", sources: ["wsj-verizon-2025"] },
    { date: "2025-10-29", title: "US profit up 64% on Openbank funding and fees", detail: "Third-quarter results attribute the gain to lower funding costs from the digital lender.", sources: ["reuters-q3-2025"] },
    { date: "2025-12-01", title: "Deepfake ads made on purpose", detail: "The UK unit creates fake AI ads to teach customers what to watch for; 74% could not spot one.", sources: ["ab-fakeads-2025"] },
    { date: "2026-01-29", title: "Middle-income Americans see AI helping their finances", detail: "Santander US research: 9 in 10 see opportunities, 60% within the year; 49% of car buyers use AI.", sources: ["santander-survey-2026"] },
    { date: "2026-02-03", title: "Agrees to buy Webster for $12.3 billion", detail: "Riley stays US country head; Webster's Ciulla to run Santander Bank, N.A.", sources: ["bankingdive-webster-2026", "reuters-webster-2026"] },
    { date: "2026-02-06", title: "US technology chief leaves for USAA", detail: "Dan Griffiths becomes USAA's CIO.", sources: ["bankingdive-griffiths-2026"] },
    { date: "2026-02-25", title: "€1 billion from AI by 2028", detail: "Investor day: €300 million revenue, €700 million costs; profit above €20 billion; US RoTE 18%.", sources: ["bloomberg-botin-2026", "pymnts-transformation-2026", "ab-graveyard-2026"] },
    { date: "2026-04-06", title: "Post-deal management named", detail: "Burchard to lead digital banking; Bhatia to leave; Webster's Motl to lead commercial.", sources: ["bankingdive-webster-mgmt-2026"] },
    { date: "2026-06-09", title: "Getnet accepts AI-agent payments", detail: "The group's merchant platform opens to agentic commerce.", sources: ["pymnts-getnet-2026"] },
    { date: "2026-06-22", title: "AI tools for all employees", detail: "Toward the €1 billion 2026–2028 business-value goal.", sources: ["pymnts-allworkers-2026"] },
    { date: "2026-08-04", title: "Fed approval completes the regulatory set", detail: "After the OCC and ECB; the deal to close on 20 August.", sources: ["ab-fed-approval-2026"] },
    { date: "2026-08-20", title: "Webster acquisition completed", detail: "Nearly eight million US customers; an expanded Northeast footprint.", sources: ["ft-webster-close-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "AI tools for all employees (group)", detail: "Extended to the whole workforce in June 2026 toward the €1 billion value target.", status: "In production", sources: ["pymnts-allworkers-2026"] },
    { useCase: "generative-agentic-ai", name: "Agentic commerce via Getnet", detail: "Merchants can accept payments initiated by AI agents.", status: "In production", sources: ["pymnts-getnet-2026"] },
    { useCase: "customer-chatbots", name: "Hyper-personalised customer journeys (ONE Transformation)", detail: "Data and AI embedded in the businesses for cross-selling and primacy.", status: "Rolling out", sources: ["pymnts-transformation-2026", "bloomberg-botin-2026"] },
    { useCase: "fraud", name: "Deepfake-scam education and AI fraud models", detail: "Purpose-built fake AI ads in the UK; consumer education in the US.", status: "In production", sources: ["ab-fakeads-2025"] },
    { useCase: "customer-chatbots", name: "Openbank digital banking", detail: "The digital bank that gathered $6 billion of US deposits in its first year.", status: "In production", sources: ["bankingdive-webster-mgmt-2026", "reuters-q3-2025"] }
  ],
  numbers: [
    { label: "AI contribution to 2028 targets", value: "> €1 billion: ≈ €300m revenue, ≈ €700m cost", asOf: "2026-02-25", sources: ["bloomberg-botin-2026"] },
    { label: "Webster acquisition", value: "$12.3 billion; ≈ $327 billion combined assets at announcement", asOf: "2026-02-03", sources: ["bankingdive-webster-2026"] },
    { label: "US customers after the deal", value: "≈ 8 million", asOf: "2026-08-20", sources: ["ft-webster-close-2026"] },
    { label: "Openbank US deposits, first year", value: "$6 billion", asOf: "2026-04-06", sources: ["bankingdive-webster-mgmt-2026"] },
    { label: "US return on tangible equity target", value: "18% by 2028 (from 10% in 2025)", asOf: "2026-02-25", sources: ["ab-graveyard-2026"] },
    { label: "Middle-income households seeing AI helping their finances", value: "9 in 10", asOf: "2026-01-29", sources: ["santander-survey-2026"] }
  ],
  quotes: [
    { who: "Ana Botín", role: "Executive Chair, Banco Santander", date: "2026-02-25", quote: "Customer growth, together with disciplined execution of ONE Transformation, will drive higher revenues and structurally lower costs.", sources: ["pymnts-transformation-2026"] },
    { who: "Christiana Riley", role: "CEO, Santander US", date: "2026-08-20", quote: "This is a pivotal moment in Santander's long journey in the United States that underscores our confidence in the strength and opportunity in the U.S. market.", sources: ["ft-webster-close-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "Santander Bank, N.A. is a national bank that has just absorbed Webster; group AI platforms used in US processes fall under OCC model-risk and gen-AI expectations.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "federal-reserve", why: "Santander Holdings USA is the intermediate holding company; the Fed approved the Webster deal and supervises third-party relationships including Verizon and the group's technology providers.", docSlugs: ["fed-sr-23-4", "fed-sr-26-2"] },
    { authority: "cfpb", why: "Openbank, auto finance and agentic commerce put AI in consumer credit and payments, under ECOA and UDAAP.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action", "cfpb-chatbots-in-consumer-finance-2023"] },
    { authority: "ecb", why: "The ECB supervises the group and approved the Webster acquisition; its supervisory priorities cover AI in credit scoring and fraud.", docSlugs: ["ecb-ssm-supervisory-priorities-2026-28", "ecb-supervision-newsletter-ai-credit-scoring-fraud-2025"] },
    { authority: "eu-ai-act", why: "Group-wide AI tools and credit models are within the EU AI Act's scope for the parent.", docSlugs: ["eu-ai-act-regulation-2024-1689", "eba-ai-act-factsheet-banking-payments-2025"] }
  ],
  suggestions: [
    { title: "A euro-denominated AI target meets a dollar-denominated integration", detail: "The €1 billion figure is a group number; the US contribution will be judged on whether Webster's systems land on ONE Transformation's shared platforms without disrupting nearly eight million customers." },
    { title: "Agentic commerce is where Santander is ahead of US peers", detail: "Getnet accepting agent-initiated payments puts the group in production on a question most US banks are still piloting; the US perimeter for that activity is the OCC and CFPB, not the ECB." },
    { title: "Openbank is the AI distribution channel", detail: "A digital bank that raised $6 billion in a year is the natural place for personalisation models; the departure of its founder-executive and the arrival of Webster's leadership change who owns it." },
    { title: "Consumer surveys are not disclosure", detail: "Santander US tells the market what customers think of AI but not what the bank runs. As a top-20 bank it will face the same disclosure expectations as peers reporting agent counts and budgets." }
  ],
  faq: [
    { q: "How much does Santander expect AI to contribute?", a: "More than €1 billion by 2028, according to executive chair Ana Botín at the February 2026 investor day: about €300 million of extra revenue and €700 million of lower costs, delivered through customer primacy, cross-selling and agentic commerce as part of the ONE Transformation programme." },
    { q: "What did Santander's Webster deal change in the US?", a: "Completed on 20 August 2026 for $12.3 billion, it made Santander a top-20 US bank with nearly eight million customers and an expanded Northeast footprint. Webster's CEO John Ciulla became CEO of Santander Bank, N.A., Christiana Riley stayed US country head, and Santander's Drew Burchard took charge of digital banking for the combined bank." }
  ],
  sources: [
    { id: "bloomberg-botin-2026", title: "Santander's Botin Sees €1 Billion AI Boost Amid Efficiency Push", publisher: "Bloomberg", url: "https://bloomberg.com/news/articles/2026-02-25/santander-s-botin-sees-1-billion-ai-boost-amid-efficiency-push", date: "2026-02-25" },
    { id: "pymnts-allworkers-2026", title: "Santander Equips All Workers With AI and Seeks $1.15 Billion Business Value", publisher: "PYMNTS", url: "https://www.pymnts.com/news/artificial-intelligence/2026/santander-equips-all-workers-with-ai-and-seeks-1-15-billion-business-value/", date: "2026-06-21" },
    { id: "pymnts-getnet-2026", title: "Santander's Getnet Plugs Merchants Into Agentic Commerce", publisher: "PYMNTS", url: "https://www.pymnts.com/news/b2b-payments/2026/santanders-getnet-plugs-merchants-into-agentic-commerce/", date: "2026-06-09" },
    { id: "pymnts-transformation-2026", title: "Santander Looks to AI for Digital Transformation", publisher: "PYMNTS", url: "https://pymnts.com/news/banking/2026/santander-looks-to-ai-for-digital-transformation", date: "2026-02-26" },
    { id: "ab-graveyard-2026", title: "How Santander plans to avoid US 'graveyard' for European banks", publisher: "American Banker", url: "https://www.americanbanker.com/news/how-santander-plans-to-avoid-u-s-graveyard-for-european-banks", date: "2026-02-25" },
    { id: "ab-fed-approval-2026", title: "Fed gives final approval needed for Santander-Webster merger", publisher: "American Banker", url: "https://americanbanker.com/news/fed-gives-final-approval-needed-for-santander-webster-merger", date: "2026-08-04" },
    { id: "ab-fakeads-2025", title: "Santander creates fake AI ads for shopping scam awareness", publisher: "American Banker", url: "https://americanbanker.com/news/santander-creates-fake-ai-ads-for-shopping-scam-awareness", date: "2025-12-01" },
    { id: "bankingdive-webster-2026", title: "Santander to buy Webster for $12.3B", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/santander-acquiring-webster-bank-12b/811270/", date: "2026-02-03" },
    { id: "bankingdive-webster-mgmt-2026", title: "Santander, Webster lay out post-deal management plan", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/santander-webster-management-roles-swati-bhatia-leaving/816983/", date: "2026-04-08" },
    { id: "bankingdive-riley-2025", title: "Santander names next US CEO", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/santander-names-next-us-ceo-christiana-riley-tim-wennes-ana-botin-swati-bhatia-openbank-digital/739032/", date: "2025-02-03" },
    { id: "bankingdive-griffiths-2026", title: "USAA hires Santander tech chief as next CIO", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/usaa-cio-dan-griffiths-santander-tech/811565/", date: "2026-02-06" },
    { id: "reuters-webster-2026", title: "Santander aims to become big retail bank in US with $12.2 billion Webster deal", publisher: "Reuters", url: "https://reuters.com/legal/transactional/santander-buy-webster-financial-122-billion-deal-2026-02-03", date: "2026-02-03" },
    { id: "reuters-q3-2025", title: "Santander beats third quarter forecasts on US growth", publisher: "Reuters", url: "https://reuters.com/business/finance/santanders-q3-net-profit-rises-8-same-period-2024-2025-10-29", date: "2025-10-29" },
    { id: "wsj-verizon-2025", title: "Spain's Biggest Bank Is Making a Big Push in the U.S.", publisher: "The Wall Street Journal", url: "https://www.wsj.com/finance/banking/spains-biggest-bank-is-making-a-big-push-in-the-u-s-ceef9bdf", date: "2025-03-17" },
    { id: "ft-webster-close-2026", title: "Santander Expands U.S. Presence with Completion of Webster Acquisition", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=600-202608200334BIZWIRE_USPRX____20260820_BW118649-1", date: "2026-08-20" },
    { id: "santander-survey-2026", title: "Santander US Finds Middle-Income Americans Optimistic about Finances, See Benefits of AI for Car Buying and Managing Finances", publisher: "Santander US", url: "https://santanderus.com/news_press_article/santander-us-finds-middle-income-americans-optimistic-about-finances-see-benefits-of-ai-for-car-buying-and-managing-finances", date: "2026-01-29" }
  ],
  lastUpdated: "2026-09-10"
};

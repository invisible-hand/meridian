import type { Bank } from "@/lib/banks";

export const WEBSTER: Bank = {
  slug: "webster",
  name: "Webster Bank",
  shortName: "Webster",
  ticker: "SAN",
  hq: "Stamford, CT",
  fedRank: 34,
  leadBank: "Webster Bank, N.A. (merged into Santander Bank, N.A., August 2026)",
  assetsUsdMillions: 85527,
  charter: "National bank (OCC); acquired by Banco Santander on 20 August 2026",
  posture: "A Northeast commercial bank that spent 2025 building data, cyber and risk infrastructure for the $100 billion line — and then became the $12.3 billion deal that made Santander a top-20 US bank.",
  platform: {
    name: "Category IV readiness: data, cyber and open banking",
    detail: "Webster's technology agenda before the Santander deal was preparation for crossing $100 billion in assets. CIO Vikram Nafde described a build-out 'in the space of data, cybersecurity, but also digital and the regulatory reporting', with about 25 of roughly 200 planned 2025 hires going to technology and cybersecurity and new roles in data collection, storage and governance. Its 2026 product work was connectivity: an FDX-aligned open-banking connector on Plaid's Core Exchange for commercial clients went live in June 2026, and internal awards in the same quarter went to automation of online-banking conversions and of security-operations playbooks. Under Santander, Webster's businesses fold into Santander Bank, N.A. with Webster CEO John Ciulla running the combined bank.",
    sources: ["bankingdive-100b-2025", "ft-prolific-2026", "webster-impact-2026", "bankingdive-webster-2026"]
  },
  answerFirst:
    "Webster Bank's independent AI record is short because its independence ended on 20 August 2026, when Banco Santander completed a $12.3 billion cash-and-stock acquisition announced on 3 February. In the two years before, Webster's technology story was about scale rather than models: as it approached the $100 billion asset threshold that would make it a Category IV bank, CIO Vikram Nafde said the bank was investing in data, cybersecurity, digital and regulatory-reporting capability, hiring about 200 people in 2025 including around 25 in technology and cyber, and adding data-governance roles; CEO John Ciulla said the higher bar was 'not our base case' to disappear even if it became less onerous. Product work in 2026 was open banking and automation: an FDX-aligned FI-Streams connector on Plaid's Core Exchange for commercial clients went live in June 2026, and second-quarter internal awards recognised automation that converted more than 100 business online-banking profiles to the treasury platform and Splunk SOAR automation in the security operations centre. The transaction, approved by the OCC in June, the ECB in July and the Federal Reserve on 4 August 2026, folds Webster's businesses into Santander Bank, N.A.; Ciulla becomes CEO of that bank, Webster's Chris Motl leads commercial banking and James Griffin the 500-plus branch network, while Santander's Drew Burchard takes digital banking and the combined company targets an 18% US return on tangible equity by 2028. The AI strategy that now applies is Santander's: more than €1 billion of AI value by 2028, AI tools for all employees from June 2026, and agentic commerce through Getnet.",
  keyPoints: [
    "Acquired: Santander's $12.3 billion deal announced 3 February 2026 and completed 20 August after OCC, ECB and Fed approvals; Webster's businesses integrate into Santander Bank, N.A.",
    "Pre-deal technology agenda: data, cybersecurity, digital and regulatory-reporting build-out for the $100 billion Category IV threshold; about 25 of 200 planned 2025 hires in technology and cyber; new data-governance roles.",
    "2026 product work: an FDX-aligned open-banking connector on Plaid's Core Exchange for commercial clients (June 2026); internal automation of online-banking conversions and SOC playbooks.",
    "Leadership in the combined bank: John Ciulla (Webster CEO) becomes CEO of Santander Bank, N.A.; Chris Motl leads commercial banking; James Griffin leads national retail distribution; Santander's Drew Burchard leads digital.",
    "The AI strategy now in force is Santander's: over €1 billion of AI value targeted by 2028, AI tools for all employees, Getnet accepting AI-agent payments.",
    "Scale at close: nearly eight million US customers for the combined bank and a top-five Northeast deposit franchise; Webster had about $85 billion in assets."
  ],
  leadership: [
    { name: "John Ciulla", role: "CEO, Santander Bank, N.A.; former Chairman and CEO, Webster Financial", sources: ["bankingdive-webster-2026", "bankingdive-100b-2025"] },
    { name: "Vikram Nafde", role: "Chief Information Officer, Webster Bank (CIO since 2022)", sources: ["bankingdive-100b-2025"], linkedin: "https://www.linkedin.com/in/vikramnafde/" },
    { name: "Chris Motl", role: "Head of Commercial Banking, combined bank", sources: ["bankingdive-webster-mgmt-2026"] },
    { name: "James Griffin", role: "Head of National Retail Distribution and Consumer Lending, combined bank", sources: ["bankingdive-webster-mgmt-2026"] },
    { name: "Katherine Lane", role: "Senior Managing Director, Transformation Lead and Finance Front Lines Control Officer", sources: ["ab-lane-2025"] }
  ],
  timeline: [
    { date: "2025-03-14", title: "Building for the $100 billion line", detail: "Data, cyber, digital and regulatory-reporting investment; about 200 hires planned for 2025.", sources: ["bankingdive-100b-2025"] },
    { date: "2025-09-10", title: "Transformation lead recognised", detail: "Katherine Lane, who unified SOX programmes after the Sterling merger and redesigned control testing, named to American Banker's NEXT list.", sources: ["ab-lane-2025"] },
    { date: "2026-02-03", title: "Santander agrees to buy Webster for $12.3 billion", detail: "Webster to become a wholly owned subsidiary; Ciulla to run Santander Bank, N.A.", sources: ["bankingdive-webster-2026", "ft-merger-2026"] },
    { date: "2026-02-25", title: "Santander's investor day sets the AI and US targets", detail: "More than €1 billion from AI by 2028; US RoTE of 18% with Webster integrated.", sources: ["ab-graveyard-2026"] },
    { date: "2026-04-06", title: "Post-deal management named", detail: "Motl to lead commercial, Griffin retail distribution, Burchard digital.", sources: ["bankingdive-webster-mgmt-2026"] },
    { date: "2026-04-28", title: "First-quarter 2026 results", detail: "EPS of $1.50, adjusted $1.57, ahead of the close.", sources: ["ft-q1-2026"] },
    { date: "2026-06-10", title: "Automation recognised internally", detail: "Impact Makers awards for online-banking conversion automation and SOC playbook automation.", sources: ["webster-impact-2026"] },
    { date: "2026-06-11", title: "Open-banking connector goes live", detail: "Prolific Banking's FI-Streams on Plaid's Core Exchange for commercial clients.", sources: ["ft-prolific-2026"] },
    { date: "2026-08-04", title: "Federal Reserve approves the acquisition", detail: "After the OCC (June) and ECB (July); closing set for 20 August.", sources: ["ab-fed-approval-2026", "ft-fed-approval-2026"] },
    { date: "2026-08-20", title: "Acquisition completed", detail: "Webster becomes part of Santander US; everyday banking unchanged for now.", sources: ["webster-close-2026", "ft-close-2026"] }
  ],
  useCases: [
    { useCase: "third-party-vendors", name: "FDX open-banking connector for commercial clients", detail: "Plaid Core Exchange access to accounting, treasury and PFM apps.", status: "In production", sources: ["ft-prolific-2026"] },
    { useCase: "cybersecurity", name: "SOC automation (Splunk SOAR)", detail: "Faster threat identification and consistent responses in the security operations centre.", status: "In production", sources: ["webster-impact-2026"] },
    { useCase: "governance-general", name: "Category IV data and risk infrastructure", detail: "Data collection, storage and governance roles; regulatory-reporting capability.", status: "In production", sources: ["bankingdive-100b-2025"] },
    { useCase: "generative-agentic-ai", name: "Santander's enterprise AI tools (post-close)", detail: "The group extended AI tools to all employees in June 2026; applies to Webster staff on integration.", status: "Rolling out", sources: ["pymnts-allworkers-2026"] }
  ],
  numbers: [
    { label: "Acquisition price", value: "$12.3 billion (65% cash, 35% stock)", asOf: "2026-02-03", sources: ["bankingdive-webster-2026"] },
    { label: "Planned 2025 hires / technology and cyber", value: "≈ 200 / ≈ 25", asOf: "2025-03-14", sources: ["bankingdive-100b-2025"] },
    { label: "Assets at announcement", value: "$84 billion", asOf: "2026-02-03", sources: ["bankingdive-webster-2026"] },
    { label: "Combined bank customers at close", value: "≈ 8 million", asOf: "2026-08-20", sources: ["ft-close-2026"] }
  ],
  quotes: [
    { who: "Vikram Nafde", role: "Chief Information Officer", date: "2025-03-14", quote: "There's a big component of technology … as we get closer and closer to the $100 billion mark.", sources: ["bankingdive-100b-2025"] },
    { who: "John Ciulla", role: "Chairman and CEO, Webster Financial", date: "2026-02-03", quote: "As a larger organization, we will unlock greater scale, broader capabilities and new opportunities for growth — while remaining deeply focused on the people who define our success.", sources: ["bankingdive-webster-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "Webster Bank was a national bank and its businesses now sit inside Santander Bank, N.A.; the OCC approved the merger in June 2026.", docSlugs: ["occ-bulletin-2026-13"] },
    { authority: "federal-reserve", why: "The Fed's 4 August 2026 approval and the Category IV build-out define the supervisory frame; Plaid and Prolific are third-party relationships.", docSlugs: ["fed-sr-23-4", "fed-sr-26-2"] },
    { authority: "ecb", why: "Santander's home supervisor approved the deal in July 2026 and sets group AI expectations.", docSlugs: ["ecb-ssm-supervisory-priorities-2026-28"] },
    { authority: "ny-dfs", why: "Webster's New York operations and the combined bank's Northeast footprint fall under the DFS cyber rule.", docSlugs: ["ny-dfs-23-nycrr-part-500"] }
  ],
  suggestions: [
    { title: "Webster's AI future is Santander's ONE Transformation", detail: "The relevant questions are now about integration: which Webster systems move to the group's shared platforms and how Santander's AI tools reach Webster's commercial bankers." },
    { title: "The Category IV build-out becomes a group asset", detail: "Data governance and regulatory-reporting capability built for $100 billion is what a $250 billion Santander US needs; that investment did not go to waste." },
    { title: "Open banking on a Plaid-aligned standard is the durable product decision", detail: "FDX connectivity for commercial clients will outlast the brand and is the kind of API layer agentic finance will rely on." },
    { title: "Watch who owns digital", detail: "Santander's Drew Burchard leading digital for the combined bank means Openbank's approach, not Webster's, sets the customer-facing AI roadmap." }
  ],
  faq: [
    { q: "What happened to Webster Bank?", a: "Banco Santander completed its $12.3 billion acquisition of Webster Financial on 20 August 2026, after OCC, ECB and Federal Reserve approvals. Webster's businesses are being integrated into Santander Bank, N.A., with former Webster CEO John Ciulla as its CEO. Everyday banking for Webster customers was unchanged at closing." },
    { q: "Did Webster have an AI strategy of its own?", a: "Its public technology agenda before the deal was preparation for the $100 billion Category IV threshold: data, cybersecurity, digital and regulatory-reporting investment, with roughly 25 technology and cyber hires among about 200 planned in 2025, plus open-banking connectivity and internal automation in 2026. The AI strategy that now applies is Santander's, which targets more than €1 billion of AI value by 2028." }
  ],
  sources: [
    { id: "bankingdive-100b-2025", title: "Webster eyes $100B threshold, invests in hiring and tech", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/webster-bank-100b-threshold-hiring-tech-cybersecurity-nafde/742553/", date: "2025-03-14" },
    { id: "bankingdive-webster-2026", title: "Santander to buy Webster for $12.3B", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/santander-acquiring-webster-bank-12b/811270/", date: "2026-02-03" },
    { id: "bankingdive-webster-mgmt-2026", title: "Santander, Webster lay out post-deal management plan", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/santander-webster-management-roles-swati-bhatia-leaving/816983/", date: "2026-04-08" },
    { id: "ab-lane-2025", title: "The Most Powerful Women in Banking NEXT No. 13, Katherine Lane, Webster Bank", publisher: "American Banker", url: "https://americanbanker.com/news/next-2025-no-13-katherine-lane-webster-bank", date: "2025-09-10" },
    { id: "ab-graveyard-2026", title: "How Santander plans to avoid US 'graveyard' for European banks", publisher: "American Banker", url: "https://www.americanbanker.com/news/how-santander-plans-to-avoid-u-s-graveyard-for-european-banks", date: "2026-02-25" },
    { id: "ab-fed-approval-2026", title: "Fed gives final approval needed for Santander-Webster merger", publisher: "American Banker", url: "https://americanbanker.com/news/fed-gives-final-approval-needed-for-santander-webster-merger", date: "2026-08-04" },
    { id: "ft-merger-2026", title: "Webster Financial Corporation Enters Into Merger Agreement With Banco Santander, S.A. for $12.3 Billion", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=600-202602031338BIZWIRE_USPRX____20260203_BW901062-1", date: "2026-02-03" },
    { id: "ft-q1-2026", title: "Webster Reports First Quarter 2026 EPS of $1.50; Adjusted EPS of $1.57", publisher: "Business Wire via FT Markets", url: "https://markets-data-api-proxy.ft.com/data/announce/detail?dockey=600-202604281615BIZWIRE_USPRX____20260428_BW786095-1", date: "2026-04-28" },
    { id: "ft-prolific-2026", title: "Webster Bank Implements Prolific Banking's FI-Streams Connector to Enable Commercial Client Financial Data Connectivity", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=600-202606111200BIZWIRE_USPRX____20260611_BW592775-1", date: "2026-06-11" },
    { id: "ft-fed-approval-2026", title: "Santander Receives Federal Reserve Approval for the Acquisition of Webster Financial Corporation", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=600-202608041952BIZWIRE_USPRX____20260804_BW258528-1", date: "2026-08-04" },
    { id: "ft-close-2026", title: "Santander Expands U.S. Presence with Completion of Webster Acquisition", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=600-202608200334BIZWIRE_USPRX____20260820_BW118649-1", date: "2026-08-20" },
    { id: "webster-close-2026", title: "Santander Expands U.S. Presence with Completion of Webster Acquisition", publisher: "Webster Bank", url: "https://websterbank.com/about/newsroom/santander-expands-u-s-presence-with-completion-of-webster-acquisition", date: "2026-08-20" },
    { id: "webster-impact-2026", title: "Impact Makers Award Winners – Q2 2026", publisher: "Webster Bank", url: "https://websterbank.com/impact-makers-award-winners", date: "2026-06-10" },
    { id: "pymnts-allworkers-2026", title: "Santander Equips All Workers With AI and Seeks $1.15 Billion Business Value", publisher: "PYMNTS", url: "https://www.pymnts.com/news/artificial-intelligence/2026/santander-equips-all-workers-with-ai-and-seeks-1-15-billion-business-value/", date: "2026-06-21" }
  ],
  lastUpdated: "2026-09-10"
};

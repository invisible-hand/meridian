import type { Bank } from "@/lib/banks";

export const UMB: Bank = {
  slug: "umb",
  name: "UMB Financial",
  shortName: "UMB",
  ticker: "UMBF",
  hq: "Kansas City, MO",
  fedRank: 38,
  leadBank: "UMB Bank, N.A.",
  assetsUsdMillions: 72350,
  charter: "National bank (OCC)",
  posture: "A consolidator that just absorbed Heartland Financial, whose technology chief owns product and operations together — and whose only public AI writing is its investment team telling clients not to panic about it.",
  platform: {
    name: "Integration first: the Heartland systems conversion",
    detail: "UMB's technology story since 2025 is the $2 billion Heartland Financial acquisition, the largest in its history, which added over 30% to assets, took its footprint from eight to 13 states and more than doubled its branches. Uma Wilson, EVP and chief information and product officer, runs product development, technology and operations in one role; her team led the systems and product review and the customer migration, which she calls 'extremely heavy lifting', and the conversion completed in October 2025 on the way to about $124 million of targeted cost savings. On AI, the bank's public voice is its investment leadership, which in March 2026 walked clients through the 'worst-case' AI scenarios circulating in markets and set out a 'level-headed' view.",
    sources: ["ab-wilson-2025", "ab-conversion-2025", "umb-ai-pov-2026"]
  },
  answerFirst:
    "UMB Financial is a $72 billion Kansas City bank with unusual reach for its size: national fund services, institutional custody, health-savings accounts and a corporate trust business alongside regional banking. Its public technology record in 2025 and 2026 is dominated by integration. The $2 billion acquisition of Heartland Financial closed on 31 January 2025, adding more than 30% to assets, expanding from eight to 13 states and doubling the branch network from 93 to 193; Uma Wilson, who combines the chief information and chief product officer roles, led the systems and product review and customer migration, and the conversion completed in October 2025 toward roughly $124 million of cost savings. CEO Mariner Kemper called UMB 'one of the consolidators' in early 2025 and by January 2026 had turned 'measured', keeping to tuck-in deals and saying the bank would be 'wary of transactions that would put us close to the $100 billion mark'. On AI the bank has published no platform, use-case count, budget or headcount effect. What it has published is a March 2026 note from its investment team responding to a viral 'perfect storm' AI scenario, acknowledging that AI 'will continue to disrupt many industries and job categories' while arguing the collapse narrative is improbable. That, plus JPMorgan analysts in August 2026 describing the bank as 'playing with the big boys', is the record. UMB Fund Services' work with blockchain infrastructure partners for fund administration is the closest thing to a disclosed technology bet.",
  keyPoints: [
    "Integration was the technology programme: Heartland Financial acquired for $2 billion (closed 31 January 2025), systems conversion completed October 2025, about $124 million of targeted cost savings, branches doubled to 193 across 13 states.",
    "One leader for product, technology and operations: EVP Uma Wilson, chief information and product officer, whose team ran the product review and customer migration.",
    "M&A stance shifted from 'consolidator' (February 2025) to 'measured' with tuck-ins only (January 2026), and a stated wariness of approaching $100 billion in assets.",
    "AI disclosure is investment commentary, not operations: a March 2026 note rejects 'perfect storm' AI-collapse scenarios while accepting continued disruption of jobs and industries.",
    "No AI platform, chief AI officer, budget or use-case count has been announced; JPMorgan analysts nonetheless see the bank 'playing with the big boys' (August 2026).",
    "Scale after the deal: about $73 billion in assets by early 2026, the largest bank in Missouri, with national institutional and fund-services businesses."
  ],
  leadership: [
    { name: "Mariner Kemper", role: "Chairman and CEO", sources: ["bankingdive-measured-2026", "ab-conversion-2025"], linkedin: "https://www.linkedin.com/in/mariner-kemper/" },
    { name: "Uma Wilson", role: "EVP, Chief Information and Product Officer", sources: ["ab-wilson-2025"], linkedin: "https://www.linkedin.com/in/uma-wilson-ctp-aap-7422298/" },
    { name: "Ram Shankar", role: "Chief Financial Officer", sources: ["ab-conversion-2025"], linkedin: "https://www.linkedin.com/in/ram-shankar-ab746524/" },
    { name: "James Rine", role: "President and CEO, UMB Bank", sources: ["ab-conversion-2025"] }
  ],
  timeline: [
    { date: "2025-01-31", title: "Heartland Financial acquisition closes", detail: "The largest deal in UMB's history; footprint to 13 states.", sources: ["bankingdive-consolidator-2025", "ab-wilson-2025"] },
    { date: "2025-02-20", title: "'We're one of the consolidators'", detail: "The CEO on fewer banks over time and looking for the right opportunity.", sources: ["bankingdive-consolidator-2025"] },
    { date: "2025-07-30", title: "Systems conversion set for October", detail: "A test conversion in Minnesota 'went smoothly'; $124 million of cost savings targeted.", sources: ["ab-conversion-2025"] },
    { date: "2025-09-24", title: "Technology and product chief recognised", detail: "Uma Wilson on the 'extremely heavy lifting' of the product and systems review.", sources: ["ab-wilson-2025"] },
    { date: "2025-10-15", title: "Conversion completes", detail: "The remaining Heartland systems move in mid-October, releasing 'the next big slug' of savings.", sources: ["ab-conversion-2025"] },
    { date: "2026-01-28", title: "'Measured' on M&A; wary of $100 billion", detail: "Tuck-ins only; organic growth 'always will be our top capital priority'.", sources: ["bankingdive-measured-2026"] },
    { date: "2026-03-02", title: "The investment team on AI 'worst-case' scenarios", detail: "AI will keep disrupting industries and jobs, but the collapse narrative is improbable.", sources: ["umb-ai-pov-2026"] },
    { date: "2026-04-28", title: "First-quarter 2026 results", detail: "Reported by the company.", sources: ["ft-q1-2026"] },
    { date: "2026-08-20", title: "'Playing with the big boys'", detail: "JPMorgan analysts see gains ahead for the Kansas City regional.", sources: ["cnbc-jpm-2026"] }
  ],
  useCases: [
    { useCase: "governance-general", name: "Post-acquisition systems conversion", detail: "Product mapping, customer migration and platform consolidation after Heartland.", status: "In production", sources: ["ab-conversion-2025", "ab-wilson-2025"] },
    { useCase: "trading-markets", name: "AI as an investment theme for clients", detail: "Investment-team commentary on AI's market and economic effects.", status: "In production", sources: ["umb-ai-pov-2026"] },
    { useCase: "fraud", name: "Client fraud-prevention education", detail: "Romance-scam and fraud guides for personal and business clients.", status: "In production", sources: ["umb-romance-2026"] }
  ],
  numbers: [
    { label: "Heartland acquisition", value: "$2 billion; assets up > 30%; branches 93 → 193", asOf: "2025-09-24", sources: ["ab-wilson-2025"] },
    { label: "Targeted cost savings from the deal", value: "≈ $124 million", asOf: "2025-07-30", sources: ["ab-conversion-2025"] },
    { label: "Total assets", value: "$73.1 billion", asOf: "2026-01-28", sources: ["bankingdive-measured-2026"] },
    { label: "States in footprint", value: "13 (from 8)", asOf: "2025-09-24", sources: ["ab-wilson-2025"] }
  ],
  quotes: [
    { who: "Uma Wilson", role: "EVP, Chief Information and Product Officer", date: "2025-09-24", quote: "Moving customers from one application to another seems like it should be an easy process, but it's not. It comes with a tremendous amount of complexity.", sources: ["ab-wilson-2025"] },
    { who: "Mariner Kemper", role: "Chairman and CEO", date: "2026-01-28", quote: "Organic growth is, and always will be, our top capital priority.", sources: ["bankingdive-measured-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "UMB Bank is a national bank; the OCC's model-risk bulletin will govern any AI introduced after the conversion, and the acquisition raised the bank's supervisory profile.", docSlugs: ["occ-bulletin-2026-13"] },
    { authority: "federal-reserve", why: "UMB Financial is the holding company; core and fund-services technology providers are third-party relationships.", docSlugs: ["fed-sr-23-4", "fed-sr-26-2"] },
    { authority: "sec", why: "UMB Fund Services and the institutional businesses operate under SEC oversight, where AI-related practices are examination priorities.", docSlugs: ["sec-exam-priorities-fy2026"] },
    { authority: "fincen", why: "National payments, HSA and fund-services businesses keep AML controls, including any AI in monitoring, in scope.", docSlugs: ["fincen-aml-cft-program-nprm-2026"] }
  ],
  suggestions: [
    { title: "A finished conversion is the precondition for any AI programme", detail: "UMB spent 2025 consolidating platforms; the same team that did it now owns product, technology and operations, which is the structure most banks adopt before scaling AI." },
    { title: "The $100 billion wariness shapes the technology budget", detail: "Staying well below Category IV avoids the data and reporting build-outs peers describe; it also means AI investment will be judged on efficiency, not regulatory readiness." },
    { title: "Fund services is the likeliest AI beachhead", detail: "Fund administration and transfer agency are document- and reconciliation-heavy; blockchain infrastructure partnerships suggest where automation is being tested." },
    { title: "Disclosure has room to grow", detail: "The bank's only AI publication is investment commentary; even a statement of governance would put it level with peers that publish adoption figures." }
  ],
  faq: [
    { q: "What has UMB said about AI?", a: "Very little about its own operations. Its investment team published a March 2026 note on AI's economic and market effects, accepting that AI will keep disrupting industries and jobs while rejecting 'perfect storm' collapse scenarios. The bank has not announced an AI platform, chief AI officer, use-case count or budget." },
    { q: "Who runs technology at UMB?", a: "Uma Wilson, executive vice president and chief information and product officer, who oversees product development, technology and operations together. Her team led the systems and product review and customer migration for the $2 billion Heartland Financial acquisition, whose conversion completed in October 2025." }
  ],
  sources: [
    { id: "ab-wilson-2025", title: "The Most Powerful Women to Watch, No. 15, Uma Wilson, UMB Bank", publisher: "American Banker", url: "https://www.americanbanker.com/news/2025-the-most-powerful-women-to-watch-no-15-uma-wilson-umb-bank", date: "2025-09-24" },
    { id: "ab-conversion-2025", title: "UMB's post-acquisition systems conversion set for October", publisher: "American Banker", url: "https://americanbanker.com/news/umbs-post-acquisition-systems-conversion-set-for-october", date: "2025-07-30" },
    { id: "bankingdive-measured-2026", title: "UMB CEO takes 'measured' tone on M&A", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/umb-acquisitions-ceo-kemper-bank-deals/810866/", date: "2026-01-29" },
    { id: "bankingdive-consolidator-2025", title: "UMB embraces 'consolidator' role", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/umb-bank-acquisitions-kemper-htlf-consolidation-wealth/740518/", date: "2025-02-20" },
    { id: "umb-ai-pov-2026", title: "AI POV: Impacts on the markets and what the future may hold", publisher: "UMB Financial", url: "https://blog.umb.com/economy-ai-impacts-on-the-markets/", date: "2026-03-02" },
    { id: "umb-romance-2026", title: "How to identify an online romance scam and stay safe in 2026", publisher: "UMB Financial", url: "https://blog.umb.com/personal-banking-how-to-identify-romance-scams/", date: "2026-02-11" },
    { id: "cnbc-jpm-2026", title: "This Kansas City regional bank is playing with the big boys. JPMorgan sees big gains ahead", publisher: "CNBC", url: "https://www.cnbc.com/2026/08/20/a-regional-bank-will-rally-by-playing-with-the-big-boys-jpmorgan-says.html", date: "2026-08-20" },
    { id: "ft-q1-2026", title: "UMB Financial Corporation Reports First Quarter 2026 Results", publisher: "Business Wire via FT Markets", url: "https://markets-data-api-proxy.ft.com/data/announce/detail?dockey=600-202604281605BIZWIRE_USPRX____20260428_BW335623-1", date: "2026-04-28" }
  ],
  lastUpdated: "2026-09-10"
};

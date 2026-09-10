import type { Bank } from "@/lib/banks";

export const STIFEL_BANK: Bank = {
  slug: "stifel-bank",
  name: "Stifel Financial (Stifel Bank & Trust)",
  shortName: "Stifel Bank",
  ticker: "SF",
  hq: "St. Louis, MO",
  fedRank: 94,
  leadBank: "Stifel Bank & Trust",
  assetsUsdMillions: 20063,
  charter: "Missouri state member bank (Federal Reserve); subsidiary of Stifel Financial",
  posture: "The bank inside a $580 billion-client-asset wealth and investment-banking firm whose CEO argues AI 'only increases the value of judgment, trust, and relationships', and whose research arm frames AI as a multi-trillion-dollar productivity supercycle.",
  platform: {
    name: "Stifel's advisor-first AI stance and fund-banking-driven balance sheet",
    detail: "Stifel Bank & Trust is the balance-sheet engine of Stifel Financial's Global Wealth Management segment, with bank loans of $24.8 billion at mid-2026 after $2.6 billion of growth in the second quarter alone, largely from fund banking, on a path to as much as $4 billion of expansion in the year. Chairman and CEO Ron Kruszewski has positioned AI as an accelerant for advisers rather than a replacement: 'AI is making information more abundant. That only increases the value of judgment, trust, and relationships.' He has said the firm expects AI to let it hire fewer support staff while making advisers, bankers and analysts more productive at finding opportunities in tax, estate and planning work. Stifel's research publishes an 'Artificial Intelligence: Runway for Growth' outlook describing a 'supercycle of productivity with multitrillion-dollar effects on global GDP'. Neither the firm nor the bank has disclosed an AI vendor, model inventory or budget.",
    sources: ["sf-q2-2026", "sf-aiblindspot-2026", "sf-aioutlook-2026"]
  },
  answerFirst:
    "Stifel Bank & Trust, the St. Louis state member bank owned by Stifel Financial with about $20 billion of assets, matters in this ranking because of the firm around it: a wealth-management and investment-banking group that posted the best second quarter in its history in 2026, with net revenues of $1.45 billion, net income to common of $217.2 million, or $1.34 per diluted share, record Global Wealth Management revenue of $957 million, record client assets of $580.1 billion, fee-based assets of $239.8 billion and bank loans of $24.8 billion after growing $2.6 billion in the quarter, mostly through fund banking. Chairman and CEO Ron Kruszewski uses the earnings calls to argue against the thesis that AI hollows out financial advice: 'AI is making information more abundant. That only increases the value of judgment, trust, and relationships,' he said in July, calling AI 'a tailwind to advice, not a headwind' and a productivity accelerator that surfaces more tax, estate and planning opportunities for advisers. The firm has said AI adoption means it will need to hire fewer staff, while its institutional group lifted pre-tax margins to 19.5% in the first half from 11% a year earlier after efficiency initiatives and a European restructuring. Stifel's investment strategists publish an AI outlook describing a multi-trillion-dollar productivity supercycle, and the firm was ranked first in employee-adviser satisfaction by J.D. Power for a fourth straight year. Stifel Bank & Trust is supervised by the Federal Reserve as a state member bank under Stifel Financial's holding company; the bank itself has disclosed no AI vendor, model or budget, and its role in the AI story is to fund the loans that the adviser-and-AI model generates.",
  keyPoints: [
    "CEO Ron Kruszewski: AI 'only increases the value of judgment, trust, and relationships'; a 'tailwind to advice, not a headwind'.",
    "Firm expects AI to reduce support hiring while making advisers, bankers and analysts more productive; institutional pre-tax margin up to 19.5% from 11%.",
    "Q2 2026: net revenues $1.45 billion (record second quarter); net income to common $217.2 million ($1.34); client assets $580.1 billion; ROTCE 23.6%.",
    "Bank loans $24.8 billion, up $2.6 billion in the quarter largely through fund banking; up to $4 billion of balance-sheet growth targeted for 2026.",
    "Stifel research: 'Artificial Intelligence: Runway for Growth' outlook on a productivity supercycle.",
    "No AI vendor, model inventory or budget disclosed at the firm or bank level; J.D. Power number one in employee-adviser satisfaction for four years."
  ],
  leadership: [
    { name: "Ronald J. Kruszewski", role: "Chairman and CEO, Stifel Financial", linkedin: "https://www.linkedin.com/in/ron-kruszewski-7148aa36", sources: ["sf-q2-2026", "sf-aiblindspot-2026"] }
  ],
  timeline: [
    { date: "2026-02-11", title: "'Artificial Intelligence: Runway for Growth' outlook published", detail: "AI framed as a multi-trillion-dollar productivity supercycle.", sources: ["sf-aioutlook-2026"] },
    { date: "2026-04-22", title: "Record first-quarter revenue; CEO on AI as a tailwind to advice", detail: "Net revenues $1.48 billion, up 18%.", sources: ["sf-q2call-2026"] },
    { date: "2026-07-22", title: "Best second quarter in company history", detail: "Net revenues $1.45 billion; bank loans up $2.6 billion; AI 'increases the value of judgment'.", sources: ["sf-q2-2026", "sf-q2call-2026", "sf-aiblindspot-2026"] },
    { date: "2026-01-07", title: "Outlook 2026: Rewiring Growth", detail: "Technology among the forces reconfiguring economic expansion.", sources: ["sf-outlook-2026"] },
    { date: "2026-02-02", title: "Stifel Independent Advisors sold", detail: "$9.7 billion of client assets leave with the business.", sources: ["sf-q2-2026"] },
    { date: "2026-07-09", title: "J.D. Power number one in employee-adviser satisfaction, fourth year", detail: "Advisor-first culture cited by the CEO.", sources: ["sf-q2-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "AI productivity tools for advisers, bankers and analysts", detail: "Surfacing tax, estate and planning opportunities; fewer support hires expected.", status: "In production", sources: ["sf-aiblindspot-2026"] },
    { useCase: "credit-underwriting", name: "Fund banking and wealth-linked lending", detail: "$24.8 billion loan book growing up to $4 billion a year.", status: "In production", sources: ["sf-q2-2026", "sf-q2call-2026"] },
    { useCase: "governance-general", name: "AI thought leadership for clients", detail: "Research outlook on AI's economic effects.", status: "In production", sources: ["sf-aioutlook-2026"] }
  ],
  numbers: [
    { label: "Q2 2026 net revenues / net income to common", value: "$1.45 billion / $217.2 million ($1.34)", asOf: "2026-07-22", sources: ["sf-q2-2026"] },
    { label: "Bank loans / quarterly growth", value: "$24.8 billion / +$2.6 billion", asOf: "2026-06-30", sources: ["sf-q2-2026"] },
    { label: "Client assets / fee-based assets", value: "$580.1 billion / $239.8 billion", asOf: "2026-06-30", sources: ["sf-q2-2026"] },
    { label: "Institutional pre-tax margin, H1 2026", value: "19.5% (from 11%)", asOf: "2026-07-22", sources: ["sf-q2call-2026"] }
  ],
  quotes: [
    { who: "Ronald J. Kruszewski", role: "Chairman and CEO", date: "2026-07-22", quote: "AI is making information more abundant. That only increases the value of judgment, trust, and relationships.", sources: ["sf-aiblindspot-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "Stifel Bank & Trust is a state member bank under a Fed-supervised holding company; SR 11-7 and SR 23-4 govern any AI in lending and vendor tools.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "sec", why: "Adviser-facing AI tools at a broker-dealer fall under SEC examination priorities and the predictive-analytics conflicts proposal.", docSlugs: ["sec-exam-priorities-fy2026", "sec-pda-conflicts-proposal-34-97990"] },
    { authority: "cfpb", why: "Consumer lending through the bank carries adverse-action and UDAAP duties.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] }
  ],
  suggestions: [
    { title: "The adviser thesis is the AI strategy", detail: "Stifel's bet is that AI raises the value of human judgment; the bank's job is to fund the relationships that judgment wins, which makes loan growth the metric to watch." },
    { title: "Fewer hires is a disclosure that invites follow-up", detail: "Saying AI reduces support headcount without naming the tools leaves investors and examiners to guess at model risk in adviser workflows." },
    { title: "SEC scope matters more than bank scope here", detail: "AI that shapes adviser recommendations sits under the SEC's conflicts and examination agenda before it reaches bank regulators." },
    { title: "Fund banking is a data-rich niche", detail: "Capital-call and subscription lines generate structured data that suits analytics; nothing has been disclosed about using it." }
  ],
  faq: [
    { q: "Does Stifel use AI?", a: "Stifel Financial says AI is making its advisers, bankers and analysts more productive and that it expects to hire fewer support staff as a result, while CEO Ron Kruszewski argues AI increases the value of human judgment and relationships. No vendor, model or budget has been disclosed for the firm or for Stifel Bank & Trust." },
    { q: "What is Stifel Bank & Trust?", a: "The Missouri state member bank inside Stifel Financial's Global Wealth Management segment, with bank loans of $24.8 billion at mid-2026 and about $20 billion of assets. It grew loans by $2.6 billion in the second quarter of 2026, mostly through fund banking." }
  ],
  sources: [
    { id: "sf-aioutlook-2026", title: "Artificial Intelligence: Runway for Growth (Outlook 2026)", publisher: "Stifel", url: "https://stifel.com/Newsletters/AdGraphics/InSight/Outlook/2026/Outlook2026_Artificial-Intelligence.pdf", date: "2026-02-11" },
    { id: "sf-q2-2026", title: "Stifel Reports Second Quarter 2026 Results", publisher: "Stifel Financial", url: "https://stifel.com/investor-relations/DownloadEarningsReleaseFile?fiscalYear=2026&id=263", date: "2026-07-22" },
    { id: "sf-q2call-2026", title: "Stifel Financial Corp. Q2 2026 Earnings Call Summary", publisher: "Yahoo Finance", url: "https://finance.yahoo.com/markets/stocks/articles/stifel-financial-corp-q2-2026-123000700.html", date: "2026-07-23" },
    { id: "sf-aiblindspot-2026", title: "Stifel's earnings expose Wall Street's AI blind spot", publisher: "TheStreet (Yahoo Finance)", url: "https://finance.yahoo.com/technology/ai/articles/stifel-earnings-expose-wall-street-030700080.html", date: "2026-07-24" },
    { id: "sf-outlook-2026", title: "Outlook 2026: Rewiring Growth", publisher: "Stifel", url: "https://stifel.com/Newsletters/AdGraphics/InSight/Outlook/2026/Outlook2026.pdf", date: "2026-01-07" }
  ],
  lastUpdated: "2026-09-10"
};

import { Resend } from "resend";
import { BANK_COUNT } from "@/lib/banks";
import { REGULATORS } from "@/lib/regulators";
import { DOCUMENTS } from "@/lib/regulatory-documents";
import { BASE_URL } from "@/lib/seo";
import { unsubUrl } from "@/lib/unsub";

// The one email a new subscriber gets straight away. Short on purpose: what
// arrives tomorrow, then every standing page on the site with one line each,
// so the address is confirmed as live and the reader knows the site is more
// than the daily brief. Same type and colours as the digest (lib/email.ts).

const F = {
  serif: "'Playfair Display', Georgia, 'Times New Roman', serif",
  sans: "'IBM Plex Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  mono: "'IBM Plex Mono', 'Courier New', Courier, monospace"
} as const;

export const WELCOME_SUBJECT = "You're in: tomorrow's brief, and everything else on BankingNewsAI";

/** Everything on the site, one line each — shared by the email and /subscribed. */
export function siteInventory(): { label: string; path: string; line: string }[] {
  return [
    { label: "AI regulation tracker", path: "/ai-regulation", line: `${REGULATORS.length} authorities and ${DOCUMENTS.length} documents, each dated and linked to the official text, updated as rules change.` },
    { label: "Deadlines", path: "/ai-regulation/deadlines", line: "Every effective date and comment period that touches AI in banking, in one calendar." },
    { label: "Compliance checklist", path: "/ai-regulation/compliance-checklist", line: "Each obligation as a checkbox, with the document it comes from." },
    { label: "By use case", path: "/ai-regulation/by-use-case", line: "What applies to credit decisions, AML, fraud, chatbots, model risk and generative AI." },
    { label: "Regulator warnings", path: "/ai-regulation/regulator-warnings", line: "What supervisors are warning banks about: deepfakes, AI-enabled cyber attacks, stability." },
    { label: `The ${BANK_COUNT} largest US banks`, path: "/banks", line: "Each bank's AI strategy from the public record: platforms, use cases, leaders, numbers, regulators, every claim sourced." },
    { label: "AI banks, ranked", path: "/banks/ai-index", line: "The same 100 banks ranked by what each has put on the record: platforms, use cases in production, leaders, numbers." },
    { label: "AI agents in banking", path: "/agentic-banking", line: "An operating system for agents in a bank: the control plane, the lifecycle gates and what regulators have said." },
    { label: "For bank executives", path: "/ai-regulation/for-bank-executives", line: "A board-level briefing on what changed in 2026 and a 30-day reading plan." },
    { label: "For compliance officers", path: "/ai-regulation/for-compliance-officers", line: "Where to start, which documents to read first, and in what order." },
    { label: "The archive", path: "/issues", line: "Every issue of the daily brief, searchable by date, with the tracker's cross-references." }
  ];
}

export function renderWelcomeHtml(recipientEmail: string): string {
  const rows = siteInventory()
    .map(
      (it) => `<tr>
        <td style="padding:12px 0;border-bottom:1px solid #ede9e3;vertical-align:top;">
          <a href="${BASE_URL}${it.path}" style="font-family:${F.sans};font-size:15px;font-weight:600;color:#111111;text-decoration:none;">${esc(it.label)} &rarr;</a>
          <div style="font-family:${F.sans};font-size:13.5px;line-height:1.55;color:#5a5a5a;margin-top:3px;">${esc(it.line)}</div>
        </td>
      </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${esc(WELCOME_SUBJECT)}</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
</head>
<body style="margin:0;padding:0;background:#f0ede8;font-family:${F.sans};">
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f0ede8;">
  <tr>
    <td align="center" style="padding:36px 8px 52px;">
      <table width="620" cellpadding="0" cellspacing="0" role="presentation" style="max-width:620px;width:100%;">
        <tr>
          <td style="background:#0c0c0c;padding:30px 40px 26px;">
            <a href="${BASE_URL}" style="font-family:${F.mono};font-size:11px;font-weight:500;letter-spacing:0.22em;text-transform:uppercase;color:#888;text-decoration:none;">Banking<span style="color:#4f7fff;">News</span>AI</a>
            <p style="margin:18px 0 0;font-family:${F.serif};font-size:34px;font-weight:900;line-height:1.05;letter-spacing:-0.02em;color:#ffffff;">You&rsquo;re in.</p>
            <p style="margin:10px 0 0;font-family:${F.sans};font-size:14px;line-height:1.6;color:#8a8a8a;">Your first brief lands tomorrow at 7 am ET.</p>
          </td>
        </tr>
        <tr>
          <td style="background:#ffffff;padding:30px 40px 12px;">
            <p style="margin:0 0 14px;font-family:${F.sans};font-size:15px;line-height:1.7;color:#111111;">
              Every morning: six stories on what AI did to banking the day before. Three on banks, regulators and deals; three on the models, vendors and infrastructure behind them. Each one links to its source. No paywalled links, no sponsored slots.
            </p>
            <p style="margin:0 0 6px;font-family:${F.mono};font-size:10px;font-weight:500;letter-spacing:0.18em;text-transform:uppercase;color:#9a9a9a;">Also on the site, all free</p>
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">${rows}</table>
            <p style="margin:22px 0 18px;font-family:${F.sans};font-size:14px;line-height:1.7;color:#5a5a5a;">
              If the brief lands in spam once, drag it to the inbox and it stays there. Reply to any issue and a person reads it.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:18px 40px 0;text-align:center;font-family:${F.mono};font-size:10.5px;letter-spacing:0.08em;color:#9a9a9a;line-height:1.8;">
            <a href="${BASE_URL}" style="color:#9a9a9a;text-decoration:none;">bankingnewsai.com</a>
            &nbsp;&middot;&nbsp;
            <a href="${unsubUrl(recipientEmail)}" style="color:#9a9a9a;text-decoration:underline;">unsubscribe</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

export async function sendWelcomeEmail(to: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    console.warn("welcome email skipped: RESEND_API_KEY / RESEND_FROM_EMAIL not set");
    return;
  }
  const resend = new Resend(apiKey);
  const replyTo = process.env.REPLY_TO_EMAIL?.trim() || undefined;
  const { error } = await resend.emails.send({
    from,
    to,
    subject: WELCOME_SUBJECT,
    html: renderWelcomeHtml(to),
    headers: {
      "List-Unsubscribe": `<${unsubUrl(to)}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click"
    },
    ...(replyTo ? { replyTo } : {})
  });
  if (error) throw new Error(error.message);
}

function esc(input: string): string {
  return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

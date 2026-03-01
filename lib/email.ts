import { Resend } from "resend";
import { DailyDigest, DigestStory } from "@/lib/types";
import { isPaywalled } from "@/lib/paywall";
import { unsubUrl } from "@/lib/unsub";

// ── Design tokens ─────────────────────────────────────────────────────────────
const D = {
  bg:           "#f0ede8",   // warm parchment
  cardBg:       "#ffffff",
  headerBg:     "#0c0c0c",   // near-black masthead
  bodyBg:       "#ffffff",
  divider:      "#ede9e3",   // warm hairline
  textPrimary:  "#111111",
  textSecondary:"#5a5a5a",
  textMuted:    "#9a9a9a",
  bankAccent:   "#1a3fcb",   // deep ink blue
  bankLight:    "#dce5ff",
  aiAccent:     "#0d6640",   // deep forest green
  aiLight:      "#d0f0e0",
  serif:        "'Playfair Display', Georgia, 'Times New Roman', serif",
  sans:         "'IBM Plex Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  mono:         "'IBM Plex Mono', 'Courier New', Courier, monospace",
} as const;

export function renderDigestHtml(digest: DailyDigest, recipientEmail?: string): string {
  const bankingStories = digest.bankingStories ?? digest.stories ?? [];
  const aiStories = digest.aiStories ?? [];
  const formattedDate = formatDate(digest.date);

  const bankingSection = bankingStories.length > 0
    ? renderSection({ label: "Banking AI", accent: D.bankAccent, accentLight: D.bankLight }, bankingStories)
    : "";
  const aiSection = aiStories.length > 0
    ? renderSection({ label: "General AI", accent: D.aiAccent, accentLight: D.aiLight }, aiStories)
    : "";
  const noContent = bankingStories.length === 0 && aiStories.length === 0
    ? `<tr><td style="padding:48px 36px;text-align:center;font-family:${D.mono};font-size:12px;color:${D.textMuted};letter-spacing:0.08em;">
         NO QUALIFYING STORIES FOR THIS WINDOW
       </td></tr>`
    : "";

  const bankingMeta = bankingStories.length > 0
    ? `<span style="font-family:${D.mono};font-size:10px;color:#6b9cff;letter-spacing:0.12em;">🏦 ${bankingStories.length} BANKING</span>`
    : "";
  const aiMeta = aiStories.length > 0
    ? `<span style="font-family:${D.mono};font-size:10px;color:#5ecb97;letter-spacing:0.12em;">🤖 ${aiStories.length} GENERAL AI</span>`
    : "";
  const metaSep = bankingStories.length > 0 && aiStories.length > 0
    ? `<span style="font-family:${D.mono};font-size:10px;color:#333;">&nbsp;&nbsp;·&nbsp;&nbsp;</span>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>BankingNewsAI Daily Brief</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
</head>
<body style="margin:0;padding:0;background:${D.bg};font-family:${D.sans};">
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:${D.bg};">
  <tr>
    <td align="center" style="padding:36px 8px 52px;">
      <table width="620" cellpadding="0" cellspacing="0" role="presentation" style="max-width:620px;width:100%;">

        <!-- ── MASTHEAD ── -->
        <tr>
          <td style="background:${D.headerBg};padding:32px 40px 28px;">

            <!-- Brand wordmark -->
            <p style="margin:0 0 20px;font-family:${D.mono};font-size:10px;font-weight:500;letter-spacing:0.22em;text-transform:uppercase;color:#444;">
              Banking<span style="color:#4f7fff;">News</span>AI
            </p>

            <!-- Hairline rule -->
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr><td style="height:1px;background:#1e1e1e;font-size:0;line-height:0;">&nbsp;</td></tr>
            </table>

            <!-- Headline -->
            <p style="margin:18px 0 6px;font-family:${D.serif};font-size:34px;font-weight:900;color:#ffffff;line-height:1.05;letter-spacing:-0.02em;">
              Daily AI Brief
            </p>

            <!-- Date + edition counts -->
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-top:8px;">
              <tr>
                <td>
                  <p style="margin:0;font-family:${D.sans};font-size:12px;color:#666;letter-spacing:0.02em;">
                    ${escapeHtml(formattedDate)}&nbsp;&nbsp;·&nbsp;&nbsp;Fintech &amp; Banking Edition
                  </p>
                </td>
                <td align="right">
                  ${bankingMeta}${metaSep}${aiMeta}
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- ── BODY ── -->
        <tr>
          <td style="background:${D.bodyBg};">
            ${bankingSection}${aiSection}${noContent}
          </td>
        </tr>

        <!-- ── FOOTER ── -->
        <tr>
          <td style="background:${D.bg};padding:22px 40px 26px;border-top:1px solid ${D.divider};">
            <p style="margin:0;font-family:${D.mono};font-size:9px;color:${D.textMuted};letter-spacing:0.1em;line-height:2;text-transform:uppercase;">
              You subscribed to BankingNewsAI's daily brief.
              Curated by AI &nbsp;·&nbsp; Delivered daily &nbsp;·&nbsp;
              ${recipientEmail
                ? `<a href="${escapeHtml(unsubUrl(recipientEmail))}" style="color:${D.textMuted};text-decoration:underline;">Unsubscribe</a>`
                : `<a href="/" style="color:${D.textMuted};text-decoration:none;">BankingNewsAI</a>`
              }
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

function renderSection(
  cfg: { label: string; accent: string; accentLight: string },
  stories: DigestStory[]
): string {
  const items = stories.map((story, i) => renderStory(story, i + 1, cfg.accent)).join("");

  return `
  <!-- Section header -->
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td style="padding:28px 40px 4px;">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td valign="middle" style="white-space:nowrap;padding-right:14px;">
              <span style="font-family:${D.mono};font-size:10px;font-weight:500;letter-spacing:0.2em;text-transform:uppercase;color:${cfg.accent};">${escapeHtml(cfg.label)}</span>
            </td>
            <td width="100%" valign="middle">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr><td style="height:1px;background:${cfg.accentLight};font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  <!-- Stories -->
  ${items}`;
}

function renderStory(story: DigestStory, index: number, accent: string): string {
  const domain = extractDomain(story.sourceUrl);
  const pw = isPaywalled(story.sourceUrl);
  const num = String(index).padStart(2, "0");

  return `
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td style="padding:24px 40px 24px;border-bottom:1px solid ${D.divider};${pw ? "background:#fffbeb;" : ""}">

        <!-- Domain + index -->
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:10px;">
          <tr>
            <td valign="middle">
              <span style="font-family:${D.mono};font-size:10px;font-weight:500;letter-spacing:0.14em;text-transform:uppercase;color:${D.textMuted};">${escapeHtml(domain)}</span>
            </td>
            <td align="right" valign="top">
              <span style="font-family:${D.serif};font-size:42px;font-weight:900;color:${D.divider};line-height:1;">${num}</span>
            </td>
          </tr>
        </table>

        <!-- Title -->
        <p style="margin:0 0 12px;font-family:${D.serif};font-size:20px;font-weight:700;color:${D.textPrimary};line-height:1.3;letter-spacing:-0.01em;">${escapeHtml(story.title)}</p>

        <!-- Summary -->
        <p style="margin:0 0 16px;font-family:${D.sans};font-size:14px;color:${D.textSecondary};line-height:1.75;">${escapeHtml(story.executiveSummary)}</p>

        <!-- Action callout -->
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:16px;">
          <tr>
            <td style="padding:11px 16px;border-left:2px solid ${accent};background:#faf9f7;">
              <p style="margin:0 0 3px;font-family:${D.mono};font-size:9px;font-weight:500;letter-spacing:0.18em;text-transform:uppercase;color:${accent};">Action</p>
              <p style="margin:0;font-family:${D.sans};font-size:13px;color:${D.textPrimary};line-height:1.6;">${escapeHtml(story.businessImpact)}</p>
            </td>
          </tr>
        </table>

        <!-- Read link — text, not a button -->
        <a href="${story.sourceUrl}"
           style="font-family:${D.mono};font-size:10px;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;color:${accent};text-decoration:underline;text-underline-offset:3px;">
          Read article →
        </a>

      </td>
    </tr>
  </table>`;
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  } catch { return iso; }
}

function extractDomain(url: string): string {
  try { return new URL(url).hostname.replace(/^www\./, ""); }
  catch { return "source"; }
}

export function getDigestSubject(digest: DailyDigest): string {
  if (digest.briefSummary) {
    return `BankingNewsAI: ${digest.briefSummary}`;
  }
  const bankingCount = (digest.bankingStories ?? digest.stories ?? []).length;
  const aiCount = (digest.aiStories ?? []).length;
  const total = bankingCount + aiCount;
  return `BankingNewsAI Daily Brief — ${total} stor${total === 1 ? "y" : "ies"} · ${digest.date}`;
}

function escapeHtml(input: string): string {
  return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}


const BATCH_SIZE = 100;

export interface BatchSendResult {
  sent: number;
  failed: number;
  failures: Array<{ email: string; error: string }>;
}

/**
 * Sends the digest to all recipients using Resend's batch API (100 per call).
 * Each email gets a personalised one-click unsubscribe link.
 */
export async function batchSendDigestEmails(params: {
  recipients: string[];
  digest: DailyDigest;
}): Promise<BatchSendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey) throw new Error("Missing RESEND_API_KEY");
  if (!from) throw new Error("Missing RESEND_FROM_EMAIL");

  const resend = new Resend(apiKey);
  const subject = getDigestSubject(params.digest);
  const { recipients, digest } = params;

  let sent = 0;
  let failed = 0;
  const failures: Array<{ email: string; error: string }> = [];

  for (let i = 0; i < recipients.length; i += BATCH_SIZE) {
    const chunk = recipients.slice(i, i + BATCH_SIZE);
    const batch = chunk.map((email) => ({
      from,
      to: email,
      subject,
      html: renderDigestHtml(digest, email)
    }));

    const { data, error } = await resend.batch.send(batch);

    if (error || !data) {
      // Entire batch failed — mark all as failed
      failed += chunk.length;
      chunk.forEach((email) =>
        failures.push({ email, error: error?.message ?? "batch API error" })
      );
    } else {
      sent += chunk.length;
    }
  }

  return { sent, failed, failures };
}

/** Single-recipient send — kept for test emails from the admin panel. */
export async function sendDigestEmail(params: { to: string; digest: DailyDigest }): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey) throw new Error("Missing RESEND_API_KEY");
  if (!from) throw new Error("Missing RESEND_FROM_EMAIL");
  const resend = new Resend(apiKey);
  await resend.emails.send({
    from,
    to: params.to,
    subject: getDigestSubject(params.digest),
    html: renderDigestHtml(params.digest, params.to)
  });
}

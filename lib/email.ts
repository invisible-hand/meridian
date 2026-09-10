import { Resend } from "resend";
import { DailyDigest, DigestStory } from "@/lib/types";
import { isPaywalled } from "@/lib/paywall";
import { unsubUrl } from "@/lib/unsub";
import { BASE_URL } from "@/lib/seo";

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

/** The person whose opinion the takes are. Override with DIGEST_BYLINE. */
const BYLINE = process.env.DIGEST_BYLINE?.trim() || "Andrey Zagoruiko";

export function renderDigestHtml(digest: DailyDigest, recipientEmail?: string): string {
  const bankingStories = digest.bankingStories ?? digest.stories ?? [];
  const aiStories = digest.aiStories ?? [];
  const formattedDate = formatDate(digest.date);
  const issueUrl = `${BASE_URL}/issues/${digest.date}`;

  const bankingSection = bankingStories.length > 0
    ? renderSection({ label: "Banking AI", desc: "Financial institutions & fintech technology", accent: D.bankAccent, accentLight: D.bankLight }, bankingStories)
    : "";
  const aiSection = aiStories.length > 0
    ? renderSection({ label: "General AI", desc: "Large language models & AI infrastructure", accent: D.aiAccent, accentLight: D.aiLight }, aiStories)
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

  // Optional one-off note from the developer — a visually flagged box that sits
  // between the masthead and the stories.
  const developerNoteBlock = digest.developerNote
    ? `<tr>
        <td style="background:#fff8e6;border-left:4px solid #d97706;border-bottom:1px solid ${D.divider};padding:20px 40px 22px;">
          <p style="margin:0 0 8px;font-family:${D.mono};font-size:10px;font-weight:500;letter-spacing:0.18em;text-transform:uppercase;color:#b45309;">
            ✉️ Message from the developer
          </p>
          <p style="margin:0;font-family:${D.sans};font-size:14px;color:${D.textPrimary};line-height:1.7;">${escapeHtml(digest.developerNote).replace(/\n/g, "<br />")}</p>
        </td>
      </tr>`
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
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin:0 0 20px;">
              <tr>
                <td>
                  <a href="${BASE_URL}" style="font-family:${D.mono};font-size:11px;font-weight:500;letter-spacing:0.22em;text-transform:uppercase;color:#888;text-decoration:none;">Banking<span style="color:#4f7fff;">News</span>AI</a>
                </td>
                <td align="right">
                  <a href="${issueUrl}" style="font-family:${D.mono};font-size:11px;font-weight:500;letter-spacing:0.14em;text-transform:uppercase;color:#888;text-decoration:underline;text-underline-offset:3px;">Read online &rarr;</a>
                </td>
              </tr>
            </table>

            <!-- Hairline rule -->
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr><td style="height:1px;background:#1e1e1e;font-size:0;line-height:0;">&nbsp;</td></tr>
            </table>

            <!-- Headline -->
            <p style="margin:18px 0 6px;font-family:${D.serif};font-size:34px;font-weight:900;line-height:1.05;letter-spacing:-0.02em;">
              <a href="${issueUrl}" style="color:#ffffff;text-decoration:none;">Daily AI Brief</a>
            </p>

            <!-- Date + edition counts -->
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-top:8px;">
              <tr>
                <td>
                  <p style="margin:0;font-family:${D.sans};font-size:14px;color:#8a8a8a;letter-spacing:0.02em;">
                    ${escapeHtml(formattedDate)}&nbsp;&nbsp;·&nbsp;&nbsp;By ${escapeHtml(BYLINE)}
                  </p>
                </td>
                <td align="right">
                  ${bankingMeta}${metaSep}${aiMeta}
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- ── DEVELOPER NOTE (optional) ── -->
        ${developerNoteBlock}

        <!-- ── BODY ── -->
        <tr>
          <td style="background:${D.bodyBg};">
            ${bankingSection}${aiSection}${noContent}
          </td>
        </tr>

        <!-- ── FOOTER ── -->
        <tr>
          <td style="background:${D.bg};padding:22px 40px 26px;border-top:1px solid ${D.divider};">
            <p style="margin:0;font-family:${D.mono};font-size:10px;color:${D.textMuted};letter-spacing:0.1em;line-height:2;text-transform:uppercase;">
              You subscribed to <a href="${BASE_URL}" style="color:${D.textMuted};text-decoration:underline;">BankingNewsAI</a>'s daily brief &nbsp;·&nbsp; <a href="${BASE_URL}/issues" style="color:${D.textMuted};text-decoration:underline;">All issues</a><br />
              Written by ${escapeHtml(BYLINE)} &nbsp;·&nbsp; Delivered daily &nbsp;·&nbsp;
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
  cfg: { label: string; desc: string; accent: string; accentLight: string },
  stories: DigestStory[]
): string {
  const items = stories.map((story, i) => renderStory(story, i + 1, cfg.accent)).join("");
  const count = stories.length;

  return `
  <!-- Section header band -->
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td style="background:${cfg.accent};padding:18px 40px 16px;">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td valign="top">
              <p style="margin:0 0 5px;font-family:${D.mono};font-size:12px;font-weight:500;letter-spacing:0.22em;text-transform:uppercase;color:#ffffff;">${escapeHtml(cfg.label)}</p>
              <p style="margin:0;font-family:${D.sans};font-size:13px;color:rgba(255,255,255,0.6);">${escapeHtml(cfg.desc)}</p>
            </td>
            <td align="right" valign="middle" style="white-space:nowrap;padding-left:16px;">
              <span style="font-family:${D.mono};font-size:10px;letter-spacing:0.12em;color:rgba(255,255,255,0.45);">${count} ${count === 1 ? "story" : "stories"}</span>
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
  const take = (story.take ?? "").trim();
  const reader = (story.reader ?? "").trim();
  const action = (story.businessImpact ?? "").trim();

  // Headline + take are what the reader gets before scrolling; the summary is
  // set smaller and lighter so it reads as supporting detail.
  const takeBlock = take
    ? `<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin:0 0 14px;">
        <tr>
          <td style="padding:0 0 0 14px;border-left:3px solid ${accent};">
            ${reader ? `<p style="margin:0 0 5px;font-family:${D.mono};font-size:10px;font-weight:500;letter-spacing:0.16em;text-transform:uppercase;color:${accent};">For ${escapeHtml(reader)}</p>` : ""}
            <p style="margin:0;font-family:${D.sans};font-size:17px;font-weight:500;color:${D.textPrimary};line-height:1.55;">${escapeHtml(take)}</p>
          </td>
        </tr>
      </table>`
    : "";

  const summaryStyle = take
    ? `margin:0 0 16px;font-family:${D.sans};font-size:15px;color:#5f5f5f;line-height:1.65;`
    : `margin:0 0 16px;font-family:${D.sans};font-size:16px;color:${D.textSecondary};line-height:1.7;`;

  const actionBlock = action
    ? `<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:14px;">
        <tr>
          <td style="padding:10px 14px;background:#faf9f7;">
            <p style="margin:0 0 4px;font-family:${D.mono};font-size:10px;font-weight:500;letter-spacing:0.18em;text-transform:uppercase;color:${accent};">&rarr;&nbsp;Action</p>
            <p style="margin:0;font-family:${D.sans};font-size:15px;color:${D.textPrimary};line-height:1.55;">${renderAction(action)}</p>
          </td>
        </tr>
      </table>`
    : "";

  return `
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td style="padding:24px 40px 22px;border-bottom:1px solid ${D.divider};${pw ? "background:#fffbeb;" : ""}">

        <!-- Index -->
        <p style="margin:0 0 2px;font-family:${D.serif};font-size:36px;font-weight:900;color:${D.divider};line-height:1;">${num}</p>

        <!-- Headline: the article's headline, linked -->
        <p style="margin:0 0 14px;font-family:${D.serif};font-size:24px;font-weight:700;line-height:1.25;letter-spacing:-0.01em;">
          <a href="${story.sourceUrl}" style="color:${D.textPrimary};text-decoration:none;">${escapeHtml(story.title)}</a>
        </p>

        ${takeBlock}

        <!-- Summary: supporting facts -->
        <p style="${summaryStyle}">${escapeHtml(story.executiveSummary)}</p>

        ${actionBlock}

        <!-- Read link: "Read article →" from <publication> -->
        <p style="margin:0;font-family:${D.sans};font-size:14px;color:${D.textMuted};">
          <a href="${story.sourceUrl}" style="font-family:${D.mono};font-size:11px;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;color:${accent};text-decoration:underline;text-underline-offset:3px;">Read article →</a>
          &nbsp;from ${escapeHtml(domain)}
        </p>

      </td>
    </tr>
  </table>`;
}

/** Actions are "Team: instruction." — the team in bold, the instruction as plain text. */
function renderAction(text: string): string {
  const trimmed = text.trim();
  const colon = trimmed.indexOf(":");
  if (colon <= 0 || colon > 60) return escapeHtml(trimmed);
  return `<strong style="font-weight:700;">${escapeHtml(trimmed.slice(0, colon + 1))}</strong>${escapeHtml(trimmed.slice(colon + 1))}`;
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

/**
 * Where subscriber replies land.
 *
 * The From address (digest@bankingnewsai.com) is a Resend sending identity, not
 * a mailbox — mail sent to it goes nowhere. Setting Reply-To routes any reply
 * to a real inbox instead, while leaving From (and therefore SPF/DKIM/DMARC
 * alignment) untouched.
 */
function replyToAddress(): string | undefined {
  return process.env.REPLY_TO_EMAIL?.trim() || undefined;
}

/**
 * RFC 8058 one-click unsubscribe headers. Gmail and Yahoo both require these on
 * bulk mail — without them a sender's inbox placement degrades, and recipients
 * reach for "report spam" instead of the footer link. The URL accepts POST and
 * unsubscribes without any further interaction.
 */
function unsubscribeHeaders(recipientEmail: string): Record<string, string> {
  return {
    "List-Unsubscribe": `<${unsubUrl(recipientEmail)}>`,
    "List-Unsubscribe-Post": "List-Unsubscribe=One-Click"
  };
}

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
    const replyTo = replyToAddress();
    const batch = chunk.map((email) => ({
      from,
      to: email,
      subject,
      html: renderDigestHtml(digest, email),
      headers: unsubscribeHeaders(email),
      ...(replyTo ? { replyTo } : {})
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
  const replyTo = replyToAddress();
  await resend.emails.send({
    from,
    to: params.to,
    subject: getDigestSubject(params.digest),
    html: renderDigestHtml(params.digest, params.to),
    headers: unsubscribeHeaders(params.to),
    ...(replyTo ? { replyTo } : {})
  });
}

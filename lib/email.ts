import { Resend } from "resend";
import { DailyDigest, DigestStory } from "@/lib/types";
import { isPaywalled } from "@/lib/paywall";

const SECTIONS = {
  banking: { label: "Banking AI", headerBg: "#0f2444", accent: "#3b82f6", iconSvg: bankIcon() },
  ai:      { label: "General AI", headerBg: "#0f2e1a", accent: "#22c55e", iconSvg: aiIcon() }
} as const;

export function renderDigestHtml(digest: DailyDigest): string {
  const bankingStories = digest.bankingStories ?? digest.stories ?? [];
  const aiStories = digest.aiStories ?? [];
  const formattedDate = formatDate(digest.date);

  const bankingSection = bankingStories.length > 0 ? renderSection(SECTIONS.banking, bankingStories) : "";
  const aiSection      = aiStories.length      > 0 ? renderSection(SECTIONS.ai,      aiStories)      : "";
  const noContent      = bankingStories.length === 0 && aiStories.length === 0
    ? `<tr><td style="padding:32px;color:#6b7280;font-style:italic;text-align:center;">
         No qualifying stories were found for this digest window.
       </td></tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Meridian Daily AI Brief</title>
</head>
<body style="margin:0;padding:0;background:#eef2f7;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#eef2f7;">
  <tr>
    <td align="center" style="padding:28px 8px 40px;">
      <table width="680" cellpadding="0" cellspacing="0" role="presentation"
             style="max-width:680px;width:100%;border-radius:14px;overflow:hidden;
                    box-shadow:0 4px 20px rgba(0,0,0,0.10);">

        <!-- HEADER -->
        <tr>
          <td style="background:linear-gradient(160deg,#080f1e 0%,#0f2444 60%,#0d3060 100%);padding:32px 36px 28px;">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td>
                  <p style="margin:0 0 2px;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#60a5fa;">MERIDIAN</p>
                  <h1 style="margin:0 0 6px;font-size:26px;font-weight:800;color:#ffffff;line-height:1.15;letter-spacing:-0.02em;">Daily AI Brief</h1>
                  <p style="margin:0;font-size:13px;color:#94a3b8;">${escapeHtml(formattedDate)} &nbsp;&middot;&nbsp; Fintech &amp; Banking Edition</p>
                </td>
                <td align="right" valign="middle" style="padding-left:16px;">
                  <table cellpadding="0" cellspacing="0" role="presentation">
                    ${bankingStories.length > 0 ? `<tr><td style="padding-bottom:6px;"><span style="display:inline-block;background:rgba(59,130,246,0.2);color:#93c5fd;font-size:11px;font-weight:600;padding:3px 10px;border-radius:999px;border:1px solid rgba(59,130,246,0.3);white-space:nowrap;">🏦 ${bankingStories.length} banking</span></td></tr>` : ""}
                    ${aiStories.length      > 0 ? `<tr><td><span style="display:inline-block;background:rgba(34,197,94,0.15);color:#86efac;font-size:11px;font-weight:600;padding:3px 10px;border-radius:999px;border:1px solid rgba(34,197,94,0.25);white-space:nowrap;">🤖 ${aiStories.length} general AI</span></td></tr>` : ""}
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- BODY -->
        <tr><td style="background:#ffffff;padding:0;">${bankingSection}${aiSection}${noContent}</td></tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#f8fafc;padding:20px 36px 24px;border-top:1px solid #e5e7eb;">
            <p style="margin:0;font-size:11px;color:#9ca3af;line-height:1.7;">
              You are receiving this because you subscribed to Meridian's daily AI digest.<br />
              Curated by AI &nbsp;&middot;&nbsp; Delivered daily &nbsp;&middot;&nbsp;
              <a href="https://news.smol.ai/issues" style="color:#9ca3af;">AINews</a>
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
  cfg: { label: string; headerBg: string; accent: string; iconSvg: string },
  stories: DigestStory[]
): string {
  const items = stories.map((story, i) => renderStory(story, i + 1, cfg.accent)).join("");
  return `
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td style="background:${cfg.headerBg};padding:14px 36px;">
        <table cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td valign="middle" style="padding-right:10px;">${cfg.iconSvg}</td>
            <td valign="middle"><span style="font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#ffffff;">${escapeHtml(cfg.label)}</span></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr><td style="padding:20px 28px 8px;">${items}</td></tr>
  </table>`;
}

function renderStory(story: DigestStory, index: number, accent: string): string {
  const domain = extractDomain(story.sourceUrl);
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=32`;
  const pw = isPaywalled(story.sourceUrl);

  return `
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
         style="margin-bottom:16px;border:1px solid ${pw ? "#fcd34d" : "#e5e7eb"};border-radius:10px;overflow:hidden;background:#ffffff;">
    <tr><td style="background:${accent};height:3px;font-size:0;line-height:0;">&nbsp;</td></tr>
    <tr>
      <td style="padding:18px 22px 16px;">
        <!-- Source row -->
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:10px;">
          <tr>
            <td valign="middle">
              <table cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td valign="middle" style="padding-right:7px;">
                    <img src="${faviconUrl}" width="16" height="16" alt="${escapeHtml(domain)}"
                         style="display:block;border-radius:3px;width:16px;height:16px;" />
                  </td>
                  <td valign="middle">
                    <span style="font-size:11px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">${escapeHtml(domain)}</span>
                  </td>
                </tr>
              </table>
            </td>
            <td align="right" valign="middle">
              <span style="font-size:11px;font-weight:700;color:#d1d5db;">#${index}</span>
            </td>
          </tr>
        </table>
        <!-- Title -->
        <p style="margin:0 0 10px;font-size:16px;font-weight:700;color:#0f172a;line-height:1.35;">${escapeHtml(story.title)}</p>
        <!-- Summary -->
        <p style="margin:0 0 12px;font-size:13px;color:#374151;line-height:1.65;">${escapeHtml(story.executiveSummary)}</p>
        <!-- Action callout -->
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
               style="margin-bottom:14px;background:#f8fafc;border-radius:6px;border-left:3px solid ${accent};">
          <tr>
            <td style="padding:10px 14px;">
              <p style="margin:0;font-size:12px;color:#4b5563;line-height:1.55;">
                <strong style="color:#374151;">Action: </strong>${escapeHtml(story.businessImpact)}
              </p>
            </td>
          </tr>
        </table>
        <!-- CTA -->
        <a href="${story.sourceUrl}"
           style="display:inline-block;font-size:12px;font-weight:600;color:#ffffff;background:${accent};
                  text-decoration:none;padding:7px 16px;border-radius:6px;line-height:1;">
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
  const bankingCount = (digest.bankingStories ?? digest.stories ?? []).length;
  const aiCount = (digest.aiStories ?? []).length;
  const total = bankingCount + aiCount;
  return `Meridian AI Brief — ${total} stor${total === 1 ? "y" : "ies"} · ${digest.date}`;
}

function escapeHtml(input: string): string {
  return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function bankIcon(): string {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M8 10v11M12 10v11M16 10v11M20 10v11"
          stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

function aiIcon(): string {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a4 4 0 014 4v1h1a3 3 0 010 6h-1v1a4 4 0 01-8 0v-1H7a3 3 0 010-6h1V6a4 4 0 014-4z"
          stroke="#4ade80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="9" cy="9" r="1" fill="#4ade80"/>
    <circle cx="15" cy="9" r="1" fill="#4ade80"/>
    <path d="M9 14s1 1.5 3 1.5 3-1.5 3-1.5" stroke="#4ade80" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`;
}

export async function sendDigestEmail(params: { to: string; digest: DailyDigest }): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey) throw new Error("Missing RESEND_API_KEY");
  if (!from) throw new Error("Missing RESEND_FROM_EMAIL");
  const resend = new Resend(apiKey);
  await resend.emails.send({ from, to: params.to, subject: getDigestSubject(params.digest), html: renderDigestHtml(params.digest) });
}

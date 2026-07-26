import { NextRequest, NextResponse } from "next/server";
import { unsubscribeByEmail } from "@/lib/db";
import { verifyUnsubToken } from "@/lib/unsub";

/**
 * GET only *confirms*; it never mutates. Corporate mail scanners, link
 * checkers, and browser prefetchers follow every URL in an email — when the GET
 * itself unsubscribed, those crawlers silently removed real subscribers.
 */
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("t") ?? "";
  const email = verifyUnsubToken(token);

  if (!email) {
    return htmlResponse(
      page({
        title: "Invalid link",
        message: "This unsubscribe link is invalid or has expired.",
        state: "error"
      }),
      400
    );
  }

  return htmlResponse(
    page({
      title: "Unsubscribe?",
      message: `Confirm that you want to stop receiving the BankingNewsAI daily brief at ${escapeHtml(email)}.`,
      state: "confirm",
      token
    }),
    200
  );
}

/**
 * POST performs the unsubscribe. Serves two callers:
 *   1. The confirmation button on the GET page above.
 *   2. RFC 8058 one-click unsubscribe — Gmail/Yahoo POST here directly with a
 *      `List-Unsubscribe=One-Click` body when the user hits the unsubscribe
 *      control in their mail client. The token comes from the query string in
 *      both cases, so the body is never parsed.
 */
export async function POST(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("t") ?? "";
  const email = verifyUnsubToken(token);

  if (!email) {
    return htmlResponse(
      page({
        title: "Invalid link",
        message: "This unsubscribe link is invalid or has expired.",
        state: "error"
      }),
      400
    );
  }

  try {
    await unsubscribeByEmail(email);
  } catch {
    return htmlResponse(
      page({
        title: "Something went wrong",
        message: "We couldn't process your request. Please try again.",
        state: "error"
      }),
      500
    );
  }

  return htmlResponse(
    page({
      title: "You're unsubscribed",
      message: `${escapeHtml(email)} has been removed from BankingNewsAI. No more emails.`,
      state: "success"
    }),
    200
  );
}

function htmlResponse(body: string, status: number): NextResponse {
  return new NextResponse(body, {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      // Never let a confirmation page be cached or indexed.
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex"
    }
  });
}

function page(params: {
  title: string;
  message: string;
  state: "confirm" | "success" | "error";
  token?: string;
}): string {
  const { title, message, state, token } = params;
  const accent = state === "success" ? "#22c55e" : state === "confirm" ? "#3b82f6" : "#ef4444";
  const icon = state === "success" ? "✓" : state === "confirm" ? "?" : "✕";

  const action =
    state === "confirm" && token
      ? `<form method="post" action="/api/unsubscribe?t=${escapeHtml(token)}" style="margin:0 0 28px;">
      <button type="submit" style="font-family:inherit;font-size:14px;font-weight:600;color:#f8fafc;background:${accent};border:none;padding:12px 28px;cursor:pointer;border-radius:4px;">
        Unsubscribe me
      </button>
    </form>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <meta name="robots" content="noindex,nofollow"/>
  <title>${escapeHtml(title)} — BankingNewsAI</title>
</head>
<body style="margin:0;padding:0;background:#07101f;font-family:system-ui,-apple-system,sans-serif;min-height:100vh;display:flex;align-items:center;justify-content:center;">
  <div style="text-align:center;padding:48px 24px;max-width:400px;">
    <div style="width:56px;height:56px;border-radius:50%;background:${accent}22;border:1px solid ${accent}44;display:flex;align-items:center;justify-content:center;font-size:24px;color:${accent};margin:0 auto 24px;">
      ${icon}
    </div>
    <h1 style="font-size:1.5rem;font-weight:800;color:#f8fafc;margin:0 0 12px;letter-spacing:-0.02em;">${escapeHtml(title)}</h1>
    <p style="color:#64748b;font-size:15px;line-height:1.65;margin:0 0 32px;">${message}</p>
    ${action}
    <a href="/" style="font-size:13px;color:#3b82f6;text-decoration:none;">← Back to BankingNewsAI</a>
  </div>
</body>
</html>`;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

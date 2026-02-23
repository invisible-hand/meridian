import { NextRequest, NextResponse } from "next/server";
import { unsubscribeByEmail } from "@/lib/db";
import { verifyUnsubToken } from "@/lib/unsub";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("t") ?? "";
  const email = verifyUnsubToken(token);

  if (!email) {
    return new NextResponse(
      html("Invalid link", "This unsubscribe link is invalid or has expired.", false),
      { status: 400, headers: { "Content-Type": "text/html" } }
    );
  }

  try {
    await unsubscribeByEmail(email);
  } catch {
    return new NextResponse(
      html("Something went wrong", "We couldn't process your request. Please try again.", false),
      { status: 500, headers: { "Content-Type": "text/html" } }
    );
  }

  return new NextResponse(
    html("You're unsubscribed", `${email} has been removed from Meridian. No more emails.`, true),
    { status: 200, headers: { "Content-Type": "text/html" } }
  );
}

function html(title: string, message: string, success: boolean): string {
  const accent = success ? "#22c55e" : "#ef4444";
  const icon = success ? "✓" : "✕";
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>${title} — Meridian</title>
</head>
<body style="margin:0;padding:0;background:#07101f;font-family:system-ui,-apple-system,sans-serif;min-height:100vh;display:flex;align-items:center;justify-content:center;">
  <div style="text-align:center;padding:48px 24px;max-width:400px;">
    <div style="width:56px;height:56px;border-radius:50%;background:${accent}22;border:1px solid ${accent}44;display:flex;align-items:center;justify-content:center;font-size:24px;color:${accent};margin:0 auto 24px;">
      ${icon}
    </div>
    <h1 style="font-size:1.5rem;font-weight:800;color:#f8fafc;margin:0 0 12px;letter-spacing:-0.02em;">${title}</h1>
    <p style="color:#64748b;font-size:15px;line-height:1.65;margin:0 0 32px;">${message}</p>
    <a href="/" style="font-size:13px;color:#3b82f6;text-decoration:none;">← Back to Meridian</a>
  </div>
</body>
</html>`;
}

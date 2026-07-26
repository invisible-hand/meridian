import { NextResponse } from "next/server";
import { authorizeOperator } from "@/lib/api-auth";
import { ensureSchema, getDigestForDate, listRecentDigests } from "@/lib/db";
import { sendDigestEmail } from "@/lib/email";
import type { DailyDigest } from "@/lib/types";

// Sends a single-recipient preview of a given date's digest. Useful for:
//   - Eyeballing the email before tomorrow's send goes out to all subscribers.
//   - Checking the new from-address / domain setup.
//   - Previewing draft digests after generation but before the send cron fires.
//
// Usage:
//   GET /api/manual/send-preview?to=you@example.com
//   GET /api/manual/send-preview?to=you@example.com&date=2026-05-10
//
// If `date` is omitted, defaults to today (UTC). Works on any digest status —
// draft, approved, sent, or skipped — so you can preview tomorrow's draft
// after the 11:00 UTC generate cron runs but before the 12:00 UTC send.
export async function GET(request: Request) {
  const denied = await authorizeOperator(request);
  if (denied) return denied;

  const url = new URL(request.url);
  const to = url.searchParams.get("to")?.trim().toLowerCase();
  const dateParam = url.searchParams.get("date")?.trim();

  if (!to || !to.includes("@")) {
    return NextResponse.json(
      { ok: false, error: "Missing or invalid `to` query param. Example: ?to=you@example.com" },
      { status: 400 }
    );
  }
  if (dateParam && !/^\d{4}-\d{2}-\d{2}$/.test(dateParam)) {
    return NextResponse.json(
      { ok: false, error: "Invalid `date` query param. Use YYYY-MM-DD." },
      { status: 400 }
    );
  }

  await ensureSchema();

  // If `date` is provided, look up that exact date. Otherwise fall back to the
  // most recently created digest in any status — this is what you almost
  // always want when previewing right now (today's draft if it exists, else
  // yesterday's already-sent issue).
  let digest;
  let resolvedDate: string;
  if (dateParam) {
    digest = await getDigestForDate({ digestDate: dateParam, category: "fintech_banking" });
    resolvedDate = dateParam;
  } else {
    const recent = await listRecentDigests(1);
    digest = recent[0] ?? null;
    resolvedDate = digest?.digest_date ?? "";
  }

  if (!digest) {
    return NextResponse.json(
      {
        ok: false,
        error: dateParam
          ? `No digest exists for ${dateParam}. Has it been generated yet?`
          : "No digests exist yet."
      },
      { status: 404 }
    );
  }

  const content = digest.content_json as DailyDigest | null;
  if (!content) {
    return NextResponse.json(
      { ok: false, error: `Digest for ${resolvedDate} has no content_json.` },
      { status: 500 }
    );
  }

  try {
    await sendDigestEmail({ to, digest: content });
  } catch (e) {
    return NextResponse.json(
      {
        ok: false,
        error: e instanceof Error ? e.message : String(e)
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    to,
    date: resolvedDate,
    status: digest.status,
    storyCounts: {
      banking: (content.bankingStories ?? content.stories ?? []).length,
      ai: (content.aiStories ?? []).length
    }
  });
}

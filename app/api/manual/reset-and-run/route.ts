import { NextResponse } from "next/server";
import { ensureSchema, resetDigestForDate } from "@/lib/db";
import { runIngestion } from "@/lib/ingest";
import { generateFintechDigest } from "@/lib/digest";
import { runSendForToday } from "@/lib/send-digest";

export async function GET() {
  await ensureSchema();
  const digestDate = new Date().toISOString().slice(0, 10);

  const reset = await resetDigestForDate({
    digestDate,
    category: "fintech_banking"
  });
  const ingest = await runIngestion();
  const digest = await generateFintechDigest();
  const send = await runSendForToday({
    forceResend: true,
    bypassHitl: true
  });

  return NextResponse.json({
    ok: true,
    digestDate,
    reset,
    ingest,
    digest,
    send
  });
}

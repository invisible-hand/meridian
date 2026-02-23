import { NextResponse } from "next/server";
import { ensureSchema } from "@/lib/db";
import { runIngestion } from "@/lib/ingest";
import { generateFintechDigest } from "@/lib/digest";
import { runSendForToday } from "@/lib/send-digest";

export async function GET() {
  await ensureSchema();
  const ingest = await runIngestion();
  const digest = await generateFintechDigest();
  // Manual admin-triggered full run should always attempt delivery after regeneration.
  const send = await runSendForToday({
    forceResend: true,
    bypassHitl: true
  });

  return NextResponse.json({
    ok: true,
    ingest,
    digest,
    send
  });
}

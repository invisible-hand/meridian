import { NextResponse } from "next/server";
import { authorizeOperator } from "@/lib/api-auth";
import { ensureSchema } from "@/lib/db";
import { runIngestion } from "@/lib/ingest";
import { generateFintechDigest } from "@/lib/digest";
import { runSendForToday } from "@/lib/send-digest";

export async function GET(request: Request) {
  const denied = await authorizeOperator(request);
  if (denied) return denied;

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

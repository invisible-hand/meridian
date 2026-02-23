import { NextResponse } from "next/server";
import { ensureSchema } from "@/lib/db";
import { runSendForToday } from "@/lib/send-digest";

export async function GET() {
  await ensureSchema();
  const result = await runSendForToday({
    forceResend: true,
    bypassHitl: true,
    testMode: true
  });
  return NextResponse.json(result);
}

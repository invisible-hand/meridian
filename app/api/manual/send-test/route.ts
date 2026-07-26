import { NextResponse } from "next/server";
import { authorizeOperator } from "@/lib/api-auth";
import { ensureSchema } from "@/lib/db";
import { runSendForToday } from "@/lib/send-digest";

export async function GET(request: Request) {
  const denied = await authorizeOperator(request);
  if (denied) return denied;

  await ensureSchema();
  const result = await runSendForToday({
    forceResend: true,
    bypassHitl: true,
    testMode: true
  });
  return NextResponse.json(result);
}

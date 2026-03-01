import { NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { generateBriefSummaryLlm, buildBriefSummary } from "@/lib/digest";
import { DailyDigest } from "@/lib/types";

export const dynamic = "force-dynamic";

export async function POST(): Promise<NextResponse> {
  const supabase = getSupabaseAdminClient();
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";

  const { data: digests, error } = await supabase
    .from("digests")
    .select("id, content_json")
    .order("digest_date", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  let updated = 0;
  let skipped = 0;

  for (const row of digests ?? []) {
    const content = row.content_json as DailyDigest | null;
    if (!content) { skipped++; continue; }

    const bankingStories = content.bankingStories ?? content.stories ?? [];
    const aiStories = content.aiStories ?? [];
    if (bankingStories.length === 0 && aiStories.length === 0) { skipped++; continue; }

    const briefSummary = apiKey
      ? (await generateBriefSummaryLlm(bankingStories, aiStories, apiKey, model)) ||
        buildBriefSummary(bankingStories, aiStories)
      : buildBriefSummary(bankingStories, aiStories);

    if (!briefSummary) { skipped++; continue; }

    const { error: updateError } = await supabase
      .from("digests")
      .update({ content_json: { ...content, briefSummary } })
      .eq("id", row.id);

    if (updateError) {
      return NextResponse.json({ error: updateError.message, updatedSoFar: updated }, { status: 500 });
    }

    updated++;
  }

  return NextResponse.json({ updated, skipped });
}

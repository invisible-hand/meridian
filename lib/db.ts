import { getSupabaseAdminClient } from "@/lib/supabase";
import { DEFAULT_SOURCES } from "@/lib/default-sources";

type Subscriber = {
  id: number;
  email: string;
  status: "active" | "unsubscribed";
  created_at: Date;
};

type Source = {
  id: number;
  name: string;
  url: string;
  type: "rss" | "api";
  is_active: boolean;
  created_at: Date;
};

export type Digest = {
  id: number;
  digest_date: string;
  category: string;
  status: "draft" | "approved" | "sent" | "skipped";
  content_json: unknown;
  created_at: Date;
  approved_at: Date | null;
  sent_at: Date | null;
};

export type NewsItemInput = {
  title: string;
  url: string;
  canonicalUrl: string;
  urlHash: string;
  summary?: string | null;
  publishedAt?: string | null;
  sourceName?: string | null;
  sourceUrl?: string | null;
  raw?: unknown;
};

export type NewsItem = {
  id: number;
  title: string;
  url: string;
  canonical_url: string;
  summary: string | null;
  published_at: Date | null;
  source_name: string | null;
  source_url: string | null;
  ingested_at: Date;
};

export type SendLog = {
  id: number;
  digest_id: number;
  email: string;
  status: string;
  error: string | null;
  created_at: Date;
};

let schemaPromise: Promise<void> | null = null;

export async function ensureSchema(): Promise<void> {
  if (!schemaPromise) {
    schemaPromise = (async () => {
      const supabase = getSupabaseAdminClient();
      const { error } = await supabase.from("settings").select("key").limit(1);
      if (error) {
        throw new Error(
          "Supabase schema is missing. Run supabase-schema.sql in your Supabase SQL editor first."
        );
      }
      await seedDefaultSources();
      await ensureDefaultSettings();
    })();
  }
  return schemaPromise;
}

async function seedDefaultSources(): Promise<void> {
  const supabase = getSupabaseAdminClient();
  for (const source of DEFAULT_SOURCES) {
    await supabase
      .from("sources")
      .upsert({ name: source.name, url: source.url, type: source.type }, { onConflict: "url" });
  }
}

async function ensureDefaultSettings(): Promise<void> {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("settings")
    .select("key")
    .eq("key", "hitlRequired")
    .maybeSingle();
  if (error) {
    throw error;
  }
  if (!data) {
    const { error: insertError } = await supabase
      .from("settings")
      .insert({ key: "hitlRequired", value_json: { enabled: false } });
    if (insertError) {
      throw insertError;
    }
  }
}

export async function listSubscribers(): Promise<Subscriber[]> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("subscribers")
    .select("id,email,status,created_at")
    .order("created_at", { ascending: false });
  if (error) {
    throw error;
  }
  return (data as Subscriber[]) ?? [];
}

export async function addOrActivateSubscriber(email: string): Promise<void> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase
    .from("subscribers")
    .upsert({ email, status: "active", updated_at: new Date().toISOString() }, { onConflict: "email" });
  if (error) {
    throw error;
  }
}

export async function unsubscribeByEmail(email: string): Promise<void> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase
    .from("subscribers")
    .update({ status: "unsubscribed", updated_at: new Date().toISOString() })
    .eq("email", email);
  if (error) {
    throw error;
  }
}

export async function removeSubscriberById(id: number): Promise<void> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase.from("subscribers").delete().eq("id", id);
  if (error) {
    throw error;
  }
}

export async function listActiveSubscriberEmails(): Promise<string[]> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("subscribers")
    .select("email")
    .eq("status", "active");
  if (error) {
    throw error;
  }
  return (data ?? []).map((row) => row.email as string);
}

export async function listSources(): Promise<Source[]> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("sources")
    .select("id,name,url,type,is_active,created_at")
    .order("created_at", { ascending: false });
  if (error) {
    throw error;
  }
  return (data as Source[]) ?? [];
}

export async function listActiveSources(): Promise<Source[]> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("sources")
    .select("id,name,url,type,is_active,created_at")
    .eq("is_active", true)
    .order("created_at", { ascending: false });
  if (error) {
    throw error;
  }
  return (data as Source[]) ?? [];
}

export async function addSource(name: string, url: string, type: "rss" | "api" = "rss"): Promise<void> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase
    .from("sources")
    .upsert({ name, url, type }, { onConflict: "url" });
  if (error) {
    throw error;
  }
}

export async function removeSourceById(id: number): Promise<void> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase.from("sources").delete().eq("id", id);
  if (error) {
    throw error;
  }
}

export async function setHitlRequired(enabled: boolean): Promise<void> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase
    .from("settings")
    .upsert(
      { key: "hitlRequired", value_json: { enabled }, updated_at: new Date().toISOString() },
      { onConflict: "key" }
    );
  if (error) {
    throw error;
  }
}

export async function getHitlRequired(): Promise<boolean> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("settings")
    .select("value_json")
    .eq("key", "hitlRequired")
    .limit(1)
    .maybeSingle();
  if (error) {
    throw error;
  }
  return Boolean((data?.value_json as { enabled?: boolean } | null)?.enabled);
}

export async function listSentDigests(limit = 365): Promise<Digest[]> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("digests")
    .select("id,digest_date,category,status,content_json,created_at,approved_at,sent_at")
    .eq("status", "sent")
    .order("digest_date", { ascending: false })
    .limit(limit);
  if (error) {
    throw error;
  }
  return (data as Digest[]) ?? [];
}

export async function listRecentDigests(limit = 7): Promise<Digest[]> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("digests")
    .select("id,digest_date,category,status,content_json,created_at,approved_at,sent_at")
    .order("digest_date", { ascending: false })
    .limit(limit);
  if (error) {
    throw error;
  }
  return (data as Digest[]) ?? [];
}

export async function approveDigestById(digestId: number): Promise<void> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();
  const { data: current, error: readError } = await supabase
    .from("digests")
    .select("status")
    .eq("id", digestId)
    .maybeSingle();
  if (readError) {
    throw readError;
  }
  if (!current || !["draft", "skipped"].includes(String(current.status))) {
    return;
  }
  const { error } = await supabase
    .from("digests")
    .update({ status: "approved", approved_at: new Date().toISOString() })
    .eq("id", digestId);
  if (error) {
    throw error;
  }
}

export async function skipDigestById(digestId: number): Promise<void> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();
  const { data: current, error: readError } = await supabase
    .from("digests")
    .select("status")
    .eq("id", digestId)
    .maybeSingle();
  if (readError) {
    throw readError;
  }
  if (!current || !["draft", "approved"].includes(String(current.status))) {
    return;
  }
  const { error } = await supabase.from("digests").update({ status: "skipped" }).eq("id", digestId);
  if (error) {
    throw error;
  }
}

export async function insertNewsItem(input: NewsItemInput): Promise<boolean> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();
  const { data: existing, error: readError } = await supabase
    .from("news_items")
    .select("id")
    .eq("url_hash", input.urlHash)
    .maybeSingle();
  if (readError) {
    throw readError;
  }

  if (existing) {
    const { error: updateError } = await supabase
      .from("news_items")
      .update({
        title: input.title,
        url: input.url,
        canonical_url: input.canonicalUrl,
        summary: input.summary ?? null,
        published_at: input.publishedAt ?? null,
        source_name: input.sourceName ?? null,
        source_url: input.sourceUrl ?? null,
        raw_json: input.raw ?? {},
        ingested_at: new Date().toISOString()
      })
      .eq("id", existing.id);
    if (updateError) {
      throw updateError;
    }
    return false;
  }

  const { error: insertError } = await supabase.from("news_items").insert({
    title: input.title,
    url: input.url,
    canonical_url: input.canonicalUrl,
    url_hash: input.urlHash,
    summary: input.summary ?? null,
    published_at: input.publishedAt ?? null,
    source_name: input.sourceName ?? null,
    source_url: input.sourceUrl ?? null,
    raw_json: input.raw ?? {}
  });
  if (insertError) {
    throw insertError;
  }
  return true;
}

export async function listNewsItemsSince(hours: number): Promise<NewsItem[]> {
  await ensureSchema();
  const thresholdIso = new Date(Date.now() - hours * 60 * 60 * 1000).toISOString();
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("news_items")
    .select("id,title,url,canonical_url,summary,published_at,source_name,source_url,ingested_at")
    .gte("ingested_at", thresholdIso)
    .order("published_at", { ascending: false, nullsFirst: false });
  if (error) {
    throw error;
  }
  return (data as NewsItem[]) ?? [];
}

export async function listRecentNewsItems(limit = 100): Promise<NewsItem[]> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("news_items")
    .select("id,title,url,canonical_url,summary,published_at,source_name,source_url,ingested_at")
    .order("ingested_at", { ascending: false })
    .limit(limit);
  if (error) {
    throw error;
  }
  return (data as NewsItem[]) ?? [];
}

export async function upsertDailyDigest(params: {
  digestDate: string;
  category: string;
  contentJson: unknown;
  generationMeta?: unknown;
}): Promise<void> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();
  const { data: existing, error: existingError } = await supabase
    .from("digests")
    .select("id,status")
    .eq("digest_date", params.digestDate)
    .eq("category", params.category)
    .maybeSingle();
  if (existingError) {
    throw existingError;
  }

  if (existing) {
    const currentStatus = String(existing.status);
    const nextStatus = currentStatus === "sent" ? "sent" : "draft";
    const { error } = await supabase
      .from("digests")
      .update({
        status: nextStatus,
        content_json: params.contentJson,
        generation_meta: params.generationMeta ?? {},
        approved_at: nextStatus === "draft" ? null : undefined
      })
      .eq("id", existing.id);
    if (error) {
      throw error;
    }
    return;
  }

  const { error } = await supabase.from("digests").insert({
    digest_date: params.digestDate,
    category: params.category,
    status: "draft",
    content_json: params.contentJson,
    generation_meta: params.generationMeta ?? {}
  });
  if (error) {
    throw error;
  }
}

export async function getDigestForDate(params: {
  digestDate: string;
  category: string;
}): Promise<Digest | null> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("digests")
    .select("id,digest_date,category,status,content_json,created_at,approved_at,sent_at")
    .eq("digest_date", params.digestDate)
    .eq("category", params.category)
    .maybeSingle();
  if (error) {
    throw error;
  }
  return (data as Digest | null) ?? null;
}

export async function markDigestSent(digestId: number): Promise<void> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase
    .from("digests")
    .update({ status: "sent", sent_at: new Date().toISOString() })
    .eq("id", digestId);
  if (error) {
    throw error;
  }
}

export async function addSendLog(params: {
  digestId: number;
  email: string;
  status: string;
  error?: string | null;
}): Promise<void> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase.from("send_logs").insert({
    digest_id: params.digestId,
    email: params.email,
    status: params.status,
    error: params.error ?? null
  });
  if (error) {
    throw error;
  }
}

export async function listRecentSendLogs(limit = 100): Promise<SendLog[]> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("send_logs")
    .select("id,digest_id,email,status,error,created_at")
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) {
    throw error;
  }
  return (data as SendLog[]) ?? [];
}

export async function resetDigestForDate(params: {
  digestDate: string;
  category: string;
}): Promise<{ deletedDigests: number; deletedSendLogs: number }> {
  await ensureSchema();
  const supabase = getSupabaseAdminClient();

  const { data: digests, error: readError } = await supabase
    .from("digests")
    .select("id")
    .eq("digest_date", params.digestDate)
    .eq("category", params.category);
  if (readError) {
    throw readError;
  }

  const digestIds = (digests ?? []).map((d) => Number(d.id)).filter((id) => Number.isFinite(id));
  let deletedSendLogs = 0;

  if (digestIds.length > 0) {
    const { error: deleteLogsError, count: logsCount } = await supabase
      .from("send_logs")
      .delete({ count: "exact" })
      .in("digest_id", digestIds);
    if (deleteLogsError) {
      throw deleteLogsError;
    }
    deletedSendLogs = logsCount ?? 0;
  }

  const { error: deleteDigestError, count: digestsCount } = await supabase
    .from("digests")
    .delete({ count: "exact" })
    .eq("digest_date", params.digestDate)
    .eq("category", params.category);
  if (deleteDigestError) {
    throw deleteDigestError;
  }

  return {
    deletedDigests: digestsCount ?? 0,
    deletedSendLogs
  };
}

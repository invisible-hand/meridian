import { createClient } from "@supabase/supabase-js";

// The schema is untyped (no generated Database type yet), so the client is
// deliberately `any`-typed: with the default generic supabase-js narrows every
// table to `never`. Generating types from supabase-schema.sql would remove this.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cachedClient: ReturnType<typeof createClient<any>> | null = null;

export function getSupabaseAdminClient() {
  if (cachedClient) {
    return cachedClient;
  }

  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cachedClient = createClient<any>(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
  return cachedClient;
}

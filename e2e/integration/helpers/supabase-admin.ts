/**
 * Direct Supabase admin client for integration test assertions.
 *
 * Uses the service role key to read/write data for verification
 * without going through the Next.js API routes.
 */

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (client) return client;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("Missing Supabase credentials for integration tests");
  }
  client = createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  return client;
}

/** Read a user's current plan from the users table */
export async function getUserPlan(userId: string): Promise<string | null> {
  const { data } = await getSupabaseAdmin()
    .from("users")
    .select("plan")
    .eq("id", userId)
    .single();
  return data?.plan ?? null;
}

/** Update a user's plan directly (for test setup) */
export async function setUserPlan(
  userId: string,
  plan: string
): Promise<void> {
  await getSupabaseAdmin()
    .from("users")
    .update({ plan, updated_at: new Date().toISOString() })
    .eq("id", userId);
}

/** Update a user's stripe_customer_id directly (for webhook tests) */
export async function setStripeCustomerId(
  userId: string,
  customerId: string
): Promise<void> {
  await getSupabaseAdmin()
    .from("users")
    .update({
      stripe_customer_id: customerId,
      updated_at: new Date().toISOString(),
    })
    .eq("id", userId);
}

/** Read a user's full row from the users table */
export async function getUserRow(
  userId: string
): Promise<Record<string, unknown> | null> {
  const { data } = await getSupabaseAdmin()
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();
  return data;
}

/** Get today's usage count for a user */
export async function getTodayUsageCount(userId: string): Promise<number> {
  const today = new Date().toISOString().split("T")[0];
  const { data } = await getSupabaseAdmin()
    .from("usage")
    .select("count")
    .eq("user_id", userId)
    .eq("date", today)
    .single();
  return data?.count ?? 0;
}

/** Set today's usage count for a user (for test setup) */
export async function setTodayUsageCount(
  userId: string,
  count: number
): Promise<void> {
  const today = new Date().toISOString().split("T")[0];
  await getSupabaseAdmin().from("usage").upsert(
    { user_id: userId, date: today, count },
    { onConflict: "user_id,date" }
  );
}

/** Count contact messages matching a subject pattern */
export async function countContactMessages(
  subjectLike: string
): Promise<number> {
  const { data } = await getSupabaseAdmin()
    .from("contact_messages")
    .select("id")
    .like("subject", subjectLike);
  return data?.length ?? 0;
}

/** Delete contact messages matching a subject pattern */
export async function deleteContactMessages(
  subjectLike: string
): Promise<void> {
  await getSupabaseAdmin()
    .from("contact_messages")
    .delete()
    .like("subject", subjectLike);
}

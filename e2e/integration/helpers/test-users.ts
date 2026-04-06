/**
 * Integration test user management.
 *
 * Creates and authenticates test users against a dedicated test Supabase project.
 * Each user has a specific plan for testing tier-gated features.
 *
 * IMPORTANT: These users exist in the TEST Supabase project only,
 * never in production. See .env.test for credentials.
 */

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const TEST_PASSWORD = "TestPass123!";

export interface TestUser {
  id: string;
  email: string;
  plan: "free" | "pro" | "business" | "enterprise";
}

/** All test users and their target plans */
export const TEST_USERS = {
  free: { email: "inttest-free@pdfit-test.local", plan: "free" as const },
  freeMutable: {
    email: "inttest-free-mutable@pdfit-test.local",
    plan: "free" as const,
  },
  pro: { email: "inttest-pro@pdfit-test.local", plan: "pro" as const },
  business: {
    email: "inttest-business@pdfit-test.local",
    plan: "business" as const,
  },
  enterprise: {
    email: "inttest-enterprise@pdfit-test.local",
    plan: "enterprise" as const,
  },
  webhookTarget: {
    email: "inttest-webhook@pdfit-test.local",
    plan: "free" as const,
  },
} as const;

let adminClient: SupabaseClient | null = null;

function getAdminClient(): SupabaseClient {
  if (adminClient) return adminClient;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY for integration tests. " +
        "Copy .env.test.example to .env.test and fill in your test Supabase credentials."
    );
  }
  adminClient = createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  return adminClient;
}

/**
 * Upsert a single test user. Idempotent — safe to call repeatedly.
 * Creates the auth user + the `users` table row with the correct plan.
 */
async function upsertTestUser(
  email: string,
  plan: string
): Promise<TestUser> {
  const client = getAdminClient();

  // Check if user already exists
  const { data: existingUsers } = await client.auth.admin.listUsers({
    perPage: 1,
    page: 1,
  });

  // Search by email using the admin API
  const { data: userList } = await client.auth.admin.listUsers({
    perPage: 50,
    page: 1,
  });

  const existing = userList?.users?.find((u) => u.email === email);

  let userId: string;

  if (existing) {
    userId = existing.id;
  } else {
    // Create the auth user
    const { data, error } = await client.auth.admin.createUser({
      email,
      password: TEST_PASSWORD,
      email_confirm: true, // Skip email verification
    });
    if (error) {
      throw new Error(`Failed to create test user ${email}: ${error.message}`);
    }
    userId = data.user.id;
  }

  // Upsert the users table row with the target plan
  const { error: upsertError } = await client.from("users").upsert(
    {
      id: userId,
      email,
      plan,
      name: `Test ${plan}`,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "id" }
  );

  if (upsertError) {
    console.warn(
      `[test-users] Could not upsert users row for ${email}:`,
      upsertError.message
    );
  }

  return { id: userId, email, plan: plan as TestUser["plan"] };
}

/** Provision all test users. Called from global setup. */
export async function provisionTestUsers(): Promise<
  Record<keyof typeof TEST_USERS, TestUser>
> {
  const results: Record<string, TestUser> = {};
  for (const [key, config] of Object.entries(TEST_USERS)) {
    results[key] = await upsertTestUser(config.email, config.plan);
  }
  return results as Record<keyof typeof TEST_USERS, TestUser>;
}

/**
 * Sign in as a test user and return auth cookies as a string
 * that can be passed in request headers.
 *
 * This calls the Supabase Auth REST API directly to get tokens,
 * then formats them as the chunked cookie format that @supabase/ssr expects.
 */
export async function getAuthCookies(
  email: string,
  password: string = TEST_PASSWORD
): Promise<string> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    throw new Error("Missing Supabase URL or anon key for auth");
  }

  // Sign in via the Supabase REST API
  const res = await fetch(`${url}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: anonKey,
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Auth sign-in failed for ${email}: ${res.status} ${body}`);
  }

  const session = await res.json();

  // Build the cookie value that @supabase/ssr expects.
  // The project ref is extracted from the Supabase URL (e.g., https://abcdef.supabase.co -> abcdef)
  const projectRef = new URL(url).hostname.split(".")[0];
  const cookieName = `sb-${projectRef}-auth-token`;

  // @supabase/ssr stores session as a base64-encoded JSON string,
  // split across chunked cookies (.0, .1, etc.) if > 3180 chars.
  const sessionPayload = JSON.stringify({
    access_token: session.access_token,
    refresh_token: session.refresh_token,
    expires_in: session.expires_in,
    expires_at: session.expires_at,
    token_type: session.token_type,
    user: session.user,
  });

  const encoded = Buffer.from(sessionPayload).toString("base64");
  const CHUNK_SIZE = 3180;

  if (encoded.length <= CHUNK_SIZE) {
    return `${cookieName}=${encoded}`;
  }

  // Split into chunks
  const cookies: string[] = [];
  for (let i = 0; i < encoded.length; i += CHUNK_SIZE) {
    const chunk = encoded.slice(i, i + CHUNK_SIZE);
    const index = Math.floor(i / CHUNK_SIZE);
    cookies.push(`${cookieName}.${index}=${chunk}`);
  }
  return cookies.join("; ");
}

/**
 * Get auth cookies for a named test user.
 */
export async function getTestUserCookies(
  role: keyof typeof TEST_USERS
): Promise<string> {
  return getAuthCookies(TEST_USERS[role].email);
}

/**
 * Reset usage counters for a test user. Call in beforeEach to avoid flaky tests.
 */
export async function resetUsage(userId: string): Promise<void> {
  const client = getAdminClient();
  const today = new Date().toISOString().split("T")[0];

  // Delete today's usage entry
  await client
    .from("usage")
    .delete()
    .eq("user_id", userId)
    .eq("date", today);

  // Delete usage_logs for this user
  await client.from("usage_logs").delete().eq("user_id", userId);
}

/**
 * Clean up test data created during test runs.
 */
export async function cleanupTestData(): Promise<void> {
  const client = getAdminClient();

  // Delete contact_messages created by tests (identified by subject prefix)
  await client
    .from("contact_messages")
    .delete()
    .like("subject", "inttest-%");

  // Delete usage rows for all test users
  for (const config of Object.values(TEST_USERS)) {
    const { data: user } = await client
      .from("users")
      .select("id")
      .eq("email", config.email)
      .single();
    if (user) {
      await client.from("usage").delete().eq("user_id", user.id);
      await client.from("usage_logs").delete().eq("user_id", user.id);
    }
  }
}

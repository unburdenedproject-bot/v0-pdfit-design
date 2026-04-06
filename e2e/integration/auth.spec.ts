/**
 * Integration tests: Authentication & user-plan
 *
 * Tests the auth-related API routes against real Supabase.
 * Verifies session management, plan lookup, and password flows.
 */

import { test, expect } from "@playwright/test";
import { getTestUserCookies, TEST_USERS } from "./helpers/test-users";

// ---------- /api/user-plan ----------

test.describe("/api/user-plan", () => {
  test("unauthenticated request returns plan: free", async ({
    request,
    baseURL,
  }) => {
    const res = await request.get(`${baseURL}/api/user-plan`);
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.plan).toBe("free");
  });

  test("free user returns plan: free", async ({ request, baseURL }) => {
    const cookies = await getTestUserCookies("free");
    const res = await request.get(`${baseURL}/api/user-plan`, {
      headers: { Cookie: cookies },
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.plan).toBe("free");
  });

  test("Pro user returns plan: pro", async ({ request, baseURL }) => {
    const cookies = await getTestUserCookies("pro");
    const res = await request.get(`${baseURL}/api/user-plan`, {
      headers: { Cookie: cookies },
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.plan).toBe("pro");
  });

  test("Business user returns plan: business", async ({
    request,
    baseURL,
  }) => {
    const cookies = await getTestUserCookies("business");
    const res = await request.get(`${baseURL}/api/user-plan`, {
      headers: { Cookie: cookies },
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.plan).toBe("business");
  });

  test("Enterprise user returns plan: enterprise", async ({
    request,
    baseURL,
  }) => {
    const cookies = await getTestUserCookies("enterprise");
    const res = await request.get(`${baseURL}/api/user-plan`, {
      headers: { Cookie: cookies },
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.plan).toBe("enterprise");
  });

  test("invalid/expired auth cookie returns plan: free", async ({
    request,
    baseURL,
  }) => {
    const res = await request.get(`${baseURL}/api/user-plan`, {
      headers: {
        Cookie: "sb-fake-auth-token=invalid_token_data",
      },
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.plan).toBe("free");
  });

  test("tampered auth cookie returns plan: free (not 500)", async ({
    request,
    baseURL,
  }) => {
    // Get real cookies then corrupt them
    const cookies = await getTestUserCookies("pro");
    const tampered = cookies.replace(/=(.{10})/, "=XXXXXXXXXX");
    const res = await request.get(`${baseURL}/api/user-plan`, {
      headers: { Cookie: tampered },
    });
    // Should gracefully fall back to "free", never 500
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.plan).toBe("free");
  });
});

// ---------- /api/forgot-password ----------

test.describe("/api/forgot-password", () => {
  test("valid email returns success (no info leak)", async ({
    request,
    baseURL,
  }) => {
    const res = await request.post(`${baseURL}/api/forgot-password`, {
      headers: { "Content-Type": "application/json" },
      data: { email: TEST_USERS.free.email },
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
  });

  test("non-existent email also returns success (no info leak)", async ({
    request,
    baseURL,
  }) => {
    const res = await request.post(`${baseURL}/api/forgot-password`, {
      headers: { "Content-Type": "application/json" },
      data: { email: "definitely-not-a-user@example.com" },
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
  });

  test("missing email returns 400", async ({ request, baseURL }) => {
    const res = await request.post(`${baseURL}/api/forgot-password`, {
      headers: { "Content-Type": "application/json" },
      data: {},
    });
    expect(res.status()).toBe(400);
  });
});

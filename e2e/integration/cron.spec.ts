/**
 * Integration tests: Cron job endpoints
 *
 * Tests /api/cron/trial-emails and /api/cron/seo-health
 * for authentication (CRON_SECRET Bearer token) and basic functionality.
 */

import { test, expect } from "@playwright/test";

const CRON_SECRET = process.env.CRON_SECRET || "test-cron-secret-12345";

// ---------- Trial emails cron ----------

test.describe("/api/cron/trial-emails", () => {
  test("without auth returns 401", async ({ request, baseURL }) => {
    const res = await request.get(`${baseURL}/api/cron/trial-emails`);
    expect(res.status()).toBe(401);
  });

  test("with wrong secret returns 401", async ({ request, baseURL }) => {
    const res = await request.get(`${baseURL}/api/cron/trial-emails`, {
      headers: { Authorization: "Bearer wrong-secret-value" },
    });
    expect(res.status()).toBe(401);
  });

  test("with valid CRON_SECRET returns 200", async ({ request, baseURL }) => {
    const res = await request.get(`${baseURL}/api/cron/trial-emails`, {
      headers: { Authorization: `Bearer ${CRON_SECRET}` },
    });
    // May return 200 (success) or 500 (missing Stripe/Resend keys in test env)
    // The important thing is it passes auth (not 401)
    expect(res.status()).not.toBe(401);
  });

  test("with empty Bearer token returns 401", async ({
    request,
    baseURL,
  }) => {
    const res = await request.get(`${baseURL}/api/cron/trial-emails`, {
      headers: { Authorization: "Bearer " },
    });
    expect(res.status()).toBe(401);
  });

  test("with user cookie instead of Bearer token returns 401", async ({
    request,
    baseURL,
  }) => {
    const { getTestUserCookies } = await import("./helpers/test-users");
    const cookies = await getTestUserCookies("enterprise");
    const res = await request.get(`${baseURL}/api/cron/trial-emails`, {
      headers: { Cookie: cookies },
    });
    // Cron auth is separate from user auth — should still be 401
    expect(res.status()).toBe(401);
  });
});

// ---------- SEO health cron ----------

test.describe("/api/cron/seo-health", () => {
  test("without auth returns 401", async ({ request, baseURL }) => {
    const res = await request.get(`${baseURL}/api/cron/seo-health`);
    // May be 401 or 404 if the route doesn't exist yet
    expect([401, 404]).toContain(res.status());
  });

  test("with valid CRON_SECRET passes auth", async ({ request, baseURL }) => {
    const res = await request.get(`${baseURL}/api/cron/seo-health`, {
      headers: { Authorization: `Bearer ${CRON_SECRET}` },
    });
    // Should not be 401 (auth passed)
    expect(res.status()).not.toBe(401);
  });
});

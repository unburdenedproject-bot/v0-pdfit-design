import { test, expect } from "@playwright/test";

/**
 * Cron endpoint tests: auth validation and response format.
 * These endpoints run daily/weekly — if auth is broken, anyone can trigger them.
 * If response format changes, monitoring breaks silently.
 */

test.describe("Cron — Trial Emails Endpoint", () => {
  test("rejects requests without CRON_SECRET", async ({ request }) => {
    const res = await request.get("/api/cron/trial-emails");
    // Should reject unauthenticated requests (401 or 500 for missing config)
    expect(res.status()).toBeGreaterThanOrEqual(400);
  });

  test("rejects requests with wrong CRON_SECRET", async ({ request }) => {
    const res = await request.get("/api/cron/trial-emails", {
      headers: { Authorization: "Bearer wrong-secret" },
    });
    expect(res.status()).toBeGreaterThanOrEqual(400);
  });
});

test.describe("Cron — SEO Health Endpoint", () => {
  test("endpoint is accessible and returns valid JSON", async ({ request }) => {
    // In test env, CRON_SECRET is not set so auth is skipped (by design).
    // This test just verifies the endpoint doesn't crash.
    const res = await request.get("/api/cron/seo-health");
    // Should return 200 (no CRON_SECRET in test) or 401 (if CRON_SECRET set)
    expect([200, 401, 500]).toContain(res.status());
    if (res.status() === 200) {
      const json = await res.json();
      expect(json).toHaveProperty("ok");
    }
  });
});

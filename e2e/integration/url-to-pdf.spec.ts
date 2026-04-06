/**
 * Integration tests: URL-to-PDF SSRF protection
 *
 * Verifies that the /api/url-to-pdf route blocks internal URLs,
 * cloud metadata endpoints, and non-HTTP schemes.
 *
 * P0-SEC: These tests verify the SSRF fix in lib/url-validation.js
 */

import { test, expect } from "@playwright/test";
import { getTestUserCookies } from "./helpers/test-users";

// All SSRF tests need a Pro+ user (url-to-pdf is pro-gated)
let proCookies: string;

test.beforeAll(async () => {
  proCookies = await getTestUserCookies("pro");
});

function postUrlToPdf(
  request: any,
  baseURL: string,
  url: string,
  cookies: string
) {
  return request.post(`${baseURL}/api/url-to-pdf`, {
    headers: {
      Cookie: cookies,
      "Content-Type": "application/json",
    },
    data: { url },
  });
}

// ---------- SSRF: Cloud metadata ----------

test.describe("SSRF: Cloud metadata blocking", () => {
  test("blocks AWS metadata endpoint (169.254.169.254)", async ({
    request,
    baseURL,
  }) => {
    const res = await postUrlToPdf(
      request,
      baseURL!,
      "http://169.254.169.254/latest/meta-data/",
      proCookies
    );
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("internal");
  });

  test("blocks GCP metadata endpoint", async ({ request, baseURL }) => {
    const res = await postUrlToPdf(
      request,
      baseURL!,
      "http://metadata.google.internal/computeMetadata/v1/",
      proCookies
    );
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("internal");
  });
});

// ---------- SSRF: Loopback addresses ----------

test.describe("SSRF: Loopback blocking", () => {
  test("blocks localhost", async ({ request, baseURL }) => {
    const res = await postUrlToPdf(
      request,
      baseURL!,
      "http://localhost:3000/api/user-plan",
      proCookies
    );
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("internal");
  });

  test("blocks 127.0.0.1", async ({ request, baseURL }) => {
    const res = await postUrlToPdf(
      request,
      baseURL!,
      "http://127.0.0.1/secret",
      proCookies
    );
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("internal");
  });

  test("blocks IPv6 loopback [::1]", async ({ request, baseURL }) => {
    const res = await postUrlToPdf(
      request,
      baseURL!,
      "http://[::1]/secret",
      proCookies
    );
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("internal");
  });

  test("blocks 0.0.0.0", async ({ request, baseURL }) => {
    const res = await postUrlToPdf(
      request,
      baseURL!,
      "http://0.0.0.0/",
      proCookies
    );
    expect(res.status()).toBe(400);
  });
});

// ---------- SSRF: Private IP ranges ----------

test.describe("SSRF: Private IP blocking", () => {
  test("blocks 10.x.x.x", async ({ request, baseURL }) => {
    const res = await postUrlToPdf(
      request,
      baseURL!,
      "http://10.0.0.1/admin",
      proCookies
    );
    expect(res.status()).toBe(400);
  });

  test("blocks 172.16-31.x.x", async ({ request, baseURL }) => {
    const res = await postUrlToPdf(
      request,
      baseURL!,
      "http://172.16.0.1/internal",
      proCookies
    );
    expect(res.status()).toBe(400);
  });

  test("blocks 192.168.x.x", async ({ request, baseURL }) => {
    const res = await postUrlToPdf(
      request,
      baseURL!,
      "http://192.168.1.1/router",
      proCookies
    );
    expect(res.status()).toBe(400);
  });
});

// ---------- Non-HTTP schemes ----------

test.describe("Non-HTTP scheme blocking", () => {
  test("blocks file:// scheme", async ({ request, baseURL }) => {
    const res = await postUrlToPdf(
      request,
      baseURL!,
      "file:///etc/passwd",
      proCookies
    );
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("HTTP");
  });

  test("blocks ftp:// scheme", async ({ request, baseURL }) => {
    const res = await postUrlToPdf(
      request,
      baseURL!,
      "ftp://evil.com/payload",
      proCookies
    );
    expect(res.status()).toBe(400);
  });

  test("blocks javascript: scheme", async ({ request, baseURL }) => {
    const res = await postUrlToPdf(
      request,
      baseURL!,
      "javascript:alert(1)",
      proCookies
    );
    expect(res.status()).toBe(400);
  });
});

// ---------- Input validation ----------

test.describe("URL-to-PDF input validation", () => {
  test("missing URL field returns 400", async ({ request, baseURL }) => {
    const res = await request.post(`${baseURL}/api/url-to-pdf`, {
      headers: {
        Cookie: proCookies,
        "Content-Type": "application/json",
      },
      data: {},
    });
    expect(res.status()).toBe(400);
  });

  test("invalid URL format returns 400", async ({ request, baseURL }) => {
    const res = await postUrlToPdf(
      request,
      baseURL!,
      "not-a-valid-url",
      proCookies
    );
    expect(res.status()).toBe(400);
  });

  test("free user gets 403 (pro-only feature)", async ({
    request,
    baseURL,
  }) => {
    const freeCookies = await getTestUserCookies("free");
    const res = await postUrlToPdf(
      request,
      baseURL!,
      "https://example.com",
      freeCookies
    );
    expect(res.status()).toBe(403);
  });
});

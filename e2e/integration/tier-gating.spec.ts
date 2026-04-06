/**
 * Integration tests: Tier gating
 *
 * Verifies that API routes correctly enforce plan requirements.
 * Tests the actual Supabase plan lookup, not mocked values.
 *
 * Tier gates:
 * - Pro+: url-to-pdf, ocr-pdf, pdf-to-word, pdf-to-excel, pdf-to-powerpoint, qr-code
 * - Business+: table-extraction, pdf-redaction, esign
 * - Enterprise: all Business features (must always pass Business gates)
 */

import { test, expect } from "@playwright/test";
import { getTestUserCookies } from "./helpers/test-users";
import { readFileSync } from "fs";
import { fixturePath } from "../helpers/paths";

// ---------- Pro-gated routes ----------

test.describe("Pro-gated routes", () => {
  test("free user cannot access /api/url-to-pdf", async ({
    request,
    baseURL,
  }) => {
    const cookies = await getTestUserCookies("free");
    const res = await request.post(`${baseURL}/api/url-to-pdf`, {
      headers: {
        Cookie: cookies,
        "Content-Type": "application/json",
      },
      data: { url: "https://example.com" },
    });
    expect(res.status()).toBe(403);
    const body = await res.json();
    expect(body.error).toBe("upgrade_required");
  });

  test("unauthenticated user cannot access /api/url-to-pdf", async ({
    request,
    baseURL,
  }) => {
    const res = await request.post(`${baseURL}/api/url-to-pdf`, {
      headers: { "Content-Type": "application/json" },
      data: { url: "https://example.com" },
    });
    expect(res.status()).toBe(403);
  });

  test("Pro user passes tier gate on /api/url-to-pdf", async ({
    request,
    baseURL,
  }) => {
    const cookies = await getTestUserCookies("pro");
    const res = await request.post(`${baseURL}/api/url-to-pdf`, {
      headers: {
        Cookie: cookies,
        "Content-Type": "application/json",
      },
      data: { url: "https://example.com" },
    });
    // Should NOT be 403 — will be 500 (no CloudConvert key) or 200
    expect(res.status()).not.toBe(403);
  });

  test("free user cannot access /api/pdf-to-word", async ({
    request,
    baseURL,
  }) => {
    const cookies = await getTestUserCookies("free");
    const res = await request.post(`${baseURL}/api/pdf-to-word`, {
      headers: { Cookie: cookies },
      multipart: {
        file: {
          name: "valid.pdf",
          mimeType: "application/pdf",
          buffer: readFileSync(fixturePath("valid.pdf")),
        },
      },
    });
    expect(res.status()).toBe(403);
    const body = await res.json();
    expect(body.error).toBe("upgrade_required");
  });

  test("Pro user passes tier gate on /api/pdf-to-word", async ({
    request,
    baseURL,
  }) => {
    const cookies = await getTestUserCookies("pro");
    const res = await request.post(`${baseURL}/api/pdf-to-word`, {
      headers: { Cookie: cookies },
      multipart: {
        file: {
          name: "valid.pdf",
          mimeType: "application/pdf",
          buffer: readFileSync(fixturePath("valid.pdf")),
        },
      },
    });
    // 403 = tier gate failed; anything else = passed gate
    expect(res.status()).not.toBe(403);
  });

  test("free user cannot access /api/ocr-pdf", async ({
    request,
    baseURL,
  }) => {
    const cookies = await getTestUserCookies("free");
    const res = await request.post(`${baseURL}/api/ocr-pdf`, {
      headers: {
        Cookie: cookies,
        "Content-Type": "application/json",
      },
      data: { blobUrl: "https://fake-blob.vercel-storage.com/test.pdf" },
    });
    // OCR route checks plan — free users get 403
    expect(res.status()).toBe(403);
  });
});

// ---------- Business-gated routes ----------

test.describe("Business-gated routes", () => {
  test("free user cannot access /api/table-extraction", async ({
    request,
    baseURL,
  }) => {
    const cookies = await getTestUserCookies("free");
    const res = await request.post(`${baseURL}/api/table-extraction`, {
      headers: {
        Cookie: cookies,
        "Content-Type": "application/json",
      },
      data: { blobUrl: "https://fake-blob.vercel-storage.com/test.pdf" },
    });
    expect(res.status()).toBe(403);
    const body = await res.json();
    expect(body.error).toBe("upgrade_required");
  });

  test("Pro user cannot access /api/table-extraction", async ({
    request,
    baseURL,
  }) => {
    const cookies = await getTestUserCookies("pro");
    const res = await request.post(`${baseURL}/api/table-extraction`, {
      headers: {
        Cookie: cookies,
        "Content-Type": "application/json",
      },
      data: { blobUrl: "https://fake-blob.vercel-storage.com/test.pdf" },
    });
    expect(res.status()).toBe(403);
    const body = await res.json();
    expect(body.error).toBe("upgrade_required");
  });

  test("Business user passes tier gate on /api/table-extraction", async ({
    request,
    baseURL,
  }) => {
    const cookies = await getTestUserCookies("business");
    const res = await request.post(`${baseURL}/api/table-extraction`, {
      headers: {
        Cookie: cookies,
        "Content-Type": "application/json",
      },
      data: { blobUrl: "https://fake-blob.vercel-storage.com/test.pdf" },
    });
    // Should NOT be 403 — will fail later (no Document AI key) but passes tier gate
    expect(res.status()).not.toBe(403);
  });

  test("free user cannot access /api/pdf-redaction", async ({
    request,
    baseURL,
  }) => {
    const cookies = await getTestUserCookies("free");
    const res = await request.post(`${baseURL}/api/pdf-redaction`, {
      headers: {
        Cookie: cookies,
        "Content-Type": "application/json",
      },
      data: {
        blobUrl: "https://fake-blob.vercel-storage.com/test.pdf",
        redactedPages: [],
      },
    });
    expect(res.status()).toBe(403);
  });
});

// ---------- Enterprise gets Business access ----------

test.describe("Enterprise access to Business features", () => {
  test("Enterprise user passes tier gate on /api/table-extraction", async ({
    request,
    baseURL,
  }) => {
    const cookies = await getTestUserCookies("enterprise");
    const res = await request.post(`${baseURL}/api/table-extraction`, {
      headers: {
        Cookie: cookies,
        "Content-Type": "application/json",
      },
      data: { blobUrl: "https://fake-blob.vercel-storage.com/test.pdf" },
    });
    // Enterprise must pass Business gates
    expect(res.status()).not.toBe(403);
  });

  test("Enterprise user passes tier gate on /api/pdf-redaction", async ({
    request,
    baseURL,
  }) => {
    const cookies = await getTestUserCookies("enterprise");
    const res = await request.post(`${baseURL}/api/pdf-redaction`, {
      headers: {
        Cookie: cookies,
        "Content-Type": "application/json",
      },
      data: {
        blobUrl: "https://fake-blob.vercel-storage.com/test.pdf",
        redactedPages: [
          {
            page: 0,
            blobUrl: "https://fake-blob.vercel-storage.com/page0.png",
            width: 612,
            height: 792,
          },
        ],
      },
    });
    // Enterprise must pass Business gates
    expect(res.status()).not.toBe(403);
  });

  test("Enterprise user passes tier gate on /api/url-to-pdf", async ({
    request,
    baseURL,
  }) => {
    const cookies = await getTestUserCookies("enterprise");
    const res = await request.post(`${baseURL}/api/url-to-pdf`, {
      headers: {
        Cookie: cookies,
        "Content-Type": "application/json",
      },
      data: { url: "https://example.com" },
    });
    // Enterprise must also pass Pro gates
    expect(res.status()).not.toBe(403);
  });
});

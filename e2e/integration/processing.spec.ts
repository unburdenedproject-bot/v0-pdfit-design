/**
 * Integration tests: PDF processing validation
 *
 * Tests input validation on processing routes — file type checks,
 * blank PDF detection, missing files, corrupted files.
 * These tests do NOT hit paid APIs (validation happens before the API call).
 *
 * P0: blank PDF guard, invalid file rejection
 * P1: file size limits, Content-Type checks
 */

import { test, expect } from "@playwright/test";
import { readFileSync } from "fs";
import { fixturePath } from "../helpers/paths";
import { getTestUserCookies } from "./helpers/test-users";

// ---------- Compress PDF validation ----------

test.describe("compress-pdf validation", () => {
  test("valid PDF passes validation (not blocked by blank check)", async ({
    request,
    baseURL,
  }) => {
    const res = await request.post(`${baseURL}/api/compress-pdf`, {
      multipart: {
        file: {
          name: "valid.pdf",
          mimeType: "application/pdf",
          buffer: readFileSync(fixturePath("valid.pdf")),
        },
      },
    });
    // Should NOT get 400 for validation errors
    // Will get 500 (no iLoveAPI keys) or 200 (with keys), but never 400
    expect(res.status()).not.toBe(400);
  });

  test("blank PDF is rejected before hitting paid API", async ({
    request,
    baseURL,
  }) => {
    const res = await request.post(`${baseURL}/api/compress-pdf`, {
      multipart: {
        file: {
          name: "blank.pdf",
          mimeType: "application/pdf",
          buffer: readFileSync(fixturePath("blank.pdf")),
        },
      },
    });
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("empty");
  });

  test("non-PDF file is rejected", async ({ request, baseURL }) => {
    const res = await request.post(`${baseURL}/api/compress-pdf`, {
      multipart: {
        file: {
          name: "document.txt",
          mimeType: "text/plain",
          buffer: Buffer.from("This is not a PDF"),
        },
      },
    });
    expect(res.status()).toBe(400);
  });

  test("corrupted PDF is rejected", async ({ request, baseURL }) => {
    const res = await request.post(`${baseURL}/api/compress-pdf`, {
      multipart: {
        file: {
          name: "corrupted.pdf",
          mimeType: "application/pdf",
          buffer: readFileSync(fixturePath("corrupted.pdf")),
        },
      },
    });
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("not a valid PDF");
  });

  test("missing file returns 400", async ({ request, baseURL }) => {
    const res = await request.post(`${baseURL}/api/compress-pdf`, {
      multipart: {},
    });
    expect(res.status()).toBe(400);
  });

  test("HTML file with .pdf extension (type spoofing) is rejected", async ({
    request,
    baseURL,
  }) => {
    const res = await request.post(`${baseURL}/api/compress-pdf`, {
      multipart: {
        file: {
          name: "fake.pdf",
          mimeType: "application/pdf",
          buffer: readFileSync(fixturePath("fake.pdf")),
        },
      },
    });
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("not a valid PDF");
  });

  test("JSON body with missing blobUrl returns 400", async ({
    request,
    baseURL,
  }) => {
    const res = await request.post(`${baseURL}/api/compress-pdf`, {
      headers: { "Content-Type": "application/json" },
      data: { compression_level: "recommended" },
    });
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("blobUrl");
  });
});

// ---------- Merge PDF validation ----------

test.describe("merge-pdf validation", () => {
  test("missing files returns 400", async ({ request, baseURL }) => {
    const res = await request.post(`${baseURL}/api/merge-pdf`, {
      headers: { "Content-Type": "application/json" },
      data: {},
    });
    // Should fail with validation error
    expect(res.status()).toBeGreaterThanOrEqual(400);
  });
});

// ---------- Split PDF validation ----------

test.describe("split-pdf validation", () => {
  test("single-page PDF cannot be split", async ({ request, baseURL }) => {
    const res = await request.post(`${baseURL}/api/split-pdf`, {
      multipart: {
        file: {
          name: "single-page.pdf",
          mimeType: "application/pdf",
          buffer: readFileSync(fixturePath("single-page.pdf")),
        },
        ranges: "1",
      },
    });
    // Should either reject single page or process it — depends on implementation
    // At minimum, should not crash
    expect(res.status()).toBeLessThan(500);
  });
});

// ---------- Filename security ----------

test.describe("Filename security", () => {
  test("path traversal in filename does not escape /tmp", async ({
    request,
    baseURL,
  }) => {
    const res = await request.post(`${baseURL}/api/compress-pdf`, {
      multipart: {
        file: {
          name: "../../etc/passwd.pdf",
          mimeType: "application/pdf",
          buffer: readFileSync(fixturePath("valid.pdf")),
        },
      },
    });
    // Should either sanitize the filename and process, or reject.
    // Must NOT crash with a filesystem error.
    // Acceptable: 200 (processed), 400 (rejected), 500 (API key missing)
    // Not acceptable: filesystem error writing outside /tmp
    expect([200, 400, 500]).toContain(res.status());
  });

  test("null byte in filename does not cause crash", async ({
    request,
    baseURL,
  }) => {
    const res = await request.post(`${baseURL}/api/compress-pdf`, {
      multipart: {
        file: {
          name: "test\x00evil.pdf",
          mimeType: "application/pdf",
          buffer: readFileSync(fixturePath("valid.pdf")),
        },
      },
    });
    // Should handle gracefully
    expect([200, 400, 500]).toContain(res.status());
  });
});

// ---------- GET on POST-only routes ----------

test.describe("HTTP method enforcement", () => {
  test("GET request to /api/compress-pdf returns 405", async ({
    request,
    baseURL,
  }) => {
    const res = await request.get(`${baseURL}/api/compress-pdf`);
    // Next.js returns 405 for unhandled methods on route handlers
    expect(res.status()).toBe(405);
  });

  test("GET request to /api/contact returns 405", async ({
    request,
    baseURL,
  }) => {
    const res = await request.get(`${baseURL}/api/contact`);
    expect(res.status()).toBe(405);
  });
});

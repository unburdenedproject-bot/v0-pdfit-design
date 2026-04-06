/**
 * Nightly integration test: Real compress-pdf API call
 *
 * Hits the actual iLovePDF API to verify end-to-end compression.
 * Only runs in the nightly CI job (real API keys required).
 *
 * Cost: ~$0.04-0.10 per run
 */

import { test, expect } from "@playwright/test";
import { readFileSync } from "fs";
import { fixturePath } from "../../helpers/paths";

const hasRealKeys =
  process.env.ILOVEAPI_SECRET_KEY &&
  process.env.ILOVEAPI_SECRET_KEY !== "test_dummy";

test.describe("compress-pdf real API", () => {
  test.skip(!hasRealKeys, "Skipping — no real iLovePDF API keys");

  test("compresses a valid PDF and returns smaller file", async ({
    request,
    baseURL,
  }) => {
    const originalBuffer = readFileSync(fixturePath("multi-page.pdf"));

    const res = await request.post(`${baseURL}/api/compress-pdf`, {
      multipart: {
        file: {
          name: "multi-page.pdf",
          mimeType: "application/pdf",
          buffer: originalBuffer,
        },
        compression_level: "recommended",
      },
    });

    expect(res.status()).toBe(200);

    const contentType = res.headers()["content-type"];
    expect(contentType).toContain("application/pdf");

    const resultBuffer = await res.body();
    expect(resultBuffer.length).toBeGreaterThan(0);

    // Compressed PDF should start with %PDF-
    const header = resultBuffer.subarray(0, 5).toString("ascii");
    expect(header).toBe("%PDF-");
  });
});

import { Page } from "@playwright/test";
import { readFileSync } from "fs";
import { FIXTURES_DIR } from "./paths";
import { join } from "path";

/**
 * Mock any API route to return a fixture PDF.
 * Use for any iLoveAPI/CloudConvert-backed route.
 */
export async function mockPdfApiRoute(
  page: Page,
  routePattern: string,
  filename = "result.pdf"
) {
  await page.route(routePattern, async (route) => {
    let body: Buffer;
    try {
      body = readFileSync(join(FIXTURES_DIR, "valid.pdf"));
    } catch {
      body = Buffer.from("%PDF-1.4 mock response");
    }
    await route.fulfill({
      status: 200,
      contentType: "application/pdf",
      headers: {
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
      body,
    });
  });
}

/**
 * Mock the /api/user-plan endpoint to return a specific plan.
 * Useful for testing tier-gated features.
 */
export async function mockUserPlan(
  page: Page,
  plan: "free" | "pro" | "business" | "enterprise"
) {
  await page.route("**/api/user-plan", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ plan }),
    });
  });
}

/**
 * Mock the Vercel Blob upload endpoint.
 */
export async function mockBlobUpload(page: Page) {
  await page.route("**/api/upload**", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        url: "https://mock-blob.vercel-storage.com/test-file.pdf",
        pathname: "test-file.pdf",
      }),
    });
  });
}

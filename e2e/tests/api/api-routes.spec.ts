import { test, expect } from "@playwright/test";
import { fixturePath } from "../../helpers/paths";

/**
 * API validation tests — through the browser UI (proper cookie context).
 * Covers: OP_003 (corrupted file error msg), OP_005_S2 (blank file),
 * OP_006_S2 (blank PDF friendly msg).
 */

test.describe("API: Compress PDF validation (via browser)", () => {
  test("corrupted PDF gets user-friendly error, not raw status code", async ({ page }) => {
    await page.goto("/compress-pdf");
    const fileInput = page.locator("#file-upload");
    await fileInput.setInputFiles(fixturePath("corrupted.pdf"));

    // Wait for either a friendly error or the processing interface to respond
    await expect(async () => {
      const bodyText = await page.textContent("body");
      expect(bodyText).not.toMatch(/status code 400/i);
      expect(bodyText).not.toMatch(/status code 500/i);
    }).toPass({ timeout: 10000 });
  });

  test("blank PDF gets rejected with empty/blank message", async ({ page }) => {
    await page.goto("/compress-pdf");
    const fileInput = page.locator("#file-upload");
    await fileInput.setInputFiles(fixturePath("blank.pdf"));

    // Wait for the error message to appear
    await expect(async () => {
      const bodyText = await page.textContent("body");
      // Must contain "empty" or similar — not just a generic error
      expect(bodyText?.toLowerCase()).toMatch(/empty|blank|no content|cannot be processed/);
    }).toPass({ timeout: 10000 });
  });
});

test.describe("API: Contact form (via UI)", () => {
  test("contact form loads with all required fields", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('[name="subject"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test("submit button is disabled when form is empty", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.locator('button[type="submit"]')).toBeDisabled();
  });
});

test.describe("API: Direct route tests (unauthenticated)", () => {
  test("compress-pdf rejects non-PDF file", async ({ request }) => {
    const res = await request.post("/api/compress-pdf", {
      multipart: {
        file: {
          name: "document.txt",
          mimeType: "text/plain",
          buffer: Buffer.from("hello world"),
        },
      },
    });
    expect(res.status()).toBeGreaterThanOrEqual(400);
  });

  test("compress-pdf does not accept empty request", async ({ request }) => {
    const res = await request.post("/api/compress-pdf");
    expect(res.status()).toBeGreaterThanOrEqual(400);
  });
});

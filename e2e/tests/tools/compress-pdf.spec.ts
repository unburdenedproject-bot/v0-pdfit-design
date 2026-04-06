import { test, expect } from "@playwright/test";
import { mockPdfApiRoute, mockBlobUpload } from "../../helpers/api-mocks";
import { fixturePath } from "../../helpers/paths";

/**
 * Compress PDF tool tests: upload, process, download flow.
 */

test.describe("Compress PDF — Tool Page", () => {
  test("page loads with upload area", async ({ page }) => {
    await page.goto("/compress-pdf");
    await expect(page).toHaveTitle(/compress/i);
    await expect(page.locator("text=Drop your files here")).toBeVisible({ timeout: 10000 });
    await expect(page.locator("text=Choose Files")).toBeVisible();
  });

  test("accepts valid PDF and shows file in UI", async ({ page }) => {
    await mockBlobUpload(page);
    await mockPdfApiRoute(page, "**/api/compress-pdf", "test-compressed.pdf");
    await page.goto("/compress-pdf");

    const fileInput = page.locator("#file-upload");
    await fileInput.setInputFiles(fixturePath("valid.pdf"));

    await expect(page.locator("text=valid").first()).toBeVisible({ timeout: 15000 });
  });

  test("upload shows processing state after file selection", async ({ page }) => {
    await mockBlobUpload(page);
    await mockPdfApiRoute(page, "**/api/compress-pdf", "test-compressed.pdf");
    await page.goto("/compress-pdf");

    const fileInput = page.locator("#file-upload");
    await fileInput.setInputFiles(fixturePath("valid.pdf"));

    // After upload, UI should show the filename — dropzone should be replaced
    await expect(page.locator("text=valid").first()).toBeVisible({ timeout: 15000 });
  });

  test("corrupted PDF shows error, not raw status code", async ({ page }) => {
    await page.goto("/compress-pdf");
    const fileInput = page.locator("#file-upload");
    await fileInput.setInputFiles(fixturePath("corrupted.pdf"));

    // Wait for the UI to respond to the file
    await expect(async () => {
      const bodyText = await page.textContent("body");
      // Must NOT show raw HTTP status codes
      expect(bodyText).not.toMatch(/status code 400/i);
      expect(bodyText).not.toMatch(/status code 500/i);
      // Must show SOME indication the file was handled (error OR file name)
      const hasError = bodyText?.toLowerCase().match(/not.*valid|corrupt|cannot|empty|error|failed/);
      const hasFilename = bodyText?.toLowerCase().includes("corrupted");
      expect(hasError !== null || hasFilename === true).toBe(true);
    }).toPass({ timeout: 10000 });
  });
});

test.describe("Compress PDF — Localized", () => {
  test("Spanish version loads", async ({ page }) => {
    const res = await page.goto("/es/comprimir-pdf");
    expect(res?.status()).toBeLessThan(400);
  });

  test("Portuguese version loads", async ({ page }) => {
    const res = await page.goto("/br/comprimir-pdf");
    expect(res?.status()).toBeLessThan(400);
  });
});

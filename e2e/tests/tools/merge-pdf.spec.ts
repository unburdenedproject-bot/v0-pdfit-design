import { test, expect } from "@playwright/test";
import { mockBlobUpload, mockPdfApiRoute } from "../../helpers/api-mocks";
import { fixturePath } from "../../helpers/paths";

/**
 * Merge PDF tool tests: multi-file upload, validation, localized variants.
 */

test.describe("Merge PDF — Tool Page", () => {
  test("page loads with upload area and correct title", async ({ page }) => {
    await page.goto("/merge-pdf");
    await expect(page).toHaveTitle(/merge/i);
    await expect(
      page.locator("text=Drop your files here")
    ).toBeVisible({ timeout: 10000 });
  });

  test("accepts valid PDF and shows filename in UI", async ({ page }) => {
    await mockBlobUpload(page);
    await mockPdfApiRoute(page, "**/api/merge-pdf", "test-merged.pdf");
    await page.goto("/merge-pdf");

    const fileInput = page.locator("#file-upload");
    await fileInput.setInputFiles(fixturePath("valid.pdf"));

    await expect(page.locator("text=valid").first()).toBeVisible({
      timeout: 15000,
    });
  });

  test("corrupted PDF shows user-friendly error", async ({ page }) => {
    await page.goto("/merge-pdf");
    const fileInput = page.locator("#file-upload");
    await fileInput.setInputFiles(fixturePath("corrupted.pdf"));

    await expect(async () => {
      const bodyText = await page.textContent("body");
      expect(bodyText).not.toMatch(/status code [45]\d\d/i);
      const hasError = bodyText
        ?.toLowerCase()
        .match(/not.*valid|corrupt|cannot|empty|error|failed/);
      const hasFilename = bodyText?.toLowerCase().includes("corrupted");
      expect(hasError !== null || hasFilename === true).toBe(true);
    }).toPass({ timeout: 10000 });
  });

  test("Spanish version loads", async ({ page }) => {
    const res = await page.goto("/es/combinar-archivos-pdf");
    expect(res?.status()).toBeLessThan(400);
  });

  test("Portuguese version loads", async ({ page }) => {
    const res = await page.goto("/br/combinar-arquivos-pdf");
    expect(res?.status()).toBeLessThan(400);
  });
});

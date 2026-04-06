import { test, expect } from "@playwright/test";
import { mockBlobUpload, mockPdfApiRoute } from "../../helpers/api-mocks";
import { fixturePath } from "../../helpers/paths";

/**
 * Split PDF tool tests: page range input, single-page rejection, localized variants.
 * SplitPdfInterface uses #split-file-upload (not #file-upload).
 */

test.describe("Split PDF — Tool Page", () => {
  test("page loads with upload area", async ({ page }) => {
    await page.goto("/split-pdf");
    await expect(page).toHaveTitle(/split/i);
    await expect(
      page.locator("text=Drop your PDF here")
    ).toBeVisible({ timeout: 10000 });
  });

  test("single-page PDF shows cannot-be-split error", async ({ page }) => {
    await mockBlobUpload(page);
    await page.goto("/split-pdf");

    const fileInput = page.locator("#split-file-upload");
    await fileInput.setInputFiles(fixturePath("single-page.pdf"));

    // SplitPdfInterface checks page count client-side via pdf-lib
    // Fill ranges and click split to trigger the validation
    const rangeInput = page.locator('input[type="text"]').first();
    await expect(rangeInput).toBeVisible({ timeout: 10000 });
    await rangeInput.fill("1");

    const splitBtn = page.getByRole("button", { name: /split/i });
    await expect(splitBtn).toBeVisible({ timeout: 5000 });
    await splitBtn.click();

    await expect(
      page.getByText(/only 1 page|cannot be split/i)
    ).toBeVisible({ timeout: 10000 });
  });

  test("accepts multi-page PDF and shows filename", async ({ page }) => {
    await mockBlobUpload(page);
    await mockPdfApiRoute(page, "**/api/split-pdf", "test-split.pdf");
    await page.goto("/split-pdf");

    const fileInput = page.locator("#split-file-upload");
    await fileInput.setInputFiles(fixturePath("multi-page.pdf"));

    await expect(page.locator("text=multi-page").first()).toBeVisible({
      timeout: 15000,
    });
  });

  test("Spanish version loads", async ({ page }) => {
    const res = await page.goto("/es/dividir-pdf");
    expect(res?.status()).toBeLessThan(400);
  });

  test("Portuguese version loads", async ({ page }) => {
    const res = await page.goto("/br/dividir-pdf");
    expect(res?.status()).toBeLessThan(400);
  });
});

import { test, expect } from "@playwright/test";

/**
 * Tier gating tests: verify pro-only tools show upgrade prompts
 * and free tools are accessible without login.
 */

test.describe("Tier Gating — Pro Tools", () => {
  test("OCR scanner indicates pro/upgrade requirement", async ({ page }) => {
    await page.goto("/ocr-scanner");
    // Look for upgrade links or pro badges
    const upgradeLink = page.locator('a[href*="upgrade"]').or(page.locator('a[href*="pricing"]'));
    const proBadge = page.getByText(/upgrade to pro/i).or(page.getByText(/pro feature/i));
    const indicator = upgradeLink.or(proBadge);
    await expect(indicator.first()).toBeVisible({ timeout: 10000 });
  });

  test("PDF to Word indicates pro/upgrade requirement", async ({ page }) => {
    await page.goto("/pdf-to-word");
    const upgradeLink = page.locator('a[href*="upgrade"]').or(page.locator('a[href*="pricing"]'));
    const proBadge = page.getByText(/upgrade to pro/i).or(page.getByText(/pro feature/i));
    const indicator = upgradeLink.or(proBadge);
    await expect(indicator.first()).toBeVisible({ timeout: 10000 });
  });
});

test.describe("Tier Gating — Free Tools", () => {
  test("compress-pdf shows upload area without upgrade wall", async ({ page }) => {
    await page.goto("/compress-pdf");
    await expect(page.locator("text=Drop your files here")).toBeVisible({ timeout: 10000 });
  });

  test("merge-pdf shows upload area without upgrade wall", async ({ page }) => {
    await page.goto("/merge-pdf");
    await expect(page.locator("text=Drop your files here")).toBeVisible({ timeout: 10000 });
  });
});

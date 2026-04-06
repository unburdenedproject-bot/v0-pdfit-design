import { test, expect } from "@playwright/test";
import { mockUserPlan } from "../../helpers/api-mocks";

/**
 * URL to PDF tool tests: Pro gating, URL input form, localized variants.
 * UrlPdfInterface fetches /api/user-plan and gates on pro/business/enterprise.
 */

test.describe("URL to PDF — Tier Gating", () => {
  test("free user sees Pro upgrade prompt", async ({ page }) => {
    await page.goto("/url-to-pdf");
    await expect(
      page.getByRole("heading", { name: /pro feature/i })
    ).toBeVisible({ timeout: 10000 });
  });

  test("Pro user sees URL input form", async ({ page }) => {
    await mockUserPlan(page, "pro");
    await page.goto("/url-to-pdf");
    // Wait for client-side hydration to fetch user plan and show the form
    await expect(async () => {
      const urlInput = page.locator('input[type="url"]');
      await expect(urlInput).toBeVisible({ timeout: 3000 });
    }).toPass({ timeout: 15000 });
  });
});

test.describe("URL to PDF — Localized", () => {
  test("Spanish version loads", async ({ page }) => {
    const res = await page.goto("/es/url-a-pdf");
    expect(res?.status()).toBeLessThan(400);
  });
});

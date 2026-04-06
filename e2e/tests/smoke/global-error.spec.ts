import { test, expect } from "@playwright/test";

/**
 * Global error page tests: verifies the error boundary renders correctly.
 * Critical — if this is broken, users see a blank white page on errors.
 */

test.describe("Global Error Boundary", () => {
  test("404 page shows helpful content", async ({ page }) => {
    const res = await page.goto("/this-page-definitely-does-not-exist-12345");
    expect(res?.status()).toBe(404);
    // Should show some helpful content, not a blank page
    const body = await page.textContent("body");
    expect(body?.length).toBeGreaterThan(50);
  });

  test("404 page has navigation back to home", async ({ page }) => {
    await page.goto("/this-page-definitely-does-not-exist-12345");
    // Should have a link back to home or tools
    const homeLink = page
      .locator('a[href="/"]')
      .or(page.getByText(/go home|back to home|homepage/i));
    await expect(homeLink.first()).toBeVisible({ timeout: 5000 });
  });
});

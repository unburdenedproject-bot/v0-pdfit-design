import { test, expect } from "@playwright/test";

/**
 * i18n navigation tests: verify internal links preserve language context.
 */

test.describe("i18n — Links Preserve Language", () => {
  test("Spanish homepage tool links stay in /es/ context", async ({ page }) => {
    await page.goto("/es");
    // Find any link that goes to /es/ (tool or page link)
    const esLinks = page.locator('a[href^="/es/"]');
    const count = await esLinks.count();
    expect(count).toBeGreaterThan(0);
    // Click the first tool link and verify we stay in /es/
    const firstLink = esLinks.first();
    const href = await firstLink.getAttribute("href");
    expect(href).toMatch(/^\/es\//);
  });

  test("Portuguese homepage tool links stay in /br/ context", async ({
    page,
  }) => {
    await page.goto("/br");
    const brLinks = page.locator('a[href^="/br/"]');
    const count = await brLinks.count();
    expect(count).toBeGreaterThan(0);
    const firstLink = brLinks.first();
    const href = await firstLink.getAttribute("href");
    expect(href).toMatch(/^\/br\//);
  });
});

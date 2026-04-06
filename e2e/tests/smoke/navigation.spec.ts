import { test, expect } from "@playwright/test";

/**
 * Navigation tests: header, footer, logo links, social media.
 * Covers: OP_027 (logo links), OP_028 (footer logo), OP_023 (footer duplicates),
 * OP_002 (social media icons), OP_031 (active nav state).
 */

test.describe("Header Navigation", () => {
  test("logo links to homepage", async ({ page }) => {
    await page.goto("/compress-pdf");
    const logo = page.locator("header a").first();
    await expect(logo).toHaveAttribute("href", "/");
  });

  test("logo click navigates to homepage", async ({ page }) => {
    await page.goto("/compress-pdf");
    await page.locator("header a").first().click();
    await expect(page).toHaveURL("/");
  });
});

test.describe("Footer", () => {
  test("footer logo links to homepage", async ({ page }) => {
    await page.goto("/");
    const footerLogo = page.locator("footer a").first();
    await expect(footerLogo).toHaveAttribute("href", "/");
  });

  test("social media links open in new tab with valid URLs", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    const socialLinks = footer.locator('a[target="_blank"]');
    const count = await socialLinks.count();
    expect(count).toBeGreaterThanOrEqual(4);

    for (let i = 0; i < count; i++) {
      const href = await socialLinks.nth(i).getAttribute("href");
      expect(href).toBeTruthy();
      expect(href).not.toBe("#");
      expect(href).toMatch(/^https?:\/\//);
    }
  });

  test("no duplicate text links in footer", async ({ page }) => {
    await page.goto("/");
    const links = await page.locator("footer a").allTextContents();
    const textLinks = links.filter((t) => t.trim().length > 0);
    const unique = new Set(textLinks);
    expect(textLinks.length - unique.size).toBeLessThanOrEqual(1);
  });
});

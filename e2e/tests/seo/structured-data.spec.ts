import { test, expect } from "@playwright/test";
import { expectSeoMeta } from "../../helpers/assertions";

/**
 * Structured data & meta tag tests:
 * - FAQ schema on learn articles
 * - OG tags on homepage
 * - Twitter card tags on homepage
 */

test.describe("Structured Data — FAQ Schema on Learn Articles", () => {
  test("learn article has FAQPage JSON-LD schema", async ({ page }) => {
    await page.goto("/learn/what-is-ocr");
    // Check for JSON-LD script tag in page source
    const pageContent = await page.content();
    expect(pageContent).toContain("application/ld+json");
    expect(pageContent).toContain("FAQPage");
  });
});

test.describe("Meta Tags — Homepage", () => {
  test("homepage has OG title and description", async ({ page }) => {
    await page.goto("/");
    const ogTitle = await page.getAttribute(
      'meta[property="og:title"]',
      "content"
    );
    expect(ogTitle).toBeTruthy();
    expect(ogTitle!.length).toBeGreaterThan(5);

    const ogDesc = await page.getAttribute(
      'meta[property="og:description"]',
      "content"
    );
    expect(ogDesc).toBeTruthy();
  });

  test("homepage has Twitter card tags", async ({ page }) => {
    await page.goto("/");
    const twitterCard = await page.getAttribute(
      'meta[name="twitter:card"]',
      "content"
    );
    expect(twitterCard).toBeTruthy();
  });

  test("homepage has canonical URL", async ({ page }) => {
    await page.goto("/");
    const canonical = await page.getAttribute(
      'link[rel="canonical"]',
      "href"
    );
    expect(canonical).toBeTruthy();
  });
});

test.describe("SEO Meta — Tool Page", () => {
  test("compress-pdf has proper title and description", async ({ page }) => {
    await page.goto("/compress-pdf");
    await expectSeoMeta(page);
  });
});

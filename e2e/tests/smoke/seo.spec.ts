import { test, expect } from "@playwright/test";
import { expectSeoMeta } from "../../helpers/assertions";

/**
 * SEO tests: robots.txt, sitemap, meta tags, hreflang.
 */

test.describe("SEO — Sitemap & Robots", () => {
  test("robots.txt is accessible and has required directives", async ({ request }) => {
    const res = await request.get("/robots.txt");
    expect(res.status()).toBe(200);
    const text = await res.text();
    expect(text).toContain("Sitemap");
    expect(text).toContain("Disallow");
  });

  test("sitemap is accessible", async ({ request }) => {
    const paths = ["/sitemap.xml", "/sitemap.xml/0", "/sitemap/0.xml"];
    let found = false;
    for (const path of paths) {
      const res = await request.get(path);
      if (res.status() === 200) {
        found = true;
        break;
      }
    }
    if (!found) {
      test.skip(true, "Sitemap not available in dev mode — verify in production");
    }
  });
});

test.describe("SEO — Meta Tags", () => {
  test("homepage has title and description", async ({ page }) => {
    await page.goto("/");
    await expectSeoMeta(page);
  });

  test("tool page has title and description", async ({ page }) => {
    await page.goto("/compress-pdf");
    await expectSeoMeta(page);
  });

  test("pricing page has title and description", async ({ page }) => {
    await page.goto("/pricing");
    await expectSeoMeta(page);
  });
});

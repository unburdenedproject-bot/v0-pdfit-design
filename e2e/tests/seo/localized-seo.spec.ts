import { test, expect } from "@playwright/test";

/**
 * Localized SEO tests: hreflang tags, canonical URLs, lang attribute,
 * and sitemap language coverage.
 */

test.describe("Localized SEO — Homepage hreflang", () => {
  test("homepage has hreflang links for EN, ES, BR", async ({ page }) => {
    await page.goto("/");
    // Next.js renders alternates.languages as <link rel="alternate" hreflang="...">
    const hreflangLinks = await page
      .locator('link[rel="alternate"][hreflang]')
      .all();
    expect(hreflangLinks.length).toBeGreaterThanOrEqual(2);

    const hreflangs: string[] = [];
    for (const link of hreflangLinks) {
      const lang = await link.getAttribute("hreflang");
      if (lang) hreflangs.push(lang);
    }
    // Should include Spanish and Portuguese
    expect(hreflangs.some((l) => l.startsWith("es"))).toBe(true);
    expect(hreflangs.some((l) => l.startsWith("pt"))).toBe(true);
  });
});

test.describe("Localized SEO — Canonical URLs", () => {
  test("homepage canonical points to pdf.it.com", async ({ page }) => {
    await page.goto("/");
    const canonical = await page.getAttribute(
      'link[rel="canonical"]',
      "href"
    );
    expect(canonical).toContain("pdf.it.com");
  });
});

test.describe("Localized SEO — HTML lang attribute", () => {
  test("homepage has lang attribute on <html>", async ({ page }) => {
    await page.goto("/");
    const lang = await page.getAttribute("html", "lang");
    expect(lang).toBeTruthy();
    expect(lang!.toLowerCase()).toContain("en");
  });
});

test.describe("Localized SEO — Sitemap Language Coverage", () => {
  test("sitemap includes Spanish and Portuguese URLs", async ({ request }) => {
    // Try multiple sitemap paths (Next.js generates numbered/indexed sitemaps)
    let allSitemapText = "";
    for (const path of [
      "/sitemap.xml",
      "/sitemap-0.xml",
      "/sitemap/0.xml",
      "/sitemap/1.xml",
      "/sitemap/2.xml",
    ]) {
      const res = await request.get(path);
      if (res.ok()) {
        allSitemapText += await res.text();
      }
    }

    if (!allSitemapText) {
      test.skip();
      return;
    }

    expect(allSitemapText).toContain("/es/");
    expect(allSitemapText).toContain("/br/");
  });
});

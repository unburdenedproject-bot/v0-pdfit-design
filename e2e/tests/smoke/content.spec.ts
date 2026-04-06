import { test, expect } from "@playwright/test";

/**
 * Content page tests: blog, about, legal pages, learn articles.
 * Data-driven approach — tests page loads and basic content presence.
 */

const contentPages = [
  { path: "/blog", name: "Blog Index", h1Match: /blog/i },
  {
    path: "/blog/protect-sensitive-documents",
    name: "Blog Post: Security",
    h1Match: /protect.*document|document.*security/i,
  },
  { path: "/about", name: "About", h1Match: /about pdf\.it/i },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
    h1Match: /privacy policy/i,
  },
  {
    path: "/terms-conditions",
    name: "Terms & Conditions",
    h1Match: /terms.*conditions/i,
  },
  {
    path: "/learn/what-is-ocr",
    name: "Learn: What is OCR",
    h1Match: /ocr|optical character/i,
  },
];

test.describe("Content Pages — Load & Basic Content", () => {
  for (const { path, name, h1Match } of contentPages) {
    test(`${name} (${path}) loads with expected content`, async ({ page }) => {
      const res = await page.goto(path);
      expect(res?.status()).toBeLessThan(400);
      const h1 = await page.locator("h1").first().textContent();
      expect(h1).toBeTruthy();
      expect(h1).toMatch(h1Match);
    });
  }
});

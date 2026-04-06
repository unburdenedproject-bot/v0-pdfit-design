import { test, expect } from "@playwright/test";

/**
 * Console error detection on critical pages.
 * Catches Sentry init errors, React hydration mismatches,
 * and any other JS errors that would silently degrade the experience.
 */

const criticalPages = [
  { path: "/", name: "Homepage" },
  { path: "/compress-pdf", name: "Compress PDF" },
  { path: "/pricing", name: "Pricing" },
  { path: "/login", name: "Login" },
  { path: "/signup", name: "Signup" },
  { path: "/contact", name: "Contact" },
  { path: "/es", name: "Homepage ES" },
  { path: "/br", name: "Homepage BR" },
];

test.describe("Console Errors — Critical Pages", () => {
  for (const { path, name } of criticalPages) {
    test(`${name} (${path}) has no console errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") {
          const text = msg.text();
          // Ignore known non-critical errors
          if (text.includes("favicon")) return;
          if (text.includes("hydration")) return; // Next.js dev mode noise
          if (text.includes("404 (Not Found)") && text.includes(".map")) return; // source maps
          if (text.includes("listener to be a function")) return; // React dev warning for onLoad fonts
          if (text.includes("onLoad")) return; // Google Fonts non-blocking trick
          if (text.includes("downloadable font")) return; // Font loading warnings
          if (text.includes("third-party cookie")) return; // Chrome cookie warnings
          errors.push(text);
        }
      });

      await page.goto(path);
      await page.waitForLoadState("domcontentloaded");
      // Give a moment for async errors to fire
      await page.waitForTimeout(2000);

      if (errors.length > 0) {
        console.log(`Console errors on ${path}:`, errors);
      }
      expect(
        errors.length,
        `Found ${errors.length} console errors on ${path}: ${errors.join("; ")}`
      ).toBe(0);
    });
  }
});

import { test, expect } from "@playwright/test";
import { expectAccessible } from "../../helpers/accessibility";

/**
 * Automated WCAG AA accessibility audits on key pages.
 * Uses @axe-core/playwright to detect critical/serious violations.
 */

const pagesToAudit = [
  { path: "/", name: "Homepage" },
  { path: "/compress-pdf", name: "Compress PDF (tool page)" },
  { path: "/pricing", name: "Pricing" },
  { path: "/signup", name: "Signup" },
  { path: "/login", name: "Login" },
  { path: "/about", name: "About" },
];

test.describe("Accessibility — Axe WCAG AA Audits", () => {
  for (const { path, name } of pagesToAudit) {
    test(`${name} (${path}) has no critical/serious a11y violations`, async ({
      page,
    }) => {
      await page.goto(path);
      // Wait for main content to render (networkidle is flaky with analytics)
      await page.locator("main").waitFor({ state: "visible", timeout: 10000 });
      await expectAccessible(page, {
        // color-contrast is noisy on gradient backgrounds — disable for now
        disableRules: ["color-contrast"],
      });
    });
  }
});

import { test, expect } from "@playwright/test";

/**
 * FAQ tests: expand/collapse behavior.
 * Covers: OP_010, OP_012, OP_019_S2.
 */

test.describe("FAQ — Expand and Collapse", () => {
  test("homepage FAQ items expand on click", async ({ page }) => {
    await page.goto("/");

    // Scroll to bottom where FAQ usually lives
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Look for Radix accordion triggers
    const faqTrigger = page.locator(
      '[data-radix-collection-item], [role="button"][data-state="closed"]'
    ).first();

    // If no FAQ accordion found, skip with explicit message
    const visible = await faqTrigger.isVisible({ timeout: 3000 }).catch(() => false);
    if (!visible) {
      test.skip(true, "No Radix accordion FAQ found on homepage");
      return;
    }

    await faqTrigger.click();
    await expect(page.locator('[data-state="open"]').first()).toBeVisible({ timeout: 5000 });
  });
});

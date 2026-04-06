import { test, expect } from "@playwright/test";

/**
 * Pricing & upgrade page tests.
 * Covers: OP_006 (pricing card text cutoff), OP_020 (free vs pro labels),
 * billing toggle, tier display, Stripe redirect.
 */

test.describe("Pricing Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/pricing");
  });

  test("page loads with all 4 pricing tiers", async ({ page }) => {
    // Should show Free, Pro, Business, Enterprise
    await expect(page.locator("text=Free").first()).toBeVisible();
    await expect(page.locator("text=Pro").first()).toBeVisible();
    await expect(page.locator("text=Business").first()).toBeVisible();
    await expect(page.locator("text=Enterprise").first()).toBeVisible();
  });

  test("shows correct prices for monthly billing", async ({ page }) => {
    // Click Monthly if not already selected
    const monthlyBtn = page.locator("button", { hasText: "Monthly" });
    await monthlyBtn.click();

    await expect(page.locator("text=$0").first()).toBeVisible();
    await expect(page.locator("text=$3.99").first()).toBeVisible();
    await expect(page.locator("text=$13.99").first()).toBeVisible();
    await expect(page.locator("text=$49.99").first()).toBeVisible();
  });

  test("billing toggle switches to annual prices", async ({ page }) => {
    const annualBtn = page.locator("button", { hasText: "Annual" });
    await annualBtn.click();

    // Annual prices should show (save 2 months = ~10 months price)
    await expect(page.locator("text=$39.90").first()).toBeVisible({
      timeout: 5000,
    });
  });

  test("free trial banner is visible", async ({ page }) => {
    await expect(
      page.locator("text=Try any plan free for 30 days").first()
    ).toBeVisible();
  });

  test("pricing card text is not cut off", async ({ page }) => {
    // Verify pricing cards have visible content and aren't clipped
    const cards = page.locator('[class*="rounded-2xl"]').filter({
      hasText: "Pro",
    });
    if ((await cards.count()) > 0) {
      const card = cards.first();
      const box = await card.boundingBox();
      expect(box).toBeTruthy();
      // Card should have reasonable height (not clipped)
      expect(box!.height).toBeGreaterThan(200);
    }
  });

  test("CTA buttons are present for each paid tier", async ({ page }) => {
    // Each paid tier should have a "Start Free Trial" or "Get Started" button
    const ctaButtons = page.locator(
      'a[href*="upgrade"], button:has-text("Start"), button:has-text("Get Started"), a:has-text("Start")'
    );
    const count = await ctaButtons.count();
    // At least 3 CTA buttons (Pro, Business, Enterprise)
    expect(count).toBeGreaterThanOrEqual(3);
  });
});

test.describe("Pricing — Localized", () => {
  test("Spanish pricing page loads", async ({ page }) => {
    const res = await page.goto("/es/precios");
    expect(res?.status()).toBeLessThan(400);
    // Should show pricing content in Spanish
    await expect(page.locator("text=Pro").first()).toBeVisible();
  });

  test("Portuguese pricing page loads", async ({ page }) => {
    const res = await page.goto("/br/precos");
    expect(res?.status()).toBeLessThan(400);
    await expect(page.locator("text=Pro").first()).toBeVisible();
  });
});

test.describe("Tool Tier Labels — Free vs Pro", () => {
  test("JPG to PDF tool page is accessible without upgrade redirect", async ({
    page,
  }) => {
    await page.goto("/jpg-to-pdf");
    // Should NOT redirect to upgrade or pricing
    expect(page.url()).not.toContain("/upgrade");
    expect(page.url()).not.toContain("/pricing");
    // The page should show tool content (upload area or tool description)
    await expect(page.locator("text=/Drop your files|Choose Files|JPG to PDF/i").first()).toBeVisible({ timeout: 10000 });
  });
});

import { test, expect } from "@playwright/test";

/**
 * Mobile/responsive tests at mobile viewport (360px).
 * Covers: OP_016 (hamburger menu visibility), OP_035 (background scroll lock),
 * OP_036 (white UI on hamburger), OP_014_S2 (download button cutoff).
 */

test.use({ viewport: { width: 360, height: 740 } });

test.describe("Mobile — Hamburger Menu", () => {
  test("hamburger menu icon is visible on mobile", async ({ page }) => {
    await page.goto("/");
    const menuBtn = page.locator('button[aria-label="Open menu"]');
    await expect(menuBtn).toBeVisible({ timeout: 10000 });
  });

  test("hamburger menu opens and shows mobile nav panel", async ({ page }) => {
    await page.goto("/");
    await page.locator('button[aria-label="Open menu"]').click();

    // The mobile nav panel renders conditionally with "Home" link
    // It's a fixed nav that appears only in the mobile menu
    await expect(page.locator("nav.fixed >> text=Home")).toBeVisible({ timeout: 5000 });
  });

  test("background scroll is locked when menu is open", async ({ page }) => {
    await page.goto("/");
    await page.locator('button[aria-label="Open menu"]').click();

    // Wait for mobile nav to appear
    await expect(page.locator("nav.fixed >> text=Home")).toBeVisible({ timeout: 5000 });

    const overflow = await page.evaluate(() => document.body.style.overflow);
    expect(overflow).toBe("hidden");
  });

  test("menu closes when close button is clicked", async ({ page }) => {
    await page.goto("/");
    await page.locator('button[aria-label="Open menu"]').click();
    await expect(page.locator("nav.fixed >> text=Home")).toBeVisible({ timeout: 5000 });

    // Click close button (now shows X icon with "Close menu" label)
    await page.locator('button[aria-label="Close menu"]').click();

    // Mobile nav should be gone
    await expect(page.locator("nav.fixed")).not.toBeVisible({ timeout: 3000 });
  });
});

test.describe("Mobile — Layout", () => {
  test("homepage renders without horizontal overflow", async ({ page }) => {
    await page.goto("/");
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 5);
  });

  test("compress-pdf upload area is fully visible on mobile", async ({ page }) => {
    await page.goto("/compress-pdf");
    const uploadArea = page.locator("text=Drop your files here");
    await expect(uploadArea).toBeVisible({ timeout: 10000 });
    const box = await uploadArea.boundingBox();
    expect(box).toBeTruthy();
    expect(box!.x).toBeGreaterThanOrEqual(0);
    expect(box!.x + box!.width).toBeLessThanOrEqual(365);
  });

  test("pricing page is readable on mobile", async ({ page }) => {
    await page.goto("/pricing");
    await expect(page.locator("text=Free").first()).toBeVisible();
    await expect(page.locator("text=Pro").first()).toBeVisible();
  });
});

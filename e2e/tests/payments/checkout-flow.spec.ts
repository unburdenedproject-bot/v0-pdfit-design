import { test, expect } from "@playwright/test";

/**
 * Pricing page → Upgrade URL tests.
 * Verifies CTA buttons link to correct /upgrade paths with right query params.
 * This is the #1 revenue flow — if these URLs are wrong, checkout breaks.
 */

test.describe("Pricing → Checkout URLs (Monthly)", () => {
  test("Pro monthly CTA links to /upgrade (no params)", async ({ page }) => {
    await page.goto("/pricing");
    // Find the Pro tier CTA (first upgrade link, not Free)
    const proLink = page.locator('a[href="/upgrade"]').first();
    await expect(proLink).toBeVisible({ timeout: 10000 });
    const href = await proLink.getAttribute("href");
    expect(href).toBe("/upgrade");
  });

  test("Business monthly CTA links to /upgrade?plan=business", async ({
    page,
  }) => {
    await page.goto("/pricing");
    const bizLink = page.locator('a[href="/upgrade?plan=business"]');
    await expect(bizLink).toBeVisible({ timeout: 10000 });
  });

  test("Enterprise monthly CTA links to /upgrade?plan=enterprise", async ({
    page,
  }) => {
    await page.goto("/pricing");
    const entLink = page.locator('a[href="/upgrade?plan=enterprise"]');
    await expect(entLink).toBeVisible({ timeout: 10000 });
  });
});

test.describe("Pricing → Checkout URLs (Annual)", () => {
  test("Pro annual CTA links to /upgrade?billing=annual", async ({ page }) => {
    await page.goto("/pricing");
    // Click annual toggle
    await page.getByText(/annual/i).first().click();
    const proLink = page.locator('a[href="/upgrade?billing=annual"]');
    await expect(proLink).toBeVisible({ timeout: 10000 });
  });

  test("Business annual CTA links to /upgrade?plan=business&billing=annual", async ({
    page,
  }) => {
    await page.goto("/pricing");
    await page.getByText(/annual/i).first().click();
    const bizLink = page.locator(
      'a[href="/upgrade?plan=business&billing=annual"]'
    );
    await expect(bizLink).toBeVisible({ timeout: 10000 });
  });

  test("Enterprise annual CTA links to /upgrade?plan=enterprise&billing=annual", async ({
    page,
  }) => {
    await page.goto("/pricing");
    await page.getByText(/annual/i).first().click();
    const entLink = page.locator(
      'a[href="/upgrade?plan=enterprise&billing=annual"]'
    );
    await expect(entLink).toBeVisible({ timeout: 10000 });
  });
});

test.describe("Pricing — Price Accuracy", () => {
  test("monthly prices are correct", async ({ page }) => {
    await page.goto("/pricing");
    const body = await page.textContent("body");
    expect(body).toContain("3.99");
    expect(body).toContain("13.99");
    expect(body).toContain("49.99");
  });

  test("annual prices are correct after toggle", async ({ page }) => {
    await page.goto("/pricing");
    await page.getByText(/annual/i).first().click();
    const body = await page.textContent("body");
    expect(body).toContain("39.90");
    expect(body).toContain("139.90");
    expect(body).toContain("499.90");
  });
});

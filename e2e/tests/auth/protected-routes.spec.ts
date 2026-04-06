import { test, expect } from "@playwright/test";

/**
 * Protected routes tests: unauthenticated redirects, signup-required page,
 * and session gating behavior.
 */

test.describe("Protected Routes — Dashboard Redirect", () => {
  test("unauthenticated user visiting /dashboard is redirected to /login", async ({
    page,
  }) => {
    await page.goto("/dashboard");
    // Server-side redirect should land us on login
    await expect(page).toHaveURL(/\/login/);
  });

  test("redirect includes redirect query param for post-login return", async ({
    page,
  }) => {
    await page.goto("/dashboard");
    // Should be on login page with redirect param
    const url = page.url();
    expect(url).toContain("/login");
    // Verify the redirect param is present so user returns to dashboard after login
    expect(url).toMatch(/redirect|from|next/i);
  });
});

test.describe("Protected Routes — Signup Required Page", () => {
  test("signup-required page loads with CTAs", async ({ page }) => {
    await page.goto("/signup-required");
    await expect(page.getByText(/create.*account/i).first()).toBeVisible();
    // Should have sign in link
    await expect(
      page.locator('a[href="/signup"]').or(page.getByText(/create free account/i))
    ).toBeVisible();
    await expect(
      page.getByRole("main").locator('a[href="/login"]')
    ).toBeVisible();
  });

  test("signup-required mentions free conversions", async ({ page }) => {
    await page.goto("/signup-required");
    await expect(page.getByText(/10 free conversions/i)).toBeVisible();
  });
});

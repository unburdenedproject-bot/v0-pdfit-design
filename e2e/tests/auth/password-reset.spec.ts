import { test, expect } from "@playwright/test";

/**
 * Password reset flow tests: forgot-password toggle, form validation,
 * reset page password rules.
 */

test.describe("Forgot Password — Login Page Toggle", () => {
  test("clicking Forgot shows reset password form", async ({ page }) => {
    await page.goto("/login");
    await page.getByText(/forgot/i).click();
    await expect(page.getByText(/reset password/i).first()).toBeVisible();
    await expect(page.locator("#reset-email")).toBeVisible();
  });

  test("Back to Sign In returns to login form", async ({ page }) => {
    await page.goto("/login");
    await page.getByText(/forgot/i).click();
    await expect(page.locator("#reset-email")).toBeVisible();
    await page.getByText(/back to sign in/i).click();
    await expect(page.locator("#email")).toBeVisible();
  });

  test("reset email form shows success after submission", async ({ page }) => {
    // Mock the forgot-password API BEFORE navigating
    await page.route("**/api/forgot-password", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: true }),
      });
    });

    await page.goto("/login");
    // Click forgot to show reset form
    await page.getByText(/forgot/i).click();
    // Wait for the reset email input to appear
    await expect(page.locator("#reset-email")).toBeVisible({ timeout: 5000 });
    await page.locator("#reset-email").fill("test@example.com");
    await page.getByRole("button", { name: /send reset link/i }).click();

    // Should show success message
    // The success green message says "If an account exists for that email..."
    await expect(
      page.getByText(/if an account exists/i)
    ).toBeVisible({ timeout: 10000 });
  });
});

test.describe("Reset Password Page — Validation", () => {
  test("shows error when passwords don't match", async ({ page }) => {
    await page.goto("/reset-password");
    await page.locator("#password").fill("password123");
    await page.locator("#confirm-password").fill("different456");
    await page.getByRole("button", { name: /update password/i }).click();
    await expect(
      page.getByText(/do not match/i)
    ).toBeVisible({ timeout: 5000 });
  });

  test("password field enforces min 8 characters via HTML validation", async ({
    page,
  }) => {
    await page.goto("/reset-password");
    // The input has minLength={8} — verify the HTML attribute exists
    const minLength = await page.locator("#password").getAttribute("minlength");
    expect(minLength).toBe("8");
  });
});

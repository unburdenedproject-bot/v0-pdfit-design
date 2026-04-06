import { test, expect } from "@playwright/test";

/**
 * Contact form tests: submission flow, success message, error handling.
 * Critical for launch — if contact form is broken, customers can't reach us.
 */

test.describe("Contact Form — Submission", () => {
  test("form loads with all required fields", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('select[name="subject"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
  });

  test("valid submission shows success message", async ({ page }) => {
    // Mock the contact API
    await page.route("**/api/contact", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: true }),
      });
    });

    await page.goto("/contact");
    await page.locator('input[name="name"]').fill("Test User");
    await page.locator('input[name="email"]').fill("test@example.com");
    await page.locator('select[name="subject"]').selectOption({ index: 1 });
    await page.locator('textarea[name="message"]').fill("Test message");

    await page.getByRole("button", { name: /send/i }).click();

    // Should show success state
    await expect(
      page.getByRole("heading", { name: /message sent/i })
    ).toBeVisible({ timeout: 10000 });
  });

  test("API failure shows error message", async ({ page }) => {
    await page.route("**/api/contact", async (route) => {
      await route.fulfill({ status: 500 });
    });

    await page.goto("/contact");
    await page.locator('input[name="name"]').fill("Test User");
    await page.locator('input[name="email"]').fill("test@example.com");
    await page.locator('select[name="subject"]').selectOption({ index: 1 });
    await page.locator('textarea[name="message"]').fill("Test message");

    await page.getByRole("button", { name: /send/i }).click();

    // Should show error state
    await expect(
      page.getByText(/error|failed|try again/i).first()
    ).toBeVisible({ timeout: 10000 });
  });
});

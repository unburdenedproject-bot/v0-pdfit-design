import { test, expect } from "@playwright/test";
import { fillSignupForm } from "../../helpers/auth";

/**
 * Auth tests: signup form validation, login form, password rules.
 * Covers: OP_004 (special chars in name), OP_009 (name validation),
 * OP_022 (required field indicators), OP_011/OP_018 (captcha error),
 * OP_010_S2 (weak password), OP_004_S2 (special chars in name).
 */

test.describe("Signup Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/signup");
  });

  test("page loads with correct title and form", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("Create your account");
    // All required fields should have * indicator (OP_022)
    const labels = page.locator("label");
    const labelTexts = await labels.allTextContents();
    const requiredLabels = labelTexts.filter((t) => t.includes("*"));
    expect(requiredLabels.length).toBeGreaterThanOrEqual(3); // Name, Email, Password
  });

  test("shows error for empty name", async ({ page }) => {
    await fillSignupForm(page, {
      name: "",
      email: "test@example.com",
      password: "Test1234!",
      confirmPassword: "Test1234!",
    });
    await page.locator('button[type="submit"]').click();
    // HTML5 required validation or custom error
    const nameInput = page.locator("#first-name");
    const isInvalid = await nameInput.evaluate(
      (el: HTMLInputElement) => !el.validity.valid
    );
    expect(isInvalid).toBe(true);
  });

  test("shows error for name with special characters", async ({ page }) => {
    await fillSignupForm(page, {
      name: "John@123",
      email: "test@example.com",
      password: "Test1234!",
      confirmPassword: "Test1234!",
    });
    // Submit the form — captcha will block, but we test name validation first
    await page.locator('button[type="submit"]').click();
    await expect(
      page.locator("text=Name can only contain letters")
    ).toBeVisible({ timeout: 5000 });
  });

  test("shows error for short password (< 8 chars)", async ({ page }) => {
    await fillSignupForm(page, {
      name: "John",
      email: "test@example.com",
      password: "short",
      confirmPassword: "short",
    });
    await page.locator('button[type="submit"]').click();
    await expect(
      page.locator("text=Password must be at least 8 characters")
    ).toBeVisible({ timeout: 5000 });
  });

  test("shows error for mismatched passwords", async ({ page }) => {
    await fillSignupForm(page, {
      name: "John",
      email: "test@example.com",
      password: "Test1234!",
      confirmPassword: "Different1!",
    });
    await page.locator('button[type="submit"]').click();
    await expect(
      page.locator("text=Passwords do not match")
    ).toBeVisible({ timeout: 5000 });
  });

  test("shows captcha widget", async ({ page }) => {
    // hCaptcha iframe or container should be present
    const captcha = page.locator("iframe[src*='hcaptcha'], [id*='hcaptcha']");
    await expect(captcha.first()).toBeVisible({ timeout: 10000 });
  });

  test("shows error when submitting without captcha", async ({ page }) => {
    await fillSignupForm(page, {
      name: "John",
      email: "test@example.com",
      password: "Test1234!",
      confirmPassword: "Test1234!",
    });
    await page.locator('button[type="submit"]').click();
    await expect(
      page.locator("text=Please complete the captcha verification")
    ).toBeVisible({ timeout: 5000 });
  });

  test("password toggle shows/hides password", async ({ page }) => {
    const passwordInput = page.locator("#password");
    await passwordInput.fill("Test1234!");

    // Initially type=password
    await expect(passwordInput).toHaveAttribute("type", "password");

    // Click eye icon to show
    await page
      .locator('button[aria-label="Show password"]')
      .first()
      .click();
    await expect(passwordInput).toHaveAttribute("type", "text");

    // Click again to hide
    await page
      .locator('button[aria-label="Hide password"]')
      .first()
      .click();
    await expect(passwordInput).toHaveAttribute("type", "password");
  });

  test("has link to login page", async ({ page }) => {
    const loginLink = page.locator('a[href="/login"]');
    await expect(loginLink).toBeVisible();
    await expect(loginLink).toContainText("Sign in");
  });
});

test.describe("Login Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
  });

  test("page loads with login form", async ({ page }) => {
    await expect(page.locator("#email")).toBeVisible();
    await expect(page.locator("#password")).toBeVisible();
  });

  test("has forgot password option", async ({ page }) => {
    const forgotLink = page.locator("text=Forgot");
    await expect(forgotLink.first()).toBeVisible();
  });

  test("has link to signup page", async ({ page }) => {
    const signupLink = page.locator('a[href="/signup"]');
    await expect(signupLink).toBeVisible();
  });

  test("shows password toggle", async ({ page }) => {
    const toggleBtn = page.locator(
      'button[aria-label="Show password"], button[aria-label="Hide password"]'
    );
    await expect(toggleBtn.first()).toBeVisible();
  });
});

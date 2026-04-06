import { Page } from "@playwright/test";

/**
 * Fill in the signup form fields (does NOT submit).
 * Useful for testing validation before submission.
 */
export async function fillSignupForm(
  page: Page,
  opts: {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }
) {
  if (opts.name !== undefined) {
    await page.locator("#first-name").fill(opts.name);
  }
  if (opts.email !== undefined) {
    await page.locator("#email").fill(opts.email);
  }
  if (opts.password !== undefined) {
    await page.locator("#password").fill(opts.password);
  }
  if (opts.confirmPassword !== undefined) {
    await page.locator("#confirm-password").fill(opts.confirmPassword);
  }
}

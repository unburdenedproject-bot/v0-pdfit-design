import { test, expect } from "@playwright/test";

/**
 * i18n edge case tests: invalid locale prefixes, malformed routes,
 * trailing slashes, and 404 behavior for localized paths.
 */

test.describe("i18n — Invalid Locale Handling", () => {
  test("unsupported locale /fr/compress-pdf returns 404", async ({ page }) => {
    const res = await page.goto("/fr/compress-pdf");
    expect(res?.status()).toBe(404);
  });

  test("malformed Spanish route shows 404", async ({ page }) => {
    const res = await page.goto("/es/this-route-does-not-exist");
    expect(res?.status()).toBe(404);
  });

  test("malformed Portuguese route shows 404", async ({ page }) => {
    const res = await page.goto("/br/rota-inexistente");
    expect(res?.status()).toBe(404);
  });
});

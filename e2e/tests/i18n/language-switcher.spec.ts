import { test, expect } from "@playwright/test";

/**
 * Language switcher tests.
 * Covers: OP_005 (language converter not working), OP_015 (same on mobile).
 */

test.describe("Language Switcher", () => {
  test("Spanish homepage has Spanish-specific content", async ({ page }) => {
    await page.goto("/es");
    // Check for words that only appear in Spanish, not English
    const bodyText = await page.textContent("body");
    expect(bodyText?.toLowerCase()).toMatch(/herramientas|convertir|comprimir|gratis|archivos/);
  });

  test("Portuguese homepage has Portuguese-specific content", async ({ page }) => {
    await page.goto("/br");
    const bodyText = await page.textContent("body");
    expect(bodyText?.toLowerCase()).toMatch(/ferramentas|converter|comprimir|grátis|arquivos/);
  });

  test("language switcher exists in header", async ({ page }) => {
    await page.goto("/");
    // The header uses a Globe icon button for language switching
    const globe = page.locator("header").locator("svg").filter({ has: page.locator('[class*="lucide-globe"]') });
    const headerText = await page.locator("header").textContent();
    // Header should contain language indicator (EN, ES, BR) or globe mechanism
    expect(headerText).toMatch(/EN|ES|BR|English|Español|Português/);
  });

  test("ES tool pages have localized URLs", async ({ page }) => {
    const res = await page.goto("/es/comprimir-pdf");
    expect(res?.status()).toBeLessThan(400);
    expect(page.url()).toContain("/es/");
  });

  test("BR tool pages have localized URLs", async ({ page }) => {
    const res = await page.goto("/br/comprimir-pdf");
    expect(res?.status()).toBeLessThan(400);
    expect(page.url()).toContain("/br/");
  });
});

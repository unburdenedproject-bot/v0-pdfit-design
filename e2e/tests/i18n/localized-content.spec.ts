import { test, expect } from "@playwright/test";

/**
 * Localized content tests: verify no English text leaks onto ES/BR pages.
 * This catches the common i18n bug of untranslated strings.
 */

test.describe("i18n — No English Leak on Spanish Pages", () => {
  test("Spanish compress-pdf page has Spanish title, not English", async ({
    page,
  }) => {
    await page.goto("/es/comprimir-pdf");
    const title = await page.title();
    expect(title.toLowerCase()).toContain("comprimir");
    expect(title.toLowerCase()).not.toMatch(/^compress pdf/);
  });

  test("Spanish homepage title is in Spanish", async ({ page }) => {
    await page.goto("/es");
    const title = await page.title();
    // Title should contain unambiguously Spanish words (not just "pdf")
    expect(title.toLowerCase()).toMatch(
      /herramientas|optimizador|documentos|inteligentes|resuelve/
    );
  });
});

test.describe("i18n — No English Leak on Portuguese Pages", () => {
  test("Portuguese compress-pdf page has Portuguese title", async ({
    page,
  }) => {
    await page.goto("/br/comprimir-pdf");
    const title = await page.title();
    expect(title.toLowerCase()).toContain("comprimir");
    expect(title.toLowerCase()).not.toMatch(/^compress pdf/);
  });
});

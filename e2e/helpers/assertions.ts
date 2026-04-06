import { Page, expect } from "@playwright/test";

/**
 * Assert that a page has proper SEO meta tags.
 */
export async function expectSeoMeta(page: Page) {
  const title = await page.title();
  expect(title.length).toBeGreaterThan(5);

  const description = await page
    .locator('meta[name="description"]')
    .getAttribute("content");
  expect(description).toBeTruthy();
  expect(description!.length).toBeGreaterThan(20);
}

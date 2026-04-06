import { test, expect } from "@playwright/test";
import { mockUserPlan, mockBlobUpload } from "../../helpers/api-mocks";
import { fixturePath } from "../../helpers/paths";

/**
 * eSign tool tests: Business plan gating, signature creation, localized variants.
 * EsignInterface fetches /api/user-plan to determine tier.
 */

test.describe("eSign — Tier Gating", () => {
  test("free user sees Business upgrade prompt", async ({ page }) => {
    await page.goto("/esign");
    // Default is free plan — should show upgrade heading
    await expect(
      page.getByRole("heading", { name: /business feature/i })
    ).toBeVisible({ timeout: 10000 });
  });

  test("Business user sees upload UI instead of gate", async ({ page }) => {
    await mockUserPlan(page, "business");
    await page.goto("/esign");
    // Should see upload area, not upgrade prompt
    await expect(
      page.getByText(/upload your pdf/i).first()
    ).toBeVisible({ timeout: 10000 });
  });
});

test.describe("eSign — Upload Flow", () => {
  test("Business user sees file input on upload screen", async ({ page }) => {
    await mockUserPlan(page, "business");
    await page.goto("/esign");

    // Upload UI should have a file input for PDFs
    await expect(page.locator('input[type="file"]')).toBeAttached({
      timeout: 10000,
    });
  });
});

test.describe("eSign — Localized", () => {
  test("Spanish version loads", async ({ page }) => {
    const res = await page.goto("/es/firma-electronica");
    expect(res?.status()).toBeLessThan(400);
  });

  test("Portuguese version loads", async ({ page }) => {
    const res = await page.goto("/br/assinatura-eletronica");
    expect(res?.status()).toBeLessThan(400);
  });
});

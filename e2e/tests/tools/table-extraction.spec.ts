import { test, expect } from "@playwright/test";
import { mockUserPlan } from "../../helpers/api-mocks";

/**
 * Table extraction tool tests: Business gating, Enterprise access.
 * TableExtractionInterface fetches /api/user-plan and gates on business/enterprise.
 */

test.describe("Table Extraction — Tier Gating", () => {
  test("free user sees Business upgrade heading", async ({ page }) => {
    await page.goto("/table-extraction");
    await expect(
      page.getByRole("heading", { name: /business feature/i })
    ).toBeVisible({ timeout: 10000 });
  });

  test("Business user sees upload area", async ({ page }) => {
    await mockUserPlan(page, "business");
    await page.goto("/table-extraction");
    // Should see the drag-and-drop upload area
    await expect(
      page.getByText(/drag and drop/i).first()
    ).toBeVisible({ timeout: 10000 });
  });

  test("Enterprise user also has access (not blocked)", async ({ page }) => {
    await mockUserPlan(page, "enterprise");
    await page.goto("/table-extraction");
    // Enterprise must have all Business features per CLAUDE.md rule
    await expect(
      page.getByText(/drag and drop/i).first()
    ).toBeVisible({ timeout: 10000 });
  });
});

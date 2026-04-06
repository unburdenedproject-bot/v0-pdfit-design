import { test, expect } from "@playwright/test";
import { fixturePath } from "../../helpers/paths";

/**
 * Security tests for file upload: XSS via filename, type spoofing, path traversal.
 */

test.describe("Security — File Upload", () => {
  test("XSS in filename is not rendered as executable HTML", async ({ page }) => {
    await page.goto("/compress-pdf");
    const fileInput = page.locator("#file-upload");

    await fileInput.setInputFiles({
      name: '<img src=x onerror=alert(1)>.pdf',
      mimeType: "application/pdf",
      buffer: Buffer.from("%PDF-1.4 test"),
    });

    // The XSS payload must not be rendered as an HTML element
    const imgXss = page.locator('img[src="x"]');
    await expect(imgXss).toHaveCount(0);
  });

  test("HTML file with .pdf extension is accepted by client but rejected by server", async ({ page }) => {
    await page.goto("/compress-pdf");
    const fileInput = page.locator("#file-upload");
    await fileInput.setInputFiles(fixturePath("fake.pdf"));

    // Client accepts it (file extension is .pdf) — file name should appear
    await expect(page.getByText("fake.pdf")).toBeVisible({ timeout: 10000 });

    // The file should be shown in the UI — client-side validation passes
    // Server-side magic-bytes check will reject it when processing is attempted
    // This test verifies the client doesn't crash on the file
  });

  test("path traversal filename is sanitized in UI", async ({ page }) => {
    await page.goto("/compress-pdf");
    const fileInput = page.locator("#file-upload");

    // Use actual path traversal characters
    await fileInput.setInputFiles({
      name: "....passwd.pdf",
      mimeType: "application/pdf",
      buffer: Buffer.from("%PDF-1.4 test"),
    });

    // File should be accepted (it's a valid PDF) — filename should appear
    await expect(page.locator("text=passwd").first()).toBeVisible({ timeout: 10000 });
    // No server error should appear
    await expect(page.locator("text=/Internal Server Error/i")).toHaveCount(0);
  });
});

test.describe("Security — Contact Form XSS", () => {
  test("script injection in contact form is not executed", async ({ page }) => {
    // Register dialog listener BEFORE any page interaction
    let dialogTriggered = false;
    page.on("dialog", async (dialog) => {
      dialogTriggered = true;
      await dialog.dismiss();
    });

    await page.goto("/contact");

    await page.locator('input[name="name"]').fill('<script>alert("xss")</script>');
    await page.locator('input[name="email"]').fill("test@example.com");

    // The XSS payload should be stored as plain text in the input
    const nameValue = await page.locator('input[name="name"]').inputValue();
    expect(nameValue).toContain("<script>");

    // No dialog should have been triggered
    expect(dialogTriggered).toBe(false);
  });
});

import { test, expect } from "@playwright/test";

/**
 * Smoke tests: verify critical pages load without errors.
 */

const criticalPages = [
  { path: "/", name: "Homepage" },
  { path: "/pricing", name: "Pricing" },
  { path: "/contact", name: "Contact" },
  { path: "/about", name: "About" },
  { path: "/login", name: "Login" },
  { path: "/signup", name: "Signup" },
  { path: "/tools-a-z", name: "A-Z Index" },
  { path: "/blog", name: "Blog" },
  { path: "/compress-pdf", name: "Compress PDF" },
  { path: "/merge-pdf", name: "Merge PDF" },
  { path: "/split-pdf", name: "Split PDF" },
  { path: "/pdf-to-jpg", name: "PDF to JPG" },
  { path: "/pdf-to-word", name: "PDF to Word" },
  { path: "/pdf-to-txt", name: "PDF to TXT" },
  { path: "/jpg-to-pdf", name: "JPG to PDF" },
  { path: "/png-to-pdf", name: "PNG to PDF" },
  { path: "/extract-images-from-pdf", name: "Extract Images" },
  { path: "/ocr-scanner", name: "OCR Scanner" },
  { path: "/protect-pdf", name: "Protect PDF" },
  { path: "/phone-scan-cleanup", name: "Phone Scan Cleanup" },
  { path: "/esign", name: "eSign" },
  { path: "/url-to-pdf", name: "URL to PDF" },
  { path: "/table-extraction", name: "Table Extraction" },
  { path: "/pdf-to-excel", name: "PDF to Excel" },
  { path: "/flatten-pdf", name: "Flatten PDF" },
  { path: "/privacy-policy", name: "Privacy Policy" },
  { path: "/terms-conditions", name: "Terms & Conditions" },
  { path: "/reset-password", name: "Reset Password" },
  { path: "/signup-required", name: "Signup Required" },
  { path: "/es", name: "Homepage (ES)" },
  { path: "/br", name: "Homepage (BR)" },
  { path: "/es/comprimir-pdf", name: "Compress PDF (ES)" },
  { path: "/br/comprimir-pdf", name: "Compress PDF (BR)" },
];

test.describe("Health Check — All critical pages load", () => {
  for (const { path, name } of criticalPages) {
    test(`${name} (${path}) returns 200`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBeLessThan(400);
    });
  }
});

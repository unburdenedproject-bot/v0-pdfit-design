import { describe, it, expect } from "vitest";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

/**
 * Unit tests for lib/blank-pdf-check.js
 * This function gates every paid API call — if it fails,
 * we burn money on blank PDFs sent to iLoveAPI/CloudConvert.
 */

// Dynamic import because the module uses ESM import()
async function getIsBlankPdf() {
  const mod = await import("@/lib/blank-pdf-check");
  return mod.isBlankPdf;
}

describe("isBlankPdf", () => {
  it("detects a blank PDF (empty page, no content)", async () => {
    const isBlankPdf = await getIsBlankPdf();

    const doc = await PDFDocument.create();
    doc.addPage([612, 792]); // empty page
    const bytes = await doc.save();

    const result = await isBlankPdf(Buffer.from(bytes));
    expect(result).toEqual({ blank: true });
  });

  it("passes a PDF with text content", async () => {
    const isBlankPdf = await getIsBlankPdf();

    const doc = await PDFDocument.create();
    const font = await doc.embedFont(StandardFonts.Helvetica);
    const page = doc.addPage([612, 792]);
    page.drawText("Hello World", {
      x: 50,
      y: 700,
      size: 14,
      font,
      color: rgb(0, 0, 0),
    });
    const bytes = await doc.save();

    const result = await isBlankPdf(Buffer.from(bytes));
    expect(result).toEqual({ blank: false });
  });

  it("detects blank in multi-page PDF where all pages are empty", async () => {
    const isBlankPdf = await getIsBlankPdf();

    const doc = await PDFDocument.create();
    doc.addPage([612, 792]);
    doc.addPage([612, 792]);
    doc.addPage([612, 792]);
    const bytes = await doc.save();

    const result = await isBlankPdf(Buffer.from(bytes));
    expect(result).toEqual({ blank: true });
  });

  it("passes multi-page PDF where only one page has content", async () => {
    const isBlankPdf = await getIsBlankPdf();

    const doc = await PDFDocument.create();
    const font = await doc.embedFont(StandardFonts.Helvetica);
    doc.addPage([612, 792]); // blank page 1
    const page2 = doc.addPage([612, 792]);
    page2.drawText("Content on page 2", {
      x: 50,
      y: 700,
      size: 12,
      font,
      color: rgb(0, 0, 0),
    });
    doc.addPage([612, 792]); // blank page 3
    const bytes = await doc.save();

    const result = await isBlankPdf(Buffer.from(bytes));
    expect(result).toEqual({ blank: false });
  });

  it("detects blank for zero-page PDF", async () => {
    const isBlankPdf = await getIsBlankPdf();

    const doc = await PDFDocument.create();
    // No pages added
    const bytes = await doc.save();

    const result = await isBlankPdf(Buffer.from(bytes));
    expect(result).toEqual({ blank: true });
  });

  it("throws or handles corrupted data gracefully", async () => {
    const isBlankPdf = await getIsBlankPdf();

    const garbage = Buffer.from("THIS IS NOT A PDF FILE AT ALL");

    // Should throw when given non-PDF bytes
    await expect(isBlankPdf(garbage)).rejects.toThrow();
  });
});

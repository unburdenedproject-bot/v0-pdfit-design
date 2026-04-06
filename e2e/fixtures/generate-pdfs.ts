import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const FIXTURES_DIR = join(__dirname, "sample-files");

export async function generateFixtures() {
  if (!existsSync(FIXTURES_DIR)) {
    mkdirSync(FIXTURES_DIR, { recursive: true });
  }

  // ── Valid single-page PDF with text ──
  const valid = await PDFDocument.create();
  const font = await valid.embedFont(StandardFonts.Helvetica);
  const page = valid.addPage([612, 792]);
  page.drawText("This is a test PDF document for PDF.it integration tests.", {
    x: 50,
    y: 700,
    size: 14,
    font,
    color: rgb(0, 0, 0),
  });
  page.drawText("It contains text content and should not be detected as blank.", {
    x: 50,
    y: 680,
    size: 12,
    font,
    color: rgb(0.3, 0.3, 0.3),
  });
  writeFileSync(join(FIXTURES_DIR, "valid.pdf"), await valid.save());

  // ── Blank PDF (page with no content) ──
  const blank = await PDFDocument.create();
  blank.addPage([612, 792]); // empty page — no text, no images
  writeFileSync(join(FIXTURES_DIR, "blank.pdf"), await blank.save());

  // ── Multi-page PDF (5 pages) ──
  const multi = await PDFDocument.create();
  const multiFont = await multi.embedFont(StandardFonts.Helvetica);
  for (let i = 1; i <= 5; i++) {
    const p = multi.addPage([612, 792]);
    p.drawText(`Page ${i} of 5`, {
      x: 50,
      y: 700,
      size: 16,
      font: multiFont,
      color: rgb(0, 0, 0),
    });
  }
  writeFileSync(join(FIXTURES_DIR, "multi-page.pdf"), await multi.save());

  // ── Single-page PDF (for split validation) ──
  const single = await PDFDocument.create();
  const singleFont = await single.embedFont(StandardFonts.Helvetica);
  const sp = single.addPage([612, 792]);
  sp.drawText("Single page document — cannot be split.", {
    x: 50,
    y: 700,
    size: 14,
    font: singleFont,
    color: rgb(0, 0, 0),
  });
  writeFileSync(join(FIXTURES_DIR, "single-page.pdf"), await single.save());

  // ── Corrupted PDF (invalid bytes) ──
  writeFileSync(
    join(FIXTURES_DIR, "corrupted.pdf"),
    Buffer.from("THIS-IS-NOT-A-VALID-PDF-FILE-JUST-RANDOM-BYTES")
  );

  // ── Valid JPG (1x1 pixel, minimal JPEG) ──
  // Minimal valid JPEG: SOI + APP0 + DQT + SOF0 + DHT + SOS + image data + EOI
  // Using a tiny but valid JFIF image
  const jpgBytes = Buffer.from(
    "ffd8ffe000104a46494600010100000100010000ffdb004300080606070605080707070909080a0c140d0c0b0b0c1912130f141d1a1f1e1d1a1c1c20242e2720222c231c1c2837292c30313434341f27393d38323c2e333432ffc0000b080001000101011100ffc4001f0000010501010101010100000000000000000102030405060708090a0bffc40000ffd9",
    "hex"
  );
  writeFileSync(join(FIXTURES_DIR, "sample.jpg"), jpgBytes);

  // ── Valid PNG (1x1 pixel, minimal PNG) ──
  const pngBytes = Buffer.from(
    "89504e470d0a1a0a0000000d49484452000000010000000108020000009001" +
      "2e00000000c4944415478016360000000020001e221bc330000000049454e44ae426082",
    "hex"
  );
  writeFileSync(join(FIXTURES_DIR, "sample.png"), pngBytes);

  // ── Not-a-PDF file with .pdf extension (for type spoofing test) ──
  writeFileSync(
    join(FIXTURES_DIR, "fake.pdf"),
    Buffer.from("<html><script>alert('xss')</script></html>")
  );

  console.log(`[fixtures] Generated test files in ${FIXTURES_DIR}`);
}

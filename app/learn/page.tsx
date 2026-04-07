import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { BookOpen, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Learn — PDF Guides, Tips & How-To Articles | PDF.it",
  description:
    "Free guides and tutorials for every PDF task. Learn how to compress, merge, split, convert, protect, and optimize PDF files — step by step.",
  alternates: {
    canonical: "https://pdf.it.com/learn",
    languages: {
      en: "https://pdf.it.com/learn",
      es: "https://pdf.it.com/es/aprender",
      pt: "https://pdf.it.com/br/aprender",
    },
  },
}

const categories = [
  {
    name: "Compress PDF",
    articles: [
      { href: "/learn/how-to-compress-a-pdf", title: "How to Compress a PDF (Reduce File Size Fast)" },
      { href: "/learn/compress-pdf-without-quality-loss", title: "How to Compress a PDF Without Losing Quality" },
      { href: "/learn/compress-large-pdf", title: "How to Compress a Large PDF (50MB, 100MB, or More)" },
      { href: "/learn/compress-pdf-with-images", title: "Compress a PDF with Images (Photos, Scans, Graphics)" },
      { href: "/learn/compress-pdf-for-printing", title: "Compress a PDF for Printing (Keep Print Quality)" },
    ],
  },
  {
    name: "Merge & Split PDF",
    articles: [
      { href: "/learn/how-to-merge-pdf-files", title: "How to Merge PDF Files" },
      { href: "/learn/merge-pdfs-in-order", title: "Merge PDFs in the Correct Order" },
      { href: "/learn/merge-pdf-on-iphone", title: "Merge PDFs on iPhone" },
      { href: "/learn/merge-scanned-pdfs", title: "Merge Scanned PDFs" },
      { href: "/learn/combine-pdfs-for-submission", title: "Combine PDFs for Submissions (School, Visa, Portals)" },
      { href: "/learn/how-to-split-pdf", title: "How to Split a PDF" },
      { href: "/learn/split-pdf-into-individual-pages", title: "Split a PDF into Individual Pages" },
      { href: "/learn/split-pdf-for-email", title: "Split a PDF for Email" },
      { href: "/learn/split-pdf-on-mobile", title: "Split a PDF on Mobile" },
      { href: "/learn/extract-pages-from-pdf", title: "Extract Pages from a PDF" },
      { href: "/learn/extract-pages-from-pdf-guide", title: "Extract Pages from PDF — Full Guide" },
    ],
  },
  {
    name: "Convert PDF",
    articles: [
      { href: "/learn/convert-pdf-to-jpg", title: "How to Convert PDF to JPG" },
      { href: "/learn/convert-pdf-to-png", title: "How to Convert PDF to PNG" },
      { href: "/learn/convert-pdf-to-txt", title: "Convert PDF to TXT (Plain Text)" },
      { href: "/learn/pdf-to-jpg-vs-png", title: "PDF to JPG vs PNG — Which to Choose?" },
      { href: "/learn/pdf-to-jpg-on-iphone", title: "PDF to JPG on iPhone" },
      { href: "/learn/pdf-to-jpg-for-powerpoint", title: "PDF to JPG for PowerPoint" },
      { href: "/learn/convert-pdf-to-png-on-iphone", title: "Convert PDF to PNG on iPhone" },
      { href: "/learn/pdf-to-png-for-design", title: "PDF to PNG for Design Work" },
      { href: "/learn/save-pdf-page-as-jpg", title: "Save a PDF Page as JPG" },
      { href: "/learn/save-pdf-as-png-on-mac", title: "Save PDF as PNG on Mac" },
      { href: "/learn/why-pdf-to-jpg-looks-blurry", title: "Why PDF to JPG Looks Blurry (And How to Fix It)" },
      { href: "/learn/convert-scanned-pdf-to-text", title: "Convert Scanned PDF to Text (OCR)" },
      { href: "/learn/extract-text-from-pdf-on-mobile", title: "Extract Text from PDF on Mobile" },
      { href: "/learn/copy-text-from-pdf-to-notes", title: "Copy Text from PDF to Notes" },
      { href: "/learn/pdf-text-garbled-fix", title: "PDF Text Garbled? Here's the Fix" },
    ],
  },
  {
    name: "Word, Excel & PowerPoint to PDF",
    articles: [
      { href: "/learn/convert-word-to-pdf", title: "Convert Word to PDF" },
      { href: "/learn/convert-excel-to-pdf", title: "Convert Excel to PDF" },
      { href: "/learn/convert-ppt-to-pdf", title: "Convert PowerPoint to PDF" },
      { href: "/learn/convert-docx-xlsx-pptx-to-pdf", title: "Convert DOCX, XLSX & PPTX to PDF" },
      { href: "/learn/convert-resume-word-to-pdf", title: "Convert Resume from Word to PDF (ATS Tips)" },
      { href: "/learn/docx-to-pdf-keep-formatting", title: "DOCX to PDF Without Formatting Issues" },
      { href: "/learn/word-to-pdf-common-formatting-fixes", title: "Word to PDF: Common Formatting Fixes" },
      { href: "/learn/word-to-pdf-on-iphone", title: "Word to PDF on iPhone" },
      { href: "/learn/excel-to-pdf-fit-to-page", title: "Excel to PDF — Fit to Page" },
      { href: "/learn/excel-to-pdf-cut-off-columns", title: "Excel to PDF Cutting Off Columns? Fix It" },
      { href: "/learn/excel-to-pdf-on-mac", title: "Excel to PDF on Mac" },
      { href: "/learn/excel-report-to-pdf", title: "Export Monthly Reports: Excel to PDF" },
      { href: "/learn/ppt-to-pdf-animations", title: "PowerPoint to PDF — What Happens to Animations?" },
      { href: "/learn/ppt-to-pdf-for-printing", title: "PowerPoint to PDF for Printing" },
      { href: "/learn/ppt-to-pdf-on-iphone", title: "PowerPoint to PDF on iPhone" },
      { href: "/learn/pptx-to-pdf-missing-fonts", title: "PPTX to PDF: Missing Fonts Fix" },
      { href: "/learn/office-to-pdf-converter", title: "Office to PDF Converter" },
      { href: "/learn/office-to-pdf-keep-formatting", title: "Office to PDF — Keep Formatting" },
      { href: "/learn/office-to-pdf-on-mobile", title: "Office to PDF on Mobile" },
      { href: "/learn/best-format-to-send-documents", title: "Best Format to Send Documents (PDF vs DOCX)" },
    ],
  },
  {
    name: "Rotate & Organize PDF",
    articles: [
      { href: "/learn/how-to-rotate-pdf", title: "How to Rotate a PDF" },
      { href: "/learn/rotate-pdf-on-iphone", title: "Rotate PDF on iPhone" },
      { href: "/learn/rotate-scanned-pdf", title: "Rotate a Scanned PDF" },
      { href: "/learn/fix-upside-down-pdf", title: "Fix an Upside-Down PDF" },
    ],
  },
  {
    name: "Protect & Unlock PDF",
    articles: [
      { href: "/learn/how-to-password-protect-pdf", title: "How to Password Protect a PDF" },
      { href: "/learn/pdf-password-best-practices", title: "PDF Password Best Practices" },
      { href: "/learn/protect-pdf-before-sending", title: "Protect a PDF Before Sending" },
      { href: "/learn/protect-pdf-on-mobile", title: "Protect a PDF on Mobile" },
      { href: "/learn/how-to-unlock-pdf", title: "How to Unlock a PDF" },
      { href: "/learn/unlock-pdf-forgot-password", title: "Unlock PDF — Forgot Password" },
      { href: "/learn/unlock-pdf-for-printing", title: "Unlock PDF for Printing" },
      { href: "/learn/unlock-pdf-on-mobile", title: "Unlock PDF on Mobile" },
    ],
  },
  {
    name: "Watermark PDF",
    articles: [
      { href: "/learn/how-to-add-watermark-to-pdf", title: "How to Add a Watermark to a PDF" },
      { href: "/learn/watermark-pdf-with-logo", title: "Watermark PDF with Logo" },
      { href: "/learn/watermark-pdf-confidential", title: "Watermark PDF: Confidential" },
      { href: "/learn/watermark-pdf-best-practices", title: "Watermark PDF Best Practices" },
      { href: "/learn/watermark-pdf-on-mobile", title: "Watermark PDF on Mobile" },
    ],
  },
  {
    name: "OCR & Scanning",
    articles: [
      { href: "/learn/what-is-ocr", title: "What is OCR?" },
      { href: "/learn/ocr-scanned-document", title: "OCR a Scanned Document" },
      { href: "/learn/ocr-pdf-to-searchable-text", title: "OCR PDF to Searchable Text" },
      { href: "/learn/ocr-pdf-on-mobile", title: "OCR PDF on Mobile" },
      { href: "/learn/ocr-handwritten-text", title: "OCR Handwritten Text" },
      { href: "/learn/ocr-accuracy-tips", title: "OCR Accuracy Tips" },
    ],
  },
  {
    name: "QR Codes",
    articles: [
      { href: "/learn/how-to-create-qr-code", title: "How to Create a QR Code" },
      { href: "/learn/qr-code-types-explained", title: "QR Code Types Explained" },
      { href: "/learn/qr-code-best-practices", title: "QR Code Best Practices" },
      { href: "/learn/qr-code-for-pdf", title: "QR Code for PDF" },
      { href: "/learn/qr-code-for-wifi", title: "QR Code for WiFi" },
      { href: "/learn/qr-code-for-restaurant-menu", title: "QR Code for Restaurant Menu" },
      { href: "/learn/qr-code-for-business-card", title: "QR Code for Business Card" },
    ],
  },
]

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Header />
      <main>
        {/* Hero */}
        <section
          className="text-white py-16 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%),
              #0E0F1E
            `,
          }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
            <filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#heroGrain)" />
          </svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)",
                }}
              >
                <BookOpen className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Learn</h1>
              <p className="text-xl text-slate-300 mb-4">
                Free guides and tutorials for every PDF task. Step-by-step instructions, tips, and best practices — no signup required.
              </p>
              <p className="text-sm text-slate-400">{categories.reduce((sum, c) => sum + c.articles.length, 0)} articles across {categories.length} categories</p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="space-y-12">
              {categories.map((category) => (
                <div key={category.name}>
                  <h2 className="text-2xl font-black text-slate-900 mb-4">{category.name}</h2>
                  <div className="grid gap-2">
                    {category.articles.map((article) => (
                      <Link
                        key={article.href}
                        href={article.href}
                        className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/30 hover:bg-[#F0FDFA] transition-all group"
                      >
                        <span className="font-medium text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                        <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

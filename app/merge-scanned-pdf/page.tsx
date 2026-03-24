import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Merge Scanned PDFs Into One Document — Free Online | PDF.it",
  description:
    "Combine multiple scanned PDFs into a single document with PDF.it. Merge scanned pages from different sources into one clean file — fast, free, and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I merge scanned PDFs into one document?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your scanned PDF files to PDF.it, arrange them in order, and click Merge. PDF.it combines scanned pages into a single document without altering image quality." }
    },
    {
      "@type": "Question",
      "name": "Will merging scanned PDFs reduce image quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it merges your scanned pages without re-compressing them. Each page retains its original scan quality and resolution." }
    },
    {
      "@type": "Question",
      "name": "Can I run OCR after merging scanned PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. After merging your scanned PDFs, use PDF.it's OCR Scanner tool to make the text searchable and selectable. OCR is available for Pro users." }
    },
    {
      "@type": "Question",
      "name": "How large can scanned PDF files be?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free users can upload scanned PDFs up to 25MB each. Pro users get a 200MB limit per file, which handles high-resolution scans with ease." }
    },
    {
      "@type": "Question",
      "name": "Can I merge scanned receipts and invoices into one PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Upload all your scanned receipts or invoices, arrange them chronologically, and merge them into a single document for bookkeeping or expense reports." }
    },
    {
      "@type": "Question",
      "name": "Does this work with scans from my phone camera?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works with scanned PDFs from any source — phone cameras, flatbed scanners, multifunction printers, or scanning apps like CamScanner and Adobe Scan." }
    }
  ]
}

export default function MergeScannedPDFPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Merge className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Merge Scanned PDFs Into One Document</h1>
              <p className="text-xl text-slate-300 mb-8">
                Combine scanned PDFs from different sources into a single, organized document. Perfect for receipts, contracts, IDs, and archived paperwork — fast, free, and browser-based.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Preserves Scan Quality</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>No Login Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Merge PDF"
          outputFormat="PDF"
          processingMessage="Merging your scanned PDFs..."
          successMessage="Your merged document is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Scanned documents often end up as separate PDF files — one per page, one per batch, or one per scanner session. PDF.it lets you merge all your scanned PDFs into a single file, keeping every page at its original quality. Ideal for combining scanned contracts, receipts, IDs, and archived paperwork.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Merge scanned PDFs without quality loss</li>
              <li>✓ Combine scans from phones, scanners, and apps</li>
              <li>✓ Arrange pages in any order before merging</li>
              <li>✓ Follow up with OCR to make text searchable (Pro)</li>
              <li>✓ Works on any device — no software installation needed</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Merge Scanned Contracts and Agreements</h2>
              <p className="text-slate-600">
                Signed contracts often arrive as separate scanned pages. Combine all pages into one professional document for your records, legal files, or client submissions — no missing pages, no confusion.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Combine Scanned Receipts for Expense Reports</h2>
              <p className="text-slate-600">
                Scan your receipts throughout the month, then merge them all into one PDF for your expense report. Accountants and managers get a single file instead of a folder full of loose scans.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Organize Scanned Archives Into Single Files</h2>
              <p className="text-slate-600">
                Digitizing old paperwork? Merge batches of scanned pages into organized documents by category, date, or project. Then use PDF.it's Compress PDF tool to reduce file sizes for long-term storage.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Merge Scanned PDFs</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your scanned PDF files into PDF.it.",
                "Arrange the scanned pages in the correct order.",
                "Click Merge and download your combined scanned document.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Merge PDF", href: "/merge-pdf", desc: "Standard PDF merge" },
                { name: "OCR Scanner", href: "/ocr-scanner", desc: "Make scans searchable" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce file size" },
                { name: "Phone Scan Cleanup", href: "/phone-scan-cleanup", desc: "Clean up phone scans" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="border border-orange-200 bg-orange-50 rounded-xl p-4 hover:border-orange-400 hover:bg-orange-100 transition-all text-center flex flex-col justify-center min-h-[80px]"
                >
                  <div className="font-bold text-orange-600 text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-500">{tool.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "How do I merge scanned PDFs into one document?", a: "Upload your scanned PDF files to PDF.it, arrange them in order, and click Merge. PDF.it combines scanned pages into a single document without altering image quality." },
                { q: "Will merging scanned PDFs reduce image quality?", a: "No. PDF.it merges your scanned pages without re-compressing them. Each page retains its original scan quality and resolution." },
                { q: "Can I run OCR after merging scanned PDFs?", a: "Yes. After merging your scanned PDFs, use PDF.it's OCR Scanner tool to make the text searchable and selectable. OCR is available for Pro users." },
                { q: "How large can scanned PDF files be?", a: "Free users can upload scanned PDFs up to 25MB each. Pro users get a 200MB limit per file, which handles high-resolution scans with ease." },
                { q: "Can I merge scanned receipts and invoices into one PDF?", a: "Absolutely. Upload all your scanned receipts or invoices, arrange them chronologically, and merge them into a single document for bookkeeping or expense reports." },
                { q: "Does this work with scans from my phone camera?", a: "Yes. PDF.it works with scanned PDFs from any source — phone cameras, flatbed scanners, multifunction printers, or scanning apps like CamScanner and Adobe Scan." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
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

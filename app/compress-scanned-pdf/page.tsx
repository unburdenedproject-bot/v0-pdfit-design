import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Compress Scanned PDF — Reduce Scan File Size | PDF.it",
  description:
    "Compress scanned PDFs with extreme compression to dramatically reduce file size. Perfect for scanned contracts, archived documents, receipts, and ID scans — fast, browser-based, free.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why are scanned PDFs so large?",
      "acceptedAnswer": { "@type": "Answer", "text": "Scanned PDFs contain full-page images instead of text. Each page is essentially a high-resolution photograph, which is why scanned documents are typically 10-50MB or more. Compression targets these embedded images to dramatically reduce file size." }
    },
    {
      "@type": "Question",
      "name": "Will compression make my scanned document unreadable?",
      "acceptedAnswer": { "@type": "Answer", "text": "Text in scanned documents remains legible after compression. Extreme compression reduces image resolution, but printed text stays readable for most purposes. If you need perfect image quality, consider using recommended compression instead." }
    },
    {
      "@type": "Question",
      "name": "Can I compress a multi-page scanned PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it compresses all pages in your scanned PDF at once. Multi-page scans often see the largest size reductions because every page contains a full image that can be optimized." }
    },
    {
      "@type": "Question",
      "name": "How much can a scanned PDF be compressed?",
      "acceptedAnswer": { "@type": "Answer", "text": "Results vary depending on the scan resolution and number of pages. Scanned PDFs typically compress very well — reductions of 50-80% are common, though exact results depend on your specific document." }
    },
    {
      "@type": "Question",
      "name": "Does compressing a scanned PDF affect OCR text?",
      "acceptedAnswer": { "@type": "Answer", "text": "If your scanned PDF already has an OCR text layer, compression preserves it. The text layer is separate from the image layer, so you can still search and copy text after compression." }
    },
    {
      "@type": "Question",
      "name": "What if my scanned PDF is still too large after compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Try splitting the PDF into smaller sections with our Split PDF tool, then compress each part individually. You can also remove unnecessary pages before compressing to reduce the overall size further." }
    }
  ]
}

export default function CompressScannedPDFPage() {
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
                <Compress className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Compress Scanned PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Scanned PDFs contain large embedded images that balloon file size to 10-50MB or more. Apply extreme compression to dramatically reduce your scanned document size — perfect for uploading, emailing, or archiving.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Extreme Compression</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>No Login Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Compress PDF"
          outputFormat="PDF"
          processingMessage="Compressing your scanned PDF..."
          successMessage="Your compressed scanned PDF is ready!"
          compressionLevel="extreme"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Why Are Scanned PDFs So Large?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Unlike native PDFs that store text as vector data, scanned PDFs store every page as a high-resolution image. A 10-page scanned document can easily reach 30-50MB. PDF.it applies extreme compression that targets these embedded images, dramatically reducing file size while keeping text legible.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Extreme compression targets large embedded scan images</li>
              <li>&#10003; Dramatically reduces scanned document file size</li>
              <li>&#10003; Preserves existing OCR text layers</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>&#10003; No installation — compress scanned PDFs in your browser</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Common Use Cases</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Scanned Contracts and Agreements</h3>
                <p className="text-slate-600">
                  Signed contracts scanned at high resolution can be enormous. Compress them to a manageable size for email attachments, cloud storage, or uploading to document management systems.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Archived Documents</h3>
                <p className="text-slate-600">
                  Digitizing paper archives creates massive PDF files. Compress your scanned archives to save storage space while keeping documents accessible and searchable.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Scanned Receipts and Invoices</h3>
                <p className="text-slate-600">
                  Expense reports and accounting records often include scanned receipts. Compress them to reduce storage costs and make sharing with your accountant or bookkeeper easier.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Scanned ID Documents</h3>
                <p className="text-slate-600">
                  Passport scans, driver's licenses, and other ID documents are often required for applications with strict file size limits. Compress your scanned IDs to meet upload requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Compress a Scanned PDF</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your scanned PDF into PDF.it.",
                "Click Compress PDF — extreme compression is applied automatically to target embedded images.",
                "Download your smaller PDF. If still too large, try splitting the file first, then compress each part.",
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
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">More PDF Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Compress PDF", desc: "Standard compression.", href: "/compress-pdf", icon: Compress },
                { name: "Compress to 1MB", desc: "For 1MB upload limits.", href: "/compress-pdf-to-1mb", icon: Compress },
                { name: "Compress to 2MB", desc: "For 2MB upload limits.", href: "/compress-pdf-to-2mb", icon: Compress },
                { name: "Compress for Email", desc: "Fit email attachment limits.", href: "/compress-pdf-for-email", icon: Compress },
                { name: "OCR Scanner", desc: "Make scans searchable.", href: "/ocr-scanner", icon: FileText },
                { name: "Split PDF", desc: "Split if still too large.", href: "/split-pdf", icon: Scissors },
                { name: "Flatten PDF", desc: "Remove form fields.", href: "/flatten-pdf", icon: FileText },
                { name: "Merge PDF", desc: "Combine multiple PDFs.", href: "/merge-pdf", icon: Merge },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{tool.desc}</p>
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
                { q: "Why are scanned PDFs so large?", a: "Scanned PDFs contain full-page images instead of text. Each page is essentially a high-resolution photograph, which is why scanned documents are typically 10-50MB or more. Compression targets these embedded images to dramatically reduce file size." },
                { q: "Will compression make my scanned document unreadable?", a: "Text in scanned documents remains legible after compression. Extreme compression reduces image resolution, but printed text stays readable for most purposes. If you need perfect image quality, consider using recommended compression instead." },
                { q: "Can I compress a multi-page scanned PDF?", a: "Yes. PDF.it compresses all pages in your scanned PDF at once. Multi-page scans often see the largest size reductions because every page contains a full image that can be optimized." },
                { q: "How much can a scanned PDF be compressed?", a: "Results vary depending on the scan resolution and number of pages. Scanned PDFs typically compress very well — reductions of 50-80% are common, though exact results depend on your specific document." },
                { q: "Does compressing a scanned PDF affect OCR text?", a: "If your scanned PDF already has an OCR text layer, compression preserves it. The text layer is separate from the image layer, so you can still search and copy text after compression." },
                { q: "What if my scanned PDF is still too large after compression?", a: "Try splitting the PDF into smaller sections with our Split PDF tool, then compress each part individually. You can also remove unnecessary pages before compressing to reduce the overall size further." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Compress Your Scanned PDFs Now</h2>
            <p className="text-slate-300 text-lg mb-8">
              Reduce oversized scanned documents in seconds. No signup, no installation, no waiting.
            </p>
            <Link
              href="/compress-scanned-pdf"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Compress Scanned PDF
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OcrPdfInterface } from "@/components/ocr-pdf-interface"
import { TrustBadges } from "@/components/trust-badges"
import { Scan, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "OCR PDF Online — Make Scanned PDFs Searchable | PDF.it",
  description:
    "Run OCR on a PDF with PDF.it to extract text from scans. Make PDFs searchable and copyable in seconds—fast, browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is OCR for PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "OCR (Optical Character Recognition) detects text inside scanned or image-based PDFs and converts it into selectable, searchable text." }
    },
    {
      "@type": "Question",
      "name": "When do I need OCR instead of PDF to TXT?",
      "acceptedAnswer": { "@type": "Answer", "text": "If the PDF is a scan and you can't highlight text, you need OCR. If the PDF already contains selectable text, a normal PDF to TXT conversion may be faster." }
    },
    {
      "@type": "Question",
      "name": "How accurate is PDF.it OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Accuracy depends on scan clarity, resolution, and font. Clean, high-resolution scans produce the best results. Blurry or skewed scans reduce accuracy." }
    },
    {
      "@type": "Question",
      "name": "What languages does the OCR Scanner support?",
      "acceptedAnswer": { "@type": "Answer", "text": "The OCR Scanner supports 16+ languages including English, Spanish, French, German, Portuguese, Italian, Dutch, and more." }
    },
    {
      "@type": "Question",
      "name": "Is it safe to upload scanned documents?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents." }
    },
    {
      "@type": "Question",
      "name": "What is the maximum file size I can OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB." }
    }
  ]
}

export default function OCRScannerPage() {
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
                <Scan className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">OCR PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Use PDF.it to run OCR on scanned PDFs — turn images into selectable, searchable text and download a cleaner, usable PDF.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>16+ Languages Supported</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Searchable PDF Output</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* OCR Interface */}
        <OcrPdfInterface />
        <TrustBadges />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use PDF.it's OCR PDF tool to extract text from scanned PDFs and make documents searchable and copyable. Perfect for receipts, invoices, contracts, forms, and archived scans — upload your PDF, run OCR, and download an OCR-processed file in seconds.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Turn scanned PDFs into searchable PDFs</li>
              <li>✓ Make text selectable and copyable — no retyping</li>
              <li>✓ Improve document usability for search, quoting, and editing</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — OCR runs in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Make Scanned PDFs Searchable</h2>
              <p className="text-slate-600">
                If your PDF is a scan, it's often just an image — so you can't highlight text or search for words. PDF.it OCR recognizes the text and creates a searchable PDF you can use like a normal document.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extract Text From PDF Scans</h2>
              <p className="text-slate-600">
                Need the words from a scanned document? OCR pulls text from image-based pages so you can copy and paste content into notes, email, Word, or a TXT file.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Works on Receipts, Forms, Contracts, and Invoices</h2>
              <p className="text-slate-600">
                OCR is especially useful for paperwork and archived documents where you need to search, find keywords, or reuse text quickly.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to OCR a PDF</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your scanned PDF into PDF.it.",
                "Choose OCR language if needed.",
                "Click Run OCR.",
                "Download your searchable PDF.",
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
                { name: "PDF to TXT", href: "/pdf-to-txt", desc: "Extract text from text-based PDFs" },
                { name: "Rotate PDF", href: "/rotate-pdf", desc: "Fix sideways scans before OCR" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce size before OCR" },
                { name: "Split PDF", href: "/split-pdf", desc: "OCR only the pages you need" },
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
                {
                  q: "What is OCR for PDFs?",
                  a: "OCR (Optical Character Recognition) detects text inside scanned or image-based PDFs and converts it into selectable, searchable text.",
                },
                {
                  q: "When do I need OCR instead of PDF to TXT?",
                  a: "If the PDF is a scan and you can't highlight text, you need OCR. If the PDF already contains selectable text, a normal PDF to TXT conversion may be faster.",
                },
                {
                  q: "How accurate is PDF.it OCR?",
                  a: "Accuracy depends on scan clarity, resolution, and font. Clean, high-resolution scans produce the best results. Blurry or skewed scans reduce accuracy.",
                },
                {
                  q: "What languages does the OCR Scanner support?",
                  a: "The OCR Scanner supports 16+ languages including English, Spanish, French, German, Portuguese, Italian, Dutch, and more.",
                },
                {
                  q: "Is it safe to upload scanned documents?",
                  a: "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents.",
                },
                {
                  q: "What is the maximum file size I can OCR?",
                  a: "Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB.",
                },
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

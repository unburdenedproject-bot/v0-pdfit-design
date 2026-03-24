import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RotatePdfInterface } from "@/components/rotate-pdf-interface"
import { TrustBadges } from "@/components/trust-badges"
import { RotateCw, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Rotate PDF Pages Online — Fix PDF Orientation | PDF.it",
  description:
    "Rotate PDF pages online with PDF.it. Fix sideways or upside-down pages, rotate specific pages, and download a corrected PDF instantly.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I rotate only one page in a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it lets you rotate individual pages while leaving the rest of the document unchanged." }
    },
    {
      "@type": "Question",
      "name": "What rotation angles are supported?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can rotate pages by 90°, 180°, or 270° — clockwise or counterclockwise." }
    },
    {
      "@type": "Question",
      "name": "Can I rotate a scanned PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes — rotation is especially helpful for scanned documents that come out sideways or upside down." }
    },
    {
      "@type": "Question",
      "name": "Can I rotate a PDF on mobile?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers — upload, rotate, and download on iPhone or Android." }
    },
    {
      "@type": "Question",
      "name": "Is it safe to upload my PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents." }
    },
    {
      "@type": "Question",
      "name": "What is the maximum file size I can rotate?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free accounts can upload files up to 25MB. Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB." }
    }
  ]
}

export default function RotatePDFPage() {
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
                <RotateCw className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Rotate PDF Pages Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Fix sideways or upside-down pages with PDF.it. Rotate individual PDF pages or the entire document and download a correctly oriented PDF.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>90°, 180°, 270°</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>No Login Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Rotate Interface */}
        <RotatePdfInterface />
        <TrustBadges />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use PDF.it's Rotate PDF tool to rotate PDF pages and correct orientation in seconds. Rotate a single page or multiple pages 90°, 180°, or 270°, then download a clean PDF that's easy to read, print, and share.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Rotate sideways PDFs and fix upside-down pages</li>
              <li>✓ Rotate single pages or multiple pages in one file</li>
              <li>✓ Great for scanned PDFs, forms, receipts, and documents</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — rotate PDFs in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Rotate Individual PDF Pages</h2>
              <p className="text-slate-600">
                Correct only the pages that need it. Rotate one page, a range, or several selected pages without changing the rest of the document.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Fix Scanned PDFs and Sideways Documents</h2>
              <p className="text-slate-600">
                Scanners often save pages rotated the wrong way. PDF.it helps you quickly rotate pages to the correct reading direction.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Save a Correctly Oriented PDF</h2>
              <p className="text-slate-600">
                After rotating, download a new PDF with the updated page orientation — ready for printing, emailing, and uploading.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Rotate a PDF</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Select the pages to rotate or choose rotate all.",
                "Pick rotation direction: 90° clockwise, 90° counterclockwise, or 180°.",
                "Click Rotate PDF and download the updated file.",
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
                { name: "Split PDF", href: "/split-pdf", desc: "Extract pages before rotating" },
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine PDFs after rotating" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce size after saving" },
                { name: "OCR Scanner", href: "/ocr-scanner", desc: "Extract text from scanned PDFs" },
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
                  q: "Can I rotate only one page in a PDF?",
                  a: "Yes. PDF.it lets you rotate individual pages while leaving the rest of the document unchanged.",
                },
                {
                  q: "What rotation angles are supported?",
                  a: "You can rotate pages by 90°, 180°, or 270° — clockwise or counterclockwise.",
                },
                {
                  q: "Can I rotate a scanned PDF?",
                  a: "Yes — rotation is especially helpful for scanned documents that come out sideways or upside down.",
                },
                {
                  q: "Can I rotate a PDF on mobile?",
                  a: "Yes. PDF.it works in mobile browsers — upload, rotate, and download on iPhone or Android.",
                },
                {
                  q: "Is it safe to upload my PDF?",
                  a: "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents.",
                },
                {
                  q: "What is the maximum file size I can rotate?",
                  a: "Free accounts can upload files up to 25MB. Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB.",
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

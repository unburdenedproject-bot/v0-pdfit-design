import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OcrPdfInterface } from "@/components/ocr-pdf-interface"
import { Scan, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Scan PDF to Text — OCR for Scanned Documents | OmnisPDF",
  description:
    "Convert scanned PDFs to searchable, copyable text with OmnisPDF's OCR. Extract text from scans, photos, and image-based PDFs — fast and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does OCR work on scanned PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "OCR (Optical Character Recognition) analyzes the images in your scanned PDF and identifies letters, words, and paragraphs. OmnisPDF converts these into selectable, searchable, and copyable text." }
    },
    {
      "@type": "Question",
      "name": "How accurate is OCR on scanned documents?",
      "acceptedAnswer": { "@type": "Answer", "text": "OCR accuracy depends on scan quality. Clear, high-resolution scans typically produce very accurate results. Blurry, skewed, or low-contrast scans may have some errors that need manual review." }
    },
    {
      "@type": "Question",
      "name": "What languages does the OCR support?",
      "acceptedAnswer": { "@type": "Answer", "text": "OmnisPDF's OCR supports multiple languages including English, Spanish, French, German, Portuguese, Italian, and many more. Select your document's language before processing for best results." }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a scanned PDF and a digital PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "A digital PDF contains actual text data that can be selected and copied. A scanned PDF is essentially an image of a document — the text is part of the image and cannot be selected without OCR processing." }
    },
    {
      "@type": "Question",
      "name": "Is the OCR scanner free to use?",
      "acceptedAnswer": { "@type": "Answer", "text": "The OCR Scanner is a Pro feature. Free users can try it with limited usage. Pro subscribers get unlimited OCR processing with priority speed." }
    },
    {
      "@type": "Question",
      "name": "Can I scan a PDF to text on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OmnisPDF works in mobile browsers — upload your scanned PDF, run OCR, and get searchable text on iPhone or Android." }
    }
  ]
}

export default function ScanPDFToTextPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Scan PDF to Text</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convert scanned PDFs into searchable, copyable text using OCR. Extract text from scans, photos, and image-based PDFs — fast and browser-based.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Powerful OCR Engine</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Searchable Output</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <OcrPdfInterface />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Scanned PDFs are just images — you cannot select, search, or copy the text. OmnisPDF's OCR technology reads the text in your scanned documents and converts it into searchable, copyable, and editable text.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Convert scanned PDFs into searchable text</li>
              <li>&#10003; OCR reads text from images, photos, and scans</li>
              <li>&#10003; Support for multiple languages</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>&#10003; No installation — run OCR in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Digitize Paper Documents</h2>
              <p className="text-slate-600">
                Scanned contracts, receipts, letters, and forms are trapped as images. OmnisPDF's OCR reads the text from these scans and makes it selectable and copyable — turning paper into digital data you can actually use.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Make Scanned PDFs Searchable</h2>
              <p className="text-slate-600">
                After OCR processing, your scanned PDF becomes searchable. Use Ctrl+F to find specific words, names, dates, or amounts in documents that were previously just static images.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extract Data from Old Documents</h2>
              <p className="text-slate-600">
                Have years of scanned invoices, records, or correspondence? Run OCR to extract the text, then copy it into spreadsheets, databases, or modern document management systems.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Scan a PDF to Text</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your scanned PDF into OmnisPDF.",
                "Select the document language and click Run OCR.",
                "Download the searchable PDF or copy the extracted text.",
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
                { name: "OCR Scanner", href: "/ocr-scanner", desc: "Full OCR processing" },
                { name: "PDF to TXT", href: "/pdf-to-txt", desc: "Extract text from digital PDFs" },
                { name: "Extract Text", href: "/extract-text-from-pdf", desc: "Copy text from any PDF" },
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
                { q: "How does OCR work on scanned PDFs?", a: "OCR (Optical Character Recognition) analyzes the images in your scanned PDF and identifies letters, words, and paragraphs. OmnisPDF converts these into selectable, searchable, and copyable text." },
                { q: "How accurate is OCR on scanned documents?", a: "OCR accuracy depends on scan quality. Clear, high-resolution scans typically produce very accurate results. Blurry, skewed, or low-contrast scans may have some errors that need manual review." },
                { q: "What languages does the OCR support?", a: "OmnisPDF's OCR supports multiple languages including English, Spanish, French, German, Portuguese, Italian, and many more. Select your document's language before processing for best results." },
                { q: "What is the difference between a scanned PDF and a digital PDF?", a: "A digital PDF contains actual text data that can be selected and copied. A scanned PDF is essentially an image of a document — the text is part of the image and cannot be selected without OCR processing." },
                { q: "Is the OCR scanner free to use?", a: "The OCR Scanner is a Pro feature. Free users can try it with limited usage. Pro subscribers get unlimited OCR processing with priority speed." },
                { q: "Can I scan a PDF to text on my phone?", a: "Yes. OmnisPDF works in mobile browsers — upload your scanned PDF, run OCR, and get searchable text on iPhone or Android." },
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

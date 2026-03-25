import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { Type, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extract Text from PDF Online — Copy Text from Any PDF | PDF.it",
  description:
    "Extract text from PDF files with PDF.it. Pull plain text from any PDF for copying, editing, and reuse — fast, free, and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I extract text from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it, click Extract, and download a plain text file containing all the text from your PDF. You can then copy, edit, or paste it anywhere." }
    },
    {
      "@type": "Question",
      "name": "Does extracting text preserve the original formatting?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it extracts the raw text content from your PDF. Basic paragraph structure is preserved, but complex formatting like tables, columns, and fonts may not carry over to the plain text output." }
    },
    {
      "@type": "Question",
      "name": "Can I extract text from a scanned PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Scanned PDFs contain images instead of selectable text. To extract text from scans, use PDF.it's OCR Scanner tool, which uses optical character recognition to read text from images." }
    },
    {
      "@type": "Question",
      "name": "What languages are supported for text extraction?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it can extract text from PDFs in any language, including English, Spanish, French, German, Chinese, Japanese, Arabic, and more — as long as the PDF contains selectable text." }
    },
    {
      "@type": "Question",
      "name": "Can I extract text from a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers — upload your PDF, extract the text, and download or copy it on iPhone or Android." }
    },
    {
      "@type": "Question",
      "name": "Is it free to extract text from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Free accounts get 10 extractions per day. Pro accounts get unlimited extractions with no daily limits." }
    }
  ]
}

export default function ExtractTextFromPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Type className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extract Text from PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Pull plain text from any PDF for copying, editing, and reuse. Perfect for research, data entry, and repurposing content — instant and browser-based.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Instant Text Extraction</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>No Login Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to TXT"
          outputFormat="TXT"
          processingMessage="Extracting text from your PDF..."
          successMessage="Your text file is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Need the text from a PDF without the layout, images, or formatting? PDF.it extracts all selectable text from your PDF and delivers it as a clean plain text file you can copy, edit, or paste anywhere.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Extract all selectable text from any PDF</li>
              <li>&#10003; Output as a clean plain text file</li>
              <li>&#10003; Perfect for copying content into emails, documents, or spreadsheets</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>&#10003; No installation — extract text in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extract Text for Research and Study</h2>
              <p className="text-slate-600">
                Working with academic papers, reports, or reference documents? Extract the text to quote passages, take notes, or compile research without retyping. Copy and paste directly into your notes or documents.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Pull Content for Emails and Messages</h2>
              <p className="text-slate-600">
                Need to share specific content from a PDF in an email or chat? Extract the text, copy the relevant sections, and paste them directly — no screenshots or attachments needed.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Copy Text from Contracts and Legal Documents</h2>
              <p className="text-slate-600">
                Extract text from contracts, agreements, and legal PDFs to review clauses, compare terms, or reuse language in new documents. Faster than retyping and more accurate than manual copying.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Extract Text from a PDF</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Click Extract Text — all selectable text is pulled from your PDF automatically.",
                "Download the plain text file or copy the text directly.",
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
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF to TXT", href: "/pdf-to-txt", desc: "Convert PDF to text file" },
                { name: "OCR Scanner", href: "/ocr-scanner", desc: "Extract text from scans" },
                { name: "PDF to Word", href: "/pdf-to-word", desc: "Convert PDF to Word" },
                { name: "Extract Images", href: "/extract-images-from-pdf", desc: "Pull images from PDFs" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="rounded-xl p-4 transition-all text-center flex flex-col justify-center min-h-[80px] hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(20,216,196,0.25)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.2)" }}
                >
                  <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-400">{tool.desc}</div>
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
                { q: "How do I extract text from a PDF?", a: "Upload your PDF to PDF.it, click Extract, and download a plain text file containing all the text from your PDF. You can then copy, edit, or paste it anywhere." },
                { q: "Does extracting text preserve the original formatting?", a: "PDF.it extracts the raw text content from your PDF. Basic paragraph structure is preserved, but complex formatting like tables, columns, and fonts may not carry over to the plain text output." },
                { q: "Can I extract text from a scanned PDF?", a: "Scanned PDFs contain images instead of selectable text. To extract text from scans, use PDF.it's OCR Scanner tool, which uses optical character recognition to read text from images." },
                { q: "What languages are supported for text extraction?", a: "PDF.it can extract text from PDFs in any language, including English, Spanish, French, German, Chinese, Japanese, Arabic, and more — as long as the PDF contains selectable text." },
                { q: "Can I extract text from a PDF on my phone?", a: "Yes. PDF.it works in mobile browsers — upload your PDF, extract the text, and download or copy it on iPhone or Android." },
                { q: "Is it free to extract text from a PDF?", a: "Yes. Free accounts get 10 extractions per day. Pro accounts get unlimited extractions with no daily limits." },
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

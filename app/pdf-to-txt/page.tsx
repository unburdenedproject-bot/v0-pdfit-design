import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { Type, Zap, Shield, Download, FileText, Monitor, Copy } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "PDF to TXT Converter — Free & No Login Required | PDF.it",
  description:
    "Convert PDF to TXT in seconds with PDF.it. Extract plain text from PDFs online for copying, editing, and sharing—no installs.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I convert any PDF to a TXT file?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most text-based PDFs convert cleanly. If your PDF is scanned (image-only), you'll need OCR to extract text." }
    },
    {
      "@type": "Question",
      "name": "Does PDF.it keep the formatting from the PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "TXT is plain text, so formatting like fonts, columns, and spacing may not carry over. If you need layout preserved, use a PDF to Word tool instead." }
    },
    {
      "@type": "Question",
      "name": "Why does my converted text look messy or out of order?",
      "acceptedAnswer": { "@type": "Answer", "text": "Some PDFs store text in columns or positioned blocks. TXT export follows the PDF's internal structure, which may reorder lines." }
    },
    {
      "@type": "Question",
      "name": "Can I convert PDF to TXT on mobile?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Open PDF.it in your mobile browser, upload the PDF, convert, and download the TXT file." }
    },
    {
      "@type": "Question",
      "name": "Is it safe to upload my PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session." }
    }
  ]
}

export default function PDFToTXTPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert PDF to TXT Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Extract clean, editable text from any PDF. Convert to a plain .txt file for quick copying, notes, and editing.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Pure Text Output</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>Files Deleted After Session</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>No Login Required</span>
                </div>
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
              Use PDF.it's PDF to TXT converter to turn a PDF into a plain text (.txt) file in seconds. Perfect for copying content into notes, docs, emails, or AI tools—without retyping. Upload your PDF, convert, and download the extracted text instantly.
            </p>

            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convert PDF to TXT for fast copying and editing</li>
              <li>✓ Extract text from reports, articles, invoices, and forms</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No software install — browser-based</li>
              <li>✓ Great for searching, quoting, and repurposing content</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extract Text from PDF to TXT</h2>
              <p className="text-slate-600">
                Convert PDF pages into a clean text file you can edit anywhere. PDF.it exports your content as plain text, making it easy to paste into Word, Google Docs, Notion, email, or code editors.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Clean, Copyable Output</h2>
              <p className="text-slate-600">
                TXT output is ideal when you want the words without the formatting. It's also lightweight and compatible with every device and app.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Fast Online Conversion on Any Device</h2>
              <p className="text-slate-600">
                Convert PDF to text from any modern browser—desktop or mobile—without downloads or installations.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Convert PDF to TXT</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Click Convert PDF to TXT.",
                "Download your .txt file.",
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
                { name: "OCR Scanner", href: "/ocr-scanner", desc: "Extract text from scanned PDFs" },
                { name: "PDF to Word", href: "/pdf-to-word", desc: "Convert with formatting preserved" },
                { name: "PDF to JPG", href: "/pdf-to-jpg", desc: "Extract pages as images" },
                { name: "Split PDF", href: "/split-pdf", desc: "Convert only the pages you need" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="border border-orange-200 bg-orange-50 rounded-xl p-4 hover:border-orange-400 hover:bg-orange-100 transition-all text-center"
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
                {
                  q: "Can I convert any PDF to a TXT file?",
                  a: "Most text-based PDFs convert cleanly. If your PDF is scanned (image-only), you'll need OCR to extract text.",
                },
                {
                  q: "Does PDF.it keep the formatting from the PDF?",
                  a: "TXT is plain text, so formatting like fonts, columns, and spacing may not carry over. If you need layout preserved, use a PDF to Word tool instead.",
                },
                {
                  q: "Why does my converted text look messy or out of order?",
                  a: "Some PDFs store text in columns or positioned blocks. TXT export follows the PDF's internal structure, which may reorder lines.",
                },
                {
                  q: "Can I convert PDF to TXT on mobile?",
                  a: "Yes. Open PDF.it in your mobile browser, upload the PDF, convert, and download the TXT file.",
                },
                {
                  q: "Is it safe to upload my PDF?",
                  a: "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session.",
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

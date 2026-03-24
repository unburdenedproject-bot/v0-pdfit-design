import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "PDF to Word Converter Online — Free & No Login | PDF.it",
  description: "Convert PDF to editable Word documents with PDF.it. Fast, browser-based PDF to Word conversion — no login required.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert a PDF to Word?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it, click Convert, and download your editable Word document." }
    },
    {
      "@type": "Question",
      "name": "Will the formatting be preserved after conversion?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it preserves layout, fonts, and structure as closely as possible. Complex formatting may vary depending on the original PDF." }
    },
    {
      "@type": "Question",
      "name": "Can I convert a scanned PDF to Word?",
      "acceptedAnswer": { "@type": "Answer", "text": "Scanned PDFs require OCR to extract text. Use PDF.it's OCR Scanner tool first, then convert to Word." }
    },
    {
      "@type": "Question",
      "name": "Can I convert PDF to Word on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers — upload, convert, and download on iPhone or Android." }
    },
    {
      "@type": "Question",
      "name": "Is it safe to upload my PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents." }
    },
    {
      "@type": "Question",
      "name": "What is the maximum file size I can convert?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free accounts can upload files up to 25MB. Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB." }
    }
  ]
}

export default function PDFToWordPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF to Word Converter</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convert your PDF files to editable Word documents instantly. Perfect formatting guaranteed.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Lightning Fast</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>100% Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>Perfect Quality</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to Word"
          outputFormat="DOCX"
          processingMessage="Converting your PDF to Word..."
          successMessage="Your Word document is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use PDF.it's PDF to Word tool to convert PDF files into editable Word documents in seconds. Upload your PDF, convert it, and download a .docx file ready to edit — no software required.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convert PDF to editable Word documents online</li>
              <li>✓ Preserves layout, fonts, and structure</li>
              <li>✓ Great for contracts, reports, forms, and letters</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — convert PDFs in your browser</li>
            </ul>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF to Excel", href: "/pdf-to-excel", desc: "Extract tables to spreadsheet" },
                { name: "PDF to JPG", href: "/pdf-to-jpg", desc: "Convert pages to images" },
                { name: "OCR Scanner", href: "/ocr-scanner", desc: "Extract text from scanned PDFs" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce size before converting" },
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
                { q: "How do I convert a PDF to Word?", a: "Upload your PDF to PDF.it, click Convert, and download your editable Word document." },
                { q: "Will the formatting be preserved after conversion?", a: "PDF.it preserves layout, fonts, and structure as closely as possible. Complex formatting may vary depending on the original PDF." },
                { q: "Can I convert a scanned PDF to Word?", a: "Scanned PDFs require OCR to extract text. Use PDF.it's OCR Scanner tool first, then convert to Word." },
                { q: "Can I convert PDF to Word on my phone?", a: "Yes. PDF.it works in mobile browsers — upload, convert, and download on iPhone or Android." },
                { q: "Is it safe to upload my PDF?", a: "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents." },
                { q: "What is the maximum file size I can convert?", a: "Free accounts can upload files up to 25MB. Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB." },
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

import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download, FileSpreadsheet, Image, Lock, Scissors, Merge, RotateCw, ScanLine } from "lucide-react"

export const metadata = {
  title: "PDF to DOCX — Convert PDF to Word Document | OmnisPDF",
  description: "Convert PDF to DOCX online with OmnisPDF. Transform any PDF into an editable Word .docx file — preserves formatting, tables, and images. Fast, secure, no installation.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between DOCX and DOC?",
      "acceptedAnswer": { "@type": "Answer", "text": "DOCX is the modern Word format introduced with Microsoft Office 2007. It uses XML-based compression, making files smaller and more compatible than the older DOC format. OmnisPDF converts PDFs to DOCX for maximum compatibility with modern word processors." }
    },
    {
      "@type": "Question",
      "name": "How do I convert a PDF to DOCX?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to OmnisPDF, click Convert, and download your editable DOCX file. The conversion preserves layout, fonts, tables, and images as closely as possible." }
    },
    {
      "@type": "Question",
      "name": "Can I edit the DOCX file after conversion?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. The DOCX file is fully editable in Microsoft Word, Google Docs, LibreOffice Writer, Apple Pages, and any other word processor that supports the DOCX format." }
    },
    {
      "@type": "Question",
      "name": "Will tables and images be preserved in the DOCX?",
      "acceptedAnswer": { "@type": "Answer", "text": "OmnisPDF preserves tables, images, headers, footers, and text formatting during conversion. Complex layouts with overlapping elements may require minor adjustments after conversion." }
    },
    {
      "@type": "Question",
      "name": "Is the PDF to DOCX converter free?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF to DOCX conversion is available to Pro and Business subscribers. Free accounts can use basic PDF tools, while Pro unlocks advanced conversions including PDF to DOCX, XLSX, and PPTX." }
    },
    {
      "@type": "Question",
      "name": "Can I convert a scanned PDF to DOCX?",
      "acceptedAnswer": { "@type": "Answer", "text": "Scanned PDFs contain images of text rather than actual text. Use OmnisPDF's OCR Scanner tool first to extract the text, then convert the result to DOCX for editing." }
    }
  ]
}

export default function PDFToDocxPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert PDF to DOCX</h1>
              <p className="text-xl text-slate-300 mb-8">
                Transform any PDF into an editable DOCX file — the modern Microsoft Word format. Preserves formatting, tables, and images.
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
          processingMessage="Converting your PDF to DOCX..."
          successMessage="Your DOCX file is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Why Convert PDF to DOCX?</h2>
            <p className="text-lg text-slate-600 mb-8">
              DOCX is the modern Word document format used by Microsoft Word, Google Docs, and LibreOffice. Unlike the older DOC format, DOCX files are smaller, more secure, and universally compatible. When you convert a PDF to DOCX with OmnisPDF, you get a fully editable document that opens in any modern word processor — ready for editing, commenting, and collaboration.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Convert PDF to editable DOCX format online</li>
              <li>&#10003; Preserves layout, fonts, tables, and images</li>
              <li>&#10003; DOCX opens in Word, Google Docs, LibreOffice, and Pages</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>&#10003; No installation needed — convert PDFs in your browser</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Common Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Editing Contracts</h3>
                <p className="text-slate-600">
                  Received a contract as a PDF? Convert it to DOCX to make edits, add comments, track changes, and send back a clean revision — all in Microsoft Word or Google Docs.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Updating Resumes</h3>
                <p className="text-slate-600">
                  Need to update your resume but only have the PDF version? Convert PDF to DOCX and make edits instantly. Update your experience, skills, and contact info without starting from scratch.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Modifying Proposals</h3>
                <p className="text-slate-600">
                  Reuse content from existing proposals by converting them from PDF to DOCX. Update pricing, scope, and deliverables without recreating the entire document.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Collaborating on Documents</h3>
                <p className="text-slate-600">
                  Convert PDFs to DOCX to enable real-time collaboration. Share the DOCX file via Google Docs or OneDrive for team editing with track changes and comments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Convert PDF to DOCX</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into OmnisPDF.",
                "Click Convert — your PDF is transformed into an editable DOCX file.",
                "Download your DOCX and open it in Word, Google Docs, or any compatible editor.",
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
                { name: "PDF to Word", desc: "Convert PDF to Word document.", href: "/pdf-to-word", icon: FileText },
                { name: "PDF to Excel", desc: "Extract tables to spreadsheet.", href: "/pdf-to-excel", icon: FileSpreadsheet },
                { name: "PDF to JPG", desc: "Convert pages to images.", href: "/pdf-to-jpg", icon: Image },
                { name: "OCR Scanner", desc: "Extract text from scanned PDFs.", href: "/ocr-scanner", icon: ScanLine },
                { name: "Compress PDF", desc: "Reduce PDF file size.", href: "/compress-pdf", icon: Download },
                { name: "Merge PDF", desc: "Combine multiple PDFs.", href: "/merge-pdf", icon: Merge },
                { name: "Split PDF", desc: "Extract pages from PDF.", href: "/split-pdf", icon: Scissors },
                { name: "Protect PDF", desc: "Add password protection.", href: "/protect-pdf", icon: Lock },
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
                { q: "What is the difference between DOCX and DOC?", a: "DOCX is the modern Word format introduced with Microsoft Office 2007. It uses XML-based compression, making files smaller and more compatible than the older DOC format. OmnisPDF converts PDFs to DOCX for maximum compatibility with modern word processors." },
                { q: "How do I convert a PDF to DOCX?", a: "Upload your PDF to OmnisPDF, click Convert, and download your editable DOCX file. The conversion preserves layout, fonts, tables, and images as closely as possible." },
                { q: "Can I edit the DOCX file after conversion?", a: "Yes. The DOCX file is fully editable in Microsoft Word, Google Docs, LibreOffice Writer, Apple Pages, and any other word processor that supports the DOCX format." },
                { q: "Will tables and images be preserved in the DOCX?", a: "OmnisPDF preserves tables, images, headers, footers, and text formatting during conversion. Complex layouts with overlapping elements may require minor adjustments after conversion." },
                { q: "Is the PDF to DOCX converter free?", a: "PDF to DOCX conversion is available to Pro and Business subscribers. Free accounts can use basic PDF tools, while Pro unlocks advanced conversions including PDF to DOCX, XLSX, and PPTX." },
                { q: "Can I convert a scanned PDF to DOCX?", a: "Scanned PDFs contain images of text rather than actual text. Use OmnisPDF's OCR Scanner tool first to extract the text, then convert the result to DOCX for editing." },
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
            <h2 className="text-2xl font-black mb-4">Ready to Convert Your PDF to DOCX?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Upload your PDF and get an editable DOCX file in seconds. No software to install, no waiting.
            </p>
            <Link
              href="/pdf-to-docx"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Convert PDF to DOCX Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

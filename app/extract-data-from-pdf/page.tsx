import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileSpreadsheet, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extract Data from PDF — Pull Information from PDF Files | PDF.it",
  description:
    "Extract data from PDF files with PDF.it. Pull text, tables, images, and structured data from PDFs for analysis, editing, and reuse — fast and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of data can I extract from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can extract text content, tabular data (tables and spreadsheets), embedded images, and metadata from PDFs. PDF.it offers specialized tools for each: PDF to TXT for text, PDF to Excel for tables, Extract Images for graphics, and OCR Scanner for scanned documents." }
    },
    {
      "@type": "Question",
      "name": "How do I extract tables from a PDF into Excel?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use PDF.it's PDF to Excel converter. Upload your PDF and the tool will detect table structures and convert them into Excel spreadsheet format with rows and columns preserved. This works best with digitally-created PDFs that have clear table formatting." }
    },
    {
      "@type": "Question",
      "name": "Can I extract data from a scanned PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, but scanned PDFs require OCR (Optical Character Recognition) first. Use PDF.it's OCR Scanner to convert scanned pages into selectable, searchable text. Then use the appropriate extraction tool to pull the data you need." }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a digital PDF and a scanned PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "A digital PDF was created from a computer application (Word, Excel, etc.) and contains actual text and data that can be selected and extracted directly. A scanned PDF is essentially a photograph of a document — it contains only image data and requires OCR to extract text." }
    },
    {
      "@type": "Question",
      "name": "Can I extract data from password-protected PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "If you know the password, use PDF.it's Unlock PDF tool first to remove the protection, then extract data normally. PDFs with owner passwords (restricting editing/copying) can often still be processed. PDFs with user passwords require the password to open." }
    },
    {
      "@type": "Question",
      "name": "How do I extract data from multiple PDFs at once?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it Pro supports batch processing. Upload multiple PDFs and process them simultaneously for text extraction, conversion, or image extraction. Results are delivered as a ZIP file for easy download." }
    }
  ]
}

export default function ExtractDataFromPDFPage() {
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
                <FileSpreadsheet className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extract Data from PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Pull text, tables, images, and structured data from any PDF. Whether you need financial figures, research data, or document content, PDF.it has the right extraction tool for the job.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Multiple Extraction Tools</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Browser-Based Processing</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Choose Your Extraction Tool</h2>
            <p className="text-slate-600 mb-8">PDF.it offers multiple ways to extract data from PDFs:</p>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <Link href="/pdf-to-txt" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors text-sm">Extract Text</Link>
              <Link href="/pdf-to-excel" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors text-sm">Extract Tables</Link>
              <Link href="/extract-images-from-pdf" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-xl transition-colors text-sm">Extract Images</Link>
              <Link href="/ocr-scanner" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-xl transition-colors text-sm">OCR Scanner</Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              PDFs are designed for viewing, not editing — which makes extracting data from them a common challenge. Whether you're pulling financial data from annual reports, extracting research findings from academic papers, or converting tabular data for analysis, PDF.it provides specialized tools for every extraction scenario.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Extract plain text from any digital PDF</li>
              <li>✓ Convert PDF tables to Excel spreadsheets</li>
              <li>✓ Pull embedded images from documents</li>
              <li>✓ OCR for scanned and photographed documents</li>
              <li>✓ Batch processing for multiple files (Pro)</li>
              <li>✓ No installation — works entirely in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extract Financial Data from Reports</h2>
              <p className="text-slate-600">
                Annual reports, quarterly earnings, and financial statements are almost always distributed as PDFs. PDF.it's PDF to Excel converter detects table structures and preserves rows, columns, and numerical data — so you can immediately start analyzing figures in your spreadsheet software.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Pull Research Data from Academic Papers</h2>
              <p className="text-slate-600">
                Researchers frequently need to extract text, citations, data tables, and figures from published papers. Convert PDFs to text for content analysis, extract tables to Excel for statistical review, or pull images for presentations and literature reviews.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Mine Content from Any Document</h2>
              <p className="text-slate-600">
                From legal contracts to product catalogs, invoices to technical manuals — any information locked in a PDF can be extracted. Use text extraction for content migration, table extraction for data entry automation, and image extraction for asset management.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Extract Data from a PDF</h2>
            <div className="space-y-4">
              {[
                "Choose the right tool — Text, Tables (Excel), Images, or OCR for scanned docs.",
                "Upload your PDF to the selected PDF.it tool.",
                "Download the extracted data in your preferred format and start working with it.",
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF to TXT", href: "/pdf-to-txt", desc: "Extract text content" },
                { name: "PDF to Excel", href: "/pdf-to-excel", desc: "Extract tables & data" },
                { name: "Extract Images", href: "/extract-images-from-pdf", desc: "Pull embedded images" },
                { name: "OCR Scanner", href: "/ocr-scanner", desc: "Text from scanned PDFs" },
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
                { q: "What types of data can I extract from a PDF?", a: "You can extract text content, tabular data (tables and spreadsheets), embedded images, and metadata from PDFs. PDF.it offers specialized tools for each: PDF to TXT for text, PDF to Excel for tables, Extract Images for graphics, and OCR Scanner for scanned documents." },
                { q: "How do I extract tables from a PDF into Excel?", a: "Use PDF.it's PDF to Excel converter. Upload your PDF and the tool will detect table structures and convert them into Excel spreadsheet format with rows and columns preserved. This works best with digitally-created PDFs that have clear table formatting." },
                { q: "Can I extract data from a scanned PDF?", a: "Yes, but scanned PDFs require OCR (Optical Character Recognition) first. Use PDF.it's OCR Scanner to convert scanned pages into selectable, searchable text. Then use the appropriate extraction tool to pull the data you need." },
                { q: "What is the difference between a digital PDF and a scanned PDF?", a: "A digital PDF was created from a computer application (Word, Excel, etc.) and contains actual text and data that can be selected and extracted directly. A scanned PDF is essentially a photograph of a document — it contains only image data and requires OCR to extract text." },
                { q: "Can I extract data from password-protected PDFs?", a: "If you know the password, use PDF.it's Unlock PDF tool first to remove the protection, then extract data normally. PDFs with owner passwords (restricting editing/copying) can often still be processed. PDFs with user passwords require the password to open." },
                { q: "How do I extract data from multiple PDFs at once?", a: "PDF.it Pro supports batch processing. Upload multiple PDFs and process them simultaneously for text extraction, conversion, or image extraction. Results are delivered as a ZIP file for easy download." },
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

import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileSpreadsheet, Zap, Shield, Download, FileText, Image, Lock, Scissors, Merge, RotateCw, ScanLine } from "lucide-react"

export const metadata = {
  title: "PDF to XLSX — Convert PDF to Excel Spreadsheet | PDF.it",
  description: "Convert PDF to XLSX online with PDF.it. Extract tables, financial data, and reports from PDF into editable Excel spreadsheets. Fast, accurate, no installation.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between XLSX and XLS?",
      "acceptedAnswer": { "@type": "Answer", "text": "XLSX is the modern Excel format introduced with Microsoft Office 2007. It supports larger worksheets, better compression, and improved compatibility compared to the older XLS format. PDF.it converts PDFs directly to XLSX for use in modern spreadsheet applications." }
    },
    {
      "@type": "Question",
      "name": "How do I convert a PDF to XLSX?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it, click Convert, and download your XLSX file. The tool detects tables in your PDF and extracts the data into structured Excel columns and rows." }
    },
    {
      "@type": "Question",
      "name": "Will my PDF tables be converted accurately?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it detects table structures in your PDF and maps them to Excel rows and columns. Simple, well-structured tables convert with high accuracy. Complex or merged-cell layouts may require minor adjustments." }
    },
    {
      "@type": "Question",
      "name": "Can I convert a scanned PDF to XLSX?",
      "acceptedAnswer": { "@type": "Answer", "text": "Scanned PDFs contain images rather than structured data. For best results, use PDF.it's OCR Scanner first to extract text, then convert the result. For advanced table extraction from scans, consider our Business tier." }
    },
    {
      "@type": "Question",
      "name": "Is the PDF to XLSX converter free?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF to XLSX conversion is available to Pro and Business subscribers. Free accounts can use basic PDF tools, while Pro unlocks advanced conversions including PDF to XLSX, DOCX, and PPTX." }
    },
    {
      "@type": "Question",
      "name": "Can I convert multiple PDFs to XLSX at once?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Pro and Business accounts support batch processing — upload multiple PDFs and convert them all to XLSX in one session. Free accounts are limited to single-file conversions." }
    }
  ]
}

export default function PDFToXlsxPage() {
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
                <FileSpreadsheet className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert PDF to XLSX</h1>
              <p className="text-xl text-slate-300 mb-8">
                Extract tables and data from any PDF into an editable Excel XLSX spreadsheet. Accurate column detection, instant download.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Smart Table Detection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>100% Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>Accurate Extraction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to Excel"
          outputFormat="XLSX"
          processingMessage="Converting your PDF to XLSX..."
          successMessage="Your XLSX file is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Why Convert PDF to XLSX?</h2>
            <p className="text-lg text-slate-600 mb-8">
              XLSX is the modern Excel spreadsheet format used by Microsoft Excel, Google Sheets, and LibreOffice Calc. When you receive financial reports, invoices, or data tables as PDFs, converting them to XLSX lets you sort, filter, calculate, and analyze the data — instead of manually retyping everything. PDF.it detects table structures in your PDF and maps them to clean Excel rows and columns.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Extract tables from PDF to editable XLSX format</li>
              <li>&#10003; Smart detection of columns, rows, and headers</li>
              <li>&#10003; XLSX opens in Excel, Google Sheets, and LibreOffice Calc</li>
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
                <h3 className="text-xl font-black text-slate-900 mb-3">Extracting Financial Data</h3>
                <p className="text-slate-600">
                  Bank statements, quarterly reports, and financial summaries often come as PDFs. Convert them to XLSX to run formulas, create charts, and analyze trends in Excel or Google Sheets.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Converting Invoices</h3>
                <p className="text-slate-600">
                  Received invoices in PDF format? Convert them to XLSX to extract line items, calculate totals, and import the data into your accounting software or ERP system.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Analyzing Reports</h3>
                <p className="text-slate-600">
                  Research reports, survey results, and performance data locked in PDFs can be freed. Convert to XLSX and use pivot tables, filtering, and sorting to find insights faster.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Importing Data</h3>
                <p className="text-slate-600">
                  Need to import PDF data into a database, CRM, or analytics platform? Convert the PDF to XLSX first, clean up the data in Excel, then import it into your target system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Convert PDF to XLSX</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Click Convert — PDF.it detects tables and extracts data into spreadsheet format.",
                "Download your XLSX file and open it in Excel, Google Sheets, or any compatible app.",
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
                { name: "PDF to Excel", desc: "Convert PDF to Excel spreadsheet.", href: "/pdf-to-excel", icon: FileSpreadsheet },
                { name: "PDF to Word", desc: "Convert PDF to Word document.", href: "/pdf-to-word", icon: FileText },
                { name: "PDF to JPG", desc: "Convert pages to images.", href: "/pdf-to-jpg", icon: Image },
                { name: "OCR Scanner", desc: "Extract text from scanned PDFs.", href: "/ocr-scanner", icon: ScanLine },
                { name: "Compress PDF", desc: "Reduce PDF file size.", href: "/compress-pdf", icon: Download },
                { name: "Merge PDF", desc: "Combine multiple PDFs.", href: "/merge-pdf", icon: Merge },
                { name: "Split PDF", desc: "Extract pages from PDF.", href: "/split-pdf", icon: Scissors },
                { name: "Rotate PDF", desc: "Fix page orientation.", href: "/rotate-pdf", icon: RotateCw },
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
                { q: "What is the difference between XLSX and XLS?", a: "XLSX is the modern Excel format introduced with Microsoft Office 2007. It supports larger worksheets, better compression, and improved compatibility compared to the older XLS format. PDF.it converts PDFs directly to XLSX for use in modern spreadsheet applications." },
                { q: "How do I convert a PDF to XLSX?", a: "Upload your PDF to PDF.it, click Convert, and download your XLSX file. The tool detects tables in your PDF and extracts the data into structured Excel columns and rows." },
                { q: "Will my PDF tables be converted accurately?", a: "PDF.it detects table structures in your PDF and maps them to Excel rows and columns. Simple, well-structured tables convert with high accuracy. Complex or merged-cell layouts may require minor adjustments." },
                { q: "Can I convert a scanned PDF to XLSX?", a: "Scanned PDFs contain images rather than structured data. For best results, use PDF.it's OCR Scanner first to extract text, then convert the result. For advanced table extraction from scans, consider our Business tier." },
                { q: "Is the PDF to XLSX converter free?", a: "PDF to XLSX conversion is available to Pro and Business subscribers. Free accounts can use basic PDF tools, while Pro unlocks advanced conversions including PDF to XLSX, DOCX, and PPTX." },
                { q: "Can I convert multiple PDFs to XLSX at once?", a: "Yes. Pro and Business accounts support batch processing — upload multiple PDFs and convert them all to XLSX in one session. Free accounts are limited to single-file conversions." },
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
            <h2 className="text-2xl font-black mb-4">Ready to Extract Data from Your PDF?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Upload your PDF and get an editable XLSX spreadsheet in seconds. No software to install, no waiting.
            </p>
            <Link
              href="/pdf-to-xlsx"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Convert PDF to XLSX Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileSpreadsheet, Zap, Shield, Upload, ArrowRight, FileText, Image, Lock, Scissors, Merge, RotateCw, ScanLine } from "lucide-react"

export const metadata = {
  title: "PDF to Google Sheets — Open PDF Tables in Google Sheets | PDF.it",
  description: "Learn how to convert PDF tables to Google Sheets. Convert PDF to Excel with PDF.it, upload to Google Drive, and open in Google Sheets for editing and analysis.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I open a PDF directly in Google Sheets?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Google Sheets cannot open PDF files directly. The best approach is to convert the PDF to an Excel XLSX file first using PDF.it, then upload the XLSX to Google Drive and open it with Google Sheets. This extracts tables and data into editable spreadsheet format." }
    },
    {
      "@type": "Question",
      "name": "Why should I convert to XLSX before uploading to Google Sheets?",
      "acceptedAnswer": { "@type": "Answer", "text": "Google Sheets natively supports XLSX files and preserves cell structure, formulas, and formatting. PDF.it's PDF to Excel converter detects table structures in your PDF and maps them to clean rows and columns, giving Google Sheets structured data to work with." }
    },
    {
      "@type": "Question",
      "name": "Will my PDF tables be extracted accurately?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it detects table structures in your PDF and converts them to Excel rows and columns. Well-structured tables with clear borders convert with high accuracy. Complex layouts with merged cells may need minor adjustments in Google Sheets." }
    },
    {
      "@type": "Question",
      "name": "Is this method free?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF to Excel conversion on PDF.it is available to Pro and Business subscribers. Once you have the XLSX file, uploading to Google Drive and opening in Google Sheets is completely free with any Google account." }
    },
    {
      "@type": "Question",
      "name": "Can I use formulas and charts after importing?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Once the XLSX is opened in Google Sheets, you have full access to formulas, pivot tables, charts, conditional formatting, and all other Google Sheets features. The data is fully editable." }
    },
    {
      "@type": "Question",
      "name": "Can I share the spreadsheet with my team?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Once in Google Sheets, you can share the spreadsheet with anyone, set permissions (view, comment, or edit), and collaborate in real time — just like any other Google Sheets document." }
    }
  ]
}

export default function PDFToGoogleSheetsPage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileSpreadsheet className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert PDF to Google Sheets</h1>
              <p className="text-xl text-slate-300 mb-8">
                Extract tables and data from any PDF into Google Sheets. Convert to Excel first with PDF.it, then upload to Google Drive for analysis and collaboration.
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
                  <Upload className="h-4 w-4 text-orange-500" />
                  <span>Works on Any Device</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Open PDF Tables in Google Sheets</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-lg flex-shrink-0">
                    1
                  </div>
                  <h3 className="text-xl font-black text-slate-900">Convert PDF to Excel with PDF.it</h3>
                </div>
                <p className="text-slate-600 mb-6">
                  Upload your PDF to PDF.it and convert it to an Excel XLSX file. PDF.it detects table structures and extracts data into clean rows and columns, ready for spreadsheet use.
                </p>
                <Link
                  href="/pdf-to-excel"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg"
                >
                  Convert PDF to Excel <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-lg flex-shrink-0">
                    2
                  </div>
                  <h3 className="text-xl font-black text-slate-900">Upload XLSX to Google Drive</h3>
                </div>
                <p className="text-slate-600">
                  Go to <strong>drive.google.com</strong> and click <strong>New &gt; File upload</strong>. Select the XLSX file you just downloaded from PDF.it. Wait for the upload to complete.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-lg flex-shrink-0">
                    3
                  </div>
                  <h3 className="text-xl font-black text-slate-900">Open with Google Sheets</h3>
                </div>
                <p className="text-slate-600">
                  Double-click the uploaded file in Google Drive. It will open in Google Sheets automatically. You can now sort, filter, add formulas, create charts, and share the spreadsheet with your team.
                </p>
              </div>
            </div>

            {/* Prominent CTA */}
            <div className="mt-10 text-center">
              <Link
                href="/pdf-to-excel"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl text-lg transition-colors shadow-lg"
              >
                Start: Convert PDF to Excel <ArrowRight className="h-5 w-5" />
              </Link>
              <p className="text-sm text-slate-500 mt-3">Step 1 of 3 — Convert your PDF to XLSX first</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Why Can't I Open PDFs Directly in Google Sheets?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Google Sheets is a spreadsheet application — it expects structured data in rows and columns. PDFs are visual documents designed for printing, not data analysis. To get your PDF data into Google Sheets, you need to first extract the tables into a spreadsheet format. PDF.it's PDF to Excel converter does this automatically, detecting table structures and mapping them to clean XLSX cells that Google Sheets can read perfectly.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Automatic table detection extracts rows and columns from PDFs</li>
              <li>&#10003; XLSX format opens natively in Google Sheets</li>
              <li>&#10003; Preserves numbers, text, and cell structure</li>
              <li>&#10003; Full access to formulas, charts, and pivot tables after import</li>
              <li>&#10003; Share and collaborate with your team in real time</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Common Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Analyzing Financial Data</h3>
                <p className="text-slate-600">
                  Bank statements, profit-and-loss reports, and quarterly earnings arrive as PDFs. Convert to Google Sheets to run calculations, build charts, and track financial trends over time.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Importing Invoices</h3>
                <p className="text-slate-600">
                  Extract line items from PDF invoices into Google Sheets. Sort by vendor, calculate totals, and reconcile payments — all in a shareable cloud spreadsheet.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Budget Tracking</h3>
                <p className="text-slate-600">
                  Convert budget PDFs from finance teams into Google Sheets. Compare actuals vs. projections, add formulas for variance analysis, and share dashboards with stakeholders.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Data Collaboration</h3>
                <p className="text-slate-600">
                  Instead of emailing PDF reports back and forth, convert them to Google Sheets. Everyone works on the same data in real time — no version conflicts, no outdated copies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">More PDF Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "PDF to Excel", desc: "Convert PDF to Excel spreadsheet.", href: "/pdf-to-excel", icon: FileSpreadsheet },
                { name: "PDF to XLSX", desc: "Convert PDF to XLSX format.", href: "/pdf-to-xlsx", icon: FileSpreadsheet },
                { name: "PDF to Word", desc: "Convert PDF to Word document.", href: "/pdf-to-word", icon: FileText },
                { name: "PDF to Google Docs", desc: "Open PDFs in Google Docs.", href: "/pdf-to-google-docs", icon: FileText },
                { name: "OCR Scanner", desc: "Extract text from scanned PDFs.", href: "/ocr-scanner", icon: ScanLine },
                { name: "Merge PDF", desc: "Combine multiple PDFs.", href: "/merge-pdf", icon: Merge },
                { name: "Split PDF", desc: "Extract pages from PDF.", href: "/split-pdf", icon: Scissors },
                { name: "Compress PDF", desc: "Reduce PDF file size.", href: "/compress-pdf", icon: Image },
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "Can I open a PDF directly in Google Sheets?", a: "No. Google Sheets cannot open PDF files directly. The best approach is to convert the PDF to an Excel XLSX file first using PDF.it, then upload the XLSX to Google Drive and open it with Google Sheets. This extracts tables and data into editable spreadsheet format." },
                { q: "Why should I convert to XLSX before uploading to Google Sheets?", a: "Google Sheets natively supports XLSX files and preserves cell structure, formulas, and formatting. PDF.it's PDF to Excel converter detects table structures in your PDF and maps them to clean rows and columns, giving Google Sheets structured data to work with." },
                { q: "Will my PDF tables be extracted accurately?", a: "PDF.it detects table structures in your PDF and converts them to Excel rows and columns. Well-structured tables with clear borders convert with high accuracy. Complex layouts with merged cells may need minor adjustments in Google Sheets." },
                { q: "Is this method free?", a: "PDF to Excel conversion on PDF.it is available to Pro and Business subscribers. Once you have the XLSX file, uploading to Google Drive and opening in Google Sheets is completely free with any Google account." },
                { q: "Can I use formulas and charts after importing?", a: "Yes. Once the XLSX is opened in Google Sheets, you have full access to formulas, pivot tables, charts, conditional formatting, and all other Google Sheets features. The data is fully editable." },
                { q: "Can I share the spreadsheet with my team?", a: "Yes. Once in Google Sheets, you can share the spreadsheet with anyone, set permissions (view, comment, or edit), and collaborate in real time — just like any other Google Sheets document." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#191B4D] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Ready to Get Your PDF Data into Google Sheets?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Start by converting your PDF to Excel — then upload to Google Drive. The whole process takes under a minute.
            </p>
            <Link
              href="/pdf-to-excel"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Convert PDF to Excel First <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

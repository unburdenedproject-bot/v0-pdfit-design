import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileSpreadsheet, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "PDF Table to Excel — Convert PDF Tables to Spreadsheets | PDF.it",
  description:
    "Convert PDF tables to Excel spreadsheets with PDF.it. Extract structured data from PDFs and download editable .xlsx files — fast and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does PDF.it detect tables in a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it analyzes the layout of your PDF to detect rows, columns, borders, and cell alignment. It identifies table structures even without visible gridlines, converting them into properly formatted Excel cells." }
    },
    {
      "@type": "Question",
      "name": "Will my table formatting be preserved in Excel?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it maps PDF table cells to Excel cells, preserving column widths, row structure, and data alignment. Numbers, dates, and text are placed in the correct cells for immediate editing." }
    },
    {
      "@type": "Question",
      "name": "Can I convert multiple tables from one PDF to Excel?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. If your PDF contains multiple tables across different pages, PDF.it extracts all of them into your Excel file. Each table is placed in a logical layout for easy navigation." }
    },
    {
      "@type": "Question",
      "name": "What if my PDF table has merged cells or complex layouts?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it handles most table layouts including multi-row headers and spanning cells. For very complex tables with irregular merges, the Business-tier Table Extraction tool provides more advanced layout analysis." }
    },
    {
      "@type": "Question",
      "name": "Can I convert a scanned PDF table to Excel?",
      "acceptedAnswer": { "@type": "Answer", "text": "For scanned PDFs, use PDF.it's OCR Scanner first to make the text searchable, then convert the PDF to Excel. This two-step approach gives the best results for scanned documents." }
    },
    {
      "@type": "Question",
      "name": "Is this tool free to use?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF Table to Excel is available on the Pro plan ($3.99/month) which includes unlimited conversions and files up to 200MB. For advanced table extraction with multi-format export, check out the Business plan." }
    }
  ]
}

export default function PDFTableToExcelPage() {
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
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a1f5e] to-[#252A6A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileSpreadsheet className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF Table to Excel</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convert tables locked inside PDF files into editable Excel spreadsheets. Extract rows, columns, and data with structure intact — ready for analysis.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Smart Table Detection</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Download as .xlsx</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to Excel"
          outputFormat="XLSX"
          processingMessage="Extracting tables to Excel..."
          successMessage="Your Excel file is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              PDF tables are meant to be read, not edited. When you need to update numbers, run formulas, or import data into another system, you need those tables in Excel. PDF.it converts PDF tables directly to .xlsx files with rows, columns, and cell data preserved.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Detects table structure including rows, columns, and headers</li>
              <li>&#10003; Preserves numbers, dates, and text in correct cells</li>
              <li>&#10003; Handles multi-page tables across your PDF</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>&#10003; No installation — convert in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Convert Financial Reports to Editable Spreadsheets</h2>
              <p className="text-slate-600">
                Balance sheets, income statements, and budget reports come as PDFs. Convert the tables to Excel so you can update figures, add formulas, and build charts from real data instead of retyping everything.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extract Invoice Line Items into Excel</h2>
              <p className="text-slate-600">
                Vendor invoices with itemized lines, quantities, and totals are easy to extract. Pull them into Excel for reconciliation, expense tracking, or importing into your accounting system.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Turn Data Tables into Analysis-Ready Spreadsheets</h2>
              <p className="text-slate-600">
                Research data, product catalogs, and pricing tables trapped in PDFs become useful the moment they are in Excel. Sort, filter, pivot, and chart your data without manual entry.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Convert a PDF Table to Excel</h2>
            <div className="space-y-4">
              {[
                "Upload your PDF containing tables to PDF.it.",
                "Click Convert — tables are detected and extracted automatically.",
                "Download your .xlsx file and open it in Excel or Google Sheets.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
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
                { name: "PDF to Excel", href: "/pdf-to-excel", desc: "Full PDF to Excel conversion" },
                { name: "Table Extraction", href: "/table-extraction", desc: "Advanced data export" },
                { name: "Extract Tables", href: "/extract-tables-from-pdf", desc: "Pull tables from PDFs" },
                { name: "PDF Table to CSV", href: "/pdf-table-to-csv", desc: "Export tables as CSV" },
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
                { q: "How does PDF.it detect tables in a PDF?", a: "PDF.it analyzes the layout of your PDF to detect rows, columns, borders, and cell alignment. It identifies table structures even without visible gridlines, converting them into properly formatted Excel cells." },
                { q: "Will my table formatting be preserved in Excel?", a: "Yes. PDF.it maps PDF table cells to Excel cells, preserving column widths, row structure, and data alignment. Numbers, dates, and text are placed in the correct cells for immediate editing." },
                { q: "Can I convert multiple tables from one PDF to Excel?", a: "Yes. If your PDF contains multiple tables across different pages, PDF.it extracts all of them into your Excel file. Each table is placed in a logical layout for easy navigation." },
                { q: "What if my PDF table has merged cells or complex layouts?", a: "PDF.it handles most table layouts including multi-row headers and spanning cells. For very complex tables with irregular merges, the Business-tier Table Extraction tool provides more advanced layout analysis." },
                { q: "Can I convert a scanned PDF table to Excel?", a: "For scanned PDFs, use PDF.it's OCR Scanner first to make the text searchable, then convert the PDF to Excel. This two-step approach gives the best results for scanned documents." },
                { q: "Is this tool free to use?", a: "PDF Table to Excel is available on the Pro plan ($3.99/month) which includes unlimited conversions and files up to 200MB. For advanced table extraction with multi-format export, check out the Business plan." },
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

import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileSpreadsheet, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extract Tables from PDF — Pull Tables into Excel | OmnisPDF",
  description:
    "Extract tables from PDF files with OmnisPDF. Pull structured data from PDFs into Excel spreadsheets for editing and analysis — fast and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How accurate is table extraction from PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "OmnisPDF uses advanced parsing to detect table structures, borders, and cell alignment. Accuracy depends on the PDF — well-structured tables with clear borders extract with high fidelity, while scanned or image-based tables may need OCR first." }
    },
    {
      "@type": "Question",
      "name": "What formats can I export extracted tables to?",
      "acceptedAnswer": { "@type": "Answer", "text": "With PDF to Excel (Pro), you get .xlsx files. With Table Extraction (Business), you can export structured data to Excel, CSV, and other formats suitable for databases and data analysis tools." }
    },
    {
      "@type": "Question",
      "name": "Can I extract tables from scanned PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "For scanned PDFs, run them through OmnisPDF's OCR Scanner first to convert images to searchable text, then extract the tables. This two-step process works well for most scanned documents." }
    },
    {
      "@type": "Question",
      "name": "What is the difference between Pro and Business for table extraction?",
      "acceptedAnswer": { "@type": "Answer", "text": "Pro includes PDF to Excel conversion, which works well for basic table extraction. Business includes advanced Table Extraction with better structure detection, multi-table support, and direct export to multiple formats." }
    },
    {
      "@type": "Question",
      "name": "Can I extract multiple tables from a single PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Both PDF to Excel and Table Extraction can handle multiple tables across different pages. Business-tier Table Extraction is better at separating distinct tables on the same page." }
    },
    {
      "@type": "Question",
      "name": "Does table extraction preserve formatting like merged cells?",
      "acceptedAnswer": { "@type": "Answer", "text": "OmnisPDF preserves cell structure, column alignment, and data types. Complex formatting like merged cells is handled best by the Business-tier Table Extraction tool, which uses advanced layout analysis." }
    }
  ]
}

export default function ExtractTablesFromPDFPage() {
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
                <FileSpreadsheet className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extract Tables from PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Pull structured table data from PDF files into Excel spreadsheets for editing, analysis, and reporting. Stop retyping data — extract it instantly.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Accurate Table Detection</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Export to Excel</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Extract Tables from PDFs</h2>
            <p className="text-slate-600 mb-6">Use PDF to Excel for basic table extraction (Pro), or Table Extraction for advanced structured data export (Business).</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pdf-to-excel" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">PDF to Excel (Pro)</Link>
              <Link href="/table-extraction" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors">Table Extraction (Business)</Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              PDFs lock your data inside static pages. When you need to analyze financial tables, update pricing lists, or import invoice data into a spreadsheet, manually retyping wastes hours. OmnisPDF extracts tables from PDFs and converts them into editable Excel files you can work with immediately.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Extract tables with rows, columns, and cell data intact</li>
              <li>&#10003; Works with financial reports, invoices, and data sheets</li>
              <li>&#10003; Export to Excel (.xlsx) for editing and analysis</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>&#10003; No installation — extract tables in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extract Financial Tables from PDF Reports</h2>
              <p className="text-slate-600">
                Annual reports, quarterly earnings, and balance sheets are often distributed as PDFs. OmnisPDF pulls the numbers out of those tables so you can drop them straight into your financial models and spreadsheets.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Pull Data from Research Reports and Surveys</h2>
              <p className="text-slate-600">
                Research papers, market reports, and survey results are packed with tables. Instead of transcribing data by hand, extract the tables into Excel and start your analysis immediately.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Convert Invoice Tables to Spreadsheets</h2>
              <p className="text-slate-600">
                Invoices with line items, quantities, and totals are easy to extract. Pull invoice data into Excel for bookkeeping, reconciliation, or importing into your accounting software.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Extract Tables from a PDF</h2>
            <div className="space-y-4">
              {[
                "Upload your PDF containing tables to OmnisPDF.",
                "Choose PDF to Excel (Pro) or Table Extraction (Business).",
                "Download your extracted data as an Excel spreadsheet.",
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
                { name: "PDF to Excel", href: "/pdf-to-excel", desc: "Convert full PDFs to Excel" },
                { name: "Table Extraction", href: "/table-extraction", desc: "Advanced data export" },
                { name: "PDF Table to CSV", href: "/pdf-table-to-csv", desc: "Export tables as CSV" },
                { name: "Extract Data", href: "/extract-images-from-pdf", desc: "Extract images from PDFs" },
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
                { q: "How accurate is table extraction from PDFs?", a: "OmnisPDF uses advanced parsing to detect table structures, borders, and cell alignment. Accuracy depends on the PDF — well-structured tables with clear borders extract with high fidelity, while scanned or image-based tables may need OCR first." },
                { q: "What formats can I export extracted tables to?", a: "With PDF to Excel (Pro), you get .xlsx files. With Table Extraction (Business), you can export structured data to Excel, CSV, and other formats suitable for databases and data analysis tools." },
                { q: "Can I extract tables from scanned PDFs?", a: "For scanned PDFs, run them through OmnisPDF's OCR Scanner first to convert images to searchable text, then extract the tables. This two-step process works well for most scanned documents." },
                { q: "What is the difference between Pro and Business for table extraction?", a: "Pro includes PDF to Excel conversion, which works well for basic table extraction. Business includes advanced Table Extraction with better structure detection, multi-table support, and direct export to multiple formats." },
                { q: "Can I extract multiple tables from a single PDF?", a: "Yes. Both PDF to Excel and Table Extraction can handle multiple tables across different pages. Business-tier Table Extraction is better at separating distinct tables on the same page." },
                { q: "Does table extraction preserve formatting like merged cells?", a: "OmnisPDF preserves cell structure, column alignment, and data types. Complex formatting like merged cells is handled best by the Business-tier Table Extraction tool, which uses advanced layout analysis." },
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

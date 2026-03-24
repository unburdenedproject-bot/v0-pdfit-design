import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TableExtractionInterface } from "@/components/table-extraction-interface"
import { Table2, Zap, Shield, FileText, Lock, Layers, Merge, Repeat, ArrowLeftRight, PenTool } from "lucide-react"

export const metadata = {
  title: "Extract Tables from PDF to Excel Online | PDF.it",
  description:
    "Extract tables from PDF documents and convert them into Excel spreadsheets. Automatically detect and export tabular data — fast and accurate. PDF.it Business feature.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Table Extraction?",
      "acceptedAnswer": { "@type": "Answer", "text": "Table Extraction automatically detects tables inside PDF documents and converts them into editable Excel (.xlsx) spreadsheets. It works with financial reports, invoices, scientific data, and any PDF containing tabular data." }
    },
    {
      "@type": "Question",
      "name": "What types of tables can be extracted?",
      "acceptedAnswer": { "@type": "Answer", "text": "The tool can extract tables with visible borders, borderless tables (based on alignment), multi-page tables, and tables with merged headers. It works best with structured, clean tables." }
    },
    {
      "@type": "Question",
      "name": "Is Table Extraction free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Table Extraction is available as a Business plan feature for $13.99/month. It includes unlimited extractions along with all other Business tools like Workflow Automation, PDF Compare, eSign, and PDF Redaction." }
    },
    {
      "@type": "Question",
      "name": "Can I extract tables from scanned PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "For best results, first run OCR on the scanned PDF using our OCR Scanner tool, then use Table Extraction on the text-recognized PDF." }
    },
    {
      "@type": "Question",
      "name": "What format is the output exported in?",
      "acceptedAnswer": { "@type": "Answer", "text": "Tables are exported as an Excel (.xlsx) file that can be opened in Microsoft Excel, Google Sheets, LibreOffice Calc, and other spreadsheet applications." }
    },
  ]
}

export default function TableExtractionPage() {
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
              <div className="w-20 h-20 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Table2 className="h-10 w-10 text-white" />
              </div>
              <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Business
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extract Tables from PDF</h1>
              <p className="text-xl text-slate-300 mb-4">
                Extract tables from PDF documents and convert them into editable Excel spreadsheets. Automatically detect tabular data in reports, invoices, financial statements, and scientific documents.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Stop copying data manually — let PDF.it extract your tables with precision.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Table2 className="h-4 w-4 text-indigo-400" /><span>Auto Detection</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-indigo-400" /><span>Excel Export</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-indigo-400" /><span>Files Deleted After Session</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Table Extraction Interface */}
        <TableExtractionInterface />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Upload Your PDF", desc: "Drag and drop your PDF containing tables into the upload zone." },
                { step: "2", title: "Automatic Detection", desc: "PDF.it automatically detects all tables in the document using AI-powered recognition." },
                { step: "3", title: "Download Excel", desc: "Download the extracted tables as an Excel (.xlsx) file ready for editing and analysis." },
              ].map((item) => (
                <div key={item.step} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-2">{item.title}</div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Use Table Extraction */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">Why Extract Tables from PDFs?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                PDFs are great for sharing documents, but terrible for working with data. When you need numbers from a financial report, line items from an invoice, or research data from a paper, copying cell by cell is slow and error-prone.
              </p>
              <p className="text-slate-600 text-center">
                Table Extraction uses Google Document AI to automatically detect and extract tables from any PDF, delivering clean Excel spreadsheets ready for analysis, formulas, and charts.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Common Use Cases</h2>
            <div className="space-y-10">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Financial Reports</h3>
                <p className="text-slate-600">
                  Extract financial statements, balance sheets, and income reports from PDFs directly into Excel for financial analysis and modeling.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Invoices and Purchase Orders</h3>
                <p className="text-slate-600">
                  Extract line items, quantities, prices, and totals from PDF invoices to import into accounting systems or tracking spreadsheets.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Scientific and Research Data</h3>
                <p className="text-slate-600">
                  Extract data tables from scientific papers, research reports, and academic publications for reuse in your own analyses.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Government and Regulatory Documents</h3>
                <p className="text-slate-600">
                  Extract statistical data, compliance tables, and regulatory figures from government PDFs into structured spreadsheets for reporting and analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "What is Table Extraction?", a: "It automatically detects tables inside PDFs and converts them into editable Excel spreadsheets. Works with financial reports, invoices, scientific data, and any PDF with tabular data." },
                { q: "What types of tables can be extracted?", a: "Tables with visible borders, borderless tables, multi-page tables, and tables with merged headers. Works best with structured, clean tables." },
                { q: "Is Table Extraction free?", a: "Table Extraction is available as a Business plan feature for $13.99/month." },
                { q: "Can I extract tables from scanned PDFs?", a: "For best results, first run OCR using our OCR Scanner tool, then use Table Extraction on the processed PDF." },
                { q: "What format is the output?", a: "Tables are exported as an Excel (.xlsx) file compatible with Microsoft Excel, Google Sheets, and LibreOffice Calc." },
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
            <h2 className="text-2xl font-black mb-4">Turn PDF Tables into Spreadsheets</h2>
            <p className="text-slate-300 text-lg mb-8">
              Extract any table from any PDF and get a clean, formatted Excel file in seconds. No more manual copying.
            </p>
            <Link
              href="/table-extraction"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Start Extracting Now
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">More PDF Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "PDF Compare", desc: "Compare two PDFs side by side.", href: "/pdf-compare", icon: ArrowLeftRight },
                { name: "eSign Documents", desc: "Add electronic signatures to PDFs.", href: "/esign", icon: PenTool },
                { name: "PDF Redaction", desc: "Remove sensitive information.", href: "/pdf-redaction", icon: Shield },
                { name: "Workflow Automation", desc: "Chain PDF tools into one workflow.", href: "/workflow-automation", icon: Repeat },
                { name: "Protect PDF", desc: "Add password protection.", href: "/protect-pdf", icon: Lock },
                { name: "Flatten PDF", desc: "Lock form fields and annotations.", href: "/flatten-pdf", icon: Layers },
                { name: "Compress PDF", desc: "Reduce file size without losing quality.", href: "/compress-pdf", icon: FileText },
                { name: "Merge PDF", desc: "Combine multiple PDFs into one.", href: "/merge-pdf", icon: Merge },
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
      </main>
      <Footer />
    </div>
  )
}

import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileSpreadsheet, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "PDF Table to CSV — Export PDF Tables as CSV Files | OmnisPDF",
  description:
    "Export tables from PDFs as CSV files with OmnisPDF. Extract structured data for use in Excel, Google Sheets, databases, and data analysis tools.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between CSV and Excel for table export?",
      "acceptedAnswer": { "@type": "Answer", "text": "CSV is a plain text format with comma-separated values — it works everywhere, including databases, scripts, and data pipelines. Excel (.xlsx) preserves formatting, formulas, and multiple sheets. Use CSV when you need maximum compatibility, Excel when you need rich formatting." }
    },
    {
      "@type": "Question",
      "name": "How do I get a CSV from a PDF table?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to OmnisPDF's PDF to Excel tool to extract the table data, then open the Excel file and save it as CSV. Or use the Business-tier Table Extraction tool for direct structured data export." }
    },
    {
      "@type": "Question",
      "name": "Will special characters and encoding be preserved in the CSV?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OmnisPDF exports data in UTF-8 encoding, which supports accented characters, currency symbols, and international text. Your CSV files will display correctly in Excel, Google Sheets, and most data tools." }
    },
    {
      "@type": "Question",
      "name": "Can I extract large tables with hundreds of rows?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OmnisPDF handles tables of any size. Pro users can process files up to 200MB, and Business users get priority processing for large documents with extensive table data." }
    },
    {
      "@type": "Question",
      "name": "Can I use CSV files for database imports?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. CSV is the most widely supported format for database imports. Extract your PDF tables, save as CSV, and import directly into MySQL, PostgreSQL, MongoDB, or any database that accepts CSV data." }
    },
    {
      "@type": "Question",
      "name": "Can I choose a different delimiter instead of commas?",
      "acceptedAnswer": { "@type": "Answer", "text": "The standard export uses commas as delimiters. If you need semicolons, tabs, or other delimiters, export to Excel first, then use Excel or Google Sheets to save as CSV with your preferred delimiter settings." }
    }
  ]
}

export default function PDFTableToCSVPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF Table to CSV</h1>
              <p className="text-xl text-slate-300 mb-8">
                Export tables from PDF files as CSV for use in Excel, Google Sheets, databases, and data analysis tools. The most portable format for your extracted data.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Universal Compatibility</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Clean Data Export</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Export PDF Tables</h2>
            <p className="text-slate-600 mb-6">Convert PDF tables to Excel first, then save as CSV. Or use Table Extraction for direct structured data export.</p>
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
              CSV is the universal format for data. When you need to import PDF table data into a database, feed it into a script, or load it into Google Sheets, CSV is the way to go. OmnisPDF helps you extract tables from PDFs and get them into CSV format for any workflow.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Export table data in clean, comma-separated format</li>
              <li>&#10003; Compatible with Excel, Google Sheets, and databases</li>
              <li>&#10003; UTF-8 encoding for international characters</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>&#10003; No installation — process everything in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">CSV for Data Analysis Workflows</h2>
              <p className="text-slate-600">
                Data analysts and scientists work with CSV every day. Extract tables from PDF reports and load them directly into Python, R, or your favorite analysis tool without manual data entry.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Import PDF Data into Databases</h2>
              <p className="text-slate-600">
                Need to get PDF table data into MySQL, PostgreSQL, or MongoDB? CSV is the standard import format for virtually every database. Extract your tables and import them with a single command.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">CSV for Automation and Scripting</h2>
              <p className="text-slate-600">
                Automate your data pipeline by converting PDF tables to CSV. Feed the output into spreadsheets, CRM systems, ETL processes, or any tool that accepts structured text data.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Export a PDF Table as CSV</h2>
            <div className="space-y-4">
              {[
                "Upload your PDF to OmnisPDF's PDF to Excel converter.",
                "Download the extracted Excel file with your table data.",
                "Open in Excel or Google Sheets and save as CSV (.csv).",
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
                { name: "PDF to Excel", href: "/pdf-to-excel", desc: "Full PDF to Excel conversion" },
                { name: "Table Extraction", href: "/table-extraction", desc: "Advanced data export" },
                { name: "Extract Tables", href: "/extract-tables-from-pdf", desc: "Pull tables from PDFs" },
                { name: "PDF Table to Excel", href: "/pdf-table-to-excel", desc: "Tables to spreadsheets" },
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
                { q: "What is the difference between CSV and Excel for table export?", a: "CSV is a plain text format with comma-separated values — it works everywhere, including databases, scripts, and data pipelines. Excel (.xlsx) preserves formatting, formulas, and multiple sheets. Use CSV when you need maximum compatibility, Excel when you need rich formatting." },
                { q: "How do I get a CSV from a PDF table?", a: "Upload your PDF to OmnisPDF's PDF to Excel tool to extract the table data, then open the Excel file and save it as CSV. Or use the Business-tier Table Extraction tool for direct structured data export." },
                { q: "Will special characters and encoding be preserved in the CSV?", a: "Yes. OmnisPDF exports data in UTF-8 encoding, which supports accented characters, currency symbols, and international text. Your CSV files will display correctly in Excel, Google Sheets, and most data tools." },
                { q: "Can I extract large tables with hundreds of rows?", a: "Yes. OmnisPDF handles tables of any size. Pro users can process files up to 200MB, and Business users get priority processing for large documents with extensive table data." },
                { q: "Can I use CSV files for database imports?", a: "Absolutely. CSV is the most widely supported format for database imports. Extract your PDF tables, save as CSV, and import directly into MySQL, PostgreSQL, MongoDB, or any database that accepts CSV data." },
                { q: "Can I choose a different delimiter instead of commas?", a: "The standard export uses commas as delimiters. If you need semicolons, tabs, or other delimiters, export to Excel first, then use Excel or Google Sheets to save as CSV with your preferred delimiter settings." },
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

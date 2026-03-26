import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileSpreadsheet, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extract Tables from PDF — Pull Tables into Excel | PDF.it",
  description:
    "Extract tables from PDF files into Excel spreadsheets. PDF.it offers two options: PDF to Excel (Pro) for basic extraction, and Table Extraction (Business) for advanced structured data export.",
}

export default function ExtractTablesFromPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Header />
      <main>
        {/* Hero */}
        <section
          className="text-white py-16 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%),
              #0E0F1E
            `,
          }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
            <filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#heroGrain)" />
          </svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)",
                }}
              >
                <FileSpreadsheet className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extract Tables from PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Pull structured table data from PDF files into Excel spreadsheets for editing, analysis, and reporting.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Accurate Table Detection</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Export to Excel</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              PDFs lock your data inside static pages. When you need to analyze financial tables, update pricing lists, or import invoice data, manually retyping wastes hours. PDF.it extracts tables from PDFs and converts them into editable Excel files — choose PDF to Excel (Pro) for basic extraction or Table Extraction (Business) for advanced structured data.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Extract tables with rows, columns, and cell data intact</li>
              <li className="flex items-center gap-2">✓ Works with financial reports, invoices, and data sheets</li>
              <li className="flex items-center gap-2">✓ Export to Excel (.xlsx) for editing and analysis</li>
              <li className="flex items-center gap-2">✓ No installation — extract tables in your browser</li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pdf-to-excel" className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">PDF to Excel (Pro)</Link>
              <Link href="/table-extraction" className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors">Table Extraction (Business)</Link>
            </div>
          </div>
        </section>

        {/* Feature Blocks */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Financial Tables & Reports", desc: "Extract numbers from annual reports, earnings, balance sheets for your financial models." },
                { title: "Research & Survey Data", desc: "Pull tables from research papers, market reports, and surveys into Excel for analysis." },
                { title: "Invoice Line Items", desc: "Extract invoice data with quantities and totals for bookkeeping and accounting software." },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <div
                    className="rounded-[11px] p-6 h-full"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">How to Extract Tables from a PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Upload your PDF", desc: "Drag and drop your file" },
                { num: "2", title: "Choose extraction method", desc: "PDF to Excel or Table Extraction" },
                { num: "3", title: "Download Excel file", desc: "Get your data in a spreadsheet" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{
                      background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                      boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)",
                      border: "1px solid rgba(20,216,196,0.25)",
                    }}
                  >
                    <span className="text-[#14D8C4] font-black text-lg">{step.num}</span>
                  </div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
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
                { name: "PDF to Excel", href: "/pdf-to-excel", desc: "Convert full PDFs to Excel" },
                { name: "Table Extraction", href: "/table-extraction", desc: "Advanced data export" },
                { name: "OCR Scanner", href: "/ocr-scanner", desc: "Text from scanned PDFs" },
                { name: "PDF to TXT", href: "/pdf-to-txt", desc: "Extract text from PDFs" },
              ].map((tool) => (
                <div
                  key={tool.href}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <Link
                    href={tool.href}
                    className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%),
              radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%),
              radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "How accurate is table extraction from PDFs?", a: "PDF.it uses advanced parsing to detect table structures, borders, and cell alignment. Accuracy depends on the PDF — well-structured tables with clear borders extract with high fidelity, while scanned or image-based tables may need OCR first." },
                { q: "What formats can I export extracted tables to?", a: "With PDF to Excel (Pro), you get .xlsx files. With Table Extraction (Business), you can export structured data to Excel, CSV, and other formats suitable for databases and data analysis tools." },
                { q: "Can I extract tables from scanned PDFs?", a: "For scanned PDFs, run them through PDF.it's OCR Scanner first to convert images to searchable text, then extract the tables. This two-step process works well for most scanned documents." },
                { q: "What is the difference between Pro and Business for table extraction?", a: "Pro includes PDF to Excel conversion, which works well for basic table extraction. Business includes advanced Table Extraction with better structure detection, multi-table support, and direct export to multiple formats." },
                { q: "Can I extract multiple tables from a single PDF?", a: "Yes. Both PDF to Excel and Table Extraction can handle multiple tables across different pages. Business-tier Table Extraction is better at separating distinct tables on the same page." },
                { q: "Does table extraction preserve formatting like merged cells?", a: "PDF.it preserves cell structure, column alignment, and data types. Complex formatting like merged cells is handled best by the Business-tier Table Extraction tool, which uses advanced layout analysis." },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Schema */}
        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How accurate is table extraction from PDFs?", "acceptedAnswer": { "@type": "Answer", "text": "PDF.it uses advanced parsing to detect table structures, borders, and cell alignment. Accuracy depends on the PDF — well-structured tables with clear borders extract with high fidelity, while scanned or image-based tables may need OCR first." } },
            { "@type": "Question", "name": "What formats can I export extracted tables to?", "acceptedAnswer": { "@type": "Answer", "text": "With PDF to Excel (Pro), you get .xlsx files. With Table Extraction (Business), you can export structured data to Excel, CSV, and other formats suitable for databases and data analysis tools." } },
            { "@type": "Question", "name": "Can I extract tables from scanned PDFs?", "acceptedAnswer": { "@type": "Answer", "text": "For scanned PDFs, run them through PDF.it's OCR Scanner first to convert images to searchable text, then extract the tables. This two-step process works well for most scanned documents." } },
            { "@type": "Question", "name": "What is the difference between Pro and Business for table extraction?", "acceptedAnswer": { "@type": "Answer", "text": "Pro includes PDF to Excel conversion, which works well for basic table extraction. Business includes advanced Table Extraction with better structure detection, multi-table support, and direct export to multiple formats." } },
            { "@type": "Question", "name": "Can I extract multiple tables from a single PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Both PDF to Excel and Table Extraction can handle multiple tables across different pages. Business-tier Table Extraction is better at separating distinct tables on the same page." } },
            { "@type": "Question", "name": "Does table extraction preserve formatting like merged cells?", "acceptedAnswer": { "@type": "Answer", "text": "PDF.it preserves cell structure, column alignment, and data types. Complex formatting like merged cells is handled best by the Business-tier Table Extraction tool, which uses advanced layout analysis." } },
          ]
        })}} />
      </main>
      <Footer />
    </div>
  )
}

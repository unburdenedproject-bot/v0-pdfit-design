import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TableExtractionInterface } from "@/components/table-extraction-interface"
import { FileSpreadsheet, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "High-Volume Table Extraction — 2,000 Pages/Month to Excel | PDF.it",
  description:
    "Extract up to 2,000 pages of tables per month from PDFs into Excel spreadsheets. Built for law firms, accounting teams, labs, and data-heavy organizations. PDF.it Enterprise feature.",
  alternates: {
    canonical: "https://pdf.it.com/high-volume-table-extraction",
    languages: {
      "en": "https://pdf.it.com/high-volume-table-extraction",
      "es": "https://pdf.it.com/es/extraccion-tablas-alto-volumen",
      "pt-BR": "https://pdf.it.com/br/extracao-tabelas-alto-volume",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is High-Volume Table Extraction?",
      "acceptedAnswer": { "@type": "Answer", "text": "It's the Enterprise version of Table Extraction with a 2,000-page monthly limit instead of 200. Same accurate extraction engine, but designed for teams that process documents at scale." }
    },
    {
      "@type": "Question",
      "name": "How is this different from regular Table Extraction?",
      "acceptedAnswer": { "@type": "Answer", "text": "Regular Table Extraction (Business, $13.99/mo) allows 200 pages per month. High-Volume (Enterprise, $49.99/mo) allows 2,000 pages per month with priority processing and dedicated support." }
    },
    {
      "@type": "Question",
      "name": "What types of tables can be extracted?",
      "acceptedAnswer": { "@type": "Answer", "text": "Financial tables, invoices, legal documents, lab results, compliance reports — any PDF with structured tabular data. The tool detects rows, columns, and cell boundaries automatically." }
    },
    {
      "@type": "Question",
      "name": "Does it work with scanned PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "For scanned PDFs, run them through our OCR Scanner first to convert images to searchable text, then extract the tables." }
    },
    {
      "@type": "Question",
      "name": "Is my data stored?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Files are processed and deleted immediately after your session. We never store or share your documents." }
    },
    {
      "@type": "Question",
      "name": "What format is the output?",
      "acceptedAnswer": { "@type": "Answer", "text": "Tables are exported as Excel (.xlsx) files that you can open in Microsoft Excel, Google Sheets, or any compatible spreadsheet application." }
    },
  ]
}

export default function HighVolumeTableExtractionPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">High-Volume Table Extraction</h1>
              <p className="text-xl text-slate-300 mb-8">
                Extract up to 2,000 pages of tables per month from PDFs into Excel. Built for law firms, accounting teams, research labs, and data-heavy organizations that process documents at scale.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><FileSpreadsheet className="h-4 w-4 text-[#14D8C4]" /><span>2,000 Pages/Month</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Priority Processing</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Enterprise Feature</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Standard Table Extraction (Business) handles up to 200 pages per month. High-Volume Table Extraction is designed for Enterprise teams that process thousands of pages — financial reports, legal filings, lab results, and compliance documents. Extract structured table data from PDFs into Excel at scale with priority processing.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">{"\u2713"} 2,000 pages of table extraction per month</li>
              <li className="flex items-center gap-2">{"\u2713"} Priority processing queue</li>
              <li className="flex items-center gap-2">{"\u2713"} Same accurate table detection engine</li>
              <li className="flex items-center gap-2">{"\u2713"} Dedicated email support</li>
            </ul>
          </div>
        </section>

        {/* Table Extraction Interface */}
        <TableExtractionInterface />

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
                { title: "Law Firms & Legal Teams", desc: "Process discovery documents, court filings, and contract tables at volume. Extract structured data from hundreds of legal PDFs per month without manual transcription." },
                { title: "Accounting & Finance", desc: "Pull financial tables from annual reports, tax documents, and invoices at scale. Feed extracted data directly into your spreadsheets and accounting software." },
                { title: "Research Labs & Compliance", desc: "Extract experimental data tables, compliance reports, and regulatory filings. Handle large batches of scientific and regulatory documents efficiently." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">How It Works</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Upload your PDF", desc: "Drag and drop your file" },
                { num: "2", title: "Tables auto-detected", desc: "AI identifies table structures" },
                { num: "3", title: "Download Excel", desc: "Get your data in a spreadsheet" },
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
                { name: "Table Extraction", href: "/table-extraction", desc: "200 pages/month — Business" },
                { name: "PDF to Excel", href: "/pdf-to-excel", desc: "Convert full PDFs to Excel" },
                { name: "OCR Scanner", href: "/ocr-scanner", desc: "Make scanned PDFs searchable first" },
                { name: "Workflow Automation", href: "/workflow-automation", desc: "Chain PDF tools together" },
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
                { q: "What is High-Volume Table Extraction?", a: "It's the Enterprise version of Table Extraction with a 2,000-page monthly limit instead of 200. Same accurate extraction engine, but designed for teams that process documents at scale." },
                { q: "How is this different from regular Table Extraction?", a: "Regular Table Extraction (Business, $13.99/mo) allows 200 pages per month. High-Volume (Enterprise, $49.99/mo) allows 2,000 pages per month with priority processing and dedicated support." },
                { q: "What types of tables can be extracted?", a: "Financial tables, invoices, legal documents, lab results, compliance reports — any PDF with structured tabular data. The tool detects rows, columns, and cell boundaries automatically." },
                { q: "Does it work with scanned PDFs?", a: "For scanned PDFs, run them through our OCR Scanner first to convert images to searchable text, then extract the tables." },
                { q: "Is my data stored?", a: "No. Files are processed and deleted immediately after your session. We never store or share your documents." },
                { q: "What format is the output?", a: "Tables are exported as Excel (.xlsx) files that you can open in Microsoft Excel, Google Sheets, or any compatible spreadsheet application." },
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

        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </main>
      <Footer />
    </div>
  )
}

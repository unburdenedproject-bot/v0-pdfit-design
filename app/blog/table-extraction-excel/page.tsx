import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Calendar, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "New Feature: Extract Tables from PDFs to Excel with AI | PDF.it Blog",
  description:
    "PDF.it's Table Extraction tool uses Google Document AI to detect tables in any PDF and export them as clean, formatted Excel spreadsheets. Available on Business and Enterprise plans.",
}

export default function TableExtractionExcelPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-orange-500/20 text-orange-300 text-xs font-bold px-3 py-1 rounded-full">
                  Product
                </span>
                <div className="flex items-center gap-1.5 text-sm text-slate-400">
                  <Calendar className="h-3.5 w-3.5" />
                  April 1, 2026
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black">
                New Feature: Extract Tables from PDFs to Excel with AI
              </h1>
            </div>
          </div>
        </section>

        {/* Article */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <article className="max-w-3xl mx-auto">
              <p className="text-slate-600 leading-relaxed mb-4 text-lg">
                Copying data from PDF tables into spreadsheets is one of the most tedious tasks in any office. You
                highlight a row, paste it into Excel, fix the formatting, repeat — for every single table on every
                single page. We just launched Table Extraction, powered by Google Document AI, to solve this problem
                once and for all.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4">How It Works</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The process is straightforward — no configuration, no setup, no learning curve:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                <li>
                  <strong>Upload a PDF.</strong> Drag and drop or click to select the file containing the tables you
                  need.
                </li>
                <li>
                  <strong>AI detects all tables.</strong> Google Document AI&#39;s Form Parser scans every page and
                  identifies table structures — rows, columns, headers, and cell boundaries.
                </li>
                <li>
                  <strong>Download a formatted Excel file.</strong> Each detected table gets its own sheet in the output
                  workbook. Headers are styled and bold, columns are auto-sized, and data types are preserved where
                  possible.
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                The entire process takes seconds, even for multi-page documents. You upload one file and get back one
                clean Excel workbook ready to use.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4">What Types of Tables Work Best</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Table Extraction works with a wide range of document types, but certain formats produce the best
                results:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                <li>
                  <strong>Financial statements.</strong> Balance sheets, income statements, and cash flow tables with
                  clearly defined rows and columns extract with high accuracy.
                </li>
                <li>
                  <strong>Invoices with line items.</strong> Product descriptions, quantities, unit prices, and totals
                  are parsed into separate columns automatically.
                </li>
                <li>
                  <strong>Scientific data tables.</strong> Research papers with experimental results, statistical
                  summaries, and measurement data work well, especially when tables have visible borders.
                </li>
                <li>
                  <strong>Government reports with statistics.</strong> Census data, economic indicators, and regulatory
                  filings that use structured tabular formats are ideal candidates.
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                The general rule: if a table has clear structure with distinct rows and columns, the AI will detect and
                extract it accurately. Heavily merged cells or unconventional layouts may require manual cleanup.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4">Pricing and Limits</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Table Extraction is available on our Business and Enterprise plans:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                <li>
                  <strong>Business plan ($13.99/month):</strong> 200 pages per month. Each page in your uploaded PDF
                  counts as one page toward your monthly limit, regardless of how many tables appear on that page.
                </li>
                <li>
                  <strong>Enterprise plan ($49.99/month):</strong> 2,000 pages per month. Designed for teams that
                  process large volumes of financial, legal, or scientific documents regularly.
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                Your page count resets on the first day of each billing cycle. You can track your remaining pages from
                your dashboard at any time.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4">Tips for Best Results</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Follow these tips to get the cleanest possible output from Table Extraction:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                <li>
                  <strong>Use OCR first if working with scanned PDFs.</strong> If your PDF was created from a scan or
                  photograph, run it through our{" "}
                  <Link href="/ocr-scanner" className="text-orange-600 font-semibold hover:underline">
                    OCR Scanner
                  </Link>{" "}
                  before extracting tables. This converts the image-based text into machine-readable text, which
                  dramatically improves detection accuracy.
                </li>
                <li>
                  <strong>Clean, bordered tables extract most accurately.</strong> Tables with visible gridlines and
                  clear header rows produce the best results. If your source document has borderless tables with only
                  whitespace alignment, results may vary.
                </li>
                <li>
                  <strong>Multi-page tables are supported.</strong> If a single table spans across multiple pages, the
                  AI will detect the continuation and attempt to combine the data into one cohesive table in the output
                  spreadsheet.
                </li>
              </ul>

              <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4">Try It Now</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Head over to the{" "}
                <Link href="/table-extraction" className="text-orange-600 font-semibold hover:underline">
                  Table Extraction tool
                </Link>{" "}
                to try it with your own PDF. If you are not yet on a Business or Enterprise plan, visit our{" "}
                <Link href="/pricing" className="text-orange-600 font-semibold hover:underline">
                  pricing page
                </Link>{" "}
                to upgrade.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Stop copying tables by hand. Let the AI do the work — and get back to the analysis that actually
                matters.
              </p>

              {/* Back to Blog */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:underline"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

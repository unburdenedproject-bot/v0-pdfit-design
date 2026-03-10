import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileSpreadsheet, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Excel to PDF Cutting Off Columns? Here's How to Fix It | OmnisPDF",
  description:
    "Fix cut-off columns when converting Excel to PDF. Learn 5 proven solutions: adjust print area, use landscape mode, scale to fit, reduce margins, and split wide sheets.",
  keywords: "excel to pdf cut off columns, excel to pdf columns missing, excel pdf formatting issues, fix excel to pdf layout",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why does my Excel to PDF cut off columns on the right side?",
      "acceptedAnswer": { "@type": "Answer", "text": "Excel defaults to portrait orientation with standard margins, which only fits about 8-10 columns. If your spreadsheet is wider, the extra columns spill onto a second page or get cut off entirely. Switching to landscape mode or adjusting the print area fixes this." }
    },
    {
      "@type": "Question",
      "name": "How do I set the print area in Excel to avoid cut-off columns?",
      "acceptedAnswer": { "@type": "Answer", "text": "Select all the cells you want in your PDF, then go to Page Layout → Print Area → Set Print Area. This tells Excel (and any converter) exactly which columns and rows to include. Always set a print area before converting." }
    },
    {
      "@type": "Question",
      "name": "Does landscape mode fix cut-off columns in Excel to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Often yes. Landscape gives you about 40% more horizontal space. Go to Page Layout → Orientation → Landscape. This alone fixes the issue for most spreadsheets with 10-15 columns." }
    },
    {
      "@type": "Question",
      "name": "What does 'Fit All Columns on One Page' do in Excel?",
      "acceptedAnswer": { "@type": "Answer", "text": "It scales your entire spreadsheet width to fit on a single page. Go to Page Layout → Scale to Fit → Width: 1 page. Excel shrinks all columns proportionally. If the text becomes too small to read, you may need to split the sheet instead." }
    },
    {
      "@type": "Question",
      "name": "Can I split a wide Excel sheet into multiple PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Convert your Excel file to PDF using OmnisPDF, then use the Split PDF tool to separate pages. Alternatively, in Excel, manually split your data into two sheets (columns A-J on Sheet 1, columns K-T on Sheet 2) before converting." }
    },
    {
      "@type": "Question",
      "name": "Why do my columns look fine in Excel but get cut off in the PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Excel's normal view doesn't show page boundaries. Switch to Page Layout view (View → Page Layout) or use Print Preview (Ctrl+P) to see exactly where page breaks fall. This reveals which columns will be cut off before you convert." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Fix Cut-Off Columns When Converting Excel to PDF",
  "description": "Prevent columns from being cut off when converting Excel spreadsheets to PDF.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Set print area and switch to landscape",
      "text": "In Excel, select all the cells you need, go to Page Layout → Print Area → Set Print Area. Then switch to Landscape orientation under Page Layout → Orientation."
    },
    {
      "@type": "HowToStep",
      "name": "Scale to fit one page width",
      "text": "Go to Page Layout → Scale to Fit and set Width to 1 page. This shrinks all columns to fit on a single page width while keeping rows flowing to additional pages."
    },
    {
      "@type": "HowToStep",
      "name": "Convert to PDF",
      "text": "Upload your prepared Excel file to OmnisPDF's Excel to PDF tool and convert. All columns will now appear correctly in the PDF."
    }
  ]
}

export default function ExcelToPDFCutOffColumnsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Excel to PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Excel to PDF Cutting Off Columns? Here's How to Fix It</h1>
              <p className="text-xl text-slate-300">
                You converted your spreadsheet to PDF and half the columns are missing. This is one of the most common Excel-to-PDF problems — and it's easy to fix once you know where to look.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileSpreadsheet className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Fixed your layout? Convert your spreadsheet now.</p>
            </div>
            <Link
              href="/excel-to-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Excel to PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why columns get cut off */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Columns Get Cut Off in the First Place</h2>
              <p className="text-slate-600 mb-4">
                When Excel converts a spreadsheet to PDF, it treats each page like a sheet of paper. If your data is wider than the page, the extra columns get pushed to a new page — or worse, silently dropped.
              </p>
              <p className="text-slate-600 mb-4">
                The root causes are almost always one of these:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Page width is too narrow.</strong> Portrait mode on letter-size paper only fits about 8-10 standard columns. If you have 15 or 20 columns, the rest overflow.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>No print area is set.</strong> Without a defined print area, Excel guesses which cells to include. It often includes empty columns or misses the columns you need.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Hidden margins are eating space.</strong> Default margins in Excel (0.7" on each side) steal 1.4 inches of usable width. That's enough to lose 2-3 columns.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Column widths are uneven.</strong> One extra-wide column (like a "Notes" or "Description" column) can push everything else off the page.</span>
                </li>
              </ul>
            </section>

            {/* 5 Fixes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">5 Fixes for Cut-Off Columns</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Fix 1: Set Your Print Area</h3>
                  <p className="text-slate-600 mb-2">
                    This is the single most important step and fixes the problem in most cases.
                  </p>
                  <ol className="space-y-1 text-slate-700 list-decimal list-inside ml-2">
                    <li>Select all the cells you want in your PDF (click and drag from the first cell to the last)</li>
                    <li>Go to <strong>Page Layout → Print Area → Set Print Area</strong></li>
                    <li>Check with <strong>Print Preview (Ctrl+P)</strong> to verify all columns appear</li>
                  </ol>
                  <p className="text-slate-600 mt-2">
                    Once the print area is set, convert using <Link href="/excel-to-pdf" className="text-orange-600 hover:underline">OmnisPDF's Excel to PDF tool</Link>.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Fix 2: Switch to Landscape Mode</h3>
                  <p className="text-slate-600 mb-2">
                    Landscape orientation gives you roughly 40% more horizontal space — often enough to fit those extra columns.
                  </p>
                  <p className="text-slate-700">
                    Go to <strong>Page Layout → Orientation → Landscape</strong>. For most spreadsheets with 10-15 columns, this alone solves the problem.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Fix 3: Scale to Fit One Page Width</h3>
                  <p className="text-slate-600 mb-2">
                    This is Excel's built-in scaling feature that shrinks everything proportionally to fit on one page width.
                  </p>
                  <p className="text-slate-700 mb-2">
                    Go to <strong>Page Layout → Scale to Fit → Width: 1 page</strong>. Leave Height set to "Automatic" so rows can flow to multiple pages.
                  </p>
                  <p className="text-slate-600">
                    <strong>Warning:</strong> If you have 30+ columns, the text might become too small to read. In that case, use Fix 5 instead. Read more about optimal scaling in our <Link href="/learn/excel-to-pdf-fit-to-page" className="text-orange-600 hover:underline">fit-to-page guide</Link>.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Fix 4: Reduce Margins</h3>
                  <p className="text-slate-600 mb-2">
                    Default margins are generous. Narrowing them can give you enough room for 2-3 extra columns.
                  </p>
                  <p className="text-slate-700">
                    Go to <strong>Page Layout → Margins → Narrow</strong> (sets 0.25" margins). For maximum space, choose <strong>Custom Margins</strong> and set all margins to 0.2".
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Fix 5: Split Wide Sheets Into Sections</h3>
                  <p className="text-slate-600 mb-2">
                    If your spreadsheet is genuinely wide (20+ columns), sometimes the best approach is to split it into two logical sections.
                  </p>
                  <p className="text-slate-700 mb-2">
                    Copy columns A-J to one sheet and columns K-T to another. Convert the entire workbook — each sheet becomes a separate page in the PDF.
                  </p>
                  <p className="text-slate-600">
                    After converting, if you need to reorganize the pages, use <Link href="/split-pdf" className="text-orange-600 hover:underline">Split PDF</Link> to separate or reorder them.
                  </p>
                </div>
              </div>
            </section>

            {/* Quick checklist */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Pre-Conversion Checklist</h2>
              <p className="text-slate-600 mb-4">
                Run through this checklist before converting any Excel file to PDF:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Print area is set</strong> to include all needed columns and rows</li>
                <li>✓ <strong>Orientation is correct</strong> — landscape for wide sheets, portrait for tall ones</li>
                <li>✓ <strong>No "###" cells</strong> — all columns are wide enough to display their data</li>
                <li>✓ <strong>Print Preview confirms</strong> all columns are visible (Ctrl+P or Cmd+P)</li>
                <li>✓ <strong>Scale is readable</strong> — text isn't shrunk below 8pt font</li>
              </ul>
            </section>

            {/* Still having issues */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Still Having Issues?</h2>
              <p className="text-slate-600 mb-4">
                If columns are still getting cut off after trying these fixes, the issue might be with the conversion tool you're using. Desktop Excel handles page breaks differently than online converters.
              </p>
              <p className="text-slate-600">
                Try converting with <Link href="/excel-to-pdf" className="text-orange-600 hover:underline">OmnisPDF's Excel to PDF tool</Link> — it uses server-side rendering that closely matches Excel's own output. You can also try our general <Link href="/office-to-pdf" className="text-orange-600 hover:underline">Office to PDF converter</Link> for additional format support.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Convert Without Cut-Off Columns?</h2>
            <p className="text-slate-300 mb-6">Set your print area, switch to landscape, and convert with OmnisPDF — all columns included.</p>
            <Link
              href="/excel-to-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <FileSpreadsheet className="h-5 w-5" /> Excel to PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "Convert Excel to PDF Online (XLSX to PDF)", href: "/learn/convert-excel-to-pdf" },
                { title: "Excel to PDF Fit to Page: Best Print Settings Before Converting", href: "/learn/excel-to-pdf-fit-to-page" },
                { title: "Export Monthly Reports: Excel to PDF for Email + Sharing", href: "/learn/excel-report-to-pdf" },
                { title: "Convert Excel to PDF on Mac (Quick, Reliable Workflow)", href: "/learn/excel-to-pdf-on-mac" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
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
                { q: "Why does my Excel to PDF cut off columns on the right side?", a: "Excel defaults to portrait orientation with standard margins, which only fits about 8-10 columns. If your spreadsheet is wider, the extra columns spill onto a second page or get cut off entirely. Switching to landscape mode or adjusting the print area fixes this." },
                { q: "How do I set the print area in Excel to avoid cut-off columns?", a: "Select all the cells you want in your PDF, then go to Page Layout → Print Area → Set Print Area. This tells Excel (and any converter) exactly which columns and rows to include. Always set a print area before converting." },
                { q: "Does landscape mode fix cut-off columns in Excel to PDF?", a: "Often yes. Landscape gives you about 40% more horizontal space. Go to Page Layout → Orientation → Landscape. This alone fixes the issue for most spreadsheets with 10-15 columns." },
                { q: "What does 'Fit All Columns on One Page' do in Excel?", a: "It scales your entire spreadsheet width to fit on a single page. Go to Page Layout → Scale to Fit → Width: 1 page. Excel shrinks all columns proportionally. If the text becomes too small to read, you may need to split the sheet instead." },
                { q: "Can I split a wide Excel sheet into multiple PDFs?", a: "Yes. Convert your Excel file to PDF using OmnisPDF, then use the Split PDF tool to separate pages. Alternatively, in Excel, manually split your data into two sheets before converting." },
                { q: "Why do my columns look fine in Excel but get cut off in the PDF?", a: "Excel's normal view doesn't show page boundaries. Switch to Page Layout view (View → Page Layout) or use Print Preview (Ctrl+P) to see exactly where page breaks fall. This reveals which columns will be cut off before you convert." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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

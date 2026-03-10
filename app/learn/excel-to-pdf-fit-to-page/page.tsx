import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileSpreadsheet, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Excel to PDF Fit to Page: Best Print Settings Before Converting | OmnisPDF",
  description:
    "Learn the best Excel print settings to fit your spreadsheet on one page before converting to PDF. Covers scaling, margins, orientation, print area, and print preview tips.",
  keywords: "excel to pdf fit to page, excel fit to page, excel print settings pdf, scale excel to fit page, excel page layout pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I fit an Excel spreadsheet to one page for PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Go to Page Layout → Scale to Fit. Set Width to 1 page and Height to 1 page. This scales your entire spreadsheet to fit on a single page. If the text becomes too small, set only Width to 1 page and leave Height on Automatic." }
    },
    {
      "@type": "Question",
      "name": "What's the difference between 'Fit Sheet on One Page' and 'Fit All Columns on One Page'?",
      "acceptedAnswer": { "@type": "Answer", "text": "Fit Sheet on One Page shrinks everything (width and height) to fit on a single page — good for small datasets. Fit All Columns on One Page only constrains the width, letting rows flow to additional pages — better for long spreadsheets." }
    },
    {
      "@type": "Question",
      "name": "Should I use landscape or portrait for Excel to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use landscape for spreadsheets with many columns (wider than 8 columns). Use portrait for spreadsheets with many rows but few columns. Check Print Preview to see which looks better before converting." }
    },
    {
      "@type": "Question",
      "name": "What margins should I use for Excel to PDF conversion?",
      "acceptedAnswer": { "@type": "Answer", "text": "Narrow margins (0.25 inches) give the most space for data. For very wide spreadsheets, use Custom Margins and set all sides to 0.2 inches. Default margins (0.7 inches) waste too much page space for most spreadsheets." }
    },
    {
      "@type": "Question",
      "name": "How do I check if my Excel fits on the page before converting to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use Print Preview (Ctrl+P on Windows, Cmd+P on Mac) or switch to Page Layout view (View → Page Layout). Both show exactly how your spreadsheet will look when printed or converted to PDF, including page breaks." }
    },
    {
      "@type": "Question",
      "name": "Why does my Excel shrink to tiny text when I use Fit to Page?",
      "acceptedAnswer": { "@type": "Answer", "text": "Fit to Page scales everything proportionally. If your spreadsheet has too many columns or rows, the text gets very small. Fix this by fitting only columns to one page (not rows), reducing the number of columns, or splitting the sheet into sections." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Set Up Excel Print Settings for PDF Conversion",
  "description": "Configure your Excel spreadsheet to fit perfectly on a page before converting to PDF.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Set print area and orientation",
      "text": "Select your data range, go to Page Layout → Print Area → Set Print Area. Then choose Landscape or Portrait under Page Layout → Orientation based on your data shape."
    },
    {
      "@type": "HowToStep",
      "name": "Configure scaling and margins",
      "text": "Go to Page Layout → Scale to Fit and set Width to 1 page. Set margins to Narrow (Page Layout → Margins → Narrow). Check Print Preview to verify the text is still readable."
    },
    {
      "@type": "HowToStep",
      "name": "Convert to PDF",
      "text": "Upload your prepared Excel file to OmnisPDF's Excel to PDF tool. The converter respects your print settings, producing a clean, properly-fitted PDF."
    }
  ]
}

export default function ExcelToPDFFitToPagePage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Excel to PDF Fit to Page: Best Print Settings Before Converting</h1>
              <p className="text-xl text-slate-300">
                Getting your Excel spreadsheet to fit neatly on a PDF page is all about the print settings. Here's a complete walkthrough of the Page Layout tab, scaling options, and margin tweaks that make the difference.
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
              <p className="text-slate-700 font-semibold">Settings ready? Convert your spreadsheet now.</p>
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

            {/* Why settings matter */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Print Settings Matter for PDF Conversion</h2>
              <p className="text-slate-600 mb-4">
                When you convert an Excel file to PDF — whether through Excel's built-in export or an online tool like <Link href="/excel-to-pdf" className="text-orange-600 hover:underline">OmnisPDF</Link> — the converter uses your print settings to determine how the data maps to pages.
              </p>
              <p className="text-slate-600 mb-4">
                If you haven't configured these settings, Excel uses defaults: portrait orientation, standard margins, no scaling. For anything beyond a simple 5-column table, these defaults produce PDFs with cut-off columns, awkward page breaks, or wasted whitespace.
              </p>
              <p className="text-slate-600">
                Taking 60 seconds to adjust your Page Layout settings before converting saves you from re-doing the conversion multiple times.
              </p>
            </section>

            {/* Page Layout walkthrough */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Page Layout Tab Walkthrough</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Step 1: Set your print area",
                    desc: "Select all cells that should appear in the PDF. Go to Page Layout → Print Area → Set Print Area. This is the foundation — skip this and the converter has to guess which cells matter.",
                  },
                  {
                    title: "Step 2: Choose orientation",
                    desc: "Page Layout → Orientation. Use Landscape for spreadsheets wider than 8 columns. Use Portrait for narrow, tall datasets (2-5 columns with many rows). When in doubt, try landscape first.",
                  },
                  {
                    title: "Step 3: Set scaling",
                    desc: "Page Layout → Scale to Fit. Set Width to '1 page' to ensure all columns fit. Leave Height on 'Automatic' so rows can flow naturally to additional pages. Avoid setting both Width and Height to 1 page unless your data is small.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Scaling options explained */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Understanding Excel's Scaling Options</h2>
              <p className="text-slate-600 mb-4">
                Excel offers three scaling approaches in the Print dialog. Here's what each does and when to use it:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Option</th>
                      <th className="text-left py-3 px-4 font-bold">What It Does</th>
                      <th className="text-left py-3 px-4 font-bold">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Fit Sheet on One Page</td>
                      <td className="py-3 px-4">Shrinks entire sheet (width + height) to one page</td>
                      <td className="py-3 px-4">Small tables under 30 rows</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">Fit All Columns on One Page</td>
                      <td className="py-3 px-4">Constrains width to one page, rows flow freely</td>
                      <td className="py-3 px-4">Most spreadsheets (recommended)</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Fit All Rows on One Page</td>
                      <td className="py-3 px-4">Constrains height to one page, columns flow freely</td>
                      <td className="py-3 px-4">Rarely useful — only for narrow, tall data</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4">
                For most users, <strong>"Fit All Columns on One Page"</strong> is the right choice. It keeps text readable while ensuring no columns are cut off.
              </p>
            </section>

            {/* Margins */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Margin Settings That Give You More Space</h2>
              <p className="text-slate-600 mb-4">
                Default margins (0.7" on each side) waste valuable page space. For data-heavy spreadsheets, narrower margins make a big difference:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Narrow preset</strong> (Page Layout → Margins → Narrow) — sets 0.25" margins on all sides. Good enough for most cases.</li>
                <li>✓ <strong>Custom margins</strong> (Page Layout → Margins → Custom Margins) — set 0.2" on all sides for maximum data space. Make sure to also set header/footer margins to 0.15".</li>
                <li>✓ <strong>Center on page</strong> — in the Custom Margins dialog, check "Horizontally" under Center on page. This prevents the data from hugging the left edge.</li>
              </ul>
            </section>

            {/* Landscape vs portrait */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Landscape vs. Portrait: When to Use Which</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use Landscape When:</h3>
                  <ul className="space-y-1 text-slate-600">
                    <li>• Your spreadsheet has more than 8 columns</li>
                    <li>• You have wide columns (descriptions, addresses, long text)</li>
                    <li>• The data is wider than it is tall</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use Portrait When:</h3>
                  <ul className="space-y-1 text-slate-600">
                    <li>• Your spreadsheet has 2-6 narrow columns</li>
                    <li>• The data is a long list (many rows, few columns)</li>
                    <li>• You're printing a single-column report or log</li>
                  </ul>
                </div>
              </div>
              <p className="text-slate-600 mt-4">
                Not sure? Try both in Print Preview and see which produces cleaner output. You can always check before converting with <Link href="/excel-to-pdf" className="text-orange-600 hover:underline">OmnisPDF</Link>.
              </p>
            </section>

            {/* Print preview */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Always Check Print Preview Before Converting</h2>
              <p className="text-slate-600 mb-4">
                Print Preview is the final checkpoint. It shows you <em>exactly</em> what the PDF will look like — page breaks, margins, scaling, and all.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Windows:</strong> Press Ctrl+P to open Print Preview</li>
                <li>✓ <strong>Mac:</strong> Press Cmd+P to open Print Preview</li>
                <li>✓ <strong>Alternative:</strong> Go to View → Page Layout for an in-spreadsheet preview</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Look for: all columns visible, text readable (not tiny), no data cut off at the edges, and sensible page breaks. If something looks wrong, adjust your settings and check again before uploading to the converter.
              </p>
            </section>

            {/* Compress after converting */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">After Converting: Compress If Needed</h2>
              <p className="text-slate-600">
                Large spreadsheets with charts, images, or many pages can produce big PDFs. If you need to email the file or upload it to a portal with size limits, use <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> after converting. For email specifically, try <Link href="/compress-pdf-for-email" className="text-orange-600 hover:underline">Compress PDF for Email</Link> which is optimized for attachment size limits.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Convert Your Spreadsheet?</h2>
            <p className="text-slate-300 mb-6">Your print settings are dialed in. Upload and convert — free, no signup required.</p>
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
                { title: "Excel to PDF Cutting Off Columns? Here's How to Fix It", href: "/learn/excel-to-pdf-cut-off-columns" },
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
                { q: "How do I fit an Excel spreadsheet to one page for PDF?", a: "Go to Page Layout → Scale to Fit. Set Width to 1 page and Height to 1 page. This scales your entire spreadsheet to fit on a single page. If the text becomes too small, set only Width to 1 page and leave Height on Automatic." },
                { q: "What's the difference between 'Fit Sheet on One Page' and 'Fit All Columns on One Page'?", a: "Fit Sheet on One Page shrinks everything (width and height) to fit on a single page — good for small datasets. Fit All Columns on One Page only constrains the width, letting rows flow to additional pages — better for long spreadsheets." },
                { q: "Should I use landscape or portrait for Excel to PDF?", a: "Use landscape for spreadsheets with many columns (wider than 8 columns). Use portrait for spreadsheets with many rows but few columns. Check Print Preview to see which looks better before converting." },
                { q: "What margins should I use for Excel to PDF conversion?", a: "Narrow margins (0.25 inches) give the most space for data. For very wide spreadsheets, use Custom Margins and set all sides to 0.2 inches. Default margins (0.7 inches) waste too much page space for most spreadsheets." },
                { q: "How do I check if my Excel fits on the page before converting to PDF?", a: "Use Print Preview (Ctrl+P on Windows, Cmd+P on Mac) or switch to Page Layout view (View → Page Layout). Both show exactly how your spreadsheet will look when printed or converted to PDF, including page breaks." },
                { q: "Why does my Excel shrink to tiny text when I use Fit to Page?", a: "Fit to Page scales everything proportionally. If your spreadsheet has too many columns or rows, the text gets very small. Fix this by fitting only columns to one page (not rows), reducing the number of columns, or splitting the sheet into sections." },
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

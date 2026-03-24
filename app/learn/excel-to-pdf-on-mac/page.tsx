import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileSpreadsheet, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convert Excel to PDF on Mac (Quick, Reliable Workflow) | PDF.it",
  description:
    "Learn how to convert Excel to PDF on Mac using Excel for Mac, Preview, and PDF.it online. Covers Mac-specific issues like font differences, print drivers, and consistent output.",
  keywords: "excel to pdf mac, convert excel to pdf on mac, xlsx to pdf mac, excel for mac pdf, mac spreadsheet to pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert Excel to PDF on a Mac?",
      "acceptedAnswer": { "@type": "Answer", "text": "You have three options: (1) In Excel for Mac, go to File → Save As and choose PDF. (2) Use the Print dialog (Cmd+P) and click 'Save as PDF' in the bottom-left corner. (3) Upload your Excel file to PDF.it's online converter for the most consistent results." }
    },
    {
      "@type": "Question",
      "name": "Why does my Excel PDF look different on Mac than on Windows?",
      "acceptedAnswer": { "@type": "Answer", "text": "Mac and Windows use different font rendering engines and print drivers. Fonts may appear slightly larger or smaller, causing column widths to shift. Using an online converter like PDF.it produces consistent results regardless of your operating system." }
    },
    {
      "@type": "Question",
      "name": "Does Excel for Mac have the same print settings as Windows?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most settings are the same (print area, orientation, margins, scaling) but the menu locations differ slightly. On Mac, Page Layout settings are under the Page Layout tab, and Print Titles are under File → Page Setup. The Scale to Fit options work the same way." }
    },
    {
      "@type": "Question",
      "name": "Can I convert Excel to PDF on Mac without Microsoft Excel installed?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Upload your .xlsx file to PDF.it's Excel to PDF tool — it works in Safari, Chrome, or any Mac browser. No software installation needed. Alternatively, you can open .xlsx files in Numbers (Apple's free spreadsheet app) and export to PDF from there." }
    },
    {
      "@type": "Question",
      "name": "Why are my fonts different in the Mac-generated PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Mac doesn't include some Windows-standard fonts (like Calibri prior to macOS Ventura). If Excel for Mac substitutes a font, the column widths and spacing change. To avoid this, use cross-platform fonts (Arial, Times New Roman, Verdana) or convert online with PDF.it." }
    },
    {
      "@type": "Question",
      "name": "How do I get consistent Excel-to-PDF output across Mac and Windows?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use an online converter like PDF.it. It processes the file server-side with consistent fonts and rendering, so the output looks the same whether you upload from Mac, Windows, or a phone." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert Excel to PDF on Mac",
  "description": "Convert your Excel spreadsheet to PDF on a Mac using the most reliable method.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Prepare your spreadsheet",
      "text": "Open your Excel file on Mac. Set the print area (Page Layout → Print Area → Set Print Area), choose orientation, and adjust margins. Use Print Preview (Cmd+P) to verify the layout."
    },
    {
      "@type": "HowToStep",
      "name": "Upload to PDF.it",
      "text": "Open Safari or Chrome, go to PDF.it's Excel to PDF tool, and upload your .xlsx file. This ensures consistent output regardless of your Mac's fonts or print drivers."
    },
    {
      "@type": "HowToStep",
      "name": "Download your PDF",
      "text": "Click Convert and download the PDF. The file opens in Preview by default. If you need to reduce the size, use PDF.it's Compress PDF tool."
    }
  ]
}

export default function ExcelToPDFOnMacPage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Excel to PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert Excel to PDF on Mac (Quick, Reliable Workflow)</h1>
              <p className="text-xl text-slate-300">
                Converting Excel to PDF on a Mac can produce unexpected results — different fonts, shifted columns, odd page breaks. Here's how to get clean, consistent PDFs every time.
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
              <p className="text-slate-700 font-semibold">Skip the Mac quirks — convert online for consistent results.</p>
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

            {/* Three methods */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">3 Ways to Convert Excel to PDF on Mac</h2>
              <p className="text-slate-600 mb-4">
                Mac users have multiple options for converting Excel to PDF. Here's when to use each:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Method 1: Excel for Mac "Save As PDF"</h3>
                  <p className="text-slate-600 mb-2">
                    If you have Microsoft Excel installed on your Mac:
                  </p>
                  <ol className="space-y-1 text-slate-700 list-decimal list-inside ml-2">
                    <li>Open your spreadsheet in Excel for Mac</li>
                    <li>Go to <strong>File → Save As</strong></li>
                    <li>Choose <strong>PDF</strong> from the file format dropdown</li>
                    <li>Click Save</li>
                  </ol>
                  <p className="text-slate-600 mt-2">
                    <strong>Pros:</strong> Quick, no upload needed. <strong>Cons:</strong> Results may differ from Windows Excel due to font and rendering differences.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Method 2: Mac Print Dialog ("Save as PDF")</h3>
                  <p className="text-slate-600 mb-2">
                    This works from any Mac app, including Numbers:
                  </p>
                  <ol className="space-y-1 text-slate-700 list-decimal list-inside ml-2">
                    <li>Open the file and press <strong>Cmd+P</strong></li>
                    <li>Click the <strong>PDF</strong> dropdown in the bottom-left corner</li>
                    <li>Select <strong>"Save as PDF"</strong></li>
                    <li>Choose your save location and click Save</li>
                  </ol>
                  <p className="text-slate-600 mt-2">
                    <strong>Pros:</strong> Works with any spreadsheet app (Numbers, Google Sheets in browser). <strong>Cons:</strong> Uses Mac's print driver, which may produce different output than Windows.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Method 3: PDF.it Online Converter (Recommended)</h3>
                  <p className="text-slate-600 mb-2">
                    For the most consistent results:
                  </p>
                  <ol className="space-y-1 text-slate-700 list-decimal list-inside ml-2">
                    <li>Open Safari or Chrome and go to <Link href="/excel-to-pdf" className="text-orange-600 hover:underline">PDF.it's Excel to PDF tool</Link></li>
                    <li>Upload your .xlsx file</li>
                    <li>Click Convert and download the PDF</li>
                  </ol>
                  <p className="text-slate-600 mt-2">
                    <strong>Pros:</strong> Consistent output across all platforms, no software needed. <strong>Cons:</strong> Requires internet connection.
                  </p>
                </div>
              </div>
            </section>

            {/* Common Mac issues */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Common Mac-Specific Issues (And How to Fix Them)</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Font Substitution</h3>
                  <p className="text-slate-600 mb-2">
                    If your Excel file was created on Windows using fonts like Calibri or Cambria, Mac may substitute different fonts. This changes column widths and can push data off the page.
                  </p>
                  <p className="text-slate-700">
                    <strong>Fix:</strong> Use cross-platform fonts (Arial, Times New Roman, Verdana, Tahoma) in your spreadsheet. Or convert online with <Link href="/excel-to-pdf" className="text-orange-600 hover:underline">PDF.it</Link>, which uses its own font library for consistent rendering.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Different Page Breaks</h3>
                  <p className="text-slate-600 mb-2">
                    Page breaks in Excel for Mac don't always match page breaks in Excel for Windows. A spreadsheet that fits on one page on Windows might spill to two pages on Mac.
                  </p>
                  <p className="text-slate-700">
                    <strong>Fix:</strong> Always check Print Preview (Cmd+P) on Mac before converting. Adjust the print area or scaling if the layout looks different than expected.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Missing Features in Excel for Mac</h3>
                  <p className="text-slate-600 mb-2">
                    Some advanced Excel features behave differently on Mac — particularly complex charts, pivot tables with custom formatting, and VBA macros.
                  </p>
                  <p className="text-slate-700">
                    <strong>Fix:</strong> For complex spreadsheets, upload to <Link href="/office-to-pdf" className="text-orange-600 hover:underline">PDF.it's Office to PDF converter</Link>, which handles these features server-side.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Blurry Charts or Images</h3>
                  <p className="text-slate-600 mb-2">
                    Mac's Retina display can cause confusion — charts may look sharp on screen but appear blurry in the PDF if the print resolution is set too low.
                  </p>
                  <p className="text-slate-700">
                    <strong>Fix:</strong> When using the Print dialog method, make sure your print quality is set to "Best" or "High Quality." Online converters like PDF.it default to high-quality output.
                  </p>
                </div>
              </div>
            </section>

            {/* Tips for consistent output */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips for Consistent Output Across Mac and Windows</h2>
              <p className="text-slate-600 mb-4">
                If you collaborate with Windows users and need the PDF to look identical regardless of who creates it, follow these guidelines:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Use standard fonts</strong> — Arial, Times New Roman, and Verdana are safe choices that render identically on both platforms.</li>
                <li>✓ <strong>Set explicit column widths</strong> — Don't rely on auto-fit, which calculates differently on each platform. Set fixed pixel widths for important columns.</li>
                <li>✓ <strong>Define the print area</strong> — This removes ambiguity about which cells to include in the PDF.</li>
                <li>✓ <strong>Use an online converter</strong> — <Link href="/excel-to-pdf" className="text-orange-600 hover:underline">PDF.it</Link> processes files server-side, producing identical output regardless of whether you upload from Mac, Windows, or mobile.</li>
                <li>✓ <strong>Test with Print Preview</strong> — Always check Cmd+P before converting locally to catch layout issues early.</li>
              </ul>
            </section>

            {/* No Excel installed */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Don't Have Excel Installed on Your Mac?</h2>
              <p className="text-slate-600 mb-4">
                You don't need Microsoft Excel to convert .xlsx files to PDF. Here are your options:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>PDF.it online</strong> — Upload the .xlsx file directly at <Link href="/excel-to-pdf" className="text-orange-600 hover:underline">Excel to PDF</Link>. No software needed.</li>
                <li>✓ <strong>Apple Numbers</strong> — Free on every Mac. Open the .xlsx file in Numbers, then go to File → Export To → PDF.</li>
                <li>✓ <strong>Google Sheets</strong> — Upload to Google Drive, open in Sheets, then File → Download → PDF. Formatting may shift slightly.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                For the most reliable output, the online converter is the best option — it doesn't depend on your Mac's installed apps or fonts.
              </p>
            </section>

            {/* After converting */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">After Converting: Compress or Share</h2>
              <p className="text-slate-600">
                Once you have your PDF, you might want to reduce its size before emailing. Use <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> to shrink the file. PDFs downloaded on Mac open automatically in Preview, where you can quickly verify the output before sending.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Convert on Your Mac?</h2>
            <p className="text-slate-300 mb-6">Upload your Excel file and get a consistent, professional PDF — works in Safari, Chrome, or any browser.</p>
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
                { title: "Excel to PDF Fit to Page: Best Print Settings Before Converting", href: "/learn/excel-to-pdf-fit-to-page" },
                { title: "Export Monthly Reports: Excel to PDF for Email + Sharing", href: "/learn/excel-report-to-pdf" },
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
                { q: "How do I convert Excel to PDF on a Mac?", a: "You have three options: (1) In Excel for Mac, go to File → Save As and choose PDF. (2) Use the Print dialog (Cmd+P) and click 'Save as PDF' in the bottom-left corner. (3) Upload your Excel file to PDF.it's online converter for the most consistent results." },
                { q: "Why does my Excel PDF look different on Mac than on Windows?", a: "Mac and Windows use different font rendering engines and print drivers. Fonts may appear slightly larger or smaller, causing column widths to shift. Using an online converter like PDF.it produces consistent results regardless of your operating system." },
                { q: "Does Excel for Mac have the same print settings as Windows?", a: "Most settings are the same (print area, orientation, margins, scaling) but the menu locations differ slightly. On Mac, Page Layout settings are under the Page Layout tab, and Print Titles are under File → Page Setup." },
                { q: "Can I convert Excel to PDF on Mac without Microsoft Excel installed?", a: "Yes. Upload your .xlsx file to PDF.it's Excel to PDF tool — it works in Safari, Chrome, or any Mac browser. No software installation needed. You can also use Apple Numbers (free) to open and export .xlsx files." },
                { q: "Why are my fonts different in the Mac-generated PDF?", a: "Mac doesn't include some Windows-standard fonts (like Calibri prior to macOS Ventura). If Excel for Mac substitutes a font, the column widths and spacing change. Use cross-platform fonts (Arial, Times New Roman) or convert online with PDF.it." },
                { q: "How do I get consistent Excel-to-PDF output across Mac and Windows?", a: "Use an online converter like PDF.it. It processes the file server-side with consistent fonts and rendering, so the output looks the same whether you upload from Mac, Windows, or a phone." },
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

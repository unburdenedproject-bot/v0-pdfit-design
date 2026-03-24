import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileSpreadsheet, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convert Excel to PDF Online (XLSX to PDF) | PDF.it",
  description:
    "Learn how to convert Excel spreadsheets to PDF online. Step-by-step guide covering formatting, multi-sheet handling, and tips for sharing, printing, and archiving.",
  keywords: "convert excel to pdf online, xlsx to pdf, excel to pdf, spreadsheet to pdf, convert spreadsheet to pdf online",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert Excel to PDF online for free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your Excel file (.xlsx or .xls) to PDF.it's Excel to PDF tool, click Convert, and download your PDF. No signup required for your first 3 files." }
    },
    {
      "@type": "Question",
      "name": "Will my Excel formatting be preserved in the PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it preserves cell borders, colors, bold/italic text, number formatting, and merged cells. For best results, set your print area and page layout in Excel before converting." }
    },
    {
      "@type": "Question",
      "name": "Can I convert a multi-sheet Excel file to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. When you convert a multi-sheet Excel workbook, each sheet becomes a separate section in the PDF. All sheets are included by default." }
    },
    {
      "@type": "Question",
      "name": "What Excel file formats are supported?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it supports .xlsx (modern Excel), .xls (legacy Excel), .csv (comma-separated values), and .ods (OpenDocument Spreadsheet). All are converted to clean, formatted PDFs." }
    },
    {
      "@type": "Question",
      "name": "Why should I convert Excel to PDF instead of sharing the .xlsx file?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDFs look the same on every device, can't be accidentally edited, and don't require Excel to open. They're better for sharing reports, invoices, and any spreadsheet where the layout needs to stay fixed." }
    },
    {
      "@type": "Question",
      "name": "Can I convert Excel to PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in any mobile browser. Upload your Excel file, convert it, and download the PDF directly on iPhone or Android — no app needed." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert Excel to PDF Online",
  "description": "Convert your Excel spreadsheet to a PDF in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your Excel file",
      "text": "Go to PDF.it's Excel to PDF tool and upload your .xlsx, .xls, or .csv file by clicking or dragging it into the upload area."
    },
    {
      "@type": "HowToStep",
      "name": "Convert to PDF",
      "text": "Click Convert. PDF.it processes your spreadsheet and generates a PDF that preserves your formatting, cell borders, and colors."
    },
    {
      "@type": "HowToStep",
      "name": "Download your PDF",
      "text": "Download the converted PDF. If the file is large, use PDF.it's Compress PDF tool to reduce the size before sharing."
    }
  ]
}

export default function ConvertExcelToPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert Excel to PDF Online (XLSX to PDF)</h1>
              <p className="text-xl text-slate-300">
                Need to share a spreadsheet without worrying about broken formatting or accidental edits? Here's how to convert Excel to PDF in seconds — free, online, no software needed.
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
              <p className="text-slate-700 font-semibold">Ready to convert? Skip the guide and go straight to the tool.</p>
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

            {/* Why convert */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Convert Excel to PDF?</h2>
              <p className="text-slate-600 mb-4">
                Excel files are great for working with data, but they're not ideal for sharing. Here's why converting to PDF is the smarter choice:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Universal viewing.</strong> Not everyone has Excel installed. PDFs open on any device, any operating system, any browser — no special software required.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Locked formatting.</strong> Spreadsheets look different depending on the viewer's screen size, Excel version, and installed fonts. PDFs look identical everywhere.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>No accidental edits.</strong> When you send a .xlsx file, anyone can change the numbers. A PDF keeps your data safe from unintentional modifications.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Print-ready.</strong> PDFs are designed for printing. What you see on screen is exactly what comes out of the printer — margins, page breaks, and all.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Archiving.</strong> PDFs are the standard format for long-term document storage. Financial reports, invoices, and records are best archived as PDFs.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Convert Excel to PDF (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your Excel file",
                    desc: "Go to the Excel to PDF tool and drag your .xlsx, .xls, or .csv file into the upload area. Files up to 25MB are free — Pro users can upload up to 200MB.",
                  },
                  {
                    title: "Click Convert",
                    desc: "PDF.it processes your spreadsheet server-side, preserving cell formatting, borders, colors, merged cells, and number formats. Multi-sheet workbooks are fully supported.",
                  },
                  {
                    title: "Download your PDF",
                    desc: "Once the conversion finishes, download your PDF. If you need to reduce the file size for email, use the Compress PDF tool. If you're combining multiple spreadsheets, use Merge PDF.",
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

            {/* Preserving formatting */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">How to Preserve Cell Formatting in Your PDF</h2>
              <p className="text-slate-600 mb-4">
                The most common complaint about Excel-to-PDF conversion is formatting issues — cut-off columns, tiny text, or missing data. Here's how to avoid that:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Set a print area</strong> in Excel before converting. Go to Page Layout → Print Area → Set Print Area. This tells the converter exactly which cells to include.</li>
                <li>✓ <strong>Use Page Layout view</strong> (View → Page Layout) to see exactly how your spreadsheet will look on a printed page before converting.</li>
                <li>✓ <strong>Switch to Landscape</strong> for wide spreadsheets. Page Layout → Orientation → Landscape prevents columns from getting cut off.</li>
                <li>✓ <strong>Adjust column widths</strong> so all data is visible. If a column shows "###" instead of numbers, widen it before converting.</li>
                <li>✓ <strong>Use "Fit to Page"</strong> scaling. Go to Page Layout → Scale to Fit and set Width to 1 page. This shrinks the spreadsheet to fit on one page width.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Having trouble with columns getting cut off? Read our detailed guide on <Link href="/learn/excel-to-pdf-cut-off-columns" className="text-orange-600 hover:underline">fixing cut-off columns in Excel to PDF</Link>.
              </p>
            </section>

            {/* Multi-sheet handling */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Converting Multi-Sheet Workbooks</h2>
              <p className="text-slate-600 mb-4">
                If your Excel file has multiple sheets (tabs), PDF.it converts all of them into a single PDF. Each sheet starts on a new page, maintaining the tab order from your workbook.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Tip:</strong> If you only need specific sheets in the PDF, either delete the extra sheets before uploading or hide them (right-click the tab → Hide). Hidden sheets are excluded from the conversion.
              </p>
              <p className="text-slate-600">
                After converting, if you need to extract just certain pages, use <Link href="/split-pdf" className="text-orange-600 hover:underline">Split PDF</Link> to pull out the sheets you need. Or if you're combining PDFs from multiple workbooks, use <Link href="/merge-pdf" className="text-orange-600 hover:underline">Merge PDF</Link>.
              </p>
            </section>

            {/* Common use cases */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Common Use Cases for Excel to PDF</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Invoices and Quotes</h3>
                  <p className="text-slate-600">
                    Create your invoice template in Excel, fill in the details, and convert to PDF before sending to clients. The PDF ensures your formatting stays intact and the client can't accidentally change the numbers.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Financial Reports</h3>
                  <p className="text-slate-600">
                    Monthly or quarterly reports with charts and tables convert cleanly to PDF. Set your print area to include only the summary data, convert, and share with stakeholders. Need to compress the result? Use <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Data Exports for Archiving</h3>
                  <p className="text-slate-600">
                    For long-term record keeping, PDF is more reliable than .xlsx. Convert your annual data exports to PDF and store them knowing they'll open correctly in 10 or 20 years. You can also <Link href="/protect-pdf" className="text-orange-600 hover:underline">password-protect</Link> sensitive files.
                  </p>
                </div>
              </div>
            </section>

            {/* Other Office formats */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Need to Convert Other Office Files?</h2>
              <p className="text-slate-600">
                PDF.it handles all major Office formats. Use <Link href="/office-to-pdf" className="text-orange-600 hover:underline">Office to PDF</Link> to convert Word documents, PowerPoint presentations, and other formats. Or go directly to the specific tool you need — the conversion is fast and formatting is preserved across all file types.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Convert Your Excel File?</h2>
            <p className="text-slate-300 mb-6">Upload your spreadsheet and get a clean PDF in seconds — free, no signup required.</p>
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
                { title: "Excel to PDF Cutting Off Columns? Here's How to Fix It", href: "/learn/excel-to-pdf-cut-off-columns" },
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "How do I convert Excel to PDF online for free?", a: "Upload your Excel file (.xlsx or .xls) to PDF.it's Excel to PDF tool, click Convert, and download your PDF. No signup required for your first 3 files." },
                { q: "Will my Excel formatting be preserved in the PDF?", a: "Yes. PDF.it preserves cell borders, colors, bold/italic text, number formatting, and merged cells. For best results, set your print area and page layout in Excel before converting." },
                { q: "Can I convert a multi-sheet Excel file to PDF?", a: "Yes. When you convert a multi-sheet Excel workbook, each sheet becomes a separate section in the PDF. All sheets are included by default." },
                { q: "What Excel file formats are supported?", a: "PDF.it supports .xlsx (modern Excel), .xls (legacy Excel), .csv (comma-separated values), and .ods (OpenDocument Spreadsheet). All are converted to clean, formatted PDFs." },
                { q: "Why should I convert Excel to PDF instead of sharing the .xlsx file?", a: "PDFs look the same on every device, can't be accidentally edited, and don't require Excel to open. They're better for sharing reports, invoices, and any spreadsheet where the layout needs to stay fixed." },
                { q: "Can I convert Excel to PDF on my phone?", a: "Yes. PDF.it works in any mobile browser. Upload your Excel file, convert it, and download the PDF directly on iPhone or Android — no app needed." },
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

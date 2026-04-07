import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileSpreadsheet, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Export Monthly Reports: Excel to PDF for Email + Sharing | PDF.it",
  description:
    "Learn how to convert Excel reports to PDF for email and sharing. Covers setting print areas once, compressing for email, adding headers and footers, and creating professional presentations.",
  keywords: "export excel to pdf for email, excel report to pdf, monthly report pdf, excel to pdf email attachment, share excel as pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert an Excel report to PDF for email?",
      "acceptedAnswer": { "@type": "Answer", "text": "Set your print area in Excel to include only the report data, adjust the page layout, then upload to PDF.it's Excel to PDF tool. After conversion, use Compress PDF to get the file under email attachment limits (usually 20-25MB)." }
    },
    {
      "@type": "Question",
      "name": "How do I set up my Excel report so I can convert it every month without re-doing settings?",
      "acceptedAnswer": { "@type": "Answer", "text": "Set your print area, page orientation, margins, and scaling once in your Excel template. Save the file. Each month, update the data and convert — all your print settings are preserved in the saved file." }
    },
    {
      "@type": "Question",
      "name": "Can I add headers and footers to my Excel report before converting to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Go to Insert → Header & Footer in Excel. Add your company name, report title, date, or page numbers. These appear on every page of the converted PDF." }
    },
    {
      "@type": "Question",
      "name": "How do I compress my Excel-to-PDF report for email?",
      "acceptedAnswer": { "@type": "Answer", "text": "After converting to PDF, upload the file to PDF.it's Compress PDF tool. Choose Medium compression for a good balance of quality and size. For strict limits, use Compress PDF for Email which optimizes specifically for email attachments." }
    },
    {
      "@type": "Question",
      "name": "Should I password-protect my Excel report PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "If the report contains sensitive financial data, yes. Use PDF.it's Protect PDF tool to add a password after converting. This prevents unauthorized access if the email is forwarded or the file is shared accidentally." }
    },
    {
      "@type": "Question",
      "name": "Can I merge multiple Excel reports into one PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Convert each Excel report to PDF separately, then use PDF.it's Merge PDF tool to combine them into a single document. This is great for quarterly packages that include multiple monthly reports." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Export an Excel Report to PDF for Email",
  "description": "Convert your monthly Excel report to a professional PDF ready for email in 3 steps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Prepare your Excel report",
      "text": "Set the print area to include only report data, add headers/footers (Insert → Header & Footer), and configure page layout (landscape, narrow margins, fit columns to one page)."
    },
    {
      "@type": "HowToStep",
      "name": "Convert to PDF",
      "text": "Upload your prepared Excel file to PDF.it's Excel to PDF tool and click Convert. The PDF preserves your formatting, headers, footers, and page layout settings."
    },
    {
      "@type": "HowToStep",
      "name": "Compress and send",
      "text": "If the PDF is too large for email, use PDF.it's Compress PDF tool to reduce the file size. Then attach to your email and send."
    }
  ]
}

export default function ExcelReportToPDFPage() {
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
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Excel to PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Export Monthly Reports: Excel to PDF for Email + Sharing</h1>
              <p className="text-xl text-slate-300">
                You build the same report every month in Excel. Here's how to set it up once, convert to a professional PDF, compress it for email, and send it — every time, in under a minute.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <FileSpreadsheet className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Have a report ready? Convert it to PDF now.</p>
            </div>
            <Link
              href="/excel-to-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Excel to PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* The recurring report workflow */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">The Recurring Report Workflow</h2>
              <p className="text-slate-600 mb-4">
                If you send the same type of report every month (sales, expenses, KPIs, project status), you shouldn't be re-configuring your print settings each time. Here's the efficient workflow:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Set it up once.</strong> Configure your print area, orientation, margins, scaling, and headers/footers in your Excel template. Save the file.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Update data monthly.</strong> Each month, open the template, update the numbers, and save. All your print settings are preserved.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Convert to PDF.</strong> Upload to <Link href="/excel-to-pdf" className="text-[#14D8C4] hover:underline">PDF.it's Excel to PDF tool</Link>. The converter respects your saved print settings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Compress and send.</strong> If the PDF is over the email limit, <Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">compress it</Link> before attaching.</span>
                </li>
              </ul>
            </section>

            {/* Setting print area once */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Setting Up Your Print Area (Do This Once)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Select your report range",
                    desc: "Click the first cell of your report (usually A1) and drag to the last cell with data. If your report has a title row and a totals row, include both. Don't include scratch columns or helper rows used for calculations.",
                  },
                  {
                    title: "Set the print area",
                    desc: "Go to Page Layout → Print Area → Set Print Area. A dotted line appears around your selected range. This is now the only data that will appear in the PDF — everything outside is excluded.",
                  },
                  {
                    title: "Configure page settings",
                    desc: "Set Orientation to Landscape (for wide reports) or Portrait (for narrow ones). Set Margins to Narrow. Set Scale to Fit → Width: 1 page. These settings save with the file.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
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

            {/* Professional presentation tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Professional Presentation Tips</h2>
              <p className="text-slate-600 mb-4">
                A well-formatted PDF report looks more professional than a raw Excel file. Here's how to make your reports stand out:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Add Headers and Footers</h3>
                  <p className="text-slate-600">
                    Go to <strong>Insert → Header & Footer</strong> in Excel. Add your company name in the header, and the date plus page numbers in the footer. These appear on every page of the PDF, giving it a polished, professional look.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Include a Report Title Row</h3>
                  <p className="text-slate-600">
                    Make row 1 a title row with the report name and date range (e.g., "Monthly Sales Report — February 2026"). Use a larger font size and bold formatting. This makes the PDF self-explanatory when someone opens it months later.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use Consistent Formatting</h3>
                  <p className="text-slate-600">
                    Apply number formatting to all data cells (currency, percentages, dates). Use alternating row colors for readability. Bold your totals row. These details convert cleanly to PDF and make the report easier to scan.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Freeze the Column Headers</h3>
                  <p className="text-slate-600">
                    In Excel, go to <strong>Page Layout → Print Titles → Rows to repeat at top</strong> and select your header row. This prints the column headers at the top of every page in the PDF — essential for multi-page reports.
                  </p>
                </div>
              </div>
            </section>

            {/* Compressing for email */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Compressing Your Report for Email</h2>
              <p className="text-slate-600 mb-4">
                Most email providers cap attachments at 20-25MB. If your report PDF is larger (common with charts or images), compress it before sending:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ Use <Link href="/compress-pdf-for-email" className="text-[#14D8C4] hover:underline">Compress PDF for Email</Link> — optimized specifically for email attachment limits</li>
                <li>✓ Medium compression keeps charts and tables readable while significantly reducing file size</li>
                <li>✓ A typical 5MB report with charts compresses to 1-2MB — well under the email limit</li>
              </ul>
              <p className="text-slate-600 mt-4">
                For very large reports, consider splitting the PDF into sections using <Link href="/split-pdf" className="text-[#14D8C4] hover:underline">Split PDF</Link> and sending as multiple attachments.
              </p>
            </section>

            {/* Protecting sensitive reports */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Protecting Sensitive Financial Reports</h2>
              <p className="text-slate-600 mb-4">
                Financial reports often contain sensitive data — revenue numbers, salary information, profit margins. Before emailing these, consider adding protection:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Password protection</strong> — Use <Link href="/protect-pdf" className="text-[#14D8C4] hover:underline">Protect PDF</Link> to add a password. Share the password separately (text message, phone call, or a different email).</li>
                <li>✓ <strong>Read-only access</strong> — Restrict editing permissions so recipients can view but not modify the PDF.</li>
                <li>✓ <strong>Watermarking</strong> — Add a "Confidential" watermark to mark the document's sensitivity level.</li>
              </ul>
            </section>

            {/* Combining multiple reports */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Combining Multiple Reports Into One PDF</h2>
              <p className="text-slate-600">
                Need to send a quarterly package with three monthly reports? Convert each Excel file to PDF separately, then use <Link href="/merge-pdf" className="text-[#14D8C4] hover:underline">Merge PDF</Link> to combine them into a single document. You can also add a cover page or a table of contents as the first page. This creates a professional, consolidated package that's easier for recipients to manage than multiple attachments.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Convert Your Report?</h2>
            <p className="text-slate-300 mb-6">Upload your Excel report and get a professional PDF in seconds — free, no signup required.</p>
            <Link
              href="/excel-to-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <FileSpreadsheet className="h-5 w-5" /> Excel to PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "Convert Excel to PDF Online (XLSX to PDF)", href: "/learn/convert-excel-to-pdf" },
                { title: "Excel to PDF Cutting Off Columns? Here's How to Fix It", href: "/learn/excel-to-pdf-cut-off-columns" },
                { title: "Excel to PDF Fit to Page: Best Print Settings Before Converting", href: "/learn/excel-to-pdf-fit-to-page" },
                { title: "Convert Excel to PDF on Mac (Quick, Reliable Workflow)", href: "/learn/excel-to-pdf-on-mac" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
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
                { q: "How do I convert an Excel report to PDF for email?", a: "Set your print area in Excel to include only the report data, adjust the page layout, then upload to PDF.it's Excel to PDF tool. After conversion, use Compress PDF to get the file under email attachment limits (usually 20-25MB)." },
                { q: "How do I set up my Excel report so I can convert it every month without re-doing settings?", a: "Set your print area, page orientation, margins, and scaling once in your Excel template. Save the file. Each month, update the data and convert — all your print settings are preserved in the saved file." },
                { q: "Can I add headers and footers to my Excel report before converting to PDF?", a: "Yes. Go to Insert → Header & Footer in Excel. Add your company name, report title, date, or page numbers. These appear on every page of the converted PDF." },
                { q: "How do I compress my Excel-to-PDF report for email?", a: "After converting to PDF, upload the file to PDF.it's Compress PDF tool. Choose Medium compression for a good balance of quality and size. For strict limits, use Compress PDF for Email which optimizes specifically for email attachments." },
                { q: "Should I password-protect my Excel report PDF?", a: "If the report contains sensitive financial data, yes. Use PDF.it's Protect PDF tool to add a password after converting. This prevents unauthorized access if the email is forwarded or the file is shared accidentally." },
                { q: "Can I merge multiple Excel reports into one PDF?", a: "Yes. Convert each Excel report to PDF separately, then use PDF.it's Merge PDF tool to combine them into a single document. This is great for quarterly packages that include multiple monthly reports." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}">
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

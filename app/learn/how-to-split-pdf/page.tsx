import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Scissors, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Split a PDF Online (Extract Pages or Ranges) | OmnisPDF",
  description:
    "Learn how to split a PDF into separate files by page ranges. Step-by-step guide to extracting chapters, removing pages, and organizing documents — free, online, no software needed.",
  keywords: "split pdf online, split pdf by pages, extract pages from pdf, split pdf into parts, how to split a pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I split a PDF online for free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to OmnisPDF, enter the page ranges you want to extract (e.g. 1-5, 8, 10-15), click Split, and download your new files. No signup required for your first 3 files." }
    },
    {
      "@type": "Question",
      "name": "Can I split a PDF into specific page ranges?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can enter any combination of page ranges and individual pages. For example, '1-3, 7, 10-15' will create a file with pages 1 through 3, page 7, and pages 10 through 15." }
    },
    {
      "@type": "Question",
      "name": "Does splitting a PDF change the original file?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Splitting creates new files from the pages you select. Your original PDF stays exactly as it was — nothing is modified or deleted." }
    },
    {
      "@type": "Question",
      "name": "Can I split a PDF into individual pages?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Enter each page number separated by commas (e.g. 1, 2, 3, 4) or use OmnisPDF's 'split every page' option to create a separate file for each page automatically." }
    },
    {
      "@type": "Question",
      "name": "How do I split a large PDF for email?",
      "acceptedAnswer": { "@type": "Answer", "text": "Divide your PDF into smaller parts that fit under your email provider's attachment limit (usually 20-25MB). Split the PDF into 2-3 page ranges, then compress each part separately if needed." }
    },
    {
      "@type": "Question",
      "name": "Is it possible to split a password-protected PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "You need to unlock the PDF first. Use OmnisPDF's Unlock PDF tool to remove the password, then split the unlocked file into the pages or ranges you need." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Split a PDF Online",
  "description": "Split your PDF into separate files by page ranges in 3 simple steps using OmnisPDF.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your PDF",
      "text": "Go to OmnisPDF's Split PDF tool and upload your file by clicking or dragging it into the upload area."
    },
    {
      "@type": "HowToStep",
      "name": "Enter page ranges",
      "text": "Type the pages or ranges you want to extract — for example, 1-5, 8, 10-15. Each range creates a separate output file."
    },
    {
      "@type": "HowToStep",
      "name": "Download your split files",
      "text": "Click Split PDF and download the resulting files. If you split into multiple parts, you can download them individually or as a ZIP."
    }
  ]
}

export default function HowToSplitPDFPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Split PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">How to Split a PDF Online (Extract Pages or Ranges)</h1>
              <p className="text-xl text-slate-300">
                Need to pull out a few pages from a large PDF? Here's how to split any PDF into smaller files by page range — in seconds, no software required.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Scissors className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Ready to split? Skip the guide and go straight to the tool.</p>
            </div>
            <Link
              href="/split-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Split PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* When to split */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">When Should You Split a PDF?</h2>
              <p className="text-slate-600 mb-4">
                Splitting is the right move whenever you need to break a large document into smaller, more manageable pieces. Common reasons:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Extracting a chapter or section.</strong> You have a 200-page report but only need pages 45-60. Split those out instead of sending the whole file.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Removing unwanted pages.</strong> A contract has 15 pages of appendices you don't need. Split out just the pages that matter.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Breaking a file for email.</strong> Your PDF is too large for email attachments. Split it into 2-3 smaller files and send them separately.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Organizing multi-document PDFs.</strong> Someone scanned invoices, receipts, and forms into one file. Split them into individual documents for filing.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Split a PDF (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your PDF",
                    desc: "Go to the Split PDF tool and drag your file into the upload area, or click to browse. Files up to 25MB are free — Pro users can upload up to 200MB.",
                  },
                  {
                    title: "Enter the page ranges you want",
                    desc: "Type the pages or ranges to extract. Use commas to separate ranges: 1-5, 8, 10-15. Each group becomes a separate file. You can also choose to split every page into its own file.",
                  },
                  {
                    title: "Download your split files",
                    desc: "Click Split PDF. Your new files are ready to download individually, or grab them all at once as a ZIP. The original PDF is not modified.",
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

            {/* Page range syntax */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Understanding Page Range Syntax</h2>
              <p className="text-slate-600 mb-4">
                OmnisPDF uses a simple syntax to define which pages you want. Here are common examples:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">You Type</th>
                      <th className="text-left py-3 px-4 font-bold">What You Get</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">1-5</td>
                      <td className="py-3 px-4">One file with pages 1 through 5</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">1-5, 10-15</td>
                      <td className="py-3 px-4">Two files: one with pages 1-5, another with pages 10-15</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">3, 7, 12</td>
                      <td className="py-3 px-4">Three separate single-page files</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">1-3, 8, 10-15</td>
                      <td className="py-3 px-4">Three files: pages 1-3, page 8 alone, and pages 10-15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-500 text-sm mt-3">
                Tip: Check your PDF's page count before entering ranges. If your PDF has 20 pages and you type "1-25," the tool will extract pages 1-20.
              </p>
            </section>

            {/* What happens to the original */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What Happens to the Original PDF?</h2>
              <p className="text-slate-600 mb-4">
                Nothing. Splitting is a non-destructive operation. OmnisPDF creates <strong>new files</strong> from the pages you select — your original PDF is never modified, renamed, or deleted. Think of it like photocopying specific pages from a book. The book stays intact.
              </p>
              <p className="text-slate-600">
                If you later realize you need those pages back together, use <Link href="/merge-pdf" className="text-orange-600 hover:underline">Merge PDF</Link> to combine files into one document.
              </p>
            </section>

            {/* Tips for common use cases */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Splitting Tips for Common Scenarios</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Extracting a Chapter from a Textbook</h3>
                  <p className="text-slate-600">
                    Open the PDF, note the starting and ending page numbers for the chapter you need, then enter that range (e.g., "45-72"). If the PDF has a table of contents, use those page numbers as your guide.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Splitting for Email Attachments</h3>
                  <p className="text-slate-600">
                    Divide the total page count into roughly equal parts. For a 30-page PDF, try "1-10, 11-20, 21-30" to create three smaller files. After splitting, <Link href="/compress-pdf" className="text-orange-600 hover:underline">compress each part</Link> to reduce the file size even further. See our full guide on <Link href="/learn/split-pdf-for-email" className="text-orange-600 hover:underline">splitting PDFs for email</Link>.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Removing Unwanted Pages</h3>
                  <p className="text-slate-600">
                    Instead of selecting the pages to remove, select the pages you want to <strong>keep</strong>. For example, if a 20-page PDF has junk on pages 8-12, enter "1-7, 13-20" to get a clean file without those pages.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Pulling Out a Single Form or Receipt</h3>
                  <p className="text-slate-600">
                    If you need just one page — say page 4 — type "4" and you'll get a single-page PDF. Learn more in our guide on <Link href="/learn/extract-pages-from-pdf" className="text-orange-600 hover:underline">extracting pages from a PDF</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* Split vs Extract */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Split vs. Extract: What's the Difference?</h2>
              <p className="text-slate-600 mb-4">
                They're closely related, but think of it this way:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Split</strong> divides a PDF into multiple parts (multiple output files from one input).</li>
                <li>✓ <strong>Extract</strong> pulls specific pages into a single new file (one output file with selected pages).</li>
              </ul>
              <p className="text-slate-600 mt-4">
                OmnisPDF's <Link href="/split-pdf" className="text-orange-600 hover:underline">Split PDF</Link> tool handles both — enter one range for extraction, or multiple ranges to split into parts. You can also use the dedicated <Link href="/extract-pages-from-pdf" className="text-orange-600 hover:underline">Extract Pages</Link> tool for a simpler interface focused on pulling out specific pages.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Split Your PDF?</h2>
            <p className="text-slate-300 mb-6">Upload your file and extract the pages you need in seconds — free, no signup required.</p>
            <Link
              href="/split-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Scissors className="h-5 w-5" /> Split PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "Extract Pages from a PDF (Save Selected Pages as a New PDF)", href: "/learn/extract-pages-from-pdf" },
                { title: "Split a PDF for Email Upload Limits (Best Workflow)", href: "/learn/split-pdf-for-email" },
                { title: "Split PDF into Individual Pages (When You Need Separate Files)", href: "/learn/split-pdf-into-individual-pages" },
                { title: "Split a PDF on iPhone/Android (Extract Pages Quickly)", href: "/learn/split-pdf-on-mobile" },
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
                { q: "How do I split a PDF online for free?", a: "Upload your PDF to OmnisPDF, enter the page ranges you want to extract (e.g. 1-5, 8, 10-15), click Split, and download your new files. No signup required for your first 3 files." },
                { q: "Can I split a PDF into specific page ranges?", a: "Yes. You can enter any combination of page ranges and individual pages. For example, '1-3, 7, 10-15' will create a file with pages 1 through 3, page 7, and pages 10 through 15." },
                { q: "Does splitting a PDF change the original file?", a: "No. Splitting creates new files from the pages you select. Your original PDF stays exactly as it was — nothing is modified or deleted." },
                { q: "Can I split a PDF into individual pages?", a: "Yes. Enter each page number separated by commas (e.g. 1, 2, 3, 4) or use OmnisPDF's 'split every page' option to create a separate file for each page automatically." },
                { q: "How do I split a large PDF for email?", a: "Divide your PDF into smaller parts that fit under your email provider's attachment limit (usually 20-25MB). Split the PDF into 2-3 page ranges, then compress each part separately if needed." },
                { q: "Is it possible to split a password-protected PDF?", a: "You need to unlock the PDF first. Use OmnisPDF's Unlock PDF tool to remove the password, then split the unlocked file into the pages or ranges you need." },
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

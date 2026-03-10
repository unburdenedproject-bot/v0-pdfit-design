import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileOutput, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Extract Pages from a PDF (Save Selected Pages as a New PDF) | OmnisPDF",
  description:
    "Learn how to extract specific pages from a PDF and save them as a new file. Pull out receipts, chapters, forms, or any combination of pages — free, online, no software needed.",
  keywords: "extract pages from pdf, save specific pages pdf, pull pages from pdf, extract pdf pages online, select pages from pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I extract specific pages from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to OmnisPDF, select or type the page numbers you want to extract, click Extract, and download a new PDF containing only those pages. The original file is not modified." }
    },
    {
      "@type": "Question",
      "name": "Can I extract non-consecutive pages from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can pick any combination of pages — for example, pages 2, 5, and 11. They don't need to be in order or next to each other. The extracted pages will appear in the order you specify." }
    },
    {
      "@type": "Question",
      "name": "What's the difference between extracting and splitting a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Extracting pulls selected pages into one new file. Splitting divides a PDF into multiple separate files. Use extract when you need a single output; use split when you need multiple output files." }
    },
    {
      "@type": "Question",
      "name": "Can I extract pages from a scanned PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scanned PDFs work the same way — each scanned page is a page in the PDF. Select the page numbers you need and extract them. The image quality of each page is preserved exactly." }
    },
    {
      "@type": "Question",
      "name": "Is the extracted PDF smaller than the original?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usually yes. The extracted file only contains the pages you selected, so it's smaller than the full document. If you need it even smaller, compress the extracted file using the Compress PDF tool." }
    },
    {
      "@type": "Question",
      "name": "Can I extract pages from a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OmnisPDF works in any mobile browser. Open the Extract Pages tool in Safari or Chrome, upload your PDF, select the pages, and download the result — no app needed." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Extract Pages from a PDF",
  "description": "Pull specific pages out of a PDF and save them as a new file in 3 simple steps using OmnisPDF.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your PDF",
      "text": "Go to OmnisPDF's Extract Pages tool and upload your file by clicking or dragging it into the upload area."
    },
    {
      "@type": "HowToStep",
      "name": "Select the pages to extract",
      "text": "Click on the pages you want or type page numbers (e.g., 2, 5, 8-12). Selected pages are highlighted so you can see exactly what you're extracting."
    },
    {
      "@type": "HowToStep",
      "name": "Download your new PDF",
      "text": "Click Extract Pages and download the new file containing only your selected pages. The original PDF remains unchanged."
    }
  ]
}

export default function ExtractPagesFromPDFPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Extract Pages</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extract Pages from a PDF (Save Selected Pages as a New PDF)</h1>
              <p className="text-xl text-slate-300">
                Need just a few pages from a large document? Here's how to pull out exactly the pages you need and save them as a new, clean PDF file.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileOutput className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Ready to extract pages? Skip the guide and go straight to the tool.</p>
            </div>
            <Link
              href="/split-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Extract Pages Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why extract pages */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Would You Extract Pages from a PDF?</h2>
              <p className="text-slate-600 mb-4">
                PDFs often contain more than you need. Instead of sending a 50-page file when someone only needs 3 pages, extract those pages into a new document. Common use cases:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Pulling a receipt or invoice.</strong> Your bank statement PDF has 12 months of data — extract just the month you need for your expense report.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Grabbing a chapter from a textbook.</strong> Study just the chapter you need without carrying around the entire book on your device.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Isolating a form.</strong> A government packet has 20 pages but only one is the actual form you need to fill out and return.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Creating a custom handout.</strong> Pull pages from different sections of a training manual to create a focused reference document.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Extract Pages (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your PDF",
                    desc: "Go to the Split PDF tool and drag your file into the upload area, or click to browse. Files up to 25MB are free — Pro users can upload up to 200MB.",
                  },
                  {
                    title: "Select the pages you want",
                    desc: "Type the page numbers you need — for example, 2, 5, 8-12. You can mix individual pages and ranges. The pages will appear in your output file in the order you specify.",
                  },
                  {
                    title: "Download your new PDF",
                    desc: "Click Extract and download the new file containing only your selected pages. The original PDF is not changed in any way.",
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

            {/* Selecting non-consecutive pages */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Extracting Non-Consecutive Pages</h2>
              <p className="text-slate-600 mb-4">
                You don't have to extract pages that are next to each other. OmnisPDF lets you pick any combination. For example:
              </p>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 space-y-3">
                <p className="text-slate-700"><strong>Scenario:</strong> You need pages 3, 7, and 15-18 from a 25-page contract.</p>
                <p className="text-slate-700"><strong>Type:</strong> <span className="font-mono bg-white px-2 py-1 rounded border text-orange-600">3, 7, 15-18</span></p>
                <p className="text-slate-700"><strong>Result:</strong> One new PDF with 6 pages — page 3, page 7, and pages 15 through 18, in that order.</p>
              </div>
              <p className="text-slate-600 mt-4">
                This is especially useful for pulling out specific clauses from legal documents, selected questions from an exam, or particular slides from a presentation PDF.
              </p>
            </section>

            {/* Extracted file is a new file */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Your Original File Stays Intact</h2>
              <p className="text-slate-600 mb-4">
                Extracting pages doesn't modify your source PDF. The tool creates a brand-new file with copies of the pages you selected. Your original document keeps all its pages, formatting, and metadata exactly as they were.
              </p>
              <p className="text-slate-600">
                If you want to combine extracted pages with pages from other PDFs, use <Link href="/merge-pdf" className="text-orange-600 hover:underline">Merge PDF</Link> to bring them together into a single document.
              </p>
            </section>

            {/* After extracting */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What to Do After Extracting Pages</h2>
              <p className="text-slate-600 mb-4">
                Once you have your extracted PDF, you might want to refine it further:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Compress it</strong> to reduce file size using <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> — especially helpful if the extracted pages contain scanned images.</li>
                <li>✓ <strong>Merge it</strong> with other documents using <Link href="/merge-pdf" className="text-orange-600 hover:underline">Merge PDF</Link> to build a custom document from multiple sources.</li>
                <li>✓ <strong>Convert it</strong> to another format — for example, <Link href="/pdf-to-word" className="text-orange-600 hover:underline">PDF to Word</Link> if you need to edit the content.</li>
              </ul>
            </section>

            {/* Tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips for Better Page Extraction</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Check the Page Count First</h3>
                  <p className="text-slate-600">
                    Open your PDF and note the total number of pages. Most PDF viewers show this in the toolbar (e.g., "Page 1 of 47"). This helps you enter the correct page numbers when extracting.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use the Table of Contents</h3>
                  <p className="text-slate-600">
                    If the PDF has a table of contents or bookmarks, use those page numbers as your guide. Remember that the printed page numbers in the document might differ from the actual PDF page numbers if the file has a cover page or Roman-numeral preface.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Extract and Compress for Sharing</h3>
                  <p className="text-slate-600">
                    After extracting pages, run the new file through <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> before emailing it. This ensures the file is as small as possible for the recipient.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Extract Pages?</h2>
            <p className="text-slate-300 mb-6">Upload your PDF and pull out the pages you need in seconds — free, no signup required.</p>
            <Link
              href="/split-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <FileOutput className="h-5 w-5" /> Extract Pages Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Split a PDF Online (Extract Pages or Ranges)", href: "/learn/how-to-split-pdf" },
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
                { q: "How do I extract specific pages from a PDF?", a: "Upload your PDF to OmnisPDF, select or type the page numbers you want to extract, click Extract, and download a new PDF containing only those pages. The original file is not modified." },
                { q: "Can I extract non-consecutive pages from a PDF?", a: "Yes. You can pick any combination of pages — for example, pages 2, 5, and 11. They don't need to be in order or next to each other. The extracted pages will appear in the order you specify." },
                { q: "What's the difference between extracting and splitting a PDF?", a: "Extracting pulls selected pages into one new file. Splitting divides a PDF into multiple separate files. Use extract when you need a single output; use split when you need multiple output files." },
                { q: "Can I extract pages from a scanned PDF?", a: "Yes. Scanned PDFs work the same way — each scanned page is a page in the PDF. Select the page numbers you need and extract them. The image quality of each page is preserved exactly." },
                { q: "Is the extracted PDF smaller than the original?", a: "Usually yes. The extracted file only contains the pages you selected, so it's smaller than the full document. If you need it even smaller, compress the extracted file using the Compress PDF tool." },
                { q: "Can I extract pages from a PDF on my phone?", a: "Yes. OmnisPDF works in any mobile browser. Open the Extract Pages tool in Safari or Chrome, upload your PDF, select the pages, and download the result — no app needed." },
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

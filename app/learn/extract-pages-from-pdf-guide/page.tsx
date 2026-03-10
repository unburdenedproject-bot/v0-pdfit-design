import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Scissors, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Extract Pages from a PDF (Keep Only What You Need) | OmnisPDF",
  description:
    "Learn how to extract specific pages from a PDF and save them as a new file. Step-by-step guide for pulling pages from large documents — free, no software needed.",
  keywords: "extract pages from pdf, pull pages from pdf, get specific pages from pdf, extract pdf pages online",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I extract specific pages from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to OmnisPDF's Split PDF tool, select the page numbers you want to keep, and download a new PDF containing only those pages. No software installation needed." }
    },
    {
      "@type": "Question",
      "name": "Can I extract pages from a PDF without losing quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OmnisPDF extracts pages without re-encoding them, so your text, images, and formatting remain identical to the original document." }
    },
    {
      "@type": "Question",
      "name": "Is it free to extract pages from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OmnisPDF lets you extract pages for free with files up to 25MB. You get 3 free operations without signing up, and 10 per day with a free account." }
    },
    {
      "@type": "Question",
      "name": "Can I extract non-consecutive pages from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can select any combination of pages — for example pages 1, 3, 7, and 12 — and OmnisPDF will combine them into a single new PDF in the order you specified." }
    },
    {
      "@type": "Question",
      "name": "How do I extract pages from a password-protected PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "First, use OmnisPDF's Unlock PDF tool to remove the password protection, then use the Split PDF tool to extract the pages you need." }
    },
    {
      "@type": "Question",
      "name": "Can I extract pages from a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OmnisPDF works in any mobile browser. Upload your PDF, select the pages to extract, and download the result — no app needed." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Extract Pages from a PDF",
  "description": "Pull specific pages from a PDF and save them as a new file in 3 simple steps using OmnisPDF.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your PDF",
      "text": "Go to OmnisPDF's Split PDF tool and upload the document you want to extract pages from by clicking or dragging it into the upload area."
    },
    {
      "@type": "HowToStep",
      "name": "Select the pages to extract",
      "text": "Enter the page numbers or page ranges you want to keep. You can select individual pages like 1, 3, 5 or ranges like 1-5, 10-15."
    },
    {
      "@type": "HowToStep",
      "name": "Download your extracted pages",
      "text": "Click Split PDF and download your new document containing only the pages you selected. The original file remains unchanged."
    }
  ]
}

export default function ExtractPagesFromPDFGuidePage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">How to Extract Pages from a PDF (Keep Only What You Need)</h1>
              <p className="text-xl text-slate-300">
                Got a 50-page report but only need pages 3, 7, and 12? Here's how to pull exactly the pages you need from any PDF — without installing software or losing quality.
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
              <p className="text-slate-700 font-semibold">Ready to extract pages? Skip the guide and go straight to the tool.</p>
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

            {/* Why extract pages */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Extract Pages from a PDF?</h2>
              <p className="text-slate-600 mb-4">
                Most PDFs contain more content than you actually need. Extracting specific pages lets you create a smaller, focused document. Common reasons include:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Submitting specific sections.</strong> An employer asks for page 2 of your transcript, not the entire 15-page document. Extract just that page.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Sharing relevant chapters.</strong> Pull out chapter 4 from a textbook PDF to share with a study group, instead of sending the whole book.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Removing sensitive content.</strong> Extract only the pages you want to share and leave behind pages with private or confidential information.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Reducing file size for email.</strong> Instead of compressing a large PDF, extract only the pages you need so the file is small enough to <Link href="/compress-pdf-for-email" className="text-orange-600 hover:underline">email as an attachment</Link>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Creating handouts.</strong> Pull a few key pages from a presentation deck to create a handout for a meeting or class.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Extract Pages from a PDF (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your PDF",
                    desc: "Go to OmnisPDF's Split PDF tool and drag your file into the upload area, or click to browse. Files up to 25MB are free — Pro users can upload files up to 200MB.",
                  },
                  {
                    title: "Select the pages you want to keep",
                    desc: "Enter the page numbers or ranges you need. For example, type \"1, 3, 7-12\" to extract pages 1, 3, and 7 through 12. You can also click on page thumbnails to select them visually.",
                  },
                  {
                    title: "Download your new PDF",
                    desc: "Click Split PDF and download the result. Your new file contains only the pages you selected, in the order you specified. The original file is not modified.",
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

            {/* Extracting non-consecutive pages */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Extracting Non-Consecutive Pages</h2>
              <p className="text-slate-600 mb-4">
                One of the most useful features of page extraction is selecting pages that are not in a row. For example, from a 30-page contract you might only need:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Page 1</strong> — the title page with party names</li>
                <li>&#10003; <strong>Pages 5-8</strong> — the payment terms section</li>
                <li>&#10003; <strong>Page 15</strong> — the liability clause</li>
                <li>&#10003; <strong>Page 30</strong> — the signature page</li>
              </ul>
              <p className="text-slate-600 mt-4">
                In OmnisPDF, you would enter <strong>&quot;1, 5-8, 15, 30&quot;</strong> and get a clean 7-page PDF with exactly what you need. This is much more efficient than printing the entire document or trying to scroll through it during a meeting.
              </p>
            </section>

            {/* What to do after extracting */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What to Do After Extracting Pages</h2>
              <p className="text-slate-600 mb-4">
                Once you have extracted the pages you need, you might want to take additional steps depending on your use case:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Merge extracted pages with other documents</h3>
                  <p className="text-slate-600">
                    If you extracted pages from multiple PDFs, use <Link href="/merge-pdf" className="text-orange-600 hover:underline">Merge PDF</Link> to combine them into a single document. For example, pull page 1 from your resume PDF and pages 3-5 from a project portfolio, then merge them.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Compress the result</h3>
                  <p className="text-slate-600">
                    Even a few extracted pages can be large if they contain high-resolution images or scans. Use <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> to shrink the file size before sharing.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convert to another format</h3>
                  <p className="text-slate-600">
                    Need the extracted pages as images? Use <Link href="/pdf-to-jpg" className="text-orange-600 hover:underline">PDF to JPG</Link> or <Link href="/pdf-to-png" className="text-orange-600 hover:underline">PDF to PNG</Link> to convert them. If you need editable text, try <Link href="/pdf-to-txt" className="text-orange-600 hover:underline">PDF to TXT</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* Tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips for Extracting Pages Like a Pro</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Check the page count first.</strong> Open your PDF and note the total pages and which ones you need before uploading.</li>
                <li>&#10003; <strong>Use page ranges for speed.</strong> Instead of typing &quot;5, 6, 7, 8, 9&quot;, use &quot;5-9&quot; to save time.</li>
                <li>&#10003; <strong>Unlock protected PDFs first.</strong> If the PDF is password-protected, use <Link href="/unlock-pdf" className="text-orange-600 hover:underline">Unlock PDF</Link> before trying to extract pages.</li>
                <li>&#10003; <strong>Fix rotation issues.</strong> If some pages are rotated the wrong way, use <Link href="/rotate-pdf" className="text-orange-600 hover:underline">Rotate PDF</Link> after extracting to fix them.</li>
                <li>&#10003; <strong>Batch extract for multiple files.</strong> Pro users can process multiple PDFs at once using batch processing, extracting pages from several documents in a single operation.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Extract Pages from Your PDF?</h2>
            <p className="text-slate-300 mb-6">Upload your file and keep only the pages you need — free, no signup required.</p>
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
                { title: "How to Split a PDF (Step-by-Step Guide)", href: "/learn/how-to-split-pdf" },
                { title: "Split a PDF for Email (Under Attachment Size Limits)", href: "/learn/split-pdf-for-email" },
                { title: "Split a PDF into Individual Pages (One Page per File)", href: "/learn/split-pdf-into-individual-pages" },
                { title: "How to Split a PDF on Your Phone (iPhone & Android)", href: "/learn/split-pdf-on-mobile" },
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
                { q: "How do I extract specific pages from a PDF?", a: "Upload your PDF to OmnisPDF's Split PDF tool, select the page numbers you want to keep, and download a new PDF containing only those pages. No software installation needed." },
                { q: "Can I extract pages from a PDF without losing quality?", a: "Yes. OmnisPDF extracts pages without re-encoding them, so your text, images, and formatting remain identical to the original document." },
                { q: "Is it free to extract pages from a PDF?", a: "Yes. OmnisPDF lets you extract pages for free with files up to 25MB. You get 3 free operations without signing up, and 10 per day with a free account." },
                { q: "Can I extract non-consecutive pages from a PDF?", a: "Yes. You can select any combination of pages — for example pages 1, 3, 7, and 12 — and OmnisPDF will combine them into a single new PDF in the order you specified." },
                { q: "How do I extract pages from a password-protected PDF?", a: "First, use OmnisPDF's Unlock PDF tool to remove the password protection, then use the Split PDF tool to extract the pages you need." },
                { q: "Can I extract pages from a PDF on my phone?", a: "Yes. OmnisPDF works in any mobile browser. Upload your PDF, select the pages to extract, and download the result — no app needed." },
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

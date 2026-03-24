import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Scissors, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Split a PDF into Individual Pages (One Page per File) | PDF.it",
  description:
    "Learn how to split a multi-page PDF into separate single-page files. Step-by-step guide for breaking a PDF into one file per page — free, no software needed.",
  keywords: "split pdf into individual pages, one page per pdf, separate pdf pages, pdf to single pages",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I split a PDF into individual pages?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it's Split PDF tool, select the option to split every page into its own file, and download a ZIP containing all individual page files." }
    },
    {
      "@type": "Question",
      "name": "Can I split a PDF into one page per file for free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it lets you split PDFs for free with files up to 25MB. You get 3 free operations without signing up, and 10 per day with a free account." }
    },
    {
      "@type": "Question",
      "name": "What format are the individual pages saved in?",
      "acceptedAnswer": { "@type": "Answer", "text": "Each page is saved as its own PDF file. If you need images instead, you can convert the split pages to JPG or PNG using PDF.it's conversion tools." }
    },
    {
      "@type": "Question",
      "name": "Can I split a 100-page PDF into 100 separate files?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it can split any PDF into individual pages regardless of page count. The resulting files are packaged in a ZIP download for easy handling." }
    },
    {
      "@type": "Question",
      "name": "Will splitting a PDF reduce the quality of each page?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Splitting a PDF simply separates pages into individual files without re-encoding. Text, images, and formatting stay exactly the same." }
    },
    {
      "@type": "Question",
      "name": "How do I name the individual page files?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it automatically names each file with the original filename plus the page number (e.g., document_page1.pdf, document_page2.pdf). You can rename them after downloading." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Split a PDF into Individual Pages",
  "description": "Separate a multi-page PDF into one file per page in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your multi-page PDF",
      "text": "Go to PDF.it's Split PDF tool and upload the document you want to split into individual pages."
    },
    {
      "@type": "HowToStep",
      "name": "Choose to split every page",
      "text": "Select the option to split each page into its own separate PDF file. Every page becomes an independent document."
    },
    {
      "@type": "HowToStep",
      "name": "Download the ZIP file",
      "text": "Click Split PDF and download the ZIP file containing all individual page files. Extract the ZIP to access each page separately."
    }
  ]
}

export default function SplitPDFIntoIndividualPagesPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Split a PDF into Individual Pages (One Page per File)</h1>
              <p className="text-xl text-slate-300">
                Need every page of your PDF as its own separate file? Here's how to break a multi-page document into individual single-page PDFs — instantly, for free.
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

            {/* Why split into individual pages */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Split a PDF into Individual Pages?</h2>
              <p className="text-slate-600 mb-4">
                There are plenty of real-world scenarios where you need each page as its own file. Here are the most common:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Uploading to portals that accept single pages.</strong> Some government and application portals require each supporting document as a separate file — one page for your ID, one for proof of address, one for your bank statement.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Distributing pages to different people.</strong> Split a 10-page questionnaire so each team member gets their assigned page to fill out independently.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Creating slide-by-slide image exports.</strong> Split a presentation PDF into individual pages, then convert each one to <Link href="/pdf-to-jpg" className="text-orange-600 hover:underline">JPG</Link> or <Link href="/pdf-to-png" className="text-orange-600 hover:underline">PNG</Link> for social media or website use.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Archiving individual receipts or invoices.</strong> A monthly statement PDF with 30 invoices can be split into 30 files — one per invoice — for organized record-keeping.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Processing pages separately.</strong> When you need to apply different edits to different pages — rotate some, compress others — splitting first makes each operation easier.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Split a PDF into Individual Pages (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your PDF",
                    desc: "Go to PDF.it's Split PDF tool and drag your file into the upload area. You can upload PDFs up to 25MB for free, or up to 200MB with a Pro account.",
                  },
                  {
                    title: "Select 'Split every page'",
                    desc: "Choose the option to split each page into a separate file. PDF.it will create one PDF file per page. You'll see a preview of all pages before confirming.",
                  },
                  {
                    title: "Download the ZIP file",
                    desc: "Click Split PDF. PDF.it packages all individual page files into a single ZIP download. Extract the ZIP on your computer to access each page file separately.",
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

            {/* Working with the results */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What to Do with Your Individual Page Files</h2>
              <p className="text-slate-600 mb-4">
                Once you have each page as its own PDF, you can process them in different ways depending on your goal:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convert pages to images</h3>
                  <p className="text-slate-600">
                    Use <Link href="/pdf-to-jpg" className="text-orange-600 hover:underline">PDF to JPG</Link> or <Link href="/pdf-to-png" className="text-orange-600 hover:underline">PDF to PNG</Link> to turn each page into an image file. This is perfect for sharing on social media, embedding in presentations, or posting on a website.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Recombine specific pages</h3>
                  <p className="text-slate-600">
                    After splitting, you might want to reassemble some pages in a different order. Use <Link href="/merge-pdf" className="text-orange-600 hover:underline">Merge PDF</Link> to combine selected page files into a new document with a custom page order.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Compress individual pages</h3>
                  <p className="text-slate-600">
                    If specific pages are too large (common with scanned documents), use <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> on those pages individually for better control over file sizes.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Extract text from specific pages</h3>
                  <p className="text-slate-600">
                    Need the text from just one page? Convert it using <Link href="/pdf-to-txt" className="text-orange-600 hover:underline">PDF to TXT</Link> to get a plain text version you can copy, edit, or paste elsewhere.
                  </p>
                </div>
              </div>
            </section>

            {/* Handling large PDFs */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Splitting Large PDFs (50+ Pages)</h2>
              <p className="text-slate-600 mb-4">
                Splitting a large document into dozens or hundreds of individual files is straightforward, but there are a few things to keep in mind:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>The ZIP download is your friend.</strong> PDF.it packages all files into a single ZIP, so you do not have to download 100 files one by one.</li>
                <li>&#10003; <strong>Files are named sequentially.</strong> Each file is automatically named with the page number (page_1.pdf, page_2.pdf, etc.) so they sort correctly in your file manager.</li>
                <li>&#10003; <strong>Pro users get faster processing.</strong> Splitting large files with many pages is faster with a Pro account thanks to priority processing.</li>
                <li>&#10003; <strong>Organize into folders after extracting.</strong> After downloading and extracting the ZIP, consider sorting pages into folders by section or category.</li>
              </ul>
            </section>

            {/* Alternatives */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">When You Don't Need Every Page Separated</h2>
              <p className="text-slate-600 mb-4">
                Splitting into individual pages is the most granular option, but sometimes a different approach is more practical:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Need only a few specific pages?</strong> Use the <Link href="/learn/extract-pages-from-pdf-guide" className="text-orange-600 hover:underline">extract pages</Link> approach instead — select only the pages you need and get a single PDF.</li>
                <li>&#10003; <strong>Need to split into chapters or sections?</strong> Use page ranges (e.g., 1-10, 11-25, 26-40) instead of individual pages. This keeps related content together.</li>
                <li>&#10003; <strong>Need smaller files for email?</strong> Check out our guide on <Link href="/learn/split-pdf-for-email" className="text-orange-600 hover:underline">splitting PDFs for email</Link> for the best approach to meeting attachment size limits.</li>
                <li>&#10003; <strong>Need images, not PDFs?</strong> Skip splitting entirely and go straight to <Link href="/pdf-to-jpg" className="text-orange-600 hover:underline">PDF to JPG</Link> — it converts every page to an image in one step.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Split Your PDF into Individual Pages?</h2>
            <p className="text-slate-300 mb-6">Upload your file and get one PDF per page — free, no signup required.</p>
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
                { title: "How to Extract Pages from a PDF (Keep Only What You Need)", href: "/learn/extract-pages-from-pdf-guide" },
                { title: "Split a PDF for Email (Under Attachment Size Limits)", href: "/learn/split-pdf-for-email" },
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
                { q: "How do I split a PDF into individual pages?", a: "Upload your PDF to PDF.it's Split PDF tool, select the option to split every page into its own file, and download a ZIP containing all individual page files." },
                { q: "Can I split a PDF into one page per file for free?", a: "Yes. PDF.it lets you split PDFs for free with files up to 25MB. You get 3 free operations without signing up, and 10 per day with a free account." },
                { q: "What format are the individual pages saved in?", a: "Each page is saved as its own PDF file. If you need images instead, you can convert the split pages to JPG or PNG using PDF.it's conversion tools." },
                { q: "Can I split a 100-page PDF into 100 separate files?", a: "Yes. PDF.it can split any PDF into individual pages regardless of page count. The resulting files are packaged in a ZIP download for easy handling." },
                { q: "Will splitting a PDF reduce the quality of each page?", a: "No. Splitting a PDF simply separates pages into individual files without re-encoding. Text, images, and formatting stay exactly the same." },
                { q: "How do I name the individual page files?", a: "PDF.it automatically names each file with the original filename plus the page number (e.g., document_page1.pdf, document_page2.pdf). You can rename them after downloading." },
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

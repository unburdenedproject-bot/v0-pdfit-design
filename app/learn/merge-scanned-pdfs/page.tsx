import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Merge, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Merge Scanned PDFs (And Keep Them Readable) | PDF.it",
  description:
    "Learn how to merge scanned PDF files without losing readability. Fix orientation, reduce file size, and add OCR for searchable text — step-by-step guide.",
  keywords: "merge scanned pdfs, combine scanned documents, merge scanned pdf pages, scanned pdf into one",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I merge scanned PDFs like regular PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scanned PDFs merge the same way as regular PDFs — upload them to PDF.it's Merge tool, arrange the order, and click Merge. The difference is that scanned PDFs are usually much larger because each page is stored as a full-page image." }
    },
    {
      "@type": "Question",
      "name": "Why is my merged scanned PDF so large?",
      "acceptedAnswer": { "@type": "Answer", "text": "Scanned pages are stored as images (often 2-5MB per page). When you merge multiple scanned documents, the file size adds up quickly. A 20-page merged scan can easily be 40-100MB. Compress the merged file afterward to reduce the size significantly." }
    },
    {
      "@type": "Question",
      "name": "How do I fix rotated pages in a scanned PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use PDF.it's Rotate PDF tool to fix any pages that are upside down or sideways before merging. Scanners sometimes capture pages in the wrong orientation, especially when using an automatic document feeder." }
    },
    {
      "@type": "Question",
      "name": "Can I make a scanned PDF searchable after merging?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Run the merged file through PDF.it's OCR Scanner tool. OCR (Optical Character Recognition) reads the text in the scanned images and adds a searchable text layer, so you can search, copy, and select text in the document." }
    },
    {
      "@type": "Question",
      "name": "Should I compress before or after merging scanned PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Compress after merging. This is more efficient because the compression tool can optimize the entire document at once. If individual files are too large to upload (over 25MB on the free plan), compress them individually first, then merge." }
    },
    {
      "@type": "Question",
      "name": "How do I clean up phone-scanned PDFs before merging?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use PDF.it's Phone Scan Cleanup tool to fix lighting, remove shadows, straighten pages, and improve contrast. Clean up each scan first, then merge the improved files into one document." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Merge Scanned PDFs",
  "description": "Combine scanned PDF documents into one readable file using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Fix orientation and clean up scans",
      "text": "Before merging, rotate any sideways or upside-down pages using the Rotate PDF tool. If you scanned with your phone, use Phone Scan Cleanup to improve quality."
    },
    {
      "@type": "HowToStep",
      "name": "Upload and merge the scanned files",
      "text": "Upload all scanned PDFs to PDF.it's Merge tool, arrange them in the correct order, and click Merge to combine them into one document."
    },
    {
      "@type": "HowToStep",
      "name": "Compress and add OCR",
      "text": "After merging, compress the file to reduce its size. Optionally, run OCR Scanner to make the scanned text searchable and copyable."
    }
  ]
}

export default function MergeScannedPDFsPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Merge PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">How to Merge Scanned PDFs (And Keep Them Readable)</h1>
              <p className="text-xl text-slate-300">
                Scanned PDFs come with extra challenges — huge file sizes, rotated pages, and unsearchable text. Here's how to merge them properly without ending up with a bloated, unreadable mess.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Merge className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Ready to merge scanned PDFs? Go straight to the tool.</p>
            </div>
            <Link
              href="/merge-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Merge PDFs Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Challenges with scanned PDFs */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Scanned PDFs Are Harder to Merge</h2>
              <p className="text-slate-600 mb-4">
                Unlike regular PDFs (which contain actual text data), scanned PDFs store each page as a full-page image. This creates three major challenges when merging:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Massive file sizes.</strong> Each scanned page is typically 2-5MB. A 20-page merged scan can hit 40-100MB — way too large for email or upload portals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Orientation issues.</strong> Automatic document feeders (ADFs) on scanners sometimes capture pages sideways or upside down. You won't notice until you open the merged file.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>No searchable text.</strong> Scanned PDFs are just images — you can't search for words, copy text, or use them with screen readers. This is a problem for accessibility and professional use.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Poor scan quality.</strong> Phone scans especially can have shadows, skewed pages, and uneven lighting that make the merged document hard to read.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Merge Scanned PDFs (The Right Way)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Fix orientation and clean up each scan",
                    desc: "Before merging, check each scanned PDF for rotated pages. Use the Rotate PDF tool to fix any sideways or upside-down pages. If you scanned with your phone, run each file through Phone Scan Cleanup to fix lighting, shadows, and alignment.",
                  },
                  {
                    title: "Upload all scans and arrange them in order",
                    desc: "Upload all your scanned PDFs to PDF.it's Merge tool. Drag and drop to arrange them in the correct order. Double-check that no file is misplaced — especially if files have generic names like 'Scan_001.pdf'.",
                  },
                  {
                    title: "Merge, then compress and OCR",
                    desc: "Click Merge to combine all scans into one PDF. Then compress the merged file to reduce its size (scanned PDFs compress very well). If you need searchable text, run the result through OCR Scanner.",
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

            {/* Rotating before merging */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Fixing Rotated Pages Before Merging</h2>
              <p className="text-slate-600 mb-4">
                Rotated pages are the most common problem with scanned PDFs. Here's how to identify and fix them:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Open each scan</strong> and quickly scroll through the pages. Look for sideways or upside-down pages.</li>
                <li>✓ <strong>Use <Link href="/rotate-pdf" className="text-orange-600 hover:underline">Rotate PDF</Link></strong> to fix any pages that are in the wrong orientation. You can rotate individual pages 90, 180, or 270 degrees.</li>
                <li>✓ <strong>Check the ADF settings</strong> on your scanner — many have an "auto-orient" option that fixes this at scan time.</li>
                <li>✓ <strong>Fix before merging,</strong> not after. It's much easier to rotate individual scanned files than to fix pages inside a large merged document.</li>
              </ul>
            </section>

            {/* Compressing after merging */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Compressing Scanned PDFs After Merging</h2>
              <p className="text-slate-600 mb-4">
                Scanned PDFs compress dramatically because they're mostly images. Here's what to expect:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Original Size</th>
                      <th className="text-left py-3 px-4 font-bold">After Compression</th>
                      <th className="text-left py-3 px-4 font-bold">Reduction</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">10 pages (~30MB)</td>
                      <td className="py-3 px-4">3-8MB</td>
                      <td className="py-3 px-4 font-semibold text-orange-600">70-90%</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4">20 pages (~60MB)</td>
                      <td className="py-3 px-4">6-15MB</td>
                      <td className="py-3 px-4 font-semibold text-orange-600">75-90%</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">50 pages (~150MB)</td>
                      <td className="py-3 px-4">15-40MB</td>
                      <td className="py-3 px-4 font-semibold text-orange-600">70-90%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4">
                Use <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> after merging. For strict size limits, try the dedicated tools for <Link href="/compress-pdf" className="text-orange-600 hover:underline">compression</Link>.
              </p>
            </section>

            {/* Making scanned PDFs searchable */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Making Your Merged Scan Searchable with OCR</h2>
              <p className="text-slate-600 mb-4">
                Scanned PDFs are just images — you can't search for text, copy content, or highlight words. If you need searchable text (for archiving, legal documents, or accessibility), run your merged file through OCR:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Upload your merged PDF</strong> to <Link href="/ocr-scanner" className="text-orange-600 hover:underline">OCR Scanner</Link> (Pro feature).</li>
                <li>✓ <strong>OCR reads the scanned text</strong> and adds an invisible text layer on top of the images.</li>
                <li>✓ <strong>The result</strong> looks exactly the same but now supports search, copy/paste, and screen readers.</li>
              </ul>
            </section>

            {/* Phone scan tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cleaning Up Phone Scans Before Merging</h2>
              <p className="text-slate-600 mb-4">
                Phone-scanned documents often have shadows, uneven lighting, and skewed alignment. Before merging, clean them up:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Use <Link href="/phone-scan-cleanup" className="text-orange-600 hover:underline">Phone Scan Cleanup</Link></strong> to automatically fix lighting, remove shadows, straighten pages, and improve contrast.</li>
                <li>✓ <strong>Process each scan individually</strong> before merging them into one document.</li>
                <li>✓ <strong>The cleanup tool is free</strong> with daily limits — Pro users get unlimited processing.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Merge Your Scanned PDFs?</h2>
            <p className="text-slate-300 mb-6">Upload your scanned files and combine them into one clean document — free, no signup required.</p>
            <Link
              href="/merge-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Merge className="h-5 w-5" /> Merge PDFs Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Merge PDF Files Online (Combine PDFs into One)", href: "/learn/how-to-merge-pdf-files" },
                { title: "Merge PDFs in the Correct Order (No Page Mistakes)", href: "/learn/merge-pdfs-in-order" },
                { title: "Combine PDFs for Submissions (School, Visa, Job Portals)", href: "/learn/combine-pdfs-for-submission" },
                { title: "Merge PDF Files on iPhone (Fast Browser Method)", href: "/learn/merge-pdf-on-iphone" },
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
                { q: "Can I merge scanned PDFs like regular PDFs?", a: "Yes. Scanned PDFs merge the same way as regular PDFs — upload them to PDF.it's Merge tool, arrange the order, and click Merge. The difference is that scanned PDFs are usually much larger because each page is stored as a full-page image." },
                { q: "Why is my merged scanned PDF so large?", a: "Scanned pages are stored as images (often 2-5MB per page). When you merge multiple scanned documents, the file size adds up quickly. A 20-page merged scan can easily be 40-100MB. Compress the merged file afterward to reduce the size significantly." },
                { q: "How do I fix rotated pages in a scanned PDF?", a: "Use PDF.it's Rotate PDF tool to fix any pages that are upside down or sideways before merging. Scanners sometimes capture pages in the wrong orientation, especially when using an automatic document feeder." },
                { q: "Can I make a scanned PDF searchable after merging?", a: "Yes. Run the merged file through PDF.it's OCR Scanner tool. OCR reads the text in the scanned images and adds a searchable text layer, so you can search, copy, and select text in the document." },
                { q: "Should I compress before or after merging scanned PDFs?", a: "Compress after merging. This is more efficient because the compression tool can optimize the entire document at once. If individual files are too large to upload (over 25MB on the free plan), compress them individually first, then merge." },
                { q: "How do I clean up phone-scanned PDFs before merging?", a: "Use PDF.it's Phone Scan Cleanup tool to fix lighting, remove shadows, straighten pages, and improve contrast. Clean up each scan first, then merge the improved files into one document." },
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

import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Merge, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Merge PDF Files Online (Combine PDFs into One) | PDF.it",
  description:
    "Learn how to merge PDF files online into one document. Step-by-step guide for combining PDFs for submissions, reports, and portfolios — free, no software needed.",
  keywords: "merge pdf files online, combine pdfs into one, merge pdf, join pdf files, how to merge pdfs",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I merge PDF files online for free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDFs to PDF.it's Merge PDF tool, arrange them in the order you want, click Merge, and download the combined file. No signup required for your first 3 files." }
    },
    {
      "@type": "Question",
      "name": "Can I merge more than two PDFs at once?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it lets you upload and merge as many PDFs as you need in a single operation. Free users can merge files one at a time, while Pro users get batch processing for merging multiple files at once." }
    },
    {
      "@type": "Question",
      "name": "Will merging PDFs increase the file size?",
      "acceptedAnswer": { "@type": "Answer", "text": "The merged file will be roughly the sum of all individual files. If the result is too large, use PDF.it's Compress PDF tool after merging to reduce the file size significantly." }
    },
    {
      "@type": "Question",
      "name": "Can I reorder pages before merging?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it lets you drag and drop files into the exact order you want before merging. You can also rearrange individual pages after merging using the Split or Reorder tool." }
    },
    {
      "@type": "Question",
      "name": "Is it safe to merge PDFs online?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it processes files securely and deletes them from the server after processing. Your documents are never stored permanently or shared with third parties." }
    },
    {
      "@type": "Question",
      "name": "Can I merge PDFs on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in any mobile browser — Safari, Chrome, or Firefox. Upload your PDFs, merge them, and download the result directly on your phone. No app installation needed." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Merge PDF Files Online",
  "description": "Combine multiple PDFs into one document in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your PDF files",
      "text": "Go to PDF.it's Merge PDF tool and upload all the files you want to combine by clicking or dragging them into the upload area."
    },
    {
      "@type": "HowToStep",
      "name": "Arrange the file order",
      "text": "Drag and drop the files into the correct order. The first file in the list will appear first in the merged document."
    },
    {
      "@type": "HowToStep",
      "name": "Download the merged PDF",
      "text": "Click Merge PDF and download your combined document. If the file is too large, compress it afterward using the Compress PDF tool."
    }
  ]
}

export default function HowToMergePDFFilesPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Merge PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">How to Merge PDF Files Online (Combine PDFs into One)</h1>
              <p className="text-xl text-slate-300">
                Need to combine multiple PDFs into a single document? Whether it's for a job application, school submission, or a business report — here's how to merge PDFs in seconds.
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
              <p className="text-slate-700 font-semibold">Ready to merge? Skip the guide and go straight to the tool.</p>
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

            {/* Why merge PDFs */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Would You Need to Merge PDFs?</h2>
              <p className="text-slate-600 mb-4">
                There are many situations where combining multiple PDFs into one file makes life easier. Here are the most common reasons:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Job applications.</strong> Many employers ask for a single PDF with your resume, cover letter, and references combined. Sending three separate files looks disorganized.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>School and university submissions.</strong> Assignment portals often accept only one file upload. Merge your essay, bibliography, and appendix into a single document.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Reports and proposals.</strong> Combine a cover page, executive summary, data pages, and appendices into one polished document for clients or stakeholders.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Portfolios.</strong> Designers, photographers, and architects need to compile work samples into a single PDF portfolio for sharing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Visa and government applications.</strong> Immigration forms often require a single PDF with your passport, photos, bank statements, and supporting letters.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Merge PDF Files (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your PDF files",
                    desc: "Go to the Merge PDF tool and drag all your files into the upload area, or click to browse. You can upload as many PDFs as you need. Files up to 25MB each are free — Pro users can upload files up to 200MB.",
                  },
                  {
                    title: "Arrange the files in order",
                    desc: "Drag and drop the files into the order you want them to appear in the final document. The first file in the list becomes the first pages of your merged PDF.",
                  },
                  {
                    title: "Download the merged PDF",
                    desc: "Click Merge PDF and wait a few seconds. Download your combined document — all your files are now in one PDF. If the result is too large, compress it afterward.",
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

            {/* Reordering before merging */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Reordering Files Before Merging</h2>
              <p className="text-slate-600 mb-4">
                Getting the page order right is critical — especially for formal submissions. Here are some tips:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Name your files logically</strong> before uploading (e.g., "01-cover-letter.pdf", "02-resume.pdf", "03-references.pdf"). This makes sorting easier.</li>
                <li>✓ <strong>Use drag and drop</strong> in PDF.it to rearrange files visually before merging.</li>
                <li>✓ <strong>Preview the merged result</strong> before downloading to make sure everything is in the right order.</li>
                <li>✓ If you need to rearrange individual pages (not just files), use <Link href="/split-pdf" className="text-orange-600 hover:underline">Split PDF</Link> to extract pages, then merge them back in the correct order.</li>
              </ul>
            </section>

            {/* File size after merging */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Managing File Size After Merging</h2>
              <p className="text-slate-600 mb-4">
                When you merge multiple PDFs, the resulting file is roughly the sum of all individual file sizes. A 3MB resume + 5MB transcript + 2MB cover letter = approximately 10MB. If that's too large for your needs:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Compress after merging.</strong> Use <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> to reduce the merged file size significantly — often by 50-80%.</li>
                <li>✓ <strong>Flatten before merging.</strong> If any of your PDFs have form fields, annotations, or layers, <Link href="/flatten-pdf" className="text-orange-600 hover:underline">flatten them first</Link> to remove unnecessary data.</li>
                <li>✓ <strong>Remove extra pages.</strong> Use <Link href="/split-pdf" className="text-orange-600 hover:underline">Split PDF</Link> to remove blank pages or unnecessary sections before merging.</li>
              </ul>
            </section>

            {/* Best practices */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Best Practices for Merging PDFs</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Check Page Orientation</h3>
                  <p className="text-slate-600">
                    Scanned documents sometimes have pages rotated the wrong way. Before merging, make sure all pages are oriented correctly. You can fix rotated pages using PDF.it's <Link href="/merge-pdf" className="text-orange-600 hover:underline">Merge tool</Link> or the dedicated rotate feature.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Always Review the Final Document</h3>
                  <p className="text-slate-600">
                    Before submitting your merged PDF, open it and scroll through every page. Make sure no pages are missing, duplicated, or in the wrong order. This takes 30 seconds and can save you from rejected applications.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Consider Password Protection</h3>
                  <p className="text-slate-600">
                    If your merged PDF contains sensitive information (financial documents, ID copies, medical records), consider adding a password after merging. PDF.it's <Link href="/merge-pdf" className="text-orange-600 hover:underline">Merge tool</Link> creates a clean file that you can then protect.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Merge Your PDFs?</h2>
            <p className="text-slate-300 mb-6">Upload your files and combine them into one document in seconds — free, no signup required.</p>
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
                { title: "Merge PDFs in the Correct Order (No Page Mistakes)", href: "/learn/merge-pdfs-in-order" },
                { title: "How to Merge Scanned PDFs (And Keep Them Readable)", href: "/learn/merge-scanned-pdfs" },
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
                { q: "How do I merge PDF files online for free?", a: "Upload your PDFs to PDF.it's Merge PDF tool, arrange them in the order you want, click Merge, and download the combined file. No signup required for your first 3 files." },
                { q: "Can I merge more than two PDFs at once?", a: "Yes. PDF.it lets you upload and merge as many PDFs as you need in a single operation. Free users can merge files one at a time, while Pro users get batch processing for merging multiple files at once." },
                { q: "Will merging PDFs increase the file size?", a: "The merged file will be roughly the sum of all individual files. If the result is too large, use PDF.it's Compress PDF tool after merging to reduce the file size significantly." },
                { q: "Can I reorder pages before merging?", a: "Yes. PDF.it lets you drag and drop files into the exact order you want before merging. You can also rearrange individual pages after merging using the Split or Reorder tool." },
                { q: "Is it safe to merge PDFs online?", a: "PDF.it processes files securely and deletes them from the server after processing. Your documents are never stored permanently or shared with third parties." },
                { q: "Can I merge PDFs on my phone?", a: "Yes. PDF.it works in any mobile browser — Safari, Chrome, or Firefox. Upload your PDFs, merge them, and download the result directly on your phone. No app installation needed." },
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

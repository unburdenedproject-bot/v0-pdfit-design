import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Merge, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Merge PDFs in the Correct Order (No Page Mistakes) | PDF.it",
  description:
    "Learn how to merge PDFs in the correct order every time. Tips for naming conventions, drag-and-drop sorting, and avoiding page mix-ups when combining PDFs.",
  keywords: "merge pdfs in order, combine pdfs correct order, merge pdf pages in sequence, arrange pdf before merging",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I merge PDFs in a specific order?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload all your PDFs to PDF.it's Merge tool, then drag and drop the files into the exact order you want. The first file in the list will appear first in the merged document. Click Merge when the order is correct." }
    },
    {
      "@type": "Question",
      "name": "Why did my merged PDF come out in the wrong order?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most merge tools process files in the order they were uploaded or alphabetically by filename. If you uploaded files in a random order without rearranging them, the pages may be out of sequence. Always check the file order before clicking Merge." }
    },
    {
      "@type": "Question",
      "name": "Can I rearrange pages after merging?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. If you notice the order is wrong after merging, use PDF.it's Split PDF tool to extract individual pages, then merge them again in the correct order. You can also use the Reorder PDF Pages tool to rearrange pages within a single PDF." }
    },
    {
      "@type": "Question",
      "name": "How should I name my files for easy sorting?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use a number prefix like 01-, 02-, 03- at the beginning of each filename. For example: '01-cover-letter.pdf', '02-resume.pdf', '03-references.pdf'. This ensures files sort correctly in any file manager or upload tool." }
    },
    {
      "@type": "Question",
      "name": "Does PDF.it let me preview before merging?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can see the list of uploaded files and their order before clicking Merge. Drag and drop to rearrange them until the order is exactly right, then proceed with the merge." }
    },
    {
      "@type": "Question",
      "name": "Can I merge PDFs in order on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers. Upload your files, rearrange them by dragging into the correct order, and merge — all from your phone's browser without installing any app." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Merge PDFs in the Correct Order",
  "description": "Combine multiple PDFs in a specific order without page mistakes using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload and name your files logically",
      "text": "Before uploading, rename your files with number prefixes (01-, 02-, 03-) so they sort correctly. Then upload all files to PDF.it's Merge tool."
    },
    {
      "@type": "HowToStep",
      "name": "Drag files into the correct order",
      "text": "Use drag and drop to arrange the files in the exact sequence you want. The top file becomes the first pages of the merged PDF."
    },
    {
      "@type": "HowToStep",
      "name": "Merge and verify the result",
      "text": "Click Merge PDF, download the result, and scroll through every page to confirm the order is correct before submitting."
    }
  ]
}

export default function MergePDFsInOrderPage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Merge PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Merge PDFs in the Correct Order (No Page Mistakes)</h1>
              <p className="text-xl text-slate-300">
                Nothing is worse than submitting a merged PDF with pages out of order. Here's how to get it right every time — with simple naming tricks and a drag-and-drop workflow.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <Merge className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Ready to merge in order? Skip the guide and go straight to the tool.</p>
            </div>
            <Link
              href="/merge-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Merge PDFs Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why order matters */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Page Order Matters When Merging PDFs</h2>
              <p className="text-slate-600 mb-4">
                When you combine multiple PDFs into one, the tool processes them in a specific sequence. If you don't control that sequence, you can end up with:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>A cover letter after your resume</strong> instead of before it — making a bad first impression on recruiters.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Supporting documents before the main application form</strong> — confusing the person reviewing your submission.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Appendices mixed into the body of a report</strong> — making your document look unprofessional.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                The fix is simple: control the order <strong>before</strong> you merge.
              </p>
            </section>

            {/* Naming files */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Name Your Files for Easy Sorting</h2>
              <p className="text-slate-600 mb-4">
                The easiest way to keep files in order is to add number prefixes to your filenames <strong>before</strong> uploading. This way, even if the merge tool sorts alphabetically, your files will be in the right sequence.
              </p>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 mb-4">
                <p className="font-bold text-slate-900 mb-3">Good naming example:</p>
                <ul className="space-y-1 text-slate-700 text-sm font-mono">
                  <li>01-cover-letter.pdf</li>
                  <li>02-resume.pdf</li>
                  <li>03-transcript.pdf</li>
                  <li>04-recommendation-letter.pdf</li>
                  <li>05-portfolio-samples.pdf</li>
                </ul>
              </div>
              <p className="text-slate-600">
                Use two-digit numbers (01, 02, 03) instead of single digits (1, 2, 3) — this prevents "10" from sorting before "2" in some systems.
              </p>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Merge PDFs in Order (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Rename your files with number prefixes",
                    desc: "Before uploading, rename each file with a number prefix (01-, 02-, 03-). This ensures they sort correctly no matter how the tool orders them initially.",
                  },
                  {
                    title: "Upload and rearrange in PDF.it",
                    desc: "Upload all files to the Merge PDF tool. Use drag and drop to verify the order — the first file in the list will appear first in the merged document. Move any misplaced files to the correct position.",
                  },
                  {
                    title: "Merge, download, and verify",
                    desc: "Click Merge PDF, download the result, and scroll through every page to confirm everything is in the right order. This final check takes 30 seconds and prevents submission mistakes.",
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

            {/* Fixing wrong order after merging */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Already Merged in the Wrong Order?</h2>
              <p className="text-slate-600 mb-4">
                If you've already merged your PDFs and the pages are out of order, you don't need to start over. Here's how to fix it:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Use Split PDF</strong> to break the merged document back into individual pages using <Link href="/split-pdf" className="text-[#14D8C4] hover:underline">Split PDF</Link>.</li>
                <li>✓ <strong>Rearrange the pages</strong> and merge them again in the correct order.</li>
                <li>✓ <strong>Or use Reorder PDF Pages</strong> — the <Link href="/split-pdf" className="text-[#14D8C4] hover:underline">page management tools</Link> let you drag pages into the right position within a single PDF without splitting.</li>
              </ul>
            </section>

            {/* Tips for specific scenarios */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Order Tips for Common Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Job Applications</h3>
                  <p className="text-slate-600">
                    Standard order: Cover letter first, then resume, then references or additional documents. Some employers specify their preferred order — always follow their instructions exactly.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">University Submissions</h3>
                  <p className="text-slate-600">
                    Typical order: Title page, main essay/report, bibliography, appendices. Check your university's submission guidelines — some require a signed declaration page first.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Visa and Immigration Applications</h3>
                  <p className="text-slate-600">
                    Follow the checklist provided by the embassy or immigration office exactly. Usually: application form, passport copy, photos, financial documents, supporting letters. Getting this order wrong can delay processing.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Merge Your PDFs in Order?</h2>
            <p className="text-slate-300 mb-6">Upload your files, drag them into the right sequence, and combine — free, no signup required.</p>
            <Link
              href="/merge-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
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
                { title: "How to Merge Scanned PDFs (And Keep Them Readable)", href: "/learn/merge-scanned-pdfs" },
                { title: "Combine PDFs for Submissions (School, Visa, Job Portals)", href: "/learn/combine-pdfs-for-submission" },
                { title: "Merge PDF Files on iPhone (Fast Browser Method)", href: "/learn/merge-pdf-on-iphone" },
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
                { q: "How do I merge PDFs in a specific order?", a: "Upload all your PDFs to PDF.it's Merge tool, then drag and drop the files into the exact order you want. The first file in the list will appear first in the merged document. Click Merge when the order is correct." },
                { q: "Why did my merged PDF come out in the wrong order?", a: "Most merge tools process files in the order they were uploaded or alphabetically by filename. If you uploaded files in a random order without rearranging them, the pages may be out of sequence. Always check the file order before clicking Merge." },
                { q: "Can I rearrange pages after merging?", a: "Yes. If you notice the order is wrong after merging, use PDF.it's Split PDF tool to extract individual pages, then merge them again in the correct order. You can also use the Reorder PDF Pages tool to rearrange pages within a single PDF." },
                { q: "How should I name my files for easy sorting?", a: "Use a number prefix like 01-, 02-, 03- at the beginning of each filename. For example: '01-cover-letter.pdf', '02-resume.pdf', '03-references.pdf'. This ensures files sort correctly in any file manager or upload tool." },
                { q: "Does PDF.it let me preview before merging?", a: "Yes. You can see the list of uploaded files and their order before clicking Merge. Drag and drop to rearrange them until the order is exactly right, then proceed with the merge." },
                { q: "Can I merge PDFs in order on my phone?", a: "Yes. PDF.it works in mobile browsers. Upload your files, rearrange them by dragging into the correct order, and merge — all from your phone's browser without installing any app." },
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

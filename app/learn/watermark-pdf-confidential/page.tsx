import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Stamp, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Add a 'Confidential' Watermark to a PDF (Quick Guide) | PDF.it",
  description:
    "Learn how to add a CONFIDENTIAL, DRAFT, or DO NOT COPY watermark to a PDF online. Protect sensitive documents in seconds with PDF.it.",
  keywords: "confidential watermark pdf, draft watermark pdf, do not copy watermark, stamp pdf confidential",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I add a Confidential watermark to a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it's Watermark PDF tool, type CONFIDENTIAL as your watermark text, adjust the opacity and angle, then click Apply. The watermark appears on every page of the document." }
    },
    {
      "@type": "Question",
      "name": "Can I add a DRAFT watermark instead of CONFIDENTIAL?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can type any text you want — DRAFT, CONFIDENTIAL, DO NOT COPY, SAMPLE, INTERNAL ONLY, or any custom phrase. PDF.it lets you customize the text, color, size, and angle." }
    },
    {
      "@type": "Question",
      "name": "Is the Confidential watermark permanent?",
      "acceptedAnswer": { "@type": "Answer", "text": "By default, watermarks are added as overlays. To make it permanent, flatten the PDF after watermarking using PDF.it's Flatten PDF tool. This bakes the watermark into the page so it cannot be removed." }
    },
    {
      "@type": "Question",
      "name": "Can I watermark multiple PDFs at once?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Pro and Business users can use batch processing to watermark multiple PDFs in one go. Upload all your files, configure the watermark once, and apply it to every document simultaneously." }
    },
    {
      "@type": "Question",
      "name": "What opacity should I use for a Confidential watermark?",
      "acceptedAnswer": { "@type": "Answer", "text": "For most documents, 15-25% opacity works well. It makes the watermark clearly visible without making the underlying text hard to read. For stronger deterrence, go up to 30-40%." }
    },
    {
      "@type": "Question",
      "name": "Is the Watermark PDF tool free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Watermark PDF is available to Pro ($3.99/month) and Business ($13.99/month) users. Both tiers include unlimited watermarking, batch processing, and files up to 200MB." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Add a Confidential Watermark to a PDF",
  "description": "Stamp any PDF with a CONFIDENTIAL watermark in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your PDF",
      "text": "Go to PDF.it's Watermark PDF tool and upload the document you need to mark as confidential."
    },
    {
      "@type": "HowToStep",
      "name": "Type CONFIDENTIAL as your watermark",
      "text": "Enter CONFIDENTIAL in the text field. Set the opacity to 15-25%, choose a red or gray color, and angle it diagonally across the page."
    },
    {
      "@type": "HowToStep",
      "name": "Apply and download",
      "text": "Click Apply Watermark. Every page of your PDF now displays the CONFIDENTIAL stamp. Download the file and share it securely."
    }
  ]
}

export default function WatermarkPDFConfidentialPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Watermark PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Add a &quot;Confidential&quot; Watermark to a PDF (Quick Guide)</h1>
              <p className="text-xl text-slate-300">
                Need to mark a document as CONFIDENTIAL, DRAFT, or DO NOT COPY before sharing? Here is how to stamp any PDF with a security watermark in seconds.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Stamp className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Ready to stamp your PDF? Skip the guide and go straight to the tool.</p>
            </div>
            <Link
              href="/watermark-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Watermark PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* When to use confidential watermarks */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">When Do You Need a Confidential Watermark?</h2>
              <p className="text-slate-600 mb-4">
                Adding a CONFIDENTIAL watermark is standard practice across many industries. Here are the most common scenarios:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Legal contracts and agreements.</strong> Law firms mark contracts, NDAs, and settlement documents as CONFIDENTIAL before sending them to clients or opposing counsel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Financial reports.</strong> Internal financial statements, audit reports, and budget forecasts are often stamped CONFIDENTIAL to prevent unauthorized distribution within or outside the organization.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>HR documents.</strong> Employee records, salary sheets, and performance reviews contain sensitive information that must be clearly marked as restricted.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Draft proposals and reports.</strong> When circulating an unfinished document for review, a DRAFT watermark tells readers the content is not final and should not be cited or forwarded.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Exam papers and assessments.</strong> Educational institutions stamp exam materials with DO NOT COPY to prevent unauthorized distribution among students.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Add a Confidential Watermark (Step by Step)</h2>
              <p className="text-slate-600 mb-4">
                Watermark PDF is available to Pro and Business users. <Link href="/pricing" className="text-orange-600 hover:underline">See pricing</Link> for details.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your PDF",
                    desc: "Open the Watermark PDF tool and upload the document you need to mark. Pro users can upload files up to 200MB and use batch processing for multiple files.",
                  },
                  {
                    title: "Type your watermark text",
                    desc: "Enter CONFIDENTIAL (or DRAFT, DO NOT COPY, INTERNAL ONLY — whatever fits your use case). Choose a red or dark gray color for maximum visibility. Set the opacity to 15-25% so the text is readable but the watermark is unmistakable. Angle it diagonally at 45 degrees for the classic look.",
                  },
                  {
                    title: "Apply and download",
                    desc: "Click Apply Watermark. The stamp appears on every page of your document. Download the watermarked PDF and share it with confidence.",
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

            {/* Popular watermark labels */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Popular Watermark Labels and When to Use Them</h2>
              <p className="text-slate-600 mb-4">
                Different labels serve different purposes. Here is a quick reference:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">CONFIDENTIAL</h3>
                  <p className="text-slate-600">
                    The most common label. Use it for any document that contains sensitive information — contracts, financial data, personal records. It signals that the document should not be shared outside its intended audience.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">DRAFT</h3>
                  <p className="text-slate-600">
                    Use for documents still under review. A DRAFT watermark prevents recipients from treating the content as final or official. Common for reports, proposals, and policy documents being circulated for feedback.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">DO NOT COPY</h3>
                  <p className="text-slate-600">
                    Stronger than CONFIDENTIAL. Use when you explicitly want to prevent recipients from reproducing the document. Common for proprietary research, trade secrets, and exam papers.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">SAMPLE / FOR REVIEW ONLY</h3>
                  <p className="text-slate-600">
                    Use for preview copies. Publishers watermark book samples, and software companies watermark documentation previews. This prevents free distribution of paid content.
                  </p>
                </div>
              </div>
            </section>

            {/* Making it permanent */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Make Your Confidential Watermark Permanent</h2>
              <p className="text-slate-600 mb-4">
                A watermark overlay can sometimes be removed by someone with the right tools. To prevent this, take these extra steps after watermarking:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Flatten the PDF.</strong> Use <Link href="/flatten-pdf" className="text-orange-600 hover:underline">Flatten PDF</Link> to merge the watermark permanently into the page content. After flattening, the watermark cannot be separated from the original document.</li>
                <li>&#10003; <strong>Password-protect the file.</strong> Use <Link href="/protect-pdf" className="text-orange-600 hover:underline">Protect PDF</Link> to add a password that restricts editing and printing. This adds another barrier against tampering.</li>
                <li>&#10003; <strong>Compress before sharing.</strong> After watermarking and flattening, use <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> to keep the file size manageable, especially if you are emailing it.</li>
              </ul>
            </section>

            {/* Batch watermarking */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Batch Watermarking for Multiple Documents</h2>
              <p className="text-slate-600 mb-4">
                If you need to add a CONFIDENTIAL watermark to an entire folder of documents — such as all files for a legal case or a quarterly financial package — batch processing saves significant time.
              </p>
              <p className="text-slate-600 mb-4">
                Pro and Business users can upload multiple PDFs at once, configure the watermark settings a single time, and apply the same watermark to every file simultaneously. Each file is processed individually and available for individual or bulk download as a ZIP file.
              </p>
              <p className="text-slate-600">
                This is especially useful for legal teams preparing discovery documents, accounting firms distributing confidential reports, or HR departments processing employee records. Instead of watermarking files one at a time, do them all in one batch. After watermarking, you can <Link href="/merge-pdf" className="text-orange-600 hover:underline">merge them into a single document</Link> if needed.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Stamp Your Documents as Confidential</h2>
            <p className="text-slate-300 mb-6">Upload your PDF and add a CONFIDENTIAL, DRAFT, or custom watermark in seconds. Available for Pro and Business users.</p>
            <Link
              href="/watermark-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Stamp className="h-5 w-5" /> Watermark PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Add a Watermark to a PDF Online", href: "/learn/how-to-add-watermark-to-pdf" },
                { title: "Add Your Logo as a Watermark on a PDF", href: "/learn/watermark-pdf-with-logo" },
                { title: "PDF Watermark Best Practices (Size, Opacity & Placement)", href: "/learn/watermark-pdf-best-practices" },
                { title: "Add a Watermark to a PDF on Your Phone (iPhone & Android)", href: "/learn/watermark-pdf-on-mobile" },
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
                { q: "How do I add a Confidential watermark to a PDF?", a: "Upload your PDF to PDF.it's Watermark PDF tool, type CONFIDENTIAL as your watermark text, adjust the opacity and angle, then click Apply. The watermark appears on every page of the document." },
                { q: "Can I add a DRAFT watermark instead of CONFIDENTIAL?", a: "Yes. You can type any text you want — DRAFT, CONFIDENTIAL, DO NOT COPY, SAMPLE, INTERNAL ONLY, or any custom phrase. PDF.it lets you customize the text, color, size, and angle." },
                { q: "Is the Confidential watermark permanent?", a: "By default, watermarks are added as overlays. To make it permanent, flatten the PDF after watermarking using PDF.it's Flatten PDF tool. This bakes the watermark into the page so it cannot be removed." },
                { q: "Can I watermark multiple PDFs at once?", a: "Yes. Pro and Business users can use batch processing to watermark multiple PDFs in one go. Upload all your files, configure the watermark once, and apply it to every document simultaneously." },
                { q: "What opacity should I use for a Confidential watermark?", a: "For most documents, 15-25% opacity works well. It makes the watermark clearly visible without making the underlying text hard to read. For stronger deterrence, go up to 30-40%." },
                { q: "Is the Watermark PDF tool free?", a: "Watermark PDF is available to Pro ($3.99/month) and Business ($13.99/month) users. Both tiers include unlimited watermarking, batch processing, and files up to 200MB." },
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

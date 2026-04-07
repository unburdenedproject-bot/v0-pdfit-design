import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Scissors, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Split a PDF for Email (Under Attachment Size Limits) | PDF.it",
  description:
    "Learn how to split a large PDF into smaller files that fit under email attachment limits. Works for Gmail (25MB), Outlook (20MB), and more — free, no software needed.",
  keywords: "split pdf for email, pdf too large for email, reduce pdf for email attachment, split pdf into smaller files",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I split a PDF that's too large for email?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it's Split PDF tool, choose to split by file size or page count, and download the smaller parts. Each part will be under the email attachment limit." }
    },
    {
      "@type": "Question",
      "name": "What is the Gmail attachment size limit?",
      "acceptedAnswer": { "@type": "Answer", "text": "Gmail allows attachments up to 25MB per email. If your PDF is larger, you need to either split it into smaller files or compress it to reduce the size." }
    },
    {
      "@type": "Question",
      "name": "What is the Outlook attachment size limit?",
      "acceptedAnswer": { "@type": "Answer", "text": "Microsoft Outlook allows attachments up to 20MB per email. Outlook.com (Hotmail) has the same 20MB limit. For larger files, split or compress your PDF." }
    },
    {
      "@type": "Question",
      "name": "Should I split or compress my PDF for email?",
      "acceptedAnswer": { "@type": "Answer", "text": "Try compressing first — it's simpler. If the compressed PDF is still too large, split it into parts. PDF.it offers both tools: Compress PDF and Split PDF." }
    },
    {
      "@type": "Question",
      "name": "Can I split a PDF into parts of a specific file size?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it lets you split by page ranges, so you can estimate how many pages fit under your target size. For precise control, split into small sections and check each file's size." }
    },
    {
      "@type": "Question",
      "name": "How do I recombine the split PDFs after sending?",
      "acceptedAnswer": { "@type": "Answer", "text": "The recipient can use PDF.it's Merge PDF tool to combine all the parts back into a single document. Share this link with them: pdf.it.com/merge-pdf" }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Split a PDF for Email",
  "description": "Break a large PDF into smaller files that fit under email attachment limits in 3 simple steps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your large PDF",
      "text": "Go to PDF.it's Split PDF tool and upload the PDF that's too large for email."
    },
    {
      "@type": "HowToStep",
      "name": "Split by page ranges",
      "text": "Divide the PDF into sections that will be small enough to email. For example, split a 40-page PDF into two 20-page halves."
    },
    {
      "@type": "HowToStep",
      "name": "Download and send each part",
      "text": "Download the split files and attach each one to a separate email. Label them clearly (Part 1 of 3, Part 2 of 3, etc.)."
    }
  ]
}

export default function SplitPDFForEmailPage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Split PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Split a PDF for Email (Under Attachment Size Limits)</h1>
              <p className="text-xl text-slate-300">
                Your PDF is too large to attach to an email? Here's how to split it into smaller parts that fit under Gmail's 25MB limit, Outlook's 20MB limit, and more.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <Scissors className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Need to split your PDF right now? Skip the guide and use the tool.</p>
            </div>
            <Link
              href="/split-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Split PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Email size limits */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Email Attachment Size Limits You Need to Know</h2>
              <p className="text-slate-600 mb-4">
                Every email provider has a maximum file size for attachments. If your PDF exceeds the limit, the email will bounce or refuse to send. Here are the most common limits:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span>
                  <span><strong>Gmail:</strong> 25MB per email (total for all attachments combined)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span>
                  <span><strong>Outlook / Hotmail:</strong> 20MB per email</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span>
                  <span><strong>Yahoo Mail:</strong> 25MB per email</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span>
                  <span><strong>Apple iCloud Mail:</strong> 20MB per email</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span>
                  <span><strong>Corporate email servers:</strong> Often 10MB or even 5MB, depending on company policy</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                If your recipient uses a corporate email system, aim for files under 10MB to be safe. You can also try <Link href="/compress-pdf-for-email" className="text-[#14D8C4] hover:underline">compressing your PDF for email</Link> before splitting.
              </p>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Split a PDF for Email (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your oversized PDF",
                    desc: "Go to PDF.it's Split PDF tool and upload your file. You'll see the total page count and can preview each page. Free users can upload files up to 25MB; Pro users up to 200MB.",
                  },
                  {
                    title: "Divide it into email-friendly parts",
                    desc: "Split the PDF into page ranges that keep each part under the email size limit. For example, split a 60-page, 40MB PDF into three 20-page sections. Each section should be roughly 13MB — well under Gmail's 25MB limit.",
                  },
                  {
                    title: "Download and send each part separately",
                    desc: "Download each split file. Attach Part 1 to your first email, Part 2 to a second email, and so on. Name the subject lines clearly: \"Document - Part 1 of 3\", \"Document - Part 2 of 3\", etc.",
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

            {/* Compress vs split */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Should You Compress or Split? (Or Both)</h2>
              <p className="text-slate-600 mb-4">
                Before splitting your PDF, try compressing it first. Compression can reduce file sizes by 50-80%, which might bring your PDF under the email limit without splitting at all.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Try compressing first</h3>
                  <p className="text-slate-600">
                    Use <Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">Compress PDF</Link> to reduce the file size. If your 30MB PDF compresses to 18MB, you can email it through Gmail without splitting. For even more targeted compression, try <Link href="/compress-pdf-to-5mb" className="text-[#14D8C4] hover:underline">Compress to 5MB</Link> or <Link href="/compress-pdf-to-2mb" className="text-[#14D8C4] hover:underline">Compress to 2MB</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Split if compression isn't enough</h3>
                  <p className="text-slate-600">
                    If your compressed PDF is still too large — for example, a 100-page document with high-resolution scans — splitting is the way to go. Split the document into logical sections (chapters, sections, or equal page counts).
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Compress then split for best results</h3>
                  <p className="text-slate-600">
                    For the smallest possible files, compress first, then split. This gives you the fewest number of email parts while keeping each one well under the size limit.
                  </p>
                </div>
              </div>
            </section>

            {/* How the recipient recombines */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">How the Recipient Can Recombine the Parts</h2>
              <p className="text-slate-600 mb-4">
                After you send split PDFs, the recipient will need to merge them back into one document. Include a note in your email with these instructions:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Download all parts</strong> from each email to the same folder.</li>
                <li>&#10003; <strong>Go to <Link href="/merge-pdf" className="text-[#14D8C4] hover:underline">PDF.it Merge PDF</Link></strong> and upload all the parts.</li>
                <li>&#10003; <strong>Arrange them in order</strong> (Part 1 first, Part 2 second, etc.).</li>
                <li>&#10003; <strong>Click Merge</strong> and download the complete document.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                The whole process takes less than a minute, and the merged PDF will be identical to your original.
              </p>
            </section>

            {/* Pro tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Pro Tips for Emailing Large PDFs</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Flatten before splitting.</strong> If your PDF has form fields or annotations, use <Link href="/flatten-pdf" className="text-[#14D8C4] hover:underline">Flatten PDF</Link> first to reduce embedded data.</li>
                <li>&#10003; <strong>Convert images to JPG.</strong> If you only need to share visual pages (not editable text), convert pages to <Link href="/pdf-to-jpg" className="text-[#14D8C4] hover:underline">JPG images</Link> — they are often much smaller than PDF pages.</li>
                <li>&#10003; <strong>Use clear file names.</strong> Name your files &quot;Report_Part1of3.pdf&quot;, &quot;Report_Part2of3.pdf&quot;, etc. so the recipient knows the order.</li>
                <li>&#10003; <strong>Extract only what's needed.</strong> If the recipient only needs certain pages, <Link href="/learn/extract-pages-from-pdf-guide" className="text-[#14D8C4] hover:underline">extract those pages</Link> instead of sending the full document.</li>
                <li>&#10003; <strong>Test with yourself first.</strong> Send the split files to your own email to make sure everything looks right before sending to the recipient.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">PDF Too Large for Email?</h2>
            <p className="text-slate-300 mb-6">Split it into smaller files that fit under any email attachment limit — free, no signup required.</p>
            <Link
              href="/split-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Scissors className="h-5 w-5" /> Split PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Split a PDF (Step-by-Step Guide)", href: "/learn/how-to-split-pdf" },
                { title: "How to Extract Pages from a PDF (Keep Only What You Need)", href: "/learn/extract-pages-from-pdf-guide" },
                { title: "Split a PDF into Individual Pages (One Page per File)", href: "/learn/split-pdf-into-individual-pages" },
                { title: "How to Split a PDF on Your Phone (iPhone & Android)", href: "/learn/split-pdf-on-mobile" },
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
                { q: "How do I split a PDF that's too large for email?", a: "Upload your PDF to PDF.it's Split PDF tool, choose to split by file size or page count, and download the smaller parts. Each part will be under the email attachment limit." },
                { q: "What is the Gmail attachment size limit?", a: "Gmail allows attachments up to 25MB per email (total for all attachments combined). If your PDF is larger, you need to either split it into smaller files or compress it to reduce the size." },
                { q: "What is the Outlook attachment size limit?", a: "Microsoft Outlook allows attachments up to 20MB per email. Outlook.com (Hotmail) has the same 20MB limit. For larger files, split or compress your PDF." },
                { q: "Should I split or compress my PDF for email?", a: "Try compressing first — it's simpler. If the compressed PDF is still too large, split it into parts. PDF.it offers both tools: Compress PDF and Split PDF." },
                { q: "Can I split a PDF into parts of a specific file size?", a: "Yes. PDF.it lets you split by page ranges, so you can estimate how many pages fit under your target size. For precise control, split into small sections and check each file's size." },
                { q: "How do I recombine the split PDFs after sending?", a: "The recipient can use PDF.it's Merge PDF tool to combine all the parts back into a single document. Share this link with them: pdf.it.com/merge-pdf" },
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

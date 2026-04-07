import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileArchiveIcon as Compress, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Compress a PDF (Reduce File Size Fast) | PDF.it",
  description:
    "Learn how to compress a PDF and reduce file size in seconds. Step-by-step guide with tips for email, uploads, and scanned documents — free, online, no software needed.",
  keywords: "compress pdf, reduce pdf file size, how to compress a pdf, shrink pdf, make pdf smaller",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I compress a PDF for free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it, choose a compression level (Light, Medium, or Extreme), click Compress, and download the smaller file. No signup required for your first 3 files." }
    },
    {
      "@type": "Question",
      "name": "Will compressing a PDF reduce the quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "Light compression keeps quality nearly identical to the original. Medium balances size and quality. Extreme compression reduces file size the most but may slightly reduce image quality. Text always stays sharp and readable." }
    },
    {
      "@type": "Question",
      "name": "Why is my PDF so large?",
      "acceptedAnswer": { "@type": "Answer", "text": "Large PDFs are usually caused by embedded high-resolution images, scanned pages, or embedded fonts. Scanned documents are the biggest culprit — a single scanned page can be 2-5MB because it's stored as a full-page image." }
    },
    {
      "@type": "Question",
      "name": "Can I compress a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in any mobile browser — upload your PDF, compress it, and download the result directly on iPhone or Android. No app needed." }
    },
    {
      "@type": "Question",
      "name": "How small can I make a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "It depends on the content. A 10MB scanned PDF might compress to 1-3MB. A text-heavy 5MB PDF might drop to 500KB. Extreme compression gives the maximum reduction, but results vary based on how much image data the PDF contains." }
    },
    {
      "@type": "Question",
      "name": "What's the difference between Light, Medium, and Extreme compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Light keeps images at high quality (smallest size reduction). Medium balances quality and size (good for most uses). Extreme aggressively reduces image quality for maximum file size reduction (best for upload portals with strict limits)." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Compress a PDF Online",
  "description": "Reduce your PDF file size in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your PDF",
      "text": "Go to PDF.it's Compress PDF tool and upload your file by clicking or dragging it into the upload area."
    },
    {
      "@type": "HowToStep",
      "name": "Choose compression level",
      "text": "Select Light (best quality), Medium (balanced), or Extreme (maximum reduction) depending on your needs."
    },
    {
      "@type": "HowToStep",
      "name": "Download your compressed PDF",
      "text": "Click Compress PDF and download the smaller file. Check the file size — if it's still too large, try a higher compression level or split the PDF first."
    }
  ]
}

export default function HowToCompressPDFPage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Compress PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">How to Compress a PDF (Reduce File Size Fast)</h1>
              <p className="text-xl text-slate-300">
                Your PDF is too large for email, an upload portal, or a submission form. Here's how to compress it in under 30 seconds — no software, no signup.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <Compress className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Ready to compress? Skip the guide and go straight to the tool.</p>
            </div>
            <Link
              href="/compress-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Compress PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why PDFs are large */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Is Your PDF So Large?</h2>
              <p className="text-slate-600 mb-4">
                Before compressing, it helps to understand <strong>why</strong> your PDF is big. The most common causes:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Scanned pages.</strong> Each scanned page is stored as a full-page image (often 2-5MB per page). A 10-page scanned document can easily hit 20-50MB.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>High-resolution images.</strong> Photos, charts, and graphics embedded at print quality (300 DPI) take up significant space.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Embedded fonts.</strong> PDFs that include custom fonts embed the full font file, adding hundreds of KB per font.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Layers and annotations.</strong> Form fields, comments, and interactive elements add extra data. <Link href="/flatten-pdf" className="text-[#14D8C4] hover:underline">Flattening your PDF</Link> removes these.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Compress a PDF (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your PDF",
                    desc: "Go to the Compress PDF tool and drag your file into the upload area, or click to browse. Files up to 25MB are free — Pro users can upload up to 200MB.",
                  },
                  {
                    title: "Choose your compression level",
                    desc: "Pick Light (minimal quality loss), Medium (good balance), or Extreme (maximum size reduction). For email attachments, Medium usually works. For strict upload limits (2MB, 5MB), try Extreme.",
                  },
                  {
                    title: "Download the compressed PDF",
                    desc: "Click Compress PDF. Once processing is done, download your smaller file. Check the new size — if it's still too large, try a higher compression level or split the PDF into parts first.",
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

            {/* Which compression level */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Which Compression Level Should You Use?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Level</th>
                      <th className="text-left py-3 px-4 font-bold">Best For</th>
                      <th className="text-left py-3 px-4 font-bold">Quality</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">Light</td>
                      <td className="py-3 px-4">Sharing documents where quality matters (reports, portfolios)</td>
                      <td className="py-3 px-4">Near-original</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">Medium</td>
                      <td className="py-3 px-4">Email attachments, general sharing, most upload portals</td>
                      <td className="py-3 px-4">Good — text stays sharp</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">Extreme</td>
                      <td className="py-3 px-4">Strict upload limits (1MB, 2MB, 5MB), government portals, visa forms</td>
                      <td className="py-3 px-4">Reduced — images may lose detail</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Still too large */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">PDF Still Too Large After Compression?</h2>
              <p className="text-slate-600 mb-4">
                If compression alone doesn't get your file small enough, try these approaches:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Split the PDF</strong> into smaller parts using <Link href="/split-pdf" className="text-[#14D8C4] hover:underline">Split PDF</Link>, then compress each part separately.</li>
                <li>✓ <strong>Flatten the PDF</strong> first with <Link href="/flatten-pdf" className="text-[#14D8C4] hover:underline">Flatten PDF</Link> to remove form fields and annotations before compressing.</li>
                <li>✓ <strong>Try Extreme compression</strong> if you haven't already — it gives the maximum size reduction.</li>
                <li>✓ <strong>Remove unnecessary pages</strong> using <Link href="/remove-pages-from-pdf" className="text-[#14D8C4] hover:underline">Remove Pages</Link> before compressing.</li>
              </ul>
            </section>

            {/* Tips for specific use cases */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Compression Tips for Common Scenarios</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">For Email Attachments</h3>
                  <p className="text-slate-600">
                    Gmail, Outlook, and Yahoo cap attachments at 20-25MB. Medium compression usually gets PDFs under this limit. For tighter limits, try our <Link href="/compress-pdf-for-email" className="text-[#14D8C4] hover:underline">Compress for Email</Link> tool which is optimized for email services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">For Upload Portals (Government, Visa, Exams)</h3>
                  <p className="text-slate-600">
                    Many portals require PDFs under 2MB or 5MB. Use Extreme compression, and if the file is still too large, split it into individual pages first. See our dedicated tools for <Link href="/compress-pdf-to-2mb" className="text-[#14D8C4] hover:underline">2MB limits</Link> and <Link href="/compress-pdf-to-5mb" className="text-[#14D8C4] hover:underline">5MB limits</Link>.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">For Scanned Documents</h3>
                  <p className="text-slate-600">
                    Scanned PDFs compress dramatically because they're mostly images. Extreme compression can reduce a 20MB scanned document to 2-4MB while keeping text readable. See <Link href="/compress-scanned-pdf" className="text-[#14D8C4] hover:underline">Compress Scanned PDF</Link> for more tips.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Compress Your PDF?</h2>
            <p className="text-slate-300 mb-6">Upload your file and reduce the size in seconds — free, no signup required.</p>
            <Link
              href="/compress-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Compress className="h-5 w-5" /> Compress PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "Compress a PDF for Email (Get Under Upload Limits)", href: "/learn/compress-pdf-for-email" },
                { title: "PDF Still Too Large After Compression? Try This Checklist", href: "/learn/pdf-still-too-large-after-compression" },
                { title: "Compress a Scanned PDF Without Ruining Readability", href: "/learn/compress-scanned-pdf" },
                { title: "Reduce PDF Size for Upload Portals (Best Practices)", href: "/learn/reduce-pdf-size-for-upload" },
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
                { q: "How do I compress a PDF for free?", a: "Upload your PDF to PDF.it, choose a compression level (Light, Medium, or Extreme), click Compress, and download the smaller file. No signup required for your first 3 files." },
                { q: "Will compressing a PDF reduce the quality?", a: "Light compression keeps quality nearly identical to the original. Medium balances size and quality. Extreme compression reduces file size the most but may slightly reduce image quality. Text always stays sharp and readable." },
                { q: "Why is my PDF so large?", a: "Large PDFs are usually caused by embedded high-resolution images, scanned pages, or embedded fonts. Scanned documents are the biggest culprit — a single scanned page can be 2-5MB." },
                { q: "Can I compress a PDF on my phone?", a: "Yes. PDF.it works in any mobile browser — upload your PDF, compress it, and download the result directly on iPhone or Android. No app needed." },
                { q: "How small can I make a PDF?", a: "It depends on the content. A 10MB scanned PDF might compress to 1-3MB. A text-heavy 5MB PDF might drop to 500KB. Extreme compression gives the maximum reduction." },
                { q: "What's the difference between Light, Medium, and Extreme compression?", a: "Light keeps images at high quality (smallest size reduction). Medium balances quality and size (good for most uses). Extreme aggressively reduces image quality for maximum file size reduction." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
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

import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileDown, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Compress a PDF Without Losing Quality | OmnisPDF",
  description:
    "Learn how to reduce PDF file size without losing quality. Keep text sharp and images clear while shrinking your document — step-by-step guide with lossless compression tips.",
  keywords: "compress pdf without losing quality, reduce pdf size keep quality, lossless pdf compression, compress pdf no quality loss",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I compress a PDF without losing quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Light compression removes redundant data, unused fonts, and metadata without touching image quality or text sharpness. The visual result is virtually identical to the original." }
    },
    {
      "@type": "Question",
      "name": "What is lossless PDF compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Lossless compression reduces file size by removing duplicate objects, compressing streams, and stripping metadata — without resampling images or reducing their resolution. The output looks identical to the input." }
    },
    {
      "@type": "Question",
      "name": "How much smaller will my PDF be with lossless compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Typically 10-30% smaller. If the PDF has lots of redundant data or embedded fonts, savings can be higher. For bigger reductions you need lossy compression, which may slightly reduce image quality." }
    },
    {
      "@type": "Question",
      "name": "Will text stay sharp after compressing?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. PDF text is stored as vector data, not images, so compression never affects text sharpness. Only embedded images can be affected, and only if you choose Medium or Extreme compression." }
    },
    {
      "@type": "Question",
      "name": "Should I use Light or Medium compression to keep quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use Light if quality is your top priority — it keeps images at their original resolution. Medium is a good middle ground that slightly reduces image resolution but remains visually indistinguishable for most documents." }
    },
    {
      "@type": "Question",
      "name": "Can I compress a PDF without losing quality on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OmnisPDF works in any mobile browser. Upload your PDF, select Light compression, and download the result. No app needed — works on iPhone and Android." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Compress a PDF Without Losing Quality",
  "description": "Reduce PDF file size while keeping text and images at full quality in 3 simple steps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your PDF",
      "text": "Go to OmnisPDF's Compress PDF tool and upload the file you want to shrink by clicking or dragging it into the upload area."
    },
    {
      "@type": "HowToStep",
      "name": "Select Light compression",
      "text": "Choose the Light compression level to keep images at their original resolution while removing redundant data, unused fonts, and metadata."
    },
    {
      "@type": "HowToStep",
      "name": "Download your compressed PDF",
      "text": "Click Compress PDF and download the smaller file. Compare it to the original to verify quality is preserved."
    }
  ]
}

export default function CompressPDFWithoutQualityLossPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Compress PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">How to Compress a PDF Without Losing Quality</h1>
              <p className="text-xl text-slate-300">
                You need a smaller PDF, but you can&apos;t afford blurry images or degraded text. Here&apos;s how to reduce file size while keeping your document looking sharp.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileDown className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Ready to compress? Skip the guide and go straight to the tool.</p>
            </div>
            <Link
              href="/compress-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Compress PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* What is lossless compression */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What Is Lossless PDF Compression?</h2>
              <p className="text-slate-600 mb-4">
                When people say &quot;compress without quality loss,&quot; they mean <strong>lossless compression</strong>. This technique reduces file size by removing data the PDF doesn&apos;t actually need — without touching the visible content:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Redundant objects.</strong> PDFs often store duplicate fonts, color profiles, and metadata. Lossless compression merges these into single instances.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Unused data streams.</strong> Editing software sometimes leaves orphaned objects in the file. Compression strips them out.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Metadata and thumbnails.</strong> Author info, revision history, and embedded thumbnails add kilobytes that most people never see.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Form fields and layers.</strong> Interactive elements add overhead. <Link href="/flatten-pdf" className="text-orange-600 hover:underline">Flattening your PDF</Link> removes them without affecting how the document looks when printed or viewed.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Compress Without Losing Quality (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your PDF",
                    desc: "Go to the Compress PDF tool and drag your file into the upload area. Files up to 25MB are free — Pro users can upload files up to 200MB.",
                  },
                  {
                    title: "Select Light compression",
                    desc: "Choose the Light level. This keeps images at their original resolution and only removes redundant data. For most documents, the result is visually identical to the original.",
                  },
                  {
                    title: "Download and compare",
                    desc: "Click Compress PDF and download the result. Open both files side by side — you should see no visible difference. Typical savings: 10-30% file size reduction.",
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

            {/* Light vs Medium vs Extreme */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Light vs. Medium vs. Extreme: Which Keeps Quality?</h2>
              <p className="text-slate-600 mb-4">
                Understanding the trade-off between file size and quality helps you pick the right level:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Level</th>
                      <th className="text-left py-3 px-4 font-bold">Quality Impact</th>
                      <th className="text-left py-3 px-4 font-bold">Typical Savings</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Light</td>
                      <td className="py-3 px-4">None — images untouched, text stays sharp</td>
                      <td className="py-3 px-4">10-30%</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">Medium</td>
                      <td className="py-3 px-4">Slight image resampling — unnoticeable on screen</td>
                      <td className="py-3 px-4">30-60%</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Extreme</td>
                      <td className="py-3 px-4">Visible quality loss on high-res images and photos</td>
                      <td className="py-3 px-4">60-80%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4">
                For quality-sensitive documents like portfolios, client reports, and print-ready files, stick with <strong>Light</strong>. If you need a bigger reduction but still want good quality, <strong>Medium</strong> is the sweet spot — text remains perfectly sharp, and image quality is still excellent for on-screen viewing.
              </p>
            </section>

            {/* Extra techniques */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Extra Techniques to Reduce Size Without Losing Quality</h2>
              <p className="text-slate-600 mb-4">
                Beyond choosing Light compression, there are several other strategies that reduce file size without touching visual quality:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Flatten the PDF.</strong> Use <Link href="/flatten-pdf" className="text-orange-600 hover:underline">Flatten PDF</Link> to merge form fields, annotations, and layers into the page content. This can remove significant overhead without changing the visual output.</li>
                <li>&#10003; <strong>Remove unnecessary pages.</strong> If your PDF has blank pages or sections you don&apos;t need, use <Link href="/split-pdf" className="text-orange-600 hover:underline">Split PDF</Link> to extract only the pages you want, then <Link href="/merge-pdf" className="text-orange-600 hover:underline">merge them back</Link>.</li>
                <li>&#10003; <strong>Convert images to PDF separately.</strong> If you&apos;re including photos, convert them to the right size before embedding. Oversized photos are the biggest source of unnecessary file bloat.</li>
                <li>&#10003; <strong>Use Upload Ready PDF.</strong> Our <Link href="/upload-ready-pdf" className="text-orange-600 hover:underline">Upload Ready PDF</Link> tool chains flattening and compression together for the best result in one step.</li>
              </ul>
            </section>

            {/* When to accept some quality loss */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">When You Might Need to Accept Some Quality Loss</h2>
              <p className="text-slate-600 mb-4">
                Lossless compression has limits. If your file needs to hit a strict size target, you may need Medium or Extreme compression. Here&apos;s when that makes sense:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Strict Upload Limits</h3>
                  <p className="text-slate-600">
                    Government portals, visa applications, and exam submissions often cap files at 2MB or 5MB. If Light compression doesn&apos;t get you there, try our dedicated <Link href="/compress-pdf-to-2mb" className="text-orange-600 hover:underline">Compress to 2MB</Link> or <Link href="/compress-pdf-to-5mb" className="text-orange-600 hover:underline">Compress to 5MB</Link> tools.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Email Attachments</h3>
                  <p className="text-slate-600">
                    Most email services cap attachments at 20-25MB. If your PDF is close to that limit, Medium compression will get it under while keeping text and charts perfectly readable. See our <Link href="/compress-pdf-for-email" className="text-orange-600 hover:underline">Compress for Email</Link> guide.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Very Large Files (50MB+)</h3>
                  <p className="text-slate-600">
                    For very large PDFs with hundreds of pages or high-res photos, even Medium compression may be needed. Consider splitting the file first with <Link href="/split-pdf" className="text-orange-600 hover:underline">Split PDF</Link>, then compressing each part.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Compress Without Losing Quality?</h2>
            <p className="text-slate-300 mb-6">Upload your PDF and reduce the file size while keeping every detail intact — free, no signup required.</p>
            <Link
              href="/compress-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <FileDown className="h-5 w-5" /> Compress PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Compress a PDF (Reduce File Size Fast)", href: "/learn/how-to-compress-a-pdf" },
                { title: "Compress a PDF for Printing (Keep Print Quality)", href: "/learn/compress-pdf-for-printing" },
                { title: "How to Compress a Large PDF (50MB, 100MB, or More)", href: "/learn/compress-large-pdf" },
                { title: "Compress a PDF with Images (Photos, Scans, Graphics)", href: "/learn/compress-pdf-with-images" },
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
                { q: "Can I compress a PDF without losing quality?", a: "Yes. Light compression removes redundant data, unused fonts, and metadata without touching image quality or text sharpness. The visual result is virtually identical to the original." },
                { q: "What is lossless PDF compression?", a: "Lossless compression reduces file size by removing duplicate objects, compressing streams, and stripping metadata — without resampling images or reducing their resolution. The output looks identical to the input." },
                { q: "How much smaller will my PDF be with lossless compression?", a: "Typically 10-30% smaller. If the PDF has lots of redundant data or embedded fonts, savings can be higher. For bigger reductions you need lossy compression, which may slightly reduce image quality." },
                { q: "Will text stay sharp after compressing?", a: "Absolutely. PDF text is stored as vector data, not images, so compression never affects text sharpness. Only embedded images can be affected, and only if you choose Medium or Extreme compression." },
                { q: "Should I use Light or Medium compression to keep quality?", a: "Use Light if quality is your top priority — it keeps images at their original resolution. Medium is a good middle ground that slightly reduces image resolution but remains visually indistinguishable for most documents." },
                { q: "Can I compress a PDF without losing quality on my phone?", a: "Yes. OmnisPDF works in any mobile browser. Upload your PDF, select Light compression, and download the result. No app needed — works on iPhone and Android." },
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

import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileDown, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Compress a Large PDF (50MB, 100MB, or More) | PDF.it",
  description:
    "Learn how to compress very large PDFs — 50MB, 100MB, or bigger. Step-by-step strategies for shrinking huge files including splitting, multiple passes, and image optimization.",
  keywords: "compress large pdf, reduce large pdf size, compress 100mb pdf, shrink big pdf file",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I compress a PDF that is over 100MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload it to PDF.it's Compress PDF tool (Pro users can upload files up to 200MB). Use Extreme compression for maximum reduction. If it's still too large, split the PDF into smaller sections first, then compress each part separately." }
    },
    {
      "@type": "Question",
      "name": "Why is my PDF over 50MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Large PDFs are almost always caused by high-resolution images or scanned pages. A single scanned page can be 2-5MB, so a 20-page scanned document can easily hit 50-100MB. Embedded photos, charts, and graphics also add up quickly." }
    },
    {
      "@type": "Question",
      "name": "Can I compress a large PDF for free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free users can compress files up to 25MB. For files larger than 25MB, you need PDF.it Pro which supports files up to 200MB. Pro also includes batch processing for compressing multiple large files at once." }
    },
    {
      "@type": "Question",
      "name": "Should I split a large PDF before compressing?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, if compression alone doesn't reduce the file enough. Split the PDF into sections (e.g., 20 pages each), compress each section separately, then merge them back together. This often produces better results than compressing the entire file at once." }
    },
    {
      "@type": "Question",
      "name": "How long does it take to compress a 100MB PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Typically 30-90 seconds depending on page count and content type. Image-heavy files take longer because each image needs to be reprocessed. Pro users get priority processing for faster results." }
    },
    {
      "@type": "Question",
      "name": "Can I compress a large PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, but uploading large files on mobile can be slow depending on your connection. PDF.it works in any mobile browser — upload, compress, and download without installing an app." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Compress a Large PDF",
  "description": "Reduce the size of a large PDF (50MB, 100MB, or more) in 3 simple steps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your large PDF",
      "text": "Go to PDF.it's Compress PDF tool and upload your file. Pro users can upload files up to 200MB."
    },
    {
      "@type": "HowToStep",
      "name": "Choose Extreme compression",
      "text": "For very large files, start with Extreme compression for maximum size reduction. If quality matters, try Medium first and see if the result is small enough."
    },
    {
      "@type": "HowToStep",
      "name": "Download or split and retry",
      "text": "Download the compressed file. If it's still too large, split the PDF into smaller sections, compress each part, then merge them back together."
    }
  ]
}

export default function CompressLargePDFPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">How to Compress a Large PDF (50MB, 100MB, or More)</h1>
              <p className="text-xl text-slate-300">
                Your PDF is enormous — too big for email, upload portals, or even cloud storage limits. Here&apos;s how to shrink massive files down to a manageable size.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <FileDown className="h-5 w-5 text-white" />
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

            {/* Why PDFs get so large */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why PDFs Get So Large</h2>
              <p className="text-slate-600 mb-4">
                A PDF doesn&apos;t have to be hundreds of pages to be huge. Understanding what makes files balloon helps you choose the right compression strategy:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Scanned documents.</strong> Every scanned page is a full-page image at 200-400 DPI. A 50-page scanned document can easily reach 100-200MB. This is the most common cause of oversized PDFs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Embedded photographs.</strong> Reports with product photos, real estate listings with property images, and portfolios with high-res artwork all create massive files.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>CAD drawings and technical diagrams.</strong> Engineering PDFs with vector graphics and detailed schematics can be 50-100MB per page.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Merged files.</strong> When you <Link href="/merge-pdf" className="text-[#14D8C4] hover:underline">merge multiple PDFs</Link> together, the sizes stack up. A set of 10 reports at 10MB each becomes a 100MB monster.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Compress a Large PDF (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your large PDF",
                    desc: "Go to the Compress PDF tool and upload your file. Free users can upload files up to 25MB. Pro users can handle files up to 200MB — which covers the vast majority of oversized PDFs.",
                  },
                  {
                    title: "Start with Extreme compression",
                    desc: "For very large files, start with Extreme compression. This gives maximum size reduction — often shrinking a 100MB file to 10-30MB. If the quality isn't acceptable, try Medium instead.",
                  },
                  {
                    title: "Download and check the result",
                    desc: "Download the compressed file. If it's still too large for your needs, move to the split-and-compress strategy below. If quality is fine but size needs more reduction, try a second compression pass.",
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

            {/* Split and compress strategy */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">The Split-and-Compress Strategy</h2>
              <p className="text-slate-600 mb-4">
                When a single compression pass isn&apos;t enough, splitting the PDF first often produces dramatically better results. Here&apos;s the process:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Split the PDF into sections.</strong> Use <Link href="/split-pdf" className="text-[#14D8C4] hover:underline">Split PDF</Link> to break your large file into chunks of 10-20 pages each.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Compress each section separately.</strong> Upload each chunk to <Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">Compress PDF</Link> and apply Extreme or Medium compression. Pro users can batch-process all sections at once.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Merge the compressed sections.</strong> Use <Link href="/merge-pdf" className="text-[#14D8C4] hover:underline">Merge PDF</Link> to combine the compressed chunks back into a single file. The result is often 50-70% smaller than direct compression alone.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                This works because the compression algorithm can process smaller files more efficiently, and each section gets individually optimized.
              </p>
            </section>

            {/* Size targets */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Hitting Specific Size Targets</h2>
              <p className="text-slate-600 mb-4">
                Many upload portals have strict file size limits. Here&apos;s how to hit common targets with large PDFs:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Target Size</th>
                      <th className="text-left py-3 px-4 font-bold">Strategy</th>
                      <th className="text-left py-3 px-4 font-bold">Best Tool</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">Under 25MB</td>
                      <td className="py-3 px-4">Extreme compression, flatten first</td>
                      <td className="py-3 px-4"><Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">Compress PDF</Link></td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">Under 5MB</td>
                      <td className="py-3 px-4">Split + Extreme + merge, or dedicated tool</td>
                      <td className="py-3 px-4"><Link href="/compress-pdf-to-5mb" className="text-[#14D8C4] hover:underline">Compress to 5MB</Link></td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">Under 2MB</td>
                      <td className="py-3 px-4">Split into individual pages, extreme compression on each</td>
                      <td className="py-3 px-4"><Link href="/compress-pdf-to-2mb" className="text-[#14D8C4] hover:underline">Compress to 2MB</Link></td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">Email-friendly</td>
                      <td className="py-3 px-4">Medium or Extreme, target under 20MB</td>
                      <td className="py-3 px-4"><Link href="/compress-pdf-for-email" className="text-[#14D8C4] hover:underline">Compress for Email</Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Advanced tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Advanced Tips for Very Large Files</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Flatten Before Compressing</h3>
                  <p className="text-slate-600">
                    Large PDFs from design software often contain layers, annotations, and form fields that add significant overhead. Use <Link href="/flatten-pdf" className="text-[#14D8C4] hover:underline">Flatten PDF</Link> first to merge everything into flat page content, then compress. This alone can cut 10-20% off file size before compression even starts.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Extract and Replace Images</h3>
                  <p className="text-slate-600">
                    If your PDF has a few extremely large images driving up the file size, use <Link href="/extract-images-from-pdf" className="text-[#14D8C4] hover:underline">Extract Images</Link> to pull them out, resize them externally, and rebuild the document. Sometimes one or two photos account for 80% of the file size.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convert Scanned Pages to Searchable Text</h3>
                  <p className="text-slate-600">
                    If your large PDF is a scanned document, run it through <Link href="/ocr-scanner" className="text-[#14D8C4] hover:underline">OCR Scanner</Link> to convert images to searchable text. While this doesn&apos;t always reduce size on its own, it enables better compression in subsequent passes because text compresses far more efficiently than images.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use Upload Ready PDF</h3>
                  <p className="text-slate-600">
                    Our <Link href="/upload-ready-pdf" className="text-[#14D8C4] hover:underline">Upload Ready PDF</Link> tool chains flattening and compression in a single step — perfect for getting large files ready for upload portals quickly.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Shrink Your Large PDF?</h2>
            <p className="text-slate-300 mb-6">Upload your oversized file and compress it in seconds — Pro users can handle files up to 200MB.</p>
            <Link
              href="/compress-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <FileDown className="h-5 w-5" /> Compress PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Compress a PDF (Reduce File Size Fast)", href: "/learn/how-to-compress-a-pdf" },
                { title: "How to Compress a PDF Without Losing Quality", href: "/learn/compress-pdf-without-quality-loss" },
                { title: "Compress a PDF for Printing (Keep Print Quality)", href: "/learn/compress-pdf-for-printing" },
                { title: "Compress a PDF with Images (Photos, Scans, Graphics)", href: "/learn/compress-pdf-with-images" },
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
                { q: "How do I compress a PDF that is over 100MB?", a: "Upload it to PDF.it's Compress PDF tool (Pro users can upload files up to 200MB). Use Extreme compression for maximum reduction. If it's still too large, split the PDF into smaller sections first, then compress each part separately." },
                { q: "Why is my PDF over 50MB?", a: "Large PDFs are almost always caused by high-resolution images or scanned pages. A single scanned page can be 2-5MB, so a 20-page scanned document can easily hit 50-100MB." },
                { q: "Can I compress a large PDF for free?", a: "Free users can compress files up to 25MB. For files larger than 25MB, you need PDF.it Pro which supports files up to 200MB and includes batch processing." },
                { q: "Should I split a large PDF before compressing?", a: "Yes, if compression alone doesn't reduce the file enough. Split into sections, compress each separately, then merge them back. This often produces better results than compressing the entire file at once." },
                { q: "How long does it take to compress a 100MB PDF?", a: "Typically 30-90 seconds depending on page count and content type. Image-heavy files take longer. Pro users get priority processing for faster results." },
                { q: "Can I compress a large PDF on my phone?", a: "Yes, but uploading large files on mobile can be slow depending on your connection. PDF.it works in any mobile browser — no app installation needed." },
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

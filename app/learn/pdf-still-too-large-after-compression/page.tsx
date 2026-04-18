import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileArchiveIcon as Compress, ArrowRight } from "lucide-react"

export const metadata = {
  title: "PDF Still Too Large After Compression? Try This Checklist | PDF.it",
  description:
    "Compressed your PDF but it's still too big? This checklist explains why and shows 7 proven fixes — for scanned files, images, fonts, and strict upload limits.",
  keywords: "pdf still too large after compression, pdf not getting smaller, why is my pdf still large, pdf compression not working, reduce pdf size further",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is my PDF still too large after compression?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most common reasons are: the PDF is mostly scanned images (which compress differently than text), the images inside are already heavily compressed and can't shrink further, or the file contains embedded fonts and form fields that add overhead. Try switching to a higher compression level, flattening the PDF first, or splitting it into smaller parts."
      }
    },
    {
      "@type": "Question",
      "name": "What is the maximum compression you can get on a PDF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends entirely on the content. A scanned PDF full of high-resolution images might compress 80–90% with Extreme compression. A text-only PDF that's already been compressed once might only shrink 5–10% because the data is already efficient. There is no universal maximum — content type determines the limit."
      }
    },
    {
      "@type": "Question",
      "name": "Does compressing a PDF twice help?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A second compression pass sometimes helps if the first pass used Light or Medium settings — switching to Extreme on the second run can squeeze more out. However, compressing an already-Extreme-compressed file a second time produces very little additional reduction and may degrade image quality without meaningfully reducing size."
      }
    },
    {
      "@type": "Question",
      "name": "How do I compress a scanned PDF that won't get smaller?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use the Compress Scanned PDF tool, which applies image-specific compression tuned for scanned pages. If the file is still too large, split it into sections of 5–10 pages, compress each section separately, then merge them back together. This often achieves better results than compressing the whole file at once."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Gmail attachment size limit for PDFs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gmail allows attachments up to 25MB. Outlook caps attachments at 20MB. WhatsApp allows documents up to 100MB. If your compressed PDF still exceeds these limits, try Extreme compression, split the file, or use a cloud link instead of an attachment."
      }
    },
    {
      "@type": "Question",
      "name": "Should I flatten my PDF before compressing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — if your PDF has form fields, annotations, or layers. Flattening merges those elements into flat page content, removing the extra data structures they require. This can reduce file size by 10–30% before compression even starts, and it makes subsequent compression more effective."
      }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Reduce a PDF That Is Still Too Large After Compression",
  "description": "A step-by-step process for shrinking a PDF when standard compression hasn't worked.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Flatten the PDF to remove hidden overhead",
      "text": "Go to PDF.it's Flatten PDF tool and upload your file. Flattening removes form fields, annotations, and layers — elements that add file size but are invisible in the final printout. Download the flattened file before compressing."
    },
    {
      "@type": "HowToStep",
      "name": "Run Extreme compression on the flattened file",
      "text": "Upload the flattened PDF to the Compress PDF tool and select Extreme compression. This aggressively reduces image quality for maximum size reduction. Download and check the file size against your target limit."
    },
    {
      "@type": "HowToStep",
      "name": "Split the file if it is still too large",
      "text": "If the file is still above your size limit, use the Split PDF tool to divide it into sections of 5–10 pages. Compress each section separately with Extreme compression, then use Merge PDF to combine the compressed sections back into one file."
    }
  ]
}

export default function PDFStillTooLargeAfterCompressionPage() {
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
        <section
          className="text-white py-16 relative overflow-hidden"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E`,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">
                Learn / Compress PDF
              </p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">
                PDF Still Too Large After Compression? Try This Checklist
              </h1>
              <p className="text-xl text-slate-300">
                You ran the compressor. The file barely moved. Here&apos;s exactly why that happens — and the step-by-step fixes that actually work.
              </p>
            </div>
          </div>
        </section>

        {/* Inline CTA */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <Compress className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">
                Want to skip straight to compressing? The tool is ready now — no signup required.
              </p>
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

            {/* What Is "Still Too Large" */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Compression Sometimes Barely Helps</h2>
              <p className="text-slate-600 mb-4">
                PDF compression works by reducing image quality and removing redundant data. The problem is that some PDFs have very little room to shrink. If the content is already compact — or if the file is full of a specific type of data — a compressor hits a wall quickly.
              </p>
              <p className="text-slate-600 mb-4">
                The four most common reasons a PDF won&apos;t compress further:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span>
                    <strong>Scanned pages stored as images.</strong> Each scanned page is a full-page photograph. At 200–400 DPI, one page alone can be 2–5MB. Standard compression helps, but a specialized{" "}
                    <Link href="/compress-scanned-pdf" className="text-[#14D8C4] hover:underline">
                      scanned PDF compressor
                    </Link>{" "}
                    applies image-specific algorithms that work far better on this type of content.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span>
                    <strong>Embedded high-resolution images.</strong> Photos, charts, and diagrams embedded at print quality (300 DPI) add significant weight. If your PDF contains many images, the file is mostly image data — and compressing image data has diminishing returns after the first pass.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span>
                    <strong>Embedded fonts and form fields.</strong> PDFs that include custom fonts embed the complete font file — often 200–500KB per font. Form fields, checkboxes, and interactive elements add a separate data layer on top of the page content.{" "}
                    <Link href="/flatten-pdf" className="text-[#14D8C4] hover:underline">
                      Flattening the PDF
                    </Link>{" "}
                    removes this overhead before you compress.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span>
                    <strong>Already compressed images inside the file.</strong> If the images in your PDF were exported at low quality before being inserted, they can&apos;t compress much further — the data is already stripped. A compressor can only work with what&apos;s there.
                  </span>
                </li>
              </ul>
            </section>

            {/* How To (Step by Step) */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">
                How to Reduce a PDF That Is Still Too Large After Compression
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Flatten the PDF to remove hidden overhead",
                    desc: "Go to PDF.it's Flatten PDF tool and upload your file. Flattening removes form fields, annotations, and layers — elements that add file size but are invisible in the final printout. Download the flattened file before compressing.",
                  },
                  {
                    title: "Run Extreme compression on the flattened file",
                    desc: "Upload the flattened PDF to the Compress PDF tool and select Extreme compression. This aggressively reduces image quality for maximum size reduction. Download and check the file size against your target limit.",
                  },
                  {
                    title: "Split the file if it is still too large",
                    desc: "If the file is still above your size limit, use the Split PDF tool to divide it into sections of 5–10 pages. Compress each section separately with Extreme compression, then use Merge PDF to combine the compressed sections back into one file.",
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

            {/* Comparison Table */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">
                Which Fix to Use Based on PDF Type
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">PDF Type</th>
                      <th className="text-left py-3 px-4 font-bold">Why It Won&apos;t Shrink</th>
                      <th className="text-left py-3 px-4 font-bold">Best Fix</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">Scanned document</td>
                      <td className="py-3 px-4">Every page is a full-page image at high DPI</td>
                      <td className="py-3 px-4">
                        <Link href="/compress-scanned-pdf" className="text-[#14D8C4] hover:underline">
                          Compress Scanned PDF
                        </Link>{" "}
                        tool, or split into sections then compress
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">PDF with photos or graphics</td>
                      <td className="py-3 px-4">High-res images haven&apos;t been compressed yet</td>
                      <td className="py-3 px-4">Extreme compression via{" "}
                        <Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">
                          Compress PDF
                        </Link>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">PDF with forms or annotations</td>
                      <td className="py-3 px-4">Form fields and layers add a hidden data layer</td>
                      <td className="py-3 px-4">
                        <Link href="/flatten-pdf" className="text-[#14D8C4] hover:underline">
                          Flatten PDF
                        </Link>{" "}
                        first, then compress
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 text-sm mt-4">
                If you&apos;re unsure what type of content your PDF contains, try flattening first — it never hurts, and it makes every other fix more effective.
              </p>
            </section>

            {/* Extra Techniques */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">More Ways to Get Under Your Size Limit</h2>
              <ul className="space-y-3 text-slate-700">
                <li>
                  &#10003;{" "}
                  <strong>Use the Fast Compressor for a second pass.</strong> If your first compression used standard settings,{" "}
                  <Link href="/compress-pdf-fast" className="text-[#14D8C4] hover:underline">
                    Compress PDF Fast
                  </Link>{" "}
                  applies a different optimization pass that can recover additional size savings.
                </li>
                <li>
                  &#10003;{" "}
                  <strong>Split then compress individually.</strong>{" "}
                  <Link href="/how-to-split-pdf" className="text-[#14D8C4] hover:underline">
                    Split the PDF
                  </Link>{" "}
                  into sections of 5–10 pages, compress each chunk with Extreme compression, then{" "}
                  <Link href="/how-to-merge-pdf-files" className="text-[#14D8C4] hover:underline">
                    merge them back together
                  </Link>
                  . Compressors work more efficiently on smaller files.
                </li>
                <li>
                  &#10003;{" "}
                  <strong>Remove unnecessary pages before compressing.</strong> Delete cover pages, blank pages, or appendices you don&apos;t need. Fewer pages means a smaller baseline before any compression happens.
                </li>
                <li>
                  &#10003;{" "}
                  <strong>Use the Scanned PDF compressor for scan-heavy files.</strong>{" "}
                  <Link href="/compress-scanned-pdf" className="text-[#14D8C4] hover:underline">
                    Compress Scanned PDF
                  </Link>{" "}
                  is optimized specifically for documents that are entirely or mostly scanned images — it applies algorithms tuned for this content type rather than generic compression.
                </li>
              </ul>
            </section>

            {/* Troubleshooting */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Troubleshooting Common Scenarios</h2>
              <div className="space-y-6">

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    My PDF compressed from 40MB to 35MB — I need it under 25MB for Gmail
                  </h3>
                  <p className="text-slate-600">
                    Gmail&apos;s attachment limit is 25MB. Outlook is even stricter at 20MB. If you&apos;re 5–10MB over the limit after one compression pass, the fastest fix is to flatten first, then run Extreme compression. If that&apos;s still not enough,{" "}
                    <Link href="/split-pdf-for-email" className="text-[#14D8C4] hover:underline">
                      split the PDF
                    </Link>{" "}
                    and send it in two parts, or compress each section individually and share via a cloud link.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    The PDF is a scanned contract and barely shrank at all
                  </h3>
                  <p className="text-slate-600">
                    Scanned contracts are typically scanned at 300 DPI or higher, making each page a large photograph. Standard compression tools aren&apos;t designed specifically for this. Use the{" "}
                    <Link href="/compress-scanned-pdf" className="text-[#14D8C4] hover:underline">
                      Compress Scanned PDF
                    </Link>{" "}
                    tool, which targets image DPI reduction and scan-specific compression. A 10MB scanned page can often reach 500KB–1MB with the right tool.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    I need the PDF under 2MB for a government portal or visa application
                  </h3>
                  <p className="text-slate-600">
                    Government portals and visa application forms often enforce strict 1MB or 2MB per-file limits. For a multi-page document, this usually means splitting into individual pages and compressing each one separately with Extreme compression. A single scanned page at Extreme compression typically lands between 200KB and 600KB — well within those limits.
                  </p>
                </div>

              </div>
            </section>

            {/* Platform Limits Reference */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Common Upload and Attachment Size Limits</h2>
              <p className="text-slate-600 mb-4">
                Know your target before you compress. Here are the limits you&apos;re most likely hitting:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Platform</th>
                      <th className="text-left py-3 px-4 font-bold">Limit</th>
                      <th className="text-left py-3 px-4 font-bold">Recommended Approach</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">Gmail</td>
                      <td className="py-3 px-4">25MB per attachment</td>
                      <td className="py-3 px-4">Medium or Extreme compression</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">Outlook</td>
                      <td className="py-3 px-4">20MB per attachment</td>
                      <td className="py-3 px-4">Extreme compression or split + compress</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">WhatsApp</td>
                      <td className="py-3 px-4">100MB per document</td>
                      <td className="py-3 px-4">Light or Medium compression usually enough</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">Government / Visa portals</td>
                      <td className="py-3 px-4">1–5MB per file (varies)</td>
                      <td className="py-3 px-4">Split by page + Extreme compression each</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Still Fighting a Stubborn PDF?</h2>
            <p className="text-slate-300 mb-6">
              Upload your file to PDF.it and let the compressor work on it — free for your first files, no signup required.
            </p>
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
                { title: "How to Compress a PDF (Reduce File Size Fast)", href: "/learn/how-to-compress-a-pdf" },
                { title: "How to Compress a Large PDF (50MB, 100MB, or More)", href: "/learn/compress-large-pdf" },
                { title: "How to Compress a PDF Without Losing Quality", href: "/learn/compress-pdf-without-quality-loss" },
                { title: "How to Compress a PDF with Images", href: "/learn/compress-pdf-with-images" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">
                    {article.title}
                  </span>
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
                {
                  q: "Why is my PDF still too large after compression?",
                  a: "The most common reasons are: the PDF is mostly scanned images (which compress differently than text), the images inside are already heavily compressed and can't shrink further, or the file contains embedded fonts and form fields that add overhead. Try switching to a higher compression level, flattening the PDF first, or splitting it into smaller parts.",
                },
                {
                  q: "What is the maximum compression you can get on a PDF?",
                  a: "It depends entirely on the content. A scanned PDF full of high-resolution images might compress 80–90% with Extreme compression. A text-only PDF that's already been compressed once might only shrink 5–10% because the data is already efficient. There is no universal maximum — content type determines the limit.",
                },
                {
                  q: "Does compressing a PDF twice help?",
                  a: "A second compression pass sometimes helps if the first pass used Light or Medium settings — switching to Extreme on the second run can squeeze more out. However, compressing an already-Extreme-compressed file a second time produces very little additional reduction and may degrade image quality without meaningfully reducing size.",
                },
                {
                  q: "How do I compress a scanned PDF that won't get smaller?",
                  a: "Use the Compress Scanned PDF tool, which applies image-specific compression tuned for scanned pages. If the file is still too large, split it into sections of 5–10 pages, compress each section separately, then merge them back together. This often achieves better results than compressing the whole file at once.",
                },
                {
                  q: "What is the Gmail attachment size limit for PDFs?",
                  a: "Gmail allows attachments up to 25MB. Outlook caps attachments at 20MB. WhatsApp allows documents up to 100MB. If your compressed PDF still exceeds these limits, try Extreme compression, split the file, or use a cloud link instead of an attachment.",
                },
                {
                  q: "Should I flatten my PDF before compressing?",
                  a: "Yes — if your PDF has form fields, annotations, or layers. Flattening merges those elements into flat page content, removing the extra data structures they require. This can reduce file size by 10–30% before compression even starts, and it makes subsequent compression more effective.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
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

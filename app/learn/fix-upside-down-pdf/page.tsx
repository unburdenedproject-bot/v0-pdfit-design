import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { RotateCw, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Fix an Upside-Down PDF (Rotate 180° Instantly) | PDF.it",
  description:
    "Learn how to fix an upside-down PDF by rotating it 180°. Common with scanned documents — fix the orientation instantly online, no software needed.",
  keywords: "fix upside down pdf, pdf upside down, rotate pdf 180, flip pdf right side up",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I fix an upside-down PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload the PDF to PDF.it's Rotate PDF tool, select the upside-down pages, choose 180° rotation, and download the corrected file. The fix takes seconds and is free for files up to 25MB." }
    },
    {
      "@type": "Question",
      "name": "Why is my PDF upside down?",
      "acceptedAnswer": { "@type": "Answer", "text": "This usually happens when a document is placed face-down or at the wrong angle in a scanner. It can also occur with double-sided scanning when the back pages get flipped, or when PDF export software has a rotation bug." }
    },
    {
      "@type": "Question",
      "name": "Can I fix just the upside-down pages without affecting the rest?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it lets you select individual pages to rotate. You can fix only the upside-down pages while leaving correctly oriented pages untouched." }
    },
    {
      "@type": "Question",
      "name": "Will fixing the rotation affect the PDF quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Rotating a PDF only changes the orientation metadata — it does not re-render, compress, or modify the actual content. Text, images, and formatting remain identical." }
    },
    {
      "@type": "Question",
      "name": "Can I fix an upside-down PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in any mobile browser. Open pdf.it.com/rotate-pdf in Safari or Chrome, upload the PDF, rotate 180°, and download the fixed version directly on your phone." }
    },
    {
      "@type": "Question",
      "name": "How do I know if my PDF is upside down or just sideways?",
      "acceptedAnswer": { "@type": "Answer", "text": "If the text reads bottom-to-top (completely inverted), it is upside down and needs a 180° rotation. If the text reads from the side, it is sideways and needs a 90° rotation. PDF.it's preview shows you the current orientation before you apply the fix." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Fix an Upside-Down PDF",
  "description": "Rotate an upside-down PDF 180° in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload the upside-down PDF",
      "text": "Go to PDF.it's Rotate PDF tool and upload the file with upside-down pages by clicking or dragging it into the upload area."
    },
    {
      "@type": "HowToStep",
      "name": "Select 180° rotation",
      "text": "Select the upside-down pages (or all pages if the entire document is inverted) and choose 180° rotation to flip them right-side up."
    },
    {
      "@type": "HowToStep",
      "name": "Download the corrected PDF",
      "text": "Click Rotate and download the fixed PDF. All pages now display right-side up in any PDF viewer."
    }
  ]
}

export default function FixUpsideDownPDFPage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Rotate PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Fix an Upside-Down PDF (Rotate 180° Instantly)</h1>
              <p className="text-xl text-slate-300">
                Opened a PDF and the entire page is upside down? This is one of the most common scanning problems. Here is how to flip it right-side up in seconds.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <RotateCw className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Need a quick fix? Skip the guide and flip your PDF now.</p>
            </div>
            <Link
              href="/rotate-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Fix PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why PDFs end up upside down */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Do PDFs End Up Upside Down?</h2>
              <p className="text-slate-600 mb-4">
                An upside-down PDF is frustrating, but it is more common than you think. Here are the main causes:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Document placed upside down in scanner.</strong> The most common cause. When you put a page face-down in a flatbed scanner at the wrong orientation, the scan comes out inverted. This happens constantly in busy offices.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Double-sided scanning errors.</strong> Automatic document feeders (ADF) on office printers can flip the back side of pages incorrectly, resulting in alternating right-side-up and upside-down pages.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Phone camera orientation.</strong> Taking a photo of a document while holding your phone upside down (or at a 180° angle) produces an inverted image. Even <Link href="/phone-scan-cleanup" className="text-[#14D8C4] hover:underline">Phone Scan Cleanup</Link> cannot always detect this automatically.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Software export bugs.</strong> Some PDF creation tools occasionally apply incorrect rotation metadata, causing pages to display upside down even though the content was created correctly.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Fix an Upside-Down PDF (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload the PDF",
                    desc: "Go to the Rotate PDF tool and upload the file with upside-down pages. Drag it into the upload area or click to browse. Free for files up to 25MB — Pro users get up to 200MB.",
                  },
                  {
                    title: "Select 180° rotation",
                    desc: "If the entire document is upside down, select all pages and choose 180° rotation. If only some pages are inverted (common with double-sided scans), select just those pages. The preview helps you identify which pages need fixing.",
                  },
                  {
                    title: "Download the fixed PDF",
                    desc: "Click Rotate and download the corrected document. Open it in any PDF viewer to confirm every page is right-side up. The fix is permanent — every viewer and printer will display the pages correctly.",
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

            {/* Upside down vs sideways */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Upside Down vs. Sideways: Which Rotation Do You Need?</h2>
              <p className="text-slate-600 mb-4">
                Before rotating, you need to identify what kind of rotation problem your PDF has. Here is how to tell:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Upside Down (Needs 180° Rotation)</h3>
                  <p className="text-slate-600">
                    The text appears completely inverted — you would need to turn your monitor upside down to read it. The top of the page is at the bottom. This is the case covered in this guide. Apply a 180° rotation to fix it.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Sideways Left (Needs 90° Clockwise Rotation)</h3>
                  <p className="text-slate-600">
                    The text runs from bottom to top along the left side of the page. You would need to tilt your head to the right to read it. Apply a 90° clockwise rotation. See our full guide on <Link href="/learn/how-to-rotate-pdf" className="text-[#14D8C4] hover:underline">how to rotate a PDF</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Sideways Right (Needs 90° Counter-Clockwise Rotation)</h3>
                  <p className="text-slate-600">
                    The text runs from top to bottom along the right side of the page. You would need to tilt your head to the left to read it. Apply a 90° counter-clockwise (270°) rotation.
                  </p>
                </div>
              </div>
            </section>

            {/* Double-sided scanning fix */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Fixing Double-Sided Scanning Problems</h2>
              <p className="text-slate-600 mb-4">
                One of the most annoying scenarios is when a double-sided scan produces alternating orientations — odd pages are correct but even pages are upside down, or vice versa. Here is how to handle it:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Select only the upside-down pages.</strong> In PDF.it, you can click individual page thumbnails to select just the inverted pages. Then apply 180° rotation only to those pages.</li>
                <li>&#10003; <strong>Check the pattern.</strong> With ADF scanners, the problem is usually consistent — every other page is flipped. Select all even-numbered pages (or all odd-numbered pages, whichever are wrong) and rotate them together.</li>
                <li>&#10003; <strong>Re-scan if possible.</strong> If you have access to the original documents and scanner, it may be faster to re-scan with the correct duplex settings. But if the originals are not available, PDF.it fixes it instantly.</li>
                <li>&#10003; <strong>Run OCR after fixing.</strong> If the scanned document needs searchable text, fix the rotation first, then use <Link href="/ocr-scanner" className="text-[#14D8C4] hover:underline">OCR Scanner</Link>. OCR works much better when pages are correctly oriented.</li>
              </ul>
            </section>

            {/* After fixing */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Next Steps After Fixing Your PDF</h2>
              <p className="text-slate-600 mb-4">
                Once your pages are right-side up, you might want to take additional steps to prepare the document:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Compress the file.</strong> Scanned PDFs are often unnecessarily large. Use <Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">Compress PDF</Link> to reduce the size — especially useful if you need to email it or upload to a portal with size limits.</li>
                <li>&#10003; <strong>Extract specific pages.</strong> If you only need certain pages from the document, use <Link href="/split-pdf" className="text-[#14D8C4] hover:underline">Split PDF</Link> to extract them into a separate file.</li>
                <li>&#10003; <strong>Merge with other documents.</strong> Need to combine this corrected PDF with other files? Use <Link href="/merge-pdf" className="text-[#14D8C4] hover:underline">Merge PDF</Link> to create a single document.</li>
                <li>&#10003; <strong>Make it submission-ready.</strong> For government or institutional submissions, use <Link href="/upload-ready-pdf" className="text-[#14D8C4] hover:underline">Upload Ready PDF</Link> to flatten and optimize the file in one step.</li>
                <li>&#10003; <strong>Add password protection.</strong> If the document contains sensitive information, use <Link href="/protect-pdf" className="text-[#14D8C4] hover:underline">Protect PDF</Link> to add a password before sharing.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Fix Your Upside-Down PDF?</h2>
            <p className="text-slate-300 mb-6">Upload your file and flip it right-side up in seconds — free, no signup required.</p>
            <Link
              href="/rotate-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <RotateCw className="h-5 w-5" /> Fix PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Rotate a PDF Online (90°, 180°, or Custom)", href: "/learn/how-to-rotate-pdf" },
                { title: "How to Rotate a PDF on iPhone (No App Needed)", href: "/learn/rotate-pdf-on-iphone" },
                { title: "Rotate a Scanned PDF (Fix Orientation After Scanning)", href: "/learn/rotate-scanned-pdf" },
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
                { q: "How do I fix an upside-down PDF?", a: "Upload the PDF to PDF.it's Rotate PDF tool, select the upside-down pages, choose 180° rotation, and download the corrected file. The fix takes seconds and is free for files up to 25MB." },
                { q: "Why is my PDF upside down?", a: "This usually happens when a document is placed face-down or at the wrong angle in a scanner. It can also occur with double-sided scanning when the back pages get flipped, or when PDF export software has a rotation bug." },
                { q: "Can I fix just the upside-down pages without affecting the rest?", a: "Yes. PDF.it lets you select individual pages to rotate. You can fix only the upside-down pages while leaving correctly oriented pages untouched." },
                { q: "Will fixing the rotation affect the PDF quality?", a: "No. Rotating a PDF only changes the orientation metadata — it does not re-render, compress, or modify the actual content. Text, images, and formatting remain identical." },
                { q: "Can I fix an upside-down PDF on my phone?", a: "Yes. PDF.it works in any mobile browser. Open pdf.it.com/rotate-pdf in Safari or Chrome, upload the PDF, rotate 180°, and download the fixed version directly on your phone." },
                { q: "How do I know if my PDF is upside down or just sideways?", a: "If the text reads bottom-to-top (completely inverted), it is upside down and needs a 180° rotation. If the text reads from the side, it is sideways and needs a 90° rotation. PDF.it's preview shows you the current orientation before you apply the fix." },
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

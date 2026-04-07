import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { RotateCw, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Rotate a PDF Online (90°, 180°, or Custom) | PDF.it",
  description:
    "Learn how to rotate PDF pages online — rotate single pages, all pages, or specific angles like 90° and 180°. Free, no software needed.",
  keywords: "rotate pdf online, rotate pdf pages, turn pdf sideways, rotate pdf 90 degrees",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I rotate a PDF online for free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it's Rotate PDF tool, select the pages you want to rotate, choose the rotation angle (90°, 180°, or 270°), click Rotate, and download the corrected file. No signup required for your first 3 files." }
    },
    {
      "@type": "Question",
      "name": "Can I rotate just one page in a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it lets you select individual pages to rotate while leaving the rest of the document unchanged. This is perfect for fixing a single landscape page in a portrait document." }
    },
    {
      "@type": "Question",
      "name": "What rotation angles are available?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it supports 90° clockwise, 90° counter-clockwise (270°), and 180° rotation. You can apply different rotations to different pages in the same document." }
    },
    {
      "@type": "Question",
      "name": "Will rotating a PDF affect the text quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Rotating a PDF only changes the page orientation metadata — it does not re-render or compress the content. Your text, images, and formatting remain exactly the same." }
    },
    {
      "@type": "Question",
      "name": "Can I rotate a password-protected PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "You need to unlock the PDF first. Use PDF.it's Unlock PDF tool to remove the password, then rotate the pages. You can re-add password protection afterward using the Protect PDF tool." }
    },
    {
      "@type": "Question",
      "name": "Can I rotate a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in any mobile browser — Safari, Chrome, or Firefox. Upload your PDF, rotate the pages, and download the corrected file directly on your phone. No app installation needed." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Rotate a PDF Online",
  "description": "Fix the orientation of PDF pages in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your PDF",
      "text": "Go to PDF.it's Rotate PDF tool and upload the file you want to fix by clicking or dragging it into the upload area."
    },
    {
      "@type": "HowToStep",
      "name": "Select pages and rotation angle",
      "text": "Choose which pages to rotate and select the angle — 90° clockwise, 90° counter-clockwise, or 180°. You can rotate all pages at once or pick specific ones."
    },
    {
      "@type": "HowToStep",
      "name": "Download the rotated PDF",
      "text": "Click Rotate and download your corrected PDF. The file keeps its original quality with the pages now oriented correctly."
    }
  ]
}

export default function HowToRotatePDFPage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Rotate PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">How to Rotate a PDF Online (90°, 180°, or Custom)</h1>
              <p className="text-xl text-slate-300">
                Got a PDF with sideways or upside-down pages? Whether it is a single page or the entire document, here is how to fix PDF rotation in seconds — no software required.
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
              <p className="text-slate-700 font-semibold">Ready to rotate? Skip the guide and go straight to the tool.</p>
            </div>
            <Link
              href="/rotate-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Rotate PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why rotate PDFs */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Do PDF Pages End Up Rotated?</h2>
              <p className="text-slate-600 mb-4">
                Rotated PDF pages are more common than you might think. Here are the most frequent causes:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Scanner orientation mismatch.</strong> When you scan a document at a different angle than expected, the scanner saves the page sideways or upside down. This happens frequently with office multifunction printers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Landscape pages in portrait documents.</strong> Spreadsheets, charts, and wide tables are often created in landscape mode but get embedded into a portrait PDF without rotating.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Phone camera scans.</strong> Taking photos of documents with your phone can result in rotated pages depending on how you held the device. Tools like <Link href="/phone-scan-cleanup" className="text-[#14D8C4] hover:underline">Phone Scan Cleanup</Link> can help, but you may still need to rotate.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>PDF export bugs.</strong> Some applications export pages with incorrect rotation metadata, causing viewers to display them sideways even though the content was created correctly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">5.</span>
                  <span><strong>Merged documents with mixed orientations.</strong> When you <Link href="/merge-pdf" className="text-[#14D8C4] hover:underline">merge multiple PDFs</Link>, some files may have different page orientations that need correcting.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Rotate a PDF Online (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your PDF",
                    desc: "Go to the Rotate PDF tool and drag your file into the upload area, or click to browse. Files up to 25MB are free — Pro users can upload files up to 200MB.",
                  },
                  {
                    title: "Select pages and rotation angle",
                    desc: "Choose whether to rotate all pages or just specific ones. Then pick your rotation: 90° clockwise, 90° counter-clockwise, or 180°. You can see a preview of each page to make sure you pick the right direction.",
                  },
                  {
                    title: "Download the rotated PDF",
                    desc: "Click Rotate and download your corrected document. The rotation is saved permanently in the file — every PDF viewer will display the pages correctly from now on.",
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

            {/* Rotating specific pages */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Rotating Individual Pages vs. All Pages</h2>
              <p className="text-slate-600 mb-4">
                Sometimes you need to rotate just one or two pages in a multi-page document. Other times, the entire file needs to be turned. Here is how to handle both scenarios:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Rotate all pages</strong> when the entire document was scanned at the wrong angle. This is the most common case with scanned PDFs — select all pages and apply a single rotation.</li>
                <li>&#10003; <strong>Rotate individual pages</strong> when only certain pages are sideways. This happens when a document mixes portrait text pages with landscape charts or spreadsheets.</li>
                <li>&#10003; <strong>Use Split + Rotate + Merge</strong> for complex documents. If you need different rotations for different sections, <Link href="/split-pdf" className="text-[#14D8C4] hover:underline">split the PDF</Link> into groups, rotate each group separately, then <Link href="/merge-pdf" className="text-[#14D8C4] hover:underline">merge them</Link> back together.</li>
                <li>&#10003; <strong>Check the result</strong> by opening the downloaded file in any PDF viewer. Scroll through every page to confirm the orientation is correct before submitting or sharing.</li>
              </ul>
            </section>

            {/* Common rotation angles */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Understanding Rotation Angles</h2>
              <p className="text-slate-600 mb-4">
                PDF rotation is measured in degrees. Here is what each angle does:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">90° Clockwise</h3>
                  <p className="text-slate-600">
                    Turns the page a quarter turn to the right. Use this when a page is rotated to the left (counter-clockwise) and you need to bring it back to upright. This is the most common fix for landscape pages that appear sideways.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">90° Counter-Clockwise (270°)</h3>
                  <p className="text-slate-600">
                    Turns the page a quarter turn to the left. Use this when a page is rotated to the right and you need to straighten it. Less common, but necessary when scanners rotate pages in the opposite direction.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">180°</h3>
                  <p className="text-slate-600">
                    Flips the page completely upside down. Use this when a page is inverted — text that reads bottom-to-top needs a 180° rotation. Common with double-sided scanning errors. See our dedicated guide on <Link href="/learn/fix-upside-down-pdf" className="text-[#14D8C4] hover:underline">fixing upside-down PDFs</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* Tips after rotating */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What to Do After Rotating</h2>
              <p className="text-slate-600 mb-4">
                Once your pages are correctly oriented, consider these follow-up steps to get the best result:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Compress the file.</strong> If the rotated PDF is too large for email or upload portals, use <Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">Compress PDF</Link> to reduce the size. You can even target specific sizes like <Link href="/compress-pdf-to-5mb" className="text-[#14D8C4] hover:underline">5MB</Link> or <Link href="/compress-pdf-to-2mb" className="text-[#14D8C4] hover:underline">2MB</Link>.</li>
                <li>&#10003; <strong>Run OCR on scanned pages.</strong> If the rotated document is a scan without selectable text, use <Link href="/ocr-scanner" className="text-[#14D8C4] hover:underline">OCR Scanner</Link> to make the text searchable and copyable.</li>
                <li>&#10003; <strong>Flatten the PDF.</strong> If you plan to submit the file to a portal, <Link href="/flatten-pdf" className="text-[#14D8C4] hover:underline">flatten it</Link> to remove any hidden layers, form fields, or annotations that could cause compatibility issues.</li>
                <li>&#10003; <strong>Protect sensitive documents.</strong> Add a password using <Link href="/protect-pdf" className="text-[#14D8C4] hover:underline">Protect PDF</Link> if the document contains personal or confidential information.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Rotate Your PDF?</h2>
            <p className="text-slate-300 mb-6">Upload your file and fix the page orientation in seconds — free, no signup required.</p>
            <Link
              href="/rotate-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <RotateCw className="h-5 w-5" /> Rotate PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Rotate a PDF on iPhone (No App Needed)", href: "/learn/rotate-pdf-on-iphone" },
                { title: "Fix an Upside-Down PDF (Rotate 180° Instantly)", href: "/learn/fix-upside-down-pdf" },
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
                { q: "How do I rotate a PDF online for free?", a: "Upload your PDF to PDF.it's Rotate PDF tool, select the pages you want to rotate, choose the rotation angle (90°, 180°, or 270°), click Rotate, and download the corrected file. No signup required for your first 3 files." },
                { q: "Can I rotate just one page in a PDF?", a: "Yes. PDF.it lets you select individual pages to rotate while leaving the rest of the document unchanged. This is perfect for fixing a single landscape page in a portrait document." },
                { q: "What rotation angles are available?", a: "PDF.it supports 90° clockwise, 90° counter-clockwise (270°), and 180° rotation. You can apply different rotations to different pages in the same document." },
                { q: "Will rotating a PDF affect the text quality?", a: "No. Rotating a PDF only changes the page orientation metadata — it does not re-render or compress the content. Your text, images, and formatting remain exactly the same." },
                { q: "Can I rotate a password-protected PDF?", a: "You need to unlock the PDF first. Use PDF.it's Unlock PDF tool to remove the password, then rotate the pages. You can re-add password protection afterward using the Protect PDF tool." },
                { q: "Can I rotate a PDF on my phone?", a: "Yes. PDF.it works in any mobile browser — Safari, Chrome, or Firefox. Upload your PDF, rotate the pages, and download the corrected file directly on your phone. No app installation needed." },
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

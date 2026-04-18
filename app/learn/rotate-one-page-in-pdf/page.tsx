import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { RotateCw, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Rotate One Page in a PDF (Without Affecting Others) | PDF.it",
  description:
    "Rotate a single page in a PDF without touching the rest. Fix sideways scans, landscape inserts, and mixed-orientation pages in seconds — free online.",
  keywords: "rotate one page in pdf, rotate single page pdf, rotate specific page pdf, rotate page without affecting others",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I rotate just one page in a PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload your PDF to PDF.it's Rotate PDF tool, select only the page you want to rotate (by clicking its thumbnail), choose your rotation angle — 90° clockwise, 90° counter-clockwise, or 180° — then click Rotate and download the updated file. All other pages stay exactly as they were.",
      },
    },
    {
      "@type": "Question",
      name: "Why does my PDF viewer rotate all pages instead of just one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most built-in viewers (Preview on Mac, browser PDF viewers, Adobe Reader's View menu) only change the display orientation temporarily for your screen session. That change is never saved to the file. To permanently rotate a single page, you need a tool that writes the rotation into the PDF file itself — like PDF.it's Rotate PDF.",
      },
    },
    {
      "@type": "Question",
      name: "Will rotating one page affect the rest of the document?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. PDF.it lets you select individual pages to rotate. Only the pages you select will change orientation. Every other page in the document keeps its original layout, content, and quality.",
      },
    },
    {
      "@type": "Question",
      name: "Can I rotate multiple specific pages — like pages 3, 7, and 12?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. In PDF.it's Rotate PDF tool you can select any combination of individual pages by clicking their thumbnails. Select pages 3, 7, and 12, apply the rotation angle once, and all three will rotate while the remaining pages are untouched.",
      },
    },
    {
      "@type": "Question",
      name: "Does rotating a single page reduce file quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Rotating a page only updates the orientation metadata stored in the PDF. The actual content — text, images, and graphics — is not re-rendered or recompressed. Quality stays identical.",
      },
    },
    {
      "@type": "Question",
      name: "Can I rotate one page in a PDF on my phone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. PDF.it works in any mobile browser — Safari on iPhone or Chrome on Android. Open pdf.it.com, go to Rotate PDF, upload your file, select the specific page to rotate, and download the result. No app required.",
      },
    },
  ],
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Rotate One Page in a PDF",
  description: "Rotate a single PDF page without changing the rest of the document, in 3 steps.",
  step: [
    {
      "@type": "HowToStep",
      name: "Upload your PDF",
      text: "Go to PDF.it's Rotate PDF tool and drag your file into the upload area, or click to browse. Files up to 25MB are supported on the free plan.",
    },
    {
      "@type": "HowToStep",
      name: "Select the specific page and rotation angle",
      text: "Click the thumbnail of the page you want to rotate — all other pages remain unselected. Then choose your angle: 90° clockwise, 90° counter-clockwise, or 180°.",
    },
    {
      "@type": "HowToStep",
      name: "Download the updated PDF",
      text: "Click Rotate and download your file. Only the page you selected will have changed. Open the downloaded file to confirm the orientation before sharing or submitting it.",
    },
  ],
}

export default function RotateOnePageInPDFPage() {
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
            background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(107,124,255,0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E`,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">
                Learn / Rotate PDF
              </p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">
                How to Rotate One Page in a PDF (Without Affecting Others)
              </h1>
              <p className="text-xl text-slate-300">
                Most PDF viewers only let you rotate all pages at once — and the change disappears when you close the file. Here is how to permanently rotate a single page in a PDF while leaving every other page exactly as it is.
              </p>
            </div>
          </div>
        </section>

        {/* Inline CTA */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <RotateCw className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">
                Ready to fix that one page? Go straight to the tool.
              </p>
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

            {/* What Is Single-Page Rotation */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">
                Why Most Viewers Can&apos;t Actually Rotate One Page
              </h2>
              <p className="text-slate-600 mb-4">
                When you use the rotate button in Preview, a browser PDF viewer, or Adobe Reader&apos;s View menu, you are only changing the display for your current session. Close the file and reopen it — the page is sideways again. That temporary rotation is never saved to the PDF file itself.
              </p>
              <p className="text-slate-600 mb-4">
                To permanently rotate a single page, you need a tool that writes a new rotation value into the PDF&apos;s page metadata. PDF.it&apos;s{" "}
                <Link href="/rotate-pdf" className="text-[#14D8C4] hover:underline">
                  Rotate PDF
                </Link>{" "}
                tool does exactly that — you select individual pages, apply a rotation, and the change is baked into the file you download. Common situations where you need this:
              </p>
              <ol className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span>
                    <strong>One sideways scan in a multi-page document.</strong> You scanned 10 pages and page 4 came out rotated 90°. Rotating all pages would break the other nine.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span>
                    <strong>Mixed landscape and portrait pages.</strong> Reports, contracts, and proposals often include wide spreadsheet or chart pages in landscape orientation surrounded by portrait text pages. Each orientation needs to stay correct.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span>
                    <strong>A receipt or attachment scanned upside down.</strong> When you attach a physical receipt or form to a report PDF, it may have been fed into the scanner backwards. Only that one page needs a 180° flip.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span>
                    <strong>Non-consecutive pages at different angles.</strong> For example, pages 3, 7, and 12 are each 90° off. You can select all three at once and apply a single rotation without touching pages 1, 2, 4–6, 8–11, or 13+.
                  </span>
                </li>
              </ol>
            </section>

            {/* How To */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">
                How to Rotate One Page in a PDF (Step by Step)
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your PDF",
                    desc: "Go to PDF.it's Rotate PDF tool and drag your file into the upload area, or click to browse. Files up to 25MB are supported on the free plan.",
                  },
                  {
                    title: "Select the specific page and rotation angle",
                    desc: "Click the thumbnail of the page you want to rotate — all other pages remain unselected. Then choose your angle: 90° clockwise, 90° counter-clockwise, or 180°.",
                  },
                  {
                    title: "Download the updated PDF",
                    desc: "Click Rotate and download your file. Only the page you selected will have changed. Open the downloaded file to confirm the orientation before sharing or submitting it.",
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
                Rotation Methods Compared
              </h2>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left p-4 font-semibold">Method</th>
                      <th className="text-left p-4 font-semibold">Saves to File?</th>
                      <th className="text-left p-4 font-semibold">Rotates One Page?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-white">
                      <td className="p-4 text-[#14D8C4] font-semibold">PDF.it Rotate PDF</td>
                      <td className="p-4 text-slate-700">Yes — permanently</td>
                      <td className="p-4 text-slate-700">Yes — select any page(s)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 text-[#14D8C4] font-semibold">Browser / Preview (View menu)</td>
                      <td className="p-4 text-slate-700">No — session only</td>
                      <td className="p-4 text-slate-700">No — all pages or none</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 text-[#14D8C4] font-semibold">Adobe Acrobat (paid desktop)</td>
                      <td className="p-4 text-slate-700">Yes — if you save after</td>
                      <td className="p-4 text-slate-700">Yes — but requires paid license</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 text-sm mt-3">
                Free viewers are designed for reading, not editing. Only a dedicated PDF editor or an online tool like PDF.it can permanently rotate individual pages and save the result.
              </p>
            </section>

            {/* Extra Techniques */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">
                More Ways to Fix Orientation Problems
              </h2>
              <ul className="space-y-3 text-slate-700">
                <li>
                  &#10003;{" "}
                  <strong>Rotate pages 90°, 180°, or 270°.</strong> All three standard angles are available in{" "}
                  <Link href="/rotate-pdf" className="text-[#14D8C4] hover:underline">
                    PDF.it&apos;s Rotate PDF
                  </Link>
                  . Use 90° for sideways pages, 180° for upside-down pages, and 270° when a page needs to go the other direction.
                </li>
                <li>
                  &#10003;{" "}
                  <strong>Fix upside-down pages with one click.</strong> If a page is completely inverted, see our dedicated guide on{" "}
                  <Link href="/learn/fix-upside-down-pdf" className="text-[#14D8C4] hover:underline">
                    fixing upside-down PDFs
                  </Link>{" "}
                  for the fastest workflow.
                </li>
                <li>
                  &#10003;{" "}
                  <strong>Correct orientation after scanning.</strong> Scanners are a common source of rotated pages. The{" "}
                  <Link href="/learn/rotate-scanned-pdf" className="text-[#14D8C4] hover:underline">
                    rotate scanned PDF guide
                  </Link>{" "}
                  covers scanner-specific causes and how to batch-fix entire scanned documents.
                </li>
                <li>
                  &#10003;{" "}
                  <strong>Run OCR after rotating.</strong> If the page contains scanned text, rotate it first so the text reads correctly, then run{" "}
                  <Link href="/ocr-scanner" className="text-[#14D8C4] hover:underline">
                    OCR Scanner
                  </Link>{" "}
                  to make the text searchable. OCR accuracy drops significantly on sideways or upside-down text.
                </li>
              </ul>
            </section>

            {/* Troubleshooting */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Troubleshooting Common Problems</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    The page looks right on screen but prints sideways
                  </h3>
                  <p className="text-slate-600">
                    This usually means the viewer is showing a temporary display rotation, not a saved one. Download the file from PDF.it after rotating — the rotation will be written into the file itself, so it prints correctly from any application or printer.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    I rotated the page but it went the wrong direction
                  </h3>
                  <p className="text-slate-600">
                    Re-upload the file and apply the opposite rotation. If you used 90° clockwise and the page is now pointing the wrong way, use 90° counter-clockwise to correct it — or use 270° which is the same as three 90° clockwise turns. You can always re-rotate to get the orientation right.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    I cannot select individual pages — it rotates everything
                  </h3>
                  <p className="text-slate-600">
                    Some tools only offer a &quot;rotate all&quot; option. PDF.it&apos;s Rotate PDF tool shows page thumbnails so you can click to select specific pages before applying any rotation. If you used a different tool and it rotated all pages, re-upload the file to PDF.it and rotate the incorrectly-rotated pages back individually.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">
              Rotate That One Page Now
            </h2>
            <p className="text-slate-300 mb-6">
              Select the exact pages you need to fix, apply the rotation, and download — free, no account required for your first 3 files.
            </p>
            <Link
              href="/rotate-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <RotateCw className="h-5 w-5" /> Rotate PDF Now
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
                { title: "Rotate a Scanned PDF (Fix Orientation After Scanning)", href: "/learn/rotate-scanned-pdf" },
                { title: "Fix an Upside-Down PDF (Rotate 180° Instantly)", href: "/learn/fix-upside-down-pdf" },
                { title: "How to Rotate a PDF on iPhone (No App Needed)", href: "/learn/rotate-pdf-on-iphone" },
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "How do I rotate just one page in a PDF?",
                  a: "Upload your PDF to PDF.it's Rotate PDF tool, select only the page you want to rotate (by clicking its thumbnail), choose your rotation angle — 90° clockwise, 90° counter-clockwise, or 180° — then click Rotate and download the updated file. All other pages stay exactly as they were.",
                },
                {
                  q: "Why does my PDF viewer rotate all pages instead of just one?",
                  a: "Most built-in viewers (Preview on Mac, browser PDF viewers, Adobe Reader's View menu) only change the display orientation temporarily for your screen session. That change is never saved to the file. To permanently rotate a single page, you need a tool that writes the rotation into the PDF file itself — like PDF.it's Rotate PDF.",
                },
                {
                  q: "Will rotating one page affect the rest of the document?",
                  a: "No. PDF.it lets you select individual pages to rotate. Only the pages you select will change orientation. Every other page in the document keeps its original layout, content, and quality.",
                },
                {
                  q: "Can I rotate multiple specific pages — like pages 3, 7, and 12?",
                  a: "Yes. In PDF.it's Rotate PDF tool you can select any combination of individual pages by clicking their thumbnails. Select pages 3, 7, and 12, apply the rotation angle once, and all three will rotate while the remaining pages are untouched.",
                },
                {
                  q: "Does rotating a single page reduce file quality?",
                  a: "No. Rotating a page only updates the orientation metadata stored in the PDF. The actual content — text, images, and graphics — is not re-rendered or recompressed. Quality stays identical.",
                },
                {
                  q: "Can I rotate one page in a PDF on my phone?",
                  a: "Yes. PDF.it works in any mobile browser — Safari on iPhone or Chrome on Android. Open pdf.it.com, go to Rotate PDF, upload your file, select the specific page to rotate, and download the result. No app required.",
                },
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

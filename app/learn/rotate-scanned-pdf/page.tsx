import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { RotateCw, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Rotate a Scanned PDF (Fix Orientation After Scanning) | OmnisPDF",
  description:
    "Learn how to fix a scanned PDF that came out rotated or sideways. Fix landscape vs portrait issues and correct orientation after scanning — free online tool.",
  keywords: "rotate scanned pdf, scanned pdf sideways, fix scanned document orientation, rotate scanned pages",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I rotate a scanned PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload the scanned PDF to OmnisPDF's Rotate PDF tool, select the pages that are rotated incorrectly, choose the correct angle (90° or 180°), and download the fixed file. No software installation needed." }
    },
    {
      "@type": "Question",
      "name": "Why did my scanned PDF come out sideways?",
      "acceptedAnswer": { "@type": "Answer", "text": "Scanners do not always detect page orientation correctly. If the document was placed at the wrong angle on the scanner bed, or if the automatic document feeder pulled the page in sideways, the scan will be rotated." }
    },
    {
      "@type": "Question",
      "name": "Should I rotate before or after running OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Always rotate first, then run OCR. Optical character recognition works much better when the text is oriented correctly. Sideways or upside-down text produces poor OCR results with many errors." }
    },
    {
      "@type": "Question",
      "name": "Will rotating a scanned PDF reduce image quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Rotating only changes the page orientation metadata. The scanned image data remains untouched at its original resolution and quality." }
    },
    {
      "@type": "Question",
      "name": "Can I fix multiple scanned pages at once?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can select all pages that need rotation and apply the same angle to all of them at once. If different pages need different rotations, you can apply them in separate batches." }
    },
    {
      "@type": "Question",
      "name": "How do I prevent scanned PDFs from being rotated?",
      "acceptedAnswer": { "@type": "Answer", "text": "Place documents straight on the scanner bed, aligned with the edges. Use the alignment marks printed on most scanners. For automatic document feeders, make sure pages are stacked neatly and the paper guides are snug against the edges." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Rotate a Scanned PDF",
  "description": "Fix the orientation of a scanned PDF in 3 simple steps using OmnisPDF.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload the scanned PDF",
      "text": "Go to OmnisPDF's Rotate PDF tool and upload the scanned document by clicking or dragging it into the upload area."
    },
    {
      "@type": "HowToStep",
      "name": "Select rotated pages and fix angle",
      "text": "Identify which pages are rotated incorrectly using the preview. Select those pages and choose the rotation angle needed to fix them — 90° clockwise, 90° counter-clockwise, or 180°."
    },
    {
      "@type": "HowToStep",
      "name": "Download the corrected scan",
      "text": "Click Rotate and download your corrected document. The scanned pages now display in the correct orientation."
    }
  ]
}

export default function RotateScannedPDFPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Rotate PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Rotate a Scanned PDF (Fix Orientation After Scanning)</h1>
              <p className="text-xl text-slate-300">
                Scanned a document and the pages came out sideways or upside down? This is one of the most common scanning issues. Here is how to fix the orientation instantly without re-scanning.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <RotateCw className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Got a rotated scan? Fix it in seconds.</p>
            </div>
            <Link
              href="/rotate-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Rotate PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why scans come out rotated */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Do Scanned PDFs Come Out Rotated?</h2>
              <p className="text-slate-600 mb-4">
                Understanding why scans get rotated helps you prevent it in the future — and fix it faster when it happens:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Paper placed at wrong angle.</strong> Flatbed scanners scan from a fixed corner. If you place the document at a 90° or 180° offset, the scan comes out rotated. Most people do not notice until they open the PDF later.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Automatic document feeder (ADF) orientation.</strong> When feeding pages through an ADF, the scanner expects a specific orientation. If you load pages the wrong way, every page comes out sideways — and you may not discover this until the entire batch is scanned.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Landscape documents scanned as portrait.</strong> Spreadsheets, certificates, and landscape-oriented documents placed on a portrait-oriented scanner produce sideways scans. The scanner does not auto-detect landscape orientation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Phone camera scanning.</strong> Using your phone to scan documents can produce rotated results depending on how you held the device. <Link href="/phone-scan-cleanup" className="text-orange-600 hover:underline">Phone Scan Cleanup</Link> helps with image quality, but rotation may still need a manual fix.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Mixed orientation batches.</strong> When you scan a stack of documents that includes both portrait and landscape pages, some pages will inevitably be rotated compared to others.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Fix a Rotated Scan (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload the scanned PDF",
                    desc: "Go to the Rotate PDF tool and upload your scanned document. Drag it into the upload area or click to browse. Files up to 25MB are free — Pro users get up to 200MB for large scan batches.",
                  },
                  {
                    title: "Identify and select rotated pages",
                    desc: "The tool shows page thumbnails so you can see which pages are rotated. Select the pages that need fixing — you can select all pages at once or pick individual ones. Then choose the rotation angle: 90° clockwise, 90° counter-clockwise, or 180°.",
                  },
                  {
                    title: "Download the corrected PDF",
                    desc: "Click Rotate and download the fixed document. Every page now displays in the correct orientation. If you need to run OCR on the scan, do that as the next step — OCR works best on correctly oriented pages.",
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

            {/* Landscape vs portrait */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Landscape vs. Portrait: Common Scanning Mistakes</h2>
              <p className="text-slate-600 mb-4">
                The landscape-portrait mismatch is the number one reason scanned PDFs end up rotated. Here is how to handle different scenarios:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Landscape Document on a Portrait Scanner</h3>
                  <p className="text-slate-600">
                    This is the most common case. A certificate, spreadsheet, or wide table placed on a standard portrait scanner produces a 90° rotated scan. The fix is simple: select the pages and rotate 90° clockwise or counter-clockwise (try one direction — if it gets worse, undo and try the other).
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Mixed Portrait and Landscape Pages</h3>
                  <p className="text-slate-600">
                    When a document has both portrait text pages and landscape charts, you need to rotate them separately. In OmnisPDF, select only the landscape pages, rotate them, then download. The portrait pages remain untouched. If you need to do more complex rearranging, <Link href="/split-pdf" className="text-orange-600 hover:underline">split the document</Link> first.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Entire Batch Scanned Wrong</h3>
                  <p className="text-slate-600">
                    If every page in a batch scan is rotated the same way, select all pages and apply a single rotation. This is the fastest fix — one click corrects the entire document.
                  </p>
                </div>
              </div>
            </section>

            {/* Rotate then OCR */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why You Should Rotate Before Running OCR</h2>
              <p className="text-slate-600 mb-4">
                If you plan to make your scanned PDF searchable with optical character recognition, the order of operations matters:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Rotate first, OCR second.</strong> OCR engines analyze text line by line, expecting horizontal text. Sideways or upside-down text produces garbled results with high error rates.</li>
                <li>&#10003; <strong>Fix orientation completely.</strong> Make sure every page is upright before running <Link href="/ocr-scanner" className="text-orange-600 hover:underline">OCR Scanner</Link>. Even a single rotated page will produce unusable text output for that page.</li>
                <li>&#10003; <strong>Clean up phone scans.</strong> If the scan came from a phone camera, use <Link href="/phone-scan-cleanup" className="text-orange-600 hover:underline">Phone Scan Cleanup</Link> to improve contrast and remove shadows before running OCR. Better input quality means better OCR accuracy.</li>
                <li>&#10003; <strong>Check the OCR output.</strong> After running OCR, try selecting and copying text from the PDF to verify the recognition worked correctly. If it did not, the page orientation might still be slightly off.</li>
              </ul>
            </section>

            {/* Preventing rotation issues */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">How to Prevent Scanned PDFs from Being Rotated</h2>
              <p className="text-slate-600 mb-4">
                Prevention is faster than fixing. Here are tips to get correctly oriented scans on the first try:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Use the alignment marks.</strong> Most scanners have arrow marks or corner guides printed on the glass. Align your document with these marks to ensure correct orientation.</li>
                <li>&#10003; <strong>Check ADF paper guides.</strong> When using an automatic document feeder, make sure the paper guides are snug against the page edges. Loose guides let pages shift and enter at an angle.</li>
                <li>&#10003; <strong>Scan a test page first.</strong> Before scanning a large batch, scan one page and check the orientation. Fixing the setup for one page is much faster than rotating 50 pages afterward.</li>
                <li>&#10003; <strong>Use scanner auto-rotate.</strong> Some modern scanners have an auto-rotate feature that detects text orientation and corrects it automatically. Check your scanner settings if available.</li>
                <li>&#10003; <strong>Separate landscape pages.</strong> If your batch includes landscape documents, scan them separately with the correct orientation setting, then <Link href="/merge-pdf" className="text-orange-600 hover:underline">merge the PDFs</Link> together afterward.</li>
              </ul>
            </section>

            {/* Complete scan workflow */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">The Complete Scanned Document Workflow</h2>
              <p className="text-slate-600 mb-4">
                For the best results with scanned documents, follow this order of operations:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Rotate</strong> — Fix any pages that are sideways or upside down using <Link href="/rotate-pdf" className="text-orange-600 hover:underline">Rotate PDF</Link>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Clean up</strong> — If scanned with a phone, use <Link href="/phone-scan-cleanup" className="text-orange-600 hover:underline">Phone Scan Cleanup</Link> to improve contrast and remove shadows.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>OCR</strong> — Run <Link href="/ocr-scanner" className="text-orange-600 hover:underline">OCR Scanner</Link> to make the text searchable and copyable.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Compress</strong> — Use <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> to reduce the file size for sharing or uploading.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Flatten</strong> — Use <Link href="/flatten-pdf" className="text-orange-600 hover:underline">Flatten PDF</Link> to finalize the document and make it compatible with all submission portals.</span>
                </li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Fix Your Scanned PDF?</h2>
            <p className="text-slate-300 mb-6">Upload your scan and correct the orientation in seconds — free, no signup required.</p>
            <Link
              href="/rotate-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
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
                { title: "How to Rotate a PDF Online (90°, 180°, or Custom)", href: "/learn/how-to-rotate-pdf" },
                { title: "How to Rotate a PDF on iPhone (No App Needed)", href: "/learn/rotate-pdf-on-iphone" },
                { title: "Fix an Upside-Down PDF (Rotate 180° Instantly)", href: "/learn/fix-upside-down-pdf" },
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
                { q: "How do I rotate a scanned PDF?", a: "Upload the scanned PDF to OmnisPDF's Rotate PDF tool, select the pages that are rotated incorrectly, choose the correct angle (90° or 180°), and download the fixed file. No software installation needed." },
                { q: "Why did my scanned PDF come out sideways?", a: "Scanners do not always detect page orientation correctly. If the document was placed at the wrong angle on the scanner bed, or if the automatic document feeder pulled the page in sideways, the scan will be rotated." },
                { q: "Should I rotate before or after running OCR?", a: "Always rotate first, then run OCR. Optical character recognition works much better when the text is oriented correctly. Sideways or upside-down text produces poor OCR results with many errors." },
                { q: "Will rotating a scanned PDF reduce image quality?", a: "No. Rotating only changes the page orientation metadata. The scanned image data remains untouched at its original resolution and quality." },
                { q: "Can I fix multiple scanned pages at once?", a: "Yes. You can select all pages that need rotation and apply the same angle to all of them at once. If different pages need different rotations, you can apply them in separate batches." },
                { q: "How do I prevent scanned PDFs from being rotated?", a: "Place documents straight on the scanner bed, aligned with the edges. Use the alignment marks printed on most scanners. For automatic document feeders, make sure pages are stacked neatly and the paper guides are snug against the edges." },
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

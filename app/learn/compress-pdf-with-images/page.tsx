import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileDown, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Compress a PDF with Images (Photos, Scans, Graphics) | PDF.it",
  description:
    "Learn how to compress image-heavy PDFs — photo albums, scanned documents, and graphic-rich reports. Reduce file size while keeping images clear and readable.",
  keywords: "compress pdf with images, reduce pdf image size, compress scanned pdf, pdf with photos too large",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why are PDFs with images so large?",
      "acceptedAnswer": { "@type": "Answer", "text": "Images are the heaviest content type in a PDF. A single high-resolution photo can be 3-10MB. Scanned pages are stored as full-page images at 200-400 DPI, making each page 2-5MB. Text-only PDFs are tiny by comparison — usually under 100KB per page." }
    },
    {
      "@type": "Question",
      "name": "Can I compress a PDF with photos without ruining them?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Light compression keeps photos at their original resolution. Medium compression slightly reduces resolution but remains excellent for on-screen viewing. Only Extreme compression visibly reduces photo quality." }
    },
    {
      "@type": "Question",
      "name": "How do I compress a scanned PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Scanned PDFs compress very well because they're mostly images. Upload to PDF.it, choose Medium or Extreme compression, and you can typically reduce a 20MB scanned document to 2-5MB while keeping text readable." }
    },
    {
      "@type": "Question",
      "name": "Will compressing remove my images from the PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Compression reduces the resolution and file size of images, but never removes them. All your photos, charts, and graphics stay in the document — they just take up less space." }
    },
    {
      "@type": "Question",
      "name": "What compression level is best for PDFs with photos?",
      "acceptedAnswer": { "@type": "Answer", "text": "For sharing on-screen: Medium gives the best balance of quality and size. For printing: use Light to preserve full resolution. For strict upload limits: Extreme gets the smallest file, but photos may lose some detail." }
    },
    {
      "@type": "Question",
      "name": "Can I extract images before compressing to save more space?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Use PDF.it's Extract Images tool to pull out oversized images, resize or compress them separately, then rebuild the PDF. This gives you precise control over which images get compressed and by how much." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Compress a PDF with Images",
  "description": "Reduce the size of an image-heavy PDF in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your image-heavy PDF",
      "text": "Go to PDF.it's Compress PDF tool and upload your file containing photos, scans, or graphics."
    },
    {
      "@type": "HowToStep",
      "name": "Choose the right compression level",
      "text": "Select Medium for the best balance of image quality and file size. Use Light if image quality is critical, or Extreme if you need the smallest possible file."
    },
    {
      "@type": "HowToStep",
      "name": "Download and verify image quality",
      "text": "Download the compressed PDF and scroll through to check that images still look acceptable for your use case. If needed, try a different compression level."
    }
  ]
}

export default function CompressPDFWithImagesPage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Compress PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Compress a PDF with Images (Photos, Scans, Graphics)</h1>
              <p className="text-xl text-slate-300">
                Your PDF is stuffed with photos, scanned pages, or graphics — and the file size has ballooned. Here&apos;s how to compress image-heavy PDFs without destroying what makes them useful.
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

            {/* Why image PDFs are large */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why PDFs with Images Are So Large</h2>
              <p className="text-slate-600 mb-4">
                Images are the single biggest driver of PDF file size. A text-only page is typically 10-50KB, but add one photo and that page can jump to 3-10MB. Here&apos;s what makes image-heavy PDFs so bulky:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>High-resolution photos.</strong> A single 12-megapixel photo embedded at full resolution can be 5-10MB. Reports with 10-20 product photos can easily hit 50-100MB.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Scanned documents.</strong> Scanners save each page as a full-resolution image — typically 2-5MB per page at 300 DPI. A 30-page scanned contract can be 60-150MB.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Charts and infographics.</strong> Data-rich graphics with gradients, shadows, and transparency are stored as complex image data that takes up significant space.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Duplicate images.</strong> PDFs sometimes embed the same logo, header image, or watermark separately on every page instead of referencing it once. Compression tools can detect and fix this.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Compress a PDF with Images (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your image-heavy PDF",
                    desc: "Go to the Compress PDF tool and upload your file. Files up to 25MB are free — Pro users can upload files up to 200MB, which covers most image-heavy documents.",
                  },
                  {
                    title: "Choose the right compression level",
                    desc: "For image-heavy PDFs, Medium is usually the best starting point. It significantly reduces image sizes while keeping them clear for on-screen viewing. Use Light if photos must stay pristine, or Extreme if you need the smallest file possible.",
                  },
                  {
                    title: "Download and check image quality",
                    desc: "Download the compressed PDF and zoom into the images. Are they sharp enough for your needs? If Medium produced artifacts, try Light. If you need it smaller, try Extreme.",
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

            {/* By image type */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Best Compression Level by Image Type</h2>
              <p className="text-slate-600 mb-4">
                Different types of images compress differently. Here&apos;s a guide to choosing the right level:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Image Type</th>
                      <th className="text-left py-3 px-4 font-bold">Recommended Level</th>
                      <th className="text-left py-3 px-4 font-bold">Expected Savings</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Photographs</td>
                      <td className="py-3 px-4 text-[#14D8C4] font-semibold">Medium</td>
                      <td className="py-3 px-4">40-70% reduction</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Scanned pages</td>
                      <td className="py-3 px-4 text-[#14D8C4] font-semibold">Medium or Extreme</td>
                      <td className="py-3 px-4">60-85% reduction</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Charts and graphs</td>
                      <td className="py-3 px-4 text-[#14D8C4] font-semibold">Medium</td>
                      <td className="py-3 px-4">30-50% reduction</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Logos and icons</td>
                      <td className="py-3 px-4 text-[#14D8C4] font-semibold">Light</td>
                      <td className="py-3 px-4">10-20% reduction</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Screenshots</td>
                      <td className="py-3 px-4 text-[#14D8C4] font-semibold">Medium or Extreme</td>
                      <td className="py-3 px-4">50-75% reduction</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Scanned documents */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Special Tips for Scanned PDFs</h2>
              <p className="text-slate-600 mb-4">
                Scanned documents are the most common type of oversized, image-heavy PDF. They compress extremely well because every page is essentially a photograph. Here&apos;s how to get the best results:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Use Medium or Extreme compression.</strong> Scanned text stays readable even at lower resolutions because our eyes can fill in the gaps. Medium compression typically reduces a 20MB scanned document to 3-5MB.</li>
                <li>&#10003; <strong>Run OCR first.</strong> Use <Link href="/ocr-scanner" className="text-[#14D8C4] hover:underline">OCR Scanner</Link> to convert scanned images to searchable text. This makes the document more useful and can improve compression efficiency.</li>
                <li>&#10003; <strong>Clean up phone scans.</strong> If the document was scanned with a phone camera, use <Link href="/phone-scan-cleanup" className="text-[#14D8C4] hover:underline">Phone Scan Cleanup</Link> first to remove shadows and straighten pages, then compress.</li>
                <li>&#10003; <strong>Flatten annotations.</strong> If you&apos;ve annotated the scanned PDF, <Link href="/flatten-pdf" className="text-[#14D8C4] hover:underline">flatten it first</Link> to merge annotations into the page before compressing.</li>
              </ul>
            </section>

            {/* Advanced strategies */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Advanced Strategies for Image-Heavy PDFs</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Extract and Optimize Individual Images</h3>
                  <p className="text-slate-600">
                    If a few oversized images are driving up your file size, use <Link href="/extract-images-from-pdf" className="text-[#14D8C4] hover:underline">Extract Images from PDF</Link> to pull them out. Resize or compress them individually, then rebuild the document. This gives you precise control over quality.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convert to JPG for Sharing</h3>
                  <p className="text-slate-600">
                    If you only need to share the images (not the full PDF), use <Link href="/pdf-to-jpg" className="text-[#14D8C4] hover:underline">PDF to JPG</Link> to convert pages into individual images. JPGs are much smaller than the equivalent PDF page and easier to share on messaging apps.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Split Before Compressing</h3>
                  <p className="text-slate-600">
                    For very large image-heavy PDFs (50MB+), <Link href="/split-pdf" className="text-[#14D8C4] hover:underline">split the PDF</Link> into sections of 10-20 pages, compress each section, then <Link href="/merge-pdf" className="text-[#14D8C4] hover:underline">merge them back together</Link>. This often produces better compression ratios than processing the entire file at once.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use Upload Ready PDF</h3>
                  <p className="text-slate-600">
                    For the fastest workflow, use our <Link href="/upload-ready-pdf" className="text-[#14D8C4] hover:underline">Upload Ready PDF</Link> tool. It chains flattening and compression in one step — ideal for getting image-heavy files ready for submission portals.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Compress Your Image-Heavy PDF?</h2>
            <p className="text-slate-300 mb-6">Upload your file and reduce the size while keeping images clear — free, no signup required.</p>
            <Link
              href="/compress-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
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
                { title: "How to Compress a PDF Without Losing Quality", href: "/learn/compress-pdf-without-quality-loss" },
                { title: "Compress a PDF for Printing (Keep Print Quality)", href: "/learn/compress-pdf-for-printing" },
                { title: "How to Compress a Large PDF (50MB, 100MB, or More)", href: "/learn/compress-large-pdf" },
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
                { q: "Why are PDFs with images so large?", a: "Images are the heaviest content type in a PDF. A single high-resolution photo can be 3-10MB. Scanned pages are stored as full-page images at 200-400 DPI, making each page 2-5MB. Text-only PDFs are tiny by comparison." },
                { q: "Can I compress a PDF with photos without ruining them?", a: "Yes. Light compression keeps photos at their original resolution. Medium compression slightly reduces resolution but remains excellent for on-screen viewing. Only Extreme compression visibly reduces photo quality." },
                { q: "How do I compress a scanned PDF?", a: "Scanned PDFs compress very well because they're mostly images. Upload to PDF.it, choose Medium or Extreme compression, and you can typically reduce a 20MB scanned document to 2-5MB while keeping text readable." },
                { q: "Will compressing remove my images from the PDF?", a: "No. Compression reduces the resolution and file size of images, but never removes them. All your photos, charts, and graphics stay in the document — they just take up less space." },
                { q: "What compression level is best for PDFs with photos?", a: "For sharing on-screen: Medium gives the best balance. For printing: use Light to preserve full resolution. For strict upload limits: Extreme gets the smallest file, but photos may lose some detail." },
                { q: "Can I extract images before compressing to save more space?", a: "Yes. Use PDF.it's Extract Images tool to pull out oversized images, resize or compress them separately, then rebuild the PDF. This gives you precise control over which images get compressed." },
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

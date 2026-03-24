import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileDown, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Compress a PDF for Printing (Keep Print Quality) | PDF.it",
  description:
    "Learn how to compress a PDF for printing while keeping 300 DPI quality. Reduce file size for print shops, home printers, and professional output without ruining resolution.",
  keywords: "compress pdf for printing, reduce pdf size for print, pdf print quality, compress pdf 300 dpi",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I compress a PDF and still print it at high quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Use Light compression to keep images at 300 DPI or higher. This removes redundant data without downsampling images, so the printed result looks identical to the original." }
    },
    {
      "@type": "Question",
      "name": "What DPI do I need for printing?",
      "acceptedAnswer": { "@type": "Answer", "text": "300 DPI is the standard for professional printing. 150 DPI is acceptable for draft prints or documents viewed at arm's length. Below 150 DPI, images start looking pixelated when printed." }
    },
    {
      "@type": "Question",
      "name": "Will Medium compression ruin print quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "Medium compression typically reduces images to around 150-200 DPI. This is fine for draft prints and internal documents, but may not meet professional print shop requirements of 300 DPI." }
    },
    {
      "@type": "Question",
      "name": "How do I know if my PDF is print-ready?",
      "acceptedAnswer": { "@type": "Answer", "text": "A print-ready PDF should have images at 300 DPI or higher, use CMYK color mode (for professional printing), and have fonts embedded. After compressing with Light mode, your PDF will maintain these qualities." }
    },
    {
      "@type": "Question",
      "name": "Should I flatten my PDF before printing?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Flattening removes form fields, annotations, and layers, which prevents printing errors. Use PDF.it's Flatten PDF tool before compressing for the cleanest print output." }
    },
    {
      "@type": "Question",
      "name": "My print file is too large to send to the print shop. What should I do?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use Light compression first. If it's still too large, flatten the PDF to remove layers, then compress again. If you need to split a large document, use Split PDF to break it into sections the print shop can handle." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Compress a PDF for Printing",
  "description": "Reduce PDF file size while maintaining 300 DPI print quality in 3 simple steps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your PDF",
      "text": "Go to PDF.it's Compress PDF tool and upload the file you need to compress for printing."
    },
    {
      "@type": "HowToStep",
      "name": "Select Light compression",
      "text": "Choose Light compression to maintain 300 DPI image resolution. This removes redundant data without downsampling images that need to stay sharp for print."
    },
    {
      "@type": "HowToStep",
      "name": "Download and verify",
      "text": "Download the compressed PDF and zoom into images at 100% to verify they still look sharp. The file should be smaller but print-ready."
    }
  ]
}

export default function CompressPDFForPrintingPage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Compress PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Compress a PDF for Printing (Keep Print Quality)</h1>
              <p className="text-xl text-slate-300">
                Your print file is too large to send, but you can&apos;t afford pixelated images. Here&apos;s how to shrink the file size while keeping 300 DPI resolution for professional printing.
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

            {/* Why print PDFs are large */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Print-Ready PDFs Are So Large</h2>
              <p className="text-slate-600 mb-4">
                Print files are designed for high-quality output, which means they carry a lot of data. Understanding why helps you compress smarter:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>300 DPI images.</strong> Print quality requires 300 dots per inch. A single full-page image at 300 DPI can be 5-15MB. Multiply that by page count and files grow fast.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Embedded fonts.</strong> Print PDFs embed full font families to ensure the printer reproduces text exactly. Each font can add 100-500KB.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Color profiles.</strong> CMYK color spaces and ICC profiles are larger than RGB. Professional print files include these for accurate color reproduction.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Bleed and crop marks.</strong> Print files include extra content beyond the page edge (bleed) and alignment marks. These add to file size.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Compress for Printing (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your print PDF",
                    desc: "Go to the Compress PDF tool and upload your file. Files up to 25MB are free — Pro users can upload files up to 200MB, which covers most print jobs.",
                  },
                  {
                    title: "Select Light compression",
                    desc: "Choose Light to preserve 300 DPI resolution. This removes redundant metadata, duplicate fonts, and unused objects — but leaves your images at full print quality.",
                  },
                  {
                    title: "Download and verify print quality",
                    desc: "Download the compressed file. Zoom in to 200-400% on image-heavy pages to check for any quality loss. If everything looks sharp, your file is ready for the printer.",
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

            {/* DPI explained */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Understanding DPI and Print Quality</h2>
              <p className="text-slate-600 mb-4">
                DPI (dots per inch) determines how sharp images look when printed. Here&apos;s what different DPI levels mean in practice:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">DPI</th>
                      <th className="text-left py-3 px-4 font-bold">Quality</th>
                      <th className="text-left py-3 px-4 font-bold">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">300 DPI</td>
                      <td className="py-3 px-4">Professional print quality</td>
                      <td className="py-3 px-4">Brochures, business cards, photo prints, magazines</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">150 DPI</td>
                      <td className="py-3 px-4">Good for drafts and internal use</td>
                      <td className="py-3 px-4">Office documents, internal reports, posters viewed from a distance</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">72 DPI</td>
                      <td className="py-3 px-4">Screen-only quality</td>
                      <td className="py-3 px-4">Web viewing, email attachments — not suitable for printing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4">
                When you use <strong>Light compression</strong>, images stay at their original DPI. <strong>Medium</strong> may reduce them to 150 DPI. <strong>Extreme</strong> can drop images to 72 DPI — fine for screens, but not for print.
              </p>
            </section>

            {/* Preparing files for print */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Preparing Your PDF for the Print Shop</h2>
              <p className="text-slate-600 mb-4">
                Before compressing, take these steps to ensure your print file is clean and optimized:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Flatten the PDF.</strong> Use <Link href="/flatten-pdf" className="text-orange-600 hover:underline">Flatten PDF</Link> to merge layers, annotations, and form fields into the page content. This prevents rendering issues at the printer.</li>
                <li>&#10003; <strong>Remove unnecessary pages.</strong> If your file has draft pages, notes, or blank pages, use <Link href="/split-pdf" className="text-orange-600 hover:underline">Split PDF</Link> to remove them before sending to the print shop.</li>
                <li>&#10003; <strong>Check orientation.</strong> Make sure all pages are oriented correctly. Use <Link href="/rotate-pdf" className="text-orange-600 hover:underline">Rotate PDF</Link> to fix any sideways or upside-down pages.</li>
                <li>&#10003; <strong>Merge separate files.</strong> If your design is spread across multiple files (cover, interior, back), use <Link href="/merge-pdf" className="text-orange-600 hover:underline">Merge PDF</Link> to combine them into one print-ready document.</li>
              </ul>
            </section>

            {/* Common print scenarios */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Compression Tips for Common Print Scenarios</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Business Cards and Brochures</h3>
                  <p className="text-slate-600">
                    These are viewed up close, so image quality must be pristine. Use <strong>Light compression only</strong>. Even Medium compression can produce visible artifacts when printed on glossy cardstock. File sizes are typically small (1-5MB), so aggressive compression is rarely needed.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Large Format Posters and Banners</h3>
                  <p className="text-slate-600">
                    Posters are viewed from a distance, so you can get away with 150 DPI. Medium compression is often fine here, and it can cut file sizes by 40-60%. For very large banner files, consider splitting into sections with <Link href="/split-pdf" className="text-orange-600 hover:underline">Split PDF</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Photo Books and Portfolios</h3>
                  <p className="text-slate-600">
                    Photo-heavy print files are often the largest. Stick with Light compression to preserve photo quality. If the file is over 100MB, consider converting images to <Link href="/pdf-to-jpg" className="text-orange-600 hover:underline">JPG</Link> at the right resolution before embedding them.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Office Documents for Internal Printing</h3>
                  <p className="text-slate-600">
                    Internal reports, meeting handouts, and memos don&apos;t need 300 DPI. Medium compression works great and makes files much easier to share via email. Use <Link href="/compress-pdf-for-email" className="text-orange-600 hover:underline">Compress for Email</Link> if you also need to email the file.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Compress for Print?</h2>
            <p className="text-slate-300 mb-6">Reduce your print file size while keeping 300 DPI quality — free, no signup required.</p>
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
                { title: "How to Compress a PDF Without Losing Quality", href: "/learn/compress-pdf-without-quality-loss" },
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
                { q: "Can I compress a PDF and still print it at high quality?", a: "Yes. Use Light compression to keep images at 300 DPI or higher. This removes redundant data without downsampling images, so the printed result looks identical to the original." },
                { q: "What DPI do I need for printing?", a: "300 DPI is the standard for professional printing. 150 DPI is acceptable for draft prints or documents viewed at arm's length. Below 150 DPI, images start looking pixelated when printed." },
                { q: "Will Medium compression ruin print quality?", a: "Medium compression typically reduces images to around 150-200 DPI. This is fine for draft prints and internal documents, but may not meet professional print shop requirements of 300 DPI." },
                { q: "How do I know if my PDF is print-ready?", a: "A print-ready PDF should have images at 300 DPI or higher, use CMYK color mode (for professional printing), and have fonts embedded. After compressing with Light mode, your PDF will maintain these qualities." },
                { q: "Should I flatten my PDF before printing?", a: "Yes. Flattening removes form fields, annotations, and layers, which prevents printing errors. Use PDF.it's Flatten PDF tool before compressing for the cleanest print output." },
                { q: "My print file is too large to send to the print shop. What should I do?", a: "Use Light compression first. If it's still too large, flatten the PDF to remove layers, then compress again. If you need to split a large document, use Split PDF to break it into sections." },
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

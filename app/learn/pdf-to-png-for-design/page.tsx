import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Image, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convert PDF to PNG for Design Work (Figma, Canva, Web) | PDF.it",
  description:
    "Learn how to convert PDF to PNG for Figma, Canva, and web projects. Covers resolution, transparency, DPI settings, and best practices for using PDF content in design workflows.",
  keywords: "pdf to png for design, pdf to png figma, pdf to png canva, pdf to png for web, convert pdf to image for design",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What resolution should I use for PDF to PNG in design work?",
      "acceptedAnswer": { "@type": "Answer", "text": "For web design, 150 DPI is usually enough. For Figma and Canva projects that may be printed, use 300 DPI. For large format prints or billboards, consider 300-600 DPI. Higher resolution means larger files but more flexibility when scaling." }
    },
    {
      "@type": "Question",
      "name": "Can I import a PDF directly into Figma?",
      "acceptedAnswer": { "@type": "Answer", "text": "Figma doesn't support PDF import natively. The best workflow is to convert your PDF to PNG first using PDF.it, then drag the PNG images into your Figma project. This gives you full control over resolution and quality." }
    },
    {
      "@type": "Question",
      "name": "Does converting PDF to PNG preserve transparency?",
      "acceptedAnswer": { "@type": "Answer", "text": "PNG supports transparency, so if your PDF has transparent elements they can be preserved. However, most PDF pages have a white background by default. For true transparency, ensure your PDF was created with transparent backgrounds." }
    },
    {
      "@type": "Question",
      "name": "Why is PNG better than JPG for design work?",
      "acceptedAnswer": { "@type": "Answer", "text": "PNG uses lossless compression, so edges stay sharp and colors stay accurate. JPG creates visible artifacts around text, logos, and hard edges. PNG also supports transparency, which is essential for layering in design tools." }
    },
    {
      "@type": "Question",
      "name": "How do I use PDF content in Canva?",
      "acceptedAnswer": { "@type": "Answer", "text": "Canva can import PDFs directly, but for better control over quality and placement, convert your PDF to PNG first using PDF.it. Then upload the PNG to Canva as an image — you can resize, crop, and layer it freely." }
    },
    {
      "@type": "Question",
      "name": "Should I extract images from a PDF instead of converting pages?",
      "acceptedAnswer": { "@type": "Answer", "text": "If you only need specific images embedded in the PDF (photos, logos, graphics), use PDF.it's Extract Images tool. If you need the full page layout as an image, convert the page to PNG. Both approaches have their place in design workflows." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert PDF to PNG for Design Work",
  "description": "Get design-ready PNG images from your PDF in 3 steps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your PDF",
      "text": "Go to PDF.it's PDF to PNG tool and upload the PDF containing the design assets or pages you need."
    },
    {
      "@type": "HowToStep",
      "name": "Set resolution for your use case",
      "text": "Choose 150 DPI for web, 300 DPI for print or Retina displays. Higher DPI gives more pixels to work with in your design tool."
    },
    {
      "@type": "HowToStep",
      "name": "Import into your design tool",
      "text": "Download the PNG files and drag them into Figma, Canva, Photoshop, or your web project. The lossless quality ensures sharp results at any scale."
    }
  ]
}

export default function PDFtoPNGforDesignPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / PDF to PNG</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert PDF to PNG for Design Work (Figma, Canva, Web)</h1>
              <p className="text-xl text-slate-300">
                Designers constantly need PDF content as images — for mockups, presentations, web pages, and social media. Here's how to get the sharpest, most flexible PNG output for your design workflow.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Need design-ready PNGs now? Convert your PDF in seconds.</p>
            </div>
            <Link
              href="/pdf-to-png"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Convert PDF to PNG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why designers convert PDF to PNG */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Designers Convert PDF to PNG</h2>
              <p className="text-slate-600 mb-4">
                PDF is a great format for sharing finished documents, but design tools need raster images. Here are the most common reasons designers convert PDF to PNG:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Using client assets in Figma or Sketch.</strong> Clients often send logos, brand guidelines, or layouts as PDFs. Most design tools can't import PDFs directly, so converting to PNG is the fastest path to getting that content into your canvas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Creating social media content from documents.</strong> Marketing teams frequently need to turn report pages, infographics, or one-pagers into Instagram posts, LinkedIn carousels, or Twitter images.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Building web pages with document previews.</strong> Embedding a PNG preview of a PDF on a website is far more performant and accessible than embedding the PDF itself.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Creating mockups and case studies.</strong> Designers often need to show PDF documents inside device frames, browser windows, or portfolio layouts. A high-quality PNG drops right into these compositions.</span>
                </li>
              </ul>
            </section>

            {/* Why PNG over JPG for design */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why PNG (Not JPG) for Design Work</h2>
              <p className="text-slate-600 mb-4">
                For design workflows, PNG is almost always the better choice over JPG. Here's why:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Feature</th>
                      <th className="text-left py-3 px-4 font-bold">Why It Matters for Design</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Lossless quality</td>
                      <td className="py-3 px-4">No compression artifacts around text, logos, or edges. What you convert is exactly what you get.</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">Transparency</td>
                      <td className="py-3 px-4">Layer PNG images over backgrounds without white rectangles. Essential for overlays, mockups, and compositions.</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Sharp text</td>
                      <td className="py-3 px-4">Text in PDFs stays perfectly crisp as PNG. JPG smudges text edges, which is immediately visible in design presentations.</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">Color accuracy</td>
                      <td className="py-3 px-4">PNG preserves exact colors without the subtle color shifts that JPG compression introduces. Critical for brand work.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-500 text-sm mt-3">
                Want a deeper comparison? Read our full <Link href="/learn/pdf-to-jpg-vs-png" className="text-orange-600 hover:underline">JPG vs PNG guide</Link>.
              </p>
            </section>

            {/* Resolution guide */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Choosing the Right Resolution for Your Project</h2>
              <p className="text-slate-600 mb-4">
                The resolution you choose determines how much pixel data you have to work with. Here's a guide for common design scenarios:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Project Type</th>
                      <th className="text-left py-3 px-4 font-bold">Recommended DPI</th>
                      <th className="text-left py-3 px-4 font-bold">Why</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Web pages & blogs</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">150 DPI</td>
                      <td className="py-3 px-4">Balances quality and page load speed</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Social media posts</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">150-200 DPI</td>
                      <td className="py-3 px-4">Platforms compress images anyway; 200 DPI gives headroom</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Figma / Canva projects</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">300 DPI</td>
                      <td className="py-3 px-4">Enough pixels for zooming and Retina displays</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Print materials</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">300 DPI</td>
                      <td className="py-3 px-4">Industry standard for professional print quality</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Large format / posters</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">300-600 DPI</td>
                      <td className="py-3 px-4">Viewed from a distance, but higher DPI avoids visible pixels</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Figma workflow */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Using PDF-to-PNG in Figma</h2>
              <p className="text-slate-600 mb-4">
                Figma doesn't support direct PDF import, which makes PDF-to-PNG conversion essential for Figma users. Here's the recommended workflow:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convert at 300 DPI for flexibility</h3>
                  <p className="text-slate-600">
                    Use <Link href="/pdf-to-png" className="text-orange-600 hover:underline">PDF.it's converter</Link> at 300 DPI. This gives you enough resolution to scale the image up or down within Figma without losing quality. An A4 page at 300 DPI produces a PNG that's roughly 2480 x 3508 pixels.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Drag and drop into your Figma file</h3>
                  <p className="text-slate-600">
                    Simply drag the PNG file from your desktop into your Figma canvas. Figma preserves the full resolution. You can then resize, crop, mask, or apply effects to the image.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use as a reference layer</h3>
                  <p className="text-slate-600">
                    Many designers place the PDF-as-PNG on a locked background layer and trace over it to recreate the layout in native Figma components. This is especially useful when rebuilding client documents as interactive prototypes.
                  </p>
                </div>
              </div>
            </section>

            {/* Canva workflow */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Using PDF-to-PNG in Canva</h2>
              <p className="text-slate-600 mb-4">
                While Canva can import PDFs directly, converting to PNG first gives you more control:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Why convert instead of importing directly?</h3>
                  <p className="text-slate-600">
                    Canva's PDF import sometimes rearranges fonts and layouts. Converting to PNG first locks the visual exactly as it appears in the original PDF — no font substitutions, no layout shifts. What you see is what you get.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Upload PNGs to your Canva Uploads folder</h3>
                  <p className="text-slate-600">
                    After converting with PDF.it, upload the PNG images to Canva's "Uploads" section. From there, drag them into any Canva design — presentations, social posts, posters, or documents.
                  </p>
                </div>
              </div>
            </section>

            {/* Web use */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Using PDF-to-PNG for Web Projects</h2>
              <p className="text-slate-600 mb-4">
                Converting PDF pages to PNG is a common pattern for web developers and content creators:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Document previews on websites</h3>
                  <p className="text-slate-600">
                    Instead of embedding a full PDF viewer (which is heavy and often breaks on mobile), convert the first page to PNG and display it as a preview image with a "Download PDF" link. This loads faster and works on every device.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Blog post images from reports</h3>
                  <p className="text-slate-600">
                    Pull charts, tables, or key pages from PDF reports and embed them as PNG images in blog posts. This makes the content accessible and shareable without requiring readers to download a PDF.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Optimize file size for web</h3>
                  <p className="text-slate-600">
                    For web use, 150 DPI is typically enough. If the PNGs are still large, <Link href="/compress-pdf" className="text-orange-600 hover:underline">compress the original PDF</Link> before converting to reduce embedded image data. You can also use WebP conversion for even smaller files.
                  </p>
                </div>
              </div>
            </section>

            {/* Extract images alternative */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">When to Extract Images Instead of Converting Pages</h2>
              <p className="text-slate-600 mb-4">
                Sometimes you don't need the full page as an image — you just need specific graphics embedded in the PDF:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Need a logo from a PDF?</strong> Use <Link href="/extract-images-from-pdf" className="text-orange-600 hover:underline">Extract Images from PDF</Link> to pull out individual images at their original resolution.</li>
                <li>✓ <strong>Need the full page layout?</strong> Use <Link href="/pdf-to-png" className="text-orange-600 hover:underline">PDF to PNG</Link> to capture the entire page as rendered.</li>
                <li>✓ <strong>Need both?</strong> Extract individual images for logo and photo assets, then convert full pages for layout reference. Both tools are free on PDF.it.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Get Design-Ready PNGs from Your PDF</h2>
            <p className="text-slate-300 mb-6">High-resolution, lossless PNG images ready for Figma, Canva, or any design tool. Free and instant.</p>
            <Link
              href="/pdf-to-png"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Image className="h-5 w-5" /> Convert PDF to PNG Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Convert PDF to PNG Online (Sharp Text + Clean Graphics)", href: "/learn/convert-pdf-to-png" },
                { title: "PDF to JPG vs PNG: Which Should You Use (Quality vs Size)", href: "/learn/pdf-to-jpg-vs-png" },
                { title: "Save PDF as PNG on Mac (Quick Methods + Best Results)", href: "/learn/save-pdf-as-png-on-mac" },
                { title: "Convert PDF to PNG on iPhone (Fast, High-Quality Export)", href: "/learn/convert-pdf-to-png-on-iphone" },
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
                { q: "What resolution should I use for PDF to PNG in design work?", a: "For web design, 150 DPI is usually enough. For Figma and Canva projects that may be printed, use 300 DPI. For large format prints, consider 300-600 DPI. Higher resolution means larger files but more flexibility when scaling." },
                { q: "Can I import a PDF directly into Figma?", a: "Figma doesn't support PDF import natively. The best workflow is to convert your PDF to PNG first using PDF.it, then drag the PNG images into your Figma project." },
                { q: "Does converting PDF to PNG preserve transparency?", a: "PNG supports transparency, so if your PDF has transparent elements they can be preserved. However, most PDF pages have a white background by default." },
                { q: "Why is PNG better than JPG for design work?", a: "PNG uses lossless compression, so edges stay sharp and colors stay accurate. JPG creates visible artifacts around text, logos, and hard edges. PNG also supports transparency, which is essential for layering in design tools." },
                { q: "How do I use PDF content in Canva?", a: "Canva can import PDFs directly, but for better control over quality and placement, convert your PDF to PNG first using PDF.it. Then upload the PNG to Canva as an image." },
                { q: "Should I extract images from a PDF instead of converting pages?", a: "If you only need specific images embedded in the PDF (photos, logos), use PDF.it's Extract Images tool. If you need the full page layout as an image, convert the page to PNG." },
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

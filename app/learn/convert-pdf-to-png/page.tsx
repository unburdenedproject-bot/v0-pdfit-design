import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Image, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Convert PDF to PNG Online (Sharp Text + Clean Graphics) | PDF.it",
  description:
    "Learn how to convert PDF to PNG online with crisp text and clean graphics. Step-by-step guide covering transparency, resolution, and when PNG beats JPG — free, no software needed.",
  keywords: "convert pdf to png online, pdf to png, pdf to png converter, save pdf as png, export pdf to png",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert a PDF to PNG for free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it's PDF to PNG tool, select your desired resolution, click Convert, and download the PNG images. No signup required for your first 3 files." }
    },
    {
      "@type": "Question",
      "name": "Is PNG better than JPG for PDF conversions?",
      "acceptedAnswer": { "@type": "Answer", "text": "PNG is better when your PDF contains text, graphics, logos, or line art because PNG uses lossless compression — no quality is lost. JPG is better for photo-heavy PDFs where smaller file size matters more than perfect sharpness." }
    },
    {
      "@type": "Question",
      "name": "Does PNG support transparency from PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PNG supports transparent backgrounds, so if your PDF has transparent elements, they can be preserved in the PNG output. JPG does not support transparency — it fills transparent areas with white." }
    },
    {
      "@type": "Question",
      "name": "What resolution should I use for PDF to PNG?",
      "acceptedAnswer": { "@type": "Answer", "text": "For web use, 150 DPI is usually sufficient. For presentations and documents, 200-300 DPI gives sharp results. For print-quality output, use 300 DPI or higher. Higher resolution means larger file sizes." }
    },
    {
      "@type": "Question",
      "name": "Can I convert a multi-page PDF to PNG?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it converts each page of your PDF into a separate PNG image. You can download them individually or as a ZIP file. Pro users can batch-convert multiple PDFs at once." }
    },
    {
      "@type": "Question",
      "name": "Will text stay sharp when converting PDF to PNG?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PNG uses lossless compression, so text rendered from a PDF stays crisp and readable at any zoom level. This is one of the main advantages PNG has over JPG for text-heavy documents." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert PDF to PNG Online",
  "description": "Turn your PDF pages into sharp PNG images in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your PDF",
      "text": "Go to PDF.it's PDF to PNG tool and upload your file by clicking or dragging it into the upload area."
    },
    {
      "@type": "HowToStep",
      "name": "Choose your settings",
      "text": "Select the resolution (150 DPI for web, 300 DPI for print) and confirm which pages you want to convert."
    },
    {
      "@type": "HowToStep",
      "name": "Download your PNG images",
      "text": "Click Convert and download your PNG files. Each page becomes a separate PNG image. Download individually or as a ZIP."
    }
  ]
}

export default function ConvertPDFtoPNGPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">How to Convert PDF to PNG Online (Sharp Text + Clean Graphics)</h1>
              <p className="text-xl text-slate-300">
                Need your PDF pages as images with razor-sharp text and clean graphics? PNG is the format you want. Here's how to convert in seconds — free, online, no software needed.
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
              <p className="text-slate-700 font-semibold">Ready to convert? Skip the guide and go straight to the tool.</p>
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

            {/* Why PNG */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Convert PDF to PNG?</h2>
              <p className="text-slate-600 mb-4">
                There are plenty of reasons you might need PDF pages as images. Maybe you want to drop a chart into a presentation, share a page on social media, or embed a document into a website. PNG is the best choice when your PDF contains:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Text and typography.</strong> PNG uses lossless compression, so every letter stays crisp. JPG introduces compression artifacts around text edges, making them look fuzzy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Logos, icons, and line art.</strong> Clean edges with solid colors are PNG's strength. There's no blurring or color bleeding around sharp boundaries.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Graphics with transparency.</strong> PNG supports alpha transparency — perfect for overlaying images on colored backgrounds or in design tools like <Link href="/learn/pdf-to-png-for-design" className="text-orange-600 hover:underline">Figma and Canva</Link>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Screenshots and UI mockups.</strong> Any content with flat colors and hard edges looks dramatically better as PNG than JPG.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Convert PDF to PNG (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your PDF",
                    desc: "Go to the PDF to PNG tool and drag your file into the upload area, or click to browse. Files up to 25MB are free — Pro users can upload up to 200MB.",
                  },
                  {
                    title: "Choose your resolution",
                    desc: "Select the DPI that matches your needs. 150 DPI works great for web and social media. 300 DPI is ideal for presentations and print. Higher DPI means sharper images but larger file sizes.",
                  },
                  {
                    title: "Download your PNG images",
                    desc: "Click Convert. Each PDF page becomes a separate PNG file. Download them individually or grab them all as a ZIP. Pro users can batch-convert multiple PDFs at once.",
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

            {/* PNG vs JPG quick comparison */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">When Should You Use PNG Instead of JPG?</h2>
              <p className="text-slate-600 mb-4">
                Not sure whether you need PNG or JPG? Here's a quick guide. For a deeper comparison, check out <Link href="/learn/pdf-to-jpg-vs-png" className="text-orange-600 hover:underline">PDF to JPG vs PNG: Which Should You Use</Link>.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Use PNG When...</th>
                      <th className="text-left py-3 px-4 font-bold">Use JPG When...</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">Your PDF has text, charts, or diagrams</td>
                      <td className="py-3 px-4">Your PDF is mostly photographs</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4">You need transparency support</td>
                      <td className="py-3 px-4">File size matters more than sharpness</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">You're using the image in design tools</td>
                      <td className="py-3 px-4">You're uploading to social media</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4">Quality is your top priority</td>
                      <td className="py-3 px-4">You need to save storage space</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-500 text-sm mt-3">
                Need JPG instead? Use our <Link href="/pdf-to-jpg" className="text-orange-600 hover:underline">PDF to JPG</Link> tool.
              </p>
            </section>

            {/* Choosing the right resolution */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Choosing the Right Resolution (DPI)</h2>
              <p className="text-slate-600 mb-4">
                DPI (dots per inch) determines how sharp your PNG images are. Higher DPI means more pixels and more detail, but also larger files. Here's what works for common scenarios:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">DPI</th>
                      <th className="text-left py-3 px-4 font-bold">Best For</th>
                      <th className="text-left py-3 px-4 font-bold">File Size</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">72-100</td>
                      <td className="py-3 px-4">Quick previews, thumbnails</td>
                      <td className="py-3 px-4">Small (50-200KB)</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">150</td>
                      <td className="py-3 px-4">Web pages, blog posts, social media</td>
                      <td className="py-3 px-4">Medium (200KB-1MB)</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">300</td>
                      <td className="py-3 px-4">Presentations, print, design work</td>
                      <td className="py-3 px-4">Large (1-5MB)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-500 text-sm mt-3">
                If your PNG files end up too large, you can always <Link href="/compress-pdf" className="text-orange-600 hover:underline">compress the original PDF</Link> first, then convert.
              </p>
            </section>

            {/* Tips for best results */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips for the Best PNG Results</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Start with a clean PDF</h3>
                  <p className="text-slate-600">
                    If your PDF has annotations, form fields, or layers, consider <Link href="/flatten-pdf" className="text-orange-600 hover:underline">flattening it</Link> first. This ensures what you see in the PDF is exactly what appears in the PNG.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convert specific pages only</h3>
                  <p className="text-slate-600">
                    Don't need every page? Convert only the pages you need to save time and storage. If your PDF is large, <Link href="/split-pdf" className="text-orange-600 hover:underline">split it first</Link> to isolate the pages you want.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use PNG for anything going into design software</h3>
                  <p className="text-slate-600">
                    If you're importing pages into Figma, Canva, Photoshop, or a website, PNG preserves quality far better than JPG. Read more in our guide on <Link href="/learn/pdf-to-png-for-design" className="text-orange-600 hover:underline">converting PDF to PNG for design work</Link>.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Convert Your PDF to PNG?</h2>
            <p className="text-slate-300 mb-6">Upload your file and get sharp, lossless PNG images in seconds — free, no signup required.</p>
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
                { title: "PDF to JPG vs PNG: Which Should You Use (Quality vs Size)", href: "/learn/pdf-to-jpg-vs-png" },
                { title: "Save PDF as PNG on Mac (Quick Methods + Best Results)", href: "/learn/save-pdf-as-png-on-mac" },
                { title: "Convert PDF to PNG on iPhone (Fast, High-Quality Export)", href: "/learn/convert-pdf-to-png-on-iphone" },
                { title: "Convert PDF to PNG for Design Work (Figma, Canva, Web)", href: "/learn/pdf-to-png-for-design" },
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
                { q: "How do I convert a PDF to PNG for free?", a: "Upload your PDF to PDF.it's PDF to PNG tool, select your desired resolution, click Convert, and download the PNG images. No signup required for your first 3 files." },
                { q: "Is PNG better than JPG for PDF conversions?", a: "PNG is better when your PDF contains text, graphics, logos, or line art because PNG uses lossless compression — no quality is lost. JPG is better for photo-heavy PDFs where smaller file size matters more than perfect sharpness." },
                { q: "Does PNG support transparency from PDFs?", a: "Yes. PNG supports transparent backgrounds, so if your PDF has transparent elements, they can be preserved in the PNG output. JPG does not support transparency — it fills transparent areas with white." },
                { q: "What resolution should I use for PDF to PNG?", a: "For web use, 150 DPI is usually sufficient. For presentations and documents, 200-300 DPI gives sharp results. For print-quality output, use 300 DPI or higher. Higher resolution means larger file sizes." },
                { q: "Can I convert a multi-page PDF to PNG?", a: "Yes. PDF.it converts each page of your PDF into a separate PNG image. You can download them individually or as a ZIP file. Pro users can batch-convert multiple PDFs at once." },
                { q: "Will text stay sharp when converting PDF to PNG?", a: "Yes. PNG uses lossless compression, so text rendered from a PDF stays crisp and readable at any zoom level. This is one of the main advantages PNG has over JPG for text-heavy documents." },
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

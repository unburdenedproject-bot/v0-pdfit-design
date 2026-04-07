import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Image, ArrowRight } from "lucide-react"

export const metadata = {
  title: "PDF to JPG vs PNG: Which Should You Use (Quality vs Size) | PDF.it",
  description:
    "JPG or PNG — which is the right format for your PDF conversion? Detailed comparison of quality, file size, transparency, and use cases to help you choose the best option.",
  keywords: "pdf to jpg vs png, jpg vs png quality, pdf to image format, png vs jpg comparison, best image format for pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Should I convert my PDF to JPG or PNG?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use PNG if your PDF contains text, graphics, logos, or elements with transparency. Use JPG if your PDF is mostly photos or you need the smallest file size. When in doubt, PNG is the safer choice for quality." }
    },
    {
      "@type": "Question",
      "name": "Is PNG higher quality than JPG?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PNG uses lossless compression, meaning no data is lost. JPG uses lossy compression, which discards some visual data to create smaller files. For text and graphics, this difference is very noticeable — JPG creates visible artifacts around sharp edges." }
    },
    {
      "@type": "Question",
      "name": "Why are PNG files larger than JPG?",
      "acceptedAnswer": { "@type": "Answer", "text": "PNG files are larger because they preserve every pixel exactly. JPG achieves smaller sizes by approximating groups of similar pixels, which works well for photos but creates blurriness around text and hard edges." }
    },
    {
      "@type": "Question",
      "name": "Does JPG support transparency?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. JPG does not support transparency. If your PDF has transparent elements, JPG will fill them with a white background. PNG supports full alpha transparency, preserving see-through areas." }
    },
    {
      "@type": "Question",
      "name": "Which format is better for social media?",
      "acceptedAnswer": { "@type": "Answer", "text": "For social media posts with photos, JPG is fine and keeps file sizes small. For infographics, text-heavy images, or logos, PNG looks significantly better. Most social platforms accept both formats." }
    },
    {
      "@type": "Question",
      "name": "Can I convert the same PDF to both JPG and PNG?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. With PDF.it you can convert the same PDF to JPG and PNG separately. This is useful when you need a high-quality PNG for design work and a smaller JPG for sharing." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Choose Between JPG and PNG for PDF Conversion",
  "description": "Decide whether to convert your PDF to JPG or PNG in 3 steps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Check your PDF content",
      "text": "Look at what your PDF contains. Text, charts, and graphics do better as PNG. Photos and scanned images work fine as JPG."
    },
    {
      "@type": "HowToStep",
      "name": "Consider your use case",
      "text": "If you need transparency or will use the image in design software, choose PNG. If file size matters most (email, messaging), choose JPG."
    },
    {
      "@type": "HowToStep",
      "name": "Convert with PDF.it",
      "text": "Upload your PDF to PDF.it's PDF to PNG or PDF to JPG tool, select your resolution, and download the converted images."
    }
  ]
}

export default function PDFtoJPGvsPNGPage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / PDF to PNG</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF to JPG vs PNG: Which Should You Use?</h1>
              <p className="text-xl text-slate-300">
                JPG and PNG both turn your PDF pages into images — but they produce very different results. Here's when to use each, with real examples and a practical decision guide.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <Image className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Already know what you need? Jump straight to the converter.</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/pdf-to-png"
                className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
              >
                PDF to PNG <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pdf-to-jpg"
                className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
              >
                PDF to JPG <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* The core difference */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">The Core Difference: Lossy vs Lossless</h2>
              <p className="text-slate-600 mb-4">
                The fundamental difference between JPG and PNG comes down to how they compress image data:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>JPG uses lossy compression.</strong> It throws away some visual data to create smaller files. This works great for photos where tiny details don't matter, but it creates visible "artifacts" around text, logos, and sharp edges.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>PNG uses lossless compression.</strong> Every pixel is preserved exactly. The file is larger, but the quality is perfect. Text stays razor-sharp, edges stay clean, and transparency is preserved.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                This distinction matters a lot when converting PDFs because most PDFs contain text — and text is where JPG compression looks worst.
              </p>
            </section>

            {/* Full comparison table */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Full Comparison: JPG vs PNG</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Feature</th>
                      <th className="text-left py-3 px-4 font-bold">JPG</th>
                      <th className="text-left py-3 px-4 font-bold">PNG</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Compression</td>
                      <td className="py-3 px-4">Lossy (data lost)</td>
                      <td className="py-3 px-4">Lossless (data preserved)</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">File Size</td>
                      <td className="py-3 px-4 text-[#14D8C4] font-semibold">Smaller</td>
                      <td className="py-3 px-4">Larger (2-5x bigger)</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Text Quality</td>
                      <td className="py-3 px-4">Artifacts around edges</td>
                      <td className="py-3 px-4 text-[#14D8C4] font-semibold">Perfect, crisp text</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Photo Quality</td>
                      <td className="py-3 px-4 text-[#14D8C4] font-semibold">Excellent (designed for photos)</td>
                      <td className="py-3 px-4">Excellent (but overkill)</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Transparency</td>
                      <td className="py-3 px-4">Not supported</td>
                      <td className="py-3 px-4 text-[#14D8C4] font-semibold">Full alpha support</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Best For</td>
                      <td className="py-3 px-4">Photos, scanned docs, sharing</td>
                      <td className="py-3 px-4">Text, graphics, design, web</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* When JPG wins */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">When JPG Is the Better Choice</h2>
              <p className="text-slate-600 mb-4">
                JPG is ideal when file size is your priority and your PDF is primarily visual content:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Photo-heavy PDFs</h3>
                  <p className="text-slate-600">
                    If your PDF is a photo album, a brochure with large images, or a scanned photo collection, JPG handles these beautifully at a fraction of the file size. The lossy compression is virtually invisible on photographic content.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Sharing via email or messaging</h3>
                  <p className="text-slate-600">
                    When you need to send images quickly and the recipient doesn't need pixel-perfect quality, JPG's smaller size is a practical advantage. A 10-page PDF might produce 30MB of PNGs but only 5MB of JPGs.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Storage-constrained situations</h3>
                  <p className="text-slate-600">
                    If you're converting hundreds of pages and need to keep total storage low, JPG saves significant space. Use our <Link href="/pdf-to-jpg" className="text-[#14D8C4] hover:underline">PDF to JPG</Link> tool for batch conversions.
                  </p>
                </div>
              </div>
            </section>

            {/* When PNG wins */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">When PNG Is the Better Choice</h2>
              <p className="text-slate-600 mb-4">
                PNG is the right format when quality and accuracy matter more than file size:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Documents with text</h3>
                  <p className="text-slate-600">
                    This is the biggest difference. If your PDF contains readable text — contracts, reports, articles, invoices — PNG keeps every letter crisp. JPG introduces a noticeable haze around text characters that makes them look slightly blurry, especially at small sizes.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Graphics and design work</h3>
                  <p className="text-slate-600">
                    Logos, charts, diagrams, and illustrations all have sharp edges and solid colors — exactly the type of content where JPG artifacts are most visible. PNG preserves these perfectly. Learn more in our guide on <Link href="/learn/pdf-to-png-for-design" className="text-[#14D8C4] hover:underline">PDF to PNG for design work</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">When you need transparency</h3>
                  <p className="text-slate-600">
                    PNG supports alpha transparency. If you're placing PDF pages on colored backgrounds or layering them in design tools like Figma or Canva, PNG gives you a clean transparent background. JPG always adds a white background.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Web use and presentations</h3>
                  <p className="text-slate-600">
                    For embedding document images in websites, blog posts, or slide decks, PNG's sharpness makes a visible difference. Text-heavy images at 150-300 DPI look noticeably better as PNG.
                  </p>
                </div>
              </div>
            </section>

            {/* Quick decision guide */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Quick Decision Guide</h2>
              <p className="text-slate-600 mb-4">
                Still not sure? Ask yourself these three questions:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Does your PDF have text?</strong> Go with <Link href="/pdf-to-png" className="text-[#14D8C4] hover:underline">PNG</Link>.</li>
                <li>✓ <strong>Is it mostly photographs?</strong> Go with <Link href="/pdf-to-jpg" className="text-[#14D8C4] hover:underline">JPG</Link>.</li>
                <li>✓ <strong>Do you need transparency?</strong> Only PNG supports it.</li>
                <li>✓ <strong>Is file size your top concern?</strong> JPG is 2-5x smaller.</li>
                <li>✓ <strong>Going into design software?</strong> PNG every time.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                When in doubt, choose PNG. You can always compress the images later, but you can't add back quality that JPG removed.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Convert Your PDF?</h2>
            <p className="text-slate-300 mb-6">Choose your format and convert in seconds — free, no signup required.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/pdf-to-png"
                className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
              >
                <Image className="h-5 w-5" /> Convert to PNG
              </Link>
              <Link
                href="/pdf-to-jpg"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-xl transition-colors"
              >
                <Image className="h-5 w-5" /> Convert to JPG
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Convert PDF to PNG Online (Sharp Text + Clean Graphics)", href: "/learn/convert-pdf-to-png" },
                { title: "Save PDF as PNG on Mac (Quick Methods + Best Results)", href: "/learn/save-pdf-as-png-on-mac" },
                { title: "Convert PDF to PNG on iPhone (Fast, High-Quality Export)", href: "/learn/convert-pdf-to-png-on-iphone" },
                { title: "Convert PDF to PNG for Design Work (Figma, Canva, Web)", href: "/learn/pdf-to-png-for-design" },
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
                { q: "Should I convert my PDF to JPG or PNG?", a: "Use PNG if your PDF contains text, graphics, logos, or elements with transparency. Use JPG if your PDF is mostly photos or you need the smallest file size. When in doubt, PNG is the safer choice for quality." },
                { q: "Is PNG higher quality than JPG?", a: "Yes. PNG uses lossless compression, meaning no data is lost. JPG uses lossy compression, which discards some visual data to create smaller files. For text and graphics, this difference is very noticeable." },
                { q: "Why are PNG files larger than JPG?", a: "PNG files are larger because they preserve every pixel exactly. JPG achieves smaller sizes by approximating groups of similar pixels, which works well for photos but creates blurriness around text and hard edges." },
                { q: "Does JPG support transparency?", a: "No. JPG does not support transparency. If your PDF has transparent elements, JPG will fill them with a white background. PNG supports full alpha transparency." },
                { q: "Which format is better for social media?", a: "For social media posts with photos, JPG is fine and keeps file sizes small. For infographics, text-heavy images, or logos, PNG looks significantly better. Most social platforms accept both formats." },
                { q: "Can I convert the same PDF to both JPG and PNG?", a: "Yes. With PDF.it you can convert the same PDF to JPG and PNG separately. This is useful when you need a high-quality PNG for design work and a smaller JPG for sharing." },
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

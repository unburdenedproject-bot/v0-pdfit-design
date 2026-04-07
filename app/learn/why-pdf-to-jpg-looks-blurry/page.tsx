import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ImageIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Why Your PDF to JPG Looks Blurry (And How to Fix It) | PDF.it",
  description:
    "PDF to JPG conversion looking blurry? Learn the 5 most common causes and how to fix each one. Get sharp, high-quality JPG images from your PDFs every time.",
  keywords: "pdf to jpg blurry, pdf to jpg low quality, blurry pdf conversion, pdf to image quality, fix blurry pdf to jpg",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why does my PDF to JPG look blurry?",
      "acceptedAnswer": { "@type": "Answer", "text": "The most common cause is converting at too low a DPI (dots per inch). Most free tools default to 72 or 96 DPI, which produces small, low-resolution images. Convert at 200-300 DPI for sharp results." }
    },
    {
      "@type": "Question",
      "name": "What DPI should I use to avoid blurry JPGs?",
      "acceptedAnswer": { "@type": "Answer", "text": "For screen viewing, 150 DPI is the minimum for acceptable quality. For documents, presentations, and sharing, 200 DPI is recommended. For printing or maximum quality, use 300 DPI." }
    },
    {
      "@type": "Question",
      "name": "Is PNG better than JPG for quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PNG uses lossless compression, so there are no compression artifacts. JPG uses lossy compression which can create fuzzy edges around text and sharp lines. For text-heavy PDFs, PNG will always look sharper than JPG." }
    },
    {
      "@type": "Question",
      "name": "Can I fix a blurry JPG that was already converted?",
      "acceptedAnswer": { "@type": "Answer", "text": "Not really. Once quality is lost in a JPG conversion, you can't recover it. The solution is to go back to the original PDF and reconvert at a higher DPI with better quality settings. Never try to upscale a low-quality JPG." }
    },
    {
      "@type": "Question",
      "name": "Why is my scanned PDF blurry when converted to JPG?",
      "acceptedAnswer": { "@type": "Answer", "text": "If the original scan was done at low resolution (below 200 DPI), the PDF itself contains a low-quality image. No converter can add detail that isn't there. If possible, rescan the document at 300 DPI or use OCR to extract the text." }
    },
    {
      "@type": "Question",
      "name": "Does file size affect JPG quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Smaller JPG files use more compression, which reduces quality. A 50KB JPG will look much worse than a 500KB JPG of the same page. If you need both small size and good quality, convert to PNG (lossless) and then compress the PNG separately." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Fix Blurry PDF to JPG Conversions",
  "description": "Get sharp, high-quality JPG images from your PDFs by following these 3 steps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Check your DPI setting",
      "text": "Make sure you're converting at 200 DPI or higher. Most blurry results come from tools that default to 72 or 96 DPI."
    },
    {
      "@type": "HowToStep",
      "name": "Use a high-quality converter",
      "text": "Upload your PDF to PDF.it's PDF to JPG tool, which lets you choose DPI settings and produces high-quality output."
    },
    {
      "@type": "HowToStep",
      "name": "Consider PNG for text-heavy pages",
      "text": "If your PDF has lots of text or sharp lines, convert to PNG instead of JPG. PNG uses lossless compression and won't add fuzzy artifacts around text."
    }
  ]
}

export default function WhyPdfToJpgLooksBlurryPage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / PDF to JPG</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Why Your PDF to JPG Looks Blurry (And How to Fix It)</h1>
              <p className="text-xl text-slate-300">
                You converted a PDF to JPG and the result looks fuzzy, pixelated, or washed out. Here's why it happens and exactly how to fix it.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <ImageIcon className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Want sharp JPGs? Convert with control over DPI and quality.</p>
            </div>
            <Link
              href="/pdf-to-jpg"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Convert PDF to JPG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* The 5 causes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">The 5 Most Common Causes of Blurry PDF-to-JPG Images</h2>
              <p className="text-slate-600 mb-6">
                Blurry results almost always come down to one of these five issues. The good news: every single one is fixable.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">1. Low DPI (The #1 Culprit)</h3>
                  <p className="text-slate-600 mb-2">
                    DPI stands for "dots per inch" — it controls how many pixels make up each inch of the image. Many free tools convert at 72 or 96 DPI by default. At 72 DPI, a standard letter-size page becomes only about 612 x 792 pixels — that's tiny by today's standards.
                  </p>
                  <p className="text-slate-600">
                    <strong>The fix:</strong> Convert at 200 DPI minimum. For print or presentations, use 300 DPI. PDF.it's <Link href="/pdf-to-jpg" className="text-[#14D8C4] hover:underline">PDF to JPG tool</Link> lets you choose your DPI before converting.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">2. JPG Compression Artifacts</h3>
                  <p className="text-slate-600 mb-2">
                    JPG is a "lossy" format — it reduces file size by throwing away image data. This creates visible artifacts: fuzzy halos around text, blocky areas in gradients, and soft edges on sharp lines. The more compression applied, the worse it looks.
                  </p>
                  <p className="text-slate-600">
                    <strong>The fix:</strong> Use high quality (low compression) settings when converting. Or switch to PNG format — it's lossless, meaning zero quality loss. Use our <Link href="/pdf-to-png" className="text-[#14D8C4] hover:underline">PDF to PNG tool</Link> for text-heavy documents.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">3. The Original PDF Is Low Quality</h3>
                  <p className="text-slate-600 mb-2">
                    No converter can create detail that doesn't exist in the source. If your PDF was created from a low-resolution scan (100-150 DPI), a poor photo, or a heavily compressed original, the JPG will look just as bad — or worse.
                  </p>
                  <p className="text-slate-600">
                    <strong>The fix:</strong> If possible, get a higher-quality version of the original document. For scanned documents, rescan at 300 DPI. If the PDF is all you have, converting at a higher DPI won't help — you can't add detail that isn't there.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">4. Stretching or Upscaling the Image</h3>
                  <p className="text-slate-600 mb-2">
                    Converting at 72 DPI and then stretching the image to fill a PowerPoint slide or a web page makes blurriness much worse. A 612 x 792 pixel image stretched to 1920 x 1080 will look terrible.
                  </p>
                  <p className="text-slate-600">
                    <strong>The fix:</strong> Always convert at the DPI appropriate for your final use. If the image will be displayed at 1920 pixels wide, you need at least 200 DPI to have enough pixels.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">5. Application-Level Compression</h3>
                  <p className="text-slate-600 mb-2">
                    Some applications automatically compress images when you import them. PowerPoint, for example, compresses pictures by default when you save the file. Google Docs resizes images. Email clients often downsample attachments.
                  </p>
                  <p className="text-slate-600">
                    <strong>The fix:</strong> In PowerPoint, go to File &gt; Options &gt; Advanced and set image quality to "High fidelity." In other apps, look for image compression settings and disable them.
                  </p>
                </div>
              </div>
            </section>

            {/* Quick fix checklist */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Quick Fix Checklist</h2>
              <p className="text-slate-600 mb-4">
                If your converted JPGs look blurry, go through this checklist:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>- Are you converting at 200+ DPI? If not, reconvert at a higher DPI.</li>
                <li>- Is your converter using high JPG quality? Low quality = more compression artifacts.</li>
                <li>- Is the original PDF high quality? Check by zooming to 400% in a PDF viewer — if it's blurry there, it'll be blurry as a JPG.</li>
                <li>- Are you stretching the image after conversion? The image should be used at or below its native resolution.</li>
                <li>- Is the application compressing your images? Check PowerPoint, Google Docs, or email settings.</li>
                <li>- Should you be using PNG instead? For text and diagrams, PNG always looks sharper.</li>
              </ul>
            </section>

            {/* When to use PNG */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">When to Use PNG Instead of JPG</h2>
              <p className="text-slate-600 mb-4">
                Sometimes the solution isn't fixing your JPG settings — it's using a different format entirely. PNG is the better choice when:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Your PDF is mostly text.</strong> JPG compression creates visible artifacts around letter edges. PNG preserves text perfectly — every letter stays razor sharp.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Your PDF has diagrams, charts, or line art.</strong> Sharp lines and solid colors compress badly in JPG. PNG handles them perfectly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>You need pixel-perfect accuracy.</strong> Legal documents, technical drawings, or any image where accuracy matters — PNG is the only choice.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                The trade-off is file size: PNG files are 2-5x larger than JPGs. If that's not an issue, <Link href="/pdf-to-png" className="text-[#14D8C4] hover:underline">convert to PNG</Link> for the best quality.
              </p>
            </section>

            {/* DPI comparison */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">DPI Comparison: What Each Setting Looks Like</h2>
              <p className="text-slate-600 mb-4">
                Here's a practical comparison of how different DPI settings affect a standard letter-size PDF page:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">DPI</th>
                      <th className="text-left py-3 px-4 font-bold">Image Dimensions</th>
                      <th className="text-left py-3 px-4 font-bold">Quality</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">72 DPI</td>
                      <td className="py-3 px-4">612 x 792 px</td>
                      <td className="py-3 px-4">Poor — text looks fuzzy, images are pixelated</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">150 DPI</td>
                      <td className="py-3 px-4">1275 x 1650 px</td>
                      <td className="py-3 px-4">Decent — fine for web and email</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">200 DPI</td>
                      <td className="py-3 px-4">1700 x 2200 px</td>
                      <td className="py-3 px-4">Good — sharp on screens, clean in presentations</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">300 DPI</td>
                      <td className="py-3 px-4">2550 x 3300 px</td>
                      <td className="py-3 px-4">Excellent — print quality, maximum detail</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4">
                At 72 DPI, each page has about 480,000 pixels. At 300 DPI, it has 8.4 million. That's a 17x difference in detail.
              </p>
            </section>

            {/* Compress after converting */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">If You Need Small Files AND Good Quality</h2>
              <p className="text-slate-600 mb-4">
                There's a common dilemma: you want sharp images but you also need them to be small (for email, web upload, etc.). Here's the best approach:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>1. Convert at 200 DPI with high quality settings — this gives you sharp images.</li>
                <li>2. If the file size is too large, <Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">compress the original PDF first</Link>, then convert to JPG.</li>
                <li>3. Use 150 DPI as a compromise — still sharp enough for screens, but significantly smaller files.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Never convert at high DPI and then try to compress the resulting JPG further — this adds a second round of lossy compression and makes quality even worse.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Get Sharp JPGs From Your PDFs</h2>
            <p className="text-slate-300 mb-6">Convert at 200+ DPI with full quality control — no blurry results.</p>
            <Link
              href="/pdf-to-jpg"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <ImageIcon className="h-5 w-5" /> Convert PDF to JPG
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Convert PDF to JPG Online (Fast & High Quality)", href: "/learn/convert-pdf-to-jpg" },
                { title: "How to Save One PDF Page as a JPG (Windows, Mac, Mobile)", href: "/learn/save-pdf-page-as-jpg" },
                { title: "Convert PDF to JPG for PowerPoint (Best Settings + Tips)", href: "/learn/pdf-to-jpg-for-powerpoint" },
                { title: "Convert PDF to JPG on iPhone (No Apps Needed)", href: "/learn/pdf-to-jpg-on-iphone" },
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
                { q: "Why does my PDF to JPG look blurry?", a: "The most common cause is converting at too low a DPI (dots per inch). Most free tools default to 72 or 96 DPI, which produces small, low-resolution images. Convert at 200-300 DPI for sharp results." },
                { q: "What DPI should I use to avoid blurry JPGs?", a: "For screen viewing, 150 DPI is the minimum for acceptable quality. For documents, presentations, and sharing, 200 DPI is recommended. For printing or maximum quality, use 300 DPI." },
                { q: "Is PNG better than JPG for quality?", a: "Yes. PNG uses lossless compression, so there are no compression artifacts. JPG uses lossy compression which can create fuzzy edges around text and sharp lines. For text-heavy PDFs, PNG will always look sharper than JPG." },
                { q: "Can I fix a blurry JPG that was already converted?", a: "Not really. Once quality is lost in a JPG conversion, you can't recover it. The solution is to go back to the original PDF and reconvert at a higher DPI with better quality settings." },
                { q: "Why is my scanned PDF blurry when converted to JPG?", a: "If the original scan was done at low resolution (below 200 DPI), the PDF itself contains a low-quality image. No converter can add detail that isn't there. If possible, rescan the document at 300 DPI." },
                { q: "Does file size affect JPG quality?", a: "Yes. Smaller JPG files use more compression, which reduces quality. A 50KB JPG will look much worse than a 500KB JPG of the same page. If you need both small size and good quality, consider PNG format instead." },
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

import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Image, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Save PDF as PNG on Mac (Quick Methods + Best Results) | PDF.it",
  description:
    "Learn how to save a PDF as PNG on Mac using Preview, PDF.it, or Automator. Covers single page and batch conversion with quality comparison and best practices.",
  keywords: "save pdf as png mac, pdf to png mac, convert pdf to png on mac, mac preview pdf to png, export pdf as png mac",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I save a PDF as PNG using Mac Preview?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Open the PDF in Preview, go to File > Export, choose PNG from the format dropdown, and set your resolution. However, Preview only exports one page at a time, which is slow for multi-page PDFs." }
    },
    {
      "@type": "Question",
      "name": "How do I convert all pages of a PDF to PNG on Mac?",
      "acceptedAnswer": { "@type": "Answer", "text": "Mac Preview only exports one page at a time. For multi-page PDFs, use PDF.it's online converter — upload your PDF and all pages are converted to PNG at once, downloadable as a ZIP file." }
    },
    {
      "@type": "Question",
      "name": "What resolution should I use when exporting PDF to PNG on Mac?",
      "acceptedAnswer": { "@type": "Answer", "text": "For web use, 150 DPI is sufficient. For presentations and print, use 300 DPI. Mac Preview's default export is 72 DPI which may look blurry — increase it for sharper results." }
    },
    {
      "@type": "Question",
      "name": "Is there a free way to batch convert PDF to PNG on Mac?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can use macOS Automator to create a workflow, but it requires some setup. The easiest free option is PDF.it's online tool — upload your PDF, convert all pages, and download the PNGs as a ZIP." }
    },
    {
      "@type": "Question",
      "name": "Why does my PDF look blurry when saved as PNG on Mac?",
      "acceptedAnswer": { "@type": "Answer", "text": "This usually happens because the export resolution is too low. Mac Preview defaults to 72 DPI. Increase the resolution to 150 DPI (web) or 300 DPI (print) for sharp results. Also make sure you're saving as PNG, not JPG — JPG adds compression artifacts." }
    },
    {
      "@type": "Question",
      "name": "Can I convert a PDF to PNG on Mac without installing software?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Preview is built into macOS and handles basic single-page exports. For multi-page or batch conversions without installing anything, use PDF.it in your browser — it works on Safari, Chrome, and Firefox." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Save PDF as PNG on Mac",
  "description": "Convert your PDF pages to PNG images on Mac in 3 steps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Open your PDF",
      "text": "Open the PDF in Mac Preview (double-click the file) or navigate to PDF.it's PDF to PNG tool in your browser."
    },
    {
      "@type": "HowToStep",
      "name": "Export as PNG",
      "text": "In Preview: File > Export, choose PNG format, set resolution. In PDF.it: upload the file, select resolution, click Convert."
    },
    {
      "@type": "HowToStep",
      "name": "Save your PNG files",
      "text": "Choose your save location and download. PDF.it converts all pages at once and offers a ZIP download for multi-page PDFs."
    }
  ]
}

export default function SavePDFasPNGonMacPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Save PDF as PNG on Mac (Quick Methods + Best Results)</h1>
              <p className="text-xl text-slate-300">
                Need to turn your PDF into PNG images on a Mac? There are several ways — from the built-in Preview app to online tools. Here's how to get the sharpest results with the least effort.
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
              <p className="text-slate-700 font-semibold">Want all pages converted at once? Use our online converter.</p>
            </div>
            <Link
              href="/pdf-to-png"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Convert PDF to PNG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Method 1: Preview */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Method 1: Using Mac Preview (Built-In)</h2>
              <p className="text-slate-600 mb-4">
                Preview comes pre-installed on every Mac and can export individual PDF pages as PNG. It's the quickest option for single pages, but it has limitations for multi-page documents.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Open your PDF in Preview",
                    desc: "Double-click the PDF file. It should open in Preview by default. If it opens in a different app, right-click the file and choose Open With > Preview.",
                  },
                  {
                    title: "Navigate to the page you want",
                    desc: "Use the sidebar thumbnails to find the page you want to export. Click on it to select it.",
                  },
                  {
                    title: "Export as PNG",
                    desc: "Go to File > Export. In the Format dropdown, select PNG. Set the resolution — increase it from the default 72 DPI to 150 or 300 DPI for sharper results. Click Save.",
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
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-sm text-amber-800">
                  <strong>Limitation:</strong> Preview only exports one page at a time. For multi-page PDFs, you'd need to repeat this process for every page — tedious for long documents. See Method 2 for a faster approach.
                </p>
              </div>
            </section>

            {/* Method 2: PDF.it */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Method 2: Using PDF.it (All Pages at Once)</h2>
              <p className="text-slate-600 mb-4">
                PDF.it's online converter handles the entire PDF at once — no need to export page by page. It works in Safari, Chrome, or any browser on your Mac.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Open the PDF to PNG tool",
                    desc: "Go to pdf.it.com/pdf-to-png in your browser. No software to install — it works entirely online.",
                  },
                  {
                    title: "Upload your PDF",
                    desc: "Drag your PDF into the upload area or click to browse. Files up to 25MB are free. Pro users can upload up to 200MB.",
                  },
                  {
                    title: "Download all pages as PNG",
                    desc: "Click Convert. Every page is converted to a separate PNG image. Download individually or grab them all as a ZIP file.",
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

            {/* Comparison table */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Preview vs PDF.it: Which to Use?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Feature</th>
                      <th className="text-left py-3 px-4 font-bold">Mac Preview</th>
                      <th className="text-left py-3 px-4 font-bold">PDF.it</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Multi-page export</td>
                      <td className="py-3 px-4">One page at a time</td>
                      <td className="py-3 px-4 text-[#14D8C4] font-semibold">All pages at once</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Installation</td>
                      <td className="py-3 px-4 text-[#14D8C4] font-semibold">Built-in</td>
                      <td className="py-3 px-4">None (works in browser)</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Resolution control</td>
                      <td className="py-3 px-4">Yes</td>
                      <td className="py-3 px-4">Yes</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Batch conversion</td>
                      <td className="py-3 px-4">No</td>
                      <td className="py-3 px-4 text-[#14D8C4] font-semibold">Yes (Pro)</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">ZIP download</td>
                      <td className="py-3 px-4">No</td>
                      <td className="py-3 px-4 text-[#14D8C4] font-semibold">Yes</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Best for</td>
                      <td className="py-3 px-4">Quick single-page export</td>
                      <td className="py-3 px-4">Multi-page and batch jobs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Resolution tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Getting Sharp Results: Resolution Matters</h2>
              <p className="text-slate-600 mb-4">
                The most common complaint about PDF-to-PNG conversions on Mac is blurry output. This almost always comes down to resolution. Here's what to aim for:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>72 DPI (Preview default):</strong> Too low for most uses. Text looks soft and images lack detail. Avoid this unless you only need a tiny thumbnail.</li>
                <li>✓ <strong>150 DPI:</strong> Good for web, blog posts, and screen sharing. Text is readable and images look clean on standard displays.</li>
                <li>✓ <strong>300 DPI:</strong> Ideal for presentations, print, and Retina displays. This matches the resolution of most professional workflows.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                If your PNG files end up larger than you'd like at high DPI, you can <Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">compress the original PDF</Link> first to reduce the amount of embedded image data.
              </p>
            </section>

            {/* Batch tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Batch Converting Multiple PDFs on Mac</h2>
              <p className="text-slate-600 mb-4">
                If you have several PDFs to convert, doing them one at a time in Preview is impractical. Here are better approaches:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">PDF.it Pro batch conversion</h3>
                  <p className="text-slate-600">
                    With a Pro subscription, you can upload multiple PDFs at once and convert them all to PNG in a single batch. Each PDF's pages are exported as separate PNGs, all packaged into a downloadable ZIP.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Split first, then convert</h3>
                  <p className="text-slate-600">
                    For very large PDFs, consider <Link href="/split-pdf" className="text-[#14D8C4] hover:underline">splitting your PDF</Link> into smaller sections first, then converting each section to PNG. This gives you more control over which pages you export.
                  </p>
                </div>
              </div>
            </section>

            {/* PNG vs JPG on Mac */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Should You Save as PNG or JPG on Mac?</h2>
              <p className="text-slate-600 mb-4">
                Mac Preview lets you export as both PNG and JPG. The choice depends on your content. PNG is better for text, graphics, and anything with sharp edges. JPG is better for photo-heavy PDFs where file size matters. For a detailed breakdown, see our <Link href="/learn/pdf-to-jpg-vs-png" className="text-[#14D8C4] hover:underline">JPG vs PNG comparison guide</Link>.
              </p>
              <p className="text-slate-600">
                If you decide JPG is the better fit, use our <Link href="/pdf-to-jpg" className="text-[#14D8C4] hover:underline">PDF to JPG</Link> tool for fast, multi-page conversion.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Convert All PDF Pages to PNG — Fast</h2>
            <p className="text-slate-300 mb-6">No more exporting one page at a time. Upload your PDF and get every page as a sharp PNG in seconds.</p>
            <Link
              href="/pdf-to-png"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Image className="h-5 w-5" /> Convert PDF to PNG Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Convert PDF to PNG Online (Sharp Text + Clean Graphics)", href: "/learn/convert-pdf-to-png" },
                { title: "PDF to JPG vs PNG: Which Should You Use (Quality vs Size)", href: "/learn/pdf-to-jpg-vs-png" },
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
                { q: "Can I save a PDF as PNG using Mac Preview?", a: "Yes. Open the PDF in Preview, go to File > Export, choose PNG from the format dropdown, and set your resolution. However, Preview only exports one page at a time, which is slow for multi-page PDFs." },
                { q: "How do I convert all pages of a PDF to PNG on Mac?", a: "Mac Preview only exports one page at a time. For multi-page PDFs, use PDF.it's online converter — upload your PDF and all pages are converted to PNG at once, downloadable as a ZIP file." },
                { q: "What resolution should I use when exporting PDF to PNG on Mac?", a: "For web use, 150 DPI is sufficient. For presentations and print, use 300 DPI. Mac Preview's default export is 72 DPI which may look blurry — increase it for sharper results." },
                { q: "Is there a free way to batch convert PDF to PNG on Mac?", a: "You can use macOS Automator to create a workflow, but it requires some setup. The easiest free option is PDF.it's online tool — upload your PDF, convert all pages, and download the PNGs as a ZIP." },
                { q: "Why does my PDF look blurry when saved as PNG on Mac?", a: "This usually happens because the export resolution is too low. Mac Preview defaults to 72 DPI. Increase the resolution to 150 DPI (web) or 300 DPI (print) for sharp results." },
                { q: "Can I convert a PDF to PNG on Mac without installing software?", a: "Yes. Preview is built into macOS and handles basic single-page exports. For multi-page or batch conversions without installing anything, use PDF.it in your browser." },
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

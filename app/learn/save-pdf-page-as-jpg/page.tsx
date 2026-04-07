import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ImageIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Save One PDF Page as a JPG (Windows, Mac, Mobile) | PDF.it",
  description:
    "Learn how to extract and save a single PDF page as a JPG image on any device. Step-by-step guide for Windows, Mac, iPhone, and Android — no software needed.",
  keywords: "save pdf page as jpg, extract pdf page as image, pdf single page to jpg, save one page of pdf as image",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I save just one page of a PDF as a JPG?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it's PDF to JPG tool, select the specific page you want, and convert just that page. Download the single JPG image — no need to convert the entire document." }
    },
    {
      "@type": "Question",
      "name": "Can I save a PDF page as a JPG on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Open PDF.it in your phone's browser (Safari or Chrome), upload your PDF, select the page you need, and download the JPG. It saves directly to your phone's photo library." }
    },
    {
      "@type": "Question",
      "name": "How do I save a PDF page as a JPG on Windows?",
      "acceptedAnswer": { "@type": "Answer", "text": "The fastest way is to use an online tool like PDF.it — no software installation needed. Alternatively, you can take a screenshot with Snipping Tool, but this gives lower quality than a proper conversion at 200-300 DPI." }
    },
    {
      "@type": "Question",
      "name": "How do I save a PDF page as a JPG on Mac?",
      "acceptedAnswer": { "@type": "Answer", "text": "On Mac, you can open the PDF in Preview and export as JPEG (File > Export). However, this only works for single pages and quality settings are limited. PDF.it gives you more control over DPI and quality." }
    },
    {
      "@type": "Question",
      "name": "What quality should I use when saving a PDF page as JPG?",
      "acceptedAnswer": { "@type": "Answer", "text": "For most uses (email, social media, messaging), 150 DPI is plenty. For inserting into documents or presentations, use 200 DPI. For printing, use 300 DPI. Higher DPI means sharper images but larger files." }
    },
    {
      "@type": "Question",
      "name": "Can I save multiple specific pages as separate JPGs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can select multiple individual pages (for example, pages 1, 3, and 7) and convert just those to JPGs. Each selected page becomes its own JPG file that you can download separately." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Save a PDF Page as a JPG",
  "description": "Extract and save a single PDF page as a high-quality JPG image in 3 steps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your PDF",
      "text": "Go to PDF.it's PDF to JPG tool and upload the PDF that contains the page you want to save as an image."
    },
    {
      "@type": "HowToStep",
      "name": "Select the page to save",
      "text": "Choose the specific page you want to convert to JPG. You can select one or multiple individual pages."
    },
    {
      "@type": "HowToStep",
      "name": "Download the JPG",
      "text": "Click Convert and download your JPG image. The page is saved as a high-quality image file you can share, insert into documents, or post online."
    }
  ]
}

export default function SavePdfPageAsJpgPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">How to Save One PDF Page as a JPG (Windows, Mac, Mobile)</h1>
              <p className="text-xl text-slate-300">
                You don't need the whole PDF — just one page as an image. Here's how to extract and save a single page as a JPG on any device, in under a minute.
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
              <p className="text-slate-700 font-semibold">Need to save a page as JPG right now? Use the tool directly.</p>
            </div>
            <Link
              href="/pdf-to-jpg"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              PDF to JPG Tool <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* When you need this */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">When Would You Need to Save a PDF Page as JPG?</h2>
              <p className="text-slate-600 mb-4">
                This comes up more often than you'd think. Some of the most common situations:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Saving a receipt or invoice.</strong> You received a multi-page PDF but only need page 1 (the receipt) as an image for your expense report or records.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Grabbing a chart or graph.</strong> A report has a chart on page 4 that you want to include in a presentation or email — saving that page as JPG is the fastest way.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Saving a certificate or diploma.</strong> You want to share your certificate on LinkedIn or keep it in your photos — a JPG is easier to share than a PDF file.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Creating a preview image.</strong> You need the first page of a document as a thumbnail or preview for a website, email, or document listing.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">The Fastest Method: Use an Online Tool</h2>
              <p className="text-slate-600 mb-4">
                The quickest way to save a PDF page as a JPG — on any device — is to use an online converter. No software to install, works on Windows, Mac, iPhone, and Android:
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your PDF",
                    desc: "Go to the PDF to JPG tool and upload your PDF. It works in any browser — Chrome, Safari, Firefox, Edge.",
                  },
                  {
                    title: "Select the specific page",
                    desc: "Choose which page(s) you want to save as JPGs. You can pick individual pages like 1, 3, and 5 — you don't have to convert the entire document.",
                  },
                  {
                    title: "Download the JPG",
                    desc: "Click Convert. Your selected page is saved as a high-quality JPG image. Right-click to save it, or it downloads automatically depending on your browser.",
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

            {/* Platform specific */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Platform-Specific Methods</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Windows</h3>
                  <p className="text-slate-600 mb-2">
                    <strong>Option 1 (Recommended):</strong> Use <Link href="/pdf-to-jpg" className="text-[#14D8C4] hover:underline">PDF.it's online tool</Link> in your browser — no installation needed and you get proper high-DPI output.
                  </p>
                  <p className="text-slate-600 mb-2">
                    <strong>Option 2:</strong> Use the Snipping Tool (Win + Shift + S) to screenshot the page. This is quick but gives you screen-resolution quality, which may look blurry if you zoom in or print.
                  </p>
                  <p className="text-slate-600">
                    <strong>Option 3:</strong> Open the PDF in Adobe Acrobat and use File &gt; Export &gt; Image &gt; JPEG. This works but requires Acrobat (not the free Reader).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Mac</h3>
                  <p className="text-slate-600 mb-2">
                    <strong>Option 1:</strong> Open in Preview, go to the page you want, then File &gt; Export and select JPEG. Set the quality slider and click Save. This works for single pages.
                  </p>
                  <p className="text-slate-600">
                    <strong>Option 2:</strong> Use <Link href="/pdf-to-jpg" className="text-[#14D8C4] hover:underline">PDF.it online</Link> for more control over DPI and to handle multiple pages at once.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">iPhone and iPad</h3>
                  <p className="text-slate-600">
                    iOS doesn't have a built-in way to convert PDF pages to JPG. The easiest method is to open PDF.it in Safari, upload your PDF, select the page, and save the resulting JPG to your Photos app. No app download required. See our detailed guide: <Link href="/learn/pdf-to-jpg-on-iphone" className="text-[#14D8C4] hover:underline">Convert PDF to JPG on iPhone</Link>.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Android</h3>
                  <p className="text-slate-600">
                    Similar to iPhone — open PDF.it in Chrome, upload your PDF, and download the converted JPG. You can also take a screenshot of the page, but the quality will be limited to your screen resolution.
                  </p>
                </div>
              </div>
            </section>

            {/* Why not screenshot */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why a Screenshot Isn't Good Enough</h2>
              <p className="text-slate-600 mb-4">
                Taking a screenshot of a PDF page is tempting because it's quick. But there are real drawbacks:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>- <strong>Low resolution.</strong> Screenshots are limited to your screen's resolution (usually 72-144 DPI). A proper conversion gives you 200-300 DPI — much sharper.</li>
                <li>- <strong>Cropping issues.</strong> You have to manually frame the page, and you'll often get toolbars, scroll bars, or uneven margins in the image.</li>
                <li>- <strong>No batch capability.</strong> If you need multiple pages, you'd have to screenshot each one individually.</li>
                <li>- <strong>Inconsistent sizing.</strong> Each screenshot might be a slightly different size, which looks unprofessional in presentations.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                A proper PDF-to-JPG conversion avoids all of these problems and produces clean, correctly sized images.
              </p>
            </section>

            {/* Split first tip */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Alternative: Split the PDF First, Then Convert</h2>
              <p className="text-slate-600 mb-4">
                If you need both a PDF and a JPG of a specific page, you can use a two-step approach:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>1. Use <Link href="/split-pdf" className="text-[#14D8C4] hover:underline">Split PDF</Link> to extract the page as its own single-page PDF.</li>
                <li>2. Then convert that single-page PDF to JPG using <Link href="/pdf-to-jpg" className="text-[#14D8C4] hover:underline">PDF to JPG</Link>.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                This way you keep the original-quality PDF page and also have a JPG version for sharing.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Save Your PDF Page as a JPG</h2>
            <p className="text-slate-300 mb-6">Upload your PDF, pick the page, and download a high-quality JPG in seconds.</p>
            <Link
              href="/pdf-to-jpg"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <ImageIcon className="h-5 w-5" /> PDF to JPG Tool
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
                { title: "Convert PDF to JPG for PowerPoint (Best Settings + Tips)", href: "/learn/pdf-to-jpg-for-powerpoint" },
                { title: "Why Your PDF to JPG Looks Blurry (And How to Fix It)", href: "/learn/why-pdf-to-jpg-looks-blurry" },
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
                { q: "How do I save just one page of a PDF as a JPG?", a: "Upload your PDF to PDF.it's PDF to JPG tool, select the specific page you want, and convert just that page. Download the single JPG image — no need to convert the entire document." },
                { q: "Can I save a PDF page as a JPG on my phone?", a: "Yes. Open PDF.it in your phone's browser (Safari or Chrome), upload your PDF, select the page you need, and download the JPG. It saves directly to your phone's photo library." },
                { q: "How do I save a PDF page as a JPG on Windows?", a: "The fastest way is to use an online tool like PDF.it — no software installation needed. Alternatively, you can take a screenshot with Snipping Tool, but this gives lower quality than a proper conversion at 200-300 DPI." },
                { q: "How do I save a PDF page as a JPG on Mac?", a: "On Mac, you can open the PDF in Preview and export as JPEG (File > Export). However, this only works for single pages and quality settings are limited. PDF.it gives you more control over DPI and quality." },
                { q: "What quality should I use when saving a PDF page as JPG?", a: "For most uses (email, social media, messaging), 150 DPI is plenty. For inserting into documents or presentations, use 200 DPI. For printing, use 300 DPI. Higher DPI means sharper images but larger files." },
                { q: "Can I save multiple specific pages as separate JPGs?", a: "Yes. You can select multiple individual pages (for example, pages 1, 3, and 7) and convert just those to JPGs. Each selected page becomes its own JPG file that you can download separately." },
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

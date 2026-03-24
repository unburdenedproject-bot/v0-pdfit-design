import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ImageIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Convert PDF to JPG Online (Fast & High Quality) | PDF.it",
  description:
    "Learn how to convert PDF to JPG online in seconds. Step-by-step guide with quality settings, batch conversion tips, and when to use JPG vs PNG — free, no software needed.",
  keywords: "convert pdf to jpg online, pdf to jpg, pdf to image, convert pdf to image, pdf to jpeg",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert a PDF to JPG for free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it's PDF to JPG tool, choose your quality settings, click Convert, and download your JPG images. No signup required for your first 3 files." }
    },
    {
      "@type": "Question",
      "name": "Does converting PDF to JPG lose quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "JPG uses lossy compression, so there is always some quality loss compared to the original PDF. However, at high quality settings (200-300 DPI), the difference is barely noticeable for most uses like presentations, social media, or web pages." }
    },
    {
      "@type": "Question",
      "name": "What DPI should I use for PDF to JPG?",
      "acceptedAnswer": { "@type": "Answer", "text": "For screen viewing and web use, 150 DPI is sufficient. For presentations and documents, 200 DPI works well. For printing or when you need maximum detail, use 300 DPI. Higher DPI means larger file sizes." }
    },
    {
      "@type": "Question",
      "name": "Can I convert a multi-page PDF to JPG?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. When you convert a multi-page PDF, each page becomes a separate JPG image. PDF.it converts all pages at once and lets you download them individually or as a ZIP file." }
    },
    {
      "@type": "Question",
      "name": "Should I convert to JPG or PNG?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use JPG for photos, scanned documents, and when file size matters. Use PNG for text-heavy pages, diagrams, screenshots, or when you need transparency. PNG files are larger but have no quality loss." }
    },
    {
      "@type": "Question",
      "name": "Can I convert PDF to JPG on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in any mobile browser including Safari on iPhone and Chrome on Android. Upload your PDF, convert it, and save the JPG images directly to your phone. No app needed." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert PDF to JPG Online",
  "description": "Convert your PDF pages to high-quality JPG images in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your PDF",
      "text": "Go to PDF.it's PDF to JPG tool and upload your file by clicking or dragging it into the upload area."
    },
    {
      "@type": "HowToStep",
      "name": "Choose your quality settings",
      "text": "Select your preferred DPI (150 for web, 200 for presentations, 300 for print) and choose which pages to convert."
    },
    {
      "@type": "HowToStep",
      "name": "Download your JPG images",
      "text": "Click Convert and download your JPG files. Each PDF page becomes a separate JPG image. Download individually or as a ZIP file."
    }
  ]
}

export default function ConvertPdfToJpgPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / PDF to JPG</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">How to Convert PDF to JPG Online (Fast & High Quality)</h1>
              <p className="text-xl text-slate-300">
                Need to turn a PDF into images? Whether it's for a presentation, social media, or a website, here's how to convert PDF to JPG in seconds — no software to install.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <ImageIcon className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Ready to convert? Skip the guide and go straight to the tool.</p>
            </div>
            <Link
              href="/pdf-to-jpg"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Convert PDF to JPG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why convert */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Convert PDF to JPG?</h2>
              <p className="text-slate-600 mb-4">
                PDFs are great for documents, but they're not always the right format. There are several common reasons you might need a JPG instead:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Presentations.</strong> You can't drag a PDF into PowerPoint or Google Slides — but you can insert a JPG. Converting pages to images lets you use PDF content in any slide deck.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Social media and websites.</strong> Platforms like Instagram, Facebook, and most website builders don't support PDF uploads. JPG is universally accepted.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Quick previews.</strong> Sometimes you need a thumbnail or preview image of a document — a JPG of the first page works perfectly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Messaging apps.</strong> Sharing a JPG on WhatsApp, Slack, or Teams shows an inline preview. PDFs often require the recipient to download and open a separate file.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Convert PDF to JPG (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your PDF",
                    desc: "Go to the PDF to JPG tool and drag your file into the upload area, or click to browse. Files up to 25MB are free — Pro users can upload up to 200MB and convert multiple files at once.",
                  },
                  {
                    title: "Choose your quality settings",
                    desc: "Select the DPI (dots per inch) for your output images. Use 150 DPI for web and email, 200 DPI for presentations, or 300 DPI for printing. Higher DPI means sharper images but larger file sizes.",
                  },
                  {
                    title: "Download your JPG images",
                    desc: "Click Convert. Each page of your PDF becomes a separate JPG file. Download individual pages or grab them all as a ZIP file. The conversion takes just a few seconds.",
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

            {/* DPI settings */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Which DPI Setting Should You Use?</h2>
              <p className="text-slate-600 mb-4">
                DPI (dots per inch) controls how sharp your JPG images will be. Here's a quick guide:
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
                      <td className="py-3 px-4 font-semibold text-orange-600">72 DPI</td>
                      <td className="py-3 px-4">Quick thumbnails, web previews</td>
                      <td className="py-3 px-4">Small (~100-300KB)</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">150 DPI</td>
                      <td className="py-3 px-4">Email, web use, social media</td>
                      <td className="py-3 px-4">Medium (~300-800KB)</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">200 DPI</td>
                      <td className="py-3 px-4">Presentations, documents, clear viewing</td>
                      <td className="py-3 px-4">Larger (~500KB-1.5MB)</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">300 DPI</td>
                      <td className="py-3 px-4">Printing, archiving, maximum quality</td>
                      <td className="py-3 px-4">Large (~1-3MB per page)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* JPG vs PNG */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">JPG vs PNG: Which Format Should You Choose?</h2>
              <p className="text-slate-600 mb-4">
                Both JPG and PNG are image formats, but they work differently. Choosing the right one depends on what's in your PDF:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Choose JPG When:</h3>
                  <ul className="space-y-1 text-slate-600">
                    <li>- Your PDF contains photos, scanned pages, or complex images</li>
                    <li>- File size matters (JPGs are 2-5x smaller than PNGs)</li>
                    <li>- You're sharing on social media or messaging apps</li>
                    <li>- Minor quality loss is acceptable</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Choose PNG When:</h3>
                  <ul className="space-y-1 text-slate-600">
                    <li>- Your PDF has sharp text, diagrams, or line art</li>
                    <li>- You need pixel-perfect accuracy (no compression artifacts)</li>
                    <li>- You need transparency (PNG supports it, JPG doesn't)</li>
                    <li>- You're creating screenshots or documentation</li>
                  </ul>
                  <p className="text-slate-600 mt-2">
                    Need PNG instead? Use our <Link href="/pdf-to-png" className="text-orange-600 hover:underline">PDF to PNG</Link> tool for lossless conversion.
                  </p>
                </div>
              </div>
            </section>

            {/* Batch conversion */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Batch Conversion: Multiple PDFs at Once</h2>
              <p className="text-slate-600 mb-4">
                If you have several PDFs to convert, doing them one at a time is tedious. PDF.it Pro users can upload multiple PDFs and convert them all to JPG in a single batch:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>- Select multiple PDF files at once (or drag a whole folder)</li>
                <li>- Each PDF is converted to JPG images with your chosen settings</li>
                <li>- Download all results as a single ZIP file</li>
                <li>- Track progress for each file individually</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Free users can convert one file at a time. If you regularly convert PDFs, <Link href="/pricing" className="text-orange-600 hover:underline">upgrading to Pro</Link> saves significant time.
              </p>
            </section>

            {/* Tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Pro Tips for Better JPG Quality</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Compress Before Converting</h3>
                  <p className="text-slate-600">
                    If your PDF is very large, <Link href="/compress-pdf" className="text-orange-600 hover:underline">compress it first</Link> to remove unnecessary data. This can speed up the conversion process without affecting the final JPG quality.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Split First, Convert Later</h3>
                  <p className="text-slate-600">
                    If you only need a few pages as JPGs, don't convert the entire PDF. Use <Link href="/split-pdf" className="text-orange-600 hover:underline">Split PDF</Link> to extract just the pages you need, then convert those to JPG. Faster and less clutter.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Watch the File Size</h3>
                  <p className="text-slate-600">
                    A 300 DPI JPG of a full-color PDF page can be 2-3MB. If you're attaching images to an email or uploading to a platform with size limits, 150 DPI is usually plenty.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Convert Your PDF to JPG?</h2>
            <p className="text-slate-300 mb-6">Upload your file and get high-quality JPG images in seconds — free, no signup required.</p>
            <Link
              href="/pdf-to-jpg"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <ImageIcon className="h-5 w-5" /> Convert PDF to JPG
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Save One PDF Page as a JPG (Windows, Mac, Mobile)", href: "/learn/save-pdf-page-as-jpg" },
                { title: "Convert PDF to JPG for PowerPoint (Best Settings + Tips)", href: "/learn/pdf-to-jpg-for-powerpoint" },
                { title: "Why Your PDF to JPG Looks Blurry (And How to Fix It)", href: "/learn/why-pdf-to-jpg-looks-blurry" },
                { title: "Convert PDF to JPG on iPhone (No Apps Needed)", href: "/learn/pdf-to-jpg-on-iphone" },
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
                { q: "How do I convert a PDF to JPG for free?", a: "Upload your PDF to PDF.it's PDF to JPG tool, choose your quality settings, click Convert, and download your JPG images. No signup required for your first 3 files." },
                { q: "Does converting PDF to JPG lose quality?", a: "JPG uses lossy compression, so there is always some quality loss compared to the original PDF. However, at high quality settings (200-300 DPI), the difference is barely noticeable for most uses like presentations, social media, or web pages." },
                { q: "What DPI should I use for PDF to JPG?", a: "For screen viewing and web use, 150 DPI is sufficient. For presentations and documents, 200 DPI works well. For printing or when you need maximum detail, use 300 DPI. Higher DPI means larger file sizes." },
                { q: "Can I convert a multi-page PDF to JPG?", a: "Yes. When you convert a multi-page PDF, each page becomes a separate JPG image. PDF.it converts all pages at once and lets you download them individually or as a ZIP file." },
                { q: "Should I convert to JPG or PNG?", a: "Use JPG for photos, scanned documents, and when file size matters. Use PNG for text-heavy pages, diagrams, screenshots, or when you need transparency. PNG files are larger but have no quality loss." },
                { q: "Can I convert PDF to JPG on my phone?", a: "Yes. PDF.it works in any mobile browser including Safari on iPhone and Chrome on Android. Upload your PDF, convert it, and save the JPG images directly to your phone. No app needed." },
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

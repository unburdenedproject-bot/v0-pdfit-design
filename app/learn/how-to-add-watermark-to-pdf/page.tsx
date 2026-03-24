import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Stamp, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Add a Watermark to a PDF Online | PDF.it",
  description:
    "Learn how to add a text or image watermark to any PDF online. Mark documents as Draft, Confidential, or stamp your logo — step-by-step guide with PDF.it.",
  keywords: "add watermark to pdf, watermark pdf online, put watermark on pdf, stamp pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I add a watermark to a PDF online?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it's Watermark PDF tool, type your watermark text or upload an image, adjust opacity and position, then click Apply. Download your watermarked PDF in seconds." }
    },
    {
      "@type": "Question",
      "name": "Can I add an image watermark like a logo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it supports both text and image watermarks. Upload a PNG or JPG logo, adjust the size and opacity, and it will be placed on every page of your PDF." }
    },
    {
      "@type": "Question",
      "name": "Is the Watermark PDF tool free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Watermark PDF is available to Pro and Business users. Pro starts at $7.99/month and includes unlimited watermarking, batch processing, and files up to 200MB." }
    },
    {
      "@type": "Question",
      "name": "Will the watermark appear on every page?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. By default, the watermark is applied to every page of your PDF. This ensures consistent branding or security marking across the entire document." }
    },
    {
      "@type": "Question",
      "name": "Can someone remove my watermark?",
      "acceptedAnswer": { "@type": "Answer", "text": "A watermark added as an overlay can sometimes be removed with advanced tools. For stronger protection, combine watermarking with password protection using PDF.it's Protect PDF tool, or flatten the PDF afterward to bake the watermark into the page content." }
    },
    {
      "@type": "Question",
      "name": "Can I watermark a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in any mobile browser. Upload your PDF, add your watermark text or image, and download the result — no app needed." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Add a Watermark to a PDF Online",
  "description": "Add a text or image watermark to any PDF in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your PDF",
      "text": "Go to PDF.it's Watermark PDF tool and upload the file you want to watermark by clicking or dragging it into the upload area."
    },
    {
      "@type": "HowToStep",
      "name": "Choose your watermark",
      "text": "Type your watermark text (e.g., DRAFT, CONFIDENTIAL) or upload an image like a company logo. Adjust the opacity, size, rotation, and position."
    },
    {
      "@type": "HowToStep",
      "name": "Download the watermarked PDF",
      "text": "Click Apply Watermark and download your PDF with the watermark embedded on every page."
    }
  ]
}

export default function HowToAddWatermarkToPDFPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Watermark PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">How to Add a Watermark to a PDF Online</h1>
              <p className="text-xl text-slate-300">
                Need to stamp a document as Draft, Confidential, or add your company logo? Here is how to add a watermark to any PDF in seconds — no software to install.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Stamp className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Ready to watermark? Skip the guide and go straight to the tool.</p>
            </div>
            <Link
              href="/watermark-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Watermark PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why watermark */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Add a Watermark to a PDF?</h2>
              <p className="text-slate-600 mb-4">
                A watermark is a visible overlay on your document pages. It can be text, an image, or a logo. People use watermarks for many reasons:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Mark documents as Draft.</strong> When sharing early versions of a report or proposal, a DRAFT watermark tells recipients the content is not final and may change.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Label sensitive files as Confidential.</strong> Legal contracts, financial reports, and HR documents often need a CONFIDENTIAL stamp to discourage unauthorized sharing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Brand documents with your logo.</strong> Proposals, invoices, and presentations look more professional when they carry your company logo as a subtle background watermark.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Discourage unauthorized copying.</strong> A DO NOT COPY or SAMPLE watermark makes it clear the document should not be redistributed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Track document recipients.</strong> Some teams add unique watermarks per recipient so leaked documents can be traced back to the source.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Add a Watermark to a PDF (Step by Step)</h2>
              <p className="text-slate-600 mb-4">
                Watermark PDF is available to Pro and Business users. <Link href="/pricing" className="text-orange-600 hover:underline">See pricing</Link> for details.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your PDF",
                    desc: "Go to the Watermark PDF tool and drag your file into the upload area, or click to browse. Pro users can upload files up to 200MB and process multiple files in batch.",
                  },
                  {
                    title: "Configure your watermark",
                    desc: "Choose between a text watermark (type any phrase like DRAFT, CONFIDENTIAL, or your company name) or an image watermark (upload a PNG or JPG logo). Adjust the opacity, font size, rotation angle, and position on the page.",
                  },
                  {
                    title: "Apply and download",
                    desc: "Click Apply Watermark. PDF.it stamps every page of your PDF with your chosen watermark. Download the result immediately.",
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

            {/* Text vs image watermarks */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Text Watermarks vs. Image Watermarks</h2>
              <p className="text-slate-600 mb-4">
                PDF.it supports both types. Here is when to use each:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Text Watermarks</h3>
                  <p className="text-slate-600">
                    Best for status labels like DRAFT, CONFIDENTIAL, DO NOT COPY, or SAMPLE. Text watermarks are fast to set up — just type the phrase, pick a color, and adjust opacity. They work well at a diagonal angle across the page for maximum visibility without blocking content.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Image Watermarks</h3>
                  <p className="text-slate-600">
                    Best for branding. Upload your company logo as a PNG with a transparent background for the cleanest look. Image watermarks are great on proposals, invoices, and client-facing documents. Set the opacity to 10-20% so the logo is visible but does not interfere with reading. Learn more in our guide on <Link href="/learn/watermark-pdf-with-logo" className="text-orange-600 hover:underline">adding a logo watermark to a PDF</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* Making watermarks more secure */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Making Your Watermark Harder to Remove</h2>
              <p className="text-slate-600 mb-4">
                A standard watermark is an overlay that sits on top of the page content. Someone with the right tools could potentially remove it. Here is how to make your watermark more permanent:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Flatten the PDF afterward.</strong> Use <Link href="/flatten-pdf" className="text-orange-600 hover:underline">Flatten PDF</Link> after watermarking. This bakes the watermark into the page content so it cannot be separated from the original text and images.</li>
                <li>&#10003; <strong>Add password protection.</strong> Use <Link href="/protect-pdf" className="text-orange-600 hover:underline">Protect PDF</Link> to restrict editing permissions. This prevents casual users from modifying or removing the watermark.</li>
                <li>&#10003; <strong>Combine both approaches.</strong> Flatten first, then password-protect. This gives you the strongest protection against unauthorized removal.</li>
              </ul>
            </section>

            {/* Common watermark use cases */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Common Watermark Use Cases</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Legal and Financial Documents</h3>
                  <p className="text-slate-600">
                    Law firms and accounting departments add CONFIDENTIAL watermarks to contracts, audit reports, and tax filings before sharing them externally. Read our dedicated guide on <Link href="/learn/watermark-pdf-confidential" className="text-orange-600 hover:underline">adding a Confidential watermark</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Real Estate and Architecture</h3>
                  <p className="text-slate-600">
                    Agents and architects watermark floor plans, property listings, and design drawings with their company logo to protect intellectual property and maintain brand presence.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Education and Publishing</h3>
                  <p className="text-slate-600">
                    Teachers watermark exam papers with SAMPLE to prevent redistribution. Publishers watermark review copies with the reviewer's name for accountability. After watermarking, you can <Link href="/compress-pdf" className="text-orange-600 hover:underline">compress the PDF</Link> to keep file sizes manageable for email distribution.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Watermark Your PDF?</h2>
            <p className="text-slate-300 mb-6">Upload your file, add a text or image watermark, and download the result in seconds. Available for Pro and Business users.</p>
            <Link
              href="/watermark-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Stamp className="h-5 w-5" /> Watermark PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "Add a 'Confidential' Watermark to a PDF (Quick Guide)", href: "/learn/watermark-pdf-confidential" },
                { title: "Add Your Logo as a Watermark on a PDF", href: "/learn/watermark-pdf-with-logo" },
                { title: "PDF Watermark Best Practices (Size, Opacity & Placement)", href: "/learn/watermark-pdf-best-practices" },
                { title: "Add a Watermark to a PDF on Your Phone (iPhone & Android)", href: "/learn/watermark-pdf-on-mobile" },
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
                { q: "How do I add a watermark to a PDF online?", a: "Upload your PDF to PDF.it's Watermark PDF tool, type your watermark text or upload an image, adjust opacity and position, then click Apply. Download your watermarked PDF in seconds." },
                { q: "Can I add an image watermark like a logo?", a: "Yes. PDF.it supports both text and image watermarks. Upload a PNG or JPG logo, adjust the size and opacity, and it will be placed on every page of your PDF." },
                { q: "Is the Watermark PDF tool free?", a: "Watermark PDF is available to Pro and Business users. Pro starts at $7.99/month and includes unlimited watermarking, batch processing, and files up to 200MB." },
                { q: "Will the watermark appear on every page?", a: "Yes. By default, the watermark is applied to every page of your PDF. This ensures consistent branding or security marking across the entire document." },
                { q: "Can someone remove my watermark?", a: "A watermark added as an overlay can sometimes be removed with advanced tools. For stronger protection, combine watermarking with password protection using PDF.it's Protect PDF tool, or flatten the PDF afterward to bake the watermark into the page content." },
                { q: "Can I watermark a PDF on my phone?", a: "Yes. PDF.it works in any mobile browser. Upload your PDF, add your watermark text or image, and download the result — no app needed." },
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

import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Stamp, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Add Your Logo as a Watermark on a PDF | PDF.it",
  description:
    "Learn how to add your company logo as an image watermark on a PDF. Brand proposals, invoices, and reports with a professional logo watermark using PDF.it.",
  keywords: "logo watermark pdf, add logo to pdf, brand pdf with logo, image watermark pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I add my logo as a watermark on a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it's Watermark PDF tool, select Image Watermark, upload your logo file (PNG or JPG), adjust the size and opacity, then click Apply. Your logo will appear on every page." }
    },
    {
      "@type": "Question",
      "name": "What image format should my logo be in?",
      "acceptedAnswer": { "@type": "Answer", "text": "PNG with a transparent background works best. This ensures only your logo shows up on the page without a white rectangle around it. JPG logos will work but may have a visible background." }
    },
    {
      "@type": "Question",
      "name": "What size and opacity work best for a logo watermark?",
      "acceptedAnswer": { "@type": "Answer", "text": "For a subtle background watermark, use 10-20% opacity and scale the logo to about 30-50% of the page width. For a more visible stamp, increase opacity to 25-35%. Place it in the center for background branding or in a corner for a subtle mark." }
    },
    {
      "@type": "Question",
      "name": "Can I watermark multiple PDFs with my logo at once?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Pro and Business users can use batch processing to apply the same logo watermark to multiple PDFs simultaneously. Upload all your files, configure the watermark once, and apply to all." }
    },
    {
      "@type": "Question",
      "name": "Will adding a logo watermark increase my file size?",
      "acceptedAnswer": { "@type": "Answer", "text": "Slightly. The logo image is embedded on each page, which adds some file size. If the result is too large, use PDF.it's Compress PDF tool after watermarking to reduce the file size." }
    },
    {
      "@type": "Question",
      "name": "Is the Watermark PDF tool free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Watermark PDF is available to Pro ($3.99/month) and Business ($13.99/month) users. Both tiers include unlimited watermarking, batch processing, and files up to 200MB." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Add a Logo Watermark to a PDF",
  "description": "Brand any PDF with your company logo in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your PDF",
      "text": "Go to PDF.it's Watermark PDF tool and upload the document you want to brand with your logo."
    },
    {
      "@type": "HowToStep",
      "name": "Upload your logo and adjust settings",
      "text": "Select Image Watermark, upload your logo as a PNG (transparent background recommended), and adjust the opacity to 10-20% for a subtle look. Position it in the center or a corner."
    },
    {
      "@type": "HowToStep",
      "name": "Apply and download",
      "text": "Click Apply Watermark. Your logo appears on every page of the PDF. Download the branded document."
    }
  ]
}

export default function WatermarkPDFWithLogoPage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Watermark PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Add Your Logo as a Watermark on a PDF</h1>
              <p className="text-xl text-slate-300">
                Want to brand your proposals, invoices, or reports with your company logo? Here is how to add a professional logo watermark to any PDF — no design software needed.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <Stamp className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Ready to brand your PDF? Skip the guide and go straight to the tool.</p>
            </div>
            <Link
              href="/watermark-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Watermark PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why brand with a logo */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Brand Your PDFs with a Logo Watermark?</h2>
              <p className="text-slate-600 mb-4">
                A logo watermark turns an ordinary document into a branded asset. Here is why companies and freelancers add logos to their PDFs:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Professional appearance.</strong> Proposals, quotes, and reports with a subtle logo watermark look polished and establish credibility with clients.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Brand recognition.</strong> Every time someone opens your document, they see your brand. Over time, this builds recognition and trust.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Intellectual property protection.</strong> Architects, designers, and photographers watermark plans and portfolios to claim ownership and discourage unauthorized use.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Document origin tracking.</strong> If a document gets forwarded beyond its intended audience, the logo makes it clear where it came from.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Add a Logo Watermark (Step by Step)</h2>
              <p className="text-slate-600 mb-4">
                Watermark PDF is available to Pro and Business users. <Link href="/pricing" className="text-[#14D8C4] hover:underline">See pricing</Link> for details.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your PDF",
                    desc: "Open the Watermark PDF tool and upload the document you want to brand. Pro users can upload files up to 200MB and use batch processing for multiple files at once.",
                  },
                  {
                    title: "Upload your logo and configure",
                    desc: "Select Image Watermark and upload your logo file. For the best result, use a PNG with a transparent background. Adjust the opacity (10-20% for subtle, 25-35% for prominent), scale the logo to about 30-50% of the page width, and choose center placement for a background watermark or a corner for a subtle stamp.",
                  },
                  {
                    title: "Apply and download",
                    desc: "Click Apply Watermark. Your logo appears on every page of the PDF. Download the branded document and share it with clients, partners, or stakeholders.",
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

            {/* Preparing your logo */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Preparing Your Logo for Watermarking</h2>
              <p className="text-slate-600 mb-4">
                The quality of your logo watermark depends heavily on the image file you upload. Here are some tips:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Use PNG with transparent background.</strong> This is the most important tip. A transparent PNG ensures only your logo shape appears on the page, without an ugly white or colored rectangle behind it.</li>
                <li>&#10003; <strong>Use high resolution.</strong> A minimum of 300 DPI or 1000px wide ensures your logo looks sharp when scaled up on the page. Low-resolution logos will appear blurry.</li>
                <li>&#10003; <strong>Use a single-color or simplified version.</strong> Complex multi-color logos can be distracting as watermarks. If you have a simplified or monochrome version of your logo, use that instead.</li>
                <li>&#10003; <strong>Test with a sample page first.</strong> Before watermarking a 50-page proposal, test your logo settings on a single page to make sure the size, opacity, and position look right.</li>
              </ul>
            </section>

            {/* Placement strategies */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Logo Placement Strategies</h2>
              <p className="text-slate-600 mb-4">
                Where you place your logo watermark depends on the purpose. For more detailed guidance, check out our <Link href="/learn/watermark-pdf-best-practices" className="text-[#14D8C4] hover:underline">watermark best practices guide</Link>.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Center — Background Branding</h3>
                  <p className="text-slate-600">
                    Place the logo in the center of the page at low opacity (10-15%). This creates a subtle background brand presence without distracting from the content. Best for proposals, reports, and client deliverables.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Bottom Corner — Subtle Stamp</h3>
                  <p className="text-slate-600">
                    Place a small logo in the bottom-right or bottom-left corner at slightly higher opacity (20-30%). This works like a letterhead footer and is less intrusive. Good for invoices, contracts, and formal correspondence.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Diagonal — Maximum Visibility</h3>
                  <p className="text-slate-600">
                    Rotate the logo 45 degrees and stretch it across the page. This is the strongest branding approach and also works as a deterrent against unauthorized copying. Use it for portfolios, design work, and preview documents.
                  </p>
                </div>
              </div>
            </section>

            {/* After watermarking */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">After Watermarking: Next Steps</h2>
              <p className="text-slate-600 mb-4">
                Once your PDF is branded with your logo, consider these additional steps:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Flatten to make it permanent.</strong> Use <Link href="/flatten-pdf" className="text-[#14D8C4] hover:underline">Flatten PDF</Link> to merge the watermark into the page so it cannot be removed by someone editing the file.</li>
                <li>&#10003; <strong>Compress to reduce file size.</strong> Logo images add some weight to the PDF. Run it through <Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">Compress PDF</Link> to shrink it back down, especially if you plan to email it.</li>
                <li>&#10003; <strong>Protect with a password.</strong> For sensitive branded documents, add a password using <Link href="/protect-pdf" className="text-[#14D8C4] hover:underline">Protect PDF</Link> to restrict editing and printing.</li>
                <li>&#10003; <strong>Merge multiple documents.</strong> If you have several branded PDFs that need to go together, use <Link href="/merge-pdf" className="text-[#14D8C4] hover:underline">Merge PDF</Link> to combine them into a single polished package.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Brand Your PDFs with Your Logo</h2>
            <p className="text-slate-300 mb-6">Upload your PDF and logo, adjust the opacity and position, and download your branded document in seconds. Available for Pro and Business users.</p>
            <Link
              href="/watermark-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
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
                { title: "How to Add a Watermark to a PDF Online", href: "/learn/how-to-add-watermark-to-pdf" },
                { title: "Add a 'Confidential' Watermark to a PDF (Quick Guide)", href: "/learn/watermark-pdf-confidential" },
                { title: "PDF Watermark Best Practices (Size, Opacity & Placement)", href: "/learn/watermark-pdf-best-practices" },
                { title: "Add a Watermark to a PDF on Your Phone (iPhone & Android)", href: "/learn/watermark-pdf-on-mobile" },
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
                { q: "How do I add my logo as a watermark on a PDF?", a: "Upload your PDF to PDF.it's Watermark PDF tool, select Image Watermark, upload your logo file (PNG or JPG), adjust the size and opacity, then click Apply. Your logo will appear on every page." },
                { q: "What image format should my logo be in?", a: "PNG with a transparent background works best. This ensures only your logo shows up on the page without a white rectangle around it. JPG logos will work but may have a visible background." },
                { q: "What size and opacity work best for a logo watermark?", a: "For a subtle background watermark, use 10-20% opacity and scale the logo to about 30-50% of the page width. For a more visible stamp, increase opacity to 25-35%. Place it in the center for background branding or in a corner for a subtle mark." },
                { q: "Can I watermark multiple PDFs with my logo at once?", a: "Yes. Pro and Business users can use batch processing to apply the same logo watermark to multiple PDFs simultaneously. Upload all your files, configure the watermark once, and apply to all." },
                { q: "Will adding a logo watermark increase my file size?", a: "Slightly. The logo image is embedded on each page, which adds some file size. If the result is too large, use PDF.it's Compress PDF tool after watermarking to reduce the file size." },
                { q: "Is the Watermark PDF tool free?", a: "Watermark PDF is available to Pro ($3.99/month) and Business ($13.99/month) users. Both tiers include unlimited watermarking, batch processing, and files up to 200MB." },
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

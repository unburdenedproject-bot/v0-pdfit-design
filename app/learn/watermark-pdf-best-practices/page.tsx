import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Stamp, ArrowRight } from "lucide-react"

export const metadata = {
  title: "PDF Watermark Best Practices (Size, Opacity & Placement) | PDF.it",
  description:
    "Learn the best practices for watermarking PDFs — optimal opacity, font size, placement, color, and when to use diagonal vs center watermarks. Professional tips from PDF.it.",
  keywords: "pdf watermark best practices, watermark opacity, watermark placement, professional pdf watermark",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What opacity should I use for a PDF watermark?",
      "acceptedAnswer": { "@type": "Answer", "text": "For most documents, 15-25% opacity is ideal. This makes the watermark clearly visible without making the underlying text hard to read. Use lower opacity (10-15%) for subtle branding and higher opacity (30-40%) for security stamps like CONFIDENTIAL." }
    },
    {
      "@type": "Question",
      "name": "Should I use a diagonal or centered watermark?",
      "acceptedAnswer": { "@type": "Answer", "text": "Diagonal watermarks (45 degrees) are best for security stamps like DRAFT or CONFIDENTIAL — they are hard to crop out. Centered watermarks at low opacity work better for branding with logos. Corner placement is ideal for subtle, professional marks." }
    },
    {
      "@type": "Question",
      "name": "What font size works best for text watermarks?",
      "acceptedAnswer": { "@type": "Answer", "text": "For diagonal watermarks spanning the page, use a large font (60-100pt) so the text stretches across the entire page. For corner stamps, use a smaller font (24-36pt). The goal is readability without overwhelming the document content." }
    },
    {
      "@type": "Question",
      "name": "What color should my watermark be?",
      "acceptedAnswer": { "@type": "Answer", "text": "Gray is the most common and professional choice for text watermarks. Red works well for CONFIDENTIAL or urgent stamps. For logo watermarks, use your brand colors at reduced opacity. Avoid colors that clash with the document content." }
    },
    {
      "@type": "Question",
      "name": "How do I make a watermark that cannot be removed?",
      "acceptedAnswer": { "@type": "Answer", "text": "After adding your watermark, flatten the PDF using PDF.it's Flatten PDF tool. This merges the watermark into the page content permanently. Then password-protect the file to prevent further editing." }
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
  "name": "How to Create a Professional PDF Watermark",
  "description": "Follow these best practices to add a clean, professional watermark to any PDF using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Choose your watermark type",
      "text": "Decide between a text watermark (DRAFT, CONFIDENTIAL) or an image watermark (company logo). Text is faster to set up; images add stronger branding."
    },
    {
      "@type": "HowToStep",
      "name": "Set optimal opacity and placement",
      "text": "Use 15-25% opacity for readability. Place security stamps diagonally, branding logos in the center, and subtle marks in a corner. Test on one page first."
    },
    {
      "@type": "HowToStep",
      "name": "Apply, flatten, and protect",
      "text": "Apply the watermark to all pages. For permanent watermarks, flatten the PDF and add password protection to prevent removal."
    }
  ]
}

export default function WatermarkPDFBestPracticesPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF Watermark Best Practices (Size, Opacity & Placement)</h1>
              <p className="text-xl text-slate-300">
                A good watermark protects your document without ruining readability. Here are the best practices for opacity, font size, placement, and color — so your watermarks look professional every time.
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
              <p className="text-slate-700 font-semibold">Ready to watermark? Skip the guide and go straight to the tool.</p>
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

            {/* Opacity */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Choosing the Right Opacity</h2>
              <p className="text-slate-600 mb-4">
                Opacity is the single most important watermark setting. Too high and it blocks the content; too low and nobody notices it. Here are the recommended ranges:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>10-15% opacity — Subtle branding.</strong> Best for logo watermarks on client-facing documents like proposals and invoices. The logo is visible but does not compete with the text. Readers can comfortably read the document without noticing the watermark at first glance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>15-25% opacity — Standard protection.</strong> The sweet spot for most watermarks. CONFIDENTIAL, DRAFT, and DO NOT COPY stamps are clearly readable at this range while keeping the document content fully legible. This is the range we recommend for most users.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>30-40% opacity — Strong deterrence.</strong> Use this for documents where the watermark is the primary message — review copies, expired documents, or preview samples. The watermark dominates the page and makes it very clear the document has restrictions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>50%+ opacity — Avoid in most cases.</strong> At this level, the watermark makes the document difficult to read. Only use this for documents that should be visible but intentionally hard to use, like expired certificates or voided contracts.</span>
                </li>
              </ul>
            </section>

            {/* Placement */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Watermark Placement: Where on the Page?</h2>
              <p className="text-slate-600 mb-4">
                The position of your watermark affects both its visibility and how much it interferes with reading. Here are the three main placement strategies:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Diagonal (45 Degrees)</h3>
                  <p className="text-slate-600">
                    The classic watermark position. The text or image stretches diagonally from one corner to the other. This is the hardest placement to crop out, making it ideal for security watermarks like CONFIDENTIAL, DRAFT, and DO NOT COPY. Use a large font size (60-100pt for text) so the watermark spans the entire page. Read our guide on <Link href="/learn/watermark-pdf-confidential" className="text-[#14D8C4] hover:underline">adding confidential watermarks</Link> for specific settings.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Center (No Rotation)</h3>
                  <p className="text-slate-600">
                    Place the watermark in the center of the page without rotation. This works best for logo watermarks at low opacity — it creates a clean, symmetrical background brand presence. Scale the logo to 30-50% of the page width. See our <Link href="/learn/watermark-pdf-with-logo" className="text-[#14D8C4] hover:underline">logo watermark guide</Link> for detailed instructions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Corner (Bottom-Right or Bottom-Left)</h3>
                  <p className="text-slate-600">
                    The most discreet placement. A small logo or text stamp in a corner functions like a page footer or letterhead. Use slightly higher opacity (20-30%) since the mark is small. This is professional and non-intrusive, ideal for invoices, reports, and formal correspondence.
                  </p>
                </div>
              </div>
            </section>

            {/* Font size and color */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Font Size and Color Guidelines</h2>
              <p className="text-slate-600 mb-4">
                For text watermarks, the font size and color combination determines how the watermark feels on the page:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Large diagonal text (60-100pt):</strong> Use for full-page stamps like CONFIDENTIAL or DRAFT. The text should span from corner to corner. Pair with gray or light red color at 15-25% opacity.</li>
                <li>&#10003; <strong>Medium text (36-48pt):</strong> Good for centered watermarks or repeated patterns. Works well for company names or document status labels.</li>
                <li>&#10003; <strong>Small text (24-36pt):</strong> Best for corner stamps or subtle labels. Use slightly higher opacity (20-30%) since the text is smaller and needs to remain readable.</li>
                <li>&#10003; <strong>Gray color:</strong> The most professional and versatile choice. Works on any document type and does not clash with content colors. Recommended for most watermarks.</li>
                <li>&#10003; <strong>Red color:</strong> Conveys urgency and importance. Best for CONFIDENTIAL, DO NOT COPY, and security-related stamps. Use sparingly — red can feel aggressive.</li>
                <li>&#10003; <strong>Brand colors:</strong> If using your company name as a text watermark, match your brand colors at low opacity. This reinforces brand identity without clashing.</li>
              </ul>
            </section>

            {/* When to use each type */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Quick Reference: Which Settings for Which Purpose?</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Draft document for internal review",
                    desc: "Text: DRAFT | Color: Gray | Opacity: 20% | Position: Diagonal | Font: 80pt. This clearly marks the document as unfinished without hindering the review process.",
                  },
                  {
                    title: "Confidential financial report",
                    desc: "Text: CONFIDENTIAL | Color: Red | Opacity: 20-25% | Position: Diagonal | Font: 72pt. Strong visibility for security. Flatten and password-protect after watermarking.",
                  },
                  {
                    title: "Client proposal with company branding",
                    desc: "Image: Company logo (PNG) | Opacity: 10-15% | Position: Center | Scale: 40% of page width. Subtle, professional branding that does not distract from the content.",
                  },
                  {
                    title: "Invoice or contract",
                    desc: "Image: Company logo (PNG) | Opacity: 20-25% | Position: Bottom-right corner | Scale: 15% of page width. Discreet but visible brand mark, similar to a letterhead.",
                  },
                  {
                    title: "Preview or sample copy",
                    desc: "Text: SAMPLE | Color: Gray | Opacity: 30-35% | Position: Diagonal | Font: 90pt. Clearly marks the document as a preview to prevent unauthorized use of the content.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Making watermarks permanent */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Making Your Watermark Permanent and Secure</h2>
              <p className="text-slate-600 mb-4">
                Even the best watermark is useless if someone can easily remove it. Follow these steps after watermarking to lock it in:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Flatten the PDF.</strong> Use <Link href="/flatten-pdf" className="text-[#14D8C4] hover:underline">Flatten PDF</Link> to merge the watermark permanently into the page content. Once flattened, the watermark becomes part of the page image and cannot be selected or deleted separately.</li>
                <li>&#10003; <strong>Add password protection.</strong> Use <Link href="/protect-pdf" className="text-[#14D8C4] hover:underline">Protect PDF</Link> to restrict editing, copying, and printing. This prevents someone from opening the file in an editor and attempting to remove the watermark.</li>
                <li>&#10003; <strong>Compress the final file.</strong> Flattening and watermarking can increase file size. Run the final result through <Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">Compress PDF</Link> to keep it manageable for email or upload.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Watermark PDF is available to Pro and Business users. <Link href="/pricing" className="text-[#14D8C4] hover:underline">See pricing</Link> for details.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Add a Professional Watermark?</h2>
            <p className="text-slate-300 mb-6">Upload your PDF, configure your watermark with the best settings, and download the result in seconds. Available for Pro and Business users.</p>
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
                { title: "Add Your Logo as a Watermark on a PDF", href: "/learn/watermark-pdf-with-logo" },
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
                { q: "What opacity should I use for a PDF watermark?", a: "For most documents, 15-25% opacity is ideal. This makes the watermark clearly visible without making the underlying text hard to read. Use lower opacity (10-15%) for subtle branding and higher opacity (30-40%) for security stamps like CONFIDENTIAL." },
                { q: "Should I use a diagonal or centered watermark?", a: "Diagonal watermarks (45 degrees) are best for security stamps like DRAFT or CONFIDENTIAL — they are hard to crop out. Centered watermarks at low opacity work better for branding with logos. Corner placement is ideal for subtle, professional marks." },
                { q: "What font size works best for text watermarks?", a: "For diagonal watermarks spanning the page, use a large font (60-100pt) so the text stretches across the entire page. For corner stamps, use a smaller font (24-36pt). The goal is readability without overwhelming the document content." },
                { q: "What color should my watermark be?", a: "Gray is the most common and professional choice for text watermarks. Red works well for CONFIDENTIAL or urgent stamps. For logo watermarks, use your brand colors at reduced opacity. Avoid colors that clash with the document content." },
                { q: "How do I make a watermark that cannot be removed?", a: "After adding your watermark, flatten the PDF using PDF.it's Flatten PDF tool. This merges the watermark into the page content permanently. Then password-protect the file to prevent further editing." },
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

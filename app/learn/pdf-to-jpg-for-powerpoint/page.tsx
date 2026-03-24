import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ImageIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convert PDF to JPG for PowerPoint (Best Settings + Tips) | PDF.it",
  description:
    "Learn the best settings to convert PDF pages to JPG for PowerPoint presentations. Avoid blurry images, pick the right resolution, and insert JPGs into slides like a pro.",
  keywords: "pdf to jpg for powerpoint, convert pdf to image for slides, insert pdf into powerpoint, pdf to jpg resolution for presentation",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What DPI should I use for PDF to JPG in PowerPoint?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use 200 DPI for standard presentations shown on a projector or screen. Use 300 DPI if the presentation will be printed or if you need to zoom into details. Avoid 72 DPI — it will look blurry on modern displays." }
    },
    {
      "@type": "Question",
      "name": "Why does my PDF look blurry in PowerPoint?",
      "acceptedAnswer": { "@type": "Answer", "text": "The most common cause is converting at too low a DPI (72 or 96). PowerPoint slides are typically 13.33 x 7.5 inches, so a low-DPI image gets stretched to fill the slide, causing blurriness. Convert at 200+ DPI for sharp results." }
    },
    {
      "@type": "Question",
      "name": "Should I use JPG or PNG for PowerPoint?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use JPG for photo-heavy PDF pages (smaller file size). Use PNG for pages with text, diagrams, or line art (sharper edges, no compression artifacts). If the presentation will be emailed, JPG keeps the file size down." }
    },
    {
      "@type": "Question",
      "name": "Can I insert a PDF directly into PowerPoint?",
      "acceptedAnswer": { "@type": "Answer", "text": "PowerPoint can insert a PDF as an object, but it shows only a thumbnail and requires clicking to open. For a clean, seamless look, convert the PDF pages to JPG or PNG images and insert those as pictures instead." }
    },
    {
      "@type": "Question",
      "name": "How do I convert a multi-page PDF for a PowerPoint presentation?",
      "acceptedAnswer": { "@type": "Answer", "text": "Convert the entire PDF to JPG — each page becomes a separate image. Then insert each JPG onto its own PowerPoint slide. This gives you one slide per PDF page with full visual fidelity." }
    },
    {
      "@type": "Question",
      "name": "Can I convert the PDF directly to PowerPoint instead?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, if you want editable slides. PDF.it offers a PDF to PowerPoint converter that creates a .pptx file with editable text and layouts. However, if you just want the PDF pages as static images in your slides, converting to JPG is simpler and more reliable." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert PDF to JPG for PowerPoint",
  "description": "Convert PDF pages to high-quality JPG images optimized for PowerPoint presentations in 3 steps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Convert your PDF to JPG at 200+ DPI",
      "text": "Upload your PDF to PDF.it's PDF to JPG tool and select 200 DPI (or 300 DPI for print presentations). Convert all pages or select specific ones."
    },
    {
      "@type": "HowToStep",
      "name": "Insert the JPG images into PowerPoint",
      "text": "In PowerPoint, go to Insert > Pictures and select the converted JPG files. Drag to resize them to fill the slide."
    },
    {
      "@type": "HowToStep",
      "name": "Adjust and align the images",
      "text": "Right-click the image, select Size and Position, and set it to match your slide dimensions (13.33 x 7.5 inches for widescreen). Center the image for a clean look."
    }
  ]
}

export default function PdfToJpgForPowerpointPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert PDF to JPG for PowerPoint (Best Settings + Tips)</h1>
              <p className="text-xl text-slate-300">
                Want to include PDF content in your slides? Here's how to convert PDF pages to JPG images that look sharp and professional in PowerPoint — no blurry screenshots.
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
              <p className="text-slate-700 font-semibold">Need to convert now? Go straight to the tool.</p>
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

            {/* Why convert for PPT */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Convert PDF to JPG for PowerPoint?</h2>
              <p className="text-slate-600 mb-4">
                PowerPoint doesn't handle PDFs well natively. You can insert a PDF as an "object," but it shows a tiny thumbnail and requires clicking to open — not exactly a smooth presentation experience. The better approach is to convert your PDF pages to images and insert those:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Full visual display.</strong> JPG images fill the entire slide with your PDF content — no clicking, no popups, no embedded viewers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Works everywhere.</strong> Images display the same on every computer, projector, and PowerPoint version. Embedded PDFs can break on different systems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Easy to annotate.</strong> Once the PDF page is an image in your slide, you can draw on it, add arrows, highlight text, or crop sections.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                Alternatively, if you need <em>editable</em> slides (not just images), try our <Link href="/pdf-to-powerpoint" className="text-orange-600 hover:underline">PDF to PowerPoint</Link> converter which creates a .pptx file with editable text and layouts.
              </p>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Do It (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Convert your PDF to JPG at 200+ DPI",
                    desc: "Upload your PDF to the PDF to JPG tool. Set the DPI to at least 200 (300 if the presentation will be printed or shown on a 4K display). Convert all pages or select just the ones you need.",
                  },
                  {
                    title: "Insert the images into PowerPoint",
                    desc: "Open PowerPoint, go to Insert > Pictures > This Device, and select the JPG files. Each image goes on its own slide. Tip: create blank slides first, then insert one image per slide.",
                  },
                  {
                    title: "Resize to fill the slide",
                    desc: "Drag the image corners to fill the slide, or right-click > Size and Position and set the dimensions to 13.33\" x 7.5\" (widescreen) or 10\" x 7.5\" (standard). Center the image so it's perfectly aligned.",
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

            {/* Resolution settings */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What Resolution Should You Use?</h2>
              <p className="text-slate-600 mb-4">
                This is where most people go wrong. The DPI you choose when converting determines whether your images look crisp or blurry on screen:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Scenario</th>
                      <th className="text-left py-3 px-4 font-bold">Recommended DPI</th>
                      <th className="text-left py-3 px-4 font-bold">Image Size (per page)</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">Casual presentation (meeting room projector)</td>
                      <td className="py-3 px-4 font-semibold text-orange-600">150 DPI</td>
                      <td className="py-3 px-4">~400KB</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4">Standard presentation (HD screen, webinar)</td>
                      <td className="py-3 px-4 font-semibold text-orange-600">200 DPI</td>
                      <td className="py-3 px-4">~800KB</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">High-quality (4K display, print handouts)</td>
                      <td className="py-3 px-4 font-semibold text-orange-600">300 DPI</td>
                      <td className="py-3 px-4">~1.5-2MB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4">
                <strong>Keep in mind:</strong> Higher DPI means larger images, which means a larger PowerPoint file. A 20-page PDF at 300 DPI could create a 30-40MB presentation. If you need to email the file, 150-200 DPI is a better balance.
              </p>
            </section>

            {/* JPG vs PNG for PPT */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">JPG or PNG for PowerPoint?</h2>
              <p className="text-slate-600 mb-4">
                Both formats work in PowerPoint, but each has strengths:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use JPG When:</h3>
                  <ul className="space-y-1 text-slate-600">
                    <li>- The PDF pages contain photos or complex images</li>
                    <li>- You need to keep the PowerPoint file size small</li>
                    <li>- The presentation will be emailed or shared online</li>
                    <li>- Minor compression artifacts are acceptable</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use PNG When:</h3>
                  <ul className="space-y-1 text-slate-600">
                    <li>- The PDF has sharp text, tables, or technical diagrams</li>
                    <li>- You need pixel-perfect accuracy (no fuzzy edges on text)</li>
                    <li>- File size is not a concern</li>
                  </ul>
                  <p className="text-slate-600 mt-2">
                    Need PNG? Use our <Link href="/pdf-to-png" className="text-orange-600 hover:underline">PDF to PNG</Link> tool instead.
                  </p>
                </div>
              </div>
            </section>

            {/* Avoiding blurry images */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">How to Avoid Blurry Images in PowerPoint</h2>
              <p className="text-slate-600 mb-4">
                Blurry PDF-to-JPG images in PowerPoint are the most common complaint. Here's a checklist to prevent it:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>- <strong>Convert at 200+ DPI.</strong> This is the single biggest factor. Low DPI = blurry images.</li>
                <li>- <strong>Don't stretch the image beyond its resolution.</strong> A 150 DPI image stretched to fill a widescreen slide will look soft.</li>
                <li>- <strong>Disable PowerPoint compression.</strong> By default, PowerPoint compresses images when you save. Go to File &gt; Options &gt; Advanced and set "Default resolution" to "High fidelity" or uncheck "Discard editing data."</li>
                <li>- <strong>Use "Insert Pictures" not paste.</strong> Copy-pasting images can reduce quality. Always use Insert &gt; Pictures to add your JPGs.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                For a deeper dive into quality issues, see our guide: <Link href="/learn/why-pdf-to-jpg-looks-blurry" className="text-orange-600 hover:underline">Why Your PDF to JPG Looks Blurry</Link>.
              </p>
            </section>

            {/* Pro tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Pro Tips for Better Results</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convert Only the Pages You Need</h3>
                  <p className="text-slate-600">
                    If your PDF is 50 pages but you only need pages 3, 7, and 12 in your presentation, don't convert the entire thing. Select just those pages to save time and keep your PowerPoint file small.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use Slide Master for Consistent Layout</h3>
                  <p className="text-slate-600">
                    If you're inserting many PDF pages, create a blank slide layout in Slide Master with no title or content placeholders. This gives you a clean canvas for each image.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Consider the Alternative: PDF to PPTX</h3>
                  <p className="text-slate-600">
                    If you need to edit the text or rearrange content from the PDF, converting to images won't help. Use our <Link href="/pdf-to-powerpoint" className="text-orange-600 hover:underline">PDF to PowerPoint</Link> converter to get an editable .pptx file instead.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Convert PDF to JPG for Your Slides?</h2>
            <p className="text-slate-300 mb-6">Upload your PDF and get presentation-ready JPG images in seconds.</p>
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
                { title: "How to Convert PDF to JPG Online (Fast & High Quality)", href: "/learn/convert-pdf-to-jpg" },
                { title: "How to Save One PDF Page as a JPG (Windows, Mac, Mobile)", href: "/learn/save-pdf-page-as-jpg" },
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
                { q: "What DPI should I use for PDF to JPG in PowerPoint?", a: "Use 200 DPI for standard presentations shown on a projector or screen. Use 300 DPI if the presentation will be printed or if you need to zoom into details. Avoid 72 DPI — it will look blurry on modern displays." },
                { q: "Why does my PDF look blurry in PowerPoint?", a: "The most common cause is converting at too low a DPI (72 or 96). PowerPoint slides are typically 13.33 x 7.5 inches, so a low-DPI image gets stretched to fill the slide, causing blurriness. Convert at 200+ DPI for sharp results." },
                { q: "Should I use JPG or PNG for PowerPoint?", a: "Use JPG for photo-heavy PDF pages (smaller file size). Use PNG for pages with text, diagrams, or line art (sharper edges, no compression artifacts). If the presentation will be emailed, JPG keeps the file size down." },
                { q: "Can I insert a PDF directly into PowerPoint?", a: "PowerPoint can insert a PDF as an object, but it shows only a thumbnail and requires clicking to open. For a clean, seamless look, convert the PDF pages to JPG or PNG images and insert those as pictures instead." },
                { q: "How do I convert a multi-page PDF for a PowerPoint presentation?", a: "Convert the entire PDF to JPG — each page becomes a separate image. Then insert each JPG onto its own PowerPoint slide. This gives you one slide per PDF page with full visual fidelity." },
                { q: "Can I convert the PDF directly to PowerPoint instead?", a: "Yes, if you want editable slides. PDF.it offers a PDF to PowerPoint converter that creates a .pptx file with editable text and layouts. However, if you just want the PDF pages as static images in your slides, converting to JPG is simpler and more reliable." },
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

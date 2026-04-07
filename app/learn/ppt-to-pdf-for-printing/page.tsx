import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Printer, ArrowRight } from "lucide-react"

export const metadata = {
  title: "PPT to PDF for Printing: Best Layout + Quality Tips | PDF.it",
  description:
    "Learn how to convert PowerPoint to PDF for high-quality printing. Tips on slide size, resolution, bleed, margins, and getting print-shop-ready PDFs from your presentations.",
  keywords: "ppt to pdf for printing, powerpoint to pdf print quality, pptx to pdf high resolution, print powerpoint slides, pdf print settings",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What slide size should I use for printing PowerPoint as PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "For standard paper printing, use 10 x 7.5 inches (Standard 4:3) or set a custom size matching your target paper (e.g., 8.5 x 11 for US Letter, A4 for international). Avoid Widescreen 16:9 for print — it leaves large margins on standard paper." }
    },
    {
      "@type": "Question",
      "name": "How do I get high-resolution images when converting PPT to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use images that are at least 300 DPI in your PowerPoint. Avoid scaling small images up — this causes pixelation. In PowerPoint, go to File > Options > Advanced and set 'Default resolution' to High Fidelity or 330 PPI to prevent automatic compression." }
    },
    {
      "@type": "Question",
      "name": "What is bleed and do I need it for printing my slides?",
      "acceptedAnswer": { "@type": "Answer", "text": "Bleed is extra image area that extends beyond the trim line, so when the paper is cut, there are no white edges. For professional print shops, add 0.125 inches (3mm) of bleed on all sides. For home or office printing, bleed is usually not necessary." }
    },
    {
      "@type": "Question",
      "name": "Should I convert to PDF before sending to a print shop?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Print shops prefer PDF because it locks the layout and fonts in place. If you send a PPTX file, different versions of PowerPoint or missing fonts can shift elements. Always convert to PDF and review the output before sending to the printer." }
    },
    {
      "@type": "Question",
      "name": "Why do my printed slides look blurry?",
      "acceptedAnswer": { "@type": "Answer", "text": "Blurry prints are almost always caused by low-resolution images. Images that look fine on screen (72 or 96 DPI) look pixelated when printed at 300 DPI. Replace low-res images with higher-resolution originals before converting to PDF." }
    },
    {
      "@type": "Question",
      "name": "Can I print multiple slides per page from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. In PowerPoint, select File > Print > choose a multi-slide layout (e.g., 2 Slides, 4 Slides, 6 Slides per page) before exporting to PDF. Alternatively, print the PDF using your PDF viewer's 'Multiple pages per sheet' option." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert PowerPoint to PDF for High-Quality Printing",
  "description": "Get print-ready PDFs from your PowerPoint presentations in 3 steps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Set your slide size and resolution",
      "text": "In PowerPoint, go to Design > Slide Size and choose a size that matches your target paper. Set image resolution to High Fidelity under File > Options > Advanced."
    },
    {
      "@type": "HowToStep",
      "name": "Convert to PDF",
      "text": "Upload your PPTX to PDF.it's PowerPoint to PDF tool and click Convert. The tool preserves your high-resolution images and fonts."
    },
    {
      "@type": "HowToStep",
      "name": "Review and print",
      "text": "Open the PDF and zoom to 100% to check image quality. Look for font issues or layout shifts. Once satisfied, send to your printer or print shop."
    }
  ]
}

export default function PPTToPDFForPrintingPage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / PowerPoint to PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PPT to PDF for Printing: Best Layout + Quality Tips</h1>
              <p className="text-xl text-slate-300">
                Converting a presentation for print is different from sharing it on screen. Here's how to get crisp, professional-quality printed slides from your PowerPoint file.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <Printer className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Ready to convert? Skip the guide and go straight to the tool.</p>
            </div>
            <Link
              href="/powerpoint-to-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Convert PPT to PDF <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Choosing slide size */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Choosing the Right Slide Size for Print</h2>
              <p className="text-slate-600 mb-4">
                The most common mistake when printing PowerPoint slides is using the wrong slide size. PowerPoint defaults to Widescreen (16:9), which is designed for projectors and screens — not paper.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Slide Size</th>
                      <th className="text-left py-3 px-4 font-bold">Dimensions</th>
                      <th className="text-left py-3 px-4 font-bold">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">Standard (4:3)</td>
                      <td className="py-3 px-4">10 x 7.5 in</td>
                      <td className="py-3 px-4">General printing on US Letter or A4 paper</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">Widescreen (16:9)</td>
                      <td className="py-3 px-4">13.33 x 7.5 in</td>
                      <td className="py-3 px-4">Screen presentations only — not ideal for print</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">Custom (Letter)</td>
                      <td className="py-3 px-4">8.5 x 11 in</td>
                      <td className="py-3 px-4">Full-page print on US Letter</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">Custom (A4)</td>
                      <td className="py-3 px-4">11.69 x 8.27 in</td>
                      <td className="py-3 px-4">Full-page print on A4 (international standard)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4 text-sm">
                To change slide size in PowerPoint: go to <strong>Design &gt; Slide Size &gt; Custom Slide Size</strong> and enter your target dimensions.
              </p>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Convert PowerPoint to Print-Ready PDF</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Set slide size and check resolution",
                    desc: "Match your slide size to the paper you'll print on. Then go to File > Options > Advanced and set 'Default resolution' to High Fidelity (330 PPI) so images aren't compressed during export.",
                  },
                  {
                    title: "Convert to PDF using PDF.it",
                    desc: "Upload your PPTX to the PowerPoint to PDF tool. PDF.it preserves your high-resolution images, embedded fonts, and layout — giving you a print-ready PDF file.",
                  },
                  {
                    title: "Review the PDF at 100% zoom",
                    desc: "Open the PDF and zoom to 100% (actual size). Check that images are sharp, fonts look correct, and nothing has shifted. If something looks off, fix it in PowerPoint and reconvert.",
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

            {/* High-quality images */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Getting High-Quality Images in Your Printed PDF</h2>
              <p className="text-slate-600 mb-4">
                Images that look great on screen can appear blurry when printed. Here's why and how to fix it:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Use 300 DPI images</strong> for professional print. Screen resolution (72-96 DPI) is not enough for print.</li>
                <li>&#10003; <strong>Don't scale images up</strong> in PowerPoint. A small image stretched to fill a slide will look pixelated when printed.</li>
                <li>&#10003; <strong>Disable auto-compression.</strong> PowerPoint compresses images by default. Go to File &gt; Options &gt; Advanced and set resolution to "High Fidelity" or uncheck "Discard editing data."</li>
                <li>&#10003; <strong>Use PNG for graphics</strong> (logos, diagrams) and JPEG for photographs. PNG preserves sharp edges; JPEG is better for photos.</li>
              </ul>
            </section>

            {/* Bleed and margins */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Bleed and Margins for Professional Printing</h2>
              <p className="text-slate-600 mb-4">
                If you're sending your PDF to a professional print shop, you may need to add bleed — extra space around the edges that gets trimmed during cutting.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Standard bleed</strong> is 0.125 inches (3mm) on each side.</li>
                <li>&#10003; <strong>Add bleed in PowerPoint</strong> by making your slide size slightly larger than the final paper size (e.g., 8.75 x 11.25 inches for a US Letter final cut).</li>
                <li>&#10003; <strong>Keep important content</strong> (text, logos) at least 0.25 inches from the edges — this is your "safe zone."</li>
                <li>&#10003; <strong>For office/home printing</strong>, bleed is not needed. Just use standard margins.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                After converting, if the file is too large for upload or email, use <Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">Compress PDF</Link> with Light compression to reduce the size without losing print quality.
              </p>
            </section>

            {/* Multiple slides per page */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Printing Multiple Slides Per Page</h2>
              <p className="text-slate-600 mb-4">
                If you're printing handouts (not full-page slides), PowerPoint can arrange multiple slides on each page before exporting to PDF:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Go to <strong>File &gt; Print</strong> in PowerPoint.</li>
                <li>&#10003; Under "Settings," change from "Full Page Slides" to <strong>2 Slides, 3 Slides, 4 Slides, 6 Slides,</strong> or <strong>9 Slides per page</strong>.</li>
                <li>&#10003; Select <strong>"Print to PDF"</strong> as your printer (or use Microsoft Print to PDF).</li>
                <li>&#10003; The resulting PDF has multiple slides per page, ready to print as handouts.</li>
              </ul>
            </section>

            {/* Common print problems */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Common Print Problems (and How to Fix Them)</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">White borders around slides</h3>
                  <p className="text-slate-600">
                    This happens when your slide size doesn't match the paper size. Set a custom slide size that matches your target paper, or adjust your printer settings to "Fit to Page." For edge-to-edge printing, add bleed.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Colors look different when printed</h3>
                  <p className="text-slate-600">
                    Screen colors (RGB) and print colors (CMYK) display differently. Bright neons and very saturated colors won't reproduce accurately in print. Stick to solid, muted colors for the most predictable results.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Fonts changed or missing</h3>
                  <p className="text-slate-600">
                    Embed fonts before converting: File &gt; Options &gt; Save &gt; "Embed fonts in the file." Read our full guide on <Link href="/learn/pptx-to-pdf-missing-fonts" className="text-[#14D8C4] hover:underline">fixing missing fonts in PPTX to PDF</Link>.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Create a Print-Ready PDF?</h2>
            <p className="text-slate-300 mb-6">Upload your PowerPoint and get a high-quality PDF — free, no signup required.</p>
            <Link
              href="/powerpoint-to-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Printer className="h-5 w-5" /> Convert PPT to PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "Convert PowerPoint to PDF Online (PPTX to PDF)", href: "/learn/convert-ppt-to-pdf" },
                { title: "Do PowerPoint Animations Work in PDF? What Converts (and What Doesn't)", href: "/learn/ppt-to-pdf-animations" },
                { title: "PPTX to PDF Missing Fonts? Fix Font Embedding and Substitutions", href: "/learn/pptx-to-pdf-missing-fonts" },
                { title: "Convert PPT to PDF on iPhone (Fast Method)", href: "/learn/ppt-to-pdf-on-iphone" },
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
                { q: "What slide size should I use for printing PowerPoint as PDF?", a: "For standard paper printing, use 10 x 7.5 inches (Standard 4:3) or set a custom size matching your target paper (e.g., 8.5 x 11 for US Letter, A4 for international). Avoid Widescreen 16:9 for print — it leaves large margins on standard paper." },
                { q: "How do I get high-resolution images when converting PPT to PDF?", a: "Use images that are at least 300 DPI in your PowerPoint. Avoid scaling small images up. In PowerPoint, go to File > Options > Advanced and set 'Default resolution' to High Fidelity or 330 PPI to prevent automatic compression." },
                { q: "What is bleed and do I need it for printing my slides?", a: "Bleed is extra image area that extends beyond the trim line, so when the paper is cut, there are no white edges. For professional print shops, add 0.125 inches (3mm) of bleed on all sides. For home or office printing, bleed is usually not necessary." },
                { q: "Should I convert to PDF before sending to a print shop?", a: "Yes. Print shops prefer PDF because it locks the layout and fonts in place. If you send a PPTX file, different versions of PowerPoint or missing fonts can shift elements. Always convert to PDF and review the output before sending." },
                { q: "Why do my printed slides look blurry?", a: "Blurry prints are almost always caused by low-resolution images. Images that look fine on screen (72 or 96 DPI) look pixelated when printed at 300 DPI. Replace low-res images with higher-resolution originals before converting to PDF." },
                { q: "Can I print multiple slides per page from a PDF?", a: "Yes. In PowerPoint, select File > Print > choose a multi-slide layout (e.g., 2 Slides, 4 Slides, 6 Slides per page) before exporting to PDF. Alternatively, print the PDF using your PDF viewer's 'Multiple pages per sheet' option." },
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

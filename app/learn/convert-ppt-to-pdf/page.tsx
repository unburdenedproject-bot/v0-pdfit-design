import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Presentation, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convert PowerPoint to PDF Online (PPTX to PDF) | PDF.it",
  description:
    "Learn how to convert PowerPoint to PDF online in seconds. Step-by-step guide covering slide quality, notes pages, and why PDF is the best format for sharing presentations.",
  keywords: "convert powerpoint to pdf online, pptx to pdf, powerpoint to pdf, ppt to pdf converter, convert ppt to pdf free",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert PowerPoint to PDF for free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PPTX or PPT file to PDF.it's PowerPoint to PDF tool, click Convert, and download the PDF. No signup required for your first 3 files. The conversion preserves your slide layout, fonts, and images." }
    },
    {
      "@type": "Question",
      "name": "Does converting PowerPoint to PDF keep the formatting?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Converting to PDF preserves your text, images, shapes, charts, and layout exactly as they appear in PowerPoint. The only elements that don't transfer are animations and transitions, since PDF is a static format." }
    },
    {
      "@type": "Question",
      "name": "Can I convert PPTX to PDF without PowerPoint installed?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it is an online tool that works in any browser. You don't need PowerPoint, Microsoft Office, or any software installed. Just upload your file and convert it." }
    },
    {
      "@type": "Question",
      "name": "How do I include speaker notes in the PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "In PowerPoint, go to File > Export > Create PDF and choose 'Notes Pages' as the layout. This prints each slide with its speaker notes below. If you're converting online, export as Notes Pages from PowerPoint first, then convert the resulting file." }
    },
    {
      "@type": "Question",
      "name": "Will my PowerPoint fonts look the same in the PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "If you use standard fonts (Arial, Calibri, Times New Roman), yes. Custom or uncommon fonts may be substituted if they aren't embedded. To avoid this, embed fonts in PowerPoint before converting: go to File > Options > Save > check 'Embed fonts in the file.'" }
    },
    {
      "@type": "Question",
      "name": "Can I convert the PDF back to PowerPoint later?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it offers a PDF to PowerPoint tool that converts your PDF back into an editable PPTX file. Keep in mind that complex layouts may need minor adjustments after conversion." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert PowerPoint to PDF Online",
  "description": "Convert your PPTX or PPT presentation to PDF in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your PowerPoint file",
      "text": "Go to PDF.it's PowerPoint to PDF tool and upload your PPTX or PPT file by clicking or dragging it into the upload area."
    },
    {
      "@type": "HowToStep",
      "name": "Convert to PDF",
      "text": "Click Convert. PDF.it processes your presentation and creates a PDF that preserves your slides, fonts, and images."
    },
    {
      "@type": "HowToStep",
      "name": "Download your PDF",
      "text": "Download the converted PDF file. It's ready to share via email, upload to portals, or print — and it will look the same on any device."
    }
  ]
}

export default function ConvertPPTToPDFPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / PowerPoint to PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert PowerPoint to PDF Online (PPTX to PDF)</h1>
              <p className="text-xl text-slate-300">
                Need to share a presentation without worrying about fonts, formatting, or software compatibility? Here's how to convert PowerPoint to PDF in seconds — free, online, no software needed.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Presentation className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Ready to convert? Skip the guide and go straight to the tool.</p>
            </div>
            <Link
              href="/powerpoint-to-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Convert PPT to PDF <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why convert */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Convert PowerPoint to PDF?</h2>
              <p className="text-slate-600 mb-4">
                PowerPoint files are great for creating and editing presentations, but they're not ideal for sharing. Here's why PDF is the better format for distribution:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Universal viewing.</strong> PDFs open on any device — Windows, Mac, iPhone, Android — without needing PowerPoint installed. Your audience sees exactly what you intended.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>No accidental edits.</strong> Sending a PPTX means anyone can modify your slides. A PDF locks the content so your work stays intact.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Consistent layout.</strong> Fonts shift, images move, and charts break when a PPTX is opened on a different computer. PDF freezes the layout pixel-for-pixel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Smaller file size.</strong> PDFs are often smaller than the original PPTX. If the file is still large, you can <Link href="/compress-pdf" className="text-orange-600 hover:underline">compress the PDF</Link> further.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Convert PowerPoint to PDF (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your PowerPoint file",
                    desc: "Go to the PowerPoint to PDF tool and drag your PPTX or PPT file into the upload area, or click to browse. Files up to 25MB are free — Pro users can upload up to 200MB.",
                  },
                  {
                    title: "Click Convert",
                    desc: "PDF.it converts your presentation to a high-quality PDF. Each slide becomes a page. Text, images, shapes, and charts are preserved exactly as they appear in PowerPoint.",
                  },
                  {
                    title: "Download your PDF",
                    desc: "Download the finished PDF and share it with confidence. The file looks identical on every device and platform — no PowerPoint required to view it.",
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

            {/* What converts and what doesn't */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What Converts to PDF (and What Doesn't)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Element</th>
                      <th className="text-left py-3 px-4 font-bold">Converts?</th>
                      <th className="text-left py-3 px-4 font-bold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Text & fonts</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">Yes</td>
                      <td className="py-3 px-4">Standard fonts convert perfectly; custom fonts should be embedded first</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Images & shapes</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">Yes</td>
                      <td className="py-3 px-4">Preserved at original quality</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Charts & graphs</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">Yes</td>
                      <td className="py-3 px-4">Rendered as static images in the PDF</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Animations</td>
                      <td className="py-3 px-4 text-red-600 font-semibold">No</td>
                      <td className="py-3 px-4">PDF is static — <Link href="/learn/ppt-to-pdf-animations" className="text-orange-600 hover:underline">learn more</Link></td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Transitions</td>
                      <td className="py-3 px-4 text-red-600 font-semibold">No</td>
                      <td className="py-3 px-4">Slide transitions are lost in PDF</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Embedded videos</td>
                      <td className="py-3 px-4 text-red-600 font-semibold">No</td>
                      <td className="py-3 px-4">Only the video thumbnail/poster frame is kept</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4 text-sm">
                Curious about animations specifically? Read our full guide on <Link href="/learn/ppt-to-pdf-animations" className="text-orange-600 hover:underline">what happens to PowerPoint animations in PDF</Link>.
              </p>
            </section>

            {/* Slide quality */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">How to Get the Best Slide Quality in Your PDF</h2>
              <p className="text-slate-600 mb-4">
                The quality of your PDF depends on the quality of your original PowerPoint. Here are tips to get the sharpest results:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Use high-resolution images</strong> in your slides (at least 150 DPI for screen, 300 DPI for print).</li>
                <li>&#10003; <strong>Embed your fonts</strong> before converting. Go to File &gt; Options &gt; Save &gt; check "Embed fonts in the file." This prevents <Link href="/learn/pptx-to-pdf-missing-fonts" className="text-orange-600 hover:underline">missing font issues</Link>.</li>
                <li>&#10003; <strong>Avoid excessive compression</strong> of images inside PowerPoint — let the original quality carry over to the PDF.</li>
                <li>&#10003; <strong>Check slide size</strong> before converting. Standard (4:3) and Widescreen (16:9) both work, but make sure the aspect ratio matches your intended output. See our <Link href="/learn/ppt-to-pdf-for-printing" className="text-orange-600 hover:underline">printing guide</Link> for details.</li>
              </ul>
            </section>

            {/* Notes pages */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Including Speaker Notes in Your PDF</h2>
              <p className="text-slate-600 mb-4">
                By default, converting a PowerPoint to PDF only includes the slides themselves. If you need speaker notes in the PDF:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; In PowerPoint, go to <strong>File &gt; Export &gt; Create PDF/XPS</strong>.</li>
                <li>&#10003; Click <strong>Options</strong> and select <strong>"Notes Pages"</strong> under "Publish what."</li>
                <li>&#10003; This creates a PDF where each page shows the slide on top and the speaker notes below.</li>
                <li>&#10003; Alternatively, print to PDF using the "Notes Pages" layout under File &gt; Print.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                If you already have a PPTX file and can't access PowerPoint, upload it to <Link href="/powerpoint-to-pdf" className="text-orange-600 hover:underline">PDF.it's converter</Link> for a quick slide-only conversion.
              </p>
            </section>

            {/* Other Office formats */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Converting Other Office Files to PDF</h2>
              <p className="text-slate-600 mb-4">
                PowerPoint isn't the only file type you can convert. PDF.it also handles:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <Link href="/word-to-pdf" className="text-orange-600 hover:underline">Word to PDF</Link> — Convert DOCX and DOC files to PDF.</li>
                <li>&#10003; <Link href="/excel-to-pdf" className="text-orange-600 hover:underline">Excel to PDF</Link> — Convert spreadsheets while preserving table layouts.</li>
                <li>&#10003; <Link href="/office-to-pdf" className="text-orange-600 hover:underline">Office to PDF</Link> — One tool for any Microsoft Office file.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Need to go the other direction? Use <Link href="/pdf-to-powerpoint" className="text-orange-600 hover:underline">PDF to PowerPoint</Link> to convert a PDF back into editable slides.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Convert Your PowerPoint?</h2>
            <p className="text-slate-300 mb-6">Upload your PPTX file and get a perfect PDF in seconds — free, no signup required.</p>
            <Link
              href="/powerpoint-to-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Presentation className="h-5 w-5" /> Convert PPT to PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "PPT to PDF for Printing: Best Layout + Quality Tips", href: "/learn/ppt-to-pdf-for-printing" },
                { title: "Do PowerPoint Animations Work in PDF? What Converts (and What Doesn't)", href: "/learn/ppt-to-pdf-animations" },
                { title: "PPTX to PDF Missing Fonts? Fix Font Embedding and Substitutions", href: "/learn/pptx-to-pdf-missing-fonts" },
                { title: "Convert PPT to PDF on iPhone (Fast Method)", href: "/learn/ppt-to-pdf-on-iphone" },
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "How do I convert PowerPoint to PDF for free?", a: "Upload your PPTX or PPT file to PDF.it's PowerPoint to PDF tool, click Convert, and download the PDF. No signup required for your first 3 files. The conversion preserves your slide layout, fonts, and images." },
                { q: "Does converting PowerPoint to PDF keep the formatting?", a: "Yes. Converting to PDF preserves your text, images, shapes, charts, and layout exactly as they appear in PowerPoint. The only elements that don't transfer are animations and transitions, since PDF is a static format." },
                { q: "Can I convert PPTX to PDF without PowerPoint installed?", a: "Yes. PDF.it is an online tool that works in any browser. You don't need PowerPoint, Microsoft Office, or any software installed. Just upload your file and convert it." },
                { q: "How do I include speaker notes in the PDF?", a: "In PowerPoint, go to File > Export > Create PDF and choose 'Notes Pages' as the layout. This prints each slide with its speaker notes below. If you're converting online, export as Notes Pages from PowerPoint first, then convert." },
                { q: "Will my PowerPoint fonts look the same in the PDF?", a: "If you use standard fonts (Arial, Calibri, Times New Roman), yes. Custom or uncommon fonts may be substituted if they aren't embedded. To avoid this, embed fonts in PowerPoint before converting." },
                { q: "Can I convert the PDF back to PowerPoint later?", a: "Yes. PDF.it offers a PDF to PowerPoint tool that converts your PDF back into an editable PPTX file. Keep in mind that complex layouts may need minor adjustments after conversion." },
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

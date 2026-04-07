import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { PlayCircle, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Do PowerPoint Animations Work in PDF? What Converts (and What Doesn't) | PDF.it",
  description:
    "Find out what happens to PowerPoint animations, transitions, and embedded videos when you convert to PDF. Learn what transfers, what gets lost, and the best alternatives.",
  keywords: "powerpoint animations to pdf, ppt animations in pdf, do animations work in pdf, powerpoint transitions pdf, pptx to pdf animations",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do PowerPoint animations transfer to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF is a static document format and does not support animations. When you convert PowerPoint to PDF, each slide is captured in its final state — all animated elements appear in their end positions, but the motion effects are removed." }
    },
    {
      "@type": "Question",
      "name": "What happens to slide transitions in PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Slide transitions (fade, wipe, push, etc.) are completely lost when converting to PDF. Each slide becomes a static page in the PDF. There is no way to preserve transitions in a PDF file." }
    },
    {
      "@type": "Question",
      "name": "Do embedded videos work in PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Embedded videos are not included in the PDF. Only the video's poster frame or thumbnail is shown as a static image. If your audience needs to see the video, share the original PPTX or link to the video separately." }
    },
    {
      "@type": "Question",
      "name": "What PowerPoint elements DO convert to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Text, images, shapes, SmartArt, charts, tables, and background formatting all convert to PDF. These elements appear exactly as they do on the final state of each slide. Hyperlinks are also preserved in most cases." }
    },
    {
      "@type": "Question",
      "name": "How can I share an animated presentation without using PowerPoint?",
      "acceptedAnswer": { "@type": "Answer", "text": "You have several options: export as a video (MP4) from PowerPoint, use PowerPoint Online for free viewing, share via Google Slides (import your PPTX), or upload to SlideShare. Each method preserves animations better than PDF." }
    },
    {
      "@type": "Question",
      "name": "If I convert a PDF back to PowerPoint, will the animations come back?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Once a presentation is converted to PDF, the animation data is permanently lost. Converting the PDF back to PowerPoint gives you editable slides, but you would need to re-add animations manually." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Handle PowerPoint Animations When Converting to PDF",
  "description": "Understand what happens to animations and learn the best approach for converting animated presentations.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Check your presentation for animations",
      "text": "Open your PowerPoint and review each slide. Note which slides have animations, transitions, or embedded videos. Decide if these elements are essential for your audience."
    },
    {
      "@type": "HowToStep",
      "name": "Choose your export format",
      "text": "If animations are critical, export as MP4 video instead of PDF. If animations are just decorative and the content matters more, convert to PDF — all text, images, and charts will be preserved."
    },
    {
      "@type": "HowToStep",
      "name": "Convert to PDF",
      "text": "Upload your PPTX to PDF.it's PowerPoint to PDF tool and convert. Each slide is captured in its final animated state, preserving all visible content without the motion effects."
    }
  ]
}

export default function PPTToPDFAnimationsPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Do PowerPoint Animations Work in PDF? What Converts (and What Doesn't)</h1>
              <p className="text-xl text-slate-300">
                You built a presentation with slick animations and transitions. But when you convert it to PDF, will any of that survive? Here's the honest answer — and what you can do about it.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <PlayCircle className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Need to convert anyway? Go straight to the tool.</p>
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

            {/* The short answer */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">The Short Answer: Animations Don't Transfer to PDF</h2>
              <p className="text-slate-600 mb-4">
                PDF is a <strong>static document format</strong>. It was designed to preserve the look of a printed page — not to play motion effects. When you convert a PowerPoint presentation to PDF:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">&#10007;</span>
                  <span><strong>Animations are removed.</strong> Entrance, emphasis, exit, and motion path animations are all lost. Each element appears in its final position.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">&#10007;</span>
                  <span><strong>Transitions are removed.</strong> Fade, wipe, push, morph — none of these carry over. Each slide simply appears as the next page.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">&#10007;</span>
                  <span><strong>Embedded videos are removed.</strong> Only the poster frame (thumbnail) is shown. The video itself is not included in the PDF.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">&#10007;</span>
                  <span><strong>Audio clips are removed.</strong> Narration, background music, and sound effects are not included in PDF files.</span>
                </li>
              </ul>
            </section>

            {/* What DOES convert */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What DOES Convert Successfully</h2>
              <p className="text-slate-600 mb-4">
                The good news is that all the <strong>visual content</strong> on your slides converts perfectly:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Text and fonts</strong> — All text is preserved with formatting (bold, italic, colors, sizes). Standard fonts convert perfectly; embed custom fonts to be safe.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Images and photos</strong> — Preserved at their original quality in the PDF.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Shapes, lines, and SmartArt</strong> — All vector graphics render correctly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Charts and graphs</strong> — Rendered as static images, preserving the exact look from PowerPoint.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Tables</strong> — Layout and formatting are maintained.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Hyperlinks</strong> — Clickable links usually survive the conversion.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Slide backgrounds</strong> — Gradients, patterns, and background images are preserved.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Handle Animated Presentations</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Decide if animations are essential",
                    desc: "Ask yourself: does the audience need to see the motion, or just the content? If animations are decorative (e.g., bullet points fading in), PDF works fine. If animations tell a story (e.g., a process diagram building step by step), consider a video export instead.",
                  },
                  {
                    title: "For static sharing, convert to PDF",
                    desc: "If content matters more than motion, convert to PDF using PDF.it. All text, images, charts, and layouts are preserved. Your audience can read the deck on any device without PowerPoint.",
                  },
                  {
                    title: "For animated sharing, export as video",
                    desc: "In PowerPoint, go to File > Export > Create a Video. Choose Full HD (1080p) for quality. This creates an MP4 that includes all animations, transitions, and even narration timings.",
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

            {/* Alternatives */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Alternatives to PDF for Sharing Animated Presentations</h2>
              <p className="text-slate-600 mb-4">
                If you need your audience to see the animations, here are better options than PDF:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Export as MP4 video</h3>
                  <p className="text-slate-600">
                    PowerPoint can export your entire deck as a video file (File &gt; Export &gt; Create a Video). All animations, transitions, and timings are preserved. The downside: viewers can't jump to specific slides easily.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Share via PowerPoint Online</h3>
                  <p className="text-slate-600">
                    Upload your PPTX to OneDrive and share a view-only link. Recipients can view the presentation in their browser with animations intact — no PowerPoint installation needed.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Import into Google Slides</h3>
                  <p className="text-slate-600">
                    Upload your PPTX to Google Slides and share a link. Most animations are supported, though complex effects may render differently. Free and accessible to anyone with a Google account.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convert individual slides to images</h3>
                  <p className="text-slate-600">
                    If you only need a few key slides, export them as high-quality images using <Link href="/pdf-to-jpg" className="text-[#14D8C4] hover:underline">PDF to JPG</Link> or <Link href="/pdf-to-png" className="text-[#14D8C4] hover:underline">PDF to PNG</Link> after converting to PDF.
                  </p>
                </div>
              </div>
            </section>

            {/* Can you get animations back */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Can You Get Animations Back After Converting to PDF?</h2>
              <p className="text-slate-600 mb-4">
                No. Once a presentation is converted to PDF, animation data is permanently lost. Even if you convert the PDF back to PowerPoint using <Link href="/pdf-to-powerpoint" className="text-[#14D8C4] hover:underline">PDF to PowerPoint</Link>, the resulting PPTX will have static slides. You would need to re-add animations manually.
              </p>
              <p className="text-slate-600">
                This is why it's important to <strong>keep your original PPTX file</strong>. The PDF should be treated as a distribution copy, not a replacement for the source file.
              </p>
            </section>

            {/* When PDF is the right choice */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">When PDF IS the Right Choice (Even With Animations)</h2>
              <p className="text-slate-600 mb-4">
                Despite losing animations, PDF is still the best format for many situations:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Submitting assignments or reports</strong> — professors and reviewers expect PDF.</li>
                <li>&#10003; <strong>Attaching to emails</strong> — PDF is universally viewable and smaller than PPTX.</li>
                <li>&#10003; <strong>Uploading to portals</strong> — job applications, grant submissions, and regulatory filings usually require PDF.</li>
                <li>&#10003; <strong>Printing handouts</strong> — for physical copies, PDF gives the most <Link href="/learn/ppt-to-pdf-for-printing" className="text-[#14D8C4] hover:underline">reliable print results</Link>.</li>
                <li>&#10003; <strong>Archiving presentations</strong> — PDF ensures the content is readable years from now, on any device.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Convert Your PowerPoint?</h2>
            <p className="text-slate-300 mb-6">Animations aside, your content will look perfect. Upload and convert in seconds.</p>
            <Link
              href="/powerpoint-to-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <PlayCircle className="h-5 w-5" /> Convert PPT to PDF Now
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
                { title: "PPT to PDF for Printing: Best Layout + Quality Tips", href: "/learn/ppt-to-pdf-for-printing" },
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
                { q: "Do PowerPoint animations transfer to PDF?", a: "No. PDF is a static document format and does not support animations. When you convert PowerPoint to PDF, each slide is captured in its final state — all animated elements appear in their end positions, but the motion effects are removed." },
                { q: "What happens to slide transitions in PDF?", a: "Slide transitions (fade, wipe, push, etc.) are completely lost when converting to PDF. Each slide becomes a static page. There is no way to preserve transitions in a PDF file." },
                { q: "Do embedded videos work in PDF?", a: "No. Embedded videos are not included in the PDF. Only the video's poster frame or thumbnail is shown as a static image. If your audience needs to see the video, share the original PPTX or link to the video separately." },
                { q: "What PowerPoint elements DO convert to PDF?", a: "Text, images, shapes, SmartArt, charts, tables, and background formatting all convert to PDF. These elements appear exactly as they do on the final state of each slide. Hyperlinks are also preserved in most cases." },
                { q: "How can I share an animated presentation without using PowerPoint?", a: "You have several options: export as a video (MP4) from PowerPoint, use PowerPoint Online for free viewing, share via Google Slides, or upload to SlideShare. Each method preserves animations better than PDF." },
                { q: "If I convert a PDF back to PowerPoint, will the animations come back?", a: "No. Once a presentation is converted to PDF, the animation data is permanently lost. Converting the PDF back to PowerPoint gives you editable slides, but you would need to re-add animations manually." },
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

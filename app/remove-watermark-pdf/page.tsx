import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Droplets, Zap, AlertTriangle, FileCheck } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Remove Watermark from PDF — How to Delete PDF Watermarks | PDF.it",
  description:
    "Learn how to handle watermarked PDFs. PDF.it offers tools to add watermarks, but removing watermarks from PDFs you don't own may violate copyright.",
}

export default function RemoveWatermarkPDFPage() {
  const faqs = [
    { q: "Can PDF.it remove watermarks from PDFs?", a: "No. PDF.it does not offer watermark removal because it could enable copyright infringement and piracy. Instead, PDF.it offers tools to add your own watermarks to protect your documents." },
    { q: "Is it legal to remove a watermark from a PDF?", a: "It depends. If you own the original document and added the watermark yourself, you can remove it. However, removing watermarks from documents you do not own — such as stock photos, licensed content, or trial software — typically violates copyright law and terms of service." },
    { q: "Why do PDFs have watermarks?", a: "Watermarks serve several purposes: protecting intellectual property, marking documents as drafts or confidential, branding documents with a company logo, deterring unauthorized copying, and indicating the document's status (e.g., SAMPLE, DRAFT, APPROVED)." },
    { q: "How can I get a PDF without the watermark?", a: "The legitimate way is to purchase or license the full version of the document. For draft watermarks, ask the author for the final version. For trial watermarks, purchase the software license. For stock content, buy the full-resolution version." },
    { q: "Can I add my own watermark to a PDF with PDF.it?", a: "Yes. PDF.it's Watermark PDF tool (available on the Pro plan) lets you add custom text or image watermarks to your PDFs. You can control the position, opacity, rotation, and size of the watermark." },
    { q: "What should I do if I accidentally watermarked my own PDF?", a: "If you added a watermark to your own document and still have the original unwatermarked file, simply use that version. If you only have the watermarked version, you may need to recreate the document from the source file (Word, PowerPoint, etc.) and export a new PDF without the watermark." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Header />
      <main>
        {/* Hero */}
        <section
          className="text-white py-16 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%),
              #0E0F1E
            `,
          }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
            <filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#heroGrain)" />
          </svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)",
                }}
              >
                <Droplets className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Remove Watermark from PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Learn about PDF watermarks — why they exist, when they can be legitimately removed, and how to work with watermarked documents.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Understand Watermarks</span></div>
                <div className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-[#14D8C4]" /><span>Know Your Rights</span></div>
                <div className="flex items-center gap-2"><FileCheck className="h-4 w-4 text-[#14D8C4]" /><span>Legitimate Options</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              PDF watermarks are text or image overlays placed on document pages to indicate ownership, status, or licensing. While there are legitimate reasons to remove a watermark from your own documents, PDF.it does not offer watermark removal as a tool because it could facilitate copyright infringement. This page explains your options.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Understand why PDFs have watermarks</li>
              <li className="flex items-center gap-2">✓ Learn when removal is legitimate</li>
              <li className="flex items-center gap-2">✓ Find alternatives to removing watermarks</li>
              <li className="flex items-center gap-2">✓ Add your own watermarks to protect documents</li>
            </ul>
          </div>
        </section>

        {/* CTA — Work with Watermarks */}
        <section className="py-12 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Need to Work with Watermarks?</h2>
            <p className="text-slate-600 mb-6">Add your own professional watermarks to protect your documents, or flatten PDFs to lock in existing content.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/watermark-pdf" className="inline-flex items-center justify-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">Add Watermark (Pro)</Link>
              <Link href="/flatten-pdf" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors">Flatten PDF (Free)</Link>
            </div>
          </div>
        </section>

        {/* Feature Blocks */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Why Do PDFs Have Watermarks?", desc: "Watermarks protect intellectual property, mark documents as drafts or confidential, brand content with logos, and deter unauthorized copying across legal, corporate, and publishing industries." },
                { title: "Legitimate Removal Scenarios", desc: "You can legitimately remove a watermark if you are the original author, purchased a license, or the watermark was added by mistake. Go back to the source file to export a clean PDF." },
                { title: "Alternatives to Removal", desc: "Purchase the full licensed version, contact the owner for an unwatermarked copy, use it for preview only, or create your own content. Use PDF.it to add your own watermarks." },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <div
                    className="rounded-[11px] p-6 h-full"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">How to Handle Watermarked PDFs</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Determine ownership", desc: "Who owns the document and why the watermark was added" },
                { num: "2", title: "Re-export if you own it", desc: "Go back to the source file and export without the watermark" },
                { num: "3", title: "License or add your own", desc: "Purchase the full version or add your own watermark" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{
                      background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                      boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)",
                      border: "1px solid rgba(20,216,196,0.25)",
                    }}
                  >
                    <span className="text-[#14D8C4] font-black text-lg">{step.num}</span>
                  </div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Watermark PDF", href: "/watermark-pdf", desc: "Add watermarks (Pro)" },
                { name: "Flatten PDF", href: "/flatten-pdf", desc: "Lock in content" },
                { name: "Protect PDF", href: "/protect-pdf", desc: "Password-protect PDFs" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce file size" },
              ].map((tool) => (
                <div
                  key={tool.href}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <Link
                    href={tool.href}
                    className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%),
              radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%),
              radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a }
          }))
        })}} />
      </main>
      <Footer />
    </div>
  )
}

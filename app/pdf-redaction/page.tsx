import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RedactionInterface } from "@/components/redaction-interface"
import { Shield, Eye, Lock, Zap, PenTool, ArrowLeftRight, Layers } from "lucide-react"

export const metadata = {
  title: "Redact PDFs Online — Permanently Remove Sensitive Information | PDF.it",
  description:
    "Permanently redact sensitive text, SSNs, addresses, and confidential data from PDFs. Visual redaction editor — draw boxes over content to permanently delete it. PDF.it Business feature.",
}

export default function PdfRedactionPage() {
  const faqs = [
    { q: "What is PDF redaction?", a: "PDF redaction is the process of permanently removing sensitive information from a PDF. Unlike placing a black box over text, true redaction deletes the underlying content so it cannot be recovered." },
    { q: "Is the redaction permanent?", a: "Yes. After you apply redactions, the original content is permanently removed from the PDF. The redacted areas appear as solid black boxes, and the hidden text underneath is deleted." },
    { q: "What information should I redact?", a: "You should redact any sensitive or confidential information, including Social Security numbers, addresses, phone numbers, bank details, account numbers, medical information, case details, and other personally identifiable information." },
    { q: "How is redaction different from covering text with a black box?", a: "A simple black box may only hide text visually while leaving the original content in the file. Proper PDF redaction removes the actual data underneath, making it inaccessible to search, copy, and extraction tools." },
    { q: "Can I redact multiple pages in a PDF?", a: "Yes. You can move through your document page by page and add redactions wherever sensitive content appears before applying all redactions at once." },
    { q: "Is PDF Redaction free?", a: "PDF Redaction is available as a Business plan feature for $13.99/month. It includes the visual redaction editor along with other Business tools like Workflow Automation, Table Extraction, PDF Compare, and eSign." },
    { q: "How do I redact a PDF?", a: "Upload your PDF, draw black redaction boxes over the areas you want to remove, review all pages, and click Apply Redaction. Once applied, the sensitive content is permanently deleted from the document." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Header />
      <main>
        {/* 1. Hero */}
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
                <Shield className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Redact PDFs Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Permanently remove sensitive information from PDF documents. Draw redaction boxes over confidential content, and when you apply, the underlying text is deleted from the document so it cannot be selected, copied, searched, or recovered.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-[#14D8C4]" /><span>Visual Editor</span></div>
                <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-[#14D8C4]" /><span>Permanent Removal</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Multi-Page Support</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Proper PDF redaction permanently removes sensitive information — not just hiding it visually. PDF.it's redaction tool lets you draw boxes over confidential content, and when you apply, the underlying text is deleted from the document so it cannot be selected, copied, searched, or recovered.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Permanently delete underlying text data</li>
              <li className="flex items-center gap-2">✓ Visual editor — draw redaction boxes on pages</li>
              <li className="flex items-center gap-2">✓ Protect SSNs, addresses, medical records, legal data</li>
              <li className="flex items-center gap-2">✓ Multi-page redaction with one-click apply</li>
            </ul>
          </div>
        </section>

        {/* 3. Interface */}
        <RedactionInterface locale="en" />

        {/* 4. Feature Blocks */}
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
                { title: "Legal & Court Documents", desc: "Redact witness names, case numbers, and signatures before filing. Protect confidential details and meet privacy requirements for legal teams and court users." },
                { title: "HR & Employee Records", desc: "Remove SSNs, salaries, and addresses before sharing records with third parties. Keep employee data private when sending to auditors, vendors, or outside partners." },
                { title: "Healthcare & Financial", desc: "Redact patient info, bank accounts, and tax IDs for HIPAA and compliance. Protect medical records, payment details, and confidential business information." },
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

        {/* 5. How It Works */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">How to Redact a PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Upload your PDF", desc: "Drag and drop or click to choose a file" },
                { num: "2", title: "Draw redaction boxes", desc: "Click and drag over sensitive areas" },
                { num: "3", title: "Apply and download", desc: "Content permanently deleted from the PDF" },
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

        {/* 6. Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "eSign", href: "/esign", desc: "Add electronic signatures to any PDF document." },
                { name: "PDF Compare", href: "/pdf-compare", desc: "Compare two PDFs side-by-side and highlight differences." },
                { name: "Protect PDF", href: "/protect-pdf", desc: "Add password protection to your documents." },
                { name: "Flatten PDF", href: "/flatten-pdf", desc: "Lock form fields and annotations into a flat PDF." },
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

        {/* 7. FAQ */}
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

        {/* 8. FAQ Schema */}
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

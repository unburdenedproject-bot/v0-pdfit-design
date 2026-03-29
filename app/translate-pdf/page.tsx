import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TranslatePdfInterface } from "@/components/translate-pdf-interface"
import { Languages, Zap, Shield } from "lucide-react"

export const metadata = {
  title: "Translate PDF — AI Document Translation into 13 Languages | PDF.it",
  description: "Upload any PDF and translate it into English, Spanish, Portuguese, French, German, Italian, Chinese, Japanese, Korean, Arabic, Russian, Hindi, or Dutch. AI-powered translation for contracts, reports, and documents. Business plan feature.",
  alternates: { languages: { "en": "https://pdf.it.com/translate-pdf", "es": "https://pdf.it.com/es/traducir-pdf", "pt-BR": "https://pdf.it.com/br/traduzir-pdf" } },
}

const faqs = [
  { q: "What is Translate PDF?", a: "Translate PDF uses AI to translate the full text content of any PDF document into your chosen language. It supports 13 languages including English, Spanish, Portuguese, French, German, Chinese, Japanese, and more." },
  { q: "What languages are supported?", a: "English, Spanish, Brazilian Portuguese, French, German, Italian, Dutch, Simplified Chinese, Japanese, Korean, Arabic, Russian, and Hindi." },
  { q: "Does it preserve the original PDF layout?", a: "The translated text is delivered as readable text that preserves paragraph structure and section breaks. For layout-exact PDF translation, we recommend copying the translated text into your original document template." },
  { q: "How accurate is the translation?", a: "Translations use GPT-4o-mini which provides professional-quality translations. It handles business, legal, and technical documents well. For certified translations, always have a human translator review the output." },
  { q: "What plan do I need?", a: "Translate PDF is a Business plan feature at $13.99/month. It includes all other Business tools like Chat with PDF, Smart Extraction, PDF Summarizer, and more." },
  { q: "Can I download the translation?", a: "Yes. You can copy the translation to your clipboard or download it as a text file with one click." },
]

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map((faq) => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) }

export default function TranslatePdfPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Header />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Languages className="h-10 w-10 text-[#14D8C4]" /></div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Translate PDF</h1>
              <p className="text-xl text-slate-300 mb-8">Upload any PDF and translate it into 13 languages with AI. Professional-quality translation for contracts, reports, and documents.</p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Languages className="h-4 w-4 text-[#14D8C4]" /><span>13 Languages</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>AI-Powered</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Secure & Private</span></div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">Need to understand a document in another language? Upload your PDF and our AI translates it into your chosen language — preserving the document structure, proper nouns, and professional tone. Supports 13 languages including English, Spanish, French, German, Chinese, and more.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ 13 languages supported</li>
              <li className="flex items-center gap-2">✓ Professional-quality AI translation</li>
              <li className="flex items-center gap-2">✓ Preserves document structure</li>
              <li className="flex items-center gap-2">✓ Copy or download the translation</li>
            </ul>
          </div>
        </section>
        <TranslatePdfInterface />
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Contracts & Legal Documents", desc: "Translate contracts, agreements, and legal documents while preserving key terms, party names, and clause structure." },
                { title: "Business Reports & Correspondence", desc: "Translate financial reports, business proposals, and international correspondence into your team's language." },
                { title: "Academic & Research Papers", desc: "Access research published in other languages. Translate academic papers, studies, and publications for your review." },
              ].map((f) => (
                <div key={f.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-slate-900 mb-8 text-center">How to Translate a PDF</h2><div className="flex flex-col sm:flex-row gap-6 justify-center text-center">{[{ num: "1", title: "Upload your PDF", desc: "Drag and drop or click to choose" }, { num: "2", title: "Choose language", desc: "Select from 13 languages" }, { num: "3", title: "Get translation", desc: "Copy or download the result" }].map((s) => (<div key={s.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{s.num}</span></div><p className="font-semibold text-slate-900">{s.title}</p><p className="text-sm text-slate-500 mt-1">{s.desc}</p></div>))}</div></div></section>
        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><h2 className="text-2xl font-black text-white mb-6 text-center">Related Tools</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-4">{[{ name: "PDF Summarizer", href: "/pdf-summarizer", desc: "Summarize in any language" }, { name: "Chat with PDF", href: "/chat-with-pdf", desc: "Ask questions about PDFs" }, { name: "PDF to TXT", href: "/pdf-to-txt", desc: "Extract raw text" }, { name: "OCR Scanner", href: "/ocr-scanner", desc: "Make scanned PDFs searchable" }].map((t) => (<div key={t.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><Link href={t.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><div className="font-bold text-[#14D8C4] text-sm mb-1">{t.name}</div><div className="text-xs text-slate-400">{t.desc}</div></Link></div>))}</div></div></section>
        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-white mb-10 text-center">Frequently Asked Questions</h2><div className="space-y-4">{faqs.map((faq, i) => (<div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3><p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p></div>))}</div></div></section>
        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </main>
      <Footer />
    </div>
  )
}

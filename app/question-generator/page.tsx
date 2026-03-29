import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuestionGeneratorInterface } from "@/components/question-generator-interface"
import { HelpCircle, Zap, Shield } from "lucide-react"

export const metadata = {
  title: "AI Question Generator — Create Study Questions from Any PDF | PDF.it",
  description: "Upload any PDF and generate study questions instantly. Multiple choice, short answer, and true/false. Choose difficulty and question count. Perfect for students, teachers, and training. Pro plan feature.",
  alternates: { languages: { "en": "https://pdf.it.com/question-generator", "es": "https://pdf.it.com/es/generador-preguntas", "pt-BR": "https://pdf.it.com/br/gerador-perguntas" } },
}

const faqs = [
  { q: "What is AI Question Generator?", a: "AI Question Generator reads your PDF document and automatically creates study questions with answers and explanations. Choose from multiple choice, short answer, true/false, or a mix of all types." },
  { q: "What types of questions can it generate?", a: "Multiple choice (4 options with one correct answer), short answer (1-3 sentence responses), and true/false questions. You can pick one type or get a mix of all three." },
  { q: "Can I control the difficulty?", a: "Yes. Choose Easy (basic recall), Medium (understanding and application), or Hard (critical thinking and analysis). You can also pick how many questions to generate (5, 10, 15, or 20)." },
  { q: "What types of documents work best?", a: "Textbooks, research papers, study guides, training manuals, course materials, and any educational or informational PDF. For scanned PDFs, run OCR first." },
  { q: "What plan do I need?", a: "AI Question Generator is a Pro plan feature at $7.99/month. It includes all Pro tools like PDF conversions, OCR, resume tools, and more." },
  { q: "Can I copy the questions?", a: "Yes. Use the Copy All button to copy all questions with answers and explanations to your clipboard, ready to paste into a document or quiz tool." },
]

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map((faq) => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) }

export default function QuestionGeneratorPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Header />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><HelpCircle className="h-10 w-10 text-[#14D8C4]" /></div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">AI Question Generator</h1>
              <p className="text-xl text-slate-300 mb-8">Upload any PDF and instantly generate study questions with answers. Multiple choice, short answer, and true/false — with adjustable difficulty.</p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><HelpCircle className="h-4 w-4 text-[#14D8C4]" /><span>3 Question Types</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Adjustable Difficulty</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Secure & Private</span></div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">Turn any PDF into a study guide in seconds. Upload your textbook chapter, research paper, or training manual and our AI generates questions at your chosen difficulty — perfect for exam prep, classroom quizzes, and corporate training.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Multiple choice, short answer, and true/false</li>
              <li className="flex items-center gap-2">✓ Easy, medium, or hard difficulty</li>
              <li className="flex items-center gap-2">✓ 5 to 20 questions per document</li>
              <li className="flex items-center gap-2">✓ Copy all questions with one click</li>
            </ul>
          </div>
        </section>
        <QuestionGeneratorInterface />
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Students & Exam Prep", desc: "Turn textbook chapters into practice quizzes. Test yourself before the exam with questions generated from your actual study material." },
                { title: "Teachers & Professors", desc: "Create quiz and exam questions from any reading material in seconds. Adjust difficulty for different class levels." },
                { title: "Corporate Training", desc: "Generate assessment questions from training manuals, compliance documents, and onboarding materials. Verify employee comprehension." },
              ].map((feature) => (
                <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">How to Generate Questions</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[{ num: "1", title: "Upload your PDF", desc: "Drag and drop or click to choose" }, { num: "2", title: "Choose options", desc: "Type, count, and difficulty" }, { num: "3", title: "Get your questions", desc: "Review, reveal answers, and copy" }].map((step) => (
                <div key={step.num} className="flex-1">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[{ name: "Chat with PDF", href: "/chat-with-pdf", desc: "Ask questions about PDFs" }, { name: "PDF Summarizer", href: "/pdf-summarizer", desc: "Summarize long documents" }, { name: "PDF to TXT", href: "/pdf-to-txt", desc: "Extract raw text" }, { name: "OCR Scanner", href: "/ocr-scanner", desc: "Make scanned PDFs searchable" }].map((tool) => (
                <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3><p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p></div>))}
            </div>
          </div>
        </section>
        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </main>
      <Footer />
    </div>
  )
}

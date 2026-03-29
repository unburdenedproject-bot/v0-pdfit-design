import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { QuestionGeneratorInterface } from "@/components/question-generator-interface"
import { HelpCircle, Zap, Shield } from "lucide-react"

export const metadata = {
  title: "Generador de Preguntas con IA — Crea Preguntas de Estudio de Cualquier PDF | PDF.it",
  description: "Sube cualquier PDF y genera preguntas de estudio al instante. Opción múltiple, respuesta corta y verdadero/falso. Elige dificultad y cantidad. Perfecto para estudiantes y profesores. Función del plan Pro.",
  alternates: { canonical: "https://pdf.it.com/es/generador-preguntas", languages: { "en": "https://pdf.it.com/question-generator", "es": "https://pdf.it.com/es/generador-preguntas", "pt-BR": "https://pdf.it.com/br/gerador-perguntas" } },
}

const faqs = [
  { q: "¿Qué es el Generador de Preguntas con IA?", a: "El Generador de Preguntas lee tu documento PDF y crea automáticamente preguntas de estudio con respuestas y explicaciones. Elige entre opción múltiple, respuesta corta, verdadero/falso o una mezcla de todos." },
  { q: "¿Qué tipos de preguntas puede generar?", a: "Opción múltiple (4 opciones con una respuesta correcta), respuesta corta (respuestas de 1-3 oraciones) y preguntas de verdadero/falso. Puedes elegir un tipo o una mezcla de los tres." },
  { q: "¿Puedo controlar la dificultad?", a: "Sí. Elige Fácil (recuerdo básico), Medio (comprensión y aplicación) o Difícil (pensamiento crítico y análisis). También puedes elegir cuántas preguntas generar (5, 10, 15 o 20)." },
  { q: "¿Qué tipos de documentos funcionan mejor?", a: "Libros de texto, documentos de investigación, guías de estudio, manuales de capacitación, materiales de curso y cualquier PDF educativo o informativo." },
  { q: "¿Qué plan necesito?", a: "El Generador de Preguntas es una función del plan Pro a $7.99/mes. Incluye todas las herramientas Pro como conversiones PDF, OCR, herramientas de currículum y más." },
  { q: "¿Puedo copiar las preguntas?", a: "Sí. Usa el botón Copiar todo para copiar todas las preguntas con respuestas y explicaciones al portapapeles." },
]

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map((faq) => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) }

export default function GeneradorPreguntasPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><HelpCircle className="h-10 w-10 text-[#14D8C4]" /></div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Generador de Preguntas con IA</h1>
              <p className="text-xl text-slate-300 mb-8">Sube cualquier PDF y genera preguntas de estudio al instante con respuestas. Opción múltiple, respuesta corta y verdadero/falso — con dificultad ajustable.</p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><HelpCircle className="h-4 w-4 text-[#14D8C4]" /><span>3 Tipos de Preguntas</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Dificultad Ajustable</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Seguro y Privado</span></div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">Convierte cualquier PDF en una guía de estudio en segundos. Sube tu capítulo de libro, documento de investigación o manual de capacitación y nuestra IA genera preguntas a la dificultad que elijas — perfecto para preparación de exámenes, cuestionarios y capacitación.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Opción múltiple, respuesta corta y verdadero/falso</li>
              <li className="flex items-center gap-2">✓ Dificultad fácil, media o difícil</li>
              <li className="flex items-center gap-2">✓ De 5 a 20 preguntas por documento</li>
              <li className="flex items-center gap-2">✓ Copia todas las preguntas con un clic</li>
            </ul>
          </div>
        </section>
        <QuestionGeneratorInterface />
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Estudiantes y Preparación de Exámenes", desc: "Convierte capítulos de libros en cuestionarios de práctica. Evalúate antes del examen con preguntas generadas de tu material de estudio." },
                { title: "Profesores y Catedráticos", desc: "Crea preguntas de cuestionario y examen de cualquier material de lectura en segundos. Ajusta la dificultad para diferentes niveles." },
                { title: "Capacitación Corporativa", desc: "Genera preguntas de evaluación de manuales de capacitación, documentos de cumplimiento y materiales de inducción." },
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
        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Cómo Generar Preguntas</h2><div className="flex flex-col sm:flex-row gap-6 justify-center text-center">{[{ num: "1", title: "Sube tu PDF", desc: "Arrastra y suelta o haz clic" }, { num: "2", title: "Elige opciones", desc: "Tipo, cantidad y dificultad" }, { num: "3", title: "Obtén tus preguntas", desc: "Revisa, revela respuestas y copia" }].map((step) => (<div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>))}</div></div></section>
        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-4">{[{ name: "Chat con PDF", href: "/es/chat-con-pdf", desc: "Preguntas sobre PDFs" }, { name: "Resumidor de PDF", href: "/es/resumidor-pdf", desc: "Resumir documentos" }, { name: "PDF a Texto", href: "/es/pdf-a-texto", desc: "Extraer texto" }, { name: "Escáner OCR", href: "/es/escaner-ocr", desc: "Hacer PDFs buscables" }].map((tool) => (<div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div><div className="text-xs text-slate-400">{tool.desc}</div></Link></div>))}</div></div></section>
        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-white mb-10 text-center">Preguntas Frecuentes</h2><div className="space-y-4">{faqs.map((faq, i) => (<div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3><p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p></div>))}</div></div></section>
        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </main>
      <FooterEs />
    </div>
  )
}

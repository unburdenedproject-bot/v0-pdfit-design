import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Type, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extraer Texto de PDF Online — Copia Texto de Cualquier PDF | PDF.it",
  description: "Extrae texto de archivos PDF con PDF.it. Extrae texto plano de cualquier PDF para copiar, editar y reutilizar — rápido, gratis y en tu navegador.",
  alternates: { canonical: "https://www.pdf.it.com/es/extraer-texto-de-pdf", languages: { en: "/extract-text-from-pdf", es: "/es/extraer-texto-de-pdf" } },
}

export default function ExtraerTextoDePDFPage() {
  const faqs = [
    {
        "q": "¿Cómo extraigo texto de un PDF?",
        "a": "Sube tu PDF a PDF.it, haz clic en Extraer y descarga un archivo de texto plano que contiene todo el texto de tu PDF. Luego puedes copiar, editar o pegar en cualquier lugar."
    },
    {
        "q": "¿Extraer texto preserva el formato original?",
        "a": "PDF.it extrae el contenido de texto sin formato de tu PDF. La estructura básica de párrafos se preserva, pero formato complejo como tablas, columnas y fuentes puede no transferirse al resultado de texto plano."
    },
    {
        "q": "¿Puedo extraer texto de un PDF escaneado?",
        "a": "Los PDFs escaneados contienen imágenes en lugar de texto selecciónable. Para extraer texto de escaneos, usa la herramienta Escáner OCR de PDF.it, que usa reconocimiento óptico de caracteres para leer texto de imágenes."
    },
    {
        "q": "¿Qué idiomas son soportados para extracción de texto?",
        "a": "PDF.it puede extraer texto de PDFs en cualquier idioma, incluyendo español, inglés, francés, alemán, chino, japonés, árabe y más — siempre que el PDF contenga texto selecciónable."
    },
    {
        "q": "¿Puedo extraer texto de un PDF desde mi celular?",
        "a": "Sí. PDF.it funciona en navegadores móviles — sube tu PDF, extrae el texto y descarga o copia en iPhone o Android."
    },
    {
        "q": "¿Es gratis extraer texto de un PDF?",
        "a": "Sí. Las cuentas gratuitas obtienen 10 extracciones por día. Las cuentas Pro obtienen extracciones ilimitadas sin límites diarios."
    }
]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        {/* Hero */}
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Type className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Extraer Texto de PDF</h1>
            <p className="text-xl text-slate-300 mb-8">Extrae texto plano de cualquier PDF para copiar, editar y reutilizar. Perfecto para investigación, captura de datos y reutilización de contenido — instantáneo y en tu navegador.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Extracción de Texto Instantánea</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Registro</span></div>
            </div>
          </div></div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">¿Necesitas el texto de un PDF sin el diseño, imágenes ni formato? PDF.it extrae todo el texto selecciónable de tu PDF y lo entrega como un archivo de texto plano limpio que puedes copiar, editar o pegar en cualquier lugar.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Extrae todo el texto selecciónable de cualquier PDF</li>
            <li className="flex items-center gap-2">✓ Resultado como un archivo de texto plano limpio</li>
            <li className="flex items-center gap-2">✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
            <li className="flex items-center gap-2">✓ Sin instalación — extrae texto en tu navegador</li>
          </ul>
        </div></section>

        <ProcessingInterface acceptedFiles=".pdf" toolName="PDF to TXT" outputFormat="TXT" processingMessage="Extrayendo texto de tu PDF..." successMessage="¡Tu archivo de texto está listo!" />

        {/* Feature Blocks */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Extrae Texto para Investigación y Estudio", desc: "¿Trabajas con papers académicos o documentos de referencia? Extrae el texto para citar pasajes, tomar notas o compilar investigación sin volver a escribir." },
              { title: "Extrae Contenido para Emails y Mensajes", desc: "¿Necesitas compartir contenido específico de un PDF en un email o chat? Extrae el texto, copia las secciones relevantes y pégalas directamente." },
              { title: "Copia Texto de Contratos y Documentos Legales", desc: "Extrae texto de contratos, acuerdos y PDFs legales para revisar cláusulas, comparar términos o reutilizar lenguaje en nuevos documentos." },
            ].map((feature) => (
              <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                <div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div></div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Cómo Extraer Texto de un PDF</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
            {[
              { num: "1", title: "Sube tu PDF", desc: "Arrastra y suelta o haz clic para elegir un archivo" },
              { num: "2", title: "Haz clic en Extraer Texto", desc: "Todo el texto selecciónable se extrae automáticamente" },
              { num: "3", title: "Descarga tu texto", desc: "Obtén el archivo de texto plano o copia directamente" },
            ].map((step) => (
              <div key={step.num} className="flex-1">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div>
                <p className="font-semibold text-slate-900">{step.title}</p>
                <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div></section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: "PDF a TXT", href: "/es/pdf-a-txt", desc: "Convierte PDF a archivo de texto" },
              { name: "Escáner OCR", href: "/es/escaner-ocr", desc: "Extrae texto de escaneos" },
              { name: "PDF a Word", href: "/es/pdf-a-word", desc: "Convierte PDF a Word" },
              { name: "Extraer Imágenes", href: "/es/extraer-imágenes-de-pdf", desc: "Extrae imágenes de PDFs" },
            ].map((tool) => (
              <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                <Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                  <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-400">{tool.desc}</div>
                </Link>
              </div>
            ))}
          </div>
        </div></section>

        {/* FAQ */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) })}} />
      </main>
      <FooterEs />
    </div>
  )
}

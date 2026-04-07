import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { Link2, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extraer Enlaces de PDF — Encuentra Todas las URLs en un PDF | PDF.it",
  description: "Encuentra y extrae todos los hipervínculos y URLs de documentos PDF. PDF.it te ayuda a extraer contenido de texto incluyendo enlaces incrustados de cualquier PDF.",
  alternates: { canonical: "https://www.pdf.it.com/es/extraer-enlaces-de-pdf", languages: { en: "/extract-links-from-pdf", es: "/es/extraer-enlaces-de-pdf" } },
}

export default function ExtraerEnlacesDePDFPage() {
  const faqs = [
    {
        "q": "¿Cómo extraigo enlaces de un PDF?",
        "a": "Convierte tu PDF a texto usando la herramienta PDF a TXT de PDF.it. El texto extraído contendrá todas las URLs visibles del documento. Luego puedes buscar en el texto patrones http://, https:// o www. para encontrar cada enlace."
    },
    {
        "q": "¿Puedo extraer hipervínculos ocultos detrás de texto?",
        "a": "Los hipervínculos clickeables incrustados detrás de texto ancla (como \"haz clic aquí\") requieren examinar las anotaciones de enlace del PDF. Convertir a formato Word preserva estos hipervínculos, permitiéndote ver y hacer clic en las URLs reales detrás del texto."
    },
    {
        "q": "¿Cómo extraigo enlaces de un PDF escaneado?",
        "a": "Los PDFs escaneados son imágenes, así que los enlaces no son clickeables ni están incrustados como texto. Usa el Escáner OCR de PDF.it primero para convertir las páginas escaneadas a texto seleccionable, luego extrae el texto para encontrar URLs impresas."
    },
    {
        "q": "¿Puedo extraer todos los enlaces de un PDF a la vez?",
        "a": "Sí. Convierte todo el PDF a texto, luego busca patrones de URL. Esto captura todas las URLs visibles en un solo paso. Para hipervínculos detrás de texto ancla, convierte primero a Word."
    },
    {
        "q": "¿Por qué necesitaría extraer enlaces de un PDF?",
        "a": "Razones comunes incluyen auditar referencias en papers de investigación, verificar enlaces rotos en documentación, compilar listas de recursos de reportes, verificar citas y migrar contenido de PDFs a sitios web o bases de datos."
    },
    {
        "q": "¿Qué tipos de enlaces se pueden encontrar en PDFs?",
        "a": "Los PDFs pueden contener texto de URL visible, hipervínculos clickeables detrás de texto ancla, enlaces mailto de email, enlaces internos del documento y enlaces a archivos externos. El método de extracción depende del tipo de enlace."
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
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Link2 className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Extraer Enlaces de PDF</h1>
            <p className="text-xl text-slate-300 mb-8">Encuentra y extrae todos los hipervínculos y URLs incrustados en documentos PDF. Extrae cada referencia, cita y enlace de recurso de papers de investigación, reportes y documentación.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Encuentra Todas las URLs al Instante</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Instalación</span></div>
            </div>
          </div></div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">Los PDFs a menudo contienen docenas o incluso cientos de enlaces — referencias en papers académicos, URLs de recursos en reportes e hipervínculos en documentación. Extraer estos enlaces manualmente es tedioso. PDF.it te ayuda a extraer todo el contenido de texto de PDFs, facilitando encontrar y compilar cada URL en tu documento.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Extrae URLs visibles impresas en texto de PDF</li>
            <li className="flex items-center gap-2">✓ Convierte a Word para preservar hipervínculos clickeables</li>
            <li className="flex items-center gap-2">✓ Usa OCR para documentos escaneados con URLs impresas</li>
            <li className="flex items-center gap-2">✓ Sin instalación — extrae enlaces en tu navegador</li>
          </ul>
        </div></section>

        <section className="py-12 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center"><h2 className="text-2xl font-black text-slate-900 mb-4">Extrae Contenido de PDFs</h2><p className="text-slate-600 mb-6">Convierte tu PDF a texto para encontrar todas las URLs y enlaces incrustados en el documento. Funciona con cualquier PDF que contenga texto seleccionable.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/es/pdf-a-txt" className="inline-flex items-center justify-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">PDF a TXT (Gratis)</Link><Link href="/es/extraer-texto-de-pdf" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors">Extraer Texto</Link></div></div></section>

        {/* Feature Blocks */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Encuentra URLs en Papers de Investigación", desc: "Los papers académicos y reportes están llenos de referencias. Convierte el PDF a texto y busca todas las URLs a la vez — perfecto para revisiones bibliográficas y verificación de hechos." },
              { title: "Extrae Referencias y Citas", desc: "Muchos PDFs incluyen secciones de bibliografía con URLs a obras citadas. Extrae el texto completo para compilar rápidamente una lista de todos los enlaces referenciados para verificación." },
              { title: "Audita Enlaces del Documento", desc: "Antes de publicar o distribuir un PDF, verifica que todos los enlaces sean correctos y estén activos. Extrae cada URL, luego verifica cada uno por enlaces rotos o referencias desactualizadas." },
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
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Cómo Extraer Enlaces de un PDF</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
            {[
              { num: "1", title: "Sube tu PDF", desc: "Usa el convertidor PDF a TXT de PDF.it" },
              { num: "2", title: "Descarga el texto", desc: "Obtén el texto extraído con todo el contenido del documento" },
              { num: "3", title: "Busca las URLs", desc: "Encuentra patrones http://, https://, www." },
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
              { name: "PDF a TXT", href: "/es/pdf-a-txt", desc: "Extrae todo el contenido de texto" },
              { name: "Extraer Texto", href: "/es/extraer-texto-de-pdf", desc: "Extrae texto de PDFs" },
              { name: "Escáner OCR", href: "/es/escaner-ocr", desc: "Texto de PDFs escaneados" },
              { name: "PDF a Word", href: "/es/pdf-a-word", desc: "Preserva hipervínculos" },
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

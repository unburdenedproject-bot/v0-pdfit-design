import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { FileSpreadsheet, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extraer Datos de PDF — Extrae Información de Archivos PDF | PDF.it",
  description: "Extrae datos de archivos PDF con PDF.it. Extrae texto, tablas, imágenes y datos estructurados de PDFs para análisis, edición y reutilización.",
  alternates: { canonical: "https://www.pdf.it.com/es/extraer-datos-de-pdf", languages: { en: "/extract-data-from-pdf", es: "/es/extraer-datos-de-pdf" } },
}

export default function ExtraerDatosDePDFPage() {
  const faqs = [
    {
        "q": "¿Qué tipos de datos puedo extraer de un PDF?",
        "a": "Puedes extraer contenido de texto, datos tabulares (tablas y hojas de cálculo), imágenes incrustadas y metadatos de PDFs. PDF.it ofrece herramientas especializadas para cada uno: PDF a TXT para texto, PDF a Excel para tablas, Extraer Imágenes para gráficos, y Escáner OCR para documentos escaneados."
    },
    {
        "q": "¿Cómo extraigo tablas de un PDF a Excel?",
        "a": "Usa el convertidor PDF a Excel de PDF.it. Sube tu PDF y la herramienta detectará las estructuras de tablas y las convertirá a formato de hoja de cálculo Excel con filas y columnas preservadas."
    },
    {
        "q": "¿Puedo extraer datos de un PDF escaneado?",
        "a": "Sí, pero los PDFs escaneados requieren OCR primero. Usa el Escáner OCR de PDF.it para convertir páginas escaneadas en texto seleccionable y buscable. Luego usa la herramienta de extracción apropiada."
    },
    {
        "q": "¿Cuál es la diferencia entre un PDF digital y un PDF escaneado?",
        "a": "Un PDF digital fue creado desde una aplicación de computadora y contiene texto y datos reales que se pueden seleccionar y extraer directamente. Un PDF escaneado es esencialmente una fotografía de un documento — contiene solo datos de imagen y requiere OCR para extraer texto."
    },
    {
        "q": "¿Puedo extraer datos de PDFs protegidos con contraseña?",
        "a": "Si conoces la contraseña, usa la herramienta Desbloquear PDF de PDF.it primero para eliminar la protección, luego extrae datos normalmente."
    },
    {
        "q": "¿Cómo extraigo datos de múltiples PDFs a la vez?",
        "a": "PDF.it Pro soporta procesamiento por lotes. Sube múltiples PDFs y procésalos simultáneamente para extracción de texto, conversión o extracción de imágenes. Los resultados se entregan como archivo ZIP."
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
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><FileSpreadsheet className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Extraer Datos de PDF</h1>
            <p className="text-xl text-slate-300 mb-8">Extrae texto, tablas, imágenes y datos estructurados de cualquier PDF. Ya sea que necesites cifras financieras, datos de investigación o contenido de documentos, PDF.it tiene la herramienta de extracción adecuada.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Múltiples Herramientas de Extracción</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Procesamiento en el Navegador</span></div>
            </div>
          </div></div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">Los PDFs están diseñados para visualización, no para edición — lo que hace que extraer datos de ellos sea un desafío común. Ya sea que estés extrayendo datos financieros de reportes anuales, hallazgos de investigación de papers académicos, o convirtiendo datos tabulares para análisis, PDF.it proporciona herramientas especializadas para cada escenario de extracción.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Extrae texto plano de cualquier PDF digital</li>
            <li className="flex items-center gap-2">✓ Convierte tablas de PDF a hojas de cálculo Excel</li>
            <li className="flex items-center gap-2">✓ Extrae imágenes incrustadas de documentos</li>
            <li className="flex items-center gap-2">✓ OCR para documentos escaneados y fotografiados</li>
          </ul>
        </div></section>

        <section className="py-12 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center"><h2 className="text-2xl font-black text-slate-900 mb-4">Elige tu Herramienta de Extracción</h2><p className="text-slate-600 mb-8">PDF.it ofrece múltiples formas de extraer datos de PDFs:</p><div className="grid grid-cols-2 gap-4 max-w-md mx-auto"><Link href="/es/pdf-a-txt" className="inline-flex items-center justify-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-6 rounded-xl transition-colors text-sm">Extraer Texto</Link><Link href="/es/pdf-a-excel" className="inline-flex items-center justify-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-6 rounded-xl transition-colors text-sm">Extraer Tablas</Link><Link href="/es/extraer-imagenes-de-pdf" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-xl transition-colors text-sm">Extraer Imágenes</Link><Link href="/es/escaner-ocr" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-xl transition-colors text-sm">Escáner OCR</Link></div></div></section>

        {/* Feature Blocks */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Extrae Datos Financieros de Reportes", desc: "Los reportes anuales y estados financieros son casi siempre PDFs. PDF.it detecta estructuras de tablas y preserva filas, columnas y datos numéricos para análisis en hojas de cálculo." },
              { title: "Extrae Datos de Investigación de Papers", desc: "Convierte PDFs a texto para análisis de contenido, extrae tablas a Excel para revisión estadística, o extrae imágenes para presentaciones y revisiones bibliográficas." },
              { title: "Extrae Contenido de Cualquier Documento", desc: "Desde contratos legales hasta catálogos de productos, facturas hasta manuales técnicos — cualquier información encerrada en un PDF puede ser extraída usando la herramienta correcta." },
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
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Cómo Extraer Datos de un PDF</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
            {[
              { num: "1", title: "Elige la herramienta correcta", desc: "Texto, Tablas, Imágenes u OCR para escaneos" },
              { num: "2", title: "Sube tu PDF", desc: "Arrastra y suelta o haz clic para elegir un archivo" },
              { num: "3", title: "Descarga tus datos", desc: "Obtén los datos extraídos en tu formato preferido" },
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
              { name: "PDF a TXT", href: "/es/pdf-a-txt", desc: "Extrae contenido de texto" },
              { name: "PDF a Excel", href: "/es/pdf-a-excel", desc: "Extrae tablas y datos" },
              { name: "Extraer Imágenes", href: "/es/extraer-imagenes-de-pdf", desc: "Extrae imágenes incrustadas" },
              { name: "Escáner OCR", href: "/es/escaner-ocr", desc: "Texto de PDFs escaneados" },
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

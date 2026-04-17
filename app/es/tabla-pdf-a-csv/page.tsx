import type { Metadata } from "next"
import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { FileSpreadsheet, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Tabla PDF a CSV — Exporta Tablas PDF como Archivos CSV | PDF.it",
  description: "Exporta tablas de PDFs como archivos CSV con PDF.it. Extrae datos estructurados para usar en Excel, Google Sheets, bases de datos y herramientas de análisis.",
  alternates: {
    canonical: "https://www.pdf.it.com/es/tabla-pdf-a-csv",
    languages: { "en": "https://www.pdf.it.com/pdf-table-to-csv", "es": "https://www.pdf.it.com/es/tabla-pdf-a-csv", "pt-BR": "https://www.pdf.it.com/br/tabela-pdf-para-csv" },
  },
}

export default function TablaPDFACSVPage() {
  const faqs = [
    {
        "q": "Cual es la diferencia entre CSV y Excel para exportar tablas?",
        "a": "CSV es un formato de texto plano con valores separados por comas — funciona en todas partes, incluyendo bases de datos, scripts y pipelines de datos. Excel (.xlsx) preserva formato, formulas y múltiples hojas. Usa CSV cuando necesites máxima compatibilidad."
    },
    {
        "q": "Como obtengo un CSV de una tabla PDF?",
        "a": "Sube tu PDF a la herramienta PDF a Excel de PDF.it para extraer los datos, luego abre el archivo Excel y guardalo como CSV. O usa la herramienta de Extracción de Tablas del plan Business."
    },
    {
        "q": "Se preservaran caracteres especiales y codificacion en el CSV?",
        "a": "Si. PDF.it exporta datos en codificacion UTF-8, que soporta caracteres acentuados, simbolos de moneda y texto internacional."
    },
    {
        "q": "Puedo extraer tablas grandes con cientos de filas?",
        "a": "Si. PDF.it maneja tablas de cualquier tamaño. Los usuarios Pro pueden procesar archivos de hasta 200MB, y los usuarios Business obtienen procesamiento prioritario."
    },
    {
        "q": "Puedo usar archivos CSV para importaciones de bases de datos?",
        "a": "Absolutamente. CSV es el formato más ampliamente soportado para importaciones de bases de datos. Extrae tus tablas PDF, guarda como CSV e importa directamente."
    },
    {
        "q": "Puedo elegir un delimitador diferente en lugar de comas?",
        "a": "La exportación estándar usa comas como delimitadores. Si necesitas punto y coma, tabulaciones u otros delimitadores, exporta a Excel primero, luego usa Excel o Google Sheets para guardar como CSV con tu configuración preferida."
    }
]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><FileSpreadsheet className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Tabla PDF a CSV</h1>
            <p className="text-xl text-slate-300 mb-8">Exporta tablas de archivos PDF como CSV para usar en Excel, Google Sheets, bases de datos y herramientas de análisis. El formato más portable para tus datos extraidos.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Compatibilidad Universal</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Exportación de Datos Limpia</span></div>
            </div>
          </div></div>
        </section>

        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">CSV es el formato universal para datos. Cuando necesitas importar datos de tablas PDF a una base de datos, alimentar un script o cargarlos en Google Sheets, CSV es el camino. PDF.it te ayuda a extraer tablas de PDFs y obtenerlas en formato CSV para cualquier flujo de trabajo.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Exporta datos de tablas en formato limpio separado por comas</li>
            <li className="flex items-center gap-2">✓ Compatible con Excel, Google Sheets y bases de datos</li>
            <li className="flex items-center gap-2">✓ Codificacion UTF-8 para caracteres internacionales</li>
            <li className="flex items-center gap-2">✓ Sin instalación — procesa todo en tu navegador</li>
          </ul>
        </div></section>

        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center"><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/es/pdf-a-excel" className="inline-flex items-center justify-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors shadow-lg">PDF a Excel (Pro)</Link><Link href="/es/extraccion-tablas" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg">Extracción de Tablas (Business)</Link></div><p className="text-sm text-slate-500 mt-3">Convierte a Excel primero, luego guarda como CSV desde tu app de hojas de cálculo</p></div></section>

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "CSV para Análisis de Datos", desc: "Analistas y cientificos de datos trabajan con CSV todos los días. Extrae tablas de informes PDF y cargalas directamente en Python, R o tu herramienta de análisis favorita." },
            { title: "Importar a Bases de Datos", desc: "Necesitas llevar datos de tablas PDF a MySQL, PostgreSQL o MongoDB? CSV es el formato estándar de importación para practicamente cualquier base de datos." },
            { title: "Automatización y Scripting", desc: "Automatiza tu pipeline de datos convirtiendo tablas PDF a CSV. Alimenta la salida en hojas de cálculo, sistemas CRM, procesos ETL o cualquier herramienta que acepte texto estructurado." },
          ].map((feature) => (<div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>))}
        </div></div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Exportar una Tabla PDF como CSV</h2><div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
          {[{ num: "1", title: "Convierte PDF a Excel", desc: "Sube tu PDF al convertidor de PDF.it" },{ num: "2", title: "Descarga el archivo XLSX", desc: "Obtiene los datos de tabla extraidos como Excel" },{ num: "3", title: "Guarda como CSV", desc: "Abre en Excel o Sheets y guarda como .csv" }].map((step) => (<div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>))}
        </div></div></section>

        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ name: "PDF a Excel", href: "/es/pdf-a-excel", desc: "Conversión completa PDF a Excel" },{ name: "Extracción de Tablas", href: "/es/extraccion-tablas", desc: "Exportación avanzada de datos" },{ name: "Extraer Tablas", href: "/es/extraer-tablas-pdf", desc: "Extrae tablas de PDFs" },{ name: "Tabla PDF a Excel", href: "/es/tabla-pdf-a-excel", desc: "Tablas a hojas de cálculo" }].map((tool) => (<div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div><div className="text-xs text-slate-400">{tool.desc}</div></Link></div>))}
        </div></div></section>

        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-white mb-10 text-center">Preguntas Frecuentes</h2><div className="space-y-4">
          {faqs.map((faq, i) => (<div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3><p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p></div>))}
        </div></div></section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) })}} />
      </main>
      <FooterEs />
    </div>
  )
}

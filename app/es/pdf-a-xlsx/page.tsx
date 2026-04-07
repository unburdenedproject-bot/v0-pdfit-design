import type { Metadata } from "next"
import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileSpreadsheet, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "PDF a XLSX — Convierte PDF a Hoja de Calculo Excel | PDF.it",
  description: "Convierte PDF a XLSX en linea con PDF.it. Extrae tablas, datos financieros e informes de PDF a hojas de calculo Excel editables. Rapido, preciso, sin instalacion.",
  alternates: {
    canonical: "https://www.pdf.it.com/es/pdf-a-xlsx",
    languages: { "en": "https://www.pdf.it.com/pdf-to-xlsx", "es": "https://www.pdf.it.com/es/pdf-a-xlsx", "pt-BR": "https://www.pdf.it.com/br/pdf-para-xlsx" },
  },
}

export default function PDFAXlsxPage() {
  const faqs = [
    {
        "q": "Cual es la diferencia entre XLSX y XLS?",
        "a": "XLSX es el formato moderno de Excel introducido con Microsoft Office 2007. Soporta hojas mas grandes, mejor compresion y mayor compatibilidad comparado con el viejo formato XLS. PDF.it convierte PDFs directamente a XLSX."
    },
    {
        "q": "Como convierto un PDF a XLSX?",
        "a": "Sube tu PDF a PDF.it, haz clic en Convertir y descarga tu archivo XLSX. La herramienta detecta tablas y extrae los datos en columnas y filas estructuradas de Excel."
    },
    {
        "q": "Mis tablas PDF se convertiran con precision?",
        "a": "PDF.it detecta estructuras de tablas y las mapea a filas y columnas de Excel. Las tablas simples y bien estructuradas se convierten con alta precision. Disenos complejos con celdas combinadas pueden requerir ajustes menores."
    },
    {
        "q": "Puedo convertir un PDF escaneado a XLSX?",
        "a": "Los PDFs escaneados contienen imagenes en lugar de datos estructurados. Para mejores resultados, usa primero el Escaner OCR de PDF.it para extraer texto, luego convierte el resultado."
    },
    {
        "q": "El convertidor de PDF a XLSX es gratis?",
        "a": "La conversion de PDF a XLSX esta disponible para suscriptores Pro y Business. Las cuentas gratuitas pueden usar herramientas basicas de PDF, mientras que Pro desbloquea conversiones avanzadas."
    },
    {
        "q": "Puedo convertir multiples PDFs a XLSX a la vez?",
        "a": "Si. Las cuentas Pro y Business soportan procesamiento por lotes — sube multiples PDFs y conviertelos todos a XLSX en una sola sesion."
    }
]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><FileSpreadsheet className="h-10 w-10 text-[#14D8C4]" /></div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PDF a XLSX</h1>
              <p className="text-xl text-slate-300 mb-8">Extrae tablas y datos de cualquier PDF a una hoja de calculo Excel XLSX editable. Deteccion precisa de columnas, descarga instantanea.</p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Deteccion Inteligente de Tablas</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesion</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Extraccion Precisa</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">XLSX es el formato moderno de hojas de calculo Excel usado por Microsoft Excel, Google Sheets y LibreOffice Calc. Cuando recibes informes financieros, facturas o tablas de datos como PDFs, convertirlos a XLSX te permite ordenar, filtrar, calcular y analizar los datos — en lugar de escribir todo manualmente.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Extrae tablas de PDF a formato XLSX editable</li>
              <li className="flex items-center gap-2">✓ Deteccion inteligente de columnas, filas y encabezados</li>
              <li className="flex items-center gap-2">✓ Abre en Excel, Google Sheets y LibreOffice</li>
              <li className="flex items-center gap-2">✓ Sin instalacion — convierte PDFs en tu navegador</li>
            </ul>
          </div>
        </section>

        <ProcessingInterface acceptedFiles=".pdf" toolName="PDF to Excel" outputFormat="XLSX" processingMessage="Convirtiendo tu PDF a XLSX..." successMessage="Tu archivo XLSX esta listo!" />

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Extrae Datos Financieros", desc: "Estados de cuenta, informes trimestrales y resumenes financieros llegan como PDFs. Convierte a XLSX para ejecutar formulas, crear graficos y analizar tendencias en Excel o Google Sheets." },
              { title: "Convierte Facturas a Hojas de Calculo", desc: "Recibes facturas en formato PDF? Convierte a XLSX para extraer lineas de detalle, calcular totales e importar datos a tu software contable o sistema ERP." },
              { title: "Analiza Informes y Tablas de Datos", desc: "Datos de investigacion, catalogos de productos y tablas de precios atrapados en PDFs se vuelven utiles al estar en Excel. Ordena, filtra, crea tablas dinamicas y graficos sin entrada manual." },
            ].map((feature) => (<div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>))}
          </div></div>
        </section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Convertir PDF a XLSX</h2><div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
          {[{ num: "1", title: "Sube tu PDF", desc: "Arrastra y suelta o haz clic para elegir" },{ num: "2", title: "Haz clic en Convertir", desc: "Las tablas se detectan y extraen automaticamente" },{ num: "3", title: "Descarga tu XLSX", desc: "Abre en Excel, Google Sheets o cualquier app" }].map((step) => (<div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>))}
        </div></div></section>

        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ name: "PDF a Excel", href: "/es/pdf-a-excel", desc: "Convierte PDF a hoja de calculo" },{ name: "PDF a Word", href: "/es/pdf-a-word", desc: "Convierte PDF a Word DOC" },{ name: "Escaner OCR", href: "/es/ocr-pdf", desc: "Extrae texto de escaneos" },{ name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamano del PDF" }].map((tool) => (<div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div><div className="text-xs text-slate-400">{tool.desc}</div></Link></div>))}
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

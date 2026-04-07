import type { Metadata } from "next"
import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { FileSpreadsheet, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "PDF a Google Sheets — Abre Tablas PDF en Google Sheets | PDF.it",
  description: "Aprende como convertir tablas PDF a Google Sheets. Convierte PDF a Excel con PDF.it, sube a Google Drive y abre en Google Sheets para editar y analizar.",
  alternates: {
    canonical: "https://www.pdf.it.com/es/pdf-a-google-sheets",
    languages: { "en": "https://www.pdf.it.com/pdf-to-google-sheets", "es": "https://www.pdf.it.com/es/pdf-a-google-sheets", "pt-BR": "https://www.pdf.it.com/br/pdf-para-google-sheets" },
  },
}

export default function PDFAGoogleSheetsPage() {
  const faqs = [
    {
        "q": "Puedo abrir un PDF directamente en Google Sheets?",
        "a": "No. Google Sheets no puede abrir archivos PDF directamente. El mejor enfoque es convertir el PDF a un archivo Excel XLSX primero usando PDF.it, luego subir el XLSX a Google Drive y abrirlo con Google Sheets."
    },
    {
        "q": "Por que deberia convertir a XLSX antes de subir a Google Sheets?",
        "a": "Google Sheets soporta nativamente archivos XLSX y preserva la estructura de celdas, formulas y formato. El convertidor de PDF.it detecta estructuras de tablas y las mapea a filas y columnas limpias."
    },
    {
        "q": "Mis tablas PDF se extraeran con precision?",
        "a": "PDF.it detecta estructuras de tablas en tu PDF y las convierte a filas y columnas de Excel. Las tablas bien estructuradas con bordes claros se convierten con alta precision. Disenos complejos con celdas combinadas pueden necesitar ajustes menores."
    },
    {
        "q": "Este metodo es gratis?",
        "a": "La conversion de PDF a Excel en PDF.it esta disponible para suscriptores Pro y Business. Una vez que tengas el archivo XLSX, subirlo a Google Drive y abrirlo en Google Sheets es completamente gratis."
    },
    {
        "q": "Puedo usar formulas y graficos despues de importar?",
        "a": "Si. Una vez que el XLSX se abre en Google Sheets, tienes acceso completo a formulas, tablas dinamicas, graficos, formato condicional y todas las demas funciones de Google Sheets."
    },
    {
        "q": "Puedo compartir la hoja de calculo con mi equipo?",
        "a": "Si. Una vez en Google Sheets, puedes compartir la hoja con cualquier persona, establecer permisos (ver, comentar o editar) y colaborar en tiempo real."
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PDF a Google Sheets</h1>
              <p className="text-xl text-slate-300 mb-8">Extrae tablas y datos de cualquier PDF a Google Sheets. Convierte a Excel primero con PDF.it, luego sube a Google Drive para analisis y colaboracion.</p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Deteccion Inteligente de Tablas</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesion</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Funciona en Cualquier Dispositivo</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">Google Sheets es una aplicacion de hojas de calculo — espera datos estructurados en filas y columnas. Los PDFs son documentos visuales disenados para impresion, no para analisis de datos. Para llevar tus datos PDF a Google Sheets, primero extrae las tablas en formato Excel con PDF.it, luego sube el XLSX a Google Drive.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Deteccion automatica de tablas extrae filas y columnas</li>
              <li className="flex items-center gap-2">✓ El formato XLSX abre nativamente en Google Sheets</li>
              <li className="flex items-center gap-2">✓ Acceso completo a formulas, graficos y tablas dinamicas</li>
              <li className="flex items-center gap-2">✓ Comparte y colabora con tu equipo en tiempo real</li>
            </ul>
          </div>
        </section>

        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <Link href="/es/pdf-a-excel" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 px-10 rounded-xl text-lg transition-colors shadow-lg">Paso 1: Convertir PDF a Excel</Link>
            <p className="text-sm text-slate-500 mt-3">Luego sube el XLSX a Google Drive y abre con Google Sheets</p>
          </div>
        </section>

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Analiza Datos Financieros", desc: "Estados de cuenta, informes de ganancias y perdidas, e informes trimestrales llegan como PDFs. Convierte a Google Sheets para hacer calculos, crear graficos y rastrear tendencias." },
              { title: "Importa Facturas y Presupuestos", desc: "Extrae lineas de detalle de facturas PDF a Google Sheets. Ordena por proveedor, calcula totales y reconcilia pagos en una hoja de calculo compartida en la nube." },
              { title: "Colabora en Datos", desc: "En lugar de enviar informes PDF por email, conviertelos a Google Sheets. Todos trabajan en los mismos datos en tiempo real — sin conflictos de versiones." },
            ].map((feature) => (<div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>))}
          </div></div>
        </section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Abrir Tablas PDF en Google Sheets</h2><div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
          {[{ num: "1", title: "Convierte PDF a Excel", desc: "Usa PDF.it para extraer tablas en formato XLSX" },{ num: "2", title: "Sube a Google Drive", desc: "Sube el archivo XLSX a drive.google.com" },{ num: "3", title: "Abre con Google Sheets", desc: "Haz doble clic en el archivo para editar" }].map((step) => (<div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>))}
        </div></div></section>

        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ name: "PDF a Excel", href: "/es/pdf-a-excel", desc: "Convierte PDF a hoja de calculo" },{ name: "PDF a XLSX", href: "/es/pdf-a-xlsx", desc: "Extrae tablas a XLSX" },{ name: "PDF a Google Docs", href: "/es/pdf-a-google-docs", desc: "Abre PDFs en Google Docs" },{ name: "Extraccion de Tablas", href: "/es/extraccion-tablas", desc: "Exportacion avanzada de datos" }].map((tool) => (<div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div><div className="text-xs text-slate-400">{tool.desc}</div></Link></div>))}
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

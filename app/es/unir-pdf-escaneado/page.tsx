import type { Metadata } from "next"
import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Unir PDFs Escaneados en Un Documento — Gratis en Línea | PDF.it",
  description: "Combina múltiples PDFs escaneados en un solo documento con PDF.it. Une páginas escaneadas de diferentes fuentes en un archivo limpio, rápido, gratis y desde tu navegador.",
  alternates: {
    canonical: "https://www.pdf.it.com/es/unir-pdf-escaneado",
    languages: { "en": "https://www.pdf.it.com/merge-scanned-pdf", "es": "https://www.pdf.it.com/es/unir-pdf-escaneado", "pt-BR": "https://www.pdf.it.com/br/unir-pdf-escaneado" },
  },
}

export default function UnirPDFEscaneadoPage() {
  const faqs = [
    {
        "q": "Como uno PDFs escaneados en un documento?",
        "a": "Sube tus archivos PDF escaneados a PDF.it, ordenalos y haz clic en Unir. PDF.it combina páginas escaneadas en un solo documento sin alterar la calidad de imagen."
    },
    {
        "q": "Unir PDFs escaneados reducira la calidad de imagen?",
        "a": "No. PDF.it une tus páginas escaneadas sin recomprimirlas. Cada página conserva su calidad y resolución de escaneo original."
    },
    {
        "q": "Puedo ejecutar OCR después de unir PDFs escaneados?",
        "a": "Si. Después de unir tus PDFs escaneados, usa la herramienta Escáner OCR de PDF.it para hacer el texto buscable y selecciónable. OCR está disponible para usuarios Pro."
    },
    {
        "q": "Que tan grandes pueden ser los archivos PDF escaneados?",
        "a": "Los usuarios gratuitos pueden subir PDFs escaneados de hasta 25MB cada uno. Los usuarios Pro obtienen un límite de 200MB por archivo, que maneja escaneos de alta resolución fácilmente."
    },
    {
        "q": "Puedo unir recibos y facturas escaneados en un PDF?",
        "a": "Absolutamente. Sube todos tus recibos o facturas escaneados, ordenalos cronologicamente y unelos en un solo documento para contabilidad o informes de gastos."
    },
    {
        "q": "Esto funciona con escaneos de la camara de mi celular?",
        "a": "Si. PDF.it funciona con PDFs escaneados de cualquier fuente — camaras de celular, escáneres de escritorio, impresoras multifunción o apps como CamScanner y Adobe Scan."
    }
]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Merge className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Unir PDFs Escaneados en Un Documento</h1>
            <p className="text-xl text-slate-300 mb-8">Combina PDFs escaneados de diferentes fuentes en un solo documento organizado. Perfecto para recibos, contratos, identificaciones y documentos archivados — rápido, gratis y desde tu navegador.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Preserva Calidad del Escaneo</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Registro Necesario</span></div>
            </div>
          </div></div>
        </section>

        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">Los documentos escaneados a menudo terminan como archivos PDF separados — uno por página, uno por lote o uno por sesión de escaneo. PDF.it te permite unir todos tus PDFs escaneados en un solo archivo, manteniendo cada página en su calidad original. Ideal para combinar contratos escaneados, recibos, identificaciones y documentos archivados.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Une PDFs escaneados sin perdida de calidad</li>
            <li className="flex items-center gap-2">✓ Combina escaneos de celulares, escáneres y apps</li>
            <li className="flex items-center gap-2">✓ Ordena las páginas en cualquier orden antes de unir</li>
            <li className="flex items-center gap-2">✓ Continua con OCR para texto buscable (Pro)</li>
          </ul>
        </div></section>

        <ProcessingInterface acceptedFiles=".pdf" toolName="Merge PDF" outputFormat="PDF" processingMessage="Uniendo tus PDFs escaneados..." successMessage="Tu documento unido esta listo!" />

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Une Contratos Escaneados", desc: "Los contratos firmados a menudo llegan como páginas escaneadas separadas. Combina todas las páginas en un documento profesional para tus registros, archivos legales o envios a clientes." },
            { title: "Combina Recibos para Informes de Gastos", desc: "Escanea tus recibos durante el mes, luego unelos todos en un PDF para tu informe de gastos. Un archivo en lugar de una carpeta llena de escaneos sueltos." },
            { title: "Organiza Archivos Escaneados", desc: "Digitalizando documentos antiguos? Une lotes de páginas escaneadas en documentos organizados por categoria, fecha o proyecto. Luego comprime para almacenamiento a largo plazo." },
          ].map((feature) => (<div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>))}
        </div></div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Unir PDFs Escaneados</h2><div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
          {[{ num: "1", title: "Sube tus PDFs escaneados", desc: "Arrastra y suelta o haz clic para elegir archivos" },{ num: "2", title: "Ordena las páginas", desc: "Reordena los archivos antes de unir" },{ num: "3", title: "Descarga tu documento", desc: "Obtiene tu archivo unido al instante" }].map((step) => (<div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>))}
        </div></div></section>

        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ name: "Unir PDF", href: "/es/unir-pdf", desc: "Union estándar de PDF" },{ name: "Escáner OCR", href: "/es/ocr-pdf", desc: "Haz escaneos buscables" },{ name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño" },{ name: "Limpiar Escaneo", href: "/es/limpieza-escaneo-celular", desc: "Limpia escaneos de celular" }].map((tool) => (<div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div><div className="text-xs text-slate-400">{tool.desc}</div></Link></div>))}
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

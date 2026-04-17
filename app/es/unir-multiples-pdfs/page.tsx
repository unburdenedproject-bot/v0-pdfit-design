import type { Metadata } from "next"
import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Unir Múltiples PDFs en Un Solo Archivo — Herramienta Gratis en Línea | PDF.it",
  description: "Une múltiples archivos PDF en un solo documento con PDF.it. Combina 2, 5 o 10+ PDFs en un archivo, rápido, gratis y desde tu navegador.",
  alternates: {
    canonical: "https://www.pdf.it.com/es/unir-multiples-pdfs",
    languages: { "en": "https://www.pdf.it.com/merge-multiple-pdfs", "es": "https://www.pdf.it.com/es/unir-multiples-pdfs", "pt-BR": "https://www.pdf.it.com/br/unir-multiplos-pdfs" },
  },
}

export default function UnirMultiplesPDFsPage() {
  const faqs = [
    {
        "q": "Como uno múltiples PDFs en un solo archivo?",
        "a": "Sube todos tus archivos PDF a PDF.it, ordenalos como quieras y haz clic en Unir. Tu PDF combinado estara listo para descargar en segundos."
    },
    {
        "q": "Puedo unir más de 10 PDFs a la vez?",
        "a": "Si. Los usuarios Pro pueden unir grandes lotes de PDFs con procesamiento por lotes. Los usuarios gratuitos pueden unir archivos uno a la vez."
    },
    {
        "q": "Unir PDFs cambia el orden de archivos?",
        "a": "No. PDF.it preserva el orden exacto que establezcas. Arrastra y suelta tus archivos para reorganizarlos antes de unir."
    },
    {
        "q": "Hay un límite de tamaño al unir múltiples PDFs?",
        "a": "Los usuarios gratuitos pueden subir archivos de hasta 25MB cada uno. Los usuarios Pro obtienen un límite de 200MB por archivo."
    },
    {
        "q": "El PDF unido sera muy grande para enviar por email?",
        "a": "Depende del tamaño total de tus archivos. Si el PDF unido es muy grande, usa la herramienta Comprimir PDF de PDF.it para reducir el tamaño antes de enviar."
    },
    {
        "q": "Puedo unir PDFs en mi celular o tablet?",
        "a": "Si. PDF.it es completamente basado en navegador y funciona en iPhone, iPad, Android y cualquier dispositivo con navegador moderno."
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
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Unir Múltiples PDFs en Un Solo Archivo</h1>
            <p className="text-xl text-slate-300 mb-8">Combina 2, 5 o 10+ archivos PDF en un solo documento. Sube tus archivos, establece el orden y descarga un PDF unido, rápido, gratis y desde tu navegador.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Union por Lotes (Pro)</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Registro Necesario</span></div>
            </div>
          </div></div>
        </section>

        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">Ya sea que necesites unir dos contratos o combinar docenas de capítulos de informes, PDF.it lo maneja todo. Sube tus archivos PDF, ordenalos correctamente y obtiene un documento unido limpio. Los usuarios Pro desbloquean procesamiento por lotes para unir grandes cantidades de archivos a la vez.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Une 2, 5, 10 o 50+ PDFs en un documento</li>
            <li className="flex items-center gap-2">✓ Arrastra y suelta para controlar el orden</li>
            <li className="flex items-center gap-2">✓ Sin perdida de calidad — todas las páginas se mantienen como están</li>
            <li className="flex items-center gap-2">✓ Funciona en cualquier dispositivo con navegador</li>
          </ul>
        </div></section>

        <ProcessingInterface acceptedFiles=".pdf" toolName="Merge PDF" outputFormat="PDF" processingMessage="Uniendo tus PDFs..." successMessage="Tu PDF unido esta listo!" />

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Union por Lotes de Docenas de Archivos", desc: "Necesitas combinar un gran lote de facturas, informes o certificados? Los usuarios Pro pueden selecciónar múltiples archivos a la vez y unirlos en una sola operación." },
            { title: "Mantiene las Páginas en el Orden Correcto", desc: "Después de subir, arrastra y suelta archivos para establecer la secuencia exacta. PDF.it preserva el orden que elijas para que cada capítulo y apendice aparezca donde debe." },
            { title: "Une y Luego Comprime para Compartir", desc: "Unir muchos PDFs puede crear un archivo grande. Después de combinar, usa la herramienta Comprimir PDF de PDF.it para reducir el resultado para email y almacenamiento en la nube." },
          ].map((feature) => (<div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>))}
        </div></div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Unir Múltiples PDFs</h2><div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
          {[{ num: "1", title: "Sube tus PDFs", desc: "Arrastra y suelta todos tus archivos PDF" },{ num: "2", title: "Ordena y une", desc: "Reordena archivos, luego haz clic en Unir" },{ num: "3", title: "Descarga tu PDF", desc: "Obtiene tu archivo combinado al instante" }].map((step) => (<div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>))}
        </div></div></section>

        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ name: "Combinar PDF", href: "/es/combinar-archivos-pdf", desc: "Combina archivos en uno" },{ name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Extrae o divide páginas" },{ name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño" },{ name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Aplana campos de formulario" }].map((tool) => (<div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div><div className="text-xs text-slate-400">{tool.desc}</div></Link></div>))}
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

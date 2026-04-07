import type { Metadata } from "next"
import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ArrowLeftRight, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Reordenar PDF en Linea — Reorganiza Paginas PDF en Cualquier Orden | PDF.it",
  description: "Reorganiza paginas PDF en cualquier orden con PDF.it. Usa herramientas de Dividir y Unir para reorganizar tu documento, rapido, gratis y desde tu navegador.",
  alternates: {
    canonical: "https://www.pdf.it.com/es/reordenar-pdf",
    languages: { "en": "https://www.pdf.it.com/reorder-pdf", "es": "https://www.pdf.it.com/es/reordenar-pdf", "pt-BR": "https://www.pdf.it.com/br/reordenar-pdf" },
  },
}

export default function ReordenarPDFPage() {
  const faqs = [
    {
        "q": "Como reordeno paginas en un PDF?",
        "a": "Usa la herramienta Dividir PDF de PDF.it para separar tu documento en paginas individuales, luego usa Unir PDF para combinarlas en el orden deseado. Es rapido, gratis y funciona completamente en tu navegador."
    },
    {
        "q": "Puedo arrastrar y soltar paginas PDF para reorganizarlas?",
        "a": "PDF.it usa un flujo de dividir-y-unir para reordenar paginas. Divide tu PDF en paginas individuales, luego subelas a Unir PDF en el orden que quieras."
    },
    {
        "q": "Reordenar paginas afectara la calidad de mi PDF?",
        "a": "No. Dividir y unir PDFs con PDF.it preserva la calidad original de tus paginas, incluyendo texto, imagenes, formato y fuentes incrustadas."
    },
    {
        "q": "Puedo reordenar paginas en un PDF escaneado?",
        "a": "Si. Los PDFs escaneados funcionan igual — divide el documento en paginas, luego unelas en el orden correcto. Las imagenes escaneadas permanecen sin cambios."
    },
    {
        "q": "Hay un limite de paginas para reordenar PDFs?",
        "a": "Los usuarios gratuitos pueden procesar archivos de hasta 25MB. Los usuarios Pro obtienen archivos de hasta 200MB con procesamiento por lotes para manejar documentos grandes."
    },
    {
        "q": "Puedo reordenar paginas PDF en mi celular?",
        "a": "Si. PDF.it funciona en cualquier navegador movil en iPhone o Android. Divide tu PDF, luego une las paginas en tu orden preferido."
    }
]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><ArrowLeftRight className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Reordenar Paginas PDF en Linea</h1>
            <p className="text-xl text-slate-300 mb-8">Reorganiza paginas PDF en cualquier orden usando las herramientas de Dividir y Unir de PDF.it. Corrige errores de orden, reorganiza presentaciones y ordena documentos escaneados — rapido, gratis y desde tu navegador.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Sin Software Necesario</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesion</span></div>
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Gratis para Usar</span></div>
            </div>
          </div></div>
        </section>

        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">Necesitas reorganizar paginas en un PDF? PDF.it lo hace simple con un flujo de dos pasos: divide tu documento en paginas individuales, luego unelas en cualquier orden. Sin software que instalar, sin cuenta requerida — preserva la calidad original incluyendo texto, imagenes y formato.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Reorganiza paginas en cualquier orden</li>
            <li className="flex items-center gap-2">✓ Preserva calidad y formato original</li>
            <li className="flex items-center gap-2">✓ Funciona con PDFs escaneados y digitales</li>
            <li className="flex items-center gap-2">✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
          </ul>
        </div></section>

        <section className="py-12 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-md text-center"><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/es/dividir-pdf" className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">Dividir PDF</Link><Link href="/es/unir-pdf" className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">Unir PDF</Link></div></div></section>

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Corrige Errores de Orden", desc: "Escaneaste documentos en el orden incorrecto? Recibiste un PDF con paginas fuera de secuencia? Divide el documento en paginas individuales y unelas en el orden correcto." },
            { title: "Reorganiza Presentaciones e Informes", desc: "Reestructura una presentacion o reorganiza secciones de un informe dividiendo y uniendo paginas en tu nuevo orden preferido." },
            { title: "Ordena Documentos Escaneados", desc: "Al escanear multiples documentos a la vez, las paginas a menudo quedan desordenadas. Divide, revisa y une en la secuencia correcta." },
          ].map((feature) => (<div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>))}
        </div></div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Reordenar Paginas PDF</h2><div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
          {[{ num: "1", title: "Divide tu PDF", desc: "Separa en paginas individuales" },{ num: "2", title: "Une en nuevo orden", desc: "Sube paginas en la secuencia deseada" },{ num: "3", title: "Descarga tu PDF", desc: "Obtiene tu documento reordenado al instante" }].map((step) => (<div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>))}
        </div></div></section>

        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Separa paginas" },{ name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina paginas" },{ name: "Rotar PDF", href: "/es/rotar-pdf", desc: "Corrige la orientacion" },{ name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamano" }].map((tool) => (<div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div><div className="text-xs text-slate-400">{tool.desc}</div></Link></div>))}
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

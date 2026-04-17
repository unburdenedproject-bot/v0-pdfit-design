import type { Metadata } from "next"
import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Reducir Tamaño de PDF en Línea — Reductor de Tamaño PDF Gratis | PDF.it",
  description: "Reduce el tamaño de archivos PDF en línea gratis. Elige tu nivel de compresión — ligera, media o extrema — para equilibrar calidad y tamaño. Rápido, desde el navegador, sin instalación.",
  alternates: {
    canonical: "https://www.pdf.it.com/es/reducir-tamaño-pdf",
    languages: { "en": "https://www.pdf.it.com/reduce-pdf-size", "es": "https://www.pdf.it.com/es/reducir-tamaño-pdf", "pt-BR": "https://www.pdf.it.com/br/reduzir-tamanho-pdf" },
  },
}

export default function ReducirTamanoPDFPage() {
  const faqs = [
    {
        "q": "Como reduzco el tamaño de un archivo PDF?",
        "a": "Sube tu PDF a PDF.it, elige tu nivel de compresión preferido (ligera, media o extrema) y haz clic en Comprimir. Tu PDF de tamaño reducido estara listo para descargar en segundos."
    },
    {
        "q": "Cual es la diferencia entre compresión ligera, media y extrema?",
        "a": "La ligera optimiza estructuras PDF con cambios minimos en imágenes. La media (recomendada) equilibra reducción de tamaño y calidad. La extrema maximiza la reducción comprimiendo imágenes agresivamente."
    },
    {
        "q": "Cuanto se reducira mi PDF?",
        "a": "Depende del contenido y nivel elegido. PDFs con mucho texto pueden ver 20-40% de reducción. PDFs con muchas imágenes con compresión extrema pueden ver 50-80% de reducción."
    },
    {
        "q": "Reducir el tamaño del PDF es gratis?",
        "a": "Si. Los usuarios gratuitos pueden reducir hasta 10 PDFs por día con archivos de hasta 25MB. Los usuarios Pro obtienen compresiónes ilimitadas con archivos de hasta 200MB y procesamiento por lotes."
    },
    {
        "q": "Reducir el tamaño del PDF afectara la calidad?",
        "a": "Depende del nivel. La ligera preserva casi toda la calidad. La media reduce ligeramente el detalle de imágenes. La extrema reduce notablemente la resolución de imágenes para máxima reducción de tamaño. El texto siempre se mantiene nitido."
    },
    {
        "q": "Que pasa si mi PDF sigue siendo muy grande después de reducir?",
        "a": "Prueba un nivel de compresión más alto, o divide el PDF en secciones más pequeñas con nuestra herramienta Dividir PDF y comprime cada parte."
    }
]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Compress className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Reducir Tamaño de PDF en Línea</h1>
            <p className="text-xl text-slate-300 mb-8">Elige tu nivel de compresión segun tus necesidades — ligera para preservar calidad, media para un enfoque equilibrado, o extrema para máxima reducción. Sube, reduce, descarga — todo desde tu navegador.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Elige Tu Nivel de Compresión</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Registro Necesario</span></div>
            </div>
          </div></div>
        </section>

        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">Los PDFs pueden ser grandes por muchas razones — imágenes de alta resolución, fuentes incrustadas, estructuras internas no optimizadas o metadatos ocultos. PDF.it analiza tu documento y aplica compresión segun el nivel que elijas, apuntando a las mayores fuentes de peso para reducir el tamaño efectivamente.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Tres niveles de compresión: ligera, media y extrema</li>
            <li className="flex items-center gap-2">✓ El texto siempre se mantiene nitido y legible</li>
            <li className="flex items-center gap-2">✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
            <li className="flex items-center gap-2">✓ Sin instalación — reduce el tamaño del PDF en tu navegador</li>
          </ul>
        </div></section>

        <ProcessingInterface acceptedFiles=".pdf" toolName="Compress PDF" outputFormat="PDF" processingMessage="Reduciendo el tamaño de tu PDF..." successMessage="Tu PDF más pequeño esta listo!" showCompressionSelector />

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Cumple Límites de Email", desc: "La mayoría de proveedores de email limitan archivos adjuntos a 10-25MB. Reduce el tamaño de tu PDF para que quepa en los límites de email y se descargue rápido para tus destinatarios." },
            { title: "Cumple Requisitos de Portales", desc: "Solicitudes de empleo, formularios gubernamentales, reclamaciones de seguros y envios universitarios a menudo tienen límites estrictos de tamaño. Reduce tu PDF para cumplir los requisitos de subida." },
            { title: "Ahorra Espacio en la Nube", desc: "Ahorra espacio en Google Drive, Dropbox, OneDrive o iCloud reduciendo PDFs archivados. Los archivos más pequeños también se sincronizan más rápido entre dispositivos." },
          ].map((feature) => (<div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>))}
        </div></div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Reducir el Tamaño de un PDF</h2><div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
          {[{ num: "1", title: "Sube tu PDF", desc: "Arrastra y suelta o haz clic para elegir" },{ num: "2", title: "Elige nivel de compresión", desc: "Ligera, Media o Extrema reducción" },{ num: "3", title: "Descarga tu PDF", desc: "Obtiene tu archivo reducido al instante" }].map((step) => (<div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>))}
        </div></div></section>

        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Compresión estándar" },{ name: "Comprimir para Email", href: "/es/comprimir-pdf-para-email", desc: "Cumple límites de email" },{ name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Divide documentos grandes" },{ name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Elimina campos de formulario" }].map((tool) => (<div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div><div className="text-xs text-slate-400">{tool.desc}</div></Link></div>))}
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

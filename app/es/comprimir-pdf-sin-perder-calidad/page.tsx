import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF Sin Perder Calidad — Compresión Inteligente | PDF.it",
  description: "Comprime archivos PDF sin perder calidad. La compresión inteligente optimiza estructuras internas, hace subset de fuentes y comprime imágenes ligeramente preservando la legibilidad — rápido, desde tu navegador, gratis.",
  alternates: { canonical: "https://www.pdf.it.com/es/comprimir-pdf-sin-perder-calidad", languages: { en: "/compress-pdf-without-losing-quality", es: "/es/comprimir-pdf-sin-perder-calidad", "pt-BR": "/br/comprimir-pdf-sem-perder-qualidade" } },
}

export default function ComprimirPDFSinPerderCalidadPage() {
  const faqs = [{"q":"¿Como comprime PDF.it sin perder calidad?","a":"La compresión inteligente optimiza las estructuras internas del PDF, elimina objetos duplicados, hace subset de fuentes y aplica compresión ligera de imágenes."},{"q":"¿Las imágenes se veran diferentes?","a":"Con la compresión recomendada, las imágenes se optimizan ligeramente. La diferencia es virtualmente imperceptible."},{"q":"¿Cuanto más pequeño sera mi PDF?","a":"Los documentos con fuentes incrustadas y estructuras no optimizadas tipicamente ven una reducción del 20-50%."},{"q":"¿Es diferente de la compresión extrema?","a":"Si. La compresión extrema reduce agresivamente la resolución de imágenes. La compresión recomendada prioriza la calidad."},{"q":"¿Puedo comprimir sin perder calidad desde mi celular?","a":"Si. PDF.it funciona en cualquier navegador móvil. Sube, comprime y descarga el archivo optimizado."},{"q":"¿Que tipos de PDFs se benefician más?","a":"Informes profesionales, presentaciones, portafolios y documentos legales — cualquier documento donde la calidad visual importa."}]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Compress className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF Sin Perder Calidad</h1>
            <p className="text-xl text-slate-300 mb-8">La compresión inteligente optimiza las estructuras internas del PDF, hace subset de fuentes y comprime imágenes ligeramente — reduciendo el tamaño preservando la legibilidad y calidad visual.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Compresión Inteligente</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Registro</span></div>
            </div>
          </div></div>
        </section>

        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">No toda la compresión es igual. La compresión inteligente de PDF.it se enfoca en optimizar la estructura interna de tu PDF — eliminando objetos duplicados, haciendo subset de fuentes incrustadas y aplicando optimización ligera de imágenes. El resultado es un archivo notablemente más pequeño que se ve virtualmente identico al original.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">&#10003; Optimiza estructuras internas del PDF y elimina redundancias</li>
            <li className="flex items-center gap-2">&#10003; Hace subset de fuentes para eliminar caracteres no usados</li>
            <li className="flex items-center gap-2">&#10003; La compresión ligera de imágenes preserva la calidad visual</li>
            <li className="flex items-center gap-2">&#10003; Sin instalación — funciona en cualquier navegador en cualquier dispositivo</li>
          </ul>
        </div></section>

        <ProcessingInterface acceptedFiles=".pdf" toolName="Compress PDF" outputFormat="PDF" processingMessage="Applying smart compression to your PDF..." successMessage="Your compressed PDF is ready!" compressionLevel="recommended" />

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
                { title: "Informes y Presentaciones Profesionales", desc: "Informes anuales, resumenes financieros y presentaciones para clientes necesitan verse pulidos. La compresión inteligente reduce el tamaño manteniendo gráficos, tablas y formato impecables." },
                { title: "Portafolios y Diseño", desc: "Los portafolios creativos dependen de la calidad de imagen. La compresión que preserva calidad te permite compartir tu trabajo por email o portales sin degradar tus diseños." },
                { title: "Documentos Legales y de Cumplimiento", desc: "Contratos, acuerdos y documentos legales deben permanecer completamente legibles. La compresión inteligente optimiza el tamaño asegurando que cada palabra, firma y sello se mantenga nitido." },
          ].map((feature) => (
            <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </div></div>
          ))}
        </div></div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Comprimir PDF Sin Perder Calidad</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
            {[{ num: "1", title: "Sube tu PDF", desc: "Arrastra y suelta o haz clic para elegir un archivo" }, { num: "2", title: "Haz clic en Comprimir PDF", desc: "La compresión inteligente se aplica automáticamente" }, { num: "3", title: "Descarga tu PDF", desc: "Obtiene tu archivo optimizado al instante" }].map((step) => (
              <div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>
            ))}
          </div>
        </div></section>

        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Compresión estándar" }, { name: "Comprimir para Email", href: "/es/comprimir-pdf-para-email", desc: "Para límites de adjuntos" }, { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Divide si sigue grande" }, { name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Elimina campos de formulario" }].map((tool) => (
              <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div><div className="text-xs text-slate-400">{tool.desc}</div></Link></div>
            ))}
          </div>
        </div></section>

        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-white mb-10 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-4">{faqs.map((faq, i) => (<div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3><p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p></div>))}</div>
        </div></section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) })}} />
      </main>
      <FooterEs />
    </div>
  )
}

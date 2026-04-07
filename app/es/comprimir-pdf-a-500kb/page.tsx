import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF a 500KB Online — Compresion Extrema Gratis | PDF.it",
  description: "Aplica compresion extrema a tu PDF para cumplir limites de 500KB. Perfecto para portales gubernamentales, fotos de visa, formularios moviles y solicitudes en linea — rapido, desde tu navegador, gratis.",
  alternates: { canonical: "https://www.pdf.it.com/es/comprimir-pdf-a-500kb", languages: { en: "/compress-pdf-to-500kb", es: "/es/comprimir-pdf-a-500kb", "pt-BR": "/br/comprimir-pdf-a-500kb" } },
}

export default function ComprimirPDFA500KBPage() {
  const faqs = [
    { q: "¿Como comprimo un PDF para un limite de 500KB?", a: "Sube tu PDF a PDF.it y haz clic en Comprimir. La herramienta aplica compresion extrema para reducir la resolucion de imagenes y optimizar la estructura interna, reduciendo drasticamente el tamano del archivo. Los resultados dependen del contenido de tu PDF." },
    { q: "¿Mi PDF quedara definitivamente debajo de 500KB despues de comprimirlo?", a: "La compresion extrema reduce drasticamente el tamano del archivo, pero los resultados dependen del contenido del PDF. Los PDFs pequenos con mucho texto se comprimen muy bien. Los archivos mas grandes o con muchas imagenes pueden necesitar dividirse primero y luego comprimir cada parte por separado." },
    { q: "¿Que portales requieren PDFs de menos de 500KB?", a: "Muchos portales gubernamentales, formularios de subida de fotos de visa, formularios de aplicacion movil y sistemas de envio en linea imponen un limite de 500KB. Esto es comun para documentos de identificacion, subidas de fotos y documentacion de soporte." },
    { q: "¿Mi PDF seguira siendo legible despues de comprimirlo a 500KB?", a: "Si. El texto se mantiene nitido y completamente legible. Las imagenes pueden perder algo de detalle con la compresion extrema, pero el documento sigue siendo utilizable para la mayoria de los propositos." },
    { q: "¿Puedo comprimir un PDF a 500KB desde mi celular?", a: "Si. PDF.it funciona en cualquier navegador movil. Sube tu PDF, comprimelo y descarga el archivo mas pequeno directamente en tu iPhone o Android." },
    { q: "¿Que hago si mi PDF sigue pesando mas de 500KB despues de comprimirlo?", a: "Intenta dividir el PDF en partes mas pequenas con nuestra herramienta Dividir PDF y luego comprime cada parte individualmente. Tambien puedes aplanar el PDF, eliminar paginas innecesarias o convertir imagenes a escala de grises para reducir mas el tamano." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Compress className="h-10 w-10 text-[#14D8C4]" /></div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Limites de 500KB</h1>
              <p className="text-xl text-slate-300 mb-8">Aplica compresion extrema para reducir drasticamente el tamano de tu PDF en portales con limites de 500KB. Perfecto para portales gubernamentales, fotos de visa, formularios moviles y solicitudes en linea estrictas.</p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Compresion Extrema</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesion</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">Algunas plataformas imponen un limite muy estricto de 500KB. Los portales gubernamentales, subidas de fotos de visa, formularios de aplicacion movil y sistemas de envio en linea frecuentemente requieren documentos de menos de 500KB. PDF.it aplica compresion extrema para reducir drasticamente el tamano de tu PDF y ayudarte a cumplir estos requisitos de subida estrictos.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Compresion extrema para maxima reduccion de tamano</li>
              <li className="flex items-center gap-2">✓ Perfecto para portales gubernamentales y fotos de visa</li>
              <li className="flex items-center gap-2">✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li className="flex items-center gap-2">✓ Sin instalacion — comprime PDFs en tu navegador</li>
            </ul>
          </div>
        </section>

        <ProcessingInterface acceptedFiles=".pdf" toolName="Compress PDF" outputFormat="PDF" processingMessage="Compressing your PDF for 500KB upload limits..." successMessage="Your compressed PDF is ready!" compressionLevel="extreme" />

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Portales Gubernamentales con Limites Estrictos", desc: "Muchos sitios web gubernamentales para declaraciones de impuestos, permisos y registros oficiales limitan las subidas a 500KB por archivo. Comprime tus documentos para enviarlos sin errores ni rechazos." },
              { title: "Fotos de Visa y Documentos", desc: "Los portales de solicitud de visa frecuentemente requieren fotos de identificacion, copias de pasaporte y documentos de soporte de menos de 500KB. Comprime tus documentos escaneados para cumplir estos requisitos estrictos." },
              { title: "Formularios Moviles y Solicitudes de Empleo", desc: "Los formularios optimizados para movil imponen limites de archivo mas pequenos para subidas rapidas en conexiones celulares. Los portales de empleo y envios de certificaciones a veces limitan adjuntos a 500KB." },
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

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Comprimir un PDF para Limites de 500KB</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[{ num: "1", title: "Sube tu PDF", desc: "Arrastra y suelta o haz clic para elegir un archivo" }, { num: "2", title: "Haz clic en Comprimir", desc: "La compresion extrema se aplica automaticamente" }, { num: "3", title: "Descarga tu PDF", desc: "Obtiene tu archivo comprimido al instante" }].map((step) => (
                <div key={step.num} className="flex-1">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[{ name: "Comprimir a 200KB", href: "/es/comprimir-pdf-a-200kb", desc: "Para limites de 200KB" }, { name: "Comprimir a 1MB", href: "/es/comprimir-pdf-a-1mb", desc: "Para limites de 1MB" }, { name: "Comprimir a 2MB", href: "/es/comprimir-pdf-a-2mb", desc: "Para limites de 2MB" }, { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Divide si sigue grande" }].map((tool) => (
                <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3><p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p></div>))}
            </div>
          </div>
        </section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) })}} />
      </main>
      <FooterEs />
    </div>
  )
}

import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir Imagenes de PDF — Reducir PDFs con Muchas Imagenes | PDF.it",
  description: "Comprime PDFs con muchas imagenes con compresion extrema para reducir dramaticamente el tamano. Perfecto para portafolios, catalogos, listados inmobiliarios y materiales de marketing — rapido, desde tu navegador, gratis.",
  alternates: { canonical: "https://www.pdf.it.com/es/comprimir-pdf-imagenes", languages: { en: "/compress-pdf-images", es: "/es/comprimir-pdf-imagenes", "pt-BR": "/br/comprimir-pdf-imagenes" } },
}

export default function ComprimirPDFImagenesPage() {
  const faqs = [{"q":"¿Por que los PDFs con muchas imagenes son tan grandes?","a":"Las imagenes son el componente mas grande en la mayoria de los PDFs. Las fotos de alta resolucion pueden hacer un PDF muchas veces mas grande que un documento solo de texto."},{"q":"¿Cuanto puede reducir la compresion el tamano?","a":"Los documentos con muchas imagenes tipicamente ven reducciones del 50-80%, aunque los resultados exactos varian."},{"q":"¿Mis imagenes seguiran viendose bien?","a":"La compresion extrema reduce la resolucion de imagen. Las imagenes permanecen claras para visualizacion en pantalla, pero los detalles finos pueden suavizarse."},{"q":"¿Puedo comprimir un PDF con cientos de imagenes?","a":"Si. PDF.it procesa todas las imagenes incrustadas sin importar cuantas haya."},{"q":"¿La compresion afecta el texto?","a":"No. El texto se almacena como datos vectoriales. La compresion apunta a las imagenes dejando el texto completamente intacto."},{"q":"¿Que hago si sigue siendo muy grande?","a":"Divide el PDF en secciones con Dividir PDF y luego comprime cada parte individualmente."}]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Compress className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir Imagenes de PDF</h1>
            <p className="text-xl text-slate-300 mb-8">Los PDFs con muchas imagenes — fotos, catalogos, presentaciones — suelen ser los archivos mas grandes. La compresion extrema apunta a las imagenes incrustadas para maxima reduccion, haciendo tus archivos mas faciles de compartir y subir.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Compresion Extrema de Imagenes</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesion</span></div>
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Registro</span></div>
            </div>
          </div></div>
        </section>

        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">Las imagenes son casi siempre el componente mas grande en un PDF. Una sola foto de alta resolucion puede agregar varios megabytes. Cuando tu PDF contiene docenas o cientos de imagenes, el tamano puede inflarse a 50MB o mas. La compresion extrema de PDF.it apunta a estas imagenes incrustadas para la reduccion mas dramatica posible.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Apunta a imagenes incrustadas para maxima reduccion</li>
            <li className="flex items-center gap-2">✓ El texto y formato permanecen intactos y nitidos</li>
            <li className="flex items-center gap-2">✓ Procesa todas las imagenes de tu PDF a la vez</li>
            <li className="flex items-center gap-2">✓ Sin instalacion — comprime en tu navegador</li>
          </ul>
        </div></section>

        <ProcessingInterface acceptedFiles=".pdf" toolName="Compress PDF" outputFormat="PDF" processingMessage="Compressing images in your PDF..." successMessage="Your compressed PDF is ready!" compressionLevel="extreme" />

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
                { title: "Portafolios de Fotos y Catalogos", desc: "Los portafolios de fotografia y catalogos de e-commerce con fotos de productos en cada pagina crean PDFs masivos. Comprime las imagenes para enviarlos facilmente por email o compartir con clientes." },
                { title: "Listados Inmobiliarios", desc: "Los folletos de propiedades con fotos de interiores y exteriores pueden ser muy grandes. Comprime las imagenes para que los agentes puedan compartir listados rapidamente por email o portales MLS." },
                { title: "Marketing y Presentaciones", desc: "Folletos, volantes y presentaciones cargados de graficos necesitan ser compartibles. Comprime las imagenes para reducir el tamano para campanas de email, redes sociales y descargas web." },
          ].map((feature) => (
            <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </div></div>
          ))}
        </div></div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Comprimir Imagenes de PDF</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
            {[{ num: "1", title: "Sube tu PDF", desc: "Arrastra y suelta o haz clic para elegir un archivo" }, { num: "2", title: "Haz clic en Comprimir", desc: "La compresion extrema apunta a todas las imagenes incrustadas" }, { num: "3", title: "Descarga tu PDF", desc: "Obtiene tu archivo mas pequeno al instante" }].map((step) => (
              <div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>
            ))}
          </div>
        </div></section>

        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Compresion estandar" }, { name: "Extraer Imagenes", href: "/es/extraer-imagenes-pdf", desc: "Extrae imagenes de PDFs" }, { name: "Comprimir a 5MB", href: "/es/comprimir-pdf-a-5mb", desc: "Para limites de 5MB" }, { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Divide si sigue grande" }].map((tool) => (
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

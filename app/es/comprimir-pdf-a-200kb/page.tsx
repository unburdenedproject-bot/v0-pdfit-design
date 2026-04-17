import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF a 200KB Online — Compresión Extrema Gratis | PDF.it",
  description:
    "Aplica compresión extrema a tu PDF para cumplir límites de 200KB. Perfecto para fotos de pasaporte, subida de identificaciones, archivos de firma y portales estrictos — rápido, desde tu navegador, gratis.",
  alternates: {
    canonical: "https://www.pdf.it.com/es/comprimir-pdf-a-200kb",
    languages: {
      en: "/compress-pdf-to-200kb",
      es: "/es/comprimir-pdf-a-200kb",
      "pt-BR": "/br/comprimir-pdf-a-200kb",
    },
  },
}

export default function ComprimirPDFA200KBPage() {
  const faqs = [
    { q: "¿Como comprimo un PDF para un límite de 200KB?", a: "Sube tu PDF a PDF.it y haz clic en Comprimir. La herramienta aplica compresión extrema para reducir la resolución de imágenes y optimizar la estructura interna, reduciendo drasticamente el tamaño del archivo. Los resultados dependen del contenido de tu PDF." },
    { q: "¿Mi PDF quedara definitivamente debajo de 200KB después de comprimirlo?", a: "La compresión extrema reduce drasticamente el tamaño del archivo, pero los resultados dependen del contenido del PDF. Los documentos de una sola página con texto se comprimen muy bien. Los archivos de varias páginas o con muchas imágenes pueden necesitar dividirse primero y luego comprimir cada parte por separado." },
    { q: "¿Que portales requieren PDFs de menos de 200KB?", a: "Muchos portales de envio de fotos de pasaporte, sistemas de subida de identificación nacional, subidas de archivos de firma digital y formularios gubernamentales muy estrictos imponen un límite de 200KB por archivo." },
    { q: "¿Mi PDF seguira siendo legible después de comprimirlo a 200KB?", a: "Si. El texto se mantiene nitido y completamente legible. Las imágenes pueden perder detalle notable con este nivel de compresión, pero el documento sigue siendo utilizable para propósitos de identificación y envio." },
    { q: "¿Puedo comprimir un PDF a 200KB desde mi celular?", a: "Si. PDF.it funciona en cualquier navegador móvil. Sube tu PDF, comprimelo y descarga el archivo más pequeño directamente en tu iPhone o Android." },
    { q: "¿Que hago si mi PDF sigue pesando más de 200KB después de comprimirlo?", a: "Intenta dividir el PDF en páginas individuales con nuestra herramienta Dividir PDF y luego comprime cada página por separado. También puedes aplanar el PDF, eliminar páginas innecesarias o convertir imágenes a escala de grises para reducir más el tamaño." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        {/* Hero */}
        <section
          className="text-white py-16 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%),
              #0E0F1E
            `,
          }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
            <filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#heroGrain)" />
          </svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}>
                <Compress className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Límites de 200KB</h1>
              <p className="text-xl text-slate-300 mb-8">Aplica compresión extrema para reducir drasticamente el tamaño de tu PDF en portales con límites de 200KB. Perfecto para fotos de pasaporte, subida de identificaciones, archivos de firma y portales muy estrictos.</p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Compresión Extrema</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">Algunas plataformas imponen un límite muy estricto de 200KB. Los portales de fotos de pasaporte, sistemas de envio de identificación nacional, subidas de firma digital y formularios gubernamentales estrictos requieren archivos extremadamente pequeños. PDF.it aplica compresión extrema para reducir drasticamente el tamaño de tu PDF y ayudarte a cumplir estos requisitos de subida tan exigentes.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Compresión extrema para máxima reducción de tamaño</li>
              <li className="flex items-center gap-2">✓ Perfecto para pasaporte, identificación y firmas</li>
              <li className="flex items-center gap-2">✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li className="flex items-center gap-2">✓ Sin instalación — comprime PDFs en tu navegador</li>
            </ul>
          </div>
        </section>

        <ProcessingInterface acceptedFiles=".pdf" toolName="Compress PDF" outputFormat="PDF" processingMessage="Compressing your PDF for 200KB upload limits..." successMessage="Your compressed PDF is ready!" compressionLevel="extreme" />

        {/* Feature Blocks */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Fotos de Pasaporte e Identificación", desc: "Los portales de renovacion de pasaporte y sistemas de subida de identificación nacional frecuentemente requieren archivos de menos de 200KB. Comprime tu foto de pasaporte escaneada o PDF de identificación para cumplir estos requisitos estrictos." },
                { title: "Archivos de Firma Digital", desc: "Muchas plataformas requieren archivos de firma de menos de 200KB para la firma electrónica de documentos. Comprime tu firma escaneada en PDF para cumplir los límites de tamaño manteniendola legible." },
                { title: "Portales Gubernamentales Estrictos", desc: "Algunos sistemas gubernamentales imponen límites de subida muy bajos de 200KB por documento. Comprime tus formularios, certificados y documentos de soporte para enviarlos sin errores." },
              ].map((feature) => (
                <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Comprimir un PDF para Límites de 200KB</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Sube tu PDF", desc: "Arrastra y suelta o haz clic para elegir un archivo" },
                { num: "2", title: "Haz clic en Comprimir", desc: "La compresión extrema se aplica automáticamente" },
                { num: "3", title: "Descarga tu PDF", desc: "Obtiene tu archivo comprimido al instante" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}>
                    <span className="text-[#14D8C4] font-black text-lg">{step.num}</span>
                  </div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Comprimir a 100KB", href: "/es/comprimir-pdf-a-100kb", desc: "Para límites de 100KB" },
                { name: "Comprimir a 500KB", href: "/es/comprimir-pdf-a-500kb", desc: "Para límites de 500KB" },
                { name: "Comprimir a 1MB", href: "/es/comprimir-pdf-a-1mb", desc: "Para límites de 1MB" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Divide si sigue grande" },
              ].map((tool) => (
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

        {/* FAQ */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) })}} />
      </main>
      <FooterEs />
    </div>
  )
}

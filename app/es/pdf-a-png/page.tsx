import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileImage, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Convertir PDF a PNG Online — Gratis y Sin Registro | PDF.it",
  description:
    "Convierte PDF a PNG en segundos con PDF.it. Exporta cada pagina como imagen PNG de alta calidad — ideal para texto nitido, graficos y transparencia.",
  alternates: {
    canonical: "https://pdf.it.com/es/pdf-a-png",
    languages: {
      en: "https://pdf.it.com/pdf-to-png",
      es: "https://pdf.it.com/es/pdf-a-png",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Puedo convertir un PDF de varias paginas a PNG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. PDF.it convierte cada pagina del PDF en una imagen PNG individual que puedes descargar por separado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por que elegir PNG en lugar de JPG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PNG es mejor para texto nitido, graficos y diagramas porque no usa compresion agresiva. JPG suele ser mas pequeno y mejor para paginas con muchas fotos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo convertir PDF a PNG en mi celular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. PDF.it funciona en navegadores moviles — sube tu PDF, convierte y descarga tus imagenes PNG.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por que mis archivos PNG se ven borrosos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los PNGs borrosos generalmente provienen de un PDF de baja calidad, especialmente documentos escaneados. Prueba nuestro Escaner OCR para PDFs escaneados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es seguro subir mi PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Todas las transferencias estan cifradas con SSL y tus archivos se eliminan inmediatamente despues de tu sesion.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cual es el tamano maximo de archivo que puedo convertir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las cuentas gratuitas pueden subir archivos de hasta 25MB. Las cuentas Pro pueden subir hasta 200MB. Las cuentas Business pueden subir hasta 1GB.",
      },
    },
  ],
}

export default function PDFaPNGPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderEs />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileImage className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PDF a PNG Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convierte un PDF en imagenes PNG de alta calidad — perfecto para texto nitido, capturas, activos de diseno y exportaciones limpias.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Alta Resolucion</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>Archivos Eliminados Tras la Sesion</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>Sin Registro</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to PNG"
          outputFormat="PNG"
          processingMessage="Converting your PDF to PNG images..."
          successMessage="Your PNG images are ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa el convertidor de PDF a PNG de PDF.it para exportar paginas de PDF como imagenes PNG — rapido. PNG es ideal cuando necesitas texto nitido, graficos limpios y calidad consistente para presentaciones, documentos y uso web. Sube tu PDF, convierte y descarga tus PNGs al instante.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convierte PDF a PNG con resultados nitidos y legibles</li>
              <li>✓ Ideal para paginas con mucho texto, graficos y diagramas</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalacion — funciona desde tu navegador</li>
              <li>✓ Descargas faciles para paginas individuales o documentos completos</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Convierte Paginas de PDF a Imagenes PNG</h2>
              <p className="text-slate-600">
                Transforma cada pagina de un PDF en un archivo PNG separado. Cada pagina se convierte en una imagen que puedes usar en presentaciones, correos, documentos, herramientas de diseno o sitios web.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">¿Por Que Elegir PNG en Lugar de JPG?</h2>
              <p className="text-slate-600">
                PNG produce texto y graficos mas limpios que JPG porque evita artefactos de compresion agresiva. Si necesitas archivos mas pequenos, prueba nuestra herramienta PDF a JPG.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Salida de Alta Calidad para Diseno y Compartir</h2>
              <p className="text-slate-600">
                Las exportaciones PNG son ideales para diagramas, mockups de interfaz, recibos, formularios y cualquier PDF donde la claridad es importante.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Convertir PDF a PNG</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Sube tu PDF", desc: "Arrastra o haz clic para elegir un archivo" },
                { num: "2", title: "Haz clic en Convertir", desc: "El procesamiento toma solo segundos" },
                { num: "3", title: "Descarga tus PNGs", desc: "Todas las paginas en un archivo ZIP" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{
                      background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                      boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)",
                      border: "1px solid rgba(20,216,196,0.25)",
                    }}
                  >
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
                { name: "PDF a JPG", href: "/es/pdf-a-jpg", desc: "Archivos mas pequenos" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamano antes de convertir" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Convierte solo las paginas que necesitas" },
                { name: "PDF a Texto", href: "/es/pdf-a-texto", desc: "Extrae texto del PDF" },
              ].map((tool) => (
                <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: "radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255,255,255,0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16" style={{ background: "radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-white mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {[
                { q: "¿Puedo convertir un PDF de varias paginas a PNG?", a: "Si. PDF.it convierte cada pagina del PDF en una imagen PNG individual que puedes descargar por separado." },
                { q: "¿Por que elegir PNG en lugar de JPG?", a: "PNG es mejor para texto nitido, graficos y diagramas porque no usa compresion agresiva. JPG suele ser mas pequeno y mejor para paginas con muchas fotos." },
                { q: "¿Puedo convertir PDF a PNG en mi celular?", a: "Si. PDF.it funciona en navegadores moviles — sube tu PDF, convierte y descarga tus imagenes PNG." },
                { q: "¿Por que mis archivos PNG se ven borrosos?", a: "Los PNGs borrosos generalmente provienen de un PDF de baja calidad, especialmente documentos escaneados. Prueba nuestro Escaner OCR para PDFs escaneados." },
                { q: "¿Es seguro subir mi PDF?", a: "Si. Todas las transferencias estan cifradas con SSL y tus archivos se eliminan inmediatamente despues de tu sesion." },
                { q: "¿Cual es el tamano maximo de archivo que puedo convertir?", a: "Las cuentas gratuitas pueden subir archivos de hasta 25MB. Las cuentas Pro pueden subir hasta 200MB. Las cuentas Business pueden subir hasta 1GB." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                  <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}

import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Presentation, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Convertir PDF a PowerPoint Online — PDF a PPTX | PDF.it",
  description:
    "Convierte archivos PDF a presentaciones PowerPoint editables con PDF.it. Transforma documentos estaticos en diapositivas que puedes editar, presentar y compartir.",
  alternates: {
    canonical: "https://pdf.it.com/es/pdf-a-powerpoint",
    languages: {
      en: "https://pdf.it.com/pdf-to-powerpoint",
      es: "https://pdf.it.com/es/pdf-a-powerpoint",
    },
  },
}

export default function PDFaPowerPointPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        {/* Hero Section */}
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
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)",
                }}
              >
                <Presentation className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PDF a PowerPoint</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convierte archivos PDF en presentaciones PowerPoint editables. Transforma documentos estaticos en diapositivas que puedes personalizar, presentar y compartir.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#14D8C4]" />
                  <span>Diapositivas Editables</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#14D8C4]" />
                  <span>Diseño Preservado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-[#14D8C4]" />
                  <span>Calidad Profesional</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Usa PDF.it para convertir archivos PDF en presentaciones PowerPoint editables. Perfecto para reutilizar reportes, propuestas y documentos en diapositivas que puedes presentar y personalizar.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Convierte páginas PDF a diapositivas PowerPoint editables</li>
              <li className="flex items-center gap-2">✓ Preserva texto, imágenes y diseño</li>
              <li className="flex items-center gap-2">✓ Compatible con PowerPoint, Google Slides y Keynote</li>
              <li className="flex items-center gap-2">✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li className="flex items-center gap-2">✓ Sin instalación — convierte desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          requiresPlan="pro"
          acceptedFiles=".pdf"
          toolName="PDF to PowerPoint"
          outputFormat="PPTX"
          processingMessage="Converting your PDF to PowerPoint..."
          successMessage="Your PowerPoint presentation is ready!"
        />

        {/* Feature Blocks */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Convierte Reportes en Presentaciones", desc: "Transforma reportes PDF, propuestas y documentos en diapositivas editables. Agrega tu propio formato, animaciones y notas del orador después de la conversión." },
                { title: "Preserva Diseño e Imágenes", desc: "PDF.it mantiene texto, imágenes y estructura de página intactos para que tus diapositivas se vean profesionales desde el inicio. Diseños complejos pueden necesitar ajustes menores." },
                { title: "Compatible con Google Slides y Keynote", desc: "El archivo .pptx es compatible con Microsoft PowerPoint, Google Slides, Apple Keynote y otros programas de presentaciones." },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <div
                    className="rounded-[11px] p-6 h-full"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Convertir PDF a PowerPoint</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Sube tu PDF", desc: "Sube o arrastra tu PDF a PDF.it." },
                { num: "2", title: "Haz clic en Convertir", desc: "Haz clic en Convertir PDF a PowerPoint." },
                { num: "3", title: "Descarga tu archivo", desc: "Descarga tu archivo .pptx editable y abrelo en PowerPoint o Google Slides." },
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
                { name: "PDF a Word", href: "/es/pdf-a-word", desc: "Edita texto en Word" },
                { name: "PDF a Excel", href: "/es/pdf-a-excel", desc: "Extrae tablas" },
                { name: "PowerPoint a PDF", href: "/es/powerpoint-a-pdf", desc: "Convierte de vuelta a PDF" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño primero" },
              ].map((tool) => (
                <div
                  key={tool.href}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <Link
                    href={tool.href}
                    className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%),
              radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%),
              radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {[
                { q: "¿Como convierto un PDF a PowerPoint?", a: "Sube tu PDF a PDF.it, haz clic en Convertir y descarga el archivo PowerPoint editable. La conversión preserva el diseño, texto e imágenes." },
                { q: "¿Se mantiene el formato después de la conversión?", a: "PDF.it preserva texto, imágenes y diseño lo mejor posible. Diseños complejos pueden necesitar ajustes menores en PowerPoint." },
                { q: "¿Puedo editar las diapositivas después de la conversión?", a: "Si. El resultado es un archivo .pptx completamente editable que puedes abrir en PowerPoint, Google Slides o Keynote." },
                { q: "¿PDF a PowerPoint es gratis?", a: "PDF a PowerPoint es una función Pro. Los usuarios gratuitos pueden probar otras herramientas como PDF a JPG o PDF a PNG." },
                { q: "¿Puedo convertir PDF a PowerPoint desde mi celular?", a: "Si. PDF.it funciona en navegadores móviles — sube, convierte y descarga desde iPhone o Android." },
                { q: "¿Cual es el tamaño máximo de archivo que puedo convertir?", a: "Las cuentas Pro y Business pueden subir archivos de hasta 200MB." },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Como convierto un PDF a PowerPoint?", "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it, haz clic en Convertir y descarga el archivo PowerPoint editable. La conversión preserva el diseño, texto e imágenes." } },
            { "@type": "Question", "name": "¿Se mantiene el formato después de la conversión?", "acceptedAnswer": { "@type": "Answer", "text": "PDF.it preserva texto, imágenes y diseño lo mejor posible. Diseños complejos pueden necesitar ajustes menores en PowerPoint." } },
            { "@type": "Question", "name": "¿Puedo editar las diapositivas después de la conversión?", "acceptedAnswer": { "@type": "Answer", "text": "Si. El resultado es un archivo .pptx completamente editable que puedes abrir en PowerPoint, Google Slides o Keynote." } },
            { "@type": "Question", "name": "¿PDF a PowerPoint es gratis?", "acceptedAnswer": { "@type": "Answer", "text": "PDF a PowerPoint es una función Pro. Los usuarios gratuitos pueden probar otras herramientas como PDF a JPG o PDF a PNG." } },
            { "@type": "Question", "name": "¿Puedo convertir PDF a PowerPoint desde mi celular?", "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it funciona en navegadores móviles — sube, convierte y descarga desde iPhone o Android." } },
            { "@type": "Question", "name": "¿Cual es el tamaño máximo de archivo que puedo convertir?", "acceptedAnswer": { "@type": "Answer", "text": "Las cuentas Pro y Business pueden subir archivos de hasta 200MB." } }
          ]
        })}} />
      </main>
      <FooterEs />
    </div>
  )
}

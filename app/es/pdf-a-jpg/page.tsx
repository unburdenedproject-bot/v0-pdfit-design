import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { ImageIcon, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Convertir PDF a JPG Online — Gratis y Sin Registro | PDF.it",
  description:
    "Convierte PDF a JPG en segundos con PDF.it. Exporta cada pagina como imagen JPEG de alta calidad y descarga al instante — sin instalar nada.",
  alternates: {
    canonical: "https://pdf.it.com/es/pdf-a-jpg",
    languages: {
      en: "https://pdf.it.com/pdf-to-jpg",
      es: "https://pdf.it.com/es/pdf-a-jpg",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Puedo convertir un PDF de varias paginas a JPG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. PDF.it convierte cada pagina del PDF en una imagen JPG individual que puedes descargar por separado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Convertir PDF a JPG reduce la calidad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La calidad depende del PDF original. Los PDFs de alta resolucion producen JPGs nitidos; los escaneos de baja resolucion pueden verse mas suaves.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cual es la diferencia entre JPG y PNG para paginas de PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JPG generalmente crea archivos mas pequenos y es ideal para compartir. PNG es mejor para texto muy nitido y graficos. Prueba nuestra herramienta PDF a PNG si necesitas salida sin perdida.",
      },
    },
    {
      "@type": "Question",
      name: "¿Funciona en iPhone y Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. PDF.it funciona en navegadores moviles — sube tu PDF, convierte y descarga tus imagenes JPG.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es seguro subir mi PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Los archivos se transfieren por HTTPS y se eliminan automaticamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos.",
      },
    },
    {
      "@type": "Question",
      name: "¿PDF.it agrega marcas de agua?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. PDF.it no agrega marcas de agua a tus archivos JPG convertidos.",
      },
    },
  ],
}

export default function PDFaJPGPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
                <ImageIcon className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PDF a JPG Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convierte un PDF en imagenes JPG nitidas en segundos con PDF.it — rapido, sencillo y desde tu navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#14D8C4]" />
                  <span>Alta Resolucion</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#14D8C4]" />
                  <span>Archivos Eliminados Tras la Sesion</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-[#14D8C4]" />
                  <span>Descarga en ZIP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Usa el convertidor de PDF a JPG de PDF.it para exportar las paginas de tu PDF como imagenes JPEG de alta calidad. Sube tu archivo, convierte en segundos y descarga cada pagina como imagen individual — perfecto para compartir, presentaciones, vistas previas y correos.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Convierte paginas completas de PDF en imagenes JPG</li>
              <li className="flex items-center gap-2">✓ Resultado nitido y legible para texto, graficos y diagramas</li>
              <li className="flex items-center gap-2">✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li className="flex items-center gap-2">✓ Sin instalacion — funciona desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to JPG"
          outputFormat="JPG"
          processingMessage="Converting your PDF to images..."
          successMessage="Your images are ready!"
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
                { title: "Convierte Paginas de PDF a Imagenes JPG", desc: "Transforma cada pagina de tu PDF en una imagen JPG. Cada pagina se convierte en un archivo independiente que puedes usar en presentaciones, correos, documentos o redes sociales." },
                { title: "Mantiene los Disenos Limpios y Claros", desc: "PDF.it preserva el diseno de la pagina para que tu contenido se vea legible y profesional despues de la conversion." },
                { title: "Descarga Instantanea", desc: "Descarga tus JPGs inmediatamente despues de la conversion. Todas las paginas se empaquetan en un archivo ZIP para descargar con un solo clic." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Convertir PDF a JPG</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Sube tu PDF", desc: "Arrastra y suelta o haz clic para elegir un archivo" },
                { num: "2", title: "Haz clic en Convertir", desc: "El proceso suele tardar unos segundos" },
                { num: "3", title: "Descarga tus JPGs", desc: "Todas las paginas en un solo archivo ZIP" },
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
                { name: "PDF a PNG", href: "/es/pdf-a-png", desc: "Imagenes sin perdida de calidad" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamano antes de convertir" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Convierte solo las paginas que necesitas" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina varios PDFs en uno" },
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
            <h2 className="text-2xl font-black text-white mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {[
                { q: "¿Puedo convertir un PDF de varias paginas a JPG?", a: "Si. PDF.it convierte cada pagina del PDF en una imagen JPG individual que puedes descargar por separado." },
                { q: "¿Convertir PDF a JPG reduce la calidad?", a: "La calidad depende del PDF original. Los PDFs de alta resolucion producen JPGs nitidos; los escaneos de baja resolucion pueden verse mas suaves." },
                { q: "¿Cual es la diferencia entre JPG y PNG para paginas de PDF?", a: "JPG generalmente crea archivos mas pequenos y es ideal para compartir. PNG es mejor para texto muy nitido y graficos. Prueba nuestra herramienta PDF a PNG si necesitas salida sin perdida." },
                { q: "¿Funciona en iPhone y Android?", a: "Si. PDF.it funciona en navegadores moviles — sube tu PDF, convierte y descarga tus imagenes JPG." },
                { q: "¿Es seguro subir mi PDF?", a: "Si. Los archivos se transfieren por HTTPS y se eliminan automaticamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos." },
                { q: "¿PDF.it agrega marcas de agua?", a: "No. PDF.it no agrega marcas de agua a tus archivos JPG convertidos." },
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

import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Image, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extraer Imagenes de PDF Online — Descargar Fotos de PDF | PDF.it",
  description:
    "Extrae todas las imagenes de archivos PDF con PDF.it. Saca fotos, logos y graficos de cualquier PDF — rapido, desde tu navegador, sin registro.",
  alternates: {
    languages: {
      en: "/extract-images-from-pdf",
      es: "/es/extraer-imagenes-de-pdf",
    },
  },
}

export default function ExtraerImagenesDePDFPage() {
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
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)",
                }}
              >
                <Image className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extraer Imagenes de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Saca todas las fotos, logos y graficos incrustados en tu PDF. Descargalos como archivo ZIP — instantaneo y desde tu navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Todas las Imagenes Extraidas</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesion</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              ¿Necesitas las fotos o graficos de un PDF sin el texto y el diseno? El extractor de imagenes de PDF.it saca cada imagen incrustada — fotos, logos, graficos, diagramas — y las entrega como un archivo ZIP que puedes usar en cualquier lugar.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Extrae todas las imagenes incrustadas de cualquier PDF</li>
              <li className="flex items-center gap-2">✓ Imagenes guardadas en su formato original (JPG, PNG)</li>
              <li className="flex items-center gap-2">✓ Perfecto para reutilizar fotos, logos y graficos</li>
              <li className="flex items-center gap-2">✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li className="flex items-center gap-2">✓ Sin instalacion — extrae imagenes en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Extract Images from PDF"
          outputFormat="ZIP"
          processingMessage="Extracting images from your PDF..."
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
                { title: "Reutiliza Fotos y Graficos de PDFs", desc: "¿Recibiste un folleto, presentacion o informe en PDF? Extrae las imagenes para reutilizarlas en tus propios documentos, diapositivas o redes sociales sin necesidad de capturas de pantalla." },
                { title: "Extrae Logos y Recursos de Marca", desc: "Saca logos, iconos y graficos de marca de guias de estilo PDF, materiales de marketing y documentos corporativos — obten los archivos de imagen originales al instante." },
                { title: "Diferente a PDF a JPG", desc: "PDF a JPG convierte paginas completas en imagenes. La extraccion de imagenes saca solo los graficos incrustados — fotos, graficos, logos — separados del diseno de la pagina." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Extraer Imagenes de un PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Sube tu PDF", desc: "Sube o arrastra tu PDF a PDF.it." },
                { num: "2", title: "Haz clic en Extraer", desc: "Todas las imagenes incrustadas se detectan automaticamente." },
                { num: "3", title: "Descarga el ZIP", desc: "Descarga el archivo ZIP con todas las imagenes extraidas." },
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
                { name: "PDF a JPG", href: "/es/pdf-a-jpg", desc: "Convierte paginas a imagenes" },
                { name: "PDF a PNG", href: "/es/pdf-a-png", desc: "Convierte paginas a PNG" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamano del archivo" },
                { name: "Escaner OCR", href: "/ocr-scanner", desc: "Extrae texto de escaneos" },
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
                { q: "¿Como extraigo imagenes de un PDF?", a: "Sube tu PDF a PDF.it, haz clic en Extraer y descarga un archivo ZIP con todas las imagenes encontradas en tu PDF." },
                { q: "¿En que formatos se extraen las imagenes?", a: "PDF.it extrae las imagenes en su formato original — generalmente JPG o PNG. Las imagenes se descargan como archivo ZIP." },
                { q: "¿Cual es la diferencia entre extraer imagenes y convertir PDF a JPG?", a: "PDF a JPG convierte cada pagina en una imagen. Extraer Imagenes saca solo las fotos, logos y graficos incrustados — no el diseno completo de la pagina." },
                { q: "¿Puedo extraer imagenes de un PDF escaneado?", a: "Los PDFs escaneados tratan toda la pagina como una sola imagen. Puedes extraerla, pero sera el escaneo completo de la pagina en vez de graficos individuales." },
                { q: "¿Puedo extraer imagenes de un PDF desde mi celular?", a: "Si. PDF.it funciona en navegadores moviles — sube, extrae y descarga desde tu iPhone o Android." },
                { q: "¿Es gratis extraer imagenes de un PDF?", a: "Si. Las cuentas gratuitas tienen 10 extracciones por dia. Las cuentas Pro tienen extracciones ilimitadas." },
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
            { "@type": "Question", "name": "¿Como extraigo imagenes de un PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it, haz clic en Extraer y descarga un archivo ZIP con todas las imagenes encontradas en tu PDF." } },
            { "@type": "Question", "name": "¿En que formatos se extraen las imagenes?", "acceptedAnswer": { "@type": "Answer", "text": "PDF.it extrae las imagenes en su formato original — generalmente JPG o PNG. Las imagenes se descargan como archivo ZIP." } },
            { "@type": "Question", "name": "¿Cual es la diferencia entre extraer imagenes y convertir PDF a JPG?", "acceptedAnswer": { "@type": "Answer", "text": "PDF a JPG convierte cada pagina en una imagen. Extraer Imagenes saca solo las fotos, logos y graficos incrustados — no el diseno completo de la pagina." } },
            { "@type": "Question", "name": "¿Puedo extraer imagenes de un PDF escaneado?", "acceptedAnswer": { "@type": "Answer", "text": "Los PDFs escaneados tratan toda la pagina como una sola imagen. Puedes extraerla, pero sera el escaneo completo de la pagina en vez de graficos individuales." } },
            { "@type": "Question", "name": "¿Puedo extraer imagenes de un PDF desde mi celular?", "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it funciona en navegadores moviles — sube, extrae y descarga desde tu iPhone o Android." } },
            { "@type": "Question", "name": "¿Es gratis extraer imagenes de un PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Las cuentas gratuitas tienen 10 extracciones por dia. Las cuentas Pro tienen extracciones ilimitadas." } }
          ]
        })}} />
      </main>
      <FooterEs />
    </div>
  )
}

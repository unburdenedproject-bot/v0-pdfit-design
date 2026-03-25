import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Type, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Convertir PDF a Texto Online — Extraer Texto de PDF | PDF.it",
  description:
    "Convierte PDF a TXT en segundos con PDF.it. Extrae texto plano de PDFs online para copiar, editar y compartir — sin instalar nada.",
  alternates: {
    canonical: "https://pdf.it.com/es/pdf-a-texto",
    languages: {
      en: "https://pdf.it.com/pdf-to-txt",
      es: "https://pdf.it.com/es/pdf-a-texto",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Puedo convertir cualquier PDF a un archivo TXT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mayoria de los PDFs con texto se convierten bien. Si tu PDF es escaneado (solo imagen), necesitaras OCR para extraer el texto.",
      },
    },
    {
      "@type": "Question",
      name: "¿PDF.it mantiene el formato del PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TXT es texto plano, asi que el formato como fuentes, columnas y espaciado puede no conservarse. Si necesitas mantener el diseno, usa nuestra herramienta PDF a Word.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por que mi texto convertido se ve desordenado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Algunos PDFs almacenan texto en columnas o bloques posicionados. La exportacion a TXT sigue la estructura interna del PDF, lo que puede reordenar las lineas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo convertir PDF a TXT en mi celular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Abre PDF.it en tu navegador movil, sube el PDF, convierte y descarga el archivo TXT.",
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
      name: "¿Para que sirve convertir PDF a texto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es ideal para copiar contenido en notas, documentos, correos o herramientas de IA — sin tener que volver a escribir todo manualmente.",
      },
    },
  ],
}

export default function PDFaTextoPage() {
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
                <Type className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PDF a Texto Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Extrae texto limpio y editable de cualquier PDF. Convierte a un archivo .txt plano para copiar, tomar notas y editar rapidamente.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#14D8C4]" />
                  <span>Texto Puro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#14D8C4]" />
                  <span>Archivos Eliminados Tras la Sesion</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-[#14D8C4]" />
                  <span>Sin Registro</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro / About */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Usa el convertidor de PDF a TXT de PDF.it para convertir un PDF en un archivo de texto plano (.txt) en segundos. Perfecto para copiar contenido en notas, documentos, correos o herramientas de IA — sin tener que reescribir nada. Sube tu PDF, convierte y descarga el texto extraido al instante.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Convierte PDF a TXT para copiar y editar rapidamente</li>
              <li className="flex items-center gap-2">✓ Extrae texto de reportes, articulos, facturas y formularios</li>
              <li className="flex items-center gap-2">✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li className="flex items-center gap-2">✓ Sin instalacion — funciona desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to TXT"
          outputFormat="TXT"
          processingMessage="Extracting text from your PDF..."
          successMessage="Your text file is ready!"
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
                { title: "Extrae Texto de PDF a TXT", desc: "Convierte paginas de PDF en un archivo de texto limpio que puedes editar en cualquier lugar. PDF.it exporta tu contenido como texto plano, facilitando pegarlo en Word, Google Docs, Notion, correos o editores de codigo." },
                { title: "Resultado Limpio y Facil de Copiar", desc: "La salida TXT es ideal cuando quieres las palabras sin el formato. Tambien es liviana y compatible con todos los dispositivos y aplicaciones." },
                { title: "Conversion Rapida Online en Cualquier Dispositivo", desc: "Convierte PDF a texto desde cualquier navegador moderno — computadora o celular — sin descargas ni instalaciones." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Convertir PDF a Texto</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Sube tu PDF", desc: "Arrastra y suelta o haz clic para elegir un archivo" },
                { num: "2", title: "Haz clic en Convertir", desc: "El proceso toma solo unos segundos" },
                { num: "3", title: "Descarga tu archivo .txt", desc: "Listo para copiar, editar y compartir" },
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
                { name: "PDF a JPG", href: "/es/pdf-a-jpg", desc: "Extrae paginas como imagenes" },
                { name: "PDF a PNG", href: "/es/pdf-a-png", desc: "Imagenes sin perdida de calidad" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamano del PDF" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Convierte solo las paginas que necesitas" },
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                {
                  q: "¿Puedo convertir cualquier PDF a un archivo TXT?",
                  a: "La mayoria de los PDFs con texto se convierten bien. Si tu PDF es escaneado (solo imagen), necesitaras OCR para extraer el texto.",
                },
                {
                  q: "¿PDF.it mantiene el formato del PDF?",
                  a: "TXT es texto plano, asi que el formato como fuentes, columnas y espaciado puede no conservarse. Si necesitas mantener el diseno, usa nuestra herramienta PDF a Word.",
                },
                {
                  q: "¿Por que mi texto convertido se ve desordenado?",
                  a: "Algunos PDFs almacenan texto en columnas o bloques posicionados. La exportacion a TXT sigue la estructura interna del PDF, lo que puede reordenar las lineas.",
                },
                {
                  q: "¿Puedo convertir PDF a TXT en mi celular?",
                  a: "Si. Abre PDF.it en tu navegador movil, sube el PDF, convierte y descarga el archivo TXT.",
                },
                {
                  q: "¿Es seguro subir mi PDF?",
                  a: "Si. Todas las transferencias estan cifradas con SSL y tus archivos se eliminan inmediatamente despues de tu sesion.",
                },
                {
                  q: "¿Para que sirve convertir PDF a texto?",
                  a: "Es ideal para copiar contenido en notas, documentos, correos o herramientas de IA — sin tener que volver a escribir todo manualmente.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
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

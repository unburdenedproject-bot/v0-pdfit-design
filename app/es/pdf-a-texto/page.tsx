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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Type className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PDF a Texto Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Extrae texto limpio y editable de cualquier PDF. Convierte a un archivo .txt plano para copiar, tomar notas y editar rapidamente.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Texto Puro</span>
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
          toolName="PDF to TXT"
          outputFormat="TXT"
          processingMessage="Extracting text from your PDF..."
          successMessage="Your text file is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa el convertidor de PDF a TXT de PDF.it para convertir un PDF en un archivo de texto plano (.txt) en segundos. Perfecto para copiar contenido en notas, documentos, correos o herramientas de IA — sin tener que reescribir nada. Sube tu PDF, convierte y descarga el texto extraido al instante.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convierte PDF a TXT para copiar y editar rapidamente</li>
              <li>✓ Extrae texto de reportes, articulos, facturas y formularios</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalacion — funciona desde tu navegador</li>
              <li>✓ Ideal para buscar, citar y reutilizar contenido</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extrae Texto de PDF a TXT</h2>
              <p className="text-slate-600">
                Convierte paginas de PDF en un archivo de texto limpio que puedes editar en cualquier lugar. PDF.it exporta tu contenido como texto plano, facilitando pegarlo en Word, Google Docs, Notion, correos o editores de codigo.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Resultado Limpio y Facil de Copiar</h2>
              <p className="text-slate-600">
                La salida TXT es ideal cuando quieres las palabras sin el formato. Tambien es liviana y compatible con todos los dispositivos y aplicaciones.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Conversion Rapida Online en Cualquier Dispositivo</h2>
              <p className="text-slate-600">
                Convierte PDF a texto desde cualquier navegador moderno — computadora o celular — sin descargas ni instalaciones.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Convertir PDF a Texto</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Haz clic en Convertir PDF a TXT.",
                "Descarga tu archivo .txt.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
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
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="rounded-xl p-4 transition-all text-center flex flex-col justify-center min-h-[80px] hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(20,216,196,0.25)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.2)" }}
                >
                  <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-400">{tool.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
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
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
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

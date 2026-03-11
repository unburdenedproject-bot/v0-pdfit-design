import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { OcrPdfInterface } from "@/components/ocr-pdf-interface"
import { TrustBadges } from "@/components/trust-badges"
import { Scan, Zap, Shield, Download, Crown } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Escaner OCR Online — Extraer Texto de PDF Escaneado | OmnisPDF",
  description:
    "Ejecuta OCR en un PDF con OmnisPDF para extraer texto de escaneos. Haz tus PDFs buscables y copiables en segundos — rapido y desde tu navegador.",
  alternates: {
    canonical: "https://omnispdf.com/es/escaner-ocr",
    languages: {
      en: "https://omnispdf.com/ocr-scanner",
      es: "https://omnispdf.com/es/escaner-ocr",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Que es OCR para PDFs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OCR (Reconocimiento Optico de Caracteres) detecta texto dentro de PDFs escaneados o basados en imagenes y lo convierte en texto seleccionable y buscable.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuando necesito OCR en vez de PDF a TXT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si el PDF es un escaneo y no puedes seleccionar texto, necesitas OCR. Si el PDF ya contiene texto seleccionable, una conversion normal de PDF a TXT puede ser mas rapida.",
      },
    },
    {
      "@type": "Question",
      name: "¿Que tan preciso es el OCR de OmnisPDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La precision depende de la claridad del escaneo, la resolucion y la fuente. Escaneos limpios y de alta resolucion producen los mejores resultados. Escaneos borrosos o torcidos reducen la precision.",
      },
    },
    {
      "@type": "Question",
      name: "¿Que idiomas soporta el Escaner OCR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Escaner OCR soporta mas de 16 idiomas incluyendo espanol, ingles, frances, aleman, portugues, italiano, holandes y mas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es seguro subir documentos escaneados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Todas las transferencias estan cifradas con SSL y tus archivos se eliminan inmediatamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cual es el tamano maximo de archivo para OCR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las cuentas Pro y Business pueden subir archivos de hasta 200MB.",
      },
    },
  ],
}

export default function EscanerOCRPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderEs />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Scan className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-black">Escaner OCR Online</h1>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Usa OmnisPDF para ejecutar OCR en PDFs escaneados — convierte imagenes en texto seleccionable y buscable, y descarga un PDF mas limpio y util.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>16+ Idiomas Soportados</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesion</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>PDF Buscable</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* OCR Interface */}
        <OcrPdfInterface />
        <TrustBadges />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa la herramienta de OCR de OmnisPDF para extraer texto de PDFs escaneados y hacer tus documentos buscables y copiables. Perfecto para recibos, facturas, contratos, formularios y escaneos archivados — sube tu PDF, ejecuta OCR y descarga un archivo procesado en segundos.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convierte PDFs escaneados en PDFs buscables</li>
              <li>✓ Haz el texto seleccionable y copiable — sin volver a escribir</li>
              <li>✓ Mejora la utilidad del documento para busqueda, citas y edicion</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalacion — el OCR se ejecuta en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Haz PDFs Escaneados Buscables</h2>
              <p className="text-slate-600">
                Si tu PDF es un escaneo, a menudo es solo una imagen — no puedes seleccionar texto ni buscar palabras. El OCR de OmnisPDF reconoce el texto y crea un PDF buscable que puedes usar como un documento normal.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extrae Texto de Escaneos PDF</h2>
              <p className="text-slate-600">
                ¿Necesitas las palabras de un documento escaneado? El OCR extrae texto de paginas basadas en imagenes para que puedas copiar y pegar contenido en notas, correo, Word o un archivo TXT.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Funciona con Recibos, Formularios, Contratos y Facturas</h2>
              <p className="text-slate-600">
                El OCR es especialmente util para documentos y archivos donde necesitas buscar, encontrar palabras clave o reutilizar texto rapidamente.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Hacer OCR a un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF escaneado a OmnisPDF.",
                "Elige el idioma de OCR si es necesario.",
                "Haz clic en Ejecutar OCR.",
                "Descarga tu PDF buscable.",
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF a Texto", href: "/es/pdf-a-texto", desc: "Extrae texto de PDFs con texto" },
                { name: "Rotar PDF", href: "/es/rotar-pdf", desc: "Corrige escaneos torcidos antes del OCR" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamano antes del OCR" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "OCR solo las paginas que necesitas" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="border border-orange-200 bg-orange-50 rounded-xl p-4 hover:border-orange-400 hover:bg-orange-100 transition-all text-center flex flex-col justify-center min-h-[80px]"
                >
                  <div className="font-bold text-orange-600 text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-500">{tool.desc}</div>
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
                  q: "¿Que es OCR para PDFs?",
                  a: "OCR (Reconocimiento Optico de Caracteres) detecta texto dentro de PDFs escaneados o basados en imagenes y lo convierte en texto seleccionable y buscable.",
                },
                {
                  q: "¿Cuando necesito OCR en vez de PDF a TXT?",
                  a: "Si el PDF es un escaneo y no puedes seleccionar texto, necesitas OCR. Si el PDF ya contiene texto seleccionable, una conversion normal de PDF a TXT puede ser mas rapida.",
                },
                {
                  q: "¿Que tan preciso es el OCR de OmnisPDF?",
                  a: "La precision depende de la claridad del escaneo, la resolucion y la fuente. Escaneos limpios y de alta resolucion producen los mejores resultados. Escaneos borrosos o torcidos reducen la precision.",
                },
                {
                  q: "¿Que idiomas soporta el Escaner OCR?",
                  a: "El Escaner OCR soporta mas de 16 idiomas incluyendo espanol, ingles, frances, aleman, portugues, italiano, holandes y mas.",
                },
                {
                  q: "¿Es seguro subir documentos escaneados?",
                  a: "Si. Todas las transferencias estan cifradas con SSL y tus archivos se eliminan inmediatamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos.",
                },
                {
                  q: "¿Cual es el tamano maximo de archivo para OCR?",
                  a: "Las cuentas Pro y Business pueden subir archivos de hasta 200MB.",
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

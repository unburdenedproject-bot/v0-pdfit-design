import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Scan, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "OCR PDF — Reconocimiento Óptico de Caracteres en PDFs | PDF.it",
  description:
    "Aplica OCR a tus PDFs con PDF.it. Reconocimiento optico de caracteres para extraer texto de documentos escaneados y hacerlos buscables y editables — rapido y seguro.",
  alternates: {
    canonical: "https://pdf.it.com/es/ocr-pdf",
    languages: {
      en: "https://pdf.it.com/ocr-pdf",
      es: "https://pdf.it.com/es/ocr-pdf",
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
        text: "OCR (Reconocimiento Optico de Caracteres) es una tecnologia que analiza imagenes dentro de PDFs escaneados, detecta letras y palabras, y las convierte en texto digital seleccionable, buscable y editable.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuando necesito aplicar OCR a un PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Necesitas OCR cuando tu PDF es un escaneo (imagen) y no puedes seleccionar ni copiar texto. Si el PDF ya tiene texto seleccionable, puedes usar herramientas de extraccion de texto directamente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Que tan preciso es el OCR de PDF.it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La precision depende de la calidad del escaneo, la resolucion y la tipografia. Escaneos limpios y de alta resolucion producen los mejores resultados. Escaneos borrosos o con baja resolucion pueden reducir la precision.",
      },
    },
    {
      "@type": "Question",
      name: "¿Que idiomas soporta el OCR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El OCR de PDF.it soporta mas de 16 idiomas incluyendo espanol, ingles, frances, aleman, portugues, italiano, holandes y mas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es seguro subir mis documentos para OCR?",
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
        text: "Las cuentas Pro y Business pueden subir archivos de hasta 200MB para procesamiento OCR.",
      },
    },
  ],
}

export default function OCRPDFPage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Scan className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-black">OCR PDF</h1>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Aplica reconocimiento optico de caracteres a tus PDFs. Extrae texto de documentos escaneados y hazlos buscables y editables.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>16+ Idiomas Soportados</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>Archivos Eliminados Tras la Sesion</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>Texto Extraido</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="OCR Scanner"
          outputFormat="TXT"
          processingMessage="Aplicando OCR a tu PDF..."
          successMessage="¡El OCR ha sido completado!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa la herramienta de OCR PDF de PDF.it para aplicar reconocimiento optico de caracteres a tus documentos PDF escaneados. El OCR analiza cada pagina, detecta texto dentro de imagenes y lo convierte en texto digital que puedes copiar, buscar y editar. Ideal para digitalizar documentos fisicos.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Aplica OCR a PDFs escaneados para extraer texto</li>
              <li>✓ Soporta mas de 16 idiomas incluyendo espanol</li>
              <li>✓ Haz tus PDFs buscables y el texto copiable</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalacion — el OCR se ejecuta desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Documentos Escaneados a Texto Digital</h2>
              <p className="text-slate-600">
                Si tu PDF es un escaneo, el texto existe solo como imagen — no puedes seleccionarlo ni buscarlo. El OCR de PDF.it reconoce cada caracter y lo convierte en texto digital real que puedes usar como cualquier otro texto.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Libros Digitalizados y Material de Lectura</h2>
              <p className="text-slate-600">
                Aplica OCR a libros escaneados, articulos y material de lectura para hacer el texto buscable. Encuentra palabras clave, copia citas y extrae informacion sin leer pagina por pagina.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Facturas y Documentos Comerciales</h2>
              <p className="text-slate-600">
                Extrae texto de facturas, recibos y documentos comerciales escaneados. Digitaliza tus registros para facilitar la contabilidad, auditorias y busquedas de informacion.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Formularios Impresos y Registros</h2>
              <p className="text-slate-600">
                Convierte formularios impresos, solicitudes y registros escaneados en texto editable. Ideal para migrar archivos fisicos a sistemas digitales.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Aplicar OCR a un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF escaneado a PDF.it.",
                "Selecciona el idioma del documento si es necesario.",
                "Haz clic en Aplicar OCR.",
                "Descarga tu archivo con el texto extraido.",
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
                { name: "Escaner OCR", href: "/es/escaner-ocr", desc: "OCR completo con selector de idioma" },
                { name: "Convertir PDF Escaneado", href: "/es/convertir-pdf-escaneado", desc: "PDFs escaneados a texto" },
                { name: "Escanear PDF a Texto", href: "/es/escanear-pdf-a-texto", desc: "Escaneo directo a texto" },
                { name: "PDF a Texto", href: "/es/pdf-a-texto", desc: "Extrae texto de PDFs digitales" },
                { name: "Limpiar Escaneo", href: "/es/limpiar-escaneo", desc: "Mejora calidad de escaneos" },
                { name: "Comprimir PDF Escaneado", href: "/es/comprimir-pdf-escaneado", desc: "Reduce tamano de escaneos" },
                { name: "Rotar PDF", href: "/es/rotar-pdf", desc: "Corrige orientacion de escaneos" },
                { name: "PDF a Word", href: "/es/pdf-a-word", desc: "Convierte PDF a documento Word" },
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
                { q: "¿Que es OCR para PDFs?", a: "OCR (Reconocimiento Optico de Caracteres) es una tecnologia que analiza imagenes dentro de PDFs escaneados, detecta letras y palabras, y las convierte en texto digital seleccionable, buscable y editable." },
                { q: "¿Cuando necesito aplicar OCR a un PDF?", a: "Necesitas OCR cuando tu PDF es un escaneo (imagen) y no puedes seleccionar ni copiar texto. Si el PDF ya tiene texto seleccionable, puedes usar herramientas de extraccion de texto directamente." },
                { q: "¿Que tan preciso es el OCR de PDF.it?", a: "La precision depende de la calidad del escaneo, la resolucion y la tipografia. Escaneos limpios y de alta resolucion producen los mejores resultados. Escaneos borrosos o con baja resolucion pueden reducir la precision." },
                { q: "¿Que idiomas soporta el OCR?", a: "El OCR de PDF.it soporta mas de 16 idiomas incluyendo espanol, ingles, frances, aleman, portugues, italiano, holandes y mas." },
                { q: "¿Es seguro subir mis documentos para OCR?", a: "Si. Todas las transferencias estan cifradas con SSL y tus archivos se eliminan inmediatamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos." },
                { q: "¿Cual es el tamano maximo de archivo para OCR?", a: "Las cuentas Pro y Business pueden subir archivos de hasta 200MB para procesamiento OCR." },
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

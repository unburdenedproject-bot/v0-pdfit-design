import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { ImageIcon, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Convertir PDF a JPG Online — Gratis y Sin Registro | OmnisPDF",
  description:
    "Convierte PDF a JPG en segundos con OmnisPDF. Exporta cada pagina como imagen JPEG de alta calidad y descarga al instante — sin instalar nada.",
  alternates: {
    canonical: "https://omnispdf.com/es/pdf-a-jpg",
    languages: {
      en: "https://omnispdf.com/pdf-to-jpg",
      es: "https://omnispdf.com/es/pdf-a-jpg",
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
        text: "Si. OmnisPDF convierte cada pagina del PDF en una imagen JPG individual que puedes descargar por separado.",
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
        text: "Si. OmnisPDF funciona en navegadores moviles — sube tu PDF, convierte y descarga tus imagenes JPG.",
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
      name: "¿OmnisPDF agrega marcas de agua?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. OmnisPDF no agrega marcas de agua a tus archivos JPG convertidos.",
      },
    },
  ],
}

export default function PDFaJPGPage() {
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
                <ImageIcon className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PDF a JPG Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convierte un PDF en imagenes JPG nitidas en segundos con OmnisPDF — rapido, sencillo y desde tu navegador.
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
                  <span>Descarga en ZIP</span>
                </div>
              </div>
            </div>
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

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa el convertidor de PDF a JPG de OmnisPDF para exportar las paginas de tu PDF como imagenes JPEG de alta calidad. Sube tu archivo, convierte en segundos y descarga cada pagina como imagen individual — perfecto para compartir, presentaciones, vistas previas y correos.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convierte paginas completas de PDF en imagenes JPG</li>
              <li>✓ Resultado nitido y legible para texto, graficos y diagramas</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalacion — funciona desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Convierte Paginas de PDF a Imagenes JPG</h2>
              <p className="text-slate-600">
                Transforma cada pagina de tu PDF en una imagen JPG. Cada pagina se convierte en un archivo independiente que puedes usar en presentaciones, correos, documentos o redes sociales.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Mantiene los Disenos Limpios y Claros</h2>
              <p className="text-slate-600">
                OmnisPDF preserva el diseno de la pagina para que tu contenido se vea legible y profesional despues de la conversion.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Descarga Instantanea</h2>
              <p className="text-slate-600">
                Descarga tus JPGs inmediatamente despues de la conversion. Todas las paginas se empaquetan en un archivo ZIP para descargar con un solo clic.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Convertir PDF a JPG</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a OmnisPDF.",
                "Haz clic en Convertir PDF a JPG.",
                "Descarga tus imagenes JPG — una por pagina.",
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
                { name: "PDF a PNG", href: "/es/pdf-a-png", desc: "Imagenes sin perdida de calidad" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamano antes de convertir" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Convierte solo las paginas que necesitas" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina varios PDFs en uno" },
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
                  q: "¿Puedo convertir un PDF de varias paginas a JPG?",
                  a: "Si. OmnisPDF convierte cada pagina del PDF en una imagen JPG individual que puedes descargar por separado.",
                },
                {
                  q: "¿Convertir PDF a JPG reduce la calidad?",
                  a: "La calidad depende del PDF original. Los PDFs de alta resolucion producen JPGs nitidos; los escaneos de baja resolucion pueden verse mas suaves.",
                },
                {
                  q: "¿Cual es la diferencia entre JPG y PNG para paginas de PDF?",
                  a: "JPG generalmente crea archivos mas pequenos y es ideal para compartir. PNG es mejor para texto muy nitido y graficos. Prueba nuestra herramienta PDF a PNG si necesitas salida sin perdida.",
                },
                {
                  q: "¿Funciona en iPhone y Android?",
                  a: "Si. OmnisPDF funciona en navegadores moviles — sube tu PDF, convierte y descarga tus imagenes JPG.",
                },
                {
                  q: "¿Es seguro subir mi PDF?",
                  a: "Si. Los archivos se transfieren por HTTPS y se eliminan automaticamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos.",
                },
                {
                  q: "¿OmnisPDF agrega marcas de agua?",
                  a: "No. OmnisPDF no agrega marcas de agua a tus archivos JPG convertidos.",
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

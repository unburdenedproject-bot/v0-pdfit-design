import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Image, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extraer Imágenes de PDF Online — Descargar Fotos de PDF | PDF.it",
  description:
    "Extrae todas las imágenes de archivos PDF con PDF.it. Saca fotos, logos y gráficos de cualquier PDF — rápido, desde tu navegador, sin registro.",
  alternates: {
    languages: {
      en: "/extract-images-from-pdf",
      es: "/es/extraer-imagenes-de-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo extraigo imágenes de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it, haz clic en Extraer y descarga un archivo ZIP con todas las imágenes encontradas en tu PDF." }
    },
    {
      "@type": "Question",
      "name": "¿En qué formatos se extraen las imágenes?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it extrae las imágenes en su formato original — generalmente JPG o PNG. Las imágenes se descargan como archivo ZIP." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la diferencia entre extraer imágenes y convertir PDF a JPG?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF a JPG convierte cada página en una imagen. Extraer Imágenes saca solo las fotos, logos y gráficos incrustados — no el diseño completo de la página." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo extraer imágenes de un PDF escaneado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los PDFs escaneados tratan toda la página como una sola imagen. Puedes extraerla, pero será el escaneo completo de la página en vez de gráficos individuales." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo extraer imágenes de un PDF desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube, extrae y descarga desde tu iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis extraer imágenes de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Las cuentas gratuitas tienen 10 extracciones por día. Las cuentas Pro tienen extracciones ilimitadas." }
    }
  ]
}

export default function ExtraerImagenesDePDFPage() {
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
                <Image className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extraer Imágenes de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Saca todas las fotos, logos y gráficos incrustados en tu PDF. Descárgalos como archivo ZIP — instantáneo y desde tu navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Todas las Imágenes Extraídas</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
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

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              ¿Necesitas las fotos o gráficos de un PDF sin el texto y el diseño? El extractor de imágenes de PDF.it saca cada imagen incrustada — fotos, logos, gráficos, diagramas — y las entrega como un archivo ZIP que puedes usar en cualquier lugar.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Extrae todas las imágenes incrustadas de cualquier PDF</li>
              <li>✓ Imágenes guardadas en su formato original (JPG, PNG)</li>
              <li>✓ Perfecto para reutilizar fotos, logos y gráficos</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — extrae imágenes en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Reutiliza Fotos y Gráficos de PDFs</h2>
              <p className="text-slate-600">
                ¿Recibiste un folleto, presentación o informe en PDF? Extrae las imágenes para reutilizarlas en tus propios documentos, diapositivas o redes sociales sin necesidad de capturas de pantalla.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extrae Logos y Recursos de Marca</h2>
              <p className="text-slate-600">
                Saca logos, íconos y gráficos de marca de guías de estilo PDF, materiales de marketing y documentos corporativos — obtén los archivos de imagen originales al instante.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Diferente a PDF a JPG</h2>
              <p className="text-slate-600">
                PDF a JPG convierte páginas completas en imágenes. La extracción de imágenes saca solo los gráficos incrustados — fotos, gráficos, logos — separados del diseño de la página.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Extraer Imágenes de un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Haz clic en Extraer Imágenes — todas las imágenes incrustadas se detectan automáticamente.",
                "Descarga el archivo ZIP con todas las imágenes extraídas.",
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF a JPG", href: "/es/pdf-a-jpg", desc: "Convierte páginas a imágenes" },
                { name: "PDF a PNG", href: "/es/pdf-a-png", desc: "Convierte páginas a PNG" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño del archivo" },
                { name: "Escáner OCR", href: "/ocr-scanner", desc: "Extrae texto de escaneos" },
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
                { q: "¿Cómo extraigo imágenes de un PDF?", a: "Sube tu PDF a PDF.it, haz clic en Extraer y descarga un archivo ZIP con todas las imágenes encontradas en tu PDF." },
                { q: "¿En qué formatos se extraen las imágenes?", a: "PDF.it extrae las imágenes en su formato original — generalmente JPG o PNG. Las imágenes se descargan como archivo ZIP." },
                { q: "¿Cuál es la diferencia entre extraer imágenes y convertir PDF a JPG?", a: "PDF a JPG convierte cada página en una imagen. Extraer Imágenes saca solo las fotos, logos y gráficos incrustados — no el diseño completo de la página." },
                { q: "¿Puedo extraer imágenes de un PDF escaneado?", a: "Los PDFs escaneados tratan toda la página como una sola imagen. Puedes extraerla, pero será el escaneo completo de la página en vez de gráficos individuales." },
                { q: "¿Puedo extraer imágenes de un PDF desde mi celular?", a: "Sí. PDF.it funciona en navegadores móviles — sube, extrae y descarga desde tu iPhone o Android." },
                { q: "¿Es gratis extraer imágenes de un PDF?", a: "Sí. Las cuentas gratuitas tienen 10 extracciones por día. Las cuentas Pro tienen extracciones ilimitadas." },
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

import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { SplitPdfInterface } from "@/components/split-pdf-interface"
import { Scissors, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Dividir PDF por Tamaño — Separa PDFs en Archivos de Tamaño Específico | PDF.it",
  description:
    "Divide un PDF en archivos de un tamaño específico con PDF.it. Separa PDFs para que cada parte sea menor a 5MB, 10MB o el límite que necesites — rápido y gratis.",
  alternates: {
    languages: {
      en: "/split-pdf-by-size",
      es: "/es/dividir-pdf-por-tamano",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué tamaños objetivo puedo elegir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Puedes definir el tamaño máximo que deseas para cada archivo resultante — por ejemplo, 5MB, 10MB o 25MB. PDF.it dividirá el PDF en partes que no excedan ese límite." }
    },
    {
      "@type": "Question",
      "name": "¿Qué tan precisa es la división por tamaño?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it divide por páginas completas, por lo que cada archivo resultante estará lo más cerca posible del tamaño objetivo sin excederlo. El tamaño exacto depende del contenido de cada página." }
    },
    {
      "@type": "Question",
      "name": "¿Se mantiene la calidad al dividir por tamaño?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Las páginas se extraen directamente del PDF original sin recodificar ni comprimir. El texto, las imágenes y el formato permanecen intactos." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo dividir un PDF para enviarlo por WhatsApp?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. WhatsApp tiene un límite de 100MB para documentos. Si tu PDF excede ese límite, divídelo en partes más pequeñas y envía cada una por separado." }
    },
    {
      "@type": "Question",
      "name": "¿Funciona en celulares?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube, divide y descarga desde iPhone o Android sin instalar ninguna app." }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis dividir PDFs por tamaño?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes dividir PDFs de hasta 25MB gratis. Para archivos más grandes (hasta 200MB), actualiza a Pro." }
    }
  ]
}

export default function DividirPDFPorTamanoPage() {
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
                <Scissors className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Dividir PDF por Tamaño</h1>
              <p className="text-xl text-slate-300 mb-8">
                Separa un PDF en archivos de un tamaño específico. Define el límite máximo por archivo — por ejemplo, cada uno menor a 5MB — y PDF.it se encarga del resto.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Tamaño Objetivo Personalizado</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Interface */}
        <SplitPdfInterface />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Muchas plataformas y servicios tienen límites de tamaño para archivos. Con la herramienta de Dividir PDF por Tamaño de PDF.it, puedes definir un tamaño máximo y el sistema dividirá tu PDF en partes que no excedan ese límite — sin perder calidad ni formato.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Define el tamaño máximo por archivo (5MB, 10MB, 25MB, etc.)</li>
              <li>✓ División automática en partes que cumplen el límite</li>
              <li>✓ Sin pérdida de calidad — extracción directa del original</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — divide en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Adjuntos de Email</h2>
              <p className="text-slate-600">
                La mayoría de los proveedores de email limitan los adjuntos a 25MB. Divide tu PDF en partes que cumplan con ese límite y envía cada una por separado.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Portales de Carga</h2>
              <p className="text-slate-600">
                Portales gubernamentales, sistemas de RRHH y plataformas de envío suelen tener límites estrictos de tamaño. Divide tu PDF para cumplir con los requisitos del portal sin perder contenido.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Compartir por WhatsApp</h2>
              <p className="text-slate-600">
                WhatsApp tiene límites de tamaño para documentos. Divide tu PDF pesado en partes más pequeñas para compartirlo fácilmente por chat.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Almacenamiento Limitado</h2>
              <p className="text-slate-600">
                Si necesitas guardar partes de un PDF en dispositivos con almacenamiento limitado o servicios en la nube con cuotas, divide el archivo en partes que se ajusten al espacio disponible.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Dividir un PDF por Tamaño</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Define el tamaño máximo para cada archivo resultante.",
                "Haz clic en Dividir PDF y descarga tus archivos.",
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
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Herramienta estándar de división" },
                { name: "Dividir PDF Grande", href: "/es/dividir-pdf-grande", desc: "Separa PDFs pesados" },
                { name: "Dividir por Páginas", href: "/es/dividir-pdf-por-paginas", desc: "Elige qué páginas separar" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño del archivo" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina PDFs en uno" },
                { name: "Extraer Páginas", href: "/es/extraer-paginas-de-pdf", desc: "Saca páginas específicas" },
                { name: "Eliminar Páginas", href: "/es/eliminar-paginas-de-pdf", desc: "Quita páginas no deseadas" },
                { name: "Rotar PDF", href: "/es/rotar-pdf", desc: "Corrige la orientación" },
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
                { q: "¿Qué tamaños objetivo puedo elegir?", a: "Puedes definir el tamaño máximo que deseas para cada archivo resultante — por ejemplo, 5MB, 10MB o 25MB. PDF.it dividirá el PDF en partes que no excedan ese límite." },
                { q: "¿Qué tan precisa es la división por tamaño?", a: "PDF.it divide por páginas completas, por lo que cada archivo resultante estará lo más cerca posible del tamaño objetivo sin excederlo. El tamaño exacto depende del contenido de cada página." },
                { q: "¿Se mantiene la calidad al dividir por tamaño?", a: "Sí. Las páginas se extraen directamente del PDF original sin recodificar ni comprimir. El texto, las imágenes y el formato permanecen intactos." },
                { q: "¿Puedo dividir un PDF para enviarlo por WhatsApp?", a: "Sí. WhatsApp tiene un límite de 100MB para documentos. Si tu PDF excede ese límite, divídelo en partes más pequeñas y envía cada una por separado." },
                { q: "¿Funciona en celulares?", a: "Sí. PDF.it funciona en navegadores móviles — sube, divide y descarga desde iPhone o Android sin instalar ninguna app." },
                { q: "¿Es gratis dividir PDFs por tamaño?", a: "Sí. Puedes dividir PDFs de hasta 25MB gratis. Para archivos más grandes (hasta 200MB), actualiza a Pro." },
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

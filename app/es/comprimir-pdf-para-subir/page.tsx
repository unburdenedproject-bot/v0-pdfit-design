import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF para Subir — Reduce el Tamaño para Portales de Carga | PDF.it",
  description:
    "Comprime PDFs para cumplir límites de portales de carga. Reduce el tamaño para formularios web, solicitudes y envíos en línea.",
  alternates: {
    languages: {
      en: "/compress-pdf-for-upload",
      es: "/es/comprimir-pdf-para-subir",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo comprimo un PDF para un portal de carga?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it y haz clic en Comprimir. La compresión recomendada reduce el tamaño del archivo optimizando imágenes y la estructura interna, ayudándote a cumplir con los límites de subida del portal." }
    },
    {
      "@type": "Question",
      "name": "¿Mi PDF comprimido será aceptado por portales gubernamentales?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it produce archivos PDF estándar que son aceptados por todos los portales principales. El texto se mantiene nítido y legible, y la estructura del archivo es válida para cualquier sistema que acepte PDFs." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir un PDF para cumplir un límite de tamaño específico?",
      "acceptedAnswer": { "@type": "Answer", "text": "La compresión recomendada reduce significativamente el tamaño del archivo, pero el resultado exacto depende del contenido de tu PDF. Los documentos con mucho texto se comprimen muy bien. Si el archivo sigue siendo muy grande, intenta dividirlo en partes y comprimir cada una." }
    },
    {
      "@type": "Question",
      "name": "¿Se afectará la calidad del documento al comprimirlo?",
      "acceptedAnswer": { "@type": "Answer", "text": "El texto se mantiene nítido y completamente legible. Las imágenes conservan buen detalle con la compresión recomendada. El documento sigue siendo completamente utilizable para envíos oficiales y subidas a portales." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir PDFs para subir desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en cualquier navegador móvil. Sube tu PDF, comprímelo y descarga el archivo más pequeño directamente en tu iPhone o Android — sin necesidad de instalar una app." }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si mi PDF sigue siendo muy grande después de comprimirlo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Intenta dividir el PDF en secciones más pequeñas con nuestra herramienta Dividir PDF, luego comprime cada parte por separado. También puedes aplanar el PDF o eliminar páginas innecesarias antes de comprimir." }
    }
  ]
}

export default function ComprimirPDFParaSubirPageEs() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema-es"
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
                <Compress className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Subir</h1>
              <p className="text-xl text-slate-300 mb-8">
                Muchos portales de carga tienen límites estrictos de tamaño. Comprime tu PDF para cumplir con los requisitos de formularios web, solicitudes de empleo, trámites gubernamentales y envíos en línea — rápido, gratis y desde el navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Compresión Inteligente</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Después de la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Compress PDF"
          outputFormat="PDF"
          processingMessage="Comprimiendo tu PDF para subir..."
          successMessage="¡Tu PDF listo para subir está listo!"
          compressionLevel="recommended"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Qué Comprimir un PDF para Portales de Carga?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Los sitios web gubernamentales, sistemas de admisión universitaria, portales de solicitud de empleo y formularios de trámites en línea a menudo aplican límites estrictos de tamaño — a veces tan bajos como 1MB o 2MB. Si tu PDF excede el límite, la subida falla. PDF.it comprime tu archivo para que cumpla con estos requisitos sin perder legibilidad.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Compresión inteligente para cumplir límites de portales</li>
              <li>&#10003; Produce PDFs estándar aceptados por todos los sistemas</li>
              <li>&#10003; El texto se mantiene nítido y legible para envíos oficiales</li>
              <li>&#10003; Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>&#10003; Sin instalación — comprime PDFs en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comunes</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Solicitudes de Empleo</h3>
                <p className="text-slate-600">
                  Muchas bolsas de trabajo y sistemas de seguimiento de candidatos limitan la subida de currículums y cartas de presentación a unos pocos megabytes. Comprime tus documentos de solicitud para que se suban sin errores en LinkedIn, Indeed, Workday y otras plataformas.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Formularios Gubernamentales</h3>
                <p className="text-slate-600">
                  Declaraciones de impuestos, solicitudes de permisos, formularios de visa y trámites regulatorios a menudo tienen límites estrictos de subida. Comprime tus PDFs para cumplir con los requisitos de portales gubernamentales y evitar errores de envío.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Portales Educativos</h3>
                <p className="text-slate-600">
                  Los portales de solicitud de universidades y posgrados a menudo requieren expedientes académicos, cartas de recomendación y ensayos personales bajo límites estrictos de tamaño. Comprime tus documentos para cumplir con estos requisitos sin perder legibilidad.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Plataformas de Envío</h3>
                <p className="text-slate-600">
                  Los portales de seguros, plataformas de licitación y sistemas de envío de documentos frecuentemente limitan la subida a tamaños pequeños. Comprime recibos escaneados, registros y formularios para que se suban exitosamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Comprimir un PDF para Subir</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra y suelta tu PDF en PDF.it.",
                "Haz clic en Comprimir PDF — la compresión recomendada se aplica automáticamente para reducir el tamaño del archivo.",
                "Descarga tu PDF más pequeño y súbelo al portal. Si aún es muy grande, prueba dividir el archivo primero y luego comprime cada parte.",
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
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Más Herramientas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Comprimir PDF", desc: "Compresión estándar.", href: "/es/comprimir-pdf", icon: Compress },
                { name: "Comprimir a 1MB", desc: "Para límites de 1MB.", href: "/es/comprimir-pdf-a-1mb", icon: Compress },
                { name: "Comprimir a 2MB", desc: "Para límites de 2MB.", href: "/es/comprimir-pdf-a-2mb", icon: Compress },
                { name: "Comprimir a 5MB", desc: "Para límites de 5MB.", href: "/es/comprimir-pdf-a-5mb", icon: Compress },
                { name: "Dividir PDF", desc: "Divide si aún es muy grande.", href: "/es/dividir-pdf", icon: Scissors },
                { name: "Unir PDF", desc: "Combina varios PDFs.", href: "/es/unir-pdf", icon: Merge },
                { name: "Aplanar PDF", desc: "Elimina campos y anotaciones.", href: "/es/aplanar-pdf", icon: FileText },
                { name: "Rotar PDF", desc: "Corrige la orientación.", href: "/es/rotar-pdf", icon: RotateCw },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{tool.desc}</p>
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
                { q: "¿Cómo comprimo un PDF para un portal de carga?", a: "Sube tu PDF a PDF.it y haz clic en Comprimir. La compresión recomendada reduce el tamaño del archivo optimizando imágenes y la estructura interna, ayudándote a cumplir con los límites de subida del portal." },
                { q: "¿Mi PDF comprimido será aceptado por portales gubernamentales?", a: "Sí. PDF.it produce archivos PDF estándar que son aceptados por todos los portales principales. El texto se mantiene nítido y legible, y la estructura del archivo es válida para cualquier sistema que acepte PDFs." },
                { q: "¿Puedo comprimir un PDF para cumplir un límite de tamaño específico?", a: "La compresión recomendada reduce significativamente el tamaño del archivo, pero el resultado exacto depende del contenido de tu PDF. Los documentos con mucho texto se comprimen muy bien. Si el archivo sigue siendo muy grande, intenta dividirlo en partes y comprimir cada una." },
                { q: "¿Se afectará la calidad del documento al comprimirlo?", a: "El texto se mantiene nítido y completamente legible. Las imágenes conservan buen detalle con la compresión recomendada. El documento sigue siendo completamente utilizable para envíos oficiales y subidas a portales." },
                { q: "¿Puedo comprimir PDFs para subir desde mi celular?", a: "Sí. PDF.it funciona en cualquier navegador móvil. Sube tu PDF, comprímelo y descarga el archivo más pequeño directamente en tu iPhone o Android — sin necesidad de instalar una app." },
                { q: "¿Qué pasa si mi PDF sigue siendo muy grande después de comprimirlo?", a: "Intenta dividir el PDF en secciones más pequeñas con nuestra herramienta Dividir PDF, luego comprime cada parte por separado. También puedes aplanar el PDF o eliminar páginas innecesarias antes de comprimir." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#191B4D] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">¿Necesitas Reducir un PDF para Subir?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Comprime tu PDF en segundos y súbelo sin errores de tamaño. Sin registro, sin instalación, sin esperas.
            </p>
            <Link
              href="/es/comprimir-pdf-para-subir"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Comprimir para Subir Ahora
            </Link>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}

import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { SplitPdfInterface } from "@/components/split-pdf-interface"
import { TrustBadges } from "@/components/trust-badges"
import { Split, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Dividir PDF Online — Separar Páginas de un PDF | PDF.it",
  description:
    "Divide un PDF en páginas separadas o PDFs más pequeños con PDF.it. Extrae páginas por rango y descarga al instante — rápido, sencillo y online.",
  alternates: {
    languages: {
      en: "/split-pdf",
      es: "/es/dividir-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo divido un PDF en varios archivos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it, elige las páginas o rangos que quieras y haz clic en Dividir PDF para descargar los nuevos archivos." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo extraer solo ciertas páginas de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Selecciona los números de página o un rango de páginas y PDF.it creará un nuevo PDF que contenga solo esas páginas." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo dividir un PDF desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube, selecciona páginas, divide y descarga." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo dividir PDFs protegidos con contraseña?",
      "acceptedAnswer": { "@type": "Answer", "text": "Necesitas desbloquear el PDF antes de dividirlo. Usa nuestra herramienta Desbloquear PDF primero." }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro subir mi PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el tamaño máximo de PDF que puedo dividir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las cuentas gratuitas pueden subir archivos de hasta 25MB. Las cuentas Pro pueden subir hasta 200MB. Las cuentas Business pueden subir hasta 1GB." }
    }
  ]
}

export default function DividirPDFPage() {
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
                <Split className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Dividir PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Divide un PDF en archivos más pequeños con PDF.it. Extrae páginas específicas, divide por rangos y descarga PDFs limpios al instante.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Rangos de Páginas Personalizados</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Split Interface */}
        <SplitPdfInterface />
        <TrustBadges />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa la herramienta Dividir PDF de PDF.it para extraer páginas de un PDF o dividir un PDF grande en archivos más pequeños. Elige un rango de páginas, divide por páginas individuales y descarga los PDFs que necesitas — perfecto para compartir, subir y enviar por email.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Divide páginas de PDF en archivos separados</li>
              <li>✓ Extrae un rango de páginas (ej., páginas 3 a 7) en un nuevo PDF</li>
              <li>✓ Crea PDFs más pequeños para email, portales y para imprimir</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — divide PDFs en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extrae Páginas de un PDF</h2>
              <p className="text-slate-600">
                ¿Necesitas solo una parte de un documento? PDF.it te permite sacar las páginas que quieras y guardarlas como un nuevo PDF — ideal para formularios, contratos, capítulos y estados de cuenta.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Divide un PDF en Páginas Individuales</h2>
              <p className="text-slate-600">
                Convierte un PDF en muchos PDFs — un archivo por página — para que puedas subir, compartir u organizar páginas individualmente.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Divide PDFs Grandes para Compartir y Subir</h2>
              <p className="text-slate-600">
                Muchos sistemas de email y portales limitan el tamaño de subida. Dividir te ayuda a cumplir con los límites y enviar solo lo necesario.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Dividir un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Elige cómo dividir: extraer páginas, rangos de páginas o páginas individuales.",
                "Haz clic en Dividir PDF.",
                "Descarga tus nuevos archivos PDF.",
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
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina PDFs después de dividir" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce tamaño antes de dividir" },
                { name: "Rotar PDF", href: "/es/rotar-pdf", desc: "Corrige la orientación" },
                { name: "Proteger PDF", href: "/es/proteger-pdf", desc: "Agrega protección con contraseña" },
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
                  q: "¿Cómo divido un PDF en varios archivos?",
                  a: "Sube tu PDF a PDF.it, elige las páginas o rangos que quieras y haz clic en Dividir PDF para descargar los nuevos archivos.",
                },
                {
                  q: "¿Puedo extraer solo ciertas páginas de un PDF?",
                  a: "Sí. Selecciona los números de página o un rango de páginas y PDF.it creará un nuevo PDF que contenga solo esas páginas.",
                },
                {
                  q: "¿Puedo dividir un PDF desde mi celular?",
                  a: "Sí. PDF.it funciona en navegadores móviles — sube, selecciona páginas, divide y descarga.",
                },
                {
                  q: "¿Puedo dividir PDFs protegidos con contraseña?",
                  a: "Necesitas desbloquear el PDF antes de dividirlo. Usa nuestra herramienta Desbloquear PDF primero.",
                },
                {
                  q: "¿Es seguro subir mi PDF?",
                  a: "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos.",
                },
                {
                  q: "¿Cuál es el tamaño máximo de PDF que puedo dividir?",
                  a: "Las cuentas gratuitas pueden subir archivos de hasta 25MB. Las cuentas Pro pueden subir hasta 200MB. Las cuentas Business pueden subir hasta 1GB.",
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

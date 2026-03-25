import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ResumeBuilderInterface } from "@/components/resume-builder-interface"
import { Sparkles, Zap, Shield, FileText, Merge, Lock, Scan, Target } from "lucide-react"

export const metadata = {
  title: "Crear un Curriculum Profesional con IA | PDF.it",
  description:
    "Crea un curriculum optimizado para ATS desde cero. Completa tus datos y deja que la IA escriba un CV pulido y listo para el trabajo que puedes descargar en Word y editar en cualquier momento.",
  alternates: {
    languages: {
      en: "/create-resume",
      es: "/es/crear-curriculum",
      pt: "/br/criar-curriculo",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo funciona el creador de curriculum con IA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Completas tus datos personales, experiencia laboral, educación y habilidades. Nuestra IA genera un curriculum profesional optimizado para ATS que puedes descargar como documento Word y editar en cualquier momento."
      }
    },
    {
      "@type": "Question",
      "name": "¿En qué formato se descarga el curriculum?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tu curriculum se descarga como archivo Word (.docx), para que puedas editarlo fácilmente en Microsoft Word, Google Docs o cualquier procesador de texto compatible."
      }
    },
    {
      "@type": "Question",
      "name": "¿El curriculum es compatible con ATS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. La IA genera curriculums con formato limpio, encabezados de sección apropiados y contenido rico en palabras clave diseñado para pasar los Sistemas de Seguimiento de Candidatos que usan la mayoría de los empleadores."
      }
    },
    {
      "@type": "Question",
      "name": "¿También puedo generar una carta de presentación?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Hay una función opcional de carta de presentación que genera una carta personalizada basada en los datos de tu curriculum y el puesto al que aspiras."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se almacenan mis datos personales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Tu información se procesa en tiempo real para generar el curriculum y no se almacena en nuestros servidores. Nunca compartimos ni vendemos tus datos personales."
      }
    }
  ]
}

export default function CrearCurriculumPageEs() {
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
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4">PRO</span>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Crear un Curriculum Profesional</h1>
              <p className="text-xl text-slate-300 mb-8">
                Completa tus datos y la IA crea un curriculum pulido y listo para el trabajo en segundos. Descárgalo en Word — edítalo cuando quieras.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Potenciado por IA</span></div>
                <div className="flex items-center gap-2"><FileText className="h-4 w-4 text-orange-500" /><span>Formato Word</span></div>
                <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-orange-500" /><span>Opción de Carta de Presentación</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Builder Interface */}
        <ResumeBuilderInterface />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Funciona</h2>
            <div className="space-y-4">
              {[
                { title: "Completa tus Datos", desc: "Ingresa tu información de contacto, experiencia laboral, educación, habilidades y cualquier otra sección relevante." },
                { title: "La IA Escribe tu Curriculum", desc: "Nuestra IA toma tu información y genera un curriculum profesional optimizado para ATS con formato limpio y lenguaje impactante." },
                { title: "Descarga el Archivo Word", desc: "Descarga tu curriculum terminado como archivo Word (.docx). Ábrelo en cualquier procesador de texto y personalízalo si lo necesitas." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{step.title}</h3>
                    <p className="text-slate-700 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Por Qué Crear un Curriculum Desde Cero Es Difícil</h2>
            <div className="space-y-4 text-slate-600 text-lg">
              <p>
                Escribir un curriculum desde cero es una de las partes más estresantes de buscar trabajo. Tienes que elegir el formato correcto, las palabras adecuadas, destacar las habilidades correctas y asegurarte de que todo se vea profesional — todo mientras compites con cientos de otros candidatos.
              </p>
              <p>
                La mayoría de las personas pasan horas mirando una página en blanco o copiando plantillas desactualizadas. Nuestro Creador de Curriculum con IA elimina esa lucha. Solo completa tus datos y deja que la inteligencia artificial se encargue de la redacción. Obtienes un curriculum pulido y listo para ATS en segundos — sin necesidad de habilidades de diseño ni experiencia en redacción.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">¿Para Quién Es Esto?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Buscadores de Primer Empleo", desc: "Crea tu primer curriculum con confianza. La IA se encarga del formato, el lenguaje y la estructura para que te concentres en tus fortalezas." },
                { title: "Cambio de Carrera", desc: "¿Transicionando a un nuevo campo? La IA destaca habilidades transferibles y adapta tu curriculum a tu industria objetivo." },
                { title: "Freelancers que Van al Corporativo", desc: "Traduce tu experiencia freelance en un curriculum corporativo que los reclutadores y los sistemas ATS entiendan." },
                { title: "Profesionales Internacionales", desc: "Crea un curriculum que cumpla con los estándares locales y use un lenguaje profesional en inglés, español o portugués — sin importar tu idioma nativo." },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-slate-600 text-sm">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                {
                  q: "¿Cómo funciona el creador de curriculum con IA?",
                  a: "Completas tus datos personales, experiencia laboral, educación y habilidades. Nuestra IA genera un curriculum profesional optimizado para ATS que puedes descargar como documento Word y editar en cualquier momento.",
                },
                {
                  q: "¿En qué formato se descarga el curriculum?",
                  a: "Tu curriculum se descarga como archivo Word (.docx), para que puedas editarlo fácilmente en Microsoft Word, Google Docs o cualquier procesador de texto compatible.",
                },
                {
                  q: "¿El curriculum es compatible con ATS?",
                  a: "Sí. La IA genera curriculums con formato limpio, encabezados de sección apropiados y contenido rico en palabras clave diseñado para pasar los Sistemas de Seguimiento de Candidatos que usan la mayoría de los empleadores.",
                },
                {
                  q: "¿También puedo generar una carta de presentación?",
                  a: "Sí. Hay una función opcional de carta de presentación que genera una carta personalizada basada en los datos de tu curriculum y el puesto al que aspiras.",
                },
                {
                  q: "¿Se almacenan mis datos personales?",
                  a: "No. Tu información se procesa en tiempo real para generar el curriculum y no se almacena en nuestros servidores. Nunca compartimos ni vendemos tus datos personales.",
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

        {/* CTA */}
        <section className="py-16 bg-[#191B4D] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-black mb-4">¿Listo para Crear tu Curriculum?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Completa tus datos y deja que la IA cree un curriculum profesional y listo para el trabajo en segundos.
            </p>
            <Link
              href="#"
              onClick={undefined}
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              Crear tu Curriculum
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Optimizador ATS", href: "/es/optimizador-ats", icon: Target, desc: "Puntúa tu CV para ATS" },
                { name: "PDF a Word", href: "/es/pdf-a-word", icon: FileText, desc: "Convierte PDF a Word editable" },
                { name: "Unir PDF", href: "/es/unir-pdf", icon: Merge, desc: "Combina varios PDFs" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", icon: Zap, desc: "Reduce el tamaño del PDF" },
                { name: "Escáner OCR", href: "/es/escaner-ocr", icon: Scan, desc: "Extrae texto de escaneos" },
                { name: "Proteger PDF", href: "/es/proteger-pdf", icon: Lock, desc: "Protege tu PDF con contraseña" },
                { name: "URL a PDF", href: "/es/url-a-pdf", icon: Shield, desc: "Guarda cualquier página como PDF" },
                { name: "Aplanar PDF", href: "/es/aplanar-pdf", icon: FileText, desc: "Aplana campos de formulario" },
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
      </main>
      <FooterEs />
    </div>
  )
}

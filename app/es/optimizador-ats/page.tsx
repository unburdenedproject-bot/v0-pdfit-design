import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { AtsOptimizerInterface } from "@/components/ats-optimizer-interface"
import { Target, Zap, Shield, FileText, Merge, Lock, Scan, Type } from "lucide-react"

export const metadata = {
  title: "Optimizador ATS de Curriculum — Puntua tu CV para Compatibilidad ATS | PDF.it",
  description:
    "Sube tu curriculum y obtén una puntuación de compatibilidad ATS al instante. El Optimizador ATS de PDF.it analiza formato, palabras clave, secciones y estructura — y te dice exactamente qué corregir.",
  alternates: {
    languages: {
      en: "/ats-optimizer",
      es: "/es/optimizador-ats",
      pt: "/br/otimizador-ats",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es un ATS y por qué importa para mi curriculum?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un Sistema de Seguimiento de Candidatos (ATS) es un software que usan los empleadores para filtrar y clasificar curriculums antes de que un humano los vea. Si tu CV no es compatible con ATS, puede ser rechazado automáticamente — aunque estés cualificado para el puesto."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo funciona la puntuación ATS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nuestra IA analiza tu curriculum en múltiples dimensiones: compatibilidad de formato, relevancia de palabras clave, estructura de secciones y legibilidad. Recibes una puntuación de 0 a 100 junto con recomendaciones específicas para mejorar cada área."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué es una buena puntuación ATS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una puntuación de 80 o más se considera fuerte. Puntuaciones entre 60–79 son promedio y pueden pasar algunos sistemas. Por debajo de 60 significa que tu curriculum probablemente necesita mejoras significativas para pasar los filtros ATS."
      }
    },
    {
      "@type": "Question",
      "name": "¿El optimizador ATS funciona para curriculums en varios idiomas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Nuestra IA puede analizar curriculums escritos en inglés, español, portugués y muchos otros idiomas. Los criterios de puntuación son universales en todos los idiomas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se almacena mi curriculum después del análisis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Tu curriculum se procesa en tiempo real y se elimina de nuestros servidores inmediatamente después del análisis. Nunca almacenamos, compartimos ni vendemos tus datos personales."
      }
    }
  ]
}

export default function OptimizadorAtsPageEs() {
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
                <Target className="h-10 w-10 text-white" />
              </div>
              <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4">PRO</span>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Optimizador ATS de Curriculum</h1>
              <p className="text-xl text-slate-300 mb-8">
                Sube tu curriculum y obtén una puntuación de compatibilidad ATS al instante. Nuestra IA analiza formato, palabras clave, secciones y estructura — y te dice exactamente qué corregir.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Análisis con IA</span></div>
                <div className="flex items-center gap-2"><Target className="h-4 w-4 text-orange-500" /><span>Puntuación ATS 0-100</span></div>
                <div className="flex items-center gap-2"><Scan className="h-4 w-4 text-orange-500" /><span>Análisis de Palabras Clave</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ATS Optimizer Interface */}
        <AtsOptimizerInterface />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Funciona</h2>
            <div className="space-y-4">
              {[
                { title: "Sube tu Curriculum", desc: "Sube tu curriculum en formato PDF. Arrastra y suelta o haz clic para buscar." },
                { title: "La IA Analiza", desc: "Nuestra IA escanea tu curriculum para compatibilidad ATS — revisando formato, palabras clave, secciones y estructura." },
                { title: "Obtén Resultados", desc: "Recibe una puntuación ATS detallada de 0 a 100 con recomendaciones accionables para mejorar tu curriculum." },
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

        {/* Why ATS Matters */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Por Qué Importa la Compatibilidad ATS</h2>
            <div className="space-y-4 text-slate-600 text-lg">
              <p>
                Más del 75% de los curriculums son rechazados por los Sistemas de Seguimiento de Candidatos antes de que un reclutador humano los vea. Estos filtros automáticos buscan palabras clave específicas, patrones de formato y encabezados de secciones — y si tu curriculum no coincide, es descartado sin importar tus cualificaciones.
              </p>
              <p>
                Esto significa que incluso candidatos altamente cualificados pueden perder entrevistas simplemente porque su curriculum no estaba formateado para software ATS. Nuestro Optimizador ATS de Curriculum te ayuda a identificar y corregir estos problemas para que tu CV llegue al escritorio del responsable de contratación.
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
                { title: "Buscadores de Empleo", desc: "Optimiza tu curriculum antes de postularte para maximizar tus posibilidades de pasar los filtros ATS y conseguir entrevistas." },
                { title: "Cambio de Carrera", desc: "Asegúrate de que tu curriculum destaque habilidades transferibles y use las palabras clave correctas para tu nueva industria." },
                { title: "Recién Graduados", desc: "Haz bien tu primer curriculum. Aprende qué buscan los sistemas ATS y estructura tu CV para destacar." },
                { title: "Reclutadores", desc: "Evalúa rápidamente si los curriculums de los candidatos están optimizados para ATS antes de enviarlos a las empresas clientes." },
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                {
                  q: "¿Qué es un ATS y por qué importa para mi curriculum?",
                  a: "Un Sistema de Seguimiento de Candidatos (ATS) es un software que usan los empleadores para filtrar y clasificar curriculums antes de que un humano los vea. Si tu CV no es compatible con ATS, puede ser rechazado automáticamente — aunque estés cualificado para el puesto.",
                },
                {
                  q: "¿Cómo funciona la puntuación ATS?",
                  a: "Nuestra IA analiza tu curriculum en múltiples dimensiones: compatibilidad de formato, relevancia de palabras clave, estructura de secciones y legibilidad. Recibes una puntuación de 0 a 100 junto con recomendaciones específicas para mejorar cada área.",
                },
                {
                  q: "¿Qué es una buena puntuación ATS?",
                  a: "Una puntuación de 80 o más se considera fuerte. Puntuaciones entre 60–79 son promedio y pueden pasar algunos sistemas. Por debajo de 60 significa que tu curriculum probablemente necesita mejoras significativas para pasar los filtros ATS.",
                },
                {
                  q: "¿El optimizador ATS funciona para curriculums en varios idiomas?",
                  a: "Sí. Nuestra IA puede analizar curriculums escritos en inglés, español, portugués y muchos otros idiomas. Los criterios de puntuación son universales en todos los idiomas.",
                },
                {
                  q: "¿Se almacena mi curriculum después del análisis?",
                  a: "No. Tu curriculum se procesa en tiempo real y se elimina de nuestros servidores inmediatamente después del análisis. Nunca almacenamos, compartimos ni vendemos tus datos personales.",
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
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-black mb-4">¿Listo para Vencer al ATS?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Sube tu curriculum ahora y obtén una puntuación de compatibilidad ATS al instante con recomendaciones accionables.
            </p>
            <Link
              href="#"
              onClick={undefined}
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              Optimiza tu Curriculum
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF a Word", href: "/es/pdf-a-word", icon: FileText, desc: "Convierte PDF a Word editable" },
                { name: "Unir PDF", href: "/es/unir-pdf", icon: Merge, desc: "Combina varios PDFs" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", icon: Zap, desc: "Reduce el tamaño del PDF" },
                { name: "Escáner OCR", href: "/es/escaner-ocr", icon: Scan, desc: "Extrae texto de escaneos" },
                { name: "Word a PDF", href: "/es/word-a-pdf", icon: Type, desc: "Convierte Word a PDF" },
                { name: "Proteger PDF", href: "/es/proteger-pdf", icon: Lock, desc: "Protege tu PDF con contraseña" },
                { name: "URL a PDF", href: "/es/url-a-pdf", icon: Shield, desc: "Guarda cualquier página como PDF" },
                { name: "Aplanar PDF", href: "/es/aplanar-pdf", icon: FileText, desc: "Aplana campos de formulario" },
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
      </main>
      <FooterEs />
    </div>
  )
}

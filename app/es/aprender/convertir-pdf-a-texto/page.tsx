import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convertir PDF a TXT: Extrae Texto Plano en Segundos | PDF.it",
  description:
    "Aprende a convertir PDF a TXT y extraer texto plano de cualquier archivo PDF. Guia paso a paso para entrada de datos, programacion, notas y mas — gratis, en linea, sin software.",
  keywords: "convertir pdf a txt, pdf a texto, extraer texto de pdf, pdf a texto plano, convertidor pdf a txt",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo convierto un PDF a TXT gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a la herramienta PDF a TXT de PDF.it, haz clic en Convertir y descarga el archivo de texto plano. No necesitas registrarte para tus primeros 3 archivos." }
    },
    {
      "@type": "Question",
      "name": "¿Perderé el formato al convertir PDF a TXT?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí — los archivos TXT contienen solo texto plano sin formato. Negritas, cursivas, tablas, imágenes y colores se eliminan. Si necesitas conservar el formato, usa PDF a Word en su lugar." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo convertir un PDF escaneado a TXT?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las herramientas estándar de PDF a TXT no pueden extraer texto de PDFs escaneados porque el texto está almacenado como imagen. Necesitas OCR (Reconocimiento Óptico de Caracteres) para convertir páginas escaneadas a texto. El Escáner OCR de PDF.it se encarga de esto." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la diferencia entre PDF a TXT y PDF a Word?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF a TXT extrae solo el contenido de texto sin formato — sin formato, sin imágenes, sin tablas. PDF a Word preserva el formato, diseño, tablas e imágenes en un documento editable. Usa TXT cuando solo necesites el contenido de texto; usa Word cuando necesites editar el documento completo." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué mi salida de PDF a TXT tiene texto faltante?",
      "acceptedAnswer": { "@type": "Answer", "text": "El texto faltante generalmente significa que el PDF está escaneado (texto almacenado como imagen) o usa fuentes personalizadas/incrustadas que no se pueden decodificar. Prueba el Escáner OCR para PDFs escaneados, o PDF a Word para documentos con fuentes inusuales." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo convertir un PDF a TXT en mi teléfono?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en cualquier navegador móvil — sube tu PDF, conviértelo a TXT y descarga el archivo de texto directamente en iPhone o Android. No necesitas instalar ninguna aplicación." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Convertir PDF a TXT en Línea",
  "description": "Extrae texto plano de cualquier PDF en 3 simples pasos usando PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube tu PDF",
      "text": "Ve a la herramienta PDF a TXT de PDF.it y sube tu archivo haciendo clic o arrastrándolo al área de carga."
    },
    {
      "@type": "HowToStep",
      "name": "Convierte a texto plano",
      "text": "Haz clic en Convertir. PDF.it extrae todo el texto legible de tu PDF y genera un archivo TXT limpio."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga tu archivo TXT",
      "text": "Descarga el archivo de texto plano. Ábrelo en cualquier editor de texto, pégalo en tu aplicación de notas, o úsalo en tu flujo de trabajo de código o datos."
    }
  ]
}

export default function ConvertirPdfATextoPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <HeaderEs />
      <main>
        {/* Hero */}
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF a Texto</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PDF a TXT: Extrae Texto Plano en Segundos</h1>
              <p className="text-xl text-slate-300">
                ¿Necesitas el texto sin formato de un PDF — sin formato, sin imágenes, solo palabras? Aquí te explicamos cómo convertir cualquier PDF a un archivo TXT limpio en segundos.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">¿Listo para extraer texto? Salta la guía y ve directo a la herramienta.</p>
            </div>
            <Link
              href="/es/pdf-a-texto"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              PDF a TXT Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* When you need plain text */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Cuándo Necesitas Texto Plano de un PDF?</h2>
              <p className="text-slate-600 mb-4">
                Convertir un PDF a TXT elimina todo excepto el contenido de texto sin formato. Esto es útil en más situaciones de las que imaginas:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Entrada de datos y hojas de cálculo.</strong> Cuando necesitas extraer texto de facturas, recibos o formularios a una base de datos u hoja de cálculo, TXT te da datos limpios sin desorden de formato.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Programación y desarrollo.</strong> Los desarrolladores a menudo necesitan extraer texto de documentación, especificaciones de API o archivos de registro guardados como PDFs. El texto plano es el formato más fácil de procesar programáticamente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Toma de notas e investigación.</strong> Copiar texto de un PDF a aplicaciones de notas (Notion, Google Keep, Apple Notes) funciona mucho mejor con TXT limpio que con contenido copiado de PDF que lleva formato oculto.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Accesibilidad.</strong> El texto plano funciona con todos los lectores de pantalla y tecnologías asistivas. Convertir documentos académicos o informes a TXT los hace accesibles para todos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">5.</span>
                  <span><strong>Análisis de texto.</strong> Contar palabras, buscar palabras clave o alimentar contenido a herramientas de IA es más simple con archivos de texto plano.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Convertir PDF a TXT (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Sube tu PDF",
                    desc: "Ve a la herramienta PDF a TXT y arrastra tu archivo al área de carga, o haz clic para buscar. Archivos de hasta 25MB son gratis — los usuarios Pro pueden subir hasta 200MB.",
                  },
                  {
                    title: "Convierte a texto plano",
                    desc: "Haz clic en Convertir. PDF.it lee todo el texto seleccionable en tu PDF y genera un archivo .txt limpio. Esto toma solo unos segundos para la mayoría de los documentos.",
                  },
                  {
                    title: "Descarga y usa tu texto",
                    desc: "Descarga el archivo TXT y ábrelo en cualquier editor de texto, pégalo en tus notas o úsalo en tu flujo de trabajo. El texto está limpio y listo para usar inmediatamente.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* What gets lost */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Qué Se Pierde al Convertir PDF a TXT</h2>
              <p className="text-slate-600 mb-4">
                TXT es el formato de archivo más simple — contiene solo caracteres y saltos de línea. Cuando conviertes un PDF a TXT, esto es lo que se elimina intencionalmente:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#x2717; <strong>Todo el formato</strong> — negritas, cursivas, subrayados, tamaños de fuente y colores desaparecen.</li>
                <li>&#x2717; <strong>Imágenes y gráficos</strong> — fotos, gráficos, logotipos y diagramas se eliminan. Usa <Link href="/es/extraer-imagenes-de-pdf" className="text-[#14D8C4] hover:underline">Extraer Imágenes</Link> si los necesitas por separado.</li>
                <li>&#x2717; <strong>Tablas y diseño</strong> — las estructuras de tablas se convierten en líneas de texto plano. La alineación de columnas se pierde.</li>
                <li>&#x2717; <strong>Encabezados y pies de página</strong> — números de página, encabezados y pies pueden aparecer en línea con el texto principal.</li>
                <li>&#x2717; <strong>Hipervínculos</strong> — los enlaces clicables se convierten en texto plano (el texto de la URL permanece, pero ya no es clicable).</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Si necesitas conservar el formato, considera usar <Link href="/es/pdf-a-word" className="text-[#14D8C4] hover:underline">PDF a Word</Link> en su lugar — preserva el diseño, tablas y estilos en un documento editable.
              </p>
            </section>

            {/* PDF to TXT vs PDF to Word */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">PDF a TXT vs PDF a Word: ¿Cuál Deberías Usar?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Característica</th>
                      <th className="text-left py-3 px-4 font-bold">PDF a TXT</th>
                      <th className="text-left py-3 px-4 font-bold">PDF a Word</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Salida</td>
                      <td className="py-3 px-4">Solo texto plano</td>
                      <td className="py-3 px-4">Documento .docx con formato</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Conserva formato</td>
                      <td className="py-3 px-4">No</td>
                      <td className="py-3 px-4">Sí (negritas, tablas, imágenes)</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Mejor para</td>
                      <td className="py-3 px-4">Extracción de datos, programación, notas</td>
                      <td className="py-3 px-4">Editar documentos, informes</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Tamaño de archivo</td>
                      <td className="py-3 px-4">Diminuto (KB)</td>
                      <td className="py-3 px-4">Más grande (preserva multimedia)</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Nivel</td>
                      <td className="py-3 px-4">Gratis</td>
                      <td className="py-3 px-4">Pro</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* When TXT won't work */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cuando PDF a TXT No Funciona (Y Qué Hacer en Su Lugar)</h2>
              <p className="text-slate-600 mb-4">
                PDF a TXT extrae texto <em>seleccionable</em> — texto que puedes resaltar y copiar en un visor de PDF. No funciona en:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">PDFs Escaneados</h3>
                  <p className="text-slate-600">
                    Si tu PDF es un escaneo (fotos de páginas de papel), no hay texto seleccionable para extraer. Necesitas <Link href="/es/escaner-ocr" className="text-[#14D8C4] hover:underline">OCR (Reconocimiento Óptico de Caracteres)</Link> para leer el texto de las imágenes. El Escáner OCR de PDF.it se encarga de esto automáticamente.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">PDFs Protegidos con Contraseña</h3>
                  <p className="text-slate-600">
                    Algunos PDFs restringen la copia de texto. Si tu PDF está protegido, usa <Link href="/es/desbloquear-pdf" className="text-[#14D8C4] hover:underline">Desbloquear PDF</Link> primero (necesitarás la contraseña), luego convierte a TXT.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">PDFs con Fuentes Personalizadas</h3>
                  <p className="text-slate-600">
                    Algunos PDFs usan fuentes codificadas o personalizadas que producen texto ilegible al extraerlo. Si tu salida parece texto sin sentido, prueba <Link href="/es/pdf-a-word" className="text-[#14D8C4] hover:underline">PDF a Word</Link> que maneja la codificación de fuentes de manera diferente, o usa OCR como alternativa.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">¿Listo para Extraer Texto de Tu PDF?</h2>
            <p className="text-slate-300 mb-6">Sube tu archivo y obtén texto plano limpio en segundos — gratis, sin registro.</p>
            <Link
              href="/es/pdf-a-texto"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <FileText className="h-5 w-5" /> Convertir PDF a TXT Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Cómo Copiar Texto de un PDF a Notas o Documentos (Limpiamente)", href: "/es/aprender/copiar-texto-de-pdf-a-notas" },
                { title: "Por Qué el Texto Extraído de PDF Sale Ilegible (Y Cómo Solucionarlo)", href: "/es/aprender/pdf-texto-ilegible-solucion" },
                { title: "Extraer Texto de PDF en iPhone/Android (Mejores Métodos)", href: "/es/aprender/extraer-texto-de-pdf-en-movil" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
                </Link>
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
                { q: "¿Cómo convierto un PDF a TXT gratis?", a: "Sube tu PDF a la herramienta PDF a TXT de PDF.it, haz clic en Convertir y descarga el archivo de texto plano. No necesitas registrarte para tus primeros 3 archivos." },
                { q: "¿Perderé el formato al convertir PDF a TXT?", a: "Sí — los archivos TXT contienen solo texto plano sin formato. Negritas, cursivas, tablas, imágenes y colores se eliminan. Si necesitas conservar el formato, usa PDF a Word en su lugar." },
                { q: "¿Puedo convertir un PDF escaneado a TXT?", a: "Las herramientas estándar de PDF a TXT no pueden extraer texto de PDFs escaneados porque el texto está almacenado como imagen. Necesitas OCR (Reconocimiento Óptico de Caracteres) para convertir páginas escaneadas a texto. El Escáner OCR de PDF.it se encarga de esto." },
                { q: "¿Cuál es la diferencia entre PDF a TXT y PDF a Word?", a: "PDF a TXT extrae solo el contenido de texto sin formato — sin formato, sin imágenes, sin tablas. PDF a Word preserva el formato, diseño, tablas e imágenes en un documento editable. Usa TXT cuando solo necesites el texto; usa Word cuando necesites editar el documento completo." },
                { q: "¿Por qué mi salida de PDF a TXT tiene texto faltante?", a: "El texto faltante generalmente significa que el PDF está escaneado (texto almacenado como imagen) o usa fuentes personalizadas/incrustadas que no se pueden decodificar. Prueba el Escáner OCR para PDFs escaneados, o PDF a Word para documentos con fuentes inusuales." },
                { q: "¿Puedo convertir un PDF a TXT en mi teléfono?", a: "Sí. PDF.it funciona en cualquier navegador móvil — sube tu PDF, conviértelo a TXT y descarga el archivo de texto directamente en iPhone o Android. No necesitas instalar ninguna aplicación." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
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

import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convertir Word a PDF en Línea (DOCX a PDF) | PDF.it",
  description:
    "Aprende a convertir Word a PDF en línea en segundos. Guía paso a paso sobre preservación de formato, opciones gratuitas vs Pro, y por qué PDF es el formato universal para compartir.",
  keywords: "convertir word a pdf en linea, docx a pdf, word a pdf gratis, convertir docx a pdf en linea, documento word a pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo convierto Word a PDF en línea gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu archivo .docx o .doc a la herramienta Word a PDF de PDF.it, haz clic en Convertir y descarga el PDF. No necesitas registrarte para tus primeros 3 archivos — toma aproximadamente 10 segundos." }
    },
    {
      "@type": "Question",
      "name": "¿Mi formato se mantendrá igual al convertir Word a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it preserva fuentes, espaciado, imágenes, encabezados, pies de página y diseño de página durante la conversión. Para mejores resultados, usa fuentes estándar como Arial, Calibri o Times New Roman en tu documento Word." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo convertir múltiples archivos Word a PDF a la vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Los usuarios Pro pueden convertir por lotes múltiples archivos .docx a PDF en una sola sesión. Los usuarios gratuitos pueden convertir un archivo a la vez." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la diferencia entre .doc y .docx?",
      "acceptedAnswer": { "@type": "Answer", "text": ".doc es el formato antiguo de Microsoft Word (Word 97-2003). .docx es el formato moderno usado desde Word 2007. Ambos se pueden convertir a PDF con PDF.it, pero los archivos .docx generalmente producen mejores resultados con formato más preciso." }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro subir mi documento Word para conversión?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it procesa tu archivo de forma segura y lo elimina de los servidores después de la conversión. Tu documento nunca se almacena, comparte o usa para ningún propósito más allá de la conversión que solicitaste." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué debería convertir Word a PDF en lugar de compartir el archivo .docx?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los PDFs se ven igual en cada dispositivo y sistema operativo. Los documentos Word pueden cambiar de formato dependiendo de la versión de Word, las fuentes instaladas y el tamaño de pantalla. Los PDFs también previenen ediciones accidentales, siendo ideales para versiones finales de contratos, currículos e informes." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Convertir Word a PDF en Línea",
  "description": "Convierte tu archivo DOCX a PDF en 3 simples pasos usando PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube tu documento Word",
      "text": "Ve a la herramienta Word a PDF de PDF.it y sube tu archivo .docx o .doc haciendo clic o arrastrándolo al área de carga."
    },
    {
      "@type": "HowToStep",
      "name": "Haz clic en Convertir",
      "text": "Haz clic en el botón Convertir a PDF. PDF.it procesa tu archivo en segundos, preservando todo el formato, imágenes y fuentes."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga tu PDF",
      "text": "Descarga el PDF convertido a tu dispositivo. Ábrelo para verificar que el formato se vea correcto antes de compartir."
    }
  ]
}

export default function ConvertirWordAPdfPage() {
  return (
    <div className="min-h-screen bg-white">
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
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Word a PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir Word a PDF en Línea (DOCX a PDF)</h1>
              <p className="text-xl text-slate-300">
                ¿Necesitas enviar un documento Word que se vea exactamente igual en cada dispositivo? Conviértelo a PDF en segundos — gratis, en línea, sin software que instalar.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">¿Listo para convertir? Salta la guía y ve directo a la herramienta.</p>
            </div>
            <Link
              href="/es/word-a-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Word a PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why convert */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Qué Convertir Word a PDF?</h2>
              <p className="text-slate-600 mb-4">
                Los documentos Word son excelentes para escribir y editar. Pero en el momento en que necesitas <strong>compartir</strong> un documento — con un cliente, empleador o agencia gubernamental — PDF es el formato correcto. Aquí está por qué:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Compatibilidad universal.</strong> Los PDFs se abren en cada dispositivo, sistema operativo y navegador sin necesidad de tener Microsoft Word instalado. Tu destinatario ve exactamente lo que tú ves.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Sin ediciones accidentales.</strong> Los PDFs evitan que los destinatarios cambien accidental (o intencionalmente) tu contenido. Esto importa para contratos, facturas y currículos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Formato consistente.</strong> Los archivos Word pueden verse diferentes dependiendo de la versión de Word del visor, las fuentes instaladas y el tamaño de pantalla. Los PDFs bloquean el diseño en su lugar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Menor tamaño de archivo.</strong> Los PDFs a menudo son más pequeños que el archivo Word original, especialmente para documentos con muchas imágenes. Si el PDF aún es demasiado grande, puedes <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">comprimirlo aún más</Link>.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Convertir Word a PDF (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Sube tu documento Word",
                    desc: "Ve a la herramienta Word a PDF y arrastra tu archivo .docx o .doc al área de carga, o haz clic para buscar. Los usuarios gratuitos pueden subir archivos de hasta 25MB — los usuarios Pro hasta 200MB.",
                  },
                  {
                    title: "Haz clic en Convertir a PDF",
                    desc: "PDF.it convierte tu documento en segundos. Fuentes, imágenes, tablas, encabezados, pies de página y saltos de página se preservan en el PDF resultante.",
                  },
                  {
                    title: "Descarga y verifica",
                    desc: "Descarga tu PDF y ábrelo para confirmar que todo se ve correcto. Si necesitas convertir otros archivos de Office también, prueba nuestra herramienta Office a PDF para archivos de Excel y PowerPoint.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
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

            {/* Formatting tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para Preservar el Formato</h2>
              <p className="text-slate-600 mb-4">
                La mayoría de las conversiones de Word a PDF son perfectas, pero ciertos elementos pueden desplazarse si no tienes cuidado. Sigue estos consejos para una conversión perfecta:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Usa fuentes estándar</strong> como Arial, Calibri o Times New Roman. Las fuentes decorativas o personalizadas pueden no renderizarse correctamente en el PDF.</li>
                <li>&#10003; <strong>Inserta imágenes correctamente.</strong> Asegúrate de que las imágenes estén insertadas (no enlazadas) en tu documento Word. Las imágenes enlazadas pueden no transferirse al PDF.</li>
                <li>&#10003; <strong>Verifica los saltos de página.</strong> Los saltos de página manuales se convierten de forma más confiable que depender de la paginación automática de Word.</li>
                <li>&#10003; <strong>Simplifica encabezados y pies de página.</strong> Los diseños complejos de encabezado/pie de página con múltiples columnas a veces pueden desplazarse. Mantenlos simples para mejores resultados.</li>
              </ul>
            </section>

            {/* Free vs Pro */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Gratis vs. Pro: ¿Cuál Es la Diferencia?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Característica</th>
                      <th className="text-left py-3 px-4 font-bold">Gratis</th>
                      <th className="text-left py-3 px-4 font-bold">Pro ($7.99/mes)</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Conversiones por día</td>
                      <td className="py-3 px-4">10 (3 sin cuenta)</td>
                      <td className="py-3 px-4">Ilimitadas</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Tamaño máximo de archivo</td>
                      <td className="py-3 px-4">25MB</td>
                      <td className="py-3 px-4">200MB</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Conversión por lotes</td>
                      <td className="py-3 px-4">Un archivo a la vez</td>
                      <td className="py-3 px-4">Múltiples archivos a la vez</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Velocidad de procesamiento</td>
                      <td className="py-3 px-4">Estándar</td>
                      <td className="py-3 px-4">Cola prioritaria</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Other Office formats */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Necesitas Convertir Otros Formatos de Office?</h2>
              <p className="text-slate-600 mb-4">
                Word no es el único tipo de archivo que podrías necesitar convertir a PDF. PDF.it maneja la suite completa de Microsoft Office:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <Link href="/es/excel-a-pdf" className="text-orange-600 hover:underline">Excel a PDF</Link> — convierte hojas de cálculo preservando columnas, filas y gráficos.</li>
                <li>&#10003; <Link href="/es/powerpoint-a-pdf" className="text-orange-600 hover:underline">PowerPoint a PDF</Link> — convierte presentaciones en PDFs compartibles.</li>
                <li>&#10003; <Link href="/es/office-a-pdf" className="text-orange-600 hover:underline">Office a PDF</Link> — una herramienta universal que acepta .docx, .xlsx, .pptx y más.</li>
              </ul>
            </section>

            {/* After conversion */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Qué Hacer Después de Convertir</h2>
              <p className="text-slate-600 mb-4">
                Una vez que tu documento Word es un PDF, podrías querer tomar algunos pasos adicionales antes de compartir:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Comprímelo</strong> con <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> si el archivo es demasiado grande para correo electrónico o un portal de carga.</li>
                <li>&#10003; <strong>Protégelo con contraseña</strong> usando <Link href="/es/proteger-pdf" className="text-orange-600 hover:underline">Proteger PDF</Link> si el documento contiene información sensible como contratos o datos financieros.</li>
                <li>&#10003; <strong>Únelo</strong> con otros PDFs usando <Link href="/es/unir-pdf" className="text-orange-600 hover:underline">Unir PDF</Link> si necesitas combinar múltiples documentos en un solo archivo.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">¿Listo para Convertir Tu Documento Word?</h2>
            <p className="text-slate-300 mb-6">Sube tu archivo .docx y obtén un PDF en segundos — gratis, sin registro.</p>
            <Link
              href="/es/word-a-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <FileText className="h-5 w-5" /> Word a PDF Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Convertir Word a PDF en iPhone (DOCX a PDF en Minutos)", href: "/es/aprender/word-a-pdf-en-iphone" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
                </Link>
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
                { q: "¿Cómo convierto Word a PDF en línea gratis?", a: "Sube tu archivo .docx o .doc a la herramienta Word a PDF de PDF.it, haz clic en Convertir y descarga el PDF. No necesitas registrarte para tus primeros 3 archivos — toma aproximadamente 10 segundos." },
                { q: "¿Mi formato se mantendrá igual al convertir Word a PDF?", a: "PDF.it preserva fuentes, espaciado, imágenes, encabezados, pies de página y diseño de página durante la conversión. Para mejores resultados, usa fuentes estándar como Arial, Calibri o Times New Roman en tu documento Word." },
                { q: "¿Puedo convertir múltiples archivos Word a PDF a la vez?", a: "Sí. Los usuarios Pro pueden convertir por lotes múltiples archivos .docx a PDF en una sola sesión. Los usuarios gratuitos pueden convertir un archivo a la vez." },
                { q: "¿Cuál es la diferencia entre .doc y .docx?", a: ".doc es el formato antiguo de Microsoft Word (Word 97-2003). .docx es el formato moderno usado desde Word 2007. Ambos se pueden convertir a PDF con PDF.it, pero los archivos .docx generalmente producen mejores resultados con formato más preciso." },
                { q: "¿Es seguro subir mi documento Word para conversión?", a: "Sí. PDF.it procesa tu archivo de forma segura y lo elimina de los servidores después de la conversión. Tu documento nunca se almacena, comparte o usa para ningún propósito más allá de la conversión que solicitaste." },
                { q: "¿Por qué debería convertir Word a PDF en lugar de compartir el archivo .docx?", a: "Los PDFs se ven igual en cada dispositivo y sistema operativo. Los documentos Word pueden cambiar de formato dependiendo de la versión de Word, las fuentes instaladas y el tamaño de pantalla. Los PDFs también previenen ediciones accidentales, siendo ideales para versiones finales de contratos, currículos e informes." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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

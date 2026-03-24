import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileDown, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Cómo Comprimir un PDF Grande (50MB, 100MB o Más) | PDF.it",
  description:
    "Aprende cómo comprimir PDFs muy grandes — 50MB, 100MB o más. Estrategias paso a paso para reducir archivos enormes incluyendo división, múltiples pasadas y optimización de imágenes.",
  keywords: "comprimir pdf grande, reducir tamaño pdf grande, comprimir pdf 100mb, achicar pdf pesado",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo comprimo un PDF de más de 100MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Súbelo a la herramienta Comprimir PDF de PDF.it (los usuarios Pro pueden subir archivos de hasta 200MB). Usa compresión Extrema para la máxima reducción. Si sigue siendo muy grande, divide el PDF en secciones más pequeñas primero, luego comprime cada parte por separado." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué mi PDF pesa más de 50MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los PDFs grandes casi siempre son causados por imágenes de alta resolución o páginas escaneadas. Una sola página escaneada puede pesar 2-5MB, así que un documento escaneado de 20 páginas puede alcanzar fácilmente 50-100MB." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir un PDF grande gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios gratuitos pueden comprimir archivos de hasta 25MB. Para archivos mayores de 25MB, necesitas PDF.it Pro que soporta archivos de hasta 200MB e incluye procesamiento por lotes." }
    },
    {
      "@type": "Question",
      "name": "¿Debería dividir un PDF grande antes de comprimir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí, si la compresión sola no reduce el archivo lo suficiente. Divide el PDF en secciones, comprime cada una por separado, luego únelas de nuevo. Esto frecuentemente produce mejores resultados que comprimir el archivo completo de una vez." }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tarda comprimir un PDF de 100MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Típicamente 30-90 segundos dependiendo del número de páginas y tipo de contenido. Los archivos con muchas imágenes tardan más. Los usuarios Pro obtienen procesamiento prioritario para resultados más rápidos." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir un PDF grande en mi teléfono?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí, pero subir archivos grandes en móvil puede ser lento dependiendo de tu conexión. PDF.it funciona en cualquier navegador móvil — no necesitas instalar ninguna app." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Comprimir un PDF Grande",
  "description": "Reduce el tamaño de un PDF grande (50MB, 100MB o más) en 3 simples pasos.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube tu PDF grande",
      "text": "Ve a la herramienta Comprimir PDF de PDF.it y sube tu archivo. Los usuarios Pro pueden subir archivos de hasta 200MB."
    },
    {
      "@type": "HowToStep",
      "name": "Elige compresión Extrema",
      "text": "Para archivos muy grandes, comienza con compresión Extrema para la máxima reducción de tamaño. Si la calidad importa, prueba Media primero y ve si el resultado es lo suficientemente pequeño."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga o divide y reintenta",
      "text": "Descarga el archivo comprimido. Si sigue siendo muy grande, divide el PDF en secciones más pequeñas, comprime cada parte, luego únelas de nuevo."
    }
  ]
}

export default function ComprimirPDFGrandePage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Comprimir PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Cómo Comprimir un PDF Grande (50MB, 100MB o Más)</h1>
              <p className="text-xl text-slate-300">
                Tu PDF es enorme — demasiado grande para email, portales de carga o incluso los límites de almacenamiento en la nube. Aquí te explicamos cómo reducir archivos masivos a un tamaño manejable.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileDown className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">¿Listo para comprimir? Salta la guía y ve directo a la herramienta.</p>
            </div>
            <Link
              href="/es/comprimir-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Comprimir PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Qué los PDFs Se Vuelven Tan Grandes</h2>
              <p className="text-slate-600 mb-4">
                Un PDF no necesita tener cientos de páginas para ser enorme. Entender qué hace que los archivos crezcan te ayuda a elegir la estrategia de compresión correcta:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Documentos escaneados.</strong> Cada página escaneada es una imagen de página completa a 200-400 DPI. Un documento escaneado de 50 páginas puede alcanzar fácilmente 100-200MB. Esta es la causa más común de PDFs sobredimensionados.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Fotografías incrustadas.</strong> Informes con fotos de productos, listados inmobiliarios con imágenes de propiedades y portafolios con arte de alta resolución crean archivos masivos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Dibujos CAD y diagramas técnicos.</strong> Los PDFs de ingeniería con gráficos vectoriales y esquemas detallados pueden pesar 50-100MB por página.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Archivos unidos.</strong> Cuando <Link href="/es/unir-pdf" className="text-orange-600 hover:underline">unes múltiples PDFs</Link>, los tamaños se acumulan. Un conjunto de 10 informes de 10MB cada uno se convierte en un monstruo de 100MB.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Comprimir un PDF Grande (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Sube tu PDF grande",
                    desc: "Ve a la herramienta Comprimir PDF y sube tu archivo. Los usuarios gratuitos pueden subir archivos de hasta 25MB. Los usuarios Pro pueden manejar archivos de hasta 200MB — lo que cubre la gran mayoría de los PDFs sobredimensionados.",
                  },
                  {
                    title: "Comienza con compresión Extrema",
                    desc: "Para archivos muy grandes, comienza con compresión Extrema. Esto da la máxima reducción de tamaño — frecuentemente reduciendo un archivo de 100MB a 10-30MB. Si la calidad no es aceptable, prueba Media en su lugar.",
                  },
                  {
                    title: "Descarga y verifica el resultado",
                    desc: "Descarga el archivo comprimido. Si sigue siendo muy grande para tus necesidades, pasa a la estrategia de dividir-y-comprimir que se explica abajo. Si la calidad está bien pero el tamaño necesita más reducción, prueba una segunda pasada de compresión.",
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

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">La Estrategia de Dividir-y-Comprimir</h2>
              <p className="text-slate-600 mb-4">
                Cuando una sola pasada de compresión no es suficiente, dividir el PDF primero frecuentemente produce resultados dramáticamente mejores. Aquí está el proceso:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Divide el PDF en secciones.</strong> Usa <Link href="/es/dividir-pdf" className="text-orange-600 hover:underline">Dividir PDF</Link> para separar tu archivo grande en fragmentos de 10-20 páginas cada uno.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Comprime cada sección por separado.</strong> Sube cada fragmento a <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> y aplica compresión Extrema o Media. Los usuarios Pro pueden procesar por lotes todas las secciones a la vez.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Une las secciones comprimidas.</strong> Usa <Link href="/es/unir-pdf" className="text-orange-600 hover:underline">Unir PDF</Link> para combinar los fragmentos comprimidos de vuelta en un solo archivo. El resultado frecuentemente es 50-70% más pequeño que la compresión directa sola.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                Esto funciona porque el algoritmo de compresión puede procesar archivos más pequeños de manera más eficiente, y cada sección se optimiza individualmente.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Alcanzar Tamaños Específicos</h2>
              <p className="text-slate-600 mb-4">
                Muchos portales de carga tienen límites estrictos de tamaño de archivo. Aquí te explicamos cómo alcanzar objetivos comunes con PDFs grandes:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Tamaño Objetivo</th>
                      <th className="text-left py-3 px-4 font-bold">Estrategia</th>
                      <th className="text-left py-3 px-4 font-bold">Mejor Herramienta</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Menos de 25MB</td>
                      <td className="py-3 px-4">Compresión Extrema, aplanar primero</td>
                      <td className="py-3 px-4"><Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link></td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">Menos de 5MB</td>
                      <td className="py-3 px-4">Dividir + Extrema + unir, o herramienta dedicada</td>
                      <td className="py-3 px-4"><Link href="/es/comprimir-pdf-a-5mb" className="text-orange-600 hover:underline">Comprimir a 5MB</Link></td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Menos de 2MB</td>
                      <td className="py-3 px-4">Dividir en páginas individuales, compresión extrema en cada una</td>
                      <td className="py-3 px-4"><Link href="/es/comprimir-pdf-a-2mb" className="text-orange-600 hover:underline">Comprimir a 2MB</Link></td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">Para email</td>
                      <td className="py-3 px-4">Media o Extrema, objetivo menor a 20MB</td>
                      <td className="py-3 px-4"><Link href="/es/comprimir-pdf-para-email" className="text-orange-600 hover:underline">Comprimir para Email</Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos Avanzados para Archivos Muy Grandes</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Aplanar Antes de Comprimir</h3>
                  <p className="text-slate-600">
                    Los PDFs grandes de software de diseño frecuentemente contienen capas, anotaciones y campos de formulario que añaden sobrecarga significativa. Usa <Link href="/es/aplanar-pdf" className="text-orange-600 hover:underline">Aplanar PDF</Link> primero para fusionar todo en contenido de página plano, luego comprime. Esto solo puede cortar 10-20% del tamaño del archivo antes de que la compresión comience.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Extraer y Reemplazar Imágenes</h3>
                  <p className="text-slate-600">
                    Si tu PDF tiene algunas imágenes extremadamente grandes que aumentan el tamaño del archivo, usa <Link href="/es/extraer-imagenes-de-pdf" className="text-orange-600 hover:underline">Extraer Imágenes</Link> para sacarlas, redimensiónalas externamente y reconstruye el documento. A veces una o dos fotos representan el 80% del tamaño del archivo.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convertir Páginas Escaneadas a Texto con Búsqueda</h3>
                  <p className="text-slate-600">
                    Si tu PDF grande es un documento escaneado, pásalo por el <Link href="/es/escaner-ocr" className="text-orange-600 hover:underline">Escáner OCR</Link> para convertir imágenes a texto con búsqueda. Aunque esto no siempre reduce el tamaño por sí solo, permite una mejor compresión en pasadas posteriores porque el texto se comprime mucho más eficientemente que las imágenes.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Usar PDF Listo para Subir</h3>
                  <p className="text-slate-600">
                    Nuestra herramienta <Link href="/es/pdf-listo-para-subir" className="text-orange-600 hover:underline">PDF Listo para Subir</Link> encadena aplanamiento y compresión en un solo paso — perfecto para preparar archivos grandes para portales de carga rápidamente.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">¿Listo para Reducir Tu PDF Grande?</h2>
            <p className="text-slate-300 mb-6">Sube tu archivo sobredimensionado y comprímelo en segundos — los usuarios Pro pueden manejar archivos de hasta 200MB.</p>
            <Link
              href="/es/comprimir-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <FileDown className="h-5 w-5" /> Comprimir PDF Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Cómo Comprimir un PDF (Reducir Tamaño Rápidamente)", href: "/es/aprender/como-comprimir-un-pdf" },
                { title: "Cómo Comprimir un PDF Sin Perder Calidad", href: "/es/aprender/comprimir-pdf-sin-perder-calidad" },
                { title: "Comprimir un PDF para Imprimir (Mantener Calidad de Impresión)", href: "/es/aprender/comprimir-pdf-para-imprimir" },
                { title: "Comprimir un PDF con Imágenes (Fotos, Escaneos, Gráficos)", href: "/es/aprender/comprimir-pdf-con-imagenes" },
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
                { q: "¿Cómo comprimo un PDF de más de 100MB?", a: "Súbelo a la herramienta Comprimir PDF de PDF.it (los usuarios Pro pueden subir archivos de hasta 200MB). Usa compresión Extrema para la máxima reducción. Si sigue siendo muy grande, divide el PDF en secciones más pequeñas primero, luego comprime cada parte por separado." },
                { q: "¿Por qué mi PDF pesa más de 50MB?", a: "Los PDFs grandes casi siempre son causados por imágenes de alta resolución o páginas escaneadas. Una sola página escaneada puede pesar 2-5MB, así que un documento escaneado de 20 páginas puede alcanzar fácilmente 50-100MB." },
                { q: "¿Puedo comprimir un PDF grande gratis?", a: "Los usuarios gratuitos pueden comprimir archivos de hasta 25MB. Para archivos mayores de 25MB, necesitas PDF.it Pro que soporta archivos de hasta 200MB e incluye procesamiento por lotes." },
                { q: "¿Debería dividir un PDF grande antes de comprimir?", a: "Sí, si la compresión sola no reduce el archivo lo suficiente. Divide en secciones, comprime cada una por separado, luego únelas de nuevo. Esto frecuentemente produce mejores resultados que comprimir el archivo completo de una vez." },
                { q: "¿Cuánto tarda comprimir un PDF de 100MB?", a: "Típicamente 30-90 segundos dependiendo del número de páginas y tipo de contenido. Los archivos con muchas imágenes tardan más. Los usuarios Pro obtienen procesamiento prioritario para resultados más rápidos." },
                { q: "¿Puedo comprimir un PDF grande en mi teléfono?", a: "Sí, pero subir archivos grandes en móvil puede ser lento dependiendo de tu conexión. PDF.it funciona en cualquier navegador móvil — no necesitas instalar ninguna app." },
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

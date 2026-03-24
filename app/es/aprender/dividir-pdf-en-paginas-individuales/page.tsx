import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Scissors, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Dividir un PDF en Páginas Individuales (Un Archivo por Página) | PDF.it",
  description:
    "Aprende cómo dividir un PDF de múltiples páginas en archivos separados de una sola página. Guía paso a paso para separar un PDF en un archivo por página — gratis, sin software.",
  keywords: "dividir pdf en páginas individuales, una página por pdf, separar páginas pdf, pdf a páginas individuales",
}

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cómo divido un PDF en páginas individuales?", "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a la herramienta Dividir PDF de PDF.it, selecciona la opción de dividir cada página en su propio archivo, y descarga un ZIP que contiene todos los archivos de páginas individuales." } },
    { "@type": "Question", "name": "¿Puedo dividir un PDF en un archivo por página gratis?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it te permite dividir PDFs gratis con archivos de hasta 25MB. Obtienes 3 operaciones gratuitas sin registrarte, y 10 por día con una cuenta gratuita." } },
    { "@type": "Question", "name": "¿En qué formato se guardan las páginas individuales?", "acceptedAnswer": { "@type": "Answer", "text": "Cada página se guarda como su propio archivo PDF. Si necesitas imágenes en su lugar, puedes convertir las páginas divididas a JPG o PNG usando las herramientas de conversión de PDF.it." } },
    { "@type": "Question", "name": "¿Puedo dividir un PDF de 100 páginas en 100 archivos separados?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it puede dividir cualquier PDF en páginas individuales sin importar el conteo de páginas. Los archivos resultantes se empaquetan en una descarga ZIP para fácil manejo." } },
    { "@type": "Question", "name": "¿Dividir un PDF reducirá la calidad de cada página?", "acceptedAnswer": { "@type": "Answer", "text": "No. Dividir un PDF simplemente separa páginas en archivos individuales sin re-codificar. Texto, imágenes y formato permanecen exactamente iguales." } },
    { "@type": "Question", "name": "¿Cómo se nombran los archivos de páginas individuales?", "acceptedAnswer": { "@type": "Answer", "text": "PDF.it automáticamente nombra cada archivo con el nombre del archivo original más el número de página (ej., documento_pagina1.pdf, documento_pagina2.pdf). Puedes renombrarlos después de descargar." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo", "name": "Cómo Dividir un PDF en Páginas Individuales",
  "description": "Separa un PDF de múltiples páginas en un archivo por página en 3 simples pasos usando PDF.it.",
  "step": [
    { "@type": "HowToStep", "name": "Sube tu PDF de múltiples páginas", "text": "Ve a la herramienta Dividir PDF de PDF.it y sube el documento que quieres dividir en páginas individuales." },
    { "@type": "HowToStep", "name": "Elige dividir cada página", "text": "Selecciona la opción de dividir cada página en su propio archivo PDF separado. Cada página se convierte en un documento independiente." },
    { "@type": "HowToStep", "name": "Descarga el archivo ZIP", "text": "Haz clic en Dividir PDF y descarga el archivo ZIP que contiene todos los archivos de páginas individuales. Extrae el ZIP para acceder a cada página por separado." }
  ]
}

export default function DividirPDFEnPaginasIndividualesPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
            <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Dividir PDF</p>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Dividir un PDF en Páginas Individuales (Un Archivo por Página)</h1>
            <p className="text-xl text-slate-300">¿Necesitas cada página de tu PDF como su propio archivo separado? Aquí te explicamos cómo separar un documento de múltiples páginas en PDFs individuales de una sola página — al instante, gratis.</p>
          </div></div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><Scissors className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">¿Listo para dividir? Salta la guía y ve directo a la herramienta.</p>
            </div>
            <Link href="/es/dividir-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Dividir PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Qué Dividir un PDF en Páginas Individuales?</h2>
              <p className="text-slate-600 mb-4">Hay muchos escenarios del mundo real donde necesitas cada página como su propio archivo. Aquí están los más comunes:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Subir a portales que aceptan páginas individuales.</strong> Algunos portales gubernamentales y de solicitudes requieren cada documento de respaldo como un archivo separado — una página para tu identificación, una para comprobante de domicilio, una para tu estado de cuenta bancario.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Distribuir páginas a diferentes personas.</strong> Divide un cuestionario de 10 páginas para que cada miembro del equipo reciba la página asignada para llenar independientemente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Crear exportaciones de imagen diapositiva por diapositiva.</strong> Divide un PDF de presentación en páginas individuales, luego convierte cada una a <Link href="/es/pdf-a-jpg" className="text-orange-600 hover:underline">JPG</Link> o <Link href="/es/pdf-a-png" className="text-orange-600 hover:underline">PNG</Link> para redes sociales o uso en sitios web.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Archivar recibos o facturas individuales.</strong> Un PDF de estado de cuenta mensual con 30 facturas puede dividirse en 30 archivos — uno por factura — para archivado organizado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Procesar páginas por separado.</strong> Cuando necesitas aplicar diferentes ediciones a diferentes páginas — rotar algunas, comprimir otras — dividir primero hace cada operación más fácil.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Dividir un PDF en Páginas Individuales (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Sube tu PDF", desc: "Ve a la herramienta Dividir PDF de PDF.it y arrastra tu archivo al área de carga. Puedes subir PDFs de hasta 25MB gratis, o hasta 200MB con una cuenta Pro." },
                  { title: "Selecciona 'Dividir cada página'", desc: "Elige la opción de dividir cada página en un archivo separado. PDF.it creará un archivo PDF por página. Verás una vista previa de todas las páginas antes de confirmar." },
                  { title: "Descarga el archivo ZIP", desc: "Haz clic en Dividir PDF. PDF.it empaqueta todos los archivos de páginas individuales en una sola descarga ZIP. Extrae el ZIP en tu computadora para acceder a cada archivo de página por separado." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Qué Hacer con Tus Archivos de Páginas Individuales</h2>
              <p className="text-slate-600 mb-4">Una vez que tengas cada página como su propio PDF, puedes procesarlas de diferentes maneras según tu objetivo:</p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convertir páginas a imágenes</h3>
                  <p className="text-slate-600">Usa <Link href="/es/pdf-a-jpg" className="text-orange-600 hover:underline">PDF a JPG</Link> o <Link href="/es/pdf-a-png" className="text-orange-600 hover:underline">PDF a PNG</Link> para convertir cada página en un archivo de imagen. Perfecto para compartir en redes sociales, incrustar en presentaciones o publicar en un sitio web.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Recombinar páginas específicas</h3>
                  <p className="text-slate-600">Después de dividir, podrías querer reensamblar algunas páginas en un orden diferente. Usa <Link href="/es/unir-pdf" className="text-orange-600 hover:underline">Unir PDF</Link> para combinar archivos de páginas seleccionadas en un nuevo documento con un orden personalizado.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Comprimir páginas individuales</h3>
                  <p className="text-slate-600">Si páginas específicas son muy grandes (común con documentos escaneados), usa <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> en esas páginas individualmente para mejor control de tamaños de archivo.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Extraer texto de páginas específicas</h3>
                  <p className="text-slate-600">¿Necesitas el texto de solo una página? Conviértela usando <Link href="/es/pdf-a-texto" className="text-orange-600 hover:underline">PDF a TXT</Link> para obtener una versión de texto plano que puedes copiar, editar o pegar en otro lugar.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dividir PDFs Grandes (50+ Páginas)</h2>
              <p className="text-slate-600 mb-4">Dividir un documento grande en docenas o cientos de archivos individuales es sencillo, pero hay algunas cosas a tener en cuenta:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>La descarga ZIP es tu amiga.</strong> PDF.it empaqueta todos los archivos en un solo ZIP, así no tienes que descargar 100 archivos uno por uno.</li>
                <li>&#10003; <strong>Los archivos se nombran secuencialmente.</strong> Cada archivo se nombra automáticamente con el número de página (pagina_1.pdf, pagina_2.pdf, etc.) para que se ordenen correctamente en tu administrador de archivos.</li>
                <li>&#10003; <strong>Los usuarios Pro obtienen procesamiento más rápido.</strong> Dividir archivos grandes con muchas páginas es más rápido con una cuenta Pro gracias al procesamiento prioritario.</li>
                <li>&#10003; <strong>Organiza en carpetas después de extraer.</strong> Después de descargar y extraer el ZIP, considera ordenar las páginas en carpetas por sección o categoría.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cuando No Necesitas Cada Página Separada</h2>
              <p className="text-slate-600 mb-4">Dividir en páginas individuales es la opción más granular, pero a veces un enfoque diferente es más práctico:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>¿Necesitas solo unas páginas específicas?</strong> Usa el enfoque de <Link href="/es/aprender/extraer-paginas-de-pdf-guia" className="text-orange-600 hover:underline">extraer páginas</Link> — selecciona solo las páginas que necesitas y obtén un solo PDF.</li>
                <li>&#10003; <strong>¿Necesitas dividir en capítulos o secciones?</strong> Usa rangos de páginas (ej., 1-10, 11-25, 26-40) en vez de páginas individuales. Esto mantiene el contenido relacionado junto.</li>
                <li>&#10003; <strong>¿Necesitas archivos más pequeños para email?</strong> Consulta nuestra guía sobre <Link href="/es/aprender/dividir-pdf-para-email" className="text-orange-600 hover:underline">dividir PDFs para email</Link> para el mejor enfoque para cumplir con los límites de adjuntos.</li>
                <li>&#10003; <strong>¿Necesitas imágenes, no PDFs?</strong> Salta la división por completo y ve directo a <Link href="/es/pdf-a-jpg" className="text-orange-600 hover:underline">PDF a JPG</Link> — convierte cada página a una imagen en un solo paso.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">¿Listo para Dividir Tu PDF en Páginas Individuales?</h2>
            <p className="text-slate-300 mb-6">Sube tu archivo y obtén un PDF por página — gratis, sin registro.</p>
            <Link href="/es/dividir-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
              <Scissors className="h-5 w-5" /> Dividir PDF Ahora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Cómo Dividir un PDF (Guía Paso a Paso)", href: "/es/aprender/como-dividir-pdf" },
                { title: "Cómo Extraer Páginas de un PDF (Conserva Solo Lo Que Necesitas)", href: "/es/aprender/extraer-paginas-de-pdf-guia" },
                { title: "Dividir un PDF para Email (Bajo Límites de Adjuntos)", href: "/es/aprender/dividir-pdf-para-email" },
                { title: "Cómo Dividir un PDF en tu Teléfono (iPhone y Android)", href: "/es/aprender/dividir-pdf-en-movil" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group">
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "¿Cómo divido un PDF en páginas individuales?", a: "Sube tu PDF a la herramienta Dividir PDF de PDF.it, selecciona la opción de dividir cada página en su propio archivo, y descarga un ZIP que contiene todos los archivos de páginas individuales." },
                { q: "¿Puedo dividir un PDF en un archivo por página gratis?", a: "Sí. PDF.it te permite dividir PDFs gratis con archivos de hasta 25MB. Obtienes 3 operaciones gratuitas sin registrarte, y 10 por día con una cuenta gratuita." },
                { q: "¿En qué formato se guardan las páginas individuales?", a: "Cada página se guarda como su propio archivo PDF. Si necesitas imágenes en su lugar, puedes convertir las páginas divididas a JPG o PNG usando las herramientas de conversión de PDF.it." },
                { q: "¿Puedo dividir un PDF de 100 páginas en 100 archivos separados?", a: "Sí. PDF.it puede dividir cualquier PDF en páginas individuales sin importar el conteo de páginas. Los archivos resultantes se empaquetan en una descarga ZIP para fácil manejo." },
                { q: "¿Dividir un PDF reducirá la calidad de cada página?", a: "No. Dividir un PDF simplemente separa páginas en archivos individuales sin re-codificar. Texto, imágenes y formato permanecen exactamente iguales." },
                { q: "¿Cómo se nombran los archivos de páginas individuales?", a: "PDF.it automáticamente nombra cada archivo con el nombre del archivo original más el número de página (ej., documento_pagina1.pdf, documento_pagina2.pdf). Puedes renombrarlos después de descargar." },
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

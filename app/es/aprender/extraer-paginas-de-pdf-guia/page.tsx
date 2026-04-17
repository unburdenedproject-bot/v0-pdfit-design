import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Scissors, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Cómo Extraer Páginas de un PDF (Conserva Solo Lo Que Necesitas) | PDF.it",
  description:
    "Aprende cómo extraer páginas específicas de un PDF y guardarlas como un nuevo archivo. Guía paso a paso para sacar páginas de documentos grandes — gratis, sin software.",
  keywords: "extraer páginas de pdf, sacar páginas de pdf, obtener páginas específicas de pdf, extraer páginas pdf en línea",
}

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cómo extraigo páginas específicas de un PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a la herramienta Dividir PDF de PDF.it, seleccióna los números de página que quieres conservar, y descarga un nuevo PDF que contiene solo esas páginas. No se necesita instalar software." } },
    { "@type": "Question", "name": "¿Puedo extraer páginas de un PDF sin perder calidad?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it extrae páginas sin re-codificarlas, así que tu texto, imágenes y formato permanecen idénticos al documento original." } },
    { "@type": "Question", "name": "¿Es gratis extraer páginas de un PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it te permite extraer páginas gratis con archivos de hasta 25MB. Obtienes 3 operaciones gratuitas sin registrarte, y 10 por día con una cuenta gratuita." } },
    { "@type": "Question", "name": "¿Puedo extraer páginas no consecutivas de un PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes selecciónar cualquier combinación de páginas — por ejemplo páginas 1, 3, 7 y 12 — y PDF.it las combinará en un solo nuevo PDF en el orden que especificaste." } },
    { "@type": "Question", "name": "¿Cómo extraigo páginas de un PDF protegido con contraseña?", "acceptedAnswer": { "@type": "Answer", "text": "Primero, usa la herramienta Desbloquear PDF de PDF.it para eliminar la protección con contraseña, luego usa la herramienta Dividir PDF para extraer las páginas que necesitas." } },
    { "@type": "Question", "name": "¿Puedo extraer páginas de un PDF en mi teléfono?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en cualquier navegador móvil. Sube tu PDF, seleccióna las páginas a extraer, y descarga el resultado — sin app necesaria." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo", "name": "Cómo Extraer Páginas de un PDF",
  "description": "Saca páginas específicas de un PDF y guárdalas como un nuevo archivo en 3 simples pasos usando PDF.it.",
  "step": [
    { "@type": "HowToStep", "name": "Sube tu PDF", "text": "Ve a la herramienta Dividir PDF de PDF.it y sube el documento del que quieres extraer páginas haciendo clic o arrastrándolo al área de carga." },
    { "@type": "HowToStep", "name": "Selecciona las páginas a extraer", "text": "Ingresa los números de página o rangos de páginas que quieres conservar. Puedes selecciónar páginas individuales como 1, 3, 5 o rangos como 1-5, 10-15." },
    { "@type": "HowToStep", "name": "Descarga tus páginas extraídas", "text": "Haz clic en Dividir PDF y descarga tu nuevo documento que contiene solo las páginas que selecciónaste. El archivo original permanece sin cambios." }
  ]
}

export default function ExtraerPaginasDePDFGuiaPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
            <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Dividir PDF</p>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Cómo Extraer Páginas de un PDF (Conserva Solo Lo Que Necesitas)</h1>
            <p className="text-xl text-slate-300">¿Tienes un informe de 50 páginas pero solo necesitas las páginas 3, 7 y 12? Aquí te explicamos cómo sacar exactamente las páginas que necesitas de cualquier PDF — sin instalar software ni perder calidad.</p>
          </div></div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><Scissors className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">¿Listo para extraer páginas? Salta la guía y ve directo a la herramienta.</p>
            </div>
            <Link href="/es/dividir-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Dividir PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Qué Extraer Páginas de un PDF?</h2>
              <p className="text-slate-600 mb-4">La mayoría de los PDFs contienen más contenido del que realmente necesitas. Extraer páginas específicas te permite crear un documento más pequeño y enfocado. Razones comunes incluyen:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Enviar secciones específicas.</strong> Un empleador pide la página 2 de tu certificado de estudios, no el documento completo de 15 páginas. Extrae solo esa página.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Compartir capítulos relevantes.</strong> Saca el capítulo 4 de un PDF de libro de texto para compartirlo con un grupo de estudio, en vez de enviar el libro completo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Eliminar contenido sensible.</strong> Extrae solo las páginas que quieres compartir y deja atrás las páginas con información privada o confidencial.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Reducir tamaño de archivo para email.</strong> En vez de comprimir un PDF grande, extrae solo las páginas que necesitas para que el archivo sea lo suficientemente pequeño para <Link href="/es/comprimir-pdf-para-email" className="text-[#14D8C4] hover:underline">enviar como adjunto de email</Link>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">5.</span>
                  <span><strong>Crear materiales de referencia.</strong> Saca unas páginas clave de un manual de presentación para crear un material de referencia para una reunión o clase.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Extraer Páginas de un PDF (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Sube tu PDF", desc: "Ve a la herramienta Dividir PDF de PDF.it y arrastra tu archivo al área de carga, o haz clic para buscar. Archivos hasta 25MB son gratis — usuarios Pro pueden subir archivos hasta 200MB." },
                  { title: "Selecciona las páginas que quieres conservar", desc: "Ingresa los números de página o rangos que necesitas. Por ejemplo, escribe \"1, 3, 7-12\" para extraer las páginas 1, 3, y 7 a 12. También puedes hacer clic en las miniaturas de páginas para selecciónarlas visualmente." },
                  { title: "Descarga tu nuevo PDF", desc: "Haz clic en Dividir PDF y descarga el resultado. Tu nuevo archivo contiene solo las páginas que selecciónaste, en el orden que especificaste. El archivo original no se modifica." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Extraer Páginas No Consecutivas</h2>
              <p className="text-slate-600 mb-4">Una de las características más útiles de la extracción de páginas es selecciónar páginas que no están en fila. Por ejemplo, de un contrato de 30 páginas podrías necesitar solo:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Página 1</strong> — la portada con nombres de las partes</li>
                <li>&#10003; <strong>Páginas 5-8</strong> — la sección de términos de pago</li>
                <li>&#10003; <strong>Página 15</strong> — la cláusula de responsabilidad</li>
                <li>&#10003; <strong>Página 30</strong> — la página de firmas</li>
              </ul>
              <p className="text-slate-600 mt-4">En PDF.it, ingresarías <strong>&quot;1, 5-8, 15, 30&quot;</strong> y obtendrías un PDF limpio de 7 páginas con exactamente lo que necesitas. Esto es mucho más eficiente que imprimir todo el documento o intentar navegar por él durante una reunión.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Qué Hacer Después de Extraer Páginas</h2>
              <p className="text-slate-600 mb-4">Una vez que hayas extraído las páginas que necesitas, podrías querer tomar pasos adicionales dependiendo de tu caso de uso:</p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Unir páginas extraídas con otros documentos</h3>
                  <p className="text-slate-600">Si extrajiste páginas de múltiples PDFs, usa <Link href="/es/unir-pdf" className="text-[#14D8C4] hover:underline">Unir PDF</Link> para combinarlas en un solo documento. Por ejemplo, saca la página 1 de tu PDF de currículum y las páginas 3-5 de un portafolio de proyectos, luego únelos.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Comprimir el resultado</h3>
                  <p className="text-slate-600">Incluso unas pocas páginas extraídas pueden ser grandes si contienen imágenes de alta resolución o escaneos. Usa <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> para reducir el tamaño del archivo antes de compartir.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convertir a otro formato</h3>
                  <p className="text-slate-600">¿Necesitas las páginas extraídas como imágenes? Usa <Link href="/es/pdf-a-jpg" className="text-[#14D8C4] hover:underline">PDF a JPG</Link> o <Link href="/es/pdf-a-png" className="text-[#14D8C4] hover:underline">PDF a PNG</Link> para convertirlas. Si necesitas texto editable, prueba <Link href="/es/pdf-a-texto" className="text-[#14D8C4] hover:underline">PDF a TXT</Link>.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para Extraer Páginas como un Profesional</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Verifica el conteo de páginas primero.</strong> Abre tu PDF y anota el total de páginas y cuáles necesitas antes de subir.</li>
                <li>&#10003; <strong>Usa rangos de páginas para mayor velocidad.</strong> En vez de escribir &quot;5, 6, 7, 8, 9&quot;, usa &quot;5-9&quot; para ahorrar tiempo.</li>
                <li>&#10003; <strong>Desbloquea PDFs protegidos primero.</strong> Si el PDF está protegido con contraseña, usa <Link href="/es/desbloquear-pdf" className="text-[#14D8C4] hover:underline">Desbloquear PDF</Link> antes de intentar extraer páginas.</li>
                <li>&#10003; <strong>Corrige problemas de rotación.</strong> Si algunas páginas están rotadas incorrectamente, usa <Link href="/es/rotar-pdf" className="text-[#14D8C4] hover:underline">Rotar PDF</Link> después de extraer para corregirlas.</li>
                <li>&#10003; <strong>Extracción por lotes para múltiples archivos.</strong> Los usuarios Pro pueden procesar múltiples PDFs a la vez usando procesamiento por lotes, extrayendo páginas de varios documentos en una sola operación.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">¿Listo para Extraer Páginas de Tu PDF?</h2>
            <p className="text-slate-300 mb-6">Sube tu archivo y conserva solo las páginas que necesitas — gratis, sin registro.</p>
            <Link href="/es/dividir-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
              <Scissors className="h-5 w-5" /> Dividir PDF Ahora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Cómo Dividir un PDF (Guía Paso a Paso)", href: "/es/aprender/como-dividir-pdf" },
                { title: "Dividir un PDF para Email (Bajo Límites de Adjuntos)", href: "/es/aprender/dividir-pdf-para-email" },
                { title: "Dividir PDF en Páginas Individuales (Un Archivo por Página)", href: "/es/aprender/dividir-pdf-en-paginas-individuales" },
                { title: "Cómo Dividir un PDF en tu Teléfono (iPhone y Android)", href: "/es/aprender/dividir-pdf-en-movil" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group">
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
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
                { q: "¿Cómo extraigo páginas específicas de un PDF?", a: "Sube tu PDF a la herramienta Dividir PDF de PDF.it, seleccióna los números de página que quieres conservar, y descarga un nuevo PDF que contiene solo esas páginas. No se necesita instalar software." },
                { q: "¿Puedo extraer páginas de un PDF sin perder calidad?", a: "Sí. PDF.it extrae páginas sin re-codificarlas, así que tu texto, imágenes y formato permanecen idénticos al documento original." },
                { q: "¿Es gratis extraer páginas de un PDF?", a: "Sí. PDF.it te permite extraer páginas gratis con archivos de hasta 25MB. Obtienes 3 operaciones gratuitas sin registrarte, y 10 por día con una cuenta gratuita." },
                { q: "¿Puedo extraer páginas no consecutivas de un PDF?", a: "Sí. Puedes selecciónar cualquier combinación de páginas — por ejemplo páginas 1, 3, 7 y 12 — y PDF.it las combinará en un solo nuevo PDF en el orden que especificaste." },
                { q: "¿Cómo extraigo páginas de un PDF protegido con contraseña?", a: "Primero, usa la herramienta Desbloquear PDF de PDF.it para eliminar la protección con contraseña, luego usa la herramienta Dividir PDF para extraer las páginas que necesitas." },
                { q: "¿Puedo extraer páginas de un PDF en mi teléfono?", a: "Sí. PDF.it funciona en cualquier navegador móvil. Sube tu PDF, seleccióna las páginas a extraer, y descarga el resultado — sin app necesaria." },
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

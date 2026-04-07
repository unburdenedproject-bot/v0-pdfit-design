import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileOutput, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Extraer Páginas de un PDF (Guardar Páginas Seleccionadas como Nuevo PDF) | PDF.it",
  description:
    "Aprende cómo extraer páginas específicas de un PDF y guardarlas como un nuevo archivo. Saca recibos, capítulos, formularios, o cualquier combinación de páginas — gratis, en línea, sin software.",
  keywords: "extraer páginas de pdf, guardar páginas específicas pdf, sacar páginas de pdf, extraer páginas pdf en línea, seleccionar páginas de pdf",
}

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cómo extraigo páginas específicas de un PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it, selecciona o escribe los números de página que quieres extraer, haz clic en Extraer, y descarga un nuevo PDF que contiene solo esas páginas. El archivo original no se modifica." } },
    { "@type": "Question", "name": "¿Puedo extraer páginas no consecutivas de un PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes elegir cualquier combinación de páginas — por ejemplo, páginas 2, 5 y 11. No necesitan estar en orden ni una al lado de otra. Las páginas extraídas aparecerán en el orden que especifiques." } },
    { "@type": "Question", "name": "¿Cuál es la diferencia entre extraer y dividir un PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Extraer saca páginas seleccionadas en un nuevo archivo. Dividir separa un PDF en múltiples archivos separados. Usa extraer cuando necesites una sola salida; usa dividir cuando necesites múltiples archivos de salida." } },
    { "@type": "Question", "name": "¿Puedo extraer páginas de un PDF escaneado?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Los PDFs escaneados funcionan de la misma manera — cada página escaneada es una página en el PDF. Selecciona los números de página que necesitas y extráelos. La calidad de imagen de cada página se preserva exactamente." } },
    { "@type": "Question", "name": "¿El PDF extraído es más pequeño que el original?", "acceptedAnswer": { "@type": "Answer", "text": "Generalmente sí. El archivo extraído solo contiene las páginas que seleccionaste, así que es más pequeño que el documento completo. Si necesitas que sea aún más pequeño, comprime el archivo extraído usando la herramienta Comprimir PDF." } },
    { "@type": "Question", "name": "¿Puedo extraer páginas de un PDF en mi teléfono?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en cualquier navegador móvil. Abre la herramienta Extraer Páginas en Safari o Chrome, sube tu PDF, selecciona las páginas, y descarga el resultado — sin app necesaria." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo", "name": "Cómo Extraer Páginas de un PDF",
  "description": "Saca páginas específicas de un PDF y guárdalas como un nuevo archivo en 3 simples pasos usando PDF.it.",
  "step": [
    { "@type": "HowToStep", "name": "Sube tu PDF", "text": "Ve a la herramienta Extraer Páginas de PDF.it y sube tu archivo haciendo clic o arrastrándolo al área de carga." },
    { "@type": "HowToStep", "name": "Selecciona las páginas a extraer", "text": "Haz clic en las páginas que quieres o escribe números de página (ej., 2, 5, 8-12). Las páginas seleccionadas se resaltan para que puedas ver exactamente qué estás extrayendo." },
    { "@type": "HowToStep", "name": "Descarga tu nuevo PDF", "text": "Haz clic en Extraer Páginas y descarga el nuevo archivo que contiene solo tus páginas seleccionadas. El PDF original permanece sin cambios." }
  ]
}

export default function ExtraerPaginasDePDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
            <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Extraer Páginas</p>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Extraer Páginas de un PDF (Guardar Páginas Seleccionadas como Nuevo PDF)</h1>
            <p className="text-xl text-slate-300">¿Necesitas solo unas páginas de un documento grande? Aquí te explicamos cómo sacar exactamente las páginas que necesitas y guardarlas como un nuevo archivo PDF limpio.</p>
          </div></div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><FileOutput className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">¿Listo para extraer páginas? Salta la guía y ve directo a la herramienta.</p>
            </div>
            <Link href="/es/dividir-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Extraer Páginas Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Qué Extraer Páginas de un PDF?</h2>
              <p className="text-slate-600 mb-4">Los PDFs frecuentemente contienen más de lo que necesitas. En vez de enviar un archivo de 50 páginas cuando alguien solo necesita 3, extrae esas páginas en un nuevo documento. Casos de uso comunes:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Sacar un recibo o factura.</strong> Tu estado de cuenta bancario tiene 12 meses de datos — extrae solo el mes que necesitas para tu informe de gastos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Tomar un capítulo de un libro de texto.</strong> Estudia solo el capítulo que necesitas sin cargar el libro completo en tu dispositivo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Aislar un formulario.</strong> Un paquete gubernamental tiene 20 páginas pero solo una es el formulario que necesitas llenar y devolver.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Crear un material de referencia personalizado.</strong> Saca páginas de diferentes secciones de un manual de capacitación para crear un documento de referencia enfocado.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Extraer Páginas (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Sube tu PDF", desc: "Ve a la herramienta Dividir PDF y arrastra tu archivo al área de carga, o haz clic para buscar. Archivos hasta 25MB son gratis — usuarios Pro pueden subir hasta 200MB." },
                  { title: "Selecciona las páginas que quieres", desc: "Escribe los números de página que necesitas — por ejemplo, 2, 5, 8-12. Puedes mezclar páginas individuales y rangos. Las páginas aparecerán en tu archivo de salida en el orden que especifiques." },
                  { title: "Descarga tu nuevo PDF", desc: "Haz clic en Extraer y descarga el nuevo archivo que contiene solo tus páginas seleccionadas. El PDF original no se cambia de ninguna manera." },
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
              <p className="text-slate-600 mb-4">No tienes que extraer páginas que estén una al lado de otra. PDF.it te permite elegir cualquier combinación. Por ejemplo:</p>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 space-y-3">
                <p className="text-slate-700"><strong>Escenario:</strong> Necesitas las páginas 3, 7 y 15-18 de un contrato de 25 páginas.</p>
                <p className="text-slate-700"><strong>Escribe:</strong> <span className="font-mono bg-white px-2 py-1 rounded border text-[#14D8C4]">3, 7, 15-18</span></p>
                <p className="text-slate-700"><strong>Resultado:</strong> Un nuevo PDF con 6 páginas — página 3, página 7, y páginas 15 a 18, en ese orden.</p>
              </div>
              <p className="text-slate-600 mt-4">Esto es especialmente útil para sacar cláusulas específicas de documentos legales, preguntas seleccionadas de un examen, o diapositivas particulares de un PDF de presentación.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tu Archivo Original Permanece Intacto</h2>
              <p className="text-slate-600 mb-4">Extraer páginas no modifica tu PDF fuente. La herramienta crea un archivo completamente nuevo con copias de las páginas que seleccionaste. Tu documento original mantiene todas sus páginas, formato y metadatos exactamente como estaban.</p>
              <p className="text-slate-600">Si quieres combinar páginas extraídas con páginas de otros PDFs, usa <Link href="/es/unir-pdf" className="text-[#14D8C4] hover:underline">Unir PDF</Link> para juntarlas en un solo documento.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Qué Hacer Después de Extraer Páginas</h2>
              <p className="text-slate-600 mb-4">Una vez que tengas tu PDF extraído, podrías querer refinarlo más:</p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Comprímelo</strong> para reducir el tamaño del archivo usando <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> — especialmente útil si las páginas extraídas contienen imágenes escaneadas.</li>
                <li>✓ <strong>Únelo</strong> con otros documentos usando <Link href="/es/unir-pdf" className="text-[#14D8C4] hover:underline">Unir PDF</Link> para construir un documento personalizado de múltiples fuentes.</li>
                <li>✓ <strong>Conviértelo</strong> a otro formato — por ejemplo, <Link href="/es/pdf-a-word" className="text-[#14D8C4] hover:underline">PDF a Word</Link> si necesitas editar el contenido.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para Mejor Extracción de Páginas</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Verifica el Conteo de Páginas Primero</h3>
                  <p className="text-slate-600">Abre tu PDF y anota el número total de páginas y cuáles necesitas. La mayoría de los visores PDF muestran esto en la barra de herramientas (ej., "Página 1 de 47"). Esto te ayuda a ingresar los números de página correctos al extraer.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Usa la Tabla de Contenidos</h3>
                  <p className="text-slate-600">Si el PDF tiene una tabla de contenidos o marcadores, usa esos números de página como guía. Recuerda que los números de página impresos en el documento pueden diferir de los números de página reales del PDF si el archivo tiene una portada o un prefacio con números romanos.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Extrae y Comprime para Compartir</h3>
                  <p className="text-slate-600">Después de extraer páginas, pasa el nuevo archivo por <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> antes de enviarlo por email. Esto asegura que el archivo sea lo más pequeño posible para el destinatario.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">¿Listo para Extraer Páginas?</h2>
            <p className="text-slate-300 mb-6">Sube tu PDF y saca las páginas que necesitas en segundos — gratis, sin registro.</p>
            <Link href="/es/dividir-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
              <FileOutput className="h-5 w-5" /> Extraer Páginas Ahora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Cómo Dividir un PDF en Línea (Extraer Páginas o Rangos)", href: "/es/aprender/como-dividir-pdf" },
                { title: "Dividir un PDF para Email (Bajo Límites de Adjuntos)", href: "/es/aprender/dividir-pdf-para-email" },
                { title: "Dividir PDF en Páginas Individuales (Un Archivo por Página)", href: "/es/aprender/dividir-pdf-en-paginas-individuales" },
                { title: "Dividir un PDF en tu Teléfono (iPhone y Android)", href: "/es/aprender/dividir-pdf-en-movil" },
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
                { q: "¿Cómo extraigo páginas específicas de un PDF?", a: "Sube tu PDF a PDF.it, selecciona o escribe los números de página que quieres extraer, haz clic en Extraer, y descarga un nuevo PDF que contiene solo esas páginas. El archivo original no se modifica." },
                { q: "¿Puedo extraer páginas no consecutivas de un PDF?", a: "Sí. Puedes elegir cualquier combinación de páginas — por ejemplo, páginas 2, 5 y 11. No necesitan estar en orden ni una al lado de otra. Las páginas extraídas aparecerán en el orden que especifiques." },
                { q: "¿Cuál es la diferencia entre extraer y dividir un PDF?", a: "Extraer saca páginas seleccionadas en un nuevo archivo. Dividir separa un PDF en múltiples archivos separados. Usa extraer cuando necesites una sola salida; usa dividir cuando necesites múltiples archivos de salida." },
                { q: "¿Puedo extraer páginas de un PDF escaneado?", a: "Sí. Los PDFs escaneados funcionan de la misma manera — cada página escaneada es una página en el PDF. Selecciona los números de página que necesitas y extráelos. La calidad de imagen de cada página se preserva exactamente." },
                { q: "¿El PDF extraído es más pequeño que el original?", a: "Generalmente sí. El archivo extraído solo contiene las páginas que seleccionaste, así que es más pequeño que el documento completo. Si necesitas que sea aún más pequeño, comprime el archivo extraído usando la herramienta Comprimir PDF." },
                { q: "¿Puedo extraer páginas de un PDF en mi teléfono?", a: "Sí. PDF.it funciona en cualquier navegador móvil. Abre la herramienta Extraer Páginas en Safari o Chrome, sube tu PDF, selecciona las páginas, y descarga el resultado — sin app necesaria." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}">
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

import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileDown, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Comprimir un PDF con Imágenes (Fotos, Escaneos, Gráficos) | PDF.it",
  description:
    "Aprende cómo comprimir PDFs con muchas imágenes — álbumes de fotos, documentos escaneados e informes con gráficos. Reduce el tamaño del archivo manteniendo las imágenes claras y legibles.",
  keywords: "comprimir pdf con imágenes, reducir tamaño imagen pdf, comprimir pdf escaneado, pdf con fotos muy grande",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Por qué los PDFs con imágenes son tan grandes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las imágenes son el tipo de contenido más pesado en un PDF. Una sola foto de alta resolución puede pesar 3-10MB. Las páginas escaneadas se almacenan como imágenes de página completa a 200-400 DPI, haciendo que cada página pese 2-5MB. Los PDFs solo de texto son diminutos en comparación — generalmente menos de 100KB por página." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir un PDF con fotos sin arruinarlas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. La compresión Ligera mantiene las fotos en su resolución original. La compresión Media reduce ligeramente la resolución pero sigue siendo excelente para visualización en pantalla. Solo la compresión Extrema reduce visiblemente la calidad de las fotos." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo comprimo un PDF escaneado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los PDFs escaneados se comprimen muy bien porque son mayormente imágenes. Sube a PDF.it, elige compresión Media o Extrema, y típicamente puedes reducir un documento escaneado de 20MB a 2-5MB manteniendo el texto legible." }
    },
    {
      "@type": "Question",
      "name": "¿Comprimir eliminará mis imágenes del PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. La compresión reduce la resolución y el tamaño de archivo de las imágenes, pero nunca las elimina. Todas tus fotos, gráficos y elementos visuales permanecen en el documento — solo ocupan menos espacio." }
    },
    {
      "@type": "Question",
      "name": "¿Qué nivel de compresión es mejor para PDFs con fotos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para compartir en pantalla: Media da el mejor equilibrio de calidad y tamaño. Para impresión: usa Ligera para preservar la resolución completa. Para límites estrictos de carga: Extrema obtiene el archivo más pequeño, pero las fotos pueden perder algo de detalle." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo extraer imágenes antes de comprimir para ahorrar más espacio?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Usa la herramienta Extraer Imágenes de PDF.it para sacar las imágenes sobredimensionadas, redimensiónalas o comprímelas por separado, luego reconstruye el PDF. Esto te da control preciso sobre qué imágenes se comprimen y cuánto." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Comprimir un PDF con Imágenes",
  "description": "Reduce el tamaño de un PDF con muchas imágenes en 3 simples pasos usando PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube tu PDF con imágenes",
      "text": "Ve a la herramienta Comprimir PDF de PDF.it y sube tu archivo que contiene fotos, escaneos o gráficos."
    },
    {
      "@type": "HowToStep",
      "name": "Elige el nivel de compresión correcto",
      "text": "Selecciona Media para el mejor equilibrio de calidad de imagen y tamaño de archivo. Usa Ligera si la calidad de imagen es crítica, o Extrema si necesitas el archivo más pequeño posible."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga y verifica la calidad de imagen",
      "text": "Descarga el PDF comprimido y desplázate para verificar que las imágenes aún se ven aceptables para tu caso de uso. Si es necesario, prueba un nivel de compresión diferente."
    }
  ]
}

export default function ComprimirPDFConImagenesPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Comprimir PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir un PDF con Imágenes (Fotos, Escaneos, Gráficos)</h1>
              <p className="text-xl text-slate-300">Tu PDF está lleno de fotos, páginas escaneadas o gráficos — y el tamaño del archivo se ha disparado. Aquí te explicamos cómo comprimir PDFs con muchas imágenes sin destruir lo que los hace útiles.</p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><FileDown className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">¿Listo para comprimir? Salta la guía y ve directo a la herramienta.</p>
            </div>
            <Link href="/es/comprimir-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Comprimir PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Qué los PDFs con Imágenes Son Tan Grandes</h2>
              <p className="text-slate-600 mb-4">Las imágenes son el mayor factor del tamaño de archivo de un PDF. Una página solo de texto típicamente pesa 10-50KB, pero agrega una foto y esa página puede saltar a 3-10MB. Esto es lo que hace que los PDFs con muchas imágenes sean tan pesados:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Fotos de alta resolución.</strong> Una sola foto de 12 megapíxeles incrustada a resolución completa puede pesar 5-10MB. Informes con 10-20 fotos de productos pueden alcanzar fácilmente 50-100MB.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Documentos escaneados.</strong> Los escáneres guardan cada página como una imagen a resolución completa — típicamente 2-5MB por página a 300 DPI. Un contrato escaneado de 30 páginas puede pesar 60-150MB.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Gráficos e infografías.</strong> Los gráficos ricos en datos con degradados, sombras y transparencias se almacenan como datos de imagen complejos que ocupan espacio significativo.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Imágenes duplicadas.</strong> Los PDFs a veces incrustan el mismo logo, imagen de encabezado o marca de agua por separado en cada página en lugar de referenciarlo una vez. Las herramientas de compresión pueden detectar y corregir esto.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Comprimir un PDF con Imágenes (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Sube tu PDF con imágenes", desc: "Ve a la herramienta Comprimir PDF y sube tu archivo. Archivos hasta 25MB son gratis — los usuarios Pro pueden subir archivos de hasta 200MB, lo que cubre la mayoría de los documentos con muchas imágenes." },
                  { title: "Elige el nivel de compresión correcto", desc: "Para PDFs con muchas imágenes, Media es usualmente el mejor punto de partida. Reduce significativamente el tamaño de las imágenes manteniéndolas claras para visualización en pantalla. Usa Ligera si las fotos deben mantenerse impecables, o Extrema si necesitas el archivo más pequeño posible." },
                  { title: "Descarga y verifica la calidad de imagen", desc: "Descarga el PDF comprimido y haz zoom en las imágenes. ¿Son lo suficientemente nítidas para tus necesidades? Si Media produjo artefactos, prueba Ligera. Si necesitas que sea más pequeño, prueba Extrema." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Mejor Nivel de Compresión por Tipo de Imagen</h2>
              <p className="text-slate-600 mb-4">Diferentes tipos de imágenes se comprimen de manera diferente. Aquí tienes una guía para elegir el nivel correcto:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead><tr className="bg-slate-900 text-white"><th className="text-left py-3 px-4 font-bold">Tipo de Imagen</th><th className="text-left py-3 px-4 font-bold">Nivel Recomendado</th><th className="text-left py-3 px-4 font-bold">Ahorro Esperado</th></tr></thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Fotografías</td><td className="py-3 px-4 text-[#14D8C4] font-semibold">Media</td><td className="py-3 px-4">40-70% reducción</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Páginas escaneadas</td><td className="py-3 px-4 text-[#14D8C4] font-semibold">Media o Extrema</td><td className="py-3 px-4">60-85% reducción</td></tr>
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Gráficos y tablas</td><td className="py-3 px-4 text-[#14D8C4] font-semibold">Media</td><td className="py-3 px-4">30-50% reducción</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Logos e iconos</td><td className="py-3 px-4 text-[#14D8C4] font-semibold">Ligera</td><td className="py-3 px-4">10-20% reducción</td></tr>
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Capturas de pantalla</td><td className="py-3 px-4 text-[#14D8C4] font-semibold">Media o Extrema</td><td className="py-3 px-4">50-75% reducción</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos Especiales para PDFs Escaneados</h2>
              <p className="text-slate-600 mb-4">Los documentos escaneados son el tipo más común de PDF sobredimensionado con muchas imágenes. Se comprimen extremadamente bien porque cada página es esencialmente una fotografía. Así es como obtener los mejores resultados:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Usa compresión Media o Extrema.</strong> El texto escaneado se mantiene legible incluso a resoluciones más bajas porque nuestros ojos pueden llenar los vacíos. La compresión Media típicamente reduce un documento escaneado de 20MB a 3-5MB.</li>
                <li>&#10003; <strong>Ejecuta OCR primero.</strong> Usa el <Link href="/es/escaner-ocr" className="text-[#14D8C4] hover:underline">Escáner OCR</Link> para convertir imágenes escaneadas a texto con búsqueda. Esto hace el documento más útil y puede mejorar la eficiencia de la compresión.</li>
                <li>&#10003; <strong>Limpia escaneos de teléfono.</strong> Si el documento fue escaneado con la cámara del teléfono, usa <Link href="/es/limpiar-escaneo" className="text-[#14D8C4] hover:underline">Limpieza de Escaneo</Link> primero para eliminar sombras y enderezar páginas, luego comprime.</li>
                <li>&#10003; <strong>Aplana anotaciones.</strong> Si has anotado el PDF escaneado, <Link href="/es/aplanar-pdf" className="text-[#14D8C4] hover:underline">aplánalo primero</Link> para fusionar las anotaciones en la página antes de comprimir.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Estrategias Avanzadas para PDFs con Muchas Imágenes</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Extraer y Optimizar Imágenes Individuales</h3>
                  <p className="text-slate-600">Si algunas imágenes sobredimensionadas están aumentando el tamaño de tu archivo, usa <Link href="/es/extraer-imagenes-de-pdf" className="text-[#14D8C4] hover:underline">Extraer Imágenes de PDF</Link> para sacarlas. Redimensiona o comprime cada una individualmente, luego reconstruye el documento. Esto te da control preciso sobre la calidad.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convertir a JPG para Compartir</h3>
                  <p className="text-slate-600">Si solo necesitas compartir las imágenes (no el PDF completo), usa <Link href="/es/pdf-a-jpg" className="text-[#14D8C4] hover:underline">PDF a JPG</Link> para convertir páginas en imágenes individuales. Los JPGs son mucho más pequeños que la página PDF equivalente y más fáciles de compartir en apps de mensajería.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Dividir Antes de Comprimir</h3>
                  <p className="text-slate-600">Para PDFs muy grandes con muchas imágenes (50MB+), <Link href="/es/dividir-pdf" className="text-[#14D8C4] hover:underline">divide el PDF</Link> en secciones de 10-20 páginas, comprime cada sección, luego <Link href="/es/unir-pdf" className="text-[#14D8C4] hover:underline">únelas de nuevo</Link>. Esto frecuentemente produce mejores ratios de compresión que procesar el archivo completo de una vez.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Usar PDF Listo para Subir</h3>
                  <p className="text-slate-600">Para el flujo de trabajo más rápido, usa nuestra herramienta <Link href="/es/pdf-listo-para-subir" className="text-[#14D8C4] hover:underline">PDF Listo para Subir</Link>. Encadena aplanamiento y compresión en un solo paso — ideal para preparar archivos con muchas imágenes para portales de envío.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">¿Listo para Comprimir Tu PDF con Imágenes?</h2>
            <p className="text-slate-300 mb-6">Sube tu archivo y reduce el tamaño manteniendo las imágenes claras — gratis, sin registro.</p>
            <Link href="/es/comprimir-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
              <FileDown className="h-5 w-5" /> Comprimir PDF Ahora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Cómo Comprimir un PDF (Reducir Tamaño Rápidamente)", href: "/es/aprender/como-comprimir-un-pdf" },
                { title: "Cómo Comprimir un PDF Sin Perder Calidad", href: "/es/aprender/comprimir-pdf-sin-perder-calidad" },
                { title: "Comprimir un PDF para Imprimir (Mantener Calidad de Impresión)", href: "/es/aprender/comprimir-pdf-para-imprimir" },
                { title: "Comprimir un PDF Grande (50MB, 100MB o Más)", href: "/es/aprender/comprimir-pdf-grande" },
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
                { q: "¿Por qué los PDFs con imágenes son tan grandes?", a: "Las imágenes son el tipo de contenido más pesado en un PDF. Una sola foto de alta resolución puede pesar 3-10MB. Las páginas escaneadas se almacenan como imágenes de página completa a 200-400 DPI, haciendo que cada página pese 2-5MB. Los PDFs solo de texto son diminutos en comparación." },
                { q: "¿Puedo comprimir un PDF con fotos sin arruinarlas?", a: "Sí. La compresión Ligera mantiene las fotos en su resolución original. La compresión Media reduce ligeramente la resolución pero sigue siendo excelente para visualización en pantalla. Solo la compresión Extrema reduce visiblemente la calidad de las fotos." },
                { q: "¿Cómo comprimo un PDF escaneado?", a: "Los PDFs escaneados se comprimen muy bien porque son mayormente imágenes. Sube a PDF.it, elige compresión Media o Extrema, y típicamente puedes reducir un documento escaneado de 20MB a 2-5MB manteniendo el texto legible." },
                { q: "¿Comprimir eliminará mis imágenes del PDF?", a: "No. La compresión reduce la resolución y el tamaño de archivo de las imágenes, pero nunca las elimina. Todas tus fotos, gráficos y elementos visuales permanecen en el documento — solo ocupan menos espacio." },
                { q: "¿Qué nivel de compresión es mejor para PDFs con fotos?", a: "Para compartir en pantalla: Media da el mejor equilibrio. Para impresión: usa Ligera para preservar la resolución completa. Para límites estrictos de carga: Extrema obtiene el archivo más pequeño, pero las fotos pueden perder algo de detalle." },
                { q: "¿Puedo extraer imágenes antes de comprimir para ahorrar más espacio?", a: "Sí. Usa la herramienta Extraer Imágenes de PDF.it para sacar las imágenes sobredimensionadas, redimensiónalas o comprímelas por separado, luego reconstruye el PDF. Esto te da control preciso sobre qué imágenes se comprimen." },
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

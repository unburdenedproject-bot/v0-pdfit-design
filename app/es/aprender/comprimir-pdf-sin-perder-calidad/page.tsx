import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileDown, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Cómo Comprimir un PDF Sin Perder Calidad | PDF.it",
  description:
    "Aprende cómo reducir el tamaño de un PDF sin perder calidad. Mantén el texto nítido y las imágenes claras mientras reduces tu documento — guía paso a paso con consejos de compresión sin pérdida.",
  keywords: "comprimir pdf sin perder calidad, reducir tamaño pdf mantener calidad, compresión pdf sin pérdida, comprimir pdf sin perder calidad",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Puedo comprimir un PDF sin perder calidad?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. La compresión Ligera elimina datos redundantes, fuentes no usadas y metadatos sin tocar la calidad de imagen ni la nitidez del texto. El resultado visual es virtualmente idéntico al original." }
    },
    {
      "@type": "Question",
      "name": "¿Qué es la compresión PDF sin pérdida?",
      "acceptedAnswer": { "@type": "Answer", "text": "La compresión sin pérdida reduce el tamaño del archivo eliminando objetos duplicados, comprimiendo flujos de datos y eliminando metadatos — sin remuestrear imágenes ni reducir su resolución. La salida se ve idéntica a la entrada." }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto más pequeño será mi PDF con compresión sin pérdida?",
      "acceptedAnswer": { "@type": "Answer", "text": "Típicamente 10-30% más pequeño. Si el PDF tiene muchos datos redundantes o fuentes incrustadas, el ahorro puede ser mayor. Para reducciones más grandes necesitas compresión con pérdida, que puede reducir ligeramente la calidad de imagen." }
    },
    {
      "@type": "Question",
      "name": "¿El texto se mantiene nítido después de comprimir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutamente. El texto del PDF se almacena como datos vectoriales, no como imágenes, así que la compresión nunca afecta la nitidez del texto. Solo las imágenes incrustadas pueden verse afectadas, y solo si eliges compresión Media o Extrema." }
    },
    {
      "@type": "Question",
      "name": "¿Debería usar compresión Ligera o Media para mantener la calidad?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usa Ligera si la calidad es tu máxima prioridad — mantiene las imágenes en su resolución original. Media es un buen punto medio que reduce ligeramente la resolución de imagen pero sigue siendo visualmente indistinguible para la mayoría de los documentos." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir un PDF sin perder calidad en mi teléfono?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en cualquier navegador móvil. Sube tu PDF, selecciona compresión Ligera y descarga el resultado. No necesitas app — funciona en iPhone y Android." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Comprimir un PDF Sin Perder Calidad",
  "description": "Reduce el tamaño del archivo PDF manteniendo el texto y las imágenes en plena calidad en 3 simples pasos.",
  "step": [
    { "@type": "HowToStep", "name": "Sube tu PDF", "text": "Ve a la herramienta Comprimir PDF de PDF.it y sube el archivo que quieres reducir haciendo clic o arrastrándolo al área de carga." },
    { "@type": "HowToStep", "name": "Selecciona compresión Ligera", "text": "Elige el nivel de compresión Ligera para mantener las imágenes en su resolución original mientras eliminas datos redundantes, fuentes no usadas y metadatos." },
    { "@type": "HowToStep", "name": "Descarga tu PDF comprimido", "text": "Haz clic en Comprimir PDF y descarga el archivo más pequeño. Compáralo con el original para verificar que la calidad se preserva." }
  ]
}

export default function ComprimirPDFSinPerderCalidadPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
            <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Comprimir PDF</p>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Cómo Comprimir un PDF Sin Perder Calidad</h1>
            <p className="text-xl text-slate-300">Necesitas un PDF más pequeño, pero no puedes permitir imágenes borrosas o texto degradado. Aquí te explicamos cómo reducir el tamaño del archivo manteniendo tu documento nítido.</p>
          </div></div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><FileDown className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">¿Listo para comprimir? Salta la guía y ve directo a la herramienta.</p>
            </div>
            <Link href="/es/comprimir-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Comprimir PDF Ahora <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Qué Es la Compresión PDF Sin Pérdida?</h2>
              <p className="text-slate-600 mb-4">Cuando las personas dicen &quot;comprimir sin pérdida de calidad,&quot; se refieren a la <strong>compresión sin pérdida</strong>. Esta técnica reduce el tamaño del archivo eliminando datos que el PDF realmente no necesita — sin tocar el contenido visible:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Objetos redundantes.</strong> Los PDFs frecuentemente almacenan fuentes duplicadas, perfiles de color y metadatos. La compresión sin pérdida los fusiona en instancias únicas.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Flujos de datos no usados.</strong> El software de edición a veces deja objetos huérfanos en el archivo. La compresión los elimina.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Metadatos y miniaturas.</strong> Información del autor, historial de revisiones y miniaturas incrustadas añaden kilobytes que la mayoría de las personas nunca ven.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Campos de formulario y capas.</strong> Los elementos interactivos añaden sobrecarga. <Link href="/es/aplanar-pdf" className="text-[#14D8C4] hover:underline">Aplanar tu PDF</Link> los elimina sin afectar cómo se ve el documento cuando se imprime o visualiza.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Comprimir Sin Perder Calidad (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Sube tu PDF", desc: "Ve a la herramienta Comprimir PDF y arrastra tu archivo al área de carga. Archivos hasta 25MB son gratis — los usuarios Pro pueden subir archivos de hasta 200MB." },
                  { title: "Selecciona compresión Ligera", desc: "Elige el nivel Ligero. Esto mantiene las imágenes en su resolución original y solo elimina datos redundantes. Para la mayoría de los documentos, el resultado es visualmente idéntico al original." },
                  { title: "Descarga y compara", desc: "Haz clic en Comprimir PDF y descarga el resultado. Abre ambos archivos lado a lado — no deberías ver ninguna diferencia visible. Ahorro típico: 10-30% de reducción de tamaño." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Ligera vs. Media vs. Extrema: ¿Cuál Mantiene la Calidad?</h2>
              <p className="text-slate-600 mb-4">Entender el equilibrio entre tamaño de archivo y calidad te ayuda a elegir el nivel correcto:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead><tr className="bg-slate-900 text-white"><th className="text-left py-3 px-4 font-bold">Nivel</th><th className="text-left py-3 px-4 font-bold">Impacto en Calidad</th><th className="text-left py-3 px-4 font-bold">Ahorro Típico</th></tr></thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-[#14D8C4]">Ligera</td><td className="py-3 px-4">Ninguno — imágenes intactas, texto nítido</td><td className="py-3 px-4">10-30%</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold text-[#14D8C4]">Media</td><td className="py-3 px-4">Ligero remuestreo de imagen — imperceptible en pantalla</td><td className="py-3 px-4">30-60%</td></tr>
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-[#14D8C4]">Extrema</td><td className="py-3 px-4">Pérdida de calidad visible en imágenes de alta resolución y fotos</td><td className="py-3 px-4">60-80%</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4">Para documentos sensibles a la calidad como portafolios, informes para clientes y archivos listos para impresión, quédate con <strong>Ligera</strong>. Si necesitas una reducción mayor pero aún quieres buena calidad, <strong>Media</strong> es el punto dulce — el texto permanece perfectamente nítido, y la calidad de imagen sigue siendo excelente para visualización en pantalla.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Técnicas Extra para Reducir Tamaño Sin Perder Calidad</h2>
              <p className="text-slate-600 mb-4">Más allá de elegir compresión Ligera, hay varias otras estrategias que reducen el tamaño del archivo sin tocar la calidad visual:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Aplana el PDF.</strong> Usa <Link href="/es/aplanar-pdf" className="text-[#14D8C4] hover:underline">Aplanar PDF</Link> para fusionar campos de formulario, anotaciones y capas en el contenido de la página. Esto puede eliminar sobrecarga significativa sin cambiar la salida visual.</li>
                <li>&#10003; <strong>Elimina páginas innecesarias.</strong> Si tu PDF tiene páginas en blanco o secciones que no necesitas, usa <Link href="/es/dividir-pdf" className="text-[#14D8C4] hover:underline">Dividir PDF</Link> para extraer solo las páginas que quieres, luego <Link href="/es/unir-pdf" className="text-[#14D8C4] hover:underline">únelas de nuevo</Link>.</li>
                <li>&#10003; <strong>Convierte imágenes a PDF por separado.</strong> Si estás incluyendo fotos, conviértelas al tamaño correcto antes de incrustarlas. Las fotos sobredimensionadas son la mayor fuente de tamaño de archivo innecesario.</li>
                <li>&#10003; <strong>Usa PDF Listo para Subir.</strong> Nuestra herramienta <Link href="/es/pdf-listo-para-subir" className="text-[#14D8C4] hover:underline">PDF Listo para Subir</Link> encadena aplanamiento y compresión juntos para el mejor resultado en un solo paso.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cuándo Podrías Necesitar Aceptar Algo de Pérdida de Calidad</h2>
              <p className="text-slate-600 mb-4">La compresión sin pérdida tiene límites. Si tu archivo necesita alcanzar un objetivo de tamaño estricto, podrías necesitar compresión Media o Extrema. Aquí es cuando tiene sentido:</p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Límites Estrictos de Carga</h3>
                  <p className="text-slate-600">Los portales gubernamentales, solicitudes de visa y envíos de exámenes frecuentemente limitan los archivos a 2MB o 5MB. Si la compresión Ligera no te lleva ahí, prueba nuestras herramientas dedicadas de <Link href="/es/comprimir-pdf-a-2mb" className="text-[#14D8C4] hover:underline">Comprimir a 2MB</Link> o <Link href="/es/comprimir-pdf-a-5mb" className="text-[#14D8C4] hover:underline">Comprimir a 5MB</Link>.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Adjuntos de Email</h3>
                  <p className="text-slate-600">La mayoría de los servicios de email limitan los adjuntos a 20-25MB. Si tu PDF está cerca de ese límite, la compresión Media lo pondrá por debajo manteniendo el texto y los gráficos perfectamente legibles. Consulta nuestra guía de <Link href="/es/comprimir-pdf-para-email" className="text-[#14D8C4] hover:underline">Comprimir para Email</Link>.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Archivos Muy Grandes (50MB+)</h3>
                  <p className="text-slate-600">Para PDFs muy grandes con cientos de páginas o fotos de alta resolución, incluso la compresión Media puede ser necesaria. Considera dividir el archivo primero con <Link href="/es/dividir-pdf" className="text-[#14D8C4] hover:underline">Dividir PDF</Link>, luego comprimir cada parte.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">¿Listo para Comprimir Sin Perder Calidad?</h2>
            <p className="text-slate-300 mb-6">Sube tu PDF y reduce el tamaño del archivo manteniendo cada detalle intacto — gratis, sin registro.</p>
            <Link href="/es/comprimir-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><FileDown className="h-5 w-5" /> Comprimir PDF Ahora</Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Cómo Comprimir un PDF (Reducir Tamaño Rápidamente)", href: "/es/aprender/como-comprimir-un-pdf" },
                { title: "Comprimir un PDF para Imprimir (Mantener Calidad de Impresión)", href: "/es/aprender/comprimir-pdf-para-imprimir" },
                { title: "Comprimir un PDF Grande (50MB, 100MB o Más)", href: "/es/aprender/comprimir-pdf-grande" },
                { title: "Comprimir un PDF con Imágenes (Fotos, Escaneos, Gráficos)", href: "/es/aprender/comprimir-pdf-con-imagenes" },
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
                { q: "¿Puedo comprimir un PDF sin perder calidad?", a: "Sí. La compresión Ligera elimina datos redundantes, fuentes no usadas y metadatos sin tocar la calidad de imagen ni la nitidez del texto. El resultado visual es virtualmente idéntico al original." },
                { q: "¿Qué es la compresión PDF sin pérdida?", a: "La compresión sin pérdida reduce el tamaño del archivo eliminando objetos duplicados, comprimiendo flujos de datos y eliminando metadatos — sin remuestrear imágenes ni reducir su resolución. La salida se ve idéntica a la entrada." },
                { q: "¿Cuánto más pequeño será mi PDF con compresión sin pérdida?", a: "Típicamente 10-30% más pequeño. Si el PDF tiene muchos datos redundantes o fuentes incrustadas, el ahorro puede ser mayor. Para reducciones más grandes necesitas compresión con pérdida." },
                { q: "¿El texto se mantiene nítido después de comprimir?", a: "Absolutamente. El texto del PDF se almacena como datos vectoriales, no como imágenes, así que la compresión nunca afecta la nitidez del texto. Solo las imágenes incrustadas pueden verse afectadas, y solo si eliges compresión Media o Extrema." },
                { q: "¿Debería usar compresión Ligera o Media para mantener la calidad?", a: "Usa Ligera si la calidad es tu máxima prioridad — mantiene las imágenes en su resolución original. Media es un buen punto medio que reduce ligeramente la resolución de imagen pero sigue siendo visualmente indistinguible para la mayoría de los documentos." },
                { q: "¿Puedo comprimir un PDF sin perder calidad en mi teléfono?", a: "Sí. PDF.it funciona en cualquier navegador móvil. Sube tu PDF, selecciona compresión Ligera y descarga el resultado. No necesitas app — funciona en iPhone y Android." },
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

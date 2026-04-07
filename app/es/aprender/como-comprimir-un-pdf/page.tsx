import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileArchiveIcon as Compress, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Cómo Comprimir un PDF (Reducir Tamaño Rápidamente) | PDF.it",
  description:
    "Aprende cómo comprimir un PDF y reducir el tamaño del archivo en segundos. Guía paso a paso con consejos para email, subidas y documentos escaneados — gratis, en línea, sin software.",
  keywords: "comprimir pdf, reducir tamaño pdf, cómo comprimir un pdf, hacer pdf más pequeño, achicar pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo comprimo un PDF gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it, elige un nivel de compresión (Ligera, Media o Extrema), haz clic en Comprimir y descarga el archivo más pequeño. No se requiere registro para tus primeros 3 archivos." }
    },
    {
      "@type": "Question",
      "name": "¿Comprimir un PDF reduce la calidad?",
      "acceptedAnswer": { "@type": "Answer", "text": "La compresión Ligera mantiene la calidad casi idéntica al original. Media equilibra tamaño y calidad. La compresión Extrema reduce más el tamaño pero puede reducir ligeramente la calidad de las imágenes. El texto siempre se mantiene nítido y legible." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué mi PDF es tan grande?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los PDFs grandes generalmente son causados por imágenes de alta resolución, páginas escaneadas o fuentes incrustadas. Los documentos escaneados son los principales culpables — una sola página escaneada puede pesar 2-5MB porque se almacena como una imagen de página completa." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comprimir un PDF en mi teléfono?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en cualquier navegador móvil — sube tu PDF, comprímelo y descarga el resultado directamente en iPhone o Android. No necesitas ninguna app." }
    },
    {
      "@type": "Question",
      "name": "¿Qué tan pequeño puedo hacer un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Depende del contenido. Un PDF escaneado de 10MB podría comprimirse a 1-3MB. Un PDF de 5MB con mucho texto podría bajar a 500KB. La compresión Extrema da la máxima reducción, pero los resultados varían según cuántos datos de imagen contiene el PDF." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la diferencia entre compresión Ligera, Media y Extrema?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ligera mantiene las imágenes en alta calidad (menor reducción de tamaño). Media equilibra calidad y tamaño (buena para la mayoría de usos). Extrema reduce agresivamente la calidad de las imágenes para máxima reducción de tamaño (mejor para portales con límites estrictos)." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Comprimir un PDF en Línea",
  "description": "Reduce el tamaño de tu archivo PDF en 3 simples pasos usando PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube tu PDF",
      "text": "Ve a la herramienta Comprimir PDF de PDF.it y sube tu archivo haciendo clic o arrastrándolo al área de carga."
    },
    {
      "@type": "HowToStep",
      "name": "Elige el nivel de compresión",
      "text": "Selecciona Ligera (mejor calidad), Media (equilibrada) o Extrema (máxima reducción) según tus necesidades."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga tu PDF comprimido",
      "text": "Haz clic en Comprimir PDF y descarga el archivo más pequeño. Verifica el tamaño — si aún es muy grande, prueba un nivel de compresión más alto o divide el PDF primero."
    }
  ]
}

export default function ComoComprimirUnPDFPage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Comprimir PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Cómo Comprimir un PDF (Reducir Tamaño Rápidamente)</h1>
              <p className="text-xl text-slate-300">
                Tu PDF es demasiado grande para email, un portal de carga o un formulario de envío. Aquí te explicamos cómo comprimirlo en menos de 30 segundos — sin software, sin registro.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <Compress className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">¿Listo para comprimir? Salta la guía y ve directo a la herramienta.</p>
            </div>
            <Link
              href="/es/comprimir-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Comprimir PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Por qué los PDFs son grandes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Qué Tu PDF Es Tan Grande?</h2>
              <p className="text-slate-600 mb-4">
                Antes de comprimir, es útil entender <strong>por qué</strong> tu PDF es grande. Las causas más comunes:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Páginas escaneadas.</strong> Cada página escaneada se almacena como una imagen de página completa (frecuentemente 2-5MB por página). Un documento escaneado de 10 páginas puede alcanzar fácilmente 20-50MB.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Imágenes de alta resolución.</strong> Fotos, gráficos y elementos visuales incrustados en calidad de impresión (300 DPI) ocupan un espacio significativo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Fuentes incrustadas.</strong> Los PDFs que incluyen fuentes personalizadas incrustan el archivo de fuente completo, añadiendo cientos de KB por fuente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Capas y anotaciones.</strong> Los campos de formulario, comentarios y elementos interactivos añaden datos extra. <Link href="/es/aplanar-pdf" className="text-[#14D8C4] hover:underline">Aplanar tu PDF</Link> los elimina.</span>
                </li>
              </ul>
            </section>

            {/* Paso a paso */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Comprimir un PDF (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Sube tu PDF",
                    desc: "Ve a la herramienta Comprimir PDF y arrastra tu archivo al área de carga, o haz clic para buscar. Archivos hasta 25MB son gratis — los usuarios Pro pueden subir hasta 200MB.",
                  },
                  {
                    title: "Elige tu nivel de compresión",
                    desc: "Selecciona Ligera (mínima pérdida de calidad), Media (buen equilibrio) o Extrema (máxima reducción de tamaño). Para archivos adjuntos de email, Media generalmente funciona. Para límites estrictos de carga (2MB, 5MB), prueba Extrema.",
                  },
                  {
                    title: "Descarga el PDF comprimido",
                    desc: "Haz clic en Comprimir PDF. Una vez que el procesamiento termine, descarga tu archivo más pequeño. Verifica el nuevo tamaño — si aún es muy grande, prueba un nivel de compresión más alto o divide el PDF en partes primero.",
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

            {/* Qué nivel de compresión */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Qué Nivel de Compresión Deberías Usar?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Nivel</th>
                      <th className="text-left py-3 px-4 font-bold">Mejor Para</th>
                      <th className="text-left py-3 px-4 font-bold">Calidad</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">Ligera</td>
                      <td className="py-3 px-4">Compartir documentos donde la calidad importa (informes, portafolios)</td>
                      <td className="py-3 px-4">Casi original</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">Media</td>
                      <td className="py-3 px-4">Adjuntos de email, compartir general, la mayoría de portales de carga</td>
                      <td className="py-3 px-4">Buena — el texto se mantiene nítido</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">Extrema</td>
                      <td className="py-3 px-4">Límites estrictos de carga (1MB, 2MB, 5MB), portales gubernamentales, formularios de visa</td>
                      <td className="py-3 px-4">Reducida — las imágenes pueden perder detalle</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Aún muy grande */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿El PDF Sigue Siendo Muy Grande Después de Comprimir?</h2>
              <p className="text-slate-600 mb-4">
                Si la compresión sola no reduce tu archivo lo suficiente, prueba estos enfoques:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Divide el PDF</strong> en partes más pequeñas usando <Link href="/es/dividir-pdf" className="text-[#14D8C4] hover:underline">Dividir PDF</Link>, luego comprime cada parte por separado.</li>
                <li>&#10003; <strong>Aplana el PDF</strong> primero con <Link href="/es/aplanar-pdf" className="text-[#14D8C4] hover:underline">Aplanar PDF</Link> para eliminar campos de formulario y anotaciones antes de comprimir.</li>
                <li>&#10003; <strong>Prueba la compresión Extrema</strong> si no lo has hecho — da la máxima reducción de tamaño.</li>
                <li>&#10003; <strong>Elimina páginas innecesarias</strong> usando <Link href="/es/eliminar-paginas-de-pdf" className="text-[#14D8C4] hover:underline">Eliminar Páginas</Link> antes de comprimir.</li>
              </ul>
            </section>

            {/* Consejos para casos específicos */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos de Compresión para Escenarios Comunes</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Para Adjuntos de Email</h3>
                  <p className="text-slate-600">
                    Gmail, Outlook y Yahoo limitan los adjuntos a 20-25MB. La compresión Media generalmente logra que los PDFs estén bajo este límite. Para límites más estrictos, prueba nuestra herramienta <Link href="/es/comprimir-pdf-para-email" className="text-[#14D8C4] hover:underline">Comprimir para Email</Link> que está optimizada para servicios de correo electrónico.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Para Portales de Carga (Gobierno, Visa, Exámenes)</h3>
                  <p className="text-slate-600">
                    Muchos portales requieren PDFs de menos de 2MB o 5MB. Usa la compresión Extrema, y si el archivo sigue siendo muy grande, divídelo en páginas individuales primero. Consulta nuestras herramientas dedicadas para <Link href="/es/comprimir-pdf-a-2mb" className="text-[#14D8C4] hover:underline">límites de 2MB</Link> y <Link href="/es/comprimir-pdf-a-5mb" className="text-[#14D8C4] hover:underline">límites de 5MB</Link>.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Para Documentos Escaneados</h3>
                  <p className="text-slate-600">
                    Los PDFs escaneados se comprimen dramáticamente porque son mayormente imágenes. La compresión Extrema puede reducir un documento escaneado de 20MB a 2-4MB manteniendo el texto legible. Consulta <Link href="/es/comprimir-pdf-escaneado" className="text-[#14D8C4] hover:underline">Comprimir PDF Escaneado</Link> para más consejos.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">¿Listo para Comprimir Tu PDF?</h2>
            <p className="text-slate-300 mb-6">Sube tu archivo y reduce el tamaño en segundos — gratis, sin registro.</p>
            <Link
              href="/es/comprimir-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Compress className="h-5 w-5" /> Comprimir PDF Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Comprimir un PDF Grande (50MB, 100MB o Más)", href: "/es/aprender/comprimir-pdf-grande" },
                { title: "Comprimir un PDF para Imprimir (Mantener Calidad de Impresión)", href: "/es/aprender/comprimir-pdf-para-imprimir" },
                { title: "Comprimir un PDF con Imágenes (Fotos, Escaneos, Gráficos)", href: "/es/aprender/comprimir-pdf-con-imagenes" },
                { title: "Cómo Comprimir un PDF Sin Perder Calidad", href: "/es/aprender/comprimir-pdf-sin-perder-calidad" },
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
                { q: "¿Cómo comprimo un PDF gratis?", a: "Sube tu PDF a PDF.it, elige un nivel de compresión (Ligera, Media o Extrema), haz clic en Comprimir y descarga el archivo más pequeño. No se requiere registro para tus primeros 3 archivos." },
                { q: "¿Comprimir un PDF reduce la calidad?", a: "La compresión Ligera mantiene la calidad casi idéntica al original. Media equilibra tamaño y calidad. La compresión Extrema reduce más el tamaño pero puede reducir ligeramente la calidad de las imágenes. El texto siempre se mantiene nítido y legible." },
                { q: "¿Por qué mi PDF es tan grande?", a: "Los PDFs grandes generalmente son causados por imágenes de alta resolución, páginas escaneadas o fuentes incrustadas. Los documentos escaneados son los principales culpables — una sola página escaneada puede pesar 2-5MB." },
                { q: "¿Puedo comprimir un PDF en mi teléfono?", a: "Sí. PDF.it funciona en cualquier navegador móvil — sube tu PDF, comprímelo y descarga el resultado directamente en iPhone o Android. No necesitas ninguna app." },
                { q: "¿Qué tan pequeño puedo hacer un PDF?", a: "Depende del contenido. Un PDF escaneado de 10MB podría comprimirse a 1-3MB. Un PDF de 5MB con mucho texto podría bajar a 500KB. La compresión Extrema da la máxima reducción." },
                { q: "¿Cuál es la diferencia entre compresión Ligera, Media y Extrema?", a: "Ligera mantiene las imágenes en alta calidad (menor reducción). Media equilibra calidad y tamaño (buena para la mayoría de usos). Extrema reduce agresivamente la calidad de las imágenes para máxima reducción de tamaño." },
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

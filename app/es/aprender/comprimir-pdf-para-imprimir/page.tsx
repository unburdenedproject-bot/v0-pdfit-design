import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileDown, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Comprimir un PDF para Imprimir (Mantener Calidad de Impresión) | PDF.it",
  description:
    "Aprende cómo comprimir un PDF para impresión manteniendo la calidad de 300 DPI. Reduce el tamaño del archivo para imprentas, impresoras domésticas y salida profesional sin arruinar la resolución.",
  keywords: "comprimir pdf para imprimir, reducir tamaño pdf para impresión, pdf calidad de impresión, comprimir pdf 300 dpi",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Puedo comprimir un PDF y aún imprimirlo en alta calidad?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Usa compresión Ligera para mantener las imágenes a 300 DPI o más. Esto elimina datos redundantes sin reducir la resolución de las imágenes, así que el resultado impreso se ve idéntico al original." }
    },
    {
      "@type": "Question",
      "name": "¿Qué DPI necesito para imprimir?",
      "acceptedAnswer": { "@type": "Answer", "text": "300 DPI es el estándar para impresión profesional. 150 DPI es aceptable para borradores o documentos vistos a distancia del brazo. Por debajo de 150 DPI, las imágenes empiezan a verse pixeladas al imprimir." }
    },
    {
      "@type": "Question",
      "name": "¿La compresión Media arruinará la calidad de impresión?",
      "acceptedAnswer": { "@type": "Answer", "text": "La compresión Media típicamente reduce las imágenes a alrededor de 150-200 DPI. Esto está bien para borradores y documentos internos, pero puede no cumplir los requisitos profesionales de imprenta de 300 DPI." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo sé si mi PDF está listo para imprimir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un PDF listo para impresión debe tener imágenes a 300 DPI o más, usar modo de color CMYK (para impresión profesional) y tener fuentes incrustadas. Después de comprimir con modo Ligero, tu PDF mantendrá estas cualidades." }
    },
    {
      "@type": "Question",
      "name": "¿Debería aplanar mi PDF antes de imprimir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Aplanar elimina campos de formulario, anotaciones y capas, lo que previene errores de impresión. Usa la herramienta Aplanar PDF de PDF.it antes de comprimir para la salida de impresión más limpia." }
    },
    {
      "@type": "Question",
      "name": "Mi archivo de impresión es muy grande para enviar a la imprenta. ¿Qué hago?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usa compresión Ligera primero. Si sigue siendo muy grande, aplana el PDF para eliminar capas, luego comprime de nuevo. Si necesitas dividir un documento grande, usa Dividir PDF para separarlo en secciones que la imprenta pueda manejar." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Comprimir un PDF para Impresión",
  "description": "Reduce el tamaño del archivo PDF manteniendo la calidad de impresión de 300 DPI en 3 simples pasos.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube tu PDF",
      "text": "Ve a la herramienta Comprimir PDF de PDF.it y sube el archivo que necesitas comprimir para impresión."
    },
    {
      "@type": "HowToStep",
      "name": "Selecciona compresión Ligera",
      "text": "Elige compresión Ligera para mantener la resolución de imagen de 300 DPI. Esto elimina datos redundantes sin reducir la resolución de las imágenes que necesitan mantenerse nítidas para impresión."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga y verifica",
      "text": "Descarga el PDF comprimido y haz zoom en las imágenes al 100% para verificar que aún se ven nítidas. El archivo debería ser más pequeño pero listo para imprimir."
    }
  ]
}

export default function ComprimirPDFParaImprimirPage() {
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
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Comprimir PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir un PDF para Imprimir (Mantener Calidad de Impresión)</h1>
              <p className="text-xl text-slate-300">
                Tu archivo de impresión es demasiado grande para enviar, pero no puedes permitir imágenes pixeladas. Aquí te explicamos cómo reducir el tamaño del archivo manteniendo la resolución de 300 DPI para impresión profesional.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <FileDown className="h-5 w-5 text-white" />
              </div>
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Qué los PDFs Listos para Impresión Son Tan Grandes</h2>
              <p className="text-slate-600 mb-4">
                Los archivos de impresión están diseñados para salida de alta calidad, lo que significa que llevan muchos datos. Entender por qué te ayuda a comprimir de manera más inteligente:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Imágenes a 300 DPI.</strong> La calidad de impresión requiere 300 puntos por pulgada. Una sola imagen de página completa a 300 DPI puede pesar 5-15MB. Multiplica eso por el número de páginas y los archivos crecen rápido.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Fuentes incrustadas.</strong> Los PDFs de impresión incrustan familias completas de fuentes para asegurar que la impresora reproduzca el texto exactamente. Cada fuente puede añadir 100-500KB.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Perfiles de color.</strong> Los espacios de color CMYK y los perfiles ICC son más grandes que RGB. Los archivos de impresión profesional incluyen estos para reproducción precisa del color.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Sangrado y marcas de corte.</strong> Los archivos de impresión incluyen contenido extra más allá del borde de la página (sangrado) y marcas de alineación. Estos añaden al tamaño del archivo.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Comprimir para Impresión (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Sube tu PDF de impresión", desc: "Ve a la herramienta Comprimir PDF y sube tu archivo. Archivos hasta 25MB son gratis — los usuarios Pro pueden subir archivos de hasta 200MB, lo que cubre la mayoría de los trabajos de impresión." },
                  { title: "Selecciona compresión Ligera", desc: "Elige Ligera para preservar la resolución de 300 DPI. Esto elimina metadatos redundantes, fuentes duplicadas y objetos no usados — pero deja tus imágenes en plena calidad de impresión." },
                  { title: "Descarga y verifica la calidad de impresión", desc: "Descarga el archivo comprimido. Haz zoom al 200-400% en las páginas con muchas imágenes para verificar cualquier pérdida de calidad. Si todo se ve nítido, tu archivo está listo para la impresora." },
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Entendiendo DPI y Calidad de Impresión</h2>
              <p className="text-slate-600 mb-4">
                DPI (puntos por pulgada) determina qué tan nítidas se ven las imágenes cuando se imprimen. Esto es lo que significan los diferentes niveles de DPI en la práctica:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">DPI</th>
                      <th className="text-left py-3 px-4 font-bold">Calidad</th>
                      <th className="text-left py-3 px-4 font-bold">Mejor Para</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">300 DPI</td>
                      <td className="py-3 px-4">Calidad de impresión profesional</td>
                      <td className="py-3 px-4">Folletos, tarjetas de presentación, impresiones fotográficas, revistas</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">150 DPI</td>
                      <td className="py-3 px-4">Buena para borradores y uso interno</td>
                      <td className="py-3 px-4">Documentos de oficina, informes internos, pósters vistos a distancia</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">72 DPI</td>
                      <td className="py-3 px-4">Calidad solo para pantalla</td>
                      <td className="py-3 px-4">Visualización web, adjuntos de email — no adecuado para impresión</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4">
                Cuando usas <strong>compresión Ligera</strong>, las imágenes se mantienen en su DPI original. <strong>Media</strong> puede reducirlas a 150 DPI. <strong>Extrema</strong> puede bajar las imágenes a 72 DPI — bien para pantallas, pero no para impresión.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Preparando Tu PDF para la Imprenta</h2>
              <p className="text-slate-600 mb-4">Antes de comprimir, toma estos pasos para asegurar que tu archivo de impresión esté limpio y optimizado:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Aplana el PDF.</strong> Usa <Link href="/es/aplanar-pdf" className="text-[#14D8C4] hover:underline">Aplanar PDF</Link> para fusionar capas, anotaciones y campos de formulario en el contenido de la página. Esto previene problemas de renderizado en la impresora.</li>
                <li>&#10003; <strong>Elimina páginas innecesarias.</strong> Si tu archivo tiene páginas de borrador, notas o páginas en blanco, usa <Link href="/es/dividir-pdf" className="text-[#14D8C4] hover:underline">Dividir PDF</Link> para eliminarlas antes de enviar a la imprenta.</li>
                <li>&#10003; <strong>Verifica la orientación.</strong> Asegúrate de que todas las páginas estén orientadas correctamente. Usa <Link href="/es/rotar-pdf" className="text-[#14D8C4] hover:underline">Rotar PDF</Link> para corregir páginas de lado o al revés.</li>
                <li>&#10003; <strong>Une archivos separados.</strong> Si tu diseño está distribuido en múltiples archivos (portada, interior, contraportada), usa <Link href="/es/unir-pdf" className="text-[#14D8C4] hover:underline">Unir PDF</Link> para combinarlos en un solo documento listo para impresión.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos de Compresión para Escenarios Comunes de Impresión</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Tarjetas de Presentación y Folletos</h3>
                  <p className="text-slate-600">Se ven de cerca, así que la calidad de imagen debe ser impecable. Usa <strong>solo compresión Ligera</strong>. Incluso la compresión Media puede producir artefactos visibles cuando se imprime en cartulina brillante. Los tamaños de archivo son típicamente pequeños (1-5MB), así que la compresión agresiva rara vez es necesaria.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Pósters y Banners de Gran Formato</h3>
                  <p className="text-slate-600">Los pósters se ven a distancia, así que puedes usar 150 DPI. La compresión Media frecuentemente está bien aquí, y puede cortar los tamaños de archivo en 40-60%. Para archivos de banner muy grandes, considera dividirlos en secciones con <Link href="/es/dividir-pdf" className="text-[#14D8C4] hover:underline">Dividir PDF</Link>.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Libros de Fotos y Portafolios</h3>
                  <p className="text-slate-600">Los archivos de impresión con muchas fotos frecuentemente son los más grandes. Usa compresión Ligera para preservar la calidad de las fotos. Si el archivo es mayor de 100MB, considera convertir las imágenes a <Link href="/es/pdf-a-jpg" className="text-[#14D8C4] hover:underline">JPG</Link> a la resolución correcta antes de incrustarlas.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Documentos de Oficina para Impresión Interna</h3>
                  <p className="text-slate-600">Los informes internos, material para reuniones y memorandos no necesitan 300 DPI. La compresión Media funciona genial y hace los archivos mucho más fáciles de compartir por email. Usa <Link href="/es/comprimir-pdf-para-email" className="text-[#14D8C4] hover:underline">Comprimir para Email</Link> si también necesitas enviar el archivo por correo.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">¿Listo para Comprimir para Impresión?</h2>
            <p className="text-slate-300 mb-6">Reduce el tamaño de tu archivo de impresión manteniendo la calidad de 300 DPI — gratis, sin registro.</p>
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
                { title: "Comprimir un PDF Grande (50MB, 100MB o Más)", href: "/es/aprender/comprimir-pdf-grande" },
                { title: "Comprimir un PDF con Imágenes (Fotos, Escaneos, Gráficos)", href: "/es/aprender/comprimir-pdf-con-imágenes" },
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
                { q: "¿Puedo comprimir un PDF y aún imprimirlo en alta calidad?", a: "Sí. Usa compresión Ligera para mantener las imágenes a 300 DPI o más. Esto elimina datos redundantes sin reducir la resolución de las imágenes, así que el resultado impreso se ve idéntico al original." },
                { q: "¿Qué DPI necesito para imprimir?", a: "300 DPI es el estándar para impresión profesional. 150 DPI es aceptable para borradores o documentos vistos a distancia del brazo. Por debajo de 150 DPI, las imágenes empiezan a verse pixeladas al imprimir." },
                { q: "¿La compresión Media arruinará la calidad de impresión?", a: "La compresión Media típicamente reduce las imágenes a alrededor de 150-200 DPI. Esto está bien para borradores y documentos internos, pero puede no cumplir los requisitos profesionales de imprenta de 300 DPI." },
                { q: "¿Cómo sé si mi PDF está listo para imprimir?", a: "Un PDF listo para impresión debe tener imágenes a 300 DPI o más, usar modo de color CMYK (para impresión profesional) y tener fuentes incrustadas. Después de comprimir con modo Ligero, tu PDF mantendrá estas cualidades." },
                { q: "¿Debería aplanar mi PDF antes de imprimir?", a: "Sí. Aplanar elimina campos de formulario, anotaciones y capas, lo que previene errores de impresión. Usa la herramienta Aplanar PDF de PDF.it antes de comprimir para la salida de impresión más limpia." },
                { q: "Mi archivo de impresión es muy grande para enviar a la imprenta. ¿Qué hago?", a: "Usa compresión Ligera primero. Si sigue siendo muy grande, aplana el PDF para eliminar capas, luego comprime de nuevo. Si necesitas dividir un documento grande, usa Dividir PDF para separarlo en secciones." },
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

import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Image, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Cómo Convertir PDF a PNG Online (Texto Nítido + Gráficos Limpios) | PDF.it",
  description:
    "Aprende cómo convertir PDF a PNG online con texto nítido y gráficos limpios. Guía paso a paso sobre transparencia, resolución y cuándo PNG supera a JPG — gratis, sin software.",
  keywords: "convertir pdf a png online, pdf a png, convertidor pdf a png, guardar pdf como png, exportar pdf a png",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo convierto un PDF a PNG gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a la herramienta PDF a PNG de PDF.it, selecciona la resolución deseada, haz clic en Convertir y descarga las imágenes PNG. No se necesita registro para tus primeros 3 archivos." }
    },
    {
      "@type": "Question",
      "name": "¿PNG es mejor que JPG para conversiones de PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "PNG es mejor cuando tu PDF contiene texto, gráficos, logos o arte lineal porque PNG usa compresión sin pérdida — no se pierde calidad. JPG es mejor para PDFs con muchas fotos donde el tamaño del archivo importa más que la nitidez perfecta." }
    },
    {
      "@type": "Question",
      "name": "¿PNG soporta transparencia de PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PNG soporta fondos transparentes, así que si tu PDF tiene elementos transparentes, pueden preservarse en la salida PNG. JPG no soporta transparencia — llena las áreas transparentes con blanco." }
    },
    {
      "@type": "Question",
      "name": "¿Qué resolución debo usar para PDF a PNG?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para uso web, 150 DPI generalmente es suficiente. Para presentaciones y documentos, 200-300 DPI da resultados nítidos. Para calidad de impresión, usa 300 DPI o más. Mayor resolución significa archivos más grandes." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo convertir un PDF de múltiples páginas a PNG?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it convierte cada página de tu PDF en una imagen PNG separada. Puedes descargarlas individualmente o como archivo ZIP. Los usuarios Pro pueden convertir por lotes múltiples PDFs a la vez." }
    },
    {
      "@type": "Question",
      "name": "¿El texto se mantiene nítido al convertir PDF a PNG?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PNG usa compresión sin pérdida, así que el texto renderizado de un PDF se mantiene nítido y legible a cualquier nivel de zoom. Esta es una de las principales ventajas que PNG tiene sobre JPG para documentos con mucho texto." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Convertir PDF a PNG Online",
  "description": "Convierte tus páginas PDF en imágenes PNG nítidas en 3 simples pasos usando PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube tu PDF",
      "text": "Ve a la herramienta PDF a PNG de PDF.it y sube tu archivo haciendo clic o arrastrándolo al área de carga."
    },
    {
      "@type": "HowToStep",
      "name": "Elige tus ajustes",
      "text": "Selecciona la resolución (150 DPI para web, 300 DPI para impresión) y confirma qué páginas quieres convertir."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga tus imágenes PNG",
      "text": "Haz clic en Convertir y descarga tus archivos PNG. Cada página se convierte en una imagen PNG separada. Descarga individualmente o como ZIP."
    }
  ]
}

export default function ConvertirPdfAPngPage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF a PNG</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Cómo Convertir PDF a PNG Online (Texto Nítido + Gráficos Limpios)</h1>
              <p className="text-xl text-slate-300">
                ¿Necesitas tus páginas PDF como imágenes con texto perfectamente nítido y gráficos limpios? PNG es el formato que necesitas. Aquí te mostramos cómo convertir en segundos — gratis, online, sin software.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <Image className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">¿Listo para convertir? Salta la guía y ve directo a la herramienta.</p>
            </div>
            <Link
              href="/es/pdf-a-png"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Convertir PDF a PNG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Qué Convertir PDF a PNG?</h2>
              <p className="text-slate-600 mb-4">
                Hay muchas razones por las que podrías necesitar páginas PDF como imágenes. Tal vez quieres poner un gráfico en una presentación, compartir una página en redes sociales o insertar un documento en un sitio web. PNG es la mejor opción cuando tu PDF contiene:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Texto y tipografía.</strong> PNG usa compresión sin pérdida, así que cada letra se mantiene nítida. JPG introduce artefactos de compresión alrededor de los bordes del texto, haciéndolos ver difusos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Logos, iconos y arte lineal.</strong> Bordes limpios con colores sólidos son la fortaleza de PNG. No hay borrosidad ni sangrado de color alrededor de los límites nítidos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Gráficos con transparencia.</strong> PNG soporta transparencia alfa — perfecto para superponer imágenes sobre fondos de color o en herramientas de diseño como <Link href="/es/aprender/pdf-a-png-para-diseno" className="text-[#14D8C4] hover:underline">Figma y Canva</Link>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Capturas de pantalla y mockups de UI.</strong> Cualquier contenido con colores planos y bordes duros se ve dramáticamente mejor como PNG que como JPG.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Convertir PDF a PNG (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Sube tu PDF",
                    desc: "Ve a la herramienta PDF a PNG y arrastra tu archivo al área de carga, o haz clic para buscar. Archivos hasta 25MB son gratis — los usuarios Pro pueden subir hasta 200MB.",
                  },
                  {
                    title: "Elige tu resolución",
                    desc: "Selecciona el DPI que coincida con tus necesidades. 150 DPI funciona genial para web y redes sociales. 300 DPI es ideal para presentaciones e impresión. Mayor DPI significa imágenes más nítidas pero archivos más grandes.",
                  },
                  {
                    title: "Descarga tus imágenes PNG",
                    desc: "Haz clic en Convertir. Cada página PDF se convierte en un archivo PNG separado. Descárgalos individualmente o todos como ZIP. Los usuarios Pro pueden convertir por lotes múltiples PDFs a la vez.",
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

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Cuándo Debes Usar PNG en Lugar de JPG?</h2>
              <p className="text-slate-600 mb-4">
                ¿No estás seguro si necesitas PNG o JPG? Aquí tienes una guía rápida. Para una comparación más profunda, consulta <Link href="/es/aprender/pdf-a-jpg-vs-png" className="text-[#14D8C4] hover:underline">PDF a JPG vs PNG: ¿Cuál Debes Usar?</Link>
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Usa PNG Cuando...</th>
                      <th className="text-left py-3 px-4 font-bold">Usa JPG Cuando...</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">Tu PDF tiene texto, gráficos o diagramas</td>
                      <td className="py-3 px-4">Tu PDF es mayormente fotografías</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4">Necesitas soporte de transparencia</td>
                      <td className="py-3 px-4">El tamaño del archivo importa más que la nitidez</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">Usarás la imagen en herramientas de diseño</td>
                      <td className="py-3 px-4">Subirás a redes sociales</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4">La calidad es tu máxima prioridad</td>
                      <td className="py-3 px-4">Necesitas ahorrar espacio de almacenamiento</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-500 text-sm mt-3">
                ¿Necesitas JPG? Usa nuestra herramienta <Link href="/es/pdf-a-jpg" className="text-[#14D8C4] hover:underline">PDF a JPG</Link>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Elegir la Resolución Correcta (DPI)</h2>
              <p className="text-slate-600 mb-4">
                DPI (puntos por pulgada) determina qué tan nítidas son tus imágenes PNG. Mayor DPI significa más píxeles y más detalle, pero también archivos más grandes. Aquí te mostramos qué funciona para escenarios comunes:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">DPI</th>
                      <th className="text-left py-3 px-4 font-bold">Mejor Para</th>
                      <th className="text-left py-3 px-4 font-bold">Tamaño de Archivo</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">72-100</td>
                      <td className="py-3 px-4">Vistas previas rápidas, miniaturas</td>
                      <td className="py-3 px-4">Pequeño (50-200KB)</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">150</td>
                      <td className="py-3 px-4">Páginas web, blogs, redes sociales</td>
                      <td className="py-3 px-4">Mediano (200KB-1MB)</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">300</td>
                      <td className="py-3 px-4">Presentaciones, impresión, trabajo de diseño</td>
                      <td className="py-3 px-4">Grande (1-5MB)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-500 text-sm mt-3">
                Si tus archivos PNG resultan muy grandes, siempre puedes <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">comprimir el PDF original</Link> primero, luego convertir.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para los Mejores Resultados PNG</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Comienza con un PDF limpio</h3>
                  <p className="text-slate-600">
                    Si tu PDF tiene anotaciones, campos de formulario o capas, considera <Link href="/es/aplanar-pdf" className="text-[#14D8C4] hover:underline">aplanarlo</Link> primero. Esto asegura que lo que ves en el PDF es exactamente lo que aparece en el PNG.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convierte solo páginas específicas</h3>
                  <p className="text-slate-600">
                    ¿No necesitas todas las páginas? Convierte solo las páginas que necesitas para ahorrar tiempo y almacenamiento. Si tu PDF es grande, <Link href="/es/dividir-pdf" className="text-[#14D8C4] hover:underline">divídelo primero</Link> para aislar las páginas que deseas.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Usa PNG para todo lo que va a software de diseño</h3>
                  <p className="text-slate-600">
                    Si estás importando páginas a Figma, Canva, Photoshop o un sitio web, PNG preserva la calidad mucho mejor que JPG. Lee más en nuestra guía sobre <Link href="/es/aprender/pdf-a-png-para-diseno" className="text-[#14D8C4] hover:underline">convertir PDF a PNG para trabajo de diseño</Link>.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">¿Listo para Convertir Tu PDF a PNG?</h2>
            <p className="text-slate-300 mb-6">Sube tu archivo y obtén imágenes PNG nítidas y sin pérdida en segundos — gratis, sin registro.</p>
            <Link
              href="/es/pdf-a-png"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Image className="h-5 w-5" /> Convertir PDF a PNG Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "PDF a JPG vs PNG: ¿Cuál Debes Usar? (Calidad vs Tamaño)", href: "/es/aprender/pdf-a-jpg-vs-png" },
                { title: "Guardar PDF como PNG en Mac (Métodos Rápidos + Mejores Resultados)", href: "/es/aprender/guardar-pdf-como-png-en-mac" },
                { title: "Convertir PDF a PNG en iPhone (Rápido, Exportación de Alta Calidad)", href: "/es/aprender/convertir-pdf-a-png-en-iphone" },
                { title: "Convertir PDF a PNG para Diseño (Figma, Canva, Web)", href: "/es/aprender/pdf-a-png-para-diseno" },
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
                { q: "¿Cómo convierto un PDF a PNG gratis?", a: "Sube tu PDF a la herramienta PDF a PNG de PDF.it, selecciona la resolución deseada, haz clic en Convertir y descarga las imágenes PNG. No se necesita registro para tus primeros 3 archivos." },
                { q: "¿PNG es mejor que JPG para conversiones de PDF?", a: "PNG es mejor cuando tu PDF contiene texto, gráficos, logos o arte lineal porque PNG usa compresión sin pérdida — no se pierde calidad. JPG es mejor para PDFs con muchas fotos donde el tamaño del archivo importa más que la nitidez perfecta." },
                { q: "¿PNG soporta transparencia de PDFs?", a: "Sí. PNG soporta fondos transparentes, así que si tu PDF tiene elementos transparentes, pueden preservarse en la salida PNG. JPG no soporta transparencia — llena las áreas transparentes con blanco." },
                { q: "¿Qué resolución debo usar para PDF a PNG?", a: "Para uso web, 150 DPI generalmente es suficiente. Para presentaciones y documentos, 200-300 DPI da resultados nítidos. Para calidad de impresión, usa 300 DPI o más." },
                { q: "¿Puedo convertir un PDF de múltiples páginas a PNG?", a: "Sí. PDF.it convierte cada página de tu PDF en una imagen PNG separada. Puedes descargarlas individualmente o como archivo ZIP. Los usuarios Pro pueden convertir por lotes múltiples PDFs a la vez." },
                { q: "¿El texto se mantiene nítido al convertir PDF a PNG?", a: "Sí. PNG usa compresión sin pérdida, así que el texto renderizado de un PDF se mantiene nítido y legible a cualquier nivel de zoom. Esta es una de las principales ventajas que PNG tiene sobre JPG." },
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

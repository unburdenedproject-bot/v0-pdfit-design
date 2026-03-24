import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Image, ArrowRight } from "lucide-react"

export const metadata = {
  title: "PDF a JPG vs PNG: ¿Cuál Debes Usar? (Calidad vs Tamaño) | PDF.it",
  description:
    "¿JPG o PNG — cuál es el formato correcto para tu conversión de PDF? Comparación detallada de calidad, tamaño de archivo, transparencia y casos de uso para ayudarte a elegir la mejor opción.",
  keywords: "pdf a jpg vs png, jpg vs png calidad, pdf a formato de imagen, png vs jpg comparación, mejor formato de imagen para pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Debo convertir mi PDF a JPG o PNG?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usa PNG si tu PDF contiene texto, gráficos, logos o elementos con transparencia. Usa JPG si tu PDF es mayormente fotos o necesitas el menor tamaño de archivo. En caso de duda, PNG es la opción más segura para calidad." }
    },
    {
      "@type": "Question",
      "name": "¿PNG es de mayor calidad que JPG?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PNG usa compresión sin pérdida, lo que significa que no se pierde ningún dato. JPG usa compresión con pérdida, que descarta algunos datos visuales para crear archivos más pequeños. Para texto y gráficos, esta diferencia es muy notable — JPG crea artefactos visibles alrededor de bordes nítidos." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué los archivos PNG son más grandes que JPG?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los archivos PNG son más grandes porque preservan cada píxel exactamente. JPG logra tamaños más pequeños aproximando grupos de píxeles similares, lo cual funciona bien para fotos pero crea borrosidad alrededor del texto y bordes duros." }
    },
    {
      "@type": "Question",
      "name": "¿JPG soporta transparencia?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. JPG no soporta transparencia. Si tu PDF tiene elementos transparentes, JPG los llenará con un fondo blanco. PNG soporta transparencia alfa completa, preservando las áreas transparentes." }
    },
    {
      "@type": "Question",
      "name": "¿Qué formato es mejor para redes sociales?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para publicaciones en redes sociales con fotos, JPG está bien y mantiene los tamaños de archivo pequeños. Para infografías, imágenes con mucho texto o logos, PNG se ve significativamente mejor. La mayoría de las plataformas sociales aceptan ambos formatos." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo convertir el mismo PDF tanto a JPG como a PNG?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Con PDF.it puedes convertir el mismo PDF a JPG y PNG por separado. Esto es útil cuando necesitas un PNG de alta calidad para trabajo de diseño y un JPG más pequeño para compartir." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Elegir Entre JPG y PNG para Conversión de PDF",
  "description": "Decide si convertir tu PDF a JPG o PNG en 3 pasos.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Revisa el contenido de tu PDF",
      "text": "Mira qué contiene tu PDF. Texto, gráficos y tablas se ven mejor como PNG. Fotos e imágenes escaneadas funcionan bien como JPG."
    },
    {
      "@type": "HowToStep",
      "name": "Considera tu caso de uso",
      "text": "Si necesitas transparencia o usarás la imagen en software de diseño, elige PNG. Si el tamaño del archivo es lo más importante (correo, mensajería), elige JPG."
    },
    {
      "@type": "HowToStep",
      "name": "Convierte con PDF.it",
      "text": "Sube tu PDF a la herramienta PDF a PNG o PDF a JPG de PDF.it, selecciona tu resolución y descarga las imágenes convertidas."
    }
  ]
}

export default function PdfAJpgVsPngPage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF a PNG</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF a JPG vs PNG: ¿Cuál Debes Usar?</h1>
              <p className="text-xl text-slate-300">
                JPG y PNG convierten tus páginas PDF en imágenes — pero producen resultados muy diferentes. Aquí te explicamos cuándo usar cada uno, con ejemplos reales y una guía práctica de decisión.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">¿Ya sabes lo que necesitas? Ve directo al convertidor.</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/es/pdf-a-png"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
              >
                PDF a PNG <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/es/pdf-a-jpg"
                className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
              >
                PDF a JPG <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* The core difference */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">La Diferencia Fundamental: Con Pérdida vs Sin Pérdida</h2>
              <p className="text-slate-600 mb-4">
                La diferencia fundamental entre JPG y PNG se reduce a cómo comprimen los datos de imagen:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>JPG usa compresión con pérdida.</strong> Descarta algunos datos visuales para crear archivos más pequeños. Esto funciona genial para fotos donde los detalles diminutos no importan, pero crea "artefactos" visibles alrededor de texto, logos y bordes nítidos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>PNG usa compresión sin pérdida.</strong> Cada píxel se preserva exactamente. El archivo es más grande, pero la calidad es perfecta. El texto permanece extremadamente nítido, los bordes se mantienen limpios y la transparencia se preserva.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                Esta distinción importa mucho al convertir PDFs porque la mayoría de los PDFs contienen texto — y el texto es donde la compresión JPG se ve peor.
              </p>
            </section>

            {/* Full comparison table */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Comparación Completa: JPG vs PNG</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Característica</th>
                      <th className="text-left py-3 px-4 font-bold">JPG</th>
                      <th className="text-left py-3 px-4 font-bold">PNG</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Compresión</td>
                      <td className="py-3 px-4">Con pérdida (datos perdidos)</td>
                      <td className="py-3 px-4">Sin pérdida (datos preservados)</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Tamaño de Archivo</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">Más pequeño</td>
                      <td className="py-3 px-4">Más grande (2-5x mayor)</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Calidad de Texto</td>
                      <td className="py-3 px-4">Artefactos alrededor de bordes</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">Texto perfecto y nítido</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Calidad de Fotos</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">Excelente (diseñado para fotos)</td>
                      <td className="py-3 px-4">Excelente (pero excesivo)</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Transparencia</td>
                      <td className="py-3 px-4">No soportada</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">Soporte alfa completo</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Mejor Para</td>
                      <td className="py-3 px-4">Fotos, docs escaneados, compartir</td>
                      <td className="py-3 px-4">Texto, gráficos, diseño, web</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* When JPG wins */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cuándo JPG Es la Mejor Opción</h2>
              <p className="text-slate-600 mb-4">
                JPG es ideal cuando el tamaño del archivo es tu prioridad y tu PDF es principalmente contenido visual:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">PDFs con Muchas Fotos</h3>
                  <p className="text-slate-600">
                    Si tu PDF es un álbum de fotos, un folleto con imágenes grandes o una colección de fotos escaneadas, JPG maneja estos contenidos perfectamente con una fracción del tamaño de archivo. La compresión con pérdida es virtualmente invisible en contenido fotográfico.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Compartir por Correo o Mensajería</h3>
                  <p className="text-slate-600">
                    Cuando necesitas enviar imágenes rápidamente y el receptor no necesita calidad pixel-perfecta, el menor tamaño de JPG es una ventaja práctica. Un PDF de 10 páginas podría producir 30MB de PNGs pero solo 5MB de JPGs.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Situaciones con Espacio Limitado</h3>
                  <p className="text-slate-600">
                    Si estás convirtiendo cientos de páginas y necesitas mantener el almacenamiento total bajo, JPG ahorra espacio significativo. Usa nuestra herramienta <Link href="/es/pdf-a-jpg" className="text-orange-600 hover:underline">PDF a JPG</Link> para conversiones por lotes.
                  </p>
                </div>
              </div>
            </section>

            {/* When PNG wins */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cuándo PNG Es la Mejor Opción</h2>
              <p className="text-slate-600 mb-4">
                PNG es el formato correcto cuando la calidad y precisión importan más que el tamaño del archivo:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Documentos con Texto</h3>
                  <p className="text-slate-600">
                    Esta es la mayor diferencia. Si tu PDF contiene texto legible — contratos, informes, artículos, facturas — PNG mantiene cada letra nítida. JPG introduce una neblina notable alrededor de los caracteres de texto que los hace ver ligeramente borrosos, especialmente en tamaños pequeños.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Gráficos y Trabajo de Diseño</h3>
                  <p className="text-slate-600">
                    Logos, gráficos, diagramas e ilustraciones tienen bordes nítidos y colores sólidos — exactamente el tipo de contenido donde los artefactos JPG son más visibles. PNG los preserva perfectamente. Aprende más en nuestra guía sobre <Link href="/es/aprender/pdf-a-png-para-diseno" className="text-orange-600 hover:underline">PDF a PNG para trabajo de diseño</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Cuando Necesitas Transparencia</h3>
                  <p className="text-slate-600">
                    PNG soporta transparencia alfa. Si estás colocando páginas PDF sobre fondos de color o superponiéndolas en herramientas de diseño como Figma o Canva, PNG te da un fondo transparente limpio. JPG siempre agrega un fondo blanco.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Uso Web y Presentaciones</h3>
                  <p className="text-slate-600">
                    Para insertar imágenes de documentos en sitios web, publicaciones de blog o presentaciones, la nitidez de PNG hace una diferencia visible. Las imágenes con mucho texto a 150-300 DPI se ven notablemente mejor como PNG.
                  </p>
                </div>
              </div>
            </section>

            {/* Quick decision guide */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Guía Rápida de Decisión</h2>
              <p className="text-slate-600 mb-4">
                ¿Aún no estás seguro? Hazte estas tres preguntas:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>- <strong>¿Tu PDF tiene texto?</strong> Elige <Link href="/es/pdf-a-png" className="text-orange-600 hover:underline">PNG</Link>.</li>
                <li>- <strong>¿Es mayormente fotografías?</strong> Elige <Link href="/es/pdf-a-jpg" className="text-orange-600 hover:underline">JPG</Link>.</li>
                <li>- <strong>¿Necesitas transparencia?</strong> Solo PNG la soporta.</li>
                <li>- <strong>¿El tamaño del archivo es tu principal preocupación?</strong> JPG es 2-5x más pequeño.</li>
                <li>- <strong>¿Va a software de diseño?</strong> PNG siempre.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                En caso de duda, elige PNG. Siempre puedes comprimir las imágenes después, pero no puedes recuperar la calidad que JPG eliminó.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">¿Listo para Convertir Tu PDF?</h2>
            <p className="text-slate-300 mb-6">Elige tu formato y convierte en segundos — gratis, sin registro.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/es/pdf-a-png"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
              >
                <Image className="h-5 w-5" /> Convertir a PNG
              </Link>
              <Link
                href="/es/pdf-a-jpg"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-xl transition-colors"
              >
                <Image className="h-5 w-5" /> Convertir a JPG
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Cómo Convertir PDF a PNG Online (Texto Nítido + Gráficos Limpios)", href: "/es/aprender/convertir-pdf-a-png" },
                { title: "Guardar PDF como PNG en Mac (Métodos Rápidos + Mejores Resultados)", href: "/es/aprender/guardar-pdf-como-png-en-mac" },
                { title: "Convertir PDF a PNG en iPhone (Rápido, Exportación de Alta Calidad)", href: "/es/aprender/convertir-pdf-a-png-en-iphone" },
                { title: "Convertir PDF a PNG para Diseño (Figma, Canva, Web)", href: "/es/aprender/pdf-a-png-para-diseno" },
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
                { q: "¿Debo convertir mi PDF a JPG o PNG?", a: "Usa PNG si tu PDF contiene texto, gráficos, logos o elementos con transparencia. Usa JPG si tu PDF es mayormente fotos o necesitas el menor tamaño de archivo. En caso de duda, PNG es la opción más segura para calidad." },
                { q: "¿PNG es de mayor calidad que JPG?", a: "Sí. PNG usa compresión sin pérdida, lo que significa que no se pierde ningún dato. JPG usa compresión con pérdida, que descarta algunos datos visuales para crear archivos más pequeños. Para texto y gráficos, esta diferencia es muy notable." },
                { q: "¿Por qué los archivos PNG son más grandes que JPG?", a: "Los archivos PNG son más grandes porque preservan cada píxel exactamente. JPG logra tamaños más pequeños aproximando grupos de píxeles similares, lo cual funciona bien para fotos pero crea borrosidad alrededor del texto y bordes duros." },
                { q: "¿JPG soporta transparencia?", a: "No. JPG no soporta transparencia. Si tu PDF tiene elementos transparentes, JPG los llenará con un fondo blanco. PNG soporta transparencia alfa completa." },
                { q: "¿Qué formato es mejor para redes sociales?", a: "Para publicaciones con fotos, JPG está bien y mantiene los tamaños de archivo pequeños. Para infografías, imágenes con mucho texto o logos, PNG se ve significativamente mejor. La mayoría de las plataformas sociales aceptan ambos formatos." },
                { q: "¿Puedo convertir el mismo PDF tanto a JPG como a PNG?", a: "Sí. Con PDF.it puedes convertir el mismo PDF a JPG y PNG por separado. Esto es útil cuando necesitas un PNG de alta calidad para trabajo de diseño y un JPG más pequeño para compartir." },
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

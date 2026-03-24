import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Image, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convertir PDF a PNG para Diseño (Figma, Canva, Web) | PDF.it",
  description:
    "Aprende cómo convertir PDF a PNG para Figma, Canva y proyectos web. Cubre resolución, transparencia, ajustes de DPI y mejores prácticas para usar contenido PDF en flujos de trabajo de diseño.",
  keywords: "pdf a png para diseño, pdf a png figma, pdf a png canva, pdf a png para web, convertir pdf a imagen para diseño",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué resolución debo usar para PDF a PNG en trabajo de diseño?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para diseño web, 150 DPI generalmente es suficiente. Para proyectos de Figma y Canva que pueden imprimirse, usa 300 DPI. Para impresiones de gran formato o carteles, considera 300-600 DPI. Mayor resolución significa archivos más grandes pero más flexibilidad al escalar." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo importar un PDF directamente a Figma?",
      "acceptedAnswer": { "@type": "Answer", "text": "Figma no soporta importación de PDF nativamente. El mejor flujo de trabajo es convertir tu PDF a PNG primero usando PDF.it, luego arrastrar las imágenes PNG a tu proyecto de Figma. Esto te da control total sobre resolución y calidad." }
    },
    {
      "@type": "Question",
      "name": "¿Convertir PDF a PNG preserva la transparencia?",
      "acceptedAnswer": { "@type": "Answer", "text": "PNG soporta transparencia, así que si tu PDF tiene elementos transparentes pueden preservarse. Sin embargo, la mayoría de las páginas PDF tienen fondo blanco por defecto. Para verdadera transparencia, asegúrate de que tu PDF fue creado con fondos transparentes." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué PNG es mejor que JPG para trabajo de diseño?",
      "acceptedAnswer": { "@type": "Answer", "text": "PNG usa compresión sin pérdida, así que los bordes se mantienen nítidos y los colores precisos. JPG crea artefactos visibles alrededor de texto, logos y bordes duros. PNG también soporta transparencia, que es esencial para superponer capas en herramientas de diseño." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo uso contenido PDF en Canva?",
      "acceptedAnswer": { "@type": "Answer", "text": "Canva puede importar PDFs directamente, pero para mejor control sobre calidad y posición, convierte tu PDF a PNG primero usando PDF.it. Luego sube el PNG a Canva como imagen — puedes redimensionar, recortar y superponer libremente." }
    },
    {
      "@type": "Question",
      "name": "¿Debo extraer imágenes del PDF en lugar de convertir páginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si solo necesitas imágenes específicas incrustadas en el PDF (fotos, logos, gráficos), usa la herramienta Extraer Imágenes de PDF.it. Si necesitas el diseño completo de la página como imagen, convierte la página a PNG. Ambos enfoques tienen su lugar en flujos de trabajo de diseño." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Convertir PDF a PNG para Trabajo de Diseño",
  "description": "Obtén imágenes PNG listas para diseño de tu PDF en 3 pasos.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube tu PDF",
      "text": "Ve a la herramienta PDF a PNG de PDF.it y sube el PDF que contiene los activos de diseño o páginas que necesitas."
    },
    {
      "@type": "HowToStep",
      "name": "Configura la resolución para tu caso de uso",
      "text": "Elige 150 DPI para web, 300 DPI para impresión o pantallas Retina. Mayor DPI te da más píxeles para trabajar en tu herramienta de diseño."
    },
    {
      "@type": "HowToStep",
      "name": "Importa a tu herramienta de diseño",
      "text": "Descarga los archivos PNG y arrástralos a Figma, Canva, Photoshop o tu proyecto web. La calidad sin pérdida asegura resultados nítidos a cualquier escala."
    }
  ]
}

export default function PdfAPngParaDisenoPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PDF a PNG para Diseño (Figma, Canva, Web)</h1>
              <p className="text-xl text-slate-300">
                Los diseñadores constantemente necesitan contenido PDF como imágenes — para mockups, presentaciones, páginas web y redes sociales. Aquí te mostramos cómo obtener la salida PNG más nítida y flexible para tu flujo de trabajo de diseño.
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
              <p className="text-slate-700 font-semibold">¿Necesitas PNGs listos para diseño ahora? Convierte tu PDF en segundos.</p>
            </div>
            <Link
              href="/es/pdf-a-png"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Convertir PDF a PNG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Qué los Diseñadores Convierten PDF a PNG</h2>
              <p className="text-slate-600 mb-4">
                PDF es un gran formato para compartir documentos terminados, pero las herramientas de diseño necesitan imágenes rasterizadas. Estas son las razones más comunes por las que los diseñadores convierten PDF a PNG:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Usar activos de clientes en Figma o Sketch.</strong> Los clientes a menudo envían logos, guías de marca o diseños como PDFs. La mayoría de herramientas de diseño no pueden importar PDFs directamente, así que convertir a PNG es el camino más rápido para llevar ese contenido a tu lienzo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Crear contenido para redes sociales desde documentos.</strong> Los equipos de marketing frecuentemente necesitan convertir páginas de informes, infografías o resúmenes en publicaciones de Instagram, carruseles de LinkedIn o imágenes de Twitter.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Construir páginas web con vistas previas de documentos.</strong> Insertar una vista previa PNG de un PDF en un sitio web es mucho más eficiente y accesible que incrustar el PDF completo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Crear mockups y estudios de caso.</strong> Los diseñadores a menudo necesitan mostrar documentos PDF dentro de marcos de dispositivos, ventanas de navegador o diseños de portafolio. Un PNG de alta calidad se integra perfectamente en estas composiciones.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Qué PNG (No JPG) para Trabajo de Diseño</h2>
              <p className="text-slate-600 mb-4">
                Para flujos de trabajo de diseño, PNG es casi siempre la mejor opción sobre JPG. Aquí está el porqué:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Característica</th>
                      <th className="text-left py-3 px-4 font-bold">Por Qué Importa para Diseño</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Calidad sin pérdida</td>
                      <td className="py-3 px-4">Sin artefactos de compresión alrededor de texto, logos o bordes. Lo que conviertes es exactamente lo que obtienes.</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">Transparencia</td>
                      <td className="py-3 px-4">Superpón imágenes PNG sobre fondos sin rectángulos blancos. Esencial para superposiciones, mockups y composiciones.</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Texto nítido</td>
                      <td className="py-3 px-4">El texto en PDFs se mantiene perfectamente nítido como PNG. JPG difumina los bordes del texto, lo cual es inmediatamente visible en presentaciones de diseño.</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">Precisión de color</td>
                      <td className="py-3 px-4">PNG preserva colores exactos sin los cambios sutiles que la compresión JPG introduce. Crítico para trabajo de marca.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-500 text-sm mt-3">
                ¿Quieres una comparación más profunda? Lee nuestra guía completa de <Link href="/es/aprender/pdf-a-jpg-vs-png" className="text-orange-600 hover:underline">JPG vs PNG</Link>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Elegir la Resolución Correcta para Tu Proyecto</h2>
              <p className="text-slate-600 mb-4">
                La resolución que elijas determina cuántos datos de píxeles tienes para trabajar. Aquí tienes una guía para escenarios de diseño comunes:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Tipo de Proyecto</th>
                      <th className="text-left py-3 px-4 font-bold">DPI Recomendado</th>
                      <th className="text-left py-3 px-4 font-bold">Por Qué</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Páginas web y blogs</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">150 DPI</td>
                      <td className="py-3 px-4">Equilibra calidad y velocidad de carga</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Publicaciones en redes sociales</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">150-200 DPI</td>
                      <td className="py-3 px-4">Las plataformas comprimen imágenes de todos modos; 200 DPI da margen</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Proyectos Figma / Canva</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">300 DPI</td>
                      <td className="py-3 px-4">Suficientes píxeles para zoom y pantallas Retina</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Materiales impresos</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">300 DPI</td>
                      <td className="py-3 px-4">Estándar de la industria para calidad de impresión profesional</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Gran formato / posters</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">300-600 DPI</td>
                      <td className="py-3 px-4">Se ven de lejos, pero mayor DPI evita píxeles visibles</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Usando PDF a PNG en Figma</h2>
              <p className="text-slate-600 mb-4">
                Figma no soporta importación directa de PDF, lo que hace que la conversión de PDF a PNG sea esencial para usuarios de Figma. Aquí está el flujo de trabajo recomendado:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convierte a 300 DPI para flexibilidad</h3>
                  <p className="text-slate-600">
                    Usa el <Link href="/es/pdf-a-png" className="text-orange-600 hover:underline">convertidor de PDF.it</Link> a 300 DPI. Esto te da suficiente resolución para escalar la imagen hacia arriba o abajo dentro de Figma sin perder calidad. Una página A4 a 300 DPI produce un PNG de aproximadamente 2480 x 3508 píxeles.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Arrastra y suelta en tu archivo de Figma</h3>
                  <p className="text-slate-600">
                    Simplemente arrastra el archivo PNG desde tu escritorio a tu lienzo de Figma. Figma preserva la resolución completa. Luego puedes redimensionar, recortar, enmascarar o aplicar efectos a la imagen.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Usa como capa de referencia</h3>
                  <p className="text-slate-600">
                    Muchos diseñadores colocan el PDF como PNG en una capa de fondo bloqueada y trazan sobre ella para recrear el diseño en componentes nativos de Figma. Esto es especialmente útil cuando reconstruyes documentos de clientes como prototipos interactivos.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Usando PDF a PNG en Canva</h2>
              <p className="text-slate-600 mb-4">
                Aunque Canva puede importar PDFs directamente, convertir a PNG primero te da más control:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">¿Por qué convertir en lugar de importar directamente?</h3>
                  <p className="text-slate-600">
                    La importación de PDF de Canva a veces reorganiza fuentes y diseños. Convertir a PNG primero bloquea el visual exactamente como aparece en el PDF original — sin sustitución de fuentes, sin cambios de diseño. Lo que ves es lo que obtienes.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Sube PNGs a tu carpeta de Uploads en Canva</h3>
                  <p className="text-slate-600">
                    Después de convertir con PDF.it, sube las imágenes PNG a la sección "Subidas" de Canva. Desde ahí, arrástralas a cualquier diseño de Canva — presentaciones, publicaciones sociales, posters o documentos.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Usando PDF a PNG para Proyectos Web</h2>
              <p className="text-slate-600 mb-4">
                Convertir páginas PDF a PNG es un patrón común para desarrolladores web y creadores de contenido:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Vistas previas de documentos en sitios web</h3>
                  <p className="text-slate-600">
                    En lugar de incrustar un visor de PDF completo (que es pesado y a menudo falla en móvil), convierte la primera página a PNG y muéstrala como imagen de vista previa con un enlace de "Descargar PDF". Esto carga más rápido y funciona en todos los dispositivos.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Imágenes de blog desde informes</h3>
                  <p className="text-slate-600">
                    Extrae gráficos, tablas o páginas clave de informes PDF e incrustalos como imágenes PNG en publicaciones de blog. Esto hace el contenido accesible y compartible sin requerir que los lectores descarguen un PDF.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Optimiza el tamaño del archivo para web</h3>
                  <p className="text-slate-600">
                    Para uso web, 150 DPI es típicamente suficiente. Si los PNGs siguen siendo grandes, <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">comprime el PDF original</Link> antes de convertir para reducir los datos de imagen incrustados.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cuándo Extraer Imágenes en Lugar de Convertir Páginas</h2>
              <p className="text-slate-600 mb-4">
                A veces no necesitas la página completa como imagen — solo necesitas gráficos específicos incrustados en el PDF:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>- <strong>¿Necesitas un logo de un PDF?</strong> Usa <Link href="/es/extraer-imagenes-de-pdf" className="text-orange-600 hover:underline">Extraer Imágenes de PDF</Link> para extraer imágenes individuales en su resolución original.</li>
                <li>- <strong>¿Necesitas el diseño completo de la página?</strong> Usa <Link href="/es/pdf-a-png" className="text-orange-600 hover:underline">PDF a PNG</Link> para capturar la página completa tal como se renderiza.</li>
                <li>- <strong>¿Necesitas ambos?</strong> Extrae imágenes individuales para activos de logos y fotos, luego convierte páginas completas para referencia de diseño. Ambas herramientas son gratuitas en PDF.it.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Obtén PNGs Listos para Diseño de Tu PDF</h2>
            <p className="text-slate-300 mb-6">Imágenes PNG de alta resolución y sin pérdida, listas para Figma, Canva o cualquier herramienta de diseño. Gratis e instantáneo.</p>
            <Link
              href="/es/pdf-a-png"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Image className="h-5 w-5" /> Convertir PDF a PNG Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Cómo Convertir PDF a PNG Online (Texto Nítido + Gráficos Limpios)", href: "/es/aprender/convertir-pdf-a-png" },
                { title: "PDF a JPG vs PNG: ¿Cuál Debes Usar? (Calidad vs Tamaño)", href: "/es/aprender/pdf-a-jpg-vs-png" },
                { title: "Guardar PDF como PNG en Mac (Métodos Rápidos + Mejores Resultados)", href: "/es/aprender/guardar-pdf-como-png-en-mac" },
                { title: "Convertir PDF a PNG en iPhone (Rápido, Exportación de Alta Calidad)", href: "/es/aprender/convertir-pdf-a-png-en-iphone" },
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
                { q: "¿Qué resolución debo usar para PDF a PNG en trabajo de diseño?", a: "Para diseño web, 150 DPI generalmente es suficiente. Para proyectos de Figma y Canva que pueden imprimirse, usa 300 DPI. Para impresiones de gran formato, considera 300-600 DPI." },
                { q: "¿Puedo importar un PDF directamente a Figma?", a: "Figma no soporta importación de PDF nativamente. El mejor flujo de trabajo es convertir tu PDF a PNG primero usando PDF.it, luego arrastrar las imágenes PNG a tu proyecto de Figma." },
                { q: "¿Convertir PDF a PNG preserva la transparencia?", a: "PNG soporta transparencia, así que si tu PDF tiene elementos transparentes pueden preservarse. Sin embargo, la mayoría de las páginas PDF tienen fondo blanco por defecto." },
                { q: "¿Por qué PNG es mejor que JPG para trabajo de diseño?", a: "PNG usa compresión sin pérdida, así que los bordes se mantienen nítidos y los colores precisos. JPG crea artefactos visibles alrededor de texto, logos y bordes duros. PNG también soporta transparencia." },
                { q: "¿Cómo uso contenido PDF en Canva?", a: "Canva puede importar PDFs directamente, pero para mejor control sobre calidad y posición, convierte tu PDF a PNG primero usando PDF.it. Luego sube el PNG a Canva como imagen." },
                { q: "¿Debo extraer imágenes del PDF en lugar de convertir páginas?", a: "Si solo necesitas imágenes específicas incrustadas en el PDF (fotos, logos), usa la herramienta Extraer Imágenes de PDF.it. Si necesitas el diseño completo de la página como imagen, convierte la página a PNG." },
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

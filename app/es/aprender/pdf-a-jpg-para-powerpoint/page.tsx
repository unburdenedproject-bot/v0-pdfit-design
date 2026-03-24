import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { ImageIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convertir PDF a JPG para PowerPoint (Mejores Ajustes + Consejos) | PDF.it",
  description:
    "Aprende los mejores ajustes para convertir páginas PDF a JPG para presentaciones de PowerPoint. Evita imágenes borrosas, elige la resolución correcta e inserta JPGs en tus diapositivas como un profesional.",
  keywords: "pdf a jpg para powerpoint, convertir pdf a imagen para diapositivas, insertar pdf en powerpoint, resolución pdf a jpg para presentación",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué DPI debo usar para PDF a JPG en PowerPoint?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usa 200 DPI para presentaciones estándar mostradas en un proyector o pantalla. Usa 300 DPI si la presentación será impresa o si necesitas hacer zoom en detalles. Evita 72 DPI — se verá borroso en pantallas modernas." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué mi PDF se ve borroso en PowerPoint?",
      "acceptedAnswer": { "@type": "Answer", "text": "La causa más común es convertir con un DPI muy bajo (72 o 96). Las diapositivas de PowerPoint son típicamente de 13.33 x 7.5 pulgadas, así que una imagen de bajo DPI se estira para llenar la diapositiva, causando borrosidad. Convierte a 200+ DPI para resultados nítidos." }
    },
    {
      "@type": "Question",
      "name": "¿Debo usar JPG o PNG para PowerPoint?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usa JPG para páginas PDF con muchas fotos (menor tamaño de archivo). Usa PNG para páginas con texto, diagramas o arte lineal (bordes más nítidos, sin artefactos de compresión). Si la presentación será enviada por correo, JPG mantiene el tamaño de archivo bajo." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo insertar un PDF directamente en PowerPoint?",
      "acceptedAnswer": { "@type": "Answer", "text": "PowerPoint puede insertar un PDF como objeto, pero solo muestra una miniatura y requiere hacer clic para abrirlo. Para un aspecto limpio y fluido, convierte las páginas PDF a imágenes JPG o PNG e insértalas como imágenes." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo convierto un PDF de múltiples páginas para una presentación de PowerPoint?",
      "acceptedAnswer": { "@type": "Answer", "text": "Convierte todo el PDF a JPG — cada página se convierte en una imagen separada. Luego inserta cada JPG en su propia diapositiva de PowerPoint. Esto te da una diapositiva por página PDF con total fidelidad visual." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo convertir el PDF directamente a PowerPoint?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí, si quieres diapositivas editables. PDF.it ofrece un convertidor de PDF a PowerPoint que crea un archivo .pptx con texto editable y diseños. Sin embargo, si solo quieres las páginas PDF como imágenes estáticas en tus diapositivas, convertir a JPG es más simple y confiable." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Convertir PDF a JPG para PowerPoint",
  "description": "Convierte páginas PDF a imágenes JPG de alta calidad optimizadas para presentaciones de PowerPoint en 3 pasos.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Convierte tu PDF a JPG a 200+ DPI",
      "text": "Sube tu PDF a la herramienta PDF a JPG de PDF.it y selecciona 200 DPI (o 300 DPI para presentaciones impresas). Convierte todas las páginas o selecciona las específicas."
    },
    {
      "@type": "HowToStep",
      "name": "Inserta las imágenes JPG en PowerPoint",
      "text": "En PowerPoint, ve a Insertar > Imágenes y selecciona los archivos JPG convertidos. Arrastra para redimensionarlos y que llenen la diapositiva."
    },
    {
      "@type": "HowToStep",
      "name": "Ajusta y alinea las imágenes",
      "text": "Haz clic derecho en la imagen, selecciona Tamaño y Posición, y configúralo para que coincida con las dimensiones de tu diapositiva (13.33 x 7.5 pulgadas para pantalla ancha). Centra la imagen para un aspecto limpio."
    }
  ]
}

export default function PdfAJpgParaPowerpointPage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF a JPG</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PDF a JPG para PowerPoint (Mejores Ajustes + Consejos)</h1>
              <p className="text-xl text-slate-300">
                ¿Quieres incluir contenido PDF en tus diapositivas? Aquí te mostramos cómo convertir páginas PDF a imágenes JPG que se vean nítidas y profesionales en PowerPoint — sin capturas de pantalla borrosas.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <ImageIcon className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">¿Necesitas convertir ahora? Ve directo a la herramienta.</p>
            </div>
            <Link
              href="/es/pdf-a-jpg"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Convertir PDF a JPG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why convert for PPT */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Qué Convertir PDF a JPG para PowerPoint?</h2>
              <p className="text-slate-600 mb-4">
                PowerPoint no maneja bien los PDF de forma nativa. Puedes insertar un PDF como un "objeto", pero muestra una miniatura pequeña y requiere hacer clic para abrirlo — no es exactamente una experiencia de presentación fluida. El mejor enfoque es convertir tus páginas PDF a imágenes e insertarlas:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Visualización completa.</strong> Las imágenes JPG llenan toda la diapositiva con tu contenido PDF — sin clics, sin ventanas emergentes, sin visores incrustados.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Funciona en todas partes.</strong> Las imágenes se muestran igual en cada computadora, proyector y versión de PowerPoint. Los PDF incrustados pueden fallar en diferentes sistemas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Fácil de anotar.</strong> Una vez que la página PDF es una imagen en tu diapositiva, puedes dibujar sobre ella, agregar flechas, resaltar texto o recortar secciones.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                Alternativamente, si necesitas diapositivas <em>editables</em> (no solo imágenes), prueba nuestro convertidor de <Link href="/es/pdf-a-powerpoint" className="text-orange-600 hover:underline">PDF a PowerPoint</Link> que crea un archivo .pptx con texto editable y diseños.
              </p>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Hacerlo (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Convierte tu PDF a JPG a 200+ DPI",
                    desc: "Sube tu PDF a la herramienta PDF a JPG. Configura el DPI a al menos 200 (300 si la presentación será impresa o mostrada en una pantalla 4K). Convierte todas las páginas o selecciona solo las que necesitas.",
                  },
                  {
                    title: "Inserta las imágenes en PowerPoint",
                    desc: "Abre PowerPoint, ve a Insertar > Imágenes > Este dispositivo y selecciona los archivos JPG. Cada imagen va en su propia diapositiva. Consejo: crea diapositivas en blanco primero, luego inserta una imagen por diapositiva.",
                  },
                  {
                    title: "Redimensiona para llenar la diapositiva",
                    desc: "Arrastra las esquinas de la imagen para llenar la diapositiva, o haz clic derecho > Tamaño y Posición y establece las dimensiones a 13.33\" x 7.5\" (pantalla ancha) o 10\" x 7.5\" (estándar). Centra la imagen para que quede perfectamente alineada.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
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

            {/* Resolution settings */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Qué Resolución Debes Usar?</h2>
              <p className="text-slate-600 mb-4">
                Aquí es donde la mayoría de personas se equivoca. El DPI que elijas al convertir determina si tus imágenes se ven nítidas o borrosas en pantalla:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Escenario</th>
                      <th className="text-left py-3 px-4 font-bold">DPI Recomendado</th>
                      <th className="text-left py-3 px-4 font-bold">Tamaño de Imagen (por página)</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">Presentación casual (proyector en sala de reuniones)</td>
                      <td className="py-3 px-4 font-semibold text-orange-600">150 DPI</td>
                      <td className="py-3 px-4">~400KB</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4">Presentación estándar (pantalla HD, webinar)</td>
                      <td className="py-3 px-4 font-semibold text-orange-600">200 DPI</td>
                      <td className="py-3 px-4">~800KB</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">Alta calidad (pantalla 4K, imprimir folletos)</td>
                      <td className="py-3 px-4 font-semibold text-orange-600">300 DPI</td>
                      <td className="py-3 px-4">~1.5-2MB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4">
                <strong>Ten en cuenta:</strong> Mayor DPI significa imágenes más grandes, lo que significa un archivo de PowerPoint más grande. Un PDF de 20 páginas a 300 DPI podría crear una presentación de 30-40MB. Si necesitas enviar el archivo por correo, 150-200 DPI es un mejor equilibrio.
              </p>
            </section>

            {/* JPG vs PNG for PPT */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿JPG o PNG para PowerPoint?</h2>
              <p className="text-slate-600 mb-4">
                Ambos formatos funcionan en PowerPoint, pero cada uno tiene sus fortalezas:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Usa JPG Cuando:</h3>
                  <ul className="space-y-1 text-slate-600">
                    <li>- Las páginas PDF contienen fotos o imágenes complejas</li>
                    <li>- Necesitas mantener el tamaño del archivo de PowerPoint pequeño</li>
                    <li>- La presentación será enviada por correo o compartida en línea</li>
                    <li>- Los artefactos de compresión menores son aceptables</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Usa PNG Cuando:</h3>
                  <ul className="space-y-1 text-slate-600">
                    <li>- El PDF tiene texto nítido, tablas o diagramas técnicos</li>
                    <li>- Necesitas precisión pixel por pixel (sin bordes difusos en el texto)</li>
                    <li>- El tamaño del archivo no es una preocupación</li>
                  </ul>
                  <p className="text-slate-600 mt-2">
                    ¿Necesitas PNG? Usa nuestra herramienta <Link href="/es/pdf-a-png" className="text-orange-600 hover:underline">PDF a PNG</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* Avoiding blurry images */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cómo Evitar Imágenes Borrosas en PowerPoint</h2>
              <p className="text-slate-600 mb-4">
                Las imágenes borrosas de PDF a JPG en PowerPoint son la queja más común. Aquí hay una lista de verificación para prevenirlo:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>- <strong>Convierte a 200+ DPI.</strong> Este es el factor más importante. Bajo DPI = imágenes borrosas.</li>
                <li>- <strong>No estires la imagen más allá de su resolución.</strong> Una imagen de 150 DPI estirada para llenar una diapositiva panorámica se verá suave.</li>
                <li>- <strong>Desactiva la compresión de PowerPoint.</strong> Por defecto, PowerPoint comprime las imágenes cuando guardas. Ve a Archivo &gt; Opciones &gt; Avanzado y establece "Resolución predeterminada" en "Alta fidelidad" o desmarca "Descartar datos de edición".</li>
                <li>- <strong>Usa "Insertar imágenes" no pegar.</strong> Copiar y pegar imágenes puede reducir la calidad. Siempre usa Insertar &gt; Imágenes para agregar tus JPGs.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Para un análisis más profundo sobre problemas de calidad, consulta nuestra guía: <Link href="/es/aprender/por-que-pdf-a-jpg-se-ve-borroso" className="text-orange-600 hover:underline">Por Qué Tu PDF a JPG Se Ve Borroso</Link>.
              </p>
            </section>

            {/* Pro tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos Profesionales para Mejores Resultados</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convierte Solo las Páginas que Necesitas</h3>
                  <p className="text-slate-600">
                    Si tu PDF tiene 50 páginas pero solo necesitas las páginas 3, 7 y 12 en tu presentación, no conviertas todo el documento. Selecciona solo esas páginas para ahorrar tiempo y mantener tu archivo de PowerPoint pequeño.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Usa el Patrón de Diapositivas para un Diseño Consistente</h3>
                  <p className="text-slate-600">
                    Si estás insertando muchas páginas PDF, crea un diseño de diapositiva en blanco en el Patrón de Diapositivas sin marcadores de título o contenido. Esto te da un lienzo limpio para cada imagen.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Considera la Alternativa: PDF a PPTX</h3>
                  <p className="text-slate-600">
                    Si necesitas editar el texto o reorganizar el contenido del PDF, convertir a imágenes no ayudará. Usa nuestro convertidor de <Link href="/es/pdf-a-powerpoint" className="text-orange-600 hover:underline">PDF a PowerPoint</Link> para obtener un archivo .pptx editable.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">¿Listo para Convertir PDF a JPG para Tus Diapositivas?</h2>
            <p className="text-slate-300 mb-6">Sube tu PDF y obtén imágenes JPG listas para presentación en segundos.</p>
            <Link
              href="/es/pdf-a-jpg"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <ImageIcon className="h-5 w-5" /> Convertir PDF a JPG
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Cómo Convertir PDF a JPG Online (Rápido y Alta Calidad)", href: "/es/aprender/convertir-pdf-a-jpg" },
                { title: "Cómo Guardar Una Página PDF como JPG (Windows, Mac, Móvil)", href: "/es/aprender/guardar-pagina-pdf-como-jpg" },
                { title: "Por Qué Tu PDF a JPG Se Ve Borroso (Y Cómo Solucionarlo)", href: "/es/aprender/por-que-pdf-a-jpg-se-ve-borroso" },
                { title: "Convertir PDF a JPG en iPhone (Sin Apps)", href: "/es/aprender/pdf-a-jpg-en-iphone" },
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "¿Qué DPI debo usar para PDF a JPG en PowerPoint?", a: "Usa 200 DPI para presentaciones estándar mostradas en un proyector o pantalla. Usa 300 DPI si la presentación será impresa o si necesitas hacer zoom en detalles. Evita 72 DPI — se verá borroso en pantallas modernas." },
                { q: "¿Por qué mi PDF se ve borroso en PowerPoint?", a: "La causa más común es convertir con un DPI muy bajo (72 o 96). Las diapositivas de PowerPoint son típicamente de 13.33 x 7.5 pulgadas, así que una imagen de bajo DPI se estira para llenar la diapositiva, causando borrosidad. Convierte a 200+ DPI para resultados nítidos." },
                { q: "¿Debo usar JPG o PNG para PowerPoint?", a: "Usa JPG para páginas PDF con muchas fotos (menor tamaño de archivo). Usa PNG para páginas con texto, diagramas o arte lineal (bordes más nítidos, sin artefactos de compresión). Si la presentación será enviada por correo, JPG mantiene el tamaño de archivo bajo." },
                { q: "¿Puedo insertar un PDF directamente en PowerPoint?", a: "PowerPoint puede insertar un PDF como objeto, pero solo muestra una miniatura y requiere hacer clic para abrirlo. Para un aspecto limpio y fluido, convierte las páginas PDF a imágenes JPG o PNG e insértalas como imágenes." },
                { q: "¿Cómo convierto un PDF de múltiples páginas para una presentación?", a: "Convierte todo el PDF a JPG — cada página se convierte en una imagen separada. Luego inserta cada JPG en su propia diapositiva de PowerPoint. Esto te da una diapositiva por página PDF con total fidelidad visual." },
                { q: "¿Puedo convertir el PDF directamente a PowerPoint?", a: "Sí, si quieres diapositivas editables. PDF.it ofrece un convertidor de PDF a PowerPoint que crea un archivo .pptx con texto editable y diseños. Sin embargo, si solo quieres las páginas PDF como imágenes estáticas en tus diapositivas, convertir a JPG es más simple y confiable." },
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

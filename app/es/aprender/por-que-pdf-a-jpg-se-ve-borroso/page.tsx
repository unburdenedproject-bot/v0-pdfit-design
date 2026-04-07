import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { ImageIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Por Qué Tu PDF a JPG Se Ve Borroso (Y Cómo Solucionarlo) | PDF.it",
  description:
    "¿Tu conversión de PDF a JPG se ve borrosa? Aprende las 5 causas más comunes y cómo solucionar cada una. Obtén imágenes JPG nítidas y de alta calidad de tus PDFs cada vez.",
  keywords: "pdf a jpg borroso, pdf a jpg baja calidad, conversión pdf borrosa, calidad pdf a imagen, arreglar pdf a jpg borroso",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Por qué mi PDF a JPG se ve borroso?",
      "acceptedAnswer": { "@type": "Answer", "text": "La causa más común es convertir con un DPI (puntos por pulgada) demasiado bajo. La mayoría de las herramientas gratuitas usan por defecto 72 o 96 DPI, lo que produce imágenes pequeñas y de baja resolución. Convierte a 200-300 DPI para resultados nítidos." }
    },
    {
      "@type": "Question",
      "name": "¿Qué DPI debo usar para evitar JPGs borrosos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para visualización en pantalla, 150 DPI es el mínimo para calidad aceptable. Para documentos, presentaciones y compartir, 200 DPI es lo recomendado. Para impresión o máxima calidad, usa 300 DPI." }
    },
    {
      "@type": "Question",
      "name": "¿PNG es mejor que JPG en calidad?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PNG usa compresión sin pérdida, así que no hay artefactos de compresión. JPG usa compresión con pérdida que puede crear bordes difusos alrededor del texto y líneas nítidas. Para PDFs con mucho texto, PNG siempre se verá más nítido que JPG." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo arreglar un JPG borroso que ya fue convertido?",
      "acceptedAnswer": { "@type": "Answer", "text": "Realmente no. Una vez que se pierde calidad en una conversión JPG, no puedes recuperarla. La solución es volver al PDF original y reconvertir con un DPI más alto y mejores ajustes de calidad. Nunca intentes escalar una imagen JPG de baja calidad." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué mi PDF escaneado se ve borroso al convertirlo a JPG?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si el escaneo original se hizo a baja resolución (menos de 200 DPI), el PDF mismo contiene una imagen de baja calidad. Ningún convertidor puede agregar detalle que no existe. Si es posible, vuelve a escanear el documento a 300 DPI o usa OCR para extraer el texto." }
    },
    {
      "@type": "Question",
      "name": "¿El tamaño del archivo afecta la calidad del JPG?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Los archivos JPG más pequeños usan más compresión, lo que reduce la calidad. Un JPG de 50KB se verá mucho peor que un JPG de 500KB de la misma página. Si necesitas tamaño pequeño y buena calidad, considera el formato PNG." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Solucionar Conversiones Borrosas de PDF a JPG",
  "description": "Obtén imágenes JPG nítidas y de alta calidad de tus PDFs siguiendo estos 3 pasos.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Verifica tu configuración de DPI",
      "text": "Asegúrate de estar convirtiendo a 200 DPI o más. La mayoría de resultados borrosos vienen de herramientas que usan por defecto 72 o 96 DPI."
    },
    {
      "@type": "HowToStep",
      "name": "Usa un convertidor de alta calidad",
      "text": "Sube tu PDF a la herramienta PDF a JPG de PDF.it, que te permite elegir configuraciones de DPI y produce resultados de alta calidad."
    },
    {
      "@type": "HowToStep",
      "name": "Considera PNG para páginas con mucho texto",
      "text": "Si tu PDF tiene mucho texto o líneas nítidas, convierte a PNG en lugar de JPG. PNG usa compresión sin pérdida y no agregará artefactos difusos alrededor del texto."
    }
  ]
}

export default function PorQuePdfAJpgSeVeBorrosoPage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF a JPG</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Por Qué Tu PDF a JPG Se Ve Borroso (Y Cómo Solucionarlo)</h1>
              <p className="text-xl text-slate-300">
                Convertiste un PDF a JPG y el resultado se ve difuso, pixelado o lavado. Aquí te explicamos por qué sucede y exactamente cómo solucionarlo.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <ImageIcon className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">¿Quieres JPGs nítidos? Convierte con control sobre DPI y calidad.</p>
            </div>
            <Link
              href="/es/pdf-a-jpg"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Convertir PDF a JPG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* The 5 causes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Las 5 Causas Más Comunes de Imágenes Borrosas de PDF a JPG</h2>
              <p className="text-slate-600 mb-6">
                Los resultados borrosos casi siempre se reducen a uno de estos cinco problemas. La buena noticia: cada uno tiene solución.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">1. DPI Bajo (El Culpable #1)</h3>
                  <p className="text-slate-600 mb-2">
                    DPI significa "puntos por pulgada" — controla cuántos píxeles componen cada pulgada de la imagen. Muchas herramientas gratuitas convierten a 72 o 96 DPI por defecto. A 72 DPI, una página tamaño carta estándar se convierte en solo unos 612 x 792 píxeles — eso es diminuto para los estándares actuales.
                  </p>
                  <p className="text-slate-600">
                    <strong>La solución:</strong> Convierte a un mínimo de 200 DPI. Para impresión o presentaciones, usa 300 DPI. La herramienta <Link href="/es/pdf-a-jpg" className="text-[#14D8C4] hover:underline">PDF a JPG</Link> de PDF.it te permite elegir tu DPI antes de convertir.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">2. Artefactos de Compresión JPG</h3>
                  <p className="text-slate-600 mb-2">
                    JPG es un formato "con pérdida" — reduce el tamaño del archivo descartando datos de imagen. Esto crea artefactos visibles: halos difusos alrededor del texto, áreas en bloques en degradados y bordes suaves en líneas nítidas. Cuanta más compresión se aplica, peor se ve.
                  </p>
                  <p className="text-slate-600">
                    <strong>La solución:</strong> Usa configuraciones de alta calidad (baja compresión) al convertir. O cambia al formato PNG — es sin pérdida, lo que significa cero pérdida de calidad. Usa nuestra herramienta <Link href="/es/pdf-a-png" className="text-[#14D8C4] hover:underline">PDF a PNG</Link> para documentos con mucho texto.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">3. El PDF Original Es de Baja Calidad</h3>
                  <p className="text-slate-600 mb-2">
                    Ningún convertidor puede crear detalle que no existe en el archivo fuente. Si tu PDF fue creado a partir de un escaneo de baja resolución (100-150 DPI), una foto de mala calidad o un original muy comprimido, el JPG se verá igual de mal — o peor.
                  </p>
                  <p className="text-slate-600">
                    <strong>La solución:</strong> Si es posible, obtén una versión de mayor calidad del documento original. Para documentos escaneados, vuelve a escanear a 300 DPI. Si el PDF es todo lo que tienes, convertir a un DPI más alto no ayudará — no puedes agregar detalle que no está ahí.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">4. Estirar o Escalar la Imagen</h3>
                  <p className="text-slate-600 mb-2">
                    Convertir a 72 DPI y luego estirar la imagen para llenar una diapositiva de PowerPoint o una página web hace la borrosidad mucho peor. Una imagen de 612 x 792 píxeles estirada a 1920 x 1080 se verá terrible.
                  </p>
                  <p className="text-slate-600">
                    <strong>La solución:</strong> Siempre convierte al DPI apropiado para tu uso final. Si la imagen se mostrará a 1920 píxeles de ancho, necesitas al menos 200 DPI para tener suficientes píxeles.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">5. Compresión a Nivel de Aplicación</h3>
                  <p className="text-slate-600 mb-2">
                    Algunas aplicaciones comprimen automáticamente las imágenes cuando las importas. PowerPoint, por ejemplo, comprime las imágenes por defecto cuando guardas el archivo. Google Docs redimensiona las imágenes. Los clientes de correo a menudo reducen la resolución de los archivos adjuntos.
                  </p>
                  <p className="text-slate-600">
                    <strong>La solución:</strong> En PowerPoint, ve a Archivo &gt; Opciones &gt; Avanzado y establece la calidad de imagen en "Alta fidelidad". En otras aplicaciones, busca las configuraciones de compresión de imagen y desactívalas.
                  </p>
                </div>
              </div>
            </section>

            {/* Quick fix checklist */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Lista de Verificación Rápida</h2>
              <p className="text-slate-600 mb-4">
                Si tus JPGs convertidos se ven borrosos, revisa esta lista:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>- ¿Estás convirtiendo a 200+ DPI? Si no, reconvierte con un DPI más alto.</li>
                <li>- ¿Tu convertidor está usando alta calidad de JPG? Baja calidad = más artefactos de compresión.</li>
                <li>- ¿El PDF original es de alta calidad? Verifica haciendo zoom al 400% en un visor de PDF — si se ve borroso ahí, se verá borroso como JPG.</li>
                <li>- ¿Estás estirando la imagen después de convertir? La imagen debe usarse a su resolución nativa o menor.</li>
                <li>- ¿La aplicación está comprimiendo tus imágenes? Verifica las configuraciones de PowerPoint, Google Docs o correo electrónico.</li>
                <li>- ¿Deberías estar usando PNG? Para texto y diagramas, PNG siempre se ve más nítido.</li>
              </ul>
            </section>

            {/* When to use PNG */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cuándo Usar PNG en Lugar de JPG</h2>
              <p className="text-slate-600 mb-4">
                A veces la solución no es arreglar tus configuraciones de JPG — es usar un formato diferente. PNG es la mejor opción cuando:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Tu PDF es mayormente texto.</strong> La compresión JPG crea artefactos visibles alrededor de los bordes de las letras. PNG preserva el texto perfectamente — cada letra permanece perfectamente nítida.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Tu PDF tiene diagramas, gráficos o arte lineal.</strong> Las líneas nítidas y colores sólidos se comprimen mal en JPG. PNG los maneja perfectamente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Necesitas precisión pixel por pixel.</strong> Documentos legales, dibujos técnicos o cualquier imagen donde la precisión importa — PNG es la única opción.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                La compensación es el tamaño del archivo: los archivos PNG son 2-5x más grandes que los JPGs. Si eso no es un problema, <Link href="/es/pdf-a-png" className="text-[#14D8C4] hover:underline">convierte a PNG</Link> para la mejor calidad.
              </p>
            </section>

            {/* DPI comparison */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Comparación de DPI: Cómo Se Ve Cada Configuración</h2>
              <p className="text-slate-600 mb-4">
                Aquí hay una comparación práctica de cómo diferentes configuraciones de DPI afectan una página PDF tamaño carta estándar:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">DPI</th>
                      <th className="text-left py-3 px-4 font-bold">Dimensiones de Imagen</th>
                      <th className="text-left py-3 px-4 font-bold">Calidad</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">72 DPI</td>
                      <td className="py-3 px-4">612 x 792 px</td>
                      <td className="py-3 px-4">Pobre — el texto se ve difuso, las imágenes pixeladas</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">150 DPI</td>
                      <td className="py-3 px-4">1275 x 1650 px</td>
                      <td className="py-3 px-4">Decente — bien para web y correo electrónico</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">200 DPI</td>
                      <td className="py-3 px-4">1700 x 2200 px</td>
                      <td className="py-3 px-4">Bueno — nítido en pantallas, limpio en presentaciones</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">300 DPI</td>
                      <td className="py-3 px-4">2550 x 3300 px</td>
                      <td className="py-3 px-4">Excelente — calidad de impresión, máximo detalle</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4">
                A 72 DPI, cada página tiene unos 480,000 píxeles. A 300 DPI, tiene 8.4 millones. Eso es una diferencia de 17x en detalle.
              </p>
            </section>

            {/* Compress after converting */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Si Necesitas Archivos Pequeños Y Buena Calidad</h2>
              <p className="text-slate-600 mb-4">
                Hay un dilema común: quieres imágenes nítidas pero también necesitas que sean pequeñas (para correo, subir a la web, etc.). Aquí está el mejor enfoque:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>1. Convierte a 200 DPI con configuración de alta calidad — esto te da imágenes nítidas.</li>
                <li>2. Si el tamaño del archivo es muy grande, <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">comprime el PDF original primero</Link>, luego convierte a JPG.</li>
                <li>3. Usa 150 DPI como compromiso — aún lo suficientemente nítido para pantallas, pero archivos significativamente más pequeños.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Nunca conviertas a alto DPI y luego intentes comprimir el JPG resultante — esto agrega una segunda ronda de compresión con pérdida y empeora aún más la calidad.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Obtén JPGs Nítidos de Tus PDFs</h2>
            <p className="text-slate-300 mb-6">Convierte a 200+ DPI con control total de calidad — sin resultados borrosos.</p>
            <Link
              href="/es/pdf-a-jpg"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
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
                { title: "Convertir PDF a JPG para PowerPoint (Mejores Ajustes + Consejos)", href: "/es/aprender/pdf-a-jpg-para-powerpoint" },
                { title: "Convertir PDF a JPG en iPhone (Sin Apps)", href: "/es/aprender/pdf-a-jpg-en-iphone" },
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
                { q: "¿Por qué mi PDF a JPG se ve borroso?", a: "La causa más común es convertir con un DPI (puntos por pulgada) demasiado bajo. La mayoría de las herramientas gratuitas usan por defecto 72 o 96 DPI, lo que produce imágenes pequeñas y de baja resolución. Convierte a 200-300 DPI para resultados nítidos." },
                { q: "¿Qué DPI debo usar para evitar JPGs borrosos?", a: "Para visualización en pantalla, 150 DPI es el mínimo para calidad aceptable. Para documentos, presentaciones y compartir, 200 DPI es lo recomendado. Para impresión o máxima calidad, usa 300 DPI." },
                { q: "¿PNG es mejor que JPG en calidad?", a: "Sí. PNG usa compresión sin pérdida, así que no hay artefactos de compresión. JPG usa compresión con pérdida que puede crear bordes difusos alrededor del texto y líneas nítidas. Para PDFs con mucho texto, PNG siempre se verá más nítido." },
                { q: "¿Puedo arreglar un JPG borroso que ya fue convertido?", a: "Realmente no. Una vez que se pierde calidad en una conversión JPG, no puedes recuperarla. La solución es volver al PDF original y reconvertir con un DPI más alto y mejores ajustes de calidad." },
                { q: "¿Por qué mi PDF escaneado se ve borroso al convertirlo a JPG?", a: "Si el escaneo original se hizo a baja resolución (menos de 200 DPI), el PDF mismo contiene una imagen de baja calidad. Ningún convertidor puede agregar detalle que no existe. Si es posible, vuelve a escanear a 300 DPI." },
                { q: "¿El tamaño del archivo afecta la calidad del JPG?", a: "Sí. Los archivos JPG más pequeños usan más compresión, lo que reduce la calidad. Un JPG de 50KB se verá mucho peor que un JPG de 500KB de la misma página. Si necesitas tamaño pequeño y buena calidad, considera el formato PNG." },
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

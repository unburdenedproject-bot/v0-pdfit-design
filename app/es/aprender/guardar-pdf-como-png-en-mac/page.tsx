import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Image, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Guardar PDF como PNG en Mac (Métodos Rápidos + Mejores Resultados) | PDF.it",
  description:
    "Aprende cómo guardar un PDF como PNG en Mac usando Vista Previa, PDF.it o Automator. Cubre conversión de una página y por lotes con comparación de calidad y mejores prácticas.",
  keywords: "guardar pdf como png mac, pdf a png mac, convertir pdf a png en mac, mac vista previa pdf a png, exportar pdf como png mac",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Puedo guardar un PDF como PNG usando Vista Previa de Mac?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Abre el PDF en Vista Previa, ve a Archivo > Exportar, elige PNG del menú de formato y establece tu resolución. Sin embargo, Vista Previa solo exporta una página a la vez, lo cual es lento para PDFs de múltiples páginas." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo convierto todas las páginas de un PDF a PNG en Mac?",
      "acceptedAnswer": { "@type": "Answer", "text": "Vista Previa de Mac solo exporta una página a la vez. Para PDFs de múltiples páginas, usa el convertidor online de PDF.it — sube tu PDF y todas las páginas se convierten a PNG a la vez, descargables como archivo ZIP." }
    },
    {
      "@type": "Question",
      "name": "¿Qué resolución debo usar al exportar PDF a PNG en Mac?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para uso web, 150 DPI es suficiente. Para presentaciones e impresión, usa 300 DPI. La exportación predeterminada de Vista Previa de Mac es 72 DPI lo cual puede verse borroso — auméntalo para resultados más nítidos." }
    },
    {
      "@type": "Question",
      "name": "¿Hay una forma gratuita de convertir PDF a PNG por lotes en Mac?",
      "acceptedAnswer": { "@type": "Answer", "text": "Puedes usar Automator de macOS para crear un flujo de trabajo, pero requiere algo de configuración. La opción gratuita más fácil es la herramienta online de PDF.it — sube tu PDF, convierte todas las páginas y descarga los PNGs como ZIP." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué mi PDF se ve borroso al guardarlo como PNG en Mac?",
      "acceptedAnswer": { "@type": "Answer", "text": "Esto generalmente sucede porque la resolución de exportación es muy baja. Vista Previa de Mac usa 72 DPI por defecto. Aumenta la resolución a 150 DPI (web) o 300 DPI (impresión) para resultados nítidos. También asegúrate de guardar como PNG, no JPG — JPG agrega artefactos de compresión." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo convertir un PDF a PNG en Mac sin instalar software?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Vista Previa viene integrada en macOS y maneja exportaciones básicas de una página. Para conversiones de múltiples páginas o por lotes sin instalar nada, usa PDF.it en tu navegador — funciona en Safari, Chrome y Firefox." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Guardar PDF como PNG en Mac",
  "description": "Convierte tus páginas PDF a imágenes PNG en Mac en 3 pasos.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Abre tu PDF",
      "text": "Abre el PDF en Vista Previa de Mac (doble clic en el archivo) o navega a la herramienta PDF a PNG de PDF.it en tu navegador."
    },
    {
      "@type": "HowToStep",
      "name": "Exporta como PNG",
      "text": "En Vista Previa: Archivo > Exportar, elige formato PNG, establece resolución. En PDF.it: sube el archivo, selecciona resolución, haz clic en Convertir."
    },
    {
      "@type": "HowToStep",
      "name": "Guarda tus archivos PNG",
      "text": "Elige tu ubicación de guardado y descarga. PDF.it convierte todas las páginas a la vez y ofrece descarga como ZIP para PDFs de múltiples páginas."
    }
  ]
}

export default function GuardarPdfComoPngEnMacPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Guardar PDF como PNG en Mac (Métodos Rápidos + Mejores Resultados)</h1>
              <p className="text-xl text-slate-300">
                ¿Necesitas convertir tu PDF en imágenes PNG en un Mac? Hay varias formas — desde la app Vista Previa integrada hasta herramientas online. Aquí te mostramos cómo obtener los resultados más nítidos con el menor esfuerzo.
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
              <p className="text-slate-700 font-semibold">¿Quieres todas las páginas convertidas a la vez? Usa nuestro convertidor online.</p>
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Método 1: Usando Vista Previa de Mac (Integrado)</h2>
              <p className="text-slate-600 mb-4">
                Vista Previa viene preinstalada en cada Mac y puede exportar páginas PDF individuales como PNG. Es la opción más rápida para páginas individuales, pero tiene limitaciones para documentos de múltiples páginas.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Abre tu PDF en Vista Previa",
                    desc: "Haz doble clic en el archivo PDF. Debería abrirse en Vista Previa por defecto. Si se abre en otra app, haz clic derecho en el archivo y elige Abrir con > Vista Previa.",
                  },
                  {
                    title: "Navega a la página que deseas",
                    desc: "Usa las miniaturas de la barra lateral para encontrar la página que quieres exportar. Haz clic en ella para seleccionarla.",
                  },
                  {
                    title: "Exporta como PNG",
                    desc: "Ve a Archivo > Exportar. En el menú desplegable de Formato, selecciona PNG. Establece la resolución — auméntala del predeterminado 72 DPI a 150 o 300 DPI para resultados más nítidos. Haz clic en Guardar.",
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
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-sm text-amber-800">
                  <strong>Limitación:</strong> Vista Previa solo exporta una página a la vez. Para PDFs de múltiples páginas, tendrías que repetir este proceso para cada página — tedioso para documentos largos. Ve el Método 2 para un enfoque más rápido.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Método 2: Usando PDF.it (Todas las Páginas a la Vez)</h2>
              <p className="text-slate-600 mb-4">
                El convertidor online de PDF.it maneja todo el PDF de una vez — sin necesidad de exportar página por página. Funciona en Safari, Chrome o cualquier navegador en tu Mac.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Abre la herramienta PDF a PNG",
                    desc: "Ve a pdf.it.com/pdf-to-png en tu navegador. Sin software que instalar — funciona completamente online.",
                  },
                  {
                    title: "Sube tu PDF",
                    desc: "Arrastra tu PDF al área de carga o haz clic para buscar. Archivos hasta 25MB son gratis. Los usuarios Pro pueden subir hasta 200MB.",
                  },
                  {
                    title: "Descarga todas las páginas como PNG",
                    desc: "Haz clic en Convertir. Cada página se convierte en una imagen PNG separada. Descarga individualmente o todas como archivo ZIP.",
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Vista Previa vs PDF.it: ¿Cuál Usar?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Característica</th>
                      <th className="text-left py-3 px-4 font-bold">Vista Previa Mac</th>
                      <th className="text-left py-3 px-4 font-bold">PDF.it</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Exportación multi-página</td>
                      <td className="py-3 px-4">Una página a la vez</td>
                      <td className="py-3 px-4 text-[#14D8C4] font-semibold">Todas las páginas a la vez</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Instalación</td>
                      <td className="py-3 px-4 text-[#14D8C4] font-semibold">Integrada</td>
                      <td className="py-3 px-4">Ninguna (funciona en navegador)</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Control de resolución</td>
                      <td className="py-3 px-4">Sí</td>
                      <td className="py-3 px-4">Sí</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Conversión por lotes</td>
                      <td className="py-3 px-4">No</td>
                      <td className="py-3 px-4 text-[#14D8C4] font-semibold">Sí (Pro)</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Descarga ZIP</td>
                      <td className="py-3 px-4">No</td>
                      <td className="py-3 px-4 text-[#14D8C4] font-semibold">Sí</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Mejor para</td>
                      <td className="py-3 px-4">Exportación rápida de una página</td>
                      <td className="py-3 px-4">Multi-página y trabajos por lotes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Obtener Resultados Nítidos: La Resolución Importa</h2>
              <p className="text-slate-600 mb-4">
                La queja más común sobre conversiones de PDF a PNG en Mac es la salida borrosa. Esto casi siempre se reduce a la resolución. Aquí está lo que debes buscar:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>- <strong>72 DPI (predeterminado de Vista Previa):</strong> Muy bajo para la mayoría de usos. El texto se ve suave y las imágenes carecen de detalle. Evita esto a menos que solo necesites una miniatura pequeña.</li>
                <li>- <strong>150 DPI:</strong> Bueno para web, publicaciones de blog y compartir en pantalla. El texto es legible y las imágenes se ven limpias en pantallas estándar.</li>
                <li>- <strong>300 DPI:</strong> Ideal para presentaciones, impresión y pantallas Retina. Esto coincide con la resolución de la mayoría de flujos de trabajo profesionales.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Si tus archivos PNG terminan siendo más grandes de lo que te gustaría con alto DPI, puedes <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">comprimir el PDF original</Link> primero para reducir la cantidad de datos de imagen incrustados.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Conversión por Lotes de Múltiples PDFs en Mac</h2>
              <p className="text-slate-600 mb-4">
                Si tienes varios PDFs para convertir, hacerlo uno a la vez en Vista Previa no es práctico. Aquí hay mejores enfoques:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Conversión por lotes con PDF.it Pro</h3>
                  <p className="text-slate-600">
                    Con una suscripción Pro, puedes subir múltiples PDFs a la vez y convertirlos todos a PNG en un solo lote. Las páginas de cada PDF se exportan como PNGs separados, todo empaquetado en un ZIP descargable.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Divide primero, luego convierte</h3>
                  <p className="text-slate-600">
                    Para PDFs muy grandes, considera <Link href="/es/dividir-pdf" className="text-[#14D8C4] hover:underline">dividir tu PDF</Link> en secciones más pequeñas primero, luego convierte cada sección a PNG. Esto te da más control sobre qué páginas exportas.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Deberías Guardar como PNG o JPG en Mac?</h2>
              <p className="text-slate-600 mb-4">
                Vista Previa de Mac te permite exportar tanto como PNG como JPG. La elección depende de tu contenido. PNG es mejor para texto, gráficos y cualquier cosa con bordes nítidos. JPG es mejor para PDFs con muchas fotos donde el tamaño del archivo importa. Para un desglose detallado, ve nuestra <Link href="/es/aprender/pdf-a-jpg-vs-png" className="text-[#14D8C4] hover:underline">guía de comparación JPG vs PNG</Link>.
              </p>
              <p className="text-slate-600">
                Si decides que JPG es mejor para ti, usa nuestra herramienta <Link href="/es/pdf-a-jpg" className="text-[#14D8C4] hover:underline">PDF a JPG</Link> para conversión rápida de múltiples páginas.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Convierte Todas las Páginas PDF a PNG — Rápido</h2>
            <p className="text-slate-300 mb-6">Sin más exportar una página a la vez. Sube tu PDF y obtén cada página como un PNG nítido en segundos.</p>
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
                { title: "Cómo Convertir PDF a PNG Online (Texto Nítido + Gráficos Limpios)", href: "/es/aprender/convertir-pdf-a-png" },
                { title: "PDF a JPG vs PNG: ¿Cuál Debes Usar? (Calidad vs Tamaño)", href: "/es/aprender/pdf-a-jpg-vs-png" },
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
                { q: "¿Puedo guardar un PDF como PNG usando Vista Previa de Mac?", a: "Sí. Abre el PDF en Vista Previa, ve a Archivo > Exportar, elige PNG del menú de formato y establece tu resolución. Sin embargo, Vista Previa solo exporta una página a la vez, lo cual es lento para PDFs de múltiples páginas." },
                { q: "¿Cómo convierto todas las páginas de un PDF a PNG en Mac?", a: "Vista Previa de Mac solo exporta una página a la vez. Para PDFs de múltiples páginas, usa el convertidor online de PDF.it — sube tu PDF y todas las páginas se convierten a PNG a la vez, descargables como archivo ZIP." },
                { q: "¿Qué resolución debo usar al exportar PDF a PNG en Mac?", a: "Para uso web, 150 DPI es suficiente. Para presentaciones e impresión, usa 300 DPI. La exportación predeterminada de Vista Previa de Mac es 72 DPI lo cual puede verse borroso — auméntalo para resultados más nítidos." },
                { q: "¿Hay una forma gratuita de convertir PDF a PNG por lotes en Mac?", a: "Puedes usar Automator de macOS para crear un flujo de trabajo, pero requiere algo de configuración. La opción gratuita más fácil es la herramienta online de PDF.it." },
                { q: "¿Por qué mi PDF se ve borroso al guardarlo como PNG en Mac?", a: "Esto generalmente sucede porque la resolución de exportación es muy baja. Vista Previa de Mac usa 72 DPI por defecto. Aumenta la resolución a 150 DPI (web) o 300 DPI (impresión) para resultados nítidos." },
                { q: "¿Puedo convertir un PDF a PNG en Mac sin instalar software?", a: "Sí. Vista Previa viene integrada en macOS y maneja exportaciones básicas de una página. Para conversiones de múltiples páginas o por lotes sin instalar nada, usa PDF.it en tu navegador." },
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

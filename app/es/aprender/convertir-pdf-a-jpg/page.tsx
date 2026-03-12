import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { ImageIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Cómo Convertir PDF a JPG en Línea (Rápido y Alta Calidad) | OmnisPDF",
  description:
    "Aprende cómo convertir PDF a JPG en línea en segundos. Guía paso a paso con configuración de calidad, conversión por lotes y cuándo usar JPG vs PNG — gratis, sin software.",
  keywords: "convertir pdf a jpg en línea, pdf a jpg, pdf a imagen, convertir pdf a imagen, pdf a jpeg",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cómo convierto un PDF a JPG gratis?", "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a la herramienta PDF a JPG de OmnisPDF, elige la configuración de calidad, haz clic en Convertir y descarga tus imágenes JPG. No se requiere registro para tus primeros 3 archivos." } },
    { "@type": "Question", "name": "¿Convertir PDF a JPG pierde calidad?", "acceptedAnswer": { "@type": "Answer", "text": "JPG usa compresión con pérdida, así que siempre hay algo de pérdida de calidad comparado con el PDF original. Sin embargo, con configuraciones de alta calidad (200-300 DPI), la diferencia es apenas notable para la mayoría de usos como presentaciones, redes sociales o páginas web." } },
    { "@type": "Question", "name": "¿Qué DPI debo usar para PDF a JPG?", "acceptedAnswer": { "@type": "Answer", "text": "Para visualización en pantalla y uso web, 150 DPI es suficiente. Para presentaciones y documentos, 200 DPI funciona bien. Para impresión o cuando necesitas máximo detalle, usa 300 DPI. Mayor DPI significa archivos más grandes." } },
    { "@type": "Question", "name": "¿Puedo convertir un PDF de varias páginas a JPG?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Cuando conviertes un PDF de varias páginas, cada página se convierte en una imagen JPG separada. OmnisPDF convierte todas las páginas a la vez y te permite descargarlas individualmente o como archivo ZIP." } },
    { "@type": "Question", "name": "¿Debo convertir a JPG o PNG?", "acceptedAnswer": { "@type": "Answer", "text": "Usa JPG para fotos, documentos escaneados y cuando el tamaño del archivo importa. Usa PNG para páginas con mucho texto, diagramas, capturas de pantalla o cuando necesitas transparencia. Los archivos PNG son más grandes pero sin pérdida de calidad." } },
    { "@type": "Question", "name": "¿Puedo convertir PDF a JPG en mi teléfono?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. OmnisPDF funciona en cualquier navegador móvil incluyendo Safari en iPhone y Chrome en Android. Sube tu PDF, conviértelo y guarda las imágenes JPG directamente en tu teléfono. No necesitas ninguna app." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Convertir PDF a JPG en Línea",
  "description": "Convierte las páginas de tu PDF a imágenes JPG de alta calidad en 3 simples pasos usando OmnisPDF.",
  "step": [
    { "@type": "HowToStep", "name": "Sube tu PDF", "text": "Ve a la herramienta PDF a JPG de OmnisPDF y sube tu archivo haciendo clic o arrastrándolo al área de carga." },
    { "@type": "HowToStep", "name": "Elige la configuración de calidad", "text": "Selecciona tu DPI preferido (150 para web, 200 para presentaciones, 300 para impresión) y elige qué páginas convertir." },
    { "@type": "HowToStep", "name": "Descarga tus imágenes JPG", "text": "Haz clic en Convertir y descarga tus archivos JPG. Cada página del PDF se convierte en una imagen JPG separada. Descárgalas individualmente o como archivo ZIP." }
  ]
}

export default function ConvertirPdfAJpgPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF a JPG</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Cómo Convertir PDF a JPG en Línea (Rápido y Alta Calidad)</h1>
              <p className="text-xl text-slate-300">
                ¿Necesitas convertir un PDF a imágenes? Ya sea para una presentación, redes sociales o un sitio web, aquí te explicamos cómo convertir PDF a JPG en segundos — sin software que instalar.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <ImageIcon className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">¿Listo para convertir? Salta la guía y ve directo a la herramienta.</p>
            </div>
            <Link href="/es/pdf-a-jpg" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Convertir PDF a JPG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Qué Convertir PDF a JPG?</h2>
              <p className="text-slate-600 mb-4">Los PDFs son excelentes para documentos, pero no siempre son el formato adecuado. Hay varias razones comunes por las que podrías necesitar un JPG:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Presentaciones.</strong> No puedes arrastrar un PDF a PowerPoint o Google Slides — pero sí puedes insertar un JPG. Convertir páginas a imágenes te permite usar contenido PDF en cualquier presentación.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Redes sociales y sitios web.</strong> Plataformas como Instagram, Facebook y la mayoría de constructores de sitios web no admiten cargas de PDF. JPG es universalmente aceptado.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Previsualizaciones rápidas.</strong> A veces necesitas una miniatura o imagen de previsualización de un documento — un JPG de la primera página funciona perfectamente.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Apps de mensajería.</strong> Compartir un JPG en WhatsApp, Slack o Teams muestra una previsualización en línea. Los PDFs generalmente requieren que el destinatario descargue y abra un archivo separado.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Convertir PDF a JPG (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Sube tu PDF", desc: "Ve a la herramienta PDF a JPG y arrastra tu archivo al área de carga, o haz clic para buscar. Archivos hasta 25MB son gratis — los usuarios Pro pueden subir hasta 200MB y convertir múltiples archivos a la vez." },
                  { title: "Elige la configuración de calidad", desc: "Selecciona el DPI (puntos por pulgada) para tus imágenes de salida. Usa 150 DPI para web y email, 200 DPI para presentaciones, o 300 DPI para impresión. Mayor DPI significa imágenes más nítidas pero archivos más grandes." },
                  { title: "Descarga tus imágenes JPG", desc: "Haz clic en Convertir. Cada página de tu PDF se convierte en un archivo JPG separado. Descarga páginas individuales o todas como archivo ZIP. La conversión toma solo unos segundos." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Qué Configuración de DPI Deberías Usar?</h2>
              <p className="text-slate-600 mb-4">DPI (puntos por pulgada) controla qué tan nítidas serán tus imágenes JPG. Aquí una guía rápida:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead><tr className="bg-slate-900 text-white"><th className="text-left py-3 px-4 font-bold">DPI</th><th className="text-left py-3 px-4 font-bold">Mejor Para</th><th className="text-left py-3 px-4 font-bold">Tamaño del Archivo</th></tr></thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-orange-600">72 DPI</td><td className="py-3 px-4">Miniaturas rápidas, previsualizaciones web</td><td className="py-3 px-4">Pequeño (~100-300KB)</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold text-orange-600">150 DPI</td><td className="py-3 px-4">Email, uso web, redes sociales</td><td className="py-3 px-4">Mediano (~300-800KB)</td></tr>
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-orange-600">200 DPI</td><td className="py-3 px-4">Presentaciones, documentos, visualización clara</td><td className="py-3 px-4">Grande (~500KB-1.5MB)</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold text-orange-600">300 DPI</td><td className="py-3 px-4">Impresión, archivado, máxima calidad</td><td className="py-3 px-4">Muy grande (~1-3MB por página)</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">JPG vs PNG: ¿Qué Formato Elegir?</h2>
              <p className="text-slate-600 mb-4">Tanto JPG como PNG son formatos de imagen, pero funcionan de manera diferente. Elegir el correcto depende de lo que contenga tu PDF:</p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Elige JPG Cuando:</h3>
                  <ul className="space-y-1 text-slate-600">
                    <li>- Tu PDF contiene fotos, páginas escaneadas o imágenes complejas</li>
                    <li>- El tamaño del archivo importa (los JPGs son 2-5x más pequeños que los PNGs)</li>
                    <li>- Estás compartiendo en redes sociales o apps de mensajería</li>
                    <li>- Una pérdida menor de calidad es aceptable</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Elige PNG Cuando:</h3>
                  <ul className="space-y-1 text-slate-600">
                    <li>- Tu PDF tiene texto nítido, diagramas o arte lineal</li>
                    <li>- Necesitas precisión pixel a pixel (sin artefactos de compresión)</li>
                    <li>- Necesitas transparencia (PNG la soporta, JPG no)</li>
                    <li>- Estás creando capturas de pantalla o documentación</li>
                  </ul>
                  <p className="text-slate-600 mt-2">¿Necesitas PNG? Usa nuestra herramienta <Link href="/es/pdf-a-png" className="text-orange-600 hover:underline">PDF a PNG</Link> para conversión sin pérdida.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Conversión por Lotes: Múltiples PDFs a la Vez</h2>
              <p className="text-slate-600 mb-4">Si tienes varios PDFs para convertir, hacerlos uno a uno es tedioso. Los usuarios Pro de OmnisPDF pueden subir múltiples PDFs y convertirlos todos a JPG en un solo lote:</p>
              <ul className="space-y-2 text-slate-700">
                <li>- Selecciona múltiples archivos PDF a la vez (o arrastra una carpeta completa)</li>
                <li>- Cada PDF se convierte a imágenes JPG con tu configuración elegida</li>
                <li>- Descarga todos los resultados como un solo archivo ZIP</li>
                <li>- Rastrea el progreso de cada archivo individualmente</li>
              </ul>
              <p className="text-slate-600 mt-4">Los usuarios gratuitos pueden convertir un archivo a la vez. Si conviertes PDFs regularmente, <Link href="/es/precios" className="text-orange-600 hover:underline">actualizar a Pro</Link> ahorra tiempo significativo.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos Pro para Mejor Calidad JPG</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Comprime Antes de Convertir</h3>
                  <p className="text-slate-600">Si tu PDF es muy grande, <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">comprímelo primero</Link> para eliminar datos innecesarios. Esto puede acelerar el proceso de conversión sin afectar la calidad final del JPG.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Divide Primero, Convierte Después</h3>
                  <p className="text-slate-600">Si solo necesitas unas pocas páginas como JPG, no conviertas todo el PDF. Usa <Link href="/es/dividir-pdf" className="text-orange-600 hover:underline">Dividir PDF</Link> para extraer solo las páginas que necesitas, luego conviértelas a JPG. Más rápido y menos desorden.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Vigila el Tamaño del Archivo</h3>
                  <p className="text-slate-600">Un JPG a 300 DPI de una página PDF a todo color puede pesar 2-3MB. Si estás adjuntando imágenes a un email o subiendo a una plataforma con límites de tamaño, 150 DPI generalmente es suficiente.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">¿Listo para Convertir Tu PDF a JPG?</h2>
            <p className="text-slate-300 mb-6">Sube tu archivo y obtén imágenes JPG de alta calidad en segundos — gratis, sin registro.</p>
            <Link href="/es/pdf-a-jpg" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
              <ImageIcon className="h-5 w-5" /> Convertir PDF a JPG
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Cómo Guardar una Página de PDF como JPG (Windows, Mac, Móvil)", href: "/es/aprender/guardar-pagina-pdf-como-jpg" },
                { title: "Convertir PDF a JPG para PowerPoint (Mejores Configuraciones + Consejos)", href: "/es/aprender/pdf-a-jpg-para-powerpoint" },
                { title: "Por Qué Tu PDF a JPG Se Ve Borroso (Y Cómo Solucionarlo)", href: "/es/aprender/por-que-pdf-a-jpg-se-ve-borroso" },
                { title: "Convertir PDF a JPG en iPhone (Sin Apps)", href: "/es/aprender/pdf-a-jpg-en-iphone" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group">
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "¿Cómo convierto un PDF a JPG gratis?", a: "Sube tu PDF a la herramienta PDF a JPG de OmnisPDF, elige la configuración de calidad, haz clic en Convertir y descarga tus imágenes JPG. No se requiere registro para tus primeros 3 archivos." },
                { q: "¿Convertir PDF a JPG pierde calidad?", a: "JPG usa compresión con pérdida, así que siempre hay algo de pérdida de calidad comparado con el PDF original. Sin embargo, con configuraciones de alta calidad (200-300 DPI), la diferencia es apenas notable para la mayoría de usos." },
                { q: "¿Qué DPI debo usar para PDF a JPG?", a: "Para visualización en pantalla y uso web, 150 DPI es suficiente. Para presentaciones y documentos, 200 DPI funciona bien. Para impresión o cuando necesitas máximo detalle, usa 300 DPI." },
                { q: "¿Puedo convertir un PDF de varias páginas a JPG?", a: "Sí. Cuando conviertes un PDF de varias páginas, cada página se convierte en una imagen JPG separada. OmnisPDF convierte todas las páginas a la vez y te permite descargarlas individualmente o como archivo ZIP." },
                { q: "¿Debo convertir a JPG o PNG?", a: "Usa JPG para fotos, documentos escaneados y cuando el tamaño del archivo importa. Usa PNG para páginas con mucho texto, diagramas, capturas de pantalla o cuando necesitas transparencia." },
                { q: "¿Puedo convertir PDF a JPG en mi teléfono?", a: "Sí. OmnisPDF funciona en cualquier navegador móvil incluyendo Safari en iPhone y Chrome en Android. Sube tu PDF, conviértelo y guarda las imágenes JPG directamente en tu teléfono. No necesitas ninguna app." },
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

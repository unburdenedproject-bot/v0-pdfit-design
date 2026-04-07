import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { ImageIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Cómo Guardar Una Página PDF como JPG (Windows, Mac, Móvil) | PDF.it",
  description:
    "Aprende cómo extraer y guardar una sola página PDF como imagen JPG en cualquier dispositivo. Guía paso a paso para Windows, Mac, iPhone y Android — sin software necesario.",
  keywords: "guardar página pdf como jpg, extraer página pdf como imagen, pdf una página a jpg, guardar una página de pdf como imagen",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo guardo solo una página de un PDF como JPG?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a la herramienta PDF a JPG de PDF.it, selecciona la página específica que deseas y convierte solo esa página. Descarga la imagen JPG individual — no necesitas convertir todo el documento." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo guardar una página PDF como JPG en mi teléfono?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Abre PDF.it en el navegador de tu teléfono (Safari o Chrome), sube tu PDF, selecciona la página que necesitas y descarga el JPG. Se guarda directamente en la biblioteca de fotos de tu teléfono." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo guardo una página PDF como JPG en Windows?",
      "acceptedAnswer": { "@type": "Answer", "text": "La forma más rápida es usar una herramienta en línea como PDF.it — no necesitas instalar software. Alternativamente, puedes tomar una captura de pantalla con la Herramienta de Recorte, pero esto da menor calidad que una conversión adecuada a 200-300 DPI." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo guardo una página PDF como JPG en Mac?",
      "acceptedAnswer": { "@type": "Answer", "text": "En Mac, puedes abrir el PDF en Vista Previa y exportar como JPEG (Archivo > Exportar). Sin embargo, esto solo funciona para páginas individuales y las opciones de calidad son limitadas. PDF.it te da más control sobre DPI y calidad." }
    },
    {
      "@type": "Question",
      "name": "¿Qué calidad debo usar al guardar una página PDF como JPG?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para la mayoría de usos (correo, redes sociales, mensajería), 150 DPI es suficiente. Para insertar en documentos o presentaciones, usa 200 DPI. Para impresión, usa 300 DPI. Mayor DPI significa imágenes más nítidas pero archivos más grandes." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo guardar múltiples páginas específicas como JPGs separados?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes seleccionar múltiples páginas individuales (por ejemplo, páginas 1, 3 y 7) y convertir solo esas a JPGs. Cada página seleccionada se convierte en su propio archivo JPG que puedes descargar por separado." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Guardar una Página PDF como JPG",
  "description": "Extrae y guarda una sola página PDF como imagen JPG de alta calidad en 3 pasos.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube tu PDF",
      "text": "Ve a la herramienta PDF a JPG de PDF.it y sube el PDF que contiene la página que quieres guardar como imagen."
    },
    {
      "@type": "HowToStep",
      "name": "Selecciona la página a guardar",
      "text": "Elige la página específica que quieres convertir a JPG. Puedes seleccionar una o múltiples páginas individuales."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga el JPG",
      "text": "Haz clic en Convertir y descarga tu imagen JPG. La página se guarda como un archivo de imagen de alta calidad que puedes compartir, insertar en documentos o publicar en línea."
    }
  ]
}

export default function GuardarPaginaPdfComoJpgPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Cómo Guardar Una Página PDF como JPG (Windows, Mac, Móvil)</h1>
              <p className="text-xl text-slate-300">
                No necesitas todo el PDF — solo una página como imagen. Aquí te mostramos cómo extraer y guardar una sola página como JPG en cualquier dispositivo, en menos de un minuto.
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
              <p className="text-slate-700 font-semibold">¿Necesitas guardar una página como JPG ahora? Usa la herramienta directamente.</p>
            </div>
            <Link
              href="/es/pdf-a-jpg"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Herramienta PDF a JPG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* When you need this */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Cuándo Necesitarías Guardar una Página PDF como JPG?</h2>
              <p className="text-slate-600 mb-4">
                Esto sucede más a menudo de lo que piensas. Algunas de las situaciones más comunes:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Guardar un recibo o factura.</strong> Recibiste un PDF de varias páginas pero solo necesitas la página 1 (el recibo) como imagen para tu informe de gastos o registros.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Capturar un gráfico o tabla.</strong> Un informe tiene un gráfico en la página 4 que quieres incluir en una presentación o correo — guardar esa página como JPG es la forma más rápida.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Guardar un certificado o diploma.</strong> Quieres compartir tu certificado en LinkedIn o guardarlo en tus fotos — un JPG es más fácil de compartir que un archivo PDF.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Crear una imagen de vista previa.</strong> Necesitas la primera página de un documento como miniatura o vista previa para un sitio web, correo o listado de documentos.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">El Método Más Rápido: Usa una Herramienta en Línea</h2>
              <p className="text-slate-600 mb-4">
                La forma más rápida de guardar una página PDF como JPG — en cualquier dispositivo — es usar un convertidor en línea. Sin software que instalar, funciona en Windows, Mac, iPhone y Android:
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Sube tu PDF",
                    desc: "Ve a la herramienta PDF a JPG y sube tu PDF. Funciona en cualquier navegador — Chrome, Safari, Firefox, Edge.",
                  },
                  {
                    title: "Selecciona la página específica",
                    desc: "Elige qué página(s) quieres guardar como JPGs. Puedes seleccionar páginas individuales como 1, 3 y 5 — no tienes que convertir todo el documento.",
                  },
                  {
                    title: "Descarga el JPG",
                    desc: "Haz clic en Convertir. Tu página seleccionada se guarda como una imagen JPG de alta calidad. Haz clic derecho para guardarla, o se descarga automáticamente dependiendo de tu navegador.",
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

            {/* Platform specific */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Métodos Específicos por Plataforma</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Windows</h3>
                  <p className="text-slate-600 mb-2">
                    <strong>Opción 1 (Recomendada):</strong> Usa la <Link href="/es/pdf-a-jpg" className="text-[#14D8C4] hover:underline">herramienta en línea de PDF.it</Link> en tu navegador — sin instalación necesaria y obtienes salida de alto DPI.
                  </p>
                  <p className="text-slate-600 mb-2">
                    <strong>Opción 2:</strong> Usa la Herramienta de Recorte (Win + Shift + S) para hacer una captura de pantalla de la página. Es rápido pero te da calidad de resolución de pantalla, que puede verse borrosa si haces zoom o imprimes.
                  </p>
                  <p className="text-slate-600">
                    <strong>Opción 3:</strong> Abre el PDF en Adobe Acrobat y usa Archivo &gt; Exportar &gt; Imagen &gt; JPEG. Funciona pero requiere Acrobat (no el Reader gratuito).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Mac</h3>
                  <p className="text-slate-600 mb-2">
                    <strong>Opción 1:</strong> Abre en Vista Previa, ve a la página que deseas, luego Archivo &gt; Exportar y selecciona JPEG. Ajusta el deslizador de calidad y haz clic en Guardar. Funciona para páginas individuales.
                  </p>
                  <p className="text-slate-600">
                    <strong>Opción 2:</strong> Usa <Link href="/es/pdf-a-jpg" className="text-[#14D8C4] hover:underline">PDF.it en línea</Link> para más control sobre DPI y para manejar múltiples páginas a la vez.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">iPhone y iPad</h3>
                  <p className="text-slate-600">
                    iOS no tiene una forma nativa de convertir páginas PDF a JPG. El método más fácil es abrir PDF.it en Safari, subir tu PDF, seleccionar la página y guardar el JPG resultante en tu app de Fotos. No se necesita descargar ninguna app. Consulta nuestra guía detallada: <Link href="/es/aprender/pdf-a-jpg-en-iphone" className="text-[#14D8C4] hover:underline">Convertir PDF a JPG en iPhone</Link>.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Android</h3>
                  <p className="text-slate-600">
                    Similar al iPhone — abre PDF.it en Chrome, sube tu PDF y descarga el JPG convertido. También puedes tomar una captura de pantalla de la página, pero la calidad estará limitada a la resolución de tu pantalla.
                  </p>
                </div>
              </div>
            </section>

            {/* Why not screenshot */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Qué una Captura de Pantalla No Es Suficiente</h2>
              <p className="text-slate-600 mb-4">
                Tomar una captura de pantalla de una página PDF es tentador porque es rápido. Pero hay desventajas reales:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>- <strong>Baja resolución.</strong> Las capturas de pantalla están limitadas a la resolución de tu pantalla (generalmente 72-144 DPI). Una conversión adecuada te da 200-300 DPI — mucho más nítido.</li>
                <li>- <strong>Problemas de recorte.</strong> Tienes que enmarcar manualmente la página, y a menudo incluirás barras de herramientas, barras de desplazamiento o márgenes desiguales en la imagen.</li>
                <li>- <strong>Sin capacidad por lotes.</strong> Si necesitas múltiples páginas, tendrías que hacer captura de pantalla de cada una individualmente.</li>
                <li>- <strong>Tamaño inconsistente.</strong> Cada captura de pantalla podría tener un tamaño ligeramente diferente, lo cual se ve poco profesional en presentaciones.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Una conversión adecuada de PDF a JPG evita todos estos problemas y produce imágenes limpias y correctamente dimensionadas.
              </p>
            </section>

            {/* Split first tip */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Alternativa: Divide el PDF Primero, Luego Convierte</h2>
              <p className="text-slate-600 mb-4">
                Si necesitas tanto un PDF como un JPG de una página específica, puedes usar un enfoque de dos pasos:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>1. Usa <Link href="/es/dividir-pdf" className="text-[#14D8C4] hover:underline">Dividir PDF</Link> para extraer la página como su propio PDF de una sola página.</li>
                <li>2. Luego convierte ese PDF de una página a JPG usando <Link href="/es/pdf-a-jpg" className="text-[#14D8C4] hover:underline">PDF a JPG</Link>.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                De esta forma conservas la página PDF en calidad original y también tienes una versión JPG para compartir.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Guarda Tu Página PDF como JPG</h2>
            <p className="text-slate-300 mb-6">Sube tu PDF, elige la página y descarga un JPG de alta calidad en segundos.</p>
            <Link
              href="/es/pdf-a-jpg"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <ImageIcon className="h-5 w-5" /> Herramienta PDF a JPG
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
                { title: "Convertir PDF a JPG para PowerPoint (Mejores Ajustes + Consejos)", href: "/es/aprender/pdf-a-jpg-para-powerpoint" },
                { title: "Por Qué Tu PDF a JPG Se Ve Borroso (Y Cómo Solucionarlo)", href: "/es/aprender/por-que-pdf-a-jpg-se-ve-borroso" },
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
                { q: "¿Cómo guardo solo una página de un PDF como JPG?", a: "Sube tu PDF a la herramienta PDF a JPG de PDF.it, selecciona la página específica que deseas y convierte solo esa página. Descarga la imagen JPG individual — no necesitas convertir todo el documento." },
                { q: "¿Puedo guardar una página PDF como JPG en mi teléfono?", a: "Sí. Abre PDF.it en el navegador de tu teléfono (Safari o Chrome), sube tu PDF, selecciona la página que necesitas y descarga el JPG. Se guarda directamente en la biblioteca de fotos de tu teléfono." },
                { q: "¿Cómo guardo una página PDF como JPG en Windows?", a: "La forma más rápida es usar una herramienta en línea como PDF.it — no necesitas instalar software. Alternativamente, puedes tomar una captura de pantalla con la Herramienta de Recorte, pero da menor calidad que una conversión a 200-300 DPI." },
                { q: "¿Cómo guardo una página PDF como JPG en Mac?", a: "En Mac, puedes abrir el PDF en Vista Previa y exportar como JPEG (Archivo > Exportar). Sin embargo, solo funciona para páginas individuales y las opciones de calidad son limitadas. PDF.it te da más control sobre DPI y calidad." },
                { q: "¿Qué calidad debo usar al guardar una página PDF como JPG?", a: "Para la mayoría de usos (correo, redes sociales, mensajería), 150 DPI es suficiente. Para insertar en documentos o presentaciones, usa 200 DPI. Para impresión, usa 300 DPI. Mayor DPI significa imágenes más nítidas pero archivos más grandes." },
                { q: "¿Puedo guardar múltiples páginas específicas como JPGs separados?", a: "Sí. Puedes seleccionar múltiples páginas individuales (por ejemplo, páginas 1, 3 y 7) y convertir solo esas a JPGs. Cada página seleccionada se convierte en su propio archivo JPG que puedes descargar por separado." },
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

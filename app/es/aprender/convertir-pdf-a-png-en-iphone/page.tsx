import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Image, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convertir PDF a PNG en iPhone (Rápido, Exportación de Alta Calidad) | PDF.it",
  description:
    "Aprende cómo convertir un PDF a imágenes PNG en tu iPhone usando Safari y PDF.it. Sin app necesaria — solo abre, convierte y guarda en tu biblioteca de Fotos en segundos.",
  keywords: "convertir pdf a png iphone, pdf a png en iphone, guardar pdf como imagen iphone, pdf a foto iphone, exportar pdf a png ios",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Puedo convertir un PDF a PNG en iPhone sin una app?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Abre Safari en tu iPhone, ve a la herramienta PDF a PNG de PDF.it, sube tu PDF, conviértelo y descarga las imágenes PNG directamente. No necesitas instalar ninguna app — funciona completamente en tu navegador." }
    },
    {
      "@type": "Question",
      "name": "¿Dónde se guardan los archivos PNG convertidos en iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los archivos PNG descargados van a tu app Archivos por defecto (en la carpeta Descargas). También puedes guardarlos directamente en tu app Fotos tocando el icono de compartir y eligiendo 'Guardar Imagen'." }
    },
    {
      "@type": "Question",
      "name": "¿Hay un convertidor gratuito de PDF a PNG para iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it es gratis para tus primeras 3 conversiones por día sin registro. Después, crea una cuenta gratuita para 10 conversiones por día. La herramienta funciona en Safari — sin necesidad de comprar ninguna app." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo convertir múltiples páginas PDF a PNG en iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it convierte cada página de tu PDF en una imagen PNG separada. Puedes descargarlas individualmente o como archivo ZIP. Para conversión por lotes de múltiples archivos, actualiza a Pro." }
    },
    {
      "@type": "Question",
      "name": "¿La calidad del PNG será buena en iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it produce imágenes PNG de alta resolución con texto nítido y gráficos limpios. PNG usa compresión sin pérdida, así que no hay pérdida de calidad durante la conversión. El resultado se ve excelente en la pantalla Retina del iPhone." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo comparto un PDF como imagen en iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Convierte tu PDF a PNG usando PDF.it en Safari, guarda las imágenes en tu app Fotos, luego compártelas por iMessage, WhatsApp, correo electrónico o cualquier otra app. Las imágenes PNG son universalmente compatibles." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Convertir PDF a PNG en iPhone",
  "description": "Convierte tu PDF en imágenes PNG en iPhone en 3 simples pasos.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Abre PDF.it en Safari",
      "text": "Abre Safari en tu iPhone y ve a pdf.it.com/pdf-to-png. Toca el área de carga para seleccionar tu PDF desde Archivos, iCloud o adjuntos de correo."
    },
    {
      "@type": "HowToStep",
      "name": "Convierte tu PDF",
      "text": "Toca Convertir. Cada página de tu PDF se convierte en una imagen PNG de alta calidad. Espera unos segundos para que se complete el procesamiento."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga y guarda",
      "text": "Toca Descargar para guardar los archivos PNG. Van a tu app Archivos por defecto. Para guardar en Fotos, toca el icono de compartir y elige Guardar Imagen."
    }
  ]
}

export default function ConvertirPdfAPngEnIphonePage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PDF a PNG en iPhone (Rápido, Exportación de Alta Calidad)</h1>
              <p className="text-xl text-slate-300">
                ¿Necesitas convertir un PDF en imágenes en tu iPhone? No necesitas ninguna app. Solo abre tu navegador, convierte y guarda imágenes PNG nítidas directamente en tu teléfono.
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
              <p className="text-slate-700 font-semibold">¿Estás en tu iPhone ahora? Abre esta herramienta en Safari para convertir.</p>
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Qué Convertir PDF a PNG en iPhone?</h2>
              <p className="text-slate-600 mb-4">
                Hay muchas situaciones donde necesitas un PDF como imagen en tu teléfono:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Compartir en apps de mensajería.</strong> WhatsApp, iMessage e Instagram no manejan bien los PDFs. Una imagen PNG es universalmente visible — el receptor la ve instantáneamente sin abrir un visor separado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Publicar en redes sociales.</strong> Instagram, Twitter y Facebook aceptan imágenes pero no PDFs. Convertir a PNG te permite compartir contenido de documentos como publicación o historia.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Referencia rápida.</strong> Guardar una página como imagen en tu app Fotos hace más fácil encontrarla después — sin buscar en la app Archivos buscando documentos PDF.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Presentaciones e informes.</strong> Si necesitas incluir una página PDF en una presentación de Keynote o correo, una imagen PNG se inserta limpiamente sin problemas de formato.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Convertir PDF a PNG en iPhone (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Abre PDF.it en Safari",
                    desc: "En tu iPhone, abre Safari y ve a pdf.it.com/pdf-to-png. La herramienta funciona directamente en tu navegador — no hay nada que descargar o instalar.",
                  },
                  {
                    title: "Sube tu PDF",
                    desc: "Toca el área de carga. Verás opciones para elegir desde tu app Archivos, iCloud Drive o descargas recientes. También puedes subir un PDF que recibiste por correo o AirDrop. Archivos hasta 25MB son gratis.",
                  },
                  {
                    title: "Convierte y descarga",
                    desc: "Toca Convertir. En unos segundos, tus páginas PDF se convierten en imágenes PNG de alta calidad. Toca Descargar para guardarlas. Por defecto, los archivos van a la carpeta Descargas en tu app Archivos.",
                  },
                  {
                    title: "Guarda en Fotos (opcional)",
                    desc: "Para guardar un PNG en tu Camera Roll, abre el archivo en Archivos, toca el icono de compartir (cuadrado con flecha) y elige 'Guardar Imagen'. El PNG ahora está en tu biblioteca de Fotos, listo para compartir.",
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿PNG o JPG: Cuál Usar en iPhone?</h2>
              <p className="text-slate-600 mb-4">
                iPhone soporta ambos formatos, pero sirven para propósitos diferentes:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Elige PNG Cuando...</th>
                      <th className="text-left py-3 px-4 font-bold">Elige JPG Cuando...</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">Tu PDF tiene texto o gráficos</td>
                      <td className="py-3 px-4">Tu PDF es mayormente fotos</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4">Quieres la calidad más nítida</td>
                      <td className="py-3 px-4">Quieres el menor tamaño de archivo</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">Usarás imágenes en apps de diseño</td>
                      <td className="py-3 px-4">Enviarás por apps de mensajería</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-500 text-sm mt-3">
                Para una comparación detallada, lee nuestra guía sobre <Link href="/es/aprender/pdf-a-jpg-vs-png" className="text-[#14D8C4] hover:underline">PDF a JPG vs PNG</Link>. Si necesitas JPG, usa nuestra herramienta <Link href="/es/pdf-a-jpg" className="text-[#14D8C4] hover:underline">PDF a JPG</Link>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para Mejores Resultados en iPhone</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Usa Safari para la experiencia más fluida</h3>
                  <p className="text-slate-600">
                    Aunque PDF.it funciona en Chrome y otros navegadores iOS, Safari maneja las cargas y descargas de archivos de forma más fluida en iPhone. El selector de archivos se integra directamente con iCloud y la app Archivos.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Verifica tu almacenamiento antes de convertir PDFs grandes</h3>
                  <p className="text-slate-600">
                    Los archivos PNG son más grandes que los JPGs. Un PDF de 20 páginas a alta resolución podría producir 30-50MB de imágenes PNG. Asegúrate de tener suficiente espacio libre en tu iPhone, o descarga el ZIP y transfiérelo a iCloud.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Comprime el PDF primero si es muy grande</h3>
                  <p className="text-slate-600">
                    Si tu PDF es muy grande y quieres PNGs más pequeños, <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">comprime el PDF</Link> antes de convertir. Esto reduce los datos de imagen incrustados, lo que significa archivos PNG de salida más pequeños.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convierte solo páginas específicas</h3>
                  <p className="text-slate-600">
                    Si solo necesitas unas pocas páginas, no hay necesidad de convertir todo el PDF. Puedes <Link href="/es/dividir-pdf" className="text-[#14D8C4] hover:underline">dividir el PDF</Link> primero para extraer solo las páginas que necesitas, luego convertirlas a PNG.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Compartir Tus Imágenes PNG desde iPhone</h2>
              <p className="text-slate-600 mb-4">
                Una vez que tus páginas PDF están guardadas como PNGs, compartirlas es sencillo:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>- <strong>iMessage / WhatsApp:</strong> Abre la conversación, toca el icono de adjunto y selecciona el PNG desde Fotos o Archivos.</li>
                <li>- <strong>Correo electrónico:</strong> Redacta un nuevo mensaje, toca el icono de adjunto y agrega el PNG. Aparece como imagen en línea.</li>
                <li>- <strong>Redes sociales:</strong> Abre Instagram, Twitter o Facebook, crea una nueva publicación y selecciona el PNG de tu biblioteca de Fotos.</li>
                <li>- <strong>AirDrop:</strong> Abre el PNG en Archivos o Fotos, toca Compartir y envíalo por AirDrop a un Mac o iPhone cercano.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Convierte Tu PDF a PNG Directamente en Tu iPhone</h2>
            <p className="text-slate-300 mb-6">Sin app que instalar. Abre en Safari, sube, convierte y guarda — toma segundos.</p>
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
                { title: "Guardar PDF como PNG en Mac (Métodos Rápidos + Mejores Resultados)", href: "/es/aprender/guardar-pdf-como-png-en-mac" },
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
                { q: "¿Puedo convertir un PDF a PNG en iPhone sin una app?", a: "Sí. Abre Safari en tu iPhone, ve a la herramienta PDF a PNG de PDF.it, sube tu PDF, conviértelo y descarga las imágenes PNG directamente. No necesitas instalar ninguna app." },
                { q: "¿Dónde se guardan los archivos PNG convertidos en iPhone?", a: "Los archivos PNG descargados van a tu app Archivos por defecto (en la carpeta Descargas). También puedes guardarlos directamente en tu app Fotos tocando el icono de compartir y eligiendo 'Guardar Imagen'." },
                { q: "¿Hay un convertidor gratuito de PDF a PNG para iPhone?", a: "Sí. PDF.it es gratis para tus primeras 3 conversiones por día sin registro. Después, crea una cuenta gratuita para 10 conversiones por día. La herramienta funciona en Safari." },
                { q: "¿Puedo convertir múltiples páginas PDF a PNG en iPhone?", a: "Sí. PDF.it convierte cada página de tu PDF en una imagen PNG separada. Puedes descargarlas individualmente o como archivo ZIP." },
                { q: "¿La calidad del PNG será buena en iPhone?", a: "Sí. PDF.it produce imágenes PNG de alta resolución con texto nítido y gráficos limpios. PNG usa compresión sin pérdida, así que no hay pérdida de calidad durante la conversión." },
                { q: "¿Cómo comparto un PDF como imagen en iPhone?", a: "Convierte tu PDF a PNG usando PDF.it en Safari, guarda las imágenes en tu app Fotos, luego compártelas por iMessage, WhatsApp, correo electrónico o cualquier otra app." },
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

import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Extraer Texto de PDF en iPhone/Android (Mejores Métodos) | PDF.it",
  description:
    "Aprende a extraer texto de un PDF en tu teléfono. Guía paso a paso para iPhone y Android — sin necesidad de aplicación. Funciona para PDFs digitales y escaneados.",
  keywords: "extraer texto de pdf en iphone, extraer texto de pdf android, pdf a texto movil, copiar texto de pdf en telefono, extraccion texto pdf movil",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Puedo extraer texto de un PDF en mi iPhone sin una aplicación?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Abre PDF.it.com en Safari, sube tu PDF a la herramienta PDF a TXT y descarga el archivo de texto plano. No necesitas instalar ninguna aplicación — funciona completamente en tu navegador." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo copio texto de un PDF en Android?",
      "acceptedAnswer": { "@type": "Answer", "text": "Abre el PDF en Google Drive o tu visor de PDF predeterminado e intenta seleccionar texto. Si no funciona bien (líneas rotas, formato extraño), usa la herramienta PDF a TXT de PDF.it en Chrome para obtener una extracción de texto limpia." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo extraer texto de un PDF escaneado en mi teléfono?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí, pero necesitas OCR. El PDF a TXT estándar no funciona en documentos escaneados. Usa el Escáner OCR de PDF.it en tu navegador móvil — sube el PDF escaneado y extraerá el texto usando reconocimiento óptico de caracteres." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la mejor app para extraer texto de PDF en iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "No necesitas una aplicación. PDF.it funciona directamente en Safari en iPhone — sube tu PDF, convierte a TXT y descarga el texto. Es más rápido que instalar una aplicación y funciona en cualquier versión de iOS." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué copiar y pegar desde un PDF en móvil me da texto roto?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los visores de PDF móviles tienen capacidades limitadas de selección de texto. A menudo rompen líneas en los finales de línea visuales, fusionan columnas e incluyen encabezados/pies de página. Convertir a TXT con PDF.it te da texto correctamente ordenado sin estos problemas." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo guardar el texto extraído directamente en mi app de Notas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Después de descargar el archivo TXT de PDF.it, ábrelo en tu teléfono y usa el botón de compartir para enviarlo a Notas (iPhone), Google Keep (Android) o cualquier otra app de notas. También puedes copiar todo el texto y pegarlo directamente." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Extraer Texto de un PDF en Móvil",
  "description": "Obtén texto limpio de cualquier PDF en iPhone o Android en 3 simples pasos.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Abre PDF.it en tu navegador móvil",
      "text": "Ve a pdf.it.com en Safari (iPhone) o Chrome (Android) y navega a la herramienta PDF a TXT."
    },
    {
      "@type": "HowToStep",
      "name": "Sube tu PDF",
      "text": "Toca el área de carga y selecciona tu PDF desde Archivos (iPhone), Google Drive o tu carpeta de Descargas. El archivo se sube directamente desde tu teléfono."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga el texto",
      "text": "Toca Convertir, luego descarga el archivo TXT. Ábrelo directamente o compártelo con tu app de notas, correo electrónico o app de mensajería."
    }
  ]
}

export default function ExtraerTextoDePdfEnMovilPage() {
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
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF a Texto</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extraer Texto de PDF en iPhone/Android (Mejores Métodos)</h1>
              <p className="text-xl text-slate-300">
                ¿Necesitas extraer texto de un PDF en tu teléfono? Aquí te explicamos cómo hacerlo sin instalar ninguna aplicación — funciona en iPhone y Android.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">¿En tu teléfono ahora mismo? Extrae texto al instante en tu navegador.</p>
            </div>
            <Link
              href="/es/pdf-a-texto"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              PDF a TXT Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why mobile is tricky */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Qué Extraer Texto de PDF en Móvil Es Más Difícil Que en Escritorio</h2>
              <p className="text-slate-600 mb-4">
                En una computadora, puedes abrir un PDF, seleccionar texto y copiarlo — aunque incluso eso a menudo rompe el formato. En un teléfono, es aún peor:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>La selección de texto es imprecisa.</strong> Seleccionar párrafos específicos con el dedo es difícil. A menudo terminas seleccionando demasiado o muy poco.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Los visores PDF móviles son limitados.</strong> Los visores de PDF predeterminados en iPhone y Android manejan bien la visualización básica, pero la selección y copia de texto son funciones secundarias.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>La selección de múltiples páginas es casi imposible.</strong> Seleccionar texto a través de múltiples páginas en un teléfono es una experiencia frustrante — la vista se desplaza de forma impredecible.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Los resultados al pegar son desordenados.</strong> Incluso cuando logras seleccionar texto, pegarlo en Notas o Mensajes produce líneas rotas y formato aleatorio.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                La solución: en lugar de luchar con copiar y pegar, usa una herramienta que extrae todo el texto limpiamente en un solo paso.
              </p>
            </section>

            {/* Method 1: PDF.it */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Método 1: Usa PDF.it en Tu Navegador Móvil (Recomendado)</h2>
              <p className="text-slate-600 mb-4">
                La forma más rápida y limpia de extraer texto de un PDF en tu teléfono. No necesitas aplicación — funciona en Safari, Chrome o cualquier navegador móvil.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Abre PDF.it en tu navegador",
                    desc: "Ve a pdf.it.com en Safari (iPhone) o Chrome (Android). Navega a la herramienta PDF a TXT desde el menú o ve directamente a pdf.it.com/pdf-to-txt.",
                  },
                  {
                    title: "Sube tu PDF",
                    desc: "Toca el área de carga. En iPhone, elige de Archivos, iCloud Drive o tus descargas recientes. En Android, busca en el almacenamiento de tu dispositivo o Google Drive. El PDF se sube directamente desde tu teléfono.",
                  },
                  {
                    title: "Descarga el texto limpio",
                    desc: "Toca Convertir, espera unos segundos, luego descarga el archivo TXT. Ábrelo para copiar el texto, o usa el botón de compartir para enviarlo directamente a Notas, Google Keep, WhatsApp o correo electrónico.",
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

            {/* Method 2: Built-in tools */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Método 2: Usa el Visor de PDF Integrado de Tu Teléfono</h2>
              <p className="text-slate-600 mb-4">
                Para selecciones rápidas y pequeñas (una oración o párrafo), las herramientas integradas de tu teléfono pueden ser suficientes:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">iPhone (App Archivos / Safari)</h3>
                  <p className="text-slate-600">
                    Abre el PDF en la app Archivos o Safari. Mantén presionada una palabra para iniciar la selección, luego arrastra los controles para expandir. Toca "Copiar" y pega en tu destino. Esto funciona para selecciones cortas pero se rompe en páginas completas o diseños de múltiples columnas.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Android (Google Drive / Visor Predeterminado)</h3>
                  <p className="text-slate-600">
                    Abre el PDF en Google Drive o tu visor predeterminado. Mantén presionado para seleccionar texto, arrastra para expandir y copia. El visor de PDF de Google Drive maneja la selección de texto mejor que la mayoría de las aplicaciones de terceros.
                  </p>
                </div>
              </div>
              <p className="text-slate-600 mt-4 text-sm">
                <strong>Limitación:</strong> Los visores integrados no pueden manejar PDFs escaneados, selección de múltiples páginas o diseños complejos. Para cualquier cosa más allá de un párrafo rápido, usa <Link href="/es/pdf-a-texto" className="text-orange-600 hover:underline">PDF a TXT</Link>.
              </p>
            </section>

            {/* Scanned PDFs on mobile */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Extraer Texto de PDFs Escaneados en Móvil</h2>
              <p className="text-slate-600 mb-4">
                Si tu PDF es un documento escaneado (fotos de páginas de papel), la extracción de texto estándar no funcionará — ni copiar y pegar ni PDF a TXT. Necesitas OCR (Reconocimiento Óptico de Caracteres).
              </p>
              <p className="text-slate-600 mb-4">
                El <Link href="/es/escaner-ocr" className="text-orange-600 hover:underline">Escáner OCR</Link> de PDF.it funciona en tu navegador móvil igual que PDF a TXT:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#x2713; Sube tu PDF escaneado desde tu teléfono</li>
                <li>&#x2713; OCR lee el texto de cada imagen de página</li>
                <li>&#x2713; Descarga el texto extraído o un PDF con búsqueda</li>
              </ul>
              <p className="text-slate-600 mt-4">
                <strong>Consejo:</strong> Si acabas de tomar una foto de un documento con la cámara de tu teléfono, usa <Link href="/es/limpiar-escaneo" className="text-orange-600 hover:underline">Limpieza de Escaneo de Teléfono</Link> primero para mejorar la calidad de imagen, luego ejecuta OCR para mayor precisión.
              </p>
            </section>

            {/* Platform comparison */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">iPhone vs Android: ¿Cuál Maneja Mejor el Texto de PDF?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Característica</th>
                      <th className="text-left py-3 px-4 font-bold">iPhone</th>
                      <th className="text-left py-3 px-4 font-bold">Android</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Visor PDF predeterminado</td>
                      <td className="py-3 px-4">App Archivos (decente)</td>
                      <td className="py-3 px-4">Google Drive (bueno)</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Calidad de selección de texto</td>
                      <td className="py-3 px-4">OK para selecciones cortas</td>
                      <td className="py-3 px-4">Ligeramente mejor con Drive</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">OCR integrado</td>
                      <td className="py-3 px-4">Live Text (iOS 15+, solo fotos)</td>
                      <td className="py-3 px-4">Google Lens (solo fotos)</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Mejor para extracción completa</td>
                      <td className="py-3 px-4 font-semibold text-orange-600">PDF.it en Safari</td>
                      <td className="py-3 px-4 font-semibold text-orange-600">PDF.it en Chrome</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4 text-sm">
                Las funciones OCR integradas de ambas plataformas (Live Text y Google Lens) funcionan con fotos pero no con archivos PDF. Para extracción de texto de PDF, una herramienta web como <Link href="/es/pdf-a-texto" className="text-orange-600 hover:underline">PDF.it</Link> es la opción más confiable en ambas plataformas.
              </p>
            </section>

            {/* Saving text to different apps */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dónde Guardar Tu Texto Extraído</h2>
              <p className="text-slate-600 mb-4">
                Una vez que hayas descargado el archivo TXT de PDF.it, así es como puedes llevarlo a tus aplicaciones favoritas:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Apple Notes</h3>
                  <p className="text-slate-600">
                    Abre el archivo TXT, toca el ícono de compartir y selecciona Notas. O abre el archivo, selecciona todo el texto, copia y pega en una nueva nota.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Google Keep / Google Docs</h3>
                  <p className="text-slate-600">
                    Comparte el archivo TXT con Google Keep para una nota rápida, o ábrelo en Google Docs para un documento completo. Ambos aceptan texto plano limpiamente.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Correo electrónico o Mensajes</h3>
                  <p className="text-slate-600">
                    Copia el texto directamente del archivo TXT y pégalo en un correo electrónico o mensaje. El texto plano se pega limpiamente en cada aplicación de mensajería sin problemas de formato.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Extrae Texto de PDF en Tu Teléfono — Ahora Mismo</h2>
            <p className="text-slate-300 mb-6">Sin aplicación que instalar. Sube tu PDF en tu navegador móvil y descarga texto limpio en segundos.</p>
            <Link
              href="/es/pdf-a-texto"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <FileText className="h-5 w-5" /> PDF a TXT Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Convertir PDF a TXT: Extrae Texto Plano en Segundos", href: "/es/aprender/convertir-pdf-a-texto" },
                { title: "Cómo Copiar Texto de un PDF a Notas o Documentos (Limpiamente)", href: "/es/aprender/copiar-texto-de-pdf-a-notas" },
                { title: "Por Qué el Texto Extraído de PDF Sale Ilegible (Y Cómo Solucionarlo)", href: "/es/aprender/pdf-texto-ilegible-solucion" },
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
                { q: "¿Puedo extraer texto de un PDF en mi iPhone sin una aplicación?", a: "Sí. Abre PDF.it.com en Safari, sube tu PDF a la herramienta PDF a TXT y descarga el archivo de texto plano. No necesitas instalar ninguna aplicación — funciona completamente en tu navegador." },
                { q: "¿Cómo copio texto de un PDF en Android?", a: "Abre el PDF en Google Drive o tu visor de PDF predeterminado e intenta seleccionar texto. Si no funciona bien (líneas rotas, formato extraño), usa la herramienta PDF a TXT de PDF.it en Chrome para obtener una extracción de texto limpia." },
                { q: "¿Puedo extraer texto de un PDF escaneado en mi teléfono?", a: "Sí, pero necesitas OCR. El PDF a TXT estándar no funciona en documentos escaneados. Usa el Escáner OCR de PDF.it en tu navegador móvil — sube el PDF escaneado y extraerá el texto usando reconocimiento óptico de caracteres." },
                { q: "¿Cuál es la mejor app para extraer texto de PDF en iPhone?", a: "No necesitas una aplicación. PDF.it funciona directamente en Safari en iPhone — sube tu PDF, convierte a TXT y descarga el texto. Es más rápido que instalar una aplicación y funciona en cualquier versión de iOS." },
                { q: "¿Por qué copiar y pegar desde un PDF en móvil me da texto roto?", a: "Los visores de PDF móviles tienen capacidades limitadas de selección de texto. A menudo rompen líneas en los finales de línea visuales, fusionan columnas e incluyen encabezados/pies de página. Convertir a TXT con PDF.it te da texto correctamente ordenado sin estos problemas." },
                { q: "¿Puedo guardar el texto extraído directamente en mi app de Notas?", a: "Sí. Después de descargar el archivo TXT de PDF.it, ábrelo en tu teléfono y usa el botón de compartir para enviarlo a Notas (iPhone), Google Keep (Android) o cualquier otra app de notas. También puedes copiar todo el texto y pegarlo directamente." },
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

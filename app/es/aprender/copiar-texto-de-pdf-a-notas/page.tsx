import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Cómo Copiar Texto de un PDF a Notas o Documentos (Limpiamente) | PDF.it",
  description:
    "Aprende por qué copiar texto de PDFs a menudo se rompe y cómo obtener texto limpio y utilizable en tus notas, Google Docs o Word. Guía paso a paso con herramientas gratuitas.",
  keywords: "copiar texto de pdf, pegar texto pdf en notas, formato texto pdf roto, copiar pdf a google docs, extraer texto de pdf limpiamente",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Por qué el texto de un PDF se pega con formato extraño?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los PDFs almacenan texto como caracteres posicionados, no como párrafos fluidos. Al copiar y pegar, tu computadora intenta reconstruir el orden de lectura pero a menudo se confunde con columnas, encabezados, pies de página y saltos de línea. El resultado es texto desordenado con saltos de línea aleatorios y palabras fusionadas." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo copio texto de un PDF sin perder el formato?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si quieres texto plano limpio, convierte el PDF a TXT usando la herramienta PDF a TXT de PDF.it — maneja el orden de lectura y elimina el formato oculto. Si necesitas texto con formato, usa PDF a Word para obtener un documento editable con el estilo intacto." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué no puedo seleccionar texto en mi PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Hay dos razones comunes: el PDF es una imagen escaneada (no texto real), o el PDF está bloqueado por seguridad para evitar la copia de texto. Para PDFs escaneados, usa una herramienta OCR. Para PDFs bloqueados, usa Desbloquear PDF si tienes la contraseña." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo copio una tabla de un PDF a una hoja de cálculo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Copiar y pegar casi nunca preserva la estructura de tablas de PDFs. Convierte el PDF a Excel usando la herramienta PDF a Excel de PDF.it, que reconstruye filas y columnas. Para tablas simples, PDF a Word también puede preservar la estructura." }
    },
    {
      "@type": "Question",
      "name": "¿Convertir PDF a TXT conserva los saltos de párrafo?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF a TXT preserva los saltos de línea básicos y el espaciado de párrafos, pero elimina todo el demás formato. El resultado es texto limpio y legible que puedes pegar en cualquier aplicación sin problemas de formato oculto." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo copiar texto de un PDF en mi teléfono?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí, pero copiar y pegar en móvil es aún menos confiable que en escritorio. Para mejores resultados, sube tu PDF a la herramienta PDF a TXT de PDF.it en tu navegador móvil y descarga el archivo de texto limpio." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Copiar Texto Limpio de un PDF",
  "description": "Obtén texto limpio y utilizable de cualquier PDF en 3 simples pasos usando PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube tu PDF",
      "text": "Ve a la herramienta PDF a TXT de PDF.it y sube el PDF del que quieres extraer texto."
    },
    {
      "@type": "HowToStep",
      "name": "Convierte a texto plano limpio",
      "text": "Haz clic en Convertir. PDF.it extrae el texto en el orden de lectura correcto, eliminando formato oculto y artefactos de diseño."
    },
    {
      "@type": "HowToStep",
      "name": "Pega en tus notas o documentos",
      "text": "Descarga el archivo TXT y copia el texto en tu aplicación de notas, Google Docs, Word o cualquier otro destino. El texto será limpio y correctamente formateado."
    }
  ]
}

export default function CopiarTextoDePdfANotasPage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF a Texto</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Cómo Copiar Texto de un PDF a Notas o Documentos (Limpiamente)</h1>
              <p className="text-xl text-slate-300">
                Intentaste Ctrl+C, Ctrl+V y obtuviste un desastre de líneas rotas, espacios aleatorios y párrafos fusionados. Aquí te explicamos por qué — y cómo obtener texto limpio siempre.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">¿Necesitas texto limpio ahora? Salta la guía y extráelo al instante.</p>
            </div>
            <Link
              href="/es/pdf-a-texto"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              PDF a TXT Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why copy-paste breaks */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Qué Copiar y Pegar desde PDFs Casi Siempre Sale Mal</h2>
              <p className="text-slate-600 mb-4">
                Cuando seleccionas texto en un visor de PDF y lo pegas en Notas, Google Docs o Word, el resultado a menudo se ve terrible. Esto no es un error de tu lector de PDF — es un problema fundamental con la forma en que los PDFs almacenan texto.
              </p>
              <p className="text-slate-600 mb-4">
                A diferencia de un documento Word donde el texto fluye en párrafos, un PDF posiciona cada carácter (o grupo de caracteres) en coordenadas exactas en una página. Tu visor de PDF tiene que <em>adivinar</em> el orden de lectura mirando las posiciones. Esto es lo que sale mal:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Saltos de línea donde no deberían estar.</strong> Los PDFs almacenan cada línea por separado. Al pegar, cada línea visual se convierte en un salto de línea forzado — así que un párrafo se convierte en docenas de líneas cortas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Las columnas se fusionan.</strong> Los diseños de dos columnas se pegan como líneas alternadas de cada columna, haciendo el texto ilegible.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Encabezados y pies de página se mezclan.</strong> Números de página, encabezados y notas al pie aparecen en medio de tu texto.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>El formato oculto se transfiere.</strong> Al pegar en Google Docs o Word, estilos de fuente invisibles, tamaños y colores del PDF crean formato inconsistente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">5.</span>
                  <span><strong>Los caracteres especiales se rompen.</strong> Ligaduras (fi, fl), comillas tipográficas y guiones largos a menudo se pegan como caracteres ilegibles o signos de interrogación.</span>
                </li>
              </ul>
            </section>

            {/* The clean way */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">La Forma Limpia: Convierte PDF a TXT Primero</h2>
              <p className="text-slate-600 mb-4">
                En lugar de luchar con copiar y pegar, convierte todo el PDF a un archivo TXT limpio usando la <Link href="/es/pdf-a-texto" className="text-[#14D8C4] hover:underline">herramienta PDF a TXT de PDF.it</Link>. Este enfoque te da texto correctamente ordenado sin formato oculto:
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Sube tu PDF",
                    desc: "Arrastra tu archivo a la herramienta PDF a TXT. Maneja documentos de múltiples páginas, diseños de múltiples columnas y contenido mixto automáticamente.",
                  },
                  {
                    title: "Descarga el archivo TXT limpio",
                    desc: "La herramienta extrae texto en el orden de lectura correcto con saltos de párrafo adecuados. Sin formato oculto, sin saltos de línea aleatorios, sin mezcla de columnas.",
                  },
                  {
                    title: "Pega en tu destino",
                    desc: "Abre el archivo TXT, selecciona todo el texto y pégalo en tu aplicación de notas, Google Docs, Word o correo electrónico. Se verá limpio cada vez.",
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

            {/* Paste without formatting tip */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Solución Rápida: Pegar Sin Formato</h2>
              <p className="text-slate-600 mb-4">
                Si tienes prisa y solo necesitas pegar una sección pequeña, usa "Pegar sin formato" para eliminar los estilos ocultos. Esto no arregla problemas de orden de lectura, pero elimina fuentes y tamaños inconsistentes:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Plataforma</th>
                      <th className="text-left py-3 px-4 font-bold">Atajo</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Windows / Chrome / Docs</td>
                      <td className="py-3 px-4"><code className="bg-gray-100 px-2 py-0.5 rounded">Ctrl + Shift + V</code></td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Mac</td>
                      <td className="py-3 px-4"><code className="bg-gray-100 px-2 py-0.5 rounded">Cmd + Shift + V</code></td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Word (Windows)</td>
                      <td className="py-3 px-4"><code className="bg-gray-100 px-2 py-0.5 rounded">Ctrl + Alt + V</code> luego selecciona "Texto sin formato"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4 text-sm">
                Esto ayuda con el formato pero no arregla saltos de línea rotos o mezcla de columnas. Para un resultado verdaderamente limpio, usa <Link href="/es/pdf-a-texto" className="text-[#14D8C4] hover:underline">PDF a TXT</Link>.
              </p>
            </section>

            {/* When you need more than text */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cuando Necesitas Más Que Solo el Texto</h2>
              <p className="text-slate-600 mb-4">
                A veces el texto plano no es suficiente. Aquí te indicamos cuándo usar una herramienta diferente:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">¿Necesitas editar el diseño del documento?</h3>
                  <p className="text-slate-600">
                    Usa <Link href="/es/pdf-a-word" className="text-[#14D8C4] hover:underline">PDF a Word</Link> para obtener un archivo .docx editable que preserve tablas, imágenes, encabezados y formato. Luego puedes editarlo en Word o Google Docs.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">¿Necesitas extraer una tabla a una hoja de cálculo?</h3>
                  <p className="text-slate-600">
                    Usa <Link href="/es/pdf-a-excel" className="text-[#14D8C4] hover:underline">PDF a Excel</Link> para convertir tablas directamente al formato de hoja de cálculo con filas y columnas intactas.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">¿No puedes seleccionar nada de texto?</h3>
                  <p className="text-slate-600">
                    Tu PDF probablemente es una imagen escaneada. Usa <Link href="/es/escaner-ocr" className="text-[#14D8C4] hover:underline">Escáner OCR</Link> para convertir las páginas escaneadas en texto seleccionable y copiable.
                  </p>
                </div>
              </div>
            </section>

            {/* Tips for specific apps */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para Aplicaciones Específicas</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Google Docs</h3>
                  <p className="text-slate-600">
                    Google Docs puede abrir PDFs directamente (Archivo &gt; Abrir), pero el resultado a menudo es desordenado. Para texto limpio, convierte a TXT primero con <Link href="/es/pdf-a-texto" className="text-[#14D8C4] hover:underline">PDF a TXT</Link>, luego pega en un documento nuevo.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Apple Notes / Notion / Obsidian</h3>
                  <p className="text-slate-600">
                    Estas aplicaciones aceptan texto plano perfectamente. Convierte tu PDF a TXT, luego pega directamente. El texto se adaptará al formato existente de tu nota en lugar de importar estilos del PDF.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Microsoft Word</h3>
                  <p className="text-slate-600">
                    Word puede abrir PDFs directamente pero a menudo malinterpreta los diseños. Para una conversión más limpia, usa <Link href="/es/pdf-a-word" className="text-[#14D8C4] hover:underline">PDF a Word</Link> que produce mejores resultados que el convertidor integrado de Word.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Obtén Texto Limpio de Cualquier PDF</h2>
            <p className="text-slate-300 mb-6">Deja de luchar con copiar y pegar. Convierte tu PDF a texto limpio en segundos — gratis, sin registro.</p>
            <Link
              href="/es/pdf-a-texto"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <FileText className="h-5 w-5" /> PDF a TXT Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Convertir PDF a TXT: Extrae Texto Plano en Segundos", href: "/es/aprender/convertir-pdf-a-texto" },
                { title: "Por Qué el Texto Extraído de PDF Sale Ilegible (Y Cómo Solucionarlo)", href: "/es/aprender/pdf-texto-ilegible-solucion" },
                { title: "Extraer Texto de PDF en iPhone/Android (Mejores Métodos)", href: "/es/aprender/extraer-texto-de-pdf-en-movil" },
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
                { q: "¿Por qué el texto de un PDF se pega con formato extraño?", a: "Los PDFs almacenan texto como caracteres posicionados, no como párrafos fluidos. Al copiar y pegar, tu computadora intenta reconstruir el orden de lectura pero a menudo se confunde con columnas, encabezados, pies de página y saltos de línea. El resultado es texto desordenado con saltos de línea aleatorios y palabras fusionadas." },
                { q: "¿Cómo copio texto de un PDF sin perder el formato?", a: "Si quieres texto plano limpio, convierte el PDF a TXT usando la herramienta PDF a TXT de PDF.it — maneja el orden de lectura y elimina el formato oculto. Si necesitas texto con formato, usa PDF a Word para obtener un documento editable con el estilo intacto." },
                { q: "¿Por qué no puedo seleccionar texto en mi PDF?", a: "Hay dos razones comunes: el PDF es una imagen escaneada (no texto real), o el PDF está bloqueado por seguridad para evitar la copia de texto. Para PDFs escaneados, usa una herramienta OCR. Para PDFs bloqueados, usa Desbloquear PDF si tienes la contraseña." },
                { q: "¿Cómo copio una tabla de un PDF a una hoja de cálculo?", a: "Copiar y pegar casi nunca preserva la estructura de tablas de PDFs. Convierte el PDF a Excel usando la herramienta PDF a Excel de PDF.it, que reconstruye filas y columnas. Para tablas simples, PDF a Word también puede preservar la estructura." },
                { q: "¿Convertir PDF a TXT conserva los saltos de párrafo?", a: "PDF a TXT preserva los saltos de línea básicos y el espaciado de párrafos, pero elimina todo el demás formato. El resultado es texto limpio y legible que puedes pegar en cualquier aplicación sin problemas de formato oculto." },
                { q: "¿Puedo copiar texto de un PDF en mi teléfono?", a: "Sí, pero copiar y pegar en móvil es aún menos confiable que en escritorio. Para mejores resultados, sube tu PDF a la herramienta PDF a TXT de PDF.it en tu navegador móvil y descarga el archivo de texto limpio." },
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

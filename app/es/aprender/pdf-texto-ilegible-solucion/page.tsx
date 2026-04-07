import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Por Qué el Texto Extraído de PDF Sale Ilegible (Y Cómo Solucionarlo) | PDF.it",
  description:
    "¿Obtienes texto ilegible, caracteres extraños o resultados en blanco al convertir PDF a texto? Aprende las 5 causas más comunes y cómo solucionar cada una — guía paso a paso.",
  keywords: "pdf a texto ilegible, texto pdf caracteres extraños, pdf copiar pegar caracteres raros, extraccion texto pdf rota, arreglar texto pdf ilegible",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Por qué mi salida de PDF a texto parece caracteres aleatorios?",
      "acceptedAnswer": { "@type": "Answer", "text": "Esto generalmente sucede porque el PDF usa codificación de fuente personalizada. El PDF mapea caracteres a IDs de glifos personalizados en lugar de Unicode estándar, por lo que las herramientas de extracción de texto leen los IDs de glifos y producen caracteres sin sentido. Prueba PDF a Word u OCR como alternativas." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué mi salida de PDF a texto está completamente en blanco?",
      "acceptedAnswer": { "@type": "Answer", "text": "Una salida en blanco significa que el PDF no tiene texto seleccionable — probablemente es un documento escaneado donde cada página es una imagen. Usa una herramienta OCR para leer el texto de las imágenes escaneadas." }
    },
    {
      "@type": "Question",
      "name": "¿Puede el OCR arreglar texto de PDF ilegible?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. OCR lee texto visualmente de la imagen de la página, evitando completamente los problemas de codificación de fuente. Si la extracción de texto estándar te da resultado ilegible, OCR es a menudo la mejor alternativa — lee cómo se ve la página, no cómo está codificado el texto." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué algunos PDFs extraen texto perfectamente pero otros no?",
      "acceptedAnswer": { "@type": "Answer", "text": "Depende de cómo se creó el PDF. Los PDFs hechos desde Word, Google Docs o software moderno usan codificación de texto estándar y se extraen limpiamente. Los PDFs creados por escáneres antiguos, software de diseño (InDesign, Illustrator) o ciertos controladores de impresora pueden usar codificación personalizada que causa salida ilegible." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo sé si mi PDF es escaneado o digital?",
      "acceptedAnswer": { "@type": "Answer", "text": "Intenta seleccionar texto en tu visor de PDF. Si puedes resaltar palabras individuales, es digital (basado en texto). Si solo puedes seleccionar la página completa como un bloque o no puedes seleccionar nada, es una imagen escaneada. También puedes hacer zoom — las páginas escaneadas se ven pixeladas con zoom alto." }
    },
    {
      "@type": "Question",
      "name": "¿Desbloquear un PDF protegido con contraseña arregla el texto ilegible?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si el PDF tiene restricciones de copia (puedes ver pero no seleccionar texto), desbloquearlo permitirá la extracción de texto. Pero si la salida ilegible es causada por problemas de codificación de fuente, desbloquearlo no lo arreglará — necesitarás usar OCR o PDF a Word en su lugar." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Arreglar Texto Ilegible al Extraer de PDF",
  "description": "Arregla la extracción de texto de PDF ilegible o rota en 3 pasos.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Identifica la causa",
      "text": "Intenta seleccionar texto en tu visor de PDF. Si no puedes seleccionar texto, es escaneado. Si el texto seleccionado se ve normal pero se pega como texto ilegible, es un problema de codificación de fuente. Si el PDF pide contraseña, está protegido."
    },
    {
      "@type": "HowToStep",
      "name": "Elige la herramienta correcta",
      "text": "Para PDFs escaneados, usa Escáner OCR. Para problemas de codificación de fuente, prueba PDF a Word. Para PDFs protegidos, usa Desbloquear PDF primero. Para PDFs digitales que se extraen limpiamente, usa PDF a TXT."
    },
    {
      "@type": "HowToStep",
      "name": "Extrae el texto",
      "text": "Sube tu PDF a la herramienta apropiada de PDF.it, procésalo y descarga la salida limpia. Verifica que el texto sea correcto antes de usarlo."
    }
  ]
}

export default function PdfTextoIlegibleSolucionPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Por Qué el Texto Extraído de PDF Sale Ilegible (Y Cómo Solucionarlo)</h1>
              <p className="text-xl text-slate-300">
                Convertiste tu PDF a texto y obtuviste un desastre de símbolos extraños, páginas en blanco o caracteres ilegibles. Aquí te explicamos qué salió mal y exactamente cómo arreglarlo.
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
              <p className="text-slate-700 font-semibold">Prueba extraer texto con PDF.it — maneja la mayoría de problemas de codificación.</p>
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

            {/* Symptoms */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Cómo Se Ve el Texto "Ilegible" de PDF?</h2>
              <p className="text-slate-600 mb-4">
                El texto ilegible de la extracción de PDF puede tomar varias formas. Reconocer el patrón te ayuda a diagnosticar la causa:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Símbolos aleatorios y cuadrados.</strong> Texto como "&#x25A1;&#x25A1;&#x25A1;" o "&#xFFFD;&#xFFFD;&#xFFFD;" — esto indica un problema de codificación de fuente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Letras incorrectas.</strong> Palabras reales pero con caracteres incorrectos — "Hfmmp Xpsme" en lugar de "Hello World" — causado por mapeo de caracteres personalizado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Salida completamente en blanco.</strong> El archivo TXT está vacío o contiene solo espacios en blanco — típico de PDFs escaneados sin texto incrustado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Orden de palabras desordenado.</strong> Las palabras aparecen pero en secuencia incorrecta — causado por diseños complejos, cuadros de texto o columnas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">5.</span>
                  <span><strong>Secciones faltantes.</strong> Algo de texto se extrae bien pero otras partes faltan — generalmente una mezcla de texto digital e imágenes incrustadas.</span>
                </li>
              </ul>
            </section>

            {/* Cause 1: Scanned PDFs */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Causa 1: El PDF Está Escaneado (Sin Texto Real)</h2>
              <p className="text-slate-600 mb-4">
                <strong>El problema:</strong> Los PDFs escaneados son fotografías de papel. Cada página es una imagen — no hay datos de texto para que las herramientas de extracción lean. Cuando ejecutas PDF a TXT en un archivo escaneado, obtienes un resultado en blanco o casi en blanco.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Cómo verificar:</strong> Abre el PDF e intenta seleccionar una sola palabra con tu cursor. Si solo puedes seleccionar la página completa como un bloque (o nada), es escaneado.
              </p>
              <p className="text-slate-600">
                <strong>La solución:</strong> Usa <Link href="/es/escaner-ocr" className="text-[#14D8C4] hover:underline">OCR (Reconocimiento Óptico de Caracteres)</Link>. OCR lee texto visualmente de la imagen de la página y lo convierte en texto seleccionable y editable. El Escáner OCR de PDF.it maneja esto automáticamente — sube tu PDF escaneado y devuelve el texto extraído.
              </p>
            </section>

            {/* Cause 2: Custom fonts */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Causa 2: Codificación de Fuente Personalizada o Incrustada</h2>
              <p className="text-slate-600 mb-4">
                <strong>El problema:</strong> Algunos PDFs — especialmente los de software de diseño (InDesign, Illustrator), sistemas gubernamentales antiguos o editores académicos — usan codificación de fuente personalizada. En lugar de Unicode estándar, mapean caracteres a IDs de glifos privados. El texto <em>se ve</em> correcto en el visor de PDF (que tiene los datos de fuente), pero las herramientas de extracción leen los IDs de glifos sin procesar y producen texto ilegible.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Cómo verificar:</strong> Si el texto se ve perfecto en tu visor de PDF pero se vuelve ilegible al copiar y pegar o convertir a TXT, es casi seguro un problema de codificación de fuente.
              </p>
              <p className="text-slate-600">
                <strong>La solución:</strong> Prueba <Link href="/es/pdf-a-word" className="text-[#14D8C4] hover:underline">PDF a Word</Link>, que usa un método de extracción diferente que a veces puede decodificar fuentes personalizadas. Si eso no funciona, usa <Link href="/es/escaner-ocr" className="text-[#14D8C4] hover:underline">OCR</Link> como alternativa — OCR lee la apariencia visual y evita la codificación por completo.
              </p>
            </section>

            {/* Cause 3: Protected PDF */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Causa 3: El PDF Está Protegido con Contraseña</h2>
              <p className="text-slate-600 mb-4">
                <strong>El problema:</strong> La configuración de seguridad del PDF puede restringir la copia de texto sin impedir la visualización. Puedes abrir y leer el PDF, pero seleccionar y extraer texto está bloqueado por la contraseña de permisos.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Cómo verificar:</strong> Busca un ícono de candado en tu visor de PDF, o intenta seleccionar texto — si el cursor cambia pero nada se resalta, las restricciones de copia están activas.
              </p>
              <p className="text-slate-600">
                <strong>La solución:</strong> Usa <Link href="/es/desbloquear-pdf" className="text-[#14D8C4] hover:underline">Desbloquear PDF</Link> para eliminar restricciones (necesitarás la contraseña del propietario si se estableció una), luego convierte a TXT normalmente con <Link href="/es/pdf-a-texto" className="text-[#14D8C4] hover:underline">PDF a TXT</Link>.
              </p>
            </section>

            {/* Cause 4: Complex layouts */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Causa 4: Diseños Complejos (Columnas, Cuadros de Texto, Tablas)</h2>
              <p className="text-slate-600 mb-4">
                <strong>El problema:</strong> Los PDFs con diseños de múltiples columnas, cuadros de texto flotantes, barras laterales o tablas hacen que las herramientas de extracción de texto adivinen mal el orden de lectura. El resultado son palabras en secuencia desordenada.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>La solución:</strong> La <Link href="/es/pdf-a-texto" className="text-[#14D8C4] hover:underline">herramienta PDF a TXT</Link> de PDF.it maneja correctamente la mayoría de diseños de múltiples columnas. Si el diseño es extremadamente complejo (como páginas de revistas), prueba <Link href="/es/pdf-a-word" className="text-[#14D8C4] hover:underline">PDF a Word</Link> que preserva la estructura visual, facilitando identificar y reorganizar secciones.
              </p>
            </section>

            {/* Cause 5: Mixed content */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Causa 5: Contenido Mixto (Parcialmente Escaneado, Parcialmente Digital)</h2>
              <p className="text-slate-600 mb-4">
                <strong>El problema:</strong> Algunos PDFs contienen una mezcla de texto digital (escrito a máquina) e imágenes escaneadas (páginas fotografiadas). La extracción de texto funciona en las páginas digitales pero no devuelve nada de las páginas escaneadas.
              </p>
              <p className="text-slate-600">
                <strong>La solución:</strong> Ejecuta todo el documento a través del <Link href="/es/escaner-ocr" className="text-[#14D8C4] hover:underline">Escáner OCR</Link>. Procesa todas las páginas — para las páginas digitales, usa el texto existente; para las páginas escaneadas, lee el texto de la imagen. Obtienes texto completo de todo el documento.
              </p>
            </section>

            {/* Decision tree */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Guía Rápida de Decisión: ¿Qué Herramienta Deberías Usar?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Síntoma</th>
                      <th className="text-left py-3 px-4 font-bold">Causa Probable</th>
                      <th className="text-left py-3 px-4 font-bold">Usa Esta Herramienta</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">Salida en blanco</td>
                      <td className="py-3 px-4">PDF escaneado</td>
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]"><Link href="/es/escaner-ocr" className="hover:underline">Escáner OCR</Link></td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4">Símbolos aleatorios / texto ilegible</td>
                      <td className="py-3 px-4">Codificación de fuente</td>
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]"><Link href="/es/pdf-a-word" className="hover:underline">PDF a Word</Link> o <Link href="/es/escaner-ocr" className="hover:underline">OCR</Link></td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">No se puede seleccionar texto</td>
                      <td className="py-3 px-4">PDF protegido</td>
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]"><Link href="/es/desbloquear-pdf" className="hover:underline">Desbloquear PDF</Link> luego <Link href="/es/pdf-a-texto" className="hover:underline">PDF a TXT</Link></td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4">Palabras en orden incorrecto</td>
                      <td className="py-3 px-4">Diseño complejo</td>
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]"><Link href="/es/pdf-a-texto" className="hover:underline">PDF a TXT</Link> o <Link href="/es/pdf-a-word" className="hover:underline">PDF a Word</Link></td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">Algunas páginas sin texto</td>
                      <td className="py-3 px-4">Contenido mixto</td>
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]"><Link href="/es/escaner-ocr" className="hover:underline">Escáner OCR</Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Arregla Tu Texto de PDF Ilegible</h2>
            <p className="text-slate-300 mb-6">Prueba las herramientas de extracción de PDF.it — manejan problemas de codificación, páginas escaneadas y diseños complejos automáticamente.</p>
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
                { title: "Cómo Copiar Texto de un PDF a Notas o Documentos (Limpiamente)", href: "/es/aprender/copiar-texto-de-pdf-a-notas" },
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
                { q: "¿Por qué mi salida de PDF a texto parece caracteres aleatorios?", a: "Esto generalmente sucede porque el PDF usa codificación de fuente personalizada. El PDF mapea caracteres a IDs de glifos personalizados en lugar de Unicode estándar, por lo que las herramientas de extracción de texto leen los IDs de glifos y producen caracteres sin sentido. Prueba PDF a Word u OCR como alternativas." },
                { q: "¿Por qué mi salida de PDF a texto está completamente en blanco?", a: "Una salida en blanco significa que el PDF no tiene texto seleccionable — probablemente es un documento escaneado donde cada página es una imagen. Usa una herramienta OCR para leer el texto de las imágenes escaneadas." },
                { q: "¿Puede el OCR arreglar texto de PDF ilegible?", a: "Sí. OCR lee texto visualmente de la imagen de la página, evitando completamente los problemas de codificación de fuente. Si la extracción de texto estándar te da resultado ilegible, OCR es a menudo la mejor alternativa — lee cómo se ve la página, no cómo está codificado el texto." },
                { q: "¿Por qué algunos PDFs extraen texto perfectamente pero otros no?", a: "Depende de cómo se creó el PDF. Los PDFs hechos desde Word, Google Docs o software moderno usan codificación de texto estándar y se extraen limpiamente. Los PDFs creados por escáneres antiguos, software de diseño o ciertos controladores de impresora pueden usar codificación personalizada que causa salida ilegible." },
                { q: "¿Cómo sé si mi PDF es escaneado o digital?", a: "Intenta seleccionar texto en tu visor de PDF. Si puedes resaltar palabras individuales, es digital (basado en texto). Si solo puedes seleccionar la página completa como un bloque o no puedes seleccionar nada, es una imagen escaneada. También puedes hacer zoom — las páginas escaneadas se ven pixeladas con zoom alto." },
                { q: "¿Desbloquear un PDF protegido con contraseña arregla el texto ilegible?", a: "Si el PDF tiene restricciones de copia (puedes ver pero no seleccionar texto), desbloquearlo permitirá la extracción de texto. Pero si la salida ilegible es causada por problemas de codificación de fuente, desbloquearlo no lo arreglará — necesitarás usar OCR o PDF a Word en su lugar." },
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

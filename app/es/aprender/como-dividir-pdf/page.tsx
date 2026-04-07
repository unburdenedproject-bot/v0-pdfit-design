import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Scissors, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Cómo Dividir un PDF en Línea (Extraer Páginas o Rangos) | PDF.it",
  description:
    "Aprende cómo dividir un PDF en archivos separados por rangos de páginas. Guía paso a paso para extraer capítulos, eliminar páginas y organizar documentos — gratis, en línea, sin software.",
  keywords: "dividir pdf en línea, dividir pdf por páginas, extraer páginas de pdf, dividir pdf en partes, cómo dividir un pdf",
}

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cómo divido un PDF en línea gratis?", "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a PDF.it, ingresa los rangos de páginas que quieres extraer (ej. 1-5, 8, 10-15), haz clic en Dividir, y descarga tus nuevos archivos. No se requiere registro para tus primeros 3 archivos." } },
    { "@type": "Question", "name": "¿Puedo dividir un PDF en rangos de páginas específicos?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes ingresar cualquier combinación de rangos de páginas y páginas individuales. Por ejemplo, '1-3, 7, 10-15' creará un archivo con las páginas 1 a 3, página 7, y páginas 10 a 15." } },
    { "@type": "Question", "name": "¿Dividir un PDF cambia el archivo original?", "acceptedAnswer": { "@type": "Answer", "text": "No. Dividir crea nuevos archivos con las páginas que seleccionas. Tu PDF original permanece exactamente como estaba — nada se modifica ni se elimina." } },
    { "@type": "Question", "name": "¿Puedo dividir un PDF en páginas individuales?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Ingresa cada número de página separado por comas (ej. 1, 2, 3, 4) o usa la opción 'dividir cada página' de PDF.it para crear un archivo separado por cada página automáticamente." } },
    { "@type": "Question", "name": "¿Cómo divido un PDF grande para email?", "acceptedAnswer": { "@type": "Answer", "text": "Divide tu PDF en partes más pequeñas que quepan bajo el límite de adjuntos de tu proveedor de email (generalmente 20-25MB). Divide el PDF en rangos de 2-3 páginas, luego comprime cada parte por separado si es necesario." } },
    { "@type": "Question", "name": "¿Es posible dividir un PDF protegido con contraseña?", "acceptedAnswer": { "@type": "Answer", "text": "Necesitas desbloquear el PDF primero. Usa la herramienta Desbloquear PDF de PDF.it para eliminar la contraseña, luego divide el archivo desbloqueado en las páginas o rangos que necesites." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo", "name": "Cómo Dividir un PDF en Línea",
  "description": "Divide tu PDF en archivos separados por rangos de páginas en 3 simples pasos usando PDF.it.",
  "step": [
    { "@type": "HowToStep", "name": "Sube tu PDF", "text": "Ve a la herramienta Dividir PDF de PDF.it y sube tu archivo haciendo clic o arrastrándolo al área de carga." },
    { "@type": "HowToStep", "name": "Ingresa los rangos de páginas", "text": "Escribe las páginas o rangos que quieres extraer — por ejemplo, 1-5, 8, 10-15. Cada rango crea un archivo de salida separado." },
    { "@type": "HowToStep", "name": "Descarga tus archivos divididos", "text": "Haz clic en Dividir PDF y descarga los archivos resultantes. Si dividiste en múltiples partes, puedes descargarlos individualmente o como un ZIP." }
  ]
}

export default function ComoDividirPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
            <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Dividir PDF</p>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Cómo Dividir un PDF en Línea (Extraer Páginas o Rangos)</h1>
            <p className="text-xl text-slate-300">¿Necesitas sacar unas páginas de un PDF grande? Aquí te explicamos cómo dividir cualquier PDF en archivos más pequeños por rango de páginas — en segundos, sin software.</p>
          </div></div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><Scissors className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">¿Listo para dividir? Salta la guía y ve directo a la herramienta.</p>
            </div>
            <Link href="/es/dividir-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Dividir PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Cuándo Deberías Dividir un PDF?</h2>
              <p className="text-slate-600 mb-4">Dividir es la opción correcta cuando necesitas separar un documento grande en piezas más pequeñas y manejables. Razones comunes:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Extraer un capítulo o sección.</strong> Tienes un informe de 200 páginas pero solo necesitas las páginas 45-60. Extrae esas en vez de enviar todo el archivo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Eliminar páginas no deseadas.</strong> Un contrato tiene 15 páginas de anexos que no necesitas. Extrae solo las páginas que importan.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Dividir un archivo para email.</strong> Tu PDF es muy grande para adjuntos de email. Divídelo en 2-3 archivos más pequeños y envíalos por separado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Organizar PDFs multi-documento.</strong> Alguien escaneó facturas, recibos y formularios en un solo archivo. Divídelos en documentos individuales para archivar.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Dividir un PDF (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Sube tu PDF", desc: "Ve a la herramienta Dividir PDF y arrastra tu archivo al área de carga, o haz clic para buscar. Archivos hasta 25MB son gratis — usuarios Pro pueden subir hasta 200MB." },
                  { title: "Ingresa los rangos de páginas que quieres", desc: "Escribe las páginas o rangos a extraer. Usa comas para separar rangos: 1-5, 8, 10-15. Cada grupo se convierte en un archivo separado. También puedes elegir dividir cada página en su propio archivo." },
                  { title: "Descarga tus archivos divididos", desc: "Haz clic en Dividir PDF. Tus nuevos archivos están listos para descargar individualmente, o tómalos todos a la vez como un ZIP. El PDF original no se modifica." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Entendiendo la Sintaxis de Rangos de Páginas</h2>
              <p className="text-slate-600 mb-4">PDF.it usa una sintaxis simple para definir qué páginas quieres. Aquí hay ejemplos comunes:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Escribes</th>
                      <th className="text-left py-3 px-4 font-bold">Lo Que Obtienes</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">1-5</td>
                      <td className="py-3 px-4">Un archivo con las páginas 1 a 5</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">1-5, 10-15</td>
                      <td className="py-3 px-4">Dos archivos: uno con páginas 1-5, otro con páginas 10-15</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">3, 7, 12</td>
                      <td className="py-3 px-4">Tres archivos separados de una sola página</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">1-3, 8, 10-15</td>
                      <td className="py-3 px-4">Tres archivos: páginas 1-3, página 8 sola, y páginas 10-15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-500 text-sm mt-3">Consejo: Verifica el conteo de páginas de tu PDF antes de ingresar rangos. Si tu PDF tiene 20 páginas y escribes "1-25", la herramienta extraerá las páginas 1-20.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Qué Pasa con el PDF Original?</h2>
              <p className="text-slate-600 mb-4">Nada. Dividir es una operación no destructiva. PDF.it crea <strong>nuevos archivos</strong> con las páginas que seleccionas — tu PDF original nunca se modifica, renombra ni elimina. Piensa en ello como fotocopiar páginas específicas de un libro. El libro permanece intacto.</p>
              <p className="text-slate-600">Si más tarde te das cuenta de que necesitas esas páginas juntas de nuevo, usa <Link href="/es/unir-pdf" className="text-[#14D8C4] hover:underline">Unir PDF</Link> para combinar archivos en un documento.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos de División para Escenarios Comunes</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Extraer un Capítulo de un Libro de Texto</h3>
                  <p className="text-slate-600">Abre el PDF, anota los números de página inicial y final del capítulo que necesitas, luego ingresa ese rango (ej., "45-72"). Si el PDF tiene una tabla de contenidos, usa esos números de página como guía.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Dividir para Adjuntos de Email</h3>
                  <p className="text-slate-600">Divide el conteo total de páginas en partes aproximadamente iguales. Para un PDF de 30 páginas, prueba "1-10, 11-20, 21-30" para crear tres archivos más pequeños. Después de dividir, <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">comprime cada parte</Link> para reducir el tamaño aún más. Consulta nuestra guía completa sobre <Link href="/es/aprender/dividir-pdf-para-email" className="text-[#14D8C4] hover:underline">dividir PDFs para email</Link>.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Eliminar Páginas No Deseadas</h3>
                  <p className="text-slate-600">En vez de seleccionar las páginas a eliminar, selecciona las páginas que quieres <strong>conservar</strong>. Por ejemplo, si un PDF de 20 páginas tiene contenido no deseado en las páginas 8-12, ingresa "1-7, 13-20" para obtener un archivo limpio sin esas páginas.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Sacar un Solo Formulario o Recibo</h3>
                  <p className="text-slate-600">Si necesitas solo una página — digamos la página 4 — escribe "4" y obtendrás un PDF de una sola página. Aprende más en nuestra guía sobre <Link href="/es/aprender/extraer-paginas-de-pdf" className="text-[#14D8C4] hover:underline">extraer páginas de un PDF</Link>.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dividir vs. Extraer: ¿Cuál es la Diferencia?</h2>
              <p className="text-slate-600 mb-4">Están estrechamente relacionados, pero piénsalo así:</p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Dividir</strong> separa un PDF en múltiples partes (múltiples archivos de salida de una entrada).</li>
                <li>✓ <strong>Extraer</strong> saca páginas específicas en un solo archivo nuevo (un archivo de salida con páginas seleccionadas).</li>
              </ul>
              <p className="text-slate-600 mt-4">La herramienta <Link href="/es/dividir-pdf" className="text-[#14D8C4] hover:underline">Dividir PDF</Link> de PDF.it maneja ambos — ingresa un rango para extracción, o múltiples rangos para dividir en partes. También puedes usar la herramienta dedicada <Link href="/es/dividir-pdf" className="text-[#14D8C4] hover:underline">Extraer Páginas</Link> para una interfaz más simple enfocada en sacar páginas específicas.</p>
            </section>

          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">¿Listo para Dividir Tu PDF?</h2>
            <p className="text-slate-300 mb-6">Sube tu archivo y extrae las páginas que necesitas en segundos — gratis, sin registro.</p>
            <Link href="/es/dividir-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
              <Scissors className="h-5 w-5" /> Dividir PDF Ahora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Extraer Páginas de un PDF (Guardar Páginas Seleccionadas como Nuevo PDF)", href: "/es/aprender/extraer-paginas-de-pdf" },
                { title: "Dividir un PDF para Email (Bajo Límites de Adjuntos)", href: "/es/aprender/dividir-pdf-para-email" },
                { title: "Dividir PDF en Páginas Individuales (Un Archivo por Página)", href: "/es/aprender/dividir-pdf-en-paginas-individuales" },
                { title: "Dividir un PDF en tu Teléfono (iPhone y Android)", href: "/es/aprender/dividir-pdf-en-movil" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group">
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "¿Cómo divido un PDF en línea gratis?", a: "Sube tu PDF a PDF.it, ingresa los rangos de páginas que quieres extraer (ej. 1-5, 8, 10-15), haz clic en Dividir, y descarga tus nuevos archivos. No se requiere registro para tus primeros 3 archivos." },
                { q: "¿Puedo dividir un PDF en rangos de páginas específicos?", a: "Sí. Puedes ingresar cualquier combinación de rangos de páginas y páginas individuales. Por ejemplo, '1-3, 7, 10-15' creará un archivo con las páginas 1 a 3, página 7, y páginas 10 a 15." },
                { q: "¿Dividir un PDF cambia el archivo original?", a: "No. Dividir crea nuevos archivos con las páginas que seleccionas. Tu PDF original permanece exactamente como estaba — nada se modifica ni se elimina." },
                { q: "¿Puedo dividir un PDF en páginas individuales?", a: "Sí. Ingresa cada número de página separado por comas (ej. 1, 2, 3, 4) o usa la opción 'dividir cada página' de PDF.it para crear un archivo separado por cada página automáticamente." },
                { q: "¿Cómo divido un PDF grande para email?", a: "Divide tu PDF en partes más pequeñas que quepan bajo el límite de adjuntos de tu proveedor de email (generalmente 20-25MB). Divide el PDF en rangos de 2-3 páginas, luego comprime cada parte por separado si es necesario." },
                { q: "¿Es posible dividir un PDF protegido con contraseña?", a: "Necesitas desbloquear el PDF primero. Usa la herramienta Desbloquear PDF de PDF.it para eliminar la contraseña, luego divide el archivo desbloqueado en las páginas o rangos que necesites." },
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

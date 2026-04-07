import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Merge, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Cómo Unir PDFs Escaneados (Y Mantenerlos Legibles) | PDF.it",
  description:
    "Aprende cómo unir archivos PDF escaneados sin perder legibilidad. Corrige orientación, reduce tamaño de archivo, y agrega OCR para texto buscable — guía paso a paso.",
  keywords: "unir pdfs escaneados, combinar documentos escaneados, unir páginas pdf escaneadas, pdf escaneado en uno",
}

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Puedo unir PDFs escaneados como PDFs normales?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Los PDFs escaneados se unen de la misma manera que los PDFs normales — súbelos a la herramienta Unir de PDF.it, ordénalos, y haz clic en Unir. La diferencia es que los PDFs escaneados suelen ser mucho más grandes porque cada página se almacena como una imagen de página completa." } },
    { "@type": "Question", "name": "¿Por qué mi PDF escaneado unido es tan grande?", "acceptedAnswer": { "@type": "Answer", "text": "Las páginas escaneadas se almacenan como imágenes (frecuentemente 2-5MB por página). Cuando unes múltiples documentos escaneados, el tamaño del archivo se acumula rápidamente. Un escaneo unido de 20 páginas puede fácilmente ser 40-100MB. Comprime el archivo unido después para reducir el tamaño significativamente." } },
    { "@type": "Question", "name": "¿Cómo corrijo páginas rotadas en un PDF escaneado?", "acceptedAnswer": { "@type": "Answer", "text": "Usa la herramienta Rotar PDF de PDF.it para corregir cualquier página que esté al revés o de lado antes de unir. Los escáneres a veces capturan páginas en la orientación incorrecta, especialmente al usar un alimentador automático de documentos." } },
    { "@type": "Question", "name": "¿Puedo hacer un PDF escaneado buscable después de unir?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Pasa el archivo unido por la herramienta Escáner OCR de PDF.it. El OCR (Reconocimiento Óptico de Caracteres) lee el texto en las imágenes escaneadas y agrega una capa de texto buscable, para que puedas buscar, copiar y seleccionar texto en el documento." } },
    { "@type": "Question", "name": "¿Debo comprimir antes o después de unir PDFs escaneados?", "acceptedAnswer": { "@type": "Answer", "text": "Comprime después de unir. Es más eficiente porque la herramienta de compresión puede optimizar todo el documento a la vez. Si los archivos individuales son demasiado grandes para subir (más de 25MB en el plan gratuito), comprime cada uno primero, luego únelos." } },
    { "@type": "Question", "name": "¿Cómo limpio PDFs escaneados con teléfono antes de unir?", "acceptedAnswer": { "@type": "Answer", "text": "Usa la herramienta Limpieza de Escaneo de Teléfono de PDF.it para corregir iluminación, eliminar sombras, enderezar páginas y mejorar el contraste. Limpia cada escaneo primero, luego une los archivos mejorados en un documento." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo", "name": "Cómo Unir PDFs Escaneados",
  "description": "Combina documentos PDF escaneados en un archivo legible usando PDF.it.",
  "step": [
    { "@type": "HowToStep", "name": "Corrige orientación y limpia los escaneos", "text": "Antes de unir, rota las páginas que estén de lado o al revés usando la herramienta Rotar PDF. Si escaneaste con tu teléfono, usa Limpieza de Escaneo de Teléfono para mejorar la calidad." },
    { "@type": "HowToStep", "name": "Sube y une los archivos escaneados", "text": "Sube todos los PDFs escaneados a la herramienta Unir de PDF.it, ordénalos correctamente, y haz clic en Unir para combinarlos en un documento." },
    { "@type": "HowToStep", "name": "Comprime y agrega OCR", "text": "Después de unir, comprime el archivo para reducir su tamaño. Opcionalmente, ejecuta el Escáner OCR para hacer el texto escaneado buscable y copiable." }
  ]
}

export default function UnirPDFsEscaneadosPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
            <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Unir PDF</p>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Cómo Unir PDFs Escaneados (Y Mantenerlos Legibles)</h1>
            <p className="text-xl text-slate-300">Los PDFs escaneados traen desafíos extra — archivos enormes, páginas rotadas y texto que no se puede buscar. Aquí te explicamos cómo unirlos correctamente sin terminar con un desastre pesado e ilegible.</p>
          </div></div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><Merge className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">¿Listo para unir PDFs escaneados? Ve directo a la herramienta.</p>
            </div>
            <Link href="/es/unir-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Unir PDFs Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Qué los PDFs Escaneados Son Más Difíciles de Unir</h2>
              <p className="text-slate-600 mb-4">A diferencia de los PDFs normales (que contienen datos de texto reales), los PDFs escaneados almacenan cada página como una imagen de página completa. Esto crea tres desafíos principales al unir:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Tamaños de archivo masivos.</strong> Cada página escaneada es típicamente 2-5MB. Un escaneo unido de 20 páginas puede llegar a 40-100MB — demasiado grande para email o portales de carga.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Problemas de orientación.</strong> Los alimentadores automáticos de documentos (ADF) de los escáneres a veces capturan páginas de lado o al revés. No lo notarás hasta que abras el archivo unido.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Sin texto buscable.</strong> Los PDFs escaneados son solo imágenes — no puedes buscar palabras, copiar texto, ni usarlos con lectores de pantalla. Esto es un problema para accesibilidad y uso profesional.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Mala calidad de escaneo.</strong> Los escaneos con teléfono especialmente pueden tener sombras, páginas torcidas e iluminación desigual que hacen el documento unido difícil de leer.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Unir PDFs Escaneados (La Forma Correcta)</h2>
              <div className="space-y-4">
                {[
                  { title: "Corrige la orientación y limpia cada escaneo", desc: "Antes de unir, revisa cada PDF escaneado buscando páginas rotadas. Usa la herramienta Rotar PDF para corregir páginas de lado o al revés. Si escaneaste con tu teléfono, pasa cada archivo por Limpieza de Escaneo de Teléfono para corregir iluminación, sombras y alineación." },
                  { title: "Sube todos los escaneos y ordénalos", desc: "Sube todos tus PDFs escaneados a la herramienta Unir de PDF.it. Arrastra y suelta para ordenarlos correctamente. Verifica que ningún archivo esté fuera de lugar — especialmente si los archivos tienen nombres genéricos como 'Escaneo_001.pdf'." },
                  { title: "Une, luego comprime y aplica OCR", desc: "Haz clic en Unir para combinar todos los escaneos en un PDF. Luego comprime el archivo unido para reducir su tamaño (los PDFs escaneados se comprimen muy bien). Si necesitas texto buscable, pasa el resultado por el Escáner OCR." },
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Corregir Páginas Rotadas Antes de Unir</h2>
              <p className="text-slate-600 mb-4">Las páginas rotadas son el problema más común con los PDFs escaneados. Así puedes identificarlas y corregirlas:</p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Abre cada escaneo</strong> y revisa rápidamente las páginas. Busca páginas de lado o al revés.</li>
                <li>✓ <strong>Usa <Link href="/es/rotar-pdf" className="text-[#14D8C4] hover:underline">Rotar PDF</Link></strong> para corregir cualquier página con orientación incorrecta. Puedes rotar páginas individuales 90, 180 o 270 grados.</li>
                <li>✓ <strong>Revisa la configuración del ADF</strong> de tu escáner — muchos tienen una opción de "auto-orientar" que corrige esto al momento de escanear.</li>
                <li>✓ <strong>Corrige antes de unir,</strong> no después. Es mucho más fácil rotar archivos escaneados individuales que corregir páginas dentro de un documento unido grande.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Comprimir PDFs Escaneados Después de Unir</h2>
              <p className="text-slate-600 mb-4">Los PDFs escaneados se comprimen dramáticamente porque son principalmente imágenes. Esto es lo que puedes esperar:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Tamaño Original</th>
                      <th className="text-left py-3 px-4 font-bold">Después de Compresión</th>
                      <th className="text-left py-3 px-4 font-bold">Reducción</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">10 páginas (~30MB)</td>
                      <td className="py-3 px-4">3-8MB</td>
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">70-90%</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4">20 páginas (~60MB)</td>
                      <td className="py-3 px-4">6-15MB</td>
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">75-90%</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">50 páginas (~150MB)</td>
                      <td className="py-3 px-4">15-40MB</td>
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">70-90%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4">Usa <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> después de unir. Para límites de tamaño estrictos, prueba las herramientas dedicadas de <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">compresión</Link>.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Hacer Tu Escaneo Unido Buscable con OCR</h2>
              <p className="text-slate-600 mb-4">Los PDFs escaneados son solo imágenes — no puedes buscar texto, copiar contenido ni resaltar palabras. Si necesitas texto buscable (para archivado, documentos legales o accesibilidad), pasa tu archivo unido por OCR:</p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Sube tu PDF unido</strong> al <Link href="/es/escaner-ocr" className="text-[#14D8C4] hover:underline">Escáner OCR</Link> (función Pro).</li>
                <li>✓ <strong>El OCR lee el texto escaneado</strong> y agrega una capa de texto invisible sobre las imágenes.</li>
                <li>✓ <strong>El resultado</strong> se ve exactamente igual pero ahora soporta búsqueda, copiar/pegar y lectores de pantalla.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Limpiar Escaneos de Teléfono Antes de Unir</h2>
              <p className="text-slate-600 mb-4">Los documentos escaneados con teléfono frecuentemente tienen sombras, iluminación desigual y alineación torcida. Antes de unir, límpialos:</p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Usa <Link href="/es/limpiar-escaneo" className="text-[#14D8C4] hover:underline">Limpieza de Escaneo de Teléfono</Link></strong> para corregir automáticamente iluminación, eliminar sombras, enderezar páginas y mejorar el contraste.</li>
                <li>✓ <strong>Procesa cada escaneo individualmente</strong> antes de unirlos en un documento.</li>
                <li>✓ <strong>La herramienta de limpieza es gratuita</strong> con límites diarios — los usuarios Pro obtienen procesamiento ilimitado.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">¿Listo para Unir Tus PDFs Escaneados?</h2>
            <p className="text-slate-300 mb-6">Sube tus archivos escaneados y combínalos en un documento limpio — gratis, sin registro.</p>
            <Link href="/es/unir-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
              <Merge className="h-5 w-5" /> Unir PDFs Ahora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Cómo Unir Archivos PDF en Línea (Combinar PDFs en Uno)", href: "/es/aprender/como-unir-archivos-pdf" },
                { title: "Unir PDFs en el Orden Correcto (Sin Errores de Páginas)", href: "/es/aprender/unir-pdfs-en-orden" },
                { title: "Combinar PDFs para Envíos (Escuela, Visa, Portales de Empleo)", href: "/es/aprender/combinar-pdfs-para-envio" },
                { title: "Unir Archivos PDF en iPhone (Método Rápido por Navegador)", href: "/es/aprender/unir-pdf-en-iphone" },
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
                { q: "¿Puedo unir PDFs escaneados como PDFs normales?", a: "Sí. Los PDFs escaneados se unen de la misma manera que los PDFs normales — súbelos a la herramienta Unir de PDF.it, ordénalos, y haz clic en Unir. La diferencia es que los PDFs escaneados suelen ser mucho más grandes porque cada página se almacena como una imagen de página completa." },
                { q: "¿Por qué mi PDF escaneado unido es tan grande?", a: "Las páginas escaneadas se almacenan como imágenes (frecuentemente 2-5MB por página). Cuando unes múltiples documentos escaneados, el tamaño del archivo se acumula rápidamente. Un escaneo unido de 20 páginas puede fácilmente ser 40-100MB. Comprime el archivo unido después para reducir el tamaño significativamente." },
                { q: "¿Cómo corrijo páginas rotadas en un PDF escaneado?", a: "Usa la herramienta Rotar PDF de PDF.it para corregir cualquier página que esté al revés o de lado antes de unir. Los escáneres a veces capturan páginas en la orientación incorrecta, especialmente al usar un alimentador automático de documentos." },
                { q: "¿Puedo hacer un PDF escaneado buscable después de unir?", a: "Sí. Pasa el archivo unido por la herramienta Escáner OCR de PDF.it. El OCR lee el texto en las imágenes escaneadas y agrega una capa de texto buscable, para que puedas buscar, copiar y seleccionar texto en el documento." },
                { q: "¿Debo comprimir antes o después de unir PDFs escaneados?", a: "Comprime después de unir. Es más eficiente porque la herramienta de compresión puede optimizar todo el documento a la vez. Si los archivos individuales son demasiado grandes para subir (más de 25MB en el plan gratuito), comprime cada uno primero, luego únelos." },
                { q: "¿Cómo limpio PDFs escaneados con teléfono antes de unir?", a: "Usa la herramienta Limpieza de Escaneo de Teléfono de PDF.it para corregir iluminación, eliminar sombras, enderezar páginas y mejorar el contraste. Limpia cada escaneo primero, luego une los archivos mejorados en un documento." },
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

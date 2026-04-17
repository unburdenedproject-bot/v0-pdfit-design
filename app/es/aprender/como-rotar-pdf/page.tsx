import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { RotateCw, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Rotar un PDF Online (90°, 180° o Personalizado) | PDF.it",
  description:
    "Aprende como rotar páginas de PDF en línea — rota páginas individuales, todas las páginas o ángulos específicos como 90° y 180°. Gratis, sin software.",
  keywords: "rotar pdf online, rotar páginas pdf, girar pdf, rotar pdf 90 grados",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como puedo rotar un PDF en línea gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a la herramienta Rotar PDF de PDF.it, seleccióna las páginas que quieres rotar, elige el ángulo de rotación (90°, 180° o 270°), haz clic en Rotar y descarga el archivo corregido. No se requiere registro para tus primeros 3 archivos." }
    },
    {
      "@type": "Question",
      "name": "Puedo rotar solo una página de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it te permite selecciónar páginas individuales para rotar mientras deja el resto del documento sin cambios. Esto es perfecto para corregir una sola página horizontal en un documento vertical." }
    },
    {
      "@type": "Question",
      "name": "Que ángulos de rotación están disponibles?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it soporta rotación de 90° en sentido horario, 90° en sentido antihorario (270°) y 180°. Puedes aplicar diferentes rotaciones a diferentes páginas en el mismo documento." }
    },
    {
      "@type": "Question",
      "name": "Rotar un PDF afectara la calidad del texto?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Rotar un PDF solo cambia los metadatos de orientación de la página — no re-renderiza ni comprime el contenido. Tu texto, imágenes y formato permanecen exactamente iguales." }
    },
    {
      "@type": "Question",
      "name": "Puedo rotar un PDF protegido con contraseña?",
      "acceptedAnswer": { "@type": "Answer", "text": "Primero necesitas desbloquear el PDF. Usa la herramienta Desbloquear PDF de PDF.it para quitar la contraseña, luego rota las páginas. Puedes volver a agregar protección con contraseña después usando la herramienta Proteger PDF." }
    },
    {
      "@type": "Question",
      "name": "Puedo rotar un PDF en mi teléfono?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it funciona en cualquier navegador móvil — Safari, Chrome o Firefox. Sube tu PDF, rota las páginas y descarga el archivo corregido directamente en tu teléfono. No necesitas instalar ninguna app." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Rotar un PDF Online",
  "description": "Corrige la orientación de las páginas de un PDF en 3 simples pasos usando PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube tu PDF",
      "text": "Ve a la herramienta Rotar PDF de PDF.it y sube el archivo que quieres corregir haciendo clic o arrastrandolo al area de carga."
    },
    {
      "@type": "HowToStep",
      "name": "Selecciona páginas y ángulo de rotación",
      "text": "Elige que páginas rotar y seleccióna el ángulo — 90° en sentido horario, 90° en sentido antihorario o 180°. Puedes rotar todas las páginas a la vez o elegir algunas específicas."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga el PDF rotado",
      "text": "Haz clic en Rotar y descarga tu PDF corregido. El archivo mantiene su calidad original con las páginas ahora orientadas correctamente."
    }
  ]
}

export default function ComoRotarPDFPage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Rotar PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Rotar un PDF Online (90°, 180° o Personalizado)</h1>
              <p className="text-xl text-slate-300">
                Tienes un PDF con páginas de lado o al reves? Ya sea una sola página o el documento completo, aquí te mostramos como corregir la rotación del PDF en segundos — sin necesidad de software.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <RotateCw className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Listo para rotar? Salta la guia y ve directo a la herramienta.</p>
            </div>
            <Link
              href="/es/rotar-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Rotar PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why rotate PDFs */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que las Páginas de PDF Terminan Rotadas?</h2>
              <p className="text-slate-600 mb-4">
                Las páginas de PDF rotadas son más comunes de lo que piensas. Estas son las causas más frecuentes:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Desajuste de orientación del escáner.</strong> Cuando escaneas un documento en un ángulo diferente al esperado, el escáner guarda la página de lado o al reves. Esto sucede frecuentemente con impresoras multifunción de oficina.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Páginas horizontales en documentos verticales.</strong> Las hojas de cálculo, gráficos y tablas anchas a menudo se crean en modo horizontal pero se insertan en un PDF vertical sin rotar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Escaneos con camara del teléfono.</strong> Tomar fotos de documentos con tu teléfono puede resultar en páginas rotadas dependiendo de como sostenias el dispositivo. Herramientas como <Link href="/es/limpiar-escaneo" className="text-[#14D8C4] hover:underline">Limpieza de Escaneo de Teléfono</Link> pueden ayudar, pero aun puedes necesitar rotar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Errores de exportación de PDF.</strong> Algunas aplicaciónes exportan páginas con metadatos de rotación incorrectos, causando que los visores las muestren de lado aunque el contenido fue creado correctamente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">5.</span>
                  <span><strong>Documentos combinados con orientaciones mixtas.</strong> Cuando <Link href="/es/unir-pdf" className="text-[#14D8C4] hover:underline">unes múltiples PDFs</Link>, algunos archivos pueden tener diferentes orientaciones de página que necesitan corrección.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Rotar un PDF Online (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Sube tu PDF",
                    desc: "Ve a la herramienta Rotar PDF y arrastra tu archivo al area de carga, o haz clic para buscar. Archivos hasta 25MB son gratis — los usuarios Pro pueden subir archivos hasta 200MB.",
                  },
                  {
                    title: "Selecciona páginas y ángulo de rotación",
                    desc: "Elige si quieres rotar todas las páginas o solo algunas específicas. Luego seleccióna tu rotación: 90° en sentido horario, 90° en sentido antihorario o 180°. Puedes ver una vista previa de cada página para asegurarte de elegir la dirección correcta.",
                  },
                  {
                    title: "Descarga el PDF rotado",
                    desc: "Haz clic en Rotar y descarga tu documento corregido. La rotación se guarda permanentemente en el archivo — cada visor de PDF mostrara las páginas correctamente de ahora en adelante.",
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

            {/* Rotating specific pages */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Rotar Páginas Individuales vs. Todas las Páginas</h2>
              <p className="text-slate-600 mb-4">
                A veces necesitas rotar solo una o dos páginas en un documento de varias páginas. Otras veces, el archivo completo necesita girarse. Aqui te mostramos como manejar ambos escenarios:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Rota todas las páginas</strong> cuando el documento completo fue escaneado en el ángulo incorrecto. Este es el caso más común con PDFs escaneados — seleccióna todas las páginas y aplica una sola rotación.</li>
                <li>&#10003; <strong>Rota páginas individuales</strong> cuando solo ciertas páginas están de lado. Esto sucede cuando un documento mezcla páginas de texto vertical con gráficos o hojas de cálculo horizontales.</li>
                <li>&#10003; <strong>Usa Dividir + Rotar + Unir</strong> para documentos complejos. Si necesitas diferentes rotaciones para diferentes secciones, <Link href="/es/dividir-pdf" className="text-[#14D8C4] hover:underline">divide el PDF</Link> en grupos, rota cada grupo por separado, luego <Link href="/es/unir-pdf" className="text-[#14D8C4] hover:underline">unelos</Link> de nuevo.</li>
                <li>&#10003; <strong>Verifica el resultado</strong> abriendo el archivo descargado en cualquier visor de PDF. Desplazate por cada página para confirmar que la orientación es correcta antes de enviarlo o compartirlo.</li>
              </ul>
            </section>

            {/* Common rotation angles */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Entendiendo los Ángulos de Rotación</h2>
              <p className="text-slate-600 mb-4">
                La rotación de PDF se mide en grados. Esto es lo que hace cada ángulo:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">90° en Sentido Horario</h3>
                  <p className="text-slate-600">
                    Gira la página un cuarto de vuelta a la derecha. Usa esto cuando una página esta rotada a la izquierda (sentido antihorario) y necesitas llevarla a posición vertical. Esta es la corrección más común para páginas horizontales que aparecen de lado.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">90° en Sentido Antihorario (270°)</h3>
                  <p className="text-slate-600">
                    Gira la página un cuarto de vuelta a la izquierda. Usa esto cuando una página esta rotada a la derecha y necesitas enderezarla. Menos común, pero necesario cuando los escáneres rotan las páginas en la dirección opuesta.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">180°</h3>
                  <p className="text-slate-600">
                    Voltea la página completamente al reves. Usa esto cuando una página esta invertida — el texto que se lee de abajo hacia arriba necesita una rotación de 180°. Común con errores de escaneo a doble cara. Consulta nuestra guia dedicada sobre <Link href="/es/aprender/arreglar-pdf-al-reves" className="text-[#14D8C4] hover:underline">como arreglar PDFs al reves</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* Tips after rotating */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Que Hacer Después de Rotar</h2>
              <p className="text-slate-600 mb-4">
                Una vez que tus páginas están correctamente orientadas, considera estos pasos adicionales para obtener el mejor resultado:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Comprime el archivo.</strong> Si el PDF rotado es demasiado grande para correo electrónico o portales de carga, usa <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> para reducir el tamaño. Incluso puedes apuntar a tamaños específicos como <Link href="/es/comprimir-pdf-a-5mb" className="text-[#14D8C4] hover:underline">5MB</Link> o <Link href="/es/comprimir-pdf-a-2mb" className="text-[#14D8C4] hover:underline">2MB</Link>.</li>
                <li>&#10003; <strong>Ejecuta OCR en páginas escaneadas.</strong> Si el documento rotado es un escaneo sin texto selecciónable, usa <Link href="/es/escaner-ocr" className="text-[#14D8C4] hover:underline">Escáner OCR</Link> para hacer el texto buscable y copiable.</li>
                <li>&#10003; <strong>Aplana el PDF.</strong> Si planeas enviar el archivo a un portal, <Link href="/es/aplanar-pdf" className="text-[#14D8C4] hover:underline">aplanalo</Link> para eliminar capas ocultas, campos de formulario o anotaciones que puedan causar problemas de compatibilidad.</li>
                <li>&#10003; <strong>Protege documentos sensibles.</strong> Agrega una contraseña usando <Link href="/es/proteger-pdf" className="text-[#14D8C4] hover:underline">Proteger PDF</Link> si el documento contiene información personal o confidencial.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Listo para Rotar Tu PDF?</h2>
            <p className="text-slate-300 mb-6">Sube tu archivo y corrige la orientación de las páginas en segundos — gratis, sin registro.</p>
            <Link
              href="/es/rotar-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <RotateCw className="h-5 w-5" /> Rotar PDF Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Rotar un PDF en iPhone (Sin App)", href: "/es/aprender/rotar-pdf-en-iphone" },
                { title: "Arreglar un PDF al Reves (Rotar 180° al Instante)", href: "/es/aprender/arreglar-pdf-al-reves" },
                { title: "Rotar un PDF Escaneado (Corregir Orientación Después de Escanear)", href: "/es/aprender/rotar-pdf-escaneado" },
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
                { q: "Como puedo rotar un PDF en línea gratis?", a: "Sube tu PDF a la herramienta Rotar PDF de PDF.it, seleccióna las páginas que quieres rotar, elige el ángulo de rotación (90°, 180° o 270°), haz clic en Rotar y descarga el archivo corregido. No se requiere registro para tus primeros 3 archivos." },
                { q: "Puedo rotar solo una página de un PDF?", a: "Si. PDF.it te permite selecciónar páginas individuales para rotar mientras deja el resto del documento sin cambios. Esto es perfecto para corregir una sola página horizontal en un documento vertical." },
                { q: "Que ángulos de rotación están disponibles?", a: "PDF.it soporta rotación de 90° en sentido horario, 90° en sentido antihorario (270°) y 180°. Puedes aplicar diferentes rotaciones a diferentes páginas en el mismo documento." },
                { q: "Rotar un PDF afectara la calidad del texto?", a: "No. Rotar un PDF solo cambia los metadatos de orientación de la página — no re-renderiza ni comprime el contenido. Tu texto, imágenes y formato permanecen exactamente iguales." },
                { q: "Puedo rotar un PDF protegido con contraseña?", a: "Primero necesitas desbloquear el PDF. Usa la herramienta Desbloquear PDF de PDF.it para quitar la contraseña, luego rota las páginas. Puedes volver a agregar protección con contraseña después usando la herramienta Proteger PDF." },
                { q: "Puedo rotar un PDF en mi teléfono?", a: "Si. PDF.it funciona en cualquier navegador móvil — Safari, Chrome o Firefox. Sube tu PDF, rota las páginas y descarga el archivo corregido directamente en tu teléfono. No necesitas instalar ninguna app." },
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

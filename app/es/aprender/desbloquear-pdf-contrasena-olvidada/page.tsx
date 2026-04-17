import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Unlock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Olvidaste Tu Contraseña de PDF? Esto Es Lo Que Puedes Hacer | PDF.it",
  description:
    "Olvidaste la contraseña de tu PDF? Aprende la diferencia entre contraseñas de apertura y de permisos, y descubre tus opciones para recuperar acceso a PDF bloqueados.",
  keywords: "olvide contraseña pdf, recuperar contraseña pdf, no puedo abrir pdf, contraseña pdf perdida",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Puedo abrir un PDF si olvide la contraseña?",
      "acceptedAnswer": { "@type": "Answer", "text": "Depende del tipo de contraseña. Si el PDF tiene una contraseña de permisos (puedes verlo pero no editar/imprimir), PDF.it puede eliminar esas restricciones. Si tiene una contraseña de apertura (no puedes ver el archivo en absoluto), necesitaras recuperar o recordar la contraseña — no hay forma de eludir el cifrado fuerte." }
    },
    {
      "@type": "Question",
      "name": "Cual es la diferencia entre una contraseña de apertura y una de permisos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Una contraseña de apertura impide que veas el PDF por completo — ves un mensaje de contraseña cuando intentas abrirlo. Una contraseña de permisos te permite ver el PDF pero restringe acciones como imprimir, copiar y editar. Las contraseñas de permisos son mucho más fáciles de eliminar." }
    },
    {
      "@type": "Question",
      "name": "PDF.it puede descifrar una contraseña de apertura de PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it no descifra ni usa fuerza bruta en contraseñas de apertura. El cifrado moderno de PDF (AES de 256 bits) es extremadamente fuerte y no puede ser eludido. PDF.it solo puede eliminar restricciones de permisos o desbloquear PDF cuando proporcionas la contraseña correcta." }
    },
    {
      "@type": "Question",
      "name": "Como puedo recuperar una contraseña de PDF olvidada?",
      "acceptedAnswer": { "@type": "Answer", "text": "Revisa tu correo electrónico buscando el mensaje original que contenia la contraseña. Busca en las contraseñas guardadas de tu navegador. Prueba contraseñas comunes que uses. Verifica si la contraseña fue compartida en un chat o mensaje de texto. Si el PDF es de una organización, contactalos para obtener la contraseña." }
    },
    {
      "@type": "Question",
      "name": "Puedo eliminar restricciones de permisos sin contraseña?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si, en muchos casos. Si puedes abrir y ver el PDF (sin contraseña de apertura), PDF.it puede eliminar las restricciones de permisos como bloqueos de impresión, copia y edición sin necesitar la contraseña del propietario." }
    },
    {
      "@type": "Question",
      "name": "Como evito perder mi contraseña de PDF en el futuro?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usa un gestor de contraseñas para almacenar contraseñas de PDF. Mantien un registro de que archivos están protegidos con contraseña y que contraseñas usaste. Considera usar restricciones de permisos en lugar de contraseñas de apertura cuando solo necesites controlar la edición e impresión." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Que Hacer Cuando Olvidas una Contraseña de PDF",
  "description": "Pasos para recuperar acceso a un PDF protegido con contraseña usando PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Determina el tipo de contraseña",
      "text": "Intenta abrir el PDF. Si puedes verlo pero no puedes imprimir, copiar o editar, tiene una contraseña de permisos. Si no puedes abrirlo en absoluto, tiene una contraseña de apertura."
    },
    {
      "@type": "HowToStep",
      "name": "Sube a PDF.it",
      "text": "Ve a la herramienta Desbloquear PDF de PDF.it y sube el archivo. Para restricciones solo de permisos, PDF.it puede eliminarlas automáticamente."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga o recupera la contraseña",
      "text": "Si las restricciones fueron eliminadas, descarga tu archivo desbloqueado. Si el PDF tiene una contraseña de apertura, intenta recuperarla de tu correo electrónico, gestor de contraseñas o el remitente."
    }
  ]
}

export default function DesbloquearPDFContrasenaOlvidadaPage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Desbloquear PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Olvidaste Tu Contraseña de PDF? Esto Es Lo Que Puedes Hacer</h1>
              <p className="text-xl text-slate-300">
                Bloqueado fuera de tu propio PDF? No te preocupes. Tus opciones dependen del tipo de contraseña que se configuro. Aqui tienes un desglose claro de lo que puedes (y no puedes) hacer.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <Unlock className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Tienes un bloqueo solo de permisos? Eliminalo al instante.</p>
            </div>
            <Link
              href="/es/desbloquear-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Desbloquear PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Dos tipos de contraseñas */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Los Dos Tipos de Contraseñas de PDF</h2>
              <p className="text-slate-600 mb-4">
                Antes de poder resolver el problema, necesitas entender que tipo de contraseña tiene tu PDF. Los PDF admiten dos tipos completamente diferentes de protección con contraseña:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Contraseña de apertura (contraseña de usuario).</strong> Esta contraseña es necesaria para abrir y ver el PDF. Cuando haces doble clic en el archivo, un cuadro de dialogo pide la contraseña antes de mostrar cualquier contenido. Sin esta contraseña, no puedes ver nada en el documento. Este es el tipo más difícil de manejar si se olvida.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Contraseña de permisos (contraseña de propietario).</strong> Esta contraseña restringe acciones específicas — imprimir, copiar texto, editar o anotar — pero aun te permite ver el PDF. Puedes abrir el archivo y leerlo, pero ciertas funciones están bloqueadas. Este tipo es mucho más fácil de manejar si se olvida.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                <strong>Prueba rápida:</strong> Puedes abrir y leer el PDF? Si es así, tienes una contraseña de permisos — y la herramienta <Link href="/es/desbloquear-pdf" className="text-[#14D8C4] hover:underline">Desbloquear PDF</Link> de PDF.it puede eliminar esas restricciones sin necesitar la contraseña.
              </p>
            </section>

            {/* Contraseña de permisos */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Si Olvidaste la Contraseña de Permisos</h2>
              <p className="text-slate-600 mb-4">
                Buenas noticias — este es el escenario fácil. Si puedes abrir y ver el PDF pero no puedes imprimir, copiar o editar, PDF.it puede eliminar esas restricciones:
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Sube el PDF a PDF.it",
                    desc: "Ve a la herramienta Desbloquear PDF y sube tu archivo. Como puedes ver el PDF, no hay contraseña de apertura bloqueando el acceso.",
                  },
                  {
                    title: "PDF.it elimina las restricciones",
                    desc: "La herramienta detecta y elimina automáticamente las restricciones de permisos — no se necesita la contraseña del propietario. Esto funciona porque las contraseñas de permisos solo controlan lo que el software permite, no el cifrado real del contenido.",
                  },
                  {
                    title: "Descarga el PDF sin restricciones",
                    desc: "Tu archivo ahora esta completamente desbloqueado. Puedes imprimir, copiar texto, editar, anotar y hacer cualquier otra cosa que necesites. Si quieres, usa Proteger PDF para establecer una nueva contraseña que recordaras.",
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

            {/* Contraseña de apertura */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Si Olvidaste la Contraseña de Apertura</h2>
              <p className="text-slate-600 mb-4">
                Esta es la situación más difícil. Si no puedes abrir el PDF en absoluto, el archivo esta cifrado y necesitas la contraseña exacta para descifrarlo. Esto es lo que puedes intentar:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Revisa tu correo electrónico.</strong> Busca en tu bandeja de entrada el nombre del archivo PDF o palabras clave como &quot;contraseña&quot; o &quot;protegido.&quot; La contraseña a menudo se envia en un correo separado del documento.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Revisa tu gestor de contraseñas.</strong> Si usas un gestor de contraseñas (1Password, LastPass, Bitwarden), busca entradas relacionadas con el PDF o el remitente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Prueba contraseñas comunes.</strong> Piensa en contraseñas que usas frecuentemente para documentos. Prueba tu nombre, fecha de nacimiento, nombre de empresa o contraseñas simples como &quot;1234&quot; o &quot;password.&quot;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Revisa chats y mensajes de texto.</strong> Si alguien te envio el PDF, busca en tu historial de WhatsApp, Slack, Teams o SMS la contraseña.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">5.</span>
                  <span><strong>Contacta al remitente.</strong> Si el PDF vino de un colega, cliente, banco o agencia gubernamental, pideles que reenvien la contraseña o proporcionen una version sin protección del documento.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                <strong>Importante:</strong> Ten cuidado con herramientas en línea que afirman &quot;descifrar&quot; contraseñas de PDF. Los PDF modernos usan cifrado AES de 256 bits, qué es esencialmente indescifrable. Cualquier herramienta que afirme eludir esto es ineficaz contra contraseñas fuertes o potencialmente insegura.
              </p>
            </section>

            {/* Como prevenir */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Como Evitar Perder Contraseñas de PDF en el Futuro</h2>
              <p className="text-slate-600 mb-4">
                Si creas regularmente PDF protegidos con contraseña, aquí hay pasos practicos para evitar quedar bloqueado de tus propios archivos:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Usa un gestor de contraseñas.</strong> Almacena cada contraseña de PDF en tu gestor de contraseñas con una nota sobre a que archivo pertenece. Este es el método más confiable.</li>
                <li>&#10003; <strong>Usa restricciones de permisos en lugar de contraseñas de apertura.</strong> Si solo necesitas prevenir la edición o impresión (no la visualización), usa una contraseña de permisos via <Link href="/es/proteger-pdf" className="text-[#14D8C4] hover:underline">Proteger PDF</Link>. Estas son más fáciles de eliminar si las olvidas.</li>
                <li>&#10003; <strong>Mantien una copia de respaldo sin protección.</strong> Antes de agregar una contraseña a un PDF, guarda una copia sin protección en un lugar seguro (carpeta cifrada, almacenamiento en la nube seguro).</li>
                <li>&#10003; <strong>Usa contraseñas consistentes.</strong> Para documentos no criticos, usa un formato de contraseña consistente que recordaras (pero nunca reutilices contraseñas de cuentas importantes).</li>
                <li>&#10003; <strong>Documenta tus contraseñas.</strong> Mantien una nota segura (digital o fisica, almacenada de forma segura) listando que archivos tienen contraseñas y cuales son.</li>
              </ul>
            </section>

            {/* Herramientas relacionadas */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Herramientas de PDF.it para Gestionar la Seguridad de PDF</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Desbloquear PDF — Eliminar Restricciones</h3>
                  <p className="text-slate-600">
                    Usa <Link href="/es/desbloquear-pdf" className="text-[#14D8C4] hover:underline">Desbloquear PDF</Link> para eliminar restricciones de permisos (bloqueos de impresión, copia, edición) de PDF. Funciona sin la contraseña del propietario para restricciones solo de permisos.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Proteger PDF — Agregar Tu Propia Contraseña</h3>
                  <p className="text-slate-600">
                    Usa <Link href="/es/proteger-pdf" className="text-[#14D8C4] hover:underline">Proteger PDF</Link> para agregar una nueva contraseña a cualquier PDF. Establece contraseñas de apertura, restricciones de permisos o ambas. Elige exactamente que acciones permitir o bloquear.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Aplanar PDF — Fijar Contenido en Su Lugar</h3>
                  <p className="text-slate-600">
                    Si quieres prevenir la edición sin usar contraseñas, <Link href="/es/aplanar-pdf" className="text-[#14D8C4] hover:underline">Aplanar PDF</Link> fusiona permanentemente los campos de formulario, anotaciones y capas en la página. El contenido se convierte en parte del fondo — no hay contraseña que recordar.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Necesitas Eliminar Restricciones de PDF?</h2>
            <p className="text-slate-300 mb-6">Si tu PDF tiene restricciones de permisos (no una contraseña de apertura), PDF.it puede eliminarlas al instante — gratis, sin necesidad de registro.</p>
            <Link
              href="/es/desbloquear-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Unlock className="h-5 w-5" /> Desbloquear PDF Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Desbloquear un PDF en Línea (Quitar Restricciones)", href: "/es/aprender/como-desbloquear-pdf" },
                { title: "Desbloquear un PDF para Imprimir (Quitar Restricciones de Impresión)", href: "/es/aprender/desbloquear-pdf-para-imprimir" },
                { title: "Desbloquear un PDF en Tu Teléfono (iPhone y Android)", href: "/es/aprender/desbloquear-pdf-en-movil" },
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
                { q: "Puedo abrir un PDF si olvide la contraseña?", a: "Depende del tipo de contraseña. Si el PDF tiene una contraseña de permisos (puedes verlo pero no editar/imprimir), PDF.it puede eliminar esas restricciones. Si tiene una contraseña de apertura (no puedes ver el archivo en absoluto), necesitaras recuperar o recordar la contraseña — no hay forma de eludir el cifrado fuerte." },
                { q: "Cual es la diferencia entre una contraseña de apertura y una de permisos?", a: "Una contraseña de apertura impide que veas el PDF por completo — ves un mensaje de contraseña cuando intentas abrirlo. Una contraseña de permisos te permite ver el PDF pero restringe acciones como imprimir, copiar y editar. Las contraseñas de permisos son mucho más fáciles de eliminar." },
                { q: "PDF.it puede descifrar una contraseña de apertura de PDF?", a: "No. PDF.it no descifra ni usa fuerza bruta en contraseñas de apertura. El cifrado moderno de PDF (AES de 256 bits) es extremadamente fuerte y no puede ser eludido. PDF.it solo puede eliminar restricciones de permisos o desbloquear PDF cuando proporcionas la contraseña correcta." },
                { q: "Como puedo recuperar una contraseña de PDF olvidada?", a: "Revisa tu correo electrónico buscando el mensaje original que contenia la contraseña. Busca en las contraseñas guardadas de tu navegador. Prueba contraseñas comunes que uses. Verifica si la contraseña fue compartida en un chat o mensaje de texto. Si el PDF es de una organización, contactalos para obtener la contraseña." },
                { q: "Puedo eliminar restricciones de permisos sin contraseña?", a: "Si, en muchos casos. Si puedes abrir y ver el PDF (sin contraseña de apertura), PDF.it puede eliminar las restricciones de permisos como bloqueos de impresión, copia y edición sin necesitar la contraseña del propietario." },
                { q: "Como evito perder mi contraseña de PDF en el futuro?", a: "Usa un gestor de contraseñas para almacenar contraseñas de PDF. Mantien un registro de que archivos están protegidos con contraseña y que contraseñas usaste. Considera usar restricciones de permisos en lugar de contraseñas de apertura cuando solo necesites controlar la edición e impresión." },
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

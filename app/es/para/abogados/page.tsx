import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import type { Metadata } from "next"
import { Scale, Shield, FileSignature, EyeOff, FileSearch, GitCompare, Lock, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Herramientas PDF para Abogados — Redactar, Firmar y Comparar Documentos Legales | PDF.it",
  description:
    "Herramientas PDF creadas para equipos legales. Redacta de forma permanente datos privilegiados, firma electrónicamente contratos, compara versiones de documentos y protege escritos con contraseña. Los archivos se eliminan inmediatamente después de descargarlos.",
  keywords: [
    "herramientas PDF para abogados",
    "redacción de PDF para abogados",
    "firma electrónica de documentos legales",
    "comparar versiones de PDF abogados",
    "proteger PDF legal con contraseña",
    "PDF para despachos jurídicos",
    "alternativa a numeración Bates",
    "redacción de documentos privilegiados",
    "herramientas PDF para escritos judiciales",
    "alternativa a Adobe Acrobat para abogados",
  ],
  openGraph: {
    title: "Herramientas PDF para Abogados — Redactar, Firmar y Comparar Documentos Legales | PDF.it",
    description:
      "Herramientas PDF creadas para equipos legales. Redacta de forma permanente datos privilegiados, firma electrónicamente contratos, compara versiones y protege escritos con contraseña.",
    url: "https://pdf.it.com/es/para/abogados",
    siteName: "PDF.it",
    images: [{ url: "https://pdf.it.com/og-logo.png", width: 1736, height: 846, alt: "PDF.it para Abogados" }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Herramientas PDF para Abogados — Redactar, Firmar y Comparar Documentos Legales",
    description:
      "Redacta datos privilegiados, firma contratos electrónicamente, compara versiones y protege escritos. Los archivos se eliminan inmediatamente después de descargarlos.",
    images: ["https://pdf.it.com/og-logo.png"],
  },
  alternates: {
    canonical: "https://pdf.it.com/es/para/abogados",
    languages: {
      en: "https://pdf.it.com/for/lawyers",
      es: "https://pdf.it.com/es/para/abogados",
      pt: "https://pdf.it.com/br/para/advogados",
    },
  },
}

const faqs = [
  {
    q: "¿La redacción de PDF.it es permanente?",
    a: "Sí. Nuestra herramienta de redacción elimina de forma permanente el texto y las imágenes seleccionadas del PDF: no se limita a cubrirlos con una caja negra. Después de redactar, el contenido desaparece del archivo, lo que significa que la contraparte no puede copiar y pegar texto oculto ni inspeccionar el objeto subyacente.",
  },
  {
    q: "¿Puedo usar PDF.it para escritos judiciales?",
    a: "Sí. PDF.it produce PDFs conformes a los estándares y aptos para la mayoría de los sistemas de presentación electrónica de los tribunales. Puedes aplanar campos de formulario, redactar contenido privilegiado, proteger anexos sensibles con contraseña y comprimir archivos por debajo de los límites de tamaño que imponen los portales judiciales.",
  },
  {
    q: "¿PDF.it almacena mis documentos?",
    a: "No. Los archivos se procesan en tiempo real y se eliminan en cuanto descargas el resultado. Todas las transferencias están cifradas con SSL. Nunca almacenamos, leemos, indexamos ni compartimos tus documentos.",
  },
  {
    q: "¿Puedo comparar dos versiones de un contrato?",
    a: "Sí — nuestra herramienta de comparación de PDF muestra las diferencias en paralelo entre dos versiones, resaltando el texto modificado, agregado y eliminado. Es útil para el redlining de contratos, las revisiones con marcas y para confirmar que las ediciones de la contraparte coincidan con lo que negociaste.",
  },
  {
    q: "¿Qué plan debería elegir un abogado independiente o un despacho pequeño?",
    a: "El plan Business cubre la mayoría de los flujos de trabajo legales: redacción, firma electrónica, comparación de PDF, archivos de hasta 1GB y extracción de tablas para cronogramas de descubrimiento. Los despachos más grandes que manejan descubrimiento de alto volumen deberían considerar Enterprise para los 2,000 páginas/mes de extracción de tablas y la cola de procesamiento prioritaria.",
  },
]

export default function ParaAbogadosPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <HeaderEs />
      <main>
        {/* ── Hero ── */}
        <section
          className="text-white py-16 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%),
              #0E0F1E
            `,
          }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
            <filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#heroGrain)" />
          </svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)",
                }}
              >
                <Scale className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Herramientas PDF Creadas para Equipos Legales</h1>
              <p className="text-xl text-slate-300 mb-8">
                Redacta contenido privilegiado, firma contratos electrónicamente, compara revisiones y prepara escritos judiciales — sin instalar Acrobat. Los archivos se eliminan inmediatamente después de descargarlos.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/es/registro"
                  className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-6 rounded-xl transition-colors"
                >
                  Comenzar prueba gratis <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
                <Link
                  href="/es/precios"
                  className="inline-flex items-center justify-center border border-slate-600 text-white hover:bg-slate-800 font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  Ver precios
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Problem ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-black text-slate-900 mb-4 text-center">Los Problemas Documentales que los Equipos Legales Enfrentan a Diario</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center mb-10">
              La mayor parte del trabajo con documentos legales es repetitivo, urgente y de alto riesgo. Una redacción que se escapa, una confusión de versiones o un escrito que excede el límite de tamaño del portal puede arruinar todo un día. PDF.it resuelve los cinco problemas que más golpean a los despachos jurídicos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Redacción que realmente elimina el texto", desc: "Las cajas negras dibujadas en Word o Preview no eliminan el contenido subyacente — la contraparte muchas veces puede recuperarlo. La redacción permanente a nivel de objeto sí importa." },
                { title: "Confusión de versiones en contratos largos", desc: "Cuando una negociación tiene cinco redlines entre tres contrapartes, rastrear a simple vista qué cambió entre la v4 y la v5 es lento y propenso a errores." },
                { title: "Límites de tamaño de los portales judiciales", desc: "La mayoría de los portales judiciales (CM/ECF, PACER y los estatales) limitan las cargas entre 10MB y 50MB. Los anexos suelen exceder el límite en el primer intento." },
                { title: "Cadenas de firma que tardan días", desc: "Imprimir, firmar, escanear y enviar un contrato por correo es media jornada de productividad perdida por cada parte." },
                { title: "Cronogramas de descubrimiento atrapados en PDFs", desc: "Las tablas dentro de producciones escaneadas o listas de anexos exportadas hay que volver a tipearlas en Excel cuando los datos subyacentes no son legibles por máquina." },
                { title: "Contenido privilegiado enviado en formatos editables", desc: "Los documentos de Word y los PDFs sin bloqueo se pueden alterar después de enviarlos. La protección con contraseña y el aplanado bloquean el archivo." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl p-6 bg-white border border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The Core Tools ── */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-black text-white mb-4 text-center">Las Cinco Herramientas que Usarás Cada Semana</h2>
            <p className="text-lg text-slate-300 leading-relaxed text-center max-w-3xl mx-auto mb-10">
              Cada herramienta a continuación funciona en tu navegador. Sin instalaciones, sin plugins, sin almacenamiento de archivos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: EyeOff, title: "Redacción de PDF", desc: "Elimina de forma permanente nombres, RFC/CURP, números de cuenta y texto privilegiado de cualquier PDF. El contenido redactado se borra del archivo — no solo se cubre visualmente.", href: "/es/redaccion-pdf", cta: "Redactar un PDF" },
                { icon: FileSignature, title: "Firma Electrónica", desc: "Envía contratos para firma en segundos. Firmas solo de sesión — nunca almacenamos bibliotecas reutilizables de firmas en nuestros servidores.", href: "/es/firma-electronica", cta: "Firmar un documento" },
                { icon: GitCompare, title: "Comparar PDF", desc: "Diferencias en paralelo entre dos versiones de PDF. Texto modificado, agregado y eliminado resaltado para que puedas hacer redline en minutos.", href: "/es/comparar-pdf", cta: "Comparar versiones" },
                { icon: Lock, title: "Proteger con Contraseña y Encriptar", desc: "Encriptación AES-256 en cualquier PDF antes de que salga de tu escritorio. Aplana formularios para que el destinatario no pueda editar los campos.", href: "/es/encriptar-pdf", cta: "Proteger un PDF" },
                { icon: FileSearch, title: "Extracción de Tablas a Excel", desc: "Extrae listas de anexos, cronogramas de descubrimiento y tablas de declaraciones desde PDFs directamente a XLSX. Funciona también con documentos escaneados.", href: "/es/extraccion-de-tablas", cta: "Extraer tablas" },
                { icon: Shield, title: "Comprimir para Presentación Electrónica", desc: "Reduce los anexos para que entren en los límites de los portales judiciales sin que los documentos escaneados queden ilegibles.", href: "/es/comprimir-pdf", cta: "Comprimir un PDF" },
              ].map((tool) => (
                <div
                  key={tool.title}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <div
                    className="rounded-[11px] p-6 h-full"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <tool.icon className="h-6 w-6 text-[#14D8C4]" />
                      <h3 className="text-lg font-bold text-white">{tool.title}</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{tool.desc}</p>
                    <Link href={tool.href} className="inline-flex items-center text-sm font-semibold text-[#14D8C4] hover:text-[#2EE6D6]">
                      {tool.cta} <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Workflows ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-black text-slate-900 mb-4 text-center">Cuatro Flujos de Trabajo Reales</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center mb-10">
              Estas son las secuencias exactas que los despachos pequeños y los equipos legales internos ejecutan en PDF.it cada semana.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Redactar una producción de cliente",
                  steps: [
                    "Sube el PDF a /es/redaccion-pdf.",
                    "Selecciona los nombres, números de cuenta y texto privilegiado a eliminar.",
                    "Aplica las redacciones — el contenido se borra a nivel de objeto, no se cubre.",
                    "Descarga el PDF redactado. El original nunca sale de tu navegador.",
                  ],
                },
                {
                  title: "Comparar revisiones de un contrato",
                  steps: [
                    "Abre /es/comparar-pdf y sube la v4 y la v5 del contrato.",
                    "Revisa las diferencias en paralelo — texto agregado, eliminado y modificado resaltado.",
                    "Exporta un resumen de los cambios para tu memo de redline.",
                  ],
                },
                {
                  title: "Preparar un escrito para el portal judicial",
                  steps: [
                    "Une el escrito y los anexos en /es/unir-pdf.",
                    "Comprime el archivo combinado en /es/comprimir-pdf para quedar bajo el límite de 50MB del portal.",
                    "Aplana cualquier campo rellenable para que el tribunal no pueda editar el formulario por accidente.",
                    "Sube al portal en una sola carga en lugar de dividir en partes.",
                  ],
                },
                {
                  title: "Firmar un acuerdo de confidencialidad con una contraparte",
                  steps: [
                    "Abre /es/firma-electronica y sube el acuerdo.",
                    "Firma con una firma solo de sesión — sin biblioteca almacenada en el servidor.",
                    "Envía el PDF firmado por correo a la contraparte. Protégelo con contraseña primero si el acuerdo es sensible.",
                  ],
                },
              ].map((w) => (
                <div key={w.title} className="rounded-xl p-6 bg-white border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{w.title}</h3>
                  <ol className="space-y-2">
                    {w.steps.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#14D8C4]/15 text-[#0B9B8B] font-bold text-xs flex items-center justify-center">{i + 1}</span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Plan Pick ── */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.04) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-black text-white mb-4 text-center">¿Qué Plan Conviene a un Equipo Legal?</h2>
            <p className="text-lg text-slate-300 leading-relaxed text-center mb-10">
              La redacción, la firma electrónica y la comparación de PDF son funciones del nivel Business. La mayoría de los despachos pequeños y equipos internos terminan ahí.
            </p>
            <div
              className="rounded-xl p-[1px]"
              style={{ background: "linear-gradient(135deg, rgba(107,124,255,0.5), rgba(20,216,196,0.3), rgba(107,124,255,0.35), rgba(107,124,255,0.4))" }}
            >
              <div
                className="rounded-[11px] p-8"
                style={{
                  background: `
                    radial-gradient(ellipse 40% 30% at 50% 0%, rgba(107,124,255,0.06) 0%, transparent 50%),
                    radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%),
                    rgba(255, 255, 255, 0.07)
                  `,
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "inset 0 -1px 1px rgba(107,124,255,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                }}
              >
                <div className="flex flex-wrap items-baseline gap-3 mb-6">
                  <h3 className="text-2xl font-bold text-white">Business</h3>
                  <span className="text-[#6B7CFF] font-semibold">$13.99/mes</span>
                  <span className="text-slate-400 text-sm">— recomendado para abogados</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Redacción de PDF (permanente, a nivel de objeto)",
                    "Firma electrónica con firmas solo de sesión",
                    "Comparar PDF (diferencias en paralelo)",
                    "Protección con contraseña y encriptación AES-256",
                    "Extracción de tablas — 200 páginas/mes",
                    "Archivos de hasta 1GB",
                    "Conversiones ilimitadas",
                    "Procesamiento por lotes",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#14D8C4] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/es/registro"
                    className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-6 rounded-xl transition-colors"
                  >
                    Comenzar prueba gratis de 30 días
                  </Link>
                  <Link
                    href="/es/precios"
                    className="inline-flex items-center justify-center border border-slate-600 text-white hover:bg-slate-800 font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    Comparar todos los planes
                  </Link>
                </div>
                <p className="text-xs text-slate-400 mt-4">¿Descubrimiento de alto volumen? Enterprise desbloquea 2,000 páginas/mes de extracción de tablas + cola prioritaria.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Privacy & Compliance ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="rounded-xl p-8 bg-white border border-slate-200">
              <div className="flex items-start gap-4 mb-4">
                <Shield className="h-8 w-8 text-[#14D8C4] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-2">Privilegio y Confidencialidad, Integrados</h2>
                  <p className="text-slate-600 leading-relaxed">
                    PDF.it procesa tus archivos en tiempo real y los elimina en cuanto descargas el resultado. Nunca almacenamos, leemos, indexamos ni compartimos documentos. Todas las transferencias están cifradas con SSL. Las redacciones son permanentes y a nivel de objeto, no superposiciones cosméticas.
                  </p>
                </div>
              </div>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                {[
                  "Archivos eliminados inmediatamente después de descargarlos",
                  "Transferencias cifradas con SSL",
                  "Encriptación AES-256 en PDFs protegidos con contraseña",
                  "Sin bibliotecas reutilizables de firmas almacenadas en el servidor",
                  "Sin almacenamiento de archivos, jamás",
                  "Sin indexación, sin analítica sobre el contenido de tus documentos",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#14D8C4] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-xl border border-slate-200 bg-slate-50 p-5 group">
                  <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-slate-900">
                    <span>{f.q}</span>
                    <span className="text-[#14D8C4] text-xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-4">30 Días de Plan Business, Gratis</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Empieza con el nivel Business completo — redacción, firma electrónica, comparación, extracción de tablas, archivos de 1GB. Sin cargo durante 30 días. Cancela cuando quieras.
            </p>
            <Link
              href="/es/registro"
              className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 px-8 rounded-xl text-lg transition-colors"
            >
              Comenzar prueba gratis <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}

import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import type { Metadata } from "next"
import { Shield, FileOutput, Lock, Zap, GraduationCap, Building, Briefcase, Scale, BookOpen, Home } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Acerca de PDF.it — Herramientas PDF en Linea con Privacidad para Equipos e Individuos",
  description:
    "PDF.it es una plataforma PDF en el navegador. Convierte, comprime, firma, redacta y automatiza PDFs — los archivos se eliminan inmediatamente despues de la descarga. Planes Gratis, Pro, Business y Enterprise disponibles.",
  keywords: ["PDF para profesionales", "PDF para abogados", "PDF para contadores", "PDF para estudiantes", "PDF para freelancers", "PDF para profesores", "PDF para inmobiliarias", "PDF para recursos humanos", "PDF para salud", "PDF para pequenas empresas", "alternativa a iLovePDF", "alternativa a SmallPDF", "alternativa a Adobe Acrobat", "herramientas PDF seguras", "PDF sin registro", "PDF con privacidad"],
  openGraph: {
    title: "Acerca de PDF.it — Herramientas PDF en Linea con Privacidad para Equipos e Individuos",
    description:
      "PDF.it es una plataforma PDF en el navegador. Convierte, comprime, firma, redacta y automatiza PDFs — los archivos se eliminan inmediatamente despues de la descarga.",
    url: "https://pdf.it.com/es/acerca",
    siteName: "PDF.it",
    images: [{ url: "https://pdf.it.com/og-logo.png", width: 1736, height: 846, alt: "PDF.it — Acerca" }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acerca de PDF.it — Herramientas PDF en Linea con Privacidad para Equipos e Individuos",
    description:
      "PDF.it es una plataforma PDF en el navegador. Convierte, comprime, firma, redacta y automatiza PDFs — los archivos se eliminan inmediatamente despues de la descarga.",
    images: ["https://pdf.it.com/og-logo.png"],
  },
  alternates: {
    canonical: "https://pdf.it.com/es/acerca",
    languages: {
      en: "https://pdf.it.com/about",
      es: "https://pdf.it.com/es/acerca",
      pt: "https://pdf.it.com/br/sobre",
    },
  },
}

export default function AcercaPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        {/* ── 1. Hero ── */}
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
                <Shield className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Acerca de PDF.it — Creado para Profesionales, Elegido por Profesionales</h1>
              <p className="text-xl text-slate-300">
                PDF.it es una plataforma PDF en el navegador creada para personas, equipos y organizaciones. Convierte, comprime, firma, redacta y automatiza — tus archivos se procesan y eliminan de inmediato. Nunca almacenamos tus documentos.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. Mision + Privacidad ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              PDF.it te ofrece un conjunto completo de herramientas PDF que funcionan directamente en el navegador. Convierte documentos, comprime archivos, agrega firmas electronicas, redacta datos sensibles, extrae tablas y automatiza flujos recurrentes — todo sin instalar software. La privacidad esta integrada en cada paso: tus archivos se procesan en tiempo real y se eliminan en cuanto descargas el resultado.
            </p>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Archivos eliminados inmediatamente despues de la descarga</li>
              <li className="flex items-center gap-2">✓ Transferencias cifradas con SSL</li>
              <li className="flex items-center gap-2">✓ Sin almacenamiento de archivos — nunca</li>
              <li className="flex items-center gap-2">✓ Sin necesidad de cuenta para herramientas gratuitas</li>
            </ul>
          </div>
        </section>

        {/* ── 3. Que puedes hacer ── */}
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-black text-white mb-8 text-center">Lo que puedes hacer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Convertir y comprimir",
                  desc: "Convierte PDFs a Word, Excel, JPG, PNG, TXT y mas. Comprime archivos para email y limites de subida. Une, divide, rota y aplana — todo en tu navegador.",
                },
                {
                  title: "Firmar, proteger y redactar",
                  desc: "Agrega firmas electronicas, protege documentos con contrasena y redacta informacion sensible de forma permanente. Agrega marcas de agua a tus PDFs para branding y control documental.",
                },
                {
                  title: "Automatizar y extraer",
                  desc: "Encadena multiples herramientas PDF en flujos automatizados. Extrae tablas de PDFs a hojas de calculo Excel. Ejecuta OCR para hacer buscables los documentos escaneados.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
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
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Planes ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-black text-slate-900 mb-4 text-center">Planes que crecen contigo</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center max-w-3xl mx-auto mb-10">
              Empieza gratis y actualiza solo cuando crezca tu volumen documental, el tamano de tus archivos o la complejidad de tus flujos.
            </p>

            <div
              className="rounded-2xl p-8"
              style={{
                background: `
                  radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.06) 0%, transparent 50%),
                  radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.04) 0%, transparent 50%),
                  #0E0F1E
                `,
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {/* Gratis */}
                <div className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(148,163,184,0.4), rgba(148,163,184,0.2), rgba(148,163,184,0.3))" }}>
                  <div className="rounded-[11px] p-6 h-full" style={{ background: "radial-gradient(ellipse 70% 60% at 95% 90%, rgba(148,163,184,0.06) 0%, transparent 70%), rgba(255, 255, 255, 0.05)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(148,163,184,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <h3 className="text-lg font-bold text-white mb-1">Gratis</h3>
                    <p className="text-slate-400 font-semibold text-sm mb-4">$0/mes</p>
                    <ul className="space-y-2">
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-slate-400 mt-0.5">&#10003;</span><span>10 conversiones por dia</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-slate-400 mt-0.5">&#10003;</span><span>Archivos hasta 25MB</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-slate-400 mt-0.5">&#10003;</span><span>Herramientas PDF basicas (comprimir, unir, dividir, rotar, convertir)</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-slate-400 mt-0.5">&#10003;</span><span>Procesamiento de un solo archivo</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-slate-400 mt-0.5">&#10003;</span><span>Velocidad estandar</span></li>
                    </ul>
                  </div>
                </div>

                {/* Pro — dorado */}
                <div className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(214,179,106,0.5), rgba(20,216,196,0.3), rgba(214,179,106,0.3), rgba(214,179,106,0.4))" }}>
                  <div className="rounded-[11px] p-6 h-full relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(214,179,106,0.05) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(214,179,106,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-b-md text-[9px] font-bold uppercase tracking-widest whitespace-nowrap" style={{ background: "linear-gradient(135deg, #D6B36A, #E0C27A)", color: "#0E0F1E" }}>Mas Popular</div>
                    <h3 className="text-lg font-bold text-white mb-1 mt-3">Pro</h3>
                    <p className="text-[#E0C27A] font-semibold text-sm mb-4">$3.99/mes</p>
                    <p className="text-[#6B7CFF] text-xs font-medium mb-3">Todo en Gratis, mas:</p>
                    <ul className="space-y-2">
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#E0C27A] mt-0.5">&#10003;</span><span>Conversiones ilimitadas</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#E0C27A] mt-0.5">&#10003;</span><span>Archivos hasta 200MB</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#E0C27A] mt-0.5">&#10003;</span><span>Todas las herramientas PDF (OCR, codigo QR, PDF a Word/Excel/PowerPoint)</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#E0C27A] mt-0.5">&#10003;</span><span>Procesamiento por lotes (multiples archivos a la vez)</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#E0C27A] mt-0.5">&#10003;</span><span>Velocidad de procesamiento prioritaria</span></li>
                    </ul>
                  </div>
                </div>

                {/* Business — zafiro */}
                <div className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(107,124,255,0.5), rgba(20,216,196,0.3), rgba(107,124,255,0.35), rgba(107,124,255,0.4))" }}>
                  <div className="rounded-[11px] p-6 h-full relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(107,124,255,0.06) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(107,124,255,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-b-md text-[9px] font-bold uppercase tracking-widest whitespace-nowrap" style={{ background: "linear-gradient(135deg, #6B7CFF, #8B9AFF)", color: "#0E0F1E" }}>Ideal para Equipos</div>
                    <h3 className="text-lg font-bold text-white mb-1 mt-3">Business</h3>
                    <p className="text-[#6B7CFF] font-semibold text-sm mb-4">$13.99/mes</p>
                    <p className="text-[#6B7CFF] text-xs font-medium mb-3">Todo en Pro, mas:</p>
                    <ul className="space-y-2">
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#6B7CFF] mt-0.5">&#10003;</span><span>Archivos hasta 1GB</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#6B7CFF] mt-0.5">&#10003;</span><span>Extraccion de tablas a Excel (200 paginas/mes)</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#6B7CFF] mt-0.5">&#10003;</span><span>Comparacion de PDF (diferencias lado a lado)</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#6B7CFF] mt-0.5">&#10003;</span><span>Firma electronica de documentos</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#6B7CFF] mt-0.5">&#10003;</span><span>Redaccion de PDF (eliminacion permanente)</span></li>
                    </ul>
                  </div>
                </div>

                {/* Enterprise — platino */}
                <div className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(192,197,206,0.5), rgba(20,216,196,0.3), rgba(192,197,206,0.35), rgba(192,197,206,0.4))" }}>
                  <div className="rounded-[11px] p-6 h-full relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(192,197,206,0.06) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(192,197,206,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-b-md text-[9px] font-bold uppercase tracking-widest whitespace-nowrap" style={{ background: "linear-gradient(135deg, #C0C5CE, #14D8C4)", color: "#0E0F1E" }}>Mejor Valor</div>
                    <h3 className="text-lg font-bold text-white mb-1 mt-3">Enterprise</h3>
                    <p className="text-[#C0C5CE] font-semibold text-sm mb-4">$49.99/mes</p>
                    <p className="text-[#6B7CFF] text-xs font-medium mb-3">Todo en Business, mas:</p>
                    <ul className="space-y-2">
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#C0C5CE] mt-0.5">&#10003;</span><span>Extraccion de tablas a Excel (2,000 paginas/mes)</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#C0C5CE] mt-0.5">&#10003;</span><span>Automatizacion de flujos de trabajo</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#C0C5CE] mt-0.5">&#10003;</span><span>Plantillas de flujo personalizadas</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#C0C5CE] mt-0.5">&#10003;</span><span>Cola de procesamiento prioritario</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#C0C5CE] mt-0.5">&#10003;</span><span>Soporte por email dedicado (respuesta en 24h)</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Disenado para ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Disenado para flujos de trabajo reales</h2>

            <div
              className="rounded-2xl p-8"
              style={{
                background: `
                  radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.06) 0%, transparent 50%),
                  radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.04) 0%, transparent 50%),
                  #0E0F1E
                `,
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: GraduationCap,
                    title: "PDF para Estudiantes e Investigadores",
                    desc: "Convierte trabajos, extrae tablas, comprime documentos grandes y ejecuta OCR sobre apuntes escaneados. La herramienta PDF ideal para estudiantes de todos los niveles.",
                  },
                  {
                    icon: Building,
                    title: "PDF para Profesionales y Equipos",
                    desc: "Procesa facturas, contratos y paquetes de onboarding. Usa firma electronica, redaccion y automatizacion de flujos — creado para profesionales que manejan documentos a diario.",
                  },
                  {
                    icon: Briefcase,
                    title: "PDF para Freelancers y Candidatos",
                    desc: "Prepara entregables, crea curriculos, agrega marcas de agua y protege archivos con contrasena. Elegido por freelancers que necesitan herramientas PDF rapidas y confiables.",
                  },
                  {
                    icon: Scale,
                    title: "PDF para Abogados y Contadores",
                    desc: "Redacta datos sensibles, extrae tablas de cumplimiento y automatiza flujos documentales. Disenado para abogados, contadores y equipos que exigen precision.",
                  },
                  {
                    icon: BookOpen,
                    title: "PDF para Profesores y Educadores",
                    desc: "Convierte planes de clase, comprime material para email, une documentos de curso y haz escaneados buscables con OCR. Una mejor alternativa a iLovePDF y SmallPDF para educadores.",
                  },
                  {
                    icon: Home,
                    title: "PDF para Recursos Humanos e Inmobiliarias",
                    desc: "Procesa documentos de onboarding, firma contratos online sin registro, procesa contratos de arrendamiento por lotes y extrae datos de formularios. Herramientas PDF seguras sin almacenamiento — creadas para pequenas empresas en recursos humanos, inmobiliarias y salud.",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
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
                        <card.icon className="h-6 w-6 text-[#14D8C4]" />
                        <h3 className="text-lg font-bold text-white">{card.title}</h3>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. Compromiso de privacidad ── */}
        <section
          className="py-16 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 30% 100%, rgba(10,74,92,0.35) 0%, transparent 60%),
              radial-gradient(ellipse 60% 50% at 70% 0%, rgba(30,111,217,0.20) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 90% 80%, rgba(232,129,58,0.10) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
            <filter id="privacyGrainEs"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#privacyGrainEs)" />
          </svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
            <div
              className="rounded-xl p-[1px]"
              style={{
                background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
              }}
            >
              <div
                className="rounded-[11px] p-8 md:p-10 text-center"
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
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                    boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)",
                  }}
                >
                  <Shield className="h-8 w-8 text-[#14D8C4]" />
                </div>
                <h2 className="text-2xl font-black text-white mb-4">Tus documentos son tu asunto</h2>
                <p className="text-slate-400 leading-relaxed">
                  PDF.it procesa tus archivos en tiempo real y los elimina en cuanto descargas el resultado. Nunca almacenamos, leemos, indexamos ni compartimos tus documentos. Todas las transferencias estan cifradas con SSL. Tu privacidad no es una funcion — es la base sobre la que construimos esta plataforma.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. CTA ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Empieza a convertir gratis</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Sin necesidad de cuenta para herramientas gratuitas. Actualiza cuando necesites acceso ilimitado, archivos mas grandes o flujos avanzados.
            </p>
            <Link href="/es#tools">
              <button className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 px-8 rounded-xl text-lg transition-colors">
                Empezar gratis
              </button>
            </Link>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}

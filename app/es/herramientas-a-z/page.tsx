import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import type { Metadata } from "next"
import {
  FileText,
  FileSpreadsheet,
  Presentation,
  Image,
  Merge,
  Split,
  RotateCw,
  FileArchiveIcon as Compress,
  Lock,
  Unlock,
  Droplets,
  Scan,
  Camera,
  Mail,
  Type,
  QrCode,
  ImageDown,
  Layers,
  Upload,
  PenTool,
  Shield,
  ArrowLeftRight,
  Repeat,
  ArrowRight,
  Search,
  Globe,
  Target,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Todas las Herramientas PDF A–Z | PDF.it",
  description:
    "Explora todas las herramientas de PDF.it en orden alfabetico. Convierte, comprime, une, divide, protege y mas.",
  alternates: {
    canonical: "https://pdf.it.com/es/herramientas-a-z",
    languages: {
      en: "https://pdf.it.com/tools-a-z",
      es: "https://pdf.it.com/es/herramientas-a-z",
      pt: "https://pdf.it.com/br/ferramentas-a-z",
    },
  },
}

const tools = [
  { name: "Analizador ATS de Curriculum", description: "Analisis de curriculum con IA y puntuacion de compatibilidad ATS.", icon: Target, href: "/es/optimizador-ats", tier: "PRO" },
  { name: "Automatizacion de Flujos", description: "Encadena multiples herramientas PDF en un flujo automatizado.", icon: Repeat, href: "/es/automatizacion", tier: "BUSINESS" },
  { name: "Codigo QR", description: "Genera codigos QR desde cualquier URL o texto al instante.", icon: QrCode, href: "/es/codigo-qr", tier: "PRO" },
  { name: "Comparar PDF", description: "Compara dos PDFs lado a lado y resalta las diferencias.", icon: ArrowLeftRight, href: "/es/comparar-pdf", tier: "BUSINESS" },
  { name: "Comprimir PDF", description: "Reduce el tamano del archivo con compresion Ligera, Media o Extrema.", icon: Compress, href: "/es/comprimir-pdf", tier: "FREE" },
  { name: "Comprimir PDF para Email", description: "Reduce PDFs para cumplir los limites de Gmail, Outlook y Yahoo.", icon: Mail, href: "/es/comprimir-pdf-para-email", tier: "FREE" },
  { name: "Convertir Excel a PDF", description: "Convierte hojas de calculo en PDFs compartibles.", icon: FileSpreadsheet, href: "/es/excel-a-pdf", tier: "PRO" },
  { name: "Convertir JPG a PDF", description: "Convierte imagenes JPG a documentos PDF.", icon: Image, href: "/es/jpg-a-pdf", tier: "FREE" },
  { name: "Convertir PDF a Excel", description: "Extrae tablas de PDF a una hoja de calculo Excel.", icon: FileSpreadsheet, href: "/es/pdf-a-excel", tier: "PRO" },
  { name: "Convertir PDF a JPG", description: "Convierte paginas PDF a imagenes JPG de alta calidad.", icon: Image, href: "/es/pdf-a-jpg", tier: "FREE" },
  { name: "Convertir PDF a PNG", description: "Convierte paginas PDF a imagenes PNG.", icon: Image, href: "/es/pdf-a-png", tier: "FREE" },
  { name: "Convertir PDF a PowerPoint", description: "Convierte paginas PDF en diapositivas de PowerPoint.", icon: Presentation, href: "/es/pdf-a-powerpoint", tier: "PRO" },
  { name: "Convertir PDF a Texto", description: "Extrae texto plano de archivos PDF.", icon: Type, href: "/es/pdf-a-texto", tier: "FREE" },
  { name: "Convertir PDF a Word", description: "Convierte PDF a un documento Word editable.", icon: FileText, href: "/es/pdf-a-word", tier: "PRO" },
  { name: "Convertir PNG a PDF", description: "Convierte imagenes PNG a documentos PDF.", icon: Image, href: "/es/png-a-pdf", tier: "FREE" },
  { name: "Convertir PowerPoint a PDF", description: "Convierte presentaciones a formato PDF.", icon: Presentation, href: "/es/powerpoint-a-pdf", tier: "PRO" },
  { name: "Convertir Word a PDF", description: "Convierte documentos Word a PDF al instante.", icon: FileText, href: "/es/word-a-pdf", tier: "PRO" },
  { name: "Desbloquear PDF", description: "Elimina las restricciones de contrasena de un PDF.", icon: Unlock, href: "/es/desbloquear-pdf", tier: "FREE" },
  { name: "Dividir PDF", description: "Divide un PDF en archivos separados.", icon: Split, href: "/es/dividir-pdf", tier: "FREE" },
  { name: "Escanear OCR", description: "Extrae texto buscable de PDFs escaneados.", icon: Scan, href: "/es/escaner-ocr", tier: "PRO" },
  { name: "Extraccion de Tablas", description: "Extrae tablas de PDFs directamente a hojas de calculo Excel.", icon: FileSpreadsheet, href: "/es/extraccion-de-tablas", tier: "BUSINESS" },
  { name: "Extraccion de Alto Volumen", description: "Extrae hasta 2,000 paginas de tablas al mes a Excel.", icon: FileSpreadsheet, href: "/es/extraccion-de-tablas", tier: "ENTERPRISE" },
  { name: "Extraer Imagenes", description: "Extrae fotos, logos y graficos de PDFs.", icon: ImageDown, href: "/es/extraer-imagenes-de-pdf", tier: "FREE" },
  { name: "Firma Electronica", description: "Agrega firmas electronicas legalmente vinculantes a PDFs.", icon: PenTool, href: "/es/firma-electronica", tier: "BUSINESS" },
  { name: "Limpiar Escaneo", description: "Convierte fotos de documentos del celular en PDFs limpios y profesionales.", icon: Camera, href: "/es/limpieza-escaneo", tier: "FREE" },
  { name: "Marca de Agua PDF", description: "Agrega marcas de agua de texto o imagen a PDFs.", icon: Droplets, href: "/es/marca-de-agua-pdf", tier: "PRO" },
  { name: "PDF Listo para Subir", description: "Arregla y optimiza PDFs para cualquier portal de carga en un clic.", icon: Upload, href: "/es/pdf-listo-para-subir", tier: "FREE" },
  { name: "Planar PDF", description: "Bloquea campos de formulario y anotaciones en un PDF plano.", icon: Layers, href: "/es/planar-pdf", tier: "FREE" },
  { name: "Proteger PDF", description: "Agrega proteccion con contrasena a tu PDF.", icon: Lock, href: "/es/proteger-pdf", tier: "FREE" },
  { name: "Redaccion PDF", description: "Elimina permanentemente texto y datos sensibles de PDFs.", icon: Shield, href: "/es/redaccion-pdf", tier: "BUSINESS" },
  { name: "Rotar PDF", description: "Corrige la orientacion de las paginas al instante.", icon: RotateCw, href: "/es/rotar-pdf", tier: "FREE" },
  { name: "Unir PDF", description: "Combina multiples PDFs en un solo archivo.", icon: Merge, href: "/es/unir-pdf", tier: "FREE" },
  { name: "URL a PDF", description: "Convierte cualquier pagina web publica en un documento PDF.", icon: Globe, href: "/es/url-a-pdf", tier: "PRO" },
  { name: "Plantillas de Flujos", description: "Flujos predefinidos para documentos legales, contables y de laboratorio.", icon: Layers, href: "/es/automatizacion", tier: "ENTERPRISE" },
]

const tierColors: Record<string, { badge: string; border: string; glow: string; check: string }> = {
  FREE: { badge: "rgba(148,163,184,0.15)", border: "rgba(148,163,184,0.3)", glow: "rgba(148,163,184,0.15)", check: "#94A3B8" },
  PRO: { badge: "rgba(214,179,106,0.15)", border: "rgba(214,179,106,0.4)", glow: "rgba(214,179,106,0.25)", check: "#E0C27A" },
  BUSINESS: { badge: "rgba(107,124,255,0.15)", border: "rgba(107,124,255,0.4)", glow: "rgba(107,124,255,0.3)", check: "#6B7CFF" },
  ENTERPRISE: { badge: "rgba(14,165,233,0.15)", border: "rgba(14,165,233,0.4)", glow: "rgba(14,165,233,0.25)", check: "#38BDF8" },
}

function TierBadge({ tier }: { tier: string }) {
  const c = tierColors[tier] || tierColors.FREE
  const labels: Record<string, string> = { FREE: "Gratis", PRO: "Pro", BUSINESS: "Business", ENTERPRISE: "Enterprise" }
  return (
    <span
      className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide whitespace-nowrap"
      style={{ background: c.badge, color: c.check, border: `1px solid ${c.border}` }}
    >
      {labels[tier] || "Gratis"}
    </span>
  )
}

export default function HerramientasAZPage() {
  const letters = [...new Set(tools.map((t) => t.name[0].toUpperCase()))].sort()
  const totalFree = tools.filter((t) => t.tier === "FREE").length
  const totalPro = tools.filter((t) => t.tier === "PRO").length
  const totalBusiness = tools.filter((t) => t.tier === "BUSINESS").length
  const totalEnterprise = tools.filter((t) => t.tier === "ENTERPRISE").length

  return (
    <div className="min-h-screen" style={{ background: "#0E0F1E" }}>
      <HeaderEs />
      <main>
        {/* Hero */}
        <section
          className="text-white py-20 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 50% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%),
              #0E0F1E
            `,
          }}
        >
          {/* Grain */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
            <filter id="azGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#azGrain)" />
          </svg>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{
                background: "rgba(20,216,196,0.08)",
                border: "1px solid rgba(20,216,196,0.25)",
                boxShadow: "0 0 12px rgba(20,216,196,0.1)",
              }}
            >
              <Search className="h-4 w-4 text-[#14D8C4]" />
              <span className="text-sm font-medium text-slate-300">{tools.length} herramientas disponibles</span>
            </div>
            <h1
              className="text-4xl lg:text-5xl font-black mb-4"
              style={{ letterSpacing: "-1.5px" }}
            >
              Herramientas PDF{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #14D8C4, #6B7CFF, #E8813A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                A–Z
              </span>
            </h1>
            <p className="text-lg max-w-xl mx-auto mb-8" style={{ color: "rgba(165,180,252,0.7)" }}>
              Todas las herramientas en un solo lugar, en orden alfabetico. Haz clic en una letra para saltar.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              {[
                { label: `${totalFree} Gratis`, color: "#94A3B8" },
                { label: `${totalPro} Pro`, color: "#E0C27A" },
                { label: `${totalBusiness} Business`, color: "#6B7CFF" },
                { label: `${totalEnterprise} Enterprise`, color: "#38BDF8" },
              ].map((pill) => (
                <div
                  key={pill.label}
                  className="rounded-lg px-4 py-2"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid ${pill.color}30`,
                    boxShadow: `0 0 12px ${pill.color}10`,
                  }}
                >
                  <span className="text-[11px] font-bold uppercase tracking-wide" style={{ color: pill.color }}>
                    {pill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sticky letter nav */}
        <nav
          className="sticky top-16 z-10"
          style={{
            background: "rgba(14,15,30,0.9)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-0.5 py-3 justify-center">
              {letters.map((letter) => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="w-10 h-10 flex items-center justify-center rounded-xl text-sm font-black transition-all duration-200"
                  style={{ color: "rgba(165,180,252,0.5)" }}
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Tool listing */}
        <section
          className="py-14"
          style={{
            background: `
              radial-gradient(ellipse 60% 30% at 50% 0%, rgba(20,216,196,0.03) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 50%, rgba(107,124,255,0.03) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            {letters.map((letter) => {
              const letterTools = tools.filter((t) => t.name[0].toUpperCase() === letter)
              return (
                <div key={letter} id={`letter-${letter}`} className="mb-14 scroll-mt-24 sm:scroll-mt-32">
                  {/* Letter header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, rgba(20,216,196,0.15), rgba(107,124,255,0.1))",
                        border: "1px solid rgba(20,216,196,0.2)",
                        color: "#14D8C4",
                        boxShadow: "0 0 16px rgba(20,216,196,0.12)",
                      }}
                    >
                      {letter}
                    </div>
                    <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(20,216,196,0.2), transparent)" }} />
                    <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "#6B7CFF" }}>
                      {letterTools.length} herramienta{letterTools.length !== 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* Tool cards */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    {letterTools.map((tool) => {
                      const Icon = tool.icon
                      const tc = tierColors[tool.tier] || tierColors.FREE
                      return (
                        <div
                          key={tool.href + tool.tier}
                          className="rounded-2xl p-[1px]"
                          style={{
                            background: `linear-gradient(135deg, ${tc.border}, rgba(20,216,196,0.2), ${tc.border})`,
                          }}
                        >
                          <Link
                            href={tool.href}
                            className="flex items-start gap-4 rounded-[15px] p-5 transition-all duration-300 group tool-card-hover"
                            style={{
                              background: "rgba(255,255,255,0.05)",
                              backdropFilter: "blur(12px)",
                              WebkitBackdropFilter: "blur(12px)",
                            }}
                          >
                            <div
                              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                              style={{
                                background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                                boxShadow: `0 0 20px ${tc.glow}`,
                              }}
                            >
                              <Icon className="h-5 w-5" style={{ color: tc.check }} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-white group-hover:text-[#14D8C4] transition-colors">{tool.name}</span>
                                <TierBadge tier={tool.tier} />
                              </div>
                              <p className="text-sm text-slate-400 leading-relaxed">{tool.description}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-[#14D8C4] flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 relative overflow-hidden">
          <div
            className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center relative z-10"
          >
            <div
              className="rounded-2xl p-10"
              style={{
                background: "linear-gradient(135deg, rgba(20,216,196,0.08), rgba(107,124,255,0.06), rgba(232,129,58,0.04))",
                border: "1px solid rgba(20,216,196,0.15)",
                boxShadow: "0 0 50px rgba(20,216,196,0.08), 0 8px 32px rgba(0,0,0,0.3)",
              }}
            >
              <h2 className="text-2xl font-black text-white mb-3">Listo para empezar?</h2>
              <p className="text-slate-400 mb-8">Elige cualquier herramienta o comienza con las mas populares.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/es/comprimir-pdf"
                  className="cta-primary inline-flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #14D8C4, #0FBFB0)",
                    color: "#0E0F1E",
                    boxShadow: "0 0 24px rgba(20,216,196,0.45), 0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  Comprimir PDF <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/es/unir-pdf"
                  className="inline-flex items-center justify-center gap-2 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  Unir PDF <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}

import Link from "next/link"
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
  Crown,
  QrCode,
  ImageDown,
  Layers,
  Upload,
  PenTool,
  Shield,
  ArrowLeftRight,
  Repeat,
  Globe,
  Target,
  Sparkles,
  FilePlus,
  MessageCircle,
} from "lucide-react"

const categories = [
  {
    name: "Convertir DESDE PDF",
    description: "Transforma tus PDFs en formatos editables",
    tools: [
      {
        name: "PDF a JPG",
        description: "Convierte páginas PDF a imágenes JPG de alta calidad.",
        icon: Image,
        href: "/es/pdf-a-jpg",
        tier: "FREE" as const,
      },
      {
        name: "PDF a TXT",
        description: "Extrae texto plano de archivos PDF.",
        icon: Type,
        href: "/es/pdf-a-texto",
        tier: "FREE" as const,
      },
      {
        name: "PDF a PNG",
        description: "Convierte páginas PDF a imágenes PNG.",
        icon: Image,
        href: "/es/pdf-a-png",
        tier: "FREE" as const,
      },
      {
        name: "PDF a Word",
        description: "Convierte PDF a un documento Word editable.",
        icon: FileText,
        href: "/es/pdf-a-word",
        tier: "PRO" as const,
      },
      {
        name: "PDF a Excel",
        description: "Extrae tablas de PDF a hojas de cálculo Excel.",
        icon: FileSpreadsheet,
        href: "/es/pdf-a-excel",
        tier: "PRO" as const,
      },
      {
        name: "PDF a PowerPoint",
        description: "Convierte páginas PDF a diapositivas de PowerPoint.",
        icon: Presentation,
        href: "/es/pdf-a-powerpoint",
        tier: "PRO" as const,
      },
      {
        name: "Extraer Imágenes",
        description: "Extrae fotos, logos y gráficos de archivos PDF.",
        icon: ImageDown,
        href: "/es/extraer-imagenes-de-pdf",
        tier: "FREE" as const,
      },
    ],
  },
  {
    name: "Convertir A PDF",
    description: "Crea PDFs desde cualquier formato de documento",
    tools: [
      {
        name: "Word a PDF",
        description: "Convierte documentos Word a PDF al instante.",
        icon: FileText,
        href: "/es/word-a-pdf",
        tier: "PRO" as const,
      },
      {
        name: "Excel a PDF",
        description: "Convierte hojas de cálculo en PDFs compartibles.",
        icon: FileSpreadsheet,
        href: "/es/excel-a-pdf",
        tier: "PRO" as const,
      },
      {
        name: "PowerPoint a PDF",
        description: "Convierte presentaciones a formato PDF.",
        icon: Presentation,
        href: "/es/powerpoint-a-pdf",
        tier: "PRO" as const,
      },
      {
        name: "JPG a PDF",
        description: "Convierte imágenes JPG a documentos PDF.",
        icon: Image,
        href: "/es/jpg-a-pdf",
        tier: "FREE" as const,
      },
      {
        name: "PNG a PDF",
        description: "Convierte imágenes PNG a documentos PDF.",
        icon: Image,
        href: "/es/png-a-pdf",
        tier: "FREE" as const,
      },
      {
        name: "URL a PDF",
        description: "Convierte cualquier pagina web en un documento PDF.",
        icon: Globe,
        href: "/es/url-a-pdf",
        tier: "PRO" as const,
      },
    ],
  },
  {
    name: "Editar y Organizar",
    description: "Modifica y organiza tus documentos PDF",
    tools: [
      {
        name: "Unir PDF",
        description: "Combina varios PDFs en un solo archivo.",
        icon: Merge,
        href: "/es/unir-pdf",
        tier: "FREE" as const,
      },
      {
        name: "Dividir PDF",
        description: "Divide un PDF en archivos separados.",
        icon: Split,
        href: "/es/dividir-pdf",
        tier: "FREE" as const,
      },
      {
        name: "Rotar PDF",
        description: "Corrige la orientación de las páginas al instante.",
        icon: RotateCw,
        href: "/es/rotar-pdf",
        tier: "FREE" as const,
      },
      {
        name: "Aplanar PDF",
        description: "Bloquea campos de formulario y anotaciones en un PDF plano.",
        icon: Layers,
        href: "/es/aplanar-pdf",
        tier: "FREE" as const,
      },
    ],
  },
  {
    name: "Seguridad y Protección",
    description: "Asegura y protege tus documentos PDF",
    tools: [
      {
        name: "Proteger PDF",
        description: "Agrega protección con contraseña a tu PDF.",
        icon: Lock,
        href: "/es/proteger-pdf",
        tier: "FREE" as const,
      },
      {
        name: "Desbloquear PDF",
        description: "Elimina restricciones de contraseña de un PDF.",
        icon: Unlock,
        href: "/es/desbloquear-pdf",
        tier: "FREE" as const,
      },
      {
        name: "Marca de Agua PDF",
        description: "Agrega marcas de agua de texto o imagen a PDFs.",
        icon: Droplets,
        href: "/es/marca-de-agua-pdf",
        tier: "PRO" as const,
      },
    ],
  },
  {
    name: "Optimizar y Mejorar",
    description: "Mejora y optimiza tus archivos PDF",
    tools: [
      {
        name: "Comprimir PDF",
        description: "Reduce el tamaño del archivo con compresión Ligera, Media o Extrema.",
        icon: Compress,
        href: "/es/comprimir-pdf",
        tier: "FREE" as const,
      },
      {
        name: "Comprimir para Email",
        description: "Reduce PDFs para cumplir los límites de adjuntos de Gmail, Outlook y Yahoo.",
        icon: Mail,
        href: "/es/comprimir-pdf-para-email",
        tier: "FREE" as const,
      },
      {
        name: "PDF Listo para Subir",
        description: "Arregla y optimiza PDFs para cualquier portal de carga en un clic.",
        icon: Upload,
        href: "/es/pdf-listo-para-subir",
        tier: "FREE" as const,
      },
      {
        name: "Escáner OCR",
        description: "Extrae texto buscable de PDFs escaneados.",
        icon: Scan,
        href: "/es/escaner-ocr",
        tier: "PRO" as const,
      },
      {
        name: "Limpiar Escaneo",
        description: "Convierte fotos de documentos en PDFs limpios y profesionales.",
        icon: Camera,
        href: "/es/limpiar-escaneo",
        tier: "FREE" as const,
      },
    ],
  },
  {
    name: "Generar y Herramientas IA",
    description: "Herramientas con inteligencia artificial para crear y optimizar documentos",
    tools: [
      {
        name: "Generador de Código QR",
        description: "Genera códigos QR desde cualquier URL o texto al instante.",
        icon: QrCode,
        href: "/es/codigo-qr",
        tier: "PRO" as const,
      },
      {
        name: "Optimiza Tu Curriculum",
        description: "Sube tu curriculum, recibe una puntuacion y la IA lo arregla.",
        icon: Target,
        href: "/es/optimizador-ats",
        tier: "PRO" as const,
        hasAI: true,
      },
      {
        name: "Crear Curriculum",
        description: "Construye un curriculum profesional desde cero con IA. Descarga en Word.",
        icon: FilePlus,
        href: "/es/crear-curriculum",
        tier: "PRO" as const,
        hasAI: true,
      },
      {
        name: "Chat con PDF",
        description: "Haz preguntas y obtén respuestas con IA de cualquier documento PDF.",
        icon: MessageCircle,
        href: "/es/chat-con-pdf",
        tier: "BUSINESS" as const,
        hasAI: true,
      },
    ],
  },
  {
    name: "Herramientas Business y Enterprise",
    description: "Herramientas avanzadas para profesionales, equipos, bufetes y laboratorios",
    tools: [
      {
        name: "Automatización de Flujos",
        description: "Encadena múltiples herramientas PDF en un flujo automatizado.",
        icon: Repeat,
        href: "/es/automatizacion",
        tier: "BUSINESS" as const,
      },
      {
        name: "Extracción de Tablas",
        description: "Extrae tablas de PDFs directamente a hojas de cálculo Excel.",
        icon: FileSpreadsheet,
        href: "/es/extraccion-de-tablas",
        tier: "BUSINESS" as const,
      },
      {
        name: "Comparar PDF",
        description: "Compara dos PDFs lado a lado y resalta las diferencias.",
        icon: ArrowLeftRight,
        href: "/es/comparar-pdf",
        tier: "BUSINESS" as const,
      },
      {
        name: "Firma Electrónica",
        description: "Agrega firmas electrónicas legalmente válidas a PDFs.",
        icon: PenTool,
        href: "/es/firma-electronica",
        tier: "BUSINESS" as const,
      },
      {
        name: "Redacción de PDF",
        description: "Elimina permanentemente texto y datos sensibles de PDFs.",
        icon: Shield,
        href: "/es/redaccion-pdf",
        tier: "BUSINESS" as const,
      },
      {
        name: "Plantillas de Flujos",
        description: "Flujos predefinidos para documentos legales, contables y de laboratorio.",
        icon: Layers,
        href: "/es/automatizacion",
        tier: "ENTERPRISE" as const,
      },
      {
        name: "Extracción de Alto Volumen",
        description: "Extrae hasta 2,000 páginas de tablas al mes a Excel.",
        icon: FileSpreadsheet,
        href: "/es/extraccion-tablas-alto-volumen",
        tier: "ENTERPRISE" as const,
      },
    ],
  },
]

const tierStyles: Record<string, { bg: string; color: string; border: string }> = {
  FREE: { bg: "rgba(148,163,184,0.15)", color: "#94A3B8", border: "rgba(148,163,184,0.3)" },
  PRO: { bg: "rgba(214,179,106,0.15)", color: "#E0C27A", border: "rgba(214,179,106,0.4)" },
  BUSINESS: { bg: "rgba(107,124,255,0.15)", color: "#6B7CFF", border: "rgba(107,124,255,0.4)" },
  ENTERPRISE: { bg: "rgba(14,165,233,0.15)", color: "#38BDF8", border: "rgba(14,165,233,0.4)" },
}

function TierBadge({ tier }: { tier: "FREE" | "PRO" | "BUSINESS" | "ENTERPRISE" }) {
  const s = tierStyles[tier] || tierStyles.FREE
  const labels: Record<string, string> = { FREE: "Gratis", PRO: "Pro", BUSINESS: "Business", ENTERPRISE: "Enterprise" }
  return (
    <span
      className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide"
      style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}
    >
      {labels[tier] || "Gratis"}
    </span>
  )
}

function AIBadge() {
  return (
    <span
      className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider"
      style={{ background: "rgba(232,129,58,0.2)", color: "#E8813A", border: "1px solid rgba(232,129,58,0.5)", boxShadow: "0 0 8px rgba(232,129,58,0.2)" }}
    >
      AI
    </span>
  )
}

function PricingCTA() {
  return (
    <div className="max-w-2xl mx-auto my-10">
      <div
        className="rounded-2xl p-8 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(20,216,196,0.08), rgba(107,124,255,0.06), rgba(232,129,58,0.04))",
          border: "1px solid rgba(20,216,196,0.15)",
          boxShadow: "0 0 40px rgba(20,216,196,0.08), 0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        <h3 className="text-xl font-black text-white mb-2 text-balance">
          ¿Necesitas conversiones ilimitadas o archivos más grandes?
        </h3>
        <p className="text-slate-400 text-sm mb-5 max-w-lg mx-auto leading-relaxed">
          Hazte Pro para conversiones ilimitadas y todas las herramientas — $7.99/mes. ¿Necesitas firma electrónica y automatización? Prueba Business a $13.99/mes. Bufetes y contadores eligen Enterprise a $49.99/mes.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/es/precios"
            className="inline-flex items-center justify-center gap-2 font-bold py-2.5 px-6 rounded-xl text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #14D8C4, #0FBFB0)",
              color: "#0E0F1E",
              boxShadow: "0 0 20px rgba(20,216,196,0.4), 0 4px 12px rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <Crown className="h-4 w-4" />
            Actualizar a Pro
          </Link>
          <Link
            href="/es/precios"
            className="inline-flex items-center justify-center gap-2 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            Ver Planes
          </Link>
        </div>
      </div>
    </div>
  )
}

export function FeaturesGridEs() {
  return (
    <section
      id="tools"
      className="scroll-mt-16 py-14"
      style={{
        background: `
          radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.05) 0%, transparent 50%),
          radial-gradient(ellipse 50% 50% at 0% 50%, rgba(107,124,255,0.04) 0%, transparent 50%),
          radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%),
          #0E0F1E
        `,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-2 text-balance">
            Todas las Herramientas
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto">
            Todo lo que necesitas para trabajar con PDFs en segundos.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="mb-3">
                <h3 className="text-lg font-extrabold text-white">
                  {category.name}
                </h3>
                <p className="text-sm text-[#6B7CFF]">
                  {category.description}
                </p>
              </div>

              {/* Tools Grid - always visible */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="rounded-xl p-[1px]"
                    style={{
                      background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                    }}
                  >
                    <Link
                      href={tool.href}
                      className="group flex flex-col items-center text-center rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full"
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
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200"
                        style={{
                          background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                          boxShadow: "0 0 20px rgba(20, 216, 196, 0.35), 0 4px 8px rgba(232,129,58,0.1)",
                        }}
                      >
                        <tool.icon className="h-5 w-5 text-[#14D8C4]" />
                      </div>
                      <div className="flex items-center gap-1.5 mb-1 flex-wrap justify-center">
                        <h4 className="text-sm font-bold text-white group-hover:text-[#14D8C4] transition-colors">
                          {tool.name}
                        </h4>
                        <TierBadge tier={tool.tier} />
                        {tool.hasAI && <AIBadge />}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {tool.description}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>

            </div>
          ))}

          {/* Pricing CTA after all tool sections */}
          <PricingCTA />
        </div>
      </div>
    </section>
  )
}

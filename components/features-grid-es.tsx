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
        name: "Optimizador ATS",
        description: "Analisis de curriculum con IA y puntuacion de compatibilidad ATS.",
        icon: Target,
        href: "/es/optimizador-ats",
        tier: "PRO" as const,
      },
      {
        name: "Arreglar Curriculum",
        description: "Sube tu curriculum y la IA lo reescribe optimizado para ATS.",
        icon: Sparkles,
        href: "/es/optimizador-ats",
        tier: "PRO" as const,
      },
      {
        name: "Crear Curriculum",
        description: "Construye un curriculum profesional desde cero con IA.",
        icon: FilePlus,
        href: "/es/optimizador-ats",
        tier: "PRO" as const,
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
        href: "/es/extraccion-de-tablas",
        tier: "ENTERPRISE" as const,
      },
    ],
  },
]

function TierBadge({ tier }: { tier: "FREE" | "PRO" | "BUSINESS" | "ENTERPRISE" }) {
  if (tier === "ENTERPRISE") {
    return (
      <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
        Enterprise
      </span>
    )
  }
  if (tier === "BUSINESS") {
    return (
      <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
        Business
      </span>
    )
  }
  if (tier === "PRO") {
    return (
      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide" style={{ backgroundColor: "#FDE7C7", color: "#92400E" }}>
        Pro
      </span>
    )
  }
  return (
    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
      Gratis
    </span>
  )
}

function PricingCTA() {
  return (
    <div className="max-w-2xl mx-auto my-8">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-black text-white mb-2 text-balance">
          ¿Necesitas conversiones ilimitadas o archivos más grandes?
        </h3>
        <p className="text-slate-300 text-sm mb-5 max-w-lg mx-auto leading-relaxed">
          Hazte Pro para conversiones ilimitadas y todas las herramientas — $7.99/mes. ¿Necesitas firma electrónica y automatización? Prueba Business a $13.99/mes. Bufetes y contadores eligen Enterprise a $49.99/mes.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/es/precios"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors shadow-lg hover:shadow-xl"
          >
            <Crown className="h-4 w-4" />
            Actualizar a Pro
          </Link>
          <Link
            href="/es/precios"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-all border border-white/20 hover:border-white/40"
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
    <section id="tools" className="scroll-mt-16 py-10 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-2 text-balance">
            Todas las Herramientas
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Todo lo que necesitas para trabajar con PDFs en segundos.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="mb-3">
                <h3 className="text-lg font-bold text-slate-900">
                  {category.name}
                </h3>
                <p className="text-sm text-slate-500">
                  {category.description}
                </p>
              </div>

              {/* Tools Grid - always visible */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {category.tools.map((tool, toolIndex) => (
                  <Link
                    key={toolIndex}
                    href={tool.href}
                    className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                      <tool.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                        {tool.name}
                      </h4>
                      <TierBadge tier={tool.tier} />
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {tool.description}
                    </p>
                  </Link>
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

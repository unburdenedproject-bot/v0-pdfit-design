import type { LucideIcon } from "lucide-react"
import {
  ArrowLeftRight,
  BookOpen,
  Camera,
  FileDown,
  FilePlus,
  FileSearch,
  FileSpreadsheet,
  FileText,
  Globe,
  HelpCircle,
  Image as ImageIcon,
  Languages,
  Layers,
  Lock,
  Mail,
  MessageCircle,
  Merge,
  PenTool,
  Presentation,
  QrCode,
  Repeat,
  RotateCw,
  Scan,
  Shield,
  Split,
  Target,
  Type,
  Unlock,
  Upload,
  Zap,
  Droplets,
} from "lucide-react"

// Compress icon alias -- Zap is used elsewhere for "Compress" semantics.
const Compress = Zap

export type DashboardLocale = "en" | "es" | "br"

export interface DashboardTool {
  id: string
  icon: LucideIcon
  en: { label: string; href: string }
  es: { label: string; href: string }
  br: { label: string; href: string }
  /** Aliases/synonyms across languages -- helps users find tools by intent. */
  keywords: string[]
}

/**
 * Curated catalog of primary tools shown in the dashboard search.
 * Keep this list in sync with FeaturesGrid. Long-tail SEO variants
 * (compress-pdf-to-2mb, etc.) are intentionally excluded.
 */
export const DASHBOARD_TOOLS: DashboardTool[] = [
  // Convert FROM PDF
  { id: "pdf-to-jpg", icon: ImageIcon,
    en: { label: "PDF to JPG", href: "/pdf-to-jpg" },
    es: { label: "PDF a JPG", href: "/es/pdf-a-jpg" },
    br: { label: "PDF para JPG", href: "/br/pdf-para-jpg" },
    keywords: ["image", "imagen", "imagem", "photo", "foto", "convert"],
  },
  { id: "pdf-to-png", icon: ImageIcon,
    en: { label: "PDF to PNG", href: "/pdf-to-png" },
    es: { label: "PDF a PNG", href: "/es/pdf-a-png" },
    br: { label: "PDF para PNG", href: "/br/pdf-para-png" },
    keywords: ["image", "imagen", "imagem", "convert"],
  },
  { id: "pdf-to-txt", icon: Type,
    en: { label: "PDF to TXT", href: "/pdf-to-txt" },
    es: { label: "PDF a Texto", href: "/es/pdf-a-texto" },
    br: { label: "PDF para Texto", href: "/br/pdf-para-texto" },
    keywords: ["text", "texto", "extract", "extraer", "extrair"],
  },
  { id: "pdf-to-word", icon: FileText,
    en: { label: "PDF to Word", href: "/pdf-to-word" },
    es: { label: "PDF a Word", href: "/es/pdf-a-word" },
    br: { label: "PDF para Word", href: "/br/pdf-para-word" },
    keywords: ["docx", "document", "documento", "convert"],
  },
  { id: "pdf-to-excel", icon: FileSpreadsheet,
    en: { label: "PDF to Excel", href: "/pdf-to-excel" },
    es: { label: "PDF a Excel", href: "/es/pdf-a-excel" },
    br: { label: "PDF para Excel", href: "/br/pdf-para-excel" },
    keywords: ["xlsx", "spreadsheet", "planilla", "planilha", "tabla", "tabela"],
  },
  { id: "pdf-to-powerpoint", icon: Presentation,
    en: { label: "PDF to PowerPoint", href: "/pdf-to-powerpoint" },
    es: { label: "PDF a PowerPoint", href: "/es/pdf-a-powerpoint" },
    br: { label: "PDF para PowerPoint", href: "/br/pdf-para-powerpoint" },
    keywords: ["pptx", "slides", "presentación", "apresentacao"],
  },
  { id: "extract-images", icon: FileDown,
    en: { label: "Extract Images", href: "/extract-images-from-pdf" },
    es: { label: "Extraer Imágenes", href: "/es/extraer-imagenes-de-pdf" },
    br: { label: "Extrair Imagens", href: "/br/extrair-imagens-de-pdf" },
    keywords: ["photos", "fotos", "extract"],
  },

  // Convert TO PDF
  { id: "word-to-pdf", icon: FileText,
    en: { label: "Word to PDF", href: "/word-to-pdf" },
    es: { label: "Word a PDF", href: "/es/word-a-pdf" },
    br: { label: "Word para PDF", href: "/br/word-para-pdf" },
    keywords: ["docx", "document", "documento"],
  },
  { id: "excel-to-pdf", icon: FileSpreadsheet,
    en: { label: "Excel to PDF", href: "/excel-to-pdf" },
    es: { label: "Excel a PDF", href: "/es/excel-a-pdf" },
    br: { label: "Excel para PDF", href: "/br/excel-para-pdf" },
    keywords: ["xlsx", "spreadsheet", "planilla", "planilha"],
  },
  { id: "powerpoint-to-pdf", icon: Presentation,
    en: { label: "PowerPoint to PDF", href: "/powerpoint-to-pdf" },
    es: { label: "PowerPoint a PDF", href: "/es/powerpoint-a-pdf" },
    br: { label: "PowerPoint para PDF", href: "/br/powerpoint-para-pdf" },
    keywords: ["pptx", "slides", "presentación", "apresentacao"],
  },
  { id: "jpg-to-pdf", icon: ImageIcon,
    en: { label: "JPG to PDF", href: "/jpg-to-pdf" },
    es: { label: "JPG a PDF", href: "/es/jpg-a-pdf" },
    br: { label: "JPG para PDF", href: "/br/jpg-para-pdf" },
    keywords: ["image", "imagen", "imagem", "photo", "foto"],
  },
  { id: "png-to-pdf", icon: ImageIcon,
    en: { label: "PNG to PDF", href: "/png-to-pdf" },
    es: { label: "PNG a PDF", href: "/es/png-a-pdf" },
    br: { label: "PNG para PDF", href: "/br/png-para-pdf" },
    keywords: ["image", "imagen", "imagem"],
  },
  { id: "url-to-pdf", icon: Globe,
    en: { label: "URL to PDF", href: "/url-to-pdf" },
    es: { label: "URL a PDF", href: "/es/url-a-pdf" },
    br: { label: "URL para PDF", href: "/br/url-para-pdf" },
    keywords: ["website", "web", "sitio", "site", "page", "página"],
  },

  // Edit & Organize
  { id: "merge-pdf", icon: Merge,
    en: { label: "Merge PDF", href: "/merge-pdf" },
    es: { label: "Unir PDF", href: "/es/unir-pdf" },
    br: { label: "Unir PDF", href: "/br/unir-pdf" },
    keywords: ["combine", "combinar", "join", "juntar"],
  },
  { id: "split-pdf", icon: Split,
    en: { label: "Split PDF", href: "/split-pdf" },
    es: { label: "Dividir PDF", href: "/es/dividir-pdf" },
    br: { label: "Dividir PDF", href: "/br/dividir-pdf" },
    keywords: ["separate", "separar", "break", "divide"],
  },
  { id: "rotate-pdf", icon: RotateCw,
    en: { label: "Rotate PDF", href: "/rotate-pdf" },
    es: { label: "Rotar PDF", href: "/es/rotar-pdf" },
    br: { label: "Girar PDF", href: "/br/girar-pdf" },
    keywords: ["turn", "girar", "rotar", "orient"],
  },
  { id: "flatten-pdf", icon: Layers,
    en: { label: "Flatten PDF", href: "/flatten-pdf" },
    es: { label: "Aplanar PDF", href: "/es/aplanar-pdf" },
    br: { label: "Achatar PDF", href: "/br/achatar-pdf" },
    keywords: ["lock fields", "forms", "annotations"],
  },

  // Security
  { id: "protect-pdf", icon: Lock,
    en: { label: "Protect PDF", href: "/protect-pdf" },
    es: { label: "Proteger PDF", href: "/es/proteger-pdf" },
    br: { label: "Proteger PDF", href: "/br/proteger-pdf" },
    keywords: ["password", "contraseña", "senha", "encrypt"],
  },
  { id: "unlock-pdf", icon: Unlock,
    en: { label: "Unlock PDF", href: "/unlock-pdf" },
    es: { label: "Desbloquear PDF", href: "/es/desbloquear-pdf" },
    br: { label: "Desbloquear PDF", href: "/br/desbloquear-pdf" },
    keywords: ["password", "remove password", "decrypt", "contraseña", "senha"],
  },
  { id: "watermark-pdf", icon: Droplets,
    en: { label: "Watermark PDF", href: "/watermark-pdf" },
    es: { label: "Marca de Agua PDF", href: "/es/marca-de-agua-pdf" },
    br: { label: "Marca d'Agua PDF", href: "/br/marca-dagua-pdf" },
    keywords: ["stamp", "sello", "carimbo"],
  },

  // Optimize
  { id: "compress-pdf", icon: Compress,
    en: { label: "Compress PDF", href: "/compress-pdf" },
    es: { label: "Comprimir PDF", href: "/es/comprimir-pdf" },
    br: { label: "Comprimir PDF", href: "/br/comprimir-pdf" },
    keywords: ["reduce size", "shrink", "optimize", "reducir", "reduzir"],
  },
  { id: "compress-email", icon: Mail,
    en: { label: "Compress for Email", href: "/compress-pdf-for-email" },
    es: { label: "Comprimir para Email", href: "/es/comprimir-pdf-para-email" },
    br: { label: "Comprimir para Email", href: "/br/comprimir-pdf-para-email" },
    keywords: ["gmail", "outlook", "attachment", "adjunto", "anexo"],
  },
  { id: "upload-ready", icon: Upload,
    en: { label: "Upload-Ready PDF", href: "/upload-ready-pdf" },
    es: { label: "PDF Listo para Subir", href: "/es/pdf-listo-para-subir" },
    br: { label: "PDF Pronto para Upload", href: "/br/pdf-pronto-para-upload" },
    keywords: ["portal", "prepare", "listo", "pronto"],
  },
  { id: "ocr-scanner", icon: Scan,
    en: { label: "OCR Scanner", href: "/ocr-scanner" },
    es: { label: "Escáner OCR", href: "/es/escaner-ocr" },
    br: { label: "Scanner OCR", href: "/br/scanner-ocr" },
    keywords: ["searchable", "text recognition", "reconocimiento", "reconhecimento", "scan"],
  },
  { id: "scan-cleanup", icon: Camera,
    en: { label: "Phone Scan Cleanup", href: "/phone-scan-cleanup" },
    es: { label: "Limpiar Escaneo", href: "/es/limpiar-escaneo" },
    br: { label: "Limpeza de Digitalizacao", href: "/br/limpeza-digitalizacao" },
    keywords: ["camera", "photo cleanup", "document photo", "foto de documento"],
  },

  // AI Tools
  { id: "qr-code", icon: QrCode,
    en: { label: "QR Code Generator", href: "/tools/qr-code" },
    es: { label: "Generador de Código QR", href: "/es/codigo-qr" },
    br: { label: "Gerador de Código QR", href: "/br/codigo-qr" },
    keywords: ["qr", "barcode", "código"],
  },
  { id: "ats-optimizer", icon: Target,
    en: { label: "Optimize Your Resume", href: "/ats-optimizer" },
    es: { label: "Optimiza Tu Currículum", href: "/es/optimizador-ats" },
    br: { label: "Otimize Seu Curriculo", href: "/br/otimizador-ats" },
    keywords: ["resume", "cv", "currículum", "curriculo", "ats", "job"],
  },
  { id: "create-resume", icon: FilePlus,
    en: { label: "Create a Resume", href: "/create-resume" },
    es: { label: "Crear Currículum", href: "/es/crear-curriculum" },
    br: { label: "Criar Curriculo", href: "/br/criar-curriculo" },
    keywords: ["resume", "cv", "build", "nuevo", "novo"],
  },
  { id: "chat-with-pdf", icon: MessageCircle,
    en: { label: "Chat with PDF", href: "/chat-with-pdf" },
    es: { label: "Chat con PDF", href: "/es/chat-con-pdf" },
    br: { label: "Chat com PDF", href: "/br/chat-com-pdf" },
    keywords: ["ai", "question", "ask", "pregunta", "perguntar"],
  },
  { id: "smart-extraction", icon: FileSearch,
    en: { label: "Smart Data Extraction", href: "/smart-extraction" },
    es: { label: "Extracción Inteligente", href: "/es/extraccion-inteligente" },
    br: { label: "Extracao Inteligente", href: "/br/extracao-inteligente" },
    keywords: ["data", "extract", "fields", "names", "dates", "ai"],
  },
  { id: "pdf-summarizer", icon: BookOpen,
    en: { label: "AI PDF Summarizer", href: "/pdf-summarizer" },
    es: { label: "Resumidor de PDF", href: "/es/resumidor-pdf" },
    br: { label: "Resumidor de PDF", href: "/br/resumidor-pdf" },
    keywords: ["summary", "resumen", "resumo", "ai"],
  },
  { id: "question-generator", icon: HelpCircle,
    en: { label: "Question Generator", href: "/question-generator" },
    es: { label: "Generador de Preguntas", href: "/es/generador-preguntas" },
    br: { label: "Gerador de Perguntas", href: "/br/gerador-perguntas" },
    keywords: ["quiz", "study", "exam", "preguntas", "perguntas", "ai"],
  },
  { id: "translate-pdf", icon: Languages,
    en: { label: "Translate PDF", href: "/translate-pdf" },
    es: { label: "Traducir PDF", href: "/es/traducir-pdf" },
    br: { label: "Traduzir PDF", href: "/br/traduzir-pdf" },
    keywords: ["translation", "traducción", "traducao", "language", "idioma", "ai"],
  },

  // Business & Enterprise
  { id: "workflow", icon: Repeat,
    en: { label: "Workflow Automation", href: "/workflow-automation" },
    es: { label: "Automatización de Flujos", href: "/es/automatizacion" },
    br: { label: "Automacao de Fluxos", href: "/br/automacao" },
    keywords: ["automation", "automatizar", "chain", "pipeline"],
  },
  { id: "table-extraction", icon: FileSpreadsheet,
    en: { label: "Table Extraction", href: "/table-extraction" },
    es: { label: "Extracción de Tablas", href: "/es/extraccion-de-tablas" },
    br: { label: "Extracao de Tabelas", href: "/br/extracao-de-tabelas" },
    keywords: ["tables", "tablas", "tabelas", "excel", "spreadsheet"],
  },
  { id: "pdf-compare", icon: ArrowLeftRight,
    en: { label: "PDF Compare", href: "/pdf-compare" },
    es: { label: "Comparar PDF", href: "/es/comparar-pdf" },
    br: { label: "Comparar PDF", href: "/br/comparar-pdf" },
    keywords: ["diff", "compare", "difference", "diferencia", "diferenca"],
  },
  { id: "esign", icon: PenTool,
    en: { label: "eSign Documents", href: "/esign" },
    es: { label: "Firma Electrónica", href: "/es/firma-electronica" },
    br: { label: "Assinatura Eletronica", href: "/br/assinatura-eletronica" },
    keywords: ["sign", "signature", "firma", "assinatura", "esign"],
  },
  { id: "pdf-redaction", icon: Shield,
    en: { label: "PDF Redaction", href: "/pdf-redaction" },
    es: { label: "Redacción de PDF", href: "/es/redaccion-pdf" },
    br: { label: "Redacao de PDF", href: "/br/redacao-pdf" },
    keywords: ["redact", "remove", "censor", "hide", "tachar"],
  },
]

/**
 * Normalize a string for case-insensitive, diacritics-insensitive matching.
 * "Resumé" and "Resume" and "resumé" all become "resume".
 */
function normalize(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

/**
 * Score a tool against a search query. Higher = better match.
 * 0 means "no match" -- exclude from results.
 */
function scoreTool(tool: DashboardTool, locale: DashboardLocale, q: string): number {
  const nq = normalize(q)
  if (!nq) return 0
  const label = normalize(tool[locale].label)
  const keywords = tool.keywords.map(normalize)
  // Also check other-locale labels so a Spanish user typing "merge" still finds Unir PDF.
  const allLabels = [normalize(tool.en.label), normalize(tool.es.label), normalize(tool.br.label)]

  if (label === nq) return 100
  if (label.startsWith(nq)) return 80
  if (label.includes(nq)) return 60
  if (allLabels.some((l) => l.includes(nq))) return 40
  if (keywords.some((k) => k === nq || k.startsWith(nq))) return 30
  if (keywords.some((k) => k.includes(nq))) return 20
  return 0
}

export function searchDashboardTools(
  query: string,
  locale: DashboardLocale,
  limit: number = 8
): DashboardTool[] {
  const q = query.trim()
  if (!q) return []
  return DASHBOARD_TOOLS
    .map((t) => ({ tool: t, score: scoreTool(t, locale, q) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.tool)
}

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
  BrainCircuit,
  FileSearch,
  BookOpen,
  HelpCircle,
  Languages,
} from "lucide-react"

const categories = [
  {
    name: "Convert FROM PDF",
    description: "Transform your PDFs into editable formats",
    tools: [
      {
        name: "PDF to JPG",
        description: "Convert PDF pages to high-quality JPG images.",
        icon: Image,
        href: "/pdf-to-jpg",
        tier: "FREE" as const,
      },
      {
        name: "PDF to TXT",
        description: "Extract plain text content from PDFs.",
        icon: Type,
        href: "/pdf-to-txt",
        tier: "FREE" as const,
      },
      {
        name: "PDF to PNG",
        description: "Convert PDF pages to PNG images.",
        icon: Image,
        href: "/pdf-to-png",
        tier: "FREE" as const,
      },
      {
        name: "PDF to Word",
        description: "Convert PDF to an editable Word document.",
        icon: FileText,
        href: "/pdf-to-word",
        tier: "PRO" as const,
      },
      {
        name: "PDF to Excel",
        description: "Extract PDF tables into an Excel spreadsheet.",
        icon: FileSpreadsheet,
        href: "/pdf-to-excel",
        tier: "PRO" as const,
      },
      {
        name: "PDF to PowerPoint",
        description: "Convert PDF pages into PowerPoint slides.",
        icon: Presentation,
        href: "/pdf-to-powerpoint",
        tier: "PRO" as const,
      },
      {
        name: "Extract Images",
        description: "Pull out photos, logos, and graphics from PDFs.",
        icon: ImageDown,
        href: "/extract-images-from-pdf",
        tier: "FREE" as const,
      },
    ],
  },
  {
    name: "Convert TO PDF",
    description: "Create PDFs from any document format",
    tools: [
      {
        name: "Word to PDF",
        description: "Convert Word documents to PDF instantly.",
        icon: FileText,
        href: "/word-to-pdf",
        tier: "PRO" as const,
      },
      {
        name: "Excel to PDF",
        description: "Turn spreadsheets into shareable PDFs.",
        icon: FileSpreadsheet,
        href: "/excel-to-pdf",
        tier: "PRO" as const,
      },
      {
        name: "PowerPoint to PDF",
        description: "Convert presentations to PDF format.",
        icon: Presentation,
        href: "/powerpoint-to-pdf",
        tier: "PRO" as const,
      },
      {
        name: "JPG to PDF",
        description: "Convert JPG images to PDF documents.",
        icon: Image,
        href: "/jpg-to-pdf",
        tier: "FREE" as const,
      },
      {
        name: "PNG to PDF",
        description: "Convert PNG images to PDF documents.",
        icon: Image,
        href: "/png-to-pdf",
        tier: "FREE" as const,
      },
      {
        name: "URL to PDF",
        description: "Convert any webpage to a PDF document.",
        icon: Globe,
        href: "/url-to-pdf",
        tier: "PRO" as const,
      },
    ],
  },
  {
    name: "Edit & Organize",
    description: "Modify and organize your PDF documents",
    tools: [
      {
        name: "Merge PDF",
        description: "Combine multiple PDFs into one file.",
        icon: Merge,
        href: "/merge-pdf",
        tier: "FREE" as const,
      },
      {
        name: "Split PDF",
        description: "Divide a PDF into separate files.",
        icon: Split,
        href: "/split-pdf",
        tier: "FREE" as const,
      },
      {
        name: "Rotate PDF",
        description: "Fix page orientation instantly.",
        icon: RotateCw,
        href: "/rotate-pdf",
        tier: "FREE" as const,
      },
      {
        name: "Flatten PDF",
        description: "Lock form fields and annotations into a flat PDF.",
        icon: Layers,
        href: "/flatten-pdf",
        tier: "FREE" as const,
      },
    ],
  },
  {
    name: "Security & Protection",
    description: "Secure and protect your PDF documents",
    tools: [
      {
        name: "Protect PDF",
        description: "Add password protection to your PDF.",
        icon: Lock,
        href: "/protect-pdf",
        tier: "FREE" as const,
      },
      {
        name: "Unlock PDF",
        description: "Remove password restrictions from a PDF.",
        icon: Unlock,
        href: "/unlock-pdf",
        tier: "FREE" as const,
      },
      {
        name: "Watermark PDF",
        description: "Add text or image watermarks to PDFs.",
        icon: Droplets,
        href: "/watermark-pdf",
        tier: "PRO" as const,
      },

    ],
  },
  {
    name: "Optimize & Enhance",
    description: "Improve and enhance your PDF files",
    tools: [
      {
        name: "Compress PDF",
        description: "Reduce file size with Light, Medium, or Extreme compression.",
        icon: Compress,
        href: "/compress-pdf",
        tier: "FREE" as const,
      },
      {
        name: "Compress for Email",
        description: "Shrink PDFs to fit Gmail, Outlook, and Yahoo attachment limits.",
        icon: Mail,
        href: "/compress-pdf-for-email",
        tier: "FREE" as const,
      },
      {
        name: "Upload-Ready PDF",
        description: "Fix and optimize PDFs for any upload portal in one click.",
        icon: Upload,
        href: "/upload-ready-pdf",
        tier: "FREE" as const,
      },
      {
        name: "OCR Scanner",
        description: "Extract searchable text from scanned PDFs.",
        icon: Scan,
        href: "/ocr-scanner",
        tier: "PRO" as const,
      },
      {
        name: "Phone Scan Cleanup",
        description: "Turn phone photos of documents into clean, professional PDFs.",
        icon: Camera,
        href: "/phone-scan-cleanup",
        tier: "FREE" as const,
      },
    ],
  },
  {
    name: "Generate & AI Tools",
    description: "AI-powered resume tools for ATS optimization, resume writing, and document generation",
    tools: [
      {
        name: "QR Code Generator",
        description: "Generate QR codes from any URL or text instantly.",
        icon: QrCode,
        href: "/tools/qr-code",
        tier: "PRO" as const,
      },
      {
        name: "Optimize Your Resume",
        description: "Upload your resume, get a score, and AI fixes it for you.",
        icon: Target,
        href: "/ats-optimizer",
        tier: "PRO" as const,
        hasAI: true,
      },
      {
        name: "Create a Resume",
        description: "Build a professional resume from scratch with AI. Download as Word.",
        icon: FilePlus,
        href: "/create-resume",
        tier: "PRO" as const,
        hasAI: true,
      },
      {
        name: "Chat with PDF",
        description: "Ask questions and get AI-powered answers from any PDF document.",
        icon: MessageCircle,
        href: "/chat-with-pdf",
        tier: "BUSINESS" as const,
        hasAI: true,
      },
      {
        name: "Smart Data Extraction",
        description: "Automatically pull names, dates, amounts, and key data from any PDF.",
        icon: FileSearch,
        href: "/smart-extraction",
        tier: "BUSINESS" as const,
        hasAI: true,
      },
      {
        name: "AI PDF Summarizer",
        description: "Summarize long documents in seconds. Choose length and language.",
        icon: BookOpen,
        href: "/pdf-summarizer",
        tier: "BUSINESS" as const,
        hasAI: true,
      },
      {
        name: "Question Generator",
        description: "Generate study questions from any PDF. Multiple choice, short answer, and true/false.",
        icon: HelpCircle,
        href: "/question-generator",
        tier: "PRO" as const,
        hasAI: true,
      },
      {
        name: "Translate PDF",
        description: "Translate entire PDF documents into 13 languages with AI.",
        icon: Languages,
        href: "/translate-pdf",
        tier: "BUSINESS" as const,
        hasAI: true,
      },
    ],
  },
  {
    name: "Business & Enterprise Tools",
    description: "Advanced tools for professionals, teams, law firms, and labs",
    tools: [
      {
        name: "Workflow Automation",
        description: "Chain multiple PDF tools into one automated workflow.",
        icon: Repeat,
        href: "/workflow-automation",
        tier: "BUSINESS" as const,
      },
      {
        name: "Table Extraction",
        description: "Extract tables from PDFs directly into Excel spreadsheets.",
        icon: FileSpreadsheet,
        href: "/table-extraction",
        tier: "BUSINESS" as const,
      },
      {
        name: "PDF Compare",
        description: "Compare two PDFs side-by-side and highlight differences.",
        icon: ArrowLeftRight,
        href: "/pdf-compare",
        tier: "BUSINESS" as const,
      },
      {
        name: "eSign Documents",
        description: "Add legally binding electronic signatures to PDFs.",
        icon: PenTool,
        href: "/esign",
        tier: "BUSINESS" as const,
      },
      {
        name: "PDF Redaction",
        description: "Permanently remove sensitive text and data from PDFs.",
        icon: Shield,
        href: "/pdf-redaction",
        tier: "BUSINESS" as const,
      },
      {
        name: "Workflow Templates",
        description: "Pre-built workflows for legal, accounting, and lab documents.",
        icon: Layers,
        href: "/workflow-automation",
        tier: "ENTERPRISE" as const,
      },
      {
        name: "High-Volume Table Extraction",
        description: "Extract up to 2,000 pages of tables per month to Excel.",
        icon: FileSpreadsheet,
        href: "/high-volume-table-extraction",
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
  const labels: Record<string, string> = { FREE: "Free", PRO: "Pro", BUSINESS: "Business", ENTERPRISE: "Enterprise" }
  return (
    <span
      className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide"
      style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}
    >
      {labels[tier] || "Free"}
    </span>
  )
}

function AIBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full bg-purple-600 text-white shadow-md shadow-purple-500/50">
      <Sparkles className="h-3.5 w-3.5" />
      AI-Powered
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
          Need unlimited conversions or larger files?
        </h3>
        <p className="text-slate-400 text-sm mb-5 max-w-lg mx-auto leading-relaxed">
          Go Pro for unlimited conversions and all tools — $7.99/month. Need eSign and workflow automation? Try Business at $13.99/month. Law firms and accountants love Enterprise at $49.99/month.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 font-bold py-2.5 px-6 rounded-xl text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #14D8C4, #0FBFB0)",
              color: "#0E0F1E",
              boxShadow: "0 0 20px rgba(20,216,196,0.4), 0 4px 12px rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <Crown className="h-4 w-4" />
            Upgrade to Pro
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            See Plans
          </Link>
        </div>
      </div>
    </div>
  )
}

export function FeaturesGrid() {
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
            All Tools
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto">
            PDF tools plus AI resume tools to optimize resumes for ATS and build new resumes fast.
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
                      className="group flex flex-col items-center text-center rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full tool-card-hover"
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
                      </div>
                      {tool.hasAI && <div className="mb-1"><AIBadge /></div>}
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

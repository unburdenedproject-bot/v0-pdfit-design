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
    name: "Generate",
    description: "Create useful assets instantly",
    tools: [
      {
        name: "QR Code Generator",
        description: "Generate QR codes from any URL or text instantly.",
        icon: QrCode,
        href: "/tools/qr-code",
        tier: "PRO" as const,
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
        href: "/table-extraction",
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
      Free
    </span>
  )
}

function PricingCTA() {
  return (
    <div className="max-w-2xl mx-auto my-8">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-black text-white mb-2 text-balance">
          Need unlimited conversions or larger files?
        </h3>
        <p className="text-slate-300 text-sm mb-5 max-w-lg mx-auto leading-relaxed">
          Go Pro for unlimited conversions and all tools — $7.99/month. Need eSign and workflow automation? Try Business at $13.99/month. Law firms and accountants love Enterprise at $49.99/month.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors shadow-lg hover:shadow-xl"
          >
            <Crown className="h-4 w-4" />
            Upgrade to Pro
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-all border border-white/20 hover:border-white/40"
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
    <section id="tools" className="scroll-mt-16 py-10 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-2 text-balance">
            All Tools
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Everything you need to work with PDFs in seconds.
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

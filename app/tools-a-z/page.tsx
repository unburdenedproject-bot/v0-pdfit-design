import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
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

export const metadata: Metadata = {
  title: "All PDF Tools A–Z | OmnisPDF",
  description:
    "Browse every OmnisPDF tool in alphabetical order. Convert, compress, merge, split, protect, and more — find exactly what you need.",
  alternates: {
    canonical: "https://omnispdf.com/tools-a-z",
    languages: {
      en: "https://omnispdf.com/tools-a-z",
      es: "https://omnispdf.com/es/herramientas-a-z",
      pt: "https://omnispdf.com/br/ferramentas-a-z",
    },
  },
}

const tools = [
  { name: "Compress PDF", description: "Reduce file size with Light, Medium, or Extreme compression.", icon: Compress, href: "/compress-pdf", tier: "FREE" },
  { name: "Compress PDF for Email", description: "Shrink PDFs to fit Gmail, Outlook, and Yahoo attachment limits.", icon: Mail, href: "/compress-pdf-for-email", tier: "FREE" },
  { name: "eSign Documents", description: "Add legally binding electronic signatures to PDFs.", icon: PenTool, href: "/esign", tier: "BUSINESS" },
  { name: "Excel to PDF", description: "Turn spreadsheets into shareable PDFs.", icon: FileSpreadsheet, href: "/excel-to-pdf", tier: "PRO" },
  { name: "Extract Images", description: "Pull out photos, logos, and graphics from PDFs.", icon: ImageDown, href: "/extract-images-from-pdf", tier: "FREE" },
  { name: "Flatten PDF", description: "Lock form fields and annotations into a flat PDF.", icon: Layers, href: "/flatten-pdf", tier: "FREE" },
  { name: "JPG to PDF", description: "Convert JPG images to PDF documents.", icon: Image, href: "/jpg-to-pdf", tier: "FREE" },
  { name: "Merge PDF", description: "Combine multiple PDFs into one file.", icon: Merge, href: "/merge-pdf", tier: "FREE" },
  { name: "OCR Scanner", description: "Extract searchable text from scanned PDFs.", icon: Scan, href: "/ocr-scanner", tier: "PRO" },
  { name: "PDF Compare", description: "Compare two PDFs side-by-side and highlight differences.", icon: ArrowLeftRight, href: "/pdf-compare", tier: "BUSINESS" },
  { name: "PDF Redaction", description: "Permanently remove sensitive text and data from PDFs.", icon: Shield, href: "/pdf-redaction", tier: "BUSINESS" },
  { name: "PDF to Excel", description: "Extract PDF tables into an Excel spreadsheet.", icon: FileSpreadsheet, href: "/pdf-to-excel", tier: "PRO" },
  { name: "PDF to JPG", description: "Convert PDF pages to high-quality JPG images.", icon: Image, href: "/pdf-to-jpg", tier: "FREE" },
  { name: "PDF to PNG", description: "Convert PDF pages to PNG images.", icon: Image, href: "/pdf-to-png", tier: "FREE" },
  { name: "PDF to PowerPoint", description: "Convert PDF pages into PowerPoint slides.", icon: Presentation, href: "/pdf-to-powerpoint", tier: "PRO" },
  { name: "PDF to TXT", description: "Extract plain text content from PDFs.", icon: Type, href: "/pdf-to-txt", tier: "FREE" },
  { name: "PDF to Word", description: "Convert PDF to an editable Word document.", icon: FileText, href: "/pdf-to-word", tier: "PRO" },
  { name: "Phone Scan Cleanup", description: "Turn phone photos of documents into clean, professional PDFs.", icon: Camera, href: "/phone-scan-cleanup", tier: "FREE" },
  { name: "PNG to PDF", description: "Convert PNG images to PDF documents.", icon: Image, href: "/png-to-pdf", tier: "FREE" },
  { name: "PowerPoint to PDF", description: "Convert presentations to PDF format.", icon: Presentation, href: "/powerpoint-to-pdf", tier: "PRO" },
  { name: "Protect PDF", description: "Add password protection to your PDF.", icon: Lock, href: "/protect-pdf", tier: "FREE" },
  { name: "QR Code Generator", description: "Generate QR codes from any URL or text instantly.", icon: QrCode, href: "/tools/qr-code", tier: "PRO" },
  { name: "Rotate PDF", description: "Fix page orientation instantly.", icon: RotateCw, href: "/rotate-pdf", tier: "FREE" },
  { name: "Split PDF", description: "Divide a PDF into separate files.", icon: Split, href: "/split-pdf", tier: "FREE" },
  { name: "Table Extraction", description: "Extract tables from PDFs directly into Excel spreadsheets.", icon: FileSpreadsheet, href: "/table-extraction", tier: "BUSINESS" },
  { name: "Unlock PDF", description: "Remove password restrictions from a PDF.", icon: Unlock, href: "/unlock-pdf", tier: "FREE" },
  { name: "Upload-Ready PDF", description: "Fix and optimize PDFs for any upload portal in one click.", icon: Upload, href: "/upload-ready-pdf", tier: "FREE" },
  { name: "Watermark PDF", description: "Add text or image watermarks to PDFs.", icon: Droplets, href: "/watermark-pdf", tier: "PRO" },
  { name: "Word to PDF", description: "Convert Word documents to PDF instantly.", icon: FileText, href: "/word-to-pdf", tier: "PRO" },
  { name: "Workflow Automation", description: "Chain multiple PDF tools into one automated workflow.", icon: Repeat, href: "/workflow-automation", tier: "BUSINESS" },
]

function TierBadge({ tier }: { tier: string }) {
  if (tier === "BUSINESS") {
    return <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Business</span>
  }
  if (tier === "PRO") {
    return <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide" style={{ backgroundColor: "#FDE7C7", color: "#92400E" }}>Pro</span>
  }
  return <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Free</span>
}

export default function ToolsAZPage() {
  const letters = [...new Set(tools.map((t) => t.name[0].toUpperCase()))].sort()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-black mb-4">All Tools A–Z</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Every OmnisPDF tool in one place, sorted alphabetically. Find exactly what you need.
            </p>
          </div>
        </section>

        <nav className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-1 py-3 justify-center">
              {letters.map((letter) => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-sm font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {letters.map((letter) => {
              const letterTools = tools.filter((t) => t.name[0].toUpperCase() === letter)
              return (
                <div key={letter} id={`letter-${letter}`} className="mb-10">
                  <h2 className="text-2xl font-black text-slate-900 mb-4 border-b-2 border-orange-500 pb-2 inline-block">{letter}</h2>
                  <div className="grid gap-3">
                    {letterTools.map((tool) => {
                      const Icon = tool.icon
                      return (
                        <Link
                          key={tool.href}
                          href={tool.href}
                          className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"
                        >
                          <div className="w-10 h-10 bg-slate-100 group-hover:bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                            <Icon className="h-5 w-5 text-slate-600 group-hover:text-orange-600 transition-colors" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{tool.name}</span>
                              <TierBadge tier={tool.tier} />
                            </div>
                            <p className="text-sm text-slate-500 truncate">{tool.description}</p>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

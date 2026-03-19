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
  { name: "ATS Resume Optimizer", description: "AI-powered resume analysis with ATS compatibility score and keyword suggestions.", icon: Target, href: "/ats-optimizer", tier: "PRO" },
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
  { name: "URL to PDF", description: "Convert any public webpage to a high-quality PDF document.", icon: Globe, href: "/url-to-pdf", tier: "PRO" },
  { name: "Watermark PDF", description: "Add text or image watermarks to PDFs.", icon: Droplets, href: "/watermark-pdf", tier: "PRO" },
  { name: "Word to PDF", description: "Convert Word documents to PDF instantly.", icon: FileText, href: "/word-to-pdf", tier: "PRO" },
  { name: "Workflow Automation", description: "Chain multiple PDF tools into one automated workflow.", icon: Repeat, href: "/workflow-automation", tier: "BUSINESS" },
]

function TierBadge({ tier }: { tier: string }) {
  if (tier === "ENTERPRISE") {
    return <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Enterprise</span>
  }
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
  const totalFree = tools.filter((t) => t.tier === "FREE").length
  const totalPro = tools.filter((t) => t.tier === "PRO").length
  const totalBusiness = tools.filter((t) => t.tier === "BUSINESS").length
  const totalEnterprise = tools.filter((t) => t.tier === "ENTERPRISE").length

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Search className="h-4 w-4 text-orange-400" />
              <span className="text-sm font-medium text-slate-300">{tools.length} tools available</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">All PDF Tools A–Z</h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
              Every tool in one place, sorted alphabetically. Click a letter to jump.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">{totalFree} Free</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase" style={{ backgroundColor: "#FDE7C7", color: "#92400E" }}>{totalPro} Pro</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">{totalBusiness} Business</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">{totalEnterprise} Enterprise</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky letter nav */}
        <nav className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-0.5 py-3 justify-center">
              {letters.map((letter) => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="w-10 h-10 flex items-center justify-center rounded-xl text-sm font-black text-slate-500 hover:bg-orange-500 hover:text-white transition-all duration-200"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Tool listing */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            {letters.map((letter) => {
              const letterTools = tools.filter((t) => t.name[0].toUpperCase() === letter)
              return (
                <div key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-20">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-blue-900 text-white rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0">
                      {letter}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{letterTools.length} tool{letterTools.length !== 1 ? "s" : ""}</span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {letterTools.map((tool) => {
                      const Icon = tool.icon
                      return (
                        <Link
                          key={tool.href}
                          href={tool.href}
                          className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-200 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 group"
                        >
                          <div className="w-11 h-11 bg-gradient-to-br from-slate-50 to-slate-100 group-hover:from-orange-50 group-hover:to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 border border-slate-200 group-hover:border-orange-200">
                            <Icon className="h-5 w-5 text-slate-500 group-hover:text-orange-600 transition-colors duration-300" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{tool.name}</span>
                              <TierBadge tier={tool.tier} />
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">{tool.description}</p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-orange-500 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to get started?</h2>
            <p className="text-slate-400 mb-6">Pick any tool above or start with the most popular ones.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/compress-pdf" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                Compress PDF <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/merge-pdf" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl border border-white/20 transition-colors">
                Merge PDF <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

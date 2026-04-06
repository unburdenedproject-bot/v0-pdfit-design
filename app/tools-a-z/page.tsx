import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LetterNav } from "@/components/letter-nav"
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
  MessageCircle,
  FileSearch,
  BookOpen,
  HelpCircle,
  Languages,
  Sparkles,
  FilePlus,
} from "lucide-react"

export const metadata: Metadata = {
  title: "All PDF Tools A–Z | PDF.it",
  description:
    "Browse every PDF.it tool in alphabetical order. Convert, compress, merge, split, protect, and more — find exactly what you need.",
  alternates: {
    canonical: "https://pdf.it.com/tools-a-z",
    languages: {
      en: "https://pdf.it.com/tools-a-z",
      es: "https://pdf.it.com/es/herramientas-a-z",
      pt: "https://pdf.it.com/br/ferramentas-a-z",
    },
  },
}

const tools = [
  { name: "AI PDF Summarizer", description: "Summarize long documents in seconds. Choose length and language.", icon: BookOpen, href: "/pdf-summarizer", tier: "BUSINESS" },
  { name: "AI Question Generator", description: "Generate study questions from any PDF. Multiple choice, short answer, and true/false.", icon: HelpCircle, href: "/question-generator", tier: "PRO" },
  { name: "ATS Resume Optimizer", description: "AI-powered resume analysis with ATS compatibility score and keyword suggestions.", icon: Target, href: "/ats-optimizer", tier: "PRO" },
  { name: "Chat with PDF", description: "Ask questions and get AI-powered answers from any PDF document.", icon: MessageCircle, href: "/chat-with-pdf", tier: "BUSINESS" },
  { name: "Compress PDF", description: "Reduce file size with Light, Medium, or Extreme compression.", icon: Compress, href: "/compress-pdf", tier: "FREE" },
  { name: "Create a Resume", description: "Build a professional resume from scratch with AI. Download as Word.", icon: FilePlus, href: "/create-resume", tier: "PRO" },
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
  { name: "Smart Data Extraction", description: "Automatically pull names, dates, amounts, and key data from any PDF.", icon: FileSearch, href: "/smart-extraction", tier: "BUSINESS" },
  { name: "Split PDF", description: "Divide a PDF into separate files.", icon: Split, href: "/split-pdf", tier: "FREE" },
  { name: "Table Extraction", description: "Extract tables from PDFs directly into Excel spreadsheets.", icon: FileSpreadsheet, href: "/table-extraction", tier: "BUSINESS" },
  { name: "Translate PDF", description: "Translate entire PDF documents into 13 languages with AI.", icon: Languages, href: "/translate-pdf", tier: "BUSINESS" },
  { name: "High-Volume Table Extraction", description: "Extract up to 2,000 pages of tables per month to Excel.", icon: FileSpreadsheet, href: "/table-extraction", tier: "ENTERPRISE" },
  { name: "Unlock PDF", description: "Remove password restrictions from a PDF.", icon: Unlock, href: "/unlock-pdf", tier: "FREE" },
  { name: "Upload-Ready PDF", description: "Fix and optimize PDFs for any upload portal in one click.", icon: Upload, href: "/upload-ready-pdf", tier: "FREE" },
  { name: "URL to PDF", description: "Convert any public webpage to a high-quality PDF document.", icon: Globe, href: "/url-to-pdf", tier: "PRO" },
  { name: "Watermark PDF", description: "Add text or image watermarks to PDFs.", icon: Droplets, href: "/watermark-pdf", tier: "PRO" },
  { name: "Word to PDF", description: "Convert Word documents to PDF instantly.", icon: FileText, href: "/word-to-pdf", tier: "PRO" },
  { name: "Workflow Automation", description: "Chain multiple PDF tools into one automated workflow.", icon: Repeat, href: "/workflow-automation", tier: "BUSINESS" },
  { name: "Workflow Templates", description: "Pre-built workflows for legal, accounting, and lab documents.", icon: Layers, href: "/workflow-automation", tier: "ENTERPRISE" },
]

const tierColors: Record<string, { badge: string; border: string; glow: string; check: string }> = {
  FREE: { badge: "rgba(148,163,184,0.15)", border: "rgba(148,163,184,0.3)", glow: "rgba(148,163,184,0.15)", check: "#94A3B8" },
  PRO: { badge: "rgba(214,179,106,0.15)", border: "rgba(214,179,106,0.4)", glow: "rgba(214,179,106,0.25)", check: "#E0C27A" },
  BUSINESS: { badge: "rgba(107,124,255,0.15)", border: "rgba(107,124,255,0.4)", glow: "rgba(107,124,255,0.3)", check: "#6B7CFF" },
  ENTERPRISE: { badge: "rgba(14,165,233,0.15)", border: "rgba(14,165,233,0.4)", glow: "rgba(14,165,233,0.25)", check: "#38BDF8" },
}

function TierBadge({ tier }: { tier: string }) {
  const c = tierColors[tier] || tierColors.FREE
  const labels: Record<string, string> = { FREE: "Free", PRO: "Pro", BUSINESS: "Business", ENTERPRISE: "Enterprise" }
  return (
    <span
      className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide whitespace-nowrap"
      style={{ background: c.badge, color: c.check, border: `1px solid ${c.border}` }}
    >
      {labels[tier] || "Free"}
    </span>
  )
}

export default function ToolsAZPage() {
  const letters = [...new Set(tools.map((t) => t.name[0].toUpperCase()))].sort()
  const totalFree = tools.filter((t) => t.tier === "FREE").length
  const totalPro = tools.filter((t) => t.tier === "PRO").length
  const totalBusiness = tools.filter((t) => t.tier === "BUSINESS").length
  const totalEnterprise = tools.filter((t) => t.tier === "ENTERPRISE").length

  return (
    <div className="min-h-screen" style={{ background: "#0E0F1E" }}>
      <Header />
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
              <span className="text-sm font-medium text-slate-300">{tools.length} tools available</span>
            </div>
            <h1
              className="text-4xl lg:text-5xl font-black mb-4"
              style={{ letterSpacing: "-1.5px" }}
            >
              All PDF Tools{" "}
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
              Every tool in one place, sorted alphabetically. Click a letter to jump.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              {[
                { label: `${totalFree} Free`, color: "#94A3B8" },
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

        {/* Sticky letter nav with active state highlighting */}
        <LetterNav letters={letters} />

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
                <div key={letter} id={`letter-${letter}`} className="mb-14 scroll-mt-24 sm:scroll-mt-36">
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
                      {letterTools.length} tool{letterTools.length !== 1 ? "s" : ""}
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
              <h2 className="text-2xl font-black text-white mb-3">Ready to get started?</h2>
              <p className="text-slate-400 mb-8">Pick any tool above or start with the most popular ones.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/compress-pdf"
                  className="cta-primary inline-flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #14D8C4, #0FBFB0)",
                    color: "#0E0F1E",
                    boxShadow: "0 0 24px rgba(20,216,196,0.45), 0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  Compress PDF <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/merge-pdf"
                  className="inline-flex items-center justify-center gap-2 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  Merge PDF <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { Shield, FileOutput, Lock, Zap, GraduationCap, Building, Briefcase, Scale } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About PDF.it — Privacy-First Online PDF Tools for Teams & Individuals",
  description:
    "PDF.it is a browser-based PDF platform. Convert, compress, sign, redact, and automate PDFs — files are deleted immediately after download. Free, Pro, Business, and Enterprise plans available.",
  openGraph: {
    title: "About PDF.it — Privacy-First Online PDF Tools for Teams & Individuals",
    description:
      "PDF.it is a browser-based PDF platform. Convert, compress, sign, redact, and automate PDFs — files are deleted immediately after download.",
    url: "https://pdf.it.com/about",
    siteName: "PDF.it",
    images: [{ url: "https://pdf.it.com/og-logo.png", width: 1200, height: 630, alt: "PDF.it — About" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About PDF.it — Privacy-First Online PDF Tools for Teams & Individuals",
    description:
      "PDF.it is a browser-based PDF platform. Convert, compress, sign, redact, and automate PDFs — files are deleted immediately after download.",
    images: ["https://pdf.it.com/og-logo.png"],
  },
  alternates: {
    canonical: "https://pdf.it.com/about",
    languages: {
      en: "https://pdf.it.com/about",
      es: "https://pdf.it.com/es/acerca",
      pt: "https://pdf.it.com/br/sobre",
    },
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Header />
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">About PDF.it — Built for Professionals, Trusted by Professionals</h1>
              <p className="text-xl text-slate-300">
                PDF.it is a browser-based PDF platform built for individuals, teams, and organizations. Convert, compress, sign, redact, and automate — your files are processed and deleted immediately. We never store your documents.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. Mission + Privacy ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              PDF.it gives you a full suite of PDF tools that run entirely in the browser. Convert documents, compress files, add electronic signatures, redact sensitive data, extract tables, and automate recurring workflows — all without installing software. Privacy is built into every step: your files are processed in real time and deleted as soon as you download the result.
            </p>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Files deleted immediately after download</li>
              <li className="flex items-center gap-2">✓ SSL-encrypted transfers</li>
              <li className="flex items-center gap-2">✓ No file storage — ever</li>
              <li className="flex items-center gap-2">✓ No account needed for free tools</li>
            </ul>
          </div>
        </section>

        {/* ── 3. What You Can Do ── */}
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
            <h2 className="text-3xl font-black text-white mb-8 text-center">What You Can Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Convert & Compress",
                  desc: "Convert PDFs to Word, Excel, JPG, PNG, TXT, and more. Compress files for email and upload limits. Merge, split, rotate, and flatten — all in your browser.",
                },
                {
                  title: "Sign, Protect & Redact",
                  desc: "Add electronic signatures, password-protect documents, and permanently redact sensitive information. Watermark PDFs for branding and document control.",
                },
                {
                  title: "Automate & Extract",
                  desc: "Chain multiple PDF tools into automated workflows. Extract tables from PDFs into Excel spreadsheets. Run OCR to make scanned documents searchable.",
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

        {/* ── 4. Pricing Tiers ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-black text-slate-900 mb-4 text-center">Plans That Scale With You</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center max-w-3xl mx-auto mb-10">
              Start free and upgrade only when your document volume, file sizes, or workflow complexity grows.
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
                {/* Free */}
                <div className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(148,163,184,0.4), rgba(148,163,184,0.2), rgba(148,163,184,0.3))" }}>
                  <div className="rounded-[11px] p-6 h-full" style={{ background: "radial-gradient(ellipse 70% 60% at 95% 90%, rgba(148,163,184,0.06) 0%, transparent 70%), rgba(255, 255, 255, 0.05)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(148,163,184,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <h3 className="text-lg font-bold text-white mb-1">Free</h3>
                    <p className="text-slate-400 font-semibold text-sm mb-4">$0/month</p>
                    <ul className="space-y-2">
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-slate-400 mt-0.5">&#10003;</span><span>10 conversions per day</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-slate-400 mt-0.5">&#10003;</span><span>Files up to 25MB</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-slate-400 mt-0.5">&#10003;</span><span>Basic PDF tools (compress, merge, split, rotate, convert)</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-slate-400 mt-0.5">&#10003;</span><span>Single file processing</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-slate-400 mt-0.5">&#10003;</span><span>Standard speed</span></li>
                    </ul>
                  </div>
                </div>

                {/* Pro — gold */}
                <div className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(214,179,106,0.5), rgba(20,216,196,0.3), rgba(214,179,106,0.3), rgba(214,179,106,0.4))" }}>
                  <div className="rounded-[11px] p-6 h-full relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(214,179,106,0.05) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(214,179,106,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-b-md text-[9px] font-bold uppercase tracking-widest whitespace-nowrap" style={{ background: "linear-gradient(135deg, #D6B36A, #E0C27A)", color: "#0E0F1E" }}>Most Popular</div>
                    <h3 className="text-lg font-bold text-white mb-1 mt-3">Pro</h3>
                    <p className="text-[#E0C27A] font-semibold text-sm mb-4">$7.99/month</p>
                    <p className="text-[#6B7CFF] text-xs font-medium mb-3">Everything in Free, plus:</p>
                    <ul className="space-y-2">
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#E0C27A] mt-0.5">&#10003;</span><span>Unlimited conversions</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#E0C27A] mt-0.5">&#10003;</span><span>Files up to 200MB</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#E0C27A] mt-0.5">&#10003;</span><span>All PDF tools (OCR, QR code, PDF to Word/Excel/PowerPoint)</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#E0C27A] mt-0.5">&#10003;</span><span>Batch processing (multiple files at once)</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#E0C27A] mt-0.5">&#10003;</span><span>Priority processing speed</span></li>
                    </ul>
                  </div>
                </div>

                {/* Business — sapphire */}
                <div className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(107,124,255,0.5), rgba(20,216,196,0.3), rgba(107,124,255,0.35), rgba(107,124,255,0.4))" }}>
                  <div className="rounded-[11px] p-6 h-full relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(107,124,255,0.06) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(107,124,255,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-b-md text-[9px] font-bold uppercase tracking-widest whitespace-nowrap" style={{ background: "linear-gradient(135deg, #6B7CFF, #8B9AFF)", color: "#0E0F1E" }}>Best for Teams</div>
                    <h3 className="text-lg font-bold text-white mb-1 mt-3">Business</h3>
                    <p className="text-[#6B7CFF] font-semibold text-sm mb-4">$13.99/month</p>
                    <p className="text-[#6B7CFF] text-xs font-medium mb-3">Everything in Pro, plus:</p>
                    <ul className="space-y-2">
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#6B7CFF] mt-0.5">&#10003;</span><span>Files up to 1GB</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#6B7CFF] mt-0.5">&#10003;</span><span>Table extraction to Excel (200 pages/month)</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#6B7CFF] mt-0.5">&#10003;</span><span>PDF comparison (side-by-side diff)</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#6B7CFF] mt-0.5">&#10003;</span><span>eSign documents</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#6B7CFF] mt-0.5">&#10003;</span><span>PDF redaction (permanent removal)</span></li>
                    </ul>
                  </div>
                </div>

                {/* Enterprise — platinum */}
                <div className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(192,197,206,0.5), rgba(20,216,196,0.3), rgba(192,197,206,0.35), rgba(192,197,206,0.4))" }}>
                  <div className="rounded-[11px] p-6 h-full relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(192,197,206,0.06) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(192,197,206,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-b-md text-[9px] font-bold uppercase tracking-widest whitespace-nowrap" style={{ background: "linear-gradient(135deg, #C0C5CE, #14D8C4)", color: "#0E0F1E" }}>Best Value</div>
                    <h3 className="text-lg font-bold text-white mb-1 mt-3">Enterprise</h3>
                    <p className="text-[#C0C5CE] font-semibold text-sm mb-4">$49.99/month</p>
                    <p className="text-[#6B7CFF] text-xs font-medium mb-3">Everything in Business, plus:</p>
                    <ul className="space-y-2">
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#C0C5CE] mt-0.5">&#10003;</span><span>Table extraction to Excel (2,000 pages/month)</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#C0C5CE] mt-0.5">&#10003;</span><span>Workflow automation</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#C0C5CE] mt-0.5">&#10003;</span><span>Custom workflow templates</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#C0C5CE] mt-0.5">&#10003;</span><span>Priority processing queue</span></li>
                      <li className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"><span className="text-[#C0C5CE] mt-0.5">&#10003;</span><span>Dedicated email support (24h response)</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Built For ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Built for Real Workflows</h2>

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
                    title: "Students & Researchers",
                    desc: "Convert papers, extract tables, compress large documents, and run OCR on scanned lecture notes.",
                  },
                  {
                    icon: Building,
                    title: "Businesses & Teams",
                    desc: "Process invoices, contracts, and onboarding packets. Run eSign, redaction, and workflow automation.",
                  },
                  {
                    icon: Briefcase,
                    title: "Freelancers & Job Seekers",
                    desc: "Prep deliverables, build resumes, watermark files, and password-protect documents.",
                  },
                  {
                    icon: Scale,
                    title: "Legal, Finance & Healthcare",
                    desc: "Redact sensitive data, extract compliance tables, and automate document workflows.",
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

        {/* ── 6. Privacy Commitment ── */}
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
            <filter id="privacyGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#privacyGrain)" />
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
                <h2 className="text-2xl font-black text-white mb-4">Your Documents Are Your Business</h2>
                <p className="text-slate-400 leading-relaxed">
                  PDF.it processes your files in real time and deletes them as soon as you download the result. We never store, read, index, or share your documents. All transfers are SSL-encrypted. Your privacy isn&apos;t a feature — it&apos;s the foundation of how we built this platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. CTA ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Start Converting for Free</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              No account needed for free tools. Upgrade when you need unlimited access, larger files, or advanced workflows.
            </p>
            <Link href="/#tools">
              <button className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 px-8 rounded-xl text-lg transition-colors">
                Start Converting Free
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

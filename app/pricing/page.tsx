"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Star, Crown } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const [billing, setBillingState] = useState<"monthly" | "annual">("monthly")

  useEffect(() => {
    const saved = localStorage.getItem("pricing_billing")
    if (saved === "annual") setBillingState("annual")
  }, [])

  const setBilling = (value: "monthly" | "annual") => {
    setBillingState(value)
    localStorage.setItem("pricing_billing", value)
  }

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Header />
      <main>
        {/* Hero Section — dark cinematic */}
        <section className="relative text-white py-16 overflow-hidden" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(107,124,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(20,216,196,0.10) 0%, transparent 50%), #0E0F1E" }}>
          {/* Grain overlay */}
          <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg"><filter id="pricingGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter><rect width="100%" height="100%" filter="url(#pricingGrain)" /></svg>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Choose Your Plan</h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                Start free, upgrade when you need more. Files deleted immediately — your privacy comes first.
              </p>

              {/* Billing Toggle */}
              <div className="inline-flex items-center bg-white/10 rounded-full p-1">
                <button
                  type="button"
                  onClick={() => setBilling("monthly")}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    billing === "monthly"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBilling("annual")}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    billing === "annual"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  Annual
                  <span className="bg-[#14D8C4] text-[#0E0F1E] text-xs font-bold px-2 py-0.5 rounded-full">
                    Save 2 months
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards — continues dark background */}
        <section className="relative py-20 overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(107,124,255,0.08) 0%, transparent 60%), #0E0F1E" }}>
          <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg"><filter id="cardsGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter><rect width="100%" height="100%" filter="url(#cardsGrain)" /></svg>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                {/* Free Plan */}
                <div className="rounded-2xl p-[1px] flex" style={{ background: "linear-gradient(135deg, rgba(148,163,184,0.4), rgba(148,163,184,0.2), rgba(148,163,184,0.3))" }}>
                  <div className="rounded-[15px] p-8 flex flex-col w-full" style={{ background: "radial-gradient(ellipse 70% 60% at 95% 90%, rgba(148,163,184,0.06) 0%, transparent 70%), rgba(255, 255, 255, 0.05)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(148,163,184,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-black text-white mb-2">Free</h2>
                      <p className="text-sm text-slate-400 mb-4">Get started with essential PDF tools</p>
                      <div className="mb-2">
                        <span className="text-5xl font-black text-slate-400">$0</span>
                        <span className="text-lg text-slate-500">/month</span>
                      </div>
                    </div>
                    <div className="space-y-3 mb-8 flex-grow">
                      {["10 conversions per day", "Files up to 25MB", "Basic PDF tools (compress, merge, split, rotate, convert)", "Single file processing", "Standard speed"].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <span className="text-slate-400 flex-shrink-0">&#10003;</span>
                          <span className="text-slate-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 text-lg rounded-xl" asChild>
                      <Link href="/dashboard">Get Started Free</Link>
                    </Button>
                  </div>
                </div>

                {/* Pro Plan — gold */}
                <div className="rounded-2xl p-[1px] flex" style={{ background: "linear-gradient(135deg, rgba(214,179,106,0.5), rgba(20,216,196,0.3), rgba(214,179,106,0.3), rgba(214,179,106,0.4))" }}>
                  <div className="rounded-[15px] p-8 pt-10 flex flex-col w-full relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(214,179,106,0.05) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(214,179,106,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-widest whitespace-nowrap" style={{ background: "linear-gradient(135deg, #D6B36A, #E0C27A)", color: "#0E0F1E" }}>Most Popular</div>
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-black text-white mb-2">Pro</h2>
                      <p className="text-sm text-slate-400 mb-4">Unlock all tools with no daily limits</p>
                      <div className="mb-2">
                        <span className="text-5xl font-black text-[#E0C27A]">{billing === "monthly" ? "$7.99" : "$79.90"}</span>
                        <span className="text-lg text-slate-400">{billing === "monthly" ? "/month" : "/year"}</span>
                      </div>
                      <div className="min-h-[20px]">{billing === "annual" && <p className="text-sm text-slate-400">Equivalent to $6.66/mo billed annually</p>}</div>
                    </div>
                    <div className="space-y-3 mb-8 flex-grow">
                      <p className="text-sm text-[#6B7CFF] font-medium">Everything in Free, plus:</p>
                      {["Unlimited conversions", "Files up to 200MB", "All PDF tools (OCR, QR code, PDF to Word/Excel/PowerPoint)", "AI Question Generator", "Batch processing (multiple files at once)", "Priority processing speed"].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <span className="text-[#E0C27A] flex-shrink-0">&#10003;</span>
                          <span className="text-slate-300 text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 text-lg rounded-xl" asChild>
                      <Link href={billing === "monthly" ? "/upgrade" : "/upgrade?billing=annual"}>
                        {billing === "monthly" ? "Upgrade to Pro" : "Save 2 Months — Annual"}
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Business Plan — sapphire */}
                <div className="rounded-2xl p-[1px] flex" style={{ background: "linear-gradient(135deg, rgba(107,124,255,0.5), rgba(20,216,196,0.3), rgba(107,124,255,0.35), rgba(107,124,255,0.4))" }}>
                  <div className="rounded-[15px] p-8 pt-10 flex flex-col w-full relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(107,124,255,0.06) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(107,124,255,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-widest whitespace-nowrap" style={{ background: "linear-gradient(135deg, #6B7CFF, #8B9AFF)", color: "#0E0F1E" }}>Best for Teams</div>
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-black text-white mb-2">Business</h2>
                      <p className="text-sm text-slate-400 mb-4">Advanced tools for professionals and teams</p>
                      <div className="mb-2">
                        <span className="text-5xl font-black text-[#6B7CFF]">{billing === "monthly" ? "$13.99" : "$139.90"}</span>
                        <span className="text-lg text-slate-400">{billing === "monthly" ? "/month" : "/year"}</span>
                      </div>
                      <div className="min-h-[20px]">{billing === "annual" && <p className="text-sm text-slate-400">Equivalent to $11.66/mo billed annually</p>}</div>
                    </div>
                    <div className="space-y-3 mb-8 flex-grow">
                      <p className="text-sm text-[#6B7CFF] font-medium">Everything in Pro, plus:</p>
                      {["Files up to 1GB", "Chat with PDF (AI Q&A)", "AI PDF Summarizer", "Smart Data Extraction", "Translate PDF (13 languages)", "Table extraction to Excel (200 pages/month)", "PDF comparison (side-by-side diff)", "eSign documents", "PDF redaction (permanent removal)"].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <span className="text-[#6B7CFF] flex-shrink-0">&#10003;</span>
                          <span className="text-slate-300 text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 text-lg rounded-xl" asChild>
                      <Link href={billing === "monthly" ? "/upgrade?plan=business" : "/upgrade?plan=business&billing=annual"}>
                        {billing === "monthly" ? "Upgrade to Business" : "Save 2 Months — Annual"}
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Enterprise Plan — platinum */}
                <div className="rounded-2xl p-[1px] flex" style={{ background: "linear-gradient(135deg, rgba(192,197,206,0.5), rgba(20,216,196,0.3), rgba(192,197,206,0.35), rgba(192,197,206,0.4))" }}>
                  <div className="rounded-[15px] p-8 pt-10 flex flex-col w-full relative overflow-hidden" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(192,197,206,0.06) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%), rgba(255, 255, 255, 0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(192,197,206,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold uppercase tracking-widest whitespace-nowrap" style={{ background: "linear-gradient(135deg, #C0C5CE, #14D8C4)", color: "#0E0F1E" }}>Best Value</div>
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-black text-white mb-2">Enterprise</h2>
                      <p className="text-sm text-slate-400 mb-4">Built for law firms, accountants, and labs</p>
                      <div className="mb-2">
                        <span className="text-5xl font-black text-[#C0C5CE]">{billing === "monthly" ? "$49.99" : "$499.90"}</span>
                        <span className="text-lg text-slate-400">{billing === "monthly" ? "/month" : "/year"}</span>
                      </div>
                      <div className="min-h-[20px]">{billing === "annual" && <p className="text-sm text-slate-400">Equivalent to $41.66/mo billed annually</p>}</div>
                    </div>
                    <div className="space-y-3 mb-8 flex-grow">
                      <p className="text-sm text-[#6B7CFF] font-medium">Everything in Business, plus:</p>
                      {["Table extraction to Excel (2,000 pages/month)", "Workflow automation", "Priority processing queue", "Dedicated email support (24h response)", "Custom workflow templates"].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <span className="text-[#C0C5CE] flex-shrink-0">&#10003;</span>
                          <span className="text-slate-300 text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 text-lg rounded-xl" asChild>
                      <Link href={billing === "monthly" ? "/upgrade?plan=enterprise" : "/upgrade?plan=enterprise&billing=annual"}>
                        {billing === "monthly" ? "Upgrade to Enterprise" : "Save 2 Months — Annual"}
                      </Link>
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-black text-slate-900 text-center mb-12">Compare All Features</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="text-left py-4 px-4 text-slate-900 font-bold text-lg">Feature</th>
                      <th className="text-center py-4 px-4 text-slate-500 font-bold text-lg">Free</th>
                      <th className="text-center py-4 px-4 text-[#E0C27A] font-bold text-lg">Pro</th>
                      <th className="text-center py-4 px-4 text-[#6B7CFF] font-bold text-lg">Business</th>
                      <th className="text-center py-4 px-4 text-[#C0C5CE] font-bold text-lg">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">Conversions per day</td>
                      <td className="py-4 px-4 text-center text-slate-700">10</td>
                      <td className="py-4 px-4 text-center text-slate-700">Unlimited</td>
                      <td className="py-4 px-4 text-center text-slate-700">Unlimited</td>
                      <td className="py-4 px-4 text-center text-slate-700">Unlimited</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-[#F3F4FF]">
                      <td className="py-4 px-4 text-slate-700 font-medium">Max file size</td>
                      <td className="py-4 px-4 text-center text-slate-700">25MB</td>
                      <td className="py-4 px-4 text-center text-slate-700">200MB</td>
                      <td className="py-4 px-4 text-center text-slate-700">1GB</td>
                      <td className="py-4 px-4 text-center text-slate-700">1GB</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">Basic PDF tools</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-[#F3F4FF]">
                      <td className="py-4 px-4 text-slate-700 font-medium">PDF to Word/Excel/PowerPoint</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">OCR Scanner</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-[#F3F4FF]">
                      <td className="py-4 px-4 text-slate-700 font-medium">QR Code Generator</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">AI Question Generator</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-[#F3F4FF]">
                      <td className="py-4 px-4 text-slate-700 font-medium">Chat with PDF</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">AI PDF Summarizer</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-[#F3F4FF]">
                      <td className="py-4 px-4 text-slate-700 font-medium">Smart Data Extraction</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">Translate PDF (13 languages)</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-[#F3F4FF]">
                      <td className="py-4 px-4 text-slate-700 font-medium">Batch processing</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-[#F3F4FF]">
                      <td className="py-4 px-4 text-slate-700 font-medium">Workflow automation</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">Table extraction</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-700">200 pages/mo</td>
                      <td className="py-4 px-4 text-center text-slate-700">2,000 pages/mo</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-[#F3F4FF]">
                      <td className="py-4 px-4 text-slate-700 font-medium">PDF comparison</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">eSign documents</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-[#F3F4FF]">
                      <td className="py-4 px-4 text-slate-700 font-medium">PDF redaction</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">Priority processing</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-[#F3F4FF]">
                      <td className="py-4 px-4 text-slate-700 font-medium">Dedicated support</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-white">
                      <td className="py-4 px-4 text-slate-700 font-medium">Early access features</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center text-slate-400">—</td>
                      <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-[#14D8C4] mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to get started?</h2>
              <p className="text-xl text-slate-600 mb-8">
                Start with 10 free conversions per day. No credit card required.
              </p>
              <Button
                className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 text-lg rounded-xl"
                asChild
              >
                <Link href="/">Try Free Tools</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

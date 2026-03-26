"use client"

import { useState, useEffect } from "react"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { Button } from "@/components/ui/button"
import { Check, Star, Crown } from "lucide-react"
import Link from "next/link"

export default function PreciosPage() {
  const [billing, setBillingState] = useState<"monthly" | "annual">("monthly")

  useEffect(() => {
    const saved = localStorage.getItem("pricing_billing")
    if (saved === "annual") setBillingState("annual")
  }, [])

  const setBilling = (value: "monthly" | "annual") => {
    setBillingState(value)
    localStorage.setItem("pricing_billing", value)
  }

  const comparisonFeatures = [
    { feature: "Conversiones por dia", free: "10", pro: "Ilimitado", business: "Ilimitado", enterprise: "Ilimitado" },
    { feature: "Tamano maximo de archivo", free: "25MB", pro: "200MB", business: "1GB", enterprise: "1GB" },
    { feature: "Herramientas PDF basicas", free: true, pro: true, business: true, enterprise: true },
    { feature: "PDF a Word/Excel/PowerPoint", free: false, pro: true, business: true, enterprise: true },
    { feature: "Scanner OCR", free: false, pro: true, business: true, enterprise: true },
    { feature: "Generador de codigos QR", free: false, pro: true, business: true, enterprise: true },
    { feature: "Procesamiento por lotes", free: false, pro: true, business: true, enterprise: true },
    { feature: "Automatizacion de flujos", free: false, pro: false, business: true, enterprise: true },
    { feature: "Extraccion de tablas", free: false, pro: false, business: "200 paginas/mes", enterprise: "2,000 paginas/mes" },
    { feature: "Comparacion de PDFs", free: false, pro: false, business: true, enterprise: true },
    { feature: "Firma electronica", free: false, pro: false, business: true, enterprise: true },
    { feature: "Redaccion de PDFs", free: false, pro: false, business: true, enterprise: true },
    { feature: "Procesamiento prioritario", free: false, pro: false, business: false, enterprise: true },
    { feature: "Soporte dedicado", free: false, pro: false, business: false, enterprise: true },
    { feature: "Acceso anticipado a funciones", free: false, pro: false, business: false, enterprise: true },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        {/* Hero Section — dark cinematic */}
        <section className="relative text-white py-16 overflow-hidden" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(107,124,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(20,216,196,0.10) 0%, transparent 50%), #0E0F1E" }}>
          <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg"><filter id="pricingGrainEs"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter><rect width="100%" height="100%" filter="url(#pricingGrainEs)" /></svg>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Elige Tu Plan</h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                Empieza gratis, actualiza cuando necesites mas. Archivos eliminados de inmediato — tu privacidad es lo primero.
              </p>

              <div className="inline-flex items-center bg-white/10 rounded-full p-1">
                <button type="button" onClick={() => setBilling("monthly")} className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${billing === "monthly" ? "bg-white text-slate-900 shadow-sm" : "text-slate-300 hover:text-white"}`}>Mensual</button>
                <button type="button" onClick={() => setBilling("annual")} className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${billing === "annual" ? "bg-white text-slate-900 shadow-sm" : "text-slate-300 hover:text-white"}`}>
                  Anual
                  <span className="bg-[#14D8C4] text-[#0E0F1E] text-xs font-bold px-2 py-0.5 rounded-full">Ahorra 2 meses</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards — continues dark background */}
        <section className="relative py-20 overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(107,124,255,0.08) 0%, transparent 60%), #0E0F1E" }}>
          <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg"><filter id="cardsGrainEs"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter><rect width="100%" height="100%" filter="url(#cardsGrainEs)" /></svg>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                {/* Gratis */}
                <div className="rounded-2xl p-8 flex flex-col transition-shadow duration-300 hover:shadow-2xl" style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)", border: "1px solid rgba(148,163,184,0.25)", boxShadow: "0 0 0 1px rgba(148,163,184,0.1), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-black text-white mb-2">Gratis</h2>
                    <p className="text-sm text-slate-400 mb-4">Empieza con herramientas PDF esenciales</p>
                    <div className="mb-2">
                      <span className="text-5xl font-black text-slate-400">$0</span>
                      <span className="text-lg text-slate-500">/mes</span>
                    </div>
                  </div>
                  <div className="space-y-3 mb-8 flex-grow">
                    {["10 conversiones por dia","Archivos hasta 25MB","Herramientas PDF basicas (comprimir, unir, dividir, rotar, convertir)","Procesamiento de un solo archivo","Velocidad estandar"].map((f,i)=>(
                      <div key={i} className="flex items-center gap-3"><div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(148,163,184,0.2)" }}><Check className="h-3 w-3 text-slate-400" /></div><span className="text-slate-300">{f}</span></div>
                    ))}
                  </div>
                  <Button className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" asChild><Link href="/es/dashboard">Empezar Gratis</Link></Button>
                </div>

                {/* Pro — gold accents */}
                <div className="rounded-2xl p-8 relative flex flex-col transition-shadow duration-300 hover:shadow-2xl" style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)", border: "1px solid rgba(214,179,106,0.5)", boxShadow: "0 0 0 1px rgba(214,179,106,0.2), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"><div className="px-5 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg whitespace-nowrap text-[#0E0F1E]" style={{ background: "linear-gradient(135deg, #D6B36A, #E0C27A)" }}><Star className="h-4 w-4 fill-current" />Mas Popular</div></div>
                  <div className="text-center mb-6 mt-4">
                    <h2 className="text-2xl font-black text-white mb-2">Pro</h2>
                    <p className="text-sm text-slate-400 mb-4">Desbloquea todas las herramientas sin limites diarios</p>
                    <div className="mb-2"><span className="text-5xl font-black text-[#E0C27A]">{billing === "monthly" ? "$7.99" : "$79.90"}</span><span className="text-lg text-slate-400">{billing === "monthly" ? "/mes" : "/ano"}</span></div>
                    <div className="min-h-[20px]">{billing === "annual" && <p className="text-sm text-slate-400">Equivale a $6.66/mes facturado anualmente</p>}</div>
                  </div>
                  <div className="space-y-3 mb-8 flex-grow">
                    <p className="text-sm text-[#6B7CFF] font-medium">Todo en Gratis, mas:</p>
                    {["Conversiones ilimitadas","Archivos hasta 200MB","Todas las herramientas PDF (OCR, codigo QR, PDF a Word/Excel/PowerPoint)","Procesamiento por lotes (multiples archivos a la vez)","Velocidad de procesamiento prioritaria"].map((f,i)=>(
                      <div key={i} className="flex items-center gap-3"><div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(214,179,106,0.2)" }}><Check className="h-3 w-3 text-[#E0C27A]" /></div><span className="text-slate-300 font-medium">{f}</span></div>
                    ))}
                  </div>
                  <Button className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" asChild><Link href={billing === "monthly" ? "/upgrade" : "/upgrade?billing=annual"}>{billing === "monthly" ? "Actualizar a Pro" : "Ahorra 2 Meses — Anual"}</Link></Button>
                </div>

                {/* Business — sapphire accents */}
                <div className="rounded-2xl p-8 relative flex flex-col transition-shadow duration-300 hover:shadow-2xl" style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)", border: "1px solid rgba(107,124,255,0.5)", boxShadow: "0 0 0 1px rgba(107,124,255,0.2), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"><div className="px-5 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg whitespace-nowrap text-white" style={{ background: "linear-gradient(135deg, #6B7CFF, #8B9AFF)" }}>Ideal para Equipos</div></div>
                  <div className="text-center mb-6 mt-4">
                    <h2 className="text-2xl font-black text-white mb-2">Business</h2>
                    <p className="text-sm text-slate-400 mb-4">Herramientas avanzadas para profesionales y equipos</p>
                    <div className="mb-2"><span className="text-5xl font-black text-[#6B7CFF]">{billing === "monthly" ? "$13.99" : "$139.90"}</span><span className="text-lg text-slate-400">{billing === "monthly" ? "/mes" : "/ano"}</span></div>
                    <div className="min-h-[20px]">{billing === "annual" && <p className="text-sm text-slate-400">Equivale a $11.66/mes facturado anualmente</p>}</div>
                  </div>
                  <div className="space-y-3 mb-8 flex-grow">
                    <p className="text-sm text-[#6B7CFF] font-medium">Todo en Pro, mas:</p>
                    {["Archivos hasta 1GB","Extraccion de tablas a Excel (200 paginas/mes)","Automatizacion de flujos (encadena herramientas)","Comparacion de PDFs (diferencias lado a lado)","Firma electronica de documentos","Redaccion de PDFs (eliminacion permanente)"].map((f,i)=>(
                      <div key={i} className="flex items-center gap-3"><div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(107,124,255,0.2)" }}><Check className="h-3 w-3 text-[#6B7CFF]" /></div><span className="text-slate-300 font-medium">{f}</span></div>
                    ))}
                  </div>
                  <Button className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" asChild><Link href={billing === "monthly" ? "/upgrade?plan=business" : "/upgrade?plan=business&billing=annual"}>{billing === "monthly" ? "Actualizar a Business" : "Ahorra 2 Meses — Anual"}</Link></Button>
                </div>

                {/* Enterprise — platinum accents */}
                <div className="rounded-2xl p-8 relative flex flex-col transition-shadow duration-300 hover:shadow-2xl" style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)", border: "1px solid rgba(192,197,206,0.5)", boxShadow: "0 0 0 1px rgba(192,197,206,0.2), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"><div className="px-5 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg whitespace-nowrap text-[#0E0F1E]" style={{ background: "linear-gradient(135deg, #C0C5CE, #14D8C4)" }}><Crown className="h-4 w-4 fill-current" />Mejor Valor</div></div>
                  <div className="text-center mb-6 mt-4">
                    <h2 className="text-2xl font-black text-white mb-2">Enterprise</h2>
                    <p className="text-sm text-slate-400 mb-4">Disenado para bufetes de abogados, contadores y laboratorios</p>
                    <div className="mb-2"><span className="text-5xl font-black text-[#C0C5CE]">{billing === "monthly" ? "$49.99" : "$499.90"}</span><span className="text-lg text-slate-400">{billing === "monthly" ? "/mes" : "/ano"}</span></div>
                    <div className="min-h-[20px]">{billing === "annual" && <p className="text-sm text-slate-400">Equivale a $41.66/mes facturado anualmente</p>}</div>
                  </div>
                  <div className="space-y-3 mb-8 flex-grow">
                    <p className="text-sm text-[#6B7CFF] font-medium">Todo en Business, mas:</p>
                    {["Extraccion de tablas a Excel (2,000 paginas/mes)","Cola de procesamiento prioritario","Soporte dedicado por email (respuesta en 24h)","Acceso anticipado a nuevas funciones","Plantillas de flujos personalizadas"].map((f,i)=>(
                      <div key={i} className="flex items-center gap-3"><div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(192,197,206,0.2)" }}><Check className="h-3 w-3 text-[#C0C5CE]" /></div><span className="text-slate-300 font-medium">{f}</span></div>
                    ))}
                  </div>
                  <Button className="w-full bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" asChild><Link href={billing === "monthly" ? "/upgrade?plan=enterprise" : "/upgrade?plan=enterprise&billing=annual"}>{billing === "monthly" ? "Actualizar a Enterprise" : "Ahorra 2 Meses — Anual"}</Link></Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-black text-center text-slate-900 mb-12">Compara Todas las Funciones</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="text-left py-4 px-4 text-slate-900 font-bold text-lg w-1/3">Funcion</th>
                      <th className="text-center py-4 px-4 text-slate-500 font-bold text-lg">Gratis</th>
                      <th className="text-center py-4 px-4 text-[#E0C27A] font-bold text-lg">Pro</th>
                      <th className="text-center py-4 px-4 text-[#6B7CFF] font-bold text-lg">Business</th>
                      <th className="text-center py-4 px-4 text-[#C0C5CE] font-bold text-lg">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((row, i) => (
                      <tr key={i} className={`border-b border-slate-200 ${i % 2 === 0 ? "bg-white" : "bg-[#F3F4FF]"}`}>
                        <td className="py-4 px-4 text-slate-700 font-medium">{row.feature}</td>
                        {(["free", "pro", "business", "enterprise"] as const).map((plan) => (
                          <td key={plan} className="text-center py-4 px-4">
                            {typeof row[plan] === "boolean" ? (
                              row[plan] ? (
                                <div className="flex justify-center"><Check className="h-5 w-5 text-[#14D8C4]" /></div>
                              ) : (
                                <span className="text-slate-300 text-lg">—</span>
                              )
                            ) : (
                              <span className="text-slate-700 font-semibold text-sm">{row[plan]}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
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
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Listo para empezar?</h2>
              <p className="text-xl text-slate-600 mb-8">
                Empieza con 10 conversiones gratis al dia. Sin tarjeta de credito.
              </p>
              <Button className="bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 px-8 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <Link href="/es">Probar Herramientas Gratis</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}

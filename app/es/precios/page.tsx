"use client"

import { useState } from "react"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { Button } from "@/components/ui/button"
import { Check, Star, Crown } from "lucide-react"
import Link from "next/link"

export default function PreciosPage() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly")

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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Elige Tu Plan</h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                Empieza gratis, actualiza cuando necesites mas.
              </p>
              <div className="inline-flex items-center bg-slate-700 rounded-full p-1">
                <button type="button" onClick={() => setBilling("monthly")} className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${billing === "monthly" ? "bg-white text-slate-900 shadow-sm" : "text-slate-300 hover:text-white"}`}>Mensual</button>
                <button type="button" onClick={() => setBilling("annual")} className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${billing === "annual" ? "bg-white text-slate-900 shadow-sm" : "text-slate-300 hover:text-white"}`}>
                  Anual
                  <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">Ahorra 2 meses</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {/* Gratis */}
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-black text-gray-600 mb-2">Gratis</h2>
                    <p className="text-sm text-gray-500 mb-4">Empieza con herramientas PDF esenciales</p>
                    <div className="mb-2">
                      <span className="text-5xl font-black text-gray-700">$0</span>
                      <span className="text-lg text-gray-500">/mes</span>
                    </div>
                  </div>
                  <div className="space-y-3 mb-8 flex-grow">
                    {["10 conversiones por dia","Archivos hasta 25MB","Herramientas PDF basicas (comprimir, unir, dividir, rotar, convertir)","Procesamiento de un solo archivo","Velocidad estandar"].map((f,i)=>(
                      <div key={i} className="flex items-center gap-3"><div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"><Check className="h-3 w-3 text-blue-600" /></div><span className="text-slate-700">{f}</span></div>
                    ))}
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" asChild><Link href="/es/dashboard">Empezar Gratis</Link></Button>
                </div>

                {/* Pro */}
                <div className="bg-white rounded-2xl border-2 border-orange-500 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative flex flex-col">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"><div className="bg-orange-500 text-white px-5 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg whitespace-nowrap"><Star className="h-4 w-4 fill-current" />Mas Popular</div></div>
                  <div className="text-center mb-6 mt-4">
                    <h2 className="text-2xl font-black text-slate-900 mb-2">Pro</h2>
                    <p className="text-sm text-slate-500 mb-4">Desbloquea todas las herramientas sin limites diarios</p>
                    <div className="mb-2"><span className="text-5xl font-black text-orange-500">{billing === "monthly" ? "$7.99" : "$79.90"}</span><span className="text-lg text-slate-600">{billing === "monthly" ? "/mes" : "/ano"}</span></div>
                    {billing === "annual" && <p className="text-sm text-slate-500">Equivale a $6.66/mes facturado anualmente</p>}
                  </div>
                  <div className="space-y-3 mb-8 flex-grow">
                    <p className="text-sm text-slate-500 font-medium">Todo en Gratis, mas:</p>
                    {["Conversiones ilimitadas","Archivos hasta 200MB","Todas las herramientas PDF (OCR, codigo QR, PDF a Word/Excel/PowerPoint)","Procesamiento por lotes (multiples archivos a la vez)","Velocidad de procesamiento prioritaria"].map((f,i)=>(
                      <div key={i} className="flex items-center gap-3"><div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"><Check className="h-3 w-3 text-blue-600" /></div><span className="text-slate-700 font-medium">{f}</span></div>
                    ))}
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" asChild><Link href={billing === "monthly" ? "/upgrade" : "/upgrade?billing=annual"}>{billing === "monthly" ? "Actualizar a Pro" : "Ahorra 2 Meses — Anual"}</Link></Button>
                </div>

                {/* Business */}
                <div className="bg-white rounded-2xl border-2 border-indigo-400 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative flex flex-col">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"><div className="bg-indigo-600 text-white px-5 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg whitespace-nowrap">Ideal para Equipos</div></div>
                  <div className="text-center mb-6 mt-4">
                    <h2 className="text-2xl font-black text-slate-900 mb-2">Business</h2>
                    <p className="text-sm text-slate-500 mb-4">Herramientas avanzadas para profesionales y equipos</p>
                    <div className="mb-2"><span className="text-5xl font-black text-indigo-600">{billing === "monthly" ? "$13.99" : "$139.90"}</span><span className="text-lg text-slate-600">{billing === "monthly" ? "/mes" : "/ano"}</span></div>
                    {billing === "annual" && <p className="text-sm text-slate-500">Equivale a $11.66/mes facturado anualmente</p>}
                  </div>
                  <div className="space-y-3 mb-8 flex-grow">
                    <p className="text-sm text-slate-500 font-medium">Todo en Pro, mas:</p>
                    {["Archivos hasta 1GB","Extraccion de tablas a Excel (200 paginas/mes)","Automatizacion de flujos (encadena herramientas)","Comparacion de PDFs (diferencias lado a lado)","Firma electronica de documentos","Redaccion de PDFs (eliminacion permanente)"].map((f,i)=>(
                      <div key={i} className="flex items-center gap-3"><div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"><Check className="h-3 w-3 text-blue-600" /></div><span className="text-slate-700 font-medium">{f}</span></div>
                    ))}
                  </div>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" asChild><Link href={billing === "monthly" ? "/upgrade?plan=business" : "/upgrade?plan=business&billing=annual"}>{billing === "monthly" ? "Actualizar a Business" : "Ahorra 2 Meses — Anual"}</Link></Button>
                </div>

                {/* Enterprise */}
                <div className="bg-slate-900 rounded-2xl border-2 border-[#D4AF37] p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative flex flex-col">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"><div className="bg-[#D4AF37] text-slate-900 px-5 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg whitespace-nowrap"><Crown className="h-4 w-4 fill-current" />Mejor Valor</div></div>
                  <div className="text-center mb-6 mt-4">
                    <h2 className="text-2xl font-black text-white mb-2">Enterprise</h2>
                    <p className="text-sm text-slate-400 mb-4">Disenado para bufetes de abogados, contadores y laboratorios</p>
                    <div className="mb-2"><span className="text-5xl font-black text-[#D4AF37]">{billing === "monthly" ? "$49.99" : "$499.90"}</span><span className="text-lg text-slate-400">{billing === "monthly" ? "/mes" : "/ano"}</span></div>
                    {billing === "annual" && <p className="text-sm text-slate-400">Equivale a $41.66/mes facturado anualmente</p>}
                  </div>
                  <div className="space-y-3 mb-8 flex-grow">
                    <p className="text-sm text-slate-400 font-medium">Todo en Business, mas:</p>
                    {["Extraccion de tablas a Excel (2,000 paginas/mes)","Cola de procesamiento prioritario","Soporte dedicado por email (respuesta en 24h)","Acceso anticipado a nuevas funciones","Plantillas de flujos personalizadas"].map((f,i)=>(
                      <div key={i} className="flex items-center gap-3"><div className="w-5 h-5 bg-[#D4AF37]/20 rounded-full flex items-center justify-center flex-shrink-0"><Check className="h-3 w-3 text-[#D4AF37]" /></div><span className="text-slate-200 font-medium">{f}</span></div>
                    ))}
                  </div>
                  <Button className="w-full bg-[#D4AF37] hover:bg-[#BF9B30] text-slate-900 font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" asChild><Link href={billing === "monthly" ? "/upgrade?plan=enterprise" : "/upgrade?plan=enterprise&billing=annual"}>{billing === "monthly" ? "Actualizar a Enterprise" : "Ahorra 2 Meses — Anual"}</Link></Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-black text-center mb-12">Compara Todas las Funciones</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="text-left py-4 px-4 text-slate-700 font-bold text-lg w-1/3">Funcion</th>
                      <th className="text-center py-4 px-4 text-gray-600 font-bold text-lg">Gratis</th>
                      <th className="text-center py-4 px-4 text-orange-500 font-bold text-lg">Pro</th>
                      <th className="text-center py-4 px-4 text-indigo-600 font-bold text-lg">Business</th>
                      <th className="text-center py-4 px-4 text-[#D4AF37] font-bold text-lg">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((row, i) => (
                      <tr key={i} className={`border-b border-slate-200 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                        <td className="py-4 px-4 text-slate-700 font-medium">{row.feature}</td>
                        {(["free", "pro", "business", "enterprise"] as const).map((plan) => (
                          <td key={plan} className="text-center py-4 px-4">
                            {typeof row[plan] === "boolean" ? (
                              row[plan] ? (
                                <div className="flex justify-center"><div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center"><Check className="h-4 w-4 text-blue-600" /></div></div>
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
        <section className="py-20 bg-[#191B4D] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-black mb-4">Listo para empezar?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Empieza con 10 conversiones gratis al dia. Sin tarjeta de credito.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" asChild>
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

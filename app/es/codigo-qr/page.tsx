"use client"

import { useState, useEffect } from "react"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { TrustBadges } from "@/components/trust-badges"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { QrCode, Loader2, Download, AlertCircle, Crown } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function CodigoQRPage() {
  const [text, setText] = useState("")
  const [image, setImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [authState, setAuthState] = useState<"loading" | "unauthenticated" | "no_pro" | "authorized">("loading")
  const router = useRouter()

  useEffect(() => {
    setAuthState("authorized")
  }, [])

  async function handleGenerate() {
    const supabase = createClient()
    if (supabase) {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push("/es/precios?source=qr-code")
        return
      }
      const { data: profile } = await supabase.from("users").select("plan").eq("id", user.id).single()
      if (profile?.plan !== "pro" && profile?.plan !== "business") {
        router.push("/es/precios?source=qr-code")
        return
      }
    }
    const trimmed = text.trim()
    if (!trimmed) {
      setError("Por favor ingresa una URL o texto para generar un codigo QR.")
      return
    }

    setIsLoading(true)
    setError(null)
    setImage(null)

    try {
      const res = await fetch("/api/qr-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: trimmed }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Error al generar el codigo QR")
      setImage(data.image)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Algo salio mal. Por favor intenta de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  function handleDownload() {
    if (!image) return
    const link = document.createElement("a")
    link.href = image
    link.download = "codigo-qr.png"
    link.click()
  }

  return (
    <div className="min-h-screen bg-white">
      <HeaderEs />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <QrCode className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-black">Generador de Codigo QR Online</h1>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300">
                Crea codigos QR al instante con OmnisPDF — genera un codigo QR para un enlace, texto, Wi-Fi, correo o informacion de contacto y descargalo en segundos.
              </p>
            </div>
          </div>
        </section>

        {/* Generator Interface */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto">
              {authState === "loading" && (
                <div className="flex justify-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
                </div>
              )}

              {authState === "no_pro" && (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Crown className="h-7 w-7 text-orange-500" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-800 mb-2">El Generador de Codigo QR es una funcion Pro.</h2>
                  <p className="text-sm text-slate-500 mb-6">Actualiza tu plan para desbloquear esta herramienta y mas.</p>
                  <Link href="/es/precios">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 rounded-xl">
                      <Crown className="mr-2 h-4 w-4" />
                      Actualizar a Pro
                    </Button>
                  </Link>
                </div>
              )}

              {authState === "authorized" && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="qr-text" className="text-slate-700 font-medium">
                      Ingresa URL o texto
                    </Label>
                    <Input
                      id="qr-text"
                      type="text"
                      placeholder="https://ejemplo.com"
                      value={text}
                      onChange={(e) => {
                        setText(e.target.value)
                        if (error) setError(null)
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleGenerate()
                      }}
                      className="border-slate-200 focus-visible:ring-orange-500"
                    />
                  </div>

                  <Button
                    onClick={handleGenerate}
                    disabled={isLoading}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 text-base rounded-xl"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generando...
                      </>
                    ) : (
                      <>
                        <QrCode className="mr-2 h-4 w-4" />
                        Generar Codigo QR
                      </>
                    )}
                  </Button>

                  {error && (
                    <div className="flex items-center gap-2 text-sm text-red-600">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <p>{error}</p>
                    </div>
                  )}
                </div>

                {image && (
                  <div className="mt-8 flex flex-col items-center gap-4">
                    <div className="rounded-xl border border-slate-200 p-4 bg-white shadow-sm">
                      <img
                        src={image}
                        alt="Codigo QR generado"
                        className="w-64 h-64"
                      />
                    </div>
                    <Button
                      onClick={handleDownload}
                      variant="outline"
                      className="border-slate-200 text-slate-700 hover:text-slate-900 font-medium"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Descargar Codigo QR
                    </Button>
                  </div>
                )}
              </div>
              )}
            </div>
            <TrustBadges />
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa el generador de codigos QR de OmnisPDF para crear un codigo QR para un enlace web, texto, datos de contacto o credenciales de Wi-Fi. Genera un codigo QR al instante y descargalo para volantes, empaques, menus, tarjetas de presentacion, presentaciones y redes sociales.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Genera codigos QR para URLs, texto, correo y numeros de telefono</li>
              <li>✓ Descarga como PNG para uso impreso y digital</li>
              <li>✓ Funciona en escritorio y movil — desde tu navegador</li>
              <li>✓ Creacion rapida con resultado limpio y escaneable</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Crea un Codigo QR para Cualquier Enlace</h2>
              <p className="text-slate-600">
                Convierte cualquier sitio web o pagina de destino en un codigo QR para que las personas puedan escanearlo y abrir el enlace al instante — ideal para marketing, eventos y empaques de productos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Genera Codigos QR para Texto, Correo y Telefono</h2>
              <p className="text-slate-600">
                Crea codigos QR que abran un borrador de correo, inicien una llamada o muestren un mensaje — util para tarjetas de presentacion, curriculos y senaletica.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Descarga para Uso Impreso o Digital</h2>
              <p className="text-slate-600">
                Descarga una imagen de codigo QR de alta calidad adecuada para posters, menus, etiquetas y presentaciones. Siempre escanea de prueba antes de imprimir.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Crear un Codigo QR</h2>
            <div className="space-y-4">
              {[
                "Ingresa una URL o texto en el generador de codigos QR de arriba.",
                "Haz clic en Generar Codigo QR.",
                "Descarga tu imagen de codigo QR y usala donde quieras.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF a PNG", href: "/es/pdf-a-png", desc: "Exporta paginas PDF como imagenes" },
                { name: "PDF a JPG", href: "/es/pdf-a-jpg", desc: "Convierte paginas PDF a JPG" },
                { name: "Marca de Agua PDF", href: "/es/marca-de-agua-pdf", desc: "Agrega marca a tus PDFs" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamano del PDF" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="border border-orange-200 bg-orange-50 rounded-xl p-4 hover:border-orange-400 hover:bg-orange-100 transition-all text-center flex flex-col justify-center min-h-[80px]"
                >
                  <div className="font-bold text-orange-600 text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-500">{tool.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                {
                  q: "¿Como creo un codigo QR con OmnisPDF?",
                  a: "Ingresa tu URL o texto, haz clic en Generar Codigo QR y descarga la imagen del codigo QR.",
                },
                {
                  q: "¿Que puedo poner en un codigo QR?",
                  a: "Las opciones mas comunes incluyen enlaces a sitios web, texto simple, direcciones de correo electronico y numeros de telefono.",
                },
                {
                  q: "¿Por que mi codigo QR no se escanea?",
                  a: "Los problemas de escaneo generalmente se deben a bajo contraste, tamano pequeno o borrosidad. Aumenta el tamano, mantiene un buen contraste y evita distorsion.",
                },
                {
                  q: "¿Que tamano debe tener un codigo QR para imprimirlo?",
                  a: "Una buena regla es mantenerlo lo suficientemente grande para escanearlo desde la distancia esperada — mas grande para posters, mas pequeno para tarjetas de presentacion.",
                },
                {
                  q: "¿El Generador de Codigo QR es gratis?",
                  a: "El Generador de Codigo QR es una funcion Pro, disponible en el plan Pro de OmnisPDF a $7.99/mes.",
                },
                {
                  q: "¿Se almacenan mis datos cuando genero un codigo QR?",
                  a: "Los codigos QR se generan y se entregan directamente a ti. No almacenamos el contenido que ingresas.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}

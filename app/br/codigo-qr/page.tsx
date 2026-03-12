"use client"

import { useState, useEffect } from "react"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
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
        router.push("/pricing?source=qr-code")
        return
      }
      const { data: profile } = await supabase.from("users").select("plan").eq("id", user.id).single()
      if (profile?.plan !== "pro" && profile?.plan !== "business") {
        router.push("/pricing?source=qr-code")
        return
      }
    }
    const trimmed = text.trim()
    if (!trimmed) {
      setError("Por favor, insira uma URL ou texto para gerar um código QR.")
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
      if (!res.ok) throw new Error(data.error || "Erro ao gerar o código QR")
      setImage(data.image)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Algo deu errado. Por favor, tente novamente.")
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
      <HeaderBr />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <QrCode className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-black">Gerador de Código QR Online</h1>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300">
                Crie códigos QR instantaneamente com o OmnisPDF — gere um código QR para um link, texto, Wi-Fi, e-mail ou informações de contato e baixe em segundos.
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
                  <h2 className="text-xl font-bold text-slate-800 mb-2">O Gerador de Código QR é uma função Pro.</h2>
                  <p className="text-sm text-slate-500 mb-6">Atualize seu plano para desbloquear esta ferramenta e mais.</p>
                  <Link href="/br/precos">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 rounded-xl">
                      <Crown className="mr-2 h-4 w-4" />
                      Atualizar para Pro
                    </Button>
                  </Link>
                </div>
              )}

              {authState === "authorized" && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="qr-text" className="text-slate-700 font-medium">
                      Insira URL ou texto
                    </Label>
                    <Input
                      id="qr-text"
                      type="text"
                      placeholder="https://exemplo.com"
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
                        Gerando...
                      </>
                    ) : (
                      <>
                        <QrCode className="mr-2 h-4 w-4" />
                        Gerar Código QR
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
                        alt="Código QR gerado"
                        className="w-64 h-64"
                      />
                    </div>
                    <Button
                      onClick={handleDownload}
                      variant="outline"
                      className="border-slate-200 text-slate-700 hover:text-slate-900 font-medium"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Baixar Código QR
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
              Use o gerador de códigos QR do OmnisPDF para criar um código QR para um link web, texto, dados de contato ou credenciais de Wi-Fi. Gere um código QR instantaneamente e baixe-o para flyers, embalagens, cardápios, cartões de visita, apresentações e redes sociais.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Gere códigos QR para URLs, texto, e-mail e números de telefone</li>
              <li>✓ Baixe como PNG para uso impresso e digital</li>
              <li>✓ Funciona em desktop e celular — direto do navegador</li>
              <li>✓ Criação rápida com resultado limpo e escaneável</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Crie um Código QR para Qualquer Link</h2>
              <p className="text-slate-600">
                Converta qualquer site ou página de destino em um código QR para que as pessoas possam escaneá-lo e abrir o link instantaneamente — ideal para marketing, eventos e embalagens de produtos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Gere Códigos QR para Texto, E-mail e Telefone</h2>
              <p className="text-slate-600">
                Crie códigos QR que abram um rascunho de e-mail, iniciem uma ligação ou exibam uma mensagem — útil para cartões de visita, currículos e sinalização.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Baixe para Uso Impresso ou Digital</h2>
              <p className="text-slate-600">
                Baixe uma imagem de código QR de alta qualidade adequada para pôsteres, cardápios, etiquetas e apresentações. Sempre faça um teste de escaneamento antes de imprimir.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Criar um Código QR</h2>
            <div className="space-y-4">
              {[
                "Insira uma URL ou texto no gerador de códigos QR acima.",
                "Clique em Gerar Código QR.",
                "Baixe sua imagem de código QR e use onde quiser.",
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
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF para PNG", href: "/br/pdf-para-png", desc: "Exporte páginas PDF como imagens" },
                { name: "PDF para JPG", href: "/br/pdf-para-jpg", desc: "Converta páginas PDF em JPG" },
                { name: "Marca d'Água PDF", href: "/br/marca-dagua-pdf", desc: "Adicione marca aos seus PDFs" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do PDF" },
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
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como crio um código QR com o OmnisPDF?", a: "Insira sua URL ou texto, clique em Gerar Código QR e baixe a imagem do código QR." },
                { q: "O que posso colocar em um código QR?", a: "As opções mais comuns incluem links para sites, texto simples, endereços de e-mail e números de telefone." },
                { q: "Por que meu código QR não escaneia?", a: "Problemas de escaneamento geralmente se devem a baixo contraste, tamanho pequeno ou borramento. Aumente o tamanho, mantenha bom contraste e evite distorção." },
                { q: "Qual tamanho deve ter um código QR para imprimir?", a: "Uma boa regra é mantê-lo grande o suficiente para escanear da distância esperada — maior para pôsteres, menor para cartões de visita." },
                { q: "O Gerador de Código QR é grátis?", a: "O Gerador de Código QR é uma função Pro, disponível no plano Pro do OmnisPDF a $7,99/mês." },
                { q: "Meus dados são armazenados quando gero um código QR?", a: "Os códigos QR são gerados e entregues diretamente a você. Não armazenamos o conteúdo que você insere." },
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
      <FooterBr />
    </div>
  )
}

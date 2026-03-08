"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrustBadges } from "@/components/trust-badges"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { QrCode, Loader2, Download, AlertCircle, Crown } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function QRCodePage() {
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
        router.push("/pro")
        return
      }
      const { data: profile } = await supabase.from("users").select("plan").eq("id", user.id).single()
      if (profile?.plan !== "pro" && profile?.plan !== "business") {
        router.push("/pro")
        return
      }
    }
    const trimmed = text.trim()
    if (!trimmed) {
      setError("Please enter a URL or text to generate a QR code.")
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
      if (!res.ok) throw new Error(data.error || "Failed to generate QR code")
      setImage(data.image)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  function handleDownload() {
    if (!image) return
    const link = document.createElement("a")
    link.href = image
    link.download = "qrcode.png"
    link.click()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <QrCode className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-black">QR Code Generator Online</h1>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300">
                Create QR codes instantly with OmnisPDF — generate a QR code for a link, text, Wi-Fi, email, or contact info and download it in seconds.
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
                  <h2 className="text-xl font-bold text-slate-800 mb-2">QR Code Generator is a Pro feature.</h2>
                  <p className="text-sm text-slate-500 mb-6">Upgrade your plan to unlock this tool and more.</p>
                  <Link href="/pricing">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 rounded-xl">
                      <Crown className="mr-2 h-4 w-4" />
                      Upgrade to Pro
                    </Button>
                  </Link>
                </div>
              )}

              {authState === "authorized" && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="qr-text" className="text-slate-700 font-medium">
                      Enter URL or text
                    </Label>
                    <Input
                      id="qr-text"
                      type="text"
                      placeholder="https://example.com"
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
                        Generating...
                      </>
                    ) : (
                      <>
                        <QrCode className="mr-2 h-4 w-4" />
                        Generate QR Code
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
                        alt="Generated QR Code"
                        className="w-64 h-64"
                      />
                    </div>
                    <Button
                      onClick={handleDownload}
                      variant="outline"
                      className="border-slate-200 text-slate-700 hover:text-slate-900 font-medium"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download QR Code
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
              Use OmnisPDF's QR code generator to create a QR code for a website link, text, contact details, or Wi-Fi credentials. Generate a QR code instantly and download it for flyers, packaging, menus, business cards, presentations, and social media.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Generate QR codes for URLs, text, email, and phone numbers</li>
              <li>✓ Download as PNG for print and web use</li>
              <li>✓ Works on desktop and mobile — browser-based</li>
              <li>✓ Fast creation with clean, scannable output</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Create a QR Code for Any Link</h2>
              <p className="text-slate-600">
                Turn any website or landing page into a QR code so people can scan and open the link instantly — ideal for marketing, events, and product packaging.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Generate QR Codes for Text, Email, and Phone</h2>
              <p className="text-slate-600">
                Create QR codes that open an email draft, start a call, or display a message — useful for business cards, resumes, and signage.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Download for Print or Digital Use</h2>
              <p className="text-slate-600">
                Download a high-quality QR code image suitable for posters, menus, labels, and presentations. Always test-scan before printing.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Make a QR Code</h2>
            <div className="space-y-4">
              {[
                "Enter a URL or text into the QR code generator above.",
                "Click Generate QR Code.",
                "Download your QR code image and use it anywhere.",
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
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF to PNG", href: "/pdf-to-png", desc: "Export PDF pages as images" },
                { name: "PDF to JPG", href: "/pdf-to-jpg", desc: "Convert PDF pages to JPG" },
                { name: "Watermark PDF", href: "/watermark-pdf", desc: "Brand your PDFs" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size" },
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
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How do I create a QR code with OmnisPDF?",
                  a: "Enter your URL or text, click Generate QR Code, then download the QR code image.",
                },
                {
                  q: "What can I put in a QR code?",
                  a: "Common options include website links, plain text, email addresses, and phone numbers.",
                },
                {
                  q: "Why isn't my QR code scanning?",
                  a: "Scanning issues usually come from low contrast, small size, or blur. Increase the size, keep strong contrast, and avoid distortion.",
                },
                {
                  q: "What size should a QR code be for printing?",
                  a: "A good rule is to keep it large enough to scan from the expected distance — bigger for posters, smaller for business cards.",
                },
                {
                  q: "Is the QR Code Generator free?",
                  a: "QR Code Generator is a Pro feature, available on the OmnisPDF Pro plan at $7.99/month.",
                },
                {
                  q: "Is my data stored when I generate a QR code?",
                  a: "QR codes are generated and returned to you directly. We do not store the content you enter.",
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
      <Footer />
    </div>
  )
}

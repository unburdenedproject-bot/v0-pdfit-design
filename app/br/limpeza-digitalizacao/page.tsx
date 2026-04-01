import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { PhoneScanCleanupInterface } from "@/components/phone-scan-cleanup-interface"
import { Camera, Zap, Shield, ScanLine } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Limpeza de Digitalização — Transforme Fotos do Celular em PDFs Limpos | PDF.it",
  description: "Envie uma foto de documento tirada com seu celular e obtenha um PDF limpo e profissional. Endireite, elimine sombras e melhore o contraste. Preto e branco ou limpeza colorida. Ferramenta online grátis.",
  alternates: {
    canonical: "/br/limpeza-digitalizacao",
    languages: {
      en: "/phone-scan-cleanup",
      es: "/es/limpiar-escaneo",
      pt: "/br/limpeza-digitalizacao",
    },
  },
}

export default function LimpezaDigitalizacaoPage() {
  const faqs = [
    { q: "O que é Limpeza de Digitalização?", a: "Ela pega fotos de documentos tiradas com a câmera do seu celular e as transforma em PDFs limpos e profissionais. Remove sombras, corrige a iluminação e melhora a nitidez do texto para resultados com qualidade de scanner." },
    { q: "Quais formatos de imagem são suportados?", a: "JPG, PNG e WEBP. Esses são os formatos padrão usados pelas câmeras de celulares tanto em iPhone quanto em Android." },
    { q: "Qual é a diferença entre Preto e Branco e Limpeza Colorida?", a: "Preto e Branco converte para texto preto nítido em fundo branco, como um scanner. Limpeza Colorida mantém as cores enquanto remove sombras e melhora o contraste." },
    { q: "A Limpeza de Digitalização é gratuita?", a: "Você pode limpar algumas digitalizações gratuitamente. Para uso ilimitado, faça upgrade para o plano Pro por $3.99/mês." },
    { q: "Funciona com qualquer câmera de celular?", a: "Sim. Funciona com fotos de qualquer celular — iPhone, Samsung, Google Pixel ou qualquer dispositivo Android." },
    { q: "Posso tornar o texto pesquisável?", a: "Esta ferramenta cria um PDF limpo a partir da sua foto. Para tornar o texto pesquisável, passe o resultado pela nossa ferramenta Scanner OCR." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        {/* Hero */}
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
                <Camera className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Limpeza de Digitalização</h1>
              <p className="text-xl text-slate-300 mb-8">
                Transforme fotos de documentos tiradas com o celular em PDFs limpos e profissionais. Remova sombras, corrija a iluminação, melhore o texto — sem scanner ou app.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><ScanLine className="h-4 w-4 text-[#14D8C4]" /><span>Remoção de Sombras</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Contraste Automático</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>PDF Instantâneo</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Fotos de documentos tiradas com o celular têm sombras, iluminação desigual e texto desbotado. A Limpeza de Digitalização transforma fotos bagunçadas em PDFs limpos e de alto contraste que parecem ter saído de um scanner profissional. Perfeito para contratos, recibos, anotações e cópias de documentos.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Remove sombras e corrige iluminação desigual</li>
              <li className="flex items-center gap-2">✓ Modos Preto e Branco ou Limpeza Colorida</li>
              <li className="flex items-center gap-2">✓ Funciona com qualquer câmera de celular</li>
              <li className="flex items-center gap-2">✓ Sem instalação — limpe digitalizações no navegador</li>
            </ul>
          </div>
        </section>

        {/* Tool Interface */}
        <PhoneScanCleanupInterface />

        {/* Feature Blocks */}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Contratos e Documentos Legais", desc: "Tire uma foto de um contrato assinado e obtenha um PDF profissional em vez de uma foto escura e com sombras. Pronto para enviar por email ou arquivar." },
                { title: "Recibos e Relatórios de Despesas", desc: "Capture recibos com seu celular para relatórios de despesas. A Limpeza Colorida preserva logos e cores enquanto remove sombras e reflexos." },
                { title: "Anotações, Quadros e Documentos", desc: "Converta anotações manuscritas, sessões de quadro branco ou cópias de documentos em PDFs limpos e legíveis. O modo Preto e Branco destaca o texto." },
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

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Limpar uma Digitalização do Celular</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie sua foto", desc: "Arraste e solte ou clique para escolher um arquivo" },
                { num: "2", title: "Escolha o modo de limpeza", desc: "Preto e Branco ou Limpeza Colorida" },
                { num: "3", title: "Baixe seu PDF", desc: "Obtenha seu PDF limpo instantaneamente" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{
                      background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                      boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)",
                      border: "1px solid rgba(20,216,196,0.25)",
                    }}
                  >
                    <span className="text-[#14D8C4] font-black text-lg">{step.num}</span>
                  </div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Scanner OCR", href: "/br/scanner-ocr", desc: "Torne PDFs digitalizados pesquisáveis" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do arquivo" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine vários PDFs" },
                { name: "Girar PDF", href: "/br/girar-pdf", desc: "Corrija páginas de lado" },
              ].map((tool) => (
                <div
                  key={tool.href}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <Link
                    href={tool.href}
                    className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]"
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
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%),
              radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%),
              radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a }
          }))
        })}} />
      </main>
      <FooterBr />
    </div>
  )
}

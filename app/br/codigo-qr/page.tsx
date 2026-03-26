import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { QrCodeInterface } from "@/components/qr-code-interface"
import { QrCode, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Gerador de Código QR Online — Crie e Baixe Códigos QR | PDF.it",
  description: "Crie códigos QR instantaneamente com o PDF.it. Gere um código QR para qualquer URL, texto, e-mail ou informações de contato — baixe como PNG para flyers, cartões de visita, embalagens e mais.",
  alternates: {
    languages: {
      en: "/tools/qr-code",
      es: "/es/codigo-qr",
      pt: "/br/codigo-qr",
    },
  },
}

export default function CodigoQRPage() {
  const faqs = [
    { q: "Como crio um código QR com o PDF.it?", a: "Insira sua URL ou texto, clique em Gerar Código QR e depois baixe a imagem do código QR como PNG." },
    { q: "O que posso colocar em um código QR?", a: "Você pode codificar links para sites, texto simples, endereços de e-mail, números de telefone e mais. O código QR armazena os dados para que qualquer pessoa que o escaneie tenha acesso instantâneo." },
    { q: "Qual tamanho deve ter um código QR para impressão?", a: "Como regra geral, mantenha os códigos QR com pelo menos 2cm \u00d7 2cm para escaneamento de perto (cartões de visita) e maiores para pôsteres ou sinalização. Sempre faça um teste de escaneamento antes de imprimir." },
    { q: "Por que meu código QR não escaneia?", a: "Problemas comuns incluem baixo contraste, tamanho pequeno ou borramento de imagem. Certifique-se de que o código QR tenha bom contraste com o fundo e seja grande o suficiente para a distância de escaneamento." },
    { q: "O Gerador de Código QR é grátis?", a: "O Gerador de Código QR é uma função Pro, disponível no plano Pro do PDF.it a $7,99/mês. O Pro inclui códigos QR ilimitados além de todas as outras ferramentas PDF." },
    { q: "Meus dados são armazenados quando gero um código QR?", a: "Não. Os códigos QR são gerados e retornados diretamente ao seu navegador. Não armazenamos o conteúdo que você insere." },
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
                <QrCode className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Gerador de Código QR Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Crie códigos QR instantaneamente com o PDF.it — gere um código QR para qualquer URL, texto, e-mail ou informações de contato e baixe como PNG de alta qualidade.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Geração Instantânea</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Sem Armazenamento de Dados</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Baixe como PNG</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Use o gerador de códigos QR do PDF.it para criar um código QR para um link web, texto, dados de contato ou credenciais de Wi-Fi. Gere um código QR instantaneamente e baixe-o para flyers, embalagens, cardápios, cartões de visita, apresentações e redes sociais.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">&#10003; Gere códigos QR para URLs, texto e e-mail</li>
              <li className="flex items-center gap-2">&#10003; Baixe como PNG para impressão e web</li>
              <li className="flex items-center gap-2">&#10003; Funciona em desktop e celular</li>
              <li className="flex items-center gap-2">&#10003; Criação rápida com resultado limpo e escaneável</li>
            </ul>
          </div>
        </section>

        {/* QR Code Interface */}
        <QrCodeInterface />

        {/* Feature Blocks - 3 dark glassmorphism cards */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Códigos QR para Qualquer Link", desc: "Converta qualquer site ou página de destino em um código QR para que as pessoas possam escaneá-lo e abrir o link instantaneamente — ideal para marketing, eventos e embalagens de produtos." },
                { title: "QR para Texto, E-mail e Telefone", desc: "Crie códigos QR que abram um rascunho de e-mail, iniciem uma ligação ou exibam uma mensagem — útil para cartões de visita, currículos e sinalização." },
                { title: "Baixe para Impressão ou Digital", desc: "Baixe uma imagem de código QR de alta qualidade adequada para pôsteres, cardápios, etiquetas e apresentações. Sempre faça um teste de escaneamento antes de imprimir." },
              ].map((feature) => (
                <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - 3 horizontal steps */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Criar um Código QR</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Insira URL ou texto", desc: "Digite ou cole o conteúdo que deseja codificar" },
                { num: "2", title: "Gere o Código QR", desc: "Clique em Gerar e obtenha seu código instantaneamente" },
                { num: "3", title: "Baixe o PNG", desc: "Salve a imagem do código QR e use onde quiser" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}>
                    <span className="text-[#14D8C4] font-black text-lg">{step.num}</span>
                  </div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools - exactly 4, dark bg, metallic border */}
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF para PNG", href: "/br/pdf-para-png", desc: "Exporte páginas PDF como imagens" },
                { name: "PDF para JPG", href: "/br/pdf-para-jpg", desc: "Converta páginas PDF em JPG" },
                { name: "Marca d'Água PDF", href: "/br/marca-dagua-pdf", desc: "Adicione marca aos seus PDFs" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do PDF" },
              ].map((tool) => (
                <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - dark wave-color bg, frosted glass cards */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
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

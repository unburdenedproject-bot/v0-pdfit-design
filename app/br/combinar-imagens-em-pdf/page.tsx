import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ImageToPdfInterface } from "@/components/image-to-pdf-interface"
import { Images, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Combinar Imagens em PDF — Converta e Una Fotos em Um PDF | PDF.it",
  description:
    "Combine imagens JPG e PNG em um unico arquivo PDF com PDF.it. Perfeito para criar albuns, portfolios e documentos a partir de fotos — rapido, gratis e online.",
  alternates: {
    canonical: "/br/combinar-imagens-em-pdf",
    languages: {
      en: "/combine-images-into-pdf",
      es: "/es/combinar-imagenes-en-pdf",
      pt: "/br/combinar-imagens-em-pdf",
    },
  },
}

export default function CombinarImagensEmPdfPage() {
  const faqs = [
    { q: "Quais formatos de imagem posso combinar em PDF?", a: "O PDF.it aceita imagens JPG, JPEG, PNG e WebP. Voce pode misturar formatos diferentes e combinar tudo em um unico documento PDF." },
    { q: "As imagens perdem qualidade ao serem convertidas para PDF?", a: "Nao. O PDF.it insere as imagens no PDF mantendo a resolucao original. Suas fotos ficam com a mesma qualidade no documento final." },
    { q: "Quantas imagens posso combinar em um PDF?", a: "Usuarios gratuitos podem enviar varias imagens de ate 25MB no total. Usuarios Pro podem processar imagens de ate 200MB para criar PDFs maiores." },
    { q: "Posso escolher a ordem das imagens no PDF?", a: "Sim. Apos enviar suas imagens, voce pode arrastar e soltar para organiza-las na ordem desejada antes de gerar o PDF." },
    { q: "Posso combinar imagens em PDF no celular?", a: "Sim. O PDF.it funciona em navegadores moveis. Tire fotos com seu celular e combine-as em um PDF diretamente — perfeito para digitalizar documentos rapidamente." },
    { q: "E seguro enviar minhas fotos para o PDF.it?", a: "Sim. O PDF.it usa conexoes criptografadas e exclui todas as imagens enviadas apos sua sessao. Suas fotos nunca sao armazenadas permanentemente." },
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
                <Images className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Combinar Imagens em PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Converta e combine fotos JPG, PNG e WebP em um unico arquivo PDF. Perfeito para criar portfolios, albuns de fotos, documentacao visual e muito mais — tudo online e gratis.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>JPG, PNG, WebP Aceitos</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Excluidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Precisa transformar varias fotos em um documento PDF? O PDF.it converte e combina imagens JPG, PNG e WebP em um unico PDF organizado. Ideal para portfolios visuais, documentacao fotografica, comprovantes e muito mais.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Aceita imagens JPG, PNG e WebP</li>
              <li className="flex items-center gap-2">✓ Qualidade original das imagens preservada</li>
              <li className="flex items-center gap-2">✓ Funciona em qualquer dispositivo com navegador</li>
              <li className="flex items-center gap-2">✓ Sem instalacao — combine imagens no navegador</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ImageToPdfInterface
          acceptedTypes={["image/jpeg", "image/png", "image/webp"]}
          acceptedExtensions=".jpg,.jpeg,.png,.webp"
          formatLabel="Imagens"
        />

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
                { title: "Portfolios de Design e Fotografia", desc: "Combine suas melhores fotos ou trabalhos de design em um unico PDF profissional para enviar a clientes, agencias ou para entrevistas." },
                { title: "Comprovantes e Documentacao Visual", desc: "Junte fotos de comprovantes de pagamento, recibos fotografados, prints de tela e outros documentos visuais em um unico PDF organizado." },
                { title: "Albuns de Fotos para Impressao", desc: "Crie albuns de fotos em PDF para imprimir ou compartilhar digitalmente. Organize as fotos na ordem desejada e gere um documento pronto." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Combinar Imagens em PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie suas imagens", desc: "Arraste arquivos JPG, PNG ou WebP" },
                { num: "2", title: "Organize a ordem", desc: "Reorganize antes de combinar" },
                { num: "3", title: "Baixe seu PDF", desc: "Receba seu PDF combinado na hora" },
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
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine PDFs em um" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho" },
                { name: "PDF para JPG", href: "/br/pdf-para-jpg", desc: "Converta em imagens" },
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Separe paginas" },
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

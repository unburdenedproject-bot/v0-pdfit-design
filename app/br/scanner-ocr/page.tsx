import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { OcrPdfInterface } from "@/components/ocr-pdf-interface"
import { Scan, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Scanner OCR Online — Extrair Texto de PDF Escaneado | PDF.it",
  description: "Execute OCR em um PDF com o PDF.it para extrair texto de escaneamentos. Torne seus PDFs pesquisáveis e copiáveis em segundos — rápido e direto do navegador.",
  alternates: {
    canonical: "https://pdf.it.com/br/scanner-ocr",
    languages: {
      en: "https://pdf.it.com/ocr-scanner",
      es: "https://pdf.it.com/es/escaner-ocr",
      pt: "https://pdf.it.com/br/scanner-ocr",
    },
  },
}

export default function ScannerOCRPage() {
  const faqs = [
    { q: "O que é OCR para PDFs?", a: "OCR (Reconhecimento Óptico de Caracteres) detecta texto dentro de PDFs escaneados ou baseados em imagens e o converte em texto selecionável e pesquisável." },
    { q: "Quando preciso de OCR em vez de PDF para TXT?", a: "Se o PDF é um escaneamento e você não consegue selecionar texto, precisa de OCR. Se o PDF já contém texto selecionável, uma conversão normal de PDF para TXT pode ser mais rápida." },
    { q: "Quão preciso é o OCR do PDF.it?", a: "A precisão depende da clareza do escaneamento, resolução e fonte. Escaneamentos limpos e de alta resolução produzem os melhores resultados. Escaneamentos borrados ou tortos reduzem a precisão." },
    { q: "Quais idiomas o Scanner OCR suporta?", a: "O Scanner OCR suporta mais de 16 idiomas incluindo português, inglês, espanhol, francês, alemão, italiano, holandês e mais." },
    { q: "É seguro enviar documentos escaneados?", a: "Sim. Todas as transferências são criptografadas com SSL e seus arquivos são removidos imediatamente após sua sessão. Nunca armazenamos nem compartilhamos seus documentos." },
    { q: "Qual é o tamanho máximo de arquivo para OCR?", a: "Contas Pro podem enviar arquivos de até 200MB. Contas Business podem enviar até 1GB." },
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
                <Scan className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Scanner OCR Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Use o PDF.it para executar OCR em PDFs escaneados — converta imagens em texto selecionável e pesquisável, e baixe um PDF mais limpo e útil.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>16+ Idiomas Suportados</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Removidos Após a Sessão</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>PDF Pesquisável</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Use a ferramenta de OCR do PDF.it para extrair texto de PDFs escaneados e tornar seus documentos pesquisáveis e copiáveis. Perfeito para recibos, faturas, contratos, formulários e escaneamentos arquivados — envie seu PDF, execute OCR e baixe um arquivo processado em segundos.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Converta PDFs escaneados em PDFs pesquisáveis</li>
              <li className="flex items-center gap-2">✓ Torne o texto selecionável e copiável</li>
              <li className="flex items-center gap-2">✓ Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li className="flex items-center gap-2">✓ Sem instalação — o OCR é executado no seu navegador</li>
            </ul>
          </div>
        </section>

        {/* OCR Interface */}
        <OcrPdfInterface />

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
                { title: "Torne PDFs Escaneados Pesquisáveis", desc: "Se seu PDF é um escaneamento, é apenas uma imagem — você não consegue selecionar texto nem buscar palavras. O OCR reconhece o texto e cria um PDF pesquisável." },
                { title: "Extraia Texto de Escaneamentos PDF", desc: "Precisa das palavras de um documento escaneado? O OCR extrai texto de páginas baseadas em imagens para que você possa copiar e colar em notas, e-mail ou Word." },
                { title: "Recibos, Formulários e Contratos", desc: "O OCR é especialmente útil para documentos e arquivos onde você precisa buscar, encontrar palavras-chave ou reutilizar texto rapidamente." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Fazer OCR em um PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie seu PDF escaneado", desc: "Arraste e solte ou clique para escolher um arquivo" },
                { num: "2", title: "Execute o OCR", desc: "Escolha o idioma e clique para iniciar" },
                { num: "3", title: "Baixe seu PDF", desc: "Obtenha seu PDF pesquisável instantaneamente" },
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
                { name: "PDF para TXT", href: "/br/pdf-para-txt", desc: "Extraia texto de PDFs com texto" },
                { name: "Girar PDF", href: "/br/girar-pdf", desc: "Corrija escaneamentos tortos antes do OCR" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho antes do OCR" },
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "OCR apenas nas páginas necessárias" },
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

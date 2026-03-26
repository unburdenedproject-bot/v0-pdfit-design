import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Unir PDF Online — Combinar Arquivos PDF em Um | PDF.it",
  description:
    "Una arquivos PDF em um unico documento com o PDF.it. Combine PDFs online, reordene paginas e baixe um unico PDF — rapido e simples.",
  alternates: {
    canonical: "https://pdf.it.com/br/unir-pdf",
    languages: {
      en: "https://pdf.it.com/merge-pdf",
      es: "https://pdf.it.com/es/unir-pdf",
      pt: "https://pdf.it.com/br/unir-pdf",
    },
  },
}

export default function UnirPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        {/* Hero Section */}
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
                <Merge className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Unir Arquivos PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Combine varios PDFs em um unico arquivo com o PDF.it. Envie, reordene, una e baixe — rapido, limpo e direto do navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#14D8C4]" />
                  <span>Arquivos Ilimitados</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#14D8C4]" />
                  <span>Arquivos Eliminados Apos a Sessao</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-[#14D8C4]" />
                  <span>Sem Cadastro</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Use a ferramenta Unir PDF do PDF.it para combinar PDFs em um unico arquivo em segundos. Envie varios documentos PDF, ordene-os corretamente e baixe um unico PDF unido — perfeito para entregas, contratos, faturas e relatorios.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Una varios arquivos PDF em um unico PDF</li>
              <li className="flex items-center gap-2">✓ Reordene arquivos antes de unir para a sequencia correta</li>
              <li className="flex items-center gap-2">✓ Ideal para relatorios, recibos, faturas e formularios</li>
              <li className="flex items-center gap-2">✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li className="flex items-center gap-2">✓ Sem instalacao — una PDFs diretamente no navegador</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Merge PDF"
          outputFormat="PDF"
          processingMessage="Merging your PDF files..."
          successMessage="Your merged PDF is ready!"
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
                { title: "Combine PDFs em um Unico Documento", desc: "Una PDFs em um unico arquivo para compartilhar. Ideal para enviar um anexo em vez de muitos, ou entregar um pacote completo para escolas, bancos ou empregadores." },
                { title: "Reordene Arquivos PDF Antes de Unir", desc: "Envie seus arquivos e ordene-os na ordem exata que desejar. O PDF.it os une na sequencia que voce escolher." },
                { title: "Una PDFs para Imprimir e Compartilhar", desc: "Crie um unico PDF limpo para imprimir, enviar por e-mail, arquivar ou enviar — sem gerenciar multiplos arquivos." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Unir PDFs</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie seus PDFs", desc: "Arraste ou clique para escolher arquivos" },
                { num: "2", title: "Reordene e una", desc: "Organize os arquivos e clique em Unir" },
                { num: "3", title: "Baixe seu PDF", desc: "Obtenha um arquivo combinado na hora" },
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
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Divida um PDF em partes" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho apos unir" },
                { name: "Girar PDF", href: "/br/girar-pdf", desc: "Corrija a orientacao" },
                { name: "Proteger PDF", href: "/br/proteger-pdf", desc: "Adicione protecao com senha" },
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
              {[
                { q: "Como uno varios arquivos PDF em um so?", a: "Envie seus PDFs para o PDF.it, reordene-os como precisar e clique em Unir PDFs para baixar um unico arquivo combinado." },
                { q: "Posso reordenar os PDFs antes de uni-los?", a: "Sim. Envie seus arquivos e ordene-os na sequencia correta — o PDF.it os une nessa ordem." },
                { q: "Posso unir PDFs no celular?", a: "Sim. O PDF.it funciona em navegadores moveis — envie, una e baixe do seu iPhone ou Android." },
                { q: "Posso unir PDFs protegidos com senha?", a: "PDFs protegidos com senha precisam ser desbloqueados antes de uni-los. Use nossa ferramenta Desbloquear PDF primeiro." },
                { q: "E seguro enviar meus PDFs?", a: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." },
                { q: "Qual e o tamanho maximo de arquivo para unir?", a: "Contas gratuitas podem enviar arquivos de ate 25MB cada. Contas Pro podem enviar arquivos de ate 200MB. Contas Business podem enviar ate 1GB cada." },
              ].map((faq, i) => (
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
          "mainEntity": [
            { "@type": "Question", "name": "Como uno varios arquivos PDF em um so?", "acceptedAnswer": { "@type": "Answer", "text": "Envie seus PDFs para o PDF.it, reordene-os como precisar e clique em Unir PDFs para baixar um unico arquivo combinado." } },
            { "@type": "Question", "name": "Posso reordenar os PDFs antes de uni-los?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Envie seus arquivos e ordene-os na sequencia correta — o PDF.it os une nessa ordem." } },
            { "@type": "Question", "name": "Posso unir PDFs no celular?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em navegadores moveis — envie, una e baixe do seu iPhone ou Android." } },
            { "@type": "Question", "name": "Posso unir PDFs protegidos com senha?", "acceptedAnswer": { "@type": "Answer", "text": "PDFs protegidos com senha precisam ser desbloqueados antes de uni-los. Use nossa ferramenta Desbloquear PDF primeiro." } },
            { "@type": "Question", "name": "E seguro enviar meus PDFs?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." } },
            { "@type": "Question", "name": "Qual e o tamanho maximo de arquivo para unir?", "acceptedAnswer": { "@type": "Answer", "text": "Contas gratuitas podem enviar arquivos de ate 25MB cada. Contas Pro podem enviar arquivos de ate 200MB. Contas Business podem enviar ate 1GB cada." } }
          ]
        })}} />
      </main>
      <FooterBr />
    </div>
  )
}

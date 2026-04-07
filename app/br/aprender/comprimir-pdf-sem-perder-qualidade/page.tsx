import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { FileArchiveIcon as Compress, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Comprimir PDF Sem Perder Qualidade | PDF.it",
  description:
    "Aprenda como comprimir um PDF sem perder qualidade. Tecnicas para reduzir o tamanho mantendo textos nitidos e imagens claras — online, gratis, sem software.",
  keywords: "comprimir pdf sem perder qualidade, reduzir pdf sem perda, compactar pdf qualidade, comprimir pdf manter qualidade",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "E possivel comprimir um PDF sem perder qualidade?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. A compressao Leve do PDF.it otimiza a estrutura do arquivo, remove metadados desnecessarios e comprime imagens de forma quase imperceptivel. O resultado e um arquivo menor com qualidade visual praticamente identica ao original." }
    },
    {
      "@type": "Question",
      "name": "Quanto posso reduzir sem perder qualidade?",
      "acceptedAnswer": { "@type": "Answer", "text": "Com compressao Leve, reducoes de 15-30% sao comuns sem perda de qualidade perceptivel. Para reducoes maiores, a compressao Media oferece um bom equilibrio, com minima perda visual." }
    },
    {
      "@type": "Question",
      "name": "A compressao sem perda funciona para todos os PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "A compressao sem perda e mais eficaz em PDFs que contem metadados extras, fontes duplicadas ou estrutura nao otimizada. PDFs ja otimizados terao menor reducao de tamanho." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Comprimir PDF Sem Perder Qualidade",
  "description": "Reduza o tamanho do seu PDF mantendo a qualidade original em 3 passos simples.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Envie seu PDF",
      "text": "Acesse a ferramenta Comprimir PDF Sem Perder Qualidade do PDF.it e envie seu arquivo."
    },
    {
      "@type": "HowToStep",
      "name": "Selecione compressao Leve",
      "text": "Escolha a compressao Leve para maxima preservacao de qualidade. Este nivel otimiza a estrutura sem afetar o conteudo visual."
    },
    {
      "@type": "HowToStep",
      "name": "Verifique e baixe",
      "text": "Baixe o PDF comprimido e compare com o original. A qualidade deve ser praticamente identica com um arquivo significativamente menor."
    }
  ]
}

export default function ComprimirPDFSemPerderQualidadePage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Comprimir PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF Sem Perder Qualidade</h1>
              <p className="text-xl text-slate-300">
                Precisa de um PDF menor mas nao pode sacrificar a qualidade? Veja as melhores tecnicas para reduzir o tamanho mantendo textos nitidos e imagens claras.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <Compress className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Pronto para comprimir sem perda? Va direto para a ferramenta.</p>
            </div>
            <Link
              href="/br/comprimir-pdf-sem-perder-qualidade"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Comprimir PDF Agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">O Que Significa Compressao Sem Perda?</h2>
              <p className="text-slate-600 mb-4">
                Existem dois tipos de compressao para PDFs:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Compressao sem perda (lossless).</strong> Otimiza a estrutura do arquivo, remove metadados extras e comprime dados sem alterar o conteudo visual. Reducao menor, mas qualidade identica.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Compressao com perda (lossy).</strong> Reduz a resolucao das imagens e otimiza de forma mais agressiva. Maior reducao de tamanho, mas pode afetar a qualidade visual.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                A compressao Leve do PDF.it usa principalmente tecnicas sem perda, enquanto Media e Extrema combinam ambas as abordagens.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Comprimir Sem Perder Qualidade</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Envie seu PDF",
                    desc: "Acesse a ferramenta Comprimir PDF Sem Perder Qualidade e envie seu arquivo. O sistema analisa o conteudo para aplicar a melhor estrategia de compressao.",
                  },
                  {
                    title: "Use compressao Leve",
                    desc: "Selecione o nivel Leve. Este nivel remove metadados desnecessarios, otimiza fontes incorporadas e comprime imagens de forma imperceptivel — tudo sem afetar a qualidade visual.",
                  },
                  {
                    title: "Compare e confirme",
                    desc: "Baixe o resultado e abra lado a lado com o original. Amplie em 200% para verificar detalhes. Voce vera que a qualidade e praticamente identica, com um arquivo menor.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tecnicas que Reduzem Tamanho Sem Afetar Qualidade</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Remocao de metadados:</strong> informacoes como historico de edicao, thumbnails internos e dados de criacao sao removidos sem afetar o conteudo visivel.</li>
                <li>&#10003; <strong>Otimizacao de fontes:</strong> fontes duplicadas ou parcialmente incorporadas sao otimizadas, reduzindo o tamanho.</li>
                <li>&#10003; <strong>Compressao de fluxo:</strong> os dados internos do PDF sao recomprimidos com algoritmos mais eficientes.</li>
                <li>&#10003; <strong>Achatamento:</strong> <Link href="/br/achatar-pdf" className="text-[#14D8C4] hover:underline">Achatar o PDF</Link> remove camadas interativas (formularios, anotacoes) sem afetar a aparencia visual.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Quando Aceitar Alguma Perda de Qualidade</h2>
              <p className="text-slate-600 mb-4">
                Em alguns casos, uma pequena perda de qualidade e aceitavel e permite uma reducao muito maior:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Documentos para visualizacao em tela</strong> — a compressao Media e imperceptivel em monitores.</li>
                <li>&#10003; <strong>Envio por email</strong> — o destinatario nao vai notar diferenca na tela.</li>
                <li>&#10003; <strong>Documentos digitalizados</strong> — o texto permanece legivel mesmo com compressao Extrema.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Comprimir Sem Perder Qualidade?</h2>
            <p className="text-slate-300 mb-6">Reduza o tamanho mantendo a qualidade original — gratis, sem cadastro.</p>
            <Link
              href="/br/comprimir-pdf-sem-perder-qualidade"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Compress className="h-5 w-5" /> Comprimir PDF Agora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Comprimir um PDF", href: "/br/aprender/como-comprimir-um-pdf" },
                { title: "Comprimir PDF Grande (50MB, 100MB ou Mais)", href: "/br/aprender/comprimir-pdf-grande" },
                { title: "Comprimir PDF para Imprimir", href: "/br/aprender/comprimir-pdf-para-imprimir" },
                { title: "Comprimir PDF com Imagens", href: "/br/aprender/comprimir-pdf-com-imagens" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "E possivel comprimir um PDF sem perder qualidade?", a: "Sim. A compressao Leve do PDF.it otimiza a estrutura do arquivo, remove metadados desnecessarios e comprime imagens de forma quase imperceptivel. O resultado e um arquivo menor com qualidade visual praticamente identica ao original." },
                { q: "Quanto posso reduzir sem perder qualidade?", a: "Com compressao Leve, reducoes de 15-30% sao comuns sem perda de qualidade perceptivel. Para reducoes maiores, a compressao Media oferece um bom equilibrio, com minima perda visual." },
                { q: "A compressao sem perda funciona para todos os PDFs?", a: "A compressao sem perda e mais eficaz em PDFs que contem metadados extras, fontes duplicadas ou estrutura nao otimizada. PDFs ja otimizados terao menor reducao de tamanho." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}">
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

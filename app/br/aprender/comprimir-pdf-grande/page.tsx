import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { FileArchiveIcon as Compress, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Comprimir PDF Grande (50MB, 100MB ou Mais) | PDF.it",
  description:
    "Aprenda como comprimir PDFs grandes de 50MB, 100MB ou mais. Dicas para reduzir arquivos pesados sem perder qualidade — online, gratis, sem instalar nada.",
  keywords: "comprimir pdf grande, reduzir pdf 50mb, comprimir pdf 100mb, diminuir pdf pesado, compactar pdf grande online",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como comprimir um PDF de 50MB ou mais?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie o PDF para o PDF.it e selecione compressao Extrema. Para arquivos muito grandes, considere dividir o PDF em partes menores primeiro e comprimir cada parte separadamente." }
    },
    {
      "@type": "Question",
      "name": "Qual o tamanho maximo de PDF que posso comprimir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usuarios gratuitos podem comprimir PDFs ate 25MB. Usuarios Pro podem enviar arquivos ate 200MB para compressao." }
    },
    {
      "@type": "Question",
      "name": "Por que meu PDF tem mais de 100MB?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDFs com mais de 100MB geralmente contem muitas paginas digitalizadas em alta resolucao, imagens nao comprimidas ou multiplas camadas de graficos. Documentos digitalizados sao os principais causadores de arquivos enormes." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Comprimir um PDF Grande Online",
  "description": "Reduza PDFs grandes de 50MB, 100MB ou mais em poucos passos.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Envie seu PDF grande",
      "text": "Acesse a ferramenta Comprimir PDF do PDF.it e envie seu arquivo. Usuarios Pro podem enviar ate 200MB."
    },
    {
      "@type": "HowToStep",
      "name": "Selecione compressao Extrema",
      "text": "Para PDFs grandes, a compressao Extrema oferece a maior reducao de tamanho. Selecione este nivel para obter os melhores resultados."
    },
    {
      "@type": "HowToStep",
      "name": "Baixe e verifique",
      "text": "Baixe o PDF comprimido e verifique o tamanho. Se ainda estiver grande, divida o PDF em partes menores e comprima cada uma separadamente."
    }
  ]
}

export default function ComprimirPDFGrandePage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF Grande (50MB, 100MB ou Mais)</h1>
              <p className="text-xl text-slate-300">
                Seu PDF tem 50MB, 100MB ou ate mais? Veja como reduzir drasticamente o tamanho sem perder a legibilidade do documento.
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
              <p className="text-slate-700 font-semibold">Precisa comprimir agora? Va direto para a ferramenta.</p>
            </div>
            <Link
              href="/br/comprimir-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Comprimir PDF Agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que PDFs Ficam Tao Grandes?</h2>
              <p className="text-slate-600 mb-4">
                Existem varias razoes pelas quais um PDF pode ultrapassar 50MB ou 100MB:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Documentos digitalizados longos.</strong> Cada pagina digitalizada e uma imagem de 2-5MB. Um documento de 50 paginas pode facilmente atingir 100-250MB.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Fotos e graficos em alta resolucao.</strong> Apresentacoes, catalogos e portfolios com muitas imagens de alta qualidade acumulam tamanho rapidamente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Multiplas versoes combinadas.</strong> PDFs que foram mesclados de varios documentos carregam todo o peso de cada fonte e imagem original.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Estrategia para Comprimir PDFs Grandes</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Tente a compressao Extrema primeiro",
                    desc: "Envie o PDF e selecione o nivel Extrema. Para muitos arquivos grandes, isso ja reduz o tamanho em 60-80%, especialmente se o PDF contem paginas digitalizadas.",
                  },
                  {
                    title: "Divida antes de comprimir",
                    desc: "Se o arquivo for maior que o limite de upload, use a ferramenta Dividir PDF para separar em partes menores. Comprima cada parte individualmente e depois junte novamente se necessario.",
                  },
                  {
                    title: "Remova paginas desnecessarias",
                    desc: "Antes de comprimir, remova paginas em branco, duplicadas ou irrelevantes. Menos paginas = arquivo menor. Use a ferramenta Remover Paginas para isso.",
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Resultados Esperados por Tamanho</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Tamanho Original</th>
                      <th className="text-left py-3 px-4 font-bold">Compressao Media</th>
                      <th className="text-left py-3 px-4 font-bold">Compressao Extrema</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">50MB (digitalizado)</td>
                      <td className="py-3 px-4">15-25MB</td>
                      <td className="py-3 px-4">5-12MB</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">100MB (digitalizado)</td>
                      <td className="py-3 px-4">30-50MB</td>
                      <td className="py-3 px-4">10-25MB</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">50MB (com graficos)</td>
                      <td className="py-3 px-4">20-35MB</td>
                      <td className="py-3 px-4">8-18MB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-500 text-sm mt-3">* Resultados aproximados. A reducao real depende do conteudo do PDF.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas Avancadas para Arquivos Muito Grandes</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Achate o PDF</strong> com <Link href="/br/achatar-pdf" className="text-[#14D8C4] hover:underline">Achatar PDF</Link> para remover camadas e formularios antes de comprimir.</li>
                <li>&#10003; <strong>Divida em partes</strong> usando <Link href="/br/dividir-pdf" className="text-[#14D8C4] hover:underline">Dividir PDF</Link> e comprima cada parte separadamente.</li>
                <li>&#10003; <strong>Combine estrategias:</strong> remova paginas desnecessarias, achate, depois comprima em nivel Extrema para maxima reducao.</li>
                <li>&#10003; <strong>Para documentos digitalizados</strong>, a compressao e mais eficaz porque o conteudo e basicamente imagens.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Comprimir Seu PDF Grande?</h2>
            <p className="text-slate-300 mb-6">Envie seu arquivo e reduza o tamanho drasticamente — gratis, sem cadastro.</p>
            <Link
              href="/br/comprimir-pdf"
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
                { title: "Comprimir PDF para Imprimir", href: "/br/aprender/comprimir-pdf-para-imprimir" },
                { title: "Comprimir PDF com Imagens", href: "/br/aprender/comprimir-pdf-com-imagens" },
                { title: "Comprimir PDF Sem Perder Qualidade", href: "/br/aprender/comprimir-pdf-sem-perder-qualidade" },
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
                { q: "Como comprimir um PDF de 50MB ou mais?", a: "Envie o PDF para o PDF.it e selecione compressao Extrema. Para arquivos muito grandes, considere dividir o PDF em partes menores primeiro e comprimir cada parte separadamente." },
                { q: "Qual o tamanho maximo de PDF que posso comprimir?", a: "Usuarios gratuitos podem comprimir PDFs ate 25MB. Usuarios Pro podem enviar arquivos ate 200MB para compressao." },
                { q: "Por que meu PDF tem mais de 100MB?", a: "PDFs com mais de 100MB geralmente contem muitas paginas digitalizadas em alta resolucao, imagens nao comprimidas ou multiplas camadas de graficos." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
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

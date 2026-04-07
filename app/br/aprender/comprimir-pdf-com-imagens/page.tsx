import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { FileArchiveIcon as Compress, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Comprimir PDF com Imagens (Fotos, Digitalizacoes, Graficos) | PDF.it",
  description:
    "Aprenda como comprimir PDFs com muitas imagens sem perder qualidade visual. Dicas para fotos, documentos digitalizados e graficos — online, gratis.",
  keywords: "comprimir pdf com imagens, comprimir pdf fotos, reduzir pdf com imagens, comprimir pdf digitalizado, compactar pdf imagens",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como comprimir um PDF com muitas imagens?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie o PDF para o PDF.it e escolha compressao Media ou Extrema. PDFs com muitas imagens geralmente comprimem muito bem — reducoes de 50-80% sao comuns." }
    },
    {
      "@type": "Question",
      "name": "A compressao vai borrar minhas fotos no PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "A compressao Leve mantem as fotos praticamente identicas. A Media reduz levemente a qualidade mas o resultado e bom para visualizacao em tela. A Extrema pode borrar detalhes finos em fotos." }
    },
    {
      "@type": "Question",
      "name": "PDFs com imagens comprimem mais que PDFs de texto?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim, muito mais. PDFs de texto puro ja sao pequenos. PDFs com imagens tem o maior potencial de reducao porque as imagens sao o componente mais pesado do arquivo." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Comprimir PDF com Imagens",
  "description": "Reduza o tamanho de PDFs com fotos e graficos mantendo qualidade visual aceitavel.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Envie o PDF com imagens",
      "text": "Acesse a ferramenta Comprimir PDF com Imagens do PDF.it e envie seu arquivo."
    },
    {
      "@type": "HowToStep",
      "name": "Escolha o nivel de compressao",
      "text": "Para fotos: use Leve ou Media. Para documentos digitalizados: Media ou Extrema funciona bem."
    },
    {
      "@type": "HowToStep",
      "name": "Baixe e compare",
      "text": "Baixe o PDF comprimido e compare a qualidade das imagens com o original. Ajuste o nivel se necessario."
    }
  ]
}

export default function ComprimirPDFComImagensPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF com Imagens</h1>
              <p className="text-xl text-slate-300">
                PDFs com fotos, graficos e digitalizacoes sao os maiores culpados por arquivos pesados. Veja como reduzir o tamanho sem destruir a qualidade visual.
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
              <p className="text-slate-700 font-semibold">Pronto para comprimir? Va direto para a ferramenta.</p>
            </div>
            <Link
              href="/br/comprimir-pdf-imagens"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Comprimir PDF Agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que PDFs com Imagens Sao Tao Pesados?</h2>
              <p className="text-slate-600 mb-4">
                As imagens sao o componente mais pesado de qualquer PDF. Entenda por que:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Fotos em alta resolucao.</strong> Uma unica foto de 300 DPI pode ocupar 3-10MB dentro do PDF, especialmente se nao foi otimizada antes da insercao.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Digitalizacoes.</strong> Cada pagina digitalizada e essencialmente uma foto de pagina inteira. Um scanner padrao gera imagens de 2-5MB por pagina.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Graficos e infograficos.</strong> Elementos visuais complexos com muitas cores e detalhes ocupam espaco consideravel.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Comprimir (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Envie o PDF com imagens",
                    desc: "Acesse a ferramenta Comprimir PDF e envie seu arquivo. O PDF.it detecta automaticamente o conteudo com imagens e otimiza a compressao.",
                  },
                  {
                    title: "Escolha o nivel ideal",
                    desc: "Para fotos que precisam manter qualidade (portfolios, catalogos), use Leve. Para documentos gerais com imagens, Media e ideal. Para documentos digitalizados onde so precisa ler o texto, Extrema funciona otimamente.",
                  },
                  {
                    title: "Compare e baixe",
                    desc: "Baixe o resultado e compare com o original. Se a qualidade nao atender suas necessidades, tente um nivel de compressao mais leve.",
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Nivel Recomendado por Tipo de Imagem</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Tipo de Conteudo</th>
                      <th className="text-left py-3 px-4 font-bold">Nivel Recomendado</th>
                      <th className="text-left py-3 px-4 font-bold">Reducao Esperada</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">Fotos de alta qualidade</td>
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">Leve</td>
                      <td className="py-3 px-4">20-40%</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4">Graficos e diagramas</td>
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">Media</td>
                      <td className="py-3 px-4">40-60%</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">Documentos digitalizados</td>
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">Extrema</td>
                      <td className="py-3 px-4">60-80%</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4">Capturas de tela</td>
                      <td className="py-3 px-4 font-semibold text-[#14D8C4]">Media</td>
                      <td className="py-3 px-4">40-70%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Melhores Resultados</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Extraia imagens desnecessarias</strong> usando <Link href="/br/extrair-imagens-de-pdf" className="text-[#14D8C4] hover:underline">Extrair Imagens</Link> antes de comprimir — remova as que nao precisa.</li>
                <li>&#10003; <strong>Para PDFs digitalizados</strong>, a compressao Extrema e segura porque o texto permanece legivel mesmo com imagens de menor qualidade.</li>
                <li>&#10003; <strong>Combine com achatamento:</strong> <Link href="/br/achatar-pdf" className="text-[#14D8C4] hover:underline">Achatar PDF</Link> remove camadas extras e depois a compressao e ainda mais eficaz.</li>
                <li>&#10003; <strong>Teste diferentes niveis</strong> — comece com Media e ajuste conforme necessario.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Comprimir Seu PDF com Imagens?</h2>
            <p className="text-slate-300 mb-6">Reduza o tamanho do arquivo mantendo suas imagens com qualidade — gratis, sem cadastro.</p>
            <Link
              href="/br/comprimir-pdf-imagens"
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
                { q: "Como comprimir um PDF com muitas imagens?", a: "Envie o PDF para o PDF.it e escolha compressao Media ou Extrema. PDFs com muitas imagens geralmente comprimem muito bem — reducoes de 50-80% sao comuns." },
                { q: "A compressao vai borrar minhas fotos no PDF?", a: "A compressao Leve mantem as fotos praticamente identicas. A Media reduz levemente a qualidade mas o resultado e bom para visualizacao em tela. A Extrema pode borrar detalhes finos em fotos." },
                { q: "PDFs com imagens comprimem mais que PDFs de texto?", a: "Sim, muito mais. PDFs de texto puro ja sao pequenos. PDFs com imagens tem o maior potencial de reducao porque as imagens sao o componente mais pesado do arquivo." },
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

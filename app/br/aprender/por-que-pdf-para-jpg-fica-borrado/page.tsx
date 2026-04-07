import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { ImageIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Por Que PDF para JPG Fica Borrado? (E Como Resolver) | PDF.it",
  description:
    "Seu PDF convertido para JPG ficou borrado ou com baixa qualidade? Descubra as causas mais comuns e como obter imagens nítidas na conversão.",
  keywords: "pdf para jpg borrado, pdf para jpg baixa qualidade, jpg desfocado, melhorar qualidade jpg pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Por que meu JPG convertido de PDF fica borrado?", "acceptedAnswer": { "@type": "Answer", "text": "A causa mais comum é DPI baixo demais na conversão. Muitas ferramentas usam 72 DPI por padrão, que é insuficiente para a maioria dos usos. Use 200-300 DPI para resultados nítidos." } },
    { "@type": "Question", "name": "Qual DPI usar para evitar imagens borradas?", "acceptedAnswer": { "@type": "Answer", "text": "Para uso geral, 200 DPI é suficiente. Para impressão ou quando precisa de máxima nitidez, use 300 DPI. Evite 72 DPI a menos que precise apenas de miniaturas." } },
    { "@type": "Question", "name": "PNG é melhor que JPG para evitar borrões?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, para textos e gráficos. PNG usa compressão sem perda, então mantém linhas e texto nítidos. JPG pode criar artefatos visíveis ao redor de texto e bordas nítidas." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Evitar JPG Borrado ao Converter de PDF",
  "description": "Siga estes passos para obter imagens JPG nítidas a partir de PDFs.",
  "step": [
    { "@type": "HowToStep", "name": "Aumente o DPI", "text": "Use 200-300 DPI em vez do padrão 72 DPI. Isso é a solução mais comum." },
    { "@type": "HowToStep", "name": "Verifique o PDF original", "text": "Se o PDF original já tem baixa resolução (escaneado em baixa qualidade), o JPG também terá." },
    { "@type": "HowToStep", "name": "Considere PNG para texto", "text": "Para PDFs com muito texto, use PNG em vez de JPG para evitar artefatos de compressão." }
  ]
}

export default function PorQuePdfParaJpgFicaBorradoPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF para JPG</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Por Que PDF para JPG Fica Borrado? (E Como Resolver)</h1>
              <p className="text-xl text-slate-300">
                Converteu seu PDF para JPG e a imagem ficou desfocada ou com baixa qualidade? Veja as causas mais comuns e como obter resultados nítidos.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <ImageIcon className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Converta com alta qualidade — escolha o DPI ideal.</p>
            </div>
            <Link href="/br/pdf-para-jpg" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Converter PDF para JPG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">As 4 Causas Mais Comuns</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">1. DPI Baixo Demais</h3>
                  <p className="text-slate-600">Esta é a causa mais frequente. Muitas ferramentas convertem em 72 DPI por padrão, que produz imagens pequenas e borradas. A solução é simples: use 200-300 DPI. No PDF.it, você pode escolher o DPI antes de converter.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">2. PDF Original em Baixa Resolução</h3>
                  <p className="text-slate-600">Se o PDF foi criado a partir de um escaneamento em baixa qualidade, nenhuma configuração de conversão vai melhorar a imagem. A qualidade do JPG nunca supera a do PDF original. Tente usar <Link href="/br/scanner-ocr" className="text-[#14D8C4] hover:underline">Scanner OCR</Link> para melhorar documentos digitalizados.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">3. Compressão JPG Excessiva</h3>
                  <p className="text-slate-600">JPG é um formato com perda. Algumas ferramentas aplicam compressão agressiva para reduzir o tamanho do arquivo, o que degrada a qualidade. No PDF.it, a compressão é otimizada para manter a qualidade visual.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">4. Ampliação da Imagem</h3>
                  <p className="text-slate-600">Se você converte em DPI baixo e depois amplia a imagem (no PowerPoint, Canva, etc.), ela ficará borrada. Converta já no DPI final desejado para evitar isso.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Resolver (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  { title: "Aumente o DPI para 200-300", desc: "Na ferramenta PDF para JPG do PDF.it, selecione 200 DPI para uso geral ou 300 DPI para máxima qualidade. Isso resolve a maioria dos problemas de imagem borrada." },
                  { title: "Verifique o PDF original", desc: "Abra o PDF e dê zoom a 200%. Se o texto ou imagens já ficam borrados no PDF, o problema está no arquivo original, não na conversão." },
                  { title: "Use PNG para texto e gráficos", desc: "Se seu PDF tem muito texto fino ou gráficos com linhas, considere converter para PNG em vez de JPG. O formato PNG não tem artefatos de compressão." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Guia Rápido de DPI</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead><tr className="bg-slate-900 text-white"><th className="text-left py-3 px-4 font-bold">Uso</th><th className="text-left py-3 px-4 font-bold">DPI Recomendado</th><th className="text-left py-3 px-4 font-bold">Resultado</th></tr></thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200"><td className="py-3 px-4">WhatsApp, miniaturas</td><td className="py-3 px-4 font-semibold text-[#14D8C4]">150 DPI</td><td className="py-3 px-4">Bom, arquivo pequeno</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4">Apresentações, documentos</td><td className="py-3 px-4 font-semibold text-[#14D8C4]">200 DPI</td><td className="py-3 px-4">Muito bom, arquivo moderado</td></tr>
                    <tr className="border-t border-gray-200"><td className="py-3 px-4">Impressão, design</td><td className="py-3 px-4 font-semibold text-[#14D8C4]">300 DPI</td><td className="py-3 px-4">Excelente, arquivo grande</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Quando PNG é Melhor que JPG</h2>
              <p className="text-slate-600 mb-4">Se mesmo com 300 DPI seu JPG tem artefatos visíveis ao redor do texto, considere usar <Link href="/br/pdf-para-png" className="text-[#14D8C4] hover:underline">PDF para PNG</Link>. O formato PNG:</p>
              <ul className="space-y-2 text-slate-700">
                <li>- Não tem artefatos de compressão</li>
                <li>- Mantém texto e linhas perfeitamente nítidos</li>
                <li>- Suporta transparência</li>
                <li>- É ideal para documentos com muito texto</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Converta com Qualidade de Verdade</h2>
            <p className="text-slate-300 mb-6">Escolha o DPI ideal e obtenha imagens nítidas do seu PDF.</p>
            <Link href="/br/pdf-para-jpg" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
              <ImageIcon className="h-5 w-5" /> Converter PDF para JPG
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Converter PDF para JPG Online (Guia Completo)", href: "/br/aprender/converter-pdf-para-jpg" },
                { title: "PDF para JPG vs PNG: Qual Escolher?", href: "/br/aprender/pdf-para-jpg-vs-png" },
                { title: "PDF para JPG para PowerPoint", href: "/br/aprender/pdf-para-jpg-para-powerpoint" },
                { title: "Converter PDF para PNG Online", href: "/br/aprender/converter-pdf-para-png" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group">
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
                { q: "Por que meu JPG convertido de PDF fica borrado?", a: "A causa mais comum é DPI baixo demais na conversão. Muitas ferramentas usam 72 DPI por padrão, que é insuficiente para a maioria dos usos. Use 200-300 DPI para resultados nítidos." },
                { q: "Qual DPI usar para evitar imagens borradas?", a: "Para uso geral, 200 DPI é suficiente. Para impressão ou quando precisa de máxima nitidez, use 300 DPI. Evite 72 DPI a menos que precise apenas de miniaturas." },
                { q: "PNG é melhor que JPG para evitar borrões?", a: "Sim, para textos e gráficos. PNG usa compressão sem perda, então mantém linhas e texto nítidos. JPG pode criar artefatos visíveis ao redor de texto e bordas nítidas." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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

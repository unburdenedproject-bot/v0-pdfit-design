import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { FileIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Word para PDF — Erros Comuns de Formato (E Como Resolver) | PDF.it",
  description:
    "Seu Word para PDF ficou com formatação errada? Descubra os erros mais comuns (fontes, imagens, tabelas) e como garantir uma conversão perfeita.",
  keywords: "word para pdf formatação errada, word para pdf erros, pdf formatação diferente, fontes erradas pdf, word pdf problemas",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Por que a formatação muda ao converter Word para PDF?", "acceptedAnswer": { "@type": "Answer", "text": "As causas mais comuns são fontes não disponíveis, imagens mal posicionadas, margens diferentes e elementos complexos como WordArt ou SmartArt que nem sempre convertem perfeitamente." } },
    { "@type": "Question", "name": "Como evitar fontes erradas no PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Use fontes comuns (Arial, Calibri, Times New Roman) ou incorpore as fontes no documento Word antes de converter. No Word, vá em Opções > Salvar > Incorporar fontes." } },
    { "@type": "Question", "name": "Por que tabelas ficam desalinhadas no PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Tabelas com largura fixa em pixels podem ultrapassar as margens do PDF. Use largura em porcentagem ou verifique se a tabela cabe na largura da página antes de converter." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Evitar Erros de Formatação ao Converter Word para PDF",
  "description": "Siga estas dicas para uma conversão perfeita de Word para PDF.",
  "step": [
    { "@type": "HowToStep", "name": "Use fontes comuns", "text": "Prefira Arial, Calibri ou Times New Roman. Fontes personalizadas devem ser incorporadas." },
    { "@type": "HowToStep", "name": "Verifique o layout", "text": "Revise margens, tabelas e posição de imagens antes de converter." },
    { "@type": "HowToStep", "name": "Converta e verifique", "text": "Use o PDF.it para converter e verifique o resultado antes de enviar." }
  ]
}

export default function WordParaPdfErrosComunsDeFormatoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Word para PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Word para PDF — Erros Comuns de Formato (E Como Resolver)</h1>
              <p className="text-xl text-slate-300">
                Converteu Word para PDF e a formatação ficou diferente? Veja os problemas mais comuns e como garantir que seu PDF fique idêntico ao documento original.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileIcon className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Converta com formatação preservada.</p>
            </div>
            <Link href="/br/word-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Converter Word para PDF <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Os 5 Erros Mais Comuns</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">1. Fontes Substituídas</h3>
                  <p className="text-slate-600 mb-2">O erro mais frequente. Se o documento usa uma fonte que não está disponível durante a conversão, ela é substituída por outra, alterando o visual.</p>
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <p className="text-slate-700 text-sm"><strong>Solução:</strong> Use fontes comuns (Arial, Calibri, Times New Roman) ou incorpore as fontes no Word: Arquivo &gt; Opções &gt; Salvar &gt; "Incorporar fontes no arquivo".</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">2. Imagens Fora de Posição</h3>
                  <p className="text-slate-600 mb-2">Imagens com posicionamento "flutuante" no Word podem se mover durante a conversão. Isso é especialmente comum com imagens alinhadas ao texto.</p>
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <p className="text-slate-700 text-sm"><strong>Solução:</strong> Use posicionamento "Alinhado com texto" para imagens ou converta imagens para "Em linha com texto" antes de converter para PDF.</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">3. Tabelas Desalinhadas ou Cortadas</h3>
                  <p className="text-slate-600 mb-2">Tabelas largas podem ultrapassar as margens da página no PDF, ficando cortadas ou desalinhadas.</p>
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <p className="text-slate-700 text-sm"><strong>Solução:</strong> Use "Autoajustar ao conteúdo" ou "Autoajustar à janela" nas propriedades da tabela. Verifique se a tabela cabe na largura da página.</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">4. Cabeçalhos e Rodapés Diferentes</h3>
                  <p className="text-slate-600 mb-2">Cabeçalhos e rodapés complexos (com imagens, tabelas ou campos automáticos) podem não converter corretamente.</p>
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <p className="text-slate-700 text-sm"><strong>Solução:</strong> Mantenha cabeçalhos e rodapés simples. Evite imagens muito grandes ou tabelas complexas nessas áreas.</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">5. Espaçamento e Quebras de Página</h3>
                  <p className="text-slate-600 mb-2">O espaçamento entre linhas e parágrafos pode variar ligeiramente, causando quebras de página em locais diferentes.</p>
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <p className="text-slate-700 text-sm"><strong>Solução:</strong> Use quebras de página manuais (Ctrl+Enter) onde são importantes. Defina espaçamento exato em vez de "automático".</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Checklist Antes de Converter</h2>
              <ul className="space-y-2 text-slate-700">
                <li>- Fontes são comuns (Arial, Calibri, Times New Roman) ou estão incorporadas</li>
                <li>- Imagens estão posicionadas como "Em linha com texto"</li>
                <li>- Tabelas cabem na largura da página</li>
                <li>- Cabeçalhos/rodapés são simples</li>
                <li>- Quebras de página estão onde devem estar</li>
                <li>- Margens estão corretas (Arquivo &gt; Configurar Página)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Depois da Conversão</h2>
              <p className="text-slate-600 mb-4">Sempre abra e verifique o PDF antes de enviar. Se algo ficou errado:</p>
              <ul className="space-y-2 text-slate-700">
                <li>- Ajuste o documento Word e converta novamente</li>
                <li>- Se o PDF ficou grande, use <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link></li>
                <li>- Para documentos sensíveis, use <Link href="/br/proteger-pdf" className="text-orange-600 hover:underline">Proteger PDF</Link> com senha</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Converta com Formatação Perfeita</h2>
            <p className="text-slate-300 mb-6">O PDF.it preserva fontes, imagens e layout do seu Word.</p>
            <Link href="/br/word-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
              <FileIcon className="h-5 w-5" /> Converter Word para PDF
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Converter Word para PDF Online", href: "/br/aprender/converter-word-para-pdf" },
                { title: "Word para PDF no iPhone", href: "/br/aprender/word-para-pdf-no-iphone" },
                { title: "Converter Excel para PDF", href: "/br/aprender/converter-excel-para-pdf" },
                { title: "Excel para PDF — Colunas Cortadas", href: "/br/aprender/excel-para-pdf-colunas-cortadas" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group">
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Por que a formatação muda ao converter Word para PDF?", a: "As causas mais comuns são fontes não disponíveis, imagens mal posicionadas, margens diferentes e elementos complexos como WordArt." },
                { q: "Como evitar fontes erradas no PDF?", a: "Use fontes comuns ou incorpore as fontes no Word: Arquivo > Opções > Salvar > Incorporar fontes no arquivo." },
                { q: "Por que tabelas ficam desalinhadas no PDF?", a: "Tabelas largas podem ultrapassar as margens. Use Autoajustar à janela nas propriedades da tabela." },
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

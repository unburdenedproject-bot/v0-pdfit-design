import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { ImageIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Converter PDF para PNG Online (Sem Perda de Qualidade) | PDF.it",
  description:
    "Aprenda como converter PDF para PNG online com qualidade perfeita. Guia passo a passo para obter imagens PNG nítidas de qualquer PDF — grátis, sem software.",
  keywords: "converter pdf para png, pdf para png online, pdf para png grátis, pdf para imagem png, converter pdf para png sem perda",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Como converto PDF para PNG grátis?", "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF para a ferramenta PDF para PNG do PDF.it, escolha a resolução, clique em Converter e baixe suas imagens PNG. Não é necessário cadastro para seus primeiros 3 arquivos." } },
    { "@type": "Question", "name": "PNG é melhor que JPG para converter PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Depende do conteúdo. PNG é melhor para texto, gráficos e diagramas porque não tem artefatos de compressão. JPG é melhor para fotos e quando o tamanho do arquivo importa." } },
    { "@type": "Question", "name": "PNG suporta transparência?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Diferente do JPG, o formato PNG suporta fundo transparente. Isso é útil quando você precisa colocar a imagem sobre fundos coloridos em design ou apresentações." } },
    { "@type": "Question", "name": "Os arquivos PNG ficam muito grandes?", "acceptedAnswer": { "@type": "Answer", "text": "PNGs são maiores que JPGs (geralmente 2-5x). Para uso web onde o tamanho importa, considere JPG. Para design, documentação e qualidade máxima, PNG vale o tamanho extra." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Converter PDF para PNG Online",
  "description": "Converta páginas de PDF para imagens PNG de alta qualidade em 3 passos simples.",
  "step": [
    { "@type": "HowToStep", "name": "Envie seu PDF", "text": "Acesse a ferramenta PDF para PNG do PDF.it e envie seu arquivo PDF." },
    { "@type": "HowToStep", "name": "Configure a resolução", "text": "Escolha o DPI desejado (150 para web, 200 para uso geral, 300 para máxima qualidade)." },
    { "@type": "HowToStep", "name": "Baixe suas imagens PNG", "text": "Clique em Converter e baixe as imagens PNG individualmente ou como arquivo ZIP." }
  ]
}

export default function ConverterPdfParaPngPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF para PNG</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Converter PDF para PNG Online (Sem Perda de Qualidade)</h1>
              <p className="text-xl text-slate-300">
                Precisa de imagens de alta qualidade do seu PDF? O formato PNG mantém texto e gráficos perfeitamente nítidos. Veja como converter em segundos.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <ImageIcon className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Pronto para converter? Vá direto para a ferramenta.</p>
            </div>
            <Link href="/br/pdf-para-png" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Converter PDF para PNG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Converter PDF para PNG?</h2>
              <p className="text-slate-600 mb-4">PNG é o formato ideal quando qualidade é prioridade. Situações comuns:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Design gráfico.</strong> PNG mantém texto e gráficos perfeitamente nítidos — essencial para uso em Canva, Figma, Photoshop e outras ferramentas de design.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Documentação técnica.</strong> Capturas de diagramas, fluxogramas e tabelas ficam muito melhores em PNG do que em JPG.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Transparência.</strong> PNG suporta fundo transparente, permitindo sobrepor imagens em qualquer fundo colorido.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Impressão de qualidade.</strong> Para impressões onde cada detalhe conta, PNG preserva a qualidade original sem artefatos.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Converter PDF para PNG (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  { title: "Envie seu PDF", desc: "Acesse a ferramenta PDF para PNG e arraste seu arquivo para a área de upload, ou clique para selecionar. Arquivos até 25MB são grátis — usuários Pro podem enviar até 200MB." },
                  { title: "Configure a resolução", desc: "Escolha o DPI para suas imagens. Use 150 DPI para web, 200 DPI para uso geral ou 300 DPI para máxima qualidade e impressão." },
                  { title: "Baixe suas imagens PNG", desc: "Clique em Converter. Cada página gera uma imagem PNG separada. Baixe individualmente ou todas como arquivo ZIP." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">PNG vs JPG: Quando Cada Um é Melhor</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead><tr className="bg-slate-900 text-white"><th className="text-left py-3 px-4 font-bold">Cenário</th><th className="text-left py-3 px-4 font-bold">Formato Ideal</th></tr></thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200"><td className="py-3 px-4">Texto e gráficos nítidos</td><td className="py-3 px-4 font-semibold text-orange-600">PNG</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4">Fotos e documentos escaneados</td><td className="py-3 px-4 font-semibold text-orange-600">JPG</td></tr>
                    <tr className="border-t border-gray-200"><td className="py-3 px-4">Design e edição</td><td className="py-3 px-4 font-semibold text-orange-600">PNG</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4">Redes sociais e email</td><td className="py-3 px-4 font-semibold text-orange-600">JPG</td></tr>
                    <tr className="border-t border-gray-200"><td className="py-3 px-4">Precisa de transparência</td><td className="py-3 px-4 font-semibold text-orange-600">PNG</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4">Quer saber mais? Leia nossa comparação completa: <Link href="/br/aprender/pdf-para-jpg-vs-png" className="text-orange-600 hover:underline">PDF para JPG vs PNG: Qual Escolher?</Link></p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Melhores Resultados</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use 300 DPI para Design</h3>
                  <p className="text-slate-600">Se vai usar a imagem em ferramentas de design ou para impressão, 300 DPI garante a melhor qualidade possível.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Comprima o PDF Antes</h3>
                  <p className="text-slate-600">PDFs muito grandes podem demorar para converter. <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">Comprima primeiro</Link> para acelerar o processo sem afetar a qualidade.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Atenção ao Tamanho do Arquivo</h3>
                  <p className="text-slate-600">PNGs a 300 DPI podem ser grandes (3-5MB por página). Se precisa de arquivos menores e a qualidade perfeita não é essencial, considere <Link href="/br/pdf-para-jpg" className="text-orange-600 hover:underline">JPG</Link> como alternativa.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Converter Seu PDF para PNG?</h2>
            <p className="text-slate-300 mb-6">Obtenha imagens PNG de qualidade perfeita em segundos — grátis, sem cadastro.</p>
            <Link href="/br/pdf-para-png" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
              <ImageIcon className="h-5 w-5" /> Converter PDF para PNG
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Converter PDF para PNG no iPhone", href: "/br/aprender/converter-pdf-para-png-no-iphone" },
                { title: "PDF para PNG para Design", href: "/br/aprender/pdf-para-png-para-design" },
                { title: "Salvar PDF como PNG no Mac", href: "/br/aprender/salvar-pdf-como-png-no-mac" },
                { title: "PDF para JPG vs PNG: Qual Escolher?", href: "/br/aprender/pdf-para-jpg-vs-png" },
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
                { q: "Como converto PDF para PNG grátis?", a: "Envie seu PDF para a ferramenta PDF para PNG do PDF.it, escolha a resolução, clique em Converter e baixe suas imagens PNG. Não é necessário cadastro para seus primeiros 3 arquivos." },
                { q: "PNG é melhor que JPG para converter PDF?", a: "Depende do conteúdo. PNG é melhor para texto, gráficos e diagramas porque não tem artefatos de compressão. JPG é melhor para fotos e quando o tamanho do arquivo importa." },
                { q: "PNG suporta transparência?", a: "Sim. Diferente do JPG, o formato PNG suporta fundo transparente. Isso é útil quando você precisa colocar a imagem sobre fundos coloridos em design ou apresentações." },
                { q: "Os arquivos PNG ficam muito grandes?", a: "PNGs são maiores que JPGs (geralmente 2-5x). Para uso web onde o tamanho importa, considere JPG. Para design, documentação e qualidade máxima, PNG vale o tamanho extra." },
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

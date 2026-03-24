import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { ImageIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "PDF para PNG para Design (Canva, Figma, Photoshop) | PDF.it",
  description:
    "Aprenda como converter PDF para PNG com qualidade ideal para uso em ferramentas de design como Canva, Figma e Photoshop. Dicas de DPI e transparência.",
  keywords: "pdf para png design, pdf para canva, pdf para figma, pdf para photoshop, converter pdf para imagem design",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Qual DPI usar para PNG em ferramentas de design?", "acceptedAnswer": { "@type": "Answer", "text": "Use 300 DPI para design gráfico e impressão. Isso garante a melhor qualidade possível ao redimensionar e editar a imagem em ferramentas como Canva, Figma ou Photoshop." } },
    { "@type": "Question", "name": "PNG mantém a transparência do PDF?", "acceptedAnswer": { "@type": "Answer", "text": "O formato PNG suporta transparência, mas PDFs geralmente têm fundo branco. Se seu PDF tem elementos sobre fundo branco, a conversão para PNG manterá o fundo branco. Para transparência real, é necessário editar em ferramenta de design." } },
    { "@type": "Question", "name": "Por que PNG é melhor que JPG para design?", "acceptedAnswer": { "@type": "Answer", "text": "PNG usa compressão sem perda, mantendo texto e gráficos perfeitamente nítidos. JPG cria artefatos de compressão visíveis em bordas nítidas e texto, prejudicando a qualidade em trabalhos de design." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Converter PDF para PNG para Design",
  "description": "Converta PDF para imagens PNG de alta qualidade para uso em ferramentas de design.",
  "step": [
    { "@type": "HowToStep", "name": "Converta com 300 DPI", "text": "Use a ferramenta PDF para PNG do PDF.it com configuração de 300 DPI para máxima qualidade." },
    { "@type": "HowToStep", "name": "Baixe as imagens PNG", "text": "Baixe as imagens PNG convertidas. Cada página gera uma imagem separada." },
    { "@type": "HowToStep", "name": "Importe no design", "text": "Importe as imagens PNG na sua ferramenta de design preferida (Canva, Figma, Photoshop, etc.)." }
  ]
}

export default function PdfParaPngParaDesignPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF para PNG</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF para PNG para Design (Canva, Figma, Photoshop)</h1>
              <p className="text-xl text-slate-300">
                Precisa usar conteúdo de um PDF no seu projeto de design? Veja como converter para PNG com a qualidade ideal para Canva, Figma, Photoshop e outras ferramentas.
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
              <p className="text-slate-700 font-semibold">PNG em 300 DPI — perfeito para design.</p>
            </div>
            <Link href="/br/pdf-para-png" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Converter PDF para PNG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que PNG para Design?</h2>
              <p className="text-slate-600 mb-4">Quando você trabalha com design, a qualidade da imagem importa muito. PNG é o formato ideal porque:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Sem artefatos.</strong> PNG usa compressão sem perda — texto, linhas e bordas ficam perfeitamente nítidos, sem os artefatos que JPG cria.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Suporte a transparência.</strong> PNG suporta canal alfa (transparência), útil para sobrepor elementos em fundos coloridos.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Compatibilidade universal.</strong> Todas as ferramentas de design (Canva, Figma, Photoshop, Illustrator, InDesign) trabalham perfeitamente com PNG.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Cores precisas.</strong> PNG preserva as cores originais do PDF sem alteração pela compressão.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Converter para Uso em Design</h2>
              <div className="space-y-4">
                {[
                  { title: "Converta com 300 DPI", desc: "Na ferramenta PDF para PNG do PDF.it, selecione 300 DPI. Para design e impressão, essa é a resolução padrão da indústria." },
                  { title: "Baixe as imagens PNG", desc: "Após a conversão, baixe as imagens. Cada página do PDF gera um PNG separado. Baixe individualmente ou como ZIP." },
                  { title: "Importe na ferramenta de design", desc: "No Canva: Upload > Faça upload de mídia. No Figma: arraste o arquivo para o canvas. No Photoshop: Arquivo > Abrir ou arraste para a janela." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Configurações por Ferramenta</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead><tr className="bg-slate-900 text-white"><th className="text-left py-3 px-4 font-bold">Ferramenta</th><th className="text-left py-3 px-4 font-bold">DPI Recomendado</th><th className="text-left py-3 px-4 font-bold">Dica</th></tr></thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Canva</td><td className="py-3 px-4 text-orange-600 font-semibold">300 DPI</td><td className="py-3 px-4">Use Upload &gt; Faça upload de mídia</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Figma</td><td className="py-3 px-4 text-orange-600 font-semibold">300 DPI</td><td className="py-3 px-4">Arraste direto para o canvas</td></tr>
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Photoshop</td><td className="py-3 px-4 text-orange-600 font-semibold">300 DPI</td><td className="py-3 px-4">Abra como nova camada</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Google Slides</td><td className="py-3 px-4 text-orange-600 font-semibold">200 DPI</td><td className="py-3 px-4">Inserir &gt; Imagem</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas Pro para Designers</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Extraia Apenas o Necessário</h3>
                  <p className="text-slate-600">Se precisa de apenas uma parte do PDF, use <Link href="/br/dividir-pdf" className="text-orange-600 hover:underline">Dividir PDF</Link> primeiro para extrair as páginas relevantes. Depois converta para PNG.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Extraia Imagens Diretamente</h3>
                  <p className="text-slate-600">Se precisa de imagens individuais do PDF (fotos, logos), use <Link href="/br/extrair-imagens-de-pdf" className="text-orange-600 hover:underline">Extrair Imagens de PDF</Link> para obter as imagens originais em resolução total.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Atenção ao Tamanho</h3>
                  <p className="text-slate-600">PNGs a 300 DPI podem ser grandes. Se está trabalhando com muitas imagens no Canva ou Figma, isso pode deixar o projeto lento. Converta apenas as páginas que precisa.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">PNG de Alta Qualidade para Seu Design</h2>
            <p className="text-slate-300 mb-6">Converta PDF para PNG em 300 DPI — perfeito para Canva, Figma e Photoshop.</p>
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
                { title: "Como Converter PDF para PNG Online", href: "/br/aprender/converter-pdf-para-png" },
                { title: "PDF para JPG vs PNG: Qual Escolher?", href: "/br/aprender/pdf-para-jpg-vs-png" },
                { title: "Salvar PDF como PNG no Mac", href: "/br/aprender/salvar-pdf-como-png-no-mac" },
                { title: "PDF para JPG para PowerPoint", href: "/br/aprender/pdf-para-jpg-para-powerpoint" },
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
                { q: "Qual DPI usar para PNG em ferramentas de design?", a: "Use 300 DPI para design gráfico e impressão. Isso garante a melhor qualidade possível ao redimensionar e editar a imagem em ferramentas como Canva, Figma ou Photoshop." },
                { q: "PNG mantém a transparência do PDF?", a: "O formato PNG suporta transparência, mas PDFs geralmente têm fundo branco. Se seu PDF tem elementos sobre fundo branco, a conversão para PNG manterá o fundo branco." },
                { q: "Por que PNG é melhor que JPG para design?", a: "PNG usa compressão sem perda, mantendo texto e gráficos perfeitamente nítidos. JPG cria artefatos de compressão visíveis em bordas nítidas e texto, prejudicando a qualidade em trabalhos de design." },
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

import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Printer, ArrowRight } from "lucide-react"

export const metadata = {
  title: "PPT para PDF para Imprimir: Dicas de Layout e Qualidade | PDF.it",
  description: "Converta PowerPoint para PDF pronto para impressao. Aprenda a configurar tamanho de slide, resolucao de imagem, margens e layout para obter impressoes perfeitas.",
  keywords: "ppt para pdf para imprimir, powerpoint para pdf impressao, converter ppt para imprimir, pdf para impressao, slides para imprimir",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Qual a melhor resolucao para imprimir slides em PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Para impressao de alta qualidade, use imagens com pelo menos 300 DPI nos seus slides. Para visualizacao em tela, 150 DPI e suficiente. Configure no PowerPoint antes de converter para PDF." } },
  { "@type": "Question", "name": "Devo usar tamanho de slide padrao (4:3) ou widescreen (16:9) para imprimir?", "acceptedAnswer": { "@type": "Answer", "text": "Para impressao em papel A4 ou carta, o formato padrao 4:3 se encaixa melhor. Widescreen 16:9 funciona, mas deixa barras brancas em cima e embaixo. Para banners e posters, configure um tamanho personalizado." } },
  { "@type": "Question", "name": "Como imprimo varios slides por pagina em PDF?", "acceptedAnswer": { "@type": "Answer", "text": "No PowerPoint, va em Arquivo > Imprimir e selecione o layout desejado (2, 3, 4, 6 ou 9 slides por pagina). Depois use Imprimir como PDF. Isso cria um PDF compacto ideal para apostilas." } },
  { "@type": "Question", "name": "O PDF convertido mantem as cores dos slides?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. As cores sao preservadas na conversao. Porem, ao imprimir, as cores podem variar dependendo da impressora. Para resultados profissionais, use o perfil de cores CMYK." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como converter PPT para PDF pronto para imprimir", "description": "Prepare sua apresentacao PowerPoint para impressao perfeita em PDF.", "step": [
  { "@type": "HowToStep", "name": "Configure o tamanho do slide", "text": "No PowerPoint, va em Design > Tamanho do Slide e escolha o formato adequado para impressao (A4, Carta ou personalizado)." },
  { "@type": "HowToStep", "name": "Verifique a resolucao das imagens", "text": "Certifique-se de que todas as imagens tem pelo menos 300 DPI para impressao de qualidade." },
  { "@type": "HowToStep", "name": "Converta para PDF", "text": "Envie o arquivo PPTX para o conversor do PDF.it e baixe o PDF pronto para impressao." }
] }

export default function PptParaPdfParaImprimirPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PowerPoint para PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">PPT para PDF para Imprimir</h1>
          <p className="text-xl text-slate-300">Precisa imprimir sua apresentacao PowerPoint com qualidade profissional? Aprenda a converter PPT para PDF otimizado para impressao — com layout, resolucao e margens perfeitas.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><Printer className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Pronto para converter? Pule o guia e va direto para a ferramenta.</p></div>
          <Link href="/br/powerpoint-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Converter PPT para PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por que converter para PDF antes de imprimir?</h2>
            <p className="text-slate-600 mb-4">Imprimir diretamente do PowerPoint pode causar surpresas desagradaveis — elementos cortados, fontes trocadas e cores diferentes. Converter para PDF antes de imprimir garante:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Layout travado.</strong> O PDF preserva exatamente a posicao de cada elemento, evitando que a impressora mude o layout.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Fontes incorporadas.</strong> PDFs podem incorporar as fontes, eliminando o risco de <Link href="/br/aprender/pptx-para-pdf-fontes-faltando" className="text-orange-600 hover:underline">fontes faltando</Link> na impressao.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Compatibilidade com graficas.</strong> Graficas profissionais preferem receber arquivos em PDF por ser um formato padrao de impressao.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Configuracoes ideais para impressao</h2>
            <div className="space-y-4">
              {[
                { title: "Escolha o tamanho de slide correto", desc: "Va em Design > Tamanho do Slide. Para papel A4, use 'Personalizado' com 21cm x 29,7cm. Para papel carta (Letter), use 21,6cm x 27,9cm. Evite widescreen 16:9 se o destino for papel padrao." },
                { title: "Use imagens em alta resolucao", desc: "Para impressao de qualidade, todas as imagens devem ter no minimo 300 DPI. Imagens de baixa resolucao ficam pixeladas no papel. Verifique em PowerPoint > Arquivo > Opcoes > Avancado > Tamanho e qualidade de imagem." },
                { title: "Configure margens adequadas", desc: "A maioria das impressoras nao imprime ate a borda. Deixe pelo menos 0,5cm de margem em cada lado para evitar cortes. Para impressao sangrada (full bleed), adicione 3mm de sangria." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Layouts de impressao: quantos slides por pagina?</h2>
            <p className="text-slate-600 mb-4">Dependendo do uso, voce pode querer imprimir mais de um slide por pagina:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>1 slide por pagina</strong> — ideal para apresentacoes formais e posters.</li>
              <li>&#10003; <strong>2 slides por pagina</strong> — bom para revisao e anotacoes.</li>
              <li>&#10003; <strong>3 slides por pagina (com linhas)</strong> — perfeito para apostilas com espaco para anotacoes.</li>
              <li>&#10003; <strong>6 ou 9 slides por pagina</strong> — ideal para visao geral rapida e economia de papel.</li>
            </ul>
            <p className="text-slate-600 mt-4">No PowerPoint, va em <strong>Arquivo &gt; Imprimir</strong>, escolha o layout desejado e selecione "Imprimir como PDF" como destino.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para impressao profissional</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Incorpore as fontes</strong> no PowerPoint antes de converter (Arquivo &gt; Opcoes &gt; Salvar &gt; Incorporar fontes).</li>
              <li>&#10003; <strong>Evite gradientes muito sutis</strong> — podem parecer listrados quando impressos.</li>
              <li>&#10003; <strong>Teste com uma pagina primeiro</strong> — imprima uma pagina de teste antes de imprimir toda a apresentacao.</li>
              <li>&#10003; <strong>Considere comprimir o PDF</strong> se precisar enviar para a grafica por email. Use nosso <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">compressor de PDF</Link>.</li>
              <li>&#10003; <strong>Para proteger sua apresentacao</strong> impressa digitalmente, adicione uma <Link href="/br/aprender/como-adicionar-marca-dagua-em-pdf" className="text-orange-600 hover:underline">marca d agua ao PDF</Link>.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12 bg-[#191B4D]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Converta seu PPT para PDF pronto para imprimir</h2>
          <p className="text-slate-300 mb-6">Envie seu arquivo PPTX e obtenha um PDF de alta qualidade para impressao — gratis, sem cadastro.</p>
          <Link href="/br/powerpoint-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><Printer className="h-5 w-5" /> Converter PPT para PDF Agora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Converter PowerPoint para PDF online (guia completo)", href: "/br/aprender/converter-ppt-para-pdf" },
              { title: "PPT para PDF no iPhone (metodo rapido)", href: "/br/aprender/ppt-para-pdf-no-iphone" },
              { title: "PPTX para PDF fontes faltando? Corrija incorporacao e substituicoes", href: "/br/aprender/pptx-para-pdf-fontes-faltando" },
              { title: "PPT para PDF — E as animacoes?", href: "/br/aprender/ppt-para-pdf-animacoes" },
            ].map((a) => (<Link key={a.href} href={a.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"><span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{a.title}</span><ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" /></Link>))}
          </div>
        </div></section>

        <section className="py-16 bg-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas frequentes</h2>
          <div className="space-y-6">
            {(faqSchema.mainEntity as Array<{name: string; acceptedAnswer: {text: string}}>).map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200"><h3 className="font-bold text-slate-900 mb-2">{faq.name}</h3><p className="text-slate-600 text-sm">{faq.acceptedAnswer.text}</p></div>
            ))}
          </div>
        </div></section>
      </main>
      <FooterBr />
    </div>
  )
}

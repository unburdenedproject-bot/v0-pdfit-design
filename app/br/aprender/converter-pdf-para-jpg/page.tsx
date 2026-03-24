import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { ImageIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Converter PDF para JPG Online (Rápido e Alta Qualidade) | PDF.it",
  description:
    "Aprenda como converter PDF para JPG online em segundos. Guia passo a passo com configuração de qualidade, conversão em lote e quando usar JPG vs PNG — grátis, sem software.",
  keywords: "converter pdf para jpg online, pdf para jpg, pdf para imagem, converter pdf para imagem, pdf para jpeg",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Como converto um PDF para JPG grátis?", "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF para a ferramenta PDF para JPG do PDF.it, escolha a configuração de qualidade, clique em Converter e baixe suas imagens JPG. Não é necessário cadastro para seus primeiros 3 arquivos." } },
    { "@type": "Question", "name": "Converter PDF para JPG perde qualidade?", "acceptedAnswer": { "@type": "Answer", "text": "JPG usa compressão com perda, então sempre há alguma perda de qualidade comparado ao PDF original. No entanto, com configurações de alta qualidade (200-300 DPI), a diferença é quase imperceptível para a maioria dos usos como apresentações, redes sociais ou páginas web." } },
    { "@type": "Question", "name": "Qual DPI devo usar para PDF para JPG?", "acceptedAnswer": { "@type": "Answer", "text": "Para visualização em tela e uso web, 150 DPI é suficiente. Para apresentações e documentos, 200 DPI funciona bem. Para impressão ou quando precisa de máximo detalhe, use 300 DPI. Maior DPI significa arquivos maiores." } },
    { "@type": "Question", "name": "Posso converter um PDF de várias páginas para JPG?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Quando você converte um PDF de várias páginas, cada página se torna uma imagem JPG separada. O PDF.it converte todas as páginas de uma vez e permite baixá-las individualmente ou como arquivo ZIP." } },
    { "@type": "Question", "name": "Devo converter para JPG ou PNG?", "acceptedAnswer": { "@type": "Answer", "text": "Use JPG para fotos, documentos digitalizados e quando o tamanho do arquivo importa. Use PNG para páginas com muito texto, diagramas, capturas de tela ou quando precisa de transparência. Arquivos PNG são maiores mas sem perda de qualidade." } },
    { "@type": "Question", "name": "Posso converter PDF para JPG no celular?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em qualquer navegador móvel incluindo Safari no iPhone e Chrome no Android. Envie seu PDF, converta e salve as imagens JPG diretamente no seu celular. Não precisa de nenhum app." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Converter PDF para JPG Online",
  "description": "Converta as páginas do seu PDF para imagens JPG de alta qualidade em 3 passos simples usando o PDF.it.",
  "step": [
    { "@type": "HowToStep", "name": "Envie seu PDF", "text": "Vá para a ferramenta PDF para JPG do PDF.it e envie seu arquivo clicando ou arrastando para a área de upload." },
    { "@type": "HowToStep", "name": "Escolha a configuração de qualidade", "text": "Selecione seu DPI preferido (150 para web, 200 para apresentações, 300 para impressão) e escolha quais páginas converter." },
    { "@type": "HowToStep", "name": "Baixe suas imagens JPG", "text": "Clique em Converter e baixe seus arquivos JPG. Cada página do PDF se torna uma imagem JPG separada. Baixe individualmente ou como arquivo ZIP." }
  ]
}

export default function ConverterPdfParaJpgPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF para JPG</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Converter PDF para JPG Online (Rápido e Alta Qualidade)</h1>
              <p className="text-xl text-slate-300">
                Precisa converter um PDF para imagens? Seja para uma apresentação, redes sociais ou um site, veja como converter PDF para JPG em segundos — sem software para instalar.
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
              <p className="text-slate-700 font-semibold">Pronto para converter? Pule o guia e vá direto para a ferramenta.</p>
            </div>
            <Link href="/br/pdf-para-jpg" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Converter PDF para JPG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Converter PDF para JPG?</h2>
              <p className="text-slate-600 mb-4">PDFs são ótimos para documentos, mas nem sempre são o formato adequado. Existem vários motivos comuns para precisar de um JPG:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Apresentações.</strong> Você não pode arrastar um PDF para o PowerPoint ou Google Slides — mas pode inserir um JPG. Converter páginas em imagens permite usar conteúdo PDF em qualquer apresentação.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Redes sociais e sites.</strong> Plataformas como Instagram, Facebook e a maioria dos construtores de sites não aceitam upload de PDF. JPG é universalmente aceito.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Pré-visualizações rápidas.</strong> Às vezes você precisa de uma miniatura ou imagem de pré-visualização de um documento — um JPG da primeira página funciona perfeitamente.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Apps de mensagem.</strong> Compartilhar um JPG no WhatsApp, Slack ou Teams mostra uma pré-visualização inline. PDFs geralmente exigem que o destinatário baixe e abra um arquivo separado.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Converter PDF para JPG (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  { title: "Envie seu PDF", desc: "Vá para a ferramenta PDF para JPG e arraste seu arquivo para a área de upload, ou clique para procurar. Arquivos até 25MB são grátis — usuários Pro podem enviar até 200MB e converter múltiplos arquivos de uma vez." },
                  { title: "Escolha a configuração de qualidade", desc: "Selecione o DPI (pontos por polegada) para suas imagens de saída. Use 150 DPI para web e email, 200 DPI para apresentações, ou 300 DPI para impressão. Maior DPI significa imagens mais nítidas mas arquivos maiores." },
                  { title: "Baixe suas imagens JPG", desc: "Clique em Converter. Cada página do seu PDF se torna um arquivo JPG separado. Baixe páginas individuais ou todas como arquivo ZIP. A conversão leva apenas alguns segundos." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Qual Configuração de DPI Usar?</h2>
              <p className="text-slate-600 mb-4">DPI (pontos por polegada) controla o quão nítidas suas imagens JPG serão. Veja um guia rápido:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead><tr className="bg-slate-900 text-white"><th className="text-left py-3 px-4 font-bold">DPI</th><th className="text-left py-3 px-4 font-bold">Melhor Para</th><th className="text-left py-3 px-4 font-bold">Tamanho do Arquivo</th></tr></thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-orange-600">72 DPI</td><td className="py-3 px-4">Miniaturas rápidas, pré-visualizações web</td><td className="py-3 px-4">Pequeno (~100-300KB)</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold text-orange-600">150 DPI</td><td className="py-3 px-4">Email, uso web, redes sociais</td><td className="py-3 px-4">Médio (~300-800KB)</td></tr>
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-orange-600">200 DPI</td><td className="py-3 px-4">Apresentações, documentos, visualização clara</td><td className="py-3 px-4">Grande (~500KB-1.5MB)</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold text-orange-600">300 DPI</td><td className="py-3 px-4">Impressão, arquivamento, máxima qualidade</td><td className="py-3 px-4">Muito grande (~1-3MB por página)</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">JPG vs PNG: Qual Formato Escolher?</h2>
              <p className="text-slate-600 mb-4">Tanto JPG quanto PNG são formatos de imagem, mas funcionam de maneira diferente. Escolher o correto depende do conteúdo do seu PDF:</p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Escolha JPG Quando:</h3>
                  <ul className="space-y-1 text-slate-600">
                    <li>- Seu PDF contém fotos, páginas digitalizadas ou imagens complexas</li>
                    <li>- O tamanho do arquivo importa (JPGs são 2-5x menores que PNGs)</li>
                    <li>- Você está compartilhando em redes sociais ou apps de mensagem</li>
                    <li>- Uma perda menor de qualidade é aceitável</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Escolha PNG Quando:</h3>
                  <ul className="space-y-1 text-slate-600">
                    <li>- Seu PDF tem texto nítido, diagramas ou arte linear</li>
                    <li>- Precisa de precisão pixel a pixel (sem artefatos de compressão)</li>
                    <li>- Precisa de transparência (PNG suporta, JPG não)</li>
                    <li>- Está criando capturas de tela ou documentação</li>
                  </ul>
                  <p className="text-slate-600 mt-2">Precisa de PNG? Use nossa ferramenta <Link href="/br/pdf-para-png" className="text-orange-600 hover:underline">PDF para PNG</Link> para conversão sem perda.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Conversão em Lote: Múltiplos PDFs de Uma Vez</h2>
              <p className="text-slate-600 mb-4">Se você tem vários PDFs para converter, fazer um por um é tedioso. Usuários Pro do PDF.it podem enviar múltiplos PDFs e convertê-los todos para JPG em um único lote:</p>
              <ul className="space-y-2 text-slate-700">
                <li>- Selecione múltiplos arquivos PDF de uma vez (ou arraste uma pasta inteira)</li>
                <li>- Cada PDF é convertido para imagens JPG com suas configurações escolhidas</li>
                <li>- Baixe todos os resultados como um único arquivo ZIP</li>
                <li>- Acompanhe o progresso de cada arquivo individualmente</li>
              </ul>
              <p className="text-slate-600 mt-4">Usuários gratuitos podem converter um arquivo por vez. Se você converte PDFs regularmente, <Link href="/br/precos" className="text-orange-600 hover:underline">atualizar para Pro</Link> economiza tempo significativo.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas Pro para Melhor Qualidade JPG</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Comprima Antes de Converter</h3>
                  <p className="text-slate-600">Se seu PDF é muito grande, <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">comprima primeiro</Link> para eliminar dados desnecessários. Isso pode acelerar o processo de conversão sem afetar a qualidade final do JPG.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Divida Primeiro, Converta Depois</h3>
                  <p className="text-slate-600">Se você só precisa de algumas páginas como JPG, não converta o PDF inteiro. Use <Link href="/br/dividir-pdf" className="text-orange-600 hover:underline">Dividir PDF</Link> para extrair apenas as páginas que precisa, depois converta para JPG. Mais rápido e menos bagunça.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Fique de Olho no Tamanho do Arquivo</h3>
                  <p className="text-slate-600">Um JPG a 300 DPI de uma página PDF colorida pode pesar 2-3MB. Se você está anexando imagens a um email ou enviando para uma plataforma com limites de tamanho, 150 DPI geralmente é suficiente.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Converter Seu PDF para JPG?</h2>
            <p className="text-slate-300 mb-6">Envie seu arquivo e obtenha imagens JPG de alta qualidade em segundos — grátis, sem cadastro.</p>
            <Link href="/br/pdf-para-jpg" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
              <ImageIcon className="h-5 w-5" /> Converter PDF para JPG
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "PDF para JPG no iPhone (Sem Apps)", href: "/br/aprender/pdf-para-jpg-no-iphone" },
                { title: "PDF para JPG para PowerPoint (Melhores Configurações + Dicas)", href: "/br/aprender/pdf-para-jpg-para-powerpoint" },
                { title: "Por Que PDF para JPG Fica Borrado (E Como Resolver)", href: "/br/aprender/por-que-pdf-para-jpg-fica-borrado" },
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

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como converto um PDF para JPG grátis?", a: "Envie seu PDF para a ferramenta PDF para JPG do PDF.it, escolha a configuração de qualidade, clique em Converter e baixe suas imagens JPG. Não é necessário cadastro para seus primeiros 3 arquivos." },
                { q: "Converter PDF para JPG perde qualidade?", a: "JPG usa compressão com perda, então sempre há alguma perda de qualidade comparado ao PDF original. No entanto, com configurações de alta qualidade (200-300 DPI), a diferença é quase imperceptível para a maioria dos usos." },
                { q: "Qual DPI devo usar para PDF para JPG?", a: "Para visualização em tela e uso web, 150 DPI é suficiente. Para apresentações e documentos, 200 DPI funciona bem. Para impressão ou quando precisa de máximo detalhe, use 300 DPI." },
                { q: "Posso converter um PDF de várias páginas para JPG?", a: "Sim. Quando você converte um PDF de várias páginas, cada página se torna uma imagem JPG separada. O PDF.it converte todas as páginas de uma vez e permite baixá-las individualmente ou como arquivo ZIP." },
                { q: "Devo converter para JPG ou PNG?", a: "Use JPG para fotos, documentos digitalizados e quando o tamanho do arquivo importa. Use PNG para páginas com muito texto, diagramas, capturas de tela ou quando precisa de transparência." },
                { q: "Posso converter PDF para JPG no celular?", a: "Sim. O PDF.it funciona em qualquer navegador móvel incluindo Safari no iPhone e Chrome no Android. Envie seu PDF, converta e salve as imagens JPG diretamente no seu celular. Não precisa de nenhum app." },
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

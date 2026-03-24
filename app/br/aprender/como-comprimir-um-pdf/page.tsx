import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { FileArchiveIcon as Compress, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Comprimir um PDF (Reduzir Tamanho Rapidamente) | PDF.it",
  description:
    "Aprenda como comprimir um PDF e reduzir o tamanho do arquivo em segundos. Guia passo a passo com dicas para email, uploads e documentos digitalizados — gratis, online, sem software.",
  keywords: "comprimir pdf, reduzir tamanho pdf, como comprimir um pdf, diminuir pdf, compactar pdf online gratis",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como comprimir um PDF gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF para o PDF.it, escolha um nivel de compressao (Leve, Media ou Extrema), clique em Comprimir e baixe o arquivo menor. Nao e necessario cadastro para seus primeiros 3 arquivos." }
    },
    {
      "@type": "Question",
      "name": "Comprimir um PDF reduz a qualidade?",
      "acceptedAnswer": { "@type": "Answer", "text": "A compressao Leve mantem a qualidade quase identica ao original. Media equilibra tamanho e qualidade. A compressao Extrema reduz mais o tamanho mas pode diminuir levemente a qualidade das imagens. O texto sempre permanece nitido e legivel." }
    },
    {
      "@type": "Question",
      "name": "Por que meu PDF e tao grande?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDFs grandes geralmente sao causados por imagens de alta resolucao, paginas digitalizadas ou fontes incorporadas. Documentos digitalizados sao os principais culpados — uma unica pagina digitalizada pode pesar 2-5MB porque e armazenada como uma imagem de pagina inteira." }
    },
    {
      "@type": "Question",
      "name": "Posso comprimir um PDF no celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em qualquer navegador movel — envie seu PDF, comprima e baixe o resultado diretamente no iPhone ou Android. Nao precisa de nenhum aplicativo." }
    },
    {
      "@type": "Question",
      "name": "Quanto posso reduzir o tamanho de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Depende do conteudo. Um PDF digitalizado de 10MB pode ser comprimido para 1-3MB. Um PDF de 5MB com muito texto pode cair para 500KB. A compressao Extrema oferece a maxima reducao, mas os resultados variam conforme a quantidade de imagens no PDF." }
    },
    {
      "@type": "Question",
      "name": "Qual a diferenca entre compressao Leve, Media e Extrema?",
      "acceptedAnswer": { "@type": "Answer", "text": "Leve mantem as imagens em alta qualidade (menor reducao de tamanho). Media equilibra qualidade e tamanho (boa para a maioria dos usos). Extrema reduz agressivamente a qualidade das imagens para maxima reducao de tamanho (melhor para portais com limites rigorosos)." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Comprimir um PDF Online",
  "description": "Reduza o tamanho do seu arquivo PDF em 3 passos simples usando o PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Envie seu PDF",
      "text": "Acesse a ferramenta Comprimir PDF do PDF.it e envie seu arquivo clicando ou arrastando para a area de upload."
    },
    {
      "@type": "HowToStep",
      "name": "Escolha o nivel de compressao",
      "text": "Selecione Leve (melhor qualidade), Media (equilibrada) ou Extrema (maxima reducao) conforme sua necessidade."
    },
    {
      "@type": "HowToStep",
      "name": "Baixe seu PDF comprimido",
      "text": "Clique em Comprimir PDF e baixe o arquivo menor. Verifique o tamanho — se ainda estiver grande, tente um nivel de compressao mais alto ou divida o PDF primeiro."
    }
  ]
}

export default function ComoComprimirUmPDFPage() {
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
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Comprimir PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Comprimir um PDF (Reduzir Tamanho Rapidamente)</h1>
              <p className="text-xl text-slate-300">
                Seu PDF e grande demais para email, um portal de upload ou um formulario de envio. Veja como comprimi-lo em menos de 30 segundos — sem software, sem cadastro.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Compress className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Pronto para comprimir? Pule o guia e va direto para a ferramenta.</p>
            </div>
            <Link
              href="/br/comprimir-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Comprimir PDF Agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Seu PDF E Tao Grande?</h2>
              <p className="text-slate-600 mb-4">
                Antes de comprimir, e util entender <strong>por que</strong> seu PDF e grande. As causas mais comuns:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Paginas digitalizadas.</strong> Cada pagina digitalizada e armazenada como uma imagem de pagina inteira (frequentemente 2-5MB por pagina). Um documento digitalizado de 10 paginas pode facilmente atingir 20-50MB.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Imagens de alta resolucao.</strong> Fotos, graficos e elementos visuais incorporados em qualidade de impressao (300 DPI) ocupam espaco significativo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Fontes incorporadas.</strong> PDFs que incluem fontes personalizadas incorporam o arquivo de fonte completo, adicionando centenas de KB por fonte.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Camadas e anotacoes.</strong> Campos de formulario, comentarios e elementos interativos adicionam dados extras. <Link href="/br/achatar-pdf" className="text-orange-600 hover:underline">Achatar seu PDF</Link> os remove.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Comprimir um PDF (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Envie seu PDF",
                    desc: "Acesse a ferramenta Comprimir PDF e arraste seu arquivo para a area de upload, ou clique para buscar. Arquivos ate 25MB sao gratis — usuarios Pro podem enviar ate 200MB.",
                  },
                  {
                    title: "Escolha seu nivel de compressao",
                    desc: "Selecione Leve (minima perda de qualidade), Media (bom equilibrio) ou Extrema (maxima reducao de tamanho). Para anexos de email, Media geralmente funciona. Para limites rigorosos de upload (2MB, 5MB), tente Extrema.",
                  },
                  {
                    title: "Baixe o PDF comprimido",
                    desc: "Clique em Comprimir PDF. Quando o processamento terminar, baixe seu arquivo menor. Verifique o novo tamanho — se ainda estiver grande, tente um nivel de compressao mais alto ou divida o PDF em partes primeiro.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Qual Nivel de Compressao Usar?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Nivel</th>
                      <th className="text-left py-3 px-4 font-bold">Melhor Para</th>
                      <th className="text-left py-3 px-4 font-bold">Qualidade</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Leve</td>
                      <td className="py-3 px-4">Compartilhar documentos onde a qualidade importa (relatorios, portfolios)</td>
                      <td className="py-3 px-4">Quase original</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">Media</td>
                      <td className="py-3 px-4">Anexos de email, compartilhamento geral, maioria dos portais de upload</td>
                      <td className="py-3 px-4">Boa — o texto permanece nitido</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Extrema</td>
                      <td className="py-3 px-4">Limites rigorosos de upload (1MB, 2MB, 5MB), portais governamentais, formularios de visto</td>
                      <td className="py-3 px-4">Reduzida — imagens podem perder detalhes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">O PDF Ainda Esta Grande Depois de Comprimir?</h2>
              <p className="text-slate-600 mb-4">
                Se a compressao sozinha nao reduzir seu arquivo o suficiente, tente estas abordagens:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Divida o PDF</strong> em partes menores usando <Link href="/br/dividir-pdf" className="text-orange-600 hover:underline">Dividir PDF</Link>, depois comprima cada parte separadamente.</li>
                <li>&#10003; <strong>Achate o PDF</strong> primeiro com <Link href="/br/achatar-pdf" className="text-orange-600 hover:underline">Achatar PDF</Link> para remover campos de formulario e anotacoes antes de comprimir.</li>
                <li>&#10003; <strong>Tente a compressao Extrema</strong> se ainda nao tentou — oferece a maxima reducao de tamanho.</li>
                <li>&#10003; <strong>Remova paginas desnecessarias</strong> usando <Link href="/br/remover-paginas-de-pdf" className="text-orange-600 hover:underline">Remover Paginas</Link> antes de comprimir.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas de Compressao para Cenarios Comuns</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Para Anexos de Email</h3>
                  <p className="text-slate-600">
                    Gmail, Outlook e Yahoo limitam anexos a 20-25MB. A compressao Media geralmente faz com que os PDFs fiquem abaixo desse limite. Para limites mais rigorosos, tente nossa ferramenta <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> que e otimizada para diferentes necessidades.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Para Portais de Upload (Governo, Visto, Concursos)</h3>
                  <p className="text-slate-600">
                    Muitos portais exigem PDFs com menos de 2MB ou 5MB. Use a compressao Extrema, e se o arquivo ainda estiver grande, divida-o em paginas individuais primeiro.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Para Documentos Digitalizados</h3>
                  <p className="text-slate-600">
                    PDFs digitalizados comprimem dramaticamente porque sao principalmente imagens. A compressao Extrema pode reduzir um documento digitalizado de 20MB para 2-4MB mantendo o texto legivel.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Comprimir Seu PDF?</h2>
            <p className="text-slate-300 mb-6">Envie seu arquivo e reduza o tamanho em segundos — gratis, sem cadastro.</p>
            <Link
              href="/br/comprimir-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Compress className="h-5 w-5" /> Comprimir PDF Agora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Comprimir PDF Grande (50MB, 100MB ou Mais)", href: "/br/aprender/comprimir-pdf-grande" },
                { title: "Comprimir PDF para Imprimir", href: "/br/aprender/comprimir-pdf-para-imprimir" },
                { title: "Comprimir PDF com Imagens", href: "/br/aprender/comprimir-pdf-com-imagens" },
                { title: "Comprimir PDF Sem Perder Qualidade", href: "/br/aprender/comprimir-pdf-sem-perder-qualidade" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como comprimir um PDF gratis?", a: "Envie seu PDF para o PDF.it, escolha um nivel de compressao (Leve, Media ou Extrema), clique em Comprimir e baixe o arquivo menor. Nao e necessario cadastro para seus primeiros 3 arquivos." },
                { q: "Comprimir um PDF reduz a qualidade?", a: "A compressao Leve mantem a qualidade quase identica ao original. Media equilibra tamanho e qualidade. A compressao Extrema reduz mais o tamanho mas pode diminuir levemente a qualidade das imagens. O texto sempre permanece nitido e legivel." },
                { q: "Por que meu PDF e tao grande?", a: "PDFs grandes geralmente sao causados por imagens de alta resolucao, paginas digitalizadas ou fontes incorporadas. Documentos digitalizados sao os principais culpados — uma unica pagina digitalizada pode pesar 2-5MB." },
                { q: "Posso comprimir um PDF no celular?", a: "Sim. O PDF.it funciona em qualquer navegador movel — envie seu PDF, comprima e baixe o resultado diretamente no iPhone ou Android. Nao precisa de nenhum aplicativo." },
                { q: "Quanto posso reduzir o tamanho de um PDF?", a: "Depende do conteudo. Um PDF digitalizado de 10MB pode ser comprimido para 1-3MB. Um PDF de 5MB com muito texto pode cair para 500KB. A compressao Extrema oferece a maxima reducao." },
                { q: "Qual a diferenca entre compressao Leve, Media e Extrema?", a: "Leve mantem as imagens em alta qualidade (menor reducao). Media equilibra qualidade e tamanho (boa para a maioria dos usos). Extrema reduz agressivamente a qualidade das imagens para maxima reducao de tamanho." },
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

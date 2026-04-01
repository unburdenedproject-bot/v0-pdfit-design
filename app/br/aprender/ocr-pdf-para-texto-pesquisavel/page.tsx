import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { ScanText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "OCR: PDF para Texto Pesquisavel (Encontre Texto em PDFs Digitalizados) | PDF.it",
  description:
    "Converta PDFs digitalizados em documentos pesquisaveis com OCR. Aprenda como encontrar texto, copiar conteudo e indexar PDFs que antes eram apenas imagens.",
  keywords: "ocr pdf texto pesquisavel, pdf digitalizado pesquisavel, buscar texto pdf digitalizado, ocr pdf online",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "O que e um PDF pesquisavel?", "acceptedAnswer": { "@type": "Answer", "text": "Um PDF pesquisavel contem uma camada de texto invisivel sobre as imagens digitalizadas. Isso permite usar Ctrl+F para buscar palavras, selecionar e copiar texto, mesmo que visualmente o documento pareca identico a digitalizacao original." } },
    { "@type": "Question", "name": "Como o OCR torna um PDF pesquisavel?", "acceptedAnswer": { "@type": "Answer", "text": "O OCR analisa as imagens do PDF, reconhece letras e palavras, e adiciona uma camada de texto transparente alinhada sobre a imagem original. O documento mantem a aparencia visual, mas agora o texto pode ser buscado e copiado." } },
    { "@type": "Question", "name": "O PDF original e alterado?", "acceptedAnswer": { "@type": "Answer", "text": "Nao. A aparencia visual do PDF permanece identica. O OCR apenas adiciona uma camada de texto invisivel por tras da imagem, sem modificar as paginas originais." } },
    { "@type": "Question", "name": "Posso converter o PDF pesquisavel em texto puro?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Apos aplicar OCR, voce pode usar a ferramenta PDF para Texto do PDF.it para extrair o conteudo em formato texto simples." } },
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Converter PDF Digitalizado em Texto Pesquisavel",
  "description": "Torne qualquer PDF digitalizado pesquisavel em 3 passos com o Scanner OCR do PDF.it.",
  "step": [
    { "@type": "HowToStep", "name": "Faca upload do PDF digitalizado", "text": "Acesse o Scanner OCR e faca upload do PDF que contem paginas digitalizadas (somente imagem)." },
    { "@type": "HowToStep", "name": "Selecione o idioma e processe", "text": "Escolha o idioma do texto e clique em processar para iniciar o reconhecimento OCR." },
    { "@type": "HowToStep", "name": "Baixe o PDF pesquisavel", "text": "Baixe o novo PDF com camada de texto. Use Ctrl+F para confirmar que a busca funciona." }
  ]
}

export default function OCRPDFTextoPesquisavelPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / OCR PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">OCR: PDF para Texto Pesquisavel</h1>
              <p className="text-xl text-slate-300">Transforme PDFs digitalizados em documentos onde voce pode buscar, copiar e selecionar texto. Aprenda como o OCR adiciona uma camada de texto pesquisavel ao seu PDF.</p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><ScanText className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Torne seu PDF pesquisavel agora.</p>
            </div>
            <Link href="/br/scanner-ocr" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Scanner OCR <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">PDF Digitalizado vs PDF Pesquisavel</h2>
              <p className="text-slate-600 mb-4">Um PDF digitalizado e basicamente uma colecao de imagens. Cada pagina e uma foto do documento original. Voce pode ver o conteudo, mas o computador nao reconhece nenhuma letra ou palavra — tudo e pixel.</p>
              <p className="text-slate-600 mb-4">Um PDF pesquisavel mantem a mesma aparencia visual, mas contem uma camada de texto invisivel por tras das imagens. Essa camada permite buscar palavras com Ctrl+F, selecionar trechos e copiar conteudo.</p>
              <p className="text-slate-600">O OCR e o processo que cria essa camada de texto, analisando as imagens e reconhecendo cada caractere.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Converter para Texto Pesquisavel</h2>
              <div className="space-y-4">
                {[
                  { title: "Faca upload do PDF digitalizado", desc: "Acesse o Scanner OCR do PDF.it e selecione o PDF. A ferramenta detecta automaticamente quais paginas sao somente imagem." },
                  { title: "Selecione o idioma do documento", desc: "Escolha portugues, ingles ou outro idioma. O motor OCR usa dicionarios especificos de cada idioma para melhorar a precisao do reconhecimento." },
                  { title: "Processe e baixe", desc: "Clique em processar. Em poucos segundos, o PDF pesquisavel estara pronto para download com toda a camada de texto incorporada." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Beneficios do PDF Pesquisavel</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Busca instantanea.</strong> Encontre qualquer palavra em documentos de centenas de paginas usando Ctrl+F.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Copiar e colar.</strong> Selecione trechos de texto e cole em e-mails, planilhas ou outros documentos sem redigitar.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Indexacao.</strong> Sistemas de gerenciamento de documentos podem indexar o conteudo para busca futura.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Acessibilidade.</strong> Leitores de tela podem ler o conteudo para usuarios com deficiencia visual.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">5.</span><span><strong>Conversao posterior.</strong> Converta para <Link href="/br/pdf-para-texto" className="text-orange-600 hover:underline">texto simples</Link> ou <Link href="/br/pdf-para-word" className="text-orange-600 hover:underline">Word</Link> com resultados muito superiores.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Casos de Uso Comuns</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Arquivo Juridico</h3><p className="text-slate-600">Escritorios de advocacia digitalizam milhares de documentos. Com OCR, advogados podem buscar clausulas especificas, nomes de partes e datas em segundos.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Contabilidade</h3><p className="text-slate-600">Notas fiscais e recibos digitalizados se tornam pesquisaveis, facilitando a localizacao de transacoes especificas durante auditorias.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Pesquisa Academica</h3><p className="text-slate-600">Artigos e livros digitalizados podem ser pesquisados por termos especificos, citacoes e referencias bibliograficas.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Recursos do Scanner OCR do PDF.it</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Deteccao automatica de paginas somente imagem.</li>
                <li>&#10003; Suporte a dezenas de idiomas incluindo portugues.</li>
                <li>&#10003; Camada de texto invisivel que nao altera a aparencia do documento.</li>
                <li>&#10003; Processamento de arquivos ate 200MB no plano Pro ($3.99/mes).</li>
                <li>&#10003; Apos o OCR, use <Link href="/br/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> para reduzir o tamanho do arquivo.</li>
              </ul>
            </section>
          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Torne Seus PDFs Pesquisaveis</h2>
            <p className="text-slate-300 mb-6">Faca upload de um PDF digitalizado e obtenha um documento pesquisavel em segundos.</p>
            <Link href="/br/scanner-ocr" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><ScanText className="h-5 w-5" /> Scanner OCR (Pro)</Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "O Que E OCR?", href: "/br/aprender/o-que-e-ocr" },
                { title: "OCR para Documento Digitalizado", href: "/br/aprender/ocr-documento-digitalizado" },
                { title: "Dicas para Melhorar a Precisao do OCR", href: "/br/aprender/dicas-precisao-ocr" },
                { title: "OCR de PDF no Celular", href: "/br/aprender/ocr-pdf-no-celular" },
                { title: "OCR para Texto Manuscrito", href: "/br/aprender/ocr-texto-manuscrito" },
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
                { q: "O que e um PDF pesquisavel?", a: "Um PDF pesquisavel contem uma camada de texto invisivel sobre as imagens digitalizadas, permitindo buscar palavras, selecionar e copiar texto." },
                { q: "Como o OCR torna um PDF pesquisavel?", a: "O OCR analisa as imagens, reconhece letras e palavras, e adiciona uma camada de texto transparente alinhada sobre a imagem original." },
                { q: "O PDF original e alterado?", a: "Nao. A aparencia visual permanece identica. O OCR apenas adiciona uma camada de texto invisivel sem modificar as paginas originais." },
                { q: "Posso converter o PDF pesquisavel em texto puro?", a: "Sim. Apos aplicar OCR, use a ferramenta PDF para Texto do PDF.it para extrair o conteudo em texto simples." },
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

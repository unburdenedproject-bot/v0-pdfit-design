import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { ScanText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "O Que E OCR? (Reconhecimento Optico de Caracteres Explicado) | PDF.it",
  description:
    "Aprenda o que e OCR (Reconhecimento Optico de Caracteres), como funciona e por que e importante para PDFs digitalizados. Entenda como OCR converte imagens de texto em conteudo editavel e pesquisavel.",
  keywords: "o que e ocr, reconhecimento optico de caracteres, ocr explicado, como funciona ocr, ocr pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "O que significa OCR?", "acceptedAnswer": { "@type": "Answer", "text": "OCR significa Reconhecimento Optico de Caracteres. E uma tecnologia que converte imagens de texto — como documentos digitalizados, fotos ou PDFs — em texto legivel por maquina e pesquisavel." } },
    { "@type": "Question", "name": "Como funciona o OCR?", "acceptedAnswer": { "@type": "Answer", "text": "O software OCR analisa as formas, padroes e disposicao de pixels em uma imagem para identificar caracteres individuais (letras, numeros, simbolos). O OCR moderno usa aprendizado de maquina para melhorar a precisao em diferentes fontes, idiomas e layouts." } },
    { "@type": "Question", "name": "O OCR suporta varios idiomas?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. A maioria das ferramentas OCR modernas, incluindo o Scanner OCR do PDF.it, suportam dezenas de idiomas incluindo portugues, ingles, espanhol, frances, alemao e muitos outros." } },
    { "@type": "Question", "name": "O OCR e 100% preciso?", "acceptedAnswer": { "@type": "Answer", "text": "O OCR tipicamente tem 95-99% de precisao em digitalizacoes limpas de alta resolucao com fontes impressas padrao. A precisao diminui com imagens de baixa resolucao, texto manuscrito, fontes incomuns ou documentos com formatacao complexa." } },
    { "@type": "Question", "name": "Preciso instalar software para usar OCR?", "acceptedAnswer": { "@type": "Answer", "text": "Nao. O Scanner OCR do PDF.it funciona completamente no navegador. Faca upload do PDF digitalizado, selecione o idioma e baixe um PDF pesquisavel — sem instalacao necessaria." } },
    { "@type": "Question", "name": "OCR e uma funcao Pro no PDF.it?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O Scanner OCR esta disponivel para assinantes Pro e Business. Pro custa $3.99/mes e inclui conversoes ilimitadas, arquivos ate 200MB, processamento em lote e todas as ferramentas avancadas incluindo OCR." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Usar OCR em um PDF Digitalizado",
  "description": "Converta um PDF digitalizado em texto pesquisavel em 3 passos simples usando o Scanner OCR do PDF.it.",
  "step": [
    { "@type": "HowToStep", "name": "Faca upload do PDF digitalizado", "text": "Acesse a ferramenta Scanner OCR do PDF.it e faca upload do PDF digitalizado que deseja tornar pesquisavel." },
    { "@type": "HowToStep", "name": "Selecione o idioma e execute o OCR", "text": "Escolha o idioma do texto do documento e clique no botao OCR para iniciar o processamento." },
    { "@type": "HowToStep", "name": "Baixe seu PDF pesquisavel", "text": "Apos o processamento, baixe seu novo PDF pesquisavel. Agora voce pode buscar texto, copiar conteudo e selecionar palavras no documento." }
  ]
}

export default function OQueEOCRPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / OCR PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">O Que E OCR? (Reconhecimento Optico de Caracteres Explicado)</h1>
              <p className="text-xl text-slate-300">OCR e a tecnologia que converte documentos digitalizados e imagens em texto que voce pode pesquisar, copiar e editar. Aqui esta tudo o que voce precisa saber sobre como funciona e por que e importante.</p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><ScanText className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Quer testar o OCR agora? Use o Scanner OCR do PDF.it (Pro).</p>
            </div>
            <Link href="/br/scanner-ocr" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Scanner OCR <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">O Que o OCR Realmente Faz?</h2>
              <p className="text-slate-600 mb-4">OCR significa Reconhecimento Optico de Caracteres. E uma tecnologia que analisa uma imagem — uma pagina digitalizada, uma fotografia de um documento ou um PDF feito a partir de um scanner — e identifica as letras, numeros e simbolos nela.</p>
              <p className="text-slate-600 mb-4">Sem OCR, um PDF digitalizado e apenas uma foto. Voce nao pode buscar uma palavra, copiar um paragrafo ou selecionar nenhum texto. O arquivo parece um documento, mas para o computador e apenas uma imagem plana — nao diferente de uma fotografia de um por do sol.</p>
              <p className="text-slate-600">Apos o processamento OCR, uma camada de texto invisivel e colocada sobre a imagem. Agora voce pode pressionar Ctrl+F para encontrar palavras, copiar texto para outro documento ou extrair o conteudo em um <Link href="/br/pdf-para-texto" className="text-[#14D8C4] hover:underline">arquivo de texto simples</Link>.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como o OCR Funciona (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  { title: "Pre-processamento da imagem", desc: "O motor OCR primeiro limpa a imagem — ajustando contraste, removendo ruido, endireitando texto torto e convertendo para escala de cinza. Por isso a qualidade da digitalizacao e tao importante para a precisao." },
                  { title: "Reconhecimento de caracteres", desc: "O software divide a imagem em caracteres individuais e compara cada um com formas de letras conhecidas. O OCR moderno usa modelos de aprendizado de maquina treinados com milhoes de amostras de texto em diferentes fontes e idiomas." },
                  { title: "Reconstrucao do texto", desc: "Os caracteres reconhecidos sao remontados em palavras, frases e paragrafos. O motor considera o contexto — por exemplo, 'tbe' provavelmente e 'the' — para corrigir caracteres ambiguos e produzir uma saida mais limpa." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que o OCR E Importante para PDFs</h2>
              <p className="text-slate-600 mb-4">PDFs sao o formato mais comum para documentos digitalizados. Toda vez que voce digitaliza um contrato, recibo, relatorio antigo ou documento de identidade, o resultado e quase sempre um PDF. Mas esses PDFs digitalizados sao apenas imagens. Veja por que e importante executar OCR neles:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Capacidade de pesquisa.</strong> Sem OCR, voce nao pode encontrar uma palavra especifica em um contrato digitalizado de 50 paginas. Com OCR, pressione Ctrl+F e encontre instantaneamente.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Copiar e colar.</strong> Precisa de uma citacao, um numero ou um paragrafo de um documento digitalizado? OCR permite selecionar e copiar texto em vez de redigitar manualmente.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Acessibilidade.</strong> Leitores de tela nao conseguem ler PDFs so de imagem. OCR torna seus documentos acessiveis para pessoas que usam tecnologia assistiva.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Arquivamento e compliance.</strong> Muitas organizacoes exigem PDFs pesquisaveis para conformidade legal e regulatoria. OCR transforma digitalizacoes arquivadas em documentos indexados corretamente.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">5.</span><span><strong>Conversao de formato.</strong> Uma vez que um PDF tem uma camada de texto, voce pode converte-lo para <Link href="/br/pdf-para-texto" className="text-[#14D8C4] hover:underline">texto simples</Link> com resultados muito melhores.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Situacoes Comuns Onde Voce Precisa de OCR</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Contratos e Documentos Legais Digitalizados</h3><p className="text-slate-600">Escritorios de advocacia e empresas digitalizam contratos constantemente. OCR torna essas digitalizacoes pesquisaveis para que voce possa encontrar clausulas, datas ou valores especificos sem ler cada pagina manualmente.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Recibos e Registros Financeiros</h3><p className="text-slate-600">Digitalizando recibos para relatorios de despesas ou registros fiscais? OCR permite extrair valores e datas. Se tambem precisa limpar digitalizacoes feitas com celular, experimente a ferramenta <Link href="/br/limpeza-digitalizacao" className="text-[#14D8C4] hover:underline">Limpeza de Digitalizacao</Link> primeiro.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Livros Antigos, Documentos e Arquivos</h3><p className="text-slate-600">Bibliotecas e pesquisadores digitalizam documentos antigos regularmente. OCR converte essas digitalizacoes em arquivos de texto pesquisaveis. Para melhores resultados, digitalize a 300 DPI ou mais e garanta iluminacao uniforme.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Fotos de Quadros Brancos ou Notas</h3><p className="text-slate-600">Tirou uma foto de notas de reuniao em um quadro branco? Converta a imagem para PDF e execute OCR para extrair o texto. Tenha em mente que o <Link href="/br/aprender/ocr-texto-manuscrito" className="text-[#14D8C4] hover:underline">texto manuscrito</Link> e mais dificil de ler com precisao para o OCR.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Como Executar OCR no PDF.it</h2>
              <p className="text-slate-600 mb-4">O <Link href="/br/scanner-ocr" className="text-[#14D8C4] hover:underline">Scanner OCR</Link> do PDF.it e uma funcao Pro que converte PDFs digitalizados em documentos pesquisaveis. Veja o que voce recebe:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Faca upload de qualquer PDF digitalizado — a ferramenta detecta paginas somente de imagem automaticamente.</li>
                <li>&#10003; Selecione o idioma do documento para melhor precisao de reconhecimento.</li>
                <li>&#10003; Baixe um PDF pesquisavel com uma camada de texto invisivel sobre a digitalizacao original.</li>
                <li>&#10003; Processe arquivos ate 200MB com uma assinatura Pro ($3.99/mes).</li>
                <li>&#10003; Apos o OCR, use <Link href="/br/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> se o arquivo estiver grande demais para e-mail ou portais de upload.</li>
              </ul>
              <p className="text-slate-600 mt-4">O Scanner OCR esta disponivel nos planos <Link href="/br/precos" className="text-[#14D8C4] hover:underline">Pro e Business</Link>. Usuarios gratuitos podem explorar todas as outras ferramentas do PDF.it com generosos limites diarios.</p>
            </section>
          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Tornar Seus PDFs Pesquisaveis?</h2>
            <p className="text-slate-300 mb-6">Faca upload de um PDF digitalizado e deixe o Scanner OCR extrair cada palavra — para que voce possa pesquisar, copiar e editar seus documentos.</p>
            <Link href="/br/scanner-ocr" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><ScanText className="h-5 w-5" /> Testar Scanner OCR (Pro)</Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "OCR: PDF para Texto Pesquisavel", href: "/br/aprender/ocr-pdf-para-texto-pesquisavel" },
                { title: "OCR para Documento Digitalizado (Passo a Passo)", href: "/br/aprender/ocr-documento-digitalizado" },
                { title: "Dicas para Melhorar a Precisao do OCR", href: "/br/aprender/dicas-precisao-ocr" },
                { title: "OCR de PDF no Celular (iPhone e Android)", href: "/br/aprender/ocr-pdf-no-celular" },
                { title: "OCR para Texto Manuscrito", href: "/br/aprender/ocr-texto-manuscrito" },
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
                { q: "O que significa OCR?", a: "OCR significa Reconhecimento Optico de Caracteres. E uma tecnologia que converte imagens de texto — como documentos digitalizados, fotos ou PDFs — em texto legivel por maquina e pesquisavel." },
                { q: "Como funciona o OCR?", a: "O software OCR analisa as formas, padroes e disposicao de pixels em uma imagem para identificar caracteres individuais. O OCR moderno usa aprendizado de maquina para melhorar a precisao em diferentes fontes, idiomas e layouts." },
                { q: "O OCR suporta varios idiomas?", a: "Sim. A maioria das ferramentas OCR modernas, incluindo o Scanner OCR do PDF.it, suportam dezenas de idiomas incluindo portugues, ingles, espanhol, frances, alemao e muitos outros." },
                { q: "O OCR e 100% preciso?", a: "O OCR tipicamente tem 95-99% de precisao em digitalizacoes limpas de alta resolucao com fontes impressas padrao. A precisao diminui com imagens de baixa resolucao, texto manuscrito ou fontes incomuns." },
                { q: "Preciso instalar software para usar OCR?", a: "Nao. O Scanner OCR do PDF.it funciona completamente no navegador. Faca upload do PDF digitalizado, selecione o idioma e baixe um PDF pesquisavel — sem instalacao necessaria." },
                { q: "OCR e uma funcao Pro no PDF.it?", a: "Sim. O Scanner OCR esta disponivel para assinantes Pro e Business. Pro custa $3.99/mes e inclui conversoes ilimitadas, arquivos ate 200MB, processamento em lote e todas as ferramentas avancadas." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}">
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

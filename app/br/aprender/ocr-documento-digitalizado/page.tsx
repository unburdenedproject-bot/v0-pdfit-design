import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { ScanText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "OCR para Documento Digitalizado (Passo a Passo) | PDF.it",
  description:
    "Aprenda como aplicar OCR em documentos digitalizados para torna-los pesquisaveis e editaveis. Guia passo a passo com dicas para melhores resultados.",
  keywords: "ocr documento digitalizado, ocr pdf digitalizado, como fazer ocr, documento digitalizado pesquisavel",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "O que e OCR em documento digitalizado?", "acceptedAnswer": { "@type": "Answer", "text": "OCR (Reconhecimento Optico de Caracteres) e o processo de converter a imagem de um documento digitalizado em texto pesquisavel e editavel, permitindo buscar palavras, copiar trechos e indexar o conteudo." } },
    { "@type": "Question", "name": "Meu documento digitalizado precisa estar em PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, para usar o Scanner OCR do PDF.it, o documento deve estar em formato PDF. Se voce tem uma imagem, primeiro converta para PDF usando as ferramentas JPG para PDF ou PNG para PDF." } },
    { "@type": "Question", "name": "Qual resolucao e ideal para OCR?", "acceptedAnswer": { "@type": "Answer", "text": "A resolucao ideal e 300 DPI ou superior. Digitalizacoes abaixo de 200 DPI podem resultar em menor precisao do OCR." } },
    { "@type": "Question", "name": "O OCR funciona em documentos coloridos?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O motor OCR converte internamente para escala de cinza durante o processamento. Documentos com bom contraste entre texto e fundo produzem os melhores resultados." } },
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Aplicar OCR em Documento Digitalizado",
  "description": "Converta um documento digitalizado em texto pesquisavel usando o Scanner OCR do PDF.it.",
  "step": [
    { "@type": "HowToStep", "name": "Prepare o documento", "text": "Certifique-se de que a digitalizacao esta em formato PDF com pelo menos 300 DPI de resolucao para melhores resultados." },
    { "@type": "HowToStep", "name": "Faca upload e selecione o idioma", "text": "Acesse o Scanner OCR do PDF.it, faca upload do PDF e selecione o idioma principal do documento." },
    { "@type": "HowToStep", "name": "Execute o OCR e baixe", "text": "Clique em processar e baixe o PDF pesquisavel com a camada de texto invisivel sobre a digitalizacao original." }
  ]
}

export default function OCRDocumentoDigitalizadoPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">OCR para Documento Digitalizado</h1>
              <p className="text-xl text-slate-300">Transforme documentos digitalizados em texto pesquisavel e editavel. Guia completo com passo a passo e dicas para obter os melhores resultados com OCR.</p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><ScanText className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Aplique OCR no seu documento agora.</p>
            </div>
            <Link href="/br/scanner-ocr" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Scanner OCR <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Aplicar OCR em Documentos Digitalizados?</h2>
              <p className="text-slate-600 mb-4">Quando voce digitaliza um documento — contrato, nota fiscal, certidao, relatorio — o resultado e um PDF que e basicamente uma imagem. Voce nao pode buscar palavras, copiar trechos nem selecionar texto.</p>
              <p className="text-slate-600 mb-4">O OCR resolve isso adicionando uma camada de texto invisivel sobre a imagem, transformando o PDF em um documento pesquisavel e copiavel sem alterar a aparencia original.</p>
              <p className="text-slate-600">Isso e essencial para arquivamento digital, compliance, pesquisa de informacoes em grandes volumes de documentos e acessibilidade.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Passo a Passo: OCR no Documento Digitalizado</h2>
              <div className="space-y-4">
                {[
                  { title: "Prepare a digitalizacao", desc: "Digitalize o documento a 300 DPI ou mais, em cores ou preto e branco. Certifique-se de que o texto esta nitido, sem sombras e com o documento alinhado." },
                  { title: "Faca upload no PDF.it", desc: "Acesse o Scanner OCR do PDF.it e faca upload do PDF digitalizado. A ferramenta aceita arquivos ate 200MB no plano Pro." },
                  { title: "Selecione o idioma", desc: "Escolha o idioma principal do documento (portugues, ingles, etc.). Isso ajuda o motor OCR a reconhecer caracteres com maior precisao." },
                  { title: "Execute o OCR", desc: "Clique em processar. O motor OCR vai analisar cada pagina, identificar o texto e adicionar a camada pesquisavel." },
                  { title: "Baixe e verifique", desc: "Baixe o PDF pesquisavel. Abra o documento e use Ctrl+F para verificar se o texto foi reconhecido corretamente." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Melhores Resultados</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Resolucao Minima de 300 DPI</h3><p className="text-slate-600">Digitalizacoes abaixo de 200 DPI resultam em texto borrado que o OCR tem dificuldade de reconhecer. 300 DPI e o padrao recomendado; 600 DPI e ideal para documentos com texto pequeno.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Bom Contraste</h3><p className="text-slate-600">Texto escuro em fundo claro produz os melhores resultados. Evite digitalizacoes com sombras, manchas ou fundo colorido escuro.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Documento Alinhado</h3><p className="text-slate-600">Paginas tortas reduzem a precisao do OCR. Se o documento ficou inclinado na digitalizacao, muitos scanners oferecem correcao automatica de alinhamento.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Limpe a Digitalizacao</h3><p className="text-slate-600">Se digitalizou com celular, use a ferramenta <Link href="/br/limpeza-digitalizacao" className="text-[#14D8C4] hover:underline">Limpeza de Digitalizacao</Link> antes de aplicar OCR para melhorar contraste e remover sombras.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tipos de Documentos Ideais para OCR</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Contratos e documentos legais:</strong> Torne clausulas e termos pesquisaveis para revisao rapida.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Notas fiscais e recibos:</strong> Extraia valores, datas e numeros de nota para contabilidade.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Documentos de identidade:</strong> Digitalize RG, CPF, CNH e torne os dados pesquisaveis.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Livros e artigos:</strong> Converta material impresso em texto pesquisavel para pesquisa academica.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Apos o OCR</h2>
              <p className="text-slate-600 mb-4">Com o documento pesquisavel, voce pode:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Buscar palavras-chave com Ctrl+F em qualquer leitor de PDF.</li>
                <li>&#10003; Copiar trechos de texto para outros documentos.</li>
                <li>&#10003; Converter o PDF para <Link href="/br/pdf-para-texto" className="text-[#14D8C4] hover:underline">texto simples</Link> com resultados muito superiores.</li>
                <li>&#10003; Usar <Link href="/br/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> para reduzir o tamanho antes de enviar ou arquivar.</li>
              </ul>
            </section>
          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Torne Seus Documentos Pesquisaveis</h2>
            <p className="text-slate-300 mb-6">Faca upload de um PDF digitalizado e aplique OCR em segundos.</p>
            <Link href="/br/scanner-ocr" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><ScanText className="h-5 w-5" /> Scanner OCR (Pro)</Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "O Que E OCR? (Reconhecimento Optico de Caracteres)", href: "/br/aprender/o-que-e-ocr" },
                { title: "OCR: PDF para Texto Pesquisavel", href: "/br/aprender/ocr-pdf-para-texto-pesquisavel" },
                { title: "Dicas para Melhorar a Precisao do OCR", href: "/br/aprender/dicas-precisao-ocr" },
                { title: "OCR de PDF no Celular", href: "/br/aprender/ocr-pdf-no-celular" },
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
                { q: "O que e OCR em documento digitalizado?", a: "OCR (Reconhecimento Optico de Caracteres) e o processo de converter a imagem de um documento digitalizado em texto pesquisavel e editavel." },
                { q: "Meu documento digitalizado precisa estar em PDF?", a: "Sim, para usar o Scanner OCR do PDF.it. Se voce tem uma imagem, primeiro converta para PDF usando as ferramentas JPG para PDF ou PNG para PDF." },
                { q: "Qual resolucao e ideal para OCR?", a: "A resolucao ideal e 300 DPI ou superior. Digitalizacoes abaixo de 200 DPI podem resultar em menor precisao." },
                { q: "O OCR funciona em documentos coloridos?", a: "Sim. O motor OCR converte internamente para escala de cinza. Documentos com bom contraste entre texto e fundo produzem os melhores resultados." },
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

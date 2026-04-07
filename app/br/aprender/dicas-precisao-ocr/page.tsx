import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { ScanText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Dicas para Melhorar a Precisao do OCR | PDF.it",
  description:
    "Melhore a precisao do OCR com estas dicas praticas: resolucao ideal, contraste, alinhamento, limpeza de imagem e escolha de idioma para reconhecimento perfeito.",
  keywords: "dicas precisao ocr, melhorar ocr, ocr precisao, qualidade ocr, ocr melhores resultados",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Qual a resolucao ideal para OCR?", "acceptedAnswer": { "@type": "Answer", "text": "300 DPI e o padrao recomendado para a maioria dos documentos. Para texto pequeno ou documentos detalhados, 600 DPI pode melhorar a precisao significativamente." } },
    { "@type": "Question", "name": "Digitalizar em cores ou preto e branco?", "acceptedAnswer": { "@type": "Answer", "text": "Para documentos de texto puro, preto e branco (ou escala de cinza) geralmente funciona melhor e gera arquivos menores. Para documentos com graficos coloridos, digitalize em cores." } },
    { "@type": "Question", "name": "O que mais afeta a precisao do OCR?", "acceptedAnswer": { "@type": "Answer", "text": "Os fatores mais importantes sao: resolucao da digitalizacao, contraste entre texto e fundo, alinhamento do documento, qualidade da fonte original e selecao correta do idioma." } },
    { "@type": "Question", "name": "Como lidar com documentos antigos ou desbotados?", "acceptedAnswer": { "@type": "Answer", "text": "Use a ferramenta Limpeza de Digitalizacao para melhorar o contraste. Digitalize em resolucao alta (600 DPI) e selecione o idioma correto para compensar caracteres ambiguos." } },
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Obter Maxima Precisao no OCR",
  "description": "Siga estas dicas para maximizar a precisao do reconhecimento OCR nos seus documentos.",
  "step": [
    { "@type": "HowToStep", "name": "Digitalize em alta resolucao", "text": "Use 300 DPI como minimo. Para textos pequenos, use 600 DPI." },
    { "@type": "HowToStep", "name": "Otimize a imagem", "text": "Garanta bom contraste, remova sombras e alinhe o documento corretamente." },
    { "@type": "HowToStep", "name": "Selecione o idioma correto", "text": "Escolha o idioma principal do documento para que o motor OCR use o dicionario adequado." }
  ]
}

export default function DicasPrecisaoOCRPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Dicas para Melhorar a Precisao do OCR</h1>
              <p className="text-xl text-slate-300">Obtenha os melhores resultados de reconhecimento de texto com estas dicas praticas. Da digitalizacao ao processamento, cada detalhe faz diferenca na precisao.</p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><ScanText className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Aplique OCR com maxima precisao.</p>
            </div>
            <Link href="/br/scanner-ocr" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Scanner OCR <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">A Qualidade da Entrada Determina a Saida</h2>
              <p className="text-slate-600 mb-4">A regra de ouro do OCR: a qualidade do resultado e diretamente proporcional a qualidade da imagem de entrada. Uma digitalizacao nitida e bem contrastada produz texto quase perfeito. Uma imagem borrada e escura gera erros em cascata.</p>
              <p className="text-slate-600">Cada dica abaixo melhora a qualidade da entrada que o motor OCR recebe, resultando em reconhecimento mais preciso.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Dica 1: Resolucao da Digitalizacao</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">300 DPI — O Padrao</h3>
                  <p className="text-slate-600 text-sm">Para a maioria dos documentos com texto de tamanho normal (10-12pt), 300 DPI e suficiente e oferece excelente precisao com tamanho de arquivo razoavel.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">600 DPI — Para Textos Pequenos</h3>
                  <p className="text-slate-600 text-sm">Documentos com letras miudas, notas de rodape ou tabelas detalhadas se beneficiam de 600 DPI. O arquivo sera maior, mas a precisao melhora.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">Abaixo de 200 DPI — Evite</h3>
                  <p className="text-slate-600 text-sm">Digitalizacoes abaixo de 200 DPI resultam em caracteres borrados que o OCR tem grande dificuldade de reconhecer. Se possivel, redigitalize o documento.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dica 2: Contraste e Iluminacao</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Texto escuro em fundo claro</strong> e a combinacao ideal. Evite papel colorido escuro ou texto em cor clara.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Iluminacao uniforme</strong> ao digitalizar com celular. Sombras no documento prejudicam o reconhecimento.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Limpeza de Digitalizacao</strong> do PDF.it pode <Link href="/br/limpeza-digitalizacao" className="text-[#14D8C4] hover:underline">melhorar o contraste automaticamente</Link> se a digitalizacao ficou escura ou com sombras.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dica 3: Alinhamento do Documento</h2>
              <p className="text-slate-600 mb-4">Paginas tortas confundem o motor OCR. O texto deve estar o mais horizontal possivel. Se a digitalizacao ficou inclinada:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Muitos scanners oferecem correcao automatica de alinhamento (deskew).</li>
                <li>&#10003; Se digitalizou com celular, tente novamente mantendo o celular paralelo ao documento.</li>
                <li>&#10003; Uma inclinacao de ate 5 graus geralmente e tolerada pelo OCR, mas acima disso a precisao cai rapidamente.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dica 4: Selecao de Idioma</h2>
              <p className="text-slate-600 mb-4">Sempre selecione o idioma correto do documento antes de executar o OCR. O motor usa dicionarios especificos de cada idioma para:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Corrigir caracteres ambiguos com base no contexto linguistico.</li>
                <li>&#10003; Reconhecer caracteres especiais (acentos, cedilhas, til no portugues).</li>
                <li>&#10003; Sugerir palavras provaveis quando um caractere nao e 100% claro.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dica 5: Prepare o Documento</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Remova Grampos e Dobras</h3><p className="text-slate-600">Grampos criam sombras e dobras distorcem o texto. Remova-os antes de digitalizar para uma imagem mais limpa.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Vidro do Scanner Limpo</h3><p className="text-slate-600">Poeira e manchas no vidro do scanner aparecem como ruido na digitalizacao e podem ser confundidas com caracteres pelo OCR.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Documentos Antigos ou Desbotados</h3><p className="text-slate-600">Use 600 DPI, digitalize em escala de cinza e aplique <Link href="/br/limpeza-digitalizacao" className="text-[#14D8C4] hover:underline">Limpeza de Digitalizacao</Link> para maximizar o contraste antes do OCR.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Checklist de Precisao OCR</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#9745; Resolucao de 300 DPI ou mais.</li>
                <li>&#9745; Bom contraste entre texto e fundo.</li>
                <li>&#9745; Documento alinhado (sem inclinacao).</li>
                <li>&#9745; Idioma correto selecionado.</li>
                <li>&#9745; Sem sombras, manchas ou dobras.</li>
                <li>&#9745; Limpeza de digitalizacao aplicada (se necessario).</li>
              </ul>
            </section>
          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Aplique OCR com Maxima Precisao</h2>
            <p className="text-slate-300 mb-6">Use estas dicas e obtenha resultados de reconhecimento quase perfeitos.</p>
            <Link href="/br/scanner-ocr" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><ScanText className="h-5 w-5" /> Scanner OCR (Pro)</Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "O Que E OCR?", href: "/br/aprender/o-que-e-ocr" },
                { title: "OCR para Documento Digitalizado", href: "/br/aprender/ocr-documento-digitalizado" },
                { title: "OCR: PDF para Texto Pesquisavel", href: "/br/aprender/ocr-pdf-para-texto-pesquisavel" },
                { title: "OCR para Texto Manuscrito", href: "/br/aprender/ocr-texto-manuscrito" },
                { title: "OCR de PDF no Celular", href: "/br/aprender/ocr-pdf-no-celular" },
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
                { q: "Qual a resolucao ideal para OCR?", a: "300 DPI e o padrao recomendado. Para texto pequeno ou documentos detalhados, 600 DPI pode melhorar a precisao." },
                { q: "Digitalizar em cores ou preto e branco?", a: "Para documentos de texto puro, preto e branco geralmente funciona melhor. Para documentos com graficos, digitalize em cores." },
                { q: "O que mais afeta a precisao do OCR?", a: "Resolucao, contraste, alinhamento, qualidade da fonte original e selecao correta do idioma." },
                { q: "Como lidar com documentos antigos?", a: "Use Limpeza de Digitalizacao para melhorar contraste. Digitalize em 600 DPI e selecione o idioma correto." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
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

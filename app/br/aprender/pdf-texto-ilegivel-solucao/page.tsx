import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { ScanIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "PDF com Texto Ilegível — Solução (Como Recuperar o Texto) | PDF.it",
  description:
    "Seu PDF mostra texto ilegível, caracteres estranhos ou símbolos? Descubra as causas e como recuperar o texto usando OCR e outras ferramentas.",
  keywords: "pdf texto ilegível, pdf caracteres estranhos, pdf texto quebrado, recuperar texto pdf, pdf ilegível solução",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Por que meu PDF mostra caracteres estranhos?", "acceptedAnswer": { "@type": "Answer", "text": "Isso geralmente acontece quando as fontes do PDF não estão incorporadas, quando o PDF foi criado com codificação incompatível, ou quando o texto foi copiado de uma imagem sem OCR adequado." } },
    { "@type": "Question", "name": "Como recuperar texto ilegível de um PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Use o Scanner OCR do PDF.it. Mesmo quando o texto parece ilegível no PDF, o OCR pode reconhecer os caracteres visuais e extrair o texto corretamente." } },
    { "@type": "Question", "name": "O que causa texto quebrado em PDF?", "acceptedAnswer": { "@type": "Answer", "text": "As causas mais comuns são: fontes não incorporadas, codificação de caracteres incorreta, PDF corrompido ou digitalização de baixa qualidade." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Resolver Texto Ilegível em PDF",
  "description": "Recupere texto de PDFs com caracteres estranhos ou ilegíveis.",
  "step": [
    { "@type": "HowToStep", "name": "Identifique o problema", "text": "Verifique se o texto é selecionável (problema de fonte) ou se é imagem (precisa de OCR)." },
    { "@type": "HowToStep", "name": "Use OCR", "text": "Envie o PDF para o Scanner OCR do PDF.it para reconhecer o texto visual." },
    { "@type": "HowToStep", "name": "Extraia o texto", "text": "O OCR gera texto legível que você pode copiar ou baixar." }
  ]
}

export default function PdfTextoIlegivelSolucaoPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF para Texto</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF com Texto Ilegível — Solução</h1>
              <p className="text-xl text-slate-300">
                Abriu um PDF e o texto aparece como símbolos estranhos, caracteres quebrados ou é completamente ilegível? Veja as causas e como resolver.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <ScanIcon className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">O OCR pode recuperar texto de PDFs com problemas.</p>
            </div>
            <Link href="/br/scanner-ocr" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Scanner OCR <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que o Texto Fica Ilegível?</h2>
              <p className="text-slate-600 mb-4">Existem 4 causas principais para texto ilegível em PDFs:</p>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">1. Fontes Não Incorporadas</h3>
                  <p className="text-slate-600 text-sm">O PDF usa uma fonte que não está instalada no seu computador e que não foi incorporada no arquivo. O resultado são caracteres estranhos ou quadradinhos.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">2. Codificação Incorreta</h3>
                  <p className="text-slate-600 text-sm">O PDF foi criado com uma codificação de caracteres incompatível. Comum em PDFs antigos ou gerados por sistemas legados. Acentos e caracteres especiais ficam quebrados.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">3. PDF Corrompido</h3>
                  <p className="text-slate-600 text-sm">O arquivo foi danificado durante download, transferência ou armazenamento. Partes do texto podem estar ilegíveis ou o PDF pode não abrir corretamente.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">4. Digitalização de Baixa Qualidade</h3>
                  <p className="text-slate-600 text-sm">O documento foi escaneado em resolução muito baixa, tornando o texto visualmente ilegível. Melhorar a imagem antes do OCR pode ajudar.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Resolver (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  { title: "Tente outro leitor de PDF", desc: "Às vezes o problema é do leitor. Tente abrir o PDF no navegador (Chrome ou Edge) ou baixe o Adobe Acrobat Reader. Se o texto aparecer corretamente, era problema do leitor." },
                  { title: "Use OCR para reconhecer o texto", desc: "Se o texto continua ilegível, envie o PDF para o Scanner OCR do PDF.it. O OCR analisa a aparência visual dos caracteres e extrai o texto, ignorando problemas de fontes e codificação." },
                  { title: "Melhore a imagem se necessário", desc: "Se o PDF é escaneado e a qualidade é ruim, use Limpeza de Scan primeiro para melhorar o contraste e nitidez, depois aplique OCR." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Quando o OCR é a Melhor Solução</h2>
              <p className="text-slate-600 mb-4">O OCR funciona bem quando:</p>
              <ul className="space-y-2 text-slate-700">
                <li>- O texto é visualmente legível na tela, mas não pode ser selecionado/copiado</li>
                <li>- Copiar o texto gera caracteres estranhos ou símbolos</li>
                <li>- O PDF foi escaneado e você precisa do texto</li>
                <li>- As fontes do PDF não estão incorporadas</li>
              </ul>
              <p className="text-slate-600 mt-4">O <Link href="/br/scanner-ocr" className="text-[#14D8C4] hover:underline">Scanner OCR</Link> analisa a aparência visual do texto, então não depende de fontes ou codificação interna do PDF.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Prevenção: Como Evitar PDFs com Texto Ilegível</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Incorpore as Fontes</h3>
                  <p className="text-slate-600">Ao criar PDFs, sempre incorpore as fontes. No Word, vá em Opções &gt; Salvar e marque "Incorporar fontes no arquivo".</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use <Link href="/br/achatar-pdf" className="text-[#14D8C4] hover:underline">Achatar PDF</Link></h3>
                  <p className="text-slate-600">Achatar o PDF converte texto e elementos em uma versão fixa que aparece igual em qualquer leitor.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Escaneie em Alta Resolução</h3>
                  <p className="text-slate-600">Ao digitalizar documentos, use pelo menos 200-300 DPI para garantir que o texto fique legível.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Recupere Texto de PDF Ilegível</h2>
            <p className="text-slate-300 mb-6">Use OCR para extrair texto mesmo de PDFs com problemas de fontes ou codificação.</p>
            <Link href="/br/scanner-ocr" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
              <ScanIcon className="h-5 w-5" /> Scanner OCR
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Converter PDF Digitalizado para Texto (OCR)", href: "/br/aprender/converter-pdf-digitalizado-para-texto" },
                { title: "Como Converter PDF para Texto Online", href: "/br/aprender/converter-pdf-para-texto" },
                { title: "Copiar Texto de PDF para Notas", href: "/br/aprender/copiar-texto-de-pdf-para-notas" },
                { title: "Extrair Texto de PDF no Celular", href: "/br/aprender/extrair-texto-de-pdf-no-celular" },
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
                { q: "Por que meu PDF mostra caracteres estranhos?", a: "Isso acontece quando as fontes não estão incorporadas, a codificação é incompatível ou o PDF foi corrompido. Use OCR para extrair o texto visualmente." },
                { q: "Como recuperar texto ilegível de um PDF?", a: "Use o Scanner OCR do PDF.it. O OCR reconhece os caracteres visuais e extrai o texto corretamente, ignorando problemas internos do PDF." },
                { q: "O que causa texto quebrado em PDF?", a: "Fontes não incorporadas, codificação incorreta, PDF corrompido ou digitalização de baixa qualidade são as causas mais comuns." },
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

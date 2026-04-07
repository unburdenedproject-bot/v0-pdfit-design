import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { ScanIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Converter PDF Digitalizado para Texto (OCR Online) | PDF.it",
  description:
    "Aprenda como extrair texto de PDFs digitalizados usando OCR. Converta documentos escaneados em texto editável — online e sem software.",
  keywords: "pdf digitalizado para texto, ocr pdf online, extrair texto de pdf escaneado, reconhecimento de texto pdf, ocr online grátis",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "O que é OCR?", "acceptedAnswer": { "@type": "Answer", "text": "OCR (Reconhecimento Óptico de Caracteres) é uma tecnologia que reconhece texto em imagens. Permite extrair texto de PDFs digitalizados, fotos de documentos e capturas de tela." } },
    { "@type": "Question", "name": "O OCR funciona com qualquer PDF digitalizado?", "acceptedAnswer": { "@type": "Answer", "text": "O OCR funciona melhor com digitalizações de boa qualidade e texto claro. Documentos muito borrados, com baixa resolução ou com fontes muito pequenas podem gerar resultados imprecisos." } },
    { "@type": "Question", "name": "O OCR reconhece português?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O Scanner OCR do PDF.it reconhece texto em português, inglês, espanhol e dezenas de outros idiomas automaticamente." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Converter PDF Digitalizado para Texto",
  "description": "Use OCR para extrair texto de PDFs digitalizados em 3 passos.",
  "step": [
    { "@type": "HowToStep", "name": "Envie o PDF digitalizado", "text": "Acesse o Scanner OCR do PDF.it e envie o PDF digitalizado." },
    { "@type": "HowToStep", "name": "Processe com OCR", "text": "O OCR analisa as imagens e reconhece o texto automaticamente." },
    { "@type": "HowToStep", "name": "Baixe o texto", "text": "Baixe o texto extraído como arquivo TXT ou copie diretamente." }
  ]
}

export default function ConverterPdfDigitalizadoParaTextoPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Converter PDF Digitalizado para Texto (OCR Online)</h1>
              <p className="text-xl text-slate-300">
                Seu PDF foi escaneado e não consegue copiar o texto? Veja como usar OCR para extrair texto de documentos digitalizados — online e sem instalar nada.
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
              <p className="text-slate-700 font-semibold">Extraia texto de PDF digitalizado com OCR.</p>
            </div>
            <Link href="/br/scanner-ocr" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Scanner OCR <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">O Que é PDF Digitalizado?</h2>
              <p className="text-slate-600 mb-4">Um PDF digitalizado é criado quando você escaneia um documento físico. O resultado é basicamente uma imagem do documento — o texto não é selecionável nem copiável. Diferente de um PDF criado no Word, onde o texto é real.</p>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">Como saber se seu PDF é digitalizado?</h3>
                  <p className="text-slate-600 text-sm">Abra o PDF e tente selecionar texto com o mouse. Se não conseguir selecionar nada, é um PDF digitalizado (imagem). Neste caso, você precisa de OCR.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Extrair Texto com OCR (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  { title: "Envie o PDF digitalizado", desc: "Acesse o Scanner OCR do PDF.it e envie seu PDF escaneado. A ferramenta aceita PDFs de qualquer tamanho de digitalização." },
                  { title: "O OCR processa automaticamente", desc: "A tecnologia OCR analisa cada página, reconhece os caracteres e converte as imagens em texto editável. O processo leva alguns segundos." },
                  { title: "Baixe ou copie o texto", desc: "O texto extraído está pronto. Baixe como arquivo TXT ou copie diretamente para usar em documentos, emails ou planilhas." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Melhores Resultados com OCR</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Qualidade da Digitalização Importa</h3>
                  <p className="text-slate-600">Quanto melhor a qualidade do escaneamento, melhor o resultado do OCR. Digitalize em 200-300 DPI para melhores resultados.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Texto Claro e Legível</h3>
                  <p className="text-slate-600">OCR funciona melhor com texto impresso claro. Textos manuscritos, fontes decorativas ou texto muito pequeno podem gerar erros.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Revise o Resultado</h3>
                  <p className="text-slate-600">Sempre revise o texto extraído por OCR. Mesmo a melhor tecnologia pode cometer erros com caracteres semelhantes (0/O, l/1, etc.).</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Melhore a Imagem Antes</h3>
                  <p className="text-slate-600">Se o PDF está escuro ou com baixo contraste, use <Link href="/br/limpeza-digitalizacao" className="text-[#14D8C4] hover:underline">Limpeza de Scan</Link> para melhorar a imagem antes de aplicar OCR.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">PDF com Texto vs PDF Digitalizado: Qual Ferramenta Usar?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead><tr className="bg-slate-900 text-white"><th className="text-left py-3 px-4 font-bold">Tipo de PDF</th><th className="text-left py-3 px-4 font-bold">Ferramenta</th><th className="text-left py-3 px-4 font-bold">Resultado</th></tr></thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200"><td className="py-3 px-4">Texto selecionável</td><td className="py-3 px-4 font-semibold"><Link href="/br/pdf-para-texto" className="text-[#14D8C4] hover:underline">PDF para Texto</Link></td><td className="py-3 px-4">Extração rápida e precisa</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4">Digitalizado (imagem)</td><td className="py-3 px-4 font-semibold"><Link href="/br/scanner-ocr" className="text-[#14D8C4] hover:underline">Scanner OCR</Link></td><td className="py-3 px-4">Reconhecimento por IA</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Extraia Texto de PDF Digitalizado</h2>
            <p className="text-slate-300 mb-6">Use OCR para transformar documentos escaneados em texto editável.</p>
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
                { title: "Como Converter PDF para Texto Online", href: "/br/aprender/converter-pdf-para-texto" },
                { title: "PDF com Texto Ilegível — Solução", href: "/br/aprender/pdf-texto-ilegivel-solucao" },
                { title: "Extrair Texto de PDF no Celular", href: "/br/aprender/extrair-texto-de-pdf-no-celular" },
                { title: "Copiar Texto de PDF para Notas", href: "/br/aprender/copiar-texto-de-pdf-para-notas" },
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
                { q: "O que é OCR?", a: "OCR (Reconhecimento Óptico de Caracteres) é uma tecnologia que reconhece texto em imagens. Permite extrair texto de PDFs digitalizados, fotos e capturas de tela." },
                { q: "O OCR funciona com qualquer PDF digitalizado?", a: "Funciona melhor com digitalizações de boa qualidade e texto claro. Documentos muito borrados ou com fontes muito pequenas podem gerar resultados imprecisos." },
                { q: "O OCR reconhece português?", a: "Sim. O Scanner OCR do PDF.it reconhece texto em português, inglês, espanhol e dezenas de outros idiomas automaticamente." },
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

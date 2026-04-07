import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { FileTextIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Copiar Texto de PDF para Notas (iPhone, Android, PC) | PDF.it",
  description:
    "Aprenda como copiar texto de um PDF para o app Notas do iPhone, Google Keep, OneNote ou qualquer editor de texto. Métodos para celular e computador.",
  keywords: "copiar texto de pdf, pdf para notas, copiar texto pdf iphone, extrair texto pdf para notas, pdf para google keep",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Por que não consigo copiar texto do PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Se não consegue selecionar texto no PDF, provavelmente é um PDF digitalizado (imagem) ou está protegido contra cópia. Use o PDF.it para extrair o texto automaticamente." } },
    { "@type": "Question", "name": "Como copiar texto de PDF para Notas no iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Use a ferramenta PDF para Texto do PDF.it no Safari, converta o PDF, copie o texto extraído e cole no app Notas. Funciona sem instalar apps." } },
    { "@type": "Question", "name": "Funciona com PDF protegido?", "acceptedAnswer": { "@type": "Answer", "text": "Se o PDF está protegido contra cópia, a ferramenta PDF para Texto pode conseguir extrair o conteúdo. Para PDFs com senha, use Desbloquear PDF primeiro." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Copiar Texto de PDF para Notas",
  "description": "Extraia texto de qualquer PDF e copie para seu app de notas favorito.",
  "step": [
    { "@type": "HowToStep", "name": "Converta o PDF para texto", "text": "Use a ferramenta PDF para Texto do PDF.it para extrair o conteúdo do PDF." },
    { "@type": "HowToStep", "name": "Copie o texto", "text": "Selecione e copie o texto extraído (Ctrl+C no PC, ou toque longo no celular)." },
    { "@type": "HowToStep", "name": "Cole nas suas notas", "text": "Abra seu app de notas e cole o texto (Ctrl+V no PC, ou Cole no celular)." }
  ]
}

export default function CopiarTextoDePdfParaNotasPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF para Texto</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Copiar Texto de PDF para Notas</h1>
              <p className="text-xl text-slate-300">
                Precisa copiar texto de um PDF para o app Notas, Google Keep ou OneNote? Veja como fazer em qualquer dispositivo — mesmo quando o PDF não permite copiar.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <FileTextIcon className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Extraia o texto e copie para qualquer lugar.</p>
            </div>
            <Link href="/br/pdf-para-texto" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Converter PDF para Texto <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Não Consigo Copiar Texto do PDF?</h2>
              <p className="text-slate-600 mb-4">Existem 3 motivos comuns:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>PDF digitalizado.</strong> O documento foi escaneado e o texto é na verdade uma imagem. Use <Link href="/br/scanner-ocr" className="text-[#14D8C4] hover:underline">Scanner OCR</Link> para reconhecer o texto.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>PDF protegido.</strong> O autor bloqueou a cópia de texto. Use <Link href="/br/desbloquear-pdf" className="text-[#14D8C4] hover:underline">Desbloquear PDF</Link> se tiver permissão para acessar o conteúdo.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>App do celular limitado.</strong> Alguns leitores de PDF no celular não permitem selecionar texto facilmente. Use o PDF.it para extrair tudo de uma vez.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Copiar Texto de PDF para Notas</h2>
              <div className="space-y-4">
                {[
                  { title: "Acesse o PDF.it", desc: "Abra o navegador (Safari no iPhone, Chrome no Android ou PC) e vá para a ferramenta PDF para Texto do PDF.it." },
                  { title: "Envie o PDF e converta", desc: "Envie seu PDF e clique em Converter. O texto será extraído em segundos e exibido na tela." },
                  { title: "Copie o texto", desc: "Selecione o texto extraído e copie. No celular: toque longo > Selecionar Tudo > Copiar. No PC: Ctrl+A > Ctrl+C." },
                  { title: "Cole no app de notas", desc: "Abra o Notas (iPhone), Google Keep (Android), OneNote ou qualquer editor e cole o texto. No celular: toque longo > Colar. No PC: Ctrl+V." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas por Dispositivo</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">iPhone (Notas)</h3>
                  <p className="text-slate-600">Use o Safari para acessar o PDF.it. Após converter, toque longo no texto, selecione tudo e copie. Abra o Notas e cole. O texto fica sincronizado via iCloud.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Android (Google Keep / Samsung Notes)</h3>
                  <p className="text-slate-600">Use o Chrome para acessar o PDF.it. Copie o texto extraído e cole no Google Keep, Samsung Notes ou qualquer app de notas.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">PC / Mac (OneNote / Notion)</h3>
                  <p className="text-slate-600">No computador, você também pode baixar o arquivo TXT e abrir diretamente no editor. Ou copie e cole no OneNote, Notion, Google Docs ou qualquer ferramenta.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Extraia Texto de Qualquer PDF</h2>
            <p className="text-slate-300 mb-6">Converta o PDF para texto e copie para suas notas em segundos.</p>
            <Link href="/br/pdf-para-texto" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
              <FileTextIcon className="h-5 w-5" /> Converter PDF para Texto
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Converter PDF para Texto Online", href: "/br/aprender/converter-pdf-para-texto" },
                { title: "Extrair Texto de PDF no Celular", href: "/br/aprender/extrair-texto-de-pdf-no-celular" },
                { title: "Converter PDF Digitalizado para Texto (OCR)", href: "/br/aprender/converter-pdf-digitalizado-para-texto" },
                { title: "PDF com Texto Ilegível — Solução", href: "/br/aprender/pdf-texto-ilegivel-solucao" },
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
                { q: "Por que não consigo copiar texto do PDF?", a: "Provavelmente é um PDF digitalizado (imagem) ou protegido contra cópia. Use o PDF.it para extrair o texto automaticamente." },
                { q: "Como copiar texto de PDF para Notas no iPhone?", a: "Use a ferramenta PDF para Texto do PDF.it no Safari, converta o PDF, copie o texto extraído e cole no app Notas." },
                { q: "Funciona com PDF protegido?", a: "Se o PDF está protegido contra cópia, a ferramenta PDF para Texto pode conseguir extrair o conteúdo. Para PDFs com senha, use Desbloquear PDF primeiro." },
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

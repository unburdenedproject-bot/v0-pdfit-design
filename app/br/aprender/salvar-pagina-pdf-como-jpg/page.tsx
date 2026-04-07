import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { ImageIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Salvar uma Página do PDF como JPG (Windows, Mac, Celular) | PDF.it",
  description:
    "Aprenda como salvar uma página específica do PDF como imagem JPG em qualquer dispositivo. Guia rápido para Windows, Mac e celular.",
  keywords: "salvar pagina pdf como jpg, extrair pagina pdf como imagem, pdf pagina para jpg, converter uma pagina pdf para jpg",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Como salvar apenas uma página do PDF como JPG?", "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF para o PDF.it, selecione a página que deseja e converta para JPG. Você pode escolher páginas específicas em vez de converter o PDF inteiro." } },
    { "@type": "Question", "name": "Posso salvar várias páginas específicas como JPG?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. No PDF.it, você pode selecionar múltiplas páginas específicas (ex: páginas 1, 3 e 5) para converter, em vez de converter todas as páginas." } },
    { "@type": "Question", "name": "A qualidade da imagem é boa?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, desde que use DPI adequado. Use 150 DPI para uso web, 200 DPI para documentos e 300 DPI para impressão. No PDF.it, você escolhe o DPI antes de converter." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Salvar uma Página do PDF como JPG",
  "description": "Salve páginas específicas do PDF como imagens JPG em qualquer dispositivo.",
  "step": [
    { "@type": "HowToStep", "name": "Envie o PDF", "text": "Acesse a ferramenta PDF para JPG do PDF.it e envie seu arquivo PDF." },
    { "@type": "HowToStep", "name": "Selecione a página", "text": "Escolha a página específica que deseja salvar como JPG." },
    { "@type": "HowToStep", "name": "Converta e baixe", "text": "Clique em Converter e baixe a imagem JPG da página selecionada." }
  ]
}

export default function SalvarPaginaPdfComoJpgPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF para JPG</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Salvar Página do PDF como JPG (Windows, Mac, Celular)</h1>
              <p className="text-xl text-slate-300">
                Precisa salvar apenas uma página do PDF como imagem JPG? Veja como fazer em qualquer dispositivo — Windows, Mac ou celular.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <ImageIcon className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Selecione a página e converta em segundos.</p>
            </div>
            <Link href="/br/pdf-para-jpg" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Converter PDF para JPG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Salvar Uma Página Específica?</h2>
              <p className="text-slate-600 mb-4">Nem sempre você precisa de todas as páginas do PDF como imagem. Situações comuns:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Comprovante ou recibo.</strong> Precisa salvar apenas a página do comprovante para enviar por mensagem.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Capa de documento.</strong> Quer a primeira página como miniatura ou imagem de capa.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Gráfico ou tabela.</strong> Precisa de uma página com gráfico para inserir em apresentação ou relatório.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Formulário preenchido.</strong> Quer salvar como imagem para referência rápida.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Fazer (Funciona em Qualquer Dispositivo)</h2>
              <div className="space-y-4">
                {[
                  { title: "Acesse a ferramenta PDF para JPG", desc: "Abra o PDF.it no navegador (funciona em Windows, Mac, iPhone, Android). Vá para a ferramenta PDF para JPG." },
                  { title: "Envie seu PDF", desc: "Arraste o PDF ou clique para selecionar. Todos os PDFs até 25MB são grátis." },
                  { title: "Selecione a página desejada", desc: "Escolha qual página (ou páginas) você quer converter. Não precisa converter o PDF inteiro." },
                  { title: "Converta e baixe", desc: "Clique em Converter. Baixe o JPG da página selecionada. Rápido e simples." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dica: Divida Antes para Mais Controle</h2>
              <p className="text-slate-600 mb-4">Se seu PDF é grande e você só precisa de uma página, considere usar <Link href="/br/dividir-pdf" className="text-[#14D8C4] hover:underline">Dividir PDF</Link> primeiro:</p>
              <ul className="space-y-2 text-slate-700">
                <li>- Extraia a página específica como PDF separado</li>
                <li>- Depois converta esse PDF de uma página para JPG</li>
                <li>- Resultado: processo mais rápido e arquivo menor</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Precisa de Qualidade Máxima?</h2>
              <p className="text-slate-600">Se a página tem gráficos, tabelas ou texto fino que precisa ficar nítido, considere converter para <Link href="/br/pdf-para-png" className="text-[#14D8C4] hover:underline">PNG</Link> em vez de JPG. O PNG mantém a qualidade sem artefatos de compressão.</p>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Salve Qualquer Página como JPG</h2>
            <p className="text-slate-300 mb-6">Selecione a página, converta e baixe — funciona em qualquer dispositivo.</p>
            <Link href="/br/pdf-para-jpg" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
              <ImageIcon className="h-5 w-5" /> Converter PDF para JPG
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Converter PDF para JPG Online (Guia Completo)", href: "/br/aprender/converter-pdf-para-jpg" },
                { title: "PDF para JPG no iPhone (Sem Apps)", href: "/br/aprender/pdf-para-jpg-no-iphone" },
                { title: "PDF para JPG para PowerPoint", href: "/br/aprender/pdf-para-jpg-para-powerpoint" },
                { title: "PDF para JPG vs PNG: Qual Escolher?", href: "/br/aprender/pdf-para-jpg-vs-png" },
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
                { q: "Como salvar apenas uma página do PDF como JPG?", a: "Envie seu PDF para o PDF.it, selecione a página que deseja e converta para JPG. Você pode escolher páginas específicas em vez de converter o PDF inteiro." },
                { q: "Posso salvar várias páginas específicas como JPG?", a: "Sim. No PDF.it, você pode selecionar múltiplas páginas específicas (ex: páginas 1, 3 e 5) para converter, em vez de converter todas as páginas." },
                { q: "A qualidade da imagem é boa?", a: "Sim, desde que use DPI adequado. Use 150 DPI para uso web, 200 DPI para documentos e 300 DPI para impressão." },
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

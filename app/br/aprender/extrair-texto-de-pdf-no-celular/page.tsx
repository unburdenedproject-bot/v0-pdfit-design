import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { FileTextIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Extrair Texto de PDF no Celular (iPhone e Android) | PDF.it",
  description:
    "Aprenda como extrair texto de qualquer PDF diretamente no celular. Funciona no iPhone e Android — sem apps, direto no navegador.",
  keywords: "extrair texto pdf celular, pdf para texto celular, copiar texto pdf android, copiar texto pdf iphone, pdf para txt celular",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Preciso de app para extrair texto de PDF no celular?", "acceptedAnswer": { "@type": "Answer", "text": "Não. O PDF.it funciona direto no navegador do celular (Safari no iPhone, Chrome no Android). Envie o PDF, converta e copie o texto — sem instalar nada." } },
    { "@type": "Question", "name": "Funciona com PDF escaneado no celular?", "acceptedAnswer": { "@type": "Answer", "text": "Para PDFs escaneados (imagem), use o Scanner OCR do PDF.it que reconhece texto em imagens. Funciona da mesma forma no celular." } },
    { "@type": "Question", "name": "Posso extrair texto offline no celular?", "acceptedAnswer": { "@type": "Answer", "text": "O PDF.it é online e precisa de internet. Mas funciona bem com conexão 4G/5G. A conversão é rápida mesmo em conexões mais lentas." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Extrair Texto de PDF no Celular",
  "description": "Extraia texto de qualquer PDF usando apenas o navegador do celular.",
  "step": [
    { "@type": "HowToStep", "name": "Abra o PDF.it no navegador", "text": "No celular, abra o Safari ou Chrome e acesse a ferramenta PDF para Texto do PDF.it." },
    { "@type": "HowToStep", "name": "Envie o PDF", "text": "Toque em Escolher arquivo e selecione o PDF dos seus arquivos ou downloads." },
    { "@type": "HowToStep", "name": "Copie ou baixe o texto", "text": "Após a conversão, copie o texto extraído ou baixe como arquivo TXT." }
  ]
}

export default function ExtrairTextoDePdfNoCelularPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extrair Texto de PDF no Celular (iPhone e Android)</h1>
              <p className="text-xl text-slate-300">
                Precisa copiar texto de um PDF direto no celular? Veja como extrair texto de qualquer PDF no iPhone ou Android — sem instalar apps.
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
              <p className="text-slate-700 font-semibold">Funciona direto no navegador do celular.</p>
            </div>
            <Link href="/br/pdf-para-texto" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Converter PDF para Texto <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Extrair Texto no Celular?</h2>
              <p className="text-slate-600 mb-4">Situações comuns do dia a dia:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Copiar dados de um recibo.</strong> Precisa do número do pedido ou valor de uma fatura em PDF.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Salvar informações.</strong> Quer copiar trechos de um documento para suas notas ou mensagem.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Traduzir conteúdo.</strong> Extrair o texto para colar no Google Tradutor ou outro serviço de tradução.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Responder emails.</strong> Copiar informações de um PDF anexo para responder um email rapidamente.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Passo a Passo no Celular</h2>
              <div className="space-y-4">
                {[
                  { title: "Abra o PDF.it no navegador", desc: "No iPhone, abra o Safari. No Android, abra o Chrome. Vá para pdf.it.com e acesse a ferramenta PDF para Texto." },
                  { title: "Envie o PDF", desc: "Toque em 'Escolher arquivo'. Selecione o PDF da pasta Downloads, app Arquivos, iCloud, Google Drive ou de um anexo de email." },
                  { title: "Converta para texto", desc: "Toque em Converter. Em segundos, todo o texto do PDF será extraído e exibido na tela." },
                  { title: "Copie ou baixe", desc: "Toque longo no texto > Selecionar Tudo > Copiar. Ou baixe como arquivo TXT para usar depois." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">PDF Digitalizado? Use OCR</h2>
              <p className="text-slate-600 mb-4">Se o PDF foi escaneado (você não consegue selecionar texto), a ferramenta PDF para Texto não vai funcionar. Neste caso, use o <Link href="/br/scanner-ocr" className="text-[#14D8C4] hover:underline">Scanner OCR</Link> que reconhece texto em imagens usando inteligência artificial.</p>
              <p className="text-slate-600">O Scanner OCR também funciona direto no celular, da mesma forma — pelo navegador, sem app.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Celular</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use o Navegador Padrão</h3>
                  <p className="text-slate-600">Safari no iPhone e Chrome no Android oferecem a melhor experiência com downloads e upload de arquivos.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Baixe o TXT para Uso Offline</h3>
                  <p className="text-slate-600">Se vai precisar do texto depois, baixe o arquivo TXT. Assim pode acessar mesmo sem internet.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Compartilhe Direto do Celular</h3>
                  <p className="text-slate-600">Depois de copiar o texto, cole diretamente no WhatsApp, email, Notas ou qualquer app. É mais rápido que enviar o PDF inteiro.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Extrair Texto de PDF no Celular</h2>
            <p className="text-slate-300 mb-6">Sem app, sem cadastro — direto no navegador do seu celular.</p>
            <Link href="/br/pdf-para-texto" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
              <FileTextIcon className="h-5 w-5" /> Converter PDF para Texto
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Converter PDF para Texto Online", href: "/br/aprender/converter-pdf-para-texto" },
                { title: "Copiar Texto de PDF para Notas", href: "/br/aprender/copiar-texto-de-pdf-para-notas" },
                { title: "Converter PDF Digitalizado para Texto (OCR)", href: "/br/aprender/converter-pdf-digitalizado-para-texto" },
                { title: "PDF para JPG no iPhone (Sem Apps)", href: "/br/aprender/pdf-para-jpg-no-iphone" },
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
                { q: "Preciso de app para extrair texto de PDF no celular?", a: "Não. O PDF.it funciona direto no navegador do celular. Envie o PDF, converta e copie o texto — sem instalar nada." },
                { q: "Funciona com PDF escaneado no celular?", a: "Para PDFs escaneados, use o Scanner OCR do PDF.it que reconhece texto em imagens. Funciona da mesma forma no celular." },
                { q: "Posso extrair texto offline no celular?", a: "O PDF.it precisa de internet, mas funciona bem com 4G/5G. A conversão é rápida mesmo em conexões mais lentas." },
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

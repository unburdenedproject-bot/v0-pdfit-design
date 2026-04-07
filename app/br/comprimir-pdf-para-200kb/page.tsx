import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF para Limites de 200KB — Compressao Extrema Gratis | PDF.it",
  description:
    "Aplique compressao extrema no PDF para reduzir o tamanho para portais com limite de 200KB. Compressao maxima para envio de passaporte, upload de identidade, arquivos de assinatura e portais rigorosos — rapido, pelo navegador, gratis.",
  alternates: {
    canonical: "/br/comprimir-pdf-para-200kb",
    languages: {
      en: "/compress-pdf-to-200kb",
      es: "/es/comprimir-pdf-a-200kb",
      pt: "/br/comprimir-pdf-para-200kb",
    },
  },
}

export default function ComprimirPDFPara200KBPageBr() {
  const faqs = [
    { q: "Como comprimo um PDF para limite de 200KB?", a: "Envie seu PDF ao PDF.it e clique em Comprimir. A ferramenta aplica compressao extrema para reduzir a resolucao de imagens e otimizar a estrutura interna, reduzindo drasticamente o tamanho do arquivo. Os resultados dependem do conteudo do seu PDF." },
    { q: "Meu PDF ficara definitivamente abaixo de 200KB apos comprimir?", a: "A compressao extrema reduz drasticamente o tamanho do arquivo, mas os resultados dependem do conteudo do PDF. Documentos de uma pagina com texto comprimem muito bem. Arquivos com varias paginas ou muitas imagens podem precisar ser divididos primeiro e cada parte comprimida separadamente." },
    { q: "Quais portais exigem PDFs abaixo de 200KB?", a: "Muitos portais de envio de foto de passaporte, sistemas de upload de identidade nacional, uploads de arquivo de assinatura digital e formularios governamentais muito rigorosos impoem limite de 200KB por arquivo." },
    { q: "Meu PDF continuara legivel apos comprimir para 200KB?", a: "Sim. O texto permanece nitido e totalmente legivel. As imagens podem perder detalhe notavel nesse nivel de compressao, mas o documento continua utilizavel para fins de identificacao e envio." },
    { q: "Posso comprimir um PDF para 200KB pelo celular?", a: "Sim. O PDF.it funciona em qualquer navegador movel. Envie seu PDF, comprima-o e baixe o arquivo menor direto no seu iPhone ou Android." },
    { q: "O que faco se meu PDF continuar acima de 200KB apos comprimir?", a: "Tente dividir o PDF em paginas individuais com nossa ferramenta Dividir PDF e comprima cada pagina separadamente. Voce tambem pode achatar o PDF, remover paginas desnecessarias ou converter imagens para escala de cinza para reduzir ainda mais." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Compress className="h-10 w-10 text-[#14D8C4]" /></div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Limites de 200KB</h1>
              <p className="text-xl text-slate-300 mb-8">Aplique compressao extrema para reduzir drasticamente o tamanho do seu PDF em portais com limites de 200KB. Perfeito para envio de fotos de passaporte, upload de identidade, arquivos de assinatura e portais muito rigorosos.</p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Compressao Extrema</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Excluidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">Algumas plataformas impoem um limite muito rigoroso de 200KB. Portais de foto de passaporte, sistemas de envio de identidade nacional, uploads de assinatura digital e formularios governamentais rigorosos exigem arquivos extremamente pequenos. O PDF.it aplica compressao extrema para reduzir drasticamente o tamanho do seu PDF, ajudando voce a cumprir esses requisitos exigentes de upload.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Compressao extrema para maxima reducao de tamanho</li>
              <li className="flex items-center gap-2">✓ Perfeito para uploads de passaporte, ID e assinatura</li>
              <li className="flex items-center gap-2">✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li className="flex items-center gap-2">✓ Sem instalacao — comprima PDFs no navegador</li>
            </ul>
          </div>
        </section>

        <ProcessingInterface acceptedFiles=".pdf" toolName="Compress PDF" outputFormat="PDF" processingMessage="Comprimindo seu PDF para limites de 200KB..." successMessage="Seu PDF comprimido esta pronto!" compressionLevel="extreme" />

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Envio de Foto de Passaporte e ID", desc: "Portais de renovacao de passaporte e sistemas de upload de identidade nacional frequentemente exigem arquivos abaixo de 200KB. Comprima sua foto de passaporte digitalizada ou PDF de identidade para cumprir esses requisitos rigorosos." },
                { title: "Arquivos de Assinatura Digital", desc: "Muitas plataformas exigem arquivos de assinatura abaixo de 200KB para assinatura eletronica de documentos. Comprima seu PDF de assinatura digitalizada para cumprir limites de tamanho mantendo a legibilidade." },
                { title: "Portais Governamentais Rigorosos", desc: "Alguns sistemas governamentais impoem limites de upload muito baixos de 200KB por documento. Comprima seus formularios, certificados e documentos de apoio para enviar sem erros." },
              ].map((feature) => (
                <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Comprimir um PDF para Limites de 200KB</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie seu PDF", desc: "Arraste e solte ou clique para escolher um arquivo" },
                { num: "2", title: "Clique em Comprimir", desc: "A compressao extrema e aplicada automaticamente" },
                { num: "3", title: "Baixe seu PDF", desc: "Receba seu arquivo comprimido instantaneamente" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Comprimir para 100KB", href: "/br/comprimir-pdf-para-100kb", desc: "Para limites de 100KB" },
                { name: "Comprimir para 500KB", href: "/br/comprimir-pdf-para-500kb", desc: "Para limites de 500KB" },
                { name: "Comprimir para 1MB", href: "/br/comprimir-pdf-para-1mb", desc: "Para limites de 1MB" },
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Divida se ainda for grande" },
              ].map((tool) => (
                <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) })}} />
      </main>
      <FooterBr />
    </div>
  )
}

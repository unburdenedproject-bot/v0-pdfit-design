import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF para Limites de 2MB — Compressao Extrema Gratis | PDF.it",
  description:
    "Aplique compressao extrema no PDF para reduzir o tamanho para portais com limite de 2MB. Compressao maxima para formularios governamentais, solicitacoes de visto e uploads de provas — rapido, pelo navegador, gratis.",
  alternates: {
    canonical: "/br/comprimir-pdf-para-2mb",
    languages: {
      en: "/compress-pdf-to-2mb",
      es: "/es/comprimir-pdf-a-2mb",
      pt: "/br/comprimir-pdf-para-2mb",
    },
  },
}

export default function ComprimirPDFPara2MBPageBr() {
  const faqs = [
    { q: "Como comprimo um PDF para limite de 2MB?", a: "Envie seu PDF ao PDF.it, clique em Comprimir e baixe o arquivo reduzido. O PDF.it usa compressao extrema para reduzir drasticamente o tamanho do arquivo. Os resultados dependem do conteudo do seu PDF." },
    { q: "Meu PDF ficara definitivamente abaixo de 2MB apos comprimir?", a: "A compressao extrema reduz drasticamente o tamanho do arquivo. A maioria dos PDFs abaixo de 10MB comprime significativamente. Arquivos muito pesados em imagens podem precisar ser divididos primeiro e cada parte comprimida separadamente." },
    { q: "A qualidade sera afetada ao comprimir para 2MB?", a: "O texto permanece nitido e totalmente legivel. As imagens podem ter qualidade levemente reduzida, mas as paginas continuam claras e utilizaveis para a maioria dos propositos." },
    { q: "Quais tipos de portais exigem PDF de 2MB?", a: "Muitos formularios governamentais, solicitacoes de visto, envios de provas e portais de RH exigem PDFs abaixo de 2MB. O PDF.it ajuda voce a cumprir esses requisitos rigorosos." },
    { q: "Posso comprimir um PDF para 2MB pelo celular?", a: "Sim. O PDF.it funciona em navegadores moveis — envie, comprima e baixe no iPhone ou Android." },
    { q: "O que faco se meu PDF continuar acima de 2MB apos comprimir?", a: "Tente dividir o PDF em secoes menores usando a ferramenta Dividir PDF do PDF.it e comprima cada parte separadamente." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Compress className="h-10 w-10 text-[#14D8C4]" /></div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Limites de 2MB</h1>
              <p className="text-xl text-slate-300 mb-8">Aplique compressao extrema para reduzir drasticamente o tamanho do seu PDF em portais com limites de 2MB. Perfeito para formularios governamentais, solicitacoes de visto e envios de provas.</p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Compressao Maxima</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Excluidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">Muitos portais oficiais exigem PDFs abaixo de 2MB — solicitacoes de visto, formularios governamentais, uploads de provas e sistemas de RH. O PDF.it aplica compressao extrema para reduzir drasticamente o tamanho do seu PDF, ajudando voce a cumprir requisitos rigorosos de upload.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Compressao extrema para maxima reducao de tamanho</li>
              <li className="flex items-center gap-2">✓ Perfeito para portais de visto, governo e provas</li>
              <li className="flex items-center gap-2">✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li className="flex items-center gap-2">✓ Sem instalacao — comprima PDFs no navegador</li>
            </ul>
          </div>
        </section>

        <ProcessingInterface acceptedFiles=".pdf" toolName="Compress PDF" outputFormat="PDF" processingMessage="Comprimindo seu PDF para menos de 2MB..." successMessage="Seu PDF comprimido esta pronto!" compressionLevel="extreme" />

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Cumpra Requisitos Rigorosos de 2MB", desc: "Portais governamentais, solicitacoes de visto e sistemas de provas frequentemente impoem limite rigido de 2MB. O modo de compressao extrema do PDF.it reduz agressivamente o tamanho do arquivo para ajudar voce a enviar sem problemas." },
                { title: "Comprima IDs e Documentos Digitalizados", desc: "Documentos de identidade, certificados e formularios digitalizados frequentemente excedem 2MB. O PDF.it reduz o tamanho das imagens incorporadas mantendo o texto legivel para envios oficiais." },
                { title: "Ainda Grande Demais? Divida e Comprima", desc: "Se seu PDF ainda estiver acima de 2MB apos comprimir, use a ferramenta Dividir PDF do PDF.it para separar em paginas individuais e comprima cada uma separadamente." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Comprimir um PDF para Limites de 2MB</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[{ num: "1", title: "Envie seu PDF", desc: "Arraste e solte ou clique para escolher um arquivo" }, { num: "2", title: "Clique em Comprimir", desc: "A compressao extrema e aplicada automaticamente" }, { num: "3", title: "Baixe seu PDF", desc: "Receba seu arquivo comprimido instantaneamente" }].map((step) => (
                <div key={step.num} className="flex-1">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div>
                  <p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[{ name: "Comprimir para 1MB", href: "/br/comprimir-pdf-para-1mb", desc: "Para limites de 1MB" }, { name: "Comprimir para 5MB", href: "/br/comprimir-pdf-para-5mb", desc: "Para limites de 5MB" }, { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Compressao padrao" }, { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Divida se ainda for grande" }].map((tool) => (
                <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div><div className="text-xs text-slate-400">{tool.desc}</div>
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
              {faqs.map((faq, i) => (<div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3><p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p></div>))}
            </div>
          </div>
        </section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) })}} />
      </main>
      <FooterBr />
    </div>
  )
}

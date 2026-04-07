import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF para WhatsApp — Compartilhe PDFs Facilmente | PDF.it",
  description: "Comprima seu PDF para compartilhamento rapido no WhatsApp. Reduza o tamanho do arquivo para que documentos enviem e baixem rapidamente no celular — gratis, pelo navegador, sem cadastro.",
  alternates: { canonical: "/br/comprimir-pdf-para-whatsapp", languages: { en: "/compress-pdf-for-whatsapp", es: "/es/comprimir-pdf-para-whatsapp", pt: "/br/comprimir-pdf-para-whatsapp" } },
}

export default function ComprimirPDFParaWhatsAppPageBr() {
  const faqs = [
    { q: "Como comprimo um PDF para enviar no WhatsApp?", a: "Envie seu PDF ao PDF.it e clique em Comprimir. A compressao extrema reduz a resolucao de imagens e otimiza a estrutura do arquivo, deixando-o muito menor e mais rapido para enviar pelo WhatsApp." },
    { q: "Qual o limite de tamanho de arquivo do WhatsApp para PDFs?", a: "O WhatsApp permite anexos de ate 100MB. Porem, PDFs grandes sao lentos para enviar e baixar em redes moveis. Comprimir seu PDF garante entrega rapida mesmo em conexoes mais lentas." },
    { q: "O PDF continuara legivel apos comprimir?", a: "Sim. O texto permanece nitido e totalmente legivel. As imagens podem perder algum detalhe com compressao extrema, mas o documento continua perfeitamente utilizavel para compartilhamento via WhatsApp." },
    { q: "Posso comprimir um PDF para WhatsApp pelo celular?", a: "Sim. O PDF.it funciona em qualquer navegador movel no iPhone ou Android. Comprima seu PDF e compartilhe diretamente no WhatsApp sem instalar nenhum app." },
    { q: "Por que meu PDF e grande demais para enviar no WhatsApp?", a: "PDFs com imagens digitalizadas, graficos em alta resolucao ou fontes incorporadas podem ser muito grandes. A compressao reduz esses elementos mantendo o documento legivel, tornando muito mais facil de compartilhar." },
    { q: "O que faco se meu PDF ainda for grande demais apos comprimir?", a: "Tente dividir o PDF em partes menores com nossa ferramenta Dividir PDF e comprima cada parte individualmente. Voce tambem pode achatar o PDF ou remover paginas desnecessarias para reduzir ainda mais." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Compress className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para WhatsApp</h1>
            <p className="text-xl text-slate-300 mb-8">Reduza o tamanho do seu PDF para que envie e baixe rapidamente no WhatsApp. A compressao extrema torna o compartilhamento de documentos no celular rapido e sem esforco.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Compressao Extrema</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Excluidos Apos a Sessao</span></div>
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sem Cadastro</span></div>
            </div>
          </div></div>
        </section>

        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">O WhatsApp aceita anexos de ate 100MB, mas PDFs grandes sao lentos para enviar e baixar — especialmente com dados moveis. Comprimir seu PDF antes de compartilhar garante entrega rapida, economiza dados e facilita para o destinatario abrir o arquivo em qualquer dispositivo.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Compressao extrema para compartilhamento movel rapido</li>
            <li className="flex items-center gap-2">✓ Texto permanece nitido e legivel em qualquer tela</li>
            <li className="flex items-center gap-2">✓ Funciona no iPhone, Android, Mac e Windows</li>
            <li className="flex items-center gap-2">✓ Sem instalacao de app — comprima no navegador</li>
          </ul>
        </div></section>

        <ProcessingInterface acceptedFiles=".pdf" toolName="Compress PDF" outputFormat="PDF" processingMessage="Comprimindo seu PDF para compartilhamento no WhatsApp..." successMessage="Seu PDF comprimido esta pronto para compartilhar!" compressionLevel="extreme" />

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Documentos e Contratos", desc: "Compartilhe propostas, faturas e contratos com clientes pelo WhatsApp sem faze-los esperar por um download grande. PDFs comprimidos chegam instantaneamente e abrem suavemente em qualquer celular." },
            { title: "Recibos e Notas Fiscais", desc: "Envie rapidamente recibos de compra, confirmacoes de pagamento e notas fiscais pelo WhatsApp. A compressao mantem os arquivos pequenos para que enviem em segundos, mesmo em conexoes lentas." },
            { title: "Materiais Escolares e de Estudo", desc: "Alunos e professores frequentemente compartilham trabalhos, anotacoes e materiais de estudo em grupos do WhatsApp. PDFs comprimidos baixam rapidamente sem consumir dados moveis." },
          ].map((feature) => (
            <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>
          ))}
        </div></div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Comprimir um PDF para WhatsApp</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
            {[{ num: "1", title: "Envie seu PDF", desc: "Arraste e solte ou clique para escolher um arquivo" }, { num: "2", title: "Clique em Comprimir", desc: "A compressao extrema e aplicada automaticamente" }, { num: "3", title: "Baixe e compartilhe", desc: "Envie o PDF menor no WhatsApp instantaneamente" }].map((step) => (
              <div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>
            ))}
          </div>
        </div></section>

        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Compressao padrao" }, { name: "Comprimir para Email", href: "/br/comprimir-pdf-para-email", desc: "Para limites de email" }, { name: "Comprimir para 1MB", href: "/br/comprimir-pdf-para-1mb", desc: "Para limites de 1MB" }, { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Divida se ainda for grande" }].map((tool) => (
              <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div><div className="text-xs text-slate-400">{tool.desc}</div></Link></div>
            ))}
          </div>
        </div></section>

        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-white mb-10 text-center">Perguntas Frequentes</h2>
          <div className="space-y-4">{faqs.map((faq, i) => (<div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3><p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p></div>))}</div>
        </div></section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) })}} />
      </main>
      <FooterBr />
    </div>
  )
}

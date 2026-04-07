import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF Digitalizado — Reduzir Tamanho de Scan | PDF.it",
  description: "Comprima PDFs digitalizados com compressao extrema para reduzir drasticamente o tamanho do arquivo. Perfeito para contratos digitalizados, documentos arquivados, recibos e scans de identidade — rapido, pelo navegador, gratis.",
  alternates: { canonical: "/br/comprimir-pdf-digitalizado", languages: { en: "/compress-scanned-pdf", es: "/es/comprimir-pdf-escaneado", pt: "/br/comprimir-pdf-digitalizado" } },
}

export default function ComprimirPDFDigitalizadoPageBr() {
  const faqs = [
    { q: "Por que PDFs digitalizados sao tao grandes?", a: "PDFs digitalizados contem imagens de pagina inteira em vez de texto. Cada pagina e essencialmente uma fotografia em alta resolucao, por isso documentos digitalizados tipicamente tem 10-50MB ou mais. A compressao foca nessas imagens incorporadas para reduzir drasticamente o tamanho do arquivo." },
    { q: "A compressao vai deixar meu documento digitalizado ilegivel?", a: "O texto em documentos digitalizados permanece legivel apos a compressao. A compressao extrema reduz a resolucao da imagem, mas texto impresso continua legivel para a maioria dos propositos. Se voce precisa de qualidade de imagem perfeita, considere usar a compressao recomendada." },
    { q: "Posso comprimir um PDF digitalizado com varias paginas?", a: "Sim. O PDF.it comprime todas as paginas do seu PDF digitalizado de uma vez. Scans de varias paginas frequentemente veem as maiores reducoes de tamanho porque cada pagina contem uma imagem de pagina inteira que pode ser otimizada." },
    { q: "Quanto um PDF digitalizado pode ser comprimido?", a: "Os resultados variam dependendo da resolucao do scan e do numero de paginas. PDFs digitalizados tipicamente comprimem muito bem — reducoes de 50-80% sao comuns, embora resultados exatos dependam do seu documento especifico." },
    { q: "Comprimir um PDF digitalizado afeta o texto OCR?", a: "Se seu PDF digitalizado ja tem uma camada de texto OCR, a compressao a preserva. A camada de texto e separada da camada de imagem, entao voce ainda pode pesquisar e copiar texto apos a compressao." },
    { q: "E se meu PDF digitalizado ainda for grande demais apos comprimir?", a: "Tente dividir o PDF em secoes menores com nossa ferramenta Dividir PDF e comprima cada parte individualmente. Voce tambem pode remover paginas desnecessarias antes de comprimir para reduzir o tamanho geral." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Compress className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF Digitalizado</h1>
            <p className="text-xl text-slate-300 mb-8">PDFs digitalizados contem grandes imagens incorporadas que inflam o tamanho do arquivo para 10-50MB ou mais. Aplique compressao extrema para reduzir drasticamente o tamanho do seu documento digitalizado — perfeito para enviar, anexar por email ou arquivar.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Compressao Extrema</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Excluidos Apos a Sessao</span></div>
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sem Cadastro</span></div>
            </div>
          </div></div>
        </section>

        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">Diferente de PDFs nativos que armazenam texto como dados vetoriais, PDFs digitalizados armazenam cada pagina como uma imagem em alta resolucao. Um documento digitalizado de 10 paginas pode facilmente chegar a 30-50MB. O PDF.it aplica compressao extrema que foca nessas imagens incorporadas, reduzindo drasticamente o tamanho do arquivo mantendo o texto legivel.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Compressao extrema foca nas grandes imagens do scan</li>
            <li className="flex items-center gap-2">✓ Preserva camadas de texto OCR existentes</li>
            <li className="flex items-center gap-2">✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
            <li className="flex items-center gap-2">✓ Sem instalacao — comprima PDFs digitalizados no navegador</li>
          </ul>
        </div></section>

        <ProcessingInterface acceptedFiles=".pdf" toolName="Compress PDF" outputFormat="PDF" processingMessage="Comprimindo seu PDF digitalizado..." successMessage="Seu PDF digitalizado comprimido esta pronto!" compressionLevel="extreme" />

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Contratos e Acordos Digitalizados", desc: "Contratos assinados digitalizados em alta resolucao podem ser enormes. Comprima-os para um tamanho gerenciavel para anexos de email, armazenamento na nuvem ou upload em sistemas de gestao de documentos." },
            { title: "Documentos e Registros Arquivados", desc: "Digitalizar arquivos em papel cria arquivos PDF massivos. Comprima seus arquivos digitalizados para economizar espaco de armazenamento mantendo os documentos acessiveis e pesquisaveis." },
            { title: "Recibos, Notas Fiscais e Scans de ID", desc: "Relatorios de despesas e documentos de identidade frequentemente sao exigidos em inscricoes com limites rigorosos de tamanho. Comprima recibos e IDs digitalizados para cumprir requisitos de upload facilmente." },
          ].map((feature) => (
            <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>
          ))}
        </div></div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Comprimir um PDF Digitalizado</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
            {[{ num: "1", title: "Envie seu PDF digitalizado", desc: "Arraste e solte ou clique para escolher um arquivo" }, { num: "2", title: "Clique em Comprimir PDF", desc: "A compressao extrema foca nas imagens incorporadas" }, { num: "3", title: "Baixe seu PDF", desc: "Receba seu arquivo comprimido instantaneamente" }].map((step) => (
              <div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>
            ))}
          </div>
        </div></section>

        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Compressao padrao" }, { name: "Scanner OCR", href: "/br/scanner-ocr", desc: "Torne scans pesquisaveis" }, { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Divida se ainda for grande" }, { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine apos comprimir" }].map((tool) => (
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

import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF Sem Perder Qualidade — Compressao Inteligente | PDF.it",
  description: "Comprima arquivos PDF sem perder qualidade. A compressao inteligente otimiza estruturas internas, faz subset de fontes e comprime imagens levemente preservando a legibilidade — rapido, pelo navegador, gratis.",
  alternates: { canonical: "/br/comprimir-pdf-sem-perder-qualidade", languages: { en: "/compress-pdf-without-losing-quality", es: "/es/comprimir-pdf-sin-perder-calidad", pt: "/br/comprimir-pdf-sem-perder-qualidade" } },
}

export default function ComprimirPDFSemPerderQualidadePageBr() {
  const faqs = [
    { q: "Como o PDF.it comprime sem perder qualidade?", a: "A compressao inteligente otimiza as estruturas internas do PDF, remove objetos duplicados, faz subset de fontes incorporadas e aplica compressao leve de imagem. Isso reduz o tamanho do arquivo preservando a qualidade visual e legibilidade." },
    { q: "As imagens vao parecer diferentes apos comprimir?", a: "Com a compressao recomendada, as imagens sao levemente otimizadas. A diferenca e praticamente imperceptivel para a maioria dos documentos. Texto, graficos e diagramas permanecem nitidos e definidos." },
    { q: "Quanto menor meu PDF ficara?", a: "Os resultados dependem do conteudo do seu PDF. Documentos com fontes incorporadas e estruturas nao otimizadas tipicamente veem reducao de 20-50%. Arquivos ja otimizados podem ver reducoes menores." },
    { q: "Isso e diferente da compressao extrema?", a: "Sim. A compressao extrema reduz agressivamente a resolucao das imagens para maxima reducao de tamanho. A compressao recomendada prioriza a preservacao da qualidade, aplicando otimizacao mais suave que mantem seu documento com aparencia profissional." },
    { q: "Posso comprimir um PDF sem perder qualidade pelo celular?", a: "Sim. O PDF.it funciona em qualquer navegador movel. Envie seu PDF, comprima com configuracoes inteligentes e baixe o arquivo otimizado direto no seu iPhone ou Android." },
    { q: "Quais tipos de PDFs mais se beneficiam da compressao que preserva qualidade?", a: "Relatorios profissionais, apresentacoes para clientes, portfolios e documentos juridicos se beneficiam mais — qualquer documento onde a qualidade visual importa. A compressao inteligente reduz o tamanho sem comprometer a aparencia profissional." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Compress className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF Sem Perder Qualidade</h1>
            <p className="text-xl text-slate-300 mb-8">A compressao inteligente otimiza as estruturas internas do PDF, faz subset de fontes e comprime imagens levemente — reduzindo o tamanho do arquivo preservando a legibilidade e qualidade visual.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Compressao Inteligente</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Excluidos Apos a Sessao</span></div>
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sem Cadastro</span></div>
            </div>
          </div></div>
        </section>

        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">Nem toda compressao e igual. A compressao inteligente do PDF.it foca em otimizar a estrutura interna do seu PDF — removendo objetos duplicados, fazendo subset de fontes incorporadas e aplicando otimizacao leve de imagem. O resultado e um arquivo visivelmente menor que parece praticamente identico ao original.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Otimiza estruturas internas do PDF e remove redundancias</li>
            <li className="flex items-center gap-2">✓ Faz subset de fontes para remover caracteres nao utilizados</li>
            <li className="flex items-center gap-2">✓ Compressao leve de imagem preserva a qualidade visual</li>
            <li className="flex items-center gap-2">✓ Sem instalacao — funciona em qualquer navegador em qualquer dispositivo</li>
          </ul>
        </div></section>

        <ProcessingInterface acceptedFiles=".pdf" toolName="Compress PDF" outputFormat="PDF" processingMessage="Aplicando compressao inteligente no seu PDF..." successMessage="Seu PDF otimizado esta pronto!" compressionLevel="recommended" />

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Relatorios Profissionais e Apresentacoes", desc: "Relatorios anuais, resumos financeiros e apresentacoes para clientes precisam parecer polidos. A compressao inteligente reduz o tamanho do arquivo para compartilhamento facil mantendo graficos, tabelas e formatacao impecaveis." },
            { title: "Portfolios e Trabalhos de Design", desc: "Portfolios criativos dependem da qualidade da imagem para causar impressao. A compressao que preserva qualidade permite compartilhar seu trabalho por email ou portais de upload sem degradar seus designs." },
            { title: "Documentos Juridicos e de Conformidade", desc: "Contratos, acordos e documentos juridicos devem permanecer totalmente legiveis. A compressao inteligente otimiza o tamanho do arquivo garantindo que cada palavra, assinatura e carimbo permaneca nitido e legivel." },
          ].map((feature) => (
            <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>
          ))}
        </div></div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Comprimir PDF Sem Perder Qualidade</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
            {[{ num: "1", title: "Envie seu PDF", desc: "Arraste e solte ou clique para escolher um arquivo" }, { num: "2", title: "Clique em Comprimir PDF", desc: "A compressao inteligente e aplicada automaticamente" }, { num: "3", title: "Baixe seu PDF", desc: "Receba seu arquivo otimizado instantaneamente" }].map((step) => (
              <div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>
            ))}
          </div>
        </div></section>

        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Compressao padrao" }, { name: "Comprimir para Email", href: "/br/comprimir-pdf-para-email", desc: "Para limites de email" }, { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Divida se ainda for grande" }, { name: "Achatar PDF", href: "/br/achatar-pdf", desc: "Remover campos de formulario" }].map((tool) => (
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

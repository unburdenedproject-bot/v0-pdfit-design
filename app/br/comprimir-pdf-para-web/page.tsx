import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF para Website — Otimize PDFs para Web | PDF.it",
  description: "Otimize PDFs para seu website com compressao inteligente. Reduza o tamanho do arquivo para carregamento mais rapido e melhor experiencia do usuario — mantem a qualidade alta enquanto diminui os downloads.",
  alternates: { canonical: "/br/comprimir-pdf-para-web", languages: { en: "/compress-pdf-for-website", es: "/es/comprimir-pdf-para-web", pt: "/br/comprimir-pdf-para-web" } },
}

export default function ComprimirPDFParaWebPageBr() {
  const faqs = [
    { q: "Como otimizo um PDF para meu website?", a: "Envie seu PDF ao PDF.it e clique em Comprimir. A compressao recomendada equilibra qualidade e tamanho do arquivo, produzindo um PDF que carrega rapidamente em paginas web mantendo texto e imagens com boa aparencia." },
    { q: "PDFs otimizados para web vao ficar bons ao baixar?", a: "Sim. A compressao recomendada reduz o tamanho do arquivo preservando a qualidade visual. O texto permanece nitido e as imagens mantem bons detalhes — os visitantes podem baixar e ler o PDF sem problemas." },
    { q: "Por que devo comprimir PDFs antes de hospedar no website?", a: "PDFs grandes atrasam o tempo de carregamento da pagina, prejudicam rankings de SEO e frustram visitantes em dispositivos moveis. Comprimir PDFs garante downloads mais rapidos, menores custos de largura de banda e melhor experiencia do usuario." },
    { q: "O tamanho do arquivo PDF afeta o SEO do website?", a: "Sim. O Google considera a velocidade da pagina como fator de ranking. Se um PDF demora muito para carregar, pode afetar negativamente seus rankings de busca. PDFs menores carregam mais rapido e contribuem para melhores pontuacoes de Core Web Vitals." },
    { q: "Posso comprimir varios PDFs para meu website de uma vez?", a: "Usuarios Pro podem comprimir varios PDFs em lote de uma vez. Envie todos os arquivos, comprima-os juntos e baixe tudo como ZIP — perfeito para otimizar uma biblioteca inteira de recursos do site." },
    { q: "Qual nivel de compressao devo usar para PDFs web?", a: "A compressao recomendada e ideal para uso na web. Reduz significativamente o tamanho do arquivo mantendo imagens e texto com aparencia profissional. Use compressao extrema apenas se precisar do menor tamanho possivel e puder aceitar alguma perda de qualidade." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Compress className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Website</h1>
            <p className="text-xl text-slate-300 mb-8">Otimize seus PDFs para hospedagem na web. A compressao recomendada mantem a qualidade alta enquanto reduz o tamanho do arquivo para carregamento mais rapido e melhor experiencia do visitante.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Compressao Inteligente</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Excluidos Apos a Sessao</span></div>
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sem Cadastro</span></div>
            </div>
          </div></div>
        </section>

        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">PDFs hospedados no seu website sao baixados por visitantes, indexados por mecanismos de busca e afetam a velocidade de carregamento da sua pagina. PDFs grandes atrasam tudo — aumentam a taxa de rejeicao, prejudicam o SEO e custam mais largura de banda. Comprimir seus PDFs antes de envia-los ao seu site mantem os downloads rapidos e seus visitantes satisfeitos.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Downloads mais rapidos melhoram a experiencia do usuario</li>
            <li className="flex items-center gap-2">✓ Melhor velocidade de pagina ajuda seus rankings de SEO</li>
            <li className="flex items-center gap-2">✓ Arquivos menores economizam largura de banda e custos de hospedagem</li>
            <li className="flex items-center gap-2">✓ Sem instalacao — otimize PDFs no navegador</li>
          </ul>
        </div></section>

        <ProcessingInterface acceptedFiles=".pdf" toolName="Compress PDF" outputFormat="PDF" processingMessage="Otimizando seu PDF para web..." successMessage="Seu PDF otimizado para web esta pronto!" compressionLevel="recommended" />

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Catalogos e Listas de Precos", desc: "Sites de e-commerce e fabricantes hospedam catalogos de produtos como PDFs para download. Comprimi-los garante que clientes possam baixar rapidamente, especialmente em dispositivos moveis." },
            { title: "Cardapios e Folhetos", desc: "Cardapios de restaurantes, folhetos de marketing e estudos de caso hospedados para download devem ser otimizados para web. Arquivos menores significam mais downloads completos e melhor engajamento." },
            { title: "Whitepapers e Recursos", desc: "Whitepapers, ebooks e guias usados para marketing de conteudo devem carregar rapidamente. Recursos comprimidos significam que visitantes tem mais chance de baixar e interagir com seu conteudo." },
          ].map((feature) => (
            <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>
          ))}
        </div></div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Otimizar um PDF para Seu Website</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
            {[{ num: "1", title: "Envie seu PDF", desc: "Arraste e solte ou clique para escolher um arquivo" }, { num: "2", title: "Clique em Comprimir", desc: "A compressao recomendada equilibra qualidade e tamanho" }, { num: "3", title: "Baixe e publique", desc: "Envie o PDF otimizado para seu website" }].map((step) => (
              <div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>
            ))}
          </div>
        </div></section>

        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Compressao padrao" }, { name: "Comprimir para Email", href: "/br/comprimir-pdf-para-email", desc: "Para limites de email" }, { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Separe PDFs grandes" }, { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine varios PDFs" }].map((tool) => (
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

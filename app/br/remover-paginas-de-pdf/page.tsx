import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { SplitPdfInterface } from "@/components/split-pdf-interface"
import { Split, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Remover Paginas de PDF Online — Exclua Paginas Indesejadas | PDF.it",
  description: "Remova paginas indesejadas de um PDF com PDF.it. Selecione quais paginas manter e baixe um PDF limpo sem os extras — rapido, gratis e no navegador.",
  alternates: {
    canonical: "/br/remover-paginas-de-pdf",
    languages: { en: "/remove-pages-from-pdf", es: "/es/eliminar-paginas-de-pdf", pt: "/br/remover-paginas-de-pdf" },
  },
}

export default function RemoverPaginasDePdfPage() {
  const faqs = [
    { q: "Como removo paginas de um PDF?", a: "Envie seu PDF para o PDF.it, insira os numeros das paginas que deseja MANTER (todo o resto sera removido), e clique em Dividir PDF. Baixe o novo PDF sem as paginas indesejadas." },
    { q: "Remover paginas altera meu PDF original?", a: "Nao. Seu PDF original nunca e modificado. O PDF.it cria um novo PDF com apenas as paginas que voce escolheu manter. Seu arquivo original permanece exatamente como estava." },
    { q: "Posso remover paginas em branco de um PDF?", a: "Sim. Identifique os numeros das paginas em branco no seu PDF e insira apenas os numeros das paginas que nao estao em branco. O PDF resultante tera todas as paginas em branco removidas." },
    { q: "Posso remover a capa de um PDF?", a: "Sim. Se a pagina 1 e a capa, basta inserir as paginas 2 ate a ultima (ex: 2-25) e a capa sera excluida do novo PDF." },
    { q: "Posso remover paginas de um PDF no celular?", a: "Sim. O PDF.it funciona em navegadores moveis — envie, selecione as paginas a manter e baixe o PDF limpo no iPhone ou Android." },
    { q: "E gratis remover paginas de um PDF?", a: "Sim. Contas gratuitas podem processar PDFs de ate 25MB com ate 10 conversoes por dia. Contas Pro tem processamento ilimitado e arquivos de ate 200MB." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Split className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Remover Paginas de PDF</h1>
            <p className="text-xl text-slate-300 mb-8">Delete paginas em branco, capas ou qualquer pagina indesejada do seu PDF. Selecione as paginas que deseja manter e baixe um documento limpo e otimizado — rapido, gratis e no navegador.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Mantenha Apenas o Necessario</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Excluidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sem Cadastro</span></div>
            </div>
          </div></div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">Tem um PDF com paginas em branco, folhas de rosto desnecessarias ou apendices extras? O PDF.it permite remover paginas indesejadas selecionando apenas as que deseja manter. O resultado e um PDF limpo e otimizado, pronto para compartilhar, enviar ou imprimir.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Remova paginas em branco, capas ou apendices</li>
              <li className="flex items-center gap-2">✓ O PDF original permanece inalterado — um novo arquivo e criado</li>
              <li className="flex items-center gap-2">✓ Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li className="flex items-center gap-2">✓ Sem instalacao — remova paginas no navegador</li>
          </ul>
        </div></section>

        {/* Processing Interface */}
        <SplitPdfInterface />

        {/* Feature Blocks */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
                { title: "Limpar Documentos Digitalizados", desc: "PDFs digitalizados frequentemente incluem paginas em branco, digitalizacoes duplicadas ou paginas acidentais. Remova os extras e mantenha apenas as paginas que importam — perfeito para limpar digitalizacoes de multiplas paginas." },
                { title: "Remover Capas e Folhas de Rosto", desc: "Muitos PDFs comecam com uma capa ou folha de rosto que voce nao precisa. Remova a pagina 1 (ou qualquer outra) e mantenha o conteudo que importa. Otimo para relatorios, propostas e apresentacoes." },
                { title: "Cortar Apendices e Secoes Extras", desc: "Precisa compartilhar um documento sem o apendice, secao de referencias ou avisos legais? Remova as ultimas paginas e crie um PDF focado apenas no conteudo principal." },
          ].map((feature) => (
            <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>
          ))}
        </div></div></section>

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Remover Paginas de um PDF</h2><div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
          {[
                { num: "1", title: "Envie seu PDF", desc: "Arraste e solte ou clique para escolher um arquivo" },
                { num: "2", title: "Insira as paginas a manter", desc: "Liste numeros ou intervalos (ex: 2-8, 10-15)" },
                { num: "3", title: "Baixe o PDF otimizado", desc: "Receba seu PDF limpo sem paginas indesejadas" },
          ].map((step) => (
            <div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>
          ))}
        </div></div></section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Divida em multiplos PDFs" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine PDFs" },
                { name: "Achatar PDF", href: "/br/achatar-pdf", desc: "Achatar campos de formulario" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho" },
          ].map((tool) => (
            <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div><div className="text-xs text-slate-400">{tool.desc}</div></Link></div>
          ))}
        </div></div></section>

        {/* FAQ */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-white mb-10 text-center">Perguntas Frequentes</h2><div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3><p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p></div>
          ))}
        </div></div></section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) })}} />
      </main>
      <FooterBr />
    </div>
  )
}

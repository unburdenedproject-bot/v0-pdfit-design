import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { Droplets, Zap, AlertTriangle, FileCheck } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Remover Marca D'agua de PDF — Como Apagar Marcas D'agua | PDF.it",
  description:
    "Saiba como lidar com PDFs com marca d'agua. O PDF.it oferece ferramentas para adicionar marcas d'agua, mas remove-las de PDFs que voce nao possui pode violar direitos autorais.",
  alternates: {
    canonical: "/br/remover-marca-dagua-pdf",
    languages: {
      en: "/remove-watermark-pdf",
      es: "/es/quitar-marca-de-agua-pdf",
      pt: "/br/remover-marca-dagua-pdf",
    },
  },
}

export default function RemoverMarcaDaguaPdfPage() {
  const faqs = [
    { q: "O PDF.it pode remover marcas d'agua de PDFs?", a: "Nao. O PDF.it nao oferece remocao de marca d'agua porque isso poderia facilitar a violacao de direitos autorais e pirataria. Em vez disso, o PDF.it oferece ferramentas para adicionar suas proprias marcas d'agua para proteger seus documentos." },
    { q: "E legal remover uma marca d'agua de um PDF?", a: "Depende. Se voce possui o documento original e adicionou a marca d'agua, pode remove-la. No entanto, remover marcas d'agua de documentos que nao sao seus — como fotos de banco de imagens, conteudo licenciado ou software de avaliacao — geralmente viola a lei de direitos autorais e os termos de servico." },
    { q: "Por que PDFs tem marcas d'agua?", a: "Marcas d'agua servem a diversos propositos: proteger propriedade intelectual, marcar documentos como rascunhos ou confidenciais, adicionar a marca da empresa, inibir copias nao autorizadas e indicar o status do documento (ex: AMOSTRA, RASCUNHO, APROVADO)." },
    { q: "Como posso obter um PDF sem a marca d'agua?", a: "A forma legitima e comprar ou licenciar a versao completa do documento. Para marcas d'agua de rascunho, peca ao autor a versao final. Para marcas d'agua de avaliacao, compre a licenca do software. Para conteudo de banco de imagens, compre a versao em alta resolucao." },
    { q: "Posso adicionar minha propria marca d'agua a um PDF com o PDF.it?", a: "Sim. A ferramenta Marca D'agua do PDF.it (disponivel no plano Pro) permite adicionar marcas d'agua personalizadas de texto ou imagem aos seus PDFs. Voce pode controlar a posicao, opacidade, rotacao e tamanho." },
    { q: "O que devo fazer se coloquei marca d'agua no meu proprio PDF por engano?", a: "Se voce adicionou uma marca d'agua ao seu proprio documento e ainda tem o arquivo original sem marca, use essa versao. Se so tem a versao com marca d'agua, pode ser necessario recriar o documento a partir do arquivo original (Word, PowerPoint, etc.) e exportar um novo PDF sem a marca." },
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
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}>
                <Droplets className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Remover Marca D'agua de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">Saiba sobre marcas d'agua em PDF — por que existem, quando podem ser legitimamente removidas e como trabalhar com documentos com marca d'agua.</p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Entenda Marcas D'agua</span></div>
                <div className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-[#14D8C4]" /><span>Conhca Seus Direitos</span></div>
                <div className="flex items-center gap-2"><FileCheck className="h-4 w-4 text-[#14D8C4]" /><span>Opcoes Legitimas</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">Marcas d'agua em PDF sao sobreposicoes de texto ou imagem colocadas nas paginas do documento para indicar propriedade, status ou licenciamento. Embora existam razoes legitimas para remover uma marca d'agua dos seus proprios documentos, o PDF.it nao oferece remocao de marca d'agua como ferramenta porque poderia facilitar a violacao de direitos autorais. Esta pagina explica suas opcoes.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Entenda por que PDFs tem marcas d'agua</li>
              <li className="flex items-center gap-2">✓ Saiba quando a remocao e legitima</li>
              <li className="flex items-center gap-2">✓ Encontre alternativas a remocao</li>
              <li className="flex items-center gap-2">✓ Adicione suas proprias marcas d'agua para proteger documentos</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Precisa Trabalhar com Marcas D'agua?</h2>
            <p className="text-slate-600 mb-6">Adicione suas proprias marcas d'agua profissionais para proteger seus documentos, ou achatec PDFs para fixar o conteudo existente.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/br/marca-dagua-pdf" className="inline-flex items-center justify-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">Marca D'agua (Pro)</Link>
              <Link href="/br/achatar-pdf" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors">Achatar PDF (Gratis)</Link>
            </div>
          </div>
        </section>

        {/* Feature Blocks */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Por Que PDFs Tem Marcas D'agua?", desc: "Marcas d'agua protegem propriedade intelectual, marcam documentos como rascunhos ou confidenciais, adicionam a marca da empresa e inibem copias nao autorizadas em setores juridicos, corporativos e editoriais." },
                { title: "Cenarios Legitimos de Remocao", desc: "Voce pode legitimamente remover uma marca d'agua se for o autor original, comprou uma licenca ou a marca foi adicionada por engano. Volte ao arquivo original para exportar um PDF limpo." },
                { title: "Alternativas a Remocao", desc: "Compre a versao completa licenciada, contate o proprietario para obter uma copia sem marca, use apenas para preview ou crie seu proprio conteudo. Use o PDF.it para adicionar suas proprias marcas d'agua." },
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

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Lidar com PDFs com Marca D'agua</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Determine a propriedade", desc: "Quem e o dono do documento e por que a marca foi adicionada" },
                { num: "2", title: "Re-exporte se for seu", desc: "Volte ao arquivo original e exporte sem a marca d'agua" },
                { num: "3", title: "Licencie ou adicione a sua", desc: "Compre a versao completa ou adicione sua propria marca" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}>
                    <span className="text-[#14D8C4] font-black text-lg">{step.num}</span>
                  </div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Marca D'agua PDF", href: "/br/marca-dagua-pdf", desc: "Adicionar marcas d'agua (Pro)" },
                { name: "Achatar PDF", href: "/br/achatar-pdf", desc: "Fixar conteudo" },
                { name: "Proteger PDF", href: "/br/proteger-pdf", desc: "Proteger PDFs com senha" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduzir tamanho" },
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

        {/* FAQ */}
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

import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { Shield, Zap, Lock, FileCheck } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Redigir PDF Online — Remova Informacoes Sensiveis Permanentemente | PDF.it",
  description: "Redija textos e dados sensiveis de PDFs com o PDF.it. Apague permanentemente informacoes confidenciais antes de compartilhar — seguro, rapido e pelo navegador.",
  alternates: { canonical: "https://pdf.it.com/br/redigir-pdf", languages: { en: "/redact-pdf", es: "/es/redactar-pdf", pt: "/br/redigir-pdf" } },
}

export default function RedigirPDFPage() {
  const faqs = [
    {
        "q": "O que significa redigir um PDF?",
        "a": "Redigir significa remover permanentemente informacoes sensiveis de forma que nao possam ser recuperadas."
    },
    {
        "q": "A redicao e permanente?",
        "a": "Sim. A redicao verdadeira exclui permanentemente os dados do arquivo."
    },
    {
        "q": "Qual a diferenca entre redicao e ocultar texto?",
        "a": "Ocultar com caixa preta e visual — o texto ainda esta no arquivo. Redicao remove permanentemente os dados."
    },
    {
        "q": "A redicao e necessaria para LGPD?",
        "a": "Sim. A LGPD exige que dados pessoais sejam devidamente anonimizados."
    },
    {
        "q": "O PDF.it oferece redicao?",
        "a": "Sim. Disponivel no plano Business ($13,99/mes)."
    },
    {
        "q": "Quais tipos de conteudo podem ser redigidos?",
        "a": "Texto, imagens e metadados. A ferramenta do PDF.it lida com todos os tres tipos."
    }
]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Shield className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Redigir PDF Online</h1>
            <p className="text-xl text-slate-300 mb-8">Remova permanentemente informacoes sensiveis de PDFs antes de compartilhar. A redicao verdadeira exclui dados — nao apenas os esconde.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Remocao Permanente</span></div>
                <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-[#14D8C4]" /><span>Conformidade com LGPD</span></div>
                <div className="flex items-center gap-2"><FileCheck className="h-4 w-4 text-[#14D8C4]" /><span>Baseado no Navegador</span></div>
            </div>
          </div></div>
        </section>

        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">A redicao de PDF e o processo de remover permanentemente informacoes sensiveis de um documento. Diferente de cobrir texto com caixa preta, a redicao verdadeira exclui os dados subjacentes para que nunca possam ser recuperados. Necessaria para conformidade com LGPD e regulamentacoes legais.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Remove permanentemente texto, imagens e metadados</li>
              <li className="flex items-center gap-2">✓ Necessaria para conformidade com LGPD</li>
              <li className="flex items-center gap-2">✓ Previne vazamentos acidentais de dados</li>
              <li className="flex items-center gap-2">✓ Sem software para instalar — redija no navegador</li>
          </ul>
        </div></section>

        <section className="py-12 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center"><h2 className="text-2xl font-black text-slate-900 mb-4">Redija PDFs com o PDF.it</h2><p className="text-slate-600 mb-6">A Redicao de PDF esta disponivel no plano Business. Remova permanentemente informacoes sensiveis dos seus documentos.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/br/redicao-pdf" className="inline-flex items-center justify-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">Experimentar Redicao de PDF</Link><Link href="/br/precos" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors">Ver Plano Business</Link></div></div></section>

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Conformidade Legal e Regulatoria", desc: "Tribunais e organizacoes de saude exigem remocao permanente de dados antes de compartilhar documentos. A redicao de PDF atende a LGPD, GDPR e regras judiciais." },
                { title: "Requisitos LGPD e GDPR", desc: "A LGPD exige remocao permanente de dados pessoais. Simplesmente cobrir texto com caixa preta nao atende a esses padroes." },
                { title: "Redicao Permanente vs. Visual", desc: "Redicao visual deixa o texto no arquivo. Redicao verdadeira exclui permanentemente os dados. O PDF.it usa redicao verdadeira." },
              ].map((feature) => (<div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>))}
            </div></div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Redigir um PDF</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
            {[{ num: "1", title: "Envie seu PDF", desc: "Use a ferramenta de Redicao de PDF" }, { num: "2", title: "Selecione o conteudo", desc: "Escolha texto, imagens ou areas para remover" }, { num: "3", title: "Baixe o PDF redigido", desc: "Receba seu arquivo seguro instantaneamente" }].map((step) => (<div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>))}
          </div>
        </div></section>

        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ name: "Redicao de PDF", href: "/br/redicao-pdf", desc: "Redija PDFs (Business)" }, { name: "Proteger PDF", href: "/br/proteger-pdf", desc: "Proteja PDFs com senha" }, { name: "Achatar PDF", href: "/br/achatar-pdf", desc: "Bloqueie o conteudo" }, { name: "Marca d'Agua PDF", href: "/br/marca-dagua-pdf", desc: "Adicione marcas d'agua (Pro)" }].map((tool) => (<div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div><div className="text-xs text-slate-400">{tool.desc}</div></Link></div>))}
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

import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Shield, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Proteger PDF Antes de Enviar por Email | PDF.it",
  description: "Aprenda a proteger documentos PDF com senha antes de enviar por email. Dicas de seguranca para compartilhar arquivos confidenciais de forma segura.",
  keywords: "proteger pdf antes de enviar, pdf seguro email, enviar pdf protegido, pdf com senha email, seguranca pdf email",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Por que devo proteger o PDF antes de enviar por email?", "acceptedAnswer": { "@type": "Answer", "text": "Emails podem ser interceptados, encaminhados ou acessados por pessoas nao autorizadas. Proteger o PDF com senha garante que apenas o destinatario correto possa abrir o documento, mesmo se o email for acessado por outra pessoa." } },
  { "@type": "Question", "name": "Como envio a senha para o destinatario?", "acceptedAnswer": { "@type": "Answer", "text": "Nunca envie a senha no mesmo email do PDF. Use um canal diferente: SMS, WhatsApp, ligacao telefonica ou mensagem em outro app. Isso garante que mesmo se o email for interceptado, o PDF nao possa ser aberto." } },
  { "@type": "Question", "name": "Posso proteger o PDF e comprimir ao mesmo tempo?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Primeiro comprima o PDF com o compressor do PDF.it para reduzir o tamanho, depois proteja com senha. Ou proteja primeiro e comprima depois — ambas as ordens funcionam." } },
  { "@type": "Question", "name": "O destinatario precisa de algum software especial para abrir?", "acceptedAnswer": { "@type": "Answer", "text": "Nao. Qualquer leitor de PDF (Adobe Reader, Preview, navegador) consegue abrir PDFs protegidos com senha. O destinatario so precisa digitar a senha quando abrir o arquivo." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como proteger PDF antes de enviar por email", "description": "Proteja seu documento PDF antes de enviar por email em 4 passos.", "step": [
  { "@type": "HowToStep", "name": "Acesse a ferramenta Proteger PDF", "text": "Va ate pdf.it.com/br/proteger-pdf no navegador." },
  { "@type": "HowToStep", "name": "Envie e proteja o PDF", "text": "Envie seu PDF, defina uma senha forte e clique em Proteger." },
  { "@type": "HowToStep", "name": "Anexe o PDF protegido ao email", "text": "Baixe o PDF protegido e anexe-o ao seu email normalmente." },
  { "@type": "HowToStep", "name": "Envie a senha separadamente", "text": "Envie a senha para o destinatario por outro canal (SMS, WhatsApp, telefone)." }
] }

export default function ProtegerPdfAntesDeEnviarPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Proteger PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Proteger PDF Antes de Enviar</h1>
          <p className="text-xl text-slate-300">Vai enviar um documento confidencial por email? Aprenda a proteger seu PDF com senha antes de enviar para garantir que so o destinatario correto possa abrir.</p>
        </div></div></section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><Shield className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Pronto para proteger? Pule o guia e va direto para a ferramenta.</p></div>
          <Link href="/br/proteger-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Proteger PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por que proteger antes de enviar?</h2>
            <p className="text-slate-600 mb-4">Email nao e um canal seguro. Seus documentos podem ser comprometidos de varias formas:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Encaminhamento nao autorizado.</strong> O destinatario pode encaminhar o email para outra pessoa. Com senha, o PDF continua protegido.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Acesso a caixa de entrada.</strong> Se alguem acessar o email do destinatario, o PDF com senha ainda estara seguro.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Interceptacao.</strong> Em redes nao seguras, emails podem ser interceptados. A criptografia do PDF protege o conteudo.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Conformidade (LGPD).</strong> A Lei Geral de Protecao de Dados exige medidas de protecao ao compartilhar dados pessoais.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Passo a passo completo</h2>
            <div className="space-y-4">
              {[
                { title: "Prepare seu documento", desc: "Se o documento esta em Word, Excel ou PowerPoint, primeiro converta para PDF usando nosso conversor Office para PDF. Se ja e PDF, pule para o proximo passo." },
                { title: "Proteja com senha", desc: "Acesse a ferramenta Proteger PDF, envie o arquivo e defina uma senha forte. O PDF.it criptografa com AES-256." },
                { title: "Anexe ao email", desc: "Baixe o PDF protegido e anexe-o ao seu email normalmente. Escreva no corpo do email que o documento e protegido por senha." },
                { title: "Envie a senha por outro canal", desc: "Envie a senha por SMS, WhatsApp, Telegram ou ligacao. NUNCA coloque a senha no mesmo email do PDF." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Documentos que voce DEVE proteger antes de enviar</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Contratos e documentos juridicos</strong></li>
              <li>&#10003; <strong>Relatorios financeiros e faturas</strong></li>
              <li>&#10003; <strong>Documentos de identidade</strong> (RG, CPF, passaporte)</li>
              <li>&#10003; <strong>Exames medicos e laudos</strong></li>
              <li>&#10003; <strong>Propostas comerciais confidenciais</strong></li>
              <li>&#10003; <strong>Dados de clientes e funcionarios</strong></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Protecao extra: marca d agua</h2>
            <p className="text-slate-600 mb-4">Alem da senha, considere adicionar uma marca d agua ao PDF. Isso ajuda a rastrear vazamentos e desencoraja compartilhamento nao autorizado. Veja como <Link href="/br/aprender/como-adicionar-marca-dagua-em-pdf" className="text-[#14D8C4] hover:underline">adicionar marca d agua em PDF</Link>.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Se o PDF for grande demais para email</h2>
            <p className="text-slate-600 mb-4">A maioria dos servicos de email limita anexos a 25MB. Se seu PDF protegido for grande:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; Use o <Link href="/br/comprimir-pdf" className="text-[#14D8C4] hover:underline">compressor de PDF</Link> para reduzir o tamanho antes de proteger.</li>
              <li>&#10003; Para limites especificos, tente <Link href="/br/comprimir-pdf-para-5mb" className="text-[#14D8C4] hover:underline">comprimir para 5MB</Link> ou <Link href="/br/comprimir-pdf-para-2mb" className="text-[#14D8C4] hover:underline">comprimir para 2MB</Link>.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Proteja seu PDF antes de enviar</h2>
          <p className="text-slate-300 mb-6">Adicione senha em segundos — criptografia AES-256, gratis, sem cadastro.</p>
          <Link href="/br/proteger-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><Shield className="h-5 w-5" /> Proteger PDF Agora</Link>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Como proteger PDF com senha (guia completo)", href: "/br/aprender/como-proteger-pdf-com-senha" },
              { title: "Melhores praticas para senhas de PDF", href: "/br/aprender/melhores-praticas-senha-pdf" },
              { title: "Proteger PDF no celular", href: "/br/aprender/proteger-pdf-no-celular" },
              { title: "Melhor formato para enviar documentos", href: "/br/aprender/melhor-formato-para-enviar-documentos" },
            ].map((a) => (<Link key={a.href} href={a.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"><span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{a.title}</span><ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" /></Link>))}
          </div>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas frequentes</h2>
          <div className="space-y-6">
            {(faqSchema.mainEntity as Array<{name: string; acceptedAnswer: {text: string}}>).map((faq, i) => (
              <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="font-bold text-slate-900 mb-2">{faq.name}</h3><p className="text-slate-600 text-sm">{faq.acceptedAnswer.text}</p></div>
            ))}
          </div>
        </div></section>
      </main>
      <FooterBr />
    </div>
  )
}

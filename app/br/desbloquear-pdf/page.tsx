import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { UnlockPdfInterface } from "@/components/unlock-pdf-interface"
import { Unlock, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Desbloquear PDF Online — Remover Senha de PDF | PDF.it",
  description:
    "Desbloqueie um PDF protegido com senha usando o PDF.it. Remova a proteção de senha do PDF (com permissão) e baixe um PDF desbloqueado em segundos.",
  alternates: {
    canonical: "https://pdf.it.com/br/desbloquear-pdf",
    languages: {
      "en": "https://pdf.it.com/unlock-pdf",
      "es": "https://pdf.it.com/es/desbloquear-pdf",
      "pt": "https://pdf.it.com/br/desbloquear-pdf",
    },
  },
}

export default function DesbloquearPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        {/* Hero */}
        <section
          className="text-white py-16 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%),
              #0E0F1E
            `,
          }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
            <filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#heroGrain)" />
          </svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)",
                }}
              >
                <Unlock className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Desbloquear PDF (Remover Senha)</h1>
              <p className="text-xl text-slate-300 mb-8">
                Remova a proteção com senha de qualquer PDF que seja seu — digite a senha, desbloqueie e baixe um arquivo sem restrições em segundos.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#14D8C4]" />
                  <span>Desbloqueio Instantâneo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#14D8C4]" />
                  <span>Arquivos Removidos Após a Sessão</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-[#14D8C4]" />
                  <span>Sem Cadastro</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Use a ferramenta Desbloquear PDF do PDF.it para remover a proteção com senha de um PDF quando você souber a senha. Envie o arquivo, digite a senha e baixe um PDF desbloqueado que você pode editar, imprimir, unir ou comprimir.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Desbloqueie arquivos PDF que sejam seus ou tenha permissão para editar</li>
              <li className="flex items-center gap-2">✓ Remova a proteção com senha quando souber a senha</li>
              <li className="flex items-center gap-2">✓ Facilite a edição, impressão, união e assinatura de PDFs</li>
              <li className="flex items-center gap-2">✓ Funciona em Mac, Windows, iOS, Android e Linux</li>
            </ul>
          </div>
        </section>

        {/* Unlock Interface */}
        <UnlockPdfInterface />

        {/* Feature Blocks */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Remova a Senha do PDF (Com Permissão)", desc: "Se você tem a senha correta, o PDF.it descriptografa o arquivo e salva uma nova versão sem a exigência de senha. Projetado para arquivos que são seus ou aos quais você tem acesso legítimo." },
                { title: "Desbloqueie PDFs para Editar e Imprimir", desc: "Uma vez desbloqueado, seu PDF funciona perfeitamente com editores, impressoras, ferramentas de unir e dividir, e fluxos de assinatura eletrônica." },
                { title: "Desbloqueio Rápido Online", desc: "Envie, digite a senha, desbloqueie e baixe. Um fluxo simples de quatro passos projetado para que você obtenha um PDF utilizável em segundos." },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <div
                    className="rounded-[11px] p-6 h-full"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Desbloquear um PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie seu PDF", desc: "Arraste e solte ou clique para escolher seu arquivo protegido" },
                { num: "2", title: "Digite a senha", desc: "Insira a senha correta e clique em Desbloquear" },
                { num: "3", title: "Baixe o PDF desbloqueado", desc: "Receba seu arquivo sem restrições instantaneamente" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{
                      background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                      boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)",
                      border: "1px solid rgba(20,216,196,0.25)",
                    }}
                  >
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
                { name: "Proteger PDF", href: "/br/proteger-pdf", desc: "Adicionar proteção com senha" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combinar após desbloquear" },
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Extrair páginas após desbloquear" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduzir tamanho após desbloquear" },
              ].map((tool) => (
                <div
                  key={tool.href}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <Link
                    href={tool.href}
                    className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%),
              radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%),
              radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {[
                { q: "O PDF.it pode remover a senha de um PDF sem conhecê-la?", a: "Não. O PDF.it requer a senha correta. Não pode recuperar nem ignorar senhas desconhecidas." },
                { q: "É legal desbloquear um PDF?", a: "Você só deve desbloquear PDFs que sejam seus ou para os quais tenha permissão explícita. O PDF.it é projetado para usos legítimos." },
                { q: "Posso proteger meu PDF novamente após desbloqueá-lo?", a: "Sim. Use a ferramenta Proteger PDF do PDF.it para adicionar uma nova senha a qualquer PDF quando precisar." },
                { q: "Posso desbloquear um PDF pelo celular?", a: "Sim. O PDF.it funciona em navegadores móveis — envie o arquivo, digite a senha, desbloqueie e baixe." },
                { q: "É seguro enviar um PDF protegido?", a: "Sim. Todas as transferências são criptografadas com SSL e seus arquivos são removidos imediatamente após sua sessão. Nunca armazenamos nem compartilhamos seus documentos." },
                { q: "Qual é o tamanho máximo de arquivo que posso desbloquear?", a: "Contas gratuitas podem enviar arquivos de até 25MB. Contas Pro podem enviar até 200MB. Contas Business podem enviar até 1GB." },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "O PDF.it pode remover a senha de um PDF sem conhecê-la?", "acceptedAnswer": { "@type": "Answer", "text": "Não. O PDF.it requer a senha correta. Não pode recuperar nem ignorar senhas desconhecidas." } },
            { "@type": "Question", "name": "É legal desbloquear um PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Você só deve desbloquear PDFs que sejam seus ou para os quais tenha permissão explícita. O PDF.it é projetado para usos legítimos." } },
            { "@type": "Question", "name": "Posso proteger meu PDF novamente após desbloqueá-lo?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Use a ferramenta Proteger PDF do PDF.it para adicionar uma nova senha a qualquer PDF quando precisar." } },
            { "@type": "Question", "name": "Posso desbloquear um PDF pelo celular?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em navegadores móveis — envie o arquivo, digite a senha, desbloqueie e baixe." } },
            { "@type": "Question", "name": "É seguro enviar um PDF protegido?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todas as transferências são criptografadas com SSL e seus arquivos são removidos imediatamente após sua sessão. Nunca armazenamos nem compartilhamos seus documentos." } },
            { "@type": "Question", "name": "Qual é o tamanho máximo de arquivo que posso desbloquear?", "acceptedAnswer": { "@type": "Answer", "text": "Contas gratuitas podem enviar arquivos de até 25MB. Contas Pro podem enviar até 200MB. Contas Business podem enviar até 1GB." } }
          ]
        })}} />
      </main>
      <FooterBr />
    </div>
  )
}

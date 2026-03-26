import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProtectPdfInterface } from "@/components/protect-pdf-interface"
import { Lock, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Proteger PDF com Senha Online | PDF.it",
  description:
    "Proteja um PDF com senha usando o PDF.it. Criptografe seu PDF online, restrinja o acesso e baixe um arquivo protegido em segundos.",
  alternates: {
    canonical: "https://pdf.it.com/br/proteger-pdf",
    languages: {
      "en": "https://pdf.it.com/protect-pdf",
      "es": "https://pdf.it.com/es/proteger-pdf",
      "pt": "https://pdf.it.com/br/proteger-pdf",
    },
  },
}

export default function ProtegerPDFPage() {
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
                <Lock className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Proteger PDF com Senha</h1>
              <p className="text-xl text-slate-300 mb-8">
                Adicione uma senha ao seu PDF com o PDF.it. Criptografe seu documento para compartilhar, armazenar e enviar de forma mais segura — rápido e direto do navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#14D8C4]" />
                  <span>Criptografia Segura</span>
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
              Use a ferramenta Proteger PDF do PDF.it para adicionar senha e criptografar um PDF em segundos. Adicione uma senha antes de enviar por e-mail, fazer upload ou armazenar arquivos sensíveis como contratos, extratos bancários, faturas ou documentos pessoais.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Proteja arquivos PDF com senha online</li>
              <li className="flex items-center gap-2">✓ Criptografe PDFs para compartilhar e armazenar com segurança</li>
              <li className="flex items-center gap-2">✓ Ideal para contratos, extratos e formulários médicos</li>
              <li className="flex items-center gap-2">✓ Sem instalação — funciona pelo navegador</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ProtectPdfInterface />

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
                { title: "Adicione uma Senha ao Seu PDF", desc: "Defina uma senha para restringir quem pode abrir seu PDF. O PDF.it protege o arquivo usando proteção padrão com senha para que o conteúdo não seja acessível sem ela." },
                { title: "Proteja Documentos Sensíveis", desc: "A proteção com senha de PDF é útil ao enviar arquivos confidenciais por e-mail ou ao fazer upload em serviços onde você quer uma camada extra de controle de acesso." },
                { title: "Baixe Instantaneamente", desc: "Após aplicar a proteção, baixe seu PDF protegido e compartilhe com o destinatário — envie a senha separadamente por um canal mais seguro." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Proteger um PDF com Senha</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie seu PDF", desc: "Arraste e solte ou clique para escolher um arquivo" },
                { num: "2", title: "Defina uma senha", desc: "Digite uma senha segura e confirme-a" },
                { num: "3", title: "Baixe seu PDF protegido", desc: "Obtenha seu arquivo protegido instantaneamente" },
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
                { name: "Desbloquear PDF", href: "/br/desbloquear-pdf", desc: "Remover proteção com senha" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combinar e depois proteger" },
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Extrair páginas antes de proteger" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduzir tamanho após proteger" },
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
                { q: "O que significa proteger um PDF?", a: "Significa adicionar segurança com senha ao PDF para que apenas pessoas com a senha possam abri-lo." },
                { q: "O que acontece se eu esquecer a senha?", a: "PDFs protegidos com senha geralmente não podem ser recuperados sem a senha. O PDF.it não pode recuperá-la — guarde-a em um lugar seguro." },
                { q: "Posso remover a senha depois?", a: "Sim. Use a ferramenta Desbloquear PDF do PDF.it para remover a proteção com senha de qualquer PDF do qual você tenha a senha." },
                { q: "Posso proteger um PDF pelo celular?", a: "Sim. O PDF.it funciona em navegadores móveis — envie o PDF, defina uma senha e baixe o arquivo protegido." },
                { q: "É seguro enviar PDFs confidenciais?", a: "Sim. Todas as transferências são criptografadas com SSL e seus arquivos são removidos imediatamente após sua sessão. Nunca armazenamos nem compartilhamos seus documentos." },
                { q: "Qual é o tamanho máximo de arquivo que posso proteger?", a: "Contas gratuitas podem enviar arquivos de até 25MB. Contas Pro podem enviar até 200MB. Contas Business podem enviar até 1GB." },
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
            { "@type": "Question", "name": "O que significa proteger um PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Significa adicionar segurança com senha ao PDF para que apenas pessoas com a senha possam abri-lo." } },
            { "@type": "Question", "name": "O que acontece se eu esquecer a senha?", "acceptedAnswer": { "@type": "Answer", "text": "PDFs protegidos com senha geralmente não podem ser recuperados sem a senha. O PDF.it não pode recuperá-la — guarde-a em um lugar seguro." } },
            { "@type": "Question", "name": "Posso remover a senha depois?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Use a ferramenta Desbloquear PDF do PDF.it para remover a proteção com senha de qualquer PDF do qual você tenha a senha." } },
            { "@type": "Question", "name": "Posso proteger um PDF pelo celular?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em navegadores móveis — envie o PDF, defina uma senha e baixe o arquivo protegido." } },
            { "@type": "Question", "name": "É seguro enviar PDFs confidenciais?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todas as transferências são criptografadas com SSL e seus arquivos são removidos imediatamente após sua sessão. Nunca armazenamos nem compartilhamos seus documentos." } },
            { "@type": "Question", "name": "Qual é o tamanho máximo de arquivo que posso proteger?", "acceptedAnswer": { "@type": "Answer", "text": "Contas gratuitas podem enviar arquivos de até 25MB. Contas Pro podem enviar até 200MB. Contas Business podem enviar até 1GB." } }
          ]
        })}} />
      </main>
      <FooterBr />
    </div>
  )
}

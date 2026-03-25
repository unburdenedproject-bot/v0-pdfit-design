import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProtectPdfInterface } from "@/components/protect-pdf-interface"
import { TrustBadges } from "@/components/trust-badges"
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que significa proteger um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Significa adicionar segurança com senha ao PDF para que apenas pessoas com a senha possam abri-lo." }
    },
    {
      "@type": "Question",
      "name": "O que acontece se eu esquecer a senha?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDFs protegidos com senha geralmente não podem ser recuperados sem a senha. O PDF.it não pode recuperá-la — guarde-a em um lugar seguro." }
    },
    {
      "@type": "Question",
      "name": "Posso remover a senha depois?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Use a ferramenta Desbloquear PDF do PDF.it para remover a proteção com senha de qualquer PDF do qual você tenha a senha." }
    },
    {
      "@type": "Question",
      "name": "Posso proteger um PDF pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em navegadores móveis — envie o PDF, defina uma senha e baixe o arquivo protegido." }
    },
    {
      "@type": "Question",
      "name": "É seguro enviar PDFs confidenciais?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todas as transferências são criptografadas com SSL e seus arquivos são removidos imediatamente após sua sessão. Nunca armazenamos nem compartilhamos seus documentos." }
    },
    {
      "@type": "Question",
      "name": "Qual é o tamanho máximo de arquivo que posso proteger?",
      "acceptedAnswer": { "@type": "Answer", "text": "Contas gratuitas podem enviar arquivos de até 25MB. Contas Pro podem enviar até 200MB. Contas Business podem enviar até 1GB." }
    }
  ]
}

export default function ProtegerPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Proteger PDF com Senha</h1>
              <p className="text-xl text-slate-300 mb-8">
                Adicione uma senha ao seu PDF com o PDF.it. Criptografe seu documento para compartilhar, armazenar e enviar de forma mais segura — rápido e direto do navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Criptografia Segura</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Removidos Após a Sessão</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Protect Interface */}
        <ProtectPdfInterface />
        <TrustBadges />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use a ferramenta Proteger PDF do PDF.it para adicionar senha e criptografar um PDF em segundos. Adicione uma senha antes de enviar por e-mail, fazer upload ou armazenar arquivos sensíveis como contratos, extratos bancários, faturas ou documentos pessoais.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Proteja arquivos PDF com senha online</li>
              <li>✓ Criptografe PDFs para compartilhar e armazenar com segurança</li>
              <li>✓ Ideal para contratos, extratos, formulários médicos e documentos de identificação</li>
              <li>✓ Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalação — proteja PDFs pelo navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Adicione uma Senha ao Seu PDF</h2>
              <p className="text-slate-600">
                Defina uma senha para restringir quem pode abrir seu PDF. O PDF.it protege o arquivo usando proteção padrão com senha para que o conteúdo não seja acessível sem ela.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Proteja Documentos Sensíveis Antes de Compartilhar</h2>
              <p className="text-slate-600">
                A proteção com senha de PDF é útil ao enviar arquivos confidenciais por e-mail ou ao fazer upload em serviços onde você quer uma camada extra de controle de acesso.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Baixe um PDF Protegido Instantaneamente</h2>
              <p className="text-slate-600">
                Após aplicar a proteção, baixe seu PDF protegido e compartilhe com o destinatário — envie a senha separadamente por um canal mais seguro.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Proteger um PDF com Senha</h2>
            <div className="space-y-4">
              {[
                "Envie seu PDF ao PDF.it.",
                "Digite uma senha segura e confirme-a.",
                "Clique em Proteger PDF e baixe seu arquivo protegido.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
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
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="rounded-xl p-4 transition-all text-center flex flex-col justify-center min-h-[80px] hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(20,216,196,0.25)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.2)" }}
                >
                  <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-400">{tool.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "O que significa proteger um PDF?", a: "Significa adicionar segurança com senha ao PDF para que apenas pessoas com a senha possam abri-lo." },
                { q: "O que acontece se eu esquecer a senha?", a: "PDFs protegidos com senha geralmente não podem ser recuperados sem a senha. O PDF.it não pode recuperá-la — guarde-a em um lugar seguro." },
                { q: "Posso remover a senha depois?", a: "Sim. Use a ferramenta Desbloquear PDF do PDF.it para remover a proteção com senha de qualquer PDF do qual você tenha a senha." },
                { q: "Posso proteger um PDF pelo celular?", a: "Sim. O PDF.it funciona em navegadores móveis — envie o PDF, defina uma senha e baixe o arquivo protegido." },
                { q: "É seguro enviar PDFs confidenciais?", a: "Sim. Todas as transferências são criptografadas com SSL e seus arquivos são removidos imediatamente após sua sessão. Nunca armazenamos nem compartilhamos seus documentos." },
                { q: "Qual é o tamanho máximo de arquivo que posso proteger?", a: "Contas gratuitas podem enviar arquivos de até 25MB. Contas Pro podem enviar até 200MB. Contas Business podem enviar até 1GB." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}

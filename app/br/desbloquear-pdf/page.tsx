import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { UnlockPdfInterface } from "@/components/unlock-pdf-interface"
import { TrustBadges } from "@/components/trust-badges"
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O PDF.it pode remover a senha de um PDF sem conhecê-la?",
      "acceptedAnswer": { "@type": "Answer", "text": "Não. O PDF.it requer a senha correta. Não pode recuperar nem ignorar senhas desconhecidas." }
    },
    {
      "@type": "Question",
      "name": "É legal desbloquear um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Você só deve desbloquear PDFs que sejam seus ou para os quais tenha permissão explícita. O PDF.it é projetado para usos legítimos." }
    },
    {
      "@type": "Question",
      "name": "Posso proteger meu PDF novamente após desbloqueá-lo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Use a ferramenta Proteger PDF do PDF.it para adicionar uma nova senha a qualquer PDF quando precisar." }
    },
    {
      "@type": "Question",
      "name": "Posso desbloquear um PDF pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em navegadores móveis — envie o arquivo, digite a senha, desbloqueie e baixe." }
    },
    {
      "@type": "Question",
      "name": "É seguro enviar um PDF protegido?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todas as transferências são criptografadas com SSL e seus arquivos são removidos imediatamente após sua sessão. Nunca armazenamos nem compartilhamos seus documentos." }
    },
    {
      "@type": "Question",
      "name": "Qual é o tamanho máximo de arquivo que posso desbloquear?",
      "acceptedAnswer": { "@type": "Answer", "text": "Contas gratuitas podem enviar arquivos de até 25MB. Contas Pro podem enviar até 200MB. Contas Business podem enviar até 1GB." }
    }
  ]
}

export default function DesbloquearPDFPage() {
  return (
    <div className="min-h-screen bg-white">
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
                <Unlock className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Desbloquear PDF (Remover Senha)</h1>
              <p className="text-xl text-slate-300 mb-8">
                Use o PDF.it para desbloquear um PDF protegido com senha quando você tiver a senha. Remova as restrições e baixe um PDF desbloqueado para editar, imprimir ou compartilhar.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Desbloqueio Instantâneo</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Removidos Após a Sessão</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Unlock Interface */}
        <UnlockPdfInterface />
        <TrustBadges />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use a ferramenta Desbloquear PDF do PDF.it para remover a proteção com senha de um PDF quando você souber a senha. Envie o arquivo, digite a senha e baixe um PDF desbloqueado que você pode editar, imprimir, unir ou comprimir.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Desbloqueie arquivos PDF que sejam seus ou tenha permissão para editar</li>
              <li>✓ Remova a proteção com senha quando souber a senha</li>
              <li>✓ Facilite a edição, impressão, união e assinatura de PDFs</li>
              <li>✓ Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalação — desbloqueie PDFs pelo navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Remova a Senha do PDF (Com Permissão)</h2>
              <p className="text-slate-600">
                Se você tem a senha correta, o PDF.it pode descriptografar o PDF e salvar uma nova versão sem a exigência de senha. Esta ferramenta é projetada para arquivos que são seus ou aos quais você tem acesso legítimo.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Desbloqueie PDFs para Editar e Imprimir</h2>
              <p className="text-slate-600">
                PDFs desbloqueados são mais fáceis de usar com editores de PDF, impressoras, ferramentas de união e divisão, e fluxos de trabalho de assinatura eletrônica.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Desbloqueio Rápido Online</h2>
              <p className="text-slate-600">
                Envie, digite a senha, desbloqueie e baixe. Um fluxo simples projetado para que você obtenha um PDF utilizável rapidamente.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Desbloquear um PDF</h2>
            <div className="space-y-4">
              {[
                "Envie seu PDF protegido com senha ao PDF.it.",
                "Digite a senha correta.",
                "Clique em Desbloquear PDF e baixe o arquivo desbloqueado.",
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Proteger PDF", href: "/br/proteger-pdf", desc: "Adicionar proteção com senha" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combinar após desbloquear" },
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Extrair páginas após desbloquear" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduzir tamanho após desbloquear" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="border border-orange-200 bg-orange-50 rounded-xl p-4 hover:border-orange-400 hover:bg-orange-100 transition-all text-center flex flex-col justify-center min-h-[80px]"
                >
                  <div className="font-bold text-orange-600 text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-500">{tool.desc}</div>
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
                { q: "O PDF.it pode remover a senha de um PDF sem conhecê-la?", a: "Não. O PDF.it requer a senha correta. Não pode recuperar nem ignorar senhas desconhecidas." },
                { q: "É legal desbloquear um PDF?", a: "Você só deve desbloquear PDFs que sejam seus ou para os quais tenha permissão explícita. O PDF.it é projetado para usos legítimos." },
                { q: "Posso proteger meu PDF novamente após desbloqueá-lo?", a: "Sim. Use a ferramenta Proteger PDF do PDF.it para adicionar uma nova senha a qualquer PDF quando precisar." },
                { q: "Posso desbloquear um PDF pelo celular?", a: "Sim. O PDF.it funciona em navegadores móveis — envie o arquivo, digite a senha, desbloqueie e baixe." },
                { q: "É seguro enviar um PDF protegido?", a: "Sim. Todas as transferências são criptografadas com SSL e seus arquivos são removidos imediatamente após sua sessão. Nunca armazenamos nem compartilhamos seus documentos." },
                { q: "Qual é o tamanho máximo de arquivo que posso desbloquear?", a: "Contas gratuitas podem enviar arquivos de até 25MB. Contas Pro podem enviar até 200MB. Contas Business podem enviar até 1GB." },
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

import Script from "next/script"
import { HeaderPt } from "@/components/header-pt"
import { FooterPt } from "@/components/footer-pt"
import { ProcessingInterface } from "@/components/processing-interface"
import { Unlock, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Descriptografar PDF — Remova a Criptografia do PDF | OmnisPDF",
  description:
    "Descriptografe seu PDF e remova a criptografia com o OmnisPDF. Desbloqueie documentos protegidos com senha — rápido, no navegador, sem cadastro.",
  alternates: {
    canonical: "https://omnispdf.com/pt/descriptografar-pdf",
    languages: {
      en: "https://omnispdf.com/decrypt-pdf",
      es: "https://omnispdf.com/es/desencriptar-pdf",
      pt: "https://omnispdf.com/pt/descriptografar-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como descriptografo um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF criptografado para o OmnisPDF, insira a senha do documento e a ferramenta removerá a criptografia, gerando um PDF sem proteção por senha." }
    },
    {
      "@type": "Question",
      "name": "Preciso saber a senha para descriptografar?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Para descriptografar um PDF protegido com senha de abertura, você precisa fornecer a senha correta. Não é possível remover criptografia sem a senha." }
    },
    {
      "@type": "Question",
      "name": "Qual é a diferença entre descriptografar e desbloquear?",
      "acceptedAnswer": { "@type": "Answer", "text": "Descriptografar remove a criptografia completa do arquivo, enquanto desbloquear pode se referir apenas à remoção de restrições de permissão (como impressão ou cópia). Ambas as funções estão disponíveis no OmnisPDF." }
    },
    {
      "@type": "Question",
      "name": "É seguro enviar meu PDF criptografado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todas as transferências são protegidas com SSL e seus arquivos são eliminados imediatamente após a sessão. Nunca armazenamos seus documentos." }
    },
    {
      "@type": "Question",
      "name": "Posso descriptografar um PDF pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O OmnisPDF funciona em navegadores móveis — envie seu PDF, insira a senha e baixe o arquivo descriptografado de qualquer dispositivo." }
    },
    {
      "@type": "Question",
      "name": "É grátis descriptografar um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Contas gratuitas têm 10 operações por dia. Contas Pro têm operações ilimitadas." }
    }
  ]
}

export default function DescriptografarPDFPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderPt />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Unlock className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Descriptografar PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Remova a criptografia e a proteção por senha do seu PDF com o OmnisPDF. Desbloqueie documentos cifrados — rápido, seguro e direto do navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Desbloqueio Rápido</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Eliminados Após a Sessão</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Unlock PDF"
          outputFormat="PDF"
          processingMessage="Descriptografando seu PDF..."
          successMessage="Seu PDF foi descriptografado!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Precisa remover a criptografia de um PDF? A ferramenta Descriptografar PDF do OmnisPDF remove a proteção por senha do seu documento, gerando um PDF limpo que pode ser aberto, editado e compartilhado livremente — desde que você conheça a senha original.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Remova a criptografia de qualquer PDF protegido</li>
              <li>✓ Gere um PDF sem proteção por senha</li>
              <li>✓ Ideal quando você não precisa mais da criptografia</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalação — descriptografe direto do navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Acesso Simplificado a Documentos</h2>
              <p className="text-slate-600">
                Remova a criptografia de PDFs que você precisa acessar frequentemente. Elimine a necessidade de digitar a senha toda vez que abrir o documento.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Compartilhamento sem Restrições</h2>
              <p className="text-slate-600">
                Descriptografe PDFs antes de compartilhá-los com colegas ou clientes que não precisam da proteção por senha. Facilite o acesso ao conteúdo do documento.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Edição e Processamento</h2>
              <p className="text-slate-600">
                Remova a criptografia para poder editar, converter ou processar o PDF com outras ferramentas que não suportam arquivos protegidos por senha.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Descriptografar um PDF</h2>
            <div className="space-y-4">
              {[
                "Envie seu PDF criptografado para o OmnisPDF.",
                "Insira a senha do documento.",
                "Clique em Descriptografar e baixe o PDF sem proteção.",
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
                { name: "Proteger PDF", href: "/pt/proteger-pdf", desc: "Adicione senha ao seu PDF" },
                { name: "Desbloquear PDF", href: "/pt/desbloquear-pdf", desc: "Remova a proteção por senha" },
                { name: "Redação PDF", href: "/pt/redacao-pdf", desc: "Oculte informações sensíveis" },
                { name: "Achatar PDF", href: "/pt/achatar-pdf", desc: "Bloqueie formulários e camadas" },
                { name: "Marca d'Água", href: "/pt/marca-dagua-pdf", desc: "Adicione marcas d'água ao PDF" },
                { name: "Comprimir PDF", href: "/pt/comprimir-pdf", desc: "Reduza o tamanho do arquivo" },
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
                { q: "Como descriptografo um PDF?", a: "Envie seu PDF criptografado para o OmnisPDF, insira a senha do documento e a ferramenta removerá a criptografia, gerando um PDF sem proteção por senha." },
                { q: "Preciso saber a senha para descriptografar?", a: "Sim. Para descriptografar um PDF protegido com senha de abertura, você precisa fornecer a senha correta. Não é possível remover criptografia sem a senha." },
                { q: "Qual é a diferença entre descriptografar e desbloquear?", a: "Descriptografar remove a criptografia completa do arquivo, enquanto desbloquear pode se referir apenas à remoção de restrições de permissão. Ambas as funções estão disponíveis no OmnisPDF." },
                { q: "É seguro enviar meu PDF criptografado?", a: "Sim. Todas as transferências são protegidas com SSL e seus arquivos são eliminados imediatamente após a sessão. Nunca armazenamos seus documentos." },
                { q: "Posso descriptografar um PDF pelo celular?", a: "Sim. O OmnisPDF funciona em navegadores móveis — envie seu PDF, insira a senha e baixe o arquivo descriptografado de qualquer dispositivo." },
                { q: "É grátis descriptografar um PDF?", a: "Sim. Contas gratuitas têm 10 operações por dia. Contas Pro têm operações ilimitadas." },
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
      <FooterPt />
    </div>
  )
}

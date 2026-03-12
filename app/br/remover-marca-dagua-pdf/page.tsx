import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Eraser, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Remover Marca d'Água de PDF — Tire Marcas d'Água do PDF | OmnisPDF",
  description:
    "Remova marcas d'água de arquivos PDF com o OmnisPDF. Elimine marcas d'água de texto e imagem dos seus documentos — rápido, no navegador, sem cadastro.",
  alternates: {
    canonical: "https://omnispdf.com/br/remover-marca-dagua-pdf",
    languages: {
      en: "https://omnispdf.com/remove-watermark-pdf",
      es: "https://omnispdf.com/es/eliminar-marca-de-agua-pdf",
      pt: "https://omnispdf.com/br/remover-marca-dagua-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como removo marcas d'água de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF para o OmnisPDF, clique em Remover Marca d'Água e a ferramenta detectará e removerá automaticamente as marcas d'água do documento." }
    },
    {
      "@type": "Question",
      "name": "Funciona com marcas d'água de texto e imagem?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. A ferramenta pode remover tanto marcas d'água de texto (como 'RASCUNHO', 'CONFIDENCIAL') quanto marcas d'água de imagem (como logos) sobrepostas no PDF." }
    },
    {
      "@type": "Question",
      "name": "A remoção da marca d'água afeta o conteúdo do documento?",
      "acceptedAnswer": { "@type": "Answer", "text": "Não. A ferramenta remove apenas a camada da marca d'água, preservando o conteúdo original do documento intacto." }
    },
    {
      "@type": "Question",
      "name": "É seguro enviar meu PDF para remover marcas d'água?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todos os arquivos são processados com segurança e eliminados automaticamente após a sessão. Nunca armazenamos seus documentos." }
    },
    {
      "@type": "Question",
      "name": "Posso remover marcas d'água de um PDF pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O OmnisPDF funciona em navegadores móveis — envie seu PDF e baixe o arquivo sem marca d'água de qualquer dispositivo." }
    },
    {
      "@type": "Question",
      "name": "É grátis remover marcas d'água de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Contas gratuitas têm 10 operações por dia. Contas Pro têm operações ilimitadas." }
    }
  ]
}

export default function RemoverMarcaDaguaPDFPage() {
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
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eraser className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Remover Marca d'Água de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Elimine marcas d'água dos seus documentos PDF com o OmnisPDF. Remova marcas d'água de texto e imagem — rápido, seguro e direto do navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Remoção Automática</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Eliminados Após a Sessão</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Remove Watermark"
          outputFormat="PDF"
          processingMessage="Removendo marca d'água do seu PDF..."
          successMessage="A marca d'água foi removida!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Precisa remover marcas d'água de um PDF? A ferramenta do OmnisPDF detecta e remove automaticamente marcas d'água de texto e imagem dos seus documentos PDF, preservando o conteúdo original intacto. Ideal para limpar documentos de rascunho, remover marcas d'água de amostras ou preparar versões finais.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Remova marcas d'água de texto e imagem</li>
              <li>✓ O conteúdo original do documento é preservado</li>
              <li>✓ Ideal para documentos de rascunho e versões de amostra</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalação — remova marcas d'água no navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Limpe Documentos de Rascunho</h2>
              <p className="text-slate-600">
                Remova marcas como "RASCUNHO", "DRAFT" ou "PRELIMINAR" de documentos que já foram finalizados e aprovados, gerando uma versão limpa para distribuição.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Prepare Versões Finais</h2>
              <p className="text-slate-600">
                Elimine marcas d'água de amostras ou versões de teste para criar a versão final do documento. Perfeito para propostas, relatórios e apresentações.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Remova Logos e Marcas Sobrepostas</h2>
              <p className="text-slate-600">
                Elimine logos, marcas d'água de empresas ou carimbos sobrepostos em documentos PDF quando não são mais necessários ou quando o documento precisa ser reaproveitado.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Remover Marca d'Água de um PDF</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o OmnisPDF.",
                "Clique em Remover Marca d'Água — a detecção é automática.",
                "Baixe o PDF limpo, sem marca d'água.",
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
                { name: "Proteger PDF", href: "/br/proteger-pdf", desc: "Adicione senha ao seu PDF" },
                { name: "Desbloquear PDF", href: "/br/desbloquear-pdf", desc: "Remova a proteção por senha" },
                { name: "Redação PDF", href: "/br/redacao-pdf", desc: "Oculte informações sensíveis" },
                { name: "Achatar PDF", href: "/br/achatar-pdf", desc: "Bloqueie formulários e camadas" },
                { name: "Marca d'Água", href: "/br/marca-dagua-pdf", desc: "Adicione marcas d'água ao PDF" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do arquivo" },
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
                { q: "Como removo marcas d'água de um PDF?", a: "Envie seu PDF para o OmnisPDF, clique em Remover Marca d'Água e a ferramenta detectará e removerá automaticamente as marcas d'água do documento." },
                { q: "Funciona com marcas d'água de texto e imagem?", a: "Sim. A ferramenta pode remover tanto marcas d'água de texto (como 'RASCUNHO', 'CONFIDENCIAL') quanto marcas d'água de imagem (como logos) sobrepostas no PDF." },
                { q: "A remoção da marca d'água afeta o conteúdo do documento?", a: "Não. A ferramenta remove apenas a camada da marca d'água, preservando o conteúdo original do documento intacto." },
                { q: "É seguro enviar meu PDF para remover marcas d'água?", a: "Sim. Todos os arquivos são processados com segurança e eliminados automaticamente após a sessão. Nunca armazenamos seus documentos." },
                { q: "Posso remover marcas d'água de um PDF pelo celular?", a: "Sim. O OmnisPDF funciona em navegadores móveis — envie seu PDF e baixe o arquivo sem marca d'água de qualquer dispositivo." },
                { q: "É grátis remover marcas d'água de um PDF?", a: "Sim. Contas gratuitas têm 10 operações por dia. Contas Pro têm operações ilimitadas." },
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

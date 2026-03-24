import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Layers, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Achatar PDF Online — Bloquear Formulários e Anotações | PDF.it",
  description:
    "Achate arquivos PDF com o PDF.it. Bloqueie campos de formulário, anotações e camadas em um PDF plano e não editável — rápido, pelo navegador, sem cadastro.",
  alternates: {
    languages: {
      en: "/flatten-pdf",
      es: "/es/aplanar-pdf",
      pt: "/br/achatar-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que significa achatar um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Achatar um PDF mescla todos os elementos interativos — campos de formulário, anotações, comentários e camadas — no conteúdo da página. O resultado é um PDF estático e não editável que aparece igual em qualquer lugar." }
    },
    {
      "@type": "Question",
      "name": "Quando devo achatar um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Achate um PDF antes de enviar formulários, compartilhar documentos assinados, arquivar registros, ou quando o destinatário vê campos em branco. Achatar garante que o conteúdo fique bloqueado e visível." }
    },
    {
      "@type": "Question",
      "name": "Achatar vai mudar a aparência do meu PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Não. A aparência visual permanece igual. Achatar apenas remove a capacidade de editar campos de formulário, anotações e elementos interativos." }
    },
    {
      "@type": "Question",
      "name": "Posso achatar um PDF com campos de formulário preenchidos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todos os dados inseridos são preservados e se tornam parte do conteúdo da página. Os campos simplesmente deixam de ser editáveis." }
    },
    {
      "@type": "Question",
      "name": "Posso achatar um PDF pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em navegadores móveis — envie, achate e baixe do seu iPhone ou Android." }
    },
    {
      "@type": "Question",
      "name": "É grátis achatar um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Contas gratuitas têm 10 conversões por dia. Contas Pro têm uso ilimitado." }
    }
  ]
}

export default function AchatarPDFPage() {
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
                <Layers className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Achatar PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Bloqueie campos de formulário, anotações e camadas em um PDF plano e não editável. Perfeito para envios, arquivamento e compartilhamento de documentos finais.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Achatamento Instantâneo</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Removidos Após a Sessão</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Flatten PDF"
          outputFormat="PDF"
          processingMessage="Flattening your PDF..."
          successMessage="Your flattened PDF is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Achatar um PDF mescla todos os campos de formulário, anotações, comentários e camadas interativas na própria página. O resultado é um PDF limpo e estático que é exibido de forma consistente em todos os dispositivos e visualizadores — sem dados faltando nem campos em branco.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Bloqueie campos de formulário preenchidos para que não possam ser editados</li>
              <li>✓ Mescle anotações e comentários na página</li>
              <li>✓ Corrija campos em branco que aparecem em alguns visualizadores PDF</li>
              <li>✓ Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalação — achate PDFs no seu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Envie Formulários Sem Campos em Branco</h2>
              <p className="text-slate-600">
                Preencheu um formulário PDF mas o destinatário vê campos vazios? Isso acontece quando os dados do formulário não estão incorporados na página. Achatar bloqueia tudo no lugar para que seja exibido corretamente em qualquer lugar.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Finalize Documentos Assinados</h2>
              <p className="text-slate-600">
                Após assinar um PDF, achate-o para evitar mais edições. Assinaturas, dados de formulário e anotações se tornam partes permanentes do documento — perfeito para contratos e processos legais.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Arquive PDFs para Armazenamento de Longo Prazo</h2>
              <p className="text-slate-600">
                PDFs achatados são convertidos para formato PDF/A, o padrão internacional para arquivamento de documentos a longo prazo. Isso garante que seus documentos continuem legíveis ao longo dos anos.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Achatar um PDF</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o PDF.it.",
                "Clique em Achatar PDF — todos os campos e anotações são mesclados na página.",
                "Baixe seu PDF achatado e não editável.",
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Proteger PDF", href: "/br/proteger-pdf", desc: "Adiciona senha" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduz o tamanho do arquivo" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combina vários PDFs" },
                { name: "PDF para JPG", href: "/br/pdf-para-jpg", desc: "Converte páginas em imagens" },
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
                { q: "O que significa achatar um PDF?", a: "Achatar um PDF mescla todos os elementos interativos — campos de formulário, anotações, comentários e camadas — no conteúdo da página. O resultado é um PDF estático e não editável que aparece igual em qualquer lugar." },
                { q: "Quando devo achatar um PDF?", a: "Achate um PDF antes de enviar formulários, compartilhar documentos assinados, arquivar registros, ou quando o destinatário vê campos em branco. Achatar garante que o conteúdo fique bloqueado e visível." },
                { q: "Achatar vai mudar a aparência do meu PDF?", a: "Não. A aparência visual permanece igual. Achatar apenas remove a capacidade de editar campos de formulário, anotações e elementos interativos." },
                { q: "Posso achatar um PDF com campos de formulário preenchidos?", a: "Sim. Todos os dados inseridos são preservados e se tornam parte do conteúdo da página. Os campos simplesmente deixam de ser editáveis." },
                { q: "Posso achatar um PDF pelo celular?", a: "Sim. O PDF.it funciona em navegadores móveis — envie, achate e baixe do seu iPhone ou Android." },
                { q: "É grátis achatar um PDF?", a: "Sim. Contas gratuitas têm 10 conversões por dia. Contas Pro têm uso ilimitado." },
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

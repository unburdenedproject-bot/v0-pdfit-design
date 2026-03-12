import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { RedactionInterface } from "@/components/redaction-interface"
import { Shield, Zap, Eye, Lock, FileText, Merge, Layers } from "lucide-react"

export const metadata = {
  title: "Redigir PDF — Oculte Informações Sensíveis Permanentemente | OmnisPDF",
  description:
    "Redija permanentemente texto sensível, dados pessoais e conteúdo confidencial de arquivos PDF. Editor visual de redação — desenhe caixas diretamente no documento. Função Business do OmnisPDF.",
  alternates: {
    canonical: "https://omnispdf.com/br/redigir-pdf",
    languages: {
      en: "https://omnispdf.com/redact-pdf",
      es: "https://omnispdf.com/es/redactar-pdf",
      pt: "https://omnispdf.com/br/redigir-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que significa redigir um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Redigir um PDF é o processo de eliminar permanentemente informações sensíveis do documento. Diferente de simplesmente cobrir o texto com uma caixa preta, a redação verdadeira elimina o conteúdo subjacente para que não possa ser recuperado, copiado nem pesquisado." }
    },
    {
      "@type": "Question",
      "name": "A redação é permanente ou pode ser desfeita?",
      "acceptedAnswer": { "@type": "Answer", "text": "A redação é completamente permanente. Uma vez aplicada, o conteúdo original é eliminado do PDF e não pode ser recuperado. Por isso recomendamos salvar uma cópia do arquivo original antes de redigir." }
    },
    {
      "@type": "Question",
      "name": "Qual é a diferença entre redigir e ocultar texto com uma caixa preta?",
      "acceptedAnswer": { "@type": "Answer", "text": "Uma caixa preta simples apenas oculta o texto visualmente, mas o conteúdo original permanece no arquivo e pode ser copiado, pesquisado ou extraído. A redação adequada elimina completamente os dados subjacentes do PDF." }
    },
    {
      "@type": "Question",
      "name": "Que tipo de informação devo redigir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Você deve redigir qualquer informação sensível: CPF, endereços, números de telefone, dados bancários, informações médicas, detalhes de processos jurídicos, salários e outras informações de identificação pessoal." }
    },
    {
      "@type": "Question",
      "name": "Posso redigir várias páginas de uma vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O editor visual permite navegar por todas as páginas do documento e adicionar redações onde for necessário antes de aplicá-las todas de uma vez." }
    },
    {
      "@type": "Question",
      "name": "Redigir PDF é grátis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Redigir PDF está disponível como função do plano Business por $13.99/mês. Inclui o editor visual de redação junto com outras ferramentas Business como Automação, Extração de Tabelas, Comparar PDF e Assinatura Eletrônica." }
    }
  ]
}

export default function RedigirPDFPage() {
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
              <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Business
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Redigir PDF</h1>
              <p className="text-xl text-slate-300 mb-4">
                Elimine permanentemente informações sensíveis dos seus documentos PDF com o editor visual de redação do OmnisPDF. Envie seu arquivo, desenhe caixas de redação sobre o conteúdo confidencial e aplique redações para que o texto oculto não possa ser copiado, pesquisado nem recuperado.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Ideal para proteger dados pessoais, documentos jurídicos, prontuários médicos, informações financeiras e outros conteúdos privados antes de compartilhar ou arquivar seus PDFs.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-red-400" /><span>Editor Visual</span></div>
                <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-red-400" /><span>Eliminação Permanente</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-red-400" /><span>Suporte Multi-Página</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Redaction Interface */}
        <RedactionInterface />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Como Funciona</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Envie seu PDF", desc: "Arraste e solte seu PDF na área de upload para abri-lo no editor de redação." },
                { step: "2", title: "Desenhe Redações", desc: "Clique e arraste para posicionar caixas de redação pretas sobre o texto ou áreas que deseja eliminar. Navegue por cada página e adicione redações onde necessário." },
                { step: "3", title: "Aplique e Baixe", desc: "Clique em Aplicar Redação para eliminar permanentemente o conteúdo sob as caixas. Baixe seu arquivo redigido, pronto para compartilhamento seguro." },
              ].map((item) => (
                <div key={item.step} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-2">{item.title}</div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Use Redaction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">Por Que Redigir um PDF?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                A redação adequada de PDF vai além de ocultar texto visualmente. Ela elimina permanentemente a informação subjacente do documento para que não possa ser selecionada, copiada, pesquisada nem recuperada depois.
              </p>
              <p className="text-slate-600 text-center">
                Isso torna a redação de PDFs essencial para compartilhar documentos que contêm informações pessoais, financeiras, jurídicas, médicas ou comerciais confidenciais.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comuns</h2>
            <div className="space-y-10">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Jurídicos</h3>
                <p className="text-slate-600">
                  Redija nomes de testemunhas, números de processo, assinaturas, endereços e outras informações sensíveis antes de arquivar ou compartilhar documentos jurídicos. A redação adequada protege detalhes confidenciais e ajuda a cumprir requisitos de privacidade.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Prontuários Médicos</h3>
                <p className="text-slate-600">
                  Redija nomes de pacientes, números de prontuário, detalhes de tratamento, datas de nascimento e outras informações de saúde protegidas para cumprir regulamentações de privacidade e proteger a privacidade do paciente.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Informações Financeiras</h3>
                <p className="text-slate-600">
                  Elimine números de conta bancária, detalhes de pagamento, CPF/CNPJ, dados de contratos e informações comerciais confidenciais antes de compartilhar documentos com terceiros.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Dados Pessoais</h3>
                <p className="text-slate-600">
                  Redija CPF, endereços, números de telefone, e-mails e outras informações de identificação pessoal antes de enviar documentos a auditores, parceiros ou fornecedores externos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "O que significa redigir um PDF?", a: "Redigir um PDF é o processo de eliminar permanentemente informações sensíveis do documento. Diferente de simplesmente cobrir o texto com uma caixa preta, a redação verdadeira elimina o conteúdo subjacente para que não possa ser recuperado." },
                { q: "A redação é permanente ou pode ser desfeita?", a: "A redação é completamente permanente. Uma vez aplicada, o conteúdo original é eliminado do PDF e não pode ser recuperado. Recomendamos salvar uma cópia do arquivo original antes de redigir." },
                { q: "Qual é a diferença entre redigir e ocultar texto com uma caixa preta?", a: "Uma caixa preta simples apenas oculta o texto visualmente, mas o conteúdo permanece no arquivo. A redação adequada elimina completamente os dados subjacentes do PDF." },
                { q: "Que tipo de informação devo redigir?", a: "Qualquer informação sensível: CPF, endereços, números de telefone, dados bancários, informações médicas, detalhes de processos jurídicos e outras informações de identificação pessoal." },
                { q: "Posso redigir várias páginas de uma vez?", a: "Sim. O editor visual permite navegar por todas as páginas do documento e adicionar redações onde for necessário antes de aplicá-las todas de uma vez." },
                { q: "Redigir PDF é grátis?", a: "Redigir PDF está disponível como função do plano Business por $13.99/mês." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Redija Informações Sensíveis com Confiança</h2>
            <p className="text-slate-300 text-lg mb-8">
              Use Redigir PDF para eliminar com segurança conteúdo confidencial dos seus documentos antes de compartilhá-los, arquivá-los ou armazená-los.
            </p>
            <Link
              href="/br/redacao-pdf"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Começar a Redigir
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Mais Ferramentas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Redação PDF", desc: "Ferramenta principal de redação.", href: "/br/redacao-pdf", icon: Shield },
                { name: "Proteger PDF", desc: "Adicione proteção com senha.", href: "/br/proteger-pdf", icon: Lock },
                { name: "Criptografar PDF", desc: "Cifre seu PDF com senha.", href: "/br/criptografar-pdf", icon: Lock },
                { name: "Achatar PDF", desc: "Bloqueie campos de formulário.", href: "/br/achatar-pdf", icon: Layers },
                { name: "Marca d'Água", desc: "Adicione marcas d'água ao PDF.", href: "/br/marca-dagua-pdf", icon: FileText },
                { name: "Unir PDF", desc: "Combine vários PDFs em um só.", href: "/br/unir-pdf", icon: Merge },
                { name: "Comprimir PDF", desc: "Reduza o tamanho sem perder qualidade.", href: "/br/comprimir-pdf", icon: FileText },
                { name: "Dividir PDF", desc: "Divida um PDF em arquivos separados.", href: "/br/dividir-pdf", icon: FileText },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}

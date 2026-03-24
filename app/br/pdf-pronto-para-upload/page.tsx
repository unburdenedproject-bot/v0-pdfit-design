import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Upload, Zap, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "PDF Pronto para Upload — Otimizar PDF para Portais | PDF.it",
  description:
    "Prepare seu PDF para upload com um clique. O PDF.it achata formulários, comprime o tamanho e corrige erros comuns — funciona com qualquer portal, sem cadastro.",
  alternates: {
    languages: {
      en: "/upload-ready-pdf",
      es: "/es/pdf-listo-para-subir",
      pt: "/br/pdf-pronto-para-upload",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que faz o PDF Pronto para Upload?",
      "acceptedAnswer": { "@type": "Answer", "text": "Automaticamente achata campos de formulário e anotações, comprime o tamanho do arquivo e otimiza a estrutura do PDF — tudo em um clique. O resultado é um PDF limpo que funciona com qualquer portal de upload." }
    },
    {
      "@type": "Question",
      "name": "Por que meu PDF é rejeitado quando faço upload?",
      "acceptedAnswer": { "@type": "Answer", "text": "As razões mais comuns são: arquivo muito grande, campos de formulário interativos que não são exibidos corretamente, funções PDF não compatíveis ou estrutura corrompida. PDF Pronto para Upload corrige tudo isso automaticamente." }
    },
    {
      "@type": "Question",
      "name": "Com quais portais funciona?",
      "acceptedAnswer": { "@type": "Answer", "text": "Com qualquer portal — formulários do governo, candidaturas universitárias, sites de emprego, solicitações de visto, sinistros de seguro, processos judiciais e mais. O resultado é um PDF universalmente compatível." }
    },
    {
      "@type": "Question",
      "name": "Os dados do meu formulário são preservados?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todos os seus dados inseridos, assinaturas e anotações são mesclados permanentemente no PDF. Nada é perdido — simplesmente se torna não editável." }
    },
    {
      "@type": "Question",
      "name": "É diferente de apenas comprimir um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. A compressão apenas reduz o tamanho do arquivo. PDF Pronto para Upload também achata formulários, mescla anotações e otimiza a estrutura do PDF para prevenir rejeições causadas por elementos interativos." }
    },
    {
      "@type": "Question",
      "name": "É grátis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Contas gratuitas têm 10 conversões por dia com otimização automática. Contas Pro têm conversões ilimitadas com controles avançados como tamanho alvo e nível de compressão." }
    }
  ]
}

export default function PDFProntoParaUploadPage() {
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
                <Upload className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF Pronto para Upload</h1>
              <p className="text-xl text-slate-300 mb-8">
                Um clique para corrigir e otimizar seu PDF para qualquer portal de upload. Achata formulários, comprime o tamanho e corrige erros comuns de rejeição — automaticamente.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Otimização em Um Clique</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Removidos Após a Sessão</span></div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-orange-500" /><span>Funciona com Qualquer Portal</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Upload Ready PDF"
          outputFormat="PDF"
          processingMessage="Making your PDF upload-ready..."
          successMessage="Your upload-ready PDF is ready!"
        />

        {/* What It Does */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">O Que Acontece Quando Você Clica em PDF Pronto para Upload</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Achatar", desc: "Campos de formulário, anotações e camadas são mesclados na página para que nada apareça em branco." },
                { step: "2", title: "Comprimir", desc: "O tamanho do arquivo é reduzido para cumprir os limites de upload, mantendo o texto nítido e legível." },
                { step: "3", title: "Otimizar", desc: "A estrutura do PDF é limpa para máxima compatibilidade com portais de upload." },
              ].map((item) => (
                <div key={item.step} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-2">{item.title}</div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Cansado de portais rejeitarem seu PDF? A ferramenta PDF Pronto para Upload do PDF.it corrige os problemas mais comuns em um clique — arquivos muito grandes, campos de formulário em branco, anotações incompatíveis e funções PDF não suportadas. O resultado é um PDF limpo e universalmente compatível que funciona em qualquer lugar.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Achata automaticamente campos de formulário para que os dados sejam exibidos corretamente</li>
              <li>✓ Comprime o tamanho do arquivo para portais com limites de upload</li>
              <li>✓ Corrige campos em branco que aparecem em alguns visualizadores PDF</li>
              <li>✓ Funciona com portais do governo, universidades, emprego e vistos</li>
              <li>✓ Sem instalação — otimize PDFs no seu navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Processos Governamentais e Vistos</h2>
              <p className="text-slate-600">
                Portais do governo são rigorosos com formato e tamanho do PDF. PDF Pronto para Upload garante que seus formulários estejam achatados, comprimidos e compatíveis — sem mais envios rejeitados.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Candidaturas de Emprego e Processos Universitários</h2>
              <p className="text-slate-600">
                Portais de RH e sistemas universitários frequentemente rejeitam PDFs com campos de formulário interativos ou arquivos muito grandes. Um clique prepara seu currículo, histórico ou redação para upload.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Seguros, Processos Legais e Judiciais</h2>
              <p className="text-slate-600">
                Portais legais exigem PDFs planos e não editáveis com todas as assinaturas e anotações permanentemente incorporadas. PDF Pronto para Upload cuida disso automaticamente.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Preparar um PDF para Upload</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o PDF.it.",
                "Clique em PDF Pronto para Upload — o achatamento e a compressão são aplicados automaticamente.",
                "Baixe seu PDF otimizado e faça upload em qualquer portal.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Comprimir a 5MB", href: "/compress-pdf-to-5mb", desc: "Cumpra limites de 5MB" },
                { name: "Comprimir a 2MB", href: "/compress-pdf-to-2mb", desc: "Cumpra limites de 2MB" },
                { name: "Achatar PDF", href: "/br/achatar-pdf", desc: "Apenas achatar formulários" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Apenas reduzir tamanho" },
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "O que faz o PDF Pronto para Upload?", a: "Automaticamente achata campos de formulário e anotações, comprime o tamanho do arquivo e otimiza a estrutura do PDF — tudo em um clique. O resultado é um PDF limpo que funciona com qualquer portal de upload." },
                { q: "Por que meu PDF é rejeitado quando faço upload?", a: "As razões mais comuns são: arquivo muito grande, campos de formulário interativos que não são exibidos corretamente, funções PDF não compatíveis ou estrutura corrompida. PDF Pronto para Upload corrige tudo isso automaticamente." },
                { q: "Com quais portais funciona?", a: "Com qualquer portal — formulários do governo, candidaturas universitárias, sites de emprego, solicitações de visto, sinistros de seguro, processos judiciais e mais." },
                { q: "Os dados do meu formulário são preservados?", a: "Sim. Todos os seus dados inseridos, assinaturas e anotações são mesclados permanentemente no PDF. Nada é perdido — simplesmente se torna não editável." },
                { q: "É diferente de apenas comprimir um PDF?", a: "Sim. A compressão apenas reduz o tamanho do arquivo. PDF Pronto para Upload também achata formulários, mescla anotações e otimiza a estrutura do PDF para prevenir rejeições." },
                { q: "É grátis?", a: "Sim. Contas gratuitas têm 10 conversões por dia com otimização automática. Contas Pro têm conversões ilimitadas com controles avançados." },
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

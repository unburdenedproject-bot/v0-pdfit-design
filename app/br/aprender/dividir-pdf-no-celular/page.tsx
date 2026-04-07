import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Scissors, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Dividir PDF no Celular (iPhone e Android) | PDF.it",
  description:
    "Aprenda como dividir PDF diretamente no celular, sem instalar aplicativo. Funciona no iPhone e Android pelo navegador — online, gratis.",
  keywords: "dividir pdf celular, separar pdf celular, dividir pdf iphone, dividir pdf android, cortar pdf no celular",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como dividir um PDF no celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Abra o navegador do celular, acesse pdf.it.com/br/dividir-pdf, envie o PDF, escolha como dividir e baixe as partes. Funciona em qualquer iPhone ou Android, sem instalar app." }
    },
    {
      "@type": "Question",
      "name": "Preciso instalar algum aplicativo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. O PDF.it funciona 100% no navegador. Basta acessar o site no Safari (iPhone) ou Chrome (Android) e usar a ferramenta online." }
    },
    {
      "@type": "Question",
      "name": "Onde ficam os arquivos divididos no celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "No iPhone, os arquivos vao para a pasta Downloads no app Arquivos. No Android, vao para a pasta Downloads acessivel pelo gerenciador de arquivos." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Dividir PDF no Celular",
  "description": "Separe paginas de um PDF usando apenas o navegador do celular.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Abra o PDF.it no navegador",
      "text": "No celular, abra o Safari ou Chrome e acesse pdf.it.com/br/dividir-pdf."
    },
    {
      "@type": "HowToStep",
      "name": "Envie o PDF",
      "text": "Toque na area de upload e selecione o PDF do seu celular."
    },
    {
      "@type": "HowToStep",
      "name": "Divida e baixe",
      "text": "Escolha como dividir, toque em Dividir PDF e baixe os resultados."
    }
  ]
}

export default function DividirPDFNoCelularPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Dividir PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Dividir PDF no Celular</h1>
              <p className="text-xl text-slate-300">
                Precisa separar paginas de um PDF diretamente no celular? Faca tudo pelo navegador, sem instalar nenhum aplicativo.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <Scissors className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">No celular agora? Va direto para a ferramenta.</p>
            </div>
            <Link
              href="/br/dividir-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Dividir PDF Agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Dividir PDF no Celular?</h2>
              <p className="text-slate-600 mb-4">
                Muitas vezes voce precisa dividir um PDF quando esta longe do computador:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Enviar documento urgente</strong> por WhatsApp ou email enquanto esta fora.</li>
                <li>&#10003; <strong>Separar paginas</strong> de um PDF recebido no celular para upload em portais.</li>
                <li>&#10003; <strong>Extrair uma pagina</strong> de um contrato para assinar e devolver rapidamente.</li>
                <li>&#10003; <strong>Reduzir tamanho</strong> de um PDF grande removendo paginas desnecessarias.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Dividir no Celular (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Abra o navegador e acesse o PDF.it",
                    desc: "No iPhone, abra o Safari. No Android, abra o Chrome. Acesse pdf.it.com/br/dividir-pdf. A interface e totalmente otimizada para telas moveis.",
                  },
                  {
                    title: "Envie o PDF",
                    desc: "Toque na area de upload e selecione o PDF. Voce pode escolher arquivos do armazenamento local, iCloud, Google Drive ou qualquer outro servico de nuvem configurado.",
                  },
                  {
                    title: "Escolha como dividir",
                    desc: "Selecione dividir por paginas, por intervalos ou em partes iguais. Os controles sao adaptados para toque — faceis de usar mesmo em telas pequenas.",
                  },
                  {
                    title: "Baixe e compartilhe",
                    desc: "Toque em Dividir, depois baixe os resultados. Use o botao Compartilhar do celular para enviar por WhatsApp, email ou qualquer outro app.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Celular</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Salve na tela inicial:</strong> no Safari, toque Compartilhar &gt; Adicionar a Tela de Inicio para acesso rapido ao PDF.it.</li>
                <li>&#10003; <strong>Conexao Wi-Fi recomendada</strong> para PDFs grandes — economiza dados moveis.</li>
                <li>&#10003; <strong>Comprima apos dividir</strong> usando <Link href="/br/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> se as partes ainda forem grandes.</li>
                <li>&#10003; <strong>Todas as ferramentas funcionam no celular:</strong> <Link href="/br/unir-pdf" className="text-[#14D8C4] hover:underline">Unir</Link>, <Link href="/br/girar-pdf" className="text-[#14D8C4] hover:underline">Girar</Link>, <Link href="/br/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir</Link> e mais.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Dividir no Celular?</h2>
            <p className="text-slate-300 mb-6">Abra no navegador do celular e divida em segundos — gratis, sem app.</p>
            <Link
              href="/br/dividir-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Scissors className="h-5 w-5" /> Dividir PDF Agora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Dividir PDF", href: "/br/aprender/como-dividir-pdf" },
                { title: "Dividir PDF em Paginas Individuais", href: "/br/aprender/dividir-pdf-em-paginas-individuais" },
                { title: "Dividir PDF para Email", href: "/br/aprender/dividir-pdf-para-email" },
                { title: "Extrair Paginas de PDF", href: "/br/aprender/extrair-paginas-de-pdf" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como dividir um PDF no celular?", a: "Abra o navegador do celular, acesse pdf.it.com/br/dividir-pdf, envie o PDF, escolha como dividir e baixe as partes. Funciona em qualquer iPhone ou Android." },
                { q: "Preciso instalar algum aplicativo?", a: "Nao. O PDF.it funciona 100% no navegador. Basta acessar o site no Safari ou Chrome e usar a ferramenta online." },
                { q: "Onde ficam os arquivos divididos no celular?", a: "No iPhone, vao para a pasta Downloads no app Arquivos. No Android, vao para a pasta Downloads acessivel pelo gerenciador de arquivos." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}">
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

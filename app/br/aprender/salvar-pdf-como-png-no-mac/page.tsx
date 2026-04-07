import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { ImageIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Salvar PDF como PNG no Mac (3 Métodos) | PDF.it",
  description:
    "Aprenda 3 formas de salvar PDF como PNG no Mac: usando PDF.it online, Preview (Pré-visualização) e Automator. Guia completo com passo a passo.",
  keywords: "salvar pdf como png mac, pdf para png mac, converter pdf para png macbook, preview pdf para png",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "O Mac tem ferramenta nativa para converter PDF para PNG?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O app Preview (Pré-visualização) do Mac permite exportar páginas de PDF como PNG. Abra o PDF, vá em Arquivo > Exportar e escolha PNG como formato. Mas só exporta uma página por vez." } },
    { "@type": "Question", "name": "Como converter múltiplas páginas de PDF para PNG no Mac?", "acceptedAnswer": { "@type": "Answer", "text": "O Preview só exporta uma página por vez. Para converter múltiplas páginas, use o PDF.it online que converte todas as páginas de uma vez e permite baixar como ZIP." } },
    { "@type": "Question", "name": "Qual a melhor forma de converter PDF para PNG no Mac?", "acceptedAnswer": { "@type": "Answer", "text": "Para uma ou duas páginas, o Preview funciona bem. Para múltiplas páginas ou conversões frequentes, o PDF.it online é mais rápido e prático — funciona direto no navegador." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Salvar PDF como PNG no Mac",
  "description": "3 métodos para converter PDF para PNG no Mac.",
  "step": [
    { "@type": "HowToStep", "name": "Método 1: PDF.it Online", "text": "Abra pdf.it.com no Safari, envie o PDF, escolha PNG e baixe todas as páginas convertidas." },
    { "@type": "HowToStep", "name": "Método 2: Preview", "text": "Abra o PDF no Preview, vá em Arquivo > Exportar, escolha PNG e salve." },
    { "@type": "HowToStep", "name": "Método 3: Automator", "text": "Crie um workflow no Automator para converter PDFs para PNG automaticamente." }
  ]
}

export default function SalvarPdfComoPngNoMacPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PDF para PNG</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Salvar PDF como PNG no Mac (3 Métodos)</h1>
              <p className="text-xl text-slate-300">
                Precisa converter um PDF para PNG no Mac? Veja 3 métodos: PDF.it online (mais rápido), Preview nativo e Automator para automação.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <ImageIcon className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Método mais rápido: converta online em segundos.</p>
            </div>
            <Link href="/br/pdf-para-png" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Converter PDF para PNG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Método 1: PDF.it Online (Recomendado)</h2>
              <p className="text-slate-600 mb-4">O método mais rápido e prático — funciona direto no Safari, sem instalar nada.</p>
              <div className="space-y-4">
                {[
                  { title: "Acesse o PDF.it", desc: "Abra o Safari e vá para a ferramenta PDF para PNG do PDF.it. O site funciona perfeitamente no Mac." },
                  { title: "Envie seu PDF", desc: "Arraste o PDF para a área de upload ou clique para selecionar. Arquivos até 25MB são grátis." },
                  { title: "Escolha DPI e converta", desc: "Selecione 200 DPI para uso geral ou 300 DPI para design/impressão. Clique em Converter." },
                  { title: "Baixe as imagens", desc: "Baixe as imagens PNG individualmente ou todas como ZIP. Elas vão para a pasta Downloads do Mac." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 mt-4 text-sm"><strong>Vantagem:</strong> Converte todas as páginas de uma vez, com controle de DPI.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Método 2: Preview (Pré-visualização)</h2>
              <p className="text-slate-600 mb-4">O Mac tem uma ferramenta nativa que pode exportar PDF como PNG — o Preview:</p>
              <ul className="space-y-2 text-slate-700">
                <li>1. Abra o PDF com o Preview (clique duplo no arquivo)</li>
                <li>2. Vá em <strong>Arquivo &gt; Exportar</strong></li>
                <li>3. Em Formato, selecione <strong>PNG</strong></li>
                <li>4. Ajuste a resolução se necessário</li>
                <li>5. Clique em <strong>Salvar</strong></li>
              </ul>
              <p className="text-slate-600 mt-4 text-sm"><strong>Limitação:</strong> Exporta apenas uma página por vez. Para PDFs com muitas páginas, use o PDF.it.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Método 3: Automator (Para Automação)</h2>
              <p className="text-slate-600 mb-4">Se você converte PDFs para PNG com frequência, pode criar um workflow automático no Mac:</p>
              <ul className="space-y-2 text-slate-700">
                <li>1. Abra o <strong>Automator</strong> (pesquise no Spotlight)</li>
                <li>2. Crie um novo <strong>Workflow</strong></li>
                <li>3. Adicione a ação <strong>Renderizar Páginas de PDF como Imagens</strong></li>
                <li>4. Configure formato PNG e resolução desejada</li>
                <li>5. Adicione <strong>Mover Itens do Finder</strong> para a pasta de destino</li>
                <li>6. Salve como aplicativo — basta arrastar PDFs para converter</li>
              </ul>
              <p className="text-slate-600 mt-4 text-sm"><strong>Melhor para:</strong> Quem converte PDFs para PNG frequentemente e quer automatizar o processo.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Qual Método Escolher?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead><tr className="bg-slate-900 text-white"><th className="text-left py-3 px-4 font-bold">Método</th><th className="text-left py-3 px-4 font-bold">Melhor Para</th><th className="text-left py-3 px-4 font-bold">Múltiplas Páginas</th></tr></thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-[#14D8C4]">PDF.it Online</td><td className="py-3 px-4">Uso geral, praticidade</td><td className="py-3 px-4 text-green-600 font-semibold">Sim</td></tr>
                    <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold text-[#14D8C4]">Preview</td><td className="py-3 px-4">Conversão rápida de 1 página</td><td className="py-3 px-4 text-red-500">Uma por vez</td></tr>
                    <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-[#14D8C4]">Automator</td><td className="py-3 px-4">Conversões frequentes</td><td className="py-3 px-4 text-green-600 font-semibold">Sim</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Converter PDF para PNG no Mac</h2>
            <p className="text-slate-300 mb-6">O método mais rápido: converta online em segundos, sem instalar nada.</p>
            <Link href="/br/pdf-para-png" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
              <ImageIcon className="h-5 w-5" /> Converter PDF para PNG
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Converter PDF para PNG Online", href: "/br/aprender/converter-pdf-para-png" },
                { title: "PDF para PNG para Design", href: "/br/aprender/pdf-para-png-para-design" },
                { title: "Converter PDF para PNG no iPhone", href: "/br/aprender/converter-pdf-para-png-no-iphone" },
                { title: "PDF para JPG vs PNG: Qual Escolher?", href: "/br/aprender/pdf-para-jpg-vs-png" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group">
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
                { q: "O Mac tem ferramenta nativa para converter PDF para PNG?", a: "Sim. O app Preview (Pré-visualização) do Mac permite exportar páginas de PDF como PNG. Mas só exporta uma página por vez." },
                { q: "Como converter múltiplas páginas de PDF para PNG no Mac?", a: "O Preview só exporta uma página por vez. Para converter múltiplas páginas, use o PDF.it online que converte todas as páginas de uma vez e permite baixar como ZIP." },
                { q: "Qual a melhor forma de converter PDF para PNG no Mac?", a: "Para uma ou duas páginas, o Preview funciona bem. Para múltiplas páginas ou conversões frequentes, o PDF.it online é mais rápido e prático." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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

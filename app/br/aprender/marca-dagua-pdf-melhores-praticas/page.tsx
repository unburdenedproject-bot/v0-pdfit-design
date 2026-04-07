import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Stamp, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Melhores Praticas para Marca d'Agua em PDF | PDF.it",
  description:
    "Descubra as melhores praticas para adicionar marca d'agua em PDF: posicao, opacidade, cor, tamanho e quando usar cada tipo de marca d'agua.",
  keywords: "melhores praticas marca dagua pdf, dicas marca dagua pdf, como fazer marca dagua pdf, marca dagua pdf profissional",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Qual a melhor opacidade para marca d'agua?", "acceptedAnswer": { "@type": "Answer", "text": "Entre 30% e 50%. Isso garante que a marca d'agua seja visivel sem dificultar a leitura do conteudo principal do documento." } },
    { "@type": "Question", "name": "Qual cor usar na marca d'agua?", "acceptedAnswer": { "@type": "Answer", "text": "Cinza claro e a escolha mais profissional e discreta. Vermelho e ideal para marcas d'agua de alerta como CONFIDENCIAL ou RASCUNHO." } },
    { "@type": "Question", "name": "Devo usar marca d'agua de texto ou logo?", "acceptedAnswer": { "@type": "Answer", "text": "Texto e melhor para avisos legais (CONFIDENCIAL, RASCUNHO). Logo e ideal para branding corporativo e identificacao de propriedade." } },
    { "@type": "Question", "name": "A marca d'agua protege legalmente meu documento?", "acceptedAnswer": { "@type": "Answer", "text": "A marca d'agua serve como indicacao visual de restricao, mas nao substitui protecao legal formal. Para seguranca adicional, combine com protecao por senha." } },
    { "@type": "Question", "name": "Posso adicionar marca d'agua a varios PDFs de uma vez?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Com o plano Pro do PDF.it, voce pode usar processamento em lote para adicionar marca d'agua a multiplos PDFs simultaneamente." } },
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Criar uma Marca d'Agua Profissional em PDF",
  "description": "Siga estas melhores praticas para criar marcas d'agua eficazes e profissionais em seus PDFs.",
  "step": [
    { "@type": "HowToStep", "name": "Escolha o tipo de marca d'agua", "text": "Decida entre texto (CONFIDENCIAL, RASCUNHO) ou logo (branding corporativo) conforme o objetivo do documento." },
    { "@type": "HowToStep", "name": "Configure opacidade e posicao", "text": "Use opacidade entre 30-50%, posicione em diagonal sobre o conteudo principal para equilibrar visibilidade e legibilidade." },
    { "@type": "HowToStep", "name": "Revise e aplique", "text": "Visualize o resultado antes de aplicar. Verifique se a marca d'agua e visivel em todas as paginas sem prejudicar a leitura." }
  ]
}

export default function MelhoresPraticasMarcaDaguaPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Marca d&apos;Agua PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Melhores Praticas para Marca d&apos;Agua em PDF</h1>
              <p className="text-xl text-slate-300">Aprenda a criar marcas d&apos;agua profissionais e eficazes: posicao ideal, opacidade correta, cores adequadas e quando usar cada tipo.</p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><Stamp className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Aplique marcas d&apos;agua profissionais com o PDF.it.</p>
            </div>
            <Link href="/br/marca-dagua-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Marca d&apos;Agua PDF <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Marcas d&apos;Agua Sao Importantes</h2>
              <p className="text-slate-600 mb-4">Marcas d&apos;agua em PDF servem para proteger documentos, indicar status (rascunho, confidencial) e reforcar a identidade da marca. Uma marca d&apos;agua bem feita e discreta o suficiente para nao atrapalhar a leitura, mas visivel o bastante para cumprir seu proposito.</p>
              <p className="text-slate-600">Uma marca d&apos;agua mal configurada — muito escura, muito pequena ou mal posicionada — pode prejudicar a experiencia de leitura ou ser facilmente ignorada. Siga estas praticas para resultados profissionais.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Opacidade: O Equilibrio Perfeito</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>30-50% de opacidade</strong> e o padrao ideal. Visivel sem dificultar a leitura do conteudo.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Abaixo de 20%</strong> — a marca d&apos;agua pode ser quase invisivel, especialmente em impressoes ou telas com brilho baixo.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Acima de 60%</strong> — dificulta a leitura e da aparencia pouco profissional ao documento.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Posicao e Angulo</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Diagonal (45 graus)</h3><p className="text-slate-600">A posicao diagonal e a mais eficaz. Cobre mais area do documento e e mais dificil de remover por edicao. Ideal para marcas d&apos;agua de seguranca.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Centralizada</h3><p className="text-slate-600">Posicionar no centro da pagina garante visibilidade maxima. Combine com angulo diagonal para melhor protecao.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Rodape ou Cabecalho</h3><p className="text-slate-600">Para logos de empresa ou identificacao discreta, posicionar no rodape ou cabecalho e uma opcao mais sutil que nao interfere no conteudo.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Escolha de Cores</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Cinza claro:</strong> A opcao mais profissional e discreta. Funciona bem em documentos com texto preto.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Vermelho:</strong> Ideal para avisos como CONFIDENCIAL, URGENTE ou RASCUNHO. Chama atencao imediatamente.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Azul:</strong> Boa opcao para branding corporativo ou documentos oficiais.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">&#8226;</span><span><strong>Preto:</strong> Muito forte para a maioria dos usos. Use apenas em documentos com fundo claro e opacidade muito baixa.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Quando Usar Cada Tipo de Marca d&apos;Agua</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Marca d&apos;Agua de Texto</h3><p className="text-slate-600">Use para indicar status do documento: <Link href="/br/aprender/marca-dagua-pdf-confidencial" className="text-[#14D8C4] hover:underline">CONFIDENCIAL</Link>, RASCUNHO, NAO COPIAR, USO INTERNO. E a opcao mais rapida e direta.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Marca d&apos;Agua com Logo</h3><p className="text-slate-600">Use para branding corporativo, protecao de propriedade intelectual e identificacao de origem do documento.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Combinacao (Texto + Logo)</h3><p className="text-slate-600">Para protecao maxima, combine o logo da empresa com um texto de status. Isso identifica a origem e o nivel de restricao simultaneamente.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Protecao Adicional</h2>
              <p className="text-slate-600 mb-4">A marca d&apos;agua e uma camada visual de protecao. Para seguranca completa, combine com:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <Link href="/br/proteger-pdf" className="text-[#14D8C4] hover:underline">Protecao por senha</Link> — impede abertura ou edicao nao autorizada.</li>
                <li>&#10003; <Link href="/br/comprimir-pdf" className="text-[#14D8C4] hover:underline">Compressao de PDF</Link> — reduz o tamanho antes de enviar por e-mail.</li>
                <li>&#10003; Restricoes de impressao e copia — limita o que o destinatario pode fazer com o documento.</li>
              </ul>
            </section>
          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Crie Marcas d&apos;Agua Profissionais</h2>
            <p className="text-slate-300 mb-6">Aplique marcas d&apos;agua com controle total de texto, cor, opacidade e posicao.</p>
            <Link href="/br/marca-dagua-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><Stamp className="h-5 w-5" /> Marca d&apos;Agua PDF (Pro)</Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Marca d'Agua 'Confidencial' em PDF", href: "/br/aprender/marca-dagua-pdf-confidencial" },
                { title: "Marca d'Agua em PDF no Celular", href: "/br/aprender/marca-dagua-pdf-no-celular" },
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
                { q: "Qual a melhor opacidade para marca d'agua?", a: "Entre 30% e 50%. Isso garante que a marca d'agua seja visivel sem dificultar a leitura do conteudo principal do documento." },
                { q: "Qual cor usar na marca d'agua?", a: "Cinza claro e a escolha mais profissional e discreta. Vermelho e ideal para marcas d'agua de alerta como CONFIDENCIAL ou RASCUNHO." },
                { q: "Devo usar marca d'agua de texto ou logo?", a: "Texto e melhor para avisos legais (CONFIDENCIAL, RASCUNHO). Logo e ideal para branding corporativo e identificacao de propriedade." },
                { q: "A marca d'agua protege legalmente meu documento?", a: "A marca d'agua serve como indicacao visual de restricao, mas nao substitui protecao legal formal. Para seguranca adicional, combine com protecao por senha." },
                { q: "Posso adicionar marca d'agua a varios PDFs de uma vez?", a: "Sim. Com o plano Pro do PDF.it, voce pode usar processamento em lote para adicionar marca d'agua a multiplos PDFs simultaneamente." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
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

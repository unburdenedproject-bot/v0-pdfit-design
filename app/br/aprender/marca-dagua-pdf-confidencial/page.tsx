import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Stamp, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Marca d'Agua 'Confidencial' em PDF (Guia Rapido) | PDF.it",
  description:
    "Aprenda como adicionar uma marca d'agua CONFIDENCIAL, RASCUNHO ou NAO COPIAR a um PDF online. Proteja documentos sensiveis em segundos com o PDF.it.",
  keywords: "marca dagua confidencial pdf, marca dagua rascunho pdf, marca dagua pdf online, proteger pdf confidencial",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Como adicionar uma marca d'agua 'Confidencial' a um PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Use a ferramenta Marca d'Agua do PDF.it: faca upload do PDF, digite 'CONFIDENCIAL' como texto da marca d'agua, ajuste tamanho, cor e opacidade, e baixe o PDF protegido." } },
    { "@type": "Question", "name": "Posso personalizar a aparencia da marca d'agua?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. No PDF.it voce pode alterar o texto, tamanho da fonte, cor, opacidade, angulo e posicao da marca d'agua em cada pagina do PDF." } },
    { "@type": "Question", "name": "A marca d'agua pode ser removida depois?", "acceptedAnswer": { "@type": "Answer", "text": "A marca d'agua adicionada pelo PDF.it e incorporada ao PDF. Para dificultar a remocao, use opacidade media e posicione sobre o conteudo principal do documento." } },
    { "@type": "Question", "name": "A marca d'agua e aplicada em todas as paginas?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Por padrao, a marca d'agua e aplicada em todas as paginas do PDF, garantindo protecao uniforme em todo o documento." } },
    { "@type": "Question", "name": "Preciso pagar para usar a marca d'agua?", "acceptedAnswer": { "@type": "Answer", "text": "A ferramenta Marca d'Agua em PDF e uma funcionalidade Pro do PDF.it, disponivel por $3.99/mes com conversoes ilimitadas e arquivos ate 200MB." } },
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Adicionar Marca d'Agua 'Confidencial' a um PDF",
  "description": "Adicione uma marca d'agua de confidencialidade ao seu PDF em 3 passos simples usando o PDF.it.",
  "step": [
    { "@type": "HowToStep", "name": "Faca upload do PDF", "text": "Acesse a ferramenta Marca d'Agua em PDF do PDF.it e faca upload do documento que deseja proteger." },
    { "@type": "HowToStep", "name": "Configure a marca d'agua", "text": "Digite 'CONFIDENCIAL' (ou outro texto), ajuste tamanho, cor, opacidade e angulo conforme necessario." },
    { "@type": "HowToStep", "name": "Baixe o PDF protegido", "text": "Clique em aplicar e baixe o PDF com a marca d'agua incorporada em todas as paginas." }
  ]
}

export default function MarcaDaguaConfidencialPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Marca d&apos;Agua PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Marca d&apos;Agua &quot;Confidencial&quot; em PDF</h1>
              <p className="text-xl text-slate-300">Proteja documentos sensiveis adicionando uma marca d&apos;agua CONFIDENCIAL, RASCUNHO ou NAO COPIAR ao seu PDF. Veja como fazer em poucos cliques.</p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><Stamp className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Adicione marca d&apos;agua agora com o PDF.it (Pro).</p>
            </div>
            <Link href="/br/marca-dagua-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Marca d&apos;Agua PDF <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Usar Marca d&apos;Agua &quot;Confidencial&quot;?</h2>
              <p className="text-slate-600 mb-4">Documentos confidenciais como contratos, relatorios financeiros e dados de clientes precisam de protecao visual. Uma marca d&apos;agua &quot;Confidencial&quot; serve como aviso claro de que o documento nao deve ser compartilhado ou copiado sem autorizacao.</p>
              <p className="text-slate-600 mb-4">Mesmo que alguem tire uma captura de tela ou imprima o documento, a marca d&apos;agua permanece visivel, deixando claro que o conteudo e restrito.</p>
              <p className="text-slate-600">Empresas usam marcas d&apos;agua de confidencialidade para compliance, protecao de propriedade intelectual e controle de distribuicao de documentos internos.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Adicionar Marca d&apos;Agua Confidencial (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  { title: "Faca upload do PDF", desc: "Acesse a ferramenta Marca d'Agua em PDF do PDF.it e selecione o arquivo que deseja proteger. Aceita arquivos ate 200MB no plano Pro." },
                  { title: "Configure o texto da marca d'agua", desc: "Digite 'CONFIDENCIAL', 'RASCUNHO', 'NAO COPIAR' ou qualquer texto personalizado. Ajuste o tamanho da fonte, cor (vermelho e o mais comum), opacidade e angulo de rotacao." },
                  { title: "Aplique e baixe", desc: "Clique em aplicar para incorporar a marca d'agua em todas as paginas. Baixe o PDF protegido pronto para envio ou arquivamento." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Textos de Marca d&apos;Agua Mais Usados</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>CONFIDENCIAL</strong> — Para documentos com informacoes restritas que nao devem ser compartilhados externamente.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>RASCUNHO</strong> — Para versoes preliminares de contratos, propostas ou relatorios que ainda nao foram aprovados.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>NAO COPIAR</strong> — Para materiais protegidos por direitos autorais ou documentos de uso restrito.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>USO INTERNO</strong> — Para documentos que devem circular apenas dentro da empresa.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">5.</span><span><strong>AMOSTRA</strong> — Para exemplos ou demonstracoes que nao sao a versao final do documento.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para uma Marca d&apos;Agua Eficaz</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Use Opacidade Media (30-50%)</h3><p className="text-slate-600">Uma marca d&apos;agua muito transparente pode ser ignorada. Muito opaca dificulta a leitura. O ideal e entre 30% e 50% de opacidade.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Posicione Sobre o Conteudo</h3><p className="text-slate-600">Coloque a marca d&apos;agua em angulo diagonal sobre o texto principal. Isso dificulta a remocao por edicao e garante que seja sempre visivel.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Combine com Protecao por Senha</h3><p className="text-slate-600">Para seguranca maxima, adicione a marca d&apos;agua e tambem <Link href="/br/proteger-pdf" className="text-[#14D8C4] hover:underline">proteja o PDF com senha</Link>. Isso impede tanto a edicao quanto a distribuicao nao autorizada.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Marca d&apos;Agua no PDF.it</h2>
              <p className="text-slate-600 mb-4">A ferramenta <Link href="/br/marca-dagua-pdf" className="text-[#14D8C4] hover:underline">Marca d&apos;Agua em PDF</Link> do PDF.it oferece:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Texto personalizado com controle total de fonte, cor e tamanho.</li>
                <li>&#10003; Ajuste de opacidade e angulo de rotacao.</li>
                <li>&#10003; Aplicacao automatica em todas as paginas do PDF.</li>
                <li>&#10003; Processamento de arquivos ate 200MB no plano Pro ($3.99/mes).</li>
                <li>&#10003; Depois de adicionar a marca d&apos;agua, use <Link href="/br/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> se o arquivo ficar grande demais para e-mail.</li>
              </ul>
            </section>
          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Proteja Seus Documentos Agora</h2>
            <p className="text-slate-300 mb-6">Adicione uma marca d&apos;agua &quot;Confidencial&quot; ao seu PDF em segundos com o PDF.it.</p>
            <Link href="/br/marca-dagua-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><Stamp className="h-5 w-5" /> Marca d&apos;Agua PDF (Pro)</Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Marca d'Agua em PDF no Celular", href: "/br/aprender/marca-dagua-pdf-no-celular" },
                { title: "Melhores Praticas para Marca d'Agua em PDF", href: "/br/aprender/marca-dagua-pdf-melhores-praticas" },
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
                { q: "Como adicionar uma marca d'agua 'Confidencial' a um PDF?", a: "Use a ferramenta Marca d'Agua do PDF.it: faca upload do PDF, digite 'CONFIDENCIAL' como texto da marca d'agua, ajuste tamanho, cor e opacidade, e baixe o PDF protegido." },
                { q: "Posso personalizar a aparencia da marca d'agua?", a: "Sim. No PDF.it voce pode alterar o texto, tamanho da fonte, cor, opacidade, angulo e posicao da marca d'agua em cada pagina do PDF." },
                { q: "A marca d'agua pode ser removida depois?", a: "A marca d'agua adicionada pelo PDF.it e incorporada ao PDF. Para dificultar a remocao, use opacidade media e posicione sobre o conteudo principal." },
                { q: "A marca d'agua e aplicada em todas as paginas?", a: "Sim. Por padrao, a marca d'agua e aplicada em todas as paginas do PDF, garantindo protecao uniforme." },
                { q: "Preciso pagar para usar a marca d'agua?", a: "A ferramenta Marca d'Agua em PDF e uma funcionalidade Pro do PDF.it, disponivel por $3.99/mes com conversoes ilimitadas e arquivos ate 200MB." },
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

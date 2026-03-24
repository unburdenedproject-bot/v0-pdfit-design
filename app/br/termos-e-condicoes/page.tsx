import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { FileText } from "lucide-react"

export const metadata = {
  title: "Termos e Condicoes — PDF.it",
  description: "Termos e condicoes para usar as ferramentas e servicos do PDF.it.",
}

export default function TermsConditionsPagePt() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Termos e Condicoes</h1>
              <p className="text-xl text-slate-300">
                Os termos de servico para usar as ferramentas e servicos do PDF.it.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 lg:p-12">

                <div className="space-y-2 mb-8">
                  <h2 className="text-2xl font-bold text-slate-900">Termos e Condicoes — PDF.it</h2>
                  <p className="text-slate-500 text-sm"><strong>Data de vigencia:</strong> 1 de janeiro de 2024</p>
                </div>

                <p className="text-slate-700 leading-relaxed mb-10">
                  Bem-vindo ao PDF.it ("nos", "nosso"). Ao acessar ou usar nosso site e ferramentas (o "Servico"), voce concorda com estes Termos e Condicoes ("Termos"). Se voce nao concordar, nao use o Servico.
                </p>

                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">1. Uso do Servico</h3>
                    <p className="text-slate-700 mb-4">O PDF.it fornece ferramentas online para converter, comprimir e processar documentos. Voce concorda em usar o Servico apenas para propositos legais e de acordo com estes Termos.</p>
                    <p className="text-slate-700 font-semibold mb-2">Voce nao deve:</p>
                    <ul className="space-y-2 text-slate-700 list-disc list-inside">
                      <li>Usar o Servico para violar qualquer lei ou regulamento</li>
                      <li>Enviar ou processar conteudo sobre o qual voce nao tenha os direitos ou permissoes necessarios</li>
                      <li>Tentar interromper, abusar, sobrecarregar ou fazer engenharia reversa do Servico</li>
                      <li>Usar scraping automatizado ou solicitacoes automatizadas excessivas sem permissao</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">2. Contas, Planos e Limites</h3>
                    <p className="text-slate-700">Algumas funcoes estao disponiveis em planos gratuitos e pagos. O uso gratuito inclui limites de conversoes por dia (10/dia) e tamanho de arquivo (25MB). Os planos pagos fornecem limites maiores e funcoes adicionais (200MB, conversoes ilimitadas). Os detalhes do plano e precos podem mudar periodicamente e serao publicados no site.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">3. Seu Conteudo e Arquivos</h3>
                    <p className="text-slate-700 mb-4">Voce mantem todos os direitos sobre os arquivos e conteudo que envia ou processa ("Conteudo do Usuario"). Voce declara e garante que possui todos os direitos necessarios para usar seu Conteudo do Usuario com o Servico.</p>
                    <p className="text-slate-700">Os arquivos enviados ao PDF.it sao processados de forma segura e removidos automaticamente apos o termino da sua sessao. Nao armazenamos, revisamos ou compartilhamos o conteudo dos seus arquivos. Consulte nossa <a href="/br/politica-de-privacidade" className="text-orange-500 hover:text-orange-600 font-medium">Politica de Privacidade</a> para mais detalhes.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">4. Propriedade Intelectual</h3>
                    <p className="text-slate-700 mb-4">O Servico (incluindo o site, software, design, logos e marca) e propriedade do PDF.it e protegido por leis de propriedade intelectual. Voce nao pode copiar, modificar, distribuir, vender ou licenciar qualquer parte do Servico sem nossa permissao por escrito.</p>
                    <p className="text-slate-700">Seus resultados: Voce e proprietario dos documentos que envia e dos arquivos que baixa, sujeito aos direitos que voce ja possui sobre o conteudo original.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">5. Isencao de Responsabilidade</h3>
                    <p className="text-slate-700">O Servico e fornecido "como esta" e "conforme disponivel". Nao garantimos que o Servico sera ininterrupto, livre de erros, ou que os resultados serao perfeitamente precisos ou adequados para todo proposito. Voce e responsavel por revisar os resultados antes de usa-los para propositos importantes, legais ou profissionais.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">6. Limitacao de Responsabilidade</h3>
                    <p className="text-slate-700">Na maxima extensao permitida por lei, o PDF.it nao sera responsavel por danos indiretos, incidentais, especiais, consequentes ou punitivos, nem por qualquer perda de dados, lucros, receitas ou negocios decorrentes do seu uso (ou incapacidade de usar) o Servico.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">7. Reembolsos</h3>
                    <p className="text-slate-700">Oferecemos reembolsos completos dentro de 7 dias apos a compra, sem perguntas. Para solicitar um reembolso, entre em contato conosco em{" "}
                      <a href="mailto:contact@pdf.it.com" className="text-orange-500 hover:text-orange-600 font-medium">
                        contact@pdf.it.com
                      </a>.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">8. Rescisao</h3>
                    <p className="text-slate-700">Podemos suspender ou encerrar o acesso ao Servico se acreditarmos que voce violou estes Termos, abusou do Servico ou criou risco para o PDF.it ou outros usuarios.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">9. Servicos e Links de Terceiros</h3>
                    <p className="text-slate-700">O Servico pode incluir servicos de terceiros (como analiticas ou publicidade) e links para sites de terceiros. Nao somos responsaveis pelo conteudo, politicas ou praticas de terceiros.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">10. Alteracoes a Estes Termos</h3>
                    <p className="text-slate-700">Podemos atualizar estes Termos periodicamente. As alteracoes entram em vigor quando publicadas. O uso continuado do Servico apos a publicacao das alteracoes constitui aceitacao dos Termos revisados.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">11. Contato</h3>
                    <p className="text-slate-700">
                      Duvidas sobre estes Termos? Entre em contato conosco em{" "}
                      <a href="mailto:suporte@pdf.it.com" className="text-orange-500 hover:text-orange-600 font-medium">
                        suporte@pdf.it.com
                      </a>.
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <FileText className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-orange-900 mb-2">Gratis e Acessivel</h4>
                        <p className="text-orange-800 text-sm leading-relaxed">
                          Comece gratis com ferramentas essenciais de PDF. Atualize a qualquer momento para obter limites maiores, funcoes avancadas e suporte prioritario.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}

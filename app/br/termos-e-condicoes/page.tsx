import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { FileText, Shield } from "lucide-react"

export const metadata = {
  title: "Termos e Condicoes — PDF.it",
  description: "Termos e condicoes para usar as ferramentas e servicos do PDF.it.",
}

export default function TermsConditionsPagePt() {
  return (
    <div className="min-h-screen bg-[#0E0F1E]">
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="relative bg-[#0E0F1E] text-white py-16 overflow-hidden">
          {/* Radial gradients */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(20,216,196,0.08),transparent_70%)]" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(107,124,255,0.06),transparent_70%)]" />
          </div>
          {/* Grain overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none">
            <filter id="grain-terms-br">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain-terms-br)" />
          </svg>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-b from-[#14D8C4]/20 to-[#14D8C4]/5 border border-[#14D8C4]/20">
                <FileText className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Termos e Condicoes</h1>
              <p className="text-xl text-slate-300">
                Os termos de servico para usar as ferramentas e servicos do PDF.it.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-[#F3F4FF] py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Dark container with radial gradients */}
              <div className="relative bg-[#0E0F1E] rounded-3xl overflow-hidden">
                {/* Radial gradients inside container */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(20,216,196,0.05),transparent_70%)]" />
                  <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(107,124,255,0.04),transparent_70%)]" />
                </div>

                {/* Metallic gradient border card */}
                <div className="relative m-6 lg:m-8 rounded-2xl p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-white/10">
                  <div className="bg-white/[0.07] backdrop-blur-xl rounded-2xl p-8 lg:p-12">

                    <div className="space-y-2 mb-8">
                      <h2 className="text-2xl font-bold text-white">Termos e Condicoes — PDF.it</h2>
                      <p className="text-slate-500 text-sm"><strong>Data de vigencia:</strong> 1 de janeiro de 2024</p>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-10">
                      Bem-vindo ao PDF.it ("nos", "nosso"). Ao acessar ou usar nosso site e ferramentas (o "Servico"), voce concorda com estes Termos e Condicoes ("Termos"). Se voce nao concordar, nao use o Servico.
                    </p>

                    <div className="space-y-10">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">1. Uso do Servico</h3>
                        <p className="text-slate-400 mb-4">O PDF.it fornece ferramentas online para converter, comprimir e processar documentos. Voce concorda em usar o Servico apenas para propositos legais e de acordo com estes Termos.</p>
                        <p className="text-slate-300 font-semibold mb-2">Voce nao deve:</p>
                        <ul className="space-y-2 text-slate-400">
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 flex-shrink-0">&#9679;</span>Usar o Servico para violar qualquer lei ou regulamento</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 flex-shrink-0">&#9679;</span>Enviar ou processar conteudo sobre o qual voce nao tenha os direitos ou permissoes necessarios</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 flex-shrink-0">&#9679;</span>Tentar interromper, abusar, sobrecarregar ou fazer engenharia reversa do Servico</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 flex-shrink-0">&#9679;</span>Usar scraping automatizado ou solicitacoes automatizadas excessivas sem permissao</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">2. Contas, Planos e Limites</h3>
                        <p className="text-slate-400">Algumas funcoes estao disponiveis em planos gratuitos e pagos. O uso gratuito inclui limites de conversoes por dia (10/dia) e tamanho de arquivo (25MB). Os planos pagos fornecem limites maiores e funcoes adicionais (200MB, conversoes ilimitadas). Os detalhes do plano e precos podem mudar periodicamente e serao publicados no site.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">3. Seu Conteudo e Arquivos</h3>
                        <p className="text-slate-400 mb-4">Voce mantem todos os direitos sobre os arquivos e conteudo que envia ou processa ("Conteudo do Usuario"). Voce declara e garante que possui todos os direitos necessarios para usar seu Conteudo do Usuario com o Servico.</p>
                        <p className="text-slate-400">Os arquivos enviados ao PDF.it sao processados de forma segura e removidos automaticamente apos o termino da sua sessao. Nao armazenamos, revisamos ou compartilhamos o conteudo dos seus arquivos. Consulte nossa <a href="/br/politica-de-privacidade" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">Politica de Privacidade</a> para mais detalhes.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">4. Propriedade Intelectual</h3>
                        <p className="text-slate-400 mb-4">O Servico (incluindo o site, software, design, logos e marca) e propriedade do PDF.it e protegido por leis de propriedade intelectual. Voce nao pode copiar, modificar, distribuir, vender ou licenciar qualquer parte do Servico sem nossa permissao por escrito.</p>
                        <p className="text-slate-400">Seus resultados: Voce e proprietario dos documentos que envia e dos arquivos que baixa, sujeito aos direitos que voce ja possui sobre o conteudo original.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">5. Isencao de Responsabilidade</h3>
                        <p className="text-slate-400">O Servico e fornecido "como esta" e "conforme disponivel". Nao garantimos que o Servico sera ininterrupto, livre de erros, ou que os resultados serao perfeitamente precisos ou adequados para todo proposito. Voce e responsavel por revisar os resultados antes de usa-los para propositos importantes, legais ou profissionais.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">6. Limitacao de Responsabilidade</h3>
                        <p className="text-slate-400">Na maxima extensao permitida por lei, o PDF.it nao sera responsavel por danos indiretos, incidentais, especiais, consequentes ou punitivos, nem por qualquer perda de dados, lucros, receitas ou negocios decorrentes do seu uso (ou incapacidade de usar) o Servico.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">7. Reembolsos</h3>
                        <p className="text-slate-400">Oferecemos reembolsos completos dentro de 7 dias apos a compra, sem perguntas. Para solicitar um reembolso, entre em contato conosco em{" "}
                          <a href="mailto:contact@pdf.it.com" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">
                            contact@pdf.it.com
                          </a>.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">8. Rescisao</h3>
                        <p className="text-slate-400">Podemos suspender ou encerrar o acesso ao Servico se acreditarmos que voce violou estes Termos, abusou do Servico ou criou risco para o PDF.it ou outros usuarios.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">9. Servicos e Links de Terceiros</h3>
                        <p className="text-slate-400">O Servico pode incluir servicos de terceiros (como analiticas ou publicidade) e links para sites de terceiros. Nao somos responsaveis pelo conteudo, politicas ou praticas de terceiros.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">10. Alteracoes a Estes Termos</h3>
                        <p className="text-slate-400">Podemos atualizar estes Termos periodicamente. As alteracoes entram em vigor quando publicadas. O uso continuado do Servico apos a publicacao das alteracoes constitui aceitacao dos Termos revisados.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">11. Contato</h3>
                        <p className="text-slate-400">
                          Duvidas sobre estes Termos? Entre em contato conosco em{" "}
                          <a href="mailto:suporte@pdf.it.com" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">
                            suporte@pdf.it.com
                          </a>.
                        </p>
                      </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10">
                      <div className="bg-[#14D8C4]/5 border border-[#14D8C4]/20 rounded-xl p-6">
                        <div className="flex items-start gap-3">
                          <FileText className="h-6 w-6 text-[#14D8C4] mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-white mb-2">Gratis e Acessivel</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                              Comece gratis com ferramentas essenciais de PDF. Atualize a qualquer momento para obter limites maiores, funcoes avancadas e suporte prioritario.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy footer */}
        <section className="bg-[#0E0F1E] py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2">
              <Shield className="h-4 w-4 text-slate-500" />
              <p className="text-slate-500 text-xs">Arquivos excluidos imediatamente apos o download.</p>
            </div>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}

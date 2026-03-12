import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { Shield } from "lucide-react"

export const metadata = {
  title: "Politica de Privacidade — OmnisPDF",
  description: "Saiba como o OmnisPDF coleta, usa e protege seus dados.",
}

export default function PrivacyPolicyPagePt() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Politica de Privacidade</h1>
              <p className="text-xl text-slate-300">
                Sua privacidade importa. Veja exatamente como tratamos seus dados.
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
                  <h2 className="text-2xl font-bold text-slate-900">Politica de Privacidade — OmnisPDF</h2>
                  <p className="text-slate-500 text-sm"><strong>Data de vigencia:</strong> 1 de janeiro de 2024</p>
                </div>

                <p className="text-slate-700 leading-relaxed mb-10">
                  OmnisPDF ("nos", "nosso") valoriza sua privacidade. Esta Politica de Privacidade explica quais informacoes coletamos, como as usamos e as opcoes que voce tem.
                </p>

                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">1. Informacoes que Coletamos</h3>
                    <p className="text-slate-700 font-semibold mb-2">A. Dados de uso do site (coletados automaticamente)</p>
                    <p className="text-slate-700 mb-4">Quando voce visita o OmnisPDF, nos e nossos provedores de servicos podemos coletar informacoes basicas de uso como endereco IP (usado para aproximar localizacao), tipo de dispositivo e navegador, sistema operacional, paginas visitadas, URL de referencia e marcas de tempo de sessao.</p>
                    <p className="text-slate-700 font-semibold mb-2">B. Informacoes que voce fornece</p>
                    <p className="text-slate-700 mb-4">Se voce entrar em contato conosco, podemos coletar seu endereco de email e o conteudo da sua mensagem.</p>
                    <p className="text-slate-700 font-semibold mb-2">C. Seus arquivos</p>
                    <p className="text-slate-700">Os arquivos que voce envia sao transmitidos de forma segura aos nossos servidores de processamento para realizar a conversao ou operacao solicitada. Os arquivos sao removidos automaticamente de nossos servidores apos o termino da sua sessao. Nao armazenamos, revisamos ou compartilhamos o conteudo dos seus arquivos.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">2. Como Usamos as Informacoes</h3>
                    <ul className="space-y-2 text-slate-700 list-disc list-inside">
                      <li>Operar e manter o site e as ferramentas</li>
                      <li>Melhorar o desempenho, a confiabilidade e a experiencia do usuario</li>
                      <li>Compreender padroes de uso e resolver problemas</li>
                      <li>Responder a consultas e solicitacoes de suporte</li>
                      <li>Prevenir fraude, abuso e incidentes de seguranca</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">3. Cookies, Analiticas e Publicidade</h3>
                    <p className="text-slate-700 mb-4">Usamos cookies e tecnologias semelhantes para funcionalidade essencial do site, analiticas (compreensao do trafego e uso de funcoes) e publicidade atraves do Google AdSense.</p>
                    <p className="text-slate-700">Voce pode controlar os cookies atraves das configuracoes do seu navegador. Dependendo da sua localizacao, voce podera ver um banner de consentimento de cookies para gerenciar suas preferencias.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">4. Servicos de Terceiros</h3>
                    <p className="text-slate-700 mb-2">Usamos servicos de terceiros incluindo:</p>
                    <ul className="space-y-2 text-slate-700 list-disc list-inside">
                      <li>Google Analytics — analiticas do site</li>
                      <li>Google AdSense — publicidade</li>
                    </ul>
                    <p className="text-slate-700 mt-4">Esses provedores podem definir cookies e coletar informacoes sob suas proprias politicas de privacidade. Voce pode revisar e gerenciar suas preferencias atraves das <a href="https://myaccount.google.com/data-and-privacy" className="text-orange-500 hover:text-orange-600">configuracoes de privacidade e anuncios do Google</a>.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">5. Retencao de Dados</h3>
                    <p className="text-slate-700 mb-2">Os arquivos enviados para processamento sao removidos automaticamente de nossos servidores apos o termino da sua sessao.</p>
                    <p className="text-slate-700">Os dados de uso do site sao conservados pelo tempo necessario para operar e melhorar o OmnisPDF. As mensagens de suporte sao conservadas conforme necessario para responder e manter o historico de suporte.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">6. Seguranca de Dados</h3>
                    <p className="text-slate-700">Todas as transferencias de arquivos usam criptografia SSL. Aplicamos medidas administrativas, tecnicas e organizacionais razoaveis para proteger as informacoes. No entanto, nenhum metodo de transmissao ou armazenamento e 100% seguro.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">7. Privacidade de Menores</h3>
                    <p className="text-slate-700">O OmnisPDF nao e destinado a menores de 13 anos. Nao coletamos intencionalmente informacoes pessoais de menores.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">8. Seus Direitos e Opcoes</h3>
                    <p className="text-slate-700 mb-2">Dependendo de onde voce mora, voce pode ter direitos de acessar, excluir ou corrigir certas informacoes pessoais. Voce tambem pode:</p>
                    <ul className="space-y-2 text-slate-700 list-disc list-inside">
                      <li>Gerenciar cookies no seu navegador</li>
                      <li>Ajustar a personalizacao de anuncios nas configuracoes de anuncios do Google</li>
                      <li>Entrar em contato conosco para solicitar a exclusao de mensagens de suporte que nos tenha enviado</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">9. Alteracoes a Esta Politica</h3>
                    <p className="text-slate-700">Podemos atualizar esta politica periodicamente. As atualizacoes serao publicadas aqui com uma Data de vigencia revisada.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">10. Fale Conosco</h3>
                    <p className="text-slate-700">
                      Se voce tiver duvidas sobre esta Politica de Privacidade, entre em contato conosco em{" "}
                      <a href="mailto:suporte@omnispdf.com" className="text-orange-500 hover:text-orange-600 font-medium">
                        suporte@omnispdf.com
                      </a>.
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">Seus Arquivos Sao Removidos Apos Cada Sessao</h4>
                        <p className="text-blue-800 text-sm leading-relaxed">
                          Os arquivos enviados ao OmnisPDF sao processados de forma segura e removidos automaticamente apos o termino da sua sessao. Nao armazenamos, revisamos ou compartilhamos seus documentos.
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

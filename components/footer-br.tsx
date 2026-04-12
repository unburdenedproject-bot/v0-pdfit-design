import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react"

function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function FooterBr() {
  return (
    <footer className="bg-[#191B4D] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/br" className="inline-block mb-4">
              <img src="/logo.svg" alt="PDF.it" style={{height: '28px', width: 'auto'}} />
            </Link>
            <p className="text-[#A5B4FC] mb-6 leading-relaxed">
              Converta, comprima, una, divida, digitalize e proteja arquivos PDF em segundos. Ferramentas simples que funcionam em qualquer dispositivo.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/pdfit" target="_blank" rel="noopener noreferrer" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors" aria-label="Siga-nos no Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/pdfit" target="_blank" rel="noopener noreferrer" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors" aria-label="Siga-nos no X">
                <XLogo className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/pdfit" target="_blank" rel="noopener noreferrer" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors" aria-label="Siga-nos no Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/pdfit" target="_blank" rel="noopener noreferrer" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors" aria-label="Siga-nos no LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Ferramentas */}
          <div>
            <h3 className="font-bold text-white mb-4">Ferramentas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/br/pdf-para-jpg" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                  PDF para JPG
                </Link>
              </li>
              <li>
                <Link href="/br/unir-pdf" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                  Unir PDF
                </Link>
              </li>
              <li>
                <Link href="/br/dividir-pdf" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                  Dividir PDF
                </Link>
              </li>
              <li>
                <Link href="/br/comprimir-pdf" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                  Comprimir PDF
                </Link>
              </li>
              <li>
                <Link href="/br/proteger-pdf" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                  Proteger PDF
                </Link>
              </li>
              <li>
                <Link href="/br/scanner-ocr" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                  Scanner OCR
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-bold text-white mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/br/sobre" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/br/contato" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/br/precos" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                  Precos
                </Link>
              </li>
            </ul>

            <h3 className="font-bold text-white mb-4 mt-6">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/br/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                  Politica de Privacidade
                </a>
              </li>
              <li>
                <a href="/br/termos-e-condicoes" target="_blank" rel="noopener noreferrer" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                  Termos e Condicoes
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-white mb-4">Fale Conosco</h3>
            <div className="space-y-3">
              <a
                href="mailto:suporte@pdf.it.com"
                className="flex items-center gap-2 text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm group"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>suporte@pdf.it.com</span>
              </a>
              <p className="text-[#A5B4FC] text-xs">Respondemos em menos de 24 horas</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#252A6A] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#A5B4FC] text-sm">&copy; 2024 PDF.it. Feito para profissionais, escolhido por profissionais.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/br/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="text-[#A5B4FC] hover:text-[#14D8C4] text-sm transition-colors">
              Privacidade
            </a>
            <a href="/br/termos-e-condicoes" target="_blank" rel="noopener noreferrer" className="text-[#A5B4FC] hover:text-[#14D8C4] text-sm transition-colors">
              Termos
            </a>
            <Link href="/" className="text-[#A5B4FC] hover:text-[#14D8C4] text-sm transition-colors">
              English
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

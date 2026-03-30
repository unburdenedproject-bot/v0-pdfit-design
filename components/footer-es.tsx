import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

export function FooterEs() {
  return (
    <footer className="bg-[#191B4D] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/es" className="inline-block mb-4">
              <span style={{fontWeight: 800, color: '#ffffff', fontSize: '22px', letterSpacing: '-0.5px'}}>PDF<span style={{color: '#14D8C4', fontWeight: 400}}>.it</span></span>
            </Link>
            <p className="text-[#A5B4FC] mb-6 leading-relaxed">
              Convierte, comprime, une, divide, escanea y protege archivos PDF en segundos. Herramientas simples que funcionan en cualquier dispositivo.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/pdfit" target="_blank" rel="noopener noreferrer" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors" aria-label="Síguenos en Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/pdfit" target="_blank" rel="noopener noreferrer" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors" aria-label="Síguenos en Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/pdfit" target="_blank" rel="noopener noreferrer" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors" aria-label="Síguenos en Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/pdfit" target="_blank" rel="noopener noreferrer" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors" aria-label="Síguenos en LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Herramientas */}
          <div>
            <h3 className="font-bold text-white mb-4">Herramientas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/es/pdf-a-jpg" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                  PDF a JPG
                </Link>
              </li>
              <li>
                <Link href="/es/unir-pdf" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                  Unir PDF
                </Link>
              </li>
              <li>
                <Link href="/es/dividir-pdf" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                  Dividir PDF
                </Link>
              </li>
              <li>
                <Link href="/es/comprimir-pdf" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                  Comprimir PDF
                </Link>
              </li>
              <li>
                <Link href="/es/proteger-pdf" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                  Proteger PDF
                </Link>
              </li>
              <li>
                <Link href="/es/escaner-ocr" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                  Escáner OCR
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-bold text-white mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/es/acerca" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/es/contacto" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>

            <h3 className="font-bold text-white mb-4 mt-6">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/es/politica-de-privacidad" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/es/terminos-y-condiciones" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-white mb-4">Contáctanos</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@pdf.it.com"
                className="flex items-center gap-2 text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm group"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>contact@pdf.it.com</span>
              </a>
              <p className="text-[#A5B4FC] text-xs">Respondemos en menos de 24 horas</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#252A6A] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#A5B4FC] text-sm">© 2024 PDF.it. Creado para profesionales, elegido por profesionales.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/es/politica-de-privacidad" className="text-[#A5B4FC] hover:text-[#14D8C4] text-sm transition-colors">
              Privacidad
            </Link>
            <Link href="/es/terminos-y-condiciones" className="text-[#A5B4FC] hover:text-[#14D8C4] text-sm transition-colors">
              Términos
            </Link>
            <Link href="/" className="text-[#A5B4FC] hover:text-[#14D8C4] text-sm transition-colors">
              English
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

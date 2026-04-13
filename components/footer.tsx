import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react"

function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const footerLinks = {
  Tools: [
    "PDF to JPG",
    "Merge PDF",
    "Split PDF",
    "Compress PDF",
    "Protect PDF",
    "OCR Scanner",
  ],
  Company: ["About Us", "Contact"],
  Support: ["Privacy Policy", "Terms & Conditions"],
}

export function Footer() {
  return (
    <footer className="bg-[#191B4D] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <img src="/logo.svg" alt="PDF.it" width={57} height={28} loading="lazy" decoding="async" style={{height: '28px', width: 'auto'}} />
            </Link>
            <p className="text-[#A5B4FC] mb-6 leading-relaxed">
              Convert, compress, merge, split, OCR, and protect PDFs in seconds. Simple, browser-based tools that work on any device.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/pdfit" target="_blank" rel="noopener noreferrer" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors" aria-label="Follow us on Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/pdfit" target="_blank" rel="noopener noreferrer" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors" aria-label="Follow us on X">
                <XLogo className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/pdfit" target="_blank" rel="noopener noreferrer" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors" aria-label="Follow us on Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/pdfit" target="_blank" rel="noopener noreferrer" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors" aria-label="Follow us on LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    {link === "About Us" ? (
                      <Link href="/about" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                        {link}
                      </Link>
                    ) : link === "Contact" ? (
                      <Link href="/contact" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                        {link}
                      </Link>
                    ) : link === "Privacy Policy" ? (
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm"
                      >
                        {link}
                      </a>
                    ) : link === "Terms & Conditions" ? (
                      <a
                        href="/terms-conditions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm"
                      >
                        {link}
                      </a>
                    ) : link === "PDF to JPG" ? (
                      <Link href="/pdf-to-jpg" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                        {link}
                      </Link>
                    ) : link === "Merge PDF" ? (
                      <Link href="/merge-pdf" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                        {link}
                      </Link>
                    ) : link === "Split PDF" ? (
                      <Link href="/split-pdf" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                        {link}
                      </Link>
                    ) : link === "Compress PDF" ? (
                      <Link href="/compress-pdf" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                        {link}
                      </Link>
                    ) : link === "Protect PDF" ? (
                      <Link href="/protect-pdf" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                        {link}
                      </Link>
                    ) : link === "OCR Scanner" ? (
                      <Link href="/ocr-scanner" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                        {link}
                      </Link>
                    ) : (
                      <Link href="#" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm">
                        {link}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@pdf.it.com"
                className="flex items-center gap-2 text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm group"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>contact@pdf.it.com</span>
              </a>
              <p className="text-[#A5B4FC] text-xs">We typically respond within 24 hours</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#252A6A] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#A5B4FC] text-sm">© 2024 PDF.it. Built for professionals, trusted by professionals.</p>
        </div>
      </div>
    </footer>
  )
}

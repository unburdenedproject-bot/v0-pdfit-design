import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

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
            <div className="mb-4">
              <span style={{fontWeight: 800, color: '#ffffff', fontSize: '22px', letterSpacing: '-0.5px'}}>PDF<span style={{color: '#14D8C4', fontWeight: 400}}>.it</span></span>
            </div>
            <p className="text-[#A5B4FC] mb-6 leading-relaxed">
              Convert, compress, merge, split, OCR, and protect PDFs in seconds. Simple, browser-based tools that work on any device.
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors" aria-label="Follow us on Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors" aria-label="Follow us on Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors" aria-label="Follow us on Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors" aria-label="Follow us on LinkedIn">
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
                      <Link
                        href="/privacy-policy"
                        className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm"
                      >
                        {link}
                      </Link>
                    ) : link === "Terms & Conditions" ? (
                      <Link
                        href="/terms-conditions"
                        className="text-[#A5B4FC] hover:text-[#14D8C4] transition-colors text-sm"
                      >
                        {link}
                      </Link>
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
          <p className="text-[#A5B4FC] text-sm">© {new Date().getFullYear()} PDF.it. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-[#A5B4FC] hover:text-[#14D8C4] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-[#A5B4FC] hover:text-[#14D8C4] text-sm transition-colors">
              Terms & Conditions
            </Link>
            <a
              href="mailto:contact@pdf.it.com"
              className="text-[#A5B4FC] hover:text-[#14D8C4] text-sm transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield } from "lucide-react"

export const metadata = {
  title: "Privacy Policy — PDF.it",
  description: "Learn how PDF.it collects, uses, and protects your data.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-[#0E0F1E] text-white py-16 overflow-hidden">
          {/* Radial gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(20,216,196,0.12)_0%,_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(107,124,255,0.08)_0%,_transparent_50%)]" />
          {/* Grain */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
            <filter id="heroGrain">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#heroGrain)" />
          </svg>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-[#14D8C4]/20 to-[#0E0F1E] border border-[#14D8C4]/20 shadow-[0_0_30px_rgba(20,216,196,0.15)]">
                <Shield className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4 text-white">Privacy Policy</h1>
              <p className="text-xl text-slate-300">
                Your privacy matters. Here is exactly how we handle your data.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-[#F3F4FF] py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Dark sub-section container */}
              <div className="relative bg-[#0E0F1E] rounded-3xl p-6 lg:p-10 overflow-hidden">
                {/* Radial gradients */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(20,216,196,0.06)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(107,124,255,0.06)_0%,_transparent_50%)]" />

                {/* Metallic gradient border wrapper */}
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10">
                  {/* Glassmorphism inner card */}
                  <div className="rounded-2xl bg-white/[0.07] backdrop-blur-xl p-8 lg:p-12">
                    <div className="space-y-2 mb-8">
                      <h2 className="text-2xl font-bold text-white">Privacy Policy — PDF.it</h2>
                      <p className="text-slate-500 text-sm"><strong>Effective Date:</strong> January 1, 2024</p>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-10">
                      PDF.it ("we," "us," "our") values your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have.
                    </p>

                    <div className="space-y-10">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">1. Information We Collect</h3>
                        <p className="text-slate-300 font-semibold mb-2">A. Site usage data (collected automatically)</p>
                        <p className="text-slate-400 mb-4">When you visit PDF.it, we and our service providers may collect basic usage information such as IP address (used to approximate location), device and browser type, operating system, pages viewed, referral URL, and session timestamps.</p>
                        <p className="text-slate-300 font-semibold mb-2">B. Information you provide</p>
                        <p className="text-slate-400 mb-4">If you contact us, we may collect your email address and the content of your message.</p>
                        <p className="text-slate-300 font-semibold mb-2">C. Your files</p>
                        <p className="text-slate-400">Files you upload are transmitted securely to our processing servers to perform the requested conversion or operation. Files are automatically deleted from our servers after your session ends. We do not store, review, or share your file contents.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">2. How We Use Information</h3>
                        <ul className="space-y-2 text-slate-400">
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Operate and maintain the website and tools</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Improve performance, reliability, and user experience</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Understand usage patterns and debug issues</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Respond to inquiries and support requests</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Prevent fraud, abuse, and security incidents</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">3. Cookies, Analytics, and Advertising</h3>
                        <p className="text-slate-400 mb-4">We use cookies and similar technologies for essential site functionality, analytics (understanding traffic and feature usage), and advertising via Google AdSense.</p>
                        <p className="text-slate-400">You can control cookies through your browser settings. Depending on your location, you may see a cookie consent banner to manage your preferences.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">4. Third-Party Services</h3>
                        <p className="text-slate-400 mb-2">We use third-party services including:</p>
                        <ul className="space-y-2 text-slate-400">
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Google Analytics — site analytics</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Google AdSense — advertising</li>
                        </ul>
                        <p className="text-slate-400 mt-4">These providers may set cookies and collect information under their own privacy policies. You can review and manage your preferences through <a href="https://myaccount.google.com/data-and-privacy" className="text-[#14D8C4] hover:text-[#2EE6D6]">Google's privacy and ad settings</a>.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">5. Data Retention</h3>
                        <p className="text-slate-400 mb-2">Files uploaded for processing are deleted from our servers automatically after your session ends.</p>
                        <p className="text-slate-400">Site usage data is retained as long as necessary to operate and improve PDF.it. Support messages are retained as needed to respond and maintain support history.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">6. Data Security</h3>
                        <p className="text-slate-400">All file transfers use SSL encryption. We apply reasonable administrative, technical, and organizational measures to protect information. However, no method of transmission or storage is 100% secure.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">7. Children's Privacy</h3>
                        <p className="text-slate-400">PDF.it is not intended for children under 13. We do not knowingly collect personal information from children.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">8. Your Rights and Choices</h3>
                        <p className="text-slate-400 mb-2">Depending on where you live, you may have rights to access, delete, or correct certain personal information. You can also:</p>
                        <ul className="space-y-2 text-slate-400">
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Manage cookies in your browser</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Adjust ad personalization in Google's ad settings</li>
                          <li className="flex items-start gap-2"><span className="text-[#14D8C4] mt-1.5 text-xs">&#9679;</span>Contact us to request deletion of support messages you've sent us</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">9. Changes to This Policy</h3>
                        <p className="text-slate-400">We may update this policy from time to time. Updates will be posted here with a revised Effective Date.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-4">10. Contact Us</h3>
                        <p className="text-slate-400">
                          If you have questions about this Privacy Policy, contact us at{" "}
                          <a href="mailto:contact@pdf.it.com" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">
                            contact@pdf.it.com
                          </a>.
                        </p>
                      </div>
                    </div>

                    {/* Privacy callout */}
                    <div className="mt-12 pt-8 border-t border-white/10">
                      <div className="bg-[#14D8C4]/5 border border-[#14D8C4]/20 rounded-xl p-6">
                        <div className="flex items-start gap-3">
                          <Shield className="h-6 w-6 text-[#14D8C4] mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-white mb-2">Your Files Are Deleted After Every Session</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                              Files uploaded to PDF.it are processed securely and deleted automatically after your session ends. We do not store, review, or share your documents.
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

        {/* Privacy footer section */}
        <section className="bg-[#0E0F1E] py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2">
              <Shield className="h-4 w-4 text-slate-500" />
              <p className="text-slate-500 text-xs">Files deleted immediately after download.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

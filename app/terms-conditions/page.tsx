import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText } from "lucide-react"

export const metadata = {
  title: "Terms & Conditions — PDF.it",
  description: "Terms and conditions for using PDF.it tools and services.",
}

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Terms & Conditions</h1>
              <p className="text-xl text-slate-300">
                The terms of service for using PDF.it tools and services.
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
                  <h2 className="text-2xl font-bold text-slate-900">Terms & Conditions — PDF.it</h2>
                  <p className="text-slate-500 text-sm"><strong>Effective Date:</strong> January 1, 2024</p>
                </div>

                <p className="text-slate-700 leading-relaxed mb-10">
                  Welcome to PDF.it ("we," "us," "our"). By accessing or using our website and tools (the "Service"), you agree to these Terms & Conditions ("Terms"). If you do not agree, do not use the Service.
                </p>

                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">1. Use of the Service</h3>
                    <p className="text-slate-700 mb-4">PDF.it provides online tools for converting, compressing, and processing documents. You agree to use the Service only for lawful purposes and in accordance with these Terms.</p>
                    <p className="text-slate-700 font-semibold mb-2">You must not:</p>
                    <ul className="space-y-2 text-slate-700 list-disc list-inside">
                      <li>Use the Service to violate any law or regulation</li>
                      <li>Upload or process content you do not have the rights or permission to use</li>
                      <li>Attempt to disrupt, abuse, overload, or reverse engineer the Service</li>
                      <li>Use automated scraping or excessive automated requests without permission</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">2. Accounts, Plans, and Limits</h3>
                    <p className="text-slate-700">Some features are available under free and paid plans. Free usage includes limits on conversions per day (10/day) and file size (25MB). Paid plans provide higher limits and additional features (200MB, unlimited conversions). Plan details and pricing may change from time to time and will be posted on the website.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">3. Your Content and Files</h3>
                    <p className="text-slate-700 mb-4">You retain all rights to files and content you upload or process ("User Content"). You represent and warrant that you have all necessary rights to use your User Content with the Service.</p>
                    <p className="text-slate-700">Files uploaded to PDF.it are processed securely and deleted automatically after your session ends. We do not store, review, or share your file contents. See our <a href="/privacy-policy" className="text-orange-500 hover:text-orange-600 font-medium">Privacy Policy</a> for full details.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">4. Intellectual Property</h3>
                    <p className="text-slate-700 mb-4">The Service (including the website, software, design, logos, and branding) is owned by PDF.it and protected by intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of the Service without our written permission.</p>
                    <p className="text-slate-700">Your outputs: You own the documents you upload and the files you download, subject to the rights you already hold in the original content.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">5. Disclaimers</h3>
                    <p className="text-slate-700">The Service is provided "as is" and "as available." We do not warrant that the Service will be uninterrupted, error-free, or that outputs will be perfectly accurate or suitable for every purpose. You are responsible for reviewing outputs before using them for important, legal, or professional purposes.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h3>
                    <p className="text-slate-700">To the maximum extent permitted by law, PDF.it will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data, profits, revenue, or business arising from your use (or inability to use) the Service.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">7. Refunds</h3>
                    <p className="text-slate-700">We offer full refunds within 7 days of purchase, no questions asked. To request a refund, contact us at{" "}
                      <a href="mailto:contact@pdf.it.com" className="text-orange-500 hover:text-orange-600 font-medium">
                        contact@pdf.it.com
                      </a>.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">8. Termination</h3>
                    <p className="text-slate-700">We may suspend or terminate access to the Service if we believe you have violated these Terms, abused the Service, or created risk for PDF.it or other users.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">9. Third-Party Services and Links</h3>
                    <p className="text-slate-700">The Service may include third-party services (such as analytics or advertising) and links to third-party websites. We are not responsible for third-party content, policies, or practices.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">10. Changes to These Terms</h3>
                    <p className="text-slate-700">We may update these Terms from time to time. Changes take effect when posted. Continued use of the Service after changes become effective constitutes acceptance of the revised Terms.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">11. Contact</h3>
                    <p className="text-slate-700">
                      Questions about these Terms? Contact us at{" "}
                      <a href="mailto:contact@pdf.it.com" className="text-orange-500 hover:text-orange-600 font-medium">
                        contact@pdf.it.com
                      </a>.
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <FileText className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-orange-900 mb-2">Free & Accessible</h4>
                        <p className="text-orange-800 text-sm leading-relaxed">
                          Start free with essential PDF tools. Upgrade anytime for higher limits, advanced features, and priority support.
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
      <Footer />
    </div>
  )
}

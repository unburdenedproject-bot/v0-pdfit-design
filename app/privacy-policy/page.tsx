import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield } from "lucide-react"

export const metadata = {
  title: "Privacy Policy — PDF.it",
  description: "Learn how PDF.it collects, uses, and protects your data.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Privacy Policy</h1>
              <p className="text-xl text-slate-300">
                Your privacy matters. Here is exactly how we handle your data.
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
                  <h2 className="text-2xl font-bold text-slate-900">Privacy Policy — PDF.it</h2>
                  <p className="text-slate-500 text-sm"><strong>Effective Date:</strong> January 1, 2024</p>
                </div>

                <p className="text-slate-700 leading-relaxed mb-10">
                  PDF.it ("we," "us," "our") values your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have.
                </p>

                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">1. Information We Collect</h3>
                    <p className="text-slate-700 font-semibold mb-2">A. Site usage data (collected automatically)</p>
                    <p className="text-slate-700 mb-4">When you visit PDF.it, we and our service providers may collect basic usage information such as IP address (used to approximate location), device and browser type, operating system, pages viewed, referral URL, and session timestamps.</p>
                    <p className="text-slate-700 font-semibold mb-2">B. Information you provide</p>
                    <p className="text-slate-700 mb-4">If you contact us, we may collect your email address and the content of your message.</p>
                    <p className="text-slate-700 font-semibold mb-2">C. Your files</p>
                    <p className="text-slate-700">Files you upload are transmitted securely to our processing servers to perform the requested conversion or operation. Files are automatically deleted from our servers after your session ends. We do not store, review, or share your file contents.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">2. How We Use Information</h3>
                    <ul className="space-y-2 text-slate-700 list-disc list-inside">
                      <li>Operate and maintain the website and tools</li>
                      <li>Improve performance, reliability, and user experience</li>
                      <li>Understand usage patterns and debug issues</li>
                      <li>Respond to inquiries and support requests</li>
                      <li>Prevent fraud, abuse, and security incidents</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">3. Cookies, Analytics, and Advertising</h3>
                    <p className="text-slate-700 mb-4">We use cookies and similar technologies for essential site functionality, analytics (understanding traffic and feature usage), and advertising via Google AdSense.</p>
                    <p className="text-slate-700">You can control cookies through your browser settings. Depending on your location, you may see a cookie consent banner to manage your preferences.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">4. Third-Party Services</h3>
                    <p className="text-slate-700 mb-2">We use third-party services including:</p>
                    <ul className="space-y-2 text-slate-700 list-disc list-inside">
                      <li>Google Analytics — site analytics</li>
                      <li>Google AdSense — advertising</li>
                    </ul>
                    <p className="text-slate-700 mt-4">These providers may set cookies and collect information under their own privacy policies. You can review and manage your preferences through <a href="https://myaccount.google.com/data-and-privacy" className="text-orange-500 hover:text-orange-600">Google's privacy and ad settings</a>.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">5. Data Retention</h3>
                    <p className="text-slate-700 mb-2">Files uploaded for processing are deleted from our servers automatically after your session ends.</p>
                    <p className="text-slate-700">Site usage data is retained as long as necessary to operate and improve PDF.it. Support messages are retained as needed to respond and maintain support history.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">6. Data Security</h3>
                    <p className="text-slate-700">All file transfers use SSL encryption. We apply reasonable administrative, technical, and organizational measures to protect information. However, no method of transmission or storage is 100% secure.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">7. Children's Privacy</h3>
                    <p className="text-slate-700">PDF.it is not intended for children under 13. We do not knowingly collect personal information from children.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">8. Your Rights and Choices</h3>
                    <p className="text-slate-700 mb-2">Depending on where you live, you may have rights to access, delete, or correct certain personal information. You can also:</p>
                    <ul className="space-y-2 text-slate-700 list-disc list-inside">
                      <li>Manage cookies in your browser</li>
                      <li>Adjust ad personalization in Google's ad settings</li>
                      <li>Contact us to request deletion of support messages you've sent us</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">9. Changes to This Policy</h3>
                    <p className="text-slate-700">We may update this policy from time to time. Updates will be posted here with a revised Effective Date.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">10. Contact Us</h3>
                    <p className="text-slate-700">
                      If you have questions about this Privacy Policy, contact us at{" "}
                      <a href="mailto:contact@pdf.it.com" className="text-orange-500 hover:text-orange-600 font-medium">
                        contact@pdf.it.com
                      </a>.
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">Your Files Are Deleted After Every Session</h4>
                        <p className="text-blue-800 text-sm leading-relaxed">
                          Files uploaded to PDF.it are processed securely and deleted automatically after your session ends. We do not store, review, or share your documents.
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

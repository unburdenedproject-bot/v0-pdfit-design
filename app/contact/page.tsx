"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, CheckCircle, AlertCircle, Send, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setHasError(false)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!response.ok) {
        throw new Error("Failed to send")
      }
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setHasError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Get in Touch</h1>
              <p className="text-xl text-slate-300">
                Have questions? We're here to help! Reach out to our support team.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>

                    {/* Primary Email */}
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-6 mb-6">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-orange-900 mb-1">Email Support</h3>
                          <a
                            href="mailto:contact@omnispdf.com"
                            className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors"
                          >
                            contact@omnispdf.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-orange-800">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm font-medium">We typically respond within 24 hours</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">What can we help you with?</h3>
                        <ul className="space-y-2 text-slate-600">
                          <li>• Technical support with PDF tools</li>
                          <li>• Questions about Pro features</li>
                          <li>• Bug reports and feedback</li>
                          <li>• Business partnerships</li>
                          <li>• General inquiries</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-bold text-blue-900 mb-2">Quick Response Tips</h4>
                        <p className="text-blue-800 text-sm">
                          For faster support, please include details about your browser, file type, and any error
                          messages you encountered.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>

                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                        <p className="text-slate-600 mb-4">
                          Thank you for contacting us. We'll get back to you within 24 hours.
                        </p>
                        <p className="text-sm text-slate-500 mb-6">
                          You can also reach us directly at{" "}
                          <a
                            href="mailto:contact@omnispdf.com"
                            className="text-orange-500 hover:text-orange-600 font-medium"
                          >
                            contact@omnispdf.com
                          </a>
                        </p>
                        <Button
                          onClick={() => setIsSubmitted(false)}
                          variant="outline"
                          className="bg-white text-slate-800 border-slate-300"
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">
                              Your Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                              placeholder="Enter your full name"
                            />
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">
                              Your Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                              placeholder="Enter your email address"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm font-bold text-slate-900 mb-2">
                            Subject <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                          >
                            <option value="">Select a topic</option>
                            <option value="technical-support">Technical Support</option>
                            <option value="pro-features">Pro Features Question</option>
                            <option value="bug-report">Bug Report</option>
                            <option value="feature-request">Feature Request</option>
                            <option value="business-inquiry">Business Inquiry</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">
                            Message <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-vertical"
                            placeholder="Tell us about your question, feedback, or issue..."
                          />
                        </div>

                        {hasError && (
                          <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
                            <AlertCircle className="h-5 w-5 flex-shrink-0" />
                            <span className="text-sm">
                              There was an error sending your message. Please try again or email us directly at{" "}
                              <a href="mailto:contact@omnispdf.com" className="underline">
                                contact@omnispdf.com
                              </a>
                            </span>
                          </div>
                        )}

                        <Button
                          type="submit"
                          disabled={
                            isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message
                          }
                          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <Send className="h-4 w-4 mr-2 animate-pulse" />
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>

                        <p className="text-center text-sm text-slate-500">
                          Or email us directly at{" "}
                          <a
                            href="mailto:contact@omnispdf.com"
                            className="text-orange-500 hover:text-orange-600 font-medium"
                          >
                            contact@omnispdf.com
                          </a>
                        </p>
                      </form>
                    )}
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

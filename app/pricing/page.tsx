"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly")

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Choose Your Plan</h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Start free, upgrade when you need more.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Free Plan */}
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">Free</h2>
                    <div className="mb-6">
                      <span className="text-5xl font-black text-slate-900">$0</span>
                      <span className="text-xl text-slate-600">/month</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 text-lg">10 conversions per day</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 text-lg">Files up to 25MB</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 text-lg">Basic PDF tools only</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 text-lg">Standard processing</span>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <Link href="/dashboard">Get Started Free</Link>
                  </Button>
                </div>

                {/* Pro Plan */}
                <div className="bg-white rounded-2xl border-2 border-orange-500 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                  {/* Most Popular Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                      <Star className="h-4 w-4 fill-current" />
                      Most Popular
                    </div>
                  </div>

                  <div className="text-center mb-6 mt-4">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">Pro</h2>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center bg-slate-100 rounded-full p-1 mb-6">
                      <button
                        type="button"
                        onClick={() => setBilling("monthly")}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                          billing === "monthly"
                            ? "bg-white text-slate-900 shadow-sm"
                            : "text-slate-500 hover:text-slate-700"
                        }`}
                      >
                        Monthly
                      </button>
                      <button
                        type="button"
                        onClick={() => setBilling("annual")}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                          billing === "annual"
                            ? "bg-white text-slate-900 shadow-sm"
                            : "text-slate-500 hover:text-slate-700"
                        }`}
                      >
                        Annual
                        <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-0.5 rounded-full">
                          Save 2 months
                        </span>
                      </button>
                    </div>

                    {/* Dynamic Price */}
                    <div className="mb-2">
                      <span className="text-5xl font-black text-orange-500">
                        {billing === "monthly" ? "$7.99" : "$79.90"}
                      </span>
                      <span className="text-xl text-slate-600">
                        {billing === "monthly" ? "/month" : "/year"}
                      </span>
                    </div>
                    {billing === "annual" && (
                      <p className="text-sm text-slate-500">
                        Equivalent to $6.66/mo billed annually
                      </p>
                    )}
                  </div>

                  <div className="space-y-4 mb-8">
                    <p className="text-sm text-slate-500 font-medium">Everything in Free, plus:</p>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 text-lg font-medium">Unlimited conversions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 text-lg font-medium">Files up to 200MB</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 text-lg font-medium">All PDF tools</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 text-lg font-medium">Batch processing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 text-lg font-medium">Advanced controls</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 text-lg font-medium">Priority support</span>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <Link href={billing === "monthly" ? "/upgrade" : "/upgrade?billing=annual"}>
                      {billing === "monthly" ? "Upgrade to Pro" : "Upgrade Annually (save 2 months)"}
                    </Link>
                  </Button>
                </div>

                {/* Business Plan */}
                <div className="bg-white rounded-2xl border-2 border-slate-400 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                  {/* Coming Soon Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-slate-700 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                      Coming Soon
                    </div>
                  </div>

                  <div className="text-center mb-8 mt-4">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">Business</h2>
                    <div className="mb-2">
                      <span className="text-5xl font-black text-slate-700">$13.99</span>
                      <span className="text-xl text-slate-600">/month</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <p className="text-sm text-slate-500 font-medium">Everything in Pro, plus:</p>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 text-lg font-medium">Workflow automation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 text-lg font-medium">Table extraction to Excel</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 text-lg font-medium">PDF comparison</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 text-lg font-medium">eSign document signing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 text-lg font-medium">Invoice generator</span>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-slate-300 text-slate-500 font-bold py-4 text-lg rounded-xl cursor-not-allowed"
                    disabled
                  >
                    Coming Soon
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to get started?</h2>
              <p className="text-xl text-slate-600 mb-8">
                Start with 10 free conversions per day. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 text-lg rounded-xl"
                  asChild
                >
                  <Link href="/">Try Free Tools</Link>
                </Button>
                <Button
                  variant="outline"
                  className="bg-white text-slate-800 border-slate-300 hover:bg-slate-50 font-bold py-3 px-8 text-lg rounded-xl"
                  asChild
                >
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

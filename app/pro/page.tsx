import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Crown } from "lucide-react"

export default function ProPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Crown className="w-10 h-10 text-orange-500" />
          </div>
          <h1 className="text-3xl font-black text-[#111827] mb-2">
            This is a Pro feature
          </h1>
          <p className="text-lg text-[#6B7280] mb-8">
            Upgrade to Pro to unlock this tool — unlimited conversions, 200MB files, and all Pro features.
          </p>
          <Link
            href="/pricing"
            className="block w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-3 px-6 rounded-xl text-center transition-colors mb-3"
          >
            See Pro Plans
          </Link>
          <Link
            href="/login"
            className="block w-full bg-white hover:bg-gray-50 text-[#111827] font-bold py-3 px-6 rounded-xl text-center border border-gray-200 transition-colors mb-6"
          >
            Sign In
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

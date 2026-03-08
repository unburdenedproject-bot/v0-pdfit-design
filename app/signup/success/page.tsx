import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail } from "lucide-react"
import Link from "next/link"

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Mail className="h-6 w-6 text-orange-500" />
              </div>
              <CardTitle className="text-xl text-slate-800">Check your email</CardTitle>
              <CardDescription className="text-slate-500">
                We sent you a confirmation link
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 text-center leading-relaxed">
                {"You've successfully signed up. Please check your email to confirm your account before signing in."}
              </p>
              <div className="mt-6 text-center">
                <Link
                  href="/login"
                  className="text-sm text-orange-500 hover:text-orange-600 font-medium underline underline-offset-4"
                >
                  Back to sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

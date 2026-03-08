import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export const dynamic = "force-dynamic"

export default async function WhoAmIPage() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    redirect("/login")
  }

  const userEmail = (data.user.email || "").toLowerCase().trim()
  const rawEnv = process.env.ADMIN_EMAILS || ""
  const parsed = rawEnv
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)
  const isAdmin = parsed.includes(userEmail)

  return (
    <main className="max-w-xl mx-auto py-20 px-4 font-mono text-sm space-y-4">
      <h1 className="text-lg font-bold mb-6">Who Am I (debug)</h1>
      <p>
        <strong>Your email:</strong> {userEmail}
      </p>
      <p>
        <strong>ADMIN_EMAILS raw:</strong>{" "}
        {rawEnv || "(missing)"}
      </p>
      <p>
        <strong>ADMIN_EMAILS parsed:</strong>{" "}
        {parsed.length > 0 ? JSON.stringify(parsed) : "(empty)"}
      </p>
      <p>
        <strong>isAdmin:</strong>{" "}
        <span className={isAdmin ? "text-green-600" : "text-red-600"}>
          {String(isAdmin)}
        </span>
      </p>
    </main>
  )
}

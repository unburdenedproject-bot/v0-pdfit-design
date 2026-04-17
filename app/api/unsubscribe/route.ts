export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: NextRequest): Promise<Response> {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ success: true });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const cleanEmail = email.toLowerCase().trim();

    // Remove from newsletter subscribers
    await supabase
      .from("newsletter_subscribers")
      .delete()
      .eq("email", cleanEmail);

    // Also clean up any sent-email tracking so if they re-subscribe later
    // they get the full drip sequence again
    await supabase
      .from("newsletter_emails_sent")
      .delete()
      .eq("subscriber_email", cleanEmail);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unsubscribe error:", err);
    return NextResponse.json({ success: true }); // Always return success to user
  }
}

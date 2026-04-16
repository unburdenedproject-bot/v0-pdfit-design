export const runtime = "nodejs";
export const maxDuration = 60;

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { DRIP_EMAILS, getEligibleEmail } from "@/lib/newsletter-emails";

/**
 * Daily newsletter drip cron.
 *
 * Runs once per day. For each subscriber in `newsletter_subscribers`:
 *   1. Check which drip emails they've already received (via `newsletter_emails_sent`)
 *   2. Determine if they're eligible for the next email in the sequence
 *   3. Send ONE email per subscriber per day (never batches — spread over days)
 *   4. Record the send to prevent future duplicates
 *
 * Protected by CRON_SECRET. Configure in vercel.json:
 *   { "path": "/api/cron/newsletter-drip", "schedule": "0 16 * * *" }
 *   (runs at 16:00 UTC = 9 AM PT)
 */
export async function GET(request: NextRequest): Promise<Response> {
  // Verify cron secret
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendKey = process.env.RESEND_API_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
  }
  if (!resendKey) {
    return NextResponse.json({ error: "Resend not configured" }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const resend = new Resend(resendKey);

  // Fetch all subscribers
  const { data: subscribers, error: subError } = await supabase
    .from("newsletter_subscribers")
    .select("email, subscribed_at")
    .order("subscribed_at", { ascending: true });

  if (subError || !subscribers) {
    console.error("Failed to fetch subscribers:", subError);
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }

  // Fetch all sent records in one query (more efficient than per-subscriber)
  const { data: allSent } = await supabase
    .from("newsletter_emails_sent")
    .select("subscriber_email, email_slug");

  // Build a map: email → Set of sent slugs
  const sentMap = new Map<string, Set<string>>();
  if (allSent) {
    for (const row of allSent) {
      const set = sentMap.get(row.subscriber_email) || new Set();
      set.add(row.email_slug);
      sentMap.set(row.subscriber_email, set);
    }
  }

  let sent = 0;
  let skipped = 0;
  let errors = 0;

  for (const sub of subscribers) {
    const sentSlugs = sentMap.get(sub.email) || new Set();
    const eligible = getEligibleEmail(sub.subscribed_at, sentSlugs);

    if (!eligible) {
      skipped++;
      continue;
    }

    try {
      await resend.emails.send({
        from: "Paula from PDF.it <noreply@pdf.it.com>",
        to: sub.email,
        subject: eligible.subject,
        text: eligible.body(),
      });

      // Record the send
      await supabase.from("newsletter_emails_sent").upsert(
        {
          subscriber_email: sub.email,
          email_slug: eligible.slug,
        },
        { onConflict: "subscriber_email,email_slug" }
      );

      sent++;
    } catch (err) {
      console.error(`Failed to send ${eligible.slug} to ${sub.email}:`, err);
      errors++;
    }
  }

  const summary = `Newsletter drip: ${sent} sent, ${skipped} skipped (not yet eligible or fully dripped), ${errors} errors. ${subscribers.length} total subscribers.`;
  console.log(summary);

  return NextResponse.json({
    sent,
    skipped,
    errors,
    total_subscribers: subscribers.length,
  });
}

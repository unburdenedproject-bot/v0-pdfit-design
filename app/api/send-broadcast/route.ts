export const runtime = "nodejs";
export const maxDuration = 300;

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

/**
 * Send a newsletter broadcast to all subscribers.
 *
 * POST /api/send-broadcast
 * Body: { campaignId: "uuid" }
 * Protected by CRON_SECRET (same auth as cron endpoints).
 *
 * Usage:
 *   1. Paula creates a row in `newsletter_campaigns` table (subject + body_html, status='draft')
 *   2. Paula calls this endpoint with the campaign ID
 *   3. Endpoint sends to every subscriber, updates status + counts
 *
 * Can also be called from Claude Code:
 *   curl -X POST https://www.pdf.it.com/api/send-broadcast \
 *     -H "Content-Type: application/json" \
 *     -H "Authorization: Bearer $CRON_SECRET" \
 *     -d '{"campaignId":"..."}'
 */
export async function POST(request: NextRequest): Promise<Response> {
  // Auth: require CRON_SECRET
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendKey = process.env.RESEND_API_KEY;

  if (!supabaseUrl || !supabaseKey || !resendKey) {
    return NextResponse.json({ error: "Missing config" }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const resend = new Resend(resendKey);

  const { campaignId } = await request.json();
  if (!campaignId) {
    return NextResponse.json({ error: "Missing campaignId" }, { status: 400 });
  }

  // Fetch the campaign
  const { data: campaign, error: campaignErr } = await supabase
    .from("newsletter_campaigns")
    .select("*")
    .eq("id", campaignId)
    .single();

  if (campaignErr || !campaign) {
    return NextResponse.json({ error: "Campaign not found" }, { status: 404 });
  }

  if (campaign.status === "sent") {
    return NextResponse.json({ error: "Campaign already sent" }, { status: 400 });
  }

  // Mark as sending
  await supabase
    .from("newsletter_campaigns")
    .update({ status: "sending" })
    .eq("id", campaignId);

  // Fetch all subscribers
  const { data: subscribers } = await supabase
    .from("newsletter_subscribers")
    .select("email")
    .order("subscribed_at", { ascending: true });

  if (!subscribers || subscribers.length === 0) {
    await supabase
      .from("newsletter_campaigns")
      .update({ status: "sent", sent_count: 0, sent_at: new Date().toISOString() })
      .eq("id", campaignId);
    return NextResponse.json({ sent: 0, errors: 0, message: "No subscribers" });
  }

  let sent = 0;
  let errors = 0;

  // Send in batches of 10 with 1s delay between batches (Resend rate limit friendly)
  const BATCH_SIZE = 10;
  for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
    const batch = subscribers.slice(i, i + BATCH_SIZE);

    await Promise.all(
      batch.map(async (sub) => {
        try {
          // Inject unsubscribe link into the campaign HTML
          const htmlWithUnsub = campaign.body_html.replace(
            "</body>",
            `<div style="text-align:center;padding:16px;font-size:12px;color:#A0A0B0;"><a href="https://www.pdf.it.com/unsubscribe?email=${encodeURIComponent(sub.email)}" style="color:#A0A0B0;text-decoration:underline;">Unsubscribe</a></div></body>`
          );

          await resend.emails.send({
            from: "Paula from PDF.it <noreply@pdf.it.com>",
            to: sub.email,
            subject: campaign.subject,
            html: htmlWithUnsub,
          });
          sent++;
        } catch (err) {
          console.error(`Broadcast send failed for ${sub.email}:`, err);
          errors++;
        }
      })
    );

    // Brief pause between batches
    if (i + BATCH_SIZE < subscribers.length) {
      await new Promise((r) => setTimeout(r, 1000));
    }
  }

  // Update campaign status
  await supabase
    .from("newsletter_campaigns")
    .update({
      status: errors > 0 && sent === 0 ? "failed" : "sent",
      sent_count: sent,
      error_count: errors,
      sent_at: new Date().toISOString(),
    })
    .eq("id", campaignId);

  return NextResponse.json({ sent, errors, total: subscribers.length });
}

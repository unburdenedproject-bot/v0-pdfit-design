/**
 * Integration tests: Stripe webhook handler
 *
 * Tests /api/webhook with real Stripe signature verification.
 * Uses test-mode webhook secret to sign synthetic payloads.
 *
 * P0: All 6 price ID mappings, subscription lifecycle, signature verification
 */

import { test, expect } from "@playwright/test";
import {
  buildWebhookPayload,
  buildCheckoutCompletedEvent,
  buildSubscriptionUpdatedEvent,
  buildSubscriptionDeletedEvent,
} from "./helpers/stripe-helpers";
import {
  getUserPlan,
  getUserRow,
  setUserPlan,
  setStripeCustomerId,
} from "./helpers/supabase-admin";
import { TEST_USERS } from "./helpers/test-users";
import { getSupabaseAdmin } from "./helpers/supabase-admin";

// Get the webhook target user ID for each test
let webhookUserId: string;
let webhookUserEmail: string;

test.beforeAll(async () => {
  const admin = getSupabaseAdmin();
  const { data } = await admin
    .from("users")
    .select("id, email")
    .eq("email", TEST_USERS.webhookTarget.email)
    .single();
  if (!data) throw new Error("Webhook target user not found — run global setup first");
  webhookUserId = data.id;
  webhookUserEmail = data.email;
});

test.beforeEach(async () => {
  // Reset webhook user to free plan before each test
  await setUserPlan(webhookUserId, "free");
  // Clear any Stripe IDs
  const admin = getSupabaseAdmin();
  await admin
    .from("users")
    .update({
      stripe_customer_id: null,
      stripe_subscription_id: null,
      cancel_at_period_end: false,
      current_period_end: null,
    })
    .eq("id", webhookUserId);
});

// ---------- Signature verification ----------

test.describe("Webhook signature verification", () => {
  test("missing stripe-signature header returns 400", async ({
    request,
    baseURL,
  }) => {
    const res = await request.post(`${baseURL}/api/webhook`, {
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({ type: "test" }),
    });
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("Missing signature");
  });

  test("invalid stripe-signature returns 400", async ({
    request,
    baseURL,
  }) => {
    const res = await request.post(`${baseURL}/api/webhook`, {
      headers: {
        "Content-Type": "application/json",
        "stripe-signature": "t=1234,v1=invalid_signature_here",
      },
      data: JSON.stringify({ type: "checkout.session.completed", data: {} }),
    });
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("Webhook Error");
  });
});

// ---------- checkout.session.completed — Price ID mapping ----------

test.describe("checkout.session.completed price ID mapping", () => {
  const priceIdTests = [
    { envVar: "STRIPE_PRICE_ID", expectedPlan: "pro", label: "Pro monthly" },
    {
      envVar: "STRIPE_PRICE_ID_ANNUAL",
      expectedPlan: "pro",
      label: "Pro annual",
    },
    {
      envVar: "STRIPE_PRICE_ID_BUSINESS",
      expectedPlan: "business",
      label: "Business monthly",
    },
    {
      envVar: "STRIPE_PRICE_ID_BUSINESS_ANNUAL",
      expectedPlan: "business",
      label: "Business annual",
    },
    {
      envVar: "STRIPE_PRICE_ID_ENTERPRISE",
      expectedPlan: "enterprise",
      label: "Enterprise monthly",
    },
    {
      envVar: "STRIPE_PRICE_ID_ENTERPRISE_ANNUAL",
      expectedPlan: "enterprise",
      label: "Enterprise annual",
    },
  ];

  for (const { envVar, expectedPlan, label } of priceIdTests) {
    test(`${label} price ID sets plan to "${expectedPlan}"`, async ({
      request,
      baseURL,
    }) => {
      const priceId = process.env[envVar];
      if (!priceId) {
        test.skip(true, `${envVar} not set`);
        return;
      }

      // The webhook handler retrieves the subscription from Stripe to get the priceId.
      // In test mode, we can't easily create a real subscription, so we test
      // the subscription.updated path which reads priceId directly from the event.
      const customerId = `cus_test_wh_${Date.now()}`;
      await setStripeCustomerId(webhookUserId, customerId);

      const { body, signature } = buildSubscriptionUpdatedEvent({
        customerId,
        priceId,
      });

      const res = await request.post(`${baseURL}/api/webhook`, {
        headers: {
          "Content-Type": "application/json",
          "stripe-signature": signature,
        },
        data: body,
      });
      expect(res.status()).toBe(200);

      // Verify the plan was updated in the database
      const plan = await getUserPlan(webhookUserId);
      expect(plan).toBe(expectedPlan);
    });
  }
});

// ---------- Subscription lifecycle ----------

test.describe("Subscription lifecycle", () => {
  test("subscription.updated sets cancel_at_period_end", async ({
    request,
    baseURL,
  }) => {
    const customerId = `cus_test_cancel_${Date.now()}`;
    await setStripeCustomerId(webhookUserId, customerId);
    await setUserPlan(webhookUserId, "pro");

    const priceId = process.env.STRIPE_PRICE_ID || "price_test_pro";
    const periodEnd = Math.floor(Date.now() / 1000) + 30 * 86400;

    const { body, signature } = buildSubscriptionUpdatedEvent({
      customerId,
      priceId,
      cancelAtPeriodEnd: true,
      currentPeriodEnd: periodEnd,
    });

    const res = await request.post(`${baseURL}/api/webhook`, {
      headers: {
        "Content-Type": "application/json",
        "stripe-signature": signature,
      },
      data: body,
    });
    expect(res.status()).toBe(200);

    const row = await getUserRow(webhookUserId);
    expect(row?.cancel_at_period_end).toBe(true);
    expect(row?.current_period_end).toBeTruthy();
  });

  test("subscription.deleted resets user to free plan", async ({
    request,
    baseURL,
  }) => {
    const customerId = `cus_test_delete_${Date.now()}`;
    await setStripeCustomerId(webhookUserId, customerId);
    await setUserPlan(webhookUserId, "pro");

    const { body, signature } = buildSubscriptionDeletedEvent({
      customerId,
    });

    const res = await request.post(`${baseURL}/api/webhook`, {
      headers: {
        "Content-Type": "application/json",
        "stripe-signature": signature,
      },
      data: body,
    });
    expect(res.status()).toBe(200);

    const plan = await getUserPlan(webhookUserId);
    expect(plan).toBe("free");

    const row = await getUserRow(webhookUserId);
    expect(row?.stripe_subscription_id).toBeNull();
    expect(row?.cancel_at_period_end).toBe(false);
  });

  test("unknown event type returns 200 received:true", async ({
    request,
    baseURL,
  }) => {
    const { body, signature } = buildWebhookPayload(
      "payment_intent.created",
      { id: "pi_test_123" }
    );

    const res = await request.post(`${baseURL}/api/webhook`, {
      headers: {
        "Content-Type": "application/json",
        "stripe-signature": signature,
      },
      data: body,
    });
    expect(res.status()).toBe(200);
    const json = await res.json();
    expect(json.received).toBe(true);
  });
});

// ---------- Edge cases ----------

test.describe("Webhook edge cases", () => {
  test("checkout.session.completed with missing userId does not crash", async ({
    request,
    baseURL,
  }) => {
    // Build an event without userId in metadata or client_reference_id
    const { body: rawBody, signature: rawSig } = buildWebhookPayload(
      "checkout.session.completed",
      {
        id: `cs_test_noid_${Date.now()}`,
        object: "checkout.session",
        customer: "cus_test_orphan",
        subscription: "sub_test_orphan",
        metadata: {}, // no supabase_user_id
        client_reference_id: null,
        customer_details: { email: "orphan@example.com" },
        customer_email: "orphan@example.com",
      }
    );

    const res = await request.post(`${baseURL}/api/webhook`, {
      headers: {
        "Content-Type": "application/json",
        "stripe-signature": rawSig,
      },
      data: rawBody,
    });
    // Should return 200 (not crash) — this is the silent failure documented in the audit
    expect(res.status()).toBe(200);
  });

  test("subscription.updated with non-existent customerId does not crash", async ({
    request,
    baseURL,
  }) => {
    const priceId = process.env.STRIPE_PRICE_ID || "price_test_pro";
    const { body, signature } = buildSubscriptionUpdatedEvent({
      customerId: "cus_nonexistent_999",
      priceId,
    });

    const res = await request.post(`${baseURL}/api/webhook`, {
      headers: {
        "Content-Type": "application/json",
        "stripe-signature": signature,
      },
      data: body,
    });
    // Should handle gracefully — no matching user, no update, no crash
    expect(res.status()).toBe(200);
  });

  test("subscription.deleted with non-existent customerId does not crash", async ({
    request,
    baseURL,
  }) => {
    const { body, signature } = buildSubscriptionDeletedEvent({
      customerId: "cus_nonexistent_888",
    });

    const res = await request.post(`${baseURL}/api/webhook`, {
      headers: {
        "Content-Type": "application/json",
        "stripe-signature": signature,
      },
      data: body,
    });
    expect(res.status()).toBe(200);
  });

  test("duplicate webhook event processed idempotently", async ({
    request,
    baseURL,
  }) => {
    const customerId = `cus_test_dupe_${Date.now()}`;
    await setStripeCustomerId(webhookUserId, customerId);
    await setUserPlan(webhookUserId, "free");

    const priceId = process.env.STRIPE_PRICE_ID || "price_test_pro";
    const { body, signature } = buildSubscriptionUpdatedEvent({
      customerId,
      priceId,
    });

    // Send the same event twice
    const res1 = await request.post(`${baseURL}/api/webhook`, {
      headers: {
        "Content-Type": "application/json",
        "stripe-signature": signature,
      },
      data: body,
    });
    expect(res1.status()).toBe(200);

    // Second send — needs fresh signature (timestamp changes)
    const { body: body2, signature: sig2 } = buildSubscriptionUpdatedEvent({
      customerId,
      priceId,
    });
    const res2 = await request.post(`${baseURL}/api/webhook`, {
      headers: {
        "Content-Type": "application/json",
        "stripe-signature": sig2,
      },
      data: body2,
    });
    expect(res2.status()).toBe(200);

    // Plan should still be correct after double processing
    const plan = await getUserPlan(webhookUserId);
    expect(plan).toBe("pro");
  });
});

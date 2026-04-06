/**
 * Stripe test helpers for integration tests.
 *
 * Generates signed webhook payloads using Stripe's test-mode secret,
 * so we can test the webhook handler with real signature verification.
 */

import Stripe from "stripe";

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("Missing STRIPE_SECRET_KEY for integration tests");
  return new Stripe(key, { typescript: true });
}

function getWebhookSecret(): string {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret)
    throw new Error("Missing STRIPE_WEBHOOK_SECRET for integration tests");
  return secret;
}

/**
 * Build a signed Stripe webhook payload.
 * Returns { body, signature } ready to POST to /api/webhook.
 */
export function buildWebhookPayload(
  eventType: string,
  dataObject: Record<string, unknown>
): { body: string; signature: string } {
  const payload = {
    id: `evt_test_${Date.now()}`,
    object: "event",
    type: eventType,
    data: { object: dataObject },
    created: Math.floor(Date.now() / 1000),
    livemode: false,
    api_version: "2024-12-18",
  };

  const body = JSON.stringify(payload);
  const secret = getWebhookSecret();

  // Generate a valid Stripe signature
  const timestamp = Math.floor(Date.now() / 1000);
  const signedPayload = `${timestamp}.${body}`;
  const crypto = require("crypto");
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(signedPayload)
    .digest("hex");

  const signature = `t=${timestamp},v1=${expectedSignature}`;

  return { body, signature };
}

/**
 * Build a checkout.session.completed event for a specific plan.
 */
export function buildCheckoutCompletedEvent(options: {
  userId: string;
  email: string;
  customerId?: string;
  subscriptionId?: string;
  priceId?: string;
}): { body: string; signature: string } {
  const {
    userId,
    email,
    customerId = `cus_test_${Date.now()}`,
    subscriptionId = `sub_test_${Date.now()}`,
    priceId,
  } = options;

  return buildWebhookPayload("checkout.session.completed", {
    id: `cs_test_${Date.now()}`,
    object: "checkout.session",
    customer: customerId,
    subscription: subscriptionId,
    client_reference_id: userId,
    metadata: { supabase_user_id: userId },
    customer_details: { email },
    customer_email: email,
    mode: "subscription",
    status: "complete",
    payment_status: "paid",
  });
}

/**
 * Build a customer.subscription.updated event.
 */
export function buildSubscriptionUpdatedEvent(options: {
  customerId: string;
  subscriptionId?: string;
  priceId: string;
  cancelAtPeriodEnd?: boolean;
  currentPeriodEnd?: number;
}): { body: string; signature: string } {
  const {
    customerId,
    subscriptionId = `sub_test_${Date.now()}`,
    priceId,
    cancelAtPeriodEnd = false,
    currentPeriodEnd = Math.floor(Date.now() / 1000) + 30 * 86400,
  } = options;

  return buildWebhookPayload("customer.subscription.updated", {
    id: subscriptionId,
    object: "subscription",
    customer: customerId,
    cancel_at_period_end: cancelAtPeriodEnd,
    current_period_end: currentPeriodEnd,
    items: {
      data: [
        {
          price: { id: priceId },
        },
      ],
    },
  });
}

/**
 * Build a customer.subscription.deleted event.
 */
export function buildSubscriptionDeletedEvent(options: {
  customerId: string;
  subscriptionId?: string;
}): { body: string; signature: string } {
  const {
    customerId,
    subscriptionId = `sub_test_${Date.now()}`,
  } = options;

  return buildWebhookPayload("customer.subscription.deleted", {
    id: subscriptionId,
    object: "subscription",
    customer: customerId,
    status: "canceled",
  });
}

/**
 * Get all Stripe price IDs from environment, mapped to plan names.
 */
export function getPriceIdMap(): Record<
  string,
  { plan: string; billing: string }
> {
  const map: Record<string, { plan: string; billing: string }> = {};

  const ids = {
    STRIPE_PRICE_ID: { plan: "pro", billing: "monthly" },
    STRIPE_PRICE_ID_ANNUAL: { plan: "pro", billing: "annual" },
    STRIPE_PRICE_ID_BUSINESS: { plan: "business", billing: "monthly" },
    STRIPE_PRICE_ID_BUSINESS_ANNUAL: { plan: "business", billing: "annual" },
    STRIPE_PRICE_ID_ENTERPRISE: { plan: "enterprise", billing: "monthly" },
    STRIPE_PRICE_ID_ENTERPRISE_ANNUAL: {
      plan: "enterprise",
      billing: "annual",
    },
  };

  for (const [envVar, meta] of Object.entries(ids)) {
    const value = process.env[envVar];
    if (value) {
      map[value] = meta;
    }
  }

  return map;
}

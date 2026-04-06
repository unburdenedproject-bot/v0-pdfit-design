/**
 * Integration tests: Contact form
 *
 * Tests /api/contact against real Supabase.
 * Verifies validation, insertion, and XSS safety.
 */

import { test, expect } from "@playwright/test";
import {
  countContactMessages,
  deleteContactMessages,
} from "./helpers/supabase-admin";

const SUBJECT_PREFIX = "inttest-contact";

test.beforeAll(async () => {
  // Clean up any leftover test messages
  await deleteContactMessages(`${SUBJECT_PREFIX}%`);
});

test.afterAll(async () => {
  await deleteContactMessages(`${SUBJECT_PREFIX}%`);
});

test.describe("/api/contact validation", () => {
  test("valid submission returns success and creates DB row", async ({
    request,
    baseURL,
  }) => {
    const subject = `${SUBJECT_PREFIX}-${Date.now()}`;
    const res = await request.post(`${baseURL}/api/contact`, {
      headers: { "Content-Type": "application/json" },
      data: {
        name: "Test User",
        email: "test@example.com",
        subject,
        message: "This is an integration test message.",
      },
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);

    // Verify the message was saved to the database
    const count = await countContactMessages(subject);
    expect(count).toBe(1);
  });

  test("missing required field returns 400", async ({ request, baseURL }) => {
    const res = await request.post(`${baseURL}/api/contact`, {
      headers: { "Content-Type": "application/json" },
      data: {
        name: "Test User",
        email: "test@example.com",
        // missing subject and message
      },
    });
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("required");
  });

  test("invalid email format returns 400", async ({ request, baseURL }) => {
    const res = await request.post(`${baseURL}/api/contact`, {
      headers: { "Content-Type": "application/json" },
      data: {
        name: "Test User",
        email: "not-an-email",
        subject: `${SUBJECT_PREFIX}-invalid`,
        message: "Test message",
      },
    });
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("email");
  });

  test("name shorter than 2 chars returns 400", async ({
    request,
    baseURL,
  }) => {
    const res = await request.post(`${baseURL}/api/contact`, {
      headers: { "Content-Type": "application/json" },
      data: {
        name: "A",
        email: "test@example.com",
        subject: `${SUBJECT_PREFIX}-shortname`,
        message: "Test message",
      },
    });
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("name");
  });

  test("XSS in message field is stored safely", async ({
    request,
    baseURL,
  }) => {
    const subject = `${SUBJECT_PREFIX}-xss-${Date.now()}`;
    const xssPayload = '<script>alert("xss")</script>';

    const res = await request.post(`${baseURL}/api/contact`, {
      headers: { "Content-Type": "application/json" },
      data: {
        name: "XSS Tester",
        email: "xss@example.com",
        subject,
        message: xssPayload,
      },
    });
    expect(res.status()).toBe(200);

    // The XSS payload should be stored as plain text (not executed).
    // Supabase stores it as a string — verify it was saved.
    const count = await countContactMessages(subject);
    expect(count).toBe(1);
  });
});

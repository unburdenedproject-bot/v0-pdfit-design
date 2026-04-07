import { describe, it, expect, vi, beforeEach } from "vitest";

/**
 * Unit tests for lib/csrf.ts
 *
 * We mock NextRequest/NextResponse since they require the Next.js runtime.
 */

// Mock next/server before importing the module under test
vi.mock("next/server", () => {
  class MockNextRequest {
    headers: Map<string, string>;
    constructor(url: string, init?: { headers?: Record<string, string> }) {
      this.headers = new Map(Object.entries(init?.headers ?? {}));
    }
  }

  class MockNextResponse {
    static json(body: unknown, init?: { status?: number }) {
      return { body, status: init?.status ?? 200, _isMockResponse: true };
    }
  }

  return {
    NextRequest: MockNextRequest,
    NextResponse: MockNextResponse,
  };
});

import { checkCsrf } from "@/lib/csrf";

function makeRequest(origin?: string, referer?: string) {
  const headers: Record<string, string> = {};
  if (origin) headers["origin"] = origin;
  if (referer) headers["referer"] = referer;

  // Build a mock that matches what checkCsrf expects (headers.get())
  return {
    headers: {
      get(name: string) {
        return headers[name] ?? null;
      },
    },
  } as any;
}

describe("checkCsrf", () => {
  beforeEach(() => {
    // Reset NEXT_PUBLIC_SITE_URL to default
    delete process.env.NEXT_PUBLIC_SITE_URL;
  });

  it("allows requests from https://pdf.it.com", () => {
    const result = checkCsrf(makeRequest("https://pdf.it.com"));
    expect(result).toBeNull();
  });

  it("allows requests from https://www.pdf.it.com", () => {
    const result = checkCsrf(makeRequest("https://www.pdf.it.com"));
    expect(result).toBeNull();
  });

  it("allows requests from http://localhost:3000 (dev)", () => {
    const result = checkCsrf(makeRequest("http://localhost:3000"));
    expect(result).toBeNull();
  });

  it("rejects requests from https://evil.com with 403", () => {
    const result = checkCsrf(makeRequest("https://evil.com"));
    expect(result).not.toBeNull();
    expect((result as any).status).toBe(403);
    expect((result as any).body).toEqual({ error: "Forbidden" });
  });

  it("allows requests with no origin header (same-origin)", () => {
    const result = checkCsrf(makeRequest());
    expect(result).toBeNull();
  });

  it("allows requests where origin includes a path under allowed domain", () => {
    const result = checkCsrf(makeRequest("https://pdf.it.com/some-page"));
    expect(result).toBeNull();
  });

  it("uses referer when origin is absent", () => {
    const result = checkCsrf(
      makeRequest(undefined, "https://pdf.it.com/merge-pdf")
    );
    expect(result).toBeNull();
  });

  it("rejects referer from unknown domain", () => {
    const result = checkCsrf(makeRequest(undefined, "https://evil.com/page"));
    expect(result).not.toBeNull();
    expect((result as any).status).toBe(403);
  });
});

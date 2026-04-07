import { describe, it, expect } from "vitest";
import {
  errorResponse,
  sanitizeError,
  safeMessageFrom,
} from "@/lib/api/error-handler";

describe("sanitizeError", () => {
  it("returns generic message when input contains CloudConvert", () => {
    expect(sanitizeError("CloudConvert failed")).toBe(
      "An error occurred while processing your file. Please try again."
    );
  });

  it("returns generic message when input contains iLoveAPI", () => {
    expect(sanitizeError("iLoveAPI timeout on task 123")).toBe(
      "An error occurred while processing your file. Please try again."
    );
  });

  it("returns generic message when input contains Document AI", () => {
    expect(sanitizeError("Document AI returned 500")).toBe(
      "An error occurred while processing your file. Please try again."
    );
  });

  it("passes through safe user-facing messages", () => {
    expect(sanitizeError("File is too large")).toBe("File is too large");
  });

  it("returns generic message for null/undefined", () => {
    expect(sanitizeError(null as any)).toBe("An unexpected error occurred.");
    expect(sanitizeError(undefined as any)).toBe("An unexpected error occurred.");
  });

  it("returns generic message for empty string", () => {
    expect(sanitizeError("")).toBe("An unexpected error occurred.");
  });
});

describe("errorResponse", () => {
  it("returns Response with given status and sanitized message", async () => {
    const res = errorResponse("test error", 400);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body).toEqual({ error: "test error" });
  });

  it("defaults to status 500", async () => {
    const res = errorResponse("something broke");
    expect(res.status).toBe(500);
  });

  it("sanitizes service names in the message", async () => {
    const res = errorResponse("CloudConvert failed", 500);
    const body = await res.json();
    expect(body.error).toBe(
      "An error occurred while processing your file. Please try again."
    );
  });
});

describe("safeMessageFrom", () => {
  it("sanitizes error messages containing service names", () => {
    expect(safeMessageFrom(new Error("iLoveAPI timeout"))).toBe(
      "An error occurred while processing your file. Please try again."
    );
  });

  it("passes through safe error messages", () => {
    expect(safeMessageFrom(new Error("File not found"))).toBe("File not found");
  });

  it("handles non-Error objects gracefully", () => {
    expect(safeMessageFrom("string error")).toBe("An unexpected error occurred.");
    expect(safeMessageFrom(null)).toBe("An unexpected error occurred.");
    expect(safeMessageFrom(42)).toBe("An unexpected error occurred.");
  });
});

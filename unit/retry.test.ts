import { describe, it, expect, vi } from "vitest";
import { withRetry } from "@/lib/retry";

describe("withRetry", () => {
  it("returns result on first successful attempt", async () => {
    const fn = vi.fn().mockResolvedValue("ok");
    const result = await withRetry(fn, { baseDelayMs: 1 });
    expect(result).toBe("ok");
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("retries on retryable error then returns result", async () => {
    const fn = vi
      .fn()
      .mockRejectedValueOnce(new Error("timeout"))
      .mockResolvedValue("ok");

    const result = await withRetry(fn, { baseDelayMs: 1 });
    expect(result).toBe("ok");
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it("throws after exhausting max retries on retryable error", async () => {
    const fn = vi.fn().mockRejectedValue(new Error("503 service unavailable"));

    await expect(
      withRetry(fn, { maxRetries: 3, baseDelayMs: 1 })
    ).rejects.toThrow("503 service unavailable");

    // 1 initial + 3 retries = 4 calls
    expect(fn).toHaveBeenCalledTimes(4);
  });

  it("throws immediately on non-retryable error without retrying", async () => {
    const fn = vi.fn().mockRejectedValue(new Error("Invalid file format"));

    await expect(
      withRetry(fn, { maxRetries: 3, baseDelayMs: 1 })
    ).rejects.toThrow("Invalid file format");

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("respects custom maxRetries=1", async () => {
    const fn = vi.fn().mockRejectedValue(new Error("econnreset"));

    await expect(
      withRetry(fn, { maxRetries: 1, baseDelayMs: 1 })
    ).rejects.toThrow("econnreset");

    // 1 initial + 1 retry = 2 calls
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it("uses custom retryableErrors predicate", async () => {
    const fn = vi.fn().mockRejectedValue(new Error("custom-failure"));

    await expect(
      withRetry(fn, {
        maxRetries: 2,
        baseDelayMs: 1,
        retryableErrors: (err) =>
          err instanceof Error && err.message === "custom-failure",
      })
    ).rejects.toThrow("custom-failure");

    // 1 initial + 2 retries = 3 calls
    expect(fn).toHaveBeenCalledTimes(3);
  });
});

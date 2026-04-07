import { describe, it, expect } from "vitest";
import { isValidBlobUrl, areValidBlobUrls } from "@/lib/validate-blob-url";

describe("isValidBlobUrl", () => {
  it("accepts a standard vercel-storage.com URL", () => {
    expect(isValidBlobUrl("https://abc.vercel-storage.com/file.pdf")).toBe(true);
  });

  it("accepts a blob.vercel-storage.com URL", () => {
    expect(isValidBlobUrl("https://abc.blob.vercel-storage.com/file.pdf")).toBe(true);
  });

  it("rejects http (not https)", () => {
    expect(isValidBlobUrl("http://abc.vercel-storage.com/file.pdf")).toBe(false);
  });

  it("rejects a non-vercel domain", () => {
    expect(isValidBlobUrl("https://evil.com/file.pdf")).toBe(false);
  });

  it("rejects vercel-storage.com in path but not hostname", () => {
    expect(isValidBlobUrl("https://evil.com/.vercel-storage.com")).toBe(false);
  });

  it("rejects empty string", () => {
    expect(isValidBlobUrl("")).toBe(false);
  });

  it("rejects non-URL string", () => {
    expect(isValidBlobUrl("not-a-url")).toBe(false);
  });

  it("rejects null/undefined", () => {
    expect(isValidBlobUrl(null as any)).toBe(false);
    expect(isValidBlobUrl(undefined as any)).toBe(false);
  });
});

describe("areValidBlobUrls", () => {
  it("returns true when all URLs are valid", () => {
    expect(
      areValidBlobUrls([
        "https://a.vercel-storage.com/1.pdf",
        "https://b.vercel-storage.com/2.pdf",
      ])
    ).toBe(true);
  });

  it("returns false when any URL is invalid", () => {
    expect(
      areValidBlobUrls([
        "https://a.vercel-storage.com/1.pdf",
        "https://evil.com/2.pdf",
      ])
    ).toBe(false);
  });

  it("returns false for empty array", () => {
    expect(areValidBlobUrls([])).toBe(false);
  });

  it("returns false for non-array input", () => {
    expect(areValidBlobUrls("not-an-array" as any)).toBe(false);
  });
});

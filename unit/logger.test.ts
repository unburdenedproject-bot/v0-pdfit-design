import { describe, it, expect, vi, beforeEach } from "vitest";
import { logger } from "@/lib/logger";

describe("logger", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  describe("request", () => {
    it("returns a string requestId", () => {
      vi.spyOn(console, "log").mockImplementation(() => {});
      const requestId = logger.request("merge-pdf", "user-123");
      expect(typeof requestId).toBe("string");
      expect(requestId.length).toBeGreaterThan(0);
    });

    it("logs request_start with tool and requestId", () => {
      const spy = vi.spyOn(console, "log").mockImplementation(() => {});
      const requestId = logger.request("merge-pdf");
      const logged = JSON.parse(spy.mock.calls[0][0]);
      expect(logged.level).toBe("info");
      expect(logged.message).toBe("request_start");
      expect(logged.tool).toBe("merge-pdf");
      expect(logged.requestId).toBe(requestId);
      expect(logged.timestamp).toBeDefined();
    });
  });

  describe("info", () => {
    it("calls console.log with JSON containing timestamp and level", () => {
      const spy = vi.spyOn(console, "log").mockImplementation(() => {});
      logger.info("test message", { tool: "split-pdf" });
      expect(spy).toHaveBeenCalledOnce();
      const logged = JSON.parse(spy.mock.calls[0][0]);
      expect(logged.timestamp).toBeDefined();
      expect(logged.level).toBe("info");
      expect(logged.message).toBe("test message");
      expect(logged.tool).toBe("split-pdf");
    });
  });

  describe("error", () => {
    it("calls console.error with errorMessage field", () => {
      const spy = vi.spyOn(console, "error").mockImplementation(() => {});
      logger.error("something failed", new Error("disk full"), {
        tool: "compress",
      });
      expect(spy).toHaveBeenCalledOnce();
      const logged = JSON.parse(spy.mock.calls[0][0]);
      expect(logged.level).toBe("error");
      expect(logged.message).toBe("something failed");
      expect(logged.errorMessage).toBe("disk full");
      expect(logged.tool).toBe("compress");
    });

    it("handles non-Error error argument", () => {
      const spy = vi.spyOn(console, "error").mockImplementation(() => {});
      logger.error("failed", "string-error");
      const logged = JSON.parse(spy.mock.calls[0][0]);
      expect(logged.errorMessage).toBe("string-error");
    });
  });

  describe("requestEnd", () => {
    it("includes durationMs in output", () => {
      const spy = vi.spyOn(console, "log").mockImplementation(() => {});
      logger.requestEnd("abc123", "merge-pdf", "success", 1234);
      expect(spy).toHaveBeenCalledOnce();
      const logged = JSON.parse(spy.mock.calls[0][0]);
      expect(logged.message).toBe("request_end");
      expect(logged.requestId).toBe("abc123");
      expect(logged.tool).toBe("merge-pdf");
      expect(logged.status).toBe("success");
      expect(logged.durationMs).toBe(1234);
    });
  });

  describe("warn", () => {
    it("calls console.warn with level warn", () => {
      const spy = vi.spyOn(console, "warn").mockImplementation(() => {});
      logger.warn("low disk space");
      const logged = JSON.parse(spy.mock.calls[0][0]);
      expect(logged.level).toBe("warn");
      expect(logged.message).toBe("low disk space");
    });
  });
});

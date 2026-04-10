import { timingSafeEqual } from "node:crypto";

/**
 * Constant-time comparison for UTF-8 strings (same length only).
 * Different lengths return false without leaking timing on the longer string beyond length check.
 */
export function timingSafeEqualUtf8(a: string, b: string): boolean {
  const ba = Buffer.from(a, "utf8");
  const bb = Buffer.from(b, "utf8");
  if (ba.length !== bb.length) {
    return false;
  }
  return timingSafeEqual(ba, bb);
}

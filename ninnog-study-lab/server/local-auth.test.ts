import { describe, expect, it } from "vitest";
import { hashPassword, normalizeUsername, validatePassword, verifyPassword } from "./_core/localAuth";

describe("local authentication primitives", () => {
  it("normalizes usernames and enforces a minimum password length", () => {
    expect(normalizeUsername("  Alice_User ")).toBe("alice_user");
    expect(validatePassword("short")).toBeTruthy();
    expect(validatePassword("long-enough-password")).toBeNull();
  });

  it("hashes passwords without storing the clear text and verifies them", async () => {
    const encoded = await hashPassword("long-enough-password");
    expect(encoded).not.toContain("long-enough-password");
    expect(await verifyPassword("long-enough-password", encoded)).toBe(true);
    expect(await verifyPassword("wrong-password", encoded)).toBe(false);
  });
});

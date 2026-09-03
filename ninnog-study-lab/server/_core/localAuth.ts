import { randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scrypt = promisify(scryptCallback);
const KEY_LENGTH = 64;

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");
  const derivedKey = (await scrypt(password, salt, KEY_LENGTH)) as Buffer;
  return `scrypt$${salt}$${derivedKey.toString("hex")}`;
}

export async function verifyPassword(password: string, encoded: string): Promise<boolean> {
  const [algorithm, salt, storedHex] = encoded.split("$");
  if (algorithm !== "scrypt" || !salt || !storedHex) return false;
  try {
    const stored = Buffer.from(storedHex, "hex");
    const derived = (await scrypt(password, salt, stored.length)) as Buffer;
    return stored.length === derived.length && timingSafeEqual(stored, derived);
  } catch {
    return false;
  }
}

export function normalizeUsername(value: string): string {
  return value.trim().toLowerCase();
}

export function validatePassword(password: string): string | null {
  if (password.length < 8) return "Le mot de passe doit contenir au moins 8 caractères.";
  return null;
}

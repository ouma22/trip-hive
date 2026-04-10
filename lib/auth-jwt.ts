import * as jose from "jose";

const JWT_SECRET = process.env.JWT_SECRET;

function getSecretKey(): Uint8Array {
  if (!JWT_SECRET || JWT_SECRET.length < 16) {
    throw new Error(
      'Invalid/Missing environment variable: "JWT_SECRET" (min 16 characters)',
    );
  }
  return new TextEncoder().encode(JWT_SECRET);
}

export async function signAdminToken(): Promise<string> {
  const key = getSecretKey();
  return new jose.SignJWT({ sub: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(key);
}

export async function verifyAdminToken(token: string): Promise<boolean> {
  try {
    const key = getSecretKey();
    await jose.jwtVerify(token, key);
    return true;
  } catch {
    return false;
  }
}

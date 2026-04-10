import { NextResponse } from "next/server";
import { signAdminToken } from "@/lib/auth-jwt";
import { timingSafeEqualUtf8 } from "@/lib/password-compare";
import { loginBodySchema } from "@/lib/validations";

export async function POST(request: Request): Promise<NextResponse> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corps JSON invalide" }, { status: 400 });
  }

  const parsed = loginBodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors.password?.[0] ?? "Données invalides" },
      { status: 400 },
    );
  }

  const expected = process.env.ADMIN_PASSWORD;
  if (expected === undefined || expected.length === 0) {
    console.error("ADMIN_PASSWORD is not set in environment");
    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "development"
            ? "Définissez ADMIN_PASSWORD dans .env (mot de passe admin en clair). Utilisez des guillemets simples si le mot de passe contient des $."
            : "Configuration serveur incomplète",
      },
      { status: 500 },
    );
  }

  const ok = timingSafeEqualUtf8(parsed.data.password, expected);
  if (!ok) {
    return NextResponse.json({ error: "Mot de passe incorrect" }, { status: 401 });
  }

  const token = await signAdminToken();
  return NextResponse.json({ token });
}

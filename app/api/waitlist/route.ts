import { NextResponse } from "next/server";
import { insertLead } from "@/lib/leads";
import { waitlistBodySchema } from "@/lib/validations";
import type { LeadDto } from "@/types/lead";

export async function POST(
  request: Request,
): Promise<NextResponse<{ lead: LeadDto } | { error: string }>> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corps JSON invalide" }, { status: 400 });
  }

  const parsed = waitlistBodySchema.safeParse(body);
  if (!parsed.success) {
    const msg = parsed.error.issues[0]?.message ?? "Données invalides";
    return NextResponse.json({ error: msg }, { status: 400 });
  }

  const { firstName, lastName, email, phone, gender } = parsed.data;

  try {
    const result = await insertLead({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone,
      gender,
    });

    if (!result.ok) {
      return NextResponse.json(
        { error: "Cette adresse e-mail est déjà inscrite." },
        { status: 409 },
      );
    }

    return NextResponse.json({ lead: result.lead }, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

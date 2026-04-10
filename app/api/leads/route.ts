import { NextResponse } from "next/server";
import { verifyAdminToken } from "@/lib/auth-jwt";
import { listLeads } from "@/lib/leads";
import type { LeadDto } from "@/types/lead";

function getBearerToken(request: Request): string | null {
  const auth = request.headers.get("authorization");
  if (!auth || !auth.startsWith("Bearer ")) {
    return null;
  }
  return auth.slice(7).trim() || null;
}

export async function GET(request: Request): Promise<NextResponse<{ leads: LeadDto[] } | { error: string }>> {
  const token = getBearerToken(request);
  if (!token) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const valid = await verifyAdminToken(token);
  if (!valid) {
    return NextResponse.json({ error: "Token invalide ou expiré" }, { status: 401 });
  }

  try {
    const leads = await listLeads();
    return NextResponse.json({ leads });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

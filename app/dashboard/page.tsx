"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DashboardGuard } from "@/components/dashboard-guard";
import { authHeader, clearToken } from "@/lib/auth-client";
import type { LeadDto } from "@/types/lead";

function genderLabel(g: LeadDto["gender"]): string {
  switch (g) {
    case "homme":
      return "Homme";
    case "femme":
      return "Femme";
    case "autre":
      return "Autre";
    default:
      return g;
  }
}

function DashboardContent() {
  const router = useRouter();
  const [leads, setLeads] = useState<LeadDto[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/leads", { headers: authHeader() });
      const data: unknown = await res.json().catch(() => ({}));

      if (res.status === 401) {
        clearToken();
        router.replace("/login");
        return;
      }

      if (!res.ok) {
        const message =
          typeof data === "object" &&
          data !== null &&
          "error" in data &&
          typeof (data as { error: unknown }).error === "string"
            ? (data as { error: string }).error
            : "Erreur lors du chargement.";
        setError(message);
        setLeads([]);
        return;
      }

      if (
        typeof data === "object" &&
        data !== null &&
        "leads" in data &&
        Array.isArray((data as { leads: unknown }).leads)
      ) {
        setLeads((data as { leads: LeadDto[] }).leads);
        return;
      }

      setError("Format de réponse invalide.");
      setLeads([]);
    } catch {
      setError("Impossible de joindre le serveur.");
      setLeads([]);
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    void load();
  }, [load]);

  function logout() {
    clearToken();
    router.push("/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div>
            <h1 className="text-xl font-bold text-slate-900">Inscriptions — Trip Hive</h1>
            <p className="text-sm text-slate-500">Liste des leads waitlist</p>
          </div>
          <div className="flex gap-2">
            <Link href="/" className={buttonVariants({ variant: "outline" })}>
              Site public
            </Link>
            <Button
              variant="outline"
              className="text-red-700 hover:bg-red-50"
              type="button"
              onClick={logout}
            >
              Déconnexion
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-10">
        {loading && <p className="text-slate-500">Chargement…</p>}
        {error && !loading && (
          <p className="mb-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-800" role="alert">
            {error}
          </p>
        )}
        {!loading && leads && leads.length === 0 && !error && (
          <p className="rounded-xl border border-dashed border-slate-200 bg-white p-8 text-center text-slate-500">
            Aucune inscription pour le moment.
          </p>
        )}
        {!loading && !error && leads && leads.length > 0 && (
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Sexe</TableHead>
                  <TableHead className="text-right">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell className="font-medium">
                      {lead.firstName} {lead.lastName}
                    </TableCell>
                    <TableCell>{lead.email}</TableCell>
                    <TableCell>{genderLabel(lead.gender)}</TableCell>
                    <TableCell className="text-right text-muted-foreground">
                      {new Date(lead.createdAt).toLocaleString("fr-FR")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <DashboardGuard>
      <DashboardContent />
    </DashboardGuard>
  );
}

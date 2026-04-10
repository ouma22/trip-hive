"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Calendar, FileSpreadsheet, LogOut, Smartphone, Users } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
import { downloadLeadsExcel } from "@/lib/export-leads-xlsx";
import { cn } from "@/lib/utils";
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

function TableSkeleton() {
  return (
    <div className="space-y-3 p-1">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-12 animate-pulse rounded-lg bg-slate-100"
          style={{ opacity: 1 - i * 0.12 }}
        />
      ))}
    </div>
  );
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

  const count = leads?.length ?? 0;

  const latestDate = useMemo(() => {
    if (!leads?.length) return null;
    const dates = leads.map((l) => new Date(l.createdAt).getTime());
    return new Date(Math.max(...dates));
  }, [leads]);

  function logout() {
    clearToken();
    router.push("/login");
    router.refresh();
  }

  function exportExcel() {
    if (leads === null) return;
    downloadLeadsExcel(leads);
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-100/80 via-slate-50 to-white">
      <header className="relative border-b border-slate-200/80 bg-slate-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_100%_0%,rgba(20,184,166,0.22),transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-6xl flex-wrap items-start justify-between gap-6 px-6 py-8 sm:items-center sm:py-10">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300/90">
              Administration
            </p>
            <h1 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Inscriptions waitlist
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-slate-300">
              Trip Hive — contacts collectés depuis le formulaire public.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/" className={buttonVariants({ variant: "secondary" })}>
              Site public
            </Link>
            <Button
              variant="outline"
              className="border-slate-600 bg-transparent text-white hover:bg-white/10"
              type="button"
              onClick={logout}
            >
              <LogOut className="mr-2 size-4 opacity-80" aria-hidden />
              Déconnexion
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="border-slate-200/80 bg-white/90 shadow-sm shadow-slate-900/5 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 text-teal-700">
                <Users className="size-5" aria-hidden />
                <CardDescription className="text-slate-600">Total inscrits</CardDescription>
              </div>
              <CardTitle className="font-heading text-3xl tabular-nums text-slate-900">
                {loading ? "—" : count}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card className="border-slate-200/80 bg-white/90 shadow-sm shadow-slate-900/5 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 text-teal-700">
                <Calendar className="size-5" aria-hidden />
                <CardDescription className="text-slate-600">Dernière inscription</CardDescription>
              </div>
              <CardTitle className="font-heading text-lg font-medium text-slate-900">
                {loading
                  ? "—"
                  : latestDate
                    ? latestDate.toLocaleString("fr-FR", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })
                    : "—"}
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card className="overflow-hidden border-slate-200/80 bg-white shadow-md shadow-slate-900/5">
          <CardHeader className="flex flex-col gap-4 border-b border-slate-100 bg-slate-50/80 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <CardTitle className="text-lg text-slate-900">Liste des contacts</CardTitle>
              <CardDescription>Nom, email, téléphone et date d&apos;inscription.</CardDescription>
            </div>
            <Button
              type="button"
              variant="outline"
              className="shrink-0 border-teal-200 bg-white text-teal-900 hover:bg-teal-50"
              disabled={loading || leads === null}
              onClick={exportExcel}
            >
              <FileSpreadsheet className="mr-2 size-4" aria-hidden />
              Exporter Excel
            </Button>
          </CardHeader>
          <CardContent className="p-0 sm:p-0">
            {loading && (
              <div className="px-6 py-8">
                <TableSkeleton />
              </div>
            )}
            {error && !loading && (
              <div className="px-6 py-6">
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800 ring-1 ring-red-100" role="alert">
                  {error}
                </p>
              </div>
            )}
            {!loading && leads && leads.length === 0 && !error && (
              <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
                <div className="rounded-full bg-teal-50 p-4 text-teal-700">
                  <Users className="size-8" aria-hidden />
                </div>
                <p className="max-w-sm text-slate-600">
                  Aucune inscription pour le moment. Partagez le lien du site pour commencer à remplir la
                  liste.
                </p>
              </div>
            )}
            {!loading && !error && leads && leads.length > 0 && (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-slate-100 hover:bg-transparent">
                      <TableHead className="min-w-40 font-semibold text-slate-700">Nom</TableHead>
                      <TableHead className="min-w-48 font-semibold text-slate-700">Email</TableHead>
                      <TableHead className="min-w-36 font-semibold text-slate-700">
                        <span className="inline-flex items-center gap-1.5">
                          <Smartphone className="size-3.5 opacity-70" aria-hidden />
                          Téléphone
                        </span>
                      </TableHead>
                      <TableHead className="min-w-24 font-semibold text-slate-700">Sexe</TableHead>
                      <TableHead className="min-w-36 text-right font-semibold text-slate-700">
                        Date
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leads.map((lead, index) => (
                      <TableRow
                        key={lead.id}
                        className={cn(
                          "border-slate-100 transition-colors",
                          index % 2 === 0 ? "bg-white" : "bg-slate-50/50",
                        )}
                      >
                        <TableCell className="font-medium text-slate-900">
                          {lead.firstName} {lead.lastName}
                        </TableCell>
                        <TableCell>
                          <a
                            href={`mailto:${lead.email}`}
                            className="text-teal-800 underline-offset-2 hover:underline"
                          >
                            {lead.email}
                          </a>
                        </TableCell>
                        <TableCell className="tabular-nums text-slate-700">
                          {lead.phone ? (
                            <a
                              href={`tel:${lead.phone.replace(/\s/g, "")}`}
                              className="text-slate-800 underline-offset-2 hover:underline"
                            >
                              {lead.phone}
                            </a>
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </TableCell>
                        <TableCell className="text-slate-600">{genderLabel(lead.gender)}</TableCell>
                        <TableCell className="text-right text-sm text-muted-foreground tabular-nums">
                          {new Date(lead.createdAt).toLocaleString("fr-FR")}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
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

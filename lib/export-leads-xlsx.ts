import * as XLSX from "xlsx";
import type { LeadDto } from "@/types/lead";

function genderLabelFr(g: LeadDto["gender"]): string {
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

function sheetDate(createdAt: string): string {
  return new Date(createdAt).toLocaleString("fr-FR", {
    dateStyle: "short",
    timeStyle: "short",
  });
}

const HEADER_ROW = [
  "Prénom",
  "Nom",
  "Email",
  "Téléphone",
  "Sexe",
  "Date d'inscription",
] as const;

/**
 * Builds an .xlsx workbook from waitlist leads and triggers a browser download.
 */
export function downloadLeadsExcel(leads: LeadDto[], filenameBase = "trip-hive-waitlist"): void {
  let worksheet: XLSX.WorkSheet;

  if (leads.length === 0) {
    worksheet = XLSX.utils.aoa_to_sheet([Array.from(HEADER_ROW)]);
  } else {
    const data = leads.map((lead) => ({
      Prénom: lead.firstName,
      Nom: lead.lastName,
      Email: lead.email,
      Téléphone: lead.phone,
      Sexe: genderLabelFr(lead.gender),
      "Date d'inscription": sheetDate(lead.createdAt),
    }));
    worksheet = XLSX.utils.json_to_sheet(data);
  }

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Inscriptions");

  const safeDate = new Date().toISOString().slice(0, 10);
  XLSX.writeFile(workbook, `${filenameBase}-${safeDate}.xlsx`);
}

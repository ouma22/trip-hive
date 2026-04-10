"use client";

import { useId, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Gender } from "@/types/lead";

type SubmitState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function WaitlistForm() {
  const formId = useId();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState<Gender | "">("");
  const [submit, setSubmit] = useState<SubmitState>({ status: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!gender) {
      setSubmit({ status: "error", message: "Veuillez sélectionner une option." });
      return;
    }

    setSubmit({ status: "loading" });

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          gender,
        }),
      });

      const data: unknown = await res.json().catch(() => ({}));

      if (!res.ok) {
        const message =
          typeof data === "object" &&
          data !== null &&
          "error" in data &&
          typeof (data as { error: unknown }).error === "string"
            ? (data as { error: string }).error
            : "Une erreur est survenue.";
        setSubmit({ status: "error", message });
        return;
      }

      setSubmit({
        status: "success",
        message: "Merci ! Votre inscription a bien été enregistrée.",
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setGender("");
    } catch {
      setSubmit({
        status: "error",
        message: "Impossible de contacter le serveur. Réessayez plus tard.",
      });
    }
  }

  return (
    <div className="w-full min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:rounded-3xl sm:p-8 md:p-12 lg:rounded-[2.5rem]">
      <div className="mb-8 text-center sm:mb-10">
        <div className="mb-6 flex justify-center sm:mb-8">
          <div className="rounded-full bg-teal-50 p-3 sm:p-4" aria-hidden>
            <Send className="size-7 text-teal-700 sm:size-8" />
          </div>
        </div>
        <h2
          id="waitlist-heading"
          className="text-2xl font-bold italic leading-tight text-slate-900 sm:text-3xl md:text-4xl"
        >
          Rejoignez la Ruche.
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
          Inscrivez-vous pour bénéficier d&apos;un accès anticipé exclusif.
        </p>
      </div>

      <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit} noValidate>
        <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          <div className="min-w-0 space-y-2">
            <Label htmlFor={`${formId}-firstname`} className="text-sm font-semibold text-slate-800">
              Prénom
            </Label>
            <Input
              id={`${formId}-firstname`}
              name="firstName"
              autoComplete="given-name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Ex: Jean"
              className="form-input min-h-11 rounded-xl border-0 bg-slate-50 px-4 py-3 text-base font-medium sm:rounded-2xl sm:px-6 sm:py-4"
            />
          </div>
          <div className="min-w-0 space-y-2">
            <Label htmlFor={`${formId}-lastname`} className="text-sm font-semibold text-slate-800">
              Nom
            </Label>
            <Input
              id={`${formId}-lastname`}
              name="lastName"
              autoComplete="family-name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Ex: Dupont"
              className="form-input min-h-11 rounded-xl border-0 bg-slate-50 px-4 py-3 text-base font-medium sm:rounded-2xl sm:px-6 sm:py-4"
            />
          </div>
        </div>

        <div className="min-w-0 space-y-2">
          <Label htmlFor={`${formId}-email`} className="text-sm font-semibold text-slate-800">
            Email
          </Label>
          <Input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.com"
            className="form-input min-h-11 rounded-xl border-0 bg-slate-50 px-4 py-3 text-base font-medium sm:rounded-2xl sm:px-6 sm:py-4"
          />
        </div>

        <fieldset className="min-w-0 space-y-3 border-0 p-0">
          <legend className="text-sm font-semibold text-slate-800">Sexe</legend>
          <div
            className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4"
            role="radiogroup"
            aria-required="true"
            aria-label="Sexe"
          >
            {(
              [
                { id: `${formId}-homme`, label: "Homme", value: "homme" as const },
                { id: `${formId}-femme`, label: "Femme", value: "femme" as const },
                { id: `${formId}-autre`, label: "Autre", value: "autre" as const },
              ] as const
            ).map(({ id, label, value }) => (
              <div key={value} className="relative min-w-0">
                <input
                  type="radio"
                  name="gender"
                  id={id}
                  value={value}
                  checked={gender === value}
                  onChange={() => setGender(value)}
                  className="peer sr-only"
                />
                <label
                  htmlFor={id}
                  className="flex min-h-11 cursor-pointer items-center justify-center rounded-xl border-2 border-slate-200 bg-slate-50 px-3 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-slate-300 peer-checked:border-teal-600 peer-checked:bg-teal-50 peer-checked:text-teal-900 peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-teal-600 peer-focus-visible:ring-offset-2 sm:rounded-2xl sm:py-4 sm:text-base"
                >
                  {label}
                </label>
              </div>
            ))}
          </div>
        </fieldset>

        {submit.status === "success" && (
          <p
            className="rounded-xl bg-teal-50 px-4 py-3 text-sm font-medium text-teal-900"
            role="status"
          >
            {submit.message}
          </p>
        )}
        {submit.status === "error" && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-900" role="alert">
            {submit.message}
          </p>
        )}

        <div className="pt-1">
          <Button
            type="submit"
            disabled={submit.status === "loading"}
            className="min-h-12 w-full rounded-xl bg-teal-700 py-4 text-base font-bold text-white shadow-lg shadow-teal-900/15 hover:bg-teal-800 active:scale-[0.99] disabled:opacity-70 sm:rounded-2xl sm:py-5 sm:text-lg"
          >
            {submit.status === "loading" ? "Envoi…" : "Valider mon inscription"}
          </Button>
        </div>
      </form>
    </div>
  );
}

import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "Qu'est-ce que Trip Hive, vraiment ?",
    a: "Trip Hive est une plateforme de voyage régénératif : un écosystème qui relie voyageurs, hébergeurs, artisans et guides locaux autour d'un objectif commun — laisser les destinations en meilleur état qu'on ne les a trouvées. Chaque réservation finance un impact mesurable.",
  },
  {
    q: "C'est quoi exactement “Hivey”, votre IA ?",
    a: "Hivey est notre couche d'intelligence : elle compose des itinéraires en fonction de votre rythme, de la saison, des capacités d'accueil locales, et de l'empreinte carbone. Elle ne remplace personne — elle augmente les guides et les hébergeurs.",
  },
  {
    q: "Quand le lancement officiel est-il prévu ?",
    a: "Lancement public : Mai 2026. Les inscrits sur la liste d'attente reçoivent un accès anticipé dès Mars 2026, ainsi qu'un crédit voyage offert.",
  },
  {
    q: "Quels avantages pour les inscrits à la liste d'attente ?",
    a: "Accès anticipé, tarifs fondateurs verrouillés à vie, badge “Pionnier de la Ruche” dans votre profil, et invitations aux événements en personne dans nos villes pilotes.",
  },
  {
    q: "Mes données et mon impact sont-ils vraiment vérifiables ?",
    a: "Oui. Chaque action de conservation financée est tracée via un identifiant unique partagé avec nos ONG partenaires. Vous pouvez consulter l'historique et l'impact de chacun de vos voyages depuis votre tableau de bord.",
  },
  {
    q: "Je suis hébergeur, artisan ou pro du tourisme. Comment rejoindre ?",
    a: "Sélectionnez votre profil sur le formulaire d'inscription — nous vous contactons sous 7 jours avec un kit d'onboarding dédié et l'accès à notre back-office partenaires.",
  },
];

export function FAQ() {
  return (
    <div className="divide-y divide-slate-200">
      {FAQS.map((item, i) => (
        <details
          key={item.q}
          className="faq-item group py-6"
          {...(i === 0 ? { open: true } : {})}
        >
          <summary className="flex cursor-pointer items-start justify-between gap-6 text-left">
            <span className="flex items-baseline gap-4">
              <span className="font-display text-sm font-semibold tabular-nums text-teal-700">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg font-semibold leading-snug text-slate-900 sm:text-xl">
                {item.q}
              </span>
            </span>
            <span
              aria-hidden
              className="faq-icon mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition group-hover:border-teal-600 group-hover:text-teal-700"
            >
              <Plus className="size-4" />
            </span>
          </summary>
          <p className="ml-10 mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}

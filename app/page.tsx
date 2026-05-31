import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  Compass,
  Globe2,
  Handshake,
  Leaf,
  MapPin,
  Quote,
  Route,
  Sparkles,
  Sprout,
  Star,
  TreePine,
  Users,
  Wand2,
} from "lucide-react";
import { HeroBackground } from "@/components/hero-background";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { WaitlistForm } from "@/components/waitlist-form";
import { Marquee } from "@/components/landing/marquee";
import { FAQ } from "@/components/landing/faq";

const MARQUEE_ITEMS = [
  "Voyager autrement",
  "Régénérer",
  "Hivey · l'IA des voyages vivants",
  "Tunis · Marrakech · Lisbonne",
  "Communauté",
  "Impact mesurable",
  "Hospitalité locale",
  "Itinéraires bas-carbone",
  "Mai 2026",
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="min-w-0 overflow-x-clip bg-white">
        <section
          className="relative flex min-h-[100svh] min-h-[100dvh] flex-col justify-end overflow-hidden bg-slate-950 px-4 pb-16 pt-[calc(var(--nav-height)+2rem)] text-white sm:px-6 sm:pb-24 sm:pt-[calc(var(--nav-height)+3rem)]"
          aria-labelledby="hero-heading"
        >
          <div className="pointer-events-none absolute inset-0 z-0">
            <HeroBackground />
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/20"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_85%,rgba(2,6,23,0.85),transparent_55%)]"
              aria-hidden
            />
            <div className="grain" aria-hidden />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl">
            <div className="mb-8 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md">
                <span
                  className="relative flex size-2"
                  aria-hidden
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-teal-400" />
                </span>
                Open Beta · Mai 2026
              </span>
              <span className="hidden h-px w-10 bg-white/30 sm:block" aria-hidden />
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
                Chapitre 01 · La Ruche
              </span>
            </div>

            <h1
              id="hero-heading"
              className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl md:text-[6.5rem] lg:text-[7.5rem]"
            >
              <span className="block">Le voyage,</span>
              <span className="block">
                <span className="italic text-teal-300">réinventé</span>
                <span className="text-teal-300">.</span>
              </span>
            </h1>

            <div className="mt-10 grid gap-8 sm:mt-14 sm:grid-cols-12 sm:gap-6">
              <p className="text-pretty max-w-md text-base leading-relaxed text-white/85 sm:col-span-5 sm:text-lg">
                Une plateforme régénérative pensée pour les voyageurs qui veulent laisser
                la planète <span className="text-white">mieux qu&apos;ils ne l&apos;ont trouvée</span> — et
                pour les hôtes qui font vivre les territoires.
              </p>

              <div className="sm:col-span-4 sm:col-start-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="#waitlist"
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-slate-950 shadow-2xl shadow-black/40 outline-none transition hover:bg-teal-50 focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    Rejoindre la Ruche
                    <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </Link>
                  <Link
                    href="#vision"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white/90 outline-none transition hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    Notre manifeste
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:grid-cols-4 sm:gap-8">
              {[
                { label: "Voyageurs en liste", value: "2 410+" },
                { label: "Pays cibles", value: "14" },
                { label: "Hôtes partenaires", value: "120+" },
                { label: "kg CO₂ évités/voyage", value: "≈ 38" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 mx-auto mt-10 hidden flex-col items-center text-white/60 sm:flex">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
              Descendre
            </span>
            <span className="relative mt-3 flex h-8 w-5 justify-center rounded-full border border-white/30">
              <span className="scroll-cue-dot mt-1.5 inline-block h-1.5 w-1 rounded-full bg-white/80" />
            </span>
          </div>
        </section>

        <section
          aria-label="Mots-clés Trip Hive"
          className="border-y border-white/5 bg-slate-950 text-white"
        >
          <Marquee items={MARQUEE_ITEMS} />
        </section>

        <section
          id="vision"
          className="relative overflow-hidden bg-[#f6f4ee] px-4 py-24 sm:px-6 md:py-36"
          aria-labelledby="vision-heading"
        >
          <div
            className="absolute inset-0 bg-dot-grid opacity-60"
            aria-hidden
          />
          <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-teal-700">
                <Sprout className="size-4" aria-hidden />
                Manifeste · 01
              </span>
              <h2
                id="vision-heading"
                className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
              >
                Voyager
                <br />
                <span className="italic text-teal-700">sans déposséder.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-slate-700">
                Trip Hive est née d&apos;un constat simple&nbsp;: les destinations les plus
                aimées sont aussi celles qu&apos;on épuise le plus vite. Nous construisons
                l&apos;alternative.
              </p>
            </Reveal>

            <Reveal className="lg:col-span-8">
              <figure className="relative">
                <Quote
                  className="absolute -left-2 -top-6 size-16 text-teal-700/15 sm:-left-6 sm:-top-10 sm:size-24"
                  aria-hidden
                />
                <blockquote className="font-display text-2xl font-medium leading-snug tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-[2.6rem]">
                  Et si chaque kilomètre parcouru rendait un peu de vie au territoire qu&apos;il
                  traverse&nbsp;? <span className="text-teal-700">C&apos;est l&apos;équation que
                  Trip Hive résout</span> — un voyage à la fois, un hôte à la fois, une
                  forêt à la fois.
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 text-sm font-medium text-slate-600">
                  <span className="h-px w-8 bg-slate-400" aria-hidden />
                  L&apos;équipe fondatrice · Tunis, Lisbonne, Marrakech
                </figcaption>
              </figure>

              <div className="mt-14 grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-7 shadow-sm backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <span className="rounded-xl bg-teal-50 p-2.5 text-teal-700">
                      <Leaf className="size-5" aria-hidden />
                    </span>
                    <h3 className="font-display text-xl font-semibold text-slate-900">
                      Reforestation
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    1 voyage = 5 arbres plantés via nos ONG partenaires, suivis et
                    géolocalisés.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-7 shadow-sm backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <span className="rounded-xl bg-teal-50 p-2.5 text-teal-700">
                      <Handshake className="size-5" aria-hidden />
                    </span>
                    <h3 className="font-display text-xl font-semibold text-slate-900">
                      Économie locale
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    87&nbsp;% de chaque réservation reviennent aux acteurs du territoire —
                    pas aux plateformes.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="pillars"
          className="relative bg-slate-950 px-4 py-24 text-white sm:px-6 md:py-32"
          aria-labelledby="pillars-heading"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-dot-grid-dark opacity-50"
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl">
            <Reveal className="mb-16 max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-teal-300">
                <Sparkles className="size-4" aria-hidden />
                L&apos;écosystème · 02
              </span>
              <h2
                id="pillars-heading"
                className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Quatre piliers,{" "}
                <span className="italic text-teal-300">une ruche</span>.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
                Une plateforme, des outils, une communauté — et une IA discrète qui
                s&apos;efface derrière l&apos;hospitalité humaine.
              </p>
            </Reveal>

            <div className="grid gap-4 sm:gap-5 lg:grid-cols-6 lg:grid-rows-2">
              <Reveal className="lg:col-span-4 lg:row-span-2">
                <article className="group relative flex h-full min-h-[28rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-teal-500/15 via-slate-900 to-slate-950 p-8 sm:p-10">
                  <div
                    className="absolute -right-24 -top-24 size-72 rounded-full bg-teal-400/30 blur-3xl"
                    aria-hidden
                  />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span className="rounded-2xl border border-white/15 bg-white/10 p-2.5 text-teal-200 backdrop-blur">
                        <Wand2 className="size-5" aria-hidden />
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-200/80">
                        Hivey · IA voyage
                      </span>
                    </div>
                    <h3 className="mt-8 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                      Un itinéraire <span className="italic text-teal-200">vivant</span>,
                      composé en quelques secondes.
                    </h3>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75">
                      Hivey croise saisons, capacité d&apos;accueil, transport bas-carbone
                      et envies du moment. Elle propose. Vous ajustez. Les hôtes valident.
                    </p>
                  </div>
                  <div className="relative mt-10 flex flex-wrap items-center gap-2 text-xs font-medium">
                    {[
                      "Itinéraires sur-mesure",
                      "Budget transparent",
                      "Bas-carbone par défaut",
                      "Co-pilotage humain",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white/85 backdrop-blur"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>

              <Reveal className="lg:col-span-2">
                <article className="relative flex h-full min-h-[14rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="rounded-2xl bg-teal-400/15 p-2.5 text-teal-200">
                      <TreePine className="size-5" aria-hidden />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-200/80">
                      Impact tracker
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold leading-snug">
                    Voyez où vont vraiment vos euros.
                  </h3>
                </article>
              </Reveal>

              <Reveal className="lg:col-span-2">
                <article className="relative flex h-full min-h-[14rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="rounded-2xl bg-teal-400/15 p-2.5 text-teal-200">
                      <Users className="size-5" aria-hidden />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-200/80">
                      Communauté
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold leading-snug">
                    Voyageurs, hôtes, artisans — un seul fil.
                  </h3>
                </article>
              </Reveal>

              <Reveal className="lg:col-span-3">
                <article className="relative flex h-full min-h-[12rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="rounded-2xl bg-teal-400/15 p-2.5 text-teal-200">
                      <Compass className="size-5" aria-hidden />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-200/80">
                      Marketplace local
                    </span>
                  </div>
                  <div className="mt-6 flex items-end justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold leading-snug">
                      Ateliers, hébergements, guides — tout, à la source.
                    </h3>
                    <ArrowUpRight
                      className="size-6 shrink-0 text-teal-200"
                      aria-hidden
                    />
                  </div>
                </article>
              </Reveal>

              <Reveal className="lg:col-span-3">
                <article className="relative flex h-full min-h-[12rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="rounded-2xl bg-teal-400/15 p-2.5 text-teal-200">
                      <BadgeCheck className="size-5" aria-hidden />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-200/80">
                      Label Ruche
                    </span>
                  </div>
                  <div className="mt-6 flex items-end justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold leading-snug">
                      Des hôtes audités, pas seulement notés.
                    </h3>
                    <ArrowUpRight
                      className="size-6 shrink-0 text-teal-200"
                      aria-hidden
                    />
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          id="how"
          className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 md:py-32"
          aria-labelledby="how-heading"
        >
          <div className="mx-auto max-w-7xl">
            <Reveal className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-teal-700">
                  <Route className="size-4" aria-hidden />
                  Le rituel · 03
                </span>
                <h2
                  id="how-heading"
                  className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
                >
                  Quatre gestes
                  <br />
                  <span className="italic text-teal-700">pour un voyage qui compte.</span>
                </h2>
              </div>
            </Reveal>

            <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  num: "01",
                  title: "Confiez votre envie",
                  body: "Décrivez votre rythme, vos contraintes, vos rêves. Hivey s'occupe du reste — en moins de 60 secondes.",
                },
                {
                  num: "02",
                  title: "Validez l'itinéraire",
                  body: "Un parcours sur-mesure, hôtes certifiés Label Ruche, prix transparent et bilan carbone détaillé.",
                },
                {
                  num: "03",
                  title: "Voyagez",
                  body: "Sur place, un coordinateur local répond en français. Pas d'apps de plus, juste WhatsApp.",
                },
                {
                  num: "04",
                  title: "Mesurez l'impact",
                  body: "Au retour, votre bilan : kg CO₂ évités, projets financés, artisans rencontrés. Vérifié.",
                },
              ].map((step, i) => (
                <Reveal
                  key={step.num}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <li className="group relative flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50/50 p-7 transition hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:shadow-xl hover:shadow-teal-900/5">
                    <span className="font-display text-6xl font-semibold leading-none text-teal-700/15 transition group-hover:text-teal-700/30">
                      {step.num}
                    </span>
                    <h3 className="mt-6 font-display text-xl font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {step.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="destinations"
          className="relative overflow-hidden bg-[#f6f4ee] px-4 py-24 sm:px-6 md:py-32"
          aria-labelledby="destinations-heading"
        >
          <div className="mx-auto max-w-7xl">
            <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-teal-700">
                  <Globe2 className="size-4" aria-hidden />
                  Terrains de jeu · 04
                </span>
                <h2
                  id="destinations-heading"
                  className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
                >
                  Premiers carnets
                  <br />
                  <span className="italic text-teal-700">de la Ruche.</span>
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <article className="group relative h-[28rem] overflow-hidden rounded-[2rem] sm:h-[32rem]">
                  <Image
                    src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=1600"
                    alt="Médina de Marrakech au lever du jour"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
                    <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-200">
                      <MapPin className="size-3.5" aria-hidden /> Maroc · Atlas
                    </div>
                    <h3 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                      Marrakech, la médina régénérée.
                    </h3>
                    <p className="mt-4 max-w-md text-sm text-white/80">
                      14 hôtes, 8 ateliers d&apos;artisans, 3 vallées berbères reconnectées au
                      circuit officiel.
                    </p>
                  </div>
                </article>
              </Reveal>

              <Reveal className="lg:col-span-5">
                <article className="group relative h-[28rem] overflow-hidden rounded-[2rem] sm:h-[32rem]">
                  <Image
                    src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&q=80&w=1200"
                    alt="Toits de Lisbonne au coucher du soleil"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
                    <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-200">
                      <MapPin className="size-3.5" aria-hidden /> Portugal · Tage
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-3xl">
                      Lisbonne, hors-saison.
                    </h3>
                  </div>
                </article>
              </Reveal>

              <Reveal className="lg:col-span-5">
                <article className="group relative h-[26rem] overflow-hidden rounded-[2rem] sm:h-[30rem]">
                  <Image
                    src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&q=80&w=1200"
                    alt="Ruelle bleue de Sidi Bou Saïd"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
                    <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-200">
                      <MapPin className="size-3.5" aria-hidden /> Tunisie · Cap Bon
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-3xl">
                      Tunis & Sidi Bou Saïd.
                    </h3>
                  </div>
                </article>
              </Reveal>

              <Reveal className="lg:col-span-7">
                <article className="group relative flex h-[26rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-300/70 bg-white p-8 sm:h-[30rem] sm:p-10">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-700">
                      Bientôt
                    </span>
                    <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                      Sénégal, Géorgie, Albanie, Mexique…
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
                      Nous ouvrons une nouvelle destination chaque trimestre, en
                      partenariat avec des collectifs locaux déjà à l&apos;œuvre.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
                    {[
                      "Dakar",
                      "Tbilissi",
                      "Tirana",
                      "Oaxaca",
                      "Hanoi",
                      "Ushuaia",
                    ].map((city) => (
                      <span
                        key={city}
                        className="rounded-full border border-slate-300 px-3 py-1.5 text-slate-700"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          id="impact"
          className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white sm:px-6 md:py-32"
          aria-labelledby="impact-heading"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"
            aria-hidden
          />
          <div className="grain" aria-hidden />
          <div className="relative mx-auto max-w-7xl">
            <Reveal className="mb-16 max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-teal-300">
                <Leaf className="size-4" aria-hidden />
                Impact · 05
              </span>
              <h2
                id="impact-heading"
                className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
              >
                On compte ce qui compte.{" "}
                <span className="italic text-teal-300">Tout le reste est marketing.</span>
              </h2>
            </Reveal>

            <div className="grid divide-white/10 border-y border-white/10 sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
              {[
                {
                  value: "20+",
                  label: "Agences partenaires signées",
                  note: "Audit indépendant, contrats équitables.",
                },
                {
                  value: "40+",
                  label: "Guides locaux experts",
                  note: "Rémunérés au-dessus du marché local.",
                },
                {
                  value: "87%",
                  label: "Revenus reversés au territoire",
                  note: "Hôtes, artisans, ONG.",
                },
                {
                  value: "Mai",
                  label: "Lancement public 2026",
                  note: "Accès anticipé en mars.",
                },
              ].map((stat, i) => (
                <Reveal
                  key={stat.label}
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className="p-8 sm:p-10"
                >
                  <p className="font-display text-6xl font-semibold tracking-tight text-teal-300 sm:text-7xl">
                    {stat.value}
                  </p>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {stat.note}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16 grid gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-8 sm:grid-cols-3 sm:p-10">
              <div className="sm:col-span-2">
                <h3 className="font-display text-2xl font-semibold sm:text-3xl">
                  Notre engagement, signé.
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
                  Trip Hive publie chaque trimestre un rapport d&apos;impact audité par
                  un cabinet indépendant. Aucun chiffre n&apos;est arrondi. Aucun arbre
                  n&apos;est planté deux fois.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                {["1% for the Planet", "B Corp · en cours", "ISO 14064-1"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/85"
                    >
                      {badge}
                    </span>
                  ),
                )}
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="voices"
          className="relative bg-white px-4 py-24 sm:px-6 md:py-32"
          aria-labelledby="voices-heading"
        >
          <div className="mx-auto max-w-7xl">
            <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-teal-700">
                  <Quote className="size-4" aria-hidden />
                  Voix de la Ruche · 06
                </span>
                <h2
                  id="voices-heading"
                  className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
                >
                  Ils ont rejoint
                  <br />
                  <span className="italic text-teal-700">la première vague.</span>
                </h2>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <span className="flex" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </span>
                4,9 / 5 — auprès des 412 premiers testeurs
              </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  quote:
                    "C'est la première fois que je sens qu'on respecte vraiment les hôtes que je visite. Mon itinéraire au Maroc a été pensé avec, pas pour, les Berbères du Haut-Atlas.",
                  name: "Inès D.",
                  role: "Voyageuse · Lyon",
                  badge: "Pionnière",
                },
                {
                  quote:
                    "Hivey m'a proposé une route que je n'aurais jamais trouvée seule. Trois auberges familiales, un bus de nuit, et zéro greenwashing. Bluffant.",
                  name: "Léo M.",
                  role: "Photographe · Bordeaux",
                  badge: "Beta · vague 02",
                },
                {
                  quote:
                    "En tant qu'hébergeur à Sidi Bou Saïd, je touche enfin la juste part. Et mes clients arrivent informés, respectueux, alignés. Tout change.",
                  name: "Hassen B.",
                  role: "Hôte certifié · Tunis",
                  badge: "Label Ruche",
                },
              ].map((t, i) => (
                <Reveal key={t.name} style={{ transitionDelay: `${i * 80}ms` }}>
                  <figure className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50/40 p-7 transition hover:border-teal-300 hover:bg-white hover:shadow-xl hover:shadow-teal-900/5">
                    <Quote
                      className="size-7 text-teal-700/40"
                      aria-hidden
                    />
                    <blockquote className="mt-5 grow text-base leading-relaxed text-slate-800">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-slate-200 pt-5">
                      <div>
                        <p className="font-display text-base font-semibold text-slate-900">
                          {t.name}
                        </p>
                        <p className="text-xs text-slate-500">{t.role}</p>
                      </div>
                      <span className="rounded-full bg-teal-50 px-3 py-1 text-[11px] font-semibold text-teal-700">
                        {t.badge}
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="relative bg-[#f6f4ee] px-4 py-24 sm:px-6 md:py-32"
          aria-labelledby="faq-heading"
        >
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-teal-700">
                <Sparkles className="size-4" aria-hidden />
                Questions · 07
              </span>
              <h2
                id="faq-heading"
                className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl"
              >
                Ce que vous nous{" "}
                <span className="italic text-teal-700">demandez le plus.</span>
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-slate-600">
                Une question manquante&nbsp;? Écrivez-nous —{" "}
                <a
                  href="mailto:hello@trip-hive.com"
                  className="font-semibold text-teal-700 underline-offset-4 hover:underline"
                >
                  hello@trip-hive.com
                </a>
                . Réponse sous 24h, par un humain.
              </p>
            </Reveal>
            <Reveal className="lg:col-span-8">
              <FAQ />
            </Reveal>
          </div>
        </section>

        <section
          id="waitlist"
          className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white sm:px-6 md:py-32"
          aria-labelledby="waitlist-heading"
        >
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(45,212,191,0.18),transparent_60%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"
            aria-hidden
          />
          <div className="grain" aria-hidden />

          <div className="relative mx-auto max-w-6xl">
            <div className="mb-12 text-center sm:mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur">
                <Sparkles className="size-3.5 text-teal-300" aria-hidden />
                Liste fondatrice · places limitées
              </span>
              <h2
                id="waitlist-heading"
                className="mt-8 font-display text-4xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
              >
                Entrez{" "}
                <span className="italic text-teal-300">dans la Ruche</span>.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                Accès anticipé en mars 2026 · tarifs fondateurs verrouillés à vie ·
                badge Pionnier sur votre profil.
              </p>
            </div>

            <div className="mx-auto w-full min-w-0 max-w-3xl">
              <Reveal>
                <WaitlistForm />
              </Reveal>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium text-white/55">
              <span className="flex items-center gap-2">
                <BadgeCheck className="size-4 text-teal-300" aria-hidden />
                Pas de spam — un email tous les 15 jours, maximum
              </span>
              <span className="flex items-center gap-2">
                <BadgeCheck className="size-4 text-teal-300" aria-hidden />
                Données hébergées en France · RGPD strict
              </span>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-200 bg-white px-4 pb-12 pt-20 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 border-b border-slate-200 pb-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <Link href="/" className="inline-block opacity-90 transition hover:opacity-100">
                  <div className="relative h-10 w-44 sm:h-11 sm:w-52">
                    <Image
                      src="/logo.png"
                      alt="Trip Hive"
                      fill
                      className="object-contain object-left"
                      sizes="208px"
                    />
                  </div>
                </Link>
                <p className="mt-6 max-w-sm font-display text-2xl font-semibold leading-snug text-slate-900">
                  Le voyage qui{" "}
                  <span className="italic text-teal-700">rend plus qu&apos;il ne prend</span>.
                </p>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-600">
                  Trip Hive Technologies — basée à Tunis, opérée depuis Lisbonne &
                  Paris. SIRET en cours.
                </p>
              </div>

              <div className="md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Explorer
                </p>
                <ul className="mt-5 space-y-3 text-sm font-medium text-slate-700">
                  <li>
                    <a href="#vision" className="hover:text-teal-700">
                      Manifeste
                    </a>
                  </li>
                  <li>
                    <a href="#pillars" className="hover:text-teal-700">
                      Écosystème
                    </a>
                  </li>
                  <li>
                    <a href="#how" className="hover:text-teal-700">
                      Comment ça marche
                    </a>
                  </li>
                  <li>
                    <a href="#destinations" className="hover:text-teal-700">
                      Destinations
                    </a>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Communauté
                </p>
                <ul className="mt-5 space-y-3 text-sm font-medium text-slate-700">
                  <li>
                    <a href="#voices" className="hover:text-teal-700">
                      Voix de la Ruche
                    </a>
                  </li>
                  <li>
                    <a href="#impact" className="hover:text-teal-700">
                      Rapport d&apos;impact
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="hover:text-teal-700">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <Link href="/login" className="hover:text-teal-700">
                      Espace partenaire
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Contact
                </p>
                <ul className="mt-5 space-y-3 text-sm font-medium text-slate-700">
                  <li>
                    <a
                      href="mailto:hello@trip-hive.com"
                      className="hover:text-teal-700"
                    >
                      hello@trip-hive.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:press@trip-hive.com"
                      className="hover:text-teal-700"
                    >
                      press@trip-hive.com
                    </a>
                  </li>
                  <li className="flex gap-4 pt-2">
                    <a href="#" className="hover:text-teal-700">
                      Instagram
                    </a>
                    <a href="#" className="hover:text-teal-700">
                      LinkedIn
                    </a>
                  </li>
                </ul>
                <Link
                  href="#waitlist"
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
                >
                  Rejoindre la liste
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center">
              <p>© 2026 Trip Hive Technologies — Voyagez responsable.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-teal-700">
                  Mentions légales
                </a>
                <a href="#" className="hover:text-teal-700">
                  Confidentialité
                </a>
                <a href="#" className="hover:text-teal-700">
                  Charte d&apos;impact
                </a>
              </div>
            </div>

            <p
              aria-hidden
              className="font-display mt-12 select-none text-center text-[18vw] font-semibold leading-none tracking-tighter text-slate-100 sm:text-[14vw]"
            >
              <span className="bg-gradient-to-b from-slate-200 to-transparent bg-clip-text text-transparent">
                Trip Hive
              </span>
            </p>
          </div>
        </footer>

      </main>
    </>
  );
}

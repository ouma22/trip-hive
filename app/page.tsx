import Image from "next/image";
import Link from "next/link";
import { Cpu, Leaf } from "lucide-react";
import { HeroBackground } from "@/components/hero-background";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { WaitlistForm } from "@/components/waitlist-form";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="min-w-0 overflow-x-clip">
        <section
          className="relative flex min-h-[100svh] min-h-[100dvh] flex-col justify-end overflow-hidden bg-slate-950 px-4 pb-20 pt-[calc(var(--nav-height)+2.5rem)] text-white sm:justify-center sm:px-6 sm:pb-28 sm:pt-[calc(var(--nav-height)+3.5rem)]"
          aria-labelledby="hero-heading"
        >
          <div className="pointer-events-none absolute inset-0 z-0">
            <HeroBackground />
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-slate-900/25"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_130%_90%_at_50%_85%,rgba(15,23,42,0.72),transparent_50%)]"
              aria-hidden
            />
          </div>

          <div className="relative z-10 mx-auto w-full min-w-0 max-w-3xl px-1 text-center sm:px-0">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-teal-300/95">
              Mai 2026
            </p>
            <h1
              id="hero-heading"
              className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl"
            >
              Le voyage, <span className="text-teal-300">réinventé.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/95 sm:text-lg">
              Tourisme durable, communauté, impact mesurable.
            </p>
            <div className="mt-10">
              <Link
                href="#waitlist"
                className="inline-flex min-h-11 min-w-[44px] items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-lg shadow-slate-900/25 outline-none ring-offset-2 transition hover:-translate-y-0.5 hover:bg-teal-50 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-slate-900"
              >
                Rejoindre la liste
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white px-6 py-20 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
                  Notre Vision
                </span>
                <h2 className="mt-4 mb-6 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                  Pour un tourisme qui régénère la planète.
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-slate-600">
                  Trip Hive ne se contente pas de simplifier les réservations. Nous créons un
                  écosystème où chaque voyageur contribue directement à la préservation des
                  destinations visitées grâce à notre technologie de suivi d&apos;impact.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-teal-50 p-3 text-teal-600">
                      <Leaf className="size-6" aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Impact Environnemental</h3>
                      <p className="text-sm leading-relaxed text-slate-600">
                        Chaque réservation soutient des projets de reforestation et de conservation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-teal-50 p-3 text-teal-600">
                      <Cpu className="size-6" aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">IA Hivey</h3>
                      <p className="text-sm leading-relaxed text-slate-600">
                        Optimisation intelligente des ressources pour un tourisme plus propre.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <div className="grid grid-cols-2 gap-4">
                <Reveal className="mt-0 lg:mt-12">
                  <Image
                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800"
                    alt="Randonneurs en montagne"
                    width={800}
                    height={512}
                    className="h-64 w-full rounded-[2rem] object-cover shadow-xl"
                  />
                </Reveal>
                <Reveal>
                  <Image
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800"
                    alt="Paysage naturel apaisant"
                    width={800}
                    height={512}
                    className="h-64 w-full rounded-[2rem] object-cover shadow-xl"
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section id="impact" className="bg-slate-900 px-6 py-16 text-white md:py-20">
          <div className="mx-auto max-w-7xl text-center">
            <div className="grid gap-12 md:grid-cols-3 md:gap-16">
              <Reveal>
                <h3 className="mb-2 font-heading text-5xl font-semibold text-teal-400 md:text-6xl">
                  20+
                </h3>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                  Agences Partenaires
                </p>
              </Reveal>
              <Reveal style={{ transitionDelay: "100ms" }}>
                <h3 className="mb-2 font-heading text-5xl font-semibold text-teal-400 md:text-6xl">
                  40+
                </h3>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                  Guides Experts
                </p>
              </Reveal>
              <Reveal style={{ transitionDelay: "200ms" }}>
                <h3 className="mb-2 font-heading text-5xl font-semibold text-teal-400 md:text-6xl">
                  Mai
                </h3>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                  Lancement 2026
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          id="waitlist"
          className="bg-slate-50 px-4 py-16 sm:px-6 md:py-24"
          aria-labelledby="waitlist-heading"
        >
          <div className="mx-auto w-full min-w-0 max-w-3xl">
            <Reveal>
              <WaitlistForm />
            </Reveal>
          </div>
        </section>

        <footer className="border-t border-slate-100 px-6 py-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
            <Link href="/" className="opacity-90 transition hover:opacity-100">
              <div className="relative h-9 w-40 sm:h-10 sm:w-48 md:h-11 md:w-52">
                <Image
                  src="/logo.png"
                  alt="Trip Hive"
                  fill
                  className="object-contain object-left"
                  sizes="208px"
                />
              </div>
            </Link>
            <div className="flex gap-8 text-sm font-medium text-slate-400">
              <a href="#" className="transition hover:text-teal-600">
                Instagram
              </a>
              <a href="#" className="transition hover:text-teal-600">
                LinkedIn
              </a>
              <a href="mailto:contact@trip-hive.com" className="transition hover:text-teal-600">
                Contact
              </a>
            </div>
            <p className="text-xs text-slate-400">© 2026 Trip Hive Technologies. Voyagez responsable.</p>
          </div>
        </footer>
      </main>
    </>
  );
}

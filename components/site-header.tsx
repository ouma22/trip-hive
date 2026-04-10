"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const linkBase =
  "rounded-md font-semibold text-slate-900 outline-none transition-colors hover:text-teal-700 focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2";

function BrandLogo({ className }: { className?: string }) {
  return (
    <div className={cn("relative shrink-0", className)}>
      <Image
        src="/logo.png"
        alt="Trip Hive — accueil"
        fill
        className="object-contain object-left"
        priority
        sizes="(max-width: 640px) 72vw, (max-width: 1024px) 50vw, 448px"
      />
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <Link href="/#about" className={linkBase} onClick={() => setOpen(false)}>
        Vision
      </Link>
      <Link href="/#impact" className={linkBase} onClick={() => setOpen(false)}>
        Impact
      </Link>
      <div
        className="flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-800"
        aria-label="Langue : français"
      >
        <span className="h-2 w-2 shrink-0 rounded-full bg-red-600" aria-hidden />
        FR
      </div>
      <Link
        href="/login"
        className={cn(
          linkBase,
          "text-slate-800 hover:text-teal-800",
        )}
        onClick={() => setOpen(false)}
      >
        Connexion
      </Link>
      <Link
        href="/#waitlist"
        onClick={() => setOpen(false)}
        className={cn(
          "inline-flex items-center justify-center rounded-xl bg-teal-700 px-6 py-3 text-base font-bold text-white shadow-md shadow-teal-900/15 transition hover:bg-teal-800 focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 sm:px-8",
        )}
      >
        Rejoindre la Ruche
      </Link>
    </>
  );

  return (
    <header
      role="banner"
      className="fixed top-0 z-50 w-full border-b border-slate-300/80 bg-white/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/90"
    >
      <div className="mx-auto flex h-[var(--nav-height)] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center py-1.5"
          onClick={() => setOpen(false)}
        >
          <BrandLogo className="h-8 w-[min(68vw,16rem)] sm:h-9 sm:w-[min(60vw,18rem)] md:h-10 md:w-[min(50vw,20rem)] lg:h-10 lg:w-[22rem] xl:w-[24rem]" />
        </Link>

        <nav
          className="hidden shrink-0 items-center gap-6 xl:flex 2xl:gap-10"
          aria-label="Navigation principale"
        >
          {links}
        </nav>

        <div className="flex shrink-0 items-center xl:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="border-slate-300 text-slate-900"
                  aria-label="Ouvrir le menu de navigation"
                  aria-expanded={open}
                >
                  <Menu className="size-5" aria-hidden />
                </Button>
              }
            />
            <SheetContent side="right" className="gap-0">
              <SheetHeader className="border-b border-border pb-4">
                <SheetTitle className="sr-only">Menu Trip Hive</SheetTitle>
                <div className="flex justify-center pt-2">
                  <BrandLogo className="h-11 w-[min(85vw,18rem)]" />
                </div>
              </SheetHeader>
              <nav
                className="flex flex-col gap-4 p-4"
                aria-label="Navigation principale"
              >
                {links}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

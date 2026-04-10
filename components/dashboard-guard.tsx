"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getToken } from "@/lib/auth-client";

type GuardState = "checking" | "ok" | "redirect";

export function DashboardGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [state, setState] = useState<GuardState>("checking");

  useEffect(() => {
    queueMicrotask(() => {
      if (!getToken()) {
        router.replace("/login");
        setState("redirect");
        return;
      }
      setState("ok");
    });
  }, [router]);

  if (state === "checking") {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-slate-500">
        Chargement…
      </div>
    );
  }

  if (state === "redirect") {
    return null;
  }

  return <>{children}</>;
}

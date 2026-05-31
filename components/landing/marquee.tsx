import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
};

export function Marquee({ items, className }: MarqueeProps) {
  const sequence = [...items, ...items];
  return (
    <div className={cn("marquee relative overflow-hidden", className)}>
      <div className="marquee-track items-center gap-10 py-6 sm:gap-14">
        {sequence.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-10 text-base font-medium uppercase tracking-[0.25em] text-slate-200/90 sm:gap-14 sm:text-lg"
          >
            <span className="font-display italic tracking-tight normal-case text-teal-300/90">
              {item}
            </span>
            <Sparkles className="size-3.5 text-teal-300/60" aria-hidden />
          </span>
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent"
        aria-hidden
      />
    </div>
  );
}

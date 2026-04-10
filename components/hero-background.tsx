"use client";

import Image from "next/image";
import { useState } from "react";

const HERO_FALLBACK =
  "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=85&w=2400";

/**
 * Local /hero.jpg with Unsplash fallback if the file is missing in deployment.
 */
export function HeroBackground() {
  const [src, setSrc] = useState<string>("/hero.jpg");

  return (
    <Image
      key={src}
      src={src}
      alt=""
      fill
      priority
      className="object-cover object-[center_35%]"
      sizes="100vw"
      onError={() => {
        if (src !== HERO_FALLBACK) {
          setSrc(HERO_FALLBACK);
        }
      }}
    />
  );
}

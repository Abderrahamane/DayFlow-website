"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

export default function ScreenshotGrid({ items }: { items: { src: string; alt: string; label?: string }[] }) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="relative">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((shot) => (
          <button
            key={shot.src}
            onClick={() => setLightbox({ src: shot.src, alt: shot.alt })}
            className="group block overflow-hidden rounded-xl border border-border bg-card shadow-sm"
          >
            <div className="relative aspect-[10/19]">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 30vw, 90vw"
              />
            </div>
            {shot.label && <p className="px-3 py-2 text-sm text-muted-foreground">{shot.label}</p>}
          </button>
        ))}
      </div>
      <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
}


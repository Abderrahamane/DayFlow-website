"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Lightbox({ item, onClose }: { item: { src: string; alt: string } | null; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!item) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl bg-card shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full bg-background/80 px-3 py-1 text-sm font-semibold text-foreground shadow hover:scale-105"
        >
          Close
        </button>
        <div className="relative h-[70vh] w-full">
          <Image src={item.src} alt={item.alt} fill className="object-contain" sizes="90vw" />
        </div>
      </div>
    </div>
  );
}


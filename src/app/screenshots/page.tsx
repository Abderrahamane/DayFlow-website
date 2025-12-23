"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { screenshotShots, videoDemos } from "@/content/site";
import { SectionHeading } from "@/components/Section";
import Image from "next/image";

export default function ScreenshotsPage() {
  const [index, setIndex] = useState(0);
  const total = screenshotShots.length;

  const currentSet = useMemo(() => {
    const current = screenshotShots[index];
    const left = screenshotShots[(index - 1 + total) % total];
    const right = screenshotShots[(index + 1) % total];
    return { left, current, right };
  }, [index, total]);

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 space-y-10">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Screenshots</p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">See DayFlow in motion</h1>
          <p className="text-lg text-muted-foreground">A calm carousel of the core screens. Use the arrows or swipe to browse.</p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous screenshot"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="flex w-full items-center justify-center gap-4">
            <div className="hidden basis-1/5 opacity-40 sm:block scale-90 blur-[1px]">
              <ScreenshotPane keyId={currentSet.left.src} shot={currentSet.left} sizeClass="aspect-[10/19]" />
            </div>
            <div className="basis-2/3 sm:basis-1/5">
              <ScreenshotPane keyId={currentSet.current.src} shot={currentSet.current} sizeClass="aspect-[10/19]" emphasize />
              <p className="mt-4 text-center text-sm font-medium text-muted-foreground">{currentSet.current.label}</p>
            </div>
            <div className="hidden basis-1/5 opacity-40 sm:block scale-90 blur-[1px]">
              <ScreenshotPane keyId={currentSet.right.src} shot={currentSet.right} sizeClass="aspect-[10/19]" />
            </div>
          </div>

          <button
            onClick={next}
            aria-label="Next screenshot"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="flex justify-center gap-2">
          {screenshotShots.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${index === i ? "bg-foreground" : "bg-muted-foreground/40"}`}
            />
          ))}
        </div>

        <div className="space-y-6">
          <SectionHeading eyebrow="Video" title="Short demos" />
          <div className="grid gap-6 lg:grid-cols-2">
            {videoDemos.map((video) => (
              <div key={video.url} className="space-y-3 rounded-2xl border border-border bg-card/70 p-4 shadow-sm">
                <div className="aspect-video overflow-hidden rounded-xl border border-border bg-black/10">
                  <iframe
                    className="h-full w-full"
                    src={video.url}
                    title={video.title}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div>
                  <p className="text-base font-semibold">{video.title}</p>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}

function ScreenshotPane({ keyId, shot, sizeClass, emphasize }: { keyId: string; shot: { src: string; alt: string }; sizeClass: string; emphasize?: boolean }) {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={keyId}
        initial={{ opacity: 0, y: 18, scale: emphasize ? 0.98 : 0.95 }}
        animate={{ opacity: 1, y: 0, scale: emphasize ? 1 : 0.97 }}
        exit={{ opacity: 0, y: -12, scale: emphasize ? 0.98 : 0.95 }}
        transition={{ type: "spring", stiffness: 160, damping: 22 }}
        className={`overflow-hidden rounded-2xl border border-border bg-card shadow-sm ${emphasize ? "shadow-xl" : ""}`}
      >
        <div className={`relative ${sizeClass}`}>
          <Image src={shot.src} alt={shot.alt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 90vw" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

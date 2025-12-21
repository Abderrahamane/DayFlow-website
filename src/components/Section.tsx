import Image from "next/image";
import { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, cta }: { eyebrow: string; title: string; cta?: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <span className="h-10 w-10 rounded-2xl border border-border bg-card/80 p-2 shadow-sm">
          <Image src="/logo.svg" alt="DayFlow" width={32} height={32} />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{eyebrow}</p>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
        </div>
      </div>
      {cta}
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">{children}</span>;
}


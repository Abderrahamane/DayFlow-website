import PageShell from "@/components/PageShell";
import { downloadInfo } from "@/content/site";
import Link from "next/link";
import Image from "next/image";
import { Smartphone, Github } from "lucide-react";

export default function DownloadPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-16">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Download</p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">{downloadInfo.headline}</h1>
          <p className="text-lg text-muted-foreground">{downloadInfo.summary}</p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <Link
              href={downloadInfo.primary.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-background text-base font-semibold transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Smartphone className="h-5 w-5" /> {downloadInfo.primary.label}
            </Link>
            <Link
              href={downloadInfo.secondary.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" /> {downloadInfo.secondary.label}
            </Link>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {downloadInfo.steps.map((step) => (
                <li key={step} className="rounded-xl border border-border bg-card/70 px-4 py-3">
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-border bg-muted">
              <Image src="/file.svg" alt="QR code placeholder" fill className="object-contain" sizes="160px" />
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Scan to install</p>
              <p>Opens the APK download.</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

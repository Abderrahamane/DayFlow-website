import PageShell from "@/components/PageShell";
import { aboutSections } from "@/content/site";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-16 space-y-10">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">About</p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">About DayFlow</h1>
          <p className="text-lg text-muted-foreground">What the app is, why it exists, and what comes next.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {aboutSections.map((section) => (
            <div key={section.title} className="rounded-2xl border border-border bg-card/70 p-5 shadow-sm">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

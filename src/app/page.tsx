import Image from "next/image";
import Link from "next/link";
import { brand, screenshotShots } from "@/content/site";

export default function HomePage() {
	const heroShot = screenshotShots[2] ?? screenshotShots[0];

	return (
		<section className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.05fr,0.95fr] md:items-center">
			<div className="space-y-4">
				<p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{brand.name}</p>
				<h1 className="text-4xl font-bold leading-tight md:text-5xl">{brand.slogan}</h1>
				<p className="text-lg text-muted-foreground leading-relaxed">{brand.summary}</p>
				<div className="flex flex-wrap items-center gap-3">
					<Link
						href="/download"
						className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-background text-base font-semibold transition hover:-translate-y-0.5 hover:shadow-lg"
					>
						Download the app
					</Link>
					<Link
						href="/features"
						className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:shadow-lg"
					>
						Explore features
					</Link>
				</div>
				<div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
					<span className="rounded-full border border-border bg-card px-3 py-1">Android</span>
					<span className="rounded-full border border-border bg-card px-3 py-1">Offline-first</span>
					<span className="rounded-full border border-border bg-card px-3 py-1">Private by design</span>
				</div>
			</div>

			<div className="relative">
				<div className="absolute left-[-40px] top-[10%] h-24 w-24 rounded-full" style={{ background: "var(--gradient-1)", opacity: 0.35 }} />
				<div className="gradient-border mx-auto max-w-xl rounded-2xl p-4 shadow-2xl">
					<div className="rounded-xl bg-card p-4 shadow-inner">
						<div className="flex items-center justify-between text-xs text-muted-foreground">
							<span>DayFlow</span>
							<div className="flex gap-2">
								<span className="h-2 w-2 rounded-full bg-emerald-400" />
								<span className="h-2 w-2 rounded-full bg-amber-400" />
								<span className="h-2 w-2 rounded-full bg-rose-400" />
							</div>
						</div>
						<div className="mt-4 overflow-hidden rounded-xl border border-border bg-muted/50">
							<div className="relative aspect-[10/19]">
								<Image src={heroShot.src} alt={heroShot.alt} fill className="object-cover" sizes="(min-width: 1024px) 40vw, 90vw" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

import Image from "next/image";
import Link from "next/link";
import { brand, screenshotShots } from "@/content/site";
import { ArrowRight, Smartphone } from "lucide-react";

export default function HomePage() {
	const heroShot = screenshotShots[2] ?? screenshotShots[0];

	return (
		<section className="relative mx-auto flex max-w-5xl flex-col items-center gap-12 px-6 pb-24 pt-20 text-center md:pt-32">
			<div className="space-y-6">
				<div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
					<span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
					Available on Android
				</div>
				<h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">{brand.slogan}</h1>
				<p className="mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed">{brand.summary}</p>
				<div className="flex flex-wrap items-center justify-center gap-4">
					<Link
						href="/download"
						className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-lg font-semibold text-background transition hover:-translate-y-0.5 hover:shadow-xl"
					>
						<Smartphone className="h-5 w-5" /> Download App
					</Link>
					<Link
						href="/features"
						className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-lg font-medium text-foreground transition hover:-translate-y-0.5 hover:shadow-xl"
					>
						Explore Features <ArrowRight className="h-5 w-5" />
					</Link>
				</div>
			</div>

			<div className="relative mt-8 w-full max-w-[320px]">
				<div className="absolute inset-0 -z-10 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl" />
				<div className="overflow-hidden rounded-[2.5rem] border-8 border-slate-900 bg-slate-900 shadow-2xl">
					<div className="relative aspect-[10/20] w-full bg-black">
						<Image
							src={heroShot.src}
							alt={heroShot.alt}
							fill
							className="object-cover"
							sizes="(min-width: 768px) 320px, 90vw"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

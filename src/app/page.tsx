"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
	ArrowLeft,
	ArrowRight,
	ArrowUpRight,
	BarChart3,
	Bell,
	CheckCircle2,
	Cloud,
	Github,
	Globe2,
	Languages,
	Moon,
	Play,
	Smartphone,
	Sun,
	WifiOff,
	Sparkles,
	ShieldCheck,
	TimerReset,
	LayoutTemplate,
	RefreshCcw,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const heroBadges = [
	"AI-assisted planning",
	"Material 3 native",
	"Offline-first",
];

const features = [
	{
		title: "Tasks & To-Dos",
		description: "Create, sort, filter, recur, and template tasks with overdue clarity.",
		icon: CheckCircle2,
	},
	{
		title: "Calendar Views",
		description: "Month, two-week, and week views with priority colors and quick refresh.",
		icon: RefreshCcw,
	},
	{
		title: "Habits & Streaks",
		description: "Daily/weekly goals, streaks, colors, icons, and progress stats.",
		icon: Sparkles,
	},
	{
		title: "Reminders & Notifications",
		description: "Schedule today/tomorrow/upcoming reminders with pull-to-refresh.",
		icon: Bell,
	},
	{
		title: "Notes & Security",
		description: "Text, checklists, rich notes, search, and biometric lock support.",
		icon: ShieldCheck,
	},
	{
		title: "Focus / Pomodoro",
		description: "Linked tasks, focus minutes, streaks, history, and settings.",
		icon: TimerReset,
	},
	{
		title: "Sync & Offline",
		description: "Cloud Firestore + offline cache for seamless multi-device planning.",
		icon: Cloud,
	},
	{
		title: "Multi-language & RTL",
		description: "en / fr / ar with RTL-aware layouts and theming.",
		icon: Languages,
	},
];

const steps = [
	"Install DayFlow",
	"Create tasks & habits",
	"Track progress",
	"Sync across devices",
];

const stack = [
	"Flutter",
	"Firebase",
	"Provider",
	"Material 3",
	"Cloud Firestore",
	"Mixpanel Analytics",
	"Local DB + Offline",
];

const team = [
	{
		name: "Abderrahmane Houri",
		role: "Team Leader & Flutter Developer",
		bio: "Leads architecture, delivery, and calm UX.",
		img: "/team/abderrahmane.jpg",
		github: "https://github.com/",
		linkedin: "https://www.linkedin.com/",
	},
	{
		name: "Mohamed Al Amin Saàd",
		role: "Flutter Developer",
		bio: "Builds features fast with Firebase and Provider.",
		img: "/team/mohamed.jpg",
		github: "https://github.com/",
		linkedin: "https://www.linkedin.com/",
	},
	{
		name: "Lina Selma Ouadah",
		role: "Flutter Developer (UI/UX)",
		bio: "Designs delightful Material 3 experiences.",
		img: "/team/lina.jpg",
		github: "https://github.com/",
		linkedin: "https://www.linkedin.com/",
	},
];

const screenshots = Array.from({ length: 8 }).map((_, idx) => ({
	src: `/screenshots/screen-${idx + 1}.jpg`,
	alt: `DayFlow screenshot ${idx + 1}`,
}));

const fadeIn = {
	hidden: { opacity: 0, y: 12 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
	hidden: {},
	show: { transition: { staggerChildren: 0.08 } },
};

function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const isDark = theme === "dark";
	return (
		<button
			aria-label="Toggle theme"
			className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
			onClick={() => setTheme(isDark ? "light" : "dark")}
		>
			{isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
		</button>
	);
}

function Badge({ children }: { children: React.ReactNode }) {
	return (
		<span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
			<span className="h-1.5 w-1.5 rounded-full bg-accent" />
			{children}
		</span>
	);
}

function SectionHeading({
	eyebrow,
	title,
	cta,
}: {
	eyebrow: string;
	title: string;
	cta?: React.ReactNode;
}) {
	return (
		<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{eyebrow}</p>
				<h2 className="text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
			</div>
			{cta}
		</div>
	);
}

function ScreenshotCarousel() {
	const [index, setIndex] = useState(0);
	const visible = 3;
	const total = screenshots.length;
	const maxIndex = Math.max(0, total - visible);

	const current = useMemo(() => screenshots.slice(index, index + visible), [index]);

	const next = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
	const prev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

	return (
		<div className="relative">
			<div className="overflow-hidden rounded-2xl border border-border bg-card/70 shadow-lg">
				<div className="flex items-stretch gap-4 px-4 py-4">
					<AnimatePresence initial={false} mode="popLayout">
						{current.map((shot) => (
							<motion.div
								key={shot.src}
								layout
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ type: "spring", stiffness: 120, damping: 18 }}
								className="basis-1/3 shrink-0"
							>
								<div className="relative aspect-[9/19] overflow-hidden rounded-xl border border-border bg-muted">
									<Image
										src={shot.src}
										alt={shot.alt}
										fill
										className="object-cover"
										sizes="(min-width: 1024px) 33vw, 100vw"
									/>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</div>
			</div>
			<div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
				<button
					aria-label="Previous screenshot"
					onClick={prev}
					className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-card/90 text-foreground shadow-md ring-1 ring-border transition hover:scale-105"
				>
					<ArrowLeft className="h-4 w-4" />
				</button>
				<button
					aria-label="Next screenshot"
					onClick={next}
					className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-card/90 text-foreground shadow-md ring-1 ring-border transition hover:scale-105"
				>
					<ArrowRight className="h-4 w-4" />
				</button>
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<div className="absolute left-[-120px] top-[-60px] blur-glow" style={{ background: "#818cf8" }} />
			<div className="absolute right-[-160px] top-[160px] blur-glow" style={{ background: "#8b5cf6" }} />
			<div className="absolute left-[-100px] bottom-[-120px] blur-glow" style={{ background: "#22d3ee" }} />
			<header className="sticky top-0 z-30 backdrop-blur border-b border-border/60 bg-background/80">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
					<div className="flex items-center gap-3">
						<div className="h-10 w-10 rounded-2xl" style={{ backgroundImage: "var(--gradient-1)" }} />
						<div>
							<p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">DayFlow</p>
							<p className="text-lg font-semibold leading-none">Smart Daily Planner</p>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<Link
							className="hidden md:inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:shadow-lg"
							href="#download"
						>
							Install app <ArrowRight className="h-4 w-4" />
						</Link>
						<ThemeToggle />
					</div>
				</div>
			</header>

			<main className="relative z-10">
				<section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-16 md:flex-row md:items-center">
					<div className="flex-1">
						<div className="flex flex-wrap gap-2">
							{heroBadges.map((badge) => (
								<Badge key={badge}>{badge}</Badge>
							))}
						</div>
						<motion.h1
							variants={fadeIn}
							initial="hidden"
							animate="show"
							className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl"
						>
							Organize your day.{" "}
							<span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-1)" }}>
								Build your flow.
							</span>
						</motion.h1>
						<motion.p
							variants={fadeIn}
							initial="hidden"
							animate="show"
							transition={{ delay: 0.1 }}
							className="mt-4 max-w-xl text-lg text-muted-foreground"
						>
							DayFlow blends tasks, habits, notes, reminders, focus, and analytics into a calm Material 3 experience with AI-ready workflows.
						</motion.p>
						<motion.div
							variants={fadeIn}
							initial="hidden"
							animate="show"
							transition={{ delay: 0.2 }}
							className="mt-8 flex flex-wrap items-center gap-3"
						>
							<Link
								href="#download"
								className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-background transition hover:-translate-y-0.5 hover:shadow-lg"
							>
								Download for Android
							</Link>
							<Link
								href="#download"
								className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-foreground transition hover:-translate-y-0.5 hover:shadow-lg"
							>
								Download for iOS
							</Link>
							<Link
								href="https://github.com/"
								className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-3 text-foreground transition hover:-translate-y-0.5 hover:shadow-lg"
							>
								<Github className="h-4 w-4" /> View on GitHub
							</Link>
						</motion.div>
						<div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
							<div className="flex items-center gap-2 rounded-full border border-border px-3 py-1">
								<CheckCircle2 className="h-4 w-4 text-emerald-500" /> Material 3 inspired
							</div>
							<div className="flex items-center gap-2 rounded-full border border-border px-3 py-1">
								<Globe2 className="h-4 w-4 text-sky-500" /> EN / FR / AR
							</div>
							<div className="flex items-center gap-2 rounded-full border border-border px-3 py-1">
								<Cloud className="h-4 w-4 text-indigo-500" /> Firebase sync
							</div>
						</div>
					</div>

					<div className="relative flex-1">
						<div className="absolute left-[-60px] top-[20%] h-28 w-28 rounded-full" style={{ background: "var(--gradient-1)", opacity: 0.4 }} />
						<motion.div
							initial={{ rotate: -2, opacity: 0, y: 20 }}
							animate={{ rotate: 0, opacity: 1, y: 0 }}
							transition={{ type: "spring", stiffness: 120, damping: 18 }}
							className="gradient-border mx-auto max-w-[360px] rounded-2xl p-4 shadow-2xl"
						>
							<div className="rounded-xl bg-card p-4 shadow-inner">
								<div className="flex items-center justify-between text-xs text-muted-foreground">
									<span>DayFlow</span>
									<div className="flex gap-2">
										<span className="h-2 w-2 rounded-full bg-emerald-400" />
										<span className="h-2 w-2 rounded-full bg-amber-400" />
										<span className="h-2 w-2 rounded-full bg-rose-400" />
									</div>
								</div>
								<div className="mt-4 space-y-3 text-sm">
									<div className="flex items-center justify-between rounded-xl bg-muted/60 px-4 py-3">
										<div>
											<p className="font-semibold">Morning routine</p>
											<p className="text-xs text-muted-foreground">Habits · 6:00 AM</p>
										</div>
										<CheckCircle2 className="h-5 w-5 text-emerald-400" />
									</div>
									<div className="rounded-xl bg-muted/50 px-4 py-3">
										<p className="font-semibold">Design sprint</p>
										<p className="text-xs text-muted-foreground">Tasks · 9:30 AM · Team</p>
									</div>
									<div className="flex items-center justify-between rounded-xl bg-muted/40 px-4 py-3">
										<div>
											<p className="font-semibold">Deep work block</p>
											<p className="text-xs text-muted-foreground">Focus · 11:00 AM</p>
										</div>
										<Bell className="h-4 w-4 text-amber-400" />
									</div>
									<div className="rounded-xl bg-muted/30 px-4 py-3">
										<p className="font-semibold">Analytics pulse</p>
										<p className="text-xs text-muted-foreground">Insights · 6:00 PM</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				<section id="features" className="mx-auto max-w-6xl px-6 pb-20">
					<SectionHeading
						eyebrow="Features"
						title="Everything you need to build your flow"
						cta={
							<Link className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground" href="#download">
								Install app <ArrowRight className="h-4 w-4" />
							</Link>
						}
					/>
					<motion.div
						variants={stagger}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.2 }}
						className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
					>
						{features.map((item) => (
							<motion.div
								key={item.title}
								variants={fadeIn}
								className="group rounded-2xl border border-border bg-card/70 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
							>
								<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-accent">
									<item.icon className="h-5 w-5" />
								</div>
								<h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
								<p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
							</motion.div>
						))}
					</motion.div>
				</section>

				<section id="media" className="mx-auto max-w-6xl px-6 pb-20">
					<SectionHeading
						eyebrow="Screenshots & Video"
						title="See DayFlow in action"
						cta={
							<Link className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground" href="#download">
								Watch demo <Play className="h-4 w-4" />
							</Link>
						}
					/>
					<div className="mt-6 grid gap-6 lg:grid-cols-3">
						<div className="lg:col-span-2 space-y-4">
							<div className="aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
								<iframe
									className="h-full w-full"
									src="https://www.youtube.com/embed/gZ9yZl7dG3M"
									title="DayFlow demo"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								/>
							</div>
							<p className="text-sm text-muted-foreground">Replace with your production demo or MP4 to showcase the app.</p>
						</div>
						<ScreenshotCarousel />
					</div>
				</section>

				<section id="how" className="mx-auto max-w-6xl px-6 pb-20">
					<SectionHeading eyebrow="How it works" title="From install to insights" />
					<div className="mt-8 grid gap-4 md:grid-cols-4">
						{steps.map((step, idx) => (
							<div key={step} className="rounded-2xl border border-border bg-card/70 p-5 shadow-sm">
								<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-sm font-semibold text-accent">
									{idx + 1}
								</div>
								<h3 className="mt-4 text-lg font-semibold">{step}</h3>
								<p className="mt-2 text-sm text-muted-foreground">
									{idx === 0 && "Download on Android/iOS or scan the QR."}
									{idx === 1 && "Add tasks, habits, notes, reminders, templates."}
									{idx === 2 && "Track focus, streaks, analytics, and history."}
									{idx === 3 && "Sync via Firebase + local cache; works offline."}
								</p>
							</div>
						))}
					</div>
				</section>

				<section id="stack" className="mx-auto max-w-6xl px-6 pb-20">
					<SectionHeading
						eyebrow="Technology"
						title="Built with a modern Flutter stack"
						cta={
							<div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
								<span className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1">
									<WifiOff className="h-4 w-4" /> Offline-first
								</span>
								<span className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1">
									<LayoutTemplate className="h-4 w-4" /> Templates
								</span>
							</div>
						}
					/>
					<div className="mt-6 flex flex-wrap gap-2">
						{stack.map((item) => (
							<span key={item} className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
								{item}
							</span>
						))}
					</div>
					<div className="mt-8 grid gap-4 md:grid-cols-3">
						<div className="rounded-2xl border border-border bg-card/70 p-5 shadow-sm">
							<h3 className="text-lg font-semibold">Material 3 native feel</h3>
							<p className="mt-2 text-sm text-muted-foreground">Rounded surfaces, adaptive themes, and Flutter-consistent motion.</p>
						</div>
						<div className="rounded-2xl border border-border bg-card/70 p-5 shadow-sm">
							<h3 className="text-lg font-semibold">Firebase realtime sync</h3>
							<p className="mt-2 text-sm text-muted-foreground">Cloud Firestore + local DB keep tasks, habits, notes in sync.</p>
						</div>
						<div className="rounded-2xl border border-border bg-card/70 p-5 shadow-sm">
							<h3 className="text-lg font-semibold">Analytics & insights</h3>
							<p className="mt-2 text-sm text-muted-foreground">Mixpanel hooks for engagement, focus stats, streaks, and funnels.</p>
						</div>
					</div>
				</section>

				<section id="team" className="mx-auto max-w-6xl px-6 pb-20">
					<SectionHeading
						eyebrow="Team"
						title="Built by a focused trio"
						cta={
							<Link className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground" href="https://github.com/">
								GitHub <Github className="h-4 w-4" />
							</Link>
						}
					/>
					<div className="mt-8 grid gap-4 md:grid-cols-3">
						{team.map((member) => (
							<div key={member.name} className="glass-card rounded-2xl p-5 shadow-sm">
								<div className="relative h-14 w-14 overflow-hidden rounded-xl border border-border bg-muted">
									<Image src={member.img} alt={member.name} fill className="object-cover" sizes="96px" />
								</div>
								<h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
								<p className="text-sm text-muted-foreground">{member.role}</p>
								<p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
								<div className="mt-3 flex gap-3 text-sm text-muted-foreground">
									<Link href={member.github} className="hover:text-foreground">GitHub</Link>
									<Link href={member.linkedin} className="hover:text-foreground">LinkedIn</Link>
								</div>
							</div>
						))}
					</div>
				</section>

				<section id="download" className="mx-auto max-w-6xl px-6 pb-24">
					<div className="glass-card rounded-3xl p-8 shadow-xl">
						<div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
							<div>
								<p className="text-sm font-semibold text-muted-foreground">Get the app</p>
								<h2 className="text-3xl font-bold">Install DayFlow and start planning</h2>
								<p className="mt-2 max-w-xl text-sm text-muted-foreground">
									Download on your platform or scan the QR code to open the store page. Coming soon badges can be toggled easily.
								</p>
								<div className="mt-4 flex flex-wrap items-center gap-3">
									<button className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-background transition hover:-translate-y-0.5 hover:shadow-lg">
										<Smartphone className="h-4 w-4" /> Google Play
									</button>
									<button className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-foreground transition hover:-translate-y-0.5 hover:shadow-lg">
										<Smartphone className="h-4 w-4" /> App Store
									</button>
									<Link
										href="https://github.com/"
										className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-3 text-foreground transition hover:-translate-y-0.5 hover:shadow-lg"
									>
										<Github className="h-4 w-4" /> GitHub
									</Link>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<div className="relative h-32 w-32 overflow-hidden rounded-2xl border border-border bg-muted">
									<Image src="/file.svg" alt="QR code placeholder" fill className="object-contain" sizes="128px" />
								</div>
								<div className="text-sm text-muted-foreground">
									<p className="font-semibold text-foreground">Scan to install</p>
									<p>QR code opens the store page.</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className="border-t border-border/60 bg-background/80 px-6 py-10">
				<div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
					<div>
						<p className="text-lg font-semibold">DayFlow</p>
						<p className="text-sm text-muted-foreground">© {new Date().getFullYear()} DayFlow. All rights reserved.</p>
					</div>
					<div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
						<Link href="#">GitHub</Link>
						<Link href="#">Contact</Link>
						<Link href="#">License</Link>
						<a href="#top" className="inline-flex items-center gap-2 text-foreground">
							Back to top <ArrowUpRight className="h-4 w-4" />
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}

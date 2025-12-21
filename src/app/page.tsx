"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Github, Globe2, Moon, Sun, Play, Smartphone, Languages, BarChart3, Bell, Cloud, WifiOff } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const features = [
	{
		title: "Task Management",
		description: "Plan tasks with priorities, tags, and smart suggestions.",
		icon: CheckCircle2,
	},
	{
		title: "Habit Tracking",
		description: "Build streaks with visual progress and reminders.",
		icon: Smartphone,
	},
	{
		title: "Notes",
		description: "Lightweight notes attached to your day and tasks.",
		icon: Globe2,
	},
	{
		title: "Reminders",
		description: "Smart notifications that respect focus time.",
		icon: Bell,
	},
	{
		title: "Analytics & Insights",
		description: "See trends, streaks, and time spent by category.",
		icon: BarChart3,
	},
	{
		title: "Cloud Sync (Firebase)",
		description: "Realtime sync across devices with offline-first.",
		icon: Cloud,
	},
	{
		title: "Offline Support",
		description: "Keep planning even without internet. Sync later.",
		icon: WifiOff,
	},
	{
		title: "Multi-language (EN / FR / AR)",
		description: "RTL-ready UI with localized content.",
		icon: Languages,
	},
];

const steps = [
	{
		title: "Install DayFlow",
		text: "Download on Android or iOS and sign in with email or Google.",
	},
	{
		title: "Create tasks & habits",
		text: "Add tasks, set priorities, create daily habits, and attach notes.",
	},
	{
		title: "Track progress",
		text: "Use analytics, streaks, and reminders to stay on track.",
	},
	{
		title: "Sync across devices",
		text: "Realtime sync with Firebase and offline-first caching.",
	},
];

const stack = ["Flutter", "Firebase", "Provider", "Material 3", "Cloud Firestore"];

const team = [
	{
		name: "Abderrahmane Houri",
		role: "Team Leader & Flutter Developer",
		bio: "Leads architecture and delivery. Loves clean UI.",
	},
	{
		name: "Mohamed Al Amin Saàd",
		role: "Flutter Developer",
		bio: "Ships features fast with Firebase and Provider.",
	},
	{
		name: "Lina Selma Ouadah",
		role: "Flutter Developer (UI/UX)",
		bio: "Designs delightful Material 3 experiences.",
	},
];

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

const fadeIn = {
	hidden: { opacity: 0, y: 12 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
	hidden: {},
	show: { transition: { staggerChildren: 0.08 } },
};

export default function Home() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<div className="absolute left-[-120px] top-[-60px] blur-glow" style={{ background: "#5dd6ff" }} />
			<div className="absolute right-[-160px] top-[160px] blur-glow" style={{ background: "#8f8fff" }} />
			<div className="absolute left-[-100px] bottom-[-120px] blur-glow" style={{ background: "#38bdf8" }} />
			<header className="sticky top-0 z-30 backdrop-blur border-b border-border/60 bg-background/70">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
					<div className="flex items-center gap-3">
						<div className="h-10 w-10 rounded-2xl bg-[var(--gradient-1)]" />
						<div>
							<p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">DayFlow</p>
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
						<div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
							<span className="h-2 w-2 rounded-full bg-emerald-400" /> AI-ready productivity
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
							DayFlow is the Flutter-powered daily planner that blends tasks, habits, notes, and insights with a calm
							Material 3 design—optimized for focus and flow.
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
								<CheckCircle2 className="h-4 w-4 text-emerald-400" /> Material 3 inspired
							</div>
							<div className="flex items-center gap-2 rounded-full border border-border px-3 py-1">
								<Globe2 className="h-4 w-4 text-sky-400" /> EN / FR / AR
							</div>
							<div className="flex items-center gap-2 rounded-full border border-border px-3 py-1">
								<Cloud className="h-4 w-4 text-indigo-400" /> Firebase sync
							</div>
						</div>
					</div>

					<div className="relative flex-1">
						<div className="absolute left-[-60px] top-[20%] h-28 w-28 rounded-full bg-[var(--gradient-1)] opacity-60 blur-3xl" />
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
										<Bell className="h-4 w-4 text-amber-300" />
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
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-semibold text-muted-foreground">Features</p>
							<h2 className="text-3xl font-bold">Built for focus and flow</h2>
						</div>
						<Link
							href="#download"
							className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
						>
							Install app <ArrowRight className="h-4 w-4" />
						</Link>
					</div>
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
								className="group rounded-2xl border border-border bg-card/60 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
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
					<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<p className="text-sm font-semibold text-muted-foreground">Screenshots & Videos</p>
							<h2 className="text-3xl font-bold">See DayFlow in action</h2>
						</div>
						<Link
							href="#download"
							className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
						>
							Watch demo <Play className="h-4 w-4" />
						</Link>
					</div>
					<div className="mt-6 grid gap-6 lg:grid-cols-3">
						<div className="lg:col-span-2 space-y-4">
							<div className="aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
								<iframe
									className="h-full w-full"
									src="https://www.youtube.com/embed/dQw4w9WgXcQ"
									title="DayFlow demo"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								/>
							</div>
							<p className="text-sm text-muted-foreground">
								Embed your product demo video or MP4 here for a smooth preview experience.
							</p>
						</div>
						<div className="grid gap-4">
							{[1, 2, 3].map((i) => (
								<div
									key={i}
									className="relative overflow-hidden rounded-2xl border border-border bg-card/80 shadow-md"
								>
									<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-30" />
									<Image
										src="/window.svg"
										alt={`App screenshot ${i}`}
										width={600}
										height={400}
										className="h-full w-full object-cover"
									/>
								</div>
							))}
						</div>
					</div>
				</section>

				<section id="how" className="mx-auto max-w-6xl px-6 pb-20">
					<p className="text-sm font-semibold text-muted-foreground">How it works</p>
					<h2 className="text-3xl font-bold">From install to insights</h2>
					<div className="mt-8 grid gap-4 md:grid-cols-4">
						{steps.map((step, idx) => (
							<div key={step.title} className="rounded-2xl border border-border bg-card/70 p-5 shadow-sm">
								<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-sm font-semibold text-accent">
									{idx + 1}
								</div>
								<h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
								<p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
							</div>
						))}
					</div>
				</section>

				<section id="stack" className="mx-auto max-w-6xl px-6 pb-20">
					<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<p className="text-sm font-semibold text-muted-foreground">Technology</p>
							<h2 className="text-3xl font-bold">Built with modern Flutter stack</h2>
						</div>
						<div className="flex flex-wrap gap-2">
							{stack.map((item) => (
								<span
									key={item}
									className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground"
								>
									{item}
								</span>
							))}
						</div>
					</div>
					<div className="mt-8 grid gap-4 md:grid-cols-3">
						<div className="rounded-2xl border border-border bg-card/70 p-5 shadow-sm">
							<h3 className="text-lg font-semibold">Material 3 native feel</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								Design language matches Flutter app with rounded surfaces, soft shadows, and adaptive theming.
							</p>
						</div>
						<div className="rounded-2xl border border-border bg-card/70 p-5 shadow-sm">
							<h3 className="text-lg font-semibold">Firebase realtime sync</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								Cloud Firestore + offline cache keep tasks and habits consistent across devices.
							</p>
						</div>
						<div className="rounded-2xl border border-border bg-card/70 p-5 shadow-sm">
							<h3 className="text-lg font-semibold">Provider state management</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								Predictable state for tasks, habits, reminders, and analytics modules.
							</p>
						</div>
					</div>
				</section>

				<section id="team" className="mx-auto max-w-6xl px-6 pb-20">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-semibold text-muted-foreground">Team</p>
							<h2 className="text-3xl font-bold">Built by a focused trio</h2>
						</div>
						<Link
							href="https://github.com/"
							className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
						>
							GitHub <Github className="h-4 w-4" />
						</Link>
					</div>
					<div className="mt-8 grid gap-4 md:grid-cols-3">
						{team.map((member) => (
							<div key={member.name} className="rounded-2xl border border-border bg-card/70 p-5 shadow-sm">
								<div className="h-14 w-14 rounded-xl bg-[var(--gradient-1)]" />
								<h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
								<p className="text-sm text-muted-foreground">{member.role}</p>
								<p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
								<div className="mt-3 flex gap-2 text-sm text-muted-foreground">
									<Link href="https://github.com/" className="hover:text-foreground">
										GitHub
									</Link>
									<span>·</span>
									<Link href="https://linkedin.com" className="hover:text-foreground">
										LinkedIn
									</Link>
								</div>
							</div>
						))}
					</div>
				</section>

				<section id="download" className="mx-auto max-w-6xl px-6 pb-24">
					<div className="rounded-3xl border border-border bg-card/80 p-8 shadow-xl">
						<div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
							<div>
								<p className="text-sm font-semibold text-muted-foreground">Get the app</p>
								<h2 className="text-3xl font-bold">Install DayFlow and start planning</h2>
								<p className="mt-2 max-w-xl text-sm text-muted-foreground">
									Download on your platform of choice or scan the QR code to open the store page. Coming soon badges
									can be toggled easily.
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
								<div className="h-32 w-32 rounded-2xl border border-border bg-muted" />
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
						<p className="text-sm text-muted-foreground">
							© {new Date().getFullYear()} DayFlow. All rights reserved.
						</p>
					</div>
					<div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
						<Link href="#">GitHub</Link>
						<Link href="#">Contact</Link>
						<Link href="#">License</Link>
						<a
							href="#top"
							className="inline-flex items-center gap-2 text-foreground"
						>
							Back to top <ArrowRight className="h-4 w-4" />
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}

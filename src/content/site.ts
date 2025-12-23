import {
  Bell,
  CalendarCheck2,
  CheckCircle2,
  Cloud,
  FileText,
  Layers,
  Play,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  TimerReset,
  BarChart3,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Screenshots", href: "/screenshots" },
  { label: "Team", href: "/team" },
  { label: "Download", href: "/download" },
  { label: "About", href: "/about" },
];

export const brand = {
  name: "DayFlow",
  slogan: "Plan once. Flow all day.",
  summary: "DayFlow keeps tasks, habits, focus, and notes in one calm Android app.",
};

export const featureCategories = [
  {
    title: "Plan", // keep one idea per block
    items: [
      {
        title: "Tasks that stay clear",
        description: "Priorities, due dates, and quick filters stay in one calm list.",
        icon: CheckCircle2,
        image: "https://illustrations.popsy.co/amber/task-list.svg",
      },
      {
        title: "Calendar that matches reality",
        description: "Day, week, and month views so you always see the right zoom level.",
        icon: CalendarCheck2,
        image: "https://illustrations.popsy.co/amber/calendar.svg",
      },
      {
        title: "Habits with real streaks",
        description: "Simple habit tracking with streaks and color cues to stay consistent.",
        icon: Sparkles,
        image: "https://illustrations.popsy.co/amber/success.svg",
      },
    ],
  },
  {
    title: "Focus",
    items: [
      {
        title: "Sessions tied to tasks",
        description: "Start a focus timer that is linked to the task you are doing.",
        icon: TimerReset,
        image: "https://illustrations.popsy.co/amber/time-management.svg",
      },
      {
        title: "Progress that feels honest",
        description: "See time spent, streaks, and a short history without dashboards.",
        icon: BarChart3,
        image: "https://illustrations.popsy.co/amber/analytics.svg",
      },
      {
        title: "Quiet reminders",
        description: "Notifications land gently and only when you ask for them.",
        icon: Bell,
        image: "https://illustrations.popsy.co/amber/notification.svg",
      },
    ],
  },
  {
    title: "Keep",
    items: [
      {
        title: "Notes alongside work",
        description: "Lightweight notes sit next to your tasks and routines.",
        icon: FileText,
        image: "https://illustrations.popsy.co/amber/taking-notes.svg",
      },
      {
        title: "Offline-first",
        description: "Everything stays usable without signal and syncs when you are back.",
        icon: Cloud,
        image: "https://illustrations.popsy.co/amber/cloud-sync.svg",
      },
      {
        title: "Private by design",
        description: "Biometric lock and local storage keep your day personal.",
        icon: ShieldCheck,
        image: "https://illustrations.popsy.co/amber/secure.svg",
      },
    ],
  },
  {
    title: "Build",
    items: [
      {
        title: "Reusable templates",
        description: "Save routines and reuse them so planning stays fast.",
        icon: Layers,
        image: "https://illustrations.popsy.co/amber/template.svg",
      },
      {
        title: "Quick import",
        description: "Bring tasks and habits in without manual retyping.",
        icon: Play,
        image: "https://illustrations.popsy.co/amber/upload.svg",
      },
      {
        title: "Fast refresh",
        description: "Pull to refresh and keep lists up to date instantly.",
        icon: RefreshCcw,
        image: "https://illustrations.popsy.co/amber/refresh.svg",
      },
    ],
  },
];

export const screenshotShots = [
  { src: "/screenshots/screen1.jpg", alt: "Tasks list", label: "Tasks" },
  { src: "/screenshots/screen2.jpg", alt: "Task details", label: "Tasks" },
  { src: "/screenshots/screen3.jpg", alt: "Calendar view", label: "Calendar" },
  { src: "/screenshots/screen4.jpg", alt: "Habits", label: "Habits" },
  { src: "/screenshots/screen5.jpg", alt: "Notes", label: "Notes" },
  { src: "/screenshots/screen6.jpg", alt: "Focus timer", label: "Focus" },
  { src: "/screenshots/screen7.jpg", alt: "Analytics", label: "Analytics" },
  { src: "/screenshots/screen8.jpg", alt: "Templates", label: "Templates" },
];

export const videoDemos = [
  {
    title: "DayFlow walkthrough",
    url: "https://www.youtube.com/embed/elg7eKegv0o",
    description: "A quick look at tasks, habits, and focus mode in the app.",
  },
];

export const teamMembers = [
  {
    name: "Abderrahmane Houri",
    role: "Team Lead & Flutter Developer",
    note: "Guides architecture and keeps the UX calm.",
    img: "/team/abderrahmane.jpg",
    github: "https://github.com/Abderrahamane",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Mohamed Al Amin Saàd",
    role: "Flutter Developer",
    note: "Ships features quickly with Firebase and Provider.",
    img: "/team/saad.jpg",
    github: "https://github.com/Saad-Mohamed-Al-Amine",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Lina Selma Ouadah",
    role: "Flutter Developer (UI/UX)",
    note: "Crafts Material 3 visuals that stay approachable.",
    img: "/team/lina.jpg",
    github: "https://github.com/LinaOuadah",
    linkedin: "https://www.linkedin.com/",
  },
];

export const downloadInfo = {
  headline: "Your day, back in flow.",
  summary: "Download the APK to get started. Available for Android.",
  primary: { label: "Download APK", href: "/dayflow.apk" },
  secondary: { label: "View Source", href: "https://github.com/Abderrahamane/DayFlow" },
  steps: [
    "Download the APK file",
    "Open it on your Android device",
    "Allow installation from unknown sources if prompted",
    "Enjoy your new flow",
  ],
};

export const aboutSections = [
  {
    title: "What DayFlow is",
    body: "DayFlow is a calm planner for Android that keeps tasks, habits, focus, and notes together.",
  },
  {
    title: "How it helps",
    body: "You plan once, see a clear day view, and stay on track with light reminders and focus timers.",
  },
  {
    title: "Why it feels calm",
    body: "Minimal screens, Material 3 motion, and quiet notifications keep the experience clear.",
  },
  {
    title: "Privacy stance",
    body: "Your data stays yours. Offline-first with sync when you choose. Biometric lock supported.",
  },
  {
    title: "What is next",
    body: "More automation, better templates, and quicker capture are on the roadmap.",
  },
];

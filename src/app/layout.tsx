import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DayFlow – Smart Daily Planner",
  description:
    "Organize your day. Build your flow. AI-inspired daily planner with tasks, habits, reminders, notes, and insights.",
  metadataBase: new URL("https://dayflow.app"),
  keywords: [
    "DayFlow",
    "daily planner",
    "tasks",
    "habits",
    "pomodoro",
    "Flutter",
    "Firebase",
    "Material 3",
    "productivity app",
  ],
  openGraph: {
    title: "DayFlow – Smart Daily Planner",
    description: "Organize your day. Build your flow.",
    url: "https://dayflow.app",
    siteName: "DayFlow",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "DayFlow preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DayFlow – Smart Daily Planner",
    description: "Organize your day. Build your flow.",
    images: ["/og-cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

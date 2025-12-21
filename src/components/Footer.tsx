import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/80 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl border border-border bg-card/80 p-1 shadow-sm">
            <Image src="/logo.svg" alt="DayFlow logo" width={36} height={36} />
          </div>
          <div>
            <p className="text-lg font-semibold">DayFlow</p>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} DayFlow. All rights reserved.</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <Link href="https://github.com/Abderrahamane/DayFlow" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
          <Link href="mailto:hello@dayflow.app">Contact</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </footer>
  );
}


import { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute left-[-120px] top-[-60px] blur-glow" style={{ background: "#818cf8" }} />
      <div className="absolute right-[-160px] top-[160px] blur-glow" style={{ background: "#8b5cf6" }} />
      <div className="absolute left-[-100px] bottom-[-120px] blur-glow" style={{ background: "#22d3ee" }} />
      <div className="relative z-10 flex min-h-screen flex-col">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

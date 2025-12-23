"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/Section";
import { teamMembers } from "@/content/site";

export default function TeamPage() {
  const [active, setActive] = useState<string | null>(null);
  const openMember = teamMembers.find((m) => m.name === active) || null;

  return (
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Team</p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">Built by a small, focused team</h1>
          <p className="text-lg text-muted-foreground">People first. Clear roles. No fluff.</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {teamMembers.map((member) => (
            <button
              key={member.name}
              onClick={() => setActive(member.name)}
              className="text-left"
            >
              <div className="glass-card rounded-2xl p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <motion.div layoutId={member.name} className="relative h-20 w-20 overflow-hidden rounded-xl border border-border bg-muted">
                    <Image src={member.img} alt={member.name} fill className="object-cover" sizes="120px" />
                  </motion.div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{member.note}</p>
                <div className="mt-3 flex gap-3 text-sm text-muted-foreground">
                  <Link href={member.github} className="hover:text-foreground" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                  <Link href={member.linkedin} className="hover:text-foreground" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </Link>
                </div>
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {openMember && (
            <motion.div
              className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            >
              <motion.div
                layoutId={openMember.name}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-card shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 160, damping: 18 }}
              >
                <button
                  onClick={() => setActive(null)}
                  className="absolute right-3 top-3 rounded-full bg-background/80 px-3 py-1 text-sm font-semibold text-foreground shadow"
                >
                  Close
                </button>
                <div className="relative h-[380px] w-full">
                  <Image src={openMember.img} alt={openMember.name} fill className="object-cover" sizes="520px" />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-xl font-semibold">{openMember.name}</h3>
                  <p className="text-sm text-muted-foreground">{openMember.role}</p>
                  <p className="text-sm text-muted-foreground">{openMember.note}</p>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <Link href={openMember.github} className="hover:text-foreground" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </Link>
                    <Link href={openMember.linkedin} className="hover:text-foreground" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
  );
}

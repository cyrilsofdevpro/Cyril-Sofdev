"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TypingText } from "@/components/animations/typing-text";
import { Counter } from "@/components/animations/counter";
import { TerminalCard } from "@/components/home/terminal-card";

const roles = [
  "AI Software Engineer",
  "Full Stack Developer",
  "AI Automation Engineer",
  "Machine Learning Engineer",
  "Trading Systems Developer",
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center pb-24 pt-32">
      <div className="container relative z-10 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-brand-cyan before:h-px before:w-4 before:bg-brand-cyan"
          >
            AI Software Engineer · Nigeria
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="font-display text-[clamp(2.6rem,6vw,4.6rem)] font-bold leading-[1.02] tracking-tight"
          >
            AI Engineer &amp; Software
            <br />
            Developer building{" "}
            <span className="text-gradient">intelligent systems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            I&apos;m Cyril Sofdev. I design and ship AI-powered platforms, automation systems and trading
            technology, end to end: architecture, interface, and everything between.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-5 font-mono text-base"
          >
            <TypingText words={roles} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-9 flex flex-wrap gap-3.5"
          >
            <Button asChild>
              <Link href="/projects">
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="ghost">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" /> Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mt-10 flex flex-wrap gap-8"
          >
            <div>
              <div className="font-display text-2xl font-bold">
                <Counter value={7} suffix="+" />
              </div>
              <div className="font-mono text-[11px] text-muted-foreground">SHIPPED PRODUCTS</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold">
                <Counter value={4} />
              </div>
              <div className="font-mono text-[11px] text-muted-foreground">CORE DOMAINS</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold">
                <Counter value={100} suffix="%" />
              </div>
              <div className="font-mono text-[11px] text-muted-foreground">SOLO-BUILT, END-TO-END</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <TerminalCard />
        </motion.div>
      </div>
    </section>
  );
}

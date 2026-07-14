"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_70%)]" />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10rem] h-[36rem] w-[64rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] animate-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10rem] top-40 h-[24rem] w-[24rem] rounded-full bg-accent-2/20 blur-[100px] animate-float"
      />

      <Container className="relative flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Badge className="mb-8">
            <Sparkles size={12} className="text-accent" />
            Now in early access
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl"
        >
          Built by designers.
          <br />
          <span className="bg-gradient-to-r from-accent via-accent to-accent-2 bg-clip-text text-transparent">
            Made for designers.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-lg text-muted sm:text-xl"
        >
          Professional tools that help designers build better products —
          straight from a real design team&apos;s toolkit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button href="#products" size="lg">
            Explore products
            <ArrowRight size={16} />
          </Button>
          <Button href="#pricing" size="lg" variant="secondary">
            View pricing
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 w-full max-w-4xl"
        >
          <div className="relative rounded-2xl border border-white/10 bg-surface/60 p-2 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] backdrop-blur">
            <div className="flex items-center gap-1.5 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <div className="grid gap-3 rounded-xl border border-white/5 bg-black/40 p-6 sm:grid-cols-3">
              {[
                { label: "Total file size", value: "48.2 MB", tone: "text-accent" },
                { label: "Unused components", value: "312", tone: "text-accent-2" },
                { label: "Potential savings", value: "61%", tone: "text-accent" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/5 bg-white/[0.02] p-4 text-left"
                >
                  <p className="text-xs text-muted">{stat.label}</p>
                  <p className={`mt-2 text-2xl font-semibold ${stat.tone}`}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

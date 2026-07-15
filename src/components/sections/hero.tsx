"use client";

import { motion, MotionConfig } from "motion/react";
import {
  ArrowRight,
  Compass,
  FileWarning,
  FolderOpen,
  Frame,
  Image as ImageIcon,
  Minus,
  Palette,
  SquareStack,
  Users,
  X,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const scanRows = [
  {
    icon: ImageIcon,
    name: "Hero/Illustration-Final.png",
    tag: "Image",
    size: "18.4 MB",
    width: "w-[92%]",
    tone: "bg-accent-2",
  },
  {
    icon: SquareStack,
    name: "Components/Button-Set",
    tag: "Component",
    size: "9.1 MB",
    width: "w-[45%]",
    tone: "bg-accent",
  },
  {
    icon: Frame,
    name: "Archive/Old-Explorations",
    tag: "Unused frame",
    size: "6.2 MB",
    width: "w-[31%]",
    tone: "bg-accent",
  },
  {
    icon: Palette,
    name: "Styles/Color-Tokens",
    tag: "Style",
    size: "3.6 MB",
    width: "w-[18%]",
    tone: "bg-accent-2",
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

const rise = (distance = 24) => ({
  initial: { opacity: 0, y: distance },
  animate: { opacity: 1, y: 0 },
});

export function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_70%)]" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-12rem] h-[38rem] w-[68rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px] animate-glow"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-12rem] top-32 h-[24rem] w-[24rem] rounded-full bg-accent-2/20 blur-[110px] animate-float"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[34rem] h-[20rem] w-[50rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        />

        <Container className="relative flex flex-col items-center text-center">
          <motion.div {...rise(16)} transition={{ duration: 0.6, ease: easeOut }}>
            <Badge className="mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Professional Figma Utilities
            </Badge>
          </motion.div>

          <motion.h1
            {...rise()}
            transition={{ duration: 0.7, delay: 0.05, ease: easeOut }}
            className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl"
          >
            Professional tools that make{" "}
            <span className="bg-gradient-to-r from-accent via-accent to-accent-2 bg-clip-text text-transparent">
              Figma faster.
            </span>
          </motion.h1>

          <motion.p
            {...rise()}
            transition={{ duration: 0.7, delay: 0.12, ease: easeOut }}
            className="mt-6 max-w-xl text-lg text-muted sm:text-xl"
          >
            FromOurLab builds carefully crafted utilities that help designers
            and design teams eliminate repetitive work inside Figma.
          </motion.p>

          <motion.p
            {...rise()}
            transition={{ duration: 0.7, delay: 0.18, ease: easeOut }}
            className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
          >
            <span>Build faster</span>
            <span className="text-accent">·</span>
            <span>Organize better</span>
            <span className="text-accent">·</span>
            <span>Design smarter</span>
          </motion.p>

          <motion.div
            {...rise()}
            transition={{ duration: 0.7, delay: 0.24, ease: easeOut }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button href="#products" size="lg">
              Explore products
              <ArrowRight size={16} />
            </Button>
            <Button href="#products" size="lg" variant="secondary">
              <Compass size={16} />
              View roadmap
            </Button>
          </motion.div>

          <motion.p
            {...rise()}
            transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
            className="mt-5 flex items-center gap-2 text-xs text-muted"
          >
            <Users size={14} className="text-accent" />
            Built by designers. Used by designers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
            className="mt-16 w-full max-w-3xl sm:mt-20"
          >
            <div
              aria-hidden="true"
              className="group relative rounded-2xl border border-white/10 bg-surface/60 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.85)] transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-60" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(360px_circle_at_50%_0%,color-mix(in_srgb,var(--color-accent)_14%,transparent),transparent_70%)]" />

              <div className="relative overflow-hidden rounded-2xl bg-surface/80 backdrop-blur">
                <div className="flex items-center justify-between border-b border-white/5 px-4 py-3 sm:px-5">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                      <FileWarning size={13} strokeWidth={2} />
                    </span>
                    <span className="truncate text-sm font-medium text-foreground">
                      File Weight Analyzer
                    </span>
                    <span className="hidden shrink-0 rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted sm:inline-flex">
                      Figma Plugin
                    </span>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <span className="hidden items-center gap-1.5 text-[11px] text-muted sm:flex">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                      Scanning
                    </span>
                    <Minus size={13} className="text-muted/60" />
                    <X size={13} className="text-muted/60" />
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <FolderOpen size={13} />
                      Product-Dashboard.fig
                    </span>
                    <span>82%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      className="h-full rounded-full bg-accent"
                      initial={{ width: "4%" }}
                      whileInView={{ width: "82%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.5, ease: easeOut }}
                    />
                  </div>

                  <div className="mt-5 flex flex-col divide-y divide-white/5">
                    {scanRows.map((row) => (
                      <div key={row.name} className="flex items-center gap-3 py-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-foreground/70">
                          <row.icon size={14} strokeWidth={1.75} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <p className="truncate text-sm text-foreground/90">
                              {row.name}
                            </p>
                            <p className="shrink-0 text-sm font-medium text-foreground/70">
                              {row.size}
                            </p>
                          </div>
                          <div className="mt-1.5 flex items-center gap-2">
                            <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                              <div className={`h-full rounded-full ${row.tone} ${row.width}`} />
                            </div>
                            <span className="shrink-0 text-[10px] uppercase tracking-wide text-muted">
                              {row.tag}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-4 rounded-xl border border-accent/20 bg-accent/5 px-4 py-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-muted">
                        Potential savings
                      </p>
                      <p className="text-lg font-semibold text-accent">
                        34.6 MB
                        <span className="ml-1 text-xs font-normal text-muted">
                          (61%)
                        </span>
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-black">
                      Optimize file
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </MotionConfig>
  );
}

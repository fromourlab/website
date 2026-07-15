"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, FileWarning } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { ScanOverviewMockup } from "@/components/products/file-weight-analyzer/mockups/scan-overview";

export function ProductHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_70%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-12rem] h-[36rem] w-[64rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px] animate-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10rem] top-32 h-[22rem] w-[22rem] rounded-full bg-accent-2/20 blur-[110px] animate-float"
      />

      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <Link
            href="/#products"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} />
            All products
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <Badge className="mb-6">
            <FileWarning size={12} className="text-accent" />
            File Weight Analyzer
          </Badge>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl">
            Know exactly what&apos;s making your{" "}
            <span className="bg-gradient-to-r from-accent via-accent to-accent-2 bg-clip-text text-transparent">
              Figma file heavy.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
            File Weight Analyzer scans every page, frame, and asset in your
            Figma file and shows you precisely what&apos;s inflating its
            size — so you can clean it up in minutes, not hours.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
            <Button href="/#pricing" size="lg">
              Install Free
              <ArrowRight size={16} />
            </Button>
            <Button
              href="#how-it-works"
              size="lg"
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See how it works
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-5 text-xs text-muted">
            Free forever plan available. No credit card required.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-16 w-full max-w-4xl sm:mt-20">
          <ScanOverviewMockup />
        </Reveal>
      </Container>
    </section>
  );
}

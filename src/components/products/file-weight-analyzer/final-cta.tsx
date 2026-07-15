import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-b from-accent/[0.08] to-transparent px-6 py-16 text-center sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
                Ready to see what&apos;s really in your file?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
                Run your first scan free — no credit card, no setup, just a
                lighter Figma file in minutes.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/#pricing" size="lg">
                  Install Free
                  <ArrowRight size={16} />
                </Button>
                <Button href="/#pricing" size="lg" variant="secondary">
                  Upgrade to Pro
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

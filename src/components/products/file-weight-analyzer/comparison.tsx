import { ArrowRight, Check, Minus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

type CellValue = string | boolean;

const rows: { label: string; free: CellValue; pro: CellValue }[] = [
  { label: "Full file scans", free: "3 per month", pro: "Unlimited" },
  { label: "Size breakdown by type", free: true, pro: true },
  { label: "One-click cleanup", free: "Up to 5 items", pro: "Unlimited" },
  { label: "Scan history", free: false, pro: true },
  { label: "Priority email support", free: false, pro: true },
  { label: "Access to future products", free: false, pro: true },
];

function Cell({ value }: { value: CellValue }) {
  if (typeof value === "string") {
    return <span className="text-sm text-foreground/80">{value}</span>;
  }
  return value ? (
    <Check size={16} className="text-accent" />
  ) : (
    <Minus size={16} className="text-muted/50" />
  );
}

export function Comparison() {
  return (
    <section id="comparison" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Free vs Pro"
          title="Start free. Upgrade when you outgrow it."
          description="File Weight Analyzer is fully usable on the Free plan. Pro removes the limits."
        />

        <Reveal
          delay={0.1}
          className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-surface/30"
        >
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 border-b border-white/10 px-6 py-4 sm:gap-x-8 sm:px-8">
            <span className="text-xs font-medium uppercase tracking-wide text-muted">
              Feature
            </span>
            <span className="w-16 text-center text-xs font-medium uppercase tracking-wide text-muted sm:w-20">
              Free
            </span>
            <span className="w-16 text-center text-xs font-medium uppercase tracking-wide text-accent sm:w-20">
              Pro
            </span>
          </div>

          <div className="divide-y divide-white/5">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 px-6 py-4 sm:gap-x-8 sm:px-8"
              >
                <span className="text-sm text-foreground/90">
                  {row.label}
                </span>
                <span className="flex w-16 justify-center sm:w-20">
                  <Cell value={row.free} />
                </span>
                <span className="flex w-16 justify-center sm:w-20">
                  <Cell value={row.pro} />
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={0.15}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/#pricing" size="lg">
            Install Free
            <ArrowRight size={16} />
          </Button>
          <Button href="/#pricing" size="lg" variant="secondary">
            Upgrade to Pro
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

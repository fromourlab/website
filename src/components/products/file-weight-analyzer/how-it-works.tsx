import { BarChart3, RotateCcw, ScanLine, Wand2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

const steps = [
  {
    icon: ScanLine,
    title: "Run a scan",
    description:
      "Open File Weight Analyzer from any Figma file and start a full scan — no setup, no configuration.",
  },
  {
    icon: BarChart3,
    title: "See what's heavy",
    description:
      "Get a complete breakdown of every page, frame, component, and asset, ranked by size.",
  },
  {
    icon: Wand2,
    title: "Clean up with confidence",
    description:
      "Select what to remove or optimize, preview the impact, and apply changes without breaking your file.",
  },
  {
    icon: RotateCcw,
    title: "Re-scan anytime",
    description:
      "Track how your file size changes over time as your team keeps working.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From bloated to lean in four steps"
          description="No configuration, no learning curve — just a clear path from scan to clean file."
        />

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <RevealItem key={step.title}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-surface/40 p-6">
                <span className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent">
                  <step.icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

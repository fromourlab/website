import {
  BarChart3,
  FileWarning,
  Frame,
  History,
  ShieldCheck,
  Wand2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: FileWarning,
    title: "Full file scan",
    description:
      "Scans every page, frame, component, and style in seconds — no matter how large the file.",
    tier: "free" as const,
  },
  {
    icon: BarChart3,
    title: "Size breakdown by type",
    description:
      "See exactly how much weight comes from images, components, styles, or unused frames.",
    tier: "free" as const,
  },
  {
    icon: Wand2,
    title: "One-click cleanup",
    description:
      "Remove unused assets and duplicate styles without ever leaving Figma.",
    tier: "free" as const,
  },
  {
    icon: ShieldCheck,
    title: "Safe by design",
    description:
      "Nothing is deleted without your review. Undo any change instantly, no matter what you clean up.",
    tier: "free" as const,
  },
  {
    icon: Frame,
    title: "Works on any file",
    description:
      "No setup required. Point it at any file you have edit access to and start scanning immediately.",
    tier: "free" as const,
  },
  {
    icon: History,
    title: "Track file history",
    description:
      "See how your file size trends over time as your team keeps adding to it.",
    tier: "pro" as const,
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to keep files lean"
          description="Built for the day-to-day reality of working in large, fast-moving Figma files."
        />

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <RevealItem key={feature.title}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-surface/40 p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent">
                    <feature.icon size={20} strokeWidth={1.75} />
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 text-xs font-medium uppercase tracking-wide",
                      feature.tier === "pro"
                        ? "bg-accent/10 text-accent"
                        : "bg-white/5 text-muted",
                    )}
                  >
                    {feature.tier === "pro" ? "Pro" : "Free"}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

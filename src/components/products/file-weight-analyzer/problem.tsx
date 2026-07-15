import { Clock, EyeOff, Share2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

const problems = [
  {
    icon: Clock,
    title: "Slow to open",
    description:
      "Multi-hundred-megabyte files can take over a minute to load — every time you or a teammate opens them.",
  },
  {
    icon: Share2,
    title: "Painful to hand off",
    description:
      "Bloated files choke Dev Mode, slow down exports, and turn client reviews into a loading screen.",
  },
  {
    icon: EyeOff,
    title: "Impossible to audit",
    description:
      "Figma only shows you a single file size number. You're left guessing what's actually taking up space — or deleting things you shouldn't.",
  },
];

export function Problem() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="The problem"
          title="Figma files don't stay lean on their own"
          description="Every layer, forgotten frame, and pasted screenshot adds weight — until your file becomes the slowest part of your workflow."
        />

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-3">
          {problems.map((problem) => (
            <RevealItem key={problem.title}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-surface/40 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent">
                  <problem.icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">
                  {problem.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {problem.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

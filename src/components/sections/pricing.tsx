import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to try FromOurLab tools on real work.",
    cta: "Get started free",
    href: "#",
    featured: false,
    features: [
      "File Weight Analyzer, limited scans",
      "Plugin Organizer for up to 10 plugins",
      "Community support",
      "Core optimization suggestions",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    period: "lifetime",
    description: "Full access to every tool, forever, for one payment.",
    cta: "Get lifetime access",
    href: "#",
    featured: true,
    features: [
      "Unlimited File Weight Analyzer scans",
      "Unlimited plugins in Plugin Organizer",
      "All future products, included",
      "Priority email support",
      "Early access to new releases",
      "Lifetime updates, no subscription",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing. Pay once, own it forever."
          description="No subscriptions, no surprises. Start free, upgrade when you're ready."
        />

        <RevealGroup className="mx-auto mt-16 grid max-w-3xl gap-6 sm:grid-cols-2">
          {plans.map((plan) => (
            <RevealItem key={plan.name}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-8",
                  plan.featured
                    ? "border-accent/40 bg-gradient-to-b from-accent/[0.08] to-transparent shadow-[0_0_0_1px_rgba(215,255,63,0.15),0_30px_80px_-30px_rgba(215,255,63,0.25)]"
                    : "border-white/10 bg-surface/40",
                )}
              >
                {plan.featured ? (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 border-accent/40 bg-background text-accent">
                    Best value
                  </Badge>
                ) : null}

                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted">{plan.period}</span>
                </div>
                <p className="mt-3 text-sm text-muted">{plan.description}</p>

                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-foreground/80"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href={plan.href}
                  size="lg"
                  variant={plan.featured ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

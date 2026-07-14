import { FileWarning, Layers, Sparkles, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const products = [
  {
    icon: FileWarning,
    name: "File Weight Analyzer",
    tagline: "Professional Figma file optimization.",
    description:
      "Scan any Figma file to find bloated components, unused styles, and hidden assets that are slowing your team down — then clean them up in a click.",
    tags: ["Figma plugin", "Performance"],
    status: "Available",
  },
  {
    icon: Layers,
    name: "Plugin Organizer",
    tagline: "Organize and manage your plugins.",
    description:
      "Group, tag, and pin the plugins you actually use. Build custom sets for every project so your toolbar never turns into a junk drawer again.",
    tags: ["Figma plugin", "Workflow"],
    status: "Available",
  },
  {
    icon: Sparkles,
    name: "Coming Soon",
    tagline: "Our next tool is already in the lab.",
    description:
      "We're building the next professional-grade tool for design teams. Join the list to get early access before it ships.",
    tags: ["In development"],
    status: "Coming soon",
  },
];

export function Products() {
  return (
    <section id="products" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="A growing toolkit for professional designers"
          description="Every tool we ship comes from a real problem we hit in our own design workflow."
        />

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <RevealItem key={product.name}>
              <article
                className={cn(
                  "group relative flex h-full flex-col rounded-2xl border border-white/10 bg-surface/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-surface/70",
                  product.status === "Coming soon" && "border-dashed",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent transition-colors group-hover:border-accent/40">
                    <product.icon size={20} strokeWidth={1.75} />
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 text-xs font-medium",
                      product.status === "Available"
                        ? "bg-accent/10 text-accent"
                        : "bg-white/5 text-muted",
                    )}
                  >
                    {product.status}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-foreground/70">
                  {product.tagline}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {product.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {product.status === "Available" ? (
                  <div className="mt-6 flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors group-hover:text-accent">
                    Learn more
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                ) : null}
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

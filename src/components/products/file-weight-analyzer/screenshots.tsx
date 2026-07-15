import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ScanOverviewMockup } from "@/components/products/file-weight-analyzer/mockups/scan-overview";
import { BreakdownMockup } from "@/components/products/file-weight-analyzer/mockups/breakdown";
import { CleanupMockup } from "@/components/products/file-weight-analyzer/mockups/cleanup";
import { HistoryMockup } from "@/components/products/file-weight-analyzer/mockups/history";

const views = [
  { label: "Size breakdown by type", Mockup: BreakdownMockup },
  { label: "One-click cleanup", Mockup: CleanupMockup },
  { label: "Scan history", Mockup: HistoryMockup },
];

export function Screenshots() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Product"
          title="See it in action"
          description="A closer look at how File Weight Analyzer breaks down, cleans up, and tracks your Figma files."
        />

        <Reveal delay={0.1} className="mt-16">
          <ScanOverviewMockup />
        </Reveal>

        <RevealGroup className="mt-6 grid gap-6 sm:grid-cols-3">
          {views.map((view) => (
            <RevealItem key={view.label} className="flex flex-col gap-3">
              <view.Mockup />
              <p className="text-center text-sm font-medium text-foreground/70">
                {view.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

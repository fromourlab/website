import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProductHero } from "@/components/products/file-weight-analyzer/hero";
import { Screenshots } from "@/components/products/file-weight-analyzer/screenshots";
import { Problem } from "@/components/products/file-weight-analyzer/problem";
import { HowItWorks } from "@/components/products/file-weight-analyzer/how-it-works";
import { Features } from "@/components/products/file-weight-analyzer/features";
import { Comparison } from "@/components/products/file-weight-analyzer/comparison";
import { ProductFAQ } from "@/components/products/file-weight-analyzer/faq";
import { FinalCTA } from "@/components/products/file-weight-analyzer/final-cta";

export const metadata: Metadata = {
  title: "File Weight Analyzer",
  description:
    "Scan any Figma file to find bloated components, unused styles, and hidden assets that are slowing your team down — then clean them up in a click.",
  openGraph: {
    title: "File Weight Analyzer — FromOurLab",
    description:
      "Professional Figma file optimization. Know exactly what's making your Figma file heavy.",
    url: "https://fromourlab.com/products/file-weight-analyzer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "File Weight Analyzer — FromOurLab",
    description:
      "Professional Figma file optimization. Know exactly what's making your Figma file heavy.",
  },
};

export default function FileWeightAnalyzerPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ProductHero />
        <Screenshots />
        <Problem />
        <HowItWorks />
        <Features />
        <Comparison />
        <ProductFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

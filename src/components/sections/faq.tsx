"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is FromOurLab?",
    answer:
      "FromOurLab is a small studio building professional tools for designers, starting with utilities we built to solve problems in our own day-to-day Figma workflow.",
  },
  {
    question: "What does File Weight Analyzer do?",
    answer:
      "It scans your Figma files for bloat — unused components, oversized images, duplicated styles — and shows you exactly what's inflating your file size, with one-click fixes.",
  },
  {
    question: "What does Plugin Organizer do?",
    answer:
      "It lets you group your Figma plugins into custom sets, pin your favorites, and quickly switch context between projects instead of scrolling through a long, unsorted list.",
  },
  {
    question: "What's the difference between Free and Pro?",
    answer:
      "Free gives you a taste of each tool with sensible limits. Pro unlocks unlimited usage across every product, including everything we release in the future, for a single lifetime payment.",
  },
  {
    question: "Is the $19 Pro plan really a one-time payment?",
    answer:
      "Yes. Pay once and you keep access to Pro forever, including all future updates and new tools we add to the lineup — no recurring subscription.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "If Pro isn't a fit for you, reach out within 14 days of purchase and we'll refund you in full, no questions asked.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Can't find what you're looking for? Reach out and we'll get back to you."
        />

        <div className="mx-auto mt-16 max-w-2xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-surface/30">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={faq.question} delay={index * 0.03}>
                <div className="px-6">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-base font-medium text-foreground">
                      {faq.question}
                    </span>
                    <Plus
                      size={18}
                      className={cn(
                        "shrink-0 text-muted transition-transform duration-300",
                        isOpen && "rotate-45 text-accent",
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={`faq-panel-${index}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.25,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-8 text-sm leading-relaxed text-muted">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

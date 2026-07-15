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
    question: "Does File Weight Analyzer work with any Figma file?",
    answer:
      "Yes. It works with any file you have edit access to, regardless of size or how it was originally created.",
  },
  {
    question: "Will it delete anything without asking me?",
    answer:
      "No. Every suggested cleanup is opt-in — you review and approve each change before anything is removed, and every action can be undone.",
  },
  {
    question: "How is this different from Figma's own file stats?",
    answer:
      "Figma shows you a single file size number. File Weight Analyzer breaks that number down by page, frame, and asset type, so you know exactly where the weight is coming from.",
  },
  {
    question: "Does scanning slow down my file?",
    answer:
      "No. Scans run in the background and don't affect your ability to keep editing while a scan is in progress.",
  },
  {
    question: "What's the difference between the Free and Pro scan limits?",
    answer:
      "Free includes 3 full scans per month — enough to spot-check your most important files. Pro removes the limit entirely and unlocks scan history.",
  },
  {
    question: "Can I use it on files I don't own?",
    answer:
      "Yes, as long as you have edit access. File Weight Analyzer respects Figma's existing permissions — it can't scan files you can't already open.",
  },
];

export function ProductFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about File Weight Analyzer."
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
                    aria-controls={`fwa-faq-panel-${index}`}
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
                        id={`fwa-faq-panel-${index}`}
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

import React from "react";
import { APV_DATA } from "@/data/content";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface SelectionProps {
  onOpenApply: () => void;
}

export const Selection: React.FC<SelectionProps> = ({ onOpenApply }) => {
  return (
    <section id="selection" className="w-full section-gap bg-white border-t border-ink-900/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeader
            label="07 — ADMISSIONS JOURNEY"
            title="The 6-Stage Selection Process"
            description="A transparent, merit-driven evaluation ensuring that academic aptitude and national dedication are the sole selection criteria."
          />

          <Button
            onClick={onOpenApply}
            variant="primary"
            size="md"
            className="shrink-0"
          >
            <span>APPLY NOW FOR 2026</span>
            <ArrowUpRight className="h-3.5 w-3.5 ml-1.5 text-gold-400" />
          </Button>
        </div>

        {/* 6-Stage Visual Journey (3x2 Grid with 24px rounded cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {APV_DATA.selectionProcess.map((step) => (
            <div
              key={step.step}
              className="rounded-card bg-paper card-border p-8 flex flex-col justify-between space-y-6 shadow-xs hover:border-navy-900/30 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="meta-label text-navy-950 font-bold">
                    STAGE {step.step}
                  </span>
                  <span className="meta-label text-ink-400 text-[10px]">
                    {step.subtitle}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-navy-950 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-ink-700 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-ink-900/5 text-xs font-medium text-ink-500">
                {step.details}
              </div>
            </div>
          ))}
        </div>

        {/* Examination Specifics Callout Card */}
        <div className="rounded-card-lg bg-navy-950 text-white p-8 sm:p-10 card-border-dark flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="meta-label text-gold-400">
              WRITTEN TEST DETAIL • NEW DELHI
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Essay Paper: 250 Marks (Two Essays of 600–800 words)
            </h4>
            <p className="text-xs sm:text-sm text-ink-200 font-normal leading-relaxed">
              Candidates choose two subjects from eight topics divided into two groups of four. Tests analytical clarity, depth of comprehension, and expressive ability.
            </p>
          </div>

          <Button
            onClick={onOpenApply}
            variant="gold"
            size="md"
            className="shrink-0"
          >
            <span>REGISTER FOR WRITTEN EXAM</span>
            <ArrowUpRight className="h-4 w-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

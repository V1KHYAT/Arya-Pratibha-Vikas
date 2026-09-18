import React from "react";
import { APV_DATA } from "@/data/content";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ProgramsProps {
  onOpenApply: () => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenApply }) => {
  return (
    <section id="programs" className="w-full section-gap bg-paper">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeader
            title="Choose your path."
            description="Two integrated pathways designed to take meritorious graduates from foundational preparation to the final UPSC interview rank list."
          />
          <Badge variant="navy" className="shrink-0">
            Admissions Batch 2026
          </Badge>
        </div>

        {/* Two Major Program Cards: 24-32px rounded */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {APV_DATA.programs.map((prog) => (
            <div
              key={prog.id}
              className="rounded-card-lg bg-white card-border overflow-hidden flex flex-col justify-between shadow-xs hover:border-navy-900/30 transition-all group"
            >
              {/* Image Preview */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-paper-subtle">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="white">
                    {prog.badge}
                  </Badge>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 sm:p-10 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <span className="meta-label text-ink-400 text-[10px]">
                      {prog.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight pt-1">
                      {prog.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-ink-600 leading-relaxed font-normal">
                    {prog.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    {prog.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-ink-800 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-navy-900 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-ink-900/5 flex items-center justify-between">
                  <Button
                    onClick={onOpenApply}
                    variant="primary"
                    size="md"
                    className="group"
                  >
                    <span>{prog.ctaText}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 ml-1.5 text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>

                  <span className="meta-label text-ink-400 text-[10px]">
                    100% Need-Based
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

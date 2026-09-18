import React from "react";
import { APV_DATA } from "@/data/content";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Sparkles, Scale, GraduationCap, Building2 } from "lucide-react";

export const Positioning: React.FC = () => {
  const icons = [
    <Sparkles className="h-5 w-5 text-navy-900" key="1" />,
    <Scale className="h-5 w-5 text-navy-900" key="2" />,
    <GraduationCap className="h-5 w-5 text-navy-900" key="3" />,
    <Building2 className="h-5 w-5 text-navy-900" key="4" />,
  ];

  return (
    <section id="about" className="w-full section-gap bg-paper border-t border-ink-900/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16 sm:space-y-24">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              title="What APV exists to do."
            />
          </div>
          <div className="lg:col-span-7 space-y-4 pt-2">
            <p className="text-xl sm:text-2xl font-medium text-navy-950 leading-relaxed">
              {APV_DATA.positioning.statement}
            </p>
            <p className="text-sm sm:text-base text-ink-600 leading-relaxed font-normal">
              {APV_DATA.positioning.description}
            </p>
          </div>
        </div>

        {/* 4 Core Values Grid: 20-24px rounded modular cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {APV_DATA.positioning.values.map((val, i) => (
            <div
              key={val.number}
              className="rounded-card bg-white p-8 card-border flex flex-col justify-between space-y-6 shadow-xs hover:border-navy-900/30 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-pill bg-paper flex items-center justify-center border border-ink-900/5">
                    {icons[i]}
                  </div>
                  <span className="meta-label text-ink-400">
                    {val.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-navy-950 tracking-tight">
                  {val.title}
                </h3>

                <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-normal">
                  {val.description}
                </p>
              </div>

              <div className="pt-4 border-t border-ink-900/5 meta-label text-[10px] text-ink-400">
                Core Principle
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { APV_DATA } from "@/data/content";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Sparkles, Scale, GraduationCap, Building2 } from "lucide-react";

export const Positioning: React.FC = () => {
  const icons = [
    <Sparkles className="h-5 w-5 text-terracotta-500" key="1" />,
    <Scale className="h-5 w-5 text-terracotta-500" key="2" />,
    <GraduationCap className="h-5 w-5 text-terracotta-500" key="3" />,
    <Building2 className="h-5 w-5 text-terracotta-500" key="4" />,
  ];

  return (
    <section id="about" className="w-full section-gap bg-paper border-t border-ink-900/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16 sm:space-y-24">
        {/* High-Impact Stat Blocks: Warm Sandstone Modular Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {APV_DATA.hero.metrics.map((m, i) => (
            <div
              key={i}
              className="rounded-card bg-white p-8 card-border flex flex-col justify-between space-y-3 shadow-xs hover:border-terracotta-500/30 transition-colors"
            >
              <span className="text-4xl sm:text-5xl font-bold text-ink-950 tracking-tight">
                {m.value.startsWith("100") ? (
                  <>100<span className="text-terracotta-500">%</span></>
                ) : m.value.includes("+") ? (
                  <>{m.value.replace("+", "")}<span className="text-terracotta-500">+</span></>
                ) : (
                  m.value
                )}
              </span>
              <div className="space-y-1">
                <p className="text-sm font-bold text-ink-900 tracking-wide uppercase text-xs">
                  {m.label}
                </p>
                <p className="text-xs sm:text-sm text-ink-600 font-normal leading-relaxed">
                  {m.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section Header & Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pt-4">
          <div className="lg:col-span-5">
            <SectionHeader
              title="What APV exists to do."
            />
          </div>
          <div className="lg:col-span-7 space-y-5 pt-2">
            <p className="text-xl sm:text-2xl font-medium text-ink-950 leading-relaxed">
              {APV_DATA.positioning.statement}
            </p>
            <p className="text-base sm:text-lg text-ink-600 leading-relaxed font-normal">
              {APV_DATA.positioning.description}
            </p>
          </div>
        </div>

        {/* 4 Core Values Grid: 24px rounded modular cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {APV_DATA.positioning.values.map((val, i) => (
            <div
              key={val.number}
              className="rounded-card bg-white p-8 card-border flex flex-col justify-between space-y-6 shadow-xs hover:border-terracotta-500/40 hover:shadow-sm transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-full bg-terracotta-50 flex items-center justify-center border border-terracotta-100">
                    {icons[i]}
                  </div>
                  <span className="text-xs font-bold tracking-widest text-ink-400">
                    {val.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-ink-950 tracking-tight pt-1">
                  {val.title}
                </h3>

                <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-normal">
                  {val.description}
                </p>
              </div>

              <div className="pt-4 border-t border-ink-900/5 text-[10px] font-bold uppercase tracking-widest text-ink-400">
                Core Pillar
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { APV_DATA } from "@/data/content";
import { ShieldCheck } from "lucide-react";
import { assetUrl } from "@/lib/utils";

export const HeroCards: React.FC = () => {
  return (
    <section id="hero-cards" className="w-full section-gap bg-paper border-t border-ink-900/10">
      <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1680px] 3xl:max-w-[1840px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 space-y-10 sm:space-y-12">
        {/* Section Header Indicator */}
        <div className="flex items-center justify-between border-b border-ink-900/10 pb-4">
          <div className="flex items-center space-x-3 text-xs font-bold tracking-widest text-ink-500 uppercase">
            <span className="h-2 w-2 rounded-full bg-terracotta-500" />
            <span>Campus Ecosystem & Leadership Inspiration</span>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta-600 bg-terracotta-50 px-3 py-1 rounded-full border border-terracotta-200">
            Session 2026 Admissions Open
          </span>
        </div>

        {/* Large Editorial Feature Cards: Campus (8 Cols) & Shri S.K. Arya (4 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Campus Ecosystem Editorial Photo Card: 8 Cols */}
          <div className="lg:col-span-8 relative rounded-card-lg overflow-hidden card-border bg-white min-h-[380px] sm:min-h-[440px] xl:min-h-[480px] flex flex-col justify-end shadow-xs group">
            <img
              src={assetUrl("/assets/hero-1.jpg")}
              alt="Arya Pratibha Vikas Sansthan Aspirants at Sushil Raj Kendra"
              className="absolute inset-0 w-full h-full object-cover filter contrast-[1.03] transition-transform duration-700 group-hover:scale-[1.02]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = assetUrl("/assets/hero-4.jpg");
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />
            
            {/* Overlay Content */}
            <div className="relative z-10 p-6 sm:p-8 xl:p-10 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2 max-w-lg">
                <span className="text-[10px] font-bold tracking-widest text-terracotta-400 uppercase">
                  CAMPUS ECOSYSTEM • NEW DELHI
                </span>
                <h3 className="text-lg sm:text-xl xl:text-2xl font-bold text-white leading-snug">
                  Sushil Raj Kendra: A residential sanctuary for full-time civil service preparation.
                </h3>
                <p className="text-xs sm:text-sm text-ink-200 font-normal">
                  Equipped with individual study cabins, rich reference libraries, 100 Mbps fiber connectivity, and healthy sattvic dining.
                </p>
              </div>
              <span className="text-[11px] font-bold tracking-wider text-white shrink-0 uppercase bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                100% NEED-BASED FELLOWSHIP
              </span>
            </div>
          </div>

          {/* Founding Inspiration Card: 4 Cols */}
          <div className="lg:col-span-4 rounded-card-lg bg-ink-950 text-white p-7 sm:p-8 xl:p-9 flex flex-col justify-between space-y-6 card-border-dark shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[10px] font-bold tracking-widest text-terracotta-400 uppercase">
                  FOUNDING INSPIRATION
                </span>
                <ShieldCheck className="h-4 w-4 text-terracotta-400" />
              </div>

              {/* Editorial Portrait Presentation of Shri S.K. Arya */}
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 sm:h-18 sm:w-18 rounded-full overflow-hidden border border-white/20 bg-white/10 p-0.5 shrink-0">
                  <img
                    src={assetUrl("/assets/sk-arya-small.png")}
                    alt={APV_DATA.skArya.name}
                    className="h-full w-full object-cover rounded-full"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white leading-tight">
                    {APV_DATA.skArya.name}
                  </h3>
                  <p className="text-xs text-ink-300">
                    {APV_DATA.skArya.title}
                  </p>
                </div>
              </div>

              <blockquote className="text-sm text-ink-200 font-normal leading-relaxed italic border-l-2 border-terracotta-500/80 pl-3">
                "{APV_DATA.skArya.quote}"
              </blockquote>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-ink-400">JBM Group & Neel Foundation</span>
              <a 
                href="#inspiration" 
                className="text-[11px] font-bold uppercase tracking-wider text-terracotta-400 hover:text-white transition-colors flex items-center space-x-1"
              >
                <span>Read Story</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* High-Impact Stat Blocks: 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          {APV_DATA.hero.metrics.map((m, i) => (
            <div
              key={i}
              className="rounded-card bg-white p-7 sm:p-8 xl:p-9 card-border flex flex-col justify-between space-y-4 shadow-xs hover:border-terracotta-500/30 transition-all hover:shadow-sm"
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
                <p className="text-xs font-bold text-ink-900 tracking-wider uppercase">
                  {m.label}
                </p>
                <p className="text-xs sm:text-sm text-ink-600 font-normal leading-relaxed">
                  {m.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

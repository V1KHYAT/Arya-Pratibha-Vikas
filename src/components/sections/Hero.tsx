import React from "react";
import { APV_DATA } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Compass, ShieldCheck } from "lucide-react";
import { assetUrl } from "@/lib/utils";

interface HeroProps {
  onOpenApply: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApply }) => {
  return (
    <section className="relative w-full pt-10 sm:pt-14 pb-16 sm:pb-24 lg:pb-32 overflow-hidden bg-paper">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Oversized Headline & Subtitle */}
        <div className="pb-12 sm:pb-16 max-w-5xl space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-bold text-navy-950 tracking-tight leading-[1.05]">
            Where potential finds a path to public service.
          </h1>
          <p className="text-lg sm:text-xl text-ink-700 font-normal leading-relaxed max-w-3xl">
            {APV_DATA.hero.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-4">
            <Button
              onClick={onOpenApply}
              variant="primary"
              size="lg"
              className="group px-8 sm:px-10 py-4 text-sm sm:text-base font-bold shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span>APPLY NOW</span>
              <ArrowUpRight className="h-4 w-4 ml-2.5 text-gold-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>

            <a href="#programs">
              <Button
                variant="outline"
                size="lg"
                className="px-8 sm:px-10 py-4 text-sm sm:text-base font-bold transition-all duration-200"
              >
                <Compass className="h-4 w-4 mr-2.5 text-navy-900" />
                <span>EXPLORE PROGRAMS</span>
              </Button>
            </a>
          </div>
        </div>

        {/* Large Editorial Photographic Composition (Occupying 60-70% visual field) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
          {/* Main Editorial Hero Photography: 8 Cols */}
          <div className="lg:col-span-8 relative rounded-card-lg overflow-hidden card-border bg-white min-h-[380px] sm:min-h-[480px]">
            <img
              src={assetUrl("/assets/hero-1.jpg")}
              alt="Arya Pratibha Vikas Sansthan Aspirants"
              className="w-full h-full object-cover filter contrast-[1.03]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = assetUrl("/assets/hero-4.jpg");
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
            
            {/* Overlay metadata */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1 max-w-lg">
                <span className="meta-label text-gold-400 text-[10px] tracking-widest">
                  CAMPUS ECOSYSTEM • NEW DELHI
                </span>
                <p className="text-sm sm:text-base font-medium text-white/90">
                  Sushil Raj Kendra: A residential sanctuary for full-time civil service preparation.
                </p>
              </div>
              <span className="meta-label text-white/70 text-[11px] shrink-0">
                100% NEED-BASED FELLOWSHIP
              </span>
            </div>
          </div>

          {/* Integrated Shri S.K. Arya & Leadership Feature Card: 4 Cols */}
          <div className="lg:col-span-4 rounded-card-lg bg-navy-950 text-white p-7 sm:p-9 flex flex-col justify-between space-y-8 card-border-dark">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="meta-label text-gold-400">
                  FOUNDING INSPIRATION
                </span>
                <ShieldCheck className="h-4 w-4 text-gold-400" />
              </div>

              {/* Editorial Portrait Presentation of Shri S.K. Arya */}
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 rounded-pill overflow-hidden border border-white/20 bg-white/10 p-0.5 shrink-0">
                  <img
                    src={assetUrl("/assets/sk-arya-small.png")}
                    alt={APV_DATA.skArya.name}
                    className="h-full w-full object-cover rounded-pill"
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

              <blockquote className="text-sm text-ink-200 font-normal leading-relaxed italic border-l-2 border-gold-500/60 pl-3">
                "{APV_DATA.skArya.quote}"
              </blockquote>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-ink-400">JBM Group & Neel Foundation</span>
              <a href="#inspiration" className="meta-label text-gold-400 hover:text-white transition-colors">
                Read Story →
              </a>
            </div>
          </div>
        </div>

        {/* High-Impact Stat Blocks (3 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
          {APV_DATA.hero.metrics.map((m, i) => (
            <div
              key={i}
              className="rounded-card bg-white p-7 sm:p-8 card-border flex flex-col justify-between space-y-3"
            >
              <span className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
                {m.value}
              </span>
              <div>
                <p className="text-sm font-bold text-ink-900">
                  {m.label}
                </p>
                <p className="text-xs text-ink-500 font-normal">
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

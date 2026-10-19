import React from "react";
import { APV_DATA } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { assetUrl } from "@/lib/utils";

interface HeroProps {
  onOpenApply: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApply }) => {
  return (
    <section className="relative w-full bg-paper overflow-hidden pt-6 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24">
      {/* Subtle Vedic Geometric Line Art Watermark in Left Background */}
      <svg
        className="absolute top-20 -left-20 w-80 h-80 sm:w-96 sm:h-96 xl:w-[480px] xl:h-[480px] text-terracotta-500/10 pointer-events-none select-none -z-0"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        <circle cx="100" cy="100" r="92" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="76" />
        <circle cx="100" cy="100" r="56" />
        <circle cx="100" cy="100" r="38" strokeDasharray="2 2" />
        <path d="M100 8 L100 192 M8 100 L192 100 M35 35 L165 165 M35 165 L165 35" opacity="0.5" />
        <polygon points="100,18 182,100 100,182 18,100" opacity="0.35" />
        <polygon points="100,32 168,100 100,168 32,100" opacity="0.45" />
      </svg>

      {/* Main Container - Responsive from Mobile up to 4K Ultrawide */}
      <div className="relative max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1680px] 3xl:max-w-[1840px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full space-y-14 sm:space-y-16 lg:space-y-20 z-10">
        
        {/* ========================================================
            PART 1: THE VISUAL REFERENCE HERO SHOWCASE
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-end pt-2 sm:pt-4">
          
          {/* Left Column: Oversized Display Typography & Action CTAs */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between py-2 sm:py-6 lg:py-10 space-y-7 sm:space-y-9 z-10">
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[3.9rem] xl:text-[4.75rem] 2xl:text-[5.5rem] 3xl:text-[6rem] font-bold text-ink-950 tracking-tight leading-[1.04]">
                Where potential<br />
                finds a path to<br />
                <span className="text-terracotta-500">public service.</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl xl:text-[1.25rem] text-ink-700 font-normal leading-relaxed max-w-xl xl:max-w-2xl">
                A philanthropic initiative by Arya Samaj dedicated to identifying, mentoring, and fully sponsoring meritorious civil service aspirants across India for UPSC (IAS, IPS, IFS, IRS) and State Public Services.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-1">
                <Button
                  onClick={onOpenApply}
                  variant="terracotta"
                  size="lg"
                  className="group px-8 sm:px-9 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <span>APPLY NOW</span>
                  <ArrowUpRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>

                <a href="#programs">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-7 sm:px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider border border-ink-900/20 hover:border-ink-900 bg-white/40 backdrop-blur-xs transition-all duration-200 flex items-center space-x-2.5"
                  >
                    <span className="h-5 w-5 rounded-full border border-ink-900/50 flex items-center justify-center text-[10px] leading-none shrink-0">
                      →
                    </span>
                    <span>EXPLORE PROGRAMS</span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-4 lg:pt-10 hidden sm:block">
              <a
                href="#hero-cards"
                className="group inline-flex flex-col items-start space-y-2 text-ink-600 hover:text-ink-950 transition-colors"
              >
                <div className="flex items-center space-x-2.5">
                  <span className="h-6 w-6 rounded-full border border-ink-900/25 flex items-center justify-center text-xs group-hover:border-ink-900 transition-colors">
                    ↓
                  </span>
                  <span className="text-[11px] font-semibold tracking-wide">
                    Scroll to explore
                  </span>
                </div>
                <div className="w-px h-8 bg-ink-900/20 ml-3 group-hover:bg-ink-900/50 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: 100% Uncropped Hero Photography with Sandstone Sun-Arch Motif */}
          <div className="lg:col-span-7 xl:col-span-7 relative flex items-end justify-center lg:justify-end">
            {/* Warm Sandstone Radial Sun-Arch in Background */}
            <div 
              className="absolute right-0 sm:right-4 lg:right-6 bottom-0 w-[85%] sm:w-[80%] aspect-square rounded-full pointer-events-none -z-0"
              style={{
                background: "radial-gradient(ellipse at 60% 70%, rgba(200, 90, 40, 0.22) 0%, rgba(235, 195, 160, 0.30) 45%, rgba(250, 247, 242, 0) 75%)",
              }}
            />

            {/* Full 100% Uncropped Image - No Crop, No Mask, No clipping */}
            <img
              src={assetUrl("/assets/hero-institution.jpg")}
              alt="Arya Samaj Institution Portal with aspirants ascending steps towards Om emblem"
              className="relative z-10 w-full h-auto max-h-[72vh] xl:max-h-[80vh] 2xl:max-h-[86vh] object-contain object-bottom select-none drop-shadow-xs"
            />
          </div>
        </div>

        {/* Accreditation and Program Categories Strip */}
        <div className="pt-4 pb-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-ink-900/10 text-xs text-ink-500">
          <div className="flex sm:hidden">
            <a
              href="#hero-cards"
              className="inline-flex items-center space-x-2 text-ink-600 hover:text-ink-950 transition-colors"
            >
              <span className="h-5 w-5 rounded-full border border-ink-900/25 flex items-center justify-center text-[10px]">
                ↓
              </span>
              <span className="text-[11px] font-semibold">Scroll to explore cards</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 sm:gap-x-6 gap-y-2 text-[11px] font-bold uppercase tracking-widest text-ink-400">
            <span>UPSC (CSE)</span>
            <span>•</span>
            <span>STATE CIVIL SERVICES</span>
            <span>•</span>
            <span>100% RESIDENTIAL FELLOWSHIP</span>
          </div>

          <div className="hidden md:flex items-center space-x-2 text-[11px] font-semibold text-ink-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
            <span>SUSHIL RAJ KENDRA • NEW DELHI</span>
          </div>
        </div>

        {/* ========================================================
            PART 2: ORIGINAL HERO CARDS & HIGH-IMPACT STAT BLOCKS
            (Preserved directly below for user redesign)
            ======================================================== */}
        <div id="hero-cards" className="pt-6 sm:pt-10 space-y-8 sm:space-y-10">
          
          {/* Section Sub-heading Indicator */}
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

      </div>
    </section>
  );
};

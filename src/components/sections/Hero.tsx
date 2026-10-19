import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { assetUrl } from "@/lib/utils";

interface HeroProps {
  onOpenApply: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApply }) => {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] bg-paper overflow-hidden flex flex-col justify-between">
      {/* Decorative Warm Sandstone Arch Motif in Background */}
      <div 
        className="absolute right-0 sm:right-6 lg:right-16 xl:right-28 bottom-0 w-[340px] sm:w-[480px] lg:w-[580px] xl:w-[680px] aspect-[4/5] rounded-t-full pointer-events-none -z-0"
        style={{
          background: "radial-gradient(ellipse at 50% 80%, rgba(200, 90, 40, 0.22) 0%, rgba(235, 195, 160, 0.35) 45%, rgba(250, 247, 242, 0.1) 75%)",
        }}
      />

      {/* Subtle Vedic Geometric Line Art Watermark in Bottom Left */}
      <svg
        className="absolute -bottom-20 -left-20 w-80 h-80 sm:w-96 sm:h-96 text-terracotta-500/10 pointer-events-none select-none z-0"
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

      {/* Main Hero Container */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-10 sm:pt-14 lg:pt-20 pb-8 z-10 flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center flex-1">
          {/* Left Column: Editorial Display Typography & CTAs */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-7 sm:space-y-9 pt-2 sm:pt-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.4rem] 2xl:text-[6rem] font-bold text-ink-950 tracking-tight leading-[1.04]">
              Where potential<br />
              finds a path to<br />
              <span className="text-terracotta-500">public service.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-ink-700 font-normal leading-relaxed max-w-xl">
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

          {/* Right Column (Mobile / Tablet Display: image card if below desktop) */}
          <div className="lg:hidden w-full pt-4">
            <div className="relative rounded-card-lg overflow-hidden border border-ink-900/10 shadow-md bg-paper-subtle aspect-[4/3] sm:aspect-[16/10]">
              <img
                src={assetUrl("/assets/hero-institution.jpg")}
                alt="Aspirants ascending steps to Arya Samaj Institution"
                className="w-full h-full object-cover object-bottom"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Scroll Indicator */}
        <div className="pt-12 sm:pt-16 pb-2 flex items-center justify-between text-xs text-ink-500">
          <a
            href="#about"
            className="group flex flex-col items-start space-y-2 text-ink-600 hover:text-ink-950 transition-colors"
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

          <div className="hidden sm:flex items-center space-x-6 text-[11px] font-bold uppercase tracking-widest text-ink-400">
            <span>UPSC (CSE)</span>
            <span>•</span>
            <span>STATE CIVIL SERVICES</span>
            <span>•</span>
            <span>100% RESIDENTIAL FELLOWSHIP</span>
          </div>
        </div>
      </div>

      {/* Right-Side Desktop Image Layer (Matches Reference Layout Exactly) */}
      <div 
        className="hidden lg:block absolute right-0 bottom-0 top-16 xl:top-20 w-[50%] xl:w-[53%] pointer-events-none select-none z-0 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 16%, black 36%, black 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 16%, black 36%, black 100%)",
        }}
      >
        <div className="relative w-full h-full flex items-end justify-end">
          <img
            src={assetUrl("/assets/hero-institution.jpg")}
            alt="Aspirants ascending steps to Arya Samaj Institution"
            className="w-full h-full max-h-[90vh] object-cover object-bottom filter contrast-[1.02]"
          />
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { assetUrl } from "@/lib/utils";

interface HeroProps {
  onOpenApply: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApply }) => {
  return (
    <section className="relative w-full h-screen bg-paper overflow-hidden flex flex-col justify-center">
      {/* Full-Bleed Background Image: Fills the entire Hero Section edge-to-edge, including behind Navbar */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <img
          src={assetUrl("/assets/hero-institution.jpg")}
          alt="Arya Samaj Institution Portal with aspirants ascending steps towards Om emblem"
          className="w-full h-full object-cover object-[75%_bottom] md:object-[80%_bottom] lg:object-right-bottom"
        />
        {/* Subtle mobile readability soft gradient, hidden on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-paper/95 via-paper/70 to-transparent lg:hidden" />
      </div>

      {/* Main Content: Placed directly in the open white area on the left */}
      <div className="relative max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1680px] 3xl:max-w-[1840px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full z-10">
        <div className="w-full lg:max-w-[56%] xl:max-w-[50%] 2xl:max-w-[46%] space-y-7 sm:space-y-9 pt-12 sm:pt-16 lg:pt-0">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.2rem] xl:text-[5rem] 2xl:text-[5.75rem] font-bold text-ink-950 tracking-tight leading-[1.04]">
            Where potential<br />
            finds a path to<br />
            <span className="text-terracotta-500">public service.</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl xl:text-[1.25rem] text-ink-700 font-normal leading-relaxed max-w-xl xl:max-w-2xl">
            A philanthropic initiative by Arya Samaj dedicated to identifying, mentoring, and fully sponsoring meritorious civil service aspirants across India for UPSC (IAS, IPS, IFS, IRS) and State Public Services.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2">
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
                className="px-7 sm:px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider border border-ink-900/20 hover:border-ink-900 bg-white/60 backdrop-blur-xs transition-all duration-200 flex items-center space-x-2.5"
              >
                <span className="h-5 w-5 rounded-full border border-ink-900/50 flex items-center justify-center text-[10px] leading-none shrink-0">
                  →
                </span>
                <span>EXPLORE PROGRAMS</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

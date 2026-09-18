import React from "react";
import { APV_DATA } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Phone } from "lucide-react";

interface FinalCtaProps {
  onOpenApply: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenApply }) => {
  return (
    <section className="w-full section-gap bg-navy-950 text-white relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-10 sm:space-y-12">
        <div className="space-y-4 max-w-4xl mx-auto">
          <span className="meta-label text-gold-400">
            ADMISSIONS FOR BATCH 2026 NOW OPEN
          </span>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.06]">
            Your path to civil governance starts here.
          </h2>

          <p className="text-base sm:text-lg text-ink-300 max-w-2xl mx-auto font-normal leading-relaxed pt-2">
            If you have the intellectual potential, discipline, and dedication to serve the nation, Arya Pratibha Vikas Sansthan will support your dream with 100% need-based sponsorship.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button
            onClick={onOpenApply}
            variant="gold"
            size="lg"
            className="group px-8"
          >
            <span>APPLY NOW</span>
            <ArrowUpRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>

          <a href={`tel:${APV_DATA.meta.helpline}`}>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white/20 hover:border-white hover:bg-white/10 px-8"
            >
              <Phone className="h-4 w-4 mr-2 text-gold-400" />
              <span>TALK TO US</span>
            </Button>
          </a>
        </div>

        <div className="pt-6 meta-label text-[11px] text-ink-400">
          No Application Fee • Merit-Based Fellowship Screening
        </div>
      </div>
    </section>
  );
};

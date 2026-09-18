import React from "react";
import { APV_DATA } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Award } from "lucide-react";
import { assetUrl } from "@/lib/utils";

export const AryaSamaj: React.FC = () => {
  return (
    <section id="arya-samaj" className="w-full section-gap bg-navy-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Top Label & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="meta-label text-gold-400">
              {APV_DATA.aryaSamaj.label}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.08] text-white">
              {APV_DATA.aryaSamaj.title}
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 pt-2 text-ink-200">
            <p className="text-base sm:text-lg leading-relaxed font-normal">
              {APV_DATA.aryaSamaj.narrative}
            </p>

            <div className="p-6 rounded-card bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-gold-400">
                <Award className="h-4 w-4" />
                <span className="meta-label text-[10px]">{APV_DATA.aryaSamaj.motto}</span>
              </div>
              <blockquote className="text-sm sm:text-base italic text-white/90 leading-relaxed font-normal">
                "{APV_DATA.aryaSamaj.quote}"
              </blockquote>
            </div>

            <div className="pt-2">
              <a href="#about">
                <Button variant="gold" size="md">
                  <span>EXPLORE ARYA SAMAJ PHILOSOPHY</span>
                  <ArrowUpRight className="h-4 w-4 ml-1.5" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Archival Imagery & Historical Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
          <div className="md:col-span-4 rounded-card-lg overflow-hidden bg-white/5 border border-white/10 p-8 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-36 h-36 rounded-pill overflow-hidden border-2 border-gold-500/40 p-1 bg-white/10">
              <img
                src={assetUrl("/assets/maharishi-dayanand.png")}
                alt={APV_DATA.aryaSamaj.founder}
                className="w-full h-full object-cover rounded-pill"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-lg text-white">
                {APV_DATA.aryaSamaj.founder}
              </h4>
              <p className="text-xs text-gold-400 meta-label text-[10px]">
                Founded {APV_DATA.aryaSamaj.foundedDate}
              </p>
            </div>
          </div>

          <div className="md:col-span-8 rounded-card-lg overflow-hidden relative border border-white/10 min-h-[300px] bg-white/5">
            <img
              src={assetUrl("/assets/hero-4.jpg")}
              alt="Arya Samaj Legacy"
              className="w-full h-full object-cover opacity-60 filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/60 to-transparent p-8 sm:p-12 flex flex-col justify-end">
              <span className="meta-label text-gold-400 text-[10px]">UNIVERSAL BROTHERHOOD</span>
              <p className="text-lg sm:text-xl font-bold text-white max-w-md pt-1">
                Advocating scientific temperament, truth, and moral character in national governance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

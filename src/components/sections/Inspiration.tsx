import React from "react";
import { APV_DATA } from "@/data/content";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

export const Inspiration: React.FC = () => {
  return (
    <section id="inspiration" className="w-full section-gap bg-white border-t border-ink-900/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <SectionHeader
          title="Guided by visionary leaders of industry and society."
          description="The noble patrons whose philanthropic foresight and moral guardianship sustain the mission of Arya Pratibha Vikas Sansthan."
        />

        {/* Featured Editorial Profile: Shri S.K. Arya (28-32px rounded card) */}
        <div className="rounded-card-lg bg-paper card-border p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Large Portrait: 5 Cols */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-card-lg overflow-hidden border border-ink-900/10 bg-white p-2 shadow-sm">
                <img
                  src={APV_DATA.skArya.image}
                  alt={APV_DATA.skArya.name}
                  className="w-full h-full object-cover rounded-card filter contrast-[1.03]"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>
              <div className="text-center pt-4 space-y-1">
                <h4 className="font-bold text-lg text-navy-950">
                  {APV_DATA.skArya.name}
                </h4>
                <p className="text-xs text-ink-500 font-medium">
                  {APV_DATA.skArya.organization}
                </p>
              </div>
            </div>

            {/* Editorial Biography Excerpt: 7 Cols */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <Badge variant="navy">{APV_DATA.skArya.title}</Badge>
                <h3 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
                  {APV_DATA.skArya.name}
                </h3>
              </div>

              <blockquote className="text-base sm:text-lg text-navy-900 font-medium leading-relaxed italic border-l-2 border-gold-500 pl-4 py-1">
                "{APV_DATA.skArya.quote}"
              </blockquote>

              <p className="text-sm sm:text-base text-ink-700 leading-relaxed font-normal">
                {APV_DATA.skArya.bio}
              </p>

              <div className="pt-2">
                <a href="#about">
                  <Button variant="primary" size="md">
                    <span>READ FULL BIOGRAPHY</span>
                    <ArrowUpRight className="h-3.5 w-3.5 ml-1.5 text-gold-400" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Patron Cards (Mahashay Dharampal & Shri Raj Kumar) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {APV_DATA.otherPatrons.map((p, idx) => (
            <div
              key={idx}
              className="rounded-card bg-paper card-border p-8 flex flex-col justify-between space-y-6 shadow-xs"
            >
              <div className="flex items-start space-x-5">
                {p.image && (
                  <div className="w-20 h-20 rounded-pill overflow-hidden border border-ink-900/10 bg-white p-1 shrink-0">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover rounded-pill"
                    />
                  </div>
                )}
                <div className="space-y-1">
                  <span className="meta-label text-gold-600 text-[10px]">
                    {p.role}
                  </span>
                  <h4 className="text-xl font-bold text-navy-950">
                    {p.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-600 leading-relaxed pt-1 font-normal">
                    {p.bio}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-ink-900/5 meta-label text-[10px] text-ink-400">
                Institutional Benefactor
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

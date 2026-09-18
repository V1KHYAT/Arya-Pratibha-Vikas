import React from "react";
import { APV_DATA } from "@/data/content";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { assetUrl } from "@/lib/utils";

export const Centres: React.FC = () => {
  const centre = APV_DATA.centres[0];

  return (
    <section id="centres" className="w-full section-gap bg-paper border-t border-ink-900/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <SectionHeader
          label="08 — RESIDENTIAL CENTRES"
          title="Our Primary Academic Campus"
          description="A dedicated campus in the national capital providing fellows with modern academic infrastructure and quiet residential sanctuary."
        />

        {/* Major Centre Showcase Card (28-32px rounded) */}
        <div className="rounded-card-lg bg-white card-border overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Photo: 6 Cols */}
          <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[400px] bg-paper-subtle overflow-hidden">
            <img
              src={centre.image}
              alt={centre.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = assetUrl("/assets/hero-1.jpg");
              }}
            />
            <div className="absolute top-6 left-6">
              <span className="meta-label bg-navy-950 text-white px-3.5 py-1.5 rounded-pill text-[10px]">
                PRIMARY RESIDENCE • NEW DELHI
              </span>
            </div>
          </div>

          {/* Details: 6 Cols */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="meta-label text-gold-600 text-[10px]">
                  NEW DELHI SANCTUARY
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
                  {centre.name}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-ink-600 leading-relaxed font-normal">
                {centre.description}
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-ink-800 font-medium">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-navy-900 shrink-0 mt-0.5" />
                  <span>{centre.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-navy-900 shrink-0" />
                  <span>{APV_DATA.meta.helpline} / {APV_DATA.meta.altHelpline}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-navy-900 shrink-0" />
                  <span>{APV_DATA.meta.email}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-ink-900/5 flex items-center justify-between">
              <a href="#support">
                <Button variant="outline" size="md">
                  <span>EXPLORE FACILITIES & AMENITIES</span>
                  <ArrowUpRight className="h-3.5 w-3.5 ml-1.5" />
                </Button>
              </a>

              <span className="meta-label text-ink-400 text-[10px]">
                Full Boarding Included
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

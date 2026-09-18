import React from "react";
import { APV_DATA } from "@/data/content";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Check, ShieldCheck } from "lucide-react";

export const SupportSystem: React.FC = () => {
  const residential = APV_DATA.supportSystem[0];
  const coaching = APV_DATA.supportSystem[1];
  const mentorship = APV_DATA.supportSystem[2];
  const nutrition = APV_DATA.supportSystem[3];

  return (
    <section id="support" className="w-full section-gap bg-paper border-t border-ink-900/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <SectionHeader
          title="The Complete Support Ecosystem"
          description="Everything a serious aspirant requires to succeed in the Civil Services Examination—arranged with zero financial distraction."
        />

        {/* Varied Modular Grid (Inspired by Visual Reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Large Dark Card (Residential Kendra) - 6 Cols */}
          <div className="lg:col-span-6 rounded-card-lg bg-navy-950 text-white p-8 sm:p-12 flex flex-col justify-between space-y-8 card-border-dark">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Badge variant="gold" className="text-[10px]">
                  {residential.category}
                </Badge>
                <ShieldCheck className="h-5 w-5 text-gold-400" />
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                {residential.title}
              </h3>

              <p className="text-sm sm:text-base text-ink-200 leading-relaxed font-normal">
                {residential.description}
              </p>

              <div className="space-y-3 pt-2">
                {residential.details.map((d, i) => (
                  <div key={i} className="flex items-center space-x-3 text-xs sm:text-sm text-ink-100">
                    <span className="h-4 w-4 rounded-pill bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between meta-label text-[10px] text-ink-400">
              <span>New Delhi Headquarters</span>
              <span className="text-gold-400">Compulsory Residence</span>
            </div>
          </div>

          {/* Card 2: Image Card (Coaching Sponsorship) - 6 Cols */}
          <div className="lg:col-span-6 rounded-card-lg bg-white card-border overflow-hidden flex flex-col justify-between shadow-xs">
            <div className="relative h-60 sm:h-72 overflow-hidden bg-paper-subtle">
              <img
                src={coaching.image}
                alt={coaching.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="navy">{coaching.category}</Badge>
              </div>
            </div>

            <div className="p-8 sm:p-10 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
                  {coaching.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-normal">
                  {coaching.description}
                </p>
                <div className="space-y-2 pt-2">
                  {coaching.details.map((d, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs sm:text-sm text-ink-800 font-medium">
                      <span className="h-4 w-4 rounded-pill bg-navy-50 text-navy-900 flex items-center justify-center shrink-0">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-ink-900/5 meta-label text-[10px] text-ink-400">
                Partnered with Premier Delhi Institutes
              </div>
            </div>
          </div>

          {/* Card 3: Mentorship Card - 6 Cols */}
          <div className="lg:col-span-6 rounded-card-lg bg-white card-border p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-xs">
            <div className="space-y-4">
              <Badge variant="default" className="w-fit">{mentorship.category}</Badge>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-950 tracking-tight">
                {mentorship.title}
              </h3>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-normal">
                {mentorship.description}
              </p>
              <div className="space-y-2 pt-1">
                {mentorship.details.map((d, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs sm:text-sm text-ink-800">
                    <span className="h-4 w-4 rounded-pill bg-paper-subtle text-navy-900 flex items-center justify-center shrink-0">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-ink-900/5 meta-label text-[10px] text-ink-400">
              Direct Interaction with Civil Servants
            </div>
          </div>

          {/* Card 4: Nutrition Card - 6 Cols */}
          <div className="lg:col-span-6 rounded-card-lg bg-white card-border p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-xs">
            <div className="space-y-4">
              <Badge variant="default" className="w-fit">{nutrition.category}</Badge>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-950 tracking-tight">
                {nutrition.title}
              </h3>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-normal">
                {nutrition.description}
              </p>
              <div className="space-y-2 pt-1">
                {nutrition.details.map((d, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs sm:text-sm text-ink-800">
                    <span className="h-4 w-4 rounded-pill bg-paper-subtle text-navy-900 flex items-center justify-center shrink-0">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-ink-900/5 meta-label text-[10px] text-ink-400">
              Prepared In-House with Strict Hygiene Standards
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

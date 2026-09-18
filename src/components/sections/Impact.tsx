import React, { useState } from "react";
import { ALUMNI_FELLOWS, AlumniFellow } from "@/data/alumni";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Play, Quote, Award } from "lucide-react";

export const Impact: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<AlumniFellow | null>(null);

  return (
    <section id="impact" className="w-full section-gap bg-paper border-t border-ink-900/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeader
            label="06 — IMPACT & SUCCESS STORIES"
            title="Voices of APV Fellows"
            description="Real stories of candidates from humble backgrounds who cleared the Civil Services Examination with complete APV sponsorship."
          />
          <Badge variant="navy" className="shrink-0">
            Verified Alumni Records
          </Badge>
        </div>

        {/* 4 Large Modular Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ALUMNI_FELLOWS.map((fellow) => (
            <div
              key={fellow.id}
              className="rounded-card-lg bg-white card-border p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-xs hover:border-navy-900/30 transition-all group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-navy-900" />
                    <span className="text-xs font-bold text-navy-900">
                      {fellow.cadre}
                    </span>
                  </div>
                  <span className="meta-label text-ink-400 text-[10px]">
                    {fellow.batch}
                  </span>
                </div>

                <div className="relative pl-4 border-l-2 border-gold-500">
                  <Quote className="h-4 w-4 text-gold-500/40 absolute -top-1 -left-2" />
                  <p className="text-sm sm:text-base text-ink-800 leading-relaxed font-normal italic">
                    "{fellow.quote}"
                  </p>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-navy-950">
                  {fellow.name}
                </h4>
              </div>

              <div className="pt-6 border-t border-ink-900/5 flex items-center justify-between">
                <span className="meta-label text-[10px] text-ink-400">
                  Verified Result
                </span>

                <button
                  onClick={() => setActiveVideo(fellow)}
                  className="inline-flex items-center space-x-2 text-xs font-bold text-navy-900 group-hover:text-gold-600 transition-colors focus:outline-none"
                >
                  <div className="h-7 w-7 rounded-pill bg-navy-900 text-white flex items-center justify-center group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                    <Play className="h-3 w-3 fill-current ml-0.5" />
                  </div>
                  <span>Watch Video Memoir</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <Dialog open={!!activeVideo} onOpenChange={() => setActiveVideo(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{activeVideo.name} • {activeVideo.cadre}</DialogTitle>
              <DialogDescription>
                {activeVideo.batch} • Official Student Video Memoir
              </DialogDescription>
            </DialogHeader>
            <div className="relative pt-[56.25%] w-full bg-black rounded-card overflow-hidden mt-2">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={`${activeVideo.name} Memoir`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

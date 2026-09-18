import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Positioning } from "@/components/sections/Positioning";
import { AryaSamaj } from "@/components/sections/AryaSamaj";
import { Programs } from "@/components/sections/Programs";
import { SupportSystem } from "@/components/sections/SupportSystem";
import { Inspiration } from "@/components/sections/Inspiration";
import { Impact } from "@/components/sections/Impact";
import { Selection } from "@/components/sections/Selection";
import { Centres } from "@/components/sections/Centres";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { ApplyModal } from "@/components/sections/ApplyModal";

export const App: React.FC = () => {
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-paper text-ink-900 font-sans selection:bg-navy-900 selection:text-white flex flex-col">
      {/* 00: Minimalist Masthead */}
      <Navbar onOpenApply={() => setApplyModalOpen(true)} />

      {/* 11-Section Narrative Journey */}
      <main className="flex-1 w-full">
        {/* 01: Hero with S.K. Arya Presence */}
        <Hero onOpenApply={() => setApplyModalOpen(true)} />

        {/* 02: APV Positioning & 4 Values */}
        <Positioning />

        {/* 03: Arya Samaj Legacy */}
        <AryaSamaj />

        {/* 04: Programs (Civil Services & Fellowship) */}
        <Programs onOpenApply={() => setApplyModalOpen(true)} />

        {/* 05: Why APV / Support System Ecosystem */}
        <SupportSystem />

        {/* 06: S.K. Arya & Inspiration */}
        <Inspiration />

        {/* 07: Impact & Verified Alumni Memoirs */}
        <Impact />

        {/* 08: 6-Stage Selection Process */}
        <Selection onOpenApply={() => setApplyModalOpen(true)} />

        {/* 09: Residential Delhi Kendra */}
        <Centres />

        {/* 10: Before You Apply (FAQ Accordion) */}
        <Faq />

        {/* 11: Final High-Impact CTA */}
        <FinalCta onOpenApply={() => setApplyModalOpen(true)} />
      </main>

      {/* 12: Dark Institutional Footer */}
      <Footer />

      {/* Interactive Fellowship Application Modal */}
      <ApplyModal
        open={applyModalOpen}
        onOpenChange={setApplyModalOpen}
      />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { APV_DATA } from "@/data/content";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export const Faq: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "General", "Eligibility", "Accommodation", "Selection", "Fees"];

  const filteredFaqs =
    selectedCategory === "All"
      ? APV_DATA.faqs
      : APV_DATA.faqs.filter((f) => f.category === selectedCategory);

  return (
    <section id="faq" className="w-full section-gap bg-white border-t border-ink-900/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeader
            title="Before you apply."
            description="Essential guidelines and answers to common questions regarding eligibility, campus living, and fellowship terms."
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2.5 border-b border-ink-900/10 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                selectedCategory === cat
                  ? "bg-terracotta-500 text-white shadow-xs"
                  : "bg-paper text-ink-700 hover:text-ink-950 border border-ink-900/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion Component */}
        <div className="rounded-card-lg bg-paper card-border p-6 sm:p-10 divide-y divide-ink-900/10 shadow-xs">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {filteredFaqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left font-bold text-base sm:text-lg text-ink-950 hover:text-terracotta-600 transition-colors">
                  <div className="flex items-center space-x-3 pr-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-terracotta-600 shrink-0">
                      [{faq.category}]
                    </span>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-ink-600 leading-relaxed font-normal pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Admissions Help Desk Banner */}
        <div className="rounded-card bg-paper-subtle card-border p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-lg text-ink-950">
              Need personalized guidance from the academic desk?
            </h4>
            <p className="text-xs sm:text-sm text-ink-600 font-normal">
              Our New Delhi counseling office is reachable Monday through Saturday, 10:00 AM – 5:00 PM.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <a href={`tel:${APV_DATA.meta.helpline}`}>
              <Button variant="outline" size="sm" className="rounded-full px-5 space-x-1.5">
                <Phone className="h-3.5 w-3.5 text-terracotta-500" />
                <span>{APV_DATA.meta.helpline}</span>
              </Button>
            </a>
            <a href={`mailto:${APV_DATA.meta.email}`}>
              <Button variant="outline" size="sm" className="rounded-full px-5 space-x-1.5">
                <Mail className="h-3.5 w-3.5 text-terracotta-500" />
                <span>EMAIL US</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

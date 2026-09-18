import React from "react";
import { APV_DATA } from "@/data/content";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { assetUrl } from "@/lib/utils";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-navy-950 text-white pt-24 pb-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* 12-Column Grid Directory */}
        <div className="grid grid-cols-12 gap-10 lg:gap-16 pb-20 border-b border-white/10">
          {/* Col 1-5: Identity & Mission */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3.5">
              <div className="h-12 w-12 rounded-xl bg-white p-1.5 flex items-center justify-center">
                <img
                  src={assetUrl("/assets/logo.png")}
                  alt="APV Emblem"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white tracking-tight leading-tight">
                  Arya Pratibha Vikas Sansthan
                </h3>
                <p className="meta-label text-gold-400 text-[10px] tracking-wider">
                  An initiative of {APV_DATA.meta.parentOrganization} ({APV_DATA.meta.legacyYears} Years)
                </p>
              </div>
            </div>

            <p className="text-sm text-ink-300 font-normal leading-relaxed max-w-md">
              A charitable public initiative dedicated to identifying and sponsoring academically meritorious aspirants from across India to enter the elite Civil Services (IAS, IPS, IFS, IRS) with unshakeable moral integrity.
            </p>

            {/* Affiliation & Vedic Motto */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <div className="h-10 bg-white/5 px-4 py-2 rounded-pill flex items-center space-x-2 border border-white/10">
                <img
                  src={assetUrl("/assets/abdss.png")}
                  alt="ABDSS Seal"
                  className="h-5 w-auto object-contain filter brightness-200"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                <span className="text-[11px] font-bold text-ink-200 tracking-wide">
                  Affiliated with ABDSS
                </span>
              </div>
              <span className="meta-label text-[10px] text-gold-400">
                {APV_DATA.meta.heritageMotto}
              </span>
            </div>
          </div>

          {/* Col 6-7: Navigation & About */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 space-y-4">
            <h4 className="meta-label text-white/70">
              Sansthan
            </h4>
            <ul className="space-y-2.5 text-xs text-ink-300 font-medium">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About APV
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Mission & Approach
                </a>
              </li>
              <li>
                <a href="#arya-samaj" className="hover:text-white transition-colors">
                  Arya Samaj Legacy
                </a>
              </li>
              <li>
                <a href="#inspiration" className="hover:text-white transition-colors">
                  Shri S.K. Arya
                </a>
              </li>
              <li>
                <a href="#centres" className="hover:text-white transition-colors">
                  Delhi Kendra
                </a>
              </li>
            </ul>
          </div>

          {/* Col 8-9: Programs & Admissions */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 space-y-4">
            <h4 className="meta-label text-white/70">
              Programs
            </h4>
            <ul className="space-y-2.5 text-xs text-ink-300 font-medium">
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  Civil Services Overview
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  Residential Fellowship
                </a>
              </li>
              <li>
                <a href="#selection" className="hover:text-white transition-colors">
                  Selection Pathway
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-white transition-colors">
                  Facilities & Meals
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Before You Apply (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 10-12: Contact & Headquarters */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 space-y-4">
            <h4 className="meta-label text-white/70">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs text-ink-300 font-normal">
              <div className="flex items-start space-x-2.5">
                <MapPin className="h-4 w-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{APV_DATA.meta.headquarters}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-gold-400 shrink-0" />
                <a
                  href={`tel:${APV_DATA.meta.helpline}`}
                  className="hover:text-white transition-colors"
                >
                  {APV_DATA.meta.helpline} / {APV_DATA.meta.altHelpline}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-gold-400 shrink-0" />
                <a
                  href={`mailto:${APV_DATA.meta.email}`}
                  className="hover:text-white transition-colors"
                >
                  {APV_DATA.meta.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://pratibhavikas.org"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-xs font-bold text-gold-400 hover:text-white"
              >
                <span>pratibhavikas.org archive</span>
                <ArrowUpRight className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-400 gap-4 font-normal">
          <div className="flex items-center space-x-4">
            <span>© {new Date().getFullYear()} Arya Pratibha Vikas Sansthan</span>
            <span>•</span>
            <span>All Rights Reserved</span>
          </div>
          <div className="flex items-center space-x-6">
            <span>Upholding {APV_DATA.meta.legacyYears} Years of Dedicated Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

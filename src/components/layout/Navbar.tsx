import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { assetUrl } from "@/lib/utils";

interface NavbarProps {
  onOpenApply: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "ABOUT APV",
      href: "#about",
      sublinks: [
        { label: "Mission & Purpose", href: "#about" },
        { label: "Why APV Support System", href: "#support" },
        { label: "Delhi Residential Center", href: "#centres" },
      ],
    },
    {
      label: "PROGRAMS",
      href: "#programs",
      sublinks: [
        { label: "Civil Services Program", href: "#programs" },
        { label: "Residential Fellowship", href: "#programs" },
        { label: "Selection Process", href: "#selection" },
      ],
    },
    {
      label: "IMPACT",
      href: "#impact",
      sublinks: [
        { label: "Alumni Voices & IAS/IPS Ranks", href: "#impact" },
        { label: "Video Memoirs", href: "#impact" },
      ],
    },
    {
      label: "ARYA SAMAJ",
      href: "#arya-samaj",
      highlight: true,
      sublinks: [
        { label: "145+ Years Legacy", href: "#arya-samaj" },
        { label: "Maharshi Dayanand Saraswati", href: "#arya-samaj" },
        { label: "Vedic Principles of Governance", href: "#arya-samaj" },
      ],
    },
    {
      label: "INSPIRATION",
      href: "#inspiration",
      sublinks: [
        { label: "Shri S.K. Arya", href: "#inspiration" },
        { label: "Padma Bhushan Mahashay Dharampal", href: "#inspiration" },
        { label: "Shri Raj Kumar", href: "#inspiration" },
      ],
    },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-paper/95 backdrop-blur-md border-b border-ink-900/10 shadow-xs"
          : "bg-paper/80 backdrop-blur-xs border-b border-ink-900/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#" className="flex items-center space-x-3.5 group">
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-white p-1 border border-ink-900/10 flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:scale-105">
            <img
              src={assetUrl("/assets/logo.png")}
              alt="APV Emblem"
              className="h-full w-full object-contain"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-lg sm:text-xl text-navy-950 tracking-tight leading-tight">
              Arya Pratibha Vikas
            </span>
            <span className="meta-label text-ink-500 tracking-wider">
              Sansthan • New Delhi
            </span>
          </div>
        </a>

        {/* Minimal Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative py-2 group"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.href}
                className={`flex items-center space-x-1 meta-label text-[11px] transition-colors ${
                  item.highlight
                    ? "text-navy-950 font-bold hover:text-gold-600"
                    : "text-ink-700 hover:text-navy-950"
                }`}
              >
                <span>{item.label}</span>
                <ChevronDown className="h-3 w-3 text-ink-400 group-hover:text-navy-950 transition-transform group-hover:rotate-180" />
              </a>

              {/* Sub-menu Dropdown */}
              {activeDropdown === item.label && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50">
                  <div className="bg-white rounded-card-sm border border-ink-900/10 p-3 shadow-xl space-y-1">
                    {item.sublinks.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-3 py-2 text-xs font-medium text-ink-700 hover:text-navy-950 hover:bg-paper-subtle rounded-lg transition-colors"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center space-x-3">
          <Button
            onClick={onOpenApply}
            variant="primary"
            size="md"
            className="group"
          >
            <span>APPLY NOW</span>
            <ArrowUpRight className="h-3.5 w-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-gold-400" />
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-pill hover:bg-paper-subtle text-navy-950 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-ink-900/10 bg-paper px-6 py-8 space-y-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-ink-900/5 pb-3">
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-bold text-base text-navy-950 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-ink-400">→</span>
                </a>
                <div className="pl-3 pt-2 space-y-1.5">
                  {item.sublinks.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs text-ink-600 hover:text-navy-950"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              variant="primary"
              className="w-full justify-center"
            >
              APPLY FOR FELLOWSHIP
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

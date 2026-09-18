import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  isDark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  className,
  isDark = false,
}) => {
  return (
    <div className={cn("space-y-4 max-w-3xl", className)}>
      {label && (
        <div
          className={cn(
            "meta-label font-bold tracking-widest",
            isDark ? "text-gold-400" : "text-navy-900/70"
          )}
        >
          {label}
        </div>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12]",
          isDark ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base sm:text-lg font-normal leading-relaxed pt-1",
            isDark ? "text-ink-200" : "text-ink-700"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

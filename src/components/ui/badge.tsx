import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "navy" | "gold" | "purple" | "outline" | "white";
}

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-[11px] font-sans font-bold tracking-wider uppercase transition-colors select-none",
        {
          "bg-paper-subtle text-ink-700 border border-ink-900/10": variant === "default",
          "bg-navy-900 text-white": variant === "navy",
          "bg-gold-100 text-gold-600 border border-gold-400/30": variant === "gold",
          "bg-apvPurple-100 text-apvPurple-800 border border-apvPurple-700/20": variant === "purple",
          "border border-ink-900/15 text-ink-700 bg-transparent": variant === "outline",
          "bg-white text-navy-950 shadow-xs border border-ink-900/5": variant === "white",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };

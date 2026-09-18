import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "dark" | "outline" | "flat";
  size?: "default" | "lg";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "transition-all duration-300 relative overflow-hidden",
          size === "lg" ? "rounded-card-lg p-8 sm:p-10 lg:p-12" : "rounded-card p-6 sm:p-8",
          {
            "bg-white card-border shadow-xs hover:border-ink-900/20": variant === "default",
            "bg-navy-950 text-white card-border-dark": variant === "dark",
            "bg-transparent card-border": variant === "outline",
            "bg-paper-subtle card-border": variant === "flat",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

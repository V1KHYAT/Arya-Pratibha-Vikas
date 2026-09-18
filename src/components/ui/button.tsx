import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-pill font-sans text-xs font-bold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none",
          {
            // Variants
            "bg-navy-900 text-white hover:bg-navy-800 active:bg-navy-950 shadow-xs":
              variant === "primary",
            "bg-gold-500 text-navy-950 hover:bg-gold-400 active:bg-gold-600 shadow-xs":
              variant === "gold",
            "bg-white text-navy-950 border border-ink-900/10 hover:bg-paper-subtle active:bg-paper-muted":
              variant === "secondary",
            "border border-ink-900/20 bg-transparent text-ink-900 hover:border-ink-900 hover:bg-white/50 active:bg-paper-subtle":
              variant === "outline",
            "text-ink-700 hover:text-navy-950 hover:bg-ink-100/50 active:bg-ink-200/50":
              variant === "ghost",

            // Sizes
            "h-9 px-5 py-2 text-xs": size === "sm",
            "h-12 px-7 py-3 text-xs sm:text-sm tracking-wide": size === "md",
            "min-h-[56px] px-8 sm:px-10 py-4 text-sm sm:text-base tracking-wider": size === "lg",
            "h-10 w-10 p-0": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

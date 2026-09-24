import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant =
  "default" | "info" | "warning" | "success" | "danger" | "neutral";

const VARIANTS: Record<Variant, string> = {
  default: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  info: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300",
  warning: "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300",
  success:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  danger: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300",
  neutral:
    "bg-neutral-200 text-neutral-600 line-through dark:bg-neutral-800 dark:text-neutral-400",
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
          VARIANTS[variant],
          className,
        )}
        {...props}
      />
    );
  },
);
Badge.displayName = "Badge";

import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-soft dark:bg-gold dark:text-navy dark:hover:bg-gold-soft",
  secondary:
    "border border-navy/15 text-navy hover:border-navy/35 dark:border-white/15 dark:text-white dark:hover:border-white/35",
  ghost:
    "text-navy hover:text-navy-soft dark:text-white dark:hover:text-white/80",
};

type ButtonProps = {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium tracking-[0.04em] transition-colors duration-300",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

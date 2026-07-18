import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-soft dark:bg-gold dark:text-navy dark:hover:bg-gold-soft",
  secondary:
    "border border-navy/20 text-navy hover:border-gold hover:text-navy dark:border-white/20 dark:text-white dark:hover:border-gold dark:hover:text-gold",
  ghost:
    "text-navy hover:text-gold dark:text-white dark:hover:text-gold",
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
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300",
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

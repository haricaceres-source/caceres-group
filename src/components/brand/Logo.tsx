import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  compact?: boolean;
  /** Use on dark backgrounds (e.g. footer / transparent hero header). */
  inverted?: boolean;
};

export function Logo({ className, compact = false, inverted = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="Grupos Caceres home"
    >
      <span className="relative flex h-9 w-9 items-center justify-center border border-gold/35 bg-navy">
        <span className="font-serif text-sm font-medium tracking-[0.08em] text-gold">
          GC
        </span>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "text-[13px] font-medium tracking-[0.2em] uppercase",
              inverted ? "text-white" : "text-navy dark:text-white",
            )}
          >
            Grupos
          </span>
          <span className="mt-1 text-[10px] font-medium tracking-[0.28em] text-gold uppercase">
            Caceres
          </span>
        </span>
      )}
    </Link>
  );
}

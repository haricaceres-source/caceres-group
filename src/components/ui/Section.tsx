import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: "default" | "muted" | "navy";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  containerClassName,
  tone = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        tone === "muted" && "bg-[var(--surface)]",
        tone === "navy" && "bg-navy text-white",
        className,
      )}
    >
      <div className={cn("mx-auto max-w-6xl px-6", containerClassName)}>
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl md:mb-14">
            {eyebrow && (
              <p
                className={cn(
                  "mb-3 text-[11px] font-medium uppercase tracking-[0.26em]",
                  tone === "navy" ? "text-gold" : "text-gold-muted dark:text-gold",
                )}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={cn(
                  "font-serif text-2xl font-medium leading-snug tracking-tight md:text-3xl",
                  tone === "navy" ? "text-white" : "text-navy dark:text-white",
                )}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className={cn(
                  "mt-4 text-base leading-relaxed",
                  tone === "navy"
                    ? "text-white/70"
                    : "text-[var(--muted)]",
                )}
              >
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

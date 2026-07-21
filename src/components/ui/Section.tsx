import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: "default" | "muted" | "navy" | "direction";
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
        "py-32 md:py-40",
        tone === "muted" && "bg-[var(--surface)]",
        tone === "direction" && "bg-[#F6F5F2] dark:bg-[var(--surface)]",
        tone === "navy" && "bg-navy text-white",
        className,
      )}
    >
      <div className={cn("mx-auto max-w-5xl px-6", containerClassName)}>
        {(eyebrow || title || description) && (
          <div className="mb-14 max-w-3xl md:mb-16">
            {eyebrow && (
              <p
                className={cn(
                  "mb-4 text-[11px] font-medium tracking-[0.25em] uppercase",
                  tone === "navy" ? "text-gold" : "text-gold",
                )}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={cn(
                  "font-serif text-2xl font-medium leading-tight tracking-tight md:text-3xl lg:text-[2.15rem]",
                  tone === "navy" ? "text-white" : "text-navy dark:text-white",
                )}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className={cn(
                  "mt-5 text-base leading-relaxed",
                  tone === "navy" ? "text-white/70" : "text-[var(--muted)]",
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

import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "border border-[var(--line)] bg-[var(--surface-elevated)] p-6 transition-colors duration-300 hover:border-gold/50 md:p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}

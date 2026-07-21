import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-none border-0 border-t border-gold/40 bg-transparent pt-6 transition-colors duration-300 md:pt-8",
        className,
      )}
    >
      {children}
    </div>
  );
}

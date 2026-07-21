import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  status: "Active" | "Completed" | string;
  className?: string;
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const isActive = status === "Active";
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-sm px-2.5 py-1 text-[10px] font-medium tracking-[0.16em] uppercase",
        isActive
          ? "border border-gold/50 text-gold"
          : "bg-navy text-white",
        className,
      )}
    >
      {status}
    </span>
  );
}

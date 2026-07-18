import {
  Landmark,
  Cpu,
  Pill,
  HeartPulse,
  Building2,
  Flame,
  Wheat,
  Truck,
  Code2,
  ShoppingBag,
  Pickaxe,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  mining: Pickaxe,
  banking: Landmark,
  technology: Cpu,
  pharmaceuticals: Pill,
  healthcare: HeartPulse,
  infrastructure: Building2,
  energy: Flame,
  agriculture: Wheat,
  logistics: Truck,
  software: Code2,
  "consumer-goods": ShoppingBag,
};

export function IndustryIcon({ slug }: { slug: string }) {
  const Icon = ICONS[slug] ?? Building2;
  return <Icon size={22} className="text-gold" aria-hidden />;
}

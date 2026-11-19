import { Camera, Flower2, Mic2, Tent, UtensilsCrossed } from "lucide-react";
import type { CategoryIconKey } from "@/types";

const iconMap = {
  equipment: Tent,
  food: UtensilsCrossed,
  ceremony: Flower2,
  performer: Mic2,
  creative: Camera,
} as const;

type CategoryIconProps = {
  icon: CategoryIconKey;
  className?: string;
};

export function CategoryIcon({ icon, className }: CategoryIconProps) {
  const Icon = iconMap[icon];
  return <Icon aria-hidden="true" className={className} strokeWidth={1.8} />;
}

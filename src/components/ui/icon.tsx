import { icons } from "lucide-react";

interface IconProps {
  name: keyof typeof icons;
  size?: number;
  className?: string;
  fallback?: keyof typeof icons;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  let LucideIcon = icons[name];

  if (!LucideIcon && fallback) {
    LucideIcon = icons[fallback];
  }

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  return <LucideIcon size={size} className={className} />;
};

export default Icon;

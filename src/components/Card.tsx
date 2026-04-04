import { ReactNode } from "react";

const iconColors: Record<string, string> = {
  red: "bg-accent/15 text-accent-light",
  green: "bg-green/15 text-green",
  blue: "bg-blue/15 text-blue",
  purple: "bg-purple/15 text-purple",
  orange: "bg-orange/15 text-orange",
  cyan: "bg-cyan/15 text-cyan",
  yellow: "bg-yellow/15 text-yellow",
};

interface CardProps {
  icon?: string;
  iconColor?: string;
  title: string;
  children: ReactNode;
  className?: string;
  pills?: { label: string; color: string }[];
  border?: string;
}

export default function Card({
  icon,
  iconColor = "red",
  title,
  children,
  className = "",
  pills,
  border,
}: CardProps) {
  return (
    <div
      className={`glow-card bg-surface border rounded-xl p-5 ${
        border || "border-border"
      } ${className}`}
    >
      {icon && (
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-3 ${
            iconColors[iconColor] || iconColors.red
          }`}
        >
          {icon}
        </div>
      )}
      <h3 className="font-semibold text-[0.95rem] mb-1.5 text-foreground">
        {title}
      </h3>
      <div className="text-muted text-[0.88rem] leading-relaxed">
        {children}
      </div>
      {pills && pills.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {pills.map((p) => (
            <span
              key={p.label}
              className={`pill bg-${p.color}/15 text-${p.color}`}
            >
              {p.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

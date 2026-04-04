import { ReactNode } from "react";

const variants = {
  insight: {
    border: "border-l-blue",
    bg: "bg-blue/[0.06]",
    icon: "i",
  },
  warning: {
    border: "border-l-accent",
    bg: "bg-accent/[0.06]",
    icon: "!",
  },
  tip: {
    border: "border-l-green",
    bg: "bg-green/[0.06]",
    icon: "^",
  },
  concept: {
    border: "border-l-purple",
    bg: "bg-purple/[0.06]",
    icon: "*",
  },
};

interface CalloutProps {
  variant: keyof typeof variants;
  title: string;
  children: ReactNode;
}

export default function Callout({ variant, title, children }: CalloutProps) {
  const v = variants[variant];
  return (
    <div
      className={`rounded-xl ${v.bg} border-l-[3px] ${v.border} p-5 my-6`}
    >
      <div className="font-bold text-sm mb-1.5 text-foreground">{title}</div>
      <div className="text-muted text-[0.92rem] leading-relaxed">
        {children}
      </div>
    </div>
  );
}

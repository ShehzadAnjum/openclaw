import { ReactNode } from "react";

interface ExerciseProps {
  num: number;
  title: string;
  children: ReactNode;
}

export default function Exercise({ num, title, children }: ExerciseProps) {
  return (
    <div className="my-5 rounded-xl border border-green/25 bg-green/[0.04] overflow-hidden">
      <div className="px-5 py-3 border-b border-green/15 flex items-center gap-3">
        <span className="font-mono text-xs font-bold text-green bg-green/15 rounded-md w-7 h-7 flex items-center justify-center shrink-0">
          {num}
        </span>
        <span className="font-semibold text-sm text-foreground">
          Try It: {title}
        </span>
      </div>
      <div className="p-5 text-muted text-[0.88rem] leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

"use client";

import { useState, ReactNode } from "react";

interface Tab {
  label: string;
  icon?: string;
  content: ReactNode;
}

interface TabGroupProps {
  tabs: Tab[];
}

export default function TabGroup({ tabs }: TabGroupProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="my-4 rounded-xl border border-border overflow-hidden">
      <div className="flex bg-surface-2 border-b border-border overflow-x-auto">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActive(i)}
            className={`px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-all ${
              active === i
                ? "text-accent-light border-b-2 border-accent bg-surface"
                : "text-muted hover:text-foreground"
            }`}
          >
            {tab.icon && <span className="mr-1.5">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="bg-surface p-5">{tabs[active].content}</div>
    </div>
  );
}

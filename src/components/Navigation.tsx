"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#what", label: "What" },
  { href: "#history", label: "History" },
  { href: "#why", label: "Why" },
  { href: "#concepts", label: "Concepts" },
  { href: "#architecture", label: "Architecture" },
  { href: "#skills", label: "Skills" },
  { href: "#memory", label: "Memory" },
  { href: "#compare", label: "Compare" },
  { href: "#usecases", label: "Use Cases" },
  { href: "#security", label: "Security" },
  { href: "#limits", label: "Limits" },
  { href: "#classroom", label: "Classroom" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links
        .map((l) => ({
          id: l.href.slice(1),
          el: document.getElementById(l.href.slice(1)),
        }))
        .filter((s) => s.el);

      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].el!.getBoundingClientRect();
        if (rect.top <= 120) {
          setActive(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0c10]/92 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center h-14">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <span className="text-xl font-bold font-display tracking-tight">
            <span className="text-foreground">Open</span>
            <span className="text-accent">Claw</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1 ml-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-2.5 py-1 text-xs rounded-md transition-all duration-200 ${
                active === l.href.slice(1)
                  ? "text-accent-light bg-[rgba(232,80,58,0.1)]"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="ml-auto">
          <span className="text-[0.65rem] px-3 py-1 rounded-full border border-accent/30 bg-accent/[0.08] text-accent-light font-mono tracking-wider uppercase">
            Teaching Guide
          </span>
        </div>
      </div>
    </nav>
  );
}

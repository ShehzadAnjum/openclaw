"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#what", label: "What" },
  { href: "#concepts", label: "Concepts" },
  { href: "#prereqs", label: "Setup" },
  { href: "#install", label: "Install" },
  { href: "#firstrun", label: "First Run" },
  { href: "#workspace", label: "Workspace" },
  { href: "#architecture", label: "Architecture" },
  { href: "#channels", label: "Channels" },
  { href: "#skills", label: "Skills" },
  { href: "#memory", label: "Memory" },
  { href: "#automation", label: "Automation" },
  { href: "#ollama", label: "Local LLM" },
  { href: "#compare", label: "Compare" },
  { href: "#security", label: "Security" },
  { href: "#limits", label: "Limits" },
  { href: "#classroom", label: "Classroom" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center h-14">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <span className="text-xl font-bold font-display tracking-tight">
            <span className="text-foreground">Open</span>
            <span className="text-accent">Claw</span>
          </span>
        </a>

        <div className="hidden xl:flex items-center gap-0.5 ml-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-2 py-1 text-[0.7rem] rounded-md transition-all duration-200 ${
                active === l.href.slice(1)
                  ? "text-accent-light bg-[rgba(232,80,58,0.1)]"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="xl:hidden ml-auto mr-3 text-muted hover:text-foreground p-1"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <rect y="3" width="20" height="2" rx="1" />
            <rect y="9" width="20" height="2" rx="1" />
            <rect y="15" width="20" height="2" rx="1" />
          </svg>
        </button>

        <div className="hidden xl:block ml-auto">
          <span className="text-[0.6rem] px-2.5 py-1 rounded-full border border-accent/30 bg-accent/[0.08] text-accent-light font-mono tracking-wider uppercase">
            Teaching Guide &mdash; 16 Sections
          </span>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="xl:hidden bg-surface border-b border-border px-4 py-3 grid grid-cols-4 gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`px-2 py-1.5 text-[0.7rem] rounded-md text-center ${
                active === l.href.slice(1)
                  ? "text-accent-light bg-accent/10"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

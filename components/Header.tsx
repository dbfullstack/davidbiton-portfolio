"use client";

import { useState } from "react";
import ScrollProgress from "./motion/ScrollProgress";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Case Studies" },
  { href: "#live-work", label: "Live Work" },
  { href: "#products", label: "Studio" },
  { href: "#stack", label: "Stack" },
  { href: "#how-we-work", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/70 border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-3">
        <a href="#" className="font-semibold tracking-tight flex items-center gap-2 shrink-0">
          <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-gradient-to-br from-accent to-accent-2 text-bg font-bold">
            db
          </span>
          <span className="text-text-primary text-sm">Studio</span>
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-6 text-sm text-text-secondary">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <nav aria-label="Primary" className="md:hidden flex flex-col gap-1 border-t border-border px-6 py-3 text-sm text-text-secondary">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-2.5 transition-colors hover:bg-surface hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}

      <ScrollProgress />
    </header>
  );
}

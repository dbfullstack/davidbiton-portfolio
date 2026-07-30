"use client";

import { useState } from "react";

type Highlight = { label: string; tag: string };

// Every item here restates something covered in full, fully-accessible
// detail further down the page (About/CaseStudies/LiveWork/Products/Stack)
// — this strip is a decorative highlight reel, not a place unique content
// lives, which is what keeps the aria-hidden marquee track below safe.
const highlights: Highlight[] = [
  { label: "AI Engineering", tag: "Claude Code · agent design" },
  { label: "Fractional EM", tag: "engineering leadership" },
  { label: "Backend Architecture", tag: "TypeScript · NestJS · Kafka" },
  { label: "Mobile SDK Direction", tag: "iOS · Android · Flutter" },
  { label: "Flagscope", tag: "live product" },
  { label: "DevHub", tag: "engineering intelligence" },
  { label: "Chan True Dream", tag: "shipped in a day" },
  { label: "Automate", tag: "AI as real leverage" },
];

function Card({ h }: { h: Highlight }) {
  return (
    <div
      tabIndex={-1}
      className="card flex shrink-0 flex-col gap-1.5 px-6 py-5 w-64"
    >
      <div className="font-semibold text-text-primary tracking-tight">{h.label}</div>
      <div className="font-mono text-xs text-text-muted">{h.tag}</div>
    </div>
  );
}

export default function RollingCards() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative border-t border-border py-10 overflow-hidden">
      <span className="sr-only">
        Highlights: AI engineering, fractional engineering management, backend
        architecture, mobile SDK direction, and live products — see full
        details in the sections below.
      </span>

      <div
        aria-hidden="true"
        className={`marquee-track flex gap-4 ${paused ? "marquee-paused" : ""}`}
      >
        {[...highlights, ...highlights].map((h, i) => (
          <Card key={`${h.label}-${i}`} h={h} />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />

      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        aria-label={paused ? "Play highlights animation" : "Pause highlights animation"}
        className="absolute bottom-3 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg-elevated/80 text-text-secondary backdrop-blur-sm transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        <span aria-hidden="true" className="text-xs">
          {paused ? "▶" : "❚❚"}
        </span>
      </button>
    </section>
  );
}

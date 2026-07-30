"use client";

import { useState } from "react";

type Highlight = { label: string; tag: string; href: string; external?: boolean };

// Live projects here mirror the entries in LiveWork.tsx (same hrefs) — this
// strip is a quick-launch reel, not the only place this content lives.
const highlights: Highlight[] = [
  { label: "AIRCC Portal", tag: "bilingual grant-program portal", href: "https://aircc-portal.vercel.app", external: true },
  { label: "Flagscope", tag: "feature-flag debt scanner", href: "https://flagscope.vercel.app", external: true },
  { label: "Chan True Dream", tag: "shipped in a day", href: "https://chan-true-dream-portfolio.vercel.app", external: true },
  { label: "Let's talk", tag: "start a project →", href: "#contact" },
];

function Card({
  h,
  interactive,
}: {
  h: Highlight;
  interactive: boolean;
}) {
  const isCta = h.href === "#contact";
  const className = `card flex shrink-0 flex-col gap-1.5 px-6 py-5 w-64 transition-colors ${
    isCta ? "border-accent/40 bg-accent/5 hover:bg-accent/10" : "hover:border-border-strong"
  } ${interactive ? "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg" : ""}`;

  const content = (
    <>
      <div className={`font-semibold tracking-tight ${isCta ? "text-accent" : "text-text-primary"}`}>
        {h.label}
      </div>
      <div className="font-mono text-xs text-text-muted">{h.tag}</div>
    </>
  );

  if (!interactive) {
    return (
      <div aria-hidden="true" tabIndex={-1} className={className}>
        {content}
      </div>
    );
  }

  return (
    <a
      href={h.href}
      target={h.external ? "_blank" : undefined}
      rel={h.external ? "noopener noreferrer" : undefined}
      className={className}
    >
      {content}
    </a>
  );
}

export default function RollingCards() {
  const [paused, setPaused] = useState(false);

  return (
    <section aria-label="Live projects — view directly" className="relative border-t border-border py-10 overflow-hidden">
      <div className={`marquee-track flex gap-4 ${paused ? "marquee-paused" : ""}`}>
        {highlights.map((h) => (
          <Card key={`real-${h.label}`} h={h} interactive />
        ))}
        {highlights.map((h) => (
          <Card key={`dup-${h.label}`} h={h} interactive={false} />
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

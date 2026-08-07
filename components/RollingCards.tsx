"use client";

import { useState } from "react";

type Highlight = {
  label: string;
  tag: string;
  href: string;
  icon: string;
  iconSrc?: string;
  live?: boolean;
};

// Live projects here mirror the entries in LiveWork.tsx (same hrefs) — this
// strip is a quick-launch reel, not the only place this content lives.
// iconSrc pulls each project's own icon file directly (confirmed from its
// repo) rather than a third-party favicon lookup, which falls back to a
// generic globe for freshly-deployed .vercel.app subdomains it hasn't
// crawled yet.
const highlights: Highlight[] = [
  {
    label: "DevHub",
    tag: "self-hostable engineering dashboard",
    href: "https://devhub-landing.vercel.app",
    iconSrc: "https://devhub-landing.vercel.app/icon.svg",
    icon: "DH",
    live: true,
  },
  {
    label: "Hirescope",
    tag: "AI resume builder + ATS scoring",
    href: "https://hirescope-iota.vercel.app",
    iconSrc: "https://hirescope-iota.vercel.app/icon.svg",
    icon: "HS",
    live: true,
  },
  {
    label: "AIRCC Portal",
    tag: "bilingual grant-program portal",
    href: "https://aircc-portal.vercel.app",
    iconSrc: "https://aircc-portal.vercel.app/favicon.svg",
    icon: "AC",
    live: true,
  },
  {
    label: "Flagscope",
    tag: "feature-flag debt scanner",
    href: "https://flagscope.vercel.app",
    iconSrc: "https://flagscope.vercel.app/icon.svg",
    icon: "FS",
    live: true,
  },
  {
    label: "Claro",
    tag: "personal finance management",
    href: "https://claro-dbfullstacks-projects.vercel.app",
    iconSrc: "https://claro-dbfullstacks-projects.vercel.app/favicon.ico",
    icon: "CL",
    live: true,
  },
  {
    label: "Chan True Dream",
    tag: "shipped in a day",
    href: "https://chan-true-dream-portfolio.vercel.app",
    iconSrc: "https://chan-true-dream-portfolio.vercel.app/icon.svg",
    icon: "CD",
    live: true,
  },
  { label: "Let's talk", tag: "start a project →", href: "#contact", icon: "→" },
];

function SiteIcon({ h }: { h: Highlight }) {
  const [failed, setFailed] = useState(false);

  if (h.iconSrc && !failed) {
    return (
      <div aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-bg-elevated overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element -- tiny external icon, not worth Next's image pipeline */}
        <img
          src={h.iconSrc}
          alt=""
          width={32}
          height={32}
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-bg-elevated">
      <span className="gradient-text font-mono text-[11px] font-bold">{h.icon}</span>
    </div>
  );
}

function Card({ h, hidden }: { h: Highlight; hidden: boolean }) {
  const isCta = h.href === "#contact";
  const isExternal = h.href.startsWith("http");

  return (
    <a
      href={h.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      className={`card group flex shrink-0 flex-col gap-3 px-6 py-5 w-64 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
        isCta ? "border-accent/40 bg-accent/5 hover:bg-accent/10" : "hover:border-border-strong"
      }`}
    >
      <div className="flex items-center justify-between">
        <SiteIcon h={h} />
        {h.live && (
          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-green-400">
            <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 pulse-dot" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
            </span>
            Live
          </span>
        )}
      </div>

      <div>
        <div className={`font-semibold tracking-tight ${isCta ? "text-accent" : "text-text-primary"}`}>
          {h.label}
        </div>
        <div className="font-mono text-xs text-text-muted mt-1">{h.tag}</div>
      </div>
    </a>
  );
}

export default function RollingCards() {
  const [paused, setPaused] = useState(false);

  return (
    <section aria-label="Live projects — view directly" className="relative border-t border-border py-10 overflow-hidden">
      <div className={`marquee-track flex gap-4 ${paused ? "marquee-paused" : ""}`}>
        {highlights.map((h) => (
          <Card key={`real-${h.label}`} h={h} hidden={false} />
        ))}
        {highlights.map((h) => (
          <Card key={`dup-${h.label}`} h={h} hidden />
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

"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

type Project = {
  name: string;
  tagline: string;
  business: string;
  href: string;
  repoHref?: string;
  image: string;
  stack: string[];
  status: string;
};

const projects: Project[] = [
  {
    name: "DevHub",
    tagline:
      "Self-hostable engineering dashboard — repos, PRs, and sprints unified, with AI grounded in real delivery data.",
    business:
      "The biggest thing in the studio: a self-hostable, white-label alternative to Backstage/Cortex/Faros — same category of control, without the six-month build or the six-figure SaaS contract. The positioning site below is live; the full product is the next build.",
    href: "https://devhub-landing.vercel.app",
    image: "/work/devhub.png",
    stack: ["Next.js 16", "GitHub + Azure DevOps", "AI-native"],
    status: "Landing live",
  },
  {
    name: "Hirescope",
    tagline:
      "AI resume builder with real ATS scoring, a drag-and-drop section builder, application tracking, and personal insights.",
    business:
      "Resume.io and Zety sell templates; Teal scores against a job description but stops there; LazyApply and Simplify auto-apply by scripting LinkedIn/Indeed, which sits in a ToS grey zone. This closes the loop the other way: Claude-powered ATS scoring (matched/missing keywords, phrasing suggestions) backed by a free local keyword scorer for instant feedback while editing, a drag-and-drop resume builder that renders the same section order to PDF and DOCX, real Greenhouse/Lever job search via their public APIs, and a tracker tied to which resume version was actually used. LinkedIn/Indeed stay deep-link search only — no bot-driven auto-apply — a deliberate line, not a missing feature.",
    href: "https://hirescope-iota.vercel.app",
    image: "/work/hirescope.png",
    stack: ["Next.js 16", "Supabase", "Stripe", "Claude API"],
    status: "Frontend live",
  },
  {
    name: "AIRCC Portal",
    tagline:
      "Bilingual (Hebrew/English) portal rebuild for a subsidized-GPU research grant program.",
    business:
      "Replaced a static, English-only, admin-less site with a fully admin-managed platform: every page is editable with full version history and one-click rollback, a GPU cost calculator quotes real subsidized pricing before applicants commit, and a communication center handles announcements and digests — the kind of self-serve content and comms layer that turns a one-off site into something a non-technical program team can actually run.",
    href: "https://aircc-portal.vercel.app",
    repoHref: "https://github.com/dbfullstack/aircc-portal",
    image: "/work/aircc-portal.png",
    stack: ["React", "Express", "PostgreSQL", "Tailwind", "i18next"],
    status: "Frontend live",
  },
  {
    name: "Flagscope",
    tagline: "Multi-provider feature-flag debt scanner with one-click cleanup PRs.",
    business:
      "Connects LaunchDarkly, Flagsmith, Statsig, Unleash, GrowthBook, and ConfigCat; finds stale and ownerless flags before they rot into incidents, and opens the cleanup PR automatically instead of leaving it as a backlog ticket nobody picks up.",
    href: "https://flagscope.vercel.app",
    image: "/work/flagscope.png",
    stack: ["Next.js", "Provider APIs", "GitHub App"],
    status: "Live · Waitlist",
  },
  {
    name: "Claro",
    tagline:
      "Personal finance management app with AI-powered insights, budget tracking, and financial goal management.",
    business:
      "Full-stack budgeting app: transaction tracking, credit-card and goal management, and AI-generated spending insights, with strong account security (rate limiting, entropy-scored passwords, duplicate-email protection). React frontend on Vercel, Node/Express API on Railway.",
    href: "https://claro-dbfullstacks-projects.vercel.app",
    repoHref: "https://github.com/dbfullstack/claro",
    image: "/work/claro.png",
    stack: ["React", "Node.js", "PostgreSQL", "Supabase", "Railway"],
    status: "Live",
  },
  {
    name: "Chan True Dream",
    tagline: "Bilingual crochet-guide storefront with a full admin CMS, shipped in a day.",
    business:
      "A solo crochet instructor needed a real storefront for her free and paid pattern guides — bilingual (Hebrew/English, full RTL) — with no engineer on call to run it. Built a Postgres-backed CMS with full edit history and one-click revert: she updates text, images, guide links, and contact info herself, from a browser. Zero monthly cost on Vercel + Neon + Blob free tiers.",
    href: "https://chan-true-dream-portfolio.vercel.app",
    repoHref: "https://github.com/dbfullstack/chan-true-dream-portfolio",
    image: "/work/chan-true-dream.png",
    stack: ["Next.js 16", "PostgreSQL", "RTL i18n", "Admin CMS"],
    status: "Live",
  },
];

function Shot({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-surface">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-surface via-surface-hover to-surface bg-[length:200%_200%]" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className={`object-cover object-top transition-all duration-700 ease-out group-hover:scale-[1.03] ${
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-md"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

function ProjectCard({ p, featured, delayMs }: { p: Project; featured?: boolean; delayMs?: number }) {
  return (
    <Reveal delayMs={delayMs} className={featured ? "md:col-span-2" : ""}>
      <a
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group card overflow-hidden p-0 block"
      >
      <div className="p-4 pb-0">
        <Shot src={p.image} alt={`${p.name} live screenshot`} />
      </div>
      <div className="p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wider ${
              p.status === "Live · Waitlist"
                ? "border-green-400/40 bg-green-400/10 text-green-400"
                : "border-accent-2/40 bg-accent-2/10 text-accent-2"
            }`}
          >
            <span
              className={`pulse-dot h-1.5 w-1.5 rounded-full ${
                p.status === "Live · Waitlist" ? "bg-green-400" : "bg-accent-2"
              }`}
            />
            {p.status}
          </span>
          {p.stack.map((s) => (
            <span
              key={s}
              className="rounded border border-border bg-bg px-2 py-1 font-mono text-[10.5px] text-text-secondary"
            >
              {s}
            </span>
          ))}
        </div>
        <h3 className="mb-1.5 flex items-center gap-2 text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
          {p.name}
          <span aria-hidden className="text-accent transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </h3>
        <p className="mb-3 text-sm leading-snug text-text-primary">{p.tagline}</p>
        <p className="text-sm leading-relaxed text-text-secondary">{p.business}</p>
        {p.repoHref && (
          <span
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(p.repoHref, "_blank", "noopener,noreferrer");
            }}
            className="mt-4 inline-flex cursor-pointer items-center gap-1.5 font-mono text-xs text-text-muted transition-colors hover:text-accent"
          >
            View source →
          </span>
        )}
      </div>
      </a>
    </Reveal>
  );
}

export default function LiveWork() {
  return (
    <section id="live-work" className="relative border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-3 font-mono text-xs tracking-wider text-accent">
              03 / LIVE WORK
            </div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Recent builds, not just pitches.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-text-secondary">
            Click through — these are running deployments, not mockups.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} p={p} featured={i === 0} delayMs={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

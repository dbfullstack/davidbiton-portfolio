"use client";

import { useId, useState } from "react";
import TerminalMock from "./mockups/TerminalMock";
import PlatformMock from "./mockups/PlatformMock";
import LeadershipMock from "./mockups/LeadershipMock";
import MobileMock from "./mockups/MobileMock";
import PipelineMock from "./mockups/PipelineMock";
import Reveal from "./Reveal";

type Capability = {
  title: string;
  tag: string;
  pitch: string;
  what: string;
  outcome: string;
  stack: string[];
  Mock: () => React.ReactElement;
};

const featured = {
  title: "AI Engineering — adoption, automation, and serious tooling",
  tag: "AI integration · platform engineering",
  pitch:
    "Teams adopting Claude / LLMs land in one of two ditches: \"AI as gimmick\" (chat widget, no leverage) or \"AI as risk\" (autonomous agents nobody trusts). We help teams skip both.",
  what:
    "We design AI workflows that actually fit your codebase — custom Claude Code workspaces, automated PR review with rule-aware prompts, MCP integrations, agent design for specific repeatable tasks. Workshop-paced, shipped working, owned by your team afterward.",
  outcome:
    "Senior engineers stop reviewing style. Reviews get faster. Onboarding gets shorter. AI becomes a teammate, not a demo.",
  stack: [
    "Claude API",
    "Claude Code",
    "MCP",
    "Prompt engineering",
    "Agent design",
    "TypeScript",
  ],
};

const capabilities: Capability[] = [
  {
    title: "Backend & platform engineering",
    tag: "Architecture · scaling",
    pitch:
      "When the system is harder to change than it should be, or you're afraid to touch the orchestration layer.",
    what:
      "Microservices and event-driven design. Internal developer platforms. Multi-tenant SaaS plumbing. The unglamorous stuff that decides whether next year is smooth or painful.",
    outcome:
      "Architecture that compounds instead of corroding. Teams move faster without burning the place down.",
    stack: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "Kafka", "Redis"],
    Mock: PlatformMock,
  },
  {
    title: "Engineering leadership",
    tag: "Fractional EM · advisory",
    pitch:
      "For teams scaling from 5→25 engineers, restructuring around squads, or stuck with a leader-shaped hole.",
    what:
      "Hands-on tech leadership without the politics. Setting direction, removing blockers, hiring well, protecting focus. Available as fractional EM, technical advisor, or short-term parachute.",
    outcome:
      "Clear priorities, fewer process meetings, code that ships predictably. Engineers stay; founders sleep.",
    stack: ["Coaching", "Hiring", "Technical strategy", "Org design"],
    Mock: LeadershipMock,
  },
  {
    title: "Mobile SDK strategy",
    tag: "iOS · Android · cross-platform",
    pitch:
      "Most mobile SDK problems aren't mobile problems — they're release, parity, and distribution problems.",
    what:
      "API parity across iOS / Android / Flutter / React Native. Unified release pipelines (CocoaPods, Gradle, pub.dev, npm). Version-matrix discipline so customer integrations stop drifting.",
    outcome:
      "One SDK story across four platforms. Releases that go out predictably instead of being events.",
    stack: ["Swift", "Kotlin", "Flutter", "React Native"],
    Mock: MobileMock,
  },
  {
    title: "DevOps & reliability",
    tag: "CI/CD · observability",
    pitch:
      "When deploys are scary, dashboards lie, or oncall is a punishment.",
    what:
      "Pipelines you'd want inherited. Observability that tells you what's actually wrong. K8s and ArgoCD without the YAML tears. Cost-aware infra decisions.",
    outcome:
      "Confidence to deploy on a Friday. Pages that mean something. Cloud bills you can defend.",
    stack: ["Azure", "Kubernetes", "ArgoCD", "GitHub Actions", "Terraform"],
    Mock: PipelineMock,
  },
];

function FeaturedCard() {
  return (
    <article className="relative gradient-border p-px rounded-2xl mb-8">
      <div className="bg-bg-elevated rounded-2xl p-8 md:p-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent tracking-wider uppercase border border-accent/20">
                Headline capability
              </span>
              <span className="font-mono text-xs text-text-muted tracking-wider uppercase">
                {featured.tag}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 leading-tight">
              {featured.title}
            </h3>
            <div className="space-y-5 text-sm text-text-secondary leading-relaxed">
              <div>
                <div className="text-text-muted font-mono text-[11px] uppercase tracking-wider mb-1.5">
                  Why teams hire us here
                </div>
                <p>{featured.pitch}</p>
              </div>
              <div>
                <div className="text-text-muted font-mono text-[11px] uppercase tracking-wider mb-1.5">
                  What we actually do
                </div>
                <p>{featured.what}</p>
              </div>
              <div>
                <div className="text-text-muted font-mono text-[11px] uppercase tracking-wider mb-1.5">
                  Outcome
                </div>
                <p>{featured.outcome}</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border flex flex-wrap gap-2">
              {featured.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs px-2.5 py-1 bg-bg border border-border rounded text-text-secondary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div aria-hidden="true" className="lg:col-span-2">
            <TerminalMock />
          </div>
        </div>
      </div>
    </article>
  );
}

function CapabilityTabs() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const c = capabilities[active];
  const { Mock } = c;

  return (
    <div>
      <div role="tablist" aria-label="Capabilities" className="flex flex-wrap gap-2 mb-6">
        {capabilities.map((cap, i) => {
          const selected = i === active;
          return (
            <button
              key={cap.title}
              type="button"
              role="tab"
              id={`${baseId}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${i}`}
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-2 font-mono text-xs tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                selected
                  ? "border-accent/40 bg-accent/10 text-accent"
                  : "border-border text-text-secondary hover:border-border-strong hover:text-text-primary"
              }`}
            >
              {cap.title}
            </button>
          );
        })}
      </div>

      <article
        id={`${baseId}-panel-${active}`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        className="card p-6 md:p-8"
      >
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3">
            <span className="font-mono text-xs text-accent tracking-wider uppercase">
              {c.tag}
            </span>
            <h3 className="text-2xl font-semibold tracking-tight my-4 leading-snug">
              {c.title}
            </h3>
            <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <p>
                <span className="text-text-muted font-mono text-[11px] uppercase tracking-wider block mb-1">
                  Why teams hire us
                </span>
                {c.pitch}
              </p>
              <p>
                <span className="text-text-muted font-mono text-[11px] uppercase tracking-wider block mb-1">
                  What we do
                </span>
                {c.what}
              </p>
              <p>
                <span className="text-text-muted font-mono text-[11px] uppercase tracking-wider block mb-1">
                  Outcome
                </span>
                {c.outcome}
              </p>
            </div>
            <div className="mt-5 pt-5 border-t border-border flex flex-wrap gap-2">
              {c.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs px-2 py-1 bg-bg border border-border rounded text-text-secondary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div aria-hidden="true" className="md:col-span-2">
            <Mock />
          </div>
        </div>
      </article>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section id="work" aria-labelledby="work-heading" className="relative border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <Reveal className="mb-12">
          <div className="font-mono text-xs text-accent mb-3 tracking-wider">
            02 / WHAT WE DO
          </div>
          <h2 id="work-heading" className="text-3xl md:text-4xl font-semibold tracking-tight">
            How we help.
          </h2>
        </Reveal>

        <Reveal>
          <FeaturedCard />
        </Reveal>

        <Reveal>
          <CapabilityTabs />
        </Reveal>
      </div>
    </section>
  );
}

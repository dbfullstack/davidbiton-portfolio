import TerminalMock from "./mockups/TerminalMock";
import PlatformMock from "./mockups/PlatformMock";
import LeadershipMock from "./mockups/LeadershipMock";
import MobileMock from "./mockups/MobileMock";
import PipelineMock from "./mockups/PipelineMock";

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
          <div className="lg:col-span-2">
            <TerminalMock />
          </div>
        </div>
      </div>
    </article>
  );
}

function Card({ c }: { c: Capability }) {
  const { Mock } = c;
  return (
    <article className="card p-6 group">
      <div className="mb-4">
        <span className="font-mono text-xs text-accent tracking-wider uppercase">
          {c.tag}
        </span>
      </div>
      <h3 className="text-xl font-semibold tracking-tight mb-4 leading-snug group-hover:text-accent transition-colors">
        {c.title}
      </h3>
      <div className="mb-5">
        <Mock />
      </div>
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
    </article>
  );
}

export default function CaseStudies() {
  return (
    <section id="work" className="relative border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="mb-12">
          <div className="font-mono text-xs text-accent mb-3 tracking-wider">
            02 / WHAT WE DO
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            How we help.
          </h2>
        </div>

        <FeaturedCard />

        <div className="grid md:grid-cols-2 gap-5">
          {capabilities.map((c) => (
            <Card key={c.title} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

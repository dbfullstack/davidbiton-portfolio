type CaseStudy = {
  title: string;
  tag: string;
  problem: string;
  approach: string;
  impact: string;
  stack: string[];
};

const featured: CaseStudy = {
  title: "AI Engineering Platform — Claude Workspace + Automated PR Review",
  tag: "AI integration · platform engineering",
  problem:
    "An engineering org of 100+ developers across 120+ repositories had no shared way to use AI in their workflow. Code review quality varied wildly. Onboarding was slow. Senior engineers were burning hours on stylistic feedback in PRs.",
  approach:
    "Designed and shipped a shared Claude Code workspace — domain-aware agents, custom skills, slash commands, and rule sets that turn AI into a real teammate. Layered an AI-driven PR review pipeline on top, deployed via a single shared Azure Pipelines template, with a versioned prompt system (20+ rules) tuned to the codebase's failure modes.",
  impact:
    "Live across 120+ repositories. Senior reviewers now focus on architecture and risk, not style. Catches the systemic issues (config drift, broken syncs, security gotchas) that historically slipped through and caused incidents.",
  stack: [
    "Claude API",
    "Azure AI Foundry",
    "Azure Pipelines",
    "Prompt engineering",
    "Agent design",
    "TypeScript",
  ],
};

const cases: CaseStudy[] = [
  {
    title: "devhub — internal R&D platform",
    tag: "Full-stack · platform",
    problem:
      "Engineering leadership had no single source of truth for feature flag state, deployment status, or service health across 100+ repos.",
    approach:
      "Built a full-stack platform with role-based access, a live Flagsmith analytics mirror, deployment automation, service-health views, and a notification system tying user activity into one feed.",
    impact:
      "Adopted org-wide for daily ops. Reduced cross-team status meetings and made rollout state observable for the first time.",
    stack: ["React", "TypeScript", "Tailwind", "Node.js", "PostgreSQL", "Vite"],
  },
  {
    title: "Enterprise identity-verification platform",
    tag: "Microservices · compliance",
    problem:
      "Five distinct identity flows (PII, KYB, AML, Digital ID, Multi-Vendor) needed to be unified, multi-tenant, and GDPR-compliant — integrated with dozens of third-party verification vendors.",
    approach:
      "Architected five independent Node.js / TypeScript microservices behind a unified orchestration layer, with per-organization feature toggles, audit-grade logging, and a shared artifact strategy to keep cross-cutting concerns DRY.",
    impact:
      "Powers identity verification at enterprise scale. Per-org feature toggling enables staged rollouts without redeploys; vendor swaps are config, not code.",
    stack: ["TypeScript", "NestJS", "PostgreSQL", "Kafka", "Camunda 8", "Azure"],
  },
  {
    title: "Cross-platform mobile SDK suite",
    tag: "Mobile · architecture",
    problem:
      "22 SDK repositories across iOS, Android, Flutter, and React Native were drifting in API surface, release cadence, and behavior.",
    approach:
      "Established API parity rules, unified release pipelines (CocoaPods, Gradle, pub.dev, npm), and a shared distribution model — with sample apps for every platform pinned to the same version matrix.",
    impact:
      "Customer integrations now work identically across platforms; releases are predictable and automated.",
    stack: ["Swift", "Kotlin", "Flutter", "React Native", "Gradle", "CocoaPods"],
  },
  {
    title: "Feature toggle framework",
    tag: "Platform · rollout safety",
    problem:
      "Significant features were shipping without staged rollout. Every release was high-risk; rollback meant a redeploy.",
    approach:
      "Built a per-organization Flagsmith integration as a shared TypeScript artifact, with safe defaults on outage, standardized naming conventions, and structured logs for support visibility.",
    impact:
      "Adopted across every identity microservice. Rollouts are now per-customer and reversible without code changes.",
    stack: ["Flagsmith", "TypeScript", "NestJS", "Azure Artifacts"],
  },
  {
    title: "Workflow orchestration on Camunda 8",
    tag: "Event-driven · BPMN",
    problem:
      "Verification flows hardcoded across services made vendor changes, retries, and SLA tracking nearly impossible.",
    approach:
      "Migrated orchestration to Camunda 8 BPMN with Kafka-backed workers, versioned deployments, and live process-state monitoring. Tied into an internal collector for end-to-end visibility.",
    impact:
      "Workflow changes ship without service redeploys; vendor swaps are configuration, not code.",
    stack: ["Camunda 8", "BPMN", "Kafka", "TypeScript", "Node.js"],
  },
];

function FeaturedCard({ c }: { c: CaseStudy }) {
  return (
    <article className="relative gradient-border p-px rounded-2xl mb-8">
      <div className="bg-bg-elevated rounded-2xl p-8 md:p-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent tracking-wider uppercase border border-accent/20">
            Featured
          </span>
          <span className="font-mono text-xs text-text-muted tracking-wider uppercase">
            {c.tag}
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 leading-tight">
          {c.title}
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-text-secondary leading-relaxed">
          <div>
            <div className="text-text-muted font-mono text-[11px] uppercase tracking-wider mb-2">
              Problem
            </div>
            <p>{c.problem}</p>
          </div>
          <div>
            <div className="text-text-muted font-mono text-[11px] uppercase tracking-wider mb-2">
              Approach
            </div>
            <p>{c.approach}</p>
          </div>
          <div>
            <div className="text-text-muted font-mono text-[11px] uppercase tracking-wider mb-2">
              Impact
            </div>
            <p>{c.impact}</p>
          </div>
        </div>
        <div className="mt-7 pt-6 border-t border-border flex flex-wrap gap-2">
          {c.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-xs px-2.5 py-1 bg-bg border border-border rounded text-text-secondary"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function Card({ c }: { c: CaseStudy }) {
  return (
    <article className="card p-6 group">
      <div className="mb-4">
        <span className="font-mono text-xs text-accent tracking-wider uppercase">
          {c.tag}
        </span>
      </div>
      <h3 className="text-xl font-semibold tracking-tight mb-5 leading-snug group-hover:text-accent transition-colors">
        {c.title}
      </h3>
      <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
        <p>
          <span className="text-text-muted font-mono text-[11px] uppercase tracking-wider block mb-1">
            Problem
          </span>
          {c.problem}
        </p>
        <p>
          <span className="text-text-muted font-mono text-[11px] uppercase tracking-wider block mb-1">
            Approach
          </span>
          {c.approach}
        </p>
        <p>
          <span className="text-text-muted font-mono text-[11px] uppercase tracking-wider block mb-1">
            Impact
          </span>
          {c.impact}
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
            02 / SELECTED WORK
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Things I've shipped.
          </h2>
        </div>

        <FeaturedCard c={featured} />

        <div className="grid md:grid-cols-2 gap-5">
          {cases.map((c) => (
            <Card key={c.title} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

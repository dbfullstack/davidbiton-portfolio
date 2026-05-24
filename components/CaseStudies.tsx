type CaseStudy = {
  title: string;
  tag: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
};

const cases: CaseStudy[] = [
  {
    title: "devhub — internal R&D dashboard",
    tag: "Full-stack platform",
    problem:
      "R&D leadership had no single source of truth for feature flag state, deployments, or service health across 100+ repos.",
    solution:
      "Built a full-stack dashboard with role-based access, Flagsmith analytics mirror, deployment automation, and live service-health views.",
    impact:
      "Adopted org-wide for daily ops; reduced cross-team status meetings and made rollout state observable for the first time.",
    stack: ["React", "TypeScript", "Tailwind", "Node.js", "PostgreSQL"],
  },
  {
    title: "Enterprise identity-verification platform",
    tag: "Microservices architecture",
    problem:
      "Five distinct identity flows (PII, KYB, AML, Digital ID, Multi-Vendor) needed to be unified, multi-tenant, and compliant with GDPR.",
    solution:
      "Designed and led five independent Node.js / TypeScript microservices integrating with dozens of third-party verification vendors, behind a unified orchestration layer.",
    impact:
      "Processes millions of verifications; per-org feature toggling enables staged rollouts without redeploys.",
    stack: ["TypeScript", "NestJS", "PostgreSQL", "Kafka", "Azure", "Camunda 8"],
  },
  {
    title: "AI PR Review pipeline",
    tag: "AI integration • DevOps",
    problem:
      "Manual PR review across 20+ repos was a bottleneck; review quality was inconsistent and senior time was being burned on style-level feedback.",
    solution:
      "Built a Claude-Sonnet-powered PR review pipeline via Azure AI Foundry with a 20-rule, repo-aware prompt system, deployed as a shared Azure Pipelines template.",
    impact:
      "Live on 20+ repos; senior reviewers now focus on architecture and risk instead of style. Catches the failure modes that historically caused production incidents.",
    stack: ["Claude API", "Azure AI Foundry", "Azure Pipelines", "TypeScript"],
  },
  {
    title: "Cross-platform mobile SDK suite",
    tag: "Mobile architecture",
    problem:
      "22 SDK repositories across iOS, Android, Flutter, and React Native were drifting in API surface, release cadence, and behavior.",
    solution:
      "Established API parity rules, unified release pipelines (CocoaPods, Gradle, pub.dev, npm), and a shared distribution model.",
    impact:
      "Customer integrations now work identically across platforms; releases are predictable and automated.",
    stack: ["Swift", "Kotlin", "Flutter", "React Native", "Gradle", "CocoaPods"],
  },
  {
    title: "Feature toggle framework",
    tag: "Platform engineering",
    problem:
      "Significant features were shipping without staged rollout — every release was high-risk and rollback meant a redeploy.",
    solution:
      "Built a per-organization Flagsmith integration as a shared artifact (@au10tix/feature-toggle), with safe defaults on outage and standardized naming conventions.",
    impact:
      "Adopted across all identity microservices. Rollouts are now per-customer and reversible without code changes.",
    stack: ["Flagsmith", "TypeScript", "NestJS", "Azure Artifacts"],
  },
  {
    title: "Workflow orchestration (Camunda 8)",
    tag: "Event-driven systems",
    problem:
      "Verification flows hardcoded across services made vendor changes, retries, and SLA tracking nearly impossible.",
    solution:
      "Migrated orchestration to Camunda 8 BPMN with Kafka-backed workers, versioned deployments, and live process-state monitoring.",
    impact:
      "Workflow changes ship without service redeploys; vendor swaps are config, not code.",
    stack: ["Camunda 8", "BPMN", "Kafka", "TypeScript", "Node.js"],
  },
];

function Card({ c }: { c: CaseStudy }) {
  return (
    <article className="group bg-surface hover:bg-surface-hover border border-border rounded-xl p-6 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-xs text-accent tracking-wider uppercase">
          {c.tag}
        </span>
      </div>
      <h3 className="text-xl font-semibold tracking-tight mb-4 group-hover:text-accent transition-colors">
        {c.title}
      </h3>
      <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
        <p>
          <span className="text-text-muted font-mono text-xs uppercase tracking-wider block mb-1">
            Problem
          </span>
          {c.problem}
        </p>
        <p>
          <span className="text-text-muted font-mono text-xs uppercase tracking-wider block mb-1">
            Approach
          </span>
          {c.solution}
        </p>
        <p>
          <span className="text-text-muted font-mono text-xs uppercase tracking-wider block mb-1">
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
    <section id="work" className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="mb-12">
          <div className="font-mono text-xs text-accent mb-3 tracking-wider">
            02 / SELECTED WORK
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Things I've shipped.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {cases.map((c) => (
            <Card key={c.title} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

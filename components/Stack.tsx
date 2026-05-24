type StackGroup = {
  title: string;
  blurb: string;
  items: string[];
};

const groups: StackGroup[] = [
  {
    title: "AI & Automation",
    blurb: "Building with LLMs as a first-class engineering primitive.",
    items: [
      "Claude API",
      "Azure AI Foundry",
      "Prompt engineering",
      "Agent design",
      "Slash commands",
      "Skills · Hooks · Subagents",
    ],
  },
  {
    title: "Backend",
    blurb: "Where most of the work happens.",
    items: [
      "Node.js",
      "TypeScript",
      "NestJS",
      "Express",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Elasticsearch",
    ],
  },
  {
    title: "Cloud & DevOps",
    blurb: "Pipelines, infra, and the stuff that ships code.",
    items: [
      "Azure",
      "Kubernetes",
      "ArgoCD",
      "Docker",
      "Azure Pipelines",
      "GitHub Actions",
      "Terraform",
    ],
  },
  {
    title: "Frontend",
    blurb: "Modern, fast, accessible.",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Vite", "Recharts"],
  },
  {
    title: "Mobile",
    blurb: "Cross-platform parity, automated releases.",
    items: [
      "Swift (iOS)",
      "Kotlin (Android)",
      "Flutter",
      "React Native",
      "CocoaPods",
      "Gradle",
    ],
  },
  {
    title: "Domain",
    blurb: "Where compliance and engineering meet.",
    items: [
      "Identity (KYC · KYB · AML)",
      "PII handling",
      "GDPR",
      "Camunda 8 · BPMN",
      "Event-driven systems",
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="relative border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="mb-14">
          <div className="font-mono text-xs text-accent mb-3 tracking-wider">
            03 / STACK
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            What I build with.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-mono text-sm text-text-primary tracking-wide">
                  {g.title}
                </h3>
              </div>
              <p className="text-sm text-text-muted mb-4">{g.blurb}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 bg-surface border border-border rounded-md text-text-secondary hover:border-border-strong hover:text-text-primary transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

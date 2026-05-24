type StackGroup = {
  title: string;
  items: string[];
};

const groups: StackGroup[] = [
  {
    title: "Backend",
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
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Vite", "Recharts"],
  },
  {
    title: "Mobile",
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
    title: "AI & Automation",
    items: [
      "Claude API",
      "Azure AI Foundry",
      "Prompt engineering",
      "Agentic workflows",
    ],
  },
  {
    title: "Domain",
    items: [
      "Identity (KYC / KYB / AML)",
      "PII handling",
      "GDPR compliance",
      "Camunda 8 / BPMN",
      "Event-driven systems",
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="mb-12">
          <div className="font-mono text-xs text-accent mb-3 tracking-wider">
            03 / STACK
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            What I build with.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="font-mono text-sm text-text-primary mb-4 tracking-wide">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 bg-surface border border-border rounded-md text-text-secondary"
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

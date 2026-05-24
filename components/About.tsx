const pillars = [
  {
    icon: "◆",
    title: "Lead",
    body: "I run engineering teams that ship — setting technical direction, removing blockers, hiring well, and protecting focus. I've grown teams from a handful of engineers into multi-squad orgs without losing velocity.",
  },
  {
    icon: "▲",
    title: "Automate",
    body: "I build the AI tooling that makes engineering faster — shared Claude Code workspaces, automated PR review pipelines, custom skills and agents. Deployed across 120+ repositories.",
  },
  {
    icon: "●",
    title: "Architect",
    body: "Still hands-on where it matters most: backend microservices, event-driven systems, mobile SDK strategy, developer platforms. The kind of work that decides whether the next year goes smoothly or painfully.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="font-mono text-xs text-accent mb-3 tracking-wider">
              01 / ROLE
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              What I do.
            </h2>
          </div>
          <div className="md:col-span-2 space-y-5 text-text-secondary leading-relaxed text-lg">
            <p>
              I'm a Senior Engineering Manager at a leading{" "}
              <span className="text-text-primary">identity-verification SaaS</span>{" "}
              — leading the team behind a five-service platform that handles
              KYC, KYB, AML and digital ID at enterprise scale, fully GDPR-aligned.
            </p>
            <p>
              In parallel, I've been pioneering{" "}
              <span className="text-text-primary">
                AI-augmented engineering
              </span>{" "}
              across the org — designing shared Claude Code workspaces,
              automated AI code-review pipelines, and an internal R&D platform
              that gives engineering leadership real visibility into 100+
              repositories.
            </p>
            <p>
              I take on freelance work where the problem is{" "}
              <span className="text-text-primary">load-bearing</span> — AI
              strategy, engineering leadership, backend architecture, mobile SDK
              direction, or unblocking a team that's stuck. I don't do
              logo-only consulting.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <div key={p.title} className="card p-7">
              <div className="text-2xl mb-4 text-accent">{p.icon}</div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">
                {p.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

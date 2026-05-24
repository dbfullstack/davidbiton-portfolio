const pillars = [
  {
    icon: "◆",
    title: "Lead",
    body: "I run engineering teams that ship — setting technical direction, removing blockers, hiring well, and protecting focus. Available as fractional EM, technical advisor, or short-term parachute.",
  },
  {
    icon: "▲",
    title: "Automate",
    body: "I help teams adopt AI as real engineering leverage — custom Claude Code workspaces, automated PR review pipelines, agent design. Workshop-paced, owned by your team afterward.",
  },
  {
    icon: "●",
    title: "Architect",
    body: "Still hands-on where it matters: backend microservices, event-driven systems, mobile SDK strategy, developer platforms. The unglamorous work that decides whether next year goes smoothly or painfully.",
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
              I'm a Senior Engineering Manager in the{" "}
              <span className="text-text-primary">identity-verification</span>{" "}
              space — running teams that ship production systems in regulated,
              high-trust environments where downtime and bad data both cost
              real money.
            </p>
            <p>
              In parallel, I've been working on{" "}
              <span className="text-text-primary">
                AI-augmented engineering
              </span>{" "}
              — designing AI workflows, custom Claude Code skills and agents,
              and the tooling that turns "we should try AI" into actual
              shipped leverage for whole engineering orgs.
            </p>
            <p>
              I take on freelance work where the problem is{" "}
              <span className="text-text-primary">load-bearing</span> — AI
              strategy, engineering leadership, backend architecture, mobile
              SDK direction, or unblocking a team that's stuck. I don't do
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

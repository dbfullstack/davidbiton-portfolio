const pillars = [
  {
    icon: "◆",
    title: "Lead",
    body: "We run engineering teams that ship — setting technical direction, removing blockers, hiring well, and protecting focus. Available as fractional EM, technical advisor, or short-term parachute.",
  },
  {
    icon: "▲",
    title: "Automate",
    body: "We help teams adopt AI as real engineering leverage — custom Claude Code workspaces, automated PR review pipelines, agent design. Workshop-paced, owned by your team afterward.",
  },
  {
    icon: "●",
    title: "Architect",
    body: "Hands-on where it matters: backend microservices, event-driven systems, mobile SDK strategy, developer platforms. The unglamorous work that decides whether next year goes smoothly or painfully.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="font-mono text-xs text-accent mb-3 tracking-wider">
              01 / STUDIO
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              What we do.
            </h2>
          </div>
          <div className="md:col-span-2 space-y-5 text-text-secondary leading-relaxed text-lg">
            <p>
              DB Studio is a{" "}
              <span className="text-text-primary">small software studio</span>{" "}
              founded by David Biton, a senior engineering manager with ten
              years building production systems in high-trust, regulated
              environments where downtime and bad data both cost real money.
            </p>
            <p>
              We work at the intersection of{" "}
              <span className="text-text-primary">AI</span>,{" "}
              <span className="text-text-primary">backend platforms</span>, and{" "}
              <span className="text-text-primary">engineering leadership</span>{" "}
              — designing AI workflows that actually fit your codebase,
              architecting systems that compound instead of corrode, and
              helping teams ship faster without burning out.
            </p>
            <p>
              We take on{" "}
              <span className="text-text-primary">load-bearing</span> work — AI
              strategy, fractional engineering management, backend
              architecture, mobile SDK direction. We don't do logo-only
              consulting, and we don't take on projects we can't move.
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

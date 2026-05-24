export default function About() {
  const stats = [
    { value: "10+", label: "Years engineering" },
    { value: "22", label: "Mobile SDK repos owned" },
    { value: "20+", label: "Repos with AI PR review live" },
    { value: "5", label: "Identity microservices in prod" },
  ];

  return (
    <section id="about" className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="font-mono text-xs text-accent mb-3 tracking-wider">
              01 / ABOUT
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              What I do.
            </h2>
          </div>
          <div className="md:col-span-2 space-y-5 text-text-secondary leading-relaxed">
            <p>
              I lead engineering for an enterprise identity-verification
              platform — five Node.js / TypeScript microservices, multi-tenant,
              GDPR-compliant, integrated with dozens of third-party identity
              vendors.
            </p>
            <p>
              Alongside that, I own the architecture of a 22-repo mobile SDK
              suite spanning iOS, Android, Flutter, and React Native, and build
              internal developer tools — including an AI-driven PR review
              pipeline deployed across 20+ repositories.
            </p>
            <p>
              I take on engagements where the work is{" "}
              <span className="text-text-primary">load-bearing</span>: backend
              architecture, AI integration, DevOps automation, or unblocking a
              team that's stuck. I don't do logo-only consulting.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface p-6">
              <div className="font-mono text-2xl md:text-3xl font-semibold text-accent">
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-text-muted mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

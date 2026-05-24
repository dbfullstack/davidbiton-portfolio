export default function Contact() {
  const channels = [
    {
      label: "Email",
      value: "david.biton@au10tix.com",
      href: "mailto:david.biton@au10tix.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/davidbiton",
      href: "https://www.linkedin.com/in/davidbiton/",
    },
    {
      label: "GitHub",
      value: "github.com/dbfullstack",
      href: "https://github.com/dbfullstack",
    },
  ];

  return (
    <section id="contact" className="relative border-t border-border overflow-hidden">
      <div
        className="glow-blob"
        style={{
          width: 500,
          height: 500,
          background: "var(--color-accent-2)",
          bottom: -180,
          right: -100,
          opacity: 0.25,
        }}
      />
      <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-14">
          <div className="font-mono text-xs text-accent mb-3 tracking-wider">
            04 / CONTACT
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5">
            Have something{" "}
            <span className="gradient-text">load-bearing</span> to build?
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            I take on a small number of engagements at a time. If your project
            needs senior engineering — backend, AI integration, or
            cross-platform mobile — let's talk.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-px bg-border rounded-xl overflow-hidden">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={
                c.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="flex items-center justify-between bg-surface hover:bg-surface-hover px-6 py-5 transition-colors group"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                {c.label}
              </span>
              <span className="text-text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                {c.value}
                <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                  →
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section id="contact" className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="font-mono text-xs text-accent mb-3 tracking-wider">
              04 / CONTACT
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Let's talk.
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-text-secondary leading-relaxed mb-8">
              I'm selective about engagements — I take on work where my
              experience moves the needle, and where I can ship something real.
              If that sounds like your project, get in touch.
            </p>
            <div className="space-y-px bg-border rounded-xl overflow-hidden">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    c.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="flex items-center justify-between bg-surface hover:bg-surface-hover px-5 py-4 transition-colors group"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                    {c.label}
                  </span>
                  <span className="text-text-primary group-hover:text-accent transition-colors">
                    {c.value}
                    <span className="ml-2 opacity-50 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

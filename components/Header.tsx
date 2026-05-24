export default function Header() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#products", label: "Studio" },
    { href: "#stack", label: "Stack" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/70 border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight flex items-center gap-2">
          <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-gradient-to-br from-accent to-accent-2 text-bg font-bold">
            db
          </span>
          <span className="text-text-primary text-sm">Studio</span>
        </a>
        <nav className="flex items-center gap-6 text-sm text-text-secondary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

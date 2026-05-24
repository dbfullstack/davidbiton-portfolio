type Product = {
  name: string;
  oneLiner: string;
  status: "Building" | "Beta soon" | "Concept";
  category: string;
  href?: string;
};

const products: Product[] = [
  {
    name: "Product 01",
    oneLiner: "Coming soon — drop your email below to hear first.",
    status: "Building",
    category: "AI · dev tools",
  },
  {
    name: "Product 02",
    oneLiner: "Coming soon — drop your email below to hear first.",
    status: "Concept",
    category: "Engineering productivity",
  },
  {
    name: "Product 03",
    oneLiner: "Coming soon — drop your email below to hear first.",
    status: "Concept",
    category: "?",
  },
];

const statusStyles: Record<Product["status"], string> = {
  "Building": "bg-accent/10 text-accent border-accent/30",
  "Beta soon": "bg-accent-2/10 text-accent-2 border-accent-2/30",
  "Concept": "bg-text-muted/10 text-text-muted border-text-muted/30",
};

export default function Products() {
  return (
    <section id="products" className="relative border-t border-border overflow-hidden">
      <div
        className="glow-blob"
        style={{
          width: 420,
          height: 420,
          background: "var(--color-accent-3)",
          top: -100,
          right: -120,
          opacity: 0.18,
        }}
      />
      <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="font-mono text-xs text-accent mb-3 tracking-wider">
              03 / STUDIO
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              What I'm shipping.
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-text-secondary leading-relaxed text-lg">
              In parallel with client work, I'm building a small portfolio of
              focused products — primarily in{" "}
              <span className="text-text-primary">AI tooling</span> and{" "}
              <span className="text-text-primary">engineering productivity</span>.
              First launches in 2026.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {products.map((p) => (
            <article key={p.name} className="card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                  {p.category}
                </span>
                <span
                  className={`font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border ${statusStyles[p.status]}`}
                >
                  {p.status}
                </span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight mb-3">
                {p.name}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6 grow">
                {p.oneLiner}
              </p>
              <a
                href="#contact"
                className="font-mono text-xs text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1.5"
              >
                Get early access
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="text-center text-sm text-text-muted">
          Following along?{" "}
          <a
            href="#contact"
            className="text-text-secondary hover:text-accent transition-colors underline underline-offset-4 decoration-border"
          >
            Drop your email
          </a>{" "}
          and I'll ping you on each launch.
        </div>
      </div>
    </section>
  );
}

import AICoachMock from "./mockups/AICoachMock";
import InsightsMock from "./mockups/InsightsMock";
import MarketplaceMock from "./mockups/MarketplaceMock";

type Product = {
  codename: string;
  tagline: string;
  description: string;
  status: "Building" | "Beta soon" | "Concept";
  category: string;
  Mock: () => React.ReactElement;
};

const products: Product[] = [
  {
    codename: "AI Coach",
    tagline: "An always-on AI reviewer that ships with your team's taste.",
    description:
      "Drops into any GitHub PR and gives sharp, context-aware feedback. Learns your repo's conventions so it stops nagging about style and starts flagging real risk.",
    status: "Building",
    category: "AI · dev tools",
    Mock: AICoachMock,
  },
  {
    codename: "Pulse",
    tagline: "Engineering insights that don't make people defensive.",
    description:
      "Sprint velocity, review latency, on-time delivery — surfaced as actionable nudges, not vanity metrics. Built for the EMs and tech leads who actually have to act on them.",
    status: "Concept",
    category: "Engineering productivity",
    Mock: InsightsMock,
  },
  {
    codename: "Skillshop",
    tagline: "A marketplace of opinionated Claude skills you'd actually pay for.",
    description:
      "Curated, battle-tested Claude Code skills and agents. Install, run, ship. No more rebuilding the same review / planning / postmortem prompts from scratch.",
    status: "Concept",
    category: "AI · tooling",
    Mock: MarketplaceMock,
  },
];

const statusStyles: Record<Product["status"], string> = {
  "Building": "bg-accent/10 text-accent border-accent/30",
  "Beta soon": "bg-accent-2/10 text-accent-2 border-accent-2/30",
  "Concept": "bg-text-muted/10 text-text-muted border-text-muted/30",
};

function ProductCard({ p }: { p: Product }) {
  const { Mock } = p;
  return (
    <article className="card p-6 flex flex-col">
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

      <div className="mb-5">
        <Mock />
      </div>

      <h3 className="text-xl font-semibold tracking-tight mb-2">{p.codename}</h3>
      <p className="text-sm text-text-primary mb-3 leading-snug">{p.tagline}</p>
      <p className="text-sm text-text-secondary leading-relaxed mb-6 grow">
        {p.description}
      </p>
      <a
        href="#contact"
        className="font-mono text-xs text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1.5"
      >
        Get early access
        <span aria-hidden>→</span>
      </a>
    </article>
  );
}

export default function Products() {
  return (
    <section
      id="products"
      className="relative border-t border-border overflow-hidden"
    >
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
              What we're shipping.
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-text-secondary leading-relaxed text-lg">
              In parallel with client work, DB Studio is building a small
              portfolio of focused products — primarily in{" "}
              <span className="text-text-primary">AI tooling</span> and{" "}
              <span className="text-text-primary">engineering productivity</span>.
              The mockups below are real product directions, not stock art.
              First launches in 2026.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {products.map((p) => (
            <ProductCard key={p.codename} p={p} />
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
          and we'll ping you on each launch.
        </div>
      </div>
    </section>
  );
}

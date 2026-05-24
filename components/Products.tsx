import AICoachMock from "./mockups/AICoachMock";
import InsightsMock from "./mockups/InsightsMock";
import MarketplaceMock from "./mockups/MarketplaceMock";
import FlagscopeFeatureMock from "./mockups/FlagscopeFeatureMock";

type Product = {
  codename: string;
  tagline: string;
  description: string;
  status: "Live · Waitlist" | "Building" | "Beta soon" | "Concept";
  category: string;
  href?: string;
  Mock: () => React.ReactElement;
};

const upcoming: Product[] = [
  {
    codename: "AI Coach",
    tagline: "Always-on AI reviewer for your team.",
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
    tagline: "A marketplace of opinionated Claude skills.",
    description:
      "Curated, battle-tested Claude Code skills and agents. Install, run, ship. No more rebuilding the same review / planning / postmortem prompts from scratch.",
    status: "Concept",
    category: "AI · tooling",
    Mock: MarketplaceMock,
  },
];

const statusStyles: Record<Product["status"], string> = {
  "Live · Waitlist": "bg-green-400/10 text-green-400 border-green-400/40",
  "Building": "bg-accent/10 text-accent border-accent/30",
  "Beta soon": "bg-accent-2/10 text-accent-2 border-accent-2/30",
  "Concept": "bg-text-muted/10 text-text-muted border-text-muted/30",
};

function FeaturedFlagscope() {
  return (
    <article className="relative gradient-border p-px rounded-2xl mb-6">
      <div className="bg-bg-elevated rounded-2xl p-8 md:p-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5 flex-wrap">
              <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border bg-green-400/10 text-green-400 border-green-400/40 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 pulse-dot" />
                Live · Waitlist
              </span>
              <span className="font-mono text-[11px] text-text-muted tracking-wider uppercase">
                Engineering productivity
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3 leading-tight">
              <span className="gradient-text">Flagscope</span>
            </h3>
            <p className="text-lg text-text-primary mb-4 leading-snug">
              Kill flag debt. Multi-provider feature flag governance.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              Connects to LaunchDarkly, Flagsmith, Statsig and Unleash. Finds
              stale flags, ownerless flags, dead branches. Opens the cleanup PR
              for you. Landing live; beta opens early 2026.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["LaunchDarkly", "Flagsmith", "Statsig", "Unleash"].map((p) => (
                <span
                  key={p}
                  className="font-mono text-xs px-2.5 py-1 bg-bg border border-border rounded text-text-secondary"
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://flagscope.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent-2 hover:from-accent-hover hover:to-accent-2 text-bg font-semibold px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40"
              >
                Visit Flagscope
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="https://flagscope.vercel.app#contact"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-text-secondary hover:text-accent transition-colors"
              >
                Join waitlist
              </a>
            </div>
          </div>
          <div className="lg:col-span-3">
            <FlagscopeFeatureMock />
          </div>
        </div>
      </div>
    </article>
  );
}

function ProductCard({ p }: { p: Product }) {
  const { Mock } = p;
  const cta = p.href ? "Visit site" : "Get early access";
  const ctaHref = p.href ?? "#contact";

  return (
    <article className="card p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-5 gap-2">
        <span className="font-mono text-[10.5px] uppercase tracking-wider text-text-muted leading-tight">
          {p.category}
        </span>
        <span
          className={`font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border whitespace-nowrap ${statusStyles[p.status]}`}
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
        href={ctaHref}
        target={p.href ? "_blank" : undefined}
        rel={p.href ? "noopener noreferrer" : undefined}
        className="font-mono text-xs text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1.5"
      >
        {cta}
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
              <a
                href="https://flagscope.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                {" "}Flagscope
              </a>{" "}
              is the first one live — collecting waitlist signups now.
            </p>
          </div>
        </div>

        <FeaturedFlagscope />

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {upcoming.map((p) => (
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

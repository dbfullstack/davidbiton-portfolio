import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div
        aria-hidden="true"
        className="glow-blob"
        style={{
          width: 480,
          height: 480,
          background: "var(--color-accent)",
          top: -120,
          left: "55%",
        }}
      />
      <div
        aria-hidden="true"
        className="glow-blob glow-blob-2"
        style={{
          width: 360,
          height: 360,
          background: "var(--color-accent-2)",
          top: 80,
          left: "15%",
          opacity: 0.3,
        }}
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-28 md:pt-40 md:pb-36">
        <Reveal className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-surface/80 border border-border backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span aria-hidden="true" className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 pulse-dot" />
            <span aria-hidden="true" className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="font-mono text-xs text-text-secondary tracking-wider uppercase">
            Available · Select Engagements
          </span>
        </Reveal>

        <Reveal delayMs={100} className="mb-4 inline-block">
          <span className="font-mono text-xs px-2 py-1 rounded bg-gradient-to-br from-accent to-accent-2 text-bg font-bold tracking-wider uppercase">
            DB Studio
          </span>
        </Reveal>

        <Reveal delayMs={200}>
          <h1 id="hero-heading" className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02] mb-8">
            Engineering, <span className="gradient-text">AI</span>,
            <br />
            <span className="text-text-secondary">and load-bearing software.</span>
          </h1>
        </Reveal>

        <Reveal delayMs={300} className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10">
          DB Studio is a small software studio founded by{" "}
          <span className="text-text-primary font-medium">David Biton</span> —
          senior engineering manager, AI-tools builder, and the architect behind
          ten years of production systems. We take on a small number of
          load-bearing engagements at a time.
        </Reveal>

        <Reveal delayMs={300} className="flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent-2 hover:from-accent-hover hover:to-accent-2 text-bg font-semibold px-6 py-3 rounded-lg transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Start a project
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 border border-border hover:border-text-secondary text-text-primary font-medium px-6 py-3 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            See what we do
          </a>
        </Reveal>

        <Reveal delayMs={400} className="mt-16 grid grid-cols-3 gap-px max-w-2xl bg-border rounded-xl overflow-hidden border border-border">
          {[
            { v: "10+", l: "Years engineering" },
            { v: "4", l: "Mobile platforms shipped" },
            { v: "100+", l: "Repos worked on" },
          ].map((s) => (
            <div key={s.l} className="bg-bg-elevated/60 backdrop-blur-sm px-5 py-4">
              <div className="font-mono text-2xl font-semibold text-text-primary">
                {s.v}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-text-muted mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

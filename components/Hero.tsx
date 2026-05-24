export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div
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
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-28 md:pt-40 md:pb-36">
        <div className="fade-up inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-surface/80 border border-border backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 pulse-dot" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="font-mono text-xs text-text-secondary tracking-wider uppercase">
            Available · Select Engagements
          </span>
        </div>

        <h1 className="fade-up delay-100 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02] mb-8">
          Engineering at the edge of{" "}
          <span className="gradient-text">AI</span>,
          <br />
          <span className="text-text-secondary">identity, and scale.</span>
        </h1>

        <p className="fade-up delay-200 text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10">
          I'm <span className="text-text-primary font-medium">David Biton</span> —
          a senior engineer who architects production identity systems, builds the
          AI tooling that makes engineering teams faster, and ships
          cross-platform mobile at scale.
        </p>

        <div className="fade-up delay-300 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent-2 hover:from-accent-hover hover:to-accent-2 text-bg font-semibold px-6 py-3 rounded-lg transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40"
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
            className="inline-flex items-center gap-2 border border-border hover:border-text-secondary text-text-primary font-medium px-6 py-3 rounded-lg transition-colors"
          >
            See selected work
          </a>
        </div>

        <div className="fade-up delay-400 mt-16 grid grid-cols-3 gap-px max-w-2xl bg-border rounded-xl overflow-hidden border border-border">
          {[
            { v: "120+", l: "Repos w/ AI tooling" },
            { v: "22", l: "Mobile SDK repos owned" },
            { v: "5", l: "Identity services in prod" },
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
        </div>
      </div>
    </section>
  );
}

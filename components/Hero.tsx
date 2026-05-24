export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="font-mono text-xs text-accent mb-4 tracking-wider">
          AVAILABLE FOR SELECT FREELANCE ENGAGEMENTS
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">
          Senior Full-Stack Engineer
          <br />
          <span className="text-text-secondary">
            shipping identity, AI, and developer tooling.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10">
          I build production systems where compliance, scale, and developer
          experience all matter. 10+ years across backend microservices, cloud
          infrastructure, AI integration, and cross-platform mobile SDKs.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-bg font-medium px-5 py-3 rounded-lg transition-colors"
          >
            Book a call
            <span aria-hidden>→</span>
          </a>
          <a
            href="mailto:david.biton@au10tix.com"
            className="inline-flex items-center gap-2 border border-border hover:border-text-secondary text-text-primary font-medium px-5 py-3 rounded-lg transition-colors"
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}

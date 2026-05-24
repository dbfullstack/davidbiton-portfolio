export default function TerminalMock() {
  return (
    <div className="rounded-xl border border-border bg-bg shadow-2xl shadow-accent/5 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-elevated">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <span className="ml-3 font-mono text-xs text-text-muted">
          claude · ai-pr-review
        </span>
      </div>
      <div className="p-5 font-mono text-[12.5px] leading-relaxed text-text-secondary">
        <div className="flex">
          <span className="text-text-muted mr-3 select-none">$</span>
          <span className="text-text-primary">
            claude review PR #142
          </span>
        </div>
        <div className="mt-3 text-text-muted">
          <span className="text-accent">●</span> Loading workspace rules…
        </div>
        <div className="text-text-muted">
          <span className="text-accent">●</span> Fetching diff…
          <span className="text-text-primary"> 12 files, +482/-67</span>
        </div>
        <div className="text-text-muted">
          <span className="text-accent">●</span> Routing to agent:{" "}
          <span className="text-accent-2">code-reviewer</span>
        </div>

        <div className="mt-4 border-l-2 border-accent/40 pl-3 space-y-2">
          <div>
            <span className="text-accent-3 font-semibold">CRITICAL</span>{" "}
            <span className="text-text-primary">external-api-safety</span>
          </div>
          <div className="text-text-secondary text-xs">
            New health check hits a billable endpoint. At 60s × 24h × 3 envs
            you'd burn 4,320 paid calls/day. Switch to a free status route.
          </div>
        </div>

        <div className="mt-3 border-l-2 border-accent/40 pl-3 space-y-2">
          <div>
            <span className="text-accent font-semibold">IMPORTANT</span>{" "}
            <span className="text-text-primary">missing-feature-flag</span>
          </div>
          <div className="text-text-secondary text-xs">
            New endpoint ships without a feature flag — no staged rollout
            possible. Recommended: gate behind a per-tenant toggle.
          </div>
        </div>

        <div className="mt-3 text-text-muted">
          <span className="text-accent">●</span> 2 issues posted to PR ✓
        </div>
      </div>
    </div>
  );
}

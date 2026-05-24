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
            claude review PR #4218
          </span>
        </div>
        <div className="mt-3 text-text-muted">
          <span className="text-accent">●</span> Loading workspace rules
          (20)…
        </div>
        <div className="text-text-muted">
          <span className="text-accent">●</span> Fetching diff…
          <span className="text-text-primary"> 12 files, +482/-67</span>
        </div>
        <div className="text-text-muted">
          <span className="text-accent">●</span> Routing to agent:{" "}
          <span className="text-accent-2">pr-review</span>
        </div>

        <div className="mt-4 border-l-2 border-accent/40 pl-3 space-y-2">
          <div>
            <span className="text-accent-3 font-semibold">CRITICAL</span>{" "}
            <span className="text-text-primary">
              vendor-api-safety
            </span>
          </div>
          <div className="text-text-secondary text-xs">
            New monitoring check hits billable{" "}
            <span className="text-accent-2">/rest/validate</span> instead of{" "}
            <span className="text-accent">/rest/status</span>. Volume math:
            60s × 24h × 3 envs = 4,320 paid calls/day.
          </div>
        </div>

        <div className="mt-3 border-l-2 border-accent/40 pl-3 space-y-2">
          <div>
            <span className="text-accent font-semibold">IMPORTANT</span>{" "}
            <span className="text-text-primary">feature-toggle</span>
          </div>
          <div className="text-text-secondary text-xs">
            New endpoint added without a per-org Flagsmith flag — staged
            rollout impossible.
          </div>
        </div>

        <div className="mt-3 text-text-muted">
          <span className="text-accent">●</span> 2 issues found · posted to PR
          ✓
        </div>
      </div>
    </div>
  );
}

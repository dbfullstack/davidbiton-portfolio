export default function DevHubMock() {
  return (
    <div className="rounded-xl border border-border bg-bg overflow-hidden shadow-2xl shadow-accent/10">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-bg-elevated">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-bold gradient-text">devhub</span>
          <span className="text-text-muted/60 text-[10px]">/</span>
          <span className="font-mono text-[10px] text-text-secondary">any provider</span>
        </div>
        <span className="font-mono text-[9.5px] text-accent flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 pulse-dot" />
          live
        </span>
      </div>

      <div className="grid grid-cols-3 gap-px bg-border">
        {[
          { v: "18", l: "open PRs", c: "text-text-primary" },
          { v: "92%", l: "sprint velocity", c: "text-accent" },
          { v: "0", l: "open incidents", c: "text-green-400" },
        ].map((s) => (
          <div key={s.l} className="bg-bg-elevated px-3 py-2">
            <div className={`font-mono text-base font-semibold ${s.c}`}>{s.v}</div>
            <div className="text-[9px] uppercase tracking-wider text-text-muted mt-0.5">
              {s.l}
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 py-2.5 border-t border-border bg-surface">
        <div className="rounded-md bg-bg p-2.5">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-bg text-[8px] font-bold">
              ai
            </span>
            <span className="font-mono text-[9.5px] text-text-muted">Ask · just now</span>
          </div>
          <div className="text-[10.5px] text-text-secondary leading-relaxed">
            <span className="text-text-primary">&ldquo;How does checkout retry a failed payment?&rdquo;</span>
            <br />
            Grounded in the indexed repo — retries 3× with backoff, then
            routes to manual review.{" "}
            <span className="font-mono text-accent">payments/retry.ts:88</span>
          </div>
        </div>
      </div>

      <div className="px-4 py-2 border-t border-border flex items-center gap-1.5 flex-wrap">
        {["GitHub", "Azure DevOps"].map((p) => (
          <span
            key={p}
            className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-surface text-text-muted border border-border uppercase"
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

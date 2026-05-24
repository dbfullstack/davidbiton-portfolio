export default function FlagscopeFeatureMock() {
  const flags = [
    { name: "checkout-v2-banner", provider: "LD", status: "stale", age: "127d ON", owner: "alex.k", action: "remove" },
    { name: "ai-summarize-toggle", provider: "Flagsmith", status: "ownerless", age: "owner left 42d", owner: "—", action: "reassign" },
    { name: "new-search-ranker", provider: "Statsig", status: "ok", age: "12d ON", owner: "morgan.l", action: null },
    { name: "legacy-export-flow", provider: "Unleash", status: "dead", age: "203d unchanged", owner: "—", action: "remove" },
  ];
  const statusStyles: Record<string, string> = {
    stale: "text-warning bg-warning/10 border-warning/30",
    dead: "text-danger bg-danger/10 border-danger/30",
    ownerless: "text-accent-3 bg-accent-3/10 border-accent-3/30",
    ok: "text-text-muted bg-surface border-border",
  };
  return (
    <div className="rounded-xl border border-border bg-bg-elevated overflow-hidden shadow-2xl shadow-accent/10">
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-gradient-to-r from-surface to-bg-elevated">
        <div className="flex items-center gap-2.5">
          <span className="h-4 w-4 rounded-md bg-gradient-to-br from-accent to-accent-2" />
          <span className="font-mono text-sm font-bold gradient-text">flagscope</span>
          <span className="text-text-muted/60">/</span>
          <span className="font-mono text-xs text-text-secondary">flag debt</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-text-muted">4 providers connected</span>
          <span className="font-mono text-[10px] text-accent flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 pulse-dot" />
            scanning
          </span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-px bg-border">
        {[
          { v: "147", l: "total flags", c: "text-text-primary" },
          { v: "32", l: "stale ≥30d", c: "text-warning" },
          { v: "11", l: "ownerless", c: "text-accent-3" },
          { v: "8", l: "dead branches", c: "text-danger" },
        ].map((s) => (
          <div key={s.l} className="bg-bg-elevated px-4 py-3.5">
            <div className={`font-mono text-2xl font-semibold ${s.c}`}>{s.v}</div>
            <div className="text-[10px] uppercase tracking-wider text-text-muted mt-1">{s.l}</div>
          </div>
        ))}
      </div>

      <div className="px-5 py-2.5 border-b border-border flex items-center gap-2 text-xs">
        <span className="font-mono text-text-muted">filter:</span>
        <span className="font-mono px-2 py-0.5 rounded bg-warning/10 text-warning border border-warning/30">stale</span>
        <span className="font-mono px-2 py-0.5 rounded bg-danger/10 text-danger border border-danger/30">dead</span>
        <span className="font-mono px-2 py-0.5 rounded bg-accent-3/10 text-accent-3 border border-accent-3/30">ownerless</span>
        <span className="ml-auto font-mono text-[10px] text-text-muted">51 of 147</span>
      </div>

      <div className="divide-y divide-border">
        {flags.map((f) => (
          <div key={f.name} className="px-5 py-3 grid grid-cols-12 gap-3 items-center hover:bg-surface/40 transition-colors">
            <div className="col-span-5">
              <div className="font-mono text-sm text-text-primary truncate">{f.name}</div>
              <div className="font-mono text-[10px] text-text-muted">{f.provider}</div>
            </div>
            <div className="col-span-2">
              <span className={`font-mono text-[9.5px] uppercase tracking-wider px-2 py-0.5 rounded border ${statusStyles[f.status]}`}>{f.status}</span>
            </div>
            <div className="col-span-3 font-mono text-[11px] text-text-secondary">{f.age}</div>
            <div className="col-span-2 text-right">
              {f.action === "remove" && (
                <button className="font-mono text-[10px] px-2.5 py-1 rounded bg-gradient-to-r from-accent to-accent-2 text-bg font-semibold shadow shadow-accent/20">
                  open PR
                </button>
              )}
              {f.action === "reassign" && (
                <button className="font-mono text-[10px] px-2.5 py-1 rounded bg-surface text-text-secondary border border-border">
                  assign
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="px-5 py-3 border-t border-border bg-surface flex items-center justify-between">
        <div className="flex items-center gap-2 text-[11px] text-text-muted font-mono">
          <span className="text-accent">●</span> 1 cleanup PR opened this morning
          <span className="text-text-muted/40">·</span>
          <span>3 ownerless flags reassigned this week</span>
        </div>
        <span className="font-mono text-[10px] text-text-muted">flagscope.vercel.app</span>
      </div>
    </div>
  );
}

export default function InsightsMock() {
  const sparkline = [4, 6, 5, 8, 7, 11, 9, 13, 12, 15, 14, 18];
  const max = Math.max(...sparkline);
  const team = [
    { name: "alex.k", load: 80 },
    { name: "sam.r", load: 65 },
    { name: "morgan.l", load: 45 },
    { name: "jordan.p", load: 90 },
  ];

  return (
    <div className="rounded-xl border border-border bg-bg-elevated overflow-hidden shadow-2xl shadow-accent-2/10">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-surface">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-bold gradient-text">pulse</span>
          <span className="text-text-muted/60 text-[10px]">/</span>
          <span className="font-mono text-[10px] text-text-secondary">team · sprint 14</span>
        </div>
        <span className="font-mono text-[9.5px] text-accent flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 pulse-dot" />
          7d left
        </span>
      </div>

      <div className="p-3 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { v: "47", l: "merged", trend: "+12%" },
            { v: "2.4h", l: "median review", trend: "-31%" },
            { v: "94%", l: "on-time", trend: "+4%" },
          ].map((s) => (
            <div key={s.l} className="rounded-md bg-bg border border-border p-2">
              <div className="font-mono text-sm font-semibold text-text-primary leading-none">
                {s.v}
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[8.5px] uppercase tracking-wider text-text-muted">{s.l}</span>
                <span className="text-[9px] font-mono text-accent">{s.trend}</span>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-1">
            <span className="font-mono text-[9.5px] text-text-muted uppercase tracking-wider">
              throughput · 12 weeks
            </span>
            <span className="font-mono text-[9.5px] text-text-primary">↗ trending up</span>
          </div>
          <div className="flex items-end gap-1 h-10">
            {sparkline.map((v, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-accent to-accent-2"
                style={{
                  height: `${(v / max) * 100}%`,
                  opacity: 0.4 + (i / sparkline.length) * 0.6,
                }}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="font-mono text-[9.5px] text-text-muted uppercase tracking-wider mb-1.5">
            who's carrying what
          </div>
          <div className="space-y-1">
            {team.map((m) => (
              <div key={m.name} className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-text-secondary w-16">{m.name}</span>
                <div className="flex-1 h-1 rounded-full bg-border overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                    style={{ width: `${m.load}%` }}
                  />
                </div>
                <span className="font-mono text-[9px] text-text-muted w-6 text-right">{m.load}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md bg-bg border border-border p-2">
          <div className="font-mono text-[9px] uppercase tracking-wider text-text-muted mb-1">
            this week · auto-insight
          </div>
          <div className="text-[10.5px] text-text-secondary leading-relaxed">
            <span className="text-accent">●</span> Reviews 31% faster since the
            AI gate landed. Two reviewers carry 64% of load — rebalance?
          </div>
        </div>
      </div>
    </div>
  );
}

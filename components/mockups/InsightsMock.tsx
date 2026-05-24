export default function InsightsMock() {
  const sparkline = [4, 6, 5, 8, 7, 11, 9, 13, 12, 15, 14, 18];
  const max = Math.max(...sparkline);
  return (
    <div className="rounded-xl border border-border bg-bg-elevated overflow-hidden shadow-2xl shadow-accent-2/10">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-surface">
        <div className="font-mono text-[10.5px] text-text-secondary">
          team / velocity
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 pulse-dot" />
          this sprint
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-3 gap-2">
          {[
            { v: "47", l: "PRs merged", trend: "+12%" },
            { v: "2.4h", l: "median review", trend: "-31%" },
            { v: "94%", l: "on-time", trend: "+4%" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-lg bg-bg border border-border p-2.5"
            >
              <div className="font-mono text-base font-semibold text-text-primary leading-none">
                {s.v}
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[9px] uppercase tracking-wider text-text-muted">
                  {s.l}
                </span>
                <span className="text-[9px] font-mono text-accent">
                  {s.trend}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="flex items-baseline justify-between mb-1.5">
            <span className="font-mono text-[10.5px] text-text-muted">
              throughput · 12 weeks
            </span>
            <span className="font-mono text-[10.5px] text-text-primary">
              ↗ trending up
            </span>
          </div>
          <div className="flex items-end gap-1 h-12">
            {sparkline.map((v, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-accent to-accent-2"
                style={{ height: `${(v / max) * 100}%`, opacity: 0.4 + (i / sparkline.length) * 0.6 }}
              />
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-bg border border-border p-3">
          <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-1.5">
            this week · auto-insight
          </div>
          <div className="text-[11.5px] text-text-secondary leading-relaxed">
            <span className="text-accent">●</span> Reviews are 31% faster since
            the new AI gate landed. Two reviewers carry 64% of load —
            consider redistributing.
          </div>
        </div>
      </div>
    </div>
  );
}

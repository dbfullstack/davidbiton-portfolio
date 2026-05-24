export default function MarketplaceMock() {
  const skills = [
    {
      name: "pr-review-strict",
      author: "@dbfullstack",
      installs: "2.4k",
      tag: "review",
      gradient: "from-accent to-accent-2",
    },
    {
      name: "spec-from-issue",
      author: "@dbfullstack",
      installs: "1.1k",
      tag: "planning",
      gradient: "from-accent-2 to-accent-3",
    },
    {
      name: "incident-postmortem",
      author: "@dbfullstack",
      installs: "832",
      tag: "ops",
      gradient: "from-accent-3 to-accent",
    },
    {
      name: "deploy-readiness",
      author: "@dbfullstack",
      installs: "612",
      tag: "ops",
      gradient: "from-accent to-accent-3",
    },
  ];
  return (
    <div className="rounded-xl border border-border bg-bg-elevated overflow-hidden shadow-2xl shadow-accent-3/10">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-surface">
        <div className="font-mono text-[10.5px] text-text-secondary">
          skills · browse
        </div>
        <div className="font-mono text-[10px] text-text-muted">
          47 published
        </div>
      </div>
      <div className="p-3 grid grid-cols-2 gap-2">
        {skills.map((s) => (
          <div
            key={s.name}
            className="rounded-lg bg-bg border border-border p-2.5 hover:border-accent/40 transition-colors"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div
                className={`h-4 w-4 rounded-md bg-gradient-to-br ${s.gradient}`}
              />
              <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted bg-surface px-1.5 py-0.5 rounded">
                {s.tag}
              </span>
            </div>
            <div className="font-mono text-[11px] text-text-primary font-semibold leading-tight mb-1">
              {s.name}
            </div>
            <div className="flex items-center justify-between text-[9.5px] text-text-muted font-mono">
              <span>{s.author}</span>
              <span>↓ {s.installs}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 py-2.5 border-t border-border bg-surface flex items-center justify-between">
        <div className="font-mono text-[10px] text-text-muted">
          new this week
        </div>
        <button className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-gradient-to-r from-accent to-accent-2 text-bg font-semibold">
          publish skill →
        </button>
      </div>
    </div>
  );
}

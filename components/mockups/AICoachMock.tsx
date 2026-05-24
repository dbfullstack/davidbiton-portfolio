export default function AICoachMock() {
  const prs = [
    { id: "#142", title: "feat: dark mode toggle", reviews: 2, status: "ok" },
    { id: "#143", title: "refactor: split user.service", reviews: 1, status: "critical" },
    { id: "#144", title: "fix: race in payment hook", reviews: 0, status: "review" },
  ];

  return (
    <div className="rounded-xl border border-border bg-bg overflow-hidden shadow-2xl shadow-accent/10">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-bg-elevated">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-bold gradient-text">
            ai-coach
          </span>
          <span className="text-text-muted/60 text-[10px]">/</span>
          <span className="font-mono text-[10px] text-text-secondary">repo · acme-web</span>
        </div>
        <span className="font-mono text-[9.5px] text-accent flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 pulse-dot" />
          live
        </span>
      </div>

      <div className="grid grid-cols-3 gap-px bg-border">
        {[
          { v: "12", l: "PRs reviewed today", c: "text-text-primary" },
          { v: "3", l: "critical found", c: "text-accent-3" },
          { v: "8m", l: "avg time saved", c: "text-accent" },
        ].map((s) => (
          <div key={s.l} className="bg-bg-elevated px-3 py-2">
            <div className={`font-mono text-base font-semibold ${s.c}`}>{s.v}</div>
            <div className="text-[9px] uppercase tracking-wider text-text-muted mt-0.5">
              {s.l}
            </div>
          </div>
        ))}
      </div>

      <div className="divide-y divide-border">
        {prs.map((pr) => (
          <div key={pr.id} className="px-4 py-2.5 flex items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="font-mono text-[10.5px] text-text-muted">{pr.id}</div>
              <div className="text-[11.5px] text-text-primary truncate">{pr.title}</div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {pr.status === "critical" && (
                <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-accent-3/10 text-accent-3 border border-accent-3/30 uppercase">
                  critical
                </span>
              )}
              {pr.status === "ok" && (
                <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-accent/10 text-accent border border-accent/30 uppercase">
                  approved
                </span>
              )}
              {pr.status === "review" && (
                <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-surface text-text-muted border border-border uppercase">
                  reviewing
                </span>
              )}
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
            <span className="font-mono text-[9.5px] text-text-muted">
              Coach · just now
            </span>
          </div>
          <div className="text-[10.5px] text-text-secondary leading-relaxed">
            <span className="text-accent-3 font-semibold">⚠ critical</span>{" "}
            — line 84 swallows the auth error silently. If the upstream token
            expires this returns null with no log.
          </div>
        </div>
      </div>
    </div>
  );
}

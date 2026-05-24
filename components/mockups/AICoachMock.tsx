export default function AICoachMock() {
  return (
    <div className="rounded-xl border border-border bg-bg overflow-hidden shadow-2xl shadow-accent/10">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-bg-elevated">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="ml-3 flex items-center gap-2 font-mono text-[10.5px] text-text-muted">
          <span className="text-accent">●</span> pull request #42
          <span className="text-text-muted/60">·</span>
          <span>refactor: split user.service</span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-start gap-2.5">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-bg text-[10px] font-bold shrink-0">
            ai
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-mono text-[10.5px] text-text-muted mb-1">
              Coach · just now
            </div>
            <div className="rounded-lg bg-surface border border-border p-3 text-[11.5px] text-text-secondary leading-relaxed">
              Nice split. One thing — the new{" "}
              <span className="font-mono text-accent">UserService</span>{" "}
              constructor takes 4 deps. Consider grouping them into a config
              object so future signups don't break callers.
            </div>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-accent-2 to-accent-3 flex items-center justify-center text-bg text-[10px] font-bold shrink-0">
            ai
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-mono text-[10.5px] text-text-muted mb-1">
              Coach · just now
            </div>
            <div className="rounded-lg bg-surface border border-border p-3 text-[11.5px] text-text-secondary leading-relaxed">
              <span className="text-accent-3 font-semibold">⚠ critical</span>{" "}
              — line 84 catches and swallows the auth error. If the upstream
              token expires, this'll silently return null.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 pt-1 pl-8">
          <button className="text-[10.5px] font-mono px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/30">
            apply fix
          </button>
          <button className="text-[10.5px] font-mono px-2.5 py-1 rounded-md bg-bg-elevated text-text-secondary border border-border">
            explain more
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PipelineMock() {
  const stages = [
    { name: "build", status: "ok", time: "0:42" },
    { name: "test", status: "ok", time: "1:14" },
    { name: "deploy", status: "active", time: "0:08" },
    { name: "verify", status: "pending", time: "—" },
  ];
  return (
    <div className="rounded-lg border border-border bg-bg-elevated p-3 overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <div className="font-mono text-[9.5px] text-text-muted uppercase tracking-wider">
          ci/cd · pipeline
        </div>
        <span className="font-mono text-[9.5px] text-accent">#1247</span>
      </div>
      <div className="space-y-1">
        {stages.map((s, i) => (
          <div key={s.name} className="flex items-center gap-2">
            <div className="w-4 flex items-center justify-center">
              {s.status === "ok" && <span className="text-green-400 text-[11px]">●</span>}
              {s.status === "active" && (
                <span className="h-2 w-2 rounded-full bg-accent pulse-dot" />
              )}
              {s.status === "pending" && (
                <span className="h-2 w-2 rounded-full border border-text-muted" />
              )}
            </div>
            <span className="font-mono text-[10px] text-text-primary flex-1">{s.name}</span>
            <div className="flex-1 h-1 rounded-full bg-border overflow-hidden">
              <div
                className={`h-full ${
                  s.status === "ok"
                    ? "bg-gradient-to-r from-green-400 to-accent w-full"
                    : s.status === "active"
                      ? "bg-gradient-to-r from-accent to-accent-2 w-1/3"
                      : "w-0"
                }`}
              />
            </div>
            <span className="font-mono text-[9.5px] text-text-muted w-8 text-right">{s.time}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 font-mono text-[9.5px] text-text-muted text-center">
        passing · since 14d
      </div>
    </div>
  );
}

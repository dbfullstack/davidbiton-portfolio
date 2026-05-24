export default function MobileMock() {
  const platforms = [
    { name: "iOS", version: "2.4.1", color: "from-accent to-accent-2" },
    { name: "Android", version: "2.4.1", color: "from-accent-2 to-accent-3" },
    { name: "Flutter", version: "2.4.1", color: "from-accent-3 to-accent" },
    { name: "RN", version: "2.4.1", color: "from-accent to-accent-3" },
  ];
  return (
    <div className="rounded-lg border border-border bg-bg-elevated p-3 overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <div className="font-mono text-[9.5px] text-text-muted uppercase tracking-wider">
          sdk · version matrix
        </div>
        <span className="font-mono text-[9.5px] text-accent flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-green-400 pulse-dot" />
          parity
        </span>
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {platforms.map((p) => (
          <div key={p.name} className="rounded-md bg-surface border border-border p-1.5 text-center">
            <div className={`h-5 rounded-sm bg-gradient-to-br ${p.color} mb-1 opacity-80`} />
            <div className="font-mono text-[10px] text-text-primary font-semibold leading-none">{p.name}</div>
            <div className="font-mono text-[9px] text-text-muted mt-0.5">{p.version}</div>
          </div>
        ))}
      </div>
      <div className="mt-2 font-mono text-[9.5px] text-text-muted text-center">
        last release · 14h ago · all green
      </div>
    </div>
  );
}

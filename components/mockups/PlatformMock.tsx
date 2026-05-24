export default function PlatformMock() {
  const services = [
    { name: "api", color: "from-accent to-accent-2" },
    { name: "worker", color: "from-accent-2 to-accent-3" },
    { name: "events", color: "from-accent-3 to-accent" },
  ];
  return (
    <div className="rounded-lg border border-border bg-bg-elevated p-3 overflow-hidden">
      <div className="font-mono text-[9.5px] text-text-muted uppercase tracking-wider mb-2">
        topology
      </div>
      <div className="flex items-center gap-2 mb-2">
        <div className="flex-1 rounded-md bg-surface border border-border px-2 py-1.5">
          <div className="font-mono text-[10px] text-text-primary">gateway</div>
          <div className="mt-1 h-0.5 rounded-full bg-gradient-to-r from-accent to-accent-2" />
        </div>
      </div>
      <div className="flex items-center justify-center text-text-muted text-[10px] my-1">↓</div>
      <div className="grid grid-cols-3 gap-1.5">
        {services.map((s) => (
          <div key={s.name} className="rounded-md bg-surface border border-border px-2 py-1.5">
            <div className="font-mono text-[10px] text-text-primary">{s.name}</div>
            <div className={`mt-1 h-0.5 rounded-full bg-gradient-to-r ${s.color}`} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-2 font-mono text-[9.5px] text-text-muted">
        <span>postgres</span>
        <span>kafka</span>
        <span>redis</span>
      </div>
    </div>
  );
}

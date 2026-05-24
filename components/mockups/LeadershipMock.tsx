export default function LeadershipMock() {
  const team = [
    { name: "Eng 01", load: 80, color: "from-accent to-accent-2" },
    { name: "Eng 02", load: 65, color: "from-accent-2 to-accent-3" },
    { name: "Eng 03", load: 45, color: "from-accent-3 to-accent" },
    { name: "Eng 04", load: 90, color: "from-accent to-accent-3" },
  ];
  return (
    <div className="rounded-lg border border-border bg-bg-elevated p-3 overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <div className="font-mono text-[9.5px] text-text-muted uppercase tracking-wider">
          sprint · focus
        </div>
        <span className="font-mono text-[9.5px] text-accent">7d</span>
      </div>
      <div className="space-y-1.5">
        {team.map((m) => (
          <div key={m.name} className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-text-secondary w-12">{m.name}</span>
            <div className="flex-1 h-1.5 rounded-full bg-border overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${m.color}`}
                style={{ width: `${m.load}%` }}
              />
            </div>
            <span className="font-mono text-[9.5px] text-text-muted w-6 text-right">{m.load}%</span>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-2 border-t border-border font-mono text-[9.5px] text-text-muted">
        <span className="text-accent">●</span> rebalance Eng 03 → Eng 04
      </div>
    </div>
  );
}

export default function DashboardMock() {
  const flags = [
    { name: "pii_input_normalizer_toggle", on: 73, total: 100 },
    { name: "kyb_async_pipeline_toggle", on: 41, total: 100 },
    { name: "amlv_pep_v2_toggle", on: 18, total: 100 },
    { name: "digital_id_fast_path_toggle", on: 94, total: 100 },
  ];

  return (
    <div className="rounded-xl border border-border bg-bg-elevated shadow-2xl shadow-accent-2/5 overflow-hidden">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-surface">
        <div className="font-mono text-xs text-accent">db.devhub</div>
        <div className="font-mono text-[11px] text-text-muted">
          / feature-flags
        </div>
        <div className="ml-auto flex items-center gap-2 text-[11px] text-text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 pulse-dot" />
          live
        </div>
      </div>
      <div className="p-5 space-y-3">
        {flags.map((f) => (
          <div key={f.name} className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11.5px] text-text-secondary">
                {f.name}
              </span>
              <span className="font-mono text-[11px] text-text-muted">
                {f.on}%
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-border overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                style={{ width: `${f.on}%` }}
              />
            </div>
          </div>
        ))}
        <div className="grid grid-cols-3 gap-2 pt-3 mt-3 border-t border-border">
          {[
            { v: "47", l: "active flags" },
            { v: "12", l: "orgs" },
            { v: "0", l: "stale > 30d" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-mono text-base font-semibold text-text-primary">
                {s.v}
              </div>
              <div className="text-[9.5px] uppercase tracking-wider text-text-muted">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

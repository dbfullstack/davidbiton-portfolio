export default function ArchMock() {
  const services = ["PIIV", "KYB", "AMLV", "Digital ID", "Multi-Vendor"];
  return (
    <div className="rounded-xl border border-border bg-bg-elevated p-5 shadow-2xl shadow-accent-3/5">
      <div className="font-mono text-[11px] text-text-muted mb-4 uppercase tracking-wider">
        Identity Platform · 5 services
      </div>
      <div className="grid grid-cols-5 gap-2 mb-4">
        {services.map((s) => (
          <div
            key={s}
            className="rounded-md bg-surface border border-border px-2 py-3 text-center"
          >
            <div className="text-[10px] font-mono text-text-primary font-semibold">
              {s}
            </div>
            <div className="mt-1.5 h-1 rounded-full bg-border overflow-hidden">
              <div className="h-full bg-gradient-to-r from-accent to-accent-2 w-3/4" />
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-1.5 font-mono text-[10.5px]">
        <div className="flex justify-between text-text-muted">
          <span>orchestration</span>
          <span className="text-accent">camunda 8 · bpmn</span>
        </div>
        <div className="flex justify-between text-text-muted">
          <span>events</span>
          <span className="text-accent-2">kafka</span>
        </div>
        <div className="flex justify-between text-text-muted">
          <span>tenancy</span>
          <span className="text-accent-3">per-org flags</span>
        </div>
        <div className="flex justify-between text-text-muted">
          <span>compliance</span>
          <span className="text-text-primary">gdpr · audit-grade</span>
        </div>
      </div>
    </div>
  );
}

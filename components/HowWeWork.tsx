import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Quick call",
    body: "20–30 minutes. What you're building, what's blocking it, whether this is a fit — no deck, no pitch.",
  },
  {
    n: "02",
    title: "Scoped proposal",
    body: "Clear deliverables, timeline, and cost before anything starts. No open-ended retainers you can't reason about.",
  },
  {
    n: "03",
    title: "Engagement starts",
    body: "Embedded with your team or async, whichever fits. Direct access, no account-manager layer.",
  },
  {
    n: "04",
    title: "Ship, with visibility",
    body: "Regular check-ins against the plan. You always know what's shipped and what's next — no surprise bills.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" aria-labelledby="how-we-work-heading" className="relative border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <Reveal className="mb-14">
          <div className="font-mono text-xs text-accent mb-3 tracking-wider">
            07 / HOW WE WORK
          </div>
          <h2 id="how-we-work-heading" className="text-3xl md:text-4xl font-semibold tracking-tight">
            From first call to shipped work.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delayMs={i * 100} className="card p-6">
              <div aria-hidden="true" className="font-mono text-2xl font-semibold text-accent mb-4">
                {s.n}
              </div>
              <h3 className="text-lg font-semibold tracking-tight mb-2">{s.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

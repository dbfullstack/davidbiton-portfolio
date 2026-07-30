import Reveal from "./Reveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
};

// Add real quotes here to turn this section on — it renders nothing while
// empty, so nothing placeholder-shaped ever ships to visitors. Example:
// { quote: "...", name: "Jane Doe", role: "VP Engineering", company: "Acme" }
const testimonials: Testimonial[] = [];

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="relative border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <Reveal className="mb-14">
          <div className="font-mono text-xs text-accent mb-3 tracking-wider">
            06 / WHAT PEOPLE SAY
          </div>
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-semibold tracking-tight">
            From people who&apos;ve worked with us.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delayMs={i * 100} className="card p-6 flex flex-col h-full">
              <div aria-hidden="true" className="text-3xl text-accent/40 mb-2 leading-none font-serif">
                &ldquo;
              </div>
              <p className="text-sm text-text-secondary leading-relaxed grow mb-5">
                {t.quote}
              </p>
              <div className="pt-4 border-t border-border">
                <div className="text-sm font-medium text-text-primary">{t.name}</div>
                <div className="text-xs text-text-muted">
                  {t.role}
                  {t.company ? ` · ${t.company}` : ""}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

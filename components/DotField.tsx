// Deterministic pseudo-random (same output on server and client, so no
// hydration mismatch) — a twinkling dot field in the site's own gradient
// colors, inspired by harmony.io's animated hero dot pattern.
function seeded(i: number, salt: number) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

const COLORS = ["var(--color-accent)", "var(--color-accent-2)", "var(--color-accent-3)"];

export default function DotField({
  count = 42,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const dots = Array.from({ length: count }, (_, i) => ({
    left: `${seeded(i, 1) * 100}%`,
    top: `${seeded(i, 2) * 100}%`,
    size: 2 + seeded(i, 3) * 3,
    delay: seeded(i, 4) * 5,
    duration: 3 + seeded(i, 5) * 3,
    color: COLORS[i % COLORS.length],
  }));

  return (
    <div aria-hidden="true" className={`dot-field ${className}`}>
      {dots.map((d, i) => (
        <span
          key={i}
          className="dot-field-item"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            background: d.color,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

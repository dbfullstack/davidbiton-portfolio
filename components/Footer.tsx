export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-text-muted">
        <span className="font-mono">
          © {new Date().getFullYear()} David Biton
        </span>
        <span className="font-mono text-xs">
          Built with Next.js + Tailwind.
        </span>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-text-muted font-mono">
        © {new Date().getFullYear()} David Biton
      </div>
    </footer>
  );
}

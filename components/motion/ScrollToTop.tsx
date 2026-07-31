"use client";

import { useState } from "react";
import { useLenis } from "lenis/react";

const SHOW_THRESHOLD = 480;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const lenis = useLenis((l) => {
    setVisible(l.scroll > SHOW_THRESHOLD);
  });

  return (
    <button
      type="button"
      onClick={() => lenis?.scrollTo(0)}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-elevated/90 text-text-secondary shadow-lg backdrop-blur-sm transition-all hover:border-border-strong hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span aria-hidden="true" className="text-lg">
        ↑
      </span>
    </button>
  );
}

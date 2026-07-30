"use client";

import { useRef } from "react";
import { useLenis } from "lenis/react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useLenis((lenis) => {
    if (barRef.current) {
      barRef.current.style.transform = `scaleX(${lenis.progress})`;
    }
  });

  return (
    <div className="h-px w-full bg-border" aria-hidden="true">
      <div
        ref={barRef}
        className="h-full origin-left bg-gradient-to-r from-accent to-accent-2"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}

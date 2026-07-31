"use client";

import { ReactLenis } from "lenis/react";
import { useMediaQuery } from "./useMediaQuery";
import BootSequence from "./BootSequence";
import CustomCursor from "./CustomCursor";
import ScrollToTop from "./ScrollToTop";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <ReactLenis
      root
      options={{
        // lerp: 1 makes Lenis pass scroll straight through with no
        // smoothing — the simplest reduced-motion-safe fallback.
        lerp: reducedMotion ? 1 : 0.1,
        duration: 1.1,
        smoothWheel: true,
        anchors: true,
      }}
    >
      <BootSequence />
      <CustomCursor />
      {children}
      <ScrollToTop />
    </ReactLenis>
  );
}

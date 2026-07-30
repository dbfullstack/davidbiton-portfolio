"use client";

import { useEffect, useRef } from "react";
import { useMediaQuery } from "./useMediaQuery";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], [data-magnetic]";

export default function CustomCursor() {
  const fine = useMediaQuery("(pointer: fine) and (hover: hover)");
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const active = fine && !reduced;
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;

    document.documentElement.classList.add("cursor-none-desktop");

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let ringX = x;
    let ringY = y;
    let magnetTarget: HTMLElement | null = null;

    const tick = () => {
      ringX += (x - ringX) * 0.2;
      ringY += (y - ringY) * 0.2;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (ringRef.current) {
        const scale = magnetTarget ? 1.8 : 1;
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${scale})`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMove = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest<HTMLElement>(INTERACTIVE_SELECTOR);
      magnetTarget = el;
      if (el) {
        const rect = el.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      } else {
        x = e.clientX;
        y = e.clientY;
      }
    };

    document.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("cursor-none-desktop");
    };
  }, [active]);

  if (!active) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}

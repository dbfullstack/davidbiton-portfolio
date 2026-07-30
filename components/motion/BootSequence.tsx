"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "db-studio-boot-shown";

export default function BootSequence() {
  const [phase, setPhase] = useState<"idle" | "boot" | "exit">("idle");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || sessionStorage.getItem(STORAGE_KEY)) return;

    sessionStorage.setItem(STORAGE_KEY, "1");

    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(
      setTimeout(() => {
        document.documentElement.style.overflow = "hidden";
        setPhase("boot");
        timers.push(setTimeout(() => setPhase("exit"), 750));
        timers.push(
          setTimeout(() => {
            setPhase("idle");
            document.documentElement.style.overflow = "";
          }, 1150),
        );
      }, 0),
    );

    return () => {
      timers.forEach(clearTimeout);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (phase === "idle") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-bg transition-opacity duration-300 ${
        phase === "exit" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex items-center gap-2 font-mono text-sm text-text-secondary">
        <span className="rounded bg-gradient-to-br from-accent to-accent-2 px-1.5 py-0.5 text-xs font-bold text-bg">
          db
        </span>
        <span>
          initializing studio
          <span className="typing-caret" />
        </span>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

/** Mouse glow + static gradients — no React state on mousemove (avoids re-render lag). */
export default function AnimatedBackground() {
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        const { x, y } = posRef.current;
        glow.style.background = `radial-gradient(800px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.35), transparent 70%)`;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-pink-900/20" />
      <div
        ref={glowRef}
        className="absolute inset-0 opacity-40 will-change-[background]"
        aria-hidden
      />
    </div>
  );
}

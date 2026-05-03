"use client";

import { useEffect, useState } from "react";

/**
 * Respects prefers-reduced-motion and optional lite mode for low-end devices.
 * When true, heavy effects (blur, particles, custom cursor) are skipped for faster load.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(true); // start true to avoid flash of heavy UI

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches);
    const handler = () => setReduced(media.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return reduced;
}

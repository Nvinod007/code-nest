"use client";

import { useReducedMotion } from "@/shared/hooks/useReducedMotion";
import { useEffect } from "react";

/**
 * Applies cursor-none to body only when custom cursor is shown (no reduced motion).
 * Ensures default cursor on low-end or reduced-motion so the site stays usable.
 */
export default function CursorBodyClass() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    document.body.classList.toggle("cursor-none", !reducedMotion);
    return () => document.body.classList.remove("cursor-none");
  }, [reducedMotion]);

  return null;
}

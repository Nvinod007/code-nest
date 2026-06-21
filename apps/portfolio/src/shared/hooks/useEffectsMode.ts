"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-effects-mode";

export type EffectsMode = "lite" | "full";

export function getEffectsMode(): EffectsMode {
  if (typeof window === "undefined") return "lite";
  return localStorage.getItem(STORAGE_KEY) === "full" ? "full" : "lite";
}

export function setEffectsMode(mode: EffectsMode) {
  localStorage.setItem(STORAGE_KEY, mode);
  window.dispatchEvent(new CustomEvent("portfolio-effects-mode", { detail: mode }));
}

export function useEffectsMode() {
  const [mode, setMode] = useState<EffectsMode>("lite");

  useEffect(() => {
    queueMicrotask(() => setMode(getEffectsMode()));

    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<EffectsMode>).detail;
      setMode(detail ?? getEffectsMode());
    };

    window.addEventListener("portfolio-effects-mode", onChange);
    return () => window.removeEventListener("portfolio-effects-mode", onChange);
  }, []);

  return mode;
}

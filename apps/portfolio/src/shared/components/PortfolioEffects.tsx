"use client";

import { useReducedMotion } from "@/shared/hooks/useReducedMotion";
import { useEffectsMode } from "@/shared/hooks/useEffectsMode";
import AnimatedBackground from "./AnimatedBackground";
import ParticleField from "./ParticleField";
import CodeMatrix from "./CodeMatrix";
import ScrollProgress from "./ScrollProgress";

/**
 * Lite (default): gradient + mouse glow + scroll bar — best FPS.
 * Full: adds particles + code matrix (localStorage portfolio-effects-mode=full).
 */
export default function PortfolioEffects() {
  const reducedMotion = useReducedMotion();
  const effectsMode = useEffectsMode();

  if (reducedMotion) return null;

  const fullEffects = effectsMode === "full";

  return (
    <>
      <AnimatedBackground />
      {fullEffects && (
        <>
          <ParticleField />
          <CodeMatrix />
        </>
      )}
      <ScrollProgress />
    </>
  );
}

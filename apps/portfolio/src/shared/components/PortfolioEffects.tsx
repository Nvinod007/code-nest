"use client";

import { useReducedMotion } from "@/shared/hooks/useReducedMotion";
import AnimatedBackground from "./AnimatedBackground";
import ParticleField from "./ParticleField";
import CodeMatrix from "./CodeMatrix";
import CursorEffect from "./CursorEffect";
import ScrollProgress from "./ScrollProgress";

/**
 * Renders heavy visual effects only when the user has not requested reduced motion.
 * Keeps the portfolio fast on low-end devices and respects accessibility.
 */
export default function PortfolioEffects() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <>
      <AnimatedBackground />
      <ParticleField />
      <CodeMatrix />
      <CursorEffect />
      <ScrollProgress />
    </>
  );
}

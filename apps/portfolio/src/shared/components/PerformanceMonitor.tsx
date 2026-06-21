"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { getEffectsMode, setEffectsMode, type EffectsMode } from "@/shared/hooks/useEffectsMode";
import {
  formatPerformanceReport,
  logPerformanceSnapshot,
  type PerformanceLogEntry,
} from "@/shared/lib/performance-log";

interface PerformanceStats {
  fps: number;
  memory: number;
  longFrameMs: number;
}

interface PerformanceMemory {
  usedJSHeapSize: number;
}

interface ExtendedPerformance extends Performance {
  memory?: PerformanceMemory;
}

export default function PerformanceMonitor() {
  const [stats, setStats] = useState<PerformanceStats>({
    fps: 0,
    longFrameMs: 0,
    memory: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [effectsMode, setEffectsModeState] = useState<EffectsMode>("lite");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [lastLog, setLastLog] = useState<string>("");
  const lastLogAtRef = useRef(0);

  const toggleMonitor = useCallback(() => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    setIsVisible(newState);
    if (typeof window !== "undefined") {
      localStorage.setItem("performance-monitor-enabled", newState.toString());
    }
  }, [isEnabled]);

  const toggleEffects = useCallback(() => {
    const next: EffectsMode = effectsMode === "lite" ? "full" : "lite";
    setEffectsMode(next);
    setEffectsModeState(next);
  }, [effectsMode]);

  useEffect(() => {
    queueMicrotask(() => {
      const isDev = process.env.NODE_ENV === "development";
      const savedPreference = localStorage.getItem("performance-monitor-enabled");
      const shouldShow = isDev || savedPreference === "true";
      setIsEnabled(shouldShow);
      setIsVisible(shouldShow);
      setEffectsModeState(getEffectsMode());
      setReducedMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    });
  }, []);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "P") {
        e.preventDefault();
        toggleMonitor();
      }
      if (e.ctrlKey && e.shiftKey && e.key === "E") {
        e.preventDefault();
        toggleEffects();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [toggleMonitor, toggleEffects]);

  useEffect(() => {
    if (!isEnabled) return;

    let frameCount = 0;
    let lastTime = performance.now();
    let prevFrameTime = performance.now();
    let animationFrame: number;
    let maxFrameDelta = 0;

    const buildEntry = (fps: number, memory: number): PerformanceLogEntry => ({
      effectsMode: getEffectsMode(),
      fps,
      longFrameMs: Math.round(maxFrameDelta),
      memoryMb: memory,
      reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches,
      ts: new Date().toISOString(),
      viewport: `${window.innerWidth}x${window.innerHeight}`,
    });

    const updateStats = (now: number) => {
      const frameDelta = now - prevFrameTime;
      prevFrameTime = now;
      if (frameDelta > maxFrameDelta) maxFrameDelta = frameDelta;

      frameCount++;

      if (now - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (now - lastTime));
        const memoryInfo = (performance as ExtendedPerformance).memory;
        const memory = memoryInfo?.usedJSHeapSize
          ? Math.round(memoryInfo.usedJSHeapSize / 1048576)
          : 0;

        setStats({ fps, longFrameMs: Math.round(maxFrameDelta), memory });
        setEffectsModeState(getEffectsMode());

        const entry = buildEntry(fps, memory);
        const nowMs = Date.now();
        if (nowMs - lastLogAtRef.current >= 10000 && !document.hidden) {
          lastLogAtRef.current = nowMs;
          const line = logPerformanceSnapshot(entry);
          setLastLog(formatPerformanceReport(entry));
          console.info(`${line}\n(paste this line when reporting perf issues)`);
        }

        maxFrameDelta = 0;
        frameCount = 0;
        lastTime = now;
      }

      animationFrame = requestAnimationFrame(updateStats);
    };

    animationFrame = requestAnimationFrame(updateStats);

    return () => cancelAnimationFrame(animationFrame);
  }, [isEnabled]);

  const copyReport = () => {
    const entry: PerformanceLogEntry = {
      effectsMode: getEffectsMode(),
      fps: stats.fps,
      longFrameMs: stats.longFrameMs,
      memoryMb: stats.memory,
      reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches,
      ts: new Date().toISOString(),
      viewport:
        typeof window !== "undefined"
          ? `${window.innerWidth}x${window.innerHeight}`
          : "unknown",
    };
    const text = lastLog || formatPerformanceReport(entry);
    void navigator.clipboard?.writeText(text);
  };

  if (!isVisible) {
    const isDev = process.env.NODE_ENV === "development";
    const hasBeenUsed =
      typeof window !== "undefined" &&
      localStorage.getItem("performance-monitor-enabled") !== null;

    if (isDev || hasBeenUsed) {
      return (
        <button
          onClick={toggleMonitor}
          className="fixed bottom-4 right-4 z-50 rounded-full border border-gray-600 bg-gray-900/95 p-2 text-xs text-gray-400 transition-all hover:bg-gray-800 hover:text-white"
          title="Show Performance Monitor (Ctrl+Shift+P)"
          type="button"
        >
          ⚡
        </button>
      );
    }

    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-[220px] rounded-lg border border-gray-600 bg-gray-900/95 p-3 font-mono text-xs text-white">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="text-green-400">⚡ Perf</span>
        <button
          type="button"
          className="text-gray-500 hover:text-white"
          onClick={toggleMonitor}
          title="Hide (Ctrl+Shift+P)"
        >
          ✕
        </button>
      </div>
      <div>
        FPS:{" "}
        <span
          className={
            stats.fps < 30
              ? "text-red-400"
              : stats.fps < 50
                ? "text-yellow-400"
                : "text-green-400"
          }
        >
          {stats.fps}
        </span>
      </div>
      {stats.longFrameMs > 20 && (
        <div className="text-orange-400">Spike: {stats.longFrameMs}ms</div>
      )}
      {stats.memory > 0 && (
        <div>
          Memory:{" "}
          <span className={stats.memory > 100 ? "text-red-400" : "text-gray-300"}>
            {stats.memory}MB
          </span>
        </div>
      )}
      <div className="mt-1 text-gray-400">
        Effects:{" "}
        <button
          type="button"
          className="text-blue-300 underline hover:text-blue-200"
          onClick={toggleEffects}
          title="Ctrl+Shift+E"
        >
          {effectsMode}
        </button>
      </div>
      {reducedMotion && (
        <div className="text-yellow-500">Reduced motion on</div>
      )}
      <button
        type="button"
        className="mt-2 w-full rounded border border-gray-600 py-1 text-[10px] text-gray-400 hover:border-gray-500 hover:text-white"
        onClick={copyReport}
      >
        Copy report
      </button>
      <div className="mt-1 text-[10px] text-gray-600">
        P=toggle · E=effects · logs every 10s
      </div>
    </div>
  );
}

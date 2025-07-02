"use client";

import { useEffect, useState } from "react";

interface PerformanceStats {
  fps: number;
  memory: number;
  renderTime: number;
}

interface PerformanceMemory {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

interface ExtendedPerformance extends Performance {
  memory?: PerformanceMemory;
}

export default function PerformanceMonitor() {
  const [stats, setStats] = useState<PerformanceStats>({
    fps: 0,
    memory: 0,
    renderTime: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  // Only show in development
  useEffect(() => {
    const isDev = process.env.NODE_ENV === "development";
    setIsVisible(isDev);

    if (!isDev) return;

    let frameCount = 0;
    let lastTime = performance.now();
    let animationFrame: number;

    const updateStats = () => {
      const currentTime = performance.now();
      frameCount++;

      // Update FPS every second
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));

        setStats(prev => ({
          ...prev,
          fps,
          memory: (() => {
            const memoryInfo = (performance as ExtendedPerformance).memory;
            return memoryInfo?.usedJSHeapSize
              ? Math.round(memoryInfo.usedJSHeapSize / 1048576)
              : 0;
          })(),
          renderTime: Math.round(currentTime - lastTime),
        }));

        frameCount = 0;
        lastTime = currentTime;
      }

      animationFrame = requestAnimationFrame(updateStats);
    };

    updateStats();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-lg border border-gray-600 bg-black/80 p-3 font-mono text-xs text-white backdrop-blur-sm">
      <div className="mb-1 text-green-400">⚡ Performance Monitor</div>
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
      {stats.memory > 0 && (
        <div>
          Memory:{" "}
          <span
            className={stats.memory > 100 ? "text-red-400" : "text-gray-300"}
          >
            {stats.memory}MB
          </span>
        </div>
      )}
      <div className="mt-1 text-xs text-gray-500">Dev Mode Only</div>
    </div>
  );
}

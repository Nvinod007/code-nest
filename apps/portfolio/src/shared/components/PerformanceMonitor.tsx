"use client";

import { useEffect, useState, useCallback } from "react";

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
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleMonitor = useCallback(() => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    setIsVisible(newState);
    if (typeof window !== "undefined") {
      localStorage.setItem("performance-monitor-enabled", newState.toString());
    }
  }, [isEnabled]);

  // Initialize visibility based on environment and localStorage
  useEffect(() => {
    const isDev = process.env.NODE_ENV === "development";
    const savedPreference = typeof window !== "undefined" 
      ? localStorage.getItem("performance-monitor-enabled")
      : null;
    
    // Show by default in dev, or if manually enabled in production
    const shouldShow = isDev || savedPreference === "true";
    setIsEnabled(shouldShow);
    setIsVisible(shouldShow);
  }, []);

  // Toggle functionality with Ctrl+Shift+P
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "P") {
        e.preventDefault();
        toggleMonitor();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [toggleMonitor]);

  useEffect(() => {
    if (!isEnabled) return;

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
  }, [isEnabled]);

  // Show toggle button when monitor is hidden (only in dev or if user has used it before)
  if (!isVisible) {
    const isDev = process.env.NODE_ENV === "development";
    const hasBeenUsed = typeof window !== "undefined" && 
      localStorage.getItem("performance-monitor-enabled") !== null;
    
    if (isDev || hasBeenUsed) {
      return (
        <button
          onClick={toggleMonitor}
          className="fixed bottom-4 right-4 z-50 rounded-full border border-gray-600 bg-black/80 p-2 text-xs text-gray-400 backdrop-blur-sm transition-all hover:bg-gray-800 hover:text-white"
          title="Show Performance Monitor (Ctrl+Shift+P)"
        >
          ⚡
        </button>
      );
    }
    
    return null;
  }

  return (
    <div 
      className="fixed bottom-4 right-4 z-50 cursor-pointer rounded-lg border border-gray-600 bg-black/80 p-3 font-mono text-xs text-white backdrop-blur-sm transition-opacity hover:opacity-80"
      onClick={toggleMonitor}
      title="Click to hide or press Ctrl+Shift+P to toggle"
    >
      <div className="mb-1 flex items-center justify-between">
        <span className="text-green-400">⚡ Performance Monitor</span>
        <span className="text-gray-500">✕</span>
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
      <div className="mt-1 text-xs text-gray-500">Ctrl+Shift+P to toggle</div>
    </div>
  );
}

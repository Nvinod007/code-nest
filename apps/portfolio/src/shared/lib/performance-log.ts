export type PerformanceLogEntry = {
  ts: string;
  fps: number;
  memoryMb: number;
  effectsMode: "lite" | "full";
  reducedMotion: boolean;
  longFrameMs: number;
  viewport: string;
};

const LOG_PREFIX = "[portfolio-perf]";

export function logPerformanceSnapshot(entry: PerformanceLogEntry) {
  const line = `${LOG_PREFIX} ${JSON.stringify(entry)}`;
  console.info(line);
  return line;
}

export function formatPerformanceReport(entry: PerformanceLogEntry): string {
  return [
    "Portfolio performance snapshot",
    `time: ${entry.ts}`,
    `fps: ${entry.fps}`,
    `memory: ${entry.memoryMb}MB`,
    `effects: ${entry.effectsMode}`,
    `reducedMotion: ${entry.reducedMotion}`,
    `longFrame: ${entry.longFrameMs}ms`,
    `viewport: ${entry.viewport}`,
  ].join("\n");
}

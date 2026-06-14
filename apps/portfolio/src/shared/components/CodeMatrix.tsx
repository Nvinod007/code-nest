"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { portfolioData } from "@/config/portfolio-data";

export default function CodeMatrix() {
  const { personal } = portfolioData;
  const [isMounted, setIsMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  if (!isMounted || prefersReducedMotion) return null;

  return (
    <div className="-z-15 pointer-events-none fixed right-0 top-0 h-full w-60 overflow-hidden opacity-[0.03]">
      <div className="space-y-4 p-8 font-mono text-xs text-blue-300">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          const developer = &quot;{personal.name.split(' ')[0]}&quot;
        </motion.div>
        <motion.div
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ delay: 1, duration: 6, repeat: Infinity }}
        >
          function buildAmazing()
        </motion.div>
        <motion.div
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ delay: 2, duration: 5, repeat: Infinity }}
        >
          return &lt;Portfolio /&gt;
        </motion.div>
      </div>
    </div>
  );
}

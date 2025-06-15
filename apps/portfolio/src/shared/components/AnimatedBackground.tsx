"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Much More Dramatic Gradient Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-pink-900/20" />

        {/* Animated gradients */}
        <motion.div
          className="absolute inset-0 opacity-60"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3), transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(119, 198, 255, 0.3), transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        {/* Mouse follower */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.4), transparent 70%)`,
          }}
        />
      </div>

      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute left-0 top-0 h-full w-full"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, #ff6b6b 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, #4ecdc4 0%, transparent 50%),
              radial-gradient(circle at 75% 25%, #45b7d1 0%, transparent 50%),
              radial-gradient(circle at 25% 75%, #f9ca24 0%, transparent 50%)
            `,
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}

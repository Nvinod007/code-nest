"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ParticleField() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Modern Geometric Shapes */}
      <motion.div
        className="absolute right-20 top-20 h-32 w-32 opacity-20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div className="h-full w-full rotate-12 transform rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 blur-sm" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-16 h-24 w-24 opacity-15"
        animate={{
          rotate: [0, -180, -360],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <div className="h-full w-full rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur-sm" />
      </motion.div>

      <motion.div
        className="absolute left-1/3 top-1/2 h-16 w-16 opacity-25"
        animate={{
          rotate: [0, 180, 360],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <div className="h-full w-full rotate-45 transform rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 blur-sm" />
      </motion.div>

      {/* Floating Dots */}
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 8}%`,
            top: `${20 + Math.sin(i) * 60}%`,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            y: [-15, 15, -15],
          }}
          transition={{
            delay: i * 0.2,
            duration: 3 + i * 0.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <div className="h-3 w-3 rounded-full bg-white/40 blur-sm" />
        </motion.div>
      ))}
    </div>
  );
}

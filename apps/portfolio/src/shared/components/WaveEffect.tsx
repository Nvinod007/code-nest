"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WaveEffect() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="-z-10 pointer-events-none fixed inset-0 overflow-hidden">
      {/* Animated Waves */}
      <motion.div
        className="absolute bottom-0 left-0 h-64 w-full"
        style={{
          background: `
            linear-gradient(0deg, 
              rgba(59, 130, 246, 0.1) 0%, 
              rgba(147, 51, 234, 0.05) 50%, 
              transparent 100%
            )
          `,
          clipPath: "polygon(0 50%, 100% 80%, 100% 100%, 0% 100%)",
        }}
        animate={{
          clipPath: [
            "polygon(0 50%, 100% 80%, 100% 100%, 0% 100%)",
            "polygon(0 80%, 100% 50%, 100% 100%, 0% 100%)",
            "polygon(0 50%, 100% 80%, 100% 100%, 0% 100%)",
          ],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 h-48 w-full"
        style={{
          background: `
            linear-gradient(0deg, 
              rgba(236, 72, 153, 0.08) 0%, 
              rgba(59, 130, 246, 0.04) 50%, 
              transparent 100%
            )
          `,
          clipPath: "polygon(0 80%, 100% 60%, 100% 100%, 0% 100%)",
        }}
        animate={{
          clipPath: [
            "polygon(0 80%, 100% 60%, 100% 100%, 0% 100%)",
            "polygon(0 60%, 100% 90%, 100% 100%, 0% 100%)",
            "polygon(0 80%, 100% 60%, 100% 100%, 0% 100%)",
          ],
        }}
        transition={{
          delay: 2,
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
}

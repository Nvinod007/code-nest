"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.classList.contains("cursor-pointer")
      );
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="pointer-events-none fixed z-50 h-6 w-6 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          damping: 28,
          stiffness: 500,
          type: "spring",
        }}
      >
        <div className="h-full w-full rounded-full bg-white opacity-80" />
      </motion.div>

      {/* Cursor Trail */}
      <motion.div
        className="pointer-events-none fixed z-40 h-1 w-1"
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
        }}
      >
        <div className="h-full w-full rounded-full bg-blue-400 opacity-60" />
      </motion.div>
    </>
  );
}
